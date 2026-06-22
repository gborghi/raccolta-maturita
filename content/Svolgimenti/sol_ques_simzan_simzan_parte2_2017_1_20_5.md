---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 5 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2017_1_20_5
of_item: ques_simzan_simzan_parte2_2017_1_20_5
prova_id: prova_simzan_simzan_parte2_2017_1_20
anno: '2017'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2017
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2017_1_20_5|Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 5]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 #1]]

La funzione polinomiale $p(x)$ di grado minimo ha:
- minimo relativo in $A(0;1)$,
- massimo relativo in $B(2;2)$,
- minimo relativo in $C(3;k)$.

Poiché ha tre punti stazionari il grado minimo è 4: $p(x)=ax^4+bx^3+cx^2+dx+e$.

Condizioni: $p(0)=1 \implies e=1$; $p'(0)=0 \implies d=0$.

$p'(x) = 4ax^3+3bx^2+2cx = x(4ax^2+3bx+2c)$ (radici $x=0,2,3$).

Quindi $(4ax^2+3bx+2c) = 4a(x-2)(x-3) = 4a(x^2-5x+6)$:

$$3b = -20a \implies b = -\frac{5a\cdot 4}{3} \cdot\frac{3}{4} = -\frac{20a}{3}, \qquad 2c = 24a \implies c = 12a.$$

Condizione $p(2)=2$:

$$16a+8b+4c+1 = 2 \implies 16a-\frac{160a}{3}+48a = 1 \implies \frac{48a-160a+144a}{3} = 1 \implies \frac{32a}{3}=1 \implies a=\frac{3}{32}.$$

$$b=-\frac{5}{8}, \quad c=\frac{9}{8}, \quad d=0, \quad e=1.$$

$$p(x) = \frac{3}{32}x^4-\frac{5}{8}x^3+\frac{9}{8}x^2+1.$$

Il minimo assoluto è in $A(0;1)$ poiché $p(0)=1 < p(3)=k$. Calcoliamo $k$:

$$k = p(3) = \frac{3}{32}\cdot 81-\frac{5}{8}\cdot 27+\frac{9}{8}\cdot 9+1 = \frac{243}{32}-\frac{135}{8}+\frac{81}{8}+1 = \frac{243}{32}-\frac{54}{8}+1 = \frac{243-216}{32}+1 = \frac{27}{32}+1 = \frac{59}{32}.$$

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
