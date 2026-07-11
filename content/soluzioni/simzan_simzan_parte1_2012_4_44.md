---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2012_4_44
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2012 Sperimentale #4 — Svolgimento'
---
## Problema 1

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

## Problema 2

### Punto a)

Nella generica funzione omografica $y = \frac{ax+b}{cx+d}$, poiché necessariamente $c \ne 0$, si può porre $c = 1$. Il centro della funzione omografica ha coordinate $C\!\left(-\frac{d}{c};\,\frac{a}{c}\right) \to C(-d;\,a)$.

Affinché il centro sia nel punto $(1;\,1)$ deve essere $a = 1$ e $d = -1$. Poiché $P$ appartiene al grafico di $f'(x)$, è $b = -2$, pertanto:
$$f'(x) = \frac{x-2}{x-1}.$$

Determiniamo $f(x)$ come primitiva di $f'(x)$:
$$f(x) = \int \frac{x-2}{x-1}\,dx = \int\left(1 - \frac{1}{x-1}\right)dx = x - \ln|x-1| + k.$$

La funzione $f(x)$ è definita per $x > 1$, quindi:
$$f(x) = x - \ln(x-1) + k.$$

Poiché il grafico interseca l'asse delle ascisse in $P(2;\,0)$, si ha $f(2) = 0$:
$$2 - \ln 1 + k = 0 \;\longrightarrow\; k = -2.$$

Pertanto:
$$f(x) = x - 2 - \ln(x-1).$$

### Punto b)

**Dominio:** $]1;\,+\infty[$.

**Parità:** la funzione non è né pari né dispari.

**Intersezioni con gli assi.** Non esiste intersezione con l'asse delle ordinate. Per l'asse delle ascisse bisogna risolvere:
$$x - 2 - \ln(x-1) = 0 \;\longrightarrow\; x - 2 = \ln(x-1).$$

Risolviamo graficamente *(grafico — vedi PDF p.50)*: la retta $y = x-2$ è la tangente a $y = \ln(x-1)$ nel punto $P$, quindi l'equazione ha come unica soluzione (doppia) $x = 2$.

**Segno.** $f(x) > 0$ se $x - 2 > \ln(x-1)$: dal grafico precedente si deduce che questo vale per $x \ne 2$, quindi nel suo dominio la funzione è sempre positiva, tranne che per $x = 2$.

**Limiti.**
$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+}[x-2-\ln(x-1)] = +\infty,$$
quindi la retta $x = 1$ è asintoto verticale destro.

$$\lim_{x \to +\infty}[x-2-\ln(x-1)] = +\infty,$$
quindi non esiste asintoto orizzontale. Per l'asintoto obliquo:
$$m = \lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{x-2-\ln(x-1)}{x} = 1;$$

$$q = \lim_{x \to +\infty}[f(x) - x] = \lim_{x \to +\infty}[-2-\ln(x-1)] = -\infty.$$

Poiché $q$ non è finito, non esiste neanche l'asintoto obliquo.

**Crescenza.** $f'(x) = \frac{x-2}{x-1}$: la funzione è decrescente in $]1;\,2[$ e crescente in $]2;\,+\infty[$. Il punto $x = 2$ è un minimo (assoluto).

**Concavità.** Poiché $f'(x) = 1 - \frac{1}{x-1}$, la derivata seconda è:
$$f''(x) = \frac{1}{(x-1)^2},$$
che nel dominio è sempre positiva: la funzione volge sempre la concavità verso l'alto.

*(grafico $\gamma$ di $f(x)$ — vedi PDF p.51)*

### Punto c)

L'equazione $f(x) = e - 2$ equivale a:
$$x - 2 - \ln(x-1) = e-2 \;\longrightarrow\; x - e - \ln(x-1) = 0.$$

Dal punto di vista grafico, cerchiamo le ascisse dei punti di intersezione di $\gamma$ con la retta $y = e-2$ *(grafico — vedi PDF p.52)*.

Dal grafico si osserva che una soluzione $x_A$ è compresa in $[1;\,2]$. Sia $g(x) = x - e - \ln(x-1)$. Poiché $\lim_{x\to 1^+}g(x) > 0$ e $g(2) < 0$, con il metodo di bisezione si determina $x_A$ con l'approssimazione voluta. Partiamo dall'intervallo $[1{,}001;\,2]$:

| $n$ | $a_n$   | $b_n$ | $m_n$ | $g(m_n)$ |
|-----|---------|-------|-------|-----------|
| 0   | 1,001   | 2     | 1,5   | $-0{,}53$ |
| 1   | 1,001   | 1,5   | 1,25  | $-0{,}08$ |
| 2   | 1,001   | 1,25  | 1,13  | $0{,}45$  |
| 3   | 1,13    | 1,25  | 1,19  | $0{,}13$  |
| 4   | 1,19    | 1,25  | 1,22  | $0{,}02$  |
| 5   | 1,22    | 1,25  | —     | —         |

Abbiamo determinato che $x_A \in [1{,}22;\,1{,}25]$, quindi $x_A = 1{,}2\ldots$

### Punto d)

Per trovare l'area della regione finita di piano compresa tra la curva, l'asse delle ascisse e la retta $x = 1$, calcoliamo prima l'integrale indefinito. Usiamo l'integrazione per parti per il termine $\int x\ln(x-1)\,dx$:

$$\int [x-2-\ln(x-1)]\,dx = \frac{x^2}{2} - 2x - x\ln(x-1) + \int \frac{x}{x-1}\,dx$$

$$= \frac{x^2}{2} - 2x - x\ln(x-1) + x + \ln(x-1) + k = \frac{x^2}{2} - x + (1-x)\ln(x-1) + k.$$

Quindi:
$$\int_{t}^{2}[x-2-\ln(x-1)]\,dx = \left[\frac{x^2}{2} - x + (1-x)\ln(x-1)\right]_{t}^{2}$$

$$= \left(2 - 2\right) - \left(\frac{t^2}{2} - t + (1-t)\ln(t-1)\right) = t - \frac{t^2}{2} - (1-t)\ln(t-1).$$

L'area richiesta è data dall'integrale improprio:

$$\int_{1}^{2}[x-2-\ln(x-1)]\,dx = \lim_{t \to 1^+} \int_{t}^{2}[x-2-\ln(x-1)]\,dx = \lim_{t \to 1^+}\left[t - \frac{t^2}{2} - (1-t)\ln(t-1)\right].$$

Osserviamo che $\lim_{t \to 1^+}\!\left(t - \frac{t^2}{2}\right) = \frac{1}{2}$, mentre $\lim_{t \to 1^+}[(1-t)\ln(t-1)]$ porta a una forma indeterminata $0 \cdot (-\infty)$. Scriviamo:

$$\lim_{t \to 1^+}[(1-t)\ln(t-1)] = \lim_{t \to 1^+} \frac{\ln(t-1)}{\dfrac{1}{1-t}}$$

e, applicando il teorema di De L'Hospital:

$$= \lim_{t \to 1^+} \frac{\dfrac{1}{t-1}}{\dfrac{1}{(1-t)^2}} = \lim_{t \to 1^+} \frac{(1-t)^2}{t-1} = \lim_{t \to 1^+}(-(1-t)) = 0.$$

Pertanto:
$$\int_{1}^{2}[x-2-\ln(x-1)]\,dx = \frac{1}{2} - 0 = \frac{1}{2}.$$

---

## Quesito 1

Consideriamo la generica parabola di equazione $y = kx^2$, con $k > 0$, assieme alla retta tangente nel punto $P$ e alla parallela all'asse $x$ *(grafico — vedi PDF p.53)*.

Il segmento parabolico individuato dalla corda $P'P$ è indicato con $R_1$; il triangolo curvilineo è $R_2$. Il generico punto $P$ ha coordinate $P(a;\,ka^2)$, con $a > 0$.

