---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2022_5_139_7
of_item: ques_simzan_simzan_parte2_2022_5_139_7
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2022_5_139_7|Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 #5]]

Un'urna contiene 12 palline bianche e 8 nere (totale 20). Si estraggono due palline in successione: se la prima è bianca viene rimessa nell'urna; se è nera viene tolta.

*(grafico — vedi PDF p.162)*

**Caso 1:** Prima bianca (rimessa): $P(B_1) = \dfrac{12}{20} = \dfrac{3}{5}$. Urna rimane 12B + 8N.

$$P(B_2 \mid B_1) = \frac{12}{20} = \frac{3}{5}, \qquad P(B_1 \cap B_2) = \frac{3}{5} \cdot \frac{3}{5} = \frac{9}{25}.$$

**Caso 2:** Prima nera (tolta): $P(N_1) = \dfrac{8}{20} = \dfrac{2}{5}$. Urna diventa 12B + 7N (totale 19).

$$P(B_2 \mid N_1) = \frac{12}{19}, \qquad P(N_1 \cap B_2) = \frac{2}{5} \cdot \frac{12}{19} = \frac{24}{95}.$$

**a. Probabilità che la seconda pallina sia bianca:**

$$P(B_2) = \frac{9}{25} + \frac{24}{95} = \frac{171}{475} + \frac{120}{475} = \frac{291}{475}.$$

**b. Probabilità che la prima fosse bianca, sapendo che la seconda è bianca** (Bayes):

$$P(B_1 \mid B_2) = \frac{P(B_1 \cap B_2)}{P(B_2)} = \frac{9/25}{291/475} = \frac{9}{25} \cdot \frac{475}{291} = \frac{171}{291} = \frac{57}{97} \approx 0{,}59.$$

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
