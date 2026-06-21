---
tipo: soluzione
prova_stem: 2010_ordinamento_2010_problema1_7
pdf: Prova_Maturita_2010.pdf
source: text
title: Soluzioni — 2010_ordinamento_2010_problema1_7
---

# Soluzioni — 2010_ordinamento_2010_problema1_7

## Problema 1

### Punto 1

Sia $Q$ un punto sul lato $AB$ del quadrato di lato 1, con $AQ = x$; sia $E$ il punto sul lato $AD$ con $AE = y$. Il cerchio $\lambda$ ha come raggio $QE = CQ = y = f(x)$.

Dalla geometria del problema si ricava:

$$PQ = PE + EQ = x + y, \quad PB = 1 - x, \quad BQ = 1 - y$$

Per il teorema di Pitagora applicato al triangolo rettangolo $PBQ$:

$$BQ^2 = PB^2 + PQ^2$$

$$\left(1 - y\right)^2 = \left(1 - x\right)^2 + \left(x + y\right)^2$$

Sviluppando i quadrati:

$$1 - 2y + y^2 = 1 - 2x + x^2 + x^2 + 2xy + y^2$$

Semplificando $y^2$ e $1$ da entrambi i membri:

$$-2y = -2x + 2x^2 + 2xy$$

$$-2y(1 + x) = -2x(1 - x)$$

$$y = \frac{x(1-x)}{1+x} \cdot \frac{1}{x} \quad \Longrightarrow \quad y = \frac{1-x}{1+x}$$

La funzione cercata è quindi:

$$y = f(x) = \frac{1-x}{1+x}$$

### Punto 2

La funzione

$$y = f(x) = \frac{1-x}{1+x}$$

è una funzione omografica di centro $(-1;\,-1)$ e asintoti $x = -1$ e $y = -1$; passa per i punti $(0;\,1)$ e $(1;\,0)$.

*(grafico — vedi PDF p. 7)*

La funzione $f(x)$ è invertibile perché realizza una corrispondenza biunivoca tra dominio e codominio.

Il grafico della funzione inversa è il simmetrico di quello di $f$ rispetto alla bisettrice del primo e terzo quadrante: essendo $f$ simmetrica rispetto a tale retta, il grafico della sua inversa coincide con il grafico di $f$.

### Punto 3

Si considera la funzione

$$g(x) = \left|f(x)\right| = \left|\frac{1-x}{1+x}\right|$$

Il suo grafico si ottiene da quello di $f$ ribaltando rispetto all'asse $x$ la parte negativa.

*(grafico — vedi PDF p. 7)*

La tangente in $R$ ha equazione $y = -2x + 1$.

$S$ è un punto angoloso; le semitangenti in $S$ hanno equazione:

- **semitangente destra:**

$$y = \frac{1}{2}x - \frac{1}{2}$$

- **semitangente sinistra:**

$$y = -\frac{1}{2}x + \frac{1}{2}$$

### Punto 4

L'area richiesta si ottiene calcolando il seguente integrale:

$$\int_0^1 g(x)\,dx = \int_0^1 \frac{1-x}{1+x}\,dx = \int_0^1 \left(-1 + \frac{2}{1+x}\right)dx$$

$$= \left[-x + 2\ln(1+x)\right]_0^1$$

$$= \left(-1 + 2\ln 2\right) - \left(0 + 0\right) = 2\ln 2 - 1$$
