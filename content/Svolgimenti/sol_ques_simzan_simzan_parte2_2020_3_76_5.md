---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 5 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2020_3_76_5
of_item: ques_simzan_simzan_parte2_2020_3_76_5
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2020_3_76_5|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 5]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica)]]

Si consideri la funzione $f: \mathbb{R} \to \mathbb{R}$ così definita:

$$f(x) = \begin{cases} ae^x + 2 & \text{se } x \le 0 \\[4pt] \dfrac{x^2}{a} + bx + 3 & \text{se } x > 0 \end{cases}$$

**Determinazione dei parametri $a$ e $b$ per la derivabilità in $\mathbb{R}$.**

*Continuità in $x = 0$:*

$$\lim_{x \to 0^-} f(x) = a \cdot 1 + 2 = a + 2, \qquad \lim_{x \to 0^+} f(x) = 0 + 0 + 3 = 3, \qquad f(0) = a + 2.$$

Per la continuità: $a + 2 = 3 \implies a = 1$.

*Derivabilità in $x = 0$:*

$$\lim_{x \to 0^-} f'(x) = ae^x\big|_{x=0} = a = 1, \qquad \lim_{x \to 0^+} f'(x) = \frac{2x}{a}\bigg|_{x=0} + b = b.$$

Per la derivabilità: $b = 1$.

Quindi $a = 1$, $b = 1$, e la funzione è:

$$f(x) = \begin{cases} e^x + 2 & \text{se } x \le 0 \\[4pt] x^2 + x + 3 & \text{se } x > 0 \end{cases}$$

**Grafico qualitativo.** Per $x \le 0$: la funzione è un arco di esponenziale traslata verticalmente di $2$ unità, strettamente crescente e con concavità verso l'alto. Per $x > 0$: la funzione $x^2+x+3$ è una parabola con concavità verso l'alto, crescente nell'intervallo $(0;\,+\infty)$. Le due parti si raccordano in $x = 0$ con $f(0) = 3$ e derivata $f'(0) = 1$.

*(grafico — vedi PDF p.110)*

**Teorema di Lagrange su $[-1;\,6]$.**

La funzione $f$ è continua su $[-1;\,6]$ e derivabile su $(-1;\,6)$, quindi soddisfa le ipotesi del teorema di Lagrange.

Cerchiamo $c \in (-1;\,6)$ tale che:

$$f'(c) = \frac{f(6) - f(-1)}{6-(-1)}.$$

Calcoliamo: $f(6) = 36 + 6 + 3 = 45$, $f(-1) = e^{-1} + 2$.

$$f'(c) = \frac{45 - e^{-1} - 2}{7} = \frac{43 - e^{-1}}{7}.$$

Poiché $\dfrac{43 - e^{-1}}{7} \approx \dfrac{43 - 0{,}368}{7} \approx 6{,}09 > 1$, il punto $c$ cade nell'intervallo $(0;\,6)$ (dove $f'(x) = 2x+1$):

$$2c + 1 = \frac{43 - e^{-1}}{7} \implies c = \frac{43 - e^{-1} - 7}{14} = \frac{36 - e^{-1}}{14} \approx \frac{36 - 0{,}368}{14} \approx 2{,}54.$$

Si verifica che $c \approx 2{,}54 \in (-1;\,6)$. ✓

*(vedi PDF p.109)*

---

*Fonte:* [📄 PDF p.85](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
