---
title: 1903 tutti_temi 1903 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1903_tutti_temi_2
of_item: prob_1903_tutti_temi_2
prova_id: prova_1903_tutti_temi
anno: '1903'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1903
---

**Problema:** [[Problemi/prob_1903_tutti_temi_2|1903 tutti_temi 1903 — Problema 2]] · **Prova:** [[Prove/1903_tutti_temi|1903 Tema di maturita]]

Sia $r$ il raggio del cerchio. Gli assi dell'ellisse soddisfano $2a+2b=4r$ (somma doppia del diametro) e $a:b=5:3$, da cui $a=\frac{5r}{4}$, $b=\frac{3r}{4}$.

I punti di intersezione si trovano risolvendo $x^2+y^2=r^2$ e $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$. Dalla prima: $y^2=r^2-x^2$. Sostituendo:
$$
\frac{x^2}{25r^2/16}+\frac{r^2-x^2}{9r^2/16}=1, \qquad \frac{16x^2}{25r^2}+\frac{16(r^2-x^2)}{9r^2}=1.
$$
Semplificando: $\frac{16x^2}{25}-\frac{16x^2}{9}=-16+\frac{16r^2}{9r^2}\cdot r^2$. Risolvendo per $x^2$ e $y^2$ si determinano i vertici del rettangolo.

Il rettangolo ha semiassi $x_0$ e $y_0$. Ruotando attorno all'asse minore dell'ellisse (asse $y$), il solido generato è un cilindro di raggio $x_0$ e altezza $2y_0$:
$$
V=\pi x_0^2\cdot 2y_0.
$$
I valori esatti di $x_0$ e $y_0$ si ricavano dal sistema sopra.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.51](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
