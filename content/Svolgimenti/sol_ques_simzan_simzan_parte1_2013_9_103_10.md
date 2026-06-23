---
title: 'Simulazione Zanichelli 2013 Ordinamento #9 — Quesito 10 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_9_103_10
of_item: ques_simzan_simzan_parte1_2013_9_103_10
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_9_103_10|Simulazione Zanichelli 2013 Ordinamento n.9 — Quesito 10]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_9_103|Simulazione Zanichelli 2013 Ordinamento n.9]]

Si determina il dominio della funzione:

$$y = \sqrt{\frac{\ln(x-2)}{\ln x - 2}}.$$

Condizioni necessarie:

1. **Argomento del logaritmo al numeratore positivo:** $x - 2 > 0 \Rightarrow x > 2$.
2. **Argomento del logaritmo al denominatore positivo e denominatore $\neq 0$:** $x > 0$ (già garantito da $x > 2$) e $\ln x - 2 \neq 0$, cioè $\ln x \neq 2$, cioè $x \neq e^2$.
3. **Il radicando deve essere $\ge 0$:** $\dfrac{\ln(x-2)}{\ln x - 2} \ge 0$.

Studiamo il segno della frazione $\dfrac{\ln(x-2)}{\ln x - 2}$:

- **Numeratore $\ln(x-2) \ge 0$:** $x - 2 \ge 1$, cioè $x \ge 3$.
- **Denominatore $\ln x - 2 > 0$:** $\ln x > 2$, cioè $x > e^2$.

Tavola dei segni (con $x > 2$ e $x \neq e^2$, $e^2 \approx 7.39$):

| intervallo | $\ln(x-2)$ | $\ln x - 2$ | frazione |
|---|---|---|---|
| $2 < x < 3$ | $-$ | $-$ | $+$ |
| $x = 3$ | $0$ | $-$ | $0$ |
| $3 < x < e^2$ | $+$ | $-$ | $-$ |
| $x > e^2$ | $+$ | $+$ | $+$ |

La disequazione $\dfrac{\ln(x-2)}{\ln x - 2} \ge 0$ è soddisfatta per $x \le 3$ oppure $x > e^2$.

Combinando con $x > 2$ e $x \neq e^2$:

$$\text{Dominio}: \quad 2 < x \le 3 \quad \vee \quad x > e^2.$$

*Fonte:* [📄 PDF p.103](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
