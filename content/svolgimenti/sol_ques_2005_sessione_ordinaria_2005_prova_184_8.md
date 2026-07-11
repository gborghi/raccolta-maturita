

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_8|2005 Ordinaria PNI — Prova — Quesito 8]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

La curva è assegnata in forma parametrica da
$$x = e^{t} + 2, \qquad y = e^{-t} + 3.$$
Si cerca l'equazione della retta tangente nel punto $(3,4)$.

## Determinazione del parametro

Il valore del parametro corrispondente al punto dato si ricava imponendo le due coordinate. Dalla prima:
$$e^{t} + 2 = 3 \;\Rightarrow\; e^{t} = 1 \;\Rightarrow\; t = 0.$$
La seconda coordinata conferma la scelta, poiché per $t = 0$
$$y = e^{0} + 3 = 1 + 3 = 4.$$
Il punto $(3,4)$ corrisponde dunque al valore $t = 0$.

## Coefficiente angolare

Per una curva in forma parametrica il coefficiente angolare della tangente è
$$\frac{dy}{dx} = \frac{\,dy/dt\,}{\,dx/dt\,}.$$
Derivando rispetto a $t$:
$$\frac{dx}{dt} = e^{t}, \qquad \frac{dy}{dt} = -e^{-t},$$
da cui
$$\frac{dy}{dx} = \frac{-e^{-t}}{e^{t}} = -e^{-2t}.$$
Nel punto considerato ($t = 0$) il coefficiente angolare vale
$$m = -e^{0} = -1.$$

## Equazione della retta tangente

Usando la forma punto–pendenza con $m = -1$ e punto $(3,4)$:
$$y - 4 = -1\,(x - 3) \;\Rightarrow\; y = -x + 7.$$
La retta tangente ha quindi equazione
$$\boxed{\,y = -x + 7\,} \qquad \text{cioè} \qquad x + y = 7.$$

## Verifica

Eliminando il parametro si ha $e^{t} = x - 2$ ed $e^{-t} = y - 3$; moltiplicando membro a membro si ottiene l'equazione cartesiana della curva:
$$(x-2)(y-3) = 1,$$
cioè un'iperbole equilatera con asintoti $x = 2$ e $y = 3$. Derivando implicitamente,
$$(y-3) + (x-2)\,y' = 0 \;\Rightarrow\; y' = -\frac{y-3}{x-2},$$
e nel punto $(3,4)$ si ritrova $y' = -\dfrac{1}{1} = -1$, in accordo con il risultato ottenuto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="263.078" height="267.258" viewBox="-72 -72 197.308 200.444"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.87 120.291H94.177"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M92.297 117.891c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-59.066" y="120.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(157.177 2.153)">x</text><path fill="none" d="M-59.066 127.974V-58.56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.466-56.68c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-59.066" y="120.291" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -184.728)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-7.852 127.974V-58.96"/><g fill="gray" stroke="none" font-size="10"><text x="-59.066" y="120.291" font-family="cmmi10" transform="translate(39.19 -182.784)">x</text><text x="-50.573" y="120.291" font-family="cmr10" transform="translate(39.19 -182.784)">=</text><text x="-40.018" y="120.291" font-family="cmr10" transform="translate(39.19 -182.784)">2</text></g></g><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-71.87 43.47H94.577"/><g fill="gray" stroke="none" font-size="10"><text x="-59.066" y="120.291" font-family="cmmi10" transform="translate(157.177 -74.572)">y</text><text x="-51.027" y="120.291" font-family="cmr10" transform="translate(157.177 -74.572)">=</text><text x="-40.472" y="120.291" font-family="cmr10" transform="translate(157.177 -74.572)">3</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m1.11-29.698.86 6.4.859 5.37.858 4.571.86 3.937L5.404-6l.859 3.013.859 2.664.859 2.377.858 2.131.86 1.92.858 1.745.859 1.588.859 1.452.859 1.335.858 1.227.86 1.137.858 1.053.859.978.859.912.859.855.859.797.858.745.86.707.858.665.859.625.859.592.859.556.858.534.86.503.858.478.859.456.859.433.859.415.858.397.86.379.858.36.859.344.859.335.859.318.858.307.86.294.858.282.859.272.859.263.859.254.858.243.86.236.858.228.859.22.859.212.859.205.859.2.858.192.86.187.858.182.859.175.859.17.859.164.858.163.86.156.858.152.859.146.859.143.859.14.858.137.86.132.858.128.859.127.859.122.859.12.858.116.86.114.858.11.859.11.859.106.859.103.858.1.86.099.858.097M-71.87 53.712l.697.113.696.116.697.116.697.12.696.125.697.127.697.127.696.132.697.136.697.139.697.143.696.145.697.147.697.153.696.159.697.161.697.167.696.169.697.174.697.179.696.184.697.192.697.195.696.2.697.207.697.213.696.223.697.227.697.236.696.24.697.25.697.258.696.266.697.277.697.287.697.294.696.305.697.32.697.333.696.343.697.353.697.371.696.384.697.402.697.423.696.438.697.456.697.476.696.502.697.522.697.55.696.58.697.604.697.638.697.67.696.715.697.75.697.797.696.845.697.897.697.955.696 1.022.697 1.089.697 1.168.696 1.257.697 1.35.697 1.463.696 1.582.697 1.722.697 1.88.696 2.06.697 2.263.697 2.505.696 2.78.697 3.115.697 3.51.697 3.98.696 4.551.697 5.256"/><path fill="none" stroke="red" stroke-width=".8" d="m-20.655-20.549 3.734 3.735 3.734 3.734 3.734 3.734 3.735 3.734 3.734 3.735L1.75 1.857 5.484 5.59 9.22 9.325l3.734 3.735 3.734 3.734 3.734 3.734 3.735 3.735 3.734 3.734 3.734 3.734 3.735 3.734 3.734 3.735 3.734 3.734 3.734 3.734 3.735 3.734 3.734 3.735 3.734 3.734 3.734 3.734 3.735 3.734 3.734 3.735"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="10"><text x="-59.066" y="120.291" font-family="cmmi10" transform="translate(103.381 -59.207)">y</text><text x="-51.027" y="120.291" font-family="cmr10" transform="translate(103.381 -59.207)">=</text><text x="-40.472" y="120.291" font-family="cmsy10" transform="translate(103.381 -59.207)">¡</text><text x="-32.694" y="120.291" font-family="cmmi10" transform="translate(103.381 -59.207)">x</text><text x="-24.756" y="120.291" font-family="cmr10" transform="translate(103.381 -59.207)">+</text><text x="-14.756" y="120.291" font-family="cmr10" transform="translate(103.381 -59.207)">7</text></g></g><path stroke="none" d="M19.556 17.862a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="10"><text x="-59.066" y="120.291" font-family="cmr10" transform="translate(80.355 -108.462)">(3</text><text x="-50.177" y="120.291" font-family="cmmi10" transform="translate(80.355 -108.462)">;</text><text x="-45.733" y="120.291" font-family="cmr10" transform="translate(80.355 -108.462)">4)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
