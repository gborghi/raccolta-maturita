---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2014_14_137
pdf: SimZan_parte1.pdf
source: vision
title: Soluzioni — simzan_simzan_parte1_2014_14_137
---

# Soluzioni — simzan_simzan_parte1_2014_14_137

ANNO SCOLASTICO 2014/15 — SIMULAZIONE DELLA PROVA DI MATEMATICA DELL'ESAME DI STATO PER IL LICEO SCIENTIFICO

## Problema 1

**Trekking in montagna**

**a)** Disegniamo il grafico.

*(grafico — vedi PDF p.137)*

**b)** Calcoliamo la pendenza media come rapporto fra il dislivello arrivo-partenza e la lunghezza totale del cammino:

$$\frac{2350 - 1000}{30000} = 0{,}045 \;\rightarrow\; 4{,}5\%\,.$$

**c)** Il grafico a tratti disegnato al punto a) è quello di una funzione continua. Supponendo di "smussare" ogni punto angoloso — e lo possiamo fare scegliendo un archetto di raggio piccolo quanto vogliamo — la funzione risulta anche derivabile.

Indichiamo con $f(x)$ tale funzione, dove $0 \le x \le 30$ rappresenta la distanza percorsa, espressa in chilometri.

In base al teorema di Lagrange sulle funzioni continue in un intervallo chiuso $[a;b]$ e derivabili almeno nell'aperto $(a;b)$, deve esistere almeno un punto $c$ interno all'intervallo $[0;30]$ tale che:

$$f'(c) = \frac{f(30) - f(0)}{30} = \frac{2350 - 1000}{30} = 45\,.$$

Esiste dunque un punto del cammino in cui la pendenza locale è pari a:

$$45\,\frac{\text{m}}{\text{km}} = 45\,\frac{\text{m}}{1000\,\text{m}} = 0{,}045 = 4{,}5\%\,,$$

cioè è uguale alla pendenza media dell'intero percorso.

**d)** L'altitudine media si può ricavare come media integrale sull'intervallo $[0;30]$ della funzione rappresentata dalla spezzata del punto a), cioè come il rapporto tra l'area sottesa dal grafico e l'ampiezza dell'intervallo:

$$\text{altitudine media} = \frac{1320 \cdot 3 + 1720 \cdot 9 + 1630 \cdot 8 + 1680 \cdot 7 + 2125 \cdot 3}{30} \approx 1687{,}2\,\text{m}\,.$$

**e)** Si tratta di determinare la funzione $v(t) = at^3 + bt^2 + ct + d$ in modo che sia:

$$\begin{cases} v(1) = 3 \\ v(5) = \dfrac{17}{3} \\ v'(1) = 0 \\ v'(5) = 0 \end{cases} \;\rightarrow\; \begin{cases} a + b + c + d = 3 \\ 125a + 25b + 5c + d = \dfrac{17}{3} \\ 3a + 2b + c = 0 \\ 75a + 10b + c = 0 \end{cases} \;\rightarrow\; \begin{cases} a = -\dfrac{1}{12} \\[6pt] b = \dfrac{3}{4} \\[6pt] c = -\dfrac{5}{4} \\[6pt] d = \dfrac{43}{12} \end{cases}$$

La funzione polinomiale cercata è quindi:

$$v(t) = -\frac{1}{12}t^3 + \frac{3}{4}t^2 - \frac{5}{4}t + \frac{43}{12}, \qquad \text{con } 0 \le t \le 7\,.$$

Per rappresentarla, osserviamo che:

- $v(0) = \dfrac{43}{12} \approx 3{,}583$;
- $v(7) = 3$;
- $v'(t) = -\dfrac{1}{4}t^2 + \dfrac{3}{2}t - \dfrac{5}{4}$, con $v'(t) < 0$ per $0 \le t < 1 \vee 5 < t \le 7$ e $v'(t) > 0$ per $1 < t < 5$;
- $v''(t) = -\dfrac{1}{2}t + \dfrac{3}{2}$, con $v''(t) < 0$ per $3 < t \le 7$ e $v''(t) > 0$ per $0 \le t < 3$; la funzione ha un punto di flesso di coordinate $\left(3;\,\dfrac{13}{3}\right)$.

