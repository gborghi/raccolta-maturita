

**Problema:** [[Problemi/prob_2009_pni_2009_problema2_150_1|2009 PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/2009_pni_2009_problema2_150|2009 PNI — Problema 2]]

Si consideri la funzione $f$ definita su $[0,+\infty)$ da

$$f(x)=\begin{cases}1 & \text{se } x=0,\\[4pt] \dfrac{1}{2}x^{2}\bigl(3-2\ln x\bigr)+1 & \text{se } x>0,\end{cases}$$

e sia $C$ la sua curva rappresentativa in un riferimento ortogonale monometrico $Oxy$. Si chiede di: **a)** studiare continuità e derivabilità di $f$ in $0$; **b)** dimostrare che $f(x)=0$ ha un'unica radice reale e calcolarne un valore approssimato a due decimali; **c)** disegnare $C$ e trovare la tangente $r$ a $C$ nel punto di ascissa $x=1$; **d)** determinare, in funzione dell'intero $n\ge 1$, l'area $A_n$ della regione delimitata da $C$, dalla tangente $r$ e dalle rette $x=\frac{1}{n}$ e $x=1$; **e)** calcolare $\lim_{n\to+\infty}A_n$ e interpretarlo.

## a) Continuità e derivabilità in $x=0$

**Continuità.** Ricordando il limite notevole $\lim_{x\to 0^{+}}x^{2}\ln x=0$,

$$\lim_{x\to 0^{+}}f(x)=\lim_{x\to 0^{+}}\left[\frac{1}{2}\bigl(3x^{2}-2x^{2}\ln x\bigr)+1\right]=0+1=1=f(0),$$

quindi $f$ è continua in $0$.

**Derivabilità.** Per $x>0$,

$$f'(x)=\frac{1}{2}\Bigl[2x\,(3-2\ln x)+x^{2}\!\left(-\frac{2}{x}\right)\Bigr]=x(3-2\ln x)-x=2x\,(1-\ln x).$$

Calcolando il rapporto incrementale nell'origine,

$$f'_{+}(0)=\lim_{h\to 0^{+}}\frac{f(h)-f(0)}{h}=\lim_{h\to 0^{+}}\frac{\frac{1}{2}h^{2}(3-2\ln h)}{h}=\lim_{h\to 0^{+}}\frac{1}{2}h\,(3-2\ln h)=0,$$

e coerentemente $\lim_{x\to 0^{+}}f'(x)=\lim_{x\to 0^{+}}2x(1-\ln x)=0$. Dunque $f$ è **derivabile in $0$**, con $f'(0)=0$ (tangente orizzontale nel punto $(0,1)$).

## b) Unica radice di $f(x)=0$

Per $x>0$ si ha $f'(x)=2x(1-\ln x)$, che è positiva per $0<x<e$ e negativa per $x>e$. Perciò $f$ **cresce** su $(0,e]$ e **decresce** su $[e,+\infty)$, con massimo assoluto in $x=e$:

$$f(e)=\frac{1}{2}e^{2}(3-2)+1=\frac{1}{2}e^{2}+1\approx 4{,}69>0.$$

Poiché $f(0)=1>0$ e $f$ cresce fino a un massimo positivo, si ha $f>0$ su tutto $(0,e]$. Su $[e,+\infty)$ la funzione decresce da $f(e)>0$ e tende a $-\infty$ (il fattore $3-2\ln x\to-\infty$), quindi si annulla **esattamente una volta**: la radice $x^{*}$ è unica.

Con qualche valutazione:

$$f(4)\approx 2{,}82>0,\qquad f(5)\approx -1{,}74<0\ \Rightarrow\ x^{*}\in(4,5),$$
$$f(4{,}6)\approx 0{,}45>0,\qquad f(4{,}7)\approx -0{,}05<0,$$
$$f(4{,}69)\approx 0{,}001>0,\qquad f(4{,}70)\approx -0{,}05<0.$$

Quindi con due cifre decimali esatte

$$\boxed{\,x^{*}\approx 4{,}69\,}$$

## c) Grafico e retta tangente in $x=1$

Nel punto di ascissa $x=1$:

$$f(1)=\frac{1}{2}\cdot 1\cdot(3-0)+1=\frac{5}{2},\qquad f'(1)=2\cdot 1\cdot(1-0)=2.$$

La retta tangente è quindi

$$r:\quad y-\frac{5}{2}=2\,(x-1)\ \Longrightarrow\ \boxed{\,y=2x+\frac{1}{2}\,}$$

