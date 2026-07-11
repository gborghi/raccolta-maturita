

**Problema:** [[Problemi/prob_2009_scuole_italiane_allestero_europa_2009_sessione_ord_problema1_52_1|2009 Estero Europa — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_scuole_italiane_allestero_europa_2009_sessione_ord_problema1_52|2009 Estero Europa — Problema 1]]

Nel piano cartesiano $Oxy$ è data la circonferenza $C$ di equazione $x^{2}+y^{2}=25$, con centro nell'origine e raggio $R=5$.

## a)

Cerchiamo i punti di $C$ di ordinata $y=3$: sostituendo si ottiene $x^{2}=25-9=16$, cioè $x=\pm 4$. I punti richiesti sono quindi $T(4;3)$ e $S(-4;3)$.

Per scrivere la tangente a $C$ in un suo punto conviene usare la regola dello **sdoppiamento**: la tangente in $(x_0;y_0)$ ha equazione $x_0x+y_0y=25$. Dunque:

$$\text{tangente in } T:\quad 4x+3y=25\,,\qquad \text{tangente in } S:\quad -4x+3y=25\,.$$

## b)

Sia $MN$ una corda perpendicolare al diametro $AB$, con $A(0;-5)$ e $B(0;5)$. Vogliamo la posizione di $M$ e $N$ su $C$ che rende massima l'area del triangolo $AMN$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="275.773" height="276.486" viewBox="-72 -72 206.83 207.365"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M103.2 37.87c0-43.214-35.031-78.245-78.246-78.245S-53.29-5.345-53.29 37.87s35.031 78.246 78.245 78.246S103.2 81.085 103.2 37.87Zm-78.246 0"/><path fill="none" d="M-72.07 37.87h193.649"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M119.699 35.47c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="24.954" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(100.557 2.153)">x</text><path fill="none" d="M24.954 134.895v-193.65"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M22.554-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="24.954" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -102.502)">y</text><path fill="none" d="M24.954 116.121V-40.38"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-42.811-1.255h135.53"/><path fill="none" stroke="red" stroke-width=".8" d="M24.954 116.121-42.81-1.255h135.53Z"/><path stroke="none" d="M26.329 116.121a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0m-1.375 0"/><text x="24.954" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 88.617)">A</text><path stroke="none" d="M26.329-40.38a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0m-1.375 0"/><text x="24.954" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -81.784)">B</text><path stroke="none" d="M-41.436-1.255a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0m-1.375 0"/><text x="24.954" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-82.09 -42.658)">M</text><path stroke="none" d="M94.095-1.255a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0m-1.375 0"/><text x="24.954" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.298 -42.658)">N</text><path stroke="none" d="M26.329 37.87a1.375 1.375 0 1 0-2.75 0 1.375 1.375 0 0 0 2.75 0m-1.375 0"/><text x="24.954" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text></g></svg>
</figure>

**Osservazione geometrica.** Fra tutti i triangoli inscritti in una circonferenza, quello di area massima è equilatero. Poiché il vertice $A$ è fissato e $MN$ è perpendicolare al diametro per $A$, il triangolo $AMN$ è isoscele; la sua area è massima quando è equilatero. Allora $MN$ è il lato del triangolo equilatero inscritto in $C$, di lunghezza

$$MN=R\sqrt{3}=5\sqrt{3}\,.$$

L'altezza del triangolo equilatero inscritto vale $\tfrac{3}{2}R=\tfrac{15}{2}$; misurata a partire da $A(0;-5)$, essa porta all'ordinata dei punti $M$ ed $N$:

$$y_M=y_N=-5+\frac{15}{2}=\frac{5}{2}\,.$$

Le ascisse si ricavano da $x^{2}+y^{2}=25$:

$$x^{2}=25-\frac{25}{4}=\frac{75}{4}\,,\qquad x=\pm\frac{\sqrt{75}}{2}=\pm\frac{5\sqrt{3}}{2}\,.$$

Quindi

$$M=\left(-\frac{5\sqrt{3}}{2};\,\frac{5}{2}\right)\,,\qquad N=\left(\frac{5\sqrt{3}}{2};\,\frac{5}{2}\right)\,.$$

**Dimostrazione diretta.** Indichiamo con $y$ l'altezza $AH$ del triangolo $AMN$, dove $H$ è il piede sulla corda $MN$ (con $0\le y\le 10$, essendo $AB=10$ il diametro). Nel triangolo $ABM$, rettangolo in $M$ perché inscritto in una semicirconferenza, il secondo teorema di Euclide dà

