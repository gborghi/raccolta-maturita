

**Problema:** [[Problemi/prob_2007_liceo_scientifico_pni_2007_sessione_straordinaria_problema1_135_1|2007 LS PNI Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2007_liceo_scientifico_pni_2007_sessione_straordinaria_problema1_135|2007 LS PNI Straordinaria — Problema 1]]

Si consideri la funzione $f_a(x)=\dfrac{2x^{2}+ax+3}{(x+1)^{2}}$, dove $a$ è un parametro reale.

## a)

Posto $a=4$, studiamo $f_4(x)=\dfrac{2x^{2}+4x+3}{(x+1)^{2}}$.

Il dominio è $\mathbb{R}\setminus\{-1\}$.

Osserviamo che $2x^{2}+4x+3=2(x+1)^{2}+1$, perciò

$$f_4(x)=\frac{2(x+1)^{2}+1}{(x+1)^{2}}=2+\frac{1}{(x+1)^{2}}.$$

Dunque $f_4(x)>2$ per ogni $x\ne -1$; l'asintoto orizzontale è $y=2$ (per $x\to\pm\infty$) e l'asintoto verticale è $x=-1$, poiché

$$\lim_{x\to -1}\frac{2x^{2}+4x+3}{(x+1)^{2}}=+\infty,\qquad \lim_{x\to\pm\infty}\frac{2x^{2}+4x+3}{(x+1)^{2}}=2.$$

La funzione interseca l'asse $y$ nel punto $(0,\,f_4(0))=(0,3)$; non interseca l'asse $x$, poiché $2x^{2}+4x+3=0$ ha discriminante $\Delta=16-24<0$. La funzione è quindi sempre positiva.

Calcoliamo la derivata prima:

$$f_4'(x)=\frac{-2}{(x+1)^{3}}.$$

Per $x<-1$ si ha $f_4'(x)>0$ (funzione crescente); per $x>-1$ si ha $f_4'(x)<0$ (funzione decrescente). Non ci sono massimi né minimi relativi (la funzione è monotòna su ciascun ramo).

La derivata seconda è

$$f_4''(x)=\frac{6}{(x+1)^{4}}>0,$$

