---
title: 2015 Europa — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2015_europa_2015_problema2_89_1
of_item: prob_2015_europa_2015_problema2_89_1
prova_id: prova_2015_europa_2015_problema2_89
anno: '2015'
pdf: Prova_Maturita_2015.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2015
---

**Problema:** [[Problemi/prob_2015_europa_2015_problema2_89_1|2015 Europa — Problema 2 — Problema 1]] · **Prova:** [[Prove/2015_europa_2015_problema2_89|2015 Europa — Problema 2]]

Europa 2015 - Problema $2$

PROBLEMA $2$

Sia data la famiglia di funzioni f(x) $= ln($
$a-x$
$x^{2}+4) + bx$ .

Determina per quale valore di a e $b$ il grafico della funzione passa per l'origine e ha un
massimo nel punto di ascissa $2.$

f(x) $= ln( a-x$
$x^{2} + 4) + bx$

Imponiamo il passaggio per l’origine:

$0 =$ ln(a
$4)$ , a
$4 = 1 , a= 4$

Con tale valore di a la funzione diventa:

f(x) $= ln( 4 -x$
$x^{2} + 4) + bx,$
continua e derivabile per $4 -x> 0$ cioè $x< 4$ .

Calcoliamo la derivata prima:

Imponiamo che la derivata si annulli per $x=2$ (dove è derivabile)

$4 + 16 -4 + b(-16 + 8 -16 + 8)$
$2 ∙8$
$= 0 , 16 -16b$
$$ 16 $$
$= 0 , b= 1$

La funzione richiesta ha quindi equazione:

f(x) $= ln( 4 -x$
$x^{2} + 4) + x$

Europa 2015 - Problema $2$

Trovata l’espressione analitica della funzione, dopo aver definito il campo di esistenza,
determina le equazioni degli eventuali asintoti.

L’espressione analitica della funzione è:

f(x) $= ln( 4 -x$
$x^{2} + 4) + x$

Il suo campo di esistenza è: $-\infty < x< 4$

Determiniamo gli eventuali asintoti.

$$ lim $$
$x\to 4-[ln( 4 -x$
$x^{2} + 4) +$ x] $= -\infty : x= 4$ asintoto verticale .

$$ lim $$
$x\to -\infty$ [ln( $4 -x$
$x^{2} + 4) +$ x] $= -\infty$ : può esserci asintoto obliquo (no orizzontale).

$$ lim $$
$x\to -\infty$
f(x)
= lim
$x\to -\infty$ [ln( $4 -x$
$x^{2} + 4) +$ x] $∙1$
$x=$ [F. I. $\infty$
$\infty$ ]

Posto

f(x) $= ln($
$4-x$
$x^{2}+4) + x$ e g(x) $= x$ calcoliamo le rispettive derivate:

f'(x) $= 1 + x^{2} -8x-4$
$(4 - x)(x^{2} + 4)$ , g'(x) $= 1$

Notiamo che le funzioni $f$ e $g$ sono continue in un intorno di $-\infty$ , sono ivi derivabili e la
derivata della $g$ non si annulla in tale intorno; inoltre il limite si presenta nella forma
indeterminata
$\infty$
$\infty$ ; possiamo quindi applicare la regola di $de$ L’Hȏpital. Calcoliamo, se
esiste, il limite del rapporto delle derivate:

$$ lim $$
$x\to -\infty$
f'(x)
g'(x) = lim
$x\to -\infty$
$1 + x^{2} -8x-4$
$(4 - x)(x^{2} + 4)$
= lim
$x\to -\infty$
$-x^{3}$
$-x^{3} = 1 =$ lim
$x\to -\infty$
f(x)
$= m$

$$ lim $$
$x\to -\infty$ [f(x) $-mx] =$ lim
$x\to -\infty$ [ln( $4 -x$
$x^{2} + 4) + x-x] = -\infty$

Quindi non esiste asintoto obliquo.

Europa 2015 - Problema $2$

Determina l'area della regione piana delimitata dalla retta tangente alla curva nell'origine,
dalla curva stessa e dalla retta passante per il suo punto di massimo e parallela all'asse
$y.$

L’equazione della tangente alla curva nell’origine è:

$y-0 = f'(0) ∙(x-0);$ risulta: $f'(0) = 1 +$
$-4$
$16 = 1 -$
$$ 1 4 = 3 $$
$4$ ; quindi: $y=$
$4 x$

f'(x) $= 1 + x^{2} -8x-4$
$(4 - x)(x^{2} + 4) = 16 -4x+ 4x^{2} -x^{3} + x^{2} -8x-4$
$(4 - x)(x^{2} + 4)$
$= -x^{3} + 5x^{2} -12x+ 12$
$(4 - x)(x^{2} + 4)$

Ricordiamo che la derivata si annulla in $x=2,$ quindi $-x^{3} + 5x^{2} -12x+ 12,$ si può
scomporre con la regola di Ruffini in:

$-x^{3} + 5x^{2} -12x+ 12 = -(x -2)(x^{2} - 3 x + 6)$

Ricordando che $x<4,$ risulta $4-x>0,$ quindi f'(x) $\ge 0$ se $-(x -2)(x^{2} - 3 x + 6) \ge 0$

Poiché il delta di $(x^{2} - 3 x + 6)$ è negativo, il trinomio è sempre positivo. Pertanto:

f'(x) $\ge 0$ se $-(x -2) \ge 0 , -x+ 2 \ge 0 , x\le 2$

La funzione è quindi crescente se $x<2$ e decrescente se $2<x<4:$ in $x=2$ abbiamo quindi
un massimo relativo, che è anche massimo assoluto; tale massimo vale:
$f(2) = ln1$
$4 + 2 = 2 -ln4 \approx 0.6$
Rappresentiamo graficamente qualitativamente la funzione $f$ insieme alla tangente
nell’origine ed alla parallela all’asse delle $y$ passante per il punto di massimo $(x=2):$

Europa 2015 - Problema $2$

L’area richiesta si ottiene attraverso il seguente integrale definito:

$Area= \int [3$
$4 x-ln( 4 -x$
$x^{2} + 4) -x] dx=$
$$ 2 0 $$
$\int [-ln( 4 -x$
$x^{2} + 4) -1$
$4$ x] $dx=$
$$ 2 0 $$

Integrando per parti si ottiene:

$I= \int ln( 4 -x$
$x^{2} + 4) dx= \int$ (x)' ∙ln( $4 -x$
$x^{2} + 4) dx=$ xln( $4 -x$
$x^{2} + 4) -\int x∙x^{2} -8x-4$
$(4 - x)(x^{2} + 4) dx=$

= xln( $4 -x$
$x^{2} + 4) -\int$
$x^{3} -8x^{2} -4x$
$16 -4x+ 4x^{2} -x^{3} dx$

Eseguendo la divisione del polinomio $x^{3} -8x^{2} -4x$ per il polinomio $16 -4x+ 4x^{2} -x^{3}$

si ottiene come quoziente q(x) $= -1$ e come resto r(x) $= -4x^{2} -8x+ 16$

Quindi:

$x^{3} -8x^{2} -4x$
$16 -4x+ 4x^{2} -x^{3} = -1 +$
$-4x^{2} -8x+ 16$
$16 -4x+ 4x^{2} -x^{3} = -1 + -4x^{2} -8x+ 16$
$(4 - x)(x^{2} + 4)$
$= -1 + 4x^{2} + 8x-16$
$(x-4)(x^{2} + 4)$

$4x^{2} + 8x-16$
$(x-4)(x^{2} + 4) =$
$x-4 + Bx+ c$
$x^{2} + 4 = A(x^{2} + 4) + (x-4)(Bx+ C)$
$(x-4)(x^{2} + 4)$
da cui:

$(A+ B)x^{2} + (C-4B)x+ 4A-4C= 4x^{2} + 8x-16$ quindi:

$A+ B= 4$
$C-4B= 8$
$4A-4C= -16$
$\implies$ ⋯ $\implies$ {
$A= 4$
$B= 0$
$C= 8$

$$ \int $$
$x^{3} -8x^{2} -4x$
$16 -4x+ 4x^{2} -x^{3} dx=$
$= \int (-1 +$
$x-4 +$
$x^{2} + 4) dx= -x+ 4 ln|x-4| + 4 \int$
$1 + (x$
$2 dx=$
$= -x+ 4 ln(4 -x) + 4arctg(x$
$2) + c$

Ed infine:

$I=$ xln( $4 -x$
$x^{2} + 4) + x-4 ln(4 -x) -4arctg(x$
$2) + c$

Quindi:

Europa 2015 - Problema $2$

$Area= \int [-ln( 4 -x$
$x^{2} + 4) -1$
$4$ x] $dx=$
$$ 2 0 $$
$-\int$ [ln( $4 -x$
$x^{2} + 4) + 1$
$4$ x] $dx=$
$$ 2 0 $$

$= -[xln( 4 -x$
$x^{2} + 4) + x-4 ln(4 -x) -4arctg(x$
$$ 2) + 1 $$
$8 x^{2}]$
$$ 0 2 = $$
$= -[2ln(1$
$4) + 2 -4ln2 -4arctg(1) + 1$
$2 -(-4ln4)] =$
$= -[-2ln4 + 5$
$2 -4ln2 -4 ∙\pi$
$4 + 4ln4] = -[-4ln2 + 5$
$2 -4ln2 -\pi + 8ln2] =$
$= -[5$
$2 -\pi$ ] $= (\pi -5$
$2) u^{2} \cong 0.64 u^{2} =$ Area

Calcola infine il volume del solido generato dalla rotazione attorno all'asse $x$ della parte di
piano delimitata dalla tangente in O, dalla bisettrice del primo quadrante e dalla retta
passante per il suo punto di massimo e parallela all'asse $y.$

Il volume del solido richiesto si ottiene
sottraendo al volume del cono di raggio $AH=2$ e
altezza $OH=2$ il volume del cono di raggio
$BH=3/2$ e altezza $OH=2.$

Quindi:

$V= 1$
$3 \pi AH2 ∙OH-1$
$3 \pi BH2 ∙OH=$
$3 \pi ∙OH∙(AH2 -BH2) =$
$3 \pi ∙2 ∙(4 -9$
$$ 4) = 7 $$
$6 \pi u^{3} \cong 3.665 u^{3} = V$

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.89](https://drive.google.com/file/d/1M3fBnPOYAk0BQg70levYud2t_jZneRJa/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
