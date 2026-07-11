

**Problema:** [[Problemi/prob_1999_sessione_suppletiva_pni_1999_problema2_41_1|1999 Suppletiva PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/1999_sessione_suppletiva_pni_1999_problema2_41|1999 Suppletiva PNI — Problema 2]]

In una semicirconferenza è inscritto il triangolo rettangolo $ABC$ di ipotenusa (diametro) $AB=2$. Detto $x=\widehat{BAC}$ l'angolo in $A$, si conduce per $C$ la semiretta parallela ad $AB$ che non incontra la circonferenza e si prende su di essa il punto $D$ con $CD=AC$. Si chiede di:

- **a)** determinare la funzione $f(x)$ che esprime la differenza tra le aree dei triangoli $ABC$ e $BCD$;
- **b)** rappresentare il grafico di $y=f(x)$ nell'intervallo $[0,2\pi]$ e stabilire per quale angolo $x$ la differenza delle aree è massima;
- **c)** calcolare l'area compresa tra il grafico di $f$ e l'asse delle ascisse nell'intervallo $\left[0,\dfrac{\pi}{2}\right]$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="269.183" height="118.317" viewBox="-72 -72 201.887 88.738"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.896 2.769c0-34.572 28.025-62.596 62.596-62.596S67.296-31.803 67.296 2.769M-57.904 2.769H67.304"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-57.904 2.769H67.304l-50.083-61.34Z"/><path fill="none" stroke="red" stroke-width=".8" d="M17.22-58.57h96.974L67.304 2.768"/><path fill="none" stroke-dasharray="3.0,3.0" d="M17.22-58.57V2.768"/><g fill="gray" stroke="gray"><path fill="none" d="M17.219-58.563h-34.028"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-14.929-56.163c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4"/></g><path stroke="none" d="M-56.804 2.769a1.1 1.1 0 1 0-2.2 0 1.1 1.1 0 0 0 2.2 0M68.404 2.769a1.1 1.1 0 1 0-2.2 0 1.1 1.1 0 0 0 2.2 0M18.32-58.57a1.1 1.1 0 1 0-2.2 0 1.1 1.1 0 0 0 2.2 0M115.294-58.57a1.1 1.1 0 1 0-2.2 0 1.1 1.1 0 0 0 2.2 0M18.32 2.769a1.1 1.1 0 1 0-2.2 0 1.1 1.1 0 0 0 2.2 0m-1.1 0"/><text x="4.7" y="2.769" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-73.637 10.366)">A</text><text x="4.7" y="2.769" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.137 10.366)">B</text><text x="4.7" y="2.769" stroke="none" font-family="cmmi10" font-size="10" transform="translate(1.125 -64.872)">C</text><text x="4.7" y="2.769" stroke="none" font-family="cmmi10" font-size="10" transform="translate(113.027 -64.872)">D</text><text x="4.7" y="2.769" stroke="none" font-family="cmmi10" font-size="10" transform="translate(7.958 10.366)">H</text><path fill="none" d="M-34.117 2.769c0-5.478-1.893-10.79-5.355-15.034"/><text x="4.7" y="2.769" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-37.286 -5.985)">x</text></g></svg>
</figure>

## a)

Poiché $AB=2$ è il diametro, l'angolo $\widehat{ACB}$ è retto e nel triangolo rettangolo $ABC$ si ha
$$
AC = AB\cos x = 2\cos x,\qquad BC = AB\sin x = 2\sin x .
$$

Detta $CH$ l'altezza relativa ad $AB$, risulta $CH = AC\sin x = 2\sin x\cos x=\sin 2x$, dunque
$$
\text{Area}(ABC)=\frac{1}{2}\,AB\cdot CH=\frac{1}{2}\cdot 2\cdot \sin 2x=\sin 2x .
$$

Il segmento $CD$ giace sulla parallela ad $AB$ per $C$: la distanza di $B$ da tale retta è ancora l'altezza $CH$. Poiché $CD=AC=2\cos x$,
$$
\text{Area}(BCD)=\frac{1}{2}\,CD\cdot CH=\frac{1}{2}\cdot 2\cos x\cdot \sin 2x=2\cos^2 x\,\sin x .
$$

La differenza cercata è quindi
$$
f(x)=\text{Area}(ABC)-\text{Area}(BCD)=\sin 2x-2\cos^2 x\,\sin x=2\sin x\cos x\,(1-\cos x),
$$
cioè
$$
\boxed{\,f(x)=\sin 2x\,(1-\cos x)\,}.
$$

Dal punto di vista geometrico è $0<x<\dfrac{\pi}{2}$; per lo studio del grafico si considera invece $f$ come funzione reale sull'intervallo $[0,2\pi]$.

## b)

