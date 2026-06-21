---
tipo: soluzione
prova_stem: 2005_suppletiva_2005_pni_questionario_120
pdf: Prova_Maturita_2005.pdf
source: text
title: Soluzioni — 2005_suppletiva_2005_pni_questionario_120
---

# Soluzioni — 2005_suppletiva_2005_pni_questionario_120

## Quesito 1

È dato un trapezio rettangolo, in cui le bisettrici degli angoli adiacenti al lato obliquo si intersecano in un punto del lato perpendicolare alle basi. Dimostrare che il triangolo avente per vertici questo punto e gli estremi del lato obliquo è rettangolo e trovare quale relazione lega il lato obliquo alle basi del trapezio.

Risulta $2\alpha + 2\beta = \pi$, quindi $\alpha + \beta = \dfrac{\pi}{2}$; pertanto il triangolo $ABE$ è rettangolo in $E$.

Il triangolo $ABE$ è simile ai triangoli $BCE$ e $ADE$; risulta in particolare:

$$\frac{AB}{BE} = \frac{BE}{BC} \implies AB \cdot BC = BE^2$$

$$\frac{AB}{AE} = \frac{AE}{AD} \implies AB \cdot AD = AE^2$$

Sommando membro a membro nelle ultime due uguaglianze si ha:

$$AB \cdot BC + AB \cdot AD = BE^2 + AE^2 \implies AB(BC + AD) = AB^2 \implies BC + AD = AB$$

Il lato obliquo è uguale alla somma delle due basi.

## Quesito 2

Siano $AB$, $AC$, $AD$ tre spigoli di un cubo. Sapendo che uno spigolo è lungo $s$, calcolare la distanza del vertice $A$ dal piano dei punti $B$, $C$, $D$.

Il piede dell'altezza $G$ relativa alla base $BCD$ della piramide (retta) $ABCD$ è l'incentro del triangolo equilatero $BCD$, quindi anche il baricentro; per una nota proprietà del baricentro di un triangolo si ha che $CG$ è i $2/3$ della mediana uscente da $C$, che è anche altezza del triangolo equilatero $BCD$ di lato $s\sqrt{2}$; l'altezza del triangolo $BCD$ vale quindi:

$$\frac{s\sqrt{2} \cdot \sqrt{3}}{2} = \frac{1}{2}\,s\sqrt{6}$$

Pertanto:

$$CG = \frac{2}{3} \cdot \frac{1}{2}\,s\sqrt{6} = \frac{1}{3}\,s\sqrt{6}$$

Essendo $AG$ perpendicolare al piano $BCD$, risulta $AG$ perpendicolare a $CG$: il triangolo $ACG$ è quindi rettangolo in $G$. Si ha allora:

$$AG^2 = AC^2 - CG^2 = s^2 - \left(\frac{1}{3}\,s\sqrt{6}\right)^2 = s^2 - \frac{2}{3}\,s^2 = \frac{1}{3}\,s^2 \implies AG = \frac{s\sqrt{3}}{3}$$

## Quesito 3

Alberto e Gianna sono chiamati a risolvere la seguente equazione: $\sin x \cos x = \dfrac{1}{4}$.

Alberto ottiene come soluzione gli angoli $x$ tali che:

$$x = \frac{\pi}{12} + k\pi \quad \text{oppure} \quad x = \frac{5\pi}{12} + k\pi \quad (k \in \mathbb{Z})$$

Gianna trova la seguente soluzione:

$$x = (-1)^k \frac{\pi}{12} + k\frac{\pi}{2} \quad (k \in \mathbb{Z})$$

È vero o è falso che Alberto ha risolto correttamente e Gianna no? Fornire una risposta esauriente.

Risolviamo l'equazione $\sin x \cos x = \dfrac{1}{4}$, equivalente a $2\sin x \cos x = \dfrac{1}{2}$, cioè $\sin(2x) = \dfrac{1}{2}$, da cui:

$$2x = \frac{\pi}{6} + 2k\pi \quad \text{oppure} \quad 2x = \frac{5\pi}{6} + 2k\pi$$

quindi:

$$x = \frac{\pi}{12} + k\pi \quad \text{oppure} \quad x = \frac{5\pi}{12} + k\pi$$

Quindi Alberto ha risposto correttamente.

Analizziamo la soluzione di Gianna.

Se $k$ è pari ($k = 2h$), la soluzione indicata da Gianna diventa:

$$x = (-1)^k \frac{\pi}{12} + k\frac{\pi}{2} = \frac{\pi}{12} + 2h \cdot \frac{\pi}{2} = \frac{\pi}{12} + h\pi$$

(uguale alla prima soluzione data da Alberto).

Se $k$ è dispari ($k = 2h+1$), la soluzione indicata da Gianna diventa:

$$x = (-1)^k \frac{\pi}{12} + k\frac{\pi}{2} = -\frac{\pi}{12} + (2h+1) \cdot \frac{\pi}{2} = \frac{5\pi}{12} + h\pi$$

(uguale alla seconda soluzione data da Alberto).

Quindi sia Alberto sia Gianna hanno risolto correttamente l'equazione.

## Quesito 4

Si consideri la seguente equazione in $x$: $(k-2)x^2 - (2k-1)x + (k+1) = 0$, dove $k$ è un parametro reale diverso da $2$. Indicate con $x'$ ed $x''$ le sue radici, calcolare i limiti di $x' + x''$ quando $k$ tende a $2$, a $+\infty$ e a $-\infty$.

$(k-2)x^2 - (2k-1)x + (k+1) = 0$, con $k \neq 2$.

Determiniamo la somma delle radici, dopo aver verificato che il discriminante dell'equazione è non negativo:

$$\Delta = (2k-1)^2 - 4(k-2)(k+1) = 9 \ge 0 \quad \text{per ogni } k$$

$$x' + x'' = -\frac{b}{a} = \frac{2k-1}{k-2}$$

Calcoliamo i limiti richiesti:

$$\lim_{k \to 2}(x' + x'') = \lim_{k \to 2} \frac{2k-1}{k-2} = \infty$$

$$\lim_{k \to \pm\infty}(x' + x'') = \lim_{k \to \pm\infty} \frac{2k-1}{k-2} = 2$$

## Quesito 5

Il limite della funzione $(1-x)^{1/x}$ per $x \to 0$:
- [A] è uguale ad $1$;
- [B] è uguale a $+\infty$;
- [C] non esiste;
- [D] è uguale ad $e$;
- [E] è uguale ad $\dfrac{1}{e}$,

essendo $e$ la base dei logaritmi naturali. Una sola risposta è corretta. Individuarla e fornirne una spiegazione esauriente.

Calcoliamo il limite proposto:

$$\lim_{x \to 0}(1-x)^{1/x} = \lim_{x \to 0}(1+(-x))^{\frac{1}{-x}\cdot(-1)} = \lim_{x \to 0}\left[(1+(-x))^{\frac{1}{-x}}\right]^{-1} = e^{-1} = \frac{1}{e}$$

Ricordiamo che, se $f(x) \to 0$, allora $[1+f(x)]^{1/f(x)}$ tende ad $e$ (conseguenza del limite notevole $\displaystyle\lim_{x \to \infty}\!\left(1+\frac{1}{x}\right)^{\!x} = e$).

La risposta corretta è quindi la **[E]**.

## Quesito 6

Dimostrare che, se la derivata di una funzione reale di variabile reale $f(x)$ è nulla per ogni $x$ di un dato intervallo $J$, allora $f(x)$ è costante in $J$.

Supponiamo che $f'(x) = 0$, $\forall x \in J$, e dimostriamo che $f(x) = \text{costante}$ in $J$.

Consideriamo l'intervallo chiuso $[a;\, x]$ contenuto in $J$; essendo la funzione derivabile in $J$ lo è anche in $[a;\, x]$; in tale intervallo la funzione è allora continua. Per il Teorema di Lagrange risulta:

$$\frac{f(x) - f(a)}{x - a} = f'(c), \quad \text{con } c \text{ interno all'intervallo } [a;\, x].$$

Ma per ipotesi $f'(c) = 0$, quindi $f(x) - f(a) = 0$ e pertanto $f(x) = f(a)$ per ogni $x$: la funzione è quindi costante in $J$.

## Quesito 7

Spiegare in maniera esauriente perché una funzione reale di variabile reale integrabile in un intervallo chiuso e limitato $[a, b]$ non necessariamente ammette primitiva in $[a, b]$.

Ricordiamo che (per il Teorema fondamentale del calcolo integrale, detto anche di Torricelli) se una funzione $f$ è continua in un intervallo chiuso e limitato $[a;\, b]$ allora è integrabile in tale intervallo, cioè esiste una funzione $F$, derivabile nel suddetto intervallo, tale che:

$$F'(x) = f(x), \quad \text{con } F(x) = \int_a^x f(t)\,dt$$

$F$ è quindi una primitiva di $f$. Quindi: se una funzione è continua in un intervallo chiuso e limitato ammette primitiva.

L'integrabilità di una funzione viene estesa al caso di una funzione non continua in un intervallo. Se per esempio abbiamo un punto di discontinuità nel punto $c$ interno all'intervallo, la funzione si dice integrabile (in senso improprio) se esistono finiti i seguenti limiti:

$$\lim_{k \to c^-} \int_a^k f(x)\,dx \quad \text{e} \quad \lim_{k \to c^+} \int_k^b f(x)\,dx$$

e si pone:

$$\int_a^b f(x)\,dx = \lim_{k \to c^-} \int_a^k f(x)\,dx + \lim_{k \to c^+} \int_k^b f(x)\,dx$$

Diamo un esempio di funzione integrabile (in senso improprio) in un intervallo $[a;\, b]$ che non ammette primitiva nell'intervallo:

$$f(x) = \begin{cases} x+1 & \text{se } -1 \le x < 0 \\ -x+1 & \text{se } 0 < x \le 1 \\ 0 & \text{se } x = 0 \end{cases}$$

*(grafico — vedi PDF p.5)*

## Quesito 8

La funzione è chiaramente integrabile nell'intervallo $[-1;\, 1]$ e l'integrale vale $1$ (si pensi al significato geometrico dell'integrale definito), ma non ammette primitiva in tale intervallo. Un'eventuale primitiva $F(x)$ dovrebbe infatti essere derivabile in $[-1;\, 1]$ con $F'(x) = f(x)$.

Quindi: $F'(x) = x+1$ se $-1 \le x < 0$; $F'(x) = -x+1$ se $0 < x \le 1$; e poiché la derivata destra e sinistra di $F(x)$ in $x = 0$ è $1$, dovrà essere $F'(0) = 1$.

Ma $F'(0) = f(0) = 0$, quindi $f(x)$ non ammette primitiva. Questo mostra che una funzione reale di variabile reale integrabile in un intervallo chiuso e limitato $[a, b]$ non necessariamente ammette primitiva in $[a, b]$.

---

In un'urna ci sono due palline bianche, in una seconda urna ci sono due palline nere e in una terza urna ci sono una pallina bianca e una pallina nera. Scegli a caso un'urna ed estrai, sempre a caso, una delle due palline in essa contenute: è bianca. Saresti disposto a scommettere alla pari che la pallina rimasta nell'urna che hai scelto sia essa pure bianca?

Le tre urne sono: urna 1 (BB), urna 2 (NN), urna 3 (BN).

Scelta a caso un'urna, la probabilità che la pallina estratta sia bianca è data da:

$$p(\text{prima bianca}) = \frac{1}{3}\cdot\frac{2}{2} + \frac{1}{3}\cdot\frac{0}{2} + \frac{1}{3}\cdot\frac{1}{2} = \frac{1}{3} + \frac{1}{6} = \frac{1}{2}$$

Quindi la probabilità che la pallina rimasta sia anch'essa bianca è $1/3$, pari alla probabilità che la prima estratta provenga dall'urna 1. Sapendo che la prima estratta è bianca, la probabilità che anche la seconda nell'urna scelta sia bianca è data da:

$$p = \frac{p(\text{prima bianca} \cap \text{seconda bianca})}{p(\text{prima bianca})} = \frac{\dfrac{1}{3}}{\dfrac{1}{2}} = \frac{2}{3}$$

Quindi è conveniente scommettere alla pari che la pallina rimasta nell'urna scelta sia pure bianca.

**N.B.** Si tratta di un tipico esempio di applicazione del teorema di Bayes, in cui, detto $B$ l'evento "la pallina estratta è bianca" ed $A$ l'evento "la pallina è stata estratta dall'urna 1", dobbiamo trovare la probabilità condizionata:

$$p(A|B) = \frac{p(A \cap B)}{p(B)} = \frac{\dfrac{1}{3}}{\dfrac{1}{2}} = \frac{2}{3}$$

## Quesito 9

Si consideri il seguente sistema nelle incognite $x, y, z$:

$$\begin{cases} ax + y + z = a \\ x + ay + z = a \\ x + y + az = a \end{cases}$$

dove $a$ è un parametro reale. Il sistema è:
- [A] determinato per ogni valore di $a$;
- [B] indeterminato per un valore di $a$ ed impossibile per un valore di $a$;
- [C] indeterminato per nessun valore di $a$, ma impossibile per un valore di $a$;
- [D] impossibile per nessun valore di $a$, ma indeterminato per un valore di $a$.

Una sola risposta è corretta: individuarla e fornire una esauriente spiegazione della scelta operata.

Indichiamo con $A$ la matrice dei coefficienti e con $B$ la matrice ottenuta da $A$ orlandola con la colonna dei termini noti:

$$A = \begin{bmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{bmatrix}, \qquad B = \begin{bmatrix} a & 1 & 1 & a \\ 1 & a & 1 & a \\ 1 & 1 & a & a \end{bmatrix}$$

Quando il determinante di $A$ è diverso da zero il sistema ammette una sola soluzione.

$$\det A = a(a^2-1) - (a-1) + (1-a) = a(a-1)(a+1) - (a-1) - (a-1)$$

$$= (a-1)(a^2+a-2) = (a-1)(a+2)(a-1)$$

Risulta:

$$\det A = 0 \quad \text{se} \quad a = 1 \quad \text{oppure} \quad a = -2$$

Quindi se $a \neq 1$ e $a \neq -2$ il sistema ammette una sola soluzione.

Analizziamo il sistema se $a = 1$. A tal proposito è necessario utilizzare il teorema di Rouchè–Capelli. Per tale valore di $a$ risulta:

$$A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}, \qquad B = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}$$

Il rango $r$ di $A$ è uguale ad $1$ come il rango di $B$, quindi il sistema è compatibile ed ammette $\infty^{n-r}$ soluzioni, dove $n$ è il numero delle incognite ed $r$ il rango comune ad $A$ e $B$. Nel nostro caso abbiamo $\infty^{3-1} = \infty^2$ soluzioni.

Analizziamo il sistema se $a = -2$. Per tale valore di $a$ risulta:

## Quesito 10

$$A = \begin{bmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{bmatrix}, \qquad B = \begin{bmatrix} -2 & 1 & 1 & -2 \\ 1 & -2 & 1 & -2 \\ 1 & 1 & -2 & -2 \end{bmatrix}$$

Il rango di $A$ è $2$, e si deduce dal fatto che c'è un minore di ordine $2$ (quello formato, per esempio, dalle prime due righe e dalle prime due colonne) non nullo.

Il rango della matrice $B$ è $3$, e si deduce dal fatto che c'è un minore di ordine $3$ (quello formato, per esempio, dalla prima, seconda e quarta colonna) non nullo ($-18$): per tale valore di $a$ il sistema è quindi impossibile.

Riepilogando:
- Se $a \neq 1$ e $a \neq -2$: sistema determinato.
- Se $a = 1$: sistema indeterminato.
- Se $a = -2$: sistema impossibile.

La risposta corretta è quindi la **[B]**.

---

Si consideri la trasformazione geometrica di equazioni:

$$\begin{cases} x' = 2x + my - 1 \\ y' = mx - 2y - 2 \end{cases}$$

dove $m$ è un parametro reale. Trovare l'equazione del luogo geometrico dei suoi punti uniti.

I punti uniti si ottengono ponendo $x = x'$ e $y = y'$:

$$\begin{cases} x = 2x + my - 1 \\ y = mx - 2y - 2 \end{cases} \implies \begin{cases} -x + my = 1 \\ mx - 3y = 2 \end{cases}$$

Per $y \neq 0$, dalla prima equazione si ricava $m = \dfrac{1-x}{y}$; sostituendo nella seconda:

$$\frac{1-x}{y} \cdot x - 3y = 2 \implies x - x^2 - 3y^2 - 2y = 0 \implies x^2 + 3y^2 - x + 2y = 0$$

che è un'ellisse traslata.

Se $y = 0$, il sistema che dà i punti uniti diventa:

$$\begin{cases} -x = 1 \\ mx = 2 \end{cases} \implies x = 1,\quad m = 2 \implies (x,\, y) = (1,\, 0)$$

Tale punto appartiene al luogo precedentemente trovato (si verifica: $1 + 0 - 1 + 0 = 0$), quindi:

il luogo dei punti uniti è l'ellisse di equazione $x^2 + 3y^2 - x + 2y = 0$.
