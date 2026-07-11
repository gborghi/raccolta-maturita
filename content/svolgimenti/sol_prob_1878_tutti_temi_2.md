---
title: 1878 Sessione autunnale — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1878_tutti_temi_2
of_item: prob_1878_tutti_temi_2
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

**Problema:** [[Problemi/prob_1878_tutti_temi_2|1878 Sessione autunnale — Problema 2]] · **Prova:** [[Prove/1878_tutti_temi|1878 Tema di maturita]]

Dividiamo $2a$ in due parti $x$ e $2a-x$ ($0<x<2a$). La somma dei quozienti è
$$
f(x)=\frac{x}{2a-x}+\frac{2a-x}{x}.
$$
Ponendo $t=\frac{x}{2a-x}>0$ (dunque $f=t+\frac{1}{t}$), la disuguaglianza AM-GM dà $t+\frac{1}{t}\ge 2$, con uguaglianza per $t=1$, cioè $x=2a-x$, ovvero $x=a$.

Verifica con la derivata: $f'(x)=\frac{2a}{(2a-x)^2}-\frac{2a}{x^2}=0$ quando $(2a-x)^2=x^2$, cioè $x=a$ (nell'intervallo aperto).
$$
\boxed{\text{Le due parti sono } a \text{ e } a,\text{ con valore minimo della somma dei quozienti }=2}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.46](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
