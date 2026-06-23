---
title: 'Simulazione Zanichelli 2013 Ordinamento #9 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2013_9_103_3
of_item: ques_simzan_simzan_parte1_2013_9_103_3
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2013_9_103_3|Simulazione Zanichelli 2013 Ordinamento n.9 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_9_103|Simulazione Zanichelli 2013 Ordinamento n.9]]

Si calcola il limite:

$$\lim_{x\to 1}\frac{\ln(1+x)^{\frac{1}{x-1}}}{\,\cdot\,} = \lim_{x\to 1} \frac{\ln(1+x)}{x-1}.$$

Rileggendo dal PDF (p.104), il limite è:

$$\lim_{x \to 1^-} (1 + \ln x)^{\frac{1}{x-1}}.$$

Poniamo $t = x - 1 \to 0^-$ quando $x \to 1^-$:

$$(1+\ln(1+t))^{1/t}.$$

Per $t \to 0$, $\ln(1+t) \approx t - \dfrac{t^2}{2} + \ldots$, quindi $1 + \ln(1+t) \approx 1 + t - \dfrac{t^2}{2}$, e:

$$\left(1+t-\frac{t^2}{2}+\ldots\right)^{1/t} \to e^1 = e.$$

Si applica il teorema di De L'Hospital o il limite notevole $\lim_{t\to 0}(1+t)^{1/t} = e$:

$$\lim_{x\to 1} (1+\ln x)^{1/(x-1)} = e.$$

---

*Fonte:* [📄 PDF p.103](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
