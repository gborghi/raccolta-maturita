---
title: 1949 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1949_tutti_temi_2
of_item: prob_1949_tutti_temi_2
prova_id: prova_1949_tutti_temi
anno: '1949'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1949
---

**Problema:** [[Problemi/prob_1949_tutti_temi_2|1949 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1949_tutti_temi|1949 Tema di maturita]]

**Intersezioni.** $x^2 - 2x = 4x - x^2$, cioè $2x^2 - 6x = 0$, $2x(x-3) = 0$: i punti d'incontro sono $O(0,0)$ e $A(3,3)$.

Nella regione $0 \le x \le 3$, la parabola $g(x) = 4x - x^2$ sta sopra e $f(x) = x^2 - 2x$ sta sotto.

**Corda verticale massima.** La lunghezza del segmento verticale è:
$$
MN(x) = g(x) - f(x) = (4x - x^2) - (x^2 - 2x) = 6x - 2x^2.
$$
$MN'(x) = 6 - 4x = 0$ per $x = 3/2$. Il massimo è $MN(3/2) = 9 - 9/2 = 9/2$. Dunque $a = 3/2$.

**Corda orizzontale massima.** Per la retta $y = b$, intersechiamo con le due parabole:
- $x^2 - 2x = b$ dà $x = 1 \pm \sqrt{1+b}$ (ramo con $b \ge -1$);
- $4x - x^2 = b$ dà $x = 2 \pm \sqrt{4-b}$ (con $b \le 4$).

La corda $PQ$ va dall'intersezione sinistra di $g$ all'intersezione destra di $f$ (entro la regione): $PQ(b) = (1 + \sqrt{1+b}) - (2 - \sqrt{4-b}) = \sqrt{1+b} + \sqrt{4-b} - 1$. Per massimizzare: $\frac{\de}{\de b}PQ = \frac{1}{2\sqrt{1+b}} - \frac{1}{2\sqrt{4-b}} = 0$, dunque $\sqrt{4-b} = \sqrt{1+b}$, $b = 3/2$. Il massimo è $PQ(3/2) = \sqrt{5/2} + \sqrt{5/2} - 1 = \sqrt{10} - 1$.

**Area della regione comune.**
$$
S = \int_0^3 (6x - 2x^2) \de x = \left[3x^2 - \frac{2x^3}{3}\right]_0^3 = 27 - 18 = 9.
$$
![[_attachments/prob_1949_tutti_temi_2/prob_1949_tutti_temi_2_fig1.svg]]

\captionof{figure}{Area della regione compresa tra le parabole $y=x^2-2x$ e $y=4x-x^2$: $S=9$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.91](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
