---
title: 1943 tutti_temi 1943 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1943_tutti_temi_1
of_item: prob_1943_tutti_temi_1
prova_id: prova_1943_tutti_temi
anno: '1943'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1943
---

**Problema:** [[Problemi/prob_1943_tutti_temi_1|1943 tutti_temi 1943 — Problema 1]] · **Prova:** [[Prove/1943_tutti_temi|1943 Tema di maturità]]

Siano $h$ l'ipotenusa e $c$ l'altro cateto. Dalle due condizioni:
$$
3h-c=d, \qquad b^{2}+c^{2}=h^{2}.
$$
Dalla prima $c=3h-d$; sostituendo nella seconda:
$$
b^{2}+(3h-d)^{2}=h^{2} \Longrightarrow 8h^{2}-6dh+(b^{2}+d^{2})=0.
$$
**Discriminante ridotto:** $\Delta/4=9d^{2}-8(b^{2}+d^{2})=d^{2}-8b^{2}$.

Per avere soluzioni reali: $d^{2}\ge 8b^{2}$, cioè $\boxed{d\ge 2\sqrt{2}\,b}$.

**Soluzioni:**
$$
h=\frac{3d\pm\sqrt{d^{2}-8b^{2}}}{8}, \qquad c=3h-d=\frac{d\pm 3\sqrt{d^{2}-8b^{2}}}{8}.
$$
Affinché le soluzioni siano *geometricamente accettabili* ($c>0$ e $h>b>0$), in generale è significativa la radice col segno~$+$ nell'espressione di~$c$.

**Esempio numerico.** Con $b=2$, $d=6$: $\Delta/4=36-32=4$, $h=(18\pm 2)/8$, quindi $h=5/2$ oppure $h=2$. Per $h=5/2$: $c=15/2-6=3/2$. Verifica: $b^{2}+c^{2}=4+9/4=25/4=h^{2}\checkmark$. Il caso $h=2$ dà $c=0$ (degenere).

![[_attachments/prob_1943_tutti_temi_1/prob_1943_tutti_temi_1_fig1.svg]]

\captionof{figure}{Caso $b=2,d=6$: ipotenusa $h=5/2$ e cateto incognito $c=3/2$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.89](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
