---
title: 2018 Liceo Scientifico — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2018_liceo_scientifico_2018_problema1_6_1
of_item: prob_2018_liceo_scientifico_2018_problema1_6_1
prova_id: prova_2018_liceo_scientifico_2018_problema1_6
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2018
---

**Problema:** [[Problemi/prob_2018_liceo_scientifico_2018_problema1_6_1|2018 Liceo Scientifico — Problema 1 — Problema 1]] · **Prova:** [[Prove/2018_liceo_scientifico_2018_problema1_6|2018 Liceo Scientifico — Problema 1]]

Liceo Scientifico 2018 - Problema $1$

LICEO SCIENTIFICO 2018 - PROBLEMA $1$

Devi programmare il funzionamento di una macchina che viene adoperata nella
produzione industriale di mattonelle per pavimenti. Le mattonelle sono di forma quadrata
di lato $1$ (in un’opportuna unità di misura) e le fasi di lavoro sono le seguenti:

 si sceglie una funzione definita e continua nell’intervallo $[0,1],$ che soddisfi le
condizioni:

a) $f(0)=1; b) f(1)=0; c) 0<f(x)<1$ per $0<x<1$

 La macchina traccia il grafico $\Gamma$ della funzione $y=f(x)$ e i grafici simmetrici di $\Gamma$
rispetto all’asse $y,$ all’asse $x$ e all’origine O, ottenendo in questo modo una curva
chiusa $\Lambda$ , passante per i punti $(1,0), (0,1), (-1,0), (0,-1),$ simmetrica rispetto agli
assi cartesiani e all’origine, contenuta nel quadrato $Q$ di vertici $(1,1), (-1,1), (-1,-1),$
$$ (1,-1). $$

 La macchina costruisce la mattonella colorando di grigio l’interno della curva
chiusa e lasciando bianca la parte restante del quadrato $Q;$ vengono quindi
mostrate sul display alcune mattonelle affiancate, per dare un’idea dell’aspetto del
pavimento.

Il manuale d’uso riporta un esempio del processo realizzativo di una mattonella
semplice:

N.B. Mentre nel testo il lato della mattonella è $1$ nel grafico è $2!$ Assumiamo $lato=2.$

Liceo Scientifico 2018 - Problema $1$

La pavimentazione risultante è riportata di seguito:

Con riferimento all’esempio, determina l’espressione della funzione $y=f(x)$ e l’equazione
della curva $\Lambda$ , così da poter effettuare una prova e verificare il funzionamento della
macchina.

Risulta: $y=$ f(x) $= -x+ 1$ con $0 \le x\le 1$

Con $y= -|x| + 1$ abbiamo i lati della mattonella del primo e del secondo quadrante.

Per avere tutti e quattro i lati:

$\Lambda : y = \pm (-|x| + 1)$ con $0 \le x\le 1;$ equivalente a: $|y| = -|x| + 1$

$Ti$ viene richiesto di costruire una mattonella con un disegno più elaborato che, oltre a
rispettare le condizioni a), $b)$ e $c)$ descritte in precedenza, abbia $f'(0) = 0$ e l’area della
parte colorata pari al $55%$ dell’area dell’intera mattonella. A tale scopo, prendi in
considerazione funzioni polinomiali di secondo grado e di terzo grado.

Dopo aver verificato che non è possibile realizzare quanto richiesto adoperando una
funzione polinomiale di secondo grado, determina i coefficienti a, $b, c, d \in R$ della
funzione f(x) polinomiale di terzo grado che soddisfa le condizioni poste. Rappresenta
infine in un piano cartesiano la mattonella risultante.

Se f(x) è funzione polinomiale di secondo grado abbiamo: $y=$ f(x) $= ax2 + bx+ c$
Imponendo le condizioni a e $b$ abbiamo:
$f(0) = 1 , 1 = c$

Liceo Scientifico 2018 - Problema $1$

$f(1) = 0,$
$0 = a+ b+ c= a+ b+ 1: b= -a-1$

Risulta f'(x) $= 2ax+ b$ e da $f'(0) = 0$ si ha $b= 0,$ quindi $a= -1$

