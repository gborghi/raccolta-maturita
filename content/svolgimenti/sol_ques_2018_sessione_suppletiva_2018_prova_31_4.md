---
title: 2018 Sessione suppletiva — Prova (Sportiva) — Quesito 4 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_31_4
of_item: ques_2018_sessione_suppletiva_2018_prova_31_4
prova_id: prova_2018_sessione_suppletiva_2018_prova_31
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_31_4|2018 Sessione suppletiva — Prova (Sportiva) — Quesito 4]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_31|2018 Sessione suppletiva — Prova (Sportiva)]]

**Considerata la funzione $f(x) = \dfrac{3x - e^{\sin x}}{5 + e^{-x} - \cos x}$, determinare, se esistono, i valori di $\displaystyle\lim_{x \to +\infty} f(x)$ e $\displaystyle\lim_{x \to -\infty} f(x)$.**

Per $x \to +\infty$: $e^{\sin x}$ oscilla tra $e^{-1}$ ed $e^1$, quindi il numeratore "si comporta" come $3x$. Al denominatore: $e^{-x}$ tende a $0$, $\cos x$ oscilla tra $-1$ e $1$, quindi il denominatore oscilla tra $4$ e $6$. Siccome il numeratore tende a $+\infty$, si ha:

$$\lim_{x \to +\infty} f(x) = +\infty$$

Per $x \to -\infty$: il numeratore si comporta ancora come $3x$ ed il denominatore come $e^{-x}$ (che tende a $+\infty$), dato che $5 - \cos x$ oscilla ancora fra $4$ e $6$; si ha quindi:

$$\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{3x}{e^{-x}} = 0^-$$

(l'infinito dell'esponenziale è di ordine superiore rispetto all'infinito della potenza).

---

*Fonte:* [📄 PDF p.50](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
