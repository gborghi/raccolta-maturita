

**Problema:** [[Problemi/prob_2008_pni_2008_sessione_suppletiva_problema1_80_1|2008 PNI Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2008_pni_2008_sessione_suppletiva_problema1_80|2008 PNI Suppletiva — Problema 1]]

Sono dati un cerchio di raggio $r$ e una sua corda $AB$ uguale al lato del quadrato inscritto. Detto $P$ un punto della circonferenza sull'arco maggiore di estremi $A$ e $B$, si studia il rapporto

$$\frac{\overline{PA}^2+\overline{PB}^2}{\overline{AB}^2}$$

e lo si esprime in funzione di $X=\tan(\widehat{PAB})$.

## a) Espressione del rapporto

Il lato del quadrato inscritto in un cerchio di raggio $r$ misura $\overline{AB}=r\sqrt{2}$. Tale corda sottende un arco di $90^\circ$, quindi l'angolo alla circonferenza $\widehat{APB}$ (con $P$ sull'arco maggiore) è costante e vale $\dfrac{\pi}{4}$.

Posto $x=\widehat{PAB}$, nel triangolo $APB$ l'angolo in $B$ vale $\dfrac{3\pi}{4}-x$, con la limitazione geometrica $0<x<\dfrac{\pi}{4}$. Per il teorema della corda:

$$\overline{PA}=2r\sin\!\left(\tfrac{3\pi}{4}-x\right),\qquad \overline{PB}=2r\sin x .$$

Poiché $\overline{AB}^2=2r^2$, il rapporto diventa

$$\frac{\overline{PA}^2+\overline{PB}^2}{\overline{AB}^2}=\frac{4r^2\sin^2\!\left(\tfrac{3\pi}{4}-x\right)+4r^2\sin^2 x}{2r^2}=2\sin^2\!\left(\tfrac{3\pi}{4}-x\right)+2\sin^2 x .$$

Essendo $\sin\!\left(\tfrac{3\pi}{4}-x\right)=\tfrac{\sqrt{2}}{2}(\cos x+\sin x)$, si ha $2\sin^2\!\left(\tfrac{3\pi}{4}-x\right)=(\cos x+\sin x)^2$, quindi

$$f(x)=(\cos x+\sin x)^2+2\sin^2 x=\cos^2 x+2\sin x\cos x+3\sin^2 x .$$