$$MH^{2}=AH\cdot HB=y(10-y)\,,\qquad MH=\sqrt{y(10-y)}\,.$$

Poiché $MN=2\,MH$, l'area vale

$$\text{Area}(AMN)=\frac{1}{2}\,MN\cdot AH=MH\cdot AH=y\sqrt{y(10-y)}\,.$$

L'area è massima quando lo è il suo quadrato

$$z=y^{2}\cdot y(10-y)=y^{3}(10-y)\,,\qquad 0\le y\le 10\,.$$

**Metodo analitico.** Derivando,

$$z'=3y^{2}(10-y)-y^{3}=30y^{2}-4y^{3}=2y^{2}(15-2y)\,.$$

Si ha $z'\ge 0$ se $15-2y\ge 0$, cioè $y\le\dfrac{15}{2}$. Dunque $z$ cresce fino a $y=\dfrac{15}{2}$ e decresce dopo: il massimo è in $y=\dfrac{15}{2}$, da cui l'ordinata di $M$ ed $N$ vale $-5+\dfrac{15}{2}=\dfrac{5}{2}$, in accordo con quanto trovato sopra.

**Metodo elementare.** Nel prodotto $z=y^{3}(10-y)$ la somma delle basi $y+(10-y)=10$ è costante; un tale prodotto è massimo quando le basi sono proporzionali agli esponenti:

$$\frac{y}{3}=\frac{10-y}{1}\quad\Rightarrow\quad y=30-3y\quad\Rightarrow\quad y=\frac{15}{2}\,,$$

come già ottenuto.

## c)

Calcoliamo la lunghezza dell'arco tra $P(5;0)$ e $Q(4;3)$ di $C$. Sia $\alpha$ l'angolo al centro $\widehat{POQ}$ (in radianti). Detto $D(4;0)$ il piede della perpendicolare da $Q$ all'asse $x$, nel triangolo rettangolo $OQD$ si ha $QD=R\sin\alpha$, cioè

$$\sin\alpha=\frac{QD}{R}=\frac{3}{5}\,,\qquad \alpha=\arcsin\frac{3}{5}\cong 0{,}644\ \text{rad}\,.$$

Per la definizione di radiante, la lunghezza $l$ dell'arco $PQ$ è

$$l=\alpha\,R=5\arcsin\frac{3}{5}\cong 5\cdot 0{,}644\cong 3{,}2\,.$$

La lunghezza dell'arco $PQ$ è dunque circa $3{,}2$.

## d)

Il settore circolare $POQ$ è la base di un solido $W$ le cui sezioni con piani perpendicolari all'asse $x$ sono quadrati. Detta $\ell(x)$ la lunghezza del lato del quadrato all'ascissa $x$, la sezione ha area $\ell^{2}(x)$; il lato coincide con l'altezza del settore in quel punto.

Il bordo superiore del settore è dato dalla retta $OQ$ per $0\le x\le 4$ e dall'arco $PQ$ per $4\le x\le 5$:

$$g(x)=\frac{3}{4}x\quad(0\le x\le 4)\,,\qquad f(x)=\sqrt{25-x^{2}}\quad(4\le x\le 5)\,.$$

Il volume è quindi

$$V(W)=\int_{0}^{4} g^{2}(x)\,dx+\int_{4}^{5} f^{2}(x)\,dx=\int_{0}^{4}\frac{9}{16}x^{2}\,dx+\int_{4}^{5}(25-x^{2})\,dx\,.$$

Il primo integrale:

$$\int_{0}^{4}\frac{9}{16}x^{2}\,dx=\frac{9}{16}\left[\frac{x^{3}}{3}\right]_{0}^{4}=\frac{9}{16}\cdot\frac{64}{3}=12\,.$$

Il secondo integrale:

$$\int_{4}^{5}(25-x^{2})\,dx=\left[25x-\frac{x^{3}}{3}\right]_{4}^{5}=\left(125-\frac{125}{3}\right)-\left(100-\frac{64}{3}\right)=25-\frac{61}{3}=\frac{14}{3}\,.$$

Pertanto

$$V(W)=12+\frac{14}{3}=\frac{50}{3}\,.$$

Il volume del solido $W$ è $\dfrac{50}{3}$.

*Fonte:* [📄 PDF p.52](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
