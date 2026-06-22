---
tipo: soluzione
prova_stem: 2012_ordinamento_2012_problema1_6
pdf: Prova_Maturita_2012.pdf
source: text
title: 2012 Ordinamento — Problema 1 — Svolgimento
---
### Punto 1)

Sono assegnate le funzioni:

$$f(x) = \sqrt[3]{27x^3} = 3|x|, \qquad g(x) = \sin\!\left(\frac{3\pi}{2}x\right)$$

Il periodo $T$ della funzione $g$ è dato da:

$$T = \frac{2\pi}{\dfrac{3\pi}{2}} = \frac{4}{3}$$

Il grafico di $f$ (in rosso) si ottiene dal grafico della funzione di equazione $y = 27x^3$ (cubica con flesso a tangente orizzontale in $O$, dispari, passante per il punto di coordinate $\left(\frac{1}{3};\, 1\right)$) confermando la parte positiva e ribaltando rispetto all'asse $x$ la parte negativa (tratteggiata in figura). Nell'origine non è presente punto angoloso e si tratta di una funzione pari.

*(grafico di f — vedi PDF)*

Il grafico di $g$, funzione sinusoidale di periodo $\frac{4}{3}$, è il seguente:

*(grafico di g — vedi PDF)*

I due grafici nello stesso sistema di riferimento sono indicati nella seguente figura:

*(grafico di f e g sovrapposti — vedi PDF)*

### Punto 2)

La retta $r$, tangente al grafico di $f$ nel punto $\left(\frac{1}{3};\, 1\right)$, ha coefficiente angolare $m = f'\!\left(\frac{1}{3}\right)$; per $x > 0$ l'equazione di $f$ è $y = 27x^3$, quindi:

$$f'(x) = 81x^2$$

da cui $m = f'\!\left(\frac{1}{3}\right) = 9$; $r$ ha quindi equazione $y - 1 = 9\!\left(x - \frac{1}{3}\right)$, cioè:

$$r:\; y = 9x - 2$$

La retta $s$, tangente al grafico di $g$ nel punto $\left(\frac{1}{3};\, 1\right)$, ha coefficiente angolare $m = g'\!\left(\frac{1}{3}\right)$:

$$g'(x) = \frac{3\pi}{2}\cos\!\left(\frac{3\pi}{2}x\right)$$

quindi $m = g'\!\left(\frac{1}{3}\right) = \frac{3\pi}{2}\cos\!\left(\frac{\pi}{2}\right) = 0$. $s$ ha quindi equazione: $y = 1$.

Siccome la $s$ è parallela all'asse delle $x$, la tangente dell'angolo acuto formato dalle due rette è dato dal coefficiente angolare della $r$:

$$\tan\alpha = 9 \implies \alpha = \arctan(9) \cong 83{,}66° \cong 84°$$

### Punto 3)

*(grafico della regione R — vedi PDF)*

Per trovare l'area della regione $R$ si calcola il seguente integrale:

$$\int_0^{1/3}\!\left[g(x) - f(x)\right]dx = \int_0^{1/3}\!\left[\sin\!\left(\frac{3\pi}{2}x\right) - 27x^3\right]dx$$

$$= \left[-\frac{2}{3\pi}\cos\!\left(\frac{3\pi}{2}x\right) - \frac{27x^4}{4}\right]_0^{1/3}$$

$$= \left(-\frac{2}{3\pi}\cos\frac{\pi}{2} - \frac{1}{12}\right) - \left(-\frac{2}{3\pi}\right) = \frac{2}{3\pi} - \frac{1}{12} = \frac{8 - \pi}{12\pi}$$

### Punto 4)

Il volume del solido $S$, ottenuto ruotando la regione $R$ attorno all'asse $x$, si calcola mediante l'integrale:

$$V_S = \pi\int_0^{1/3}\!\left[\left(g(x)\right)^2 - \left(f(x)\right)^2\right]dx = \pi\int_0^{1/3}\!\left[\sin^2\!\left(\frac{3\pi}{2}x\right) - \left(27x^3\right)^2\right]dx$$

> **N.B.** Il volume del solido ottenuto dalla rotazione della regione delimitata dall'asse $x$, dalle rette $x = a$ e $x = b$ e dal grafico di una funzione $f$ è dato da $\pi\displaystyle\int_a^b \left[f(x)\right]^2\,dx$, che equivale alla somma di infiniti cilindretti di raggio $f(x)$ e altezza $dx$: $\pi\left[f(x)\right]^2\,dx$; tale somma va estesa all'intervallo $[a;\,b]$.

Calcoliamo ora il volume del solido $T$, ottenuto ruotando la regione $R$ attorno all'asse $y$. Notiamo che nell'intervallo delle ascisse $\left[0;\,\frac{1}{3}\right]$ la $f$ e la $g$ sono invertibili ed hanno come codominio l'intervallo delle ordinate $[0;\,1]$.

Le funzioni inverse sono:

$$f^{-1}(y) = \frac{1}{3}y^{1/3} \qquad \text{e} \qquad g^{-1}(y) = \frac{2}{3\pi}\arcsin(y)$$

Il volume di $T$ si calcola quindi mediante l'integrale:

$$V_T = \pi\int_0^1\!\left[\left(f^{-1}(y)\right)^2 - \left(g^{-1}(y)\right)^2\right]dy = \pi\int_0^1\!\left[\left(\frac{1}{3}y^{1/3}\right)^2 - \left(\frac{2}{3\pi}\arcsin y\right)^2\right]dy$$

> **N.B.** Il calcolo del volume di $T$ sarebbe più semplice utilizzando il metodo dei "gusci cilindrici", che porta al calcolo del seguente integrale:

$$V_T = 2\pi\int_0^{1/3} x\left[g(x) - f(x)\right]dx = 2\pi\int_0^{1/3} x\left[\sin\!\left(\frac{3\pi}{2}x\right) - 27x^3\right]dx$$

*Con la collaborazione di Angela Santamaria*
