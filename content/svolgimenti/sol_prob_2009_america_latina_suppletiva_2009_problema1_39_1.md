

**Problema:** [[Problemi/prob_2009_america_latina_suppletiva_2009_problema1_39_1|2009 America Latina Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_problema1_39|2009 America Latina Suppletiva — Problema 1]]

L'ellisse $\Sigma$ ha equazione $x^{2}+4y^{2}-4=0$.

## a)

Portiamo l'equazione in forma canonica dividendo per $4$:
$$x^{2}+4y^{2}=4 \quad\Rightarrow\quad \frac{x^{2}}{4}+y^{2}=1.$$

Dunque $a^{2}=4$ e $b^{2}=1$, cioè $a=2$ e $b=1$. Poiché $a>b$, l'asse maggiore è l'asse $x$.

- **Vertici:** $A=(-2;0)$, $B=(2;0)$, $C=(0;-1)$, $D=(0;1)$.
- **Lunghezze degli assi:** asse maggiore $2a=4$, asse minore $2b=2$.
- **Fuochi:** la semidistanza focale è
$$c=\sqrt{a^{2}-b^{2}}=\sqrt{4-1}=\sqrt{3},$$
e, appartenendo i fuochi all'asse $x$, si ha $F_{1}=(-\sqrt{3};0)$ e $F_{2}=(\sqrt{3};0)$.
- **Eccentricità:** è il rapporto fra la semidistanza focale e il semiasse maggiore,
$$e=\frac{c}{a}=\frac{\sqrt{3}}{2}\approx 0{,}87,$$
compresa fra $0$ e $1$ come per ogni ellisse.

## b)

Sia $C=(x;y)$ il vertice del generico rettangolo inscritto appartenente al primo quadrante, con $0<x<2$ e $0<y<1$. Per la simmetria dell'ellisse i lati misurano $2x$ e $2y$, quindi l'area è
$$\text{Area}=2x\cdot 2y=4xy,\qquad \text{con}\ x^{2}+4y^{2}=4.$$

L'area è massima quando lo è $x^{2}y^{2}$. Dalla relazione $x^{2}=4-4y^{2}$ poniamo
$$w(y)=x^{2}y^{2}=(4-4y^{2})\,y^{2}=4y^{2}-4y^{4}.$$

Derivando:
$$w'(y)=8y-16y^{3}=8y\,(1-2y^{2}).$$
Essendo $y>0$, si ha $w'(y)\ge 0$ quando $1-2y^{2}\ge 0$, cioè $y\le \dfrac{\sqrt{2}}{2}$. Quindi $w$ (e con essa l'area) è massima per
$$y=\frac{\sqrt{2}}{2}.$$
Dalla $x^{2}=4-4y^{2}=4-4\cdot\dfrac{1}{2}=2$ segue $x=\sqrt{2}$.

Il vertice nel primo quadrante è dunque $C=\left(\sqrt{2};\dfrac{\sqrt{2}}{2}\right)$ e, per simmetria,
$$A=\left(-\sqrt{2};-\tfrac{\sqrt{2}}{2}\right),\quad B=\left(\sqrt{2};-\tfrac{\sqrt{2}}{2}\right),\quad D=\left(-\sqrt{2};\tfrac{\sqrt{2}}{2}\right).$$

