---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 8 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2022_5_139_8
of_item: ques_simzan_simzan_parte2_2022_5_139_8
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2022_5_139_8|Simulazione Zanichelli 2022 — SimZan parte2 n.5 — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 n.5]]

Calcoliamo il limite:

$$\lim_{x \to 1^+} \frac{\displaystyle\int_x^1 \ln t\,dt}{x - e^{x-1}}.$$

Per $x \to 1^+$ si ha $\displaystyle\int_x^1 \ln t\,dt \to 0$ e $x - e^{x-1} \to 0$: forma indeterminata $\dfrac{0}{0}$.

Applichiamo De L'Hôpital. Osserviamo che $\displaystyle\int_x^1 \ln t\,dt = -\int_1^x \ln t\,dt$, quindi:

$$\frac{d}{dx}\!\left[-\int_1^x \ln t\,dt\right] = -\ln x, \qquad \frac{d}{dx}\!\left[x - e^{x-1}\right] = 1 - e^{x-1}.$$

$$\lim_{x \to 1^+} \frac{-\ln x}{1 - e^{x-1}}.$$

Ancora forma $\dfrac{0}{0}$ per $x \to 1^+$. Applichiamo De L'Hôpital una seconda volta:

$$\lim_{x \to 1^+} \frac{-1/x}{-e^{x-1}} = \lim_{x \to 1^+} \frac{1}{x\, e^{x-1}} = \frac{1}{1 \cdot e^0} = 1.$$

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
