---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2012_6_65
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2012 Ordinamento #6 — Svolgimento'
---
## Problema 1

### Punto a)

Poiché per ogni valore di $a$ l'espressione analitica di $f$ è un polinomio senza termine noto, tutti i grafici delle funzioni $f$ hanno in comune l'origine. Dimostriamo che è l'unico punto comune a tutti i grafici delle funzioni $f$.

I punti comuni a tutte le funzioni sono quelli le cui coordinate soddisfano $f(x) = y$ per ogni $a \in \mathbb{R}$. Ciò significa che l'equazione

$$ax^3 + x = y$$

deve risultare indeterminata rispetto all'incognita $a$. Trattandosi di un'equazione di primo grado in un'incognita, essa è indeterminata se e solo se i suoi coefficienti sono entrambi nulli, ossia se

$$\begin{cases} x^3 = 0 \\ x = y \end{cases} \quad \Rightarrow \quad \begin{cases} x = 0 \\ y = 0. \end{cases}$$

L'origine è dunque l'unico punto comune a tutti i grafici delle funzioni $f$. Anche l'espressione della funzione $g$ manca del termine noto e quindi il grafico di $g$ passa per l'origine.

Studiamo ora le funzioni $f(x) = x(ax^2 + 1) = ax^3 + x$.

- **Dominio:** $\mathbb{R}$.
- **Parità:** $f(-x) = a(-x)^3 + (-x) = -ax^3 - x = -f(x)$ $\forall x \in \mathbb{R}$, $\forall a \in \mathbb{R}$ $\Rightarrow$ le $f$ sono dispari.
- **Limiti:**

$$\lim_{x \to +\infty} f(x) = +\infty \; \text{se } a \geq 0, \qquad \lim_{x \to +\infty} f(x) = -\infty \; \text{se } a < 0,$$

$$\lim_{x \to -\infty} f(x) = -\infty \; \text{se } a \geq 0, \qquad \lim_{x \to -\infty} f(x) = +\infty \; \text{se } a < 0.$$

Non ci sono asintoti verticali e orizzontali. Se $a \neq 0$, non ci sono neppure asintoti obliqui, in quanto:

$$m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} (ax^2 + 1) = \pm\infty.$$

Se $a = 0$, la funzione si riduce a $f(x) = x$ e ammette l'asintoto obliquo di equazione $y = x$, che coincide con il grafico della funzione stessa.

- **Segno:** $f(x) = x(ax^2 + 1)$.

Se $a \geq 0$: $ax^2 + 1 \geq 1 > 0$ per ogni $x$, quindi $f(x) \geq 0$ se $x \geq 0$ e $f(x) < 0$ se $x < 0$.

Se $a < 0$: $ax^2 + 1 = 0 \Rightarrow x = \pm\dfrac{1}{\sqrt{-a}}$; il segno di $f$ cambia nei punti $x = -\dfrac{1}{\sqrt{-a}}$, $x = 0$, $x = \dfrac{1}{\sqrt{-a}}$.

*(grafico — vedi PDF p.66)*

- **Derivata prima:** $f'(x) = 3ax^2 + 1$ $\forall a \in \mathbb{R}$.

Studiamo il segno di $f'(x)$:
- se $a \geq 0$: $f'(x) > 0$ $\forall x \in \mathbb{R}$;
- se $a < 0$: $f'(x) \geq 0$ se $-\dfrac{1}{\sqrt{-3a}} \leq x \leq \dfrac{1}{\sqrt{-3a}}$.

- **Derivata seconda:** $f''(x) = 6ax$ $\forall a \in \mathbb{R}$.

Studiamo il segno di $f''(x)$:
- se $a > 0$: $f''(x) \geq 0$ se $x \geq 0$;
- se $a = 0$: $f''(x) = 0$ $\forall x \in \mathbb{R}$;
- se $a < 0$: $f''(x) \geq 0$ se $x \leq 0$.

Riassumiamo lo studio del segno, della crescenza e della concavità delle funzioni $f$ nella seguente tabella.

*(grafico — vedi PDF p.66)*

Studiamo ora la funzione $g(x) = x^4 - x^2$.

- **Dominio:** $\mathbb{R}$.
- **Parità:** $g(-x) = (-x)^4 - (-x)^2 = x^4 - x^2 = g(x)$ $\forall x \in \mathbb{R}$ $\Rightarrow$ $g$ è pari.
- **Limiti:**

$$\lim_{x \to \pm\infty} g(x) = +\infty.$$

Non ci sono asintoti verticali o orizzontali. Non ci sono asintoti obliqui, in quanto:

