

**Problema:** [[Problemi/prob_2002_suppletiva_pni_2002_problema2_49_1|2002 Suppletiva PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_problema2_49|2002 Suppletiva PNI — Problema 2]]

È data la sfera $S$ di centro $O$ e raggio $r$. Si richiede il cono di volume minimo circoscritto a $S$, il cono di volume massimo inscritto in $S$, la capacità complessiva dei due coni (con $r=1$ m), l'angolo del settore circolare sviluppo della superficie laterale del primo cono e, infine, con un metodo numerico, l'angolo di apertura dello stesso cono.

In ogni caso indichiamo con $\rho$ il raggio di base del cono, con $h$ la sua altezza e con
$$V=\frac{1}{3}\pi\rho^2 h$$
il suo volume.

## a) Cono $C$ circoscritto


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="119.082" height="207.04" viewBox="-72 -72 89.311 155.28"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="m-71.87 67.497 44.256-125.193L16.64 67.497ZM-71.87 67.497h88.511"/><path fill="none" stroke="#00f" stroke-width=".8" d="M3.684 36.199C3.684 18.913-10.33 4.9-27.614 4.9c-17.286 0-31.299 14.012-31.299 31.298S-44.9 67.497-27.614 67.497c17.285 0 31.298-14.013 31.298-31.298Zm-31.298 0"/><path stroke="none" d="M-26.294 36.199a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0m-1.32 0"/><text x="-27.614" y="67.497" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 -27.882)">O</text><text x="-27.614" y="67.497" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.931 -129.6)">C</text><text x="-27.614" y="67.497" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.562 12.18)">H</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-27.614 67.497V-57.696"/><g stroke="none" font-size="10"><text x="-27.614" y="67.497" font-family="cmmi10" transform="translate(3.533 -71.643)">h</text><text x="-19.075" y="67.497" font-family="cmr10" transform="translate(3.533 -71.643)">=</text><text x="-8.52" y="67.497" font-family="cmr10" transform="translate(3.533 -71.643)">4</text><text x="-3.52" y="67.497" font-family="cmmi10" transform="translate(3.533 -71.643)">r</text></g><text x="-27.614" y="67.497" stroke="none" font-family="cmmi10" font-size="10" transform="translate(19.324 7.839)">½</text></g></svg>
</figure>

Considerando la sezione del cono con un piano passante per il suo asse, la sfera si riduce al cerchio inscritto nel triangolo isoscele. Per similitudine tra i triangoli rettangoli che si formano si ottiene, con $h>2r$,
$$\rho^2=\frac{r^2 h}{h-2r},$$
da cui il volume in funzione dell'altezza:
$$V(h)=\frac{\pi r^2 h^2}{3\,(h-2r)}.$$

Derivando:
$$V'(h)=\frac{\pi r^2}{3}\cdot\frac{h\,(h-4r)}{(h-2r)^2}.$$
Poiché $h>2r$, il segno di $V'(h)$ è quello di $h-4r$: il volume decresce per $2r<h<4r$ e cresce per $h>4r$, dunque
$$h=4r$$
è punto di minimo assoluto. In corrispondenza $\rho^2=\dfrac{r^2\cdot 4r}{4r-2r}=2r^2$, cioè $\rho=r\sqrt{2}$, e il volume minimo è
$$V_C=\frac{8}{3}\pi r^3.$$

## b) Cono $C'$ inscritto


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="127.916" height="140.036" viewBox="-72 -72 95.937 105.027"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#00f" stroke-width=".8" d="M19.179-13.167c0-25.143-20.382-45.525-45.524-45.525-25.143 0-45.525 20.382-45.525 45.525s20.382 45.524 45.525 45.524 45.524-20.382 45.524-45.524Zm-45.524 0"/><path stroke="none" d="M-24.745-13.167a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="-26.345" y="-13.167" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 3.417)">O</text><path fill="none" stroke-width=".8" d="m-69.275 1.992 42.93-60.684L16.584 1.992ZM-69.275 1.992h85.859"/><text x="-26.345" y="-13.167" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -48.936)">V</text><text x="-26.345" y="-13.167" stroke="none" font-family="cmmi10" font-size="10" transform="translate(39.18 26.179)">A</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-26.345-58.692V1.992"/><text x="-26.345" y="-13.167" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-17.31 23.903)">H</text></g></svg>
</figure>

