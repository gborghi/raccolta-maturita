---
tipo: soluzione
prova_stem: 2014_pni_2014_sessione_straordinaria_problema2_154
pdf: Prova_Maturita_2014.pdf
source: text
title: Soluzioni — 2014_pni_2014_sessione_straordinaria_problema2_154
---
# Soluzioni — 2014_pni_2014_sessione_straordinaria_problema2_154

## Problema 1

PNI 2014 - SESSIONE STRAORDINARIA - PROBLEMA $2$

Sia $f$ la funzione definita da:

f(x) $= \sqrt{1} -x$
$1 + x$

Si studi $f$ e si verifichi che il suo grafico $\gamma$ ha l’andamento riportato in figura. La funzione
$f$ è invertibile? Se sì, quale è l’espressione della sua inversa?

f(x) $= \sqrt{1}-x$
$1+ x$

Dominio

$1 -x$
$1 + x\ge 0 ... -1< x\le 1$

Simmetrie notevoli

$f(-x) = \sqrt$
$1+x$
$1-x$ : la funzione non è pari né dispari.

Intersezioni con gli assi

Se $x=0, y=1;$ se $y=0, x=1.$

Segno della funzione

f(x) $\ge 0$ in tutto il dominio.

Limiti

$$ lim $$
$x\to (-1)+ \sqrt$
$1-x$
$1+x= +\infty x= -1$ asintoto verticale.

Essendo la funzione definita in un intervallo limitato, non possono esserci asintoti
orizzontali né obliqui.

Derivata prima

f'(x) = -
$\sqrt{1}-x$
$x+1 (x+1)^{2} < 0$ per ogni $x$ del dominio : funzione sempre decrescente.

La funzione non è derivabile in $x=1.$
$$ lim $$
$x\to 1 (-$
$\sqrt{1}-x$
$x+1 (x+1)^{2}) = -\infty$ (punto a tangente verticale).

Minimo (assoluto) $0$ per $x=1.$

Derivata seconda

f''(x) $\ge 0$ se
$2x-1$
$(x-1)(x+1) \ge 0, -1 < x\le$
$2;$ quindi:
il grafico volge la concavità verso l’alto se $-1 < x<$
$2$ e verso il basso se
$2 < x< 1$
In $x=$
$2$ si ha un flesso di ordinata $f($
$$ 1 2) = \sqrt{1} 3. $$

Il grafico della funzione è il seguente:

La funzione $f$ è invertibile, poiché è strettamente decrescente.
Cerchiamo la sua funzione inversa

f(x) $= y= \sqrt$
$1-x$
$1+x , y^{2} =$
$1-x$
$1+x , y^{2}(1 + x) = 1 -x, x(y^{2} + 1) = 1 -y^{2}, x=$
$1-y^{2}$
$1+y^{2} = f-1(y)$

Si mostri che l’area della regione $\Sigma$ , delimitata da $\gamma$ e dagli assi cartesiani sull’intervallo
chiuso $[0,1]$ è uguale a
$\pi$
$2 -1.$

$A(\Sigma ) = \int \sqrt{1}-x$
$1+ x dx$
$$ 1 0 $$

Cerchiamo una primitiva della funzione f(x) $= \sqrt$
$1-x$
$1+x$ in $[0;1],$ dove $1 -x\ge 0.$

$\int \sqrt{1}-x$
$1+ xdx= \int \sqrt{1 -x}2$
$1 -x^{2} dx= \int 1 -x$
$\sqrt{1} -x^{2} dx= \int$
$\sqrt{1} -x^{2} dx+ \int$
$-x$
$\sqrt{1} -x^{2} dx=$

= arcsin(x) $+ \sqrt{1}-x^{2}$

Quindi:

$\int \sqrt{1}-x$
$1+ x dx$
$$ 1 0 $$
= [arcsin(x) $-\sqrt{1} -x^{2}]$
$$ 0 1 $$
$= \pi$
$2 -0 + (0 -1) = \pi$
$2-1\cong 057080$

