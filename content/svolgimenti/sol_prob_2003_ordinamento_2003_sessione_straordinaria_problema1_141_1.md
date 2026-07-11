

**Problema:** [[Problemi/prob_2003_ordinamento_2003_sessione_straordinaria_problema1_141_1|2003 Straordinaria Ordinamento — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_ordinamento_2003_sessione_straordinaria_problema1_141|2003 Straordinaria Ordinamento — Problema 1]]

È assegnata l'equazione in $x$:
$$x^3+2x-50=0.$$

## a) Esistenza e unicità della soluzione

Poniamo $f(x)=x^3+2x-50$. La sua derivata è
$$f'(x)=3x^2+2>0 \qquad \text{per ogni } x\in\mathbb{R},$$
quindi $f$ è strettamente crescente e ammette **al più** uno zero.

Poiché $f$ è una funzione polinomiale di grado dispari (continua su tutto $\mathbb{R}$) e
$$f(3)=27+6-50=-17<0, \qquad f(4)=64+8-50=22>0,$$
per il teorema degli zeri esiste almeno una radice nell'intervallo $(3,4)$. Per la stretta monotonìa questa radice $\overline{x}$ è unica.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="275.773" height="171.393" viewBox="-72 -72 206.83 128.545"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-20.744h193.649"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M119.699-23.144c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-28.253" y="-20.744" stroke="none" font-family="cmmi10" font-size="10" transform="translate(153.764 2.153)">x</text><path fill="none" d="M-28.253 56.075v-114.83"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-30.653-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-28.253" y="-20.744" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -43.887)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-68.94 49.413 2.97-.815 2.97-.732 2.971-.655 2.97-.585 2.971-.52 2.97-.465 2.971-.413 2.97-.37 2.971-.331 2.97-.302 2.971-.276 2.97-.26 2.971-.248 2.97-.243 2.971-.245 2.97-.254 2.971-.27 2.97-.29 2.971-.32 2.97-.353 2.971-.395 2.97-.444 2.971-.497 2.97-.56 2.971-.626 2.97-.7 2.971-.782 2.97-.869 2.971-.963 2.97-1.063 2.971-1.17 2.97-1.285 2.971-1.404 2.97-1.53 2.971-1.665 2.97-1.805 2.971-1.95 2.97-2.104 2.971-2.263 2.97-2.43 2.971-2.602 2.97-2.782 2.971-2.967 2.97-3.16 2.971-3.36 2.97-3.564 2.971-3.777 2.97-3.995 2.971-4.22 2.97-4.453 2.971-4.691 2.97-4.936 2.971-5.188 2.97-5.445 2.971-5.71 2.97-5.982 2.971-6.26 2.97-6.543 2.971-6.835"/><path stroke="none" d="M67.842 1.021c0-.05-.985-.09-2.2-.09s-2.2.04-2.2.09.985.09 2.2.09 2.2-.04 2.2-.09m-2.2 0"/><g stroke="none" font-size="10"><text x="-28.253" y="-20.744" font-family="cmmi10" transform="translate(97.428 32.798)">f</text><text x="-22.28" y="-20.744" font-family="cmr10" transform="translate(97.428 32.798)">(3)</text><text x="-6.725" y="-20.744" font-family="cmr10" transform="translate(97.428 32.798)">=</text><text x="3.831" y="-20.744" font-family="cmsy10" transform="translate(97.428 32.798)">¡</text><text x="11.608" y="-20.744" font-family="cmr10" transform="translate(97.428 32.798)">17</text></g><path stroke="none" d="M99.14-48.912c0-.05-.985-.09-2.2-.09s-2.2.04-2.2.09.985.09 2.2.09 2.2-.04 2.2-.09m-2.2 0"/><g stroke="none" font-size="10"><text x="-28.253" y="-20.744" font-family="cmmi10" transform="translate(79.576 -34.2)">f</text><text x="-22.28" y="-20.744" font-family="cmr10" transform="translate(79.576 -34.2)">(4)</text><text x="-6.725" y="-20.744" font-family="cmr10" transform="translate(79.576 -34.2)">=</text><text x="3.831" y="-20.744" font-family="cmr10" transform="translate(79.576 -34.2)">22</text></g><g stroke="none"><path d="M77.676-30.183h5.715v.4h-5.715z"/><text x="-28.253" y="-20.744" font-family="cmmi10" font-size="10" transform="translate(105.929 -3.533)">x</text></g></g></svg>
</figure>

## b) Localizzazione della radice

Dai calcoli del punto precedente si ha $f(3)=-17<0$ e $f(4)=22>0$, dunque
$$3<\overline{x}<4 \quad\Longrightarrow\quad z=3.$$

## c) Massimo e minimo relativi della curva $C_k$

La curva ha equazione
$$y=(x^3+2x-50)+k(x^3+2x-75)=(1+k)x^3+2(1+k)x-50-75k.$$

Calcoliamo la derivata prima:
$$y'=3(1+k)x^2+2(1+k)=(1+k)(3x^2+2).$$

Per $k\ne -1$ il fattore $1+k$ è una costante non nulla, mentre $3x^2+2>0$ per ogni $x$; quindi $y'$ ha segno costante (uguale a quello di $1+k$) e non si annulla mai. La funzione è perciò sempre monotòna e la curva $C_k$ **non ammette** massimi né minimi relativi, qualunque sia $k\ne -1$.

## d) Simmetria rispetto all'origine

La curva $C_k$ è simmetrica rispetto all'origine $O$ se e solo se la funzione è dispari, cioè $y(-x)=-y(x)$ per ogni $x$. La parte cubica $(1+k)x^3+2(1+k)x$ è già dispari; resta da annullare il termine noto:
$$-50-75k=0 \quad\Longrightarrow\quad 75k=-50 \quad\Longrightarrow\quad k=-\frac{2}{3}.$$

Esiste dunque il valore $\overline{k}=-\dfrac{2}{3}$ per cui $C_{\overline{k}}$ è simmetrica rispetto all'origine.

## e) Rette tangenti alla curva $C_0$

Per $k=0$ la curva è
$$C_0:\quad y=x^3+2x-50.$$
Una retta $y=5x+m$ è tangente a $C_0$ nel punto di ascissa $x$ se in tale punto coincidono ordinate e coefficienti angolari:
$$\begin{cases} x^3+2x-50=5x+m,\\[2pt] 3x^2+2=5. \end{cases}$$

Dalla seconda equazione $3x^2=3$, cioè $x=\pm 1$.

- Per $x=1$: $\;y=1+2-50=-47$, e da $-47=5+m$ segue $m=-52$.
- Per $x=-1$: $\;y=-1-2-50=-53$, e da $-53=-5+m$ segue $m=-48$.

Fra le rette date ve ne sono quindi **due** tangenti a $C_0$:
$$y=5x-52 \qquad\text{e}\qquad y=5x-48.$$

*Fonte:* [📄 PDF p.141](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
