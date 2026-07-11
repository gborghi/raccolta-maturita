

**Problema:** [[Problemi/prob_2006_ordinamento_2006_sessione_suppletiva_problema1_67_1|2006 Ordinamento Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2006_ordinamento_2006_sessione_suppletiva_problema1_67|2006 Ordinamento Suppletiva — Problema 1]]

Nel piano cartesiano $(Oxy)$ sono assegnate le due parabole $p'$ e $p''$ di equazioni rispettivamente
$$p':\ y=x^2, \qquad p'':\ x=y^2-2y.$$

## a)

$p':\ y=x^2$ è una parabola con vertice nell'origine, asse coincidente con l'asse $y$ e concavità verso l'alto. $p'':\ x=y^2-2y=(y-1)^2-1$ è una parabola con asse parallelo all'asse $x$, vertice nel punto $(-1;1)$ e concavità rivolta verso destra; interseca l'asse delle ordinate nei punti di ordinata $0$ e $2$.

Per i punti comuni sostituiamo $y=x^2$ nell'equazione di $p''$:
$$x=(x^2)^2-2x^2 \Rightarrow x^4-2x^2-x=0 \Rightarrow x\,(x^3-2x-1)=0.$$

Il fattore $x=0$ dà il punto $O=(0;0)$. Per il fattore $x^3-2x-1=0$ osserviamo che $x=-1$ è radice; abbassando di grado con la regola di Ruffini si ottiene
$$(x+1)(x^2-x-1)=0,$$
da cui $x=-1$ e $x=\dfrac{1\pm\sqrt5}{2}$. La corrispondente ordinata è $y=x^2=\dfrac{3\pm\sqrt5}{2}$.

Le due parabole si intersecano quindi nei quattro punti
$$O=(0;0),\quad (-1;1),\quad \left(\frac{1+\sqrt5}{2};\,\frac{3+\sqrt5}{2}\right),\quad \left(\frac{1-\sqrt5}{2};\,\frac{3-\sqrt5}{2}\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="240.87" height="260.551" viewBox="-72 -72 180.652 195.413"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 88.8H95.401"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M93.521 86.4c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="4.752" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.582 2.153)">x</text><path fill="none" d="M4.752 122.943V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M2.352-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="4.752" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -153.432)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.844-48.91 2.122 9.177 2.122 8.86 2.122 8.545 2.121 8.228 2.122 7.911 2.122 7.596 2.121 7.279 2.122 6.962 2.122 6.646 2.121 6.33 2.122 6.012 2.122 5.697 2.122 5.38 2.121 5.063 2.122 4.748 2.122 4.43 2.121 4.115 2.122 3.798 2.122 3.481 2.122 3.166 2.121 2.848 2.122 2.533 2.122 2.216 2.121 1.899 2.122 1.583 2.122 1.266 2.122.95 2.121.634 2.122.317 2.122.001 2.121-.316 2.122-.631 2.122-.949 2.122-1.265 2.121-1.581 2.122-1.898 2.122-2.214 2.121-2.53 2.122-2.848 2.122-3.163 2.122-3.48 2.121-3.797 2.122-4.112 2.122-4.43 2.121-4.745 2.122-5.063 2.122-5.378 2.122-5.695 2.121-6.011 2.122-6.328 2.122-6.645 2.121-6.96 2.122-7.277L56.73-6.15l2.122-7.91 2.121-8.226 2.122-8.543 2.122-8.859 2.121-9.176"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="4.752" y="88.8" font-family="cmmi10" font-size="10" transform="translate(57.255 -130.941)">p</text><text x="9.784" y="85.171" font-family="cmsy7" font-size="7" transform="translate(57.255 -130.941)">0</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-23.7 60.347 1.929-7.408 1.928-3.069 1.93-2.354 1.928-1.985 1.93-1.75 1.928-1.58 1.93-1.454 1.928-1.354 1.93-1.27 1.928-1.203 1.929-1.143 1.929-1.093 1.929-1.048 1.929-1.008 1.929-.973 1.929-.94 1.929-.913 1.929-.886 1.929-.86 1.929-.84 1.928-.818 1.93-.799 1.928-.78 1.93-.765 1.928-.748 1.93-.734 1.928-.72 1.93-.706 1.928-.694 1.929-.682 1.929-.67 1.929-.66 1.929-.65 1.929-.64 1.929-.631 1.929-.622 1.929-.613 1.929-.605 1.929-.597 1.928-.589 1.93-.582 1.928-.575 1.93-.568 1.928-.562 1.93-.555 1.928-.55 1.93-.543 1.928-.537 1.929-.532 1.929-.527 1.929-.52 1.929-.517 1.929-.511 1.929-.507 1.929-.501 1.929-.498 1.929-.492 1.929-.49 1.928-.483M-23.7 60.347l1.929 7.409 1.928 3.068 1.93 2.355 1.928 1.985 1.93 1.749 1.928 1.581 1.93 1.454L-8.27 81.3l1.93 1.271 1.928 1.202 1.929 1.144 1.929 1.093 1.929 1.048 1.929 1.008 1.929.973 1.929.94 1.929.913 1.929.885 1.929.861 1.929.84 1.928.817 1.93.8 1.928.78 1.93.765 1.928.748 1.93.734 1.928.72 1.93.705 1.928.694 1.929.682 1.929.671 1.929.66 1.929.65 1.929.64 1.929.63 1.929.622 1.929.613 1.929.606 1.929.597 1.928.589 1.93.582 1.928.575 1.93.568 1.928.562 1.93.555 1.928.55 1.93.542 1.928.538 1.929.532 1.929.526 1.929.521 1.929.517 1.929.511 1.929.506 1.929.502 1.929.497 1.929.493 1.929.489 1.928.484"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="4.752" y="88.8" font-family="cmmi10" font-size="10" transform="translate(80.287 -91.107)">p</text><text x="9.784" y="85.171" font-family="cmsy7" font-size="7" transform="translate(80.287 -91.107)">00</text></g></g><path stroke="none" d="M6.752 88.8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none"><text x="4.752" y="88.8" font-family="cmmi10" font-size="10" transform="translate(3.533 11.05)">V</text><text x="12.808" y="85.171" font-family="cmsy7" font-size="7" transform="translate(3.533 11.05)">0</text><text x="18.391" y="88.8" font-family="cmr10" font-size="10" transform="translate(3.533 11.05)">=</text><text x="28.947" y="88.8" font-family="cmmi10" font-size="10" transform="translate(3.533 11.05)">O</text></g><path stroke="none" d="M-21.7 60.347a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none"><text x="4.752" y="88.8" font-family="cmmi10" font-size="10" transform="translate(-45.152 -24.694)">V</text><text x="12.808" y="85.171" font-family="cmsy7" font-size="7" transform="translate(-45.152 -24.694)">00</text></g><path stroke="none" d="M6.752 31.895a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="4.752" y="88.8" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -53.489)">P</text><path stroke="none" d="M52.289 14.31a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M-11.331 77.931a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/></g></svg>
</figure>

