---
title: 'Simulazione Zanichelli 2013 Sperimentale #7 — Quesito 8 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_7_81_8
of_item: ques_simzan_simzan_parte1_2013_7_81_8
prova_id: prova_simzan_simzan_parte1_2013_7_81
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_7_81_8|Simulazione Zanichelli 2013 Sperimentale n.7 — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_7_81|Simulazione Zanichelli 2013 Sperimentale n.7]]

Una sfera di raggio 1 è secata da due piani paralleli distanti 1 tra loro. Individuare la posizione dei piani affinché la somma delle aree delle sezioni sia massima.

**Svolgimento.**

*(grafico — vedi PDF p.100)*

Poniamo il centro della sfera nell'origine. I due piani siano $x = t$ e $x = t+1$, con $-1 \leq t$ e $t+1 \leq 1$, cioè $-1 \leq t \leq 0$.

La sezione al piano $x = s$ ha area $A(s) = \pi(1-s^2)$.

La somma delle aree è:

$$S(t) = \pi(1-t^2) + \pi\bigl(1-(t+1)^2\bigr) = \pi\!\left[2 - t^2 - t^2 - 2t - 1\right] = \pi\!\left[1 - 2t^2 - 2t\right].$$

Massimizzo:

$$S'(t) = \pi(-4t-2) = 0 \implies t = -\frac{1}{2}.$$

$S''(t) = -4\pi < 0$: è effettivamente un massimo.

Con $t = -\dfrac{1}{2}$: i piani sono a $x = -\dfrac{1}{2}$ e $x = \dfrac{1}{2}$, **simmetrici rispetto al centro** della sfera.

$$S_{\max} = \pi\!\left[1 - 2\cdot\frac{1}{4} - 2\cdot\!\left(-\frac{1}{2}\right)\right] = \pi\!\left[1 - \frac{1}{2} + 1\right] = \frac{3\pi}{2}.$$

*(vedi PDF p.100)*

---

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
