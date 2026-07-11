---
title: 2011 PNI Suppletiva — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2011_pni_2011_sessione_suppletiva_problema1_74_1
of_item: prob_2011_pni_2011_sessione_suppletiva_problema1_74_1
prova_id: prova_2011_pni_2011_sessione_suppletiva_problema1_74
anno: '2011'
pdf: Prova_Maturita_2011.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/2011
---

**Problema:** [[Problemi/prob_2011_pni_2011_sessione_suppletiva_problema1_74_1|2011 PNI Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2011_pni_2011_sessione_suppletiva_problema1_74|2011 PNI Suppletiva — Problema 1]]

PNI 2011 SESSIONE SUPPLETIVA - PROBLEMA $1$

E’ dato un quadrato ABCD di lato $AB=$ a. Da A si conduca una semiretta, che incontra il
lato $BC$ in E ed il prolungamento del lato $DC$ in $F.$

Si calcoli il rapporto
$BE+DF$
$AB$ espresso in funzione di $x=$ BÂE , controllando che risulta:

f(x) = tgx + cotgx .

L’angolo $x$ ha le seguenti limitazioni: $0 < x<$
$\pi$

Notiamo che l’angolo CFE è uguale all’angolo BAE, perché alterni interni nelle parallele
$DC$ e $AB$ con la trasversale $AF.$

Si ha:

$BE= AB∙tgx=$ a∙tgx , $CE= BC-BE= a-a∙tgx$ ,

$CF= CE∙cotgx= (a-a∙tgx ) ∙cotgx= a∙(1 -tgx) ∙cotgx= a∙(cotgx-1)$

$DF= DC+ CF= a+ a∙(cotgx-1) =$ a∙cotgx

Quindi:

f(x) $= BE+ DF$
$$ AB $$
$= a∙tgx+$ a∙cotgx
$= tgx+$ cotgx $c. v. d.$

Si studi la funzione $f (x)$ e si tracci il suo grafico $\gamma$ nell’intervallo $0 \le x\le \pi$ .

f(x) = tgx + cotgx

Osserviamo che la funzione può essere scritta nella forma:

f(x) = tgx $+ cotgx=$
senx
$cosx+$
cosx
$senx=$
senx $cosx=$
$sen2x= 2 cosec(2x)$

Il grafico di questa funzione (di periodo $T= \pi$ ) si può facilmente ottenere dal grafico della
cosecante:

Studio diretto della funzione.

Dominio: $x\ne 0,$
$\pi$
$2 , \pi \implies 0 < x<$
$\pi$
$\pi$
$2 < x< \pi$

Simmetrie notevoli:

Visto l’intervallo di studio, non si pone il problema di stabilire se la funzione è pari o
dispari.

Intersezioni con gli assi cartesiani:

Se $x= 0$ , la funzione non esiste

Se $y= 0,$ tgx + cotgx $= 0 , tg2x+ 1 = 0$ :mai.

Segno della funzione:

$y> 0$ se tgx + cotgx $> 0 \implies tgx> -cotgx \implies 0 < x<$
$\pi$

Limiti:

$limx\to o+$ (tgx + cotgx) $= +\infty x= 0$ asintoto verticale

