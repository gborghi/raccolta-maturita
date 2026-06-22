---
title: 1952 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1952_tutti_temi_1
of_item: prob_1952_tutti_temi_1
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

**Problema:** [[Problemi/prob_1952_tutti_temi_1|1952 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1952_tutti_temi|1952 Tema di maturita]]

**Proprietà dell'ortocentro.** Nel triangolo acutangolo~$ABC$, l'ortocentro~$O$ (o~$H$) verifica: $|AO|=2R\cos A$, $|BO|=2R\cos B$, $|CO|=2R\cos C$, dove~$R$ è il raggio della circonferenza circoscritta. Dunque $s = 2R\cos\alpha$, cioè $R = \frac{s}{2\cos\alpha}$.

L'angolo~$C\widehat{A}O = x$: la retta~$AO$ è l'altezza da~$A$, che forma con~$AB$ un angolo uguale a~$90^\circ - B$ e con~$AC$ un angolo uguale a~$90^\circ - C$. Dunque $x = 90^\circ - C$ (l'angolo tra l'altezza~$AH$ e il lato~$AC$), da cui $C = 90^\circ - x$ e $B = 180^\circ - \alpha - C = 90^\circ + x - \alpha$.

**Lati.** Dal teorema dei seni:
$$
|BC| = 2R\sin\alpha = \frac{s\sin\alpha}{\cos\alpha} = s\tan\alpha.

|AC| = 2R\sin B = \frac{s\sin(90^\circ+x-\alpha)}{\cos\alpha} = \frac{s\cos(x-\alpha)}{\cos\alpha}.

|AB| = 2R\sin C = \frac{s\sin(90^\circ-x)}{\cos\alpha} = \frac{s\cos x}{\cos\alpha}.
$$
**Segmenti $OB$ e $OC$.**
$$
|OB| = 2R\cos B = \frac{s\cos(90^\circ+x-\alpha)}{\cos\alpha} = \frac{-s\sin(x-\alpha)}{\cos\alpha} = \frac{s\sin(\alpha-x)}{\cos\alpha}.

|OC| = 2R\cos C = \frac{s\cos(90^\circ-x)}{\cos\alpha} = \frac{s\sin x}{\cos\alpha}.
$$
**Caso $\cos\alpha=1/3$.** Allora $\sin\alpha = \frac{2\sqrt{2}}{3}$ e $\tan\alpha = 2\sqrt{2}$. La condizione:
$$
\frac{2s\sin(\alpha-x)}{1/3} + \frac{3s\sin x}{1/3} = k\cdot s\cdot 2\sqrt{2},

6\sin(\alpha-x) + 9\sin x = 2k\sqrt{2}.
$$
Sviluppando $\sin(\alpha-x) = \sin\alpha\cos x - \cos\alpha\sin x = \frac{2\sqrt{2}}{3}\cos x - \frac{1}{3}\sin x$:
$$
6 \left(\frac{2\sqrt{2}}{3}\cos x - \frac{1}{3}\sin x\right) + 9\sin x = 2k\sqrt{2},

4\sqrt{2}\cos x - 2\sin x + 9\sin x = 2k\sqrt{2}, \qquad 4\sqrt{2}\cos x + 7\sin x = 2k\sqrt{2}.
$$
Forma armonica: $\sqrt{32+49}\sin(x+\varphi) = 2k\sqrt{2}$, con $\sqrt{81}=9$, dunque:
$$
9\sin(x+\varphi) = 2k\sqrt{2}, \qquad \sin(x+\varphi) = \frac{2k\sqrt{2}}{9},
$$
dove $\tan\varphi = \frac{4\sqrt{2}}{7}$. La soluzione esiste per $\frac{2k\sqrt{2}}{9}\le 1$, cioè $k\le\frac{9}{2\sqrt{2}}=\frac{9\sqrt{2}}{4}$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.94](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