Si ha pertanto: $y=$ f(x) $= -x^{2} + 1$ (parabola con vertice $(0;1)$ e passante per $(1; 0)$ e
$$ (-1; 0): $$

Affinché l’area della parte colorata sia il $55$ % dell’area dell’intera mattonella deve essere:

$\int (-x^{2} + 1)$
$$ 1 0 $$
$dx= 0.55$ . Ma risulta:

$\int (-x^{2} + 1)$
$$ 1 0 $$
$dx= [-1$
$3 x^{3} +$ x]
$$ 0 1 $$
$= -1$
$$ 3 + 1 = 2 $$
$3 \ne 0.55$

Quindi non è possibile realizzare quanto richiesto adoperando una funzione polinomiale
di secondo grado.

Se f(x) è funzione polinomiale di terzo grado abbiamo: $y=$ f(x) $= ax3 + bx2 + cx+ d$

Imponendo le condizioni a e $b$ abbiamo:

$f(0) = 1 , 1 = d$

$f(1) = 0,$
$0 = a+ b+ c+ d= a+ b+ c+ 1$

Risulta f'(x) $= 3ax2 + 2bx+ c$ e da $f'(0) = 0$ si ha $c= 0,$ quindi $b= -1 -a$

Pertanto: f(x) $= ax3 -(a+ 1)x^{2} + 1$

Affinché l’area della parte colorata sia il $55$ % dell’area dell’intera mattonella deve essere:

$\int [ax3 -(a+ 1)x^{2} + 1]$
$$ 1 0 $$
$dx= 0.55$ . Quindi:
$4 ax4 -$
$3 (a+ 1)x^{3} +$ x]
$$ 0 1 = 1 $$
$4 a-$
$3 (a+ 1) + 1 = -$
$12 a+$
$3 = 0.55, a=$
$$ 7 5 $$

Liceo Scientifico 2018 - Problema $1$

La cubica ha quindi equazione:

$y=$ f(x) $= 7$
$5 x^{3} -12$
$5 x^{2} + 1$

Per studiare la cubica basta osservare che i limiti a + o - infinito sono + o - infinito e
studiare la derivata prima e seconda:

f'(x) $= 21$
$5 x^{2} -24$
$5 x\ge 0$ per $7x^{2} -8x\ge 0: x\le 0$ oppure $x\ge 8/7$
Quindi $x= 0$ punto di massimo relativo e $x= 8$
$7$ punto di minimo relativo.

f''(x) $= 42$
$5 x-24$
$5 \ge 0$ per $7x-4 \ge 0,$
$x\ge 4$
$7 ; x= 4$
$7$ punto di flesso

Le intersezioni con l’asse $x$ (non necessarie $ai$ fini del problema) si possono ottenere
abbassando di grado mediante la regola di Ruffini l’equazione

$5 x^{3} -12$
$5 x^{2} + 1 = 0$ che ha radice $x= 1$

Rappresentiamo la mattonella risultante in questo caso:

Liceo Scientifico 2018 - Problema $1$

Vengono proposti a un cliente due tipi diversi di disegno, derivanti rispettivamente dalle
funzioni an(x) $= 1 -xn$ e bn(x) $= (1 -x)n$ , considerate per $x\in [0; 1]$ con $n$ intero
positivo.

Verifica che al variare di $n$ tutte queste funzioni rispettano le condizioni a), $b)$ e $c).$ Dette
$An$ e $Bn$ le aree delle parti colorate delle mattonelle ottenute a partire da tali funzioni
$an$ e $bn$ , calcola
$$ lim $$
$n\to +\infty$ A(n) e lim
$n\to +\infty$ B(n)

e ed interpreta i risultati in termini geometrici.

a) $f(0)=1; b) f(1)=0; c) 0<f(x)<1$ per $0<x<1$

an(x) $= 1 -xn$

