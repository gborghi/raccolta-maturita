---
title: 'Simulazione Zanichelli 2012 Sperimentale #3 — Quesito 1 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_3_42_1
of_item: ques_simzan_simzan_parte1_2012_3_42_1
prova_id: prova_simzan_simzan_parte1_2012_3_42
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_3_42_1|Simulazione Zanichelli 2012 Sperimentale #3 — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_3_42|Simulazione Zanichelli 2012 Sperimentale #3]]

Nel piano $xOy$ sia $y = kx^2$ ($k > 0$) la parabola $\gamma$. Sia $P(a; ka^2)$ con $a > 0$. La tangente in $P$ ha equazione $y = 2kax - ka^2$ e interseca l'asse $x$ in $Q\!\left(\frac{a}{2}; 0\right)$. La parallela all'asse $x$ passante per $P$ interseca $\gamma$ in $P'(-a; ka^2)$.

*(grafico — vedi PDF p.53)*

**Area del segmento parabolico $PP'$ (formula di Archimede):** $A_1 = \frac{2}{3} \cdot \overline{PP'} \cdot ka^2 = \frac{2}{3} \cdot 2a \cdot ka^2 = \frac{4ka^3}{3}$.

**Area del triangolo curvilineo** individuato da $PQ$, $QO$ e dall'arco $OP$:

L'area della regione compresa tra la parabola $y = kx^2$ e la tangente in $P$ (tratto da $Q$ a $P$) per $\frac{a}{2} \le x \le a$ è $\frac{1}{3}$ dell'area del triangolo formato da $P$, $Q$ e il vertice di tangenza (per la proprietà del triangolo di Archimede). Dall'analisi completa (vedi PDF pp. 53–54):

$$A_2 = \int_0^{a/2} kx^2\, dx + \text{Area}(\triangle OQP) - \int_0^{a/2} kx^2\, dx = \frac{ka^3}{12}.$$

*(grafico — vedi PDF p.54)*

Il rapporto è:

$$\frac{A_1}{A_2} = \frac{\frac{4ka^3}{3}}{\frac{ka^3}{12}} = 16.$$

Tale rapporto è costante (non dipende da $a$), quindi:

$$\lim_{a \to +\infty} \frac{A_1}{A_2} = 16.$$

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