Per la formula di Archimede, l'area di un segmento parabolico è pari a $\frac{2}{3}$ dell'area del rettangolo circoscritto, quindi:
$$A_1 = \frac{2}{3} \cdot \overline{P'P} \cdot \overline{PH} = \frac{2}{3} \cdot 2a \cdot ka^2 = \frac{4}{3}ka^3.$$

Calcoliamo l'area di $R_2$ per differenza: sottraiamo dall'area delimitata dal grafico di $\gamma$ nell'intervallo $[0;\,a]$ l'area del triangolo $QHP$. Determiniamo le coordinate di $Q$. La retta tangente in $P$ è:
$$y - ka^2 = 2ka(x-a) \;\longrightarrow\; y = 2kax - ka^2,$$
dove $m = y'(a) = 2ka$.

Ponendo $y = 0$: $x = \frac{a}{2}$, quindi $Q\!\left(\frac{a}{2};\,0\right)$.

L'area di $R_2$:
$$A_2 = \int_{0}^{a} kx^2\,dx - \frac{1}{2}\left(a - \frac{a}{2}\right)\cdot ka^2 = \left[\frac{kx^3}{3}\right]_{0}^{a} - \frac{ka^3}{4} = \frac{ka^3}{3} - \frac{ka^3}{4} = \frac{ka^3}{12}.$$

Il rapporto fra le due aree è:
$$\frac{A_1}{A_2} = \frac{\dfrac{4ka^3}{3}}{\dfrac{ka^3}{12}} = \frac{4}{3} \cdot 12 = 16.$$

Dato che il rapporto è costante al variare delle coordinate di $P$, il limite richiesto è $16$.

## Quesito 2

Studiamo la funzione $y = \arcsin(\sin x)$.

**Dominio e codominio.** Per ogni $x \in \mathbb{R}$ è $-1 \le \sin x \le 1$, quindi esiste $\arcsin(\sin x)$ ed è $-\frac{\pi}{2} \le \arcsin(\sin x) \le \frac{\pi}{2}$. Il dominio è $\mathbb{R}$ e il codominio è $\left[-\frac{\pi}{2};\,\frac{\pi}{2}\right]$.

**Periodicità.** La funzione seno ha periodo $2\pi$, mentre la funzione arcoseno non è periodica. La funzione composta ha pertanto periodo $2\pi$.

**Derivabilità.** Se $\sin x \ne \pm 1$, cioè se $x \ne \frac{\pi}{2} + k\pi$ per ogni $k \in \mathbb{Z}$, la derivata è:
$$y' = \frac{\cos x}{\sqrt{1-\sin^2 x}} = \frac{\cos x}{\sqrt{\cos^2 x}} = \frac{\cos x}{|\cos x|}.$$

Per $x \ne \frac{\pi}{2} + k\pi$ è quindi $y' = \pm 1$. In particolare:
$$y' = 1 \quad \text{se } x \in \left[-\frac{\pi}{2} + 2k\pi;\;\frac{\pi}{2} + 2k\pi\right];$$
$$y' = -1 \quad \text{se } x \in \left[\frac{\pi}{2} + 2k\pi;\;\frac{3\pi}{2} + 2k\pi\right].$$

In ognuno di tali intervalli il grafico coincide con un segmento parallelo alla bisettrice del I e III quadrante o del II e IV quadrante. Nei punti $x = \frac{\pi}{2} + k\pi$ la funzione non è derivabile (esistono derivata destra e sinistra finite ma diverse):
$$\lim_{x \to \frac{\pi}{2}^+} y' = -1, \qquad \lim_{x \to \frac{\pi}{2}^-} y' = 1.$$

Pertanto $x = \frac{\pi}{2} + k\pi$ sono punti angolosi.

*(grafico nell'intervallo $\left[-\frac{\pi}{2};\,\frac{3\pi}{2}\right]$ esteso a tutto $\mathbb{R}$ — vedi PDF p.55)*

## Quesito 3

Dobbiamo verificare le ipotesi del teorema di Rolle su $\left[-\frac{\pi}{2};\,\frac{3}{2}\pi\right]$ per la funzione:
$$f(x) = \begin{cases} -\dfrac{4}{\pi}\sin\!\left(x - \dfrac{\pi}{2}\right) & \text{se } x \le a \\[6pt] \dfrac{4x^2}{\pi^2} - \dfrac{8x}{\pi} + 3 & \text{se } x > a \end{cases}$$

$f(x)$ è continua per ogni $x \ne a$. Imponiamo la continuità in $x = a$: poiché $\lim_{x \to a^-}f(x) = f(a) = 0$, deve essere:
$$\lim_{x \to a^+} f(x) = 0 \;\longrightarrow\; \frac{4a^2}{\pi^2} - \frac{8a}{\pi} + 3 = 0 \;\longrightarrow\; 4a^2 - 8a\pi + 3\pi^2 = 0 \;\longrightarrow\; a = \frac{\pi}{2} \vee a = \frac{3\pi}{2}.$$

Solo $a = \frac{\pi}{2}$ è interno all'intervallo, quindi la funzione diventa:
$$f(x) = \begin{cases} -\dfrac{4}{\pi}\sin\!\left(x-\dfrac{\pi}{2}\right) & \text{se } x \le \dfrac{\pi}{2} \\[6pt] \dfrac{4x^2}{\pi^2} - \dfrac{8x}{\pi} + 3 & \text{se } x > \dfrac{\pi}{2} \end{cases}.$$

Verifichiamo la derivabilità in $x = \frac{\pi}{2}$:
$$f'_-\!\left(\frac{\pi}{2}\right) = \lim_{x \to \frac{\pi}{2}^-} \left[-\frac{4}{\pi}\cos\!\left(x - \frac{\pi}{2}\right)\right] = -\frac{4}{\pi};$$
$$f'_+\!\left(\frac{\pi}{2}\right) = \lim_{x \to \frac{\pi}{2}^+} \left(\frac{8x}{\pi^2} - \frac{8}{\pi}\right) = -\frac{4}{\pi}.$$

Le due derivate sono uguali, quindi la funzione è derivabile in $x = \frac{\pi}{2}$.

Infine $f\!\left(-\frac{\pi}{2}\right) = f\!\left(\frac{3\pi}{2}\right) = 0$.

La funzione soddisfa le ipotesi del teorema di Rolle in $\left[-\frac{\pi}{2};\,\frac{3\pi}{2}\right]$ per $a = \frac{\pi}{2}$.

## Quesito 4

Una funzione suriettiva da $A$ (6 elementi) a $B$ (5 elementi) richiede che due elementi di $A$ abbiano la stessa immagine. Il numero di modi per scegliere tale coppia è:
$$C_{6,2} = \binom{6}{2} = \frac{6!}{2!\,4!} = 15.$$

Dopo aver fissato la coppia, il numero di modi per associare agli elementi di $A$ gli elementi di $B$ è il numero di permutazioni semplici di 5 oggetti:
$$P_5 = 5! = 120.$$

Il numero complessivo di funzioni suriettive è:
$$P_5 \cdot C_{6,2} = 120 \cdot 15 = 1800.$$

## Quesito 5

Dato che ciascun punto del bersaglio ha la medesima probabilità di essere centrato, la probabilità richiesta è il rapporto tra l'area esterna al trapezio e l'area del semicerchio.

Consideriamo un trapezio isoscele $ABCD$ inscritto nella semicirconferenza di raggio $r$, con $\widehat{COH} = x$ e $0 < x < \frac{\pi}{2}$ *(grafico — vedi PDF p.57)*.

Sia $H$ il piede della perpendicolare ad $AB$ condotta da $C$. Per il primo teorema fondamentale dei triangoli rettangoli:
$$\overline{CH} = r\sin x, \qquad \overline{OH} = r\cos x.$$

L'area del trapezio in funzione di $x$:
$$A(x) = \frac{(AB + CD)\cdot CH}{2} = \frac{(2r + 2r\cos x)\,r\sin x}{2} = r^2 \sin x(1+\cos x).$$

$A(x)$ è continua e derivabile in $\left]0;\,\frac{\pi}{2}\right[$. Calcoliamo:
$$A'(x) = r^2[\cos x(1+\cos x) - \sin^2 x] = r^2(\cos x + \cos^2 x - \sin^2 x) = r^2(2\cos^2 x + \cos x - 1).$$

La derivata si annulla per:
$$2\cos^2 x + \cos x - 1 = 0 \;\longrightarrow\; \cos x = \frac{-1 \pm \sqrt{1+8}}{4} = \frac{-1 \pm 3}{4}.$$

Quindi $\cos x = -1$ (non accettabile: $x = \pi \notin$ dominio) oppure $\cos x = \frac{1}{2}$, cioè $x = \frac{\pi}{3}$.

*(grafico dei segni di $A'(x)$ — vedi PDF p.58)*

L'area massima si ha per $x = \frac{\pi}{3}$:
$$A_{\max} = r^2 \sin\frac{\pi}{3}\left(1+\cos\frac{\pi}{3}\right) = r^2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{3}{2} = \frac{3\sqrt{3}}{4}\,r^2.$$

La probabilità richiesta, con $A_{sc} = \frac{\pi r^2}{2}$ area del semicerchio, è:
$$p = \frac{A_{sc} - A_{\max}}{A_{sc}} = 1 - \frac{A_{\max}}{A_{sc}} = 1 - \frac{\dfrac{3\sqrt{3}}{4}\,r^2}{\dfrac{\pi}{2}\,r^2} = 1 - \frac{3\sqrt{3}}{2\pi} \approx 0{,}17.$$

## Quesito 6

Data una funzione $f$ continua in $\mathbb{R}$, la sua funzione integrale di punto iniziale $a$ è:
$$F(x) = \int_{a}^{x} f(t)\,dt, \quad \forall x \in \mathbb{R}.$$

Per il teorema fondamentale del calcolo integrale, $F'(x) = f(x)$.

Fissiamo un punto iniziale $a$ e scriviamo:
$$g(x) = \int_{x}^{2x} f(t)\,dt = \int_{x}^{a} f(t)\,dt + \int_{a}^{2x} f(t)\,dt = -\int_{a}^{x} f(t)\,dt + \int_{a}^{2x} f(t)\,dt.$$

Calcoliamo la derivata (il secondo addendo è funzione composta):
$$g'(x) = -f(x) + f(2x) \cdot D[2x] = -f(x) + 2f(2x).$$

Usando i dati del problema ($f(0) = -\frac{1}{2}$, $f\!\left(\frac{1}{2}\right) = \frac{1}{4}$, $f(1) = 1$):

$$g(0) = \int_{0}^{0} f(t)\,dt = 0;$$

$$g'(0) = -f(0) + 2f(0) = -\left(-\frac{1}{2}\right) + 2\left(-\frac{1}{2}\right) = \frac{1}{2} - 1 = -\frac{1}{2};$$

$$g'\!\left(\frac{1}{2}\right) = -f\!\left(\frac{1}{2}\right) + 2f(1) = -\frac{1}{4} + 2 \cdot 1 = \frac{7}{4}.$$

## Quesito 7

Il dominio di $f(x) = \ln(e^x - 1)$ è dato da:
$$e^x - 1 > 0 \;\longrightarrow\; e^x > 1 \;\longrightarrow\; x > 0,$$
quindi il dominio è $]0;\,+\infty[$.

**Nell'estremo sinistro:**
$$\lim_{x \to 0^+} \ln(e^x-1) = -\infty.$$
La retta $x = 0$ (asse $y$) è asintoto verticale destro.

**Nell'estremo destro:**
$$\lim_{x \to +\infty} \ln(e^x-1) = +\infty.$$
Non c'è asintoto orizzontale. Cerchiamo l'asintoto obliquo:
$$m = \lim_{x \to +\infty} \frac{\ln(e^x-1)}{x}.$$

Il limite è della forma $\frac{\infty}{\infty}$; applicando De L'Hospital:
$$\lim_{x \to +\infty} \frac{\dfrac{e^x}{e^x-1}}{1} = \lim_{x \to +\infty} \frac{e^x}{e^x-1} = \lim_{x \to +\infty} \frac{1}{1-e^{-x}} = 1.$$

Pertanto $m = 1$. Il termine noto:
$$q = \lim_{x \to +\infty}[\ln(e^x-1) - x] = \lim_{x \to +\infty}[\ln(e^x-1) - \ln e^x] = \lim_{x \to +\infty}\ln\frac{e^x-1}{e^x} = \ln 1 = 0.$$

La retta $y = x$ è asintoto obliquo per $x \to +\infty$.

## Quesito 8

La funzione $f(x)$, essendo ovunque continua e derivabile, soddisfa le ipotesi del teorema di Lagrange in $[0;\,1]$: esiste $c \in\,]0;\,1[$ tale che:
$$f'(c) = \frac{f(1)-f(0)}{1-0} = f(1)-f(0).$$

Poiché $f'(x) < e^x$ per ogni $x \in \mathbb{R}$ e $c \in\,]0;\,1[$:
$$f'(c) < e^c < e \;\longrightarrow\; f(1)-f(0) < e.$$

La disuguaglianza si può dimostrare anche per altra via. Poiché $f'(x) < e^x$ per ogni $x \in \mathbb{R}$:
$$\int_{0}^{1} f'(x)\,dx < \int_{0}^{1} e^x\,dx \;\longrightarrow\; [f(x)]_{0}^{1} < [e^x]_{0}^{1} \;\longrightarrow\; f(1)-f(0) < e-1 < e.$$

In particolare vale la disuguaglianza più restrittiva $f(1)-f(0) < e-1$.

## Quesito 9

I triangoli $A'D'B$ e $C'D'B$, rettangoli rispettivamente in $A'$ e $C'$, sono congruenti perché hanno l'ipotenusa in comune e i cateti ordinatamente congruenti. Sono quindi congruenti anche le altezze relative all'ipotenusa, che cadono sullo stesso punto $P$ *(grafico — vedi PDF p.60)*.

$D'B$ è dunque perpendicolare alle rette $A'P$ e $PC'$, pertanto è perpendicolare al piano $A'PC'$ che le contiene: tale piano è una sezione normale del diedro convesso di facce $A'D'B$ e $C'D'B$.

Applichiamo il teorema del coseno al triangolo $A'PC'$ per determinare l'ampiezza dell'angolo $\widehat{A'PC'}$. Esprimiamo tutti gli elementi in funzione della lunghezza $a$ dello spigolo del cubo:

$$\overline{A'C'} = \overline{A'B} = a\sqrt{2};$$

$$\overline{A'P} = \frac{\overline{A'B} \cdot \overline{A'D'}}{\overline{BD'}} = \frac{a\sqrt{2} \cdot a}{a\sqrt{3}} = \frac{\sqrt{6}}{3}\,a.$$

Calcoliamo l'ampiezza del diedro tramite il teorema del coseno nel triangolo $A'PC'$:

$$\overline{A'C'}^2 = \overline{A'P}^2 + \overline{PC'}^2 - 2\,\overline{A'P}\cdot\overline{PC'}\cos\widehat{A'PC'},$$

$$\cos\widehat{A'PC'} = \frac{2 \cdot \dfrac{6}{9}a^2 - 2a^2}{2 \cdot \dfrac{6}{9}a^2} = -\frac{1}{2}, \qquad \widehat{A'PC'} = \frac{2}{3}\pi.$$

## Quesito 10

Riscriviamo la funzione nel seguente modo:
$$f(x) = \begin{cases} 1 & \text{se } x < -1 \\ -x & \text{se } -1 \le x < 0 \\ x & \text{se } 0 \le x \le 1 \\ -1 & \text{se } x > 1 \end{cases}.$$

Gli eventuali punti di discontinuità sono solo $x = -1$, $x = 0$ e $x = 1$. Abbiamo:
$$\lim_{x \to -1} f(x) = 1 = f(-1); \qquad \lim_{x \to 0} f(x) = 0 = f(0);$$
$$\lim_{x \to 1^+} f(x) = -1; \qquad \lim_{x \to 1^-} f(x) = f(1) = 1.$$

Pertanto la funzione è continua ovunque tranne che in $x = 1$.

*(grafico — vedi PDF p.61)*

Dal grafico deduciamo anche che la funzione non è derivabile in $x = -1$, $x = 0$ e $x = 1$. Verifichiamo analiticamente:

- $f'_-(-1) = \lim_{x \to -1^-} f'(x) = 0$, $\quad f'_+(-1) = \lim_{x \to -1^+} f'(x) = -1$: derivate destra e sinistra diverse in $x = -1$;
- $f'_-(0) = \lim_{x \to 0^-} f'(x) = -1$, $\quad f'_+(0) = \lim_{x \to 0^+} f'(x) = 1$: derivate destra e sinistra diverse in $x = 0$;
- la funzione non è continua in $x = 1$, quindi non è neppure derivabile in tale punto.
