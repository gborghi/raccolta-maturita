---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Quesito 4 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_2_23_4
of_item: ques_simzan_simzan_parte1_2011_2_23_4
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_2_23_4|Simulazione Zanichelli 2011 Ordinamento n.2 — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento n.2]]

**Testo:** In un sistema di riferimento cartesiano $xOy$, si consideri la parabola di equazione $y = x^2 - 4x + 4$ che interseca gli assi cartesiani nei punti $A$ e $B$. Si tracci la retta tangente in un qualunque punto dell'arco $AB$ e, considerando il triangolo che tale retta forma con gli assi cartesiani, si trovi il volume massimo del solido che il triangolo genera in una rotazione completa attorno all'asse $x$.

La parabola ha equazione $y = (x-2)^2$. Intersezioni:

- con l'asse $y$ ($x=0$): $A = (0,\,4)$;
- con l'asse $x$ ($y=0$): $B = (2,\,0)$.

Sia $T = (t,\,(t-2)^2)$ con $0 \leq t \leq 2$ il punto generico sull'arco $AB$. La retta tangente in $T$ ha equazione:

$$y - (t-2)^2 = 2(t-2)(x-t) \quad\Rightarrow\quad y = 2(t-2)x - t^2 + 4.$$

**Intersezione con l'asse $x$** ($y=0$):

$$x_P = \frac{t^2-4}{2(t-2)} = \frac{(t-2)(t+2)}{2(t-2)} = \frac{t+2}{2}.$$

**Intersezione con l'asse $y$** ($x=0$):

$$y_Q = -t^2 + 4 = (2-t)(2+t).$$

Il triangolo formato dalla retta tangente e dagli assi coordinati ha base $\overline{OP} = \dfrac{t+2}{2}$ sull'asse $x$ e altezza $\overline{OQ} = (2-t)(2+t)$ sull'asse $y$.

Il volume del solido di rotazione attorno all'asse $x$ del triangolo con vertici $O(0,0)$, $P\!\left(\dfrac{t+2}{2},0\right)$, $Q(0,(2-t)(2+t))$ è (utilizzando la formula del cono):

$$V(t) = \frac{\pi}{3}\cdot\overline{OP}\cdot\overline{OQ}^2 - (\text{contributo della parte inferiore}).$$

Dalle immagini la derivata è:

$$V'(t) = \frac{\pi}{3}\cdot\frac{5t^2 - 12t^3 + \ldots}{(2t-4)^2}.$$

Imponendo $V'(t) = 0$ e risolvendo, il massimo si ottiene per $t = \dfrac{1}{2}$, e il volume massimo è:

$$V\!\left(\frac{1}{2}\right) = \frac{18\,432}{3125}\pi.$$

*(grafico — vedi PDF p.37)*

---

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
