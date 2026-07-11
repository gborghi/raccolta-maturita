---
title: 'Simulazione Zanichelli 2012 Sperimentale #3 — Quesito 10 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_3_42_10
of_item: ques_simzan_simzan_parte1_2012_3_42_10
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_3_42_10|Simulazione Zanichelli 2012 Sperimentale n.3 — Quesito 10]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_3_42|Simulazione Zanichelli 2012 Sperimentale n.3]]

Si studia la continuità e la derivabilità della funzione:

$$f(x) = \begin{cases} \dfrac{-x}{|x|} & \text{se } x > 1 \\[4pt] |x| & \text{se } x \le 1 \end{cases}$$

che si può riscrivere come:

$$f(x) = \begin{cases} 1 & \text{se } x < -1 \\ -x & \text{se } -1 \le x < 0 \\ x & \text{se } 0 \le x \le 1 \\ -1 & \text{se } x > 1. \end{cases}$$

**Continuità.** I possibili punti di discontinuità sono $x = -1$, $x = 0$, $x = 1$.

$$\lim_{x \to -1^-} f(x) = 1 = f(-1), \quad \lim_{x \to 0^-} f(x) = 0 = f(0), \quad \lim_{x \to 1^-} f(x) = 1 \ne -1 = \lim_{x \to 1^+} f(x).$$

La funzione è **continua** ovunque tranne che in $x = 1$, dove ha una discontinuità di prima specie (salto).

*(grafico — vedi PDF p.61)*

**Derivabilità.** La funzione non è derivabile in $x = -1$, $x = 0$ e $x = 1$:

- $f'_-(-1) = 0$, $f'_+(-1) = -1$: derivate laterali diverse in $x = -1$.
- $f'_-(0) = -1$, $f'_+(0) = 1$: derivate laterali diverse in $x = 0$.
- La funzione non è continua in $x = 1$, quindi non è neppure derivabile in tale punto.

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