$$m = \lim_{x \to \pm\infty} \frac{x^4 - x^2}{x} = \lim_{x \to \pm\infty} (x^3 - x) = \pm\infty \neq \text{costante}.$$

- **Derivata prima:** $g'(x) = 4x^3 - 2x$.

Studiamo il segno di $g'(x)$:

$$4x^3 - 2x \geq 0 \;\Rightarrow\; 2x(2x^2 - 1) \geq 0 \;\Rightarrow\; -\tfrac{1}{\sqrt{2}} < x < 0 \;\text{ oppure }\; x > \tfrac{1}{\sqrt{2}}.$$

- **Derivata seconda:** $g''(x) = 12x^2 - 2$.

Studiamo il segno di $g''(x)$:

$$12x^2 - 2 \geq 0 \;\Rightarrow\; x \leq -\tfrac{1}{\sqrt{6}} \;\text{ oppure }\; x \geq \tfrac{1}{\sqrt{6}}.$$

Riportiamo lo studio del segno, della crescenza e della concavità della funzione $g$ nei seguenti grafici.

*(grafico — vedi PDF p.67)*

Rappresentiamo i grafici delle funzioni (figura 3).

*(grafico — vedi PDF p.67)*

### Punto b)

L'equazione assegnata $f(x) = g(x)$ esprime la condizione $f(x) - g(x) = 0$; le soluzioni pertanto corrispondono agli zeri della funzione:

$$h(x) = f(x) - g(x) = ax^3 + x - x^4 + x^2.$$

**I caso: $a \geq 0$.**

Osservando la figura 3a notiamo che i grafici di $f$ e $g$ si incontrano, oltre che in $O$, anche in un punto di ascissa maggiore di 1. Infatti:

$$h(1) = a + 1 - 1 + 1 = a + 1 > 0 \quad (a \geq 0),$$

e

$$\lim_{x \to +\infty} h(x) = \lim_{x \to +\infty}(ax^3 + x - x^4 + x^2) = -\infty,$$

dunque, essendo $h$ continua, per il teorema di esistenza degli zeri, essa si annulla almeno una volta per $x > 1$. Quindi i grafici delle due funzioni si incontrano in almeno un punto con ascissa maggiore di 1 e perciò, considerando anche il punto $(0; 0)$, hanno almeno due punti di intersezione.

**II caso: $a < 0$.**

Analogamente, dall'esame della figura 3b notiamo che i grafici di $f$ e $g$ si incontrano almeno una volta per $x < 0$, quindi hanno almeno due punti di intersezione.

### Punto c)

In $a = -1$ devono essere verificate le due condizioni:

$$\begin{cases} f(-1) = g(-1) \\ f'(-1) = g'(-1) \end{cases}$$

Calcoliamo: $g(-1) = 1 - 1 = 0$, $g'(-1) = -4 + 2 = -2$.

Dalla prima condizione: $f(-1) = a(-1)^3 + (-1) = -a - 1 = 0 \Rightarrow a = -1$.

Verifica con la seconda condizione: $f'(x) = 3ax^2 + 1$, $f'(-1) = 3(-1)(1) + 1 = -2 = g'(-1)$. ✓

Sostituiamo il valore $a = -1$ nella funzione $f$: $f(x) = -x^3 + x$.

La retta tangente comune ha equazione:

$$y - f(-1) = f'(-1)(x - (-1)) \;\Rightarrow\; y - 0 = -2(x + 1) \;\Rightarrow\; y = -2x - 2.$$

*(grafico — vedi PDF p.68)*

### Punto d)

La regione di piano di cui si deve trovare l'area è formata da due parti (figura 4): la prima con $-1 \leq x \leq 0$, la seconda con $0 \leq x \leq 1$. L'area è data dalla somma dei seguenti due integrali:

$$\mathcal{A} = \int_{-1}^{0}[f(x) - g(x)]\,dx + \int_{0}^{1}[f(x) - g(x)]\,dx$$

Con $a = -1$: $f(x) - g(x) = -x^3 + x - x^4 + x^2$.

$$= \int_{-1}^{0}(-x^4 - x^3 + x^2 + x)\,dx + \int_{0}^{1}(-x^4 - x^3 + x^2 + x)\,dx$$

$$= \left[-\frac{x^5}{5} - \frac{x^4}{4} + \frac{x^3}{3} + \frac{x^2}{2}\right]_{-1}^{0} + \left[-\frac{x^5}{5} - \frac{x^4}{4} + \frac{x^3}{3} + \frac{x^2}{2}\right]_{0}^{1}$$

