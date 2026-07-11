---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 1 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2021_4_112_1
of_item: ques_simzan_simzan_parte2_2021_4_112_1
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2021_4_112_1|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica) — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica)]]

**Testo.** Determina il valore dei parametri reali $a$ e $b$ in modo che la funzione
$$f(x) = \frac{1 + a\ln x}{1 - b\ln x}$$
ammetta gli asintoti $x = e$ e $y = -1$. Determina, se esistono, gli ulteriori asintoti della funzione.

**Svolgimento.**

**Asintoto verticale $x = e$.**

L'asintoto verticale $x = e$ richiede che il denominatore si annulli in $x = e$:
$$1 - b\ln e = 0 \;\Rightarrow\; 1 - b = 0 \;\Rightarrow\; b = 1.$$

**Asintoto orizzontale $y = -1$.**

Con $b = 1$:
$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{1 + a\ln x}{1 - \ln x} = \lim_{x \to +\infty} \frac{a\ln x}{-\ln x} = -a.$$

Per avere $y = -1$: $-a = -1 \Rightarrow a = 1$.

La funzione è dunque:
$$f(x) = \frac{1 + \ln x}{1 - \ln x}.$$

**Ulteriori asintoti.**

Per $x \to 0^+$: $\ln x \to -\infty$, quindi:
$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{1 + \ln x}{1 - \ln x} = \frac{-\infty}{+\infty} = -1.$$

Quindi $y = -1$ è asintoto orizzontale anche per $x \to 0^+$. Non esistono altri asintoti.

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
