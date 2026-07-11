

**Problema:** [[Problemi/prob_2005_liceo_scientifico_pni_2005_sessione_straordinaria_problema2_147_1|2005 PNI Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_problema2_147|2005 PNI Straordinaria — Problema 2]]

Nel piano riferito a un sistema di assi cartesiani ortogonali $(Oxy)$ sono assegnate le curve di equazione

$$[1]\qquad y=x^4+ax^3+bx^2+c.$$

## a)

Posto $x=0$ nella $[1]$ si ottiene il punto d'intersezione con l'asse $y$: $A=(0,c)$. La derivata prima della generica curva è

$$y'=4x^3+3ax^2+2bx,\qquad\text{da cui}\qquad y'(0)=0.$$

La tangente in $A$ ha quindi equazione $y-c=0\cdot(x-0)$, cioè $y=c$: essa è parallela all'asse $x$ per ogni curva della famiglia.

## b)

La derivata seconda è $y''=12x^2+6ax+2b$. La concavità è rivolta verso le $y$ positive in tutto il dominio se $y''\ge 0$ per ogni $x$, cioè se il discriminante del trinomio è $\le 0$:

$$\frac{\Delta}{4}=9a^2-24b\le 0\;\Rightarrow\;3a^2-8b\le 0.$$

Nel caso $3a^2-8b=0$ la derivata seconda si annulla in un solo punto senza cambiare segno: infatti la derivata terza $y'''=24x+6a$ vale $0$ in $x=-\frac{a}{4}$, ma $y^{(4)}=24>0$, dunque lì si ha un minimo e non un flesso e la concavità resta verso l'alto. Vale perciò la relazione

$$3a^2-8b\le 0.$$

## c)

Il punto $A=(0,c)$ è un flesso se $y''(0)=2b=0$, cioè $b=0$. La tangente inflessionale in $A$ è orizzontale (per il punto a)), dunque $y=c$; essa passa per $(2,2)$ se $c=2$. Imponendo inoltre che la curva stessa passi per $(2,2)$:

$$2=16+8a+0+c=16+8a+2\;\Rightarrow\;8a=-16\;\Rightarrow\;a=-2.$$

Quindi $a=-2$, $b=0$, $c=2$ e la curva cercata è

$$K:\quad y=x^4-2x^3+2.$$

## d)

Per $K$ si ha $y''=12x^2-12x=12x(x-1)$, che si annulla in $x=0$ e $x=1$: oltre al flesso $(0,2)$ esiste quindi un **secondo flesso** $(1,1)$, poiché $y(1)=1-2+2=1$.

La tangente inflessionale in $(0,2)$ è $y=2$. In $(1,1)$, essendo $y'(1)=4-6=-2$, la tangente è

$$y-1=-2(x-1)\;\Rightarrow\;y=-2x+3.$$

Le intersezioni fra $K$ e la tangente in $(1,1)$ si trovano da $x^4-2x^3+2=-2x+3$, cioè $x^4-2x^3+2x-1=0$, che si fattorizza come $(x+1)(x-1)^3=0$: la tangente reincontra $K$ in $x_A=-1$ (oltre alla tangenza tripla in $x=1$). Le due tangenti si intersecano dove $2=-2x+3$, cioè in $x_B=\frac12$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="259.839" height="556.316" viewBox="-72 -72 194.879 417.237"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 308.153h181.698"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M107.748 305.753c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x=".77" y="308.153" stroke="none" font-family="cmmi10" font-size="10" transform="translate(112.792 2.153)">x</text><path fill="none" d="M.77 335.468V162.875"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-1.63 164.755c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x=".77" y="308.153" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -151.156)">y</text><path fill="none" d="M-44.755 306.788v2.731"/><g stroke="none" font-size="7"><text x=".77" y="308.153" font-family="cmsy7" transform="translate(-50.643 9.41)">¡</text><text x="7.02" y="308.153" font-family="cmr7" transform="translate(-50.643 9.41)">1</text></g><path fill="none" d="M46.294 306.788v2.731"/><text x=".77" y="308.153" stroke="none" font-family="cmr7" font-size="7" transform="translate(43.532 9.41)">1</text><path fill="none" d="M91.819 306.788v2.731"/><text x=".77" y="308.153" stroke="none" font-family="cmr7" font-size="7" transform="translate(89.056 9.41)">2</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-56.136-71.87 1.901 31.365 1.901 28.817 1.902 26.41 1.9 24.134 1.902 21.982 1.901 19.957 1.902 18.055 1.9 16.268 1.902 14.594 1.901 13.035 1.902 11.58 1.9 10.23 1.902 8.982 1.901 7.832 1.902 6.778 1.9 5.812 1.902 4.935 1.901 4.14 1.902 3.431 1.901 2.797 1.901 2.237 1.901 1.748 1.902 1.329 1.901.973 1.901.677 1.902.442 1.9.258 1.902.128L-1 217.1l1.902.004 1.9.007 1.902.05 1.901.122 1.902.23 1.9.363 1.902.523 1.901.702 1.902.9 1.9 1.114 1.902 1.336 1.901 1.569 1.902 1.806 1.9 2.043 1.902 2.279 1.901 2.51 1.902 2.732 1.9 2.941 1.902 3.137 1.901 3.313 1.902 3.468 1.9 3.595 1.902 3.697 1.901 3.764 1.902 3.798 1.9 3.794 1.902 3.746 1.901 3.653 1.902 3.512 1.9 3.32 1.902 3.072 1.901 2.765 1.902 2.399 1.901 1.964 1.901 1.462 1.901.889 1.902.24 1.901-.487 1.901-1.295 1.902-2.192 1.9-3.17 1.902-4.247 1.901-5.416 1.902-6.683 1.9-8.05 1.902-9.527 1.901-11.11 1.902-12.8 1.9-14.613 1.902-16.54"/><path fill="none" stroke="red" stroke-width=".8" d="M-62.965 217.104H105.47M-62.965 44.111l6.26 12.52 6.26 12.518 6.259 12.52 6.26 12.518 6.259 12.52 6.26 12.518 6.259 12.52 6.26 12.518 6.259 12.52L-.37 169.3l6.259 12.52 6.26 12.518 6.259 12.52 6.26 12.518 6.259 12.52 6.26 12.518 6.259 12.52 6.26 12.518 6.259 12.52 6.26 12.518 6.259 12.519 6.26 12.519 6.259 12.519 6.26 12.519"/><path stroke="none" d="M2.69 217.104a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g stroke="none" font-size="7"><text x=".77" y="308.153" font-family="cmr7" transform="translate(-21.496 -96.332)">(0</text><text x="7.881" y="308.153" font-family="cmmi7" transform="translate(-21.496 -96.332)">;</text><text x="11.621" y="308.153" font-family="cmr7" transform="translate(-21.496 -96.332)">2)</text></g><path stroke="none" d="M48.214 262.629a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><g stroke="none" font-size="7"><text x=".77" y="308.153" font-family="cmr7" transform="translate(49.058 -50.808)">(1</text><text x="7.881" y="308.153" font-family="cmmi7" transform="translate(49.058 -50.808)">;</text><text x="11.621" y="308.153" font-family="cmr7" transform="translate(49.058 -50.808)">1)</text></g><path stroke="none" d="M-42.835 80.53a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x=".77" y="308.153" stroke="none" font-family="cmmi7" font-size="7" transform="translate(-55.071 -225.231)">A</text><path stroke="none" d="M25.452 217.104a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x=".77" y="308.153" stroke="none" font-family="cmmi7" font-size="7" transform="translate(19.57 -94.582)">B</text><g fill="#00f" stroke="#00f"><text x=".77" y="308.153" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(88.721 -128.604)">K</text></g></g></svg>
</figure>

L'area racchiusa da $K$ e dalle due tangenti inflessionali è

$$A=\int_{-1}^{1}\bigl[(-2x+3)-(x^4-2x^3+2)\bigr]\,dx+\underbrace{\frac12\cdot 1\cdot\frac12}_{\text{triangolino}}+\int_{1}^{2}\bigl[2-(x^4-2x^3+2)\bigr]\,dx.$$

Calcoliamo i due integrali. Il primo, sfruttando che sull'intervallo simmetrico i termini dispari danno contributo nullo,

$$\int_{-1}^{1}(-x^4+2x^3-2x+1)\,dx=\int_{-1}^{1}(-x^4+1)\,dx=2\int_{0}^{1}(1-x^4)\,dx=2\left(1-\frac15\right)=\frac85.$$

Il secondo,

$$\int_{1}^{2}(-x^4+2x^3)\,dx=\left[-\frac{x^5}{5}+\frac{x^4}{2}\right]_{1}^{2}=\left(-\frac{32}{5}+8\right)-\left(-\frac15+\frac12\right)=\frac85-\frac{3}{10}=\frac{13}{10}.$$

Sommando con il termine $\frac14$:

$$A=\frac85+\frac14+\frac{13}{10}=\frac{32}{20}+\frac{5}{20}+\frac{26}{20}=\frac{63}{20}=3{,}15\ \text{unità d'area}.$$

## e)

Cerchiamo il minimo di $K$: $y'=4x^3-6x^2=2x^2(2x-3)\ge 0$ per $x\ge\frac32$, dunque il minimo assoluto è in $x=\frac32$, con

$$y\!\left(\frac32\right)=\left(\frac32\right)^4-2\left(\frac32\right)^3+2=\frac{81}{16}-\frac{27}{4}+2=\frac{81-108+32}{16}=\frac{5}{16}.$$

Il flesso a tangente orizzontale è $(0,2)$, che si trova sull'asse $y$ e deve restarvi: la traslazione non deve quindi spostare in orizzontale. Per portare il minimo $\left(\frac32,\frac{5}{16}\right)$ sull'asse $x$ basta abbassare la figura di $\frac{5}{16}$. Le equazioni della traslazione sono perciò

$$\begin{cases} x'=x\\[2pt] y'=y-\dfrac{5}{16}. \end{cases}$$

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