$an(0) = 1 , an(1) = 0, 0 < 1 -xn< 1: {1 -xn> 0$ vero per $0 < x< 1$
$1 -xn< 1,$
vero

bn(x) $= (1 -x)n$

$bn(0) = 1,$
$bn(1) = 0, 0 < (1 -x)n< 1 : {(1 -x)n> 0$ : vero perchè $1 -x> 0$
$(1 -x)n< 1:$ vero perchè $1 -x< 1$

Calcoliamo i limiti richiesti:
$$ lim $$
$n\to +\infty$ A(n) $= 4$ lim
$n\to +\infty \int (1 -xn)dx$
$$ 1 0 $$
$= 4$ lim
$n\to +\infty [x-xn+1$
$n+ 1]$
$$ 0 1 $$
$= 4$ lim
$n\to +\infty (1 -$
$n+ 1) = 4$

Significato geometrico: la zona colorata per $n$ che tende a + infinito tende a riempire tutta
la mattonella.

$$ lim $$
$n\to +\infty$ B(n) $= 4$ lim
$n\to +\infty \int (1 -x)ndx$
$$ 1 0 $$
$= 4$ lim
$n\to +\infty [-$
$n+ 1 (1 -x)n+1]$
$$ 0 1 $$
$= 4$ lim
$n\to +\infty$ (
$n+ 1) = 0$

Significato geometrico: la zona colorata per $n$ che tende a + infinito tende a ridursi a zero.

Il cliente decide di ordinare $5.000$ mattonelle con il disegno derivato da $a^{2}(x)$ e $5.000$ con
quello derivato da $b^{2}(x)$ . La verniciatura viene effettuata da un braccio meccanico che,
dopo aver depositato il colore, torna alla posizione iniziale sorvolando la mattonella lungo
la diagonale. A causa di un malfunzionamento, durante la produzione delle $10.000$
mattonelle si verifica con una probabilità del $20%$ che il braccio meccanico lasci cadere
una goccia di colore in un punto a caso lungo la diagonale, macchiando così la
mattonella appena prodotta.

Liceo Scientifico 2018 - Problema $1$

$a^{2}(x) = 1-x^{2}$

La probabilità che cada una goccia nella zona da non colorare è data da:

p(che cada sulla diagonale) ∙p(che cada su $AC$ o $BD) = 0.20$ ∙p

Calcoliamo la probabilità $p:$

$p= AC+ BD$
$$ AB $$
$= 2BD$
$$ 2\sqrt{2 $$
$= BD$
$$ \sqrt{2 $$
$= \sqrt{2} -OD$
$$ \sqrt{2 $$

Per trovare $D$ cerchiamo l’intersezione fra $a^{2}(x) = 1 -x^{2}$ e $y= x:$
$1 -x^{2} = x,$
$x^{2} + x-1 = 0,$
$xD= -1 + \sqrt{5}$
, $OD= xD\sqrt{2} = -1 + \sqrt{5}$
$∙\sqrt{2}$
Quindi:
$p= \sqrt{2}-OD$
$$ \sqrt{2} = $$
$\sqrt{2}--1+\sqrt{5}$
$∙\sqrt{2}$
$$ \sqrt{2 $$
$= 1 -$
$-1+\sqrt{5}$
$3-\sqrt{5}$
$= p$

Perciò la probabilità che sia danneggiata una mattonella di questo tipo è:

$0.20 ∙p= 0.20 ∙3 -\sqrt{5}$
$= 3 -\sqrt{5}$
$$ 10 $$
$\cong 0.076 = 7.6$ %

$b^{2}(x) = (1-x)2$

Liceo Scientifico 2018 - Problema $1$

Calcoliamo l’ascissa di $D:$

$(1 -x)2 = x, x^{2} -3x+ 1 = 0, xD= 3 -\sqrt{5}$

In questo caso si ha quindi:

$p= \sqrt{2} -OD$
$$ \sqrt{2} = $$
$\sqrt{2} -3 -\sqrt{5}$
$∙\sqrt{2}$
$$ \sqrt{2 $$
$= 1 -3 -\sqrt{5}$
$= -1 + \sqrt{5}$
$= p$

Perciò la probabilità che sia danneggiata una mattonella di questo tipo è:

$0.20 ∙p= 0.20 ∙-1 + \sqrt{5}$
$= -1 + \sqrt{5}$
$$ 10 $$
$\cong 0.124 = 12.4$ %

Fornisci una stima motivata del numero di mattonelle che, avendo una macchia nella
parte non colorata, risulteranno danneggiate al termine del ciclo di produzione.

Delle 5000 mattonelle del primo tipo ne risultano danneggiate circa il $7.6$ %, quindi circa:

$$ 7.6 $$
$100$ (5000) $= 380$

Delle 5000 mattonelle del secondo tipo ne risultano danneggiate circa il $12.4$ %, quindi
circa:

$$ 12.4 $$
$100$ (5000) $= 620$

Alla fine del ciclo di produzione delle $10000$ mattonelle ne risultano quindi danneggiate
circa 1000.

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.6](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
