

**Problema:** [[Problemi/prob_2000_sessione_straordinaria_2000_problema3_29_1|2000 Straordinaria — Problema 3 — Problema 1]] · **Prova:** [[Prove/2000_sessione_straordinaria_2000_problema3_29|2000 Straordinaria — Problema 3]]

Della parabola $f(x)=ax^2+bx+c$ si hanno le seguenti informazioni, tutte localizzate nel punto $x=0$: $f(0)=1$, $f'(0)=0$, $f''(0)=2$.

**Determinazione della parabola.** Da $c=f(0)=1$; da $f'(x)=2ax+b$ e $f'(0)=b=0$; da $f''(x)=2a$ e $f''(0)=2a=2$, cioè $a=1$. Dunque

$$f(x)=x^2+1.$$

## a)

Determinata la parabola, scriviamo le equazioni delle tangenti ad essa condotte per il punto $P$ dell'asse $y$ di modo che valga $60^\circ$ l'angolo $\overline{A}\widehat{P}\overline{B}$, essendo $A$ e $B$ i rispettivi punti di tangenza.

La retta per $P=(0,p)$ di coefficiente angolare $m$ ha equazione $y=mx+p$. Imponendo la tangenza con la parabola:

$$x^2+1=mx+p \;\Rightarrow\; x^2-mx+1-p=0,\qquad \Delta=m^2-4(1-p)=0 \;\Rightarrow\; m^2=4(1-p),$$

quindi $m=\pm 2\sqrt{1-p}$ (con $p<1$). Per simmetria rispetto all'asse $y$ i due punti di tangenza $A$ e $B$ stanno alla stessa quota e sono simmetrici; il triangolo $APB$ è dunque isoscele sulla base $AB$, con $PA=PB$. Se l'angolo al vertice $A\widehat{P}B$ vale $60^\circ$, un triangolo isoscele con un angolo di $60^\circ$ è equilatero.

Conviene allora ragionare geometricamente sull'angolo interno $A\widehat{P}B$ del triangolo (è l'angolo formato dalle semirette $PA$ e $PB$ rivolte verso l'alto, non l'angolo acuto tra le due rette intere, che ne è il supplementare). Per simmetria, la bisettrice di $A\widehat{P}B$ è l'asse $y$; quindi ciascuna semiretta $PB$ forma con l'asse $y$ un angolo di $30^\circ$, ossia con l'asse $x$ un angolo di $60^\circ$. Il coefficiente angolare della tangente $PB$ è perciò

$$m=\tan 60^\circ=\sqrt{3}.$$

La tangente $y=\sqrt{3}\,x+p$ tocca la parabola quando $x^2-\sqrt{3}\,x+1-p=0$ ha $\Delta=0$:

$$3-4(1-p)=0 \;\Rightarrow\; 4p=1 \;\Rightarrow\; p=\frac{1}{4}.$$

Dunque

$$P=\left(0,\tfrac{1}{4}\right),\qquad y=\sqrt{3}\,x+\tfrac{1}{4}\quad\text{e}\quad y=-\sqrt{3}\,x+\tfrac{1}{4}.$$

**Verifica.** Con $p=\dfrac{1}{4}$ si ha $x^2-\sqrt{3}\,x+\dfrac{3}{4}=\left(x-\dfrac{\sqrt{3}}{2}\right)^2=0$, quindi $B=\left(\dfrac{\sqrt{3}}{2},\dfrac{7}{4}\right)$ e, per simmetria, $A=\left(-\dfrac{\sqrt{3}}{2},\dfrac{7}{4}\right)$. I vettori $PA$ e $PB$ hanno modulo $\sqrt{\dfrac{3}{4}+\dfrac{9}{4}}=\sqrt{3}=\overline{AB}$: il triangolo è equilatero e $A\widehat{P}B=60^\circ$. Il valore trovato conferma il dato del punto b): $P$ ha ordinata $\dfrac{1}{4}$.

## b)

Accertato che il punto $P$ ha ordinata $\dfrac{1}{4}$, scriviamo l'equazione della circonferenza passante per $A$, $B$ e $P$.

