---
tipo: soluzione
prova_stem: 2015_simulazione___22_aprile_2015_problema2_132
pdf: Prova_Maturita_2015.pdf
source: text
title: Soluzioni — 2015_simulazione___22_aprile_2015_problema2_132
---
# Soluzioni — 2015_simulazione___22_aprile_2015_problema2_132

## Problema 1

SIMULAZIONE $- 22$ APRILE 2015 - PROBLEMA $2:$ IL VASO

L'azienda in cui lavori produce articoli da giardino e sei stato incaricato di rivedere il
disegno di un vaso portafiori realizzato da un tuo collega. Il vaso, di altezza $h = 18 cm,$ è
composto da due tronchi di cono aventi la base maggiore in comune e il disegno che $ti$ è
stato fornito (figura $1)$ ne rappresenta la sezione longitudinale:

figura $1$

Nel riferimento cartesiano utilizzato in figura $1$ l'unità corrisponde a $1 cm.$ Il direttore del
tuo reparto $ti$ chiede di:

$1)$ verificare il valore del volume del vaso progettato dal tuo collega.

Calcoliamo il volume del vaso, ricordando che il volume di un tronco di cono è dato da

$V= 1$
$3 \pi ∙(R^{2} + r^{2} + Rr)$ ∙h
V(vaso) $= 1$
$3 \pi ∙(32 + 62 + 3 ∙6) ∙12 + 1$
$3 \pi ∙(42 + 62 + 4 ∙6) ∙6 = 404 \pi cm3 \cong$ 1269 $cm3$
V(vaso) $\cong$ 1269 $cm3 = 1.269 dm3 = 1.269 litri< 1.5$ litri

Se il volume risulta minore di $1,5$ litri, bisogna rendere il vaso più alto, fino a fargli
raggiungere il volume di $1,5$ litri, lasciando però invariate le misure dei diametri
corrispondenti $ai$ punti A, $S$ e $V,$ rendendo inoltre la forma meno spigolosa. Per chiarire
meglio la sua richiesta, il direttore $ti$ dà un suo disegno, modificato rispetto al precedente
(figura $2).$

figura $2$

La curva passante per i punti $S, V$ e $G,$ disegnata dal direttore, può essere approssimata
con un'iperbole di equazione $y=a/x.$

$2)$ Determina, approssimando per eccesso al millimetro, i valori delle coordinate $h$ e
$k$ del punto $G$ che consentono di soddisfare la richiesta di modifica del vaso.

Il primo tronco ha volume
$3 \pi ∙(32 + 62 + 3 ∙6) ∙12 = 252 \pi \cong 792 cm3$ , quindi la parte di
vaso da modificare deve avere volume pari a: 1500 $cm3 - 792 cm3 = 708 cm3$

Il volume della parte di vaso da modificare si ottiene facendo ruotare di un giro completo
attorno all’asse $x$ l’arco di iperbole di equazione $y=a/x$ nell’intervallo $12 \le x\le h$ :

$V= \pi \int f^{2}(x)dx$
$$ b a $$
$= \pi \int a^{2}$
$x^{2} dx$
$$ h 12 $$
$= -\pi a^{2} [1$
x]
$$ 12 h $$
$= -\pi a^{2} ∙[1$
$h-1$
$12] = \pi a^{2} ∙h-12$
$12h$
$$ = 708 $$
Siccome l’iperbole deve passare per il punto di coordinate $(18; 4),$ deve essere:

$$ 4 = a $$
$18 \implies a= 72$ . Da $\pi a^{2}$ ∙
$h-12$
$12h= 708$ si ottiene:

$\pi ∙722 ∙h-12$
$12h$
$= 708 \implies 1357.168 (h-12$
) $= 708 \implies h-12 =$
$h∙708$
$$ 1357.168 $$

$h-12 = 0.522 h \implies h=$
$$ 12 $$
$0.478 \cong 25.1 cm$

Imponendo il passaggio per il punto (h,k) all’iperbole di equazione $y=$
$$ 72 $$
$x$ si ha:
$k=$
$$ 72 $$
$25.1 = 2.9 cm$ . Quindi il punto $G$ ha coordinate $G= (25.1; 2.9)$ .

Dopo che un primo esemplare del vaso è stato prodotto, il responsabile della produzione
$fa$ rilevare che l'eccessiva spigolosità del profilo del vaso nel punto $S$ ne rende costosa la
produzione.

$3)$ Considera la funzione il cui grafico è rappresentato nella figura $2,$ nel semipiano
$y\ge 0;$ descrivi la natura del punto $S$ giustificando le tue affermazioni;

