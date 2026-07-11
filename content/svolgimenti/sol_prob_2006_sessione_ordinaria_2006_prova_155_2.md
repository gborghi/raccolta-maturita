

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_155_2|2006 Sessione Ordinaria PNI — Prova (p.155) — Problema 2]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Sono date $f(x)=\log x$ e $g(x)=ax^2$, con $a$ parametro reale e logaritmo in base $e$ (quindi $\log x=\ln x$). Il dominio comune per le questioni con $x>0$ è $(0,+\infty)$.

## a) Discussione dell'equazione e tangenza

Per $x>0$ l'equazione $\log x = ax^2$ si può scrivere isolando il parametro:

$$a=\frac{\log x}{x^2}.$$

Le soluzioni dell'equazione corrispondono quindi alle intersezioni del grafico di

$$\varphi(x)=\frac{\log x}{x^2},\qquad x>0,$$

con la retta orizzontale $y=a$. Studiamo $\varphi$:

$$\varphi'(x)=\frac{\frac{1}{x}\cdot x^2-\log x\cdot 2x}{x^4}=\frac{1-2\log x}{x^3}.$$

Poiché $x^3>0$, il segno dipende da $1-2\log x$: $\varphi'(x)>0$ per $\log x<\tfrac12$, cioè $0<x<\sqrt e$, e $\varphi'(x)<0$ per $x>\sqrt e$. Dunque $\varphi$ ha un **massimo assoluto** in $x=\sqrt e$, con valore

$$\varphi(\sqrt e)=\frac{\tfrac12}{e}=\frac{1}{2e}.$$

Inoltre $\displaystyle\lim_{x\to 0^+}\varphi(x)=-\infty$, $\varphi(1)=0$ e $\displaystyle\lim_{x\to+\infty}\varphi(x)=0^+$. Il grafico sale da $-\infty$ fino a $\dfrac{1}{2e}$ e poi decresce verso $0^+$. Confrontando con la retta $y=a$ si ottiene la discussione:

$$\begin{cases}
a>\dfrac{1}{2e} & \text{nessuna soluzione}\\[4pt]
a=\dfrac{1}{2e} & \text{una soluzione (tangenza)}\\[4pt]
0<a<\dfrac{1}{2e} & \text{due soluzioni}\\[4pt]
a\le 0 & \text{una soluzione}
\end{cases}$$

Il caso $a=\dfrac{1}{2e}$ dà una sola intersezione: qui i due grafici sono **tangenti**. Verifichiamolo direttamente. Nel punto $x=\sqrt e$ si ha

$$f(\sqrt e)=\log\sqrt e=\tfrac12,\qquad g(\sqrt e)=\frac{1}{2e}\cdot e=\tfrac12,$$

quindi le curve passano per lo stesso punto $\left(\sqrt e,\tfrac12\right)$; inoltre

$$f'(x)=\frac1x\Rightarrow f'(\sqrt e)=\frac{1}{\sqrt e},\qquad g'(x)=2ax\Rightarrow g'(\sqrt e)=\frac{1}{e}\cdot\sqrt e=\frac{1}{\sqrt e},$$

cioè hanno la stessa retta tangente. La condizione di tangenza è dunque

