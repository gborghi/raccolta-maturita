

**Problema:** [[Problemi/prob_1999_sessione_suppletiva_1999_problema3_7_1|1999 Suppletiva — Problema 3 — Problema 1]] · **Prova:** [[Prove/1999_sessione_suppletiva_1999_problema3_7|1999 Suppletiva — Problema 3]]

L'informazione che si ha della parabola $f(x) = ax^2+bx+c$ è tutta concentrata nel punto di ascissa $x=5$ ed è:

$$f(5) = 0, \qquad f'(5) = -1, \qquad f''(5) = -\frac{1}{2}.$$

## a)

**Determinazione della parabola.** Dalla derivata seconda $f''(x)=2a$, costante, la condizione $f''(5)=-\tfrac{1}{2}$ dà $2a=-\tfrac{1}{2}$, cioè $a=-\tfrac{1}{4}$.

Da $f'(x)=2ax+b=-\tfrac{x}{2}+b$ e $f'(5)=-\tfrac{5}{2}+b=-1$, si ricava $b=\tfrac{3}{2}$.

Da $f(5)=-\tfrac{25}{4}+\tfrac{15}{2}+c=0$, cioè $-\tfrac{25}{4}+\tfrac{30}{4}+c=0$, si ha $c=-\tfrac{5}{4}$. La parabola è quindi:

$$\boxed{\,f(x) = -\frac{x^2}{4}+\frac{3x}{2}-\frac{5}{4} = -\frac{1}{4}\bigl(x^2-6x+5\bigr) = -\frac{1}{4}(x-1)(x-5).\,}$$

**Intersezioni con l'asse $x$.** Si ha $f(x)=0$ per $x=1$ e $x=5$. Dunque
$$A=(1,\,0), \qquad B=(5,\,0).$$

**Tangenti in $A$ e $B$.** La derivata è
$$f'(x) = -\frac{x}{2}+\frac{3}{2}.$$
In $A(1,0)$: $f'(1)=1$, quindi la tangente è $t_A:\; y = x-1$.

In $B(5,0)$: $f'(5)=-1$, quindi la tangente è $t_B:\; y = -(x-5) = -x+5$.

**Punto $C$.** È l'intersezione delle due tangenti: da $x-1=-x+5$ segue $2x=6$, cioè $x=3$, e allora $y=2$. Dunque
$$C=(3,\,2).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="322.054" height="173.828" viewBox="-72 -72 241.541 130.371"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 29.618h228.36"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M154.41 27.218c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-54.998" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(215.22 2.153)">x</text><path fill="none" d="M-54.998 46.69V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-57.398-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-54.998" y="29.618" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -94.25)">y</text><path fill="none" d="M-20.855 27.911v3.415"/><text x="-54.998" y="29.618" stroke="none" font-family="cmr9" font-size="9" transform="translate(31.83 11.04)">1</text><path fill="none" d="M13.288 27.911v3.415"/><text x="-54.998" y="29.618" stroke="none" font-family="cmr9" font-size="9" transform="translate(65.974 11.04)">2</text><path fill="none" d="M47.431 27.911v3.415"/><text x="-54.998" y="29.618" stroke="none" font-family="cmr9" font-size="9" transform="translate(100.117 11.04)">3</text><path fill="none" d="M81.574 27.911v3.415"/><text x="-54.998" y="29.618" stroke="none" font-family="cmr9" font-size="9" transform="translate(134.26 11.04)">4</text><path fill="none" d="M115.718 27.911v3.415"/><text x="-54.998" y="29.618" stroke="none" font-family="cmr9" font-size="9" transform="translate(168.404 11.04)">5</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-44.755 57.701 3.124-4.147 3.125-4.004 3.125-3.861 3.125-3.719 3.125-3.575 3.125-3.432 3.125-3.289 3.125-3.145 3.124-3.003 3.125-2.86 3.125-2.718 3.125-2.574 3.125-2.43 3.125-2.289 3.125-2.145 3.124-2.002 3.125-1.86 3.125-1.715 3.125-1.573 3.125-1.43L20.867.642l3.125-1.144 3.124-1 3.125-.86 3.125-.714 3.125-.572 3.125-.43 3.125-.285 3.125-.144h3.124l3.125.143 3.125.286 3.125.429 3.125.572 3.125.714 3.125.858 3.125 1.001L73.989.64l3.125 1.287 3.125 1.43 3.125 1.573 3.125 1.715 3.125 1.859 3.125 2.002 3.124 2.145 3.125 2.288 3.125 2.43 3.125 2.574 3.125 2.717 3.125 2.86 3.125 3.003 3.124 3.145 3.125 3.288 3.125 3.433 3.125 3.574 3.125 3.718 3.125 3.86 3.125 4.005 3.124 4.146"/><path fill="none" stroke="red" stroke-width=".8" d="m-34.512 43.275 3.556-3.556 3.556-3.556 3.556-3.556 3.557-3.556 3.556-3.557 3.556-3.556 3.556-3.556 3.557-3.556 3.556-3.557L1.05 7.713l3.556-3.556L8.163.6l3.556-3.557 3.556-3.556 3.556-3.556 3.556-3.556 3.557-3.556 3.556-3.557 3.556-3.556 3.556-3.556 3.557-3.556 3.556-3.557 3.556-3.556 3.556-3.556"/><path fill="none" stroke="red" stroke-width=".8" d="m44.017-42.082 3.556 3.556 3.556 3.556 3.556 3.556 3.557 3.556 3.556 3.557 3.556 3.556 3.556 3.556 3.557 3.556 3.556 3.557 3.556 3.556 3.556 3.556L86.691.592l3.557 3.557 3.556 3.556 3.556 3.556 3.556 3.556 3.557 3.557 3.556 3.556 3.556 3.556 3.556 3.556 3.557 3.556 3.556 3.557 3.556 3.556 3.556 3.556"/><path stroke="none" d="M-19.055 29.618a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-54.998" y="29.618" stroke="none" font-family="cmmi9" font-size="9" transform="translate(23.674 9.683)">A</text><path stroke="none" d="M117.518 29.618a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-54.998" y="29.618" stroke="none" font-family="cmmi9" font-size="9" transform="translate(174.249 9.683)">B</text><path stroke="none" d="M49.231-38.668a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="9"><text x="-54.998" y="29.618" font-family="cmmi9" transform="translate(88.53 -74.07)">C</text><text x="-47.756" y="29.618" font-family="cmr9" transform="translate(88.53 -74.07)">(3</text><text x="-39.533" y="29.618" font-family="cmmi9" transform="translate(88.53 -74.07)">;</text><text x="-35.422" y="29.618" font-family="cmr9" transform="translate(88.53 -74.07)">2)</text></g><path stroke="none" d="M48.871-4.525a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><text x="-54.998" y="29.618" stroke="none" font-family="cmmi9" font-size="9" transform="translate(105.963 -24.46)">V</text></g></svg>
</figure>

