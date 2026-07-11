

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_167_8|2005 Suppletiva PNI — Prova — Quesito 8]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_167|2005 Suppletiva PNI — Prova]]

Si consideri la curva di equazioni parametriche
$$\begin{cases} x = e^{t} + 2 \\ y = e^{-t} + 3 \end{cases}$$
Si chiede l'equazione della tangente alla curva nel punto $A(3;\,4)$, che si ottiene per $t=0$.

## a) Metodo parametrico

Deriviamo rispetto al parametro $t$:
$$x'(t) = e^{t}, \qquad y'(t) = -e^{-t}.$$

Il coefficiente angolare della tangente è il rapporto delle derivate:
$$m = \frac{dy}{dx} = \frac{y'(t)}{x'(t)} = \frac{-e^{-t}}{e^{t}} = -e^{-2t}.$$

Nel punto $A$, corrispondente a $t=0$, si ha
$$m = -e^{0} = -1.$$

La tangente in $A(3;4)$ ha dunque equazione
$$y - 4 = -1\,(x - 3) \quad\Rightarrow\quad y = -x + 7.$$

## b) Metodo cartesiano

Ricaviamo l'equazione cartesiana eliminando il parametro. Dalla prima equazione
$$e^{t} = x - 2 \qquad (x > 2),$$
quindi $e^{-t} = \dfrac{1}{x-2}$. Sostituendo nella seconda equazione:
$$y = e^{-t} + 3 = \frac{1}{x-2} + 3.$$

Deriviamo rispetto a $x$:
$$y' = -\frac{1}{(x-2)^{2}}.$$

Nel punto $A$, di ascissa $x=3$:
$$y'(3) = -\frac{1}{(3-2)^{2}} = -1,$$
in accordo con il risultato precedente. La tangente è ancora $y = -x + 7$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="262.811" height="266.999" viewBox="-72 -72 197.108 200.249"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 120.097H99.099"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M97.219 117.697c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-64.388" y="120.097" stroke="none" font-family="cmmi10" font-size="10" transform="translate(167.42 2.153)">x</text><path fill="none" d="M-64.388 127.78V-58.755"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-66.788-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-64.388" y="120.097" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -184.728)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-13.173 120.097v-174.13"/><g fill="gray" stroke="none" font-size="10"><text x="-64.388" y="120.097" font-family="cmmi10" transform="translate(23.633 -177.663)">x</text><text x="-55.895" y="120.097" font-family="cmr10" transform="translate(23.633 -177.663)">=</text><text x="-45.339" y="120.097" font-family="cmr10" transform="translate(23.633 -177.663)">2</text></g></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-64.388 43.275H94.377"/><g fill="gray" stroke="none" font-size="10"><text x="-64.388" y="120.097" font-family="cmmi10" transform="translate(162.298 -74.572)">y</text><text x="-56.348" y="120.097" font-family="cmr10" transform="translate(162.298 -74.572)">=</text><text x="-45.793" y="120.097" font-family="cmr10" transform="translate(162.298 -74.572)">3</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-4.21-29.893 1.182 8.535 1.183 6.746 1.183 5.476L.52-4.613 1.703-.807l1.183 3.248L4.07 5.243l1.183 2.44 1.182 2.15 1.183 1.903L8.8 13.434l1.183 1.524 1.182 1.375 1.183 1.25 1.183 1.135 1.183 1.042 1.182.958 1.183.88 1.183.817 1.183.758 1.182.704 1.183.654 1.183.614 1.183.576 1.183.538 1.182.504 1.183.48 1.183.45 1.183.425 1.182.405 1.183.384 1.183.361 1.183.346 1.182.33 1.183.312 1.183.298 1.183.286 1.182.271 1.183.262 1.183.25 1.183.24 1.182.23 1.183.22 1.183.214 1.183.204 1.182.196 1.183.19 1.183.182 1.183.178 1.182.17 1.183.163 1.183.159 1.183.154 1.183.15 1.182.142 1.183.14 1.183.135 1.183.13 1.182.128 1.183.124 1.183.12 1.183.115 1.182.113 1.183.11 1.183.106 1.183.104 1.182.102 1.183.098 1.183.095 1.183.094 1.182.091 1.183.088 1.183.086 1.183.085 1.182.082 1.183.08 1.183.08 1.183.075 1.182.076"/><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="M-33.66-28.425 63.65 68.882"/><g fill="red" stroke="none" font-size="10"><text x="-64.388" y="120.097" font-family="cmmi10" transform="translate(131.77 -48.965)">y</text><text x="-56.348" y="120.097" font-family="cmr10" transform="translate(131.77 -48.965)">=</text><text x="-45.793" y="120.097" font-family="cmsy10" transform="translate(131.77 -48.965)">¡</text><text x="-38.015" y="120.097" font-family="cmmi10" transform="translate(131.77 -48.965)">x</text><text x="-30.078" y="120.097" font-family="cmr10" transform="translate(131.77 -48.965)">+</text><text x="-20.078" y="120.097" font-family="cmr10" transform="translate(131.77 -48.965)">7</text></g></g><path stroke="none" d="M14.234 17.668a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="10"><text x="-64.388" y="120.097" font-family="cmmi10" transform="translate(80.355 -108.462)">A</text><text x="-56.888" y="120.097" font-family="cmr10" transform="translate(80.355 -108.462)">(3</text><text x="-47.999" y="120.097" font-family="cmmi10" transform="translate(80.355 -108.462)">;</text><text x="-43.554" y="120.097" font-family="cmr10" transform="translate(80.355 -108.462)">4)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.182](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
