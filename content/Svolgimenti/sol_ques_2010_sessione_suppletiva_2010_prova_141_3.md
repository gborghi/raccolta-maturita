---
title: 2010 Suppletiva — Prova — Quesito 3 — Svolgimento
tipo: soluzione
item_id: sol_ques_2010_sessione_suppletiva_2010_prova_141_3
of_item: ques_2010_sessione_suppletiva_2010_prova_141_3
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

**Quesito:** [[Quesiti/ques_2010_sessione_suppletiva_2010_prova_141_3|2010 Suppletiva — Prova — Quesito 3]] · **Prova:** [[Prove/2010_sessione_suppletiva_2010_prova_141|2010 Suppletiva — Prova]]

*(Scuole italiane all'estero — Santiago del Cile — Sessione ordinaria 2010)*

Fra tutti i parallelepipedi rettangoli, a base quadrata, di superficie totale $a^2$, qual è quello di volume massimo?

**Soluzione.**

Detto $x > 0$ il lato del quadrato di base e $y \ge 0$ l'altezza del parallelepipedo, la superficie totale è:

$$a^2 = 2x^2 + 4xy \implies y = \frac{a^2 - 2x^2}{4x}$$

Perché $y \ge 0$ occorre $a^2 - 2x^2 \ge 0$, cioè $0 < x \le \dfrac{a}{\sqrt{2}}$.

Il volume del parallelepipedo è:

$$V = x^2 y = \frac{x(a^2 - 2x^2)}{4} = \frac{a^2 x}{4} - \frac{x^3}{2}, \qquad 0 < x \le \frac{a}{\sqrt{2}}$$

Derivando:

$$V' = \frac{a^2}{4} - \frac{3x^2}{2} \ge 0 \iff x \le \frac{a}{\sqrt{6}}$$

$V$ è crescente per $0 < x < \dfrac{a}{\sqrt{6}}$ e decrescente per $\dfrac{a}{\sqrt{6}} < x \le \dfrac{a}{\sqrt{2}}$.

Il massimo si raggiunge per $x = \dfrac{a}{\sqrt{6}}$. L'altezza corrispondente:

$$y = \frac{a^2 - 2 \cdot \frac{a^2}{6}}{4 \cdot \frac{a}{\sqrt{6}}} = \frac{\frac{2a^2}{3}}{\frac{4a}{\sqrt{6}}} = \frac{2a^2}{3} \cdot \frac{\sqrt{6}}{4a} = \frac{a\sqrt{6}}{6} = \frac{a}{\sqrt{6}} = x$$

Poiché $y = x$, **il parallelepipedo di volume massimo è il cubo di spigolo $\dfrac{a}{\sqrt{6}}$**.

---

*Fonte:* [📄 PDF p.151](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
