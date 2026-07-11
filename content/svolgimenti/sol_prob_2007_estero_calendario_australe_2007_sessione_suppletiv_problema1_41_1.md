

**Problema:** [[Problemi/prob_2007_estero_calendario_australe_2007_sessione_suppletiv_problema1_41_1|2007 Estero Australe Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_estero_calendario_australe_2007_sessione_suppletiv_problema1_41|2007 Estero Australe Suppletiva — Problema 1]]

Il triangolo rettangolo $ABC$ ha l'ipotenusa $AB = k$ e l'angolo $B\hat{A}C = \dfrac{\pi}{3}$. Con centro in $B$ e raggio $x$ si traccia l'arco di circonferenza le cui intersezioni con i lati $BA$ e $BC$ sono, rispettivamente, $D$ ed $E$. Con centro in $A$ si traccia poi l'arco di circonferenza tangente in $D$ alla prima e che interseca in $F$ il cateto $AC$.

Poiché $AB$ è l'ipotenusa, l'angolo retto è in $C$; con $B\hat{A}C = \dfrac{\pi}{3}$ si ha $A\hat{B}C = \dfrac{\pi}{6}$, quindi

$$AC = AB\cos\frac{\pi}{3} = \frac{k}{2}, \qquad BC = AB\operatorname{sen}\frac{\pi}{3} = \frac{\sqrt{3}}{2}\,k.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="122.392" height="181.105" viewBox="-72 -72 91.794 135.828"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="M-57.446 29.075v20.784h25.041a37.56 37.56 0 0 1 18.78-32.526 87.66 87.66 0 0 1-43.818 11.74Z"/><path fill="none" stroke-width=".8" d="M5.158 49.86-57.446-58.57V49.86Z"/><path fill="none" stroke="red" stroke-width=".8" d="M-32.405 49.86a37.56 37.56 0 0 1 18.78-32.527M-13.623 17.305a87.66 87.66 0 0 1-43.817 11.74"/><path stroke="none" d="M6.478000000000001 49.86a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-56.126-58.57a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-56.126 49.86a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-12.302999999999999 17.305a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-56.126 29.075a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-31.085 49.86a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0m-1.32 0"/><text x="-57.446" y="49.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.137 3.417)">A</text><text x="-57.446" y="49.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.043 -111.963)">B</text><text x="-57.446" y="49.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.395 10.366)">C</text><text x="-57.446" y="49.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(47.356 -36.087)">D</text><text x="-57.446" y="49.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.491 -17.368)">E</text><text x="-57.446" y="49.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(21.131 10.366)">F</text><text x="-57.446" y="49.859" stroke="none" font-family="cmmi10" font-size="10" transform="translate(11.67 -6.599)">S</text></g></svg>
</figure>

## a)

Affinché la circonferenza di centro $B$ intersechi il lato $BC$ deve essere $x \le BC$, cioè

$$x \le \frac{\sqrt{3}}{2}\,k.$$

La circonferenza di centro $A$ è tangente in $D$ alla prima, dunque il suo raggio è $AD = AB - BD = k - x$; poiché deve intersecare il cateto $AC$ occorre $AF = AD \le AC$, cioè

$$k - x \le \frac{k}{2} \quad\Rightarrow\quad x \ge \frac{k}{2}.$$

La costruzione è quindi realizzabile se

$$\frac{k}{2} \le x \le \frac{\sqrt{3}}{2}\,k.$$

## b)

L'area del quadrilatero mistilineo $DECF$ si ottiene sottraendo all'area del triangolo $ABC$ l'area del settore circolare $AFD$ (centro $A$, ampiezza $\dfrac{\pi}{3}$, raggio $k-x$) e quella del settore $BDE$ (centro $B$, ampiezza $\dfrac{\pi}{6}$, raggio $x$):

$$\text{Area}(ABC) = \frac{1}{2}\,AC\cdot BC = \frac{1}{2}\cdot\frac{k}{2}\cdot\frac{\sqrt{3}}{2}\,k = \frac{\sqrt{3}}{8}\,k^2,$$

$$\text{Area}(AFD) = \frac{1}{6}\,\pi (k-x)^2, \qquad \text{Area}(BDE) = \frac{1}{12}\,\pi x^2.$$

Quindi

$$S = \frac{\sqrt{3}}{8}\,k^2 - \frac{1}{6}\,\pi (k-x)^2 - \frac{1}{12}\,\pi x^2.$$

Sviluppando $-\dfrac{1}{6}\pi(k-x)^2 - \dfrac{1}{12}\pi x^2 = -\dfrac{1}{6}\pi k^2 + \dfrac{1}{3}\pi k x - \dfrac{1}{4}\pi x^2$, si ottiene

$$S(x) = -\frac{1}{4}\,\pi x^2 + \frac{1}{3}\,\pi k x + \frac{\sqrt{3}}{8}\,k^2 - \frac{1}{6}\,\pi k^2, \qquad \frac{k}{2} \le x \le \frac{\sqrt{3}}{2}\,k, \quad k>0.$$

## c)

Il grafico di $S(x)$ è un arco di parabola con la concavità rivolta verso il basso $\left(a = -\dfrac{\pi}{4} < 0\right)$; l'ascissa del vertice è

$$x_V = -\frac{b}{2a} = -\frac{\frac{1}{3}\pi k}{2\left(-\frac{1}{4}\pi\right)} = \frac{2}{3}\,k.$$

