

**Problema:** [[Problemi/prob_2008_pni_2008_sessione_suppletiva_problema2_86_1|2008 PNI Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_pni_2008_sessione_suppletiva_problema2_86|2008 PNI Suppletiva — Problema 2]]

Si consideri la funzione

$$g(x) = \sin x\,(2\cos x + 1).$$

## a)

Tra le primitive di $g$ individuiamo quella il cui diagramma $\gamma$ passa per il punto $P(\pi,0)$.

Calcoliamo la primitiva generale:

$$\int \sin x\,(2\cos x + 1)\,dx = \int (2\sin x\cos x + \sin x)\,dx = \sin^2 x - \cos x + k.$$

Imponendo il passaggio per $P(\pi,0)$:

$$0 = \sin^2\pi - \cos\pi + k = 0 + 1 + k \Rightarrow k = -1.$$

La primitiva cercata è quindi

$$f(x) = \sin^2 x - \cos x - 1 = -\cos^2 x - \cos x,$$

avendo usato $\sin^2 x = 1 - \cos^2 x$.

## b)

Studiamo $f(x) = -\cos^2 x - \cos x$ nell'intervallo $[0,2\pi]$.

**Intersezioni con gli assi.** Per $x=0$ si ha $f(0) = -1 - 1 = -2$. Per $y=0$:

$$-\cos x\,(\cos x + 1) = 0 \Rightarrow x = \frac{\pi}{2},\quad x = \frac{3\pi}{2},\quad x = \pi.$$

**Segno.** Risulta $f(x) > 0$ quando $-1 < \cos x < 0$, cioè per $x \in \left(\frac{\pi}{2},\,\frac{3\pi}{2}\right)$ con $x \ne \pi$.

**Derivata prima.**

$$f'(x) = 2\sin x\cos x + \sin x = \sin x\,(2\cos x + 1).$$

Ponendo $f'(x) = 0$ si ottiene $\sin x = 0$ (cioè $x = 0,\ \pi,\ 2\pi$) oppure $\cos x = -\frac{1}{2}$ (cioè $x = \frac{2\pi}{3},\ \frac{4\pi}{3}$). Ne segue:

- $x = \frac{2\pi}{3}$: massimo relativo, $f\!\left(\frac{2\pi}{3}\right) = -\frac{1}{4} + \frac{1}{2} = \frac{1}{4}$;
- $x = \pi$: minimo relativo, $f(\pi) = 0$;
- $x = \frac{4\pi}{3}$: massimo relativo, $f\!\left(\frac{4\pi}{3}\right) = \frac{1}{4}$.

**Simmetria rispetto alla retta $x = \pi$.** Verifichiamo che $f(2\pi - x) = f(x)$:

$$f(2\pi - x) = -\cos^2(2\pi - x) - \cos(2\pi - x) = -\cos^2 x - \cos x = f(x),$$

