

**Problema:** [[Problemi/prob_2003_americhe_emisfero_boreale_2003_sessione_suppletiva_problema2_57_1|2003 Americhe Boreale Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_americhe_emisfero_boreale_2003_sessione_suppletiva_problema2_57|2003 Americhe Boreale Suppletiva — Problema 2]]

Su una semicirconferenza di centro $O$ e diametro $AB$ lungo $2r$ si consideri un punto $P$. Parallelamente alla retta $AP$ si conduce la tangente alla semicirconferenza, con punto di contatto $M$; sia $Q$ il punto d'intersezione di questa tangente con quella condotta per $P$. Posto $x=\widehat{PAB}$ (con $0\le x<\dfrac{\pi}{2}$), si esprimano l'area $S'$ del triangolo $AOP$ e l'area $S''$ del quadrilatero $OPQM$, si studi il rapporto $f(t)=\dfrac{S'}{S''}$ con $t=\tan\dfrac{x}{2}$ e se ne disegni il grafico.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="209.008" height="148.692" viewBox="-72 -72 156.756 111.519"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-65.17 25.55H77.093M77.093 25.55c0-39.286-31.846-71.132-71.132-71.132-39.285 0-71.131 31.846-71.131 71.132"/><path fill="#e1e1ff" stroke="none" d="M-65.187 25.55H5.961l35.575-61.614Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-65.187 25.55 41.536-36.064"/><path fill="none" d="m5.961 25.55 35.575-61.614M5.961 25.55l-35.574-61.614"/><path fill="none" stroke="red" stroke-width=".8" d="M41.536-36.064 5.96-56.626l-35.574 20.562"/><path fill="none" stroke-dasharray="3.0,3.0" d="M5.961 25.55v-82.176"/><path stroke="none" d="M-63.187 25.55a2 2 0 1 0-4 0 2 2 0 0 0 4 0M79.11 25.55a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7.961 25.55a2 2 0 1 0-4 0 2 2 0 0 0 4 0M43.536-36.064a2 2 0 1 0-4 0 2 2 0 0 0 4 0M-27.613-36.064a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7.961-56.626a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="5.961" y="25.55" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-74.898 10.366)">A</text><text x="5.961" y="25.55" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.105 10.366)">B</text><text x="5.961" y="25.55" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><text x="5.961" y="25.55" stroke="none" font-family="cmmi10" font-size="10" transform="translate(39.107 -58.198)">P</text><text x="5.961" y="25.55" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-49.899 -58.198)">M</text><text x="5.961" y="25.55" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 -87.654)">Q</text></g></svg>
</figure>

## a)

Nel triangolo $AOP$ si ha $\overline{AO}=\overline{OP}=r$: è isoscele sulla base $AP$. Poiché $O$ appartiene ad $AB$, l'angolo alla base vale $\widehat{OAP}=x$, dunque anche $\widehat{OPA}=x$ e l'angolo al centro è

$$\widehat{AOP}=\pi-2x.$$

L'area è quindi

$$S'=\frac{1}{2}\,\overline{AO}\cdot\overline{OP}\cdot\operatorname{sen}\widehat{AOP}=\frac{1}{2}\,r^{2}\operatorname{sen}(\pi-2x)=\frac{1}{2}\,r^{2}\operatorname{sen}(2x),$$

con $0\le x<\dfrac{\pi}{2}$.

## b)

$\overline{OM}$ è perpendicolare a $MQ$ e $\overline{OP}$ è perpendicolare a $PQ$ (raggi nei punti di tangenza); inoltre $\overline{MQ}=\overline{QP}$ (segmenti di tangente da $Q$). Perciò l'area $S''$ è il doppio dell'area del triangolo rettangolo $OMQ$.

Poiché la retta $AP$ è parallela a $MQ$ e $\overline{OM}\perp MQ$, risulta $\overline{OM}\perp AP$: nel triangolo isoscele $AOP$ il segmento $OM$ è quindi altezza e bisettrice, da cui

$$\widehat{MOP}=\frac{1}{2}\widehat{AOP}=\frac{\pi}{2}-x.$$

Per una nota proprietà $OQ$ è bisettrice dell'angolo $\widehat{MOP}$, dunque

$$\widehat{MOQ}=\frac{1}{2}\left(\frac{\pi}{2}-x\right)=\frac{\pi}{4}-\frac{x}{2}.$$

Essendo $\overline{OM}=r$,

$$\overline{MQ}=\overline{OM}\,\tan\!\left(\frac{\pi}{4}-\frac{x}{2}\right)=r\,\tan\!\left(\frac{\pi}{4}-\frac{x}{2}\right),$$

quindi

$$\text{Area}(OMQ)=\frac{1}{2}\,\overline{OM}\cdot\overline{MQ}=\frac{1}{2}\,r^{2}\tan\!\left(\frac{\pi}{4}-\frac{x}{2}\right),$$

e infine

$$S''=2\,\text{Area}(OMQ)=r^{2}\tan\!\left(\frac{\pi}{4}-\frac{x}{2}\right).$$

## c)

Poniamo $t=\tan\dfrac{x}{2}$. Da $0\le x<\dfrac{\pi}{2}$ segue $0\le\dfrac{x}{2}<\dfrac{\pi}{4}$, cioè $0\le t<1$.

Usando $\operatorname{sen}x=\dfrac{2t}{1+t^{2}}$, $\cos x=\dfrac{1-t^{2}}{1+t^{2}}$ si ha

$$\operatorname{sen}(2x)=2\operatorname{sen}x\cos x=\frac{4t(1-t^{2})}{(1+t^{2})^{2}},$$

mentre

$$\tan\!\left(\frac{\pi}{4}-\frac{x}{2}\right)=\frac{1-t}{1+t}.$$

Pertanto

$$f(t)=\frac{S'}{S''}=\frac{\tfrac{1}{2}r^{2}\operatorname{sen}(2x)}{r^{2}\tan\!\left(\tfrac{\pi}{4}-\tfrac{x}{2}\right)}=\frac{\operatorname{sen}(2x)}{2\tan\!\left(\tfrac{\pi}{4}-\tfrac{x}{2}\right)}=\frac{\dfrac{4t(1-t^{2})}{(1+t^{2})^{2}}}{2\cdot\dfrac{1-t}{1+t}}.$$

Semplificando $1-t^{2}=(1-t)(1+t)$:

$$f(t)=\frac{4t(1-t)(1+t)}{(1+t^{2})^{2}}\cdot\frac{1+t}{2(1-t)}=\frac{2t(1+t)^{2}}{(1+t^{2})^{2}}.$$

## d)

Studiamo $y=f(t)=\dfrac{2t(1+t)^{2}}{(1+t^{2})^{2}}$ per $t\in\mathbb{R}$, prescindendo dal vincolo geometrico.

**Dominio e segno.** La funzione è definita e continua su tutto $\mathbb{R}$ (il denominatore non si annulla mai). Il grafico passa per l'origine e interseca l'asse $t$ anche in $t=-1$ (zero doppio, dovuto a $(1+t)^{2}$). È positiva per $t>0$ e negativa per $t<0$, tranne in $t=-1$ dove si annulla. Non è né pari né dispari.

**Limiti all'infinito.**

$$\lim_{t\to\pm\infty}\frac{2t(1+t)^{2}}{(1+t^{2})^{2}}=\lim_{t\to\pm\infty}\frac{2t^{3}}{t^{4}}=\lim_{t\to\pm\infty}\frac{2}{t}=0^{\pm},$$

quindi la retta $y=0$ è asintoto orizzontale (da sopra per $t\to+\infty$, da sotto per $t\to-\infty$). Non vi sono asintoti obliqui né verticali.

**Derivata prima.** Scrivendo $f(t)=\dfrac{2(t^{3}+2t^{2}+t)}{(1+t^{2})^{2}}$ si ottiene

$$f'(t)=\frac{2\left(-t^{4}-4t^{3}+4t+1\right)}{(1+t^{2})^{3}}=-\,\frac{2\,(t-1)(t+1)(t^{2}+4t+1)}{(1+t^{2})^{3}}.$$

Dunque $f'(t)\ge0$ equivale a $(t-1)(t+1)(t^{2}+4t+1)\le0$. Le radici sono $t=\pm1$ e $t=-2\pm\sqrt{3}$; ordinandole:

$$-2-\sqrt{3}<-1<-2+\sqrt{3}<1.$$

Lo studio del segno dà $f'(t)\ge0$ (funzione crescente) negli intervalli

$$-2-\sqrt{3}<t<-1\qquad\text{e}\qquad -2+\sqrt{3}<t<1,$$

mentre la funzione è decrescente nella restante parte del dominio. Si hanno quindi:

- **minimi relativi** in $t=-2-\sqrt{3}$ e $t=-2+\sqrt{3}$ (in entrambi $f\approx-0{,}25$);
- **massimi relativi** in $t=-1$, con $f(-1)=0$, e in $t=1$, con $f(1)=2$.

Essendo richiesto solo un andamento approssimato, si può tralasciare la derivata seconda. Il grafico è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="362.5" height="164.76" viewBox="-72 -72 271.875 123.57"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 26.204h260.798"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M186.848 23.804c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="82.714" y="26.204" stroke="none" font-family="cmmi10" font-size="10" transform="translate(109.947 3.075)">t</text><path fill="none" d="M82.714 51.1V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M80.314-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="82.714" y="26.204" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -90.835)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.396 33.997 2.032.054 2.032.054 2.033.054 2.032.054 2.032.053 2.032.053 2.033.052 2.032.054 2.032.05 2.033.052 2.032.05 2.032.05 2.032.048 2.033.047 2.032.046 2.032.043 2.032.042 2.033.04 2.032.037 2.032.035 2.033.032 2.032.028 2.032.024 2.032.02 2.033.013 2.032.01 2.032.003 2.032-.003 2.033-.012 2.032-.02 2.032-.028 2.032-.039 2.033-.05 2.032-.064 2.032-.077 2.033-.092 2.032-.108 2.032-.13 2.032-.147 2.033-.172 2.032-.195 2.032-.223 2.032-.25 2.033-.284 2.032-.314 2.032-.352 2.033-.389 2.032-.426 2.032-.465 2.032-.503 2.033-.537 2.032-.567 2.032-.588 2.032-.6 2.033-.588 2.032-.554 2.032-.488 2.032-.378 2.033-.219 2.032.003 2.032.285 2.033.62 2.032.994 2.032 1.348 2.032 1.629 2.033 1.707 2.032 1.458 2.032.783 2.032-.413 2.033-2.098 2.032-4.111 2.032-6.15 2.033-7.931 2.032-9.144 2.032-9.617 2.032-9.376 2.033-8.51 2.032-7.249 2.032-5.783 2.032-4.294 2.033-2.907 2.032-1.693 2.032-.677 2.032.138 2.033.764 2.032 1.235 2.032 1.57 2.033 1.801 2.032 1.945 2.032 2.027 2.032 2.057 2.033 2.053 2.032 2.024 2.032 1.973 2.032 1.913 2.033 1.844 2.032 1.77 2.032 1.693 2.033 1.617 2.032 1.541 2.032 1.468 2.032 1.396 2.033 1.328 2.032 1.262 2.032 1.2 2.032 1.14 2.033 1.085 2.032 1.03 2.032.983 2.032.934 2.033.89 2.032.848 2.032.808 2.033.772 2.032.737 2.032.703 2.032.673 2.033.644 2.032.615"/><path stroke="none" d="M108.599-44.928c0-1.38-.761-2.5-1.7-2.5s-1.7 1.12-1.7 2.5.761 2.5 1.7 2.5 1.7-1.12 1.7-2.5m-1.7 0"/><g stroke="none" font-size="10"><text x="82.714" y="26.204" font-family="cmr10" transform="translate(27.718 -77.165)">(1</text><text x="91.603" y="26.204" font-family="cmmi10" transform="translate(27.718 -77.165)">;</text><text x="98.825" y="26.204" font-family="cmr10" transform="translate(27.718 -77.165)">2)</text></g><path stroke="none" d="M60.229 26.204c0-1.38-.761-2.5-1.7-2.5s-1.7 1.12-1.7 2.5.761 2.5 1.7 2.5 1.7-1.12 1.7-2.5m-1.7 0"/><g stroke="none" font-size="10"><text x="82.714" y="26.204" font-family="cmsy10" transform="translate(-40.496 9.977)">¡</text><text x="90.492" y="26.204" font-family="cmr10" transform="translate(-40.496 9.977)">1</text></g><g stroke="none" font-size="10"><text x="82.714" y="26.204" font-family="cmmi10" transform="translate(64.25 -27.731)">y</text><text x="90.753" y="26.204" font-family="cmr10" transform="translate(64.25 -27.731)">=</text><text x="101.309" y="26.204" font-family="cmmi10" transform="translate(64.25 -27.731)">f</text><text x="107.281" y="26.204" font-family="cmr10" transform="translate(64.25 -27.731)">(</text><text x="111.17" y="26.204" font-family="cmmi10" transform="translate(64.25 -27.731)">t</text><text x="114.781" y="26.204" font-family="cmr10" transform="translate(64.25 -27.731)">)</text></g></g></svg>
</figure>

Nell'intervallo di interesse geometrico $0\le t<1$ la funzione cresce da $f(0)=0$ fino ad avvicinarsi al valore $f(1)=2$.

*Fonte:* [📄 PDF p.57](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
