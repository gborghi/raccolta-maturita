

**Problema:** [[Problemi/prob_1999_estero_1999_problema1_13_1|1999 Estero — Problema 1 — Problema 1]] · **Prova:** [[Prove/1999_estero_1999_problema1_13|1999 Estero — Problema 1]]

In un piano $\alpha$ è assegnata una parabola avente vertice $V$ e fuoco $F$ tali che $\overline{VF}=\dfrac{1}{2}$.

## a) Equazione della parabola

Scegliamo il sistema di riferimento in modo che il vertice $V$ coincida con l'origine, l'asse di simmetria sia l'asse $y$ e la concavità sia rivolta verso l'alto. La parabola ha allora equazione del tipo

$$y=ax^{2}\qquad (a>0).$$

Per questa parabola il fuoco è $F=\left(0,\dfrac{1}{4a}\right)$ e la distanza vertice-fuoco vale $\overline{VF}=\dfrac{1}{4a}$. Imponendo $\overline{VF}=\dfrac{1}{2}$ si ottiene

$$\frac{1}{4a}=\frac{1}{2}\ \Rightarrow\ a=\frac{1}{2}.$$

La parabola ha quindi equazione

$$y=\frac{1}{2}x^{2},$$

con fuoco $F=\left(0,\dfrac{1}{2}\right)$ e direttrice $y=-\dfrac{1}{2}$.



## b) Coordinate del punto P di intersezione delle tangenti

La generica retta per il fuoco $F=\left(0,\dfrac{1}{2}\right)$ di coefficiente angolare $m$ ha equazione

$$y=mx+\frac{1}{2}.$$

Intersecandola con la parabola:

$$\frac{1}{2}x^{2}=mx+\frac{1}{2}\ \Rightarrow\ x^{2}-2mx-1=0,\qquad \frac{\Delta}{4}=m^{2}+1>0\ \text{per ogni } m.$$

Dunque $x=m\pm\sqrt{m^{2}+1}$, e i punti di intersezione hanno ascisse

$$x_{A}=m-\sqrt{m^{2}+1},\qquad x_{B}=m+\sqrt{m^{2}+1}.$$

Poiché $y'=x$, il coefficiente angolare della tangente nel punto di ascissa $x_{0}$ è proprio $x_{0}$; la tangente alla parabola nel suo punto $\left(x_{0},\tfrac{1}{2}x_{0}^{2}\right)$ ha equazione (formula di sdoppiamento)

$$y=x_{0}\,x-\frac{1}{2}x_{0}^{2}.$$

**Perpendicolarità.** I coefficienti angolari delle due tangenti sono $m_{1}=x_{A}$ e $m_{2}=x_{B}$, e

$$m_{1}\cdot m_{2}=\left(m-\sqrt{m^{2}+1}\right)\left(m+\sqrt{m^{2}+1}\right)=m^{2}-(m^{2}+1)=-1,$$

quindi le tangenti sono tra loro perpendicolari.

**Intersezione.** Uguagliando le due tangenti $x_{A}x-\tfrac12 x_A^2=x_{B}x-\tfrac12 x_B^2$ si ricava

$$x(x_{A}-x_{B})=\frac{1}{2}(x_{A}-x_{B})(x_{A}+x_{B})\ \Rightarrow\ x=\frac{x_{A}+x_{B}}{2}=\frac{2m}{2}=m.$$

Sostituendo nell'equazione della tangente in $A$:

$$y=m\,x_{A}-\frac{1}{2}x_{A}^{2}=-\frac{1}{2}.$$

Il punto di intersezione delle tangenti è quindi

$$P=\left(m,\,-\frac{1}{2}\right).$$

## c) P appartiene alla direttrice

La direttrice della parabola $y=\dfrac{1}{2}x^{2}$ è la retta $y=-\dfrac{1}{2}$. Poiché l'ordinata di $P$ vale $-\dfrac{1}{2}$ per ogni valore di $m$, il punto $P$ appartiene alla direttrice per ogni $m$. Il luogo descritto da $P$ al variare di $m$ è dunque proprio la direttrice $y=-\dfrac{1}{2}$.