$$= \left(0 - \left(\frac{1}{5} - \frac{1}{4} - \frac{1}{3} + \frac{1}{2}\right)\right) + \left(\left(-\frac{1}{5} - \frac{1}{4} + \frac{1}{3} + \frac{1}{2}\right) - 0\right)$$

$$= -\frac{7}{60} + \frac{7}{60} = \frac{7}{30}.$$

*(grafico — vedi PDF p.68)*

### Punto e)

Rappresentiamo in un riferimento cartesiano ortogonale tridimensionale la base del solido, la sezione ottenuta con un generico piano ortogonale all'asse $x$ e il corrispondente elemento infinitesimo di volume. In base ai dati forniti la generica sezione è un rettangolo di altezza $\dfrac{1}{x}$ e base $f(x) - g(x) = -x^4 - x^3 + x^2 + x$.

*(grafico — vedi PDF p.69)*

Il volume dell'elemento infinitesimo generico è:

$$dV = \frac{1}{x}[f(x) - g(x)]\,dx = \frac{1}{x}(-x^4 - x^3 + x^2 + x)\,dx = (-x^3 - x^2 + x + 1)\,dx.$$

Osserviamo che per $x$ tendente a $0$ la sezione ha area finita, anche se l'altezza $\dfrac{1}{x}$ tende a $+\infty$, in quanto il prodotto $\dfrac{1}{x}[f(x) - g(x)]$ tende a $1$ per $x \to 0$. Possiamo quindi determinare il volume del solido calcolando l'integrale definito:

$$V = \int_{0}^{1}(-x^3 - x^2 + x + 1)\,dx = \left[-\frac{x^4}{4} - \frac{x^3}{3} + \frac{x^2}{2} + x\right]_{0}^{1} = -\frac{1}{4} - \frac{1}{3} + \frac{1}{2} + 1 = \frac{11}{12}.$$

---

## Problema 2

### Punto a)

L'area richiesta è quella relativa alla parte di piano delimitata dalle rette di equazione $x = -3$ e $x = 0$, dall'asse $x$ e dal grafico di $f'(x)$.

*(grafico — vedi PDF p.69)*

Indichiamo tale area con $A$. Utilizzando l'integrale definito e tenendo conto che $f'(x) \leq 0$ per $-3 \leq x \leq 0$, abbiamo:

$$A = -\int_{-3}^{0} f'(x)\,dx = -[f(x)]_{-3}^{0} = -(f(0) - f(-3)) = f(-3) - f(0).$$

Applichiamo il teorema fondamentale del calcolo integrale: una primitiva di $f'(x)$ è $f(x)$. $f'(-3)$ e $f'(0)$ rappresentano i coefficienti angolari delle rette tangenti al grafico di $f'(x)$ rispettivamente nei punti di ascissa $-3$ e $0$.

Dall'equazione della retta tangente in $(-3; 4)$: il punto appartiene al grafico di $f$, $f(-3) = 4$.

Dall'equazione della retta tangente in $(0; 1)$: il punto appartiene al grafico di $f$, $f(0) = 1$.

Sostituendo abbiamo:

$$A = f(-3) - f(0) = 4 - 1 = 3.$$

### Punto b)

Dall'esame del grafico di $f'(x)$ possiamo ricavare alcune informazioni sul grafico probabile di $f(x)$.

- **Dominio.** Poiché $f'(x)$ è continua in $]-4; +\infty[$, allora $f(x)$ è continua e derivabile in ogni punto di tale intervallo, quindi il dominio di $f(x)$ è $]-4; +\infty[$. Nel punto $x = -4$, $f'(x)$ tende a $-\infty$ e poiché $f'(x)$ ha un asintoto verticale, allora anche $f(x)$ ha un asintoto verticale in $x = -4$.
- I punti $(-3; 4)$ e $(0; 1)$ appartengono al grafico di $f(x)$ per le indicazioni relative alle rette tangenti.
- **Derivata prima.** $f'(x) < 0$ per $x \in \,]-4; +\infty[$, pertanto $f(x)$ è sempre decrescente nel suo dominio $]-4; +\infty[$.
- **Limiti agli estremi del dominio.**

Per $x \to -4^+$: $f(x) \to +\infty$ (asintoto verticale sinistro).

Per $x \to +\infty$: poiché $f'(x) \to 0$, il coefficiente angolare della retta tangente a $f(x)$ tende a $0$; dunque $f(x)$ ha la concavità rivolta verso l'alto per $x$ grande e non possiede asintoto obliquo. Non abbiamo elementi sufficienti per stabilire se $f(x)$ possieda o meno un asintoto orizzontale per $x \to +\infty$.

Di seguito riportiamo due diversi grafici probabili per $f(x)$.

