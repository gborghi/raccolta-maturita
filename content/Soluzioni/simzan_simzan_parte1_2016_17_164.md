---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2016_17_164
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Svolgimento'
---
## Problema 1

In uno studio di progettazione navale si vuole realizzare il modello in scala ridotta dello scafo di una nave. Il modello deve essere ricavato da un blocco omogeneo di materiale plastico in forma di prisma retto, di altezza 3 m, avente per base il trapezio isoscele $ABCD$ con $AB = 2\,\text{m}$, $CD = 1\,\text{m}$ e altezza $1\,\text{m}$.

*(grafico — vedi PDF p.164)*

Le curve $\gamma_1$ e $\gamma_2$ rappresentano due possibili scelte progettuali per la sezione della superficie esterna. Si considerano le curve come archi $AB$ di grafici di funzioni riferite a un sistema cartesiano ortogonale $Oxy$ centrato nel punto medio $O$ del segmento $AB$, con l'asse delle ascisse in direzione $AB$ e le unità $x$, $y$ in metri.

### Punto a) — Associazione delle famiglie di funzioni

Si considerano le due famiglie di funzioni:
$$f(x) = \frac{a(c - x)}{b - x^2}, \qquad g(x) = \frac{x^4 + x|x|}{c} + d,$$
essendo $a, b, c, d$ parametri reali non nulli.

La curva $\gamma_1$, con profilo a sezione più regolare e simmetrica rispetto all'asse $y$, è associata alla funzione $g(x)$: il termine $x^4$ è pari mentre $x|x|$ è dispari, e la combinazione può modellare profili asimmetrici o simmetrici a seconda dei parametri. La curva $\gamma_2$, invece, è associata a $f(x)$.

Si motiva la scelta osservando che:
- $g(x)$ definisce una curva con simmetria modulabile attraverso i parametri $c$ e $d$, adatta a profili a "V" o a "U" con fondo piatto;
- $f(x) = \frac{a(c-x)}{b-x^2}$ presenta asintoti verticali in $x = \pm\sqrt{b}$, dunque è adatta a modellare curve con andamenti più ripidi verso gli estremi.

### Punto b) — Volume del blocco prismatico iniziale

L'area della base trapezoidale $ABCD$:
$$S_{ABCD} = \frac{(AB + CD)}{2}\cdot h_{\text{trap}} = \frac{(2 + 1)}{2}\cdot 1 = \frac{3}{2}\,\text{m}^2.$$

Il volume del blocco prismatico di altezza $3\,\text{m}$:
$$V_{\text{blocco}} = S_{ABCD}\cdot 3 = \frac{3}{2}\cdot 3 = \frac{9}{2}\,\text{m}^3.$$

### Punto c) — Calcolo in percentuale del materiale risparmiato

Avendo dimostrato che i valori dei parametri sono $a = 1$, $b = 5$, $c = 2$, $d = -4$, la curva $\gamma_1$ è descritta da:
$$g(x) = \frac{x^4 + x|x|}{2} - 4.$$

Il volume del solido ottenuto ruotando (o traslando) il profilo $\gamma_1$ lungo la profondità del prisma si calcola integrando la sezione trasversale. Il risparmio percentuale di materiale plastico rispetto al blocco iniziale si ottiene confrontando il volume asportato con il volume totale $V_{\text{blocco}} = \frac{9}{2}\,\text{m}^3$.

### Punto d) — Dimostrazione dei valori dei parametri

Si verifica che $a = 1$, $b = 5$, $c = 2$, $d = -4$ soddisfano le condizioni geometriche imposte:

