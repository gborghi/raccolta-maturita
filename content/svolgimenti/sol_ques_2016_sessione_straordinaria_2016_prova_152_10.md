---
title: 2016 Straordinaria — Prova — Quesito 10 — Svolgimento
tipo: soluzione
item_id: sol_ques_2016_sessione_straordinaria_2016_prova_152_10
of_item: ques_2016_sessione_straordinaria_2016_prova_152_10
prova_id: prova_2016_sessione_straordinaria_2016_prova_152
anno: '2016'
pdf: Prova_Maturita_2016.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2016
---

**Quesito:** [[Quesiti/ques_2016_sessione_straordinaria_2016_prova_152_10|2016 Straordinaria — Prova — Quesito 10]] · **Prova:** [[Prove/2016_sessione_straordinaria_2016_prova_152|2016 Straordinaria — Prova]]

Sessione straordinaria 2016 - Quesiti

$c= -5d$
$b= 11d$
$a= -2d$

Il piano per A, $B$ e $C$ ha pertanto equazione:

$-2dx+ 11dy-5dz+ d= 0,⁡⁡⁡⁡⁡⁡⁡2x-11y+ 5z-1 = 0$

I parametri direttori di una normale $ad$ un piano sono gli stessi del piano, uguali $ai$
coefficienti di $x, y$ e $z: 2, -11, 5.$ La retta per $D$ perpendicolare al piano trovato ha quindi
equazioni parametriche:

$x= xD+ 2t$
$y= yD-11t$
$z= zD+ 5t$
;⁡⁡⁡⁡⁡⁡{
$x= 1 + 2t$
$y= 1 -11t$
$z= 5t$

QUESITO $10$

Si consideri, nel piano cartesiano, la regione limitata $R,$ contenuta nel primo quadrante,
compresa tra l'asse $y$ ed i grafici di $y= 2x⁡⁡⁡e⁡⁡⁡y= x^{2}.$ Si determinino i volumi dei solidi
che si ottengono ruotando $R$ attorno all'asse $x$ e all'asse $y.$

Rappresentiamo graficamente la regione $R:$

Le due curve si incontrano nel primo quadrante nel punto $(2;4)$ (poi si incontreranno di
nuovo, ma non cambia la regione $R).$

Ruotando attorno all’asse $x$ abbiamo il volume:

Sessione straordinaria 2016 - Quesiti

$Vx= \pi \int [(2x)2 -(x^{2})^{2}]dx$
$$ 2 0 $$
$= \pi \int [4x-x^{4}]dx$
$$ 2 0 $$
$= \pi$ [ $4x$
$ln⁡(4) -1$
$5 x^{5}]$
$$ 0 2 = $$
$= \pi ( 16$
$ln⁡(4) -32$
$5 -$
$ln⁡(4)) = \pi ( 15$
$ln⁡(4) -32$
$5 ) \cong 13.887⁡⁡u^{3} = Vx$

Per il calcolo del volume ottenuto dalla rotazione attorno all’asse $y$ consideriamo le curve
nella forma:
$x= log2 y⁡⁡⁡⁡⁡⁡e⁡⁡⁡⁡⁡⁡⁡⁡⁡x= \sqrt{y}$ (è $x> 0)$

In questo caso il volume è dato da:

$Vy= \pi \int (\sqrt{y})$
$2dy+$
$$ 1 0 $$
$\pi \int [(\sqrt{y})$
$2 -(log2 y)2] dy= \pi [1$
$2 y^{2}]$
$$ 0 1 $$
$+ \pi [1$
$2 y^{2}]$
$$ 1 4 $$
$-\pi \int (log2 y)2dy$
$$ 4 1 4 1 $$

$= \pi (1$
$2) + \pi (8 -1$
$2) -\pi \int$ (lny
$ln2)$
$$ 2 dy 4 1 $$
$= \pi (1$
$$ 2 + 15 $$
$2 -$
$ln2 2 \int (lny)2dy$
$$ 4 1 ) $$

Cerchiamo una primitiva di $(lny)2,$ operando la sostituzione $lny= t⁡⁡da⁡cui⁡⁡y= et$ ed
integrando per parti:

$\int ln2 y⁡dy= \int t^{2}(etdt) = \int t^{2}(et)'dt= t2et-\int 2tetdt= t2et-2 \int t(et)'dt=$

$= t2et-2 [tet-\int$ etdt] $= t2et-2tet+ 2et+ k= y(ln2 y-2lny+ 2) + k$

Risulta quindi

$Vy= ⋯= ⁡\pi (8 -$
$ln2 2 \int (lny)2dy$
$$ 4 1 $$
) $= \pi (8 -$
$ln2 2 [y(ln2 y-2lny+ 2)]1$

$= ⁡\pi (8 -$
$ln2 2 [4(ln2 4 -2ln4 + 2) -(2)]) = \pi (8 -4 ln2 4 -8ln4 + 6$
$ln2 2$
) $\cong 8.152⁡u^{3}$

Quindi $Vy= ⁡\pi (8 -$
$4 ln2 4-8ln4+6$
$ln2 2$
) $\cong 8.152⁡⁡u^{3}$

Con la collaborazione di Angela Santamaria

Suppletiva 2016 - Quesiti

QUESITO $1$

Si consideri questa equazione differenziale: y'' $+ 2y' + 2y= x$ . Quale delle seguenti
funzioni ne è una soluzione? Si giustifichi la risposta.

a) $y= e-x(senx+$ cosx) $+ x b) y= 2e-x+ x$
$c) y= e-x(senx+$ cosx) +
$2 (x-1) d) y= 2e-2x+ x$

