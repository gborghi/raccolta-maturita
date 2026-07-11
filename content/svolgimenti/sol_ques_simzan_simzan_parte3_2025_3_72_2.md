---
title: 'Simulazione Zanichelli 2025 — SimZan parte3 #3 — Quesito 2 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2025_3_72_2
of_item: ques_simzan_simzan_parte3_2025_3_72_2
prova_id: prova_simzan_simzan_parte3_2025_3_72
anno: '2025'
pdf: SimZan_parte3.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2025
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2025_3_72_2|Simulazione Zanichelli 2025 — SimZan parte3 n.3 — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte3_2025_3_72|Simulazione Zanichelli 2025 — SimZan parte3 n.3]]

$$
r: \begin{cases} x = 2t \\ y = 2 + t \\ z = 1 - t \end{cases}, \; t \in \mathbb{R}; \qquad s: \begin{cases} x + 2y = 0 \\ x + 2y - z = 3 \end{cases}.
$$

### Punto a — Verifica che $r$ e $s$ sono sghembe

$\vec{d}_r = (2,1,-1)$; vettore direzione di $s$:

$$
\vec{d}_s = (1,2,0)\times(1,2,-1) = (-2,1,0).
$$

Non parallele (vettori non proporzionali). Un punto su $r$: $r_0 = (0,2,1)$ (per $t=0$). Un punto su $s$: $s_0 = (0,0,-3)$ (da $z = -3$, $x = y = 0$). $\overrightarrow{r_0 s_0} = (0,-2,-4)$.

$$
\begin{vmatrix} 0 & -2 & -4 \\ 2 & 1 & -1 \\ -2 & 1 & 0 \end{vmatrix} = 0 - (-2)(0-2) + (-4)(2+2) = -4 - 16 = -20 \neq 0.
$$

Le rette sono **sghembe**.

### Punto b — Piano contenente $s$ passante per $P$

$r$ incontra $Oxy$ in $z=0$: $t=1$, $P = (2,3,0)$.

$\overrightarrow{s_0 P} = (2,3,3)$. Normale al piano:

$$
\vec{n} = (-2,1,0)\times(2,3,3) = (3,6,-8).
$$

$$
\boxed{3x + 6y - 8z - 24 = 0.}
$$

---

*Fonte:* [📄 PDF p.72](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