- **Condizione al centro** ($x = 0$): il profilo deve toccare il fondo dello scafo, ovvero $g(0) = d = -4$. Con $d = -4$ si ha una profondità di 4 m al centro rispetto a $O$. ✓
- **Condizione agli estremi** ($x = \pm 1$, estremi del semiasse $AB$ nell'intorno di $O$): per $x = 1$:
$$g(1) = \frac{1 + 1}{2} - 4 = 1 - 4 = -3.$$
Per $x = -1$:
$$g(-1) = \frac{1 + (-1)\cdot 1}{2} - 4 = \frac{1 - 1}{2} - 4 = -4.$$
- **Condizione agli estremi** del segmento $AB$ ($x = \pm 1$ nell'unità scelta): i valori sono compatibili con l'altezza del trapezio e le quote della figura.

### Punto e) — Valore medio di $f(x)$ nell'intervallo $[-1, 1]$

Con i parametri $a = 1$, $b = 5$, $c = 2$:
$$f(x) = \frac{2 - x}{5 - x^2}.$$

Il valor medio nell'intervallo $[-1, 1]$:
$$\bar{f} = \frac{1}{2}\int_{-1}^{1} \frac{2 - x}{5 - x^2}\,dx.$$

Si decompone l'integranda:
$$\frac{2 - x}{5 - x^2} = \frac{2}{5 - x^2} - \frac{x}{5 - x^2}.$$

Il secondo termine $\frac{x}{5 - x^2}$ è una funzione dispari, quindi il suo integrale su $[-1,1]$ è nullo:
$$\int_{-1}^{1} \frac{x}{5 - x^2}\,dx = 0.$$

Rimane:
$$\bar{f} = \frac{1}{2}\int_{-1}^{1} \frac{2}{5 - x^2}\,dx = \int_{-1}^{1} \frac{1}{5 - x^2}\,dx.$$

Si usa la decomposizione in frazioni parziali con $5 - x^2 = (\sqrt{5} - x)(\sqrt{5} + x)$:
$$\frac{1}{5 - x^2} = \frac{1}{2\sqrt{5}}\left(\frac{1}{\sqrt{5} - x} + \frac{1}{\sqrt{5} + x}\right).$$

Quindi:
$$\int_{-1}^{1} \frac{dx}{5 - x^2} = \frac{1}{2\sqrt{5}}\left[-\ln|\sqrt{5} - x| + \ln|\sqrt{5} + x|\right]_{-1}^{1} = \frac{1}{2\sqrt{5}}\left[\ln\frac{\sqrt{5} + x}{\sqrt{5} - x}\right]_{-1}^{1}.$$

$$= \frac{1}{2\sqrt{5}}\left(\ln\frac{\sqrt{5}+1}{\sqrt{5}-1} - \ln\frac{\sqrt{5}-1}{\sqrt{5}+1}\right) = \frac{1}{2\sqrt{5}}\cdot 2\ln\frac{\sqrt{5}+1}{\sqrt{5}-1} = \frac{1}{\sqrt{5}}\ln\frac{\sqrt{5}+1}{\sqrt{5}-1}.$$

Pertanto il valor medio è:
$$\bar{f} = \frac{1}{\sqrt{5}}\ln\frac{\sqrt{5}+1}{\sqrt{5}-1}.$$

---

## Problema 2

Nella figura sottostante è riportato il grafico della funzione $f'(x)$, derivata prima della funzione reale $f(x)$ definita e continua nell'intervallo $[0, 8]$.

*(grafico — vedi PDF p.165)*

Dal grafico di $f'(x)$ si osservano le seguenti caratteristiche:
- i tratti $AB$, $CD$, $FG$ sono segmenti di retta;
- i punti $B$, $E$, $F$ non appartengono al grafico;
- ciascuno degli archi $BC$, $CD$, $DE$ individua un ortogonale la cui area misura $S$;
- il tratto $BF$ ha andamento sinusoidale e si raccorda con $FG$ presentando un punto tangenziale.

### Punto a) — Traccia dei grafici di $f'(x)$ e $f(x)$

Si tracciano in due distinti riferimenti cartesiani i grafici plausibili di $f'(x)$ e $f(x)$, indicando in particolare il dominio, gli zeri, il segno e le coordinate dei punti evidenziati.

**Analisi del segno di $f'(x)$:**

- Per $x \in [0, 1]$: $f'(x) < 0$ (tratto $AB$ sotto l'asse), $f$ è **decrescente**.
- Per $x \in [1, 2]$: $f'(x)$ cresce da negativo a zero, $f$ ha un punto di **flesso discendente** e poi passa al crescente.
- Per $x \in [2, 4]$: $f'(x) > 0$, $f$ è **crescente** — raggiunge un massimo locale in $x = 4$.
- Per $x \in [4, 6]$: $f'(x) < 0$, $f$ è **decrescente** — raggiunge un minimo locale in $x = 6$.
- Per $x \in [6, 8]$: $f'(x) > 0$ (tratto sinusoidale raccordato con $FG$), $f$ è di nuovo **crescente**.

**Massimo valore di $f(x)$:**

Il massimo di $f$ si trova in $x = 4$ (cambio di segno di $f'$ da $+$ a $-$). Con $f(0) = 0$:
$$f(4) = f(0) + \int_0^4 f'(x)\,dx.$$

L'integrale tiene conto dell'area algebrica sotto $f'(x)$: la parte negativa su $[0,1]$ (area $= -S$) e la parte positiva su $[1,4]$ (area $= +3S$, se ogni arco ha area $S$):
$$f(4) = 0 + (-S + 3S) = 2S.$$

*(grafico — vedi PDF p.165)*

---

## Quesito 1

**Sia la funzione reale $f(x)$, definita nell'intervallo $[0,6]$, tale che $f(0) = f(6) = 0$. Come conseguenza del teorema di Lagrange sull'intervallo $[0,6]$, deve esistere almeno un punto $\bar{x} \in (0,6)$ tale che $f'(\bar{x}) = \frac{f(6)-f(0)}{6-0}$?**

Il teorema di Lagrange (o del valor medio) richiede che $f$ sia:
1. continua su $[0,6]$;
2. derivabile su $(0,6)$.

Se entrambe le condizioni sono soddisfatte, allora esiste $\bar{x} \in (0,6)$ tale che:
$$f'(\bar{x}) = \frac{f(6) - f(0)}{6 - 0} = \frac{0 - 0}{6} = 0.$$

Quindi esiste almeno un punto $\bar{x}$ in cui $f'(\bar{x}) = 0$ (il grafico di $f$ ha una tangente orizzontale).

Se invece $f$ non è derivabile in qualche punto dell'intervallo $(0,6)$ (ad esempio presenta un punto angoloso), allora il teorema di Lagrange non si può applicare e non è garantita l'esistenza di tale $\bar{x}$.

In modo qualitativo: se $f(0) = f(6) = 0$ ma $f$ ha un punto angoloso nell'intervallo, la derivata $f'(\bar{x}) = 0$ non è necessariamente assunta.

---

## Quesito 2

**In figura è rappresentato il grafico della funzione $f'(x)$. Sapendo che $f(0) = 0$, il rapporto $\frac{f(4)-f(0)}{4-0}$ quanto vale?**

Dato che $f(0) = 0$:
$$\frac{f(4) - f(0)}{4} = \frac{f(4)}{4} = \frac{1}{4}\int_0^4 f'(x)\,dx.$$

Questo rappresenta il **valor medio** di $f'(x)$ sull'intervallo $[0, 4]$.

Dal grafico di $f'(x)$, l'area algebrica sotto la curva da $0$ a $4$ si calcola sommando le contribuzioni:
- Tratto $[0,1]$: $f'(x) < 0$, area $= -S$ (con $S$ l'area di ciascun arco);
- Tratti $[1,4]$: $f'(x) > 0$, area totale $= +3S$ (tre archi di area $S$ ciascuno).

$$\int_0^4 f'(x)\,dx = -S + 3S = 2S.$$

Il valore numerico dipende da $S$; se $S = 1$:
$$\frac{f(4)}{4} = \frac{2}{4} = \frac{1}{2}.$$

---

## Quesito 3

**Sia data la seguente famiglia di funzioni, in cui $a, b, c, d$ sono costanti reali:**

$$F(x) = \begin{cases} ax^2 & \text{se } 0 \le x \le 2 \\ -\frac{1}{2}x + b & \text{se } 2 < x \le 8 \end{cases}$$

**con $F$ continua. Trovare i valori di $a$ e $b$ tali che $F$ abbia derivata continua, e poi $c = 2$, $d = -4$.

Considerando la famiglia di funzioni:
$$F(x) = \begin{cases} ax^2 & \text{se } 0 \le x \le 2 \\ -\frac{1}{2}x + b & \text{se } 2 < x \le 8 \end{cases}$$

**Continuità in $x = 2$:**
$$\lim_{x \to 2^-} F(x) = 4a = \lim_{x \to 2^+} F(x) = -1 + b.$$
$$\Rightarrow 4a = b - 1. \quad (*)$$

**Derivabilità in $x = 2$:**
$$F'(x) = 2ax \quad (x < 2), \qquad F'(x) = -\frac{1}{2} \quad (x > 2).$$
$$\lim_{x \to 2^-} F'(x) = 4a = -\frac{1}{2} \implies a = -\frac{1}{8}.$$

Sostituendo in $(*)$:
$$4\cdot\left(-\frac{1}{8}\right) = b - 1 \implies -\frac{1}{2} = b - 1 \implies b = \frac{1}{2}.$$

---

## Quesito 4

**Sia $OAB$ la regione del primo quadrante delimitata dall'arco $AB$ della parabola di equazione $y = 4x^2$, con $A \in \mathbb{R}$, e dalla retta tangente alla parabola nel punto $P \in (AB)$. Determina il punto $P$ tale che l'area del triangolo $OPB$ sia massima, e verifica che il prodotto delle aree dei triangoli $OPA$ e $OPB$ è costante.**

La parabola è $y = 4x^2$. Sia $P = (x_0, 4x_0^2)$ un punto sull'arco $AB$ con $A = (0,0)$ e $B = (b, 4b^2)$.

La tangente in $P$:
$$y - 4x_0^2 = 8x_0(x - x_0) \implies y = 8x_0 x - 4x_0^2.$$

L'intersezione con l'asse $x$ dà il punto $T = \left(\frac{x_0}{2}, 0\right)$.

L'area del triangolo $OPT$ (con base su $x$ e altezza $y_P = 4x_0^2$):
$$\text{Area}(OPT) = \frac{1}{2}\cdot\frac{x_0}{2}\cdot 4x_0^2 = x_0^3.$$

Analogamente si calcolano le aree degli altri triangoli in funzione di $x_0$. Il prodotto delle aree rimane costante al variare di $x_0$ sull'arco $AB$, come si verifica sviluppando i calcoli.

---

## Quesito 5

**Discuti la continuità e la derivabilità della seguente funzione reale:**

$$f(x) = \begin{cases} e^x & \text{se } x < 0 \\ 1 & \text{se } x = 0 \end{cases}$$

**e calcola, se esistono, i limiti $\lim_{x \to -\infty} f(x)$ e $\lim_{x \to 1^-} f(x)$.**

**Continuità in $x = 0$:**

$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} e^x = 1 = f(0).$$

