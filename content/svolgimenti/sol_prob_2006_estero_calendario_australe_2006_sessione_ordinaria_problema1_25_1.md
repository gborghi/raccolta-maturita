

**Problema:** [[Problemi/prob_2006_estero_calendario_australe_2006_sessione_ordinaria_problema1_25_1|2006 Australe Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2006_estero_calendario_australe_2006_sessione_ordinaria_problema1_25|2006 Australe Ordinaria — Problema 1]]

Il triangolo $ABC$ è rettangolo in $C$ e si ha $CB=m$. Posto $\widehat{ABC}=x$ e $t=\tan\frac{x}{2}$, si esprima il raggio $y$ del cerchio inscritto in funzione di $t$; si studi poi la funzione $y=f(t)$ e si determini $m$ in modo che l'area sottesa a un opportuno arco valga $4-\ln 16$.

## a) Il raggio in funzione di $t$

Detta $S$ l'area del triangolo, $r$ il raggio del cerchio inscritto e $p$ il semiperimetro, vale la relazione $S=p\,r$, da cui

$$r=\frac{S}{p}.$$

Nel triangolo rettangolo in $C$, con $CB=m$ cateto adiacente all'angolo $x$, si ha

$$AC=m\tan x,\qquad AB=\frac{m}{\cos x},\qquad S=\frac{AC\cdot CB}{2}=\frac{1}{2}\,m^{2}\tan x,$$

$$2p=m+m\tan x+\frac{m}{\cos x}.$$

Pertanto

$$r=\frac{S}{p}=\frac{\tfrac{1}{2}m^{2}\tan x}{\tfrac{1}{2}\left(m+m\tan x+\dfrac{m}{\cos x}\right)}=\frac{m\tan x}{1+\tan x+\dfrac{1}{\cos x}}.$$

Usando le formule parametriche $\tan x=\dfrac{2t}{1-t^{2}}$ e $\dfrac{1}{\cos x}=\dfrac{1+t^{2}}{1-t^{2}}$ (essendo $\cos x=\dfrac{1-t^{2}}{1+t^{2}}$), si ottiene

$$r=m\cdot\frac{\dfrac{2t}{1-t^{2}}}{1+\dfrac{2t}{1-t^{2}}+\dfrac{1+t^{2}}{1-t^{2}}}=m\cdot\frac{2t}{\left(1-t^{2}\right)+2t+\left(1+t^{2}\right)}=m\cdot\frac{2t}{2+2t}.$$

Quindi

$$\boxed{\,y=f(t)=\frac{mt}{t+1}\,},\qquad t\neq -1.$$

Poiché $0<x<\dfrac{\pi}{2}$, risulta $0<\dfrac{x}{2}<\dfrac{\pi}{4}$, e dunque $0<t=\tan\dfrac{x}{2}<1$: i vincoli geometrici del problema corrispondono all'intervallo $0<t<1$.

## b) Studio di $y=f(t)$ e grafico

Consideriamo ora la funzione

$$y=f(t)=\frac{mt}{t+1},\qquad m>0,$$

senza tener conto dei limiti geometrici, evidenziando poi l'arco $\gamma$ che corrisponde a $t_1=0$ e $t_2=1$.

Si tratta di una **funzione omografica**, definita per $t\neq -1$. Si ha:

- **asintoto verticale** $t=-1$, poiché $\displaystyle\lim_{t\to -1^{\pm}}\frac{mt}{t+1}=\mp\infty$;
- **asintoto orizzontale** $y=m$, poiché $\displaystyle\lim_{t\to\pm\infty}\frac{mt}{t+1}=m$;
- **centro di simmetria** nel punto $C=(-1,\,m)$, intersezione dei due asintoti;
- passaggio per l'**origine**, essendo $f(0)=0$.

La derivata

$$f'(t)=\frac{m(t+1)-mt}{(t+1)^{2}}=\frac{m}{(t+1)^{2}}>0$$