In $S=(12;6)$ la funzione è continua ma non è derivabile, in particolare $S$ è un punto
angoloso. Infatti:
la retta $AS$ ha coefficiente angolare $m=$
$6-3$
$12-0 =$
$4$ quindi:
$y-$
' $(12) = 1$
La derivata della funzione di equazione $y=$
$$ 72 $$
$x$ è $y' = -$
$$ 72 $$
$x^{2}$ pertanto:
$y+$
' $(12) = -72$
$144 = -1$

La derivata sinistra e la derivata destra in $S$ esistono ma sono diverse, quindi $S$ è un
punto angoloso. Le due semitangenti (destra e sinistra) in $S$ formano un angolo tale che:

$tg\alpha = | m^{2} -m^{1}$
$1 + m2m^{2}$
$$ | = | 1 4 + 1 2 $$
$1 -1$
$$ 8 | = 6 $$
$7 \implies \alpha = arctg(6$
$7) \cong 40^\circ 36'$

$4)$ lasciando ancora invariate le misure dei diametri corrispondenti $ai$ punti A e $S,$
individua la funzione razionale intera di secondo grado che consente di
congiungere i punti A e $S,$ eliminando il punto angoloso in $S;$ disegna la nuova
sagoma del vaso e individua il punto della curva $AS$ in cui la pendenza del grafico
è rimasta immutata rispetto alla sagoma precedentemente proposta.

La funzione richiesta è del tipo $y=$ f(x) $= ax2 + bx+ c$ .
Passaggio per $A=(0;3): 3 = c$ .
Passaggio per $S=(12;6): 6 = 144a+ 12b+ 3$
Affinché in $S$ scompaia la non derivabilità deve essere $f-$
$'(12) = -$
$2$ , quindi:

$(2ax+ b)x=12 = 24a+ b= -$
$2$ , pertanto:

$6 = 144a+ 12b+ 3$
$24a+ b= -1$
{ $48a+ 4b= 1$
$48a+ 2b= -1$ {
$b= 1$
$a= -1$
$$ 16 $$

La funzione richiesta ha quindi equazione:

$y=$ f(x) $= -1$
$16 x^{2} + x+ 3$

L’equazione della funzione che rappresenta la nuova sagoma del vaso (per $y\ge 0)$ è
quindi:
$y=$ g(x) = {
$-1$
$16 x^{2} + x+ 3$ se $0 \le x\le 12$
$$ 72 $$
$x$ se $12 < x\le 25.1$

Se $0 \le x\le 12$ abbiamo una parabola con la concavità verso il basso e vertice di
coordinate:
$xV= -b$
$2a= 8$ e $yV= g(8) = 7$
La nuova sagoma del vaso è quindi rappresentata dal grafico della $g$ e dal suo
simmetrico rispetto all’asse $x:$

Dobbiamo ora individuare il punto della curva $AS$ in cui la pendenza del grafico è rimasta
immutata rispetto alla sagoma precedentemente proposta.

Ciò equivale a trovare il punto della parabola in cui la tangente è parallela alla retta $AS,$
cioè il punto della curva di equazione
$y=$ f(x) $= -1$
$16 x^{2} + x+ 3$

con derivata pari al coefficiente angolare della retta $AS,$ che, come già visto nel punto $3,$ è
uguale a $1/4$ . Quindi:

f'(x) $= -1$
$8 x+ 1 = 1$
$4$ se $x= 6$ , da cui $y= f(6) = 27$
$$ 4 = 6.75 $$

Il punto $P$ richiesto ha quindi coordinate $P= (6;$
$$ 27 4 ). $$

Notiamo che il punto $P$ è quello che soddisfa il teorema di Lagrange per la funzione
f(x) = -
$16 x^{2} + x+ 3$ nell’intervallo $[0; 12].$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

SIMULAZIONE $- 22$ APRILE 2015 - QUESITI

$$ Q^{1 $$

Assegnata la funzione

$y=$ f(x) $= ex3-8$

$1)$ verificare che è invertibile;
$2)$ stabilire se la funzione inversa $f-1$ è derivabile in ogni punto del suo dominio di definizione,
giustificando la risposta.

$1)$ La funzione è definita, continua e derivabile su tutto l’asse reale. Risulta:
f'(x) $= (3x^{2})ex3-8 \ge 0$ per ogni $x,$ quindi la funzione è sempre crescente in senso stretto, quindi è
invertibile (cioè realizza una corrispondenza biunivoca tra dominio e codominio).

$2)$ Posto $x= f-1(y),$ risulta x'(y) =
y'(x) e siccome y'(x) $= 0$ se $x= 0 , f-1$ non è derivabile in