L'area massima vale
$$\text{Area}=4xy=4\cdot\sqrt{2}\cdot\frac{\sqrt{2}}{2}=4.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="332.679" height="199.853" viewBox="-72 -72 249.509 149.89"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 9.133h236.328"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M162.378 6.733c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="46.294" y="9.133" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.897 2.153)">x</text><path fill="none" d="M46.294 77.42V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M43.894-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="46.294" y="9.133" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -73.764)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m137.343 9.133-.129-2.402-.38-2.395-.633-2.383-.883-2.363-1.133-2.336-1.374-2.303-1.62-2.262-1.854-2.218-2.086-2.166-2.31-2.107-2.531-2.043-2.743-1.973-2.947-1.899-3.145-1.818-3.33-1.733-3.508-1.642-3.678-1.548-3.837-1.448-3.981-1.345-4.12-1.238-4.245-1.128-4.359-1.014-4.458-.897-4.547-.78-4.624-.658-4.686-.534-4.736-.41-4.772-.285-4.797-.159-4.805-.032-4.801.096-4.786.22-4.756.348-4.712.473-4.659.597-4.586.717-4.505.84-4.41.955-4.302 1.071-4.185 1.184-4.053 1.292-3.912 1.397-3.757 1.5-3.595 1.595-3.42 1.688-3.238 1.775-3.045 1.86-2.847 1.937-2.636 2.01-2.422 2.075-2.2 2.138-1.97 2.192-1.736 2.24-1.496 2.285-1.255 2.32L-43.2.77l-.758 2.373-.507 2.39-.254 2.4v2.401l.254 2.4.507 2.39.758 2.373 1.007 2.35 1.254 2.321 1.497 2.283 1.738 2.241 1.97 2.193 2.198 2.137 2.423 2.076 2.635 2.01 2.847 1.936 3.045 1.86 3.239 1.776 3.42 1.688 3.595 1.595 3.757 1.5 3.912 1.396L-.61 48.15l4.185 1.184 4.3 1.071 4.413.956 4.503.84 4.589.717 4.655.596 4.714.474 4.754.347 4.787.22 4.802.097 4.805-.033 4.797-.158 4.772-.285 4.736-.41 4.685-.535 4.623-.658 4.55-.778 4.457-.899 4.357-1.014 4.247-1.127 4.118-1.238 3.983-1.346 3.836-1.447 3.679-1.549 3.508-1.642 3.33-1.732 3.144-1.818 2.948-1.899 2.741-1.974 2.532-2.043 2.311-2.107 2.086-2.166 1.854-2.217 1.619-2.263 1.377-2.303 1.13-2.336.884-2.362.634-2.382.379-2.396.128-2.402"/><path fill="none" stroke="red" stroke-width=".8" d="M110.666-23.053H-18.078v64.372h128.744Z"/><path stroke="none" d="M112.586-23.053a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="46.294" y="9.133" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.905 -35.719)">C</text><path stroke="none" d="M127.062 9.133a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g stroke="none"><text x="46.294" y="9.133" font-family="cmmi10" font-size="10" transform="translate(82.381 10.366)">F</text><text x="52.725" y="10.633" font-family="cmr7" font-size="7" transform="translate(82.381 10.366)">2</text></g><path stroke="none" d="M-30.634 9.133a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g stroke="none"><text x="46.294" y="9.133" font-family="cmmi10" font-size="10" transform="translate(-93.298 10.366)">F</text><text x="52.725" y="10.633" font-family="cmr7" font-size="7" transform="translate(-93.298 10.366)">1</text></g><g stroke="none" font-family="cmr10" font-size="10"><text x="46.294" y="9.133" transform="translate(17.795 -12.712)">area</text><text x="67.989" y="9.133" transform="translate(17.795 -12.712)">=</text><text x="78.544" y="9.133" transform="translate(17.795 -12.712)">4</text></g></g></svg>
</figure>

## c)

Con $y>0$, dall'equazione $\dfrac{x^{2}}{4}+y^{2}=1$ ricaviamo $y=\sqrt{1-\dfrac{x^{2}}{4}}=\dfrac{1}{2}\sqrt{4-x^{2}}$. La somma delle coordinate di $P=(x;y)$ è dunque
$$f(x)=x+\frac{1}{2}\sqrt{4-x^{2}}.$$

**Dominio.** Serve $4-x^{2}>0$; inoltre l'ordinata è positiva, quindi si escludono $x=\pm 2$:
$$-2<x<2.$$

