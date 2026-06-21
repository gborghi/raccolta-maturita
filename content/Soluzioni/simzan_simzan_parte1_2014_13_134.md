---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2014_13_134
pdf: SimZan_parte1.pdf
source: vision
title: Soluzioni — simzan_simzan_parte1_2014_13_134
---

# Soluzioni — simzan_simzan_parte1_2014_13_134

## Problema 1

**Trekking in montagna**

I dati della tabella sono:

| Distanza percorsa (km) | 0 | 3 | 12 | 20 | 27 | 30 |
|---|---|---|---|---|---|---|
| Tempo trascorso (h) | 0 | 1 | 3 | 5 | 6 | 7 |
| Altitudine s.l.m. (m) | 1000 | 1640 | 1800 | 1460 | 1900 | 2350 |

$v_{\min} = 3$ km/h, $v_{\max} = \dfrac{17}{3}$ km/h.

**a)** Si disegna il grafico a tratti dell'altitudine (in metri) in funzione della distanza percorsa (in chilometri), con i valori della tabella.

*(grafico — vedi PDF p.137)*

**b)** La pendenza percentuale media si calcola come rapporto tra la variazione totale di altitudine e la distanza totale percorsa:

$$\frac{2350 - 1000}{30000} = 0{,}045 \;\longrightarrow\; 4{,}5\%.$$

**c)** Il grafico in questo modello "migliorato" è quello di una funzione continua e derivabile in ogni punto. Indichiamo con $f(x)$ tale funzione, dove $0 \le x \le 30$ rappresenta la distanza percorsa in chilometri.

In base al teorema di Lagrange applicato sull'intervallo $[0;\,30]$ deve esistere almeno un punto $c$ interno all'intervallo tale che:

$$f'(c) = \frac{f(30) - f(0)}{30 - 0} = \frac{2350 - 1000}{30} = 45 \text{ m/km} = 4{,}5\%.$$

Poiché la funzione è derivabile, per il teorema di Lagrange esiste almeno un punto $c$ interno all'intervallo $[0;\,30]$ in cui la pendenza locale è uguale alla pendenza media dell'intero percorso, cioè $4{,}5\%$.

**d)** L'altitudine media si può ricavare come media integrale sull'intervallo $[0;\,30]$ della funzione rappresentata dalla spezzata del punto a), cioè come il rapporto tra l'area sottesa dal grafico e l'ampiezza dell'intervallo:

$$\text{altitudine media} = \frac{1320 \cdot 3 + 1720 \cdot 9 + 1630 \cdot 8 + 1680 \cdot 7 + 2125 \cdot 3}{30} \approx 1687{,}2 \text{ m}.$$

**e)** Si tratta di determinare la funzione $v(t) = at^3 + bt^2 + ct + d$ in modo che sia:

$$\begin{cases} v(1) = 3 \\ v(5) = \dfrac{17}{3} \\ v'(1) = 0 \\ v'(5) = 0 \end{cases} \longrightarrow \begin{cases} a + b + c + d = 3 \\ 125a + 25b + 5c + d = \dfrac{17}{3} \\ 3a + 2b + c = 0 \\ 75a + 10b + c = 0 \end{cases} \longrightarrow \begin{cases} a = -\dfrac{1}{12} \\[6pt] b = \dfrac{3}{4} \\[6pt] c = -\dfrac{5}{4} \\[6pt] d = \dfrac{43}{12} \end{cases}$$

La funzione polinomiale cercata è quindi:

$$v(t) = -\frac{1}{12}t^3 + \frac{3}{4}t^2 - \frac{5}{4}t + \frac{43}{12}, \qquad \text{con } 0 \le t \le 7.$$

Per rappresentarla, si osserva che:

- $v(0) = \dfrac{43}{12} \approx 3{,}583$;
- $v(7) = 3$;
- $v'(t) = -\dfrac{1}{4}t^2 + \dfrac{3}{2}t - \dfrac{5}{4}$, con $v'(t) < 0$ per $0 \le t < 1$ oppure $5 < t \le 7$ e $v'(t) > 0$ per $1 < t < 5$;
- $v''(t) = -\dfrac{1}{2}t + \dfrac{3}{2}$, con $v''(t) < 0$ per $3 < t \le 7$ e $v''(t) > 0$ per $0 \le t < 3$; la funzione ha un punto di flesso di coordinate $\left(3;\,\dfrac{13}{3}\right)$.

*(grafico — vedi PDF p.139)*

**f)** Il grafico di $v(t)$ riporta il tempo sull'asse delle ascisse e la velocità sull'asse delle ordinate. L'area sottesa dal grafico, dimensionalmente, è data da una velocità moltiplicata per un tempo, quindi rappresenta uno spazio. In particolare, l'area sottesa dal grafico nell'intervallo $[0;\,7]$ rappresenta la distanza percorsa da Giulia; dividendola per la larghezza dell'intervallo $[0;\,7]$ si ottiene la velocità media tenuta da Giulia ricorrendo al teorema della media:

$$D = \int_0^7 v(t)\,dt = \int_0^7 \left(-\frac{1}{12}t^3 + \frac{3}{4}t^2 - \frac{5}{4}t + \frac{43}{12}\right)dt$$

$$= \left[-\frac{1}{48}t^4 + \frac{1}{4}t^3 - \frac{5}{8}t^2 + \frac{43}{12}t\right]_0^7 \approx 30{,}19 \text{ km},$$

$$\bar{v} = \frac{D}{7} \approx 4{,}31 \text{ km/h}.$$

L'errore relativo percentuale che si commette nello stimare mediante $v(t)$ la distanza percorsa da Giulia rispetto al dato reale è:

$$e_r = \frac{|\text{distanza stimata} - \text{distanza reale}|}{\text{distanza reale}} \cdot 100 = \frac{|30{,}19 - 30|}{30} \cdot 100 \approx 0{,}63\%.$$

## Problema 2

**Una cura efficace**

La funzione $n(t)$ è definita nell'intervallo $[0;\,+\infty[$ e quindi è possibile applicare i concetti di limite e derivata su tale intervallo.

**a)** Si tratta di mostrare che, comunque si scelgono le costanti $a$ e $b$ positive, risulta:

$$\lim_{t \to +\infty} n(t) = \lim_{t \to +\infty} \frac{ae^t}{(b+e^t)^2} = \lim_{t \to +\infty} \frac{a}{e^t\!\left(\frac{b}{e^t}+1\right)^2} = 0.$$

Il limite è verificato, in quanto:

$$\lim_{t\to+\infty} \frac{ae^t}{(b+e^t)^2} = \lim_{t\to+\infty} \frac{ae^t}{e^{2t}\!\left(\frac{b}{e^t}+1\right)^2} = \lim_{t\to+\infty} \frac{a}{e^t\!\left(\frac{b}{e^t}+1\right)^2} = 0.$$

**b)** Consideriamo la derivata della funzione $n(t)$:

$$n'(t) = \frac{ae^t(b+e^t)^2 - ae^t \cdot 2(b+e^t)e^t}{(b+e^t)^4} = \frac{ae^t\bigl[(b+e^t) - 2e^t\bigr]}{(b+e^t)^3} = \frac{ae^t(b - e^t)}{(b+e^t)^3}.$$

Poiché $(b+e^t)^3 > 0$ per ogni $b$ costante reale positiva, per studiare il segno di $n'(t)$ basta studiare il segno del numeratore $ae^t(b - e^t)$.

Se $b > 1$, allora:

- $n'(t) > 0$ per $0 < t < \ln b$; in tale intervallo il numero $n(t)$ di persone infette è in aumento;
- $n'(t) < 0$ per $t > \ln b$; in tale intervallo il numero $n(t)$ di persone infette decresce.

Per $\bar{t} = \ln b$ la funzione ha un massimo relativo che, per quanto dimostrato in a), è anche il massimo assoluto della funzione $n(t)$, cioè il picco di massima diffusione della patologia.