corrispondenza di $x=0,$ cioè in $y= f(0) = e-8.$
Notiamo che il dominio della $f-1$ è il codominio della $f,$ che è $y>0.$ Anche se non richiesto, determiniamo
l’espressione analitica della funzione inversa.

Da $y=$ f(x) $= ex3-8$ ricaviamo: $x^{3} -8 =$ ln(y) , da cui $x= f-1(y) = \sqrt{8} + ln (y)$

$$ Q^{2 $$

Data l'equazione differenziale del primo ordine

$y' =$
$2x-1$

determinare la soluzione del problema di Cauchy, tenendo conto della condizione iniziale $y(1)= 0.$

Da $y' =$
$2x-1$ ricaviamo:

$y= \int$
$2x-1 dx=$
$2 ln|2x-1| + k$ e dovendo essere $y(1) = 0$ otteniamo: $0 = k$ .

La soluzione richiesta, definita in un intorno di $x=1,$ quindi dove $2x-1>0,$ è :

$y= 1$
$2 ln (2x-1)$

$$ Q^{3 $$

Di quale delle seguenti equazioni differenziali è soluzione la funzione $y= ln(x-3)$ ?

a) $(x-3)$ ∙y'' $-(x-3)^{2}$ ∙y' $+ 2 = 0$
$b)$ x∙y'' $-(x-3)$ ∙y' $+ x+ 2 = 0$
$c) (x-3)^{2}$ ∙y'' $-(x-3)$ ∙y' $+ 2 = 0$
$d) x^{2}$ ∙y'' $+ y' + 3x-9 = 0$

Giustificare la risposta.

Notiamo che la funzione è continua per $x>3,$ ed ammette derivata prima e derivata seconda, che sono:

$y' =$
$x-3$ y'' = -
$(x-3)^{2}$

a) $(x-3)$ ∙y'' $-(x-3)^{2}$ ∙y' $+ 2 = -$
$x-3 -(x-3) + 2 \ne 0$

$b)$ x∙y'' $-(x-3)$ ∙y' $+ x+ 2 = -$
$(x-3)^{2} -1 + x+ 2 \ne 0$

$c) (x-3)^{2}$ ∙y'' $-(x-3)$ ∙y' $+ 2 = -1 -1 + 2 = 0$ : verificata

$d) x^{2}$ ∙y'' $+ y' + 3x-9 =$
$-x^{2}$
$(x-3)^{2} +$
$x-3 + 3x-9 \ne 0$

La soluzione è quindi la $c).$

