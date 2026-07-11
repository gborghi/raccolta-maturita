

**Quesito:** [[Quesiti/ques_2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35_5|2007 Estero Australe Ordinaria — Questionario — Quesito 5]] · **Prova:** [[Prove/2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35|2007 Estero Australe Ordinaria — Questionario]]

La capacità di un serbatoio è uguale a quella del cilindro circolare retto di volume massimo inscrivibile in una sfera di $2$ metri di diametro. Determinare tale capacità in litri.

## Impostazione

Indichiamo con $R$ il raggio della sfera, con $r$ il raggio di base del cilindro e con $h$ la sua altezza. Poiché il diametro della sfera è $2$ m, si ha $R = 1$ m.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="155.195" height="152.815" viewBox="-72 -72 116.396 114.611"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M41.941-14.965c0-31.428-25.477-56.905-56.906-56.905S-71.87-46.393-71.87-14.965s25.477 56.906 56.905 56.906 56.906-25.477 56.906-56.906Zm-56.906 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-61.428 17.89V-47.82H31.5V17.89ZM31.5-47.82"/><path stroke="none" d="M-13.465-14.965a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-14.965" y="-14.965" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path fill="none" stroke="red" stroke-width=".8" d="M-14.965-14.965 31.5-47.819"/><g fill="red" stroke="red"><text x="-14.965" y="-14.965" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(17.504 -18.776)">R</text></g><path fill="none" stroke="#00f" d="M-14.965 17.89H31.5"/><g fill="#00f" stroke="#00f"><text x="-14.965" y="-14.965" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.368 40.693)">r</text></g><path fill="none" stroke="#00f" d="M31.499 17.89V-47.82"/><g fill="#00f" stroke="#00f"><text x="-14.965" y="-14.965" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.996 3.472)">h</text></g></g></svg>
</figure>

Considerando la sezione assiale, il rettangolo che rappresenta il cilindro è inscritto nella circonferenza di raggio $R$. Il centro della sfera coincide con il centro del cilindro, quindi la semi-altezza $\frac{h}{2}$ e il raggio $r$ sono i cateti di un triangolo rettangolo di ipotenusa $R$:

$$r^2 + \frac{h^2}{4} = R^2 \quad\Rightarrow\quad r^2 = R^2 - \frac{h^2}{4}.$$

Il volume del cilindro è quindi

$$V(h) = \pi r^2 h = \pi\left(R^2 - \frac{h^2}{4}\right) h, \qquad 0 \le h \le 2R.$$

## Ricerca del massimo

Con $R = 1$ si ottiene

$$V(h) = \pi\left(h - \frac{h^3}{4}\right).$$

Calcoliamo la derivata prima e la annulliamo:

$$V'(h) = \pi\left(1 - \frac{3h^2}{4}\right) = 0 \quad\Rightarrow\quad h^2 = \frac{4}{3} \quad\Rightarrow\quad h = \frac{2}{\sqrt{3}}.$$

Poiché $V'(h) > 0$ per $0 < h < \frac{2}{\sqrt{3}}$ e $V'(h) < 0$ per $h > \frac{2}{\sqrt{3}}$, il valore $h = \frac{2}{\sqrt{3}}$ è un punto di massimo.

Il corrispondente raggio di base vale

$$r^2 = 1 - \frac{h^2}{4} = 1 - \frac{1}{3} = \frac{2}{3}.$$

## Volume massimo e capacità

$$V_{\max} = \pi \cdot \frac{2}{3} \cdot \frac{2}{\sqrt{3}} = \frac{4\pi}{3\sqrt{3}} = \frac{4\sqrt{3}\,\pi}{9} \approx 2{,}418 \ \text{m}^3.$$

Ricordando che $1 \ \text{m}^3 = 1000$ litri, la capacità del serbatoio è

$$V_{\max} \approx 2418 \ \text{litri}.$$

In generale, per una sfera di raggio $R$ il cilindro di volume massimo inscrivibile ha volume $V_{\max} = \dfrac{4\pi R^3}{3\sqrt{3}}$.

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione</body>
