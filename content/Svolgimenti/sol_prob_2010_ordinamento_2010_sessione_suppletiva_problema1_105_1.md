---
title: 2010 Ordinamento Suppletiva — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2010_ordinamento_2010_sessione_suppletiva_problema1_105_1
of_item: prob_2010_ordinamento_2010_sessione_suppletiva_problema1_105_1
prova_id: prova_2010_ordinamento_2010_sessione_suppletiva_problema1_105
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Problema:** [[Problemi/prob_2010_ordinamento_2010_sessione_suppletiva_problema1_105_1|2010 Ordinamento Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2010_ordinamento_2010_sessione_suppletiva_problema1_105|2010 Ordinamento Suppletiva — Problema 1]]

ORDINAMENTO 2010 SESSIONE SUPPLETIVA - PROBLEMA $1$

Data una circonferenza di centro O e raggio unitario, si prendano su di essa tre punti A,
$B, C,$ tali che $AB = BC.$

Si calcoli, in funzione dell’angolo AÔB $= x$ , la quantità:
$AB2 + BC2 + CA2$
Controllando che risulta:
f(x) $= -4 cos2 x-4 cosx+ 8$

L’angolo $x$ ha le seguenti limitazioni: $0 \le x\le \pi$ .

Notiamo che l’angolo ADB, angolo alla circonferenza corrispondente all’angolo al centro
AOB, misura
$2$ , quindi l’angolo ADC misura. Si ha pertanto:

$AB= BC=$ BD∙senx
$2 = 2$ ∙senx
$2 , CA= 2$ senx (teorema della corda).

Quindi:

$AB2 + BC2 + CA2 = 4sen2 (x$
$2) + 4sen2 (x$
$2) + 4 sen2x= 8sen2 (x$
$2) + 4(1 -cos2 x) =$
$= 4(1 -cos x) + 4 -4 cos2 x= -4 cos2 x-4$ cos $x+ 8 =$ f(x)

Si studi la funzione $f (x)$ e si tracci il suo grafico $\gamma$ nell’intervallo $0 \le x\le 2\pi$ .

$y=$ f(x) $= -4 cos2 x-4$ cos $x+ 8$

Dominio: $0 \le x\le 2\pi$

Simmetrie notevoli:

Visto l’intervallo di studio, non si pone il problema di stabilire se la funzione è pari o

dispari.

Intersezioni con gli assi cartesiani:

Se $x= 0 , y= 0.$

Se $y= 0, -4 cos2 x-4$ cos $x+ 8 = 0, cos2 x+$ cos $x-2 = 0$ da cui:

cos $x= 1 : x= 0, x= 2\pi$
cos $x= -2$ : mai

Segno della funzione:

$y> 0$ se $-4 cos2 x-4$ cos $x+ 8 > 0 \implies ccos2 x+$ cos $x-2 < 0, -2 < cosx< 0$

$\pi$
$2 < x< 3$
$2 \pi$

Limiti:

La funzione è continua in un intervallo chiuso e limitato, quindi non serve lo studio dei
limiti. Troviamo i valori agli estremi:

$f(0) = f(2\pi ) = 0$

Derivata prima:

f'(x) $= D(-4 cos2 x-4$ cos $x+ 8) = 8$ cosx $senx+ 4senx= 4senx(2cosx+ 1) \ge 0$ se

$senx\ge 0 0 \le x\le \pi$
$2cosx+ 1 \ge 0 , cosx\ge -1$
$$ 2 , 4 $$
$3 \pi \le x\le 2\pi$ ∨ $0 \le x\le 2$
$3 \pi$

Massimo relativo (e assoluto) per $x=$
$3 \pi$ e $x=$
$3 \pi$ che vale $f($
$3 \pi ) = f($
$3 \pi ) = 9$
Minimo relativo (e assoluto) per $x= \pi$ che vale $f(\pi ) = 8$

Derivata seconda:

f''(x) $= D(4senx(2cosx+ 1)) = 4 ∙D(senx(2cosx+ 1)) \ge 0$

$cosx(2cosx+ 1) + senx(-2$ senx) $= 2 cos2 x+ cosx-2 (1 -cos2 x) =$

$= 4 cos2 x+$ cos $x-2 \ge 0; 4 cos2 x+$ cos $x-2 = 0$ se $cosx=$
$-1\pm \sqrt{33}$
, quindi:

$4 cos2 x+$ cos $x-2 \ge 0$ se: $cosx\le$
$-1-\sqrt{33}$
, $cosx\ge$
$-1+\sqrt{33}$

Abbiamo dei flessi per $x\cong 0.94 , x\cong 2.57 , x\cong 3.71 , x\cong 5.25$

Il grafico della funzione è il seguente:

Si verifichi che la curva $\gamma$ è simmetrica rispetto alla retta $x = \pi$ .

La simmetria rispetto alla retta $x = \pi$ ha equazioni:

${X= 2\pi -x$
$Y= y$
$\implies {x= 2\pi -X$
$y= Y$

La funzione

$y=$ f(x) $= 2 cosx+ 2 sen2x$

si trasforma in:

$Y= 2 cos(2\pi -X) + 2sen2(2\pi -x) = 2cosX+ 2sen2X$

quindi la curva è simmetrica rispetto alla retta $x = \pi$ .

Si calcoli il valore medio della funzione f(x) nell’intervallo $0 \le x\le 2\pi$ .

Il valore medio della funzione è dato da:

$b-a∙\int$ f(x)dx
$$ b a = 1 $$
$2\pi ∙\int$
$(-4 cos2 x-4 cosx+ 8)$
$2\pi$
$$ 0 dx $$

Cerchiamo una primitiva di $cos2 x:$

$\int cos2 x dx= \int 1 +$ cos $(2x)$
$dx= 1$
$2 x+ 1$
$4 sen(2x) + k$

Quindi il valor medio risulta:

$2\pi ∙\int$
$(-4 cos2 x-4 cosx+ 8)$
$2\pi$
$dx= 1$
$2\pi ∙[-4 (1$
$2x+ 1$
$4 sen(2x)) -4 senx+ 8x]$
$2\pi$

$2\pi ∙[6x-sen(2x) -4sen(x)]0$
$2\pi = 1$
$2\pi ∙[12\pi -0 -0 -(0)] = 6 =$ valor medio

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

*Fonte:* [📄 PDF p.105](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
