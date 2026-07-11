

**Problema:** [[Problemi/prob_2003_americhe_emisfero_boreale_2003_sessione_suppletiva_problema1_54_1|2003 Americhe Boreale Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_americhe_emisfero_boreale_2003_sessione_suppletiva_problema1_54|2003 Americhe Boreale Suppletiva — Problema 1]]

Nel piano cartesiano $Oxy$ sono dati i punti $A(a,0)$ e $B(0,2a)$, con $a>0$ parametro reale.

## a)

Cerchiamo la parabola con asse parallelo all'asse $y$ e vertice in $A(a,0)$. La sua equazione è del tipo
$$y - y_V = h\,(x - x_V)^2 \quad\Rightarrow\quad y = h\,(x-a)^2 .$$
Imponendo il passaggio per $B(0,2a)$:
$$2a = h\,a^2 \quad\Rightarrow\quad h = \frac{2}{a}.$$
La parabola cercata è quindi
$$y = \frac{2}{a}\,(x-a)^2 .$$

## b)

Sia $P=(x,y)$ un punto dell'arco $AB$, con $0 \le x \le a$ e $y = \dfrac{2}{a}(x-a)^2$. Vogliamo rendere minima la somma delle coordinate
$$s = x + y = x + \frac{2}{a}(x-a)^2 = x + \frac{2}{a}\big(x^2 - 2ax + a^2\big) = \frac{2}{a}x^2 - 3x + 2a .$$
Poiché $a>0$, il coefficiente di $x^2$ è positivo e il minimo si ha nel vertice della parabola $s(x)$, cioè in
$$x = -\frac{-3}{2\cdot \frac{2}{a}} = \frac{3a}{4}.$$
Tale valore soddisfa la condizione $0 \le x \le a$. L'ordinata corrispondente è
$$y = \frac{2}{a}\left(\frac{3a}{4}-a\right)^2 = \frac{2}{a}\left(-\frac{a}{4}\right)^2 = \frac{2}{a}\cdot\frac{a^2}{16} = \frac{a}{8},$$
quindi
$$P = \left(\frac{3a}{4},\ \frac{a}{8}\right).$$
Il valore minimo della somma è
$$s_{\min} = \frac{3a}{4} + \frac{a}{8} = \frac{6a + a}{8} = \frac{7a}{8}.$$
Imponendo $s_{\min} = \dfrac{7}{4}$:
$$\frac{7a}{8} = \frac{7}{4} \quad\Rightarrow\quad a = 2.$$

## c)

Per $a=2$ la parabola diventa
$$k:\quad y = \frac{2}{2}(x-2)^2 = (x-2)^2 = x^2 - 4x + 4,$$
e il punto $P$ ha coordinate
$$P = \left(\frac{3\cdot 2}{4},\ \frac{2}{8}\right) = \left(\frac{3}{2},\ \frac{1}{4}\right).$$
Il coefficiente angolare della tangente in $P$ si ottiene dalla derivata $y' = 2x - 4$:
$$y'\!\left(\tfrac{3}{2}\right) = 2\cdot\frac{3}{2} - 4 = -1 .$$
La retta tangente $t$ è quindi
$$t:\quad y - \frac{1}{4} = -\left(x - \frac{3}{2}\right) \quad\Rightarrow\quad y = -x + \frac{7}{4}.$$
La retta $p$ perpendicolare a $t$ in $P$ ha coefficiente angolare $1$:
$$p:\quad y - \frac{1}{4} = x - \frac{3}{2} \quad\Rightarrow\quad y = x - \frac{5}{4}.$$

## d)

Cerchiamo le ulteriori intersezioni fra $p$ e $k$:
$$\begin{cases} y = x - \dfrac{5}{4} \\[4pt] y = x^2 - 4x + 4 \end{cases} \quad\Rightarrow\quad x^2 - 4x + 4 = x - \frac{5}{4},$$
cioè
$$x^2 - 5x + \frac{21}{4} = 0 \quad\Rightarrow\quad x = \frac{5 \pm \sqrt{25 - 21}}{2} = \frac{5 \pm 2}{2},$$
da cui $x = \dfrac{3}{2}$ (il punto $P$) e $x = \dfrac{7}{2}$. Il punto $Q$ è quindi
$$y_Q = \frac{7}{2} - \frac{5}{4} = \frac{9}{4} \quad\Rightarrow\quad Q = \left(\frac{7}{2},\ \frac{9}{4}\right).$$

Determiniamo la circonferenza di diametro $AB$, con $A=(2,0)$ e $B=(0,4)$:
$$\overline{AB} = \sqrt{16 + 4} = 2\sqrt{5}, \qquad R = \sqrt{5}.$$
Il centro è il punto medio $C = (1,2)$, quindi
$$(x-1)^2 + (y-2)^2 = 5 \quad\Longleftrightarrow\quad x^2 + y^2 - 2x - 4y = 0.$$

