

**Problema:** [[Problemi/prob_2004_liceo_scientifico_ordinamento_2004_sessione_straor_problema1_112_1|2004 Ordinamento Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_problema1_112|2004 Ordinamento Straordinaria — Problema 1]]

È assegnata una parabola $p$ di vertice $V$ e fuoco $F$, con il segmento $VF$ di lunghezza $\frac{1}{2}$; sia $E$ il simmetrico di $F$ rispetto a $V$.

Scegliamo il riferimento con $E$ nell'origine e l'asse $y$ diretto lungo $FV$, orientato da $V$ verso $F$. Poiché $V$ è il punto medio di $EF$ e $VF=\frac{1}{2}$, si ha
$$E=(0,\,0), \qquad V=\left(0,\,\tfrac{1}{2}\right), \qquad F=(0,\,1).$$

## a)

La parabola ha asse coincidente con l'asse $y$ e vertice in $V$, quindi è del tipo $y=ax^2+\frac{1}{2}$. Per una parabola $y=ax^2+c$ il fuoco dista dal vertice $\frac{1}{4a}$; imponendo $\frac{1}{4a}=VF=\frac{1}{2}$ si ottiene $a=\frac{1}{2}$. Dunque
$$p:\quad y=\frac{1}{2}x^2+\frac{1}{2}.$$

Un punto $A$ rende il triangolo $AEF$ rettangolo in $A$ se e solo se $A$ vede l'ipotenusa $EF$ sotto un angolo retto, cioè se $A$ appartiene alla circonferenza di diametro $EF$. Tale circonferenza ha centro $V=\left(0,\frac{1}{2}\right)$ e raggio $\frac{1}{2}$:
$$x^2+\left(y-\tfrac{1}{2}\right)^2=\tfrac{1}{4}.$$

