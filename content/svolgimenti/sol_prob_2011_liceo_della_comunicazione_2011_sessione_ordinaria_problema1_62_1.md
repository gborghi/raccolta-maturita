---
title: 2011 Liceo Comunicazione Ordinaria — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2011_liceo_della_comunicazione_2011_sessione_ordinaria_problema1_62_1
of_item: prob_2011_liceo_della_comunicazione_2011_sessione_ordinaria_problema1_62_1
prova_id: prova_2011_liceo_della_comunicazione_2011_sessione_ordinaria_problema1_62
anno: '2011'
pdf: Prova_Maturita_2011.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Problema:** [[Problemi/prob_2011_liceo_della_comunicazione_2011_sessione_ordinaria_problema1_62_1|2011 Liceo Comunicazione Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2011_liceo_della_comunicazione_2011_sessione_ordinaria_problema1_62|2011 Liceo Comunicazione Ordinaria — Problema 1]]

Liceo della comunicazione 2011
Sessione $Ordinaria-$ Problema $1$

Liceo della comunicazione 2011 - PROBLEMA $1$

Nel sistema di riferimento Oxy, sia Г il grafico della funzione definita su $R$ da

f(x) $= (1 -x^{2})e-x$

Si verifichi che Г taglia l’asse delle ordinate nel punto A e l’asse delle ascisse nei punti $B$
e $C.$ Si calcolino le coordinate di A, $B$ e $C.$

Le intersezioni con l’asse delle ordinate si ottengono risolvendo il seguente sistema:

$x= 0$
$y= (1 -x^{2})e-x ; y= 1 , 1 -x^{2} = 0$ ,
$A= (0; 1)$

Le intersezioni con l’asse delle ascisse si ottengono risolvendo il seguente sistema:

$y= 0$
$y= (1 -x^{2})e-x ; (1 -x^{2})e-x= 0 , 1 -x^{2} = 0$ ,
$x= \pm 1 : B= (-1; 0), C= (1; 0)$

Si studi la funzione $f$ e si disegni Г.

f(x) $= (1 -x^{2})e-x$

La funzione è definita e continua su tutto $R,$ non pari né dispari e interseca gli assi nei
punti A, $B$ e $C$ trovati nel punto precedente; è positiva se $1 -x^{2} \ge 0 , -1 \le x\le 1$ .

Limiti:

$limx\to -\infty (1 -x^{2})e-x= -\infty$ (non esiste asintoto obliquo, poiché la funzione non è un

infinito del primo ordine).

$limx\to +\infty (1 -x^{2})e-x= limx\to +\infty (-x^{2})e-x= limx\to +\infty$
$-x^{2}$
$ex= 0-$ (l’infinito del denominatore
domina rispetto all’infinito del numeratore): $y=0$ è asintoto orizzontale.

Liceo della comunicazione 2011
Sessione $Ordinaria-$ Problema $1$

Derivata prima:

f'(x) $= (x^{2} -2x-1)e-x\ge 0$ se $x^{2} -2x-1 \ge 0 , x\le 1 -\sqrt{2} or x\ge \sqrt{2} + 1$

Quindi la funzione è crescente per $x< 1 -\sqrt{2} or x> \sqrt{2} + 1$ e decrescente per
$1 -\sqrt{2} < x< 1 + \sqrt{2} ; x= 1 -\sqrt{2}$ è punto di massimo relativo (ed assoluto) con valore
$f(1 -\sqrt{2}) = e\sqrt{2}-1(2 \sqrt{2} - 2) \cong 1.25 ; x= 1 + \sqrt{2}$ è punto di minimo relativo (ma non
assoluto) con valore $f(1 + \sqrt{2}) = e-\sqrt{2}-1(-2 \sqrt{2} - 2) \cong -0.43$ .

Derivata seconda:

f''(x) $= (-x^{2} + 4x-1)e-x\ge 0$ se $-x^{2} + 4x-1 \ge 0$ ,
$2 -\sqrt{3} \le x\le 2 + \sqrt{3}$ ; il grafico quindi volge la concavità verso l’alto se
$2 -\sqrt{3} < x< 2 + \sqrt{3}$ e verso il basso nella parte rimanente del dominio. Pertanto
abbiamo due flessi, uno per $x= 2 -\sqrt{3}$ con ordinata $f(2 -\sqrt{3}) = e\sqrt{3}-2(4\sqrt{3} -6) \cong 0.71$
ed uno per $x= 2 + \sqrt{3}$ con ordinata $f(2 + \sqrt{3}) = e-\sqrt{3}-2(-4\sqrt{3} -6) \cong -0.31.$

Il grafico della funzione è il seguente:

Si consideri la funzione $g$ definita su $R$ da g(x) $= (1 + 2x+ x^{2})e-x.$ Si mostri che la
funzione $g$ è una primitiva della funzione $f$ su $R.$

Per verificare che $g$ è una primitiva di $f$ è sufficiente verificare che g'(x) = f(x).

g'(x) $= (2 + 2x)e-x+ (1 + 2x+ x^{2})(-e-x) = e-x(2 + 2x-1 -2x-x^{2}) =$

$= (1 -x^{2})e-x=$ f(x)

Nota: si potrebbe calcolare l’integrale indefinito di f(x), per parti, e constatare che g(x) è
una primitiva di f(x).

Liceo della comunicazione 2011
Sessione $Ordinaria-$ Problema $1$

Si calcoli l’area della parte di piano compresa tra Г e l’asse $x$ sull’intervallo $[-1; 2].$ Si
calcoli altresì
$$ lim $$
$\alpha \to +\infty \int (1 -x^{2})e-x$
$\alpha$
$$ 1 dx $$

e si interpreti geometricamente il risultato.

La regione di cui si chiede l’area è indicata nella seguente figura:

L’area richiesta si ottiene mediante il seguente calcolo integrale:

$Area= \int (1 -x^{2})e-x$
$-1$
$dx-\int (1 -x^{2})e-x$
$$ 2 1 $$
$dx= [(1 + 2x+ x^{2})e-x]-1$

$= [(1 + 2x+ x^{2})e-x]1$
$2 = [4e-1 -0] -[9e-2 -4e-1] = (8e-1 -9e-2) u^{2} \cong 1.73 u^{2}$

Calcoliamo ora il seguente integrale:

$\int (1 -x^{2})e-x$
$\alpha$
$dx= [(1 + 2x+ x^{2})e-x]1$
$\alpha = (1 + 2\alpha + \alpha 2)e-\alpha -4e-1$

Il valore assoluto di questa espressione rappresenta l’area della regione compresa tra il
grafico della funzione f(x) e l’asse $x$ sull’intervallo $[1; \alpha$ ]. Il valore assoluto del limite per
$\alpha \to +\infty$ rappresenta l’area della regione compresa tra il grafico della funzione f(x) e
l’asse $x$ sull’intervallo $[1; +\infty$ ].

$$ lim $$
$\alpha \to +\infty \int (1 -x^{2})e-x$
$\alpha$
$dx=$ lim
$\alpha \to +\infty [(1 + 2\alpha + \alpha 2)e-\alpha -4e-1] =$ lim
$\alpha \to +\infty [\alpha 2e-\alpha -4e-1] =$
= lim
$\alpha \to +\infty [\alpha 2$
$e\alpha -4e-1] = -4e-1 = -4$

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1n7qQSR6joIJerX8l_7M5ZnD0O28Aqabx/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
