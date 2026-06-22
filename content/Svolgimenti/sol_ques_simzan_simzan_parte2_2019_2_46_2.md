---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 2 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2019_2_46_2
of_item: ques_simzan_simzan_parte2_2019_2_46_2
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2019_2_46_2|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica)]]

Una scatola contiene 30 palline, numerate da 1 a 30. Le palline sono di due colori: quelle il cui numero è multiplo di 3 sono nere (10 palline), le rimanenti sono bianche (20 palline). Si estraggono 3 palline simultaneamente. Determinare la probabilità degli eventi:
- $A$: «le palline sono tutte di uno stesso colore»
- $B$: «il più piccolo dei numeri estratti è 15»
- $C$: «le palline sono di colori diversi»

**Svolgimento.**

Il numero totale di casi possibili è:

$$\binom{30}{3} = \frac{30\cdot 29\cdot 28}{3\cdot 2\cdot 1} = 4060$$

**Probabilità di $A$:**

$A = A_1 \cup A_2$ con $A_1$ = «tutte bianche», $A_2$ = «tutte nere» (eventi incompatibili).

$$N_1 = \binom{20}{3} = \frac{20\cdot 19\cdot 18}{6} = 1140 \implies p(A_1) = \frac{1140}{4060} = \frac{57}{203}$$

$$N_2 = \binom{10}{3} = \frac{10\cdot 9\cdot 8}{6} = 120 \implies p(A_2) = \frac{120}{4060} = \frac{6}{203} \approx 0{,}030$$

$$p(A) = p(A_1) + p(A_2) = \frac{57+6}{203} = \frac{63}{203} = \frac{9}{29} \approx 0{,}310$$

**Probabilità di $B$:**

Se il più piccolo numero estratto è 15, le altre due palline vengono scelte tra le numerate da 16 a 30 (15 palline):

$$N_B = \binom{15}{2} = \frac{15\cdot 14}{2} = 105 \implies p(B) = \frac{105}{4060} = \frac{3}{116} \approx 0{,}026$$

**Probabilità di $C$:**

$C$ è l'evento «le palline sono di colori diversi» (non tutte dello stesso colore), ovvero il complementare di $A$:

$$p(C) = 1 - p(A) = 1 - \frac{9}{29} = \frac{20}{29} \approx 0{,}690$$

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
