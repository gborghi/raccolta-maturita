---
tipo: soluzione
prova_stem: 2018_scientifico_comunicazione_opzione_sportiva_2018_problema2_41
pdf: Prova_Maturita_2018.pdf
source: text
title: 2018 Scientifico Comunicazione Sportiva — Problema 2 — Svolgimento
---


Scientifico Comunicazione Opzione
Sportiva 2018 - Problema $2$

SCIENTIFICO COMUNICAZIONE OPZIONE SPORTIVA 2018 - PROBLEMA $2$

Siano e rispettivamente $f: R\to Z$ e $g: R\to R$ le funzioni parte intera e
parte frazionaria (o mantissa) di un numero . Tali funzioni sono così definite:

f(x) $= max{m\in Z | m\le$ x} e g(x) $= x-f(x)$

Pertanto, $ad$ esempio, $f(\pi ) = 3, g(4.79) = 0.79$ .

A partire dalle definizioni delle funzioni $f$ e $g,$ mostra che per ogni $x\in R$ si ha
$0 \le$ g(x) $< 1$ .
Disegna i grafici delle funzioni $f$ e $g$ determinando esplicitamente i loro punti di
discontinuità e, eventualmente, i relativi salti.

Osserviamo che se $x$ è intero, $f(x)=x$ quindi $g(x)=0;$ se invece $x$ non è intero g(x) è un
numero decimale del tipo $0.a$ per esempio:
se $x= 0.3$ si ha g(x) $= 0.3,$ se $x= 1,4$ g(x) $= 0.4,$ se $x= -0.2,$ g(x) $= x-f(x) =$
$= -0.2 -f(-0.2) = -0.2 -(-1) = 0.8;$ se $x= -2.3$ g(x) $= -2.3 -f(-2.3) =$
$= -2.3 -(-3) = -2.3 + 3 = 0.7$
Quindi si ha sempre $0 \le$ g(x) $< 1$ .

f(x) $= max{m\in Z | m\le$ x} =

$-2, se-2 \le x< -1$
$-1, se-1 \le x< 0$
$0,$ se $0 \le x< 1$
$1,$ se $1 \le x< 2$
$2,$ se $2 \le x< 3$

Si tratta quindi di una “funzione a scala con il seguente grafico:

Scientifico Comunicazione Opzione
Sportiva 2018 - Problema $2$

La funzione f(x) presenta infiniti punti di discontinuità di prima specie (con salto $1)$ per
ogni $x$ intero.

g(x) $= x-f(x) = x-$

$-2, se-2 \le x< -1$
$-1, se-1 \le x< 0$
$0,$ se $0 \le x< 1$
$1,$ se $1 \le x< 2$
$2,$ se $2 \le x< 3$

$x+ 2, se-2 \le x< -1$
$x+ 1, se-1 \le x< 0$
$x,$ se $0 \le x< 1$
$x-1,$ se $1 \le x< 2$
$x-2,$ se $2 \le x< 3$

Anche la funzione g(x) presenta infiniti punti di discontinuità di prima specie (con salto $1)$
per ogni $x$ intero.

Dopo aver verificato che la funzione $g$ è periodica di periodo $1,$ calcola la media di $g$
nell’intervallo $[0,$ n] qualsiasi sia $n\in N, n> 0.$ Calcola inoltre la media di $g$ nell’intervallo
$[0, n+$
$2]$ , e determina il limite a cui tale media tende per $n\to \infty$ .

La periodicità della funzione $g$ con periodo $1$ si evince facilmente dal grafico, ottenuto da
$y= x$ con successive traslazioni (verso sinistra e verso destra) di $1,$ quindi :

$T= 1$ è il più piccolo numero reale positivo tale che: g(x) $= g(x+ 1)$ per ogni $x$

Ricordiamo che la media di una funzione $f,$ definita in un intervallo chiuso e limitato [a; b]
ed ivi integrabile e limitata, è uguale a :

$M=$
$\int$ f(x)dx
$$ b a $$
$b-a$

Detti $s$ ed $S$ rispettivamente l’estremo inferiore e l’estremo superiore di $f$ in [a; b], si
dimostra che: $s\le M\le S$ . Nel caso particolare in cui la funzione sia continua in [a; b], si
dimostra che (Teorema della media) esiste almeno un punto $c$ di tale intervallo tale che

f(c) $= M.$

Scientifico Comunicazione Opzione
Sportiva 2018 - Problema $2$