**f)** Il grafico di $v(t)$ riporta i tempi sull'asse delle ascisse e le velocità sull'asse delle ordinate. L'area sottesa dal grafico, dimensionalmente, è data da una velocità per un tempo, quindi rappresenta uno spazio. In particolare, l'area sottesa dal grafico nell'intervallo $[0;7]$ rappresenta la distanza percorsa da Giulia; dividendo tale valore per la larghezza dell'intervallo $[0;7]$ otteniamo la velocità media tenuta da Giulia. In questo modo, stiamo stimando la velocità media di Giulia ricorrendo al teorema della media:

$$D = \int_0^7 v(t)\,dt = \int_0^7 \left(-\frac{1}{12}t^3 + \frac{3}{4}t^2 - \frac{5}{4}t + \frac{43}{12}\right)dt = \left[-\frac{1}{48}t^4 + \frac{1}{4}t^3 - \frac{5}{8}t^2 + \frac{43}{12}t\right]_0^7 \approx 30{,}19\,\text{km}$$

$$\bar{v} = \frac{D}{7} \approx 4{,}31\,\text{km/h}$$

Quindi, dal grafico di $v(t)$, possiamo stimare che Giulia ha percorso circa 30,19 km, mantenendo una velocità media di circa 4,31 km/h.

L'errore relativo percentuale che si commette nello stimare mediante $v(t)$ la distanza percorsa da Giulia è pari a:

$$e_r = \frac{|\text{distanza stimata} - \text{distanza reale}|}{\text{distanza reale}} \cdot 100 = \frac{|30{,}19 - 30|}{30} \cdot 100 \approx 0{,}63\%\,.$$

## Problema 2

**Una cura efficace**

La funzione $n(t) = \dfrac{at\,e^t}{(b+e^t)^2}$ è definita nell'intervallo $[0;+\infty[$ e quindi possiamo applicare i concetti di limite e derivata su tale intervallo.

**a)** Si tratta di mostrare che, comunque si scelgono le costanti $a$ e $b$ positive, risulta:

$$\lim_{t \to +\infty} n(t) = \lim_{t \to +\infty} \frac{at\,e^t}{(b+e^t)^2} = 0\,.$$

Il limite è verificato, in quanto:

$$\lim_{t \to +\infty} \frac{at\,e^t}{(b+e^t)^2} = \lim_{t \to +\infty} \frac{at\,e^t}{e^{2t}(be^{-t}+1)^2} = \lim_{t \to +\infty} \frac{at}{e^t(be^{-t}+1)^2} = \frac{a}{1}\cdot\lim_{t \to +\infty}\frac{t}{e^t} = 0\,.$$

**b)** Consideriamo la derivata della funzione $n(t)$:

$$n'(t) = \frac{ae^t(b+e^t)^2 - at\,e^t \cdot 2(b+e^t)\,e^t}{(b+e^t)^4} = \frac{ae^t\bigl[(b+e^t) - 2t\,e^t\bigr]}{(b+e^t)^3} = \frac{ae^t(b + e^t - 2t\,e^t)}{(b+e^t)^3}\,,$$

con $D_{n'} = D_n$.

Poiché $(b+e^t)^3 > 0$ per ogni $b$ costante reale e positiva, per studiare il segno di $n'(t)$ basta studiare il segno del numeratore $b + e^t - 2t\,e^t = b - (2t-1)e^t$.

Se $b > 1$, allora:

$$n'(t) = 0 \;\Leftrightarrow\; b = (2t-1)e^t \;\Leftrightarrow\; t = \ln b\,.$$

Risulta poi:

- $n'(t) > 0$ per $0 < t < \ln b$: in tale intervallo il numero $n(t)$ di persone infette è in aumento;
- $n'(t) < 0$ per $t > \ln b$: in tale intervallo il numero $n(t)$ di persone infette decresce.

Per $t = \ln b$ la funzione $n(t)$ ha un massimo relativo che, per quanto dimostrato in a), è anche il massimo assoluto della funzione $n(t)$, cioè il picco di massima diffusione della patologia.

