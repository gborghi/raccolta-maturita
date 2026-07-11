

**Problema:** [[Problemi/prob_2005_liceo_scientifico_ordinamento_2005_sessione_straor_problema1_128_1|2005 Ordinamento Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_problema1_128|2005 Ordinamento Straordinaria — Problema 1]]

Dato un triangolo $ABC$ acutangolo e isoscele sulla base $BC$ (dunque $AB=AC$), sia $D$ il piede dell'altezza condotta da $C$ (perpendicolare al lato $AB$) e si costruisca, dalla stessa parte di $A$ rispetto a $BC$, il punto $E$ tale che il triangolo $ECD$ sia simile ad $ABC$.

## a)

Indichiamo con $\beta$ l'ampiezza degli angoli alla base, $\beta=\widehat{ABC}=\widehat{ACB}$.

**1) $EC$ è perpendicolare a $CB$.**
Nella similitudine $ECD\sim ABC$ i vertici si corrispondono nell'ordine $E\leftrightarrow A$, $C\leftrightarrow B$, $D\leftrightarrow C$; quindi $\widehat{ECD}=\widehat{ABC}=\beta$. Poiché $CD$ è l'altezza relativa ad $AB$, il triangolo $BDC$ è rettangolo in $D$ e $\widehat{DCB}=90^\circ-\beta$. Essendo $D$ compreso fra le semirette $CE$ e $CB$,
$$\widehat{ECB}=\widehat{ECD}+\widehat{DCB}=\beta+(90^\circ-\beta)=90^\circ,$$
cioè $EC\perp CB$.

**2) I triangoli $EFC$ e $AFD$ sono simili.**
Sia $F=ED\cap AC$. Poiché $D\in AB$, la semiretta $AD$ coincide con $AB$, quindi $\widehat{FAD}=\widehat{BAC}$; d'altra parte, per la similitudine $ECD\sim ABC$ è $\widehat{DEC}=\widehat{BAC}$ e, essendo $F\in ED$, risulta $\widehat{FEC}=\widehat{DEC}=\widehat{BAC}$. Ne segue $\widehat{FAD}=\widehat{FEC}$; unito a $\widehat{AFD}=\widehat{EFC}$ (angoli opposti al vertice), si conclude $AFD\sim EFC$.

Da tale similitudine $AF:EF=DF:FC$, ossia $AF:DF=EF:FC$; poiché l'angolo compreso $\widehat{AFE}=\widehat{DFC}$ (opposti al vertice), i triangoli $AFE$ e $DFC$ sono simili (due lati in proporzione e l'angolo compreso). Di conseguenza gli angoli corrispondenti $\widehat{AEF}$ e $\widehat{DCF}$ sono congruenti.

**3) $EA$ è parallela a $CB$.**
Da $AFE\sim DFC$ segue $\widehat{AEF}=\widehat{DCF}=\widehat{DCA}$, mentre $\widehat{FEC}=\widehat{BAC}$. Nel triangolo $ABC$ vale $\widehat{BAC}=180^\circ-2\beta$, e inoltre $\widehat{DCA}=\widehat{ACB}-\widehat{DCB}=\beta-(90^\circ-\beta)=2\beta-90^\circ$. Pertanto
$$\widehat{AEC}=\widehat{AEF}+\widehat{FEC}=(2\beta-90^\circ)+(180^\circ-2\beta)=90^\circ.$$
Dunque $EA\perp EC$; ma anche $CB\perp EC$ (punto 1), quindi $EA\parallel CB$.

