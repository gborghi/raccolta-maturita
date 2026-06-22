---
title: 2007 Ordinaria PNI — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2007_sessione_ordinaria_2007_prova_168_1
of_item: prob_2007_sessione_ordinaria_2007_prova_168_1
prova_id: prova_2007_sessione_ordinaria_2007_prova_168
anno: '2007'
pdf: Prova_Maturita_2007.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2007
---

**Problema:** [[Problemi/prob_2007_sessione_ordinaria_2007_prova_168_1|2007 Ordinaria PNI — Prova — Problema 1]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_168|2007 Ordinaria PNI — Prova]]

Sia $a > 0$ e sia $g$ la funzione definita per ogni $x \in \mathbb{R}$ da:

$$g(x) = \frac{a^x + a^{-x}}{2}$$

(coseno iperbolico generalizzato in base $a$).

**Punto 1. Monotonia di $g$ per $a \neq 1$.**

Calcoliamo la derivata:

$$g'(x) = \frac{a^x \ln a - a^{-x} \ln a}{2} = \frac{\ln a\,(a^x - a^{-x})}{2}.$$

Per $x > 0$: $a^x > a^{-x}$ se $a > 1$, oppure $a^x < a^{-x}$ se $0 < a < 1$.

- Se $a > 1$: $\ln a > 0$ e $a^x - a^{-x} > 0$ per $x > 0$, quindi $g'(x) > 0$ (crescente); per $x < 0$, $a^x - a^{-x} < 0$, quindi $g'(x) < 0$ (decrescente).
- Se $0 < a < 1$: $\ln a < 0$ e $a^x - a^{-x} > 0$ per $x > 0$, quindi $g'(x) < 0$ (decrescente); per $x < 0$, $a^x - a^{-x} < 0$ e $\ln a < 0$, quindi $g'(x) > 0$ (crescente).

In entrambi i casi ($a \neq 1$), $g$ è strettamente crescente per $x > 0$ e strettamente decrescente per $x < 0$. (Con $a = 1$ si avrebbe $g(x) = 1$ costante.) $\square$

**Punto 2. Con $a = e$: grafico di $f(x) = \cosh x$ e di $f^{-1}(x)$.**

$$f(x) = \frac{e^x + e^{-x}}{2} = \cosh x.$$

Studio di $f$:

- Dominio: $\mathbb{R}$; codominio: $[1, +\infty)$.
- $f(-x) = \cosh(-x) = \cosh x = f(x)$: funzione **pari**, grafico simmetrico rispetto all'asse $y$.
- Minimo assoluto: $f(0) = 1$; nessun massimo.
- $f'(x) = \sinh x$: $f$ decresce per $x < 0$, cresce per $x > 0$.
- $f''(x) = \cosh x > 0$: concava verso l'alto, nessun flesso.
- $\lim_{x \to \pm\infty} f(x) = +\infty$.

Il grafico è la **catenaria** con vertice in $(0, 1)$.

La funzione inversa $f^{-1}(x) = \operatorname{arcosh}(x) = \ln\!\left(x + \sqrt{x^2 - 1}\right)$ è definita per $x \geq 1$, a valori in $[0, +\infty)$; il suo grafico si ottiene ribaltando il ramo destro ($x \geq 0$) di $f$ rispetto alla bisettrice $y = x$.

*(grafico — vedi PDF p.168)*

**Punto 3. Calcolo di $\displaystyle\int_0^t \frac{1}{f(x)}\,dx$ e limite per $t \to +\infty$.**

$$\frac{1}{f(x)} = \frac{2}{e^x + e^{-x}} = \frac{2e^x}{e^{2x}+1}.$$

Sostituzione $u = e^x$, $du = e^x\,dx$:

$$\int \frac{1}{f(x)}\,dx = 2\int \frac{du}{u^2+1} = 2\arctan(e^x) + C.$$

Quindi:

$$\int_0^t \frac{1}{f(x)}\,dx = \Bigl[2\arctan(e^x)\Bigr]_0^t = 2\arctan(e^t) - 2\arctan(1) = 2\arctan(e^t) - \frac{\pi}{2}.$$

Per $t \to +\infty$:

$$\lim_{t \to +\infty} \left(2\arctan(e^t) - \frac{\pi}{2}\right) = 2 \cdot \frac{\pi}{2} - \frac{\pi}{2} = \frac{\pi}{2}.$$

**Interpretazione geometrica.** L'integrale improprio $\displaystyle\int_0^{+\infty} \frac{dx}{\cosh x}$ rappresenta l'area della regione (illimitata) compresa tra la curva $y = \dfrac{1}{\cosh x}$ e l'asse $x$ per $x \geq 0$. Nonostante la regione si estenda all'infinito, l'area è finita e vale $\dfrac{\pi}{2}$.

**Punto 4. Procedura numerica per approssimare $\pi/4$.**

Dal punto 3, $\displaystyle\int_0^{+\infty} \frac{dx}{\cosh x} = \frac{\pi}{2}$, quindi $\dfrac{\pi}{4} = \dfrac{1}{2}\int_0^{+\infty} \frac{dx}{\cosh x}$.

Una procedura numerica concreta (metodo dei trapezi):

1. Si sceglie $T$ grande (es. $T = 20$) e si divide $[0, T]$ in $n$ sottointervalli di ampiezza $h = T/n$.
2. Si calcola $g(x_k) = \dfrac{2}{e^{x_k} + e^{-x_k}}$ nei nodi $x_k = kh$, $k = 0, 1, \ldots, n$.
3. Si applica la formula del trapezio:

$$\int_0^T \frac{dx}{\cosh x} \approx h\left[\frac{g(x_0)}{2} + g(x_1) + g(x_2) + \cdots + g(x_{n-1}) + \frac{g(x_n)}{2}\right].$$

4. La metà del risultato approssima $\dfrac{\pi}{4}$.

Aumentando $n$ (e/o $T$), l'approssimazione migliora. Con $T = 15$ e $n = 1000$ si ottiene già una precisione elevata.

---

*Fonte:* [📄 PDF p.168](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
