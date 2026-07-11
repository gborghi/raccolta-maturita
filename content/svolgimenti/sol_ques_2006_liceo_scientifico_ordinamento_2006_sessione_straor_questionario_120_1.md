

**Quesito:** [[Quesiti/ques_2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120_1|2006 Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120|2006 Straordinaria — Questionario]]

Da un pentagono regolare di lato $L$ si recidono, in corrispondenza dei cinque vertici, cinque triangoli congruenti, in modo da ottenere un decagono regolare. Se ne determini il lato $s$, lasciando indicate le funzioni goniometriche degli angoli coinvolti.

Recidendo a ciascun vertice del pentagono un triangolo isoscele congruente, ogni lato del pentagono resta diviso in tre parti: due segmenti uguali, tagliati in prossimità dei due vertici estremi, e un segmento centrale che diventa un lato del decagono, di lunghezza $s$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="217.308" height="225.063" viewBox="-72 -72 162.981 168.797"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M9.22-58.57-71.87.326l31.014 95.6H59.297L90.311.327Z"/><path fill="none" stroke="#00f" stroke-width="1.2" d="m-13.257-42.352-36.135 26.46-13.942 42.68 13.942 42.679 36.135 26.46h44.955l36.135-26.46 13.942-42.68-13.942-42.679-36.135-26.46Z"/><path fill="#ffd9d9" stroke="none" d="m9.22-58.57-22.477 16.218h44.955Z"/><path fill="none" stroke="red" stroke-width=".8" d="m9.22-58.57-22.477 16.218M9.22-58.571l22.478 16.219"/><path stroke="none" d="M-11.657-42.352a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M33.298-42.352a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="9.22" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.278 -88.891)">D</text><text x="9.22" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-35.135 -65.723)">N</text><text x="9.22" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(26.01 -65.723)">Z</text><text x="9.22" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.344 -72.673)">s</text><g fill="gray" stroke="gray"><text x="9.22" y="26.787" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-75.957 -22.19)">L</text></g></g></svg>
</figure>

Consideriamo il vertice $D$ e il triangolo reciso $DNZ$, con $N$ e $Z$ appartenenti ai due lati del pentagono uscenti da $D$. Il segmento $NZ$ è un lato del decagono, quindi $NZ = s$; per simmetria il triangolo è isoscele sulla base $NZ$, cioè $\overline{DN} = \overline{DZ}$.

Poniamo $\overline{DN} = \overline{DZ} = x$. Su ciascun lato del pentagono i due segmenti recisi sono uguali, dunque il lato $L$ si scompone come

$$L = x + s + x = s + 2x \Rightarrow x = \frac{L-s}{2}.$$

La somma degli angoli interni di un pentagono è $(5-2)\cdot 180^\circ = 540^\circ$, quindi ogni angolo interno del pentagono regolare vale

$$\widehat{D} = \frac{540^\circ}{5} = 108^\circ.$$

Nel triangolo isoscele $DNZ$, di base $NZ = s$, lati obliqui $\overline{DN}=\overline{DZ}=x$ e angolo al vertice $\widehat{D} = 108^\circ$, tracciamo l'altezza relativa alla base: essa dimezza sia la base sia l'angolo al vertice. Nel triangolo rettangolo così ottenuto si ha

$$\frac{s}{2} = x\,\sin\frac{108^\circ}{2} = x\,\sin 54^\circ \Rightarrow s = 2x\,\sin 54^\circ.$$

Sostituendo $x = \dfrac{L-s}{2}$:

$$s = (L-s)\,\sin 54^\circ.$$

Risolvendo rispetto a $s$:

$$s + s\,\sin 54^\circ = L\,\sin 54^\circ \Rightarrow s\,(1+\sin 54^\circ) = L\,\sin 54^\circ,$$

$$\boxed{\,s = \dfrac{L\,\sin 54^\circ}{1+\sin 54^\circ}\,}.$$

Poiché $\sin 54^\circ = \cos 36^\circ = \dfrac{1+\sqrt{5}}{4}$, il lato del decagono vale numericamente $s \approx 0{,}447\,L$.

*Fonte:* [📄 PDF p.120](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
