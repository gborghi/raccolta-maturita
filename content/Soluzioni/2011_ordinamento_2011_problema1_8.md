---
tipo: soluzione
prova_stem: 2011_ordinamento_2011_problema1_8
pdf: Prova_Maturita_2011.pdf
source: text
title: Soluzioni — 2011_ordinamento_2011_problema1_8
---

# Soluzioni — 2011_ordinamento_2011_problema1_8

## Problema 1

### 1)

Le due funzioni assegnate sono:

$$f(x) = x^3 - 4x$$

$$g(x) = \sin(\pi x)$$

La prima funzione è una cubica simmetrica rispetto all'origine, definita su tutto $\mathbb{R}$, con limiti $+\infty$ e $-\infty$ rispettivamente a $+\infty$ e $-\infty$. Le intersezioni con l'asse $x$ sono in $x = 0, -2, 2$.

Risulta poi:

$$f'(x) = 3x^2 - 4$$

Dallo studio della derivata prima si trovano il massimo ed il minimo relativi, che sono rispettivamente

$$M = \left(-\frac{2}{\sqrt{3}},\; \frac{16}{9}\sqrt{3}\right) \quad \text{ed} \quad m = \left(\frac{2}{\sqrt{3}},\; -\frac{16}{9}\sqrt{3}\right)$$

$$f''(x) = 6x$$

Flesso nell'origine; concavità verso l'alto per $x > 0$.

*(grafico — vedi PDF)*

La seconda funzione, $g(x) = \sin(\pi x)$, è una funzione sinusoidale di periodo

$$T = \frac{2\pi}{\pi} = 2$$

*(grafico — vedi PDF)*

I due grafici, nello stesso sistema di riferimento: *(grafico — vedi PDF)*

### 2)

Le intersezioni del grafico di $f$ con la retta $y = -3$ si ottengono risolvendo il sistema:

$$\begin{cases} y = x^3 - 4x \\ y = -3 \end{cases}$$

che conduce all'equazione:

$$x^3 - 4x + 3 = 0$$

Quest'ultima si abbassa di grado con $x = 1$ mediante la regola di Ruffini:

$$(x - 1)(x^2 + x - 3) = 0$$

Le soluzioni sono:

$$x = 1, \qquad x = \frac{-1 \pm \sqrt{13}}{2}$$

I punti del grafico di $g$ a tangente orizzontale nell'intervallo $[-6;\, 6]$ sono i punti per cui $\sin(\pi x) = \pm 1$.

Quelli con ordinata uguale a $1$ hanno ascisse $x = \tfrac{1}{2},\, \tfrac{5}{2},\, \tfrac{9}{2}$ oppure $x = -\tfrac{3}{2},\, -\tfrac{7}{2},\, -\tfrac{11}{2}$.

Quelli con ordinata uguale a $-1$ hanno ascisse $x = -\tfrac{1}{2},\, -\tfrac{5}{2},\, -\tfrac{9}{2}$ oppure $x = \tfrac{3}{2},\, \tfrac{7}{2},\, \tfrac{11}{2}$.

### 3)

La regione $R$ richiesta si ottiene calcolando l'integrale

$$\int_0^2 \bigl(g(x) - f(x)\bigr)\,dx$$

oppure più semplicemente, come si osserva dalla figura:

$$-\int_0^2 f(x)\,dx = -\int_0^2 \!\left(x^3 - 4x\right)dx = -\left[\frac{x^4}{4} - 2x^2\right]_0^2 = -(4 - 8) = 4$$

### 4)

Il volume richiesto si calcola mediante l'integrale definito:

$$\int_0^2 \bigl(g(x) - f(x)\bigr)\cdot h(x)\,dx$$

poiché può essere visto come somma di infiniti rettangoli di dimensioni $\bigl(g(x)-f(x)\bigr)$ e $h(x)$, somma estesa all'intervallo $[0;\, 2]$.

L'integrale da calcolare è il seguente:

$$\int_0^2 \sin(\pi x)\cdot(4x - x^3)\,dx + \int_0^2 (4x - x^3)^2\,dx \cong \frac{116}{15} + \frac{2}{\pi} \approx 8.370$$

(il primo integrale si calcola per parti).

Supponendo le misure in metri, il volume della vasca è pari a

$$V \cong \frac{116}{15} + \frac{2}{\pi} \approx 8.370 \;\text{m}^3 = 8370 \;\text{litri}$$
