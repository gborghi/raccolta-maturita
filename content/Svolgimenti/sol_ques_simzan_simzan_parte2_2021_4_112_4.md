---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 4 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2021_4_112_4
of_item: ques_simzan_simzan_parte2_2021_4_112_4
prova_id: prova_simzan_simzan_parte2_2021_4_112
anno: '2021'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2021
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2021_4_112_4|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica) — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica)]]

**Testo.** A un convegno partecipano 36 psichiatri e 24 psicologi. Si deve formare una commissione composta da tre di essi. Qual è la probabilità che vi siano almeno uno psichiatra e almeno uno psicologo?

**Svolgimento.**

Il numero totale di commissioni di 3 persone tra $36 + 24 = 60$ è:
$$N = \binom{60}{3} = \frac{60 \cdot 59 \cdot 58}{6} = 34220.$$

Usiamo il **complementare**: $E$ = "almeno uno psichiatra e almeno uno psicologo"; $\bar{E}$ = "tutti psichiatri o tutti psicologi".

- Commissioni composte solo da psichiatri: $N_1 = \dbinom{36}{3} = \dfrac{36 \cdot 35 \cdot 34}{6} = 7140$.
- Commissioni composte solo da psicologi: $N_2 = \dbinom{24}{3} = \dfrac{24 \cdot 23 \cdot 22}{6} = 2024$.

$$P(\bar{E}) = \frac{N_1 + N_2}{N} = \frac{7140 + 2024}{34220} = \frac{9164}{34220}.$$

$$P(E) = 1 - P(\bar{E}) = \frac{34220 - 9164}{34220} = \frac{25056}{34220} = \frac{216}{295} \approx 0{,}7322.$$

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
