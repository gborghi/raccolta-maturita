---
title: 1936 Sessione autunnale — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1936_tutti_temi_4
of_item: prob_1936_tutti_temi_4
prova_id: prova_1936_tutti_temi
anno: '1936'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1936
---

**Problema:** [[Problemi/prob_1936_tutti_temi_4|1936 Sessione autunnale — Problema 4]] · **Prova:** [[Prove/1936_tutti_temi|1936 Tema di maturita]]

**1. Intersezioni con l'asse $x$.** $x^2 - 6x + 8 = (x-2)(x-4) = 0$: $A(2,0)$ e $B(4,0)$.

**2. Intersezione con l'asse $y$.** Per $x = 0$: $y = 8$, dunque $C(0,8)$.

**3. Vertice.** $x_V = 3$, $y_V = 9 - 18 + 8 = -1$. Il vertice (punto di minimo) è $V(3,-1)$.

**4. Tangente in $A$.** $y'(x) = 2x - 6$, $y'(2) = -2$. La tangente in $A(2,0)$ è $y = -2(x-2) = -2x + 4$. Il suo punto d'intersezione con l'asse $y$ è $T(0,4)$. La retta $BC$ ha pendenza $\frac{8-0}{0-4} = -2$: effettivamente la tangente in $A$ è parallela a $BC$.

![[_attachments/prob_1936_tutti_temi_4/prob_1936_tutti_temi_4_fig1.svg]]

\captionof{figure}{Parabola $y=x^2-6x+8$ con vertice $V(3,-1)$, tangente in $A(2,0)$ e la retta $BC$ (parallele).}

**Area del quadrangolo.** $M = (1,0)$ è il punto medio di $OA$, $R = (0,2)$ è il punto medio di $OT$. Sia $P = (p,\, p^2 - 6p + 8)$ un punto dell'arco fra $A$ e $C$, con $0 \le p \le 2$. L'area del quadrilatero $OMPR$ si calcola con la formula di Gauss (o dei lacci):
$$
S = \frac{1}{2}|x_O(y_M - y_R) + x_M(y_P - y_O) + x_P(y_R - y_M) + x_R(y_O - y_P)|.
$$
Con $O(0,0)$, $M(1,0)$, $P(p,\,p^2-6p+8)$, $R(0,2)$:
$$
S = \frac{1}{2}|0 + (p^2-6p+8) + 2p + 0| = \frac{1}{2}(p^2 - 4p + 8).
$$
L'area è $k$ quando $p^2 - 4p + 8 = 2k$, cioè $p = 2 \pm \sqrt{2k - 4}$. Per avere $0 \le p \le 2$ serve $p = 2 - \sqrt{2k-4}$ con $2 \le k \le 4$.

**Condizione di secanza/tangenza con $y = mx$.** $mx = x^2 - 6x + 8$, $x^2 - (6+m)x + 8 = 0$. Discriminante: $\Delta = (6+m)^2 - 32 = m^2 + 12m + 4$. Tangenza per $\Delta = 0$: $m = -6 \pm 4\sqrt{2}$. Secanza per $\Delta > 0$: $m < -6 - 4\sqrt{2}$ oppure $m > -6 + 4\sqrt{2}$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.82](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