Intersecando con la parabola, per cui $x^2=2y-1$, si ha
$$2y-1+\left(y-\tfrac{1}{2}\right)^2=\tfrac{1}{4}\ \Rightarrow\ y^2+y-1=0\ \Rightarrow\ y=\frac{-1+\sqrt{5}}{2},$$
(l'altra radice è negativa e va scartata). Da $x^2=2y-1=\sqrt{5}-2>0$ si ottengono due punti reali
$$A=\left(\sqrt{\sqrt5-2},\ \frac{\sqrt5-1}{2}\right), \qquad A'=\left(-\sqrt{\sqrt5-2},\ \frac{\sqrt5-1}{2}\right),$$
simmetrici rispetto all'asse $y$. Esistono quindi due punti della parabola che rendono il triangolo rettangolo in $A$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="259.079" height="172.158" viewBox="-72 -72 194.309 129.119"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 37.87h181.128"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M107.178 35.47c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="15.564" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(97.427 2.153)">x</text><path fill="none" d="M15.564 56.649V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M13.164-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="15.564" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -102.501)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.681-42.331 2.651 3.259 2.652 3.145 2.651 3.033 2.652 2.922 2.651 2.81 2.652 2.696 2.651 2.584 2.652 2.472 2.651 2.36 2.652 2.247 2.651 2.135 2.652 2.023 2.651 1.91 2.651 1.798 2.652 1.686 2.651 1.573 2.652 1.462 2.651 1.348L-12.303.37l2.651 1.124L-7 2.506l2.651.899 2.652.788 2.651.674 2.652.563 2.651.45 2.652.338 2.651.226 2.651.114h2.652l2.651-.11 2.652-.224 2.651-.336 2.652-.448 2.651-.56 2.652-.673 2.651-.785 2.652-.897 2.651-1.01L43.378.393 46.029-.84l2.651-1.347 2.652-1.46 2.651-1.57 2.652-1.683 2.651-1.796 2.652-1.908 2.651-2.021 2.652-2.133 2.651-2.245 2.652-2.357 2.651-2.47 2.652-2.582 2.651-2.694 2.652-2.807 2.65-2.92 2.652-3.03 2.652-3.144 2.651-3.256"/><path fill="none" stroke="red" d="M46.862 6.572c0-17.286-14.012-31.298-31.298-31.298S-15.734-10.714-15.734 6.572-1.722 37.87 15.564 37.87 46.862 23.857 46.862 6.572Zm-31.298 0"/><path stroke="none" d="M16.941 37.87a1.377 1.377 0 1 0-2.754 0 1.377 1.377 0 0 0 2.754 0m-1.377 0"/><text x="15.564" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.491 10.366)">E</text><path stroke="none" d="M16.941 6.572a1.377 1.377 0 1 0-2.754 0 1.377 1.377 0 0 0 2.754 0m-1.377 0"/><text x="15.564" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -20.932)">V</text><path stroke="none" d="M16.941-24.726a1.377 1.377 0 1 0-2.754 0 1.377 1.377 0 0 0 2.754 0m-1.377 0"/><text x="15.564" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.352 -66.129)">F</text><path stroke="none" d="M47.362-.814a1.377 1.377 0 1 0-2.754 0 1.377 1.377 0 0 0 2.754 0m-1.377 0"/><text x="15.564" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(33.954 -35.267)">A</text><path stroke="none" d="M-13.48-.814a1.377 1.377 0 1 0-2.754 0 1.377 1.377 0 0 0 2.754 0m-1.377 0"/><g stroke="none"><text x="15.564" y="37.87" font-family="cmmi10" font-size="10" transform="translate(-44.26 -34.925)">A</text><text x="23.064" y="34.241" font-family="cmsy7" font-size="7" transform="translate(-44.26 -34.925)">0</text></g><g fill="#00f" stroke="#00f"><text x="15.564" y="37.87" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(72.6 -86.453)">p</text></g></g></svg>
</figure>

## b)

Sia $P=\left(t,\ \frac{1}{2}t^2+\frac{1}{2}\right)$ un generico punto di $p$. Il baricentro $G$ del triangolo $PEF$ ha coordinate
$$x_G=\frac{t+0+0}{3}=\frac{t}{3}, \qquad y_G=\frac{\left(\frac12 t^2+\frac12\right)+0+1}{3}=\frac{1}{6}t^2+\frac{1}{2}.$$

Eliminando il parametro con $t=3x_G$ si ricava $y_G=\frac{1}{6}(9x_G^2)+\frac{1}{2}$, cioè il luogo
$$k:\quad y=\frac{3}{2}x^2+\frac{1}{2},$$
che è a sua volta una parabola con vertice in $V$.

## c)

La retta $r$, perpendicolare all'asse di simmetria (l'asse $y$), è orizzontale: $r:\ y=h$, con $h>\frac{1}{2}$. Per $x>0$ le due curve si scrivono
$$p:\ x=\sqrt{2y-1}, \qquad k:\ x=\sqrt{\frac{2y-1}{3}}=\frac{\sqrt{2y-1}}{\sqrt{3}}.$$

Per ogni $y$ fissato, $p$ ha ascissa maggiore di $k$. La regione delimitata dal segmento $RS$, dall'arco $VR$ di $p$ e dall'arco $VS$ di $k$ ha quindi area
$$\text{Area}=\int_{1/2}^{h}\!\left(\sqrt{2y-1}-\frac{\sqrt{2y-1}}{\sqrt3}\right)dy=\left(1-\frac{1}{\sqrt3}\right)\int_{1/2}^{h}\!\sqrt{2y-1}\,dy.$$

Poiché $\displaystyle\int \sqrt{2y-1}\,dy=\frac{1}{3}(2y-1)^{3/2}$, e il termine in $y=\frac12$ si annulla,
$$\text{Area}=\left(1-\frac{1}{\sqrt3}\right)\cdot\frac{1}{3}(2h-1)^{3/2}=\frac{\sqrt3-1}{3\sqrt3}(2h-1)^{3/2}.$$

Imponiamo che valga $\frac{8}{9}(3-\sqrt3)$. Osservando che $3-\sqrt3=\sqrt3(\sqrt3-1)$:
$$\frac{\sqrt3-1}{3\sqrt3}(2h-1)^{3/2}=\frac{8\sqrt3(\sqrt3-1)}{9}.$$

Dividendo per $(\sqrt3-1)$ e semplificando:
$$(2h-1)^{3/2}=\frac{8\sqrt3}{9}\cdot 3\sqrt3=8\ \Rightarrow\ 2h-1=8^{2/3}=4\ \Rightarrow\ h=\frac{5}{2}.$$

