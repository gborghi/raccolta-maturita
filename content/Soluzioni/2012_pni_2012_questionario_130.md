---
tipo: soluzione
prova_stem: 2012_pni_2012_questionario_130
pdf: Prova_Maturita_2012.pdf
source: text
title: Soluzioni — 2012_pni_2012_questionario_130
---

# Soluzioni — 2012_pni_2012_questionario_130

## Quesito 1

Si calcola il limite:

$$\lim_{x \to 0^+} \frac{8^x - 81^x}{x}$$

Applicando il limite notevole $\lim_{x \to 0} \dfrac{a^x - 1}{x} = \ln a$, si scompone:

$$\lim_{x \to 0^+} \frac{8^x - 81^x}{x} = \lim_{x \to 0^+} \frac{8^x - 1}{x} - \lim_{x \to 0^+} \frac{81^x - 1}{x} = \ln 8 - \ln 81 = \ln\frac{8}{81}$$

**N.B.** $\ln(8/81)$ è negativo (poiché $8 < 81$). Il limite notevole applicato è $\lim_{x \to 0^+} \dfrac{a^x - 1}{x} = \ln a$.

## Quesito 2

La moneta cade internamente a una mattonella se il suo centro dista dai lati della mattonella meno del suo raggio $R = d/2 = 23{,}25/2$ mm. L'area favorevole è quindi l'area di un esagono concentrico a quello dato, con i lati paralleli a quelli della mattonella.

Il lato $L = IF$ dell'esagono interno è pari a $10\text{ cm} - 2AJ$, dove:

$$AJ = IJ \cdot \tan(30°) = \frac{\sqrt{3}}{3} \cdot \frac{d}{2}$$

Quindi:

$$L = 10 - \frac{\sqrt{3}}{3}\,d = \left(10 - 2{,}325\cdot\frac{\sqrt{3}}{3}\right)\text{ cm}$$

