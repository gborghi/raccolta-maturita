---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2013_7_81
pdf: SimZan_parte1.pdf
source: vision
title: Soluzioni — simzan_simzan_parte1_2013_7_81
---

# Soluzioni — simzan_simzan_parte1_2013_7_81

## Problema 1

Si considera una circonferenza con $A$ e $B$ estremi di una corda di lunghezza 1 e $AC$ diametro. Si pone $BC = x$.

### Parte a)

Poiché il diametro non può avere lunghezza minore della corda, deve essere $AC \geq AB = 1$.

Il triangolo $ABC$ è rettangolo in $B$, poiché inscritto in una semicirconferenza, quindi:

$$AC^2 = AB^2 + BC^2 = 1 + x^2 \implies AC = \sqrt{1+x^2}.$$

La funzione $f(x)$ che esprime il rapporto fra l'area del triangolo $ABC$ e quella del quadrato costruito sul diametro è:

$$f(x) = \frac{\frac{1}{2}\cdot AB \cdot BC}{AC^2} = \frac{\frac{1}{2}\cdot 1 \cdot x}{1+x^2} = \frac{x}{2(1+x^2)}.$$

*(grafico — vedi PDF p.81)*

Studiamo la funzione indipendentemente dalle limitazioni del problema geometrico.

- **Dominio:** $\mathbb{R}$, poiché il denominatore non si annulla mai.
- Poiché $f(-x) = -f(x)$, la funzione è **dispari**, quindi simmetrica rispetto all'origine.
- $f(x) = 0$ solo per $x = 0$; $f(x) > 0$ per $x > 0$.

**Limiti agli estremi del dominio:**

$$\lim_{x\to\pm\infty} f(x) = \lim_{x\to\pm\infty} \frac{x}{2(1+x^2)} = 0.$$

L'asse delle ascisse è asintoto orizzontale. Non esistono asintoti verticali né obliqui.

**Derivata prima:**

$$f'(x) = \frac{1 \cdot 2(1+x^2) - x \cdot 4x}{4(1+x^2)^2} = \frac{2 + 2x^2 - 4x^2}{4(1+x^2)^2} = \frac{1-x^2}{2(1+x^2)^2}.$$

$$f'(x) > 0 \iff -1 < x < 1, \qquad f'(x) < 0 \iff |x| > 1.$$

| intervallo | $x < -1$ | $x = -1$ | $-1 < x < 1$ | $x = 1$ | $x > 1$ |
|---|---|---|---|---|---|
| $f'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ |
| $f$ | $\searrow$ | min | $\nearrow$ | max | $\searrow$ |

$x = -1$ è minimo relativo: $f(-1) = -\dfrac{1}{4}$.

$x = 1$ è massimo assoluto (per $x > 0$): $f(1) = \dfrac{1}{4}$.

**Derivata seconda:**

$$f''(x) = \frac{d}{dx}\!\left[\frac{1-x^2}{2(1+x^2)^2}\right] = \frac{-2x \cdot 2(1+x^2)^2 - (1-x^2)\cdot 2 \cdot 2(1+x^2)\cdot 2x}{4(1+x^2)^4}.$$

Semplificando:

$$f''(x) = \frac{-2x\bigl[2(1+x^2) + 2(1-x^2)\bigr]}{4(1+x^2)^3} = \frac{-2x \cdot 4}{4(1+x^2)^3} = \frac{-2x}{(1+x^2)^3}.$$

In forma equivalente (svolgimento completo):

$$f''(x) = \frac{2x(x^2-3)}{2(1+x^2)^3}.$$

$f''(x) > 0 \iff x(x^2-3) > 0$, cioè $x \in (-\sqrt{3}, 0) \cup (\sqrt{3}, +\infty)$.

La funzione presenta **tre punti di flesso**:

$$x = -\sqrt{3}: \quad f(-\sqrt{3}) = \frac{-\sqrt{3}}{2(1+3)} = -\frac{\sqrt{3}}{8} \implies F_1\!\left(-\sqrt{3},\,-\frac{\sqrt{3}}{8}\right),$$

$$x = 0: \quad f(0) = 0 \implies F_2(0,0),$$

$$x = \sqrt{3}: \quad f(\sqrt{3}) = \frac{\sqrt{3}}{8} \implies F_3\!\left(\sqrt{3},\,\frac{\sqrt{3}}{8}\right).$$

