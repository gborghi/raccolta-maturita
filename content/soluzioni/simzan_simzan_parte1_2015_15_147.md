---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2015_15_147
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2015 — SimZan parte1 #15 — Svolgimento'
---
## Problema 1

**Problema 1 – Conversazioni telefoniche**

*(grafico — vedi PDF p.147)*

### Punto a)

La funzione $f(t) = Ate^{-Bt}$ è definita, continua e derivabile per ogni $t \ge 0$, perché prodotto di due funzioni continue e derivabili in $\mathbb{R}_0^+$. Risulta $f(t)$ positiva per ogni $t > 0$ e nulla per $t = 0$. Vale il limite:

$$\lim_{t \to +\infty} f(t) = \lim_{t \to +\infty} \frac{At}{e^{Bt}} = 0,$$

in quanto la funzione esponenziale è un infinito di ordine superiore di qualunque funzione polinomiale. In alternativa possiamo notare che il limite è una forma indeterminata del tipo $\frac{\infty}{\infty}$ e che sono soddisfatte le ipotesi del teorema de L'Hôpital. Passando quindi al limite del rapporto delle derivate:

$$\lim_{t \to +\infty} \frac{At}{e^{Bt}} = \lim_{t \to +\infty} \frac{A}{Be^{Bt}} = 0.$$

Consideriamo la derivata prima di $f(t)$ e studiamo il suo segno:

$$f'(t) = Ae^{-Bt}(1 - Bt) \implies f'(t) = 0 \implies t = \frac{1}{B},$$

$$f'(t) > 0 \implies 0 < t < \frac{1}{B}, \qquad f'(t) < 0 \implies t > \frac{1}{B}.$$

