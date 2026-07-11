

**Problema:** [[Problemi/prob_2007_sessione_ordinaria_2007_prova_7_2|2007 Ordinaria — Prova — Problema 2]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_7|2007 Ordinaria — Prova]]

Si consideri un cerchio di centro $O$ e raggio $r$.

## a) Triangolo isoscele inscritto di area massima

Consideriamo un triangolo isoscele $ABC$ inscritto nel cerchio, con $AB=AC$. Per simmetria l'asse del triangolo passa per il centro $O$; poniamo il vertice $A$ nell'estremo superiore del diametro verticale, $A=(0,\,r)$, e la base $BC$ orizzontale, con $B=(-x,\,y)$ e $C=(x,\,y)$ punti della circonferenza, così che

$$x=\sqrt{r^2-y^2}.$$

La base misura $BC=2x$ e l'altezza relativa alla base è $r-y$, quindi l'area vale

$$\mathcal{A}(y)=\frac{1}{2}\cdot 2x\cdot(r-y)=(r-y)\sqrt{r^2-y^2},\qquad -r\le y\le r.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="184.15" height="185.467" viewBox="-72 -72 138.113 139.101"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M59.495 4.034c0-34.571-28.025-62.596-62.597-62.596-34.571 0-62.596 28.025-62.596 62.596 0 34.572 28.025 62.597 62.596 62.597 34.572 0 62.597-28.025 62.597-62.597Zm-62.597 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-3.102-58.57-54.215 93.907H51.114Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-3.102 4.034V-58.57M-57.317 35.337H51.114"/><path stroke="none" d="M-1.452 4.034a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-3.102" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(5.098 17.802)">r</text><text x="-3.102" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.75 -66.138)">A</text><text x="-3.102" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-65.835 41.669)">B</text><text x="-3.102" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(57.749 41.669)">C</text><text x="-3.102" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -3.533)">O</text></g></svg>
</figure>

Conviene massimizzare $\mathcal{A}^2$:

$$f(y)=\mathcal{A}^2=(r-y)^2\,(r^2-y^2)=(r-y)^3(r+y).$$

Derivando,

$$f'(y)=-3(r-y)^2(r+y)+(r-y)^3=(r-y)^2\big[-3(r+y)+(r-y)\big]=(r-y)^2\,(-2r-4y).$$

Nell'intervallo $-r<y<r$ si ha $(r-y)^2>0$, dunque $f'(y)=0$ quando $-2r-4y=0$, cioè

$$y=-\frac{r}{2}.$$

Poiché $f'$ è positiva per $y<-\dfrac{r}{2}$ e negativa per $y>-\dfrac{r}{2}$, questo è un punto di massimo. In corrispondenza:

$$x=\sqrt{r^2-\frac{r^2}{4}}=\frac{\sqrt{3}}{2}\,r,\qquad BC=2x=\sqrt{3}\,r,\qquad r-y=\frac{3}{2}\,r.$$

L'area massima è quindi

$$\mathcal{A}_{\max}=\frac{\sqrt{3}}{2}\,r\cdot\frac{3}{2}\,r=\frac{3\sqrt{3}}{4}\,r^2.$$

Il lato $BC=\sqrt{3}\,r$ è proprio il lato del triangolo equilatero inscritto in una circonferenza di raggio $r$: il triangolo isoscele di area massima è quindi il **triangolo equilatero**.

## b) Area del poligono regolare inscritto e circoscritto