$$ Q^{4 $$

Verificare il carattere della serie

$$ \sum 1 $$
$n^{2} + 7n+ 12$
$+\infty$
$n=0$

e, nel caso in cui sia convergente, determinare la sua somma.

Notiamo che il termine generale $an=$
$n^{2}+7n+12$ è asintotico a
$n^{2}$ , quindi la serie è convergente.

Si tratta di una “serie telescopica”, la cui somma si ottiene procedendo nel modo seguente:

Poiché $n^{2} + 7n+ 12 = (n+ 3)(n+ 4)$ , risulta:

$n^{2} + 7n+ 12 =$
$(n+ 3)(n+ 4) =$
$n+ 3 +$
$n+ 4 = a(n+ 4) + b(n+ 3)$
$(n+ 3)(n+ 4)$
$= n(a+ b) + 4a+ 3b$
$(n+ 3)(n+ 4)$

Da cui, dato che l’uguaglianza deve essere verificata per ogni valore accettabile di $n:$

{ $a+ b= 0$
$4a+ 3b= 1 {b= -a$
$a= 1 {b= -1$
$a= 1$

Pertanto:

$an=$
$n^{2} + 7n+ 12 =$
$n+ 3 +$
$n+ 4 =$
$n+ 3 -$
$n+ 4$

La successione delle somme parziali è quindi:

$sn= a^{0} + a^{1} + ⋯+ an= (1$
$3 -1$
$$ 4) + (1 $$
$4 -1$
$5) + ⋯+$ (
$n+ 2 -$
$n+ 3) +$ (
$n+ 3 -$
$n+ 4) = 1$
$3 -$
$n+ 4$

Risulta:

$$ lim $$
$n\to +\infty sn=$ lim
$n\to +\infty (1$
$3 -$
$n+ 4) = 1$

Quindi la serie è convergente ed ha per somma
$$ 1 3 . $$

$$ Q^{5 $$

Per progettare un sito web è necessario generare dei codici unici di accesso. Si vogliono utilizzare, a tale
scopo, due lettere maiuscole dell'alfabeto inglese seguite da una serie di numeri compresi tra $0$ e $9.$ Tutti i
codici di accesso dovranno avere lo stesso numero di cifre ed è ammessa la ripetizione di lettere e numeri.
Qual è il numero minimo di cifre da impostare in modo da riuscire a generare almeno $5$ milioni di codici di
accesso diversi? Giustificare la risposta.

La scelta delle due lettere (tra le $26$ possibili) è data dalle disposizioni con ripetizioni di $26$ oggetti a due a
due:

$D26,2$
$$ r = 262 = 676 $$

La scelta di $n$ cifre $(1 \le n\le 10)$ è data dalle disposizioni con ripetizioni di $10$ oggetti $ad n ad n:$

$D^{10},n$
$= 10n$

Il numero di codici unici possibile è dato da:

$D26,2$
$∙D^{10},n$
$= 676 ∙10n$

Si vuole che i codici siano almeno $5$ milioni, quindi deve essere:

$676 ∙10n\ge 5 ∙106 n\ge log10$
$5∙106$
$676 = log105 + 6 -log10676 \cong 3.87$ .

Quindi $n$ deve essere almeno $4:$ i codici devono essere formati da almeno $6$ caratteri $(2$ lettere seguite da
almeno $4$ cifre).

$$ Q^{6 $$

La base di un solido, nel piano Oxy, è il cerchio avente come centro l'origine e raggio $3.$ Le sezioni del
solido perpendicolari all'asse delle $x$ sono quadrati.
Calcolare il volume del solido.

La circonferenza di centro O e raggio $3$ ha equazione:

$x^{2} + y^{2} = 9$ , da cui $y^{2} = 9 -x^{2}$

La sezione quadrata ha lato $2y,$ essendo $y$ l’ordinata $de$ generico punto della
circonferenza del semipiano $y\ge 0$ . Il quadrato ha quindi area:

$A= (2y)2 = 4y^{2} = 4(9 -x^{2}) =$ A(x)

Il volume del solido è dato da:

$V= \int$ A(x)dx
$$ b a $$
$= 2 \int$ A(x)dx
$$ 3 0 $$
$= 2 \int 4(9 -x^{2}) dx$
$$ 3 0 $$
$= 8 \int (9 -x^{2}) dx$
$$ 3 0 $$
$= 8 [9x-x^{3}$
$$ 3 ] 0 3 = $$

$= 8(27 -9) = 144 u^{3} = V$

$$ Q^{7 $$

Trovare l'equazione del piano tangente alla superficie sferica avente come centro l'origine e raggio $2,$ nel
suo punto di coordinate $(1,1,z),$ con $z$ negativa.

La sfera ha equazione: $x^{2} + y^{2} + z^{2} = 4;$ ponendo $x=1$ e $y=1$ otteniamo $z= \pm \sqrt{2}$

Il punto di tangenza è quindi: $T= (1,1, -\sqrt{2})$ .

Il piano perpendicolare alla sfera in $T$ ha come normale la retta $OT,$ quindi ha parametri direttori:

$a= 1 -0 = 1, b= 1 -0 = 1, c= -\sqrt{2} -0 = -\sqrt{2}$ . Quindi l’equazione del piano è:

$a(x-xT) + b(y-yT) + c(z-zT) = 0 \implies x-1 + y-1 -\sqrt{2}(z+ \sqrt{2}) = 0$ quindi:

$x+ y-\sqrt{2} z-4 = 0$

$$ Q^{8 $$

Calcolare il seguente integrale indefinito

$\int$ (arcsin(x) + arccos $(x)) dx$

e rappresentare graficamente la funzione primitiva passante per il punto (
$\pi ; 2).$

Notiamo che:

arcsin(x) + arccos(x) =
$\pi$

Quindi:

$\int$ (arcsin(x) + arccos $(x)) dx= \pi$
$2 x+ k$

La primitiva passante per il punto (
$\pi ; 2)$ è quella per cui:

$\pi$
$2$ ∙
$\pi + k= 2$ da cui $k= 1$ .

Quindi la primitiva richiesta ha equazione:

$y=$
$\pi$
$2 x+ 1$ che rappresenta una retta:

Osservazione

Per dimostrare la relazione (*) si può procedere nel seguente modo:

poniamo $a=$ arcsin(x) da cui $x=$ sin(a) e $b=$ arccos(x) da cui $x=$ cos $(b)$

Siccome $x =$ cos(b) = sin(
$\pi$
$2 -b)$ , arcsin(x) =
$\pi$
$2 -b , a=$
$\pi$
$2 -b , a+ b=$
$\pi$
$2$ , pertanto:

arcsin(x) + arccos(x) =
$\pi$

$$ Q^{9 $$

Calcolare il seguente integrale improprio

$$ \int 1 $$
$x∙ln2(x) dx$
$+\infty$

Notiamo che la funzione di equazione $y=$
$x∙ln2(x)$ è continua nell’intervallo $[2; +\infty$ ); quindi:

$I= \int$
$x∙ln2(x) dx=$ lim
$b\to +\infty \int$
$x∙ln2(x) dx$
$$ b 2 $$
$+\infty$

Calcoliamo l’integrale indefinito:

$$ \int 1 $$
$x∙ln2(x) dx= \int (ln(x))-2 ∙1$
$x dx=$
$(ln(x))-1$
$-1$
$+ c= -$
ln(x) $+ c$

$I=$ lim
$b\to +\infty [-$
ln(x)]
$$ 2 b $$
= lim
$b\to +\infty [-$
ln(b) +
$ln(2)] = 0 +$
$ln(2) =$
$ln(2)$

$Q^{10}$

In una stazione ferroviaria, fra le $8$ e le $10$ del mattino, arrivano in media ogni $20$ minuti due treni.
Determinare la probabilità che in $20$ minuti:
a) non arrivi alcun treno;
$b)$ ne arrivi uno solo;
$c)$ ne arrivino al massimo quattro.

Si tratta di una distribuzione di probabilità di Poisson:

$p=$
$\lambda x∙e-\lambda$
$x!$
dove $\lambda = 2$ , quindi: $p=$
$2x∙e-2$
$x!$

a) $x=0: p(0) =$
$20∙e-2$
$0!$
$e^{2} \cong 0.135 = 13.5$ %

$b) x=1: p(1) =$
$21∙e-2$
$1!$
$e^{2} \cong 0.271 = 27.1$ %

$c) p(0) + p(1) + p(2) + p(3) + p(4) =$
$20∙e-2$
$0!$
$21∙e-2$
$1!$
$22∙e-2$
$2!$
$23∙e-2$
$3!$
$24∙e-2$
$4!$

$e^{2} + 2$
$e^{2} + 2$
$e^{2} +$
$3 e^{2} +$
$3 e^{2} = 1$
$e^{2} (1 + 2 + 2 + 4$
$$ 3 + 2 3) = 7 $$
$e^{2} \cong 0.947 = 94.7$ %

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

Simulazione della seconda prova di matematica per gli esami di stato liceo scientifico
$22$ aprile 2015
Lo studente deve svolgere un solo problema a sua scelta e $5$ quesiti a sua scelta
Tempo massimo assegnato alla prova sei ore

Problema $n. 1:$ CURVA NORD

Sei il responsabile della gestione del settore “Curva Nord” dell’impianto sportivo della tua città e devi
organizzare tutti i servizi relativi all’ingresso e all’uscita degli spettatori, nonché alla sicurezza e
all’assistenza agli spettatori stessi. La forma del settore sotto la tua gestione è una porzione di corona
circolare come rappresentata in figura $1.$
Figura $1$
Tenendo presente che le normative di sicurezza emanate dal Comune prevedono un indice di affollamento
massimo di $3,25 persone/m^{2},$ e che il $9,5%$ della superficie della “Curva Nord” è inagibile in quanto
necessita di lavori di manutenzione,
$1)$ determina la capienza massima Nmax attuale del settore “Curva Nord”, approssimata alle centinaia.

La Polizia Municipale propone di aprire i cancelli di ingresso un’ora prima dell’inizio della manifestazione
sportiva. È necessario non aprirli con troppo anticipo, per limitare i costi, ma anche evitare un afflusso
troppo intenso, per motivi di sicurezza: la velocità massima di accesso degli spettatori non deve essere
superiore a $350$ ingressi al minuto. In base alle osservazioni degli anni precedenti, sai che l’andamento del
numero di spettatori, aprendo gli ingressi un’ora prima dell’inizio della manifestazione, segue una curva
come quella riportata in figura $2:$

Simulazione della seconda prova di matematica per gli esami di stato liceo scientifico
$22$ aprile 2015
Lo studente deve svolgere un solo problema a sua scelta e $5$ quesiti a sua scelta
Tempo massimo assegnato alla prova sei ore

Figura $2$
$2)$ esprimendo il tempo $t$ in minuti, determina il polinomio p(t) di terzo grado che meglio riproduce
questo andamento, ipotizzando che il numero di spettatori sia $0$ all’apertura dei cancelli di ingresso
$(t = 0)$ e sia pari al numero massimo consentito Nmax dopo un’ora $(t = 60),$ e che la velocità di
accesso sia $0$ al momento dell’apertura iniziale degli ingressi, e sia ancora $0$ dopo un’ora, quando
l’afflusso termina e il settore è riempito completamente. Verifica che la funzione rispetti il vincolo
di sicurezza sulla massima velocità di accesso degli spettatori nello stadio.

Al termine della manifestazione gli spettatori defluiscono dall’impianto; in base alle osservazioni degli anni
scorsi ogni minuto esce dall’impianto il $5%$ degli spettatori presenti all’interno nel minuto precedente.
$3)$ Determina la funzione che meglio rappresenta il deflusso degli spettatori, e, indicando con $t=0$
l’apertura dei cancelli e $tc$ (da determinare) l’istante in cui, durante il deflusso, nell’impianto
restano meno di $100$ spettatori, disegna il grafico della funzione che rappresenta il numero di
spettatori presenti nell’impianto nell’intervallo $[0;$ tc]; ipotizza che l’impianto sia riempito alla
massima capienza e che la manifestazione sportiva duri un’ora. Determina inoltre la massima
velocità di deflusso degli spettatori dall’impianto.