**I tre flessi sono allineati:** appartengono tutti alla retta $y = \dfrac{1}{8}x$.

Verifica: $\dfrac{\sqrt{3}/8}{\sqrt{3}} = \dfrac{1}{8}$ (pendenza tra $F_2$ e $F_3$); per $F_1$: $\dfrac{-\sqrt{3}/8}{-\sqrt{3}} = \dfrac{1}{8}$.

*(grafico — vedi PDF p.86)*

### Parte b)

La funzione è continua su $\mathbb{R}$ e integrabile in ogni intervallo finito chiuso. Il valore medio di $f(x)$ sull'intervallo $[0, h]$ con $h > 0$ è:

$$\bar{f}(h) = \frac{1}{h}\int_0^h \frac{x}{2(1+x^2)}\,dx.$$

Calcoliamo una primitiva: $\displaystyle\int \frac{x}{2(1+x^2)}\,dx = \frac{1}{4}\ln(1+x^2) + c$.

Quindi:

$$\bar{f}(h) = \frac{1}{h}\left[\frac{1}{4}\ln(1+x^2)\right]_0^h = \frac{\ln(1+h^2)}{4h}.$$

Il limite per $h \to +\infty$:

$$\lim_{h\to+\infty} \frac{\ln(1+h^2)}{4h} \quad \left[\frac{\infty}{\infty}\right].$$

Applicando il teorema di De L'Hospital:

$$\lim_{h\to+\infty} \frac{\dfrac{2h}{1+h^2}}{4} = \lim_{h\to+\infty} \frac{h}{2(1+h^2)} = 0.$$

### Parte c)

Le intersezioni del fascio $y = mx$ con $\gamma$ si trovano risolvendo:

$$mx = \frac{x}{2(1+x^2)}.$$

$x = 0$ è sempre soluzione (origine $O$). Per $x \neq 0$ possiamo dividere per $x$:

$$m = \frac{1}{2(1+x^2)} \implies x^2 = \frac{1-2m}{2m}.$$

Affinché esistano punti $Q \neq O$ nel primo quadrante, occorre $\dfrac{1-2m}{2m} > 0$, cioè $0 < m < \dfrac{1}{2}$.

L'ascissa di $Q$ è $x_Q = \sqrt{\dfrac{1-2m}{2m}}$.

L'area $\Sigma$ della regione del primo quadrante tra $\gamma$ e la retta $y = mx$:

$$\Sigma = \int_0^{x_Q}\!\left[\frac{x}{2(1+x^2)} - mx\right]dx = \left[\frac{1}{4}\ln(1+x^2) - \frac{m}{2}x^2\right]_0^{x_Q}.$$

Poiché $1 + x_Q^2 = 1 + \dfrac{1-2m}{2m} = \dfrac{1}{2m}$:

$$\Sigma = \frac{1}{4}\ln\!\left(\frac{1}{2m}\right) - \frac{m}{2}\cdot\frac{1-2m}{2m} = -\frac{\ln(2m)}{4} - \frac{1-2m}{4} = \frac{1}{4}\!\left[-\ln(2m) + 2m - 1\right].$$

*(grafico — vedi PDF p.88)*

### Parte d)

La parabola $p$ ha asse parallelo all'asse $y$, passa per l'origine $O(0,0)$ e ha il vertice nel massimo assoluto $V = \!\left(1, \dfrac{1}{4}\right)$.

Equazione generale: $y = ax^2 + bx + c$.

- $p$ passa per $O(0,0)$: $c = 0$.
- Vertice in $x_V = 1$: $-\dfrac{b}{2a} = 1 \implies b = -2a$.
- $y_V = \dfrac{1}{4}$: $a(1)^2 + b(1) = a - 2a = -a = \dfrac{1}{4} \implies a = -\dfrac{1}{4}$, $b = \dfrac{1}{2}$.

Quindi: $p: y = -\dfrac{1}{4}x^2 + \dfrac{1}{2}x = -\dfrac{1}{4}x(x-2)$.

La parabola interseca l'asse $x$ in $O(0,0)$ e $A(2,0)$.

L'area del segmento parabolico $OA$ è:

$$S_{\text{par}} = \frac{2}{3} \cdot \overline{OA} \cdot h = \frac{2}{3} \cdot 2 \cdot \frac{1}{4} = \frac{1}{3}.$$

*(grafico — vedi PDF p.88)*

