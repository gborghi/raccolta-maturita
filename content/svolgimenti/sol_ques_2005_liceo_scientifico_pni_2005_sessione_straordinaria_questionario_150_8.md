

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_8|2005 PNI Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Dopo aver spiegato, mediante una dimostrazione o un'interpretazione geometrica, perché l'equazione $x^{3}+x+1=0$ ammette una e una sola soluzione reale, esplicitare un algoritmo idoneo a calcolarne un valore approssimato.

## Esistenza e unicità della soluzione

Consideriamo la funzione

$$f(x)=x^{3}+x+1,$$

che è continua su tutto $\mathbb{R}$ in quanto polinomiale.

**Esistenza.** Poiché $f$ è un polinomio di grado dispari, agli estremi si ha

$$\lim_{x\to-\infty}f(x)=-\infty, \qquad \lim_{x\to+\infty}f(x)=+\infty.$$

Essendo $f$ continua e assumendo valori sia negativi sia positivi, per il teorema degli zeri esiste almeno un punto in cui $f$ si annulla: l'equazione ha dunque almeno una soluzione reale.

**Unicità.** Calcoliamo la derivata prima:

$$f'(x)=3x^{2}+1>0 \qquad \text{per ogni } x\in\mathbb{R}.$$

La funzione è perciò strettamente crescente su tutto $\mathbb{R}$, quindi assume ogni valore una sola volta: in particolare il valore $0$ è assunto una e una sola volta. L'equazione $x^{3}+x+1=0$ ammette quindi **una e una sola** soluzione reale.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="187" height="418.105" viewBox="-72 -72 140.25 313.578"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 64.5H54.999"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M53.119 62.1c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x=".77" y="64.501" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(58.162 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M.77 119.13V-53.463"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-1.63-51.583c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x=".77" y="64.501" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -123.842)">y</text></g><path fill="none" stroke="#ccc" d="M-67.517 66.777v-4.553M-44.755 66.777v-4.553M-21.993 66.777v-4.553M23.532 66.777v-4.553M46.294 66.777v-4.553"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-67.517 240.908 1.44-10.957 1.44-10.555 1.44-10.162 1.44-9.779 1.44-9.403 1.44-9.037 1.44-8.678 1.44-8.329 1.44-7.988 1.44-7.656 1.44-7.333 1.44-7.017 1.44-6.712 1.44-6.414 1.44-6.125 1.44-5.845 1.44-5.572 1.44-5.311 1.44-5.056 1.44-4.81 1.44-4.572 1.44-4.345 1.44-4.125 1.44-3.914 1.44-3.711 1.44-3.517 1.44-3.333 1.44-3.155 1.44-2.988 1.44-2.829 1.44-2.678 1.44-2.536 1.44-2.402 1.44-2.278 1.44-2.163 1.44-2.054 1.44-1.956 1.44-1.866 1.44-1.784 1.44-1.712 1.44-1.647 1.44-1.592 1.44-1.545 1.44-1.507 1.44-1.477 1.44-1.457 1.44-1.443 1.44-1.44 1.44-1.446 1.44-1.459 1.44-1.48 1.44-1.514 1.44-1.55 1.44-1.601 1.44-1.657 1.44-1.723 1.44-1.796 1.44-1.88 1.44-1.97 1.44-2.072 1.44-2.179 1.44-2.297 1.44-2.424 1.44-2.558 1.44-2.7 1.44-2.853 1.44-3.014 1.44-3.183 1.44-3.361 1.44-3.548 1.44-3.742 1.44-3.947 1.44-4.159 1.44-4.38 1.44-4.61 1.44-4.848 1.44-5.095 1.44-5.351 1.44-5.616"/><path fill="red" stroke="none" d="M-28.372 64.5a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="10"><text x=".77" y="64.501" font-family="cmmi10" transform="translate(-27.528 9.977)">®</text><text x="9.981" y="64.501" font-family="cmsy10" transform="translate(-27.528 9.977)">¼</text><text x="20.537" y="64.501" font-family="cmsy10" transform="translate(-27.528 9.977)">¡</text><text x="28.315" y="64.501" font-family="cmr10" transform="translate(-27.528 9.977)">0</text><text x="33.315" y="64.501" font-family="cmmi10" transform="translate(-27.528 9.977)">:</text><text x="36.092" y="64.501" font-family="cmr10" transform="translate(-27.528 9.977)">68</text></g></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x=".77" y="64.501" font-family="cmmi10" font-size="10" transform="translate(-26.517 -125.16)">y</text><text x="8.809" y="64.501" font-family="cmr10" font-size="10" transform="translate(-26.517 -125.16)">=</text><text x="19.364" y="64.501" font-family="cmmi10" font-size="10" transform="translate(-26.517 -125.16)">x</text><text x="25.08" y="60.872" font-family="cmr7" font-size="7" transform="translate(-26.517 -125.16)">3</text><text x="31.788" y="64.501" font-family="cmr10" font-size="10" transform="translate(-26.517 -125.16)">+</text><text x="41.788" y="64.501" font-family="cmmi10" font-size="10" transform="translate(-26.517 -125.16)">x</text><text x="49.725" y="64.501" font-family="cmr10" font-size="10" transform="translate(-26.517 -125.16)">+</text><text x="59.725" y="64.501" font-family="cmr10" font-size="10" transform="translate(-26.517 -125.16)">1</text></g></g></g></svg>
</figure>

## Approssimazione della radice

Per calcolare un valore approssimato della radice conviene prima **separarla**, individuando due punti in cui la funzione ha segni opposti. Si osserva che

$$f(0)=1>0, \qquad f(-1)=(-1)+(-1)+1=-1<0,$$

quindi la radice $\alpha$ è compresa nell'intervallo $(-1,\,0)$.

Applichiamo il **metodo di bisezione**: a ogni passo si considera il punto medio $c=\dfrac{a+b}{2}$ dell'intervallo $[a,b]$ e si conserva il semiintervallo agli estremi del quale $f$ cambia segno.

Partiamo da $[a,b]=[-1,\,0]$, con $f(-1)<0$ e $f(0)>0$.

$$c=\frac{-1+0}{2}=-0.5, \qquad f(-0.5)=0.375>0 \ \Rightarrow\ [a,b]=[-1,\,-0.5]$$

$$c=\frac{-1-0.5}{2}=-0.75, \qquad f(-0.75)=-0.172<0 \ \Rightarrow\ [a,b]=[-0.75,\,-0.5]$$

$$c=\frac{-0.75-0.5}{2}=-0.625, \qquad f(-0.625)=0.131>0 \ \Rightarrow\ [a,b]=[-0.75,\,-0.625]$$

Proseguendo con le successive bisezioni l'ampiezza dell'intervallo si dimezza a ogni passo, così da raggiungere la precisione voluta. Già a questo stadio la radice appartiene all'intervallo $(-0.75,\,-0.625)$; iterando fino a un'approssimazione di $10^{-2}$ si ottiene

$$\alpha\approx-0.68.$$

**Schema dell'algoritmo di bisezione** (arresto quando $b-a<\varepsilon$, con $\varepsilon=10^{-2}$):

$$\begin{cases} a=-1,\quad b=0 \\[2pt] c=\dfrac{a+b}{2} \\[2pt] \text{se } f(a)\cdot f(c)<0 \ \text{allora } b=c, \ \text{altrimenti } a=c \\[2pt] \text{si ripete finché } b-a<\varepsilon \end{cases}$$

Il valore finale $c$ fornisce la radice cercata con l'approssimazione richiesta, ossia $\alpha\approx-0.68$.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
