---
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_5_62_6
of_item: ques_simzan_simzan_parte1_2012_5_62_6
prova_id: prova_simzan_simzan_parte1_2012_5_62
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_5_62_6|Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_5_62|Simulazione Zanichelli 2012 Ordinamento #5]]

Dato il cubo in figura, si determina l'ampiezza del diedro convesso con spigolo $BD'$ e facce i piani $A'D'B$ e $C'D'B$.

*(grafico — vedi PDF p.77)*

Poniamo il lato del cubo uguale a $1$ e le coordinate: $B=(1,0,0)$, $A'=(0,0,1)$, $C'=(1,1,1)$, $D'=(0,1,1)$.

Vettori normali ai due piani:

- Piano $A'D'B$: $\overrightarrow{D'A'} = (0,-1,0)$, $\overrightarrow{D'B} = (1,-1,-1)$.
  $$\vec{n_1} = \overrightarrow{D'A'}\times\overrightarrow{D'B} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\0&-1&0\\1&-1&-1\end{vmatrix} = ((-1)(-1)-0\cdot(-1),\;0\cdot1-0\cdot(-1),\;0\cdot(-1)-(-1)\cdot1) = (1,0,1).$$

- Piano $C'D'B$: $\overrightarrow{D'C'} = (1,0,0)$, $\overrightarrow{D'B} = (1,-1,-1)$.
  $$\vec{n_2} = \overrightarrow{D'C'}\times\overrightarrow{D'B} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\1&0&0\\1&-1&-1\end{vmatrix} = (0\cdot(-1)-0\cdot(-1),\;0\cdot1-1\cdot(-1),\;1\cdot(-1)-0\cdot1) = (0,1,-1).$$

Angolo tra i piani:
$$\cos\theta = \frac{|\vec{n_1}\cdot\vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|1\cdot0+0\cdot1+1\cdot(-1)|}{\sqrt{2}\cdot\sqrt{2}} = \frac{1}{2}.$$

Quindi il diedro convesso ha ampiezza $\theta = \dfrac{\pi}{3} = 60°$.

*(calcolo — vedi PDF p.78)*

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