(N.B. L'angolo $IAJ = 60°$.)

La probabilità richiesta è data dal rapporto tra l'area dell'esagono piccolo e l'area della mattonella.

## Quesito 3

L'area dell'esagono piccolo si calcola come $\text{perimetro} \times \text{apotema}/2 = 3L \cdot a$, dove l'apotema è $a = \dfrac{L}{2}\sqrt{3}$; quindi:

$$\text{Area esagono piccolo} = 3L \cdot \frac{L}{2}\sqrt{3} = \frac{3\sqrt{3}}{2}\,L^2$$

L'area della mattonella (esagono di lato 10 cm):

$$\text{Area mattonella} = \frac{3\sqrt{3}}{2} \cdot 100^2 \cdot \frac{1}{100}= \frac{3\sqrt{3}}{2} \cdot 100$$

ovvero, più precisamente, con lato 10:

$$\text{Area mattonella} = \frac{3\sqrt{3}}{2} \cdot 10^2 = \frac{3\sqrt{3}}{2} \cdot 100$$

La probabilità è:

$$P = \frac{\dfrac{3\sqrt{3}}{2}L^2}{\dfrac{3\sqrt{3}}{2} \cdot 100} = \frac{L^2}{100} \approx 0{,}74955$$

## Quesito 4
Si considera la funzione $f(x) = 3^x$. La sua derivata è:

$$f'(x) = 3^x \ln 3$$

Si cerca $x$ tale che $f'(x) = 1$, cioè:

$$3^x \ln 3 = 1 \implies 3^x = \frac{1}{\ln 3}$$

Passando ai logaritmi naturali di entrambi i membri:

$$x \ln 3 = \ln\!\left(\frac{1}{\ln 3}\right) = -\ln(\ln 3)$$

$$x = -\frac{\ln(\ln 3)}{\ln 3} \approx -0{,}086 \quad \text{(per eccesso)}$$

## Quesito 5
I due insiemi numerici $\mathbb{N}$ e $\mathbb{Q}$ sono equipotenti; infatti si può stabilire una corrispondenza biunivoca tra $\mathbb{N}$ e $\mathbb{Q}$, rappresentando i numeri razionali positivi in una tabella del tipo:

$$\frac{1}{1},\; \frac{2}{1},\; \frac{3}{1},\;\ldots$$
$$\frac{1}{2},\; \frac{2}{2},\; \frac{3}{2},\;\ldots$$
$$\frac{1}{3},\; \frac{2}{3},\; \frac{3}{3},\;\ldots$$
$$\vdots$$

e percorrendo la tabella per diagonali (metodo di Cantor). (Per approfondire: http://it.wikipedia.org/wiki/Insieme_numerabile)

## Quesito 6
I segmenti richiesti sono tanti quante le combinazioni senza ripetizioni di $n$ oggetti a 2 a 2:

$$\binom{n}{2} = \frac{n(n-1)}{2!}$$

Il numero dei triangoli richiesti è pari alle combinazioni senza ripetizioni di $n$ oggetti a 3 a 3:

$$\binom{n}{3} = \frac{n(n-1)(n-2)}{3!}$$

Il numero dei tetraedri è pari alle combinazioni senza ripetizioni di $n$ oggetti a 4 a 4:

$$\binom{n}{4} = \frac{n(n-1)(n-2)(n-3)}{4!}$$

## Quesito 7
La famiglia di curve è $y = x^3 + ax + b$. Ogni cubica ha uno e un solo flesso, che si ottiene annullando la derivata seconda:

$$y' = 3x^2 + a, \qquad y'' = 6x$$

$y'' = 0$ se e solo se $x = 0$; il flesso è quindi nel punto $F = (0,\, b)$.

Per verificare che la curva è simmetrica rispetto a $F$, si effettua la trasformazione $x \mapsto -x$, $y \mapsto 2b - y$:

$$2b - y = (-x)^3 + a(-x) + b = -x^3 - ax + b$$

$$\implies y = 2b - (-x^3 - ax + b) = x^3 + ax + b \checkmark$$

L'equazione non cambia, quindi la cubica è simmetrica rispetto al suo flesso $F$.

## Quesito 8
Posto $VC = l$, esprimiamo $CH$ in funzione di $l$.

$H$ è il baricentro del triangolo equilatero $ABC$, quindi $CH = \dfrac{2}{3}CF$. L'altezza $CF$ del triangolo equilatero di lato $l$ è:

$$CF = \frac{\sqrt{3}}{2}\,l$$

Quindi:

$$CH = \frac{2}{3} \cdot \frac{\sqrt{3}}{2}\,l = \frac{\sqrt{3}}{3}\,l$$

Detto $\alpha$ l'angolo tra $VH$ e $VC$, risulta:

$$\sin\alpha = \frac{HC}{VC} = \frac{\dfrac{\sqrt{3}}{3}\,l}{l} = \frac{\sqrt{3}}{3}$$

da cui:

$$\alpha = \arcsin\!\left(\frac{\sqrt{3}}{3}\right) \approx 35°$$

## Quesito 9
*(grafico — vedi PDF: diagramma ad albero)*

Analizzando lo schema, la probabilità richiesta, per il teorema di Bayes, è:

$$P = \frac{\dfrac{1}{2}\cdot\dfrac{10}{100}}{\dfrac{1}{2}\cdot\dfrac{10}{100} + \dfrac{1}{3}\cdot\dfrac{7}{100} + \dfrac{1}{6}\cdot\dfrac{5}{100}} = \frac{30}{49} \approx 61{,}2\%$$

## Quesito 10
Indicato con $A'$ il simmetrico di $A$ rispetto alla retta $r$ data e congiungendo $A'$ con $B$, si ottiene il punto $D$ (intersezione di $A'B$ con $r$) tale che $AD + DB$ risulti minimo.

Infatti, per qualunque altro punto $E$ sulla retta, risulta:

$$AE + BE = A'E + BE \geq A'B = A'D + DB = AD + DB$$

dove si è usata la disuguaglianza triangolare $A'E + BE \geq A'B$.

## Quesito 11
Poniamo $VD = x$ (con $x > 0$). Dalla similitudine fra i triangoli $AHV$ e $VCE$ risulta $VE : CE = VH : AH$.

$VC = r + x$;

$$VE = \sqrt{VC^2 - CE^2} = \sqrt{(r+x)^2 - r^2} = \sqrt{x^2 + 2rx}$$

$VH = 2r + x$; quindi:

$$AH = CE \cdot \frac{VH}{VE} = r \cdot \frac{2r + x}{\sqrt{x^2 + 2rx}}$$

Risulta poi $VA : VH = VC : VE$, da cui:

$$VA = VH \cdot \frac{VC}{VE} = \frac{(2r+x)(r+x)}{\sqrt{x^2 + 2rx}}$$

La superficie laterale del cono è:

$$S = \pi \cdot AH \cdot VA = \pi \cdot r \cdot \frac{(2r+x)^2(r+x)}{x^2 + 2rx}$$

Questa espressione è minima se lo è:

$$y = \frac{x^2 + 2rx + 3r^2}{x} = x + 2r + \frac{3r^2}{x}$$

La derivata è:

$$y' = 1 - \frac{3r^2}{x^2}$$

$y' \geq 0$ per $x^2 \geq 3r^2$, cioè $x \geq r\sqrt{3}$; la funzione è crescente per $x > r\sqrt{3}$, decrescente per $0 < x < r\sqrt{3}$, e pertanto in $x = r\sqrt{3}$ ha il minimo, come richiesto.

*(Con la collaborazione di Angela Santamaria)*
