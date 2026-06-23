---
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2012_5_62_1
of_item: prob_simzan_simzan_parte1_2012_5_62_1
prova_id: prova_simzan_simzan_parte1_2012_5_62
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2012_5_62_1|Simulazione Zanichelli 2012 Ordinamento n.5 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_5_62|Simulazione Zanichelli 2012 Ordinamento n.5]]

Sono date la famiglia di funzioni $f(x) = ax^3 + x$ con $a \in \mathbb{R}$, e la funzione $g(x) = x^4 - x^2$.

### Punto a)

Dimostriamo che tutti i grafici di $f$ hanno un unico punto in comune e che tale punto appartiene anche al grafico di $g$. Poniamo $f(x) = 0$:

$$ax^3 + x = 0 \quad \Rightarrow \quad x(ax^2 + 1) = 0.$$

Le soluzioni dipendono da $a$:
- se $a \ge 0$: $ax^2 + 1 > 0$ per ogni $x$, quindi l'unica soluzione è $x = 0$;
- se $a < 0$: si hanno anche le soluzioni $x = \pm\dfrac{1}{\sqrt{-a}}$.

L'unico punto comune a tutti i grafici (per ogni $a \in \mathbb{R}$) è $x = 0$, che dà $f(0) = 0$, cioè l'origine $O = (0, 0)$.

Verifichiamo che $O$ appartiene anche al grafico di $g$: $g(0) = 0^4 - 0^2 = 0$. Confermato.

**Studio di $f(x) = x(ax^2 + 1)$ al variare di $a$.**

- Dominio: $\mathbb{R}$.
- Parità: $f(-x) = -ax^3 - x = -f(x)$, quindi $f$ è dispari per ogni $a$.
- Limiti: $\lim_{x \to \pm\infty} f(x) = \pm\infty$; nessun asintoto.
- Derivata prima: $f'(x) = 3ax^2 + 1$.

  Segno di $f'(x)$:
  - se $a \ge 0$: $f'(x) > 0$ per ogni $x \in \mathbb{R}$, quindi $f$ è strettamente crescente;
  - se $a < 0$: $f'(x) \ge 0$ per $-\dfrac{1}{\sqrt{-3a}} \le x \le \dfrac{1}{\sqrt{-3a}}$, con due zeri (massimo e minimo relativi).

- Derivata seconda: $f''(x) = 6ax$.

  Segno di $f''(x)$:
  - se $a > 0$: $f''(x) \ge 0$ per $x \ge 0$; flesso in $x=0$;
  - se $a = 0$: $f''(x) = 0$ per ogni $x$; la funzione è la retta $y = x$;
  - se $a < 0$: $f''(x) \ge 0$ per $x \le 0$; flesso in $x=0$.

*(grafico — vedi PDF p.66)*

**Studio di $g(x) = x^4 - x^2$.**

- Dominio: $\mathbb{R}$.
- Parità: $g(-x) = x^4 - x^2 = g(x)$, quindi $g$ è pari.
- Limiti: $\lim_{x \to \pm\infty} g(x) = +\infty$.
- Derivata prima: $g'(x) = 4x^3 - 2x = 2x(2x^2 - 1)$.

  Zeri: $x = 0$, $x = \pm\dfrac{1}{\sqrt{2}}$.

  $g$ ha: massimo relativo in $x=0$ con $g(0)=0$; minimi relativi in $x = \pm\dfrac{1}{\sqrt{2}}$ con $g\!\left(\pm\dfrac{1}{\sqrt{2}}\right) = \dfrac{1}{4} - \dfrac{1}{2} = -\dfrac{1}{4}$.

- Derivata seconda: $g''(x) = 12x^2 - 2$; zeri in $x = \pm\dfrac{1}{\sqrt{6}}$ (punti di flesso).

*(grafico — vedi PDF p.67)*

### Punto b)

Dimostriamo che $ax^3 + x = x^4 - x^2$ ammette almeno due soluzioni per ogni $a \in \mathbb{R}$.

Definiamo $h(x) = f(x) - g(x) = ax^3 + x - x^4 + x^2$. Si ha $h(0) = 0$, quindi $x = 0$ è sempre una soluzione.

Osserviamo che:
- $\lim_{x\to+\infty} h(x) = -\infty$ e $\lim_{x\to-\infty} h(x) = +\infty$ (il termine dominante è $-x^4$);
- $h(0) = 0$.

Poiché $h(0) = 0$ e $h(x) \to -\infty$ per $x \to +\infty$, la funzione $h$ deve assumere valori negativi per $x$ grande positivo, quindi passa per lo zero in un altro punto. Analogamente per $x < 0$.

Dall'analisi dei grafici (Figura 3), si vede che per ogni $a$ i grafici di $f$ e $g$ si intersecano in almeno due punti (sempre l'origine e almeno un altro punto).

*(grafico — vedi PDF p.67)*

### Punto c)