*(grafico — vedi PDF p.71)*

### Punto c)

Determiniamo $f'(x)$ calcolando la primitiva della funzione $f''(x)$ assegnata:

$$f'(x) = \int \frac{-4}{(x+4)^2}\,dx = \frac{4}{x+4} + c.$$

Poiché il grafico di $f'(x)$ passa per il punto $(0; 1)$, deve essere:

$$f'(0) = \frac{4}{4} + c = 1 + c = 1 \;\Rightarrow\; c = 0.$$

Dunque $f'(x) = \dfrac{4}{x+4}$.

Determiniamo ora $f(x)$ calcolando la primitiva di $f'(x)$:

$$f(x) = \int \frac{4}{x+4}\,dx = 4\ln(x+4) + c.$$

Poiché il dominio di $f(x)$ è l'intervallo $]-4; +\infty[$, scriviamo $f(x) = 4\ln(x+4) + c$.

Poiché il grafico di $f(x)$ passa per il punto $(-3; 4)$:

$$f(-3) = 4\ln(-3+4) + c = 4\ln 1 + c = c = 4 \;\Rightarrow\; c = 4.$$

L'equazione di $f(x)$ è allora:

$$f(x) = 4\ln(x+4) + 4.$$

Per rappresentare il grafico di $f(x)$ studiamo la funzione.

