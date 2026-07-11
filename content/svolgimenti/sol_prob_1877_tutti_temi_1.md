---
title: 1877 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1877_tutti_temi_1
of_item: prob_1877_tutti_temi_1
prova_id: prova_1877_tutti_temi
anno: '1877'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1877
---

**Problema:** [[Problemi/prob_1877_tutti_temi_1|1877 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1877_tutti_temi|1877 Tema di maturita]]

La minima distanza sulla sfera è l'arco di cerchio massimo. Usiamo la formula della distanza angolare:
$$
\cos d=\sin\varphi_1\sin\varphi_2+\cos\varphi_1\cos\varphi_2\cos(\lambda_2-\lambda_1),
$$
dove $\varphi_1=41{,}902^\circ$, $\varphi_2=48{,}210^\circ$ sono le latitudini.

Le longitudini sono espresse in parti di giorno. Roma è a ovest di Berlino di $0{,}003$ giorni, Vienna a est di $0{,}008$ giorni. In gradi:
$$
\Delta\lambda=(0{,}003+0{,}008)\times 360^\circ=3{,}960^\circ.
$$
Calcoliamo:
$$
\begin{aligned}

\sin 41{,}902^\circ &\approx 0{,}6680, \quad \cos 41{,}902^\circ\approx 0{,}7441, \\
\sin 48{,}210^\circ &\approx 0{,}7453, \quad \cos 48{,}210^\circ\approx 0{,}6668, \\
\cos 3{,}960^\circ &\approx 0{,}9976.

\end{aligned}
$$
Dunque:
$$
\cos d=0{,}6680\cdot 0{,}7453+0{,}7441\cdot 0{,}6668\cdot 0{,}9976\approx 0{,}4978+0{,}4950=0{,}9928.

d\approx 6{,}88^\circ.
$$
Con raggio terrestre $R\approx 6371$~km:
$$
\boxed{\text{distanza}\approx 6371\cdot\frac{6{,}88\cdot\pi}{180}\approx 765\text{ km}}.
$$
![[_attachments/prob_1877_tutti_temi_1/prob_1877_tutti_temi_1_fig1.svg]]

\captionof{figure}{Rombo $ABCD$ con diagonali perpendicolari $AC\perp BD$ che si bisecano in $O$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.45](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
