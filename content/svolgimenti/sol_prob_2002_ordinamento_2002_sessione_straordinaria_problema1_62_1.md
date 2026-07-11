

**Problema:** [[Problemi/prob_2002_ordinamento_2002_sessione_straordinaria_problema1_62_1|2002 Straordinaria Ordinamento — Problema 1 — Problema 1]] · **Prova:** [[Prove/2002_ordinamento_2002_sessione_straordinaria_problema1_62|2002 Straordinaria Ordinamento — Problema 1]]

In un sistema cartesiano ortogonale $(Oxy)$ si considerano: la circonferenza $k$ di centro $(8,2)$ e raggio $6$; la bisettrice $b$ del I e III quadrante; una parabola $p$ con asse parallelo all'asse $y$, tangente all'asse $x$ nel semipiano $x>0$ e passante per i punti $M,N$ in cui $b$ interseca $k$. Si chiede l'area tra $p$ e $b$ e le aree delle due regioni in cui $p$ divide il cerchio.

## a) Circonferenza e punti $M$, $N$

La circonferenza di centro $(8,2)$ e raggio $6$ ha equazione

$$k:\ (x-8)^2+(y-2)^2=36 \quad\Rightarrow\quad x^2+y^2-16x-4y+32=0.$$

Intersecandola con la bisettrice $b:\ y=x$ si ottiene

$$x^2+x^2-16x-4x+32=0,\qquad 2x^2-20x+32=0,\qquad x^2-10x+16=0,$$

le cui radici sono $x=2$ e $x=8$. I punti di intersezione sono quindi

$$M=(2,2),\qquad N=(8,8).$$

## b) Parabola $p$

Cerchiamo la parabola nella forma $y=ax^2+bx+c$. Imponendo il passaggio per $M$ e $N$:

$$\begin{cases} 4a+2b+c=2 \\ 64a+8b+c=8 \end{cases}$$

Sottraendo la prima dalla seconda si ha $60a+6b=6$, cioè $b=1-10a$; sostituendo si ricava $c=16a$. La parabola diventa allora

$$y=ax^2+(1-10a)x+16a.$$

Imponiamo la tangenza all'asse $x$, cioè $\Delta=0$ nell'equazione $ax^2+(1-10a)x+16a=0$:

$$(1-10a)^2-4a(16a)=0,\qquad 36a^2-20a+1=0,\qquad a=\tfrac12 \ \ \text{oppure}\ \ a=\tfrac{1}{18}.$$

Per $a=\tfrac{1}{18}$ la tangenza avverrebbe in $x=-4$ (semipiano $x<0$), da scartare. Per $a=\tfrac12$ si ha tangenza in $x=4>0$. Dunque

$$p:\ y=\tfrac12 x^2-4x+8=\tfrac12(x-4)^2,$$

tangente all'asse $x$ nel punto $(4,0)$.

## c) Area fra $p$ e $b$

Le due curve si intersecano in $M$ e $N$, cioè per $x=2$ e $x=8$; nell'intervallo $[2,8]$ la bisettrice sta sopra la parabola. L'area richiesta è

$$A=\int_{2}^{8}\Bigl[x-\bigl(\tfrac12 x^2-4x+8\bigr)\Bigr]\,dx=\int_{2}^{8}\Bigl(-\tfrac12 x^2+5x-8\Bigr)\,dx.$$

Una primitiva è $-\tfrac16 x^3+\tfrac52 x^2-8x$; valutandola agli estremi si ottiene

$$A=18\ \text{u}^2.$$

## d) Intersezioni $k\cap p$ e aree delle due regioni

Sostituendo $y=\tfrac12(x-4)^2$ nell'equazione di $k$ e semplificando si perviene alla fattorizzazione

$$\Bigl(\tfrac12 x^2-5x+8\Bigr)\Bigl(\tfrac12 x^2-3x+8\Bigr)=0.$$

