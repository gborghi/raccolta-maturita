

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_63_7|2009 Sessione Ordinaria Estero Europa — Prova — Quesito 7]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_63|2009 Sessione Ordinaria Estero Europa — Prova]]

La nave parte da $A$, naviga per $5$ ore lungo una rotta errata fino al punto $C$, poi vira di $23^\circ$ per dirigersi verso il porto $B$, che raggiunge dopo altre $3$ ore. La velocità $v$ è costante.

## Impostazione

Poiché la velocità è costante, le lunghezze dei due tratti percorsi sono proporzionali ai tempi:
$$\overline{AC} = 5v, \qquad \overline{CB} = 3v.$$

Nel punto $C$ la nave, che procedeva lungo la direzione $AC$, ruota la propria rotta di $23^\circ$. L'angolo interno del triangolo $ACB$ nel vertice $C$ è quindi il supplementare dell'angolo di virata:
$$\widehat{ACB} = 180^\circ - 23^\circ = 157^\circ.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="326.709" height="67.281" viewBox="-72 -72 245.032 50.46"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="M-57.904-35.509H70.132"/><g fill="#00f" stroke="none" font-size="10"><text x="-57.904" y="-35.509" font-family="cmr10" transform="translate(58.915 10.177)">5</text><text x="-52.904" y="-35.509" font-family="cmmi10" transform="translate(58.915 10.177)">v</text></g></g><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m70.132-35.509 70.701-30.011"/><g fill="#00f" stroke="none" font-size="10"><text x="-57.904" y="-35.509" font-family="cmr10" transform="translate(149.448 -18.739)">3</text><text x="-52.904" y="-35.509" font-family="cmmi10" transform="translate(149.448 -18.739)">v</text></g></g><g fill="red" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8"><path fill="none" d="M-57.904-35.509 140.833-65.52"/><text x="-57.904" y="-35.509" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(103.102 -4.44)">AB</text></g><path fill="none" stroke="gray" stroke-dasharray="0.4,2.0" d="M70.132-35.509h102.43"/><path fill="none" d="M90.618-35.509c0-2.75-.554-5.473-1.628-8.004"/><g stroke="none"><text x="-57.904" y="-35.509" font-family="cmr10" font-size="10" transform="translate(150.186 -2.19)">23</text><text x="-47.904" y="-39.138" font-family="cmsy7" font-size="7" transform="translate(150.186 -2.19)">±</text></g><path stroke="none" d="M-56.104-35.509a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.904" y="-35.509" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><path stroke="none" d="M71.932-35.509a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.904" y="-35.509" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.569 10.366)">C</text><path stroke="none" d="M142.633-65.52a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.904" y="-35.509" stroke="none" font-family="cmmi10" font-size="10" transform="translate(202.27 -26.595)">B</text></g></svg>
</figure>

## Calcolo della distanza AB

Applichiamo il teorema del coseno (di Carnot) al triangolo $ACB$:
$$\overline{AB}^{\,2} = \overline{AC}^{\,2} + \overline{CB}^{\,2} - 2\cdot\overline{AC}\cdot\overline{CB}\cdot\cos(157^\circ).$$

Sostituendo e ricordando che $\cos(157^\circ) = -\cos(23^\circ) \approx -0{,}9205$:
$$\overline{AB}^{\,2} = 25v^2 + 9v^2 - 30v^2\cos(157^\circ) \approx 34v^2 + 27{,}62\,v^2 = 61{,}62\,v^2.$$

Quindi
$$\overline{AB} = \sqrt{61{,}62}\;v \approx 7{,}85\,v.$$

## Tempo perso

Il tempo che sarebbe stato necessario percorrendo direttamente il tratto $AB$ è
$$t_{AB} = \frac{\overline{AB}}{v} \approx 7{,}85 \text{ ore}.$$

Il tempo effettivamente impiegato è invece $5 + 3 = 8$ ore. Il tempo perso a causa dell'errore è dunque
$$\Delta t = 8 - 7{,}85 = 0{,}15 \text{ ore} \approx 9 \text{ minuti}.$$

*Fonte:* [📄 PDF p.79](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/geometria #cluster/geometria
