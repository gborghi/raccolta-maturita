---
title: 'Simulazione Zanichelli 2013 Sperimentale #7 — Quesito 1 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_7_81_1
of_item: ques_simzan_simzan_parte1_2013_7_81_1
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_7_81_1|Simulazione Zanichelli 2013 Sperimentale n.7 — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_7_81|Simulazione Zanichelli 2013 Sperimentale n.7]]

Data la funzione:

$$f(x) = \begin{cases} e^{1/x} & \text{se } x < 0 \\ 0 & \text{se } x = 0 \end{cases}$$

si studi la continuità di $f'(x)$.

**Svolgimento.**

Per $x < 0$: $f(x) = e^{1/x}$ è derivabile con:

$$f'(x) = -\frac{1}{x^2}e^{1/x}.$$

Per $x = 0$, calcoliamo la derivata dalla definizione:

$$f'(0) = \lim_{x\to 0^-} \frac{e^{1/x} - 0}{x} = \lim_{x\to 0^-} \frac{e^{1/x}}{x}.$$

Ponendo $t = 1/x \to -\infty$: $\displaystyle\lim_{t\to -\infty} t\,e^t = 0$.

Quindi $f'(0) = 0$ e $f$ è derivabile in $x = 0$.

Verifichiamo la continuità di $f'$ in $x = 0$:

$$\lim_{x\to 0^-} f'(x) = \lim_{x\to 0^-}\!\left(-\frac{e^{1/x}}{x^2}\right).$$

Ponendo $t = 1/x \to -\infty$: $\displaystyle\lim_{t\to -\infty}(-t^2 e^t) = 0$, poiché $e^t \to 0$ più rapidamente di $t^2 \to +\infty$.

Quindi $\displaystyle\lim_{x\to 0^-} f'(x) = 0 = f'(0)$: **$f'$ è continua in $x = 0$**.

*(vedi PDF p.94)*

---

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
