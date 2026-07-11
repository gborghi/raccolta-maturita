

**Problema:** [[Problemi/prob_2002_ordinamento_2002_sessione_straordinaria_problema2_66_1|2002 Straordinaria Ordinamento — Problema 2 — Problema 1]] · **Prova:** [[Prove/2002_ordinamento_2002_sessione_straordinaria_problema2_66|2002 Straordinaria Ordinamento — Problema 2]]

Con riferimento a un sistema di assi cartesiani ortogonali $(Oxy)$, si studiano le funzioni

$$f(x)=\frac{-2x^3+6x^2}{3}=\frac{2x^2(3-x)}{3}, \qquad g(x)=\frac{x^3-6x^2+12x}{3}=\frac{x(x^2-6x+12)}{3}.$$

## a) Studio delle due funzioni

**Funzione $f$.** È una cubica, definita su tutto $\mathbb{R}$, non pari né dispari. Le intersezioni con gli assi si hanno per $x=0$ (zero doppio, quindi tangenza all'asse $x$) e per $x=3$. Poiché

$$\lim_{x\to\pm\infty} f(x)=\lim_{x\to\pm\infty}\frac{-2x^3}{3}=\mp\infty,$$

non vi sono asintoti (né orizzontali né obliqui).

La derivata prima è

$$f'(x)=-2x^2+4x=-2x(x-2)\ge 0 \iff 0\le x\le 2,$$

dunque $f$ è crescente in $(0,2)$ e decrescente altrove: $x=0$ è punto di minimo relativo con $f(0)=0$, mentre $x=2$ è punto di massimo relativo con

$$f(2)=\frac{-2\cdot 8+6\cdot 4}{3}=\frac{8}{3}.$$

La derivata seconda è

$$f''(x)=-4x+4\ge 0 \iff x\le 1,$$

quindi la concavità è rivolta verso l'alto per $x<1$ e verso il basso per $x>1$, con un flesso in $x=1$, dove $f(1)=\dfrac{4}{3}$.

**Funzione $g$.** È una cubica, definita su tutto $\mathbb{R}$, non pari né dispari. Interseca gli assi solo in $x=0$: l'equazione $x^2-6x+12=0$ ha discriminante $\Delta=36-48<0$ e quindi nessuna radice reale. Inoltre

$$\lim_{x\to\pm\infty} g(x)=\lim_{x\to\pm\infty}\frac{x^3}{3}=\pm\infty,$$

senza asintoti obliqui. La derivata prima è

$$g'(x)=x^2-4x+4=(x-2)^2\ge 0 \quad\text{per ogni } x,$$

perciò $g$ è sempre crescente; in $x=2$ si annulla $g'$, dando un flesso a tangente orizzontale. La derivata seconda $g''(x)=2x-4\ge 0 \iff x\ge 2$ conferma il flesso in $x=2$, dove

$$g(2)=\frac{8-24+24}{3}=\frac{8}{3}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="232.145" height="367.241" viewBox="-72 -72 174.109 275.43"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 96.198H88.857"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M86.977 93.798c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-36.22" y="96.198" stroke="none" font-family="cmmi10" font-size="10" transform="translate(129.01 2.153)">x</text><path fill="none" d="M-36.22 132.049V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-38.62-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-36.22" y="96.198" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -160.83)">y</text><path fill="none" d="M-6.344 93.808v4.78"/><text x="-36.22" y="96.198" stroke="none" font-family="cmr9" font-size="9" transform="translate(27.563 11.723)">1</text><path fill="none" d="M23.531 93.808v4.78"/><text x="-36.22" y="96.198" stroke="none" font-family="cmr9" font-size="9" transform="translate(57.438 11.723)">2</text><path fill="none" d="M53.407 93.808v4.78"/><text x="-36.22" y="96.198" stroke="none" font-family="cmr9" font-size="9" transform="translate(87.314 11.723)">3</text><path fill="none" d="M-33.83 66.323h-4.78"/><text x="-36.22" y="96.198" stroke="none" font-family="cmr9" font-size="9" transform="translate(-10.548 -26.975)">1</text><path fill="none" d="M-33.83 36.447h-4.78"/><text x="-36.22" y="96.198" stroke="none" font-family="cmr9" font-size="9" transform="translate(-10.548 -56.85)">2</text><path fill="none" d="M-33.83 6.572h-4.78"/><text x="-36.22" y="96.198" stroke="none" font-family="cmr9" font-size="9" transform="translate(-10.548 -86.726)">3</text><path fill="none" d="M-33.83-23.304h-4.78"/><text x="-36.22" y="96.198" stroke="none" font-family="cmr9" font-size="9" transform="translate(-10.548 -116.602)">4</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-49.663 82.285 1.474 3.042 1.475 2.636 1.475 2.242 1.474 1.863 1.475 1.497 1.475 1.148 1.475.811 1.474.491 1.475.181 1.475-.11 1.474-.388 1.475-.653 1.475-.902 1.475-1.138 1.474-1.359 1.475-1.565 1.475-1.758 1.474-1.935 1.475-2.1 1.475-2.247 1.475-2.383 1.474-2.503 1.475-2.61 1.475-2.7 1.475-2.778 1.474-2.841 1.475-2.89 1.475-2.923 1.474-2.944 1.475-2.949 1.475-2.94 1.475-2.916 1.474-2.878 1.475-2.827 1.475-2.76 1.474-2.679 1.475-2.584 1.475-2.474 1.475-2.35 1.474-2.213 1.475-2.06 1.475-1.891 1.474-1.711 1.475-1.515 1.475-1.305 1.475-1.08 1.474-.84 1.475-.589 1.475-.32 1.474-.038 1.475.258 1.475.57 1.475.894 1.474 1.234 1.475 1.588 1.475 1.956 1.475 2.34 1.474 2.736 1.475 3.147 1.475 3.573 1.474 4.014 1.475 4.468 1.475 4.937 1.475 5.42 1.474 5.918 1.475 6.43 1.475 6.957 1.474 7.497 1.475 8.052 1.475 8.622 1.475 9.206 1.474 9.804 1.475 10.417 1.475 11.044 1.474 11.686 1.475 12.34 1.475 13.012 1.475 13.696 1.474 14.394"/><path fill="none" stroke="red" stroke-width=".8" d="m-51.157 172.131 1.342-8.238 1.342-7.942 1.342-7.651 1.342-7.367 1.342-7.086 1.342-6.812 1.342-6.543 1.342-6.28 1.342-6.021 1.342-5.77 1.342-5.52 1.342-5.28 1.343-5.043 1.342-4.812 1.342-4.587 1.342-4.367 1.342-4.152L-27 64.72l1.342-3.739 1.342-3.54 1.342-3.347 1.342-3.159 1.342-2.977 1.342-2.8 1.342-2.628 1.342-2.462 1.342-2.302 1.342-2.147 1.342-1.997 1.343-1.852 1.342-1.714 1.342-1.58 1.342-1.452 1.342-1.329 1.342-1.212 1.342-1.1 1.342-.994 1.342-.892 1.342-.797 1.342-.707 1.342-.622 1.342-.542 1.342-.469 1.342-.4 1.342-.337 1.343-.28 1.342-.227 1.342-.18 1.342-.139 1.342-.103 1.342-.072 1.342-.047 1.342-.026 1.342-.013 1.342-.004h1.342l1.342-.003 1.342-.01 1.342-.021 1.342-.04 1.342-.064 1.343-.093 1.342-.128 1.342-.167 1.342-.212 1.342-.263 1.342-.319 1.342-.38 1.342-.447 1.342-.52 1.342-.597 1.342-.68 1.342-.77 1.342-.862 1.342-.963 1.342-1.067 1.342-1.177 1.343-1.293 1.342-1.414"/><path stroke="none" d="M-34.12 96.198a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="-36.22" y="96.198" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path stroke="none" d="M25.631 16.52a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1 0"/><text x="-36.22" y="96.198" stroke="none" font-family="cmmi10" font-size="10" transform="translate(63.284 -83.211)">A</text><g fill="#00f" stroke="#00f"><text x="-36.22" y="96.198" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(97.097 23.413)">f</text></g><g fill="red" stroke="red"><text x="-36.22" y="96.198" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(87.062 -100.396)">g</text></g></g></svg>
</figure>

