

**Problema:** [[Problemi/prob_2009_liceo_scientifico_ordinamento_2009_sessione_straor_problema2_111_1|2009 Ordinamento Straordinaria — Problema 2 — Problema 2]] · **Prova:** [[Prove/2009_liceo_scientifico_ordinamento_2009_sessione_straor_problema2_111|2009 Ordinamento Straordinaria — Problema 2]]

Sia $f(x)=a\cos^3 x+b\cos x+c$, con $x\in\mathbb{R}$.

## a) Determinazione di $a$, $b$, $c$

Imponiamo le tre condizioni richieste:
$$f\!\left(\tfrac{\pi}{2}\right)=\tfrac{2}{3},\qquad f(\pi)=\tfrac{4}{3},\qquad f''(\pi)=0.$$

Poiché $\cos\tfrac{\pi}{2}=0$, la prima condizione dà subito
$$f\!\left(\tfrac{\pi}{2}\right)=c=\tfrac{2}{3}.$$

Essendo $\cos\pi=-1$, la seconda condizione diventa
$$f(\pi)=-a-b+c=\tfrac{4}{3}\ \Rightarrow\ -a-b+\tfrac{2}{3}=\tfrac{4}{3}\ \Rightarrow\ a+b=-\tfrac{2}{3}.$$

Per la terza condizione calcoliamo le derivate:
$$f'(x)=-3a\cos^2 x\,\sin x-b\sin x,$$
$$f''(x)=6a\cos x\,\sin^2 x-3a\cos^3 x-b\cos x.$$
In $x=\pi$ (dove $\sin\pi=0$, $\cos\pi=-1$):
$$f''(\pi)=3a+b=0\ \Rightarrow\ b=-3a.$$

Sostituendo $b=-3a$ in $a+b=-\tfrac{2}{3}$ si ottiene $-2a=-\tfrac{2}{3}$, cioè
$$a=\tfrac{1}{3},\qquad b=-1,\qquad c=\tfrac{2}{3}.$$

La funzione cercata è dunque
$$f(x)=\tfrac{1}{3}\cos^3 x-\cos x+\tfrac{2}{3}.$$

## b) Studio della funzione su $[0;\,2\pi]$

**Dominio e continuità.** La funzione è definita e continua su tutto $[0;\,2\pi]$; agli estremi vale
$$f(0)=f(2\pi)=\tfrac{1}{3}-1+\tfrac{2}{3}=0.$$

**Intersezioni con gli assi.** Per $x=0$ si ha $y=0$. Ponendo $y=0$:
$$\tfrac{1}{3}\cos^3 x-\cos x+\tfrac{2}{3}=0\ \Rightarrow\ \cos^3 x-3\cos x+2=0.$$
Posto $t=\cos x$, l'equazione $t^3-3t+2=0$ si fattorizza (regola di Ruffini con radice $t=1$) come
$$(\cos x-1)^2(\cos x+2)=0.$$
Poiché $\cos x+2>0$ sempre, resta solo $\cos x=1$, cioè $x=0$ e $x=2\pi$.

**Segno.** Essendo $f(x)=\tfrac{1}{3}(\cos x-1)^2(\cos x+2)$, con $(\cos x-1)^2\ge 0$ e $\cos x+2>0$, risulta
$$f(x)\ge 0\quad\text{per ogni }x.$$

**Asintoti.** La funzione è continua e limitata su un intervallo chiuso: non vi sono asintoti.

**Derivata prima.** Con $a=\tfrac13$, $b=-1$:
$$f'(x)=-\cos^2 x\,\sin x+\sin x=\sin x\,(1-\cos^2 x)=\sin^3 x.$$
Dunque $f'(x)\ge 0\iff \sin x\ge 0\iff 0\le x\le\pi$. La funzione è quindi **crescente** su $(0;\pi)$ e **decrescente** su $(\pi;2\pi)$; in $x=\pi$ ha un punto di **massimo** relativo e assoluto, con ordinata
$$f(\pi)=\tfrac{4}{3}.$$

