

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_10|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 10]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Poiché
$$\int_0^1 \frac{4}{1+x^2}\,dx = \big[\,4\arctan x\,\big]_0^1 = 4\cdot\frac{\pi}{4} = \pi,$$
approssimare numericamente questo integrale equivale ad approssimare $\pi$. Poniamo
$$f(x)=\frac{4}{1+x^2},\qquad x\in[0,1].$$

Suddividiamo l'intervallo $[0,1]$ in $n=4$ parti uguali di ampiezza $h=\dfrac{1-0}{4}=0{,}25$, con nodi $x_0=0,\ x_1=0{,}25,\ x_2=0{,}5,\ x_3=0{,}75,\ x_4=1$. I valori della funzione nei nodi sono:

$$\begin{aligned}
f(x_0)&=\frac{4}{1}=4 & f(x_1)&=\frac{4}{1{,}0625}=3{,}764706\\[2pt]
f(x_2)&=\frac{4}{1{,}25}=3{,}2 & f(x_3)&=\frac{4}{1{,}5625}=2{,}56\\[2pt]
f(x_4)&=\frac{4}{2}=2 & &
\end{aligned}$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="364.641" height="232.381" viewBox="-72 -72 273.48 174.286"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.306 81.688h254.535"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M186.35 79.288c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-66.306" y="81.688" stroke="none" font-family="cmmi10" font-size="10" transform="translate(258.468 2.153)">x</text><path fill="none" d="M-66.306 81.688V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="81.688" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -146.32)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-66.306-43.505 3.855.034 3.855.11 3.856.185 3.855.244 3.855.322 3.855.382 3.856.463 3.855.52 3.855.585 3.856.648 3.855.707 3.855.767 3.856.823 3.855.874 3.855.932 3.855.97 3.856 1.02 3.855 1.061 3.855 1.1 3.855 1.142 3.856 1.17 3.855 1.205 3.855 1.23 3.856 1.262 3.855 1.28 3.855 1.299 3.856 1.317 3.855 1.336 3.855 1.346 3.855 1.359 3.856 1.364 3.855 1.371 3.855 1.374 3.856 1.377 3.855 1.38 3.855 1.372 3.856 1.37 3.855 1.368 3.855 1.362 3.855 1.358 3.856 1.343 3.855 1.336L99.47-.113l3.855 1.311 3.856 1.302 3.855 1.283 3.855 1.274 3.856 1.258 3.855 1.243 3.855 1.227 3.856 1.205 3.855 1.196 3.855 1.176 3.855 1.159 3.856 1.142 3.855 1.12 3.855 1.108 3.856 1.09 3.855 1.066"/><path fill="none" stroke="gray" d="M-66.306 81.688V-43.505M-9.4 81.688V-36.141M47.505 81.688V-18.466M104.41 81.688V1.564M161.316 81.688V19.09"/><path fill="none" stroke="red" stroke-width=".8" d="m-66.306-43.505 56.905 7.364 56.906 17.675 56.905 20.03 56.906 17.527"/><path fill="none" d="M-66.306 79.81v3.756M-9.4 79.81v3.756M47.505 79.81v3.756M104.41 79.81v3.756M161.316 79.81v3.756"/><text x="-66.306" y="81.688" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 11.542)">0</text><text x="-66.306" y="81.688" stroke="none" font-family="cmr10" font-size="10" transform="translate(225.122 11.542)">1</text><g stroke="none"><text x="-65.106" y="77.75" font-family="cmr7" font-size="7" transform="translate(53.712 13.546)">1</text><path d="M-11.394 92.534h3.986v.4h-3.986z"/><text x="-65.106" y="85.136" font-family="cmr7" font-size="7" transform="translate(53.712 13.546)">4</text></g><g stroke="none"><text x="-65.106" y="77.75" font-family="cmr7" font-size="7" transform="translate(110.618 13.546)">1</text><path d="M45.512 92.534h3.986v.4h-3.986z"/><text x="-65.106" y="85.136" font-family="cmr7" font-size="7" transform="translate(110.618 13.546)">2</text></g><g stroke="none"><text x="-65.106" y="77.75" font-family="cmr7" font-size="7" transform="translate(167.523 13.546)">3</text><path d="M102.417 92.534h3.986v.4h-3.986z"/><text x="-65.106" y="85.136" font-family="cmr7" font-size="7" transform="translate(167.523 13.546)">4</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-66.306" y="81.688" font-family="cmmi10" font-size="10" transform="translate(128.726 -91.811)">f</text><text x="-60.334" y="81.688" font-family="cmr10" font-size="10" transform="translate(128.726 -91.811)">(</text><text x="-56.445" y="81.688" font-family="cmmi10" font-size="10" transform="translate(128.726 -91.811)">x</text><text x="-50.73" y="81.688" font-family="cmr10" font-size="10" transform="translate(128.726 -91.811)">)</text><text x="-44.063" y="81.688" font-family="cmr10" font-size="10" transform="translate(128.726 -91.811)">=</text><text x="-25.019" y="77.75" font-family="cmr7" font-size="7" transform="translate(128.726 -91.811)">4</text><path d="M96.418-12.823h18.563v.4H96.418z"/><text x="-32.308" y="85.136" font-family="cmr7" font-size="7" transform="translate(128.726 -91.811)">1+</text><text x="-22.183" y="85.136" font-family="cmmi7" font-size="7" transform="translate(128.726 -91.811)">x</text><text x="-17.648" y="83.136" font-family="cmr5" font-size="5" transform="translate(128.726 -91.811)">2</text></g></g></g></svg>
</figure>

## Metodo dei trapezi

Con la formula dei trapezi
$$\int_0^1 f(x)\,dx \approx h\left[\frac{f(x_0)+f(x_4)}{2}+f(x_1)+f(x_2)+f(x_3)\right]$$
si ottiene
$$\pi \approx 0{,}25\left[\frac{4+2}{2}+3{,}764706+3{,}2+2{,}56\right]=0{,}25\cdot 12{,}524706 = 3{,}131176.$$

Il valore vero è $\pi = 3{,}141593\ldots$, quindi l'errore commesso è circa $0{,}0104$: l'approssimazione è corretta alla prima cifra decimale.

## Metodo di Simpson (miglioramento)

Con gli stessi cinque nodi, la formula di Simpson (delle parabole)
$$\int_0^1 f(x)\,dx \approx \frac{h}{3}\Big[f(x_0)+4\big(f(x_1)+f(x_3)\big)+2f(x_2)+f(x_4)\Big]$$
fornisce
$$\pi \approx \frac{0{,}25}{3}\Big[4+4(3{,}764706+2{,}56)+2\cdot 3{,}2+2\Big]=\frac{0{,}25}{3}\cdot 37{,}698824 = 3{,}141569.$$

L'errore è ora circa $2{,}4\cdot 10^{-5}$: l'approssimazione è corretta fino alla quarta cifra decimale. Ciò conferma che, a parità di nodi, il metodo di Simpson è molto più preciso di quello dei trapezi, poiché la funzione $f(x)=\dfrac{4}{1+x^2}$ è regolare e ben approssimabile con archi di parabola.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
