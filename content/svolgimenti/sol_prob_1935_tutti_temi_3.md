---
title: 1935 Sessione autunnale — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1935_tutti_temi_3
of_item: prob_1935_tutti_temi_3
prova_id: prova_1935_tutti_temi
anno: '1935'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1935
---

**Problema:** [[Problemi/prob_1935_tutti_temi_3|1935 Sessione autunnale — Problema 3]] · **Prova:** [[Prove/1935_tutti_temi|1935 Tema di maturità]]

**Impostazione.** Poniamo $A$ nell'origine e $AB$ sull'asse delle ascisse, $B=(2r,0)$. La circonferenza di diametro $AB$ ha centro $(r,0)$ e raggio~$r$, equazione $x^2+y^2=2rx$. La retta $xy$ è la verticale $x=a$ (con $0<a<2r$, perché essa sega la circonferenza). La semiretta da~$A$ formante l'angolo $\varphi$ con $AB$ ha punti $(t\cos\varphi,\,t\sin\varphi)$, $t\ge 0$.

**I punti $M$ ed $N$.** Sostituendo nella circonferenza si ottiene $t^2=2rt\cos\varphi$, da cui l'altra intersezione
$$
AM=2r\cos\varphi .
$$
Sostituendo nella retta $x=a$: $t\cos\varphi=a$, dunque
$$
AN=\frac{a}{\cos\varphi}.
$$
Entrambi i punti stanno sulla semiretta uscente da~$A$, quindi
$$
MN=\Bigl| AN-AM \Bigr|=\Bigl|\frac{a}{\cos\varphi}-2r\cos\varphi\Bigr|.
$$
**Equazione risolutiva.** Posto $c=\cos\varphi$ e imponendo $MN=m$:
$$
\Bigl| a-2r c^2 \Bigr|=m c\quad\Longrightarrow\quad 2r c^2\pm m c-a=0 ,
$$
da cui, prendendo la radice positiva,
$$
\boxed{ \cos\varphi=\frac{\pm m+\sqrt{m^2+8ar}}{4r} }.
$$
Il segno~$+$ corrisponde al caso $AM>AN$ ($M$ oltre $N$), il segno~$-$ al caso $AN>AM$.

**Discussione.** Sotto radice si ha $m^2+8ar>0$ sempre, dunque entrambi i valori di $\cos\varphi$ sono positivi; occorre però $\cos\varphi\le 1$. Per il segno~$+$:
$$
m+\sqrt{m^2+8ar}\le 4r \Longleftrightarrow m^2+8ar\le 16r^2-8rm+m^2 \Longleftrightarrow m\le 2r-a ,
$$
e analogamente, per il segno~$-$, la condizione $\cos\varphi\le 1$ è meno restrittiva. Pertanto il problema ammette soluzione (una o due semirette) finché $m\le 2r-a$; per $m=2r-a$ una delle due soluzioni dà $\cos\varphi=1$, cioè la semiretta lungo $AB$ stesso. La costruzione geometrica segue dalla relazione $2r\cos^2\varphi\pm m\cos\varphi-a=0$, riconducibile alla costruzione di una media proporzionale.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.81](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
