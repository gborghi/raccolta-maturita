

**Problema:** [[Problemi/prob_2005_estero_calendario_australe_2005_sessione_suppletiv_problema1_60_1|2005 Estero Australe Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_estero_calendario_australe_2005_sessione_suppletiv_problema1_60|2005 Estero Australe Suppletiva — Problema 1]]

Data l'equazione $y=x^{3}-ax+b$, si determinino $a$ e $b$ affinché la curva $\Gamma$ sia tangente nel punto $A$ di ascissa $-1$ alla retta $r:\;y=4$; si studi e si disegni $\Gamma$; si calcolino le aree indicate.

## a) Determinazione di $a$ e $b$ e studio di $\Gamma$

Il punto $A$ ha ascissa $-1$ e appartiene alla retta $r:\;y=4$, quindi $A=(-1;\,4)$.

Imponendo il passaggio di $\Gamma$ per $A$:
$$4=(-1)^{3}-a(-1)+b=-1+a+b \quad\Rightarrow\quad a+b=5.$$

La tangente in $A$ è la retta orizzontale $r$, dunque $y'(-1)=0$. Poiché $y'=3x^{2}-a$:
$$y'(-1)=3-a=0 \quad\Rightarrow\quad a=3,\qquad b=2.$$

L'equazione della curva è pertanto
$$y=x^{3}-3x+2=(x+1)^{2}(x-2).$$

**Studio della funzione.** Si tratta di una cubica, quindi definita, continua e derivabile su tutto $\mathbb{R}$; è tangente all'asse $x$ in $x=-1$ (radice doppia) e passa per $(2;\,0)$. Si ha
$$\lim_{x\to-\infty}y=-\infty,\qquad \lim_{x\to+\infty}y=+\infty,$$
e non vi sono asintoti.

Dalla derivata prima $y'=3x^{2}-3\ge 0$ per $x\le-1$ oppure $x\ge 1$: la funzione cresce per $x<-1$ e per $x>1$, decresce per $-1<x<1$. Si hanno quindi un massimo relativo $M=(-1;\,4)$ e un minimo relativo $m=(1;\,0)$.

La derivata seconda $y''=6x$ si annulla in $x=0$, dove cambia segno: vi è l'unico flesso $F=(0;\,2)$, centro di simmetria della cubica.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="249.882" height="307.971" viewBox="-72 -72 187.411 230.978"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.87 117.536h141.4"/><path stroke="none" d="m71.53 117.536-3.2-1.6 1.2 1.6-1.2 1.6"/><text x="-2.73" y="117.536" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.794 2.153)">x</text><path fill="none" d="M-2.73 158.508V-57.154"/><path stroke="none" d="m-2.73-59.154-1.6 3.2 1.6-1.2 1.6 1.2"/><text x="-2.73" y="117.536" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -182.168)">y</text><path fill="none" d="M-53.945 115.487v4.098"/><g stroke="none" font-size="7"><text x="-2.73" y="117.536" font-family="cmsy7" transform="translate(-56.333 10.093)">¡</text><text x="3.52" y="117.536" font-family="cmr7" transform="translate(-56.333 10.093)">2</text></g><path fill="none" d="M-28.338 115.487v4.098"/><g stroke="none" font-size="7"><text x="-2.73" y="117.536" font-family="cmsy7" transform="translate(-30.725 10.093)">¡</text><text x="3.52" y="117.536" font-family="cmr7" transform="translate(-30.725 10.093)">1</text></g><path fill="none" d="M22.877 115.487v4.098"/><text x="-2.73" y="117.536" stroke="none" font-family="cmr7" font-size="7" transform="translate(23.614 10.093)">1</text><path fill="none" d="M48.484 115.487v4.098"/><text x="-2.73" y="117.536" stroke="none" font-family="cmr7" font-size="7" transform="translate(49.222 10.093)">2</text><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="M-71.87 15.107h143.4"/><g fill="red" stroke="none" font-size="9"><text x="-2.73" y="117.536" font-family="cmmi9" transform="translate(77.994 -100.404)">r</text><text x="4.27" y="117.536" font-family="cmr9" transform="translate(77.994 -100.404)">:</text><text x="11.978" y="117.536" font-family="cmmi9" transform="translate(77.994 -100.404)">y</text><text x="19.426" y="117.536" font-family="cmr9" transform="translate(77.994 -100.404)">=</text><text x="29.19" y="117.536" font-family="cmr9" transform="translate(77.994 -100.404)">4</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.786 155.647 1.41-14.825 1.41-13.848 1.41-12.898 1.41-11.975 1.409-11.076 1.41-10.202 1.41-9.356 1.41-8.534 1.41-7.738 1.409-6.967 1.41-6.222 1.41-5.503 1.41-4.81 1.409-4.141 1.41-3.5 1.41-2.882 1.41-2.292 1.41-1.726L-31 15.966l1.41-.673 1.41-.184 1.41.28 1.409.715 1.41 1.128 1.41 1.513 1.41 1.874 1.409 2.208 1.41 2.518 1.41 2.801 1.41 3.058 1.41 3.291 1.409 3.497 1.41 3.678 1.41 3.833 1.41 3.963 1.409 4.066 1.41 4.145 1.41 4.197 1.41 4.225 1.41 4.226 1.409 4.201 1.41 4.152 1.41 4.076 1.41 3.974 1.409 3.848 1.41 3.696 1.41 3.517 1.41 3.314 1.41 3.084 1.409 2.829 1.41 2.548 1.41 2.242 1.41 1.91 1.409 1.553 1.41 1.17 1.41.76 1.41.327 1.41-.134 1.409-.62 1.41-1.131 1.41-1.669 1.41-2.23 1.409-2.82 1.41-3.433 1.41-4.073 1.41-4.737 1.41-5.429 1.409-6.145 1.41-6.888 1.41-7.655 1.41-8.45 1.409-9.266 1.41-10.112 1.41-10.983 1.41-11.879 1.41-12.8 1.409-13.747 1.41-14.72 1.41-15.72"/><path stroke="none" d="M-26.538 15.107a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-2.73" y="117.536" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-36.64 -105.962)">A</text><path stroke="none" d="M50.284 15.107a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-2.73" y="117.536" stroke="none" font-family="cmmi10" font-size="10" transform="translate(54.748 -105.962)">B</text><path stroke="none" d="M24.677 117.536a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><g stroke="none" font-size="7"><text x="-2.73" y="117.536" font-family="cmr7" transform="translate(29.14 8.783)">(1</text><text x="4.381" y="117.536" font-family="cmmi7" transform="translate(29.14 8.783)">;</text><text x="9.487" y="117.536" font-family="cmr7" transform="translate(29.14 8.783)">0)</text></g><path stroke="none" d="M-.93 66.322a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-2.73" y="117.536" stroke="none" font-family="cmmi7" font-size="7" transform="translate(3.533 -48.823)">F</text><g fill="#00f" stroke="#00f"><text x="-2.73" y="117.536" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(55.772 -139.984)">¡</text></g></g></svg>
</figure>