**Dominio e periodicità.** $f$ è continua e derivabile su tutto $\mathbb{R}$; essendo prodotto di $\sin 2x$ (periodo $\pi$) e di $1-\cos x$ (periodo $2\pi$), ha periodo $T=2\pi$.

**Intersezioni con gli assi.** $f(x)=0$ quando $\sin 2x=0$ oppure $\cos x=1$; nell'intervallo $[0,2\pi]$:
$$
x=0,\quad x=\frac{\pi}{2},\quad x=\pi,\quad x=\frac{3\pi}{2},\quad x=2\pi .
$$

**Segno.** Poiché $1-\cos x=2\sin^2\dfrac{x}{2}\ge 0$, il segno di $f$ coincide con quello di $\sin 2x$:
$$
f(x)>0 \ \text{in}\ \left(0,\tfrac{\pi}{2}\right)\cup\left(\pi,\tfrac{3\pi}{2}\right),\qquad
f(x)<0 \ \text{in}\ \left(\tfrac{\pi}{2},\pi\right)\cup\left(\tfrac{3\pi}{2},2\pi\right).
$$

**Derivata prima.**
$$
f'(x)=2\cos 2x\,(1-\cos x)+\sin 2x\,\sin x .
$$
Ponendo $c=\cos x$ e usando $\cos 2x=2c^2-1$, $\sin 2x\,\sin x=2(1-c^2)c$, si ottiene
$$
f'(x)=-6\cos^3 x+4\cos^2 x+4\cos x-2 .
$$
Poiché $\cos x=1$ è radice, con la regola di Ruffini si fattorizza
$$
f'(x)=(\cos x-1)\,(-6\cos^2 x-2\cos x+2)=-2(\cos x-1)(3\cos^2 x+\cos x-1).
$$

I punti stazionari si hanno per $\cos x=1$ (cioè $x=0,\;x=2\pi$) e per $3\cos^2 x+\cos x-1=0$, da cui
$$
\cos x=\frac{-1\pm\sqrt{13}}{6},\qquad
\begin{cases}\cos x=\dfrac{-1+\sqrt{13}}{6}\cong 0{,}43\\[4pt]\cos x=\dfrac{-1-\sqrt{13}}{6}\cong -0{,}77.\end{cases}
$$

Nell'intervallo $[0,2\pi]$ si trovano quattro angoli interni:
$$
\alpha=\arccos\!\frac{-1+\sqrt{13}}{6}\cong 1{,}12,\quad
\beta=\arccos\!\frac{-1-\sqrt{13}}{6}\cong 2{,}45,
$$
$$
\gamma=2\pi-\beta\cong 3{,}84,\qquad
\delta=2\pi-\alpha\cong 5{,}16 .
$$

**Crescenza.** Essendo $\cos x-1\le 0$, il segno di $f'$ è quello di $-(3\cos^2 x+\cos x-1)$; risulta $f'(x)\ge 0$ (funzione crescente) su
$$
[0,\alpha]\cup[\beta,\gamma]\cup[\delta,2\pi],
$$
e $f'(x)\le 0$ (decrescente) su $[\alpha,\beta]\cup[\gamma,\delta]$. Pertanto
$$
\text{massimi relativi in } x=\alpha,\ \gamma,\ 2\pi;\qquad
\text{minimi relativi in } x=0,\ \beta,\ \delta .
$$