Devi organizzare i servizi di assistenza e ristoro per gli spettatori, sulla base del numero medio di presenze
nell’impianto.
$4)$ Determina il numero medio di spettatori presenti nell’impianto, nell’intervallo di tempo dall’istante
$t = 0$ (apertura dei cancelli) all’istante $t = tc$

Simulazione della seconda prova di matematica per gli esami di stato liceo scientifico
$22$ aprile 2015
Lo studente deve svolgere un solo problema a sua scelta e $5$ quesiti a sua scelta
Tempo massimo assegnato alla prova sei ore

Problema $n. 2:$ Il VASO

L'azienda in cui lavori produce articoli da giardino e sei stato incaricato di rivedere il disegno di un vaso
portafiori realizzato da un tuo collega. Il vaso, di altezza $h = 18 cm,$ è composto da due tronchi di cono
aventi la base maggiore in comune e il disegno che $ti$ è stato fornito (figura $1)$ ne rappresenta la sezione
longitudinale:

Figura $1$
Nel riferimento cartesiano utilizzato in figura $1$ l'unità corrisponde a $1 cm.$ Il direttore del tuo reparto $ti$
chiede di:
$1)$ verificare il valore del volume del vaso progettato dal tuo collega.

Se il volume risulta minore di $1,5$ litri, bisogna rendere il vaso più alto, fino a fargli raggiungere il volume di
$1,5$ litri, lasciando però invariate le misure dei diametri corrispondenti $ai$ punti A, $S$ e $V,$ rendendo inoltre la
forma meno spigolosa. Per chiarire meglio la sua richiesta, il direttore $ti$ dà un suo disegno, modificato
rispetto al precedente (figura $2).$

