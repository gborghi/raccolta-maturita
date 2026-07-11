---
title: 2018 Sessione straordinaria — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2018_sessione_straordinaria_2018_problema2_69_1
of_item: prob_2018_sessione_straordinaria_2018_problema2_69_1
prova_id: prova_2018_sessione_straordinaria_2018_problema2_69
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2018
---

**Problema:** [[Problemi/prob_2018_sessione_straordinaria_2018_problema2_69_1|2018 Sessione straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2018_sessione_straordinaria_2018_problema2_69|2018 Sessione straordinaria — Problema 2]]

Sessione straordinaria 2018 - Problema $2$

LICEO SCIENTIFICO SESSIONE STRAORDINARIA 2018 - PROBLEMA $2$

Consideriamo la funzione $f: R\to R,$ così definita:

f(x) $= ln(a∙ebx+ c)$

al variare di a, $b, c$ parametri reali positivi.

Verifica che, comunque si scelgano i parametri, si ha:

f'(x) $> 0 \forall x\in R,$ f''(x) $> 0 \forall x\in R$ .

Calcoliamo le derivate della funzione:

f'(x) =
ab∙ebx
$a∙ebx+ c> 0 \forall x\in R$ perchè a, $b, c$ sono positivi

f''(x) $= ab2 ∙ebx(a∙ebx+ c) -ab∙ebx(ab∙ebx)$
$(a∙ebx+ c)2$
$= ab2 ∙ebx(a∙ebx+ c-a∙ebx)$
$(a∙ebx+ c)2$
$ab2c∙ebx$
$(a∙ebx+ c)2$

e risulta f''(x) $> 0 \forall x\in R$ perché a, $b, c$ sono positivi.

Verifica inoltre che, comunque si scelgano i parametri, la funzione $f$ ha un asintoto
orizzontale, per $x\to -\infty$ , e un asintoto obliquo, per $x\to +\infty$ ; determina a, $b, c,$ in
modo che l’asintoto orizzontale, per $x\to -\infty$ , sia la retta di equazione $y= 0$ e
l’asintoto obliquo, per $x\to +\infty$ , sia la retta di equazione $y= x$ .

$limx\to -\infty (ln(a∙ebx+ c)) =$ ln(c): quindi $f$ ha l’asintoto orizzontale $y=$ ln(c),
per $x\to -\infty$ ed è $y= 0$ se $c = 1.$

Verifichiamo ora che $f$ ha un asintoto obliquo per $x\to +\infty$ :

Sessione straordinaria 2018 - Problema $2$

