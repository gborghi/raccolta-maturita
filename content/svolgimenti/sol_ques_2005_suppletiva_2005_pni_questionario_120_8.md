---
title: 2005 Suppletiva PNI — Questionario — Quesito 8 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_suppletiva_2005_pni_questionario_120_8
of_item: ques_2005_suppletiva_2005_pni_questionario_120_8
prova_id: prova_2005_suppletiva_2005_pni_questionario_120
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Quesito:** [[Quesiti/ques_2005_suppletiva_2005_pni_questionario_120_8|2005 Suppletiva PNI — Questionario — Quesito 8]] · **Prova:** [[Prove/2005_suppletiva_2005_pni_questionario_120|2005 Suppletiva PNI — Questionario]]

La funzione è chiaramente integrabile nell'intervallo $[-1;\, 1]$ e l'integrale vale $1$ (si pensi al significato geometrico dell'integrale definito), ma non ammette primitiva in tale intervallo. Un'eventuale primitiva $F(x)$ dovrebbe infatti essere derivabile in $[-1;\, 1]$ con $F'(x) = f(x)$.

Quindi: $F'(x) = x+1$ se $-1 \le x < 0$; $F'(x) = -x+1$ se $0 < x \le 1$; e poiché la derivata destra e sinistra di $F(x)$ in $x = 0$ è $1$, dovrà essere $F'(0) = 1$.

Ma $F'(0) = f(0) = 0$, quindi $f(x)$ non ammette primitiva. Questo mostra che una funzione reale di variabile reale integrabile in un intervallo chiuso e limitato $[a, b]$ non necessariamente ammette primitiva in $[a, b]$.

---

In un'urna ci sono due palline bianche, in una seconda urna ci sono due palline nere e in una terza urna ci sono una pallina bianca e una pallina nera. Scegli a caso un'urna ed estrai, sempre a caso, una delle due palline in essa contenute: è bianca. Saresti disposto a scommettere alla pari che la pallina rimasta nell'urna che hai scelto sia essa pure bianca?

Le tre urne sono: urna 1 (BB), urna 2 (NN), urna 3 (BN).

Scelta a caso un'urna, la probabilità che la pallina estratta sia bianca è data da:

$$p(\text{prima bianca}) = \frac{1}{3}\cdot\frac{2}{2} + \frac{1}{3}\cdot\frac{0}{2} + \frac{1}{3}\cdot\frac{1}{2} = \frac{1}{3} + \frac{1}{6} = \frac{1}{2}$$

Quindi la probabilità che la pallina rimasta sia anch'essa bianca è $1/3$, pari alla probabilità che la prima estratta provenga dall'urna 1. Sapendo che la prima estratta è bianca, la probabilità che anche la seconda nell'urna scelta sia bianca è data da:

$$p = \frac{p(\text{prima bianca} \cap \text{seconda bianca})}{p(\text{prima bianca})} = \frac{\dfrac{1}{3}}{\dfrac{1}{2}} = \frac{2}{3}$$

Quindi è conveniente scommettere alla pari che la pallina rimasta nell'urna scelta sia pure bianca.

**N.B.** Si tratta di un tipico esempio di applicazione del teorema di Bayes, in cui, detto $B$ l'evento "la pallina estratta è bianca" ed $A$ l'evento "la pallina è stata estratta dall'urna 1", dobbiamo trovare la probabilità condizionata:

$$p(A|B) = \frac{p(A \cap B)}{p(B)} = \frac{\dfrac{1}{3}}{\dfrac{1}{2}} = \frac{2}{3}$$

*Fonte:* [📄 PDF p.125](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