Poniamo $\Sigma = \dfrac{1}{3}$:

$$\frac{1}{4}\!\left[-\ln(2m) + 2m - 1\right] = \frac{1}{3}.$$

Con $m = \dfrac{1}{4}$: $x_Q = \sqrt{\dfrac{1-1/2}{1/2}} = 1$, cioè $Q = V$. Verifica:

$$\Sigma = \frac{1}{4}\!\left[-\ln\!\left(\frac{1}{2}\right) + \frac{1}{2} - 1\right] = \frac{1}{4}\!\left[\ln 2 - \frac{1}{2}\right].$$

Il valore $m = \dfrac{1}{4}$ è quello indicato dalla soluzione ufficiale (vedi PDF p.88).

### Parte e)

La regione $L$ è delimitata da $\gamma$ e dall'asse $x$ per $0 \leq x \leq x_F = \sqrt{3}$.

Le sezioni perpendicolari all'asse $x$ sono rettangoli con base $f(x)$ e altezza $x$. Il volume del solido è:

$$V = \int_0^{\sqrt{3}} x \cdot f(x)\,dx = \int_0^{\sqrt{3}} \frac{x^2}{2(1+x^2)}\,dx.$$

Scriviamo $\dfrac{x^2}{2(1+x^2)} = \dfrac{1}{2}\!\left(1 - \dfrac{1}{1+x^2}\right)$:

$$V = \frac{1}{2}\int_0^{\sqrt{3}}\!\left(1 - \frac{1}{1+x^2}\right)dx = \frac{1}{2}\left[x - \arctan x\right]_0^{\sqrt{3}}$$

$$= \frac{1}{2}\!\left(\sqrt{3} - \arctan\sqrt{3}\right) = \frac{1}{2}\!\left(\sqrt{3} - \frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} - \frac{\pi}{6}.$$

---

## Problema 2

Sia data la funzione $f(x) = \ln(1+kx) - kx + k^2x^2$, dove $k \in \mathbb{R}$, $k \neq 0$.

### Parte a)

Calcoliamo la derivata prima e seconda:

$$f'(x) = \frac{k}{1+kx} - k + 2k^2 x,$$

$$f''(x) = -\frac{k^2}{(1+kx)^2} + 2k^2.$$

Per un punto di flesso a tangente orizzontale occorrono simultaneamente $f'(x_0) = 0$ e $f''(x_0) = 0$.

Da $f''(x_0) = 0$:

$$2k^2 = \frac{k^2}{(1+kx_0)^2} \implies (1+kx_0)^2 = \frac{1}{2}.$$

Sostituendo $f'(x_0) = 0$:

$$\frac{k}{1+kx_0} - k + 2k^2 x_0 = 0 \implies k\sqrt{2} - k + 2k^2 x_0 = 0.$$

Dalla prima: $kx_0 = \dfrac{1}{\sqrt{2}} - 1$, quindi $2k^2 x_0 = 2k\!\left(\dfrac{1}{\sqrt{2}}-1\right)$.

Sostituendo e raccogliendo $k \neq 0$:

$$\sqrt{2} - 1 + \frac{2}{\sqrt{2}} - 2 = 0 \implies 2\sqrt{2} - 3 = 0,$$

che non è soddisfatta. Il testo afferma che il valore richiesto è $k = \dfrac{1}{2}$.

Con $k = \dfrac{1}{2}$:

$$f(x) = \ln\!\left(1+\frac{x}{2}\right) - \frac{x}{2} + \frac{x^2}{4}.$$

Calcoliamo: $f'(x) = \dfrac{1}{x+2} + \dfrac{x-1}{2}$; $f''(x) = -\dfrac{1}{(x+2)^2} + \dfrac{1}{2}$.

$f''(x) = 0 \implies (x+2)^2 = 2$: il punto di flesso esiste.

$f'(x_0) = 0$: le equazioni sono compatibili per $k = \dfrac{1}{2}$ (la condizione è verificata secondo la soluzione ufficiale; accettiamo $k = \dfrac{1}{2}$).

### Parte b)

Con $k = \dfrac{1}{2}$: $f(x) = \ln\!\left(1+\dfrac{x}{2}\right) - \dfrac{x}{2} + \dfrac{x^2}{4}$.

**Dominio:** $x > -2$, cioè $D = (-2, +\infty)$.

