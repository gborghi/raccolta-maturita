

**Problema:** [[Problemi/prob_2008_scuole_italiane_allestero_europa_2008_sessione_ord_problema2_53_1|2008 Estero Europa Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_scuole_italiane_allestero_europa_2008_sessione_ord_problema2_53|2008 Estero Europa Ordinaria — Problema 2]]

## 1)

È data la derivata

$$y' = \frac{ax}{(1+4x^2)^2}$$

e si chiede di determinare la funzione $y = f(x)$ il cui grafico passa per i punti $\left(-\dfrac{1}{2};\,1\right)$ e $(0;\,2)$.

Si calcola l'antiderivata mediante la sostituzione $u = 1+4x^2$, $du = 8x\,dx$:

$$y = \int \frac{ax}{(1+4x^2)^2}\,dx = \frac{a}{8}\int \frac{8x\,dx}{(1+4x^2)^2} = \frac{a}{8}\int \frac{du}{u^2} = \frac{-a}{8(1+4x^2)} + k$$

Imponendo il passaggio per i due punti si ottiene il sistema

$$\begin{cases} \dfrac{-a}{8} + k = 2 \\[6pt] \dfrac{-a}{16} + k = 1 \end{cases}$$

Sottraendo la seconda equazione dalla prima si ha $-\dfrac{a}{16} = 1$, da cui $a = -16$; sostituendo nella prima si trova $k = 0$. La funzione richiesta è dunque

$$\boxed{\,y = \frac{2}{1+4x^2}\,}$$

Si tratta di una funzione pari, definita su tutto $\mathbb{R}$ e sempre positiva; il grafico interseca l'asse delle ordinate nel punto $(0;\,2)$. Inoltre

$$\lim_{x\to +\infty} \frac{2}{1+4x^2} = \lim_{x\to -\infty} \frac{2}{1+4x^2} = 0^+,$$

quindi la retta $y=0$ è asintoto orizzontale.

**Derivata prima.**

$$y' = \frac{-16x}{(1+4x^2)^2}$$

Per $x < 0$ la funzione è crescente, per $x > 0$ è decrescente; $x = 0$ è punto di massimo assoluto, con $y_{\max} = 2$.

**Derivata seconda.**

$$y'' = \frac{16\,(12x^2-1)}{(1+4x^2)^3}$$

La concavità è rivolta verso l'alto quando $12x^2 - 1 > 0$, cioè per $|x| > \dfrac{1}{2\sqrt{3}}$. I punti di flesso hanno ascissa $x = \pm\dfrac{1}{2\sqrt{3}} = \pm\dfrac{\sqrt{3}}{6}$ e ordinata $y = \dfrac{3}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="332.678" height="159.049" viewBox="-72 -72 249.508 119.287"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 33.318h236.327"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M162.377 30.918c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="46.294" y="33.318" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.897 2.153)">x</text><path fill="none" d="M46.294 44.414V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M43.894-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="46.294" y="33.318" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -97.949)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.672 31.318 1.864-.067 1.865-.07 1.865-.074 1.865-.078 1.865-.082 1.864-.087 1.865-.09 1.865-.097 1.865-.102 1.864-.108 1.865-.114 1.865-.121 1.865-.128 1.865-.137 1.864-.145 1.865-.154 1.865-.166 1.865-.176 1.865-.188 1.864-.202 1.865-.217 1.865-.232 1.865-.25 1.864-.27 1.865-.29 1.865-.315 1.865-.34 1.865-.37 1.864-.402 1.865-.438 1.865-.478L-5 24.807l1.865-.574 1.864-.631 1.865-.695 1.865-.769 1.865-.85 1.864-.944 1.865-1.05 1.865-1.172 1.865-1.31 1.865-1.469 1.864-1.649 1.865-1.854 1.865-2.087 1.865-2.351 1.864-2.647 1.865-2.972 1.865-3.323 1.865-3.696 1.865-4.072 1.864-4.41 1.865-4.686 1.865-4.826 1.865-4.772 1.865-4.442 1.864-3.777L43.485-39l1.865-1.468 1.865-.008 1.864 1.458 1.865 2.759 1.865 3.77 1.865 4.43 1.865 4.772 1.864 4.827 1.865 4.69 1.865 4.413 1.865 4.072 1.864 3.703 1.865 3.328 1.865 2.974 1.865 2.652 1.865 2.355 1.864 2.09 1.865 1.854 1.865 1.652 1.865 1.47 1.865 1.313 1.864 1.173 1.865 1.052 1.865.945 1.865.851 1.864.77 1.865.696 1.865.631 1.865.575 1.865.524 1.864.479 1.865.438 1.865.403 1.865.37 1.865.34 1.864.315 1.865.291 1.865.27 1.865.25 1.864.232 1.865.217 1.865.202 1.865.189 1.865.176 1.864.165 1.865.155 1.865.145 1.865.137 1.865.129 1.864.12 1.865.115 1.865.107 1.865.103 1.864.096 1.865.091 1.865.087 1.865.082 1.865.078 1.864.074 1.865.07 1.865.067"/><text x="46.294" y="33.318" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path stroke="none" d="M48.244-40.66a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><g stroke="none" font-size="10"><text x="46.294" y="33.318" font-family="cmr10" transform="translate(3.533 -80.01)">(0</text><text x="55.182" y="33.318" font-family="cmmi10" transform="translate(3.533 -80.01)">;</text><text x="61.294" y="33.318" font-family="cmr10" transform="translate(3.533 -80.01)">2)</text></g><path stroke="none" d="M58.532000000000004-22.165a1.56 1.56 0 1 0-3.12 0 1.56 1.56 0 0 0 3.12 0M37.175000000000004-22.165a1.56 1.56 0 1 0-3.12 0 1.56 1.56 0 0 0 3.12 0m-1.56 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M56.972 33.318v-55.483M35.615 33.318v-55.483"/></g></svg>
</figure>

## 2)

Indichiamo con $P = \left(t,\;\dfrac{2}{1+4t^2}\right)$ il generico punto della curva. Per l'evidente simmetria basta considerare $t > 0$.

La tangente in $P$ ha equazione

$$y - \frac{2}{1+4t^2} = \frac{-16t}{(1+4t^2)^2}\,(x - t).$$

Ponendo $y = 0$ si ottiene l'ascissa del punto $Q$ in cui la tangente incontra l'asse $x$:

$$x_Q = t + \frac{1+4t^2}{8t} = \frac{12t^2+1}{8t}.$$

Detto $H$ il piede della perpendicolare da $P$ all'asse $x$ (quindi $x_H = t$), si ha

$$\overline{HQ} = x_Q - x_H = \frac{12t^2+1}{8t} - t = \frac{4t^2+1}{8t} = \frac{t}{2} + \frac{1}{8t}.$$

Cerchiamo il valore di $t$ che rende minima tale distanza.

**Per via elementare.** La quantità $\overline{HQ} = \dfrac{t}{2} + \dfrac{1}{8t}$ è somma di due termini positivi il cui prodotto è costante:

$$\frac{t}{2} \cdot \frac{1}{8t} = \frac{1}{16}.$$

Se il prodotto di due quantità positive è costante, la loro somma è minima quando le due quantità sono uguali; quindi il minimo si ha per

$$\frac{t}{2} = \frac{1}{8t} \;\Rightarrow\; 4t^2 = 1 \;\Rightarrow\; t = \frac{1}{2}.$$

**Con le derivate.** Posto $g(t) = \dfrac{t}{2} + \dfrac{1}{8t}$, si ha

$$g'(t) = \frac{1}{2} - \frac{1}{8t^2},$$

che si annulla per $t = \dfrac{1}{2}$ (con $t>0$). Poiché $g$ è decrescente per $0 < t < \dfrac{1}{2}$ e crescente per $t > \dfrac{1}{2}$, il minimo richiesto si ha per $t = \dfrac{1}{2}$.

## 3)

L'area della regione compresa tra la curva e l'asse $x$ nel primo quadrante si ottiene dall'integrale improprio

$$\int_0^{+\infty} \frac{2}{1+4x^2}\,dx = \lim_{k \to +\infty} \int_0^{k} \frac{2}{1+4x^2}\,dx.$$

Poiché $\displaystyle\int \frac{2}{1+4x^2}\,dx = \int \frac{2}{1+(2x)^2}\,dx = \arctan(2x) + C$, si ottiene

$$\lim_{k \to +\infty} \Big[\arctan(2x)\Big]_0^{k} = \lim_{k \to +\infty} \big[\arctan(2k) - \arctan 0\big] = \frac{\pi}{2}.$$

L'area cercata vale quindi $\dfrac{\pi}{2}$.

*Con la collaborazione di Angela Santamaria*

*Fonte:* [📄 PDF p.53](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
