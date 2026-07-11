

**Problema:** [[Problemi/prob_2003_suppletiva_ordinamento_2003_problema1_105_1|2003 Suppletiva Ordinamento — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_suppletiva_ordinamento_2003_problema1_105|2003 Suppletiva Ordinamento — Problema 1]]

Del triangolo $ABC$ si hanno: $\overline{AB}=3\ \text{cm}$, $\overline{AC}=2\ \text{cm}$, $\widehat{CAB}=60^\circ$. Si tracci la bisettrice di $\widehat{CAB}$ e si indichi con $D$ la sua intersezione con il lato $BC$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="187.075" height="121.967" viewBox="-72 -72 140.306 91.475"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 5.506H53.083l-73.991-64.077Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-57.904 5.506 8.689-32.933"/><path stroke="none" d="M-56.084 5.506a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0M54.903 5.506a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0M-19.088-58.57a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0M10.509-32.933a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><text x="-57.904" y="5.506" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.904" y="5.506" stroke="none" font-family="cmmi10" font-size="10" transform="translate(114.52 10.366)">B</text><text x="-57.904" y="5.506" stroke="none" font-family="cmmi10" font-size="10" transform="translate(25.6 -67.61)">C</text><text x="-57.904" y="5.506" stroke="none" font-family="cmmi10" font-size="10" transform="translate(70.126 -41.972)">D</text><text x="-57.904" y="5.506" stroke="none" font-family="cmr10" font-size="10" transform="translate(52.983 9.977)">3</text><text x="-57.904" y="5.506" stroke="none" font-family="cmr10" font-size="10" transform="translate(9.961 -30.067)">2</text><path fill="none" d="M-41.26 5.506A16.65 16.65 0 0 0-49.581-8.91"/><g stroke="none"><text x="-57.904" y="5.506" font-family="cmr10" font-size="10" transform="translate(19.333 -6.914)">60</text><text x="-47.904" y="1.877" font-family="cmsy7" font-size="7" transform="translate(19.333 -6.914)">±</text></g></g></svg>
</figure>

## a) Lunghezza di $BC$ e delle sue parti

Per il teorema del coseno:

$$\overline{BC}^{2}=9+4-2\cdot 3\cdot 2\cdot\tfrac{1}{2}=7,\qquad \overline{BC}=\sqrt{7}.$$

Per il teorema della bisettrice, la bisettrice di un angolo interno divide il lato opposto in parti proporzionali ai lati dell'angolo, quindi $\dfrac{BD}{DC}=\dfrac{AB}{AC}=\dfrac{3}{2}$, con $BD+DC=\sqrt{7}$. Ne segue:

$$BD=\frac{3\sqrt{7}}{5},\qquad DC=\frac{2\sqrt{7}}{5}.$$

## b) $\cos\widehat{B}$, misura di $AD$ e angoli

Applicando il teorema del coseno al triangolo $ABC$ per l'angolo in $B$:

$$\cos\widehat{B}=\frac{9+7-4}{2\cdot 3\cdot\sqrt{7}}=\frac{12}{6\sqrt{7}}=\frac{2}{\sqrt{7}}=\frac{2\sqrt{7}}{7},\qquad \widehat{B}\approx 40^\circ 54'.$$

Di conseguenza $\widehat{C}=180^\circ-60^\circ-\widehat{B}\approx 79^\circ 06'$.

La bisettrice forma con $AB$ un angolo di $30^\circ$. Nel triangolo $ABD$, applicando il teorema del coseno con $\widehat{ABD}=\widehat{B}$:

$$\overline{AD}^{2}=9+\frac{63}{25}-2\cdot 3\cdot\frac{3\sqrt{7}}{5}\cdot\frac{2\sqrt{7}}{7}=\frac{225+63-180}{25}=\frac{108}{25},$$

$$\overline{AD}=\frac{6\sqrt{3}}{5}\approx 2{,}08.$$

## c) Il punto $P$ e la somma dei quadrati

Poniamo $AP=x$ lungo $AD$, con $0<x<\dfrac{6\sqrt{3}}{5}$ (il punto $P$ è interno al segmento $AD$, quindi gli estremi sono esclusi). Poiché $\widehat{BAD}=\widehat{CAD}=30^\circ$, per il teorema del coseno nei triangoli $ABP$ e $ACP$:

$$PB^{2}=x^{2}+9-2\cdot 3\cdot x\cos 30^\circ=x^{2}+9-3\sqrt{3}\,x,$$

$$PC^{2}=x^{2}+4-2\cdot 2\cdot x\cos 30^\circ=x^{2}+4-2\sqrt{3}\,x.$$

Con $PA^{2}=x^{2}$, la somma richiesta è

$$s=PA^{2}+PB^{2}+PC^{2}=3x^{2}-5\sqrt{3}\,x+13=m^{2}.$$

## d) Discussione rispetto al parametro $m$

Studiamo l'intersezione tra la parabola $y=3x^{2}-5\sqrt{3}\,x+13$ e la retta $y=m^{2}$, con $x$ ristretto all'intervallo aperto $\left(0,\ \dfrac{6\sqrt{3}}{5}\right)$.

La parabola ha vertice

$$x_{V}=\frac{5\sqrt{3}}{6}\approx 1{,}44\in\left(0,\ \frac{6\sqrt{3}}{5}\right),\qquad y_{V}=\frac{27}{4}=6{,}75,$$

e agli estremi (esclusi) dell'intervallo assume i valori $y(0)=13$ e $y\!\left(\dfrac{6\sqrt{3}}{5}\right)=\dfrac{199}{25}=7{,}96$.

Al variare di $m^{2}$ si hanno quindi i seguenti casi:

$$\begin{aligned}
&\text{UNA soluzione} && \text{se } \frac{199}{25}\le m^{2}<13;\\[4pt]
&\text{DUE soluzioni} && \text{se } \frac{27}{4}\le m^{2}<\frac{199}{25}\quad\left(\text{coincidenti se } m^{2}=\frac{27}{4}\right);\\[4pt]
&\text{NESSUNA soluzione} && \text{se } m^{2}<\frac{27}{4}\ \text{oppure}\ m^{2}\ge 13.
\end{aligned}$$

*Fonte:* [📄 PDF p.105](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
