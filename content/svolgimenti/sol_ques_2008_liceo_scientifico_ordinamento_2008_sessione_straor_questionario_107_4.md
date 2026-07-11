

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_4|2008 Ordinamento Straordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si consideri la funzione

$$f(x)=\begin{cases}\dfrac{3x^2+\sqrt{4x^2}}{x} & x\ne 0\\[2mm] 2 & x=0\end{cases}$$

Se ne studi la continuità per $x=0$ e se ne tracci il grafico.

## a) Semplificazione dell'espressione

Per $x\ne 0$ osserviamo che $\sqrt{4x^2}=2\sqrt{x^2}=2\,|x|$. Distinguendo il segno di $x$:

$$f(x)=\frac{3x^2+2|x|}{x}=\begin{cases}\dfrac{3x^2+2x}{x}=3x+2 & x>0\\[2mm] \dfrac{3x^2-2x}{x}=3x-2 & x<0\end{cases}$$

La funzione coincide quindi con due semirette: $y=3x+2$ per $x>0$ e $y=3x-2$ per $x<0$.

## b) Studio della continuità in $x=0$

Calcoliamo i limiti destro e sinistro e confrontiamoli con $f(0)=2$.

Limite destro:

$$\lim_{x\to 0^+} f(x)=\lim_{x\to 0^+}(3x+2)=2=f(0)$$

quindi $f$ è **continua da destra** in $x=0$.

Limite sinistro:

$$\lim_{x\to 0^-} f(x)=\lim_{x\to 0^-}(3x-2)=-2\ne f(0)$$

quindi $f$ **non è continua da sinistra** in $x=0$.

Poiché i due limiti laterali esistono, sono finiti ma diversi tra loro, la funzione **non è continua in $x=0$**: si tratta di una **discontinuità di prima specie** (discontinuità di salto), con salto di ampiezza

$$\lim_{x\to 0^+} f(x)-\lim_{x\to 0^-} f(x)=2-(-2)=4.$$

## c) Grafico

Il grafico è costituito dalle due semirette parallele $y=3x+2$ (per $x>0$) e $y=3x-2$ (per $x<0$), che hanno lo stesso coefficiente angolare $3$. Nel punto $x=0$ il valore assegnato è $f(0)=2$: il punto $(0,2)$ appartiene alla semiretta di destra (estremo incluso), mentre il punto $(0,-2)$ è escluso.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="203.729" height="493.491" viewBox="-72 -72 152.797 370.118"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-69.766 112.79H67.546"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M65.666 110.39c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-.91" y="112.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(72.389 2.153)">x</text><path fill="none" d="M-.91 244.241V-18.263"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-3.31-16.383c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-.91" y="112.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -136.93)">y</text><path fill="none" d="M-63.506 110.285v5.008"/><g stroke="none" font-size="8"><text x="-.91" y="112.789" font-family="cmsy8" transform="translate(-68.027 11.192)">¡</text><text x="5.701" y="112.789" font-family="cmr8" transform="translate(-68.027 11.192)">2</text></g><path fill="none" d="M-32.208 110.285v5.008"/><g stroke="none" font-size="8"><text x="-.91" y="112.789" font-family="cmsy8" transform="translate(-36.729 11.192)">¡</text><text x="5.701" y="112.789" font-family="cmr8" transform="translate(-36.729 11.192)">1</text></g><path fill="none" d="M30.388 110.285v5.008"/><text x="-.91" y="112.789" stroke="none" font-family="cmr8" font-size="8" transform="translate(29.173 11.192)">1</text><path fill="none" d="M61.686 110.285v5.008"/><text x="-.91" y="112.789" stroke="none" font-family="cmr8" font-size="8" transform="translate(60.471 11.192)">2</text><path fill="none" d="M1.594 237.982h-5.008"/><g stroke="none" font-size="8"><text x="-.91" y="112.789" font-family="cmsy8" transform="translate(-16.898 127.354)">¡</text><text x="5.701" y="112.789" font-family="cmr8" transform="translate(-16.898 127.354)">4</text></g><path fill="none" d="M1.594 175.385h-5.008"/><g stroke="none" font-size="8"><text x="-.91" y="112.789" font-family="cmsy8" transform="translate(-16.898 64.757)">¡</text><text x="5.701" y="112.789" font-family="cmr8" transform="translate(-16.898 64.757)">2</text></g><path fill="none" d="M1.594 50.193h-5.008"/><text x="-.91" y="112.789" stroke="none" font-family="cmr8" font-size="8" transform="translate(-10.287 -60.019)">2</text><path fill="none" d="M1.594-12.404h-5.008"/><text x="-.91" y="112.789" stroke="none" font-family="cmr8" font-size="8" transform="translate(-10.287 -122.615)">4</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-.91 50.193 39.778-71.87M-41.598 297.448-.91 175.385"/><path fill="#00f" stroke="none" d="M1.51 50.193a2.42 2.42 0 1 0-4.84 0 2.42 2.42 0 0 0 4.84 0m-2.42 0"/><path fill="#fff" stroke="#00f" stroke-width=".8" d="M1.51 175.385a2.42 2.42 0 1 0-4.84 0 2.42 2.42 0 0 0 4.84 0Zm-2.42 0"/></g></svg>
</figure>

*Fonte:* [📄 PDF p.109](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