Utilizzando uno dei metodi di integrazione numerica studiati, si sfrutti l’uguaglianza
precedente per calcolare un’approssimazione di
$\pi$

Consideriamo la funzione f(x) $= \sqrt$
$1-x$
$1+x$ e l’intervallo $[0;1];$ calcoliamo $\int \sqrt$
$1-x$
$1+xdx$
$$ 1 0 $$

utilizzando il metodo dei trapezi. Dividiamo l’intervallo in $n=5$ parti uguali.

$\int \sqrt{1} -x$
$1 + x dx$
$$ 1 0 $$
$\cong h[f(x^{0}) + f(x^{5})$
$+ f(x^{1}) + f(x^{2}) + f(x^{3}) + f(x^{4})]$

Dove: $h=$
$1-0$
$$ 5 = 1 $$
$5 = 0.2 x^{0} = 0, x^{1} = 0 + h= 0.2, x^{2} = 0.4, x^{3} = 0.6, x^{4} = 0.8, x^{5} = 1$

$\int \sqrt{1} -x$
$1 + x dx$
$$ 1 0 $$
$\cong 0.2 ∙[f(0) + f(1)$
$+ f(0.2) + f(0.4) + f(0.6) + f(0.8)] =$

$= 0.2 ∙[1 + 0$
$+ 0.816 + 0.655 + 0.5 + 0.33] \cong 0. 56$

Quindi:
$\pi$
$2 -1 \cong 0.56 \implies$
$\pi$
$2\cong 1. 56$ (N.B. Risulta
$\pi$
$2\cong 1.57079$ ...)

La regione $\Sigma$ è la base di un solido $\Omega$ , le cui sezioni, ottenute con piani perpendicolari
all’asse $x,$ sono tutte quadrati. Si calcoli il volume di $\Omega$ .

Detta S(x) l’area della sezione, risulta:

$V(\Omega ) = \int$ S(x)dx
$$ 1 0 $$

Ma il lato della generica sezione quadrata è f(x) $= \sqrt$
$1-x$
$1+x$ , quindi S(x) =
$1-x$
$1+x$ .

$V(\Omega ) = \int$ S(x)dx
$$ 1 0 $$
$= \int 1 -x$
$1 +$ xdx
$$ 1 0 $$
$= \int (-1 + x-2$
$1 + x$
) $dx$
$$ 1 0 $$
$= \int -(1 -$
$1 + x) dx=$
$$ 1 0 $$

$= [-x+ 2 ln|1 + x|]0$
$1 = (-1+ 2 ln(2)) u^{3}\cong 0. 386 u^{3}$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

PNI 2014 - SESSIONE STRAORDINARIA - QUESITI

QUESITO $1$

Un gruppo di attivisti antinucleari ha organizzato una marcia di protesta verso un sito
scelto per la costruzione di una centrale termonucleare. Essi camminano, in pianura, con
velocità costante, dirigendosi in linea retta verso le torri di raffreddamento dell’impianto,
che sono già state costruite. Alle $7$ uno degli organizzatori della marcia antinucleare vede
la cima della torre di raffreddamento con un angolo di elevazione di $2^\circ ; 30$ minuti più tardi
l’ampiezza dell’angolo è pari a $5^\circ$ . Si calcoli a che ora il gruppo raggiungerà il cantiere,
arrotondando il risultato al minuto.

Detta $v$ la velocità di marcia, il tempo per percorrere il tratto $b= BC$ è $tb= 30'$ e risulta:

$b= v∙tb= 30v$

Detto $tc$ il tempo necessario per percorrere il tratto $CD= c$ risulta:

$c=$ v∙tc

Risulta inoltre: $d= c∙tg5^\circ = (b+ c) ∙tg2^\circ$ , da cui: $c=$
$b∙tg2^\circ$
$tg5^\circ -tg2^\circ =$
$30v∙tg2^\circ$
$tg5^\circ -tg2^\circ$ ; quindi:

$c=$ v∙tc $\implies v∙tc=$
$30v∙tg2^\circ$
$tg5^\circ -tg2^\circ \implies tc=$
$30∙tg2^\circ$
$tg5^\circ -tg2^\circ \cong 19.929' \cong 20'$

Il tratto $BD$ è quindi percorso in circa $50’$ e pertanto il gruppo raggiungerà il cantiere alle
ore $7$ e $50$ minuti

QUESITO $2$

Si calcoli il limite della funzione
$(ex-1)^{2}$
$3x^{2}+4x^{3}$ , quando $x$ tende a $0.$

$$ lim $$
$x\to 0$
$(ex-1)^{2}$
$3x^{2}+ 4x^{3}=$ lim
$x\to 0$
$(ex-1)^{2}$
$x^{2}(3 + 4x) =$ lim
$x\to 0 (ex-1$
$$ x ) 2 $$
∙
$3 + 4x= 12 ∙1$
$$ 3 = 1 3 $$

QUESITO $3$

Sia $AB= 2,5 m$ l’altezza di una statua e $BP= 2 m$ l’altezza del piedistallo su cui essa
poggia. Si determini sul piano orizzontale per il punto $P$ d’appoggio del piedistallo il luogo
dei punti tali che da essi la statua sia vista sotto angolo massimo.

Il luogo richiesto è la circonferenza del piano orizzontale per $P$ di centro $P$ e raggio
$b,$ essendo $b$ la distanza del punto O del piano verticale per $P$ da cui la statua è
vista sotto angolo massimo.

