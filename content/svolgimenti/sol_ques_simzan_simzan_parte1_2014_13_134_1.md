---
title: 'Simulazione Zanichelli 2014 #13 — Quesito 1 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2014_13_134_1
of_item: ques_simzan_simzan_parte1_2014_13_134_1
prova_id: prova_simzan_simzan_parte1_2014_13_134
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2014
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2014_13_134_1|Simulazione Zanichelli 2014 n.13 — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_13_134|Simulazione Zanichelli 2014 n.13]]

Consideriamo la curva $\gamma$ di equazione $y = x^2 - 4x$ e il fascio di rette $y = mx$, con $m \in \mathbb{R}$.

La generica retta del fascio e la curva $\gamma$ si intersecano nei punti dati dal sistema:

$$\begin{cases} y = x^2 - 4x \\ y = mx \end{cases} \;\longrightarrow\; x^2 - 4x = mx \;\longrightarrow\; x(x - 4 - m) = 0 \;\longrightarrow\; x = 0 \;\vee\; x = 4+m.$$

Per avere una regione finita occorre $4 + m \neq 0$, cioè $m \neq -4$. L'area della regione piana delimitata dalle due curve è:

$$A = \int_0^{4+m} \bigl|mx - (x^2 - 4x)\bigr|\,dx = \int_0^{4+m} \bigl|(m+4)x - x^2\bigr|\,dx = \left[(m+4)\frac{x^2}{2} - \frac{x^3}{3}\right]_0^{4+m}$$

$$= (m+4)\frac{(m+4)^2}{2} - \frac{(m+4)^3}{3} = \frac{(m+4)^3}{2} - \frac{(m+4)^3}{3} = \frac{(m+4)^3}{6}.$$

Poniamo $A = \dfrac{9}{2}$:

$$\frac{(m+4)^3}{6} = \frac{9}{2} \;\longrightarrow\; (m+4)^3 = 27 \;\longrightarrow\; m+4 = 3 \;\longrightarrow\; m = -1.$$

Oppure, considerando $(m+4) < 0$ (la retta è sotto la curva):

$$(m+4)^3 = -27 \;\longrightarrow\; m+4 = -3 \;\longrightarrow\; m = -7.$$

I valori cercati sono dunque $m = -1$ oppure $m = -7$.

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
