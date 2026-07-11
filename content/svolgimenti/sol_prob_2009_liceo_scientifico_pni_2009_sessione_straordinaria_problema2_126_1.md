

**Problema:** [[Problemi/prob_2009_liceo_scientifico_pni_2009_sessione_straordinaria_problema2_126_1|2009 PNI Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2009_liceo_scientifico_pni_2009_sessione_straordinaria_problema2_126|2009 PNI Straordinaria — Problema 2]]

Si consideri la funzione $f$ definita da

$$f(x) = \frac{1}{2}\,\ln\frac{1+x}{1-x}.$$

Si studi $f$ e se ne tracci il grafico $\gamma$; si dimostri che $f$ è invertibile e se ne determini l'inversa; si scriva la tangente nel punto di ascissa $x=0$ e si calcoli l'area della regione compresa fra $\gamma$, la tangente e la retta $x=\frac{1}{2}$; si calcoli infine $\int_{0}^{1/2} f(x)\,dx$.

## a) Studio della funzione

**Dominio.** L'argomento del logaritmo deve essere strettamente positivo:

$$\frac{1+x}{1-x} > 0 \quad\Rightarrow\quad -1 < x < 1.$$

La funzione è dunque definita sull'intervallo aperto $(-1,\,1)$.

**Simmetria.** Calcoliamo

$$f(-x) = \frac{1}{2}\ln\frac{1-x}{1+x} = -\frac{1}{2}\ln\frac{1+x}{1-x} = -f(x):$$

la funzione è **dispari**, con grafico simmetrico rispetto all'origine.

**Intersezioni con gli assi.** Per $x=0$ si ha $f(0)=\frac{1}{2}\ln 1=0$. Se $f(x)=0$ allora $\frac{1+x}{1-x}=1$, cioè $x=0$. L'unica intersezione è l'origine.

**Segno.** Si ha $f(x)>0$ quando $\frac{1+x}{1-x}>1$, ovvero $\frac{2x}{1-x}>0$: ciò accade per $0<x<1$. Per la disparità, $f(x)<0$ per $-1<x<0$.

**Limiti e asintoti.** Per $x\to 1^-$ il numeratore $1+x\to 2$ e il denominatore $1-x\to 0^+$, dunque

$$\lim_{x\to 1^-} f(x) = +\infty, \qquad \lim_{x\to (-1)^+} f(x) = -\infty.$$

Le rette $x=1$ e $x=-1$ sono **asintoti verticali**.

**Derivata prima.** Scrivendo $f(x)=\frac{1}{2}\big[\ln(1+x)-\ln(1-x)\big]$ si ottiene

$$f'(x)=\frac{1}{2}\left(\frac{1}{1+x}+\frac{1}{1-x}\right) = \frac{1}{1-x^2}.$$

Poiché $1-x^2>0$ nel dominio, $f'(x)>0$ per ogni $x\in(-1,1)$: la funzione è **strettamente crescente**, priva di massimi e minimi. Nell'origine $f'(0)=1$.

**Derivata seconda.**

$$f''(x)=\frac{2x}{(1-x^2)^2}.$$

