

**Quesito:** [[Quesiti/ques_2008_estero_australe_2008_sessione_ordinaria_questionario_45_3|2008 Estero Australe Ordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2008_estero_australe_2008_sessione_ordinaria_questionario_45|2008 Estero Australe Ordinaria — Questionario]]

La capacità di una damigiana è pari a quella del massimo cono circolare retto inscritto in una sfera di raggio $60\ \text{cm}$. Si determini quanti litri di vino può contenere.

## Impostazione

Sia $y$ l'altezza del cono e $x$ il raggio della sua base. Considerando la sezione assiale, il vertice del cono e il diametro della sfera formano un triangolo rettangolo inscritto nella circonferenza massima, il cui diametro vale $2R = 120\ \text{cm}$. Per il secondo teorema di Euclide (l'altezza è media proporzionale tra le proiezioni dei cateti sull'ipotenusa) si ha:

$$x^{2} = y(120 - y).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="263.461" height="231.257" viewBox="-72 -72 197.596 173.443"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M97.485 21.106c0-44-35.668-79.668-79.667-79.668S-61.85-22.894-61.85 21.106s35.668 79.667 79.668 79.667 79.667-35.668 79.667-79.667Zm-79.667 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M17.818-58.57-57.317 47.677h150.27Z"/><path fill="none" stroke="#00f" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M-57.317 47.678h150.27"/><path fill="none" stroke-dasharray="3.0,3.0" d="M17.818-58.562v159.335"/><path stroke="none" d="M19.218 21.106a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0M19.218-58.57a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0m-1.4 0"/><text x="17.818" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -83.21)">V</text><text x="17.818" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 3.417)">O</text><text x="17.818" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-86.755 36.939)">B</text><text x="17.818" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(78.668 36.939)">C</text><path fill="none" d="M103.46-58.162v158.535"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M101.06-56.282c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08M105.86 98.493c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08"/><text x="17.818" y="21.106" stroke="none" font-family="cmr10" font-size="10" transform="translate(89.175 3.222)">120</text><g fill="#00f" stroke="#00f"><text x="17.818" y="21.106" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-48.628 -26.703)">y</text></g><g fill="#00f" stroke="#00f"><text x="17.818" y="21.106" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.858 34.408)">x</text></g></g></svg>
</figure>

Il volume del cono è

$$V = \frac{1}{3}\pi x^{2} y = \frac{1}{3}\pi\, y(120 - y)\, y = \frac{1}{3}\pi\, y^{2}(120 - y).$$

Il volume è massimo quando lo è la funzione

$$z(y) = y^{2}(120 - y), \qquad 0 \le y \le 120.$$

## Ricerca del massimo

Deriviamo:

$$z'(y) = 240\,y - 3y^{2} = 3y(80 - y).$$

Studiando il segno per $0 \le y \le 120$:

$$z'(y) \ge 0 \iff 3y(80 - y) \ge 0 \iff 0 \le y \le 80.$$

Dunque $z$ è crescente per $0 < y < 80$ e decrescente per $80 < y < 120$: in $y = 80$ la funzione (e quindi il volume del cono) assume il valore massimo.

L'altezza del cono di volume massimo vale perciò

$$y = 80\ \text{cm} = \frac{4}{3}R,$$

cioè i $\dfrac{4}{3}$ del raggio della sfera.

## Calcolo del volume massimo

Dal vincolo $x^{2} = y(120 - y)$ con $y = 80$ otteniamo

$$x^{2} = 80 \cdot (120 - 80) = 80 \cdot 40 = 3200\ \text{cm}^{2}.$$

Il volume massimo è quindi

$$V = \frac{1}{3}\pi\, x^{2}\, y = \frac{1}{3}\pi \cdot 3200 \cdot 80 = \frac{256000}{3}\pi \approx 268083\ \text{cm}^{3}.$$

Poiché $1\ \text{L} = 1000\ \text{cm}^{3}$, la damigiana può contenere

$$V \approx 268\ \text{litri}.$$

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