$$ lim $$
$x\to +\infty (ln(a∙ebx+ c)$
) = lim
$x\to +\infty$ (ln(a∙ebx)
) = lim
$x\to +\infty$ (ln(a) + ln(ebx)

= lim
$x\to +\infty$ (ln(a) $+ bx$
) = lim
$x\to +\infty (bx$
$x) = b= m$

$$ lim $$
$x\to +\infty$ (f(x) $-mx) =$ lim
$x\to +\infty (ln(a∙ebx+ c) -bx) =$ lim
$x\to +\infty (ln(ebx(a+ c$
ebx)) $-bx) =$

= lim
$x\to +\infty$ (ln(ebx) $+ ln(a+ c$
ebx) $-bx) =$ lim
$x\to +\infty (bx+ ln(a+ c$
ebx) $-bx) =$ lim
$x\to +\infty ln(a+ c$
ebx)

= lim
$x\to +\infty$ (ln(a) $+ ln(1 +$
a∙ebx)) = ln(a) $= q$

Quindi la funzione, per $x\to +\infty$ , ha l’asintoto obliquo $y= bx+ ln$ (a) che coincide con
$y= x$ se $b= 1$ ed $a= 1$ .

Dimostra che ponendo $a= b= c= 1$ si ha:

$x<$ f(x) $< ex \forall x\in R$ .

Con $a= b= c= 1$ risulta: f(x) $= ln(ex+ 1)$

Osserviamo che:

$ln(ex+ 1) >$ ln(ex) $= x,$
quindi f(x) $> x$

Per verificare che f(x) $< ex$ studiamo qualitativamente la funzione.

$y=$ f(x) $= ln(ex+ 1)$

La funzione è definita su tutto $R,$ per $x= 0$ vale $ln(2),$ se $y= 0 ex+ 1 = 1,$ mai . La
funzione è positiva quando $ex+ 1 > 1, ex> 0:$ sempre. Calcoliamo i limiti:

Se $x\to -\infty$ , f(x) $\to 0+ :y= 0$ asintoto $al-\infty$ (come visto nel punto precedente)

Se $x\to +\infty$ , f(x) $\to +\infty$ ; possibile asintoto obliquo $(y= x$ come visto nel punto
precedente).

Monotonia: f'(x) $> 0 \forall x\in R,$ come dimostrato nel punto $1:$ funzione sempre crescente
Concavità: f''(x) $> 0 \forall x\in R$ , come dimostrato nel punto $1:$ concavità sempre verso
l’alto, nessun flesso.

Sessione straordinaria 2018 - Problema $2$

Il grafico è quindi il seguente:

Rappresentando nello stesso piano cartesiano le tre funzioni $y= x, y=$ f(x) e $y= ex$ si
può constatare che $x<$ f(x) $< ex \forall x\in R$ :

Osserviamo che $x= 0$ f(x) $< ex$ in quanto $ln(2) < 1$ e che per $x\to -\infty$ f(x) ed
$ex$ sono infinitesimi dello stesso ordine, essendo:

$limx\to -\infty$
$ln (ex+1)$
$$ ex $$
$= limx\to -\infty$
$$ ex $$
$ex= 1$ (N.B. Siccome $ex\to 0 , ln (ex+ 1)~ex$ ).

Sessione straordinaria 2018 - Problema $2$

Verifica inoltre che ponendo $a= b= c= 1$ e detta A l’area della parte di piano compresa
tra il grafico della funzione h(x) $= f(-|x|)$ e l’asse $x$ del riferimento cartesiano, si ha

$A< 2$

Inoltre, a partire dalle caratteristiche del grafico della funzione h(x), determina un numero
reale $S,$ quanto più grande possibile, tale che

$A> S$

Il grafico di h(x) $= f(-|x|)$ si ottiene dal grafico di f(x) con le seguenti trasformazioni:

$1. y=$ f(x) $\to y= f(-x)$ : simmetria rispetto all'asse delle $y$

$2. y= f(-x) \to y= f(-|x|) =$ h(x): si conferma il grafico di $f(-x)$ che si trova a
destra dell’asse $y$ e lo si ribalta a sinistra:

Sessione straordinaria 2018 - Problema $2$

Per dimostrare che $A< 2$ è sufficiente dimostrare che:

$$ \int $$
$f(x)dx< 1$
$-\infty$
; ma ricordiamo che f(x) $< ex$ , quindi $\int$
$f(x)dx< \int$
exdx
$-\infty$
$-\infty$

Ma risulta:

$$ \int $$
exdx
$-\infty$
= lim
$k\to -\infty \int$ exdx
$$ 0 k $$
= lim
$k\to -\infty$ [ex]k
$0 =$ lim
$k\to -\infty (1 -ek) = 1$

Quindi: $\int$
$f(x)dx< 1$
$-\infty$
, da cui $A< 2$ .

Cerchiamo infine un numero reale $S$ (quanto più grande possibile) tale che $A> S$ .
A tal fine determiniamo l’area $S$ del triangolo ABC formato dalle tangenti (destra e
sinistra) al grafico di $h$ nel punto angoloso $C= (0; ln (2)).$
Per $x< 0$ h(x) $= ln(ex+ 1)$ ed è:
h’(x) =
$$ ex $$
$ex+ 1, h-$
' $(0) = 1$
semitangente sinistra in $C: y-ln(2) = 1$
$2 x,$

$xA= -2 ln(2) , AB= 4 ln(2),$

$S=$ area(ABC) $= 2 ln(2) ln(2) = 2 ln2(2) \cong 0.96$

Quindi numero reale $S$ (quanto più grande possibile) tale che $A> S$ è $S= 2 ln2(2) \cong 0.96$

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.69](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
