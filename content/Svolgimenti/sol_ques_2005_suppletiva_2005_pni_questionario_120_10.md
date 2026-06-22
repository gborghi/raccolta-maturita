---
title: 2005 Suppletiva PNI — Questionario — Quesito 10 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_suppletiva_2005_pni_questionario_120_10
of_item: ques_2005_suppletiva_2005_pni_questionario_120_10
prova_id: prova_2005_suppletiva_2005_pni_questionario_120
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Quesito:** [[Quesiti/ques_2005_suppletiva_2005_pni_questionario_120_10|2005 Suppletiva PNI — Questionario — Quesito 10]] · **Prova:** [[Prove/2005_suppletiva_2005_pni_questionario_120|2005 Suppletiva PNI — Questionario]]

$$A = \begin{bmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{bmatrix}, \qquad B = \begin{bmatrix} -2 & 1 & 1 & -2 \\ 1 & -2 & 1 & -2 \\ 1 & 1 & -2 & -2 \end{bmatrix}$$

Il rango di $A$ è $2$, e si deduce dal fatto che c'è un minore di ordine $2$ (quello formato, per esempio, dalle prime due righe e dalle prime due colonne) non nullo.

Il rango della matrice $B$ è $3$, e si deduce dal fatto che c'è un minore di ordine $3$ (quello formato, per esempio, dalla prima, seconda e quarta colonna) non nullo ($-18$): per tale valore di $a$ il sistema è quindi impossibile.

Riepilogando:
- Se $a \neq 1$ e $a \neq -2$: sistema determinato.
- Se $a = 1$: sistema indeterminato.
- Se $a = -2$: sistema impossibile.

La risposta corretta è quindi la **[B]**.

---

Si consideri la trasformazione geometrica di equazioni:

$$\begin{cases} x' = 2x + my - 1 \\ y' = mx - 2y - 2 \end{cases}$$

dove $m$ è un parametro reale. Trovare l'equazione del luogo geometrico dei suoi punti uniti.

I punti uniti si ottengono ponendo $x = x'$ e $y = y'$:

$$\begin{cases} x = 2x + my - 1 \\ y = mx - 2y - 2 \end{cases} \implies \begin{cases} -x + my = 1 \\ mx - 3y = 2 \end{cases}$$

Per $y \neq 0$, dalla prima equazione si ricava $m = \dfrac{1-x}{y}$; sostituendo nella seconda:

$$\frac{1-x}{y} \cdot x - 3y = 2 \implies x - x^2 - 3y^2 - 2y = 0 \implies x^2 + 3y^2 - x + 2y = 0$$

che è un'ellisse traslata.

Se $y = 0$, il sistema che dà i punti uniti diventa:

$$\begin{cases} -x = 1 \\ mx = 2 \end{cases} \implies x = 1,\quad m = 2 \implies (x,\, y) = (1,\, 0)$$

Tale punto appartiene al luogo precedentemente trovato (si verifica: $1 + 0 - 1 + 0 = 0$), quindi:

il luogo dei punti uniti è l'ellisse di equazione $x^2 + 3y^2 - x + 2y = 0$.

*Fonte:* [📄 PDF p.127](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
