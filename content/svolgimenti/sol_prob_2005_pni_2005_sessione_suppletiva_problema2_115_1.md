

**Problema:** [[Problemi/prob_2005_pni_2005_sessione_suppletiva_problema2_115_1|2005 PNI Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_pni_2005_sessione_suppletiva_problema2_115|2005 PNI Suppletiva — Problema 2]]

È assegnata la funzione $f_{a}(x)=\dfrac{a}{1+x^{2}}$, con $a\in\mathbb{R}\setminus\{0\}$.

## a) Limitatezza

Una funzione $y=f(x)$ si dice **limitata** se esistono due numeri reali $A$ e $B$ tali che $A\le f(x)\le B$ per ogni $x$ del dominio.

La funzione è definita su tutto $\mathbb{R}$ e, poiché $1+x^{2}\ge 1>0$, per $a>0$ si ha
$$
0<f_{a}(x)\le a,
$$
con estremo superiore $\sup f_{a}=a$ (raggiunto in $x=0$) ed estremo inferiore $\inf f_{a}=0$ (valore limite per $|x|\to\infty$). Per $a<0$ vale analogamente $a\le f_{a}(x)<0$. In ogni caso $f_{a}$ è limitata.

## b) Circonferenza $\gamma$ di diametro $OA$

Per $a>0$ la funzione è pari, positiva e assume il massimo dove $1+x^{2}$ è minimo, cioè in $x=0$: il punto di massimo del grafico $G$ è $A=(0,a)$.

La circonferenza $\gamma$ di diametro $OA$ ha centro nel punto medio di $OA$, cioè $\left(0,\dfrac{a}{2}\right)$, e raggio $\dfrac{a}{2}$:
$$
\gamma:\quad x^{2}+\left(y-\frac{a}{2}\right)^{2}=\frac{a^{2}}{4}\;\Longleftrightarrow\;x^{2}+y^{2}-ay=0.
$$

## c) Intersezioni $\gamma\cap G$

Sostituendo $y=\dfrac{a}{1+x^{2}}$ nell'equazione $x^{2}+y^{2}-ay=0$:
$$
x^{2}+\frac{a^{2}}{(1+x^{2})^{2}}-\frac{a^{2}}{1+x^{2}}=0\;\Longleftrightarrow\;x^{2}(1+x^{2})^{2}+a^{2}-a^{2}(1+x^{2})=0,
$$
cioè $x^{2}(1+x^{2})^{2}-a^{2}x^{2}=0$ e, raccogliendo $x^{2}$,
$$
x^{2}\left[(1+x^{2})^{2}-a^{2}\right]=0.
$$
Le soluzioni sono $x=0$ (sempre presente) oppure $(1+x^{2})^{2}=a^{2}$, ossia $1+x^{2}=a$ (essendo $a>0$), da cui $x^{2}=a-1$. Distinguiamo:

- $0<a\le 1$: solo $x=0$, un'unica intersezione $A=(0,a)$ (le due curve sono tangenti);
- $a>1$: tre intersezioni, $A=(0,a)$ e $P_{\pm}=\left(\pm\sqrt{a-1},\,1\right)$, poiché $y=\dfrac{a}{1+(a-1)}=\dfrac{a}{a}=1$.

## d) Triangolo equilatero

