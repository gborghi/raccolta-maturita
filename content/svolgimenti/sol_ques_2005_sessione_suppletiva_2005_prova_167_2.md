

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_167_2|2005 Suppletiva PNI — Prova — Quesito 2]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_167|2005 Suppletiva PNI — Prova]]

Siano $AB$, $AC$, $AD$ tre spigoli di un cubo di spigolo $s$: essi escono dallo stesso vertice $A$ e sono a due a due perpendicolari. I tre punti $B$, $C$, $D$ individuano un piano, e il solido $ABCD$ è un tetraedro con vertice in $A$ e tre spigoli mutuamente ortogonali, ciascuno lungo $s$. Vogliamo la distanza di $A$ dal piano $BCD$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="195.976" height="194.604" viewBox="-72 -72 146.982 145.953"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" d="M-57.542 59.984H33.53v-91.072h-91.072Z"/><path fill="none" stroke="gray" d="M-16.56 19.002h91.072V-72.07H-16.56ZM33.53 59.984l40.982-40.982M-57.542-31.088-16.56-72.07M33.53-31.088 74.512-72.07"/><path fill="none" stroke="#00f" stroke-width=".8" d="m33.53 59.984-91.072-91.072 40.982 50.09ZM-57.542 59.984H33.53M-57.542 59.984v-91.072M-57.542 59.984l40.982-40.982"/><path stroke="none" d="M-55.142 59.984a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0M35.93 59.984a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0M-55.142-31.088a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0M-14.159999999999998 19.002a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0m-2.4 0"/><text x="-57.542" y="59.984" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.542" y="59.984" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.605 10.366)">B</text><text x="-57.542" y="59.984" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.395 -94.605)">C</text><text x="-57.542" y="59.984" stroke="none" font-family="cmmi10" font-size="10" transform="translate(44.515 -37.565)">D</text></g></svg>
</figure>

## a) Metodo delle coordinate

Scegliamo un riferimento con origine in $A$ e assi diretti lungo i tre spigoli:
$$A=(0,0,0),\qquad B=(s,0,0),\qquad C=(0,s,0),\qquad D=(0,0,s).$$
Il piano passante per $B$, $C$, $D$ ha equazione
$$x+y+z=s.$$
La distanza del punto $A=(0,0,0)$ da tale piano è allora
$$d=\frac{|0+0+0-s|}{\sqrt{1^2+1^2+1^2}}=\frac{s}{\sqrt{3}}=\frac{s\sqrt{3}}{3}.$$

## b) Metodo del volume

Il tetraedro $ABCD$ ha in $A$ tre spigoli ortogonali di lunghezza $s$, quindi il suo volume è
$$V=\frac{1}{6}\,s\cdot s\cdot s=\frac{s^{3}}{6}.$$
La faccia $BCD$ è un triangolo equilatero i cui lati sono diagonali di facce del cubo:
$$\overline{BC}=\overline{CD}=\overline{DB}=s\sqrt{2},$$
per cui la sua area vale
$$\text{Area}(BCD)=\frac{\sqrt{3}}{4}\,\big(s\sqrt{2}\big)^{2}=\frac{\sqrt{3}}{2}\,s^{2}.$$
Considerando il tetraedro con base $BCD$ e altezza uguale alla distanza cercata $d$, da $V=\frac{1}{3}\,\text{Area}(BCD)\cdot d$ si ottiene
$$d=\frac{3V}{\text{Area}(BCD)}=\frac{3\cdot\dfrac{s^{3}}{6}}{\dfrac{\sqrt{3}}{2}\,s^{2}}=\frac{s}{\sqrt{3}}=\frac{s\sqrt{3}}{3}.$$

I due procedimenti concordano: la distanza del vertice $A$ dal piano dei punti $B$, $C$, $D$ è
$$d=\frac{s\sqrt{3}}{3}\approx 0{,}577\,s.$$

*Fonte:* [📄 PDF p.177](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