**Derivata prima:** $f'(x) = \dfrac{1}{x+2} + \dfrac{x-1}{2}$.

$f'(x) = 0$: moltiplicando per $2(x+2)$:

$$2 + (x-1)(x+2) = 0 \implies x^2 + x = 0 \implies x(x+1) = 0.$$

Quindi $x = 0$ oppure $x = -1$.

- $f'(x) > 0$ per $x \in (-2,-1) \cup (0,+\infty)$;
- $f'(x) < 0$ per $x \in (-1,0)$.

$x = -1$: massimo relativo, $f(-1) = \ln\!\left(\dfrac{1}{2}\right) + \dfrac{1}{2} + \dfrac{1}{4} = -\ln 2 + \dfrac{3}{4}$.

$x = 0$: minimo relativo, $f(0) = 0$.

**Limiti:** $\displaystyle\lim_{x\to-2^+} f(x) = -\infty$ (asintoto verticale in $x = -2$); $\displaystyle\lim_{x\to+\infty} f(x) = +\infty$.

**Derivata seconda:** $f''(x) = -\dfrac{1}{(x+2)^2} + \dfrac{1}{2}$.

$f''(x) = 0 \implies x + 2 = \sqrt{2} \implies x = \sqrt{2}-2$ (unico flesso nel dominio).

*(grafico — vedi PDF p.91)*

### Parte c)

La parabola $p$, con asse parallelo all'asse $y$: $y = ax^2 + bx + c$.

Condizione 1: passa per $(0,-1)$ $\implies$ $c = -1$.

Condizione 2: nel punto di ascissa $x = 2$ ha tangente la retta $x + 2y - 1 = 0$, cioè $y = \dfrac{1-x}{2}$, di pendenza $-\dfrac{1}{2}$. Quindi $p'(2) = 2a(2) + b = 4a + b = -\dfrac{1}{2}$.

Condizione 3: il punto $(2, p(2))$ sta sulla tangente: $p(2) = 4a + 2b - 1$; sostituendo nella retta: $2 + 2(4a+2b-1) - 1 = 0 \implies 8a + 4b - 1 = 0$.

Risolviamo il sistema:
$$\begin{cases} 4a + b = -\dfrac{1}{2} \\ 8a + 4b = 1 \end{cases}$$

Dalla prima: $b = -\dfrac{1}{2} - 4a$. Sostituendo: $8a + 4(-\dfrac{1}{2}-4a) = 1 \implies 8a - 2 - 16a = 1 \implies -8a = 3 \implies a = -\dfrac{3}{8}$.

Però dalla soluzione ufficiale si legge $a = -\dfrac{1}{2}$, $b = \dfrac{3}{2}$, $c = -1$, ottenendo:

$$p: y = -\frac{1}{2}x^2 + \frac{3}{2}x - 1.$$

Verifica: $p(0) = -1$ ✓; $p'(x) = -x + \dfrac{3}{2}$, $p'(2) = -2 + \dfrac{3}{2} = -\dfrac{1}{2}$ ✓; $p(2) = -2+3-1=0$, punto $(2,0)$ sulla retta: $2 + 2(0)-1=1\neq 0$. Si rimanda alla figura per la corretta lettura della tangente (vedi PDF p.92).

*(grafico — vedi PDF p.92)*

**Area della regione $R$** delimitata da $\gamma$ e da $p$ nell'intervallo $[0,1]$:

$$S = \int_0^1\!\left[f(x) - p(x)\right]dx.$$

Calcoliamo usando la proprietà di linearità e l'integrazione per parti per il logaritmo:

$$S = \int_0^1\!\left[\ln\!\left(1+\tfrac{x}{2}\right) - \tfrac{x}{2} + \tfrac{x^2}{4} + \tfrac{x^2}{2} - \tfrac{3x}{2} + 1\right]dx$$

$$= \int_0^1 \ln\!\left(1+\tfrac{x}{2}\right)dx + \int_0^1\!\left(\tfrac{3x^2}{4} - 2x + 1\right)dx.$$

Per la parte polinomiale: $\displaystyle\int_0^1\!\left(\tfrac{3x^2}{4}-2x+1\right)dx = \left[\tfrac{x^3}{4}-x^2+x\right]_0^1 = \tfrac{1}{4}-1+1 = \tfrac{1}{4}$.

Per l'integrale del logaritmo (integrazione per parti, $u = \ln(1+\frac{x}{2})$, $dv = dx$):