**Intersezioni con gli assi.** Per $x=0$ si ha $f(0)=1$, cioè il punto $(0;1)$. Per $f(x)=0$:
$$\frac{1}{2}\sqrt{4-x^{2}}=-x \ \Rightarrow\ \sqrt{4-x^{2}}=-2x,$$
che richiede $x\le 0$; elevando al quadrato, $4-x^{2}=4x^{2}$, cioè $5x^{2}=4$ e $x=-\dfrac{2}{\sqrt{5}}=-\dfrac{2\sqrt{5}}{5}$. Il grafico interseca l'asse $x$ in $\left(-\dfrac{2\sqrt{5}}{5};0\right)$.

**Segno.** Risulta $f(x)\ge 0$ per $-\dfrac{2\sqrt{5}}{5}\le x<2$ e $f(x)<0$ per $-2<x<-\dfrac{2\sqrt{5}}{5}$.

**Limiti agli estremi.**
$$\lim_{x\to -2^{+}} f(x)=-2,\qquad \lim_{x\to 2^{-}} f(x)=2.$$

**Derivata prima.**
$$f'(x)=1-\frac{x}{2\sqrt{4-x^{2}}}=\frac{2\sqrt{4-x^{2}}-x}{2\sqrt{4-x^{2}}}.$$
Si ha $f'(x)\ge 0$ quando $2\sqrt{4-x^{2}}\ge x$. Per $x<0$ è sempre verificata; per $x\ge 0$, elevando al quadrato, $4(4-x^{2})\ge x^{2}$, cioè $5x^{2}\le 16$ e $x\le \dfrac{4}{\sqrt{5}}$. Quindi
$$f'(x)>0 \ \text{per}\ -2<x<\frac{4}{\sqrt{5}},\qquad f'(x)<0 \ \text{per}\ \frac{4}{\sqrt{5}}<x<2.$$
La funzione ha un **massimo assoluto** in $x=\dfrac{4}{\sqrt{5}}=\dfrac{4\sqrt{5}}{5}\approx 1{,}79$, con ordinata
$$y=\frac{4}{\sqrt{5}}+\frac{1}{2}\sqrt{4-\frac{16}{5}}=\frac{4}{\sqrt{5}}+\frac{1}{\sqrt{5}}=\sqrt{5}\approx 2{,}24,$$
cioè $M=\left(\dfrac{4\sqrt{5}}{5};\sqrt{5}\right)$.

Agli estremi del dominio $f'(x)\to +\infty$ per $x\to -2^{+}$ e $f'(x)\to -\infty$ per $x\to 2^{-}$: il grafico presenta **tangenti verticali**.

