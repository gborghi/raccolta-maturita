

**Problema:** [[Problemi/prob_2003_americhe_emisfero_australe_2003_sessione_suppletiv_problema2_96_1|2003 Americhe Australe Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_americhe_emisfero_australe_2003_sessione_suppletiv_problema2_96|2003 Americhe Australe Suppletiva — Problema 2]]

Fra i coni circolari retti circoscritti a una sfera di raggio $R = 6\ \text{cm}$ si determinino: **a)** il cono $C$ di volume minimo e il valore, in litri, di tale volume; **b)** il valore approssimato, in gradi sessagesimali, dell'angolo di apertura di $C$; **c)** il rapporto fra i volumi delle due sfere, inscritta e circoscritta a $C$.

Consideriamo la sezione assiale del cono: un triangolo isoscele $ABC$ circoscritto alla circonferenza di centro $O$ (centro della sfera) e raggio $R$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="137.31" height="203.478" viewBox="-72 -72 102.983 152.608"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-65.187 66.64h88.523L-20.925-58.57Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M10.373 35.337c0-17.286-14.013-31.298-31.298-31.298-17.286 0-31.299 14.012-31.299 31.298s14.013 31.298 31.299 31.298c17.285 0 31.298-14.013 31.298-31.298Zm-31.298 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-20.925-58.57V66.64"/><path stroke="none" d="M-19.275000000000002 35.337a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0M-19.275000000000002 66.64a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-20.925" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-48.012 10.366)">A</text><text x="-20.925" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(40.218 10.366)">B</text><text x="-20.925" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.931 -128.743)">C</text><text x="-20.925" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.562 10.366)">H</text><text x="-20.925" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -27.886)">O</text><text x="-20.925" y="66.639" stroke="none" font-family="cmmi10" font-size="10" transform="translate(4.446 -65.44)">R</text><path fill="none" d="m-20.925 35.337 22.222-9.072"/></g></svg>
</figure>

## a)

Poniamo l'altezza $CH = x$ del cono, con $x > 2R$, e indichiamo con $BH = r$ il raggio di base. Il centro $O$ della sfera dista $R$ dalla base, quindi
$$
CO = CH - OH = x - R .
$$
Detto $T$ il punto di tangenza della sfera con il lato $CB$, si ha $OT = R$ e $OT \perp CB$, da cui
$$
CT = \sqrt{CO^2 - OT^2} = \sqrt{(x-R)^2 - R^2} = \sqrt{x^2 - 2Rx} .
$$
I triangoli rettangoli $CTO$ e $CHB$ sono simili (hanno in comune l'angolo in $C$), perciò
$$
\frac{CT}{OT} = \frac{CH}{BH} \quad\Rightarrow\quad r = BH = \frac{R\,x}{\sqrt{x^2 - 2Rx}} ,
$$
e quindi
$$
r^2 = \frac{R^2 x^2}{x^2 - 2Rx} = \frac{R^2 x}{x - 2R} .
$$

Il volume del cono è allora
$$
V = \frac{1}{3}\pi r^2 x = \frac{1}{3}\pi \, \frac{R^2 x^2}{x - 2R}, \qquad x > 2R .
$$
Il volume è minimo quando lo è la funzione
$$
y = \frac{x^2}{x - 2R} .
$$
Derivando,
$$
y' = \frac{2x(x-2R) - x^2}{(x-2R)^2} = \frac{x(x - 4R)}{(x-2R)^2}\ \ge 0 \quad\Leftrightarrow\quad x \ge 4R .
$$
Dunque $y$ è decrescente per $2R < x < 4R$ e crescente per $x > 4R$: il punto $x = 4R$ è di minimo assoluto. Il cono $C$ di volume minimo ha quindi altezza uguale a $4R$, e in tal caso
$$
V = \frac{1}{3}\pi R^2 \cdot \frac{(4R)^2}{4R - 2R} = \frac{1}{3}\pi R^2 \cdot 8R = \frac{8}{3}\pi R^3 .
$$

Con $R = 6\ \text{cm}$ l'altezza è $h = x = 24\ \text{cm}$ e il volume vale
$$
V = \frac{8}{3}\pi \cdot 216 = 576\,\pi\ \text{cm}^3 = 576\,\pi \cdot 10^{-3}\ \text{litri} \cong 1{,}810\ \text{litri} .
$$

## b)

Per $x = 4R$ il raggio di base è
$$
r^2 = \frac{R^2 \cdot 4R}{4R - 2R} = 2R^2 \quad\Rightarrow\quad r = AH = R\sqrt{2} = 6\sqrt{2}\ \text{cm} .
$$
Detto $A\hat{C}H$ il semiangolo di apertura,
$$
\tan\big(A\hat{C}H\big) = \frac{AH}{CH} = \frac{6\sqrt{2}}{24} = \frac{\sqrt{2}}{4}, \qquad A\hat{C}H = \arctan\!\left(\frac{\sqrt{2}}{4}\right) \cong 19{,}47^\circ .
$$
L'angolo di apertura è il doppio:
$$
A\hat{C}B = 2 \cdot 19{,}47^\circ \cong 38{,}9^\circ \cong 39^\circ .
$$

## c)

La sfera inscritta ha raggio $R = 6\ \text{cm}$. Per trovare il raggio $R'$ della sfera circoscritta al cono $C$, consideriamo la sezione assiale: il triangolo $ABC$ è inscritto nella circonferenza massima della sfera circoscritta, di diametro $CD$ lungo l'asse. Per il secondo teorema di Euclide applicato all'altezza $AH$ relativa all'ipotenusa $CD$:
$$
AH^2 = CH \cdot HD = x\,(2R' - x) .
$$
Sostituendo $AH = 6\sqrt{2}$ e $x = 24$:
$$
(6\sqrt{2})^2 = 24\,(2R' - 24), \qquad 72 = 48\,R' - 576, \qquad R' = \frac{27}{2}\ \text{cm} .
$$

Il rapporto fra i volumi delle sfere inscritta e circoscritta è uguale al rapporto fra i cubi dei rispettivi raggi:
$$
\frac{V_{\text{inscritta}}}{V_{\text{circoscritta}}} = \left(\frac{R}{R'}\right)^3 = \left(\frac{6}{\ 27/2\ }\right)^3 = \left(\frac{4}{9}\right)^3 = \frac{64}{729} .
$$

*Fonte:* [📄 PDF p.96](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