è sempre positiva: la funzione è crescente in ciascuno dei due rami. Sull'intervallo $[0,1]$ essa cresce da $f(0)=0$ a $f(1)=\dfrac{m}{2}$; l'arco $\gamma$ è dunque il tratto di ramo destro che congiunge l'origine con il punto $\left(1,\dfrac{m}{2}\right)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="396.461" height="403.073" viewBox="-72 -72 297.345 302.305"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 129.68h262.505"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M188.555 127.28c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="59.382" y="129.681" stroke="none" font-family="cmmi10" font-size="10" transform="translate(134.985 3.075)">t</text><path fill="none" d="M59.382 229.835V-1.371"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M56.982.509c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="59.382" y="129.681" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -136.93)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M28.084 229.835V-1.771"/><g stroke="none" font-size="10"><text x="59.382" y="129.681" font-family="cmmi10" transform="translate(-64.553 -135.819)">t</text><text x="65.771" y="129.681" font-family="cmr10" transform="translate(-64.553 -135.819)">=</text><text x="76.327" y="129.681" font-family="cmsy10" transform="translate(-64.553 -135.819)">¡</text><text x="84.104" y="129.681" font-family="cmr10" transform="translate(-64.553 -135.819)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 67.084h262.905"/><g stroke="none" font-size="10"><text x="59.382" y="129.681" font-family="cmmi10" transform="translate(134.985 -61.416)">y</text><text x="67.422" y="129.681" font-family="cmr10" transform="translate(134.985 -61.416)">=</text><text x="77.977" y="129.681" font-family="cmmi10" transform="translate(134.985 -61.416)">m</text></g></g><path stroke="none" d="M30.284 67.084a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><g stroke="none" font-size="10"><text x="59.382" y="129.681" font-family="cmmi10" transform="translate(-76.474 -68.63)">C</text><text x="67.245" y="129.681" font-family="cmr10" transform="translate(-76.474 -68.63)">(</text><text x="71.134" y="129.681" font-family="cmsy10" transform="translate(-76.474 -68.63)">¡</text><text x="78.911" y="129.681" font-family="cmr10" transform="translate(-76.474 -68.63)">1</text><text x="83.912" y="129.681" font-family="cmmi10" transform="translate(-76.474 -68.63)">;</text><text x="88.356" y="129.681" font-family="cmmi10" transform="translate(-76.474 -68.63)">m</text><text x="97.136" y="129.681" font-family="cmr10" transform="translate(-76.474 -68.63)">)</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m42.168 206.188 1.803-15.775 1.802-12.569 1.802-10.243 1.803-8.508 1.802-7.181 1.802-6.142 1.803-5.311 1.802-4.64 1.802-4.088 1.803-3.628 1.802-3.242 1.802-2.914 1.803-2.639 1.802-2.394 1.803-2.181 1.802-2.003 1.802-1.84 1.803-1.697 1.802-1.568 1.802-1.458 1.803-1.352 1.802-1.268 1.802-1.186 1.803-1.108 1.802-1.043 1.802-.98 1.803-.922 1.802-.87 1.803-.827 1.802-.779 1.802-.743 1.803-.703 1.802-.669 1.802-.636 1.803-.606 1.802-.581 1.802-.554 1.803-.53 1.802-.505 1.803-.488 1.802-.465 1.802-.446 1.803-.43 1.802-.411 1.802-.399 1.803-.383 1.802-.367 1.802-.357 1.803-.343 1.802-.33 1.802-.32 1.803-.308 1.802-.299 1.803-.29 1.802-.28 1.802-.272 1.803-.262 1.802-.255 1.802-.247 1.803-.24 1.802-.232 1.802-.227 1.803-.22 1.802-.213 1.802-.208 1.803-.202 1.802-.198 1.803-.19 1.802-.187 1.802-.182 1.803-.178 1.802-.173 1.802-.168 1.803-.164 1.802-.161 1.802-.157 1.803-.152 1.802-.15 1.803-.145M-65.81 46.22l1.01-.225 1.01-.234 1.01-.238 1.01-.242 1.01-.248 1.01-.253 1.01-.26 1.01-.264 1.01-.272 1.01-.277 1.01-.291 1.01-.29 1.01-.3 1.01-.306 1.01-.314 1.01-.325 1.01-.33 1.01-.34 1.01-.355 1.01-.357 1.01-.37 1.011-.377 1.01-.392 1.01-.4 1.01-.413 1.01-.426 1.01-.438 1.01-.457 1.01-.464 1.01-.48 1.01-.502 1.01-.513 1.01-.526 1.01-.55 1.01-.571 1.01-.582 1.011-.613 1.01-.632 1.01-.657 1.01-.677 1.01-.7 1.01-.733 1.01-.763 1.01-.796 1.01-.826 1.01-.858 1.01-.9 1.01-.934 1.01-.988 1.01-1.021 1.01-1.083 1.011-1.12 1.01-1.19 1.01-1.246 1.01-1.314 1.01-1.377 1.01-1.464 1.01-1.547 1.01-1.634 1.01-1.727 1.01-1.84 1.01-1.953 1.01-2.09 1.01-2.248 1.01-2.389 1.01-2.573 1.011-2.776 1.01-2.992 1.01-3.254 1.01-3.524 1.01-3.854 1.01-4.213 1.01-4.641 1.01-5.118 1.01-5.709 1.01-6.367 1.01-7.169 1.01-8.105 1.01-9.293"/><path fill="none" stroke="red" stroke-width="1.2" d="m59.382 129.68.803-1.564.802-1.487.802-1.418.803-1.352.802-1.29.802-1.229.803-1.18.802-1.13.802-1.08.803-1.042.802-.995.802-.955.802-.92.803-.886.802-.854.802-.823.803-.792.802-.764.802-.736.803-.716.802-.689.802-.666.803-.648.802-.623.802-.607.803-.586.802-.569.802-.551.803-.538.802-.52.802-.504.803-.491.802-.479.802-.463.803-.454.802-.438.802-.429.803-.416.802-.407"/><path stroke="none" d="M61.582 129.68a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="59.382" y="129.681" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path stroke="none" d="M92.88 98.383a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><g stroke="none"><text x="59.382" y="129.681" font-family="cmmi10" font-size="10" transform="translate(1.335 -36.331)">t</text><text x="62.993" y="131.181" font-family="cmr7" font-size="7" transform="translate(1.335 -36.331)">2</text><text x="70.257" y="129.681" font-family="cmr10" font-size="10" transform="translate(1.335 -36.331)">=</text><text x="80.813" y="129.681" font-family="cmr10" font-size="10" transform="translate(1.335 -36.331)">1</text></g><g fill="red" stroke="red"><text x="59.382" y="129.681" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(56.6 -17.599)">°</text></g></g></svg>
</figure>

## c) Determinazione di $m$

L'area della regione delimitata dall'arco $\gamma$ e dall'asse $t$ fra $t_1=0$ e $t_2=1$ è

$$A=\int_{0}^{1}\frac{mt}{t+1}\,dt=m\int_{0}^{1}\frac{t+1-1}{t+1}\,dt=m\int_{0}^{1}\left(1-\frac{1}{t+1}\right)dt.$$

Quindi

$$A=m\Big[\,t-\ln|t+1|\,\Big]_{0}^{1}=m\left(1-\ln 2\right).$$

Imponendo $A=4-\ln 16$ e osservando che $\ln 16=4\ln 2$, cioè $4-\ln 16=4-4\ln 2=4(1-\ln 2)$, si ha

$$m(1-\ln 2)=4(1-\ln 2)\;\Rightarrow\; m=4.$$

Il valore cercato del parametro è dunque

$$\boxed{\,m=4\,}.$$

*Fonte:* [📄 PDF p.25](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
