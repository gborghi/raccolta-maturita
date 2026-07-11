---
title: 1953 tutti_temi 1953 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1953_tutti_temi_1
of_item: prob_1953_tutti_temi_1
prova_id: prova_1953_tutti_temi
anno: '1953'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1953
---

**Problema:** [[Problemi/prob_1953_tutti_temi_1|1953 tutti_temi 1953 — Problema 1]] · **Prova:** [[Prove/1953_tutti_temi|1953 Tema di maturita]]

**Verifica della soluzione nota.** Sostituendo $(x,y)=(1,0)$ nella prima equazione: $1=k+0+(1-k)=1$; nella seconda: $0=-k+(1-k)\cdot 0+k=0$. Verificato per ogni~$k$.

**Ricerca delle altre soluzioni.** Sommando le due equazioni: $x^{2}+y^{2}=(k-1)y+(1-k)y+1=-2(k-1)y+1$... Procediamo in modo più diretto. Sottraendo la seconda dalla prima:
$$
x^{2}-y^{2}=2kx+(2k-2)y+1-2k,
$$
cioè $(x-y)(x+y)=2k(x+y-1)-2(y-\tfrac{1}{2})$. Il sistema, per $k=\frac{1}{2}$, diventa
$$
\begin{cases} x^{2}=\tfrac{1}{2}x-\tfrac{1}{2}y+\tfrac{1}{2},\\[3pt] y^{2}=-\tfrac{1}{2}x+\tfrac{1}{2}y+\tfrac{1}{2}. \end{cases}
$$
La prima è la parabola $x^{2}-\tfrac{1}{2}x+\tfrac{1}{2}y-\tfrac{1}{2}=0$, cioè $y=1-2x^{2}+x$; la seconda è $x=-2y^{2}+y+1$ (parabola con asse orizzontale). Le intersezioni si trovano sostituendo e risolvendo l'equazione di quarto grado. Oltre a $(1,0)$, le altre soluzioni si ottengono per fattorizzazione. Per simmetria del sistema (scambiando $x$ con $y$ e cambiando segno a $k$), anche $(0,1)$ è soluzione.

L'area della regione nel primo quadrante, compresa tra le due parabole fra i punti $(1,0)$ e $(0,1)$, si calcola per integrazione parametrica o, più semplicemente, sfruttando la simmetria rispetto alla retta $y=x$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.95](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