**4) Il quadrilatero $AECD$ è inscrivibile in una circonferenza.**
Per costruzione $\widehat{ADC}=90^\circ$ (altezza) e, per il punto 3, $\widehat{AEC}=90^\circ$. I punti $D$ ed $E$ vedono quindi il segmento $AC$ sotto un angolo retto: entrambi giacciono sulla circonferenza di diametro $AC$. Equivalentemente, nel quadrilatero $AECD$ gli angoli opposti in $D$ ed $E$ sono retti, dunque supplementari, e ciò basta affinché il quadrilatero sia ciclico.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="268.888" height="204.785" viewBox="-72 -72 201.666 153.589"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-71.828 66.608h188.243"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M114.535 64.208c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.317" y="66.608" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(177.665 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-57.317 81.119V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.717-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.317" y="66.608" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -131.24)">y</text></g><path fill="none" stroke="#008c00" stroke-width=".8" d="M111.978 18.238c0-33.393-27.07-60.463-60.463-60.463S-8.947-15.155-8.947 18.238 18.123 78.7 51.515 78.7s60.463-27.07 60.463-60.462Zm-60.463 0"/><path fill="none" stroke-width=".8" d="M-57.317 66.608h145.11l-72.555-96.74Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M87.793 66.608-5.077-3.045"/><path fill="none" stroke="red" stroke-width=".8" d="M87.793-30.132v96.74M87.793-30.132H15.238M87.793-30.132-5.077-3.045"/><path fill="none" stroke-dasharray="3.0,3.0" d="m15.238-30.132 72.555 96.74"/><path stroke="none" d="M-55.617 66.608a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0M89.49300000000001 66.608a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0M16.938-30.132a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0M89.49300000000001-30.132a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0M-3.378-3.045a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0M52.79 18.238a1.275 1.275 0 1 0-2.55 0 1.275 1.275 0 0 0 2.55 0m-1.275 0"/><text x="-57.317" y="66.608" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.62 10.366)">B</text><text x="-57.317" y="66.608" stroke="none" font-family="cmmi10" font-size="10" transform="translate(148.643 10.366)">C</text><text x="-57.317" y="66.608" stroke="none" font-family="cmmi10" font-size="10" transform="translate(61.522 -100.273)">A</text><text x="-57.317" y="66.608" stroke="none" font-family="cmmi10" font-size="10" transform="translate(148.643 -100.273)">E</text><text x="-57.317" y="66.608" stroke="none" font-family="cmmi10" font-size="10" transform="translate(40.15 -66.236)">D</text><text x="-57.317" y="66.608" stroke="none" font-family="cmmi10" font-size="10" transform="translate(112.365 -38.004)">M</text></g></svg>
</figure>

## b)

Assumiamo $BC=6$ e $CD=\dfrac{24}{5}$. Scegliamo il riferimento con origine in $B$, asse $x$ lungo $BC$ e asse $y$ perpendicolare a $BC$ in $B$: così $B=(0,0)$ e $C=(6,0)$.

**Punto $A$.** Il triangolo è isoscele su $BC$, dunque $A$ appartiene all'asse di $BC$: $A=(3,h)$ con $h>0$. La retta $AB$ ha equazione $hx-3y=0$ e la distanza di $C=(6,0)$ da essa è $CD$:
$$\frac{6h}{\sqrt{h^2+9}}=\frac{24}{5}\ \Rightarrow\ 5h=4\sqrt{h^2+9}\ \Rightarrow\ 9h^2=144\ \Rightarrow\ h=4.$$
Quindi $A=(3,4)$ e $AB=AC=5$.

**Punto $D$.** Nel triangolo rettangolo $BDC$,
$$BD=\sqrt{BC^2-CD^2}=\sqrt{36-\frac{576}{25}}=\sqrt{\frac{324}{25}}=\frac{18}{5}.$$
$D$ sta su $AB$ a distanza $BD$ da $B$; il versore di $AB$ è $\left(\dfrac{3}{5},\dfrac{4}{5}\right)$, quindi
$$D=\frac{18}{5}\left(\frac{3}{5},\frac{4}{5}\right)=\left(\frac{54}{25},\frac{72}{25}\right).$$

**Punto $E$.** Sappiamo che $EC\perp CB$ (retta verticale per $C$) e $EA\parallel CB$ (retta orizzontale per $A$, cioè $y=4$): dunque $E=(6,4)$. Coerentemente $EC=4$, $CD=\dfrac{24}{5}$, $ED=4$ danno
$$\frac{EC}{AB}=\frac{CD}{BC}=\frac{ED}{AC}=\frac{4}{5},$$
confermando $ECD\sim ABC$.

In sintesi:
$$A=(3,4),\quad B=(0,0),\quad C=(6,0),\quad D=\left(\frac{54}{25},\frac{72}{25}\right),\quad E=(6,4).$$

**Circonferenza circoscritta ad $AECD$.** Poiché $\widehat{ADC}=\widehat{AEC}=90^\circ$, il segmento $AC$ è un diametro. Il centro è il punto medio
$$M=\left(\frac{3+6}{2},\frac{4+0}{2}\right)=\left(\frac{9}{2},2\right),$$
e il raggio $R=\dfrac{AC}{2}=\dfrac{5}{2}$. L'equazione della circonferenza è
$$\left(x-\frac{9}{2}\right)^2+(y-2)^2=\frac{25}{4},$$
ossia
$$x^2+y^2-9x-4y+18=0.$$

*Fonte:* [📄 PDF p.128](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/geometria #cluster/geometria
