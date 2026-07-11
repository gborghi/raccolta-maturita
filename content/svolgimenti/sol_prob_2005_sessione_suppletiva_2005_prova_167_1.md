

**Problema:** [[Problemi/prob_2005_sessione_suppletiva_2005_prova_167_1|2005 Suppletiva PNI — Prova — Problema 1]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_167|2005 Suppletiva PNI — Prova]]

È data una piramide triangolare regolare e il prisma retto in essa inscritto in modo che una base sia la sezione della piramide con il piano equidistante dal vertice e dalla base.

## a) Volume del prisma noto il volume della piramide

Sì, il volume del prisma è determinato. Sia $A_b$ l'area della base della piramide e $h$ la sua altezza; il suo volume è

$$V = \frac{1}{3}\,A_b\, h .$$

Il piano di sezione, equidistante dal vertice e dalla base, taglia la piramide a metà altezza: la sezione è un triangolo equilatero simile alla base con rapporto $\frac{1}{2}$, quindi di area $\frac{1}{4}A_b$. Questa sezione è la base superiore del prisma; poiché il prisma è retto, la sua altezza è la distanza fra i due piani, cioè $\frac{h}{2}$. Dunque

$$V_{\text{prisma}} = \frac{1}{4}A_b \cdot \frac{h}{2} = \frac{1}{8}A_b\,h = \frac{3}{8}\cdot\frac{1}{3}A_b\,h = \frac{3}{8}\,V .$$

Il rapporto $\dfrac{V_{\text{prisma}}}{V}=\dfrac{3}{8}$ non dipende dalle dimensioni particolari della piramide: perciò, noto $V$, si ottiene senz'altro $V_{\text{prisma}}=\frac{3}{8}V$.

## b) Spigolo della base $MNP$

La base $MNP$ del prisma è la proiezione ortogonale della sezione di mezza altezza sul piano di $ABC$. La sezione è simile ad $ABC$ con rapporto $\frac{1}{2}$ e la proiezione conserva le lunghezze orizzontali, dunque $MNP$ è simile ad $ABC$ con rapporto $\frac{1}{2}$. Essendo lo spigolo di $ABC$ lungo $4\ \text{cm}$,

$$\overline{MN}=\frac{1}{2}\cdot 4 = 2\ \text{cm}.$$

## c) Coordinate dei vertici

Poniamo l'origine in $A$ e l'asse delle ascisse lungo la retta $AB$. Con $ABC$ equilatero di lato $4$:

$$A(0,0),\qquad B(4,0),\qquad C\bigl(2,\;2\sqrt{3}\bigr).$$

Il triangolo $MNP$ si ottiene da $ABC$ mediante l'omotetia di centro il baricentro $G$ e rapporto $\frac{1}{2}$; poiché

$$G=\left(\frac{0+4+2}{3},\;\frac{0+0+2\sqrt3}{3}\right)=\left(2,\;\frac{2\sqrt3}{3}\right),$$

i vertici di $MNP$ sono i punti medi di $GA$, $GB$, $GC$:

$$M\left(1,\;\frac{\sqrt3}{3}\right),\qquad N\left(3,\;\frac{\sqrt3}{3}\right),\qquad P\left(2,\;\frac{4\sqrt3}{3}\right).$$

Si osservi che $\overline{MN}=3-1=2$, in accordo con il punto b), e che $MN$ è parallelo ad $AB$.

## d) Parabola per $A$, $B$, $M$

La parabola ha asse perpendicolare ad $AB$, quindi è del tipo $y=ax^2+bx+c$. Passando per $A(0,0)$ e $B(4,0)$, ha come zeri $x=0$ e $x=4$, dunque

$$y=a\,x(x-4).$$

Imponendo il passaggio per $M\left(1,\dfrac{\sqrt3}{3}\right)$:

$$\frac{\sqrt3}{3}=a\cdot 1\cdot(1-4)=-3a \quad\Rightarrow\quad a=-\frac{\sqrt3}{9}.$$

La parabola è quindi

$$y=-\frac{\sqrt3}{9}\,x(x-4)=-\frac{\sqrt3}{9}x^2+\frac{4\sqrt3}{9}x .$$

Verifica del passaggio per $N(3,\cdot)$:

$$y=-\frac{\sqrt3}{9}\cdot 3\cdot(3-4)=\frac{3\sqrt3}{9}=\frac{\sqrt3}{3},$$

