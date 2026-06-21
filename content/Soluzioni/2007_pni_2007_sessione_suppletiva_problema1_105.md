---
tipo: soluzione
prova_stem: 2007_pni_2007_sessione_suppletiva_problema1_105
pdf: Prova_Maturita_2007.pdf
source: text
title: Soluzioni — 2007_pni_2007_sessione_suppletiva_problema1_105
---
# Soluzioni — 2007_pni_2007_sessione_suppletiva_problema1_105

## Problema 1

PNI 2007 SESSIONE SUPPLETIVA - PROBLEMA $1$

Si consideri la funzione integrale:

f(x) $= \int (e3t+ 2e2t-3et)dt$
$$ x 0 $$

Si studi la funzione e si tracci il suo grafico $C,$ su un piano riferito $ad$ un sistema di assi
cartesiani (Oxy).

Calcoliamo l’integrale che definisce la funzione.

f(x) $= \int (e3t+ 2e2t-3et)dt$
$$ x 0 = [1 $$
$3 e3t+ e2t-3et]$
$$ 0 x = 1 $$
$3 e3x+ e2x-3ex-(1$
$3 + 1 -3)$

f(x) $= 1$
$3 e3x+ e2x-3ex+ 5$
$$ 3 = 1 $$
$3 (ex+ 5)(ex-1)^{2}$

La seconda espressione della funzione si ottiene scomponendo il polinomio
$3 x^{3} + x^{2} -3x+ 5$
$$ 3 = 1 $$
$3 (x^{3} + 3x^{2} -9x+ 5)$
$x^{3} + 3x^{2} -9x+ 5$ si abbassa di grado mediante la regola di Ruffini notando che si
annulla per $x=1.$

Dominio: $-\infty \le x\le +\infty$

Simmetrie notevoli: $f(-x)$ è diversa sia da f(x) sia da $-f(x)$ quindi la funzione non èpari né
dispari.

Intersezioni con gli assi cartesiani:
$x=0, y=0$
$y=0, ex-1 = 0,$ da cui $x= 0$

Segno della funzione: f(x) $\ge 0$ in tutto il dominio
Limiti:
$$ lim $$
$x\to -\infty (1$
$3 e3x+ e2x-3ex+ 5$
$$ 3) = 5 $$
$3 : y= 5$
$3$ asintoto orizzontale per $x\to -\infty$

$$ lim $$
$x\to +\infty (1$
$3 e3x+ e2x-3ex+ 5$
$3) = +\infty$

Non c’è asintoto obliquo, poiché la funzione non è un infinito del primo ordine.

Derivata prima:

Vista la definizione della funzione come funzione integrale, risulta:

f'(x) $= e3x+ 2e2x-3ex= ex(e2x+ 2ex-3) = ex(ex+ 3)(ex-1)$

f'(x) $\ge 0$ se $ex-1 \ge 0 \implies x\ge 0$

Quindi la funzione è crescente se $x>1$ e decrescente se $x<1: x=1$ è punto di minimo
(relativo e assoluto) , con $f(1) = 0$

Derivata seconda:

f''(x) $= 3e3x+ 4e2x-3ex= ex(3e2x+ 4ex-3)$

f''(x) $\ge 0$ se $3e2x+ 4ex-3 \ge 0$

Risulta $3e2x+ 4ex-3 = 0$ se $ex=$
$-2\pm \sqrt{13}$
quindi:

$3e2x+ 4ex-3 \ge 0$ se $ex\le$
$-2-\sqrt{13}$
(mai) oppure $ex\ge$
$-2+\sqrt{13}$
$\cong 0.54$
Quindi f''(x) $\ge 0$ se $x\ge ln($
$-2+\sqrt{13}$
) $\cong -0.63$

Quindi il grafico ha la concavità verso l’alto se $x> ln($
$-2+\sqrt{13}$
) e verso il basso se
$x< ln($
$-2+\sqrt{13}$
) ; ha un flesso se $x= ln($
$-2+\sqrt{13}$
) , di ordinata $y\cong 0.4$

Il grafico della funzione è pertanto il seguente:

Si scriva l’equazione della normale alla curva $C$ nel punto di ascissa $log2.$

Se $x= ln2, y= f(ln2) =$
$3 , f'(ln2) = 10$
La normale a $C$ nel punto di coordinate $(ln2;$
$3)$ ha coefficiente angolare -
$10$ , la sua
equazione è quindi:

$y-7$
$3 = -1$
$10 (x-ln2)$ da cui $y= -1$
$10 x+ 7$
$3 + ln2$
$$ 10 $$

Si calcoli l’area della superficie piana, delimitata dalla curva $C,$ dall’asse delle ascisse e
dalla retta di equazione $x= log3.$

L’area richiesta è data da:

$Area= \int$
$f(x)dx= \int$
$3 e3x+ e2x-3ex+ 5$
$3) dx=$
$$ ln3 0 ln3 0 [1 $$
$9 e3x+ 1$
$2 e2x-3ex+ 5$
$3$ x]
$$ 0 ln3 = $$

$$ = 3 + 9 $$
$2 -9 + 5$
$3 ln3 -(1$
$$ 9 + 1 $$
$2 -3) = (8$
$$ 9 + 5 $$
$3 ln3) u^{2} \cong 2.72 u^{2}$

Tenuto conto che: $log2 = \int$
$$ 1 xdx 2 1 $$

si calcoli un valore approssimato di $log2$ , utilizzando uno dei metodi di integrazione
numerica studiati.

Posto f(x) =
$x$ , consideriamo l’intervallo $[1; 2]$ e dividiamolo in $n$ parti; poniamo
$h=$
$2-1$
$n=$
$n.$

Utilizzando, per esempio, la formula dei trapezi, l’integrale dato può essere approssimato
mediante la formula:

$\int f(x)dx\cong b-a$
$[f(x^{0}) +$ f(xn)
$+ f(x^{1}) + f(x^{2}) + ⋯+ f(xn-1)]$
$$ b a $$

Nel nostro caso, ponendo per esempio $n=5,$ abbiamo $h=$
$$ 1 5 = 0.2 $$

$x^{0} = 1, x^{1} = 1.2, x^{2} = 1.4, x^{3} = 1.6, x^{4} = 1.8, x^{5} = 2$

Quindi si ha la seguente approssimazione:

$ln2 = \int 1$
$x dx$
$$ 2 1 $$
$\cong 0.2 ∙[f(1) + f(2)$
$+ f(1.2) + f(1.4) + f(1.6) + f(1.8)] \cong 0.696$

(il valore esatto di $ln2$ è $0.693...)$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri
