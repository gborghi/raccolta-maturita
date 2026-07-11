

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_108_2|2006 Sessione Ordinaria PNI — Prova (p.108) — Problema 2]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

Si considerano le funzioni $f(x)=\ln x$ (definita per $x>0$) e $g(x)=ax^2$, con $a\in\mathbb{R}$ e logaritmo in base $e$.

## 1) Discussione dell'equazione $\ln x = ax^2$ e tangenza

Le soluzioni dell'equazione sono gli zeri della funzione
$$\varphi(x)=\ln x - a x^2, \qquad x>0.$$
La sua derivata è
$$\varphi'(x)=\frac{1}{x}-2ax=\frac{1-2ax^2}{x}.$$

**Caso $a\le 0$.** Per $x>0$ si ha $-2ax\ge 0$, quindi $\varphi'(x)=\frac1x-2ax>0$: la funzione è strettamente crescente, con $\varphi(x)\to-\infty$ per $x\to 0^+$ e $\varphi(x)\to+\infty$ per $x\to+\infty$. Esiste perciò **una sola soluzione** (per $a=0$ è $x=1$).

**Caso $a>0$.** Ora $\varphi'(x)=0$ per $x=\dfrac{1}{\sqrt{2a}}$, punto di massimo assoluto. Il valore massimo è
$$\varphi_{\max}=\ln\frac{1}{\sqrt{2a}}-a\cdot\frac{1}{2a}=-\frac{1}{2}\ln(2a)-\frac{1}{2}.$$
Poiché $\varphi\to-\infty$ per $x\to 0^+$ e per $x\to+\infty$, il numero di zeri dipende dal segno di $\varphi_{\max}$:

$$\varphi_{\max}>0 \iff \ln(2a)<-1 \iff a<\frac{1}{2e} \quad\Rightarrow\quad \text{due soluzioni;}$$
$$\varphi_{\max}=0 \iff a=\frac{1}{2e} \quad\Rightarrow\quad \text{una soluzione (radice doppia);}$$
$$\varphi_{\max}<0 \iff a>\frac{1}{2e} \quad\Rightarrow\quad \text{nessuna soluzione.}$$

**Tangenza.** I grafici di $f$ e $g$ sono tangenti quando hanno lo stesso valore e la stessa pendenza:
$$\begin{cases} \ln x = a x^2 \\[2pt] \dfrac{1}{x}=2ax. \end{cases}$$
Dalla seconda equazione $2ax^2=1$, cioè $ax^2=\dfrac12$; sostituendo nella prima si ottiene $\ln x=\dfrac12$, quindi $x=\sqrt{e}$. Allora $a\,e=\dfrac12$, da cui
$$\boxed{a=\frac{1}{2e}}$$
e il punto di tangenza è $\left(\sqrt{e},\,\dfrac12\right)$. Questo è coerente con la discussione: proprio per $a=\frac{1}{2e}$ le due soluzioni coincidono in una sola.

## 2) Area con $a=-e^2$

Con $a=-e^2$ le funzioni sono $f(x)=\ln x$ e $g(x)=-e^2x^2$. Cerchiamo l'area della regione compresa fra i due grafici (con $x>0$) nella striscia $-2\le y\le -1$.

Le curve si intersecano dove $\ln x=-e^2x^2$: per $x=\dfrac1e$ si ha $\ln\dfrac1e=-1$ e $-e^2\cdot\dfrac{1}{e^2}=-1$, quindi il punto comune è $\left(\dfrac1e,\,-1\right)$, che sta proprio sulla retta superiore $y=-1$.

Conviene integrare rispetto a $y$, esprimendo le ascisse in funzione dell'ordinata (con $x>0$):
$$f:\; y=\ln x \;\Rightarrow\; x=e^{y}, \qquad g:\; y=-e^2x^2 \;\Rightarrow\; x=\frac{\sqrt{-y}}{e}.$$
Nella striscia $-2\le y\le -1$ risulta $\dfrac{\sqrt{-y}}{e}\ge e^{y}$ (le due ascisse coincidono in $y=-1$), dunque

$$A=\int_{-2}^{-1}\left(\frac{\sqrt{-y}}{e}-e^{y}\right)dy.$$

Calcoliamo i due contributi. Con la sostituzione $u=-y$:
$$\int_{-2}^{-1}\frac{\sqrt{-y}}{e}\,dy=\frac{1}{e}\int_{1}^{2}\sqrt{u}\,du=\frac{1}{e}\left[\frac{2}{3}u^{3/2}\right]_{1}^{2}=\frac{2}{3e}\left(2\sqrt{2}-1\right),$$
$$\int_{-2}^{-1}e^{y}\,dy=\left[e^{y}\right]_{-2}^{-1}=\frac{1}{e}-\frac{1}{e^{2}}.$$

Pertanto
$$A=\frac{2\left(2\sqrt{2}-1\right)}{3e}-\frac{1}{e}+\frac{1}{e^{2}}=\frac{4\sqrt{2}-5}{3e}+\frac{1}{e^{2}}\approx 0{,}216.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="217.329" height="144.994" viewBox="-72 -72 162.997 108.745"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.306 31.61v-90.364"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="-46.635" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -17.996)">y</text><path fill="none" d="M-70.29-46.635H68.727"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M66.847-49.035c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-66.306" y="-46.635" stroke="none" font-family="cmmi10" font-size="10" transform="translate(138.967 2.153)">x</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-66.306-15.337H57.178"/><g stroke="none" font-size="8"><text x="-66.306" y="-46.635" font-family="cmmi8" transform="translate(127.017 33.098)">y</text><text x="-59.457" y="-46.635" font-family="cmr8" transform="translate(127.017 33.098)">=</text><text x="-50.484" y="-46.635" font-family="cmsy8" transform="translate(127.017 33.098)">¡</text><text x="-43.873" y="-46.635" font-family="cmr8" transform="translate(127.017 33.098)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-66.306 15.961H43.237"/><g stroke="none" font-size="8"><text x="-66.306" y="-46.635" font-family="cmmi8" transform="translate(113.077 64.396)">y</text><text x="-59.457" y="-46.635" font-family="cmr8" transform="translate(113.077 64.396)">=</text><text x="-50.484" y="-46.635" font-family="cmsy8" transform="translate(113.077 64.396)">¡</text><text x="-43.873" y="-46.635" font-family="cmr8" transform="translate(113.077 64.396)">2</text></g></g><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-46.388 25.39 1.753-2.615 1.754-2.425 1.753-3.05 1.754-1.9 1.754-1.816 1.753-1.738 1.754-1.664 1.753-1.594 1.754-1.528 1.753-1.465 1.754-1.407 1.753-1.353 1.754-1.3 1.754-1.25 1.753-1.207 1.754-1.163 1.753-1.122 1.754-1.084 1.753-1.048 1.754-1.015 1.753-.983 1.754-.952 1.753-.924 1.754-.899 1.754-.872 1.753-.85 1.754-.825 1.753-.806 1.754-.785 1.753-.766 1.754-.747 1.753-.732 1.754-.712 1.754-.697 1.753-.682 1.754-.669 1.753-.654 1.754-.64L22-21.176l1.754-.614 1.753-.604 1.754-.591 1.754-.579 1.753-.57 1.754-.563 1.753-.555 1.754-.54 1.753-.532 1.754-.523 1.753-.514 1.754-.506 1.753-.498 1.754-.49 1.754-.483 1.753-.475 1.754-.468 1.753-.462 1.754-.454 1.753-.449"/><text x="-66.306" y="-46.635" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(127.11 17.488)">f</text></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-62.322-46.543 1.787.102 1.787.139 1.787.176 1.787.213 1.787.25 1.787.289 1.787.325 1.787.362 1.787.4 1.787.436 1.787.474 1.787.511 1.787.549 1.787.585 1.787.623 1.787.66 1.787.698 1.787.734 1.787.772 1.787.809 1.787.846 1.787.884 1.786.92 1.787.959 1.787.995 1.787 1.032 1.787 1.07 1.787 1.107 1.787 1.144 1.787 1.182 1.787 1.218 1.787 1.256 1.787 1.293 1.787 1.33 1.787 1.368 1.787 1.405 1.787 1.442 1.787 1.48L7.37-14.99l1.787 1.554 1.787 1.591 1.787 1.628 1.787 1.666 1.787 1.703 1.787 1.74 1.787 1.776 1.787 1.815L23.453.335l1.787 1.889 1.787 1.925 1.787 1.964 1.787 2 1.787 2.038 1.787 2.075 1.787 2.112 1.787 2.15 1.787 2.186 1.787 2.224 1.787 2.261"/><text x="-66.306" y="-46.635" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(113.149 77.833)">g</text></g><g stroke="none"><text x="-66.306" y="-46.635" font-family="cmmi8" font-size="8" transform="translate(76.826 23.765)">P</text><text x="-58.32" y="-54.235" font-family="cmex10" font-size="10" transform="translate(76.826 23.765)">¡</text><text x="-52.537" y="-49.906" font-family="cmr6" font-size="6" transform="translate(76.826 23.765)">1</text><path d="M24.29-25.07h3.666v.4H24.29z"/><text x="-52.47" y="-43.498" font-family="cmmi6" font-size="6" transform="translate(76.826 23.765)">e</text><text x="-47.67" y="-46.635" font-family="cmmi8" font-size="8" transform="translate(76.826 23.765)">;</text><text x="-43.892" y="-46.635" font-family="cmsy8" font-size="8" transform="translate(76.826 23.765)">¡</text><text x="-37.281" y="-46.635" font-family="cmr8" font-size="8" transform="translate(76.826 23.765)">1</text><text x="-33.031" y="-54.235" font-family="cmex10" font-size="10" transform="translate(76.826 23.765)">¢</text></g></g></svg>
</figure>