Determiniamo il valore di $a$ per cui $f$ e $g$ hanno la stessa retta tangente nel punto di ascissa $x = -1$.

Condizioni:
1. $f(-1) = g(-1)$ (stesso punto sul grafico);
2. $f'(-1) = g'(-1)$ (stessa pendenza).

Calcoliamo:
$$f(-1) = a(-1)^3 + (-1) = -a - 1, \qquad g(-1) = (-1)^4 - (-1)^2 = 1 - 1 = 0.$$
$$f'(-1) = 3a(-1)^2 + 1 = 3a + 1, \qquad g'(-1) = 4(-1)^3 - 2(-1) = -4 + 2 = -2.$$

Dalla condizione 2: $3a + 1 = -2 \Rightarrow a = -1$.

Verifica con la condizione 1: $f(-1) = -(-1) - 1 = 0 = g(-1)$. Confermato.

La retta tangente comune in $x=-1$:
$$y = f'(-1)(x+1) + f(-1) = -2(x+1) + 0 = -2x - 2.$$

*(grafico — vedi PDF p.68)*

### Punto d)

Con $a = -1$, calcoliamo l'area della regione finita delimitata dai grafici di $f(x) = -x^3 + x$ e $g(x) = x^4 - x^2$.

Troviamo i punti di intersezione: $f(x) = g(x)$:
$$-x^3 + x = x^4 - x^2 \quad \Rightarrow \quad x^4 + x^3 - x^2 - x = 0 \quad \Rightarrow \quad x(x^4 + x^3 - x^2 - x)/x = 0.$$

Più precisamente: $x^4 + x^3 - x^2 - x = x(x^3 + x^2 - x - 1)$.

Fattorizziamo $x^3 + x^2 - x - 1 = x^2(x+1) - (x+1) = (x^2-1)(x+1) = (x-1)(x+1)^2$:

$$x(x-1)(x+1)^2 = 0 \quad \Rightarrow \quad x = 0,\; x = 1,\; x = -1.$$

La regione finita è delimitata tra $x = -1$ e $x = 1$. Dall'analisi dei grafici si ha:
- in $[-1, 0]$: $g(x) \ge f(x)$;
- in $[0, 1]$: $f(x) \ge g(x)$.

$$A = \int_{-1}^{0}[g(x) - f(x)]\,dx + \int_{0}^{1}[f(x) - g(x)]\,dx = \int_{-1}^{0}(x^4 + x^3 - x^2 - x)\,dx + \int_{0}^{1}(-x^4 - x^3 + x^2 + x)\,dx.$$

Primitiva di $x^4 + x^3 - x^2 - x$: $F(x) = \dfrac{x^5}{5} + \dfrac{x^4}{4} - \dfrac{x^3}{3} - \dfrac{x^2}{2}$.

$$\int_{-1}^{0}(x^4+x^3-x^2-x)\,dx = F(0) - F(-1) = 0 - \left(-\frac{1}{5}+\frac{1}{4}+\frac{1}{3}-\frac{1}{2}\right).$$

$$F(-1) = -\frac{1}{5}+\frac{1}{4}+\frac{1}{3}-\frac{1}{2} = \frac{-12+15+20-30}{60} = \frac{-7}{60}.$$

Quindi $\displaystyle\int_{-1}^{0} = 0 - \left(-\frac{7}{60}\right) = \frac{7}{60}$.

$$\int_{0}^{1}(-x^4-x^3+x^2+x)\,dx = \left[-\frac{x^5}{5}-\frac{x^4}{4}+\frac{x^3}{3}+\frac{x^2}{2}\right]_{0}^{1} = -\frac{1}{5}-\frac{1}{4}+\frac{1}{3}+\frac{1}{2} = \frac{-12-15+20+30}{60} = \frac{23}{60}.$$

$$A = \frac{7}{60} + \frac{23}{60} = \frac{30}{60} = \frac{1}{2}.$$

*(grafico — vedi PDF p.68)*

### Punto e)

Calcoliamo il volume del solido con base la parte finita di piano nel primo e quarto quadrante delimitata dai grafici (intervallo $[0,1]$), con sezioni rettangolari di altezza $\dfrac{1}{x}$ perpendicolari all'asse $x$.

L'elemento di volume è:

$$dV = \frac{1}{x}\cdot[f(x) - g(x)]\,dx = \frac{1}{x}(-x^4 - x^3 + x^2 + x)\,dx = (-x^3 - x^2 + x + 1)\,dx.$$

*(grafico — vedi PDF p.69)*

$$V = \int_{0}^{1}(-x^3 - x^2 + x + 1)\,dx = \left[-\frac{x^4}{4} - \frac{x^3}{3} + \frac{x^2}{2} + x\right]_{0}^{1} = -\frac{1}{4} - \frac{1}{3} + \frac{1}{2} + 1 = \frac{-3-4+6+12}{12} = \frac{11}{12}.$$

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
