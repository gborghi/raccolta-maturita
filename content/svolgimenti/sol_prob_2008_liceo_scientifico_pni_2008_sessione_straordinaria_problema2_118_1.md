

**Problema:** [[Problemi/prob_2008_liceo_scientifico_pni_2008_sessione_straordinaria_problema2_118_1|2008 PNI Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_liceo_scientifico_pni_2008_sessione_straordinaria_problema2_118|2008 PNI Straordinaria — Problema 2]]

Si consideri la funzione

$$
f(x)=\begin{cases} e^{1/(x^2-1)}, & \text{se } |x|<1,\\[2pt] 0, & \text{se } |x|\ge 1. \end{cases}
$$

## a) Continuità nei punti in cui $|x|=1$

Studiamo il comportamento nei due punti $x=\pm 1$.

Per $x\to 1^-$ si ha $x^2-1\to 0^-$, dunque $\dfrac{1}{x^2-1}\to-\infty$ e quindi $e^{1/(x^2-1)}\to 0$. Poiché $f(1)=0$, la funzione è continua in $x=1$.

Analogamente, per $x\to(-1)^+$ risulta $x^2-1\to 0^-$ e $e^{1/(x^2-1)}\to 0=f(-1)$: la funzione è continua anche in $x=-1$.

Per $x\to 1^+$ e per $x\to(-1)^-$ la funzione vale costantemente $0$, quindi i limiti valgono $0$. La funzione è dunque **continua ovunque**.

## b) Studio della funzione e grafico $\gamma$

**Dominio:** $\mathbb{R}$.

**Parità:** $f(-x)=f(x)$, quindi la funzione è pari (grafico simmetrico rispetto all'asse $y$).

**Segno:** per $|x|\ge 1$ si ha $f(x)=0$; per $|x|<1$ si ha $f(x)=e^{1/(x^2-1)}>0$.

**Derivata prima** (per $|x|<1$):

$$
f'(x)=e^{1/(x^2-1)}\cdot\frac{-2x}{(x^2-1)^2}.
$$

Nell'intervallo $(-1,1)$ il fattore esponenziale e $(x^2-1)^2$ sono positivi, quindi il segno di $f'(x)$ è quello di $-2x$: $f'(x)=0$ solo per $x=0$. La funzione è **crescente** su $(-1,0)$ e **decrescente** su $(0,1)$, per cui $x=0$ è punto di **massimo assoluto**, con

$$
f(0)=e^{1/(0-1)}=e^{-1}=\frac{1}{e}\approx 0{,}368.
$$

La curva presenta il caratteristico profilo "a campana" a supporto compatto $[-1,1]$: è nulla al di fuori di $[-1,1]$ e regolare ovunque (è la classica funzione *bump*).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="442.202" height="145.604" viewBox="-72 -72 331.652 109.203"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.87 22.789H246.4"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M244.52 20.389c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="87.465" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(162.868 2.153)">x</text><path fill="none" d="M87.465 36.447v-95.201"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M85.065-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="87.465" y="22.789" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -87.42)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-71.87 22.789h68.286M-.852 22.786h1.984l1.984-.143 1.984-.547 1.984-1.133 1.983-1.74L11.051 17l1.984-2.576 1.984-2.819 1.984-2.92 1.984-2.972 1.984-2.954 1.984-2.886 1.984-2.8 1.984-2.715 1.984-2.579 1.983-2.475 1.984-2.339 1.984-2.22 1.984-2.101 1.984-1.98 1.984-1.863 1.984-1.758 1.984-1.639 1.984-1.536 1.984-1.451 1.984-1.334 1.983-1.264 1.984-1.159 1.984-1.076 1.984-1.008 1.984-.906 1.984-.852 1.984-.753 1.984-.7 1.984-.63 1.984-.564 1.984-.497 1.983-.425 1.984-.36 1.984-.307 1.984-.24 1.984-.169 1.984-.138 1.984-.05h1.984l1.984.05 1.984.12 1.983.172 1.984.255 1.984.29 1.984.36 1.984.442 1.984.48 1.984.562 1.984.615 1.984.7 1.984.769 1.984.836 1.983.906 1.984 1.009 1.984 1.073 1.984 1.162 1.984 1.247 1.984 1.35 1.984 1.432 1.984 1.537 1.984 1.641 1.984 1.74 1.984 1.863 1.984 1.98 1.983 2.1 1.984 2.203 1.984 2.34 1.984 2.477 1.984 2.576 1.984 2.699 1.984 2.8 1.984 2.904 1.984 2.936 1.984 2.972 1.984 2.936 1.983 2.8 1.984 2.598 1.984 2.235 1.984 1.758 1.984 1.156 1.984.566 1.984.153h1.984M178.514 22.789H246.8"/><path stroke="none" d="M90.345-40.018c0-2.983-1.29-5.4-2.88-5.4s-2.88 2.417-2.88 5.4c0 2.982 1.29 5.4 2.88 5.4s2.88-2.418 2.88-5.4m-2.88 0"/><g stroke="none"><text x="88.665" y="18.852" font-family="cmr7" font-size="7" transform="translate(3.533 -69.789)">1</text><path d="M92.198-49.7h3.986v.4h-3.986z"/><text x="88.761" y="26.237" font-family="cmmi7" font-size="7" transform="translate(3.533 -69.789)">e</text></g><g stroke="none" font-size="10"><text x="87.465" y="22.789" font-family="cmsy10" transform="translate(-97.438 9.977)">¡</text><text x="95.243" y="22.789" font-family="cmr10" transform="translate(-97.438 9.977)">1</text></g><text x="87.465" y="22.789" stroke="none" font-family="cmr10" font-size="10" transform="translate(88.549 9.977)">1</text></g></svg>
</figure>

