---
title: 1951 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1951_tutti_temi_1
of_item: prob_1951_tutti_temi_1
prova_id: prova_1951_tutti_temi
anno: '1951'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1951
---

**Problema:** [[Problemi/prob_1951_tutti_temi_1|1951 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1951_tutti_temi|1951 Tema di maturita]]

**Notazioni.** Nel triangolo~$ABC$: $\angle B = 60^\circ$, $\angle A = x$, $\angle C = 120^\circ - x$ (con $0<x<120^\circ$). Poniamo $|BC|=a$.

Dal teorema dei seni: $\frac{a}{\sin x} = \frac{|AC|}{\sin 60^\circ} = \frac{|AB|}{\sin(120^\circ-x)}$, dunque:
$$
|AC| = \frac{a\sin 60^\circ}{\sin x} = \frac{a\sqrt{3}}{2\sin x}, \qquad |AB| = \frac{a\sin(120^\circ-x)}{\sin x}.
$$
La proiezione di~$BA$ su~$BC$ è $BH = |AB|\cos 60^\circ = \frac{|AB|}{2} = \frac{a\sin(120^\circ-x)}{2\sin x}$.

**Condizione.** L'ipotenusa del triangolo rettangolo con cateti $|AC|$ e $|BH|$ è:
$$
\sqrt{|AC|^2+|BH|^2} = \frac{k}{4}\cdot a.
$$
Sostituendo:
$$
|AC|^2+|BH|^2 = \frac{3a^2}{4\sin^2 x} + \frac{a^2\sin^2(120^\circ-x)}{4\sin^2 x} = \frac{a^2[3+\sin^2(120^\circ-x)]}{4\sin^2 x}.
$$
Dunque:
$$
\frac{a^2[3+\sin^2(120^\circ-x)]}{4\sin^2 x} = \frac{k^2a^2}{16}, \qquad \frac{3+\sin^2(120^\circ-x)}{\sin^2 x} = \frac{k^2}{4}.
$$
**Casi particolari.**
- $x=30^\circ$: $\sin^2(90^\circ)=1$, $\frac{3+1}{1/4}=16$, $k^2=64$, $k=8$.
- $x=60^\circ$: $\sin^2(60^\circ)=3/4$, $\frac{3+3/4}{3/4}=\frac{15/4}{3/4}=5$, $k^2=20$, $k=2\sqrt{5}$.
- $x=90^\circ$: $\sin^2(30^\circ)=1/4$, $\frac{3+1/4}{1}=\frac{13}{4}$, $k^2=13$, $k=\sqrt{13}$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.93](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