Per quanto riguarda il numero di malati rispetto agli istanti $t = 0$ e $t_2 = 2\bar{t} = 2\ln b$:

$$n(0) = \frac{a}{(b+1)^2}, \qquad n(2\ln b) = \frac{a e^{2\ln b}}{(b + e^{2\ln b})^2} = \frac{ab^2}{(b + b^2)^2} = \frac{ab^2}{b^2(1+b)^2} = \frac{a}{(1+b)^2} = n(0).$$

Quindi il numero di malati all'istante $t_2 = 2\ln b$ è uguale al numero iniziale $n(0)$.

**c)** Imponiamo le condizioni:

$$\begin{cases} \bar{t} = 2\ln 2 \\ n(0) = 16 \end{cases}$$

Poiché il massimo di $n(t)$ si ha per $\bar{t} = \ln b$, dalla condizione $\ln b = 2\ln 2$ si ottiene $b = 4$.

Dall'altra condizione:

$$\frac{a}{(1+b)^2} = 16 \;\longrightarrow\; \frac{a}{(1+4)^2} = 16 \;\longrightarrow\; \frac{a}{25} = 16 \;\longrightarrow\; a = 400.$$

La funzione ottenuta è dunque:

$$n(t) = \frac{400e^t}{(4+e^t)^2}, \qquad t \ge 0.$$

Studiamo $n(t)$:

- $n(0) = \dfrac{400}{25} = 16$, $\lim_{t\to+\infty} n(t) = 0$, quindi $y = 0$ è asintoto orizzontale;
- $n'(t) > 0$ per $0 < t < 2\ln 2$ e $n'(t) < 0$ per $t > 2\ln 2$;
- il massimo si raggiunge in $t_1 = 2\ln 2$: $n_{\max} = \dfrac{400 \cdot 4}{(4+4)^2} = \dfrac{1600}{64} = 25$.

*(grafico — vedi PDF p.141)*

**d)** Sappiamo che $2\bar{t} = 4\ln 2$. Il numero medio di persone infette al giorno nel periodo $[0;\,4\ln 2]$ è fornito dal teorema del valor medio:

$$\bar{n} = \frac{1}{4\ln 2} \int_0^{4\ln 2} \frac{400e^t}{(4+e^t)^2}\,dt.$$

Calcoliamo l'integrale con la sostituzione $u = 4 + e^t$, $du = e^t\,dt$ (quando $t=0$, $u=5$; quando $t=4\ln2$, $u=4+e^{4\ln2}=4+16=20$):

$$\int_0^{4\ln 2} \frac{400e^t}{(4+e^t)^2}\,dt = 400\int_5^{20} \frac{du}{u^2} = 400\left[-\frac{1}{u}\right]_5^{20} = 400\left(-\frac{1}{20}+\frac{1}{5}\right) = 400 \cdot \frac{3}{20} = 60.$$

Quindi:

$$\bar{n} = \frac{60}{4\ln 2} = \frac{15}{\ln 2} \approx \frac{15}{0{,}693} \approx 21{,}6 \approx 22 \text{ persone/giorno.}$$

**e)** La funzione $n(t)$ si riferisce a un campione che mappa l'$1\text{‰}$ dell'intera popolazione. Se ogni ammalato è rimasto infettato in media due giorni, il numero totale di ammalati nell'intera popolazione nei primi 100 giorni di studio si stima come:

$$N = 1000 \cdot \frac{1}{2}\int_0^{100} n(t)\,dt \approx 500 \cdot \int_0^{100} \frac{400e^t}{(4+e^t)^2}\,dt.$$

Usando la stessa primitiva:

$$\int_0^{100} \frac{400e^t}{(4+e^t)^2}\,dt = 400\left[-\frac{1}{4+e^t}\right]_0^{100} = 400\left(\frac{1}{5} - \frac{1}{4+e^{100}}\right) \approx 400 \cdot \frac{1}{5} = 80.$$

