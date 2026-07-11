

**Problema:** [[Problemi/prob_2005_pni_2005_sessione_suppletiva_problema1_111_1|2005 PNI Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_pni_2005_sessione_suppletiva_problema1_111|2005 PNI Suppletiva — Problema 1]]

Sono dati una piramide triangolare regolare e il prisma retto in essa inscritto, in modo che una base del prisma sia la sezione della piramide con il piano equidistante dal vertice e dalla base. Detti $V$ il vertice della piramide, $ABC$ la sua base e $H$ il centro di $ABC$, la sezione media $DEF$ (con $DEF$ parallela ad $ABC$) è una base del prisma; l'altra base $MNP$ è la proiezione di $DEF$ sul piano di $ABC$.

## a) Volume del prisma noto quello della piramide

Sì: dal volume della piramide si può ricavare quello del prisma. Indicata con $h$ l'altezza della piramide e con $S$ l'area della base $ABC$, si ha

$$V_{\text{piramide}}=\frac{1}{3}\,S\,h .$$

Detto $K$ il centro della sezione $DEF$, risulta $VK=HK=\dfrac{h}{2}$. Poiché $ABC$ e $DEF$ appartengono a piani paralleli, le loro aree sono proporzionali ai quadrati delle distanze dei piani dal vertice $V$:

$$\frac{A(ABC)}{A(DEF)}=\frac{VH^{2}}{VK^{2}}=\frac{h^{2}}{h^{2}/4}=4 \quad\Rightarrow\quad A(DEF)=\frac{1}{4}\,A(ABC)=\frac{S}{4}.$$

L'altezza del prisma è $HK=\dfrac{h}{2}$, quindi

$$V_{\text{prisma}}=A(DEF)\cdot HK=\frac{S}{4}\cdot\frac{h}{2}=\frac{S\,h}{8}.$$

Poiché $S\,h=3\,V_{\text{piramide}}$, si ottiene

$$V_{\text{prisma}}=\frac{3}{8}\,V_{\text{piramide}} .$$

Il volume del prisma è dunque completamente determinato: è i $\dfrac{3}{8}$ del volume della piramide.

## b) Spigolo di base del prisma

Il triangolo $MNP$ è congruente a $DEF$, e $DEF$ è simile ad $ABC$ con rapporto $\dfrac{1}{2}$ (le sezioni parallele alla base scalano linearmente come le distanze dal vertice, e $VK=\dfrac{1}{2}VH$). Perciò il lato di $MNP$ è la metà del lato di $ABC$:

$$\ell_{MNP}=\frac{4}{2}=2\ \text{cm}.$$

## c) Coordinate dei vertici

Assumiamo l'origine in $A$ e l'asse delle ascisse coincidente con la retta $AB$. L'altezza $CR$ del triangolo equilatero $ABC$ vale

$$CR=AB\cdot\frac{\sqrt{3}}{2}=4\cdot\frac{\sqrt{3}}{2}=2\sqrt{3},$$

quindi

$$A=(0;\,0),\qquad B=(4;\,0),\qquad C=(2;\,2\sqrt{3}).$$

I due triangoli equilateri hanno lo stesso baricentro $G$ (che è anche ortocentro, incentro e circocentro):

$$G=\left(2;\ \frac{2\sqrt{3}}{3}\right).$$

Il triangolo $MNP$ si ottiene da $ABC$ mediante l'omotetia di centro $G$ e rapporto $\dfrac{1}{2}$ (la sezione $DEF$ è omotetica di $ABC$ rispetto all'asse della piramide, e la proiezione conserva l'omotetia nel piano di base). Perciò ogni vertice di $MNP$ è il punto medio del segmento che unisce $G$ al corrispondente vertice di $ABC$:

$$M=(1;\ \tfrac{\sqrt{3}}{3}),\qquad N=(3;\ \tfrac{\sqrt{3}}{3}),\qquad P=(2;\ \tfrac{4\sqrt{3}}{3}).$$

