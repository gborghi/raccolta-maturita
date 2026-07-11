

**Problema:** [[Problemi/prob_2007_pni_2007_sessione_suppletiva_problema1_105_1|2007 PNI Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_pni_2007_sessione_suppletiva_problema1_105|2007 PNI Suppletiva — Problema 1]]

Si consideri la funzione integrale
$$f(x) = \int_0^x \left(e^{3t}+2e^{2t}-3e^t\right)\,dt.$$

Si studi la funzione e se ne tracci il grafico $C$; si scriva l'equazione della normale a $C$ nel punto di ascissa $\ln 2$; si calcoli l'area della regione delimitata da $C$, dall'asse delle ascisse e dalla retta $x=\ln 3$; infine, usando $\ln 2 = \int_1^2 \frac{1}{x}\,dx$, se ne calcoli un valore approssimato con un metodo di integrazione numerica.

## a) Studio della funzione e grafico

Calcoliamo l'integrale che definisce $f$:
$$f(x) = \left[\frac{1}{3}e^{3t}+e^{2t}-3e^t\right]_0^x = \frac{1}{3}e^{3x}+e^{2x}-3e^x-\left(\frac{1}{3}+1-3\right),$$
da cui
$$f(x) = \frac{1}{3}e^{3x}+e^{2x}-3e^x+\frac{5}{3}.$$

Ponendo $u=e^x$ si ha $\frac{1}{3}(u^3+3u^2-9u+5)$; poiché $u=1$ annulla il polinomio (regola di Ruffini), esso si fattorizza come $(u-1)^2(u+5)$, quindi
$$f(x) = \frac{1}{3}\left(e^x+5\right)\left(e^x-1\right)^2.$$

**Dominio:** tutto $\mathbb{R}$.

**Simmetrie:** $f(-x)$ è diversa sia da $f(x)$ sia da $-f(x)$; la funzione non è né pari né dispari.

**Intersezioni con gli assi e segno:** essendo $e^x+5>0$ e $\left(e^x-1\right)^2\ge 0$, risulta $f(x)\ge 0$ su tutto il dominio; l'unico zero si ha per $e^x-1=0$, cioè $x=0$, dove $f(0)=0$. Il grafico passa dunque per l'origine.

**Limiti e asintoti:**
$$\lim_{x\to -\infty} f(x) = \frac{5}{3}, \qquad \lim_{x\to +\infty} f(x) = +\infty.$$
La retta $y=\frac{5}{3}$ è asintoto orizzontale per $x\to -\infty$. Non vi è asintoto obliquo, poiché per $x\to+\infty$ la funzione è un infinito di ordine superiore al primo.

**Derivata prima:** per il teorema fondamentale del calcolo integrale,
$$f'(x) = e^{3x}+2e^{2x}-3e^x = e^x\left(e^{2x}+2e^x-3\right) = e^x\left(e^x+3\right)\left(e^x-1\right).$$
Poiché $e^x\left(e^x+3\right)>0$, si ha $f'(x)\ge 0 \iff e^x-1\ge 0 \iff x\ge 0$. La funzione è quindi decrescente per $x<0$ e crescente per $x>0$: in $x=0$ vi è il punto di minimo relativo e assoluto, con $f(0)=0$.

**Derivata seconda:**
$$f''(x) = 3e^{3x}+4e^{2x}-3e^x = e^x\left(3e^{2x}+4e^x-3\right).$$
Il segno dipende da $3e^{2x}+4e^x-3$. Ponendo $u=e^x$, l'equazione $3u^2+4u-3=0$ ha radici $u=\frac{-2\pm\sqrt{13}}{3}$; è accettabile solo quella positiva, $u=\frac{-2+\sqrt{13}}{3}\cong 0{,}54$. Dunque
$$f''(x)\ge 0 \iff e^x\ge \frac{-2+\sqrt{13}}{3} \iff x\ge \ln\!\left(\frac{-2+\sqrt{13}}{3}\right)\cong -0{,}63.$$
Il grafico volge la concavità verso l'alto per $x>\ln\!\left(\frac{-2+\sqrt{13}}{3}\right)$ e verso il basso per valori minori; in $x=\ln\!\left(\frac{-2+\sqrt{13}}{3}\right)$ vi è un flesso, di ordinata $y\cong 0{,}4$.

