

**Problema:** [[Problemi/prob_2005_sessione_ordinaria_2005_prova_184_2|2005 Ordinaria PNI — Prova — Problema 2]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Si consideri la funzione $f$ definita sull'intervallo $[0,+\infty)$ da
$$
f(x)=\begin{cases}\dfrac{1}{2}\,x^{2}\,(3-2\ln x)+1 & \text{se } x>0,\\[4pt] 1 & \text{se } x=0,\end{cases}
$$
e sia $C$ la sua curva rappresentativa nel riferimento $Oxy$, ortogonale e monometrico.

Per $x>0$ conviene scrivere
$$
f(x)=\frac{3}{2}\,x^{2}-x^{2}\ln x+1 .
$$

## a) Continuità e derivabilità in $0$

Poiché $\displaystyle\lim_{x\to 0^{+}} x^{2}\ln x=0$, si ha
$$
\lim_{x\to 0^{+}} f(x)=\lim_{x\to 0^{+}}\left(\frac{3}{2}\,x^{2}-x^{2}\ln x+1\right)=1=f(0),
$$
quindi $f$ è **continua** in $0$.

Per la derivabilità si calcola il rapporto incrementale in $0$:
$$
\lim_{x\to 0^{+}}\frac{f(x)-f(0)}{x}
=\lim_{x\to 0^{+}}\frac{\frac{3}{2}x^{2}-x^{2}\ln x}{x}
=\lim_{x\to 0^{+}}\left(\frac{3}{2}\,x-x\ln x\right)=0 .
$$
Il limite è finito, dunque $f$ è **derivabile** in $0$ con $f'(0)=0$.

Per $x>0$ la derivata è
$$
f'(x)=3x-\bigl(2x\ln x+x\bigr)=2x-2x\ln x=2x\,(1-\ln x),
$$
e anche $\displaystyle\lim_{x\to 0^{+}} f'(x)=0$, in accordo con il valore trovato.

## b) Unicità della radice reale

Dallo studio del segno di $f'(x)=2x(1-\ln x)$ per $x>0$ si ha $f'(x)>0$ per $0<x<e$ e $f'(x)<0$ per $x>e$: quindi $f$ è crescente su $(0,e)$, decrescente su $(e,+\infty)$ e presenta un massimo assoluto in $x=e$, con
$$
f(e)=\frac{3}{2}e^{2}-e^{2}+1=\frac{1}{2}e^{2}+1>0 .
$$
Sull'intervallo $[0,e]$ la funzione cresce da $f(0)=1$ a $f(e)$, restando sempre positiva: qui non ci sono zeri. Su $(e,+\infty)$ la funzione è strettamente decrescente e
$$
\lim_{x\to+\infty} f(x)=\lim_{x\to+\infty}\Bigl[x^{2}\Bigl(\tfrac{3}{2}-\ln x\Bigr)+1\Bigr]=-\infty ,
$$
perché $\ln x\to+\infty$. Per il teorema degli zeri (con la monotonìa stretta) esiste **una e una sola** radice $x_{0}\in(e,+\infty)$.

Per localizzarla si valuta $f$: $f(4)\approx 2{,}82>0$ e $f(5)\approx -1{,}74<0$, quindi $x_{0}\in(4,5)$. Restringendo l'intervallo,
$$
f(4{,}68)\approx +0{,}05,\qquad f(4{,}70)\approx -0{,}05,
$$
da cui la radice, con due cifre decimali esatte, è
$$
\boxed{\,x_{0}\approx 4{,}69\,}.
$$

## c) Grafico e tangente in $x=1$

Nel punto di ascissa $x=1$ si ha
$$
f(1)=\frac{3}{2}-1\cdot\ln 1+1=\frac{5}{2},\qquad f'(1)=2\cdot 1\,(1-\ln 1)=2 .
$$
La retta tangente $r$ ha quindi equazione
$$
y-\frac{5}{2}=2\,(x-1)\ \Longrightarrow\ \boxed{\,r:\ y=2x+\frac{1}{2}\,}.
$$
Poiché $f''(x)=-2\ln x$, la curva è **convessa** per $0<x<1$ (dove $f''>0$) e **concava** per $x>1$; il punto $\left(1,\tfrac{5}{2}\right)$ è di flesso. Nel tratto $0<x<1$ la curva sta sopra la sua tangente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="226.629" height="269.278" viewBox="-72 -72 169.972 201.959"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-70.453 71.445h144.71"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M72.377 69.045c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.779" y="71.445" stroke="none" font-family="cmmi10" font-size="10" transform="translate(138.97 2.153)">x</text><path fill="none" d="M-60.78 129.489V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-63.18-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.779" y="71.445" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -136.076)">y</text><path fill="none" d="M-36.594 69.51v3.87"/><text x="-60.779" y="71.445" stroke="none" font-family="cmr9" font-size="9" transform="translate(21.873 11.268)">1</text><path fill="none" d="M-12.41 69.51v3.87"/><text x="-60.779" y="71.445" stroke="none" font-family="cmr9" font-size="9" transform="translate(46.058 11.268)">2</text><path fill="none" d="M11.776 69.51v3.87"/><text x="-60.779" y="71.445" stroke="none" font-family="cmr9" font-size="9" transform="translate(70.243 11.268)">3</text><path fill="none" d="M35.96 69.51v3.87"/><text x="-60.779" y="71.445" stroke="none" font-family="cmr9" font-size="9" transform="translate(94.428 11.268)">4</text><path fill="none" d="M60.146 69.51v3.87"/><text x="-60.779" y="71.445" stroke="none" font-family="cmr9" font-size="9" transform="translate(118.613 11.268)">5</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-58.844 46.638 1.336-.919 1.337-1.23 1.337-1.47 1.336-1.679 1.337-1.855 1.337-2.008 1.336-2.14 1.337-2.252 1.337-2.348 1.336-2.43 1.337-2.497 1.336-2.553 1.337-2.596 1.337-2.631 1.336-2.652 1.337-2.671 1.337-2.67 1.336-2.67 1.337-2.66 1.337-2.64 1.336-2.617 1.337-2.585 1.336-2.546 1.337-2.502 1.337-2.453 1.336-2.396 1.337-2.335 1.337-2.265 1.336-2.193 1.337-2.126 1.337-2.035 1.336-1.948 1.337-1.87 1.337-1.764 1.336-1.651 1.337-1.563 1.336-1.456 1.337-1.342 1.337-1.228 1.336-1.107 1.337-.988 1.337-.858 1.336-.73 1.337-.598 1.337-.465 1.336-.326 1.337-.177 1.336-.036 1.337.117 1.337.258 1.336.42 1.337.58 1.337.725 1.336.907 1.337 1.06 1.337 1.228 1.336 1.408 1.337 1.58 1.337 1.76 1.336 1.934 1.337 2.086 1.336 2.293 1.337 2.47 1.337 2.676 1.336 2.853 1.337 3.07 1.337 3.23 1.336 3.382 1.337 3.654 1.337 3.834 1.336 4.125 1.337 4.24 1.337 4.446 1.336 4.668 1.337 4.875 1.336 5.09 1.337 5.304 1.337 5.518 1.336 5.74 1.337 5.954 1.337 6.19 1.336 6.403 1.337 6.633 1.337 6.847 1.336 7.091 1.337 7.312 1.336 7.559 1.337 7.787 1.337 8.016"/><path fill="none" stroke="red" stroke-width=".8" d="M-65.616 69.026-5.154-51.899"/><path stroke="none" d="M-34.724 10.982a1.87 1.87 0 1 0-3.74 0 1.87 1.87 0 0 0 3.74 0m-1.87 0"/><g stroke="none"><text x="-60.779" y="63.595" font-family="cmex10" font-size="10" transform="translate(-3.317 -67.746)">¡</text><text x="-56.196" y="71.445" font-family="cmr9" font-size="9" transform="translate(-3.317 -67.746)">1</text><text x="-51.571" y="71.445" font-family="cmmi9" font-size="9" transform="translate(-3.317 -67.746)">;</text><text x="-46.26" y="67.757" font-family="cmr6" font-size="6" transform="translate(-3.317 -67.746)">5</text><path d="M-49.577 1.25h3.667v.4h-3.667z"/><text x="-46.26" y="74.499" font-family="cmr6" font-size="6" transform="translate(-3.317 -67.746)">2</text><text x="-41.393" y="63.595" font-family="cmex10" font-size="10" transform="translate(-3.317 -67.746)">¢</text></g><path stroke="none" d="M-59.08 47.26a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><text x="-60.779" y="71.445" stroke="none" font-family="cmr9" font-size="9" transform="translate(-8.158 -21.285)">1</text><path stroke="none" d="M54.349 71.445a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0m-1.7 0"/><g stroke="none"><text x="-60.779" y="71.445" font-family="cmmi9" font-size="9" transform="translate(116.96 -5.283)">x</text><text x="-55.536" y="72.445" font-family="cmr6" font-size="6" transform="translate(116.96 -5.283)">0</text><text x="-48.8" y="71.445" font-family="cmsy9" font-size="9" transform="translate(116.96 -5.283)">¼</text><text x="-39.036" y="71.445" font-family="cmr9" font-size="9" transform="translate(116.96 -5.283)">4</text><text x="-34.411" y="71.445" font-family="cmmi9" font-size="9" transform="translate(116.96 -5.283)">;</text><text x="-31.842" y="71.445" font-family="cmr9" font-size="9" transform="translate(116.96 -5.283)">69</text></g><g fill="#00f" stroke="#00f"><text x="-60.779" y="71.445" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(54.113 -115.09)">C</text></g><g fill="red" stroke="red"><text x="-60.779" y="71.445" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(58.068 -92.169)">r</text></g></g></svg>
</figure>