Dobbiamo determinare la distanza $b$ in modo che l’angolo $AOB= \beta$ assuma il valore
massimo.
L’angolo APB è retto.
$a+ h= b∙tg(\alpha + \beta ) = 4,5$
$a= b∙tg\alpha = 2 \implies b=$
$tg\alpha$
$\implies$ {
$b=$
$$ 4,5 $$
$tg(\alpha +\beta$ )
$b=$
$tg\alpha$
$\implies$
$$ 4,5 $$
$tg(\alpha +\beta ) =$
$tg\alpha$

$4,5 ∙tg\alpha = 2 ∙tg(\alpha + \beta ) = 2$
$tg\alpha +tg\beta$
$1-tg\alpha tg\beta \implies 4,5 ∙tg\alpha (1 -tg\alpha tg\beta ) = 2tg\alpha + 2tg\beta$

$4,5 ∙tg\alpha -4,5 ∙tg2\alpha tg\beta = 2tg\alpha + 2tg\beta ; tg\beta =$
$2,5∙tg\alpha$
$2+4,5∙tg2\alpha$
Poniamo per comodità $y= tg\beta$ e $x= tg\alpha$ (con $x> 0,$ essendo $0 < \alpha <$
$\pi$
L’angolo $\beta$ è massimo quando lo è $y= tg\beta$ . Analizziamo quindi la funzione:

$y=$
$2,5x$
$2 + 4,5x^{2} =$
$5x$
$4 + 9x^{2}$

Risulta:

Quindi $y' > 0$ se $9x^{2} -4 < 0$ cioè: -
$3 < x<$
$$ 2 3 $$
Quindi $y$ è crescente per $0 < x<$
$3$ e decrescente per $x>$
$3$ : ha quindi massimo
assoluto per $x=$
$3,$ e tale massimo è $ymax= (tg\beta )max=$
$$ 5 12. $$

L’angolo massimo sotto cui è vista la statua è $\beta =$ arct(
$12)$ e la distanza di O da $P$ è:
$b=$
$tg\alpha =$
$$ 2 2 3 $$
$= 3 m.$

Il luogo richiesto è pertanto la circonferenza del piano orizzontale per $P$ che ha centro in
$P$ e raggio $3$ metri.
QUESITO $4$

Si scrivano le equazioni della tangente e della normale al diagramma della funzione:
f(x) $= (3$
$4 x^{2} -1$
$4) ln1 + x$
$1 -x-3$
$2 x$
nel punto $P$ di ascissa $x = 0.$

Risulta $f(0) = 0.$
Calcoliamo la derivata della funzione:

$f'(0) = -2$

Equazione tangente in $P: y-0 = -2(x-0) \implies y= -2x$
Equazione normale in $P: y-0 = -$
$2 (x-0) \implies y= -$
$2 x$

QUESITO $5$

La regione del I quadrante delimitata dall’iperbole di equazione $9x^{2} -4y^{2} = 36$ e
dall’asse $x$ nell’intervallo $2 \le x\le 4$ , è la base di un solido $S,$ le cui sezioni, ottenute con
piani perpendicolari all’asse $x,$ sono tutte esagoni regolari. Si calcoli il volume di $S.$

L’iperbole può essere scritta nella forma:
$$ x^{2 $$
$4 -$
$$ y^{2 $$
$9 = 1;$ si tratta quindi di un’iperbole riferita
agli assi, con asse trasverso l’asse $x$ e semiassi $a= 2$ e $b= 3.$ Il suo grafico è il seguente:

Il volume di $S$ si ottiene calcolando il seguente integrale:

$\int$ A(x)dx
$$ 4 2 $$
, essendo A(x) l’area dell’esagono regolare di lato $AB= y,$ con $y$ ordinata del
punto $B$ dell’iperbole e $2 < x< 4.$

A(x) $= 1$
$2 (6$ ∙AB
̅̅̅̅) $∙h= 3$ ∙AB
̅̅̅̅ ∙AH
̅̅̅̅ $∙\sqrt{3} = 3$ ∙AB
̅̅̅̅ ∙AB
̅̅̅̅
$∙\sqrt{3} =$
$$ = 3\sqrt{3} 2 $$
∙AB
$̅̅̅̅2 = 3\sqrt{3}$
$∙y^{2}$

Da $9x^{2} -4y^{2} = 36$ ricaviamo $y^{2} =$
$4 x^{2} -9$
Quindi: A(x) =
$$ 3\sqrt{3} 2 ( 9 $$
$4 x^{2} -9) =$
$$ 27 $$
$8 \sqrt{3}(x^{2} -4)$

Pertanto il volume del solido $S$ è dato da:

V(S) $= \int$ A(x)dx
$$ 4 2 = \int 27 $$
$8 \sqrt{3}(x^{2} -4)dx$
$$ 4 2 = 27 $$
$8 \sqrt{3} [x^{3}$
$3 -4x]$
$$ 2 4 = 27 $$
$8 \sqrt{3} ∙32$
$= 36\sqrt{3} u^{3} \cong 62.354 u^{3} =$ V(S)

QUESITO $6$

Si determini in gradi e primi (sessagesimali) l’ampiezza dell’angolo Ψ sotto il quale la
curva di equazione
f(x) $= x^{2} + 1$
$2x+ 3$
taglia l’asse delle $y.$

La curva taglia l’asse delle $y$ nel punto $P= (0;$
$$ 1 3). $$
La tangente in $P$ alla curva ha coefficiente angolare $m= f'(0).$

$m= f'(0) = -$
$9$ ; quindi la tangente in $P$ forma con il semiasse positivo dell’asse delle $x$
un angolo $\beta = arctg(-$
$9) = 167.47^\circ$ .
L’angolo Ψ sotto cui la curva taglia l’asse delle $y$ è il
complementare $\alpha$ di $\gamma = 12.53^\circ$ (supplementare di
$\beta$ ).

Quindi Ψ $= \alpha = 77.47^\circ = 77^\circ + (0.47 ∙60)' =$
$= 77^\circ + 28.2' = 77^\circ 28'$

QUESITO $7$

Tenuto conto che:
$\pi$
$$ 4 = \int 1 $$
$x^{2} + 4x+ 5$
$-1$
$-2$
$$ dx $$

si calcoli un’approssimazione di
$\pi$
$4,$ utilizzando uno dei metodi di integrazione numerica
studiati.

Consideriamo la funzione f(x) =
$x^{2}+4x+5$ e l’intervallo $[-2;-1];$ calcoliamo $\int$
$x^{2}+4x+5$
$-1$
$-2$
$$ dx $$

utilizzando il metodo dei trapezi. Dividiamo l’intervallo in $n=5$ parti uguali.

$$ \int 1 $$
$x^{2} + 4x+ 5$
$-1$
$-2$
$dx\cong h[f(x^{0}) + f(x^{5})$
$+ f(x^{1}) + f(x^{2}) + f(x^{3}) + f(x^{4})]$

Dove: $h=$
$-1-(-2)$
$$ 5 = 1 $$
$5 = 0.2 x^{0} = -2, x^{1} = -2 + h= -1.8, x^{2} = -1.6, x^{3} = -1.4,$
$x^{4} = -1.2, x^{5} = -1$

$$ \int 1 $$
$x^{2} + 4x+ 5$
$-1$
$-2$
$dx\cong 0.2 ∙[f(-2) + f(-1)$
$+ f(-1.8) + f(-1.6) + f(-1.4) + f(-1.2)] =$

$= 0.2 ∙[1 + 0.5$
$+ 0.962 + 0.862 + 0.735 + 0.610] \cong 0. 784$

Quindi:
$\pi$
$4 \cong 0. 784$ (N.B. Risulta
$\pi$
$4= 0.78539$ ...)

QUESITO $8$

Si dica se è possibile che sia:
$(n$
$k) = (n+ 1$
$k+ 1)$

Risulta:

$(n+ 1$
$k+ 1) =$
$(n+ 1)!$
$(k+ 1)! (n+ 1 -k-1)! =$
$n! (n+ 1)$
$k! (k+ 1)(n-k)! = (n$
$k) (n+ 1)$
$(k+ 1)$

Quindi l’uguaglianza risulta verificata solo se
$(n+1)$
$(k+1) = 1 \implies n+ 1 = k+ 1 \implies n= k$

QUESITO $9$

Un solido $\Omega$ è formato da un cilindro equilatero di raggio $r$ e da due coni equilateri, aventi
le basi coincidenti con quelle del cilindro ed esterni al cilindro. Se si sceglie a caso un
punto all’interno di $\Omega$ , qual è la probabilità che tale punto risulti interno al cilindro?

La probabilità richiesta è data dal rapporto tra il volume “favorevole”, quello del cilindro,
ed il volume “possibile”, quello del solido.

Ricordiamo che il cilindro equilatero ha il diametro di base uguale all’altezza.

V(cilindro) $= \pi R2h= \pi R^{2} ∙2R= 2\pi R^{3}$

Il cono equilatero ha l’apotema uguale al diametro di base, quindi l’altezza $h$ è data da:

$h= \sqrt{4R}^{2} -R^{2} = R\sqrt{3}$

$V= 1$
$3 \pi R2h= 1$
$3 \pi R^{2} ∙R\sqrt{3} = \sqrt{3}$
$3 \pi R^{3}$

Il solido $\Omega$ ha volume: $2\pi R^{3} + 2 (\sqrt{3}$
$3 \pi R^{3}) = 2\pi R^{3} (1 + \sqrt{3}$

La probabilità richiesta è quindi:

$p=$ V(cilindro)
$V(\Omega$ )
$2\pi R^{3}$
$2\pi R^{3} (1 + \sqrt{3}$
$$ 3 ) = 3 3 + \sqrt{3 $$
$\cong 0.634 = 63.4$ %

QUESITO $10$

Qual è il numero delle cinquine che si possono ottenere completando l’ambo ${3,25}?$

Basta contare le combinazioni (senza ripetizioni) a tre a tre che si possono fare con gli $88$
numeri rimanenti:

$C88,3 = (88$
$3 ) = 88 ∙87 ∙86$
$3!$
$$ = 109736 $$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

PNI $20014$

QUESITO $1$

Per il teorema dei seni risulta:

da cui sen $\alpha =$

Quindi $\alpha =$ arcsen(

) che porta alle due soluzioni:

$\alpha \cong 41,810 \cong 41 49 \alpha \cong 138 11'$

QUESITO $2$

I poliedri regolari (solidi platonici) sono $5,$ e tra essi non $ce$ ne sono a facce
esagonali.
Poiché in ogni vertice di un poliedro devono convergere almeno tre facce (non
complanari), la somma dei loro angoli deve essere inferiore $ad$ un angolo giro.
Le facce possono essere solo triangoli equilateri (tetraedro, ottaedro, icosaedro),
quadrati (esaedro o cubo), pentagoni regolari (dodecaedro).
Con tre facce esagonali avremmo come somma almeno $120^\circ x^{3}=360^\circ$ , quindi non esiste
un poliedro regolare a facce esagonali.

Si hanno infatti le seguenti possibilità:

$1.$ Le facce del poliedro sono triangoli (equilateri): le facce degli angoloidi possono
essere $3 (3x^{60}^\circ =180^\circ <360^\circ ), 4 (4x^{60}^\circ =240^\circ <360^\circ ), 5 (5x^{60}^\circ =300^\circ <360^\circ$ ), ma non
di più: con $6$ facce avremmo $6x^{60}^\circ =360^\circ$ che non è minore di $360^\circ$ .
Abbiamo quindi tre poliedri regolari con le facce triangolari: il tetraedro, l’ottaedro
e l’icosaedro.
$2.$ Se le facce del poliedro sono quadrate, le facce degli angoloidi non possono
essere più di $3 (3x^{90}^\circ =270^\circ$ , ma $4x^{90}^\circ =360^\circ$ ): in questo caso si ha l’esaedro (il
cubo).
$3.$ Se le facce del poliedro sono pentagoni (regolari), ogni angoloide può avere al
massimo $3$ facce $(3x108^\circ =324^\circ$ ): in questo caso si ha il dodecaedro regolare.
$4.$ Non possono esistere poliedri regolari le cui facce abbiamo più di $5$ lati (per
esempio già con l’esagono avremmo $3x120^\circ =360^\circ$ ).

QUESITO $3$

Venti palline sono poste in un’urna. Cinque sono rosse, cinque verdi, cinque gialle e
cinque bianche. Dall’urna si estraggono a caso, senza reimbussolamento, tre palline. Si
valutino le seguenti probabilità:
 esattamente una pallina è rossa
 le tre palline sono di colori differenti.

$R=5, V=5, G=5, B=5$

Probabilità che esattamente una su tre sia rossa.

Le rosse sono $5,$ le altre due, non rosse, sono le combinazioni di $15$ oggetti $(V+G+B)$ a
due a due.
Casi favorevoli $= 5$ ∙C , $= 5$ ∙(
) $= 5 ∙105 = 525$
I casi possibili sono le combinazioni di $20$ oggetti (tutte le palline) a $3$ a $3.$
Casi possibili: $C , =$ (
$$ ) = 1140 $$

P(una sola rossa) =

$\cong 46%$

Secondo metodo

La probabilità che la prima pallina estratta sia rossa è

La probabilità che la seconda pallina sia NON ROSSA è

La probabilità che la terza pallina estratta sia NON ROSSA è

La probabilità che sia rossa SOLO la prima pallina è quindi:

∙

∙

Siccome la pallina rossa può essere SOLO la prima o SOLO la seconda o SOLO la terza,
la probabilità richiesta è: $3$ ∙(

∙

∙

Probabilità che le tre palline siano di colori differenti.

$p(3 rosse)= p(3$ verdi) $= p(3$ gialle) $= p(3$ bianche) =
$C$ ,
$C$ ,
$$ = ( ) ( ) = 10 1140 $$

$p(1$ di un colore e $2$ dell’altro colore) $= 4$ ∙
( ∙ ∙ , )
$= 60$ ∙

La probabilità richiesta è quindi :

$1 -10$
1140 $∙4 -10$
$19 = 1 -2$
$57 -10$
$$ 19 = 25 $$
$57 \cong 44%$

Secondo metodo

La probabilità che la prima pallina sia rossa è:

La probabilità che la seconda NON SIA ROSSA:

La probabilità che la terza pallina NON SIA ROSSA NE’ DEL SECONDO COLORE
USCITO è:

Quindi la probabilità che si abbiano tre colori diversi con la prima rossa è:

∙

∙

Siccome la prima pallina può essere di quattro colori diversi, la probabilità richiesta è:

$4∙($

∙

∙

QUESITO $4$

Il solido in questione può essere visto come somma di infiniti rettangoli di dimensioni f(x)
ed h(x), quindi il suo volume si ottiene calcolando il seguente integrale:

$$ = \int $$

$= \int$ e

$∙1$

$= -[ \int$ e

$∙(-1$

$= -[e$

$= -(e -e$
) = e
$-e =$

$\sqrt -$

$\cong 0.239$

QUESITO $5$

Il teorema euclideo in base al quale la somma degli angoli interni di un triangolo è uguale
a $180^\circ$ , nelle geometrie non euclidee, per la diversa nozione di piano che ne sta alla
base, viene modificato in questi termini. Per la geometria di Riemann quella somma è
sempre maggiore di $180^\circ$ ; per quella di Lobacevskij essa è sempre minore di $180^\circ$ .
La cosa non risulterà difficile se si considera un triangolo una volta disegnato su una
superficie sferica (geometria di Riemann) e una volta disegnato sulla superficie esterna di
una trombetta (secondo il modello della geometria di Lobacevskij); in entrambi i casi
avremo un triangolo con lati curvilinei.

Approfondimento sulle geometrie non euclidee
$http://www.matefilia.it/argomen/euclide/sommario.htm$

QUESITO $6$

Indicando con $x$ il diametro di base del cilindro, con $y$ la sua altezza e con $R$ il raggio
della sfera, si ha:

$$ 2 2 2 $$
$4R$
$$ y x $$



Il volume del cilindro è
$$ max 4 2 $$


$$ y x V $$

se lo è
$$ 2 1 2 2 2 ) $$
$(y$
$$ x y x $$

: essendo il prodotto di due
potenze (positive) di grandezze a somma costante (
$x$ e
$y$ ), il massimo si avrà quando
le basi sono proporzionali agli esponenti, cioè
$$ 2 1 1 2 2 y x $$

che equivale a
$$ 2 2 $$
$2y$
$x$ 
Sostituendo nella (*) si ottiene
$$ 2 3 2 $$


$$ R y e 2 2 2 $$


$$ y x . $$
Il cilindro di volume massimo avrà quindi: raggio di base $(x/2)$ uguale a
$2$ e altezza $(y)$
uguale a $2.$

Con l’uso delle derivate:

$$ Da 2 2 2 $$
$4R$
$$ y x $$


si ricava
$$ 2 2 2 4 y R x $$


, quindi:

$$ y y R y x V 4 ) 4 ( 4 2 2 2 $$





, che è massimo se lo è:

$z= y 4R -y$ ), con $0\le y\le R$

$z = 4 R -3 y \ge 0,$
$0 \le y\le$
$$ \sqrt $$
ossia (essendo $R= \sqrt{3} ), 0 \le y\le 2$

Quindi $z$ è crescente per $0 \le y\le 2$ e decrescente per $2 \le y\le 2\sqrt{3}$
Pertanto $z$ ( e quindi anche $V)$ è massima quando l’altezza vale $2;$ il raggio di base $(x/2)$
vale $\sqrt{2}.$

QUESITO $7$

$f' x = lnx-x+$

Studiamo graficamente il segno della derivata:

$lnx-x+ > 0 \implies ln x> x-$

Risulta $ln x> x-$ per $a< < b$ con $0 < a< 1$ e $3 < b< 4$

Quindi la funzione è crescente per $a< < b$

e decrescente per $0 < <$ a e $> b$

Pertanto la $f$ ha un minimo relativo per $x= a\cong 0, 159$ (risposta $D)$

(ed un massimo per $= b\cong 3,146$ .

QUESITO $8$

I casi possibili nel lancio di tre dadi sono $6x6x^{6}=216.$

I casi favorevoli che danno $9$ sono

dado $1$
dado $2$
dado $3$
$n.$ casi
$$ 1 2-3-4-5-6 6-5-4-3-2 5 2 1-2-3-4-5-6 6-5-4-3-2-1 6 3 1-2-3-4-5 5-4-3-2-1 5 4 1-2-3-4 4-3-2-1 4 5 1-2-3 3-2-1 3 6 1-2 2-1 2 $$
Totale casi favorevoli con somma $9$
$$ 25 $$

Quindi la probabilità di ottenere $9$ è $p 9 =$
$1 \cong 0. 11 \cong 11.$ %

I casi favorevoli che danno $10$ sono

dado $1$
dado $2$
dado $3$
$n.$ casi
$$ 1 3-4-5-6 6-5-4-3 4 2 2-3-4-5-6 6-5-4-3-2 5 3 1-2-3-4-5-6 6-5-4-3-2-1 6 4 1-2-3-4-5 5-4-3-2-1 5 5 1-2-3-4 4-3-2-1 4 6 1-2-3 3-2-1 3 $$
Totale casi favorevoli con somma $10$
$$ 27 $$

Quindi la probabilità di ottenere $10$ è $p 10 =$

$1 = 0. 1 5\cong 1 . 5%$
Quindi $p 9 < p 10$ .

QUESITO $9$

Gli insiemi $Z$ e $Q$ hanno la stessa cardinalità di $N$ (si dice anche che sono equipotenti),
mentre $R$ ha cardinalità superiore: la potenza del continuo (come dimostrato da Cantor).

Ciò vuol dire che $Z$ e $Q$ possono essere posti in corrispondenza biunivoca con $N,$ mentre
$R$ no.

La corrispondenza biunivoca tra $Z$ ed $N$ si può facilmente verificare associando gli
elementi della prima riga con quelli corrispondenti nella seconda riga:

$0, 1, 2, 3, 4,$ ...........
$0, +1, -1, +2, -2,$

La corrispondenza biunivoca tra $Q$ ed $N$ è stata dimostrata da Cantor (primo metodo
diagonale).

La NON corrispondenza biunivoca tra $R$ ed $N$ è stata dimostrata anch’essa da Cantor
(secondo metodo diagonale).

Approfondimento

$ftp://ftp.dii.unisi.it/pub/users/pnistri/am1_12-13/Appunti$ anni $precedenti/potenza$ insiemi numerici.pdf

QUESITO $10$

Dobbiamo trovare a e $b$ in modo che sia

$$ lim $$
$x 0$
$\sqrt{a}+ bx-$
$$ x = 1 $$

Deve essere $\sqrt{a}-2 = 0,$ altrimenti il limite sarebbe infinito; quindi $\sqrt{a}= 2, a= 4$

$$ lim $$

$\sqrt{a}+ b -2$

= lim

$\sqrt{4} + b -2$

= lim

$2\sqrt{1} + b$
$4 -2$

= lim

$2 (\sqrt{1} + b$
$4 -1)$

$$ lim $$

$2 (\sqrt{1} + b$
$4 -1)$
$$ b 4 $$
∙b
$4 = 2 ∙1$
$2$ ∙b
$4 = b$
$4 = 1$ se $b= 4$

N.B.

E’ stato usato il seguente limite notevole:

$$ lim $$

$1 + -1$

$= k$

ma si può arrivare al risultato anche razionalizzando il numeratore:

$$ lim \sqrt $$

= lim
$(\sqrt )(\sqrt$ )
$∙(\sqrt$ )
= lim

$∙(\sqrt ) =$
= lim

$∙(\sqrt ) =$

$= 1$ se $b= 4$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri
