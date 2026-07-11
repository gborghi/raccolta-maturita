---
title: 2009 Ordinamento Straordinaria — Questionario — Quesito 1 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115_1
of_item: >-
  ques_2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115_1
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

**Quesito:** [[Quesiti/ques_2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115_1|2009 Ordinamento Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115|2009 Ordinamento Straordinaria — Questionario]]

Si inscriva in una semisfera di raggio $R$ il tronco di cono di massima superficie laterale, avente la base maggiore coincidente con quella della semisfera. Si assuma come incognita l'apotema del tronco di cono.

La superficie laterale del tronco di cono è:

$$S_l = \pi a(r + R)$$

dove $a$ è l'apotema, $r$ ed $R$ i raggi di base.

Posto $a = x$, il raggio minore della sfera è $r = \sqrt{R^2 - h^2}$; l'altezza $h$ del tronco è data da:

$$h^2 = a^2 - (R - r)^2$$

quindi:

$$r = \sqrt{R^2 - a^2 + R^2 + r^2 - 2rR}$$

ovvero:

$$r^2 = 2R^2 - x^2 + r^2 - 2rR \quad\Rightarrow\quad 2rR = 2R^2 - x^2 \quad\Rightarrow\quad r = \frac{2R^2 - x^2}{2R}$$

Quindi:

$$S_l = \pi x\!\left(\frac{2R^2 - x^2}{2R} + R\right) = \frac{\pi}{2R}\,x\,(4R^2 - x^2)$$

che è massima se lo è:

$$y = x(4R^2 - x^2), \qquad 0 \le x \le R\sqrt{2}.$$

**Risoluzione per via elementare.**

$$y = x(4R^2 - x^2) = (x^2)^{1/2}(4R^2 - x^2)^1$$

Si tratta del prodotto di due potenze in cui la somma delle basi ($x^2$ e $4R^2 - x^2$) è costante ($4R^2$); tale prodotto è massimo quando le basi sono proporzionali agli esponenti, quindi:

$$\frac{x^2}{1/2} = \frac{4R^2 - x^2}{1}$$

da cui $3x^2 = 4R^2$, quindi:

$$x = \frac{2R}{\sqrt{3}} = \frac{2}{3}R\sqrt{3} < R\sqrt{2}$$

Quindi il tronco di cono con superficie laterale massima è quello di apotema $\dfrac{2}{3}R\sqrt{3}$.

**Metodo delle derivate.**

$$y' = 4R^2 - x^2 + x(-2x) = -3x^2 + 4R^2 \ge 0 \quad\text{se}\quad 0 \le x \le \frac{2R}{\sqrt{3}}$$

La funzione è quindi crescente per $0 < x < \dfrac{2R}{\sqrt{3}}$ e decrescente per $\dfrac{2R}{\sqrt{3}} < x < R\sqrt{2}$; per $x = \dfrac{2R}{\sqrt{3}}$ si ha un massimo relativo (e assoluto): la conclusione è la stessa del metodo elementare.

*Fonte:* [📄 PDF p.115](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