La distanza cercata di $r$ dal vertice $V$ è
$$d(r,V)=h-\frac{1}{2}=\frac{5}{2}-\frac{1}{2}=2.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="154.464" height="166.088" viewBox="-72 -72 115.848 124.566"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-67.165 42.28h97.762"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M28.717 39.88c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-57.349" y="42.28" stroke="none" font-family="cmmi10" font-size="10" transform="translate(91.878 2.153)">x</text><path fill="none" d="M-57.349 52.096v-110.85"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.748-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.349" y="42.28" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -106.911)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.349 25.92 1.11-.02 1.108-.056 1.11-.093 1.108-.132 1.109-.169 1.109-.207 1.109-.244 1.109-.282 1.108-.32 1.11-.356 1.108-.395 1.11-.432 1.108-.47 1.109-.507 1.109-.545 1.109-.583 1.109-.62 1.108-.657 1.11-.695 1.108-.733 1.11-.77 1.108-.809 1.109-.845 1.109-.883 1.109-.921 1.109-.958 1.108-.996 1.11-1.034 1.108-1.07 1.11-1.11 1.108-1.145 1.109-1.184 1.109-1.221 1.109-1.26 1.109-1.296 1.108-1.334 1.11-1.372 1.108-1.41 1.11-1.446 1.108-1.484 1.109-1.522 1.109-1.56 1.109-1.597 1.109-1.635 1.108-1.672 1.11-1.71 1.108-1.747 1.11-1.786 1.108-1.822 1.109-1.86 1.109-1.898 1.109-1.935 1.109-1.973 1.109-2.011L3.64-30.92l1.11-2.086 1.108-2.122 1.11-2.162 1.108-2.198"/><path fill="none" stroke="#090" stroke-width=".8" d="m-57.349 25.92.64-.02.64-.056.64-.093.64-.132.64-.169.64-.207.641-.244.64-.281.64-.32.64-.356.64-.395.64-.432.64-.47.64-.506.64-.545.64-.583.64-.62.64-.656.64-.695.64-.733.64-.77.641-.807.64-.846.64-.882.64-.92.64-.959.64-.995.64-1.033.64-1.07.64-1.109.64-1.145.64-1.184.64-1.22.64-1.259.64-1.296.641-1.333.64-1.371.64-1.409.64-1.446.64-1.483.64-1.522.64-1.559.64-1.596.64-1.634.64-1.671.64-1.71.64-1.746.64-1.785.64-1.822.641-1.859.64-1.897.64-1.934.64-1.972.64-2.01.64-2.047.64-2.085.64-2.122.64-2.16.64-2.197"/><path fill="none" stroke="red" stroke-width=".8" d="M-19.566-39.522H8.092"/><path stroke="none" d="M-56.367 25.92a.982.982 0 1 0-1.963 0 .982.982 0 0 0 1.963 0m-.982 0"/><text x="-57.349" y="42.28" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.589 -12.944)">V</text><path stroke="none" d="M9.074-39.522a.982.982 0 1 0-1.963 0 .982.982 0 0 0 1.963 0m-.982 0"/><text x="-57.349" y="42.28" stroke="none" font-family="cmmi10" font-size="10" transform="translate(68.974 -78.385)">R</text><path stroke="none" d="M-18.585-39.522a.982.982 0 1 0-1.963 0 .982.982 0 0 0 1.963 0m-.981 0"/><text x="-57.349" y="42.28" stroke="none" font-family="cmmi10" font-size="10" transform="translate(27.54 -85.334)">S</text><g fill="#00f" stroke="#00f"><text x="-57.349" y="42.28" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.833 -95.345)">p</text></g><g fill="#090" stroke="#090"><text x="-57.349" y="42.28" fill="#090" stroke="none" font-family="cmmi10" font-size="10" transform="translate(36.504 -94.69)">k</text></g><g fill="red" stroke="red"><text x="-57.349" y="42.28" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(81.043 -85.334)">r</text></g></g></svg>
</figure>

## d)

La distanza trovata è $2$, che è chiaramente un numero **razionale**.

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