I valori corrispondenti sono $f(\alpha)\cong 0{,}44$, $f(\beta)\cong -1{,}74$, $f(\gamma)\cong 1{,}74$, $f(\delta)\cong -0{,}44$. Il grafico è simmetrico rispetto al punto $(\pi,0)$, poiché $f(2\pi-x)=-f(x)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="331.158" height="186.781" viewBox="-72 -72 248.369 140.086"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 3.442h235.187"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M161.237 1.042c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-62.254" y="3.442" stroke="none" font-family="cmmi10" font-size="10" transform="translate(229.304 2.153)">x</text><path fill="none" d="M-62.254 66.038V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-64.654-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-62.254" y="3.442" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -68.073)">y</text><path fill="none" d="M-10.856 1.735v3.414"/><g stroke="none"><text x="-61.054" y="-.495" font-family="cmmi7" font-size="7" transform="translate(47.734 14.191)">¼</text><path d="M-13.32 14.933h4.927v.4h-4.927z"/><text x="-60.583" y="6.89" font-family="cmr7" font-size="7" transform="translate(47.734 14.191)">2</text></g><path fill="none" d="M40.54 1.735v3.414"/><text x="-62.254" y="3.442" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.765 11.546)">¼</text><path fill="none" d="M91.938 1.735v3.414"/><g stroke="none"><text x="-61.054" y="-.495" font-family="cmr7" font-size="7" transform="translate(148.535 15.688)">3</text><text x="-57.068" y="-.495" font-family="cmmi7" font-size="7" transform="translate(148.535 15.688)">¼</text><path d="M87.481 16.43h8.914v.4h-8.914z"/><text x="-58.59" y="6.89" font-family="cmr7" font-size="7" transform="translate(148.535 15.688)">2</text></g><path fill="none" d="M143.336 1.735v3.414"/><g stroke="none" font-size="10"><text x="-62.254" y="3.442" font-family="cmr10" transform="translate(200.06 13.684)">2</text><text x="-57.254" y="3.442" font-family="cmmi10" transform="translate(200.06 13.684)">¼</text></g><path fill="none" stroke="#00f" stroke-width="1.2" d="M-62.254 3.442s9.456-.523 13.088-1.707 9.82-5.329 13.089-6.829c3.268-1.5 7.746-4.062 10.47-3.983s7.115 2.815 9.162 4.552c2.046 1.737 3.773 4.73 5.589 7.967s4.643 9.403 7.5 15.364C-.5 24.767 6.78 41.668 9.73 46.406c2.951 4.737 5.456 7.65 8.18 6.544s8.313-7.642 11.453-14.511c3.14-6.87 7.999-25.128 11.177-34.997s8.556-29.266 11.727-36.135c3.17-6.87 7.947-13.373 11.125-13.373s7.819 6.504 11.78 13.373S88.305-3.111 91.937 3.442s7.379 9.36 9.41 11.096c2.033 1.737 2.966 1.818 5.236 1.423s7.765-2.728 11.125-4.268 9.532-5.684 13.088-6.828 12.539-1.423 12.539-1.423"/><path fill="red" stroke="none" d="M-23.767-9.077c0-.884-.824-1.6-1.84-1.6s-1.84.716-1.84 1.6c0 .883.824 1.6 1.84 1.6s1.84-.717 1.84-1.6M19.751 52.95c0-.884-.824-1.6-1.84-1.6s-1.84.716-1.84 1.6c0 .883.824 1.6 1.84 1.6s1.84-.717 1.84-1.6M65.233-46.066c0-.884-.824-1.6-1.84-1.6s-1.84.716-1.84 1.6.824 1.6 1.84 1.6 1.84-.716 1.84-1.6M108.424 15.961c0-.884-.824-1.6-1.84-1.6s-1.84.716-1.84 1.6.824 1.6 1.84 1.6 1.84-.716 1.84-1.6m-1.84 0"/><text x="-62.254" y="3.442" stroke="none" font-family="cmmi9" font-size="9" transform="translate(40.18 -16.052)">®</text><text x="-62.254" y="3.442" stroke="none" font-family="cmmi9" font-size="9" transform="translate(77.324 59.29)">¯</text><text x="-62.254" y="3.442" stroke="none" font-family="cmmi9" font-size="9" transform="translate(123 -54.79)">°</text><text x="-62.254" y="3.442" stroke="none" font-family="cmmi9" font-size="9" transform="translate(172.37 22.302)">±</text></g></svg>
</figure>

**Massimo della differenza delle aree.** Nel contesto geometrico è $0<x<\dfrac{\pi}{2}$: in tale intervallo $f$ cresce da $0$ fino a $x=\alpha$ e poi decresce, quindi la differenza tra le aree dei triangoli $ABC$ e $BCD$ è **massima** per
$$
x=\alpha=\arccos\!\frac{-1+\sqrt{13}}{6}\cong 1{,}12\ \text{rad},\qquad f(\alpha)\cong 0{,}44 .
$$

## c)

L'area richiesta, essendo $f(x)\ge 0$ in $\left[0,\dfrac{\pi}{2}\right]$, vale
$$
S=\int_{0}^{\pi/2}\sin 2x\,(1-\cos x)\,dx=\int_{0}^{\pi/2}2\sin x\cos x\,(1-\cos x)\,dx .
$$

Con la sostituzione $t=\cos x$, $dt=-\sin x\,dx$ (da $x=0$ a $x=\dfrac{\pi}{2}$ corrisponde $t=1\to t=0$):
$$
\int 2\sin x\cos x\,(1-\cos x)\,dx=-2\int t\,(1-t)\,dt=-t^2+\frac{2}{3}t^3+c .
$$

Quindi
$$
S=\left[-t^2+\frac{2}{3}t^3\right]_{t=1}^{t=0}=0-\left(-1+\frac{2}{3}\right)=\frac{1}{3}.
$$

L'area compresa tra il grafico di $f$ e l'asse delle ascisse in $\left[0,\dfrac{\pi}{2}\right]$ è dunque
$$
\boxed{\,S=\frac{1}{3}\,u^2\cong 0{,}33\,u^2\,}.
$$

*Fonte:* [📄 PDF p.41](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
