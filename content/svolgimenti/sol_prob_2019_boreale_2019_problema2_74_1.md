---
title: 2019 Boreale — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2019_boreale_2019_problema2_74_1
of_item: prob_2019_boreale_2019_problema2_74_1
prova_id: prova_2019_boreale_2019_problema2_74
anno: '2019'
pdf: Prova_Maturita_2019.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Problema:** [[Problemi/prob_2019_boreale_2019_problema2_74_1|2019 Boreale — Problema 2 — Problema 1]] · **Prova:** [[Prove/2019_boreale_2019_problema2_74|2019 Boreale — Problema 2]]

Boreale 2019 - Problema $2$

LICEO SCIENTIFICO 2019 - CALENDARIO BOREALE

PROBLEMA $2$

In uno dei possibili modelli per descrivere l’effetto della resistenza dell’aria in un moto di caduta libera, si
suppone che il modulo della forza di attrito $F,$ opposta alla forza peso, risulti

$F = k$ ∙ $[v(t)]2$

dove v(t) indica la velocità di caduta all’istante $t$ e $k$ è una costante positiva. Tutte le grandezze fisiche
presenti sono espresse nelle unità di misura del S.I. Nell’ipotesi che tale modello sia applicabile, il modulo
della velocità di caduta in ciascun istante è esprimibile con una funzione della forma

v(t) $= h ebt-1$
$ebt+ 1$

dove $h$ e $b$ sono opportune costanti positive.

a)

Determinare le unità di misura della costante $k.$ Verificare che, in questo modello, l’accelerazione
istantanea del corpo è espressa dalla funzione

a(t) $= 2 h b$ ebt
$(ebt+ 1)^{2}$

mentre una legge oraria che può descrivere il moto del corpo è

s(t) $= [2h$
$b∙ln(1 +$ ebt) - ht]

Utilizzando, per valori molto grandi di $t,$ l’approssimazione $1 +$ ebt ≃ ebt, mostrare che si ha
s(t) ≃ $ht.$ Inoltre, provare che la velocità è crescente e tende al valore limite $h.$

Determiniamo l’unità di misura della costante $k:$

[k] = [ $F$
$v^{2}] = [MLT-2$
$L^{2} ∙T-2] = [ML-1]$ ,
quindi l'unità di misura di $k$ è $kg$
$m$ .

Determiniamo ora l’accelerazione istantanea del corpo.

Essendo v(t) $= h$
$ebt-1$
$ebt+1$ , si ha:

a(t) = v'(t) $= h$
$bebt(ebt+1)-(ebt-1)(bebt)$
$(ebt+1)$
$= h$
$bebt(ebt+1-ebt+1))$
$(ebt+1)$
$2hbebt$
$(ebt+1)$
$2 =$ a(t)

Boreale 2019 - Problema $2$

Ricordiamo che s'(t) = v(t) e nel nostro caso:

s'(t) $= D[2h$
$b∙ln(1 +$ ebt) - ht] $= h ebt-1$
$ebt+ 1 =$ v(t)

Quindi s(t) = [
$2h$
$b∙ln(1 +$ ebt) - ht] è una legge oraria che può descrivere il moto del corpo.

La legge oraria può essere ricavata direttamente notando che, essendo v(t) =
$$ ds $$
$dt$ , risulta:
$ds=$ v(t)dt ,
quindi: $s= \int v(t)dt= \int h ebt-1$
$ebt+ 1 dt= h\int ebt-1$
$ebt+ 1 dt$
Risolviamo l’integrale:

$\int ebt-1$
$ebt+ 1 dt$

Poniamo $ebt= z, bt= ln z, bdt=$
zdz , $dt=$
bzdz quindi:

$\int ebt-1$
$ebt+ 1 dt= \int$
$z-1$
$bz(z+ 1) dz= 1$
$b\int z-1$
$z(z+ 1) dz$

$z-1$
$z(z+ 1) =$ A
$z+$
$z+ 1 = A(z+ 1) + Bz$
$z(z+ 1)$
$= z(A+ B) +$ A
$z(z+ 1)$
$\Rightarrow {A+ B= 1$
$A= -1$ ; { $B= 2$
$A= -1$

$\int z-1$
$z(z+ 1) dz= \int (-1$
$z+$
$z+ 1) dz= -ln|z| + 2 ln|z+ 1| + C= ln($
$(z+ 1)^{2}$
$|z|$
) $+ C=$

$= 2 ln|z+ 1| -ln|z| + C= 2 ln|ebt+ 1| -ln|ebt| + C= 2 ln(ebt+ 1) -bt+ C$

Quindi:

s(t) $= h\int ebt-1$
$ebt+ 1 dt= h$
$b[2 ln(ebt+ 1) -bt+$ C], e ponendo $C= 0$ si ha:

s(t) $= 2h$
$bln(ebt+ 1) -ht$

Utilizzando l’approssimazione $1 +$ ebt ≃ ebt per valori molto grandi di $t$ (in effetti,
se $t\to +\infty$ si ha: $1 +$ ebt~ebt ), si ha:
s(t) $= 2h$
$b∙ln(1 +$ ebt) $- ht\cong 2h$
bln(ebt) $-ht= 2h$
b(bt) $-ht= ht,$
$c. v. d.$

Vediamo ora quando v(t) è crescente studiando la sua derivata.
v'(t) = a(t) =
$2 h b$ ebt
$(ebt+1)$
$2 > 0$ per ogni valore di $t:$ la velocità è quindi sempre crescente.
Inoltre, se $t\to +\infty$ , risulta:

v(t) $= h ebt-1$
$ebt+ 1$ ~hebt
$ebt= h,$ quindi v(t) $\to h$ per $t\to +\infty$ .

Boreale 2019 - Problema $2$

$b)$

Dopo aver verificato che l’accelerazione è decrescente e tende a $0$ al trascorrere del tempo, fornire
un’interpretazione fisica della situazione fin qui descritta.
Posto $h= \sqrt$
$$ mg $$
$k$ e $b= \sqrt$
$$ kg $$
$m,$ dove $m$ indica la massa del corpo e $g$ l’accelerazione di gravità,
verificare che viene rispettato il $2^\circ$ principio della dinamica. Dedurre, da quanto posto, che $h$ e $b$
hanno, rispettivamente, le dimensioni di una velocità e del reciproco di un tempo.

Verifichiamo che l’accelerazione è decrescente:

a(t) =
$2 h b$ ebt
$(ebt+1)$
$2$ ; a(t), sempre derivabile, è decrescente se a'(t) $\le 0.$

a'(t) $= 2hbb ebt(ebt+ 1)$
$2 -ebt[2(ebt+ 1)bebt]$
$(ebt+ 1)^{4}$
$= 2hb2 ebt(ebt+ 1)$
$(ebt+ 1)^{4}$
$(ebt+ 1 -2ebt) \le 0$ se:

$-ebt+ 1 \le 0$ ,
$ebt\ge 1 , bt\ge 0$ ,
$t\ge 0$ .

Quindi l’accelerazione è decrescente per $t\ge 0$ , cioè al trascorrere del tempo.

Verifichiamo a che cosa tende l’accelerazione al trascorrere del tempo, cioè per $t\to +\infty$ :

$$ lim $$
$t\to +\infty$ a(t) = lim
$t\to +\infty$
$2 h b$ ebt
$(ebt+ 1)^{2} = 2hb$ lim
$t\to +\infty$
$$ ebt $$
$e2bt= 2hb$ lim
$t\to +\infty$
$ebt= 0+$

Quindi al trascorrere del tempo l’accelerazione tende a zero.

Descrizione fisica:

un corpo si muove in caduta libera e, per effetto della resistenza dell’aria, è soggetto $ad$ una forza frenante
di modulo $F = k$ ∙ $[v(t)]2$ , con v(t) $= h$
$ebt-1$
$ebt+1 (h$ e $b$ costanti positive). La velocità cresce fino al
valore limite $h$ (velocità di regime). Dopo molto tempo (valori molto grandi di $t)$ lo spazio percorso in
funzione del tempo è dato da: s(t) ≃ $ht,$ quindi il moto tende a diventare uniforme. L’accelerazione
del corpo tende $ad$ annullarsi al trascorrere del tempo, a conferma che la velocità tende a stabilizzarsi
intorno al valore di regime $v= h.$

Posto $h= \sqrt$
$$ mg $$
$k$ e $b= 2 \sqrt$
$$ kg $$
$m,$ dove $m$ indica la massa del corpo e $g$ l’accelerazione di gravità,
verifichiamo che viene rispettato il $2^\circ$ principio della dinamica, cioè che $F⃗=$ ma⃗.

Durante il moto il corpo è soggetto alla forza peso (verso il basso, consideriamola positiva) ed alla forza di
attrito (che sarà da considerare negativa), quindi, il modulo della forza risultante è data da:
$F=$ Forza $peso-Forza$ di $attrito= mg-k$ ∙ $[v(t)]2 = mg-k(h ebt-1$
$ebt+ 1)$
$= mg-kh2 ( ebt-1$
$ebt+ 1)$
$= mg-k(\sqrt{mg}$
$k)$
( $ebt-1$
$ebt+ 1)$
$= mg-mg( ebt-1$
$ebt+ 1)$

Boreale 2019 - Problema $2$

$= mg[1 -( ebt-1$
$ebt+ 1)$
] $= mg[(ebt+ 1)$
$2 -(ebt-1)$
$(ebt+ 1)^{2}$
] = mg[
$4ebt$
$(ebt+ 1)^{2}] = 4mgebt$
$(ebt+ 1)^{2} =$
$= m($
$4gebt$
$(ebt+ 1)^{2})$
Essendo: $2hb= 4\sqrt$
$$ mg $$
$k\sqrt$
$$ kg $$
$m= 4g,$ risulta: a(t) =
$2hb$ ebt
$(ebt+1)$
$4g$ ebt
$(ebt+1)$
$2$ si ha quindi:
$F= m($
$4gebt$
$(ebt+ 1)^{2}) =$ ma,
$c. v. d.$

Determiniamo le dimensioni fisiche di $h$ e $b.$

Ricordiamo che:

[k] = [
$v^{2}] =$ [
$MLT-2$
$L^{2}∙T-2] = [ML-1]$ , quindi l'unità di misura di $k$ è
$$ kg $$
$m$ . Risulta:

$h= \sqrt$
$$ mg $$
$k$ , [h] $= [\sqrt{MLT}-2$
$ML-1$ ] $= [LT-1]:$ quindi $h$ ha le dimensioni di una velocità.

$b= 2 \sqrt$
$$ kg $$
$m$ , [b] $= [\sqrt{ML-1}(LT-2)$
] $= [T-1]:$ quindi $b$ ha le dimensioni del reciproco di un tempo.

$c)$

Tracciare, indipendentemente dalla situazione fisica, il grafico $\Gamma$ della funzione v(t) per $t \in R,$
specificandone la simmetria. Dedurre da esso, in modo qualitativo, il grafico della sua primitiva
passante per il punto $(0;$
$2h$
bln $2).$ In particolare, stabilire se la primitiva ammette asintoti obliqui e, in
caso affermativo, scriverne le equazioni, sempre considerando che, per $t \to +\infty$ , si può ricorrere
all’approssimazione $1 +$ ebt ≃ ebt .

Studiamo il grafico della funzione $y=$ v(t) $= h$
$ebt-1$
$ebt+1$ indipendentemente dall’aspetto fisico (cioè per
ogni $t$ reale).

La funzione è definita per ogni $t.$
Intersezioni con gli assi: se $t= 0, y= 0;$ se $y= 0, ebt-1 = 0,$ quindi $t= 0$
Segno della funzione: si ha $y> 0$ se $ebt-1 > 0, ebt> 1: bt> 0, t> 0; y< 0$ se $t< 0$ .

Limiti:
$$ lim $$
$t\to -\infty$ v(t) = lim
$t\to -\infty h ebt-1$
$ebt+ 1 = -h:y= -h$ asintoto orizzontale per $t\to -\infty$

$$ lim $$
$t\to +\infty$ v(t) = lim
$t\to +\infty h ebt-1$
$ebt+ 1 =$ lim
$t\to +\infty h$ ebt
$ebt= h:y= h$ asintoto orizzontale per $t\to +\infty$

Non ci sono asintoti verticali né obliqui.

Boreale 2019 - Problema $2$

Risulta:

$v(-t) = h e-bt-1$
$e-bt+ 1 =$ (moltiplichiamo numeratore e denominatore per ebt )

$= h$
$1-ebt$
$1+ebt= -v(t):$ la funzione è dispari, quindi il suo grafico è simmetrico rispetto all’origine degli assi.

Studio della derivata prima. Come già verificato nel punto a) risulta:

v'(t) $= 2 h b$ ebt
$(ebt+ 1)^{2} > 0$ per ogni $t:$ grafico sempre crescente, nè massimi nè minimi.

Studio della derivata seconda. Come già visto nel punto $b)$ risulta:

v''(t) = a'(t) $= 2hb2 ebt(ebt+ 1)$
$(ebt+ 1)^{4}$
$(ebt+ 1 -2ebt) \ge 0$ se $t\le 0$
Quindi il grafico volge la concavità verso l’alto per $t<0$ e verso il basso per $t>0;$ esso presenta un flesso $F$
per $t=0$ ed è $F= (0; 0).$

Grafico:

Ricordiamo che le primitive di v(t) danno s(t) e, come già visto:

$\int v(t)dt=$ s(t) $= 2h$
$bln(ebt+ 1) -ht+ C$

Cerchiamo la primitiva passante per $(0;$
$2h$
bln $2):$

$2h$
bln $2 =$
$2h$
bln $2 + C,$ quindi: $C= 0.$ La primitiva richiesta è:

$y=$ s(t) $= 2h$
$bln(ebt+ 1) -ht$

Boreale 2019 - Problema $2$

Dal grafico di $y=$ v(t) deduciamo (ragionando sul significato geometrico dell’integrale definito come
area e notando che il grafico è crescente) che, per $t\to +\infty , y\to +\infty$ . La primitiva è una funzione pari
essendo v(t) dispari, quindi il suo grafico è simmetrico rispetto all’asse delle ordinate. Risulta poi
s'(t) = v(t) $> 0$ per $t> 0,$ quindi $s$ cresce per $t> 0$ e, per la simmetria suddetta, decresce per $t< 0.$
Per $t= 0$ abbiamo il minimo (relativo e assoluto) $(0;$
$2h$
bln $2).$
La derivata seconda s''(t) è a(t) = v'(t),che è sempre positiva (il grafico di $v$ è sempre
crescente), quindi il grafico di $s$ volge sempre la concavità verso l’alto.

Stabiliamo se s(t) ha asintoti obliqui (è sufficiente analizzare $t\to +\infty$ ). Osserviamo che:

s(t) $= 2h$
$bln(ebt+ 1) -ht~ 2h$
b(bt) $-ht= ht$
$$ lim $$
$t\to +\infty$
s(t)
= lim
$t\to +\infty$
$$ ht $$
$t= h= m;$ lim
$t\to +\infty$ [s(t) $-mt] =$ lim
$t\to +\infty$ [
$2h$
$bln(ebt+ 1) -ht-ht] =$

= lim
$t\to +\infty$ [
$2h$
b(bt) $-2ht] = 0 = q: y= ht$ asintoto obliquo per $t\to +\infty$ .

Data la simmetria della funzione, per $t\to -\infty$ c’è l’asintoto obliquo $y= -ht.$

Il grafico richiesto è del tipo:

$d)$

Preso $t^{0} > 0,$ calcolare l’area A della regione $R$ nel $1^\circ$ quadrante che è delimitata dal grafico $\Gamma$ ,
dall’asse delle ascisse e dalla retta di equazione $t = t^{0}.$ Stabilire se, per $t^{0} \to +\infty$ , l’area A tende o
meno $ad$ un valore finito. Infine, preso $\tau > 0,$ calcolare il valore dell’integrale

Boreale 2019 - Problema $2$

$\int$ a(t)
$\tau$
$-\tau$
$$ dt $$
e stabilire il suo comportamento per $\tau \to +\infty$ .

Rappresentiamo la regione $R:$

L’area A della regione $R$ è data da:

$A= \int$ v(t)
$$ t^{0} 0 $$
$dt= \int$
$h ebt-1$
$ebt+ 1$
$$ t^{0} 0 $$
$dt= [2h$
$b∙ln(1 +$ ebt) - ht]
$$ 0 t^{0 $$
$= 2h$
$b∙ln(1 + ebt0) - ht0 -2h$
b∙ln $2$

Stabiliamo se per $t^{0} \to +\infty$ , l’area A tende o meno $ad$ un valore finito:

$$ lim $$
$t^{0}\to +\infty [2h$
$b∙ln(1 + ebt0) - ht0 -2h$
b∙ln $2] =$ lim
$t^{0}\to +\infty [2h$
$b∙bt0 - ht0 -2h$
b∙ln $2] =$
= lim
$t^{0}\to +\infty [ht0 -2h$
b∙ln $2] = +\infty$

Quindi l’area A tende all’infinito.

Preso $\tau > 0,$ calcoliamo il valore dell’integrale

$\int$ a(t)
$\tau$
$-\tau$
$$ dt $$
$\int$ a(t)
$\tau$
$-\tau$
$dt= [v(t)]-\tau$
$\tau$
$= [v(\tau ) -v(-\tau$ )] $= v(\tau ) + v(\tau$ ),
poiché v(t) è dispari.

Quindi: $\int$
a(t)
$\tau$
$-\tau$
$dt= 2 v(\tau$ )

Per $\tau \to +\infty$ il suddetto integrale tende a $2h$ (poiché v(t) $\to h$ per $t\to +\infty$ ).

Con la collaborazione di Angela Santamaria

Boreale 2019 - Quesiti

$$ Q^{1 $$

Assegnata la funzione f(x) $= x^{2} + 3x-$
$x$ , mostrare che esiste un solo valore $b > -3$ tale che
nell’intervallo $[-3,$ b] siano rispettate tutte le ipotesi del teorema di Rolle. Determinare tale valore $b.$

Affinché la funzione sia continua nell’intervallo $[-3,$ b], questo non deve contenere lo $0,$ quindi
deve essere $b< 0;$ per ogni $b< 0$ la funzione è derivabile nell’intervallo aperto $(-3; b).$ Resta da
imporre che sia $f(-3) =$ f(b), quindi:
$f(-3) = 9 -9 + 1 = 1$ , f(b) $= b^{2} + 3b-$
$b= 1, b^{3} + 3b^{2} -3 = b , b^{3} + 3b^{2} -b-3 = 0$ ,

$b^{2}(b+ 3) -(b+ 3) = 0,$
$(b+ 3)(b^{2} -1) = 0,$
$b= \pm 1$ .

Il valore richiesto è $b= -1$ .
$$ Q^{2 $$

Dopo aver verificato che la curva di equazione $|y| + |x|3 = 1$ è simmetrica sia rispetto all’asse $x$ sia
rispetto all’asse $y,$ determinare l’area della regione piana delimitata da tale curva.

Scambiando $y$ in $-y$ l’equazione non cambia:
$|-y| + |x|3 = 1$ coincide con $|y| + |x|3 = 1$ , quindi la curva è simmetrica rispetto all’asse $x.$
Scambiando $x in-x$ l’equazione non cambia:
$|y| + |-x|3 = 1$ coincide con $|y| + |x|3 = 1$ , quindi la curva è simmetrica rispetto all’asse $y.$
Essendo simmetrica rispetto agli assi, la curva è simmetrica rispetto all’origine.

Il grafico della curva si ottiene facilmente dal grafico di $y+ x^{3} = 1,$ cioè $y= -x^{3} + 1$ con
$x\ge 0$ e $y\ge 0,$ completandolo con il suo simmetrico rispetto all’asse $x,$ all’asse $y$ e all’origine
degli assi. Il grafico di $y= -x^{3} + 1$ si ottiene dal grafico di $y= x^{3}$ ribaltandolo rispetto all’asse $x$
e traslandolo di $1$ verso l’alto:

Boreale 2019 - Quesiti

Quindi la curva di equazione $|y| + |x|3 = 1$ ha il seguente grafico:

L’area richiesta è data da:

$Area= 4 \int (-x^{3} + 1)$
$$ 1 0 $$
$dx= 4 [-1$
$4 x^{4} +$ x]
$$ 0 1 $$
$= 4 [-1$
$4 + 1 -0] = 3 u^{2}$ .

$$ Q^{3 $$

Dimostrare che, se in un parallelogramma si tracciano le due diagonali, esso viene suddiviso in quattro
triangoli di area uguale. Discutere la validità o meno dell’affermazione inversa: se un quadrilatero
convesso viene suddiviso dalle sue diagonali in quattro triangoli di area uguale, allora esso è un
parallelogramma.

Dimostrazione trigonometrica: detti $\alpha$ e $\beta$ gli angoli DOC e BOC risulta $\beta = \pi -\alpha$ . Inoltre:

Area(DOC) $= 1$
$2$ DO∙OC $sen\alpha$ ,
Area(BOC) $= 1$
$2$ BO∙OC sen $\beta = 1$
$2$ DO∙OC $sen(\pi -\alpha ) =$
$2$ DO∙OC $sen\alpha =$ Area(DOC).

Poiché i triangoli DOC e AOB sono congruenti e così pure i triangoli BOC e AOD, segue che i quattro
triangoli in cui il parallelogramma viene diviso dalle diagonali sono equivalenti.

Dimostrazione geometrica: è sufficiente dimostrare che i triangoli AOB e BOC hanno la stessa area. Per
far ciò basta dimostrare che l’area di AOB è la metà dell’area di ABC. Questi due triangoli hanno la stessa
base $AB,$ inoltre l’altezza $OG$ di AOB relativa $ad AB$ è la metà dell’altezza $CE$ di ABC relativa $ad AB;$

Boreale 2019 - Quesiti

infatti, se da O (punto medio di $AC)$ mandiamo la parallela $ad AB,$ questa incontra l’altezza $CH$ nel suo
punto medio (conseguenza del teorema di Talete).

Discutiamo la validità dell’affermazione inversa.

In base all’ipotesi, calcolando le quattro aree in termini trigonometrici, essendo sen $\alpha =$ sen $\beta$ , deve essere:

$ab= cd= bc= ad$ ,
quindi:
da $ab= bc$ segue $a= c$ e da $cd= bc$ segue $b= d$

Le diagonali del quadrilatero quindi si bisecano scambievolmente, pertanto il quadrilatero è un
parallelogramma: l’affermazione inversa è vera.

$$ Q^{4 $$

Sono assegnati, nello spazio tridimensionale, i punti $A(-1, 3, 2), B(3, 4, 2), C(5, 1, 4), D(1, 0, 4).$
Dopo aver dimostrato che ABCD è un rombo, determinare l’area di tale rombo ed il raggio della
circonferenza in esso inscritta.

Dobbiamo prima dimostrare che A, $B, C$ e $D$ sono complanari. Per far ciò cerchiamo l’equazione del piano
per A, $B$ e $C$ e dimostriamo che $D$ appartiene a tale piano.

$ax+ by+ cz+ d= 0$

Imponiamo il passaggio per A, $B$ e $C:$

$-a+ 3b+ 2c+ d= 0$
$3a+ 4b+ 2c+ d= 0$
$5a+ b+ 4c+ d= 0$
; sottraiamo alla seconda equazione la prima: {
$-a+ 3b+ 2c+ d= 0$
$4a+ b= 0$
$5a+ b+ 4c+ d= 0$

$-a+ 3b+ 2c+ d= 0$
$b= -4a$
$5a+ b+ 4c+ d= 0$
$-13a+ 2c+ d= 0$
$b= -4a$
$a+ 4c+ d= 0$
; sottraiamo alla terza equazione la prima:

Boreale 2019 - Quesiti

$14a+ 2c= 0$
$b= -4a$
$a+ 4c+ d= 0$
$c= -7a$
$b= -4a$
$-27a+ d= 0$
$c= -7a$
$b= -4a$
$d= 27a$
: $ax-4ay-7az+ 27a= 0$

Il piano per A, $B$ e $C$ ha quindi equazione: $x-4y-7z+ 27 = 0$

Verifichiamo che $D$ appartiene a questo piano: $1 -28 + 27 = 0:$ verificato.

Per verificare che ABCD è un rombo verifichiamo che tutti i lati sono uguali.

$A(-1, 3, 2), B(3, 4, 2), C(5, 1, 4), D(1, 0, 4)$

$AB= \sqrt{-1 -3}^{2} + (3 -4)^{2} + (2 -2)^{2} = \sqrt{17}; BC= \sqrt{4} + 9 + 4 = \sqrt{17}$

$CD= \sqrt{16} + 1 + 0 = \sqrt{17}; DA= \sqrt{4} + 9 + 4 = \sqrt{17}$

ABCD è quindi un rombo.

Osserviamo la seguente figura:

$A(-1, 3, 2), B(3, 4, 2), C(5, 1, 4), D(1, 0, 4)$

L’area del rombo è data da:
Area(ABCD) =
AC∙BD
; $AC= \sqrt{36} + 4 + 4 = \sqrt{44}; BD= \sqrt{4} + 16 + 4 = \sqrt{24};$ quindi:
Area(ABCD) = AC∙BD
$= \sqrt{44} ∙\sqrt{24}$
$= 2\sqrt{66} u^{2}$
Essendo il rombo un parallelogramma, la cui altezza nel nostro caso è $2FE,$ la sua area può essere trovata
come base per altezza, quindi:
Area(ABCD) $= AB(2FE) = 2\sqrt{66}$ ,
$FE= \sqrt{66}$
$AB= \sqrt{66}$
$$ \sqrt{17} = \sqrt{66} 17 $$

Secondo metodo (tutto basato sulla geometria analitica) che riportiamo solo per mostrare un utile
esercizio per trovare la distanza di un punto da una retta nello spazio.

Il raggio $EF$ della circonferenza inscritta nel rombo è dato dalla distanza del punto medio E della diagonale
$AC$ dalla retta $AB.$ Per trovare $F$ intersechiamo la retta $AB$ con il piano per E perpendicolare $ad AB.$
Cerchiamo le equazioni parametriche della retta $AB.$

Boreale 2019 - Quesiti

Una terna $(l, m, n)$ di parametri direttori di $AB$ è data da: $l= 3 + 1 = 4, m= 4 -3 = 1, n= 2 -2 = 0.$
La retta $AB$ ha quindi equazioni parametriche:

$x= -1 + 4t$
$y= 3 + t$
$z= 2$

Cerchiamo il punto medio E della diagonale $AC: E=$ (
$-1+5$
$$ 2 ; 3+1 2 ; 2+4 $$
$2 ) = (2; 2; 3)$
Il piano per E perpendicolare alla retta $AB$ ha equazione:

$4(x-2) + 1(y-2) + 0(z-3) = 0; 4x+ y-10 = 0.$

Cerchiamo $F$ intersecando questo piano con la retta $AB:$

$4(-1 + 4t) + (3 + t) -10 = 0; 17t-11 = 0; t= 11$
$17$ ; sostituendo nelle equazioni di $AB:$
$x= -1 + 4t= -1 + 44$
$$ 17 = 27 17 $$
$y= 3 + t= 3 + 11$
$$ 17 = 62 17 $$
$z= 2$
: $F= (27$
$$ 17 ; 62 $$
$17 ; 2) ; E= (2; 2; 3)$

Il raggio della circonferenza inscritta nel rombo è quindi:

$EF= \sqrt (27$
$17 -2)$
$$ 2 + (62 $$
$17 -2)$
$+ (2 -3)^{2} = \sqrt{66}$
$$ 17 . $$

$$ Q^{5 $$

Alberto e Barbara fanno un gioco: ognuno lancia contemporaneamente $5$ dadi, con facce numerate da $1$
a $6.$ Ciascun dado $fa$ guadagnare un punto a chi lo ha lanciato se esce il numero $5$ o il $6;$ le facce da $1$ a
$4$ non fanno guadagnare punti. Vince chi, con i $5$ dadi lanciati, realizza più punti. Qual è la probabilità
che pareggino?

Alberto e Barbara possono fare da $0$ a $5$ punti e pareggiano se realizzano gli stessi punti.
Indichiamo con $p(0), p(1), p(2), p(3), p(4)e p(5)$ le probabilità che Alberto (e Barbara) faccia
rispettivamente $0, 1, 2, 3, 4, 5$ punti. La probabilità che pareggino sarà:

$p(0) ∙p(0) + p(1) ∙p(1) + p(2) ∙p(2) + p(3) ∙p(3) + p(4) ∙p(4) + p(5) ∙p(5)$ (∗)

Calcoliamo le probabilità necessarie.

$p(0)$ è la probabilità che nel lancio contemporaneo dei $5$ dadi su ciascuno esca il numero da $1$ a $4.$ La
probabilità che su un dado esca il $5$ o il $6$ è
$6$ (successo). La probabilità che questa eventualità si ripeta su $0$
dadi si ottiene come distribuzione binomiale di $n=5$ casi ripetuti, con $k=0$ successi e probabilità di successo
$p=$
$6.$ Quindi:
$p(0) = (n$
$k) pkqn-k= (5$
$$ 0)(2 6) 0 (4 6) 5 = (4 6) 5 $$

Boreale 2019 - Quesiti

$p(1)$ è la probabilità che nel lancio contemporaneo dei $5$ dadi (con la convenzione precedente) si abbia $1$
successo, quindi:

$p(1) = (5$
$$ 1) (2 6) 1 (4 6) 4 = 5 (2 6) 1 (4 6) 4 $$

Con ragionamento analogo si avrà:

$p(2) = (5$
$$ 2) (2 6) 2 (4 6) 3 = 10 (2 6) 2 (4 6) 3 , $$
$p(3) = (5$
$$ 3)(2 6) 3 (4 6) 2 = 10 (2 6) 3 (4 6) 2 $$

$p(4) = (5$
$$ 4) (2 6) 4 (4 6) 1 = 5 (2 6) 4 (4 6) 1 , $$
$p(5) = (5$
$$ 5) (2 6) 5 (4 6) 0 = (2 6) 5 $$

La probabilità richiesta (*) è quindi:

$p(0)^{2} + p(1)^{2} + p(2)^{2} + p(3)^{2} + p(4)^{2} + p(5)^{2} = (4$
$$ 6) 10 + 25 (2 6) 2 (4 6) 8 + 100 (2 6) 4 (4 6) 6 + $$

$$ +100 (2 6) 6 (4 6) 4 + 25 (2 6) 8 (4 6) 2 + (2 6) 10 = (2 3) 10 + 25 (1 3) 2 (2 3) 8 + 100 (1 3) 4 (2 3) 6 + $$

$$ +100 (1 3) 6 (2 3) 4 + 25 (1 3) 8 (2 3) 2 + (1 3) 10 = 575 $$
2187 $\cong 0.263 = 26.3$ %

Quindi la probabilità che il gioco finisca in pareggio è di circa il $26$ %.

$$ Q^{6 $$

Un elettrone, un protone e una particella $\alpha$ sono accelerati, da fermi, da una differenza di potenziale
$\Delta V$ e in seguito penetrano, nello stesso punto, in un campo magnetico B⃗ , uniforme e perpendicolare
alle velocità. Esprimere i raggi di curvatura delle traiettorie del protone e della particella $\alpha$ in funzione
del raggio di curvatura dell’elettrone. A parte l’entità dei raggi di curvatura, in cosa differiranno le
traiettorie?

Calcoliamo prima le velocità con cui l’elettrone, il protone e la particella $\alpha$ penetrano nel campo magnetico.
Indicando con $d$ lo spazio percorso dalle tre cariche prima di entrare nel campo magnetico, risulta:

$F=$ ma , $qE=$ ma,
$q\Delta V$
$d=$ ma ,
$a= q\Delta V$
$md, v= \sqrt{2ad}= \sqrt{2q}\Delta V$
$= v$

Ricordiamo che, per la legge di Lorentz, se una carica $q$ di massa $m$ entra in un campo magnetico uniforme
$B$ con velocità $v$ perpendicolare alla direzione del campo magnetico, essa è soggetta $ad$ una deflessione
circolare con raggio di curvatura $R$ dato da:

$R= mv$
$qB$ .

Boreale 2019 - Quesiti

Il raggio di curvatura dell’elettrone è dato da:

$Re=$ mev
$eB=$
$me\sqrt{2e}\Delta V$
$$ me eB $$
$= \sqrt{2eme}\Delta V$
$e2B^{2}$
$= \sqrt{2me}\Delta V$
$$ eB2 $$
$= Re$

Il raggio di curvatura del protone (ricordiamo che la massa del protone è circa 1836 volte la massa
dell’elettrone e la sua carica è uguale a quella dell’elettrone ma di segno opposto) è dato da:

$Rp= \sqrt$
$2mp\Delta V$
$qpB2 = \sqrt{2me}∙1836 \Delta V$
$$ eB2 $$
$= \sqrt{1836} \sqrt{2me} \Delta V$
$$ eB2 $$
$\cong 43 ∙Re= Rp$

Il raggio di curvatura della particella $\alpha$ (nucleo di elio costituito da $2$ protoni e due neutroni, quindi
$m\alpha = 2mp+ 2mn\cong 4mp; q\alpha = 2qp= 2e)$ è dato da:

$R\alpha = \sqrt{2m}\alpha \Delta V$
$q\alpha B^{2}$
$$ = \sqrt $$
$8mp \Delta V$
$2qp B^{2} = \sqrt{4mp} \Delta V$
e $B^{2}$
$= \sqrt{2} (\sqrt{2mp} \Delta V$
e $B^{2} ) = \sqrt{2}(Rp) \cong \sqrt{2}(43$ ∙Re) $\cong 61 Re= R\alpha$

Come già detto le traiettorie delle tre cariche sono circolari; la differenza è il verso di percorrenza: quello
del protone e della particella $\alpha$ , cariche positive, è l’opposto di quello dell’elettrone, carica negativa.

$$ Q^{7 $$

Due conduttori rettilinei, paralleli e complanari sono percorsi da correnti
concordi di intensità $I^{1} = 4$ A e $I^{2} = 6$ A. I due conduttori sono fissati
$ad$ una distanza di $2 cm$ uno dall’altro. Determinare modulo, direzione e verso
del campo magnetico nei punti del piano equidistanti dai due conduttori. Un
terzo conduttore rettilineo, attraversato da una corrente $I^{3},$ libero di muoversi
lateralmente, viene posto tra i primi due come in figura. Calcolare la posizione
nella quale quest’ultimo conduttore resta in equilibrio. Determinare il verso
della corrente $I^{3}$ in modo che la precedente posizione di equilibrio sia stabile.

I campi magnetici generati dalle correnti $1$ e $2$ sono perpendicolari al piano del foglio ed hanno versi
opposti (vedi figura).

Boreale 2019 - Quesiti

Il campo totale (nei punti del piano equidistanti dai due fili) è perpendicolare al piano del foglio ed ha il
verso di $B^{2}$
⃗⃗⃗⃗ (poiché l’intensità di $B^{2}$
⃗⃗⃗⃗ è maggiore dell’intensità di $B^{1}$
⃗⃗⃗⃗ ) ed ha intensità, per la legge di $Biot-$
Savart, pari a:

$B= \mu 0I$
$2\pi R$ , con $I= (6 -4)A= 2$ A ed $R= 1 cm.$

Quindi:
$B= \mu 0I$
$2\pi R=$
$4\pi ∙10-7 (H$
$m) ∙2$ A
$2\pi ∙10-2 m$
$= 4 ∙10-5 H$
$m^{2} ∙A= 4 ∙10-5$
$m^{2} kg$
$s^{2} A^{2}$
$$ m^{2 $$
$A= 4 ∙10-5 kg$
$s^{2} A=$

$= 4 ∙10-5 tesla= 4 ∙10-5 T$ .

Il terzo conduttore sarà in equilibrio quando le forze a cui è soggetto per effetto dei campi magnetici
generati dai due fili sono uguali ed opposte. In figura il caso in cui nel terzo conduttore $3$ la corrente circola
nello stesso verso delle correnti che circolano nei due conduttori $1$ e $2.$ Il conduttore $3$ è sottoposto $ad$ una
forza attrattiva sia dal conduttore $1$ sia dal conduttore $2.$

Detta $x$ la distanza in $cm$ dal conduttore $1,$ ed $l$ la lunghezza in $cm$ dei tre fili, le due forze hanno intensità:

$F1,3 = kI1 I^{3}$
$x l, F2,3 = k$
$I^{2} I^{3}$
$(2 -x) l,$
con $k= \mu 0$
$2\pi$

Il filo $3$ sarà in equilibrio quando:

$kI1 I^{3}$
$x l= k$
$I^{2} I^{3}$
$(2 -x) l , I^{1}$
$x=$
$$ I^{2 $$
$2 -x , 4(2 -x) = 6x , 10x= 8 , x= 8$
$10 cm= 0.8 cm$

Il conduttore è in equilibrio quando si trova a $0.8 cm$ dal filo $1.$

N.B. Se nel conduttore $3$ la corrente circola in verso opposto a quello dei conduttori $1$ e $2$ la posizione di
equilibrio è la stessa (le due forze $F1,3$ e $F2,3$ hanno verso opposto).

Stabiliamo ora quale verso deve avere la corrente che circola nel conduttore $3$ affinché la posizione di
equilibrio sia stabile (se sottoponiamo il filo $ad$ un piccolo spostamento dalla posizione di equilibrio esso
tende a ritornare nella posizione di equilibrio).

Se il verso è concorde con quello delle correnti che circolano nei fili $1$ e $2$ (come nella figura indicata
sopra), spostando per esempio il filo $3$ verso destra aumenta la forza attrattiva del filo $2$ e diminuisce quella

Boreale 2019 - Quesiti

attrattiva del filo $1,$ quindi il filo $3$ tende a spostarsi verso il filo $2$ e perciò l’equilibrio non è stabile.
Viceversa, se la corrente che circola nel filo $3$ è discorde con quella che circola nei fili $1$ e $2,$ la forza
esercitata dal filo $1$ è repulsiva e anche quella esercitata dal filo $2;$ spostando per esempio il filo $3$ verso
destra aumenta la forza repulsiva $F2,3$ e diminuisce la forza repulsiva esercitata dal filo $1:$ il filo $3$ tende
quindi $ad$ avvicinarsi al filo $1:$ anche in tal caso l’equilibrio non è stabile.

Quindi, a prescindere dal verso della corrente che circola nel filo $3,$ L’EQUILIBRIO NON è MAI
STABILE

$$ Q^{8 $$

Considerare due sistemi di riferimento inerziali $R$ e $R'$ con assi paralleli. $R'$ si muove con velocità
$v > 0,$ rispetto a $R,$ lungo l’asse $x.$ Inoltre, quando $t = t' = 0,$ le origini O, $O'$ dei due sistemi di
riferimento coincidono. Si dimostra che la velocità $w'$
⃗⃗⃗⃗ $= (wx$
',wy
', $wz$
') di una particella rispetto a $R'$ è
legata alla velocità w⃗⃗ = (wx,wy, $wz)$ della medesima particella rispetto a $R$ attraverso le seguenti
relazioni (trasformazioni delle velocità):

Mostrare, utilizzando le trasformazioni delle velocità, che se w⃗⃗ $= (0, c, 0)$ o $w$
⃗⃗⃗⃗⃗ $= (c, 0, 0),$ dove $c$ è
la velocità di un raggio luminoso nel vuoto, allora il modulo della velocità $w'$
⃗⃗⃗⃗ vale $c.$ Questo risultato
poteva essere dedotto a priori senza effettuare alcun calcolo?

Se w⃗⃗ $= (0, c, 0)$ si ha:
$$ wx $$
' $= 0 -v$
$1 -0 = -v , wy$
' =
$c(\sqrt{1} -v^{2}$
$c^{2})$
$1 -0$
$= \sqrt{c}^{2} -v^{2}$ ,
$$ wz $$
' $= 0$

Quindi:

$|w'$
⃗⃗⃗⃗ $| = \sqrt{wx'}^{2} +$ (wy')
$2 + (wz')^{2} = \sqrt{v}^{2} + (c^{2} -v^{2}) + 0 = c$

Se w⃗⃗ $= (c, 0, 0)$ si ha :

$$ wx $$
' $= c-v$
$1 -cv$
$$ c^{2 $$
$= c-v$
$1 -v$
$= c , wy$
' $= 0$ ,
$$ wz $$
' $= 0$
Quindi:
$|w'$
⃗⃗⃗⃗ $| = \sqrt{wx'}^{2} +$ (wy')
$2 + (wz')^{2} = \sqrt{c}^{2} + 0 + 0 = c$

Questo risultato poteva essere previsto senza calcoli in base al secondo postulato della relatività ristretta
(invarianza della velocità della luce), secondo cui la velocità della luce nel vuoto è costante $(c)$ in ogni
sistema di riferimento inerziale, indipendentemente dalla velocità $v$ con cui un sistema si muove rispetto
all’altro.

Con la collaborazione di Angela Santamaria

Ministero dell’Istruzione dell’’Università e della Ricerca
$LI03 -$ SCIENTIFICO - OPZIONE SCIENZE APPLICATE
$LI15 -$ SCIENTIFICO - SEZIONE $AD$ INDIRIZZO SPORTIVO

Tema di: FISICA
Il candidato risolva uno dei due problemi e risponda a $4$ quesiti del questionario.
PROBLEMA $1$
Nel laboratorio di fisica l’insegnante ha illustrato l’andamento del campo magnetico generato da una
bobina percorsa da corrente utilizzando della limatura di ferro per visualizzarne le linee di forza e uno
strumento che ha chiamato “magnetometro $ad$ effetto Hall” per misurarne la intensità in vari punti.
L’effetto Hall, che $fu$ scoperto nel 1879 dal fisico statunitense Edwin Herbert Hall, consente di
misurare l’intensità di un campo magnetico a partire dalla misura di una differenza di potenziale $\Delta VH$
detta appunto “di Hall”. In rete, oltre a queste informazioni, hai trovato la seguente descrizione
schematica di funzionamento dello strumento:
“Una lastrina di rame, di sezione rettangolare $S=$ l∙h, è percorsa da una corrente elettrica costante
I. Se si immerge questa lastrina in un campo magnetico uniforme $B$ diretto come in figura, la faccia
anteriore della lastrina si carica positivamente e quella posteriore (non visibile) si carica
negativamente. Tra le due facce quindi si genera una differenza di potenziale $\Delta VH$ (la differenza di
potenziale di Hall) e tra di esse è presente un campo elettrico $EH$ (detto campo di Hall) diretto come
indicato in figura.”

$1.$ Spiega l’origine del campo elettrico $EH$ e della differenza di potenziale $\Delta VH.$
$2.$ L’effetto Hall può essere usato per individuare il segno della carica in moto nei conduttori
metallici. Illustra qualitativamente come cambia il fenomeno a seconda del segno delle cariche
in moto.
$3.$ Dimostra l’esistenza di una relazione lineare $\Delta VH= kB$ tra la differenza di potenziale che si
instaura tra le facce della lastrina e l’intensità del campo magnetico $B,$ quando si è raggiunta la
condizione di equilibrio tra le forze che agiscono sulle cariche in moto.

$4.$ Perché il dispositivo possa essere usato come magnetometro, è necessario procedere alla sua
taratura, cioè alla misurazione di $\Delta VH$ in presenza di valori noti del campo magnetico $B.$ La
seguente tabella mostra i dati sperimentali di una taratura effettuata in laboratorio:
B[mT]
$$ 100 200 300 400 500 $$
$\Delta VH [10-7$ V]
$$ 0,70 1,5 2,3 3,4 4,3 $$

Mostra che tali dati sono compatibili con una relazione di proporzionalità diretta tra $\Delta VH$ e $B,$
traccia il grafico di taratura e fornisci una stima del valore della costante di proporzionalità $k.$
Come valuteresti l’incertezza della stima effettuata?
$5.$ Dati $h= 0,10 cm$ e $l= 2,0 cm$ e adoperando $9,1 ∙10-7 VT$
⁄ come valore della costante $k,$
ricava il valore della velocità degli elettroni di conduzione del rame (detta anche “velocità di
deriva”). A partire da questo valore, e dalla conoscenza del valore della corrente $I= 1,0$ A, come
determineresti la densità di carica per unità di volume presente nella lastrina?

PROBLEMA $2$
Due asteroidi, denominati $\alpha$ e $\beta$ , sono stati individuati a distanze $L^{0}\alpha = 4$ ore luce (pari a
$4,317 ∙1012m)$ e $L^{0}\beta = 7,5$ ore luce (pari a $8,094 ∙1012m)$ rispetto alla Terra. I due asteroidi sono
allineati con la Terra e la loro velocità rispetto alla Terra è trascurabile. Due astronavi, A e $B,$ partono
nello stesso istante verso i due asteroidi per un volo di ricognizione. L’astronave A ha il compito di
sorvolare l’asteroide $\alpha$ mentre l’astronave $B$ ha il compito di sorvolare l’asteroide $\beta$ .
Le due astronavi viaggiano a velocità relativistiche con moto rettilineo uniforme. L’astronave $B,$ che
deve percorrere una distanza maggiore, utilizza dei propulsori più potenti e viaggia $ad$ una velocità
maggiore di quella dell’astronave A. Nel sistema di riferimento della Terra, all’istante iniziale $t= 0,$
la situazione è quella rappresentata nella figura seguente:

$$ A B $$
$L0a$
$L0b$
$$ a b vA vB $$

Le due figure seguenti illustrano invece la situazione all’istante $t= 0$ nei sistemi di riferimento
dell’astronave A e dell’astronave $B.$

$1.$ Completa le due figure disegnando su ciascun oggetto un vettore che rappresenti la sua
velocità nel sistema di riferimento in esame e scrivendo in corrispondenza di ciascuna distanza
la relazione che permette di calcolarla. Spiega cosa cambia nei due sistemi di riferimento A e
$B$ rispetto al riferimento della Terra.
Il comandante della missione decide di premiare l’astronauta che per primo raggiungerà l’asteroide
che gli è stato assegnato. I due astronauti si accordano di inviare all’altro il tempo di arrivo
sull’asteroide obiettivo della propria missione.
$2.$ Quando l’astronave A raggiunge l’asteroide $\alpha$ il suo orologio di bordo indica un tempo
$t'\alpha = 9h 9$ min $54s$ (pari a $3,299 ∙104s)$ e quando l’astronave $B$ raggiunge l’asteroide $\beta$ , il
suo orologio di bordo indica anch’esso il tempo $t'\beta = 9h 9$ min $54s$ . Determina la velocità
dell’astronave A e quella dell’astronave $B$ (in unità $c)$ rispetto alla terra. Determina anche la
velocità relativa tra le due astronavi.
Quando l’astronauta A riceve l’informazione sul tempo di arrivo di $B$ sull’asteroide $\beta$ , ritiene di aver
vinto e di avere quindi diritto al premio.
$3.$ Dalle trasformazioni di Lorentz o dalle relazioni tra intervalli di tempo misurati in sistemi di
riferimento diversi, deduci il tempo $t'\beta$ di arrivo di $B$ sull’asteroide $\beta$ come determinato da
A e verifica che effettivamente egli giustamente ritiene di aver diritto alla promozione.

$4.$ Ma anche l’astronauta $B$ ritiene di aver vinto, in base alla sua misura del tempo $t'\alpha$ impiegato
da A. Utilizzando ancora una volta le trasformazioni di Lorentz o le relazioni tra intervalli di
tempo misurati in sistemi di riferimento diversi, verifica la giustezza delle conclusioni tratte
da $B.$
Il comandante della missione, consultato un testo di relatività, si scusa con i due astronauti e $li$ premia
entrambi: ha capito infatti che si è verificata una inversione temporale tra due eventi visti da
osservatori diversi, da lui non prevista.
$5.$ Spiega se questa inversione temporale è possibile, in quali condizioni si può verificare e se,
nel caso in esame, è questa la ragione del contenzioso tra i due astronauti.

QUESTIONARIO

$1.$ In un solenoide cilindrico ideale nel vuoto, costituito da $400$ spire e lungo $10,0 cm$ viene fatta
passare una corrente alternata i(t) $= 0,50sen(63t)$ A. Sull’asse del solenoide è posta una
spira circolare, coassiale con il solenoide, in modo che si possa considerare che tutto il campo
magnetico uscente dal solenoide attraversi la sezione della spira. La spira ha un raggio di
$5,0 cm$ e una resistenza ohmica di $0,20\Omega$ . Determina il valore massimo della forza
elettromotrice indotta nella spira e la corrente indotta che la percorre.
$2.$ Una lampadina $ad$ incandescenza, alimentata con tensione alternata pari a $220 V,$ assorbe una
potenza elettrica media pari a $1,0 ∙102 W$ ed emette luce grazie al surriscaldamento di un
filamento di tungsteno, con
Potenza media luminosa emessa
Potenza media elettrica $assorbita= 2%$
Ipotizzando per semplicità che la lampadina sia una sorgente puntiforme che emette
uniformemente in tutte le direzioni, e che la presenza dell’aria abbia un effetto trascurabile,
calcolare $ad$ una distanza $d= 2,0m$ dalla lampadina:
a) l’intensità media della luce;
$b)$ i valori efficaci del campo elettrico e del campo magnetico.
$3.$ In un tubo a raggi catodici gli elettroni prodotti dal catodo vengono accelerati da una
differenza di potenziale di $1,00 ∙105V.$ Sapendo che la distanza tra catodo e anodo è di
$20,0cm,$ determina la velocità degli elettroni (in metri al secondo) in prossimità dell’anodo
tenendo conto degli effetti relativistici.
$4.$ Tre cariche puntiformi di valore $q$ sono poste $ai$ vertici di un triangolo equilatero di lato $1m;$
dopo aver determinato l’energia potenziale del sistema, stabilisci come essa varia se una delle
cariche cambia segno e fornisci la tua interpretazione qualitativa del risultato, con riferimento
al cambiamento determinatosi rispetto alla situazione iniziale.
$5.$ Dimostra che a un elettrone non relativistico, accelerato da fermo mediante una differenza di
potenziale $\Delta V$ misurata in volt, si può associare un’onda di $de$ Broglie la cui lunghezza d’onda
$\lambda$ può essere espressa dalla formula:
$\lambda = \sqrt{1},504$
$\Delta V nm$

$6.$ Si osserva che illuminando un catodo di argento con luce ultravioletta di lunghezza d’onda
$100 nm$ occorre applicare un potenziale ritardante di $7,7 V$ per arrestare completamente i
fotoelettroni. Qual è il lavoro di estrazione dell’argento?
$7.$ Un carro merci di 3000 $Kg$ viene fermato da un respingente formato da sistema combinato di
molle; la prima, che ha una costante elastica $k^{1} =$ 1500 $Nm$
⁄ , agisce non appena il carro
merci viene in contatto con il respingente; la seconda, che ha una costante elastica
$k^{2} =$ 3500 $Nm$
⁄ , inizia $ad$ agire quando il respingente è compresso di $20 cm.$ Si osserva che
il carro merci si ferma quando il respingente è compresso di $50 cm.$ Determina la velocità
iniziale del carro merci.
$8. Ti$ trovi di fronte a due altoparlanti uguali $A^{1}$ e $A^{2},$ distanti $2$ metri uno dall’altro, che
emettono un suono monocromatico; osservi che quando sei equidistante da entrambi gli
altoparlanti l’intensità sonora che percepisci ha un minimo e che quando, partendo dalla
posizione di uno dei due altoparlanti $(ad$ esempio $A^{1}) ti$ muovi lungo la retta perpendicolare
alla congiungente i due altoparlanti, l’intensità sonora che percepisci è massima quando sei a
distanza di $2$ metri da $A^{1}.$ Determina la lunghezza d’onda del suono emesso dagli altoparlanti.

__________________________
Durata massima della prova: $6$ ore.
È consentito l’uso di calcolatrici scientifiche $e/o$ grafiche purché non siano dotate di capacità di calcolo
simbolico (O.M. $n. 350$ Art. $18$ comma $8).$
È consentito l’uso del dizionario bilingue $(italiano-lingua$ del paese di provenienza) per i candidati di
madrelingua non italiana.

Ministero dell’Istruzione dell’’Università e della Ricerca
$LI03 -$ SCIENTIFICO - OPZIONE SCIENZE APPLICATE
$LI15 -$ SCIENTIFICO - SEZIONE $AD$ INDIRIZZO SPORTIVO

Tema di:
MATEMATICA
FISICA
Il candidato risolva uno dei due problemi e risponda a $4$ quesiti del questionario.
PROBLEMA $1$
Hai giocato con il tuo fratellino con un trenino elettrico da lui ricevuto in regalo per il compleanno.
Osservandolo, più volte $ti$ sei chiesto quale sia il principio di funzionamento delle varie parti. In
particolare hai osservato che quando un vagone viene immesso in un binario morto, nei pressi del
respingente finale il vagone subisce un forte rallentamento fino quasi a fermarsi; questo consente al
vagone di raggiungere il respingente finale con velocità molto bassa e quindi di colpirlo senza
conseguenze. Per capire il funzionamento di questo freno, hai analizzato in dettaglio il binario morto
e un vagone; hai notato che sulla parte finale del binario morto è presente un piccolo magnete
permanente di forma quadrata di lato $L= 5,0cm$ fissato tra le due rotaie del binario. Inoltre sul fondo
del vagone è presente una cornice quadrata di dimensione uguale al magnete su cui è avvolto un filo
a formare una spira quadrata di resistenza elettrica $R= 0,020\Omega$ . Analizzando il moto del vagone hai
compreso che quando il vagone passa sopra il magnete, anche la spira passa sopra il magnete (come
mostrato in figura) e che in questo passaggio il vagone rallenta.

$1.$ Spiega qualitativamente l’origine della azione frenante dovuta al passaggio della spira sopra
al magnete.
$2.$ Assumendo che il magnete permanente generi sopra di sé un campo magnetico
$B= 0,85T$ uniforme, perpendicolare al magnete stesso (e quindi anche alla spira) e
trascurando tutti gli effetti di bordo, dimostra che l’equazione del moto della spira durante il
passaggio sul magnete è:
$$ mdv $$
$dt= -B2L^{2}$
$$ R v $$
dove $m= 50g$ è la massa del vagone.
$3.$ Verifica che l’equazione del moto ha come soluzione $v= v0e-t\tau$
⁄ dove $v^{0}$ è la velocità del
vagone (e quindi della spira) quando entra nel campo del magnete permanente, esprimendo la
costante $\tau$ in termini delle altre grandezze presenti nell’equazione del moto e calcolandone il
valore numerico.
$4.$ Assumendo per la velocità iniziale il valore $v^{0} = 0,20 ms$
⁄ , determina il tempo che la spira
impiega $ad$ attraversare completamente il magnete e la velocità che essa ha dopo aver
attraversato il magnete.
$5.$ Dimostra che se la velocità iniziale $v^{0}$ è inferiore $ad$ un valore limite, la spira non riesce a
superare il magnete permanente: in queste condizioni il freno agisce come un blocco
insormontabile per il vagone. Determina il valore numerico della velocità limite.

PROBLEMA $2$
Il $14$ ottobre 2012 Felix Baumgartner ha
realizzato un lancio storico ottenendo tre record
mondiali:
 la maggiore altezza raggiunta da un uomo
in una ascesa con un pallone $(39045 m);$
 il lancio più alto in caduta libera;
 la più alta velocità in caduta libera
$(1341,9 km/h).$
Dopo l’ascesa in un pallone gonfiato a elio, si è
lanciato verso la Terra, protetto da una tuta
speciale, e ha aperto il suo paracadute dopo $4$
minuti e $20$ secondi di caduta libera. Il lancio è durato in totale $9$ minuti e $3$ secondi.
Nelle figure seguenti sono riportati gli andamenti della velocità e della quota di Baumgartner durante
il lancio, a partire dall’istante del lancio $t= 0.$

Per realizzare l’ascesa è stato necessario utilizzare un enorme pallone deformabile: ciò per fare in
modo che all’aumentare della quota e al diminuire della densità dell’aria il volume del pallone possa
aumentare, mantenendo così costante la spinta verso l’alto (spinta di Archimede). Su un giornale
veniva riportato “Per assicurare una velocità d’ascesa sufficiente la spinta verso l’alto era circa
doppia di quella necessaria per tenere in equilibrio il sistema. In pratica, aggiungendo alla massa di
Baumgartner quella del pallone riempito $ad$ elio, era necessario sollevare una massa di circa $3$
tonnellate”. La massa di Baumgartner e della sua tuta è pari a circa $120 kg.$

Fase di ascesa
$1.$ Disegna il diagramma delle forze subito dopo il decollo, trascurando la forza di attrito. Non è
necessario che il disegno sia in scala, deve però essere coerente con la situazione fisica.
$2.$ Dopo qualche minuto di ascensione il moto può essere considerato rettilineo uniforme. In
questa situazione, calcola approssimativamente il valore della forza di attrito con l’aria.
Fase di lancio
Scegli un sistema di riferimento e studia la caduta verticale del sistema $S$ costituito da Baumgartner
e dalla tuta. In questa fase, si può ritenere trascurabile l’effetto della spinta di Archimede.
$3.$ Utilizzando i grafici, determina l’accelerazione di $S$ per $t< 20s$ e commenta il risultato
ottenuto.
$4.$ Il sistema $S$ ha raggiunto velocità supersoniche durante la caduta? Tieni presente la seguente
tabella, che riporta la velocità del suono in aria $ad$ altezze diverse:
Altezza $(km)$
$$ 10 20 30 40 $$
Velocità del suono $(m/s)$
$$ 305 297 301 318 $$
$5.$ Calcola la variazione di energia meccanica $\Delta Em$ tra il momento in cui Baumgartner salta e il
momento in cui raggiunge la massima velocità; fornisci la tua interpretazione del risultato.
$6.$ Nella figura seguente vengono riportati i diagrammi delle forze applicate al sistema $S$ durante
la fase di lancio. P⃗ rappresenta la forza peso e $f$
⃗⃗⃗ la forza di attrito con l’aria. Poni in
corrispondenza i diagrammi con i tre istanti $t^{1} = 40s, t^{2} = 50s, t^{3} = 60s.$

$7.$ Determina a quale altitudine Baumgartner ha aperto il paracadute. Ricordando che il lancio è
durato in totale $9$ minuti e $3$ secondi, calcola la velocità media di discesa dopo l’apertura del
paracadute, fino all’arrivo al suolo. $Ti$ appare ragionevole considerare il moto in quest’ultima
fase come un moto rettilineo uniforme?
$8.$ Per valutare il rischio di traumi derivanti dall’impatto dell’arrivo al suolo, fornisci una stima
dell’altezza da cui Baumgartner sarebbe dovuto saltare, senza paracadute, per giungere al
suolo con la stessa velocità.

QUESTIONARIO
$1.$ Una spira a forma di parabola di equazione $y= ax2$ è immersa in un campo magnetico
uniforme $B$ perpendicolare al piano $xy$ della parabola. All’istante $t= 0$ una barretta inizia a
traslare lungo la parabola partendo dal suo vertice con accelerazione costante come indicato
in figura. Determinare la forza elettromotrice indotta sulla spira in funzione della $y.$

$2.$ La posizione di una particella varia con il tempo secondo l’equazione:
$x= \alpha t(1 -\beta t),$ dove $\alpha$ e $\beta$ sono due costanti, con $\beta > 0.$
Determina:
a) la velocità e l’accelerazione della particella in funzione del tempo;
$b)$ l’intervallo di tempo necessario alla particella, che parte dall’origine, per ritornare
nell’origine e lo spazio percorso in questo intervallo di tempo.
$3.$ Tre cariche puntiformi di valore $q$ sono poste $ai$ vertici del triangolo equilatero ABC, i cui lati
misurano $1m.$
a) Determina l’energia potenziale del sistema.
$b)$ La carica collocata in $C$ viene spostata verso il segmento $AB$ lungo la perpendicolare $ad$
$AB;$ traccia il grafico dell’andamento dell’energia potenziale del sistema in funzione
della distanza della carica dal segmento $AB.$

$4.$ Un punto materiale si muove nel piano $xy$ secondo la legge oraria:
$x= a∙sen(\omega t), y= a(1 -cos(\omega t)),$
con a e $\omega$ costanti positive. Determina la distanza del punto dall’origine al tempo $t= \tau$ e le
direzioni dei vettori velocità e accelerazione all’istante $t= 0.$

$5.$ Un elettrone si muove, partendo da fermo, in un campo elettrico uniforme di intensità
$E= 10$ kVcm
⁄
. Descrivi il procedimento che adotteresti per determinare l’istante in cui
l’energia cinetica dell’elettrone sarà uguale alla sua energia a riposo.
$6.$ Quanto tempo impiegherà un’onda sonora a percorrere la distanza $l$ tra i punti A e $B$ se la
temperatura dell’aria tra di essi varia linearmente da $T^{1}$ a $T^{2}?$ Tieni presente che la velocità
di propagazione nell’aria varia in funzione della temperatura secondo la legge:
$v= a\sqrt{T}$
dove a è una costante.
$7.$ Il grafico riportato nella figura seguente potrebbe rappresentare l’andamento della velocità
con cui una carica puntiforme si allontana per repulsione elettrostatica da un’altra carica
puntiforme, fissa, di eguale segno? Motiva la tua risposta.

$8.$ Un punto si muove lungo l’asse $x$ secondo la legge:
$x= a∙sen2 (3t-\pi$
con a costante positiva. Determina:
a) l’ampiezza e il periodo di oscillazione;
$b)$ l’istante $t$ in cui il punto raggiunge per la prima volta la massima distanza dall’origine.

__________________________
Durata massima della prova: $6$ ore.
È consentito l’uso di calcolatrici scientifiche $e/o$ grafiche purché non siano dotate di capacità di calcolo
simbolico (O.M. $n. 350$ Art. $18$ comma $8).$
È consentito l’uso del dizionario bilingue $(italiano-lingua$ del paese di provenienza) per i candidati di
madrelingua non italiana.

Ministero dell’Istruzione dell’’Università e della Ricerca
$LI03 -$ SCIENTIFICO - OPZIONE SCIENZE APPLICATE
$LI15 -$ SCIENTIFICO - SEZIONE $AD$ INDIRIZZO SPORTIVO

Tema di: MATEMATICA
Il candidato risolva uno dei due problemi e risponda a $4$ quesiti del questionario.
PROBLEMA $1$
Fissati due parametri reali $S> 0, k> 0,$ considera la funzione:
fk(x) =
$1 + e-kx$
il cui grafico viene indicato con $\Gamma k.$
La funzione fk(x) può essere adoperata per studiare la possibile evoluzione nel tempo di una
popolazione che abbia capacità di riprodursi, nell’ipotesi in cui la limitatezza delle risorse disponibili
causi l’esistenza di una “soglia di sostenibilità” al di sotto della quale la popolazione è costretta a
mantenersi.
$1.$ Dimostra che i valori assunti dalla funzione fk(x) si mantengono all’interno dell’intervallo
aperto delimitato inferiormente dal valore $0$ e superiormente dal valore $S,$ dove quest’ultimo
rappresenta tale soglia di sostenibilità.
$2.$ Osservando $\Gamma k,$ individua la trasformazione geometrica da applicare a $\Gamma k$ per farlo diventare
il grafico di una funzione dispari, e determina l’espressione analitica di tale funzione.
$3.$ Individua graficamente o analiticamente il valore della $x$ corrispondente alla massima velocità
di crescita di una popolazione secondo il modello rappresentato dalla funzione fk(x) ;
determina quindi, in funzione dei parametri $S$ e $k,$ il valore di tale velocità massima.
Dovendo effettuare lo studio di una coltura batterica in un ambiente a risorse limitate, puoi pensare,
al fine di semplificare i calcoli, di approssimare la funzione fk(x) con una funzione come gk(x), il
cui grafico è riportato nella figura seguente:

Il valore di gk(x) passa da $0$ a $S$ con una rampa lineare, di pendenza pari alla pendenza di $\Gamma k$ nel
punto di ascissa $0.$
$4.$ Determina, in funzione dei parametri $S$ e $k,$ l’espressione analitica della funzione gk(x).
$5.$ Illustra il procedimento che adotteresti per valutare la accettabilità dell’approssimazione di
fk(x) fornita da gk(x).
$6.$ All’aumentare di $k,$ tale approssimazione diventa migliore? Motiva la tua risposta.

PROBLEMA $2$
Il tuo liceo, nell'ambito dell'alternanza scuola lavoro, ha organizzato per gli studenti del quinto anno
un’attività presso lo stabilimento ICE EXPRESS sito nella tua regione. All'arrivo siete stati divisi in
vari gruppi. Il tuo, dopo aver visitato lo stabilimento e i laboratori, partecipa $ad$ una riunione legata
$ai$ processi di produzione.
Un cliente ha richiesto una fornitura di blocchi di ghiaccio a forma di parallelepipedo a base quadrata,
di volume $10 dm3,$ che abbiano il minimo scambio termico con l’ambiente esterno, in modo da
resistere più a lungo possibile prima di liquefarsi.
Al tuo gruppo viene richiesto di determinare le caratteristiche geometriche dei blocchi da produrre,
sapendo che gli scambi termici tra questi e l’ambiente avvengono attraverso la superficie dei blocchi
stessi.
$1.$ Determina il valore del lato $b$ della base quadrata che consente di minimizzare lo scambio
termico e il corrispondente valore dell’altezza $h,$ tenendo presente la necessità che il volume
sia $10 dm3.$

Il blocco di ghiaccio al termine del processo produttivo si trova alla temperatura di $-18^\circ C.$ Esso viene
posto su un nastro trasportatore che lo porta a un camion frigorifero, attraversando per due minuti un
ambiente che viene mantenuto alla temperatura di $10^\circ C;$ esso pertanto tende a riscaldarsi, con velocità
progressivamente decrescente, in funzione della differenza di temperatura rispetto all’ambiente, e
inizia a fondere se lungo il percorso raggiunge la temperatura di $0^\circ C.$
$2.$ Scegli, motivando la tua scelta, quale delle seguenti funzioni è più idonea per rappresentare il
processo di riscaldamento prima dell’inizio della liquefazione $(Ta =$ temperatura ambiente,
$Tg =$ temperatura del ghiaccio all’istante $t = 0,$ T(t) = temperatura del ghiaccio all’istante $t,$
dove $t$ è il tempo trascorso dall’inizio del riscaldamento, in minuti):
T(t) $= (Ta-Tg)e-Kt$
T(t) $= (Ta-Tg). (1 -e-Kt) + Tg$
T(t) $= (Ta-Tg)eKt-Ta$
e determina il valore che deve avere il parametro $K$ perché il blocco di ghiaccio non inizi a
fondere durante il percorso verso il camion frigorifero.
$3.$ Poiché il parametro $K$ varia in funzione di diversi fattori produttivi, c’è un’incertezza del $10%$
sul suo effettivo valore. Ritieni che questo determini una incertezza del $10%$ anche sul valore
della temperatura $T$ del blocco di ghiaccio all’istante in cui raggiunge il camion frigorifero?
Motiva la tua risposta, in modo qualitativo o quantitativo.
L’azienda solitamente adopera, per contenere l'acqua necessaria a produrre un singolo blocco di
ghiaccio, un recipiente cilindrico, con raggio della base eguale a $1,5 dm,$ e altezza eguale a $2 dm.$
$4.$ Sapendo che nel passaggio da acqua a ghiaccio il volume aumenta del $9,05%,$ stabilisci se il
suddetto recipiente è in grado di contenere l'acqua necessaria a produrre il blocco richiesto e,
in tal caso, a quale altezza dal fondo del recipiente arriverà l'acqua.

QUESTIONARIO
$1)$ In figura è riportato il grafico della funzione f'(x), derivata della funzione f(x). Il grafico
presenta un asintoto verticale per $x= 0.$ Supponendo che la funzione $f$ sia definita in $R,$
descrivi la derivabilità della funzione nel punto di ascissa nulla e fornisci un grafico probabile
della funzione in un intorno di zero.

$2)$ Individua il valore di $k$ per cui la tangente nell’origine al grafico della funzione

f(x) =
$x-k$

forma un angolo di $\pi 6$
⁄ radianti con l’asse delle ascisse.

$3)$ Risolvi esclusivamente per via grafica la disequazione:

$|x-2| > |x-6|$

$4)$ Il cerchio di raggio $R$ centrato nel vertice in basso a sinistra del quadrato in figura ne ricopre
metà della superficie; il cerchio di raggio $r$ centrato nel centro del quadrato ne occupa metà
della superficie. Sapendo che i quadrati sono equivalenti, determina il rapporto $R/r.$

$5)$ Presi due punti A(a, $a^{2})$ e B(b, $b^{2})$ sulla parabola $y= x^{2}$ , traccia la retta $OC,$ parallela alla
retta $AB$ e passante per l’origine e per il punto C(c, $c^{2}).$

Dimostra che $a+ b= c.$
Traccia un’altra parallela $DE,$ passante per due punti $D$ ed E appartenenti alla parabola, e
mostra che i punti medi delle tre parallele giacciono su una retta.
$6)$ Il grafico della funzione polinomiale cubica $y=$ f(x) intercetta l’asse $x$ nei punti di ascissa
$10, 100$ e 1000. È sufficiente questa informazione per individuare le coordinate del punto di
flesso? Se sì, determinale. Se no, spiega per quale motivo.

$7)$ Una sfera, il cui centro è il punto $K(1, 0, 1),$ è tangente al piano Π avente equazione
$x-2y+ z+ 1 = 0.$ Qual è il punto di tangenza? Qual è il raggio della sfera?

$8)$ Se si lancia una moneta $2$ volte, la probabilità di ottenere una testa e una croce (in qualsiasi
ordine) è pari al $50%.$ Se la moneta viene lanciata $4$ volte, la probabilità di ottenere due teste
e due croci, in qualsiasi ordine, è ancora pari al $50%?$ Motiva la tua risposta.

__________________________
Durata massima della prova: $6$ ore.
È consentito l’uso di calcolatrici scientifiche $e/o$ grafiche purché non siano dotate di capacità di calcolo
simbolico (O.M. $n. 350$ Art. $18$ comma $8).$
È consentito l’uso del dizionario bilingue $(italiano-lingua$ del paese di provenienza) per i candidati di
madrelingua non italiana.

Esempio seconda prova $- Matematica-Fisica$
Problema $1$

Tema di MATEMATICA E FISICA

PROBLEMA $1$

Il campo magnetico permanente produce nella spira una corrente indotta (per effetto della
variazione del flusso attraverso la spira quadrata), il cui verso è tale da opporsi alla causa che l’ha
prodotta (variazione del flusso attraverso la spira). Siccome il flusso attraverso la spira quadrata
tende $ad$ aumentare man mano che essa penetra nel campo magnetico permanente, la corrente
indotta ostacola (per la legge di Lenz) tale aumento, producendo quindi un rallentamento del treno.

Esempio seconda prova $- Matematica-Fisica$
Problema $1$

Osserviamo che la corrente indotta produce un campo magnetico (campo magnetico indotto) che,
sempre per la legge di Lenz, ha verso tale da ostacolare la causa che l’ha prodotto.

Indicando con $dx$ il tratto della spira quadrata immerso nel campo permanente all’istante $dt,$ dopo
questo istante la superficie $S$ della spira interna al campo magnetico permanente è Ldx. Indicata
con i la corrente indotta, e ricordando che nel tratto di circuito di lunghezza $L$ il campo $B$ produce
una forza pari a BiL, risulta: $F= ma= m$
$$ dv $$
$dt=$ BiL. Detta $f$ la forza elettromotrice indotta, si ha:
$f= -d\Phi (B)$
$$ dt $$
; $d\Phi (B) =$ B(dS) = B(Ldx) ; $f= -d\Phi (B)$
$$ dt $$
$= -BLdx$
$$ dt $$
$= -BLv$
Ma è:
$i=$
$R$ , quindi; $m$
$$ dv $$
$dt= BiL= BL$
$R=$
$$ BL $$
$R(-BLv) = -$
$B2L^{2}$
$R v$ .

Risulta quindi dimostrato che: $m$
$$ dv $$
$dt= -$
$B2L^{2}$
$R v (*)$

Per trovare l’equazione del moto dobbiamo risolvere l’equazione differenziale (*) che riscriviamo
nella forma seguente:

$$ dv $$
$v= -B2L^{2}$
$m R dt$
Integrando membro a membro abbiamo:

$ln|v| = -B2L^{2}$
$m R t+ K , |v| = e-B2L^{2}$
$m R t+K= eKe-B2L^{2}$
$m R t , v= H e-B2L^{2}$
$m R t (H= \pm eK)$
Siccome per $t= 0$ risulta $v= v^{0}$ , abbiamo: $v^{0} = H$ , quindi, posto $\tau =$
$m R$
$B2L^{2}$ :

Esempio seconda prova $- Matematica-Fisica$
Problema $1$

$v= v^{0} e-t$
$\tau$ (∗∗) ,
con $\tau = m R$
$B2L^{2}$

Calcoliamo il valore numerico di $\tau$ (che ha le dimensioni di un tempo, come si può dedurre dalla
(**), dovendo essere
$\tau$ un numero puro:

$\tau = m R$
$B2L^{2} =$
$(50 g)(0.020 \Omega$ )
$(0.85 T)2(5.0 cm)2 = (5 ∙10-2kg)(20 ∙10-3 \Omega$ )
$0.7225 T^{2} (25 ∙10-4m^{2}) =$
$10-3$
$1.81 ∙10-3 s\cong 0.55 s$

Quindi: $\tau = 0.55 s$ .

Osserviamo che $v=$
$$ dx $$
$dt$ , quindi: $dx= vdt= v^{0} e-t$
$\tau dt$ e integrando membro a membro:

$x= \int v^{0} e-t$
$\tau dt= -v^{0}\tau \int -1$
$\tau e-t$
$\tau dt= -v^{0}\tau e-t$
$\tau +$ A

Essendo $x=0$ per $t=0$ risulta: $0 = -v^{0}\tau +$ A , $A= v^{0}\tau$ , quindi l’equazione del moto è:

$x= -v^{0}\tau e-t$
$\tau + A= -v^{0}\tau e-t$
$\tau + v^{0}\tau = v^{0}\tau (1 -e-t$
$\tau ) =$ x(t)

La spira attraversa completamente il magnete quando $x=2L,$ quindi:

$2L= v^{0}\tau (1 -e-t$
$\tau ) ; 2L$
$v^{0}\tau = 1 -e-t$
$\tau$ ,
$e-t$
$\tau = 1 -2L$
$v^{0}\tau ; e-t$
$0.55 = 1 -2 ∙0.05$
$0.20 ∙0.55 = 0.09$ ,

$-t$
$\tau = ln(0.09)$ ,
$t= -\tau ln(0.09) = (-0.55 ln(0.09)) s= 1.32 s$ .

Il tempo che impiega la spira per attraversare completamente il magnete è quindi $t=1.32 s$ .

Calcoliamo la velocità che ha la spira dopo aver attraversato completamente il magnete, cioè la
velocità all’stante $t=1.32 s,$ sostituendo tale tempo nella $v= v^{0} e-t$
$\tau$ :

$v= (0.20 m/s) e-1.32$
$0.55 = 0.02 m/s$ .

Esempio seconda prova $- Matematica-Fisica$
Problema $1$

Dalla legge oraria del moto $v^{0}\tau (1 -e-t$
$\tau ) =$ x(t) deduciamo che se $t\to +\infty , x\to v^{0}\tau$
Uguagliando tale valore a $2L$ troviamo il valore limite di $v^{0}:$

$v^{0} \tau = 2L,$
$v^{0} = 2L$
$\tau = 2 ∙0.05 m$
$0.55 s$
$= 0.18 m/s$

Se la velocità iniziale è inferiore a $0.18 m/s$ (valore della velocità limite) la spira non riesce a
superare il magnete.

Facciamo un esempio con $v^{0} = 0.10$
$s$ .
Troviamo il tempo necessario per attraversare completamente il campo magnetico permanente
ragionando come nel punto $4):$

La spira attraversa completamente il magnete quando $x= 2L,$ quindi:

$2L= v^{0}\tau (1 -e-t$
$\tau ) ; 2L$
$v^{0}\tau = 1 -e-t$
$\tau$ ,
$e-t$
$\tau = 1 -2L$
$v^{0}\tau ; e-t$
$0.55 = 1 -$
$$ 0.1 $$
$0.10 ∙0.55 = -0.8$ ,
che è impossibile.

Osserviamo che deve essere:

$1 -$
$2L$
$v^{0}\tau > 0 , 1 >$
$2L$
$v^{0}\tau , v^{0} >$
$2L$
$\tau$ , quindi $v^{0} >$
$0.1 m$
$0.55 s\cong 0.18 m/s$ come già detto.

Con la collaborazione di Angela Santamaria e Stefano Scoleri

Esempio seconda prova $- Matematica-Fisica$
Problema $2$

Tema di MATEMATICA E FISICA

PROBLEMA $2$

Esempio seconda prova $- Matematica-Fisica$
Problema $2$

Fase di ascesa

Disegna il diagramma delle forze subito dopo il decollo, trascurando la forza di attrito. Non è
necessario che il disegno sia in scala, deve però essere coerente con la situazione fisica.

La forza peso del sistema è diretta verso il basso ed ha intensità $P$ pari a $(mg=$ 3000 ∙g) $N:$

$P=$ 3000 $∙9.8 N= 29400 N$

La spinta verso l’alto necessaria per mantenere in equilibrio il sistema è una forza diretta verso
l’alto di intensità pari a quella di $P.$ La spinta $S$ applicata è doppia di tale valore, quindi:

$S= 58800 N$

Diagramma delle forze subito dopo il decollo $(S$ spinta, $P$ peso del sistema):

Dopo qualche minuto di ascensione il moto può essere considerato rettilineo uniforme. In questa
situazione, calcola approssimativamente il valore della forza di attrito con l’aria.

Se il moto è rettilineo uniforme vuol dire che la spinta $S$ ha modulo pari al peso $P$ del sistema più
la forza d’attrito $FA$ (diretta verso il basso):

$P+ FA= S , FA= S-P= P= 29400 N$

Notiamo che consideriamo il peso costante, anche se, diminuendo $g$ all’aumentare dell’altitudine,
esso diminuisce seppur di poco.

Esempio seconda prova $- Matematica-Fisica$
Problema $2$

Fase di lancio

Scegli un sistema di riferimento e studia la caduta verticale del sistema $S$ costituito da
Baumgartner e dalla tuta. In questa fase, si può ritenere trascurabile l’effetto della spinta di
Archimede.

Fissiamo un sistema di riferimento con l’origine O nel punto di atterraggio, e l’asse $z$ diretto verso
l’alto:

Dai dati forniti e dai due grafici deduciamo:

$A=posizione$ di lancio, $t=0, v=0,$
$z^{0} = 39045 m \cong 39 km$

$B=posizione$ dopo $50 s, z^{1} = 28 km$

$v= 1341,9 km$
$h= 1391,9$
$$ 3.6 m $$
$s\cong 373 m/s$

$C=posizione$ dopo $260 s, v=50 m/s,$
$z^{2} = 2.5 km$

Dopo $50$ secondi si raggiunge la velocità massima (circa $373 m/s)$ all’altezza dal suolo di circa $28$
$km.$ Dopo $260$ secondi si raggiunge la velocità di $50 m/s$ in caduta libera all’altezza di circa
$2.5 km.$ Notiamo che aumentando la velocità aumenta la forza d’attrito. A questo punto si apre il
paracadute. Dai due grafici si deduce che la velocità si mantiene abbastanza costante. Dopo $9$
minuti e $3$ secondi $(543$ secondi) Baumgartner raggiunge il suolo.

Utilizzando i grafici, determina l’accelerazione di $S$ per $t< 20 s$ e commenta il risultato
ottenuto.

Da $0$ a $20$ secondi la velocità passa da $0 m/s$ a circa $195 m/s,$ quindi si ha un’accelerazione:

$a= \Delta v$
$\Delta t= 195 m/s$
$20 s$
$\cong 9.75 m$
$s^{2}$ .

Notiamo che il valore dell’accelerazione è più o meno uguale a quello dell’accelerazione di
gravità, giustificabile dal fatto che l’attrito può essere trascurato all’altezza considerata, essendo
l’aria molto rarefatta (ricordiamo che $ad$ un’altezza $h$ dalla Terra risulta: $g= G$
$$ MT $$
$(RT+h)2$ ).

Esempio seconda prova $- Matematica-Fisica$
Problema $2$

Il sistema $S$ ha raggiunto velocità supersoniche durante la caduta? Tieni presente la seguente
tabella, che riporta la velocità del suono in aria $ad$ altezze diverse:

A $10 km$ di altezza $(t= 150$ secondi dal lancio) si ha $v= 100 m/s$ : minore della velocità del
suono.

A $20 km$ di altezza $(t\cong 75$ secondi dal lancio) si ha $v= 220 m/s$ : minore della velocità del
suono.

A $30 km$ di altezza $(t\cong 45$ secondi dal lancio) si ha $v\cong 370 m/s$ : maggiore della velocità del
suono.

Dai due grafici forniti di osserva che si raggiunge la velocità di circa $320 m/s$ (superiore alla
massima velocità fornita pari a $318 m/s)$ dopo circa $35 s, ad$ un’altezza di circa $33 km.$ Fino a $60$
secondi circa dal lancio si supera la velocità del suono, fino $ad$ un’altezza di circa $24 km$

Quindi il sistema $S$ ha superato la velocità del suono per oltre $15$ secondi.

Calcola la variazione di energia meccanica $\Delta Em$ tra il momento in cui Baumgartner salta e il
momento in cui raggiunge la massima velocità; fornisci la tua interpretazione del risultato.

Osserviamo che, essendo in presenza di forze non conservative (la forza di attrito), la variazione di
energia meccanica (pari al lavoro della forza d’attrito) sarà negativa.

In particolare si ha (supponiamo $g$ costante, pari a $9.8 m/s$ e indichiamo con $K$ l’energia cinetica e
con $U$ l’energia potenziale:

$\Delta Em=$ Em(finale) $-Em(iniziale) = (Kf+ Uf) -(Ki+ Ui) = K(t= 50 s) + U(t= 50 s) -$

$-(K(t= 0) + U(t= 0)) = 1$
$2 mv2 + mgz1 -(0 + mgz0) = 1$
$2 (120 kg) (373 m$
$s)$

$+120 kg (9.8 m$
$s^{2}) (28000 m) -120 kg(9.8 m$
$s^{2}) (39045 m) = ⋯= -4.6 ∙106J= Em$

Esempio seconda prova $- Matematica-Fisica$
Problema $2$

Risulta:

A) $f>P:$ dopo aver raggiunto la velocità massima; $t=60 s.$
$B) f<P: t= 40 s$ .
$C) f=P:$ quando si raggiunge la velocità massima; $t=50 s.$

