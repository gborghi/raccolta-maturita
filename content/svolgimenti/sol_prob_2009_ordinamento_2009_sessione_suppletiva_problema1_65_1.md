

**Problema:** [[Problemi/prob_2009_ordinamento_2009_sessione_suppletiva_problema1_65_1|2009 Ordinamento Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_ordinamento_2009_sessione_suppletiva_problema1_65|2009 Ordinamento Suppletiva — Problema 1]]

I due segmenti adiacenti $OA$ e $AB$ sono uguali, di lunghezza $a$. Nello stesso semipiano rispetto alla retta $OB$ si tracciano le due semicirconferenze di diametri $OA$ e $OB$; per $O$ passa la tangente comune, sulla quale si prende $OC=a$. Da $O$ si conduce una semiretta che forma con $OB$ un angolo $\alpha$ e incontra le due semicirconferenze rispettivamente in $P$ e $Q$. Si chiede il rapporto
$$\frac{CP^2+PQ^2+QC^2}{2a^2},$$
espresso in funzione di $x=\arctan\alpha$ (cioè $x=\tan\alpha$), quindi lo studio della funzione ottenuta, i valori di $\alpha$ che rendono massimo e minimo il rapporto, e l'area della regione racchiusa fra l'asse delle ordinate, la curva e il suo asintoto.

## a) Calcolo del rapporto

Fissiamo il riferimento con origine in $O$, asse delle ascisse lungo $OB$ e asse delle ordinate lungo $OC$. La tangente comune in $O$ è perpendicolare a $OB$, quindi $C=(0;\,a)$.

La prima semicirconferenza ha diametro $OA=a$: un punto $P$ su di essa visto da $O$ soddisfa $OP=a\cos\alpha$, dunque
$$P=(a\cos^2\alpha;\ a\cos\alpha\sin\alpha).$$
La seconda ha diametro $OB=2a$, quindi $OQ=2a\cos\alpha$ e
$$Q=(2a\cos^2\alpha;\ 2a\cos\alpha\sin\alpha).$$

Calcoliamo i tre quadrati:
$$CP^2=a^2\cos^4\alpha+a^2\cos^2\alpha\sin^2\alpha-2a^2\cos\alpha\sin\alpha+a^2,$$
$$PQ^2=a^2\cos^4\alpha+a^2\cos^2\alpha\sin^2\alpha=a^2\cos^2\alpha,$$
$$QC^2=4a^2\cos^4\alpha+4a^2\cos^2\alpha\sin^2\alpha-4a^2\cos\alpha\sin\alpha+a^2.$$

Sommando e usando $\cos^2\alpha+\sin^2\alpha=1$:
$$CP^2+PQ^2+QC^2=6a^2\cos^2\alpha-6a^2\cos\alpha\sin\alpha+2a^2.$$

Quindi
$$\frac{CP^2+PQ^2+QC^2}{2a^2}=3\cos^2\alpha-3\cos\alpha\sin\alpha+1.$$

Scrivendo $1=\sin^2\alpha+\cos^2\alpha$ al numeratore e dividendo numeratore e denominatore per $\cos^2\alpha$:
$$\frac{4\cos^2\alpha-3\cos\alpha\sin\alpha+\sin^2\alpha}{\sin^2\alpha+\cos^2\alpha}=\frac{\tan^2\alpha-3\tan\alpha+4}{\tan^2\alpha+1}.$$

Posto $x=\tan\alpha$ si ottiene, come richiesto,
$$f(x)=\frac{x^2-3x+4}{x^2+1}.$$

Geometricamente $0\le\alpha<\dfrac{\pi}{2}$ (per $\alpha=\dfrac{\pi}{2}$ la tangente non esiste, ma il rapporto ha senso e vale $1$).

## b) Studio della funzione $f(x)$

**Dominio:** tutto $\mathbb{R}$, poiché $x^2+1>0$ per ogni $x$.

**Simmetrie:** $f(-x)=\dfrac{x^2+3x+4}{x^2+1}$ non coincide né con $f(x)$ né con $-f(x)$: la funzione non è né pari né dispari.

**Intersezioni con gli assi:** per $x=0$ si ha $y=4$; l'equazione $x^2-3x+4=0$ ha $\Delta=9-16<0$, quindi non vi sono intersezioni con l'asse $x$.

**Segno:** numeratore e denominatore sono sempre positivi, dunque $f(x)>0$ per ogni $x$.

