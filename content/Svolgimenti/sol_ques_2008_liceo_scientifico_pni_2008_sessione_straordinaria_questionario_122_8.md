---
title: 2008 PNI Straordinaria — Questionario — Quesito 8 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_8
of_item: ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_8
prova_id: prova_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122
anno: '2008'
pdf: Prova_Maturita_2008.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2008
---

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_8|2008 PNI Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122|2008 PNI Straordinaria — Questionario]]

Si determinino le equazioni degli asintoti della curva:

$$f(x) = \int_{1}^{x} t\,e^t\,dt$$

Calcoliamo per parti l'integrale indefinito:

$$\int t\,e^t\,dt = \int t \cdot (e^t)'\,dt = t\,e^t - \int e^t\,dt = t\,e^t - e^t + c$$

Quindi:

$$f(x) = \int_{1}^{x} t\,e^t\,dt = \Big[t\,e^t - e^t\Big]_{1}^{x} = x\,e^x - e^x = e^x(x-1)$$

La funzione è continua su tutto $\mathbb{R}$, quindi non avremo asintoti verticali. Calcoliamo i limiti all'infinito:

$$\lim_{x \to -\infty} e^x(x-1) = 0 \quad \text{(ricordiamo che } x\,e^x \to 0 \text{ se } x \to -\infty\text{)}$$

Quindi per $x \to -\infty$ abbiamo l'**asintoto orizzontale** $y = 0$.

$$\lim_{x \to +\infty} e^x(x-1) = +\infty$$

È soddisfatta la condizione necessaria per l'asintoto obliquo, che però non c'è, non essendo la funzione un infinito del primo ordine.

*Fonte:* [📄 PDF p.127](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
