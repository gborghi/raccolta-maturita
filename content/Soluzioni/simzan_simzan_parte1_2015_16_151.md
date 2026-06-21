---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2015_16_151
pdf: SimZan_parte1.pdf
source: vision
title: Soluzioni — simzan_simzan_parte1_2015_16_151
---

# Soluzioni — simzan_simzan_parte1_2015_16_151

## Problema 1

**Problema 1 – Conversazioni telefoniche**

### Punto a)

La funzione $f(t)$ è continua e derivabile per ogni $t \in \mathbb{R}_0^+$, perché prodotto di due funzioni continue e derivabili in $\mathbb{R}_0^+$. Inoltre $f(t)$ è positiva per ogni $t > 0$ ed è nulla per $t = 0$. Vale il limite:

$$\lim_{t \to +\infty} f(t) = \lim_{t \to +\infty} \frac{At}{e^{Bt}} = 0,$$

in quanto la funzione esponenziale è un infinito di ordine superiore di qualunque funzione polinomiale.

In alternativa potevamo notare che $\lim_{t \to +\infty} \frac{At}{e^{Bt}}$ è una forma indeterminata del tipo $\frac{+\infty}{+\infty}$ e che sono soddisfatte le ipotesi del teorema di De l'Hospital. Passando quindi al limite del rapporto delle derivate:

$$\lim_{t \to +\infty} \frac{At}{e^{Bt}} = \lim_{t \to +\infty} \frac{A}{Be^{Bt}} = 0.$$

Consideriamo la derivata prima di $f(t)$ e studiamo il suo segno:

$$f'(t) = Ae^{-Bt}(1 - Bt),$$

$$f'(t) = 0 \;\Rightarrow\; t = \frac{1}{B},$$

$$f'(t) > 0 \;\Leftrightarrow\; 0 < t < \frac{1}{B}, \qquad f'(t) < 0 \;\Leftrightarrow\; t > \frac{1}{B}.$$

