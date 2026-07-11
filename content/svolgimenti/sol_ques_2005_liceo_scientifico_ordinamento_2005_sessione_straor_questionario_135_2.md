

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_2|2005 Ordinamento Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Sia $ABC$ un triangolo qualsiasi. Sui suoi lati, esternamente ad esso, si costruiscono i tre quadrati $ABDE$, $BCFG$ e $CAHL$. Si vuole dimostrare che i triangoli $AHE$, $BDG$ e $CFL$ sono equivalenti (cioè hanno la stessa area) al triangolo $ABC$.

Poniamo, come di consueto, $a = BC$, $b = CA$, $c = AB$ e indichiamo con $\alpha$, $\beta$, $\gamma$ gli angoli interni del triangolo nei vertici $A$, $B$, $C$ rispettivamente.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="230.644" height="226.216" viewBox="-72 -72 172.983 169.662"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" d="M-13.6 26.787h56.906v56.906H-13.6ZM43.306 26.787.626-15.892l42.68-42.679 42.679 42.68Z"/><path fill="none" stroke="gray" d="M.626-15.892-13.6 26.788-56.28 12.56l14.227-42.679Z"/><path fill="#c0c0ff" stroke="none" d="M-13.6 26.787h56.906L.626-15.892Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-13.6 26.787h56.906L.626-15.892Z"/><path fill="#ffc0c0" stroke="none" d="m-13.6 26.787-42.68-14.226 42.68 71.132Z"/><path fill="none" stroke="red" stroke-width=".8" d="m-13.6 26.787-42.68-14.226 42.68 71.132Z"/><path fill="#ffc0c0" stroke="none" d="M43.306 26.787v56.906l42.679-99.585Z"/><path fill="none" stroke="red" stroke-width=".8" d="M43.306 26.787v56.906l42.679-99.585Z"/><path fill="#ffc0c0" stroke="none" d="m.626-15.892 42.68-42.679-85.359 28.453Z"/><path fill="none" stroke="red" stroke-width=".8" d="m.626-15.892 42.68-42.679-85.359 28.453Z"/><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(60.438 10.366)">B</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(10.295 -46.212)">C</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(52.627 67.272)">D</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.491 67.272)">E</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(52.996 -88.891)">F</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(103.118 -39.262)">G</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-55.337 -10.81)">H</text><text x="-13.6" y="26.787" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-38.791 -60.438)">L</text></g></svg>
</figure>

Lo strumento chiave è la formula trigonometrica dell'area di un triangolo: l'area è uguale al semiprodotto di due lati per il seno dell'angolo fra essi compreso. In particolare
$$A(ABC) = \frac{1}{2}\, b\, c\, \sin\alpha.$$

**Il triangolo $AHE$.** I lati $AE$ e $AH$ sono lati di quadrati: $AE$ appartiene al quadrato $ABDE$ costruito su $AB$, dunque $AE = AB = c$; $AH$ appartiene al quadrato $CAHL$ costruito su $CA$, dunque $AH = CA = b$. Osserviamo ora l'angolo $\widehat{EAH}$ nel vertice $A$. Attorno ad $A$ i quattro angoli si sommano a un angolo giro:
$$\widehat{EAH} + \widehat{EAB} + \widehat{BAC} + \widehat{CAH} = 2\pi.$$
Poiché $AE \perp AB$ e $AH \perp AC$ (lati consecutivi di un quadrato), si ha $\widehat{EAB} = \widehat{CAH} = \dfrac{\pi}{2}$, e $\widehat{BAC} = \alpha$; quindi
$$\widehat{EAH} = 2\pi - \frac{\pi}{2} - \frac{\pi}{2} - \alpha = \pi - \alpha.$$
L'angolo $\widehat{EAH}$ è dunque il supplementare di $\alpha$, e ha lo stesso seno: $\sin(\pi - \alpha) = \sin\alpha$. Perciò
$$A(AHE) = \frac{1}{2}\, AE \cdot AH \cdot \sin\widehat{EAH} = \frac{1}{2}\, b\, c\, \sin(\pi - \alpha) = \frac{1}{2}\, b\, c\, \sin\alpha = A(ABC).$$

**Il triangolo $BDG$.** In modo del tutto analogo, $BD = AB = c$ e $BG = BC = a$ sono lati dei quadrati costruiti su $AB$ e su $BC$, e l'angolo in $B$ vale
$$\widehat{DBG} = 2\pi - \frac{\pi}{2} - \frac{\pi}{2} - \beta = \pi - \beta,$$
da cui
$$A(BDG) = \frac{1}{2}\, a\, c\, \sin(\pi - \beta) = \frac{1}{2}\, a\, c\, \sin\beta = A(ABC).$$

**Il triangolo $CFL$.** Allo stesso modo $CF = BC = a$ e $CL = CA = b$, con
$$\widehat{FCL} = 2\pi - \frac{\pi}{2} - \frac{\pi}{2} - \gamma = \pi - \gamma,$$
e quindi
$$A(CFL) = \frac{1}{2}\, a\, b\, \sin(\pi - \gamma) = \frac{1}{2}\, a\, b\, \sin\gamma = A(ABC).$$

**Conclusione.** I tre triangoli $AHE$, $BDG$ e $CFL$ hanno tutti la stessa area del triangolo $ABC$: sono pertanto equivalenti ad esso (e fra loro). L'idea geometrica è semplice: ciascuno di questi triangoli condivide con $ABC$ due lati (i lati dei quadrati, uguali ai lati del triangolo) e l'angolo compreso è il supplementare del corrispondente angolo interno, che ha lo stesso seno.

*Fonte:* [📄 PDF p.136](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
