

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78_4|2005 Europa Ordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78|2005 Europa Ordinaria — Questionario]]

Si vuole determinare il cilindro di volume massimo inscrivibile in una sfera assegnata di raggio $R$.

## Impostazione

Indichiamo con $R$ il raggio della sfera, con $r$ il raggio di base del cilindro e con $h$ la sua altezza. Consideriamo la sezione assiale della configurazione, cioè la sezione con un piano passante per l'asse comune: la sfera dà un cerchio di raggio $R$ e il cilindro un rettangolo di base $2r$ e altezza $h$ inscritto in tale cerchio.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="213.489" height="198.339" viewBox="-72 -72 160.116 148.755"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M76.085 2.107c0-40.857-33.12-73.977-73.978-73.977S-71.87-38.75-71.87 2.107s33.12 73.978 73.977 73.978 73.978-33.12 73.978-73.978Zm-73.978 0"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-58.295 44.83v-85.445H62.51V44.83ZM62.51-40.616"/><path fill="none" stroke-dasharray="3.0,3.0" d="M2.107 2.107 62.51-40.615"/><text x="2.107" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(23.906 -24.325)">R</text><path fill="none" d="M-57.895 53.891H62.11"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-56.015 56.291c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4M60.23 51.491c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><g stroke="none" font-size="10"><text x="2.107" y="2.107" font-family="cmr10" transform="translate(-4.895 64.253)">2</text><text x="7.107" y="2.107" font-family="cmmi10" transform="translate(-4.895 64.253)">r</text></g><path fill="none" d="M70.536 44.43v-84.645"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M72.936 42.55c-1.44.38-2.12 1.226-2.4 2.08-.28-.854-.96-1.7-2.4-2.08M68.137-38.335c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="2.107" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(76.645 3.472)">h</text><path stroke="none" d="M4.057 2.107a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><text x="2.107" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.35 12.664)">O</text></g></svg>
</figure>

La diagonale del rettangolo è un diametro del cerchio, quindi coincide con $2R$. Applicando il teorema di Pitagora al triangolo rettangolo che ha per cateti $r$ e $\frac{h}{2}$ e per ipotenusa $R$ (metà diagonale) si ottiene il legame tra le grandezze:

$$r^2 + \frac{h^2}{4} = R^2 \quad\Rightarrow\quad r^2 = R^2 - \frac{h^2}{4}.$$

## Funzione volume

Il volume del cilindro è $V = \pi r^2 h$. Sostituendo $r^2$ lo esprimiamo in funzione della sola altezza $h$, con $0 < h < 2R$:

$$V(h) = \pi\left(R^2 - \frac{h^2}{4}\right)h = \pi\left(R^2 h - \frac{h^3}{4}\right).$$

## Ricerca del massimo

Deriviamo rispetto ad $h$ e imponiamo l'annullamento della derivata:

$$V'(h) = \pi\left(R^2 - \frac{3h^2}{4}\right) = 0 \quad\Rightarrow\quad h^2 = \frac{4R^2}{3} \quad\Rightarrow\quad h = \frac{2R}{\sqrt{3}} = \frac{2\sqrt{3}}{3}\,R.$$

Poiché $V'(h) > 0$ per $0 < h < \frac{2R}{\sqrt{3}}$ e $V'(h) < 0$ per $\frac{2R}{\sqrt{3}} < h < 2R$, la funzione cresce fino a tale valore e poi decresce: il punto trovato è quindi un massimo assoluto.

## Dimensioni e volume massimo

Il raggio di base corrispondente vale

$$r^2 = R^2 - \frac{h^2}{4} = R^2 - \frac{R^2}{3} = \frac{2}{3}R^2 \quad\Rightarrow\quad r = R\sqrt{\frac{2}{3}} = \frac{\sqrt{6}}{3}\,R,$$

e il volume massimo è

$$V_{\max} = \pi r^2 h = \pi \cdot \frac{2}{3}R^2 \cdot \frac{2R}{\sqrt{3}} = \frac{4\pi R^3}{3\sqrt{3}} = \frac{4\sqrt{3}}{9}\,\pi R^3 \approx 0{,}770\,\pi R^3.$$

Il cilindro di volume massimo inscritto in una sfera di raggio $R$ ha dunque altezza $h = \dfrac{2\sqrt{3}}{3}R$ e raggio di base $r = \dfrac{\sqrt{6}}{3}R$. Si osservi che il suo volume è una frazione fissa del volume della sfera:

$$\frac{V_{\max}}{\frac{4}{3}\pi R^3} = \frac{\sqrt{3}}{3} \approx 0{,}577,$$

indipendente dal raggio della sfera.

*Fonte:* [📄 PDF p.79](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
