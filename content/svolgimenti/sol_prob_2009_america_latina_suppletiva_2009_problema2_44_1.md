

**Problema:** [[Problemi/prob_2009_america_latina_suppletiva_2009_problema2_44_1|2009 America Latina Suppletiva — Problema 2 — Problema 2]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_problema2_44|2009 America Latina Suppletiva — Problema 2]]

Nel piano $Oxy$ è assegnata la circonferenza $C$ di centro $O$ e raggio $1$, di equazione $x^2+y^2=1$.

## a)

Cerchiamo i punti di $C$ di ascissa $\frac{1}{2}$. Sostituendo nell'equazione della circonferenza:

$$\frac{1}{4}+y^2=1 \quad\Rightarrow\quad y^2=\frac{3}{4} \quad\Rightarrow\quad y=\pm\frac{\sqrt{3}}{2}.$$

I punti richiesti sono dunque

$$S=\left(\frac{1}{2};\,-\frac{\sqrt{3}}{2}\right),\qquad T=\left(\frac{1}{2};\,\frac{\sqrt{3}}{2}\right).$$

Per le tangenti a $C$ in un suo punto $(x_0;y_0)$ usiamo la formula di sdoppiamento $x_0x+y_0y=1$.

Tangente in $S$:

$$\frac{1}{2}x-\frac{\sqrt{3}}{2}y=1 \quad\Rightarrow\quad x-\sqrt{3}\,y=2.$$

Tangente in $T$:

$$\frac{1}{2}x+\frac{\sqrt{3}}{2}y=1 \quad\Rightarrow\quad x+\sqrt{3}\,y=2.$$

## b)

Sia $P\in C$ a coordinate non negative, $Q$ l'intersezione della tangente a $C$ in $P$ con l'asse $x$ e $N$ l'intersezione della retta $OP$ con la retta $y=2$. Vogliamo determinare $P$ in modo che l'area del triangolo $PQN$ sia minima.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="268.77" height="272.2" viewBox="-72 -72 201.577 204.15"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-32.036 74.574H98.446"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M96.566 72.174c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(117.344 2.153)">x</text><path fill="none" d="M-14.965 91.646v-150.4"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-17.365-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -139.206)">y</text><path fill="none" stroke-width=".8" d="M41.941 74.574c0-31.428-25.477-56.905-56.906-56.905S-71.87 43.146-71.87 74.574s25.477 56.906 56.905 56.906 56.906-25.477 56.906-56.906Zm-56.906 0"/><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-26.345-39.237H98.846"/><g stroke="none" font-size="10"><text x="-14.965" y="74.574" font-family="cmmi10" transform="translate(117.344 -111.561)">y</text><text x="-6.925" y="74.574" font-family="cmr10" transform="translate(117.344 -111.561)">=</text><text x="3.63" y="74.574" font-family="cmr10" transform="translate(117.344 -111.561)">2</text></g></g><path fill="none" d="m-14.965 74.574 95.488-113.81M21.626 30.984l51.954 43.59"/><path fill="#d9d9ff" stroke="none" d="m21.626 30.984 51.954 43.59 6.943-113.81Z"/><path fill="none" stroke="#00f" d="m21.626 30.984 51.954 43.59 6.943-113.81Z"/><path stroke="none" d="M-13.826 74.574a1.138 1.138 0 1 0-2.277 0 1.138 1.138 0 0 0 2.277 0m-1.139 0"/><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path stroke="none" d="M43.079 74.574a1.138 1.138 0 1 0-2.276 0 1.138 1.138 0 0 0 2.276 0m-1.138 0"/><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(60.438 10.366)">A</text><path stroke="none" d="M22.764 30.984a1.138 1.138 0 1 0-2.276 0 1.138 1.138 0 0 0 2.276 0m-1.138 0"/><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(25.249 -47.123)">P</text><path stroke="none" d="M74.719 74.574a1.138 1.138 0 1 0-2.277 0 1.138 1.138 0 0 0 2.277 0m-1.139 0"/><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(84.592 10.366)">Q</text><path stroke="none" d="M81.661-39.237a1.138 1.138 0 1 0-2.277 0 1.138 1.138 0 0 0 2.277 0m-1.138 0"/><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.02 -117.344)">N</text><text x="-14.965" y="74.574" stroke="none" font-family="cmmi10" font-size="10" transform="translate(15.562 -10.366)">®</text></g></svg>
</figure>

Poniamo $\alpha=P\hat{O}Q$, con $0<\alpha<\frac{\pi}{2}$ (il valore $\alpha=0$ non è accettabile perché non esisterebbe $N$). Poiché $C$ è la circonferenza goniometrica, si ha

$$P=(\cos\alpha;\,\sin\alpha).$$

La retta $OP$ ha equazione $y=(\tan\alpha)\,x$; la sua intersezione con la retta $y=2$ è

$$N=\left(\frac{2}{\tan\alpha};\,2\right),\qquad \overline{ON}=\frac{2}{\sin\alpha}.$$

Nel triangolo $OPQ$, rettangolo in $P$ (la tangente in $P$ è perpendicolare al raggio $OP$), con $\overline{OP}=1$ si ha

$$\overline{OQ}=\frac{\overline{OP}}{\cos\alpha}=\frac{1}{\cos\alpha},\qquad Q=\left(\frac{1}{\cos\alpha};\,0\right).$$