Quindi:

$$N \approx 500 \cdot 80 = 40\,000 \text{ ammalati.}$$

## Quesito 1

Consideriamo la curva $\gamma$ di equazione $y = x^2 - 4x$ e il fascio di rette $y = mx$, con $m \in \mathbb{R}$.

La generica retta del fascio e la curva $\gamma$ si intersecano nei punti dati dal sistema:

$$\begin{cases} y = x^2 - 4x \\ y = mx \end{cases} \;\longrightarrow\; x^2 - 4x = mx \;\longrightarrow\; x(x - 4 - m) = 0 \;\longrightarrow\; x = 0 \;\vee\; x = 4+m.$$

Per avere una regione finita occorre $4 + m \neq 0$, cioè $m \neq -4$. L'area della regione piana delimitata dalle due curve è:

$$A = \int_0^{4+m} \bigl|mx - (x^2 - 4x)\bigr|\,dx = \int_0^{4+m} \bigl|(m+4)x - x^2\bigr|\,dx = \left[(m+4)\frac{x^2}{2} - \frac{x^3}{3}\right]_0^{4+m}$$

$$= (m+4)\frac{(m+4)^2}{2} - \frac{(m+4)^3}{3} = \frac{(m+4)^3}{2} - \frac{(m+4)^3}{3} = \frac{(m+4)^3}{6}.$$

Poniamo $A = \dfrac{9}{2}$:

$$\frac{(m+4)^3}{6} = \frac{9}{2} \;\longrightarrow\; (m+4)^3 = 27 \;\longrightarrow\; m+4 = 3 \;\longrightarrow\; m = -1.$$

Oppure, considerando $(m+4) < 0$ (la retta è sotto la curva):

$$(m+4)^3 = -27 \;\longrightarrow\; m+4 = -3 \;\longrightarrow\; m = -7.$$

I valori cercati sono dunque $m = -1$ oppure $m = -7$.

## Quesito 2

Per decidere la meta del fine settimana, Mario lancia un dado regolare a sei facce:
- se esce 1 o 3 sceglie la località $A$: $P(A) = \dfrac{2}{6} = \dfrac{1}{3}$;
- altrimenti sceglie la località $B$: $P(B) = \dfrac{4}{6} = \dfrac{2}{3}$.

Previsioni meteo: $P(\text{nuvoloso}|A) = 0{,}30$ quindi $P(\text{sole}|A) = 0{,}70$; $P(\text{nuvoloso}|B) = 0{,}40$ quindi $P(\text{sole}|B) = 0{,}60$.

Calcoliamo la probabilità che il weekend sia di sole (evento $S$):

$$P(S) = P(S|A)\cdot P(A) + P(S|B)\cdot P(B) = 0{,}70 \cdot \frac{1}{3} + 0{,}60 \cdot \frac{2}{3} = \frac{7}{30} + \frac{12}{30} = \frac{19}{30}.$$

Per il teorema di Bayes:

$$P(A|S) = \frac{P(S|A)\cdot P(A)}{P(S)} = \frac{\dfrac{7}{10} \cdot \dfrac{1}{3}}{\dfrac{19}{30}} = \frac{\dfrac{7}{30}}{\dfrac{19}{30}} = \frac{7}{19} \approx 36{,}84\%.$$

## Quesito 3

Un rubinetto versa acqua con portata variabile $p(t) = \dfrac{10}{1+t}$ litri/minuto. Dobbiamo trovare il tempo $T$ affinché si riempiano 20 litri:

$$\int_0^T \frac{10}{1+t}\,dt = 20 \;\longrightarrow\; \bigl[10\ln(1+t)\bigr]_0^T = 20 \;\longrightarrow\; 10\ln(1+T) = 20$$

$$\;\longrightarrow\; \ln(1+T) = 2 \;\longrightarrow\; T = e^2 - 1 \approx 6{,}389 \text{ minuti.}$$

