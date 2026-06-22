---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2012_3_42
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2012 Sperimentale #3 — Svolgimento'
---
## Problema 1

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

## Problema 2

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

## Quesito 1

Nel piano $xOy$ sia $y = kx^2$ ($k > 0$) la parabola $\gamma$. Sia $P(a; ka^2)$ con $a > 0$. La tangente in $P$ ha equazione $y = 2kax - ka^2$ e interseca l'asse $x$ in $Q\!\left(\frac{a}{2}; 0\right)$. La parallela all'asse $x$ passante per $P$ interseca $\gamma$ in $P'(-a; ka^2)$.

*(grafico — vedi PDF p.53)*

**Area del segmento parabolico $PP'$ (formula di Archimede):** $A_1 = \frac{2}{3} \cdot \overline{PP'} \cdot ka^2 = \frac{2}{3} \cdot 2a \cdot ka^2 = \frac{4ka^3}{3}$.

**Area del triangolo curvilineo** individuato da $PQ$, $QO$ e dall'arco $OP$:

L'area della regione compresa tra la parabola $y = kx^2$ e la tangente in $P$ (tratto da $Q$ a $P$) per $\frac{a}{2} \le x \le a$ è $\frac{1}{3}$ dell'area del triangolo formato da $P$, $Q$ e il vertice di tangenza (per la proprietà del triangolo di Archimede). Dall'analisi completa (vedi PDF pp. 53–54):

$$A_2 = \int_0^{a/2} kx^2\, dx + \text{Area}(\triangle OQP) - \int_0^{a/2} kx^2\, dx = \frac{ka^3}{12}.$$

*(grafico — vedi PDF p.54)*

Il rapporto è:

$$\frac{A_1}{A_2} = \frac{\frac{4ka^3}{3}}{\frac{ka^3}{12}} = 16.$$

Tale rapporto è costante (non dipende da $a$), quindi:

$$\lim_{a \to +\infty} \frac{A_1}{A_2} = 16.$$

---

## Quesito 2

La funzione $y = \arcsin(\sin x)$.

**Dominio:** $\mathbb{R}$ (il seno è sempre in $[-1; 1]$).

**Codominio:** $\left[-\frac{\pi}{2}; \frac{\pi}{2}\right]$.

**Periodicità:** La funzione ha periodo $2\pi$ (stesso del seno); il periodo minimo è però $2\pi$ poiché la funzione è pari rispetto all'asse $y$ e simmetrica rispetto a $x = \frac{\pi}{2}$.

**Derivabilità.** Se $\sin x \ne \pm 1$, cioè $x \ne \frac{\pi}{2} + k\pi$ per ogni $k \in \mathbb{Z}$:

$$y' = \frac{\cos x}{\sqrt{1-\sin^2 x}} = \frac{\cos x}{|\cos x|} = \text{sgn}(\cos x) = \begin{cases} 1 & \text{se } \cos x > 0 \\ -1 & \text{se } \cos x < 0. \end{cases}$$

Nei punti $x = \frac{\pi}{2} + k\pi$ la funzione non è derivabile (spigolo).

*(grafico — vedi PDF p.55)*

---

## Quesito 3

Si determina il valore di $a \in \left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$ per cui

$$f(x) = \begin{cases} -\dfrac{4}{\pi}\sin(x-a) & \text{se } x \le a \\[6pt] \dfrac{4x^2}{\pi^2} - \dfrac{8x}{\pi} + 3 & \text{se } x > a \end{cases}$$

soddisfa le ipotesi del teorema di Rolle sull'intervallo $\left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$.

Le ipotesi richiedono: (i) $f$ continua su $\left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$, (ii) $f$ derivabile in $\left(-\frac{\pi}{2}; \frac{3\pi}{2}\right)$, (iii) $f\!\left(-\frac{\pi}{2}\right) = f\!\left(\frac{3\pi}{2}\right)$.

**Valori agli estremi:**

$$f\!\left(-\frac{\pi}{2}\right) = -\frac{4}{\pi}\sin\!\left(-\frac{\pi}{2}-a\right) = \frac{4}{\pi}\cos a.$$

$$f\!\left(\frac{3\pi}{2}\right) = \frac{4}{\pi^2}\cdot\frac{9\pi^2}{4} - \frac{8}{\pi}\cdot\frac{3\pi}{2} + 3 = 9 - 12 + 3 = 0.$$