## b) Punto $A$ e massima lunghezza di $RS$

Cerchiamo le intersezioni fra le due curve imponendo $f(x)=g(x)$:

$$\frac{x^3-6x^2+12x}{3}=\frac{-2x^3+6x^2}{3} \;\Rightarrow\; x^3-4x^2+4x=0 \;\Rightarrow\; x(x-2)^2=0.$$

Le soluzioni sono $x=0$ e $x=2$ (doppia). Oltre all'origine $O=(0,0)$ le curve hanno in comune il punto

$$A=\left(2,\ \frac{8}{3}\right).$$

La retta $OA$ ha equazione $y=\dfrac{4}{3}x$. Preso su $OA$ un punto di ascissa $x$, con $0\le x\le 2$, la retta parallela all'asse $y$ per esso interseca le due curve in $R=(x,f(x))$ ed $S=(x,g(x))$; la lunghezza del segmento è

$$z(x)=g(x)-f(x)=x^3-4x^2+4x, \qquad 0\le x\le 2.$$

Cerchiamo il massimo:

$$z'(x)=3x^2-8x+4=(3x-2)(x-2)\ge 0 \iff x\le \frac{2}{3}\ \text{ oppure }\ x\ge 2.$$

Nell'intervallo $[0,2]$, $z$ è crescente per $0\le x<\dfrac{2}{3}$ e decrescente per $\dfrac{2}{3}<x<2$: il massimo si ha per $x=\dfrac{2}{3}$, con