## b) Area della regione tra il segmento $AB$ e $\Gamma$

La retta $r$ incontra $\Gamma$ in un secondo punto $B$; risolvendo il sistema tra $y=x^{3}-3x+2$ e $y=4$:
$$x^{3}-3x+2=4 \quad\Rightarrow\quad x^{3}-3x-2=0.$$

Poiché $x=-1$ è radice, si fattorizza con la regola di Ruffini:
$$x^{3}-3x-2=(x+1)(x^{2}-x-2)=(x+1)^{2}(x-2)=0,$$
da cui $x=-1$ (punto $A$) e $x=2$, ossia $B=(2;\,4)$.

Nell'intervallo $[-1;\,2]$ la retta $r$ sta sopra la curva, quindi l'area richiesta è
$$\text{Area}=\int_{-1}^{2}\big[4-(x^{3}-3x+2)\big]\,dx=\int_{-1}^{2}\big(2-x^{3}+3x\big)\,dx.$$

Calcolando la primitiva:
$$\int_{-1}^{2}\big(2-x^{3}+3x\big)\,dx=\left[\,2x-\frac{x^{4}}{4}+\frac{3x^{2}}{2}\,\right]_{-1}^{2}.$$

Nell'estremo superiore $x=2$: $\;4-4+6=6$; nell'estremo inferiore $x=-1$: $\;-2-\frac14+\frac32=-\frac34$. Quindi
$$\text{Area}=6-\left(-\frac{3}{4}\right)=\frac{27}{4}=6{,}75\ \text{u}^2.$$

## c) La retta $s$ per l'origine

Si cerca la retta $s:\;y=mx$ per l'origine che delimita con $\Gamma$ e con l'asse $y$ una regione finita nel secondo quadrante, di area $\dfrac{5}{4}$.

Intersecando $\Gamma$ con $s$:
$$x^{3}-3x+2=mx \quad\Rightarrow\quad x^{3}-(3+m)x+2=0.$$

Detta $t$ l'ascissa del punto d'intersezione $C$ (con $t<0$), vale $t^{3}-(3+m)t+2=0$, da cui
$$m=\frac{t^{3}-3t+2}{t}.$$

L'area, calcolata tra $x=t$ e l'asse $y$ ($x=0$), dove la curva sta sopra la retta, è
$$\text{Area}=\int_{t}^{0}\big(x^{3}-3x+2-mx\big)\,dx=\left[\frac{x^{4}}{4}-\frac{3x^{2}}{2}+2x-\frac{m\,x^{2}}{2}\right]_{t}^{0}.$$

Si ottiene
$$\text{Area}=-\frac{t^{4}}{4}+\frac{3t^{2}}{2}-2t+\frac{m\,t^{2}}{2}.$$

Sostituendo $\dfrac{m\,t^{2}}{2}=\dfrac{t^{4}-3t^{2}+2t}{2}$, i termini in $t^{2}$ si cancellano e resta
$$\text{Area}=\frac{t^{4}}{4}-t.$$

Imponendo $\dfrac{t^{4}}{4}-t=\dfrac{5}{4}$ si arriva a
$$t^{4}-4t-5=0.$$

Poiché $t=-1$ è radice, con Ruffini:
$$(t+1)(t^{3}-t^{2}+t-5)=0.$$

Essendo $t<0$, il fattore $t^{3}-t^{2}+t-5$ è sempre negativo, quindi l'unica soluzione accettabile è $t=-1$: il punto $C$ ha ascissa $-1$.

Infine
$$m=\frac{(-1)^{3}-3(-1)+2}{-1}=\frac{4}{-1}=-4.$$

La retta richiesta è dunque $\;s:\;y=-4x.$

*Fonte:* [📄 PDF p.60](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