Poiché $\dfrac{k}{2} < \dfrac{2}{3}k < \dfrac{\sqrt{3}}{2}k$, il vertice è interno all'intervallo: il **massimo** si ha nel vertice, il **minimo** in uno degli estremi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="250.106" height="207.174" viewBox="-72 -72 187.58 155.381"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-53.762 64.348h156.09"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M100.448 61.948c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-210.252" y="64.348" stroke="none" font-family="cmmi10" font-size="10" transform="translate(316.513 2.153)">x</text><path fill="none" d="M-53.762 64.348V-58.171"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-56.162-56.29c1.44-.38 2.12-1.228 2.4-2.08.28.852.96 1.7 2.4 2.08"/><text x="-210.252" y="64.348" stroke="none" font-family="cmmi10" font-size="10" transform="translate(153.136 -126.452)">S</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-39.535 11.494 2.117-4.178 2.116-4.019 2.117-3.86 2.117-3.703 2.117-3.543 2.117-3.386 2.117-3.227 2.117-3.07 2.117-2.909 2.117-2.752 2.117-2.594 2.117-2.436 2.117-2.277 2.117-2.118 2.117-1.96 2.117-1.803 2.117-1.644 2.116-1.485 2.117-1.327 2.117-1.169 2.117-1.01 2.117-.853 2.117-.692 2.117-.536 2.117-.377 2.117-.219 2.117-.06 2.117.098 2.117.257 2.117.414 2.117.573 2.117.732 2.117.89 2.116 1.048 2.117 1.206 2.117 1.366 2.117 1.523 2.117 1.68 2.117 1.84 2.117 1.998 2.117 2.158 2.117 2.314 2.117 2.473 2.117 2.632 2.117 2.79 2.117 2.949 2.117 3.106 2.117 3.265 2.117 3.424 2.116 3.581 2.117 3.74 2.117 3.898 2.117 4.056 2.117 4.217 2.117 4.373 2.117 4.531 2.117 4.69 2.117 4.85 2.117 5.006"/><path fill="none" stroke-dasharray="3.0,3.0" d="M17.37 64.348v-110.08"/><path stroke="none" d="M18.784-45.733a1.414 1.414 0 1 0-2.828 0 1.414 1.414 0 0 0 2.828 0M-38.121 11.538a1.414 1.414 0 1 0-2.829 0 1.414 1.414 0 0 0 2.829 0M86.786 35.94a1.414 1.414 0 1 0-2.828 0 1.414 1.414 0 0 0 2.828 0m-1.414 0"/><text x="-210.252" y="64.348" stroke="none" font-family="cmr10" font-size="10" transform="translate(218.316 -120.533)">max</text><g stroke="none"><text x="-210.252" y="64.348" font-family="cmmi10" font-size="10" transform="translate(141.315 -50.135)">x</text><text x="-201.759" y="64.348" font-family="cmr10" font-size="10" transform="translate(141.315 -50.135)">=</text><text x="-190.003" y="60.411" font-family="cmmi7" font-size="7" transform="translate(141.315 -50.135)">k</text><path d="M-48.688 11.513h4.42v.4h-4.42z"/><text x="-189.786" y="67.796" font-family="cmr7" font-size="7" transform="translate(141.315 -50.135)">2</text></g><text x="-210.252" y="64.348" stroke="none" font-family="cmr10" font-size="10" transform="translate(299.157 -25.069)">min</text><g stroke="none"><text x="-209.052" y="60.411" font-family="cmr7" font-size="7" transform="translate(221.668 11.981)">2</text><path d="M12.616 73.63h3.986v.4h-3.986z"/><text x="-209.052" y="67.796" font-family="cmr7" font-size="7" transform="translate(221.668 11.981)">3</text><text x="-203.866" y="64.348" font-family="cmmi10" font-size="10" transform="translate(221.668 11.981)">k</text></g></g></svg>
</figure>

Nel vertice:

$$\text{Max}(S) = S\!\left(\frac{2}{3}k\right) = -\frac{1}{18}\,\pi k^2 + \frac{\sqrt{3}}{8}\,k^2 = \left(\frac{\sqrt{3}}{8} - \frac{\pi}{18}\right)k^2 \cong 0{,}042\,k^2.$$

Agli estremi:

$$S\!\left(\frac{k}{2}\right) = -\frac{1}{16}\,\pi k^2 + \frac{\sqrt{3}}{8}\,k^2 = \frac{1}{16}\left(2\sqrt{3} - \pi\right)k^2 \cong 0{,}020\,k^2,$$

$$S\!\left(\frac{\sqrt{3}}{2}k\right) = \frac{1}{48}\left(8\pi\sqrt{3} - 17\pi + 6\sqrt{3}\right)k^2 \cong 0{,}011\,k^2.$$

Essendo $S\!\left(\dfrac{\sqrt{3}}{2}k\right) < S\!\left(\dfrac{k}{2}\right)$, il minimo si ha per $x = \dfrac{\sqrt{3}}{2}k$:

$$\text{Min}(S) = S\!\left(\frac{\sqrt{3}}{2}k\right) = \frac{1}{48}\left(8\pi\sqrt{3} - 17\pi + 6\sqrt{3}\right)k^2 \cong 0{,}011\,k^2.$$

*Fonte:* [📄 PDF p.41](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
