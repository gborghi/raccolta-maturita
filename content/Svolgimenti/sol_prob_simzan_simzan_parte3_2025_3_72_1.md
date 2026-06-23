---
title: 'Simulazione Zanichelli 2025 — SimZan parte3 #3 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte3_2025_3_72_1
of_item: prob_simzan_simzan_parte3_2025_3_72_1
prova_id: prova_simzan_simzan_parte3_2025_3_72
anno: '2025'
pdf: SimZan_parte3.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2025
---

**Problema:** [[Problemi/prob_simzan_simzan_parte3_2025_3_72_1|Simulazione Zanichelli 2025 — SimZan parte3 n.3 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte3_2025_3_72|Simulazione Zanichelli 2025 — SimZan parte3 n.3]]

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

*Fonte:* [📄 PDF p.72](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
