---
title: 1936 Sessione autunnale — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1936_tutti_temi_3
of_item: prob_1936_tutti_temi_3
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

**Problema:** [[Problemi/prob_1936_tutti_temi_3|1936 Sessione autunnale — Problema 3]] · **Prova:** [[Prove/1936_tutti_temi|1936 Tema di maturita]]

Con $O$ origine, $OA$ asse $x$, $OB$ asse $y$: $A=(2r,0)$, $B=(0,2r)$, $M=(r,0)$, $N=(0,r)$.

$P=(2r\cos\theta,2r\sin\theta)$ con $0<\theta<90^\circ$.

Area del quadrangolo $MONP$ con la formula di Gauss:
$$
S=\frac{1}{2}|x_M(y_O-y_N)+x_O(y_N-y_P)+x_N(y_P-y_M)+x_P(y_M-y_O)|.
$$
$=\frac{1}{2}|r(0-r)+0(r-2r\sin\theta)+0(2r\sin\theta-0)+2r\cos\theta(0-0)|$...

Più direttamente: $S=S_{MON}+S_{ONP}=\frac{r^2}{2}+\frac{1}{2}|0\cdot(r-2r\sin\theta)+0\cdot(2r\sin\theta)+2r\cos\theta\cdot r|=\frac{r^2}{2}+r^2\cos\theta$.

$S=kr^2$: $\frac{1}{2}+\cos\theta=k$, dunque $\cos\theta=k-\frac{1}{2}$, $\theta=\arccos(k-\frac{1}{2})$.

Soluzione possibile per $-1\leq k-\frac{1}{2}\leq 1$, cioè $-\frac{1}{2}\leq k\leq\frac{3}{2}$, e $0<\theta<90^\circ$ richiede $0<k-\frac{1}{2}<1$, cioè $\frac{1}{2}<k<\frac{3}{2}$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.82](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
