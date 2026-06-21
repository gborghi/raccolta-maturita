---
tipo: soluzione
prova_stem: 2008_ordinamento_2008_sessione_suppletiva_problema1_64
pdf: Prova_Maturita_2008.pdf
source: text
title: Soluzioni — 2008_ordinamento_2008_sessione_suppletiva_problema1_64
---
# Soluzioni — 2008_ordinamento_2008_sessione_suppletiva_problema1_64

## Problema 1

ORDINAMENTO 2008 SESSIONE SUPPLETIVA - PROBLEMA $1$

Dato un quadrante AOB di cerchio, di centro O e raggio $2,$ si consideri sull’arco $AB$ un
punto $P.$

Si esprima in funzione di $t= tg$
$2$ (con $x=$ BÔP) l’area del quadrilatero OMPN,
essendo $M$ ed $N$ i punti medi dei raggi $OA$ e $OB.$

L’angolo $x$ ha le seguenti limitazioni: $0 \le x\le$
$\pi$

Risulta: $PC=$ OP∙sen(
$\pi$
$2 -x) = 2$ cosx , $PD= 2senx$ . Quindi:

Area(OMPN) = A(OMP) + A(ONP) = OM∙PC
+ ON∙PD
$= 1 ∙2cosx$
$+ 1 ∙2senx$
$= cosx+$ senx.

Con $t= tg$
$2$ si ha:

Area(OMPN) $= cosx+ senx= 1 -t^{2}$
$1 + t^{2} +$
$2t$
$1 + t^{2} = -t^{2} + 2t+ 1$
$t^{2} + 1$
= f(t)

Si studi la funzione f(t) così ottenuta e si tracci il suo grafico $\gamma$ , indipendentemente dai
limiti posti dal problema geometrico.

$y=$ f(t) $= -t^{2} + 2t+ 1$
$t^{2} + 1$

Dominio: $-\infty < t< +\infty$

Simmetrie notevoli:

Essendo $f(-t) =$
$-t^{2}-2t+1$
$t^{2}+1$
diverso sia da f(t) che da - f(t) la funzione non né pari né
dispari.

Intersezioni con gli assi cartesiani:

Se $t= 0 , y= 1.$
Se $y= 0, -t^{2} + 2t+ 1 = 0, t= 1 -\sqrt{2} \cong -0.4 , t= 1 + \sqrt{2} \cong 2.4$

Segno della funzione:

$y> 0$ se $-t^{2} + 2t+ 1 > 0 \implies t^{2} -2t-1 < 0 \implies 1 -\sqrt{2} < t< 1 + \sqrt{2}$

Limiti:

$$ lim $$
$t\to \pm \infty$
$-t^{2} + 2t+ 1$
$t^{2} + 1$
$= -1 : y= -1$ asintoto orizzontale

Non ci sono asintoti verticali né obliqui.

Eventuali intersezioni con l’asintoto orizzontale:

$-t^{2}+2t+1$
$t^{2}+1$
$= -1 -t^{2} + 2t+ 1 = -t^{2} -1 t= -1 : B=(-1;-1)$

Derivata prima:

f'(t) $\ge 0$ se $t^{2} + 2t-1 \le 0 \implies -\sqrt{2} -1 \le t\le \sqrt{2} -1$

Pertanto la funzione è crescente se $-\sqrt{2} -1 < t< \sqrt{2} -1$ e decrescente se

$t< -\sqrt{2} -1$ oppure $t> \sqrt{2} -1$

$t= \sqrt{2} -1$ punto di massimo relativo (e assoluto), $f(\sqrt{2} -1) \cong 1.4$
$t= -1 -\sqrt{2}$ punto di minimo relativo (e assoluto), $f(-1 -\sqrt{2}) \cong -1.4$

Derivata seconda:

f''(t) $\ge 0$ se $t^{3} + 3t^{2} -3t-1 \ge 0, t^{3} -1 + 3t^{2} -3t\ge 0 , (t -1)(t^{2} + 4 t + 1) \ge 0$

$t\ge 1 , -2 -\sqrt{3} \le t\le -2 + \sqrt{3}$ : in tali intervalli il grafico della funzione volge la
concavità verso l’alto. Abbiamo tre punti di flesso:

$t= 1 , f(1) = 1$
$t= -2 -\sqrt{3} , f(-2 -\sqrt{3}) \cong -1.37$
$t= -2 + \sqrt{3} , f(-2 + \sqrt{3}) \cong +0.37$

Il grafico della funzione è il seguente:

Si dica per quale valore di $x$ l’area del quadrilatero assume valore massimo.

Il quadrilatero assume il valore massimo se $t= \sqrt{2} -1;$ quindi: $tg$
$2 = \sqrt{2} -1$ da cui:

$2 = 22.5^\circ =$
$\pi$
$8 \implies x=$
$\pi$

Si calcoli l’area della parte finita di piano compresa tra la curva $\gamma$ e l'asse $x.$

L’area richiesta si ottiene calcolando il seguente integrale.

$Area= \int$
f(t)dt
$$ 1+\sqrt{2 $$
$1-\sqrt{2}$
$$ = \int $$
$-t^{2} + 2t+ 1$
$t^{2} + 1$
$$ dt 1+\sqrt{2 $$
$1-\sqrt{2}$
$$ = \int $$
$-t^{2} -1 + 2t+ 2$
$t^{2} + 1$
$$ dt 1+\sqrt{2 $$
$1-\sqrt{2}$

$$ = \int $$
$(-t^{2} -1$
$t^{2} + 1 +$
$2t$
$t^{2} + 1 +$
$t^{2} + 1) dt$
$$ 1+\sqrt{2 $$
$1-\sqrt{2}$
$= [-t+ ln(1 + t^{2}) + 2arctg(t)]1-\sqrt{2}$
$$ 1+\sqrt{2} = $$

$= -1 -\sqrt{2} + ln(4 + 2\sqrt{2}) + 2arctg(1 + \sqrt{2}) -[-1 + \sqrt{2} + ln(4 -2\sqrt{2}) + 2arctg(1 -\sqrt{2})] =$

$= -2\sqrt{2} + ln(4 + 2\sqrt{2}) - ln(4 -2\sqrt{2}) + 2arctg(1 + \sqrt{2}) -2arctg(1 -\sqrt{2}) =$

$= -2\sqrt{2} + ln(4 + 2\sqrt{2}) - ln(4 -2\sqrt{2}) + 2 (3$
$8 \pi ) -2 (-\pi$

$= -2\sqrt{2} + ln(4 + 2\sqrt{2}) - ln(4 -2\sqrt{2}) + \pi = -2\sqrt{2} + ln4 + 2\sqrt{2}$
$4 -2\sqrt{2}$
$+ \pi =$

$= -2\sqrt{2} + ln(2\sqrt{2} + 3) + \pi \cong 2.08 u^{2} =$ Area

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri
