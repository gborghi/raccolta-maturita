

**Problema:** [[Problemi/prob_2002_pni_2002_sessione_straordinaria_problema2_86_1|2002 Straordinaria PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/2002_pni_2002_sessione_straordinaria_problema2_86|2002 Straordinaria PNI — Problema 2]]

Con riferimento a un sistema di assi cartesiani ortogonali $Oxy$, si considerino le funzioni
$$f(x)=\frac{-2x^{3}+6x^{2}}{3}, \qquad g(x)=\frac{x^{3}-6x^{2}+12x}{3}.$$

## a) Studio delle due funzioni

**Studio di $f(x)=\dfrac{-2x^{3}+6x^{2}}{3}$.**

Si tratta di una cubica, definita su tutto $\mathbb{R}$; non è né pari né dispari.

*Intersezioni con gli assi.* Da $f(x)=\dfrac{x^{2}(-2x+6)}{3}=0$ si ottiene $x=0$ (radice doppia, quindi tangenza all'asse $x$) e $x=3$.

*Limiti.*
$$\lim_{x\to\pm\infty} f(x)=\lim_{x\to\pm\infty}\frac{-2x^{3}}{3}=\mp\infty,$$
e non vi sono asintoti obliqui.

*Derivata prima.*
$$f'(x)=\frac{-6x^{2}+12x}{3}=-2x^{2}+4x=-2x(x-2)\ge 0 \iff 0\le x\le 2.$$
La funzione è quindi decrescente per $x<0$, crescente per $0<x<2$ e di nuovo decrescente per $x>2$. Pertanto $x=0$ è punto di minimo relativo con $f(0)=0$ e $x=2$ è punto di massimo relativo con
$$f(2)=\frac{-16+24}{3}=\frac{8}{3}.$$

*Derivata seconda.*
$$f''(x)=-4x+4\ge 0 \iff x\le 1,$$
dunque la concavità è rivolta verso l'alto per $x<1$ e verso il basso per $x>1$; in $x=1$ vi è un flesso con $f(1)=\dfrac{-2+6}{3}=\dfrac{4}{3}$.

**Studio di $g(x)=\dfrac{x^{3}-6x^{2}+12x}{3}$.**

Anche questa è una cubica definita su tutto $\mathbb{R}$, non pari né dispari.

*Intersezioni con gli assi.* Da $g(x)=\dfrac{x(x^{2}-6x+12)}{3}=0$ si ha soltanto $x=0$, poiché $x^{2}-6x+12$ ha discriminante negativo.

*Limiti.*
$$\lim_{x\to\pm\infty} g(x)=\lim_{x\to\pm\infty}\frac{x^{3}}{3}=\pm\infty,$$
senza asintoti obliqui.

*Derivata prima.*
$$g'(x)=\frac{3x^{2}-12x+12}{3}=x^{2}-4x+4=(x-2)^{2}\ge 0 \quad\forall x,$$
quindi $g$ è sempre crescente e in $x=2$, dove $g'(2)=0$, presenta un flesso a tangente orizzontale con
$$g(2)=\frac{8-24+24}{3}=\frac{8}{3}.$$

*Derivata seconda.*
$$g''(x)=2x-4\ge 0 \iff x\ge 2,$$
concavità verso il basso per $x<2$ e verso l'alto per $x>2$; il flesso è in $x=2$.

I grafici delle due funzioni sono rappresentati qui sotto.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="195.914" height="274.063" viewBox="-72 -72 146.935 205.548"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 61.912H61.684"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M59.804 59.512c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-52.438" y="61.912" stroke="none" font-family="cmmi10" font-size="10" transform="translate(118.055 2.153)">x</text><path fill="none" d="M-52.438 114.265v-173.02"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-54.838-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-52.438" y="61.912" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -126.543)">y</text><path fill="none" d="M-19.717 59.948v3.927"/><text x="-52.438" y="61.912" stroke="none" font-family="cmr10" font-size="10" transform="translate(30.22 11.94)">1</text><path fill="none" d="M13.003 59.948v3.927"/><text x="-52.438" y="61.912" stroke="none" font-family="cmr10" font-size="10" transform="translate(62.941 11.94)">2</text><path fill="none" d="M45.724 59.948v3.927"/><text x="-52.438" y="61.912" stroke="none" font-family="cmr10" font-size="10" transform="translate(95.661 11.94)">3</text><path fill="none" d="M-50.474-36.25h-3.927"/><text x="-52.438" y="61.912" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.496 -94.94)">3</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-67.162 46.674 1.553 3.212 1.553 2.798 1.553 2.4 1.552 2.014 1.553 1.643 1.553 1.285 1.553.942 1.552.613 1.553.297 1.553-.005 1.553-.292 1.552-.566 1.553-.825 1.553-1.07 1.553-1.303 1.552-1.52 1.553-1.723 1.553-1.913 1.552-2.088 1.553-2.25 1.553-2.399 1.553-2.531 1.552-2.651 1.553-2.757 1.553-2.849 1.553-2.925 1.552-2.99 1.553-3.04 1.553-3.076 1.553-3.097 1.552-3.105 1.553-3.098 1.553-3.079 1.553-3.044 1.552-2.996 1.553-2.934 1.553-2.857 1.553-2.768 1.552-2.664 1.553-2.545 1.553-2.413 1.553-2.268 1.552-2.107 1.553-1.933 1.553-1.745 1.553-1.543 1.552-1.327 1.553-1.096 1.553-.854 1.553-.594 1.552-.323 1.553-.038 1.553.263 1.553.577 1.552.905 1.553 1.247 1.553 1.603 1.553 1.972L24.45-16.4l1.553 2.754 1.553 3.166 1.553 3.592 1.552 4.032 1.553 4.485 1.553 4.953 1.552 5.435 1.553 5.931 1.553 6.44 1.553 6.965 1.552 7.502 1.553 8.053 1.553 8.62 1.553 9.198 1.552 9.793 1.553 10.4 1.553 11.023L52.4 107.6l1.552 12.307 1.553 12.97"/><path fill="none" stroke="red" stroke-width=".8" d="m-63.89 116.205 1.49-8.075 1.492-7.76 1.49-7.455 1.491-7.155 1.491-6.86 1.491-6.571 1.491-6.288 1.49-6.013 1.492-5.743 1.49-5.48 1.491-5.222L-46 38.61l1.49-4.726 1.492-4.488 1.49-4.255 1.491-4.028 1.491-3.808 1.491-3.595 1.49-3.386 1.492-3.185 1.49-2.989 1.491-2.8 1.491-2.617 1.491-2.44 1.491-2.27 1.49-2.105 1.492-1.946 1.49-1.795 1.491-1.648 1.491-1.509 1.49-1.375 1.492-1.248 1.49-1.127 1.491-1.011 1.491-.903 1.491-.8 1.491-.704 1.49-.614 1.492-.53 1.49-.451 1.491-.38 1.491-.315 1.491-.255 1.49-.202 1.492-.155 1.49-.115 1.491-.08 1.491-.052 1.491-.029 1.49-.014 1.492-.004h1.49l1.491-.003 1.491-.011 1.491-.027 1.49-.048 1.492-.075 1.49-.11 1.491-.148 1.491-.194 1.491-.247 1.49-.304 1.492-.37 1.49-.44 1.491-.518 1.491-.6 1.491-.69 1.49-.784 1.492-.886 1.49-.995 1.491-1.109 1.491-1.228 1.491-1.355 1.49-1.488 1.492-1.626 1.49-1.772 1.491-1.922 1.491-2.08 1.491-2.244"/><path stroke="none" d="M14.843-25.354a1.84 1.84 0 1 0-3.68 0 1.84 1.84 0 0 0 3.68 0m-1.84 0"/><text x="-52.438" y="61.912" stroke="none" font-family="cmmi10" font-size="10" transform="translate(68.974 -90.799)">A</text><path stroke="none" d="M-50.598 61.912a1.84 1.84 0 1 0-3.68 0 1.84 1.84 0 0 0 3.68 0m-1.84 0"/><text x="-52.438" y="61.912" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><g fill="#00f" stroke="#00f"><text x="-52.438" y="61.912" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(85.359 41.764)">f</text></g><g fill="red" stroke="red"><text x="-52.438" y="61.912" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(100.505 -100.253)">g</text></g></g></svg>
</figure>

## b) Il punto $A$ e il segmento $RS$ massimo

Per trovare le intersezioni delle due curve si impone $g(x)=f(x)$:
$$\frac{x^{3}-6x^{2}+12x}{3}=\frac{-2x^{3}+6x^{2}}{3} \;\Rightarrow\; x^{3}-4x^{2}+4x=0 \;\Rightarrow\; x(x-2)^{2}=0,$$
da cui $x=0$ e $x=2$ (doppia). Oltre all'origine $O$ le curve hanno dunque in comune il punto
$$A=\left(2,\ \frac{8}{3}\right).$$

La retta $OA$ ha equazione $y=\dfrac{4}{3}x$. Preso su $OA$ un punto $P$ di ascissa $t$, con $0\le t\le 2$, la parallela all'asse $y$ per $P$ ($x=t$) incontra i due grafici in
$$R=\bigl(t,\ f(t)\bigr), \qquad S=\bigl(t,\ g(t)\bigr).$$
Essendo su $[0,2]$ sempre $f\le g$, la lunghezza di $RS$ è
$$\ell(t)=g(t)-f(t)=t^{3}-4t^{2}+4t=t(t-2)^{2}, \qquad 0\le t\le 2.$$
Cerchiamo il massimo:
$$\ell'(t)=3t^{2}-8t+4=(3t-2)(t-2)\ge 0 \iff t\le \frac{2}{3}\ \text{oppure}\ t\ge 2.$$
Sull'intervallo $[0,2]$ la funzione $\ell$ cresce per $0\le t<\dfrac{2}{3}$ e decresce per $\dfrac{2}{3}<t<2$: il massimo si ha in $t=\dfrac{2}{3}$, con
$$\ell\!\left(\frac{2}{3}\right)=\frac{2}{3}\left(\frac{2}{3}-2\right)^{2}=\frac{2}{3}\cdot\frac{16}{9}=\frac{32}{27}.$$
Il punto richiesto è quindi
$$P=\left(\frac{2}{3},\ \frac{8}{9}\right),$$
con $R=\left(\dfrac{2}{3},\dfrac{56}{81}\right)$ e $S=\left(\dfrac{2}{3},\dfrac{152}{81}\right)$.

## c) Punti con tangenti parallele

Si impone $f'(x)=g'(x)$:
$$-2x^{2}+4x=x^{2}-4x+4 \;\Rightarrow\; 3x^{2}-8x+4=0 \;\Rightarrow\; x=\frac{2}{3},\quad x=2.$$
Per $x=2$ si ritrova il punto $A$ (dove entrambe le tangenti hanno pendenza $0$), mentre per $x=\dfrac{2}{3}$ si ritrovano proprio i punti $R$ ed $S$ del punto b).

## d) Volume del solido di rotazione

La regione finita compresa fra le due curve ruota di un giro completo attorno all'asse $x$. Poiché su $[0,2]$ è $0\le f(x)\le g(x)$, con il metodo delle corone circolari si ha
$$V=\pi\int_{0}^{2}\bigl[g(x)^{2}-f(x)^{2}\bigr]\,dx.$$
Conviene osservare che
$$g(x)+f(x)=\frac{-x^{3}+12x}{3}, \qquad g(x)-f(x)=x(x-2)^{2},$$
quindi
$$V=\pi\int_{0}^{2} x(x-2)^{2}\cdot\frac{-x^{3}+12x}{3}\,dx=\frac{1216\,\pi}{315}\approx 12{,}13\ \text{u}^{3}.$$

*Fonte:* [📄 PDF p.86](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
