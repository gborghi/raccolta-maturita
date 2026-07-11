

**Problema:** [[Problemi/prob_2005_scuole_italiane_allestero_europa_2005_sessione_ord_problema1_73_1|2005 Europa Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_europa_2005_sessione_ord_problema1_73|2005 Europa Ordinaria — Problema 1]]

La funzione $f$ è definita da $f(x)=x^{3}-6x^{2}+k$, dove $k$ è una costante reale arbitraria. Si tratta di una funzione polinomiale, quindi definita, continua e derivabile su tutto $\mathbb{R}$.

## a) Massimi e minimi relativi

Studiamo il segno della derivata prima:
$$f'(x)=3x^{2}-12x=3x(x-4).$$
Si ha $f'(x)\ge 0$ per $x\le 0$ oppure $x\ge 4$. Dunque $f$ è crescente per $x<0$ e per $x>4$, ed è decrescente per $0<x<4$.

Di conseguenza, per ogni valore di $k$, la funzione presenta un **massimo relativo** in $x=0$ e un **minimo relativo** in $x=4$. Calcolando le ordinate:
$$f(0)=k,\qquad f(4)=64-96+k=k-32.$$
Quindi il massimo relativo è $M=(0;\,k)$ e il minimo relativo è $m=(4;\,k-32)$.

## b) Valori di $k$ per tre zeri reali distinti

Poiché
$$\lim_{x\to-\infty}f(x)=-\infty,\qquad \lim_{x\to+\infty}f(x)=+\infty,$$
la cubica interseca l'asse $x$ in tre punti distinti se e solo se il massimo relativo ha ordinata positiva e il minimo relativo ha ordinata negativa:
$$\begin{cases} k>0 \\ k-32<0 \end{cases}\quad\Rightarrow\quad 0<k<32.$$

## c) Valore di $k$ con valor medio $1$ su $[-1;2]$

Il valor medio di $f$ sull'intervallo $[-1;2]$ è
$$\frac{1}{2-(-1)}\int_{-1}^{2}\left(x^{3}-6x^{2}+k\right)\,dx=\frac{1}{3}\int_{-1}^{2}\left(x^{3}-6x^{2}+k\right)\,dx.$$
Calcoliamo la primitiva:
$$\int\left(x^{3}-6x^{2}+k\right)dx=\frac{x^{4}}{4}-2x^{3}+kx.$$
Valutando fra $-1$ e $2$:
$$\left[\frac{x^{4}}{4}-2x^{3}+kx\right]_{-1}^{2}=(4-16+2k)-\left(\tfrac{1}{4}+2-k\right)=3k-\frac{57}{4}.$$
Imponendo che il valor medio sia $1$:
$$\frac{1}{3}\left(3k-\frac{57}{4}\right)=1\quad\Rightarrow\quad k-\frac{19}{4}=1\quad\Rightarrow\quad k=\frac{23}{4}.$$

## d) Area della regione finita per $k=32$

