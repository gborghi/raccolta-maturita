---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 1 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2020_3_76_1
of_item: ques_simzan_simzan_parte2_2020_3_76_1
prova_id: prova_simzan_simzan_parte2_2020_3_76
anno: '2020'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2020
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2020_3_76_1|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica) — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica)]]

La funzione $f(x) = \dfrac{p(x)}{x^2 + k}$, in cui $p(x)$ è un polinomio e $k \in \mathbb{R}$, ha il grafico in figura, simmetrico rispetto all'asse $y$.

*(grafico — vedi PDF p.80)*

La retta $t$ è tangente al grafico di $f(x)$ nel punto $A$ di ascissa $4$ e ha coefficiente angolare $-\dfrac{2}{7}$.

**Grado di $p(x)$ e espressione di $f(x)$.**

Dal grafico si deduce:
- $f(x)$ ha asintoto orizzontale $y = 4$ (la funzione tende a $4$ per $x \to \pm\infty$), quindi il grado di $p(x)$ è uguale al grado del denominatore, cioè $2$.
- $f(x)$ è pari, quindi $p(x)$ è un polinomio pari: $p(x) = ax^2 + b$.
- Per l'asintoto orizzontale: $a = 4$, quindi $f(x) = \dfrac{4x^2+b}{x^2+k}$.

Dal valore della tangente nel punto $A$, con il grafico si legge $f(4) = 5$ (punto $A(4;\,5)$):

$$f(4) = \frac{4 \cdot 16 + b}{16 + k} = 5 \implies 64 + b = 80 + 5k \implies b = 16 + 5k. \tag{i}$$

Infine, per determinare $m = f'(4)$:

$$f'(x) = \frac{8x(x^2+k) - (4x^2+b) \cdot 2x}{(x^2+k)^2} = \frac{2x(4k-b)}{(x^2+k)^2},$$

$$f'(4) = \frac{8(4k-b)}{(16+k)^2} = -\frac{2}{7} \implies \frac{8(4k-b)}{(16+k)^2} = -\frac{2}{7}. \tag{ii}$$

Da (i): $b = 16+5k$, quindi $4k - b = 4k - 16 - 5k = -k - 16$. Sostituendo nella (ii):

$$\frac{8(-k-16)}{(16+k)^2} = -\frac{2}{7} \implies \frac{8(k+16)}{(k+16)^2} = \frac{2}{7} \implies \frac{8}{k+16} = \frac{2}{7}.$$

Quindi: $k + 16 = 28 \implies k = 12$, e $b = 16 + 5 \cdot 12 = 76$.

Verifica: $f(4) = \dfrac{64 + 76}{16+12} = \dfrac{140}{28} = 5$ ✓, $f'(4) = \dfrac{8(48-76)}{(28)^2} = \dfrac{-224}{784} = -\dfrac{2}{7}$ ✓.

Quindi il polinomio $p(x)$ ha grado $2$ e:

$$f(x) = \frac{4x^2 + 76}{x^2 + 12} = \frac{4(x^2+19)}{x^2+12}.$$

**Asintoto obliquo di $g(x) = -x \cdot f(x)$.**

$$g(x) = -x \cdot \frac{4x^2+76}{x^2+12} = -\frac{4x^3+76x}{x^2+12}.$$

$$\lim_{x \to \pm\infty} \frac{g(x)}{x} = -4, \qquad \lim_{x \to \pm\infty} [g(x) + 4x] = \lim_{x \to \pm\infty} \frac{-4x^3-76x+4x(x^2+12)}{x^2+12} = \lim_{x \to \pm\infty} \frac{-28x}{x^2+12} = 0.$$

L'asintoto obliquo di $g(x)$ ha equazione $y = -4x$.

---

*Fonte:* [📄 PDF p.85](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
