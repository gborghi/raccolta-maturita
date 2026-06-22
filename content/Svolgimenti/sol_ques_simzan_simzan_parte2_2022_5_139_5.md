---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 5 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2022_5_139_5
of_item: ques_simzan_simzan_parte2_2022_5_139_5
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2022_5_139_5|Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 5]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 #5]]

Calcoliamo il volume del solido di rotazione attorno all'asse $x$ della regione compresa tra la retta $x + y = 4$ e la semicirconferenza $y = \sqrt{10 - x^2}$.

**Intersezioni:**

$$\sqrt{10 - x^2} = 4 - x \quad \Rightarrow \quad 10 - x^2 = 16 - 8x + x^2 \quad \Rightarrow \quad 2x^2 - 8x + 6 = 0$$

$$x^2 - 4x + 3 = 0 \quad \Rightarrow \quad (x-1)(x-3) = 0 \quad \Rightarrow \quad x = 1,\; x = 3.$$

*(grafico — vedi PDF p.159)*

In $[1, 3]$: $\sqrt{10-x^2} \ge 4 - x$ (la semicirconferenza è sopra la retta).

Volume con il metodo dei dischi (differenza delle aree):

$$V = \pi \int_1^3 \bigl[(10 - x^2) - (4-x)^2\bigr]\,dx = \pi \int_1^3 \bigl[-2x^2 + 8x - 6\bigr]\,dx$$

$$= \pi \left[-\frac{2x^3}{3} + 4x^2 - 6x\right]_1^3 = \pi \left[\left(-18 + 36 - 18\right) - \left(-\frac{2}{3} + 4 - 6\right)\right]$$

$$= \pi \left[0 - \left(-\frac{8}{3}\right)\right] = \frac{8\pi}{3}.$$

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
