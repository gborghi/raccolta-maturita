---
title: 2007 Ordinaria PNI — Prova — Quesito 8 — Svolgimento
tipo: soluzione
item_id: sol_ques_2007_sessione_ordinaria_2007_prova_168_8
of_item: ques_2007_sessione_ordinaria_2007_prova_168_8
prova_id: prova_2007_sessione_ordinaria_2007_prova_168
anno: '2007'
pdf: Prova_Maturita_2007.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2007
---

**Quesito:** [[Quesiti/ques_2007_sessione_ordinaria_2007_prova_168_8|2007 Ordinaria PNI — Prova — Quesito 8]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_168|2007 Ordinaria PNI — Prova]]

**Problema di Eulero: tre gentiluomini e i luigi.**

Siano $a_0, b_0, c_0$ le somme iniziali. Totale: $a_0 + b_0 + c_0 = 72$ luigi.

**Partita 1** (il primo perde verso gli altri tanto quanto ciascuno possiede):
$$a_1 = a_0 - b_0 - c_0, \quad b_1 = 2b_0, \quad c_1 = 2c_0.$$

**Partita 2** (il secondo perde verso gli altri tanto quanto ciascuno possiede):
$$a_2 = 2a_1, \quad b_2 = b_1 - a_1 - c_1, \quad c_2 = 2c_1.$$

**Partita 3** (il terzo perde verso gli altri tanto quanto ciascuno possiede):
$$a_3 = 2a_2, \quad b_3 = 2b_2, \quad c_3 = c_2 - a_2 - b_2.$$

Condizione finale: $a_3 = b_3 = c_3 = 24$.

Risolviamo a ritroso:

- $a_3 = 2a_2 = 24 \Rightarrow a_2 = 12$
- $b_3 = 2b_2 = 24 \Rightarrow b_2 = 12$
- $c_3 = c_2 - a_2 - b_2 = c_2 - 24 = 24 \Rightarrow c_2 = 48$

- $a_2 = 2a_1 = 12 \Rightarrow a_1 = 6$
- $c_2 = 2c_1 = 48 \Rightarrow c_1 = 24$
- $b_2 = b_1 - a_1 - c_1 = b_1 - 30 = 12 \Rightarrow b_1 = 42$

- $b_1 = 2b_0 = 42 \Rightarrow b_0 = 21$
- $c_1 = 2c_0 = 24 \Rightarrow c_0 = 12$
- $a_1 = a_0 - b_0 - c_0 = a_0 - 33 = 6 \Rightarrow a_0 = 39$

**Il primo si sedette con $39$ luigi, il secondo con $21$, il terzo con $12$.**

Verifica: $39 + 21 + 12 = 72$. ✓

---

*Fonte:* [📄 PDF p.168](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
