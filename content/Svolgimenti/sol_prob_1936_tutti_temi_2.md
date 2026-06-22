---
title: 1936 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1936_tutti_temi_2
of_item: prob_1936_tutti_temi_2
prova_id: prova_1936_tutti_temi
anno: '1936'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1936
---

**Problema:** [[Problemi/prob_1936_tutti_temi_2|1936 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1936_tutti_temi|1936 Tema di maturita]]

Consideriamo le due parabole $f(x) = x^2 - 2x$ e $g(x) = \frac{2x-x^2}{2} = x - \frac{x^2}{2}$.

**Intersezioni con l'asse $x$.** Per $f$: $x^2 - 2x = x(x-2) = 0$, dunque $x = 0$ e $x = 2$. Per $g$: $x - x^2/2 = x(1 - x/2) = 0$, dunque $x = 0$ e $x = 2$.

**Intersezioni fra le due curve.** $x^2 - 2x = x - x^2/2$, cioè $\frac{3}{2}x^2 - 3x = 0$, $\frac{3}{2}x(x-2) = 0$: i punti d'incontro sono $O(0,0)$ e $A(2,0)$.

**Massimo e minimo.** Per $f$: $f'(x) = 2x-2 = 0$ per $x = 1$, punto di minimo con $f(1) = -1$. Per $g$: $g'(x) = 1 - x = 0$ per $x = 1$, punto di massimo con $g(1) = 1/2$.

**Retta orizzontale con corde uguali.** La retta $y = h$ interseca $f$ nelle ascisse tali che $x^2 - 2x = h$, cioè $x = 1 \pm \sqrt{1+h}$; la corda ha lunghezza $2\sqrt{1+h}$ (con $h \ge -1$). Interseca $g$ quando $x - x^2/2 = h$, cioè $x^2 - 2x + 2h = 0$, $x = 1 \pm \sqrt{1-2h}$; la corda ha lunghezza $2\sqrt{1-2h}$ (con $h \le 1/2$). Uguagliando: $\sqrt{1+h} = \sqrt{1-2h}$, cioè $1 + h = 1 - 2h$, $3h = 0$, $h = 0$. L'unica retta è dunque l'asse delle $x$.

**1. Corda verticale massima.** Per $0 \le x \le 2$, il segmento verticale tra le due curve ha lunghezza $\ell(x) = g(x) - f(x) = (x - x^2/2) - (x^2 - 2x) = 3x - \frac{3x^2}{2}$. Derivando: $\ell'(x) = 3 - 3x = 0$ per $x = 1$. Il massimo è $\ell(1) = 3 - 3/2 = 3/2$.

**2. Area tra le due parabole.**
$$
S = \int_0^2 [g(x) - f(x)] \de x = \int_0^2 \left(3x - \frac{3}{2}x^2\right)\de x = \left[\frac{3x^2}{2} - \frac{x^3}{2}\right]_0^2 = 6 - 4 = 2.
$$
![[_attachments/prob_1936_tutti_temi_2/prob_1936_tutti_temi_2_fig1.svg]]

\captionof{figure}{Le due parabole $f$ e $g$: si incontrano in $O(0,0)$ e $A(2,0)$; area tra le curve $=2$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.82](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
