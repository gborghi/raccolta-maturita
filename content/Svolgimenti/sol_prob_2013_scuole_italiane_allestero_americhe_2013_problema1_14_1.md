---
title: 2013 Scuole estero Americhe — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_scuole_italiane_allestero_americhe_2013_problema1_14_1
of_item: prob_2013_scuole_italiane_allestero_americhe_2013_problema1_14_1
prova_id: prova_2013_scuole_italiane_allestero_americhe_2013_problema1_14
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_scuole_italiane_allestero_americhe_2013_problema1_14_1|2013 Scuole estero Americhe — Problema 1 — Problema 1]] · **Prova:** [[Prove/2013_scuole_italiane_allestero_americhe_2013_problema1_14|2013 Scuole estero Americhe — Problema 1]]

Scuole italiane all’estero (Americhe) 2013 - PROBLEMA $1$

E’ data la semicirconferenza $\Gamma$ di centro $C$ e diametro $AB=2.$ Sia $t$ la semiretta tangente a
$\Gamma$ in $B$ e giacente nello stesso semipiano di $\Gamma$ rispetto $ad AB.$

Da un punto $D$ di $t,$ distinto da $B,$ si conduca l’altra tangente a $\Gamma$ e si indichi con E il punto
di tangenza. Dal centro $C$ si conduca una semiretta parallela a $DE$ che tagli $t$ in $F.$ Si provi
che il triangolo FDC è isoscele.

Poiché $DB$ e $DE$ sono le tangenti condotte da un punto
esterno $ad$ una circonferenza, per una nota proprietà
$CD$ è bisettrice dell’angolo BDE, quindi $\alpha = \beta$ .
Essendo poi $DE$ e $CF$ parallele, risulta $\beta = \gamma$ , perché
alterni interni formati con la trasversale $CD.$
Ne consegue che $\alpha = \gamma$ : il triangolo CDF è allora
isoscele sulla base $CD.$

Posto $x= DB$ e $y= DF$ si provi che $y=$
$x^{2}+1$
$2x$ . Si determini l’intervallo in cui può variare $x$
e, in corrispondenza, quello in cui varia $y$ .

$x= DB:$ notiamo che quando $x=R=1$ il punto $F$ coincide con $B;$ pertanto non può essere
$x<1$ altrimenti $F$ non apparterrebbe più alla semiretta $t.$ Risulta quindi $1\le x< +\infty$ .
$y= DF: DF$ non supera mai $DB$ ma può essere qualsiasi $y\ge 1$ (in particolare risulta $y=1$
quando $x=1,$ cioè quando $F$ coincide con $B).$
Calcoliamo ora $y$ in funzione di $x.$

Per il teorema di Pitagora risulta:

$y^{2} = (x-y)2 + 1,$ da cui: $2xy= 1 + x^{2},$ quindi:

$y=$ f(x) $= x^{2} + 1$
$2x$
$c. v. d.$

Si tracci il grafico $\Phi$ della $y=f(x),$ senza tener conto dei limiti posti dal problema
geometrico, e si indichi con $s$ il suo asintoto obliquo.

$y=$ f(x) $= x^{2} + 1$
$2x$

N.B. La funzione può essere ricondotta alla forma $x^{2}-2xy+ 1= 0,$ quindi si tratta di
una conica, in particolare di un’iperbole.

Dominio: $-\infty < x< 0, 0 < x< +\infty$ .

Eventuali simmetrie notevoli: poiché $f(-x) = -f(x)$ la funzione è dispari, quindi il suo
grafico $\Phi$ è simmetrico rispetto all’origine degli assi cartesiani.

Intersezioni con gli assi:

$x=0,$ impossibile (l’asse delle $y$ non viene intersecato)
$y=0,$ segue $x^{2} + 1 = 0$ che è impossibile (neanche l’asse $x$ viene intersecato).

Segno della funzione:

$y>0$ se $x>0, y<0$ se $x<0$ (il grafico è quindi nel primo e terzo quadrante).

Limiti:

$limx\to 0+ x^{2}+1$
$2x= +\infty$ (quindi $limx\to 0-x^{2}+1$
$2x= -\infty ): x=0$ è asintoto verticale.

$limx\to 0+ x^{2}+1$
$2x= +\infty$ (quindi $limx\to 0-x^{2}+1$
$2x= -\infty$ ): può esserci asintoto obliquo, che
effettivamente c’è, poiché si tratta di una funzione razionale fratta in cui il grado del
numeratore supera di $1$ il grado del denominatore. Poiché la funzione puà essere scritta
nella forma:

$y= x^{2} + 1$
$2x$
$2 x+ 1$
$2x$ ,
con $1$
$2x$ infinitesimo per $x\to \pm \infty$

l’asintoto obliquo ha equazione $y=$
$2x (s).$

Derivata prima:

$y' =$
$2 -$
$2x^{2} =$
$x^{2}-1$
$2x^{2} \ge 0$ se $x\le -1$ vel $x\ge 1,$ dove la funzione è crescente.

Abbiamo quindi un punto di massimo in $x= -1$ ed un punto di minimo in $x= 1$ (che
valgono rispettivamente $f(-1) = -1, f(1) = 1.$

Derivata seconda:

y'' =
$x^{3} > 0$ per $x> 0:$ quindi il grafico volge la concavità verso l’alto se $x>0$ e verso il
basso se $x<0.$

Grafico della funzione:

Si calcoli il volume del solido generato dalla rotazione attorno all’asse $y$ della regione di
piano delimitata da $\Phi$ , da $s$ e dalle rette $x=1$ e $x=2.$

Dobbiamo determinare il volume del solido generato dalla rotazione attorno all’asse $y$
della regione ABCD.
Il metodo più opportuno ci sembra quello dei gusci cilindrici $(v.$ approfondimento).
Ponendo:
f(x) =
$x^{2}+1$
$2x$ e g(x) =
$2 x$ il volume richiesto è dato da:

$V= 2\pi \int$ x(f(x) $-g(x))dx$
$$ 2 1 $$
$= 2\pi \int x(x^{2} + 1$
$2x$
$-1$
$2 x) dx= 2\pi \int x( 1$
$2x) dx=$
$$ 2 1 2 1 $$
$= 2\pi \int 1$
$2 dx= \pi \int dx=$
$$ 2 1 $$
$\pi [x]1$
$2 = \pi$
$$ 2 1 $$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

*Fonte:* [📄 PDF p.14](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/geometria #cluster/geometria
