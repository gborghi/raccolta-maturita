

**Problema:** [[Problemi/prob_2009_ordinamento_2009_problema1_6_1|2009 Ordinamento — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_ordinamento_2009_problema1_6|2009 Ordinamento — Problema 1]]

È assegnato il settore circolare $AOB$ di raggio $r$ e ampiezza $x$ (misurati rispettivamente in metri e radianti). Si prova che l'area compresa fra l'arco e la corda $AB$ è $S(x)=\dfrac{r^2}{2}(x-\sin x)$; se ne studia l'andamento; si minimizza il perimetro del settore a parità d'area; infine si calcola il volume di un solido a sezioni quadrate avente il settore per base.

## 1)

L'area del settore circolare è
$$A_{\text{set}} = \frac{1}{2}\, r^2 x,$$
mentre il triangolo $AOB$, che ha i due lati $r$ compresi nell'angolo $x$, ha area
$$A_{\text{tri}} = \frac{1}{2}\, r^2 \sin x.$$

Il segmento circolare, compreso fra l'arco e la corda $AB$, ha dunque area
$$S(x) = A_{\text{set}} - A_{\text{tri}} = \frac{r^2}{2}\,(x - \sin x), \qquad x \in [0,\, 2\pi].$$

## 2)

Posto $r=1$ si ha
$$S(x) = \frac{1}{2}(x - \sin x), \qquad x \in [0,\, 2\pi].$$

Derivata prima:
$$S'(x) = \frac{1}{2}(1 - \cos x) \ge 0 \quad \text{per ogni } x,$$
con uguaglianza solo in $x=0$ e $x=2\pi$. La funzione è quindi **strettamente crescente** su tutto $[0,\, 2\pi]$, con tangente orizzontale agli estremi; inoltre $S(0)=0$ e $S(2\pi)=\pi$.

Derivata seconda:
$$S''(x) = \frac{1}{2}\sin x,$$
positiva per $0 < x < \pi$ (concavità verso l'alto) e negativa per $\pi < x < 2\pi$ (concavità verso il basso). In $x=\pi$ c'è un flesso a tangente obliqua, di ordinata $S(\pi)=\dfrac{\pi}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="262.197" height="155.066" viewBox="-72 -72 196.648 116.3"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-64.754 30.33h176.15"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M109.517 27.93c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-57.499" y="30.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(172.828 2.153)">x</text><path fill="none" d="M-57.499 37.586v-96.34"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.898-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.499" y="30.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -94.962)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-57.499 30.33h1.924l1.923-.008 1.924-.02 1.923-.036 1.923-.061 1.924-.091 1.923-.126 1.924-.167 1.923-.211 1.924-.262 1.923-.317 1.923-.375 1.924-.437 1.923-.503 1.924-.572 1.923-.643 1.923-.716 1.924-.79 1.923-.867 1.924-.942 1.923-1.019 1.923-1.095 1.924-1.17 1.923-1.244 1.924-1.316 1.923-1.387 1.923-1.452 1.924-1.518 1.923-1.578L.204 9.772l1.923-1.687L4.05 6.35l1.924-1.777 1.923-1.816L9.821.909l1.923-1.875 1.923-1.896 1.924-1.91 1.923-1.921 1.924-1.923 1.923-1.92 1.923-1.91 1.924-1.897 1.923-1.875 1.924-1.848 1.923-1.816 1.923-1.778 1.924-1.735 1.923-1.687 1.924-1.635 1.923-1.578 1.924-1.518 1.923-1.454 1.923-1.386 1.924-1.317 1.923-1.244 1.924-1.17 1.923-1.096 1.923-1.02 1.924-.942 1.923-.867 1.924-.79 1.923-.717 1.923-.643 1.924-.572 1.923-.504 1.924-.438 1.923-.375 1.923-.317 1.924-.262 1.923-.212 1.924-.167 1.923-.126 1.923-.09 1.924-.062 1.923-.037 1.924-.02 1.923-.007h1.923"/><g fill="red" stroke="red"><path d="M19.756-7.66a1.275 1.275 0 1 0-2.55 0 1.275 1.275 0 0 0 2.55 0Zm-1.275 0"/><text x="-57.499" y="30.33" fill="red" stroke="none" font-family="cmr10" font-size="10" transform="translate(49.558 -41.523)">°esso</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M18.481 30.33V-7.66M94.46 30.33v-75.98"/><text x="-57.499" y="30.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(72.95 7.839)">¼</text><g stroke="none" font-size="10"><text x="-57.499" y="30.33" font-family="cmr10" transform="translate(146.43 9.977)">2</text><text x="-52.498" y="30.33" font-family="cmmi10" transform="translate(146.43 9.977)">¼</text></g><text x="-57.499" y="30.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-9.592 -73.827)">¼</text><text x="-57.499" y="30.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text></g></svg>
</figure>

## 3)

Fissata l'area del settore pari a $100\ \text{m}^2$:
$$\frac{1}{2}\, r^2 x = 100 \quad \Rightarrow \quad x = \frac{200}{r^2}.$$

Il perimetro del settore $AOB$ (due raggi più l'arco $rx$) è
$$P(r) = 2r + r x = 2r + \frac{200}{r}.$$

Derivando e annullando:
$$P'(r) = 2 - \frac{200}{r^2} = 0 \quad \Rightarrow \quad r^2 = 100 \quad \Rightarrow \quad r = 10\ \text{m}.$$

Poiché $P''(r) = \dfrac{400}{r^3} > 0$, si tratta di un minimo. L'angolo corrispondente è
$$x = \frac{200}{100} = 2\ \text{rad} = 2 \cdot \frac{180^\circ}{\pi} \approx 114^\circ 35' \approx 114^\circ.$$

$$\boxed{\,r = 10\ \text{m}, \qquad x = 2\ \text{rad} \approx 114^\circ.\,}$$

## 4)

Poniamo l'origine in $O$ con $OB$ lungo l'asse $t$; il settore, con $r=2$ e $x=\dfrac{\pi}{3}$, è la regione $\{\,0 \le \theta \le \tfrac{\pi}{3},\ 0 \le \rho \le 2\,\}$ situata sopra $OB$. Una sezione con un piano ortogonale a $OB$, a distanza $t$ da $O$, è un quadrato il cui lato uguaglia l'altezza $y(t)$ del settore in quel punto. Si distinguono due tratti:

- per $0 \le t \le 2\cos\dfrac{\pi}{3} = 1$ il bordo superiore è il lato $OA$, di equazione $y = t\tan\dfrac{\pi}{3} = t\sqrt{3}$;
- per $1 \le t \le 2$ il bordo superiore è l'arco di raggio $2$, di equazione $y = \sqrt{4 - t^2}$.

Ogni sezione ha area $y(t)^2$, quindi
$$V = \int_0^1 \left(t\sqrt{3}\right)^2 dt + \int_1^2 \left(4 - t^2\right) dt = \int_0^1 3t^2\, dt + \int_1^2 (4 - t^2)\, dt.$$

Calcolando i due integrali:
$$\int_0^1 3t^2\, dt = \left[t^3\right]_0^1 = 1,$$
$$\int_1^2 (4 - t^2)\, dt = \left[4t - \frac{t^3}{3}\right]_1^2 = \left(8 - \frac{8}{3}\right) - \left(4 - \frac{1}{3}\right) = \frac{5}{3}.$$

Pertanto
$$\boxed{\,V = 1 + \frac{5}{3} = \frac{8}{3}.\,}$$

*Fonte:* [📄 PDF p.6](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
