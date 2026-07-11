

**Problema:** [[Problemi/prob_2009_estero_calendario_australe_ordinaria_2009_problema2_32_1|2009 Estero Australe Ordinaria — Problema 2 — Problema 2]] · **Prova:** [[Prove/2009_estero_calendario_australe_ordinaria_2009_problema2_32|2009 Estero Australe Ordinaria — Problema 2]]

Sia $p(x) = ax^3 + bx^2 + cx + d$. Si determinino $a,\,b,\,c,\,d$ in modo che il grafico $\Gamma$ di $p(x)$ abbia nel punto $F(1,\,-2)$ un flesso e nel punto $M(2,\,-4)$ un minimo.

## a) Determinazione dei coefficienti

Trattandosi di una funzione razionale intera, il flesso in $F$ richiede $p''(1)=0$ e il minimo in $M$ richiede $p'(2)=0$. Calcoliamo le derivate:

$$p'(x) = 3ax^2 + 2bx + c, \qquad p''(x) = 6ax + 2b.$$

Imponiamo le due condizioni analitiche insieme al passaggio per $F$ e per $M$:

$$\begin{cases} p''(1)=0: & 6a + 2b = 0 \\ p'(2)=0: & 12a + 4b + c = 0 \\ p(1)=-2: & a + b + c + d = -2 \\ p(2)=-4: & 8a + 4b + 2c + d = -4 \end{cases}$$

Dalla prima equazione $b = -3a$; sostituendo nella seconda $12a - 12a + c = 0$, cioè $c = 0$. La terza dà allora $a - 3a + d = -2$, ossia $d = -2 + 2a$. Sostituendo tutto nella quarta:

$$8a - 12a + (-2 + 2a) = -4 \;\Rightarrow\; -2a - 2 = -4 \;\Rightarrow\; a = 1.$$

Ne segue $b = -3$, $c = 0$, $d = 0$. Quindi

$$p(x) = x^3 - 3x^2.$$

## b) Studio e grafico di $\Gamma$

La funzione $p(x) = x^3 - 3x^2$ è razionale intera, definita su tutto $\mathbb{R}$; agli estremi

$$\lim_{x \to -\infty} p(x) = -\infty, \qquad \lim_{x \to +\infty} p(x) = +\infty.$$

