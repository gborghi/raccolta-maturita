

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_4|2005 PNI Straordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Dimostrare che ogni funzione del tipo
$$y = a\sin^2 x + b\sin x\cos x + c\cos^2 x,$$
dove $a,b,c$ sono numeri reali non contemporaneamente nulli, ha di regola per grafico una sinusoide. C'è qualche eccezione?

Ricordiamo che una funzione sinusoidale è riconducibile alla forma
$$y = A\sin(\omega x + \varphi).$$

Riscriviamo la funzione data usando le formule di bisezione e di duplicazione:
$$\sin^2 x = \frac{1-\cos 2x}{2}, \qquad \cos^2 x = \frac{1+\cos 2x}{2}, \qquad \sin x\cos x = \frac{\sin 2x}{2}.$$

Sostituendo si ottiene
$$y = a\cdot\frac{1-\cos 2x}{2} + b\cdot\frac{\sin 2x}{2} + c\cdot\frac{1+\cos 2x}{2},$$
ossia
$$y = \frac{1}{2}\big(a - a\cos 2x + b\sin 2x + c + c\cos 2x\big) = \frac{1}{2}\big[\,b\sin 2x + (c-a)\cos 2x\,\big] + \frac{a+c}{2}.$$

L'espressione $b\sin 2x + (c-a)\cos 2x$ è combinazione lineare di $\sin 2x$ e $\cos 2x$ e si può scrivere nella forma $R\sin(2x+\varphi)$, con
$$R = \sqrt{b^2 + (c-a)^2}, \qquad \tan\varphi = \frac{c-a}{b}.$$

Pertanto
$$y = \frac{\sqrt{b^2 + (c-a)^2}}{2}\,\sin(2x + \varphi) + \frac{a+c}{2}.$$

Il grafico è dunque una sinusoide di pulsazione $2$ (periodo $\pi$), di ampiezza $\dfrac{1}{2}\sqrt{b^2+(c-a)^2}$ e traslata verticalmente di $\dfrac{a+c}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="334.846" height="109.563" viewBox="-72 -72 251.134 82.172"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-9.077h224.947"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M150.997-11.477c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="37.474" y="-9.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(119.336 2.153)">x</text><path fill="none" d="M37.474 9.702v-68.456"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M35.074-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="37.474" y="-9.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -55.555)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-24.726h219.087"/><g fill="#000" stroke="#000"><g stroke="none"><text x="37.474" y="-9.077" font-family="cmmi10" font-size="10" transform="translate(113.077 -13.15)">y</text><text x="45.513" y="-9.077" font-family="cmr10" font-size="10" transform="translate(113.077 -13.15)">=</text><text x="57.268" y="-13.014" font-family="cmr7" font-size="7" transform="translate(113.077 -13.15)">1</text><path d="M170.345-24.926h3.986v.4h-3.986z"/><text x="57.268" y="-5.628" font-family="cmr7" font-size="7" transform="translate(113.077 -13.15)">2</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-65.81-4.98 1.735-1.228 1.736-1.455 1.735-1.664 1.736-1.853 1.735-2.02 1.736-2.162 1.735-2.276 1.736-2.364 1.735-2.422 1.736-2.45 1.735-2.448 1.736-2.418 1.735-2.353 1.736-2.264 1.735-2.145 1.736-2.001 1.735-1.833 1.736-1.64 1.735-1.427 1.736-1.199 1.735-.953 1.735-.7 1.736-.435 1.736-.162 1.735.109 1.735.379 1.736.645 1.735.9 1.736 1.15 1.735 1.383 1.736 1.597 1.735 1.794 1.736 1.968 1.735 2.117 1.736 2.243 1.735 2.338 1.736 2.405L.138-25.38l1.736 2.452 1.735 2.43 1.736 2.38 1.735 2.296 1.736 2.188 1.735 2.05 1.736 1.89 1.735 1.706 1.736 1.5 1.735 1.274 1.736 1.036 1.735.783 1.736.522 1.735.252 1.736-.019 1.735-.29 1.736-.558 1.735-.819 1.736-1.07 1.735-1.307 1.736-1.53 1.735-1.73 1.736-1.914 1.735-2.072 1.736-2.203 1.735-2.31 1.736-2.387 1.735-2.435 1.736-2.453 1.735-2.442 1.736-2.398 1.735-2.326 1.736-2.225 1.735-2.1 1.736-1.945 1.735-1.77 1.736-1.569 1.735-1.349 1.736-1.115 1.735-.868 1.736-.61 1.735-.342 1.736-.068 1.735.2 1.736.473 1.735.733 1.736.988 1.735 1.233 1.736 1.459 1.735 1.666 1.736 1.857 1.735 2.02 1.736 2.164 1.735 2.279 1.736 2.367 1.735 2.422 1.736 2.45 1.735 2.447 1.736 2.416 1.735 2.353 1.736 2.262 1.735 2.144 1.736 1.999 1.735 1.828 1.736 1.637 1.735 1.424 1.736 1.195 1.735.95 1.736.694 1.735.43 1.736.159 1.735-.113 1.736-.383 1.735-.648 1.736-.907 1.735-1.153 1.736-1.386 1.735-1.601 1.736-1.796 1.735-1.971 1.736-2.12"/></g></svg>
</figure>

*Grafico di $y=\sin^2 x + \sin x\cos x$ (caso $a=1,\ b=1,\ c=0$): una sinusoide di periodo $\pi$ oscillante attorno alla retta $y=\tfrac{1}{2}$.*

## Eccezione

Il grafico è una vera sinusoide solo se l'ampiezza è diversa da zero, cioè se
$$\sqrt{b^2 + (c-a)^2} \ne 0 \quad\Longleftrightarrow\quad \text{non si ha contemporaneamente } b=0 \text{ e } a=c.$$

L'unica eccezione si presenta quando $b=0$ e $a=c$ (con $a=c\ne 0$, dato che $a,b,c$ non sono tutti nulli). In tal caso la parte sinusoidale scompare e resta
$$y = \frac{a+c}{2} = a,$$
come si verifica anche direttamente:
$$y = a\sin^2 x + a\cos^2 x = a\,(\sin^2 x + \cos^2 x) = a.$$

La funzione è allora costante e il suo grafico è una retta orizzontale, non una sinusoide.

*Fonte:* [📄 PDF p.152](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
