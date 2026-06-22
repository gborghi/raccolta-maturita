---
title: 1890 tutti_temi 1890 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1890_tutti_temi_2
of_item: prob_1890_tutti_temi_2
prova_id: prova_1890_tutti_temi
anno: '1890'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1890
---

**Problema:** [[Problemi/prob_1890_tutti_temi_2|1890 tutti_temi 1890 — Problema 2]] · **Prova:** [[Prove/1890_tutti_temi|1890 Tema di maturità]]

Sia il cono con vertice $V$, semiangolo di apertura $\alpha$, asse verticale. La sfera $i$-esima ha raggio $r_i$ e centro a distanza $d_i$ dal vertice sull'asse.

**Tangenza al cono:** la distanza dal centro della sfera alla superficie conica è $d_i\sin\alpha$, che deve uguagliare $r_i$:
$$
r_i=d_i\sin\alpha.
$$
**Tangenza tra sfere consecutive:** i centri sono sull'asse, dunque $d_{i+1}-d_i=r_i+r_{i+1}$.

Sostituendo $r_i=d_i\sin\alpha$:
$$
d_{i+1}-d_i=d_i\sin\alpha+d_{i+1}\sin\alpha,

d_{i+1}(1-\sin\alpha)=d_i(1+\sin\alpha),

\frac{d_{i+1}}{d_i}=\frac{1+\sin\alpha}{1-\sin\alpha}=k.
$$
Analogamente $\frac{r_{i+1}}{r_i}=\frac{d_{i+1}\sin\alpha}{d_i\sin\alpha}=k$.

Dato il raggio $r_1$ della sfera suprema e la distanza $d_1$ del suo centro dal vertice (con $\sin\alpha=r_1/d_1$), per la sfera $n$-esima:
$$
\boxed{r_n=r_1\cdot k^{n-1},\quad d_n=d_1\cdot k^{n-1},\quad k=\frac{1+\sin\alpha}{1-\sin\alpha}=\frac{d_1+r_1}{d_1-r_1}}.
$$
I raggi e le distanze formano progressioni geometriche con la stessa ragione $k$.

![[_attachments/prob_1890_tutti_temi_2/prob_1890_tutti_temi_2_fig1.svg]]

\captionof{figure}{Cono circolare retto di vertice $V$, raggio di base $R$ e altezza $h$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.50](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