Questo conferma la nota proprietà: le tangenti a una parabola condotte da un punto della direttrice sono perpendicolari e la corda che unisce i punti di tangenza passa per il fuoco.

## d) Circonferenza per A', B', P' con m = 1/2

Per $m=\dfrac{1}{2}$ si ha $\sqrt{m^{2}+1}=\sqrt{\dfrac{5}{4}}=\dfrac{\sqrt{5}}{2}$, quindi

$$x_{A'}=\frac{1-\sqrt{5}}{2},\qquad x_{B'}=\frac{1+\sqrt{5}}{2},$$

e, poiché $y=\dfrac{1}{2}x^{2}$,

$$A'=\left(\frac{1-\sqrt{5}}{2},\ \frac{3-\sqrt{5}}{4}\right),\quad B'=\left(\frac{1+\sqrt{5}}{2},\ \frac{3+\sqrt{5}}{4}\right),\quad P'=\left(\frac{1}{2},\,-\frac{1}{2}\right).$$

Poiché l'angolo in $P'$ è retto (le tangenti sono perpendicolari), il segmento $A'B'$ è un diametro della circonferenza cercata, il cui centro $C$ è il punto medio di $A'B'$:

$$x_{C}=\frac{x_{A'}+x_{B'}}{2}=\frac{1}{2},\qquad y_{C}=\frac{y_{A'}+y_{B'}}{2}=\frac{3}{4}\ \Rightarrow\ C=\left(\frac{1}{2},\,\frac{3}{4}\right).$$

Il raggio si calcola comodamente come distanza $\overline{CP'}$:

$$R=\overline{CP'}=\sqrt{\left(\frac{1}{2}-\frac{1}{2}\right)^{2}+\left(\frac{3}{4}+\frac{1}{2}\right)^{2}}=\sqrt{\left(\frac{5}{4}\right)^{2}}=\frac{5}{4}.$$

La circonferenza ha quindi equazione

$$\left(x-\frac{1}{2}\right)^{2}+\left(y-\frac{3}{4}\right)^{2}=\frac{25}{16},$$

ossia, sviluppando,

$$x^{2}+y^{2}-x-\frac{3}{2}y-\frac{3}{4}=0.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="256.045" height="222.615" viewBox="-72 -72 192.034 166.961"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 39.008h178.853"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M104.903 36.608c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-3.783" y="39.008" stroke="none" font-family="cmmi10" font-size="10" transform="translate(114.499 2.153)">x</text><path fill="none" d="M-3.783 94.491V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-6.183-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.783" y="39.008" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -103.64)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-67.802-9.006 1.917 2.833 1.918 2.747 1.917 2.66 1.917 2.574 1.917 2.489 1.918 2.402 1.917 2.316 1.917 2.23 1.917 2.144 1.917 2.057 1.918 1.972 1.917 1.885 1.917 1.8 1.917 1.713 1.918 1.627 1.917 1.54 1.917 1.455 1.917 1.37 1.917 1.281 1.918 1.197 1.917 1.11 1.917 1.024 1.917.938 1.918.852 1.917.766 1.917.68 1.917.593 1.917.507 1.918.422 1.917.335 1.917.249 1.917.163 1.918.076 1.917-.009 1.917-.095 1.917-.182 1.917-.268 1.918-.353 1.917-.44 1.917-.527 1.917-.612 1.918-.698 1.917-.785 1.917-.87 1.917-.957 1.918-1.043 1.917-1.129 1.917-1.215 1.917-1.301 1.917-1.387 1.918-1.474 1.917-1.56 1.917-1.646 1.917-1.731 1.918-1.818 1.917-1.905 1.917-1.99 1.917-2.076 1.917-2.163 1.918-2.248 1.917-2.335 1.917-2.42 1.917-2.508 1.918-2.593 1.917-2.68 1.917-2.764 1.917-2.852 1.917-2.938 1.918-3.024 1.917-3.11L68.32-21.9l1.917-3.283 1.918-3.368 1.917-3.454 1.917-3.54 1.917-3.627 1.918-3.713 1.917-3.799 1.917-3.885"/><path fill="none" stroke="red" d="M70.906 6.999c0-29.464-23.886-53.35-53.35-53.35S-35.793-22.464-35.793 7s23.885 53.349 53.35 53.349c29.463 0 53.348-23.885 53.348-53.35Zm-53.35 0"/><path fill="none" d="m-30.159 30.857 95.43-47.716M17.556 60.348l-47.715-29.491M17.556 60.348 65.271-16.86"/><path stroke="none" d="M-28.359 30.857a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none"><text x="-3.783" y="39.008" font-family="cmmi10" font-size="10" transform="translate(-40.214 -4.393)">A</text><text x="3.717" y="35.379" font-family="cmsy7" font-size="7" transform="translate(-40.214 -4.393)">0</text></g><path stroke="none" d="M67.071-16.86a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none"><text x="-3.783" y="39.008" font-family="cmmi10" font-size="10" transform="translate(72.588 -52.108)">B</text><text x="4.304" y="35.379" font-family="cmsy7" font-size="7" transform="translate(72.588 -52.108)">0</text></g><path stroke="none" d="M19.356 60.348a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none"><text x="-3.783" y="39.008" font-family="cmmi10" font-size="10" transform="translate(16.032 32.39)">P</text><text x="4.026" y="35.379" font-family="cmsy7" font-size="7" transform="translate(16.032 32.39)">0</text></g><path stroke="none" d="M19.356 6.999a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-3.783" y="39.008" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.873 -35.542)">C</text><path stroke="none" d="M-1.983 39.008a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-3.783" y="39.008" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.589 10.366)">V</text></g></svg>
</figure>

