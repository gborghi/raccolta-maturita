

**Problema:** [[Problemi/prob_2006_pni_2006_sessione_suppletiva_problema1_87_1|2006 PNI Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2006_pni_2006_sessione_suppletiva_problema1_87|2006 PNI Suppletiva — Problema 1]]

Nel piano, riferito a un sistema monometrico di assi cartesiani ortogonali $Oxy$, sono assegnate le due parabole $p'$ e $p''$ di equazioni rispettivamente $y=x^{2}$ e $x=y^{2}-2y$.

## a)

La parabola $p'\colon y=x^{2}$ ha vertice $O(0,0)$, asse coincidente con l'asse $y$ e concavità rivolta verso l'alto.

La parabola $p''\colon x=y^{2}-2y$, cioè $x+1=(y-1)^{2}$, ha vertice $V''=(-1,1)$, asse $y=1$ e concavità rivolta verso destra; interseca l'asse $y$ nei punti di ordinata $0$ e $2$.

Mettendo a sistema le due equazioni e sostituendo $y=x^{2}$ in $x=y^{2}-2y$:

$$x=x^{4}-2x^{2} \Rightarrow x^{4}-2x^{2}-x=0 \Rightarrow x(x^{3}-2x-1)=0.$$

Si abbassa di grado la cubica con la regola di Ruffini (poiché $x=-1$ è radice): $x^{3}-2x-1=(x+1)(x^{2}-x-1)$. Dunque

$$x=0, \quad x=-1, \quad x=\frac{1\pm\sqrt{5}}{2}.$$

Per $x=\dfrac{1\pm\sqrt{5}}{2}$ risulta $y=\left(\dfrac{1\pm\sqrt{5}}{2}\right)^{2}=\dfrac{3\pm\sqrt{5}}{2}$. I quattro punti comuni sono quindi

