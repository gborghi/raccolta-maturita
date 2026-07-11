

**Problema:** [[Problemi/prob_2003_suppletiva_ordinamento_2003_problema2_110_1|2003 Suppletiva Ordinamento — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_suppletiva_ordinamento_2003_problema2_110|2003 Suppletiva Ordinamento — Problema 2]]

È data una piramide retta a base quadrata.

## a)

Si seziona la piramide con un piano parallelo alla base e si indicano con $a$, $b$ (con $a>b$) e $h$ le misure degli spigoli delle basi e l'altezza del tronco risultante. Si esprima in funzione di $a$, $b$, $h$ il volume del tronco di piramide.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="238.544" height="200.108" viewBox="-72 -72 178.908 150.081"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-71.87 66.64H53.323L84.62 35.34H-40.572ZM-31.182 4.043h62.596l15.65-15.65h-62.597ZM-71.87 66.64l40.688-62.597M53.323 66.64 31.414 4.042M84.62 35.341 47.064-11.606M-40.572 35.341l25.039-46.947"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-31.182 4.043 7.95-58.571M31.414 4.043 7.951-58.571M47.063-11.606 7.951-58.571M-15.533-11.606 7.95-58.571"/><text x="-71.87" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(75.794 -128.743)">V</text><text x="-71.87" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(75.603 7.839)">a</text><text x="-71.87" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.665 -81.778)">b</text><path fill="none" d="M94.01 50.59V-3.382"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M96.41 48.71c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08M91.61-1.502c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-71.87" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(169.413 -40.345)">h</text></g></svg>
</figure>

Sia $V$ il vertice della piramide e $O$ il centro della base maggiore. La base minore ha lato $b$ e dista $h$ dalla base maggiore; sia $x$ la distanza della base minore dal vertice, cosicché l'altezza totale della piramide è $h+x$.

Per la similitudine tra le due piramidi si ha

$$\frac{a}{b}=\frac{h+x}{x},$$

da cui $x=\dfrac{bh}{a-b}$ e quindi l'altezza totale vale

$$H=h+x=\frac{ah}{a-b}.$$

Il volume del tronco è la differenza tra il volume della piramide grande e quello della piramide piccola:

$$V_{\text{tronco}}=\frac{1}{3}a^{2}H-\frac{1}{3}b^{2}x=\frac{1}{3}a^{2}\cdot\frac{ah}{a-b}-\frac{1}{3}b^{2}\cdot\frac{bh}{a-b}=\frac{h}{3}\cdot\frac{a^{3}-b^{3}}{a-b},$$

e, ricordando che $a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$,

$$\boxed{\,V_{\text{tronco}}=\frac{h}{3}\left(a^{2}+ab+b^{2}\right).\,}$$

## b)

Si calcoli il volume massimo della piramide data sapendo che la sua superficie laterale è $\sqrt{3}\ \text{dm}^{2}$.

Il volume della piramide con base quadrata di lato $a$ e altezza $k$ è

$$V=\frac{1}{3}\,a^{2}k.$$

L'apotema della piramide (altezza di una faccia laterale) vale $\sqrt{k^{2}+\dfrac{a^{2}}{4}}$, quindi la superficie laterale è

$$S_{l}=\frac{1}{2}\cdot(4a)\cdot\sqrt{k^{2}+\frac{a^{2}}{4}}=2a\sqrt{k^{2}+\frac{a^{2}}{4}}=\sqrt{3}.$$

Elevando al quadrato membro a membro:

$$4a^{2}\left(k^{2}+\frac{a^{2}}{4}\right)=3\ \Rightarrow\ a^{2}\left(4k^{2}+a^{2}\right)=3\ \Rightarrow\ 4k^{2}a^{2}+a^{4}=3,$$

da cui

$$k^{2}=\frac{3-a^{4}}{4a^{2}},\qquad\text{con la condizione}\quad 3-a^{4}>0\ \Rightarrow\ 0<a<\sqrt[4]{3}.$$

Sostituendo nel volume:

$$V=\frac{1}{3}a^{2}k=\frac{1}{3}a^{2}\sqrt{\frac{3-a^{4}}{4a^{2}}}=\frac{1}{3}a^{2}\cdot\frac{\sqrt{3-a^{4}}}{2a}=\frac{1}{6}\,a\sqrt{3-a^{4}}.$$

Il volume è massimo quando lo è la quantità positiva $a\sqrt{3-a^{4}}$, e dunque quando lo è il suo quadrato

$$y=a^{2}\left(3-a^{4}\right)=\left(a^{4}\right)^{1/2}\cdot\left(3-a^{4}\right).$$

Si tratta del prodotto di due potenze delle quantità $a^{4}$ e $3-a^{4}$, la cui somma è costante e pari a $3$: tale prodotto è massimo quando le basi sono proporzionali agli esponenti, cioè

$$\frac{a^{4}}{\tfrac{1}{2}}=\frac{3-a^{4}}{1}\ \Rightarrow\ 2a^{4}=3-a^{4}\ \Rightarrow\ 3a^{4}=3\ \Rightarrow\ a^{4}=1\ \Rightarrow\ a=1.$$

Allo stesso risultato si giunge studiando il segno della derivata di $y=a^{2}(3-a^{4})$.

Con $a=1$ si ha $k=\sqrt{\dfrac{3-1}{4}}=\dfrac{\sqrt{2}}{2}$, e quindi il volume massimo vale

$$V_{\max}=\frac{1}{6}\cdot 1\cdot\sqrt{3-1}=\boxed{\,\frac{\sqrt{2}}{6}\ \text{dm}^{3}.\,}$$

## c)

Si calcoli il raggio della sfera circoscritta alla piramide di volume massimo.

La piramide di volume massimo ha base quadrata di lato $a=1$, altezza $k=\dfrac{\sqrt{2}}{2}$ e apotema

$$\sqrt{k^{2}+\frac{1}{4}}=\sqrt{\frac{1}{2}+\frac{1}{4}}=\frac{\sqrt{3}}{2}.$$

Ogni faccia laterale è dunque un triangolo di base $1$ e altezza $\dfrac{\sqrt{3}}{2}$: è un **triangolo equilatero** di lato $1$. La piramide è perciò regolare, con tutti gli spigoli uguali a $1\ \text{dm}$.

Le diagonali del quadrato di base misurano $\sqrt{2}$, quindi le distanze dei vertici di base dal centro $O$ valgono

$$AO=BO=CO=DO=\frac{\sqrt{2}}{2}.$$

Ma anche $VO=k=\dfrac{\sqrt{2}}{2}$: tutte le distanze dei cinque vertici dal punto $O$ sono uguali a $\dfrac{\sqrt{2}}{2}$. Quindi $O$ è il centro della sfera circoscritta e il raggio è

$$\boxed{\,R=\frac{\sqrt{2}}{2}\ \text{dm}.\,}$$

## d)

Si dia un'approssimazione della capacità in litri di tale sfera.

Il volume della sfera è

$$V_{\text{sfera}}=\frac{4}{3}\pi R^{3}=\frac{4}{3}\pi\left(\frac{\sqrt{2}}{2}\right)^{3}=\frac{4}{3}\pi\cdot\frac{2\sqrt{2}}{8}=\frac{\sqrt{2}}{3}\,\pi\cong 1{,}481\ \text{dm}^{3}.$$

Poiché $1\ \text{dm}^{3}=1$ litro, la capacità della sfera è di circa

$$\boxed{\,1{,}48\ \text{litri}.\,}$$

*Fonte:* [📄 PDF p.110](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
