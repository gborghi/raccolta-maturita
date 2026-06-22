---
title: 'Simulazione Zanichelli 2014 #13 — Quesito 9 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2014_13_134_9
of_item: ques_simzan_simzan_parte1_2014_13_134_9
prova_id: prova_simzan_simzan_parte1_2014_13_134
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2014
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2014_13_134_9|Simulazione Zanichelli 2014 #13 — Quesito 9]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_13_134|Simulazione Zanichelli 2014 #13]]

Una pallina lasciata cadere da un'altezza di 1 m rimbalza verticalmente. Nell'urto (anelastico) la pallina risale fino a $\dfrac{9}{10}$ dell'altezza da cui era caduta.

Indichiamo con $D_n$ la distanza percorsa durante l'$n$-esimo rimbalzo:

$$D_n = \left(\frac{9}{10}\right)^n \cdot 2, \quad n \ge 1.$$

La distanza complessivamente percorsa dalla pallina (inclusa la caduta iniziale $D_0 = 1$) è:

$$D = \sum_{n=0}^{+\infty} D_n = 1 + \sum_{n=1}^{+\infty} \left(\frac{9}{10}\right)^n \cdot 2 = 1 + 2 \cdot \sum_{n=1}^{+\infty}\left(\frac{9}{10}\right)^n.$$

Poiché una serie geometrica $\displaystyle\sum_{n=0}^{+\infty} q^n$ con $|q| < 1$ converge a $\dfrac{1}{1-q}$:

$$\sum_{n=1}^{+\infty}\left(\frac{9}{10}\right)^n = \frac{1}{1-\frac{9}{10}} - 1 = 10 - 1 = 9.$$

Quindi:

$$D = 1 + 2 \cdot 9 = 19 \text{ m.}$$

La distanza complessivamente percorsa dalla pallina è **finita** e ammonta a **19 m**.

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
