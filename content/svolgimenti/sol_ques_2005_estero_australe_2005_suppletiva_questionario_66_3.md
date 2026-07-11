

**Quesito:** [[Quesiti/ques_2005_estero_australe_2005_suppletiva_questionario_66_3|2005 Estero Australe Suppletiva — Questionario — Quesito 3]] · **Prova:** [[Prove/2005_estero_australe_2005_suppletiva_questionario_66|2005 Estero Australe Suppletiva — Questionario]]

Determinare il cono di volume massimo inscrivibile in una sfera di raggio $R$ assegnato.

## Impostazione

Consideriamo la sezione assiale del cono inscritto nella sfera: è un triangolo isoscele inscritto nel cerchio massimo di raggio $R$. Indichiamo con $h$ l'altezza del cono e con $r$ il raggio della sua base.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="198.339" height="216.091" viewBox="-72 -72 148.755 162.068"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M76.085 15.42c0-40.856-33.12-73.976-73.978-73.976S-71.87-25.436-71.87 15.42s33.12 73.977 73.977 73.977 73.978-33.12 73.978-73.977Zm-73.978 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="m2.107-58.57-69.774 98.667H71.881ZM-67.667 40.097H71.881"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" d="M2.107-58.57v98.667"/><path stroke="none" d="M3.667 15.42a1.56 1.56 0 1 0-3.12 0 1.56 1.56 0 0 0 3.12 0m-1.56 0"/><text x="2.107" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 3.417)">O</text><path fill="none" stroke-dasharray="3.0,3.0" d="M2.107 15.42h73.978"/><text x="2.107" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.853 -4.72)">R</text><text x="2.107" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -77.525)">V</text><text x="2.107" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-7.445 -24.27)">h</text><text x="2.107" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.395 32.515)">r</text><path fill="none" d="M-66.853 50.56h68.16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-64.973 52.96c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4"/><path fill="none" d="M-67.453 52.86v-4.6"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-.573 48.16c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><path fill="none" d="M1.907 48.26v4.6"/></g></svg>
</figure>

Il vertice del cono e il centro della base sono estremi di una corda che è diametro; la base del cono è la corda perpendicolare a essa. Per il secondo teorema di Euclide (relazione tra l'altezza relativa all'ipotenusa e le proiezioni dei cateti nel triangolo rettangolo inscritto nella semicirconferenza) si ha

$$r^{2} = h\,(2R - h),$$

con la limitazione geometrica $0 \le h \le 2R$.

Il volume del cono è

$$V = \frac{1}{3}\pi r^{2} h = \frac{1}{3}\pi\, h^{2}(2R - h).$$

Poiché il fattore $\frac{1}{3}\pi$ è una costante positiva, il volume è massimo quando è massima la funzione

$$z(h) = h^{2}(2R - h), \qquad 0 \le h \le 2R.$$

## Ricerca del massimo

Deriviamo:

$$z'(h) = 2h(2R - h) + h^{2}(-1) = 4Rh - 3h^{2} = h\,(4R - 3h).$$

Studiamo il segno di $z'(h)$ nell'intervallo $0 \le h \le 2R$:

$$z'(h) \ge 0 \iff h\,(4R - 3h) \ge 0 \iff 0 \le h \le \frac{4}{3}R.$$

Quindi $z$ è crescente per $0 < h < \frac{4}{3}R$ e decrescente per $\frac{4}{3}R < h < 2R$: in

$$h = \frac{4}{3}R$$

la funzione $z$, e dunque il volume del cono, assume il valore massimo. L'altezza del cono ottimo è pari ai $\frac{4}{3}$ del raggio della sfera.

## Dimensioni e volume del cono ottimo

Il raggio di base corrispondente si ottiene dalla relazione $r^{2} = h(2R - h)$:

$$r^{2} = \frac{4}{3}R\left(2R - \frac{4}{3}R\right) = \frac{4}{3}R \cdot \frac{2}{3}R = \frac{8}{9}R^{2}, \qquad r = \frac{2\sqrt{2}}{3}\,R.$$

Il volume massimo vale allora

$$V_{\max} = \frac{1}{3}\pi\, r^{2} h = \frac{1}{3}\pi \cdot \frac{8}{9}R^{2} \cdot \frac{4}{3}R = \frac{32}{81}\pi R^{3}.$$

**Conclusione.** Il cono di volume massimo inscritto in una sfera di raggio $R$ ha altezza $h = \dfrac{4}{3}R$, raggio di base $r = \dfrac{2\sqrt{2}}{3}R$ e volume

$$V_{\max} = \frac{32}{81}\pi R^{3}.$$

*Fonte:* [📄 PDF p.67](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