**Limiti e asintoti:**
$$\lim_{x\to\pm\infty}\frac{x^2-3x+4}{x^2+1}=1,$$
quindi $y=1$ è asintoto orizzontale; non vi sono asintoti verticali (denominatore mai nullo) né obliqui. L'intersezione con l'asintoto si ottiene da $x^2-3x+4=x^2+1$, cioè $x=1$: $A=(1;1)$.

**Derivata prima:**
$$f'(x)=\frac{3x^2-6x-3}{(x^2+1)^2}=\frac{3\,(x^2-2x-1)}{(x^2+1)^2}.$$
Si ha $f'(x)\ge 0$ per $x\le 1-\sqrt{2}$ oppure $x\ge 1+\sqrt{2}$. Perciò $f$ è crescente per $x<1-\sqrt{2}$ e per $x>1+\sqrt{2}$, decrescente per $1-\sqrt{2}<x<1+\sqrt{2}$; quindi
$$x=1-\sqrt{2}\ \text{massimo assoluto},\qquad f(1-\sqrt{2})=\frac{5+3\sqrt{2}}{2}\cong 4{,}6,$$
$$x=1+\sqrt{2}\ \text{minimo assoluto},\qquad f(1+\sqrt{2})=\frac{5-3\sqrt{2}}{2}\cong 0{,}4.$$

**Derivata seconda:**
$$f''(x)=\frac{-6\,(x+1)(x^2-4x+1)}{(x^2+1)^3}.$$
Si ha $f''(x)\ge 0$ (concavità verso l'alto) quando $(x+1)(x^2-4x+1)\le 0$, cioè per $x\le -1$ e per $2-\sqrt{3}\le x\le 2+\sqrt{3}$. Vi sono quindi tre flessi:
$$x=-1,\ f(-1)=4\ (B);\quad x=2-\sqrt{3},\ f\cong 3\ (C);\quad x=2+\sqrt{3},\ f\cong 0{,}5\ (D).$$

Il grafico $\gamma$ è il seguente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="461.982" height="240.447" viewBox="-72 -72 346.486 180.336"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 91.646h315.426"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M241.476 89.246c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="55.967" y="91.646" stroke="none" font-family="cmmi10" font-size="10" transform="translate(191.321 2.153)">x</text><path fill="none" d="M55.967 103.026v-161.78"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M53.567-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="55.967" y="91.646" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -156.277)">y</text><path fill="none" d="M-57.844 89.37v4.552"/><g stroke="none" font-size="10"><text x="55.967" y="91.646" font-family="cmsy10" transform="translate(-120.2 12.254)">¡</text><text x="63.745" y="91.646" font-family="cmr10" transform="translate(-120.2 12.254)">4</text></g><path fill="none" d="M-.938 89.37v4.552"/><g stroke="none" font-size="10"><text x="55.967" y="91.646" font-family="cmsy10" transform="translate(-63.294 12.254)">¡</text><text x="63.745" y="91.646" font-family="cmr10" transform="translate(-63.294 12.254)">2</text></g><path fill="none" d="M112.873 89.37v4.552"/><text x="55.967" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(54.405 12.254)">2</text><path fill="none" d="M169.778 89.37v4.552"/><text x="55.967" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(111.311 12.254)">4</text><path fill="none" d="M226.684 89.37v4.552"/><text x="55.967" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(168.216 12.254)">6</text><path fill="none" d="M58.244 63.193H53.69"/><text x="55.967" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.81 -25.23)">1</text><path fill="none" d="M58.244 34.74H53.69"/><text x="55.967" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.81 -53.683)">2</text><path fill="none" d="M58.244 6.287H53.69"/><text x="55.967" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.81 -82.136)">3</text><path fill="none" d="M58.244-22.165H53.69"/><text x="55.967" y="91.646" stroke="none" font-family="cmr10" font-size="10" transform="translate(-10.81 -110.589)">4</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07 63.193h315.826"/><g fill="gray" stroke="none" font-size="10"><text x="55.967" y="91.646" font-family="cmmi10" transform="translate(191.321 -26.203)">y</text><text x="64.007" y="91.646" font-family="cmr10" transform="translate(191.321 -26.203)">=</text><text x="74.562" y="91.646" font-family="cmr10" transform="translate(191.321 -26.203)">1</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.844 38.088 2.874-.704 2.874-.742 2.873-.783 2.874-.826 2.874-.874 2.873-.925 2.874-.98 2.874-1.041 2.873-1.106 2.874-1.177 2.874-1.255 2.873-1.338 2.874-1.43 2.874-1.531 2.873-1.641 2.874-1.76 2.874-1.892 2.873-2.034 2.874-2.191 2.874-2.361 2.873-2.544L5.377 6.21l2.874-2.954L11.124.078l2.874-3.41 2.874-3.642 2.873-3.869 2.874-4.07 2.874-4.225 2.873-4.302 2.874-4.26 2.874-4.029 2.873-3.553 2.874-2.76 2.874-1.582 2.873.009 2.874 1.974 2.874 4.183 2.873 6.419 2.874 8.413 2.874 9.919 2.873 10.77 2.874 10.942 2.874 10.533 2.873 9.706 2.874 8.624 2.874 7.46 2.873 6.314 2.874 5.255 2.874 4.325 2.873 3.511 2.874 2.836 2.874 2.266 2.873 1.8 2.874 1.416 2.874 1.102 2.873.85 2.874.639 2.874.472 2.873.333 2.874.224 2.874.133 2.873.06h2.874l2.874-.045 2.873-.086 2.874-.116 2.874-.14 2.873-.16 2.874-.175 2.874-.186 2.873-.196 2.874-.201 2.874-.207 2.873-.21 2.874-.21 2.874-.211 2.873-.211 2.874-.21 2.874-.208 2.873-.207 2.874-.203 2.874-.201 2.873-.198 2.874-.195 2.874-.19 2.873-.188 2.874-.185 2.874-.18 2.873-.177 2.874-.174 2.874-.17 2.873-.167 2.874-.163 2.874-.16 2.873-.156 2.874-.152 2.874-.15 2.873-.147"/><path stroke="none" d="M57.967-22.165a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g stroke="none" font-size="10"><text x="55.967" y="91.646" font-family="cmr10" transform="translate(3.533 -119.844)">(0</text><text x="64.856" y="91.646" font-family="cmmi10" transform="translate(3.533 -119.844)">;</text><text x="69.301" y="91.646" font-family="cmr10" transform="translate(3.533 -119.844)">4)</text></g><g fill="red" stroke="red"><path stroke="none" d="M45.988-39.806a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="55.967" y="91.646" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(-21.085 -134.984)">max</text></g><g fill="red" stroke="red"><path stroke="none" d="M126.452 80.862a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="55.967" y="91.646" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.352 -.572)">min</text></g><path stroke="none" d="M85.92 63.193a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="55.967" y="91.646" stroke="none" font-family="cmmi10" font-size="10" transform="translate(31.986 -31.986)">A</text></g></svg>
</figure>

