---
title: 1879 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1879_tutti_temi_1
of_item: prob_1879_tutti_temi_1
prova_id: prova_1879_tutti_temi
anno: '1879'
pdf: tutti_temi.pdf
cluster: Probabilità e Combinatoria
tags:
  - maturita/soluzione
  - area/probabilita_e_combinatoria
  - cluster/probabilit_e_combinatoria
  - anno/1879
---

**Problema:** [[Problemi/prob_1879_tutti_temi_1|1879 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1879_tutti_temi|1879 Tema di maturita]]

Sia la progressione geometrica $a, ar, ar^2,\ldots,ar^{n-1}$. Le tre quantità note sono:
$$
S=a\frac{r^n-1}{r-1},\quad Q=a^2\frac{r^{2n}-1}{r^2-1},\quad C=a^3\frac{r^{3n}-1}{r^3-1}.
$$
Calcoliamo i rapporti:
$$
\frac{Q}{S}=a\cdot\frac{(r^{2n}-1)(r-1)}{(r^2-1)(r^n-1)}=a\cdot\frac{(r^n-1)(r^n+1)(r-1)}{(r-1)(r+1)(r^n-1)}=\frac{a(r^n+1)}{r+1},

\frac{C}{Q}=a\cdot\frac{(r^{3n}-1)(r^2-1)}{(r^3-1)(r^{2n}-1)}=a\cdot\frac{r^{2n}+r^n+1}{r^{2n}+1}\cdot\frac{r+1}{r^2+r+1}.
$$
Da $Q/S=a(r^n+1)/(r+1)$ e $Q^2/(SC)$ si può eliminare $a$ e $r^n$, ottenendo un sistema risolvibile per $a$ e $r$.

In sintesi, la progressione è determinata da:
$$
\boxed{a=\frac{S^2}{Q}\cdot\frac{Q^2-SC}{SQ-S^2C/Q},\quad r=\frac{SQ-S^2C/Q}{Q^2-SC}}.
$$
(Le formule esatte dipendono dal numero di termini $n$, anch'esso determinabile dal sistema.)

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.46](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/probabilita_e_combinatoria #cluster/probabilit_e_combinatoria
