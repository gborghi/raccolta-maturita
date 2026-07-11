

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_1|2008 Ordinaria — Prova (PNI Informatica) — Quesito 1]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Sono dati un cono equilatero e la sfera in esso inscritta. Scelto a caso un punto all'interno del cono, si determini la probabilità che esso risulti esterno alla sfera.

## Impostazione

Poiché il punto è scelto a caso all'interno del cono, la probabilità richiesta è il rapporto tra il volume della regione favorevole (la parte di cono esterna alla sfera) e il volume dell'intero cono:

$$p = \frac{V_{cono} - V_{sfera}}{V_{cono}} = 1 - \frac{V_{sfera}}{V_{cono}}.$$

Basta quindi calcolare il rapporto tra il volume della sfera inscritta e quello del cono.

## Le dimensioni del cono equilatero

Un cono si dice *equilatero* quando la sua sezione assiale è un triangolo equilatero: il diametro di base è dunque uguale all'apotema. Indicato con $r$ il raggio di base, l'apotema vale $2r$ e l'altezza è

$$h = \sqrt{(2r)^2 - r^2} = r\sqrt{3}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="175.684" height="154.82" viewBox="-72 -72 131.763 116.115"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 30.146H44.54L-6.682-58.571Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M22.889.57C22.89-15.76 9.65-29-6.68-29-23.015-29-36.254-15.761-36.254.57c0 16.333 13.24 29.572 29.571 29.572S22.89 16.902 22.89.57Zm-29.57 0"/><path stroke="none" d="M-5.062.57a1.62 1.62 0 1 0-3.24 0 1.62 1.62 0 0 0 3.24 0m-1.62 0"/><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="M-6.682.57v29.576"/><text x="-6.682" y="30.146" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.733 -13.607)">½</text></g><text x="-6.682" y="30.146" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-62.255 10.366)">A</text><text x="-6.682" y="30.146" stroke="none" font-family="cmmi10" font-size="10" transform="translate(54.755 10.366)">B</text><text x="-6.682" y="30.146" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -92.25)">V</text><text x="-6.682" y="30.146" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -26.159)">O</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-6.682-58.57v88.716"/><text x="-6.682" y="30.146" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.562 10.366)">H</text><path fill="none" d="M-57.904 30.146h51.222"/><text x="-6.682" y="30.146" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-28.006 7.839)">r</text></g></svg>
</figure>

Il volume del cono è

$$V_{cono} = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi r^2 \cdot r\sqrt{3} = \frac{\sqrt{3}}{3}\pi r^3.$$

## La sfera inscritta

La sfera inscritta nel cono ha per sezione assiale il cerchio inscritto nel triangolo equilatero $AVB$ di lato $2r$. Il raggio $\rho$ di tale cerchio (raggio della sfera) è

$$\rho = \frac{\text{lato}}{2\sqrt{3}} = \frac{2r}{2\sqrt{3}} = \frac{r}{\sqrt{3}} = \frac{r\sqrt{3}}{3}.$$

Il volume della sfera è quindi

$$V_{sfera} = \frac{4}{3}\pi \rho^3 = \frac{4}{3}\pi \left(\frac{r}{\sqrt{3}}\right)^3 = \frac{4}{3}\pi \cdot \frac{r^3}{3\sqrt{3}} = \frac{4\sqrt{3}}{27}\pi r^3.$$

## Calcolo della probabilità

Il rapporto tra i due volumi è

$$\frac{V_{sfera}}{V_{cono}} = \frac{\dfrac{4\sqrt{3}}{27}\pi r^3}{\dfrac{\sqrt{3}}{3}\pi r^3} = \frac{4\sqrt{3}}{27}\cdot\frac{3}{\sqrt{3}} = \frac{4}{9}.$$

Pertanto la probabilità che il punto scelto risulti esterno alla sfera è

$$p = 1 - \frac{V_{sfera}}{V_{cono}} = 1 - \frac{4}{9} = \frac{5}{9} \approx 0{,}556.$$

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/geometria #cluster/geometria
