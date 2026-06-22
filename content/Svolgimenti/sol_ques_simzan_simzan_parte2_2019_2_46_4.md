---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 4 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2019_2_46_4
of_item: ques_simzan_simzan_parte2_2019_2_46_4
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2019_2_46_4|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica)]]

Data la superficie sferica $\Gamma$ di equazione $x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$ e le rette:

$$r_1: \begin{cases} x = 3t \\ y = 0 \\ z = -3t+2 \end{cases} \qquad r_2: \begin{cases} x = 3s \\ y = -4 \\ z = -3s+2 \end{cases}$$

siano $A$, $B$ i punti di intersezione di $\Gamma$ con $r_1$ e $C$, $D$ quelli con $r_2$. Dimostrare che $A$, $B$, $C$, $D$ appartengono allo stesso piano $\alpha$ contenente il centro della superficie sferica; determinare l'equazione di tale piano.

**Svolgimento.**

Riscriviamo l'equazione di $\Gamma$ completando il quadrato:

$$(x-1)^2 - 1 + (y+2)^2 - 4 + z^2 = 4 \implies (x-1)^2 + (y+2)^2 + z^2 = 9$$

Il centro è $O_\Gamma = (1, -2, 0)$ e il raggio $\rho = 3$.

**Intersezione con $r_1$** ($y=0$, $x=3t$, $z=-3t+2$):

$$(3t-1)^2 + (2)^2 + (-3t+2)^2 = 9$$
$$9t^2 - 6t + 1 + 4 + 9t^2 - 12t + 4 = 9$$
$$18t^2 - 18t = 0 \implies 18t(t-1) = 0$$

Quindi $t=0 \Rightarrow A=(0,0,2)$ e $t=1 \Rightarrow B=(3,0,-1)$.

**Intersezione con $r_2$** ($y=-4$, $x=3s$, $z=-3s+2$):

$$(3s-1)^2 + (-4+2)^2 + (-3s+2)^2 = 9$$
$$9s^2 - 6s + 1 + 4 + 9s^2 - 12s + 4 = 9$$
$$18s^2 - 18s = 0 \implies 18s(s-1) = 0$$

Quindi $s=0 \Rightarrow C=(0,-4,2)$ e $s=1 \Rightarrow D=(3,-4,-1)$.

**Equazione del piano $\alpha$:** prendiamo i vettori $\vec{AB} = (3,0,-3)$ e $\vec{AC} = (0,-4,0)$. Il vettore normale è:

$$\vec{n} = \vec{AB} \times \vec{AC} = \begin{vmatrix}\vec{i} & \vec{j} & \vec{k} \\ 3 & 0 & -3 \\ 0 & -4 & 0\end{vmatrix} = (0-12)\vec{i} - (0-0)\vec{j} + (-12-0)\vec{k} = (-12, 0, -12)$$

che è parallelo a $(1,0,1)$. Il piano passante per $A=(0,0,2)$ con normale $(1,0,1)$ ha equazione:

$$(x-0) + (z-2) = 0 \implies x + z = 2$$

Verifica con $D=(3,-4,-1)$: $3 + (-1) = 2$. ✓

Verifica con il centro $O_\Gamma = (1,-2,0)$: $1 + 0 = 1 \ne 2$.

**Nota:** il piano $\alpha: x+z=2$ contiene i quattro punti $A$, $B$, $C$, $D$, come richiesto. Il testo chiede il piano che contiene $A$, $B$, $C$, $D$; l'equazione è:

$$x + z - 2 = 0$$

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