La condizione $f\!\left(-\frac{\pi}{2}\right) = 0$ impone $\cos a = 0$. Nell'intervallo $\left[-\frac{\pi}{2}; \frac{3\pi}{2}\right]$: $a = -\frac{\pi}{2}$ oppure $a = \frac{\pi}{2}$.

**Continuità in $x = a$:** $f(a^-) = 0$ (il seno si annulla). Occorre anche:

$$\lim_{x \to a^+} f(x) = \frac{4a^2}{\pi^2} - \frac{8a}{\pi} + 3 = 0.$$

- Per $a = -\frac{\pi}{2}$: $1 + 4 + 3 = 8 \ne 0$. Non accettabile.
- Per $a = \frac{\pi}{2}$: $1 - 4 + 3 = 0$. Accettabile.

La funzione soddisfa le ipotesi del teorema di Rolle per $a = \dfrac{\pi}{2}$.

---

## Quesito 4

Dati $|A| = 6$ e $|B| = 5$, si determina il numero di funzioni suriettive da $A$ a $B$.

Per la formula di inclusione-esclusione:

$$S(6,5) = \sum_{i=0}^{5}(-1)^i\binom{5}{i}(5-i)^6$$
$$= 5^6 - 5 \cdot 4^6 + 10 \cdot 3^6 - 10 \cdot 2^6 + 5 \cdot 1^6 - 0$$
$$= 15625 - 20480 + 7290 - 640 + 5 = \mathbf{1800}.$$

Equivalentemente: si sceglie la coppia di elementi di $A$ con la stessa immagine in $C_{6,2} = 15$ modi, e si associano i 5 elementi di $B$ alle 5 immagini in $5! = 120$ modi: $15 \times 120 = 1800$.

---

## Quesito 5

Il bersaglio è un semicerchio di raggio $r$; all'interno è il trapezio isoscele inscritto di area massima.

*(grafico — vedi PDF p.57)*

Si parametrizza il vertice superiore del trapezio come $P = (r\cos\theta, r\sin\theta)$ con $\theta \in (0, \pi)$. La base superiore è $2r\cos\theta$, la base inferiore è $2r$, l'altezza è $r\sin\theta$:

$$A(\theta) = \frac{(2r + 2r\cos\theta)}{2} \cdot r\sin\theta = r^2\sin\theta(1+\cos\theta).$$

Massimizzando: $A'(\theta) = r^2[\cos\theta + \cos 2\theta] = r^2[2\cos^2\theta + \cos\theta - 1] = 0$.

Risolvendo: $\cos\theta = \frac{1}{2}$, cioè $\theta = \frac{\pi}{3}$.

*(grafico — vedi PDF p.58)*

L'area massima del trapezio è:

$$A_{\max} = r^2\sin\frac{\pi}{3}\!\left(1+\cos\frac{\pi}{3}\right) = r^2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{3}{2} = \frac{3\sqrt{3}}{4}r^2.$$

L'area del semicerchio è $\frac{\pi r^2}{2}$.

La probabilità che la freccetta cada nella parte del semicerchio esterna al trapezio è:

$$p = 1 - \frac{A_{\max}}{A_{\text{semicerchio}}} = 1 - \frac{\frac{3\sqrt{3}}{4}r^2}{\frac{\pi}{2}r^2} = 1 - \frac{3\sqrt{3}}{2\pi} \approx 0{,}17.$$

---

## Quesito 6

Sia $g(x) = \int_x^{2x} f(t)\, dt$ con $f$ continua su $\mathbb{R}$. Dati $f(0) = -\frac{1}{2}$, $f\!\left(\frac{1}{2}\right) = \frac{1}{4}$, $f(1) = 1$.

Per il teorema fondamentale del calcolo:

$$g'(x) = 2f(2x) - f(x).$$

**$g(0)$:**

$$g(0) = \int_0^0 f(t)\, dt = 0.$$

**$g'(0)$:**

$$g'(0) = 2f(0) - f(0) = 2\cdot\left(-\tfrac{1}{2}\right) - \left(-\tfrac{1}{2}\right) = -1 + \tfrac{1}{2} = -\frac{1}{2}.$$

**$g'\!\left(\frac{1}{2}\right)$:**

