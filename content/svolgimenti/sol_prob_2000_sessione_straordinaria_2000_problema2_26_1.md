

**Problema:** [[Problemi/prob_2000_sessione_straordinaria_2000_problema2_26_1|2000 Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2000_sessione_straordinaria_2000_problema2_26|2000 Straordinaria — Problema 2]]

È assegnato un tronco di cono il cui volume è doppio di quello di una sfera di raggio $r$. Si chiede di stabilire se il tronco può essere circoscritto alla sfera e, in caso affermativo, di esprimere i raggi delle basi in funzione di $r$; si generalizza poi ponendo uguale a $k$ il rapporto tra il volume del tronco e quello della sfera, discutendo il caso $k=\dfrac{3}{2}$.

## a)

Se il tronco di cono è circoscritto alla sfera di raggio $r$, la sfera è tangente alle due basi, dunque l'altezza del tronco è

$$h = 2r.$$

Consideriamo la sezione ottenuta con un piano contenente l'asse del cono: si ottiene il trapezio isoscele $ABCD$ circoscritto alla circonferenza (sezione della sfera), di centro $O$ e raggio $r$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="284.922" height="227.129" viewBox="-72 -72 213.692 170.347"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#00f" stroke-width=".8" d="M91.188 13.246c0-31.429-25.477-56.906-56.905-56.906s-56.906 25.477-56.906 56.906S2.854 70.15 34.283 70.15s56.905-25.477 56.905-56.905Zm-56.905 0"/><path fill="none" stroke-width=".8" d="M-57.904 70.151h184.373L69.564-43.659H-1Z"/><path stroke="none" d="M35.283 13.246a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 0"/><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 3.417)">O</text><path fill="none" stroke-dasharray="3.0,3.0" d="M34.283 70.151v-113.81"/><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-103.22 67.272)">A</text><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(95.72 67.272)">B</text><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(38.814 -60.438)">D</text><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-46.677 -60.438)">C</text><path stroke="none" d="M35.283 70.151a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 0"/><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.604 67.272)">K</text><path stroke="none" d="M35.283-43.66a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 0"/><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.562 -60.438)">H</text><text x="34.283" y="13.246" stroke="none" font-family="cmmi10" font-size="10" transform="translate(23.45 2.153)">r</text><path fill="none" d="M-57.504 84.377h183.573"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-55.624 86.777c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4M124.19 81.977c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><g stroke="none" font-size="10"><text x="34.283" y="13.246" font-family="cmr10" transform="translate(-6.335 81.498)">2</text><text x="39.283" y="13.246" font-family="cmmi10" transform="translate(-6.335 81.498)">R</text></g><path fill="none" d="M-.599-57.886h69.763"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M1.281-55.486c-.38-1.44-1.226-2.12-2.08-2.4.854-.28 1.7-.96 2.08-2.4M67.284-60.286c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><g stroke="none"><text x="34.283" y="13.246" font-family="cmr10" font-size="10" transform="translate(-7.738 -74.665)">2</text><text x="39.283" y="13.246" font-family="cmmi10" font-size="10" transform="translate(-7.738 -74.665)">R</text><text x="46.953" y="9.617" font-family="cmsy7" font-size="7" transform="translate(-7.738 -74.665)">0</text></g></g></svg>
</figure>

Detti $R$ ed $R'$ i raggi delle due basi (rispettivamente maggiore e minore), il triangolo $BOC$ è rettangolo in $O$; per il secondo Teorema di Euclide applicato all'altezza $OK$ relativa all'ipotenusa si ha

$$r^2 = R\cdot R'.$$

Posto $R = x$, con $r \le x \le 2r$, risulta quindi

$$R' = \frac{r^2}{x}.$$

Il volume del tronco di cono, di altezza $h = 2r$, è

$$V_{\text{tronco}} = \frac{\pi h}{3}\left(R^2 + R'^2 + R\,R'\right) = \frac{2\pi r}{3}\left(x^2 + \frac{r^4}{x^2} + r^2\right).$$

Il volume della sfera è $V_{\text{sfera}} = \dfrac{4}{3}\pi r^3$. La condizione $V_{\text{tronco}} = 2\,V_{\text{sfera}}$ diventa

$$\frac{2\pi r}{3}\left(x^2 + \frac{r^4}{x^2} + r^2\right) = \frac{8}{3}\pi r^3,$$

da cui, dividendo e moltiplicando per $x^2$,

$$x^2 + \frac{r^4}{x^2} + r^2 = 4r^2 \quad\Rightarrow\quad x^4 - 3r^2 x^2 + r^4 = 0.$$

Risolvendo rispetto a $x^2$:

$$x^2 = \frac{3r^2 \pm r^2\sqrt{5}}{2} = r^2\cdot\frac{3\pm\sqrt{5}}{2}.$$

La soluzione con il segno meno dà $x = r\sqrt{\dfrac{3-\sqrt{5}}{2}} \approx 0{,}62\,r < r$, non accettabile perché deve essere $x \ge r$. Resta dunque

$$x = r\sqrt{\frac{3+\sqrt{5}}{2}} = r\cdot\frac{\sqrt{5}+1}{2},$$

che è la sezione aurea di $2r$. Il raggio della base minore è allora

$$R' = \frac{r^2}{x} = \frac{r^2}{\,r\cdot\frac{\sqrt{5}+1}{2}\,} = r\cdot\frac{2}{\sqrt{5}+1} = r\cdot\frac{\sqrt{5}-1}{2},$$

cioè la sezione aurea di $r$. In sintesi, il tronco di volume doppio della sfera è circoscrittibile e ha

$$R = r\cdot\frac{\sqrt{5}+1}{2} \approx 1{,}62\,r, \qquad R' = r\cdot\frac{\sqrt{5}-1}{2} \approx 0{,}62\,r, \qquad h = 2r.$$

## b)

Generalizziamo ponendo $V_{\text{tronco}} = k\,V_{\text{sfera}}$. Ripetendo il calcolo precedente si ottiene

$$x^2 + \frac{r^4}{x^2} + r^2 = 2k\,r^2 \quad\Rightarrow\quad x^4 + (1 - 2k)\,r^2 x^2 + r^4 = 0.$$

Il discriminante rispetto a $x^2$ è

$$\Delta = r^4(1-2k)^2 - 4r^4 = r^4\left(4k^2 - 4k - 3\right).$$

La condizione di risolubilità $\Delta \ge 0$ equivale a $4k^2 - 4k - 3 \ge 0$, cioè

$$k \le -\frac{1}{2} \quad\text{vel}\quad k \ge \frac{3}{2}.$$

Poiché $k > 0$, il tronco di volume $k$ volte quello della sfera è circoscrittibile **se e solo se**

$$k \ge \frac{3}{2}.$$

Nel caso limite $k = \dfrac{3}{2}$ si ha $\Delta = 0$ e la soluzione è unica:

$$x^4 - 2r^2 x^2 + r^4 = 0 \quad\Rightarrow\quad (x^2 - r^2)^2 = 0 \quad\Rightarrow\quad x = r.$$

Allora $R = R' = r$: il tronco degenera nel **cilindro** di raggio di base $r$ e altezza $2r$ circoscritto alla sfera.

*Fonte:* [📄 PDF p.26](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/geometria #cluster/geometria
