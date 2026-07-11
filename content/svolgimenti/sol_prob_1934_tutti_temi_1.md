---
title: 1934 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1934_tutti_temi_1
of_item: prob_1934_tutti_temi_1
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

**Problema:** [[Problemi/prob_1934_tutti_temi_1|1934 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1934_tutti_temi|1934 Tema di maturita]]

Il trapezio ha $AB=a$ (lato perpendicolare alle basi), $BC=CD=c$, $AD=d<a$.

L'area del trapezio: $S=\frac{(AD+BC)}{2}\cdot AB=\frac{(d+c)a}{2}$.

L'area del triangolo: $S'=\frac{a\cdot k}{2}$. Dunque $(d+c)a=ak$, cioè $d+c=k$.

Dal fatto che $BC=CD=c$ e le basi sono perpendicolari ad $AB$, il punto $C=(a,c)$, $D=(0,d)$ (con $A=(0,0)$, $B=(a,0)$). Dunque $CD=\sqrt{a^2+(c-d)^2}=c$.

$a^2+(c-d)^2=c^2$, $a^2=c^2-(c-d)^2=(c-c+d)(c+c-d)=d(2c-d)$.

Con $c=k-d$: $a^2=d(2k-2d-d)=d(2k-3d)$.

$3d^2-2kd+a^2=0$, $d=\frac{2k\pm\sqrt{4k^2-12a^2}}{6}=\frac{k\pm\sqrt{k^2-3a^2}}{3}$.

**Discussione:** il problema è possibile se $k^2\geq 3a^2$, cioè $k\geq a\sqrt{3}$, e $d>0$, $d<a$.
$$
\boxed{d=\frac{k\pm\sqrt{k^2-3a^2}}{3},\qquad c=k-d}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.80](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
