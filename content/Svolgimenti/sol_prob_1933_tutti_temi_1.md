---
title: 1933 tutti_temi 1933 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1933_tutti_temi_1
of_item: prob_1933_tutti_temi_1
prova_id: prova_1933_tutti_temi
anno: '1933'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1933
---

**Problema:** [[Problemi/prob_1933_tutti_temi_1|1933 tutti_temi 1933 — Problema 1]] · **Prova:** [[Prove/1933_tutti_temi|1933 Tema di maturita]]

**Impostazione.** $A$ e $B$ sono gli estremi del diametro, $|AB| = 2r$. Sia $P$ un punto della semicirconferenza con $\widehat{BAP} = \theta$ ($0 < \theta < \pi/2$). Allora $|AP| = 2r\cos\theta$ (diametro per angolo inscritto).

La proiezione $M$ di $P$ sulla perpendicolare in $B$ ad $AB$ ha coordinate (prendendo $A$ come origine e $AB$ sull'asse $x$): $P = (2r\cos^2\theta,\; 2r\sin\theta\cos\theta) = (r(1+\cos 2\theta),\; r\sin 2\theta)$, e $M = (2r,\; r\sin 2\theta)$.

Dunque $|PM| = 2r - r(1+\cos 2\theta) = r(1 - \cos 2\theta) = 2r\sin^2\theta$.

La condizione è $|AP| + |PM| = l$: $2r\cos\theta + 2r\sin^2\theta = l$, cioè $2r\sin^2\theta + 2r\cos\theta - l = 0$. Ponendo $t = \cos\theta$:
$$
-2rt^2 + 2rt + 2r - l = 0, \qquad 2rt^2 - 2rt + (l - 2r) = 0, \qquad t = \frac{2r \pm \sqrt{4r^2 - 8r(l-2r)}}{4r} = \frac{1 \pm \sqrt{5 - 2l/r}}{2}.
$$
Soluzioni reali per $l \le 5r/2$. Inoltre $0 < t < 1$ impone $l > 2r$.

**Volume del solido di rotazione.** Il trapezio $APMB$ ha i vertici $A(0,0)$, $P$, $M(2r, r\sin 2\theta)$, $B(2r, 0)$ e ruota attorno ad $AB$ (asse $x$). Il volume si calcola con il metodo dei dischi e dei coni:
$$
V = \pi\int_0^{2r} [f(x)]^2 \de x,
$$
dove $f(x)$ è la funzione che descrive il bordo superiore del trapezio. Semplificando con le formule dei tronchi di cono, $V$ è una funzione di $\theta$. Derivando e ponendo $V'(\theta) = 0$ si ottiene la posizione ottimale.

Usando il teorema di Pappo-Guldino: $V = 2\pi\bar{y} \cdot S_{\text{trapezio}}$, dove $\bar{y}$ è l'ordinata del baricentro del trapezio. L'area del trapezio è $S = \frac{1}{2}(|AB| + |PM|) \cdot |y_P| = \frac{1}{2}(2r + 2r\sin^2\theta) \cdot r\sin 2\theta$... Il calcolo diretto porta a $V(\theta)$ il cui massimo si trova derivando rispetto a $\theta$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.79](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
