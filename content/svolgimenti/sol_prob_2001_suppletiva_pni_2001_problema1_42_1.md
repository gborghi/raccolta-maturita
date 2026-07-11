

**Problema:** [[Problemi/prob_2001_suppletiva_pni_2001_problema1_42_1|2001 Suppletiva PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_problema1_42|2001 Suppletiva PNI — Problema 1]]

Le misure $a,b,c$ dei lati di un triangolo $ABC$ sono in progressione aritmetica di ragione $k$.

**Impostazione.** Detta $a$ la misura del lato *minore*, i lati sono $a$, $b=a+k$, $c=a+2k$ (con $k>0$ e $a>0$ affinché $a$ sia effettivamente il minore). Il perimetro è $2p=3a+3k$, dunque il semiperimetro vale

$$p=\frac{3(a+k)}{2}.$$

## a) Raggio $r$ del cerchio inscritto

Per la formula di Erone calcoliamo le differenze semiperimetro–lato:

$$p-a=\frac{a+3k}{2},\qquad p-b=\frac{a+k}{2},\qquad p-c=\frac{a-k}{2}.$$

L'area è quindi

$$S=\sqrt{p(p-a)(p-b)(p-c)}=\frac{a+k}{4}\sqrt{3(a+3k)(a-k)}.$$

Poiché $S=r\,p=\dfrac{3(a+k)}{2}\,r$, si ricava

$$r=\frac{S}{p}=\frac{1}{6}\sqrt{3(a+3k)(a-k)}=\frac{\sqrt{3}}{6}\sqrt{-3k^{2}+2ak+a^{2}}.$$

## b) Valore di $k$ che rende $r$ massimo

$r$ è massimo quando lo è il radicando $g(k)=-3k^{2}+2ak+a^{2}$, che è una parabola con la concavità rivolta verso il basso: il suo massimo si ha nel vertice, cioè per

$$k=-\frac{2a}{2\cdot(-3)}=\frac{a}{3}.$$

Per $k=\dfrac{a}{3}$ i lati valgono

$$a,\qquad a+\frac{a}{3}=\frac{4}{3}a,\qquad a+\frac{2a}{3}=\frac{5}{3}a,$$

cioè sono proporzionali a $3,4,5$: il triangolo è **rettangolo** (in $C$, vertice opposto al lato maggiore). Il raggio inscritto massimo è

$$r=\frac{\sqrt{3}}{6}\sqrt{a^{2}+\frac{2}{3}a^{2}-\frac{1}{3}a^{2}}=\frac{\sqrt{3}}{6}\cdot\frac{2a}{\sqrt{3}}=\frac{a}{3}.$$

## c) Coordinate dei vertici ed equazioni delle circonferenze

Conviene porre l'origine nel vertice $C$ dell'angolo retto, con gli assi lungo i cateti $CB$ (lunghezza $a$) e $CA$ (lunghezza $\dfrac{4}{3}a$):

$$C=(0,0),\qquad B=(a,0),\qquad A=\left(0,\frac{4}{3}a\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="228.688" height="228.688" viewBox="-72 -72 171.516 171.516"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-37.727 81.774h102.45L-37.727-54.825Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M30.56 47.631c0-18.857-15.287-34.143-34.144-34.143s-34.143 15.286-34.143 34.143S-22.44 81.774-3.584 81.774 30.56 66.488 30.56 47.631Zm-34.144 0"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M98.846 13.488c0-47.143-38.215-85.358-85.358-85.358S-71.87-33.655-71.87 13.488s38.215 85.358 85.358 85.358 85.358-38.215 85.358-85.358Zm-85.358 0"/><path stroke="none" d="M-36.047 81.774a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="-37.727" y="81.774" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.395 10.366)">C</text><path stroke="none" d="M66.403 81.774a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="-37.727" y="81.774" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.982 10.366)">B</text><path stroke="none" d="M-36.047-54.825a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="-37.727" y="81.774" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.75 -140.132)">A</text><path stroke="none" d="M-1.904 47.631a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="-37.727" y="81.774" stroke="none" font-family="cmmi10" font-size="10" transform="translate(37.676 -30.727)">O</text><path stroke="none" d="M15.168 13.488a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="-37.727" y="81.774" stroke="none" font-family="cmmi10" font-size="10" transform="translate(54.748 -64.87)">E</text><g fill="#00f" stroke="#00f"><text x="-37.727" y="81.774" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(12.97 -42.233)">r</text></g><g fill="red" stroke="red"><text x="-37.727" y="81.774" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(84.937 -100.72)">R</text></g></g></svg>
</figure>

**Circonferenza inscritta.** Ha raggio $r=\dfrac{a}{3}$ e centro $O=\left(\dfrac{a}{3},\dfrac{a}{3}\right)$ (in un triangolo rettangolo l'incentro dista $r$ da entrambi i cateti):

$$\left(x-\frac{a}{3}\right)^{2}+\left(y-\frac{a}{3}\right)^{2}=\frac{a^{2}}{9}.$$

**Circonferenza circoscritta.** Il centro è il punto medio dell'ipotenusa $AB$, ovvero $E=\left(\dfrac{a}{2},\dfrac{2a}{3}\right)$, con raggio

$$R=\frac{AB}{2}=\frac{1}{2}\cdot\frac{5}{3}a=\frac{5a}{6}.$$

L'equazione è

$$\left(x-\frac{a}{2}\right)^{2}+\left(y-\frac{2a}{3}\right)^{2}=\frac{25a^{2}}{36}.$$

## d) Rapporto tra i volumi delle due sfere

Le due sfere hanno per raggi i raggi delle circonferenze, $r=\dfrac{a}{3}$ e $R=\dfrac{5a}{6}$, quindi

$$\frac{r}{R}=\frac{2}{5},\qquad \frac{V_{\text{insc}}}{V_{\text{circ}}}=\left(\frac{r}{R}\right)^{3}=\left(\frac{2}{5}\right)^{3}=\frac{8}{125}.$$

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/geometria #cluster/geometria
