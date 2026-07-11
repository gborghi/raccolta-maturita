

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_2|2005 PNI Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Sia $ABC$ un triangolo qualsiasi. Sui suoi lati, ed esternamente ad esso, si costruiscono i tre quadrati $ABDE$, $BCFG$ e $CAHL$. Si vuole dimostrare che i triangoli $AHE$, $BDG$ e $CFL$ sono equivalenti al triangolo $ABC$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="249.628" height="235.934" viewBox="-72 -72 187.221 176.951"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e1e1ff" stroke="none" d="M-9.329 35.33h62.601L6.322-11.62Z"/><path fill="#ffd9d9" stroke="none" d="m-9.329 35.33-46.95-15.65 46.95 78.251Z"/><path fill="none" stroke-width=".8" d="M-9.329 35.33h62.601L6.322-11.62Z"/><path fill="none" d="M-9.329 35.33h62.601v62.601h-62.6ZM53.272 35.33 6.322-11.62l46.95-46.95 46.95 46.95Z"/><path fill="none" d="m6.322-11.62-15.65 46.95-46.951-15.65 15.65-46.95Z"/><path fill="none" stroke="red" stroke-width=".8" d="m-9.329 35.33-46.95-15.65 46.95 78.251Z"/><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(11.719 -50.483)">C</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.134 10.366)">B</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.134 66.017)">D</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.491 66.017)">E</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(58.691 -97.434)">F</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(113.084 -43.534)">G</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-59.608 -12.234)">H</text><text x="-9.329" y="35.33" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-41.639 -66.134)">L</text></g></svg>
</figure>

## Impostazione

Poniamo, come di consueto,
$$\alpha = \widehat{BAC}, \qquad \beta = \widehat{ABC}, \qquad \gamma = \widehat{BCA},$$
$$a = \overline{BC}, \qquad b = \overline{CA}, \qquad c = \overline{AB}.$$

Ricordiamo che l'area di un triangolo è uguale al semiprodotto di due lati per il seno dell'angolo compreso. In particolare, per il triangolo $ABC$,
$$A(ABC) = \frac{1}{2}\,\overline{AB}\cdot\overline{AC}\cdot\sin\alpha = \frac{1}{2}\,bc\,\sin\alpha,$$
e valgono le espressioni equivalenti $\dfrac{1}{2}\,ca\,\sin\beta$ e $\dfrac{1}{2}\,ab\,\sin\gamma$.

## Il triangolo AHE

I lati $AH$ ed $AE$ sono lati dei quadrati costruiti su $CA$ e su $AB$, dunque
$$\overline{AH} = \overline{CA} = b, \qquad \overline{AE} = \overline{AB} = c.$$

Attorno al vertice $A$ l'angolo giro si scompone nell'angolo $\widehat{EAB}=90^\circ$ (angolo del quadrato $ABDE$), nell'angolo $\widehat{BAC}=\alpha$, nell'angolo $\widehat{CAH}=90^\circ$ (angolo del quadrato $CAHL$) e nell'angolo cercato $\widehat{EAH}$. Perciò
$$\widehat{EAH} = 360^\circ - 90^\circ - 90^\circ - \alpha = 180^\circ - \alpha.$$

Poiché $\sin(\pi-\alpha)=\sin\alpha$, si ottiene
$$A(AHE) = \frac{1}{2}\,\overline{AH}\cdot\overline{AE}\cdot\sin\widehat{EAH} = \frac{1}{2}\,bc\,\sin(\pi-\alpha) = \frac{1}{2}\,bc\,\sin\alpha = A(ABC).$$

## Il triangolo BDG

Analogamente $\overline{BD}=\overline{AB}=c$ e $\overline{BG}=\overline{BC}=a$, mentre l'angolo compreso è
$$\widehat{DBG} = 360^\circ - 90^\circ - 90^\circ - \beta = 180^\circ - \beta.$$
Quindi
$$A(BDG) = \frac{1}{2}\,\overline{BD}\cdot\overline{BG}\cdot\sin\widehat{DBG} = \frac{1}{2}\,ca\,\sin(\pi-\beta) = \frac{1}{2}\,ca\,\sin\beta = A(ABC).$$

## Il triangolo CFL

Infine $\overline{CF}=\overline{CB}=a$ e $\overline{CL}=\overline{CA}=b$, con angolo compreso
$$\widehat{FCL} = 360^\circ - 90^\circ - 90^\circ - \gamma = 180^\circ - \gamma,$$
da cui
$$A(CFL) = \frac{1}{2}\,\overline{CF}\cdot\overline{CL}\cdot\sin\widehat{FCL} = \frac{1}{2}\,ab\,\sin(\pi-\gamma) = \frac{1}{2}\,ab\,\sin\gamma = A(ABC).$$

## Conclusione

I tre triangoli $AHE$, $BDG$ e $CFL$ hanno tutti area pari a quella del triangolo $ABC$: sono dunque equivalenti al triangolo $ABC$, come si voleva dimostrare.

*Fonte:* [📄 PDF p.151](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