$$\boxed{a=\frac{1}{2e}}\qquad\text{nel punto }\left(\sqrt e,\tfrac12\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="232.181" height="217.953" viewBox="-72 -72 174.136 163.465"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-64.672 90.995V-56.56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-67.072-54.68c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-64.672" y="9.62" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -72.057)">y</text><path fill="none" d="M-72.07 9.62H53.291"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M51.411 7.22c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-64.672" y="9.62" stroke="none" font-family="cmmi10" font-size="10" transform="translate(121.897 2.153)">x</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-60.234 88.044 1.348-10.129 1.349-7.494 1.348-6.343 1.348-5.448 1.349-4.755 1.348-4.21 1.349-3.78 1.348-3.43 1.348-3.138 1.349-2.891 1.348-2.688 1.348-2.501 1.349-2.345 1.348-2.202 1.348-2.08 1.349-1.968 1.348-1.869 1.348-1.78 1.349-1.696 1.348-1.623 1.349-1.553 1.348-1.493 1.348-1.432 1.349-1.382 1.348-1.334 1.348-1.285 1.349-1.242 1.348-1.202 1.348-1.164 1.349-1.126 1.348-1.096 1.348-1.063 1.349-1.033 1.348-1.004 1.349-.98 1.348-.954 1.348-.928 1.349-.907 1.348-.886 1.348-.864 1.349-.842 1.348-.828 1.348-.807 1.349-.794 1.348-.77 1.348-.758 1.349-.744 1.348-.724 1.349-.715 1.348-.7 1.348-.69 1.349-.68 1.348-.662 1.348-.651 1.349-.64 1.348-.63 1.348-.618 1.349-.608 1.348-.599 1.348-.59 1.349-.58 1.348-.57 1.349-.562 1.348-.554 1.348-.546 1.349-.538 1.348-.53 1.348-.522 1.349-.515 1.348-.508 1.348-.5 1.349-.496 1.348-.487 1.348-.481 1.349-.476 1.348-.47 1.348-.462 1.349-.459 1.348-.451"/><g fill="#00f" stroke="none" font-size="10"><text x="-64.672" y="9.62" font-family="cmmi10" transform="translate(114.692 -38.13)">f</text><text x="-58.7" y="9.62" font-family="cmr10" transform="translate(114.692 -38.13)">(</text><text x="-54.811" y="9.62" font-family="cmmi10" transform="translate(114.692 -38.13)">x</text><text x="-49.096" y="9.62" font-family="cmr10" transform="translate(114.692 -38.13)">)</text><text x="-42.429" y="9.62" font-family="cmr10" transform="translate(114.692 -38.13)">=</text><text x="-31.874" y="9.62" font-family="cmr10" transform="translate(114.692 -38.13)">ln</text><text x="-21.874" y="9.62" font-family="cmmi10" transform="translate(114.692 -38.13)">x</text></g></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-64.672 9.62 1.404-.01 1.404-.03 1.404-.048 1.405-.069 1.404-.088 1.404-.108 1.404-.127 1.404-.147 1.405-.167 1.404-.187 1.404-.205 1.404-.226 1.405-.245 1.404-.264 1.404-.285 1.404-.304 1.405-.324 1.404-.343 1.404-.362 1.404-.383 1.404-.402 1.405-.422 1.404-.441 1.404-.46 1.404-.48 1.405-.502 1.404-.52 1.404-.538 1.404-.56 1.405-.578 1.404-.598 1.404-.618 1.404-.637 1.404-.658 1.405-.676 1.404-.696 1.404-.716 1.404-.735 1.405-.756 1.404-.774 1.404-.795 1.404-.813 1.405-.833 1.404-.854 1.404-.872 1.404-.893 1.405-.912 1.404-.931 1.404-.952 1.404-.97 1.404-.991 1.405-1.01 1.404-1.03 1.404-1.049 1.404-1.068 1.405-1.089 1.404-1.108 1.404-1.128 1.404-1.147 1.405-1.167 1.404-1.186 1.404-1.207 1.404-1.225 1.404-1.245 1.405-1.266 1.404-1.284 1.404-1.304 1.404-1.324 1.405-1.343 1.404-1.364 1.404-1.382 1.404-1.403 1.405-1.421 1.404-1.442 1.404-1.46 1.404-1.482 1.404-1.5 1.405-1.52 1.404-1.54"/><g fill="red" stroke="none"><text x="-64.672" y="9.62" font-family="cmmi10" font-size="10" transform="translate(64.41 -68.38)">g</text><text x="-59.544" y="9.62" font-family="cmr10" font-size="10" transform="translate(64.41 -68.38)">(</text><text x="-55.655" y="9.62" font-family="cmmi10" font-size="10" transform="translate(64.41 -68.38)">x</text><text x="-49.94" y="9.62" font-family="cmr10" font-size="10" transform="translate(64.41 -68.38)">)</text><text x="-43.273" y="9.62" font-family="cmr10" font-size="10" transform="translate(64.41 -68.38)">=</text><text x="-31.518" y="5.682" font-family="cmmi7" font-size="7" transform="translate(64.41 -68.38)">x</text><text x="-26.983" y="2.665" font-family="cmr5" font-size="5" transform="translate(64.41 -68.38)">2</text><path d="M32.891-61.46h8.438v.4h-8.438z"/><text x="-31.189" y="13.068" font-family="cmr7" font-size="7" transform="translate(64.41 -68.38)">2</text><text x="-27.203" y="13.068" font-family="cmmi7" font-size="7" transform="translate(64.41 -68.38)">e</text></g></g><path stroke="none" d="M-1.61-8.875a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><g stroke="none"><text x="-64.672" y="9.62" font-family="cmr10" font-size="10" transform="translate(25.852 -25.476)">(</text><text x="-60.783" y="2.417" font-family="cmsy10" font-size="10" transform="translate(25.852 -25.476)">p</text><path d="M-26.598-23.459h4.656v.4h-4.656z"/><text x="-52.45" y="9.62" font-family="cmmi10" font-size="10" transform="translate(25.852 -25.476)">e</text><text x="-47.794" y="9.62" font-family="cmmi10" font-size="10" transform="translate(25.852 -25.476)">;</text><text x="-42.149" y="5.682" font-family="cmr7" font-size="7" transform="translate(25.852 -25.476)">1</text><path d="M-16.297-18.556h3.986v.4h-3.986z"/><text x="-42.149" y="13.068" font-family="cmr7" font-size="7" transform="translate(25.852 -25.476)">2</text><text x="-36.963" y="9.62" font-family="cmr10" font-size="10" transform="translate(25.852 -25.476)">)</text></g></g></svg>
</figure>

## b) Area nella striscia $-2\le y\le -1$ (con $a=-e^2$)

Con $a=-e^2$ si ha $g(x)=-e^2x^2$. Le due curve si intersecano dove $\log x=-e^2x^2$; il punto $\left(\tfrac1e,-1\right)$ soddisfa entrambe: $f\!\left(\tfrac1e\right)=\log\tfrac1e=-1$ e $g\!\left(\tfrac1e\right)=-e^2\cdot\tfrac{1}{e^2}=-1$. Poiché le rette che delimitano la striscia sono **orizzontali**, conviene integrare rispetto a $y$, esprimendo $x$ in funzione di $y$ su ciascuna curva (con $x>0$):

$$f:\ y=\log x\ \Rightarrow\ x=e^{y};\qquad g:\ y=-e^2x^2\ \Rightarrow\ x=\frac{\sqrt{-y}}{e}.$$

Per $-2\le y\le -1$ risulta $\dfrac{\sqrt{-y}}{e}\ge e^{y}$ (ad esempio in $y=-\tfrac32$: $\tfrac{\sqrt{1.5}}{e}\approx0{,}45$ contro $e^{-1.5}\approx0{,}22$), dunque la curva $g$ sta a destra di $f$. L'area è

$$A=\int_{-2}^{-1}\left(\frac{\sqrt{-y}}{e}-e^{y}\right)dy.$$

Con la sostituzione $u=-y$ nel primo integrale:

$$\int_{-2}^{-1}\sqrt{-y}\,dy=\int_{1}^{2}\sqrt{u}\,du=\left[\frac{2}{3}u^{3/2}\right]_1^2=\frac{2}{3}\left(2\sqrt2-1\right),$$

$$\int_{-2}^{-1}e^{y}\,dy=\left[e^{y}\right]_{-2}^{-1}=\frac1e-\frac{1}{e^2}.$$

Quindi

$$A=\frac{2\left(2\sqrt2-1\right)}{3e}-\left(\frac1e-\frac{1}{e^2}\right)=\frac{4\sqrt2-5}{3e}+\frac{1}{e^2}\approx 0{,}216.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="172.749" height="162.404" viewBox="-72 -72 129.561 121.803"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.306 40.716v-99.47"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="-46.208" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -18.424)">y</text><path fill="none" d="M-69.152-46.208h90.649"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M19.617-48.608c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-66.306" y="-46.208" stroke="none" font-family="cmmi10" font-size="10" transform="translate(91.736 2.153)">x</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-66.306-9.22h85.359"/><g stroke="none" font-size="10"><text x="-66.306" y="-46.208" font-family="cmmi10" transform="translate(88.892 39.239)">y</text><text x="-58.267" y="-46.208" font-family="cmr10" transform="translate(88.892 39.239)">=</text><text x="-47.711" y="-46.208" font-family="cmsy10" transform="translate(88.892 39.239)">¡</text><text x="-39.934" y="-46.208" font-family="cmr10" transform="translate(88.892 39.239)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-66.306 27.77h85.359"/><g stroke="none" font-size="10"><text x="-66.306" y="-46.208" font-family="cmmi10" transform="translate(88.892 76.227)">y</text><text x="-58.267" y="-46.208" font-family="cmr10" transform="translate(88.892 76.227)">=</text><text x="-47.711" y="-46.208" font-family="cmsy10" transform="translate(88.892 76.227)">¡</text><text x="-39.934" y="-46.208" font-family="cmr10" transform="translate(88.892 76.227)">2</text></g></g><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-49.235 32.216.675-1.432.675-2.226.675-1.204.675-1.175.675-1.147.675-1.12.675-1.093.676-1.069.675-1.044.675-1.02.675-.996.675-.975.675-.953.675-.931.675-.911.675-.892.676-.873.675-.855.675-.836.675-.82.675-.802.675-.786.675-.771.675-.756.675-.742.676-.727.675-.713.675-.7.675-.687.675-.676.675-.663.675-.65.675-.64.675-.63.676-.618.675-.61.675-.599.675-.589.675-.58.675-.571.675-.562.675-.553.675-.546.676-.538.675-.53.675-.522.675-.516.675-.507.675-.502.675-.495.675-.486.675-.483.675-.475.676-.47.675-.462.675-.46.675-.45.675-.449.675-.44"/><text x="-66.306" y="-46.208" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(47.197 36.396)">f</text></g><g fill="red" stroke="red" stroke-width=".8"><path fill="none" d="m-66.306-46.208 1.324.023 1.324.071 1.324.119 1.324.166 1.325.213 1.324.26 1.324.308 1.324.355 1.324.403 1.324.45 1.325.497 1.324.545 1.324.592 1.324.639 1.324.687 1.324.733 1.325.782 1.324.828 1.324.877 1.324.923 1.324.971 1.324 1.018 1.325 1.066 1.324 1.113 1.324 1.16 1.324 1.208 1.324 1.254 1.324 1.303 1.325 1.35 1.324 1.396 1.324 1.445 1.324 1.492 1.324 1.538 1.325 1.587 1.324 1.634 1.324 1.681 1.324 1.728 1.324 1.777 1.324 1.823 1.325 1.87 1.324 1.918 1.324 1.966 1.324 2.012 1.324 2.06 1.324 2.108 1.325 2.154 1.324 2.203 1.324 2.25 1.324 2.296 1.324 2.344 1.324 2.392 1.325 2.438 1.324 2.487 1.324 2.533 1.324 2.581 1.324 2.629 1.324 2.675 1.325 2.723 1.324 2.77"/><text x="-66.306" y="-46.208" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(75.562 90.463)">g</text></g><path stroke="none" d="M-9.967-9.22c0-.574-1.79-1.04-4-1.04s-4 .466-4 1.04 1.791 1.04 4 1.04 4-.465 4-1.04m-4 0"/></g></svg>
</figure>

## c) Studio di $h(x)=\log x-ax^2$ con $a=\dfrac12$

Scegliamo $a=\dfrac12>\dfrac{1}{2e}$, così

$$h(x)=\log x-\frac{x^2}{2},\qquad x>0.$$

**Limiti agli estremi del dominio.** $\displaystyle\lim_{x\to 0^+}h(x)=-\infty$ (l'asse $y$ è asintoto verticale) e $\displaystyle\lim_{x\to+\infty}h(x)=-\infty$, perché il termine $-\dfrac{x^2}{2}$ prevale sul logaritmo. Non ci sono asintoti obliqui.

**Monotonia.**

$$h'(x)=\frac1x-x=\frac{1-x^2}{x}.$$

Per $x>0$ il segno è quello di $1-x^2$: $h'(x)>0$ per $0<x<1$, $h'(x)<0$ per $x>1$. Quindi $h$ ha un **massimo assoluto** in $x=1$:

$$h(1)=\log 1-\frac12=-\frac12.$$

Essendo il massimo pari a $-\dfrac12<0$, la funzione è sempre negativa: $\log x<\dfrac{x^2}{2}$ per ogni $x>0$, coerentemente con l'assenza di intersezioni trovata al punto a) per $a>\dfrac{1}{2e}$.

**Concavità.**

$$h''(x)=-\frac{1}{x^2}-1<0\quad\text{per ogni }x>0,$$

quindi il grafico è **concavo** su tutto il dominio, senza punti di flesso.

Il grafico è dunque una curva concava che, partendo da $-\infty$ in prossimità dell'asse $y$, sale fino al vertice $\left(1,-\tfrac12\right)$ e poi ridiscende a $-\infty$, restando interamente al di sotto dell'asse $x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="155.133" height="175.573" viewBox="-72 -72 116.35 131.68"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-64.672 59.21V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-67.072-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-64.672" y="-36.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -27.67)">y</text><path fill="none" d="M-72.07-36.96H31.098"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M29.218-39.36c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-64.672" y="-36.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(99.704 2.153)">x</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.234 41.73 1.02-7.962 1.02-5.878 1.021-5.107 1.02-4.463 1.021-3.93 1.02-3.48 1.021-3.106 1.02-2.79 1.021-2.518 1.02-2.281 1.02-2.074 1.021-1.888 1.02-1.722 1.021-1.572 1.02-1.432 1.021-1.306 1.02-1.186 1.02-1.078 1.021-.976 1.02-.88 1.021-.789 1.02-.702 1.021-.622 1.02-.543 1.021-.472 1.02-.397 1.02-.332 1.021-.263 1.02-.202 1.021-.138 1.02-.08 1.021-.027 1.02.033 1.021.09 1.02.14 1.02.195 1.021.244 1.02.294 1.021.342 1.02.392 1.021.437 1.02.484 1.02.529 1.021.576 1.02.618 1.021.66 1.02.704 1.021.748 1.02.789 1.021.827 1.02.869 1.02.912 1.021.95 1.02.987 1.021 1.032 1.02 1.065 1.021 1.106 1.02 1.142 1.02 1.183L.993.098l1.02 1.257 1.021 1.29 1.02 1.334 1.021 1.363 1.02 1.4 1.021 1.436 1.02 1.476 1.02 1.507 1.021 1.537 1.02 1.578 1.021 1.614 1.02 1.648 1.021 1.681 1.02 1.717 1.021 1.751 1.02 1.785 1.02 1.818 1.021 1.851 1.02 1.888"/><path stroke="none" d="M-25.604-18.466a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><g stroke="none"><text x="-64.672" y="-36.961" font-family="cmr10" font-size="10" transform="translate(40.522 11.513)">(1</text><text x="-55.783" y="-36.961" font-family="cmmi10" font-size="10" transform="translate(40.522 11.513)">;</text><text x="-51.339" y="-36.961" font-family="cmsy10" font-size="10" transform="translate(40.522 11.513)">¡</text><text x="-42.361" y="-40.898" font-family="cmr7" font-size="7" transform="translate(40.522 11.513)">1</text><path d="M-1.84-28.148h3.987v.4H-1.84z"/><text x="-42.361" y="-33.512" font-family="cmr7" font-size="7" transform="translate(40.522 11.513)">2</text><text x="-37.175" y="-36.961" font-family="cmr10" font-size="10" transform="translate(40.522 11.513)">)</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
