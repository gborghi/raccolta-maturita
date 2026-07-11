---
title: 2008 PNI Straordinaria — Questionario — Quesito 1 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_1
of_item: ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_1
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

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_1|2008 PNI Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122|2008 PNI Straordinaria — Questionario]]

Fra le piramidi quadrangolari regolari di data area laterale $S$, si determini quella di volume massimo.

La superficie laterale della piramide è:

$$S = p \cdot a = 2l \cdot a$$

essendo $l$ lo spigolo di base ed $a$ l'apotema.

Il volume è:

$$V = \frac{1}{3} A_b \cdot h = \frac{1}{3} l^2 h$$

Posto $l = x$ (con $x > 0$), si ha:

$$a = \frac{S}{2l} = \frac{S}{2x}, \qquad h = \sqrt{a^2 - \frac{l^2}{4}} = \sqrt{\frac{S^2}{4x^2} - \frac{x^2}{4}} = \frac{\sqrt{S^2 - x^4}}{2x}$$

Quindi:

$$V = \frac{1}{3} l^2 h = \frac{1}{3} x^2 \cdot \frac{\sqrt{S^2 - x^4}}{2x} = \frac{1}{6} x \sqrt{S^2 - x^4}$$

$V$ è massimo se lo è $y = x^2(S^2 - x^4)$.

Risolviamo il problema per via elementare (il metodo delle derivate è usato più frequentemente):

$$x^2(S^2 - x^4) = (x^4)^{\frac{1}{2}} \cdot (S^2 - x^4)$$

Si tratta del prodotto di due potenze la cui somma delle basi ($x^4$ e $S^2 - x^4$) è costante ($S^2$); tale prodotto è massimo quando le basi sono proporzionali agli esponenti:

$$\frac{x^4}{\tfrac{1}{2}} = \frac{S^2 - x^4}{1} \implies 3x^4 = S^2 \implies x = \sqrt[4]{\frac{S^2}{3}}$$

Il volume della piramide è massimo quando il lato della base è $\sqrt[4]{\dfrac{S^2}{3}}$.

*Fonte:* [📄 PDF p.122](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
