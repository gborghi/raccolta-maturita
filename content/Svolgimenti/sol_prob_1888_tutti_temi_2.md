---
title: 1888 tutti_temi 1888 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1888_tutti_temi_2
of_item: prob_1888_tutti_temi_2
prova_id: prova_1888_tutti_temi
anno: '1888'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1888
---

**Problema:** [[Problemi/prob_1888_tutti_temi_2|1888 tutti_temi 1888 — Problema 2]] · **Prova:** [[Prove/1888_tutti_temi|1888 Tema di maturità]]

Siano $x>y$ i due numeri. Poniamo $x-y=d$ e $x^3-y^3=D$.

Ricordiamo che $x^3-y^3=(x-y)(x^2+xy+y^2)=d(x^2+xy+y^2)$, quindi:
$$
x^2+xy+y^2=\frac{D}{d}.
$$
Poniamo $s=x+y$. Allora $x^2+y^2=s^2-2xy$ e $xy=\frac{s^2-d^2}{4}$ (poiché $x=\frac{s+d}{2}$, $y=\frac{s-d}{2}$).

Sostituendo: $(s^2-2\cdot\frac{s^2-d^2}{4})+\frac{s^2-d^2}{4}=\frac{D}{d}$:
$$
s^2-\frac{s^2-d^2}{2}+\frac{s^2-d^2}{4}=\frac{D}{d}, \qquad \frac{4s^2-2s^2+2d^2+s^2-d^2}{4}=\frac{D}{d},

\frac{3s^2+d^2}{4}=\frac{D}{d}, \qquad s^2=\frac{4D-d^3}{3d}.
$$
La soluzione esiste (numeri reali) se $\frac{4D-d^3}{3d}\geq 0$, cioè se $\frac{D}{d}\geq\frac{d^2}{4}$, ovvero $x^2+xy+y^2\geq\frac{(x-y)^2}{4}\cdot\frac{4}{1}$, che è sempre verificato.
$$
\boxed{x=\frac{s+d}{2}=\frac{d}{2}+\frac{1}{2}\sqrt{\frac{4D-d^3}{3d}}, \qquad y=\frac{s-d}{2}=-\frac{d}{2}+\frac{1}{2}\sqrt{\frac{4D-d^3}{3d}}}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.49](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