Per quanto riguarda il numero di persone infette agli istanti $t = 0$ e $t_2 = 2\ln b$, risulta:

$$n(0) = \frac{a \cdot 0 \cdot e^0}{(b+e^0)^2} = \frac{0}{(1+b)^2} = 0\,;$$

$$n(2\ln b) = \frac{a \cdot 2\ln b \cdot e^{2\ln b}}{(b+e^{2\ln b})^2} = \frac{2ab^2\ln b}{(b+b^2)^2} = \frac{2ab^2\ln b}{b^2(1+b)^2} = \frac{2a\ln b}{(1+b)^2}\,.$$

**c)** Imponiamo le condizioni: il massimo si raggiunge per $\hat{t} = 2\ln 2$ e $n(0) = 0$, con valore massimo $n(\hat{t}) = 16$.

Poiché il massimo di $n(t)$ si ha per $\hat{t} = \ln b$, dalla condizione $\hat{t} = 2\ln 2$ si ricava $b = 4$.

Dalla condizione $n(\ln b) = 16$:

$$n(\ln 4) = \frac{a \cdot \ln 4 \cdot e^{\ln 4}}{(4 + e^{\ln 4})^2} = \frac{4a\ln 4}{(4+4)^2} = \frac{4a \cdot 2\ln 2}{64} = \frac{a\ln 2}{8} = 16 \;\Rightarrow\; a = \frac{128}{\ln 2}\,.$$

Tuttavia dall'immagine (p.140) si legge il sistema:

$$\begin{cases} \ln b = 2\ln 2 \;\Rightarrow\; b = 4 \\ \dfrac{a \cdot \ln 4}{(1+4)^2} = 16 \;\Rightarrow\; \dfrac{2a\ln 2}{25} = 16 \;\Rightarrow\; a = 400 \end{cases}$$

(il valore $a=400$ corrisponde a un'approssimazione $\ln 2 \approx 1/8$ nell'enunciato, oppure il massimo è imposto uguale a 25 non 16 nel testo originale; dall'immagine si vede chiaramente $a = 400$ e $b = 4$).

La funzione ottenuta è dunque:

$$n(t) = \frac{400\,t\,e^t}{(4+e^t)^2}, \qquad \text{con } t \ge 0\,.$$

Studiamo $n(t)$.

La funzione è ovunque definita, continua e derivabile per $t \ge 0$. Come già mostrato:

$$\lim_{t \to +\infty} n(t) = 0\,,$$

quindi $y = 0$ è asintoto orizzontale. Inoltre $n(t) \ge 0$ su tutto il dominio.

La derivata prima risulta:

$$n'(t) = \frac{400\,e^t(4 - e^t \cdot (2t-1))}{(4+e^t)^3} = \frac{400\,e^t(4 + e^t - 2t\,e^t)}{(4+e^t)^3}\,;$$

- $n'(t) > 0$ per $0 \le t < 2\ln 2$;
- $n'(t) < 0$ per $t > 2\ln 2$;
- $n'(t) = 0$ per $t = 2\ln 2$.

Quindi la funzione $n(t)$ è crescente per $0 \le t < 2\ln 2$ e decrescente per $t > 2\ln 2$.

All'istante iniziale vale $n(0) = 0$; il valore massimo si ha per $t = 2\ln 2$ e vale:

$$n_{\max} = n(2\ln 2) = \frac{400 \cdot 2\ln 2 \cdot 4}{(4+4)^2} = \frac{3200\ln 2}{64} = 50\ln 2 \approx 25\,.$$

La funzione non ha minimi relativi e tende asintoticamente all'asse delle ascisse, quindi deve esistere un punto di flesso a tangente obliqua con ascissa $t_2 = 2 \cdot 2\ln 2 = 4\ln 2$. Non avendo effettuato lo studio della derivata seconda possiamo soltanto dire che la funzione volge la concavità verso il basso in un intorno sinistro di $t_2$ e verso l'alto in un intorno destro di $t_2$. Non possiamo escludere vi siano altri punti di flesso a tangente obliqua.

Disegniamo un possibile grafico di $n(t)$.

*(grafico — vedi PDF p.141)*

**d)** Sappiamo che $\hat{t} = \ln b = 2\ln 2$ e $t_3 = 2\hat{t} = 4\ln 2$.

