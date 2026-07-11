---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2022_5_139_3
of_item: ques_simzan_simzan_parte2_2022_5_139_3
prova_id: prova_simzan_simzan_parte2_2022_5_139
anno: '2022'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2022
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2022_5_139_3|Simulazione Zanichelli 2022 — SimZan parte2 n.5 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 n.5]]

Consideriamo le curve $f(x) = 2e^{-x}$ e $g(x) = e^{-x}$ *(grafico — vedi PDF p.141)*. Il triangolo $ABC$ ha i vertici:
- $A = (0, 2)$ (sul grafico di $f$ per $x = 0$, poiché $f(0) = 2$);
- $B = (k,\; 2e^{-k})$ (su $f$ con $x = k$);
- $C = (k,\; e^{-k})$ (su $g$ con $x = k$), con $k \ge 1$.

La base del triangolo è $|BC| = 2e^{-k} - e^{-k} = e^{-k}$, l'altezza (distanza orizzontale da $A$ alla retta $x = k$) è $k$.

Area del triangolo:

$$\mathcal{A}(k) = \frac{1}{2} \cdot k \cdot e^{-k}.$$

Per massimizzare:

$$\mathcal{A}'(k) = \frac{e^{-k}}{2}(1 - k) = 0 \quad \Rightarrow \quad k = 1.$$

Poiché $\mathcal{A}' > 0$ per $k < 1$ e $\mathcal{A}' < 0$ per $k > 1$, il massimo è in $k = 1$.

$$\mathcal{A}_{\max} = \mathcal{A}(1) = \frac{1}{2e}.$$

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
