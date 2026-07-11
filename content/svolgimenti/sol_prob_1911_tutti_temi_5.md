---
title: 1911 tutti_temi 1911 — Problema 5 — Svolgimento
tipo: soluzione
item_id: sol_prob_1911_tutti_temi_5
of_item: prob_1911_tutti_temi_5
prova_id: prova_1911_tutti_temi
anno: '1911'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1911
---

**Problema:** [[Problemi/prob_1911_tutti_temi_5|1911 tutti_temi 1911 — Problema 5]] · **Prova:** [[Prove/1911_tutti_temi|1911 Tema di maturita]]

Tetraedro regolare con spigolo $a$. Altezza: $H=a\sqrt{2/3}$.

Un piano parallelo a una faccia a distanza $h$ dal vertice opposto taglia il tetraedro in un triangolo equilatero simile, con rapporto $k=h/H$, quindi lato $s=ka=\frac{ha}{H}$.

Il prisma retto inscritto ha base questo triangolo e altezza uguale a $H-h$ (dalla sezione alla faccia parallela).

Area laterale del prisma: $A_L=3s(H-h)=\frac{3a}{H}h(H-h)$.

Uguagliando all'area di un quadrato di lato $\ell$: $A_L=\ell^2$:
$$
\frac{3a}{H}h(H-h)=\ell^2.
$$
$h^2-Hh+\frac{\ell^2 H}{3a}=0$, dunque:
$$
h=\frac{H\pm\sqrt{H^2-\frac{4\ell^2 H}{3a}}}{2}.
$$
Per $A_L$ massimo: $h=H/2$, con $A_L^{\max}=\frac{3aH}{4}=\frac{3a^2}{4}\sqrt{2/3}=\frac{a^2\sqrt{6}}{4}$.
$$
\boxed{h=\frac{H}{2}\pm\frac{1}{2}\sqrt{H^2-\frac{4\ell^2 H}{3a}},\quad\text{con }H=a\sqrt{\frac{2}{3}}}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.58](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
