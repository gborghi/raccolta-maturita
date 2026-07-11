

**Problema:** [[Problemi/prob_2008_ordinamento_2008_sessione_suppletiva_problema2_68_1|2008 Ordinamento Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_ordinamento_2008_sessione_suppletiva_problema2_68|2008 Ordinamento Suppletiva — Problema 2]]

Si consideri la funzione $g(x) = \sin x\,(2\cos x + 1)$.

## a)

Tra le primitive di $g$, individuiamo quella il cui diagramma $\gamma$ passa per il punto $P(\pi, 0)$.

Calcoliamo la primitiva generale:

$$\int \sin x\,(2\cos x + 1)\,dx = \int (2\sin x\cos x + \sin x)\,dx = \sin^2 x - \cos x + k.$$

Imponendo il passaggio per $P(\pi, 0)$ si ottiene $0 = \sin^2 \pi - \cos \pi + k = 0 + 1 + k$, da cui $k = -1$. La primitiva cercata è quindi

$$f(x) = \sin^2 x - \cos x - 1 = -\cos^2 x - \cos x,$$

avendo usato l'identità $\sin^2 x = 1 - \cos^2 x$.

## b)

Studiamo $f(x) = -\cos^2 x - \cos x$ nell'intervallo $[0, 2\pi]$.

**Intersezioni con gli assi.** Per $x = 0$ si ha $f(0) = -1 - 1 = -2$. Per $y = 0$ risulta $\cos x\,(\cos x + 1) = 0$, da cui $x = \dfrac{\pi}{2}$, $x = \dfrac{3\pi}{2}$ e $x = \pi$.

**Segno.** Si ha $f(x) > 0$ quando $-1 < \cos x < 0$, cioè per $x \in \left(\dfrac{\pi}{2},\, \dfrac{3\pi}{2}\right)$ con $x \ne \pi$.

**Derivata prima.** $f'(x) = 2\sin x\cos x + \sin x = \sin x\,(2\cos x + 1)$. Ponendo $f'(x) = 0$ si ottiene $\sin x = 0$ (cioè $x = 0,\ \pi,\ 2\pi$) oppure $\cos x = -\dfrac{1}{2}$ (cioè $x = \dfrac{2\pi}{3},\ \dfrac{4\pi}{3}$).

- $x = \dfrac{2\pi}{3}$: massimo relativo, $f\!\left(\dfrac{2\pi}{3}\right) = -\dfrac{1}{4} + \dfrac{1}{2} = \dfrac{1}{4}$;
- $x = \pi$: minimo relativo, $f(\pi) = 0$;
- $x = \dfrac{4\pi}{3}$: massimo relativo, $f\!\left(\dfrac{4\pi}{3}\right) = \dfrac{1}{4}$.

**Simmetria rispetto a $x = \pi$.** Verifichiamo che $f(2\pi - x) = f(x)$:

$$f(2\pi - x) = -\cos^2(2\pi - x) - \cos(2\pi - x) = -\cos^2 x - \cos x = f(x).$$

