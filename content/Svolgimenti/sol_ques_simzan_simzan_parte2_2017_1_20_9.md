---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 9 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2017_1_20_9
of_item: ques_simzan_simzan_parte2_2017_1_20_9
prova_id: prova_simzan_simzan_parte2_2017_1_20
anno: '2017'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2017
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2017_1_20_9|Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 9]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 #1]]

Data $f(x) = ae^{bx}$, con $f'(0) = 8$ e $f^{(4)}(0) = 64$.

$$f^{(n)}(x) = ab^n e^{bx}, \quad f'(0) = ab = 8, \quad f^{(4)}(0) = ab^4 = 64.$$

Dividendo: $b^3 = 8 \implies b = 2$; poi $a = \frac{8}{2} = 4$.

**Dimostrazione per induzione che $f^{(n)}(x) = 2^{n+2}e^{2x}$.**

- *Base* ($n=1$): $f'(x) = 4\cdot 2\,e^{2x} = 8e^{2x} = 2^3e^{2x}$. ✓
- *Passo induttivo*: supponiamo $f^{(n)}(x) = 2^{n+2}e^{2x}$; allora:
$$f^{(n+1)}(x) = \left(2^{n+2}e^{2x}\right)' = 2^{n+3}e^{2x} = 2^{(n+1)+2}e^{2x}. \checkmark$$

**Verifica dell'identità $f^{(n+1)}(x) = f(0)\cdot f^{(n-1)}(x)$.**

$$f(0) = 4, \qquad f^{(n-1)}(x) = 2^{n+1}e^{2x}.$$

$$f(0)\cdot f^{(n-1)}(x) = 4\cdot 2^{n+1}e^{2x} = 2^2\cdot 2^{n+1}e^{2x} = 2^{n+3}e^{2x} = f^{(n+1)}(x). \checkmark$$

L'identità è dunque vera per ogni $n$ naturale.

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
