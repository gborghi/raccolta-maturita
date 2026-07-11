import { FullSlug, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"

// @ts-ignore
import spaRouterScript from "../../components/scripts/spa.inline"
// @ts-ignore
import popoverScript from "../../components/scripts/popover.inline"
// ── maturità custom client scripts (each self-registers on the "nav" event) ──
// @ts-ignore
import cercaScript from "../../components/scripts/cerca.inline"
// @ts-ignore
import pagedListScript from "../../components/scripts/pagedList.inline"
// @ts-ignore
import simzanGateScript from "../../components/scripts/simzanGate.inline"
import styles from "../../styles/custom.scss"
import popoverStyle from "../../components/styles/popover.scss"
import { BuildCtx } from "../../util/ctx"
import { QuartzComponent } from "../../components/types"
import { componentRegistry } from "../../components/registry"
import {
  googleFontHref,
  googleFontSubsetHref,
  joinStyles,
  processGoogleFonts,
} from "../../util/theme"
import { Features, transform } from "lightningcss"
import { transform as transpile } from "esbuild"
import { write } from "./helpers"

type ComponentResources = {
  css: string[]
  beforeDOMLoaded: string[]
  afterDOMLoaded: string[]
}

function getComponentResources(ctx: BuildCtx): ComponentResources {
  const allComponents: Set<QuartzComponent> = new Set()

  for (const emitter of ctx.cfg.plugins.emitters) {
    const components = emitter.getQuartzComponents?.(ctx) ?? []
    for (const component of components) {
      allComponents.add(component)
    }
  }

  for (const component of componentRegistry.getAllComponents()) {
    allComponents.add(component)
  }

  const componentResources = {
    css: new Set<string>(),
    beforeDOMLoaded: new Set<string>(),
    afterDOMLoaded: new Set<string>(),
  }

  function normalizeResource(resource: string | string[] | undefined): string[] {
    if (!resource) return []
    if (Array.isArray(resource)) return resource
    return [resource]
  }

  for (const component of allComponents) {
    const { css, beforeDOMLoaded, afterDOMLoaded } = component
    const normalizedCss = normalizeResource(css)
    const normalizedBeforeDOMLoaded = normalizeResource(beforeDOMLoaded)
    const normalizedAfterDOMLoaded = normalizeResource(afterDOMLoaded)

    normalizedCss.forEach((c) => componentResources.css.add(c))
    normalizedBeforeDOMLoaded.forEach((b) => componentResources.beforeDOMLoaded.add(b))
    normalizedAfterDOMLoaded.forEach((a) => componentResources.afterDOMLoaded.add(a))
  }

  return {
    css: [...componentResources.css],
    beforeDOMLoaded: [...componentResources.beforeDOMLoaded],
    afterDOMLoaded: [...componentResources.afterDOMLoaded],
  }
}

async function joinScripts(scripts: string[]): Promise<string> {
  // wrap with iife to prevent scope collision
  const script = scripts.map((script) => `(function () {${script}})();`).join("\n")

  // minify with esbuild
  const res = await transpile(script, {
    minify: true,
  })

  return res.code
}

function addGlobalPageResources(ctx: BuildCtx, componentResources: ComponentResources) {
  const cfg = ctx.cfg.configuration

  // popovers
  if (cfg.enablePopovers) {
    componentResources.afterDOMLoaded.push(popoverScript)
    componentResources.css.push(popoverStyle)
  }

  if (cfg.analytics?.provider === "google") {
    const tagId = cfg.analytics.tagId
    componentResources.afterDOMLoaded.push(`
      const gtagScript = document.createElement('script');
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=${tagId}';
      gtagScript.defer = true;
      gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', '${tagId}', { send_page_view: false });
        gtag('event', 'page_view', { page_title: document.title, page_location: location.href });
        document.addEventListener('nav', () => {
          gtag('event', 'page_view', { page_title: document.title, page_location: location.href });
        });
      };
      
      document.head.appendChild(gtagScript);
    `)
  } else if (cfg.analytics?.provider === "plausible") {
    const plausibleHost = cfg.analytics.host ?? "https://plausible.io"
    componentResources.afterDOMLoaded.push(`
      const plausibleScript = document.createElement('script');
      plausibleScript.src = '${plausibleHost}/js/script.manual.js';
      plausibleScript.setAttribute('data-domain', location.hostname);
      plausibleScript.defer = true;
      plausibleScript.onload = () => {
        window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
        plausible('pageview');
        document.addEventListener('nav', () => {
          plausible('pageview');
        });
      };

      document.head.appendChild(plausibleScript);
    `)
  } else if (cfg.analytics?.provider === "umami") {
    componentResources.afterDOMLoaded.push(`
      const umamiScript = document.createElement("script");
      umamiScript.src = "${cfg.analytics.host ?? "https://analytics.umami.is"}/script.js";
      umamiScript.setAttribute("data-website-id", "${cfg.analytics.websiteId}");
      umamiScript.setAttribute("data-auto-track", "true");
      umamiScript.defer = true;

      document.head.appendChild(umamiScript);
    `)
  } else if (cfg.analytics?.provider === "goatcounter") {
    componentResources.afterDOMLoaded.push(`
      const goatcounterScriptPre = document.createElement('script');
      goatcounterScriptPre.textContent = \`
        window.goatcounter = { no_onload: true };
      \`;
      document.head.appendChild(goatcounterScriptPre);

      const endpoint = "https://${cfg.analytics.websiteId}.${cfg.analytics.host ?? "goatcounter.com"}/count";
      const goatcounterScript = document.createElement('script');
      goatcounterScript.src = "${cfg.analytics.scriptSrc ?? "https://gc.zgo.at/count.js"}";
      goatcounterScript.defer = true;
      goatcounterScript.setAttribute('data-goatcounter', endpoint);
      goatcounterScript.onload = () => {
        window.goatcounter.endpoint = endpoint;
        goatcounter.count({ path: location.pathname });
        document.addEventListener('nav', () => {
          goatcounter.count({ path: location.pathname });
        });
      };

      document.head.appendChild(goatcounterScript);
    `)
  } else if (cfg.analytics?.provider === "posthog") {
    componentResources.afterDOMLoaded.push(`
      const posthogScript = document.createElement("script");
      posthogScript.innerHTML= \`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('${cfg.analytics.apiKey}', {
        api_host: '${cfg.analytics.host ?? "https://app.posthog.com"}',
        capture_pageview: false,
      });
      document.addEventListener('nav', () => {
        posthog.capture('$pageview', { path: location.pathname });
      })\`

      document.head.appendChild(posthogScript);
    `)
  } else if (cfg.analytics?.provider === "tinylytics") {
    const siteId = cfg.analytics.siteId
    componentResources.afterDOMLoaded.push(`
      const tinylyticsScript = document.createElement('script');
      tinylyticsScript.src = 'https://tinylytics.app/embed/${siteId}.js?spa';
      tinylyticsScript.defer = true;
      tinylyticsScript.onload = () => {
        window.tinylytics.triggerUpdate();
        document.addEventListener('nav', () => {
          window.tinylytics.triggerUpdate();
        });
      };
      
      document.head.appendChild(tinylyticsScript);
    `)
  } else if (cfg.analytics?.provider === "cabin") {
    componentResources.afterDOMLoaded.push(`
      const cabinScript = document.createElement("script")
      cabinScript.src = "${cfg.analytics.host ?? "https://scripts.withcabin.com"}/hello.js"
      cabinScript.defer = true
      document.head.appendChild(cabinScript)
    `)
  } else if (cfg.analytics?.provider === "clarity") {
    componentResources.afterDOMLoaded.push(`
      const clarityScript = document.createElement("script")
      clarityScript.innerHTML= \`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.defer=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${cfg.analytics.projectId}");\`
      document.head.appendChild(clarityScript)
    `)
  } else if (cfg.analytics?.provider === "matomo") {
    componentResources.afterDOMLoaded.push(`
      const matomoScript = document.createElement("script");
      matomoScript.innerHTML = \`
      let _paq = window._paq = window._paq || [];

      // Track SPA navigation
      // https://developer.matomo.org/guides/spa-tracking
      document.addEventListener("nav", () => {
        _paq.push(['setCustomUrl', location.pathname]);
        _paq.push(['setDocumentTitle', document.title]);
        _paq.push(['trackPageView']);
      });

      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        const u="//${cfg.analytics.host}/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', ${cfg.analytics.siteId}]);
        const d=document, g=d.createElement('script'), s=d.getElementsByTagName
('script')[0];
        g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
      \`
      document.head.appendChild(matomoScript);
    `)
  } else if (cfg.analytics?.provider === "vercel") {
    /**
     * script from {@link https://vercel.com/docs/analytics/quickstart?framework=html#add-the-script-tag-to-your-site|Vercel Docs}
     */
    componentResources.beforeDOMLoaded.push(`
      window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    `)
    componentResources.afterDOMLoaded.push(`
      const vercelInsightsScript = document.createElement("script")
      vercelInsightsScript.src = "/_vercel/insights/script.js"
      vercelInsightsScript.defer = true
      document.head.appendChild(vercelInsightsScript)
    `)
  } else if (cfg.analytics?.provider === "rybbit") {
    componentResources.afterDOMLoaded.push(`
      const rybbitScript = document.createElement("script");
      rybbitScript.src = "${cfg.analytics.host ?? "https://app.rybbit.io"}/api/script.js";
      rybbitScript.setAttribute("data-site-id", "${cfg.analytics.siteId}");
      rybbitScript.async = true;
      rybbitScript.defer = true;

      document.head.appendChild(rybbitScript);
    `)
  }

  // ── maturità custom scripts: push BEFORE the SPA router so their "nav"
  // listeners are registered before the first "nav" dispatch ──
  componentResources.afterDOMLoaded.push(cercaScript, pagedListScript, simzanGateScript)
  // App-shell chrome driver: publish --navbar-h (== topbar height) so the sticky
  // side rails offset correctly, drive the rail expand/collapse toggle, and mark
  // the active rail link for the current section.
  componentResources.afterDOMLoaded.push(`
    function __setNavH(){
      var t = document.querySelector('.m-topbar');
      var h = t ? t.offsetHeight : 0;
      if (h) document.documentElement.style.setProperty('--navbar-h', h + 'px');
    }
    function __railInit(){
      var btn = document.querySelector('[data-rail-toggle]');
      if (!btn || btn.__wired) return; btn.__wired = true;
      try { if (localStorage.getItem('rgf-rail-open') === '1') document.body.classList.add('rail-open'); } catch(e){}
      var sync = function(){
        var open = document.body.classList.contains('rail-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.setAttribute('aria-label', open ? 'Comprimi menu' : 'Espandi menu');
        btn.setAttribute('title', open ? 'Comprimi menu' : 'Espandi menu');
        var lbl = btn.querySelector('.m-rail-lbl'); if (lbl) lbl.textContent = open ? 'Comprimi' : 'Espandi';
      };
      sync();
      btn.addEventListener('click', function(){
        var open = document.body.classList.toggle('rail-open');
        try { localStorage.setItem('rgf-rail-open', open ? '1' : '0'); } catch(e){}
        sync();
      });
    }
    function __markActive(){
      // basepath-relative slug of the current page (drop the GH-Pages project prefix)
      var bp = (document.body && document.body.dataset.basepath) || '';
      var path = location.pathname;
      if (bp && path.indexOf(bp) === 0) path = path.slice(bp.length);
      var seg = path.replace(/^\\/+/, '').split('/')[0].replace(/\\.html$/, '');
      document.querySelectorAll('[data-nav-slug]').forEach(function(a){
        var slug = a.getAttribute('data-nav-slug');
        var on = slug === '' ? (seg === '' || seg === 'index') : (seg.toLowerCase() === slug.toLowerCase());
        a.classList.toggle('active', on);
      });
    }
    function __chrome(){ __setNavH(); __railInit(); __markActive(); }
    __chrome();
    window.addEventListener('resize', __setNavH);
    document.addEventListener('nav', __chrome);
  `)
  // Rail graph toggle + /statistiche dashboard renderer. Both re-run on SPA nav.
  componentResources.afterDOMLoaded.push(`
    // ── rail "Vista grafo" toggle: show the button only where a graph exists,
    //    and on click open the fullscreen global graph (fallback: scroll the
    //    local right-rail graph into view). ──
    function __graphBtn(){
      var btn = document.querySelector('[data-graph-toggle]');
      if (!btn) return;
      var has = document.querySelector('.global-graph-icon, .sidebar.right .graph, .graph');
      btn.hidden = !has;
      if (has && !btn.__wired){
        btn.__wired = true;
        btn.addEventListener('click', function(){
          var gg = document.querySelector('.global-graph-icon');
          if (gg){ gg.click(); return; }
          var g = document.querySelector('.sidebar.right .graph') || document.querySelector('.graph');
          if (g) g.scrollIntoView({ behavior:'smooth', block:'center' });
        });
      }
    }
    // ── /statistiche renderer (interactive bar/stack/heatmap charts, no libs) ──
    var __PAL=['#FF6D00','#E85D00','#3a6ea5','#1E8449','#8E44AD','#D4AC0D','#16A085','#C0392B'];
    var __S=null, __evoHidden={};
    function __esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
    function __fmt(n){ try { return (n||0).toLocaleString('it-IT'); } catch(e){ return ''+(n||0); } }
    function __tipEl(){ var t=document.getElementById('__sttip'); if(!t){ t=document.createElement('div'); t.id='__sttip'; t.className='sttip'; document.body.appendChild(t); } return t; }
    function __tipShow(html,ev){ var t=__tipEl(); t.innerHTML=html; t.style.opacity='1'; var x=ev.clientX+14, y=ev.clientY+14; if(x+220>window.innerWidth) x=ev.clientX-220; t.style.left=x+'px'; t.style.top=y+'px'; }
    function __tipHide(){ var t=document.getElementById('__sttip'); if(t) t.style.opacity='0'; }
    function __kpis(s){
      var k=[['Problemi & quesiti',s.total],['Problemi',s.byType.problema],['Quesiti',s.byType.quesito],['Prove intere',s.proveIntere],['Anni coperti',s.counts.years],['Cluster',s.counts.clusters],['Argomenti',s.counts.topics],['Metodi',s.counts.methods],['Competenze',s.counts.skills]];
      return '<div class="stkpis">'+k.map(function(x){return '<div class="stkpi"><b>'+__fmt(x[1])+'</b><span>'+__esc(x[0])+'</span></div>';}).join('')+'</div>';
    }
    function __lbl(x){ var name=__esc(x[0]); return x[2] ? '<a class="stbar-l" href="'+__esc(x[2])+'" title="'+name+'">'+name+'</a>' : '<span class="stbar-l" title="'+name+'">'+name+'</span>'; }
    function __hbars(items,cls){
      if(!items||!items.length) return '';
      var max=Math.max.apply(null,items.map(function(x){return x[1];}));
      return '<div class="stbars '+(cls||'')+'">'+items.map(function(x){
        var w=max?Math.max(3,Math.round(x[1]/max*100)):0;
        return '<div class="stbar">'+__lbl(x)+'<span class="stbar-t"><span class="stbar-f" style="width:'+w+'%"></span></span><span class="stbar-n">'+__fmt(x[1])+'</span></div>';
      }).join('')+'</div>';
    }
    // stacked per-year bars: [year, problemi, quesiti]
    function __yearChart(items){
      if(!items||!items.length) return '';
      var max=Math.max.apply(null,items.map(function(x){return x[1]+x[2];}));
      var bars=items.map(function(x){
        var tot=x[1]+x[2], hp=max?(x[1]/max*100):0, hq=max?(x[2]/max*100):0, lab=(Number(x[0])%10===0)?x[0]:'';
        var tip='<b>'+__esc(x[0])+'</b><br>'+x[1]+' problemi · '+x[2]+' quesiti<br>'+tot+' totali';
        return '<div class="styear" data-tip="'+__esc(tip).replace(/"/g,"&quot;")+'"><span class="styear-stack"><span class="styear-q" style="height:'+hq+'%"></span><span class="styear-p" style="height:'+hp+'%"></span></span><span class="styear-x">'+lab+'</span></div>';
      }).join('');
      return '<div class="stlegend"><span><i style="background:var(--accent-orange)"></i>Problemi</span><span><i style="background:var(--accent-teal)"></i>Quesiti</span></div>'
        + '<div class="styears-wrap"><div class="styears">'+bars+'</div></div>';
    }
    // stacked topic composition per decade, with toggleable legend
    function __evoHTML(){
      var td=__S.topicDecade, dec=td.decades, tops=td.topics;
      var vis=tops.map(function(t,i){return i;}).filter(function(i){return !__evoHidden[tops[i]];});
      var cols=dec.map(function(d,di){
        var sum=vis.reduce(function(a,i){return a+td.matrix[i][di];},0)||1;
        var segs=vis.map(function(i){
          var v=td.matrix[i][di], h=v/sum*100; if(v===0) return '';
          var tip='<b>'+__esc(tops[i])+'</b><br>'+__esc(d+'')+'s: '+v+' ('+Math.round(h)+'%)';
          return '<span class="evo-seg" style="height:'+h+'%;background:'+__PAL[i%8]+'" data-tip="'+__esc(tip).replace(/"/g,"&quot;")+'"></span>';
        }).join('');
        return '<div class="evo-col"><div class="evo-stack">'+segs+'</div><span class="evo-x">'+__esc(d+'')+'</span></div>';
      }).join('');
      var leg=tops.map(function(t,i){
        return '<button type="button" class="evo-leg'+(__evoHidden[t]?' off':'')+'" data-evo-toggle="'+__esc(t)+'"><i style="background:'+__PAL[i%8]+'"></i>'+__esc(t)+'</button>';
      }).join('');
      return '<div class="evo-legend">'+leg+'</div><div class="evo-chart">'+cols+'</div>';
    }
    // heatmap topic × decade (per-row normalized)
    function __heatHTML(){
      var td=__S.topicDecade, dec=td.decades, tops=td.topics;
      var head='<div class="heat-row heat-head"><span class="heat-lbl"></span>'+dec.map(function(d){return '<span class="heat-cell heat-hx">'+String(d).slice(2)+'</span>';}).join('')+'</div>';
      var rows=tops.map(function(t,i){
        var row=td.matrix[i], rmax=Math.max.apply(null,row)||1;
        var cells=row.map(function(v,di){
          var a=v/rmax, tip='<b>'+__esc(t)+'</b><br>'+__esc(dec[di]+'')+'s: '+v;
          return '<span class="heat-cell" style="background:rgba(232,93,0,'+(v?0.12+a*0.88:0).toFixed(3)+')" data-tip="'+__esc(tip).replace(/"/g,"&quot;")+'">'+(v||'')+'</span>';
        }).join('');
        return '<div class="heat-row"><span class="heat-lbl" title="'+__esc(t)+'">'+__esc(t)+'</span>'+cells+'</div>';
      }).join('');
      return '<div class="heat-wrap"><div class="heat">'+head+rows+'</div></div>';
    }
    function __formats(items){
      return '<div class="stformats">'+items.map(function(x,i){
        return '<div class="stfmt"><span class="stfmt-era">'+__esc(x[0])+'</span><span class="stfmt-dot" style="background:'+__PAL[i%8]+'"></span><span class="stfmt-lbl">'+__esc(x[1])+'</span></div>';
      }).join('')+'</div>';
    }
    function __sec(t,body,note){ return '<section class="stsec"><h2>'+__esc(t)+'</h2>'+(note?'<p class="stnote">'+note+'</p>':'')+body+'</section>'; }
    function __two(a,b){ return '<div class="sttwo">'+a+b+'</div>'; }
    function __statsHTML(s){
      return __kpis(s)
        + __sec('Problemi e quesiti per anno', __yearChart(s.byYearType), 'Ogni barra è un anno d’esame; passa il mouse per il dettaglio. Le prove ante 1999 provengono dalla raccolta Battaia–Suppa.')
        + __sec('Evoluzione degli argomenti per decennio', '<div id="evo-root">'+__evoHTML()+'</div>', 'Composizione percentuale degli 8 argomenti più frequenti. Clicca una voce in legenda per escluderla.')
        + __sec('Mappa di calore: argomenti × decennio', __heatHTML())
        + __two(__sec('Argomenti più ricorrenti', __hbars(s.topTopics)), __sec('Metodi più ricorrenti', __hbars(s.topMethods)))
        + __two(__sec('Competenze più ricorrenti', __hbars(s.topSkills)), __sec('Tipi di funzione', __hbars(s.topFtypes)))
        + __two(__sec('Cluster tematici', __hbars(s.clusters)), __sec('Per area', __hbars(s.byArea)))
        + __sec('Evoluzione del formato della prova', __formats(s.formats));
    }
    function __statsBind(root){
      if(root.__bound) return; root.__bound=true;
      root.addEventListener('mousemove', function(e){ var el=e.target.closest && e.target.closest('[data-tip]'); if(el) __tipShow(el.getAttribute('data-tip'), e); else __tipHide(); });
      root.addEventListener('mouseleave', __tipHide);
      root.addEventListener('click', function(e){ var b=e.target.closest && e.target.closest('[data-evo-toggle]'); if(!b) return; e.preventDefault(); var t=b.getAttribute('data-evo-toggle'); __evoHidden[t]=!__evoHidden[t]; var er=document.getElementById('evo-root'); if(er) er.innerHTML=__evoHTML(); });
    }
    function __renderStats(){
      var root=document.getElementById('stats-root');
      if(!root || root.__done) return; root.__done=true;
      var slug=(document.body && document.body.dataset.slug)||'';
      var prefix='../'.repeat((slug.match(/\\//g)||[]).length);
      fetch(prefix+'static/stats.json').then(function(r){return r.json();}).then(function(s){
        __S=s; __evoHidden={}; root.innerHTML=__statsHTML(s); __statsBind(root);
      }).catch(function(){ root.innerHTML='<p class="stats-loading">Impossibile caricare le statistiche.</p>'; });
    }
    function __statsGraph(){ __graphBtn(); __renderStats(); }
    __statsGraph();
    document.addEventListener('nav', function(){ __tipHide(); __statsGraph(); });
  `)
  // i18n tweak without forking the shared graph plugin: rename the panel title
  // "Vista grafico" -> "Vista grafo" in the DOM on every SPA navigation.
  componentResources.afterDOMLoaded.push(`
    function __renameGrafo(){
      document.querySelectorAll('h3').forEach(function(h){
        if (h.textContent.trim() === 'Vista grafico') h.textContent = 'Vista grafo';
      });
    }
    __renameGrafo();
    document.addEventListener('nav', __renameGrafo);
  `)

  if (cfg.enableSPA) {
    componentResources.afterDOMLoaded.push(spaRouterScript)
  } else {
    componentResources.afterDOMLoaded.push(`
      window.spaNavigate = (url, _) => window.location.assign(url)
      window.addCleanup = () => {}
      const event = new CustomEvent("nav", { detail: { url: document.body.dataset.slug } })
      document.dispatchEvent(event)
    `)
  }
}

// This emitter should not update the `resources` parameter. If it does, partial
// rebuilds may not work as expected.
export const ComponentResources: QuartzEmitterPlugin = () => {
  return {
    name: "ComponentResources",
    async *emit(ctx, _content, _resources) {
      const cfg = ctx.cfg.configuration
      // component specific scripts and styles
      const componentResources = getComponentResources(ctx)
      let googleFontsStyleSheet = ""
      if (cfg.theme.fontOrigin === "local") {
        // let the user do it themselves in css
      } else if (cfg.theme.fontOrigin === "googleFonts" && !cfg.theme.cdnCaching) {
        // when cdnCaching is true, we link to google fonts in Head.tsx
        const theme = ctx.cfg.configuration.theme
        const response = await fetch(googleFontHref(theme))
        googleFontsStyleSheet = await response.text()

        if (theme.typography.title) {
          const title = ctx.cfg.configuration.pageTitle
          const response = await fetch(googleFontSubsetHref(theme, title))
          googleFontsStyleSheet += `\n${await response.text()}`
        }

        if (!cfg.baseUrl) {
          throw new Error(
            "baseUrl must be defined when using Google Fonts without cfg.theme.cdnCaching",
          )
        }

        const { processedStylesheet, fontFiles } = await processGoogleFonts(
          googleFontsStyleSheet,
          cfg.baseUrl,
        )
        googleFontsStyleSheet = processedStylesheet

        // Download and save font files
        for (const fontFile of fontFiles) {
          const res = await fetch(fontFile.url)
          if (!res.ok) {
            throw new Error(`Failed to fetch font ${fontFile.filename}`)
          }

          const buf = await res.arrayBuffer()
          yield write({
            ctx,
            slug: joinSegments("static", "fonts", fontFile.filename) as FullSlug,
            ext: `.${fontFile.extension}`,
            content: Buffer.from(buf),
          })
        }
      }

      // important that this goes *after* component scripts
      // as the "nav" event gets triggered here and we should make sure
      // that everyone else had the chance to register a listener for it
      addGlobalPageResources(ctx, componentResources)

      const stylesheet = joinStyles(
        ctx.cfg.configuration.theme,
        googleFontsStyleSheet,
        ...componentResources.css,
        styles,
      )

      const [prescript, postscript] = await Promise.all([
        joinScripts(componentResources.beforeDOMLoaded),
        joinScripts(componentResources.afterDOMLoaded),
      ])

      yield write({
        ctx,
        slug: "index" as FullSlug,
        ext: ".css",
        content: transform({
          filename: "index.css",
          code: Buffer.from(stylesheet),
          minify: true,
          targets: {
            safari: (15 << 16) | (6 << 8), // 15.6
            ios_saf: (15 << 16) | (6 << 8), // 15.6
            edge: 115 << 16,
            firefox: 102 << 16,
            chrome: 109 << 16,
          },
          include: Features.MediaQueries,
        }).code.toString(),
      })

      yield write({
        ctx,
        slug: "prescript" as FullSlug,
        ext: ".js",
        content: prescript,
      })

      yield write({
        ctx,
        slug: "postscript" as FullSlug,
        ext: ".js",
        content: postscript,
      })
    },
    async *partialEmit() {},
  }
}
