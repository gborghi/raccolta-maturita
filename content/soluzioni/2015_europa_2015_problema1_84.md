---
tipo: soluzione
prova_stem: 2015_europa_2015_problema1_84
pdf: Prova_Maturita_2015.pdf
source: text
title: 2015 Europa — Problema 1 — Svolgimento
---


Europa 2015 - Problema $1$

PROBLEMA $1$

Sei il responsabile del controllo della navigazione della nave indicata in Figura $1$ con il
punto $P.$ Nel sistema di riferimento cartesiano Oxy le posizioni della nave $P,$ misurate
negli istanti $t =0$ e $t =10$ (il tempo $t$ è misurato in minuti, le coordinate $x$ e $y$ sono espresse
in miglia nautiche), sono date dai punti $P^{1}(14, 13)$ e $P^{2}(12, 11).$ Negli stessi istanti la
posizione di una seconda nave $Q$ è data dai punti $Q^{1}(12, -2)$ e $Q^{2}(11, -1).$ Entrambe le
navi si muovono in linea retta e con velocità costante, come rappresentato in Figura $1$
(non in scala).

Figura $1$

L’area indicata con ZMP è una “Zona Marittima Pericolosa”. Il raggio luminoso di un faro
posto nel punto $F$ di coordinate $(0, 1)$ spazza un quarto di un cerchio di raggio $10$ miglia
(vedi Figura $1).$

Europa 2015 - Problema $1$

Calcola dopo quanto tempo, rispetto all’istante in cui la nave $P$ avvista per la prima volta il
faro $F,$ essa raggiunge la minima distanza dal faro, e la misura di tale distanza.

L’equazione della traiettoria di $P$ è data dalla retta passante per i punti $P^{1}(14, 13)$ e
$P^{2}(12, 11);$ tale retta ha equazione: $y= x-1.$

L’equazione della circonferenza di centro $F=(0;1)$ e raggio $10$ è:

$x^{2} + (y-1)^{2} = 100 \implies x^{2} + y^{2} -2y-99 = 0$

La posizione della nave $P$ quando avvista per la prima volta il faro $F$ si ottiene risolvendo
il seguente sistema:

$y= x-1$
$x^{2} + y^{2} -2y-99 = 0$
$0 \le x\le 10 ; 1 \le y\le 12$
$\implies x^{2} + (x-1)^{2} -2(x-1) -99 = 0$

$2x^{2} -4x-96 = 0 \implies x^{2} -2x-48 = 0 \implies x= -6$ (non accettabile), $x= 8.$

Con $x= 8$ in $y= x-1$ si ha $y= 7$ ; quindi la posizione della nave $P$ quando
avvista per la prima volta il faro $F$ è $P^{3} = (8; 7).$ Determiniamo le equazioni del moto di
$P,$ che per $t=0$ si trova in $P^{1}(14, 13)$ e per $t=10$ si trova in $P^{2}(12, 11).$

