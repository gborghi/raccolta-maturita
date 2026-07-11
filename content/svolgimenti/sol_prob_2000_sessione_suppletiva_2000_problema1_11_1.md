

**Problema:** [[Problemi/prob_2000_sessione_suppletiva_2000_problema1_11_1|2000 Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2000_sessione_suppletiva_2000_problema1_11|2000 Suppletiva — Problema 1]]

Una parabola passante per $A$ e $B$ divide il triangolo $ABC$ in due parti equivalenti. Supposto $ABC$ equilatero di lato $3\,\text{cm}$ e l'asse della parabola perpendicolare al segmento $AB$, in un conveniente sistema di riferimento si determinino: a) le coordinate di $A$, $B$ e $C$; b) l'equazione della parabola; c) l'equazione del cerchio inscritto nel triangolo $ABC$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="259.839" height="211.992" viewBox="-72 -72 194.879 158.994"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-49.325 72.867H87.283L18.979-45.436Z"/><path stroke="none" d="M-47.405 72.867a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="18.979" y="72.867" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-79.337 10.366)">A</text><path stroke="none" d="M89.203 72.867a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="18.979" y="72.867" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.837 10.366)">B</text><path stroke="none" d="M20.9-45.436a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="18.979" y="72.867" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.931 -121.835)">C</text><path fill="none" d="M-72.07 72.867h181.698"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M107.748 70.467c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="18.979" y="72.867" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.582 2.153)">x</text><path fill="none" d="M18.98 86.524V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M16.58-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="18.979" y="72.867" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -137.498)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-49.308 72.864 2.315-2.956 2.314-2.854 2.315-2.751 2.315-2.65 2.314-2.549 2.315-2.445 2.314-2.345 2.315-2.242 2.314-2.14 2.315-2.04 2.315-1.935 2.314-1.835 2.315-1.733 2.314-1.63 2.315-1.53 2.314-1.427 2.315-1.325 2.315-1.223 2.314-1.121 2.315-1.02 2.314-.917 2.315-.816 2.314-.713 2.315-.612 2.315-.51 2.314-.408 2.315-.306 2.314-.204 2.315-.102h2.314l2.315.101 2.315.204 2.314.305 2.315.407 2.314.51 2.315.61 2.314.713 2.315.815 2.315.917 2.314 1.02 2.315 1.12 2.314 1.222 2.315 1.325 2.314 1.426 2.315 1.528 2.315 1.63 2.314 1.732 2.315 1.835 2.314 1.936 2.315 2.038 2.314 2.139L71.05 54.3l2.315 2.344 2.314 2.446 2.315 2.546 2.314 2.65 2.315 2.751 2.314 2.854 2.315 2.954"/><path fill="none" stroke="red" stroke-width=".8" d="M58.403 33.443c0-21.774-17.65-39.424-39.424-39.424s-39.424 17.65-39.424 39.424c0 21.773 17.65 39.424 39.424 39.424s39.424-17.65 39.424-39.424Zm-39.424 0"/><path fill="red" stroke="none" d="M20.58 33.443a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/></g></svg>
</figure>

## a)

Scegliamo un sistema di riferimento con l'asse $x$ lungo il lato $AB$ e l'origine nel suo punto medio. Con il lato di $3\,\text{cm}$ otteniamo

$$A=\left(-\frac{3}{2},\,0\right), \qquad B=\left(\frac{3}{2},\,0\right).$$

Il vertice $C$ del triangolo equilatero si trova sull'asse di simmetria $x=0$, a un'altezza pari all'altezza del triangolo equilatero di lato $3$, cioè $\dfrac{3\sqrt{3}}{2}$. Quindi

$$C=\left(0,\,\frac{3\sqrt{3}}{2}\right).$$

## b)

Poiché l'asse della parabola è perpendicolare ad $AB$ e il problema è simmetrico rispetto all'asse $y$, la parabola ha la forma $y = ax^2 + c$. Imponendo il passaggio per $A$ e $B$ (che per simmetria danno la stessa condizione), si ottiene

$$a\cdot\frac{9}{4} + c = 0 \;\Rightarrow\; c = -\frac{9a}{4},$$

e quindi l'equazione diventa $y = a\left(x^2 - \dfrac{9}{4}\right)$.

Per determinare $a$ usiamo la condizione che la parabola divida il triangolo in due parti di uguale area. L'area del triangolo equilatero di lato $3$ è

$$S = \frac{3^2\sqrt{3}}{4} = \frac{9\sqrt{3}}{4},$$

quindi ciascuna delle due parti deve avere area $\dfrac{9\sqrt{3}}{8}$.

L'area racchiusa tra la parabola e l'asse $x$ (per $x\in\left[-\frac{3}{2},\frac{3}{2}\right]$, dove la parabola è sotto l'asse $x$ se $a<0$) vale, sfruttando la simmetria dell'integrando,

$$\int_{-3/2}^{3/2}\left|a\left(x^2-\frac{9}{4}\right)\right|\,dx = 2|a|\int_0^{3/2}\left(\frac{9}{4}-x^2\right)dx = 2|a|\left[\frac{9x}{4}-\frac{x^3}{3}\right]_0^{3/2}.$$

Calcoliamo il valore dell'integrale definito:

$$\frac{9}{4}\cdot\frac{3}{2}-\frac{1}{3}\cdot\frac{27}{8} = \frac{27}{8}-\frac{9}{8} = \frac{18}{8} = \frac{9}{4}.$$

Quindi l'area è $2|a|\cdot\dfrac{9}{4} = \dfrac{9|a|}{2}$. Imponendo l'uguaglianza con $\dfrac{9\sqrt{3}}{8}$:

$$\frac{9|a|}{2} = \frac{9\sqrt{3}}{8} \;\Rightarrow\; |a| = \frac{\sqrt{3}}{4}.$$

Poiché la parabola deve essere rivolta verso il basso per restare all'interno del triangolo (con vertice al di sopra di $AB$), si prende $a = -\dfrac{\sqrt{3}}{4}$, e quindi $c = \dfrac{9\sqrt{3}}{16}$. L'equazione della parabola è

$$y = -\frac{\sqrt{3}}{4}\,x^2+\frac{9\sqrt{3}}{16} = -\frac{\sqrt{3}}{4}\left(x^2-\frac{9}{4}\right).$$

## c)

Per il triangolo equilatero, il raggio del cerchio inscritto si calcola come rapporto tra l'area e il semiperimetro:

$$\rho = \frac{S}{p} = \frac{9\sqrt{3}/4}{9/2} = \frac{\sqrt{3}}{2}.$$

Il centro del cerchio inscritto è il baricentro (che per il triangolo equilatero coincide con l'incentro), situato sull'asse di simmetria a quota $\rho = \dfrac{\sqrt{3}}{2}$ dall'asse $x$, ovvero nel punto $\left(0,\,\dfrac{\sqrt{3}}{2}\right)$. L'equazione del cerchio inscritto è quindi

$$x^2+\left(y-\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}, \qquad \text{ossia}\qquad x^2 + y^2 - \sqrt{3}\,y = 0.$$

*Fonte:* [📄 PDF p.11](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/geometria #cluster/geometria
