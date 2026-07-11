---
title: 1940 tutti_temi 1940 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1940_tutti_temi_3
of_item: prob_1940_tutti_temi_3
prova_id: prova_1940_tutti_temi
anno: '1940'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1940
---

**Problema:** [[Problemi/prob_1940_tutti_temi_3|1940 tutti_temi 1940 — Problema 3]] · **Prova:** [[Prove/1940_tutti_temi|1940 Tema di maturita]]

Poniamo $AB=x$. La PA con ragione $d$: $BC=x+d$, $DE=x+2d$, $EF=x+3d$.

$AC^2=AB^2+BC^2=x^2+(x+d)^2=2x^2+2xd+d^2$ (triangolo rettangolo in $B$).

Per il triangolo $DEF$ con $\widehat{DEF}=60^\circ$ (teorema del coseno):
$$
DF^2=DE^2+EF^2-2\cdot DE\cdot EF\cdot\cos 60^\circ=(x+2d)^2+(x+3d)^2-(x+2d)(x+3d).
$$
Sviluppando: $(x+2d)^2+(x+3d)^2-(x+2d)(x+3d)=x^2+4xd+4d^2+x^2+6xd+9d^2-x^2-5xd-6d^2=x^2+5xd+7d^2$.

La condizione: $AC^2+DF^2=md^2$:
$$
2x^2+2xd+d^2+x^2+5xd+7d^2=md^2, \qquad 3x^2+7xd+(8-m)d^2=0.

x=\frac{-7d\pm\sqrt{49d^2-12(8-m)d^2}}{6}=\frac{d(-7\pm\sqrt{12m-47})}{6}.
$$
**Discussione:** soluzioni reali se $m\geq\frac{47}{12}\approx 3{,}92$. Inoltre $x>0$ richiede $\sqrt{12m-47}>7$, cioè $m>\frac{96}{12}=8$.

![[_attachments/prob_1940_tutti_temi_3/prob_1940_tutti_temi_3_fig1.svg]]

\captionof{figure}{Area tra $y=\sin x$ e $y=0$ su $[0,\pi]$: $S=2$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.86](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