${x-x^{0} = vx(t-t^{0})$
$y-y^{0} = vy(t-t^{0}) \implies {12 -14 = vx(10 -0)$
$11 -13 = vy(10 -0) \implies$ {
$vx= -2$
$10 = -0.2$
$vy= -2$
$10 = -0.2$

Quindi le equazioni del moto di $P$ sono le seguenti:

${x= 14 -0.2t$
$y= 13 -0.2t$

Determiniamo l’istante in cui la nave $P$ si trova quindi in $P^{3} = (8; 7):$

${8 = 14 -0.2t$
$7 = 13 -0.2t \implies t= 6$
$0.2 = 30$ (minuti)

Quindi la nave $P$ avvista per la prima volta il faro $F$ dopo $30$ minuti.

La posizione di $P$ quando si trova alla minima distanza dal faro si ottiene intersecando la
retta che rappresenta la traiettoria di $P$ con la retta per $F$ perpendicolare alla traiettoria;
tale perpendicolare è data dalla retta per $F=(0;1)$ con coefficiente angolare $-1,$ quindi ha
equazione: $y-1 = -x , y= -x+ 1$ . Determiniamo quindi la posizione richiesta di $P:$

Europa 2015 - Problema $1$

{ $y= x-1$
$y= -x+ 1 \implies {x= 1$
$y= 0 P^{4} = (1; 0):$ minima distanza dal faro.

La posizione $P^{4} = (1; 0)$ si ha nel tempo $t$ ottenuto da $x= 14 -0.2t$ con $x=1:$

$1 = 14 -0,2t \implies t=$
$$ 13 $$
$0.2 = 65$ (minuti). Quindi:

Da quando $P$ avvista per la prima volta il faro $F (t=30),$ raggiunge la minima distanza da $F$
dopo un tempo $t$ pari a $(65 -30)minuti= 35$ minuti .

La minima distanza di $P$ dal faro è data dalla distanza tra $P^{4} = (1; 0)$ ed $F= (0; 1):$

(minima distanza di $P$ da $F) = P4F= \sqrt{2}$ miglia $nautiche\cong 1.41$ miglia nautiche

Determina la posizione della nave $P$ nell’istante in cui per la prima volta la sua distanza
dalla nave $Q$ è pari a $9$ miglia.

Determiniamo le equazioni del moto di $Q,$ che per $t=0$ si trova in $Q^{1}(12, -2)$ e per $t=10$
si trova in $Q^{2}(11, -1).$
${x-x^{0} = vx(t-t^{0})$
$y-y^{0} = vy(t-t^{0}) \implies {11 -12 = vx(10 -0)$
$-1 + 2 = vy(10 -0) \implies$ {
$vx= -1$
$10 = -0.1$
$vy= + 1$
$$ 10 = 0.1 $$

Quindi le equazioni del moto di $Q$ sono le seguenti:

${x= 12 -0.1t$
$y= -2 + 0.1t$

Quindi le coordinate di $P$ e $Q$ in funzione del tempo $t$ sono le seguenti:
$P= (14 -0.2t; 13 -0.2t), Q= (12 -0.1t; -2 + 0.1t)$

Dobbiamo trovare il primo istante in cui $P$ dista da $Q 9$ miglia. Calcoliamo quindi la
distanza $PQ:$

$PQ= \sqrt [(14 -0.2t) -(12 -0.1t)]2 + [(13 -0.2t) -(-2 + 0.1t)]2 =$

$= \sqrt{2 -0.1t}2 + (15 -0.3t)2 = \sqrt{t}^{2}$
$10 -$
$47t$
$5 + 229 = 9$ da cui:

$$ t^{2 $$
$10 -$
$47t$
$5 + 229 = 81 \implies t= 20$ minuti, $t= 74$ minuti .

$P$ si trova per la prima volta a $9$ miglia da $Q$ dopo $20$ minuti.

Europa 2015 - Problema $1$

Determiniamo la posizione di $P$ in tale istante:

$P= (14 -0.2t; 13 -0.2t) = (10; 9)$

Determina l’istante $t$ nel quale la distanza tra le due navi è minima e calcola il valore di
tale distanza.

Abbiamo visto nel punto precedente che la distanza tra le due navi, in funzione del
tempo, è data da:

$d= \sqrt{t}^{2}$
$10 -$
$47t$
$5 + 229$ ; questa distanza è minima se lo è:

$z= t^{2}$
$10 -47t$
$5 + 229$ , con $t\ge 0$

Questa equazione rappresenta una parabola con la concavità rivolta verso l’alto; il
minimo si trova nel vertice (se appartiene al dominio della $t).$ Cerchiamo l’ascissa $t$ del
vertice:

$tV= -$
$2a=$
$$ 47 5 1 5 $$
$= 47$ : la distanza tra le due navi è quindi minima dopo $47$ minuti.
Calcoliamo la distanza minima:

$d= \sqrt{t}^{2}$
$10 -47t$
$5 + 229 = 2.85$ miglia

La minima distanza tra le due navi è quindi $2.85$ miglia.

Nel punto B(XB, $YB)$ si trova una boa che segnala l’inizio della ZMP. La delimitazione
della ZMP può essere descritta dai grafici delle funzioni $f$ e $g$ che si intersecano nel punto
$B$ e sono definite da:
f(x) $= -x^{3} + x + 4, x \varepsilon R, 0 \le x \le xB$

g(x) $= x + 1, x \varepsilon R, 0 \le x \le xB$

e dalla retta $x = 0.$

Europa 2015 - Problema $1$

Calcola l'area della ZMP.

Determiniamo le coordinate del punto $B,$ intersezione di $f$ e $g$ nel primo quadrante:

${y= -x^{3} + x+ 4$
$y= x+ 1$
$\implies -x^{3} + x+ 4 = x+ 1 \implies x^{3} = 3 \implies x= \sqrt{3}$
$\cong 1.442$

$x= \sqrt{3}$
$\cong 1.442$
$y= \sqrt{3}$
$+ 1 \cong 2.442$

L’area della ZMP si ottiene calcolando il seguente integrale:

Area(ZMP) $= \int$
$[(-x^{3} + x+ 4) -(x+ 1)] dx= \int$
$(-x^{3} + 3)dx$
$$ \sqrt{3} 3 0 $$
$= [-1$
$4 x^{4} + 3x]$
$$ 0 \sqrt{3} 3 = \sqrt{3} 3 0 $$

$= -1$
$$ 4 (\sqrt{3} 3 ) 4 + 3(\sqrt{3} 3 $$
) $= -1$
$$ 4 \sqrt{34} 3 + 3\sqrt{3} 3 $$
$= -3$
$$ 4 \sqrt{3} 3 + 3\sqrt{3} 3 = 9 4 \sqrt{3} 3 $$
$\cong 3.25 miglia2$

L’area della ZMP vale quindi
$$ 9 4 \sqrt{3} 3 $$
$miglia2 \cong 3.25 miglia2.$

Con la collaborazione di Angela Santamaria
