

**Quesito:** [[Quesiti/ques_2005_suppletiva_2005_pni_questionario_120_7|2005 Suppletiva PNI — Questionario — Quesito 7]] · **Prova:** [[Prove/2005_suppletiva_2005_pni_questionario_120|2005 Suppletiva PNI — Questionario]]

Spiegare in maniera esauriente perché una funzione reale di variabile reale integrabile in un intervallo chiuso e limitato $[a,b]$ non necessariamente ammette primitiva in $[a,b]$.

## Continuità: condizione sufficiente ma non necessaria

Per il **teorema fondamentale del calcolo integrale** (o teorema di Torricelli–Barrow), se $f$ è *continua* in $[a,b]$ allora la funzione integrale

$$F(x) = \int_a^x f(t)\,dt$$

è derivabile e soddisfa $F'(x) = f(x)$ per ogni $x \in [a,b]$. Dunque una funzione continua è sia integrabile sia dotata di primitiva.

La continuità è però solo una condizione *sufficiente* per l'integrabilità: la classe delle funzioni integrabili secondo Riemann è più ampia di quella delle funzioni continue. In particolare, **ogni funzione limitata in $[a,b]$ e con un numero finito di punti di discontinuità è integrabile**. È proprio in questa fascia — funzioni integrabili ma non continue — che l'integrabilità e l'esistenza della primitiva possono separarsi.

## Perché l'integrabilità non garantisce la primitiva

La chiave è il **teorema di Darboux**: se una funzione $g$ è la derivata di qualche funzione $F$ (cioè $F' = g$ su un intervallo), allora $g$ possiede la **proprietà dei valori intermedi**, esattamente come le funzioni continue — pur potendo essere discontinua, non può presentare "salti".

Di conseguenza, **una funzione che non gode della proprietà dei valori intermedi non può essere la derivata di alcuna funzione**, ovvero non ammette primitiva. Ma una funzione con una discontinuità di salto è comunque limitata e con un numero finito di discontinuità, quindi **integrabile**. Ecco l'esempio cercato di funzione integrabile ma priva di primitiva.

## Un esempio esplicito

Consideriamo, con $a < c < b$, la funzione a gradino

$$f(x) = \begin{cases} 0 & \text{se } a \le x < c \\ 1 & \text{se } c \le x \le b \end{cases}$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="236.777" height="138.331" viewBox="-72 -72 177.583 103.748"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.156 15.96H92.331"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M90.451 13.56c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.499" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(153.763 2.153)">x</text><path fill="none" d="M-57.499 29.618v-88.372"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.898-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.499" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -80.592)">y</text><text x="-57.499" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text><path fill="none" stroke="#00f" stroke-width="1.2" d="M-40.427 15.96h51.215M10.788-35.254h61.458"/><path fill="#fff" stroke="none" d="M13.428 15.96a2.64 2.64 0 1 0-5.28 0 2.64 2.64 0 0 0 5.28 0m-2.64 0"/><path fill="none" stroke="#00f" d="M13.428 15.96a2.64 2.64 0 1 0-5.28 0 2.64 2.64 0 0 0 5.28 0Zm-2.64 0"/><path fill="#00f" stroke="none" d="M13.428-35.254a2.64 2.64 0 1 0-5.28 0 2.64 2.64 0 0 0 5.28 0m-2.64 0"/><path fill="none" d="M-40.427 14.254v3.414"/><text x="-57.499" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(14.429 9.546)">a</text><path fill="none" d="M10.788 14.254v3.414"/><text x="-57.499" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(66.123 9.546)">c</text><path fill="none" d="M72.246 14.254v3.414"/><text x="-57.499" y="15.961" stroke="none" font-family="cmmi10" font-size="10" transform="translate(127.598 12.185)">b</text><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-57.499-35.254h68.287"/><text x="-57.499" y="15.961" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -47.993)">1</text></g></g></svg>
</figure>

- **È integrabile in $[a,b]$.** È limitata e ha un'unica discontinuità (il salto in $x = c$); il suo integrale si ottiene sommando le aree dei due rettangoli:
$$\int_a^b f(x)\,dx = 0\cdot(c-a) + 1\cdot(b-c) = b - c.$$

- **Non ammette primitiva in $[a,b]$.** Se esistesse $F$ con $F'(x) = f(x)$ su tutto $[a,b]$, per il teorema di Darboux $f$ dovrebbe assumere tutti i valori intermedi fra due suoi valori. Ma $f$ assume solo i valori $0$ e $1$ e **nessun valore** in $(0,1)$: viola la proprietà dei valori intermedi in ogni intorno di $c$. Questa contraddizione mostra che una tale $F$ non può esistere.

## Conclusione

L'integrabilità di $f$ in $[a,b]$ dipende dal comportamento "in media" (le aree) ed è insensibile a un numero finito di discontinuità; l'esistenza della primitiva richiede invece che $f$ sia una derivata, e quindi — per il teorema di Darboux — che soddisfi la proprietà dei valori intermedi. Poiché una funzione con un salto è integrabile ma non gode di tale proprietà, essa è integrabile **senza** ammettere primitiva. Continuità $\Rightarrow$ integrabilità e primitiva, ma la sola integrabilità non basta a garantire la primitiva.

*Fonte:* [📄 PDF p.124](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
