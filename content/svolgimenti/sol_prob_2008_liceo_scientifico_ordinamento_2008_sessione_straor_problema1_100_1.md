

**Problema:** [[Problemi/prob_2008_liceo_scientifico_ordinamento_2008_sessione_straor_problema1_100_1|2008 Ordinamento Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_problema1_100|2008 Ordinamento Straordinaria — Problema 1]]

Sia data la parabola $y = ax^2 + bx + c$. Si determinino $a,b,c$ in modo che essa passi per i punti $A(0;-6)$ e $B(1;0)$ e che in $B$ sia tangente alla retta di coefficiente angolare $5$.

## a) Determinazione della parabola

Il passaggio per $A(0;-6)$ dà $c = -6$; il passaggio per $B(1;0)$ dà $a + b + c = 0$, cioè $a + b = 6$. La condizione di tangenza in $B$ alla retta di coefficiente angolare $5$ equivale a $y'(1) = 5$. Poiché $y' = 2ax + b$, si ha $2a + b = 5$. Il sistema è

$$\begin{cases} c = -6 \\ a + b = 6 \\ 2a + b = 5 \end{cases}$$

Sottraendo la seconda equazione dalla terza si ottiene $a = -1$, da cui $b = 7$ e $c = -6$. La parabola richiesta è dunque

$$y = -x^2 + 7x - 6.$$

Essa interseca l'asse $x$ dove $-x^2 + 7x - 6 = 0$, cioè $x^2 - 7x + 6 = 0$, quindi in $x = 1$ e $x = 6$; il vertice ha ascissa $x_V = \frac{7}{2}$ e ordinata $y_V = \frac{25}{4}$, cioè $V\left(\frac{7}{2};\frac{25}{4}\right)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="280.134" height="357.393" viewBox="-72 -72 210.1 268.045"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 64.33h196.92"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M122.97 61.93c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(192.743 2.153)">x</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M-63.96 69.622V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-66.36-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.959 1.7 2.399 2.08"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -128.961)">y</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M-36.93 65.741V62.92"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 6.092 26.872)">1</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M-9.9 65.741V62.92"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 33.122 26.872)">2</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M17.13 65.741V62.92"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 60.152 26.872)">3</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M44.16 65.741V62.92"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 87.182 26.872)">4</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M71.19 65.741V62.92"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 114.212 26.872)">5</text></g></g><g fill="gray" stroke="gray"><path fill="none" d="M98.22 65.741V62.92"/><g fill="#000" stroke="#000"><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="matrix(.7 0 0 .7 141.242 26.872)">6</text></g></g><path fill="none" stroke="#99f" stroke-dasharray="3.0,3.0" d="m-69.367 195.575 3.298-15.666 3.299-15.141 3.298-14.616 3.298-14.09 3.299-13.566 3.298-13.04 3.298-12.514 3.299-11.989 3.298-11.464 3.298-10.938 3.299-10.413 3.298-9.888 3.298-9.362 3.299-8.837 3.298-8.312 3.298-7.786 3.299-7.261 3.298-6.736 3.298-6.21L-3.4-17.94l3.298-5.16 3.298-4.634 3.299-4.109 3.298-3.583 3.298-3.059 3.299-2.533 3.298-2.007 3.298-1.483 3.299-.957 3.298-.431 3.298.093 3.299.619 3.298 1.144 3.298 1.67 3.299 2.195 3.298 2.72 3.298 3.246 3.299 3.77 3.298 4.297 3.298 4.822 3.298 5.347 3.299 5.872 3.298 6.398L75.76 3.22l3.299 7.448 3.298 7.974 3.298 8.5 3.299 9.023 3.298 9.55L95.55 55.79l3.299 10.6 3.298 11.126 3.298 11.651 3.299 12.176 3.298 12.702 3.298 13.227 3.299 13.752 3.298 14.278 3.298 14.803"/><path fill="none" stroke="#00f" stroke-width="1.2" d="m-36.93 64.33 2.29-7.347 2.29-7.094 2.29-6.84 2.29-6.587 2.29-6.334 2.29-6.08 2.291-5.828 2.29-5.573 2.29-5.321 2.291-5.067 2.29-4.814 2.29-4.56 2.291-4.308 2.29-4.054 2.29-3.8 2.291-3.548 2.29-3.294 2.29-3.041 2.29-2.788 2.291-2.534 2.29-2.28 2.29-2.029 2.291-1.774 2.29-1.521 2.29-1.268 2.291-1.014 2.29-.761 2.29-.508 2.291-.255h2.29l2.29.251 2.291.506 2.29.759 2.29 1.011 2.29 1.266 2.291 1.518 2.29 1.772 2.29 2.025 2.291 2.279 2.29 2.532 2.29 2.785 2.291 3.038 2.29 3.292 2.29 3.545 2.291 3.798 2.29 4.052 2.29 4.305 2.29 4.558 2.291 4.812 2.29 5.064 2.29 5.318 2.291 5.572 2.29 5.825 2.29 6.078 2.291 6.331 2.29 6.585 2.29 6.838 2.291 7.09 2.29 7.346"/><path fill="none" stroke="red" stroke-width=".8" d="M3.614 64.33h54.06v-92.613H3.614Z"/><path stroke="none" d="M32.164-45.924c0-.548-.68-.992-1.52-.992s-1.52.444-1.52.992.68.992 1.52.992 1.52-.444 1.52-.992m-1.52 0"/><g stroke="none"><text x="-63.961" y="64.33" font-family="cmmi10" font-size="10" transform="translate(74.56 -117.287)">V</text><text x="-54.239" y="56.23" font-family="cmex10" font-size="10" transform="translate(74.56 -117.287)">¡</text><text x="-48.455" y="60.393" font-family="cmr7" font-size="7" transform="translate(74.56 -117.287)">7</text><path d="M26.104-55.657h3.986v.4h-3.986z"/><text x="-48.455" y="67.778" font-family="cmr7" font-size="7" transform="translate(74.56 -117.287)">2</text><text x="-43.269" y="64.33" font-family="cmmi10" font-size="10" transform="translate(74.56 -117.287)">;</text><text x="-37.625" y="60.393" font-family="cmr7" font-size="7" transform="translate(74.56 -117.287)">25</text><path d="M36.934-55.657h7.972v.4h-7.972z"/><text x="-35.632" y="67.778" font-family="cmr7" font-size="7" transform="translate(74.56 -117.287)">4</text><text x="-28.453" y="56.23" font-family="cmex10" font-size="10" transform="translate(74.56 -117.287)">¢</text></g><path stroke="none" d="M5.134-28.283c0-.548-.68-.992-1.52-.992s-1.52.444-1.52.992.68.992 1.52.992 1.52-.444 1.52-.992m-1.52 0"/><text x="-63.961" y="64.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(53.25 -96.146)">M</text><path stroke="none" d="M59.194-28.283c0-.548-.68-.992-1.52-.992s-1.52.444-1.52.992.68.992 1.52.992 1.52-.444 1.52-.992m-1.52 0"/><text x="-63.961" y="64.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(125.168 -96.146)">N</text><path stroke="none" d="M-35.6 64.33c0-.48-.596-.868-1.33-.868s-1.33.388-1.33.868.595.868 1.33.868c.734 0 1.33-.389 1.33-.868m-1.33 0"/><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="translate(30.563 9.977)">1</text><path stroke="none" d="M99.55 64.33c0-.48-.596-.868-1.33-.868s-1.33.388-1.33.868.595.868 1.33.868c.734 0 1.33-.389 1.33-.868m-1.33 0"/><text x="-63.961" y="64.33" stroke="none" font-family="cmr10" font-size="10" transform="translate(159.68 9.977)">6</text></g></svg>
</figure>

