---
title: 2007 Estero Australe Suppletiva — Questionario — Quesito 4 — Svolgimento
tipo: soluzione
item_id: sol_ques_2007_estero_australe_2007_suppletiva_questionario_49_4
of_item: ques_2007_estero_australe_2007_suppletiva_questionario_49_4
prova_id: prova_2007_estero_australe_2007_suppletiva_questionario_49
anno: '2007'
pdf: Prova_Maturita_2007.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/2007
---

**Quesito:** [[Quesiti/ques_2007_estero_australe_2007_suppletiva_questionario_49_4|2007 Estero Australe Suppletiva — Questionario — Quesito 4]] · **Prova:** [[Prove/2007_estero_australe_2007_suppletiva_questionario_49|2007 Estero Australe Suppletiva — Questionario]]

Le nuove targhe automobilistiche sono costituite da 2 lettere, seguite da 3 cifre, seguite a loro volta da 2 lettere. Sapendo che le lettere possono essere scelte tra le 26 dell'alfabeto anglosassone, si calcoli quante automobili si possono immatricolare in questo modo.

Le possibilità dei primi due posti sono uguali alle disposizioni con ripetizioni di 26 oggetti a 2 a 2, quindi $D^r_{26,2} = 26^2 = 676$.

Le possibilità dei tre posti centrali sono uguali alle disposizioni con ripetizioni di 10 oggetti (le 10 cifre) a 3 a 3, quindi $D^r_{10,3} = 10^3 = 1000$.

Le possibilità degli ultimi due posti sono ancora uguali alle disposizioni con ripetizioni di 26 oggetti a 2 a 2, quindi $D^r_{26,2} = 26^2 = 676$.

Il numero di automobili che si possono immatricolare sono quindi:

$$676 \cdot 1000 \cdot 676 = 456\,976\,000$$

Osserviamo che in realtà le targhe, per evitare confusioni nella lettura a distanza, non usano tutte le 26 lettere, ma solo 22; non vengono utilizzate le lettere I ed O per evitare confusioni con le cifre 1 e 0 e neanche le lettere Q ed U. Non viene neanche utilizzata la combinazione EE, per evitare confusioni con "Escursionisti Esteri".

Le targhe effettivamente immatricolabili sono quindi:

$$(D^r_{22,2} - 1) \cdot D^r_{10,3} \cdot (D^r_{22,2} - 1) = 483 \cdot 1000 \cdot 483 = 233\,289\,000$$

*Fonte:* [📄 PDF p.51](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/geometria #cluster/geometria
