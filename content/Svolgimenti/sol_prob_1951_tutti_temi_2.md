---
title: 1951 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1951_tutti_temi_2
of_item: prob_1951_tutti_temi_2
prova_id: prova_1951_tutti_temi
anno: '1951'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1951
---

**Problema:** [[Problemi/prob_1951_tutti_temi_2|1951 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1951_tutti_temi|1951 Tema di maturita]]

**Condizione sui vertici.** La parabola $y = x^2 + px + q$ ha vertice $V = \left(-\frac{p}{2},\; q - \frac{p^2}{4}\right)$. Imponendo che il vertice appartenga a $y = -x^2 + 2x + 2$:
$$
q - \frac{p^2}{4} = -\frac{p^2}{4} + 2\cdot\left(-\frac{p}{2}\right) + 2 = -\frac{p^2}{4} - p + 2.
$$
Dunque $q = -p + 2$.

Le parabole della famiglia sono $y = x^2 + px - p + 2$.

**Tangenti dall'origine.** La retta $y = mx$ è tangente alla parabola quando $mx = x^2 + px - p + 2$, cioè $x^2 + (p-m)x - p + 2 = 0$, ha discriminante nullo: $\Delta = (p-m)^2 + 4(p-2) = 0$, cioè $m^2 - 2pm + p^2 + 4p - 8 = 0$.

Le due tangenti dall'origine hanno pendenze $m_{1,2} = p \pm \sqrt{8 - 4p} = p \pm 2\sqrt{2-p}$ (per $p \le 2$).

**Punti di contatto.** Per la tangente di pendenza $m_i$, il punto di contatto ha $x_i = -(p-m_i)/2 = \pm\sqrt{2-p}$. La corda dei punti di contatto ha lunghezza:
$$
\ell = |P_1 P_2| = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}.
$$
Con $x_1 - x_2 = 2\sqrt{2-p}$, $y_i = m_i x_i$, si ottiene dopo il calcolo:
$$
\ell(p) = 2\sqrt{2-p} \sqrt{1 + p^2}.
$$
Per il massimo/minimo: $\frac{\de}{\de p}[\ell^2] = \frac{\de}{\de p}[4(2-p)(1+p^2)] = 4[-1-p^2+(2-p)\cdot 2p] = 4(-1-p^2+4p-2p^2) = 4(-3p^2+4p-1) = -4(3p^2-4p+1) = -4(3p-1)(p-1) = 0$.

Dunque $p = 1/3$ o $p = 1$. Per $p = 1/3$: $\ell^2 = 4 \cdot 5/3 \cdot 10/9 = 200/27$ (massimo); per $p = 1$: $\ell^2 = 4 \cdot 1 \cdot 2 = 8$ (da confrontare). Si verifica che $200/27 \approx 7.4 < 8$, dunque il massimo della corda è per $p = 1$.

I valori critici devono essere confrontati anche con gli estremi. Per $p \to -\infty$: $\ell \to \infty$. Dunque $p = 1/3$ dà un **minimo locale** della lunghezza della corda: $\ell_{\min} = \frac{10\sqrt{2}}{3\sqrt{3}}$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.93](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
