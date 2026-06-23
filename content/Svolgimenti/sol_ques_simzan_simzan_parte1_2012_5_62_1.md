---
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 1 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_5_62_1
of_item: ques_simzan_simzan_parte1_2012_5_62_1
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_5_62_1|Simulazione Zanichelli 2012 Ordinamento n.5 — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_5_62|Simulazione Zanichelli 2012 Ordinamento n.5]]

Dati due insiemi $A$ e $B$ con $|A|=6$ e $|B|=5$, si determina il numero di funzioni suriettive da $A$ a $B$.

Usiamo il principio di inclusione-esclusione. Il numero di funzioni suriettive da $n$ elementi a $k$ elementi è:

$$S(n,k) = \sum_{j=0}^{k}(-1)^j\binom{k}{j}(k-j)^n.$$

Con $n=6$, $k=5$:

$$S(6,5) = \binom{5}{0}5^6 - \binom{5}{1}4^6 + \binom{5}{2}3^6 - \binom{5}{3}2^6 + \binom{5}{4}1^6$$

$$= 15625 - 5\cdot 4096 + 10\cdot 729 - 10\cdot 64 + 5\cdot 1$$

$$= 15625 - 20480 + 7290 - 640 + 5 = 1800.$$

Equivalentemente: il numero di funzioni suriettive è $5!\cdot S(6,5)$ dove $S(6,5)$ è il numero di Stirling del secondo tipo. Si ha $S(6,5) = \binom{6}{2} = 15$, quindi $5!\cdot 15 = 120\cdot 15 = 1800$.

Il numero di funzioni suriettive da $A$ a $B$ è $\mathbf{1800}$.

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
