

**Quesito:** [[Quesiti/ques_2001_suppletiva_ordinamento_2001_questionario_32_2|2001 Suppletiva Ordinamento — Questionario — Quesito 2]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_questionario_32|2001 Suppletiva Ordinamento — Questionario]]

Si consideri il cubo di facce opposte $ABCD$ e $A'B'C'D'$. Detto $E$ il punto medio dello spigolo $AB$, sia $CF$ la retta perpendicolare a $DE$ condotta per $C$. I piani $D'DE$ e $C'CF$ dividono il cubo in quattro parti: si vuole stabilire a quale frazione del cubo equivale ciascuna di esse.

## Riduzione al quadrato di base

Il piano $D'DE$ contiene lo spigolo verticale $DD'$ e il piano $C'CF$ contiene lo spigolo verticale $CC'$: entrambi sono quindi piani **verticali**, e le loro tracce sulla faccia di base $ABCD$ sono le rette $DE$ e $CF$. Ognuna delle quattro parti del cubo è allora un prisma retto costruito sulla corrispondente regione della base, per cui

$$\frac{\text{volume della parte}}{\text{volume del cubo}}=\frac{\text{area della regione}}{\text{area del quadrato }ABCD}.$$

Basta perciò suddividere il quadrato di base con le due rette $DE$ e $CF$ e confrontare le aree.

## Le due rette e i punti notevoli

Poniamo lo spigolo del cubo uguale a $2s$ e fissiamo coordinate nel piano di base:

$$A=(0,0),\quad B=(2s,0),\quad C=(2s,2s),\quad D=(0,2s),\quad E=(s,0).$$

Il triangolo rettangolo $ADE$ ha cateti $AD=2s$ e $AE=s$, quindi

$$DE=\sqrt{AD^{2}+AE^{2}}=\sqrt{4s^{2}+s^{2}}=s\sqrt{5}.$$

La retta $DE$ ha direzione $(1,-2)$; la perpendicolare a $DE$ passante per $C$ ha direzione $(2,1)$. Intersecando le due rette si trova il piede della perpendicolare

$$P=\left(\tfrac{2s}{5},\,\tfrac{6s}{5}\right),$$

e prolungando la perpendicolare fino al lato $AD$ (cioè $x=0$) si ottiene

$$F=(0,s),\qquad\text{ossia }AF=FD=s\ \ (F\ \text{punto medio di }AD).$$

Nel triangolo rettangolo $DFP$ (angolo retto in $P$, perché $CF\perp DE$) l'ipotenusa è $FD=s$ e i cateti valgono

$$FP=\frac{s}{\sqrt{5}},\qquad DP=\frac{2s}{\sqrt{5}},\qquad FP^{2}+DP^{2}=\frac{s^{2}}{5}+\frac{4s^{2}}{5}=s^{2}=FD^{2}.$$

