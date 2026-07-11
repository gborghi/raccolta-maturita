

**Problema:** [[Problemi/prob_2005_liceo_scientifico_pni_2005_sessione_straordinaria_problema1_143_1|2005 PNI Straordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_problema1_143|2005 PNI Straordinaria — Problema 1]]

Dato un triangolo $ABC$ acutangolo e isoscele sulla base $BC$, sia $D$ il piede dell'altezza condotta per $C$; dalla stessa parte di $A$ rispetto a $BC$ si costruisce il punto $E$ in modo che il triangolo $ECD$ sia simile ad $ABC$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="244.56" height="173.103" viewBox="-72 -72 183.42 129.827"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M19.504-58.57-57.317 43.857H96.326ZM96.326 43.858-2.006-29.891M96.326-58.57V43.857M96.326-58.57-2.006-29.89M96.326-58.57H19.504"/><path fill="none" stroke-dasharray="3.0,3.0" d="M19.504-58.57 96.326 43.857"/><path stroke="none" d="M-55.517 43.858a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.317" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.62 10.366)">B</text><path stroke="none" d="M98.126 43.858a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.317" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(157.176 10.366)">C</text><path stroke="none" d="M21.304-58.57a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.317" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(65.789 -105.962)">A</text><path stroke="none" d="M98.126-58.57a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.317" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(157.176 -105.962)">E</text><path stroke="none" d="M-.206-29.89a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.317" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(43.222 -77.282)">D</text><path stroke="none" d="M55.106 6.984a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.317" y="43.858" stroke="none" font-family="cmmi10" font-size="10" transform="translate(114.156 -26.508)">F</text></g></svg>
</figure>

Poniamo $\angle ABC=\angle ACB=\alpha$ e, per la similitudine $ECD\sim ABC$, $x=\angle ECD=\alpha$. Sia $F$ il punto comune ai segmenti $ED$ e $AC$.

## a)

**(1) $EC$ è perpendicolare a $CB$.** Poiché $\angle BDC=90^\circ$, nel triangolo $BDC$ si ha $\angle DCB=90^\circ-\alpha$; allora
$$\angle ECB=\angle ECD+\angle DCB=\alpha+(90^\circ-\alpha)=90^\circ,$$
cioè $EC\perp CB$.

**(2) Similitudini.** Gli angoli $\angle DAF$ e $\angle DEC$ sono congruenti (angoli corrispondenti dei triangoli simili $ABC$ ed $ECD$) e $\angle AFD=\angle EFC$ perché opposti al vertice: dunque $AFD\sim EFC$. Da questa similitudine segue la proporzione $AF:EF=DF:CF$; poiché inoltre $\angle AFE=\angle DFC$, i triangoli $EFA$ e $CFD$ hanno un angolo congruente compreso fra lati proporzionali e sono quindi simili. Di conseguenza gli angoli corrispondenti $\angle AEF$ e $\angle FCD$ sono congruenti.

**(3) $EA$ è parallela a $CB$.** L'angolo $\angle FCD$ è complementare di $\alpha$; essendo $\angle AEF=\angle FCD$ ed $EC\perp CB$, si deduce $EA\perp EC$, e quindi $EA\parallel CB$.

**(4) Inscrivibilità.** Un quadrilatero è inscrivibile in una circonferenza se e solo se gli angoli opposti sono supplementari. Nel quadrilatero $AECD$ gli angoli opposti $\angle AEC$ e $\angle ADC$ sono entrambi retti, dunque supplementari: pertanto $AECD$ è inscrivibile in una circonferenza.

## b)

Supponiamo ora che, rispetto a un'assegnata unità di misura, sia $BC=6$ e $CD=\dfrac{24}{5}$.

### b.1) Seno e coseno dell'angolo $BCD$

Scegliamo il riferimento con origine in $B$, asse $x$ lungo la retta $BC$ e asse $y$ perpendicolare in $B$ a $BC$; quindi $B=(0,0)$ e $C=(6,0)$. Nel triangolo rettangolo $BDC$ (con $\angle BDC=90^\circ$):
$$BD=\sqrt{BC^2-CD^2}=\sqrt{36-\frac{576}{25}}=\sqrt{\frac{324}{25}}=\frac{18}{5}.$$
Detto $x=\angle BCD$ si ha allora
$$\sin x=\frac{BD}{BC}=\frac{18/5}{6}=\frac{3}{5},\qquad \cos x=\frac{CD}{BC}=\frac{24/5}{6}=\frac{4}{5}.$$

### b.2) Equazioni della similitudine $ABC\to EDC$

Determiniamo le coordinate dei vertici. Dalla similitudine dei triangoli $ABH$ e $BCD$ (con $H$ piede dell'altezza da $A$) si ha $AH:BH=CD:BD$, cioè $AH:3=\dfrac{24}{5}:\dfrac{18}{5}$, da cui $AH=4$ e $A=(3,4)$. L'altezza $DK$ relativa all'ipotenusa del triangolo rettangolo vale
$$DK=\frac{BD\cdot DC}{BC}=\frac{\frac{18}{5}\cdot\frac{24}{5}}{6}=\frac{72}{25},$$
e per il teorema di Pitagora nel triangolo $BDK$
$$BK=\sqrt{BD^2-KD^2}=\sqrt{\frac{324}{25}-\frac{5184}{625}}=\sqrt{\frac{2916}{625}}=\frac{54}{25}.$$
I vertici sono dunque
$$A=(3,4),\quad B=(0,0),\quad C=(6,0),\quad D=\left(\frac{54}{25},\frac{72}{25}\right),\quad E=(6,4),$$
con la corrispondenza $A\to E$, $B\to D$, $C\to C$. Poiché i vertici corrispondenti di $ABC$ ed $EDC$ si susseguono nello stesso verso (antiorario), la similitudine è **diretta**, del tipo
$$\begin{cases} x'=a\,x-b\,y+p\\ y'=b\,x+a\,y+q. \end{cases}$$
Imponiamo le tre corrispondenze. Da $C=(6,0)\to C=(6,0)$:
$$\begin{cases}6=6a+p\\ 0=6b+q.\end{cases}$$
Da $B=(0,0)\to D=\left(\dfrac{54}{25},\dfrac{72}{25}\right)$:
$$p=\frac{54}{25},\qquad q=\frac{72}{25}.$$
Sostituendo nelle prime: $6=6a+\dfrac{54}{25}\Rightarrow a=\dfrac{16}{25}$ e $0=6b+\dfrac{72}{25}\Rightarrow b=-\dfrac{12}{25}$.

La corrispondenza $A=(3,4)\to E=(6,4)$ è verificata:
$$x'=\frac{16}{25}\cdot3+\frac{12}{25}\cdot4+\frac{54}{25}=\frac{48+48+54}{25}=6,\qquad y'=-\frac{12}{25}\cdot3+\frac{16}{25}\cdot4+\frac{72}{25}=\frac{-36+64+72}{25}=4.$$

Le equazioni della similitudine sono quindi
$$\begin{cases} x'=\dfrac{16}{25}\,x+\dfrac{12}{25}\,y+\dfrac{54}{25}\\[6pt] y'=-\dfrac{12}{25}\,x+\dfrac{16}{25}\,y+\dfrac{72}{25}, \end{cases}$$
con rapporto di similitudine
$$k=\sqrt{a^2+b^2}=\sqrt{\left(\frac{16}{25}\right)^2+\left(\frac{12}{25}\right)^2}=\sqrt{\frac{256+144}{625}}=\sqrt{\frac{400}{625}}=\frac{4}{5}.$$

*Fonte:* [📄 PDF p.143](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/geometria #cluster/geometria
