

**Problema:** [[Problemi/prob_2000_sessione_straordinaria_2000_problema1_23_1|2000 Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2000_sessione_straordinaria_2000_problema1_23|2000 Straordinaria — Problema 1]]

È assegnata, nel piano riferito ad assi cartesiani ortogonali $Oxy$, la curva $\gamma$ di equazione $y=1-\dfrac{1}{1+x^{2}}$.

## a)

Studio della funzione $f(x)=1-\dfrac{1}{1+x^{2}}=\dfrac{x^{2}}{1+x^{2}}$.

**Dominio:** $\mathbb{R}$.

**Simmetria:** $f(-x)=f(x)$, quindi la funzione è pari e il grafico è simmetrico rispetto all'asse $y$.

**Intersezioni con gli assi:** $f(0)=0$; l'unico punto in comune con gli assi è l'origine.

**Segno:** $f(x)\ge 0$ per ogni $x$ (si annulla solo in $x=0$).

**Limiti e asintoti:**
$$\lim_{x\to\pm\infty} f(x)=\lim_{x\to\pm\infty}\frac{x^{2}}{1+x^{2}}=1,$$
quindi la retta $y=1$ è asintoto orizzontale (mai raggiunto); non vi sono asintoti verticali né obliqui.

**Derivata prima:**
$$f'(x)=\frac{2x(1+x^{2})-x^{2}\cdot 2x}{(1+x^{2})^{2}}=\frac{2x}{(1+x^{2})^{2}}.$$
Si annulla in $x=0$: la funzione è decrescente per $x<0$ e crescente per $x>0$, dunque $x=0$ è punto di minimo assoluto, con $f(0)=0$.

**Derivata seconda:**
$$f''(x)=\frac{2(1-3x^{2})}{(1+x^{2})^{3}}.$$
Si ha $f''(x)\ge 0$ per $1-3x^{2}\ge 0$, cioè $-\dfrac{1}{\sqrt{3}}\le x\le \dfrac{1}{\sqrt{3}}$: il grafico volge la concavità verso l'alto in $\left(-\dfrac{1}{\sqrt{3}},\dfrac{1}{\sqrt{3}}\right)$ e verso il basso all'esterno. I punti di flesso sono $x=\pm\dfrac{1}{\sqrt{3}}$, di ordinata $y=\dfrac{1}{4}$.

