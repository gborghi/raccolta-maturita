

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_10|2008 Ordinaria — Prova (PNI Informatica) — Quesito 10]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

Si cercano le equazioni delle curve simmetriche della curva di equazione $y=e^{-2x}$: prima rispetto all'origine, poi rispetto alla bisettrice del primo e terzo quadrante, cioè la retta $y=x$.

## a) Simmetria rispetto all'origine

La simmetria rispetto all'origine associa a ogni punto $(x,y)$ il punto $(-x,-y)$. Per ottenere l'equazione della curva simmetrica basta quindi sostituire nell'equazione data $x$ con $-x$ e $y$ con $-y$:

$$-y = e^{-2(-x)} = e^{2x}.$$

Risolvendo rispetto a $y$ si ottiene

$$y = -e^{2x}.$$

Si tratta di un esponenziale crescente, tutto al di sotto dell'asse $x$: coerentemente con la simmetria, il punto $(0,1)$ della curva iniziale si trasforma nel punto $(0,-1)$ della nuova curva.

## b) Simmetria rispetto alla bisettrice $y=x$

La simmetria rispetto alla bisettrice del primo e terzo quadrante scambia le coordinate di ogni punto, cioè manda $(x,y)$ in $(y,x)$. La curva simmetrica si ottiene perciò scambiando i ruoli di $x$ e $y$ nell'equazione di partenza:

$$x = e^{-2y}.$$

Esplicitando $y$ si applica il logaritmo naturale a entrambi i membri (l'operazione richiede $x>0$):

$$\ln x = -2y \quad\Rightarrow\quad y = -\frac{1}{2}\ln x.$$

Questa è la curva inversa di quella data: infatti la simmetria rispetto alla retta $y=x$ trasforma il grafico di una funzione nel grafico della sua funzione inversa. La funzione $y=-\tfrac{1}{2}\ln x$ è definita per $x>0$, in accordo con il fatto che $y=e^{-2x}$ assume solo valori positivi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="241.764" height="224.133" viewBox="-72 -72 181.323 168.1"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 18.238H82.314"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M80.434 15.838c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="5.322" y="18.238" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.925 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M5.322 95.63V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M2.922-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="5.322" y="18.238" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -82.87)">y</text></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="m-67.233 90.793 145.11-145.11"/><g fill="gray" stroke="none" font-size="10"><text x="5.322" y="18.238" font-family="cmmi10" transform="translate(76.088 -71.374)">y</text><text x="13.361" y="18.238" font-family="cmr10" transform="translate(76.088 -71.374)">=</text><text x="23.917" y="18.238" font-family="cmmi10" transform="translate(76.088 -71.374)">x</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-7.98-54.415.84 4.877.84 4.55.841 4.244.84 3.96.84 3.693.84 3.446.841 3.214.84 2.998.84 2.798.841 2.61.84 2.433.84 2.271.84 2.119.841 1.976.84 1.843.84 1.716.841 1.603.84 1.498.84 1.396.84 1.303.841 1.215.84 1.134.84 1.058.841.987.84.921.84.859.84.8.841.748.84.697.84.65.841.606.84.566.84.53.84.49.841.46.84.428.84.402.841.372.84.349.84.324.841.302.84.283.84.264.84.244.841.23.84.216.84.198.841.186.84.174.84.162.84.15.841.143.84.13.84.124.841.114.84.106.84.1.84.094.841.087"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="5.322" y="18.238" font-family="cmmi10" font-size="10" transform="translate(19.435 -10.204)">y</text><text x="13.361" y="18.238" font-family="cmr10" font-size="10" transform="translate(19.435 -10.204)">=</text><text x="23.917" y="18.238" font-family="cmmi10" font-size="10" transform="translate(19.435 -10.204)">e</text><text x="28.573" y="14.609" font-family="cmsy7" font-size="7" transform="translate(19.435 -10.204)">¡</text><text x="34.823" y="14.609" font-family="cmr7" font-size="7" transform="translate(19.435 -10.204)">2</text><text x="38.809" y="14.609" font-family="cmmi7" font-size="7" transform="translate(19.435 -10.204)">x</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-30.956 19.44.84.087.841.094.84.1.84.106.84.114.841.123.84.13.84.143.841.15.84.162.84.175.84.186.841.198.84.216.84.227.841.247.84.263.84.283.84.303.841.324.84.348.84.373.841.4.84.427.84.46.841.493.84.528.84.566.84.607.841.648.84.7.84.744.841.801.84.859.84.922.84.987.841 1.057.84 1.132.84 1.217.841 1.301.84 1.396.84 1.498.84 1.603.841 1.716.84 1.843.84 1.975.841 2.119.84 2.27.84 2.434.84 2.61.841 2.796.84 2.998.84 3.213.841 3.445.84 3.693.84 3.96.84 4.243.841 4.549.84 4.876"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="5.322" y="18.238" font-family="cmmi10" font-size="10" transform="translate(-61.14 17.609)">y</text><text x="13.361" y="18.238" font-family="cmr10" font-size="10" transform="translate(-61.14 17.609)">=</text><text x="23.917" y="18.238" font-family="cmsy10" font-size="10" transform="translate(-61.14 17.609)">¡</text><text x="31.695" y="18.238" font-family="cmmi10" font-size="10" transform="translate(-61.14 17.609)">e</text><text x="36.351" y="14.609" font-family="cmr7" font-size="7" transform="translate(-61.14 17.609)">2</text><text x="40.337" y="14.609" font-family="cmmi7" font-size="7" transform="translate(-61.14 17.609)">x</text></g></g><path fill="none" stroke="teal" stroke-width=".8" d="m6.531-17.972 1.21 8.38 1.208 5.02 1.21 3.361 1.208 2.683 1.209 2.205 1.209 1.863 1.209 1.614 1.209 1.425 1.209 1.272 1.209 1.155 1.209 1.052 1.209.968 1.209.896 1.209.834 1.209.78 1.209.733 1.208.692 1.21.651 1.208.621 1.21.592 1.208.562 1.21.538 1.208.514 1.21.494 1.208.474 1.21.457 1.208.44 1.209.424 1.209.41 1.209.395 1.209.385 1.209.372 1.209.36 1.209.352 1.209.34 1.209.332 1.209.32 1.209.314 1.208.306 1.21.3 1.208.292 1.21.285 1.208.278 1.21.272 1.208.265 1.21.26 1.208.255 1.21.25 1.208.244 1.209.24 1.209.234 1.209.23 1.209.226 1.209.222 1.209.218 1.209.214 1.209.21 1.209.207 1.209.203"/><g fill="teal" stroke="teal"><g fill="teal" stroke="none"><text x="5.322" y="18.238" font-family="cmmi10" font-size="10" transform="translate(30.555 23.057)">y</text><text x="13.361" y="18.238" font-family="cmr10" font-size="10" transform="translate(30.555 23.057)">=</text><text x="23.917" y="18.238" font-family="cmsy10" font-size="10" transform="translate(30.555 23.057)">¡</text><text x="32.895" y="14.301" font-family="cmr7" font-size="7" transform="translate(30.555 23.057)">1</text><path d="M63.45 38.595h3.986v.4H63.45z"/><text x="32.895" y="21.686" font-family="cmr7" font-size="7" transform="translate(30.555 23.057)">2</text><text x="39.747" y="18.238" font-family="cmr10" font-size="10" transform="translate(30.555 23.057)">ln</text><text x="49.747" y="18.238" font-family="cmmi10" font-size="10" transform="translate(30.555 23.057)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
