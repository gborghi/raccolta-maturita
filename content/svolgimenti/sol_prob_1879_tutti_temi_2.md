---
title: 1879 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1879_tutti_temi_2
of_item: prob_1879_tutti_temi_2
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

**Problema:** [[Problemi/prob_1879_tutti_temi_2|1879 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1879_tutti_temi|1879 Tema di maturita]]

Siano $x$ e~$y$ i due numeri con $x+y=2s$. Poniamo $x=s+t$, $y=s-t$, così che $t=\frac{x-y}{2}$.

**Caso 1: somma delle quarte potenze.** $x^4+y^4=2q$.
$$
(s+t)^4+(s-t)^4=2(s^4+6s^2t^2+t^4)=2q,

s^4+6s^2t^2+t^4=q, \qquad t^4+6s^2t^2+(s^4-q)=0.
$$
Questa è un'equazione biquadratica in $t$:
$$
t^2=\frac{-6s^2\pm\sqrt{36s^4-4(s^4-q)}}{2}=\frac{-6s^2\pm\sqrt{32s^4+4q}}{2}=-3s^2\pm\sqrt{8s^4+q}.
$$
Il problema ha soluzioni reali se $t^2\geq 0$, cioè $\sqrt{8s^4+q}\geq 3s^2$.

**Caso 2: differenza delle quarte potenze.** $x^4-y^4=2q$.
$$
(x^2+y^2)(x^2-y^2)=2q, \qquad (x^2+y^2)(x+y)(x-y)=2q.
$$
Con $x+y=2s$ e $x-y=2t$:
$$
2(s^2+t^2)\cdot 2s\cdot 2t=2q, \implies 4st(s^2+t^2)=q.
$$
Si ottiene un'equazione di terzo grado in $t$ (o $t^2$) la cui soluzione fornisce i due numeri cercati.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.46](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/probabilita_e_combinatoria #cluster/probabilit_e_combinatoria
