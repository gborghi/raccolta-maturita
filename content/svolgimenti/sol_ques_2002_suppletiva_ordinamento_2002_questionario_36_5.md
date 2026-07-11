

**Quesito:** [[Quesiti/ques_2002_suppletiva_ordinamento_2002_questionario_36_5|2002 Suppletiva Ordinamento — Questionario — Quesito 5]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_questionario_36|2002 Suppletiva Ordinamento — Questionario]]

Un titolo di borsa ha perso ieri l'$x\%$ del suo valore. Oggi, guadagnando l'$y\%$, è tornato al valore che aveva ieri prima della perdita. Esprimere $y$ in funzione di $x$.

## a) Impostazione

Sia $T$ il valore iniziale del titolo (valore di ieri prima della perdita).

Dopo la perdita dell'$x\%$, il titolo vale
$$
T_1 = T - \frac{x}{100}\,T = T\left(1 - \frac{x}{100}\right) = T\,\frac{100-x}{100}.
$$

Oggi il titolo guadagna l'$y\%$ del suo valore attuale $T_1$, quindi raggiunge
$$
T_2 = T_1 + \frac{y}{100}\,T_1 = T_1\left(1 + \frac{y}{100}\right).
$$

## b) Condizione e soluzione

Il titolo è tornato al valore iniziale, cioè $T_2 = T$:
$$
T\,\frac{100-x}{100}\left(1 + \frac{y}{100}\right) = T.
$$

Poiché $T \neq 0$, dividiamo per $T$:
$$
\frac{100-x}{100}\left(1 + \frac{y}{100}\right) = 1
\quad\Rightarrow\quad
1 + \frac{y}{100} = \frac{100}{100-x}.
$$

Da cui
$$
\frac{y}{100} = \frac{100}{100-x} - 1 = \frac{100 - (100-x)}{100-x} = \frac{x}{100-x},
$$

e finalmente
$$
\boxed{\,y = \frac{100\,x}{100-x}\,}, \qquad 0 < x < 100.
$$

## c) Osservazioni sul grafico

La relazione $y = \dfrac{100x}{100-x}$ è una **funzione omografica** (del tipo $y=\dfrac{ax+b}{cx+d}$). Nel contesto del problema ha senso solo per $0 < x < 100$: il valore $x=100$ va escluso perché annulla il denominatore (una perdita del $100\%$ azzererebbe il titolo, e nessun guadagno percentuale potrebbe ripristinarlo).

Il grafico è il ramo di iperbole equilatera con:

- asintoto verticale $x = 100$;
- funzione crescente su $(0,100)$, con $y(0)=0$ e $\lim_{x\to 100^-} y = +\infty$.

Si nota la naturale asimmetria tra perdita e recupero: ad esempio, per $x = 50$ si ha $y = \dfrac{100\cdot 50}{50} = 100$, cioè per recuperare una perdita del $50\%$ occorre un guadagno del $100\%$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="258.377" height="524.393" viewBox="-72 -72 193.783 393.295"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-58.94 307.326h167.472"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M106.652 304.926c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-50.404" y="307.326" stroke="none" font-family="cmmi10" font-size="10" transform="translate(162.869 2.153)">x</text><path fill="none" d="M-50.404 315.862v-156.09"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-52.804 161.651c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-50.404" y="307.326" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -153.432)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M91.86 313.016v-150.8"/><g fill="#000" stroke="#000"><g stroke="none" font-size="10"><text x="-50.404" y="307.326" font-family="cmmi10" transform="translate(125.24 -148.642)">x</text><text x="-41.911" y="307.326" font-family="cmr10" transform="translate(125.24 -148.642)">=</text><text x="-31.356" y="307.326" font-family="cmr10" transform="translate(125.24 -148.642)">100</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-50.404 307.326 1.729-.194 1.729-.2 1.728-.204 1.73-.21 1.728-.214 1.729-.22 1.729-.228 1.729-.232 1.729-.239 1.728-.245 1.73-.253 1.728-.26 1.729-.266 1.73-.275 1.728-.283 1.729-.291 1.728-.3 1.73-.31 1.728-.32 1.729-.33 1.73-.34 1.728-.352 1.729-.364 1.729-.377 1.728-.389 1.73-.403 1.728-.418 1.73-.433 1.728-.45 1.729-.466 1.729-.485 1.728-.504 1.73-.525 1.728-.546 1.73-.57 1.728-.594 1.729-.62 1.729-.648 1.728-.678 1.73-.711 1.728-.745 1.73-.781 1.728-.821 1.729-.865 1.729-.91 1.729-.961 1.728-1.016 1.73-1.075 1.728-1.138 1.73-1.21 1.728-1.287 1.729-1.372 1.729-1.466 1.728-1.569 1.73-1.684 1.728-1.812 1.73-1.956 1.728-2.116 1.729-2.299 1.729-2.504 1.728-2.74 1.73-3.01 1.728-3.322 1.73-3.685 1.728-4.112 1.729-4.616 1.729-5.22 1.728-5.95 1.73-6.845 1.729-7.96 1.728-9.368 1.73-11.19 1.728-13.597 1.729-16.877 1.729-21.506 1.728-28.341L82.72 77.4l1.728-57.248 1.73-92.023"/><path stroke="none" d="M-48.904 307.326a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-50.404" y="307.326" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M20.728 307.326v-15.82h-71.132"/><path stroke="none" d="M22.228 291.506a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-50.404" y="307.326" stroke="none" font-family="cmr10" font-size="10" transform="translate(66.132 9.977)">50</text><text x="-50.404" y="307.326" stroke="none" font-family="cmr10" font-size="10" transform="translate(-18.533 -12.598)">100</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.38](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
