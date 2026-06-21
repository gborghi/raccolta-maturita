---
tipo: soluzione
prova_stem: 2018_sessione_straordinaria_2018_problema1_65
pdf: Prova_Maturita_2018.pdf
source: text
title: Soluzioni — 2018_sessione_straordinaria_2018_problema1_65
---
# Soluzioni — 2018_sessione_straordinaria_2018_problema1_65

## Problema 1

Sessione straordinaria 2018 - Problema $1$

LICEO SCIENTIFICO SESSIONE STRAORDINARIA 2018 - PROBLEMA $1$

Un produttore di candeline tea light vuole produrre un nuovo tipo di candela colorata che
abbia una parte inferiore di forma cilindrica ed una parte superiore avente la forma
riportata in figura $1,$ che si connetta perfettamente a quella inferiore, come mostrato in
figura $2:$

Stabilisci, motivando adeguatamente la risposta, quale delle seguenti funzioni può
rappresentare adeguatamente il profilo della parte superiore della candela:

$1. y= {\sqrt{a}-x$ se $0 \le x\le$ a
$\sqrt{a}+ x$ se $-a\le x< 0$ con $a\in R, a> 0$

$2. y= a-x^{2}$ in $[-\sqrt{a}; \sqrt{a}$ ] con $a\in R, a> 0$

$3. y= -\sqrt |x| +$ a in $[-a^{2}; a^{2}$ ] con $a\in R, a> 0$

La funzione richiesta è la $1).$ Infatti:
la parte sinistra del grafico $(y= \sqrt{a}+ x$ se $-a\le x< 0)$ si ottiene da quello di $y= \sqrt{x}$
con una traslazione di vettore $(-a; 0)$ e la parte destra $(y= \sqrt{a}-x$ se $0 \le x\le$ a) si
ottiene dalla parte sinistra con una simmetria rispetto all’asse delle $y$ (infatti
nell’equazione si scambia $x$ con $-x).$

Sessione straordinaria 2018 - Problema $1$

I passaggi grafici sono indicati nella figura seguente:

Utilizzando l’espressione analitica trovata, studia eventuali punti di singolarità del profilo
della parte superiore della candela.

Il profilo superiore della candela presenta tre punti di non derivabilità (punti singolari):
$x= 0$ (punto angoloso), $x= \pm$ a (punti a tangente verticale). Infatti:

$y' =$

-
$2\sqrt{a}-x$ se $0 < x<$ a
$2\sqrt{a}+ x$ se $-a< x< 0$

E risulta: $y-$
' $(0) =$
$2\sqrt{a}$ e $y+$
' $(0) = -$
$2\sqrt{a}$ e $y-$
' (a) $= -\infty$ e $y+$
' $(-a) = +\infty$

Per consentire l’inserimento dello stoppino al vertice della candela, è necessario che
l’angolo $\theta$ in figura $1$ non sia maggiore di $30^\circ$ . Determina di conseguenza i possibili valori
del parametro a.

Sia $A= (0; \sqrt{a})$ il punto del profilo appartenente all’asse $y.$ L’angolo $\theta$ è l’angolo formato
dalla retta $r$ per A parallela all’asse $x$ e la tangente $t$ (destra) in A.

Sessione straordinaria 2018 - Problema $1$

La retta $r$ ha equazione: $y= \sqrt{a}$ e la retta $t$ passa per A ed ha coefficiente angolare
$y+$
' $(0) = -$
$2\sqrt{a}$ ; l’equazione di $t$ è quindi: $y-\sqrt{a}= -$
$2\sqrt{a} x$ . Osservando la figura si nota
che: -
$2\sqrt{a}= tg(\pi -\theta$ ), da cui $tg \theta =$
$2\sqrt{a}$ . Deve essere $0 < \theta \le 30^\circ$ quindi:

$0 < tg \theta \le \sqrt{3}$
$3 , 0 <$
$2\sqrt{a}\le \sqrt{3}$
$3 , 3 \le 2\sqrt{3a} , 9 \le 12a: a\ge$
$$ 3 4 . $$

Attribuendo all’altezza e al raggio della parte cilindrica i valori rispettivamente di $8$ e $2,$ in
un’opportuna unità di misura, determina il volume totale della candela. Da questo dato
dipenderanno il peso e il costo di produzione della candela stessa.

Il volume della parte cilindrica è: $V= \pi R2h= 32\pi$ .

Da $y= \sqrt{2} -x$ otteniamo $x= 2 -y^{2}$ ed essendo il raggio della parte cilindrica $2,$ si ha
che $a= 2,$ quindi il volume della parte superiore è:

$V= \pi \int$
$(2 -y^{2})$
$$ \sqrt{2} 0 2 $$
$dx= \pi \int$
$(4 -4y^{2} + y^{4})$
$$ \sqrt{2} 0 $$
$dx= \pi [4y-4$
$3 y^{3} + 1$
$5 y^{5}]$
$$ 0 \sqrt{2} = $$

$= \pi (4\sqrt{2} -8$
$$ 3 \sqrt{2} + 4 $$
$5 \sqrt{2}) = 32\pi \sqrt{2}$
$$ 15 $$

Il volume totale della candela è quindi: V(candela) $= 32\pi +$
$32\pi \sqrt{2}$
$$ 15 $$
$\cong 110 u^{3}$

Il produttore deve inscatolare le candele in confezioni da $3$ e da $4$ candele, posizionando
le candele in verticale, con le basi circolari disposte in modo da occupare il minor spazio
possibile. Si prevedono due possibili configurazioni per posizionare le basi circolari delle
candele all’interno delle scatole, rappresentate in figura $3:$

Sessione straordinaria 2018 - Problema $1$

Fornisci una valutazione numerica dell’efficienza dei due confezionamenti, calcolando il
rapporto tra area occupata dalle basi circolari delle candele inserite nella scatola e area
disponibile in ciascuna delle due configurazioni. Tale rapporto deve essere espresso in
percentuale. $Ai$ fini del calcolo, considera che le celle poligonali evidenziate in grigio sono
rispettivamente un triangolo equilatero e un quadrato.

Configurazione $1:$

La scatola ha forma rettangolare con base $b$ pari a due diametri della base della candela
(quindi $8)$ e altezza $h$ uguale a due raggi più l’altezza di un triangolo equilatero di lato $4$
(che è $4 ∙\sqrt{3}$
$2 = 2\sqrt{3} ): h= 4 + 2\sqrt{3}$ .

Area(base scatola $1) = b∙h= 8(4 + 2\sqrt{3}) \cong 59.71$

Area(base $3$ candele) $= 3(\pi r^{2}) = 12\pi \cong 37.70$

Area(base $3$ candele)
Area(base scatola $1) = 37.70$
$59.71 \cong 0.63 = 63%$

Configurazione $2:$

La scatola ha forma quadrata con lato pari a due diametri (quindi $l= 8)$

Area(base scatola $2) = l^{2} = 64$

Area(base $4$ candele) $= 4(\pi r^{2}) = 16\pi \cong 50.27$

Area(base $4$ candele)
Area(base scatola $2) = 50.27$
$$ 64 $$
$\cong 0.79 = 79%$

Quindi è più efficiente il confezionamento con la configurazione $2.$

Con la collaborazione di Angela Santamaria