Dividendo numeratore e denominatore (quest'ultimo pari a $\cos^2 x+\sin^2 x=1$) per $\cos^2 x$ e ponendo $X=\tan x$:

$$f(X)=\frac{1+2\tan x+3\tan^2 x}{1+\tan^2 x}=\frac{3X^2+2X+1}{1+X^2}.$$

## b) Studio della funzione e grafico

Si studia $y=\dfrac{3X^2+2X+1}{1+X^2}$ su tutto $\mathbb{R}$, indipendentemente dai limiti geometrici.

**Dominio:** $-\infty<X<+\infty$ (denominatore mai nullo).

**Simmetrie:** $f(-X)=\dfrac{3X^2-2X+1}{1+X^2}$ non coincide né con $f(X)$ né con $-f(X)$: la funzione non è né pari né dispari.

**Intersezioni con gli assi:** per $X=0$ si ha $y=1$. Ponendo $y=0$: $3X^2+2X+1=0$ ha $\Delta=4-12<0$, nessuna soluzione. Il numeratore è sempre positivo, quindi $f(X)>0$ ovunque.

**Asintoti:** riscrivendo $f(X)=3+\dfrac{2X-2}{1+X^2}$ si ottiene

$$\lim_{X\to\pm\infty}\frac{3X^2+2X+1}{1+X^2}=3\;\Rightarrow\; y=3 \text{ asintoto orizzontale.}$$

Non vi sono asintoti verticali né obliqui. L'intersezione con l'asintoto si trova imponendo $\dfrac{2X-2}{1+X^2}=0$, cioè $X=1$, da cui il punto $C=(1;\,3)$.

**Derivata prima:**

$$f'(X)=\frac{-2X^2+4X+2}{(1+X^2)^2}.$$

$f'(X)\ge 0$ equivale a $-2X^2+4X+2\ge 0$, cioè $X^2-2X-1\le 0$, ossia $1-\sqrt{2}\le X\le 1+\sqrt{2}$. La funzione è dunque crescente in $[\,1-\sqrt{2},\,1+\sqrt{2}\,]$ e decrescente per $X<1-\sqrt{2}$ o $X>1+\sqrt{2}$. Quindi:

- $X=1-\sqrt{2}$ è punto di minimo assoluto, con $f(1-\sqrt{2})=2-\sqrt{2}\approx 0.59$;
- $X=1+\sqrt{2}$ è punto di massimo assoluto, con $f(1+\sqrt{2})=2+\sqrt{2}\approx 3.41$.

**Derivata seconda:**

$$f''(X)=\frac{4\,(X^3-3X^2-3X+1)}{(1+X^2)^3},\qquad X^3-3X^2-3X+1=(X+1)(X^2-4X+1).$$

$f''(X)\ge 0$ nei tratti $-1<X<2-\sqrt{3}$ e $X>2+\sqrt{3}$ (concavità verso l'alto). Si hanno tre punti di flesso:

- $X=-1,\; f(-1)=1$;
- $X=2-\sqrt{3},\; f(2-\sqrt{3})\approx 1.66$;
- $X=2+\sqrt{3},\; f(2+\sqrt{3})\approx 3.37$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="456.064" height="216.289" viewBox="-72 -72 342.048 162.217"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 75h310.988"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M237.038 72.6c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="63.138" y="75" stroke="none" font-family="cmmi10" font-size="10" transform="translate(179.713 2.153)">x</text><path fill="none" d="M63.138 88.088V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M60.738-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="63.138" y="75" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -139.632)">y</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-72.07-23.161h311.388"/><g stroke="none" font-size="10"><text x="63.138" y="75" font-family="cmmi10" transform="translate(179.713 -95.911)">y</text><text x="71.177" y="75" font-family="cmr10" transform="translate(179.713 -95.911)">=</text><text x="81.733" y="75" font-family="cmr10" transform="translate(179.713 -95.911)">3</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.778-10.78 2.063.23 2.063.238 2.063.248 2.063.257 2.063.267 2.063.277 2.063.289 2.064.3 2.063.312 2.063.326 2.063.34 2.063.354 2.063.37 2.063.387 2.063.405 2.063.424 2.064.445 2.063.466 2.063.49 2.063.515 2.063.542 2.063.571 2.063.603 2.063.636 2.063.673 2.063.713 2.064.754 2.063.801 2.063.852 2.063.906 2.063.965 2.063 1.031L8.304 6.31l2.063 1.178L12.43 8.75l2.064 1.355 2.063 1.455 2.063 1.566 2.063 1.685 2.063 1.817 2.063 1.957 2.063 2.108 2.063 2.271 2.063 2.443 2.063 2.62 2.064 2.796 2.063 2.968 2.063 3.12 2.063 3.239 2.063 3.288 2.063 3.25 2.063 3.068 2.063 2.693 2.063 2.078 2.064 1.168 2.063-.065 2.063-1.565 2.063-3.252 2.063-4.95 2.063-6.476 2.063-7.6 2.063-8.246 2.063-8.364 2.063-8.046 2.064-7.405 2.063-6.586 2.063-5.697 2.063-4.823 2.063-4.018 2.063-3.305 2.063-2.691 2.063-2.17 2.063-1.739 2.063-1.38 2.064-1.086 2.063-.848 2.063-.65 2.063-.495 2.063-.362 2.063-.26 2.063-.173 2.063-.103 2.063-.048 2.064-.003 2.063.034 2.063.064 2.063.088 2.063.106 2.063.122 2.063.133 2.063.142 2.063.149 2.063.154 2.064.158 2.063.16 2.063.16 2.063.162 2.063.16 2.063.162 2.063.16 2.063.157 2.063.156 2.064.154 2.063.15 2.063.15 2.063.146 2.063.144 2.063.142 2.063.138 2.063.136 2.063.132 2.063.13 2.064.129 2.063.124 2.063.123 2.063.12 2.063.117 2.063.115 2.063.112 2.063.11 2.063.107 2.064.106 2.063.103 2.063.1 2.063.1 2.063.096 2.063.095 2.063.092 2.063.091 2.063.089 2.063.087 2.064.085 2.063.084 2.063.081 2.063.08 2.063.08 2.063.077 2.063.075 2.063.074"/><path stroke="none" d="M56.385 55.826c0-1.524-.774-2.76-1.728-2.76-.955 0-1.728 1.236-1.728 2.76s.773 2.76 1.728 2.76c.954 0 1.728-1.236 1.728-2.76m-1.728 0"/><text x="63.138" y="75" stroke="none" font-family="cmr10" font-size="10" transform="translate(-16.815 -8.963)">min</text><path stroke="none" d="M114.319-36.708c0-1.524-.774-2.76-1.728-2.76s-1.728 1.236-1.728 2.76c0 1.525.774 2.76 1.728 2.76s1.728-1.235 1.728-2.76m-1.728 0"/><text x="63.138" y="75" stroke="none" font-family="cmr10" font-size="10" transform="translate(52.986 -115.24)">max</text><path stroke="none" d="M85.352-23.161c0-1.525-.774-2.76-1.728-2.76-.955 0-1.728 1.235-1.728 2.76s.773 2.76 1.728 2.76c.954 0 1.728-1.236 1.728-2.76m-1.728 0"/><text x="63.138" y="75" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.019 -87.795)">C</text><text x="63.138" y="75" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 11.614)">0</text></g></svg>
</figure>

