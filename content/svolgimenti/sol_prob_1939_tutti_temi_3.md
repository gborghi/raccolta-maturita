---
title: 1939 tutti_temi 1939 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1939_tutti_temi_3
of_item: prob_1939_tutti_temi_3
prova_id: prova_1939_tutti_temi
anno: '1939'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1939
---

**Problema:** [[Problemi/prob_1939_tutti_temi_3|1939 tutti_temi 1939 — Problema 3]] · **Prova:** [[Prove/1939_tutti_temi|1939 Tema di maturità]]

Sia $\widehat{BAC}=2x$ l'angolo. Allora $AC=2r\sin(\widehat{ABC})$ dove $\widehat{ABC}$ è l'angolo inscritto che sottende l'arco $AC$.

Poiché $AB$ è diametro, $\widehat{ACB}=90^\circ$ (angolo inscritto in semicerchio). Dunque $\widehat{ABC}=90^\circ-2x$, e:
$$
AC=2r\cos 2x, \qquad AD=2r\cos x \quad\text{(la bisettrice sottende l'arco con angolo }x\text{)}.
$$
Più precisamente: $\widehat{BAD}=x$, dunque $AD=2r\sin(\widehat{ABD})$. L'angolo $\widehat{ABD}$ inscritto sottende l'arco $AD$, e $\widehat{BAD}=x$ è l'angolo inscritto che sottende l'arco $BD$. Dalla somma degli angoli: $AD=2r\sin(90^\circ-x)=2r\cos x$.

E $AC=2r\sin(90^\circ-2x)=2r\cos 2x$.

La condizione: $2r\cos 2x+2r\cos x=2mr$, cioè $\cos 2x+\cos x=m$.

Con $\cos 2x=2\cos^2 x-1$: $2\cos^2 x+\cos x-1=m$, cioè $2t^2+t-(1+m)=0$ con $t=\cos x$:
$$
t=\frac{-1+\sqrt{1+8(1+m)}}{4}=\frac{-1+\sqrt{9+8m}}{4}.
$$
Condizione $0<x<45^\circ$ (cioè $\frac{\sqrt{2}}{2}<t<1$) e $m>0$ determinano i valori ammissibili.
$$
\boxed{\cos x=\frac{-1+\sqrt{9+8m}}{4}}.
$$
![[_attachments/prob_1939_tutti_temi_3/prob_1939_tutti_temi_3_fig1.svg]]

\captionof{figure}{Area tra $y=e^x$ e $y=1$ su $[0,1]$: $S=e-2$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.85](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