Simulazione della seconda prova di matematica per gli esami di stato liceo scientifico
$22$ aprile 2015
Lo studente deve svolgere un solo problema a sua scelta e $5$ quesiti a sua scelta
Tempo massimo assegnato alla prova sei ore

Figura $2$

La curva passante per i punti $S, V$ e $G,$ disegnata dal direttore, può essere approssimata con un'iperbole di
equazione $y=a/x.$
$2)$ Determina, approssimando per eccesso al millimetro, i valori delle coordinate $h$ e $k$ del punto $G$ che
consentono di soddisfare la richiesta di modifica del vaso.

Dopo che un primo esemplare del vaso è stato prodotto, il responsabile della produzione $fa$ rilevare che
l'eccessiva spigolosità del profilo del vaso nel punto $S$ ne rende costosa la produzione.
$3)$ Considera la funzione il cui grafico è rappresentato nella figura $2,$ nel semipiano $y\ge 0;$ descrivi la natura
del punto $S$ giustificando le tue affermazioni;
$4)$ lasciando ancora invariate le misure dei diametri corrispondenti $ai$ punti A e $S,$ individua la funzione
razionale intera di secondo grado che consente di congiungere i punti A e $S,$ eliminando il punto angoloso in
$S;$ disegna la nuova sagoma del vaso e individua il punto della curva $AS$ in cui la pendenza del grafico è
rimasta immutata rispetto alla sagoma precedentemente proposta.

Simulazione della seconda prova di matematica per gli esami di stato liceo scientifico
$22$ aprile 2015
Lo studente deve svolgere un solo problema a sua scelta e $5$ quesiti a sua scelta
Tempo massimo assegnato alla prova sei ore

Sezione Quesiti
QUESITO $1$
Assegnata la funzione

$1)$ verificare che è invertibile;
$2)$ stabilire se la funzione inversa è derivabile in ogni punto del suo dominio di definizione, giustificando
la risposta.
QUESITO $2$
Data l'equazione differenziale del primo ordine