I cateti del triangolo $PQN$, retto in $P$ (poiché $PQ$ giace sulla tangente e $PN$ sulla retta $OP$, tra loro perpendicolari), valgono

$$\overline{PQ}=\overline{OP}\,\tan\alpha=\tan\alpha,\qquad \overline{PN}=\overline{ON}-\overline{OP}=\frac{2}{\sin\alpha}-1=\frac{2-\sin\alpha}{\sin\alpha}.$$

L'area del triangolo è quindi

$$\text{Area}(PQN)=\frac{\overline{PQ}\cdot\overline{PN}}{2}=\frac{1}{2}\cdot\frac{\sin\alpha}{\cos\alpha}\cdot\frac{2-\sin\alpha}{\sin\alpha}=\frac{2-\sin\alpha}{2\cos\alpha}.$$

Studiamo il minimo assoluto della funzione

$$f(\alpha)=\frac{2-\sin\alpha}{2\cos\alpha},\qquad 0<\alpha<\frac{\pi}{2}.$$

Calcoliamo la derivata:

$$f'(\alpha)=\frac{1}{2}\cdot\frac{-\cos\alpha\cdot\cos\alpha+\sin\alpha\,(2-\sin\alpha)}{\cos^2\alpha}=\frac{1}{2}\cdot\frac{-\cos^2\alpha-\sin^2\alpha+2\sin\alpha}{\cos^2\alpha}=\frac{2\sin\alpha-1}{2\cos^2\alpha}.$$

Poiché $\cos^2\alpha>0$, il segno di $f'$ dipende da $2\sin\alpha-1$:

$$f'(\alpha)\ge 0 \iff \sin\alpha\ge\frac{1}{2} \iff \alpha\ge\frac{\pi}{6}.$$

Dunque $f$ è decrescente per $0<\alpha<\frac{\pi}{6}$ e crescente per $\frac{\pi}{6}<\alpha<\frac{\pi}{2}$: l'area è minima per $\alpha=\frac{\pi}{6}$, cioè per

$$P=\left(\cos\frac{\pi}{6};\,\sin\frac{\pi}{6}\right)=\left(\frac{\sqrt{3}}{2};\,\frac{1}{2}\right).$$

Il valore minimo dell'area è

$$f\!\left(\frac{\pi}{6}\right)=\frac{2-\frac{1}{2}}{2\cdot\frac{\sqrt{3}}{2}}=\frac{\frac{3}{2}}{\sqrt{3}}=\frac{3}{2\sqrt{3}}=\frac{\sqrt{3}}{2}.$$

## c)

Sia ora $P\in C$ tale che $P\hat{O}A=\frac{\pi}{6}$, con $A(1;0)$; risulta ancora $P=\left(\frac{\sqrt{3}}{2};\,\frac{1}{2}\right)$, quindi $x_P=\frac{\sqrt{3}}{2}$. Il settore circolare $POA$ è la base di un solido le cui sezioni con piani ortogonali all'asse $x$ sono tutte quadrate. Il volume si ottiene sommando due contributi.

Per $0\le x\le \frac{\sqrt{3}}{2}$ il lato del quadrato è dato dall'ordinata della retta $OP$. Essendo $\tan\frac{\pi}{6}=\frac{\sqrt{3}}{3}$, la retta $OP$ ha equazione $y=\frac{\sqrt{3}}{3}x$, quindi il lato vale $\frac{\sqrt{3}}{3}x$ e l'area della sezione è

$$A(x)=\left(\frac{\sqrt{3}}{3}x\right)^2=\frac{1}{3}x^2.$$

Perciò

$$V_1=\int_0^{\frac{\sqrt{3}}{2}}\frac{1}{3}x^2\,dx=\frac{1}{3}\left[\frac{x^3}{3}\right]_0^{\frac{\sqrt{3}}{2}}=\frac{1}{9}\cdot\frac{3\sqrt{3}}{8}=\frac{\sqrt{3}}{24}.$$

Per $\frac{\sqrt{3}}{2}\le x\le 1$ il lato del quadrato è dato dall'ordinata della circonferenza $y=\sqrt{1-x^2}$ (con $x>0$), quindi l'area della sezione è

$$B(x)=1-x^2,$$

e di conseguenza

$$V_2=\int_{\frac{\sqrt{3}}{2}}^{1}(1-x^2)\,dx=\left[x-\frac{x^3}{3}\right]_{\frac{\sqrt{3}}{2}}^{1}=\left(1-\frac{1}{3}\right)-\left(\frac{\sqrt{3}}{2}-\frac{1}{3}\cdot\frac{3\sqrt{3}}{8}\right)=\frac{2}{3}-\frac{3\sqrt{3}}{8}.$$

Il volume richiesto è dunque

$$V=V_1+V_2=\frac{\sqrt{3}}{24}+\frac{2}{3}-\frac{3\sqrt{3}}{8}=\frac{2}{3}+\frac{\sqrt{3}-9\sqrt{3}}{24}=\frac{2}{3}-\frac{\sqrt{3}}{3}=\frac{2-\sqrt{3}}{3}\approx 0{,}089.$$

*Fonte:* [📄 PDF p.44](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
