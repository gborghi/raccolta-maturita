

**Problema:** [[Problemi/prob_2004_ordinamento_2004_sessione_suppletiva_problema2_79_1|2004 Ordinamento Suppletiva — Problema 2 e Quesiti — Problema 1]] · **Prova:** [[Prove/2004_ordinamento_2004_sessione_suppletiva_problema2_79|2004 Ordinamento Suppletiva — Problema 2 e Quesiti]]

Una piramide ha per base il quadrato $ABCD$ di lato lungo $7\ \text{cm}$. Anche l'altezza $VH$ è lunga $7\ \text{cm}$ e il suo piede $H$ è il punto medio del lato $AB$. Si conduce per la retta $AB$ il piano $\alpha$ che forma con il piano di base un angolo $\varphi$ con $\cos\varphi = \frac{3}{5}$, e si indica con $EF$ la corda che il piano $\alpha$ intercetta sulla faccia $VCD$.

## a)

Il piano $\alpha$ taglia la faccia $VCD$ nel segmento $EF$ parallelo ad $AB$ (intersezione di due piani paralleli con un terzo piano), quindi $ABFE$ è un **trapezio**. Dimostriamo che è isoscele.

Il piano $ABV$ è perpendicolare alla base, poiché contiene l'altezza $VH$ con $H$ punto medio di $AB$; inoltre il triangolo $ABV$ è isoscele sulla base $AB$, essendo $VH$ anche mediana. Pertanto $AV = BV$, e i triangoli rettangoli $AVD$ e $BVC$ sono congruenti per il primo criterio. Di conseguenza $VD = VC$ e il triangolo $VCD$ è isoscele; poiché $EF \parallel CD$, anche il triangolo $VEF$ è isoscele, con $VE = VF$. I triangoli $AVE$ e $BVF$ sono dunque congruenti per il primo criterio, il che dà $AE = BF$.

Il trapezio $ABFE$ è quindi isoscele, e in un trapezio isoscele gli angoli opposti sono supplementari: pertanto $ABFE$ è inscrivibile in una circonferenza $\gamma$.

## b)

Calcoliamo le misure dei lati. Sia $G$ il punto medio di $CD$: il triangolo $VHG$ è rettangolo isoscele con $VH = HG = 7$, quindi $VG = 7\sqrt{2}$. Poiché $\cos\varphi = \frac{3}{5}$, si ha $\sin\varphi = \frac{4}{5}$. Detta $L$ l'intersezione di $\alpha$ con $VG$, applicando il teorema dei seni al triangolo $HLG$ si ricava $LG = 4\sqrt{2}$, da cui

$$VL = VG - LG = 7\sqrt{2} - 4\sqrt{2} = 3\sqrt{2}.$$

I triangoli $VCD$ e $VEF$ sono simili con rapporto $\dfrac{VL}{VG} = \dfrac{3\sqrt{2}}{7\sqrt{2}} = \dfrac{3}{7}$, quindi

$$EF = \frac{3}{7}\cdot CD = \frac{3}{7}\cdot 7 = 3.$$

L'altezza del trapezio, cioè la distanza $HL$, si ottiene con il teorema dei seni nel triangolo $VHL$ e vale $HL = 5$. Detto $K$ il piede della perpendicolare da $E$ ad $AB$, si ha

$$AK = \frac{AB - EF}{2} = \frac{7 - 3}{2} = 2, \qquad AE = \sqrt{AK^2 + EK^2} = \sqrt{4 + 25} = \sqrt{29}.$$

Verifichiamo la circoscrivibilità confrontando le somme dei lati opposti:

$$AB + EF = 7 + 3 = 10, \qquad AE + BF = 2\sqrt{29} \approx 10{,}77.$$

Poiché $10 \ne 2\sqrt{29}$, il trapezio **non** è circoscrivibile a una circonferenza.

## c)

Una delle due parti è la piramide di vertice $V$ e base il trapezio $ABFE$. La sua base ha area

$$\text{Area}(ABFE) = \frac{(AB + EF)\cdot HL}{2} = \frac{(7 + 3)\cdot 5}{2} = 25\ \text{cm}^2.$$

La distanza di $V$ dal piano $\alpha$ è $VS = VH\cos\varphi = 7\cdot\dfrac{3}{5} = \dfrac{21}{5}$, quindi

$$V(VABFE) = \frac{1}{3}\cdot 25\cdot\frac{21}{5} = 35\ \text{cm}^3.$$

Il volume della piramide originale è

$$V(VABCD) = \frac{1}{3}\cdot 49\cdot 7 = \frac{343}{3}\ \text{cm}^3,$$

e quindi l'altra parte ha volume

$$V(ABCDEF) = \frac{343}{3} - 35 = \frac{238}{3}\ \text{cm}^3.$$

## d)

Fissiamo il riferimento con origine in $H$, asse $x$ coincidente con la retta $AB$ e asse $y$ coincidente con la retta $HL$. I vertici del trapezio nel piano $\alpha$ sono

$$A = (-3{,}5;\ 0), \quad B = (3{,}5;\ 0), \quad E = (-1{,}5;\ 5), \quad F = (1{,}5;\ 5).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="278.807" height="254.407" viewBox="-72 -72 209.105 190.805"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 68.883h195.924"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M121.974 66.483c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="26.092" y="68.883" stroke="none" font-family="cmmi10" font-size="10" transform="translate(101.695 2.153)">x</text><path fill="none" d="M26.092 94.49V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M23.692-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="26.092" y="68.883" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -133.515)">y</text><path fill="none" stroke="red" stroke-width=".8" d="M107.353 36.874c0-44.88-36.381-81.261-81.26-81.261S-55.17-8.006-55.17 36.873s36.381 81.262 81.261 81.262 81.261-36.381 81.261-81.261Zm-81.26 0"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-48.596 68.883H100.78L58.1-37.815H-5.917Z"/><path stroke="none" d="M-46.946 68.883a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="26.092" y="68.883" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-85.721 10.366)">A</text><path stroke="none" d="M102.43 68.883a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="26.092" y="68.883" stroke="none" font-family="cmmi10" font-size="10" transform="translate(78.221 10.366)">B</text><path stroke="none" d="M59.751-37.815a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="26.092" y="68.883" stroke="none" font-family="cmmi10" font-size="10" transform="translate(35.542 -110.23)">F</text><path stroke="none" d="M-4.267-37.815a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="26.092" y="68.883" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-43.5 -110.23)">E</text><path stroke="none" d="M27.217 36.874a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0m-1.125 0"/><text x="26.092" y="68.883" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -28.593)">C</text></g></svg>
</figure>

Imponiamo che la circonferenza $x^2 + y^2 + ax + by + c = 0$ passi per $A$, $B$ ed $F$:

$$\begin{cases} \dfrac{49}{4} - \dfrac{7}{2}a + c = 0, \\[4pt] \dfrac{49}{4} + \dfrac{7}{2}a + c = 0, \\[4pt] \dfrac{9}{4} + 25 + \dfrac{3}{2}a + 5b + c = 0. \end{cases}$$

Sottraendo membro a membro le prime due equazioni si ottiene $a = 0$, come atteso dalla simmetria del trapezio rispetto all'asse $y$. Dalla prima equazione segue $c = -\dfrac{49}{4}$, e dalla terza $b = -3$. L'equazione della circonferenza $\gamma$ circoscritta al trapezio è dunque

$$x^2 + y^2 - 3y - \frac{49}{4} = 0.$$

*Fonte:* [📄 PDF p.79](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
