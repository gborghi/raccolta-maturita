---
title: 1878 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1878_tutti_temi_1
of_item: prob_1878_tutti_temi_1
prova_id: prova_1878_tutti_temi
anno: '1878'
pdf: tutti_temi.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/1878
---

**Problema:** [[Problemi/prob_1878_tutti_temi_1|1878 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1878_tutti_temi|1878 Tema di maturita]]

La triangolazione di un poligono convesso di $n$ lati (per mezzo di diagonali non intersecantisi) lo divide sempre in $n-2$ triangoli.

**Dimostrazione per induzione.** Per $n=3$: un triangolo è già un triangolo, $3-2=1$~$\checkmark$.

Passo induttivo: supponiamo vero per ogni poligono con meno di $n$ lati. Scelta una diagonale del poligono di $n$ lati, essa lo divide in due poligoni di $k$ e $n-k+2$ lati (con $2\leq k\leq n-1$). Per ipotesi induttiva, il primo si divide in $k-2$ triangoli e il secondo in $(n-k+2)-2=n-k$ triangoli. In totale: $(k-2)+(n-k)=n-2$ triangoli.

Se si richiede che *almeno un lato di ogni triangolo sia un lato del poligono*, la condizione è automaticamente soddisfatta in ogni triangolazione: infatti, se un triangolo nella partizione non avesse alcun lato del poligono, tutti e tre i suoi lati sarebbero diagonali, ma questo contraddirebbe la struttura della triangolazione (un triangolo così sarebbe ``interno'' al poligono senza confine esterno).
$$
\boxed{\text{Il poligono di } n \text{ lati si divide in } n-2 \text{ triangoli.}}
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.46](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
