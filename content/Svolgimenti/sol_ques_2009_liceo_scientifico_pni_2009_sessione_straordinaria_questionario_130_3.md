---
title: 2009 PNI Straordinaria — Questionario — Quesito 3 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_3
of_item: ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_3
prova_id: prova_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2009
---

**Quesito:** [[Quesiti/ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_3|2009 PNI Straordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130|2009 PNI Straordinaria — Questionario]]

Si calcoli il valore medio della funzione $f(x) = \arctan\!\left(\dfrac{x-1}{x+1}\right)$ sull'intervallo $0 \le x \le 1$.

Ricordiamo che il valor medio di una funzione $f(x)$ continua in un intervallo $[a;\, b]$ è dato da:

$$\frac{1}{b - a} \int_{a}^{b} f(x)\, dx = \frac{1}{1 - 0} \int_{0}^{1} \arctan\!\left(\frac{x-1}{x+1}\right) dx$$

Cerchiamo, integrando per parti, una primitiva di $f(x)$. Si nota che la derivata di $\arctan\!\left(\dfrac{x-1}{x+1}\right)$ è $\dfrac{1}{1+x^2}$, quindi:

$$\int \arctan\!\left(\frac{x-1}{x+1}\right) dx = \int (x)' \cdot \arctan\!\left(\frac{x-1}{x+1}\right) dx = x \cdot \arctan\!\left(\frac{x-1}{x+1}\right) - \int x \cdot \frac{1}{1+x^2}\, dx$$

$$= x \cdot \arctan\!\left(\frac{x-1}{x+1}\right) - \frac{1}{2}\ln(1+x^2) + C$$

Quindi:

$$\frac{1}{1-0} \int_{0}^{1} \arctan\!\left(\frac{x-1}{x+1}\right) dx = \left[\, x \cdot \arctan\!\left(\frac{x-1}{x+1}\right) - \frac{1}{2}\ln(1+x^2)\right]_{0}^{1} = -\frac{1}{2}\ln 2 \cong -0.35$$

*Fonte:* [📄 PDF p.132](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
