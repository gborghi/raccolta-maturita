---
title: 1941 tutti_temi 1941 — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1941_tutti_temi_4
of_item: prob_1941_tutti_temi_4
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

**Problema:** [[Problemi/prob_1941_tutti_temi_4|1941 tutti_temi 1941 — Problema 4]] · **Prova:** [[Prove/1941_tutti_temi|1941 Tema di maturità]]

Siano $a\geq b$ i cateti, $c$ l'ipotenusa, con $a+b=2s$.

La mediana relativa al cateto $a$ (il maggiore) ha il piede nel punto medio di $a$. Con un sistema di coordinate con i cateti sugli assi: la mediana dal vertice opposto al cateto $a$ è:
$$
m_a=\frac{1}{2}\sqrt{4b^2+a^2} \quad\text{(formula della mediana per il lato }a\text{)}.
$$
Dunque $\frac{1}{2}\sqrt{a^2+4b^2}=m$, cioè $a^2+4b^2=4m^2$.

Con $b=2s-a$: $a^2+4(2s-a)^2=4m^2$, $a^2+16s^2-16sa+4a^2=4m^2$:
$$
5a^2-16sa+(16s^2-4m^2)=0, \qquad a=\frac{16s\pm\sqrt{256s^2-20(16s^2-4m^2)}}{10}=\frac{16s\pm\sqrt{-64s^2+80m^2}}{10}.
$$
$=\frac{16s\pm 4\sqrt{5m^2-4s^2}}{10}=\frac{8s\pm 2\sqrt{5m^2-4s^2}}{5}$.

**Discussione:** $5m^2\geq 4s^2$ necessario; inoltre $a\geq b=2s-a$, cioè $a\geq s$.

![[_attachments/prob_1941_tutti_temi_4/prob_1941_tutti_temi_4_fig1.svg]]

\captionof{figure}{Area tra $y=x^3$ e $y=x$ su $[0,1]$: $S=1/4$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.87](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