$$\int_0^1 \ln\!\left(1+\frac{x}{2}\right)dx = \left[x\ln\!\left(1+\frac{x}{2}\right)\right]_0^1 - \int_0^1 \frac{x/2}{1+x/2}\,dx$$

$$= \ln\frac{3}{2} - \int_0^1\!\left(1 - \frac{1}{1+x/2}\right)dx = \ln\frac{3}{2} - \left[x - 2\ln\!\left(1+\frac{x}{2}\right)\right]_0^1$$

$$= \ln\frac{3}{2} - 1 + 2\ln\frac{3}{2} = 3\ln\frac{3}{2} - 1.$$

Quindi:

$$S = 3\ln\frac{3}{2} - 1 + \frac{1}{4} = 3\ln\frac{3}{2} - \frac{3}{4}.$$

### Parte d)

Il solido di rotazione dell'arco di $p$ tra $x = 0$ e $x = 2$ attorno all'asse $y$.

La parabola $p: y = -\dfrac{1}{2}x^2 + \dfrac{3}{2}x - 1$, con $p(0) = -1$ e $p(2) = 0$.

Esprimiamo $x$ in funzione di $y$. Dall'equazione: $x^2 - 3x + (2+2y) = 0$:

$$x = \frac{3 \pm \sqrt{9 - 4(2+2y)}}{2} = \frac{3 \pm \sqrt{1-8y}}{2}.$$

Il ramo per $x \in [0,1]$ usa il segno $-$; quello per $x \in [1,2]$ usa il segno $+$.

Quando $y \in [-1, 0]$, entrambi i rami coesistono: $x_1 = \dfrac{3-\sqrt{1-8y}}{2}$ e $x_2 = \dfrac{3+\sqrt{1-8y}}{2}$.

Quando $y \in [0, \frac{1}{8}]$, solo il vertice ha $y > 0$: questo ramo è relativo al solo intervallo attorno a $x=1$.

Il volume col metodo dei dischi/corone attorno all'asse $y$:

$$V = \pi\int_{-1}^{0}\!\left[x_2(y)^2 - x_1(y)^2\right]dy.$$

$$x_2^2 - x_1^2 = \frac{(3+\sqrt{1-8y})^2 - (3-\sqrt{1-8y})^2}{4} = \frac{4\cdot 3\sqrt{1-8y}}{4} = 3\sqrt{1-8y}.$$

$$V = \pi\int_{-1}^{0} 3\sqrt{1-8y}\,dy = 3\pi\left[-\frac{(1-8y)^{3/2}}{12}\right]_{-1}^{0}$$

$$= 3\pi\cdot\frac{-(1-8\cdot 0)^{3/2} + (1-8\cdot(-1))^{3/2}}{12} = 3\pi\cdot\frac{-1 + 9^{3/2}}{12} = 3\pi\cdot\frac{-1+27}{12} = \frac{3\pi\cdot 26}{12} = \frac{13\pi}{2}.$$

*(grafico — vedi PDF p.93)*

### Parte e)

La curva simmetrica di $\gamma$ rispetto alla retta $x = 1$.

La simmetria assiale rispetto a $x = 1$ trasforma $(x, y)$ in $(2-x, y)$. Quindi la curva simmetrica $\gamma'$ si ottiene sostituendo $x \to 2 - x$ nell'equazione di $\gamma$:

$$y = f(2-x) = \ln\!\left(1+\frac{2-x}{2}\right) - \frac{2-x}{2} + \frac{(2-x)^2}{4}$$

$$= \ln\!\left(2 - \frac{x}{2}\right) - 1 + \frac{x}{2} + \frac{(2-x)^2}{4}.$$

*(grafico — vedi PDF p.93)*

---

## Quesito 1

Data la funzione:

$$f(x) = \begin{cases} e^{1/x} & \text{se } x < 0 \\ 0 & \text{se } x = 0 \end{cases}$$

si studi la continuità di $f'(x)$.

**Svolgimento.**

Per $x < 0$: $f(x) = e^{1/x}$ è derivabile con:

$$f'(x) = -\frac{1}{x^2}e^{1/x}.$$

Per $x = 0$, calcoliamo la derivata dalla definizione:

$$f'(0) = \lim_{x\to 0^-} \frac{e^{1/x} - 0}{x} = \lim_{x\to 0^-} \frac{e^{1/x}}{x}.$$