Caso a): $y' = -$
$2sen(x)$
$$ ex $$
$+ 1$ y'' =
$2sen(x)-2cos(x)$
$$ ex $$

Sostituendo nell’equazione:

$2sen(x)-2cos(x)$
$$ ex $$
$+2 (-$
$2sen(x)$
$$ ex $$
$+ 1 ) + 2(e-x(senx+$ cosx) $+ x ) =$
$= 2e-x(senx-cosx-2senx+ senx+$ cosx) $+ 2 + 2x= 2 + 2x\ne x$

La a) non è soluzione.

Caso $b): y' = -2e-x+ 1$ y'' $= 2e-x$
Sostituendo nell’equazione:

$2e-x+ 2(-2e-x+ 1) + 2(2e-x+ x) \ne x$
La $b)$ non è soluzione.

Caso $c): y' = -$
$2sen(x)$
$$ ex + 1 $$
$2$ y'' =
$2sen(x)-2cos(x)$
$$ ex $$

Sostituendo nell’equazione:

$2sen(x)-2cos(x)$
$$ ex $$
$+2 (-$
$2sen(x)$
$$ ex + 1 $$
$2 ) + 2 (e-x(senx+$ cosx) +
$2 x-$
$$ 1 2 ) = $$
$= 2e-x(senx-cosx-2senx+ senx+$ cosx) $+ 1 + x-1 = x$

La soluzione è la $c).$

Verifichiamo che la $d)$ non è soluzione dell’equazione:

$y= 2e-2x+ x , y' = -4e-2x+ 1$ , y'' $= 8e-2x$
Sostituendo nell’equazione:

$8e-2x+ 2(-4e-2x+ 1) + 2(2e-2x+ x) = 2 + 2(2e-2x+ x) \ne x$

La $d)$ non è soluzione.

Suppletiva 2016 - Quesiti

QUESITO $2$

Data la funzione così definita in $R:$
f(x) $= x∙e-|x^{3}-1|$ ,

determinarne minimi, massimi ed eventuali asintoti.

Risulta $f(x)<0$ se $x<0, f(x)=0$ se $x=0, f(x)>0$ se $x>0.$
Inoltre la $f$ può essere espressa nella forma seguente:

f(x) = {
$x∙e-x^{3}+1,$ se $x> 1$
$x∙ex3-1,$ se $x< 1$
$1,$ se $x= 1$

La funzione è continua su tutto $R.$ Analizziamo la derivata prima:

Se $x> 1:$ f'(x) $= e-x^{3}+1 + x(-3x2e-x^{3}+1) = e-x^{3}+1(1 -3x^{3}) \ge 0$ se $1 -3x^{3} \ge 0,$

$x\le \sqrt$
$$ 1 3 3 $$
, quindi se $x>1$ f'(x) $< 0,$ quindi la funzione è decrescente.

Se $x< 1:$ f'(x) $= ex3-1 + x(3x2ex3-1) = ex3-1(1 + 3x^{3}) \ge 0$ se $1 + 3x^{3} \ge 0,$

$x\ge \sqrt -$
$$ 1 3 3 $$
, quindi se $x<1$ f'(x) $\ge 0$ per $\sqrt -$
$$ 1 3 3 $$
$\le x< 1;$ pertanto, quando $x<1$ si ha:
per $\sqrt -$
$$ 1 3 3 $$
$< x< 1$ la funzione è crescente, se $x< \sqrt -$
$$ 1 3 3 $$
la funzione è decrescente.
Quindi $x= \sqrt -$
$$ 1 3 3 $$
è punto di minimo relativo.

Notiamo che in $x=1$ risulta:

$f-$
$'(1) = 4, f+$
$'(1) = -2:$ quindi in $x=1$ abbiamo un punto angoloso.

Globalmente abbiamo la seguente situazione:

$x< \sqrt -$
$$ 1 3 3 $$
: funzione decrescente (e negativa)
$\sqrt -$
$$ 1 3 3 $$
$< x< 1$ : funzione crescente (negativa fino a zero, positiva da zero a $1)$
$x> 1$ : funzione decrescente (e positiva)

La funzione ha quindi un minimo relativo (e assoluto) per $x= \sqrt -$
$$ 1 3 3 $$
con ordinata

Suppletiva 2016 - Quesiti

$y= \sqrt -$
$$ 1 3 3 $$
$e-4$
$3$ ed un massimo assoluto per $x= 1,$ con ordinata $y= 1.$

Vediamo se ci sono asintoti. Essendo la funzione continua non possono esserci asintoti
verticali. Vediamo se ci sono asintoti obliqui $e/o$ orizzontali:

$limx\to -\infty x∙e-|x^{3}-1| =$ lim
$x\to -\infty x∙ex3 = 0-$ : quindi per $x\to -\infty$ abbiamo l’asintoto orizzontale
$y= 0.$

$limx\to +\infty x∙e-|x^{3}-1| =$ lim
$x\to +\infty x∙e-x^{3} =$ lim
$x\to +\infty$
$ex3 = 0+:$
quindi
$$ per $$
$x\to +\infty$
abbiamo
l’asintoto orizzontale $y= 0.$

Proponiamo, anche se non richiesto, il grafico della funzione:

QUESITO $3$

Determinare la velocità di variazione dello spigolo di un cubo, sapendo che il volume del
cubo è pari a $0.1 m^{3}$ e sta diminuendo alla velocità di 1200
$$ cm3 $$
sec .

Indicando con $V$ il volume del cubo e con $L$ il suo spigolo abbiamo: $V= L^{3}$ .
Il volume $V$ varia nel tempo secondo una legge del tipo: $V= V^{0} -v∙t,$ essendo $V^{0}$ il
volume iniziale e $v$ la velocità costante, quindi:

$V= 100 dm3 -1.2 dm3$
$sec∙t= 100 -1.2 t=$ V(t)

Da $V= L^{3}$ segue $L= \sqrt{V}$
$= \sqrt{100} -1.2 t$
, pertanto la variazione dello spigolo è:

$$ dL $$
$dt=$ L'(t) $= d$
$dt(\sqrt{100} -1.2 t$
$$ 3 ) = 1 $$
$3 (100 -1.2 t)-2$
$3(-1.2)) =$
$-0.4$
$\sqrt{100 -1.2 t}2$
= velocità di variazione dello spigolo del cubo

Suppletiva 2016 - Quesiti

QUESITO $4$

Posto, per $n\in N, An= \int$ xnex $dx$
$$ 1 0 $$
, stabilire il valore di $A^{1}$ e dimostrare che, per ogni
$n> 0,$ si ha $An= e-n An-1.$

Integrando per parti abbiamo:
$A^{1} = \int$ xex $dx$
$$ 1 0 $$
= [x $ex-ex]0$
$$ 1 = 1 $$

Dimostriamo, per via diretta, che, per ogni $n > 0,$ si ha $An= e-n An-1.$
Integrando per parti abbiamo:

$An= \int$ xnex $dx$
$$ 1 0 $$
$= [xnex]0$
$1 -n\int xn-1ex dx$
$$ 1 0 $$
$= e-nAn-1$