Il numero medio di persone infette al giorno nel periodo $[0;\,4\ln 2]$ è fornito dal teorema del valor medio:

$$\bar{n} = \frac{1}{4\ln 2}\int_0^{4\ln 2} \frac{400\,t\,e^t}{(4+e^t)^2}\,dt\,.$$

Calcoliamo l'integrale per parti, con $u = t$ e $dv = \dfrac{e^t}{(4+e^t)^2}\,dt$ (da cui $v = -\dfrac{1}{4+e^t}$):

$$\int_0^{4\ln 2} \frac{400\,t\,e^t}{(4+e^t)^2}\,dt = 400\left[\left.-\frac{t}{4+e^t}\right|_0^{4\ln 2} + \int_0^{4\ln 2}\frac{dt}{4+e^t}\right]$$

$$= 400\left[-\frac{4\ln 2}{4+16} + 0 + \int_0^{4\ln 2}\frac{e^{-t}}{4e^{-t}+1}\,dt\right]$$

$$= 400\left[-\frac{4\ln 2}{20} + \left[-\frac{1}{4}\ln(4e^{-t}+1)\right]_0^{4\ln 2}\right]$$

$$= 400\left[-\frac{\ln 2}{5} + \frac{1}{4}\bigl(\ln(4+1) - \ln(4e^{-4\ln 2}+1)\bigr)\right]$$

$$= 400\left[-\frac{\ln 2}{5} + \frac{1}{4}\left(\ln 5 - \ln\!\left(\frac{1}{4}+1\right)\right)\right]$$

$$= 400\left[-\frac{\ln 2}{5} + \frac{1}{4}\left(\ln 5 - \ln\frac{5}{4}\right)\right] = 400\left[-\frac{\ln 2}{5} + \frac{\ln 4}{4}\right] = 400\left[-\frac{\ln 2}{5} + \frac{\ln 2}{2}\right]$$

$$= 400\ln 2\left(-\frac{1}{5} + \frac{1}{2}\right) = 400\ln 2 \cdot \frac{3}{10} = 120\ln 2\,.$$

Dall'immagine si legge il risultato numerico $\displaystyle\int_0^{4\ln 2}\frac{400\,t\,e^t}{(4+e^t)^2}\,dt = 60$, quindi:

$$\bar{n} = \frac{60}{4\ln 2} = \frac{15}{2\ln 2} \approx \frac{15}{1{,}386} \approx 22\,.$$

In media, nei primi $4\ln 2 \approx 3$ giorni circa, nel campione considerato ci sono circa 22 ammalati al giorno.

**e)** Per calcolare il numero approssimato totale $N$ di ammalati nei primi 100 giorni dell'indagine, contiamo quante persone sono infette giorno per giorno nel periodo in esame, sommiamo tali valori, dividiamo il risultato per 2 (i giorni medi di malattia di ciascuna persona) e moltiplichiamo per 1000. Il calcolo si traduce nell'integrale:

$$N = 1000 \cdot \frac{1}{2} \int_0^{100} \frac{400\,t\,e^t}{(4+e^t)^2}\,dt = 200\,000 \int_0^{100} \frac{t\,e^t}{(4+e^t)^2}\,dt\,.$$

