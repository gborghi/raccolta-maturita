---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 2 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2022_5_139_2
of_item: ques_simzan_simzan_parte2_2022_5_139_2
prova_id: prova_simzan_simzan_parte2_2022_5_139
anno: '2022'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2022
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2022_5_139_2|Simulazione Zanichelli 2022 — SimZan parte2 n.5 — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 n.5]]

La funzione è:

$$f(x) = \begin{cases} ax^2(x + 2) + bx - 8a, & x < 2 \\ \ln(x - 1), & x \ge 2 \end{cases}$$

Troviamo $a$ e $b$ affinché $f$ sia ovunque continua e derivabile.

**Continuità in $x = 2$:**

$$\lim_{x \to 2^-} f(x) = a \cdot 4 \cdot 4 + 2b - 8a = 8a + 2b, \qquad \lim_{x \to 2^+} f(x) = \ln 1 = 0.$$

Quindi $8a + 2b = 0$, ossia $b = -4a$.

**Derivabilità in $x = 2$:**

$$\lim_{x \to 2^-} f'(x) = 3ax^2 + 4ax + b \big|_{x=2} = 12a + 8a + b = 20a + b,$$

$$\lim_{x \to 2^+} f'(x) = \frac{1}{x-1}\bigg|_{x=2} = 1.$$

Quindi $20a + b = 1$. Sostituendo $b = -4a$: $16a = 1 \Rightarrow a = \dfrac{1}{16}$, $b = -\dfrac{1}{4}$.

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