Con $m=\sqrt{3}$ il punto $B$ è la radice doppia $x_B=\dfrac{\sqrt{3}}{2}$, $y_B=\sqrt{3}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{1}{4}=\dfrac{7}{4}$; per simmetria

$$A=\left(-\frac{\sqrt{3}}{2},\frac{7}{4}\right),\qquad B=\left(\frac{\sqrt{3}}{2},\frac{7}{4}\right),\qquad P=\left(0,\frac{1}{4}\right).$$

Il triangolo $APB$ è equilatero di lato

$$\ell=\overline{PB}=\sqrt{\frac{3}{4}+\left(\frac{7}{4}-\frac{1}{4}\right)^2}=\sqrt{\frac{3}{4}+\frac{9}{4}}=\sqrt{3}.$$

La circonferenza circoscritta a un triangolo equilatero di lato $\ell$ ha raggio $R=\dfrac{\ell}{\sqrt{3}}=\dfrac{\sqrt{3}}{\sqrt{3}}=1$. Per simmetria il centro è su $x=0$, sia $C=(0,k)$; da $\overline{CP}=R$: $\left|k-\dfrac{1}{4}\right|=1$. Poiché il centro sta sopra $P$, $k=\dfrac{1}{4}+1=\dfrac{5}{4}$. Verifica con $A$: $\overline{CA}=\sqrt{\dfrac{3}{4}+\left(\dfrac{7}{4}-\dfrac{5}{4}\right)^2}=\sqrt{\dfrac{3}{4}+\dfrac{1}{4}}=1$. Dunque $C=\left(0,\dfrac{5}{4}\right)$, $R=1$:

$$x^2+\left(y-\frac{5}{4}\right)^2=1.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="249.216" height="215.787" viewBox="-72 -72 186.912 161.84"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 74.005h173.73"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M99.78 71.605c.38 1.44 1.228 2.12 2.08 2.4-.852.28-1.7.96-2.08 2.4"/><text x="14.995" y="74.005" stroke="none" font-family="cmmi10" font-size="10" transform="translate(90.598 2.153)">x</text><path fill="none" d="M14.995 89.37V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M12.595-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="14.995" y="74.005" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -138.637)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-41.341-39.18 1.909 4.13 1.909 3.985 1.909 3.844 1.91 3.702 1.908 3.56 1.91 3.417 1.909 3.276 1.909 3.133 1.909 2.99 1.91 2.848 1.908 2.705 1.91 2.564 1.909 2.42 1.909 2.279 1.909 2.136 1.909 1.995 1.91 1.851 1.908 1.71 1.91 1.566 1.909 1.425 1.909 1.282 1.909 1.14 1.91.997 1.908.856 1.91.713 1.909.57 1.909.428 1.909.286 1.909.144 1.91.002 1.908-.142 1.91-.283 1.909-.425 1.909-.569 1.909-.71 1.909-.853 1.91-.995 1.908-1.138 1.91-1.28 1.909-1.421 1.909-1.565 1.909-1.707 1.91-1.849 1.908-1.991 1.91-2.134 1.909-2.276 1.909-2.419 1.909-2.56 1.91-2.704 1.908-2.845 1.91-2.988 1.908-3.13 1.91-3.272 1.909-3.415 1.909-3.558 1.91-3.7 1.908-3.84 1.91-3.985 1.909-4.126"/><path fill="none" stroke="red" stroke-width=".8" d="M66.21 9.987c0-28.286-22.929-51.215-51.215-51.215-28.285 0-51.215 22.929-51.215 51.215 0 28.285 22.93 51.215 51.215 51.215S66.21 38.272 66.21 9.987Zm-51.215 0"/><path stroke="none" d="M17.155 61.202a2.16 2.16 0 1 0-4.32 0 2.16 2.16 0 0 0 4.32 0m-2.16 0"/><text x="14.995" y="74.005" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -2.437)">P</text><path stroke="none" d="M-27.197-15.621a2.16 2.16 0 1 0-4.32 0 2.16 2.16 0 0 0 4.32 0m-2.16 0"/><text x="14.995" y="74.005" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-55.385 -93.16)">A</text><path stroke="none" d="M61.507-15.621a2.16 2.16 0 1 0-4.32 0 2.16 2.16 0 0 0 4.32 0m-2.16 0"/><text x="14.995" y="74.005" stroke="none" font-family="cmmi10" font-size="10" transform="translate(47.885 -93.16)">B</text><path stroke="none" d="M17.155 9.987a2.16 2.16 0 1 0-4.32 0 2.16 2.16 0 0 0 4.32 0m-2.16 0"/><text x="14.995" y="74.005" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -60.602)">C</text><g stroke="none"><text x="14.995" y="74.005" font-family="cmmi10" font-size="10" transform="translate(41.01 -117.258)">y</text><text x="23.035" y="74.005" font-family="cmr10" font-size="10" transform="translate(41.01 -117.258)">=</text><text x="33.59" y="74.005" font-family="cmmi10" font-size="10" transform="translate(41.01 -117.258)">x</text><text x="39.305" y="70.376" font-family="cmr7" font-size="7" transform="translate(41.01 -117.258)">2</text><text x="46.014" y="74.005" font-family="cmr10" font-size="10" transform="translate(41.01 -117.258)">+</text><text x="56.014" y="74.005" font-family="cmr10" font-size="10" transform="translate(41.01 -117.258)">1</text></g></g></svg>
</figure>

