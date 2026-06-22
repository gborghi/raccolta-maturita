---
title: 'Simulazione Zanichelli 2012 Sperimentale #3 — Quesito 5 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_3_42_5
of_item: ques_simzan_simzan_parte1_2012_3_42_5
prova_id: prova_simzan_simzan_parte1_2012_3_42
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_3_42_5|Simulazione Zanichelli 2012 Sperimentale #3 — Quesito 5]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_3_42|Simulazione Zanichelli 2012 Sperimentale #3]]

Il bersaglio è un semicerchio di raggio $r$; all'interno è il trapezio isoscele inscritto di area massima.

*(grafico — vedi PDF p.57)*

Si parametrizza il vertice superiore del trapezio come $P = (r\cos\theta, r\sin\theta)$ con $\theta \in (0, \pi)$. La base superiore è $2r\cos\theta$, la base inferiore è $2r$, l'altezza è $r\sin\theta$:

$$A(\theta) = \frac{(2r + 2r\cos\theta)}{2} \cdot r\sin\theta = r^2\sin\theta(1+\cos\theta).$$

Massimizzando: $A'(\theta) = r^2[\cos\theta + \cos 2\theta] = r^2[2\cos^2\theta + \cos\theta - 1] = 0$.

Risolvendo: $\cos\theta = \frac{1}{2}$, cioè $\theta = \frac{\pi}{3}$.

*(grafico — vedi PDF p.58)*

L'area massima del trapezio è:

$$A_{\max} = r^2\sin\frac{\pi}{3}\!\left(1+\cos\frac{\pi}{3}\right) = r^2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{3}{2} = \frac{3\sqrt{3}}{4}r^2.$$

L'area del semicerchio è $\frac{\pi r^2}{2}$.

La probabilità che la freccetta cada nella parte del semicerchio esterna al trapezio è:

$$p = 1 - \frac{A_{\max}}{A_{\text{semicerchio}}} = 1 - \frac{\frac{3\sqrt{3}}{4}r^2}{\frac{\pi}{2}r^2} = 1 - \frac{3\sqrt{3}}{2\pi} \approx 0{,}17.$$

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
