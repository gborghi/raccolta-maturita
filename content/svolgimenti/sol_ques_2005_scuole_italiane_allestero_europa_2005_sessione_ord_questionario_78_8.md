

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78_8|2005 Europa Ordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78|2005 Europa Ordinaria — Questionario]]

Dimostrare che la somma di un qualsiasi numero reale positivo e del suo reciproco è almeno $2$; cioè che, per ogni $x > 0$, risulta
$$x + \frac{1}{x} \ge 2.$$

## Dimostrazione

Sia $x$ un numero reale positivo. Poiché $x > 0$, la disuguaglianza da provare è equivalente, moltiplicando entrambi i membri per $x$ (quantità positiva, che non altera il verso), a
$$x^2 + 1 \ge 2x,$$
ovvero
$$x^2 - 2x + 1 \ge 0.$$

Il primo membro è un quadrato perfetto:
$$x^2 - 2x + 1 = (x - 1)^2 \ge 0,$$
e un quadrato è non negativo per ogni valore reale di $x$. La disuguaglianza è dunque sempre verificata, il che prova che
$$x + \frac{1}{x} \ge 2 \qquad \text{per ogni } x > 0.$$

## Caso di uguaglianza

L'uguaglianza $x + \dfrac{1}{x} = 2$ vale se e solo se $(x-1)^2 = 0$, cioè per $x = 1$. In tutti gli altri casi la somma è strettamente maggiore di $2$.

Equivalentemente, si può osservare che
$$x + \frac{1}{x} - 2 = \frac{x^2 - 2x + 1}{x} = \frac{(x-1)^2}{x} \ge 0,$$
essendo il numeratore un quadrato (non negativo) e il denominatore positivo per ipotesi. Si ritrova così che il minimo della funzione $f(x) = x + \dfrac{1}{x}$ per $x > 0$ vale $2$ ed è assunto nel punto $x = 1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="233.282" height="206.143" viewBox="-72 -72 174.962 154.607"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-60.404 69.027H89.71"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M87.83 66.627c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.404" y="69.027" stroke="none" font-family="cmmi10" font-size="10" transform="translate(154.047 2.153)">x</text><path fill="none" d="M-60.404 69.027V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-62.804-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.404" y="69.027" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -133.658)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-60.404 20.656H80.294"/><text x="-60.404" y="69.027" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -45.148)">2</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-27.684 69.027v-48.37"/><text x="-60.404" y="69.027" stroke="none" font-family="cmr10" font-size="10" transform="translate(30.22 9.977)">1</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-49.606-12.242 1.46 7.643 1.459 5.794 1.459 4.468 1.46 3.493 1.459 2.76 1.459 2.185 1.46 1.732 1.459 1.367 1.46 1.07 1.459.822 1.459.617 1.46.44 1.459.291 1.46.165 1.458.054 1.46-.049 1.46-.126 1.459-.205 1.459-.27 1.46-.326 1.459-.384 1.46-.428 1.458-.47 1.46-.512 1.46-.547 1.459-.575 1.459-.608 1.46-.633 1.459-.66 1.46-.68 1.459-.701 1.459-.719 1.46-.738 1.459-.754 1.46-.771 1.458-.784 1.46-.796 1.46-.81L7.31 7.29l1.459-.832 1.46-.841 1.459-.854 1.46-.86 1.458-.87 1.46-.878 1.46-.883L18.984.38l1.459-.9 1.46-.905 1.459-.91 1.46-.918 1.459-.922 1.459-.927 1.46-.932 1.459-.939 1.46-.941 1.458-.946 1.46-.95 1.46-.954 1.459-.957 1.459-.961 1.46-.965 1.459-.967 1.46-.97 1.458-.975 1.46-.977 1.46-.979 1.459-.982 1.459-.985 1.46-.987 1.459-.989 1.46-.992 1.459-.993 1.459-.996 1.46-.998 1.459-1 1.459-1 1.46-1.005 1.459-1.005 1.46-1.006 1.459-1.009 1.459-1.01 1.46-1.012 1.459-1.013 1.46-1.014 1.458-1.016 1.46-1.017 1.46-1.019 1.459-1.02"/><path stroke="none" d="M-25.384 20.656c0-.938-1.03-1.7-2.3-1.7s-2.3.762-2.3 1.7c0 .94 1.03 1.7 2.3 1.7s2.3-.76 2.3-1.7m-2.3 0"/><g stroke="none" font-size="10"><text x="-60.404" y="69.027" font-family="cmr10" transform="translate(36.253 -54.403)">(1</text><text x="-51.515" y="69.027" font-family="cmmi10" transform="translate(36.253 -54.403)">;</text><text x="-45.404" y="69.027" font-family="cmr10" transform="translate(36.253 -54.403)">2)</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-60.404" y="69.027" font-family="cmmi10" font-size="10" transform="translate(96.06 -116.006)">y</text><text x="-52.365" y="69.027" font-family="cmr10" font-size="10" transform="translate(96.06 -116.006)">=</text><text x="-41.809" y="69.027" font-family="cmmi10" font-size="10" transform="translate(96.06 -116.006)">x</text><text x="-33.872" y="69.027" font-family="cmr10" font-size="10" transform="translate(96.06 -116.006)">+</text><text x="-22.398" y="65.089" font-family="cmr7" font-size="7" transform="translate(96.06 -116.006)">1</text><path d="M73.388-49.68h4.535v.4h-4.535z"/><text x="-22.672" y="72.475" font-family="cmmi7" font-size="7" transform="translate(96.06 -116.006)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
