---
title: 1891 tutti_temi 1891 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1891_tutti_temi_2
of_item: prob_1891_tutti_temi_2
prova_id: prova_1891_tutti_temi
anno: '1891'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1891
---

**Problema:** [[Problemi/prob_1891_tutti_temi_2|1891 tutti_temi 1891 — Problema 2]] · **Prova:** [[Prove/1891_tutti_temi|1891 Tema di maturita]]

Siano $a=BC$, $b=CA$, $c=AB$. Il punto $D$ divide $BC$ in $BD=x$ e $DC=a-x$.

La condizione $AD^2=BD\cdot DC=x(a-x)$ deve essere soddisfatta.

Per il teorema di Stewart (o direttamente), con il piede dell'altezza da $A$ a quota $h_A$ e con la proiezione del piede dell'altezza a distanza $d_B$ da $B$:
$$
AD^2=AB^2-BD^2+2\cdot BD\cdot d_B-d_B^2=\ldots
$$
Più direttamente, dal teorema del coseno nel triangolo $ABD$:
$$
AD^2=c^2-x^2+2x\cdot\frac{c^2+a^2-b^2}{2a}\cdot\frac{a}{1}\ldots
$$
Usiamo Stewart: $AD^2=\frac{b^2x+c^2(a-x)}{a}-x(a-x)$.

La condizione diventa:
$$
\frac{b^2x+c^2(a-x)}{a}-x(a-x)=x(a-x), \qquad b^2x+c^2(a-x)=2ax(a-x).
$$
Sviluppando: $2ax^2-2a^2x+b^2x+c^2a-c^2x=0$, cioè:
$$
2ax^2-(2a^2-b^2+c^2)x+ac^2=0.
$$
La soluzione è:
$$
\boxed{x=\frac{(2a^2-b^2+c^2)\pm\sqrt{(2a^2-b^2+c^2)^2-8a^2c^2}}{4a}}.
$$
La discussione richiede che il discriminante sia non negativo e che $0<x<a$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.50](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
