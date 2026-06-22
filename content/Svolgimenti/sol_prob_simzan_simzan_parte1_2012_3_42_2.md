---
title: 'Simulazione Zanichelli 2012 Sperimentale #3 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2012_3_42_2
of_item: prob_simzan_simzan_parte1_2012_3_42_2
prova_id: prova_simzan_simzan_parte1_2012_3_42
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2012_3_42_2|Simulazione Zanichelli 2012 Sperimentale #3 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_3_42|Simulazione Zanichelli 2012 Sperimentale #3]]

La funzione $f(x)$ è definita in $]1; +\infty[$, con grafico che interseca l'asse delle ascisse in $P(2; 0)$, e la derivata prima $f'(x)$ è la funzione omografica $y = \frac{ax+b}{cx+d}$ di centro $(1; 1)$ passante per $P$.

### a) Determinazione di $f(x)$

Nella generica funzione omografica $y = \frac{ax+b}{cx+d}$, il centro è $C\!\left(-\frac{d}{c};\frac{a}{c}\right)$. Poniamo $c = 1$; affinché il centro sia $(1; 1)$: $a = 1$, $d = -1$. Poiché $P(2; 0)$ appartiene al grafico di $f'(x)$: $\frac{2+b}{2-1} = 0 \Rightarrow b = -2$. Pertanto:

$$f'(x) = \frac{x - 2}{x - 1}.$$

Determiniamo $f(x)$ come primitiva:

$$f(x) = \int \frac{x-2}{x-1}\, dx = \int \left(1 - \frac{1}{x-1}\right) dx = x - \ln(x-1) + k.$$

Dalla condizione $f(2) = 0$: $2 - \ln 1 + k = 0 \Rightarrow k = -2$. Quindi:

$$f(x) = x - 2 - \ln(x-1).$$

### b) Studio della funzione e grafico

- **Dominio:** $]1; +\infty[$.
- **Intersezione con l'asse $x$:** $f(2) = 0$, cioè $P(2; 0)$.
- **Limiti:**
  - $\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+}[x - 2 - \ln(x-1)] = +\infty$: la retta $x = 1$ è un **asintoto verticale**.
  - $\lim_{x \to +\infty} f(x) = +\infty$: non ci sono asintoti orizzontali.
  - $\lim_{x \to +\infty}[f(x) - x] = \lim_{x \to +\infty}[-2 - \ln(x-1)] = -\infty$: non esiste asintoto obliquo.
- **Crescenza:** $f'(x) = \frac{x-2}{x-1}$; il denominatore è positivo su $]1; +\infty[$. Quindi $f'(x) < 0$ per $1 < x < 2$ e $f'(x) > 0$ per $x > 2$: la funzione è decrescente in $]1; 2[$ e crescente in $]2; +\infty[$. Il punto $x = 2$ è un **minimo assoluto** con $f(2) = 0$.
- **Concavità:** $f''(x) = \frac{1}{(x-1)^2} > 0$ ovunque nel dominio: la funzione è sempre concava verso l'alto.

*(grafico — vedi PDF p.51)*

### c) Intersezione con $y = e - 2$: metodo di bisezione

L'equazione $f(x) = e - 2$ equivale a $x - 2 - \ln(x-1) = e - 2$, cioè a:

$$g(x) = x - \ln(x-1) - e = 0.$$

*(grafico — vedi PDF p.52)*

Dal punto di vista grafico, risolvere l'equazione equivale a trovare le ascisse dei punti di intersezione della funzione con la retta $y = e - 2$. Dal grafico si osservano due punti $A$ e $B$ con $x_A < x_B$.

Indichiamo la funzione $g(x) = f(x) - (e-2)$. Si usano il **metodo di bisezione** nell'intervallo $[1{,}001;\, 2]$ (dove $g$ cambia segno, con $g(1{,}001) > 0$ e $g(2) = 2 - 0 - e < 0$):

| $n$ | $a_n$  | $b_n$ | $m_n$ | $g(m_n)$ |
|-----|--------|-------|-------|----------|
| 0   | 1,001  | 2     | 1,5   | $-0{,}53$ |
| 1   | 1,001  | 1,5   | 1,25  | $-0{,}08$ |
| 2   | 1,001  | 1,25  | 1,13  | $0{,}45$  |
| 3   | 1,13   | 1,25  | 1,19  | $0{,}13$  |
| 4   | 1,19   | 1,25  | 1,22  | $0{,}02$  |
| 5   | 1,22   | 1,25  | —     | —         |

Abbiamo quindi $x_A \in [1{,}22;\, 1{,}25]$, quindi $x_A = 1{,}2$ (con una cifra decimale esatta).

### d) Area tra il grafico e l'asse delle ascisse fino a $x = 1$

La regione è compresa tra il grafico di $f(x)$, l'asse delle ascisse e la retta $x = 1$; per $1 < x \le 2$ si ha $f(x) \le 0$. L'area è:

$$\text{Area} = -\int_1^2 f(x)\, dx = \int_1^2 [2 - x + \ln(x-1)]\, dx$$

(integrale improprio poiché $f$ diverge per $x \to 1^+$).

Calcoliamo la primitiva di $x - 2 - \ln(x-1)$:

$$\int[x - 2 - \ln(x-1)]\, dx = \frac{x^2}{2} - x + (1-x)\ln(x-1) + c.$$

(verificabile per derivazione, usando $\frac{d}{dx}[(1-x)\ln(x-1)] = -\ln(x-1) + \frac{1-x}{x-1} = -\ln(x-1) - 1$).

Quindi:

$$\text{Area} = \lim_{t \to 1^+}\left[\frac{x^2}{2} - x - (1-x)\ln(x-1)\right]_t^2.$$

Calcoliamo il limite di $(1-t)\ln(t-1)$ per $t \to 1^+$. Applicando De L'Hospital:

$$\lim_{t \to 1^+}(1-t)\ln(t-1) = \lim_{t \to 1^+}\frac{\ln(t-1)}{\frac{1}{1-t}} = \lim_{t \to 1^+}\frac{\frac{1}{t-1}}{-\frac{1}{(1-t)^2}} = \lim_{t \to 1^+}(1-t) = 0.$$

Pertanto:

$$\text{Area} = \left(2 - 2 + 0\right) - \left(\frac{1}{2} - 1 + 0\right) = 0 + \frac{1}{2} = \frac{1}{2}.$$

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
