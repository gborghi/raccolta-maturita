---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2017_1_20_2
of_item: prob_simzan_simzan_parte2_2017_1_20_2
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

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2017_1_20_2|Simulazione Zanichelli 2017 — SimZan parte2 #1 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 #1]]

Fissato $\lambda\in\mathbb{R}$, la funzione è:

$$g_\lambda(x) = x^2(x+\lambda) = x^3+\lambda x^2.$$

### Punto a — Valore di $\lambda$ con flesso in $F$, ascissa $-1$

$$g_\lambda''(x) = 6x+2\lambda.$$

Condizione di flesso in $x=-1$: $g_\lambda''(-1) = -6+2\lambda = 0 \implies \lambda = 3$.

Verifica: $g_3'(-1) = 3(-1)^2+2\cdot 3\cdot(-1) = 3-6 = -3 \ne 0$ (è effettivamente un flesso non stazionario).

Il grafico corrispondente è $g_3(x) = x^2(x+3) = x^3+3x^2$.

Con $\lambda = 2$: il grafico è $\Gamma$ di equazione $g_2(x) = x^3+2x^2$.

### Punto b — Rappresentazione di $g_\lambda$ con $\lambda=2$ e retta tangente

$$g_2(x) = x^3+2x^2, \qquad g_2'(x) = 3x^2+4x = x(3x+4), \qquad g_2''(x) = 6x+4.$$

- Zeri: $x=0$ e $x=-2$.
- Massimo relativo in $x=-\frac{4}{3}$: $g_2\!\left(-\frac{4}{3}\right) = \frac{32}{27}$.
- Minimo relativo in $x=0$: $g_2(0)=0$.
- Flesso in $x=-\frac{2}{3}$: $g_2''\!\left(-\frac{2}{3}\right)=0$, $g_2\!\left(-\frac{2}{3}\right) = \frac{16}{27}$.

*(grafico — vedi PDF p.35)*

La retta tangente $t$ al grafico di $\Gamma$ nel punto $F$ di ascissa $-1$ ha:

$$g_2(-1) = -1+2 = 1, \qquad g_2'(-1) = 3-4 = -1.$$

$$t: y = -(x+1)+1 = -x.$$

### Punto c — Intersezione $A$ e area tra $t$ e $\Gamma$

Sistema tra $t$ e $\Gamma$:

$$-x = x^3+2x^2 \implies x^3+2x^2+x = 0 \implies x(x+1)^2 = 0.$$

$x=-1$ (radice doppia, cioè $F$) e $x=0$ (punto $A(0;0)$).

Area della regione compresa tra $t$ e $\Gamma$ per $-1\le x\le 0$:

$$A = \int_{-1}^{0}\left[(-x)-(x^3+2x^2)\right]dx = \int_{-1}^{0}(-x^3-2x^2-x)\,dx$$

$$= \left[-\frac{x^4}{4}-\frac{2x^3}{3}-\frac{x^2}{2}\right]_{-1}^{0} = 0-\left(-\frac{1}{4}+\frac{2}{3}-\frac{1}{2}\right) = \frac{1}{4}-\frac{2}{3}+\frac{1}{2} = \frac{3-8+6}{12} = \frac{1}{12}.$$

### Punto d — Valore di $\lambda$ per simmetria di $g_\lambda$ rispetto all'asse delle ordinate

$g_\lambda(x) = x^2(x+\lambda)$. La funzione è pari se $g_\lambda(-x) = g_\lambda(x)$:

$$g_\lambda(-x) = x^2(-x+\lambda) = -x^3+\lambda x^2.$$

$g_\lambda(-x) = g_\lambda(x) = x^3+\lambda x^2$ richiede $-x^3+\lambda x^2 = x^3+\lambda x^2$, cioè $-x^3 = x^3$ per ogni $x$, impossibile.

Quindi **non esiste** nessun valore di $\lambda$ per cui $g_\lambda$ sia simmetrica rispetto all'asse delle ordinate. (Motivazione: il termine di grado dispari $x^3$ è sempre presente e non eliminabile scegliendo $\lambda$.)

### Punto e — Funzione $G(x) = \int_0^x g_2(t)\,dt$

$$G(x) = \int_0^x (t^3+2t^2)\,dt = \frac{x^4}{4}+\frac{2x^3}{3}.$$

$G(x)$ non ammette estremi assoluti poiché $G(x)\to+\infty$ per $x\to\pm\infty$.

$G'(x) = g_2(x) = x^2(x+2)$:
- $G'(x) < 0$ per $-2 < x < 0$ (tranne $x=0$ dove $G'=0$): $G$ decrescente su $(-2,0)$.
- $G'(x) > 0$ per $x < -2$ o $x > 0$: $G$ crescente.

Punti stazionari:
- $x=-2$: minimo relativo, $G(-2) = \frac{16}{4}-\frac{16}{3} = 4-\frac{16}{3} = -\frac{4}{3}$.
- $x=0$: flesso a tangente orizzontale, $G(0) = 0$.

$G(-\frac{3}{2}) = \frac{81}{64}+\frac{2\cdot(-\frac{27}{8})}{3} = \frac{81}{64}-\frac{9}{4} = \frac{81-144}{64} = -\frac{63}{64}$.

$G\!\left(-2\right) = -\frac{4}{3}$, quindi $G\!\left(-\frac{3}{2}\right) = -\frac{63}{64} > -\frac{4}{3}$: coerente con il minimo in $x=-2$.

Ricordiamo:
- $G(x)$ è derivabile in $\mathbb{R}$, quindi non ha asintoti verticali.
- $G(x)$ non è decrescente su tutto $\mathbb{R}$.

*(grafico — vedi PDF p.39)*

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
