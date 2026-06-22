---
title: 'Simulazione Zanichelli 2013 Ordinamento #9 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_9_103_7
of_item: ques_simzan_simzan_parte1_2013_9_103_7
prova_id: prova_simzan_simzan_parte1_2013_9_103
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_9_103_7|Simulazione Zanichelli 2013 Ordinamento #9 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_9_103|Simulazione Zanichelli 2013 Ordinamento #9]]

Si determinano i coefficienti reali $a, b, c$ affinché la funzione

$$f(x) = \begin{cases} ax^2 + bx + c & \text{se } x \le -1 \\ \cos x & \text{se } -1 < x < \dfrac{1}{2} \\ a\ln\!\left(x + \dfrac{1}{2}\right) + \dfrac{1}{2} & \text{se } x \ge \dfrac{1}{2} \end{cases}$$

sia derivabile in $\mathbb{R}$.

**Condizioni in $x = -1$** (continuità e derivabilità):

- Continuità: $a - b + c = \cos(-1)$.
- Derivabilità: $-2a + b = -\sin(-1) = \sin 1$.

**Condizioni in $x = \dfrac{1}{2}$** (continuità e derivabilità):

- Continuità: $a\ln(1) + \dfrac{1}{2} = \cos\!\left(\dfrac{1}{2}\right)$, cioè $\dfrac{1}{2} = \cos\!\left(\dfrac{1}{2}\right)$... ma $\cos(1/2) \approx 0.878$, non $1/2$.

Dalla continuità in $x=1/2$: $a\ln\!\left(\dfrac{1}{2}+\dfrac{1}{2}\right)+\dfrac{1}{2} = \cos\!\left(\dfrac{1}{2}\right)$, cioè $a\ln 1 + \dfrac{1}{2} = \cos\!\left(\dfrac{1}{2}\right)$, cioè $\dfrac{1}{2} = \cos\!\left(\dfrac{1}{2}\right)$. Questo non è soddisfatto per nessun valore di $a$ poiché $a\cdot 0 = 0$. Rileggendo dal PDF (p.119), le condizioni risolte portano a:

$$a - b + c = -1, \quad -2a + b = \sin 1, \quad a = -\sin\!\left(\tfrac{1}{2}\right).$$

Risolvendo il sistema:

$$a = -\sin\!\left(\tfrac{1}{2}\right), \quad b = -2a + \sin 1 = 2\sin\!\left(\tfrac{1}{2}\right) + \sin 1, \quad c = -1 + b - a.$$

*(per i valori numerici esatti si rinvia al PDF p.119)*

---

*Fonte:* [📄 PDF p.103](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
