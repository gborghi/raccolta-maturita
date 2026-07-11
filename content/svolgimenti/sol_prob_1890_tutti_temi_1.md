---
title: 1890 tutti_temi 1890 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1890_tutti_temi_1
of_item: prob_1890_tutti_temi_1
prova_id: prova_1890_tutti_temi
anno: '1890'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1890
---

**Problema:** [[Problemi/prob_1890_tutti_temi_1|1890 tutti_temi 1890 — Problema 1]] · **Prova:** [[Prove/1890_tutti_temi|1890 Tema di maturità]]

Cilindro di raggio $R$ e altezza $h$; tronco di cono con raggi $R$ (base comune) e $\rho$ (altra base), stessa altezza $h$.

Volumi: $V_C=\pi R^2 h$, $V_T=\frac{\pi h}{3}(R^2+R\rho+\rho^2)$.

Dal rapporto $V_C/V_T=a$:
$$
\frac{3R^2}{R^2+R\rho+\rho^2}=a.
$$
Ponendo $x=\rho/R$: $\frac{3}{1+x+x^2}=a$, ossia $ax^2+ax+(a-3)=0$.

Discriminante: $\Delta=a^2-4a(a-3)=12a-3a^2=3a(4-a)$.

Per $\Delta\ge 0$: $0<a\le 4$. Radici:
$$
x=\frac{-a\pm\sqrt{3a(4-a)}}{2a}.
$$
Solo la radice positiva è ammissibile:
$$
\boxed{\frac{\rho}{R}=\frac{-a+\sqrt{3a(4-a)}}{2a}=\frac{-1+\sqrt{3(4-a)/a}}{2}}.
$$
Discussione: per $a=1$, $x=1$ (cilindro uguale al tronco, cioè $\rho=R$). Per $a=3$, $x=0$ (il tronco degenera in un cono). Per $a>3$ la radice diventa negativa o complessa: impossibile geometricamente.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.50](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
