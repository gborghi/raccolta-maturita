---
tipo: soluzione
prova_stem: 2017_suppletiva_2017_problema1_110
pdf: Prova_Maturita_2017.pdf
source: text
title: 2017 Suppletiva — Problema 1 — Svolgimento
---


Suppletiva 2017 - Problema $1$

SESSIONE SUPPLETIVA - 2017

PROBLEMA $1$

Un gioco si svolge su un tabellone, che è suddiviso in tre settori A, $B, C,$ come in figura $1.$

Nei vari settori possono essere collocate alcune pedine. I settori confinano a due a due
attraverso tre varchi (rappresentati nella figura con tratti ondulati). Prima di ogni partita,
per ciascun varco si effettua un sorteggio che stabilisce se esso sarà aperto oppure
chiuso. La probabilità che un varco sia aperto è pari a un certo valore x� (lo stesso valore
per tutti e tre) ed i tre sorteggi sono tra loro indipendenti.

Durante il gioco, una pedina potrà spostarsi attraversando i varchi aperti. In questo modo,
a seconda di quali varchi sono aperti, la pedina P�, inizialmente collocata in A�, potrebbe
raggiungere o tutti e $3$ i settori, oppure solo $2$ (A� e un altro), oppure $1$ solo (non può
uscire da A�).
Indichiamo con $p^{1}(x), p^{2}(x), p^{3}(x)$ le probabilità che i settori raggiungibili dalla pedina P��
partendo da A� siano solo $1,$ oppure $2,$ oppure $3.$

Dimostrare che

$p^{1}(x) = (1 -x)2�,�����p^{2}(x) = 2x(1 -x)2,�����p^{3}(x) = x^{3} + 3x^{2}(1 -x)$

e tracciare, in uno stesso diagramma, i grafici delle funzioni $p^{1}(x), p^{2}(x), �p^{3}(x)��per$
$x\in [0; 1].$

Indichiamo con $AB, AC$ e $BC$ i tre varchi e $d$ indichiamo con $V$ (vero) se il varco è aperto
e con $F$ (falso) se il varco è chiuso. Le otto possibili configurazioni sono le seguenti:

Suppletiva 2017 - Problema $1$

$AB AC BC$
$n.$ settori
raggiungibili
percorsi possibili
probabilità
$1 V$
$$ V V 3 $$
ABC, ACB,
ABAC,ACAB
x∙x∙x

$2 V$
$$ V F 3 $$
ABAC, ACAB
$x∙x∙(1 -x)$
$3 V$
$$ F V 3 ABC $$
$x∙(1 -x)$ ∙x
$4 V$
$$ F F 2 AB $$
$x∙(1 -x) ∙(1 -x)$
$$ 5 F V V 3 ACB $$
$(1 -x)$ ∙x∙x
$$ 6 F V F 2 AC $$
$(1 -x) ∙x∙(1 -x)$
$$ 7 F F V 1 A $$
$(1 -x) ∙(1 -x)$ ∙x
$$ 8 F F F 1 A $$
$(1 -x) ∙(1 -x) ∙(1 -x)$

Le probabilità richieste sono:

$p^{1}(x) = (1 -x) ∙(1 -x) ∙x+ (1 -x) ∙(1 -x) ∙(1 -x) = (1 -x)2$

$p^{2}(x) = x∙(1 -x) ∙(1 -x) + (1 -x) ∙x∙(1 -x) = 2x(1 -x)2$

$p^{3}(x) = x∙x∙x+ x∙x∙(1 -x) + x∙(1 -x) ∙x+ (1 -x) ∙x∙x= x^{3} + 3x^{2}(1 -x)$

Studiamo le tre funzioni.

$p^{1}(x) = (1 -x)2$

Si tratta di una parabola tangente all’asse $x$ nel punto di ascissa $1,$ che interseca l’asse $y$
nel punto di ordinata $1:$

Suppletiva 2017 - Problema $1$

$p^{2}(x) = 2x(1 -x)2$

Si tratta di una cubica quindi è definita, continua e derivabile su tutto $R.$ Taglia l’asse $x$
nei punti di ascissa $x=0$ e $x=1$ (punto di tangenza). I limiti + e - infinito sono
rispettivamente + e - infinito. E’ sufficiente studiare la derivata prima (per i massimi e
minimi) e la derivata seconda (per il flesso, che è sempre presente e unico per le cubiche
ed è centro di simmetria per il grafico).

Derivata prima:

$$ p^{2 $$
'(x) $= 2(1 -x)2 + 2x(2(1 -x)(-1)) = 6x^{2} -8x+ 2 \ge 0�����se��x\le �1$
$3 ��or��x\ge 1$
La funzione è quindi crescente $se��x<�$
$3 ��or��x> 1$ e decrescente se���
$3 < x< 1$
$x= 1$
$3 :���punto�di�massimo�relativo,���x= 1$ :��punto�di�minimo�relativo
$M= (1$
$$ 3 ; 8 $$
$27) ,���m= (1; 0)$

Derivata seconda:

p''(x) $= 12x-8 \ge 0���se���x\ge 2$
Concavità verso l’alto se $x>$
$3,$ verso il basso se $x<$
$3,$ punto di flesso $x=$
$3,$ flesso:
$F= (2$
$$ 3 ; 4 27). $$

Suppletiva 2017 - Problema $1$

$p^{3}(x) = x^{3} + 3x^{2}(1 -x) = x^{2}(3 -2x) = -2x^{3} + 3x^{2}$

Si tratta di una cubica quindi è definita, continua e derivabile su tutto $R.$ Taglia l’asse $x$
nei punti di ascissa $x=0$ (punto di tangenza) e $x=3/2.$ I limiti + e - infinito sono
rispettivamente - e + infinito. E’ sufficiente studiare la derivata prima (per i massimi e
minimi) e la derivata seconda (per il flesso, che è sempre presente e unico per le cubiche
ed è centro di simmetria per il grafico).

Derivata prima:

$$ p^{3 $$
'(x) $= -6x^{2} + 6x\ge 0�����se��0 \le x\le �1$
La funzione è quindi crescente $se��0 < x< �1��$ e decrescente $se���x< 0��or��x> 1$
$x= 0 :���punto�di�minimo�relativo,���x= 1$ :��punto�di�massimo�relativo
$m= (0; 0),���M= (1; 1)$

Derivata seconda:

p''(x) $= -12x+ 6 \ge 0���se���x\le 1$
Concavità verso l’alto se $x<$
$2,$ verso il basso se $x>$
$2,$ punto di flesso $x=$
$2,$ flesso:
$F= (1$
$$ 2 ; 1 2). $$

Suppletiva 2017 - Problema $1$

È vero che, qualunque sia $x\in [0; 1],$ almeno una delle probabilità $p^{1}(x), p^{2}(x), p^{3}(x)$ deve
essere maggiore di $0,3$ e almeno una deve essere minore di $0,4?$

Rappresentiamo nello stesso sistema di riferimento le tre curve, evidenziando le parti con
ascissa nell’intervallo $[0; 1].$

Dal grafico si evince che da $0$ fino all’ascissa dell’intersezione fra i grafici di $p^{1}�e��p^{3},$
almeno la $p^{1}$ supera $0.3;$ dopo tale ascissa (e fino a $1)$ almeno la $p^{3}$ supera $0.3.$

Dal grafico è anche evidente che almeno una curva (la $p^{2})$ è sotto la retta $y=0.4$ (in alcuni
tratti anche $p^{1}��e��p^{3}):$ quindi nell’intervallo $[0; 1]$ almeno una delle tre probabilità è inferiore
a $0.4.$

Provare che esiste un unico $x^{0} \in [0; 1]$ tale che: $p^{1}(x^{0}) = p^{3}(x^{0})��e$ stabilire se vale la
disuguaglianza: $x^{0} >$
$$ 1 2 . $$
Discutere inoltre, al variare di $x�in�[0; 1],$ quali delle tre possibilità indicate (che i settori
raggiungibili da $P$ siano $1, 2$ o $3)$ sono più probabili e quali meno.

Suppletiva 2017 - Problema $1$

Dall’andamento di $p^{1}��e��p^{3}$ nell’intervallo $[0; 1],$ la prima decrescente, la seconda
crescente, si deduce che i due grafici si incontrano in un solo punto $x^{0}.$ Valutiamo le due
probabilità in
$2.$ Risulta: $p^{1}$ (
$$ 1 2) = 1 $$
$4 ��e���p^{3}$ (
$$ 1 2) = 1 $$
$2.$ Quindi $p^{3}$ (
$2) > p^{1}$ (
$2)$ e perciò il punto
$x^{0}$ è a sinistra di $1⁄2$ : quindi non vale la disuguaglianza: $x^{0} >$
$$ 1 2 . $$

Al variare di $x�in�[0; 1]$ si ha che:

se $0 \le x< x^{0}$ la probabilità maggiore è $p^{1},$ per $x= x^{0}�, p^{1} = p^{3}$ sono le probabilità
maggiori, se $x^{0} < x\le 1�$ la probabilità maggiore è $p^{3}.$

Per quanto riguarda le probabilità minori cerchiamo le intersezioni tra i grafici di $p^{2}$ con
$p^{1}�e��con��p^{3}.$

Fra $p^{2}�e��p^{3}$ abbiamo:

$2x-4x^{2} + 2x^{3} = -2x^{3} + 3x^{2}, 4x^{3} -7x^{2} + 2x= 0,����x(4x^{2} -7x+ 2) = 0��da$ cui:

$x= 0�,���x= 7 -\sqrt{17}$
$\cong 0.36,$
$x= \sqrt{17} + 7$
$\cong 1.40$
Quindi, nell’intervallo $[0; 1] p^{2}�e��p^{3}�$ sono uguali per $x= 0��e��x=$
$7-\sqrt{17}$
$\cong 0.36$

Fra $p^{2}�e��p^{1}$ abbiamo:

$2x(1 -x)2 = (1 -x)2,����x= 1���e���x= 1$

Quindi per quanto riguarda le probabilità minori abbiamo la seguente situazione:

se $x= 0$ le probabilità minori sono $p^{2}�e��p^{3}$ (entrambe pari a $0);$

se $< x<$
$7-\sqrt{17}$
la probabilità minore è $p^{3}$ ;

se $x=$
$7-\sqrt{17}$
le probabilità minore sono $p^{2}�e��p^{3}�;$

$$ se $$
$7-\sqrt{17}$
$< x<$
$2$ la probabilità minore è $p^{2}$ ;

$$ se 1 $$
$2 < x< 1$ la probabilità minore è $p^{1}$ ;

se $x= 1$ le probabilità minore sono $p^{1}�e��p^{2}$ (entrambe pari a $0).$

Suppletiva 2017 - Problema $1$

Stabilire quali sono i tre valori medi delle funzioni che esprimono le probabilità
$p^{1}(x), p^{2}(x), p^{3}(x)$ . Nel caso $x=$
$2$ quali sono il valore medio e la varianza della variabile
casuale che fornisce il numero di settori raggiungibili da $P?$

Ricordiamo che il valor medio di una funzione f(x) nell’intervallo [a; b] è dato da:

$b-a∙\int$ f(x)dx
$$ b a $$

Nel nostro caso $a=0$ e $b=1,$ quindi i tre valori medi sono:

$M^{1} = M(p^{1}) = \int p^{1}(x)dx$
$$ 1 0 $$
$= \int (1 -x)2dx$
$$ 1 0 $$
$= \int (1 -2x+ x^{2})dx$
$$ 1 0 $$
$= [x-x^{2} + 1$
$3 x^{3}]$
$$ 0 1 = 1 3 $$

$M^{2} = M(p^{2}) = \int p^{2}(x)dx$
$$ 1 0 $$
$= \int 2x(1 -x)2dx$
$$ 1 0 $$
$= \int (2x-4x^{2} + 2x^{3})dx$
$$ 1 0 = $$

$= [x^{2} -4$
$3 x^{3} + 1$
$2 x^{4}]$
$$ 0 1 = 1 6 $$

$M^{3} = M(p^{3}) = \int p^{3}(x)dx$
$$ 1 0 $$
$= \int (-2x^{3} + 3x^{2})dx$
$$ 1 0 $$
$= [-1$
$2 x^{4} + x^{3}]$
$$ 0 1 = 1 2 $$

Detta $X$ la variabile aleatoria che fornisce il numero di settori raggiungibili, essa assume i
valori $x^{1} = 1,���x^{2} = 2, x^{3} = 3$ con probabilità rispettivamente $p^{1}$ (
$$ 1 2) = 1 $$
$4 , p^{2}$ (
$$ 1 2) = 1 $$
$4�, p^{3}$ (
$$ 1 2) = 1 2 $$

Il valor medio di $X$ è dato da:

M(X) $= x1p^{1} + x2p^{2} + x3p^{3} = 1$
$$ 4 + 1 2 + 3 2 = 9 $$
$4 = 2.25 =$ M(X)

La varianza di $X$ è data da:

Var(X) $= \sigma 2 = (x^{1} -M)2p^{1} + (x^{2} -M)2p^{2} + (x^{3} -M)2p^{3} =$

$= (1 -9$
$$ 4) 2 $$
$∙1$
$4 + (2 -9$
$$ 4) 2 $$
$∙1$
$4 + (3 -9$
$$ 4) 2 $$
$∙1$
$$ 2 = 11 $$
$16 = 0.6875 =$ Var(X)

Con la collaborazione di Angela Santamaria
