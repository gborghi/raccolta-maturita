---
tipo: soluzione
prova_stem: 2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130
pdf: Prova_Maturita_2009.pdf
source: text
title: >-
  Soluzioni —
  2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130
---

# Soluzioni — 2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130

## Quesito 1

Lanciando due dadi, qual è il numero che ha maggiore probabilità di uscita? Qual è la probabilità che esca un numero primo?

Nel lancio di due dadi si hanno $6 \times 6 = 36$ possibili coppie ed i numeri da 2 a 12 possono uscire con la seguente frequenza:

- 2: (1;1)
- 3: (1;2), (2;1)
- 4: (1;3), (3;1), (2;2)
- 5: (1;4), (4;1), (2;3), (3;2)
- 6: (1;5), (5;1), (2;4), (4;2), (3;3)
- 7: (1;6), (6;1), (2;5), (5;2), (3;4), (4;3)
- 8: (2;6), (6;2), (3;5), (5;3), (4;4)
- 9: (3;6), (6;3), (4;5), (5;4)
- 10: (4;6), (6;4), (5;5)
- 11: (5;6), (6;5)
- 12: (6;6)

Il numero che ha la maggiore probabilità di uscire è quindi il 7, con probabilità:

$$p(7) = \frac{6}{36} = \frac{1}{6}$$

Calcoliamo la probabilità che escano i singoli numeri primi:

il 2 (1 volta): $p(2) = \dfrac{1}{36}$, il 3 (2 volte): $p(3) = \dfrac{2}{36}$, il 5 (4 volte): $p(5) = \dfrac{4}{36}$, il 7 (6 volte): $p(7) = \dfrac{6}{36}$, l'11 (2 volte): $p(11) = \dfrac{2}{36}$.

La probabilità che esca un numero primo è quindi:

$$\frac{1}{36} + \frac{2}{36} + \frac{4}{36} + \frac{6}{36} + \frac{2}{36} = \frac{15}{36} = \frac{5}{12}$$

## Quesito 2

Si dimostri che l'equazione $\cos x - x = 0$ ha un'unica radice reale e se ne calcoli un valore approssimato con due cifre decimali esatte.

Posto $a(x) = \cos(x)$ e $b(x) = x$, le soluzioni dell'equazione data corrispondono alle ascisse dei punti di intersezione dei grafici delle due funzioni. Dal grafico si evince che la radice richiesta è unica e che è compresa tra $0$ e $\dfrac{\pi}{2}$.

*(grafico — vedi PDF)*

Restringiamo l'intervallo in cui si trova la radice. Posto $f(x) = \cos(x) - x$ si ha:

$$f(0) = 1 \,, \quad f(1) = \cos(1) - 1 < 0$$

quindi la radice appartiene all'intervallo $[a;\, b] = [0;\, 1]$.

La funzione $f(x)$ è continua nell'intervallo chiuso $[a;\, b]$ e derivabile nell'aperto $(a;\, b)$ ed è:

$$f'(x) = -\sin(x) - 1 \le 0 \quad \text{per ogni } x$$