La curva $\gamma$ è dunque simmetrica rispetto alla retta $x = \pi$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="293.981" height="192.584" viewBox="-72 -72 220.486 144.438"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-9.408h207.305"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M133.355-11.808c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-60.689" y="-9.408" stroke="none" font-family="cmmi10" font-size="10" transform="translate(199.857 2.153)">x</text><path fill="none" d="M-60.69 71.968V-52.825"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-63.09-50.945c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.689" y="-9.408" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -49.295)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.69 53.189 2.01-.237 2.008-.697 2.008-1.151 2.008-1.589 2.009-1.998 2.008-2.383 2.009-2.731 2.008-3.04 2.008-3.304 2.009-3.523 2.008-3.69 2.009-3.806 2.008-3.872 2.008-3.884 2.009-3.848 2.008-3.763 2.009-3.63 2.008-3.459 2.008-3.246 2.009-3.005 2.008-2.732 2.009-2.44 2.008-2.13 2.008-1.814 2.009-1.493 2.008-1.174 2.009-.865 2.008-.57 2.008-.293 2.009-.042 2.008.182 2.009.376 2.008.534 2.008.659 2.009.746 2.008.798 2.009.813 2.008.796 2.008.747 2.009.67 2.008.565 2.009.445 2.008.305 2.008.155 2.009.002 2.008-.154 2.009-.304 2.008-.441 2.008-.566 2.009-.668 2.008-.746 2.009-.796 2.008-.813 2.008-.798 2.009-.747 2.008-.66 2.009-.536 2.008-.378 2.008-.185 2.009.039 2.008.29 2.009.565 2.008.861 2.008 1.17 2.009 1.489 2.008 1.81 2.009 2.127 2.008 2.435 2.008 2.73 2.009 3 2.008 3.243 2.009 3.456 2.008 3.63 2.008 3.76 2.009 3.846 2.008 3.885 2.009 3.872 2.008 3.808 2.008 3.69 2.009 3.527 2.008 3.306L104 42.365l2.008 2.735 2.008 2.388 2.009 2.004 2.008 1.594 2.009 1.156 2.008.703 2.008.242"/><path fill="none" stroke="red" stroke-width=".8" d="m-32.236 8.457 2.786-3.064 2.786-3.065 2.786-3.064 2.786-3.065 2.785-3.064 2.786-3.065 2.786-3.065 2.786-3.064 2.786-3.065 2.786-3.064 2.786-3.065 2.786-3.064 2.786-3.065 2.786-3.065 2.786-3.064 2.786-3.065 2.786-3.064 2.786-3.065 2.786-3.065 2.786-3.064 2.786-3.065 2.786-3.064 2.786-3.065 2.786-3.064"/><path fill="none" stroke="red" stroke-width=".8" d="m23.246-64.568 2.786 3.065 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.065 2.786 3.064 2.786 3.065 2.786 3.064"/><path stroke="none" d="M-14.395-9.408c0-.972-.717-1.76-1.6-1.76s-1.6.788-1.6 1.76.716 1.76 1.6 1.76c.883 0 1.6-.788 1.6-1.76m-1.6 0"/><text x="-60.689" y="-9.408" stroke="none" font-family="cmmi10" font-size="10" transform="translate(48.227 10.366)">A</text><path stroke="none" d="M74.992-9.408c0-.972-.717-1.76-1.6-1.76s-1.6.788-1.6 1.76.716 1.76 1.6 1.76c.883 0 1.6-.788 1.6-1.76m-1.6 0"/><text x="-60.689" y="-9.408" stroke="none" font-family="cmmi10" font-size="10" transform="translate(122.461 10.366)">B</text><path stroke="none" d="M30.298-58.57c0-.973-.716-1.76-1.6-1.76s-1.6.787-1.6 1.76c0 .971.716 1.76 1.6 1.76s1.6-.789 1.6-1.76m-1.6 0"/><text x="-60.689" y="-9.408" stroke="none" font-family="cmmi10" font-size="10" transform="translate(85.456 -52.696)">C</text><path fill="none" d="M28.698-11.285v3.755"/><text x="-60.689" y="-9.408" stroke="none" font-family="cmmi10" font-size="10" transform="translate(86.358 9.716)">¼</text><path fill="none" d="M118.08-11.285v3.755"/><g stroke="none" font-size="10"><text x="-60.689" y="-9.408" font-family="cmr10" transform="translate(173.24 11.855)">2</text><text x="-55.689" y="-9.408" font-family="cmmi10" transform="translate(173.24 11.855)">¼</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-60.689" y="-9.408" font-family="cmmi10" transform="translate(51.44 44.753)">f</text><text x="-54.717" y="-9.408" font-family="cmr10" transform="translate(51.44 44.753)">(</text><text x="-50.828" y="-9.408" font-family="cmmi10" transform="translate(51.44 44.753)">x</text><text x="-45.113" y="-9.408" font-family="cmr10" transform="translate(51.44 44.753)">)</text></g></g></g></svg>
</figure>

## c)

I punti di tangenza sono $A = \left(\dfrac{\pi}{2},\, 0\right)$ e $B = \left(\dfrac{3\pi}{2},\, 0\right)$. Le pendenze delle tangenti valgono

$$f'\!\left(\frac{\pi}{2}\right) = \sin\frac{\pi}{2}\cdot\left(2\cos\frac{\pi}{2} + 1\right) = 1, \qquad f'\!\left(\frac{3\pi}{2}\right) = \sin\frac{3\pi}{2}\cdot\left(2\cos\frac{3\pi}{2} + 1\right) = -1.$$

La tangente in $A$ è $t_A:\ y = x - \dfrac{\pi}{2}$; la tangente in $B$ è $t_B:\ y = -x + \dfrac{3\pi}{2}$.

L'intersezione si trova risolvendo $x - \dfrac{\pi}{2} = -x + \dfrac{3\pi}{2}$, da cui $x = \pi$ e $y = \dfrac{\pi}{2}$. Quindi $C = \left(\pi,\, \dfrac{\pi}{2}\right)$.

## d)

Per la simmetria rispetto a $x = \pi$, l'area $S$ compresa tra la curva e le due tangenti è il doppio dell'area $S_1$ compresa tra la tangente in $A$ e la curva nell'intervallo $\left[\dfrac{\pi}{2},\, \pi\right]$:

$$S_1 = \int_{\pi/2}^{\pi} \left[\left(x - \frac{\pi}{2}\right) - (-\cos^2 x - \cos x)\right] dx = \int_{\pi/2}^{\pi} \left(x - \frac{\pi}{2} + \frac{1 + \cos 2x}{2} + \cos x\right) dx.$$

Calcolando:

$$S_1 = \left[\frac{x^2}{2} + \left(\frac{1}{2} - \frac{\pi}{2}\right)x + \frac{\sin 2x}{4} + \sin x\right]_{\pi/2}^{\pi}$$

$$= \frac{\pi^2}{2} + \left(\frac{1}{2} - \frac{\pi}{2}\right)\pi - \frac{\pi^2}{8} - \left(\frac{1}{2} - \frac{\pi}{2}\right)\frac{\pi}{2} - 1 = \frac{\pi^2}{8} + \frac{\pi}{4} - 1.$$

Pertanto l'area totale è

$$S = 2S_1 = \frac{\pi^2}{4} + \frac{\pi}{2} - 2 \approx 2{,}04.$$

*Fonte:* [📄 PDF p.68](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
