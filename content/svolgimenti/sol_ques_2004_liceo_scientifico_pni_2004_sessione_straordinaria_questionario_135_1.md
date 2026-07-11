

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_1|2004 PNI Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Si deve calcolare l'ampiezza dell'angolo diedro formato da due facce consecutive di un ottaedro regolare, espressa in gradi sessagesimali e approssimata al secondo.

Un ottaedro regolare ha tutte le facce triangoli equilateri; indichiamo con $s$ la lunghezza dello spigolo. Consideriamo due facce adiacenti, che condividono uno spigolo: siano $C$ e $D$ i suoi estremi e siano $E$ ed $F$ i due vertici opposti a tale spigolo, uno per ciascuna faccia.

Sia $H$ il punto medio dello spigolo comune $CD$. Poiché ogni faccia è un triangolo equilatero, i segmenti $HE$ e $HF$ sono le altezze delle due facce relative allo spigolo $CD$; essendo perpendicolari a $CD$, l'angolo $\overline{EHF}$ coincide con l'angolo diedro cercato. L'altezza di un triangolo equilatero di lato $s$ vale

$$EH = FH = \frac{s\sqrt{3}}{2}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="133.913" height="218.663" viewBox="-72 -72 100.435 163.998"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-60.224-58.57 12.174 9.728l-72.398 68.3M-60.224-58.57V78.027"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-60.224 9.729h72.398"/><path fill="none" d="M-52.712 9.729V2.217h-7.512"/><path stroke="none" d="M-58.303999999999995-58.57a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M-58.303999999999995 78.028a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M14.094 9.729a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0M-58.303999999999995 9.729a1.92 1.92 0 1 0-3.84 0 1.92 1.92 0 0 0 3.84 0m-1.92 0"/><text x="-60.224" y="9.729" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.98 -71.833)">E</text><text x="-60.224" y="9.729" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.91 78.666)">F</text><text x="-60.224" y="9.729" stroke="none" font-family="cmmi10" font-size="10" transform="translate(75.93 3.417)">H</text><text x="-60.224" y="9.729" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-8.714 3.417)">I</text><text x="-60.224" y="9.729" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.705 -12.187)">®</text><text x="-60.224" y="9.729" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.705 16.493)">®</text><g stroke="none"><text x="-59.024" y="5.791" font-family="cmmi7" font-size="7" transform="translate(10.414 -35.762)">s</text><text x="-55.249" y="-.044" font-family="cmsy7" font-size="7" transform="translate(10.414 -35.762)">p</text><path d="M-38.266-36.146h3.986v.34h-3.986z"/><text x="-48.68" y="5.791" font-family="cmr7" font-size="7" transform="translate(10.414 -35.762)">3</text><path d="M-48.61-28.733h14.33v.4h-14.33z"/><text x="-53.852" y="13.177" font-family="cmr7" font-size="7" transform="translate(10.414 -35.762)">2</text></g><g stroke="none"><text x="-58.918" y="5.791" font-family="cmmi7" font-size="7" transform="translate(11.147 -7.809)">s</text><path d="M-47.877-.78h3.986v.4h-3.986z"/><text x="-59.024" y="13.177" font-family="cmr7" font-size="7" transform="translate(11.147 -7.809)">2</text></g></g></svg>
</figure>

Sia $I$ il punto medio del segmento $EF$: esso coincide con il centro dell'ottaedro. Il triangolo $EHI$ è rettangolo in $I$ e, per simmetria, $HI$ dimezza l'angolo $\overline{EHF}$, che vale quindi $2\alpha$ con $\alpha = \overline{IHE}$. Inoltre la distanza del centro dal punto medio dello spigolo è metà dello spigolo, cioè

$$IH = \frac{s}{2}.$$

Nel triangolo rettangolo $EHI$ si ha $IH = EH\cdot\cos\alpha$, da cui

$$\cos\alpha = \frac{IH}{EH} = \frac{\dfrac{s}{2}}{\dfrac{s\sqrt{3}}{2}} = \frac{1}{\sqrt{3}}.$$

Pertanto

$$\alpha = \arccos\!\left(\frac{1}{\sqrt{3}}\right) \approx 0{,}9553\ \text{rad} \approx 54{,}7356^\circ = 54^\circ\,44'\,08''.$$

L'angolo diedro richiesto è il doppio di $\alpha$. Osserviamo anche che

$$\cos(2\alpha) = 2\cos^2\alpha - 1 = 2\cdot\frac{1}{3} - 1 = -\frac{1}{3},$$

quindi il diedro è esattamente $\arccos\!\left(-\dfrac{1}{3}\right)$. In gradi sessagesimali:

$$2\alpha = \arccos\!\left(-\frac{1}{3}\right) \approx 109{,}4712^\circ = 109^\circ\,28'\,16''.$$

L'angolo diedro formato da due facce consecutive dell'ottaedro regolare misura dunque circa $109^\circ\,28'\,16''$.

*Fonte:* [📄 PDF p.135](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