Scrivendola nella forma fattorizzata $p(x) = x^2(x-3)$ si vede che ha una radice doppia in $x=0$ e una radice semplice in $x=3$: il grafico è dunque tangente all'asse $x$ nell'origine, che è punto di massimo relativo, passa per $(3,\,0)$, ha minimo in $M(2,\,-4)$ e flesso in $F(1,\,-2)$. Il grafico è il seguente (in rosso la retta della parte d).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="269.256" height="252.562" viewBox="-72 -72 201.942 189.422"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 12.832H96.54"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M94.66 10.432c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-21.993" y="12.832" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(122.466 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-21.993 84.818V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-24.393-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-21.993" y="12.832" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -77.463)">y</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-53.29 14.71v-3.756"/><g fill="gray" stroke="none" font-size="5"><text x="-21.993" y="12.832" font-family="cmsy5" transform="translate(-43.65 -6.244)">¡</text><text x="-16.576" y="12.832" font-family="cmr5" transform="translate(-43.65 -6.244)">1</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M9.305 14.71v-3.756"/><text x="-21.993" y="12.832" fill="gray" stroke="none" font-family="cmr5" font-size="5" transform="translate(24.362 -5.41)">1</text></g><g fill="gray" stroke="gray"><path fill="none" d="M40.604 14.71v-3.756"/><text x="-21.993" y="12.832" fill="gray" stroke="none" font-family="cmr5" font-size="5" transform="translate(55.66 -5.41)">2</text></g><g fill="gray" stroke="gray"><path fill="none" d="M71.902 14.71v-3.756"/><text x="-21.993" y="12.832" fill="gray" stroke="none" font-family="cmr5" font-size="5" transform="translate(86.959 -5.41)">3</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-61.115 116.752 1.861-10.975 1.862-10.245 1.861-9.539 1.862-8.85 1.861-8.18 1.862-7.534 1.862-6.904 1.861-6.295 1.862-5.706 1.861-5.137 1.862-4.586 1.861-4.056 1.862-3.546 1.862-3.055 1.861-2.585 1.862-2.133 1.861-1.702 1.862-1.292 1.862-.899 1.861-.527 1.862-.174 1.861.157 1.862.47 1.861.764 1.862 1.037 1.862 1.29 1.861 1.524 1.862 1.737 1.861 1.932 1.862 2.106 1.861 2.261 1.862 2.396 1.862 2.511 1.861 2.607 1.862 2.682L5.9 39.044l1.862 2.774 1.861 2.79 1.862 2.788 1.862 2.764 1.861 2.72 1.862 2.659 1.861 2.576 1.862 2.474 1.861 2.352 1.862 2.21 1.862 2.048 1.861 1.868 1.862 1.667 1.861 1.446 1.862 1.205 1.862.945 1.861.665 1.862.366 1.861.046 1.862-.294 1.861-.652 1.862-1.031L48.718 72l1.861-1.848 1.862-2.285 1.861-2.744 1.862-3.222 1.861-3.718 1.862-4.236 1.862-4.773 1.861-5.329 1.862-5.905 1.861-6.502 1.862-7.117 1.862-7.753 1.861-8.409L74.78-.924l1.861-9.779 1.862-10.493 1.861-11.227 1.862-11.982 1.862-12.756 1.861-13.549"/><path fill="none" stroke="red" stroke-width=".8" d="m-59.55 78.558 5.998-3 6-2.999 5.998-3 5.999-2.999 5.998-2.999 6-3 5.998-2.999 5.999-3 5.999-2.999 5.998-2.999 6-3 5.998-2.999 5.999-3 5.999-2.999 5.998-2.999 6-3 5.998-2.999 5.999-3 5.999-2.999 5.998-2.999 6-3 5.998-2.999 5.999-3 5.998-2.998"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="9"><text x="-21.993" y="12.832" font-family="cmmi9" transform="translate(109.947 -4.235)">y</text><text x="-14.545" y="12.832" font-family="cmr9" transform="translate(109.947 -4.235)">=</text><text x="-4.781" y="12.832" font-family="cmmi9" transform="translate(109.947 -4.235)">x</text><text x="2.518" y="12.832" font-family="cmsy9" transform="translate(109.947 -4.235)">¡</text><text x="11.767" y="12.832" font-family="cmr9" transform="translate(109.947 -4.235)">3</text></g></g><path stroke="none" d="M-19.793 12.832c0-.608-.985-1.1-2.2-1.1s-2.2.492-2.2 1.1c0 .607.985 1.1 2.2 1.1s2.2-.493 2.2-1.1m-2.2 0"/><text x="-21.993" y="12.832" stroke="none" font-family="cmmi5" font-size="5" transform="translate(3.533 -3.533)">O</text><path stroke="none" d="M11.505 44.13c0-.607-.985-1.1-2.2-1.1s-2.2.493-2.2 1.1.985 1.1 2.2 1.1 2.2-.492 2.2-1.1m-2.2 0"/><text x="-21.993" y="12.832" stroke="none" font-family="cmmi5" font-size="5" transform="translate(22.56 33.007)">F</text><path stroke="none" d="M42.804 75.428c0-.607-.985-1.1-2.2-1.1s-2.2.493-2.2 1.1.985 1.1 2.2 1.1 2.2-.492 2.2-1.1m-2.2 0"/><text x="-21.993" y="12.832" stroke="none" font-family="cmmi5" font-size="5" transform="translate(59.114 69.546)">M</text><g fill="#00f" stroke="#00f"><text x="-21.993" y="12.832" fill="#00f" stroke="none" font-family="cmr9" font-size="9" transform="translate(100.394 -58.305)">¡</text></g></g></svg>
</figure>

## c) Curva simmetrica rispetto all'asse $x$

Il polinomio $q(x)$ il cui grafico è il simmetrico di $\Gamma$ rispetto all'asse $x$ si ottiene cambiando segno alle ordinate:

$$q(x) = -p(x) = -x^3 + 3x^2.$$

## d) Aree delle due regioni

La retta per $F(1,\,-2)$ parallela alla bisettrice del primo e terzo quadrante (di coefficiente angolare $1$) ha equazione

$$y + 2 = x - 1 \;\Rightarrow\; y = x - 3.$$

Le ascisse dei punti comuni tra $\Gamma$ e la retta risolvono $x^3 - 3x^2 = x - 3$, cioè

$$x^3 - 3x^2 - x + 3 = 0 \;\Rightarrow\; (x-3)(x^2-1) = 0 \;\Rightarrow\; x = -1,\; x = 1,\; x = 3.$$

Il punto $F$ (di ascissa $x=1$) è il flesso della cubica: poiché ogni cubica è simmetrica rispetto al proprio flesso, le due regioni comprese tra curva e retta sugli intervalli $[-1,\,1]$ e $[1,\,3]$ hanno la stessa area. Calcoliamo la seconda, dove la retta sta sopra la curva:

$$A = \int_1^3 \big[(x-3) - (x^3 - 3x^2)\big]\,dx = \int_1^3 \left(-x^3 + 3x^2 + x - 3\right) dx.$$

Una primitiva è $F(x) = -\dfrac{x^4}{4} + x^3 + \dfrac{x^2}{2} - 3x$, quindi

$$A = \left[-\frac{x^4}{4} + x^3 + \frac{x^2}{2} - 3x\right]_1^3 = \frac{9}{4} - \left(-\frac{7}{4}\right) = \frac{16}{4} = 4.$$

Le due regioni hanno dunque entrambe area $4\ u^2$.

*Fonte:* [📄 PDF p.32](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
