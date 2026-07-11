

**Problema:** [[Problemi/prob_2007_scuole_italiane_allestero_americhe_2007_sessione_o_problema2_22_1|2007 Estero Americhe Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_americhe_2007_sessione_o_problema2_22|2007 Estero Americhe Ordinaria — Problema 2]]

Della parabola $\gamma$, con asse parallelo all'asse $y$ e concavità rivolta verso il basso, si sa che passa per $A(0,2)$ e $B(2,0)$ e che l'area del dominio piano delimitato da $\gamma$ e dai segmenti $OA$ e $OB$ vale $\dfrac{10}{3}$.

## a) Equazione e grafico di $\gamma$

La parabola ha equazione del tipo $y = ax^2 + bx + c$ con $a < 0$.

Il passaggio per $A(0,2)$ dà $c = 2$. Il passaggio per $B(2,0)$ dà $0 = 4a + 2b + 2$, da cui $b = -2a - 1$. L'equazione è dunque

$$y = ax^2 - (2a+1)x + 2.$$

L'area del dominio delimitato da $\gamma$ e dai segmenti $OA$ (sull'asse $y$) e $OB$ (sull'asse $x$) è

$$\int_0^2 \big[ax^2 - (2a+1)x + 2\big]\,dx = \left[\frac{a}{3}x^3 - \frac{2a+1}{2}x^2 + 2x\right]_0^2 = \frac{8a}{3} - 2(2a+1) + 4 = -\frac{4a}{3} + 2.$$

Imponendo che valga $\dfrac{10}{3}$:

$$-\frac{4a}{3} + 2 = \frac{10}{3} \;\Rightarrow\; -4a = 4 \;\Rightarrow\; a = -1.$$

Quindi $b = 1$, $c = 2$ e la parabola ha equazione

$$y = -x^2 + x + 2.$$

Il vertice è $V\left(\dfrac{1}{2};\,\dfrac{9}{4}\right)$; la curva incontra l'asse $y$ in $A(0,2)$ e l'asse $x$ nei punti di ascissa $-1$ e $2$. Il grafico è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="221.901" height="203.419" viewBox="-72 -72 166.426 152.564"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 39.861H81.174"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M79.294 37.461c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-14.027" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.134 2.153)">x</text><path fill="none" d="M-14.027 60.347V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-16.427-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-14.027" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -104.492)">y</text><path fill="#e1e1ff" stroke="none" d="m-14.027-28.425 1.157-1.118 1.158-1.04 1.157-.961 1.157-.883 1.157-.804 1.157-.726 1.157-.647 1.157-.569 1.157-.49 1.157-.413 1.157-.333 1.158-.255 1.157-.177 1.157-.098 1.157-.02 1.157.058 1.157.137 1.157.216 1.157.294 1.157.372 1.158.45 1.157.53 1.157.607 1.157.686 1.157.765 1.157.842 1.157.922 1.157 1 1.157 1.077 1.157 1.157 1.158 1.235L23-25.298l1.157 1.392 1.157 1.47 1.157 1.549 1.157 1.627 1.157 1.705 1.157 1.784 1.157 1.863 1.158 1.94 1.157 2.02 1.157 2.097 1.157 2.176 1.157 2.255 1.157 2.333L39.2 1.324l1.157 2.49 1.157 2.569 1.157 2.646 1.158 2.725 1.157 2.804 1.157 2.881L47.3 20.4l1.157 3.039 1.157 3.117 1.157 3.196 1.157 3.274 1.157 3.352 1.158 3.431.017.052h-68.287Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.12 79.894 1.599-5.84 1.599-5.692 1.599-5.542 1.598-5.391 1.6-5.243 1.598-5.092 1.6-4.942 1.598-4.793 1.599-4.643 1.599-4.494 1.599-4.343 1.599-4.194 1.598-4.044 1.6-3.894 1.598-3.745 1.6-3.594L-32.94.962l1.599-3.295 1.599-3.146 1.599-2.995 1.599-2.846 1.599-2.697 1.598-2.547 1.6-2.396 1.598-2.247 1.6-2.098 1.598-1.947 1.599-1.798 1.599-1.648 1.599-1.498 1.599-1.35 1.599-1.198 1.598-1.049 1.6-.899 1.598-.75 1.6-.6 1.598-.45 1.599-.3 1.599-.15 1.599-.001 1.599.149 1.599.299 1.598.448 1.6.598 1.598.748 1.6.898 1.598 1.047 1.599 1.197 1.599 1.347 1.599 1.497 1.599 1.647 1.599 1.796 1.598 1.945 1.6 2.096 1.598 2.246 1.6 2.395 1.598 2.545 1.599 2.695 1.599 2.844 1.599 2.994 1.599 3.144L39.012.926l1.598 3.443 1.6 3.594 1.598 3.742 1.6 3.893 1.598 4.043 1.599 4.192 1.599 4.342 1.599 4.492 1.599 4.641L55 42.1l1.598 4.941 1.6 5.091 1.598 5.24 1.6 5.39 1.598 5.54 1.599 5.69 1.599 5.84"/><path stroke="none" d="M-12.107-28.425a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-14.027" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 -71.82)">A</text><path stroke="none" d="M56.18 39.861a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-14.027" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 10.366)">B</text><path stroke="none" d="M4.965-36.961a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-14.027" y="39.861" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.605 -80.355)">V</text><path stroke="none" d="M-46.73 39.861a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><g stroke="none"><text x="-14.027" y="39.861" font-family="cmsy10" font-size="10" transform="translate(17.817 34.382)">¡</text><text x="-6.249" y="39.861" font-family="cmmi10" font-size="10" transform="translate(17.817 34.382)">x</text><text x="-.534" y="36.232" font-family="cmr7" font-size="7" transform="translate(17.817 34.382)">2</text><text x="6.175" y="39.861" font-family="cmr10" font-size="10" transform="translate(17.817 34.382)">+</text><text x="16.175" y="39.861" font-family="cmmi10" font-size="10" transform="translate(17.817 34.382)">x</text><text x="24.112" y="39.861" font-family="cmr10" font-size="10" transform="translate(17.817 34.382)">+</text><text x="34.112" y="39.861" font-family="cmr10" font-size="10" transform="translate(17.817 34.382)">2</text></g></g></svg>
</figure>

