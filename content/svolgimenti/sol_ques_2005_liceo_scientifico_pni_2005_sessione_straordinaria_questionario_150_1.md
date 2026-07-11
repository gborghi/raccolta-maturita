

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_1|2005 PNI Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Si consideri un tronco di piramide quadrangolare regolare la cui base maggiore ha area quadrupla della minore, e il piano $\alpha$ equidistante dalle due basi. Si vuole stabilire se i dati bastano a determinare il rapporto fra i volumi dei due tronchi in cui $\alpha$ divide quello dato.

**I dati sono sufficienti:** il rapporto cercato è un numero puro, che dipende soltanto dalle proporzioni della figura e non dalle sue misure assolute.

## Lato della sezione intermedia

Poiché la base maggiore ha area quadrupla della minore, il suo lato è il doppio: posto uguale a $l$ il lato della base minore, quello della base maggiore vale $2l$.

Il tronco è porzione di una piramide, quindi il lato della sezione quadrata varia linearmente con la quota. Passando dalla base minore (lato $l$) alla base maggiore (lato $2l$), a metà altezza — dove taglia il piano $\alpha$ — il lato vale la media dei due:

$$\ell_\alpha = \frac{l + 2l}{2} = \frac{3}{2}\,l .$$

La sezione intermedia è quindi un quadrato di lato $\frac{3}{2}l$ e area $\frac{9}{4}l^{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="201.497" height="162.02" viewBox="-72 -72 151.123 121.515"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-71.486 35.435H53.706L22.408-58.46h-62.596Z"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M-55.837-11.512h93.894"/><g stroke="none" font-size="10"><text x="-71.486" y="35.435" font-family="cmr10" transform="translate(58.506 10.477)">2</text><text x="-66.486" y="35.435" font-family="cmmi10" transform="translate(58.506 10.477)">l</text></g><text x="-71.486" y="35.435" stroke="none" font-family="cmmi10" font-size="10" transform="translate(61.006 -97.428)">l</text><g fill="red" stroke="red"><text x="-71.486" y="35.435" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(113.077 -44.794)">®</text></g><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-70.286" y="31.498" font-family="cmr7" font-size="7" transform="translate(2.55 -44.447)">3</text><path d="M-67.737-11.712h3.986v.4h-3.986z"/><text x="-70.286" y="38.883" font-family="cmr7" font-size="7" transform="translate(2.55 -44.447)">2</text><text x="-65.1" y="35.435" font-family="cmmi10" font-size="10" transform="translate(2.55 -44.447)">l</text></g></g><path fill="none" d="M66.225 35.035v-46.147"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M68.625 33.155c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08M63.825-9.232c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-71.486" y="35.435" stroke="none" font-family="cmmi10" font-size="10" transform="translate(141.245 -20.001)">h</text><path fill="none" d="M66.225-11.912V-58.06"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M68.625-13.792c-1.44.38-2.12 1.226-2.4 2.08-.28-.854-.96-1.7-2.4-2.08M63.825-56.18c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-71.486" y="35.435" stroke="none" font-family="cmmi10" font-size="10" transform="translate(141.245 -66.949)">h</text></g></svg>
</figure>

## Volumi dei due tronchi

Detta $h$ l'altezza di ciascuno dei due tronchi (metà dell'altezza totale), uso la formula del volume del tronco di piramide

$$V = \frac{1}{3}\,h\left(A_1 + A_2 + \sqrt{A_1 \cdot A_2}\right).$$

**Tronco inferiore** (basi di lato $2l$ e $\frac{3}{2}l$, aree $4l^{2}$ e $\frac{9}{4}l^{2}$):

$$V_1 = \frac{1}{3}\,h\left(4l^{2} + \frac{9}{4}l^{2} + \sqrt{4l^{2}\cdot\frac{9}{4}l^{2}}\right) = \frac{1}{3}\,h\left(4l^{2} + \frac{9}{4}l^{2} + 3l^{2}\right) = \frac{37}{12}\,h\,l^{2}.$$

**Tronco superiore** (basi di lato $\frac{3}{2}l$ e $l$, aree $\frac{9}{4}l^{2}$ e $l^{2}$):

$$V_2 = \frac{1}{3}\,h\left(\frac{9}{4}l^{2} + l^{2} + \sqrt{\frac{9}{4}l^{2}\cdot l^{2}}\right) = \frac{1}{3}\,h\left(\frac{9}{4}l^{2} + l^{2} + \frac{3}{2}l^{2}\right) = \frac{19}{12}\,h\,l^{2}.$$

## Rapporto

$$\frac{V_1}{V_2} = \frac{\frac{37}{12}\,h\,l^{2}}{\frac{19}{12}\,h\,l^{2}} = \frac{37}{19}.$$

Come verifica, la somma restituisce il volume dell'intero tronco:

$$V_1 + V_2 = \frac{37}{12}\,h\,l^{2} + \frac{19}{12}\,h\,l^{2} = \frac{56}{12}\,h\,l^{2} = \frac{14}{3}\,h\,l^{2},$$

in accordo con il calcolo diretto sull'intero tronco (altezza $2h$, basi $l^{2}$ e $4l^{2}$): $\frac{1}{3}\,(2h)\bigl(l^{2}+4l^{2}+2l^{2}\bigr) = \frac{14}{3}\,h\,l^{2}$.

Il rapporto fra i volumi dei due tronchi vale dunque $\dfrac{37}{19}$ (base maggiore : base minore).

*Fonte:* [📄 PDF p.150](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