## b)

Il vertice di $p'$ è $V'=(0;0)$; quello di $p''$ è $V''=(-1;1)$. Il punto $P$ è l'intersezione di $p''$ con il semiasse positivo delle $y$: posto $x=0$ in $x=y^2-2y$ si ha $y^2-2y=0$, cioè $y=0$ oppure $y=2$, quindi $P=(0;2)$.

La regione è delimitata dall'arco $V'V''$ di $p'$, dall'arco $V''P$ di $p''$ e dal segmento $V'P$ (che giace sull'asse $y$, $x=0$). Conviene integrare rispetto a $y$: per ogni $y$ la frontiera destra è $x=0$, mentre la frontiera sinistra è
- il ramo sinistro di $p'$, cioè $x=-\sqrt{y}$, per $y\in[0;1]$;
- la parabola $p''$, cioè $x=(y-1)^2-1$, per $y\in[1;2]$.

Quindi
$$\text{Area}=\int_0^1\!\big(0-(-\sqrt{y})\big)\,dy+\int_1^2\!\big(0-((y-1)^2-1)\big)\,dy=\int_0^1\!\sqrt{y}\,dy+\int_1^2\!\big(1-(y-1)^2\big)\,dy.$$

Calcolando:
$$\int_0^1\!\sqrt{y}\,dy=\left[\frac{2}{3}y^{3/2}\right]_0^1=\frac{2}{3},\qquad \int_1^2\!\big(1-(y-1)^2\big)\,dy=\left[(y-1)-\frac{(y-1)^3}{3}\right]_1^2=1-\frac{1}{3}=\frac{2}{3}.$$

Pertanto
$$\text{Area}=\frac{2}{3}+\frac{2}{3}=\frac{4}{3}\ u^2.$$

Lo stesso risultato si ottiene con il teorema di Archimede: la regione è formata da metà del segmento parabolico di $p'$ di base $2$ e altezza $1$ e da metà del segmento parabolico di $p''$ di base $2$ e altezza $1$, ciascuno di area $\frac{2}{3}\cdot 2\cdot 1=\frac{4}{3}$, cioè $\dfrac12\cdot\dfrac43+\dfrac12\cdot\dfrac43=\dfrac43\ u^2$.

## c)

Cerchiamo i coefficienti angolari delle tangenti in $O$ alle due parabole.

Per $p':\ y=x^2$ si ha $y'=2x$, quindi $y'(0)=0$: la tangente in $O$ è l'asse $x$ e $m_1=0$.

Per $p'':\ x=y^2-2y$ deriviamo rispetto a $y$: $\dfrac{dx}{dy}=2y-2$, che in $O$ ($y=0$) vale $-2$; la pendenza della curva $y$ rispetto a $x$ è dunque $m_2=-\dfrac{1}{2}$.

