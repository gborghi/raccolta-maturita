---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 8 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2017_1_20_8
of_item: ques_simzan_simzan_parte2_2017_1_20_8
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2017_1_20_8|Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 #1]]

Vengono lanciati contemporaneamente una moneta e un dado a sei facce (entrambi non truccati), 5 volte. Il valore di ogni lancio è: l'esito del dado se esce testa, il doppio dell'esito se esce croce.

**a. Probabilità di totalizzare almeno 6 punti in 5 lanci.**

Il punteggio minimo per ogni lancio è 1 (testa + dado = 1). Il punteggio minimo in 5 lanci è $5\times 1 = 5$.

La probabilità di ottenere esattamente 5 punti (tutti i lanci danno 1, cioè testa e dado = 1):

$$P(\text{tot}=5) = \left(\frac{1}{2}\cdot\frac{1}{6}\right)^5 = \frac{1}{12^5} = \frac{1}{248832}.$$

La probabilità di totalizzare **almeno 6 punti**:

$$P(\text{tot}\ge 6) = 1 - \frac{1}{248832} = \frac{248831}{248832}.$$

**b. Se il dado dà sempre 6, probabilità di realizzare esattamente 42 punti in 5 lanci.**

Con dado sempre 6: ogni lancio vale 6 (testa) o 12 (croce). Siano $k$ i lanci con testa:

$$6k+12(5-k) = 42 \implies 60-6k = 42 \implies k=3.$$

Distribuzione binomiale: $n=5$, $p=\frac{1}{2}$, $k=3$:

$$P(X=3) = \binom{5}{3}\!\left(\frac{1}{2}\right)^5 = 10\cdot\frac{1}{32} = \frac{5}{16} = 0{,}3125.$$

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
