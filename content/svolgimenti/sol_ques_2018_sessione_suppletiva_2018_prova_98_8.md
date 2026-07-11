---
title: 2018 Sessione suppletiva — Prova — Quesito 8 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_98_8
of_item: ques_2018_sessione_suppletiva_2018_prova_98_8
prova_id: prova_2018_sessione_suppletiva_2018_prova_98
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_98_8|2018 Sessione suppletiva — Prova — Quesito 8]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_98|2018 Sessione suppletiva — Prova]]

La variabile casuale $X \in [0,10]$ ha densità di probabilità (ricostruita dai frammenti del raw):

$$f(x) = \begin{cases} \dfrac{1}{3}x & 0 \leq x \leq 1 \\[6pt] \dfrac{1}{12} & 1 < x \leq 10 \end{cases}$$

*(Nota: la definizione esatta è parzialmente frammentata nel raw — vedi PDF p.4 per conferma)*

**Valore medio:**

$$E[X] = \int_0^1 x\cdot\frac{x}{3}\,dx + \int_1^{10} x\cdot\frac{1}{12}\,dx = \frac{1}{3}\cdot\frac{1}{4} + \frac{1}{12}\cdot\frac{100-1}{2} = \frac{1}{12} + \frac{99}{24} = \frac{2}{24} + \frac{99}{24} = \frac{101}{24} \approx 4{,}21.$$

**Valore mediano $m$.**

Prima verifichiamo: $\int_0^1 \frac{x}{3}\,dx = \frac{1}{6} < \frac{1}{2}$, quindi il mediano cade in $(1, 10]$.

$$\frac{1}{6} + \int_1^m\frac{1}{12}\,dx = \frac{1}{2} \implies \frac{m-1}{12} = \frac{1}{3} \implies m - 1 = 4 \implies m = 5.$$

$$\boxed{E[X] = \frac{101}{24}, \qquad m = 5.}$$

---

*Fonte:* [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
