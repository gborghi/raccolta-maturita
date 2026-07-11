---
title: 2010 Scientifico PNI Straordinaria — Questionario — Quesito 4 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196_4
of_item: ques_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196_4
prova_id: prova_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Quesito:** [[Quesiti/ques_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196_4|2010 Scientifico PNI Straordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196|2010 Scientifico PNI Straordinaria — Questionario]]

Si dimostri che ogni funzione $f(x) = ax^3 + bx^2 + cx + d$, dove $a, b, c, d$ sono valori reali con $a \neq 0$, ha un massimo e un minimo relativi oppure non ha estremanti.

Osserviamo che la cubica al più infinito e al meno infinito ammette limiti infiniti di segno discorde:

$$\lim_{x \to \pm\infty}(ax^3 + bx^2 + cx + d) = \lim_{x \to \pm\infty}(ax^3) = \pm\infty \text{ se } a > 0 \text{, e } \mp\infty \text{ se } a < 0.$$

Analizziamo la derivata prima:

$$f'(x) = 3ax^2 + 2bx + c$$

**Caso 1:** Se $\dfrac{\Delta}{4} = b^2 - 3ac < 0$: non abbiamo punti a tangente orizzontale e la funzione è sempre crescente o decrescente (a seconda del segno di $a$); in tal caso la funzione non ammette estremanti.

Esempio: $b=1,\ a=1,\ c=1,\ d=0$: $f(x) = x^3 + x^2 + x$.

**Caso 2:** Se $\dfrac{\Delta}{4} = b^2 - 3ac > 0$: la funzione è crescente per valori esterni o interni all'intervallo con estremi le radici di $f'(x) = 0$ e quindi ammette un massimo ed un minimo relativi.

Esempio 1 ($a > 0$): $b=2,\ a=1,\ c=1,\ d=0$: $f(x) = x^3 + 2x^2 + x$.

Esempio 2 ($a < 0$): $b=2,\ a=-1,\ c=-1,\ d=0$: $f(x) = -x^3 + 2x^2 - x$.

**Caso 3:** Se $\dfrac{\Delta}{4} = b^2 - 3ac = 0$: si ha che $f'(x) = 0$ in un solo punto ed $f'(x)$ è sempre positiva o negativa, quindi la funzione è sempre crescente: non ci sono estremanti.

Esempio: $b=3,\ a=1,\ c=3,\ d=0$: $f(x) = x^3 + 3x^2 + 3x$.

*Fonte:* [📄 PDF p.197](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
