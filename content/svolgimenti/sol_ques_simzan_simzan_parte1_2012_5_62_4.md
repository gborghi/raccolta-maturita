---
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 4 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_5_62_4
of_item: ques_simzan_simzan_parte1_2012_5_62_4
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_5_62_4|Simulazione Zanichelli 2012 Ordinamento n.5 — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_5_62|Simulazione Zanichelli 2012 Ordinamento n.5]]

Sia $\gamma: y = kx^2$ con $k>0$. Preso $P = (a, ka^2)$ con $a>0$ su $\gamma$:

- Tangente a $\gamma$ in $P$: $y = 2kax - ka^2$. Interseca l'asse $x$ in $Q = \!\left(\dfrac{a}{2}, 0\right)$.
- Parallela all'asse $x$ per $P$: $y = ka^2$; interseca $\gamma$ in $P' = (-a, ka^2)$.

**Area del segmento parabolico** $PP'$ (per la formula di Archimede è $\dfrac{2}{3}$ del rettangolo circoscritto):

$$A_1 = \int_{-a}^{a}(ka^2 - kx^2)\,dx = k\!\left[a^2x - \frac{x^3}{3}\right]_{-a}^{a} = \frac{4}{3}ka^3.$$

*(grafico — vedi PDF p.76)*

**Area del triangolo curvilineo** $PQ$-$QO$-arco $OP$:

Area sotto la parabola da $0$ a $a$: $\displaystyle\int_0^a kx^2\,dx = \dfrac{ka^3}{3}$.

Area del triangolo $OQP$ con $O=(0,0)$, $Q=\!\left(\dfrac{a}{2},0\right)$, $P=(a,ka^2)$: $\dfrac{1}{2}\cdot\dfrac{a}{2}\cdot ka^2 = \dfrac{ka^3}{4}$.

$$A_2 = \frac{ka^3}{3} - \frac{ka^3}{4} = \frac{ka^3}{12}.$$

**Rapporto:**

$$\frac{A_1}{A_2} = \frac{\frac{4}{3}ka^3}{\frac{ka^3}{12}} = \frac{4}{3}\cdot 12 = 16.$$

Il rapporto è costante, quindi:
$$\lim_{P\to\infty}\frac{A_1}{A_2} = 16.$$

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