$$A=(0,0), \quad B=(-1,1), \quad C=\left(\frac{1-\sqrt{5}}{2},\frac{3-\sqrt{5}}{2}\right), \quad D=\left(\frac{1+\sqrt{5}}{2},\frac{3+\sqrt{5}}{2}\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="256.82" height="248.979" viewBox="-72 -72 192.615 186.735"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-70.082 71.728H99.665"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M97.785 69.328c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="1.903" y="71.728" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(101.694 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M1.903 114.265v-173.02"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-.497-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="1.903" y="71.728" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -136.36)">y</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-53.722-22.834 1.997 6.665 1.996 6.422 1.996 6.178 1.996 5.934 1.996 5.69 1.996 5.448 1.996 5.203 1.996 4.96 1.996 4.717 1.996 4.473 1.997 4.23 1.996 3.986 1.996 3.742 1.996 3.5 1.996 3.255 1.996 3.011 1.996 2.769 1.996 2.525 1.996 2.28 1.996 2.038 1.997 1.794 1.996 1.55 1.996 1.308 1.996 1.063 1.996.82 1.996.577 1.996.332 1.996.09 1.996-.154 1.996-.398 1.997-.641 1.996-.885 1.996-1.129 1.996-1.372 1.996-1.615 1.996-1.859 1.996-2.103 1.996-2.346 1.996-2.59 1.996-2.833 1.997-3.077 1.996-3.32 1.996-3.564 1.996-3.807 1.996-4.05 1.996-4.296 1.996-4.537 1.996-4.782 1.996-5.025 1.996-5.269 1.997-5.512L50.076.806l1.996-5.999 1.996-6.243 1.996-6.486 1.996-6.73 1.996-6.974 1.996-7.217 1.996-7.46"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="1.903" y="71.728" font-family="cmmi10" font-size="10" transform="translate(59.158 -98.647)">p</text><text x="6.934" y="68.099" font-family="cmsy7" font-size="7" transform="translate(59.158 -98.647)">0</text></g></g><path fill="none" stroke="#ff8000" stroke-width=".8" d="m-30.817 39.007 2.384-8.833 2.385-3.659 2.384-2.807 2.385-2.366 2.384-2.085 2.385-1.886 2.384-1.734 2.385-1.613 2.384-1.516 2.385-1.433 2.385-1.364 2.384-1.302 2.385-1.25 2.384-1.202 2.385-1.16 2.384-1.122L9.72 2.588l2.384-1.056L14.49.505l2.384-1 2.385-.976 2.384-.952 2.385-.932 2.385-.91 2.384-.893 2.385-.875 2.384-.857 2.385-.843 2.384-.827 2.385-.813 2.384-.8 2.385-.787 2.384-.774 2.385-.764 2.384-.752 2.385-.741 2.384-.731 2.385-.721 2.385-.712 2.384-.703 2.385-.694 2.384-.686 2.385-.677 2.384-.67 2.385-.662 2.384-.654 2.385-.648 2.384-.64 2.385-.635 2.384-.628 2.385-.621 2.385-.616 2.384-.61 2.385-.603 2.384-.599 2.385-.592 2.384-.588 2.385-.582 2.384-.578M-30.817 39.007l2.384 8.834 2.385 3.658 2.384 2.808 2.385 2.366 2.384 2.085 2.385 1.886 2.384 1.733 2.385 1.614 2.384 1.515 2.385 1.434 2.385 1.363 2.384 1.303 2.385 1.25 2.384 1.201 2.385 1.16 2.384 1.123 2.385 1.087 2.384 1.056 2.385 1.026 2.384 1.001 2.385.976 2.384.952 2.385.931 2.385.911 2.384.893 2.385.874 2.384.858 2.385.842 2.384.828 2.385.813 2.384.8 2.385.786 2.384.775 2.385.764 2.384.751 2.385.742 2.384.73 2.385.722 2.385.712 2.384.702 2.385.695 2.384.685 2.385.677 2.384.67 2.385.662 2.384.655 2.385.648 2.384.64 2.385.635 2.384.628 2.385.62 2.385.616 2.384.61 2.385.604 2.384.598 2.385.593 2.384.587 2.385.583 2.384.577"/><g fill="#ff8000" stroke="#ff8000"><g fill="#ff8000" stroke="none"><text x="1.903" y="71.728" font-family="cmmi10" font-size="10" transform="translate(104.967 -97.01)">p</text><text x="6.934" y="68.099" font-family="cmsy7" font-size="7" transform="translate(104.967 -97.01)">00</text></g></g><g fill="red" stroke="red"><path stroke="none" d="M4.203 71.728a2.3 2.3 0 1 0-4.6 0 2.3 2.3 0 0 0 4.6 0m-2.3 0"/><g fill="#000" stroke="#000"><g stroke="none"><text x="1.903" y="71.728" font-family="cmmi10" font-size="10" transform="translate(3.533 11.05)">A</text><text x="12.181" y="71.728" font-family="cmr10" font-size="10" transform="translate(3.533 11.05)">=</text><text x="22.736" y="71.728" font-family="cmmi10" font-size="10" transform="translate(3.533 11.05)">V</text><text x="30.792" y="68.099" font-family="cmsy7" font-size="7" transform="translate(3.533 11.05)">0</text></g></g></g><g fill="red" stroke="red"><path stroke="none" d="M-28.517 39.007a2.3 2.3 0 1 0-4.6 0 2.3 2.3 0 0 0 4.6 0m-2.3 0"/><g fill="#000" stroke="#000"><g stroke="none"><text x="1.903" y="71.728" font-family="cmmi10" font-size="10" transform="translate(-70.84 -28.962)">B</text><text x="12.768" y="71.728" font-family="cmr10" font-size="10" transform="translate(-70.84 -28.962)">=</text><text x="23.323" y="71.728" font-family="cmmi10" font-size="10" transform="translate(-70.84 -28.962)">V</text><text x="31.379" y="68.099" font-family="cmsy7" font-size="7" transform="translate(-70.84 -28.962)">00</text></g></g></g><g fill="red" stroke="red"><path stroke="none" d="M-16.018 59.228a2.3 2.3 0 1 0-4.6 0 2.3 2.3 0 0 0 4.6 0m-2.3 0"/><g fill="#000" stroke="#000"><text x="1.903" y="71.728" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-31.617 -2.133)">C</text></g></g><g fill="red" stroke="red"><path stroke="none" d="M57.145-13.934a2.3 2.3 0 1 0-4.6 0 2.3 2.3 0 0 0 4.6 0m-2.3 0"/><g fill="#000" stroke="#000"><text x="1.903" y="71.728" stroke="none" font-family="cmmi10" font-size="10" transform="translate(56.475 -89.195)">D</text></g></g><g fill="teal" stroke="teal"><path stroke="none" d="M4.203 6.287a2.3 2.3 0 1 0-4.6 0 2.3 2.3 0 0 0 4.6 0m-2.3 0"/><g fill="#000" stroke="#000"><g stroke="none" font-size="10"><text x="1.903" y="71.728" font-family="cmmi10" transform="translate(3.533 -62.941)">P</text><text x="9.712" y="71.728" font-family="cmr10" transform="translate(3.533 -62.941)">(0</text><text x="18.601" y="71.728" font-family="cmmi10" transform="translate(3.533 -62.941)">;</text><text x="23.045" y="71.728" font-family="cmr10" transform="translate(3.533 -62.941)">2)</text></g></g></g></g></svg>
</figure>