Per $a>1$ i tre punti $A$, $P_{+}$, $P_{-}$ formano un triangolo isoscele, simmetrico rispetto all'asse $y$. È equilatero se e solo se tutti i lati sono uguali. Poiché
$$
|AP_{\pm}|=\sqrt{(a-1)+(a-1)^{2}}=\sqrt{(a-1)\,a},\qquad |P_{+}P_{-}|=2\sqrt{a-1},
$$
imponendo $|AP_{+}|=|P_{+}P_{-}|$ si ottiene
$$
(a-1)\,a=4(a-1)\;\Longrightarrow\;a=4\quad(a>1).
$$
Dunque $\bar a=4$. Verifica: $A=(0,4)$, $P_{\pm}=(\pm\sqrt{3},1)$, con $|AP_{+}|=\sqrt{3+9}=\sqrt{12}=2\sqrt{3}=|P_{+}P_{-}|$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="290.188" height="222.615" viewBox="-72 -72 217.641 166.961"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 77.42h204.46"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M130.51 75.02c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="30.36" y="77.419" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.963 2.153)">x</text><path fill="none" d="M30.36 94.491V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M27.96-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="30.36" y="77.419" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -142.05)">y</text><path fill="none" d="M-54.998 78.842v-2.846"/><g stroke="none" font-size="8"><text x="30.36" y="77.419" font-family="cmsy8" transform="translate(-90.789 9.266)">¡</text><text x="36.971" y="77.419" font-family="cmr8" transform="translate(-90.789 9.266)">3</text></g><path fill="none" d="M-26.545 78.842v-2.846"/><g stroke="none" font-size="8"><text x="30.36" y="77.419" font-family="cmsy8" transform="translate(-62.336 9.266)">¡</text><text x="36.971" y="77.419" font-family="cmr8" transform="translate(-62.336 9.266)">2</text></g><path fill="none" d="M1.907 78.842v-2.846"/><g stroke="none" font-size="8"><text x="30.36" y="77.419" font-family="cmsy8" transform="translate(-33.883 9.266)">¡</text><text x="36.971" y="77.419" font-family="cmr8" transform="translate(-33.883 9.266)">1</text></g><path fill="none" d="M58.813 78.842v-2.846"/><text x="30.36" y="77.419" stroke="none" font-family="cmr8" font-size="8" transform="translate(26.328 9.266)">1</text><path fill="none" d="M87.266 78.842v-2.846"/><text x="30.36" y="77.419" stroke="none" font-family="cmr8" font-size="8" transform="translate(54.78 9.266)">2</text><path fill="none" d="M115.718 78.842v-2.846"/><text x="30.36" y="77.419" stroke="none" font-family="cmr8" font-size="8" transform="translate(83.233 9.266)">3</text><path fill="none" d="M28.937 48.966h2.846"/><text x="30.36" y="77.419" stroke="none" font-family="cmr8" font-size="8" transform="translate(-8.36 -25.875)">1</text><path fill="none" d="M28.937 20.514h2.846"/><text x="30.36" y="77.419" stroke="none" font-family="cmr8" font-size="8" transform="translate(-8.36 -54.328)">2</text><path fill="none" d="M28.937-7.94h2.846"/><text x="30.36" y="77.419" stroke="none" font-family="cmr8" font-size="8" transform="translate(-8.36 -82.78)">3</text><path fill="none" d="M28.937-36.392h2.846"/><text x="30.36" y="77.419" stroke="none" font-family="cmr8" font-size="8" transform="translate(-8.36 -111.233)">4</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-66.38 68.358 2.45-.437 2.449-.47 2.45-.501 2.448-.54 2.45-.583 2.448-.626 2.45-.677 2.448-.732 2.45-.793 2.449-.86 2.449-.937 2.449-1.019 2.449-1.111 2.449-1.215 2.449-1.33 2.449-1.46 2.449-1.604 2.45-1.764 2.448-1.945 2.45-2.15 2.448-2.373 2.45-2.627 2.448-2.906 2.45-3.217 2.449-3.557 2.449-3.929 2.449-4.322 2.449-4.737 2.449-5.156 2.449-5.562 2.449-5.924 2.449-6.203 2.449-6.347 2.45-6.297 2.448-5.99 2.45-5.38 2.448-4.43 2.45-3.17 2.448-1.653h2.45l2.449 1.65 2.449 3.17 2.449 4.43 2.449 5.381 2.449 5.986 2.449 6.297 2.449 6.345 2.449 6.206 2.45 5.92 2.448 5.566 2.45 5.158 2.448 4.738 2.45 4.322 2.448 3.928 2.45 3.557 2.449 3.218 2.449 2.906 2.449 2.627 2.449 2.374 2.449 2.149 2.449 1.945 2.449 1.765 2.449 1.604 2.449 1.46 2.45 1.329 2.448 1.216 2.45 1.111 2.448 1.02 2.45.935 2.448.86 2.45.794 2.449.732 2.449.677 2.449.627 2.449.582 2.449.54 2.449.503 2.449.468 2.449.437"/><path fill="none" stroke="#b30000" stroke-width=".8" d="M87.266 20.514c0-31.429-25.478-56.906-56.906-56.906s-56.905 25.477-56.905 56.906S-1.068 77.419 30.36 77.419s56.906-25.477 56.906-56.905Zm-56.906 0"/><path stroke="none" d="M32.36-36.392a2 2 0 1 0-4 0 2 2 0 0 0 4 0M81.64 48.966a2 2 0 1 0-4 0 2 2 0 0 0 4 0M-16.92 48.966a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none" font-size="10"><text x="30.36" y="77.419" font-family="cmmi10" transform="translate(3.533 -119.844)">A</text><text x="40.638" y="77.419" font-family="cmr10" transform="translate(3.533 -119.844)">=</text><text x="51.193" y="77.419" font-family="cmr10" transform="translate(3.533 -119.844)">(0</text><text x="60.082" y="77.419" font-family="cmmi10" transform="translate(3.533 -119.844)">;</text><text x="64.527" y="77.419" font-family="cmr10" transform="translate(3.533 -119.844)">4)</text></g><g stroke="none"><text x="30.36" y="77.419" font-family="cmmi10" font-size="10" transform="translate(57.593 -26.203)">P</text><text x="36.78" y="78.919" font-family="cmr7" font-size="7" transform="translate(57.593 -26.203)">+</text></g><g stroke="none"><text x="30.36" y="77.419" font-family="cmmi10" font-size="10" transform="translate(-70.763 -26.203)">P</text><text x="36.78" y="78.919" font-family="cmsy7" font-size="7" transform="translate(-70.763 -26.203)">¡</text></g><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="30.36" y="77.419" font-family="cmmi10" font-size="10" transform="translate(72.131 -28.798)">f</text><text x="35.256" y="78.919" font-family="cmr7" font-size="7" transform="translate(72.131 -28.798)">4</text></g></g></g></svg>
</figure>

## e) Densità di probabilità

$f_{a'}$ è una densità di probabilità su $\mathbb{R}$ se è non negativa (vero per $a'>0$) e se $\displaystyle\int_{-\infty}^{+\infty}f_{a'}(x)\,dx=1$. Calcoliamo:
$$
\int_{-\infty}^{+\infty}\frac{a'}{1+x^{2}}\,dx=a'\left[\arctan x\right]_{-\infty}^{+\infty}=a'\cdot\pi.
$$
Imponendo $a'\pi=1$ si ottiene $a'=\dfrac{1}{\pi}$: si tratta della **distribuzione di Cauchy** standard. La funzione di distribuzione è
$$
F(x)=\int_{-\infty}^{x}\frac{1}{\pi(1+t^{2})}\,dt=\frac{1}{\pi}\left(\arctan x-\left(-\frac{\pi}{2}\right)\right)=\frac{\arctan x}{\pi}+\frac{1}{2}.
$$

*Fonte:* [📄 PDF p.115](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
