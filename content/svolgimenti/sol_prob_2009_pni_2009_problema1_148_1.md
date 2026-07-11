

**Problema:** [[Problemi/prob_2009_pni_2009_problema1_148_1|2009 PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_pni_2009_problema1_148|2009 PNI — Problema 1]]

Per ogni intero $n \ge 1$ si considera la funzione

$$f_n(x) = \left(1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!}\right)e^{-x}.$$

## a)

Poniamo $S_n(x) = \sum_{k=0}^{n} \dfrac{x^k}{k!}$, così che $f_n(x) = S_n(x)\,e^{-x}$. Derivando come prodotto:

$$f_n'(x) = S_n'(x)\,e^{-x} + S_n(x)\cdot(-e^{-x}) = \bigl[S_n'(x) - S_n(x)\bigr]e^{-x}.$$

Ora

$$S_n'(x) = \sum_{k=1}^{n} \frac{k\,x^{k-1}}{k!} = \sum_{k=1}^{n} \frac{x^{k-1}}{(k-1)!} = S_{n-1}(x),$$

quindi $S_n'(x) - S_n(x) = S_{n-1}(x) - S_n(x) = -\dfrac{x^n}{n!}$. Si conclude

$$f_n'(x) = -\frac{x^n}{n!}\,e^{-x}.$$

## b)

Poiché $e^{-x} > 0$ per ogni $x$ e $\dfrac{1}{n!} > 0$, il segno di $f_n'(x)$ è quello di $-x^n$.

- **$n$ pari:** $x^n \ge 0$ per ogni $x$, dunque $f_n'(x) \le 0$ sempre (e $f_n'(x) = 0$ solo in $x = 0$). La funzione è **decrescente** su tutto $\mathbb{R}$: non ha né massimi né minimi.
- **$n$ dispari:** $-x^n > 0$ per $x < 0$ e $-x^n < 0$ per $x > 0$; quindi $f_n$ cresce per $x < 0$, decresce per $x > 0$ e presenta un **massimo assoluto in $x = 0$**.

Per $n$ dispari il valore del massimo è $f_n(0) = S_n(0)\cdot e^{0} = 1$, perciò

$$f_n(x) \le f_n(0) = 1 \qquad \text{per ogni } x \in \mathbb{R}.$$

## c)

Per $n = 2$ si ottiene

$$g(x) = \left(1 + x + \frac{x^2}{2}\right)e^{-x}.$$

