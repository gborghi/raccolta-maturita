---
tipo: soluzione
prova_stem: 2012_sessione_suppletiva_2012_211_prova_124
pdf: Prova_Maturita_2012.pdf
source: text
title: Soluzioni — 2012_sessione_suppletiva_2012_211_prova_124
---

# Soluzioni — 2012_sessione_suppletiva_2012_211_prova_124

> Sessione suppletiva 2012 — Liceo Scientifico.
> La prova contiene due varianti: Ordinamento (M557) e PNI/Sperimentale (Y557).
> Le soluzioni dei Quesiti 1–10 si riferiscono alla versione PNI (Matefilia).

---

## Problema 1

*(Ordinamento — Corso di Ordinamento, Indirizzo Scientifico)*

Un trapezio isoscele è circoscritto ad una semicirconferenza di raggio 1, in modo che la base maggiore contenga il diametro.

**Punto 1.** Si calcoli, in funzione dell'ampiezza $x$ del suo angolo acuto, il volume del solido generato dal trapezio in una rotazione di $180°$ intorno alla congiungente dei punti medi delle basi, controllando che risulta:

$$V(x) = \frac{\pi}{3}\left(\cos^3 x + 3\,\frac{\cos x}{\sin^2 x} - \frac{2}{\sin^3 x}\right)$$

**Punto 2.** Si studi la funzione $f(x) = \dfrac{3V(x)}{\pi}$ e si tracci il suo grafico $\gamma$ nell'intervallo $0 < x < 2\pi$, mettendo in evidenza la parte di grafico compatibile con i dati del problema.

**Punto 3.** Si scriva l'equazione della tangente a $\gamma$ nel punto di ascissa $x = \dfrac{\pi}{2}$ e si calcoli l'area del triangolo che essa determina con l'asse $x$ e con la retta di equazione $x = \pi$.

**Punto 4.** Si calcoli l'area della superficie piana delimitata dalla curva $\gamma$, dall'asse $x$ e dalle rette di equazione $x = \dfrac{\pi}{4}$ e $x = \dfrac{\pi}{2}$.

---

## Problema 2

*(Ordinamento — Corso di Ordinamento, Indirizzo Scientifico)*

Si consideri la funzione:

$$f(x) = \frac{x^2 - x}{2}$$

**Punto 1.** Si studi tale funzione e si tracci il suo grafico $\gamma$, su un piano riferito ad un sistema di assi cartesiani ortogonali $Oxy$.

**Punto 2.** Si risolva la disequazione:

$$\frac{x^2 - x}{2} \geq 1$$

**Punto 3.** Si scriva l'equazione della tangente alla curva $\gamma$ nel punto di intersezione con l'asse $y$ e si calcoli in gradi e primi (sessagesimali) l'ampiezza dell'angolo $\varphi$ che essa forma con la direzione positiva dell'asse $x$.

**Punto 4.** La regione finita di piano delimitata dalla curva $\gamma$ e dall'asse $x$ nel I quadrante è la base di un solido $S$, le cui sezioni, ottenute con piani perpendicolari all'asse $x$, sono tutte esagoni regolari. Si calcoli il volume di $S$.

---

## Quesito 1

*(PNI 2012 — Matefilia)*

Si calcola il seguente limite. Dalla soluzione Matefilia, i passaggi ricostruiti sono:

$$\lim_{x \to 0^+} \frac{x^3 - x^2}{x^4} = \lim_{x \to 0^+} \frac{x-1}{x^2} = -\infty$$

Si applica poi il limite notevole $\displaystyle\lim_{x \to 0^+} \frac{a^x - 1}{x} = \ln a$ con $a = \dfrac{8}{81}$:

$$\lim_{x \to 0^+} \frac{\left(\dfrac{8}{81}\right)^x - 1}{x} \cdot \frac{x^2}{1} = \lim_{x \to 0^+} \frac{\left(\dfrac{8}{81}\right)^x - 1}{x} \cdot x = \ln\!\left(\frac{8}{81}\right) \cdot 0$$

La catena completa di limiti ricostruita dai frammenti è:

$$\lim_{x \to 0^+} \left(\frac{8}{81}\right)^{x^3 - x^2} = \lim_{x \to 0^+} \left(\frac{8}{81}\right)^{x^2(x-1)} = -\infty$$

