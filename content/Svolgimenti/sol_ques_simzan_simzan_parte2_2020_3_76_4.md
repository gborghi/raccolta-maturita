---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 4 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2020_3_76_4
of_item: ques_simzan_simzan_parte2_2020_3_76_4
prova_id: prova_simzan_simzan_parte2_2020_3_76
anno: '2020'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2020
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2020_3_76_4|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica) — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica)]]

Sia $f: \mathbb{R} \to \mathbb{R}$ la funzione definita da

$$f(x) = \frac{\sqrt{x+1} - e^{-x}}{x}.$$

**Calcolo dei limiti $\lim_{x \to +\infty} f(x)$ e $\lim_{x \to 0} f(x)$, giustificando le risposte.**

Per $x \to +\infty$: al numeratore $\sqrt{x+1} \to +\infty$ e $e^{-x} \to 0$, al denominatore $x \to +\infty$:

$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{\sqrt{x+1} - e^{-x}}{x} = \lim_{x \to +\infty} \frac{\sqrt{x+1}}{x} = \lim_{x \to +\infty} \frac{1}{\sqrt{x}} \cdot \frac{\sqrt{x+1}}{\sqrt{x}} = 0.$$

Per $x \to 0$: la forma è $\dfrac{0}{0}$, quindi ricorriamo agli sviluppi di Taylor al primo ordine:

$$\sqrt{x+1} = 1 + \frac{x}{2} + o(x), \qquad e^{-x} = 1 - x + o(x),$$

$$f(x) = \frac{\left(1 + \frac{x}{2}\right) - (1-x)}{x} + o(1) = \frac{\frac{x}{2} + x}{x} = \frac{\frac{3}{2}x}{x} = \frac{3}{2}.$$

Quindi:

$$\lim_{x \to +\infty} f(x) = 0, \qquad \lim_{x \to 0} f(x) = \frac{3}{2}.$$

*(vedi anche il calcolo alternativo con de l'Hôpital per $\lim_{x \to 0}$)*

---

*Fonte:* [📄 PDF p.80](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