Per calcolare la media di $g$ osserviamo che $g$ è limitata ed integrabile in qualsiasi
intervallo chiuso e limitato del suo dominio $(R),$ poiché possiede al più delle discontinuità
di prima specie (si dice che è continua a tratti).

Osserviamo che l’area della regione di piano compresa fra la curva e l’asse $x$
nell’intervallo $[0; 1]$ è uguale a $1⁄2.$

Quindi:
$\int$ g(x)dx
$$ 1 0 = 1 2 $$

Per la periodicità della funzione si avrà quindi:

$\int$ g(x)dx
$$ n 0 = 1 $$
$2$ ∙n

Pertanto la media $M$ di $g$ in $[0;$ n] è data da:

$M=$
$\int$ g(x)dx
$$ n 0 $$
$n-0$
$2 n$
$n= 1$

Calcoliamo ora la media di $g$ nell’intervallo $[0, n+$
$$ 1 2]. $$

Osserviamo che l’area della regione di piano compresa fra la curva e l’asse $x$
nell’intervallo $[0; 3/2],$ quindi per $n=1,$ è uguale a
$$ 1 2 + 1 8 = 1 $$
$2 ∙1+$
$$ 1 8 = 5 8. $$
L’area della regione di piano compresa fra la curva e l’asse $x$ nell’intervallo $[0; 5/2],$ quindi
per $n=2,$ è uguale a
$2 ∙2+$
$$ 1 8 = 9 8. $$
In generale nell’intervallo $[0, n+$
$2]$ l’area è uguale a:
$2 ∙n+ 1$
$8 = 4n+ 1$
$(n= 1,2,3,$ ... ).

Quindi:

$$ \int $$
g(x)dx
$n+1$
$$ 2 0 $$
$= 4n+ 1$

Pertanto la media M’ di $g$ in $[0, n+$
$2]$ è dato da:

$M' =$
$$ \int $$
g(x)dx
$n+1$
$$ 2 0 $$
$n+ 1$
$2 -0$
$4n+ 1$
$n+ 1$
$= 4n+ 1$
$8n+ 4$

Scientifico Comunicazione Opzione
Sportiva 2018 - Problema $2$

Calcoliamo il limite a cui tende quest’ultima media per $n\to \infty$

$$ lim $$
$n\to \infty$
$4n+ 1$
$8n+ 4 =$ lim
$n\to \infty$
$4n$
$8n= 1$

Calcola il volume del solido ottenuto dalla rotazione di
$\pi$
$6$ radianti intorno all’asse $x$ della
regione di piano delimitata dai grafici di $f$ e $g$ nell’intervallo [
$$ 1 2 , 3 2]. $$

Ricordiamo che il volume del soldo di rotazione di un angolo $\alpha$ (in radianti) intorno
all’asse $x$ della regione di piano compresa fra i grafici di due funzioni $y=f(x)$ e $y=g(x),$ con
il grafico di $f$ al di sopra del grafico di $g,$ nell’intervallo [a; b] è dato da:

$V\alpha = ( \alpha$
$2\pi ) ∙\pi \int [f^{2}(x) -g^{2}(x)]$
$$ b a dx $$

Nel nostro caso il volume è:

$V=$ (
$\pi$
$2\pi ) ∙\pi [\int [x^{2} -02]$
$$ 1 1 2 $$
$dx+ \int [12 -(x-1)^{2}]$
$$ 3 2 1 $$
dx] =

$= \pi$
$12 [\int x^{2}$
$$ 1 1 2 $$
$dx+ \int [2x-x^{2}]$
$$ 3 2 1 $$
dx] $= \pi$
$$ 12 [[1 $$
$3 x^{3}]1$
$$ 2 1 $$
$+ [x^{2} -1$
$3 x^{3}]$
$$ 1 3 2 ] = $$

$= \pi$
$$ 12 [(1 $$
$3 -1$
$$ 24) + (9 $$
$4 -27$
$24 -1 + 1$
$3)] = \pi$
$$ 12 (3 $$
$4) = \pi$
$16 u^{3} \cong 0.196 u^{3} = V$

Scientifico Comunicazione Opzione
Sportiva 2018 - Problema $2$

Stabilisci per quali valori dei parametri reali a, $b, c, d$ la funzione $h: R\to R$ definita dalla
legge:
h(x) $= a+ b∙sen(cx+ d)$

verifica le seguenti condizioni

