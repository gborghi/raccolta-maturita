---
title: 'Simulazione Zanichelli 2013 Ordinamento #9 — Quesito 2 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_9_103_2
of_item: ques_simzan_simzan_parte1_2013_9_103_2
prova_id: prova_simzan_simzan_parte1_2013_9_103
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_9_103_2|Simulazione Zanichelli 2013 Ordinamento n.9 — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_9_103|Simulazione Zanichelli 2013 Ordinamento n.9]]

Il numero di perle totali è $n = 6 + 10 + 8 = 24$, con fermaglio (quindi la collana è una sequenza con un punto di riferimento fisso — il fermaglio).

**Sequenze totali distinte:**

Tutte le possibili permutazioni di 24 oggetti in cui ci sono 6 identici rossi, 10 identici arancioni, 8 identici gialli:

$$n_1 = \frac{24!}{6!\,10!\,8!} \approx 5\,889\,651\,768.$$

**Sequenze con perle arancioni agli estremi:**

Fissiamo una perla arancione al primo posto e una al secondo estremo; restano 8 arancioni, 6 rosse, 8 gialle da disporre nelle 22 posizioni centrali:

$$n_2 = \frac{22!}{6!\,8!\,8!} \approx 960\,269\,310.$$

**Sequenze con estremi dello stesso colore:**

Si sommano i casi in cui entrambi gli estremi sono dello stesso colore (rosso, arancione o giallo):

- Estremi rossi: $\dfrac{22!}{4!\,10!\,8!}$
- Estremi arancioni: $\dfrac{22!}{6!\,8!\,8!}$
- Estremi gialli: $\dfrac{22!}{6!\,10!\,6!}$

$$n_3 = \frac{22!}{4!\,10!\,8!} + \frac{22!}{6!\,8!\,8!} + \frac{22!}{6!\,10!\,6!}.$$

---

*Fonte:* [📄 PDF p.103](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