Il grafico di $C$ è pertanto il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="271.109" height="248.2" viewBox="-72 -72 203.332 186.15"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 100.18h174.868"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M100.918 97.78c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="55.398" y="100.181" stroke="none" font-family="cmmi10" font-size="10" transform="translate(51.333 2.153)">x</text><path fill="none" d="M55.398 112.13V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M52.998-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="55.398" y="100.181" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -164.812)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 33.79H99.215"/><g fill="#000" stroke="#000"><g stroke="none"><text x="55.398" y="100.181" font-family="cmmi10" font-size="10" transform="translate(47.35 -63.89)">y</text><text x="63.437" y="100.181" font-family="cmr10" font-size="10" transform="translate(47.35 -63.89)">=</text><text x="75.192" y="96.243" font-family="cmr7" font-size="7" transform="translate(47.35 -63.89)">5</text><path d="M122.542 33.59h3.986v.4h-3.986z"/><text x="75.192" y="103.629" font-family="cmr7" font-size="7" transform="translate(47.35 -63.89)">3</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.103 39.63 1.915.29 1.916.3 1.916.311 1.916.32 1.916.344 1.916.353 1.915.375 1.916.387 1.916.408 1.916.429 1.916.453 1.916.459 1.915.493 1.916.513 1.916.538 1.916.552 1.916.582 1.916.615 1.915.633 1.916.666 1.916.704 1.916.722 1.916.758 1.915.786 1.916.823 1.916.848 1.916.898 1.916.928 1.916.961 1.915 1.003 1.916 1.05 1.916 1.083 1.916 1.12 1.916 1.166 1.916 1.208 1.915 1.253 1.916 1.297 1.916 1.328 1.916 1.371 1.916 1.425 1.916 1.46 1.915 1.497 1.916 1.537 1.916 1.567 1.916 1.594 1.916 1.635 1.916 1.65 1.915 1.668 1.916 1.681 1.916 1.686 1.916 1.682 1.916 1.66 1.916 1.63 1.915 1.587 1.916 1.52 1.916 1.448 1.916 1.326 1.916 1.208 1.915 1.03 1.916.833 1.916.586 1.916.305 1.916-.067 1.916-.457 1.915-.943 1.916-1.507 1.916-2.167 1.916-2.937 1.916-3.828 1.916-4.87 1.915-6.074 1.916-7.457 1.916-9.061 1.916-10.903 1.916-13.034L81.5 21.39l1.915-18.292 1.916-21.524 1.916-25.236"/><path stroke="none" d="M57.078 100.18a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="55.398" y="100.181" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 10.366)">O</text><path stroke="none" d="M31.982 84.247a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="55.398" y="100.181" stroke="none" font-family="cmr10" font-size="10" transform="translate(-51.517 -19.466)">°esso</text></g></svg>
</figure>

## b) Normale a $C$ nel punto di ascissa $\ln 2$

Per $x=\ln 2$ si ha $e^x=2$, quindi
$$f(\ln 2) = \frac{1}{3}(2+5)(2-1)^2 = \frac{7}{3}, \qquad f'(\ln 2) = 2\cdot(2+3)\cdot(2-1) = 10.$$
La tangente ha coefficiente angolare $10$, dunque la normale ha coefficiente angolare $-\frac{1}{10}$. La sua equazione è
$$y-\frac{7}{3} = -\frac{1}{10}\left(x-\ln 2\right),$$
cioè
$$y = -\frac{1}{10}x + \frac{7}{3} + \frac{\ln 2}{10}.$$

## c) Area delimitata da $C$, asse $x$ e retta $x=\ln 3$

Poiché $f(x)\ge 0$ e la curva tocca l'asse solo in $x=0$, l'area richiesta è
$$\text{Area} = \int_0^{\ln 3} f(x)\,dx = \int_0^{\ln 3}\left(\frac{1}{3}e^{3x}+e^{2x}-3e^x+\frac{5}{3}\right)dx = \left[\frac{1}{9}e^{3x}+\frac{1}{2}e^{2x}-3e^x+\frac{5}{3}x\right]_0^{\ln 3}.$$
Per $x=\ln 3$ si ha $e^x=3$, $e^{2x}=9$, $e^{3x}=27$, quindi il valore in $\ln 3$ è
$$\frac{27}{9}+\frac{9}{2}-9+\frac{5}{3}\ln 3 = -\frac{3}{2}+\frac{5}{3}\ln 3,$$
mentre in $x=0$ vale $\frac{1}{9}+\frac{1}{2}-3 = -\frac{43}{18}$. Sottraendo:
$$\text{Area} = -\frac{3}{2}+\frac{5}{3}\ln 3 + \frac{43}{18} = \frac{8}{9}+\frac{5}{3}\ln 3 \;\cong\; 2{,}72\ \text{u}^2.$$

## d) Valore approssimato di $\ln 2$ con la formula dei trapezi

Sia $g(x)=\dfrac{1}{x}$ e $\ln 2 = \displaystyle\int_1^2 \frac{1}{x}\,dx$. Dividiamo $[1,2]$ in $n=5$ parti uguali di ampiezza $h=\dfrac{2-1}{5}=0{,}2$, con nodi
$$x_0=1,\; x_1=1{,}2,\; x_2=1{,}4,\; x_3=1{,}6,\; x_4=1{,}8,\; x_5=2.$$
La formula dei trapezi dà
$$\int_1^2 g(x)\,dx \cong h\left[\frac{g(x_0)+g(x_5)}{2}+g(x_1)+g(x_2)+g(x_3)+g(x_4)\right].$$
Con $g(1)=1$, $g(1{,}2)\cong 0{,}833$, $g(1{,}4)\cong 0{,}714$, $g(1{,}6)=0{,}625$, $g(1{,}8)\cong 0{,}556$, $g(2)=0{,}5$:
$$\ln 2 \cong 0{,}2\left[\frac{1+0{,}5}{2}+0{,}833+0{,}714+0{,}625+0{,}556\right] \cong 0{,}696.$$
Il risultato è in ottimo accordo con il valore esatto $\ln 2 = 0{,}693\ldots$

*Fonte:* [📄 PDF p.105](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