## b)

Si ha $V'=O=(0,0)$ e $V''=(-1,1)$. Ponendo $x=0$ in $x=y^{2}-2y$ si ottiene $y(y-2)=0$, dunque $P=(0,2)$.

Conviene integrare rispetto a $y$, poiché la regione è a sinistra dell'asse $y$:

$$\mathcal{A}=\int_{0}^{1}\bigl[0-(-\sqrt{y})\bigr]\,dy+\int_{1}^{2}\bigl[0-(y^{2}-2y)\bigr]\,dy.$$

Calcolando i due integrali:

$$\int_{0}^{1}\sqrt{y}\,dy=\left[\frac{2}{3}y^{3/2}\right]_{0}^{1}=\frac{2}{3}, \qquad \int_{1}^{2}(2y-y^{2})\,dy=\left[y^{2}-\frac{y^{3}}{3}\right]_{1}^{2}=\frac{4}{3}-\frac{2}{3}=\frac{2}{3}.$$

Pertanto

$$\mathcal{A}=\frac{2}{3}+\frac{2}{3}=\frac{4}{3}\ u^{2}.$$

## c)

La tangente a $p'$ in $O$ ha, da $y'=2x$, pendenza $m_{1}=0$.

La tangente a $p''$ in $O$: da $x=y^{2}-2y$ si ha $x'=2y-2$, quindi $\dfrac{dy}{dx}=\dfrac{1}{2y-2}$; in $(0,0)$ la pendenza è $m_{2}=\dfrac{1}{-2}=-\dfrac{1}{2}$. Allora

$$\tan\theta=\left|\frac{m_{2}-m_{1}}{1+m_{1}m_{2}}\right|=\left|\frac{-\tfrac{1}{2}-0}{1+0}\right|=\frac{1}{2}, \qquad \theta=\arctan\frac{1}{2}\approx 26{,}4349^{\circ}.$$

Convertendo, $0{,}4349^{\circ}\approx 26'$ e la parte frazionaria dei primi corrisponde a circa $54''$, quindi

$$\theta\approx 26^{\circ}\,33'\,54''.$$

## d)

Trasformiamo $p''$ mediante la simmetria assiale $S$ di asse $y=x$ (che scambia $x$ e $y$): da $x=y^{2}-2y$ si ottiene $p'''\colon y=x^{2}-2x$, parabola congruente con vertice $V'''=(1,-1)$.

Una traslazione $T$ porta $V'''=(1,-1)$ nel vertice $V'=(0,0)$ di $p'$:

$$T\colon \begin{cases} x'=x-1 \\ y'=y+1 \end{cases}$$

Applicando $T$ a $p'''$ si ha $y'-1=(x'+1)^{2}-2(x'+1)$, cioè $y'=(x')^{2}$, che è $p'$. La composizione $\sigma=T\circ S$ (prima la simmetria $S$ di asse $y=x$, poi la traslazione) trasforma $p''$ in $p'$ ed ha equazioni

$$\sigma\colon \begin{cases} x'=y-1 \\ y'=x+1 \end{cases}$$

Essendo $\sigma$ composizione di una simmetria assiale e di una traslazione, è un'isometria; quindi $p'$ e $p''$ sono congruenti.

## e)

**Punti uniti.** Imponiamo $x'=x$ e $y'=y$ in $\sigma$:

$$\begin{cases} x=y-1 \\ y=x+1 \end{cases}$$

Le due condizioni coincidono: ogni punto della retta $y=x+1$ (equivalentemente $x=y-1$) è unito. Dunque $\sigma$ ammette una retta di punti uniti $r\colon y=x+1$.

**Rette unite.** La retta $r\colon y=x+1$ è ovviamente unita (luogo di punti uniti). Inoltre una generica retta $y=mx+q$ si trasforma in $x+1=m(y-1)+q$, cioè $mx'-y'+(m-1+q)=0$; questa coincide con $y=mx+q$ se $m^{2}=1$. Per $m=1$ si riottiene $r$; per $m=-1$ la condizione è soddisfatta per ogni $q$, quindi sono unite tutte le rette del fascio $y=-x+q$, perpendicolari all'asse di simmetria $y=x+1$. La trasformazione $\sigma$ è dunque la simmetria assiale di asse $r\colon y=x+1$: l'asse è fatto di punti uniti e le rette a esso perpendicolari sono globalmente unite.

*Fonte:* [📄 PDF p.87](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/geometria #cluster/geometria
