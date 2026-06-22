---
title: 1911 tutti_temi 1911 — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1911_tutti_temi_4
of_item: prob_1911_tutti_temi_4
prova_id: prova_1911_tutti_temi
anno: '1911'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1911
---

**Problema:** [[Problemi/prob_1911_tutti_temi_4|1911 tutti_temi 1911 — Problema 4]] · **Prova:** [[Prove/1911_tutti_temi|1911 Tema di maturita]]

Due corde $c_1=AB$ e $c_2=AC$ da un punto $A$ sulla circonferenza di raggio $r$, con angolo $\varphi$ tra loro e somma $c_1+c_2=a$.

Per il teorema dei seni nel triangolo $ABC$ inscritto: $BC=2r\sin\varphi$.

Per il teorema del coseno: $BC^2=c_1^2+c_2^2-2c_1 c_2\cos\varphi$, cioè $4r^2\sin^2\varphi=(c_1+c_2)^2-2c_1 c_2(1+\cos\varphi)$.

$4r^2\sin^2\varphi=a^2-2c_1 c_2\cdot 2\cos^2(\varphi/2)$.

Dunque $c_1 c_2=\frac{a^2-4r^2\sin^2\varphi}{4\cos^2(\varphi/2)}$.

Le corde sono radici di $t^2-at+\frac{a^2-4r^2\sin^2\varphi}{4\cos^2(\varphi/2)}=0$:
$$
\boxed{c_{1,2}=\frac{a\pm\sqrt{a^2-\frac{a^2-4r^2\sin^2\varphi}{\cos^2(\varphi/2)}}}{2}}.
$$
Per $\varphi=90°$: $c_1 c_2=\frac{a^2-4r^2}{2}$, $c_{1,2}=\frac{a\pm\sqrt{8r^2-a^2}}{2}$ (con $a\le 2r\sqrt{2}$).

Per $\varphi=60°$: $c_1 c_2=\frac{a^2-3r^2}{3}$, $c_{1,2}=\frac{a\pm\sqrt{4r^2-a^2/3}}{2}$.

Per $\varphi=30°$: $c_1 c_2=\frac{a^2-r^2}{2(1+\cos 30°)}$, risolvibile analogamente.

![[_attachments/prob_1911_tutti_temi_4/prob_1911_tutti_temi_4_fig1.svg]]

\captionof{figure}{Triangolo scaleno $ABC$ con mediana $CM$ relativa a $AB$ ($M$ punto medio).}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.58](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
