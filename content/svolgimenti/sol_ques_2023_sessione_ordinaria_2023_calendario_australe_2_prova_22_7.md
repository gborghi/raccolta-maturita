---
title: 2023 Ordinaria Australe 2 — Prova — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2023_sessione_ordinaria_2023_calendario_australe_2_prova_22_7
of_item: ques_2023_sessione_ordinaria_2023_calendario_australe_2_prova_22_7
prova_id: prova_2023_sessione_ordinaria_2023_calendario_australe_2_prova_22
anno: '2023'
pdf: Prova_Maturita_2023.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2023
---

**Quesito:** [[Quesiti/ques_2023_sessione_ordinaria_2023_calendario_australe_2_prova_22_7|2023 Ordinaria Australe 2 — Prova — Quesito 7]] · **Prova:** [[Prove/2023_sessione_ordinaria_2023_calendario_australe_2_prova_22|2023 Ordinaria Australe 2 — Prova]]

Australe $2$ Sessione Ordinaria 2023 Questionario

QUESITO $7$

Dimostrare che la regione finita di piano contenuta nel primo quadrante, delimitata dagli assi cartesiani
e dalla curva $y=$
$k-x$
$x^{2}+k^{2}$ con $k> 0,$ ha area costante pari a
$\pi$
$4 -$
$ln 2$

La curva taglia l’asse delle ascisse in $x= k> 0$ e l’asse delle ordinate in $y=$
$k$ .
Inoltre $y> 0$ per $x< k.$ La regione richiesta è del tipo:

Quindi l’area si ottiene calcolando il seguente integrale:

$Area= \int$
$k-x$
$x^{2} + k^{2}$
$$ k 0 $$
$dx= \int$
$x^{2} + k^{2}$
$$ k 0 $$
$dx-\int$
$x^{2} + k^{2}$
$$ k 0 dx $$

Cerchiamo una primitiva di $y=$
$x^{2}+k^{2}:$

$$ \int k $$
$x^{2} + k^{2} dx= \int$
$k^{2} (1 + x^{2}$
$k^{2})$
$dx= \int$
$k(1 + (x$
$k)$
$dx= \int$
$$ 1 k $$
$1 + (x$
$k)$
$2 dx=$ arctg $(x$
$k) + c$

Cerchiamo una primitiva di $y=$
$x^{2}+k^{2}$

$$ \int x $$
$x^{2} + k^{2} dx= 1$
$$ 2 \int $$
$2x$
$x^{2} + k^{2} dx= 1$
$2 ln(x^{2} + k^{2}) + h$

Pertanto:

$Area= \int$
$k-x$
$x^{2} + k^{2}$
$$ k 0 $$
$dx= \int$
$x^{2} + k^{2}$
$$ k 0 $$
$dx-\int$
$x^{2} + k^{2}$
$$ k 0 $$
$dx=$ [arctg $(x$
k)]
$$ 0 k $$
$-[1$
$2 ln(x^{2} + k^{2})]$
$$ 0 k = $$

$= arctg(1) -0 -[1$
$2 ln(2k^{2}) -1$
$2 lnk2] = \pi$
$4 -[ln \sqrt{2k^{2}} -ln$ k] $= \pi$
$4 -(ln\sqrt{2} + ln\sqrt{k^{2}} -lnk)) =$

$= \pi$
$4 -(ln\sqrt{2} + ln k-ln k) = \pi$
$4 -ln\sqrt{2} = \pi$
$4 -1$
$2 ln 2 = \pi$
$4 -ln 2$
$2 =$ Area $c. v. d$

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1SlPvapgs-eNHrpZYtGGUXCPHVcacwdKR/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