## e) Aree delle regioni in cui la parabola divide il cerchio

La corda $A'B'$ è un diametro, quindi divide il cerchio in due semicerchi ciascuno di area

$$\frac{\pi R^{2}}{2}=\frac{\pi}{2}\left(\frac{5}{4}\right)^{2}=\frac{25}{32}\pi.$$

L'arco di parabola $A'VB'$ stacca da uno di questi semicerchi un **segmento parabolico**, la cui area si somma o si sottrae. L'area di un segmento parabolico vale $\dfrac{2}{3}$ dell'area del rettangolo circoscritto:

$$S=\frac{2}{3}\,\overline{A'B'}\cdot h,$$

dove $\overline{A'B'}=2R=\dfrac{5}{2}$ e $h$ è la distanza dalla corda $A'B'$ della tangente a essa parallela.

La tangente parallela alla corda ha coefficiente angolare $\dfrac{1}{2}$; essendo $y'=x$, il punto di tangenza ha $x_{T}=\dfrac{1}{2}$, quindi

$$T=\left(\frac{1}{2},\ \frac{1}{2}\cdot\frac{1}{4}\right)=\left(\frac{1}{2},\,\frac{1}{8}\right).$$

La retta $A'B'$ ha equazione $y=\dfrac{1}{2}x+\dfrac{1}{2}$, cioè $x-2y+1=0$; la sua distanza da $T$ è

$$h=\frac{\left|x_{T}-2y_{T}+1\right|}{\sqrt{1+4}}=\frac{\left|\frac{1}{2}-\frac{1}{4}+1\right|}{\sqrt{5}}=\frac{5/4}{\sqrt{5}}=\frac{\sqrt{5}}{4}.$$

Pertanto l'area del segmento parabolico è

$$S=\frac{2}{3}\cdot\frac{5}{2}\cdot\frac{\sqrt{5}}{4}=\frac{5\sqrt{5}}{12}.$$

Le due regioni richieste hanno quindi aree

$$S_{1}=\frac{25}{32}\pi+\frac{5\sqrt{5}}{12},\qquad S_{2}=\frac{25}{32}\pi-\frac{5\sqrt{5}}{12}.$$

Come verifica, $S_{1}+S_{2}=\dfrac{25}{16}\pi=\pi R^{2}$, cioè l'intera area del cerchio.

*Fonte:* [📄 PDF p.13](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
