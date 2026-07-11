---
title: 1948 tutti_temi 1948 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1948_tutti_temi_2
of_item: prob_1948_tutti_temi_2
prova_id: prova_1948_tutti_temi
anno: '1948'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1948
---

**Problema:** [[Problemi/prob_1948_tutti_temi_2|1948 tutti_temi 1948 — Problema 2]] · **Prova:** [[Prove/1948_tutti_temi|1948 Tema di maturita]]

La parabola è $y = x - x^2/2$, con $O(0,0)$ e $A(2,0)$.

**Coordinate dei vertici.** La retta $OB$ ha pendenza $k$: $y = kx$. Intersezione con la parabola: $kx = x - x^2/2$, $x^2/2 + (k-1)x = 0$, $x = 0$ oppure $x = 2(1-k)$. Per $0 < k < 1$: $B = (2(1-k),\; 2k(1-k))$. Per simmetria (retta $EC$ parallela a $OB$ passante per $E$), $E$ ha ascissa $x_E = 2k$ e $y_E = 2k(1-k)$.

Poiché $EB$ è parallela a $OA$: $y_E = y_B$, confermato. $CD$ parallela a $OA$ a un'altezza $y_{CD}$: i punti $C$ e $D$ sono simmetrici rispetto all'asse $x = 1$ sulla parabola.

Dall'inclinazione: $C = (2(1-k), 2k(1-k))$... La costruzione completa conduce a sei vertici determinati da $k$.

L'area dell'esagono è una funzione di $k$ che, derivata e posta uguale a zero, dà il valore ottimale $k = 1/2$ (per simmetria dell'arco parabolico), con area massima $S_{\max} = 1$ (l'area dell'intero segmento parabolico è $\int_0^2 (x - x^2/2)\,\de x = 2 - 4/3 = 2/3$, e l'esagono ottimale ne copre una frazione significativa).

L'intervallo di variazione è $0 < k < 1$.

![[_attachments/prob_1948_tutti_temi_2/prob_1948_tutti_temi_2_fig1.svg]]

\captionof{figure}{Area tra $y=x$ e $y=x^2$ su $[0,1]$: $S=1/6$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.90](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