Per la concavità, $f''(x)=2(1-\ln x)-2=-2\ln x$: la curva è **convessa** su $(0,1)$ e **concava** su $(1,+\infty)$, con un **flesso in $\left(1,\frac{5}{2}\right)$**, punto in cui $r$ è appunto tangente. Riassumendo, $C$ parte da $(0,1)$ con tangente orizzontale, cresce (convessa fino al flesso, poi concava) fino al massimo $\left(e,\tfrac{1}{2}e^{2}+1\right)$, quindi decresce attraversando l'asse $x$ in $x^{*}\approx 4{,}69$ e divergendo a $-\infty$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="244.095" height="288.626" viewBox="-72 -72 183.071 216.469"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 96.198H97.82"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M95.94 93.798c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.12" y="96.198" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(161.873 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-60.12 144V-58.755"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-62.52-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.12" y="96.198" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -160.83)">y</text></g><g fill="#ccc" stroke="#ccc"><path fill="none" d="M-30.245 98.588v-4.78"/><g fill="#000" stroke="#000"><text x="-60.12" y="96.198" stroke="none" font-family="cmr8" font-size="8" transform="translate(27.75 8.298)">1</text></g></g><g fill="#ccc" stroke="#ccc"><path fill="none" d="M-.37 98.588v-4.78"/><g fill="#000" stroke="#000"><text x="-60.12" y="96.198" stroke="none" font-family="cmr8" font-size="8" transform="translate(57.626 8.298)">2</text></g></g><g fill="#ccc" stroke="#ccc"><path fill="none" d="M29.506 98.588v-4.78"/><g fill="#000" stroke="#000"><text x="-60.12" y="96.198" stroke="none" font-family="cmr8" font-size="8" transform="translate(87.501 8.298)">3</text></g></g><g fill="#ccc" stroke="#ccc"><path fill="none" d="M59.382 98.588v-4.78"/><g fill="#000" stroke="#000"><text x="-60.12" y="96.198" stroke="none" font-family="cmr8" font-size="8" transform="translate(117.377 8.298)">4</text></g></g><g fill="#ccc" stroke="#ccc"><path fill="none" d="M89.257 98.588v-4.78"/><g fill="#000" stroke="#000"><text x="-60.12" y="96.198" stroke="none" font-family="cmr8" font-size="8" transform="translate(147.252 8.298)">5</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-58.626 65.99 1.222-.626 1.223-.86 1.223-1.08 1.222-1.25 1.223-1.405 1.223-1.54 1.222-1.662 1.223-1.773 1.222-1.869 1.223-1.955 1.223-2.035 1.222-2.103 1.223-2.165 1.223-2.22 1.222-2.267 1.223-2.307 1.222-2.344 1.223-2.372 1.223-2.397 1.222-2.415 1.223-2.43 1.223-2.439 1.222-2.448 1.223-2.44 1.222-2.443 1.223-2.436 1.223-2.422 1.222-2.41 1.223-2.39 1.223-2.373 1.222-2.345 1.223-2.318 1.222-2.289 1.223-2.256 1.223-2.215 1.222-2.179 1.223-2.138 1.223-2.089 1.222-2.045 1.223-2 1.222-1.93 1.223-1.893 1.223-1.839 1.222-1.762 1.223-1.718 1.223-1.649 1.222-1.563L.06-30.62l1.222-1.443 1.223-1.367 1.223-1.3 1.222-1.216 1.223-1.14 1.223-1.062 1.222-.982 1.223-.893 1.223-.806 1.222-.73 1.223-.634 1.222-.543 1.223-.455 1.223-.36 1.222-.264 1.223-.172 1.223-.068 1.222.03 1.223.128 1.222.235 1.223.337 1.223.438 1.222.547 1.223.675 1.223.756 1.222.884 1.223.99 1.222 1.092 1.223 1.244 1.223 1.33 1.222 1.441 1.223 1.59 1.223 1.695 1.222 1.804 1.223 1.946 1.222 2.081 1.223 2.157 1.223 2.338 1.222 2.423 1.223 2.559 1.223 2.69 1.222 2.858 1.223 2.926 1.222 3.095 1.223 3.26 1.223 3.309 1.222 3.55 1.223 3.568 1.223 3.864L61.19 17.7l1.223 4.053 1.222 4.199 1.223 4.336 1.223 4.48 1.222 4.62 1.223 4.78 1.223 4.918 1.222 5.063 1.223 5.208 1.222 5.354 1.223 5.507 1.223 5.681 1.222 5.807 1.223 5.972 1.223 6.106 1.222 6.28 1.223 6.426 1.222 6.6 1.223 6.735 1.223 6.92 1.222 7.043"/><path fill="none" stroke="red" stroke-width=".8" d="M-64.601 90.223 10.088-59.155"/><path stroke="none" d="M-58.44 66.323a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="-60.12" y="96.198" stroke="none" font-family="cmr8" font-size="8" transform="translate(-7.783 -27.298)">1</text><path stroke="none" d="M-28.565 21.51a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><g stroke="none"><text x="-60.12" y="96.198" font-family="cmr8" font-size="8" transform="translate(5.637 -81.359)">(1</text><text x="-52.564" y="96.198" font-family="cmmi8" font-size="8" transform="translate(5.637 -81.359)">;</text><text x="-47.587" y="92.928" font-family="cmr6" font-size="6" transform="translate(5.637 -81.359)">5</text><path d="M-41.95 12.639h3.667v.4h-3.667z"/><text x="-47.587" y="99.336" font-family="cmr6" font-size="6" transform="translate(5.637 -81.359)">2</text><text x="-42.72" y="96.198" font-family="cmr8" font-size="8" transform="translate(5.637 -81.359)">)</text></g><path stroke="none" d="M81.676 96.198a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><g stroke="none"><text x="-60.12" y="96.198" font-family="cmmi8" font-size="8" transform="translate(143.649 9.148)">x</text><text x="-55.335" y="93.375" font-family="cmsy6" font-size="6" transform="translate(143.649 9.148)">¤</text></g><g fill="#00f" stroke="#00f"><text x="-60.12" y="96.198" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(112.583 -86.21)">C</text></g><g fill="red" stroke="red"><text x="-60.12" y="96.198" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(58.85 -135.275)">r</text></g></g></svg>
</figure>

