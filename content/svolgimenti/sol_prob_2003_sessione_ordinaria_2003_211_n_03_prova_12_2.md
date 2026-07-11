

**Problema:** [[Problemi/prob_2003_sessione_ordinaria_2003_211_n_03_prova_12_2|2003 Ordinaria — Prova (Ordinamento) — Problema 2]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

È assegnata la funzione

$$ f(x) = \frac{2x+1}{x^2 + m + |m|}, $$

dove $m$ è un parametro reale.

## a) Dominio di derivabilità

Il denominatore contiene $m + |m|$, quantità il cui valore dipende dal segno di $m$:

$$ m + |m| = \begin{cases} 2m & \text{se } m > 0 \\ 0 & \text{se } m \le 0 \end{cases} $$

- **Se $m > 0$:** la funzione diventa $f(x) = \dfrac{2x+1}{x^2 + 2m}$. Poiché $x^2 + 2m > 0$ per ogni $x \in \mathbb{R}$, $f$ è rapporto di polinomi con denominatore mai nullo, quindi è definita e derivabile su tutto $\mathbb{R}$.
- **Se $m \le 0$:** la funzione diventa $f(x) = \dfrac{2x+1}{x^2}$, definita e derivabile in $\mathbb{R} \setminus \{0\}$.

In sintesi il dominio di derivabilità è $\mathbb{R}$ per $m>0$ e $\mathbb{R}\setminus\{0\}$ per $m\le 0$.

## b) Valore di $m$ per cui $f'(1)=0$

**Caso $m \le 0$**, con $f(x) = \dfrac{2x+1}{x^2}$:

$$ f'(x) = \frac{2x^2 - (2x+1)\cdot 2x}{x^4} = \frac{-2x^2 - 2x}{x^4} = \frac{-2(x+1)}{x^3}, $$

da cui $f'(1) = -4 \neq 0$: nessun valore ammissibile.

**Caso $m > 0$**, con $f(x) = \dfrac{2x+1}{x^2 + 2m}$:

$$ f'(x) = \frac{2(x^2+2m) - (2x+1)\cdot 2x}{(x^2+2m)^2} = \frac{-2x^2 - 2x + 4m}{(x^2+2m)^2}. $$

Imponendo $f'(1)=0$:

$$ \frac{-2 - 2 + 4m}{(1+2m)^2} = \frac{4m-4}{(1+2m)^2} = 0 \;\Rightarrow\; m = 1. $$

Il valore cercato è $m = 1$.

## c) Studio di $f(x) = \dfrac{2x+1}{x^2+2}$ e grafico

Con $m=1$ il denominatore è $x^2 + 2m = x^2 + 2$, quindi

$$ f(x) = \frac{2x+1}{x^2+2}. $$

**Dominio.** $x^2+2>0$ sempre: $f$ è definita su tutto $\mathbb{R}$.

**Intersezioni con gli assi.** Con l'asse $x$: $2x+1=0 \Rightarrow x=-\tfrac12$, punto $A\left(-\tfrac12,\,0\right)$. Con l'asse $y$: $f(0)=\tfrac12$, punto $B\left(0,\,\tfrac12\right)$.

**Comportamento all'infinito.**

$$ \lim_{x\to -\infty} f(x) = 0, \qquad \lim_{x\to +\infty} f(x) = 0, $$

quindi la retta $y=0$ è asintoto orizzontale (a sinistra la funzione tende a $0$ per valori negativi, a destra per valori positivi).

**Derivata prima.**

$$ f'(x) = \frac{2(x^2+2) - (2x+1)\cdot 2x}{(x^2+2)^2} = \frac{-2x^2 - 2x + 4}{(x^2+2)^2} = \frac{-2(x+2)(x-1)}{(x^2+2)^2}. $$

$f'(x)=0$ per $x=-2$ e $x=1$. Poiché $f'>0$ in $(-2,1)$ e $f'<0$ all'esterno:

- in $x=-2$ un **minimo**: $f(-2)=\dfrac{-3}{6}=-\tfrac12$, punto $m\left(-2,\,-\tfrac12\right)$;
- in $x=1$ un **massimo**: $f(1)=\dfrac{3}{3}=1$, punto $M(1,\,1)$.

**Derivata seconda e flessi.**

$$ f''(x) = \frac{2\,(2x^3 + 3x^2 - 12x - 2)}{(x^2+2)^3}. $$

Il segno dipende dal numeratore $g(x)=2x^3+3x^2-12x-2$. L'equazione $g(x)=0$ non ammette radici razionali (la regola di Ruffini con i divisori di $2$ non dà alcuna radice), ma trattandosi di un polinomio di terzo grado ha **al più** tre radici reali. D'altra parte l'andamento del grafico (che parte da $0$, scende al minimo $-\tfrac12$, risale al massimo $1$ e ritorna a $0$) impone almeno tre cambi di concavità; poiché non possono essere più di tre, i **flessi sono esattamente tre**.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="454.072" height="215.256" viewBox="-72 -72 340.554 161.442"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 33.318h327.373"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M253.423 30.918c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="91.817" y="33.318" stroke="none" font-family="cmmi10" font-size="10" transform="translate(167.42 2.153)">x</text><path fill="none" d="M91.817 88.8V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M89.417-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="91.817" y="33.318" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -97.949)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-72.07 33.318h327.773"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-61.827 54.73 2.21.253 2.21.255 2.21.26 2.211.267 2.21.272 2.211.278 2.21.283 2.21.289 2.211.296 2.21.302 2.211.308 2.21.315 2.21.322 2.211.327 2.21.336 2.211.342 2.21.347 2.21.356 2.211.362 2.21.37 2.211.376 2.21.383 2.21.39 2.211.397 2.21.402 2.211.408 2.21.415 2.21.417 2.211.424 2.21.426 2.211.428 2.21.43 2.21.429 2.211.429 2.21.422 2.211.417 2.21.41 2.21.393 2.211.377 2.21.357 2.211.33 2.21.297 2.21.255 2.211.204 2.21.146 2.21.069 2.211-.015 2.21-.12 2.211-.241 2.21-.382 2.21-.552 2.211-.746 2.21-.972 2.211-1.23 2.21-1.528 2.21-1.863 2.211-2.238 2.21-2.653 2.211-3.102 2.21-3.587 2.21-4.09 2.211-4.605 2.21-5.106 2.211-5.573 2.21-5.993 2.21-6.317 2.211-6.547 2.21-6.643L90.69-.38l2.21-6.383 2.21-6.037 2.211-5.578 2.21-5.008 2.211-4.365 2.21-3.702 2.21-3.024 2.211-2.356 2.21-1.744 2.211-1.182 2.21-.667 2.21-.308 2.211.216 2.21.454 2.21.708 2.211.914 2.21 1.078 2.211 1.195 2.21 1.29 2.21 1.352 2.211 1.392 2.21 1.417 2.211 1.42 2.21 1.422 2.21 1.408 2.211 1.387 2.21 1.362 2.211 1.333 2.21 1.3 2.21 1.266 2.211 1.23 2.21 1.193 2.211 1.157 2.21 1.118 2.21 1.083 2.211 1.047 2.21 1.012 2.211.977 2.21.946 2.21.913 2.211.88 2.21.853 2.211.823 2.21.796 2.21.767 2.211.743 2.21.718 2.211.694 2.21.67 2.21.651 2.211.629 2.21.61 2.211.589 2.21.57 2.21.554 2.211.537 2.21.52 2.21.504 2.211.49 2.21.475 2.211.462 2.21.448 2.21.435 2.211.422 2.21.412 2.211.4 2.21.389 2.21.38 2.211.367 2.21.359"/><path stroke="none" d="M118.576-40.66c0-1.838-.516-3.329-1.152-3.329-.637 0-1.152 1.49-1.152 3.33 0 1.838.515 3.328 1.152 3.328s1.152-1.49 1.152-3.329m-1.152 0"/><g stroke="none" font-size="10"><text x="91.817" y="33.318" font-family="cmmi10" transform="translate(29.14 -80.01)">M</text><text x="104.275" y="33.318" font-family="cmr10" transform="translate(29.14 -80.01)">(</text><text x="108.164" y="33.318" font-family="cmr10" transform="translate(29.14 -80.01)">1</text><text x="113.164" y="33.318" font-family="cmmi10" transform="translate(29.14 -80.01)">;</text><text x="119.275" y="33.318" font-family="cmr10" transform="translate(29.14 -80.01)">1</text><text x="124.275" y="33.318" font-family="cmr10" transform="translate(29.14 -80.01)">)</text></g><path stroke="none" d="M41.754 70.306c0-1.838-.516-3.329-1.152-3.329s-1.152 1.49-1.152 3.33c0 1.838.516 3.328 1.152 3.328s1.152-1.49 1.152-3.329m-1.152 0"/><g stroke="none"><text x="91.817" y="33.318" font-family="cmmi10" font-size="10" transform="translate(-77.548 49.022)">m</text><text x="102.263" y="25.217" font-family="cmex10" font-size="10" transform="translate(-77.548 49.022)">¡</text><text x="106.847" y="33.318" font-family="cmsy10" font-size="10" transform="translate(-77.548 49.022)">¡</text><text x="114.624" y="33.318" font-family="cmr10" font-size="10" transform="translate(-77.548 49.022)">2</text><text x="119.624" y="33.318" font-family="cmmi10" font-size="10" transform="translate(-77.548 49.022)">;</text><text x="125.735" y="33.318" font-family="cmsy10" font-size="10" transform="translate(-77.548 49.022)">¡</text><text x="134.713" y="29.38" font-family="cmr7" font-size="7" transform="translate(-77.548 49.022)">1</text><path d="M57.165 79.64h3.986v.4h-3.986z"/><text x="134.713" y="36.766" font-family="cmr7" font-size="7" transform="translate(-77.548 49.022)">2</text><text x="139.899" y="25.217" font-family="cmex10" font-size="10" transform="translate(-77.548 49.022)">¢</text></g><path stroke="none" d="M80.165 33.318c0-1.839-.516-3.33-1.152-3.33-.637 0-1.152 1.491-1.152 3.33s.515 3.328 1.152 3.328 1.152-1.49 1.152-3.328m-1.152 0"/><text x="91.817" y="33.318" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-23.837 10.366)">A</text><path stroke="none" d="M92.969-3.671C92.969-5.51 92.453-7 91.817-7c-.637 0-1.153 1.49-1.153 3.329 0 1.838.516 3.329 1.153 3.329.636 0 1.152-1.49 1.152-3.33m-1.152 0"/><text x="91.817" y="33.318" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -40.522)">B</text></g></svg>
</figure>

## d) Area della regione delimitata da $\gamma$, dall'asse $x$ e da $x=1$

La curva incontra l'asse $x$ in $A\left(-\tfrac12,0\right)$ ed è positiva per $x>-\tfrac12$; la regione finita è quindi compresa tra $x=-\tfrac12$ e $x=1$, con la curva al di sopra dell'asse:

$$ \mathcal{A} = \int_{-\frac12}^{1} \frac{2x+1}{x^2+2}\,dx = \int_{-\frac12}^{1} \frac{2x}{x^2+2}\,dx + \int_{-\frac12}^{1} \frac{1}{x^2+2}\,dx. $$

Il primo integrale è immediato; nel secondo si usa $\displaystyle\int \frac{dx}{x^2+2} = \frac{1}{\sqrt{2}}\arctan\frac{x}{\sqrt{2}}$. Dunque

$$ \mathcal{A} = \left[\, \ln(x^2+2) + \frac{1}{\sqrt{2}}\arctan\frac{x}{\sqrt{2}} \,\right]_{-\frac12}^{1}. $$

Calcolando i valori agli estremi ($\ln 3 - \ln\tfrac94 = \ln\tfrac43$):

$$ \mathcal{A} = \ln\frac{4}{3} + \frac{1}{\sqrt{2}}\left( \arctan\frac{1}{\sqrt{2}} + \arctan\frac{1}{2\sqrt{2}} \right) \approx 0{,}9632. $$

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
