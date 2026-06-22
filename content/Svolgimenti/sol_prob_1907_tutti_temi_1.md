---
title: 1907 tutti_temi 1907 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1907_tutti_temi_1
of_item: prob_1907_tutti_temi_1
prova_id: prova_1907_tutti_temi
anno: '1907'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1907
---

**Problema:** [[Problemi/prob_1907_tutti_temi_1|1907 tutti_temi 1907 — Problema 1]] · **Prova:** [[Prove/1907_tutti_temi|1907 Tema di maturità]]

Cono inscritto in una sfera di raggio $r$. Sia $h$ l'altezza del cono, $R$ il raggio di base. Il vertice e il cerchio di base sono sulla sfera, dunque $R^2=h(2r-h)$.

L'apotema è $\ell=\sqrt{R^2+h^2}=\sqrt{h(2r-h)+h^2}=\sqrt{2rh}$.

Superficie totale del cono: $A_c=\pi R^2+\pi R\ell=\pi R(R+\ell)$.

Zona sferica di altezza $h$: $A_z=2\pi rh$.

Dal rapporto $A_c/A_z=q$:
$$
\frac{R(R+\sqrt{2rh})}{2rh}=q.
$$
Con $R=\sqrt{h(2r-h)}$:
$$
\frac{\sqrt{h(2r-h)}\bigl(\sqrt{h(2r-h)}+\sqrt{2rh}\bigr)}{2rh}=q.
$$
Semplificando ($t=h/r$):
$$
\frac{\sqrt{t(2-t)}\bigl(\sqrt{t(2-t)}+\sqrt{2t}\bigr)}{2t}=q.
$$
Per $q=1$: $\sqrt{t(2-t)}\bigl(\sqrt{t(2-t)}+\sqrt{2t}\bigr)=2t$. Provando $t=1$ ($h=r$): $\sqrt{1}(\sqrt{1}+\sqrt{2})=1+\sqrt{2}\approx 2{,}414\ne 2$. Risolvendo numericamente: $t\approx 1{,}12$, cioè
$$
\boxed{h\approx 1{,}12 r}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.55](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