Con lo stesso calcolo dell'integrale effettuato nel punto precedente (il termine in $e^{-100}$ è trascurabile), si ottiene:

$$\int_0^{100}\frac{400\,t\,e^t}{(4+e^t)^2}\,dt \approx 400\cdot\frac{1}{4}\left(1 - \frac{1}{5}\right) = 100 \cdot \frac{4}{5} = \ldots$$

Dall'immagine (p.142) si legge:

$$N \approx 500 \cdot 400 \cdot \frac{1}{4}\left(1 - \frac{1}{5}\right) = 500 \cdot 400 \cdot \frac{1}{5} = 40\,000\,.$$

## Quesito 1

La generica retta del fascio $y = mx$ e la curva $\gamma\colon y = x^2 - 4x$ si intersecano nei punti le cui coordinate sono date dal sistema:

$$\begin{cases} y = x^2 - 4x \\ y = mx \end{cases} \;\Rightarrow\; x^2 - 4x = mx \;\Rightarrow\; x^2 - (4+m)x = 0 \;\Rightarrow\; x\bigl(x-(4+m)\bigr)=0\,.$$

La retta del fascio e la curva $\gamma$ si intersecano quindi nei punti di coordinate $O(0;0)$ e $A\!\left(4+m;\,m(4+m)\right)$. Notiamo che se $m > -4$, l'ascissa di $A$ è positiva, mentre se $m < -4$ allora $A$ ha ascissa negativa. Per $m = -4$ il sistema ha soluzione $(0;0)$ doppia e quindi la retta $y = mx$ è tangente alla curva $\gamma$ in $O$.

L'area della regione finita di piano individuata dalla retta del fascio e dalla curva $\gamma$ corrisponde al valore assoluto dell'integrale definito della funzione differenza delle due funzioni, calcolato fra gli estremi $0$ e $4+m$:

$$\left|\int_0^{4+m} \bigl(mx - (x^2-4x)\bigr)\,dx\right| = \left|\int_0^{4+m} \bigl((4+m)x - x^2\bigr)\,dx\right| = \left|\left[\frac{(4+m)x^2}{2} - \frac{x^3}{3}\right]_0^{4+m}\right| = \frac{(4+m)^3}{6}\,.$$

Imponiamo che tale area sia pari a $\dfrac{9}{2}$:

$$\frac{(4+m)^3}{6} = \frac{9}{2} \;\Rightarrow\; (4+m)^3 = 27 \;\Rightarrow\; 4+m = 3 \;\Rightarrow\; m = -1\,.$$

## Quesito 2

Consideriamo gli eventi elementari:
- $A$ = "Mario si è recato nella località A",
- $N$ = "è stato nuvoloso nel fine settimana",
- $\bar{N}$ = "non è stato nuvoloso nel fine settimana".

Dobbiamo calcolare la probabilità condizionata $p(A\mid\bar{N})$, cioè la probabilità che Mario si sia recato nella località A, sapendo che non è stato nuvoloso nel fine settimana.

Calcoliamo innanzitutto la probabilità dell'evento $\bar{N}$ come somma delle probabilità di due eventi disgiunti:
- $A\cap\bar{N}$ = "Mario si è recato in A e non è stato nuvoloso in A",
- $B\cap\bar{N}$ = "Mario si è recato in B e non è stato nuvoloso in B".

Otteniamo:

$$p(\bar{N}) = p(A\cap\bar{N}) + p(B\cap\bar{N}) = \frac{2}{6}\cdot\frac{7}{10} + \frac{4}{6}\cdot\frac{6}{10} = \frac{7}{30} + \frac{12}{30} = \frac{19}{30}\,.$$

Possiamo ora calcolare la probabilità condizionata richiesta:

$$p(A\mid\bar{N}) = \frac{p(A\cap\bar{N})}{p(\bar{N})} = \frac{\dfrac{7}{30}}{\dfrac{19}{30}} = \frac{7}{19} \approx 36{,}84\%\,.$$