La funzione $f(t)$ è dunque crescente in $\left[0, \frac{1}{B}\right[$, decrescente in $\left[\frac{1}{B}, +\infty\right[$ e ammette un solo punto di massimo per $t = \frac{1}{B}$. Il suo andamento è quindi simile a quello del poligono delle frequenze.

### Punto b)

La funzione $f(t)$ deve assumere massimo per $t = 1{,}5$, come il poligono delle frequenze, quindi:

$$\frac{1}{B} = \frac{3}{2} \;\Rightarrow\; B = \frac{2}{3} \;\Rightarrow\; f(t) = Ate^{-\frac{2}{3}t}.$$

Imponiamo ora la condizione sull'area del sottografico di $f(t)$:

$$\lim_{k \to +\infty} \int_0^k f(t)\,dt = S = \lim_{k \to +\infty} \int_0^k Ate^{-\frac{2}{3}t}\,dt = 153.$$

Calcoliamo per parti l'integrale:

$$\int_0^k Ate^{-\frac{2}{3}t}\,dt = A\int_0^k te^{-\frac{2}{3}t}\,dt = A\left\{\left[-\frac{3}{2}te^{-\frac{2}{3}t}\right]_0^k + \frac{3}{2}\int_0^k e^{-\frac{2}{3}t}\,dt\right\}$$

$$= \frac{3}{2}A\left[-te^{-\frac{2}{3}t} - \frac{3}{2}e^{-\frac{2}{3}t}\right]_0^k = \frac{3}{2}A\left(-ke^{-\frac{2}{3}k} - \frac{3}{2}e^{-\frac{2}{3}k} + \frac{3}{2}\right).$$

Deve essere:

$$\lim_{k \to +\infty} \frac{3}{2}A\left(-ke^{-\frac{2}{3}k} - \frac{3}{2}e^{-\frac{2}{3}k} + \frac{3}{2}\right) = 153.$$

Al primo membro otteniamo $\frac{9}{4}A$, quindi:

$$\frac{9}{4}A = 153 \;\Rightarrow\; A = 68.$$

### Punto c)

Dobbiamo studiare la funzione:

$$f(t) = 68te^{-\frac{2}{3}t}.$$

La funzione $f(t)$ nell'intervallo $[0; +\infty[$ è continua, derivabile, nulla solo per $t = 0$, positiva altrove, con asintoto orizzontale l'asse delle ascisse.

La derivata prima

$$f'(t) = \frac{68}{3}e^{-\frac{2}{3}t}(3 - 2t)$$

si annulla solamente nel punto $t = \frac{3}{2}$, dove la funzione assume il suo valore massimo:

$$f\!\left(\frac{3}{2}\right) = \frac{204}{2e} \simeq 37{,}52.$$

Calcoliamo la derivata seconda:

$$f''(t) = \frac{68}{3}\left[-\frac{2}{3}e^{-\frac{2}{3}t}(3-2t) - 2e^{-\frac{2}{3}t}\right] = -\frac{136}{3}e^{-\frac{2}{3}t}\!\left[1 - \frac{2}{3}t + 1\right] = \frac{272}{9}e^{-\frac{2}{3}t}(t-3).$$

La derivata seconda si annulla per $t = 3$, dove il grafico presenta un punto di flesso obliquo.

Il confronto tra il grafico del modello funzionale e il poligono delle frequenze mostra un discreto livello di coerenza dell'andamento qualitativo, sebbene la condizione di equivalenza delle aree sottese sia andata a discapito della fedeltà di riproduzione del massimo relativo, che risulta molto sottostimato.

*(grafico — vedi PDF p.153)*

### Punto d)

Calcoliamo l'integrale $\int_0^4 68te^{-\frac{2}{3}t}\,dt$ utilizzando l'espressione ottenuta al punto b).

$$\int_0^4 68te^{-\frac{2}{3}t}\,dt = 102\left[-te^{-\frac{2}{3}t} - \frac{3}{2}e^{-\frac{2}{3}t}\right]_0^4 = 102\!\left(-4e^{-\frac{8}{3}} - \frac{3}{2}e^{-\frac{8}{3}} + \frac{3}{2}\right) = 51\!\left(3 - 11e^{-\frac{8}{3}}\right) \approx 114.$$

Questo valore rappresenta il numero di studenti che hanno dichiarato di aver fatto al più 4 ore di conversazione telefonica nella settimana, numero valutato attraverso la funzione modello $f(t)$.

### Punto e)

Il rapporto

$$p = \frac{\int_0^4 f(t)\,dt}{S} = \frac{114}{153} \approx 0{,}75 \;\Rightarrow\; 75\%$$

rappresenta la percentuale di studenti, sul totale di studenti intervistati, che hanno avuto conversazioni telefoniche per al più 4 ore nella settimana. La percentuale 75% rappresenta anche la probabilità, secondo il modello funzionale $f(t)$ del problema, che uno studente scelto a caso nel gruppo abbia dichiarato un tempo totale di conversazione minore o uguale a 4 ore settimanali.

### Punto f)

Secondo i dati dell'istogramma, gli studenti che hanno dichiarato una durata delle conversazioni maggiore di 2 ore e minore o uguale a 3 ore sono 32 (altezza del terzo rettangolo), quindi la percentuale sul totale degli studenti intervistati è:

$$\frac{32}{153} \approx 0{,}21 \;\Rightarrow\; 21\%.$$

Secondo la funzione modello, gli studenti che hanno telefonato per una durata compresa fra le 2 e le 3 ore sono:

$$\int_2^3 68te^{-\frac{2}{3}t}\,dt = 102\left[-te^{-\frac{2}{3}t} - \frac{3}{2}e^{-\frac{2}{3}t}\right]_2^3 = 102\!\left(-3e^{-2} - \frac{3}{2}e^{-2} + 2e^{-\frac{4}{3}} + \frac{3}{2}e^{-\frac{4}{3}}\right) = 102\!\left(\frac{7}{2}e^{-\frac{4}{3}} - \frac{9}{2}e^{-2}\right) \approx 32.$$

La corrispondente percentuale è sempre del 21% circa.

---

## Problema 2

**Problema 2 – Previsioni meteorologiche**

### Punto a)

Calcoliamo, basandoci sui dati del primo grafico del problema, la distanza $\overline{AH}$, che corrisponde all'ascissa di $H$ nel secondo grafico. Nel primo grafico i punti $A$ e $H$ hanno coordinate $A(0;18)$ e $H(16;6)$, quindi:

$$\overline{AH} = \sqrt{(16-0)^2 + (6-18)^2} = \sqrt{256 + 144} = \sqrt{400} = 20.$$

Il punto $H$ dista 20 km dal punto $A$ e la pressione atmosferica in $H$ vale 120 kPa. Nel secondo grafico, il punto corrispondente ad $H$ ha dunque coordinate $H'(20;120)$ ed è un massimo relativo per la funzione $p(x)$.

### Punto b)

La funzione $p(x)$ disegnata nel secondo grafico del problema presenta un minimo relativo per $x = 5$ e un massimo relativo per $x = 20$. Le due funzioni proposte sono definite e derivabili in tutto $\mathbb{R}$; condizione necessaria affinché ammettano minimo e massimo relativo in $x = 5$ e in $x = 20$ è che la derivata prima si annulli in quei punti.

Calcoliamo la derivata della prima funzione:

$$y_1'(x) = be^{500-x}; \quad y_1'(x) = 0 \;\Leftrightarrow\; x \in \emptyset \subset (0; 30).$$

La prima funzione non può dunque rappresentare la legge $p(x)$.

Calcoliamo la derivata della seconda funzione:

$$y_2'(x) = 300 \cdot \frac{2(2x+a) \cdot 225 - (2x+a)^2 \cdot 600}{\left[(2x+a)^2 + 225\right]^2} = 600 \cdot \frac{225 - (2x+a)^2}{\left[(2x+a)^2 + 225\right]^2}.$$

Imponiamo che $y_2'(x)$ si annulli per $x = 5$ e $x = 20$:

$$\begin{cases} y_2'(5) = 0 \;\Rightarrow\; 225 - (10+a)^2 = 0 \\ y_2'(20) = 0 \;\Rightarrow\; 225 - (40+a)^2 = 0 \end{cases}
\;\Rightarrow\;
\begin{cases} a = 5 \text{ o } a = -25 \\ a = -25 \text{ o } a = -55 \end{cases}
\;\Rightarrow\; a = -25.$$

Il segno di $y_2'(x)$ è negativo e $y_2(x)$ è decrescente per $x < 5$ e $x > 20$; il segno di $y_2'(x)$ è positivo e $y_2(x)$ è crescente per $5 < x < 20$. È quindi $y_2(x)$ che rappresenta l'andamento della funzione $p(x)$ del secondo grafico.

Determiniamo il valore di $b$ imponendo $y_2(5) = 100$ (minimo relativo indicato nel grafico del problema):

$$y_2(5) = b + \frac{300(2 \cdot 5 - 25)}{(2 \cdot 5 - 25)^2 + 225} = b + \frac{300 \cdot (-15)}{225 + 225} = b - 100 = 100 \;\Rightarrow\; b = 110.$$

Verifichiamo che tale valore è compatibile anche con il massimo in $H$:

$$y_2(20) = 110 + \frac{300(2 \cdot 20 - 25)}{(2 \cdot 20 - 25)^2 + 225} = 110 + \frac{300 \cdot 15}{225 + 225} = 110 + 10 = 120 \quad \text{VERO.}$$

Possiamo concludere che il grafico di $p(x)$ è descritto dalla funzione:

$$p(x) = \frac{300(2x - 25)}{(2x - 25)^2 + 225} + 110.$$

Valutiamo $p(x)$ nei punti corrispondenti ad $A$ e a $B$:

$$p(x_A) = p(0) = \frac{300 \cdot (-25)}{625 + 225} + 110 \approx 101{,}2 \;\text{kPa};$$

$$p(x_B) = p(30) = \frac{300 \cdot 35}{1225 + 225} + 110 \approx 117{,}2 \;\text{kPa}.$$

### Punto c)

Lo studio della funzione $p(x)$ ottenuta al punto precedente è in parte già svolto. La funzione è definita in $\mathbb{R}$, ovunque continua e derivabile. Presenta un solo punto di minimo relativo di coordinate $(5;100)$ e un solo punto di massimo relativo di coordinate $(20;120)$, poiché la derivata prima si annulla in soli due punti.

Calcoliamo i limiti:

$$\lim_{x \to \pm\infty} p(x) = \lim_{x \to \pm\infty} \left[\frac{300(2x-25)}{(2x-25)^2 + 225} + 110\right] = 0 + 110 = 110.$$

La funzione ammette asintoto orizzontale $y = 110$ e risulta quindi sempre positiva.

Per quanto riguarda i punti di flesso, consideriamo che:

- la funzione volge la concavità verso l'alto in $x = 5$, dove ammette minimo relativo, mentre volge la concavità verso il basso per $x \to -\infty$, dovendo avvicinarsi all'asintoto orizzontale $y = 110$, quindi ammette un punto di flesso per $x < 5$;
- la funzione volge la concavità verso l'alto in $x = 5$ e verso il basso in $x = 20$, dove ammette massimo relativo, quindi presenta un punto di flesso per $5 < x < 20$;
- la funzione volge la concavità verso il basso per $x = 20$, mentre volge la concavità verso l'alto per $x \to +\infty$, dovendo avvicinarsi all'asintoto orizzontale $y = 110$, quindi ammette un punto di flesso per $x > 20$.

La funzione $p(x)$ presenta dunque tre punti di flesso.

*(grafico — vedi PDF p.156)*

### Punto d)

La pressione media $\bar{p}$ lungo il tratto $AB$ si può calcolare come valor medio integrale:

$$\bar{p} = \frac{1}{30}\int_0^{30} p(x)\,dx = \frac{1}{30}\int_0^{30}\!\left[\frac{300(2x-25)}{(2x-25)^2+225} + 110\right]dx$$

$$= \frac{1}{30}\left[75\ln\!\left((2x-25)^2+225\right) + 110x\right]_0^{30}$$

$$= \frac{1}{30}\left[75\ln(1450) + 3300 - 75\ln(850)\right] = \frac{5}{2}\ln\!\left(\frac{29}{17}\right) + 110 \approx 111{,}34 \;\text{kPa.}$$

Lungo la diagonale $AB$, la pressione atmosferica media vale 111,34 kPa.

### Punto e)

Nel riferimento $Oxyz$ indicato, ai punti $L$ e $H$ corrispondono i punti di coordinate $L'(4;15;100)$ e $H'(16;6;120)$.

Le equazioni parametriche della retta $r$ passante per $L$ e $H$ sono:

$$\begin{cases} x = 4 + 12k \\ y = 15 - 9k \\ z = 100 + 20k \end{cases}, \quad k \in \mathbb{R}.$$

Cerchiamo le equazioni cartesiane. Dal sistema parametrico si ricava:

$$k = \frac{x-4}{12} = \frac{15-y}{9} = \frac{z-100}{20}.$$

Dalle prime due frazioni: $9(x-4) = 12(15-y) \Rightarrow 9x - 36 = 180 - 12y \Rightarrow 3x + 4y - 72 = 0$.

Dalla prima e terza: $20(x-4) = 12(z-100) \Rightarrow 20x - 80 = 12z - 1200 \Rightarrow 5x - 3z + 280 = 0$.

Le equazioni cartesiane della retta $r$ sono:

$$\begin{cases} 3x + 4y - 72 = 0 \\ 5x - 3z + 280 = 0 \end{cases}.$$

---

## Questionario

### Quesito 1

La funzione $y(x) = \ln x - x$ esiste per $x > 0$. Calcoliamo la derivata prima e seconda di $y(x)$:

$$y'(x) = \frac{1}{x} - 1; \quad y''(x) = -\frac{1}{x^2}.$$

Sostituiamo nell'equazione differenziale data $xy'' + ay' = a - 1$:

$$x\!\left(-\frac{1}{x^2}\right) + a\!\left(\frac{1}{x}-1\right) = a - 1 \;\Rightarrow\; -\frac{1}{x} + \frac{a}{x} - a = a - 1 \;\Rightarrow\; \frac{a-1}{x} - 2a + 1 = 0.$$

L'equazione è verificata per ogni valore di $x > 0$ se e solo se $a = 1$.

### Quesito 2

Determiniamo il volume d'acqua della vasca (espresso in m³) dopo $t$ ore dall'apertura simultanea di rubinetto e scarico:

$$V(t) = 2 + 10\!\left(t - te^{-t} - \frac{1}{10}\right) = \frac{1}{2}t - te^{-t}.$$

Ricaviamo l'altezza dell'acqua (in metri) rispetto al fondo della vasca cubica di base 4 m²:

$$h(t) = \frac{V(t)}{4} = \frac{1}{2} - \frac{1}{4}te^{-t}.$$

Determiniamo il valore massimo di $h(t)$. Deriviamo $h(t)$ rispetto al tempo e cerchiamo gli eventuali zeri:

$$h'(t) = \frac{1}{4}e^{-t}(1 - t); \quad h'(t) = 0 \;\Rightarrow\; t = 1.$$

Poiché $h'(t) > 0$ per $0 < t < 1$ e $h'(t) < 0$ per $t > 1$, l'istante $t = 1$ h rappresenta il momento in cui si ha il massimo livello dell'acqua nella vasca, pari a:

$$h(1) = \frac{1}{2} - \frac{1}{4e} \approx 0{,}41 \;\text{m}.$$

Al crescere del tempo risulta:

$$\lim_{t \to +\infty} h(t) = \frac{1}{2} - \frac{1}{4}\lim_{t \to +\infty} te^{-t} = \frac{1}{2} - 0 = \frac{1}{2}.$$

Nell'ultimo passaggio è $\lim_{t \to +\infty} te^{-t} = 0$, poiché $y = e^t$ è un infinito di ordine superiore rispetto a $y = t$. La vasca quindi non si svuoterà e l'acqua tenderà a raggiungere il livello di 0,5 m.

### Quesito 3

Ricaviamo le intersezioni del piano $\alpha: 2\sqrt{2}\,x + 3y + 2\sqrt{2}\,z = 4$ con gli assi coordinati:

- per $y = z = 0$: $2\sqrt{2}\,x = 4 \Rightarrow x = \sqrt{2}$, quindi $A(\sqrt{2};\,0;\,0)$;
- per $x = z = 0$: $3y = 4 \Rightarrow y = \frac{4}{3}$, quindi $B\!\left(0;\,\frac{4}{3};\,0\right)$;
- per $x = y = 0$: $2\sqrt{2}\,z = 4 \Rightarrow z = \sqrt{2}$, quindi $C(0;\,0;\,\sqrt{2})$.

Il triangolo $ABC$ è isoscele e i suoi lati misurano:

$$\overline{AB} = \sqrt{(\sqrt{2})^2 + \left(\frac{4}{3}\right)^2} = \sqrt{2 + \frac{16}{9}} = \frac{\sqrt{34}}{3}; \quad \overline{BC} = \frac{\sqrt{34}}{3}; \quad \overline{AC} = \sqrt{2 + 2} = 2.$$

L'altezza del triangolo $ABC$ relativa alla base $\overline{AC}$, in base al teorema di Pitagora, misura:

$$h = \sqrt{\overline{AB}^2 - 1^2} = \sqrt{\frac{34}{9} - 1} = \sqrt{\frac{25}{9}} = \frac{5}{3}.$$

L'area di $ABC$ è dunque:

$$A_{ABC} = \frac{1}{2} \cdot 2 \cdot \frac{5}{3} = \frac{5}{3}.$$

La distanza $\overline{OH}$ dell'origine $O$ dal piano $\alpha$ vale:

$$\overline{OH} = \frac{4}{\sqrt{(2\sqrt{2})^2 + 3^2 + (2\sqrt{2})^2}} = \frac{4}{\sqrt{8 + 9 + 8}} = \frac{4}{\sqrt{25}} = \frac{4}{5}.$$

Possiamo ora calcolare il volume $V_{ABCO}$ della piramide:

$$V_{ABCO} = \frac{1}{3} \cdot A_{ABC} \cdot \overline{OH} = \frac{1}{3} \cdot \frac{5}{3} \cdot \frac{4}{5} = \frac{4}{9}.$$

### Quesito 4

Osserviamo che il limite

$$\lim_{x \to 0} \frac{\int_0^{x^2} f(t)\,dt}{x^2}$$

si presenta nella forma indeterminata $\frac{0}{0}$, in quanto la funzione integrale $F(x) = \int_0^{x^2} f(t)\,dt$ è continua e derivabile in $\mathbb{R}$ e si ha $\lim_{x \to 0} F(x) = 0$.

Verifichiamo se sono soddisfatte le ipotesi del teorema di De l'Hospital:

- entrambe le funzioni $F(x)$ e $g(x) = x^2$ sono continue in $x_0 = 0$, con $F(0) = g(0) = 0$;
- $F(x)$ e $g(x)$ sono derivabili in un intorno $I$ di $x_0 = 0$;
- $g'(x) = 2x \neq 0$ in $I \setminus \{0\}$.

Possiamo quindi valutare l'esistenza del limite del rapporto delle derivate. Per la regola di derivazione della funzione integrale con limite variabile:

$$\lim_{x \to 0} \frac{\int_0^{x^2} f(t)\,dt}{x^2} = \lim_{x \to 0} \frac{f(x^2) \cdot 2x}{2x} = \lim_{x \to 0} f(x^2) = f(0) = \frac{1}{2}.$$

Possiamo concludere che:

$$\lim_{x \to 0} \frac{\int_0^{x^2} f(t)\,dt}{x^2} = \frac{1}{2}.$$

### Quesito 5

Tracciamo il grafico della funzione $f(x) = \frac{4}{x^2+1}$: ha dominio $\mathbb{R}$, è pari e sempre positiva, ha asintoto $y = 0$ e massimo $A(0;4)$.

*(grafico — vedi PDF p.159)*

Scriviamo l'equazione della retta $t$ tangente al grafico di $f(x)$ in un suo generico punto $P\!\left(x_0; f(x_0)\right)$. La funzione derivata è:

$$f'(x) = -\frac{8x}{(x^2+1)^2},$$

da cui:

$$t\colon y = f(x_0) + f'(x_0)(x - x_0) = \frac{4}{x_0^2+1} - \frac{8x_0}{(x_0^2+1)^2}(x - x_0) = \frac{12x_0^2+4}{(x_0^2+1)^2} - \frac{8x_0}{(x_0^2+1)^2}\,x.$$

Ora imponiamo l'appartenenza del punto $A(0;4)$ alla retta $t$:

$$4 = \frac{12x_0^2 + 4}{(x_0^2+1)^2} \;\Rightarrow\; 4(x_0^2+1)^2 = 12x_0^2 + 4 \;\Rightarrow\; x_0^4 + 2x_0^2 + 1 = 3x_0^2 + 1$$

$$\Rightarrow\; x_0^4 - x_0^2 = 0 \;\Rightarrow\; x_0^2(x_0^2-1) = 0 \;\Rightarrow\; x_0 = 0, \; x_0 = 1, \; x_0 = -1.$$

Individuiamo pertanto le seguenti tre rette tangenti al grafico di $f(x)$ passanti per $A(0;4)$:

$$t_1\colon y = 4; \quad t_2\colon y = -2x + 4; \quad t_3\colon y = 2x + 4.$$

### Quesito 6

Il grafico di $f(x) = a\sqrt{x^2+9}$ è un arco di iperbole con centro di simmetria nell'origine, i fuochi sull'asse $y$ e vertici reali di coordinate $A(0;3a)$ e $A'(0;-3a)$.

Il trapezoide $OABC$ individuato dal sottografico di $f(x)$ compreso tra le ascisse $x = 0$ e $x = 4$ ha vertici di coordinate $O(0;0)$, $A(0;3a)$, $B(4;5a)$, $C(4;0)$.

Consideriamo il solido ottenuto dalla rotazione di 360° del trapezoide attorno all'asse $x$; il suo volume $V_1$ è dato dal seguente integrale definito:

$$V_1 = \pi\int_0^4 \!\left(a\sqrt{x^2+9}\right)^2 dx = \pi a^2\int_0^4 (x^2+9)\,dx = \pi a^2\left[\frac{x^3}{3} + 9x\right]_0^4 = \pi a^2\!\left(\frac{64}{3} + 36\right) = \frac{172}{3}\pi a^2.$$

Per ricavare il volume $V_2$ del solido ottenuto dalla rotazione di 360° del trapezoide attorno all'asse $y$, sottraiamo dal volume del cilindro ottenuto dalla rotazione intorno all'asse $y$ del rettangolo $OCBQ$ (con $Q(0;5a)$) il volume $V_3$ del solido ricavato dalla rotazione attorno all'asse $y$ del sottografico della funzione inversa di $y = f(x)$ nell'intervallo $3a \le y \le 5a$.

Dalla $y = a\sqrt{x^2+9}$ si ricava $x^2 = \frac{y^2 - 9a^2}{a^2}$:

$$V_3 = \pi\int_{3a}^{5a} \frac{y^2 - 9a^2}{a^2}\,dy = \frac{\pi}{a^2}\left[\frac{y^3}{3} - 9a^2 y\right]_{3a}^{5a} = \frac{\pi}{a^2}\!\left(\frac{125a^3 - 27a^3}{3} - 9a^2 \cdot 2a\right) = \frac{\pi}{a^2}\!\left(\frac{98a^3}{3} - 18a^3\right) = \frac{44\pi a}{3}.$$

Il volume del cilindro con raggio $4$ e altezza $5a$ è $\pi \cdot 16 \cdot 5a = 80\pi a$, quindi:

$$V_2 = 80\pi a - \frac{44\pi a}{3} = \frac{196\pi a}{3}.$$

Imponiamo che i due volumi siano uguali:

$$V_1 = V_2 \;\Rightarrow\; \frac{172}{3}\pi a^2 = \frac{196}{3}\pi a \;\Rightarrow\; 172a = 196 \;\Rightarrow\; a = \frac{49}{43}.$$

### Quesito 7

**a)** Riscriviamo la funzione $f(x) = x^2 + x|x|$ sviluppando il valore assoluto:

$$f(x) = \begin{cases} x^2 - x^2 = 0 & \\ \end{cases}$$

In base al PDF, la funzione si scrive come:

$$f(x) = \begin{cases} x^2 - x & \text{se } x < 0 \\ x^2 + x & \text{se } x \ge 0 \end{cases}.$$

Poiché $\lim_{x \to 0^-}(x^2 - x) = 0 = \lim_{x \to 0^+}(x^2 + x) = f(0)$, la funzione $f(x)$ è continua in $[-1;1]$.

Riguardo alla derivabilità, poiché il rapporto incrementale in $x = 0$ ammette limiti uguali da sinistra e da destra (entrambi pari a $1$), la funzione $f(x)$ risulta derivabile anche in $x = 0$, quindi $f(x)$ è derivabile in $[-1;1]$.

Infine, $f(-1) = f(1) = 0$.

La funzione soddisfa le ipotesi del teorema di Rolle nell'intervallo $[-1;1]$, e ne verifica la tesi nei punti di ascissa $x = -\frac{1}{2}$ e $x = \frac{1}{2}$, in cui $f'(x) = 0$.

**b)** Per cercare i punti di flesso, calcoliamo $f''(x)$:

$$f''(x) = \begin{cases} -2 & \text{se } x < 0 \\ 2 & \text{se } x > 0 \end{cases}.$$

La derivata seconda non si annulla mai in $(-1;0) \cup (0;1)$. Osserviamo poi che non esiste la derivata seconda in $x = 0$, poiché:

$$\lim_{x \to 0^-} f''(x) = -2 \quad \text{mentre} \quad \lim_{x \to 0^+} f''(x) = 2.$$

Tuttavia $f''(x) > 0$ in un intorno destro di $x = 0$ e $f''(x) < 0$ in un intorno sinistro di $x = 0$, con $f(x)$ continua in $x = 0$ e dotata di retta tangente in $x = 0$. Possiamo allora dire che in $x = 0$ si ha un cambio di concavità del grafico, con tangente inflessionale di equazione $y = x$: il punto $(0;0)$ rappresenta un punto di flesso.

*(grafico — vedi PDF p.161)*

### Quesito 8

Osserviamo che la funzione $y_1(x)$ è sempre positiva. Se essa corrispondesse a $f'(x)$, allora $f(x)$ sarebbe strettamente crescente e né $y_2(x)$ né $y_3(x)$ lo sono. Quindi $y_1(x) \ne f'(x)$.

Supponiamo $y_1(x) = f(x)$. La funzione $f(x)$ risulterebbe strettamente crescente per $x < 0$ e strettamente decrescente per $x > 0$. La derivata prima $f'(x)$ sarebbe dunque positiva per $x < 0$ e negativa per $x > 0$: questo è coerente con il grafico di $y_3(x)$, quindi sarebbe $y_3(x) = f'(x)$.

Valutiamo se può essere $y_2(x) = f''(x)$. La funzione $y_1(x)$ presenta due flessi di ascisse $x = -a$ (con $1 > a > 0$) e $x = b$ (con $0 < b < 1$); la concavità di $y_1(x)$ è verso l'alto per $x < -a$ e $x > b$ e verso il basso per $-a < x < b$. La sua derivata seconda è quindi positiva per $x < -a$ e $x > b$ e negativa per $-a < x < b$: questo è coerente con il grafico di $y_2(x)$.

Possiamo dunque stabilire le seguenti associazioni:

$$y_1(x) = f(x), \quad y_2(x) = f''(x), \quad y_3(x) = f'(x).$$

La funzione assegnata $y(x) = \frac{2x}{x^2+1}$ è dispari e può corrispondere solamente al grafico di $y_3(x)$, quindi:

$$y_3(x) = f'(x) = \frac{2x}{x^2+1}.$$

Calcoliamo la derivata di $y_3$ per trovare $f''(x)$:

$$y_3'(x) = f''(x) = \frac{2(x^2+1) - 2x \cdot 2x}{(x^2+1)^2} = \frac{2(1-x^2)}{(x^2+1)^2},$$

che coincide con $y_2(x)$: positivo per $|x| < 1$, negativo per $|x| > 1$, in accordo con il grafico di $y_2$.

Determiniamo la funzione $f(x)$:

$$f(x) = \int \frac{2x}{x^2+1}\,dx = \ln(x^2+1) + c.$$

Poiché $f(0) = 1$, risulta $\ln(1) + c = 1 \Rightarrow c = 1$, e quindi:

$$y_1(x) = f(x) = \ln(x^2+1) + 1.$$

### Quesito 9

Applichiamo lo schema delle prove ripetute. La probabilità di rispondere correttamente a una domanda è $p = \frac{1}{4}$, la probabilità di sbagliare è $q = \frac{3}{4}$. La probabilità di rispondere correttamente a 6 domande su 10 è:

$$p_{(6,10)} = \binom{10}{6}\!\left(\frac{1}{4}\right)^6\!\left(\frac{3}{4}\right)^4 \approx 0{,}016 = 1{,}6\%.$$

### Quesito 10

Si tratta di una distribuzione binomiale, in cui la probabilità di successo del singolo evento (uscita di un numero maggiore o uguale a 3 su un singolo dado) è $p = \frac{2}{3}$. La probabilità di avere $x$ successi su 5 lanci (il lancio simultaneo di 5 dadi o il lancio di un solo dado ripetuto per 5 volte sono condizioni equivalenti) è data da:

$$p(X = x) = \binom{5}{x}\!\left(\frac{2}{3}\right)^x\!\left(\frac{1}{3}\right)^{5-x} = \frac{5!}{x!\,(5-x)!} \cdot \frac{2^x}{3^5}, \quad x = 0, 1, 2, 3, 4, 5.$$

Compiliamo la tabella della distribuzione di probabilità:

| $X$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $p(X)$ | $\dfrac{1}{3^5}$ | $\dfrac{10}{3^5}$ | $\dfrac{40}{3^5}$ | $\dfrac{80}{3^5}$ | $\dfrac{80}{3^5}$ | $\dfrac{32}{3^5}$ |

Calcoliamo il valore medio $M(X)$ e la deviazione standard $\sigma(X)$ applicando le formule valide per la distribuzione binomiale:

$$M(X) = np = 5 \cdot \frac{2}{3} = \frac{10}{3};$$

$$\sigma(X) = \sqrt{np(1-p)} = \sqrt{5 \cdot \frac{2}{3} \cdot \frac{1}{3}} = \sqrt{\frac{10}{9}} = \frac{\sqrt{10}}{3}.$$

In alternativa potevamo calcolare i due valori applicando la definizione:

$$M(X) = \sum_{i=0}^{5} p(X=x_i)\,x_i = \frac{1\cdot0 + 10\cdot1 + 40\cdot2 + 80\cdot3 + 80\cdot4 + 32\cdot5}{3^5} = \frac{810}{3^5} = \frac{10}{3};$$

$$\sigma(X) = \sqrt{\sum_{i=0}^{5} p(X=x_i)(x_i-M)^2} = \sqrt{\frac{1\cdot100 + 10\cdot49 + 40\cdot16 + 80\cdot1 + 80\cdot4 + 32\cdot25}{9\cdot3^5}} = \frac{\sqrt{10}}{3}.$$
