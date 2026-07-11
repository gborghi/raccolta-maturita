

**Problema:** [[Problemi/prob_2008_liceo_scientifico_ordinamento_2008_sessione_straor_problema2_103_1|2008 Ordinamento Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_problema2_103|2008 Ordinamento Straordinaria — Problema 2]]

Si consideri la funzione
$$f(x)=\ln\frac{x+1}{x^{2}+2}$$
(il logaritmo si intende in base $e$). Se ne studino le caratteristiche e se ne tracci il grafico $\gamma$; si scriva l'equazione della tangente a $\gamma$ nel punto di intersezione con l'asse $y$; si studi la funzione $g(x)=e^{f(x)}$ e se ne tracci il grafico $\Gamma$; infine si calcoli l'area della regione delimitata da $\Gamma$, dagli assi cartesiani e dalla retta $x=\sqrt{2}$.

## a) Studio della funzione $f$

**Dominio.** Occorre che l'argomento del logaritmo sia positivo. Poiché $x^{2}+2>0$ per ogni $x$, la condizione si riduce a
$$\frac{x+1}{x^{2}+2}>0 \;\Rightarrow\; x+1>0 \;\Rightarrow\; x>-1,$$
quindi il dominio è $(-1,+\infty)$. La funzione non ha simmetrie.

**Intersezioni con gli assi.**

- Asse $y$ $(x=0)$: $f(0)=\ln\frac{1}{2}=-\ln 2\approx-0{,}69$.
- Asse $x$: $f(x)=0$ richiede $\frac{x+1}{x^{2}+2}=1$, cioè $x+1=x^{2}+2$, ossia $x^{2}-x+1=0$, che non ha soluzioni reali ($\Delta=1-4<0$). Nessuna intersezione con l'asse $x$.

**Segno.** $f(x)>0$ equivale a $\frac{x+1}{x^{2}+2}>1$, cioè $x^{2}-x+1<0$, mai verificata. Dunque $f$ è **sempre negativa** sul suo dominio.

**Limiti.**
$$\lim_{x\to(-1)^{+}}\ln\frac{x+1}{x^{2}+2}=-\infty \quad\Rightarrow\quad x=-1 \text{ asintoto verticale};$$
$$\lim_{x\to+\infty}\ln\frac{x+1}{x^{2}+2}=-\infty.$$
Per $x\to+\infty$ la funzione tende a $-\infty$ come $-\ln x$, quindi non è un infinito del primo ordine e **non esiste asintoto obliquo**.

**Derivata prima.** Scrivendo $f(x)=\ln(x+1)-\ln(x^{2}+2)$,
$$f'(x)=\frac{1}{x+1}-\frac{2x}{x^{2}+2}=\frac{-x^{2}-2x+2}{(x+1)(x^{2}+2)}.$$
Il denominatore è positivo per $x>-1$, quindi il segno di $f'$ è quello di $-x^{2}-2x+2\ge 0$, cioè $x^{2}+2x-2\le 0$, che dà $-1-\sqrt{3}\le x\le\sqrt{3}-1$. Tenendo conto del dominio:
$$-1<x\le\sqrt{3}-1.$$
La funzione è quindi **crescente** su $(-1,\sqrt{3}-1)$ e **decrescente** su $(\sqrt{3}-1,+\infty)$; in $x=\sqrt{3}-1\approx0{,}73$ presenta un **massimo relativo, che è anche assoluto**. La sua ordinata è
$$f(\sqrt{3}-1)=\ln\frac{\sqrt{3}}{(\sqrt{3}-1)^{2}+2}=\ln\frac{\sqrt{3}}{6-2\sqrt{3}}=\ln\frac{\sqrt{3}+1}{4}\approx-0{,}38.$$

