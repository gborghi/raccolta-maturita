---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 1 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2019_2_46_1
of_item: ques_simzan_simzan_parte2_2019_2_46_1
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2019_2_46_1|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica)]]

La funzione:

$$F(x) = 2 + \frac{1}{2}x - \int_0^x \sqrt{\ln(t^2+1)+4}\,dt$$

ammette un punto di flesso di ascissa $x=0$. Si chiede di ricavare l'equazione della retta tangente in tale punto.

**Svolgimento.**

Per il teorema fondamentale del calcolo integrale, la derivata prima di $F(x)$ è:

$$F'(x) = \frac{1}{2} - \sqrt{\ln(x^2+1)+4}$$

In $x=0$: $F'(0) = \frac{1}{2} - \sqrt{\ln 1 + 4} = \frac{1}{2} - 2 = -\frac{3}{2}$.

$F(0) = 2 + 0 - 0 = 2$.

La derivata seconda è:

$$F''(x) = -\frac{x}{\sqrt{\ln(x^2+1)+4}\cdot(x^2+1)}$$

In $x=0$: $F''(0) = 0$, confermando che $x=0$ è un possibile flesso. Verificando il cambio di segno di $F''$: per $x<0$, $F''(x)>0$; per $x>0$, $F''(x)<0$. Quindi $x=0$ è effettivamente un punto di flesso.

L'equazione della retta tangente nel punto $(0, 2)$ con pendenza $-\frac{3}{2}$ è:

$$y - 2 = -\frac{3}{2}(x - 0) \implies y = -\frac{3}{2}x + 2$$

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