**Derivata seconda.**
$$f''(x)=2\cos x\,\sin^2 x-\cos^3 x+\cos x=\cos x\,(2\sin^2 x-\cos^2 x+1)=3\sin^2 x\,\cos x.$$
Poiché $3\sin^2 x\ge 0$, il segno dipende da $\cos x$:
$$f''(x)\ge 0\iff \cos x\ge 0\iff 0\le x\le\tfrac{\pi}{2}\ \ \text{oppure}\ \ \tfrac{3\pi}{2}\le x\le 2\pi.$$
Il grafico volge la concavità verso l'alto su $\left(0;\tfrac{\pi}{2}\right)$ e su $\left(\tfrac{3\pi}{2};2\pi\right)$; i punti
$$F_1=\left(\tfrac{\pi}{2};\tfrac{2}{3}\right),\qquad F_2=\left(\tfrac{3\pi}{2};\tfrac{2}{3}\right)$$
sono punti di **flesso**, entrambi di ordinata $\tfrac{2}{3}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="326.561" height="175.511" viewBox="-72 -72 244.921 131.634"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.537 40.6h231.206"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M157.79 38.2c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-59.018" y="40.601" stroke="none" font-family="cmmi10" font-size="10" transform="translate(222.62 7.839)">x</text><path fill="none" d="M-59.018 49.99V-65.412"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.418-63.532c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-59.018" y="40.601" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-8.795 -105.232)">y</text><path fill="none" stroke="#00f" stroke-width="1.2" d="M-59.018 40.6h2.829l1.415-.004 1.414-.011 1.415-.023 1.414-.043 1.415-.069 1.415-.105 1.414-.15 1.415-.204 1.414-.27 1.415-.347 1.414-.436 1.415-.532 1.415-.64 1.414-.76 1.415-.883 1.414-1.018 1.415-1.155 1.414-1.3 1.415-1.447 1.415-1.593 1.414-1.74 1.415-1.886 1.414-2.024 1.415-2.16 1.414-2.282 1.415-2.4 1.415-2.505 1.414-2.598 1.415-2.674 1.414-2.737 1.415-2.786 1.414-2.814 1.415-2.828 1.415-2.823 1.414-2.801 1.415-2.765 1.414-2.708 1.415-2.638 1.414-2.554L.394-20.57l1.415-2.344 1.414-2.224 1.415-2.093 1.414-1.957 1.415-1.814L8.88-32.67l1.415-1.521 1.415-1.374 1.414-1.23 1.415-1.087 1.414-.95 1.415-.823 1.414-.699 1.415-.586 1.415-.484 1.414-.39 1.415-.309 1.414-.236 1.415-.176 1.414-.126 1.415-.086 1.414-.056 1.415-.032 1.415-.017 1.414-.007 1.415-.002h4.243l1.415.002 1.415.007 1.414.017 1.415.031 1.414.055 1.415.086 1.414.125 1.415.176 1.415.235 1.414.306 1.415.389 1.414.481 1.415.585 1.414.698 1.415.819 1.415.948 1.414 1.085 1.415 1.226 1.414 1.371 1.415 1.519 1.414 1.665 1.415 1.81 1.415 1.956 1.414 2.09 1.415 2.222 1.414 2.342 1.415 2.454 1.414 2.551 1.415 2.637 1.415 2.707 1.414 2.763L86.683-4.7l1.414 2.823L89.512.949l1.414 2.816 1.415 2.785 1.415 2.739 1.414 2.677 1.415 2.598 1.414 2.506 1.415 2.403 1.414 2.286 1.415 2.161 1.415 2.027 1.414 1.887 1.415 1.745 1.414 1.595 1.415 1.45 1.414 1.302 1.415 1.159 1.415 1.02 1.414.885 1.415.762 1.414.643 1.415.534 1.414.437 1.415.348 1.415.273 1.414.205 1.415.151 1.414.105 1.415.07 1.414.043 1.415.024 1.415.011 1.414.004h2.829"/><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M39.308 40.6v-83.458M-9.855 40.6V-1.131M88.472 40.6V-1.131"/><path stroke="none" d="M41.068-42.858c0-1.944-.787-3.52-1.76-3.52-.972 0-1.76 1.576-1.76 3.52s.788 3.52 1.76 3.52c.973 0 1.76-1.576 1.76-3.52m-1.76 0"/><g stroke="none"><text x="-59.018" y="40.601" font-family="cmmi10" font-size="10" transform="translate(101.86 -90.492)">M</text><text x="-46.56" y="32.501" font-family="cmex10" font-size="10" transform="translate(101.86 -90.492)">¡</text><text x="-41.976" y="40.601" font-family="cmmi10" font-size="10" transform="translate(101.86 -90.492)">¼</text><text x="-35.917" y="40.601" font-family="cmmi10" font-size="10" transform="translate(101.86 -90.492)">;</text><text x="-30.273" y="36.664" font-family="cmr7" font-size="7" transform="translate(101.86 -90.492)">4</text><path d="M71.586-52.591h3.986v.4h-3.986z"/><text x="-30.273" y="44.049" font-family="cmr7" font-size="7" transform="translate(101.86 -90.492)">3</text><text x="-25.087" y="32.501" font-family="cmex10" font-size="10" transform="translate(101.86 -90.492)">¢</text></g><path stroke="none" d="M-8.095-1.132c0-1.944-.788-3.52-1.76-3.52s-1.76 1.576-1.76 3.52.788 3.52 1.76 3.52 1.76-1.576 1.76-3.52m-1.76 0"/><g stroke="none"><text x="-59.018" y="40.601" font-family="cmmi10" font-size="10" transform="translate(34.714 -46.766)">F</text><text x="-52.587" y="42.101" font-family="cmr7" font-size="7" transform="translate(34.714 -46.766)">1</text></g><path stroke="none" d="M90.232-1.132c0-1.944-.788-3.52-1.76-3.52s-1.76 1.576-1.76 3.52.788 3.52 1.76 3.52 1.76-1.576 1.76-3.52m-1.76 0"/><g stroke="none"><text x="-59.018" y="40.601" font-family="cmmi10" font-size="10" transform="translate(151.023 -46.766)">F</text><text x="-52.587" y="42.101" font-family="cmr7" font-size="7" transform="translate(151.023 -46.766)">2</text></g><path stroke="none" d="M-57.478 40.6c0-1.7-.69-3.08-1.54-3.08s-1.54 1.38-1.54 3.08c0 1.702.69 3.08 1.54 3.08s1.54-1.378 1.54-3.08M139.17499999999998 40.6c0-1.7-.69-3.08-1.54-3.08s-1.54 1.38-1.54 3.08c0 1.702.69 3.08 1.54 3.08s1.54-1.378 1.54-3.08m-1.54 0"/><g stroke="none"><text x="-57.818" y="36.664" font-family="cmmi7" font-size="7" transform="translate(45.5 10.484)">¼</text><path d="M-12.319 48.385h4.927v.4h-4.927z"/><text x="-57.347" y="44.049" font-family="cmr7" font-size="7" transform="translate(45.5 10.484)">2</text></g><text x="-59.018" y="40.601" stroke="none" font-family="cmmi10" font-size="10" transform="translate(95.297 9.09)">¼</text><g stroke="none"><text x="-57.818" y="36.664" font-family="cmr7" font-size="7" transform="translate(141.833 11.981)">3</text><text x="-53.832" y="36.664" font-family="cmmi7" font-size="7" transform="translate(141.833 11.981)">¼</text><path d="M84.015 49.882h8.914v.4h-8.914z"/><text x="-55.354" y="44.049" font-family="cmr7" font-size="7" transform="translate(141.833 11.981)">2</text></g><g stroke="none" font-size="10"><text x="-59.018" y="40.601" font-family="cmr10" transform="translate(191.123 9.977)">2</text><text x="-54.018" y="40.601" font-family="cmmi10" transform="translate(191.123 9.977)">¼</text></g><g stroke="none"><text x="-57.818" y="36.664" font-family="cmr7" font-size="7" transform="translate(-9.92 -39.233)">2</text><path d="M-67.737-1.332h3.986v.4h-3.986z"/><text x="-57.818" y="44.049" font-family="cmr7" font-size="7" transform="translate(-9.92 -39.233)">3</text></g><g stroke="none"><text x="-57.818" y="36.664" font-family="cmr7" font-size="7" transform="translate(-9.92 -80.959)">4</text><path d="M-67.737-43.058h3.986v.4h-3.986z"/><text x="-57.818" y="44.049" font-family="cmr7" font-size="7" transform="translate(-9.92 -80.959)">3</text></g></g></svg>
</figure>