Determina a quale altitudine Baumgartner ha aperto il paracadute. Ricordando che il lancio è
durato in totale $9$ minuti e $3$ secondi, calcola la velocità media di discesa dopo l’apertura del
paracadute, fino all’arrivo al suolo. $Ti$ appare ragionevole considerare il moto in quest’ultima fase
come un moto rettilineo uniforme?

Il paracadute viene aperto dopo $260 s (v=50 m/s),$ all’altezza $z^{2} = 2.5 km$ .
Dopo l’apertura del paracadute la velocità può essere considerata costante (forza peso e forza
d’attrito sono praticamente uguali) quindi è ragionevole considerare il moto rettilineo uniforme in
questa fase.

La velocità media, dall’apertura del paracadute fino all’arrivo al suolo è quindi:

$vM= \Delta s$
$\Delta t=$
2500 $m$
$543 s-260s=$ 2500
$$ 283 m $$
$s\cong 8.8 m$
$s= vM$

Esempio seconda prova $- Matematica-Fisica$
Problema $2$

Per valutare il rischio di traumi derivanti dall’impatto dell’arrivo al suolo, fornisci una stima
dell’altezza da cui Baumgartner sarebbe dovuto saltare, senza paracadute, per giungere al suolo
con la stessa velocità.

Dobbiamo trovare l’altezza da cui dovrebbe saltare Baumgartner per giungere al suolo, in caduta
libera, con una velocità di $8.8 m/s$ .