Per $k=32$ la funzione è $f(x)=x^{3}-6x^{2}+32$, con massimo $M=(0;\,32)$ e minimo $m=(4;\,0)$ (il minimo tocca l'asse $x$).

Cerchiamo le intersezioni con l'asse $x$. Una è $x=4$ (il punto di minimo); abbassando il grado con la regola di Ruffini si trova
$$x^{3}-6x^{2}+32=(x+2)(x-4)^{2},$$
da cui l'altra intersezione $x=-2$. Nell'intervallo $[-2;4]$ il grafico sta sopra l'asse $x$, quindi la regione finita richiesta è quella evidenziata.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="278.807" height="162.457" viewBox="-72 -72 209.105 121.843"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#d9d9ff" stroke="none" d="m-46.463 16.538 1.621-5.309 1.62-5.038 1.621-4.773 1.62-4.513 1.621-4.258 1.62-4.01 1.622-3.764 1.62-3.525 1.62-3.291 1.621-3.063 1.62-2.84 1.621-2.621 1.621-2.409 1.62-2.2 1.621-2 1.62-1.8 1.621-1.61 1.621-1.422 1.62-1.241 1.621-1.065 1.62-.894 1.621-.728 1.621-.567 1.62-.413 1.621-.262 1.62-.117 1.621.023 1.62.156 1.621.286 1.621.41 1.62.528 1.621.642 1.62.75 1.621.854 1.621.95 1.62 1.044 1.621 1.13 1.62 1.213 1.621 1.29 1.621 1.36 1.62 1.428 1.621 1.488 1.62 1.544 1.621 1.595 1.62 1.64 1.622 1.681 1.62 1.715 1.62 1.745 1.621 1.77 1.62 1.789 1.621 1.802 1.621 1.812 1.62 1.815 1.621 1.813 1.62 1.806 1.621 1.794 1.621 1.777 1.62 1.754 1.621 1.726 1.62 1.693 1.621 1.655 1.62 1.61 1.622 1.563 1.62 1.508 1.62 1.449 1.621 1.384 1.62 1.315 1.621 1.24 1.621 1.158 1.62 1.074 1.621.983 1.62.887 1.621.786 1.621.68 1.62.568 1.621.45 1.62.33 1.621.201 1.621.07h.01z"/><path fill="none" d="M-72.07 16.538h195.924"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M121.974 14.138c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-3.783" y="16.538" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.57 2.153)">x</text><path fill="none" d="M-3.783 40.44v-99.194"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.183-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.783" y="16.538" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -81.17)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-54.998 49.173 1.798-7.549 1.798-7.182 1.798-6.823 1.798-6.471 1.798-6.127 1.798-5.788 1.798-5.459 1.798-5.135 1.798-4.82 1.798-4.51 1.798-4.207 1.798-3.914 1.798-3.626 1.798-3.345 1.798-3.073 1.799-2.806 1.798-2.547 1.798-2.295 1.798-2.051 1.798-1.814 1.798-1.582 1.798-1.36 1.798-1.144 1.798-.935 1.798-.733 1.798-.538 1.798-.351 1.798-.17 1.798.002 1.798.168 1.798.328 1.798.479 1.798.623 1.798.761 1.798.892 1.799 1.014 1.798 1.13 1.798 1.24 1.798 1.34 1.798 1.436 1.798 1.523 1.798 1.603 1.798 1.676 1.798 1.742 1.798 1.8 1.798 1.853 1.798 1.896 1.798 1.934 1.798 1.965 1.798 1.987 1.798 2.003 1.798 2.012 1.798 2.013 1.798 2.008 1.798 1.995 1.799 1.976 1.798 1.948 1.798 1.914 1.798 1.873 1.798 1.824 1.798 1.769L56.48 3.25l1.798 1.636 1.798 1.558 1.798 1.475 1.798 1.383 1.798 1.285 1.798 1.18 1.798 1.065 1.798.947 1.798.82 1.798.684 1.798.543 1.798.395 1.798.24 1.799.076 1.798-.094 1.798-.27 1.798-.455 1.798-.647 1.798-.845 1.798-1.051 1.798-1.264 1.798-1.484 1.798-1.711 1.798-1.946 1.798-2.187 1.798-2.435 1.798-2.692"/><path stroke="none" d="M-2.283-47.203c0-.077-.672-.14-1.5-.14-.829 0-1.5.063-1.5.14s.671.14 1.5.14c.828 0 1.5-.062 1.5-.14m-1.5 0"/><g stroke="none" font-size="10"><text x="-3.783" y="16.538" font-family="cmmi10" transform="translate(3.533 -69.774)">M</text><text x="7.008" y="16.538" font-family="cmr10" transform="translate(3.533 -69.774)">(0</text><text x="15.897" y="16.538" font-family="cmmi10" transform="translate(3.533 -69.774)">;</text><text x="20.342" y="16.538" font-family="cmr10" transform="translate(3.533 -69.774)">32)</text></g><path stroke="none" d="M83.075 16.538c0-.077-.672-.14-1.5-.14-.829 0-1.5.063-1.5.14s.671.14 1.5.14c.828 0 1.5-.063 1.5-.14m-1.5 0"/><g stroke="none" font-size="10"><text x="-3.783" y="16.538" font-family="cmmi10" transform="translate(88.891 -6.033)">m</text><text x="4.997" y="16.538" font-family="cmr10" transform="translate(88.891 -6.033)">(4</text><text x="13.886" y="16.538" font-family="cmmi10" transform="translate(88.891 -6.033)">;</text><text x="18.33" y="16.538" font-family="cmr10" transform="translate(88.891 -6.033)">0)</text></g><path stroke="none" d="M-44.963 16.538c0-.077-.671-.14-1.5-.14-.828 0-1.5.063-1.5.14s.672.14 1.5.14c.829 0 1.5-.063 1.5-.14m-1.5 0"/><g stroke="none" font-size="10"><text x="-3.783" y="16.538" font-family="cmsy10" transform="translate(-58.99 9.977)">¡</text><text x="3.994" y="16.538" font-family="cmr10" transform="translate(-58.99 9.977)">2</text></g><text x="-3.783" y="16.538" stroke="none" font-family="cmr10" font-size="10" transform="translate(82.858 7.985)">4</text></g></svg>
</figure>

L'area è
$$\text{Area}=\int_{-2}^{4}\left(x^{3}-6x^{2}+32\right)dx=\left[\frac{x^{4}}{4}-2x^{3}+32x\right]_{-2}^{4}.$$
Valutando:
$$\left[\frac{x^{4}}{4}-2x^{3}+32x\right]_{-2}^{4}=64-(-44)=108.$$
Pertanto l'area della regione è $108$ (unità di superficie).

*Fonte:* [📄 PDF p.73](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