$$ lim $$
$x\to (\pi$
$\mp$ (tgx + cotgx) $= \pm \infty x=$
$\pi$
$2$ asintoto verticale

$limx\to \pi -$ (tgx + cotgx) $= -\infty x= \pi$ asintoto verticale

Derivata prima:

f'(x) = D(tgx + cotgx) $= 1 + tg2x+ (-1 -cotg2x) = tg2x-cotg2x\ge 0$ se

$|tgx| \ge |cotgx| \implies \pi$
$4 \le x< \pi$
$2 , \pi$
$2 < x\le 3$
$4 \pi$

La funzione è quindi crescente per
$\pi$
$4 \le x<$
$\pi$
$\pi$
$2 < x\le$
$4 \pi$ ed ha pertanto un minimo
relativo per $x=$
$\pi$
$4$ (di ordinata $2)$ ed un massimo relativo per $x=$
$4 \pi$ (di ordinata $-2)$

Derivata seconda:

f''(x) $= D(tg2x-cotg2x) = 2tgx(1 + tg2x) -2cotgx(-1 -cotg2x) =$

$= 2tgx+ 2tg3x+ 2cotgx+ 2cotg3x= 2(tgx+$ cotgx) $+ 2(tg3x+ cotg3x) =$

$= 2(tgx+$ cotgx) $+ 2(tgx+ cotgx)(tg2x-tgxcotgx+ cotg2x) \ge 0$ se:

$(tgx+ cotgx)(1 + tg2x-tgxcotgx+ cotg2x) \ge 0 , (tgx+ cotgx)(tg2x+ cotg2x) \ge 0$

$tgx+ cotgx\ge 0$ se $0 < x<$
$\pi$
$2$ : quindi il grafico della funzione volge la concavità
verso l’alto se $0 < x<$
$\pi$
$2$ e verso il basso se
$\pi$
$2 < x< \pi$ . Nessun flesso.

Il grafico della funzione è il seguente (è evidenziato in tratteggio la parte del grafico che
tiene conto delle limitazioni del problema $0 < x<$
$\pi$

Si calcoli l’area della superficie piana, delimitata dalla curva $\gamma$ e dalla retta di equazione
$y =$
$$ 4 3 \sqrt{3} . $$

Cerchiamo le intersezioni fra la curva e la retta:

$y = 4$
$$ 3 \sqrt{3 $$
$y= tgx+$ cotgx
$\implies$
$sen2x= 4$
$3 \sqrt{3} \implies sen2x=$
$$ 3 2\sqrt{3} = \sqrt{3} 2 $$

Quindi: $sen2x= \sqrt{3}$
$2 , 2x=$
$\pi$
$3$ e $2x=$
$3 \pi \implies x=$
$\pi$
$6$ e $x=$
$\pi$

$Area= \int [4$
$3 \sqrt{3} -(tgx+$ cotgx)] $dx$
$\pi$
$\pi$

$$ = \int (4 $$
$3 \sqrt{3} -senx$
$cosx-cosx$
senx) $dx=$
$\pi$
$\pi$
$$ 6 [4 $$
$3 \sqrt{3x}+$ ln(cosx) $-ln (senx)]\pi$
$\pi$

$3 \sqrt{3x}-ln(tgx)]\pi$
$\pi$
$$ 3 = [4 $$
$3 \sqrt{3} ∙\pi$
$6 - ln(\sqrt{3})] u^{2} = (2$
$9 \sqrt{3} \pi - ln(\sqrt{3})) u^{2} =$

$\cong 0.11 u^{2} =$ Area

La regione finita di piano delimitata dalla curva $\gamma$ e dall’asse $x$ nell’intervallo
$\pi$
$6 \le x\le \pi /3$
è la base di un solido $S,$ le cui sezioni, ottenute con piani perpendicolari all’asse $x,$ sono
tutte triangoli equilateri. Si calcoli il volume di $S.$

Il volume del solido $S$ si ottiene calcolando il seguente integrale: $\int$ A(x)dx
$$ b a $$
, dove A(x) è
l’area della sezione, nel nostro caso un triangolo equilatero di lato $KL=$ f(x); risulta:

A(x) $= l^{2} ∙\sqrt{3}$
$4 = f^{2}(x) ∙\sqrt{3}$
$$ 4 = ( 2 $$
$sen2x)$
$∙\sqrt{3}$
$$ 4 = 4 $$
$sen22x∙\sqrt{3}$
$$ 4 = \sqrt{3 $$
$sen22x$

$\int$ A(x) $dx= \int$
$$ \sqrt{3 $$
$sen22x dx= -\sqrt{3}$
$$ 2 \int $$
$-2$
$sen22x dx= -\sqrt{3}$
$∙cotg(2x) + k$

V(S) $= \int A(x)dx= [-\sqrt{3}$
$∙cotg(2x)]$
$\pi$
$\pi$
$\pi$
$\pi$
$-\sqrt{3}$
$(cotg(2$
$3 \pi ) -cotg(\pi$

$= -\sqrt{3}$
$(-\sqrt{3}$
$3 -\sqrt{3}$
$3 ) = 1 u^{3}$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

*Fonte:* [📄 PDF p.74](https://drive.google.com/file/d/1n7qQSR6joIJerX8l_7M5ZnD0O28Aqabx/view)


#maturita/soluzione #area/geometria #cluster/geometria