determinare la soluzione del problema di Cauchy, tenendo conto della condizione iniziale $y(1)= 0$
QUESITO $3$
Di quale delle seguenti equazioni differenziali è soluzione la funzione
?
a)

$b)$

$c)$

$d)$

Giustificare la risposta.
QUESITO $4$
Verificare il carattere della serie
e, nel caso in cui sia convergente, determinare la sua
somma.
QUESITO $5$
Per progettare un sito web è necessario generare dei codici unici di accesso. Si vogliono utilizzare, a tale
scopo, due lettere maiuscole dell'alfabeto inglese seguite da una serie di numeri compresi tra $0$ e $9.$ Tutti i
codici di accesso dovranno avere lo stesso numero di cifre ed è ammessa la ripetizione di lettere e numeri.

Simulazione della seconda prova di matematica per gli esami di stato liceo scientifico
$22$ aprile 2015
Lo studente deve svolgere un solo problema a sua scelta e $5$ quesiti a sua scelta
Tempo massimo assegnato alla prova sei ore

Qual è il numero minimo di cifre da impostare in modo da riuscire a generare almeno $5$ milioni di codici di
accesso diversi? Giustificare la risposta.
QUESITO $6$
La base di un solido, nel piano Oxy, è il cerchio avente come centro l'origine e raggio $3.$ Le sezioni del solido
perpendicolari all'asse delle $x$ sono quadrati.
Calcolare il volume del solido.
QUESITO $7$

Trovare l'equazione del piano tangente alla superficie sferica avente come centro l'origine e raggio $2,$ nel
suo punto di coordinate $(1,1,z),$ con $z$ negativa.
QUESITO $8$
Calcolare il seguente integrale indefinito

e rappresentare graficamente la funzione primitiva passante per il punto

QUESITO $9$
Calcolare il seguente integrale improprio

QUESITO $10$
In una stazione ferroviaria, fra le $8$ e le $10$ del mattino, arrivano in media ogni $20$ minuti due treni.
Determinare la probabilità che in $20$ minuti:
a) non arrivi alcun treno;
$b)$ ne arrivi uno solo;
$c)$ ne arrivino al massimo quattro.

Simulazione Esami di stato $2014-2015$
ISTITUTO __________________________________________ CLASSE $5$ sez. ____
Candidato: _____________________________

Data: __ / __ /____

Griglia di valutazione della competenza in $matematica-$ simulazione $II$ prova
INDICATORI
DESCRITTORI
Punti Problemi

