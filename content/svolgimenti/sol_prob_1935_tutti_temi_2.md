---
title: 1935 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1935_tutti_temi_2
of_item: prob_1935_tutti_temi_2
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

**Problema:** [[Problemi/prob_1935_tutti_temi_2|1935 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1935_tutti_temi|1935 Tema di maturità]]

Studiamo la funzione $f(x) = x^3 - x^2 = x^2(x-1)$.

**Dominio e intersezioni con gli assi.** La funzione è definita per ogni $x\in\R$. Le intersezioni con l'asse $x$ si ottengono da $x^2(x-1) = 0$, dunque $x = 0$ (radice doppia) e $x = 1$. L'intersezione con l'asse $y$ è l'origine $O(0,0)$.

**Tangenti nei punti di intersezione con l'asse $x$.** Calcoliamo la derivata prima:
$$
f'(x) = 3x^2 - 2x = x(3x-2).
$$
In $x = 0$: $f'(0) = 0$, dunque la tangente è orizzontale ($y = 0$, l'asse $x$ stesso). In $x = 1$: $f'(1) = 3 - 2 = 1$, dunque la tangente è $y = x - 1$.

**Massimo e minimo.** Ponendo $f'(x) = 0$: $x(3x-2) = 0$, da cui $x = 0$ e $x = 2/3$. La derivata seconda è $f''(x) = 6x - 2$. Per $x = 0$: $f''(0) = -2 < 0$, dunque $x = 0$ è un **punto di massimo relativo** con $f(0) = 0$. Per $x = 2/3$: $f''(2/3) = 4 - 2 = 2 > 0$, dunque $x = 2/3$ è un **punto di minimo relativo** con $f(2/3) = 8/27 - 4/9 = -4/27$.

**Flesso.** $f''(x) = 0$ per $x = 1/3$, con $f(1/3) = 1/27 - 1/9 = -2/27$. Si verifica che $f'''(1/3) = 6 \ne 0$, dunque $(1/3,\,-2/27)$ è un punto di flesso.

**Intersezioni con $y = mx$.** Il sistema $x^3 - x^2 = mx$ dà $x(x^2 - x - m) = 0$: una soluzione è $x = 0$ (l'origine), le altre due sono le radici di $x^2 - x - m = 0$, con discriminante $\Delta = 1 + 4m$. Per $m > -1/4$ si hanno due ulteriori intersezioni reali e distinte; per $m = -1/4$ la retta è tangente alla cubica nel flesso; per $m < -1/4$ l'unica intersezione è l'origine.

**Parte facoltativa.** Se $P = (a,\, a^3-a^2)$, i punti $P_1$, $P_2$ con la stessa ordinata hanno ascissa data da $x^3 - x^2 = a^3 - a^2$, cioè $(x-a)(x^2+(a-1)x+a^2-a) = 0$. Le due ascisse diverse da $a$ sono reali quando il discriminante $(a-1)^2 - 4(a^2-a) = -3a^2 + 2a + 1 \ge 0$, ossia per $-1/3 \le a \le 1$.

![[_attachments/prob_1935_tutti_temi_2/prob_1935_tutti_temi_2_fig1.svg]]

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.81](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
