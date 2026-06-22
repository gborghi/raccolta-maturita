---
title: 2009 Ordinamento Straordinaria — Questionario — Quesito 10 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115_10
of_item: >-
  ques_2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115_10
prova_id: prova_2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2009
---

**Quesito:** [[Quesiti/ques_2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115_10|2009 Ordinamento Straordinaria — Questionario — Quesito 10]] · **Prova:** [[Prove/2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115|2009 Ordinamento Straordinaria — Questionario]]

Quali punti del grafico della funzione $f(x) = \dfrac{2}{x^2}$ hanno distanza minima dall'origine?

*(grafico — vedi PDF)*

I punti del grafico che hanno minima distanza dall'origine appartengono alla circonferenza con centro nell'origine tangente alla curva.

Indichiamo con $P = \!\left(x,\, \dfrac{2}{x^2}\right)$ il generico punto del grafico. $PO$ è minima se lo è:

$$PO^2 = x^2 + \frac{4}{x^4} = z$$

**Metodo delle derivate** (per simmetria della curva ci limitiamo a $x > 0$):

$$z' = 2x - \frac{16}{x^5} \ge 0 \quad\Longleftrightarrow\quad x^6 - 8 \ge 0 \quad\Longleftrightarrow\quad x \ge \sqrt[6]{8} = \sqrt{2}$$

La funzione $z$ è crescente per $x > \sqrt{2}$ e decrescente per $0 < x < \sqrt{2}$; si ha un minimo relativo (e assoluto) per $x = \sqrt{2}$. Per tale valore:

$$z = 2 + \frac{4}{4} = 3 \quad\Rightarrow\quad PO_{\min} = \sqrt{3}$$

I punti del grafico di $f(x)$ che hanno minima distanza dall'origine sono quelli di ascissa $x = \pm\sqrt{2}$, quindi: $\left(\pm\sqrt{2},\; 1\right)$.

**Verifica per tangenza.** La circonferenza con centro nell'origine e raggio $\sqrt{3}$ ha equazione $x^2 + y^2 = 3$. Intersechiamola con la curva:

$$\begin{cases} y = \dfrac{2}{x^2} \\[6pt] x^2 + y^2 = 3 \end{cases} \quad\Rightarrow\quad \frac{2}{y} + y^2 = 3 \quad\Rightarrow\quad y^3 - 3y + 2 = 0$$

Abbassando di grado con $y = 1$:

$$y^3 - 3y + 2 = (y - 1)(y^2 + y - 2) = (y - 1)^2(y + 2) = 0$$

Le due curve hanno per $y = 1$ una radice doppia, pertanto sono tangenti.

*Fonte:* [📄 PDF p.120](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
