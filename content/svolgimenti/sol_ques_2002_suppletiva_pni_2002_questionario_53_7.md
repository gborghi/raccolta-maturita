

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_7|2002 Suppletiva PNI — Questionario — Quesito 7]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

Verificare che la funzione
$$y=f(x)=\frac{1-e^{1-x}}{1+e^{1-x}}$$
è invertibile e, detta $g$ la funzione inversa, calcolare $g'(0)$.

## Invertibilità

La funzione è definita e continua su tutto $\mathbb{R}$, perché il denominatore $1+e^{1-x}$ è sempre positivo. Calcoliamo la derivata prima. Ponendo $u=e^{1-x}$ (con $u'=-e^{1-x}$) e derivando $\dfrac{1-u}{1+u}$ si ottiene

$$f'(x)=\frac{2e^{1-x}}{\left(1+e^{1-x}\right)^{2}}.$$

Poiché numeratore e denominatore sono entrambi positivi, risulta $f'(x)>0$ per ogni $x\in\mathbb{R}$: la funzione è quindi strettamente crescente su tutto il suo dominio, dunque **iniettiva** e perciò **invertibile**.

Osserviamo inoltre che, poiché $\lim_{x\to-\infty}f(x)=-1$ e $\lim_{x\to+\infty}f(x)=1$, l'immagine di $f$ è l'intervallo $(-1,1)$: la funzione inversa $g$ è definita su $(-1,1)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="399.767" height="151.294" viewBox="-72 -72 299.825 113.47"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-9.077h268.765"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M194.815-11.477c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="31.214" y="-9.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(169.413 2.153)">x</text><path fill="none" d="M31.214 41v-99.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M28.814-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="31.214" y="-9.077" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -55.555)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-40.375h269.165"/><g stroke="none" font-size="10"><text x="31.214" y="-9.077" font-family="cmmi10" transform="translate(169.413 -29.048)">y</text><text x="39.253" y="-9.077" font-family="cmr10" transform="translate(169.413 -29.048)">=</text><text x="49.809" y="-9.077" font-family="cmr10" transform="translate(169.413 -29.048)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 22.221h269.165"/><g stroke="none" font-size="10"><text x="31.214" y="-9.077" font-family="cmmi10" transform="translate(130.975 33.548)">y</text><text x="39.253" y="-9.077" font-family="cmr10" transform="translate(130.975 33.548)">=</text><text x="49.809" y="-9.077" font-family="cmsy10" transform="translate(130.975 33.548)">¡</text><text x="57.587" y="-9.077" font-family="cmr10" transform="translate(130.975 33.548)">1</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.68 21.095 3.169-.117 3.169-.13 3.17-.142 3.168-.158 3.17-.173 3.169-.19 3.169-.21 3.169-.23 3.17-.252 3.168-.276 3.17-.303 3.169-.333 3.169-.363 3.169-.396 3.17-.433 3.168-.47 3.17-.514 3.169-.556 3.169-.604 3.169-.652 3.17-.705 3.168-.76 3.17-.814 3.169-.875 3.169-.933 3.169-.995 3.17-1.057 3.168-1.12 3.17-1.177 3.169-1.239 3.169-1.297 3.169-1.35 3.17-1.4L45.07-.575l3.17-1.488 3.169-1.52 3.169-1.55L57.748-6.7l3.17-1.578 3.168-1.58 3.17-1.577 3.169-1.572 3.169-1.549 3.169-1.521 3.17-1.487 3.168-1.45 3.17-1.398 3.169-1.352 3.169-1.296 3.17-1.24 3.168-1.176 3.17-1.124 3.169-1.058 3.169-.992 3.169-.936 3.17-.873 3.168-.817 3.17-.76 3.169-.707 3.169-.648 3.169-.605 3.17-.563 3.168-.507 3.17-.473 3.169-.431 3.169-.401 3.169-.363 3.17-.332 3.168-.304 3.17-.278 3.169-.247 3.169-.235 3.169-.207 3.17-.187 3.168-.182 3.17-.15 3.169-.147 3.169-.128 3.17-.116"/><path stroke="none" d="M64.272-9.077a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><g stroke="none" font-size="10"><text x="31.214" y="-9.077" font-family="cmr10" transform="translate(34.831 11.033)">(1</text><text x="40.103" y="-9.077" font-family="cmmi10" transform="translate(34.831 11.033)">;</text><text x="44.547" y="-9.077" font-family="cmr10" transform="translate(34.831 11.033)">0)</text></g></g></svg>
</figure>

## Calcolo di $g'(0)$

Per il teorema sulla derivata della funzione inversa, detto $x_0$ il punto tale che $f(x_0)=y_0$, si ha

$$g'(y_0)=\frac{1}{f'(x_0)}.$$

Vogliamo $g'(0)$, quindi imponiamo $y_0=0$, cioè $f(x_0)=0$:

$$\frac{1-e^{1-x_0}}{1+e^{1-x_0}}=0 \;\Rightarrow\; 1-e^{1-x_0}=0 \;\Rightarrow\; e^{1-x_0}=1 \;\Rightarrow\; 1-x_0=0 \;\Rightarrow\; x_0=1.$$

Calcoliamo ora $f'(1)$:

$$f'(1)=\frac{2e^{0}}{\left(1+e^{0}\right)^{2}}=\frac{2}{(1+1)^{2}}=\frac{2}{4}=\frac{1}{2}.$$

Pertanto

$$g'(0)=\frac{1}{f'(1)}=\frac{1}{\tfrac{1}{2}}=2.$$

*Fonte:* [📄 PDF p.56](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
