

**Quesito:** [[Quesiti/ques_2002_suppletiva_ordinamento_2002_questionario_36_9|2002 Suppletiva Ordinamento — Questionario — Quesito 9]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_questionario_36|2002 Suppletiva Ordinamento — Questionario]]

Dato un tetraedro regolare, si considera il quadrilatero avente per vertici i punti medi di quattro spigoli (i punti medi degli spigoli di due facce, escluso lo spigolo comune). Si vuole dimostrare che tale quadrilatero è un quadrato.

Sia $ABCD$ il tetraedro regolare, di spigolo $\ell$ (tutti gli spigoli sono uguali). Consideriamo i punti medi

$$K=\text{punto medio di } AB,\qquad L=\text{punto medio di } BD,\qquad O=\text{punto medio di } CD,\qquad N=\text{punto medio di } AC,$$

e il quadrilatero $KLON$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="249.027" height="163.864" viewBox="-72 -72 186.77 122.898"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="m10.982-58.57-68.3 102.449 157.09-6.83-88.79-95.62M10.982-58.57l27.32 64.884M-57.317 43.879l95.62-37.565M99.772 37.049 38.302 6.314"/><path fill="#e1e1ff" stroke="#00f" stroke-width=".8" d="m-23.176-7.356 13.663 32.449 78.56-3.416-13.663-32.448Z"/><path stroke="none" d="M12.902-58.57a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M-55.397 43.879a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M101.69200000000001 37.049a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M40.222 6.314a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-13.995 -105.982)">A</text><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-90.164 3.417)">B</text><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(82.078 -3.413)">C</text><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.608 -34.148)">D</text><path fill="#00f" stroke="none" d="M-21.256-7.356a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M-7.593 25.093a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M70.96600000000001 21.677a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M57.304-10.771a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-57.145 -47.818)">K</text><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-41.08 -8.42)">L</text><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(51.352 -11.835)">O</text><text x="21.227" y="43.879" stroke="none" font-family="cmmi10" font-size="10" transform="translate(37.69 -51.233)">N</text></g></svg>
</figure>

**1) Il quadrilatero è un rombo.**

Usiamo ripetutamente la proprietà: *il segmento che congiunge i punti medi di due lati di un triangolo è parallelo al terzo lato e uguale alla sua metà.*

- Nel triangolo $ABC$: $K$ ed $N$ sono i punti medi di $AB$ e $AC$, quindi $KN \parallel BC$ e $KN=\dfrac{BC}{2}=\dfrac{\ell}{2}$.
- Nel triangolo $BCD$: $L$ ed $O$ sono i punti medi di $BD$ e $CD$, quindi $LO \parallel BC$ e $LO=\dfrac{BC}{2}=\dfrac{\ell}{2}$.
- Nel triangolo $ABD$: $K$ ed $L$ sono i punti medi di $AB$ e $BD$, quindi $KL \parallel AD$ e $KL=\dfrac{AD}{2}=\dfrac{\ell}{2}$.
- Nel triangolo $ACD$: $N$ ed $O$ sono i punti medi di $AC$ e $CD$, quindi $NO \parallel AD$ e $NO=\dfrac{AD}{2}=\dfrac{\ell}{2}$.

Dunque i lati opposti sono paralleli ($KN \parallel LO$ e $KL \parallel NO$) e tutti e quattro i lati sono uguali a $\dfrac{\ell}{2}$: il quadrilatero $KLON$ è un **rombo**.

**2) Il rombo ha un angolo retto.**

I due lati consecutivi $KL$ ed $KN$ sono paralleli rispettivamente agli spigoli $AD$ e $BC$. Basta quindi dimostrare che nel tetraedro regolare gli spigoli opposti $AD$ e $BC$ sono perpendicolari.

Sia $M$ il punto medio di $BC$. I triangoli $ABC$ e $DBC$ sono equilateri, quindi le mediane $AM$ e $DM$ sono anche altezze relative a $BC$:

$$AM \perp BC \qquad\text{e}\qquad DM \perp BC.$$

Poiché $BC$ è perpendicolare a due rette distinte $AM$ e $DM$ del piano $ADM$, la retta $BC$ è perpendicolare all'intero piano $ADM$, e in particolare alla retta $AD$ che gli appartiene:

$$BC \perp AD.$$

Essendo $KL \parallel AD$ e $KN \parallel BC$, ne segue $KL \perp KN$: il rombo $KLON$ ha un angolo retto.

**Conclusione.** Un rombo con un angolo retto è un **quadrato**. Il quadrilatero avente per vertici i punti medi dei quattro spigoli considerati è quindi un quadrato, di lato $\dfrac{\ell}{2}$.

*Fonte:* [📄 PDF p.41](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
