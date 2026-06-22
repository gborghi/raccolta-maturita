---
tipo: soluzione
prova_stem: 2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122
pdf: Prova_Maturita_2008.pdf
source: text
title: 2008 PNI Straordinaria — Questionario — Svolgimento
---
## Quesito 1

Fra le piramidi quadrangolari regolari di data area laterale $S$, si determini quella di volume massimo.

La superficie laterale della piramide è:

$$S = p \cdot a = 2l \cdot a$$

essendo $l$ lo spigolo di base ed $a$ l'apotema.

Il volume è:

$$V = \frac{1}{3} A_b \cdot h = \frac{1}{3} l^2 h$$

Posto $l = x$ (con $x > 0$), si ha:

$$a = \frac{S}{2l} = \frac{S}{2x}, \qquad h = \sqrt{a^2 - \frac{l^2}{4}} = \sqrt{\frac{S^2}{4x^2} - \frac{x^2}{4}} = \frac{\sqrt{S^2 - x^4}}{2x}$$

Quindi:

$$V = \frac{1}{3} l^2 h = \frac{1}{3} x^2 \cdot \frac{\sqrt{S^2 - x^4}}{2x} = \frac{1}{6} x \sqrt{S^2 - x^4}$$

$V$ è massimo se lo è $y = x^2(S^2 - x^4)$.

Risolviamo il problema per via elementare (il metodo delle derivate è usato più frequentemente):

$$x^2(S^2 - x^4) = (x^4)^{\frac{1}{2}} \cdot (S^2 - x^4)$$

Si tratta del prodotto di due potenze la cui somma delle basi ($x^4$ e $S^2 - x^4$) è costante ($S^2$); tale prodotto è massimo quando le basi sono proporzionali agli esponenti:

$$\frac{x^4}{\tfrac{1}{2}} = \frac{S^2 - x^4}{1} \implies 3x^4 = S^2 \implies x = \sqrt[4]{\frac{S^2}{3}}$$

Il volume della piramide è massimo quando il lato della base è $\sqrt[4]{\dfrac{S^2}{3}}$.

## Quesito 2

Si calcoli il limite della funzione

$$\frac{\log \sin x}{\log \tan x}$$

quando $x$ tende a $0$.

Il limite si presenta nella forma indeterminata $\infty/\infty$. Intendiamo il logaritmo nella base $e$. Quando $x$ tende a zero (esattamente a $0^+$, altrimenti $\sin x$ è negativo e non avrebbe senso $\log \sin x$), le funzioni al numeratore e al denominatore sono continue ed hanno derivata:

$$D(\log \sin x) = \frac{\cos x}{\sin x} \quad \text{: esiste in un intorno destro di } 0;$$

$$D(\log \tan x) = \frac{1/\cos^2 x}{\tan x} = \frac{1}{\sin x \cos x} \quad \text{: esiste in un intorno destro di } 0 \text{ e non si annulla.}$$

Sono quindi verificate le ipotesi del teorema di de L'Hôpital. Vediamo se esiste il limite del rapporto delle derivate:

$$\lim_{x \to 0^+} \frac{\dfrac{\cos x}{\sin x}}{\dfrac{1}{\sin x \cos x}} = \lim_{x \to 0^+} \cos^2 x = 1$$

Senza utilizzare la regola di de L'Hôpital:

$$\frac{\log \sin x}{\log \tan x} = \frac{\log \sin x}{\log \sin x - \log \cos x} = \frac{\log \sin x}{\log \sin x \!\left(1 - \dfrac{\log \cos x}{\log \sin x}\right)} = \frac{1}{1 - \dfrac{\log \cos x}{\log \sin x}} \to 1 \quad \text{se } x \to 0^+$$

Il limite della funzione per $x$ che tende a $0$ è quindi $1$.

## Quesito 3

Si provi se per la funzione $f(x) = |x+1| - 2x$, nell'intervallo $[-2;\,3]$, sono verificate le condizioni previste per la validità del teorema di Lagrange e, in caso affermativo, si trovi il punto in cui si verifica la tesi del teorema stesso.

La funzione deve essere continua nell'intervallo chiuso e derivabile nell'intervallo aperto. Osserviamo che la funzione equivale a:

$$f(x) = \begin{cases} -1 - 3x, & \text{se } -2 \le x < -1 \\ 1 - x, & \text{se } -1 \le x \le 3 \end{cases}$$

Analizziamo il punto critico $x = -1$; la funzione è continua; vediamo se è derivabile:

- Se $x < -1$: $f'(x) = -3$
- Se $x > -1$: $f'(x) = -1$

Quindi la funzione non è derivabile in $x = -1$, che fa parte dell'intervallo aperto $(-2;\,3)$: **la funzione non soddisfa il teorema di Lagrange** nell'intervallo indicato.

