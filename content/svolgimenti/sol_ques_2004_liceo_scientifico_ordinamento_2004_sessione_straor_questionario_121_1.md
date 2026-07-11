

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121_1|2004 Ordinamento Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121|2004 Ordinamento Straordinaria — Questionario]]

Si deve calcolare l'ampiezza dell'angolo diedro formato da due facce consecutive di un ottaedro regolare, espressa in gradi sessagesimali e approssimata al secondo.

## Impostazione geometrica

Due facce consecutive dell'ottaedro sono triangoli equilateri di lato $s$ che condividono uno spigolo. Siano $E$ e $F$ i due vertici opposti allo spigolo comune (uno per faccia) e sia $H$ il punto medio dello spigolo comune. I segmenti $\overline{EH}$ e $\overline{FH}$ sono le altezze delle due facce, entrambe perpendicolari allo spigolo comune, quindi l'angolo $E\hat{H}F$ è proprio l'angolo diedro cercato.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="243.773" height="108.819" viewBox="-72 -72 182.829 81.614"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="m-57.446-58.57 76.66 54.215 76.66-54.216M-57.446-58.57h153.32"/><path fill="none" stroke-dasharray="3.0,3.0" d="M19.214-4.355v-54.216"/><path fill="none" d="M19.214-14.37c-2.055 0-4.061.632-5.745 1.81M19.214-14.37c2.055 0 4.061.632 5.745 1.81M14.206-58.563v5.007h5.008"/><path stroke="none" d="M20.753999999999998-4.355a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0M-55.906-58.57a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0M97.414-58.57a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0M20.753999999999998-58.57a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0m-1.54 0"/><text x="19.214" y="-4.355" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.562 10.366)">H</text><text x="19.214" y="-4.355" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-88.151 -50.799)">E</text><text x="19.214" y="-4.355" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.193 -50.799)">F</text><text x="19.214" y="-4.355" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -57.749)">I</text><text x="19.214" y="-4.355" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-16.362 -18.504)">®</text><text x="19.214" y="-4.355" stroke="none" font-family="cmmi10" font-size="10" transform="translate(9.928 -18.504)">®</text></g></svg>
</figure>

Poniamo $2\alpha = E\hat{H}F$. Detto $I$ il punto medio di $\overline{EF}$, il segmento $\overline{HI}$ è l'asse di simmetria della figura e biseca l'angolo diedro; il triangolo $EHI$ è rettangolo in $I$.

## Calcolo dell'angolo

L'altezza di una faccia (triangolo equilatero di lato $s$) è

$$\overline{EH} = \frac{s\sqrt{3}}{2}.$$

Il cateto $\overline{IH}$ è la distanza dal punto medio dello spigolo al centro dell'ottaedro e vale metà spigolo:

$$\overline{IH} = \frac{s}{2}.$$

Nel triangolo rettangolo $EHI$ si ha $\overline{IH} = \overline{EH}\cdot\cos\alpha$, da cui

$$\cos\alpha = \frac{\overline{IH}}{\overline{EH}} = \frac{\dfrac{s}{2}}{\dfrac{s\sqrt{3}}{2}} = \frac{1}{\sqrt{3}}.$$

Pertanto

$$\alpha = \arccos\frac{1}{\sqrt{3}} \approx 0{,}9553\ \text{rad} \approx 54{,}7356^\circ \approx 54^\circ\,44'\,08''.$$

## Angolo diedro

L'angolo diedro richiesto è il doppio di $\alpha$:

$$2\alpha = 2\arccos\frac{1}{\sqrt{3}}.$$

Usando $\cos 2\alpha = 2\cos^2\alpha - 1 = 2\cdot\frac{1}{3} - 1 = -\frac{1}{3}$ si ottiene la forma compatta

$$2\alpha = \arccos\!\left(-\frac{1}{3}\right) \approx 109{,}4712^\circ.$$

Convertendo in gradi, primi e secondi:

$$2\alpha \approx 109^\circ\,28'\,16''.$$

L'angolo diedro formato da due facce consecutive di un ottaedro regolare misura quindi circa $109^\circ\,28'\,16''$.

*Fonte:* [📄 PDF p.121](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