dunque $\gamma$ è simmetrica rispetto alla retta $x = \pi$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="311.324" height="191.032" viewBox="-72 -72 233.493 143.274"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.461-.897h214.703"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M146.362-3.297c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.499" y="-.897" stroke="none" font-family="cmmi10" font-size="10" transform="translate(209.673 2.153)">x</text><path fill="none" d="M-57.499 70.804V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.898-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.499" y="-.897" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -63.734)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.499 58.854 2.11-.226 2.108-.666 2.109-1.098 2.109-1.517 2.109-1.907 2.108-2.275 2.11-2.607 2.108-2.902 2.109-3.153 2.109-3.363 2.109-3.523 2.108-3.632 2.11-3.696 2.108-3.708 2.109-3.673 2.109-3.592 2.108-3.465 2.11-3.301 2.108-3.1 2.109-2.867 2.109-2.608 2.109-2.33 2.108-2.033 2.11-1.731 2.108-1.425 2.109-1.121 2.109-.826 2.109-.543 2.108-.28 2.11-.04 2.108.174 2.109.358 2.109.51 2.109.629 2.108.712 2.11.762 2.108.776 2.109.76 2.109.712 2.108.64 2.11.54 2.108.424 2.109.291 2.109.149 2.109.001 2.108-.147 2.11-.29 2.108-.421 2.109-.54 2.109-.638 2.109-.712 2.108-.76 2.11-.775 2.108-.763 2.109-.713 2.109-.63 2.108-.511 2.11-.36 2.108-.177 2.109.036 2.109.278 2.109.54 2.108.821 2.11 1.117 2.108 1.421 2.109 1.727 2.109 2.03 2.109 2.326 2.108 2.604 2.11 2.864 2.108 3.097 2.109 3.298 2.109 3.464 2.108 3.59 2.11 3.671 2.108 3.71 2.109 3.695 2.109 3.635 2.109 3.523 2.108 3.366 2.11 3.156 2.108 2.906 2.109 2.61 2.109 2.28 2.109 1.913 2.108 1.521 2.11 1.104 2.108.671 2.109.232"/><path fill="none" stroke="red" stroke-width=".8" d="m-27.623 16.156 2.8-2.8 2.802-2.802 2.8-2.8 2.801-2.801 2.801-2.801 2.8-2.801 2.802-2.8 2.8-2.802 2.801-2.8 2.801-2.801 2.801-2.801 2.8-2.801 2.802-2.8 2.8-2.802 2.801-2.8 2.801-2.801 2.801-2.801 2.8-2.8 2.802-2.802 2.8-2.8 2.801-2.801 2.801-2.801 2.8-2.801 2.802-2.8"/><path fill="none" stroke="red" stroke-width=".8" d="m33.622-50.562 3.05 3.05 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.049 3.05 3.05 3.05 3.05"/><path stroke="none" d="M-8.47-.897a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="-57.499" y="-.897" stroke="none" font-family="cmmi10" font-size="10" transform="translate(50.461 10.366)">A</text><path stroke="none" d="M85.387-.897a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="-57.499" y="-.897" stroke="none" font-family="cmmi10" font-size="10" transform="translate(129.165 10.366)">B</text><path stroke="none" d="M38.458-47.825a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="-57.499" y="-.897" stroke="none" font-family="cmmi10" font-size="10" transform="translate(89.926 -50.461)">C</text><path fill="none" d="M36.358-2.69V.896"/><text x="-57.499" y="-.897" stroke="none" font-family="cmmi10" font-size="10" transform="translate(90.827 9.631)">¼</text><path fill="none" d="M130.215-2.69V.896"/><g stroke="none" font-size="10"><text x="-57.499" y="-.897" font-family="cmr10" transform="translate(182.184 11.77)">2</text><text x="-52.498" y="-.897" font-family="cmmi10" transform="translate(182.184 11.77)">¼</text></g><text x="-57.499" y="-.897" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none" font-size="10"><text x="-57.499" y="-.897" font-family="cmmi10" transform="translate(139.645 -15.425)">f</text><text x="-51.526" y="-.897" font-family="cmr10" transform="translate(139.645 -15.425)">(</text><text x="-47.637" y="-.897" font-family="cmmi10" transform="translate(139.645 -15.425)">x</text><text x="-41.922" y="-.897" font-family="cmr10" transform="translate(139.645 -15.425)">)</text></g></g></g></svg>
</figure>

## c)

I punti di tangenza sono $A = \left(\frac{\pi}{2},\,0\right)$ e $B = \left(\frac{3\pi}{2},\,0\right)$. Le pendenze delle tangenti valgono

$$f'\!\left(\frac{\pi}{2}\right) = \sin\frac{\pi}{2}\cdot\left(2\cos\frac{\pi}{2} + 1\right) = 1, \qquad f'\!\left(\frac{3\pi}{2}\right) = \sin\frac{3\pi}{2}\cdot\left(2\cos\frac{3\pi}{2} + 1\right) = -1.$$

Le equazioni delle tangenti sono perciò

$$t_A:\ y = x - \frac{\pi}{2}, \qquad t_B:\ y = -x + \frac{3\pi}{2}.$$

Il punto d'intersezione si trova risolvendo $x - \frac{\pi}{2} = -x + \frac{3\pi}{2}$, da cui $x = \pi$ e $y = \frac{\pi}{2}$. Quindi

$$C = \left(\pi,\,\frac{\pi}{2}\right).$$

## d)

Per la simmetria rispetto alla retta $x = \pi$, l'area $S$ compresa tra la curva e le due tangenti è il doppio dell'area $S_1$ tra la tangente in $A$ e la curva nell'intervallo $\left[\frac{\pi}{2},\,\pi\right]$:

$$S_1 = \int_{\pi/2}^{\pi} \left[\left(x - \frac{\pi}{2}\right) - \left(-\cos^2 x - \cos x\right)\right] dx = \int_{\pi/2}^{\pi} \left(x - \frac{\pi}{2} + \frac{1 + \cos 2x}{2} + \cos x\right) dx.$$

Calcoliamo:

$$S_1 = \left[\frac{x^2}{2} + \left(\frac{1}{2} - \frac{\pi}{2}\right)x + \frac{\sin 2x}{4} + \sin x\right]_{\pi/2}^{\pi} = \frac{\pi^2}{8} + \frac{\pi}{4} - 1.$$

Pertanto l'area totale è

$$S = 2S_1 = \frac{\pi^2}{4} + \frac{\pi}{2} - 2 \approx 2{,}04.$$

*Fonte:* [📄 PDF p.86](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