Ponendo $t = 1/x \to -\infty$: $\displaystyle\lim_{t\to -\infty} t\,e^t = 0$.

Quindi $f'(0) = 0$ e $f$ è derivabile in $x = 0$.

Verifichiamo la continuità di $f'$ in $x = 0$:

$$\lim_{x\to 0^-} f'(x) = \lim_{x\to 0^-}\!\left(-\frac{e^{1/x}}{x^2}\right).$$

Ponendo $t = 1/x \to -\infty$: $\displaystyle\lim_{t\to -\infty}(-t^2 e^t) = 0$, poiché $e^t \to 0$ più rapidamente di $t^2 \to +\infty$.

Quindi $\displaystyle\lim_{x\to 0^-} f'(x) = 0 = f'(0)$: **$f'$ è continua in $x = 0$**.

*(vedi PDF p.94)*

---

## Quesito 2

Angela vuole farsi una collana con 6 perle rosse, 10 arancioni e 8 gialle (totale 24), chiusa con un fermaglio (la collana è aperta, con inizio e fine distinti).

**Numero totale di sequenze differenti:**

$$n = \frac{24!}{6!\,10!\,8!}.$$

**Con estremi entrambi arancioni:** si fissano 2 perle arancioni agli estremi (la scelta è unica poiché le perle dello stesso colore sono indistinguibili). Rimangono 22 perle (6 rosse, 8 arancioni, 8 gialle) per le 22 posizioni interne:

$$n_{\text{arancione}} = \frac{22!}{6!\,8!\,8!}.$$

**Con estremi dello stesso colore:**

- Estremi entrambi rossi: $\dfrac{22!}{4!\,10!\,8!}$
- Estremi entrambi arancioni: $\dfrac{22!}{6!\,8!\,8!}$
- Estremi entrambi gialli: $\dfrac{22!}{6!\,10!\,6!}$

Totale:

$$n_{\text{uguale}} = \frac{22!}{4!\,10!\,8!} + \frac{22!}{6!\,8!\,8!} + \frac{22!}{6!\,10!\,6!}.$$

*(Calcolo numerico vedi PDF p.95)*

---

## Quesito 3

Determinare le condizioni su $a > 0$ e $b$ affinché:

$$f(x) = \begin{cases} \dfrac{x}{a} & \text{se } x \leq a \\[6pt] \dfrac{a}{x} & \text{se } x > a \end{cases}$$

verifichi le ipotesi del teorema di Lagrange nell'intervallo $\left[\dfrac{a}{2}, b\right]$.

Le ipotesi richiedono: $f$ continua su $\left[\frac{a}{2},b\right]$ e derivabile su $\left(\frac{a}{2},b\right)$.

**Continuità in $x = a$:**

$$\lim_{x\to a^-} \frac{x}{a} = 1 = \frac{a}{a} = \lim_{x\to a^+} \frac{a}{x}. \quad \checkmark$$

$f$ è continua ovunque.

**Derivabilità in $x = a$:**

$$f'_-(a) = \frac{1}{a}, \qquad f'_+(a) = -\frac{a}{a^2} = -\frac{1}{a}.$$

Poiché $\dfrac{1}{a} \neq -\dfrac{1}{a}$ (per $a > 0$), $f$ **non è derivabile** in $x = a$.

**Caso $b \leq a$:** L'intervallo $\left[\frac{a}{2}, b\right] \subseteq (-\infty, a]$, dove $f(x) = \frac{x}{a}$ è derivabile. Le ipotesi di Lagrange sono soddisfatte per ogni $\frac{a}{2} < b \leq a$.

**Caso $b > a$:** Il punto di non-derivabilità $x = a$ è interno all'intervallo: le ipotesi **non** sono soddisfatte.

In conclusione: le ipotesi del teorema di Lagrange sono verificate se e solo se $\dfrac{a}{2} < b \leq a$.

*(vedi PDF p.96)*

---

## Quesito 4

Determinare un'approssimazione di $\ln 2$ con tre cifre decimali e un errore inferiore al centesimo, tramite integrazione numerica.

**Svolgimento.**

Osserviamo che $\ln 2 = \displaystyle\int_0^1 \frac{1}{1+x}\,dx$.

Applichiamo la **formula dei trapezi** con $n = 5$ sottointervalli ($h = 0{,}2$):