## d) Area $A_{n}$

Per $x\in\bigl[\tfrac{1}{n},1\bigr]$ (con $x\le 1$) la funzione è convessa e la curva $C$ giace sopra la tangente $r$; l'area del dominio delimitato da $C$, da $r$ e dalle rette $x=\tfrac{1}{n}$ e $x=1$ è
$$
A_{n}=\int_{1/n}^{1}\bigl[f(x)-(2x+\tfrac{1}{2})\bigr]\,dx
=\int_{1/n}^{1}\left(\frac{3}{2}x^{2}-x^{2}\ln x-2x+\frac{1}{2}\right)dx .
$$
Usando $\displaystyle\int x^{2}\ln x\,dx=\frac{x^{3}}{3}\ln x-\frac{x^{3}}{9}$, una primitiva è
$$
F(x)=\frac{11}{18}\,x^{3}-\frac{x^{3}}{3}\ln x-x^{2}+\frac{1}{2}\,x .
$$
Poiché $F(1)=\dfrac{11}{18}-1+\dfrac{1}{2}=\dfrac{1}{9}$ e, posto $x=\tfrac{1}{n}$ (con $\ln\tfrac1n=-\ln n$),
$$
F\!\left(\frac{1}{n}\right)=\frac{11}{18\,n^{3}}+\frac{\ln n}{3\,n^{3}}-\frac{1}{n^{2}}+\frac{1}{2n},
$$
si ottiene
$$
\boxed{\,A_{n}=\frac{1}{9}+\frac{1}{n^{2}}-\frac{1}{2n}-\frac{11}{18\,n^{3}}-\frac{\ln n}{3\,n^{3}}\,}.
$$

## e) Limite di $A_{n}$

Tutti i termini contenenti $n$ al denominatore tendono a $0$ per $n\to+\infty$ (in particolare $\dfrac{\ln n}{n^{3}}\to 0$), quindi
$$
\lim_{n\to+\infty} A_{n}=\frac{1}{9}.
$$
**Interpretazione:** al crescere di $n$ l'estremo sinistro $x=\tfrac{1}{n}$ tende a $0$, cioè la regione si estende fino all'asse $y$. Il limite finito significa che l'integrale improprio $\displaystyle\int_{0}^{1}\bigl[f(x)-r(x)\bigr]\,dx=\frac{1}{9}$ **converge**: pur essendo illimitata la successione degli intervalli, la regione compresa tra la curva e la tangente sull'intervallo $(0,1]$ ha area finita pari a $\dfrac{1}{9}$.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
