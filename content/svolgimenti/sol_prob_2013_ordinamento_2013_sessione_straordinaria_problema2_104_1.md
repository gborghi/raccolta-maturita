---
title: Ordinamento 2013 Straordinaria — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_ordinamento_2013_sessione_straordinaria_problema2_104_1
of_item: prob_2013_ordinamento_2013_sessione_straordinaria_problema2_104_1
prova_id: prova_2013_ordinamento_2013_sessione_straordinaria_problema2_104
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_ordinamento_2013_sessione_straordinaria_problema2_104_1|Ordinamento 2013 Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2013_ordinamento_2013_sessione_straordinaria_problema2_104|Ordinamento 2013 Straordinaria — Problema 2]]

ORDINAMENTO 2013 - SESSIONE STRAORDINARIA - PROBLEMA $2$

Si consideri la funzione:
f(x) $= ln⁡(x^{2} + 1)$

Si studi tale funzione e si tracci il suo grafico $\gamma$ , su un piano riferito $ad$ un sistema di assi
cartesiani ortogonali Oxy.

Dominio: $-\infty < x< +\infty$

Simmetrie notevoli: $f(-x) =$ f(x), quindi la funzione è pari (grafico simmetrico rispetto
all’asse $y).$

Intersezioni con gli assi cartesiani:
$se⁡x= 0, y= 0, se⁡y= 0, x^{2} + 1 = 1, da⁡cui⁡x= 0⁡(doppia)$

Segno della funzione: $ln⁡(x^{2} + 1) > 0⁡se x^{2} + 1 > 1$ quindi per $x\ne 0$

Limiti:

$limx\to \pm \infty ⁡(ln⁡(x^{2} + 1)) = +\infty$
(non ci sono asintoti orizzontali)

Non ci sono asintoti verticali, poiché la funzione è continua su tutto l’asse reale e
non ci sono asintoti obliqui, perché la funzione non è un infinito del primo ordine.

Derivata prima:

f'(x) =
$2x$
$x^{2} + 1 \ge 0⁡⁡⁡⁡se⁡x\ge 0$

La funzione quindi decresce per $x< 0$ e cresce per $x> 0;$ in $x=0$ abbiamo un amassimo
(relativo e assoluto), che vale $0.$

Derivata seconda:

f''(x) $= 2(x^{2} + 1) -2x(2x)$
$(x^{2} + 1)^{2}$
$= -2x^{2} + 2$
$(x^{2} + 1)^{2} \ge 0⁡⁡⁡se⁡⁡ -2x^{2} + 2 \ge 0,⁡⁡⁡cioè⁡per⁡⁡ -1 \le x\le 1$

La curva ha quindi la concavità verso l’alto se $-1 < x< 1$ e verso il basso se
$x< -1⁡ ⋎⁡x> 1.$ Presenta flesso per $x= \pm 1$ di ordinata $y= ln2.$

Il grafico $\gamma$ della funzione è il seguente:

Si scrivano le equazioni delle tangenti a $\gamma$ nei punti di flesso e si calcoli l’area del
triangolo che esse formano con l’asse $x$ .

Determiniamo le tangenti nei punti di flesso $F= (-1; ln2)⁡⁡e⁡⁡⁡G= (1; ln2).$

Tangente a in $F:$
$y-ln2 = f'(-1)(x+ 1)⁡⁡\implies ⁡⁡⁡y= -(x+ 1) + ln2 = -x-1 + ln2$

Tangente $b$ in $G:$
$y-ln2 = f'(1)(x-1)⁡⁡\implies ⁡⁡⁡y= (x-1) + ln2 = x-1 + ln2$

Le due tangenti si intersecano sull’asse $y,$ in $A= (0; -1 + ln2)$

Determiniamo le intersezioni delle tangenti di flesso con l’asse $x:$