L'angolo $\alpha$ secondo cui si tagliano le due parabole soddisfa
$$\tan\alpha=\left|\frac{m_2-m_1}{1+m_1m_2}\right|=\left|\frac{-\frac12-0}{1+0}\right|=\frac{1}{2},$$
da cui
$$\alpha=\arctan\frac{1}{2}\approx 26{,}565^\circ\cong 26^\circ 33' 54''.$$

## d)

Nel segmento parabolico delimitato dalla retta $y=4$ e da $p'$ inscriviamo un rettangolo con due lati paralleli all'asse $y$. Posto $B=(x;x^2)$ con $0\le x\le 2$, per simmetria la base è $\overline{AB}=2x$ e l'altezza è $\overline{BC}=4-x^2$, quindi
$$A(x)=2x\,(4-x^2)=8x-2x^3,\qquad 0\le x\le 2.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="234.359" height="226.408" viewBox="-72 -72 175.769 169.806"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 83.11H86.865"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M84.985 80.71c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="4.752" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(86.046 2.153)">x</text><path fill="none" d="M4.752 97.336v-156.09"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M2.352-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="4.752" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -147.741)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.844-54.601 2.122 9.177 2.122 8.861 2.122 8.545 2.121 8.227 2.122 7.912 2.122 7.596 2.121 7.278 2.122 6.962 2.122 6.646 2.121 6.33 2.122 6.013 2.122 5.696 2.122 5.38 2.121 5.064 2.122 4.747 2.122 4.431 2.121 4.114 2.122 3.798 2.122 3.482 2.122 3.165 2.121 2.849 2.122 2.532 2.122 2.216 2.121 1.9 2.122 1.583 2.122 1.266 2.122.95 2.121.634 2.122.317h2.122l2.121-.315 2.122-.632 2.122-.948 2.122-1.266 2.121-1.58 2.122-1.898 2.122-2.215 2.121-2.53 2.122-2.847 2.122-3.164 2.122-3.48 2.121-3.796 2.122-4.113 2.122-4.43 2.121-4.745 2.122-5.062 2.122-5.378 2.122-5.695 2.121-6.012 2.122-6.328 2.122-6.644 2.121-6.96 2.122-7.278 2.122-7.593 2.122-7.91 2.121-8.227 2.122-8.542 2.122-8.86 2.121-9.175"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="4.752" y="83.11" font-family="cmmi10" font-size="10" transform="translate(58.678 -128.096)">p</text><text x="9.784" y="79.481" font-family="cmsy7" font-size="7" transform="translate(58.678 -128.096)">0</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-63.534-30.701H73.039"/><g stroke="none" font-size="10"><text x="4.752" y="83.11" font-family="cmmi10" transform="translate(71.82 -111.561)">y</text><text x="12.792" y="83.11" font-family="cmr10" transform="translate(71.82 -111.561)">=</text><text x="23.347" y="83.11" font-family="cmr10" transform="translate(71.82 -111.561)">4</text></g></g><path fill="none" stroke="#008c00" stroke-width=".8" d="M-28.11 45.182h65.725V-30.7H-28.11Z"/><path stroke="none" d="M39.115 45.182a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="4.752" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.396 -27.561)">B</text><path stroke="none" d="M-26.61 45.182a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="4.752" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-43.896 -27.561)">A</text></g></svg>
</figure>

La funzione è continua e derivabile su $[0;2]$: per il teorema di Weierstrass ammette massimo assoluto, da cercare fra gli estremi e i punti a derivata nulla. Poiché
$$A'(x)=8-6x^2=0 \Rightarrow x=\frac{2}{\sqrt3}=\frac{2\sqrt3}{3}\in(0;2),$$
e $A(0)=A(2)=0$, il massimo si ha in $x=\dfrac{2}{\sqrt3}$. Il suo valore è
$$A_{\max}=2\cdot\frac{2}{\sqrt3}\left(4-\frac{4}{3}\right)=\frac{4}{\sqrt3}\cdot\frac{8}{3}=\frac{32}{3\sqrt3}=\frac{32\sqrt3}{9}\approx 6{,}16\ u^2.$$

## e)

Il perimetro del rettangolo è
$$2p=2\,\overline{AB}+2\,\overline{BC}=4x+2(4-x^2)=2(-x^2+2x+4),$$
massimo quando lo è
$$p(x)=-x^2+2x+4,\qquad 0\le x\le 2.$$

Si tratta di una parabola con concavità verso il basso e vertice di ascissa $x_V=1$, appartenente all'intervallo: in $x=1$ si ha il massimo. Il perimetro massimo vale
$$2p(1)=2(-1+2+4)=10.$$

Il perimetro massimo si ottiene quindi per $x=1$, mentre l'area massima si ottiene per $x=\dfrac{2}{\sqrt3}=\sqrt{\dfrac{4}{3}}$: il rettangolo di area massima **non** è anche quello di perimetro massimo.

*Fonte:* [📄 PDF p.67](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