- **Dominio:** $]-4; +\infty[$.
- **Segno:** $f(x) = 0$ se $\ln(x+4) = -1$, cioè $x + 4 = e^{-1}$, ossia $x = \frac{1}{e} - 4$.
- **Intersezioni con gli assi:** $f(0) = 4\ln 4 + 4$ e $f\!\left(\tfrac{1}{e} - 4\right) = 0$.
- **Limiti agli estremi di $D$:**

$$\lim_{x \to -4^+} f(x) = 4\cdot(-\infty) + 4 = -\infty.$$

La retta $x = -4$ è asintoto verticale sinistro per $f(x)$.

$$\lim_{x \to +\infty} f(x) = +\infty.$$

Non esiste l'asintoto orizzontale. Osserviamo inoltre che

$$\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{4\ln(x+4) + 4}{x}$$

si presenta nella forma indeterminata $\dfrac{\infty}{\infty}$. Applichiamo il teorema di De L'Hospital:

$$\lim_{x \to +\infty} \frac{\frac{4}{x+4}}{1} = 0.$$

Pertanto $f(x)$ non possiede asintoto obliquo.

- **Derivata prima**, già calcolata: $f'(x) = \dfrac{4}{x+4}$.

Dominio: $]-4; +\infty[$. Segno: $f'(x) > 0$ per ogni $x \in \,]-4; +\infty[$. Pertanto non sono presenti punti stazionari di minimo, né di massimo, né di flesso a tangente orizzontale.

- **Derivata seconda**, fornita dalla traccia: $f''(x) = \dfrac{-4}{(x+4)^2}$.

Segno: $f''(x) < 0$ per ogni $x \in \,]-4; +\infty[$: $f(x)$ ha concavità rivolta verso il basso per ogni $x$ nel dominio; non ci sono punti di flesso con tangente obliqua.

Tracciamo il grafico $\Gamma$ di $f(x)$.

*(grafico — vedi PDF p.72)*

Osserviamo che il grafico $\Gamma$ può essere dedotto dal grafico della funzione $y = \ln x$ applicando una dopo l'altra tre trasformazioni nel piano:
- traslazione di vettore $\vec{v} = (-4,\, 0)$;
- dilatazione di un fattore $4$ rispetto all'asse $y$;
- traslazione di vettore $\vec{v} = (0,\, 4)$.

### Punto d)

Calcoliamo l'area della parte di piano compresa tra $\Gamma$ e l'asse $x$ nell'intervallo $[-3; 0]$ utilizzando l'integrale definito. Per risolvere una parte dell'integrale indefinito associato applichiamo il metodo di integrazione per parti e successivamente, per integrare la funzione razionale fratta che risulta, utilizziamo la divisione tra polinomi:

$$\int (4\ln(x+4) + 4)\,dx$$

Applichiamo la formula di integrazione per parti a $\int 4\ln(x+4)\,dx$, con $u = 4\ln(x+4)$ e $dv = dx$:

$$\int 4\ln(x+4)\,dx = 4(x+4)\ln(x+4) - 4\int \frac{x+4}{x+4}\,dx = 4(x+4)\ln(x+4) - 4x + c.$$

*(grafico — vedi PDF p.73)*

$$\mathcal{A} = \int_{-3}^{0}(4\ln(x+4) + 4)\,dx = \Big[4(x+4)\ln(x+4) - 4x + 4x\Big]_{-3}^{0}$$

$$= \left[4(x+4)\ln(x+4)\right]_{-3}^{0} + \left[4 \cdot \frac{x^2}{x+4}\Big|_{\text{div. polinomiale}}\right]$$

Calcolando direttamente:

$$\int_{-3}^{0}(4\ln(x+4) + 4)\,dx = \Big[4(x+4)\ln(x+4) - 4(x+4) + 4x + 6\Big]_{-3}^{0}$$

$$= \Big[4 \cdot 4 \cdot \ln 4 - 16 + 0 + 6\Big] - \Big[4 \cdot 1 \cdot \ln 1 - 4 + (-12) + 6\Big]$$

$$= (16\ln 4 - 10) - (0 - 10) = 16\ln 4 - 10 + 10 = 16\ln 4.$$

### Punto e)

Il volume richiesto, che indichiamo con $V$, è equivalente al volume del solido ottenuto dalla rotazione completa attorno all'asse $x$ del tratto con ascissa compresa nell'intervallo $[1; 4]$ della curva $f_1(x) = 4\ln x + 2$, che si ricava traslando il grafico $\Gamma$ di $f(x)$ secondo il vettore $\vec{v} = (4;\, -2)$.

*(grafico — vedi PDF p.73)*

Abbiamo pertanto $f_1(x) = 4\ln x + 2$ e, applicando la formula del volume dei solidi di rotazione, otteniamo:

$$V = \pi \int_{1}^{4} [f_1(x)]^2\,dx = \pi \int_{1}^{4}(4\ln x + 2)^2\,dx.$$

Calcoliamo per parti l'integrale $\displaystyle\int \ln^2 x\,dx$:

$$\int \ln^2 x\,dx = x\ln^2 x - 2\int \ln x\,dx = x\ln^2 x - 2(x\ln x - x) + c = x\ln^2 x - 2x\ln x + 2x + c.$$

Abbiamo allora:

$$V = 16\pi \int_{1}^{4}(\ln x + \tfrac{1}{2})^2\,dx = 16\pi \int_{1}^{4}\!\left(\ln^2 x + \ln x + \frac{1}{4}\right)dx$$

$$= 16\pi \left[x\ln^2 x - 2x\ln x + 2x + x\ln x - x + \frac{x}{4}\right]_{1}^{4}$$

$$= 16\pi \Big[(4\ln^2 4 - 8\ln 4 + 8 + 4\ln 4 - 4 + 1) - (0 - 0 + 2 + 0 - 1 + \tfrac{1}{4})\Big]$$

$$= 16\pi \Big[(4\ln^2 4 - 4\ln 4 + 5) - \tfrac{5}{4}\Big] = 16\pi\left(4\ln^2 4 - 4\ln 4 + \frac{15}{4}\right)$$

$$= 16\pi \cdot \frac{16\ln^2 4 - 16\ln 4 + 15}{4} \cdot \frac{1}{1} = 4\pi(16\ln^2 4 - 16\ln 4 + 15).$$

In sintesi, dal PDF (figura 10):

$$V = 16\pi(4\ln^2 4 - 8\ln 4 + 6) = 32\pi(2\ln^2 4 - 4\ln 4 + 3).$$

*(grafico — vedi PDF p.73)*

---

## Quesito 1

Una funzione suriettiva da $A$ a $B$ ha per dominio $A$ e per codominio $B$. Dato che l'insieme $A$ ha un elemento in più rispetto a $B$, due tra i sei elementi di $A$ devono avere la stessa immagine in $B$. Il numero di modi in cui possiamo selezionare tale coppia di elementi di $A$ è pari al numero di combinazioni semplici di 6 oggetti di classe 2:

$$C_{6,2} = \binom{6}{2} = \frac{6!}{2!\cdot 4!} = 15.$$

Dopo aver fissato la coppia di elementi con la stessa immagine, il numero di modi in cui è possibile associare agli elementi di $A$ gli elementi di $B$ è pari al numero di permutazioni semplici di 5 oggetti:

$$P_5 = 5! = 120.$$

Pertanto il numero complessivo di funzioni suriettive da $A$ a $B$ che possiamo definire è pari a:

$$P_5 \cdot C_{6,2} = 120 \cdot 15 = 1800.$$

---

## Quesito 2

Il limite $\displaystyle\lim_{x \to 0} \frac{1 - \cos x - \sin x}{1 - \cos x + \sin x}$, che si presenta nella forma indeterminata $\dfrac{0}{0}$, può essere risolto con vari metodi.

**Con le formule di bisezione e di duplicazione:**

$$\sin x = 2\sin\frac{x}{2}\cos\frac{x}{2}, \qquad 1 - \cos x = 2\sin^2\frac{x}{2},$$

otteniamo:

$$\lim_{x \to 0} \frac{2\sin^2\tfrac{x}{2} - 2\sin\tfrac{x}{2}\cos\tfrac{x}{2}}{2\sin^2\tfrac{x}{2} + 2\sin\tfrac{x}{2}\cos\tfrac{x}{2}} = \lim_{x \to 0} \frac{2\sin\tfrac{x}{2}\!\left(\sin\tfrac{x}{2} - \cos\tfrac{x}{2}\right)}{2\sin\tfrac{x}{2}\!\left(\sin\tfrac{x}{2} + \cos\tfrac{x}{2}\right)} = \frac{0 - 1}{0 + 1} = -1.$$

**Con i limiti notevoli:** dividendo numeratore e denominatore per $x$:

$$\lim_{x \to 0} \frac{\frac{1-\cos x}{x} - \frac{\sin x}{x}}{\frac{1-\cos x}{x} + \frac{\sin x}{x}} = \frac{0 - 1}{0 + 1} = -1.$$

**Applicando il teorema di De L'Hospital:**

$$\lim_{x \to 0} \frac{\sin x - \cos x}{\sin x + \cos x} = \frac{0 - 1}{0 + 1} = -1.$$

**Ricorrendo al principio di sostituzione degli infinitesimi**, operando le sostituzioni $1 - \cos x \sim \dfrac{x^2}{2}$ e $\sin x \sim x$:

$$\lim_{x \to 0} \frac{\frac{x^2}{2} - x}{\frac{x^2}{2} + x} = \lim_{x \to 0} \frac{x\!\left(\frac{x}{2} - 1\right)}{x\!\left(\frac{x}{2} + 1\right)} = \frac{0 - 1}{0 + 1} = -1.$$

---

## Quesito 3

Osserviamo che la quantità venduta $q = 500 - 25p$:
- è positiva, o nulla, se $500 - 25p \geq 0$, cioè se il prezzo unitario non supera $p = 20$ €;
- assume il valore massimo $q = 500$ se $p = 0$.

Il ricavo è dato dal prodotto $qp$; sostituendo a $q$ la sua espressione in funzione di $p$, e tenendo conto della limitazione, otteniamo:

$$r(p) = (500 - 25p)\cdot p = 500p - 25p^2, \quad \text{con } 0 \leq p \leq 15.$$

*(grafico — vedi PDF p.75)*

$r(p)$ descrive un arco di parabola con concavità verso il basso e ascissa compresa fra $0$ e $15$. Le coordinate del vertice della parabola sono:

$$p_v = \frac{500}{2 \cdot 25} = 10, \qquad r_v = 500 \cdot 10 - 25 \cdot 100 = 5000 - 2500 = 2500.$$

Dato che $p_v = 10 \in [0, 15]$, il vertice rappresenta il punto in cui il ricavo è massimo.

Il **ricavo massimo** è dunque pari a **€ 2500,00** e si ottiene in corrispondenza del prezzo unitario di vendita di **€ 10,00**; la quantità venduta che dà il massimo ricavo è $q = 500 - 25 \cdot 10 = 250$.

La funzione che dà il ricavo in funzione della quantità venduta si ottiene esprimendo $p$ in funzione di $q$:

$$p = 20 - \frac{q}{25},$$

otteniamo:

$$r(q) = q \cdot \left(20 - \frac{q}{25}\right) = 20q - \frac{q^2}{25}.$$

Se $p = 0$: $q = 500$; se $p = 15$: $q = 125$; quindi $q$ è compreso fra $125$ e $500$.

*(grafico — vedi PDF p.75)*

Ritroviamo che il ricavo massimo si ha in corrispondenza di $q = 250$, $r(250) = 2500$.

---

## Quesito 4

Disegniamo la generica parabola di equazione $\gamma\colon y = kx^2$, con $k > 0$, assieme alla retta tangente nel punto $P$ e alla parallela all'asse $x$.

*(grafico — vedi PDF p.76)*

Il segmento parabolico individuato dalla corda $PP'$ è indicato con $R_1$ in figura, mentre il triangolo curvilineo è indicato con $R_2$.

Il generico punto $P$ ha coordinate $P(a;\, ka^2)$, con $a > 0$.

L'area di un segmento parabolico, per la formula di Archimede, è pari ai $\dfrac{2}{3}$ dell'area del rettangolo circoscritto, quindi l'area di $R_1$ è data da:

$$A_1 = \frac{2}{3} \cdot 2a \cdot ka^2 = \frac{4}{3}ka^3.$$

Possiamo calcolare l'area di $R_2$ per differenza: dall'area delimitata dal grafico di $\gamma$ nell'intervallo $[0; a]$ sottraiamo l'area del triangolo $QHP$.

Determiniamo innanzitutto le coordinate di $Q$. Retta tangente a $\gamma$ in $P$:

$$y - ka^2 = 2ka(x - a) \;\Rightarrow\; y = 2kax - ka^2,$$

dove $\gamma'(a) = 2ka$. Intersezione con l'asse $x$ (punto $Q$):

$$0 = 2kax - ka^2 \;\Rightarrow\; x = \frac{a}{2} \;\Rightarrow\; Q = \left(\frac{a}{2};\, 0\right).$$

L'area di $R_2$ vale dunque:

$$A_2 = \int_{0}^{a} kx^2\,dx - \frac{1}{2}\cdot\frac{a}{2}\cdot ka^2 = \frac{ka^3}{3} - \frac{ka^3}{4} = \frac{ka^3}{12}.$$

*(grafico — vedi PDF p.77)*

Il rapporto fra le due aree è:

$$\frac{A_1}{A_2} = \frac{\frac{4}{3}ka^3}{\frac{ka^3}{12}} = \frac{4}{3} \cdot 12 = 16.$$

Dato che il rapporto è costante al variare delle coordinate di $P$, il limite richiesto è $\mathbf{16}$.

---

## Quesito 5

La funzione $f(x)$, essendo ovunque continua e derivabile, è in particolare continua nell'intervallo chiuso $[0; 1]$ e derivabile nell'intervallo aperto $]0; 1[$. Sono dunque soddisfatte le ipotesi del teorema di Lagrange, quindi esiste $c \in \,]0; 1[$ tale che:

$$f'(c) = \frac{f(1) - f(0)}{1 - 0} = f(1) - f(0).$$

Poiché $f'(c) > 0$ e $f(0) = 0$ risulta:

$$f(1) = f'(c) + f(0) = f'(c) > 0.$$

La disuguaglianza si può dimostrare anche per altra via. Poiché $f'(x) > 0$ risulta:

$$f(1) = f(1) - f(0) = \int_{0}^{1} f'(x)\,dx > 0.$$

In particolare, vale la disuguaglianza più restrittiva $f(1) > f(0) = 0$.

---

## Quesito 6

I triangoli $APB$ e $CPB$, rettangoli rispettivamente in $A$ e $C$, sono congruenti perché hanno l'ipotenusa $PB$ in comune e i cateti ordinatamente congruenti ($\overline{AB} = \overline{BC}$ e $\overline{AP} = \overline{CP}$, poiché $P$ è il centro della faccia del cubo). Sono quindi congruenti anche le altezze relative all'ipotenusa, che cadono sullo stesso punto $H$.

*(grafico — vedi PDF p.77)*

$PH$ è dunque perpendicolare alle rette $AB$ e $BC$, pertanto è perpendicolare al piano che le contiene: tale piano è perciò una sezione normale del diedro convesso di facce $ABP$ e $CBP$.

Applichiamo ora il teorema del coseno al triangolo $APC$ per determinare l'ampiezza dell'angolo $\widehat{APC}$. Esprimiamo tutti gli elementi in funzione della lunghezza $a$ dello spigolo del cubo:

$$\overline{AC} = a\sqrt{2}, \qquad \overline{AP} = \overline{CP} = \frac{a\sqrt{6}}{2} \cdot \frac{1}{\sqrt{?}}$$

*(grafico — vedi PDF p.78)*

Calcoliamo l'ampiezza del diedro:

$$\cos(\widehat{APC}) = \frac{\overline{AP}^2 + \overline{CP}^2 - \overline{AC}^2}{2 \cdot \overline{AP} \cdot \overline{CP}} = -\frac{1}{3}.$$

$$\widehat{APC} = \arccos\!\left(-\frac{1}{3}\right) \approx 109°28'.$$

---

## Quesito 7

La funzione data ha per dominio $\mathbb{R}$ e le sue restrizioni ai tre intervalli indicati sono continue. La funzione, quindi, è continua in $\mathbb{R}$ se lo è nei punti $x = 0$ e $x = 2$.

**Condizione per la continuità in $x = 0$** (con $\lim_{x \to 0^-} f(x) = p^2$ e $\lim_{x \to 0^+} f(x) = p$):

$$p^2 = p \;\Rightarrow\; p(p-1) = 0 \;\Rightarrow\; p = 0 \;\text{ oppure }\; p = 1.$$

**Condizione per la continuità in $x = 2$** (con $\lim_{x \to 2^-} f(x) = 4 + 2 + p = 6 + p$ e $\lim_{x \to 2^+} f(x) = 2 + q$):

$$6 + p = 2 + q \;\Rightarrow\; q = p + 4.$$

Abbiamo due casi:
- $p = 0$: $q = 4$;
- $p = 1$: $q = 5$.

Le coppie ordinate di valori $(p;\, q)$ per i quali la funzione è continua sono dunque: $(0;\, 4)$ e $(1;\, 5)$.

---

## Quesito 8

Data una funzione $f$ continua in $\mathbb{R}$, la sua funzione integrale di punto iniziale $a$ è:

$$F(x) = \int_{a}^{x} f(t)\,dt.$$

Per il teorema fondamentale del calcolo integrale, questa funzione integrale è derivabile e risulta $F'(x) = f(x)$.

Fissiamo dunque a piacere un punto iniziale $a$ e applichiamo all'integrale dato le proprietà di additività e di scambio degli estremi di integrazione:

$$g(x) = \int_{x}^{x^2} f(t)\,dt = \int_{a}^{x^2} f(t)\,dt - \int_{a}^{x} f(t)\,dt = F(x^2) - F(x).$$

Calcoliamo la derivata di $g(x)$, osservando che il primo addendo è una funzione composta:

$$g'(x) = F'(x^2) \cdot 2x - F'(x) = f(x^2) \cdot 2x - f(x).$$

Ora calcoliamo i risultati richiesti, tenendo conto dei dati noti del problema:

$$g(1) = \int_{1}^{1} f(t)\,dt = 0;$$

$$g'(1) = f(1^2) \cdot 2 \cdot 1 - f(1) = 2f(1) - f(1) = f(1) = 2;$$

$$g'(-1) = f((-1)^2) \cdot 2 \cdot (-1) - f(-1) = f(1) \cdot (-2) - f(-1) = -2 \cdot 2 - 3 = -7.$$

---

## Quesito 9

Condizione necessaria, ma non sufficiente, perché una funzione sia derivabile in un punto è la continuità in tale punto. In $x = 1$ abbiamo:

$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-}(x^2 - 1) = 0;$$

