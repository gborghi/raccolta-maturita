---
title: 1903 tutti_temi 1903 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1903_tutti_temi_1
of_item: prob_1903_tutti_temi_1
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

**Problema:** [[Problemi/prob_1903_tutti_temi_1|1903 tutti_temi 1903 — Problema 1]] · **Prova:** [[Prove/1903_tutti_temi|1903 Tema di maturita]]

Sia $r$ il raggio della sfera. Il tronco di cono è circoscritto alla sfera: la sfera tocca entrambe le basi e la superficie laterale. Se i raggi delle basi sono $R_1$ e $R_2$ ($R_1>R_2$) e l'altezza è $h=R_1+R_2$ (per la tangenza), allora il raggio della sfera inscritta nel tronco è
$$
r=\frac{h\sqrt{R_1 R_2}}{R_1+R_2}\cdot\frac{2}{1}=\sqrt{R_1 R_2}\quad\text{(formula del raggio inscritto nel tronco)}.
$$
In realtà, per un tronco di cono circoscritto a una sfera di raggio $r$: $h=2r$ e $R_1 R_2=r^2$ (dalla tangenza). Dunque $R_2=r^2/R_1$.

Il volume del tronco: $V_T=\frac{\pi h}{3}(R_1^2+R_1R_2+R_2^2)=\frac{2\pi r}{3}(R_1^2+r^2+r^4/R_1^2)$.

Il volume della sfera: $V_S=\frac{4}{3}\pi r^3$.

Dato $V_T/V_S=q$:
$$
\frac{R_1^2+r^2+r^4/R_1^2}{2r^2}=q.
$$
Ponendo $t=R_1/r$: $\frac{t^2+1+1/t^2}{2}=q$, cioè $t^2+1/t^2=2q-1$.

$u=t+1/t$: $u^2-2=2q-1$, $u=\sqrt{2q+1}$, $t+1/t=\sqrt{2q+1}$.

$t=\frac{\sqrt{2q+1}\pm\sqrt{2q-3}}{2}$ (per $q>3/2$).
$$
\boxed{R_1=r\cdot\frac{\sqrt{2q+1}+\sqrt{2q-3}}{2},\quad R_2=r\cdot\frac{\sqrt{2q+1}-\sqrt{2q-3}}{2}}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.51](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
