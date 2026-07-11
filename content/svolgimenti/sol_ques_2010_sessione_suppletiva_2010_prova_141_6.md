---
title: 2010 Suppletiva — Prova — Quesito 6 — Svolgimento
tipo: soluzione
item_id: sol_ques_2010_sessione_suppletiva_2010_prova_141_6
of_item: ques_2010_sessione_suppletiva_2010_prova_141_6
prova_id: prova_2010_sessione_suppletiva_2010_prova_141
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Quesito:** [[Quesiti/ques_2010_sessione_suppletiva_2010_prova_141_6|2010 Suppletiva — Prova — Quesito 6]] · **Prova:** [[Prove/2010_sessione_suppletiva_2010_prova_141|2010 Suppletiva — Prova]]

*(Scuole italiane all'estero — Santiago del Cile — Sessione ordinaria 2010)*

Si dimostri che se $f(x)$ è una funzione continua **dispari** definita in $\mathbb{R}$, allora

$$\int_{-a}^{a} f(x)\,dx = 0 \qquad \forall\, a \in \mathbb{R}.$$

**Soluzione.**

Poiché la funzione è dispari: $f(-x) = -f(x)$.

Consideriamo l'integrale su $[-a, 0]$ con la sostituzione $t = -x$ ($dx = -dt$; per $x = -a$, $t = a$; per $x = 0$, $t = 0$):

$$\int_{-a}^{0} f(x)\,dx = \int_{a}^{0} f(-t)\,(-dt) = \int_{a}^{0} [-f(t)]\,(-dt) = \int_{a}^{0} f(t)\,dt = -\int_{0}^{a} f(t)\,dt = -\int_{0}^{a} f(x)\,dx$$

Pertanto:

$$\int_{-a}^{a} f(x)\,dx = \int_{-a}^{0} f(x)\,dx + \int_{0}^{a} f(x)\,dx = -\int_{0}^{a} f(x)\,dx + \int_{0}^{a} f(x)\,dx = 0$$

**Interpretazione geometrica.** Per una funzione dispari, l'area con segno della regione compresa tra la curva e l'asse $x$ nell'intervallo $[-a, 0]$ è uguale e opposta a quella nell'intervallo $[0, a]$: i contributi si cancellano.

---

*Fonte:* [📄 PDF p.153](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