## b) Rettangolo di perimetro massimo

Consideriamo il rettangolo inscritto nel segmento parabolico (limitato dalla parabola e dall'asse $x$ per $1 \le x \le 6$), con un lato sull'asse delle ascisse e simmetrico rispetto all'asse $x = \frac{7}{2}$ della parabola. Detto $x$ (con $1 \le x \le \frac{7}{2}$) l'ascissa del vertice di sinistra che sta sulla parabola, il vertice di destra ha ascissa $7 - x$, e dunque la base misura

$$AB = (7 - x) - x = 7 - 2x,$$

mentre l'altezza è $AD = -x^2 + 7x - 6$. Il semiperimetro vale

$$p = (7 - 2x) + (-x^2 + 7x - 6) = -x^2 + 5x + 1.$$

Si tratta di una parabola con concavità verso il basso, quindi $p$ è massimo nel vertice, di ascissa

$$x = \frac{5}{2}.$$

Per $x = \frac{5}{2}$ si ottengono le misure dei lati

$$AB = 7 - 2\cdot\tfrac{5}{2} = 2, \qquad AD = -\left(\tfrac{5}{2}\right)^2 + 7\cdot\tfrac{5}{2} - 6 = \frac{21}{4}.$$

## c) Angolo fra le tangenti in $M$ ed $N$

I due vertici del rettangolo che stanno sulla parabola sono

$$M = \left(\frac{5}{2};\frac{21}{4}\right), \qquad N = \left(\frac{9}{2};\frac{21}{4}\right),$$

essendo $N$ il simmetrico di $M$ rispetto all'asse $x = \frac{7}{2}$ (infatti $x_N = 7 - \frac{5}{2} = \frac{9}{2}$). Poiché $y' = -2x + 7$, i coefficienti angolari delle tangenti sono

$$m = y'\!\left(\tfrac{5}{2}\right) = 2, \qquad m' = y'\!\left(\tfrac{9}{2}\right) = -2.$$

L'angolo acuto $\alpha$ formato dalle due tangenti ha per tangente

$$\tan\alpha = \left|\frac{m - m'}{1 + m\,m'}\right| = \left|\frac{2 - (-2)}{1 + 2\cdot(-2)}\right| = \left|\frac{4}{-3}\right| = \frac{4}{3},$$

da cui

$$\alpha = \arctan\frac{4}{3} \approx 53{,}13^\circ \approx 53^\circ\,08'.$$

## d) Rapporto tra i volumi di rotazione

Ruotando attorno all'asse $x$, il segmento parabolico genera un solido di volume

$$V_1 = \pi \int_1^6 \left(-x^2 + 7x - 6\right)^2 dx = \pi \int_1^6 \left(x^4 - 14x^3 + 61x^2 - 84x + 36\right) dx.$$

Una primitiva è $\frac{x^5}{5} - \frac{7}{2}x^4 + \frac{61}{3}x^3 - 42x^2 + 36x$; valutando tra $1$ e $6$ si ottiene

$$V_1 = \frac{625}{6}\,\pi.$$

Il rettangolo di perimetro massimo, ruotando attorno all'asse $x$, genera un cilindro di raggio $\frac{21}{4}$ (l'altezza $AD$) e altezza $2$ (la base $MN$):

$$V_2 = \pi \left(\frac{21}{4}\right)^2 \cdot 2 = \frac{441}{8}\,\pi.$$

Il rapporto tra i due volumi è quindi

$$\frac{V_1}{V_2} = \frac{\frac{625}{6}\,\pi}{\frac{441}{8}\,\pi} = \frac{625}{6}\cdot\frac{8}{441} = \frac{2500}{1323}.$$

*Fonte:* [📄 PDF p.100](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