$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+}\ln x = 0.$$

In $x = 1$ la funzione è continua (entrambi i limiti coincidono con $f(1) = 0$).

Consideriamo separatamente il rapporto incrementale sinistro e destro. Calcoliamo il limite per $h \to 0^-$ del rapporto incrementale sinistro:

$$\lim_{h \to 0^-} \frac{f(1+h) - f(1)}{h} = \lim_{h \to 0^-} \frac{(1+h)^2 - 1 - 0}{h} = \lim_{h \to 0^-} \frac{2h + h^2}{h} = \lim_{h \to 0^-}(2 + h) = 2.$$

La funzione non ammette derivata sinistra uguale alla derivata destra in $x = 1$: la derivata destra è $\lim_{h \to 0^+} \frac{\ln(1+h)}{h} = 1$. Poiché la derivata sinistra (= 2) e la derivata destra (= 1) non coincidono, la funzione **non è derivabile** in $x = 1$.

L'errore nella proposizione sta nell'identificare la derivata sinistra (o destra) in un punto $x_0$ con il limite della derivata calcolata in un intorno sinistro (o destro) di $x_0$, anziché con il limite, sinistro o destro, del rapporto incrementale.

---

## Quesito 10

Per il teorema della corda, posto $\overline{DC} = l$, si ha $l = 2r \sin\alpha$.

*(grafico — vedi PDF p.80)*

Per il secondo teorema dei triangoli rettangoli, nel triangolo $DM'M$ è

$$\overline{DM'} = \overline{M'M} \cdot \operatorname{tg} D\hat{M}M',$$

e cioè:

$$\frac{l}{2} = l \cdot \operatorname{tg}\frac{\alpha}{2} \;\Rightarrow\; \operatorname{tg}\frac{\alpha}{2} = \frac{1}{2}.$$

Per le formule parametriche è:

$$\sin\alpha = \frac{2\operatorname{tg}\dfrac{\alpha}{2}}{1 + \operatorname{tg}^2\dfrac{\alpha}{2}} = \frac{2 \cdot \dfrac{1}{2}}{1 + \dfrac{1}{4}} = \frac{1}{\dfrac{5}{4}} = \frac{4}{5}.$$

Sostituendo nella relazione iniziale si ha

$$l = 2r \cdot \frac{4}{5},$$

da cui:

$$\frac{r}{l} = \frac{5}{8}.$$
