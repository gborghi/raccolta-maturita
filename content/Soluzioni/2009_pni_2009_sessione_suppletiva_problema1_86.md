---
tipo: soluzione
prova_stem: 2009_pni_2009_sessione_suppletiva_problema1_86
pdf: Prova_Maturita_2009.pdf
source: text
title: 2009 PNI Suppletiva — Problema 1 — Svolgimento
---


PNI 2009 SESSIONE SUPPLETIVA - PROBLEMA $1$

Si consideri la funzione:

f(x) = {
$ln\sqrt{x}^{2} + 1$ per $x< 0$
$0$ per $x= 0$
arctg senx per $x> 0$

Si provi che essa è continua, ma non derivabile, nel punto $x = 0.$

Continuità:

$f(0) = 0$

$$ lim $$
$x\to 0-ln\sqrt{x}^{2} + 1 = 0$

$$ lim $$
$x\to 0+$ arctg senx $= 0$

Quindi la funzione è continua in $x=0.$

Derivabilità:

Se $x<0:$ f(x) =
$2 ln(x^{2} + 1),$ f'(x) =
$2$ ∙
$2x$
$x^{2}+1 =$
$x^{2}+1 \to 0$ se $x\to 0-$
Se $x>0:$ f(x) = arctg senx , f'(x) =
cosx
$1+sen2x\to 1$ se $x\to 0+$

Quindi la funzione NON è derivabile in $x=0$ (abbiamo un punto angoloso).

Si studi tale funzione e si tracci il suo grafico $\gamma$ , su un piano riferito $ad$ un sistema di assi
cartesiani ortogonali (Oxy). Per quel che riguarda le ascisse positive, ci si limiterà
all’intervallo $0 \le x\le 2\pi$ .

f(x) = {
$ln\sqrt{x}^{2} + 1$ per $x< 0$
$0$ per $x= 0$
arctg senx per $0 < x\le 2\pi$

Studiamo la funzione di equazione:

$y= ln\sqrt{x}^{2} + 1$ per $x< 0$

Dominio: $-\infty < x< 0$

Simmetrie notevoli:

Non si pone il problema, dato l’intervallo di studio.

Intersezioni con gli assi cartesiani:

Se $y= 0, ln\sqrt{x}^{2} + 1 = 0,$ da cui $\sqrt{x}^{2} + 1 = 1, x= 0$

Segno della funzione:

$y> 0$ se $ln\sqrt{x}^{2} + 1 > 0 \implies \sqrt{x}^{2} + 1 > 1: \forall x$

Limiti:

$$ lim $$
$x\to -\infty ln\sqrt{x}^{2} + 1 = +\infty$ ;

Non c’è asintoto obliquo, poiché la funzione non è un infinito del primo ordine.

Derivata prima:

$y' =$
$x^{2}+1 < 0$ se $x< 0:$ la funzione è sempre decrescente in $-\infty < x< 0.$

Derivata seconda:

y'' =
$1-x^{2}$
$(x^{2}+1)^{2} \ge 0$ se $1 -x^{2} \ge 0 \implies x^{2} -1 \le 0 \implies x\le -1 or x\ge 1$

Nel nostro intervallo di studio y'' $\ge 0$ se $x\le -1$ , y'' $< 0$ se $-1 < x< 0$

Il grafico della funzione di equazione $y= ln\sqrt{x}^{2} + 1$ per $x< 0$ è il seguente:

Studiamo la funzione di equazione: $y=$ arctg senx per $0 \le x\le 2\pi$

Dominio: $0 \le x\le 2\pi$

Simmetrie notevoli:

Non si pone il problema, dato l’intervallo di studio.

Intersezioni con gli assi cartesiani:

Se $x= 0, y= 0$
Se $y= 0, x= 0, \pi , 2\pi$

Segno della funzione:

$y> 0$ se arctg $senx> 0 \implies senx> 0: 0 < x< \pi$

Limiti:

La funzione è definita e continua in un intervallo chiuso e limitato, quindi calcoliamo i
valori che assume agli estremi:

$f(0) = f(2\pi ) = 0$

Derivata prima:

$y' =$
cosx
$1+sen2x> 0$ se $cosx> 0 : 0 \le x<$
$\pi$
$$ 2 , 3 $$
$2 \pi < x\le 2\pi$ : in tali intervalli la funzione è
cresce; $x=$
$\pi$
$2$ è punto di massimo relativo (e assoluto), è vale $f($
$\pi$
$2) = arctg(1) =$
$\pi$
$x=$
$2 \pi$ è punto di minimo relativo (e assoluto), è vale $f($
$2 \pi ) = arctg(-1) = -$
$\pi$

Derivata seconda:

se sen(x) $< 0, \pi < x< 2\pi$ : il grafico quindi volge la concavità verso l’alto per
$\pi < x< 2\pi$ e verso il basso per $0 < x< \pi$ ; abbiamo un flesso in $(0; \pi$ ).

Il grafico della funzione di equazione $y=$ arctg senx per $0 \le x\le 2\pi$ è il seguente:

Il grafico della funzione di equazione:

f(x) = {
$ln\sqrt{x}^{2} + 1$ per $x< 0$
$0$ per $x= 0$
arctg senx per $0 < x\le 2\pi$

è pertanto il seguente:

Si calcoli l’area della superficie piana, situata nel $II$ quadrante, delimitata dalla curva $\gamma$ ,
dall’asse $x$ e dalla retta di equazione $x = -1.$

L’area richiesta è data dal seguente integrale:

$\int ln\sqrt{x}^{2} + 1 dx=$
$-1$
$2 ∙\int ln (x^{2} + 1) dx$
$-1$

Cerchiamo, integrando per parti, una primitiva di $y= ln (x^{2} + 1).$

$\int ln(x^{2} + 1) dx= \int$ (x)' $∙ln(x^{2} + 1) dx= x∙ln(x^{2} + 1) -\int$ x∙
$2x$
$x^{2}+1 dx=$

$= x∙ln(x^{2} + 1) -2 \int$
$$ x^{2 $$
$x^{2} + 1 dx= x∙ln(x^{2} + 1) -2 \int x^{2} + 1 -1$
$x^{2} + 1$
$dx=$

$= x∙ln(x^{2} + 1) -2 \int dx+ 2 \int$
$x^{2} + 1 dx= x∙ln(x^{2} + 1) -2x+ 2arctg(x) + k$

Quindi:

$Area= 1$
$2 ∙\int ln(x^{2} + 1) dx$
$-1$
$2 [x∙ln(x^{2} + 1) -2x+ 2arctg(x)]-1$

$2 [0 -(-ln(2) + 2 + 2(-\pi$
$$ 4))] = 1 $$
$2 [ln(2) -2 + \pi$
$2] = (\pi$
$4 + ln\sqrt{2} -1) u^{2} \cong 0.1320 u^{2}$

Utilizzando uno dei metodi di integrazione numerica studiati, si calcoli un valore
approssimato dell’area della superficie piana, delimitata dall’asse delle $x$ e dall’arco di $\gamma$ i
cui estremi hanno ascisse $0$ e $\pi$ .

Posto f(x) = arctg senx , consideriamo l’intervallo $[0; \pi$ ] e dividiamolo in $n$ parti;
poniamo $h=$
$\pi -0$
$n=$
$\pi$
$n.$

Utilizzando, per esempio, la formula dei trapezi, l’integrale dato può essere approssimato
mediante la formula:

$\int f(x)dx\cong b-a$
$[f(x^{0}) +$ f(xn)
$+ f(x^{1}) + f(x^{2}) + ⋯+ f(xn-1)]$
$$ b a $$

Nel nostro caso, ponendo per esempio $n=5,$ abbiamo $h=$
$$ 1 5 $$

$x^{0} = 0, x^{1} = \pi$
$5, x^{2} = 2$
$5 \pi , x^{3} = 3$
$5 \pi , x^{4} = 4$
$5 \pi , x^{5} = \pi$

Quindi si ha la seguente approssimazione:

$Area= \int$ arctg senx $dx$
$\pi$
$\cong \pi$
$5 ∙[f(0) + f(\pi$ )
$+ f(\pi$
$5) + f(2$
$5 \pi ) + f(3$
$5 \pi ) + f(4$
$5 \pi$ )] =
$\cong 1.62 u^{2}$

(il valore esatto è $1.69)$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri
