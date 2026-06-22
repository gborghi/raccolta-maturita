---
title: 1909 tutti_temi 1909 — Problema 5 — Svolgimento
tipo: soluzione
item_id: sol_prob_1909_tutti_temi_5
of_item: prob_1909_tutti_temi_5
prova_id: prova_1909_tutti_temi
anno: '1909'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1909
---

**Problema:** [[Problemi/prob_1909_tutti_temi_5|1909 tutti_temi 1909 — Problema 5]] · **Prova:** [[Prove/1909_tutti_temi|1909 Tema di maturita]]

Quadrato $ABCD$ con lato $a$, $P$ su $AB$ con $AP=x$, $BP=a-x$. Ruotando attorno ad $AB$:

Il triangolo $APD$ genera un cono con altezza $x$, raggio $a$ (distanza di $D$ dall'asse $AB$), apotema $\ell_1=\sqrt{x^2+a^2}$. Superficie laterale: $S_1=\pi a\sqrt{x^2+a^2}$.

Il triangolo $BPC$ genera un cono con altezza $a-x$, raggio $a$, apotema $\ell_2=\sqrt{(a-x)^2+a^2}$. Superficie laterale: $S_2=\pi a\sqrt{(a-x)^2+a^2}$.

Dal vincolo $S_1+S_2=\pi r^2$:
$$
a\left[\sqrt{x^2+a^2}+\sqrt{(a-x)^2+a^2}\right]=r^2.
$$
Ponendo $u=x/a\in[0,1]$:
$$
\sqrt{u^2+1}+\sqrt{(1-u)^2+1}=\frac{r^2}{a^2}.
$$
Per simmetria, la funzione a sinistra ha minimo per $u=1/2$, dove vale $2\sqrt{5/4}=\sqrt{5}$. Dunque la condizione è risolvibile se e solo se $r^2/a^2\ge\sqrt{5}$, cioè $r\ge a\cdot 5^{1/4}$.

Per il caso $r^2=a^2\sqrt{5}$ (valore minimo): $\boxed{x=a/2}$, cioè $P$ è il punto medio di $AB$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.56](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