quindi la concavità è sempre rivolta verso l'alto e non ci sono flessi. Il grafico è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="366.31" height="521.771" viewBox="-72 -72 274.733 391.328"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 306.055h245.43"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M171.48 303.655c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="63.649" y="306.055" stroke="none" font-family="cmmi10" font-size="10" transform="translate(113.644 2.153)">x</text><path fill="none" d="M63.649 318.858v-178.85"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M61.249 141.887c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="63.649" y="306.055" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -171.925)">y</text><path fill="none" d="M-64.388 308.103v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="306.055" font-family="cmsy5" transform="translate(-132.446 6.818)">¡</text><text x="69.065" y="306.055" font-family="cmr5" transform="translate(-132.446 6.818)">5</text></g><path fill="none" d="M-38.78 308.103v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="306.055" font-family="cmsy5" transform="translate(-106.839 6.818)">¡</text><text x="69.065" y="306.055" font-family="cmr5" transform="translate(-106.839 6.818)">4</text></g><path fill="none" d="M-13.173 308.103v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="306.055" font-family="cmsy5" transform="translate(-81.232 6.818)">¡</text><text x="69.065" y="306.055" font-family="cmr5" transform="translate(-81.232 6.818)">3</text></g><path fill="none" d="M12.434 308.103v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="306.055" font-family="cmsy5" transform="translate(-55.624 6.818)">¡</text><text x="69.065" y="306.055" font-family="cmr5" transform="translate(-55.624 6.818)">2</text></g><path fill="none" d="M38.041 308.103v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="306.055" font-family="cmsy5" transform="translate(-30.017 6.818)">¡</text><text x="69.065" y="306.055" font-family="cmr5" transform="translate(-30.017 6.818)">1</text></g><path fill="none" d="M89.256 308.103v-4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(23.906 6.707)">1</text><path fill="none" d="M114.863 308.103v-4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(49.513 6.707)">2</text><path fill="none" d="M140.47 308.103v-4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(75.12 6.707)">3</text><path fill="none" d="M166.078 308.103v-4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(100.728 6.707)">4</text><path fill="none" d="M61.6 280.448h4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(-5.887 -23.996)">1</text><path fill="none" d="M61.6 254.84h4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(-5.887 -49.603)">2</text><path fill="none" d="M61.6 229.233h4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(-5.887 -75.21)">3</text><path fill="none" d="M61.6 203.626h4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(-5.887 -100.818)">4</text><path fill="none" d="M61.6 178.018h4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(-5.887 -126.425)">5</text><path fill="none" d="M61.6 152.411h4.097"/><text x="63.649" y="306.055" stroke="none" font-family="cmr5" font-size="5" transform="translate(-5.887 -152.033)">6</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M38.041 318.858v-179.25"/><g stroke="none" font-size="9"><text x="63.649" y="306.055" font-family="cmmi9" transform="translate(-40.305 -170.814)">x</text><text x="71.461" y="306.055" font-family="cmr9" transform="translate(-40.305 -170.814)">=</text><text x="81.225" y="306.055" font-family="cmsy9" transform="translate(-40.305 -170.814)">¡</text><text x="88.419" y="306.055" font-family="cmr9" transform="translate(-40.305 -170.814)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 254.84h245.83"/><g stroke="none" font-size="9"><text x="63.649" y="306.055" font-family="cmmi9" transform="translate(113.644 -49.19)">y</text><text x="71.097" y="306.055" font-family="cmr9" transform="translate(113.644 -49.19)">=</text><text x="80.86" y="306.055" font-family="cmr9" transform="translate(113.644 -49.19)">2</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.388 253.24 1.206-.038 1.206-.04 1.206-.041 1.206-.043 1.205-.045 1.206-.046 1.206-.047 1.206-.05 1.206-.052 1.205-.054 1.206-.056 1.206-.058 1.206-.06 1.206-.065 1.205-.065 1.206-.069 1.206-.072 1.206-.076 1.206-.078 1.206-.083 1.205-.086 1.206-.09 1.206-.095 1.206-.1 1.206-.105 1.205-.11 1.206-.115 1.206-.122 1.206-.128 1.206-.136 1.205-.143 1.206-.151 1.206-.16 1.206-.17 1.206-.18 1.205-.192 1.206-.202 1.206-.217 1.206-.23 1.206-.246 1.206-.264 1.205-.28 1.206-.303 1.206-.325 1.206-.349 1.206-.377 1.205-.406 1.206-.44 1.206-.477 1.206-.52 1.206-.564 1.205-.618 1.206-.676 1.206-.743 1.206-.817 1.206-.906 1.206-1.004 1.205-1.12 1.206-1.247 1.206-1.405 1.206-1.583 1.206-1.793 1.205-2.043 1.206-2.345 1.206-2.705 1.206-3.145 1.206-3.689 1.205-4.357 1.206-5.202 1.206-6.277 1.206-7.681 1.206-9.531 1.206-12.014 1.205-15.468 1.206-20.354 1.206-27.557 1.206-38.607 1.206-56.458L30.87-71.87M45.211-71.87l1.53 104.845 1.53 61.398 1.53 39.033 1.53 26.342 1.53 18.618 1.529 13.644 1.53 10.297 1.53 7.952 1.529 6.275 1.53 5.04 1.53 4.106 1.53 3.392 1.529 2.832 1.53 2.389 1.53 2.033 1.53 1.75 1.529 1.51 1.53 1.314 1.53 1.152 1.53 1.014 1.529.899 1.53.8 1.53.715 1.529.641 1.53.577 1.53.521 1.53.475 1.529.43 1.53.393 1.53.36 1.53.329 1.529.303 1.53.279 1.53.258 1.53.239 1.529.22 1.53.206 1.53.192 1.529.178 1.53.166 1.53.156 1.53.145 1.529.137 1.53.128 1.53.12 1.53.115 1.529.107 1.53.1 1.53.096 1.53.09 1.529.085 1.53.081 1.53.077 1.529.073 1.53.069 1.53.066 1.53.063 1.529.06 1.53.056 1.53.055 1.53.051 1.529.05 1.53.047 1.53.046 1.53.042 1.529.042 1.53.04 1.53.038 1.529.037 1.53.035 1.53.034 1.53.032 1.529.032 1.53.03 1.53.028 1.53.028 1.529.027 1.53.026 1.53.025"/><path stroke="none" d="M64.999 229.233a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><g stroke="none" font-size="9"><text x="63.649" y="306.055" font-family="cmr9" transform="translate(3.533 -82.605)">(0</text><text x="71.871" y="306.055" font-family="cmmi9" transform="translate(3.533 -82.605)">;</text><text x="75.982" y="306.055" font-family="cmr9" transform="translate(3.533 -82.605)">3)</text></g></g></svg>
</figure>

## b)