**Area del triangolo $ABC$.** La base è $\overline{AB}=4$ e l'altezza è la distanza di $C$ dall'asse $x$, cioè $h=2$:
$$\mathcal{A}_T = \frac{1}{2}\cdot 4\cdot 2 = 4.$$

**Area del segmento parabolico.** L'area della regione compresa tra la parabola e l'asse $x$ tra $A$ e $B$ è:
$$\mathcal{A}_P = \int_1^{5}\frac{1}{4}(x-1)(5-x)\,dx = \frac{1}{4}\int_1^{5}\bigl(-x^2+6x-5\bigr)\,dx = \frac{1}{4}\left[-\frac{x^3}{3}+3x^2-5x\right]_1^5.$$
Sostituendo gli estremi:
$$\mathcal{A}_P = \frac{1}{4}\left[\left(-\frac{125}{3}+75-25\right)-\left(-\frac{1}{3}+3-5\right)\right] = \frac{1}{4}\left[\frac{25}{3}+\frac{7}{3}\right] = \frac{1}{4}\cdot\frac{32}{3} = \frac{8}{3}.$$

Il rapporto tra l'area del triangolo e quella del segmento parabolico è quindi:
$$\frac{\mathcal{A}_T}{\mathcal{A}_P} = \frac{4}{\,8/3\,} = \boxed{\frac{3}{2}}.$$

Questo è un risultato classico: per qualunque parabola, il triangolo formato dalle tangenti negli estremi di una corda ha area pari a $\tfrac{3}{2}$ di quella del segmento parabolico corrispondente.

## b)

**Rapporto dei volumi di rotazione.** Le due regioni ruotano attorno all'asse $x$.

**Volume del segmento parabolico:**
$$V_P = \pi\int_1^{5}\bigl[f(x)\bigr]^2\,dx = \frac{\pi}{16}\int_1^{5}(x-1)^2(x-5)^2\,dx.$$
Con la sostituzione $x=3+2t$ (centrata in $x=3$) si ha $(x-1)(x-5) = (2+2t)(2t-2)=4(t^2-1)$, $dx=2\,dt$, e gli estremi diventano $t=-1$ e $t=1$:
$$V_P = \frac{\pi}{16}\int_{-1}^{1}16\,(t^2-1)^2\cdot 2\,dt = 2\pi\int_0^{1}\bigl(t^4-2t^2+1\bigr)\,dt = 2\pi\left[\frac{1}{5}-\frac{2}{3}+1\right] = 2\pi\cdot\frac{8}{15} = \frac{16\pi}{15}.$$

**Volume del triangolo:** il triangolo $ABC$ ruotato attorno all'asse $x$ ha, per il teorema di Pappo–Guldino, volume $V_T=2\pi\,\bar{y}\cdot\mathcal{A}_T$, dove $\bar{y}$ è l'ordinata del baricentro. Poiché i vertici sono $A(1,0)$, $B(5,0)$, $C(3,2)$, si ha $\bar{y}=\dfrac{0+0+2}{3}=\dfrac{2}{3}$, quindi:
$$V_T = 2\pi\cdot\frac{2}{3}\cdot 4 = \frac{16\pi}{3}.$$

Il rapporto fra i volumi è quindi:
$$\frac{V_T}{V_P} = \frac{16\pi/3}{16\pi/15} = \boxed{5}.$$

*Fonte:* [📄 PDF p.7](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
