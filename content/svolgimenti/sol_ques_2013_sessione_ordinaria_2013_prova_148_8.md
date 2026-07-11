---
title: 2013 Ordinaria PNI — Prova — Quesito 8 — Svolgimento
tipo: soluzione
item_id: sol_ques_2013_sessione_ordinaria_2013_prova_148_8
of_item: ques_2013_sessione_ordinaria_2013_prova_148_8
prova_id: prova_2013_sessione_ordinaria_2013_prova_148
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Quesito:** [[Quesiti/ques_2013_sessione_ordinaria_2013_prova_148_8|2013 Ordinaria PNI — Prova — Quesito 8]] · **Prova:** [[Prove/2013_sessione_ordinaria_2013_prova_148|2013 Ordinaria PNI — Prova]]

**Dimostrare senza de l'Hôpital che $\displaystyle\lim_{x\to\pi}\frac{\sin x}{x-\pi}=-1$.**

Poniamo $t=x-\pi$ (con $t\to0$ quando $x\to\pi$). Usando la formula di addizione:

$$\sin x = \sin(\pi+t) = -\sin t.$$

$$\lim_{x\to\pi}\frac{\sin x}{x-\pi} = \lim_{t\to0}\frac{-\sin t}{t} = -\lim_{t\to0}\frac{\sin t}{t} = -1.$$

Il limite fondamentale $\lim_{t\to0}\dfrac{\sin t}{t}=1$ si dimostra geometricamente: per $0<t<\pi/2$,

$$\sin t < t < \tan t \implies \cos t < \frac{\sin t}{t} < 1,$$

e per il teorema del confronto, poiché $\lim_{t\to0^+}\cos t=1$, si ha $\lim_{t\to0^+}\dfrac{\sin t}{t}=1$; per parità il limite vale $1$ anche da sinistra. $\square$

---

*Fonte:* [📄 PDF p.148](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