La funzione $f$ è dunque crescente in $\left[0, \frac{1}{B}\right]$ e decrescente in $\left[\frac{1}{B}, +\infty\right[$, con un solo punto di massimo per $t = \frac{1}{B}$. Il suo andamento è quindi simile a quello del poligono delle frequenze.

### Punto b)

La funzione $f(t)$ deve assumere massimo per $t = 1{,}5$, come il poligono delle frequenze, quindi:

$$\frac{1}{B} = \frac{3}{2} \implies B = \frac{2}{3}.$$

Imponiamo che l'area del sottografico di $f(t)$ nell'intervallo $[0, +\infty[$ sia uguale a $S_{14} = 153$.

Calcoliamo per parti l'integrale:

$$\int_0^k Ate^{-\frac{2}{3}t}\,dt = A\int_0^k te^{-\frac{2}{3}t}\,dt = A\left\{\left[-\frac{3}{2}te^{-\frac{2}{3}t}\right]_0^k + \frac{3}{2}\int_0^k e^{-\frac{2}{3}t}\,dt\right\} =$$

$$= \frac{3}{2}A\left[-te^{-\frac{2}{3}t} - \frac{3}{2}e^{-\frac{2}{3}t}\right]_0^k = \frac{3}{2}A\!\left(-ke^{-\frac{2}{3}k} - \frac{3}{2}e^{-\frac{2}{3}k} + \frac{3}{2}\right).$$

Deve essere:

$$\lim_{k \to +\infty} \frac{3}{2}A\!\left(-ke^{-\frac{2}{3}k} - \frac{3}{2}e^{-\frac{2}{3}k} + \frac{3}{2}\right) = 153.$$

Al primo membro otteniamo $\dfrac{9}{4}A$, quindi:

$$\frac{9}{4}A = 153 \implies A = 68.$$

### Punto c)

Dobbiamo studiare la funzione:

$$f(t) = 68t\,e^{-\frac{2}{3}t}.$$

La funzione $f(t)$ nell'intervallo $[0, +\infty[$ è continua, derivabile, nulla solo per $t = 0$, positiva altrove, con asintoto orizzontale l'asse delle ascisse.

La derivata prima

$$f'(t) = \frac{68}{3}\,e^{-\frac{2}{3}t}(3 - 2t)$$

si annulla solamente nel punto $t = \dfrac{3}{2}$, dove la funzione assume il suo valore massimo:

$$f\!\left(\frac{3}{2}\right) = \frac{204}{2e} \simeq 37{,}52.$$

Calcoliamo la derivata seconda:

$$f''(t) = \frac{68}{3}\!\left[-\frac{2}{3}e^{-\frac{2}{3}t}(3-2t) - 2e^{-\frac{2}{3}t}\right] = -\frac{136}{3}\,e^{-\frac{2}{3}t}\!\left[1-\frac{2}{3}t+1\right] = \frac{272}{9}\,e^{-\frac{2}{3}t}(t-3).$$

La derivata seconda si annulla per $t = 3$, dove il grafico presenta un punto di flesso obliquo.

Il confronto tra il grafico del modello funzionale e il poligono delle frequenze mostra un discreto livello di coerenza dell'andamento qualitativo, sebbene la condizione di equivalenza delle aree sottese sia andata a discapito della fedeltà di riproduzione del massimo relativo, che risulta molto sottostimato.

*(grafico — vedi PDF p.153)*

### Punto d)

Calcoliamo l'integrale $\displaystyle\int_0^4 68t\,e^{-\frac{2}{3}t}\,dt$ utilizzando l'espressione ottenuta al punto b):

$$\int_0^4 68t\,e^{-\frac{2}{3}t}\,dt = 102\!\left[-4e^{-\frac{8}{3}} - \frac{3}{2}e^{-\frac{8}{3}} + \frac{3}{2}\right] = 102\!\left[-\frac{11}{2}e^{-\frac{8}{3}} + \frac{3}{2}\right] = 53\!\left(3 - 11e^{-\frac{8}{3}}\right) \simeq 114.$$

Questo valore rappresenta il numero di studenti che hanno dichiarato di aver fatto al più 4 ore di conversazione telefonica nella settimana, numero valutato attraverso la funzione modello $f(t)$.

### Punto e)

Il rapporto

$$p(4) = \frac{\displaystyle\int_0^4 f(t)\,dt}{S_{14}} = \frac{114}{153} \simeq 0{,}75 \implies 75\%$$

rappresenta la percentuale di studenti, sul totale di studenti intervistati, che hanno avuto conversazioni telefoniche per al più 4 ore nella settimana. La percentuale 75% rappresenta anche la probabilità, secondo il modello funzionale $f(t)$ del problema, che uno studente scelto a caso nel gruppo abbia dichiarato un tempo totale di conversazione minore o uguale a 4 ore settimanali.

### Punto f)

Secondo i dati dell'istogramma, gli studenti che hanno dichiarato una durata delle conversazioni maggiore di 2 ore e minore o uguale a 3 ore sono 32 (altezza del terzo rettangolo), quindi la percentuale sul totale degli studenti intervistati è:

$$\frac{32}{153} \simeq 0{,}21 \implies 21\%.$$

Secondo la funzione modello, la percentuale di studenti che hanno telefonato per una durata compresa fra le 2 e le 3 ore è circa il 21% circa (valutato con $\displaystyle\int_2^3 f(t)\,dt \simeq 32$).

---

## Problema 2

**Problema 2 – Previsioni meteorologiche**

*(grafico — vedi PDF p.148)*

### Punto a)

Calcolando, basandoci sui dati del primo grafico del problema, la distanza $\overline{AH}$, che corrisponde all'ascissa di $H$ nel secondo grafico. Nel primo grafico i punti $A$ e $H$ hanno coordinate $A(0;\,18)$ e $H(16;\,6)$, quindi:

$$\overline{AH} = \sqrt{(16-0)^2 + (6-18)^2} = \sqrt{256+144} = \sqrt{400} = 20.$$

Il punto $H$ dista 20 km dal punto $A$; la pressione atmosferica in $H$ vale 120 kPa. Nel secondo grafico, il punto corrispondente ad $H$ ha dunque coordinate $H'(20;\,120)$ ed è un massimo relativo per la funzione $p(x)$.

### Punto b)

La funzione $p(x)$ disegnata nel secondo grafico del problema presenta un minimo relativo per $x = 5$ e un massimo relativo per $x = 20$. Le due funzioni proposte sono definite e derivabili in tutto $\mathbb{R}$; condizione necessaria affinché ammettano minimo e massimo relativo in $x = 5$ e in $x = 20$ è che la derivata prima si annulli in quei punti.

Calcoliamo la derivata della prima funzione $y_1(x) = a + be^{-\frac{x}{500}}$:

$$y_1'(x) = -\frac{b}{500}e^{-\frac{x}{500}} \ne 0 \quad \forall x \in [0,30],$$

pertanto la prima funzione non può rappresentare la legge $p(x)$.

Calcoliamo la derivata della seconda funzione $y_2(x) = \dfrac{300(2x-25)}{(2x-25)^2 + 225} + b$:

$$y_2'(x) = \frac{300\left[2\left((2x-25)^2+225\right) - 2(2x-25)\cdot 2(2x-25)\right]}{\left[(2x-25)^2+225\right]^2} = \frac{600\left[225-(2x-25)^2\right]}{\left[(2x-25)^2+225\right]^2}.$$

La prima funzione non può dunque rappresentare la legge $p(x)$; è $y_2(x)$ che la rappresenta.

Ricaviamo i valori delle costanti $a$ e $b$. Imponiamo che il minimo si trovi in $x=5$ e il massimo in $x=20$:

$$y_2'(5) = 0 \implies 225-(2\cdot 5 - 25)^2 = 0 \implies 225 - (-15)^2 = 225 - 225 = 0. \quad \text{VERO}$$

$$y_2'(20) = 0 \implies 225-(2\cdot 20-25)^2 = 225 - 225 = 0. \quad \text{VERO}$$

Imponendo $y_2(5) = 100$ (minimo pari a 100 kPa):

$$\frac{300(10-25)}{(10-25)^2+225} + b = 100 \implies \frac{300\cdot(-15)}{225+225} + b = 100 \implies -10 + b = 100 \implies b = 110.$$

Verifichiamo: $y_2(20) = \dfrac{300\cdot 15}{225+225} + 110 = 10+110 = 120.$ VERO.

Dunque $a = 25$ e $b = 110$.

### Punto c)

Con $a = 25$ e $b = 110$, la funzione è:

$$p(x) = \frac{300(2x-25)}{(2x-25)^2+225} + 110.$$

La funzione è definita in $\mathbb{R}$, ovunque continua e derivabile. Calcoliamo il limite:

$$\lim_{x \to \pm\infty}\left[\frac{300(2x-25)}{(2x-25)^2+225}+110\right] = 0 + 110 = 110.$$

La funzione ammette asintoto orizzontale $y = 110$ e risulta quindi sempre positiva.

Per quanto riguarda i punti di flesso, possiamo ragionare sull'andamento qualitativo:
- la funzione volge la concavità verso l'alto in $x < 5$, dove ammette un minimo relativo, e deve avvicinarsi all'asintoto orizzontale $y = 110$ dal basso per $x \to -\infty$: occorre un punto di flesso per $x < 5$;
- la funzione volge la concavità verso il basso per $5 < x < 20$, dove è crescente;
- la funzione per $x > 20$ è decrescente e deve avvicinarsi all'asintoto $y = 110$ dall'alto, quindi la concavità cambia nuovamente: occorre un punto di flesso per $x > 20$.

La funzione $p(x)$ presenta dunque **tre punti di flesso**.

*(grafico — vedi PDF p.156)*

### Punto d)

Il valore medio della pressione atmosferica lungo il tratto $AB$ (da $x=0$ a $x=30$):

$$\bar{p} = \frac{1}{30}\int_0^{30}\left[\frac{300(2x-25)}{(2x-25)^2+225}+110\right]dx$$

$$= \frac{1}{30}\left[\frac{300}{4}\ln\!\left((2x-25)^2+225\right)\right]_0^{30} + 110 = \frac{1}{30}\cdot\frac{75}{1}\left[\ln\!\left((35)^2+225\right)-\ln\!\left((25)^2+225\right)\right] + 110$$

$$= \frac{5}{2}\ln\!\frac{1450}{850} + 110 \simeq \frac{5}{2}\cdot 0{,}534 + 110 \simeq 111{,}34\ \text{kPa}.$$

Lungo la diagonale $AB$, la pressione atmosferica media vale 111,34 kPa.

### Punto e)

Nel riferimento $Oxyz$ indicato, ai punti $L$ e $H$ corrispondono i punti di coordinate $L'(4;\,15;\,100)$ e $H'(16;\,6;\,120)$.

Le equazioni parametriche della retta $r$ passante per $L'$ e $H'$ sono:

$$\begin{cases} x = 4 + 12k \\ y = 15 - 9k \\ z = 100 + 20k \end{cases}, \quad k \in \mathbb{R}.$$

Per le equazioni cartesiane calcoliamo le proporzioni:

$$\frac{x-4}{12} = \frac{y-15}{-9} = \frac{z-100}{20}.$$

Dalla prima e dalla terza proporzione:
$$\frac{x-4}{12} = \frac{z-100}{20} \implies 20(x-4) = 12(z-100) \implies 5x - 3z + 280 = 0.$$

Dalla prima e dalla seconda:
$$\frac{x-4}{12} = \frac{y-15}{-9} \implies -9(x-4) = 12(y-15) \implies -3x - 4y + 72 = 0 \implies 3x + 4y - 72 = 0.$$

Le equazioni cartesiane della retta $r$ sono:

$$\begin{cases} 3x + 4y - 72 = 0 \\ 5x - 3z + 280 = 0. \end{cases}$$

---

## Quesito 1

Esiste un valore della costante reale $a$ per il quale l'equazione differenziale $xy'' + ay' + a^2 = 1$ abbia come soluzione la funzione $y(x) = \ln x - x$?

Calcoliamo le derivate prima e seconda di $y(x)$:

$$y'(x) = \frac{1}{x} - 1, \quad y''(x) = -\frac{1}{x^2}.$$

Sostituiamo nell'equazione differenziale:

$$x\cdot\!\left(-\frac{1}{x^2}\right) + a\!\left(\frac{1}{x}-1\right) + a^2 - 1 = 0$$

$$\implies -\frac{1}{x} + \frac{a}{x} - a + a^2 - 1 = 0 \implies \frac{a-1}{x} + (a^2 - a - 1 + 1) = 0 \implies \frac{a-1}{x} + (a-1)(a+1) = 0.$$

L'equazione è verificata per ogni $x > 0$ solamente se $a - 1 = 0$, ossia $a = 1$. Verifichiamo:

$$a = 1 \implies \frac{0}{x} + 0 = 0. \quad \text{VERO}$$

L'equazione è verificata con $\boxed{a = 1}$.

---

## Quesito 2

Una vasca cubica di 2 m per lato contiene inizialmente $2\ \text{m}^3$ d'acqua. A un istante $t = 0$ si apre un rubinetto che immette acqua nella vasca al ritmo costante di $10\ \text{m}^3/\text{h}$ e si apre lo scarico. L'acqua defluita dallo scarico dopo $t$ ore è pari a $\left(10t - 10e^{-t} + 10\right)\ \text{m}^3$.

Determiniamo il volume $V(t)$ dell'acqua nella vasca:

$$V(t) = 2 + 10t - \left(10t - 10e^{-t} + 10\right) = 2 + 10e^{-t} - 10 = 10e^{-t} - 8.$$

Determiniamo l'altezza dell'acqua (in metri) rispetto al fondo della vasca cubica, la cui superficie di base misura $4\ \text{m}^2$:

$$h(t) = \frac{V(t)}{4} = \frac{10e^{-t} - 8}{4} = \frac{5}{2}e^{-t} - 2.$$

Calcoliamo la derivata:

$$h'(t) = -\frac{5}{2}e^{-t} < 0 \quad \forall t \ge 0.$$

Poiché $h'(t) < 0$ per ogni $t > 0$, la funzione $h(t)$ è strettamente decrescente. Il massimo livello è raggiunto all'istante $t = 0$:

$$h(0) = \frac{5}{2} - 2 = \frac{1}{2} = 0{,}5\ \text{m}.$$

Al crescere del tempo: $\lim_{t \to +\infty} h(t) = -2 < 0$. Poiché $h(t) = 0 \implies e^{-t} = \dfrac{4}{5} \implies t = \ln\dfrac{5}{4} \simeq 0{,}22\ \text{h}$, la vasca si svuota dopo circa 13 minuti e lo scarico rimarrà poi a secco.

---

## Quesito 3

Dato nel riferimento $Oxyz$ il piano $\alpha$ di equazione $2\sqrt{2}\,x + 3\sqrt{2}\,y + 2\sqrt{2}\,z - 4 = 0$, e dette $A$, $B$, $C$ le sue intersezioni con gli assi $x$, $y$ e $z$.

Ricaviamo le intersezioni con gli assi:

- per $y = z = 0$: $2\sqrt{2}\,x = 4 \implies A\!\left(\sqrt{2};\,0;\,0\right)$;
- per $x = z = 0$: $3\sqrt{2}\,y = 4 \implies B\!\left(0;\,\dfrac{2\sqrt{2}}{3};\,0\right)$;
- per $x = y = 0$: $2\sqrt{2}\,z = 4 \implies C\!\left(0;\,0;\,\sqrt{2}\right)$.

I lati del triangolo $ABC$ misurano:

$$\overline{AB} = \sqrt{2 + \frac{8}{9}} = \sqrt{\frac{26}{9}} = \frac{\sqrt{26}}{3},$$

$$\overline{AC} = \sqrt{(\sqrt{2})^2 + (\sqrt{2})^2} = 2,$$

$$\overline{BC} = \sqrt{\frac{8}{9} + 2} = \frac{\sqrt{26}}{3}.$$

Il triangolo $ABC$ è isoscele. L'area, calcolata con il teorema di Pitagora, è:

$$\mathcal{A}_{ABC} = \frac{1}{2}\overline{AC}\cdot h = \frac{5}{3}.$$

*(grafico — vedi PDF p.158)*

La distanza $\overline{OH}$ dell'origine $O$ dal piano $\alpha$:

$$\overline{OH} = \frac{|{-4}|}{\sqrt{(2\sqrt{2})^2+(3\sqrt{2})^2+(2\sqrt{2})^2}} = \frac{4}{\sqrt{8+18+8}} = \frac{4}{\sqrt{34}} = \frac{4\sqrt{34}}{34} = \frac{2\sqrt{34}}{17}.$$

Il volume della piramide $ABCO$:

$$V_{ABCO} = \frac{1}{3}\mathcal{A}_{ABC}\cdot\overline{OH} = \frac{1}{3}\cdot\frac{5}{3}\cdot\frac{4}{5} = \frac{4}{9}.$$

---

## Quesito 4

Sia $f(x)$ una funzione definita e continua in $\mathbb{R}$ tale che:

$$\lim_{x \to 0} \frac{f(x)}{x} = \frac{1}{2}.$$

Calcoliamo:

$$\lim_{x \to 0} \frac{\displaystyle\int_0^{2x} f(t)\,dt}{x^2}.$$

Verifichiamo che $F(x) = \displaystyle\int_0^{2x} f(t)\,dt$ soddisfi le ipotesi del teorema di De L'Hôpital: $F(0) = 0$, $x^2\big|_{x=0} = 0$, entrambe derivabili con derivata di $x^2$ mai nulla per $x \ne 0$. Applicando il teorema:

$$\lim_{x \to 0}\frac{\displaystyle\int_0^{2x} f(t)\,dt}{x^2} = \lim_{x \to 0}\frac{2f(2x)}{2x} = \lim_{x \to 0}\frac{f(2x)}{x} = 2\lim_{x \to 0}\frac{f(2x)}{2x} = 2\cdot\frac{1}{2} = 1.$$

---

## Quesito 5

Data la funzione $f(x) = \dfrac{4}{x^2+1}$, ricaviamo le equazioni di tutte le rette tangenti al suo grafico passanti per il punto $A(0;\,4)$.

La derivata di $f$:

$$f'(x) = -\frac{8x}{(x^2+1)^2}.$$

La retta tangente in un punto generico $(x_0,\,f(x_0))$ ha equazione:

$$y = f'(x_0)(x - x_0) + f(x_0) = -\frac{8x_0}{(x_0^2+1)^2}(x-x_0) + \frac{4}{x_0^2+1}.$$

Imponiamo l'appartenenza di $A(0;\,4)$:

$$4 = \frac{8x_0^2}{(x_0^2+1)^2} + \frac{4}{x_0^2+1} \implies 4(x_0^2+1)^2 = 8x_0^2 + 4(x_0^2+1) \implies 4x_0^4 + 8x_0^2 + 4 = 8x_0^2 + 4x_0^2 + 4$$

$$\implies 4x_0^4 - 4x_0^2 = 0 \implies 4x_0^2(x_0^2 - 1) = 0 \implies x_0 = 0 \quad\vee\quad x_0 = \pm 1.$$

Le rette tangenti al grafico di $f(x)$ passanti per $A(0;\,4)$ sono:

- per $x_0 = 0$: $r_1:\; y = 4$;
- per $x_0 = 1$: $r_2:\; y = -2x + 4$;
- per $x_0 = -1$: $r_3:\; y = 2x + 4$.

---

## Quesito 6

Data la funzione $f(x) = \sqrt{a^2x^2 + 9}$, determina per quale valore della costante reale positiva $a$ i solidi ottenuti ruotando di 360° il sottografico di $f(x)$ compreso tra $x = 0$ e $x = 4$ prima intorno all'asse $x$ poi intorno all'asse $y$ risultano equivalenti.

Il volume $V_x$ del solido di rotazione intorno all'asse $x$:

$$V_x = \pi\int_0^4 \left(a^2x^2+9\right)dx = \pi\left[\frac{a^2x^3}{3}+9x\right]_0^4 = \pi\!\left(\frac{64a^2}{3}+36\right).$$

Il volume $V_y$ del solido di rotazione intorno all'asse $y$ (formula del guscio cilindrico):

$$V_y = 2\pi\int_0^4 x\sqrt{a^2x^2+9}\,dx = 2\pi\left[\frac{(a^2x^2+9)^{3/2}}{3a^2}\right]_0^4 = \frac{2\pi}{3a^2}\!\left[(16a^2+9)^{3/2}-27\right].$$

Imponiamo $V_x = V_y$:

$$\pi\!\left(\frac{64a^2}{3}+36\right) = \frac{2\pi}{3a^2}\!\left[(16a^2+9)^{3/2}-27\right].$$

$$a^2\!\left(64a^2+108\right) = 2\!\left[(16a^2+9)^{3/2}-27\right].$$

La soluzione numerica di questa equazione è $a = \dfrac{172}{196} \simeq \dfrac{49}{43}$.

---

## Quesito 7

Considera la funzione $f(x) = x\sqrt{1-x^2}$.

### Punto a)

Stabiliamo se $f(x)$ soddisfa le ipotesi del teorema di Rolle nell'intervallo $[-1;\,1]$.

La funzione $f(x) = x\sqrt{1-x^2}$ è:
- definita e continua in $[-1;\,1]$;
- $f(-1) = 0 = f(1)$.

La derivata prima è:

$$f'(x) = \sqrt{1-x^2} + x\cdot\frac{-x}{\sqrt{1-x^2}} = \frac{1-2x^2}{\sqrt{1-x^2}},$$

non definita in $x = \pm 1$ (estremi dell'intervallo). Poiché $f$ è derivabile in ogni punto dell'intervallo aperto $]-1;\,1[$, le ipotesi del teorema di Rolle **sono soddisfatte**. Il punto in cui si annulla la derivata è $x = \pm\dfrac{1}{\sqrt{2}}$, con $f'\!\left(\dfrac{1}{\sqrt{2}}\right) = 0$ che cade in $]-1;\,1[$.

### Punto b)

Stabiliamo se $f(x)$ ammette punti di flesso nell'intervallo $]-1;\,1[$.

La derivata seconda:

$$f''(x) = \frac{-4x\sqrt{1-x^2} - (1-2x^2)\cdot\dfrac{-x}{\sqrt{1-x^2}}}{1-x^2} = \frac{-4x(1-x^2) + x(1-2x^2)}{(1-x^2)^{3/2}} = \frac{x(2x^2-3)}{(1-x^2)^{3/2}}.$$

$f''(x) = 0$ per $x = 0$ (in $]-1;\,1[$), dove la concavità cambia segno. Pertanto $f$ **ammette un punto di flesso** in $x = 0$ nell'intervallo $]-1;\,1[$.

---

## Quesito 8

Nella figura sono riportati i grafici di una funzione $f(x)$, della sua derivata prima $f'(x)$ e della derivata seconda $f''(x)$.

*(grafico — vedi PDF p.150)*

Se uno dei tre grafici ha equazione $y(x) = \dfrac{x^2}{(x^2+1)^2}$, allora la funzione $y(x)$ è sempre non negativa, pari, si annulla in $x = 0$ e per $x \to \pm\infty$, con massimo in punti simmetrici $x = \pm\dfrac{1}{\sqrt{3}}$: corrisponde alla derivata seconda $f''(x)$ (grafico $y_3$ nella figura).

*(grafico — vedi PDF p.162)*

Associamo:
- $y_3(x) = \dfrac{x^2}{(x^2+1)^2} = f''(x)$;
- integrando $f''$ si ottiene $f'(x) = -\dfrac{x}{x^2+1} + c$; ponendo $c = 0$: $f'(x) = -\dfrac{x}{x^2+1}$;
- integrando $f'$ si ottiene $f(x) = -\dfrac{1}{2}\ln(x^2+1) + c$.

Se invece è $f(x) = \dfrac{x^2}{(x^2+1)^2}$, allora:

$$f'(x) = \frac{2x(x^2+1)^2 - x^2\cdot 2(x^2+1)\cdot 2x}{(x^2+1)^4} = \frac{2x(1-x^2)}{(x^2+1)^3}, \qquad f''(x) = \frac{2(1-6x^2+x^4)}{(x^2+1)^4}.$$

Secondo i grafici mostrati, la corrispondenza è:
- il grafico $y_1$ (positivo, asintoto $y=1$, crescente per $x>0$) corrisponde a $f(x)$;
- il grafico $y_2$ (dispari, un solo zero in $x=0$) corrisponde a $f'(x)$;
- il grafico $y_3$ (pari, due massimi relativi, si annulla in $x=0$) corrisponde a $f''(x)$.

Con $f(x) = \dfrac{x^2}{x^2+1}$:

$$f'(x) = \frac{2x}{(x^2+1)^2}, \qquad f''(x) = \frac{2(1-3x^2)}{(x^2+1)^3}.$$

---

## Quesito 9

In un quiz televisivo un concorrente deve rispondere a 10 domande, ciascuna delle quali ha 4 risposte possibili fra cui una sola è corretta. Rispondendo a caso, la probabilità di risposta corretta a ogni domanda è $p = \dfrac{1}{4}$.

La probabilità di rispondere correttamente a esattamente 6 domande su 10 si calcola con la distribuzione binomiale $B\!\left(10;\,\dfrac{1}{4}\right)$:

$$p_{6;10} = \binom{10}{6}\!\left(\frac{1}{4}\right)^6\!\!\left(\frac{3}{4}\right)^4 = 210\cdot\frac{1}{4096}\cdot\frac{81}{256} = 210\cdot\frac{81}{1\,048\,576} \approx 0{,}016 \approx 1{,}69\%.$$

---

## Quesito 10

Si lanciano 5 dadi regolari a sei facce. Detto $x$ il numero di dadi che presentano un valore maggiore o uguale a 3 (valori 3, 4, 5, 6), la probabilità di successo per ogni dado è $p = \dfrac{4}{6} = \dfrac{2}{3}$, e quella di insuccesso è $q = \dfrac{1}{3}$.

La variabile casuale $X$ segue una distribuzione binomiale $B\!\left(5;\,\dfrac{2}{3}\right)$.

La tabella della distribuzione di probabilità:

| $X$ | 0 | 1 | 2 | 3 | 4 | 5 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $p(X)$ | $\dfrac{1}{243}$ | $\dfrac{10}{243}$ | $\dfrac{40}{243}$ | $\dfrac{80}{243}$ | $\dfrac{80}{243}$ | $\dfrac{32}{243}$ |

Il valore medio:

$$M(X) = np = 5\cdot\frac{2}{3} = \frac{10}{3}.$$

La deviazione standard:

$$\sigma(X) = \sqrt{npq} = \sqrt{5\cdot\frac{2}{3}\cdot\frac{1}{3}} = \sqrt{\frac{10}{9}} = \frac{\sqrt{10}}{3}.$$