Si ha $f''(x)>0$ per $x>0$ (concavità verso l'alto) e $f''(x)<0$ per $x<0$ (concavità verso il basso). Il punto $(0,0)$ è un **flesso a tangente obliqua**.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="287.533" height="236.27" viewBox="-72 -72 215.65 177.202"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 22.79h202.469"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M128.519 20.39c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="29.364" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(104.967 2.153)">x</text><path fill="none" d="M29.364 104.732V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M26.964-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="29.364" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -87.42)">y</text><path fill="none" d="M-36.077 24.07v-2.561"/><g stroke="none" font-size="7"><text x="29.364" y="22.789" font-family="cmsy7" transform="translate(-70.56 8.764)">¡</text><text x="35.614" y="22.789" font-family="cmr7" transform="translate(-70.56 8.764)">1</text></g><path fill="none" d="M-3.356 24.07v-2.561"/><g stroke="none" font-size="7"><text x="29.364" y="22.789" font-family="cmsy7" transform="translate(-41.02 8.764)">¡</text><text x="35.614" y="22.789" font-family="cmr7" transform="translate(-41.02 8.764)">0</text><text x="39.601" y="22.789" font-family="cmmi7" transform="translate(-41.02 8.764)">:</text><text x="41.976" y="22.789" font-family="cmr7" transform="translate(-41.02 8.764)">5</text></g><path fill="none" d="M62.085 24.07v-2.561"/><g stroke="none" font-size="7"><text x="29.364" y="22.789" font-family="cmr7" transform="translate(27.547 8.764)">0</text><text x="33.35" y="22.789" font-family="cmmi7" transform="translate(27.547 8.764)">:</text><text x="35.725" y="22.789" font-family="cmr7" transform="translate(27.547 8.764)">5</text></g><path fill="none" d="M94.806 24.07v-2.561"/><text x="29.364" y="22.789" stroke="none" font-family="cmr7" font-size="7" transform="translate(63.448 8.764)">1</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-36.077 102.172V-56.594M94.806 102.172V-56.594"/><g fill="gray" stroke="gray"><g fill="gray" stroke="none" font-size="7"><text x="29.364" y="22.789" font-family="cmmi7" transform="translate(68.974 -70.112)">x</text><text x="36.175" y="22.789" font-family="cmr7" transform="translate(68.974 -70.112)">=</text><text x="44.59" y="22.789" font-family="cmr7" transform="translate(68.974 -70.112)">1</text></g></g><g fill="gray" stroke="gray"><g fill="gray" stroke="none" font-size="7"><text x="29.364" y="22.789" font-family="cmmi7" transform="translate(-94.437 -70.945)">x</text><text x="36.175" y="22.789" font-family="cmr7" transform="translate(-94.437 -70.945)">=</text><text x="44.59" y="22.789" font-family="cmsy7" transform="translate(-94.437 -70.945)">¡</text><text x="50.841" y="22.789" font-family="cmr7" transform="translate(-94.437 -70.945)">1</text></g></g><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="m-65.525 59.92 7.906-3.094 7.907-3.094 7.906-3.094 7.907-3.094 7.906-3.094 7.907-3.093 7.907-3.094 7.906-3.094 7.907-3.094 7.906-3.094 7.907-3.094 7.906-3.094L37.26 19.7l7.906-3.094 7.907-3.094 7.907-3.094 7.906-3.094 7.907-3.094 7.906-3.093 7.907-3.094 7.906-3.094 7.907-3.094 7.907-3.094 7.906-3.094"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="7"><text x="29.364" y="22.789" font-family="cmmi7" transform="translate(48.92 -33.062)">y</text><text x="35.947" y="22.789" font-family="cmr7" transform="translate(48.92 -33.062)">=</text><text x="44.362" y="22.789" font-family="cmmi7" transform="translate(48.92 -33.062)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-32.15 67.307 1.556-4.46 1.557-3.336 1.557-2.911 1.556-2.183 1.557-1.946 1.557-1.734 1.557-1.908 1.556-1.32 1.557-1.26 1.557-1.196 1.557-1.133 1.556-1.086 1.557-1.028 1.557-.988 1.557-.938 1.556-.906 1.557-.871 1.557-.84 1.557-.81 1.556-.788 1.557-.77 1.557-.745 1.557-.73 1.556-.71 1.557-.696 1.557-.686 1.557-.676 1.556-.666 1.557-.652 1.557-.646 1.557-.64 1.556-.631 1.557-.626 1.557-.623 1.557-.617 1.556-.614 1.557-.613 1.557-.61 1.557-.61 1.556-.609 1.557-.61 1.557-.61 1.556-.612 1.557-.616 1.557-.617 1.557-.623 1.556-.626 1.557-.632 1.557-.638 1.557-.646 1.556-.654 1.557-.662 1.557-.672 1.557-.688 1.556-.698 1.557-.712 1.557-.729 1.557-.745 1.556-.766 1.557-.786 1.557-.81 1.557-.839 1.556-.87 1.557-.902 1.557-.944 1.557-.986 1.556-1.037 1.557-1.093L75.265.51l1.557-1.24 1.556-1.335 1.557-1.448L81.492-5.1l1.557-1.76 1.556-1.985 1.557-2.284 1.557-2.705 1.557-3.336 1.556-4.391"/><path stroke="none" d="M32.584 22.79c0-.697-1.441-1.26-3.22-1.26-1.778 0-3.22.563-3.22 1.26 0 .695 1.442 1.26 3.22 1.26s3.22-.565 3.22-1.26m-3.22 0"/><text x="29.364" y="22.789" stroke="none" font-family="cmmi7" font-size="7" transform="translate(3.533 8.316)">O</text></g></svg>
</figure>

## b) Invertibilità e funzione inversa

Essendo $f$ strettamente crescente su $(-1,1)$, essa è iniettiva e dunque **invertibile**; il suo codominio è $\mathbb{R}$, poiché assume tutti i valori da $-\infty$ a $+\infty$. Per determinare l'inversa poniamo $y=\frac{1}{2}\ln\frac{1+x}{1-x}$ e risolviamo rispetto a $x$:

$$e^{2y}=\frac{1+x}{1-x}, \quad e^{2y}(1-x)=1+x, \quad e^{2y}-1=x\,(1+e^{2y}),$$

da cui

$$x = \frac{e^{2y}-1}{e^{2y}+1}.$$

Pertanto

$$f^{-1}(y)=\frac{e^{2y}-1}{e^{2y}+1},$$

definita su tutto $\mathbb{R}$ e a valori in $(-1,1)$.

**Osservazione.** La funzione $f(x)=\frac{1}{2}\ln\frac{1+x}{1-x}$ è l'inversa della tangente iperbolica: la sua inversa è appunto $\tanh(y)$.

## c) Tangente nell'origine e area

La tangente nel punto di ascissa $x=0$ ha pendenza $f'(0)=1$ e passa per l'origine: la sua equazione è

$$r:\ y=x.$$

Per $0<x<1$ la curva è convessa e sta sotto la tangente, dunque $x>f(x)$. L'area della regione compresa fra $\gamma$, la tangente $r$ e la retta $x=\frac{1}{2}$ è

$$A = \int_0^{1/2}\big[x - f(x)\big]\,dx = \int_0^{1/2} x\,dx - \int_0^{1/2} f(x)\,dx.$$

Poiché $\int_0^{1/2} x\,dx = \frac{1}{8}$ e, per il punto d), $\int_0^{1/2} f(x)\,dx = \frac{1}{4}(3\ln 3-4\ln 2)$, si ha

