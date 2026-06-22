---
title: Ordinamento 2013 Straordinaria — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_ordinamento_2013_sessione_straordinaria_problema1_100_1
of_item: prob_2013_ordinamento_2013_sessione_straordinaria_problema1_100_1
prova_id: prova_2013_ordinamento_2013_sessione_straordinaria_problema1_100
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_ordinamento_2013_sessione_straordinaria_problema1_100_1|Ordinamento 2013 Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2013_ordinamento_2013_sessione_straordinaria_problema1_100|Ordinamento 2013 Straordinaria — Problema 1]]

ORDINAMENTO 2013 - SESSIONE STRAORDINARIA - PROBLEMA $1$

Sia data una circonferenza di centro O e raggio $1$ e una sua corda $MN,$ condotta alla
distanza $x$ da O.

Si calcoli il rapporto f(x) fra l’area del triangolo, formato dalla corda $MN$ e dalle tangenti
alla circonferenza in $M$ ed $N,$ e quella del rettangolo di lato $MN,$ inscritto nella
circonferenza, controllando che risulta:
f(x) $= 1 -x^{2}$
$4x^{2}$

In base al primo teorema di Euclide risulta: $AO:MO=MO:HO,$ quindi:

$AO=$
$$ MO2 $$
$HO=$
$x$ (notiamo che possiamo considerare $0 < x< 1)$

Quindi: $AH=$
$x-x.$ Per il secondo teorema di Euclide si ha poi:

$MH2 = AH∙HO=$ (
$x-x) x= 1 -x^{2},$ da cui $MH= \sqrt{1} -x^{2}$

Pertanto:

A(AMN) = MN∙AH
= MH∙AH
A(rettangolo) $= MN∙2OH= 2MH∙2OH= 4MH∙OH$

f(x) =
A(AMN)
A(rettangolo) = MH∙AH
$4MH∙OH= AH$
$4OH=$
$x-x$
$4x$
$= 1-x^{2}$
$4x^{2}$

Prescindendo dalla questione geometrica, si studi la funzione f(x) e se ne tracci il grafico
$\gamma$ .

f(x) $= 1-x^{2}$
$4x^{2}$
$= -1$
$$ 4+ 1 $$
$4x^{2}$

Dominio: $x\ne 0 \implies -\infty < x< 0, 0 < x< +\infty$

Simmetrie notevoli: $f(-x) =$ f(x), quindi la funzione è pari (grafico simmetrico rispetto
all’asse $y).$

Intersezioni con gli assi cartesiani: il grafico non interseca l’asse $y$ ed interseca l’asse
$x$ nei punti di ascissa $-1$ e $+1.$

Segno della funzione:
$1-x^{2}$
$4x^{2} > 0$ se $1 -x^{2} > 0$ quindi per $-1 < x< 1$ (con $x\ne 0)$

Limiti:

$limx\to \pm \infty$ (
$1-x^{2}$
$4x^{2} ) = -$
$$ 1 4 $$
$(y= -$
$4$ asintoto orizzontale; non ci sono asintoti obliqui)

$$ lim $$
$x\to 0\pm$ (
$1-x^{2}$
$4x^{2} ) = +\infty (x= 0$ asintoto verticale)

Derivata prima:

f'(x) = -
$2x^{3} \ge 0$ se $x< 0$

La funzione quindi cresce per $x< 0$ e decresce per $x> 0;$ non ci sono massimi né
minimi.
f''(x) =
$2x^{4} > 0$ in tutto il suo dominio; il suo grafico $\gamma$ ha quindi la concavità sempre
rivolta verso l’alto e non ci sono flessi.

Il grafico $\gamma$ della funzione è il seguente:

Si scrivano le equazioni delle tangenti a $\gamma$ nei punti di intersezione con l’asse $x$ e si calcoli
l’area del triangolo $T$ che esse formano con l’asse $x$ .

I punti di intersezione di $\gamma$ con l’asse $x$ sono: $A= (-1; 0)$ e $B= (1; 0).$

Tangente in A: $y-f(-1) = f'(-1)(x+ 1) \implies y=$
$2 (x+ 1)$

Tangente in $B: y-f(1) = f'(1)(x-1) \implies y= -$
$2 (x-1)$

I vertici del triangolo $T$ sono: $A= (-1; 0), B= (1; 0)$ e $C= (0;$
$$ 1 2) $$

L’area del triangolo è: A(T) =
AB∙CO
$= 0. 5 u^{2}$

Si calcoli l’area della superficie piana $\Sigma$ , delimitata dalla curva $\gamma$ , dall’asse $x$ e dalla retta
$y =1/2$ .

La superficie $\Sigma$ è ABCDA:

La sua area si ottiene calcolando il seguente integrale:

$A(\Sigma ) = 2A(OFCE) + 2 \int$ f(x)dx
$$ 1 XC $$

Calcoliamo l’ascissa di $C:$

$y=$
$$ 1 2 $$
$y=$
$1-x^{2}$
$4x^{2}$
$\implies$
$1-x^{2}$
$4x^{2} =$
$2 \implies 1 -x^{2} = 2x^{2} \implies x^{2} =$
$3 \implies xC= \sqrt$
$$ 1 3 $$

$A(\Sigma ) = 2A(OFCE) + 2 \int f(x)dx=$
$$ 1 XC \sqrt{1 $$
$3 + 2 \int 1 -x^{2}$
$4x^{2}$
$dx=$
$$ 1 \sqrt{1} 3 \sqrt{1 $$
$3 + 2 \int (-1$
$$ 4 + 1 $$
$4x^{2}) dx=$
$$ 1 \sqrt{1} 3 $$

$$ = \sqrt{1 $$
$3 + 2 [-1$
$4 x-1$
$4x]$
$$ \sqrt{1} 3 1 = \sqrt{1} 3 + 2 [ $$

$-1$
$2 -$
$-1$
$$ 4 \sqrt{1 $$
$3 -$
$$ 1 4\sqrt{1} 3) $$

$$ = \sqrt{1 $$
$3 -1 + 1$
$$ 2 \sqrt{1} 3 + 1 2\sqrt{1} 3 = $$

$$ = \sqrt{3 $$
$3 -1 + \sqrt{3}$
$$ 6 + \sqrt{3 $$
$2 = (\sqrt{3}-1) u^{2}\cong 0. 73 u^{2}$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

*Fonte:* [📄 PDF p.100](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
