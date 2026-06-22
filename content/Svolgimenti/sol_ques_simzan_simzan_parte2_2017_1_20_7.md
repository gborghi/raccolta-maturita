---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2017_1_20_7
of_item: ques_simzan_simzan_parte2_2017_1_20_7
prova_id: prova_simzan_simzan_parte2_2017_1_20
anno: '2017'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2017
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2017_1_20_7|Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 #1]]

Equazione differenziale: $y'' - 2y' + y = x - 2$, con condizioni iniziali $y(0)=2$, $y'(0)=0$.

**Soluzione dell'omogenea.** Equazione caratteristica: $\lambda^2-2\lambda+1=0 \implies (\lambda-1)^2=0$, radice doppia $\lambda=1$:

$$y_o = (c_1+c_2 x)e^x.$$

**Soluzione particolare.** Proviamo $y_p = \alpha x+\beta$:

$$y_p'' = 0,\quad y_p' = \alpha \implies -2\alpha+\alpha x+\beta = x-2 \implies \begin{cases}\alpha=1\\\beta-2\alpha=-2\end{cases} \implies \alpha=1,\;\beta=0.$$

Soluzione generale:

$$y = (c_1+c_2 x)e^x + x.$$

**Applicazione delle condizioni iniziali.**

$y(0) = c_1 = 2$.

$y'(x) = c_2 e^x+(c_1+c_2 x)e^x+1$, quindi $y'(0) = c_2+c_1+1 = 0 \implies c_2 = -3$.

**Soluzione:**

$$y = (2-3x)e^x + x.$$

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
