---
title: 'Simulazione Zanichelli 2012 Sperimentale #4 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2012_4_44_1
of_item: prob_simzan_simzan_parte1_2012_4_44_1
prova_id: prova_simzan_simzan_parte1_2012_4_44
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2012_4_44_1|Simulazione Zanichelli 2012 Sperimentale n.4 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_4_44|Simulazione Zanichelli 2012 Sperimentale n.4]]

Determiniamo le caratteristiche valide per tutte le funzioni della famiglia $f(x) = kx + (1-x)e^{2x}$.

**Dominio:** $D = \mathbb{R}$.

**Derivata prima:**
$$y' = k - e^{2x} + (1-x) \cdot 2e^{2x} = k + (1-2x)e^{2x}.$$

**Derivata seconda:**
$$y'' = -2e^{2x} + (1-2x) \cdot 2e^{2x} = -4xe^{2x}.$$

Tutte le funzioni della famiglia sono continue e derivabili indefinitamente.

### Punto a)

I punti di intersezione comuni ai grafici di tutte le funzioni sono quelli le cui coordinate soddisfano l'uguaglianza $y = kx + (1-x)e^{2x}$ per ogni $k \in \mathbb{R}$. Ciò significa che l'equazione

$$kx + (1-x)e^{2x} - y = 0$$

è indeterminata rispetto all'incognita $k$. Trattandosi di un'equazione di primo grado in $k$, essa è indeterminata se e solo se i suoi coefficienti sono entrambi nulli, ossia:

$$\begin{cases} x = 0 \\ (1-x)e^{2x} - y = 0 \end{cases} \;\longrightarrow\; \begin{cases} x = 0 \\ y = 1 \end{cases}.$$

I grafici di tutte le funzioni passano pertanto per il punto $A(0;\,1)$. Verifichiamo che tale punto è anche l'unico flesso per ciascuna funzione. Studiamo il segno della derivata seconda:

$$y'' = -4xe^{2x} > 0 \;\longrightarrow\; x < 0.$$

*(grafico — vedi PDF p.44)*

La concavità è positiva per $x < 0$, negativa per $x > 0$: il punto $A$ è l'unico punto di flesso per ogni $k \in \mathbb{R}$.

### Punto b)

Poiché tutte le funzioni sono continue in $\mathbb{R}$, nessuna presenta asintoti verticali. Ricerchiamo eventuali asintoti orizzontali e obliqui analizzando il comportamento delle funzioni per $x \to -\infty$ e $x \to +\infty$.

**Per $x \to -\infty$:**

$$m = \lim_{x \to -\infty} \frac{y(x)}{x} = \lim_{x \to -\infty} \frac{kx + (1-x)e^{2x}}{x} = \lim_{x \to -\infty} \left(k + \frac{1-x}{x}\,e^{2x}\right) = k;$$

$$q = \lim_{x \to -\infty} [y(x) - kx] = \lim_{x \to -\infty} (1-x)e^{2x}.$$

Questo limite si presenta nella forma indeterminata $\infty \cdot 0$; riconduco alla forma $\frac{\infty}{\infty}$ e applico il teorema di De L'Hospital:

$$\lim_{x \to -\infty} (1-x)e^{2x} = \lim_{x \to -\infty} \frac{1-x}{e^{-2x}}; \qquad \lim_{x \to -\infty} \frac{D[1-x]}{D[e^{-2x}]} = \lim_{x \to -\infty} \frac{-1}{-2e^{-2x}} = \lim_{x \to -\infty} \frac{1}{2}e^{2x} = 0.$$

Quindi $q = 0$ e la generica funzione ha come asintoto obliquo, per $x \to -\infty$, la retta:
$$y = kx.$$

Nel caso $k = 0$ l'asintoto è orizzontale e coincide con l'asse delle ascisse.

**Per $x \to +\infty$:**

$$m = \lim_{x \to +\infty} \frac{y(x)}{x} = \lim_{x \to +\infty} \left(k + \frac{1-x}{x}\,e^{2x}\right) = -\infty \;\longrightarrow\; \text{nessun asintoto obliquo per } x \to +\infty.$$

Questo risultato esclude anche l'asintoto orizzontale per $x \to +\infty$; infatti:

$$\lim_{x \to +\infty} [kx + (1-x)e^{2x}] = \lim_{x \to +\infty} x\left(k + \frac{(1-x)e^{2x}}{x}\right) = +\infty \cdot (-\infty) = -\infty.$$

L'unico asintoto della generica funzione è quindi la retta $y = kx$, che coincide con $y = -\frac{1}{2}x$ per $k = -\frac{1}{2}$.

**Intersezione del grafico con il suo asintoto:**

$$\begin{cases} y = kx + (1-x)e^{2x} \\ y = kx \end{cases} \;\longrightarrow\; (1-x)e^{2x} = 0 \;\longrightarrow\; \begin{cases} x = 1 \\ y = k \end{cases}.$$

Il grafico e il suo asintoto si intersecano in un solo punto di coordinate $(1;\,k)$.

### Punto c)

Per $k = -\frac{1}{2}$ la funzione diventa:
$$y = -\frac{1}{2}x + (1-x)e^{2x}.$$

Dai punti precedenti sappiamo già che:
- dominio $D = \mathbb{R}$;
- unico flesso in $A(0;\,1)$, concavità verso l'alto per $x < 0$ e verso il basso per $x > 0$;
- asintoto obliquo $y = -\frac{1}{2}x$ per $x \to -\infty$;
- $y \to -\infty$ per $x \to +\infty$;
- intersezione con l'asintoto nel punto $B\!\left(1;\,-\frac{1}{2}\right)$.

