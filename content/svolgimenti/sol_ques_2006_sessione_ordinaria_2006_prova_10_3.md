

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_10_3|2006 Sessione Ordinaria — Prova (p.10) — Quesito 3]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

Si indichi con $\alpha$ l'angolo che una diagonale di un cubo forma con una faccia. La misura di $\alpha$, espressa in radianti, è:

- **[A]** $\alpha=\arcsin\dfrac{\sqrt{3}}{3}$;
- **[B]** $\alpha=\arccos\dfrac{\sqrt{3}}{6}$;
- **[C]** $\alpha=\arctan\dfrac{\sqrt{6}}{3}$;
- **[D]** un valore diverso dai precedenti.

Una sola alternativa è corretta: la si individui fornendone un'esauriente spiegazione.

## Impostazione

Consideriamo il cubo $ABCD\text{-}EFGH$ di spigolo $s$, con la faccia $ABCD$ e il vertice $H$ posto sopra $D$. La diagonale del cubo che scegliamo è $BH$: essa congiunge il vertice $B$ della faccia $ABCD$ con il vertice opposto $H$.

La proiezione ortogonale di $H$ sulla faccia $ABCD$ è il vertice $D$; quindi la proiezione della diagonale $BH$ sul piano della faccia è la diagonale $BD$ della faccia stessa. Ne segue che l'angolo $\alpha$ che $BH$ forma con la faccia è l'angolo $\widehat{HBD}$ del triangolo $BDH$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="177.522" height="174.649" viewBox="-72 -72 133.141 130.987"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="m-57.446 45.018 29.597-29.597M-27.849 15.421h73.992M-27.849 15.421v-73.992"/><path fill="none" d="M-57.446 45.018h73.992L46.143 15.42v-73.992H-27.85l-29.597 29.597v73.992"/><path fill="none" d="M16.546 45.018v-73.992l29.597-29.597M-57.446-28.974h73.992M-57.446 45.018v-73.992"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M16.546 45.018-27.85-58.571"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M16.546 45.018-27.85 15.42"/><path fill="none" stroke="red" stroke-width=".8" d="M-27.849 15.421v-73.992"/><path fill="none" d="M-27.855 6.18h5.548v9.247M14.696 34.661a12.95 12.95 0 0 0-8.963 6.277"/><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(54.116 -10.793)">®</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.525 10.366)">B</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(107.121 -26.18)">C</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(17.507 -33.13)">D</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.491 -70.575)">E</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.525 -70.575)">F</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(107.121 -107.121)">G</text><text x="-57.446" y="45.018" stroke="none" font-family="cmmi10" font-size="10" transform="translate(25.034 -107.121)">H</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-57.446" y="45.018" font-family="cmmi10" font-size="10" transform="translate(53.87 -59.008)">s</text><text x="-52.758" y="36.745" font-family="cmsy10" font-size="10" transform="translate(53.87 -59.008)">p</text><path d="M9.445-22.662h5v.4h-5z"/><text x="-44.425" y="45.018" font-family="cmr10" font-size="10" transform="translate(53.87 -59.008)">3</text></g></g><g fill="red" stroke="red"><text x="-57.446" y="45.018" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(18 -68.125)">s</text></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-57.446" y="45.018" font-family="cmmi10" font-size="10" transform="translate(40.924 -19.06)">s</text><text x="-52.758" y="36.745" font-family="cmsy10" font-size="10" transform="translate(40.924 -19.06)">p</text><path d="M-3.5 17.285h5v.4h-5z"/><text x="-44.425" y="45.018" font-family="cmr10" font-size="10" transform="translate(40.924 -19.06)">2</text></g></g></g></svg>
</figure>

## Calcolo delle lunghezze

Poiché $DH$ è uno spigolo perpendicolare alla faccia $ABCD$, il triangolo $BDH$ è rettangolo in $D$. Con spigolo $s$ si ha:

$$
DH = s, \qquad BD = s\sqrt{2}, \qquad BH = s\sqrt{3},
$$

dove $BD$ è la diagonale di una faccia (quadrato di lato $s$) e $BH$ è la diagonale del cubo.

## Determinazione dell'angolo

Nel triangolo rettangolo $BDH$, con l'angolo $\alpha=\widehat{HBD}$ e cateto opposto $DH$, si ha:

$$
\sin\alpha = \frac{DH}{BH} = \frac{s}{s\sqrt{3}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3},
$$

da cui

$$
\alpha = \arcsin\frac{\sqrt{3}}{3} \approx 0{,}6155 \text{ rad} \approx 35{,}26^\circ .
$$

## Verifica e scarto delle altre alternative

Per completezza calcoliamo anche le altre funzioni goniometriche di $\alpha$:

$$
\cos\alpha = \frac{BD}{BH} = \frac{s\sqrt{2}}{s\sqrt{3}} = \frac{\sqrt{6}}{3}, \qquad
\tan\alpha = \frac{DH}{BD} = \frac{s}{s\sqrt{2}} = \frac{\sqrt{2}}{2}.
$$

Dunque risulterebbe $\alpha=\arccos\dfrac{\sqrt{6}}{3}$ (non $\arccos\dfrac{\sqrt{3}}{6}$) e $\alpha=\arctan\dfrac{\sqrt{2}}{2}$ (non $\arctan\dfrac{\sqrt{6}}{3}$): le alternative **[B]** e **[C]** sono quindi errate.

L'unica espressione corretta è quella dell'alternativa **[A]**:

$$
\boxed{\;\alpha = \arcsin\frac{\sqrt{3}}{3}\;}
$$

*Fonte:* [📄 PDF p.21](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
