

**Problema:** [[Problemi/prob_2005_estero_calendario_australe_2005_sessione_suppletiv_problema2_63_1|2005 Estero Australe Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_estero_calendario_australe_2005_sessione_suppletiv_problema2_63|2005 Estero Australe Suppletiva — Problema 2]]

È assegnata la funzione $f(x)=\sin x + a\cos x + b$, con $x\in[-\pi;\pi]$.

## a) Determinazione di $a$ e $b$

La funzione è continua e derivabile su tutto l'intervallo; la sua derivata è
$$f'(x)=\cos x - a\sin x.$$

Imponiamo che $x=\dfrac{\pi}{6}$ sia punto di massimo relativo, cioè $f'\!\left(\dfrac{\pi}{6}\right)=0$, e che $f\!\left(\dfrac{\pi}{6}\right)=0$:
$$
\begin{cases}
\cos\dfrac{\pi}{6}-a\sin\dfrac{\pi}{6}=0\\[4pt]
\sin\dfrac{\pi}{6}+a\cos\dfrac{\pi}{6}+b=0
\end{cases}
\Rightarrow
\begin{cases}
\dfrac{\sqrt3}{2}-\dfrac{a}{2}=0\\[4pt]
\dfrac{1}{2}+a\cdot\dfrac{\sqrt3}{2}+b=0.
\end{cases}
$$

Dalla prima equazione $a=\sqrt3$; sostituendo nella seconda,
$$\frac{1}{2}+\sqrt3\cdot\frac{\sqrt3}{2}+b=\frac{1}{2}+\frac{3}{2}+b=2+b=0 \Rightarrow b=-2.$$

Quindi $\boxed{a=\sqrt3,\ b=-2}$ e
$$f(x)=\sin x+\sqrt3\cos x-2.$$

Poiché $f''(x)=-\sin x-\sqrt3\cos x$ e $f''\!\left(\dfrac{\pi}{6}\right)=-\dfrac{1}{2}-\sqrt3\cdot\dfrac{\sqrt3}{2}=-2<0$, il punto $x=\dfrac{\pi}{6}$ è effettivamente di massimo relativo.

## b) Grafico ed estremi assoluti

Scriviamo $f$ in forma normalizzata raccogliendo $2$:
$$f(x)=2\left(\frac{1}{2}\sin x+\frac{\sqrt3}{2}\cos x\right)-2
=2\sin\!\left(x+\frac{\pi}{3}\right)-2,$$
avendo usato $\dfrac{1}{2}=\cos\dfrac{\pi}{3}$ e $\dfrac{\sqrt3}{2}=\sin\dfrac{\pi}{3}$.

Il grafico $\lambda$ si ottiene da $y=\sin x$ mediante:

- $y=\sin\!\left(x+\dfrac{\pi}{3}\right)$: traslazione verso sinistra di $\dfrac{\pi}{3}$;
- $y=2\sin\!\left(x+\dfrac{\pi}{3}\right)$: dilatazione verticale di fattore $2$;
- $y=2\sin\!\left(x+\dfrac{\pi}{3}\right)-2$: traslazione verso il basso di $2$.

Poiché $-1\le\sin\!\left(x+\dfrac{\pi}{3}\right)\le 1$, si ha $-4\le f(x)\le 0$.

**Massimo assoluto:** si ottiene quando $\sin\!\left(x+\dfrac{\pi}{3}\right)=1$, cioè $x+\dfrac{\pi}{3}=\dfrac{\pi}{2}$, da cui $x=\dfrac{\pi}{6}\in[-\pi;\pi]$; il valore è
$$f\!\left(\frac{\pi}{6}\right)=2\cdot 1-2=0.$$

**Minimo assoluto:** si ottiene quando $\sin\!\left(x+\dfrac{\pi}{3}\right)=-1$, cioè $x+\dfrac{\pi}{3}=-\dfrac{\pi}{2}$, da cui $x=-\dfrac{5\pi}{6}\in[-\pi;\pi]$; il valore è
$$f\!\left(-\frac{5\pi}{6}\right)=2\cdot(-1)-2=-4.$$

