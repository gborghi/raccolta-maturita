---
title: 1883 Sessione estiva — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1883_tutti_temi_3
of_item: prob_1883_tutti_temi_3
prova_id: prova_1883_tutti_temi
anno: '1883'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1883
---

**Problema:** [[Problemi/prob_1883_tutti_temi_3|1883 Sessione estiva — Problema 3]] · **Prova:** [[Prove/1883_tutti_temi|1883 Tema di maturita]]

Notiamo che $37^\circ 30'=\frac{75^\circ}{2}$. Usiamo la formula di bisezione:
$$
\tan\frac{\theta}{2}=\frac{1-\cos\theta}{\sin\theta}=\frac{\sin\theta}{1+\cos\theta}.
$$
Con $\theta=75^\circ=45^\circ+30^\circ$:
$$
\sin 75^\circ=\sin(45^\circ+30^\circ)=\frac{\sqrt{6}+\sqrt{2}}{4}, \qquad \cos 75^\circ=\cos(45^\circ+30^\circ)=\frac{\sqrt{6}-\sqrt{2}}{4}.
$$
Dunque:
$$
\tan 37^\circ 30'=\frac{1-\cos 75^\circ}{\sin 75^\circ}=\frac{1-\frac{\sqrt{6}-\sqrt{2}}{4}}{\frac{\sqrt{6}+\sqrt{2}}{4}}=\frac{4-\sqrt{6}+\sqrt{2}}{\sqrt{6}+\sqrt{2}}.
$$
Razionalizzando (moltiplicando per $\frac{\sqrt{6}-\sqrt{2}}{\sqrt{6}-\sqrt{2}}$):
$$
\tan 37^\circ 30'=\frac{(4-\sqrt{6}+\sqrt{2})(\sqrt{6}-\sqrt{2})}{6-2}=\frac{4\sqrt{6}-4\sqrt{2}-6+\sqrt{12}+\sqrt{12}-2}{4}.
$$
Semplificando: $\sqrt{12}=2\sqrt{3}$, si ottiene:
$$
\boxed{\tan 37^\circ 30'=\sqrt{6}+\sqrt{2}-\sqrt{3}-2\approx 0{,}7673}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.48](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
