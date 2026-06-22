---
title: 1937 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1937_tutti_temi_2
of_item: prob_1937_tutti_temi_2
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

**Problema:** [[Problemi/prob_1937_tutti_temi_2|1937 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1937_tutti_temi|1937 Tema di maturità]]

\textbf{Studio della funzione $y = \frac{x}{2} + 1 + \frac{2}{x}$.}

*Dominio:* $\R \setminus \{0\}$.

*Asintoti:* per $x \to 0^\pm$, $y \to \pm\infty$ (asintoto verticale $x = 0$). Per $x \to \pm\infty$, $y \sim x/2 + 1$ (asintoto obliquo $y = x/2 + 1$).

*Derivata:* $y' = \frac{1}{2} - \frac{2}{x^2} = \frac{x^2 - 4}{2x^2}$. Si ha $y' = 0$ per $x = \pm 2$.
- Per $x = 2$: $y(2) = 1 + 1 + 1 = 3$. Poiché $y'' = \frac{4}{x^3}$ e $y''(2) = 1/2 > 0$, si tratta di un **minimo relativo**.
- Per $x = -2$: $y(-2) = -1 + 1 - 1 = -1$. Si ha $y''(-2) = -1/2 < 0$, dunque **massimo relativo**.

*Andamento:* per $x > 0$, la funzione decresce in $(0,2)$ da $+\infty$ al minimo $3$, poi cresce in $(2,+\infty)$; per $x < 0$, la funzione cresce in $(-\infty,-2)$ fino al massimo $-1$, poi decresce in $(-2,0)$ fino a $-\infty$. La curva è situata nei due angoli acuti formati dall'asse $y$ e dall'asintoto obliquo.

**Discussione dell'equazione originale.** Le radici dell'equazione $x^2 - 2(k-1)x + 4 = 0$ sono reali quando $k = y(x)$ per qualche $x > 0$ (radici positive) con $0 < x \le 4$. Dalla curva si legge: per $x \in (0,4]$ la funzione assume il minimo $y = 3$ in $x = 2$ e $y(4) = 2 + 1 + 1/2 = 7/2$. Dunque per $k \ge 3$ l'equazione ha almeno una radice in $(0,4]$; per $k = 3$ la radice doppia è $x = 2$; per $k > 3$ si hanno due radici positive distinte entrambe in $(0,4]$ quando $k \le 7/2$.

![[_attachments/prob_1937_tutti_temi_2/prob_1937_tutti_temi_2_fig1.svg]]

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.83](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
