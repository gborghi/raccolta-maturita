

**Quesito:** [[Quesiti/ques_2001_suppletiva_pni_2001_questionario_48_9|2001 Suppletiva PNI — Questionario — Quesito 9]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_questionario_48|2001 Suppletiva PNI — Questionario]]

**Quesito.** Stabilire, motivando la risposta, se sia possibile inscrivere in una semicirconferenza un triangolo che non sia rettangolo.

**Risposta: no.** Ogni triangolo inscritto in una semicirconferenza è necessariamente rettangolo. Questo è il contenuto del *teorema di Talete* (o teorema dell'angolo inscritto in una semicirconferenza), a cui alludono i versi di Dante.

Consideriamo una semicirconferenza di centro $O$ e raggio $r$, avente per diametro il segmento $\overline{AB}$. Un triangolo inscritto nella semicirconferenza ha due vertici che coincidono con gli estremi $A$ e $B$ del diametro, mentre il terzo vertice $C$ è un punto qualsiasi dell'arco (distinto da $A$ e da $B$). In particolare, uno dei lati del triangolo coincide sempre con il diametro $\overline{AB}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="251.538" height="142.767" viewBox="-72 -72 188.653 107.075"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 21.106c0-44 35.668-79.668 79.667-79.668s79.668 35.668 79.668 79.668M-57.904 21.106H101.43"/><path stroke="none" d="M23.443 21.106a1.68 1.68 0 1 0-3.36 0 1.68 1.68 0 0 0 3.36 0m-1.68 0"/><text x="21.763" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><path stroke="none" d="M-55.664 21.106a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><text x="21.763" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-90.7 10.366)">A</text><path stroke="none" d="M103.67 21.106a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><text x="21.763" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(83.2 10.366)">B</text><path stroke="none" d="M24.003-58.57a2.24 2.24 0 1 0-4.48 0 2.24 2.24 0 0 0 4.48 0m-2.24 0"/><text x="21.763" y="21.106" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.931 -83.21)">C</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.904 21.106 79.667-79.677 79.668 79.677"/><path fill="none" stroke-dasharray="3.0,3.0" d="M21.763 21.106v-79.677"/><path fill="none" d="m10.61-47.408 11.153 8.763 11.154-8.763"/></g></svg>
</figure>

**Dimostrazione (angolo alla circonferenza).** L'angolo $A\hat{C}B$ è un angolo alla circonferenza che insiste sull'arco $\overline{AB}$; il corrispondente angolo al centro è l'angolo $A\hat{O}B$, che è piatto perché $A$, $O$, $B$ sono allineati sul diametro. Poiché un angolo alla circonferenza è la metà del corrispondente angolo al centro, si ha
$$A\hat{C}B = \frac{1}{2}\, A\hat{O}B = \frac{1}{2}\cdot 180^\circ = 90^\circ.$$
Dunque l'angolo in $C$ è retto, qualunque sia la posizione di $C$ sull'arco.

**Dimostrazione alternativa (triangoli isosceli).** Congiungiamo $C$ con il centro $O$. Poiché $\overline{OA} = \overline{OB} = \overline{OC} = r$, i triangoli $OAC$ e $OBC$ sono isosceli. Detti
$$\alpha = O\hat{A}C = O\hat{C}A, \qquad \beta = O\hat{B}C = O\hat{C}B,$$
la somma degli angoli interni del triangolo $ABC$ dà
$$\alpha + \beta + (\alpha + \beta) = 180^\circ \;\Rightarrow\; 2(\alpha + \beta) = 180^\circ \;\Rightarrow\; A\hat{C}B = \alpha + \beta = 90^\circ.$$

In entrambi i casi l'angolo opposto al diametro risulta retto. Non esiste quindi alcun triangolo inscritto nella semicirconferenza che non sia rettangolo: la risposta al quesito, e ai versi di Dante, è negativa.

*Fonte:* [📄 PDF p.53](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
