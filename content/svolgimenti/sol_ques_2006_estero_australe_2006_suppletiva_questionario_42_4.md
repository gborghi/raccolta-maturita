

**Quesito:** [[Quesiti/ques_2006_estero_australe_2006_suppletiva_questionario_42_4|2006 Australe Suppletiva — Questionario — Quesito 4]] · **Prova:** [[Prove/2006_estero_australe_2006_suppletiva_questionario_42|2006 Australe Suppletiva — Questionario]]

Fra tutti i coni inscritti in una data sfera, trovare quello di volume massimo.

Sia $R$ il raggio della sfera. Indichiamo con $h$ l'altezza del cono inscritto e con $r$ il raggio della sua base. Il cono ha l'asse passante per il centro $O$ della sfera; il vertice e la circonferenza di base appartengono alla superficie sferica.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="197.806" height="215.824" viewBox="-72 -72 148.355 161.868"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M75.885 15.42c0-40.856-33.12-73.976-73.978-73.976S-72.07-25.436-72.07 15.42s33.12 73.977 73.977 73.977 73.978-33.12 73.978-73.977Zm-73.978 0"/><path fill="none" stroke-width=".8" d="m1.907-58.57-69.774 98.667H71.681Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M1.907-58.57v98.667M1.907 40.097h69.774"/><path fill="none" d="m1.907 15.42 69.774 24.677"/><path stroke="none" d="M3.597 15.42a1.69 1.69 0 1 0-3.38 0 1.69 1.69 0 0 0 3.38 0M3.597-58.57a1.69 1.69 0 1 0-3.38 0 1.69 1.69 0 0 0 3.38 0m-1.69 0"/><text x="1.907" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -77.525)">V</text><text x="1.907" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(9.081 1.567)">O</text><text x="1.907" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-12.994 -24.27)">h</text><text x="1.907" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(30.895 33.73)">r</text><text x="1.907" y="15.421" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.823 9.413)">R</text></g></svg>
</figure>

Considerando la sezione con il piano contenente l'asse del cono, otteniamo un triangolo inscritto in una circonferenza di raggio $R$, di base $2r$ e altezza $h$. Il diametro relativo al vertice vale $2R$; per il secondo teorema di Euclide (l'altezza è media proporzionale fra le proiezioni degli estremi del diametro) si ha

$$r^2 = h\,(2R - h).$$

Il volume del cono è

$$V = \frac{1}{3}\,\pi\, r^2 h = \frac{1}{3}\,\pi\, h^2 (2R - h),$$

con $h$ che può variare fra $0$ e $2R$.

Poiché il fattore $\frac{1}{3}\pi$ è costante e positivo, il volume è massimo quando è massima la funzione

$$f(h) = h^2 (2R - h) = 2R\,h^2 - h^3, \qquad 0 < h < 2R.$$

Deriviamo rispetto ad $h$:

$$f'(h) = 4R\,h - 3h^2 = h\,(4R - 3h).$$

Nell'intervallo $0 < h < 2R$ la derivata si annulla per

$$4R - 3h = 0 \;\Rightarrow\; h = \frac{4}{3}R.$$

Studiando il segno di $f'(h) = h\,(4R - 3h)$: per $0 < h < \frac{4}{3}R$ si ha $f'(h) > 0$ (funzione crescente), mentre per $\frac{4}{3}R < h < 2R$ si ha $f'(h) < 0$ (funzione decrescente). Dunque $h = \frac{4}{3}R$ è un punto di massimo assoluto.

Il raggio di base corrispondente si ricava dalla relazione $r^2 = h(2R - h)$:

$$r^2 = \frac{4}{3}R\left(2R - \frac{4}{3}R\right) = \frac{4}{3}R \cdot \frac{2}{3}R = \frac{8}{9}R^2, \qquad r = \frac{2\sqrt{2}}{3}R.$$

Il volume massimo vale quindi

$$V_{\max} = \frac{1}{3}\,\pi \cdot \frac{8}{9}R^2 \cdot \frac{4}{3}R = \frac{32}{81}\,\pi R^3.$$

**Conclusione.** Fra tutti i coni inscritti in una sfera di raggio $R$, quello di volume massimo ha altezza pari ai $\frac{4}{3}$ del raggio della sfera:

$$h = \frac{4}{3}R, \qquad r = \frac{2\sqrt{2}}{3}R, \qquad V_{\max} = \frac{32}{81}\,\pi R^3.$$

*Fonte:* [📄 PDF p.43](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
