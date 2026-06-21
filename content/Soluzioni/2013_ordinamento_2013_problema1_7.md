---
tipo: soluzione
prova_stem: 2013_ordinamento_2013_problema1_7
pdf: Prova_Maturita_2013.pdf
source: text
title: Soluzioni — 2013_ordinamento_2013_problema1_7
---

# Soluzioni — 2013_ordinamento_2013_problema1_7

## Problema 1

### Punto 1)

È definita la funzione

$$f(x) = \int_0^x \left(\cos\frac{t}{2} + \frac{1}{2}\right)dt, \quad x \in [0,9].$$

Per il teorema di Torricelli risulta

$$f'(x) = \cos\frac{x}{2} + \frac{1}{2},$$

quindi

$$f'(\pi) = \frac{1}{2} \quad \text{ed} \quad f'(2\pi) = -\frac{1}{2}.$$

### Punto 2)

La funzione $f'(x)$ è periodica di periodo

$$T = \frac{2\pi}{\tfrac{1}{2}} = 4\pi$$

ed il suo grafico si ottiene da quello della funzione di equazione $y = \cos\!\left(\dfrac{x}{2}\right)$ con una traslazione verso l'alto di $\dfrac{1}{2}$.

*(grafico di $f'(x)$ — vedi PDF)*

$f'(x)$ ha il massimo assoluto in $x = 0$ e vale $\dfrac{3}{2}$, il minimo assoluto in $x = 2\pi$ e vale $-\dfrac{1}{2}$, un massimo relativo in $x = 9$ che vale $\cos\!\left(\dfrac{9}{2}\right) + \dfrac{1}{2} \approx 0{.}29$.

Il grafico di $f'(x)$ taglia l'asse $x$ quando $\cos\!\left(\dfrac{x}{2}\right) + \dfrac{1}{2} = 0$, ossia quando $\cos\!\left(\dfrac{x}{2}\right) = -\dfrac{1}{2}$, ossia quando

$$x = \frac{4\pi}{3} \quad \text{e} \quad x = \frac{8\pi}{3}.$$

$f(x)$ cresce da $x = 0$ a $x = \dfrac{4\pi}{3}$ e da $x = \dfrac{8\pi}{3}$ a $9$, dove la $f'(x)$ è positiva; decresce da $x = \dfrac{4\pi}{3}$ a $x = \dfrac{8\pi}{3}$, dove la $f'(x)$ è negativa; quindi ha un massimo in $x = \dfrac{4\pi}{3}$ ed un minimo in $x = \dfrac{8\pi}{3}$. In $x = 9$ ha un massimo relativo e presenta un minimo assoluto in $x = 0$, dove vale $0$ poiché

$$f(0) = \int_0^0 \left(\cos\frac{t}{2} + \frac{1}{2}\right)dt = 0.$$

Poiché la derivata seconda $f''(x)$ è positiva dove la $f'(x)$ cresce e negativa dove decresce, deduciamo che la concavità della $f(x)$ è rivolta verso il basso da $0$ a $\dfrac{\pi}{2}$ e verso l'alto da $\dfrac{\pi}{2}$ a $9$; quindi in $x = \dfrac{\pi}{2}$ c'è un flesso.

Valutando le aree delle regioni comprese tra il grafico di $f'(x)$ e l'asse delle $x$, si può qualitativamente notare che $f(9) > 0$, che $f\!\left(\dfrac{8\pi}{3}\right) > 0$ e che $f(9) < f\!\left(\dfrac{4\pi}{3}\right)$.

*(grafico di $f(x)$ — vedi PDF)*

**N.B.** I valori numerici si ottengono calcolando l'integrale:

$$f\!\left(\frac{4\pi}{3}\right) = \int_0^{\frac{4\pi}{3}} \left(\cos\frac{t}{2} + \frac{1}{2}\right)dt = \left[2\sin\frac{t}{2} + \frac{t}{2}\right]_0^{\frac{4\pi}{3}} = 2\sin\frac{2\pi}{3} + \frac{2\pi}{3} \approx 3{.}8$$

$$f\!\left(\frac{8\pi}{3}\right) = \int_0^{\frac{8\pi}{3}} \left(\cos\frac{t}{2} + \frac{1}{2}\right)dt = \left[2\sin\frac{t}{2} + \frac{t}{2}\right]_0^{\frac{8\pi}{3}} = 2\sin\frac{4\pi}{3} + \frac{4\pi}{3} \approx 5{.}2$$

$$f(9) = \int_0^{9} \left(\cos\frac{t}{2} + \frac{1}{2}\right)dt = \left[2\sin\frac{t}{2} + \frac{t}{2}\right]_0^{9} = 2\sin\frac{9}{2} + \frac{9}{2} \approx 6{.}2$$

La funzione $f(x)$, calcolando l'integrale, ha equazione

$$f(x) = 2\sin\frac{x}{2} + \frac{x}{2}.$$

### Punto 3)

Il valor medio di $f'(x)$ nell'intervallo $[0,\, 2\pi]$ si ottiene calcolando il seguente integrale:

$$\frac{1}{2\pi}\int_0^{2\pi} \left(\cos\frac{t}{2} + \frac{1}{2}\right)dt = \frac{1}{2\pi}\left[2\sin\frac{t}{2} + \frac{t}{2}\right]_0^{2\pi} = \frac{1}{2\pi}\left(2\sin\pi + \pi\right) = \frac{1}{2\pi}\cdot\pi = \frac{1}{2}.$$

### Punto 4)

Il volume richiesto si ottiene calcolando l'integrale seguente:

$$V = W = \pi\int_0^{\frac{\pi}{4}} \left(\cos\frac{x}{2} + \frac{1}{2}\right)^2 dx = \pi\left[\frac{3x}{4} + \frac{\sin x}{4} - \frac{\cos x}{12}\right]_0^{\frac{\pi}{4}}$$

*(sviluppo del calcolo — vedi PDF per i passaggi intermedi)*

---
*Con la collaborazione di Angela Santamaria e Stefano Scoleri*
