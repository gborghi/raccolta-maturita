

**Problema:** [[Problemi/prob_2003_scuole_italiane_allestero_europa_2003_sessione_sup_problema1_83_1|2003 Europa Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2003_scuole_italiane_allestero_europa_2003_sessione_sup_problema1_83|2003 Europa Suppletiva — Problema 1]]

Sono date le funzioni
$$f(t)=\frac{e^{t}+e^{-t}}{2},\qquad g(t)=\frac{e^{t}-e^{-t}}{2},$$
cioè rispettivamente il **coseno iperbolico** $\cosh t$ e il **seno iperbolico** $\sinh t$.

## a)

**Studio di $f(t)=\dfrac{e^{t}+e^{-t}}{2}$.**

La funzione è definita e continua su tutto $\mathbb{R}$ ed è sempre positiva. È **pari**, poiché $f(-t)=f(t)$, e interseca l'asse $y$ nel punto $(0,1)$. Si ha
$$\lim_{t\to +\infty}f(t)=+\infty,\qquad \lim_{t\to -\infty}f(t)=+\infty,$$
quindi non vi sono asintoti.

Derivata prima:
$$f'(t)=\frac{e^{t}-e^{-t}}{2}\ge 0 \iff e^{t}\ge e^{-t}\iff t\ge 0.$$
Dunque $f$ è decrescente per $t<0$ e crescente per $t>0$: il punto $t=0$ è di **minimo assoluto**, di ordinata $1$.

Derivata seconda:
$$f''(t)=\frac{e^{t}+e^{-t}}{2}>0\quad\text{per ogni }t,$$
quindi la concavità è sempre rivolta verso l'alto (curva $F$, in blu).

**Studio di $g(t)=\dfrac{e^{t}-e^{-t}}{2}$.**

La funzione è definita e continua su tutto $\mathbb{R}$; è positiva per $e^{t}>e^{-t}$, cioè per $t>0$. Interseca gli assi nell'origine ed è **dispari**, poiché $g(-t)=-g(t)$. Si ha
$$\lim_{t\to +\infty}g(t)=+\infty,\qquad \lim_{t\to -\infty}g(t)=-\infty,$$
e non vi sono asintoti.

Derivata prima:
$$g'(t)=\frac{e^{t}+e^{-t}}{2}>0\quad\text{per ogni }t,$$
quindi $g$ è sempre crescente: non vi sono massimi né minimi.

Derivata seconda:
$$g''(t)=\frac{e^{t}-e^{-t}}{2}\ge 0 \iff t\ge 0,$$
concavità verso l'alto per $t>0$ e verso il basso per $t<0$: il punto $(0,0)$ è di **flesso** (curva $G$, in rosso).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="197.852" height="282.681" viewBox="-72 -72 148.389 212.011"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 47.26H65.242"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M63.362 44.86c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-3.214" y="47.26" stroke="none" font-family="cmmi10" font-size="10" transform="translate(72.389 3.075)">t</text><path fill="none" d="M-3.214 103.596v-162.35"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-5.614-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-3.214" y="47.26" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -111.891)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.55-49.996 1.908 5.44 1.91 5.099 1.91 4.775 1.908 4.472 1.91 4.18 1.91 3.91 1.908 3.65 1.91 3.404 1.91 3.175 1.908 2.955 1.91 2.744 1.91 2.544 1.908 2.357 1.91 2.174 1.91 2.003 1.908 1.837 1.91 1.68 1.91 1.527 1.908 1.38 1.91 1.24 1.91 1.103 1.908.968 1.91.841 1.91.716 1.908.592 1.91.471 1.91.352 1.908.234 1.91.116 1.91.001 1.908-.116 1.91-.231 1.91-.351 1.908-.47 1.91-.59 1.91-.715 1.908-.838 1.91-.97 1.91-1.1 1.908-1.238 1.91-1.378 1.91-1.525 1.908-1.677 1.91-1.836 1.91-2 1.908-2.174 1.91-2.353 1.91-2.544 1.908-2.74 1.91-2.951 1.91-3.173 1.908-3.402 1.91-3.648 1.91-3.905 1.908-4.18 1.91-4.465 1.91-4.77 1.908-5.096 1.91-5.436"/><path fill="none" stroke="red" stroke-width=".8" d="m-59.55 139.34 1.908-5.764 1.91-5.444 1.91-5.144 1.908-4.86 1.91-4.598 1.91-4.35 1.908-4.12 1.91-3.906 1.91-3.703 1.908-3.518 1.91-3.342 1.91-3.184 1.908-3.032 1.91-2.895 1.91-2.767 1.908-2.65 1.91-2.544 1.91-2.444 1.908-2.357 1.91-2.276 1.91-2.205 1.908-2.143 1.91-2.087 1.91-2.04 1.908-1.998 1.91-1.967 1.91-1.942 1.908-1.925 1.91-1.913 1.91-1.902 1.908-1.913 1.91-1.925 1.91-1.941 1.908-1.967 1.91-1.999 1.91-2.038 1.908-2.087 1.91-2.14 1.91-2.206 1.908-2.275 1.91-2.355 1.91-2.445 1.908-2.54 1.91-2.65 1.91-2.765 1.908-2.894 1.91-3.032 1.91-3.18L34.005.628l1.91-3.514 1.91-3.702 1.908-3.903 1.91-4.118 1.91-4.347 1.908-4.595 1.91-4.857 1.91-5.14 1.908-5.44 1.91-5.761"/><path stroke="none" d="M-1.564 15.961a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-3.214" y="47.26" stroke="none" font-family="cmr10" font-size="10" transform="translate(8.455 -32.77)">1</text><g fill="#00f" stroke="#00f"><text x="-3.214" y="47.26" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-52.422 -76.394)">F</text></g><g fill="red" stroke="red"><text x="-3.214" y="47.26" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(47.71 -76.394)">G</text></g></g></svg>
</figure>