**N.B.** $\left(\dfrac{8}{81}\right)^x \to +\infty$ per $x \to +\infty$ ed $\ln(8/81)$ è negativo; il limite notevole applicato è $\displaystyle\lim_{x \to 0^+} \dfrac{a^x - 1}{x} = \ln a$.

---

## Quesito 2

*(PNI 2012 — Matefilia)*

Una moneta di diametro $d = 23{,}25$ mm viene lanciata su un pavimento di mattonelle esagonali regolari con lato $10$ cm. Si determina la probabilità che la moneta cada interamente all'interno di una mattonella.

La moneta cade interamente all'interno se il suo centro dista da ogni lato più del raggio $R = d/2 = 23{,}25/2$ mm. L'area favorevole è l'area di un esagono concentrico con lati paralleli. Il lato $L = \text{IF}$ dell'esagono interno vale:

$$L = 10\text{ cm} - 2\,AJ, \qquad AJ = IJ \cdot \tan 30° = \frac{d}{2} \cdot \frac{\sqrt{3}}{3} = \frac{d\sqrt{3}}{6}$$

quindi:

$$L = 10\text{ cm} - \frac{d\sqrt{3}}{3} = \left(10 - 2{,}325\sqrt{3}\right)\text{ cm}$$

*(N.B. L'angolo $IAJ = 60°$.)*

La probabilità richiesta è il rapporto tra l'area dell'esagono piccolo e l'area della mattonella.

---

## Quesito 3

*(PNI 2012 — Matefilia)*

**Area esagono piccolo:** con apotema $a = \dfrac{L}{2}\sqrt{3}$,

$$\text{Area}_{\text{piccolo}} = 3L \cdot a = 3L \cdot \frac{L\sqrt{3}}{2} = \frac{3\sqrt{3}}{2}\,L^2$$

**Area mattonella** (lato 10 cm):

$$\text{Area}_{\text{mattonella}} = \frac{3\sqrt{3}}{2} \cdot 100$$

**Probabilità:**

$$p = \frac{L^2}{100} \approx 0{,}74955$$

**Quesito 3 (funzione esponenziale).** Data $f(x) = 3^x$, si trova il punto in cui la tangente ha pendenza $1$:

$$f'(x) = 3^x \ln 3 = 1 \implies 3^x = \frac{1}{\ln 3}$$

Passando ai logaritmi naturali:

$$x \ln 3 = \ln\!\left(\frac{1}{\ln 3}\right) = -\ln(\ln 3) \implies x = \frac{-\ln(\ln 3)}{\ln 3} \approx -0{,}086 \quad \text{(per eccesso)}$$

---

## Quesito 4

*(PNI 2012 — Matefilia)*

I due insiemi numerici $\mathbb{N}$ e $\mathbb{Q}$ sono **equipotenti**: si può stabilire una corrispondenza biunivoca tra $\mathbb{N}$ e $\mathbb{Q}^+$ rappresentando i numeri razionali positivi nella tabella di Cantor:

$$\frac{1}{1},\ \frac{2}{1},\ \frac{3}{1},\ \ldots$$
$$\frac{1}{2},\ \frac{2}{2},\ \frac{3}{2},\ \ldots$$
$$\frac{1}{3},\ \frac{2}{3},\ \frac{3}{3},\ \ldots$$
$$\vdots$$

e numerandoli percorrendo le diagonali.

*(Per approfondire: http://it.wikipedia.org/wiki/Insieme_numerabile)*

---

## Quesito 5

*(PNI 2012 — Matefilia)*

Dati $n$ punti in posizione generale:

**Segmenti** (combinazioni di $n$ a $2$ a $2$):

$$\binom{n}{2} = \frac{n(n-1)}{2!}$$

**Triangoli** (combinazioni di $n$ a $3$ a $3$):

$$\binom{n}{3} = \frac{n(n-1)(n-2)}{3!}$$

**Tetraedri** (combinazioni di $n$ a $4$ a $4$):

$$\binom{n}{4} = \frac{n(n-1)(n-2)(n-3)}{4!}$$

---

## Quesito 6

*(PNI 2012 — Matefilia)*

Data la cubica $y = x^3 + ax + b$: ogni cubica ha uno ed un solo flesso, ottenuto annullando la derivata seconda, e ogni cubica è simmetrica rispetto al suo flesso.

$$y' = 3x^2 + a, \qquad y'' = 6x = 0 \implies x = 0$$

Il flesso è quindi nel punto $F = (0,\, b)$.

Per verificare la simmetria rispetto a $F$, si effettua la trasformazione $x \mapsto -x$,\ $y \mapsto 2b - y$:

$$2b - y = (-x)^3 + a(-x) + b = -x^3 - ax + b$$

$$\implies y = b + x^3 + ax = x^3 + ax + b \quad \checkmark$$

L'equazione non cambia, quindi la curva è simmetrica rispetto a $F$.

---

## Quesito 7

*(PNI 2012 — Matefilia)*

Posto $VC = l$ (spigolo della piramide), si esprime $CH$ in funzione di $l$.

$H$ è il baricentro del triangolo equilatero $ABC$, quindi $CH = \dfrac{2}{3}\,CF$. L'altezza $CF$ del triangolo equilatero di lato $l$ è:

$$CF = \frac{l\sqrt{3}}{2}$$

quindi:

$$CH = \frac{2}{3} \cdot \frac{l\sqrt{3}}{2} = \frac{l\sqrt{3}}{3}$$

Detto $\alpha$ l'angolo tra $VH$ e $VC$:

$$\sin\alpha = \frac{HC}{VC} = \frac{l\sqrt{3}/3}{l} = \frac{\sqrt{3}}{3}$$

$$\alpha = \arcsin\!\left(\frac{\sqrt{3}}{3}\right) \approx 35°$$

---

## Quesito 8

*(PNI 2012 — Matefilia)*

*(Il testo originale fa riferimento ad un diagramma ad albero.)*

*(grafico — vedi PDF p. corrispondente)*

Analizzando il diagramma, la probabilità richiesta per il teorema di Bayes è:

$$p = \frac{\dfrac{1}{10} \cdot \dfrac{2}{10}}{\dfrac{1}{10} \cdot \dfrac{2}{10} + \dfrac{1}{3} \cdot \dfrac{7}{10} + \dfrac{1}{6} \cdot \dfrac{5}{10}} = \frac{30}{49} \approx 61{,}2\%$$

---

## Quesito 9

*(PNI 2012 — Matefilia)*

Indicato con $A'$ il simmetrico di $A$ rispetto alla retta $r$ data e congiungendo $A'$ con $B$, si ottiene il punto $D$ (intersezione di $A'B$ con $r$) tale che $AD + DB$ risulti minimo.

Infatti, per un qualunque altro punto $E$ sulla retta $r$:

$$AE + BE = A'E + BE \geq A'B = A'D + DB = AD + DB$$

per la disuguaglianza triangolare.

---

## Quesito 10

*(PNI 2012 — Matefilia)*

Si pone $VD = x$ con $x > 0$. Dalla similitudine tra i triangoli $AHV$ e $VCE$ risulta $VE : CE = VH : AH$.

$$VC = r + x, \qquad VE = \sqrt{VC^2 - CE^2} = \sqrt{(r+x)^2 - r^2} = \sqrt{x^2 + 2rx}$$

$$VH = 2r + x, \qquad AH = \frac{VH \cdot CE}{VE} = \frac{(2r+x)\,r}{\sqrt{x^2 + 2rx}}$$

Da $VA : VH = VC : VE$:

$$VA = \frac{VC \cdot VH}{VE} = \frac{(r+x)(2r+x)}{\sqrt{x^2 + 2rx}}$$

La superficie laterale del cono è:

$$S = \pi \cdot AH \cdot VA = \pi \cdot \frac{r(2r+x)}{\sqrt{x^2+2rx}} \cdot \frac{(r+x)(2r+x)}{\sqrt{x^2+2rx}} = \frac{\pi\,r(r+x)(2r+x)^2}{x^2 + 2rx}$$

Si minimizza $y = \dfrac{x^3 + 2rx^2 + r^2 x}{x^2 + 2rx}$ (semplificazione della parte dipendente da $x$). La derivata è:

$$y' = 1 - \frac{r^2}{x^2}$$

che è $\geq 0$ per $x \geq r$ e $< 0$ per $0 < x < r/\sqrt{2}$; quindi la funzione ha un minimo in $x = \dfrac{r}{\sqrt{2}}$.

*(Con la collaborazione di Angela Santamaria)*