## d) Area $A_n$

Poniamo $\varphi(x)=f(x)-\left(2x+\tfrac{1}{2}\right)=\dfrac{1}{2}x^{2}(3-2\ln x)-2x+\dfrac{1}{2}=\dfrac{3}{2}x^{2}-x^{2}\ln x-2x+\dfrac{1}{2}$.

Si ha $\varphi(1)=0$ e $\varphi'(x)=2x(1-\ln x)-2$; poiché $\varphi''(x)=-2\ln x>0$ su $(0,1)$, $\varphi'$ è crescente e quindi $\varphi'(x)<\varphi'(1)=0$: dunque $\varphi$ è decrescente su $(0,1)$ e, essendo $\varphi(1)=0$, risulta $\varphi(x)>0$ per $0<x<1$. La curva $C$ sta perciò **sopra** la tangente $r$ su tutto $\left[\frac1n,1\right]$, e

$$A_n=\int_{1/n}^{1}\varphi(x)\,dx.$$

Usando $\displaystyle\int x^{2}\ln x\,dx=\frac{x^{3}}{3}\ln x-\frac{x^{3}}{9}$, una primitiva di $\varphi$ è

$$F(x)=\frac{11}{18}x^{3}-\frac{x^{3}}{3}\ln x-x^{2}+\frac{1}{2}x.$$

Poiché $F(1)=\dfrac{11}{18}-1+\dfrac{1}{2}=\dfrac{1}{9}$ e $F\!\left(\tfrac1n\right)=\dfrac{11}{18n^{3}}+\dfrac{\ln n}{3n^{3}}-\dfrac{1}{n^{2}}+\dfrac{1}{2n}$, si ottiene

$$\boxed{\,A_n=F(1)-F\!\left(\frac1n\right)=\frac{1}{9}-\frac{1}{2n}+\frac{1}{n^{2}}-\frac{11}{18n^{3}}-\frac{\ln n}{3n^{3}}\,}$$

(verifica: per $n=1$ si ha $A_1=0$, come deve essere).

## e) Limite di $A_n$ e interpretazione

Tutti i termini in $\dfrac1n,\dfrac1{n^{2}},\dfrac{1}{n^{3}}$ e $\dfrac{\ln n}{n^{3}}$ tendono a $0$, quindi

$$\lim_{n\to+\infty}A_n=\frac{1}{9}.$$

**Interpretazione.** Al crescere di $n$ l'estremo sinistro $x=\dfrac1n$ tende a $0$, perciò la regione **non si contrae** ma tende a occupare tutta la striscia tra $C$ e la tangente $r$ su $(0,1]$. Nonostante si estenda fino a ridosso di $x=0$, tale area (integrale improprio convergente, grazie a $x^{2}\ln x\to 0$) resta **finita** e vale esattamente $\dfrac{1}{9}$.

*Fonte:* [📄 PDF p.150](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
