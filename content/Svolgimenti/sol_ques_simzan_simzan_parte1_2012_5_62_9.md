---
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 9 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_5_62_9
of_item: ques_simzan_simzan_parte1_2012_5_62_9
prova_id: prova_simzan_simzan_parte1_2012_5_62
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_5_62_9|Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 9]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_5_62|Simulazione Zanichelli 2012 Ordinamento #5]]

È data la funzione:

$$f(x) = \begin{cases} x^3 - 2x & \text{se } x < 1 \\ \ln x & \text{se } x \ge 1 \end{cases}$$

Si valuta la proposizione: «Poiché $\lim_{x\to1^-}f'(x) = \lim_{x\to1^+}f'(x) = 1$, la funzione è derivabile in $x=1$ con derivata uguale a $1$».

Verifichiamo la continuità in $x=1$, condizione necessaria per la derivabilità:
$$\lim_{x\to1^-}f(x) = 1^3 - 2\cdot1 = -1, \qquad f(1) = \ln 1 = 0.$$

Poiché $\lim_{x\to1^-}f(x) = -1 \ne 0 = f(1)$, la funzione è **discontinua** in $x=1$. Una funzione discontinua non può essere derivabile.

Per conferma, il rapporto incrementale da sinistra:
$$\lim_{h\to0^-}\frac{f(1+h)-f(1)}{h} = \lim_{h\to0^-}\frac{(1+h)^3-2(1+h)-0}{h} = \lim_{h\to0^-}\frac{-1+h+3h^2+h^3}{h} = -\infty.$$

La proposizione è pertanto **falsa**: nonostante i limiti delle derivate laterali coincidano entrambi con $1$, la funzione non è derivabile in $x=1$ perché non è nemmeno continua in quel punto.

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