**Derivata seconda.**
$$f''(x)=\frac{(x-2)\,(x^{3}+6x^{2}+6x+4)}{(x+1)^{2}(x^{2}+2)^{2}}.$$
Il fattore $x^{3}+6x^{2}+6x+4$ è positivo per ogni $x>-1$, dunque il segno di $f''$ coincide con quello di $x-2$: la curva volge la concavità **verso il basso** per $-1<x<2$ e **verso l'alto** per $x>2$. In $x=2$ si ha un **punto di flesso**, con ordinata $f(2)=\ln\frac{3}{6}=-\ln 2\approx-0{,}69$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="276.53" height="174.097" viewBox="-72 -72 207.397 130.573"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-39.205h194.216"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M120.266-41.605c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-26.119" y="-39.205" stroke="none" font-family="cmmi10" font-size="10" transform="translate(152.198 2.153)">x</text><path fill="none" d="M-26.12 58.103v-115.83"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-28.52-55.846c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-26.119" y="-39.205" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -24.398)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-53.15 58.103v-116.23"/><g stroke="none" font-size="10"><text x="-26.119" y="-39.205" font-family="cmmi10" transform="translate(-23.497 -23.287)">x</text><text x="-17.626" y="-39.205" font-family="cmr10" transform="translate(-23.497 -23.287)">=</text><text x="-7.071" y="-39.205" font-family="cmsy10" transform="translate(-23.497 -23.287)">¡</text><text x=".707" y="-39.205" font-family="cmr10" transform="translate(-23.497 -23.287)">1</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-50.446 50.547 1.792-14.451 1.791-10.244 1.792-7.74 1.792-6.661 1.791-5.212 1.792-4.643 1.792-4.13 1.791-3.674 1.792-3.267 1.792-2.92 1.791-2.616 1.792-2.32 1.792-2.053 1.791-1.821 1.792-1.578 1.792-1.36 1.791-1.169 1.792-.968 1.792-.795 1.791-.635 1.792-.486 1.792-.346 1.791-.226 1.792-.113 1.792-.013 1.791.08 1.792.156 1.792.227 1.791.29 1.792.341 1.792.389 1.791.429 1.792.463 1.792.49 1.791.517 1.792.535 1.792.553 1.791.567 1.792.575 1.792.583 1.791.591 1.792.594 1.792.596 1.791.604 1.792.593 1.792.594 1.791.595 1.792.589 1.792.585 1.791.583 1.792.577 1.792.577 1.791.566 1.792.56 1.791.557 1.792.55 1.792.544 1.791.539 1.792.53 1.792.524 1.791.521 1.792.511 1.792.506 1.791.5 1.792.493 1.792.488 1.791.481 1.792.475 1.792.47 1.791.462 1.792.458 1.792.451 1.791.448 1.792.439 1.792.436 1.791.428 1.792.424 1.792.42 1.791.412 1.792.409 1.792.403 1.791.399 1.792.393 1.792.39 1.791.383 1.792.378 1.792.375 1.791.37 1.792.364"/><path stroke="none" d="M-24.6-20.474a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><g stroke="none" font-size="10"><text x="-26.119" y="-39.205" font-family="cmsy10" transform="translate(-27.977 29.209)">¡</text><text x="-16.675" y="-39.205" font-family="cmr10" transform="translate(-27.977 29.209)">ln</text><text x="-6.675" y="-39.205" font-family="cmr10" transform="translate(-27.977 29.209)">2</text></g><path fill="red" stroke="none" d="M-4.813-28.907a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="-26.119" y="-39.205" stroke="none" font-family="cmr10" font-size="10" transform="translate(23.319 6.765)">max</text><path fill="teal" stroke="none" d="M29.461-20.474a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="-26.119" y="-39.205" stroke="none" font-family="cmr10" font-size="10" transform="translate(57.593 29.209)">°esso</text><g fill="#00f" stroke="#00f"><text x="-26.119" y="-39.205" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.66 47.131)">°</text></g></g></svg>
</figure>

## b) Tangente nel punto di intersezione con l'asse $y$

Il punto di intersezione con l'asse $y$ è $A=(0,\,-\ln 2)$. Il coefficiente angolare della tangente in $A$ vale
$$f'(0)=\frac{-0-0+2}{(0+1)(0+2)}=1.$$
L'equazione della tangente in $A$ è quindi
$$y+\ln 2=x \quad\Rightarrow\quad \boxed{\,y=x-\ln 2\,}.$$

