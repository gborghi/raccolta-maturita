---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 1 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2022_5_139_1
of_item: ques_simzan_simzan_parte2_2022_5_139_1
prova_id: prova_simzan_simzan_parte2_2022_5_139
anno: '2022'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2022
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2022_5_139_1|Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 #5]]

La funzione $f'(x)$ è definita e continua nell'intervallo $[0; 6]$ *(grafico — vedi PDF p.141)*.

Dal grafico si ricavano le espressioni a tratti di $f'(x)$:

- In $[0; 3]$: retta passante per $(0; -3)$ e $(3; 3)$, quindi $f'(x) = 2x - 3$.
- In $[3; 4]$: retta passante per $(3; 3)$ e $(4; 1)$, quindi $f'(x) = -2x + 9$.
- In $[4; 6]$: retta di equazione $y = 1$, quindi $f'(x) = 1$.

Integrando con $f(0) = 0$:

**In $[0; 3]$:** $f(x) = x^2 - 3x$. ($f(0) = 0$ $\checkmark$)

Continuità in $x = 3$: $f(3) = 9 - 9 = 0$.

**In $[3; 4]$:** $f(x) = -x^2 + 9x + C_2$.
Continuità: $-9 + 27 + C_2 = 0 \Rightarrow C_2 = -18$.
Quindi $f(x) = -x^2 + 9x - 18$.

Continuità in $x = 4$: $f(4) = -16 + 36 - 18 = 2$.

**In $[4; 6]$:** $f(x) = x + C_3$.
Continuità: $4 + C_3 = 2 \Rightarrow C_3 = -2$.
Quindi $f(x) = x - 2$.

La funzione analitica è:

$$f(x) = \begin{cases} x^2 - 3x, & 0 \le x < 3 \\ -x^2 + 9x - 18, & 3 \le x < 4 \\ x - 2, & 4 \le x \le 6 \end{cases}$$

*(grafico — vedi PDF p.155)*

**Teorema di Lagrange:** $f(x)$ è continua su $[0; 6]$; verifichiamo la derivabilità nei punti di raccordo:
- in $x = 3$: $f'(3^-) = 2\cdot3 - 3 = 3 = -2\cdot3 + 9 = f'(3^+)$. $\checkmark$
- in $x = 4$: $f'(4^-) = -8 + 9 = 1 = f'(4^+)$. $\checkmark$

Quindi $f$ soddisfa le ipotesi del teorema su $[0; 6]$. Il teorema garantisce l'esistenza di $c \in (0; 6)$ con:

$$f'(c) = \frac{f(6) - f(0)}{6 - 0} = \frac{4 - 0}{6} = \frac{2}{3}.$$

Cerchiamo i valori:
- **In $(0; 3)$:** $2c - 3 = \tfrac{2}{3} \Rightarrow c = \tfrac{11}{6} \approx 1{,}83 \in (0, 3)$. $\checkmark$
- **In $(3; 4)$:** $-2c + 9 = \tfrac{2}{3} \Rightarrow c = \tfrac{25}{6} \approx 4{,}17 \notin (3, 4)$. $\times$
- **In $(4; 6)$:** $1 \neq \tfrac{2}{3}$. Nessuna soluzione.

L'unico punto che soddisfa il teorema è $c = \dfrac{11}{6}$.

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
