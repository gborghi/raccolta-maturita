

**Problema:** [[Problemi/prob_2005_scuole_italiane_allestero_americhe_2005_sessione_o_problema2_23_1|2005 SE Americhe Ord — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_o_problema2_23|2005 SE Americhe Ord — Problema 2]]

Nel piano cartesiano $(Oxy)$ sono assegnate le curve di equazione $y = x^4 + ax^2 + b$, con $a,\,b$ parametri reali.

## a)

Si cercano le condizioni su $a$ e $b$ affinché la curva sia contenuta nel semipiano $y \ge 0$, cioè affinché
$$x^4 + ax^2 + b \ge 0 \quad \text{per ogni } x \in \mathbb{R}.$$
Ponendo $t = x^2 \ge 0$, la condizione diventa $g(t) = t^2 + at + b \ge 0$ per ogni $t \ge 0$. La parabola $g(t)$ ha concavità verso l'alto e vertice in $t^\ast = -\dfrac{a}{2}$:

- se $a \ge 0$ il vertice cade in $t^\ast \le 0$, quindi su $t \ge 0$ la funzione è crescente e il minimo è $g(0) = b$: basta $b \ge 0$;
- se $a < 0$ il vertice cade in $t^\ast > 0$ e il minimo vale $g(t^\ast) = b - \dfrac{a^2}{4}$: occorre $a^2 - 4b \le 0$.

In sintesi, la curva sta nel semipiano $y \ge 0$ se e solo se
$$\big(a \ge 0 \ \text{e}\ b \ge 0\big) \quad \text{oppure} \quad \big(a < 0 \ \text{e}\ a^2 - 4b \le 0\big).$$

## b)

Ci si chiede se esistano valori di $a$ e $b$ per cui la curva sia contenuta nel semipiano $y < 0$, cioè $x^4 + ax^2 + b < 0$ per ogni $x$. Con la stessa sostituzione $x^2 = t$ dovrebbe essere $t^2 + at + b < 0$ per ogni $t$. Ma il coefficiente di $t^2$ è positivo, quindi la parabola ha concavità verso l'alto e non può mai stare tutta sotto l'asse delle ascisse. Pertanto
$$\text{la curva } y = x^4 + ax^2 + b \text{ non può mai essere situata nel semipiano } y < 0.$$

## c)

Si indica con $K$ la curva della famiglia che ha un minimo relativo uguale a $0$ e un massimo relativo uguale a $1$. La funzione $f(x) = x^4 + ax^2 + b$ è razionale intera, quindi continua e derivabile ovunque.
$$f'(x) = 4x^3 + 2ax = 2x\,(2x^2 + a) = 0 \ \Rightarrow\ x = 0 \ \text{ oppure } \ x = \pm\sqrt{-\tfrac{a}{2}} \quad (a < 0).$$
La derivata seconda è $f''(x) = 12x^2 + 2a$.

- In $x = 0$: $f''(0) = 2a < 0$ (essendo $a < 0$), quindi $x = 0$ è punto di **massimo** relativo. Imponendo il valore $1$: $f(0) = b = 1$.
- In $x = \pm\sqrt{-\tfrac{a}{2}}$: $f'' = 12\!\left(-\tfrac{a}{2}\right) + 2a = -4a > 0$, quindi sono punti di **minimo** relativo. Il valore in tali punti è
$$f\!\left(\pm\sqrt{-\tfrac{a}{2}}\right) = \frac{a^2}{4} - \frac{a^2}{2} + b = b - \frac{a^2}{4}.$$

Imponendo che questo minimo sia $0$: $\ b - \dfrac{a^2}{4} = 0 \Rightarrow a^2 = 4b = 4 \Rightarrow a = \pm 2$. Poiché deve essere $a < 0$, si ottiene
$$a = -2, \qquad b = 1.$$

## d)

