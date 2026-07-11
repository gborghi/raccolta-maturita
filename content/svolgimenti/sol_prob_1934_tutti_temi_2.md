---
title: 1934 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1934_tutti_temi_2
of_item: prob_1934_tutti_temi_2
prova_id: prova_1934_tutti_temi
anno: '1934'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1934
---

**Problema:** [[Problemi/prob_1934_tutti_temi_2|1934 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1934_tutti_temi|1934 Tema di maturita]]

La parabola è $y = \frac{-4x^2 + 8x + 5}{4} = -x^2 + 2x + \frac{5}{4} = -(x-1)^2 + \frac{9}{4}$.

**1. Intersezioni con gli assi.** Con l'asse $y$ ($x = 0$): $y = 5/4$. Con l'asse $x$ ($y = 0$): $-4x^2 + 8x + 5 = 0$, $4x^2 - 8x - 5 = 0$, $x = \frac{8 \pm \sqrt{64+80}}{8} = \frac{8 \pm 12}{8}$. Dunque $x = 5/2$ e $x = -1/2$.

**2. Ordinata massima.** $y'(x) = -2x + 2 = 0$ per $x = 1$. L'ordinata massima è $y(1) = 9/4$, nel vertice $V(1, 9/4)$.

**3. Area del triangolo $OMN$.** I punti con ordinata $11/16$: $-(x-1)^2 + 9/4 = 11/16$, $(x-1)^2 = 9/4 - 11/16 = 25/16$, $x - 1 = \pm 5/4$. Dunque $M(-1/4,\; 11/16)$ e $N(9/4,\; 11/16)$. La base $MN$ ha lunghezza $5/2$ e si trova all'altezza $h = 11/16$. L'area del triangolo con vertice $O(0,0)$:
$$
S = \frac{1}{2}|MN| \cdot h = \frac{1}{2}\cdot\frac{5}{2}\cdot\frac{11}{16} = \frac{55}{64}.
$$
**Parte facoltativa: triangolo di area massima.** Per ordinata generica $y_0$, i punti della parabola hanno ascisse $x = 1 \pm \sqrt{9/4 - y_0}$, con $|MN| = 2\sqrt{9/4 - y_0}$ e altezza dal vertice $O$ pari a $y_0$. L'area è:
$$
A(y_0) = \frac{1}{2} \cdot 2\sqrt{\frac{9}{4} - y_0} \cdot y_0 = y_0\sqrt{\frac{9}{4} - y_0}, \qquad 0 < y_0 < \frac{9}{4}.
$$
Per il massimo: $\frac{\de}{\de y_0}A^2 = \frac{\de}{\de y_0}\left[y_0^2\left(\frac{9}{4} - y_0\right)\right] = \frac{9}{2}y_0 - 3y_0^2 = 3y_0\left(\frac{3}{2} - y_0\right) = 0$ per $y_0 = 3/2$. L'area massima è $A = \frac{3}{2}\sqrt{9/4 - 3/2} = \frac{3}{2}\cdot\frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{4}$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.80](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
