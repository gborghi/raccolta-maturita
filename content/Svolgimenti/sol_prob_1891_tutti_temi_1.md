---
title: 1891 tutti_temi 1891 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1891_tutti_temi_1
of_item: prob_1891_tutti_temi_1
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

**Problema:** [[Problemi/prob_1891_tutti_temi_1|1891 tutti_temi 1891 — Problema 1]] · **Prova:** [[Prove/1891_tutti_temi|1891 Tema di maturita]]

Il solido è un cilindro di raggio $r$ e altezza $h$, con due semisfere di raggio $r$ alle estremità. La superficie esterna è la somma della superficie laterale del cilindro e della superficie della sfera completa (le due semisfere):
$$
s=2\pi r h+4\pi r^2.
$$
La sezione assiale del solido è un rettangolo di base $2r$ e altezza $h$, con due semicerchi di raggio $r$ alle estremità. Il perimetro è:
$$
2p=2h+2\pi r,\qquad\text{da cui}\qquad h=p-\pi r.
$$
Sostituendo nella prima equazione:
$$
s=2\pi r(p-\pi r)+4\pi r^2=2\pi rp-2\pi^2 r^2+4\pi r^2=2\pi rp+r^2(4\pi-2\pi^2).
$$
Riordinando: $(2\pi^2-4\pi)r^2-2\pi p\,r+s=0$, ossia $2\pi(\pi-2)r^2-2\pi p\,r+s=0$.
$$
r=\frac{2\pi p\pm\sqrt{4\pi^2 p^2-8\pi(\pi-2)s}}{4\pi(\pi-2)}=\frac{p\pm\sqrt{p^2-\frac{2(\pi-2)s}{\pi}}}{2(\pi-2)}.
$$
Il problema ammette soluzioni reali se $p^2\ge\frac{2(\pi-2)s}{\pi}$, ossia $s\le\frac{\pi p^2}{2(\pi-2)}$. Inoltre si richiede $r>0$ e $h=p-\pi r>0$, cioè $r<p/\pi$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.50](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
