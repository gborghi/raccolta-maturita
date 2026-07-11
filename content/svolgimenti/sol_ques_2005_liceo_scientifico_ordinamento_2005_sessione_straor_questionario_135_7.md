

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_7|2005 Ordinamento Straordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Determinare il dominio di derivabilità della funzione $f(x)=|x^2-1|$.

Poiché $x^2-1\ge 0$ se e solo se $x\le -1$ oppure $x\ge 1$, il valore assoluto si esplicita così:

$$f(x)=\begin{cases} x^2-1 & \text{se } x\le -1 \text{ oppure } x\ge 1,\\[2pt] 1-x^2 & \text{se } -1<x<1. \end{cases}$$

La funzione è **continua** su tutto $\mathbb{R}$: è composta da tratti polinomiali continui e nei punti di raccordo $x=\pm 1$ entrambe le espressioni valgono $0$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="250.732" height="208.959" viewBox="-72 -72 188.049 156.719"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 68.314h174.868"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M100.918 65.914c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="15.564" y="68.314" stroke="none" font-family="cmmi10" font-size="10" transform="translate(91.167 2.153)">x</text><path fill="none" d="M15.564 84.247V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M13.164-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="15.564" y="68.314" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -132.945)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.103-51.187 1.338 5.309 1.338 5.218 1.339 5.13 1.338 5.038 1.339 4.949 1.338 4.859 1.338 4.769 1.339 4.679 1.338 4.59 1.339 4.498 1.338 4.41 1.338 4.318 1.339 4.23 1.338 4.14 1.339 4.049 1.338 3.96 1.339 3.869 1.338 3.78 1.338 3.69 1.339 3.6 1.338 3.509 1.339 3.42 1.338 3.33 1.338 3.24 1.339 3.15 1.338 3.06 1.339 2.97 1.338 2.88 1.338 2.791 1.339 1.431 1.338-2.61 1.339-2.521 1.338-2.43 1.338-2.342 1.339-2.25 1.338-2.161 1.339-2.07 1.338-1.981 1.338-1.891 1.339-1.801 1.338-1.712 1.339-1.62 1.338-1.532 1.338-1.44 1.339-1.352 1.338-1.261 1.339-1.171L.14 34.452l1.338-.992 1.339-.901 1.338-.812 1.339-.722 1.338-.631 1.339-.542 1.338-.452 1.338-.362 1.339-.272 1.338-.182 1.339-.092 1.338-.002 1.338.088 1.339.177 1.338.268 1.339.358 1.338.447 1.338.537 1.339.628 1.338.717 1.339.808 1.338.897 1.338.987 1.339 1.077 1.338 1.167 1.339 1.257 1.338 1.347 1.338 1.437 1.339 1.527 1.338 1.617 1.339 1.707 1.338 1.796 1.338 1.886 1.339 1.977 1.338 2.066 1.339 2.157 1.338 2.246L51 60.002l1.339 2.427 1.338 2.516 1.339 2.606 1.338-1.17 1.338-2.787 1.339-2.876 1.338-2.966 1.339-3.056 1.338-3.145 1.338-3.236 1.339-3.326 1.338-3.415 1.339-3.506 1.338-3.595 1.339-3.686 1.338-3.775 1.338-3.865 1.339-3.956 1.338-4.045 1.339-4.135 1.338-4.225 1.338-4.314 1.339-4.406 1.338-4.495 1.339-4.584 1.338-4.675 1.338-4.765 1.339-4.854 1.338-4.945 1.339-5.034 1.338-5.125 1.338-5.214 1.339-5.305"/><path stroke="none" d="M57.358000000000004 68.314a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0M-22.31 68.314a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0m-1.96 0"/><text x="15.564" y="68.314" stroke="none" font-family="cmr10" font-size="10" transform="translate(37.334 11.97)">1</text><g stroke="none" font-size="10"><text x="15.564" y="68.314" font-family="cmsy10" transform="translate(-46.223 11.97)">¡</text><text x="23.342" y="68.314" font-family="cmr10" transform="translate(-46.223 11.97)">1</text></g><text x="15.564" y="68.314" stroke="none" font-family="cmr10" font-size="10" transform="translate(3.533 -43.367)">1</text><path stroke="none" d="M17.524 28.48a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0m-1.96 0"/></g></svg>
</figure>

Per studiare la derivabilità deriviamo separatamente i due rami:

$$f'(x)=\begin{cases} 2x & \text{se } x<-1 \text{ oppure } x>1,\\[2pt] -2x & \text{se } -1<x<1. \end{cases}$$

Nei punti interni ai vari intervalli la funzione è derivabile, poiché è ovunque un polinomio. Restano da esaminare i due punti di raccordo $x=1$ e $x=-1$, confrontando derivata sinistra e derivata destra.

Nel punto $x=1$:

$$f'_-(1)=\lim_{x\to 1^-}(-2x)=-2,\qquad f'_+(1)=\lim_{x\to 1^+}(2x)=2.$$

I due limiti sono finiti ma diversi: in $x=1$ c'è un **punto angoloso** e la funzione non è derivabile.

Nel punto $x=-1$:

$$f'_-(-1)=\lim_{x\to -1^-}(2x)=-2,\qquad f'_+(-1)=\lim_{x\to -1^+}(-2x)=2.$$

Anche qui le derivate laterali sono finite e distinte: in $x=-1$ c'è un **punto angoloso** e la funzione non è derivabile.

**Conclusione.** La funzione $f(x)=|x^2-1|$ è derivabile in ogni punto di $\mathbb{R}$ tranne che in $x=1$ e $x=-1$. Il dominio di derivabilità è quindi

$$\mathbb{R}\setminus\{-1,\,1\},\qquad \text{cioè } x\ne \pm 1.$$

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