## c) Rette tangenti nei punti di flesso

I coefficienti angolari sono i valori di $f'(x)=\sin^3 x$ nei flessi:
$$m_1=f'\!\left(\tfrac{\pi}{2}\right)=\sin^3\tfrac{\pi}{2}=1,\qquad m_2=f'\!\left(\tfrac{3\pi}{2}\right)=\sin^3\tfrac{3\pi}{2}=-1.$$

Tangente in $F_1$:
$$y-\tfrac{2}{3}=1\cdot\left(x-\tfrac{\pi}{2}\right)\ \Rightarrow\ y=x+\tfrac{2}{3}-\tfrac{\pi}{2}.$$

Tangente in $F_2$:
$$y-\tfrac{2}{3}=-1\cdot\left(x-\tfrac{3\pi}{2}\right)\ \Rightarrow\ y=-x+\tfrac{2}{3}+\tfrac{3\pi}{2}.$$

## d) Area della regione tra $\gamma$ e l'asse delle ascisse

Poiché $f(x)\ge 0$ su $[0;2\pi]$, l'area è
$$\text{Area}=\int_0^{2\pi}\!\left(\tfrac{1}{3}\cos^3 x-\cos x+\tfrac{2}{3}\right)dx=\frac{1}{3}\int_0^{2\pi}\!\left(\cos^3 x-3\cos x+2\right)dx.$$

Una primitiva di $\cos^3 x$:
$$\int\cos^3 x\,dx=\int\cos x\,(1-\sin^2 x)\,dx=\sin x-\tfrac{1}{3}\sin^3 x+C.$$

Quindi
$$\text{Area}=\frac{1}{3}\Big[\,\sin x-\tfrac{1}{3}\sin^3 x-3\sin x+2x\,\Big]_0^{2\pi}=\frac{1}{3}\Big[-2\sin x-\tfrac{1}{3}\sin^3 x+2x\Big]_0^{2\pi}.$$

Poiché $\sin 2\pi=\sin 0=0$, resta
$$\text{Area}=\frac{1}{3}\,(4\pi)=\frac{4}{3}\pi\cong 4{,}19\ \text{u}^2.$$

*Fonte:* [📄 PDF p.111](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
