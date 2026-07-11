

**Problema:** [[Problemi/prob_2008_estero_calendario_australe_ordinaria_2008_problema2_43_1|2008 Estero Australe Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_estero_calendario_australe_ordinaria_2008_problema2_43|2008 Estero Australe Ordinaria — Problema 2]]

Il trapezio isoscele $ABCD$ è circoscritto a un cerchio di raggio $1$; si pone la base minore $CD=2x$. Poiché il cerchio è tangente a entrambe le basi, l'altezza del trapezio è uguale al diametro, cioè $h=2$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="203.758" height="165.538" viewBox="-72 -72 152.818 124.154"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="#00f" stroke-width=".8" d="M52.362-10.193c0-26.714-21.655-48.37-48.37-48.37s-48.37 21.656-48.37 48.37 21.656 48.37 48.37 48.37c26.715 0 48.37-21.656 48.37-48.37Zm-48.37 0"/><path fill="none" stroke-width=".8" d="M-65.187 38.184H73.172L37.857-58.57h-67.729Z"/><path stroke="none" d="M5.443-10.193a1.451 1.451 0 1 0-2.902 0 1.451 1.451 0 0 0 2.902 0m-1.45 0"/><text x="3.992" y="-10.193" stroke="none" font-family="cmmi10" font-size="10" transform="translate(5.952 7.286)">O</text><text x="3.992" y="-10.193" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-72.93 58.744)">A</text><text x="3.992" y="-10.193" stroke="none" font-family="cmmi10" font-size="10" transform="translate(65.136 58.744)">B</text><text x="3.992" y="-10.193" stroke="none" font-family="cmmi10" font-size="10" transform="translate(29.933 -51.91)">C</text><text x="3.992" y="-10.193" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-38.143 -51.91)">D</text><path fill="red" stroke="none" d="M5.686 38.176a1.693 1.693 0 1 0-3.387 0 1.693 1.693 0 0 0 3.387 0M5.686-58.563a1.693 1.693 0 1 0-3.387 0 1.693 1.693 0 0 0 3.387 0M51.153-26.639a1.693 1.693 0 1 0-3.386 0 1.693 1.693 0 0 0 3.386 0M-39.782000000000004-26.639a1.693 1.693 0 1 0-3.386 0 1.693 1.693 0 0 0 3.386 0m-1.693 0"/><text x="3.992" y="-10.193" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49 -6.08)">E</text><text x="3.992" y="-10.193" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-56.82 -6.08)">F</text></g></svg>
</figure>

## a)

Poniamo $AB=2y$ (base maggiore). In ogni quadrilatero circoscritto la somma delle coppie di lati opposti è uguale; essendo il trapezio isoscele ($AD=BC$) risulta

$$AB+CD=AD+BC=2\,BC .$$

Proiettando un lato obliquo sulle basi, la sua proiezione orizzontale vale $y-x$ e l'altezza è $2$, quindi

$$BC=\sqrt{(y-x)^{2}+4}.$$

Sostituendo nella relazione precedente:

$$2y+2x=2\sqrt{(y-x)^{2}+4}\ \Rightarrow\ (y+x)^{2}=(y-x)^{2}+4 .$$

Sviluppando: $\;4xy=4$, da cui $y=\dfrac{1}{x}$. Pertanto

$$AB=2y=\frac{2}{x}.$$

## b)

Ruotando il trapezio attorno alla base maggiore $AB$ si ottiene un cilindro con due coni uguali sovrapposti alle basi. In entrambi i solidi il raggio è l'altezza del trapezio, $R=2$.

Il cilindro ha altezza pari alla base minore, $CD=2x$:

$$V_{\text{cil}}=\pi R^{2}\cdot CD=\pi\cdot 4\cdot 2x=8\pi x .$$

Ogni cono ha altezza uguale alla proiezione del lato obliquo, $y-x=\dfrac{1}{x}-x$:

$$V_{\text{cono}}=\frac{1}{3}\pi R^{2}\left(\frac{1}{x}-x\right)=\frac{4}{3}\pi\left(\frac{1}{x}-x\right).$$

Sommando cilindro e due coni:

$$V(x)=8\pi x+2\cdot\frac{4}{3}\pi\left(\frac{1}{x}-x\right)=\frac{8}{3}\pi\left(3x+\frac{1}{x}-x\right)=\frac{8}{3}\pi\left(2x+\frac{1}{x}\right).$$

Il volume è minimo quando lo è la funzione

$$f(x)=2x+\frac{1}{x},\qquad 0<x\le 1,$$

dove la condizione $x\le 1$ deriva da $y\ge x$, cioè $\dfrac{1}{x}\ge x$. Si ha

$$f'(x)=2-\frac{1}{x^{2}},\qquad f'(x)=0\ \Rightarrow\ x^{2}=\frac{1}{2}\ \Rightarrow\ x=\frac{\sqrt{2}}{2}.$$

Poiché $f'(x)<0$ per $0<x<\dfrac{\sqrt{2}}{2}$ e $f'(x)>0$ per $\dfrac{\sqrt{2}}{2}<x\le 1$, in $x=\dfrac{\sqrt{2}}{2}$ si ha un minimo. Il volume minimo vale

$$V=\frac{8}{3}\pi\left(2\cdot\frac{\sqrt{2}}{2}+\frac{2}{\sqrt{2}}\right)=\frac{8}{3}\pi\left(\sqrt{2}+\sqrt{2}\right)=\frac{16\sqrt{2}}{3}\pi .$$

## c)

Per $x=\dfrac{\sqrt{2}}{2}$ consideriamo i quattro punti in cui il trapezio è tangente al cerchio. Poniamo il centro $O$ nell'origine, con il cerchio $x^{2}+y^{2}=1$: la base minore sta sulla retta $y=1$ e la maggiore su $y=-1$.

I punti di tangenza sulle due basi sono $\left(0,1\right)$ e $\left(0,-1\right)$; quelli sui lati obliqui, $E$ ed $F$, sono simmetrici rispetto all'asse $y$. Il quadrilatero è dunque un aquilone le cui diagonali sono:

- la diagonale verticale, che congiunge i punti di tangenza sulle basi, di lunghezza $2$ (il diametro);
- la diagonale orizzontale $EF$, di lunghezza $2\,x_E$.

Con $x=\dfrac{\sqrt{2}}{2}$ si ha $y=\dfrac{1}{x}=\sqrt{2}$, quindi $B=\left(\sqrt{2},-1\right)$ e $C=\left(\dfrac{\sqrt{2}}{2},1\right)$. Il punto $E$ è il piede della perpendicolare da $O$ alla retta $BC$. Posto $\vec d=C-B=\left(-\dfrac{\sqrt{2}}{2},\,2\right)$, con $|\vec d|^{2}=\dfrac{9}{2}$, e $(O-B)\cdot\vec d=3$, il parametro è

$$t=\frac{(O-B)\cdot\vec d}{|\vec d|^{2}}=\frac{3}{9/2}=\frac{2}{3},$$

da cui

$$E=B+t\,\vec d=\left(\sqrt{2}-\frac{2}{3}\cdot\frac{\sqrt{2}}{2},\ -1+\frac{2}{3}\cdot 2\right)=\left(\frac{2\sqrt{2}}{3},\ \frac{1}{3}\right),$$

e si verifica $|OE|=1$. Dunque $x_E=\dfrac{2\sqrt{2}}{3}$ e l'area dell'aquilone è

$$\text{Area}=\frac{1}{2}\cdot 2\cdot\left(2\,x_E\right)=2\cdot\frac{2\sqrt{2}}{3}=\frac{4\sqrt{2}}{3}\ \text{u}^{2}.$$

*Fonte:* [📄 PDF p.43](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
