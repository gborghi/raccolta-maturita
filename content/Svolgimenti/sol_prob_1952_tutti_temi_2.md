---
title: 1952 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1952_tutti_temi_2
of_item: prob_1952_tutti_temi_2
prova_id: prova_1952_tutti_temi
anno: '1952'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1952
---

**Problema:** [[Problemi/prob_1952_tutti_temi_2|1952 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1952_tutti_temi|1952 Tema di maturita]]

**Elementi del triangolo.** $\hat{B} = 60^\circ$, $\hat{C} = 45^\circ$, dunque $\hat{A} = 75^\circ$ e $|BC| = a$. Per il teorema dei seni: $\frac{a}{\sin 75^\circ} = \frac{|AB|}{\sin 45^\circ} = \frac{|AC|}{\sin 60^\circ}$.

Con $\sin 75^\circ = \frac{\sqrt{6}+\sqrt{2}}{4}$: $|AB| = \frac{a\sin 45^\circ}{\sin 75^\circ} = \frac{a\sqrt{2}/2}{(\sqrt{6}+\sqrt{2})/4} = \frac{2a\sqrt{2}}{\sqrt{6}+\sqrt{2}} = a(\sqrt{3}-1)$ (razionalizzando).

Analogamente, $|AC| = \frac{a\sin 60^\circ}{\sin 75^\circ} = \frac{a\sqrt{3}/2}{(\sqrt{6}+\sqrt{2})/4} = \frac{2a\sqrt{3}}{\sqrt{6}+\sqrt{2}} = a\sqrt{2}(\sqrt{3}-1)\cdot\frac{\sqrt{3}+1}{2}$... Per brevità, poniamo $c = |AB|$, $b = |AC|$.

**Volume del solido di rotazione.** Quando il triangolo $ABC$ ruota attorno a una retta $r$ passante per $A$ e esterna al triangolo, il volume del solido è dato dal teorema di Pappo-Guldino:
$$
V = 2\pi \bar{d} \cdot S,
$$
dove $S$ è l'area del triangolo e $\bar{d}$ è la distanza del baricentro $G$ dalla retta $r$. L'area è $S = \frac{1}{2}cb\sin A = \frac{1}{2}cb\sin 75^\circ$.

Il baricentro $G$ ha coordinate rispetto ad $A$: $G = \frac{1}{3}(B + C)$ (con $A$ all'origine). La distanza di $G$ dalla retta $r$ passante per $A$ dipende dall'angolo $x$ fra $r$ e $AB$. Se $B$ dista $d_B = c\sin x$ e $C$ dista $d_C = b\sin(x - 75^\circ)$ dalla retta (con opportune convenzioni di segno):
$$
\bar{d} = \frac{d_B + d_C}{3} = \frac{c\sin x + b\sin(x - 75^\circ)}{3}.
$$
Il volume è proporzionale a $c\sin x + b\sin(x - 75^\circ)$, cioè una combinazione sinusoidale in $x$. Il massimo e il minimo si trovano con la formula $R\sin(x + \varphi)$, dove $R = \sqrt{(c + b\cos 75^\circ)^2 + (b\sin 75^\circ)^2}$ e $\tan\varphi = \frac{-b\sin 75^\circ}{c + b\cos 75^\circ}$.

**Verifica per $r \parallel BC$.** In questo caso la distanza del baricentro da $r$ è $h/3$ dove $h$ è l'altezza del triangolo da $A$ su $BC$: $h = c\sin 60^\circ = c\sqrt{3}/2$. Il volume diventa $V = 2\pi \cdot \frac{h}{3}\cdot S = \frac{2\pi h S}{3}$, che si verifica coerente con l'espressione trovata.

Il volume è **massimo** quando $\sin(x + \varphi) = 1$ e **minimo** quando $\sin(x + \varphi) = -1$ (se tale valore è ammissibile, cioè se la retta resta esterna al triangolo).

![[_attachments/prob_1952_tutti_temi_2/prob_1952_tutti_temi_2_fig1.svg]]

\captionof{figure}{Cono circolare retto di raggio $r$ e altezza $h$. La quantita' ottimale (volume, area laterale, apotema) si trova imponendo i vincoli del problema.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.94](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