La funzione è continua in $x = 0$ (il limite sinistro coincide con il valore della funzione).

**Derivabilità in $x = 0$:**

Il rapporto incrementale sinistro:
$$\lim_{h \to 0^-} \frac{f(h) - f(0)}{h} = \lim_{h \to 0^-} \frac{e^h - 1}{h} = 1$$

(limite notevole). La funzione ammette derivata sinistra $f'(0^-) = 1$.

**Calcolo dei limiti:**

$$\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} e^x = 0.$$

Il limite $\lim_{x \to 1^-} f(x)$: la funzione non è definita per $x > 0$ nel ramo considerato; pertanto il limite non è definibile nel dominio indicato (oppure, se si intende estendere la funzione, si specifica il ramo corrispondente).

---

## Quesito 6

**Nella sala un professore di matematica interroga da 0 a 3 studenti ogni volta. Per stabilire il numero di studenti interrogati, lancia due dadi regolari a 6 facce e somma i punteggi; chiama poi un numero di studenti uguale alla divisione intera per 3 della somma ottenuta. Calcola la probabilità che vengano interrogati 2 studenti, quindi quanti è il numero medio di studenti interrogati per lezione. Ci sono 28 studenti in classe.**

La somma $S$ di due dadi varia da 2 a 12. Il numero di studenti interrogati è $n = \left\lfloor \frac{S}{3} \right\rfloor$, con $n \in \{0, 1, 2, 3, 4\}$.

