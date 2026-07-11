---
title: 1942 tutti_temi 1942 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1942_tutti_temi_2
of_item: prob_1942_tutti_temi_2
prova_id: prova_1942_tutti_temi
anno: '1942'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1942
---

**Problema:** [[Problemi/prob_1942_tutti_temi_2|1942 tutti_temi 1942 — Problema 2]] · **Prova:** [[Prove/1942_tutti_temi|1942 Tema di maturita]]

**Equazione della parabola.** $y = ax^2 + bx + c$. Per $(0,1)$: $c = 1$. Per $(2,2)$: $4a + 2b + 1 = 2$, $4a + 2b = 1$. Per $(4,5)$: $16a + 4b + 1 = 5$, $16a + 4b = 4$, $4a + b = 1$.

Dal sistema $4a + 2b = 1$ e $4a + b = 1$: $b = 0$ e $a = 1/4$. La parabola è $y = \frac{x^2}{4} + 1$.

**1. Intersezioni con la retta.** La retta per $P(0,2)$ con pendenza $\tan\alpha$: $y = x\tan\alpha + 2$. Imponendo $\frac{x^2}{4} + 1 = x\tan\alpha + 2$:
$$
x^2 - 4x\tan\alpha - 4 = 0, \qquad x = 2\tan\alpha \pm 2\sqrt{\tan^2\alpha + 1} = 2(\tan\alpha \pm \sec\alpha).
$$
Siano $x_A$ e $x_B$ le soluzioni (sempre reali per ogni $\alpha \ne \pi/2$).

**2. Tangenti.** $y' = x/2$. La tangente in $(x_i, y_i)$ è $y - y_i = \frac{x_i}{2}(x - x_i)$. Il punto d'incontro $C$ delle due tangenti ha ascissa $x_C = \frac{x_A + x_B}{2} = 2\tan\alpha$ e ordinata $y_C = \frac{x_A x_B}{4} + 1 = \frac{-4}{4} + 1 = 0$.

Dunque $C = (2\tan\alpha, 0)$ per ogni $\alpha$, con le tangenti che formano un angolo determinato dalle pendenze $x_A/2$ e $x_B/2$.

**3. Area del segmento parabolico.** Per la proprietà di Archimede, l'area del segmento parabolico inscritto nel triangolo $ABC$ (triangolo formato dalle tangenti e dalla corda $AB$) è $\frac{2}{3}$ dell'area del triangolo. L'area del triangolo si calcola con la formula $\frac{1}{2}|AB| \cdot d(C, AB)$. La corda $AB$ ha lunghezza $|AB| = \frac{4}{\cos\alpha}\sqrt{\tan^2\alpha + 1} = \frac{4}{\cos^2\alpha}$ e la distanza di $C$ dalla retta $AB$ è $|y_C - (x_C \tan\alpha + 2)| / \sqrt{1 + \tan^2\alpha} = 2\cos\alpha$. Dunque:
$$
S_{\triangle} = \frac{1}{2}\cdot\frac{4}{\cos^2\alpha}\cdot 2\cos\alpha = \frac{4}{\cos\alpha}, \qquad S_{\text{par}} = \frac{2}{3}\cdot\frac{4}{\cos\alpha} = \frac{8}{3\cos\alpha}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.88](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
