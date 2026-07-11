

**Quesito:** [[Quesiti/ques_2009_america_latina_suppletiva_2009_questionario_47_4|2009 America Latina Suppletiva — Questionario — Quesito 4]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_questionario_47|2009 America Latina Suppletiva — Questionario]]

Fra tutti i coni inscritti in una data sfera di raggio $R$, si vuole determinare quello di volume massimo.

## Impostazione del problema

Consideriamo la sezione assiale del cono e della sfera. Indichiamo con $y$ l'altezza del cono e con $x$ il raggio della sua base. Il vertice del cono e la circonferenza di base appartengono alla sfera, quindi il diametro $AA'$ passante per il vertice è un'altezza del triangolo rettangolo iscritto nel cerchio massimo: per il secondo teorema di Euclide, detto $R$ il raggio della sfera, vale

$$x^2 = y\,(2R - y).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="207.741" height="185.723" viewBox="-72 -72 155.806 139.292"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M63.084 4.026c0-34.572-28.025-62.597-62.596-62.597-34.572 0-62.597 28.025-62.597 62.597 0 34.571 28.025 62.596 62.597 62.596 34.571 0 62.596-28.025 62.596-62.596Zm-62.596 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M.488-58.58-58.55 24.906H59.524Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M.488-58.58v83.482M.488 4.026l59.028 20.876"/><path stroke="none" d="M2.248 4.026a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x=".488" y="4.026" stroke="none" font-family="cmmi10" font-size="10" transform="translate(5.098 -.339)">O</text><text x=".488" y="4.026" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.75 -66.13)">A</text><text x=".488" y="4.026" stroke="none" font-family="cmr10" font-size="10" transform="translate(-69.425 37.9)">base</text><text x=".488" y="4.026" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -20.728)">y</text><text x=".488" y="4.026" stroke="none" font-family="cmmi10" font-size="10" transform="translate(28.44 13.107)">x</text><path fill="none" d="M70.909-58.17v82.672"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M68.509-56.29c1.44-.38 2.12-1.228 2.4-2.08.28.852.96 1.7 2.4 2.08M73.309 22.622c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08"/><text x=".488" y="4.026" stroke="none" font-family="cmmi10" font-size="10" transform="translate(73.954 -18.436)">h</text><text x=".488" y="4.026" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.13 54.184)">R</text><path fill="none" d="M.488 4.026 44.743 48.28"/></g></svg>
</figure>

Il volume del cono è

$$V = \frac{1}{3}\pi x^2 y = \frac{1}{3}\pi\, y^2 (2R - y),$$

dove la variabile $y$ può assumere i valori $0 \le y \le 2R$. Poiché il fattore $\frac{1}{3}\pi$ è costante e positivo, il volume è massimo quando è massima la funzione

$$z(y) = y^2 (2R - y) = 2R\,y^2 - y^3.$$

## Ricerca del massimo

Deriviamo rispetto a $y$:

$$z'(y) = 4R\,y - 3y^2 = y\,(4R - 3y).$$

Nell'intervallo $0 < y < 2R$ si ha $y > 0$, quindi il segno di $z'$ dipende dal fattore $4R - 3y$:

$$z'(y) \ge 0 \iff 4R - 3y \ge 0 \iff y \le \frac{4}{3}R.$$

La funzione $z$ è dunque crescente per $0 < y < \frac{4}{3}R$ e decrescente per $\frac{4}{3}R < y < 2R$: in

$$y = \frac{4}{3}R$$

si ha un massimo.

## Dimensioni del cono e volume massimo

L'altezza del cono di volume massimo è quindi $h = y = \dfrac{4}{3}R$, cioè i $\dfrac{4}{3}$ del raggio della sfera.

Il raggio di base si ricava da $x^2 = y\,(2R - y)$:

$$x^2 = \frac{4}{3}R\left(2R - \frac{4}{3}R\right) = \frac{4}{3}R \cdot \frac{2}{3}R = \frac{8}{9}R^2 \quad\Rightarrow\quad x = \frac{2}{3}R\sqrt{2}.$$

Il volume massimo vale infine

$$V = \frac{1}{3}\pi x^2 y = \frac{1}{3}\pi \cdot \frac{8}{9}R^2 \cdot \frac{4}{3}R = \frac{32}{81}\pi R^3.$$

**Conclusione.** Fra tutti i coni inscritti in una sfera di raggio $R$, quello di volume massimo ha altezza $h = \dfrac{4}{3}R$, raggio di base $r = \dfrac{2}{3}R\sqrt{2}$ e volume $V_{\max} = \dfrac{32}{81}\pi R^3$.

*Fonte:* [📄 PDF p.48](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
