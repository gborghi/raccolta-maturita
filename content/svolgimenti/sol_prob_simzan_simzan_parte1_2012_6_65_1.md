---
title: 'Simulazione Zanichelli 2012 Ordinamento #6 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2012_6_65_1
of_item: prob_simzan_simzan_parte1_2012_6_65_1
prova_id: prova_simzan_simzan_parte1_2012_6_65
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2012_6_65_1|Simulazione Zanichelli 2012 Ordinamento n.6 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_6_65|Simulazione Zanichelli 2012 Ordinamento n.6]]

### Punto a)

Poiché per ogni valore di $a$ l'espressione analitica di $f$ è un polinomio senza termine noto, tutti i grafici delle funzioni $f$ hanno in comune l'origine. Dimostriamo che è l'unico punto comune a tutti i grafici delle funzioni $f$.

I punti comuni a tutte le funzioni sono quelli le cui coordinate soddisfano $f(x) = y$ per ogni $a \in \mathbb{R}$. Ciò significa che l'equazione

$$ax^3 + x = y$$

deve risultare indeterminata rispetto all'incognita $a$. Trattandosi di un'equazione di primo grado in un'incognita, essa è indeterminata se e solo se i suoi coefficienti sono entrambi nulli, ossia se

$$\begin{cases} x^3 = 0 \\ x = y \end{cases} \quad \Rightarrow \quad \begin{cases} x = 0 \\ y = 0. \end{cases}$$

L'origine è dunque l'unico punto comune a tutti i grafici delle funzioni $f$. Anche l'espressione della funzione $g$ manca del termine noto e quindi il grafico di $g$ passa per l'origine.

Studiamo ora le funzioni $f(x) = x(ax^2 + 1) = ax^3 + x$.

- **Dominio:** $\mathbb{R}$.
- **Parità:** $f(-x) = a(-x)^3 + (-x) = -ax^3 - x = -f(x)$ $\forall x \in \mathbb{R}$, $\forall a \in \mathbb{R}$ $\Rightarrow$ le $f$ sono dispari.
- **Limiti:**

$$\lim_{x \to +\infty} f(x) = +\infty \; \text{se } a \geq 0, \qquad \lim_{x \to +\infty} f(x) = -\infty \; \text{se } a < 0,$$

$$\lim_{x \to -\infty} f(x) = -\infty \; \text{se } a \geq 0, \qquad \lim_{x \to -\infty} f(x) = +\infty \; \text{se } a < 0.$$

Non ci sono asintoti verticali e orizzontali. Se $a \neq 0$, non ci sono neppure asintoti obliqui, in quanto:

$$m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} (ax^2 + 1) = \pm\infty.$$

Se $a = 0$, la funzione si riduce a $f(x) = x$ e ammette l'asintoto obliquo di equazione $y = x$, che coincide con il grafico della funzione stessa.

- **Segno:** $f(x) = x(ax^2 + 1)$.

Se $a \geq 0$: $ax^2 + 1 \geq 1 > 0$ per ogni $x$, quindi $f(x) \geq 0$ se $x \geq 0$ e $f(x) < 0$ se $x < 0$.

Se $a < 0$: $ax^2 + 1 = 0 \Rightarrow x = \pm\dfrac{1}{\sqrt{-a}}$; il segno di $f$ cambia nei punti $x = -\dfrac{1}{\sqrt{-a}}$, $x = 0$, $x = \dfrac{1}{\sqrt{-a}}$.

*(grafico — vedi PDF p.66)*

- **Derivata prima:** $f'(x) = 3ax^2 + 1$ $\forall a \in \mathbb{R}$.

Studiamo il segno di $f'(x)$:
- se $a \geq 0$: $f'(x) > 0$ $\forall x \in \mathbb{R}$;
- se $a < 0$: $f'(x) \geq 0$ se $-\dfrac{1}{\sqrt{-3a}} \leq x \leq \dfrac{1}{\sqrt{-3a}}$.

- **Derivata seconda:** $f''(x) = 6ax$ $\forall a \in \mathbb{R}$.

Studiamo il segno di $f''(x)$:
- se $a > 0$: $f''(x) \geq 0$ se $x \geq 0$;
- se $a = 0$: $f''(x) = 0$ $\forall x \in \mathbb{R}$;
- se $a < 0$: $f''(x) \geq 0$ se $x \leq 0$.

Riassumiamo lo studio del segno, della crescenza e della concavità delle funzioni $f$ nella seguente tabella.

*(grafico — vedi PDF p.66)*

Studiamo ora la funzione $g(x) = x^4 - x^2$.

- **Dominio:** $\mathbb{R}$.
- **Parità:** $g(-x) = (-x)^4 - (-x)^2 = x^4 - x^2 = g(x)$ $\forall x \in \mathbb{R}$ $\Rightarrow$ $g$ è pari.
- **Limiti:**

$$\lim_{x \to \pm\infty} g(x) = +\infty.$$

Non ci sono asintoti verticali o orizzontali. Non ci sono asintoti obliqui, in quanto:

$$m = \lim_{x \to \pm\infty} \frac{x^4 - x^2}{x} = \lim_{x \to \pm\infty} (x^3 - x) = \pm\infty \neq \text{costante}.$$

- **Derivata prima:** $g'(x) = 4x^3 - 2x$.

Studiamo il segno di $g'(x)$:

$$4x^3 - 2x \geq 0 \;\Rightarrow\; 2x(2x^2 - 1) \geq 0 \;\Rightarrow\; -\tfrac{1}{\sqrt{2}} < x < 0 \;\text{ oppure }\; x > \tfrac{1}{\sqrt{2}}.$$

- **Derivata seconda:** $g''(x) = 12x^2 - 2$.

Studiamo il segno di $g''(x)$:

$$12x^2 - 2 \geq 0 \;\Rightarrow\; x \leq -\tfrac{1}{\sqrt{6}} \;\text{ oppure }\; x \geq \tfrac{1}{\sqrt{6}}.$$

Riportiamo lo studio del segno, della crescenza e della concavità della funzione $g$ nei seguenti grafici.

*(grafico — vedi PDF p.67)*

Rappresentiamo i grafici delle funzioni (figura 3).

*(grafico — vedi PDF p.67)*

### Punto b)

L'equazione assegnata $f(x) = g(x)$ esprime la condizione $f(x) - g(x) = 0$; le soluzioni pertanto corrispondono agli zeri della funzione:

$$h(x) = f(x) - g(x) = ax^3 + x - x^4 + x^2.$$

**I caso: $a \geq 0$.**

Osservando la figura 3a notiamo che i grafici di $f$ e $g$ si incontrano, oltre che in $O$, anche in un punto di ascissa maggiore di 1. Infatti:

$$h(1) = a + 1 - 1 + 1 = a + 1 > 0 \quad (a \geq 0),$$

e

$$\lim_{x \to +\infty} h(x) = \lim_{x \to +\infty}(ax^3 + x - x^4 + x^2) = -\infty,$$

dunque, essendo $h$ continua, per il teorema di esistenza degli zeri, essa si annulla almeno una volta per $x > 1$. Quindi i grafici delle due funzioni si incontrano in almeno un punto con ascissa maggiore di 1 e perciò, considerando anche il punto $(0; 0)$, hanno almeno due punti di intersezione.

**II caso: $a < 0$.**

Analogamente, dall'esame della figura 3b notiamo che i grafici di $f$ e $g$ si incontrano almeno una volta per $x < 0$, quindi hanno almeno due punti di intersezione.

### Punto c)

In $a = -1$ devono essere verificate le due condizioni:

$$\begin{cases} f(-1) = g(-1) \\ f'(-1) = g'(-1) \end{cases}$$

Calcoliamo: $g(-1) = 1 - 1 = 0$, $g'(-1) = -4 + 2 = -2$.

Dalla prima condizione: $f(-1) = a(-1)^3 + (-1) = -a - 1 = 0 \Rightarrow a = -1$.

Verifica con la seconda condizione: $f'(x) = 3ax^2 + 1$, $f'(-1) = 3(-1)(1) + 1 = -2 = g'(-1)$. ✓

Sostituiamo il valore $a = -1$ nella funzione $f$: $f(x) = -x^3 + x$.

La retta tangente comune ha equazione:

$$y - f(-1) = f'(-1)(x - (-1)) \;\Rightarrow\; y - 0 = -2(x + 1) \;\Rightarrow\; y = -2x - 2.$$

*(grafico — vedi PDF p.68)*

### Punto d)

La regione di piano di cui si deve trovare l'area è formata da due parti (figura 4): la prima con $-1 \leq x \leq 0$, la seconda con $0 \leq x \leq 1$. L'area è data dalla somma dei seguenti due integrali:

$$\mathcal{A} = \int_{-1}^{0}[f(x) - g(x)]\,dx + \int_{0}^{1}[f(x) - g(x)]\,dx$$

Con $a = -1$: $f(x) - g(x) = -x^3 + x - x^4 + x^2$.

$$= \int_{-1}^{0}(-x^4 - x^3 + x^2 + x)\,dx + \int_{0}^{1}(-x^4 - x^3 + x^2 + x)\,dx$$

$$= \left[-\frac{x^5}{5} - \frac{x^4}{4} + \frac{x^3}{3} + \frac{x^2}{2}\right]_{-1}^{0} + \left[-\frac{x^5}{5} - \frac{x^4}{4} + \frac{x^3}{3} + \frac{x^2}{2}\right]_{0}^{1}$$

$$= \left(0 - \left(\frac{1}{5} - \frac{1}{4} - \frac{1}{3} + \frac{1}{2}\right)\right) + \left(\left(-\frac{1}{5} - \frac{1}{4} + \frac{1}{3} + \frac{1}{2}\right) - 0\right)$$

$$= -\frac{7}{60} + \frac{7}{60} = \frac{7}{30}.$$

*(grafico — vedi PDF p.68)*

### Punto e)

Rappresentiamo in un riferimento cartesiano ortogonale tridimensionale la base del solido, la sezione ottenuta con un generico piano ortogonale all'asse $x$ e il corrispondente elemento infinitesimo di volume. In base ai dati forniti la generica sezione è un rettangolo di altezza $\dfrac{1}{x}$ e base $f(x) - g(x) = -x^4 - x^3 + x^2 + x$.

*(grafico — vedi PDF p.69)*

Il volume dell'elemento infinitesimo generico è:

$$dV = \frac{1}{x}[f(x) - g(x)]\,dx = \frac{1}{x}(-x^4 - x^3 + x^2 + x)\,dx = (-x^3 - x^2 + x + 1)\,dx.$$

Osserviamo che per $x$ tendente a $0$ la sezione ha area finita, anche se l'altezza $\dfrac{1}{x}$ tende a $+\infty$, in quanto il prodotto $\dfrac{1}{x}[f(x) - g(x)]$ tende a $1$ per $x \to 0$. Possiamo quindi determinare il volume del solido calcolando l'integrale definito:

$$V = \int_{0}^{1}(-x^3 - x^2 + x + 1)\,dx = \left[-\frac{x^4}{4} - \frac{x^3}{3} + \frac{x^2}{2} + x\right]_{0}^{1} = -\frac{1}{4} - \frac{1}{3} + \frac{1}{2} + 1 = \frac{11}{12}.$$

---

*Fonte:* [📄 PDF p.65](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
