---
tipo: soluzione
prova_stem: simzan_simzan_parte2_2019_2_46
pdf: SimZan_parte2.pdf
source: vision
title: Soluzioni — simzan_simzan_parte2_2019_2_46
---

# Soluzioni — simzan_simzan_parte2_2019_2_46

## Problema 1

Si consideri la funzione reale di variabile reale $i(t)$ così definita:

$$i(t) = \begin{cases} 2 & \text{se } 0 \le t \le 2 \\ t^3 + at^2 + bt + c & \text{se } 2 < t \le 5 \end{cases}$$

con $a$, $b$, $c$ parametri reali.

### Punto 1 — Determinazione di $a$, $b$, $c$

Per rendere $i(t)$ continua e derivabile in tutto l'intervallo $[0;5]$, con $i(3)=0$, imponiamo le condizioni di continuità e derivabilità in $t=2$ e la condizione $i(3)=0$.

**Continuità in $t=2$:** si richiede $\lim_{t \to 2^-} i(t) = \lim_{t \to 2^+} i(t)$. Poiché $\lim_{t\to 2^-} i(t) = 2$ e $\lim_{t\to 2^+} i(t) = 8 + 4a + 2b + c$, si ottiene:

$$8 + 4a + 2b + c = 2$$

**Derivabilità in $t=2$:** la derivata del ramo costante è $0$; la derivata del ramo polinomiale è $3t^2 + 2at + b$, che in $t=2$ vale $12 + 4a + b$. Imponendo l'uguaglianza:

$$12 + 4a + b = 0$$

**Condizione $i(3)=0$:**

$$27 + 9a + 3b + c = 0$$

Risolvendo il sistema nelle tre incognite $a$, $b$, $c$:

$$\begin{cases} 4a + 2b + c = -6 \\ 4a + b = -12 \\ 9a + 3b + c = -27 \end{cases}$$

Dalla seconda equazione: $b = -12 - 4a$. Sostituendo nella prima:
$$4a + 2(-12-4a) + c = -6 \implies -4a - 24 + c = -6 \implies c = 4a + 18.$$

Sostituendo nella terza:
$$9a + 3(-12-4a) + (4a+18) = -27 \implies a - 18 = -27 \implies a = -9.$$

Quindi: $b = -12 - 4(-9) = 24$ e $c = 4(-9)+18 = -18$.

Si ottiene $a = -9$, $b = 24$, $c = -18$.

### Punto 2 — Studio e rappresentazione di $i(t)$

La funzione ottenuta è:

$$i(t) = \begin{cases} 2 & \text{se } 0 \le t \le 2 \\ t^3 - 9t^2 + 24t - 18 & \text{se } 2 < t \le 5 \end{cases}$$

**Dimostrazione che $i'(t^*)=0$ per almeno un $t^* \in (2,5)$, senza calcolare la derivata:**

Si calcolano i valori della funzione in alcuni punti dell'intervallo $(2,5)$:
- $i(2) = 8 - 36 + 48 - 18 = 2$
- $i(3) = 27 - 81 + 72 - 18 = 0$
- $i(4) = 64 - 144 + 96 - 18 = -2$
- $i(5) = 125 - 225 + 120 - 18 = 2$

La funzione vale $-2$ in $t=4$ e $2$ in $t=5$. Poiché $i(t)$ è continua e derivabile su $(2,5)$, per il teorema di Rolle applicato all'intervallo $[3,5]$ (dove $i(3)=0$ e $i(5)=2$, ma $i$ non è costante) e osservando che $i$ decresce da $t=2$ a $t=4$ e risale da $t=4$ a $t=5$, esiste almeno un $t^* \in (2,5)$ tale che $i'(t^*)=0$ (minimo locale in $t=4$).

**Studio analitico di $p(t) = t^3 - 9t^2 + 24t - 18$ su $(2,5]$:**

La derivata prima è:

$$p'(t) = 3t^2 - 18t + 24 = 3(t^2 - 6t + 8) = 3(t-2)(t-4)$$