che è proprio l'ordinata di $N$: la parabola passa anche per $N$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="221.224" height="194.262" viewBox="-72 -72 165.918 145.697"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 59.727h136.6L10.395-58.57Z"/><text x="-57.904" y="59.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.904" y="59.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(140.132 10.366)">B</text><text x="-57.904" y="59.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.368 -121.831)">C</text><path fill="none" stroke="#00f" stroke-width=".8" d="M-23.754 40.01h68.3l-34.15-59.148Z"/><text x="-57.904" y="59.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(28.754 -9.352)">M</text><text x="-57.904" y="59.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(97.887 -9.352)">N</text><text x="-57.904" y="59.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.833 -82.399)">P</text><path stroke="none" d="M11.582 20.302a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0m-1.2 0"/><text x="-57.904" y="59.727" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 -36.008)">G</text><path fill="none" stroke="#008c00" d="M49.807 20.302c0-21.774-17.65-39.424-39.425-39.424s-39.425 17.65-39.425 39.424 17.651 39.425 39.425 39.425 39.425-17.65 39.425-39.425Zm-39.425 0"/><path fill="none" stroke="red" stroke-width=".8" d="m-57.904 59.727 2.315-1.751 2.314-1.691 2.315-1.63 2.315-1.571 2.315-1.51 2.314-1.45 2.315-1.389 2.315-1.329 2.315-1.268 2.314-1.208 2.315-1.148 2.315-1.087 2.314-1.026 2.315-.967 2.315-.906 2.315-.846 2.314-.785 2.315-.725 2.315-.664 2.315-.604 2.314-.544 2.315-.483 2.315-.423 2.314-.362 2.315-.303 2.315-.24 2.315-.182 2.314-.12 2.315-.061h2.315l2.315.06 2.314.12 2.315.182 2.315.241 2.315.302 2.314.362 2.315.422 2.315.484 2.314.543 2.315.604 2.315.665 2.315.724 2.314.785 2.315.846 2.315.906 2.315.966 2.314 1.027 2.315 1.087 2.315 1.148 2.315 1.207 2.314 1.269 2.315 1.329 2.315 1.389 2.314 1.45 2.315 1.51 2.315 1.57 2.315 1.63 2.314 1.691 2.315 1.752"/></g></svg>
</figure>

## e) La similitudine che muta $ABC$ in $MNP$

I due triangoli sono equilateri con lati nel rapporto $\dfrac{\overline{MN}}{\overline{AB}}=\dfrac{2}{4}=\dfrac{1}{2}$; ogni trasformazione che porta $A,B,C$ ordinatamente in $M,N,P$ conserva quindi i rapporti fra le distanze, ed è pertanto una similitudine (di rapporto $\frac12$). Poiché $MN$ è parallelo ed equiverso ad $AB$, non c'è rotazione: si tratta dell'omotetia di centro il baricentro comune $G\left(2,\dfrac{2\sqrt3}{3}\right)$ e rapporto $\frac12$,

$$\begin{cases} x'=2+\dfrac{1}{2}(x-2)=\dfrac{x}{2}+1,\\[4pt] y'=\dfrac{2\sqrt3}{3}+\dfrac{1}{2}\left(y-\dfrac{2\sqrt3}{3}\right)=\dfrac{y}{2}+\dfrac{\sqrt3}{3}. \end{cases}$$

Infatti $A(0,0)\mapsto\left(1,\frac{\sqrt3}{3}\right)=M$, $\;B(4,0)\mapsto\left(3,\frac{\sqrt3}{3}\right)=N$, $\;C(2,2\sqrt3)\mapsto\left(2,\frac{4\sqrt3}{3}\right)=P$.

## f) Posizione della circonferenza circoscritta a $MNP$

Il raggio della circonferenza circoscritta a $MNP$ (triangolo equilatero di lato $2$) è

$$R_{MNP}=\frac{\text{lato}}{\sqrt3}=\frac{2}{\sqrt3}=\frac{2\sqrt3}{3},$$

mentre il raggio della circonferenza inscritta in $ABC$ (lato $4$) è

$$r_{ABC}=\frac{\text{lato}}{2\sqrt3}=\frac{4}{2\sqrt3}=\frac{2\sqrt3}{3}.$$

I due cerchi hanno lo stesso centro (il baricentro $G$, che per un triangolo equilatero è anche circocentro e incentro) e lo stesso raggio: coincidono. Dunque **la circonferenza circoscritta al triangolo $MNP$ è la circonferenza inscritta nel triangolo $ABC$**, tangente internamente ai tre lati di $ABC$.

*Fonte:* [📄 PDF p.167](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
