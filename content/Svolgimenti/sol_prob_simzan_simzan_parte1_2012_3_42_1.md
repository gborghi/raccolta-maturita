---
title: 'Simulazione Zanichelli 2012 Sperimentale #3 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2012_3_42_1
of_item: prob_simzan_simzan_parte1_2012_3_42_1
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

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2012_3_42_1|Simulazione Zanichelli 2012 Sperimentale n.3 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_3_42|Simulazione Zanichelli 2012 Sperimentale n.3]]

La famiglia di funzioni è $y = kx + (1-x)e^{2x}$, con $k \in \mathbb{R}$.

**Dominio, derivata prima e seconda:**

$$D = \mathbb{R}, \quad y' = k - e^{2x} + (1-x) \cdot 2e^{2x} = k + (1-2x)e^{2x},$$
$$y'' = -2e^{2x} + (1-2x) \cdot 2e^{2x} = -4xe^{2x}.$$

Tutte le funzioni della famiglia sono continue e derivabili indefinitamente.

### a) Punto comune e unico flesso

I punti di intersezione comuni a tutte le funzioni sono i punti le cui coordinate soddisfano $y = kx + (1-x)e^{2x}$ per ogni $k \in \mathbb{R}$. Trattando tale equazione come equazione di primo grado nell'incognita $k$, essa è indeterminata se e solo se i suoi coefficienti sono entrambi nulli, ossia:

$$\begin{cases} x = 0 \\ (1-x)e^{2x} - y = 0 \end{cases} \longrightarrow \begin{cases} x = 0 \\ y = 1. \end{cases}$$

I grafici di tutte le funzioni passano pertanto per il punto $A(0; 1)$. Verifichiamo che tale punto è anche l'unico flesso per ciascuna funzione. La derivata seconda si annulla e cambia segno in $x = 0$:

$$y'' = -4xe^{2x} > 0 \Longleftrightarrow x < 0.$$

La concavità è verso l'alto per $x < 0$ e verso il basso per $x > 0$; dunque $A(0; 1)$ è l'unico punto di flesso di ogni funzione della famiglia.

### b) Asintoti

**Per $x \to -\infty$:**

$$m = \lim_{x \to -\infty} \frac{y(x)}{x} = \lim_{x \to -\infty} \left(k + \frac{1-x}{x} e^{2x}\right) = k,$$

