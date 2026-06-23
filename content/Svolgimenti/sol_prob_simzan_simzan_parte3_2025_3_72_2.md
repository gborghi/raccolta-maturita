---
title: 'Simulazione Zanichelli 2025 — SimZan parte3 #3 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte3_2025_3_72_2
of_item: prob_simzan_simzan_parte3_2025_3_72_2
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

**Problema:** [[Problemi/prob_simzan_simzan_parte3_2025_3_72_2|Simulazione Zanichelli 2025 — SimZan parte3 n.3 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte3_2025_3_72|Simulazione Zanichelli 2025 — SimZan parte3 n.3]]

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

*Fonte:* [📄 PDF p.72](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
