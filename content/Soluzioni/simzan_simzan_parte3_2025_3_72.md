---
tipo: soluzione
prova_stem: simzan_simzan_parte3_2025_3_72
pdf: SimZan_parte3.pdf
source: vision
title: Soluzioni — simzan_simzan_parte3_2025_3_72
---

# Soluzioni — simzan_simzan_parte3_2025_3_72

## Problema 1

**Testo.** Sia $f_a(x) = \dfrac{x^2 - ax}{|x| + 1}$, con $a \in \mathbb{R}$.

### Punto a — Definizione, continuità, derivabilità; derivata seconda in $x=0$

**Dominio.** Il denominatore $|x|+1 \geq 1 > 0$ per ogni $x \in \mathbb{R}$, quindi $f_a(x)$ è definita su tutto $\mathbb{R}$.

Riscriviamo per parti:

$$
f_a(x) = \begin{cases} \dfrac{x^2 - ax}{1 - x} & \text{se } x < 0 \\[6pt] \dfrac{x^2 - ax}{x + 1} & \text{se } x \geq 0 \end{cases}, \quad a \in \mathbb{R}.
$$

Per qualsiasi valore reale di $a$, la funzione è continua per $x \neq 0$ come rapporto di funzioni continue. Poiché $\lim_{x \to 0} f_a(x) = 0 = f_a(0)$, è continua anche in $x = 0$, quindi su tutto $\mathbb{R}$.

**Derivabilità.** Calcoliamo $f_a'(x)$ per $x \neq 0$:

$$
f_a'(x) = \begin{cases} \dfrac{-x^2 + 2x - a}{(1 - x)^2} & \text{se } x < 0 \\[6pt] \dfrac{x^2 + 2x - a}{(x + 1)^2} & \text{se } x > 0 \end{cases}.
$$

I limiti laterali in $x = 0$:

$$
\lim_{x \to 0^-} f_a'(x) = -a = \lim_{x \to 0^+} f_a'(x),
$$

quindi $f_a'(0) = -a$ e $f_a$ è derivabile su tutto $\mathbb{R}$.

**Derivata seconda in $x = 0$.** Per $x \neq 0$:

$$
f_a''(x) = \begin{cases} \dfrac{2}{(1-x)^2} & \text{se } x < 0 \\[6pt] \dfrac{2}{(x+1)^2} & \text{se } x > 0 \end{cases}.
$$

Calcoliamo il limite del rapporto incrementale di $f_a'$ in $x = 0$. Per $x > 0$:

$$
\frac{f_a'(x) - (-a)}{x} = \frac{(1+a)x + (2+2a)}{(x+1)^2} \;\xrightarrow{x\to 0^+}\; 2+2a.
$$

Per $x < 0$, analogamente il limite è $2 - 2a$.

Affinché la derivata seconda esista in $x = 0$:

$$
2 + 2a = 2 - 2a \;\Longrightarrow\; \boxed{a = 0}.
$$

### Punto b — Asintoti e punto di intersezione $A$

Asintoto obliquo per $x \to -\infty$:

$$
m_1 = -1, \qquad q_1 = \lim_{x \to -\infty}\bigl[f_a(x)+x\bigr] = a - 1.
$$

Equazione: $y = -x + a - 1$.

Asintoto obliquo per $x \to +\infty$:

$$
m_2 = 1, \qquad q_2 = -(a+1).
$$

Equazione: $y = x - a - 1$.

Intersezione dei due asintoti:

$$
-x + a - 1 = x - a - 1 \;\Longrightarrow\; x = a, \quad y = -1.
$$

$$
\boxed{A(a;\,-1).}
$$

### Punto c — Studio completo di $f_2(x)$ (con $a = 2$); flesso; tangenti agli zeri

Poniamo $a = 2$: $f_2(x) = \dfrac{x^2 - 2x}{|x| + 1}$.

**Dominio:** $\mathbb{R}$.

**Simmetrie:** non è né pari né dispari ($f_2(-x) = \dfrac{x^2+2x}{|x|+1}$).

**Intersezioni con gli assi:**
- Asse $x$: $x = 0$ (punto $O$) e $x = 2$ (punto $A(2;0)$).
- Asse $y$: $y = 0$.

**Segno:** positiva per $x < 0$ o $x > 2$; negativa per $0 < x < 2$.

**Asintoti:** $y = -x + 1$ (sinistro) e $y = x - 3$ (destro).

**Derivata prima:**

$$
f_2'(x) = \begin{cases} \dfrac{-x^2 + 2x - 2}{(1-x)^2} & x < 0 \\[6pt] \dfrac{x^2 + 2x - 2}{(x+1)^2} & x \geq 0 \end{cases}.
$$

Per $x < 0$: $\Delta = -4 < 0$, numeratore sempre negativo → $f_2$ decrescente.

Per $x \geq 0$: $x^2 + 2x - 2 = 0 \Rightarrow x = -1 + \sqrt{3}$. La funzione è decrescente per $0 \leq x < -1+\sqrt{3}$, crescente per $x > -1+\sqrt{3}$. Minimo relativo in $x = -1+\sqrt{3}$.

**Derivata seconda:**

$$
f_2''(x) = \begin{cases} \dfrac{2}{(1-x)^2} & x < 0 \\[6pt] \dfrac{2}{(x+1)^2} & x > 0 \end{cases}.
$$

È negativa per $x < 0$ e positiva per $x > 0$: la concavità cambia segno in $x = 0$. Poiché $f_2''$ non si annulla, il cambio di concavità avviene proprio in $x = 0$: il grafico di $f_2(x)$ presenta un **flesso** in $(0;\,0)$.

*(grafico — vedi PDF p.107)*

**Rette tangenti agli zeri di $f_2(x)$.**

In $x_1 = 0$: $f_2'(0) = -2$, tangente $t_1: y = -2x$.

In $x_2 = 2$: $f_2'(2) = \dfrac{4+4-2}{9} = \dfrac{2}{3}$, tangente $t_2: y = \dfrac{2}{3}(x-2)$.

### Punto d — Rapporto tra area di $S$ e area di $T$

Punto $B$ di intersezione tra $t_1$ e $t_2$:

$$
-2x = \tfrac{2}{3}(x-2) \;\Longrightarrow\; x = \tfrac{1}{2}, \quad y = -1.
$$

$\text{Area}(T) = \tfrac{1}{2} \cdot 2 \cdot 1 = 1$.

$S = \int_0^2 \dfrac{2x-x^2}{x+1}\,dx$. Eseguendo la divisione: $\dfrac{2x-x^2}{x+1} = -x+3-\dfrac{3}{x+1}$.

$$
S = \left[-\frac{x^2}{2} + 3x - 3\ln(x+1)\right]_0^2 = 4 - 3\ln 3.
$$

$$
\boxed{\frac{S}{\text{Area}(T)} = 4 - 3\ln 3 \approx 0{,}704.}
$$

---

## Problema 2

**Testo.** Il grafico rappresenta $y = f(x)$ con $D = \mathbb{R}$, estremi relativi $M_1$ (minimo, $x < 0$) e $M_2$ (massimo, $x = 3$).

*(grafico — vedi PDF p.74)*

### Punto a — Grafici qualitativi di $f'(x)$ e di $F(x) = \int_0^x f(t)\,dt$

**Grafico di $f'(x)$.** La funzione $f$ è decrescente per $x < x_{M_1}$, crescente per $x_{M_1} < x < 3$, decrescente per $x > 3$. Quindi:
- $f'(x) < 0$ per $x < x_{M_1}$, $f'(x) = 0$ per $x = x_{M_1}$;
- $f'(x) > 0$ per $x_{M_1} < x < 3$, $f'(x) = 0$ per $x = 3$;
- $f'(x) < 0$ per $x > 3$.
- $f'$ ha un massimo relativo nel punto di flesso di $f$ tra $M_1$ e $M_2$.

*(grafico — vedi PDF p.108)*

**Grafico di $F(x)$.** Per il teorema fondamentale, $F'(x) = f(x)$, $F(0) = 0$.
- $F$ ha massimi/minimi relativi dove $f(x) = 0$, cioè in $x = x_{M_1}$ e $x = 3$.

*(grafico — vedi PDF p.108)*

### Punto b — Determinazione dei parametri $a$ e $b$

$f(x) = (ax^2 + bx + 2)e^{-x/2}$.

$$
f'(x) = e^{-x/2}\left(-\tfrac{a}{2}x^2 + \bigl(2a - \tfrac{b}{2}\bigr)x + b - 1\right).
$$

Dal grafico, $M_1$ è il minimo relativo in $x = 0$ e $M_2$ il massimo in $x = 3$:
- $f'(0) = 0 \Rightarrow b - 1 = 0 \Rightarrow b = 1$.
- $f'(3) = 0$ con $b = 1$: $-\tfrac{9a}{2} + 6a - \tfrac{3}{2} = 0 \Rightarrow \tfrac{3a}{2} = \tfrac{3}{2} \Rightarrow a = 1$.

$$
\boxed{a = 1,\quad b = 1.}
$$

### Punto c — Flessi; tangenti da $P(-3;\,0)$; angolo acuto

Con $a = 1$, $b = 1$: $f(x) = (x^2 + x + 2)e^{-x/2}$.

**Derivata prima:**

$$
f'(x) = \frac{x(3-x)}{2}\,e^{-x/2}.
$$

**Derivata seconda:**

$$
f''(x) = \frac{e^{-x/2}}{4}(x^2 - 7x + 6) = \frac{e^{-x/2}}{4}(x-1)(x-6).
$$

Flessi in $x = 1$ e $x = 6$:
- $F_1 = \bigl(1;\,4e^{-1/2}\bigr)$,
- $F_2 = \bigl(6;\,44e^{-3}\bigr)$.

**Rette tangenti da $P(-3;\,0)$.** Condizione affinché la tangente in $(c;\,f(c))$ passi per $P$:

$$
-f(c) = f'(c)(-3-c) \;\Longrightarrow\; c^3 + 2c^2 - 7c + 4 = 0 \;\Longrightarrow\; (c-1)^2(c+4) = 0.
$$

Soluzioni: $c_1 = 1$ e $c_2 = -4$.

$$
t_1:\; y = e^{-1/2}(x + 3),
$$

$$
t_2:\; y = -14e^2(x + 3).
$$

**Angolo acuto:**

$$
m_1 = e^{-1/2} \approx 0{,}607,\quad m_2 = -14e^2 \approx -103{,}43.
$$

$$
\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right| \approx \left|\frac{104{,}04}{-169{,}55}\right| \approx 0{,}614.
$$

$$
\theta \approx 31°33'.
$$

### Punto d — Limite di $A(k)$ per $k \to +\infty$

$$
A(k) = \int_0^k (x^2+x+2)e^{-x/2}\,dx.
$$

Con la primitiva $e^{-x/2}(Ax^2+Bx+C)$ (coefficienti: $A=-2$, $B=-10$, $C=-24$):

$$
A(k) = \left[-(2x^2+10x+24)e^{-x/2}\right]_0^k = 24 - (2k^2+10k+24)e^{-k/2}.
$$

$$
\lim_{k\to+\infty} A(k) = \boxed{24}.
$$

**Interpretazione grafica:** l'area totale tra il grafico di $f(x)$ e l'asse $x$ per $x \geq 0$ è 24.

---

## Quesito 1

Distribuzione binomiale con $n = 6$, probabilità di successo $p$.

$$
P(A) = \binom{6}{2}p^2(1-p)^4 = 15p^2(1-p)^4,
$$

$$
P(B) = \binom{6}{3}p^3(1-p)^3 = 20p^3(1-p)^3.
$$

**Per quali $p$ si ha $P(A) > P(B)$?** Dividendo per $p^2(1-p)^3 > 0$:

$$
15(1-p) > 20p \;\Longrightarrow\; 15 > 35p \;\Longrightarrow\; \boxed{0 < p < \frac{3}{7}.}
$$

---

## Quesito 2

$$
r: \begin{cases} x = 2t \\ y = 2 + t \\ z = 1 - t \end{cases}, \; t \in \mathbb{R}; \qquad s: \begin{cases} x + 2y = 0 \\ x + 2y - z = 3 \end{cases}.
$$

### Punto a — Verifica che $r$ e $s$ sono sghembe

$\vec{d}_r = (2,1,-1)$; vettore direzione di $s$:

$$
\vec{d}_s = (1,2,0)\times(1,2,-1) = (-2,1,0).
$$

Non parallele (vettori non proporzionali). Un punto su $r$: $r_0 = (0,2,1)$ (per $t=0$). Un punto su $s$: $s_0 = (0,0,-3)$ (da $z = -3$, $x = y = 0$). $\overrightarrow{r_0 s_0} = (0,-2,-4)$.

$$
\begin{vmatrix} 0 & -2 & -4 \\ 2 & 1 & -1 \\ -2 & 1 & 0 \end{vmatrix} = 0 - (-2)(0-2) + (-4)(2+2) = -4 - 16 = -20 \neq 0.
$$

Le rette sono **sghembe**.

### Punto b — Piano contenente $s$ passante per $P$

$r$ incontra $Oxy$ in $z=0$: $t=1$, $P = (2,3,0)$.

$\overrightarrow{s_0 P} = (2,3,3)$. Normale al piano:

$$
\vec{n} = (-2,1,0)\times(2,3,3) = (3,6,-8).
$$

$$
\boxed{3x + 6y - 8z - 24 = 0.}
$$

---

## Quesito 3

Trapezio isoscele $ABCD$ circoscritto a circonferenza di raggio $r$, $AB = 3\,CD$.

Sia $CD = a$, $AB = 3a$. Per trapezio circoscritto: $AB + CD = 2l \Rightarrow l = 2a$.

Altezza: $h = \sqrt{4a^2 - a^2} = a\sqrt{3}$.

Raggio iscritto: $r = h/2 = a\sqrt{3}/2$.

$$
\frac{r}{CD} = \frac{\sqrt{3}}{2}, \qquad \hat{A} = \hat{B} = 60°, \quad \hat{C} = \hat{D} = 120°.
$$

---

## Quesito 4

$\gamma: y = -x^2+6x-5$; $\alpha_k: y = kx^2-(7k+1)x+10k+5$, $k > 0$.

**Punti comuni.** Sottraendo: $-(1+k)(x^2-7x+10)=0 \Rightarrow x=2$ o $x=5$ (sempre).

Punti comuni: $P_1(2;\,3)$ e $P_2(5;\,0)$.

**Valore di $k$ per area = 9.**

$$
\text{Area} = (1+k)\int_2^5(x-2)(5-x)\,dx = (1+k)\cdot\frac{9}{2} = 9 \;\Longrightarrow\; \boxed{k=1.}
$$

---

## Quesito 5

$F(x) = \int_x^{-1}\!\left(\dfrac{3}{2}t^2 + t - 2\right)dt$.

**Ipotesi di Rolle su $[-1;\,2]$:** $F$ è continua su $[-1;2]$ e derivabile su $(-1;2)$.

$F(-1) = 0$.

$$
F(2) = -\int_{-1}^{2}\!\left(\tfrac{3}{2}t^2+t-2\right)dt = -\left[\tfrac{t^3}{2}+\tfrac{t^2}{2}-2t\right]_{-1}^{2} = -(2-(-2)) = \ldots = 0.
$$

Più in dettaglio: $\left[\tfrac{t^3}{2}+\tfrac{t^2}{2}-2t\right]_{-1}^{2} = (4+2-4)-(-\tfrac{1}{2}+\tfrac{1}{2}+2) = 2-2 = 0$, dunque $F(2) = 0$.

$F(-1) = F(2) = 0$: ipotesi verificate.

**Tesi.** $F'(x) = -\left(\tfrac{3}{2}x^2+x-2\right)=0 \Rightarrow 3x^2+2x-4=0 \Rightarrow x = \dfrac{-1\pm\sqrt{13}}{3}$.

Solo $c = \dfrac{-1+\sqrt{13}}{3} \approx 0{,}869 \in (-1;\,2)$.

$$
\boxed{c = \frac{-1+\sqrt{13}}{3}.}
$$

---

## Quesito 6

Parabola di vertice $A(2;\,0)$ passante per $C(0;\,2)$: $y = \dfrac{1}{2}(x-2)^2$. Quadrato $OABC$.

*(grafico — vedi PDF p.79)*

La retta $x = k$ ($0 < k < 2$) individua le regioni $\mathcal{A}_1$ (sinistra, tra parabola e lato superiore) e $\mathcal{A}_2$ (destra, tra parabola e asse $x$):

$$
\mathcal{A}_1 = \int_0^k\!\left[2 - \tfrac{(x-2)^2}{2}\right]dx, \qquad \mathcal{A}_2 = \int_k^2 \tfrac{(x-2)^2}{2}\,dx.
$$

$$
\mathcal{A}_2 = \frac{(2-k)^3}{6}, \qquad \mathcal{A}_1 = 2k - \frac{(k-2)^3}{6} - \frac{4}{3}.
$$

$$
S(k) = \mathcal{A}_1 + \mathcal{A}_2 = 2k - \frac{(k-2)^3}{3} - \frac{4}{3}.
$$

$$
S'(k) = 2 - (k-2)^2 = 0 \;\Longrightarrow\; k = 2 - \sqrt{2} \in (0,2).
$$

$S''(k) = -2(k-2) > 0$ per $k < 2$: minimo.

$$
\boxed{k = 2 - \sqrt{2}.}
$$

---

## Quesito 7

$p(x)$ pari di grado 4, punto stazionario in $A(-\sqrt{2};\,-2)$, $p(0) = 0$.

**Determinazione.** $p(x) = \alpha x^4 + \beta x^2$.

- $4\alpha + 2\beta = -2$ e $\beta = -4\alpha \Rightarrow \alpha = \tfrac{1}{2}$, $\beta = -2$.

$$
p(x) = \frac{x^4}{2} - 2x^2.
$$

**Intersezioni con $q(x) = \dfrac{p(x)}{x^3} = \dfrac{x}{2} - \dfrac{2}{x}$.**

$p(x) = q(x)$ con $x \neq 0$ porta a $x^5 - 4x^3 - x^2 + 4 = 0$:

$$
= (x-1)(x^4+x^3-3x^2-4x-4) = (x-1)(x-2)(x+2)(x^2+x+1).
$$

Radici reali: $x = 1$, $x = 2$, $x = -2$.

Punti di intersezione:

$$
\boxed{\left(1;\,-\tfrac{3}{2}\right),\quad (2;\,0),\quad (-2;\,0).}
$$

---

## Quesito 8

$f(x) = x^4 - 2ax^3$, $a > 0$.

**Flessi.** $f''(x) = 12x(x-a) = 0 \Rightarrow x = 0$ o $x = a$.

Flesso in $x = a$: $f(a) = -a^4$, $f'(a) = -2a^3$.

Tangente inflessionare in $x = a$: $y = -2a^3 x + a^4$.

Condizione $y = -2x + 1$:

$$
-2a^3 = -2 \;\Longrightarrow\; \boxed{a = 1.}
$$

**Verifica $y = -x^2$ tangente a $f(x) = x^4 - 2x^3$ nei flessi ($x=0$ e $x=1$).**

- $x = 0$: $-0^2 = 0 = f(0)$ ✓; pendenze: $0 = f'(0) = 0$ ✓.
- $x = 1$: $-1 = f(1) = 1-2 = -1$ ✓; pendenze: $-2 = f'(1) = 4-6 = -2$ ✓.

La parabola $y = -x^2$ è tangente al grafico di $f(x)$ in entrambi i punti di flesso. ✓
