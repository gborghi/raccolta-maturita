

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_4|2005 Ordinamento Straordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Dimostrare che ogni funzione del tipo
$$y = a\sin^2 x + b\sin x\cos x + c\cos^2 x,$$
con $a,b,c$ numeri reali non contemporaneamente nulli, ha di regola per grafico una sinusoide. C'è qualche eccezione?

## Riduzione alla forma canonica

Ricordiamo che una funzione sinusoidale è riconducibile alla forma
$$y = A\sin(\omega x + \varphi),$$
eventualmente traslata verticalmente. Per ricondurre la funzione data a questa forma usiamo le formule di bisezione e di duplicazione:
$$\sin^2 x = \frac{1-\cos 2x}{2}, \qquad \cos^2 x = \frac{1+\cos 2x}{2}, \qquad \sin x\cos x = \frac{1}{2}\sin 2x.$$

Sostituendo:
$$y = a\cdot\frac{1-\cos 2x}{2} + b\cdot\frac{\sin 2x}{2} + c\cdot\frac{1+\cos 2x}{2}.$$

Raccogliendo i termini costanti e quelli in $\sin 2x$ e $\cos 2x$:
$$y = \frac{a+c}{2} + \frac{b}{2}\sin 2x + \frac{c-a}{2}\cos 2x.$$

## La combinazione è una sinusoide

L'espressione $\dfrac{b}{2}\sin 2x + \dfrac{c-a}{2}\cos 2x$ è combinazione lineare di $\sin 2x$ e $\cos 2x$ con la stessa pulsazione, e quindi si può scrivere come un'unica sinusoide
$$\frac{b}{2}\sin 2x + \frac{c-a}{2}\cos 2x = A\sin(2x + \varphi),$$
dove l'ampiezza è
$$A = \sqrt{\left(\frac{b}{2}\right)^2 + \left(\frac{c-a}{2}\right)^2} = \frac{1}{2}\sqrt{b^2 + (c-a)^2}$$
e la fase $\varphi$ è determinata da $\cos\varphi = \dfrac{b/2}{A}$, $\sin\varphi = \dfrac{(c-a)/2}{A}$.

In definitiva
$$y = A\sin(2x + \varphi) + \frac{a+c}{2}.$$

Il grafico è dunque una **sinusoide** di pulsazione $2$ (periodo $\pi$), ampiezza $A$ e fase $\varphi$, traslata verticalmente della quantità $\dfrac{a+c}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="272.634" height="131.565" viewBox="-72 -72 204.475 98.674"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07-1.11h180.56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M106.61-3.51c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-10.612" y="-1.111" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(123.034 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-10.612 26.204v-84.958"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-13.012-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-10.612" y="-1.111" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -63.52)">y</text></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-18.182h180.959"/><g fill="#000" stroke="#000"><g stroke="none"><text x="-9.412" y="-5.048" font-family="cmmi7" font-size="7" transform="translate(123.034 -14.66)">a</text><text x="-5.075" y="-5.048" font-family="cmr7" font-size="7" transform="translate(123.034 -14.66)">+</text><text x="1.064" y="-5.048" font-family="cmmi7" font-size="7" transform="translate(123.034 -14.66)">c</text><path d="M113.622-18.471h14.05v.4h-14.05z"/><text x="-4.38" y="2.338" font-family="cmr7" font-size="7" transform="translate(123.034 -14.66)">2</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-68.655-39.04 1.956 1.526 1.956 1.779 1.956 2.01 1.957 2.213 1.956 2.388 1.956 2.533 1.957 2.642 1.956 2.718 1.956 2.758 1.956 2.76 1.957 2.73 1.956 2.661 1.956 2.558 1.957 2.422 1.956 2.253 1.956 2.055 1.957 1.83 1.956 1.58 1.956 1.313 1.956 1.023 1.957.725 1.956.414 1.956.1 1.957-.219 1.956-.53 1.956-.838 1.956-1.134 1.957-1.414 1.956-1.677 1.956-1.918L-8.01-3.91l1.956-2.32 1.956-2.476 1.957-2.601 1.956-2.69 1.956-2.746 1.956-2.764 1.957-2.747 1.956-2.694 1.956-2.605 1.957-2.482 1.956-2.326 1.956-2.14 1.956-1.928 1.957-1.686 1.956-1.426 1.956-1.146 1.957-.85 1.956-.544 1.956-.23 1.957.086 1.956.402 1.956.711 1.956 1.013 1.957 1.3 1.956 1.57 1.956 1.82 1.957 2.047 1.956 2.245 1.956 2.415 1.956 2.553 1.957 2.658 1.956 2.728 1.956 2.76 1.957 2.758 1.956 2.72 1.956 2.647 1.957 2.537 1.956 2.395 1.956 2.222 1.956 2.017 1.957 1.79 1.956 1.536 1.956 1.265 1.957.974 1.956.672 1.956.361 1.956.045 1.957-.27 1.956-.584 1.956-.89 1.957-1.182 1.956-1.46 1.956-1.72 1.957-1.956 1.956-2.165 1.956-2.349 1.956-2.5 1.957-2.619"/><g fill="#00f" stroke="#00f"><text x="-10.612" y="-1.111" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(96.384 -44.913)">y</text></g></g></svg>
</figure>

## L'eccezione

Il ragionamento vale purché $A\ne 0$. L'ampiezza si annulla quando
$$b^2 + (c-a)^2 = 0,$$
cioè quando **contemporaneamente** $b=0$ e $c=a$. In tal caso il termine oscillante scompare e la funzione diventa
$$y = \frac{a+c}{2} = a,$$
cioè una **costante**: il grafico è una retta orizzontale, che non è una sinusoide.

Questa è l'unica eccezione: se $b=0$ e $a=c$ (con $a\ne 0$, altrimenti tutti i coefficienti sarebbero nulli) la funzione si riduce alla retta $y=a$. In ogni altro caso, cioè quando $b\ne 0$ oppure $a\ne c$, si ha $A\ne 0$ e il grafico è effettivamente una sinusoide.

*Fonte:* [📄 PDF p.137](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