## c) Massimo e minimo del rapporto

Poiché $x=\tan\alpha$ con $0\le\alpha<\dfrac{\pi}{2}$, occorre studiare $f$ per $0\le x<+\infty$. Su questo intervallo $f$ decresce da $f(0)=4$ fino al minimo in $x=1+\sqrt{2}$, poi cresce tendendo a $1$.

Il **massimo** del rapporto vale $4$ e si ha per $x=0$, cioè $\tan\alpha=0$, dunque $\alpha=0$.

Il **minimo** vale $f(1+\sqrt{2})=\dfrac{5-3\sqrt{2}}{2}\cong 0{,}4$ e si ha per $x=1+\sqrt{2}$, cioè $\tan\alpha=1+\sqrt{2}$, da cui
$$\alpha=\arctan\!\big(1+\sqrt{2}\big)=67^\circ 30'=\frac{3\pi}{8}.$$

## d) Area della regione

La regione richiesta è delimitata dall'asse delle ordinate ($x=0$), dalla curva $\gamma$ e dall'asintoto $y=1$, che si incontrano per $x=1$. L'area è quindi
$$\text{Area}=\int_0^1\big[f(x)-1\big]\,dx,\qquad f(x)-1=\frac{-3x+3}{x^2+1}.$$

Separando i due contributi:
$$\int_0^1\frac{-3x+3}{x^2+1}\,dx=-\frac{3}{2}\int_0^1\frac{2x}{x^2+1}\,dx+3\int_0^1\frac{1}{x^2+1}\,dx.$$

Da cui
$$\text{Area}=-\frac{3}{2}\Big[\ln(x^2+1)\Big]_0^1+3\Big[\arctan x\Big]_0^1=-\frac{3}{2}\ln 2+3\cdot\frac{\pi}{4}.$$

In definitiva
$$\text{Area}=\frac{3\pi}{4}-\frac{3}{2}\ln 2\ \cong 1{,}32\ \ u^2.$$

*Fonte:* [📄 PDF p.65](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
