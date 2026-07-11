

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_1|2005 Ordinamento Straordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Si consideri un tronco di piramide quadrangolare regolare la cui base maggiore ha area quadrupla della minore; un piano $\alpha$, parallelo alle basi ed equidistante da esse, taglia il tronco in due parti. Si vuole stabilire se i dati sono sufficienti a determinare il rapporto fra i volumi dei due tronchi così ottenuti.

## Impostazione

Se la base maggiore ha area quadrupla della base minore, il suo lato è il doppio di quello della base minore: posto $l$ il lato della base minore, la base maggiore ha lato $2l$.

Il tronco è la porzione di una piramide compresa fra due sezioni parallele alla base. Poiché in una piramide le dimensioni lineari di una sezione sono proporzionali alla distanza dal vertice, e il lato passa da $2l$ a $l$, la base minore si trova a distanza dal vertice pari alla metà di quella della base maggiore. Di conseguenza le due basi del tronco distano dal vertice come $d$ e $2d$.

## Sezione media

Il piano $\alpha$ è equidistante dalle due basi, quindi si trova a distanza $\frac{d+2d}{2}=\frac{3}{2}d$ dal vertice. Il lato della sezione ottenuta è proporzionale a tale distanza:

$$\ell_\alpha = l\cdot\frac{\frac{3}{2}d}{d}=\frac{3}{2}\,l.$$

La sezione con il piano $\alpha$ è dunque un quadrato di lato $\frac{3}{2}l$, intermedio fra i quadrati di lato $2l$ (base maggiore) e $l$ (base minore).

Indichiamo con $2h$ l'altezza del tronco; poiché $\alpha$ è equidistante dalle basi, ciascuno dei due tronchi in cui esso è diviso ha altezza $h$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="168.866" height="173.4" viewBox="-72 -72 126.649 130.05"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-70.92 43.97H31.509L5.902-58.46h-51.215Z"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M-58.116-7.245h76.821"/><path fill="none" d="M41.752 43.57V-6.845"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M44.152 41.69c-1.44.38-2.12 1.226-2.4 2.08-.28-.854-.96-1.7-2.4-2.08M39.352-4.965c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-19.706" y="43.97" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.99 -22.135)">h</text><path fill="none" d="M41.752-7.645V-58.06"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M44.152-9.525c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08M39.352-56.18c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-19.706" y="43.97" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.99 -73.35)">h</text><g stroke="none" font-size="10"><text x="-19.706" y="43.97" font-family="cmr10" transform="translate(-4.09 10.477)">2</text><text x="-14.706" y="43.97" font-family="cmmi10" transform="translate(-4.09 10.477)">l</text></g><text x="-19.706" y="43.97" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-1.59 -105.962)">l</text><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-18.506" y="40.032" font-family="cmr7" font-size="7" transform="translate(-4.783 -58.196)">3</text><path d="M-23.29-16.926h3.987v.4h-3.986z"/><text x="-18.506" y="47.418" font-family="cmr7" font-size="7" transform="translate(-4.783 -58.196)">2</text><text x="-13.32" y="43.97" font-family="cmmi10" font-size="10" transform="translate(-4.783 -58.196)">l</text></g></g><path stroke="none" d="M-69.57000000000001 43.97a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0M32.859 43.97a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0M-43.963-58.46a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0M7.252000000000001-58.46a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0m-1.35 0"/></g></svg>
</figure>

## Calcolo dei volumi

Il volume di un tronco di piramide a basi quadrate di lati $a$ e $b$ e altezza $H$ è

$$V=\frac{H}{3}\left(a^2+ab+b^2\right).$$

**Tronco inferiore** (basi di lato $2l$ e $\frac{3}{2}l$, altezza $h$):

$$V_{\text{inf}}=\frac{h}{3}\left(4l^2+2l\cdot\frac{3}{2}l+\frac{9}{4}l^2\right)=\frac{h}{3}\cdot\frac{37}{4}l^2=\frac{37}{12}\,h\,l^2.$$

**Tronco superiore** (basi di lato $\frac{3}{2}l$ e $l$, altezza $h$):

$$V_{\text{sup}}=\frac{h}{3}\left(\frac{9}{4}l^2+\frac{3}{2}l\cdot l+l^2\right)=\frac{h}{3}\cdot\frac{19}{4}l^2=\frac{19}{12}\,h\,l^2.$$

## Conclusione

Il rapporto fra i volumi dei due tronchi è

$$\frac{V_{\text{inf}}}{V_{\text{sup}}}=\frac{\frac{37}{12}h\,l^2}{\frac{19}{12}h\,l^2}=\frac{37}{19}.$$

Il risultato è un numero puro, indipendente da $l$ e da $h$: pertanto **i dati sono sufficienti** per calcolare il rapporto fra i volumi, che vale $\dfrac{37}{19}$ (parte inferiore rispetto a quella superiore).

*Fonte:* [📄 PDF p.135](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