Ricordiamo che la velocità con cui un corpo, partendo da fermo, arriva al suolo cadendo da
un’altezza $h$ con accelerazione $g$ è data da:

$v= \sqrt{2gh} , h= v^{2}$
$2g=$
$(8.8 m/s)2$
$19.6 m/s^{2} \cong 4 m$

Per giungere al suolo in caduta libera con la stessa velocità con cui giunge al suolo col paracadute
Baumgartner dovrebbe saltare da un’altezza di $4 m.$

Con la collaborazione di Angela Santamaria e Stefano Scoleri

Esempio seconda prova $- Matematica-Fisica$
Quesiti

Tema di MATEMATICA - FISICA

QUESTIONARIO

$Q 1$

Indichiamo con $y$ la distanza dall’origine della barretta e con $dy$ lo spazio percorso dalla barretta
nel tempo $dt;$ l’ascissa di $D$ passa da $x$ a $x+dx. L$ barretta passa dalla lunghezza $CD$ alla lunghezza
$EF,$ e risulta $(dS=$ area spazzata dalla barretta):

$CD= 2x , dS\cong CD∙dy= 2x dy$ . In modo più rigoroso:

$EF= 2(x+ dx),$
$dy= 2axdx$

Calcoliamo le aree $S^{1}$ ed $S^{2}$ dei segmenti parabolici OCD
e OEF:
$S^{1} = 2$
$3 CDy= 4$
$3 xy , S^{2} = 4$
$3 (x+ dx)(y+ dy)$
$S^{2} -S^{1} = 4$
$3 (x+ dx)(y+ dy) -4$
$3 xy=$
$3 (xdy+ ydx+$ dxdy) $\cong 4$
$3 (xdy+$ ydx) =
$3 (xdy+$ ydy
$2ax) = 4$
$3 (xdy+ ax2 dy$
$2ax) = 4$
$$ 3 (3 $$
$2$ xdy) =
$= 2xdy= dS$

$(N. B.$ : dxdy è trascurabile) . Quindi (detta $v= \sqrt{2}\omega y$ la velocità della barretta in funzione
dell’accelerazione e dello spazio percorso):

Esempio seconda prova $- Matematica-Fisica$
Quesiti

$fem= -d\Phi$ (B⃗ )
$$ dt $$
$= -B(ds)$
$$ dt $$
$= -B(2xdy)$
$$ dt $$
$= -2Bxv= -2B\sqrt{y}$
$a\sqrt{2}\omega y= -2By(\sqrt{2}\omega$
a)
La forza elettromotrice indotta sulla spira in funzione di $y$ è:

fem $= -2By(\sqrt{2}\omega$
a)
$Q 2$

a)
$v=$ x'(t) $= \alpha (1 -\beta t) + at(-\beta ) = \alpha -2\alpha \beta t=$ v(t)
$a=$ x''(t) $= -2\alpha \beta =$ a(t)
$b)$
Risulta $x= 0$ se $t= 0$ oppure $t=$
$\beta$ .
Quindi il tempo necessario per ritornare nell’origine, partendo dall’origine è $t=$
$\beta$ , che è il
doppio del tempo $t= 1/2\beta$ in cui la velocità si annulla per poi tornare indietro.
Lo spazio percorso in tale intervallo di tempo è: $2$ [x(
$2\beta$ )] $= 2 [\alpha$ ∙
$2\beta (1 -\beta$ ∙
$2\beta$ )] =
$\alpha$
$2\beta$

$Q 3$

Esempio seconda prova $- Matematica-Fisica$
Quesiti

a)

L’energia potenziale di una carica $q$ posta in un punto $P$ a distanza $R$ da una seconda carica $Q$ è
data da:

$UP= k$
$$ Qq $$
$R$ (con $k= 9 ∙109$ N∙
$$ m^{2 $$
$C^{2}$ , costante di Coulomb)

$Ad$ ogni coppia di cariche $q$ e $Q$ (poste in due punti A e $B$ a distanza $R)$ corrisponde quindi
un’energia potenziale elettrica data da: $U= k$
$$ Qq $$
$R$ .

Quindi, tenendo presente che le cariche in A e $B$ (distanti $1 m$ da $C)$ sono uguali a $q:$

$UAB= UAC= UBC= k$
$$ qq $$
$1 = kq2$ :

U(sistema) $= UAB+ UAC+ UBC= 3kq2$

$b)$

Detta $x= CH$ la distanza di $C$ quando la carica viene spostata verso il segmento $AB$ lungo la
perpendicolare $ad AB,$ risulta: $CA= CB= \sqrt$
$4 + x^{2} =$
$2 \sqrt{1} + 4x^{2}$
Quindi:
$UAC= UBC= (k$
$$ qq 1 $$
$2\sqrt{1}+4x^{2}) =$
$2kq2$
$\sqrt{1}+4x^{2} ; UAB=$
$$ kq2 $$
$1$ . Pertanto:
U(sistema) $= UCA+ UCB+ UAB=$
$4kq2$
$\sqrt{1} + 4x^{2} + kq2;$ quindi:
U(x) $= kq2 (1 +$
$\sqrt{1} + 4x^{2})$ ,
con $0 \le x\le \sqrt{3}$

Questa funzione è sempre positiva, vale $5kq2$ se $x= 0,$ è sempre decrescente (perché $\sqrt{1} + 4x^{2}$
cresce al crescere di $x),$ e vale $3kq2$ se $x= \sqrt{3}$
Il grafico di U(x) è quindi del tipo:

Esempio seconda prova $- Matematica-Fisica$
Quesiti

$Q 4$