## c) Normale a $\gamma$ nel punto di ascissa $x=\dfrac{1}{\sqrt{2}}$

Posto $x_0=\dfrac{1}{\sqrt{2}}$, si ha $x_0^2=\dfrac{1}{2}$ e $x_0^2-1=-\dfrac{1}{2}$, quindi

$$
f(x_0)=e^{1/(-1/2)}=e^{-2}.
$$

Calcoliamo la pendenza della tangente:

$$
f'(x_0)=e^{-2}\cdot\frac{-2/\sqrt{2}}{(1/4)^{}}\cdot\frac{1}{1}=e^{-2}\cdot(-4\sqrt{2})=-4\sqrt{2}\,e^{-2}.
$$

Dunque $m_t=-4\sqrt{2}\,e^{-2}$, e la pendenza della normale è

$$
m_n=-\frac{1}{m_t}=\frac{1}{4\sqrt{2}\,e^{-2}}=\frac{e^2}{4\sqrt{2}}=\frac{e^2\sqrt{2}}{8}.
$$

L'equazione della normale è pertanto

$$
\boxed{\,y-e^{-2}=\frac{e^2\sqrt{2}}{8}\left(x-\frac{1}{\sqrt{2}}\right).\,}
$$

## d) Area approssimata (integrazione numerica)

Per la simmetria pari della funzione, l'area compresa tra $\gamma$ e l'asse $x$ è

$$
A=2\int_0^1 e^{1/(x^2-1)}\,dx.
$$

Applichiamo il **metodo dei trapezi** con $n=4$ sottointervalli di $[0,1]$, passo $h=0{,}25$:

$$
\begin{array}{c|ccccc}
x_k & 0 & 0{,}25 & 0{,}5 & 0{,}75 & 1 \\ \hline
f(x_k) & e^{-1}\approx 0{,}3679 & e^{-16/15}\approx 0{,}3445 & e^{-4/3}\approx 0{,}2636 & e^{-16/7}\approx 0{,}1025 & 0
\end{array}
$$

$$
\int_0^1 f(x)\,dx\approx\frac{0{,}25}{2}\big(0{,}3679+2\cdot 0{,}3445+2\cdot 0{,}2636+2\cdot 0{,}1025+0\big)=0{,}125\cdot 1{,}7891\approx 0{,}2236.
$$

Quindi

$$
A\approx 2\cdot 0{,}2236\approx\boxed{0{,}447\ \text{u}^2}.
$$

*Fonte:* [📄 PDF p.118](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
