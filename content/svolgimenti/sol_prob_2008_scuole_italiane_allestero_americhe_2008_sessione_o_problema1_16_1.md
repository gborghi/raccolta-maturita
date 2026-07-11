

**Problema:** [[Problemi/prob_2008_scuole_italiane_allestero_americhe_2008_sessione_o_problema1_16_1|2008 Estero Americhe Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2008_scuole_italiane_allestero_americhe_2008_sessione_o_problema1_16|2008 Estero Americhe Ordinaria — Problema 1]]

Nel piano è fissata la semicirconferenza $\Gamma$ di centro $C$ e diametro $AB = 2$ (quindi di raggio $1$).

## a)

Si cerca un punto $P$ su $\Gamma$ tale che, detta $Q$ la proiezione ortogonale di $P$ sulla tangente in $B$ a $\Gamma$, sia $AP + PQ = k$, con $k$ parametro reale non nullo.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="253.267" height="111.453" viewBox="-72 -72 189.95 83.59"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-57.893-2.38h108.12M50.227-2.38c0-29.856-24.203-54.06-54.06-54.06s-54.06 24.204-54.06 54.06M50.227 8.432v-78.386M-57.904-2.38 27.18-46.671M27.181-46.672H50.24"/><path fill="none" stroke-dasharray="3.0,3.0" d="M27.181-46.672V-2.38"/><path stroke="none" d="M28.533-46.672a1.351 1.351 0 1 0-2.703 0 1.351 1.351 0 0 0 2.703 0m-1.352 0"/><text x="-3.833" y="-2.379" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-65.104 10.366)">A</text><text x="-3.833" y="-2.379" stroke="none" font-family="cmmi10" font-size="10" transform="translate(57.604 10.366)">B</text><text x="-3.833" y="-2.379" stroke="none" font-family="cmmi10" font-size="10" transform="translate(27.11 -47.826)">P</text><text x="-3.833" y="-2.379" stroke="none" font-family="cmmi10" font-size="10" transform="translate(57.604 -41.848)">Q</text><text x="-3.833" y="-2.379" stroke="none" font-family="cmmi10" font-size="10" transform="translate(26.452 10.366)">H</text><g stroke="none" font-size="10"><text x="-3.833" y="-2.379" font-family="cmr10" transform="translate(57.593 -59.724)">tangen</text><text x="25.334" y="-2.379" font-family="cmr10" transform="translate(57.593 -59.724)">te</text><text x="37.001" y="-2.379" font-family="cmr10" transform="translate(57.593 -59.724)">in</text><text x="48.667" y="-2.379" font-family="cmmi10" transform="translate(57.593 -59.724)">B</text></g></g></svg>
</figure>

Poniamo $AP = x$, con $0 \le x \le 2$. Poiché $P$ appartiene alla semicirconferenza di diametro $AB$, il triangolo $APB$ è rettangolo in $P$. Detto $H$ il piede della perpendicolare condotta da $P$ ad $AB$, per il primo teorema di Euclide si ha

$$AP^2 = AB \cdot AH \quad\Rightarrow\quad x^2 = 2\,AH \quad\Rightarrow\quad AH = \frac{x^2}{2}.$$

La distanza $PQ$ di $P$ dalla tangente in $B$ (perpendicolare ad $AB$) è uguale a $HB$, cioè

$$PQ = HB = AB - AH = 2 - \frac{x^2}{2}.$$

La condizione $AP + PQ = k$ diventa quindi

$$x + 2 - \frac{x^2}{2} = k, \qquad 0 \le x \le 2 .$$

