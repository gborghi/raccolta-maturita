---
title: 1941 tutti_temi 1941 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1941_tutti_temi_3
of_item: prob_1941_tutti_temi_3
prova_id: prova_1941_tutti_temi
anno: '1941'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1941
---

**Problema:** [[Problemi/prob_1941_tutti_temi_3|1941 tutti_temi 1941 — Problema 3]] · **Prova:** [[Prove/1941_tutti_temi|1941 Tema di maturità]]

Con $O$ origine, $OA$ asse $x$, $OB$ asse $y$: $A=(r,0)$, $B=(0,r)$, $C=(\frac{r}{2},0)$, $P=(r\cos\theta,r\sin\theta)$ con $0<\theta<90^\circ$.

$D$ è la proiezione di $P$ su $OB$ (asse $y$): $D=(0,r\sin\theta)$.

$|PC|^2=(r\cos\theta-\frac{r}{2})^2+r^2\sin^2\theta=r^2\cos^2\theta-r^2\cos\theta+\frac{r^2}{4}+r^2\sin^2\theta=r^2-r^2\cos\theta+\frac{r^2}{4}=\frac{5r^2}{4}-r^2\cos\theta$.

$|PD|^2=r^2\cos^2\theta$ (distanza orizzontale).

$|PC|^2+|PD|^2=\frac{5r^2}{4}-r^2\cos\theta+r^2\cos^2\theta=kr^2$:
$$
\cos^2\theta-\cos\theta+\frac{5}{4}-k=0.
$$
Ponendo $t=\cos\theta$: $t^2-t+(\frac{5}{4}-k)=0$, $t=\frac{1\pm\sqrt{1-5+4k}}{2}=\frac{1\pm\sqrt{4k-4}}{2}=\frac{1\pm 2\sqrt{k-1}}{2}$.

**Discussione:** $k\geq 1$ per soluzioni reali. Poi $0<t<1$ (cioè $0<\theta<90^\circ$): $t=\frac{1-2\sqrt{k-1}}{2}$ o $t=\frac{1+2\sqrt{k-1}}{2}$.

$t\leq 1$: $\frac{1+2\sqrt{k-1}}{2}\leq 1 \Leftrightarrow \sqrt{k-1}\leq\frac{1}{2} \Leftrightarrow k\leq\frac{5}{4}$.

$\boxed{\text{Per }1\leq k\leq\frac{5}{4}: \text{due soluzioni; per }k=1: \theta=0\text{ (degenere); per }k=\frac{5}{4}: \theta=60^\circ\text{ (unica)}.}$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.87](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