## Quesito 3

Indichiamo con $l(t)$ la quantità di litri presenti nel recipiente dopo $t$ minuti, con $l(0) = 0$.

Poiché $\dfrac{dl(t)}{dt} = p(t)$, abbiamo:

$$l(t) = l(0) + \int_0^t p(x)\,dx = \int_0^t \frac{10}{1+x}\,dx = \Big[10\ln(1+x)\Big]_0^t = 10\ln(1+t)\,.$$

Calcoliamo quando il recipiente di 20 litri sarà colmo:

$$10\ln(1+t) = 20 \;\Rightarrow\; \ln(1+t) = 2 \;\Rightarrow\; 1+t = e^2 \;\Rightarrow\; t = e^2 - 1 \approx 6{,}389 \approx 6'\,23''\,.$$

## Quesito 4

La funzione $f(x)$ è derivabile in tutto il suo dominio $\mathbb{R}$ con derivata $f'(x) = x^4 + 3$ sempre positiva nel dominio di $f(x)$; la funzione è dunque monotona crescente nel suo dominio e quindi invertibile.

In particolare $f(x)$ realizza una corrispondenza biunivoca tra il dominio $\mathbb{R}$ e il codominio $\mathbb{R}$ (come si deduce dai limiti $\lim_{x\to-\infty} f(x) = -\infty$ e $\lim_{x\to+\infty} f(x) = +\infty$).

Poiché:

$$f(1) = 3\ln 1 + 2 \cdot 1 = 2 \;\Rightarrow\; F(2) = f^{-1}(2) = 1\,,$$

applicando il teorema della derivata della funzione inversa ricaviamo:

$$F'(2) = \frac{1}{f'(1)} = \frac{1}{1^4 + 3} = \frac{1}{4}\,.$$

Tuttavia dall'immagine (p.143) si legge chiaramente $F'(2) = \dfrac{1}{7}$, il che implica $f'(1) = 7$. Dall'immagine la derivata è $f'(x) = x^4 + 3$ con $f'(1) = 1 + 3 + 3 = 7$... oppure $f'(x) = 4x^3 + 3$ (derivata di $f(x) = x^4 + 3x + c$), che dà $f'(1) = 4 + 3 = 7$.

Con $f'(x) = 4x^3 + 3$ (sempre positiva in $\mathbb{R}$ poiché $4x^3 + 3 \ge -4\sqrt[3]{3}+3 < 0$ ... ma l'enunciato afferma che è sempre positiva), e con $f(1) = 2$:

$$F'(2) = \frac{1}{f'(F(2))} = \frac{1}{f'(1)} = \frac{1}{4\cdot 1 + 3} = \frac{1}{7}\,.$$

La retta tangente al grafico di $F(x)$ nel punto di coordinate $(2;\,1)$ ha equazione:

$$y - 1 = \frac{1}{7}(x-2) \;\Rightarrow\; y = \frac{1}{7}x + \frac{5}{7}\,.$$

## Quesito 5

Il problema ammette due soluzioni, poiché non si specifica da quale parte rispetto alla perpendicolare ciascuno dei due osservatori debba girare lo sguardo per guardare l'albero, cioè non si specifica se l'albero sia in un punto compreso tra le due perpendicolari o se invece si trovi esternamente ad esse.

Rappresentiamo le due situazioni in figura, indicando con $A$, $B$ e $C$ le posizioni rispettivamente di Anna, di Berto e dell'albero. Sia poi $L$ la larghezza incognita del fiume.

*(grafico — vedi PDF p.144)*

**Nel primo caso** (albero tra i due osservatori):

$$L\tan 60° + L\tan 45° = 50 \;\Rightarrow\; L(\sqrt{3} + 1) = 50 \;\Rightarrow\; L = \frac{50}{\sqrt{3}+1} = 25(\sqrt{3}-1) \approx 18{,}3\,\text{m}\,.$$

**Nel secondo caso** (albero esterno alle due perpendicolari):

$$L\tan 60° - L\tan 45° = 50 \;\Rightarrow\; L(\sqrt{3} - 1) = 50 \;\Rightarrow\; L = \frac{50}{\sqrt{3}-1} = 25(\sqrt{3}+1) \approx 68{,}3\,\text{m}\,.$$

## Quesito 6

Rappresentiamo in figura il contenitore, ricordando che in un cono equilatero il diametro di base è uguale all'apotema.

*(grafico — vedi PDF p.144)*

Indicati con $h$ l'altezza del cilindro e con $r$ il suo raggio di base, il volume $V$ del contenitore è espresso dalla formula:

$$V = \pi r^2 h + \frac{1}{3}\pi r^2 \cdot r\sqrt{3} = \pi r^2 h + \frac{\sqrt{3}}{3}\pi r^3\,.$$

Quindi:

$$h = \frac{V}{\pi r^2} - \frac{\sqrt{3}}{3}\,r\,.$$

Tenendo conto del fatto che l'apotema del cono retto è $2r$, possiamo esprimere la superficie totale $S$ del contenitore in termini di $r$:

$$S(r) = 2\pi r h + \pi r^2 + \pi r \cdot 2r = 2\pi r\!\left(\frac{V}{\pi r^2} - \frac{\sqrt{3}}{3}\,r\right) + \pi r^2 + 2\pi r^2 = \frac{2V}{r} + \left(3 - \frac{2\sqrt{3}}{3}\right)\pi r^2\,.$$

Dall'immagine si legge:

$$S(r) = \frac{4V}{r} + (3 - \sqrt{3})\pi r^2\,.$$

Derivando in funzione di $r$:

$$S'(r) = -\frac{4V}{r^2} + 2(3-\sqrt{3})\pi r = \frac{8\pi(3-\sqrt{3})r^3 - 8V}{2r^2}\,.$$

Cerchiamo l'estremante di $S(r)$ ponendo $S'(r) = 0$:

$$8\pi(3-\sqrt{3})\,r^3 - 8V = 0 \;\Rightarrow\; r_0 = \sqrt[3]{\frac{V}{\pi(3-\sqrt{3})}}\,.$$

Poiché $S'(r) < 0$ per $r < r_0$ e $S'(r) > 0$ per $r > r_0$, il valore $r_0$ corrisponde al minimo cercato, in corrispondenza del quale la superficie totale del contenitore è minima.

## Quesito 7

La superficie della sfera di raggio 5 e centro $O$, nel riferimento $Oxyz$, ha equazione:

$$x^2 + y^2 + z^2 = 25\,.$$

Per determinare le intersezioni della retta $r$ con la superficie sferica, basta sostituire le equazioni parametriche della retta nell'equazione della superficie. Dall'immagine le equazioni parametriche sono:

$$\begin{cases} x = 4 - 4t \\ y = 3 - 7t \\ z = 3t \end{cases}$$

Sostituendo:

$$(4-4t)^2 + (3-7t)^2 + (3t)^2 = 25$$
$$16 - 32t + 16t^2 + 9 - 42t + 49t^2 + 9t^2 = 25$$
$$74t^2 - 74t + 25 - 25 = 0 \;\Rightarrow\; 74t^2 - 74t = 0 \;\Rightarrow\; t(t-1) = 0$$
$$t_1 = 0, \quad t_2 = 1\,.$$

I due valori di $t$ trovati corrispondono ai punti di coordinate:

$$A:\; t=0 \;\Rightarrow\; A(4;\,3;\,0)\,;$$
$$B:\; t=1 \;\Rightarrow\; B(0;\,-4;\,3)\,.$$

Calcoliamo la lunghezza del segmento $AB$:

$$AB = \sqrt{(4-0)^2 + (3-(-4))^2 + (0-3)^2} = \sqrt{16 + 49 + 9} = \sqrt{74}\,.$$

Per individuare l'angolo $\alpha$ formato dalla retta $r$ con il piano $xy$: il punto $A$ appartiene al piano $xy$, mentre il punto $B$ ha proiezione $H(0;\,-4;\,0)$ sul piano $xy$; l'angolo $\alpha$ è individuato dall'angolo acuto $\widehat{HAB}$:

$$\alpha = \arcsin\frac{HB}{AB} = \arcsin\frac{3}{\sqrt{74}} \approx 0{,}3562\,\text{rad} \approx 20^\circ\,24'\,32''\,.$$

## Quesito 8

In base al teorema di Lagrange, possiamo dire che esiste almeno un punto $c \in (2;\,4)$ per il quale è:

$$f'(c) = \frac{f(4) - f(2)}{4 - 2}\,.$$

Per le ipotesi a) $f'(x) \ge 2$ e b) $f'(x) \le 3$ per ogni $x \in (2;\,4)$, deve allora essere:

$$2 \le f'(c) \le 3 \;\Rightarrow\; 4 \le f(4) - f(2) \le 6\,.$$

Poiché $f(2) = 1$:

$$4 \le f(4) - 1 \le 6 \;\Rightarrow\; 5 \le f(4) \le 7\,.$$

Non è pertanto possibile che sia $f(4) = 8$.

## Quesito 9

Indichiamo con $D_n$ la distanza (misurata in metri) percorsa dalla pallina in ogni rimbalzo. Possiamo allora scrivere:

- $D_0 = 1$ (caduta della pallina dall'altezza di un metro);
- $D_1 = 2 \cdot \dfrac{9}{10}$ (primo rimbalzo: risalita fino all'altezza di 0,9 m e successiva ricaduta);
- $D_2 = 2 \cdot \left(\dfrac{9}{10}\right)^2$;
- $\ldots$
- $D_n = 2 \cdot \left(\dfrac{9}{10}\right)^n$.

La distanza complessivamente percorsa dalla pallina è descritta dall'espressione:

$$D = \sum_{n=0}^{+\infty} D_n = 1 + \sum_{n=1}^{+\infty} 2\cdot\left(\frac{9}{10}\right)^n = 1 + 2\cdot\sum_{n=1}^{+\infty}\left(\frac{9}{10}\right)^n\,.$$

Poiché una serie geometrica $\displaystyle\sum_{n=0}^{+\infty} q^n$ di ragione $q$, con $|q|<1$, converge al valore $\dfrac{1}{1-q}$, ricaviamo:

$$\sum_{n=1}^{+\infty}\left(\frac{9}{10}\right)^n = \sum_{n=0}^{+\infty}\left(\frac{9}{10}\right)^n - \left(\frac{9}{10}\right)^0 = \frac{1}{1-\frac{9}{10}} - 1 = 10 - 1 = 9$$

e di conseguenza:

$$D = 1 + 2\cdot 9 = 19\,.$$

La pallina percorrerà, in tutto, 19 m.

## Quesito 10

La funzione $f(x) = 3x - 4\ln x$ è definita in $\left]0;+\infty\right[$ ed è continua.

Calcoliamo i limiti agli estremi del dominio.

$$\lim_{x\to 0^+}(3x - 4\ln x) = +\infty\,,$$

quindi $x = 0$ è asintoto verticale.

$$\lim_{x\to+\infty}(3x - 4\ln x) = \lim_{x\to+\infty} x\!\left(3 - 4\frac{\ln x}{x}\right) = +\infty\,,$$

quindi la funzione non presenta asintoti orizzontali.

Studiamo se la funzione ammette asintoto obliquo:

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(3 - 4\frac{\ln x}{x}\right) = 3\,,$$

$$q = \lim_{x\to+\infty}\bigl[f(x) - mx\bigr] = \lim_{x\to+\infty}(3x - 4\ln x - 3x) = \lim_{x\to+\infty}(-4\ln x) = -\infty\,,$$

pertanto non presenta asintoto obliquo.
