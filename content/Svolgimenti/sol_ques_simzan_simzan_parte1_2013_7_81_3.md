---
title: 'Simulazione Zanichelli 2013 Sperimentale #7 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_7_81_3
of_item: ques_simzan_simzan_parte1_2013_7_81_3
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_7_81_3|Simulazione Zanichelli 2013 Sperimentale n.7 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_7_81|Simulazione Zanichelli 2013 Sperimentale n.7]]

Determinare le condizioni su $a > 0$ e $b$ affinché:

$$f(x) = \begin{cases} \dfrac{x}{a} & \text{se } x \leq a \\[6pt] \dfrac{a}{x} & \text{se } x > a \end{cases}$$

verifichi le ipotesi del teorema di Lagrange nell'intervallo $\left[\dfrac{a}{2}, b\right]$.

Le ipotesi richiedono: $f$ continua su $\left[\frac{a}{2},b\right]$ e derivabile su $\left(\frac{a}{2},b\right)$.

**Continuità in $x = a$:**

$$\lim_{x\to a^-} \frac{x}{a} = 1 = \frac{a}{a} = \lim_{x\to a^+} \frac{a}{x}. \quad \checkmark$$

$f$ è continua ovunque.

**Derivabilità in $x = a$:**

$$f'_-(a) = \frac{1}{a}, \qquad f'_+(a) = -\frac{a}{a^2} = -\frac{1}{a}.$$

Poiché $\dfrac{1}{a} \neq -\dfrac{1}{a}$ (per $a > 0$), $f$ **non è derivabile** in $x = a$.

**Caso $b \leq a$:** L'intervallo $\left[\frac{a}{2}, b\right] \subseteq (-\infty, a]$, dove $f(x) = \frac{x}{a}$ è derivabile. Le ipotesi di Lagrange sono soddisfatte per ogni $\frac{a}{2} < b \leq a$.

**Caso $b > a$:** Il punto di non-derivabilità $x = a$ è interno all'intervallo: le ipotesi **non** sono soddisfatte.

In conclusione: le ipotesi del teorema di Lagrange sono verificate se e solo se $\dfrac{a}{2} < b \leq a$.

*(vedi PDF p.96)*

---

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
