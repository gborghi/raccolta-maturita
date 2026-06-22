---
title: 1947 tutti_temi 1947 — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1947_tutti_temi_4
of_item: prob_1947_tutti_temi_4
prova_id: prova_1947_tutti_temi
anno: '1947'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1947
---

**Problema:** [[Problemi/prob_1947_tutti_temi_4|1947 tutti_temi 1947 — Problema 4]] · **Prova:** [[Prove/1947_tutti_temi|1947 Tema di maturita]]

**La parabola** $y = 4 - x^2$ ha zeri $x = \pm 2$: $A(-2,0)$ e $B(2,0)$; vertice $V(0,4)$.

**1. Tangenti da $C(0,8)$.** La retta $y = mx + 8$ interseca la parabola in $4 - x^2 = mx + 8$, $x^2 + mx + 4 = 0$. La tangenza richiede $\Delta = m^2 - 16 = 0$, $m = \pm 4$. Per $m = 4$: $x^2 + 4x + 4 = (x+2)^2 = 0$, tangente in $A(-2,0)$. Per $m = -4$: tangente in $B(2,0)$. Confermato.

Le tangenti sono $t_A\colon y = 4x + 8$ e $t_B\colon y = -4x + 8$.

**2. Retta $y = z$ con $0 < z < 4$.** Intersezioni con $t_A$: $z = 4x + 8$, $x = (z-8)/4$. Con $t_B$: $z = -4x + 8$, $x = (8-z)/4$. Dunque $|DE| = \frac{8-z}{4} - \frac{z-8}{4} = \frac{8-z}{2}$.

Intersezioni con la parabola: $4 - x^2 = z$, $x = \pm\sqrt{4-z}$. Dunque $|FH| = 2\sqrt{4-z}$.

![[_attachments/prob_1947_tutti_temi_4/prob_1947_tutti_temi_4_fig1.svg]]

\captionof{figure}{Parabola $y=4-x^2$, vertice $V(0,4)$, e le tangenti da $C(0,8)$ che toccano la curva in $A(-2,0)$ e $B(2,0)$.}

La condizione $|DE|/|FH| = k$ diventa:
$$
\frac{(8-z)/2}{2\sqrt{4-z}} = k, \qquad \frac{8-z}{4\sqrt{4-z}} = k.
$$
Posto $u = \sqrt{4-z}$ (con $0 < u \le 2$, $z = 4-u^2$): $\frac{4+u^2}{4u} = k$, cioè $u^2 - 4ku + 4 = 0$, $u = 2k \pm 2\sqrt{k^2-1}$.

Per avere $0 < u \le 2$: serve $k \ge 1$ (discriminante $\ge 0$) e $u \le 2$, cioè $k - \sqrt{k^2-1} \le 1$. Per $k = 1$: $u = 2$, $z = 0$ (la retta è l'asse $x$). Per $k > 1$ le due soluzioni danno $z = 4 - u^2$ con $0 \le z < 4$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.89](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
