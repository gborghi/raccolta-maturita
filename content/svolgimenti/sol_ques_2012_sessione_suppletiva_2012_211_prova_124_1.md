---
title: Sessione suppletiva 2012 — Prova — Quesito 1 — Svolgimento
tipo: soluzione
item_id: sol_ques_2012_sessione_suppletiva_2012_211_prova_124_1
of_item: ques_2012_sessione_suppletiva_2012_211_prova_124_1
prova_id: prova_2012_sessione_suppletiva_2012_211_prova_124
anno: '2012'
pdf: Prova_Maturita_2012.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Quesito:** [[Quesiti/ques_2012_sessione_suppletiva_2012_211_prova_124_1|Sessione suppletiva 2012 — Prova — Quesito 1]] · **Prova:** [[Prove/2012_sessione_suppletiva_2012_211_prova_124|Sessione suppletiva 2012 — Prova]]

*(PNI 2012 — Matefilia)*

Si calcola il seguente limite. Dalla soluzione Matefilia, i passaggi ricostruiti sono:

$$\lim_{x \to 0^+} \frac{x^3 - x^2}{x^4} = \lim_{x \to 0^+} \frac{x-1}{x^2} = -\infty$$

Si applica poi il limite notevole $\displaystyle\lim_{x \to 0^+} \frac{a^x - 1}{x} = \ln a$ con $a = \dfrac{8}{81}$:

$$\lim_{x \to 0^+} \frac{\left(\dfrac{8}{81}\right)^x - 1}{x} \cdot \frac{x^2}{1} = \lim_{x \to 0^+} \frac{\left(\dfrac{8}{81}\right)^x - 1}{x} \cdot x = \ln\!\left(\frac{8}{81}\right) \cdot 0$$

La catena completa di limiti ricostruita dai frammenti è:

$$\lim_{x \to 0^+} \left(\frac{8}{81}\right)^{x^3 - x^2} = \lim_{x \to 0^+} \left(\frac{8}{81}\right)^{x^2(x-1)} = -\infty$$

**N.B.** $\left(\dfrac{8}{81}\right)^x \to +\infty$ per $x \to +\infty$ ed $\ln(8/81)$ è negativo; il limite notevole applicato è $\displaystyle\lim_{x \to 0^+} \dfrac{a^x - 1}{x} = \ln a$.

---

*Fonte:* [📄 PDF p.130](https://drive.google.com/file/d/15uTp-FXyM3r6gZHrCu6HThex3dLEYCIU/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
