---
tipo: soluzione
prova_stem: 2016_scientifico_comunicazione_opzione_sportiva_2016_problema1_70
pdf: Prova_Maturita_2016.pdf
source: text
title: Soluzioni — 2016_scientifico_comunicazione_opzione_sportiva_2016_problema1_70
---
# Soluzioni — 2016_scientifico_comunicazione_opzione_sportiva_2016_problema1_70

## Problema 1

Scientifico Comunicazione Opzione
Sportiva 2016 - Problema $1$

SCIENTIFICO COMUNICAZIONE OPZIONE SPORTIVA 2016 - PROBLEMA $1$

La funzione $f: R \to R$ è così definita:

f(x) = {
sen(x)
per $x\ne 0$
$1 x= 0$

Prova che $f$ è una funzione pari e che essa è derivabile in $x= 0.$ Dimostra inoltre che la
funzione $f$ ha un massimo assoluto in $x= 0.$

Per dimostrare che la funzione è pari occorre dimostrare che $f(-x) =$ f(x) per ogni $x$ del
dominio. Se $x= 0$ la proprietà è chiaramente verificata. Per $x\ne 0$ si ha:

$f(-x) = sen(-x)$
$-x$
$= -sen(x)$
$-x$
= sen(x)
= f(x), $c. v. d.$

Dimostriamo che la funzione è derivabile in $x= 0.$ In tale punto la funzione è
chiaramente continua, essendo, in base $ad$ un limite notevole:

$$ lim $$
$x\to 0$ f(x) = lim
$x\to 0$
sen(x)
$= 1 = f(0)$

Dimostriamo che la funzione è derivabile in $x= 0$ applicando la definizione di derivata:

$$ lim $$
$h\to 0$
$f(x^{0} + h) -f(x^{0})$
= lim
$h\to 0$
$f(0 + h) -f(0)$
= lim
$h\to 0$
sen(h)
$-1$
= lim
$h\to 0$
sen(h) $-h$
$$ h^{2 $$

Per calcolare tale limite possiamo utilizzare la formula di Taylor, secondo cui, per $h\to 0$
risulta: sen(h) $= h-$
$$ h^{3 $$
$3! + o(h^{3}),$ dove $o(h^{3})$ indica un infinitesimo di ordine superiore
rispetto $ad h^{3},$ quindi:

$$ lim $$
$h\to 0$
sen(h) $-h$
$$ h^{2 $$
= lim
$h\to 0$
$h-h^{3}$
$3! + o(h^{3}) -h$
$$ h^{2 $$
= lim
$h\to 0$
$-h^{3}$
$3!$
$h^{2} = 0 = f'(0)$

Allo stesso risultato si può arrivare utilizzando la regola di $de$ l’Hȏpital, di cui sono
soddisfatte le condizioni:

$limh\to 0$
$sen(h)-h$
$$ h^{2 $$
$= limh\to 0$
$cos(h)-1$
$2h$
= -
$2 limh\to 0$
$(1-cos(h))(1+cos(h))$
$h(1+cos(h))$
= -
$2 limh\to 0$
$sen2(h)$
$h∙2$

Scientifico Comunicazione Opzione
Sportiva 2016 - Problema $1$

$= -1$
$4$ lim
$h\to 0$
$sen2(h)$
$$ h^{2 $$
$∙h= -1$
$4$ lim
$h\to 0$ (sen(h)
$$ h ) 2 $$
$∙h= -1$
$4$ ∙lim
$h\to 01 ∙h= 0$

Dimostriamo che la funzione $f$ ha un massimo assoluto in $x = 0.$
Risulta |
sen(x)
$| \le 1$ infatti, come si può notare dal grafico seguente, è $|sen(x)| \le |x|$

Siccome per $x=0$ la funzione vale $1,$ possiamo concludere che la funzione ha il massimo
assoluto (che vale $1)$ per $x=0.$

Traccia, in uno stesso diagramma, i grafici indicativi delle tre funzioni
$y=$ f(x) $y= 1$
$x y= -1$
e mostra che il grafico di $f$ è tangente agli altri due in infiniti punti. È vero che tali punti di
tangenza sono anche massimi o minimi relativi della funzione $f?$

Essendo $-1 \le$ sen(x) $\le 1$ risulta:
-
$x\le$
sen(x)
$\le$
$x$ se $x>0$ e
$x\le$
sen(x)
$\le -$
$x$ se $x<0$
In particolare, per $x>0,$ risulta
sen(x)
$$ x = 1 $$
$x$ quando sen(x) $= 1$ cioè per $x=$
$\pi$
$2 + 2n\pi$ con $n$
intero $\ge 0.$
Risulta invece, sempre per $x>0,$
sen(x)
= -
$x$ quando sen(x) $= -1$ cioè per
$x=$
$2 \pi + 2n\pi$ con $n$ intero $\ge 0.$
Quanto detto permette di concludere che il grafico di $f$ è tangente in infiniti punti $ai$ grafici
delle altre due funzioni:

Scientifico Comunicazione Opzione
Sportiva 2016 - Problema $1$

Notiamo esplicitamente che la $f$ si annulla quando sen(x) $= 0,$ quindi se $x= n\pi$ con $n$
intero relativo non nullo $(x= \pm \pi , \pm 2\pi , \pm 3\pi$ , ... ); inoltre, per il teorema del confronto,
risulta;
$limx\to \pm \infty$
sen(x)
$$ x = 0 . $$

I punti di tangenza NON sono punti di massimo o minimo relativo per la funzione $f.$

La funzione $f$ è infatti ovunque derivabile, quindi nei punti di massimo o minimo relativi la
derivata si deve annullare; essendo i punti in questione i punti di tangenza con i grafici
delle funzioni $y=$
$x y= -$
$x$ , si dovrebbe annullare anche la derivata di queste funzioni,
cosa che non si verifica mai (le due derivate sono rispettivamente -
$x^{2}$ e
$x^{2}$ ).
Si può anche osservare che la derivata della funzione $f$ è:

f'(x) = D(sen(x)
) = xcos(x) $-sen(x)$
$$ x^{2 $$

che nei punti di tangenza non si annulla, infatti:

se $x=$
$\pi$
$2 + 2n\pi$ il numeratore vale $-1$ , se $x=$
$2 \pi + 2n\pi$ il numeratore vale $1.$

Detta $R^{0}$ la regione piana di area finita delimitata dal grafico di $f,$ dall’asse $x$ e dall’asse
$y,$ si indica con $V^{0}$ il volume del solido generato ruotando $R^{0}$ intorno all’asse $y.$ Si indica
inoltre con $Rn$ la regione piana delimitata dal grafico di $f$ e dal tratto dell’asse $x$ compreso
tra $n\pi$ e $(n+ 1)\pi$ , qualsiasi sia $n\in N,$ e con $Vn$ il volume del rispettivo solido di rotazione.
Dimostra che risulta:

$V^{0} = Vn= 4\pi$

Rappresentiamo la regione $R^{0}:$

Il volume $V^{0}$ si può calcolare con il metodo dei gusci cilindrici (si veda il seguente
approfondimento:
$http://www.matefilia.it/argomen/gusci-cilindrici/metodo-gusci-cilindrici.pdf$ ):

$V^{0} = \int (2\pi$ x)f(x)dx
$\pi$
$= 2\pi \int$ x∙
$\pi$
sen(x)
$dx= 2\pi \int$ sen(x)dx
$\pi$
$= 2\pi [-cos (x)]0$
$\pi = 2\pi (1 + 1)$
Quindi: $V^{0} = 4\pi$ .

Scientifico Comunicazione Opzione
Sportiva 2016 - Problema $1$

Calcoliamo ora in modo analogo $Vn$ dopo aver notato che $n\pi$ e $(n + 1)\pi$ sono due zeri
della $f$ consecutivi (per esempio $\pi$ e $2\pi , 2\pi$ e $3\pi$ , ... ):

$Vn= | \int$
$(2\pi$ x)f(x)dx
$(n+1)\pi$
$n\pi$
$| = 2\pi |\int$
x∙
$(n+1)\pi$
$n\pi$
sen(x)
$dx| = 2\pi |\int$
sen(x)dx
$(n+1)\pi$
$n\pi$

$= 2\pi |[-cos (x)]n\pi$
$(n+1)\pi | = 2\pi (1 + 1) = 4\pi$

(osserviamo che se $n$ è pari $[-cos (x)]n\pi$
$(n+1)\pi = 2$ mentre se $n$ è dispari è uguale a $-2).$

Quindi: $Vn= V^{0} = 4\pi$ .

Sia definita la funzione:
F(x) $= \int$ f(t)dt
$$ x 0 $$

Tenuto conto del fatto che
$$ lim $$
$x\to +\infty$ F(x) $= \pi$

traccia un grafico indicativo dell'andamento della funzione $F,$ individuandone, in
particolare, le ascisse dei punti di massimo e di minimo (Nota: la primitiva della funzione
$f$ non è esprimibile tramite le usuali funzioni analitiche).

Osserviamo che essendo f(x) pari funzione F(x) è dispari; infatti, per il teorema
fondamentale del calcolo integrale risulta F'(x) = f(x), quindi F'(x) è pari, ne segue che
F(x) è dispari (ricordiamo che se una funzione è pari la sua derivata è dispari e
viceversa).

Studiamo quindi F(x) $= \int$ f(t)dt
$$ x 0 $$
per $x\ge 0.$
Si tratta di una funzione continua e derivabile in tutto il suo dominio ed è $F(0)=0;$ inoltre,
essendo $limx\to +\infty$ F(x) =
$\pi$
$2,$ abbiamo l’asintoto orizzontale $y=$
$\pi$
$2$ per $x\to +\infty$ (e di

Scientifico Comunicazione Opzione
Sportiva 2016 - Problema $1$

conseguenza l’asintoto $y= -$
$\pi$
$2$ per $x\to -\infty$ ). Osservando le aree delle regioni $R^{0}, R^{1},$
ecc. (oppure pensando che F'(x) = f(x) quindi la $F$ cresce dove $f$ è positiva e decresce
dove $f$ è negativa) possiamo dire che la funzione cresce da $0$ a $\pi$ , decresce da $\pi$ a $2\pi$ ,
cresce da $2\pi$ a $3\pi$ e così via. In generale:

$F$ è crescente se $n\pi < x< (n+ 1)\pi$ per $n$ pari
$F$ è decrescente crescente se $n\pi < x< (n+ 1)\pi$ per $n$ dispari

Pertanto (per $x>0)$ abbiamo dei punti di massimo relativi per $x= n\pi$ con $n$ dispari
$(\pi , 3\pi , 5\pi$ , ecc. ) e dei punti di minimo relativo per $x= n\pi$ con $n$ pari non nullo
$(2\pi , 4\pi , 6\pi$ , ecc. ).

Grafici qualitativi di $F$ (su intervalli via via crescenti):

Con la collaborazione di Angela Santamaria
