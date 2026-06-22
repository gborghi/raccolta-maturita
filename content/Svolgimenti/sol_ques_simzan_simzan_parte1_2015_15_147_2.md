---
title: 'Simulazione Zanichelli 2015 — SimZan parte1 #15 — Quesito 2 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2015_15_147_2
of_item: ques_simzan_simzan_parte1_2015_15_147_2
prova_id: prova_simzan_simzan_parte1_2015_15_147
anno: '2015'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2015
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2015_15_147_2|Simulazione Zanichelli 2015 — SimZan parte1 #15 — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2015_15_147|Simulazione Zanichelli 2015 — SimZan parte1 #15]]

Una vasca cubica di 2 m per lato contiene inizialmente $2\ \text{m}^3$ d'acqua. A un istante $t = 0$ si apre un rubinetto che immette acqua nella vasca al ritmo costante di $10\ \text{m}^3/\text{h}$ e si apre lo scarico. L'acqua defluita dallo scarico dopo $t$ ore è pari a $\left(10t - 10e^{-t} + 10\right)\ \text{m}^3$.

Determiniamo il volume $V(t)$ dell'acqua nella vasca:

$$V(t) = 2 + 10t - \left(10t - 10e^{-t} + 10\right) = 2 + 10e^{-t} - 10 = 10e^{-t} - 8.$$

Determiniamo l'altezza dell'acqua (in metri) rispetto al fondo della vasca cubica, la cui superficie di base misura $4\ \text{m}^2$:

$$h(t) = \frac{V(t)}{4} = \frac{10e^{-t} - 8}{4} = \frac{5}{2}e^{-t} - 2.$$

Calcoliamo la derivata:

$$h'(t) = -\frac{5}{2}e^{-t} < 0 \quad \forall t \ge 0.$$

Poiché $h'(t) < 0$ per ogni $t > 0$, la funzione $h(t)$ è strettamente decrescente. Il massimo livello è raggiunto all'istante $t = 0$:

$$h(0) = \frac{5}{2} - 2 = \frac{1}{2} = 0{,}5\ \text{m}.$$

Al crescere del tempo: $\lim_{t \to +\infty} h(t) = -2 < 0$. Poiché $h(t) = 0 \implies e^{-t} = \dfrac{4}{5} \implies t = \ln\dfrac{5}{4} \simeq 0{,}22\ \text{h}$, la vasca si svuota dopo circa 13 minuti e lo scarico rimarrà poi a secco.

---

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
