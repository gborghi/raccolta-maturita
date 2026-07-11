

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_europa_2004_sessione_ord_questionario_64_6|2004 SE Europa Ord — Questionario — Quesito 6]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_europa_2004_sessione_ord_questionario_64|2004 SE Europa Ord — Questionario]]

Si consideri il sistema nelle incognite $x,y$

$$\begin{cases} x^2 + y^2 = \dfrac{17}{4} \\[4pt] x^3 y^3 = 1 \end{cases}$$

Ogni soluzione è la coppia di coordinate di un punto del piano cartesiano: si vuole stabilire quanti e quali punti il sistema rappresenta.

La seconda equazione si scrive $(xy)^3 = 1$; poiché in $\mathbb{R}$ il cubo è iniettivo, essa equivale a $xy = 1$. Il sistema diventa allora **simmetrico**:

$$\begin{cases} x^2 + y^2 = \dfrac{17}{4} \\[4pt] xy = 1 \end{cases}$$

Introduciamo la somma $s = x+y$ e il prodotto $p = xy$. Dall'identità $x^2+y^2 = (x+y)^2 - 2xy = s^2 - 2p$ e da $p = 1$ si ottiene

$$s^2 - 2 = \frac{17}{4} \;\Rightarrow\; s^2 = \frac{17}{4} + 2 = \frac{25}{4} \;\Rightarrow\; s = \pm\frac{5}{2}.$$

Si hanno quindi due sistemi simmetrici, le cui soluzioni sono le radici dell'equazione risolvente $t^2 - s\,t + 1 = 0$.

Per $s = \dfrac{5}{2}$:

$$t^2 - \frac{5}{2}\,t + 1 = 0 \;\Rightarrow\; 2t^2 - 5t + 2 = 0 \;\Rightarrow\; t = \frac{5 \pm 3}{4} \;\Rightarrow\; t = 2 \ \text{oppure}\ t = \frac{1}{2},$$

da cui le coppie $\left(\dfrac{1}{2},\,2\right)$ e $\left(2,\,\dfrac{1}{2}\right)$.

Per $s = -\dfrac{5}{2}$:

$$t^2 + \frac{5}{2}\,t + 1 = 0 \;\Rightarrow\; 2t^2 + 5t + 2 = 0 \;\Rightarrow\; t = \frac{-5 \pm 3}{4} \;\Rightarrow\; t = -\frac{1}{2} \ \text{oppure}\ t = -2,$$

da cui le coppie $\left(-\dfrac{1}{2},\,-2\right)$ e $\left(-2,\,-\dfrac{1}{2}\right)$.

Il sistema rappresenta pertanto **quattro** punti del piano cartesiano:

$$A = \left(\frac{1}{2},\,2\right), \quad B = \left(2,\,\frac{1}{2}\right), \quad C = \left(-\frac{1}{2},\,-2\right), \quad D = \left(-2,\,-\frac{1}{2}\right).$$

Geometricamente essi sono le intersezioni della circonferenza $x^2+y^2 = \dfrac{17}{4}$ (centro l'origine, raggio $\dfrac{\sqrt{17}}{2}$) con l'iperbole equilatera $xy = 1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="281.082" height="281.795" viewBox="-72 -72 210.811 211.346"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 39.861h197.63"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M123.68 37.461c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="26.945" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(102.548 2.153)">x</text><path fill="none" d="M26.945 138.876v-197.63"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M24.545-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="26.945" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -104.492)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M97.335 39.861c0-38.876-31.514-70.39-70.39-70.39s-70.39 31.514-70.39 70.39 31.514 70.39 70.39 70.39 70.39-31.514 70.39-70.39Zm-70.39 0"/><path fill="none" stroke="red" stroke-width=".8" d="m40.944-43.418 1.267 6.916 1.267 5.854 1.267 5.011 1.267 4.352 1.267 3.81 1.267 3.365 1.267 2.991L51.08-8.44l1.267 2.407 1.267 2.183 1.267 1.984 1.267 1.81 1.267 1.66 1.267 1.527 1.267 1.41 1.267 1.308 1.267 1.212 1.267 1.13 1.268 1.055 1.267.98 1.267.928 1.267.868 1.267.82 1.267.77 1.267.731 1.267.687 1.267.648 1.267.625 1.267.587 1.267.56 1.267.533 1.267.505 1.267.489 1.267.464 1.267.444 1.267.42 1.267.41 1.267.389 1.267.375 1.267.359 1.267.348 1.267.335 1.267.32 1.267.308 1.267.3 1.267.287 1.267.277 1.267.27 1.267.258 1.268.251 1.267.242 1.267.234 1.267.23 1.267.22 1.267.215 1.267.206 1.267.201 1.267.197 1.267.191M-61.827 52.993l1.267.189 1.267.197 1.267.202 1.267.206 1.267.215 1.267.22 1.267.23 1.267.233 1.267.242 1.267.251 1.267.26 1.267.269 1.267.276 1.267.287 1.267.3 1.267.308 1.267.32 1.267.332 1.267.348 1.267.359 1.267.375 1.267.39 1.267.406 1.267.427 1.267.44 1.267.464 1.267.485 1.267.509 1.267.53 1.268.563 1.267.587 1.267.618 1.267.652 1.267.686 1.267.73 1.267.773 1.267.816 1.267.867 1.267.925 1.267.987 1.267 1.048 1.267 1.13 1.267 1.21 1.267 1.307 1.267 1.406 1.267 1.527 1.267 1.66 1.267 1.807 1.267 1.98 1.267 2.18 1.267 2.403L4.058 90.8l1.267 2.984 1.267 3.358 1.267 3.804 1.267 4.344 1.267 5.002 1.267 5.84 1.267 6.895"/><path stroke="none" d="M46.417-28.425a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="26.945" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.605 -71.82)">A</text><path stroke="none" d="M97.631 22.79a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="26.945" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 -20.605)">B</text><path stroke="none" d="M12.273 108.147a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="26.945" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-28.467 78.653)">C</text><path stroke="none" d="M-38.941 56.933a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="26.945" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-80.376 27.438)">D</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="26.945" y="39.861" font-family="cmmi10" font-size="10" transform="translate(30.105 -55.543)">x</text><text x="32.66" y="36.232" font-family="cmr7" font-size="7" transform="translate(30.105 -55.543)">2</text><text x="39.369" y="39.861" font-family="cmr10" font-size="10" transform="translate(30.105 -55.543)">+</text><text x="49.369" y="39.861" font-family="cmmi10" font-size="10" transform="translate(30.105 -55.543)">y</text><text x="54.63" y="36.232" font-family="cmr7" font-size="7" transform="translate(30.105 -55.543)">2</text><text x="61.894" y="39.861" font-family="cmr10" font-size="10" transform="translate(30.105 -55.543)">=</text><text x="73.65" y="35.924" font-family="cmr7" font-size="7" transform="translate(30.105 -55.543)">17</text><path d="M103.755-18.382h7.972v.4h-7.972z"/><text x="75.643" y="43.309" font-family="cmr7" font-size="7" transform="translate(30.105 -55.543)">4</text></g></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="10"><text x="26.945" y="39.861" font-family="cmmi10" transform="translate(63.874 -72.865)">xy</text><text x="40.7" y="39.861" font-family="cmr10" transform="translate(63.874 -72.865)">=</text><text x="51.255" y="39.861" font-family="cmr10" transform="translate(63.874 -72.865)">1</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.68](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
