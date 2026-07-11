

**Problema:** [[Problemi/prob_2002_suppletiva_ordinamento_2002_problema2_32_1|2002 Suppletiva Ordinamento — Problema 2 — Problema 1]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_problema2_32|2002 Suppletiva Ordinamento — Problema 2]]

Una piramide di vertice $V$, avente per base il trapezio rettangolo $ABCD$, è tale che: il trapezio di base è circoscritto a un semicerchio avente come diametro il lato $AB$ perpendicolare alle basi del trapezio; lo spigolo $VA$ è perpendicolare al piano di base; la faccia $VBC$ forma un angolo di $45^\circ$ con il piano della base.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="245.9" height="154.646" viewBox="-72 -72 184.425 115.985"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-27.783 30.015V-58.57h125.21L34.822 30.015Z"/><path fill="none" stroke="#00f" d="M-72.07-14.277c0-24.46 19.828-44.287 44.287-44.287s44.286 19.827 44.286 44.287"/><path stroke="none" d="M-26.463 30.015a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-26.463-58.57a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M98.747-58.57a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M36.142 30.015a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0M-26.463-14.277a1.32 1.32 0 1 0-2.64 0 1.32 1.32 0 0 0 2.64 0m-1.32 0"/><text x="-27.783" y="30.015" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-27.783" y="30.015" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.62 -92.119)">B</text><text x="-27.783" y="30.015" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.743 -92.119)">C</text><text x="-27.783" y="30.015" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.138 10.366)">D</text><text x="-27.783" y="30.015" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.491 -40.876)">E</text><path fill="none" d="M-27.783 30.015 97.427-58.57"/></g></svg>
</figure>

## a)

Il semicerchio ha diametro $AB$ e centro $E$. I lati $AD$ e $BC$ sono tangenti alla semicirconferenza, quindi per la proprietà delle tangenti condotte da un punto esterno a una circonferenza gli angoli $A\hat{D}E$ e $C\hat{D}E$ sono congruenti; analogamente sono congruenti $B\hat{C}E$ e $D\hat{C}E$.

Poiché $AD \parallel BC$, gli angoli $A\hat{D}C$ e $B\hat{C}D$ sono supplementari (coniugati interni), quindi le loro metà $C\hat{D}E$ e $D\hat{C}E$ sono complementari: l'angolo $C\hat{E}D$ è retto. Il triangolo $CED$ è dunque rettangolo in $E$.

## b)

Poiché $VA \perp AB$ e la faccia $VBC$ forma un angolo di $45^\circ$ con la base, l'angolo $V\hat{B}A = 45^\circ$ nel triangolo rettangolo $AVB$; pertanto

$$AB = VA = 2a.$$

Indichiamo con $x = AD$; allora $BC = 2x$. La proprietà delle tangenti dà $CD = AD + BC = 3x$. Conducendo da $D$ la parallela ad $AB$, che incontra $BC$ nel suo punto medio $F$, nel triangolo rettangolo $DFC$ (con $DF = AB = 2a$ e $CF = x$) si ha, per il teorema di Pitagora:

$$(3x)^2 = (2a)^2 + x^2, \qquad 8x^2 = 4a^2, \qquad x = \frac{a\sqrt{2}}{2}.$$

Dunque

$$AD = \frac{a\sqrt{2}}{2}, \qquad BC = a\sqrt{2}, \qquad CD = \frac{3a\sqrt{2}}{2}.$$

Area e perimetro del trapezio:

$$\text{Area}(ABCD) = \frac{(AD+BC)\cdot AB}{2} = \frac{\frac{3a\sqrt{2}}{2}\cdot 2a}{2} = \frac{3\sqrt{2}}{2}\,a^2,$$

$$2p(ABCD) = 2a + 3a\sqrt{2} = a\,(2 + 3\sqrt{2}).$$

## c)

Sia $x$ l'altezza del prisma retto inscritto, con $0 < x < 2a$. La sezione $EFGM$ della piramide, parallela alla base a distanza $x$ dal piano di base (cioè a distanza $2a-x$ dal vertice $V$), ha area proporzionale al quadrato della distanza dal vertice:

$$\text{Area}(EFGM) = \frac{3\sqrt{2}}{2}\,a^2 \cdot \frac{(2a-x)^2}{4a^2} = \frac{3\sqrt{2}\,(2a-x)^2}{8}.$$

Il volume del prisma è quindi

$$V_p = \text{Area}(EFGM)\cdot x = \frac{3\sqrt{2}}{8}\,x\,(2a-x)^2.$$

Il volume è massimo quando lo è $y = x\,(2a-x)^2$. Poiché $y$ è il prodotto di due potenze le cui basi $x$ e $2a-x$ hanno somma costante ($=2a$), esso è massimo quando le basi sono proporzionali agli esponenti ($1$ e $2$):

$$\frac{x}{1} = \frac{2a-x}{2} \quad\Rightarrow\quad 2x = 2a - x \quad\Rightarrow\quad x = \frac{2}{3}\,a.$$

Il prisma di volume massimo ha dunque altezza $\dfrac{2}{3}\,a$, cioè un terzo dell'altezza della piramide.

## d)

La superficie laterale del prisma è $S_l = 2p(EFGM)\cdot x$. Il perimetro della sezione parallela è proporzionale alla distanza dal vertice, quindi

$$2p(EFGM) = 2p(ABCD)\cdot \frac{2a-x}{2a} = a\,(2+3\sqrt{2})\cdot\frac{2a-x}{2a},$$

da cui

$$S_l = a\,(2+3\sqrt{2})\cdot\frac{(2a-x)}{2a}\cdot x.$$

Essa è massima quando è massimo $z = (2a-x)\,x$. Trattandosi del prodotto di due quantità con somma costante, $z$ è massimo quando le due quantità sono uguali:

$$2a - x = x \quad\Rightarrow\quad x = a.$$

Il prisma di superficie laterale massima ha altezza $x = a$: esso **non** coincide con il prisma di volume massimo (che ha altezza $\dfrac{2}{3}\,a$).

*Fonte:* [📄 PDF p.32](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/geometria #cluster/geometria