Assumiamo come nuovi assi di riferimento gli asintoti di $f_4$. Poniamo $X=x+1$ e $Y=y-2$, cioè $x=X-1$, $y=Y+2$, traslando l'origine nel punto $O'=(-1,\,2)$. Poiché $f_4(x)=2+\dfrac{1}{(x+1)^{2}}$, la nuova equazione della curva è

$$Y=\frac{1}{X^{2}}.$$

## c)

Calcoliamo, nel nuovo sistema, l'area della porzione di piano compresa fra la curva, l'asse $X$, la retta $X=1$ e la retta $X=h$ (con $h>1$):

$$A(h)=\int_{1}^{h}\frac{1}{X^{2}}\,dX=\left[-\frac{1}{X}\right]_{1}^{h}=1-\frac{1}{h}.$$

Passando al limite,

$$\lim_{h\to +\infty}A(h)=\lim_{h\to +\infty}\left(1-\frac{1}{h}\right)=1.$$

Il risultato ha un significato geometrico notevole: la regione illimitata compresa fra la curva $Y=\dfrac{1}{X^{2}}$, l'asse delle ascisse e la retta $X=1$ ha area *finita*, pari a $1$.

## d)

Per $a=5$ consideriamo $f_5(x)=\dfrac{2x^{2}+5x+3}{(x+1)^{2}}$. Poiché $2x^{2}+5x+3=(2x+3)(x+1)$, si ha

$$f_5(x)=\frac{(2x+3)(x+1)}{(x+1)^{2}}=\frac{2x+3}{x+1}\qquad (x\ne -1).$$