QUESITO $5$

I lati di un triangolo ABC misurano: $AB= 5 cm, BC= 6 cm, CA= 5 cm$ . Preso a caso un
punto $P$ all'interno del triangolo, qual è la probabilità che $P$ sia più vicino al vertice $B$ che
al vertice A?

Tracciato l’asse del lato $AB$ ed indicata con E l’intersezione con il lato $BC,$ osserviamo
che i punti del semipiano di origine $DE$ che contengono $B$ sono più vicini a $B$ che $ad$ A,
quindi la probabilità richiesta è data da:

$p=$ Area(BDE)
Area(ABC)

Essendo $AF=4 cm,$ l’area di ABC è: Area(ABC) $= 3 ∙4 cm2 = 12 cm2.$

Per trovare l’area di BDE cerchiamo $DE$ dopo aver notato che BDE è simile a BFA:

Suppletiva 2016 - Quesiti

$DE: AF= BD: BF , DE=$ AF∙BD
$$ BF $$
$= 4 ∙2.5$
$$ 3 = 10 $$
$3 cm$

Quindi: Area(BDE) =
BD∙DE
$2.5∙10$
$$ 3 2 $$
$cm2 =$
$$ 25 $$
$6 cm2$

Pertanto: $p=$
Area(BDE)
Area(ABC) =
$$ 25 6 12 = 25 $$
$72 \cong 0.3472 \cong 34.7$ % .

QUESITO $6$

I punti $A(3; 4; 1), B(6; 3; 2), C(3; 0; 3), D(0; 1; 2)$ sono vertici di un quadrilatero ABCD. Si
dimostri che tale quadrilatero è un parallelogramma e si controlli se esso è un rettangolo.

Per dimostrare che ABCD è un parallelogramma è sufficiente dimostrare chela retta $BC$ è
parallela $ad AD$ ed $AB$ è parallela a $CD.$

Cerchiamo i parametri direttori delle rette.

Retta $AB:$
$a= 6 -3 = 3, b= 3 -4 = -1, c= 2 -1 = 1$

Retta $AD:$
$a= 3 -0 = 3, b= 4 -1 = 3, c= 1 -2 = -1$

Retta $BC:$
$a= 6 -3 = 3, b= 3 -0 = 3, c= 2 -3 = -1$

Retta $CD:$
$a= 3 -0 = 3, b= 0 -1 = -1, c= 3 -2 = 1$

Riepilogando:
retta $AB: (3; -1; 1),$ retta $CD: (3; -1; 1).$ Quindi $AB$ è parallela a $CD.$
Retta $BC: (3; 3; -1),$ retta $AD: (3; 3; -1).$ Quindi $BC$ è parallela $ad AD.$

ABCD è un parallelogramma.

Per stabilire se il parallelogramma è un rettangolo è necessario (e sufficiente) verificare
se due lati consecutivi sono perpendicolari.

Verifichiamo se $AB$ è perpendicolare a $BC,$ ricordando che la condizione di
perpendicolarità richiede che la somma dei prodotti dei parametri direttori sia nulla:

$(3)(3) + (-1)(3) + (1)(-1) = 9 -3 -1 = 5 \ne 0$

ABCD è non è un rettangolo.

Suppletiva 2016 - Quesiti

QUESITO $7$

Determinare la distanza tra il punto $P(2; 1; 1)$ la retta:

${x+ y= z+ 1$
$z= -y+ 1$

La distanza richiesta può essere trovata cercando il piano per $P$ perpendicolare alla retta
data, cercando l’intersezione $H$ tra il piano suddetto e la retta data e calcolando la
distanza $PH.$
Per scrivere l’equazione del piano in questione ci servono i parametri direttori della retta
data, che conviene riscrivere in forma parametrica (poniamo $y= t):$

$x= z+ 1 -y= 1 -t+ 1 -t= 2 -2t$
$y= t$
$z= 1 -t$

Una terna di parametri direttori della retta (uguali a quelli del piano $ad$ essa
perpendicolare) sono: $(-2; 1; -1).$

Il piano per $P(2; 1; 1)$ perpendicolare alla retta ha equazione:

$a(x-x^{0}) + b(y-y^{0}) + c(z-z^{0}) = 0$

$-2(x-2) + 1(y-1) -1(z-1) = 0$

$-2x+ y-z+ 4 = 0, 2x-y+ z-4 = 0$

Cerchiamo l’intersezione $H$ fra la retta data ed il piano per $P ad$ essa perpendicolare:
$2(2 -2t) -(t) + (1 -t) -4 = 0, -6t+ 1 = 0,$
$t= 1$

Quindi $H$ ha coordinate:

$H:$
$x= 2 -2t= 2 -$
$$ 1 3 = 5 3 $$
$y= t=$
$$ 1 6 $$
$z= 1 -t= 1 -$
$$ 1 6 = 5 6 $$
$H=$ (
$$ 5 3 ; 1 6 ; 5 6) $$

Calcoliamo ora la distanza di $P(2; 1; 1)$ da $H=$ (
$$ 5 3 ; 1 6 ; 5 $$
$6)$ , che è la distanza richiesta:

$PH= \sqrt (2 -5$
$$ 3) 2 $$
$+ (1 -1$
$$ 6) 2 $$
$+ (1 -5$
$$ 6) 2 = \sqrt{1} 9 + 25 36 + 1 36 = \sqrt{30} 36 = \sqrt{5} 6 $$

Suppletiva 2016 - Quesiti

QUESITO $8$

Supponiamo che l'intervallo di tempo $t$ (in anni) tra due cadute di fulmini in un'area di
$100 m^{2}$ sia dato da una variabile casuale continua con funzione di ripartizione:

$P(t\le z) = \int 0.01 ∙e-0.01 s$
$$ z 0 ds $$

a) Si calcoli la probabilità che, in tale area, i prossimi due fulmini cadano entro non più di
$200$ anni l’uno dall’altro.
$b)$ Si determini qual è il minimo numero di anni $z,$ tale che sia almeno del $95%$ la
probabilità che i prossimi due fulmini cadano in tale area entro non più di $z$ anni l’uno
dall’altro.

a) La probabilità richiesta è data da:
$P(t\le 200) = \int$
$0.01 ∙e-0.01 s$
$$ 200 0 $$
$ds= [-e-0.01 s]0$
$200 = -e-2 + 1 \cong 0.865 \cong 86.5$ %

$b)$ Dobbiamo risolvere la seguente disequazione:

$P(t\le z) = \int 0.01 ∙e-0.01 s$
$$ z 0 $$
$ds\ge 0.95$

$\int 0.01 ∙e-0.01 s$
$$ z 0 $$
$ds= [-e-0.01 s]0$
$z= -e-0.01 z+ 1 \ge 0.95 , e-0.01 z\le 0.05,$

$-0.01z\le ln(0.05)$ ,
$z\ge ln(0.05)$
$-0.01 , z\ge 299.573$

Il minimo numero di anni $z,$ tale che sia almeno del $95%$ la probabilità che i prossimi due
fulmini cadano in tale area entro non più di $z$ anni l’uno dall’altro è $z= 299.573,$ cioè circa
$300$ anni.

QUESITO $9$

Una curva “a spirale” inizia nel punto A, come indicato in figura, ed è formata
congiungendo un numero infinito di semicirconferenze di diametri sempre più piccoli. Il
diametro $d^{1}$ della prima semicirconferenza è di $80 cm.$ Il diametro $d^{2}$ della seconda è pari
$$ ai 3 $$
$5$ di $d^{1}.$ Il diametro $d^{3}$ della seconda è pari $ai$
$5$ di $d^{2},$ e così via: $dn+1 =$
$5 dn$ per ogni
$n.$
Con lo sviluppo della curva, gli estremi delle varie semicirconferenze tendono al
cosiddetto “occhio” E della spirale (ossia l’unico punto contenuto in tutti i vari diametri).
Qual è la distanza (in linea retta) tra il punto A e il punto E?
E qual è la lunghezza del cammino che $va$ da A a E, percorrendo l’intera curva?

Suppletiva 2016 - Quesiti

I diametri delle semicirconferenze formano una progressione geometrica con primo
termine $d^{1} = 80$ e ragione $q=$
$$ 3 5 . $$

Calcoliamo la distanza tra il punto A ed il punto E. Osserviamo la seguente figura in cui
sono rappresentate le prime due semicirconferenze, che hanno diametri $d^{1} = 80 cm$ e
$d^{2} =$
$5 80 cm= 48 cm;$ risulta: $AE1 = d^{1} -d^{2} = 32 cm$