Se $t= \tau$ il punto $P$ in moto ha coordinate $P=$ (a $sen(\omega \tau ); a(1 -cos(\omega \tau$ )) . Quindi:

$PO= \sqrt$ (a $sen(\omega \tau ))^{2} + (a(1 -cos(\omega \tau ))^{2} = \sqrt{2a}^{2} -2a^{2} cos(\omega \tau ) =$

$= a\sqrt{2} -2cos (\omega \tau ) = 2a sen\omega \tau$
$2 = PO$

Determiniamo la velocità:

${vx=$ x'(t) $= a\omega$ cos $(\omega t)$
$vy=$ y'(t) $= a\omega sen(\omega t) ; v(0) = (a\omega ; 0):$ direzione del semiasse $x$ positivo

Determiniamo l’accelerazione:

${ax=$ x''(t) $= -a\omega 2sen(\omega t)$
$vy=$ y''(t) $= a\omega 2cos (\omega t) ; a(0) = (0; a\omega 2):$ direzione del semiasse $y$ positivo

N.B. La traiettoria del moto di $P$ si ottiene eliminando il parametro $t$ dalle equazioni parametriche
del moto. Risulta:

$a= sen(\omega t)$ ,
$1 -y$
$a= cos(\omega t): (x$
a)
$+ (y$
$a-1)$
$$ 2 = 1 , $$

$x^{2} + (y-a)2 = a^{2}$ : circonferenza con centro in $C=(0;$ a) e raggio $R=a.$

$Q 5$

Energia a $riposo= E^{0} = m0c^{2};$ Energia cinetica $relativistiva= (\gamma -1)m0c^{2}$

dove $\gamma =$
$\sqrt{1}-v^{2}$
$$ c^{2 $$
. Per il principio di conservazione dell’energia relativistica abbiamo:

Esempio seconda prova $- Matematica-Fisica$
Quesiti

$m0c^{2} = (\gamma -1)m0c^{2}$ , se $\gamma = 2$ ,
quindi: $2 =$
$\sqrt{1} -v^{2}$
$$ c^{2} , 2 = c $$
$\sqrt{c}^{2} -v^{2}$ ,
$2\sqrt{c}^{2} -v^{2} = c , 4(c^{2} -v^{2}) = c^{2} , 4v^{2} = 3c^{2}$ ,
$v= c\sqrt{3}$
$4 , v= \sqrt{3}$
$2 c$

Per determinare l’stante in cui l’energia cinetica dell’elettrone è uguale alla sua energia a riposo
applichiamo la seconda legge della dinamica (tenendo presente che la forza agente è $F= eE$ e
ipotizzando che l’elettrone si muova, partendo da fermo, nella direzione del campo E ed in verso
opposto):

$F=$ ma ,
$eE= ma= (m^{0}\gamma$ )a ,
$a= eE$
$m^{0}\gamma , v= at$ ,
$t= v$
$a=$
$$ \sqrt{3 $$
$2 c$
$$ eE $$
$m^{0}\gamma$
$= \sqrt{3cm0}\gamma$
$2eE$
$= t$
Quindi (ricordiamo che $E= 10$
$$ kV $$
$cm=$
$104V$
$10-2m= 106 V/m)$

$t= \sqrt{3}(3 ∙108)(9.1 ∙10-31)(2)$
$2(1.6 ∙10-19)(106)$
$s= 3\sqrt{3} ∙9.1$
$$ 1.6 $$
$∙10-10 s\cong 29.6 ∙10-10 s= 3 ∙10-9 s\cong t$

$Q 6$

Siccome $T$ varia linearmente rispetto alla posizione $x$ (poniamo $x= 0$ in A e $x= l$ in $B),$ risulta:

$T= T^{1} + bx,$ con $0 \le x\le l$ . Ma se $T= T^{2}$ è $x= l,$ quindi: $b=$
$T^{2}-T^{1}$
, perciò:

$T= T^{1} + (T^{2} -T^{1}$
) $x$

Esempio seconda prova $- Matematica-Fisica$
Quesiti

Essendo $v= a\sqrt{T}$ risulta:
$$ dx $$
$dt= a\sqrt{T}^{1} +$ (
$T^{2}-T^{1}$
) $x$ ,
$$ dx $$
$\sqrt{T}^{1}+(T^{2}-T^{1}$
$)x$
= adt e integrando:

$$ \int dx $$
$\sqrt{T}^{1} + (T^{2} -T^{1}$
) $x$
$= \int$ a $dt$ ,
$2l$
$T^{2} -T^{1}$
$$ \int $$
$(T^{2} -T^{1}$
) $dx$
$2 (\sqrt{T}^{1} + (T^{2} -T^{1}$
) $x)$
$= at+ K$ ,

$2l$
$T^{2} -T^{1}$
$(\sqrt{T}^{1} + (T^{2} -T^{1}$
) $x) = at+ k$ . Ma per $t= 0$ è $x= 0,$
quindi: $2l\sqrt{T}^{1}$
$T^{2} -T^{1}$
$= k$

Perciò il tempo impiegato dall’onda a percorrere la distanza $l$ è tale che:

$2l$
$T^{2} -T^{1}$
$(\sqrt{T}^{1} + (T^{2} -T^{1}$
) $l) = at+ 2l\sqrt{T}^{1}$
$T^{2} -T^{1}$
$2l$
$T^{2} -T^{1}$
$\sqrt{T}^{2} -2l\sqrt{T}^{1}$
$T^{2} -T^{1}$
$= at$ ,
pertanto:

$t=$
$2l$
$T^{2} -T^{1} (\sqrt{T}^{2} -\sqrt{T}^{1})$
$= 2l(\sqrt{T}^{2} -\sqrt{T}^{1})$
$a(T^{2} -T^{1})$
$2l$
$a(\sqrt{T}^{2} + \sqrt{T}^{1})$
$= t$

$Q 7$

Esempio seconda prova $- Matematica-Fisica$
Quesiti

Sia $Q$ la carica fissa e $q$ la carica che si allontana da $Q$ (supponiamo che le cariche siano positive e
che il mezzo sia il vuoto). Supponiamo poi che la carica $Q$ sia fissa in O e che $q$ si allontani nel
verso positivo dell’asse $x.$ La forza (repulsiva) esercitata da $Q$ su $q$ nella generica posizione $x$ si
ottiene da:

$F=$ ma,
$$ KQq $$
$x^{2} =$ ma , $a=$ KQq
$mx2$ (∗)

Supponendo che nella figura proposta la velocita sia l’ordinata e la distanza di $q$ da $Q$ sia l’ascissa,
dal grafico deduciamo che per $x\to 2-$ l’accelerazione (che corrispondente al coefficiente
angolare della tangente al grafico della velocità) tende a $+\infty$ , mentre dalla relazione (*) si ha che
l’accelerazione tende a
$$ KQq $$
$4m:$

Il grafico NON può quindi rappresentare l’andamento della velocità di $q$ (in funzione della
distanza $x$ dalla carica ferma $Q).$

N.B.

Se nella figura proposta consideriamo la velocità in ascissa e la distanza $x$ di $q$ da $Q$ in ordinata,
dal grafico deduciamo che se $x\to +\infty$ la velocità tende a $2$ e ciò sarebbe possibile: a distanza
infinita il moto tende $ad$ essere uniforme.

$Q 8$

Esempio seconda prova $- Matematica-Fisica$
Quesiti

a)

La legge oraria (utilizzando la formula di bisezione del seno: $sen2x=$
$1-cos2x$
) può essere
riscritta nella seguente forma:

$x=$ a
$1 -cos(6t-\pi$
$$ 2) 2 = 1 $$
$2 a(1 -cos(6t-\pi$
$$ 2)) = 1 $$
$2 a(1 -sen(6t) = -1$
$2 a∙sen(6t) + 1$
$2$ a

che rappresenta un moto periodico di ampiezza $A=$
$2$ a e periodo $T=$
$2\pi$
$\pi$
$3 = T$ .

$b)$

La massima distanza dall’origine si ha quando è massimo $x=$
$2 a(1 -sen(6t))$ , e ciò avviene
quando $sen(6t) = -1 , 6t=$
$2 \pi + 2k\pi$ (con $k\in Z),$
$t= \pi$
$4 + k\pi$
$3$ , e per $k= 0$ otteniamo $t= \pi$

Il punto raggiunge per la prima volta la massima distanza dall’origine in $t=$
$\pi$
$4 s \cong 0.79 s$ .

Con la collaborazione di Angela Santamaria e Stefano Scoleri

Esempio seconda prova - Matematica
Problema $1$

Tema di MATEMATICA

PROBLEMA $1$

Fissati due parametri reali $S> 0, k> 0,$ considera la funzione:

fk(x) =
$1 + e-kx$

il cui grafico viene indicato con $\Gamma k$ .

La funzione fk(x) può essere adoperata per studiare la possibile evoluzione nel tempo di una
popolazione che abbia capacità di riprodursi, nell’ipotesi in cui la limitatezza delle risorse
disponibili causi l’esistenza di una “soglia di sostenibilità” al di sotto della quale la popolazione
è costretta a mantenersi.

Dimostra che i valori assunti dalla funzione fk(x) si mantengono all’interno dell’intervallo
aperto delimitato inferiormente dal valore $0$ e superiormente dal valore $S,$ dove quest’ultimo
rappresenta tale soglia di sostenibilità.

La funzione è definita e continua su tutto $R$ e risulta:

$$ lim $$
$x\to -\infty$
$1 + e-kx= 0+$ e lim
$x\to +\infty$
$1 + e-kx= S-$

Valutiamo la monotonia della funzione:

f'(x) $= -S(-ke-kx)$
$(1 + e-kx)2 =$
$kSe-kx$
$(1 + e-kx)2 > 0$ per ogni $x:$

La funzione è quindi strettamente crescente in tutto il dominio ed ha come codominio l’intervallo
aperto $(0; S),$ dove $S$ è il valore al di sotto del quale si mantiene la popolazione.

Osservando $\Gamma k,$ individua la trasformazione geometrica da applicare a $\Gamma k$ per farlo diventare il
grafico di una funzione dispari, e determina l’espressione analitica di tale funzione.

Oltre a quanto detto nel punto precedente osserviamo che il grafico della funzione taglia l’asse
delle ordinate in $(0; S^{2}$
⁄ ). Il grafico è quindi del tipo:

Esempio seconda prova - Matematica
Problema $1$

Consideriamo la traslazione di vettore $v⃗= (0; -$
$$ S 2): $$

$X= x$
$Y= y-$
$$ S 2 ; $$
$x= X$
$y= Y+$
$$ S 2 $$

Applicando questa trasformazione a $\Gamma k$ otteniamo l’equazione:

$Y+ S$
$$ 2 = S $$
$1 + e-kX , Y= 2S-S(1 + e-kX)$
$2(1 + e-kX)$
$= S-Se-kX$
$2(1 + e-kX) = S$
$2 ∙1 -e-kX$
$1 + e-kX= S$
$2 ∙ekX-1$
$ekX+ 1$

Verifichiamo che $Y=$
$2$ ∙
$1-e-kX$
$1+e-kX$ è dispari, dimostrando che la trasformazione che muta $Y$ in $-Y$ e
$X$ in $-X$ lascia inalterata l’equazione:

$-Y= S$
$2 ∙1 -ekX$
$1 +$ ekX ,
$Y= S$
$2 ∙ekX-1$
$1 +$ ekX

La trasformazione geometrica da applicare a $\Gamma k$ per farlo diventare il grafico di una funzione
dispari è la traslazione di vettore $v⃗= (0; -$
$2),$ e l’espressione analitica della funzione che si
ottiene è: $Y=$
$2$ ∙
$ekX-1$
$1+ekX$ .

Notiamo che quest’ultima funzione, dispari, presenta in $(0; 0)$ un flesso, quindi fk(x) ha in $(0;$
$$ S 2) $$
un flesso.

Individua graficamente o analiticamente il valore della $x$ corrispondente alla massima velocità di
crescita di una popolazione secondo il modello rappresentato dalla funzione fk(x); determina
quindi, in funzione dei parametri $S$ e $k,$ il valore di tale velocità massima.

La velocità di crescita è data dalla derivata prima di fk(x). Analizzando grafico di fk(x) si osserva
che la derivata seconda è positiva per $x<0,$ negativa per $x>0$ e nulla per $x=0$ (dove c’è un flesso):
la derivata prima di fk(x) è quindi crescente per $x<0$ e decrescente per $x>0:$ in $x=0$ assume il
valore massimo. Sostituendo in $fk$
'(x) =
$kSe-kx$
$(1+e-kx)$
$2$ otteniamo: $fk$
$'(0) =$
$$ kS 4 . $$

Esempio seconda prova - Matematica
Problema $1$

Quindi: il valore della $x$ corrispondente alla massima velocità di crescita di una popolazione
secondo il modello rappresentato dalla funzione fk(x) è $x=0$ ed il valore della massima velocità di
crescita è
$$ kS 4 . $$

Dovendo effettuare lo studio di una coltura batterica in un ambiente a risorse limitate, puoi
pensare, al fine di semplificare i calcoli, di approssimare la funzione fk(x) con una funzione come
gk(x), il cui grafico è riportato nella figura seguente:

Il valore di gk(x) passa da $0$ a $S$ con una rampa lineare, di pendenza pari alla pendenza di $\Gamma k$ nel
punto di ascissa $0.$

Determina, in funzione dei parametri $S$ e $k,$ l’espressione analitica della funzione gk(x).

La pendenza di $\Gamma k$ nel punto di ascissa $0$ è $fk$
$'(0) =$
$$ kS $$
$4$ . Questo valore è uguale al coefficiente
angolare della retta che corrisponde alla rampa lineare, passante per $(0;$
$2);$ la rampa ha quindi
equazione:

$y-s$
$2 = kS$
$4 x, y= kS$
$4 x+ S$
$2$ ; se $y= 0$ si ha: $x= -2$
$k$ ; se $y= S,$
$x= 2$

Quindi si ha:
gk(x) =

$0,$ se $x< -2$
$$ k kS $$
$4 x+ S$
$2$ , se $-2$
$k\le x\le 2$
$S,$ se $x> 2$

Osserviamo che gk(x), in -
$k\le x\le$
$k$ , è la tangente nel punto di flesso di fk(x) .

Esempio seconda prova - Matematica
Problema $1$

Illustra il procedimento che adotteresti per valutare la accettabilità dell’approssimazione di fk(x)
fornita da gk(x).

fk(x) =
$1 + e-kx$

Confrontiamo i grafici delle due funzioni (per esemplificare abbiamo posto $S=1000$ e $k=4):$

Abbiamo già osservato che gk(x), in -
$k\le x\le$
$k$ , è la tangente nel punto di flesso di fk(x),
quindi essa approssima fk(x) in un intorno dell’origine, come -
$k\le x\le$
$k$ . Inoltre se $x=$
$$ 2 k $$
gk(x) vale $S,$ mentre fk(x) vale
$1+e-2 \cong$
$$ S 1.14. $$

In particolare, nel nostro esempio, in cui $S=1000$ e $k=4,$ per $x=1$ risulta approssimativamente
$f(1)=982$ e $g(1)=1000.$ Quindi $g$ ed $f$ per $|x| > 1$ tendono $ad$ avere valori molto vicini:

possiamo concludere che gk(x) fornisce un’approssimazione accettabile di fk(x).

All’aumentare di $k,$ tale approssimazione diventa migliore? Motiva la tua risposta.

Abbiamo già detto che gk(x), in -
$k\le x\le$
$k$ , è la tangente nel punto di flesso di fk(x), quindi
essa approssima fk(x) in un intorno dell’origine, quale -
$k\le x\le$
$k$ . Più è piccolo tale intervallo,
migliore sarà l’approssimazione; tale intervallo è tanto più piccolo quanto più $k$ è grande quindi:

al crescere di $k$ l’approssimazione di $f$ con $g$ migliora.

Facciamo un’altra considerazione.

Esempio seconda prova - Matematica
Problema $1$

Fissato per esempio $S=1000$ abbiamo visto la relazione grafica fra $g$ ed $f$ per $k=4$ ed i valori
assunti per $x=1.$

Per $k=10$ abbiamo:

E risulta approssimativamente $f(1)=999.95$ e $g(1)=1000:$ praticamente uguali. Quindi $g$ approssima
molto bene $f$ per $|x| > 1$ .

Per $k=0.5$ abbiamo circa $f(1)=622$ e $g(1)=625:$ quindi $g$ approssima meno bene dei casi precedenti
$f$ per $|x| > 1$ .

Osserviamo infine che la $g$ vale $S$ per $x=2/k.$ Inoltre:

Se $k=0.5, g$ vale $S$ per $x=4.$ Per $x=4$ si ha: $fk(4) =$
$1+e-2 \cong$
$$ S 1.14 $$
Se $k=4, g$ vale $S$ per $x=0.5.$ Per $x=0.5$ si ha: $fk(0.5) =$
$1+e-2 \cong$
$$ S 1.14 $$
Se $k=10, g$ vale $S$ per $x=0.2.$ Per $x=0.2$ si ha: $fk(0.2) =$
$1+e-2 \cong$
$$ S 1.14 $$

Ciò conferma che $g$ ed $f$ tendono $ad$ avere lo stesso valore per $x$ sempre più piccolo al crescere di
$k,$ a conferma che al crescere di $k$ migliora l’approssimazione di $f$ con $g.$

Con la collaborazione di Angela Santamaria

Esempio seconda prova - Matematica
Problema $2$

Tema di MATEMATICA

PROBLEMA $2$
(Il Problema è quasi uguale al Problema $2$ della Simulazione del $10$ dicembre 2015)

Il tuo liceo, nell'ambito dell'alternanza scuola lavoro, ha organizzato per gli studenti del quinto
anno un’attività presso lo stabilimento ICE EXPRESS sito nella tua regione. All'arrivo siete stati
divisi in vari gruppi. Il tuo, dopo aver visitato lo stabilimento e i laboratori, partecipa $ad$ una
riunione legata $ai$ processi di produzione.

Un cliente ha richiesto una fornitura di blocchi di ghiaccio a forma di parallelepipedo a base
quadrata di volume $10 dm3,$ che abbiano il minimo scambio termico con l’ambiente esterno, in
modo da resistere più a lungo possibile prima di liquefarsi.

Al tuo gruppo viene richiesto di determinare le caratteristiche geometriche dei blocchi da
produrre, sapendo che gli scambi termici tra questi e l’ambiente avvengono attraverso la
superficie dei blocchi stessi.

$1)$ Determina il valore del lato $b$ della base quadrata che consente di minimizzare lo scambio
termico e il corrispondente valore dell’altezza $h,$ tenendo presente la necessità che il volume
sia $10 dm3.$

Indicata con $h$ l’altezza del parallelepipedo, il suo volume è:

$V= b2h= 10 dm3 \Rightarrow h= 10$
$$ b^{2 $$

La superficie $S$ del parallelepipedo è:

$S= 2b^{2} + 4(bh) = 2b^{2} + 4b∙10$
$b^{2} = 2b^{2} + 40$
$b$ con $b> 0$

Posto per comodità $S=y$ e $b=x$ studiamo (anche se non richiesto) la funzione di equazione:

$y= 2x^{2}+ 40$
$x$ , con $x> 0$

Se $x\to 0+ y\to +\infty$ ; se $x\to +\infty y\to +\infty$ ; non esiste asintoto obliquo poiché la funzione è
un infinito del secondo ordine.

Segno: $y>0$ per ogni $x$ del dominio $(x>b).$

Derivata prima:

Esempio seconda prova - Matematica
Problema $2$

$y' = 4x-40$
$x^{2} \ge 0$ se $x^{3} \ge 10 , x\ge \sqrt{10}$

La funzione è quindi crescente per $x> \sqrt{10}$
e decrescente per $0 < x< \sqrt{10}$

$x= \sqrt{10}$
$\cong 2.2$ è punto di minimo relativo (e assoluto), con valore:

$y= 2\sqrt{100}$
$$ 3 + 40 \sqrt{10} 3 $$
$\cong 27.8$ .

Derivata seconda:

y'' $= 4 +$
$$ 80 $$
$x^{3} \ge 0$ per ogni $x$ del dominio: la concavità è sempre rivolta verso l’alto.

Il grafico della funzione è quindi il seguente:

Determiniamo il valore di $b$ che consente di minimizzare lo scambio termico e il
corrispondente valore dell’altezza $h.$

Lo scambio termico è minimo quando è minima la superficie del parallelepipedo, quindi quando
$b= \sqrt{10}$
$\cong 2.2 dm;$ in tal caso l’altezza $h$ del parallelepipedo è:

$h= 10$
$b^{2} =$
$$ 10 \sqrt{100} 3 = 10\sqrt{10} 3 10 = \sqrt{10} 3 $$
$dm\cong 2.2 dm= b$

Il minimo scambio termico si ha quindi quando il parallelepipedo è un cubo di spigolo $b= \sqrt{10}$

Il blocco di ghiaccio al termine del processo produttivo si trova alla temperatura di $-18^\circ C.$ Esso
viene posto su un nastro trasportatore che lo porta a un camion frigorifero, attraversando per due
minuti un ambiente che viene mantenuto alla temperatura di $10^\circ C;$ esso pertanto tende a
riscaldarsi, con velocità progressivamente decrescente, in funzione della differenza di
temperatura rispetto all’ambiente, e inizia a fondere se lungo il percorso raggiunge la
temperatura di $0^\circ C.$

Esempio seconda prova - Matematica
Problema $2$

$2)$ Scegli, motivando la tua scelta, quale delle seguenti funzioni è più idonea per rappresentare il
processo di riscaldamento prima della liquefazione $(Ta =$ temperatura ambiente,
$Tg =$ temperatura iniziale del ghiaccio, T(t) = temperatura del ghiaccio all’istante $t,$ dove $t$ è
il tempo trascorso dall’inizio del riscaldamento, in minuti):

T(t) $= (Tg-Ta)e-kt$

T(t) $= (Ta-Tg)(1 -e-kt) + Tg$

T(t) $= (Ta-Tg)e-kt-Ta$

e determina il valore che deve avere il parametro $K$ perché il blocco di ghiaccio non inizi a
fondere durante il percorso verso il camion frigorifero.

Con i dati forniti le tre funzioni hanno le seguenti equazioni:

T(t) $= -28 e-kt$

T(t) $= 28(1 -e-kt) -18 = 10 -28 e-kt$

T(t) $= 28e-kt-10$

Per $t=0$ deve essere $T= - 18,$ quindi si scarta la prima equazione essendo $T(0) = -28$ e così pure la
terza essendo $T(0)= + 18.$

La funzione richiesta è quindi la seconda (per la quale $T(0)=-18):$

T(t) $= 10 -28 e-kt$

Per determinare il valore di $k$ dobbiamo imporre che per $t=2$ la temperatura non sia superiore a
zero gradi:

$T(2) = 10 -28 e-2k\le 0 , e-2k\ge 5$
$14 , -2k\ge ln( 5$
$14) , k\le -1$
$2 ln( 5$
$14) \cong 0.51$

Possiamo quindi scegliere $k= -$
$2 ln($
$14)$ , che è circa $k=$
$$ 1 2 . $$
Per tale valore di $k$ la temperatura del blocco di ghiaccio raggiunge zero gradi alla fine del
percorso sul nastro trasportatore.

Anche se non richiesto, indichiamo il grafico della temperatura: T(t) $= 10 -28 e-kt$ che è
approssimabile a T(t) $= 10-28 e-1$
$2t.$

Esempio seconda prova - Matematica
Problema $2$

$3)$ Poiché il parametro $K$ varia in funzione di diversi fattori produttivi, c’è un’incertezza del $10%$
sul suo effettivo valore. Ritieni che questo determini una incertezza del $10%$ anche sul valore
della temperatura $T$ del blocco di ghiaccio all’istante in cui raggiunge il camion frigorifero?
Motiva la tua risposta, in modo qualitativo o quantitativo.

Essendo $k= -$
$2 ln($
$14) \cong 0.5,$ il suo $10%$ è circa $0.05 (= \Delta k=$ errore assoluto di $k).$
Assumendo come valore effettivo di $k=0.5,$ con l’incertezza del $10%$ esso varia tra $0.45$ e $0.55.$
Ricordiamo che, data una funzione $y=f(x),$ all’incremento $\Delta x$ di $x= x^{0}$ corrisponde un
incremento $\Delta f$ della funzione dato da: $\Delta f= f(x^{0} + \Delta x) -f(x^{0})$ e tale incremento è
approssimabile con $f'(x^{0}) ∙\Delta x$ (differenziale della funzione relativo al punto $x^{0}$ ed all’incremento
$\Delta x.$ Quindi: $\Delta f\cong f'(x^{0}) ∙\Delta x$ .
Consideriamo $T$ come funzione di $k,$ fissato $t=2:$ T(k) $= 10 -28 e-2k.$
Nel nostro caso abbiamo: T'(k) $= 56 e-2k , T'(0.5) \cong 21, \Delta k= 0.05.$ Quindi:

$\Delta T\cong 21 ∙0.05 \cong 1.1$

$Ad$ un incremento di $0.05$ su $k$ corrisponde un incremento di $1.1$ su $T.$ Quindi:

$T= (0.0 \pm 1.1)^\circ C$

L’errore relativo di $T$ è:
$\Delta T$
$T$ .

Essendo il valore di $T=0,$ l’errore relativo non è definito, è indeterminato (tenderebbe a $+\infty$ )

Osserviamo che:

Per $k=0.45$ si ha $T(0.45) = T(k-\Delta k) = 10 -28 e-0.45∙2 \cong -1.4$
Per $k=0.55$ si ha $T(0.55) = T(k+ \Delta k) = 10 -28 e-0.55∙2 \cong 0.7$

E notiamo che $\Delta T\cong$
$T(0.55)-T(0.45)$
$\cong 1.0$ (equivalente a $\Delta T\cong 21 ∙0.05 \cong 1.1)$
Assumendo come valore probabile di $T$ la media tra $T(0.45)$ e $T(0.55),$ risulta:

Esempio seconda prova - Matematica
Problema $2$

T̅ $= -1.4 + 0.7$
$= -0.7$
$2 = -0.35$
Con tale valore di $T$ abbiamo: $T= -0.35 \pm 1.1$ , quindi l’errore relativo di $T$ sarebbe:

$\Delta T$
T̅ | = |
$$ 1.1 $$
$0.35| \cong 3.14 =$
$$ 314 $$
$100 = 314$ % !

Quindi $ad$ un’incertezza del $10%$ sul valore di $k$ NON corrisponde un’incertezza del $10%$ sul
valore della temperatura $T$ del blocco di ghiaccio all’istante in cui raggiunge il camion frigorifero.

L’azienda solitamente adopera, per contenere l'acqua necessaria a produrre un singolo blocco di
ghiaccio, un recipiente cilindrico, con raggio della base eguale a $1.5 dm,$ e altezza eguale a $2 dm.$

$4)$ sapendo che nel passaggio da acqua a ghiaccio il volume aumenta del $9,05%,$ stabilisci se il
suddetto recipiente è in grado di contenere l'acqua necessaria a produrre il blocco richiesto e,
in tal caso, a quale altezza dal fondo del recipiente arriverà l'acqua.

Sappiamo che il volume del blocco di ghiaccio, che è un cubo di lato $b= \sqrt{10}$
$dm$ , è:

V(blocco ghiaccio) $= b^{3} = 10 dm3$
V(recipiente) $= \pi R2h= \pi ∙(1.5)^{2} ∙2 dm3 \cong 14.137 dm3$

Detto poi $Va$ il volume dell’acqua necessaria per ottenere il blocco di ghiaccio, si ha:

$Va+ 9.05$
$100$ ∙Va $= 10$ ,
da cui: $109.05$
$$ 100 $$
$Va= 10, Va=$ 1000
$109.05 \cong 9.170 dm3$

Quindi l’acqua necessaria per ottenere il blocco di ghiaccio è di $9.170 dm3$ , inferiore alla capacità
del contenitore che è di $14.137 dm3:$

quindi il recipiente è in grado di contenere l’acqua necessaria a produrre il blocco richiesto.

Dobbiamo ora trovare l’altezza del cilindro ottenuto dal recipiente riempito con $9.170 dm3$ di
acqua.

Essendo $Va= 9.170 dm3 = \pi R2h= \pi (1.5)^{2}$ ∙h $dm3 = 9.170 dm3:$

$h=$
$$ 9.170 $$
$\pi (1.5)^{2} dm\cong 1.3 dm.$

L’altezza dal fondo del recipiente è di circa $1.3 dm.$

Con la collaborazione di Angela Santamaria e Stefano Scoleri

Esempio seconda prova - Matematica
Quesiti

$Q 1$

Risulta: $f+$
$'(0) = +\infty$ ed $f-$
$'(0) = 0+:$ quindi la funzione non è derivabile in $x=0,$ dove c’è un
punto angoloso.
Osserviamo che la derivata è positiva per ogni $x\ne 0,$ quindi la funzione è sempre crescente.
Inoltre $f'$ è decrescente, quindi f'' $< 0$ (per $x$ diverso da $0):$ il grafico di $f$ ha la concavità verso il
basso:

Esempio seconda prova - Matematica
Quesiti

$Q 2$

Calcoliamo la derivata prima della funzione: f'(x) =
$x-k-x$
$(x-k)2 =$
$-k$
$(x-k)2 ; f'(0) = -$
$$ 1 k $$
Ma $f'(0) = tg(\alpha$ ), essendo $\alpha$ l’angolo formato dalla tangente con l’asse $x.$
Deve quindi essere:
$tg($
$\pi$
$$ 6) = \sqrt{3 $$
$3 = -$
$k$ , da cui: $k= -\sqrt{3}$ .

$Q 3$

Rappresentiamo nello stesso piano cartesiano le funzioni: f(x) $= |x-2|$ e g(x) $= |x-6|$

La disequazione è verificata per i valori di $x$ tali che il grafico di $f$ stia sopra il grafico di $g:$

$x> xA: x> 4.$

Per trovare $xA:$ { $y= x-2$
$y= -x+ 6 : x-2 = -x+ 6 , x= 4$ .

Esempio seconda prova - Matematica
Quesiti

$Q 4$

Detto $L$ il lato dei due quadrati e $C^{1}$ e $C^{2}$ i cerchi di raggi $R$ ed $r$ rispettivamente, si ha:

$Area(C^{1}) = \pi R^{2} , Area(C^{2}) = \pi r^{2}$ . Dette $S^{1}$ ed $S^{2}$ le aree delle due parti occupate dai cerchi
nei due quadrati, si ha:

$S^{1} = 1$
$4 \pi R^{2} = 1$
$2 L^{2} ; S^{2} = \pi r^{2} = 1$
$2 L^{2}$ ,
quindi: $1$
$4 \pi R^{2} = \pi r^{2}$ ,
$4 R^{2} = r^{2} : R$
$r= 2$

$Q 5$

Esempio seconda prova - Matematica
Quesiti

Calcoliamo i coefficienti angolare delle rette $AB$ e $OC$ ed uguagliamoli:

$mAB= b^{2} -a^{2}$
$b-a$ ,
$mOC= c^{2}$
$c: b^{2} -a^{2}$
$b-a= c^{2}$
$c$ ,
$b+ a= c$ (con $b\ne$ a e $c\ne 0)$

Sia ora $D= (d; d^{2})$ e $E=$ (e; $e^{2}).$
In base a quanto dimostrato sopra, risulta: $d+ e= c= a+ b$ .
Calcoliamo i punti medi $M, N$ e $P$ dei tre segmenti $AB, OC$ e $DE:$

$M= (a+ b$
; $a^{2} + b^{2}$
$N= (c$
$2 ; c^{2}$
$P= (d+$ e
; $d^{2} + e^{2}$

Siccome $a+ b= d+ e= c,$ risulta:
$a+b$
$d+e$
$$ 2 = c $$
$2$ , quindi i punti $M, N$ e $P$ appartengono alla
stessa retta $x=$
$$ c 2 . $$
$Q 6$

La funzione ha equazione del tipo:

$y=$ f(x) $= a(x-10)(x-100)(x-1000)$

Ricordiamo che ogni cubica ha uno ed un solo flesso, ottenuto annullando la derivata seconda:
f'(x) $= a(x-100)(x-1000) + a(x-10)(x-1000) + a(x-10)(x-100) =$
$= a(3x^{2} -2220x+ 111000)$
f''(x) $= a(6x-2220) = 0$ se $x=$ 2220
$$ 6 = 370 $$
L’ascissa del punto di flesso è indipendente da a, ma l’ordinata, $f(370),$ dipende da a:
le informazioni date non sono sufficienti per individuare le coordinate del punto di flesso.

$Q 7$

Il punto di tangenza $T$ si ottiene intersecando la normale al piano tangente con la perpendicolare $n$
$ad$ esso condotta dal centro della sfera. La normale al piano di equazione $x-2y+ z+ 1 = 0$ ha
parametri direttori $(1, -2, 1).$ Quindi:

Esempio seconda prova - Matematica
Quesiti

$n:$ {
$x= 1 + t$
$y= 0 -2t$
$z= 1 + t$

Intersecando $n$ con il piano tangente abbiamo:
$1 + t-2(-2t) + (1 + t) + 1 = 0, 6t= -3$ ,
$t= -1$
Sostituendo in $n$ otteniamo il punto di tangenza: $T=$ (
$$ 1 2 ; 1; 1 2) $$

Il raggio $R$ della sfera può essere calcolato come distanza del centro dal piano tangente, oppure
come distanza tra $K$ e $T:$

$R= KT= \sqrt (1 -1$
$$ 2) 2 $$
$+ (0 -1)^{2} + (1 -1$
$$ 2) 2 = \sqrt{1} 4 + 1 + 1 4 = \sqrt{3} 2 = \sqrt{6 $$
$2 = R$

Come distanza di $K$ dal piano tangente:

$R= |ax0 + by0 + cz0 + d|$
$\sqrt{a}^{2} + b^{2} + c^{2}$
$|1 -0 + 1 + 1|$
$$ \sqrt{1} + 4 + 1 = 3 \sqrt{6} = \sqrt{6 $$
$2 = R$

$Q 8$

La probabilità di ottenere una testa ed una croce (a prescindere dall’ordine) lanciando due volte
una moneta (non truccata) è data da:

p(TC) + p(CT) =
$2$ ∙
$$ 1 2 + 1 $$
$2$ ∙
$$ 1 2 = 1 $$
$2 = 50$ % . Utilizzando la distribuzione binomiale $(n=2$ prove,
$k=1$ successo con probabilità $1⁄2$ , l’uscita della $T$ in $1$ lancio):
$(n$
$k) pkqn-k= (2$
$$ 1) (1 2) (1 2) = 2 (1 4) = 1 2 $$

Se la moneta viene lanciata $4$ volte, la probabilità di ottenere due teste e due croci è:
p(TTCC) + p(TCTC) + p(TCCT) + p(CTTC) + p(CTCT) + p(CCTT) $= 6 (1$
$$ 2) 4 = 6 16 = 3 $$
$8 \ne 1$
Utilizzando la distribuzione binomiale $(n=4, k=2: 2volte T, p=1/2):$
$(n$
$k) pkqn-k= (4$
$$ 2) (1 2) 2 (1 2) 2 = 6 (1 4) 2 = 6 16 = 3 8 $$

Quindi se la moneta viene lanciata $4$ volte la probabilità di ottenere due teste e due croci non è
ancora pari al $50$ %.
Con la collaborazione di Angela Santamaria

Ministero dell’Istruzione, dell’ Università e della Ricerca
Verso della corrente uscente dalla pagina
Verso della corrente entrante nella pagina
$LI03 -$ SCIENTIFICO - OPZIONE SCIENZE APPLICATE
$LI15 -$ SCIENTIFICO - SEZIONE $AD$ INDIRIZZO SPORTIVO
(Testo valevole anche per le corrispondenti sperimentazioni internazionali e quadriennali)
Tema di: MATEMATICA e FISICA
Il candidato risolva uno dei due problemi e risponda a $4$ quesiti.
PROBLEMA $1$
Due fili rettilinei paralleli vincolati a rimanere nella loro posizione, distanti $1 m$ l’uno dall’altro e di lunghezza
indefinita, sono percorsi da correnti costanti di pari intensità ma verso opposto; si indichi con i l’intensità di
corrente, espressa in ampere (A). Si consideri un piano perpendicolare $ai$ due fili sul quale è fissato un sistema
di riferimento ortogonale Oxy, dove le lunghezze sono espresse in metri $(m),$ in modo che i due fili passino
uno per l’origine O e l’altro per il punto $D(1, 0),$ come mostrato in figura.

$1.$ Verificare che l’intensità del campo magnetico B⃗ , espresso in tesla $(T),$ in un punto P(x, $0),$ con
$0 < x< 1,$ è data dalla funzione B(x) $= K($
$x+$
$1-x),$ dove $K$ è una costante positiva della quale si
richiede l’unità di misura. Stabilire quali sono la direzione e il verso del vettore B⃗ al variare di $x$
nell’intervallo $(0, 1).$ Per quale valore di $x$ l’intensità di B⃗ è minima?

$2.$ Nella zona di spazio sede del campo B⃗ , una carica puntiforme $q$ transita, $ad$ un certo istante, per il punto
$C($
$2 , 0),$ con velocità di modulo $v^{0}$ nella direzione della retta di equazione $x=$
$2$ . Descriverne il moto
in presenza del solo campo magnetico generato dalle due correnti, giustificando le conclusioni.
Stabilire intensità, direzione e verso del campo magnetico B⃗ nei punti dell’asse $x$ esterni al segmento
OD. Esistono punti sull’asse $x$ dove il campo magnetico B⃗ è nullo?

$3.$ Indipendentemente da ogni riferimento alla fisica, studiare la funzione f(x) $= K($
$x+$
$1-x$ ) dimostrando,
in particolare, che il grafico di tale funzione non possiede punti di flesso. Scrivere l’equazione della retta
$r$ tangente al grafico di $f$ nel suo punto di ascissa
$3$ e determinare le coordinate dell’ulteriore punto
d’intersezione tra $r$ e il grafico di $f.$

Ministero dell’Istruzione, dell’ Università e della Ricerca
$4.$ Calcolare il valore dell’integrale

$\int$ f(x) $dx$

ed interpretare geometricamente il risultato ottenuto. Esprimere, per $t\ge 2,$ l’integrale
g(t) $= \int |f(x)| dx$
$$ t 2 $$

e calcolare lim
$t\to +\infty$ g(t). Qual è il significato di tale limite?

PROBLEMA $2$
Assegnato un numero reale positivo $k,$ considerare le funzioni $f$ e $g$ così definite:
f(x) $= \sqrt{x} (k-x)$
g(x) $= x^{2}(x-k).$

$1.$ Provare che, qualunque sia $k> 0,$ nell’intervallo $[0,$ k] il grafico di $f$ ha un unico punto di massimo
F(xF , $yF)$ ed il grafico di $g$ ha un unico punto di minimo G(xG , $yG).$ Verificare che si ha $xG= 2xF$
e $yG= -(yF)2.$

$2.$ Verificare che, qualunque sia $k> 0,$ i grafici delle due funzioni sono ortogonali nell’origine, vale a dire
che le rispettive rette tangenti in tale punto sono tra loro ortogonali. Determinare per quale valore
positivo di $k$ i due grafici si intersecano ortogonalmente anche nel loro ulteriore punto comune.
D’ora in avanti, assumere $k= 1.$ In un riferimento cartesiano, dove le lunghezze sono espresse in metri
$(m),$ l’unione degli archi di curva di equazioni $y=$ f(x) e $y=$ g(x), per $x\in [0, 1],$ rappresenta il profilo
di una spira metallica. Sia $S$ la regione piana delimitata da tale spira.
$3.$ Supponendo che nella regione $S$ sia presente un campo magnetico uniforme, perpendicolare al piano di
$S,$ avente intensità $B^{0} = 2,0 ∙10-2 T,$ verificare che il valore assoluto del flusso di tale campo attraverso
$S$ è pari a $7,0 ∙10-3 Wb.$

$4.$ Supporre che la spira abbia resistenza elettrica $R$ pari a $70 \Omega$ e che il campo magnetico, rimanendo
perpendicolare al piano di $S,$ a partire dall’istante $t^{0} = 0 s,$ inizi a variare secondo la legge:
B(t) $= B^{0} e-\omega tcos(\omega t),$ con $\omega = \pi rad/s$

e $t\ge 0$ espresso in secondi $(s).$ Esprimere l’intensità della corrente indotta nella spira in funzione di $t,$
specificando in quale istante per la prima volta la corrente cambia verso.
Qual è il valore massimo di tale corrente per $t\ge 0$ ? Spiegare quale relazione esiste tra la variazione del
campo che induce la corrente e il verso della corrente indotta.

Ministero dell’Istruzione, dell’ Università e della Ricerca
QUESITI
$1.$ Assegnato $k\in R,$ si consideri la funzione così definita: g(x) =
$(k-1)x^{3}+kx2-3$
$x-1$
▪ Come $va$ scelto il valore di $k$ affinché il grafico di $g$ non abbia asintoti?
▪ Come $va$ scelto il valore di $k$ affinché il grafico di $g$ abbia un asintoto obliquo?
Giustificare le risposte e rappresentare, nei due casi, i grafici delle funzioni ottenute.

$2.$ Sia $f$ una funzione pari e derivabile in $R,$ sia $g$ una funzione dispari e derivabile in $R.$ Dimostrare che
la funzione $f'$ è dispari e che la funzione $g'$ è pari. Fornire un esempio per la funzione $f$ ed un esempio
per la funzione $g,$ verificando quanto sopra.

$3.$ Si consideri la funzione $f: (0, +\infty ) \to R$ così definita:
f(x) $= \int$
cos $(\pi$
$3 t)$
$$ t x 1 dt $$
Determinare l’equazione della retta tangente al grafico di $f$ nel suo punto di ascissa $1.$

$4.$ Nello spazio tridimensionale, sia $r$ la retta passante per i punti $A(-2, 0, 1)$ e $B(0, 2, 1).$ Determinare
le coordinate di un punto appartenente alla retta $r$ che sia equidistante rispetto $ai$ punti $C(5, 1, -2)$ e
$D(1, 3, 4).$

$5.$ Emma $fa$ questo gioco: lancia un dado con facce numerate da $1$ a $6;$ se esce il numero $3$ guadagna $3$
punti, altrimenti perde $1$ punto. Il punteggio iniziale è $0.$
▪ Qual è la probabilità che, dopo $4$ lanci, il suo punteggio sia ancora $0?$
▪ Qual è la probabilità che, in una sequenza di $6$ lanci, il punteggio non scenda mai sotto lo $0?$

$6. Ai$ vertici di un quadrato ABCD, di lato $2 m,$ sono fissate quattro cariche elettriche. La carica in A è pari
a $9 nC,$ la carica in $B$ è pari a $2 nC,$ la carica in $C$ è pari a $4 nC,$ la carica in $D$ è pari a $-3 nC.$ Supponendo
che le cariche si trovino nel vuoto, determinare intensità, direzione e verso del campo elettrostatico
generato dalle quattro cariche nel centro del quadrato.

$7.$ Un protone, inizialmente in quiete, viene accelerato da una d.d.p. di $400 V$ ed entra, successivamente, in
una regione che è sede di un campo magnetico uniforme e perpendicolare alla sua velocità.

La figura illustra un tratto semicircolare della traiettoria descritta dal
protone (i quadretti hanno lato $1,00 m).$ Determinare l’intensità di B⃗ .

Ministero dell’Istruzione, dell’ Università e della Ricerca

$8.$ Si vuole ottenere l'emissione di elettroni da lastre metalliche di materiali diversi su cui incide una
radiazione di frequenza $7,80 ∙1014 Hz.$ Determinare, motivando la risposta, quale tra i materiali in
elenco è l’unico adatto allo scopo.

Materiale
Lavoro di estrazione
Argento
$4,8 eV$
Cesio
$1,8 eV$
Platino
$5,3 eV$

Individuato il materiale da utilizzare, determinare la velocità massima che può avere un elettrone al
momento dell'emissione.

COSTANTI FISICHE
carica elementare
$1,602 ∙10-19 C$
costante di Planck
$6,626 ∙10-34 J \cdot s$
costante dielettrica nel vuoto
$\varepsilon 0$
$8,854$ ∙ $10-12 F/m$
massa dell’elettrone
$$ me $$
$9,109$ ∙ $10-31 kg$
massa del protone
$$ mp $$
$1,673$ ∙ $10-27 kg$

____________________________
Durata massima della prova: $6$ ore.
È consentito l’uso di calcolatrici scientifiche $e/o$ grafiche purché non siano dotate di capacità di calcolo simbolico
(O.M. $n. 350$ Art. $18$ comma $8).$
È consentito l’uso del dizionario bilingue $(italiano-lingua$ del paese di provenienza) per i candidati di madrelingua non italiana.

Simulazione $02$ aprile 2019
Problema $1$

Tema di MATEMATICA e FISICA

PROBLEMA $1$

Due fili rettilinei paralleli vincolati a rimanere nella loro posizione, distanti $1 m$ l’uno dall’altro e
di lunghezza indefinita, sono percorsi da correnti costanti di pari intensità ma verso opposto; si
indichi con i l’intensità di corrente, espressa in ampere (A). Si consideri un piano perpendicolare
$ai$ due fili sul quale è fissato un sistema di riferimento ortogonale Oxy, dove le lunghezze sono
espresse in metri $(m),$ in modo che i due fili passino uno per l’origine O e l’altro per il punto $D(1, 0),$
come mostrato in figura.

Per la legge di $Biot-Savart,$ in un punto a distanza $r$ da un filo rettilineo indefinito percorso da una
corrente elettrica di intensità i si genera un campo magnetico B⃗ di intensità:

$B= \mu 0i$
$2\pi r$ , con $\mu 0 = 4\pi 10-7 N$
$A^{2} =$ T∙m

Verificare che l’intensità del campo magnetico B⃗ , espresso in tesla $(T),$ in un punto P(x, $0),$ con
$0 < x< 1,$ è data dalla funzione B(x) $= K($
$x+$
$1-x),$ dove $K$ è una costante positiva della
quale si richiede l’unità di misura. Stabilire quali sono la direzione e il verso del vettore B⃗ al
variare di $x$ nell’intervallo $(0, 1).$ Per quale valore di $x$ l’intensità di B⃗ è minima?

Simulazione $02$ aprile 2019
Problema $1$

Nel punto $P$ i campi magnetici generati dai due fili hanno intensità rispettivamente:

$B^{0} = \mu 0i$
$2\pi x$ , diretto nel verso positivo dell'assey

$BD=$
$\mu 0i$
$2\pi (1 -x)$ , diretto nel verso positivo dell'assey

Il campo totale in $P,$ diretto nel verso positivo dell’asse $y,$ ha intensità:

B(x) $= \mu 0i$
$2\pi x+$
$\mu 0i$
$2\pi (1 -x) = \mu 0i$
$2\pi (1$
$x+$
$1 -x) = k(1$
$x+$
$1 -x)$ ,
$0 < x< 1, k= \mu 0i$
$2\pi$

L’unità di misura di $k$ è:
$A^{2} ∙A=$
$A=$ (T∙
A) $∙A=$ T∙m

$B$ è minimo quando lo è $y=$
$x+$
$1-x=$
$x(1-x)$ ; questa espressione è minima quando $z=x(1-x)$ è
massima. Essendo $x+(1-x)=1=costante,$ ricordando che il prodotto di due grandezze positive a
somma costante è massimo quando le due grandezze sono uguali, $z=x(1-x)$ è massimo quando
$x= 1 -x, x=$
$2 :y$ (e quindi B)è minima se $x=$
$2$ . Oppure: $z' = -2x+ 1 \ge 0$ se $x\le$
$$ 1 2 $$
quindi $z$ cresce se $0<x<1/2$ e decresce se $1/2<x<1: z$ è massima se $x=1/2$ e quindi $y$ e $B$ sono
minimi se $x=1/2.$

Lo stesso risultato si ottiene studiando la derivata prima di $y:$
$y=$
$x(1 -x)$ , ... ,
$y' =$
$2x-1$
$x^{2}(1 -x)2 \ge 0$ se $1$
$2 \le x< 1$
Quindi $y$ è crescente per
$2 < x< 1$ e decrescente per $0< x<$
$2 : y$ è minima quando $x=$
$$ 1 2 . $$

L’intensità di B⃗ in $P$ è minima quando $x=$
$2 (Bminimo= 4k).$

Simulazione $02$ aprile 2019
Problema $1$

Nella zona di spazio sede del campo B⃗ , una carica puntiforme $q$ transita, $ad$ un certo istante, per
il punto $C($
$2 , 0),$ con velocità di modulo $v^{0}$ nella direzione della retta di equazione $x=$
$$ 1 2 . $$
Descriverne il moto in presenza del solo campo magnetico generato dalle due correnti,
giustificando le conclusioni.
Stabilire intensità, direzione e verso del campo magnetico B⃗ nei punti dell’asse $x$ esterni al
segmento OD. Esistono punti sull’asse $x$ dove il campo magnetico B⃗ è nullo?

La carica è immessa in un campo magnetico nella stessa direzione del campo, quindi per la legge
di Lorentz è soggetta alla forza: $F = q v^{0}$
⃗⃗⃗⃗ ∧B⃗ la cui intensità è nulla, essendo:
$F= qv0B sen\alpha = 0$ , perchè $\alpha = 0$ oppure $\alpha = \pi$ .

La carica si muove quindi lungo la retta di equazione $x=$
$2$ con velocità costante $v^{0}$ .

In un punto a destra di $D (x>1),$ il campo generato dalla corrente uscente da O è diretto nel verso
positivo dell’asse $y$ e quello generato dalla corrente entrante in $D$ è diretto nel verso negativo
dell’asse $y$ e risulta: $BD> B^{0}$ (essendo l’intensità della corrente uguale e la distanza da O
maggiore della distanza da $D).$ Quindi:

a destra di $D$ si ha un campo diretto nel verso negativo dell’asse $y,$ di modulo:

$B= BD-B^{0} =$
$x-1 -k$
$x=$
$x(x-1)$ , con $x> 1$ .

In un punto a sinistra di O $(x<0),$ il campo generato dalla corrente uscente da O è diretto nel verso
negativo dell’asse $y$ e quello generato dalla corrente entrante in $D$ è diretto nel verso positivo
dell’asse $y$ e risulta: $BD< B^{0}$ (essendo l’intensità della corrente uguale e la distanza da O minore
della distanza da $D).$ Quindi:

a sinistra di O si ha un campo diretto nel verso negativo dell’asse $y,$ di modulo:

Simulazione $02$ aprile 2019
Problema $1$

$B= B^{0} -BD= k$
$-x-$
$1 -x=$
$x(x-1)$ , con $x< 0$ .

Quindi esternamente al segmento OD il campo è sempre diretto nel verso negativo dell’asse $y$ ed
ha intensità:

$B=$
$x(x-1)$ , con $x< 0$ oppure $x> 1$

Da tale espressione si deduce che NON ESISTONO punti esterni $ad$ OD in cui il campo è nullo (è
sempre diretto nel verso negativo dell’asse $y$ e non ha mai modulo nullo).

Internamente al segmento OD abbiamo visto che il campo è sempre diretto nel verso positivo
dell’asse $y$ ed il suo modulo (MAI NULLO) è:

$B= k(1$
$x+$
$1 -x) =$
$x(1 -x)$ ,
con $0 < x< 1$

Non esistono quindi punti dell’asse $x$ in cui il campo sia nullo.

Indipendentemente da ogni riferimento alla fisica, studiare la funzione f(x) $= K($
$x+$
$1-x$ )
dimostrando, in particolare, che il grafico di tale funzione non possiede punti di flesso. Scrivere
l’equazione della retta $r$ tangente al grafico di $f$ nel suo punto di ascissa
$3$ e determinare le
coordinate dell’ulteriore punto d’intersezione tra $r$ e il grafico di $f.$

$y=$ f(x) $= K(1$
$x+$
$1-x ) = k$
$x(1-x)$
Dominio: $-\infty < x< 0, 0 < x< 1, 1 < x< +\infty$

Simulazione $02$ aprile 2019
Problema $1$

La funzione è continua e derivabile per ogni $x$ diversa da $0$ e $1$ e, visto il dominio, non può essere né pari né
dispari. Non ci sono intersezioni con gli assi e risulta:
$y> 0$ se $x(1 -x) > 0, 0 < x< 1$
Limiti:
$$ lim $$
$x\to \mp \infty k$
$x(1 -x) = 0- : y= 0$ asintoto per $x\to \pm \infty$
$$ lim $$
$x\to 0\pm k$
$x(1 -x) = \pm \infty : x= 0$ asintoto
$$ lim $$
$x\to 1\pm k$
$x(1 -x) = \mp \infty : x= 1$ asintoto
Abbiamo già studiato la derivata:
$y' = k$
$2x-1$
$x^{2}(1 -x)2 \ge 0$ se $x\ge 1$
$2 , x\ne 1$
Quindi $y$ è crescente per
$2 < x< 1$ e $x> 1$ e decrescente per $x< 0$ e $0 < x<$
$2 : y$ è minima
quando $x=$
$2$ ed il minimo è: $f($
$2) = 4k.$

Studio derivata seconda. Risulta:

y'' $= k2x(1 -x)(3x^{2} -3x+ 1)$
$x^{4}(1 -x)4$

Essendo $3x^{2} -3x+ 1 > 0$ per ogni $x,$ nel dominio si ha y'' $\ge 0$ se $x(1 -x) > 0, 0 < x< 1$

Quindi il grafico volge la concavità verso l’alto se $0<x<1$ e verso il basso se $x<0$ e $x>1$ .
Non esistono flessi.

Il grafico della funzione è quindi il seguente:

Simulazione $02$ aprile 2019
Problema $1$

Cerchiamo ora la tangente nel punto di ascissa $x=1/3.$
$f(1$
$$ 3) = 9 $$
$2 k , f' (1$
$3) = k$
$3 -1$
$9 (1 -1$
$2 = -27$
$4 k$
La retta $r$ ha quindi equazione:
$r: y-9$
$2 k= -27$
$4 k(x-1$
$3) , y= -27$
$4 kx+ 27$
$4 k$ ,
$y= -27$
$4 k(x-1).$
Ulteriore intersezione di $r$ con il grafico di $f:$
$y= -27$
$4 k(x-1)$
$y= k$
$x(1 -x)$
, $k$
$x(1 -x) = -27$
$4 k(x-1)$ ,
$4 = 27x(x-1)^{2}$ ,
$27x^{3} -54 x^{2} + 27 x-4 = 0$
Abbassando di grado due volte con $x=1/3$ (radice doppia), si ha:
$(x-$
$$ 1 3) 2 $$
$(27x-36) = 0$ . Quindi l’intersezione richiesta ha ascissa $x=$
$$ 36 27 = 4 $$
$3$ . E risulta:
$f($
$3) = -$
$4 k$ : ulteriore intersezione di $r$ col grafico di $f$ (
$3 ; -$
$4 k).$

Calcolare il valore dell’integrale

$\int$ f(x) $dx$

ed interpretare geometricamente il risultato ottenuto. Esprimere, per $t\ge 2,$ l’integrale
g(t) $= \int |f(x)| dx$
$$ t 2 $$

e calcolare lim
$t\to +\infty$ g(t). Qual è il significato di tale limite?

$\int$ f(x) $dx$
$= \int k($
$x+$
$(1 -x)) dx$
$= k\int$ (
$x-$
$x-1) dx$

Simulazione $02$ aprile 2019
Problema $1$

$= k[ln|x| -ln|x-1|]1$
$$ 4 3 $$
$4 = k[ln(3$
$4) -ln(1$
$4) -(ln(1$
$4) -ln(3$
$= k[2 ln(3$
$4) -2ln (1$
$4)] = 2k(ln(3$
$4) -ln(1$
$4)) = 2k (ln$
$$ 3 4 1 4 $$
) $= 2kln(3)$

Tale valore rappresenta l’area del trapezoide compreso fra il grafico di $f,$ le rette $x=1/4$ e $x=3/4$ e
l’asse $x.$

Calcoliamo ora, per $t\ge 2,$ l’integrale:
g(t) $= \int |f(x)| dx$
$$ t 2 $$

Notiamo che se $t=2$ risulta $g(2)=0.$

Osserviamo poi che per $x\ge 2$ risulta f(x) $< 0,$ quindi (per $t>2):$

g(t) $= \int (-f(x))dx$
$$ t 2 $$
$= -k\int$
$x(1 -x) dx$
$$ t 2 $$
$= -k[ln|x| -ln|1 -x|]2$
$t=$
$= -k[lnt-ln(t-1) -ln2 + 0] = -k ln$
$2(t-1) =$ g(t)

(Osserviamo che in tale espressione si ritrova $g(t)=0$ se $t=2).$

Risulta:
$$ lim $$
$t\to +\infty$ g(t) = lim
$t\to +\infty [-k ln$
$2(t-1)] -kln(1$
$2) = kln(2)$

Tale limite rappresenta l’area della regione illimitata compresa fra il grafico di $y=-f(x),$ la retta $x=2$
e l’asse delle ascisse:

Simulazione $02$ aprile 2019
Problema $1$

Con la collaborazione di Angela Santamaria

Simulazione $02$ aprile 2019
Problema $2$

Tema di MATEMATICA e FISICA

PROBLEMA $2$

Assegnato un numero reale positivo $k,$ considerare le funzioni $f$ e $g$ così definite:
f(x) $= \sqrt{x} (k-x)$
g(x) $= x^{2}(x-k).$

Provare che, qualunque sia $k> 0,$ nell’intervallo $[0,$ k] il grafico di $f$ ha un unico punto di
massimo F(xF , $yF)$ ed il grafico di $g$ ha un unico punto di minimo G(xG , $yG).$ Verificare che
si ha $xG= 2xF$ e $yG= -(yF)2.$

Risulta:

f'(x) =
$2\sqrt{x}$
$(k-x) -\sqrt{x}= k-x-2x$
$2\sqrt{x}$
$= k-3x$
$2\sqrt{x}$
$\ge 0$ se $x\le k$
con $x\ne 0.$
Quindi la funzione è crescente per $0 < x<$
$3$ e decrescente per
$3 < x\le k:$ la funzione $f$ ha
quindi un massimo (unico) per $x=$
$3$ con $f($
$$ k 3) = 2 $$
$3 k\sqrt{k}$
$3$ , quindi $F=$ (
$3 k;$
$3 k\sqrt{k}$
Analizziamo la funzione $g:$

g'(x) $= 2x(x-k) + x^{2} = 3x^{2} -2kx\ge 0$ se $x\le 0$ vel $x\ge 2$
$3 k$
La funzione $g,$ nell’intervallo $[0,$ k], è quindi decrescente per $0 < x<$
$3 k$ e crescente per
$3 k< x\le k : g$ ha quindi un minimo (unico) per $x=$
$3 k$ con $g($
$3 k) = -$
$27 k^{3}:$

$G($
$3 k; -$
$27 k^{3}).$

Quindi: $xG=$
$3 k= 2xF= 2$ (
$3 k), yF$
$$ 2 = 4 $$
$9 k^{2}$ ∙
$$ k 3 = 4 $$
$27 k^{3},$ perciò: $yG= -$
$27 k^{3} = -yF$

Verificare che, qualunque sia $k> 0,$ i grafici delle due funzioni sono ortogonali nell’origine,
vale a dire che le rispettive rette tangenti in tale punto sono tra loro ortogonali. Determinare per
quale valore positivo di $k$ i due grafici si intersecano ortogonalmente anche nel loro ulteriore
punto comune.

Simulazione $02$ aprile 2019
Problema $2$

Risulta: $f+$
$'(0) \to +\infty$ (tangente verticale), $g'(0) = 0$ (tangente orizzontale): quindi le tangenti
nell’origine sono ortogonali.

Cerchiamo l’ulteriore intersezione tra i grafici di $f$ e $g:$
${y= \sqrt{x} (k-x)$
$y= x^{2}(x-k) , \sqrt{x} (k-x) = x^{2}(x-k),$ da cui, oltre a $x= 0,$ troviamo $x= k$

Oltre che nell’origine quindi i grafici di $f$ e $g$ si intersecano nel punto $A=(k; 0).$ Risulta:

f'(k) $= -\sqrt{k}$ , g'(k) $= k^{2}.$ Deve essere f'(k) ∙g'(k) $= -1$ , quindi: ( $-\sqrt{k})(k^{2}) = -1$ ,
$k^{5} = 1,$ pertanto $k= 1$ (per tale valore di $k$ i grafici di $f$ e $g$ sono ortogonali in A).

D’ora in avanti, assumere $k= 1.$ In un riferimento cartesiano, dove le lunghezze sono espresse
in metri $(m),$ l’unione degli archi di curva di equazioni $y=$ f(x) e $y=$ g(x), per $x\in [0, 1],$
rappresenta il profilo di una spira metallica. Sia $S$ la regione piana delimitata da tale spira.
Per $k=1$ si ha:
f(x) $= \sqrt{x} (1 -x)$ e g(x) $= x^{2}(x-1)$ , intervallo $[0; 1]$

Studiamo sommariamente le due funzioni nell’intervallo richiesto.
f(x) $= \sqrt{x} (1-x) , 0\le x\le 1$
Nell’intervallo richiesto la funzione è sempre non negativa ed è: $f(0) = f(1) = 0.$
La funzione è continua, non derivabile in $x=0$ come già visto, ed è $f+$
$'(0) \to +\infty$ (tangente
verticale); risulta poi: f'(x) =
$1-3x$
$2\sqrt{x} , f'(1) = -1.$ Come già visto con $k$ generico, $f$ ha un
massimo in $F=$ (
$$ 1 3 ; 2 3 \sqrt{1 $$
$3)$ . Derivata seconda: f''(x) =
$-3x-1$
$4x\sqrt{x}< 0$ in $(0; 1]$ .
Il grafico di $f$ è quindi del tipo:

Simulazione $02$ aprile 2019
Problema $2$

g(x) $= x^{2}(x-1) , 0\le x\le 1$
Si tratta di una cubica, continua e derivabile su tutto $R,$ con $g(0) = g(1) = 0;$ come già visto con $k$
generico, si ha: g'(x) $= 3x^{2} -2x , g'(0) = 0, g'(1) = 1$ , minimo in $G=$ (
$3 ; -$
$27).$ Derivata
seconda: g''(x) $= 6x-2 \ge 0$ per $x\ge$
$3 , x=$
$3$ punto di flesso: (
$3 ; -$
$$ 1 27). $$
Grafico di $g:$

Il profilo della spira è quindi il seguente:

Calcoliamo l’area della spira:
Area(S) $= \int$ [f(x) $-g(x)]$
$$ 1 0 $$
$dx= \int [\sqrt{x} (1 -x) -x^{2}(x-1)]$
$$ 1 0 $$
$dx=$
$= \int [\sqrt{x}+ x^{2} -x\sqrt{x}-x^{3}]$
$$ 1 0 $$
$dx= \int$ [x
$2 + x^{2} -x$
$2 -x^{3}]$
$$ 1 0 $$
$dx=$
$3 x$
$$ 3 2 + 1 $$
$3 x^{3} -2$
$5 x$
$2 -1$
$4 x^{4}]$
$$ 0 1 $$

$$ = 2 3 + 1 $$
$3 -2$
$5 -1$
$$ 4 = 7 $$
$20 = (0.35) m^{2} =$ Area(S)

Simulazione $02$ aprile 2019
Problema $2$

Supponendo che nella regione $S$ sia presente un campo magnetico uniforme, perpendicolare al
piano di $S,$ avente intensità $B^{0} = 2,0 ∙10-2 T,$ verificare che il valore assoluto del flusso di tale
campo attraverso $S$ è pari a $7,0 ∙10-3 Wb.$

Il valore assoluto del flusso attraverso $S$ è dato da:
$\Phi S(B^{0}$
⃗⃗⃗⃗ ) $= B^{0}$ Area(S) $= B0S= (2,0 ∙10-2 T)(0.35 m^{2}) = 7,0 ∙10-3 Wb$

Supporre che la spira abbia resistenza elettrica $R$ pari a $70 \Omega$ e che il campo magnetico,
rimanendo perpendicolare al piano di $S,$ a partire dall’istante $t^{0} = 0 s,$ inizi a variare secondo
la legge:
B(t) $= B^{0} e-\omega tcos(\omega t),$ con $\omega = \pi rad/s$

e $t\ge 0$ espresso in secondi $(s).$ Esprimere l’intensità della corrente indotta nella spira in
funzione di $t,$ specificando in quale istante per la prima volta la corrente cambia verso.
Qual è il valore massimo di tale corrente per $t\ge 0$ ? Spiegare quale relazione esiste tra la
variazione del campo che induce la corrente e il verso della corrente indotta.

Per la legge di $Fraday- Neumann-Lenz$ si ha:

i(t) $= -1$
$R∙d\Phi$ (B(t))
$$ dt $$

Risulta:

$d\Phi$ (B(t))
$$ dt $$
$= d$
$dt(B0S e-\omega tcos(\omega t)) = -\omega B0S e-\omega tcos(\omega t) -\omega B0S e-\omega tsen(\omega t) =$

$= -\omega B0S e-\omega t(cos(\omega t) + sen(\omega t)) = -\omega B^{0} e-\omega t(\sqrt{2sen}(\omega t+ \pi$
Quindi:
i(t) $= -1$
$R∙d\Phi$ (B(t))
$$ dt = 1 $$
$70 ∙\omega B0S e-\omega t(\sqrt{2sen}(\omega t+ \pi$
$= \pi$
$70$ ∙ $7,0 ∙10-3 e-\pi t(\sqrt{2sen}(\pi t+ \pi$
$4)) = (\pi ∙10-4) e-\pi t(\sqrt{2sen}(\pi t+ \pi$
$= (\pi ∙10-4) e-\pi t(cos(\pi t) + sen(\pi t))$

Simulazione $02$ aprile 2019
Problema $2$

La corrente cambia il verso la prima volta nel primo istante in cui si annulla, cioè quando:

$sen(\pi t+ \pi$
$$ 4) = 0, $$
$\pi t+ \pi$
$4 = k\pi , t= k-1$
$$ 4 = 3 $$
$4 = 0.75 s$
(prendendo $k= 1$ si ha il primo valore positivo di $t)$

Osserviamo che (a meno di una costante moltiplicativa positiva) il grafico di i(t) è simile a quello
della funzione f(x) $= e-\pi x sen(\pi x+$
$\pi$
$4)$ che è il seguente:

Per trovare il valore massimo di i cominciamo con osservare che i(t) ha infiniti massimi ed infiniti
minimi relativi per effetto del fattore “smorzante” $e-\pi t$ (che tende a zero per $t$ che tende a $+\infty$ ): i
massimi vanno diminuendo ed i minimi vanno aumentando. Il massimo di i sarà quindi il primo
dei massimi relativi che si ha per $t=0.$ Quindi:

$imassima= i(0) = (\pi 2 ∙10-4)$ A

Studiamo la derivata prima di i(t) $= (\pi ∙10-4) e-\pi t(cos(\pi t) + sen(\pi t)).$

i'(t) $= (\pi ∙10-4)[-\pi e-\pi t(cos(\pi t) + sen(\pi t)) + e-\pi t(-\pi sen(\pi t) + \pi cos(\pi$ t))] =

$= (\pi 2 ∙10-4) e-\pi t[-2sen(\pi$ t)] $= (-2\pi 2 ∙10-4) e-\pi tsen(\pi t) \ge 0$ se $sen(\pi t) \le 0$ ,

$sen(\pi t) \le 0 : \pi + 2k\pi \le \pi t\le 2\pi + 2k\pi , 1 + 2k\le t\le 2 + 2k$ :

se $k=0: 1 \le t\le 2,$ se $k=-1: -1\le t\le 0,$ se $k=1: 3 \le t\le 4$

Quindi, ricordando che $t\ge 0,$ risulta:
i'(t) $> 0$ per $1 < t< 2$ e i'(t) $\le 0$ per $0 \le t\le 1$ quindi:
i(t) è decrescente da $0$ a $1$ e crescente da $1$ a $2:$ il primo massimo (che è il massimo assoluto, come
notato prima) si ha perciò per $t= 0,$ ed è $imassima= i(0) = (\pi 2 ∙10-4)$ A.

Simulazione $02$ aprile 2019
Problema $2$

Relazione tra la variazione del campo che induce la corrente e il verso della corrente
indotta:

Se il campo aumenta, aumenta il flusso quindi, per la legge di Lenz, il verso della corrente indotta
è tale da opporsi a tale aumento: il suo verso è tale da produrre un campo magnetico che ha verso
opposto a quello del campo che l’ha generata. Se il campo diminuisce, diminuisce il flusso quindi,
sempre per la legge di Lenz, il verso della corrente indotta è tale da opporsi a tale diminuzione: il
suo verso è tale da produrre un campo magnetico che ha lo stesso verso del campo magnetico che
l’ha generata.

Con la collaborazione di Angela Santamaria

Simulazione $02$ aprile 2019
Quesiti

Tema di $MATEMATICA-FISICA$

$Q 1$

Assegnato $k\in R,$ si consideri la funzione così definita: g(x) =
$(k-1)x^{3}+kx2-3$
$x-1$
▪ Come $va$ scelto il valore di $k$ affinché il grafico di $g$ non abbia asintoti?
▪ Come $va$ scelto il valore di $k$ affinché il grafico di $g$ abbia un asintoto obliquo?
Giustificare le risposte e rappresentare, nei due casi, i grafici delle funzioni ottenute.

a) Il grafico di $g$ non ha asintoti verticali se il limite per $x$ che tende a $1$ NON è infinito. Affinchè
accada ciò è necessario che il numeratore si annulli per $x=1,$ quindi: $k-1+k-3=0, k=2.$
Se $k=2$ la funzione diventa:

g(x) =
$x^{3}+2x^{2}-3$
$x-1$

Abbassando di grado il numeratore con la regola di Ruffini e la radice $x=1$ abbiamo:

g(x) $= (x-1)(x^{2} + 3x+ 3)$
$x-1$
$= x^{2} + 3x+ 3$ con $x\ne 1$

Questa funzione (parabola privata del punto $(1; 7))$ non ha asintoti verticali, né orizzontali, né
obliqui. Il vertice è $V= (-$
$$ 3 2 ; 3 $$
$4)$ e la parabola taglia l’asse $y$ in $(0; 3):$

Simulazione $02$ aprile 2019
Quesiti

$b)$ La funzione ha un asintoto obliquo se il grado del numeratore supera di $1$ il grado del
denominatore, quindi deve essere $k=1.$ La funzione ha equazione:
g(x) =
$x^{2}-3$
$x-1$ ; questa funzione (con un asintoto verticale ed uno obliquo) è un’iperbole, essendo
riconducile a $y(x-1) = x^{2} -3$ , che è una conica.
L’asintoto verticale ha equazione $x=1.$ Cerchiamo l’asintoto obliquo:
$m=$ lim
$x\to \infty$
g(x)
= lim
$x\to \infty$
$x^{2}-3$
$x^{2}-x= 1 , q=$ lim
$x\to \infty$ (g(x) $-mx) =$ lim
$x\to \infty$ (
$x^{2}-3$
$x-1 -x) =$ lim
$x\to \infty$ (
$x-3$
$x-1) = 1$
Asintoto obliquo: $y= x+ 1.$ Per $x=0$ si ha $y=3$ e per $y=0$ si ha $x= \pm \sqrt{3}$ .
$y' = x^{2} -2x+ 3$
$(x-1)^{2}$
$> 0$ per ogni $x\ne 1;$ non ci sono massimi nè minimi
y'' = -
$(x-1)^{3} > 0$ per $x< 1:$ concavità verso l’alto per $x<1,$ verso il basso per $x>1,$ nessun
flesso.

Grafico:

$Q 2$

Sia $f$ una funzione pari e derivabile in $R,$ sia $g$ una funzione dispari e derivabile in $R.$
Dimostrare che la funzione $f'$ è dispari e che la funzione $g'$ è pari. Fornire un esempio per la
funzione $f$ ed un esempio per la funzione $g,$ verificando quanto sopra.

Se $f$ è pari si ha: $f(-x) =$ f(x). Dobbiamo dimostrare che la sua derivata prima è dispari, cioè che:
f'(x) $= -f'(-x).$

Ma risulta: f'(x) $= (f(-x))$
' $= f'(-x)(-1) = -f'(-x) c. v. d$

Se $g$ è dispari risulta: g(x) $= -g(-x);$ quindi: g'(x) $= -(g'(-x)(-1)) = g'(-x)$ quindi $g'$ è
pari.
Esempi: f(x) $= x^{2},$ f'(x) $= 2x$ ; g(x) $= x^{3},$ g'(x) $= 3x^{2}$

Simulazione $02$ aprile 2019
Quesiti

$Q 3$

Si consideri la funzione $f: (0, +\infty ) \to R$ così definita:

f(x) $= \int$
$cos(\pi$
$3 t)$
$$ t x 1 dt $$

Determinare l’equazione della retta tangente al grafico di $f$ nel suo punto di ascissa $1.$

Il punto di ascissa $1$ ha ordinata $f(1) = \int$
$cos(\pi$
$3t)$
$$ t 1 1 $$
$dt= 0$ .

Per il Teorema fondamentale del calcolo integrale si ha:

f'(x) =
$cos(\pi$
$3 x)$

Quindi il coefficiente angolare della tangente è: $m= f'(1) =$ cos(
$\pi$
$$ 3) = 1 2 . $$
Equazione tangente: $y-0 =$
$2 (x-1), y=$
$2 x-$
$$ 1 2 . $$

$Q 4$

Nello spazio tridimensionale, sia $r$ la retta passante per i punti $A(-2, 0, 1)$ e $B(0, 2, 1).$
Determinare le coordinate di un punto appartenente alla retta $r$ che sia equidistante rispetto $ai$
punti $C(5, 1, -2)$ e $D(1, 3, 4).$

I parametri direttori della retta sono: $a= 0 + 2 = 2, b= 2 -0 = 2, c= 1 -1 = 0.$ La retta $AB$
ha quindi equazioni parametriche:

$x= -2 + 2t$
$y= 0 + 2t$
$z= 1 + 0$ ∙t
$x= -2 + 2t$
$y= 2t$
$z= 1$

Il generico punto $P$ di $r$ ha coordinate: $P= (-2 + 2t; 2t; 1).$ Deve essere $PC=PD:$

$\sqrt{-7 + 2t}2 + (2t-1)^{2} + 9 = \sqrt{-3 + 2t}2 + (2t-3)^{2} + 9$

Elevando al quadrato e semplificando si ha: $t= 4$ . Quindi: il punto richiesto è $P= (6; 8; 1).$

Simulazione $02$ aprile 2019
Quesiti

$Q 5$

Emma $fa$ questo gioco: lancia un dado con facce numerate da $1$ a $6;$ se esce il numero $3$ guadagna
$3$ punti, altrimenti perde $1$ punto. Il punteggio iniziale è $0.$
▪ Qual è la probabilità che, dopo $4$ lanci, il suo punteggio sia ancora $0?$
▪ Qual è la probabilità che, in una sequenza di $6$ lanci, il punteggio non scenda mai sotto
lo $0?$

a) Affinchè il punteggio dopo $4$ lanci sia $0$ deve uscire una sola volta il $3,$ quindi si tratta di
calcolare la probabilità di avere $1$ successo (di probabilità $1/6)$ su $4$ prove ripetute:

$p= (4$
$$ 1) (1 6) 1 (5 6) 3 $$
$= 4 ∙53$
$$ 64 = 125 $$
$324 \cong 0.386 = 38.6$ %

$b)$ Il punteggio scende sotto lo $0$ se al primo lancio NON esce il $3$ (probabiltà $5/6).$ Se al primo
lancio esce il $3$ (probabilità $1/6),$ per avere un punteggio negativo nei $4$ lanci successivi deve
uscire un numero diverso da $3$ (probabilità (
$$ 5 6) 4 ). $$
Quindi la probabilità che il punteggio scenda sotto lo $0$ è:
$$ 5 6 + ( 1 6) ( 5 6) 4 . $$
La probabilità che il punteggio NON SCENDA MAI sotto $0$ è perciò:

$p= 1 -[5$
$$ 6 + (1 6) (5 6) 4 $$
] $= 1 -7105$
$$ 7776 = 671 $$
7776 $\cong 0.086 = 8,6$ %.

$Q 6$

$Ai$ vertici di un quadrato ABCD, di lato $2 m,$ sono fissate quattro cariche elettriche. La carica in
A è pari a $9 nC,$ la carica in $B$ è pari a $2 nC,$ la carica in $C$ è pari a $4 nC,$ la carica in $D$ è pari
a $-3 nC.$ Supponendo che le cariche si trovino nel vuoto, determinare intensità, direzione e verso
del campo elettrostatico generato dalle quattro cariche nel centro del quadrato.

Rappresentiamo i vettori relativi $ai$ quattro campi elettrostatici nel centro $P$ del quadrato (i valori
indicati per le cariche sono in $nC):$

Simulazione $02$ aprile 2019
Quesiti

Osserviamo che, essendo $qA-qC= qB+ |qD|,$ il modulo EA,C del campo generato dalle cariche in
A e $C$ (diretto da $P$ verso $C)$ è uguale a quello, EB,D, del campo generato da $B$ e $D$ (diretto da $P$
verso $D).$ Il campo risultante E⃗ è indicato nella figura seguente (diretto da $P$ verso l’alto):

Indicata con $r$ la distanza dei vertici dal centro del quadrato $(r=$
$\sqrt{2} m= \sqrt{2} m$ e con $k$ la costante
di Coulomb $(k= 9 ∙109$ N∙
$$ m^{2 $$
$C^{2}$ ), i moduli dei campi generati dalle quattro cariche sono:

$EA= k$
$$ qA $$
$r^{2} , EB= k$
$$ qB $$
$r^{2} , EC= k$
$$ qC $$
$r^{2} , ED= k$
$$ qD r^{2 $$
Quindi:
$EA,C= k$
$r^{2} (qA-qC) , EB,D= k$
$r^{2} (qB+ |qD|)$

Pertanto:
$E= EA,C∙\sqrt{2} = k∙\sqrt{2}$
$$ r^{2 $$
$(qA-qC) =$
$9 ∙109 N∙m^{2}$
$C^{2} ∙\sqrt{2}$
$2 m^{2}$
$(9 ∙10-9 C-4 ∙10-9C) =$

$$ = 45\sqrt{2} 2 N $$
$C\cong 31.8 N$
$C$ .

$Q 7$

$1.$ Un protone, inizialmente in quiete, viene accelerato da una d.d.p. di $400 V$ ed entra,
successivamente, in una regione che è sede di un campo magnetico uniforme e
perpendicolare alla sua velocità.
La figura illustra un tratto semicircolare della traiettoria descritta dal protone (i quadretti
hanno lato $1,00 m).$ Determinare l’intensità di B⃗ .

Simulazione $02$ aprile 2019
Quesiti

Calcoliamo l’accelerazione del protone (carica $q = 1.602 ∙10-19 C,$ diagonale di un quadratino
$d= \sqrt{2} m$ ):
$ma= qE= qV$
$d$ ,
$a= q V$
$d m$
Dalla legge di Lorentz otteniamo il legame fra il modulo del campo magnetico $B$ con la massa
della carica, la sua velocità ed il raggio $R=d$ della traiettoria circolare:
$qvB= mv2$
$R$ ,
$B= mv$
$qR$ (con $m$ massa del protone,
$m= 1.673$ ∙ $10-27 kg)$
Resta da calcolare la velocità con cui il protone entra nel campo magnetico. Trattandosi di un moto
uniformemente accelerato si ha:

$v= \sqrt{2as}= \sqrt{2} q V$
$d md= \sqrt{2} q V$

Quindi:
$B= mv$
$qR= m$
$qR \sqrt{2} q V$
$m= \sqrt{2} m V$
$qR2 = \sqrt{2}$ ∙
$(1.673$ ∙ $10-27 kg) (400 V)$
$(1.602 ∙10-19 C)(2 m^{2})$
$\cong 0.00204 T=$
$= 2.04 ∙10-3 T= B.$

$Q 8$

Si vuole ottenere l'emissione di elettroni da lastre metalliche di materiali diversi su cui incide
una radiazione di frequenza $7,80 ∙1014 Hz.$ Determinare, motivando la risposta, quale tra i
materiali in elenco è l’unico adatto allo scopo.

Materiale
Lavoro di estrazione
Argento
$4,8 eV$
Cesio
$1,8 eV$
Platino
$5,3 eV$

Individuato il materiale da utilizzare, determinare la velocità massima che può avere un elettrone
al momento dell'emissione.

Simulazione $02$ aprile 2019
Quesiti

Ricordiamo che per avere emissione di elettroni la radiazione incidente deve avere un’energia
superiore al lavoro di estrazione $W$ tipico del metallo in questione. Detta ν la frequenza della
radiazione incidente e $h$ la costante di Planck, deve essere:

$hν> W$

Nel nostro caso si ha:

$hν= (6.626 ∙10-34 J\cdot s)(7.80 ∙1014 s-1) = 5.168 ∙10-19 J= 5.168 ∙10-19 J$
$1,602 ∙10-19C \cong 3.2 eV$

Osservando la tabella allegata, risulta $hν> W$ per il Cesio.

Determiniamo ora la velocità massima che può avere un elettrone al momento dell’emissione.

Detta $K$ l’energia cinetica massima e $v$ la velocità massima al momento dell’emissione
dell’elettrone di massa $m,$ indicata con $ν0$ la “frequenza di soglia” del cesio (legata al lavoro di
estrazione dalla relazione $W= hν0),$ risulta:

$K= 1$
$2 mv2 = hν-hν0 = hν-W(cesio) = 3.2 eV-1.8eV= 1.4 eV=$

$= (1.4 J$
$C) (1,602 ∙10-19C ) = 2.24 ∙10-19 J$

La velocità massima richiesta è quindi:

$v= \sqrt{2K}$
$m= \sqrt{2}(2.24 ∙10-19 J)$
$9,109$ ∙ $10-31 kg\cong 0.701 ∙106 m$
$s= 7.01 ∙105 m$
$s=$ velocità massima

COSTANTI FISICHE
carica elementare
$1,602 ∙10-19 C$
costante di Planck
$6,626 ∙10-34 J \cdot s$
costante dielettrica nel vuoto
$\varepsilon 0$
$8,854$ ∙ $10-12 F/m$
massa dell’elettrone
$$ me $$
$9,109$ ∙ $10-31 kg$
massa del protone
$$ mp $$
$1,673$ ∙ $10-27 kg$

Con la collaborazione di Angela Santamaria

Ministero dell’Istruzione, dell’ Università e della Ricerca
$LI03 -$ SCIENTIFICO - OPZIONE SCIENZE APPLICATE
$LI15 -$ SCIENTIFICO - SEZIONE $AD$ INDIRIZZO SPORTIVO
(Testo valevole anche per le corrispondenti sperimentazioni internazionali e quadriennali)
Tema di: MATEMATICA e FISICA
Il candidato risolva uno dei due problemi e risponda a $4$ quesiti.
PROBLEMA $1$
Assegnate due costanti reali a e $b$ (con $a> 0),$ si consideri la funzione q(t) così definita:
q(t) = at∙ebt
$1.$ A seconda dei possibili valori di a e $b,$ discutere se nel grafico della funzione $q$ è presente un punto di
massimo o di minimo. Determinare i valori di a e $b$ in corrispondenza dei quali il grafico della funzione
q(t), in un piano cartesiano di coordinate $(t, y),$ ha un massimo nel punto $B(2,$
e).
$2.$ Assumendo, d’ora in avanti, di avere $a= 4$ e $b= -$
$2$ , studiare la funzione
q(t) $= 4t∙e- t$

verificando, in particolare, che si ha un flesso nel punto $F(4,$
$$ 16 $$
$e^{2}).$
Determinare l’equazione della retta tangente al grafico nel punto $F.$

$3.$ Supponendo che la funzione q(t) rappresenti, per $t\ge 0,$ la carica elettrica (misurata in $C)$ che attraversa
all’istante di tempo $t$ (misurato in $s)$ la sezione di un certo conduttore, determinare le dimensioni fisiche
delle costanti a e $b$ sopra indicate. Sempre assumendo $a= 4$ e $b= -$
$2$ , esprimere l’intensità di
corrente i(t) che fluisce nel conduttore all’istante $t;$ determinare il valore massimo ed il valore minimo
di tale corrente e a quale valore essa si assesta col trascorrere del tempo.

$4.$ Indicando, per $t^{0} \ge 0,$ con $Q(t^{0})$ la carica totale che attraversa la sezione del conduttore in un dato
intervallo di tempo $[0, t^{0}],$ determinare a quale valore tende $Q(t^{0})$ per $t^{0} \to +\infty$ .
Supponendo che la resistenza del conduttore sia $R= 3\Omega$ , scrivere (senza poi effettuare il calcolo), un
integrale che fornisca l’energia dissipata nell’intervallo di tempo $[0, t^{0}].$

Ministero dell’Istruzione, dell’ Università e della Ricerca
PROBLEMA $2$
Una carica elettrica puntiforme $Q^{1} = 4q$ (con $q$ positivo) è fissata nell’origine O di un sistema di riferimento
nel piano Oxy (dove $x$ e $y$ sono espressi in $m).$ Una seconda carica elettrica puntiforme $Q^{2} = q$ è vincolata
a rimanere sulla retta $r$ di equazione $y= 1.$

$1.$ Supponendo che la carica $Q^{2}$ sia collocata nel punto $A(0, 1),$ provare che esiste un unico punto $P$ del
piano nel quale il campo elettrostatico generato dalle cariche $Q^{1}$ e $Q^{2}$ è nullo. Individuare la posizione
del punto $P$ e discutere se una terza carica collocata in $P$ si trova in equilibrio elettrostatico stabile oppure
instabile.

$2.$ Verificare che, se la carica $Q^{2}$ si trova nel punto della retta $r$ avente ascissa $x,$ l’energia potenziale
elettrostatica del sistema costituito da $Q^{1}$ e $Q^{2}$ è data da
U(x) $= k$
$4q^{2}$
$\sqrt{1} + x^{2}$

dove $k$ è una costante positiva (unità di misura: $N ∙m^{2}/C^{2}).$

$3.$ Studiare la funzione U(x) per $x\in R,$ specificandone eventuali simmetrie, asintoti, massimi o minimi,
flessi. Quali sono i coefficienti angolari delle tangenti nei punti di flesso?

$4.$ A partire dal grafico della funzione $U,$ tracciare il grafico della funzione $U',$ specificandone le eventuali
proprietà di simmetria. Determinare il valore di $\int$
U'(x)
$-m$
$dx$ (dove $m> 0$ indica l’ascissa del punto di
minimo di $U').$

QUESITI
$1.$ Determinare i valori di a e $b$ in modo che la funzione $g: R-{3} \to R$

g(x) = {
$3 -a x^{2}$
per $x\le 1$

$x-3$
per $x> 1$

sia derivabile in tutto il suo dominio. Tracciare i grafici delle funzioni $g$ e $g'.$

$2.$ Sia $R$ la regione piana compresa tra l'asse $x$ e la curva di equazione $y= 2e^{1}-|x|.$ Provare che, tra i rettangoli
inscritti in $R$ e aventi un lato sull'asse $x,$ quello di area massima ha perimetro minimo ed è un quadrato.

$3.$ Una scatola contiene $16$ palline numerate da $1$ a $16.$
Se ne estraggono $3,$ una alla volta, rimettendo ogni volta nella scatola la pallina estratta. Qual è la
probabilità che il primo numero estratto sia $10$ e gli altri due minori di $10?$
Se ne estraggono $5$ contemporaneamente. Qual è la probabilità che il più grande dei numeri estratti sia
uguale a $13?$

Ministero dell’Istruzione, dell’ Università e della Ricerca
$4.$ Scrivere, giustificando la scelta effettuata, una funzione razionale $y=$
s(x)
t(x) , dove s(x) e t(x) sono
polinomi, tale che il grafico della funzione:
incontri l'asse $x$ nei punti di ascissa $-1$ e $2$ e sia $ad$ esso tangente in quest'ultimo punto;
abbia asintoti verticali di equazioni $x= -3$ e $x= 1;$
passi per il punto $P(7, 10).$
Rappresentare, qualitativamente, il grafico della funzione trovata.
$5.$ Si consideri la superficie sferica $S$ di equazione $x^{2} + y^{2} + z^{2} -2x+ 6z= 0.$
Dopo aver determinato le coordinate del centro e la misura del raggio, verificare che il piano $\pi$ di
equazione $3x-2y+ 6z+ 1 = 0$ e la superficie $S$ sono secanti.
Determinare il raggio della circonferenza ottenuta intersecando $\pi$ e $S.$

$6.$ Un punto materiale si muove di moto rettilineo, secondo la legge oraria espressa, per $t\ge 0,$ da
x(t) =
$9 t^{2}$ (
$3 t+ 2),$ dove x(t) indica (in $m)$ la posizione occupata dal punto all’istante $t$ (in $s).$ Si tratta
di un moto uniformemente accelerato? Calcolare la velocità media nei primi $9$ secondi di moto e
determinare l’istante in cui il punto si muove a questa velocità.

$7.$ Una sfera di massa $m$ urta centralmente a velocità $v$ una seconda sfera, avente massa $3m$ ed inizialmente
ferma.
a. Stabilire le velocità delle due sfere dopo l'urto, nell'ipotesi che tale urto sia perfettamente elastico.
$b.$ Stabilire le velocità delle due sfere dopo l'urto, nell'ipotesi che esso sia completamente anelastico.
Esprimere, in questo caso, il valore dell'energia dissipata.

$8.$ Un campo magnetico, la cui intensità varia secondo la legge B(t) $= B^{0}(2 + sen(\omega t)),$ dove $t$ indica il tempo,
attraversa perpendicolarmente un circuito quadrato di lato $l.$ Detta $R$ la resistenza presente nel circuito,
determinare la forza elettromotrice e l’intensità di corrente indotte nel circuito all’istante $t.$ Specificare le
unità di misura di tutte le grandezze coinvolte.

____________________________
Durata massima della prova: $6$ ore.
È consentito l’uso di calcolatrici scientifiche $e/o$ grafiche purché non siano dotate di capacità di calcolo simbolico
(O.M. $n. 350$ Art. $18$ comma $8).$
È consentito l’uso del dizionario bilingue $(italiano-lingua$ del paese di provenienza) per i candidati di madrelingua non italiana.

Simulazione $28$ febbraio 2019
Problema $1$

Tema di MATEMATICA e FISICA

PROBLEMA $1$

Assegnate due costanti reali a e $b$ (con $a> 0),$ si consideri la funzione q(t) così definita:
q(t) = at∙ebt

A seconda dei possibili valori di a e $b,$ discutere se nel grafico della funzione $q$ è presente un
punto di massimo o di minimo. Determinare i valori di a e $b$ in corrispondenza dei quali il grafico
della funzione q(t), in un piano cartesiano di coordinate $(t, y),$ ha un massimo nel punto
$B(2,$
e).

La funzione è definita, continua e derivabile su tutto $R$ e risulta:
$q' =$ a $ebt+$ abt $ebt=$ a $ebt(1 + bt) \ge 0$ se $1 + bt\ge 0.$
Se $b= 0: q= at,$ non si hanno massimi e minimi
Se $b> 0: q' \ge 0$ se $t\ge -$
$b$ : la funzione è crescente per $t> -$
$b$ e decrescente per $t< -$
$$ 1 b $$
Quindi abbiamo un minimo per $t= -$
$b$ .
Se $b< 0: q' \ge 0$ se $t\le -$
$b$ : la funzione è crescente per $t< -$
$b$ e decrescente per $t> -$
$$ 1 b $$
Quindi abbiamo un massimo per $t= -$
$b$ .

Per avere un massimo in $B$ deve essere -
$b= 2, b= -$
$2$ . Imponendo il passaggio per $B$ si ha:
$q(2) =$
$e= 2a e-1 =$
$2a$
e : $a= 4$ .

Assumendo, d’ora in avanti, di avere $a= 4$ e $b= -$
$2$ , studiare la funzione
q(t) $= 4t∙e- t$
verificando, in particolare, che si ha un flesso nel punto $F(4,$
$$ 16 $$
$e^{2}).$
Determinare l’equazione della retta tangente al grafico nel punto $F.$

Simulazione $28$ febbraio 2019
Problema $1$

Abbiamo già osservato che la funzione è definita, continua e derivabile su tutto $R.$ Essa è positiva
se $t>o$ e negativa se $t<0.$ Risulta $q=0$ solo se $t=0.$ Calcoliamo i limiti:

$$ lim $$
$t\to -\infty 4t∙e- t$
$2 = -\infty$ (non c'è asintoto obliquo),
$$ lim $$
$t\to +\infty 4t∙e- t$
$2 =$ lim
$t\to -\infty$
$4t$
e $t$
$$ 2 = 0+ $$
(asintoto orizzontale $q=0).$

Studiamo la derivata prima: abbiamo già detto che se $b< 0 : q' \ge 0$ se $t\le -$
$b$ : la funzione è
crescente per $t< -$
$b$ e decrescente per $t> -$
$b$ . Quindi abbiamo un massimo per $t= -$
$b$ .
Nel nostro caso $b= -$
$2$ , quindi punto di massi $x=2: B= (2;$
e).

Studiamo la derivata seconda, notando che $q' =$ a $ebt(1 + bt) = 4 e-1$
$2t(1 -$
$2 t)$ .

q'' $= -2 e-1$
$2t(1 -$
$2 t) + 4 e-1$
$2t (-$
$2) = 2 e-1$
$2t($
$2 t-2) \ge 0$ se $t\ge 4$ : il grafico quindi volge
la concavità verso l’alto per $t> 4$ e verso il basso per $t< 4 : t= 4$ punto di flesso.

Risulta:

$q(4) =$
$$ 16 $$
$e^{2}$ , quindi abbiamo il flesso $F= (4;$
$$ 16 $$
$e^{2})$ .

Grafico:

Determiniamo la tangente nel punto di flesso. Risulta $q'(4) = -$
$e^{2}$ , quindi la tangente
inflessionale ha equazione:

$q-16$
$e^{2} = -4$
$e^{2} (t-4) , q= -4$
$e^{2} t+ 32$
$$ e^{2 $$

Simulazione $28$ febbraio 2019
Problema $1$

Supponendo che la funzione q(t) rappresenti, per $t\ge 0,$ la carica elettrica (misurata in $C)$ che
attraversa all’istante di tempo $t$ (misurato in $s)$ la sezione di un certo conduttore, determinare le
dimensioni fisiche delle costanti a e $b$ sopra indicate. Sempre assumendo $a= 4$ e $b= -$
$$ 1 2 , $$
esprimere l’intensità di corrente i(t) che fluisce nel conduttore all’istante $t;$ determinare il valore
massimo ed il valore minimo di tale corrente e a quale valore essa si assesta col trascorrere del
tempo.

Si ha: q(t) = at∙ebt
Essendo la dimensione di $q$ quella di una carica elettrica, le dimensioni di a sono quelle di
una corrente elettrica: dimensioni di $a=[corrente elettrica]=[carica]/[tempo]=[i]$
Siccome ebt deve essere un numero puro, $b$ ha le dimensioni di $[1/tempo]:$
dimensioni di $b=[1/tempo]=[t-1]$
Determiniamo i(t):
i(t) = q'(t) $= 4 e-1$
$2t(1 -1$
$2 t) = 2 e-1$
$2t(2 -t) =$ i(t)
Studiamo la derivata di i(t):
i'(t) = q''(t) $= e-1$
$2t(t-4) \ge 0$ se $t\ge 4$ : i cresce per $t>4$ e decresce per $0 \le t< 4; t=4$ è
punto di minimo. Risulta poi $i(0) = 4$ e lim
$t\to +\infty$ i(t) $= 0-$ .
Quindi i è massima per $t=0$ (valore massimo $4)$ e minima per $t=4$ (valore minimo
$i(4) = q'(4) = -$
$e^{2}$ ).
La corrente si assesta per $t\to +\infty$ , quando tende a $0.$
Grafico qualitativo di i(t):

Simulazione $28$ febbraio 2019
Problema $1$

Indicando, per $t^{0} \ge 0,$ con $Q(t^{0})$ la carica totale che attraversa la sezione del conduttore in un
dato intervallo di tempo $[0, t^{0}],$ determinare a quale valore tende $Q(t^{0})$ per $t^{0} \to +\infty$ .
Supponendo che la resistenza del conduttore sia $R= 3\Omega$ , scrivere (senza poi effettuare il
calcolo), un integrale che fornisca l’energia dissipata nell’intervallo di tempo $[0, t^{0}].$

Interpretando q(t) come la carica che attraversa la sezione del conduttore nell’intervallo di tempo
$[0;$ t], risulta: $Q(t^{0}) = q(t^{0}) = 4t^{0} ∙e- t^{0}$

Si ha poi:

$$ lim $$
$t^{0}\to +\infty 4t^{0} ∙e- t^{0}$
$2 =$ lim
$t^{0}\to +\infty$
$4t^{0}$
$$ e t^{0} 2 $$
$= 0+$ (e
$$ t^{0 $$
$2$ è infinito di ordine superiore rispetto $4t^{0})$

Se conoscessimo i(t) ma non q(t) allora, ricordando che: i(t) =
dq(t)
$dt$ , la carica che attraversa la
sezione del conduttore nel tempo $dt$ si ottiene nel seguente modo:

dq(t) = i(t) $dt$ .

Nell’intervallo $[0, t^{0}]$ abbiamo:

$$ \int $$
dq(t)
$$ t^{0} o = \int $$
i(t)
$$ t^{0} o $$
$dt , q(t^{0}) -q(0) = \int$
$2 e-1$
$2t(2 -t)$
$$ t^{0} o $$
$dt$ che conduce allo stesso risultato:

$q(t^{0}) = 4t^{0} ∙e- t^{0}$
$2 = Q(t^{0})$

L’energia dissipata nel tempo $dt$ è: $dE= i2Rdt$ ; nell’intervallo $[0, t^{0}]$ l’energia dissipata è:

$E= \int i2Rdt$
$$ t^{0} 0 = \int $$
$(2 e-1$
$2t(2 -t))$
$∙3 dt$
$$ t^{0} 0 $$
$= 12 \int e-t(2 -t)2 dt$
$$ t^{0} 0 $$
= E

Con la collaborazione di Angela Santamaria

Simulazione $28$ febbraio 2019
Problema $2$

Tema di MATEMATICA e FISICA

PROBLEMA $2$

Una carica elettrica puntiforme $Q^{1} = 4q$ (con $q$ positivo) è fissata nell’origine O di un sistema di
riferimento nel piano Oxy (dove $x$ e $y$ sono espressi in $m).$ Una seconda carica elettrica puntiforme
$Q^{2} = q$ è vincolata a rimanere sulla retta $r$ di equazione $y= 1.$

Supponendo che la carica $Q^{2}$ sia collocata nel punto $A(0, 1),$ provare che esiste un unico punto
$P$ del piano nel quale il campo elettrostatico generato dalle cariche $Q^{1}$ e $Q^{2}$ è nullo. Individuare
la posizione del punto $P$ e discutere se una terza carica collocata in $P$ si trova in equilibrio
elettrostatico stabile oppure instabile.

Osservando il verso dei campi generati dalle due cariche, il punto $P$ deve trovarsi sull’asse $y$ fra O
ed A; detta $y$ la sua ordinata deve essere:

$E^{1}(P) = E^{2}(P), kQ1$
$y^{2} =$
$$ kQ2 $$
$(1 -y)2 , k4q$
$y^{2} =$
$$ kq $$
$(1 -y)2$ ,
$4(1 -y^{2}) = y^{2},$

$3y^{2} -8y+ 4 = 0 : y= 2$ (non accettabile) e $y= 2$
$3$ , unica soluzione accettabile .

Simulazione $28$ febbraio 2019
Problema $2$

Collochiamo ora in $P$ una terza carica $Q^{3}$ (supponiamo positiva). Tale carica è in equilibrio
elettrostatico instabile. Infatti se spostiamo la carica da $P$ verso un punto E, la risultante delle
forze esercitate da $Q^{1}$ e $Q^{2}$ tende $ad$ allontanare la carica da $P$ come si può vedere nella figura
seguente:

Verificare che, se la carica $Q^{2}$ si trova nel punto della retta $r$ avente ascissa $x,$ l’energia potenziale
elettrostatica del sistema costituito da $Q^{1}$ e $Q^{2}$ è data da
U(x) $= k$
$4q^{2}$
$\sqrt{1} + x^{2}$

dove $k$ è una costante positiva (unità di misura: $N∙m^{2}/C^{2}).$

Risulta:

U(x) $= kQ1Q^{2}$
$$ OA $$
$= k4q^{2}$
$OA= k$
$4q^{2}$
$\sqrt{1} + x^{2} =$ U(x)

Simulazione $28$ febbraio 2019
Problema $2$

Studiare la funzione U(x) per $x\in R,$ specificandone eventuali simmetrie, asintoti, massimi o
minimi, flessi. Quali sono i coefficienti angolari delle tangenti nei punti di flesso?

U(x) $= 4kq2∙$
$\sqrt{1}+ x^{2}$
Osserviamo che la funzione, a meno della costante moltiplicativa positiva $4kq2,$ è
$y=$
$\sqrt{1} + x^{2}$
Si tratta di una funzione definita, continua e derivabile su tutto $R,$ sempre positiva, pari (simmetria
rispetto all’asse delle ordinate); i limiti all’infinito sono uguali a $0+ (y=0$ asintoto orizzontale).
Studiamo la derivata prima:
$y' = -$
$(x^{2} + 1)$
$$ 3 2 $$
$\ge 0$ se $x\le 0;$ massimo relativo (ed assoluto) per $x= 0; U(max)= 4kq2$
Studiamo la derivata seconda:
y'' =
$3x^{2}$
$(x^{2} + 1)$
$$ 5 2 $$
-
$(x^{2} + 1)$
$$ 3 2 = $$
$-1 + 2x^{2}$
$(1 + x^{2})\sqrt{1} + x^{2} \ge 0$ se $x\le -\sqrt{2}$
$2 , or x\ge \sqrt{2}$
Abbiamo quindi due flessi per la U(x):
$F^{1} = (-\sqrt{2}$
$2 ; 4kq2\sqrt{6}$
) , $F^{2} = (\sqrt{2}$
$2 ; 4kq2\sqrt{6}$
Il grafico di U(x) è del tipo:

Simulazione $28$ febbraio 2019
Problema $2$

Il coefficiente angolare della tangente in $F^{2}$ è $U' (\sqrt{2}$
$2 ) = ⋯= -$
$9 kq2\sqrt{3}$ ; il coefficiente angolare
della tangente in $F^{1}$ è $U' (-\sqrt{2}$
$2 ) = ⋯=$
$9 kq2\sqrt{3}$ ;

A partire dal grafico della funzione $U,$ tracciare il grafico della funzione $U',$ specificandone le
eventuali proprietà di simmetria. Determinare il valore di $\int$
U'(x)
$-m$
$dx$ (dove $m> 0$ indica
l’ascissa del punto di minimo di $U').$

Dal grafico di U(x) deduciamo le seguenti proprietà di U’(x):

$U$ è sempre derivabile, quindi U’ è definita su tutto $R.$
Essendo $U$ pari, U’ sarà dispari (grafico simmetrico rispetto all’origine).
$U$ cresce per $x<0$ (U’ positiva) e decresce per $x>0$ (U’ negativa); $U’=0$ per $x=0.$
$U’’>0$ per $x< -\sqrt{2}$
$2 , or x> \sqrt{2}$
$2$ : U’ crescente; $U’’<0$ per $-\sqrt{2}$
$2 < x< \sqrt{2}$
$2$ : U’ decrescente.
Quindi $x= -\sqrt{2}$
$2$ punto di massimo e $x= \sqrt{2}$
$2$ punto di minimo.

Osservando l’andamento della tangente al grafico di U(x) deduciamo che per $x\to +\infty$ il
coefficiente angolare tende a $0-$ (tale è anche il limite della U’); per $x\to -\infty$ il coefficiente
angolare tende a $0+$ (tale è anche il limite della U’).

Grafico qualitativo di U’(x):

Risulta:

$$ \int $$
U'(x)
$-m$
$dx=0,$ poiché U'(x) è dispari.

Con la collaborazione di Angela Santamaria

Simulazione $28$ febbraio 2019
Quesiti

Tema di $MATEMATICA-FISICA$

$Q 1$

Determinare i valori di a e $b$ in modo che la funzione $g: R-{3} \to R$

g(x) $= {3 -a x^{2}$ per $x\le 1$
$x-3$ per $x> 1$

sia derivabile in tutto il suo dominio. Tracciare i grafici delle funzioni $g$ e $g'.$

La funzione è continua e derivabile in tutto il dominio escluso $x=1$ che $va$ analizzato
separatamente.

Per essere derivabile in $x=1$ deve essere necessariamente continua, quindi:

$$ lim $$
$x\to 1-g(x) =$ lim
$x\to 1- (3 -ax2) = 3 -a= g(1) =$ lim
$x\to 1+g(x) =$ lim
$x\to 1+$
$x-3 = -$
$2 b$ . Quindi:

$3 -a= -1$
$2 b$ ,
$b= 2a-6$

Risulta poi:

g'(x) = {
$-2ax$ se $x< 1$
-
$(x-3)^{2}$ se $x> 1$

$g-$
' $(1) =$ lim
$x\to 1- (-2ax) = -2a , g+$
' $(1) =$ lim
$x\to 1+ [-$
$(x-3)^{2}] = -1$
$4 b$ . Quindi:

$-2a= -$
$4 b , b= 8a$ . Deve pertanto essere:

${b= 2a-6$
$b= 8a$
; ${a= -1$
$b= -8$

Perciò:

g(x) = {
$3 + x^{2}$ se $x\le 1$
$-8$
$x-3$ se $x> 1$
; g'(x) = {
$2x$ se $x\le 1$
$(x-3)^{2}$ se $x> 1$

Simulazione $28$ febbraio 2019
Quesiti

Il grafico di g(x) è immediato, essendo una parte di parabola ed una parte di funzione omografica:

Il grafico di g’(x) è in parte una retta (per $x\le 1)$ ed in parte la funzione di equazione:
$y=$
$(x-3)^{2}$ , se $x> 1$ .
Studiamo qualitativamente questa funzione:
E’ sempre positiva, ha asintoto verticale $x=3,$ per $x$ che tende a più infinito tende a $0+,$ si
congiunge alla retta in $B(1;2):$

$Q 2$

Sia $R$ la regione piana compresa tra l'asse $x$ e la curva di equazione $y= 2e^{1}-|x|.$ Provare che, tra
i rettangoli inscritti in $R$ e aventi un lato sull'asse $x,$ quello di area massima ha perimetro minimo
ed è un quadrato.

Il grafico di $y= 2e^{1}-|x|$ si ottiene a partire dal grafico di $y= ex$ mediante le seguenti
trasformazioni:
$y= e^{1}+x$ traslazione di vettore $(-1; 0)$
$y= e^{1}-x$ simmetria rispetto all'assey

Simulazione $28$ febbraio 2019
Quesiti

$y= 2 e^{1}-x$ dilatazione verticale di fattore $2$

$y= 2 e^{1}-|x|$ si conferma la parte a destra dell’asse $y$ della precedente funzione e si ribalta questa
parte rispetto all’asse $y:$

Consideriamo il rettangolo ABCD e indichiamo con $x$ l’ascissa di A $(x>0);$ risulta:
$AD= yA= 2 e^{1}-x , AB= 2x$ . Quindi:

$S=$ Area(R) $= 2x(2 e^{1}-x) = 4x e^{1}-x , x> 0$ .
$S' = 4 e^{1}-x(1 -x) \ge 0$ se $x\le 1 : S$ cresce se $0<x<1$ e decresce se $x>1 : S$ è massima se $x=1.$
Quindi: $AB=2x=2$ e $AD=2 e^{1}-x= 2:$ il rettangolo di area massima è un quadrato.

Analizziamo ora il perimetro. Si ha:
$2p= 4x+ 4 e^{1}-x=$ min se lo è $y= x+ e^{1}-x;$ ma risulta: $y' = 1 -e^{1}-x\ge 0$ se

$e^{1}-x\le 1 , 1 -x\le 0, x\ge 1$ : il perimetro cresce per $x>1$ e decresce per $0<x<1:$ esso è minimo
se $x=1,$ quindi il rettangolo di perimetro minimo è un quadrato, lo stesso che ha area massima.

Simulazione $28$ febbraio 2019
Quesiti

$Q 3$

Una scatola contiene $16$ palline numerate da $1$ a $16.$
Se ne estraggono $3,$ una alla volta, rimettendo ogni volta nella scatola la pallina estratta.
Qual è la probabilità che il primo numero estratto sia $10$ e gli altri due minori di $10?$
Se ne estraggono $5$ contemporaneamente. Qual è la probabilità che il più grande dei numeri
estratti sia uguale a $13?$

a) La probabilità che il primo estratto sia $10$ è $p^{1} =$
$16$ , la probabilità che il secondo estratto sia
minore di $10$ è $p^{2} =$
$16$ , uguale alla probabilità $p^{3}$ che sia minore di $10$ anche il terzo
estratto. Quindi la probabilità $p$ richiesta è:

$p= p^{1} ∙p^{2} ∙p^{3} = 1$
$16 ∙9$
$16 ∙9$
$$ 16 = 81 $$
4096 $\cong 0.0198 = 1.98$ %

$b)$ Le cinquine favorevoli sono quelle che contengono il $13$ e quattro fra i numeri da $1$ a $12,$
quindi sono tante quante le combinazioni di $12$ oggetti a $4$ a $4 : (12$

Le cinquine possibili sono tante quante le combinazioni di $16$ oggetti a $5$ a $5: (16$
La probabilità richiesta è quindi:

$p=$
$$ (12 4 ) (16 5 ) = 495 $$
4368 $\cong 0.113 = 11.3$ %

$Q 4$

Scrivere, giustificando la scelta effettuata, una funzione razionale $y=$
s(x)
t(x) , dove s(x) e t(x)
sono polinomi, tale che il grafico della funzione:
incontri l'asse $x$ nei punti di ascissa $-1$ e $2$ e sia $ad$ esso tangente in quest'ultimo punto;
abbia asintoti verticali di equazioni $x= -3$ e $x= 1;$
passi per il punto $P(7, 10).$
Rappresentare, qualitativamente, il grafico della funzione trovata.

La funzione richiesta ha equazione del tipo:

$y= a∙(x+ 1)(x-2)^{2}$
$(x+ 3)(x-1)$

Questa funzione infatti taglia l’asse $x$ in $-1$ e $2$ ed in quest’ultimo ha una radice doppia (quindi
grafico tangente all’asse $x).$ Inoltre i limiti per $x$ che tende a $-3$ oppure $ad 1$ sono uguali $ad$ infinito,
perciò $x=-3$ e $x=1$ sono asintoti verticali.

Simulazione $28$ febbraio 2019
Quesiti

Imponiamo il passaggio per il punto $P(7, 10):$

$10 =$ a∙
$$ (8)(25) (10)(6) = 10 $$
$3$ a , $a= 3$

Quindi una funzione che soddisfa le condizioni richieste è:

$y= 3 ∙(x+ 1)(x-2)^{2}$
$(x+ 3)(x-1)$

Calcoliamo i limiti alla frontiera del dominio:

$$ lim $$
$x\to \mp \infty 3 ∙(x+ 1)(x-2)^{2}$
$(x+ 3)(x-1) =$ lim
$x\to -\infty 3 ∙x^{3}$
$x^{2} = \mp \infty$

(si avrà un asintoto obliquo poiché il grado del numeratore supera di $1$ il grado del denominatore)

$$ lim $$
$x\to (-3)\mp 3$ ∙
$(x+ 1)(x-2)^{2}$
$(x+ 3)(x-1) = 3$ lim
$x\to (-3)\mp$
$(-2)(25)$
$(x+ 3)(-4) = \mp \infty$

$$ lim $$
$x\to (1)\mp 3$ ∙
$(x+ 1)(x-2)^{2}$
$(x+ 3)(x-1) = 3$ lim
$x\to (-3)\mp$
$$ (2)(1) $$
$(4)(x-1) = \mp \infty$

Il grafico qualitativo è quindi del tipo:

$Q 5$

Si consideri la superficie sferica $S$ di equazione $x^{2} + y^{2} + z^{2} -2x+ 6z= 0.$
Dopo aver determinato le coordinate del centro e la misura del raggio, verificare che il
piano $\pi$ di equazione $3x-2y+ 6z+ 1 = 0$ e la superficie $S$ sono secanti.
Determinare il raggio della circonferenza ottenuta intersecando $\pi$ e $S.$

Simulazione $28$ febbraio 2019
Quesiti

Il centro ha coordinate $C= (1; 0; -3)$ . Il raggio è:

$R= \sqrt{a}^{2}$
$4 + b^{2}$
$4 + c^{2}$
$4 -d= \sqrt{10} = R$

Il piano è secante se la distanza $d$ del centro della sfera dal piano è minore del raggio:

$d= |axC+ byC+ zC+ d|$
$\sqrt{a}^{2} + b^{2} + c^{2}$
$= |3 -18 + 1|$
$$ \sqrt{9} + 4 + 36 $$
$= 2 < \sqrt{10}$ :piano e sfera sono secanti.

Detto $r$ il raggio della circonferenza sezione, $R$ il raggio della sfera e $d$ la distanza del centro della
sfera dal piano si ha:

$r= \sqrt{R}^{2} -d^{2} = \sqrt{10} -4 = \sqrt{6}:$ raggio circonferenza .

$Q 6$

Un punto materiale si muove di moto rettilineo, secondo la legge oraria espressa, per $t\ge 0,$ da
x(t) =
$9 t^{2}$ (
$3 t+ 2),$ dove x(t) indica (in $m)$ la posizione occupata dal punto all’istante $t$ (in $s).$
Si tratta di un moto uniformemente accelerato? Calcolare la velocità media nei primi $9$ secondi di
moto e determinare l’istante in cui il punto si muove a questa velocità.

Il moto non è uniformemente accelerato, perché la legge oraria dovrebbe essere del tipo:

x(t) $= x^{0} + v0t+ 1$
$2 at2$

Calcoliamo la velocità media nei primi $9$ secondi:

$x(9) = 45,$
$x(0) = 0,$
$vM= \Delta x$
$\Delta t= 45$
$9 m$
$s= 5 m/s$

Cerchiamo la velocità in funzione di $t:$

Simulazione $28$ febbraio 2019
Quesiti

$v=$ x'(t) $= 2$
$9 t(1$
$3 t+ 2) + 1$
$9 t^{2} (1$
$$ 3) = 1 $$
$9 (t^{2} + 4t) = 5, t^{2} + 4t-45 = 0:$

$t= -2 \pm 7;$ valore accettabile $t= 5 s$ .

La velocità media dei primi $9$ secondi si ha all’istante $t= 5 s$ .

$Q 7$

Una sfera di massa $m$ urta centralmente a velocità $v$ una seconda sfera, avente massa $3m$ ed
inizialmente ferma.
a. Stabilire le velocità delle due sfere dopo l'urto, nell'ipotesi che tale urto sia perfettamente
elastico.
$b.$ Stabilire le velocità delle due sfere dopo l'urto, nell'ipotesi che esso sia completamente
anelastico. Esprimere, in questo caso, il valore dell'energia dissipata.

Indichiamo con $vA$
' e $vB$
' le velocità della prima e della seconda pallina dopo l’urto; applicando il
principio di conservazione della quantità di moto ed il principio di conservazione dell’energia
cinetica (essendo l’urto elastico), abbiamo:

$mv=$ mvA
' $+ 3mvB$
'
$2 mv2 = 1$
$2$ m(vA
$')^{2} + 1$
$2 (3m)(vB$
' $)^{2}$ ; {
$v= vA$
' $+ 3vB$
'
$v^{2} = (vA$
$')^{2} + 3(vB$
' $)^{2} ; (vA$
' $+ 3vB$
' $)^{2} = (vA$
$')^{2} + 3(vB$
' $)^{2}$

$6vA$
' $v'B+ 6(vB$
' $)^{2} = 0 , vB$
' $= 0$ oppure $vB$
' $= -vA$
'

La prima soluzione non è accettabile, quindi:

$$ vB $$
' $= -vA$
'
$v= vA$
' $+ 3vB$
' $= vA$
' $-3vA$
' $= -2vA$
' ; {
$$ vA $$
' $= -1$
$2 v$
$$ vB $$
' $= 1$
$2 v$

Analizziamo ora il caso dell’urto completamente anelastico (dopo l’urto avremmo un unico corpo
di massa $4m);$ in questo caso si conserva solo la quantità di moto. Indichiamo con $v'$ la velocità
dopo l’urto (comune $ai$ due corpi):

$mv= (m+ 3m)v' , v' = 1$
$4 v$

Cerchiamo infine la perdita di energia (data dalla differenza fra l’energia cinetica iniziale e quella
finale):

$Ei-Ef= 1$
$2 mv2 -1$
$2 (4m)(v')^{2} = 1$
$2 m(v^{2} -4v'2) = 1$
$2 m(v^{2} -1$
$4 v^{2}) = 3$
$8 mv2$

Simulazione $28$ febbraio 2019
Quesiti

$Q 8$

Un campo magnetico, la cui intensità varia secondo la legge B(t) $= B^{0}(2 + sen(\omega t)),$ dove $t$
indica il tempo, attraversa perpendicolarmente un circuito quadrato di lato $l.$ Detta $R$ la resistenza
presente nel circuito, determinare la forza elettromotrice e l’intensità di corrente indotte nel circuito
all’istante $t.$ Specificare le unità di misura di tutte le grandezze coinvolte.

$fem= -d\Phi$ (B⃗ )
$$ dt $$
$= -d(B^{0}(2 + sen(\omega t)) ∙l^{2})$
$$ dt $$
$= -B0l^{2}(\omega$ cos $(\omega t) = -\omega l2B^{0}$ cos $(\omega t)$

Calcoliamo l’intensità della corrente indotta:

$i=$ fem
$= (-\omega l2B^{0}$
) cos $(\omega t)$

Unità di misura delle grandezze coinvolte:

$B, B^{0}:$ tesla $(T) , \omega$ : radianti al secondo, rads
⁄ , $t:$ secondi $(s),$
fem: volt $(V),$

$\Phi$ (B⃗ ): tesla per metri $quadrati=$ weber $(Wb),$ i: ampere (A),
$l:$ metri $(m),$

$R:$ ohm $(\Omega$ ).

Con la collaborazione di Angela Santamaria

Straordinaria 2019 - Quesiti

NOTA DI BRUNO MALUSARDI

quesito $7 -$ maturità 2019 (sessione straordinaria)
Un protone viene sparato su una particella $\alpha$ (due protoni e due neutroni) da una distanza di $10 cm$
(considerare le particelle puntiformi), alla velocità $v^{0} = 5,00 \cdot 103 m s$
⁄ .
Calcolare la distanza di massimo avvicinamento.
$(mp = 1,673 \cdot 10-27 kg$ massa del protone ; $m\alpha = 6,645 \cdot 10-27 kg$ massa particella $\alpha$ ;
$e= 1,602 \cdot 10-19 C$ carica elementare)

Il testo non dà indicazioni sulla particella $\alpha$ , se sia vincolata a stare ferma o se da ferma possa mettersi in
moto.

$1)$ ipotesi: la particella $\alpha$ si mette in moto (rettilineo).
Le due particelle hanno carica elettrica dello stesso segno pertanto sono soggette a una forza repulsiva F⃗.
Poiché a⃗p = F⃗mp
⁄
e $v⃗0$ sono vettori antiparalleli, il modulo della velocità del protone diminuisce man
mano che questo si avvicina alla particella $\alpha$ , che invece si è messa in movimento lungo la retta di moto
del protone con velocità avente stessa direzione e stesso verso di quella del protone ma modulo in
aumento (poiché quanto più il protone si avvicina tanto più aumenta l'intensità della forza elettrica
repulsiva).
La velocita vcm del centro di massa delle due particelle si mantiene costante giacché non esistono forze
esterne agenti su di esse, perciò puo essere determinata nella situazione iniziale:

vcm $= mpv0 + m\alpha \cdot 0$
$mp + m\alpha$
$$ = mp $$
$mp + m\alpha$
$$ v^{0 $$

La distanza tra le due particelle è minima quando esse hanno la stessa velocità $v$ (nel sistema di
riferimento di una di esse in tale istante sono entrambe ferme) sicché in tale istante si ha $v=$ vcm

applichiamo la legge di conservazione dell'energia meccanica: $Ui + Ki = Uf + Kf$

$\implies 2k^{0}$
$$ e^{2 $$
$d+ 1$
$2 mpv0$
$2 = 2k^{0}$
$$ e^{2 $$
$r+ 1$
$2 mpv2 + 1$
$2 m\alpha v^{2}$

$\implies 2k^{0}$
$$ e^{2 $$
$r= 2k^{0}$
$$ e^{2 $$
$d+ 1$
$2 mpv0$
$2 -1$
$2 mpv2 -1$
$2 m\alpha v^{2} \implies$

$r=$
$2k0e^{2}$
$2k^{0} e^{2}$
$d+ 1$
$2 mpv02 -1$
$2 mpv2 -1$
$2 m\alpha v^{2}$
$$ = 1 1 $$
$d+$
$4k0e^{2}$ [ $mpv02 -(mp + m\alpha )v^{2}]$

$\implies r=$
$$ 1 1 $$
$d+$
$4k0e^{2}$ [ $mpv02 -(mp)$
$v^{02}$
$mp + m\alpha$ ]
$$ = 1 1 $$
$d+ mpv02$
$4k0e^{2}$ [ $1 -$
$$ mp $$
$mp + m\alpha$ ]

$\implies r=$
$$ 1 1 $$
$d+$
$v^{02}$
$4k0e^{2}$ [ $mpm\alpha$
$mp + m\alpha$ ]

Straordinaria 2019 - Quesiti

$$ = 1 1 $$
$0,10 m +$
$(5,00 \cdot 103 m s$
⁄ $)^{2}$
$4(8,99 \cdot 109 Nm2 C^{2}$
⁄
$)(1,602 \cdot 10-19 C)2$ [ $(1,673 \cdot 10-27 kg)(6,645 \cdot 10-27 kg)$
$1,673 \cdot 10-27 kg + 6,645 \cdot 10-27 kg$ ]

$10 + 36204907 m = 2,762 \cdot 10-8 m \implies r= 2,8 \cdot 10-8 m = 28 nm$

la distanza iniziale è molto grande rispetto alle dimensioni delle due particelle, cosicché trascurando
l'energia potenziale iniziale (come se inizialmente le due particelle fossero a distanza infinita) si ottiene
praticamente lo stesso risultato (si noterebbe differenza solo con parecchie cifre significative).

$2)$ ipotesi alternativa: la particella $\alpha$ resta ferma.
Poiché a⃗p = F⃗mp
⁄
e $v⃗0$ sono vettori antiparalleli, il protone a un certo istante si ferma e immediatamente
inverte il senso di marcia. In questo istante si ha dunque la minima distanza tra esse (cioè, come dice il
testo, il massimo avvicinamento).

L'energia potenziale iniziale è $Ui = k^{0}$
$QpQ\alpha$
$= k^{0}$
$e\cdot 2e$
$= 2k^{0}$
$$ e^{2} d $$

applichiamo la legge di conservazione dell'energia meccanica: $Ui + Ki = Uf + Kf$

$Kf = 0 \implies Ui + Ki = Uf \implies 2k^{0}$
$$ e^{2 $$
$d+ 1$
$2 mpv0$
$2 = 2k^{0}$
$$ e^{2} r $$

$\implies r=$
$2k0e^{2}$
$2k^{0} e^{2}$
$d+ 1$
$2 mpv02$
$$ = 1 1 $$
$d+ mpv02$
$4k0e^{2}$
$$ = 1 1 $$
$0,10 m + (1,6726 \cdot 10-27 kg)(5,00 \cdot 103 m s$
⁄ $)^{2}$
$4(8,99 \cdot 109 Nm2 C^{2}$
⁄
$)(1,602 \cdot 10-19 C)2$

$\implies r=$
$(10 + 4,53 \cdot 107)m-1 = 2,2 \cdot 10-8 m = 22 nm$

la distanza iniziale è molto grande rispetto alle dimensioni delle due particelle, cosicché trascurando
l'energia potenziale iniziale (come se inizialmente le due particelle fossero a distanza infinita) si ottiene lo
stesso risultato.

$2 mpv0$
$2 = 2k^{0}$
$$ e^{2 $$
$r \implies r= 4k0e^{2}$
$mpv02 = 4(8,99 \cdot 109 Nm2 C^{2}$
⁄
$)(1,602 \cdot 10-19 C)2$
$(1,673 \cdot 10-27 kg)(5,00 \cdot 103 m s$
⁄ $)^{2}$
$= 2,2 \cdot 10-8 m$

N.B.
Probabilmente l'autore del quesito riteneva di operare con la prima ipotesi fatta, avendo inserito nei dati
utili per la traccia anche la massa della particella alfa (che invece con la seconda ipotesi non è necessaria).
================================================================================

quella alla minima distanza $r$ tra le due particelle è $Uf = 2k^{0}$
$$ e^{2} r $$

*Fonte:* [📄 PDF p.74](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
