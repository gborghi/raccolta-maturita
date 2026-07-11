---
title: 1937 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1937_tutti_temi_1
of_item: prob_1937_tutti_temi_1
prova_id: prova_1937_tutti_temi
anno: '1937'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1937
---

**Problema:** [[Problemi/prob_1937_tutti_temi_1|1937 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1937_tutti_temi|1937 Tema di maturità]]

**Il lato $AB$.** Per il teorema del coseno (Carnot) nel triangolo $ACB$, con $\widehat{ACB}=60^\circ$:
$$
AB^2=AC^2+CB^2-2 AC\cdot CB\cos 60^\circ=9a^2+4a^2-2\cdot 3a\cdot 2a\cdot\tfrac12=13a^2-6a^2=7a^2 .
$$
**Posizione di $P$ e $Q$.** Poniamo $AP=BQ=x$, con $0\le x\le 2a$ (perché $Q$ deve cadere sul lato $CB$, di misura $2a$). Allora
$$
CP=AC-AP=3a-x,\qquad CQ=CB-BQ=2a-x .
$$
L'angolo $\widehat{PCQ}$ coincide con $\widehat{ACB}=60^\circ$, quindi ancora per il teorema del coseno:
$$
QP^2=CP^2+CQ^2-2 CP\cdot CQ\cos 60^\circ=(3a-x)^2+(2a-x)^2-(3a-x)(2a-x).
$$
Sviluppando:
$$
QP^2=(9a^2-6ax+x^2)+(4a^2-4ax+x^2)-(6a^2-5ax+x^2)=7a^2-5ax+x^2 .
$$
**Equazione risolutiva.** La somma dei quadrati richiesta è
$$
AB^2+BQ^2+QP^2+PA^2=7a^2+x^2+(7a^2-5ax+x^2)+x^2=3x^2-5ax+14a^2 .
$$
Imponendo che valga $l^2$:
$$
3x^2-5ax+(14a^2-l^2)=0\quad\Longrightarrow\quad
\boxed{ x=\dfrac{5a\pm\sqrt{12l^2-143a^2}}{6} }.
$$
**Discussione.** Le soluzioni sono reali se $12l^2-143a^2\ge 0$, cioè
$$
l\ge a\sqrt{\tfrac{143}{12}}=\frac{a\sqrt{143}}{2\sqrt3}=\frac{a\sqrt{429}}{6}\approx 3{,}45 a .
$$
Per $l=\dfrac{a\sqrt{429}}{6}$ si ha un'unica soluzione $x=\dfrac{5a}{6}$ (radice doppia), accettabile perché $0<\tfrac{5a}{6}<2a$. Per valori maggiori di $l$ occorre poi richiedere $0\le x\le 2a$ su ciascuna radice: il valore minimo della somma, pari a $14a^2-\tfrac{25a^2}{12}=\tfrac{143a^2}{12}$, si ottiene proprio in $x=\tfrac{5a}{6}$, mentre agli estremi $x=0$ e $x=2a$ la somma vale $14a^2$ e $12a^2$ rispettivamente; di qui il numero di soluzioni accettabili al variare di~$l$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.83](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