Con $a = -2$ e $b = 1$ la curva $K$ ha equazione
$$y = f(x) = x^4 - 2x^2 + 1 = (x^2 - 1)^2 = (x-1)^2(x+1)^2.$$
La forma $(x^2-1)^2 \ge 0$ conferma che $K$ è tutta nel semipiano $y \ge 0$ ed è tangente all'asse $x$ nei punti $x = 1$ e $x = -1$ (minimi relativi, e anche assoluti). Come visto, in $x = 0$ vi è un massimo relativo di valore $1$. La funzione è pari e
$$\lim_{x \to +\infty} f(x) = \lim_{x \to -\infty} f(x) = +\infty.$$
Per i flessi si studia il segno di $f''$:
$$f''(x) = 12x^2 - 4 \ge 0 \iff 3x^2 \ge 1 \iff x \le -\frac{\sqrt{3}}{3} \ \text{ oppure } \ x \ge \frac{\sqrt{3}}{3}.$$
Vi sono quindi due flessi in $x = \pm\dfrac{\sqrt{3}}{3}$, con ordinata
$$f\!\left(\pm\frac{\sqrt{3}}{3}\right) = \frac{1}{9} - \frac{2}{3} + 1 = \frac{4}{9}.$$
Il grafico di $K$ è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="267.425" height="154.328" viewBox="-72 -72 200.569 115.746"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 29.05h187.387"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M113.437 26.65c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="21.824" y="29.05" stroke="none" font-family="cmmi10" font-size="10" transform="translate(97.427 2.153)">x</text><path fill="none" d="M21.824 43.276v-102.03"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M19.424-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="21.824" y="29.05" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -93.681)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.69-40.116 1.855 11.224 1.854 10.01 1.853 8.86 1.854 7.779 1.854 6.756 1.854 5.798 1.854 4.899 1.854 4.058 1.853 3.274 1.854 2.546 1.854 1.872 1.854 1.248 1.854.678 1.854.156 1.853-.32 1.854-.747 1.854-1.13 1.854-1.472 1.854-1.77 1.854-2.03 1.854-2.25 1.853-2.435 1.854-2.581 1.854-2.697 1.854-2.778 1.854-2.83 1.854-2.853L-8.782.303l1.854-2.815 1.854-2.757 1.854-2.678 1.854-2.578 1.854-2.456 1.853-2.317 1.854-2.16 1.854-1.987 1.854-1.805 1.854-1.604 1.854-1.396 1.853-1.176 1.854-.953 1.854-.72 1.854-.482 1.854-.244 1.854-.003 1.853.24 1.854.479 1.854.715 1.854.948 1.854 1.172 1.854 1.394 1.854 1.599 1.853 1.8 1.854 1.986 1.854 2.156 1.854 2.314 1.854 2.454 1.854 2.575 1.853 2.678 1.854 2.756L52.395.251l1.854 2.847 1.854 2.852 1.854 2.83 1.853 2.78 1.854 2.698 1.854 2.585 1.854 2.436 1.854 2.255 1.854 2.033 1.853 1.776 1.854 1.478 1.854 1.137 1.854.755 1.854.327 1.854-.147 1.853-.667 1.854-1.239 1.854-1.859 1.854-2.533 1.854-3.26 1.854-4.044 1.854-4.883 1.853-5.78 1.854-6.739 1.854-7.758 1.854-8.842 1.854-9.988 1.854-11.201"/><path stroke="none" d="M23.246000000000002-27.856a1.422 1.422 0 1 0-2.845 0 1.422 1.422 0 0 0 2.845 0M80.15100000000001 29.05a1.422 1.422 0 1 0-2.844 0 1.422 1.422 0 0 0 2.844 0M-33.660000000000004 29.05a1.422 1.422 0 1 0-2.844 0 1.422 1.422 0 0 0 2.844 0M56.08 3.784a1.422 1.422 0 1 0-2.844 0 1.422 1.422 0 0 0 2.844 0M-9.588 3.784a1.422 1.422 0 1 0-2.845 0 1.422 1.422 0 0 0 2.845 0m-1.423 0"/><text x="21.824" y="29.05" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.438 9.977)">1</text><g stroke="none" font-size="10"><text x="21.824" y="29.05" font-family="cmsy10" transform="translate(-73.216 9.977)">¡</text><text x="29.601" y="29.05" font-family="cmr10" transform="translate(-73.216 9.977)">1</text></g><text x="21.824" y="29.05" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -60.438)">1</text></g></svg>
</figure>

## e)