**Derivata seconda.**
$$f''(x)=-\frac{2}{\left(\sqrt{4-x^{2}}\right)^{3}}<0 \quad\text{per ogni } x\in(-2,2).$$
La concavità è sempre rivolta verso il basso e non ci sono flessi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="273.497" height="269.277" viewBox="-72 -72 205.123 201.958"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 40.715h191.941"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M117.991 38.315c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="24.101" y="40.715" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.704 2.153)">x</text><path fill="none" d="M24.1 129.488V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M21.7-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="24.101" y="40.715" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -105.347)">y</text><path fill="none" d="M-49.877 38.866v3.699"/><g stroke="none" font-size="8"><text x="24.101" y="40.715" font-family="cmsy8" transform="translate(-79.408 10.538)">¡</text><text x="30.712" y="40.715" font-family="cmr8" transform="translate(-79.408 10.538)">2</text></g><path fill="none" d="M-12.888 38.866v3.699"/><g stroke="none" font-size="8"><text x="24.101" y="40.715" font-family="cmsy8" transform="translate(-42.42 10.538)">¡</text><text x="30.712" y="40.715" font-family="cmr8" transform="translate(-42.42 10.538)">1</text></g><path fill="none" d="M61.09 38.866v3.699"/><text x="24.101" y="40.715" stroke="none" font-family="cmr8" font-size="8" transform="translate(34.864 10.538)">1</text><path fill="none" d="M98.078 38.866v3.699"/><text x="24.101" y="40.715" stroke="none" font-family="cmr8" font-size="8" transform="translate(71.852 10.538)">2</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-49.877 114.692 1.494-8.89 1.494-4.503 1.494-3.767 1.494-3.38 1.494-3.127 1.494-2.945 1.494-2.805 1.494-2.693 1.494-2.599 1.494-2.52 1.494-2.45 1.494-2.389 1.494-2.335 1.494-2.286 1.494-2.24 1.494-2.2 1.494-2.164 1.494-2.127 1.494-2.094 1.494-2.063 1.494-2.034 1.494-2.007 1.494-1.98 1.494-1.956 1.494-1.931 1.494-1.909 1.494-1.886 1.494-1.865 1.494-1.843 1.494-1.825 1.494-1.805 1.494-1.785 1.493-1.768 1.494-1.75 1.494-1.73 1.494-1.715L5.4 23.628l1.494-1.68 1.494-1.665 1.494-1.648 1.494-1.633 1.494-1.616 1.494-1.601 1.494-1.585 1.494-1.57 1.494-1.555 1.494-1.54 1.494-1.524 1.494-1.51 1.494-1.494 1.494-1.479L27.81.064l1.494-1.449 1.494-1.433 1.494-1.42 1.494-1.402 1.494-1.388L36.774-8.4l1.494-1.356 1.494-1.34 1.494-1.324 1.494-1.308 1.494-1.29 1.494-1.275 1.494-1.257 1.494-1.239 1.494-1.221 1.493-1.203 1.494-1.184 1.494-1.164 1.494-1.145 1.494-1.124 1.494-1.102 1.494-1.08 1.494-1.058 1.494-1.033 1.494-1.009 1.494-.982 1.494-.955 1.494-.925 1.494-.895 1.494-.862 1.494-.827 1.494-.789 1.494-.748 1.494-.704 1.494-.655 1.494-.6 1.494-.54 1.494-.471 1.494-.392 1.494-.299 1.494-.187 1.494-.048 1.494.132 1.494.38 1.494.763 1.494 1.479 1.494 4.649"/><path stroke="none" d="M91.833-41.991a1.56 1.56 0 1 0-3.12 0 1.56 1.56 0 0 0 3.12 0m-1.56 0"/><text x="24.101" y="40.715" stroke="none" font-family="cmmi10" font-size="10" transform="translate(69.706 -86.24)">M</text><path stroke="none" d="M-7.407 40.715a1.56 1.56 0 1 0-3.12 0 1.56 1.56 0 0 0 3.12 0M25.66 3.726a1.56 1.56 0 1 0-3.12 0 1.56 1.56 0 0 0 3.12 0m-1.56 0"/><text x="24.101" y="40.715" stroke="none" font-family="cmr8" font-size="8" transform="translate(-7.783 -40.522)">1</text></g></svg>
</figure>

## d)

L'area della regione $R$ delimitata dal grafico di $f$, dall'asse $x$ e dalle rette $x=0$, $x=2$ è
$$\text{Area}=\int_{0}^{2} f(x)\,dx=\int_{0}^{2}\left(x+\frac{1}{2}\sqrt{4-x^{2}}\right)dx.$$

Una primitiva di $\sqrt{4-x^{2}}$ (con la sostituzione $x=2\sin t$) è $2\arcsin\dfrac{x}{2}+\dfrac{x}{2}\sqrt{4-x^{2}}$, quindi
$$\int\left(x+\frac{1}{2}\sqrt{4-x^{2}}\right)dx=\frac{x^{2}}{2}+\arcsin\frac{x}{2}+\frac{x}{4}\sqrt{4-x^{2}}+K.$$

Valutando fra $0$ e $2$:
$$\text{Area}=\left[\frac{x^{2}}{2}+\arcsin\frac{x}{2}+\frac{x}{4}\sqrt{4-x^{2}}\right]_{0}^{2}=2+\arcsin(1)-0=2+\frac{\pi}{2}\approx 3{,}57.$$

Poiché il punto di ascissa $x=2$ non appartiene al grafico, l'area si intende come integrale improprio $\displaystyle\lim_{k\to 2^{-}}\int_{0}^{k} f(x)\,dx$, che fornisce lo stesso valore $2+\dfrac{\pi}{2}$.

*Fonte:* [📄 PDF p.39](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