## Quesito 4

Si determini il campo di esistenza della funzione $y = (x^2 + 3x)^{\sqrt{-2-x}}$.

Il dominio si ottiene dalla condizione:

$$\begin{cases} x^2 + 3x > 0 \\ -2 - x \ge 0 \end{cases} \cup \begin{cases} x^2 + 3x = 0 \\ \sqrt{-2-x} > 0 \end{cases}$$

La prima condizione dà:

$$\begin{cases} x < -3 \text{ oppure } x > 0 \\ x \le -2 \end{cases} \implies x < -3$$

La seconda condizione dà $x = 0$ oppure $x = -3$, con $x < -2$, soddisfatta solo da $x = -3$.

Unendo:

$$x < -3 \quad \cup \quad x = -3$$

Il dominio della funzione è quindi $-\infty < x \le -3$.

## Quesito 5

Siano dati un triangolo equilatero, il cerchio in esso inscritto e il triangolo equilatero inscritto nel cerchio. Si scelga a caso un punto all'interno del triangolo maggiore: si determini la probabilità che tale punto risulti interno al triangolo minore.

Il lato del triangolo inscritto nel cerchio è la metà del lato del triangolo circoscritto (i vertici $B$, $C$, $D$ del triangolo minore sono i punti medi dei lati del triangolo più grande), quindi la sua area è la quarta parte dell'area del triangolo circoscritto, pertanto:

$$p = \frac{\text{Area(triangolo inscritto)}}{\text{Area(triangolo circoscritto)}} = \frac{1}{4} = 0{,}25$$

La probabilità richiesta è quindi $\dfrac{1}{4}$.

## Quesito 6

Alla prova orale di un concorso sono stati ammessi 9 maschi e 7 femmine. Sappiamo che saranno assunte 5 persone. Qual è la probabilità che siano assunti 2 maschi e 3 femmine?

Abbiamo 16 persone; le possibili cinquine sono date dalle combinazioni di 16 oggetti a 5 a 5:

$$C_{16,5} = \binom{16}{5} = \frac{16 \cdot 15 \cdot 14 \cdot 13 \cdot 12}{5!} = 4368$$

Le possibili coppie di maschi sono date dalle combinazioni di 9 oggetti a 2 a 2:

$$C_{9,2} = \binom{9}{2} = \frac{9 \cdot 8}{2!} = 36$$

Le possibili terne di femmine sono date dalle combinazioni di 7 oggetti a 3 a 3:

$$C_{7,3} = \binom{7}{3} = \frac{7 \cdot 6 \cdot 5}{3!} = 35$$

Le cinquine favorevoli (2 maschi e 3 femmine) sono $36 \cdot 35$; la probabilità richiesta è:

$$p = \frac{\dbinom{9}{2} \cdot \dbinom{7}{3}}{\dbinom{16}{5}} = \frac{36 \cdot 35}{4368} = \frac{15}{52} \approx 0{,}288 = 28{,}8\%$$

## Quesito 7

Si dimostri che l'equazione $\log x + x = 0$ ha un'unica radice reale e se ne calcoli un valore approssimato con due cifre decimali esatte.

Intendiamo $\log$ come logaritmo naturale ($\ln$).

Dire $\ln x + x = 0$ è come dire $\ln x = -x$; graficamente si ha la seguente situazione:

*(grafico — vedi PDF)*

Dal grafico si deduce che l'equazione ammette una sola radice, compresa tra $0$ e $1$. Restringiamo l'intervallo a cui appartiene la radice considerando la funzione $f(x) = \ln x + x$:

$$f(1) = 1, \qquad f(0{,}5) = \ln(0{,}5) + 0{,}5 \approx -0{,}2, \qquad f(0{,}6) \approx 0{,}1$$

Quindi la radice (unica) è compresa tra $0{,}5$ e $0{,}6$.

La funzione è continua nell'intervallo $[0{,}5;\,0{,}6]$, ha derivata prima e seconda:

$$f'(x) = \frac{1}{x} + 1, \qquad f''(x) = -\frac{1}{x^2} < 0 \text{ in tutto l'intervallo considerato.}$$

Possiamo quindi applicare il metodo delle tangenti (Newton).

Posto $[a;\,b] = [0{,}5;\,0{,}6]$, essendo $f(0{,}5) < 0$ ed $f(0{,}6) > 0$, il segno della derivata seconda è concorde con $f(a)$, quindi assumiamo come punto iniziale dell'iterazione $x_0 = a = 0{,}5$.

La formula iterativa è:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