Si calcolano le aree delle regioni in cui $K$ divide il cerchio di centro $O$ e raggio $1$, di equazione $x^2 + y^2 = 1$. La curva $K$ interseca la circonferenza nei punti $(0,1)$, $(1,0)$ e $(-1,0)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="237.076" height="237.789" viewBox="-72 -72 177.807 178.341"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 23.359H92.556"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M90.676 20.959c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="10.443" y="23.359" stroke="none" font-family="cmmi10" font-size="10" transform="translate(86.046 2.153)">x</text><path fill="none" d="M10.443 105.871V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M8.043-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="10.443" y="23.359" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -87.99)">y</text><path fill="none" stroke="gray" stroke-width=".8" d="M67.348 23.359c0-31.429-25.477-56.906-56.905-56.906S-46.463-8.07-46.463 23.36s25.477 56.905 56.906 56.905S67.348 54.787 67.348 23.36Zm-56.905 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-46.463 23.359 1.278-.112 1.279-.327 1.278-.526 1.278-.711 1.278-.881 1.278-1.039 1.278-1.18 1.278-1.312 1.279-1.428 1.278-1.533 1.278-1.625 1.278-1.705 1.278-1.776 1.278-1.832 1.279-1.879 1.278-1.916 1.278-1.943 1.278-1.96 1.278-1.967 1.278-1.965 1.278-1.955 1.279-1.937 1.278-1.909 1.278-1.876 1.278-1.833 1.278-1.786 1.278-1.73 1.278-1.668 1.279-1.603 1.278-1.528 1.278-1.45 1.278-1.367 1.278-1.28 1.278-1.188 1.279-1.093 1.278-.992 1.278-.892 1.278-.786 1.278-.678 1.278-.569 1.278-.459 1.279-.345 1.278-.233 1.278-.116 1.278-.004 1.278.113 1.278.228 1.278.34 1.279.453 1.278.564 1.278.674 1.278.782 1.278.886 1.278.99 1.279 1.088 1.278 1.184 1.278 1.276 1.278 1.363 1.278 1.446 1.278 1.526 1.278 1.598 1.279 1.666 1.278 1.728 1.278 1.783 1.278 1.832 1.278 1.873 1.278 1.908 1.278 1.936 1.279 1.954 1.278 1.966L44.286-.41l1.278 1.96 1.278 1.944L48.12 5.41 49.4 7.29l1.278 1.835 1.278 1.778 1.278 1.708 1.278 1.63 1.278 1.536 1.278 1.433 1.279 1.316 1.278 1.187 1.278 1.046 1.278.888 1.278.72 1.278.533 1.278.336 1.279.122"/><path stroke="none" d="M11.581 23.359a1.138 1.138 0 1 0-2.277 0 1.138 1.138 0 0 0 2.277 0m-1.138 0"/><text x="10.443" y="23.359" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><text x="10.443" y="23.359" stroke="none" font-family="cmmi10" font-size="10" transform="translate(30.79 -37.555)">S</text></g></svg>
</figure>

Le due regioni comprese fra l'arco di circonferenza e la curva (una nel primo quadrante, l'altra nel secondo) sono simmetriche rispetto all'asse $y$, quindi hanno la stessa area. Quella nel primo quadrante si ottiene sottraendo, a un quarto del cerchio, l'area della regione $S$ del primo quadrante compresa fra il grafico di $K$ e gli assi cartesiani:
$$A(S) = \int_0^1 \left(x^4 - 2x^2 + 1\right)\,dx = \left[\frac{x^5}{5} - \frac{2x^3}{3} + x\right]_0^1 = \frac{1}{5} - \frac{2}{3} + 1 = \frac{8}{15}\ \text{u}^2.$$
Il quarto di cerchio ha area $\dfrac{\pi \cdot 1^2}{4} = \dfrac{\pi}{4}$, quindi ciascuna delle due regioni simmetriche ha area
$$\frac{\pi}{4} - \frac{8}{15} = \left(\frac{\pi}{4} - \frac{8}{15}\right)\text{u}^2 \cong 0{,}25\ \text{u}^2.$$
La regione centrale del cerchio, delimitata dall'arco inferiore e dalla curva $K$, ha invece area
$$\pi - 2\left(\frac{\pi}{4} - \frac{8}{15}\right) = \frac{\pi}{2} + \frac{16}{15}\ \text{u}^2 \cong 2{,}64\ \text{u}^2.$$

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