Convertiamo: $0{,}389 \cdot 60 \approx 23{,}3$ s. Il recipiente si riempie in circa **6 minuti e 23 secondi**.

## Quesito 4

Assegnata la funzione $f(x) = 3\ln x - \dfrac{x^2}{2}$, dobbiamo trovare la retta tangente alla funzione inversa $F(x) = f^{-1}(x)$ nel suo punto di ascissa 2, dopo aver dimostrato che $f(x)$ è invertibile.

**Invertibilità di $f(x)$:** Il dominio è $(0;\,+\infty)$. La derivata è:

$$f'(x) = \frac{3}{x} - x = \frac{3 - x^2}{x}.$$

$f'(x) > 0$ per $0 < x < \sqrt{3}$ e $f'(x) < 0$ per $x > \sqrt{3}$. Poiché $f$ non è monotona su tutto il dominio, va considerata su un intervallo di monotonia. Il punto di ascissa $F(2)$ è tale che $f(F(2)) = 2$.

Verifichiamo: $f(1) = 3\ln 1 - \dfrac{1}{2} = -\dfrac{1}{2}$ e $f(\sqrt{3}) = \dfrac{3}{2}\ln 3 - \dfrac{3}{2} \approx 0{,}648$. Poiché $F(2) = f^{-1}(2)$ non cade nel dominio di invertibilità standard, possiamo usare la formula della derivata della funzione inversa sapendo che il punto $(2;\,x_0)$ appartiene al grafico di $F$, con $f(x_0) = 2$.

Dalla formula della derivata della funzione inversa:

$$F'(2) = \frac{1}{f'(F(2))} = \frac{1}{f'(x_0)} = \frac{x_0}{3 - x_0^2},$$

dove $x_0$ soddisfa $3\ln x_0 - \dfrac{x_0^2}{2} = 2$.

Poiché $f$ è strettamente crescente su $(0;\,\sqrt{3}]$ e strettamente decrescente su $[\sqrt{3};\,+\infty)$, è invertibile su ciascuno di questi intervalli. L'equazione della retta tangente al grafico di $F$ nel punto di ascissa 2 è:

$$y - x_0 = F'(2)(x - 2) \;\longrightarrow\; y = \frac{x_0}{3 - x_0^2}(x - 2) + x_0.$$

## Quesito 5

Anna e Berto si trovano sulla stessa riva di un fiume, a 50 m di distanza l'una dall'altro. Anna guarda un albero sulla riva opposta ruotando di $45°$ rispetto alla perpendicolare alla riva; Berto ruota di $60°$.

Indichiamo con $L$ la larghezza del fiume. Le informazioni assegnate **non sono sufficienti** per determinare univocamente $L$, perché non è specificato se Anna e Berto si trovano uno alla sinistra e l'altro alla destra dell'albero, oppure entrambi dalla stessa parte.

**Primo caso** (l'albero è "tra" le proiezioni di Anna e Berto sulla riva opposta):

$$L\tan 45° + L\tan 60° = 50 \;\longrightarrow\; L(1 + \sqrt{3}) = 50 \;\longrightarrow\; L = \frac{50}{1+\sqrt{3}} = 25(\sqrt{3}-1) \approx 18{,}3 \text{ m.}$$

**Secondo caso** (l'albero è fuori):

$$L\tan 60° - L\tan 45° = 50 \;\longrightarrow\; L(\sqrt{3}-1) = 50 \;\longrightarrow\; L = \frac{50}{\sqrt{3}-1} = 25(\sqrt{3}+1) \approx 68{,}3 \text{ m.}$$

Le informazioni assegnate producono due risultati diversi, quindi **non sono sufficienti** per determinare in modo univoco la larghezza del fiume.

## Quesito 6

Un contenitore di capacità $V$ ha la forma di un cilindro sormontato alle basi da due coni equilateri (con le basi coincidenti con quelle del cilindro). Indichiamo con $r$ il raggio di base e con $h$ l'altezza del cilindro.

*(grafico — vedi PDF p.144)*

Poiché i coni sono equilateri, ciascun cono ha base di raggio $r$ e altezza $h_c = r\sqrt{3}$ (l'altezza del cono equilatero con base $r$ è $r\sqrt{3}$). Il volume del contenitore è:

$$V = \pi r^2 h + 2 \cdot \frac{1}{3}\pi r^2 (r\sqrt{3}) = \pi r^2 h + \frac{2\sqrt{3}}{3}\pi r^3.$$

Da questa ricaviamo $h = \dfrac{V}{\pi r^2} - \dfrac{2\sqrt{3}}{3}r$.

La superficie laterale del cilindro è $2\pi r h$; la superficie laterale di ciascun cono equilatero (con apotema $= 2r$) è $\pi r \cdot 2r = 2\pi r^2$. La superficie totale è quindi:

$$S(r) = 2\pi r h + 2 \cdot 2\pi r^2 = 2\pi r h + 4\pi r^2.$$

Sostituendo $h$:

$$S(r) = 2\pi r \left(\frac{V}{\pi r^2} - \frac{2\sqrt{3}}{3}r\right) + 4\pi r^2 = \frac{2V}{r} - \frac{4\sqrt{3}}{3}\pi r^2 + 4\pi r^2 = \frac{2V}{r} + \pi r^2\!\left(4 - \frac{4\sqrt{3}}{3}\right).$$

Derivando e ponendo $S'(r) = 0$:

$$S'(r) = -\frac{2V}{r^2} + 2\pi r\!\left(4 - \frac{4\sqrt{3}}{3}\right) = 0 \;\longrightarrow\; r^3 = \frac{V}{\pi\!\left(4 - \dfrac{4\sqrt{3}}{3}\right)} = \frac{3V}{4\pi(3-\sqrt{3})}.$$

Il valore ottimale del raggio che minimizza la superficie totale è:

$$r = \sqrt[3]{\frac{3V}{4\pi(3-\sqrt{3})}}.$$

## Quesito 7

In un riferimento cartesiano $Oxyz$ sono assegnate una sfera di centro $O$ e raggio 5 (equazione $x^2 + y^2 + z^2 = 25$) e la retta $r$:

$$\begin{cases} x = -4t + 4 \\ y = -4 + 7t \\ z = -3 + 3t \end{cases}, \quad t \in \mathbb{R}.$$

Sostituiamo nell'equazione della sfera:

$$(-4t+4)^2 + (-4+7t)^2 + (-3+3t)^2 = 25$$

$$16t^2 - 32t + 16 + 49t^2 - 56t + 16 + 9t^2 - 18t + 9 = 25$$

$$74t^2 - 106t + 41 = 25 \;\longrightarrow\; 74t^2 - 106t + 16 = 0 \;\longrightarrow\; 37t^2 - 53t + 8 = 0.$$

Le soluzioni sono:

$$t_{1,2} = \frac{53 \pm \sqrt{53^2 - 4\cdot37\cdot8}}{2\cdot37} = \frac{53 \pm \sqrt{2809 - 1184}}{74} = \frac{53 \pm \sqrt{1625}}{74}.$$

I due punti $A$ e $B$ corrispondono ai due valori $t_1$ e $t_2$. Il vettore direttore della retta è $\mathbf{v} = (-4;\,7;\,-3)$ e $|\mathbf{v}|^2 = 16 + 49 + 9 = 74$.

*(grafico — vedi PDF p.145)*

La lunghezza del segmento $AB$:

$$AB = |t_1 - t_2| \cdot |\mathbf{v}| = \frac{\sqrt{1625}}{37} \cdot \sqrt{74} = \sqrt{74}.$$

L'angolo acuto $\alpha$ che la retta $r$ forma con il piano $xy$ si determina con:

$$\sin\alpha = \frac{|v_z|}{|\mathbf{v}|} = \frac{3}{\sqrt{74}}, \quad \alpha = \arcsin\frac{3}{\sqrt{74}} \approx 20°24'32''.$$

## Quesito 8

$f(x)$ è una funzione continua nell'intervallo $[-2;\,4]$, derivabile nell'intervallo aperto $(-2;\,4)$ e tale che:

a) $f(2) = 1$;
b) $-2 \le f'(x) \le 3$ per ogni $x \in (-2;\,4)$.

Stabiliamo se è possibile che sia $f(4) = 8$.

In base al teorema di Lagrange applicato sull'intervallo $[2;\,4]$, deve esistere almeno un punto $c \in (2;\,4)$ tale che:

$$f'(c) = \frac{f(4)-f(2)}{4-2} = \frac{f(4)-1}{2}.$$

Affinché $f(4) = 8$, occorrerebbe che $f'(c) = \dfrac{8-1}{2} = \dfrac{7}{2} = 3{,}5$.

Poiché dalla condizione b) si ha $f'(x) \le 3$ per ogni $x \in (-2;\,4)$, in particolare $f'(c) \le 3 < 3{,}5$: è una **contraddizione**. Pertanto **non è possibile** che $f(4) = 8$.

Dalla condizione b) si ricava:

$$2 \cdot (-2) \le f(4) - f(2) \le 2 \cdot 3 \;\longrightarrow\; -4 \le f(4) - 1 \le 6 \;\longrightarrow\; -3 \le f(4) \le 7.$$

Dunque $f(4) = 8$ è impossibile.

## Quesito 9

Una pallina lasciata cadere da un'altezza di 1 m rimbalza verticalmente. Nell'urto (anelastico) la pallina risale fino a $\dfrac{9}{10}$ dell'altezza da cui era caduta.

Indichiamo con $D_n$ la distanza percorsa durante l'$n$-esimo rimbalzo:

$$D_n = \left(\frac{9}{10}\right)^n \cdot 2, \quad n \ge 1.$$

La distanza complessivamente percorsa dalla pallina (inclusa la caduta iniziale $D_0 = 1$) è:

$$D = \sum_{n=0}^{+\infty} D_n = 1 + \sum_{n=1}^{+\infty} \left(\frac{9}{10}\right)^n \cdot 2 = 1 + 2 \cdot \sum_{n=1}^{+\infty}\left(\frac{9}{10}\right)^n.$$

Poiché una serie geometrica $\displaystyle\sum_{n=0}^{+\infty} q^n$ con $|q| < 1$ converge a $\dfrac{1}{1-q}$:

$$\sum_{n=1}^{+\infty}\left(\frac{9}{10}\right)^n = \frac{1}{1-\frac{9}{10}} - 1 = 10 - 1 = 9.$$

Quindi:

$$D = 1 + 2 \cdot 9 = 19 \text{ m.}$$

La distanza complessivamente percorsa dalla pallina è **finita** e ammonta a **19 m**.

## Quesito 10

La funzione $f(x) = 3x - 4\ln x$ è definita in $]0;\,+\infty[$ ed è continua. Calcoliamo i limiti agli estremi del dominio:

$$\lim_{x \to 0^+}(3x - 4\ln x) = +\infty,$$

quindi $x = 0$ è un **asintoto verticale**.

$$\lim_{x \to +\infty}(3x - 4\ln x) = \lim_{x \to +\infty} x\!\left(3 - 4\frac{\ln x}{x}\right) = +\infty,$$

quindi la funzione non presenta asintoti orizzontali. Studiamo se la funzione ammette asintoto obliquo:

$$m = \lim_{x \to +\infty}\frac{f(x)}{x} = \lim_{x \to +\infty}\left(3 - 4\frac{\ln x}{x}\right) = 3,$$

$$q = \lim_{x \to +\infty}\bigl[f(x) - mx\bigr] = \lim_{x \to +\infty}(3x - 4\ln x - 3x) = \lim_{x \to +\infty}(-4\ln x) = -\infty.$$

Pertanto la funzione **non presenta asintoto obliquo**.

La funzione ha come unico asintoto quello verticale $x = 0$.