$$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 0{,}5 - \frac{f(0{,}5)}{f'(0{,}5)} \approx 0{,}5644$$

$$x_2 = x_1 - \frac{f(x_1)}{f'(x_1)} = 0{,}5644 - \frac{f(0{,}5644)}{f'(0{,}5644)} \approx 0{,}5671$$

$$x_3 = x_2 - \frac{f(x_2)}{f'(x_2)} = 0{,}5671 - \frac{f(0{,}5671)}{f'(0{,}5671)} \approx 0{,}5671$$

Quindi la radice approssimata con due cifre decimali esatte è $x \approx 0{,}57$.

## Quesito 8

Si determinino le equazioni degli asintoti della curva:

$$f(x) = \int_{1}^{x} t\,e^t\,dt$$

Calcoliamo per parti l'integrale indefinito:

$$\int t\,e^t\,dt = \int t \cdot (e^t)'\,dt = t\,e^t - \int e^t\,dt = t\,e^t - e^t + c$$

Quindi:

$$f(x) = \int_{1}^{x} t\,e^t\,dt = \Big[t\,e^t - e^t\Big]_{1}^{x} = x\,e^x - e^x = e^x(x-1)$$

La funzione è continua su tutto $\mathbb{R}$, quindi non avremo asintoti verticali. Calcoliamo i limiti all'infinito:

$$\lim_{x \to -\infty} e^x(x-1) = 0 \quad \text{(ricordiamo che } x\,e^x \to 0 \text{ se } x \to -\infty\text{)}$$

Quindi per $x \to -\infty$ abbiamo l'**asintoto orizzontale** $y = 0$.

$$\lim_{x \to +\infty} e^x(x-1) = +\infty$$

È soddisfatta la condizione necessaria per l'asintoto obliquo, che però non c'è, non essendo la funzione un infinito del primo ordine.

## Quesito 9

Il toro è il solido di rotazione ottenuto facendo ruotare un cerchio di raggio $r$ di un giro completo attorno a un asse, che abbia dal cerchio generatore una distanza $a > r$. Si calcolino l'area e il volume del toro.

Per il **Primo teorema di Guldino** il volume si ottiene moltiplicando l'area $A$ del cerchio per la lunghezza $L$ della circonferenza descritta dal baricentro del cerchio (che è il suo centro) nella rotazione attorno all'asse:

$$V = L \cdot A = 2\pi a \cdot \pi r^2 = 2\pi^2 a r^2$$

Per il **Secondo teorema di Guldino** la superficie $S$ del toro si ottiene moltiplicando la lunghezza della circonferenza data per la lunghezza $L$ della circonferenza descritta dal baricentro del cerchio nella rotazione attorno all'asse:

$$S = 2\pi r \cdot 2\pi a = 4\pi^2 r a$$

## Quesito 10

Un segmento $AB$ di lunghezza costante $a$ scorre coi suoi estremi sopra due rette ortogonali fisse $x$, $y$. Si dimostri che un punto $P$ qualsiasi del segmento descrive una ellisse avente gli assi sopra $x$, $y$. Che cosa succede se $P$ è il punto medio di $AB$?

Poniamo $A = (0;\,k)$ e $B = (h;\,0)$ con $-a \le h \le a$ e $-a \le k \le a$. Senza ledere la generalità supponiamo che $A$ e $B$ stiano sui semiassi positivi. Risulta:

$$h^2 + k^2 = a^2$$

Possiamo quindi porre $h = a\cos\alpha$, $k = a\sin\alpha$ (dove $\alpha$ è l'angolo $\widehat{OBA}$, con $O$ origine degli assi).

Fissiamo un punto $P$ sul segmento $AB$, con $AP = t$ e $BP = a - t$, con $0 < t < a$.

Posto $P = (x;\,y)$, risulta:

$$y = (a-t)\sin\alpha \qquad \text{e} \qquad x = t\cos\alpha$$

ovvero:

$$\frac{y}{a-t} = \sin\alpha \qquad \text{e} \qquad \frac{x}{t} = \cos\alpha$$

Tenendo presente la relazione goniometrica fondamentale $\sin^2\alpha + \cos^2\alpha = 1$:

$$\left(\frac{x}{t}\right)^2 + \left(\frac{y}{a-t}\right)^2 = 1 \implies \frac{x^2}{t^2} + \frac{y^2}{(a-t)^2} = 1$$

che rappresenta un'**ellisse** con gli assi coincidenti con gli assi cartesiani e semiassi $t$ e $a - t$.

Se $P$ è il punto medio di $AB$ risulta $t = \dfrac{a}{2}$, quindi il luogo diventa:

$$\frac{x^2}{\dfrac{a^2}{4}} + \frac{y^2}{\dfrac{a^2}{4}} = 1 \implies x^2 + y^2 = \frac{a^2}{4}$$

che è una **circonferenza** con centro nell'origine e raggio $\dfrac{a}{2}$.