Aggiungiamo la terza semicirconferenza, che ha diametro $d^{3} =$
$5 d^{2} =$
$5 (48) = 28.8 cm.$
Risulta ora: $AE2 = AE1 + E1E^{2} = (d^{1} -d^{2}) + d^{3} = 60.8 cm$

Suppletiva 2016 - Quesiti

Generalizzando abbiamo:

$AEn= d^{1} -d^{2} + d^{3} -d^{4} + d^{5} -d^{6} + ⋯= d^{1} -3$
$5 d^{1} + (3$
$$ 5) 2 $$
$d^{1} -(3$
$$ 5) 3 $$
$d^{1} + ⋯=$

$= d^{1} (1 -3$
$$ 5 + (3 5) 2 $$
$-(3$
$$ 5) 3 + (3 5) 4 $$
-⋯)

Osserviamo che $(1 -$
$$ 3 5 + ( 3 5) 2 $$
-(
$$ 3 5) 3 + ( 3 5) 4 $$
-⋯) è la somma di infiniti termini di una
progressione geometrica con primo termine $1$ e ragione $q= -$
$5$ e risulta:

$(1 -3$
$$ 5 + (3 5) 2 $$
$-(3$
$$ 5) 3 + (3 5) 4 $$
-⋯) = lim
$n\to \infty 1$ ∙
$1 -(-3$
$$ 5) n 1 + 3 5 = 1 8 5 = 5 8 $$

Risulta pertanto:

$AEn= d^{1} ∙5$
$8 = 80 ∙5$
$8 cm= 50 cm$

La distanza (in linea retta) tra il punto A e il punto E è di $50 cm.$

La lunghezza della generica semicirconferenza di diametro $d$ è data da $\pi r=$
$\pi d$
$2$ , quindi:

$C^{1} = \pi$
$2 d^{1}, C^{2} = \pi$
$2 d^{2} = \pi$
$$ 2 (3 $$
$5 d^{1}) = 3$
$5 C^{1}, ... , Cn+1 = 3$
$5 Cn$

Quindi le semicirconferenze che formano la spirale sono anch’esse in progressione
geometrica con primo termine $C^{1} =$
$\pi$
$2 d^{1} = 40 \pi$ e ragione $q=$
$$ 3 5 . $$

La lunghezza $L$ del cammino che $va$ da A $ad$ E lungo le semicirconferenze è uguale alla
somma delle infinite semicirconferenze, cioè:

$L= C^{1} + C^{2} + ⋯+ Cn+ ⋯=$ lim
$n\to \infty (C^{1} + C^{2} + ⋯+ Cn) =$ lim
$n\to \infty$
$\pi$
$2 (d^{1} + d^{2} + ⋯+ dn) =$

$= \pi$
$2$ ∙lim
$n\to \infty d^{1} ∙1 -qn$
$1 -q= \pi$
$2 ∙d^{1}$ lim
$n\to \infty$
$1 -qn$
$1 -q= 40\pi$ lim
$n\to \infty$
$1 -(3$
$$ 5) n $$
$1 -3$
$= 40\pi ∙1$
$$ 2 5 $$
$= 100 \pi = L$

La lunghezza $L$ del cammino che $va$ da A a E, percorrendo l’intera curva è $L= 100\pi cm.$

Suppletiva 2016 - Quesiti

QUESITO $10$

Si stabilisca il valore del limite:
$$ lim $$
$x\to +\infty$
$2 -73 cos3 (4x+ \pi$
$$ 11) $$
$5x-sen2 (x-\pi$

motivando adeguatamente la risposta.

Osserviamo che il numeratore oscilla tra $2-73$ e $2+73$ (non ammette limite per $x\to +\infty$ ).
Il denominatore, per $x\to +\infty$ , si comporta come $“5x”,$ poiché il termine rimanente è
limitato (in particolare fra $-1$ e $0),$ quindi tende a $+\infty$ .

Per il teorema del confronto il limite è quindi uguale a zero.

Ricordiamo che, per il teorema del confronto, la funzione f(x) ∙g(x), se una delle due è
un infinitesimo e l’altra è limitata, tende a zero.

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.169](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