**Osservazione.** Espressa in funzione dell'angolo, la $f(x)=\cos^2 x+2\sin x\cos x+3\sin^2 x$ si riscrive come

$$f(x)=2+\sin 2x-\cos 2x=\sqrt{2}\,\sin\!\left(2x-\tfrac{\pi}{4}\right)+2 \quad(\text{periodo } T=\pi),$$

ottenibile dal grafico di $y=\sin x$ mediante traslazione orizzontale di $\tfrac{\pi}{4}$, contrazione orizzontale di fattore $2$, dilatazione verticale di fattore $\sqrt{2}$ e traslazione verticale di $2$.

## c) Tangente nel punto $C$

Nel punto $C=(1;\,3)$ si ha $f'(1)=\dfrac{-2+4+2}{(1+1)^2}=1$. La tangente a $\gamma$ in $C$ è dunque

$$y-3=f'(1)(x-1)\;\Rightarrow\; y=x+2 .$$

## d) Area

Occorre l'area della regione finita compresa fra la curva $\gamma$, la tangente $y=x+2$ e la retta $x=k$, con $k=1+\sqrt{2}$ (ascissa del punto di massimo). Nell'intervallo $[\,1,\,1+\sqrt{2}\,]$ la tangente sta sopra la curva, quindi

$$\text{Area}=\int_{1}^{1+\sqrt{2}}\left[(x+2)-\frac{3X^2+2X+1}{1+X^2}\right]dX=\int_{1}^{1+\sqrt{2}}\left[(X-1)-\frac{2X-2}{1+X^2}\right]dX .$$

Una primitiva è

$$F(X)=\frac{(X-1)^2}{2}-\ln(1+X^2)+2\arctan X .$$

Valutando agli estremi (con $\arctan(1+\sqrt{2})=\dfrac{3\pi}{8}$ e $\arctan 1=\dfrac{\pi}{4}$):

$$\text{Area}=\Big[1-\ln(4+2\sqrt{2})+\tfrac{3\pi}{4}\Big]-\Big[-\ln 2+\tfrac{\pi}{2}\Big]=1-\ln(2+\sqrt{2})+\frac{\pi}{4}\approx 0.557 .$$

*Fonte:* [📄 PDF p.80](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
