---
title: 'Simulazione Zanichelli 2013 Sperimentale #7 — Quesito 4 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_7_81_4
of_item: ques_simzan_simzan_parte1_2013_7_81_4
prova_id: prova_simzan_simzan_parte1_2013_7_81
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_7_81_4|Simulazione Zanichelli 2013 Sperimentale n.7 — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_7_81|Simulazione Zanichelli 2013 Sperimentale n.7]]

Determinare un'approssimazione di $\ln 2$ con tre cifre decimali e un errore inferiore al centesimo, tramite integrazione numerica.

**Svolgimento.**

Osserviamo che $\ln 2 = \displaystyle\int_0^1 \frac{1}{1+x}\,dx$.

Applichiamo la **formula dei trapezi** con $n = 5$ sottointervalli ($h = 0{,}2$):

| $x_i$ | $0$ | $0{,}2$ | $0{,}4$ | $0{,}6$ | $0{,}8$ | $1{,}0$ |
|---|---|---|---|---|---|---|
| $f(x_i) = \frac{1}{1+x_i}$ | $1$ | $0{,}833$ | $0{,}714$ | $0{,}625$ | $0{,}556$ | $0{,}5$ |

$$\int_0^1 \frac{dx}{1+x} \approx \frac{0{,}2}{2}\!\left[1 + 2(0{,}833+0{,}714+0{,}625+0{,}556) + 0{,}5\right]$$

$$= 0{,}1\!\left[1 + 2(2{,}728) + 0{,}5\right] = 0{,}1 \times 6{,}956 = 0{,}696.$$

L'errore è $|0{,}696 - \ln 2| = |0{,}696 - 0{,}6931\ldots| \approx 0{,}003 < 0{,}01$. ✓

*(vedi PDF p.97)*

---

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