$$A = \frac{1}{8} - \frac{1}{4}(3\ln 3-4\ln 2) \approx 0{,}125 - 0{,}128 \approx 0{,}003\ \text{u}^2.$$

La differenza è piccolissima: la curva resta vicinissima alla propria tangente in un intorno dell'origine, coerentemente con l'approssimazione $f(x)\approx x$ per $x$ piccolo (lo sviluppo di Taylor dà $f(x)=x+\frac{x^3}{3}+\cdots$).

## d) Calcolo dell'integrale

Scriviamo $f(x)=\frac{1}{2}\big[\ln(1+x)-\ln(1-x)\big]$ e integriamo per parti ciascun logaritmo:

$$\int\ln(1+x)\,dx = (1+x)\ln(1+x)-(1+x)+C,$$

$$\int\ln(1-x)\,dx = -(1-x)\ln(1-x)+(1-x)+C.$$

Dunque una primitiva di $f$ è

$$\int f(x)\,dx = \frac{1}{2}\big[(1+x)\ln(1+x)+(1-x)\ln(1-x)-2\big]+C.$$

Valutando tra $0$ e $\frac{1}{2}$:

$$\begin{aligned}
\int_0^{1/2}f(x)\,dx &= \frac{1}{2}\left[\frac{3}{2}\ln\frac{3}{2}+\frac{1}{2}\ln\frac{1}{2}-2\right] - \frac{1}{2}\big[0+0-2\big] \\
&= \frac{1}{2}\left[\frac{3}{2}\ln\frac{3}{2}+\frac{1}{2}\ln\frac{1}{2}\right] = \frac{1}{4}\big(3\ln 3-4\ln 2\big) \approx 0{,}128.
\end{aligned}$$

*Fonte:* [📄 PDF p.126](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