**La curva simmetrica $\gamma_1$.** La simmetria rispetto alla retta $y=1$ si ottiene sostituendo $y\mapsto 2-y$. La simmetrica ha quindi equazione
$$y_{1}=2-f(x)=1+\frac{1}{1+x^{2}}=\frac{2+x^{2}}{1+x^{2}},$$
con massimo $y_{1}(0)=2$ e lo stesso asintoto orizzontale $y=1$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="391.418" height="161.156" viewBox="-72 -72 293.563 120.867"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 36.446h262.502"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M188.552 34.046c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="59.381" y="36.446" stroke="none" font-family="cmmi10" font-size="10" transform="translate(134.984 2.153)">x</text><path fill="none" d="M59.381 48.397V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M56.981-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="59.381" y="36.446" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -101.078)">y</text><g fill="gray" stroke="gray" stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-3.387h262.902"/><g fill="#000" stroke="#000"><g stroke="none" font-size="10"><text x="59.381" y="36.446" font-family="cmmi10" transform="translate(134.984 -37.584)">y</text><text x="67.421" y="36.446" font-family="cmr10" transform="translate(134.984 -37.584)">=</text><text x="77.976" y="36.446" font-family="cmr10" transform="translate(134.984 -37.584)">1</text></g></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-68.086.157 3.226.169 3.227.181 3.227.195 3.227.207 3.227.225 3.227.24 3.227.26 3.227.28 3.227.306 3.226.327 3.227.358 3.227.387 3.227.423 3.227.459 3.227.503 3.227.55 3.227.6 3.226.66 3.227.725 3.227.795 3.227.876 3.227.963 3.227 1.059 3.227 1.165 3.227 1.28 3.227 1.4 3.226 1.529 3.227 1.657 3.227 1.788 3.227 1.905 3.227 2.003 3.227 2.071L38.4 27.8l3.227 2.05 3.226 1.921 3.227 1.713 3.227 1.394 3.227.992 3.227.514 3.227.004 3.227-.514 3.227-.992 3.226-1.394 3.227-1.71 3.227-1.923 3.227-2.048 3.227-2.09 3.227-2.076 3.227-2.008 3.227-1.903 3.227-1.785 3.226-1.657 3.227-1.53 3.227-1.403 3.227-1.278 3.227-1.166 3.227-1.06 3.227-.964 3.227-.876 3.226-.797 3.227-.723 3.227-.66 3.227-.602 3.227-.55 3.227-.502 3.227-.46 3.227-.422 3.227-.388 3.226-.357 3.227-.328 3.227-.305 3.227-.28 3.227-.26 3.227-.242 3.227-.223 3.227-.208 3.226-.195 3.227-.181 3.227-.17"/><path fill="none" stroke="red" stroke-width=".8" d="m-68.086-6.93 3.226-.17 3.227-.18 3.227-.195 3.227-.208 3.227-.224 3.227-.242 3.227-.26 3.227-.28 3.227-.303 3.226-.33 3.227-.357 3.227-.387 3.227-.422 3.227-.462 3.227-.501 3.227-.55 3.227-.6 3.226-.661 3.227-.725 3.227-.795 3.227-.875 3.227-.964 3.227-1.059 3.227-1.164 3.227-1.279 3.227-1.4 3.226-1.53 3.227-1.657 3.227-1.784 3.227-1.909 3.227-2 3.227-2.075 3.227-2.091 3.227-2.047 3.226-1.928 3.227-1.71 3.227-1.393 3.227-.989 3.227-.521h3.227l3.227.518 3.227.988 3.226 1.394 3.227 1.705 3.227 1.928 3.227 2.047 3.227 2.096 3.227 2.07 3.227 2.004 3.227 1.904 3.227 1.789 3.226 1.657 3.227 1.53 3.227 1.4 3.227 1.278 3.227 1.165 3.227 1.06 3.227.964 3.227.874 3.226.796 3.227.725 3.227.66 3.227.603 3.227.549 3.227.502 3.227.46 3.227.423 3.227.387 3.226.358 3.227.33 3.227.303 3.227.28 3.227.26 3.227.242 3.227.224 3.227.208 3.226.195 3.227.18 3.227.17"/><path stroke="none" d="M61.201 36.446a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0M61.201-43.22a1.82 1.82 0 1 0-3.64 0 1.82 1.82 0 0 0 3.64 0m-1.82 0"/><g fill="#00f" stroke="#00f"><text x="59.381" y="36.446" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(100.701 -27.5)">°</text></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="59.381" y="36.446" font-family="cmmi10" font-size="10" transform="translate(98.736 -49.806)">°</text><text x="64.559" y="37.946" font-family="cmr7" font-size="7" transform="translate(98.736 -49.806)">1</text></g></g></g></svg>
</figure>

## b)

La distanza verticale fra le due curve è
$$y_{1}-f(x)=\frac{2+x^{2}}{1+x^{2}}-\frac{x^{2}}{1+x^{2}}=\frac{2}{1+x^{2}}.$$
La regione compresa fra $\gamma$ e $\gamma_1$ e limitata dalle rette $x=\pm k$ ha area (sfruttando la simmetria rispetto all'asse $y$)
$$S=\int_{-k}^{k}\frac{2}{1+x^{2}}\,dx=2\bigl[2\arctan x\bigr]_{0}^{k}=4\arctan k.$$
Il cerchio di raggio unitario ha area $\pi$. Imponendo $S=\pi$:
$$4\arctan k=\pi \Rightarrow \arctan k=\frac{\pi}{4} \Rightarrow k=1.$$

## c)

Il problema della quadratura del cerchio consiste nel costruire, con riga e compasso (cioè per via elementare), un quadrato avente la stessa area di un cerchio dato. Per un cerchio di raggio $1$ l'area è $\pi$, dunque il lato del quadrato equivalente dovrebbe essere $\sqrt{\pi}$. La costruzione è impossibile: poiché $\pi$ è un numero trascendente (Lindemann, 1882), $\sqrt{\pi}$ non è costruibile con riga e compasso. Insieme alla trisezione dell'angolo e alla duplicazione del cubo, la quadratura del cerchio è uno dei tre celebri "problemi classici" della geometria greca, rimasti irrisolti per via elementare fino alla dimostrazione moderna della loro impossibilità.

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