- **Dominio:** tutto $\mathbb{R}$. La funzione è sempre positiva, poiché
$$1 + x + \frac{x^2}{2} = \frac{(x+1)^2 + 1}{2} > 0 \quad\text{e}\quad e^{-x} > 0.$$
Non interseca l'asse $x$; interseca l'asse $y$ in $g(0) = 1$.
- **Limiti (asintoti):**
$$\lim_{x \to +\infty} g(x) = 0^+, \qquad \lim_{x \to -\infty} g(x) = +\infty,$$
quindi la retta $y = 0$ è asintoto orizzontale a $+\infty$.
- **Monotonia:** dal punto a) con $n = 2$,
$$g'(x) = -\frac{x^2}{2}\,e^{-x} \le 0 \quad \text{per ogni } x,$$
dunque $g$ è sempre **decrescente**.
- **Concavità:** derivando $g'(x) = -\dfrac{x^2}{2}e^{-x}$,
$$g''(x) = -\frac{1}{2}\bigl(2x - x^2\bigr)e^{-x} = \frac{x(x-2)}{2}\,e^{-x}.$$
Quindi $g'' > 0$ (concavità verso l'alto) per $x < 0$ oppure $x > 2$, e $g'' < 0$ per $0 < x < 2$. La funzione ha due **flessi**: in $x = 0$, con $g(0) = 1$, e in $x = 2$, con $g(2) = 5e^{-2} \approx 0{,}68$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="313.707" height="197.807" viewBox="-72 -72 235.281 148.355"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 61.912h222.1"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M148.15 59.512c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-6.629" y="61.912" stroke="none" font-family="cmmi10" font-size="10" transform="translate(160.591 2.153)">x</text><path fill="none" d="M-6.63 71.728V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-9.029-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-6.629" y="61.912" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -126.543)">y</text><path fill="none" d="M-39.35 59.948v3.927"/><g stroke="none" font-size="7"><text x="-6.629" y="61.912" font-family="cmsy7" transform="translate(-37.839 10.007)">¡</text><text x="-.379" y="61.912" font-family="cmr7" transform="translate(-37.839 10.007)">1</text></g><path fill="none" d="M26.091 59.948v3.927"/><text x="-6.629" y="61.912" stroke="none" font-family="cmr7" font-size="7" transform="translate(30.727 10.007)">1</text><path fill="none" d="M58.812 59.948v3.927"/><text x="-6.629" y="61.912" stroke="none" font-family="cmr7" font-size="7" transform="translate(63.448 10.007)">2</text><path fill="none" d="M91.532 59.948v3.927"/><text x="-6.629" y="61.912" stroke="none" font-family="cmr7" font-size="7" transform="translate(96.168 10.007)">3</text><path fill="none" d="M124.253 59.948v3.927"/><text x="-6.629" y="61.912" stroke="none" font-family="cmr7" font-size="7" transform="translate(128.889 10.007)">4</text><path fill="none" d="M-4.666 29.191h-3.926"/><text x="-6.629" y="61.912" stroke="none" font-family="cmr7" font-size="7" transform="translate(-9.482 -30.465)">1</text><path fill="none" d="M-4.666-3.53h-3.926"/><text x="-6.629" y="61.912" stroke="none" font-family="cmr7" font-size="7" transform="translate(-9.482 -63.185)">2</text><path fill="none" d="M-4.666-36.25h-3.926"/><text x="-6.629" y="61.912" stroke="none" font-family="cmr7" font-size="7" transform="translate(-9.482 -95.906)">3</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-58.982-48.288 2.94 16.856 2.94 13.68 2.94 11.021 2.939 8.8 2.94 6.96 2.94 5.443 2.94 4.201 2.939 3.19 2.94 2.38 2.94 1.735 2.939 1.225 2.94.838 2.94.541 2.94.327 2.939.178 2.94.08 2.94.022 2.94-.003 2.939.004 2.94.03 2.94.07 2.939.115 2.94.174 2.94.23 2.94.288 2.939.356 2.94.406 2.94.473 2.94.52 2.939.564 2.94.607 2.94.654 2.94.684 2.939.72 2.94.73 2.94.766 2.939.765 2.94.796 2.94.791 2.94.796 2.939.796 2.94.793 2.94.774 2.94.792 2.939.754 2.94.765 2.94.737 2.939.738 2.94.71 2.94.69 2.94.684 2.939.638 2.94.638 2.94.601 2.94.617 2.939.554 2.94.56 2.94.515 2.94.496 2.939.522 2.94.449 2.94.459 2.939.42 2.94.415 2.94.371 2.94.4 2.939.34 2.94.316 2.94.353"/><path stroke="none" d="M-4.79 29.191a1.84 1.84 0 1 0-3.68 0 1.84 1.84 0 0 0 3.68 0m-1.84 0"/><g stroke="none" font-size="7"><text x="-6.629" y="61.912" font-family="cmr7" transform="translate(3.533 -38.003)">(0</text><text x=".482" y="61.912" font-family="cmmi7" transform="translate(3.533 -38.003)">;</text><text x="5.589" y="61.912" font-family="cmr7" transform="translate(3.533 -38.003)">1)</text></g><path stroke="none" d="M60.652 39.76a1.84 1.84 0 1 0-3.68 0 1.84 1.84 0 0 0 3.68 0m-1.84 0"/><g stroke="none"><text x="-6.629" y="61.912" font-family="cmr7" font-size="7" transform="translate(68.974 -27.435)">(2</text><text x=".482" y="61.912" font-family="cmmi7" font-size="7" transform="translate(68.974 -27.435)">;</text><text x="5.589" y="61.912" font-family="cmr7" font-size="7" transform="translate(68.974 -27.435)">5</text><text x="9.575" y="61.912" font-family="cmmi7" font-size="7" transform="translate(68.974 -27.435)">e</text><text x="13.369" y="58.894" font-family="cmsy5" font-size="5" transform="translate(68.974 -27.435)">¡</text><text x="18.786" y="58.894" font-family="cmr5" font-size="5" transform="translate(68.974 -27.435)">2</text><text x="22.688" y="61.912" font-family="cmr7" font-size="7" transform="translate(68.974 -27.435)">)</text></g></g></svg>
</figure>

## d)

L'integrale $\displaystyle\int_0^2 g(x)\,dx$ rappresenta l'area del trapezoide delimitato dal grafico di $g$ e dall'asse $x$ nell'intervallo $[0,2]$. Una primitiva di $g$ si trova integrando per parti termine a termine:

$$\int e^{-x}\,dx = -e^{-x}, \quad \int x\,e^{-x}\,dx = -(x+1)e^{-x}, \quad \int \frac{x^2}{2}\,e^{-x}\,dx = -\left(\frac{x^2}{2} + x + 1\right)e^{-x}.$$

Sommando:

$$\int \left(1 + x + \frac{x^2}{2}\right)e^{-x}\,dx = -e^{-x}\left(3 + 2x + \frac{x^2}{2}\right) + C.$$

Pertanto

$$\int_0^2 g(x)\,dx = \left[-e^{-x}\left(3 + 2x + \frac{x^2}{2}\right)\right]_0^2 = -e^{-2}(3 + 4 + 2) + 3 = 3 - 9e^{-2} \approx 1{,}78.$$

*Fonte:* [📄 PDF p.148](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