## b) Coordinate di $C$

La retta $s: y = mx + 2$ interseca $\gamma$ in $A$ e in $C$. Mettendo a sistema:

$$mx + 2 = -x^2 + x + 2 \;\Rightarrow\; x^2 + (m-1)x = 0 \;\Rightarrow\; x = 0 \;\text{ oppure }\; x = 1 - m.$$

L'ascissa $x = 0$ corrisponde ad $A$; per $x = 1 - m$ si ha $y = m(1-m) + 2 = m - m^2 + 2$. Dunque

$$C = \big(1 - m;\; m - m^2 + 2\big).$$

## c) Studio di $f(m) = \overline{AC}^{\,2}$

Calcoliamo $\overline{AC}^{\,2}$:

$$\overline{AC}^{\,2} = (1 - m - 0)^2 + (m - m^2 + 2 - 2)^2 = (1-m)^2 + m^2(1-m)^2 = (1-m)^2(1 + m^2).$$

Perciò

$$f(m) = (1-m)^2(1 + m^2) = m^4 - 2m^3 + 2m^2 - 2m + 1.$$

Si tratta di una funzione razionale intera di quarto grado: è definita, continua e derivabile su tutto $\mathbb{R}$ e non presenta asintoti. Non è né pari né dispari. Per $m \to \pm\infty$ si ha $f(m) \to +\infty$. Interseca l'asse delle ordinate in $y = 1$ e l'asse delle ascisse in $m = 1$; è positiva per ogni $m \neq 1$.

**Derivata prima.**

