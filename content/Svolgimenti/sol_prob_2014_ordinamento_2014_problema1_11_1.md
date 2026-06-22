---
title: Ordinamento 2014 — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2014_ordinamento_2014_problema1_11_1
of_item: prob_2014_ordinamento_2014_problema1_11_1
prova_id: prova_2014_ordinamento_2014_problema1_11
anno: '2014'
pdf: Prova_Maturita_2014.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2014
---

**Problema:** [[Problemi/prob_2014_ordinamento_2014_problema1_11_1|Ordinamento 2014 — Problema 1 — Problema 1]] · **Prova:** [[Prove/2014_ordinamento_2014_problema1_11|Ordinamento 2014 — Problema 1]]

ORDINAMENTO 2014 - PROBLEMA $1$

Il grafico indicato è quello della funzione integrale

$$ ( ) \int ( ) $$

con $f$ definita nell’intervallo $[0;$ w] e ivi continua e derivabile. Inoltre la curva ha tangente
orizzontale in O, presenta un flesso per $x = h$ ed massimo per $x = k.$

Si determinino $f(0)$ ed f(k); si dica se il grafico della funzione $f$ presenta punti di massimo
o di minimo e se ne tracci il possibile andamento.

Per il teorema di Torricelli risulta $g (x)$ f(x), quindi:
$f(0) g (0) 0$ (perché in O abbiamo tangente orizzontale).
Analogamente:
f(k) $g (k) 0$ (perché per $x=k$ si ha un massimo e la funzione è derivabile).

Eventuali massimi e minimi di f(x).

f(x) cresce dove $f’(x)>0,$ ma $f’(x)=g’’(x)>0$ per $0<x<h$

f(x) decresce dove $f’(x)<0,$ ma $f’(x)=g’’(x)<0$ per $h<x<w$

Pertanto:
$f$ ha un massimo relativo (che è anche assoluto) per $x=h$ con $f(h)>0;$

$f>0$ dove $g’> 0,$ quindi per $0<x<k;$
$f<0$ dove $g’<0,$ quindi per $k<x<w;$
$f= 0$ per $x=0$ e $x=k.$
$f’(w)<0$ come si vede da g’(w), che indica il coefficiente angolare della tangente al grafico
di $g$ in $x=w$

Possibile grafico di f(x):

Si supponga, anche nei punti successivi $3$ e $4,$ che g(x) sia, sull’intervallo considerato,
esprimibile come funzione polinomiale di terzo grado. Si provi che, in tal caso, i numeri $h$
e $k$ dividono l’intervallo in tre parti uguali.

( ) a $+ b + c +$

Dobbiamo dimostrare che:
$h w$
e $k$

Risulta:

$g(0)=0,$ quindi $d=0$
$g (x) 3ax + 2bx+ c; g’(0)=0$ quindi $c=0.$

Pertanto g(x) è del tipo:

( ) a $+ b$ ; ( ) a $+ b ; ( ) 6a + b$

Dalle informazioni date sulla $g,$ risulta:

g(w) $0$
$g (k) 0$
$g (h) 0$
$\implies$ {
$aw + bw 0$
$3ak + 2bk 0$
$6ah+ 2b 0$
$\implies (w$ e $k$ sono $\ne 0)$ {
$aw+ b 0$
$3ak+ 2b 0$
$3ah+ b 0$

Risolvendo il sistema si ottiene:
$aw+ b 0 \implies w -$

$3ak+ 2b 0 \implies k -$

$3ah+ b 0 \implies h -$

Quindi $h$

e $k$

$w.$

Si determini l’espressione di g(x) quando $w=3$ e $g(1)$

e si scrivano le equazioni delle
normali a $\Gamma$ nei punti in cui esso è tagliato dalla retta $y$

( ) a $+ b$

Siccome $g(1)$

risulta a $+ b$

Inoltre è $w -$

$3,$ da cui $b -3a$
Risolvendo il sistema {a $+ b$

$b -3a$
otteniamo a -

e $b 1$

Pertanto: ( ) -

Cerchiamo le intersezioni con $y$

: -

da cui - +
Questa equazione ammette come radice $x=1$ e, abbassandola di grado con la regola di
Ruffini, si ottiene: $(x-1)(x -2x-2) 0$
$x -2x-2 0$ se $x 1 -\sqrt{3} < 0,$ non accettabile e $x 1 + \sqrt{3},$ accettabile.

Abbiamo quindi i punti A ( ;

) e $B ( + \sqrt$ ;

( ) - +

Coefficiente angolare della tangente in A: $g’(1)=1,$ m(normale in A) $= -1$
Coefficiente angolare della tangente in $B: g’(1 + \sqrt{3})= - 2,$ m(normale in $B) = 1/2$
Equazione normale in A: $y -x+$

Equazione normale in $B: y$

$x+$

$-\sqrt$

Il volume richiesto si può calcolare con il “metodo dei gusci cilindrici” mediante
l’integrale:

( ) $\int$ ( ) ( )

$\int (2$ x)g(x)dx

$\int (2 x) (-1$
$3 x + x ) dx$

$2 \int (-1$
$3 x + x ) dx$

$2 [-1$
$12 x + 1$
$x$ ]

$$ 2 1 20 1 $$
$10 d 2 d 2 , l$

IL METODO DEI GUSCI CILINDRICI

Il solido generato dalla rotazione attorno all’asse $y$ di una regione piana può essere visto
come somma di tanti “gusci cilindrici”, cioè cilindri cavi di raggio interno $x,$ raggio esterno
$$ x x $$


e altezza f(x),

Consideriamo il volume finito $V$

di un “guscio” come volume infinitesimo $dV,$ quindi
trattiamo $x$
 come infinitesimo $dx$ ; esso può essere espresso nella forma:

$$ dx x f x x f dx x f dx x x f x x f dx x $$
xdxf
$$ x f x x f x x f dx x dV ) ( 2 ) ( ) ( ) ( 2 ) ( ) ( ) ( ) ( 2 ) ( ) ( ) ( ) ( 2 2 2 2 2 2 $$





















(N.B. il termine
$$ ) ( ) ( 2 x f dx $$

è trascurabile, poiché
$(dx$
è infinitesimo di ordine superiore
rispetto a $dx).$

Quindi
$$ dx x f x dV ) ( $$
$2$


La somma degli infiniti gusci di volume $dV,$ estesa all’intervallo delle ascisse [a;b] in cui è
definita la regione che ruota, cioè il volume del nostro solido, può essere quindi calcolato
mediante il seguente integrale:



$$ b a dx x f x V ) ( $$
$2$

Per un ulteriore approfondimento sul Metodo dei gusci cilindrici si veda la seguente
pagina di Matefilia:

$http://www.matefilia.it/argomen/gusci-cilindrici/metodo-gusci-cilindrici.pdf$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

*Fonte:* [📄 PDF p.11](https://drive.google.com/file/d/1WH26K6aDhT0rm439hBww1SX_Dwrvky9g/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