Un poligono regolare di $n$ lati inscritto nel cerchio si scompone in $n$ triangoli isosceli aventi il vertice in $O$, i due lati uguali di lunghezza $r$ e angolo al centro $\dfrac{2\pi}{n}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="182.63" height="182.63" viewBox="-72 -72 136.973 136.973"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M64.503-3.784c0-37.714-30.573-68.286-68.287-68.286S-72.07-41.498-72.07-3.784s30.572 68.287 68.286 68.287S64.503 33.93 64.503-3.784Zm-68.287 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-3.784-3.784 43.903-52.32v104.64Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-3.784-3.784h68.287"/><path stroke="none" d="M-1.984-3.784a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none"><text x="-3.784" y="-3.784" font-family="cmmi10" font-size="10" transform="translate(47.435 -57.353)">P</text><text x="2.637" y="-2.284" font-family="cmr7" font-size="7" transform="translate(47.435 -57.353)">1</text></g><g stroke="none"><text x="-3.784" y="-3.784" font-family="cmmi10" font-size="10" transform="translate(47.435 62.686)">P</text><text x="2.637" y="-2.284" font-family="cmr7" font-size="7" transform="translate(47.435 62.686)">2</text></g><text x="-3.784" y="-3.784" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 3.417)">O</text><g stroke="none"><text x="-2.584" y="-7.721" font-family="cmr7" font-size="7" transform="translate(19.95 2.5)">2</text><text x="1.403" y="-7.721" font-family="cmmi7" font-size="7" transform="translate(19.95 2.5)">¼</text><path d="M17.367-3.984h8.914v.4h-8.914z"/><text x="-.598" y="-.335" font-family="cmmi7" font-size="7" transform="translate(19.95 2.5)">n</text></g><text x="-3.784" y="-3.784" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.87 -23.455)">r</text><text x="-3.784" y="-3.784" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.87 27.76)">r</text></g></svg>
</figure>

L'area di ciascuno di questi triangoli è $\dfrac{1}{2}\,r\cdot r\cdot\sin\dfrac{2\pi}{n}$, quindi

$$S_n=\frac{1}{2}\,n\,r^2\sin\frac{2\pi}{n}.$$

Per il poligono regolare **circoscritto** ciascuno degli $n$ triangoli ha per altezza l'apotema, che coincide con il raggio $r$, e angolo al vertice $\dfrac{2\pi}{n}$. La semibase è allora $r\tan\dfrac{\pi}{n}$, per cui l'area di un triangolo vale $\dfrac{1}{2}\cdot 2r\tan\dfrac{\pi}{n}\cdot r=r^2\tan\dfrac{\pi}{n}$ e l'area totale è

$$S'_n=n\,r^2\tan\frac{\pi}{n}.$$

## c) Limite per $n\to\infty$

All'aumentare del numero di lati il poligono tende a riempire il cerchio. Ponendo $t=\dfrac{2\pi}{n}$ (con $t\to 0^+$ quando $n\to\infty$):

$$\lim_{n\to\infty} S_n=\lim_{n\to\infty}\frac{1}{2}\,n\,r^2\sin\frac{2\pi}{n}
=\frac{r^2}{2}\lim_{n\to\infty}\frac{\sin\frac{2\pi}{n}}{\frac{2\pi}{n}}\cdot 2\pi
=\frac{r^2}{2}\cdot 2\pi=\pi r^2,$$

avendo usato il limite notevole $\displaystyle\lim_{t\to 0}\frac{\sin t}{t}=1$. In modo del tutto analogo, poiché $\displaystyle\lim_{t\to 0}\frac{\tan t}{t}=1$,

$$\lim_{n\to\infty} S'_n=\lim_{n\to\infty} n\,r^2\tan\frac{\pi}{n}=r^2\lim_{n\to\infty}\frac{\tan\frac{\pi}{n}}{\frac{\pi}{n}}\cdot\pi=\pi r^2.$$

Entrambe le successioni tendono all'area del cerchio $\pi r^2$: quella dei poligoni inscritti per difetto e quella dei poligoni circoscritti per eccesso.

## d) La quadratura del cerchio

Il problema della *quadratura del cerchio* consiste nel costruire, con **riga e compasso** in un numero finito di passi, un quadrato avente area uguale a quella di un cerchio dato. Un cerchio di raggio $r$ ha area $\pi r^2$, quindi il lato del quadrato cercato dovrebbe misurare $r\sqrt{\pi}$: il problema equivale a costruire con riga e compasso un segmento di lunghezza $\sqrt{\pi}$ (e quindi $\pi$) a partire da un segmento unitario.

Le lunghezze costruibili con riga e compasso sono soltanto numeri algebrici (di grado potenza di $2$). Nel $1882$ Lindemann dimostrò che $\pi$ è un numero **trascendente**, cioè non è radice di alcun polinomio a coefficienti razionali: di conseguenza $\pi$, e con esso $\sqrt{\pi}$, non è costruibile. La quadratura del cerchio con riga e compasso è dunque un problema **impossibile**. Resta invece perfettamente risolubile se si ammettono altri strumenti (per esempio curve trascendenti come la quadratrice), oppure nel senso puramente numerico dell'approssimazione dell'area.

*Fonte:* [📄 PDF p.7](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/geometria #cluster/geometria