## c) La funzione $g(x)=e^{f(x)}$

Poiché $g(x)=e^{f(x)}=\dfrac{x+1}{x^{2}+2}$, con $x>-1$, conviene dedurne il grafico $\Gamma$ dalle proprietà di $f$: $g$ ha lo **stesso dominio** $(-1,+\infty)$, è **sempre positiva** e cresce e decresce dove cresce e decresce $f$.

**Limiti.**
$$\lim_{x\to(-1)^{+}}e^{f(x)}=0^{+},\qquad \lim_{x\to+\infty}e^{f(x)}=0^{+}\quad\Rightarrow\quad y=0 \text{ asintoto orizzontale}.$$

**Massimo.** In corrispondenza del massimo di $f$, in $x=\sqrt{3}-1$, la $g$ ha un massimo di ordinata
$$g(\sqrt{3}-1)=e^{\,f(\sqrt{3}-1)}=\frac{\sqrt{3}+1}{4}\approx0{,}68.$$

**Concavità.** Derivando $g(x)=\dfrac{x+1}{x^{2}+2}$,
$$g'(x)=\frac{-x^{2}-2x+2}{(x^{2}+2)^{2}},\qquad g''(x)=\frac{2x^{3}+6x^{2}-12x-4}{(x^{2}+2)^{3}}.$$
Lo studio del segno di $g''$ porta all'equazione $x^{3}+3x^{2}-6x-2=0$, le cui radici non si determinano algebricamente in modo elementare; valutando il numeratore agli estremi si trovano cambi di segno che individuano **due flessi**, uno in $(-1,0)$ e uno in $(1,2)$ (cioè dopo il massimo).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="287.342" height="154.329" viewBox="-72 -72 215.506 115.747"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 37.586h202.325"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M128.375 35.186c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-26.119" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(160.307 2.153)">x</text><path fill="none" d="M-26.12 43.277V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-28.52-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-26.119" y="37.586" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -102.217)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-53.15 43.277V-59.154"/><g stroke="none" font-size="10"><text x="-26.119" y="37.586" font-family="cmmi10" transform="matrix(.7 0 0 .7 -32.393 -88.52)">x</text><text x="-17.626" y="37.586" font-family="cmr10" transform="matrix(.7 0 0 .7 -32.393 -88.52)">=</text><text x="-7.071" y="37.586" font-family="cmsy10" transform="matrix(.7 0 0 .7 -32.393 -88.52)">¡</text><text x=".707" y="37.586" font-family="cmr10" transform="matrix(.7 0 0 .7 -32.393 -88.52)">1</text></g></g><path fill="#d9d9ff" stroke="none" d="m-26.12-19.32.78-1.616.78-1.57.78-1.502.78-1.457.78-1.388.78-1.332.78-1.252.78-1.184.78-1.128.78-1.045.78-.992.78-.897.78-.832.78-.763.78-.682.78-.615.78-.55.78-.474.78-.403.78-.344.78-.282.78-.213.78-.158.78-.1.78-.043.78.01.78.053.78.097.779.153.78.186.78.229.78.26.78.303.78.33.78.36.78.39.78.413.78.434.78.454.78.477.78.493.78.507.78.527.779.538.78.544.78.554.78.567.78.577.78.575.003 68.697h-38.22Z"/><g stroke-dasharray="3.0,3.0"><path fill="none" d="M12.101 37.586v-77.39"/><g stroke="none"><text x="-26.119" y="37.586" font-family="cmmi10" font-size="10" transform="matrix(.7 0 0 .7 19.051 -69.517)">x</text><text x="-17.626" y="37.586" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 19.051 -69.517)">=</text><text x="-7.071" y="29.314" font-family="cmsy10" font-size="10" transform="matrix(.7 0 0 .7 19.051 -69.517)">p</text><path d="M19.935-49.278h3.5v.28h-3.5z"/><text x="1.263" y="37.586" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 19.051 -69.517)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-51.797 35.625 1.842-2.882 1.843-3.121 1.843-3.364 1.843-3.61 1.843-3.821 1.842-4.029 1.843-4.197 1.843-4.325 1.843-4.426 1.843-4.451 1.842-4.439 1.843-4.347 1.843-4.199 1.843-3.984 1.843-3.721 1.842-3.404 1.843-3.05 1.843-2.651 1.843-2.265 1.843-1.844 1.842-1.457 1.843-1.063 1.843-.696 1.843-.363 1.843-.045 1.842.217 1.843.463 1.843.67 1.843.846 1.843.99 1.842 1.108 1.843 1.204 1.843 1.274 1.843 1.327 1.843 1.372 1.842 1.384 1.843 1.402 1.843 1.405 1.843 1.392 1.843 1.384 1.843 1.362 1.842 1.344 1.843 1.315 1.843 1.286 1.843 1.254 1.843 1.225 1.842 1.191 1.843 1.16L38.5-12.43l1.843 1.09 1.843 1.058 1.842 1.026 1.843.994 1.843.96 1.843.932 1.843.903 1.842.874 1.843.846 1.843.818 1.843.793 1.843.766 1.842.743 1.843.72 1.843.697 1.843.676 1.843.655 1.842.634 1.843.614 1.843.598 1.843.578 1.843.561 1.842.545 1.843.528 1.843.512 1.843.499 1.843.484 1.843.47 1.842.458 1.843.444 1.843.433 1.843.42 1.843.408 1.842.4 1.843.389 1.843.376 1.843.369 1.843.357 1.842.35 1.843.34 1.843.331 1.843.323 1.843.318 1.842.308 1.843.3 1.843.294 1.843.286 1.843.28 1.842.274 1.843.268"/><path fill="red" stroke="none" d="M-5.953-40.147c0-.883-.17-1.6-.38-1.6s-.38.717-.38 1.6.17 1.6.38 1.6.38-.716.38-1.6m-.38 0"/><text x="-26.119" y="37.586" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 14.423 -68.93)">max</text><g fill="#00f" stroke="#00f"><text x="-26.119" y="37.586" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(118.51 -21.622)">¡</text></g></g></svg>
</figure>

