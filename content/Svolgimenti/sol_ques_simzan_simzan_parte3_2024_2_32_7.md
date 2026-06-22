---
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2024_2_32_7
of_item: ques_simzan_simzan_parte3_2024_2_32_7
prova_id: prova_simzan_simzan_parte3_2024_2_32
anno: '2024'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2024_2_32_7|Simulazione Zanichelli 2024 — SimZan parte3 #2 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte3_2024_2_32|Simulazione Zanichelli 2024 — SimZan parte3 #2]]

Data una generica funzione polinomiale di terzo grado $f(x) = ax^3 + bx^2 + cx + d$, dimostra che le rette tangenti al grafico in punti con ascissa simmetrica rispetto al punto di flesso $x_F$ sono parallele tra loro.

**Dimostrazione:** Il punto di flesso ha ascissa $x_F = -\frac{b}{3a}$ (da $f''(x_F) = 0$). Due punti simmetrici a $x_F$ hanno la forma $x_F - h$ e $x_F + h$.

$f'(x) = 3ax^2 + 2bx + c$. Calcoliamo:

$$m_1 = f'(x_F - h) = 3a(x_F-h)^2 + 2b(x_F-h) + c,$$
$$m_2 = f'(x_F + h) = 3a(x_F+h)^2 + 2b(x_F+h) + c.$$

Sottraendo:

$$m_2 - m_1 = 3a \cdot 4x_Fh + 2b \cdot 2h = 4h(3ax_F + b) = 4h\!\left(3a \cdot \left(-\frac{b}{3a}\right) + b\right) = 4h \cdot 0 = 0.$$

Dunque $m_1 = m_2$, cioè le rette tangenti sono parallele. $\square$

**Applicazione alla funzione $y = -x^3 + 3x^2 - 2x - 1$:**

$f'(x) = -3x^2 + 6x - 2$; $f''(x) = -6x + 6 = 0 \Rightarrow x_F = 1$.

Il punto $A$ ha ascissa $-1$ (distante $2$ da $x_F = 1$); il simmetrico $B$ ha ascissa $3$.

$$m = f'(-1) = -3 - 6 - 2 = -11 = f'(3) = -27 + 18 - 2. \quad \checkmark$$

$f(-1) = 1 + 3 + 2 - 1 = 5$. Quindi $A = (-1; 5)$.

$f(3) = -27 + 27 - 6 - 1 = -7$. Quindi $B = (3; -7)$.

Equazione delle rette tangenti:

$$t_A: y - 5 = -11(x+1) \Rightarrow y = -11x - 6.$$
$$t_B: y + 7 = -11(x-3) \Rightarrow y = -11x + 26.$$

Le due rette $t_A: y = -11x - 6$ e $t_B: y = -11x + 26$ sono parallele (stesso coefficiente angolare $-11$). $\square$

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
