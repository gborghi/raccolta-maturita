---
title: 1956 tutti_temi 1956 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1956_tutti_temi_1
of_item: prob_1956_tutti_temi_1
prova_id: prova_1956_tutti_temi
anno: '1956'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1956
---

**Problema:** [[Problemi/prob_1956_tutti_temi_1|1956 tutti_temi 1956 — Problema 1]] · **Prova:** [[Prove/1956_tutti_temi|1956 Tema di maturita]]

**Condizione di intersezione in $x = 2$.** Per $P_1(2, y_1)$: dalla $C_1$, $y_1 = -\frac{4-a}{2} = \frac{a-4}{2}$; dalla $C_2$, $y_1 = b/2$. Dunque $b = a - 4$, con $a > 4$ affinché $P_1$ sia nel primo quadrante ($y_1 > 0$).

**Intersezioni fra le curve.** $-\frac{x^2-a}{2} = \frac{a-4}{x}$, cioè $-x(x^2-a) = 2(a-4)$, $-x^3 + ax = 2a - 8$, $x^3 - ax + 2a - 8 = 0$. Sapendo che $x = 2$ è radice: $(x-2)(x^2+2x-a+4) = 0$. Le altre intersezioni vengono da $x^2 + 2x - a + 4 = 0$: $x = -1 \pm \sqrt{a-3}$ (reali per $a > 3$).

**Tangenti a $C_2$ in $P_2$ e $P_3$.** La derivata di $C_2$: $y' = -(a-4)/x^2$. In un punto $(x_0, (a-4)/x_0)$ la tangente è $y - (a-4)/x_0 = -(a-4)/x_0^2 \cdot (x - x_0)$, cioè $y = -(a-4)x/x_0^2 + 2(a-4)/x_0$.

Per $y = 0$: $x = 2x_0$. Dunque $T_i$ ha ascissa $2x_i$. La distanza fra $T_2$ e $T_3$ è $|2x_2 - 2x_3| = 2|x_2 - x_3| = 2 \cdot 2\sqrt{a-3} = 4\sqrt{a-3}$.

Imponendo $4\sqrt{a-3} = 4k(a-2)$: $\sqrt{a-3} = k(a-2)$, cioè $a - 3 = k^2(a-2)^2$. Questa è un'equazione di secondo grado in $a$: $k^2 a^2 - (4k^2+1)a + 4k^2 + 3 = 0$.

**Parte facoltativa.** Le ordinate di $P_2$ e $P_3$ delimitano una striscia orizzontale. L'area della regione compresa fra le parallele e la parabola $C_1$ si calcola integrando.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.97](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