poiché $(1-x)e^{2x} / x \to 0$ per $x \to -\infty$ (l'esponenziale batte il polinomio).

$$q = \lim_{x \to -\infty}[y(x) - kx] = \lim_{x \to -\infty}(1-x)e^{2x} = 0.$$

Quindi per $x \to -\infty$ l'asintoto obliquo è $y = kx$.

**Per $x \to +\infty$:** $\lim_{x \to +\infty} \frac{y(x)}{x} = -\infty$, quindi non esiste alcun asintoto obliquo.

L'unico asintoto della generica funzione della famiglia è la retta $y = kx$; coincide con $y = -\frac{1}{2}x$ per $k = -\frac{1}{2}$.

**Intersezioni con l'asintoto:**

$$\begin{cases} y = kx + (1-x)e^{2x} \\ y = kx \end{cases} \longrightarrow (1-x)e^{2x} = 0 \longrightarrow x = 1, \quad y = k.$$

Il grafico e il corrispondente asintoto si intersecano nell'unico punto $(1; k)$.

### c) Studio della funzione per $k = -\frac{1}{2}$

La funzione diventa $y = -\frac{1}{2}x + (1-x)e^{2x}$.

- **Dominio:** $D = \mathbb{R}$.
- **Derivata prima:** $y' = -\frac{1}{2} + (1-2x)e^{2x}$.
- **Derivata seconda:** $y'' = -4xe^{2x}$; flesso in $A(0; 1)$.
- **Asintoto:** $y = -\frac{1}{2}x$ per $x \to -\infty$; la funzione tende a $-\infty$ per $x \to +\infty$.
- Interseca l'asintoto nel punto $\left(1; -\frac{1}{2}\right)$.

Studio del segno di $y'$: l'equazione $y' = 0$ equivale a $(1-2x)e^{2x} = \frac{1}{2}$, che per $x < \frac{1}{2}$ si confronta graficamente con $y = \frac{1}{2(1-2x)}$.

*(grafico — vedi PDF p.46)*

Dal grafico (Figura 3) si deduce l'esistenza di $\alpha < 0$ e $0 < \beta < \frac{1}{2}$ tali che $y' \ge 0$ per $\alpha \le x \le \beta$. La funzione ha:
- un **minimo relativo** di ascissa $\alpha < 0$;
- un **massimo relativo** di ascissa $\beta \in \left(0, \frac{1}{2}\right)$.

Per $x > \frac{1}{2}$ la concavità è sempre verso il basso; non ci sono ulteriori estremi.

*(grafico — vedi PDF p.47)*

### d) Area nel secondo quadrante

La regione è quella evidenziata in Figura 5: compresa nel secondo quadrante tra il grafico di $y = -\frac{1}{2}x + (1-x)e^{2x}$, l'asintoto $y = -\frac{1}{2}x$ e l'asse delle ordinate.

*(grafico — vedi PDF p.47)*

L'area è data dall'integrale improprio:

$$S = \int_{-\infty}^{0} \left[(1-x)e^{2x}\right] dx.$$

Calcoliamo $S_\delta = \int_{\delta}^{0} (1-x)e^{2x}\, dx$ per parti:

$$S_\delta = \left.\frac{(1-x)e^{2x}}{2}\right|_{\delta}^{0} + \frac{1}{2}\int_{\delta}^{0} e^{2x}\, dx = \frac{1}{2} - \frac{(1-\delta)e^{2\delta}}{2} + \frac{1}{4}\left[e^{2x}\right]_{\delta}^{0}.$$

$$S_\delta = \frac{1}{2} - \frac{(1-\delta)e^{2\delta}}{2} + \frac{1-e^{2\delta}}{4} = \frac{3}{4} - \frac{3-2\delta}{4}e^{2\delta}.$$

Il termine $\frac{3-2\delta}{4}e^{2\delta} \to 0$ per $\delta \to -\infty$ (forma $\frac{\infty}{\infty}$, De L'Hospital):

$$\lim_{\delta \to -\infty} \frac{3-2\delta}{4} e^{2\delta} = \lim_{\delta \to -\infty} \frac{3-2\delta}{4e^{-2\delta}} = \lim_{\delta \to -\infty} \frac{-2}{-8e^{-2\delta}} = 0.$$

Quindi:

$$S = \lim_{\delta \to -\infty} S_\delta = \frac{3}{4}.$$

### e) Volume del solido con sezioni a esagono regolare

Le sezioni perpendicolari all'asse $x$ sono esagoni regolari; la distanza tra le due curve (grafico e asintoto) per $0 \le x \le 1$ è il lato $\overline{PQ} = (1-x)e^{2x}$.

*(grafico — vedi PDF p.48)*

L'area di un esagono regolare di lato $\ell$ è $\frac{3\sqrt{3}}{2}\ell^2$. L'elemento infinitesimo di volume è:

$$dV = \frac{3\sqrt{3}}{2}(1-x)^2 e^{4x}\, dx.$$

Il volume del solido è:

$$V = \frac{3\sqrt{3}}{2}\int_0^1 (1-x)^2 e^{4x}\, dx.$$

Calcoliamo l'integrale per parti (due applicazioni):

$$\int_0^1 (1-x)^2 e^{4x}\, dx = \left[(1-x)^2\frac{e^{4x}}{4}\right]_0^1 - \int_0^1 \frac{(-2)(1-x)e^{4x}}{4}\, dx$$
$$= -\frac{1}{4} + \frac{1}{2}\left\{\left[(1-x)\frac{e^{4x}}{4}\right]_0^1 - \int_0^1 \frac{-e^{4x}}{4}\, dx\right\}$$
$$= -\frac{1}{4} + \frac{1}{2}\left\{-\frac{1}{4} + \left[\frac{e^{4x}}{16}\right]_0^1\right\}$$
$$= -\frac{1}{4} - \frac{1}{8} + \frac{e^4 - 1}{32} = \frac{e^4 - 13}{32}.$$

Il volume del solido è dunque:

$$V = \frac{3\sqrt{3}}{2} \cdot \frac{e^4 - 13}{32} = \frac{3\sqrt{3}(e^4 - 13)}{64}.$$

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
