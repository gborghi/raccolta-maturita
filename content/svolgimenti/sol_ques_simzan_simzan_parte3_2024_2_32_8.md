---
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Quesito 8 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2024_2_32_8
of_item: ques_simzan_simzan_parte3_2024_2_32_8
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2024_2_32_8|Simulazione Zanichelli 2024 — SimZan parte3 n.2 — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte3_2024_2_32|Simulazione Zanichelli 2024 — SimZan parte3 n.2]]

In figura è rappresentato il grafico $\gamma$ della funzione $f(x) = x^4 - 2x^3 + 2$.

*(grafico — vedi PDF p.35)*

Trova le tangenti inflessionali di $\gamma$, poi verifica che le aree delle due regioni di piano delimitate da $\gamma$ e da ciascuna delle tangenti sono uguali.

**Derivate:**

$$f'(x) = 4x^3 - 6x^2 = 2x^2(2x-3).$$
$$f''(x) = 12x^2 - 12x = 12x(x-1).$$

$f''(x) = 0 \Rightarrow x = 0$ oppure $x = 1$.

**Punti di flesso:**
- $F_1 = (0;\; f(0)) = (0; 2)$;
- $F_2 = (1;\; f(1)) = (1; 1)$.

**Coefficienti angolari delle tangenti inflessionali:**

$$m_1 = f'(0) = 0, \quad m_2 = f'(1) = 4 - 6 = -2.$$

**Equazioni delle tangenti inflessionali:**

- In $F_1 = (0; 2)$: $t_1: y = 2$ (retta orizzontale).
- In $F_2 = (1; 1)$: $t_2: y - 1 = -2(x-1) \Rightarrow y = -2x + 3$.

**Intersezioni di $\gamma$ con $t_1: y = 2$:**

$$x^4 - 2x^3 + 2 = 2 \Rightarrow x^3(x-2) = 0 \Rightarrow x = 0 \text{ o } x = 2.$$

**Intersezioni di $\gamma$ con $t_2: y = -2x+3$:**

$$x^4 - 2x^3 + 2 = -2x + 3 \Rightarrow x^4 - 2x^3 + 2x - 1 = 0.$$

Scomponiamo: $x = 1$ è radice doppia; dividendo per $(x-1)^2$:

$$x^4 - 2x^3 + 2x - 1 = (x-1)^3(x+1).$$

Quindi: $x = 1$ (tripla) e $x = -1$.

*(grafico — vedi PDF p.67)*

**Calcolo delle aree:**

Dal grafico: $f(x) \leq 2$ in $[0; 2]$ e $f(x) \leq -2x+3$ in $[-1; 1]$, quindi:

$$A_1 = \int_0^2 [2 - f(x)]\,dx = \int_0^2 (2 - x^4 + 2x^3 - 2)\,dx = \int_0^2 (-x^4 + 2x^3)\,dx$$
$$= \left[-\frac{x^5}{5} + \frac{x^4}{2}\right]_0^2 = \left(-\frac{32}{5} + \frac{16}{2}\right) - 0 = -\frac{32}{5} + 8 = \frac{8}{5}.$$

$$A_2 = \int_{-1}^1 [-2x + 3 - f(x)]\,dx = \int_{-1}^1 (-x^4 + 2x^3 - 2x + 1)\,dx$$
$$= \left[-\frac{x^5}{5} + \frac{x^4}{2} - x^2 + x\right]_{-1}^1$$
$$= \left(-\frac{1}{5} + \frac{1}{2} - 1 + 1\right) - \left(\frac{1}{5} + \frac{1}{2} - 1 - 1\right)$$
$$= \left(-\frac{1}{5} + \frac{1}{2}\right) - \left(\frac{1}{5} + \frac{1}{2} - 2\right) = -\frac{2}{5} + 2 = \frac{8}{5}.$$

Le due regioni hanno la stessa area: $A_1 = A_2 = \dfrac{8}{5}$. $\square$

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