La parabola $k$ passa per $A$ e per $B$ (infatti $k(2)=0$ e $k(0)=4$): la corda $AB$ è un diametro del cerchio. Le due parti in cui la parabola divide il cerchio si ottengono aggiungendo e sottraendo all'area del semicerchio l'area del segmento parabolico individuato dalla corda $AB$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="237.076" height="252.964" viewBox="-72 -72 177.807 189.723"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 88.8H92.556"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M90.676 86.4c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-26.545" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(123.034 2.153)">x</text><path fill="none" d="M-26.545 117.253V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-28.945-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-26.545" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -153.432)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-35.081-61.715 1.735 7.878 1.736 7.667 1.736 7.455 1.736 7.243 1.735 7.032 1.736 6.82 1.736 6.608 1.736 6.396 1.735 6.184 1.736 5.973 1.736 5.76 1.736 5.55 1.735 5.336 1.736 5.126 1.736 4.914 1.736 4.702 1.735 4.49 1.736 4.278 1.736 4.067 1.736 3.855 1.735 3.643 1.736 3.43 1.736 3.22 1.736 3.008 1.735 2.796 1.736 2.584 1.736 2.372 1.736 2.16 1.735 1.95 1.736 1.737 1.736 1.525 1.736 1.313 1.735 1.102 1.736.89 1.736.678 1.736.467 1.735.254 1.736.043 1.736-.169 1.736-.38 1.735-.593 1.736-.805 1.736-1.016 1.736-1.227 1.735-1.44 1.736-1.652 1.736-1.863 1.736-2.075 1.735-2.287 1.736-2.498 1.736-2.71 1.736-2.922 1.735-3.135 1.736-3.345 1.736-3.558 1.736-3.769 1.735-3.98 1.736-4.193 1.736-4.405"/><g fill="#00f" stroke="#00f"><text x="-26.545" y="88.8" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(92.556 -50.588)">k</text></g><path fill="none" stroke="red" stroke-width=".8" d="M65.527 31.895c0-35.137-28.483-63.62-63.62-63.62s-63.62 28.483-63.62 63.62 28.483 63.62 63.62 63.62 63.62-28.484 63.62-63.62Zm-63.62 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M30.36 88.8-26.545-25.01"/><path stroke="none" d="M32.36 88.8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none" font-size="10"><text x="-26.545" y="88.8" font-family="cmmi10" transform="translate(60.438 11.033)">A</text><text x="-19.045" y="88.8" font-family="cmr10" transform="translate(60.438 11.033)">(2</text><text x="-10.157" y="88.8" font-family="cmmi10" transform="translate(60.438 11.033)">;</text><text x="-5.712" y="88.8" font-family="cmr10" transform="translate(60.438 11.033)">0)</text></g><path stroke="none" d="M-24.545-25.01a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none" font-size="10"><text x="-26.545" y="88.8" font-family="cmmi10" transform="translate(3.533 -119.844)">B</text><text x="-18.459" y="88.8" font-family="cmr10" transform="translate(3.533 -119.844)">(0</text><text x="-9.57" y="88.8" font-family="cmmi10" transform="translate(3.533 -119.844)">;</text><text x="-5.125" y="88.8" font-family="cmr10" transform="translate(3.533 -119.844)">4)</text></g><path stroke="none" d="M18.134 81.687a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-26.545" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(46.212 3.253)">P</text><path stroke="none" d="M3.407 31.895a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-26.545" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(31.986 -60.438)">C</text></g></svg>
</figure>

L'area del cerchio vale $\pi R^2 = 5\pi$, quindi
$$\text{Area(semicerchio)} = \frac{5}{2}\pi .$$
La retta $AB$ ha equazione $\dfrac{x}{2} + \dfrac{y}{4} = 1$, cioè $y = -2x + 4$. L'area del segmento parabolico si ottiene con il calcolo integrale:
$$\int_0^2 \big[(-2x+4) - (x^2 - 4x + 4)\big]\,dx = \int_0^2 (-x^2 + 2x)\,dx = \left[-\frac{x^3}{3} + x^2\right]_0^2 = -\frac{8}{3} + 4 = \frac{4}{3}.$$

Pertanto le due parti in cui la parabola $k$ divide il cerchio hanno aree
$$\text{Area}_1 = \frac{5}{2}\pi + \frac{4}{3} \approx 9{,}19\ \text{u}^2, \qquad \text{Area}_2 = \frac{5}{2}\pi - \frac{4}{3} \approx 6{,}52\ \text{u}^2 .$$

*Fonte:* [📄 PDF p.54](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
