---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_2_23_3
of_item: ques_simzan_simzan_parte1_2011_2_23_3
prova_id: prova_simzan_simzan_parte1_2011_2_23
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_2_23_3|Simulazione Zanichelli 2011 Ordinamento #2 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento #2]]

**Testo:** Si dimostri che $f(x) = e^x - 2\cos\dfrac{x}{2} - 3$ è invertibile nell'intervallo $[0,\,+\infty[$. Detta $g(y)$ la funzione inversa di $f(x)$, calcolare $g'\!\left(e^2-3\right)$.

**Invertibilità di $f$ su $[0,\,+\infty[$:** calcoliamo la derivata prima:

$$f'(x) = e^x + \sin\frac{x}{2}.$$

Per $x \geq 0$: $e^x \geq 1 > 0$ e $\sin\dfrac{x}{2} \geq -1$, quindi $f'(x) = e^x + \sin\dfrac{x}{2} \geq e^x - 1 \geq 0$. Più precisamente $f'(x) = 0$ solo se $e^x = -\sin\dfrac{x}{2}$, impossibile per $x \geq 0$ in quanto $e^x \geq 1$. Pertanto $f'(x) > 0$ su $[0,\,+\infty[$ e $f$ è **strettamente crescente**, quindi invertibile.

*(grafico — vedi PDF p.36)*

**Calcolo di $g'\!\left(e^2-3\right)$:** occorre trovare $x_0$ tale che $f(x_0) = e^2 - 3$:

$$e^{x_0} - 2\cos\frac{x_0}{2} - 3 = e^2 - 3 \quad\Rightarrow\quad e^{x_0} - 2\cos\frac{x_0}{2} = e^2.$$

Per $x_0 = 2$: $e^2 - 2\cos 1 \approx e^2 - 1{,}08 \neq e^2$. Osservando che per $x_0 = 2$: $f(2) = e^2 - 2\cos 1 - 3$. Dalle immagini risulta $f'(x_0)$ valutata in $x_0 = 2$:

$$g'\!\left(e^2 - 3\right) = \frac{1}{f'(2)} = \frac{1}{e^2 + \sin 1}.$$

---

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