Si verifica infatti che il baricentro di $MNP$ è $\left(2;\ \dfrac{2\sqrt{3}}{3}\right)=G$ e che il lato misura $2$, in accordo con il punto b).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="198.453" height="174.542" viewBox="-72 -72 148.84 130.906"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 44.937h119.52L1.857-58.57Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-28.024 27.685h59.76L1.857-24.068Z"/><path fill="none" stroke="red" stroke-width=".8" d="m-57.904 44.937 2.025-1.532 2.026-1.48 2.025-1.427 2.026-1.374 2.025-1.321 2.025-1.27 2.026-1.214 2.025-1.163 2.026-1.11 2.025-1.057 2.025-1.004 2.026-.952 2.025-.898 2.026-.846 2.025-.793 2.025-.74 2.026-.687 2.025-.634 2.026-.581 2.025-.529 2.025-.476 2.026-.422 2.025-.37 2.026-.318 2.025-.264 2.025-.211 2.026-.159L-1.193 22l2.026-.053h2.025L4.883 22l2.026.105 2.025.158 2.026.212 2.025.264 2.025.317 2.026.37 2.025.423 2.026.475 2.025.529 2.025.581 2.026.635 2.025.687 2.026.74 2.025.792 2.025.845 2.026.899 2.025.951 2.026 1.004 2.025 1.057 2.025 1.11 2.026 1.163 2.025 1.215 2.026 1.269 2.025 1.32 2.025 1.375 2.026 1.427 2.025 1.48 2.026 1.532"/><path fill="none" stroke-dasharray="3.0,3.0" d="m1.856-58.57-.01 103.507"/><path stroke="none" d="M3.536 10.435a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0M-26.764 27.685a1.26 1.26 0 1 0-2.52 0 1.26 1.26 0 0 0 2.52 0M32.997 27.685a1.26 1.26 0 1 0-2.52 0 1.26 1.26 0 0 0 2.52 0M3.116-24.068a1.26 1.26 0 1 0-2.52 0 1.26 1.26 0 0 0 2.52 0m-1.26 0"/><text x="-57.904" y="44.937" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.904" y="44.937" stroke="none" font-family="cmmi10" font-size="10" transform="translate(123.054 10.366)">B</text><text x="-57.904" y="44.937" stroke="none" font-family="cmmi10" font-size="10" transform="translate(55.83 -107.04)">C</text><text x="-57.904" y="44.937" stroke="none" font-family="cmmi10" font-size="10" transform="translate(24.484 -6.886)">M</text><text x="-57.904" y="44.937" stroke="none" font-family="cmmi10" font-size="10" transform="translate(85.078 -6.886)">N</text><text x="-57.904" y="44.937" stroke="none" font-family="cmmi10" font-size="10" transform="translate(63.293 -72.538)">P</text><text x="-57.904" y="44.937" stroke="none" font-family="cmmi10" font-size="10" transform="translate(63.293 -31.086)">G</text></g></svg>
</figure>

## d) La parabola

La parabola ha asse perpendicolare ad $AB$, quindi è del tipo

$$y=ax^{2}+bx+c,$$

con asse la retta $x=2$. Imponiamo il passaggio per i punti richiesti.

- Passaggio per $A=(0;0)$: $\ c=0$.
- Asse $x=2$: $\ -\dfrac{b}{2a}=2 \Rightarrow b=-4a$.
- Passaggio per $M=(1;\tfrac{\sqrt{3}}{3})$: $\ a+b+c=\dfrac{\sqrt{3}}{3}$, cioè $a-4a=\dfrac{\sqrt{3}}{3}$, da cui $-3a=\dfrac{\sqrt{3}}{3}$ e quindi $a=-\dfrac{\sqrt{3}}{9}$.

Allora $b=-4a=\dfrac{4\sqrt{3}}{9}$ e la parabola ha equazione

$$y=-\frac{\sqrt{3}}{9}\,x^{2}+\frac{4\sqrt{3}}{9}\,x=-\frac{\sqrt{3}}{9}\left(x^{2}-4x\right).$$

**Verifica del passaggio per $N=(3;\tfrac{\sqrt{3}}{3})$:**

$$-\frac{\sqrt{3}}{9}\left(3^{2}-4\cdot 3\right)=-\frac{\sqrt{3}}{9}\left(9-12\right)=-\frac{\sqrt{3}}{9}\cdot(-3)=\frac{\sqrt{3}}{3}.$$

Il punto $N$ appartiene dunque alla parabola (come era prevedibile, essendo $N$ il simmetrico di $M$ rispetto all'asse $x=2$).

## e) La similitudine $ABC\to MNP$

Il triangolo $ABC$ è mutato in $MNP$ da un'omotetia — dunque una similitudine — di centro il baricentro $G=\left(2;\ \dfrac{2\sqrt{3}}{3}\right)$ e rapporto $k=\dfrac{1}{2}$. Le equazioni si ottengono da

$$\begin{cases} x'-x_G=k\,(x-x_G)\\[2pt] y'-y_G=k\,(y-y_G) \end{cases}\Rightarrow \begin{cases} x'-2=\dfrac{1}{2}\,(x-2)\\[4pt] y'-\dfrac{2\sqrt{3}}{3}=\dfrac{1}{2}\left(y-\dfrac{2\sqrt{3}}{3}\right) \end{cases}$$

da cui

$$\begin{cases} x'=\dfrac{1}{2}\,x+1\\[4pt] y'=\dfrac{1}{2}\,y+\dfrac{\sqrt{3}}{3}. \end{cases}$$

## f) Posizione della circonferenza circoscritta a $MNP$

Poiché $MNP$ ed $ABC$ sono triangoli equilateri con lo stesso centro $G$, la circonferenza circoscritta a $MNP$ ha centro $G$ e raggio

$$GM=\sqrt{(2-1)^{2}+\left(\frac{2\sqrt{3}}{3}-\frac{\sqrt{3}}{3}\right)^{2}}=\sqrt{1+\frac{1}{3}}=\frac{2\sqrt{3}}{3}.$$

Ma $\dfrac{2\sqrt{3}}{3}$ è esattamente il raggio della circonferenza **inscritta** in $ABC$ (per il triangolo equilatero di lato $4$ il raggio inscritto vale $\dfrac{4}{2\sqrt{3}}=\dfrac{2\sqrt{3}}{3}=GR$, distanza di $G$ dai lati di $ABC$). Dunque la circonferenza circoscritta al triangolo $MNP$ coincide con la circonferenza inscritta nel triangolo $ABC$: è tangente internamente ai tre lati di $ABC$.

*Fonte:* [📄 PDF p.111](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/geometria #cluster/geometria