## d) Calcolo dell'area

L'area richiesta è
$$\mathcal{A}=\int_{0}^{\sqrt{2}}\frac{x+1}{x^{2}+2}\,dx=\frac{1}{2}\int_{0}^{\sqrt{2}}\frac{2x}{x^{2}+2}\,dx+\int_{0}^{\sqrt{2}}\frac{1}{x^{2}+2}\,dx.$$
Il primo integrale dà $\frac{1}{2}\ln(x^{2}+2)$; il secondo, essendo $\int\frac{dx}{x^{2}+2}=\frac{1}{\sqrt{2}}\arctan\frac{x}{\sqrt{2}}$, dà $\frac{1}{\sqrt{2}}\arctan\frac{x}{\sqrt{2}}$. Quindi
$$\mathcal{A}=\left[\frac{1}{2}\ln(x^{2}+2)+\frac{1}{\sqrt{2}}\arctan\frac{x}{\sqrt{2}}\right]_{0}^{\sqrt{2}}=\frac{1}{2}\ln 4+\frac{1}{\sqrt{2}}\cdot\frac{\pi}{4}-\frac{1}{2}\ln 2.$$
Poiché $\frac{1}{2}\ln 4-\frac{1}{2}\ln 2=\frac{1}{2}\ln 2$ e $\frac{1}{\sqrt{2}}\cdot\frac{\pi}{4}=\frac{\sqrt{2}\,\pi}{8}$,
$$\boxed{\;\mathcal{A}=\frac{1}{2}\ln 2+\frac{\sqrt{2}\,\pi}{8}\approx0{,}90\ \text{u}^{2}\;}.$$

*Fonte:* [📄 PDF p.103](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
