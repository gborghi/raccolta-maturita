

**Problema:** [[Problemi/prob_2009_sessione_ordinaria_2009_prova_146_1|2009 Sessione Ordinaria PNI — Prova — Problema 1]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Sia $f$ la funzione definita da
$$f(x)=\left(1+x+\frac{x^2}{2!}+\dots+\frac{x^n}{n!}\right)e^{-x},$$
con $n$ intero positivo e $x\in\mathbb{R}$.

## a) Calcolo della derivata

Poniamo $P_n(x)=1+x+\dfrac{x^2}{2!}+\dots+\dfrac{x^n}{n!}$, così che $f(x)=P_n(x)\,e^{-x}$. Derivando come prodotto:
$$f'(x)=P_n'(x)\,e^{-x}-P_n(x)\,e^{-x}=\big(P_n'(x)-P_n(x)\big)e^{-x}.$$
La derivata del polinomio si ottiene abbassando di uno ciascun termine:
$$P_n'(x)=1+x+\frac{x^2}{2!}+\dots+\frac{x^{n-1}}{(n-1)!}=P_{n-1}(x).$$
Poiché $P_n(x)$ differisce da $P_{n-1}(x)$ per il solo termine $\dfrac{x^n}{n!}$, si ha $P_n'(x)-P_n(x)=P_{n-1}(x)-P_n(x)=-\dfrac{x^n}{n!}$. Dunque
$$f'(x)=-\frac{x^n}{n!}\,e^{-x}.$$

## b) Massimi e minimi; il caso $n$ dispari

Poiché $e^{-x}>0$ e $n!>0$, il segno di $f'(x)$ è opposto a quello di $x^n$.

**Caso $n$ pari.** Allora $x^n\ge 0$ per ogni $x$, quindi $f'(x)\le 0$ ovunque, con $f'(x)=0$ solo in $x=0$. La funzione è perciò strettamente decrescente (in $x=0$ si ha soltanto un flesso a tangente orizzontale, non un estremo). Non esistono quindi né massimi né minimi, relativi o assoluti. Agli estremi:
$$\lim_{x\to-\infty}f(x)=+\infty,\qquad \lim_{x\to+\infty}f(x)=0^+ .$$

**Caso $n$ dispari.** Allora $x^n$ ha lo stesso segno di $x$, dunque
$$f'(x)>0 \text{ per } x<0,\qquad f'(x)<0 \text{ per } x>0,\qquad f'(0)=0.$$
La funzione cresce fino a $x=0$ e poi decresce: $x=0$ è punto di **massimo assoluto** (oltre che relativo). Il valore massimo è
$$f(0)=P_n(0)\cdot e^{0}=1.$$
Ne segue che, quando $n$ è dispari,
$$f(x)\le 1 \qquad \text{per ogni } x\in\mathbb{R},$$
come richiesto. Non vi sono minimi (relativi o assoluti), essendo $\lim_{x\to-\infty}f(x)=-\infty$ e $\lim_{x\to+\infty}f(x)=0^+$.

## c) Studio di $g$ per $n=2$

Per $n=2$ si ottiene
$$g(x)=\left(1+x+\frac{x^2}{2}\right)e^{-x}.$$

**Dominio e segno.** Il dominio è $\mathbb{R}$. Il trinomio $1+x+\dfrac{x^2}{2}$ ha discriminante $1-2<0$, quindi è sempre positivo; poiché $e^{-x}>0$, risulta $g(x)>0$ per ogni $x$.

**Limiti.**
$$\lim_{x\to-\infty}g(x)=+\infty,\qquad \lim_{x\to+\infty}g(x)=0^+,$$
dunque la retta $y=0$ è asintoto orizzontale destro.

**Monotonia.** Dalla parte a) con $n=2$:
$$g'(x)=-\frac{x^2}{2}\,e^{-x}\le 0,$$
nulla solo in $x=0$. La funzione è quindi decrescente su tutto $\mathbb{R}$, con un flesso a tangente orizzontale in $x=0$, dove $g(0)=1$.

**Concavità.** Derivando ancora:
$$g''(x)=e^{-x}\left(\frac{x^2}{2}-x\right)=\frac{x}{2}(x-2)\,e^{-x}.$$
Quindi $g''(x)>0$ per $x<0$ e per $x>2$ (concavità verso l'alto), $g''(x)<0$ per $0<x<2$ (concavità verso il basso). I punti di flesso sono $x=0$ (con $g=1$, a tangente orizzontale) e $x=2$, dove
$$g(2)=\left(1+2+2\right)e^{-2}=\frac{5}{e^2}\approx 0{,}68.$$

Il grafico è riportato di seguito.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="304.985" height="175.034" viewBox="-72 -72 228.739 131.275"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 44.13h215.558"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M141.608 41.73c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-21.993" y="44.13" stroke="none" font-family="cmmi10" font-size="10" transform="translate(169.413 2.153)">x</text><path fill="none" d="M-21.993 53.52V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-24.393-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-21.993" y="44.13" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -108.762)">y</text><path fill="#e1e1ff" stroke="none" d="M-21.993 44.13V12.832l1.06-.004 1.062.001 1.06.002 1.061.007 1.06.01 1.061.015 1.061.02 1.06.028 1.061.033 1.061.042 1.06.045 1.062.056 1.06.063 1.06.068 1.062.077 1.06.09 1.061.095 1.06.102 1.061.112 1.061.12 1.06.126 1.061.139 1.061.143 1.06.153 1.061.155 1.061.167 1.06.175 1.062.185 1.06.189 1.06.19 1.062.204 1.06.213 1.061.207 1.06.222 1.061.222 1.061.233 1.06.242 1.061.239 1.061.245 1.06.241 1.061.255 1.061.257 1.06.268 1.062.258 1.06.266 1.06.276 1.062.272 1.06.279 1.061.27 1.06.287 1.061.278 1.061.281 1.06.28 1.061.28 1.061.294 1.06.276 1.061.288 1.061.298 1.06.277.017 21.186Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.55-9.901 2.18 4.75 2.18 3.917 2.18 3.205 2.18 2.596 2.18 2.083 2.18 1.649 2.18 1.287 2.18.988 2.18.742 2.18.543 2.18.383 2.181.26 2.18.165 2.18.096 2.18.048 2.18.018 2.18.003 2.18-.006 2.18.01 2.18.024 2.181.043 2.18.075 2.18.1 2.18.134 2.18.17 2.18.206 2.18.237 2.18.27 2.181.307 2.18.337 2.18.374 2.18.4 2.18.423 2.18.448 2.18.482 2.18.493 2.18.514 2.181.534 2.18.54 2.18.561 2.18.558 2.18.58 2.18.585 2.18.576 2.18.6 2.181.588 2.18.58 2.18.594 2.18.589 2.18.57 2.18.586 2.18.57 2.18.569 2.18.563 2.181.53 2.18.551 2.18.526 2.18.514 2.18.526 2.18.48 2.18.482 2.18.479 2.181.471 2.18.457 2.18.447 2.18.421 2.18.398 2.18.405 2.18.405 2.18.37 2.18.37 2.181.354 2.18.355 2.18.341 2.18.326 2.18.305 2.18.297 2.18.265 2.18.292 2.181.264 2.18.283 2.18.25 2.18.221 2.18.214 2.18.22 2.18.21 2.18.207 2.18.194 2.181.189"/><path fill="none" stroke-dasharray="3.0,3.0" d="M40.604 44.13V22.952"/><path stroke="none" d="M-20.233 12.832a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><g stroke="none" font-size="10"><text x="-21.993" y="44.13" font-family="cmr10" transform="translate(3.533 -37.331)">(0</text><text x="-13.104" y="44.13" font-family="cmmi10" transform="translate(3.533 -37.331)">;</text><text x="-8.659" y="44.13" font-family="cmr10" transform="translate(3.533 -37.331)">1)</text></g><path stroke="none" d="M42.364 22.952a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><g stroke="none"><text x="-21.993" y="36.03" font-family="cmex10" font-size="10" transform="translate(66.13 -28.211)">¡</text><text x="-17.409" y="44.13" font-family="cmr10" font-size="10" transform="translate(66.13 -28.211)">2</text><text x="-12.409" y="44.13" font-family="cmmi10" font-size="10" transform="translate(66.13 -28.211)">;</text><text x="-4.91" y="40.193" font-family="cmr7" font-size="7" transform="translate(66.13 -28.211)">5</text><path d="M59.364 13.219h7.697v.4h-7.697z"/><text x="-6.765" y="47.578" font-family="cmmi7" font-size="7" transform="translate(66.13 -28.211)">e</text><text x="-2.971" y="45.578" font-family="cmr5" font-size="5" transform="translate(66.13 -28.211)">2</text><text x="2.132" y="36.03" font-family="cmex10" font-size="10" transform="translate(66.13 -28.211)">¢</text></g><text x="-21.993" y="44.13" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><text x="-21.993" y="44.13" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 11.542)">2</text></g></svg>
</figure>

## d) Calcolo dell'integrale

Cerchiamo una primitiva di $g$. Integrando per parti (o termine a termine) si trova
$$\int g(x)\,dx=-\left(\frac{x^2}{2}+2x+3\right)e^{-x}+C,$$
come si verifica derivando: $\dfrac{d}{dx}\left[-\left(\frac{x^2}{2}+2x+3\right)e^{-x}\right]=\left(\frac{x^2}{2}+x+1\right)e^{-x}=g(x)$.

Posto $F(x)=-\left(\dfrac{x^2}{2}+2x+3\right)e^{-x}$:
$$\int_0^2 g(x)\,dx=F(2)-F(0)=-9e^{-2}-(-3)=3-\frac{9}{e^2}\approx 1{,}78.$$

**Interpretazione geometrica.** Poiché $g(x)>0$ su $[0,2]$, il valore trovato rappresenta l'**area** della regione di piano compresa tra il grafico di $g$, l'asse $x$ e le rette $x=0$ e $x=2$ (la parte colorata in figura), pari a $3-\dfrac{9}{e^2}$ unità di superficie.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