## c)

Calcoliamo le aree delle due parti in cui la circonferenza risulta divisa dall'arco di parabola di estremi $A$ e $B$. L'arco di parabola divide il cerchio in due regioni; determiniamo gli ingredienti necessari.

**Area del cerchio:** $\pi R^2=\pi$.

**Triangolo $APB$ equilatero:** area $=\dfrac{\sqrt{3}}{4}\ell^2=\dfrac{\sqrt{3}}{4}\cdot 3=\dfrac{3\sqrt{3}}{4}$.

**Segmento parabolico** di corda $AB$ (sulla retta $y=\dfrac{7}{4}$) e vertice $V=(0,1)$ della parabola:

$$S_{\text{par}}=\int_{-\sqrt{3}/2}^{\,\sqrt{3}/2}\left(\frac{7}{4}-(x^2+1)\right)dx=\int_{-\sqrt{3}/2}^{\,\sqrt{3}/2}\left(\frac{3}{4}-x^2\right)dx=2\left[\frac{3x}{4}-\frac{x^3}{3}\right]_0^{\sqrt{3}/2}=2\left(\frac{3\sqrt{3}}{8}-\frac{\sqrt{3}}{8}\right)=\frac{\sqrt{3}}{2}.$$

(In accordo con il teorema di Archimede: $\dfrac{2}{3}\cdot\overline{AB}\cdot h$, con $\overline{AB}=\sqrt{3}$ e $h=\overline{VH}=\dfrac{7}{4}-1=\dfrac{3}{4}$.)

**Segmento circolare** sotteso dalla corda $AB$: poiché il cerchio meno il triangolo equilatero dà tre segmenti circolari uguali (sulle corde $AB$, $BP$, $PA$),

$$S_{\text{circ}}=\frac{\pi-\dfrac{3\sqrt{3}}{4}}{3}=\frac{\pi}{3}-\frac{\sqrt{3}}{4}.$$

La regione **superiore** (compresa tra l'arco di parabola e l'arco di circonferenza, dal lato di $V$) ha area pari alla somma del segmento circolare e del segmento parabolico:

$$A_1=S_{\text{circ}}+S_{\text{par}}=\left(\frac{\pi}{3}-\frac{\sqrt{3}}{4}\right)+\frac{\sqrt{3}}{2}=\frac{\pi}{3}+\frac{\sqrt{3}}{4}\approx 1{,}48.$$

La regione **inferiore** è la complementare nel cerchio:

$$A_2=\pi-A_1=\pi-\frac{\pi}{3}-\frac{\sqrt{3}}{4}=\frac{2\pi}{3}-\frac{\sqrt{3}}{4}\approx 1{,}66.$$

Controllo: $A_1+A_2=\pi$.

*Fonte:* [📄 PDF p.29](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