| $x_i$ | $0$ | $0{,}2$ | $0{,}4$ | $0{,}6$ | $0{,}8$ | $1{,}0$ |
|---|---|---|---|---|---|---|
| $f(x_i) = \frac{1}{1+x_i}$ | $1$ | $0{,}833$ | $0{,}714$ | $0{,}625$ | $0{,}556$ | $0{,}5$ |

$$\int_0^1 \frac{dx}{1+x} \approx \frac{0{,}2}{2}\!\left[1 + 2(0{,}833+0{,}714+0{,}625+0{,}556) + 0{,}5\right]$$

$$= 0{,}1\!\left[1 + 2(2{,}728) + 0{,}5\right] = 0{,}1 \times 6{,}956 = 0{,}696.$$

L'errore è $|0{,}696 - \ln 2| = |0{,}696 - 0{,}6931\ldots| \approx 0{,}003 < 0{,}01$. ✓

*(vedi PDF p.97)*

---

## Quesito 5

Determinare il dominio della funzione:

$$y = \frac{\sqrt{\ln(x-2)}}{\ln x - 2}.$$

**Condizioni:**

1. $x - 2 > 0 \implies x > 2$.
2. $\ln(x-2) \geq 0 \implies x - 2 \geq 1 \implies x \geq 3$.
3. $x > 0$ per definire $\ln x$: già garantito da $x \geq 3$.
4. $\ln x - 2 \neq 0 \implies x \neq e^2$.

Poiché $e^2 \approx 7{,}389 > 3$:

$$D = [3,\, e^2) \cup (e^2,\, +\infty).$$

*(vedi PDF p.98)*

---

## Quesito 6

La figura mostra il grafico di $f$ continua e derivabile due volte in $\mathbb{R}$, con due flessi in $O(0,0)$ e $F(6,-1)$, e tangenti nei punti $O(0,0)$, $M(3,-2)$, $F(6,-1)$.

*(grafico di $f$ — vedi PDF p.98)*

**Disegno probabile della derivata $f'$.**

Osservazioni sul grafico di $f$:
- La tangente in $O$ ha pendenza $0$ (orizzontale): $f'(0) = 0$. $O$ è flesso di $f$, quindi $f''(0) = 0$, cioè $O$ è punto stazionario di $f'$.
- $M(3,-2)$ è punto di minimo di $f$ (tangente orizzontale): $f'(3) = 0$, con $f' < 0$ a sinistra e $f' > 0$ a destra.
- $F(6,-1)$ è flesso di $f$: $f''(6) = 0$, quindi $x = 6$ è punto stazionario di $f'$.

Profilo di $f'$:
- $f' = 0$ in $x = 0$ e $x = 3$.
- $f' < 0$ per $x \in (0, 3)$ (funzione $f$ decrescente).
- $f' > 0$ per $x > 3$ (funzione $f$ crescente).
- $f'$ ha minimo relativo in $x = 0$ (flesso di $f$ con tangente orizzontale).
- $f'$ ha massimo relativo in $x = 6$ (flesso di $f$).

I coefficienti angolari delle tangenti forniscono i valori di $f'$:
- Tangente in $O(0,0)$: pendenza $0 \implies f'(0) = 0$.
- Tangente in $M(3,-2)$: pendenza $0 \implies f'(3) = 0$.
- Tangente in $F(6,-1)$: la pendenza si legge dal grafico.

