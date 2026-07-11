---
title: 'Simulazione Zanichelli 2013 Sperimentale #7 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_7_81_7
of_item: ques_simzan_simzan_parte1_2013_7_81_7
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_7_81_7|Simulazione Zanichelli 2013 Sperimentale n.7 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_7_81|Simulazione Zanichelli 2013 Sperimentale n.7]]

Calcolare, senza De L'Hospital:

$$\lim_{x\to\pi} \frac{\sin x}{e^\pi - e^x}.$$

**Svolgimento.**

Forma $\dfrac{0}{0}$.

**Metodo 1 — Cambio di variabile.** Poniamo $y = x - \pi \to 0$:

$$\lim_{y\to 0} \frac{\sin(y+\pi)}{e^\pi - e^{y+\pi}} = \lim_{y\to 0} \frac{-\sin y}{e^\pi(1-e^y)} = \lim_{y\to 0}\!\left(-\frac{1}{e^\pi}\cdot\frac{\sin y}{y}\cdot\frac{y}{1-e^y}\right).$$

Poiché $\displaystyle\lim_{y\to 0}\frac{\sin y}{y} = 1$ e $\displaystyle\lim_{y\to 0}\frac{y}{1-e^y} = -1$:

$$= -\frac{1}{e^\pi}\cdot 1\cdot(-1) = e^{-\pi}.$$

**Metodo 2 — Definizione di derivata.** Riscriviamo:

$$\lim_{x\to\pi}\frac{\sin x}{e^\pi - e^x} = -\lim_{x\to\pi}\frac{\sin x - \sin\pi}{x-\pi}\cdot\left[\lim_{x\to\pi}\frac{e^x - e^\pi}{x-\pi}\right]^{-1}$$

$$= -(\cos\pi)\cdot\bigl[e^\pi\bigr]^{-1} = -(-1)\cdot e^{-\pi} = e^{-\pi}.$$

*(vedi PDF p.99)*

---

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
