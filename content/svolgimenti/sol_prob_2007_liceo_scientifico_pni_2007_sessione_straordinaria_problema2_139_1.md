

**Problema:** [[Problemi/prob_2007_liceo_scientifico_pni_2007_sessione_straordinaria_problema2_139_1|2007 LS PNI Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2007_liceo_scientifico_pni_2007_sessione_straordinaria_problema2_139|2007 LS PNI Straordinaria — Problema 2]]

Data una semicirconferenza di diametro $\overline{AB}=2R$, sul prolungamento di $AB$ dalla parte di $B$ si prende un punto $C$ con $\overline{BC}=\overline{AB}$ (dunque $\overline{AC}=4R$). Detto $P$ un punto della semicirconferenza e posto $x=\widehat{PAB}$, si studia il rapporto
$$y=\frac{\overline{CP}^{\,2}}{\overline{AP}\cdot\overline{PB}}.$$

## a) Espressione del rapporto

Poiché $P$ appartiene alla semicirconferenza di diametro $AB$, l'angolo $\widehat{APB}$ è retto. Nel triangolo rettangolo $APB$, di ipotenusa $\overline{AB}=2R$ e angolo $x$ in $A$, si ha
$$\overline{AP}=2R\cos x,\qquad \overline{PB}=2R\sin x.$$

Applicando il teorema del coseno al triangolo $APC$ (angolo $x$ in $A$, lato $\overline{AC}=4R$):
$$\overline{CP}^{\,2}=\overline{AP}^{\,2}+\overline{AC}^{\,2}-2\,\overline{AP}\cdot\overline{AC}\cos x=4R^2\cos^2 x+16R^2-16R^2\cos^2 x=4R^2\left(4-3\cos^2 x\right).$$

Inoltre $\overline{AP}\cdot\overline{PB}=4R^2\sin x\cos x$, quindi
$$y=\frac{4R^2\left(4-3\cos^2 x\right)}{4R^2\sin x\cos x}=\frac{4-3\cos^2 x}{\sin x\cos x}.$$

## b) Studio della funzione con $\tan x$

Dividendo numeratore e denominatore per $\cos^2 x$:
$$y=\frac{4\left(1+\tan^2 x\right)-3}{\tan x}=\frac{4\tan^2 x+1}{\tan x}=4\tan x+\frac{1}{\tan x}.$$

La funzione $f(x)=4\tan x+\dfrac{1}{\tan x}$ ha periodo $\pi$, per cui basta studiarla su $[0,\pi]$; non è definita per $x=0,\ \dfrac{\pi}{2},\ \pi$.

**Segno.** Il numeratore $4\tan^2 x+1$ è sempre positivo, dunque $f$ ha il segno di $\tan x$: $f(x)>0$ per $0<x<\dfrac{\pi}{2}$ e $f(x)<0$ per $\dfrac{\pi}{2}<x<\pi$.

**Limiti e asintoti.**
$$\lim_{x\to 0^+}f(x)=+\infty,\qquad \lim_{x\to (\pi/2)^-}f(x)=+\infty,\qquad \lim_{x\to (\pi/2)^+}f(x)=-\infty,\qquad \lim_{x\to \pi^-}f(x)=-\infty.$$
Le rette $x=0$, $x=\dfrac{\pi}{2}$ e $x=\pi$ sono asintoti verticali.

**Derivata prima.**
$$f'(x)=\frac{4}{\cos^2 x}-\frac{1}{\sin^2 x}=\frac{4\sin^2 x-\cos^2 x}{\sin^2 x\cos^2 x}.$$
Si ha $f'(x)=0$ quando $\tan^2 x=\dfrac{1}{4}$, cioè $\tan x=\pm\dfrac{1}{2}$. Posto $\alpha=\arctan\dfrac{1}{2}\approx 0{,}4636$ rad:

- su $\left(0,\dfrac{\pi}{2}\right)$: $f$ è decrescente per $0<x<\alpha$ e crescente per $\alpha<x<\dfrac{\pi}{2}$, quindi in $x=\alpha$ vi è un **minimo relativo** con $f(\alpha)=4\cdot\dfrac{1}{2}+2=4$;
- su $\left(\dfrac{\pi}{2},\pi\right)$: in $x=\pi-\alpha$ vi è un **massimo relativo** con $f(\pi-\alpha)=-4$.

**Concavità.**
$$f''(x)=\frac{8\sin x}{\cos^3 x}+\frac{2\cos x}{\sin^3 x},$$
positiva su $\left(0,\dfrac{\pi}{2}\right)$ (concavità verso l'alto) e negativa su $\left(\dfrac{\pi}{2},\pi\right)$ (concavità verso il basso). Non vi sono flessi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="247.7" height="288.623" viewBox="-72 -72 185.775 216.468"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 -58.413 42.422)"><path fill="none" d="M-13.657 0h172.593"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M157.056 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="-58.413" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 221.281 40.269)">x</text><path fill="none" d="M0-101.576v202.752"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 99.296c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="-58.413" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 55.782 149.475)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M71.51-101.576v203.152M143.02-101.576v203.152"/><clipPath id="pgf389badf975bed3afbd5471556f6e6cdfcp1"><path d="M-13.657-95.6V95.6h172.993V-95.6ZM159.336 95.6"/></clipPath><g fill="#00f" stroke="#00f" clip-path="url(#pgf389badf975bed3afbd5471556f6e6cdfcp1)"><path fill="none" stroke-width=".8" d="m5.918 97.681.607-7.966.606-6.49.607-5.378.606-4.514.607-3.813.606-3.24.606-2.785.607-2.4.606-2.064.607-1.8.606-1.555.607-1.347.606-1.173.606-1.01.607-.87.606-.747.607-.635.606-.534.607-.442.606-.36.606-.282.607-.213.606-.147.607-.086.606-.03.607.026.606.074.606.12.607.168.606.21.607.251.606.292.607.331.606.37.606.407.607.443.606.478.607.516.606.551.607.586.606.622.606.66.607.694.606.73.607.768.606.807.607.845.606.884.606.925.607.966.606 1.015.607 1.054.606 1.109.607 1.15.606 1.205.606 1.255.607 1.312.606 1.372.607 1.433.606 1.495.607 1.568.606 1.636.606 1.712.607 1.798.606 1.884.607 1.973.606 2.073.607 2.177.606 2.288.606 2.415.607 2.55.606 2.69.607 2.844.606 3.012.607 3.19.606 3.393.606 3.614.607 3.84.606 4.124.607 4.405.606 4.726.607 5.087.606 5.48.606 5.948.607 6.45.606 7.033.607 7.71.606 8.458.607 9.335.606 10.362.606 11.556.607 12.974.606 14.706.607 16.78.606 19.285.607 22.494.606 26.505.606 31.712.607 38.603M76.937-400.552l.606 40.324.606 33.02.607 27.496.606 23.238.607 19.922.606 17.271.607 15.08.606 13.343.606 11.838.607 10.592.606 9.54.607 8.636.606 7.847.607 7.163.606 6.582.606 6.042.607 5.569.606 5.174.607 4.797.606 4.47.607 4.177.606 3.904.606 3.659.607 3.431.606 3.24.607 3.046.606 2.876.607 2.722.606 2.58.606 2.436.607 2.315.606 2.201.607 2.095.606 1.998.607 1.902.606 1.812.606 1.729.607 1.655.606 1.581.607 1.51.606 1.444.607 1.387.606 1.324.606 1.267.607 1.214.606 1.164.607 1.111.606 1.07.607 1.02.606.98.606.933.607.892.606.854.607.813.606.777.607.74.606.7.606.667.607.63.606.595.607.558.606.522.607.488.606.451.606.413.607.378.606.34.607.3.606.26.607.22.606.174.607.131.606.084.606.035.607-.016.606-.075.607-.133.606-.198.607-.268.606-.342.606-.423.607-.516.606-.61.607-.722.606-.843.607-.98.606-1.137.606-1.31.607-1.509.606-1.744.607-2.007.606-2.32.606-2.697.607-3.141.606-3.682.607-4.348.606-5.18.607-6.237.606-7.598"/></g><path stroke="none" d="M24.305 47.8c0 .464-1.433.84-3.2.84s-3.2-.376-3.2-.84 1.432-.84 3.2-.84c1.767 0 3.2.376 3.2.84m-3.2 0"/><g stroke="none" font-size="10"><text x="-58.413" y="42.422" font-family="cmr10" transform="matrix(1 0 0 -1 83.05 96.255)">(</text><text x="-54.524" y="42.422" font-family="cmmi10" transform="matrix(1 0 0 -1 83.05 96.255)">®</text><text x="-48.09" y="42.422" font-family="cmmi10" transform="matrix(1 0 0 -1 83.05 96.255)">;</text><text x="-41.979" y="42.422" font-family="cmr10" transform="matrix(1 0 0 -1 83.05 96.255)">4)</text></g><path stroke="none" d="M125.114-47.8c0 .464-1.432.84-3.2.84-1.767 0-3.2-.376-3.2-.84s1.433-.84 3.2-.84 3.2.376 3.2.84m-3.2 0"/><g stroke="none" font-size="10"><text x="-58.413" y="42.422" font-family="cmr10" transform="matrix(1 0 0 -1 125.412 -16.412)">(</text><text x="-54.524" y="42.422" font-family="cmmi10" transform="matrix(1 0 0 -1 125.412 -16.412)">¼</text><text x="-46.242" y="42.422" font-family="cmsy10" transform="matrix(1 0 0 -1 125.412 -16.412)">¡</text><text x="-36.242" y="42.422" font-family="cmmi10" transform="matrix(1 0 0 -1 125.412 -16.412)">®</text><text x="-29.808" y="42.422" font-family="cmmi10" transform="matrix(1 0 0 -1 125.412 -16.412)">;</text><text x="-23.697" y="42.422" font-family="cmsy10" transform="matrix(1 0 0 -1 125.412 -16.412)">¡</text><text x="-15.92" y="42.422" font-family="cmr10" transform="matrix(1 0 0 -1 125.412 -16.412)">4)</text></g><g stroke="none"><text x="-57.213" y="38.484" font-family="cmmi7" font-size="7" transform="matrix(1 0 0 -1 133.456 31.938)">¼</text><path d="M76.243-7.784h4.927v-.4h-4.927z"/><text x="-56.742" y="45.87" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 133.456 31.938)">2</text></g><text x="-58.413" y="42.422" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 198.403 34.583)">¼</text></g></svg>
</figure>

## c) Valore minimo in gradi e primi

Nell'intervallo $0<x<\dfrac{\pi}{2}$ il rapporto è minimo per $x=\alpha=\arctan\dfrac{1}{2}$. In gradi:
$$\alpha\approx 26{,}565^\circ=26^\circ+0{,}565\cdot 60'\approx 26^\circ 34',$$
con valore minimo $y_{\min}=4$.

## d) Area

$$A=\int_{\pi/4}^{\pi/3}\left(4\tan x+\frac{1}{\tan x}\right)dx=\Big[-4\ln\lvert\cos x\rvert+\ln\lvert\sin x\rvert\Big]_{\pi/4}^{\pi/3}.$$

Per $x=\dfrac{\pi}{3}$:
$$-4\ln\frac{1}{2}+\ln\frac{\sqrt{3}}{2}=4\ln 2+\frac{1}{2}\ln 3-\ln 2=3\ln 2+\frac{1}{2}\ln 3.$$
Per $x=\dfrac{\pi}{4}$:
$$-4\ln\frac{\sqrt{2}}{2}+\ln\frac{\sqrt{2}}{2}=-3\ln\frac{\sqrt{2}}{2}=\frac{3}{2}\ln 2.$$
Dunque
$$A=3\ln 2+\frac{1}{2}\ln 3-\frac{3}{2}\ln 2=\frac{3}{2}\ln 2+\frac{1}{2}\ln 3=\frac{1}{2}\ln 24\approx 1{,}59\ \text{u}^2.$$

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