Agli estremi dell'intervallo $f(-\pi)=f(\pi)=-\sqrt3-2\approx-3{,}73$, valori interni all'intervallo $[-4;0]$. La funzione ammette dunque massimo assoluto $0$ (in $x=\pi/6$) e minimo assoluto $-4$ (in $x=-5\pi/6$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="290.188" height="213.358" viewBox="-72 -72 217.641 160.018"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-33.547h204.46"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M130.51-35.947c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="30.36" y="-33.547" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.963 2.153)">x</text><path fill="none" d="M30.36 86.807V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M27.96-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="30.36" y="-33.547" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -31.085)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.027 62.02 1.502 1.289 1.502 1.163 1.502 1.031 1.503.899 1.502.763 1.502.624 1.502.485 1.502.344 1.502.203 1.503.059 1.502-.084 1.502-.225 1.502-.368 1.502-.508 1.502-.648 1.503-.785 1.502-.921 1.502-1.054 1.502-1.183 1.502-1.31 1.503-1.433 1.502-1.552 1.502-1.667 1.502-1.777 1.502-1.882 1.502-1.98 1.503-2.077 1.502-2.164 1.502-2.247 1.502-2.322 1.502-2.394 1.502-2.455 1.503-2.512 1.502-2.561 1.502-2.604 1.502-2.639 1.502-2.665 1.502-2.686 1.503-2.699 1.502-2.702 1.502-2.7 1.502-2.691L5.566 8.71 7.07 6.064 8.57 3.447 10.073.87l1.502-2.529 1.502-2.476L14.58-6.55l1.503-2.348 1.502-2.273 1.502-2.193 1.502-2.107 1.502-2.013 1.502-1.917 1.503-1.813 1.502-1.705 1.502-1.592 1.502-1.473 1.502-1.352 1.502-1.227 1.503-1.1 1.502-.965 1.502-.831 1.502-.696 1.502-.556 1.503-.415 1.502-.274 1.502-.131 1.502.01 1.502.154 1.502.295 1.503.438 1.502.577 1.502.716 1.502.852 1.502.987 1.502 1.118 1.503 1.247 1.502 1.37 1.502 1.494 1.502 1.609 1.502 1.722 1.502 1.83 1.503 1.93 1.502 2.03 1.502 2.121 1.502 2.206 1.502 2.285L76.17-6.18l1.502 2.425 1.502 2.485 1.502 2.536 1.502 2.584 1.502 2.622 1.503 2.652 1.502 2.677 1.502 2.693 1.502 2.701 1.502 2.703 1.502 2.696 1.503 2.683 1.502 2.662 1.502 2.633 1.502 2.598 1.502 2.554 1.502 2.504 1.503 2.447 1.502 2.382 1.502 2.312 1.502 2.234 1.502 2.151 1.503 2.063 1.502 1.965 1.502 1.866 1.502 1.761 1.502 1.65 1.502 1.533 1.503 1.415"/><path fill="red" stroke="none" d="M47.258-33.547c0-.994-.895-1.8-2-1.8s-2 .806-2 1.8.895 1.8 2 1.8 2-.806 2-1.8m-2 0"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="30.36" y="-33.547" font-family="cmmi10" font-size="10" transform="translate(18.431 -7.033)">M</text><text x="42.818" y="-41.647" font-family="cmex10" font-size="10" transform="translate(18.431 -7.033)">¡</text><text x="48.602" y="-37.484" font-family="cmmi7" font-size="7" transform="translate(18.431 -7.033)">¼</text><path d="M67.033-43.28h4.927v.4h-4.927z"/><text x="49.072" y="-30.098" font-family="cmr7" font-size="7" transform="translate(18.431 -7.033)">6</text><text x="54.729" y="-33.547" font-family="cmmi10" font-size="10" transform="translate(18.431 -7.033)">;</text><text x="59.174" y="-33.547" font-family="cmr10" font-size="10" transform="translate(18.431 -7.033)">0</text><text x="64.174" y="-41.647" font-family="cmex10" font-size="10" transform="translate(18.431 -7.033)">¢</text></g></g><path fill="red" stroke="none" d="M-42.13 68.882c0-.994-.895-1.8-2-1.8s-2 .806-2 1.8.896 1.8 2 1.8 2-.806 2-1.8m-2 0"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="30.36" y="-33.547" font-family="cmmi10" font-size="10" transform="translate(-70.956 114.462)">m</text><text x="40.807" y="-41.647" font-family="cmex10" font-size="10" transform="translate(-70.956 114.462)">¡</text><text x="45.39" y="-33.547" font-family="cmsy10" font-size="10" transform="translate(-70.956 114.462)">¡</text><text x="54.368" y="-37.484" font-family="cmr7" font-size="7" transform="translate(-70.956 114.462)">5</text><text x="58.354" y="-37.484" font-family="cmmi7" font-size="7" transform="translate(-70.956 114.462)">¼</text><path d="M-16.588 78.215h8.914v.4h-8.914z"/><text x="56.832" y="-30.098" font-family="cmr7" font-size="7" transform="translate(-70.956 114.462)">6</text><text x="64.482" y="-33.547" font-family="cmmi10" font-size="10" transform="translate(-70.956 114.462)">;</text><text x="68.926" y="-33.547" font-family="cmsy10" font-size="10" transform="translate(-70.956 114.462)">¡</text><text x="76.704" y="-33.547" font-family="cmr10" font-size="10" transform="translate(-70.956 114.462)">4</text><text x="81.704" y="-41.647" font-family="cmex10" font-size="10" transform="translate(-70.956 114.462)">¢</text></g></g><path fill="none" stroke-dasharray="3.0,3.0" d="M45.258-33.547v51.215m-89.387 51.214H30.36"/><text x="30.36" y="-33.547" stroke="none" font-family="cmmi10" font-size="10" transform="translate(86.358 9.119)">¼</text><g stroke="none" font-size="10"><text x="30.36" y="-33.547" font-family="cmsy10" transform="translate(-96.306 10.647)">¡</text><text x="38.138" y="-33.547" font-family="cmmi10" transform="translate(-96.306 10.647)">¼</text></g><g stroke="none" font-size="10"><text x="30.36" y="-33.547" font-family="cmsy10" transform="translate(-16.31 105.235)">¡</text><text x="38.138" y="-33.547" font-family="cmr10" transform="translate(-16.31 105.235)">4</text></g></g></svg>
</figure>

## c) Area della regione

Il punto $C$ di $\lambda$ di ascissa nulla ha ordinata
$$f(0)=2\sin\frac{\pi}{3}-2=\sqrt3-2,$$
quindi $C=(0;\ \sqrt3-2)$. La tangente in $C$ ha coefficiente angolare $f'(0)$, con
$$f'(x)=2\cos\!\left(x+\frac{\pi}{3}\right)\ \Rightarrow\ f'(0)=2\cos\frac{\pi}{3}=1.$$
La tangente $t$ ha pertanto equazione
$$y-(\sqrt3-2)=x \ \Rightarrow\ y=x+\sqrt3-2.$$

La regione finita è delimitata dalla tangente $t$, dalla curva $\lambda$ e dalla retta $x=\dfrac{\pi}{2}$. Nell'intervallo $\left[0;\dfrac{\pi}{2}\right]$ la tangente sta sopra la curva, quindi

$$\text{Area}=\int_{0}^{\pi/2}\Big[(x+\sqrt3-2)-\big(2\sin(x+\tfrac{\pi}{3})-2\big)\Big]\,dx
=\int_{0}^{\pi/2}\Big[x+\sqrt3-2\sin\!\left(x+\frac{\pi}{3}\right)\Big]\,dx.$$

Una primitiva è
$$\frac{x^2}{2}+\sqrt3\,x+2\cos\!\left(x+\frac{\pi}{3}\right),$$
da cui
$$\text{Area}=\left[\frac{x^2}{2}+\sqrt3\,x+2\cos\!\left(x+\frac{\pi}{3}\right)\right]_{0}^{\pi/2}.$$

Nell'estremo superiore, ricordando $\cos\dfrac{5\pi}{6}=-\dfrac{\sqrt3}{2}$:
$$\frac{\pi^2}{8}+\frac{\sqrt3}{2}\pi+2\cos\frac{5\pi}{6}=\frac{\pi^2}{8}+\frac{\sqrt3}{2}\pi-\sqrt3,$$
mentre nell'estremo inferiore $2\cos\dfrac{\pi}{3}=1$. Perciò

$$\text{Area}=\frac{\pi^2}{8}+\frac{\sqrt3}{2}\pi-\sqrt3-1\ \approx\ 1{,}22\ \text{u}^2.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="209.003" height="191.115" viewBox="-72 -72 156.752 143.337"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="m-55.71 17.247 2.635-1.604 2.636-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.636-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.636-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.636-1.604 2.635-1.605 2.635-1.604 2.635-1.604 2.635-1.604 2.635-1.604L4.9-19.646l2.635-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.636-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.636-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.635-1.604 2.636-1.604 2.635-1.604.023 91.716-2.635-2.744-2.636-2.675-2.635-2.605-2.635-2.524-2.635-2.442-2.635-2.358-2.636-2.27-2.635-2.175-2.635-2.079-2.635-1.98-2.635-1.872-2.636-1.77-2.635-1.662-2.635-1.545-2.635-1.434-2.635-1.318-2.636-1.197-2.635-1.077-2.635-.956-2.635-.831-2.635-.704-2.636-.58-2.635-.452-2.635-.321-2.635-.195-2.635-.068-2.635.067-2.636.194-2.635.318-2.635.452-2.635.578-2.635.702-2.636.83-2.635.954-2.635 1.075-2.635 1.197-2.635 1.316-2.636 1.432-2.635 1.545Z"/><path fill="none" d="M-72.07 6.571H71.5"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M69.62 4.171c.38 1.44 1.228 2.12 2.08 2.4-.852.28-1.7.96-2.08 2.4"/><text x="-55.71" y="6.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.143 2.153)">x</text><path fill="none" d="M-55.71 60.347V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-58.11-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-55.71" y="6.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -71.203)">y</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-63.562 22.512 1.744-1.251 1.745-1.206 1.744-1.157 1.745-1.111 1.744-1.062 1.745-1.012 1.744-.963 1.744-.912 1.745-.86 1.744-.808 1.745-.757 1.744-.701 1.745-.65 1.744-.592 1.745-.543 1.744-.483 1.745-.431 1.744-.372 1.745-.319 1.744-.26 1.745-.208 1.744-.15 1.745-.093 1.744-.036 1.745.02 1.744.077 1.745.134 1.744.188 1.744.248 1.745.3 1.744.36 1.745.411 1.744.472 1.745.521 1.744.583 1.745.63 1.744.689 1.745.74 1.744.794 1.745.843 1.744.899 1.745.947 1.744.998 1.745 1.048 1.744 1.095 1.745 1.147 1.744 1.19 1.745 1.24 1.744 1.282 1.745 1.33 1.744 1.37 1.744 1.418 1.745 1.454 1.744 1.5 1.745 1.534 1.744 1.577 1.745 1.613 1.744 1.65 1.745 1.683 1.744 1.718 1.745 1.752 1.744 1.78 1.745 1.813 1.744 1.84 1.745 1.87 1.744 1.894 1.745 1.922 1.744 1.941 1.745 1.966"/><text x="-55.71" y="6.571" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(116.25 61.162)">¸</text></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="M-63.562 22.027 56.85-51.267"/><text x="-55.71" y="6.571" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(116.292 -54.763)">t</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M47.086 60.347V-59.154"/><g stroke="none"><text x="-54.51" y="2.634" font-family="cmmi7" font-size="7" transform="translate(99.132 10.484)">¼</text><path d="M44.622 14.355h4.927v.4h-4.927z"/><text x="-54.039" y="10.02" font-family="cmr7" font-size="7" transform="translate(99.132 10.484)">2</text></g><path stroke="none" d="M-52.72 17.247c0-1.005-1.338-1.82-2.99-1.82-1.651 0-2.99.815-2.99 1.82s1.339 1.82 2.99 1.82 2.99-.815 2.99-1.82m-2.99 0"/><text x="-55.71" y="6.571" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.395 14.092)">C</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.63](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