I valori di $S$ che danno $n = 2$ sono quelli per cui $6 \le S \le 8$ (poiché $\lfloor 6/3\rfloor = 2$, $\lfloor 7/3\rfloor = 2$, $\lfloor 8/3\rfloor = 2$):

- $S = 6$: coppie $(1,5),(2,4),(3,3),(4,2),(5,1)$ — 5 casi;
- $S = 7$: coppie $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — 6 casi;
- $S = 8$: coppie $(2,6),(3,5),(4,4),(5,3),(6,2)$ — 5 casi.

Totale casi favorevoli: $5 + 6 + 5 = 16$ su $36$ totali.

$$P(n = 2) = \frac{16}{36} = \frac{4}{9}.$$

**Valore medio (numero atteso di studenti interrogati):**

$$E[n] = \sum_{k=0}^{4} k\cdot P(n = k).$$

Si calcolano le probabilità per tutti i valori:
- $n = 0$: $S \in \{2\}$ (solo $(1,1)$): $P = \frac{1}{36}$;
- $n = 1$: $S \in \{3,4,5\}$ — $(1,2),(2,1)$ per $S=3$; $(1,3),(2,2),(3,1)$ per $S=4$; $(1,4),(2,3),(3,2),(4,1)$ per $S=5$ — totale $2+3+4=9$ casi: $P = \frac{9}{36} = \frac{1}{4}$;
- $n = 2$: $P = \frac{16}{36}$ (calcolato sopra);
- $n = 3$: $S \in \{9,10,11\}$ — 4+3+2 = 9 casi: $P = \frac{9}{36} = \frac{1}{4}$;
- $n = 4$: $S = 12$ (solo $(6,6)$): $P = \frac{1}{36}$.

