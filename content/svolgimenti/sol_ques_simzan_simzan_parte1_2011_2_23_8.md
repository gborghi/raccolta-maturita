---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Quesito 8 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_2_23_8
of_item: ques_simzan_simzan_parte1_2011_2_23_8
prova_id: prova_simzan_simzan_parte1_2011_2_23
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_2_23_8|Simulazione Zanichelli 2011 Ordinamento n.2 — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento n.2]]

**Testo:** Individuare i valori del parametro reale $a$ per i quali, relativamente all'intervallo $x > 0$, l'area della regione compresa tra l'asse $x$ e la curva di equazione

$$f(x) = \frac{|ax|}{1+x} + e^{-x}$$

ha valore finito.

La funzione $f(x)$ è sempre non negativa per $x > 0$, quindi l'area coincide con l'integrale improprio:

$$I = \int_{0}^{+\infty} f(x)\,dx = |a|\int_{0}^{+\infty}\frac{x}{1+x}\,dx + \int_{0}^{+\infty} e^{-x}\,dx.$$

Il secondo integrale converge: $\displaystyle\int_{0}^{+\infty} e^{-x}\,dx = 1$.

Il primo integrale: $\dfrac{x}{1+x} = 1 - \dfrac{1}{1+x} \to 1$ per $x\to+\infty$, quindi $\displaystyle\int_{0}^{+\infty}\frac{x}{1+x}\,dx$ **diverge**.

Pertanto $I$ è finito **se e solo se** $a = 0$.

Risposta: l'area ha valore finito solo per $\boxed{a = 0}$, e in tal caso $I = 1$.

---

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