## b)

Occorre provare che un punto dell'iperbole $x^{2}-y^{2}=1$ di ascissa $f(t_1)$ ha ordinata $g(t_1)$.

Posto
$$x=f(t_1)=\frac{e^{t_1}+e^{-t_1}}{2},\qquad y=g(t_1)=\frac{e^{t_1}-e^{-t_1}}{2},$$
si sostituisce nell'equazione dell'iperbole:
$$x^{2}-y^{2}=\left(\frac{e^{t_1}+e^{-t_1}}{2}\right)^{2}-\left(\frac{e^{t_1}-e^{-t_1}}{2}\right)^{2}.$$
Sviluppando i quadrati:
$$=\frac{e^{2t_1}+2+e^{-2t_1}}{4}-\frac{e^{2t_1}-2+e^{-2t_1}}{4}=\frac{4}{4}=1.$$
L'identità $\cosh^{2}t_1-\sinh^{2}t_1=1$ è dunque verificata, come si voleva dimostrare.

## c)

I punti $P$ e $Q$, di uguale ascissa $t_0$ su $F$ e $G$, hanno coordinate
$$P=\left(t_0,\ \frac{e^{t_0}+e^{-t_0}}{2}\right),\qquad Q=\left(t_0,\ \frac{e^{t_0}-e^{-t_0}}{2}\right).$$
Poiché $P$ ha sempre ordinata maggiore di $Q$, la loro distanza è
$$\overline{PQ}=y_P-y_Q=\frac{e^{t_0}+e^{-t_0}}{2}-\frac{e^{t_0}-e^{-t_0}}{2}=e^{-t_0}.$$
La funzione $t_0\mapsto e^{-t_0}$ è **sempre decrescente**: pertanto la distanza $\overline{PQ}$ non ammette né massimo né minimo assoluto.

## d)

Per $t\le 0$ è $f(t)\ge g(t)$, quindi $f(t)-g(t)=e^{-t}\ge 0$; anzi $f(t)-g(t)=e^{-t}$ per ogni $t$.

**Prima regione** (limitata da $F$, $G$, dall'asse $y$ e dalla retta $t=-1$):
$$\text{Area}=\int_{-1}^{0}\big[f(t)-g(t)\big]\,dt=\int_{-1}^{0}e^{-t}\,dt=\big[-e^{-t}\big]_{-1}^{0}=-1+e=(e-1)\,\text{u}^2\cong 1.72\,\text{u}^2.$$

**Seconda regione** (limitata da $F$, $G$, dall'asse $y$ e dalla retta $t=1$):
$$\text{Area}=\int_{0}^{1}\big[f(t)-g(t)\big]\,dt=\int_{0}^{1}e^{-t}\,dt=\big[-e^{-t}\big]_{0}^{1}=-e^{-1}+1=\left(1-\frac{1}{e}\right)\text{u}^2\cong 0.63\,\text{u}^2.$$

*Fonte:* [📄 PDF p.83](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