$$z\!\left(\frac{2}{3}\right)=\frac{32}{27}.$$

Il punto cercato è dunque

$$P=\left(\frac{2}{3},\ \frac{8}{9}\right),$$

sulla retta $y=\dfrac{4}{3}x$, con $R=\left(\dfrac{2}{3},\dfrac{56}{81}\right)$ e $S=\left(\dfrac{2}{3},\dfrac{152}{81}\right)$.

## c) Tangenti parallele

Imponiamo $f'(x)=g'(x)$:

$$-2x^2+4x=x^2-4x+4 \;\Rightarrow\; 3x^2-8x+4=0 \;\Rightarrow\; x=\frac{2}{3}\ \text{ oppure }\ x=2.$$

Per $x=2$ si ritrova il punto $A$ (con pendenza comune nulla); per $x=\dfrac{2}{3}$ si ritrovano i punti $R$ ed $S$, in cui entrambe le curve hanno tangenti di pendenza comune

$$f'\!\left(\frac{2}{3}\right)=g'\!\left(\frac{2}{3}\right)=\frac{16}{9}.$$

## d) Area della regione delimitata dalle due curve

La regione finita è compresa fra le due cubiche per $0\le x\le 2$; poiché in tale intervallo $g(x)\ge f(x)$, l'area è

$$\mathcal{A}=\int_0^2\bigl[g(x)-f(x)\bigr]\,dx=\int_0^2\bigl(x^3-4x^2+4x\bigr)\,dx.$$

Calcolando la primitiva:

$$\mathcal{A}=\left[\frac{x^4}{4}-\frac{4x^3}{3}+2x^2\right]_0^2=4-\frac{32}{3}+8=\frac{4}{3}.$$

L'area richiesta è quindi $\mathcal{A}=\dfrac{4}{3}$ (unità di superficie).

*Fonte:* [📄 PDF p.66](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
