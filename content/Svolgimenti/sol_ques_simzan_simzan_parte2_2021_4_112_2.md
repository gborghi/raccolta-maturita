---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 2 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2021_4_112_2
of_item: ques_simzan_simzan_parte2_2021_4_112_2
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2021_4_112_2|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica)]]

**Testo.** Determina l'angolo formato dalle tangenti al grafico della funzione $f(x) = 1 + \sqrt{x^2 - x^4}$ nel suo punto angoloso.

**Svolgimento.**

**Dominio:** $x^2 - x^4 \ge 0 \Rightarrow x^2(1 - x^2) \ge 0 \Rightarrow -1 \le x \le 1$.

La funzione è **pari** ($f(-x) = f(x)$), quindi il suo grafico è simmetrico rispetto all'asse $y$.

Il punto angoloso si trova in $x = 0$ (dove la funzione è continua ma la derivata cambia segno). Si calcola:
$$f'(x) = \frac{2x - 4x^3}{2\sqrt{x^2 - x^4}} = \frac{x(1 - 2x^2)}{|x|\sqrt{1 - x^2}}.$$

- Per $x \to 0^+$: $f'(x) = \dfrac{x(1-2x^2)}{x\sqrt{1-x^2}} \to \dfrac{1}{1} = 1$.
- Per $x \to 0^-$: $f'(x) = \dfrac{x(1-2x^2)}{-x\sqrt{1-x^2}} \to -\dfrac{1}{1} = -1$.

Le due tangenti in $O = (0, 1)$ hanno coefficienti angolari $m_1 = 1$ e $m_2 = -1$.

L'angolo $\alpha$ tra le due rette:
$$\tan\alpha = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right| = \left|\frac{1 - (-1)}{1 + (1)(-1)}\right| = \left|\frac{2}{0}\right| \to \infty,$$

quindi $\alpha = 90°$.

**Le tangenti nel punto angoloso sono perpendicolari; l'angolo è $90°$.**

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
