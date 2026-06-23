---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 3 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2021_4_112_3
of_item: ques_simzan_simzan_parte2_2021_4_112_3
prova_id: prova_simzan_simzan_parte2_2021_4_112
anno: '2021'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2021
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2021_4_112_3|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica) — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica)]]

**Testo.** Determina l'espressione analitica della funzione $y = f(x)$ sapendo che $f'(x) = 3x^2 - 8x + 4$ e che la sua tangente di flesso ha equazione $36x + 27y - 64 = 0$.

**Svolgimento.**

Integrando la derivata prima:
$$f(x) = \int (3x^2 - 8x + 4)\,dx = x^3 - 4x^2 + 4x + c.$$

**Punto di flesso.** $f''(x) = 6x - 8 = 0 \Rightarrow x_F = \dfrac{4}{3}$.

La pendenza della tangente di flesso è:
$$f'\!\left(\frac{4}{3}\right) = 3 \cdot \frac{16}{9} - 8 \cdot \frac{4}{3} + 4 = \frac{16}{3} - \frac{32}{3} + \frac{12}{3} = -\frac{4}{3}.$$

Verifica: la retta $36x + 27y - 64 = 0$ ha pendenza $m = -\dfrac{36}{27} = -\dfrac{4}{3}$ ✓.

**Ordinata del punto di flesso** dalla retta di tangenza, sostituendo $x_F = \dfrac{4}{3}$:
$$36 \cdot \frac{4}{3} + 27y_F - 64 = 0 \;\Rightarrow\; 48 + 27y_F - 64 = 0 \;\Rightarrow\; y_F = \frac{16}{27}.$$

**Determinazione di $c$:**
$$f\!\left(\frac{4}{3}\right) = \left(\frac{4}{3}\right)^3 - 4\left(\frac{4}{3}\right)^2 + 4 \cdot \frac{4}{3} + c = \frac{64}{27} - \frac{64}{9} + \frac{16}{3} + c = \frac{64 - 192 + 144}{27} + c = \frac{16}{27} + c.$$

Imponendo $f\!\left(\dfrac{4}{3}\right) = y_F = \dfrac{16}{27}$:
$$\frac{16}{27} + c = \frac{16}{27} \;\Rightarrow\; c = 0.$$

La funzione cercata è:
$$\boxed{f(x) = x^3 - 4x^2 + 4x.}$$

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