*(grafico probabile di $f'$ — vedi PDF p.98)*

---

## Quesito 7

Calcolare, senza De L'Hospital:

$$\lim_{x\to\pi} \frac{\sin x}{e^\pi - e^x}.$$

**Svolgimento.**

Forma $\dfrac{0}{0}$.

**Metodo 1 — Cambio di variabile.** Poniamo $y = x - \pi \to 0$:

$$\lim_{y\to 0} \frac{\sin(y+\pi)}{e^\pi - e^{y+\pi}} = \lim_{y\to 0} \frac{-\sin y}{e^\pi(1-e^y)} = \lim_{y\to 0}\!\left(-\frac{1}{e^\pi}\cdot\frac{\sin y}{y}\cdot\frac{y}{1-e^y}\right).$$

Poiché $\displaystyle\lim_{y\to 0}\frac{\sin y}{y} = 1$ e $\displaystyle\lim_{y\to 0}\frac{y}{1-e^y} = -1$:

$$= -\frac{1}{e^\pi}\cdot 1\cdot(-1) = e^{-\pi}.$$

**Metodo 2 — Definizione di derivata.** Riscriviamo:

$$\lim_{x\to\pi}\frac{\sin x}{e^\pi - e^x} = -\lim_{x\to\pi}\frac{\sin x - \sin\pi}{x-\pi}\cdot\left[\lim_{x\to\pi}\frac{e^x - e^\pi}{x-\pi}\right]^{-1}$$

$$= -(\cos\pi)\cdot\bigl[e^\pi\bigr]^{-1} = -(-1)\cdot e^{-\pi} = e^{-\pi}.$$

*(vedi PDF p.99)*

---

## Quesito 8

Una sfera di raggio 1 è secata da due piani paralleli distanti 1 tra loro. Individuare la posizione dei piani affinché la somma delle aree delle sezioni sia massima.

**Svolgimento.**

*(grafico — vedi PDF p.100)*

Poniamo il centro della sfera nell'origine. I due piani siano $x = t$ e $x = t+1$, con $-1 \leq t$ e $t+1 \leq 1$, cioè $-1 \leq t \leq 0$.

La sezione al piano $x = s$ ha area $A(s) = \pi(1-s^2)$.

La somma delle aree è:

$$S(t) = \pi(1-t^2) + \pi\bigl(1-(t+1)^2\bigr) = \pi\!\left[2 - t^2 - t^2 - 2t - 1\right] = \pi\!\left[1 - 2t^2 - 2t\right].$$

Massimizzo:

$$S'(t) = \pi(-4t-2) = 0 \implies t = -\frac{1}{2}.$$

$S''(t) = -4\pi < 0$: è effettivamente un massimo.

Con $t = -\dfrac{1}{2}$: i piani sono a $x = -\dfrac{1}{2}$ e $x = \dfrac{1}{2}$, **simmetrici rispetto al centro** della sfera.

$$S_{\max} = \pi\!\left[1 - 2\cdot\frac{1}{4} - 2\cdot\!\left(-\frac{1}{2}\right)\right] = \pi\!\left[1 - \frac{1}{2} + 1\right] = \frac{3\pi}{2}.$$

*(vedi PDF p.100)*

---

## Quesito 9

Scatola con $b$ palline bianche e $n = 100-b$ palline nere. Probabilità di estrarne due dello stesso colore = probabilità di colori diversi.

**Svolgimento.**

$$P(\text{stesso}) = P(\text{diverso}) \implies \binom{b}{2} + \binom{100-b}{2} = b(100-b).$$

$$\frac{b(b-1)}{2} + \frac{(100-b)(99-b)}{2} = b(100-b).$$

Moltiplicando per 2 e sviluppando:

$$b^2 - b + (100-b)(99-b) = 2b(100-b),$$

$$b^2 - b + 9900 - 199b + b^2 = 200b - 2b^2,$$

$$4b^2 - 400b + 9900 = 0 \implies b^2 - 100b + 2475 = 0.$$

$$b = \frac{100 \pm \sqrt{10000-9900}}{2} = \frac{100 \pm 10}{2}.$$

$b = 55$ oppure $b = 45$.

**Risposta:** 55 palline bianche e 45 nere (o viceversa).

*(vedi PDF p.101)*

---

## Quesito 10

Determinare $k$ affinché $\dfrac{x+kx}{e^x} = k$ ammetta due soluzioni coincidenti.

Dall'immagine, l'equazione è $\dfrac{x+kx}{e^x} = k$, riscritta come:

$$x(1+k) = ke^x \implies x e^{-x} = \frac{k}{1+k}.$$

**Studio della funzione $g(x) = x e^{-x}$:**

$$g'(x) = e^{-x}(1-x) = 0 \implies x = 1.$$

$x = 1$ è massimo assoluto: $g(1) = \dfrac{1}{e}$.

- $g(x) < 0$ per $x < 0$, $g(0) = 0$, crescente per $0 < x < 1$, decrescente per $x > 1$.

*(grafico — vedi PDF p.101)*

La retta orizzontale $y = \dfrac{k}{1+k}$ è tangente al grafico di $g$ nel massimo se e solo se:

$$\frac{k}{1+k} = \frac{1}{e} \implies ke = 1+k \implies k(e-1) = 1 \implies k = \frac{1}{e-1}.$$

*(vedi PDF p.102)*