$B: {y= -x-1 + ln2$
$y= 0$
$⁡⁡⁡⁡\implies ⁡⁡⁡⁡{x= -1 + ln2$
$y= 0$

Per simmetria: $C= (1 -ln2; 0)$
Il triangolo richiesto ABC ha dunque area:
A(ABC) = BC∙AO
$= (2 -2ln2)|-1 + ln2|$
$= (1-ln2⁡)^{2}⁡u^{2}\cong 0. 0942⁡u^{2}⁡$

Si calcoli l’area della superficie piana $S,$ delimitata dalla curva $\gamma$ , dall’asse $x$ e dalla retta
di equazione $x =1.$

A(S) $= \int f(x)dx= \int ln⁡(x^{2} + 1)dx$
$$ 1 0 1 0 $$

Cerchiamo una primitiva di f(x) $= ln⁡(x^{2} + 1)$ integrando per parti:

$\int ln(x^{2} + 1) dx= \int$ (x)' $∙ln(x^{2} + 1⁡) dx= xln(x^{2} + 1) -\int$ x∙
$2x$
$1 + x^{2} dx=$

$= ⁡xln(x^{2} + 1) -2 \int$
$$ x^{2 $$
$1 + x^{2} dx= xln(x^{2} + 1) -2 \int x^{2} + 1 -1$
$1 + x^{2}$
$dx=$
$= ⁡xln(x^{2} + 1) -2 \int dx+ 2 \int$
$1 + x^{2} dx= xln(x^{2} + 1) -2x+ 2arctg(x) + K$

Quindi:

A(S) $= \int ln⁡(x^{2} + 1)dx$
$$ 1 0 $$
$= [xln(x^{2} + 1) -2x+ 2arctg(x)]0$
$1 = ln2 -2 + 2 ∙\pi$
$4 -0 =$
$=⁡(ln2-2+ \pi$
$2)⁡u^{2}\cong 0. 2639⁡u^{2}$

La superficie $S$ è la base di un solido $\Sigma$ , le cui sezioni, ottenute con piani perpendicolari
all’asse $y$ , sono tutte triangoli equilateri. Si calcoli il volume di $\Sigma$ .

$V(\Sigma ) = \int$
S(y)dy
$$ ln2 0 $$
essendo S(y) l’area del triangolo equilatero di lato $DE,$ con:

$DE= 1 -x$

Essendo $y= ln⁡(x^{2} + 1)$ risulta: $ey= x^{2} + 1⁡⁡⁡da⁡cui⁡⁡⁡x= \sqrt{ey}-1$ (... è $x>0).$

S(y) $= DE2 ∙\sqrt{3}$
$$ 4 = \sqrt{3 $$
$4 ∙(1 -x)2 = \sqrt{3}$
$4 (1 -2x+ x^{2}) = \sqrt{3}$
$4 (1 -2\sqrt{ey}-1 + ey-1) =$

$$ = \sqrt{3 $$
$4 (ey-2\sqrt{ey}-1)$

Calcoliamo $\int \sqrt{ey}-1⁡dy⁡$
Ponendo $x= \sqrt{ey}-1$ si ottiene $y= ln⁡(x^{2} + 1)$ e $dy=$
$2x$
$1+x^{2} dx$ quindi:
$\int \sqrt{ey}-1⁡dy= \int$ x∙
$2x$
$1 + x^{2} dx=$
$$ = 2 \int x^{2 $$
$x^{2}+1 dx= 2x-2arctg(x) + k= 2\sqrt{ey}-1 -2arctg⁡\sqrt{ey}-1 + k$

Pertanto:
$V(\Sigma ) = \int$
S(y)dy
$$ ln2 0 = \int \sqrt{3 $$
$4 (ey-2\sqrt{ey}-1)dy=$
$$ ln2 0 = \sqrt{3 $$
$4 [ey-4\sqrt{ey}-1 + 4arctg\sqrt{ey}-1]0$
$ln2 = \sqrt{3}$
$4 [2 -4 + \pi -(1)] =$
$$ = \sqrt{3 $$
$4[\pi -3]⁡u^{3}\cong 0. 061⁡u^{3}$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

ORDINAMENTO 2013 - SESSIONE STRAORDINARIA - QUESITI

QUESITO $1$

Un ufficiale della guardia di finanza, in servizio lungo un tratto rettilineo di costa, avvista
una motobarca di contrabbandieri che dirige in linea retta, perpendicolarmente alla costa,
verso un vecchio faro abbandonato. L’angolo tra la direzione della costa e il raggio visivo
dell’ufficiale che guarda la motobarca è di $34,6^\circ$ ; il natante si trova a $6$ miglia marine dal
faro e si muove con una velocità di $18$ nodi (miglia marine all’ora). L’ufficiale ordina di
salire immediatamente in macchina, in modo da raggiungere il faro, percorrendo una
strada parallela alla spiaggia, $10$ minuti prima che vi approdino i contrabbandieri, per
coglierli con le mani nel sacco. A che velocità media, in $km/h,$ deve muoversi l’automezzo
della guardia di finanza per arrivare nei tempi previsti? (Un miglio marino $= 1853,182 m).$

$v=$ velocità $motobarca= 18 nodi= 18 miglia/h$

La motobarca deve percorrere $6$ miglia, quindi, per raggiungere il faro impiega un tempo $t$
dato da:

$v= BC$
$t \implies t= BC$
$v= 6$ miglia
$18$ miglia
$$ h = 1 $$
$3 h= 20$ minuti

La macchina della guardia di finanza deve arrivare al faro $10$ minuti prima dei
contrabbandieri, quindi deve impiegare $10$ minuti per compiere il tratto $AC.$

Risulta:

$AC= BC$
$tg\alpha = 6$ miglia
$tg 34.6^\circ = 6$ miglia
$$ 0.69 $$
$= 8.696$ miglia

velocità media $automezzo= 8.696$ miglia
$6 h$
$= 52.174$ miglia
$= (52.174) ∙(1853.182) m$
$= 96687.757 m$
$\cong 96.688$ km∕h

QUESITO $2$

Si calcoli il limite della funzione $(1 + x^{2})$
$sen2x$ , quando $x$ tende a $0.$

Il limite si presenta nella forma indeterminata $1\infty$ .
$limx\to 0(1 + x^{2})$
$sen2x= limx\to 0 [(1 + x^{2})$
$x^{2}]$
$$ x^{2 $$
$sen2x=$ e, poiché, se $x$ tende a $0,$

$(1 + x^{2})$
$x^{2}$ tende a e e
$$ x^{2 $$
$sen2x$ tende a $1;$ si ricordino infatti i seguenti limiti notevoli:

$limx\to 0(1 +$ f(x))
f(x) = e, $limx\to 0$
$$ x^{2 $$
$sen2x= 1$ .

QUESITO $3$

Nel triangolo ABC l’angolo in $B$ misura
$\pi$
$6$ e quello in $C$ misura $x$ . Si determini l’angolo $x$
in modo che, detta $H$ la proiezione ortogonale di A sulla retta $BC,$ la quantità:

$BC+ HC$
$$ AC $$

risulti massima.

Posto $AB= c$ risulta: $AH=$
$2 , BH=$
$2 ∙\sqrt{3}$ ,
$$ AC $$
$sen(\pi$
$$ 6) = c $$
sen(x) $\implies AC=$
$2sen(x)$

$HC=$ AC∙cos(x) =
$2sen(x)$ ∙cos(x) = c∙cos(x)
$2$ sen(x) , $BC= BH+ HC= c$
$2 ∙\sqrt{3} +$ c∙cos(x)
$2$ sen(x)

$BC+ HC$
$$ AC = c $$
$2 ∙\sqrt{3} +$ c∙cos(x)
$2$ sen(x) + c∙cos(x)
$2$ sen(x)
$2sen(x)$
$$ = \sqrt{3 $$
$2 +$ cos(x)
sen(x)
$2sen(x)$
$= \sqrt{3}$ sen(x) $+ 2$ cos(x) $= y$

Si tratta quindi di trovare il massimo della funzione:

$y= \sqrt{3}$ sen(x) $+ 2$ cos(x)
$0 \le x\le$
$6 \pi$

Ricordiamo che l’espressione $y=$ asen(x) + bcos(x) può essere scritta nella forma

$y= \sqrt{a}^{2} + b^{2} ∙sen(x+ \alpha$ ), dove $tg(\alpha ) =$
$$ b a $$

$y= \sqrt{3}$ sen(x) $+ 2$ cos(x) $= \sqrt{7} sen(x+ \alpha$ ), con $tg(\alpha ) =$
$\sqrt{3} , \alpha =$ arct(
$\sqrt{3}) \cong 0.857$

Il massimo della funzione si ha quando $sen(x+ \alpha ) = 1, x+ \alpha =$
$\pi$

$x= \pi$
$2-arct( 2$
$$ \sqrt{3 $$
) $\cong 0. 714$ rad

Il massimo ella funzione è $y(0. 714) = \sqrt{7} ∙1\cong 2. 646$

QUESITO $4$

Si scriva l’equazione della tangente al diagramma della funzione:

f(x) $= logx2$
nel punto $P$ di ascissa $x = 2$ .

Notiamo che:

f(x) $= logx2 =$
$$ ln2 $$
$ln x$ , quindi f'(x) $= ln2 (-$
$$ 1 x $$
$ln2 x) = -$
$ln 2$
$xln2 x , f'(2) = m= -$
$2 ln2$

Quindi la tangente ha equazione:

$y-f(2) = f'(2)(x-2) , y-1 = -$
$2 ln 2 (x-2) , y= -$
$2ln2 x+ 1+ 1$
$$ ln2 $$

QUESITO $5$

La superficie piana $S,$ delimitata dalla curva $\gamma$ di equazione $y= ln x$ e dall’asse $x$
nell’intervallo $1 \le x\le$ e , è la base di un solido $\Sigma$ , le cui sezioni, ottenute con piani
perpendicolari all’asse $x$ , sono tutte rettangoli aventi l’altezza quadrupla della base. Si
calcoli il volume di $\Sigma$ .

Il volume di $\Sigma$ si calcola mediante il seguente integrale:

$V(\Sigma ) = \int$ A(x)dx
$$ e 1 $$
, essendo A(x) l’area del rettangolo con dimensioni $ln x$ e $4lnx,$ quindi:

A(x) $= 4 ln2 x$

$\int ln2 x dx= \int$ (x)' $ln2 x dx= xln2 x-\int x∙(2(lnx) ∙1$
$x) dx=$

$= xln2 x-2 \int$ lnx $dx= xln2 x-2 \int$ (x)'lnx $dx= xln2 x-2$ [x $lnx-\int x∙1$
xdx] =

$= xln2 x-2x lnx+ 2x+ K$ pertanto:

$V(\Sigma ) = \int$ A(x)dx
$$ e 1 $$
$= \int 4 ln2 x dx= 4[xln2 x-2x lnx+ 2x]1$
$$ e e 1 $$
$= 4[e-2e+ 2e-(2)] =$

$= 4(e-2) u^{3} \cong 2. 873 u^{3}= V(\Sigma$ )

QUESITO $6$

Si determinino le equazioni degli asintoti della curva:

f(x) =
$$ ex $$
$ex-1$ .

La funzione è definita (e continua) quando $ex-1 \ne 0, x\ne 0.$ Il suo dominio è quindi:

$-\infty < x< 0$ ∨ $0 < x< +\infty$

$limx\to -\infty$
$$ ex $$
$ex-1 = 0$ : quindi $y= 0$ è asintoto orizzontale per $x\to -\infty$

$limx\to +\infty$
$$ ex $$
$ex-1 = 1$ : quindi $y= 1$ è asintoto orizzontale per $x\to +\infty$

$limx\to 0\pm$
$$ ex $$
$ex-1 = \pm \infty$ : quindi $x= 0$ è asintoto verticale

Il grafico della funzione è il seguente:

QUESITO $7$

Si determini il campo di esistenza della funzione:

$y= arccos(e2senx-1),$ con $0 \le x\le 2\pi$ .

Deve essere:

$-1 \le e2senx-1 \le 1 \implies e2senx-1 \le 1 \implies 2senx-1 \le 0 \implies senx\le$
$2$ da cui:

$0 \le x\le \pi$
$6$ ∨ $5$
$6 \pi \le x\le 2\pi$

Il grafico della funzione data è:

QUESITO $8$

Un cubo di alluminio (densità $\rho = 2,7 g/cm3$ ), avente lo spigolo $l = 10 cm,$ presenta
all’interno una cavità a forma di cilindro equilatero, avente il raggio di lunghezza
$rc = 2,5 cm.$ Si calcoli la massa $m$ del cubo.

Ricordando che $\rho =$
$V$ , dopo aver trovato il volume del cubo possiamo trovare la sua
massa (massa del cubo senza cavità).

$V= l^{3} =$ 1000 $cm3,$ massa cubo $pieno= m= \rho V= (2,7 g/cm3)(1000 cm3) =$ 2700 $g$

Il cilindro equilatero di raggio $rc$ ha volume:

V(cilindro) $= \pi rc$
$2 h= \pi rc$
$2 (2rc) = 2\pi rc$
$3 = 2\pi (2,5 cm)3 = 31,25 \pi cm3 \cong 98,175 cm3$

La massa di tale cilindro considerato di alluminio è:

$m= \rho V= (2,7 g$
$cm3) (98,175 cm3) \cong 265,072 g$

La massa del cubo cavo è quindi:

massa cubo $cavo=$ massa cubo $pieno-massa cilindro=$ 2700 $g-265,072 g\cong$

$\cong$ 2435 $g$

QUESITO $9$

Si calcoli il valore medio della funzione:

$y=$
$cos2 x$ , nell’intervallo $0 \le x\le$
$\pi$

Il valor medio della funzione nell’intervallo dato è:

$\int$ f(x)dx
$$ b a $$
$b-a$
$\pi ∙\int$
$cos2$ xdx
$\pi$
$$ 3 0 $$

Cerchiamo una primitiva di
$cos2 x$ integrando per parti:

$$ \int x $$
$cos2 xdx= \int x$ ∙
$cos2 xdx= \int x ∙(tgx)'dx= x tgx-\int$ tgx $dx= x tgx-\int$ sen $x$
cos $xdx=$

$= x tgx+ ln |$ cos $x| + k$

Quindi:

$\int$ f(x)dx
$$ b a $$
$b-a$
$\pi ∙\int$
$cos2$ xdx
$\pi$
$$ 3 0 = 3 $$
$\pi$ [x $tgx+ ln |$ cos $x|]0$
$\pi$
$$ 3 = 3 $$
$\pi [\pi$
$3 ∙\sqrt{3} + ln(1$
$2) -(0)] =$

$= \sqrt{3} -3 ln2$
$\pi$
$\cong 1.07$

QUESITO $10$

Un delfino si trova nel punto A del bordo ovest di una piscina circolare. Nuota in linea
retta per $12 m,$ e tocca con il naso il bordo della piscina nel punto $B.$ Si gira e nuota in
una direzione diversa in linea retta per $5 m,$ e arriva nel punto $C$ situato sul bordo della
piscina e diametralmente opposto al punto A dal quale era partito. Se la profondità
dell’acqua è ovunque di $2,50 m,$ quanti litri d’acqua sono contenuti nella piscina?

La piscina ha la forma di un cilindro con area di base data dal cerchio di diametro $AC$ e
altezza $h=2,5 m.$

$AC= \sqrt{AB2} + BC2 = \sqrt{144} + 25 m= 13 m,$ quindi il raggio della circonferenza è $6.5 m$

Il volume della piscina è dato da:

V(piscina) $= \pi R2h= \pi (6.5)^{2}(2.50) m^{3} = 331.831 m^{3} = 331831$ litri

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

*Fonte:* [📄 PDF p.104](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
