

**Quesito:** [[Quesiti/ques_2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88_8|2003 Europa Suppletiva — Questionario — Quesito 8]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_europa_2003_sessione_sup_questionario_88|2003 Europa Suppletiva — Questionario]]

Tra i coni circolari retti di apotema $a = 3\ \text{dm}$, determinare quello di capacità (volume) massima ed esprimere in litri tale capacità.

## Impostazione

In un cono circolare retto l'apotema $a$, il raggio di base $R$ e l'altezza $h$ sono legati dal teorema di Pitagora applicato alla sezione assiale:
$$a^2 = R^2 + h^2 \quad\Rightarrow\quad R^2 = a^2 - h^2.$$

Il volume del cono è
$$V = \frac{1}{3}\pi R^2 h = \frac{1}{3}\pi\,(a^2 - h^2)\,h,$$
con la limitazione geometrica $0 \le h \le a$ (per $h = 0$ o $h = a$ il cono degenera e il volume si annulla).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="168.013" height="152.542" viewBox="-72 -72 126.01 114.406"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M53.331 22.957c0-10.371-28.025-18.779-62.596-18.779-34.572 0-62.596 8.408-62.596 18.78 0 10.37 28.024 18.778 62.596 18.778S53.33 33.33 53.33 22.957Zm-62.596 0"/><path fill="none" stroke-width=".8" d="M-71.87 22.957-9.265-70.95 53.34 22.957"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-9.265 22.957V-70.95M-9.265 22.957H53.34"/><g stroke="none" font-size="10"><text x="-9.265" y="22.957" font-family="cmmi10" transform="translate(34.831 -43.725)">a</text><text x="-1.201" y="22.957" font-family="cmr10" transform="translate(34.831 -43.725)">=</text><text x="9.354" y="22.957" font-family="cmr10" transform="translate(34.831 -43.725)">3</text></g><text x="-9.265" y="22.957" stroke="none" font-family="cmmi10" font-size="10" transform="translate(5.098 -43.475)">h</text><text x="-9.265" y="22.957" stroke="none" font-family="cmmi10" font-size="10" transform="translate(27.463 10.366)">R</text><path stroke="none" d="M-7.945 22.957a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-7.945-70.95a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0m-1.32 0"/></g></svg>
</figure>

Poiché il fattore $\dfrac{1}{3}\pi$ è costante, il volume è massimo quando è massima la funzione
$$f(h) = h\,(a^2 - h^2) = a^2 h - h^3, \qquad 0 \le h \le a.$$

## Ricerca del massimo

Deriviamo rispetto ad $h$:
$$f'(h) = a^2 - 3h^2.$$

Studiamo il segno di $f'(h)$ nell'intervallo $[0, a]$:
$$f'(h) \ge 0 \iff a^2 - 3h^2 \ge 0 \iff h \le \frac{a}{\sqrt{3}} = \frac{a\sqrt{3}}{3}.$$

Dunque $f$ è crescente per $0 \le h < \dfrac{a\sqrt{3}}{3}$ e decrescente per $\dfrac{a\sqrt{3}}{3} < h \le a$: il punto
$$h = \frac{a\sqrt{3}}{3}$$
è un punto di massimo.

## Calcolo della capacità massima

Con $a = 3\ \text{dm}$ si ottiene l'altezza ottimale
$$h = \frac{3\sqrt{3}}{3} = \sqrt{3}\ \text{dm}.$$

Il corrispondente raggio di base soddisfa
$$R^2 = a^2 - h^2 = 9 - 3 = 6\ \text{dm}^2 \quad\Rightarrow\quad R = \sqrt{6}\ \text{dm}.$$

Il volume massimo è perciò
$$V_{\max} = \frac{1}{3}\pi\,(a^2 - h^2)\,h = \frac{1}{3}\pi \cdot 6 \cdot \sqrt{3} = 2\pi\sqrt{3}\ \text{dm}^3.$$

Numericamente
$$V_{\max} = 2\pi\sqrt{3} \approx 10{,}883\ \text{dm}^3 \approx 10{,}883\ \text{litri},$$
ricordando che $1\ \text{dm}^3 = 1\ \text{litro}$.

Il cono di capacità massima ha quindi altezza $h = \sqrt{3}\ \text{dm}$ e raggio $R = \sqrt{6}\ \text{dm}$, con capacità pari a circa $10{,}88$ litri.

*Fonte:* [📄 PDF p.91](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