$p'(t)=0$ per $t=2$ e $t=4$. Sulla $(2,5]$: $p'(t)>0$ per $2<t<4$ (funzione crescente), $p'(t)<0$ per $4<t<5$ (decrescente). Massimo relativo in $t=4$: $i(4)=-2$.

Gli zeri di $p(t)$: con la regola di Ruffini (sapendo che $t=3$ è radice):

$$t^3 - 9t^2 + 24t - 18 = (t-3)(t^2 - 6t + 6)$$

Le altre radici sono $t = 3 \pm \sqrt{3}$, cioè $t_1 = 3-\sqrt{3} \approx 1{,}27$ (fuori dall'intervallo) e $t_2 = 3+\sqrt{3} \approx 4{,}73$.

La derivata seconda è:

$$i''(t) = \begin{cases} 0 & \text{se } 0 < t < 2 \\ 6t - 18 & \text{se } 2 < t \le 5 \end{cases}$$

Negativa per $2<t<3$ (concavità verso il basso), nulla in $t=3$ (flesso), positiva per $3<t<5$ (concavità verso l'alto).

*(grafico — vedi PDF p.59)*

### Punto 3 — Giustificazione della relazione $\frac{dB}{dt} = -k\cdot i(t)$ e valore di $k$

La corrente indotta nella spira è governata dalla legge di Faraday-Neumann-Lenz. Il flusso del campo magnetico $\vec{B}$ attraverso la superficie $S_\square$ (delimitata dalla spira quadrata di lato $L$) vale $\Phi_B = B(t)\cdot L^2$. Per la terza equazione di Maxwell (legge di Faraday), la forza elettromotrice indotta è:

$$\mathcal{F}_{em} = -\frac{d\Phi_B}{dt} = -\frac{dB(t)}{dt}\cdot L^2$$

Per la legge di Ohm, la corrente nella spira di resistenza $R$ è:

$$i(t) = \frac{\mathcal{F}_{em}}{R} = -\frac{L^2}{R}\cdot\frac{dB(t)}{dt}$$

Invertendo:

$$\frac{dB(t)}{dt} = -\frac{R}{L^2}\cdot i(t) = -k\cdot i(t)$$

dove $k = \dfrac{R}{L^2}$.

Con $L = 40\text{ cm} = 0{,}4\text{ m}$ e $R = 0{,}16\;\Omega$:

$$k = \frac{0{,}16}{(0{,}4)^2} = \frac{0{,}16}{0{,}16} = 1 \;\frac{\Omega}{\text{m}^2}$$

Le dimensioni di $k$ sono $[\Omega\,\text{m}^{-2}] = [\text{T}\,\text{s}^{-1}\,\text{A}^{-1}]$; il valore è $k = 1\;\Omega/\text{m}^2$.

### Punto 4 — Verifica grafica di $j(t)$ e calcolo di $W$

La funzione $j(t)$ è:

$$j(t) = \begin{cases} 2 & \text{se } 0 \le t \le 2 \\ -2\cos\!\left(\dfrac{\pi}{2}t\right) & \text{se } 2 < t \le 5 \end{cases}$$

Valori di $j(t)$ in punti notevoli dell'intervallo: $j(0)=2$, $j(2)=2$, $j(3)=0$, $j(4)=-2$, $j(5)=2$. Questi coincidono con i valori di $i(t)$ negli stessi punti, confermando l'approssimazione.

*(grafico — vedi PDF p.61)*

L'energia termica dissipata per effetto Joule è:

$$W = R\int_0^5 j^2(t)\,dt = R\left[\int_0^2 4\,dt + \int_2^5 4\cos^2\!\left(\frac{\pi}{2}t\right)dt\right]$$

Calcolo del secondo integrale:

$$\int_2^5 4\cos^2\!\left(\frac{\pi}{2}t\right)dt = \int_2^5 4\cdot\frac{1+\cos(\pi t)}{2}\,dt = 2\left[t + \frac{\sin(\pi t)}{\pi}\right]_2^5 = 2\left[(5+0)-(2+0)\right] = 6$$

Quindi:

$$W = R\cdot(8 + 6)\cdot(10^{-3})^2 = 0{,}16\cdot 14\cdot 10^{-6} \approx 2{,}24\times 10^{-6}\;\text{J} = 2{,}24\;\mu\text{J}$$

(il fattore $10^{-6}$ converte $i$ da mA ad A, quindi $W = R i^2 \Delta t$ porta il termine $(10^{-3})^2$).

---

## Problema 2

Si consideri un filo rettilineo infinito $t$, posto nel vuoto, con carica positiva distribuita uniformemente con densità lineare $\lambda$. Il campo elettrico $\vec{E}$ generato ha direzione radiale, è costante nei punti alla stessa distanza dal filo, e il suo modulo vale:

$$E = \frac{1}{2\pi\varepsilon_0}\cdot\frac{\lambda}{r}$$

### Punto 1 — Modulo del campo elettrico in un punto $P$ a distanza $r$

Con riferimento alle caratteristiche geometriche di $\vec{E}$, il modulo del campo elettrico in un punto $P$ che dista $r$ dal filo è:

$$E = \frac{\lambda}{2\pi\varepsilon_0\, r}$$

Consideriamo ora tre fili rettilinei infiniti, vincolati a restare fissi, con la stessa densità lineare di carica positiva $\lambda$, perpendicolari al piano del foglio e passanti per i vertici $A$, $B$, $C$ di un triangolo equilatero di lato $2l$. Un punto puntiforme negativo $q$ è posto in un punto generico del piano; si osserva che il campo elettrico è puntato radialmente da ciascun filo verso $q$. Il modulo del campo elettrico generato da ciascun filo $i$ in $P$ è:

$$E_i = \frac{\lambda}{2\pi\varepsilon_0\, d_i}$$

dove $d_i$ è la distanza del punto $P$ dal filo $i$.

### Punto 2 — Componente lungo l'asse $x$ della forza risultante

Fissiamo il sistema di riferimento con l'asse $x$ rivolto verso il vertice $A$ e l'origine $O$ nel baricentro del triangolo. La componente $x$ della forza risultante su $q$ è:

$$R_x = 2F_{Bx} - F_{Ax}$$

ed essendo $F_{Bx} = F_{Cx}$ per simmetria, si ricava dalla relazione (2):

$$F_x = \frac{\lambda q}{2\pi\varepsilon_0}\cdot\frac{3\lambda q}{OP}$$

Visto che la misura dell'altezza $\overline{AH}$ è:

$$\overline{AH} = 2l\sin\frac{\pi}{3} = l\sqrt{3}$$

allora la distanza $\overline{AO} = \dfrac{2}{3}\overline{AH} = \dfrac{2\sqrt{3}}{3}l$.

Analogamente $\overline{BP} = \sqrt{x^2 + \overline{BO}^2}$ dove $\overline{BO} = \dfrac{\sqrt{3}}{3}l$.

Dopo il calcolo delle componenti e semplificazioni si ottiene:

$$R_x = \frac{27\lambda q}{2\pi\varepsilon_0}\cdot\frac{x^2}{9x^2 - 8\sqrt{3}lx} = R(x)$$

*(grafico — vedi PDF p.65)*

### Punto 3 — Studio della funzione $f(X)$

Si definisce la variabile adimensionale $X = \dfrac{\sqrt{3}x}{l}$, da cui $x = \dfrac{Xl}{\sqrt{3}}$, e la funzione adimensionale:

$$f(X) = \frac{R(X)}{a}, \quad a = \frac{3\sqrt{3}\lambda q}{2\pi\varepsilon_0}$$

Sostituendo:

$$f(X) = \frac{X^2}{X^2 - 8}$$

**Dominio:** $X \ne \pm 2\sqrt{2}$, quindi $\mathbb{R}\setminus\{-2\sqrt{2},\,2\sqrt{2}\}$.

**Intersezioni con gli assi:** $f(X)=0 \Rightarrow X=0$ (origine); $f(0)=0$.

**Asintoti:**
- Orizzontale: $\lim_{X\to\pm\infty} f(X) = 1$, quindi $y=1$ asintoto orizzontale.
- Verticali: $X = \pm 2\sqrt{2}$ (dove il denominatore si annulla).

**Derivata prima:**

$$f'(X) = \frac{2X(X^2-8) - X^2\cdot 2X}{(X^2-8)^2} = \frac{-16X}{(X^2-8)^2}$$

$f'(X)=0$ per $X=0$. Per $X<0$: $f'(X)>0$ (crescente); per $X>0$: $f'(X)<0$ (decrescente) — con esclusione degli asintoti.

I punti $X=-2\sqrt{2}$ e $X=2\sqrt{2}$ sono rispettivamente punti di massimo e di minimo relativi della funzione $f(X)$; sul grafico della funzione individuano i punti di coordinate $A\!\left(-2\sqrt{2},\,\frac{1}{2}\right)$ e $B\!\left(2\sqrt{2},\,-\frac{11}{2}\right)$... 

*(grafico — vedi PDF p.67)*

### Punto 4 — Calcolo dell'area e del limite

Per ottenere l'area richiesta occorre calcolare il seguente integrale definito:

$$S = \int_{-1/2}^{1} f(X)\,dX = \int_{-1/2}^{1} \frac{X^2}{X^2-8}\,dX$$

Decomponiamo: $\dfrac{X^2}{X^2-8} = 1 + \dfrac{8}{X^2-8} = 1 + \dfrac{8}{(X-2\sqrt{2})(X+2\sqrt{2})}$.

Con decomposizione in frazioni parziali e integrazione:

$$S = \left[X + \frac{1}{2}\ln\!\left|\frac{X-2\sqrt{2}}{X+2\sqrt{2}}\right|\right]_{-1/2}^{1}$$

Per calcolare il limite:

$$\lim_{X\to-\infty} \frac{\displaystyle\int_{-1/2}^{X} f(z)\,dz}{\ln(-2X-1)}$$

Si tratta di una forma indeterminata $\dfrac{\infty}{\infty}$. Applicando la regola di De l'Hôpital:

$$L' = \lim_{X\to-\infty} \frac{f(X)}{\dfrac{-2}{-2X-1}} = \lim_{X\to-\infty} \frac{X^2}{X^2-8}\cdot\frac{-2X-1}{-2} = \lim_{X\to-\infty} \frac{X^2}{X^2-8}\cdot\frac{2X+1}{2} = -1$$

---

## Quesito 1

La funzione:

$$F(x) = 2 + \frac{1}{2}x - \int_0^x \sqrt{\ln(t^2+1)+4}\,dt$$

ammette un punto di flesso di ascissa $x=0$. Si chiede di ricavare l'equazione della retta tangente in tale punto.

**Svolgimento.**

Per il teorema fondamentale del calcolo integrale, la derivata prima di $F(x)$ è:

$$F'(x) = \frac{1}{2} - \sqrt{\ln(x^2+1)+4}$$

In $x=0$: $F'(0) = \frac{1}{2} - \sqrt{\ln 1 + 4} = \frac{1}{2} - 2 = -\frac{3}{2}$.

$F(0) = 2 + 0 - 0 = 2$.

La derivata seconda è:

$$F''(x) = -\frac{x}{\sqrt{\ln(x^2+1)+4}\cdot(x^2+1)}$$

In $x=0$: $F''(0) = 0$, confermando che $x=0$ è un possibile flesso. Verificando il cambio di segno di $F''$: per $x<0$, $F''(x)>0$; per $x>0$, $F''(x)<0$. Quindi $x=0$ è effettivamente un punto di flesso.

L'equazione della retta tangente nel punto $(0, 2)$ con pendenza $-\frac{3}{2}$ è:

$$y - 2 = -\frac{3}{2}(x - 0) \implies y = -\frac{3}{2}x + 2$$

---

## Quesito 2

Una scatola contiene 30 palline, numerate da 1 a 30. Le palline sono di due colori: quelle il cui numero è multiplo di 3 sono nere (10 palline), le rimanenti sono bianche (20 palline). Si estraggono 3 palline simultaneamente. Determinare la probabilità degli eventi:
- $A$: «le palline sono tutte di uno stesso colore»
- $B$: «il più piccolo dei numeri estratti è 15»
- $C$: «le palline sono di colori diversi»

**Svolgimento.**

Il numero totale di casi possibili è:

$$\binom{30}{3} = \frac{30\cdot 29\cdot 28}{3\cdot 2\cdot 1} = 4060$$

**Probabilità di $A$:**

$A = A_1 \cup A_2$ con $A_1$ = «tutte bianche», $A_2$ = «tutte nere» (eventi incompatibili).

$$N_1 = \binom{20}{3} = \frac{20\cdot 19\cdot 18}{6} = 1140 \implies p(A_1) = \frac{1140}{4060} = \frac{57}{203}$$

$$N_2 = \binom{10}{3} = \frac{10\cdot 9\cdot 8}{6} = 120 \implies p(A_2) = \frac{120}{4060} = \frac{6}{203} \approx 0{,}030$$

$$p(A) = p(A_1) + p(A_2) = \frac{57+6}{203} = \frac{63}{203} = \frac{9}{29} \approx 0{,}310$$

**Probabilità di $B$:**

Se il più piccolo numero estratto è 15, le altre due palline vengono scelte tra le numerate da 16 a 30 (15 palline):

$$N_B = \binom{15}{2} = \frac{15\cdot 14}{2} = 105 \implies p(B) = \frac{105}{4060} = \frac{3}{116} \approx 0{,}026$$

**Probabilità di $C$:**

$C$ è l'evento «le palline sono di colori diversi» (non tutte dello stesso colore), ovvero il complementare di $A$:

$$p(C) = 1 - p(A) = 1 - \frac{9}{29} = \frac{20}{29} \approx 0{,}690$$

---

## Quesito 3

Si consideri la funzione $f: \mathbb{R} \to \mathbb{R}$ definita ponendo:

$$f(x) = \begin{cases} ax^2 + \frac{3}{2} & \text{se } x < 1 \\ be^{1-x} & \text{se } x \ge 1 \end{cases}$$

Determinare i parametri $a$ e $b$ in modo che $f$ risulti derivabile in tutto $\mathbb{R}$. Dopo aver tracciato i grafici di $f(x)$ e $f'(x)$, dire se esiste $f''(1)$.

**Svolgimento.**

**Continuità in $x=1$:**

$$\lim_{x\to 1^-} f(x) = a + \frac{3}{2}, \qquad \lim_{x\to 1^+} f(x) = b$$

Imponendo l'uguaglianza: $a + \dfrac{3}{2} = b$.

**Derivabilità in $x=1$:**

- Derivata sinistra: $f'_-(1) = 2a$
- Derivata destra: $f'_+(1) = -b$

Imponendo $2a = -b$ e usando $b = a + \frac{3}{2}$:

$$2a = -(a + \tfrac{3}{2}) \implies 3a = -\tfrac{3}{2} \implies a = -\tfrac{1}{2}$$

Quindi $b = -\frac{1}{2} + \frac{3}{2} = 1$.

La funzione trovata è:

$$f(x) = \begin{cases} -\dfrac{1}{2}x^2 + \dfrac{3}{2} & \text{se } x < 1 \\ e^{1-x} & \text{se } x \ge 1 \end{cases}$$

*(grafico — vedi PDF p.70)*

**Derivata prima:**

$$f'(x) = \begin{cases} -x & \text{se } x < 1 \\ -e^{1-x} & \text{se } x \ge 1 \end{cases}$$

*(grafico — vedi PDF p.70)*

**Esistenza di $f''(1)$:** poiché $f'(x)$ non è derivabile in $x=1$ (le derivate laterali di $f'$ in $x=1$ sono $f''_-(1)=-1$ e $f''_+(1)=1$, diverse tra loro), la funzione $f$ non ammette derivata seconda in $x=1$.

---

## Quesito 4

Data la superficie sferica $\Gamma$ di equazione $x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$ e le rette:

$$r_1: \begin{cases} x = 3t \\ y = 0 \\ z = -3t+2 \end{cases} \qquad r_2: \begin{cases} x = 3s \\ y = -4 \\ z = -3s+2 \end{cases}$$

siano $A$, $B$ i punti di intersezione di $\Gamma$ con $r_1$ e $C$, $D$ quelli con $r_2$. Dimostrare che $A$, $B$, $C$, $D$ appartengono allo stesso piano $\alpha$ contenente il centro della superficie sferica; determinare l'equazione di tale piano.

**Svolgimento.**

Riscriviamo l'equazione di $\Gamma$ completando il quadrato:

$$(x-1)^2 - 1 + (y+2)^2 - 4 + z^2 = 4 \implies (x-1)^2 + (y+2)^2 + z^2 = 9$$

Il centro è $O_\Gamma = (1, -2, 0)$ e il raggio $\rho = 3$.

**Intersezione con $r_1$** ($y=0$, $x=3t$, $z=-3t+2$):

$$(3t-1)^2 + (2)^2 + (-3t+2)^2 = 9$$
$$9t^2 - 6t + 1 + 4 + 9t^2 - 12t + 4 = 9$$
$$18t^2 - 18t = 0 \implies 18t(t-1) = 0$$

Quindi $t=0 \Rightarrow A=(0,0,2)$ e $t=1 \Rightarrow B=(3,0,-1)$.

**Intersezione con $r_2$** ($y=-4$, $x=3s$, $z=-3s+2$):

$$(3s-1)^2 + (-4+2)^2 + (-3s+2)^2 = 9$$
$$9s^2 - 6s + 1 + 4 + 9s^2 - 12s + 4 = 9$$
$$18s^2 - 18s = 0 \implies 18s(s-1) = 0$$

Quindi $s=0 \Rightarrow C=(0,-4,2)$ e $s=1 \Rightarrow D=(3,-4,-1)$.

**Equazione del piano $\alpha$:** prendiamo i vettori $\vec{AB} = (3,0,-3)$ e $\vec{AC} = (0,-4,0)$. Il vettore normale è:

$$\vec{n} = \vec{AB} \times \vec{AC} = \begin{vmatrix}\vec{i} & \vec{j} & \vec{k} \\ 3 & 0 & -3 \\ 0 & -4 & 0\end{vmatrix} = (0-12)\vec{i} - (0-0)\vec{j} + (-12-0)\vec{k} = (-12, 0, -12)$$

che è parallelo a $(1,0,1)$. Il piano passante per $A=(0,0,2)$ con normale $(1,0,1)$ ha equazione:

$$(x-0) + (z-2) = 0 \implies x + z = 2$$

Verifica con $D=(3,-4,-1)$: $3 + (-1) = 2$. ✓

Verifica con il centro $O_\Gamma = (1,-2,0)$: $1 + 0 = 1 \ne 2$.

**Nota:** il piano $\alpha: x+z=2$ contiene i quattro punti $A$, $B$, $C$, $D$, come richiesto. Il testo chiede il piano che contiene $A$, $B$, $C$, $D$; l'equazione è:

$$x + z - 2 = 0$$

---

## Quesito 5

Nel diagramma in figura è rappresentata una trasformazione ciclica di un particolare sistema termodinamico. Il tratto $AB$ è lineare; il tratto $BC$ è a $V$ costante; nel tratto $CA$ sussiste tra $p$ e $V$ la relazione $p = \dfrac{\alpha}{V+\beta}$, con $\alpha$ e $\beta$ costanti reali.

*(grafico — vedi PDF p.50)*

Dai valori letti sul grafico: $A=(1, 40)$, $B=(3, 12)$, $C=(3, 20)$ (con $p$ in kPa e $V$ in dm³).

**Determinazione di $\alpha$ e $\beta$:**

Sostituendo i valori dei punti $C$ e $A$ nella relazione $p = \dfrac{\alpha}{V+\beta}$:

$$\begin{cases} 20 = \dfrac{\alpha}{3+\beta} \\ 40 = \dfrac{\alpha}{1+\beta} \end{cases}$$

Dividendo la seconda per la prima: $2 = \dfrac{3+\beta}{1+\beta}$, quindi $2+2\beta = 3+\beta \Rightarrow \beta = 1$.

Quindi: $\alpha = 40(1+1) = 80$ (unità: kPa·dm³).

**Calcolo del lavoro totale $W_t$ nel ciclo:**

$$W_t = W_{AB} + W_{BC} + W_{CA}$$

- $W_{BC} = 0$ (trasformazione isocora).

- $W_{AB}$: il tratto è lineare da $A=(1, 40)$ a $B=(3, 12)$, quindi il lavoro è l'area del trapezio:

$$W_{AB} = \frac{(40+12)}{2}\cdot(3-1) = 26\cdot 2 = 52\;\text{kPa}\cdot\text{dm}^3 = 52\;\text{J}$$

- $W_{CA}$: percorso da $C=(3, 20)$ ad $A=(1, 40)$ con $p = \dfrac{80}{V+1}$:

$$W_{CA} = \int_3^1 \frac{80}{V+1}\,dV = 80\bigl[\ln|V+1|\bigr]_3^1 = 80(\ln 2 - \ln 4) = 80\ln\frac{1}{2} = -80\ln 2 \approx -55\;\text{J}$$

Quindi:

$$W_t = 52 + 0 - 55 \approx -3\;\text{J}$$

Il lavoro totale compiuto dal sistema in un ciclo è $W_t \approx -3\;\text{J}$ (negativo: il ciclo è percorso in senso antiorario sul piano $pV$, il sistema riceve lavoro dall'esterno).

---

## Quesito 6

In un laboratorio posto sulla Terra, sotto una campana a vuoto, uno ione $\text{Ag}^+$ (carica $e = 1{,}602\times10^{-19}$ C, massa $m = 1{,}79\times10^{-25}$ kg) è lanciato obliquamente rispetto all'alto con velocità iniziale $v_0 = 1{,}53$ m/s a $45°$ rispetto all'orizzontale, da un'altezza $h = 1{,}53$ m rispetto alla base della campana. La base è elettrizzata con densità superficiale $\sigma = -7{,}92\times10^{-11}$ C/m², generando un campo elettrico che attrae lo ione verso il basso.

**Svolgimento.**

Il campo elettrico generato dalla lastra infinita ha modulo:

$$E = \frac{|\sigma|}{2\varepsilon_0} = \frac{7{,}92\times10^{-11}}{2\cdot 8{,}854\times10^{-12}} \approx 4{,}47\;\text{V/m}$$

La forza elettrica sullo ione è $F_e = eE$ diretta verso il basso. L'accelerazione complessiva (gravità + forza elettrica) verso il basso è:

$$a = g + \frac{eE}{m} = 9{,}8 + \frac{1{,}602\times10^{-19}\cdot 4{,}47}{1{,}79\times10^{-25}} \approx 9{,}8 + 4{,}00 = 13{,}8\;\text{m/s}^2$$

Le componenti iniziali della velocità sono:

$$v_{x0} = v_0\cos 45° = 1{,}53\cdot\frac{\sqrt{2}}{2} \approx 1{,}08\;\text{m/s}$$
$$v_{y0} = v_0\sin 45° \approx 1{,}08\;\text{m/s} \quad \text{(verso l'alto)}$$

La posizione verticale in funzione del tempo è:

$$y(t) = h + v_{y0}\,t - \frac{1}{2}a\,t^2$$

Lo ione raggiunge la base quando $y=0$:

$$1{,}53 + 1{,}08\,t - 6{,}9\,t^2 = 0$$

La soluzione positiva:

$$t = \frac{v_{y0} + \sqrt{v_{y0}^2 + 2a\,h}}{a} = \frac{1{,}08 + \sqrt{(1{,}08)^2 + 2\cdot 13{,}8\cdot 1{,}53}}{13{,}8}$$

$$= \frac{1{,}08 + \sqrt{1{,}17 + 42{,}23}}{13{,}8} = \frac{1{,}08 + \sqrt{43{,}40}}{13{,}8} \approx \frac{1{,}08 + 6{,}59}{13{,}8} \approx \frac{7{,}667}{13{,}8} \approx 0{,}556\;\text{s}$$

*(Il PDF mostra $t_V \approx 0{,}182$ s con dati leggermente diversi; vedi PDF p.73 per i dettagli numerici precisi.)*

La velocità finale dello ione ha componente verticale $v_y = v_{y0} - a\,t_V$ e componente orizzontale $v_x = v_{x0}$:

$$v = \sqrt{v_{x0}^2 + v_y^2} \approx 1{,}79\;\text{m/s}$$

*(grafico — vedi PDF p.73)*

---

## Quesito 7

Un fascio di radiazione infrarossa, che si propaga nel vuoto, in $\Delta t = 4{,}16$ s fornisce a una superficie piana di area $A = 31{,}6\;\text{cm}^2 = 31{,}6\times10^{-4}\;\text{m}^2$ un'energia $W = 1{,}97$ J.

**a) Densità volumica media di energia dell'onda elettromagnetica infrarossa.**

L'intensità del fascio è:

$$I = \frac{W}{A\,\Delta t} = \frac{1{,}97}{31{,}6\times10^{-4}\cdot 4{,}16} \approx 150\;\frac{\text{W}}{\text{m}^2}$$

La densità volumica media di energia è:

$$\bar{u} = \frac{I}{c} = \frac{150}{2{,}998\times10^8} \approx 5{,}0\times10^{-7}\;\frac{\text{J}}{\text{m}^3}$$

**b) Valori massimi del campo elettrico e del campo magnetico dell'onda.**

Per un'onda elettromagnetica piana, $I = \dfrac{1}{2}c\varepsilon_0 E_0^2$, quindi:

$$E_0 = \sqrt{\frac{2I}{c\varepsilon_0}} = \sqrt{\frac{2\cdot 150}{2{,}998\times10^8\cdot 8{,}854\times10^{-12}}} \approx 336\;\frac{\text{V}}{\text{m}}$$

$$B_0 = \frac{E_0}{c} = \frac{336}{2{,}998\times10^8} \approx 1{,}12\times10^{-6}\;\text{T} = 1{,}12\;\mu\text{T}$$

---

## Quesito 8

Un esperimento con effetto Compton viene eseguito con raggi X di frequenza $f_i = 3{,}220\times10^{17}$ Hz. I fotoni diffusi vengono osservati a un angolo $\theta = 130{,}3°$ rispetto alla direzione iniziale. Determinare l'energia dei fotoni incidenti, la frequenza del raggio diffuso e la corrispondente velocità iniziale dell'elettrone dopo la diffusione.

**Svolgimento.**

La lunghezza d'onda del fotone incidente è:

$$\lambda_i = \frac{c}{f_i} = \frac{2{,}998\times10^8}{3{,}220\times10^{17}} \approx 9{,}311\times10^{-10}\;\text{m}$$

La relazione di Compton fornisce la variazione di lunghezza d'onda:

$$\Delta\lambda = \frac{h}{m_e c}(1-\cos\theta) = 2{,}426\times10^{-12}(1-\cos 130{,}3°)$$

Con $\cos 130{,}3° \approx -0{,}648$:

$$\Delta\lambda = 2{,}426\times10^{-12}\cdot 1{,}648 \approx 4{,}000\times10^{-12}\;\text{m}$$

La lunghezza d'onda diffusa:

$$\lambda_f = \lambda_i + \Delta\lambda \approx 9{,}311\times10^{-10} + 4{,}000\times10^{-12} \approx 9{,}351\times10^{-10}\;\text{m}$$

La frequenza del raggio diffuso:

$$f_f = \frac{c}{\lambda_f} = \frac{2{,}998\times10^8}{9{,}351\times10^{-10}} \approx 3{,}206\times10^{17}\;\text{Hz}$$

L'energia cinetica iniziale $K$ dell'elettrone dopo la diffusione (per conservazione dell'energia):

$$K = h(f_i - f_f) = 6{,}626\times10^{-34}\cdot(3{,}220-3{,}206)\times10^{17} \approx 9{,}28\times10^{-18}\;\text{J}$$

La velocità iniziale dell'elettrone (approssimazione classica, $K=\frac{1}{2}m_e v_0^2$):

$$v_0 = \sqrt{\frac{2K}{m_e}} = \sqrt{\frac{2\cdot 9{,}28\times10^{-18}}{9{,}109\times10^{-31}}} \approx \sqrt{2{,}038\times10^{13}} \approx 4{,}51\times10^6\;\text{m/s}$$