$$f''(x) = -\cos(x) < 0 \quad \text{nell'intervallo } (0;\, 1).$$

Essendo il segno della derivata seconda costante, possiamo applicare il metodo delle tangenti (metodo di Newton).

Essendo $f(a) \cdot f''(x) < 0$ in $[a, b] = [0;\, 1]$, dobbiamo assumere come punto iniziale di iterazione $x_0 = b = 1$.

La formula iterativa è:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

Applicando il metodo:

$$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 1 - \frac{f(1)}{f'(1)} \cong 0.7504$$

$$x_2 = x_1 - \frac{f(x_1)}{f'(x_1)} = 0.7504 - \frac{f(0.7504)}{f'(0.7504)} \cong 0.7391$$

$$x_3 = x_2 - \frac{f(x_2)}{f'(x_2)} = 0.7391 - \frac{f(0.7391)}{f'(0.7391)} \cong 0.7391$$

Quindi la radice approssimata con due cifre decimali esatte è $x \cong 0.74$.

## Quesito 3

Si calcoli il valore medio della funzione $f(x) = \arctan\!\left(\dfrac{x-1}{x+1}\right)$ sull'intervallo $0 \le x \le 1$.

Ricordiamo che il valor medio di una funzione $f(x)$ continua in un intervallo $[a;\, b]$ è dato da:

$$\frac{1}{b - a} \int_{a}^{b} f(x)\, dx = \frac{1}{1 - 0} \int_{0}^{1} \arctan\!\left(\frac{x-1}{x+1}\right) dx$$

Cerchiamo, integrando per parti, una primitiva di $f(x)$. Si nota che la derivata di $\arctan\!\left(\dfrac{x-1}{x+1}\right)$ è $\dfrac{1}{1+x^2}$, quindi:

$$\int \arctan\!\left(\frac{x-1}{x+1}\right) dx = \int (x)' \cdot \arctan\!\left(\frac{x-1}{x+1}\right) dx = x \cdot \arctan\!\left(\frac{x-1}{x+1}\right) - \int x \cdot \frac{1}{1+x^2}\, dx$$

$$= x \cdot \arctan\!\left(\frac{x-1}{x+1}\right) - \frac{1}{2}\ln(1+x^2) + C$$

Quindi:

$$\frac{1}{1-0} \int_{0}^{1} \arctan\!\left(\frac{x-1}{x+1}\right) dx = \left[\, x \cdot \arctan\!\left(\frac{x-1}{x+1}\right) - \frac{1}{2}\ln(1+x^2)\right]_{0}^{1} = -\frac{1}{2}\ln 2 \cong -0.35$$

## Quesito 4

Sia dato un triangolo avente i lati lunghi rispettivamente 13 cm, 14 cm e 15 cm e il cerchio in esso inscritto. Si scelga a caso un punto all'interno del triangolo: si determini la probabilità che tale punto risulti esterno al cerchio.

Calcoliamo l'area del triangolo mediante la formula di Erone, indicando con $p$ il semiperimetro e con $a$, $b$ e $c$ le misure dei lati:

$$p = \frac{13+14+15}{2} = 21$$

$$\text{Area}(ABC) = \sqrt{p(p-a)(p-b)(p-c)} = \sqrt{21 \cdot 6 \cdot 8 \cdot 7} = \sqrt{7056} = 84$$

Il raggio del cerchio inscritto in un poligono è dato da:

$$r = \frac{\text{Area(poligono)}}{p} = \frac{84}{21} = 4 \quad \Rightarrow \quad \text{Area(cerchio)} = \pi r^2 = 16\pi$$

La probabilità che un punto scelto a caso nel triangolo risulti interno al cerchio è data da:

$$p_{\text{interno}} = \frac{\text{Area(cerchio)}}{\text{Area(triangolo)}} = \frac{16\pi}{84} \cong 0.598 \cong 60\%$$

Pertanto la probabilità che il punto risulti **esterno** al cerchio è:

$$p_{\text{esterno}} = 1 - \frac{16\pi}{84} \cong 0.402 \cong 40\%$$

## Quesito 5

Si calcoli il limite:

$$\lim_{x \to 0} \frac{\displaystyle\int_{0}^{x} e^{t^2 - t}\, dt}{x^3}$$

Applichiamo la regola di de L'Hôpital, di cui sono verificate le condizioni: le funzioni al numeratore e al denominatore sono continue e derivabili in un intorno di $x = 0$; la derivata del denominatore si annulla solo in $x = 0$, quindi esiste un intorno privato dello zero in cui non si annulla.

Calcoliamo il limite del rapporto delle derivate del numeratore e del denominatore. Per il teorema fondamentale del calcolo integrale, la derivata di $\displaystyle\int_{0}^{x} e^{t^2 - t}\, dt$ è $e^{x^2 - x}$:

$$\lim_{x \to 0} \frac{e^{x^2 - x}}{3x^2} = +\infty = \lim_{x \to 0} \frac{\displaystyle\int_{0}^{x} e^{t^2 - t}\, dt}{x^3}$$

## Quesito 6

Un serbatoio della capacità di $400\, \text{m}^3$ deve avere la forma di un cilindro circolare retto senza coperchio. Il materiale da costruzione per il fondo costa per metro quadrato il doppio di quello che serve per le pareti laterali. Si calcoli il rapporto fra il raggio $R$ e l'altezza $h$ in modo che la costruzione risulti la più economica.

Dalla formula del volume del cilindro deduciamo che:

$$V_{\text{cilindro}} = \pi R^2 h = 400\, \text{m}^3$$

Sia $c$ il costo al metro quadrato del materiale da costruzione per la superficie laterale:

$$\text{Costo fondo} = \pi R^2 \cdot 2c \,; \quad \text{Costo superficie laterale} = 2\pi R h \cdot c$$

$$\text{Costo totale} = \pi R^2 \cdot 2c + 2\pi R h \cdot c = y$$

Dal volume ricaviamo $h = \dfrac{400}{\pi R^2}$, quindi il costo totale in funzione del raggio di base è:

$$y = 2\pi R^2 c + 2c \cdot \frac{400}{R} = 2\pi R^2 c + \frac{800c}{R} = f(R) \,, \quad R > 0$$

Dobbiamo trovare il rapporto tra $R$ ed $h$ in modo che $y$ risulti minima:

$$y' = 4\pi c R - \frac{800c}{R^2} \ge 0 \quad \Leftrightarrow \quad \pi R^3 - 200 \ge 0 \quad \Leftrightarrow \quad R \ge \sqrt[3]{\frac{200}{\pi}}$$

Quindi $y$ è crescente se $R > \sqrt[3]{\dfrac{200}{\pi}}$ e decrescente se $0 < R < \sqrt[3]{\dfrac{200}{\pi}}$: il minimo si ha per $R = \sqrt[3]{\dfrac{200}{\pi}}$, da cui:

$$h = \frac{400}{\pi R^2} = \frac{400}{\pi \left(\dfrac{200}{\pi}\right)^{2/3}} = 2\sqrt[3]{\frac{200}{\pi}}$$

Pertanto:

$$\frac{R}{h} = \frac{\sqrt[3]{\dfrac{200}{\pi}}}{2\sqrt[3]{\dfrac{200}{\pi}}} = \frac{1}{2}$$

Affinché la costruzione risulti la più economica, l'altezza del cilindro deve essere il doppio del raggio di base, cioè il cilindro deve essere **equilatero**.

## Quesito 7

Una statua alta 70 metri viene sistemata su una collina di altezza $h$. Da un certo punto $A$, situato a livello del suolo, gli angoli di elevazione per la base $B$ e la cima $C$ della statua misurano rispettivamente $20{,}75°$ e $28{,}30°$. Si determini l'altezza $h$.

Gli angoli interessati sono:

$$\alpha = 20.75°\,, \quad \beta = 28.30°\,, \quad \gamma = \beta - \alpha = 7.55°$$

L'angolo $\angle ACB$ misura $90° - \beta = 61.70°$; applichiamo il teorema dei seni al triangolo $ABC$:

$$\frac{70\, \text{m}}{\sin\gamma} = \frac{AB}{\sin\hat{C}} \quad \Rightarrow \quad AB = \frac{70\, \text{m} \cdot \sin(61.70°)}{\sin(7.55°)} \cong 469\, \text{m}$$

Quindi:

$$h = AB \cdot \sin(\alpha) = 469\, \text{m} \cdot \sin(20.75°) \cong 166\, \text{m} = \text{altezza collina}$$

## Quesito 8

In un piano cartesiano $Oxy$ una retta verticale divide il triangolo con i vertici nei punti $(0;\, 0)$, $(1;\, 1)$ e $(9;\, 1)$ in due regioni di ugual area. Si trovi l'equazione di tale retta.

Sia $x = k$ l'equazione della retta; essa interseca il lato orizzontale $BC$ del triangolo nel punto $D$ di ascissa $k$ ed il lato $AC$ nel punto $E$. Il triangolo $CDE$ deve avere area uguale alla metà dell'area del triangolo dato $ABC$.

$$\text{Area}(ABC) = \frac{1}{2} \cdot 8 \cdot 1 = 4 \quad \Rightarrow \quad \text{Area}(CDE) = 2$$

Cerchiamo l'intersezione fra la retta $AC$ e la retta $x = k$. La retta $AC$ passa per l'origine ed ha coefficiente angolare $m = \dfrac{1}{9}$, quindi:

$$\text{retta } AC:\quad y = \frac{1}{9}x$$

Il punto $E$ soddisfa il sistema:

$$\begin{cases} x = k \\ y = \dfrac{1}{9}x \end{cases} \quad \Rightarrow \quad E = \left(k;\; \frac{1}{9}k\right)$$

Pertanto:

$$\text{Area}(CDE) = \frac{1}{2}(9-k)\left(1 - \frac{1}{9}k\right) = \frac{1}{18}(9-k)^2 = 2$$

$$(9-k)^2 = 36 \quad \Rightarrow \quad k = 3$$

La retta richiesta ha dunque equazione: $x = 3$.

## Quesito 9

Un tronco di cono è circoscritto ad una sfera di raggio $r$. Si stabilisca la relazione che esiste fra i raggi di base del tronco e il raggio della sfera.

Consideriamo la sezione piana ottenuta con un piano passante per il vertice del cono che origina il tronco e per il centro della sfera. La figura che si ottiene è un trapezio isoscele circoscritto ad una circonferenza.

*(grafico — vedi PDF)*

Per una nota proprietà, il triangolo $BOC$ è rettangolo in $O$ (gli angoli $ABC$ e $BCD$ sono supplementari, quindi gli angoli $ABO$ e $BOC$, metà dei precedenti, sono complementari). Per il secondo teorema di Euclide si ha quindi:

$$OH^2 = CH \cdot BH \quad \Rightarrow \quad xy = r^2$$

Ma $x$ ed $y$ sono proprio i raggi di base (minore e maggiore rispettivamente) del tronco, quindi la relazione richiesta è:

$$xy = r^2$$

cioè il prodotto fra i raggi del tronco di cono circoscritto ad una sfera è uguale al quadrato del raggio della sfera stessa.

## Quesito 10

Due punti $A$ e $B$, il primo sull'asse $x$ e l'altro sull'asse $y$, distano dall'origine rispettivamente $35\, \text{cm}$ e $15\, \text{cm}$. Ambedue si muovono con moto rettilineo ed uniforme verso l'origine: $A$ con velocità $v_1 = 3\, \text{cm/s}$, $B$ con velocità $v_2 = 1\, \text{cm/s}$. In quale istante è minima la distanza tra i due punti e quanto vale questo minimo?

La legge oraria del moto di $A$ è: $x = x_0 + v_1 t = 35 - 3t$ (la velocità è negativa).
La legge oraria del moto di $B$ è: $y = y_0 + v_2 t = 15 - t$ (la velocità è negativa).

Al generico istante $t$ il punto $A$ si trova in $C = (35 - 3t;\; 0)$ e il punto $B$ si trova in $D = (0;\; 15 - t)$. Dobbiamo trovare il minimo della distanza $d = CD$ per $t \ge 0$:

$$CD = \sqrt{(35 - 3t)^2 + (15 - t)^2}$$

Il minimo di $CD$ coincide con il minimo di:

$$z = (35 - 3t)^2 + (15 - t)^2 = 10t^2 - 240t + 1450$$

Questa è una parabola con vertice di ascissa:

$$t = -\frac{b}{2a} = -\frac{-240}{2 \cdot 10} = 12$$

Dopo 12 secondi i punti $A$ e $B$ si trovano alla minima distanza, che vale:

$$CD_{\min} = \sqrt{(35 - 36)^2 + (15 - 12)^2} = \sqrt{1 + 9} = \sqrt{10} \cong 3.162\, \text{cm}$$

*(grafico — vedi PDF)*
