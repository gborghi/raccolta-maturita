---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2022_5_139_6
of_item: ques_simzan_simzan_parte2_2022_5_139_6
prova_id: prova_simzan_simzan_parte2_2022_5_139
anno: '2022'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2022
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2022_5_139_6|Simulazione Zanichelli 2022 — SimZan parte2 n.5 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 n.5]]

La funzione è $f(x) = 3ax - ax^2 = ax(3-x)$, con $a > 0$.

**Area del segmento parabolico** (tra la parabola e l'asse $x$, per $x \in [0; 3]$):

$$A = \int_0^3 (3ax - ax^2)\,dx = a\left[\frac{3x^2}{2} - \frac{x^3}{3}\right]_0^3 = a\left(\frac{27}{2} - 9\right) = \frac{9a}{2}.$$

Imponendo $A = 18$:

$$\frac{9a}{2} = 18 \quad \Rightarrow \quad a = 4.$$

Quindi $f(x) = 12x - 4x^2$.

**Valor medio** di $f$ su $[0; 3]$:

$$\bar{f} = \frac{1}{3}\int_0^3 f(x)\,dx = \frac{18}{3} = 6.$$

**Punti $c \in [0; 3]$ tali che $\displaystyle\int_0^3 f(x)\,dx = 3 \cdot f(c)$:**

$$3\,f(c) = 18 \quad \Rightarrow \quad f(c) = 6 \quad \Rightarrow \quad 12c - 4c^2 = 6 \quad \Rightarrow \quad 2c^2 - 6c + 3 = 0$$

$$c = \frac{6 \pm \sqrt{36 - 24}}{4} = \frac{6 \pm 2\sqrt{3}}{4} = \frac{3 \pm \sqrt{3}}{2}.$$

Entrambe le soluzioni $c_1 = \dfrac{3 - \sqrt{3}}{2} \approx 0{,}63$ e $c_2 = \dfrac{3 + \sqrt{3}}{2} \approx 2{,}37$ appartengono a $[0; 3]$ e sono entrambe accettabili.

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
