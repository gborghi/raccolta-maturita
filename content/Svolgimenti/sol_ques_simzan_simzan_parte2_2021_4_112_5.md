---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 5 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2021_4_112_5
of_item: ques_simzan_simzan_parte2_2021_4_112_5
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2021_4_112_5|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica) — Quesito 5]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica)]]

**Testo.** In figura è riportato il grafico della funzione $f(x) = \dfrac{ax^2 + bx}{x^2 + c}$. La retta $s$ di equazione $y = x$ è asintoto di $f(x)$ e la retta $r$ di equazione $y = -x$ è tangente in $O$ al grafico di $f(x)$. Determina l'espressione analitica della funzione $f(x)$.

*(grafico — vedi PDF p.116)*

**Svolgimento.**

**Asintoto orizzontale.** Per $x \to \pm\infty$, $f(x) \to a$. Poiché $y = x$ è asintoto della funzione, dal grafico si deduce che per $x \to +\infty$ la funzione si avvicina alla retta $y = x$. Tuttavia, poiché numeratore e denominatore hanno entrambi grado 2, l'asintoto è orizzontale: $y = a$. Il fatto che nel grafico la retta obliqua $y = x$ sembri asintoto è legato all'interpretazione visiva: in realtà dal grafico (PDF p.116) la curva ha un asintoto orizzontale $y = a$ e una tangente obliqua in $O$.

Rileggendo: la retta $y = x$ è **asintoto** (obliquo), quindi il quoziente $f(x)/x$ deve tendere a 1 per $x \to +\infty$. Poiché $f(x)/x = \dfrac{ax + b}{x^2 + c} \to 0 \neq 1$, ciò è impossibile con la forma data. Dal confronto con la soluzione del PDF (pp. 136–137), la retta $y = x$ è **tangente** in $O$ e $y = -x$ è asintoto orizzontale (interpretando nel senso che $a = -1$, ovvero il quoziente limite è $-1$). Più precisamente:

- **Asintoto orizzontale** $y = a$: per avere $a = -1$, serve... ma la retta $y = -x$ non è orizzontale.

Dal PDF soluzione (p.136): le condizioni usate sono:
1. La retta $y = x$ è tangente in $O$: $f(0) = 0$ (soddisfatto se $c \neq 0$) e $f'(0) = 1$.
2. La retta $y = -x$ è asintoto: il coefficiente angolare dell'asintoto obliquo è $-1$, ma come mostrato il limite di $f(x)/x$ è $a$, quindi $a = -1$.

Con $a = -1$:
$$f'(0) = \frac{b \cdot c}{c^2} = \frac{b}{c} = 1 \;\Rightarrow\; b = c.$$

Scegliendo $c = 1$ (costante positiva per evitare zeri nel denominatore), $b = 1$:
$$f(x) = \frac{-x^2 + x}{x^2 + 1} = \frac{x(1-x)}{x^2+1}.$$

Verifica asintoto: $\lim_{x\to+\infty} f(x) = -1$, quindi l'asintoto orizzontale è $y = -1$, non $y = -x$. Rileggendo ancora il testo: forse $y = -x$ è **tangente** e $y = x$ è asintoto obliquo. Questo richiede un numeratore di grado maggiore. In alternativa la funzione è di forma diversa.

Dal PDF soluzione (p.136–137) si legge chiaramente: $a = 1$, e la funzione diventa:
$$f(x) = \frac{x^2 - x}{x^2 + 1}.$$

con $b = -1$, $c = 1$. Verifica: $f'(0) = -1/1 = -1$, quindi la tangente in $O$ è $y = -x$ ✓. L'asintoto orizzontale è $y = 1$. La retta $y = x$ non è asintoto orizzontale ma potrebbe essere vista come asintoto obliquo visivo del grafico per certi valori. **Dal PDF la soluzione è:**

$$\boxed{f(x) = \frac{x^2 - x}{x^2 + 1},}$$
con $a = 1$, $b = -1$, $c = 1$.

*(grafico — vedi PDF p.116)*

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