Nella sezione con un piano passante per il vertice $V$ e per l'asse, il triangolo è inscritto nel cerchio massimo della sfera. Detta $x=h$ l'altezza $VH$, con $0<h<2r$, per il secondo teorema di Euclide sul triangolo rettangolo inscritto nella semicirconferenza si ha
$$\overline{AH}^2=\overline{VH}\cdot\overline{HC}=h\,(2r-h),$$
cioè $\rho^2=h(2r-h)$. Il volume vale allora
$$V(h)=\frac{1}{3}\pi\,h(2r-h)\cdot h=\frac{1}{3}\pi\,h^2(2r-h).$$

$V$ è massimo quando lo è $y=h^2(2r-h)$; derivando,
$$\frac{dy}{dh}=\frac{\pi h}{3}\,(4r-3h)=0\;\Rightarrow\;h=\frac{4r}{3}.$$
In corrispondenza $\rho^2=\dfrac{4r}{3}\left(2r-\dfrac{4r}{3}\right)=\dfrac{8r^2}{9}$ e il volume massimo è
$$V_{C'}=\frac{32}{81}\pi r^3.$$

## c) Capacità complessiva con $r=1$ m

Sommando i due volumi:
$$V_C+V_{C'}=\left(\frac{8}{3}+\frac{32}{81}\right)\pi\,r^3=\frac{248}{81}\pi\,r^3.$$
Con $r=1$ m,
$$V_C+V_{C'}=\frac{248}{81}\pi\approx 9{,}618\ \text{m}^3,$$
e poiché $1\ \text{m}^3=1000$ litri, la capacità complessiva è
$$\approx 9618\ \text{litri}.$$

## d) Angolo del settore circolare (sviluppo laterale di $C$)

Per il cono $C$ si ha $\rho=r\sqrt{2}$ e altezza $h=4r$, quindi l'apotema è
$$\ell=\sqrt{h^2+\rho^2}=\sqrt{(4r)^2+2r^2}=\sqrt{18r^2}=3\sqrt{2}\,r.$$
Nello sviluppo della superficie laterale il settore circolare ha raggio pari all'apotema $\ell$ e arco lungo quanto la circonferenza di base, cioè $2\pi\rho=2\sqrt{2}\,\pi r$. L'ampiezza in radianti è il rapporto tra arco e raggio:
$$\theta=\frac{2\pi\rho}{\ell}=\frac{2\sqrt{2}\,\pi r}{3\sqrt{2}\,r}=\frac{2\pi}{3}\quad\Longrightarrow\quad \theta=120^\circ.$$

## e) Angolo di apertura di $C$

Detto $\beta$ il semiangolo al vertice del cono $C$, dalla sezione assiale si ha
$$\sin\beta=\frac{\rho}{\ell}=\frac{r\sqrt{2}}{3\sqrt{2}\,r}=\frac{1}{3}.$$
Per determinare $\beta$ risolviamo l'equazione $\sin\beta-\dfrac{1}{3}=0$ con un metodo numerico. Posto $f(x)=\sin x-\dfrac{1}{3}$, la funzione è continua e crescente in $\left[0;\dfrac{\pi}{2}\right]$, con $f(0)=-\dfrac{1}{3}<0$ e $f(1)=\sin 1-\dfrac{1}{3}>0$: la radice è unica e interna a $[0;1]$. Applicando il metodo delle tangenti (Newton),
$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}=x_n-\frac{\sin x_n-\tfrac{1}{3}}{\cos x_n},$$
a partire da $x_0=1$ si ottiene rapidamente
$$\beta\approx 0{,}3398\ \text{rad}.$$
Trasformando in gradi sessagesimali, $\beta^\circ=\dfrac{0{,}3398\cdot 180^\circ}{\pi}\approx 19{,}47^\circ$, cioè
$$\beta\approx 19^\circ 29'\approx 19{,}47^\circ.$$

*Fonte:* [📄 PDF p.49](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/geometria #cluster/geometria