min $g=$ min $h$ , sup $g=$ max $h , 2h'' + 2h-1 = 0$

$(min=minimo, sup=estremo$ superiore, $max=massimo).$

Quante sono le funzioni siffatte?

Risulta: min $g= 0 =$ min $h$ , sup $g= 1 =$ max $h$

Osserviamo che non può essere $b=0$ né $c=0,$ altrimenti $h$ sarebbe costante e quindi non
può avere minimo $0$ e massimo $1.$

Siccome $-1 \le sen(cx+ d) \le 1,$ dovendo essere il mimino $0$ ed il massimo $1$ deve
essere:

{ $a+ b(1) = 1$
$a+ b(-1) = 0 , a=$
$2$ e $b=$
$2$ : h(x) =
$$ 1 2+ 1 $$
$2sen(cx+ d)$

Oppure:

{ $a+ b(1) = 0$
$a+ b(-1) = 1 , a= 1$
$2$ e $b= -1$
$2$ : h(x) $= 1$
$2-1$
$2sen(cx+ d)$

Osserviamo che non può essere $c=0,$ altrimenti la funzione sarebbe costante e che $d$ può
assumere qualsiasi valore.
Al variare di $c$ varia il periodo della funzione, al variare di $d$ il grafico viene traslato
orizzontalmente.

Imponiamo la terza condizione.

Primo caso: h(x) =
$$ 1 2+ 1 $$
$2sen(cx+ d)$

Si ha: $h' =$
$2 ccos(cx+ d)$ , h'' = -
$2 c2sen(cx+ d)$ quindi sostituendo nell’ultima
condizione:

$-c2sen(cx+ d) + 1 + sen(cx+ d) -1 = 0, (1 -c^{2}) sen(cx+ d) = 0$ (∗)

Essendo $h$ una funzione continua e derivabile su tutto $R,$ nel minimo e nel massimo la

Scientifico Comunicazione Opzione
Sportiva 2018 - Problema $2$

derivata prima si deve annullare, quindi:

$2 ccos(cx+ d) = 0$ da cui (essendo $c$ diverso da $0):$

$cos(cx+ d) = 0$ quindi $sen(cx+ d) = \pm 1$

Ma anche nel minimo e nel massimo deve valere la (*), e non potendo annullarsi
$sen(cx+ d)$ deve essere: $1 -c^{2} = 0,$ da cui $c= \pm 1.$

Le funzioni richieste sono in questo caso INFINITE ed hanno equazioni del tipo:

h(x) $= 1$
$$ 2 + 1 $$
$2 sen(\pm x+ d) (1)$

Il periodo di tutte queste funzioni è $2\pi$ .

Secondo caso: h(x) =
$2-$
$2sen(cx+ d)$

Si ha: $h' = -$
$2 ccos(cx+ d)$ , h'' =
$2 c2sen(cx+ d)$ quindi sostituendo nell’ultima
condizione:

$c2sen(cx+ d) + 1 -sen(cx+ d) -1 = 0, (c^{2} -1) sen(cx+ d) = 0$ (∗∗)

Essendo $h$ una funzione continua e derivabile su tutto $R,$ nel minimo e nel massimo la

derivata prima si deve annullare, quindi:

-
$2 ccos(cx+ d) = 0$ da cui (essendo $c$ diverso da $0):$

$cos(cx+ d) = 0$ quindi $sen(cx+ d) = \pm 1$

Ma anche nel minimo e nel massimo deve valere la (**), e non potendo annullarsi
$sen(cx+ d)$ deve essere: $c^{2} -1 = 0,$ da cui $c= \pm 1.$

Le funzioni richieste sono anche in questo caso INFINITE ed hanno equazioni del
tipo:

h(x) $= 1$
$2 -1$
$2 sen(\pm x+ d) (2)$

Il periodo di tutte queste funzioni è $2\pi$ .

Scientifico Comunicazione Opzione
Sportiva 2018 - Problema $2$

Rappresentiamo come esempio le funzioni del tipo $(1)$ che si ottengono per $d=$
$\pi$
$4$ in
$[0; 2\pi$ ]:

Rappresentiamo come esempio le funzioni del tipo $(2)$ che si ottengono per $d=$
$\pi$
$4$ in
$[0; 2\pi$ ]:

Rappresentiamo come esempio le funzioni del tipo $(1)$ che si ottengono per $d=$
$\pi$
$4$ in
$[0; 2\pi$ ]:

Con la collaborazione di Angela Santamaria