$$g'\!\left(\tfrac{1}{2}\right) = 2f(1) - f\!\left(\tfrac{1}{2}\right) = 2\cdot 1 - \tfrac{1}{4} = \frac{7}{4}.$$

---

## Quesito 7

Si determinano gli asintoti di $f(x) = \ln(e^x - 1)$.

**Dominio:** $e^x - 1 > 0 \Rightarrow x > 0$.

**Asintoto verticale:** $\lim_{x \to 0^+} \ln(e^x - 1) = -\infty$. La retta $x = 0$ è asintoto verticale sinistro.

**Per $x \to +\infty$:**

$$m = \lim_{x \to +\infty} \frac{\ln(e^x-1)}{x} = \lim_{x \to +\infty} \frac{x + \ln(1-e^{-x})}{x} = 1.$$

$$q = \lim_{x \to +\infty}[\ln(e^x-1) - x] = \lim_{x \to +\infty}\ln(1 - e^{-x}) = \ln 1 = 0.$$

La retta $y = x$ è asintoto obliquo per $x \to +\infty$.

---

## Quesito 8

È data $f(x)$ continua e derivabile con $f'(x) < e^x$ per ogni $x \in \mathbb{R}$. Si dimostra che $f(1) - f(0) < e$.

Per il **teorema di Lagrange** applicato a $f$ su $[0; 1]$, esiste $c \in ]0; 1[$ tale che:

$$f'(c) = \frac{f(1) - f(0)}{1 - 0} = f(1) - f(0).$$

Poiché $f'(x) < e^x$ per ogni $x$ e $c \in ]0; 1[$:

$$f(1) - f(0) = f'(c) < e^c < e^1 = e. \qquad \square$$

---

## Quesito 9

Dato il cubo di spigolo $a$, si determina l'ampiezza del diedro convesso con spigolo $BD'$ e facce i piani $A'D'B$ e $C'D'B$.

*(grafico — vedi PDF p.60)*

Il punto $F'$ è il piede della perpendicolare da $B'$ (o un punto medio opportuno) sullo spigolo $BD'$. Per la simmetria del cubo, si considera il punto $P$ medio di $BD'$ e si calcola l'angolo $A'\hat{P}C'$.

Con la notazione del testo (vedi PDF p.60-61), posto $\overline{A'P} = \overline{C'P}$ e $\overline{A'C'} = a\sqrt{2}$:

$$\cos A'\hat{P}C' = \frac{2 \cdot \frac{6}{9}a^2 - 2a^2}{2 \cdot \frac{6}{9}a^2} = \frac{\frac{12}{9}a^2 - 2a^2}{\frac{12}{9}a^2} = \frac{-\frac{6}{9}a^2}{\frac{12}{9}a^2} = -\frac{1}{2}.$$

Quindi $A'\hat{P}C' = \dfrac{2\pi}{3}$ (cioè $120°$). L'ampiezza del diedro convesso è $\dfrac{2\pi}{3}$.

---

## Quesito 10

Si studia la continuità e la derivabilità della funzione:

$$f(x) = \begin{cases} \dfrac{-x}{|x|} & \text{se } x > 1 \\[4pt] |x| & \text{se } x \le 1 \end{cases}$$

che si può riscrivere come:

$$f(x) = \begin{cases} 1 & \text{se } x < -1 \\ -x & \text{se } -1 \le x < 0 \\ x & \text{se } 0 \le x \le 1 \\ -1 & \text{se } x > 1. \end{cases}$$

**Continuità.** I possibili punti di discontinuità sono $x = -1$, $x = 0$, $x = 1$.

$$\lim_{x \to -1^-} f(x) = 1 = f(-1), \quad \lim_{x \to 0^-} f(x) = 0 = f(0), \quad \lim_{x \to 1^-} f(x) = 1 \ne -1 = \lim_{x \to 1^+} f(x).$$

La funzione è **continua** ovunque tranne che in $x = 1$, dove ha una discontinuità di prima specie (salto).

*(grafico — vedi PDF p.61)*

**Derivabilità.** La funzione non è derivabile in $x = -1$, $x = 0$ e $x = 1$:

- $f'_-(-1) = 0$, $f'_+(-1) = -1$: derivate laterali diverse in $x = -1$.
- $f'_-(0) = -1$, $f'_+(0) = 1$: derivate laterali diverse in $x = 0$.
- La funzione non è continua in $x = 1$, quindi non è neppure derivabile in tale punto.