*(grafico — vedi PDF p.46)*

Studiamo il segno della derivata prima per trovare eventuali estremi:
$$y' = -\frac{1}{2} + (1-2x)e^{2x}.$$

$$y' \ge 0 \;\longrightarrow\; (1-2x)e^{2x} \ge \frac{1}{2}.$$

Per $x < \frac{1}{2}$ (cioè $1-2x > 0$) si può scrivere:
$$e^{2x} \ge \frac{1}{2(1-2x)}.$$

Risolviamo graficamente questa disequazione *(grafico — vedi PDF p.47)*, considerando le funzioni $y = e^{2x}$ e $y = \frac{1}{2(1-2x)}$ (funzione omografica di centro $\left(\frac{1}{2};\,0\right)$).

Dal grafico si deduce che per $\alpha \le x \le \beta$, con $\alpha < 0$ e $0 < \beta < \frac{1}{2}$, risulta $e^{2x} \ge \frac{1}{2(1-2x)}$, ossia $y' \ge 0$.

*(grafico dei segni di $y'$ — vedi PDF p.47)*

La funzione ha un minimo relativo di ascissa negativa e un massimo relativo di ascissa compresa tra $0$ e $\frac{1}{2}$. Per $x > \frac{1}{2}$ la concavità è sempre verso il basso, quindi non vi sono altri estremi.

### Punto d)

La regione di piano di cui calcolare l'area è quella compresa tra il grafico di $y = -\frac{1}{2}x + (1-x)e^{2x}$ e il suo asintoto $y = -\frac{1}{2}x$, per $x \le 0$ *(grafico — vedi PDF p.47)*.

L'area è data dall'integrale improprio:

$$S = \int_{-\infty}^{0} \left[\left(-\frac{1}{2}x + (1-x)e^{2x}\right) - \left(-\frac{1}{2}x\right)\right]dx = \int_{-\infty}^{0} (1-x)e^{2x}\,dx = \lim_{\delta \to -\infty} \int_{\delta}^{0} (1-x)e^{2x}\,dx.$$

Calcoliamo con il metodo di integrazione per parti:

$$S_\delta = \int_{\delta}^{0} (1-x)e^{2x}\,dx = \left[(1-x)\frac{e^{2x}}{2}\right]_{\delta}^{0} + \frac{1}{2}\int_{\delta}^{0} e^{2x}\,dx = \frac{1}{2} - \frac{(1-\delta)e^{2\delta}}{2} + \left[\frac{e^{2x}}{4}\right]_{\delta}^{0}$$

$$= \frac{1}{2} - \frac{(1-\delta)e^{2\delta}}{2} + \frac{1}{4} - \frac{e^{2\delta}}{4} = \frac{3}{4} - \frac{3-2\delta}{4}\,e^{2\delta}.$$

Nel limite per $\delta \to -\infty$, il secondo addendo è una forma indeterminata $\infty \cdot 0$; trasformandola in $\frac{\infty}{\infty}$ e applicando De L'Hospital:

$$\lim_{\delta \to -\infty} \frac{3-2\delta}{4}\,e^{2\delta} = \lim_{\delta \to -\infty} \frac{3-2\delta}{4e^{-2\delta}}; \qquad \lim_{\delta \to -\infty} \frac{-2}{-8e^{-2\delta}} = 0.$$

Pertanto:
$$S = \lim_{\delta \to -\infty} S_\delta = \frac{3}{4}.$$

### Punto e)

Nel piano $(x,y)$ di un riferimento $O(x,y,z)$ si traccia il grafico della funzione, si evidenzia l'area di base del solido e si interseca tale area con un piano $\alpha$ perpendicolare all'asse $x$; la sezione è l'esagono regolare $PQRSTU$ *(grafico — vedi PDF p.48)*.

L'elemento infinitesimo di volume è:
$$dV = S_{es}\,dx = 6 \cdot \frac{1}{2}\,\overline{PQ} \cdot \overline{HC}\,dx = \frac{3\sqrt{3}}{2}\,\overline{PQ}^2\,dx = \frac{3\sqrt{3}}{2}(1-x)^2 e^{4x}\,dx.$$

Il volume richiesto è:
$$V = \int_{0}^{1} \frac{3\sqrt{3}}{2}(1-x)^2 e^{4x}\,dx = \frac{3\sqrt{3}}{2}\int_{0}^{1}(1-x)^2 e^{4x}\,dx.$$

Calcoliamo l'integrale con due applicazioni successive dell'integrazione per parti:

$$\int_{0}^{1}(1-x)^2 e^{4x}\,dx = \left[(1-x)^2\frac{e^{4x}}{4}\right]_{0}^{1} - \int_{0}^{1}\frac{(-2)(1-x)e^{4x}}{4}\,dx$$

$$= -\frac{1}{4} + \frac{1}{2}\left\{\left[(1-x)\frac{e^{4x}}{4}\right]_{0}^{1} - \int_{0}^{1}\frac{-e^{4x}}{4}\,dx\right\}$$

$$= -\frac{1}{4} + \frac{1}{2}\left\{-\frac{1}{4} + \left[\frac{e^{4x}}{16}\right]_{0}^{1}\right\} = -\frac{1}{4} - \frac{1}{8} + \frac{e^4-1}{32} = \frac{e^4-13}{32}.$$

Il volume del solido è dunque:
$$V = \frac{3\sqrt{3}}{2} \cdot \frac{e^4-13}{32} = \frac{3\sqrt{3}(e^4-13)}{64}.$$

---

*Fonte:* [📄 PDF p.44](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