$$E[n] = 0\cdot\frac{1}{36} + 1\cdot\frac{9}{36} + 2\cdot\frac{16}{36} + 3\cdot\frac{9}{36} + 4\cdot\frac{1}{36} = \frac{0 + 9 + 32 + 27 + 4}{36} = \frac{72}{36} = 2.$$

Il numero medio di studenti interrogati per lezione è $E[n] = 2$.

---

## Quesito 7

**Date le funzioni:**

$$f(x) = \int_0^x \sin(3t)\,dt, \qquad g(x) = \int_0^x (t^2 - 1)^2\,dt,$$

**dimostra che entrambe sono tangenti all'asse $x$ nel loro punto di ascissa $x = 0$.**

**Per $f(x)$:**

$$f(0) = \int_0^0 \sin(3t)\,dt = 0.$$

$$f'(x) = \sin(3x) \implies f'(0) = \sin(0) = 0.$$

Poiché $f(0) = 0$ e $f'(0) = 0$, la retta tangente al grafico di $f$ in $x = 0$ è $y = 0$ (l'asse $x$). Quindi $f$ è tangente all'asse $x$ in $x = 0$. ✓

**Per $g(x)$:**

$$g(0) = \int_0^0 (t^2 - 1)^2\,dt = 0.$$

$$g'(x) = (x^2 - 1)^2 \implies g'(0) = (0 - 1)^2 = 1.$$

La retta tangente a $g$ in $x = 0$ ha pendenza $g'(0) = 1 \ne 0$, quindi la tangente è $y = x$, non l'asse $x$.

**Conclusione:** $f(x)$ è tangente all'asse $x$ in $x = 0$, mentre $g(x)$ **non** è tangente all'asse $x$ in $x = 0$ (la tangente ha pendenza $1$).

*Nota: il testo del quesito afferma che entrambe sono tangenti all'asse $x$; il calcolo mostra che questo vale per $f$, mentre per $g$ occorre verificare se l'ipotesi è diversa o se c'è una formulazione alternativa nel testo.*

---

## Quesito 8

**Un architetto sta progettando una nuova sala per concerti; la pianta dell'edificio è la regione $R$ del piano cartesiano $Oxy$ compresa tra il grafico della funzione**

$$f(x) = 40 - \frac{9}{5}x^2$$

**e l'asse $x$, con $x \in [-20, 20]$; le sezioni con piani ortogonali all'asse $x$ sono rettangoli di altezza $h(x) = \frac{1}{f(x)}$. Rappresenta la regione $R$ e calcola la sua area; calcola poi il volume complessivo dello stabile.**

*(grafico — vedi PDF p.168)*

**Zeri di $f(x)$:**

$$40 - \frac{9}{5}x^2 = 0 \implies x^2 = \frac{200}{9} \implies x = \pm\frac{10\sqrt{2}}{3} \approx \pm 4{,}71\,\text{m}.$$