$$ P^{1} P^{2 $$

Comprendere
Analizzare la situazione
problematica,
rappresentare i dati,
interpretarli e tradurli
in linguaggio
matematico.
Non comprende le richieste o le recepisce in maniera inesatta o parziale, non riuscendo a riconoscere i
concetti chiave e le informazioni essenziali, o, pur avendone individuati alcuni, non $li$ interpreta
correttamente. Non stabilisce gli opportuni collegamenti tra le informazioni e utilizza i codici matematici in
maniera insufficiente $e/o$ con gravi errori.

$$ 0-3 $$

Analizza ed interpreta le richieste in maniera parziale, riuscendo a selezionare solo alcuni dei concetti chiave e
delle informazioni essenziali, o, pur avendoli individuati tutti, commette degli errori nell’interpretarne alcuni,
nello stabilire i collegamenti $e/o$ nell’utilizzare i codici matematici.

$$ 4-8 $$

Analizza in modo adeguato la situazione problematica, individuando e interpretando correttamente i concetti
chiave, le informazioni e le relazioni tra queste riconoscendo ed ignorando gli eventuali distrattori; utilizza con
adeguata padronanza i codici matematici $grafico-simbolici,$ nonostante lievi inesattezze $e/o$ errori.

$$ 9-13 $$

Analizza ed interpreta in modo completo e pertinente i concetti chiave, le informazioni essenziali e le relazioni
tra queste, ignorando gli eventuali distrattori; utilizza i codici matematici $grafico-simbolici$ con grande
padronanza e precisione, pur se con qualche lieve inesattezza, tale da non inficiare, tuttavia, la comprensione
complessiva della situazione problematica.

$$ 14-18 $$

Individuare
Mettere in campo
strategie risolutive
attraverso una
modellizzazione del
problema e individuare
la strategia più adatta.
Non individua strategie di lavoro o ne individua di non adeguate Non è in grado di individuare modelli
standard pertinenti. Non si coglie alcuno spunto creativo nell'individuare il procedimento risolutivo. Non
individua gli strumenti formali opportuni.
$$ 0-4 $$

Individua strategie di lavoro poco efficaci, talora sviluppandole in modo poco coerente; ed usa con una certa
difficoltà i modelli noti. Dimostra una scarsa creatività nell'impostare le varie fasi del lavoro. Individua con
difficoltà e qualche errore gli strumenti formali opportuni.
$$ 5-10 $$

$Sa$ individuare delle strategie risolutive, anche se non sempre le più adeguate ed efficienti. Dimostra di
conoscere le procedure consuete ed i possibili modelli trattati in classe, ma $li$ utilizza in modo non sempre
adeguato. Propone alcune strategie originali. Individua gli strumenti di lavoro formali opportuni anche se con
qualche incertezza e dopo alcuni tentativi.

$$ 11-16 $$

Attraverso congetture effettua, con padronanza, chiari collegamenti logici. Individua strategie di lavoro
adeguate ed efficienti. Utilizza nel modo migliore i modelli noti e ne propone di nuovi. Dimostra originalità e
creatività nell'impostare le varie fasi di lavoro. Individua con cura e precisione gli strumenti formali opportuni.
$$ 17-21 $$

Sviluppare il processo
risolutivo
Risolvere la situazione
problematica in
maniera coerente,
completa e corretta,
applicando le regole
ed eseguendo i calcoli
necessari, con
l’eventuale ausilio di
strumenti informatici.
Non applica le strategie scelte o le applica in maniera non corretta. Non sviluppa il processo risolutivo o lo
sviluppa in modo incompleto $e/o$ errato. Non è in grado di utilizzare procedure $e/o$ teoremi o $li$ applica in
modo errato $e/o$ con numerosi errori nei calcoli. La soluzione ottenuta non è coerente con il contesto del
problema. Non è in grado di utilizzare eventuali strumenti informatici disponibili.
$$ 0-4 $$

Applica le strategie scelte in maniera parziale e non sempre appropriata. Sviluppa il processo risolutivo in
modo incompleto. Non sempre è in grado di utilizzare procedure $e/o$ teoremi o $li$ applica in modo
parzialmente corretto $e/o$ con numerosi errori nei calcoli. La soluzione ottenuta è coerente solo in parte con il
contesto del problema. Non è in grado di utilizzare in modo autonomo e proficuo eventuali strumenti
informatici disponibili.
$$ 5-10 $$

Applica le strategie scelte in maniera corretta pur con qualche imprecisione. Sviluppa il processo risolutivo
quasi completamente. È in grado di utilizzare procedure $e/o$ teoremi o regole e $li$ applica quasi sempre in
modo corretto e appropriato. Commette qualche errore nei calcoli. La soluzione ottenuta è generalmente
coerente con il contesto del problema. Utilizza in modo autonomo e proficuo eventuali strumenti informatici
disponibili.

$$ 11-16 $$

Applica le strategie scelte in maniera corretta supportandole anche con l’uso di modelli $e/o$ diagrammi $e/o$
simboli. Sviluppa il processo risolutivo in modo analitico, completo, chiaro e corretto. Applica procedure $e/o$
teoremi o regole in modo corretto e appropriato, con abilità e con spunti di originalità. Esegue i calcoli in
modo accurato, pur con qualche imprecisione, la soluzione è ragionevole e coerente con il contesto del
problema. Utilizza con sicurezza, in modo consapevole e proficuo eventuali strumenti informatici disponibili.
$$ 17-21 $$

Argomentare
Commentare e
giustificare
opportunamente la
scelta della strategia
applicata, i passaggi
fondamentali del
processo esecutivo e la
coerenza dei risultati.
Non argomenta o argomenta in modo errato la $strategia/procedura$ risolutiva e la fase di verifica, utilizzando
un linguaggio matematico non appropriato o molto impreciso.
$$ 0-3 $$

Argomenta in maniera frammentaria $e/o$ non sempre coerente la $strategia/procedura$ esecutiva o la fase di
verifica. Utilizza un linguaggio matematico per lo più appropriato, ma non sempre rigoroso.
$$ 4-7 $$

Argomenta in modo coerente ma incompleto, la procedura esecutiva e la fase di verifica. Spiega la risposta,
ma non le strategie risolutive adottate (o viceversa). Utilizza un linguaggio matematico pertinente o con
qualche incertezza.

$$ 8-11 $$

Argomenta in modo coerente, preciso e accurato, approfondito ed esaustivo tanto le strategie adottate
quanto la soluzione ottenuta. Mostra un’ottima padronanza nell’utilizzo del linguaggio scientifico.
$$ 12-15 $$

Tabella di conversione dal punteggio grezzo al voto in quindicesimi
Voto
$$ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 $$
Punti
$$ 0-2 3-5 6-9 10-13 14-17 18-21 22-26 27-31 32-36 37-42 43-48 49-54 55-61 62-68 69-75 $$
Voto assegnato $____ /15$
