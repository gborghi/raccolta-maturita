---
title: 2018 Sessione ordinaria — Prova (Sportiva) — Quesito 4 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_ordinaria_2018_prova_37_4
of_item: ques_2018_sessione_ordinaria_2018_prova_37_4
prova_id: prova_2018_sessione_ordinaria_2018_prova_37
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_ordinaria_2018_prova_37_4|2018 Sessione ordinaria — Prova (Sportiva) — Quesito 4]] · **Prova:** [[Prove/2018_sessione_ordinaria_2018_prova_37|2018 Sessione ordinaria — Prova (Sportiva)]]

**Limiti di $f(x) = \dfrac{3x - e^{\sin x}}{5 + e^{-x} - \cos x}$.**

**Per $x \to +\infty$:** $e^{\sin x}$ oscilla tra $e^{-1}$ ed $e$, quindi è limitata; il numeratore si comporta come $3x \to +\infty$. Al denominatore, $e^{-x}\to 0$ e $\cos x$ oscilla tra $-1$ e $1$, quindi il denominatore oscilla tra 4 e 6 (limitato e lontano da zero). Pertanto:

$$\lim_{x\to+\infty} f(x) = +\infty.$$

**Per $x \to -\infty$:** Il numeratore si comporta ancora come $3x \to -\infty$. Al denominatore, $e^{-x}\to+\infty$ domina su $5-\cos x$ (che oscilla tra 4 e 6). L'esponenziale cresce più velocemente di qualsiasi potenza, quindi:

$$\lim_{x\to-\infty} f(x) = \lim_{x\to-\infty}\frac{3x}{e^{-x}} = 0^-.$$

---

*Fonte:* [📄 PDF p.50](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
