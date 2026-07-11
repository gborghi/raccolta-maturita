---
title: 'Simulazione Zanichelli 2012 Sperimentale #3 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_3_42_3
of_item: ques_simzan_simzan_parte1_2012_3_42_3
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_3_42_3|Simulazione Zanichelli 2012 Sperimentale n.3 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_3_42|Simulazione Zanichelli 2012 Sperimentale n.3]]

Si determina il valore di $a \in \left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$ per cui

$$f(x) = \begin{cases} -\dfrac{4}{\pi}\sin(x-a) & \text{se } x \le a \\[6pt] \dfrac{4x^2}{\pi^2} - \dfrac{8x}{\pi} + 3 & \text{se } x > a \end{cases}$$

soddisfa le ipotesi del teorema di Rolle sull'intervallo $\left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$.

Le ipotesi richiedono: (i) $f$ continua su $\left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$, (ii) $f$ derivabile in $\left(-\frac{\pi}{2}; \frac{3\pi}{2}\right)$, (iii) $f\!\left(-\frac{\pi}{2}\right) = f\!\left(\frac{3\pi}{2}\right)$.

**Valori agli estremi:**

$$f\!\left(-\frac{\pi}{2}\right) = -\frac{4}{\pi}\sin\!\left(-\frac{\pi}{2}-a\right) = \frac{4}{\pi}\cos a.$$

$$f\!\left(\frac{3\pi}{2}\right) = \frac{4}{\pi^2}\cdot\frac{9\pi^2}{4} - \frac{8}{\pi}\cdot\frac{3\pi}{2} + 3 = 9 - 12 + 3 = 0.$$

La condizione $f\!\left(-\frac{\pi}{2}\right) = 0$ impone $\cos a = 0$. Nell'intervallo $\left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$: $a = -\frac{\pi}{2}$ oppure $a = \frac{\pi}{2}$.

**Continuità in $x = a$:** $f(a^-) = 0$ (il seno si annulla). Occorre anche:

$$\lim_{x \to a^+} f(x) = \frac{4a^2}{\pi^2} - \frac{8a}{\pi} + 3 = 0.$$

- Per $a = -\frac{\pi}{2}$: $1 + 4 + 3 = 8 \ne 0$. Non accettabile.
- Per $a = \frac{\pi}{2}$: $1 - 4 + 3 = 0$. Accettabile.

La funzione soddisfa le ipotesi del teorema di Rolle per $a = \dfrac{\pi}{2}$.

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