Poniamo $y = -\dfrac{x^2}{2} + x + 2$ e studiamo le intersezioni del suo grafico con la retta $y = k$ nell'intervallo $[0,2]$. La parabola ha concavità rivolta verso il basso, vertice in $V\left(1;\ \dfrac{5}{2}\right)$ e assume agli estremi il valore $y(0) = y(2) = 2$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="212.292" height="211.642" viewBox="-72 -72 159.219 158.732"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 73.151H55.567"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M53.687 70.751c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-59.266" y="73.151" stroke="none" font-family="cmmi10" font-size="10" transform="translate(118.766 2.153)">x</text><path fill="none" d="M-59.266 85.955v-144.71"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.666-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-59.266" y="73.151" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -137.783)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.266-12.207 1.446-1.422 1.447-1.373 1.446-1.324 1.446-1.274 1.447-1.227 1.446-1.176 1.447-1.128 1.446-1.079 1.446-1.03 1.447-.98 1.446-.932 1.446-.882 1.447-.834 1.446-.785 1.447-.736 1.446-.686 1.446-.638 1.447-.588 1.446-.54 1.447-.49 1.446-.442 1.446-.392 1.447-.344 1.446-.294 1.446-.246 1.447-.196 1.446-.148 1.447-.098 1.446-.05h1.446l1.447.049 1.446.097 1.447.148 1.446.195 1.446.245 1.447.294 1.446.342 1.446.392 1.447.441 1.446.49 1.447.538 1.446.588 1.446.637 1.447.686 1.446.735 1.447.784 1.446.833 1.446.882 1.447.93 1.446.98 1.446 1.03 1.447 1.077 1.446 1.128 1.447 1.176 1.446 1.225 1.446 1.274 1.447 1.323 1.446 1.372 1.447 1.422"/><g fill="red" stroke="red"><path fill="none" d="M-72.07-25.01H55.967"/><g fill="red" stroke="none" font-size="10"><text x="-59.266" y="73.151" font-family="cmmi10" transform="translate(118.766 -95.662)">y</text><text x="-51.227" y="73.151" font-family="cmr10" transform="translate(118.766 -95.662)">=</text><text x="-40.671" y="73.151" font-family="cmmi10" transform="translate(118.766 -95.662)">k</text></g></g><path stroke="none" d="M-15.307-33.546a1.28 1.28 0 1 0-2.56 0 1.28 1.28 0 0 0 2.56 0m-1.28 0"/><g stroke="none"><text x="-59.266" y="73.151" font-family="cmmi10" font-size="10" transform="translate(46.212 -113.73)">V</text><text x="-49.544" y="65.051" font-family="cmex10" font-size="10" transform="translate(46.212 -113.73)">¡</text><text x="-44.961" y="73.151" font-family="cmr10" font-size="10" transform="translate(46.212 -113.73)">1</text><text x="-39.961" y="73.151" font-family="cmmi10" font-size="10" transform="translate(46.212 -113.73)">;</text><text x="-34.316" y="69.214" font-family="cmr7" font-size="7" transform="translate(46.212 -113.73)">5</text><path d="M11.896-43.28h3.986v.4h-3.986z"/><text x="-34.316" y="76.6" font-family="cmr7" font-size="7" transform="translate(46.212 -113.73)">2</text><text x="-29.13" y="65.051" font-family="cmex10" font-size="10" transform="translate(46.212 -113.73)">¢</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-59.266-12.207h85.358"/><text x="-59.266" y="73.151" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -82.136)">2</text><text x="-59.266" y="73.151" stroke="none" font-family="cmr10" font-size="10" transform="translate(82.858 9.977)">2</text></g></svg>
</figure>

Risolvendo $-\dfrac{x^2}{2} + x + 2 = k$ si ottiene

$$x = 1 \pm \sqrt{5 - 2k}.$$

Discutendo le radici nell'intervallo $[0,2]$:

- per $2 \le k < \dfrac{5}{2}$ entrambe le soluzioni appartengono a $[0,2]$: il problema ammette **due** posizioni di $P$;
- per $k = \dfrac{5}{2}$ le due soluzioni coincidono in $x = 1$: **una sola** posizione di $P$ (punto medio dell'arco);
- per $k < 2$ oppure $k > \dfrac{5}{2}$ non vi sono soluzioni accettabili.

In conclusione il problema è risolubile per $2 \le k \le \dfrac{5}{2}$.

## b)

Si cerca il rettangolo di area massima inscritto in $\Gamma$, con un lato sul diametro $AB$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="190.84" height="94.406" viewBox="-72 -72 143.13 70.805"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-57.904-15.165h113.81M55.907-15.165C55.907-46.593 30.43-72.07-1-72.07s-56.905 25.477-56.905 56.905"/><path fill="none" stroke="red" stroke-width=".8" d="M-41.23-15.165h80.464v-40.232h-80.465Z"/><text x="-.999" y="-15.165" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-67.938 10.366)">A</text><text x="-.999" y="-15.165" stroke="none" font-family="cmmi10" font-size="10" transform="translate(60.438 10.366)">B</text><text x="-.999" y="-15.165" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><text x="-.999" y="-15.165" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.301 10.366)">G</text><text x="-.999" y="-15.165" stroke="none" font-family="cmmi10" font-size="10" transform="translate(43.765 -36.816)">H</text><text x="-.999" y="-15.165" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-51.724 -36.816)">E</text><text x="-.999" y="-15.165" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-44.142 10.366)">F</text></g></svg>
</figure>

Detti $E,F,G,H$ i vertici del rettangolo, poniamo $BG = x$, con $0 \le x \le 1$; per simmetria la base vale $FG = 2 - 2x$. Il vertice superiore appartiene alla semicirconferenza, quindi per il secondo teorema di Euclide l'altezza $HG$ soddisfa

$$HG^2 = AG \cdot GB = (2 - x)\,x .$$

L'area del rettangolo è dunque

$$\text{Area}(EFGH) = FG \cdot HG = (2 - 2x)\sqrt{x(2 - x)} .$$

L'area è massima quando lo è il suo quadrato; studiamo perciò

$$y = (2 - 2x)^2\,x(2 - x) = (4 - 8x + 4x^2)(2x - x^2), \qquad 0 \le x \le 1 .$$

La funzione è continua e derivabile in un intervallo chiuso e limitato: per il teorema di Weierstrass ammette massimo assoluto. Agli estremi essa vale $0$. La derivata prima è

$$y' = -8(x - 1)(2x^2 - 4x + 1),$$

che si annulla per $x = 1$ (dove $y = 0$) e per $2x^2 - 4x + 1 = 0$, cioè $x = \dfrac{2 \pm \sqrt{2}}{2}$. Poiché $\dfrac{2 + \sqrt{2}}{2} > 1$, l'unico valore accettabile è

$$x = \frac{2 - \sqrt{2}}{2} = 1 - \frac{\sqrt{2}}{2},$$

in corrispondenza del quale $y > 0$. Si ottiene allora

$$FG = 2 - 2x = \sqrt{2}, \qquad HG = \sqrt{x(2 - x)} = \sqrt{\frac{2 - \sqrt{2}}{2}\cdot\frac{2 + \sqrt{2}}{2}} = \sqrt{\frac{1}{2}} = \frac{\sqrt{2}}{2}.$$

Il rettangolo di area massima ha quindi base $\sqrt{2}$ e altezza $\dfrac{\sqrt{2}}{2}$: la base è doppia dell'altezza e l'area massima vale

$$\text{Area}_{\max} = \sqrt{2}\cdot\frac{\sqrt{2}}{2} = 1 .$$

## c)

Si calcola il volume del solido che ha per base il semicerchio delimitato da $\Gamma$ e le cui sezioni con piani ortogonali ad $AB$ sono tutte quadrate.

Fissato un sistema di assi cartesiani con origine nel centro e asse $x$ lungo il diametro $AB$, la semicirconferenza ha equazione $x^2 + y^2 = 1$. Alla quota $x$ il lato del quadrato-sezione è $y = \sqrt{1 - x^2}$, quindi la sua area è

$$A(x) = y^2 = 1 - x^2 .$$

Il volume richiesto vale allora

$$V = \int_{-1}^{1} (1 - x^2)\,dx = 2\int_{0}^{1} (1 - x^2)\,dx = 2\left[\,x - \frac{x^3}{3}\,\right]_{0}^{1} = 2\left(1 - \frac{1}{3}\right) = \frac{4}{3}.$$

Il solido ha dunque volume $V = \dfrac{4}{3}$ (unità di volume).

*Fonte:* [📄 PDF p.16](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
