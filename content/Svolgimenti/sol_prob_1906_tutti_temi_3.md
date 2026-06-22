---
title: 1906 tutti_temi 1906 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1906_tutti_temi_3
of_item: prob_1906_tutti_temi_3
prova_id: prova_1906_tutti_temi
anno: '1906'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1906
---

**Problema:** [[Problemi/prob_1906_tutti_temi_3|1906 tutti_temi 1906 — Problema 3]] · **Prova:** [[Prove/1906_tutti_temi|1906 Tema di maturita]]

Un cono circoscritto a una sfera di raggio $r$ lungo un cerchio minore. Sia $h_s$ l'altezza del segmento sferico interno al cono. Il cono ha vertice esterno alla sfera e il cerchio di tangenza è a distanza $d$ dal centro della sfera, con raggio di tangenza $\rho=\sqrt{r^2-d^2}$.

Il volume del segmento sferico (calotta) di altezza $h_s$: $V_s=\frac{\pi h_s^2}{3}(3r-h_s)$.

Il volume del cono corrispondente (vertice nel punto di tangenza del cono con la sfera, base il cerchio di tangenza) dipende dalla geometria specifica.

Per il rapporto $V_{\text{cono}}/V_{\text{calotta}}=q$, risolvendo per $h_s$:

$h_s=r-d$ dove $d$ è la distanza del piano di taglio dal centro. Dal vincolo volumetrico:
$$
q=\frac{\frac{1}{3}\pi\rho^2\cdot H_c}{\frac{\pi h_s^2}{3}(3r-h_s)},
$$
dove $H_c$ è l'altezza del cono. Risolvendo per $h_s$ in funzione di $r$ e $q$:
$$
\boxed{h_s=r\left(1-\frac{1}{\sqrt{1+q}}\right)}.
$$
Per $q=1/4$: $h_s=r\left(1-\frac{1}{\sqrt{5/4}}\right)=r\left(1-\frac{2}{\sqrt{5}}\right)\approx 0{,}106\,r$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.54](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
