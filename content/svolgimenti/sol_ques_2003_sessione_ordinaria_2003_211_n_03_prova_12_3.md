

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_3|2003 Ordinaria — Prova (Ordinamento) — Quesito 3]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

Dal punto $A$, accessibile, è visibile il punto $B$, inaccessibile; da $A$ si può raggiungere un punto $P$ dal quale sono visibili sia $A$ sia $B$. Si può misurare la distanza $AP$ e $P$ non è allineato con $A$ e $B$. Vogliamo determinare la distanza $AB$ usando il teorema dei seni.

## Impostazione

Poiché $A$, $B$ e $P$ non sono allineati, essi individuano un triangolo $ABP$. Di questo triangolo conosciamo, o possiamo misurare direttamente, i seguenti elementi:

- il lato $AP$, misurabile perché entrambi gli estremi sono accessibili;
- l'angolo $\alpha = \widehat{BAP}$, che si misura in $A$ traguardando le due direzioni $AB$ e $AP$;
- l'angolo $\beta = \widehat{APB}$, che si misura in $P$ traguardando le due direzioni $PA$ e $PB$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="175.32" height="150.033" viewBox="-72 -72 131.49 112.524"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 23.389h102.45l-47.81-81.96Z"/><path stroke="none" d="M-56.104000000000006 23.389a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M46.345 23.389a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M-1.4639999999999997-58.57a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.904" y="23.389" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.904" y="23.389" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.982 10.366)">P</text><text x="-57.904" y="23.389" stroke="none" font-family="cmmi10" font-size="10" transform="translate(50.596 -85.492)">B</text><g stroke="none" font-size="10"><text x="-57.904" y="23.389" font-family="cmmi10" transform="translate(15.463 11.033)">AP</text><text x="-39.262" y="23.389" font-family="cmr10" transform="translate(15.463 11.033)">(misurabile)</text></g><text x="-57.904" y="23.389" stroke="none" font-family="cmmi10" font-size="10" transform="translate(15.562 -8.773)">®</text><text x="-57.904" y="23.389" stroke="none" font-family="cmmi10" font-size="10" transform="translate(80.559 -7.743)">¯</text></g></svg>
</figure>

## Calcolo della distanza

In ogni triangolo la somma degli angoli interni è $180^\circ$, quindi il terzo angolo, quello in $B$, vale

$$\widehat{ABP} = 180^\circ - (\alpha + \beta).$$

Nel triangolo $ABP$ il lato $AB$ è opposto all'angolo $\beta = \widehat{APB}$, mentre il lato noto $AP$ è opposto all'angolo $\widehat{ABP}$. Per il **teorema dei seni** i lati sono proporzionali ai seni degli angoli opposti:

$$\frac{AB}{\sin \widehat{APB}} = \frac{AP}{\sin \widehat{ABP}}.$$

Ricavando $AB$ si ottiene

$$AB = AP \cdot \frac{\sin \widehat{APB}}{\sin \widehat{ABP}} = AP \cdot \frac{\sin \beta}{\sin\big(180^\circ - (\alpha+\beta)\big)}.$$

Poiché $\sin\big(180^\circ - (\alpha+\beta)\big) = \sin(\alpha+\beta)$, la distanza cercata è

$$\boxed{\,AB = AP \cdot \frac{\sin \beta}{\sin(\alpha + \beta)}\,}$$

## Osservazione

La formula ha senso perché, essendo $P$ non allineato con $A$ e $B$, il triangolo $ABP$ è effettivamente non degenere: gli angoli $\alpha$ e $\beta$ sono entrambi non nulli e la loro somma è minore di $180^\circ$, dunque $\sin(\alpha+\beta) \neq 0$ e il denominatore non si annulla. Misurate quindi la lunghezza $AP$ e i due angoli $\alpha$ e $\beta$, la distanza $AB$ resta completamente determinata pur non potendo raggiungere il punto $B$.

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