## 3) Studio di $h(x)=\ln x - a x^2$ con $a=\dfrac12$

Scegliamo $a=\dfrac12>\dfrac{1}{2e}$ (poiché $\dfrac{1}{2e}\approx 0{,}184$), così che, per il punto 1, $h$ non abbia zeri. La funzione è
$$h(x)=\ln x-\frac{x^2}{2}, \qquad x>0.$$

**Dominio e segno agli estremi.** Il dominio è $x>0$. Si ha
$$\lim_{x\to 0^+}h(x)=-\infty \quad(\text{asintoto verticale } x=0), \qquad \lim_{x\to+\infty}h(x)=-\infty,$$
perché per $x\to+\infty$ il termine $-\dfrac{x^2}{2}$ prevale sul logaritmo.

**Monotonìa e massimo.**
$$h'(x)=\frac{1}{x}-x=\frac{1-x^2}{x}.$$
Per $x>0$ si ha $h'(x)>0$ in $(0,1)$ e $h'(x)<0$ in $(1,+\infty)$: la funzione cresce fino a $x=1$ e poi decresce, con un massimo assoluto in
$$\left(1,\,h(1)\right)=\left(1,\,-\frac{1}{2}\right).$$
Poiché il valore massimo è $-\dfrac12<0$, risulta $h(x)<0$ per ogni $x>0$: il grafico sta interamente sotto l'asse $x$ e la funzione non ha zeri (coerente con $a>\frac{1}{2e}$).

**Concavità.**
$$h''(x)=-\frac{1}{x^2}-1<0 \quad \text{per ogni } x>0,$$
quindi $h$ è ovunque concava e non presenta flessi.

Il grafico è dunque una curva concava, con un solo picco nel punto $\left(1,-\dfrac12\right)$, che tende a $-\infty$ sia avvicinandosi all'asse $y$ sia per $x\to+\infty$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="182.545" height="147.121" viewBox="-72 -72 136.909 110.34"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.306 37.87v-96.624"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="-43.505" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -21.126)">y</text><path fill="none" d="M-70.859-43.505H51.658"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M49.778-45.905c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-66.306" y="-43.505" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.897 2.153)">x</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.388 19.91 1.25-5.432 1.25-4.707 1.251-4.1 1.25-3.594 1.251-3.173 1.25-2.82 1.25-2.522 1.251-2.273 1.25-2.051 1.25-1.865 1.251-1.694 1.25-1.545 1.251-1.41 1.25-1.288 1.25-1.174 1.251-1.069 1.25-.974 1.25-.882 1.251-.798 1.25-.72 1.25-.645 1.251-.573 1.25-.507 1.251-.44 1.25-.382 1.25-.321 1.251-.265 1.25-.21 1.25-.154 1.251-.108 1.25-.055 1.251-.013 1.25.04 1.25.084 1.251.128 1.25.172 1.25.214 1.251.256 1.25.297 1.25.336 1.251.377 1.25.414 1.251.453 1.25.49 1.25.527 1.251.563 1.25.599 1.25.634 1.251.67 1.25.702 1.251.739 1.25.77 1.25.805 1.251.838 1.25.87 1.25.902 1.251.934 1.25.968 1.251.998 1.25 1.029 1.25 1.063 1.251 1.087 1.25 1.125 1.25 1.154 1.251 1.18 1.25 1.216 1.25 1.238 1.251 1.274 1.25 1.298 1.251 1.33 1.25 1.362 1.25 1.389 1.251 1.418 1.25 1.448 1.25 1.476 1.251 1.503 1.25 1.533 1.251 1.561 1.25 1.59"/><path stroke="none" d="M-18.702-27.856c0-.79-.93-1.43-2.08-1.43-1.148 0-2.08.64-2.08 1.43s.932 1.43 2.08 1.43c1.15 0 2.08-.64 2.08-1.43m-2.08 0"/><g stroke="none"><text x="-66.306" y="-51.105" font-family="cmex10" font-size="10" transform="translate(49.058 8.116)">¡</text><text x="-61.723" y="-43.505" font-family="cmr8" font-size="8" transform="translate(49.058 8.116)">1</text><text x="-57.473" y="-43.505" font-family="cmmi8" font-size="8" transform="translate(49.058 8.116)">;</text><text x="-53.695" y="-43.505" font-family="cmsy8" font-size="8" transform="translate(49.058 8.116)">¡</text><text x="-45.884" y="-46.776" font-family="cmr6" font-size="6" transform="translate(49.058 8.116)">1</text><path d="M3.174-37.589H6.84v.4H3.174z"/><text x="-45.884" y="-40.368" font-family="cmr6" font-size="6" transform="translate(49.058 8.116)">2</text><text x="-41.017" y="-51.105" font-family="cmex10" font-size="10" transform="translate(49.058 8.116)">¢</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.108](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