$$f'(m) = 4m^3 - 6m^2 + 4m - 2 = 2(m-1)(2m^2 - m + 1).$$

Poiché $2m^2 - m + 1 > 0$ per ogni $m$ (discriminante negativo), si ha $f'(m) \ge 0$ se e solo se $m \ge 1$. La funzione è quindi decrescente per $m < 1$ e crescente per $m > 1$: $m = 1$ è punto di minimo relativo (e assoluto), con valore $f(1) = 0$.

**Derivata seconda.**

$$f''(m) = 12m^2 - 12m + 4 = 4(3m^2 - 3m + 1) > 0 \quad \text{per ogni } m,$$

dunque il grafico volge sempre la concavità verso l'alto e non presenta flessi. Il grafico $\lambda$ è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="158.08" height="264.223" viewBox="-72 -72 118.56 198.167"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 112.182H30.244"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M28.364 109.782c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-39.634" y="112.182" stroke="none" font-family="cmmi10" font-size="10" transform="translate(73.811 2.153)">m</text><path fill="none" d="M-39.634 125.697V-55.004"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-42.034-53.124c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><g stroke="none" font-size="10"><text x="-39.634" y="112.182" font-family="cmmi10" transform="translate(-11.265 -173.619)">f</text><text x="-33.662" y="112.182" font-family="cmr10" transform="translate(-11.265 -173.619)">(</text><text x="-29.773" y="112.182" font-family="cmmi10" transform="translate(-11.265 -173.619)">m</text><text x="-20.993" y="112.182" font-family="cmr10" transform="translate(-11.265 -173.619)">)</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.907-17.16.85 8.294.85 7.79.85 7.313.85 6.855.85 6.426.85 6.014.85 5.626.85 5.26.85 4.913.85 4.586.851 4.278.85 3.99.85 3.718.85 3.466.85 3.228.85 3.006.85 2.8.85 2.61.85 2.434.85 2.269.85 2.12.85 1.98.85 1.854.85 1.739.85 1.633.85 1.537.85 1.45.85 1.372.85 1.302.85 1.238.85 1.181.851 1.13.85 1.084.85 1.043.85 1.006.85.972.85.94.85.912.85.884.85.856.85.83.85.803.85.774.85.744.85.711.85.677.85.636.85.594.85.544.85.492.85.43.851.365.85.289.85.207.85.116.85.014.85-.094.85-.217.85-.349.85-.494.85-.65.85-.82.85-1.005.85-1.202.85-1.417.85-1.645.85-1.89.85-2.153.85-2.434.85-2.73.85-3.05.851-3.385.85-3.742.85-4.119.85-4.519.85-4.938.85-5.385.85-5.849.85-6.342.85-6.857.85-7.398.85-7.964.85-8.558.85-9.178.85-9.826.85-10.503.85-11.206.85-11.943.85-12.71"/><path stroke="none" d="M-11.084 112.182a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="-39.634" y="112.182" stroke="none" font-family="cmr10" font-size="10" transform="translate(30.563 10.212)">min</text><path stroke="none" d="M-38.114 85.152a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0m-1.52 0"/><text x="-39.634" y="112.182" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -30.563)">1</text><text x="-39.634" y="112.182" stroke="none" font-family="cmmi10" font-size="10" transform="translate(48.44 -120.866)">¸</text></g></svg>
</figure>

## d) Posizione di $s$ all'estremo di $\lambda$

L'estremo relativo di $\lambda$ è il punto $(1;\,0)$, che si ottiene per $m = 1$. Per tale valore la retta $s$ ha equazione

$$s: y = x + 2.$$

Inoltre, per $m = 1$,

$$C = \big(1 - m;\; m - m^2 + 2\big) = (0;\,2) \equiv A,$$

cioè il punto $C$ coincide con $A$. La retta $s$ è quindi **tangente** alla parabola $\gamma$ in $A$.

*Fonte:* [📄 PDF p.22](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