Il primo fattore dà $x^2-10x+16=0$, cioè $x=2,8$ (i punti $M$ e $N$). Il secondo fattore, $x^2-6x+16=0$, ha $\Delta=36-64<0$: nessuna radice reale. Dunque $k$ e $p$ non hanno altri punti in comune oltre a $M$ ed $N$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="229.492" height="270.307" viewBox="-72 -72 172.119 202.73"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 90.225H86.868"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M84.988 87.825c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-62.111" y="90.225" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(152.912 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-62.111 100.184V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-64.511-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-62.111" y="90.225" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -154.857)">y</text></g><path fill="none" stroke="red" stroke-width=".8" d="M77.309 70.308c0-33-26.75-59.752-59.751-59.752s-59.752 26.752-59.752 59.752 26.751 59.752 59.752 59.752c33 0 59.751-26.751 59.751-59.752Zm-59.751 0"/><g fill="red" stroke="red"><text x="-62.111" y="90.225" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.681 -56.28)">k</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-66.095-6.174 1.587 6.855 1.586 6.602 1.587 6.349 1.587 6.096 1.586 5.843 1.587 5.591 1.586 5.338 1.587 5.085 1.586 4.833 1.587 4.58 1.587 4.326 1.586 4.074 1.587 3.822 1.586 3.568 1.587 3.316 1.586 3.063 1.587 2.81 1.587 2.557 1.586 2.305 1.587 2.052 1.586 1.8 1.587 1.546 1.587 1.293 1.586 1.041 1.587.788 1.586.536 1.587.282 1.586.03 1.587-.223 1.587-.476 1.586-.728 1.587-.981 1.586-1.235 1.587-1.486 1.587-1.74 1.586-1.992L-7.39 79.1l1.586-2.498 1.587-2.75 1.586-3.004 1.587-3.256 1.587-3.51 1.586-3.761 1.587-4.015L5.3 52.04l1.587-4.52 1.586-4.773 1.587-5.026 1.587-5.278 1.586-5.531 1.587-5.784 1.586-6.037 1.587-6.289 1.587-6.542 1.586-6.795 1.587-7.048 1.586-7.3 1.587-7.554 1.586-7.806"/><g fill="#00f" stroke="#00f"><text x="-62.111" y="90.225" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.062 -103.385)">p</text></g><path fill="none" stroke="#090" stroke-width=".8" d="M-67.09 95.205 47.433-19.32"/><g fill="#090" stroke="#090"><text x="-62.111" y="90.225" fill="#090" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.387 -96.114)">b</text></g><path stroke="none" d="M-40.444 70.308a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0m-1.75 0"/><text x="-62.111" y="90.225" stroke="none" font-family="cmmi10" font-size="10" transform="translate(5.593 -23.45)">M</text><path stroke="none" d="M19.308 10.556a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0m-1.75 0"/><text x="-62.111" y="90.225" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.011 -83.202)">N</text><path stroke="none" d="M18.958 70.308a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0m-1.4 0"/><text x="-62.111" y="90.225" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.202 -9.551)">C</text><path stroke="none" d="M-20.877 90.225a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0m-1.4 0"/><g stroke="none" font-size="10"><text x="-62.111" y="90.225" font-family="cmr10" transform="translate(28.723 11.033)">(4</text><text x="-53.222" y="90.225" font-family="cmmi10" transform="translate(28.723 11.033)">;</text><text x="-48.778" y="90.225" font-family="cmr10" transform="translate(28.723 11.033)">0)</text></g></g></svg>
</figure>

Detto $C=(8,2)$ il centro, i vettori $\overline{CM}=(-6,0)$ e $\overline{CN}=(0,6)$ sono ortogonali: l'arco $MN$ sottende un angolo retto al centro, quindi il settore circolare $MCN$ è un quarto del cerchio. Il segmento circolare compreso tra la corda $MN$ e l'arco ha area

$$\text{segmento}=\frac14\bigl(\pi\cdot 6^2\bigr)-\frac12\cdot 6\cdot 6=9\pi-18.$$

La regione minore, racchiusa tra la parabola e l'arco $MN$, si ottiene aggiungendo al segmento circolare i $18\ \text{u}^2$ compresi tra corda e parabola:

$$A_1=(9\pi-18)+18=9\pi\ \text{u}^2.$$

L'altra regione ha come area la differenza tra l'area del cerchio e $A_1$:

$$A_2=\pi\cdot 6^2-9\pi=27\pi\ \text{u}^2.$$

Le due regioni in cui la parabola divide il cerchio hanno quindi aree $A_1=9\pi\ \text{u}^2$ e $A_2=27\pi\ \text{u}^2$.

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/geometria #cluster/geometria