Si tratta di una funzione omografica con centro $(-1,\,2)$, asintoto verticale $x=-1$ e asintoto orizzontale $y=2$; per $x=0$ si ha $y=3$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="366.31" height="399.037" viewBox="-72 -72 274.733 299.278"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 150.062h245.43"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M171.48 147.662c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="63.649" y="150.062" stroke="none" font-family="cmmi10" font-size="10" transform="translate(113.644 2.153)">x</text><path fill="none" d="M63.649 188.473V-15.985"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M61.249-14.105c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="63.649" y="150.062" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -171.925)">y</text><path fill="none" d="M-64.388 152.11v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="150.062" font-family="cmsy5" transform="translate(-132.446 6.818)">¡</text><text x="69.065" y="150.062" font-family="cmr5" transform="translate(-132.446 6.818)">5</text></g><path fill="none" d="M-38.78 152.11v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="150.062" font-family="cmsy5" transform="translate(-106.839 6.818)">¡</text><text x="69.065" y="150.062" font-family="cmr5" transform="translate(-106.839 6.818)">4</text></g><path fill="none" d="M-13.173 152.11v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="150.062" font-family="cmsy5" transform="translate(-81.232 6.818)">¡</text><text x="69.065" y="150.062" font-family="cmr5" transform="translate(-81.232 6.818)">3</text></g><path fill="none" d="M12.434 152.11v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="150.062" font-family="cmsy5" transform="translate(-55.624 6.818)">¡</text><text x="69.065" y="150.062" font-family="cmr5" transform="translate(-55.624 6.818)">2</text></g><path fill="none" d="M38.041 152.11v-4.097"/><g stroke="none" font-size="5"><text x="63.649" y="150.062" font-family="cmsy5" transform="translate(-30.017 6.818)">¡</text><text x="69.065" y="150.062" font-family="cmr5" transform="translate(-30.017 6.818)">1</text></g><path fill="none" d="M89.256 152.11v-4.097"/><text x="63.649" y="150.062" stroke="none" font-family="cmr5" font-size="5" transform="translate(23.906 6.707)">1</text><path fill="none" d="M114.863 152.11v-4.097"/><text x="63.649" y="150.062" stroke="none" font-family="cmr5" font-size="5" transform="translate(49.513 6.707)">2</text><path fill="none" d="M140.47 152.11v-4.097"/><text x="63.649" y="150.062" stroke="none" font-family="cmr5" font-size="5" transform="translate(75.12 6.707)">3</text><path fill="none" d="M166.078 152.11v-4.097"/><text x="63.649" y="150.062" stroke="none" font-family="cmr5" font-size="5" transform="translate(100.728 6.707)">4</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M38.041 188.473V-16.385"/><g stroke="none" font-size="9"><text x="63.649" y="150.062" font-family="cmmi9" transform="translate(-40.305 -170.814)">x</text><text x="71.461" y="150.062" font-family="cmr9" transform="translate(-40.305 -170.814)">=</text><text x="81.225" y="150.062" font-family="cmsy9" transform="translate(-40.305 -170.814)">¡</text><text x="88.419" y="150.062" font-family="cmr9" transform="translate(-40.305 -170.814)">1</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 98.847h245.83"/><g stroke="none" font-size="9"><text x="63.649" y="150.062" font-family="cmmi9" transform="translate(113.644 -49.19)">y</text><text x="71.097" y="150.062" font-family="cmr9" transform="translate(113.644 -49.19)">=</text><text x="80.86" y="150.062" font-family="cmr9" transform="translate(113.644 -49.19)">2</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m-64.388 105.25 1.232.077 1.231.08 1.232.082 1.232.084 1.231.086 1.232.089 1.231.09 1.232.092 1.232.096 1.231.098 1.232.101 1.231.104 1.232.106 1.232.11 1.231.113 1.232.116 1.231.12 1.232.124 1.232.127 1.231.131 1.232.135 1.231.14 1.232.145 1.232.15 1.231.156 1.232.159 1.231.166 1.232.171 1.232.178 1.231.185 1.232.194 1.231.198 1.232.207 1.232.215 1.231.226 1.232.234 1.231.243 1.232.256 1.232.267 1.231.279 1.232.292 1.231.307 1.232.32 1.232.34 1.231.357 1.232.376 1.232.397 1.231.417 1.232.44 1.231.475 1.232.499 1.232.53 1.231.563 1.232.607 1.231.648 1.232.697 1.232.747 1.231.81 1.232.873 1.231.955 1.232 1.034L11.972 124l1.231 1.247 1.232 1.378 1.231 1.529 1.232 1.708 1.232 1.919 1.231 2.172 1.232 2.477 1.231 2.856 1.232 3.324 1.232 3.92 1.231 4.683 1.232 5.712 1.231 7.113 1.232 9.098 1.232 12.042 1.231 16.699 1.232 24.732M41.882-71.87l1.572 49.57 1.572 27.267 1.572 17.242 1.572 11.898 1.572 8.698 1.572 6.633 1.572 5.232 1.572 4.232 1.572 3.49 1.572 2.931 1.572 2.495 1.572 2.149 1.572 1.87 1.571 1.644 1.572 1.454 1.572 1.296 1.572 1.163 1.572 1.047 1.572.955 1.572.866 1.572.79 1.572.73 1.572.672 1.572.62 1.572.575 1.572.533 1.572.497 1.571.466 1.572.435 1.572.41 1.572.384 1.572.364 1.572.343 1.572.321 1.572.306 1.572.29 1.572.274 1.572.26 1.572.25 1.572.236 1.572.227 1.572.217 1.571.206 1.572.198 1.572.19 1.572.18 1.572.175 1.572.166 1.572.162 1.572.154 1.572.148 1.572.144 1.572.139 1.572.133 1.572.128 1.572.125 1.571.12 1.572.116 1.572.112 1.572.108 1.572.105 1.572.104 1.572.098 1.572.096 1.572.093 1.572.09 1.572.089 1.572.085 1.572.082 1.572.08 1.572.08 1.571.076 1.572.074 1.572.072 1.572.071 1.572.069 1.572.067 1.572.065 1.572.063"/><path stroke="none" d="M64.999 73.24a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/><g stroke="none" font-size="9"><text x="63.649" y="150.062" font-family="cmmi9" transform="translate(3.533 -82.605)">A</text><text x="70.585" y="150.062" font-family="cmr9" transform="translate(3.533 -82.605)">(0</text><text x="78.807" y="150.062" font-family="cmmi9" transform="translate(3.533 -82.605)">;</text><text x="82.918" y="150.062" font-family="cmr9" transform="translate(3.533 -82.605)">3)</text></g></g></svg>
</figure>

Cerchiamo il punto comune con $f_4$. Dato che entrambe passano per il punto di ascissa $x=0$ dell'asse $y$, e $f_4(0)=3$, $f_5(0)=3$, il punto comune è $A=(0,\,3)$.

Tangente a $f_4$ in $A$: poiché $f_4'(x)=\dfrac{-2}{(x+1)^{3}}$, si ha $f_4'(0)=-2$, quindi

$$y-3=-2(x-0)\ \Rightarrow\ y=-2x+3.$$

Tangente a $f_5$ in $A$: poiché

$$f_5'(x)=\frac{2(x+1)-(2x+3)}{(x+1)^{2}}=\frac{-1}{(x+1)^{2}},$$

si ha $f_5'(0)=-1$, quindi

$$y-3=-(x-0)\ \Rightarrow\ y=-x+3.$$

*Fonte:* [📄 PDF p.135](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