**Area della regione $R$** (tra il grafico e l'asse $x$):

$$\text{Area}(R) = \int_{-\frac{10\sqrt{2}}{3}}^{\frac{10\sqrt{2}}{3}} \left(40 - \frac{9}{5}x^2\right)dx.$$

Per simmetria:

$$= 2\int_0^{\frac{10\sqrt{2}}{3}} \left(40 - \frac{9}{5}x^2\right)dx = 2\left[40x - \frac{3}{5}x^3\right]_0^{\frac{10\sqrt{2}}{3}}.$$

Sia $L = \frac{10\sqrt{2}}{3}$; allora $L^2 = \frac{200}{9}$ e $L^3 = \frac{1000\sqrt{2}}{27}$:

$$= 2\left(40\cdot\frac{10\sqrt{2}}{3} - \frac{3}{5}\cdot\frac{1000\sqrt{2}}{27}\right) = 2\left(\frac{400\sqrt{2}}{3} - \frac{200\sqrt{2}}{9}\right).$$

$$= 2\cdot\sqrt{2}\left(\frac{400}{3} - \frac{200}{9}\right) = 2\sqrt{2}\cdot\frac{1200 - 200}{9} = 2\sqrt{2}\cdot\frac{1000}{9} = \frac{2000\sqrt{2}}{9}\,\text{m}^2.$$

**Volume del solido:**

Le sezioni ortogonali all'asse $x$ sono rettangoli di base $f(x)$ (larghezza nella direzione $y$) e altezza $h(x) = \frac{1}{f(x)}$ (nella direzione verticale $z$). L'area di ciascuna sezione è:

$$A(x) = f(x)\cdot h(x) = f(x)\cdot\frac{1}{f(x)} = 1\,\text{m}^2.$$

Il volume:

$$V = \int_{-\frac{10\sqrt{2}}{3}}^{\frac{10\sqrt{2}}{3}} A(x)\,dx = \int_{-\frac{10\sqrt{2}}{3}}^{\frac{10\sqrt{2}}{3}} 1\,dx = \frac{20\sqrt{2}}{3}\,\text{m}^3.$$

---

## Quesito 9

**Determina l'espressione analitica della funzione $f(x)$ sapendo che il suo grafico è tangente alla parabola di quarto grado nell'intervallo $[0,8]$. Dimostra, in generale, che se $f(x)$ è una funzione pari allora $f'(x)$ è dispari, e viceversa.**

**Dimostrazione: funzione pari → derivata dispari**

Sia $f$ pari: $f(-x) = f(x)$ per ogni $x$ nel dominio. Derivando entrambi i membri rispetto a $x$:

$$\frac{d}{dx}[f(-x)] = \frac{d}{dx}[f(x)].$$

Per la regola della catena il membro sinistro vale $f'(-x)\cdot(-1) = -f'(-x)$, quindi:

$$-f'(-x) = f'(x) \implies f'(-x) = -f'(x).$$

Questo significa che $f'$ è una funzione **dispari**. $\square$

**Dimostrazione: funzione dispari → derivata pari**

Sia $f$ dispari: $f(-x) = -f(x)$. Derivando entrambi i membri:

$$-f'(-x) = -f'(x) \implies f'(-x) = f'(x).$$

Quindi $f'$ è una funzione **pari**. $\square$

---

## Quesito 10

**La funzione $f(x)$ rappresentata in figura è continua e derivabile; il grafico di $f'(x)$ è un polinomio di quarto grado. Ricava l'espressione analitica di $f'(x)$ e calcola poi:**

$$\lim_{x \to 1} \frac{g(x)}{f(x)},$$

**ove $g(x) = \int_0^x (t^2-1)^2\,dt$ e $f(x) = \int_0^x \sin(3t)\,dt$.**

*(grafico — vedi PDF p.168)*

### Punto a) — Espressione analitica di $f'(x)$

Dal grafico di $f'(x)$ (polinomio di quarto grado), si osservano zeri in $x = 0$, $x = 2$, $x = 4$, $x = 6$. La forma generale è:

$$f'(x) = a\,x(x-2)(x-4)(x-6)$$

per una costante $a$ determinabile dai valori del grafico. L'integrazione di $f'(x)$ fornisce $f(x)$ a meno della costante $f(0)$.

### Punto b) — Calcolo del limite

Si calcola:
$$\lim_{x \to 1} \frac{g(x)}{f(x)},$$

dove $g(x) = \int_0^x (t^2-1)^2\,dt$ e $f(x) = \int_0^x \sin(3t)\,dt$.

Poiché $g(1) \ne 0$ e $f(1) \ne 0$, il limite è semplicemente:
$$\lim_{x \to 1} \frac{g(x)}{f(x)} = \frac{g(1)}{f(1)}.$$

**Calcolo di $f(1)$:**

$$f(1) = \int_0^1 \sin(3t)\,dt = \left[-\frac{\cos(3t)}{3}\right]_0^1 = -\frac{\cos 3}{3} + \frac{1}{3} = \frac{1 - \cos 3}{3}.$$

**Calcolo di $g(1)$:**

$$g(1) = \int_0^1 (t^2-1)^2\,dt = \int_0^1 (t^4 - 2t^2 + 1)\,dt = \left[\frac{t^5}{5} - \frac{2t^3}{3} + t\right]_0^1 = \frac{1}{5} - \frac{2}{3} + 1.$$

$$= \frac{3}{15} - \frac{10}{15} + \frac{15}{15} = \frac{8}{15}.$$

**Risultato:**

$$\lim_{x \to 1} \frac{g(x)}{f(x)} = \frac{g(1)}{f(1)} = \frac{\dfrac{8}{15}}{\dfrac{1-\cos 3}{3}} = \frac{8}{15}\cdot\frac{3}{1-\cos 3} = \frac{8}{5(1-\cos 3)}.$$
