---
tipo: soluzione
prova_stem: 2011_ordinamento_2011_problema2_11
pdf: Prova_Maturita_2011.pdf
source: text
title: Soluzioni — 2011_ordinamento_2011_problema2_11
---

# Soluzioni — 2011_ordinamento_2011_problema2_11

## Problema 1

### Punto 1)

La funzione proposta è della forma:

$$f(x) = (ax + b)\,e^{-x/3} + 3$$

Calcolo la derivata prima e la pongo uguale a zero in $x = 4$:

$$f'(x) = a\,e^{-x/3} + (ax + b)\cdot\left(-\frac{1}{3}\right)e^{-x/3} = e^{-x/3}\!\left(a - \frac{ax+b}{3}\right)$$

$f'(4) = 0$ richiede $a - \dfrac{4a+b}{3} = 0$, ovvero $3a - 4a - b = 0$, cioè $a + b = 0$.

Poi impongo il passaggio per il punto $(0;\,2)$:

$$f(0) = b + 3 = 2 \implies b = -1,\quad a = 1.$$

### Punto 2)

La funzione trovata è:

$$f(x) = (x - 1)\,e^{-x/3} + 3$$

Questa funzione è continua su tutto $\mathbb{R}$, taglia l'asse delle ordinate in $(0;\,2)$ e l'asse delle ascisse in un punto di ascissa negativa $\alpha$, come si deduce dalla risoluzione grafica dell'equazione:

$$3 + (x-1)\,e^{-x/3} = 0$$

equivalente a

$$\frac{x-1}{e^{x/3}} = -3,$$

come dire:

$$x - 1 = -3\,e^{x/3}.$$

Sempre dal grafico deduciamo che la funzione è positiva per $x > \alpha$, essendo

$$\frac{x-1}{e^{x/3}} > -3.$$

**Calcolo dei limiti:**

- Il limite per $x \to -\infty$ è $-\infty$ (non c'è forma di indecisione).
- Il limite per $x \to +\infty$ è $3$, poiché

$$\frac{x-1}{e^{x/3}}$$

tende a zero ($0^+$), vedendolo nella forma $(x-1)\,e^{-x/3}$ e osservando che il denominatore è un infinito di ordine superiore rispetto al numeratore.

C'è l'asintoto orizzontale $y = 3$; non c'è asintoto obliquo per $x \to -\infty$ perché $f(x)/x$ tende ancora a $+\infty$.

**Studio della derivata prima:**

$$f'(x) = e^{-x/3}\cdot\frac{4 - x}{3} \ge 0 \quad \text{per } x \le 4$$

(la funzione è crescente per $x \le 4$); abbiamo un massimo assoluto in $x = 4$, che vale:

$$f(4) = 3\,e^{-4/3} + 3$$

**Studio della derivata seconda:**

$$f''(x) = e^{-x/3}\cdot\frac{x - 7}{9} \ge 0 \quad \text{per } x \ge 7$$

(concavità verso l'alto per $x \ge 7$); flesso in $x = 7$, con ordinata:

$$f(7) = 6\,e^{-7/3} + 3$$

Il grafico è il seguente: *(grafico — vedi PDF)*

### Punto 3)

L'area richiesta (considerando anche la regione per $x > 1$) è data da:

$$\int_0^1 f(x)\,dx - \int_0^1 3\,dx + \int_1^{+\infty}\bigl(f(x) - 3\bigr)\,dx = \int_0^1 (x-1)\,e^{-x/3}\,dx + \int_1^{+\infty}(x-1)\,e^{-x/3}\,dx$$

Integrando per parti e tenendo presente che per l'integrale improprio occorre calcolare il limite per $k \to +\infty$ dell'integrale tra $1$ e $k$, si ottiene per l'area il valore:

$$-\frac{9}{e^{1/3}} + \frac{18}{e^{1/3}} - \frac{9}{e^{1/3}} + \frac{6}{e^{1/3}} - 6 \approx 6{,}90$$

> **N.B.** Interpretando la regione come "finita" (abbiamo solo la zona con $x < 1$), il valore dell'area è dato dal primo integrale:
>
> $$\int_0^1 (x-1)\,e^{-x/3}\,dx = -\frac{9}{e^{1/3}} + \frac{6}{e^{1/3}} - \frac{9}{e^{1/3}} + 9 - 6 \approx 0{,}45$$

### Punto 4)

La funzione $f(x)$, come si evince dalla tabella seguente, è accettabile:

| $x$ | $f(x)$ | $y$ | $\lvert f(x) - y \rvert$ |
|-----|--------|-----|--------------------------|
| 0   | 2,000  | 1,97 | 0,030 |
| 1   | 3,000  | 3,02 | 0,020 |
| 2   | 3,513  | 3,49 | 0,023 |
| 3   | 3,736  | 3,71 | 0,026 |
| 4   | 3,791  | 3,80 | 0,009 |
| 5   | 3,756  | 3,76 | 0,004 |
| 6   | 3,677  | 3,65 | 0,027 |

L'evoluzione del fenomeno non potrà portare a profitti inferiori a 3 milioni di euro, poiché la funzione $f(x)$, per $x \to +\infty$, tende a $3$ (precisamente $3^+$).

Di seguito il grafico della funzione $f(x)$ insieme ai punti $(x_i;\,y_i)$: come si può notare, nei limiti della scala utilizzata, i punti sono "praticamente" sul grafico di $f(x)$.

*(grafico — vedi PDF)*