Le rette $DE$ e $CF$ si incontrano in $P$ e dividono il quadrato nelle quattro regioni evidenziate in figura.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="207.425" height="203.455" viewBox="-72 -72 155.568 152.591"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-56.847 66.622H68.346V-58.571H-56.847Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-56.847-58.57 5.749 66.621"/><path fill="none" stroke="red" stroke-width=".8" d="M68.346-58.57-56.847 4.025"/><path stroke="none" d="M-30.048-8.493a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="-56.847" y="66.622" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-56.847" y="66.622" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.726 10.366)">B</text><text x="-56.847" y="66.622" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.726 -128.726)">C</text><text x="-56.847" y="66.622" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-12.09 -128.726)">D</text><text x="-56.847" y="66.622" stroke="none" font-family="cmmi10" font-size="10" transform="translate(58.617 10.366)">E</text><text x="-56.847" y="66.622" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.352 -59.18)">F</text><text x="-56.847" y="66.622" stroke="none" font-family="cmmi10" font-size="10" transform="translate(28.572 -71.699)">P</text><g stroke="none"><text x="-55.647" y="62.685" font-family="cmr7" font-size="7" transform="translate(18.716 -30.363)">1</text><path d="M-36.931 33.559h3.986v.4h-3.986z"/><text x="-55.647" y="70.07" font-family="cmr7" font-size="7" transform="translate(18.716 -30.363)">5</text></g><g stroke="none"><text x="-55.647" y="62.685" font-family="cmr7" font-size="7" transform="translate(79.319 -44.447)">11</text><path d="M23.672 19.475h7.972v.4h-7.972z"/><text x="-55.647" y="70.07" font-family="cmr7" font-size="7" transform="translate(79.319 -44.447)">20</text></g><g stroke="none"><text x="-55.647" y="62.685" font-family="cmr7" font-size="7" transform="translate(50.014 -107.044)">1</text><path d="M-5.633-43.122h3.986v.4h-3.986z"/><text x="-55.647" y="70.07" font-family="cmr7" font-size="7" transform="translate(50.014 -107.044)">5</text></g><g stroke="none"><text x="-53.654" y="62.685" font-family="cmr7" font-size="7" transform="translate(4.83 -86.7)">1</text><path d="M-50.817-22.778h7.972v.4h-7.972z"/><text x="-55.647" y="70.07" font-family="cmr7" font-size="7" transform="translate(4.83 -86.7)">20</text></g></g></svg>
</figure>

## Le aree delle quattro regioni

L'area del quadrato di base è $(2s)^{2}=4s^{2}$.

- Triangolo $DFP$ (vicino al vertice $D$):
$$\text{Area}(DFP)=\frac{1}{2}\,DP\cdot FP=\frac{1}{2}\cdot\frac{2s}{\sqrt{5}}\cdot\frac{s}{\sqrt{5}}=\frac{s^{2}}{5}.$$

- Triangolo $DCP$ (lungo il lato $DC$): base $DC=2s$, altezza $2s-\dfrac{6s}{5}=\dfrac{4s}{5}$, quindi
$$\text{Area}(DCP)=\frac{1}{2}\cdot 2s\cdot\frac{4s}{5}=\frac{4s^{2}}{5}.$$

- Quadrilatero $AEPF$ (vicino al vertice $A$): la retta $CF$ taglia il triangolo $ADE$ (di area $\tfrac{1}{2}\cdot AD\cdot AE=s^{2}$) staccando proprio il triangolo $DFP$, dunque
$$\text{Area}(AEPF)=\text{Area}(ADE)-\text{Area}(DFP)=s^{2}-\frac{s^{2}}{5}=\frac{4s^{2}}{5}.$$

- Quadrilatero $EBCP$ (vicino al vertice $B$): per differenza dall'intero quadrato,
$$\text{Area}(EBCP)=4s^{2}-\left(\frac{s^{2}}{5}+\frac{4s^{2}}{5}+\frac{4s^{2}}{5}\right)=4s^{2}-\frac{9s^{2}}{5}=\frac{11s^{2}}{5}.$$

## Le frazioni del cubo

Dividendo ciascuna area per $4s^{2}$ si ottengono le frazioni cercate:

$$\frac{DFP}{ABCD}=\frac{s^{2}/5}{4s^{2}}=\frac{1}{20},\qquad
\frac{DCP}{ABCD}=\frac{4s^{2}/5}{4s^{2}}=\frac{1}{5},$$

$$\frac{AEPF}{ABCD}=\frac{4s^{2}/5}{4s^{2}}=\frac{1}{5},\qquad
\frac{EBCP}{ABCD}=\frac{11s^{2}/5}{4s^{2}}=\frac{11}{20}.$$

Le quattro parti del cubo equivalgono quindi rispettivamente a

$$\frac{1}{20},\qquad \frac{1}{5},\qquad \frac{1}{5},\qquad \frac{11}{20}$$

del cubo, con somma di controllo $\dfrac{1}{20}+\dfrac{4}{20}+\dfrac{4}{20}+\dfrac{11}{20}=1$.

*Fonte:* [📄 PDF p.33](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
