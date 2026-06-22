---
title: 'Simulazione Zanichelli 2015 — SimZan parte1 #15 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2015_15_147_6
of_item: ques_simzan_simzan_parte1_2015_15_147_6
prova_id: prova_simzan_simzan_parte1_2015_15_147
anno: '2015'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2015
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2015_15_147_6|Simulazione Zanichelli 2015 — SimZan parte1 #15 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte1_2015_15_147|Simulazione Zanichelli 2015 — SimZan parte1 #15]]

Data la funzione $f(x) = \sqrt{a^2x^2 + 9}$, determina per quale valore della costante reale positiva $a$ i solidi ottenuti ruotando di 360° il sottografico di $f(x)$ compreso tra $x = 0$ e $x = 4$ prima intorno all'asse $x$ poi intorno all'asse $y$ risultano equivalenti.

Il volume $V_x$ del solido di rotazione intorno all'asse $x$:

$$V_x = \pi\int_0^4 \left(a^2x^2+9\right)dx = \pi\left[\frac{a^2x^3}{3}+9x\right]_0^4 = \pi\!\left(\frac{64a^2}{3}+36\right).$$

Il volume $V_y$ del solido di rotazione intorno all'asse $y$ (formula del guscio cilindrico):

$$V_y = 2\pi\int_0^4 x\sqrt{a^2x^2+9}\,dx = 2\pi\left[\frac{(a^2x^2+9)^{3/2}}{3a^2}\right]_0^4 = \frac{2\pi}{3a^2}\!\left[(16a^2+9)^{3/2}-27\right].$$

Imponiamo $V_x = V_y$:

$$\pi\!\left(\frac{64a^2}{3}+36\right) = \frac{2\pi}{3a^2}\!\left[(16a^2+9)^{3/2}-27\right].$$

$$a^2\!\left(64a^2+108\right) = 2\!\left[(16a^2+9)^{3/2}-27\right].$$

La soluzione numerica di questa equazione è $a = \dfrac{172}{196} \simeq \dfrac{49}{43}$.

---

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
