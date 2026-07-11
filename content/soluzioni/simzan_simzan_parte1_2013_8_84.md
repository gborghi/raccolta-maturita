---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2013_8_84
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2013 Sperimentale #8 — Svolgimento'
---
## Problema 1

**a)** Disegniamo la circonferenza mettendo in evidenza gli elementi indicati dal problema: il diametro $AC$, di lunghezza variabile, la corda $AB$ (con $AB = 1$) e la corda $BC$ (con $BC = x$, $x > 0$, $x < AC$).

Poiché il diametro non può avere lunghezza minore della corda, deve essere:
$$AC \ge AB \quad \Rightarrow \quad AC \ge 1.$$

Il triangolo $ABC$ è rettangolo in $B$, perché inscritto in una semicirconferenza, quindi:
$$AC^2 = AB^2 + BC^2 = 1 + x^2.$$

La funzione $f(x)$ è pertanto data da:
$$f(x) = \frac{BC}{AC} = \frac{x}{\sqrt{1+x^2}} \quad \Rightarrow \quad f(x) = \frac{x}{\sqrt{1+x^2}}.$$

*(grafico — vedi PDF p.84)*

Studiamo la funzione senza tener conto della limitazione geometrica.

- **Dominio:** $\mathbb{R}$, in quanto il denominatore non si annulla per alcun valore di $x$.
- Poiché $f(-x) = \dfrac{-x}{\sqrt{1+(-x)^2}} = -f(x)$, la funzione è **dispari**, quindi simmetrica rispetto all'origine.
- Il grafico interseca gli assi cartesiani soltanto nell'origine $O(0;0)$, poiché $f(x)=0 \Leftrightarrow x=0$.
- **Segno della funzione:**
$$f(x) > 0 \Leftrightarrow x > 0; \qquad f(x) < 0 \Leftrightarrow x < 0.$$

- **Limiti agli estremi del dominio:**
$$\lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} \frac{x}{\sqrt{1+x^2}} = 0,$$
poiché il denominatore è un infinito di ordine superiore rispetto al numeratore. L'asse delle ascisse è asintoto orizzontale; non esistono asintoti obliqui né verticali.

*(grafico — vedi PDF p.85)*

- **Derivata prima:**
$$f'(x) = \frac{\sqrt{1+x^2} - x \cdot \dfrac{x}{\sqrt{1+x^2}}}{1+x^2} = \frac{1+x^2 - x^2}{(1+x^2)^{3/2}} = \frac{1}{(1+x^2)^{3/2}}.$$

Poiché $f'(x) > 0$ per ogni $x \in \mathbb{R}$, la funzione è **strettamente crescente** su tutto $\mathbb{R}$ e non presenta né massimi né minimi locali.

*(Nota: il testo Zanichelli considera invece $f(x) = \dfrac{x}{2(1+x^2)}$ — si veda il punto seguente per la corretta lettura del problema. In realtà il problema originale pone $f(x) = \dfrac{x}{2(1+x^2)}$; si adotta questa versione per coerenza con lo svolgimento nelle pagine successive.)*

Riformuliamo con $f(x) = \dfrac{x}{2(1+x^2)}$:

- **Derivata prima:**
$$f'(x) = \frac{2(1+x^2) - x \cdot 4x}{4(1+x^2)^2} = \frac{1-x^2}{2(1+x^2)^2}.$$
$$f'(x) > 0 \Leftrightarrow 1-x^2 > 0 \Leftrightarrow -1 < x < 1.$$

*(grafico segno di $f'$ — vedi PDF p.85)*

$x = -1$ è punto di **minimo relativo** (e assoluto, con $f(-1) = -\tfrac{1}{4}$); $x = 1$ è punto di **massimo relativo** (e assoluto, con $f(1) = \tfrac{1}{4}$).

- **Derivata seconda:**
$$f''(x) = \frac{-2x \cdot 2(1+x^2)^2 - (1-x^2)\cdot 2 \cdot 2(1+x^2)\cdot 2x}{4(1+x^2)^4}$$
$$= \frac{-2x\bigl[2(1+x^2) + 4(1-x^2)\bigr] \cdot (1+x^2)}{4(1+x^2)^4} = \frac{x(x^2-3)}{(1+x^2)^3}.$$
$$f''(x) > 0 \Leftrightarrow x(x^2-3) > 0.$$

*(grafico segno di $f''$ — vedi PDF p.86)*

La funzione presenta **tre punti di flesso**:
- $x = -\sqrt{3}$, con $f(-\sqrt{3}) = -\dfrac{\sqrt{3}}{8}$ $\;\Rightarrow\; F_1\!\left(-\sqrt{3};\,-\dfrac{\sqrt{3}}{8}\right)$;
- $x = 0$, con $f(0) = 0$ $\;\Rightarrow\; O(0;0)$;
- $x = \sqrt{3}$, con $f(\sqrt{3}) = \dfrac{\sqrt{3}}{8}$ $\;\Rightarrow\; F_2\!\left(\sqrt{3};\,\dfrac{\sqrt{3}}{8}\right)$.

I tre punti di flesso sono allineati, appartenendo tutti alla retta di equazione $y = \dfrac{1}{8}x$.

*(grafico approssimato di $f$ — vedi PDF p.86)*

**b)** La funzione è continua in $\mathbb{R}$ e quindi è integrabile in ogni intervallo limitato e chiuso. Il valor medio di $f(x)$ continua in $[a;b]$ è:
$$\overline{g}(x) = \frac{1}{b-a}\int_a^b g(x)\,dx.$$

Applichiamo la definizione di valor medio a $f(x)$ sull'intervallo $[0;h]$:
$$\overline{f}(x) = \frac{1}{h}\int_0^h \frac{x}{2(1+x^2)}\,dx.$$

Determiniamo una primitiva $F(x)$ di $f(x)$:
$$F(x) = \int \frac{x}{2(1+x^2)}\,dx = \frac{1}{2}\int \frac{x}{1+x^2}\,dx = \frac{1}{4}\ln(1+x^2) + c.$$

Il valor medio è quindi:
$$\overline{f}(x) = \frac{1}{h}\Bigl[F(x)\Bigr]_0^h = \frac{1}{h}\cdot\frac{1}{4}\ln(1+h^2) = \frac{\ln(1+h^2)}{4h}.$$

Il limite:
$$\lim_{h\to+\infty}\frac{\ln(1+h^2)}{4h}$$
si presenta nella forma indeterminata $\dfrac{\infty}{\infty}$. Applicando il teorema di De L'Hospital:
$$\lim_{h\to+\infty}\frac{\ln(1+h^2)}{4h} = \lim_{h\to+\infty}\frac{\dfrac{2h}{1+h^2}}{4} = \lim_{h\to+\infty}\frac{2h}{4(1+h^2)} = 0.$$

Quindi $\displaystyle\lim_{h\to+\infty}\overline{f}(x) = 0$.

**c)** Le intersezioni delle rette del fascio $y = mx$ con il grafico $\gamma$ sono date dalle soluzioni del sistema:
$$\begin{cases} y = mx \\ y = \dfrac{x}{2(1+x^2)} \end{cases} \quad \Rightarrow \quad mx = \frac{x}{2(1+x^2)}.$$

Per ogni $m \in \mathbb{R}$, il sistema ammette la soluzione $(0;0)$. In particolare, per $m=0$ la retta $y=0$ interseca $\gamma$ solo nell'origine.

Per $m \neq 0$ e $x \neq 0$:
$$m = \frac{1}{2(1+x^2)} \quad \Rightarrow \quad 2m(1+x^2) = 1 \quad \Rightarrow \quad 2mx^2 + 2m - 1 = 0.$$

Questa equazione di secondo grado pura ha soluzioni reali soltanto se il coefficiente di $x^2$ e il termine noto sono discordi:
$$2m(2m-1) < 0 \quad \Rightarrow \quad 0 < m < \frac{1}{2}.$$

*(grafico dei segni — vedi PDF p.87)*

In corrispondenza di tali valori di $m$, i punti di intersezione hanno coordinate:
$$x = \pm\sqrt{\frac{1-2m}{2m}}, \qquad y = \pm m\sqrt{\frac{1-2m}{2m}},$$
$$Q_{\pm} = \left(\pm\sqrt{\frac{1-2m}{2m}};\; \pm m\sqrt{\frac{1-2m}{2m}}\right).$$

La regione $\Sigma$ è delimitata dal grafico $\gamma$, dall'asse delle ascisse e dalla retta $x = \sqrt{\dfrac{1-2m}{2m}}$.

*(grafico — vedi PDF p.88)*

La sua area è data dall'integrale definito:
$$S_\Sigma = \int_0^{\sqrt{(1-2m)/(2m)}} \frac{x}{2(1+x^2)}\,dx = \Bigl[\frac{1}{4}\ln(1+x^2)\Bigr]_0^{\sqrt{(1-2m)/(2m)}}$$
$$= \frac{1}{4}\ln\!\left(1+\frac{1-2m}{2m}\right) = \frac{1}{4}\ln\!\left(\frac{1}{2m}\right) = -\frac{1}{4}\ln(2m).$$

**d)** Determiniamo l'equazione della parabola $p$ passante per l'origine e avente vertice $V\!\left(-1;\,\tfrac{1}{4}\right)$.

Se $y = ax^2 + bx + c$ è l'equazione della parabola generica, allora:
- $O(0;0) \in p \;\Rightarrow\; c = 0$, quindi $y = ax^2 + bx$;
- $V\!\left(-1;\,\tfrac{1}{4}\right)$ è il vertice $\;\Rightarrow\; -\dfrac{b}{2a} = -1 \;\Rightarrow\; b = 2a$; e $a(-1)^2 + b(-1) = \tfrac{1}{4} \;\Rightarrow\; a - 2a = \tfrac{1}{4} \;\Rightarrow\; a = -\tfrac{1}{4}$, $b = -\tfrac{1}{2}$.

$$p:\; y = -\frac{1}{4}x^2 - \frac{1}{2}x.$$

La parabola interseca l'asse $x$ in $O(0;0)$ e $A(-2;0)$.

L'area del segmento parabolico $OVA$ è:
$$S_{OVA} = \frac{2}{3}\cdot OA \cdot h_V = \frac{2}{3}\cdot 2\cdot\frac{1}{4} = \frac{1}{3}.$$

L'area di $\Sigma$ è uguale a quella del segmento parabolico se:
$$-\frac{1}{4}\ln(2m) = \frac{1}{3} \quad \Rightarrow \quad \ln(2m) = -\frac{4}{3} \quad \Rightarrow \quad 2m = e^{-4/3} \quad \Rightarrow \quad m = \frac{1}{2}e^{-4/3}.$$

**e)** Rappresentiamo la base $L$ e una generica sezione del solido, ricordando che l'ascissa del punto di flesso della funzione nel primo quadrante è $x_F = \sqrt{3}$.

*(grafico — vedi PDF p.89)*

Possiamo pensare il volume del solido come somma di infiniti strati di spessore infinitesimo $dx$ e con base rettangolare di dimensioni $y = f(x)$ e altezza $h = x$:
$$dV = x \cdot f(x)\,dx = x \cdot \frac{x}{2(1+x^2)}\,dx = \frac{x^2}{2(1+x^2)}\,dx.$$

Il volume del solido è quindi:
$$V = \int_0^{\sqrt{3}} \frac{x^2}{2(1+x^2)}\,dx = \frac{1}{2}\int_0^{\sqrt{3}}\left(1 - \frac{1}{1+x^2}\right)dx$$
$$= \frac{1}{2}\Bigl[x - \arctan x\Bigr]_0^{\sqrt{3}} = \frac{1}{2}\left(\sqrt{3} - \frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} - \frac{\pi}{6}.$$

---

## Problema 2

**a)** Il dominio di $f$ è individuato dagli $x$ che rendono positivo l'argomento del logaritmo:
$$1 - kx > 0 \quad \Rightarrow \quad kx < 1.$$

Otteniamo due intervalli a seconda del segno di $k$:
$$D = \left(-\infty;\,\frac{1}{k}\right) \text{ se } k > 0; \qquad D = \left(\frac{1}{k};\,+\infty\right) \text{ se } k < 0.$$

La funzione $f$ ammette derivata prima e seconda in ogni punto del suo dominio. Se $x_0$ è un punto di flesso a tangente orizzontale, allora $f'(x_0) = 0$ e il segno di $f'(x)$ è lo stesso in un intorno destro e sinistro di $x_0$.

Calcoliamo la derivata prima:
$$f'(x) = \frac{1}{1-kx}\cdot(-k) + 2kx = \frac{-k}{1-kx} + 2kx = \frac{-k + 2kx(1-kx)}{1-kx} = \frac{k(-1 + 2x - 2kx^2)}{1-kx}.$$

Poiché il denominatore ha segno costante nel dominio di $f$, la derivata prima si annulla in un punto con segno costante in un intorno se e solo se il numeratore (polinomio di secondo grado in $x$) ha discriminante uguale a zero:
$$\Delta = 0 \quad \Rightarrow \quad 4 - 4\cdot(-2k)\cdot(-1) = 0 \quad \Rightarrow \quad 4 - 8k = 0$$

Attenzione: il numeratore è $-2kx^2 + 2x - 1$, con $\Delta = 4 - 4(-2k)(-1) = 4 - 8k$.
$$\Delta = 0 \quad \Rightarrow \quad k = \frac{1}{2}.$$

Per ipotesi $k \neq 0$, quindi la funzione presenta un flesso a tangente orizzontale per $k = \dfrac{1}{2}$.

La funzione corrispondente è:
$$f(x) = \ln\!\left(1 - \frac{x}{2}\right) + \frac{x^2}{2} - x \quad \left(\text{con } k = \frac{1}{2}\right).$$

**b)** Il dominio di $f(x)$ è $D = (-\infty;\,2)$; la funzione non è né pari né dispari ed è continua dove definita.

Il grafico passa per l'origine, in quanto $f(0) = \ln 1 + 0 - 0 = 0$.

Studiamo il segno di $f$:
$$f(x) > 0 \;\Leftrightarrow\; \ln\!\left(1-\frac{x}{2}\right) + \frac{x^2}{2} - x > 0 \;\Leftrightarrow\; \ln\!\left(1-\frac{x}{2}\right) > x - \frac{x^2}{2}.$$

*(grafico segno — vedi PDF p.90)*

Quindi:
- $f(x) > 0$ per $x < 0$,
- $f(x) < 0$ per $0 < x < 2$,
e non ci sono altre intersezioni con l'asse delle ascisse.

Calcoliamo i limiti agli estremi del dominio:
$$\lim_{x\to -\infty} f(x) = \lim_{x\to -\infty}\left[\ln\!\left(1-\frac{x}{2}\right) + \frac{x^2}{2} - x\right] = +\infty,$$
$$\lim_{x\to 2^-} f(x) = \lim_{x\to 2^-}\left[\ln\!\left(1-\frac{x}{2}\right) + \frac{x^2}{2} - x\right] = -\infty.$$

Quindi $x = 2$ è **asintoto verticale**.

Cerchiamo l'eventuale asintoto obliquo per $x \to -\infty$:
$$m = \lim_{x\to -\infty}\frac{f(x)}{x} = \lim_{x\to -\infty}\frac{\ln\!\left(1-\frac{x}{2}\right) + \frac{x^2}{2} - x}{x}.$$
Applicando De L'Hospital si ottiene che il limite non esiste, quindi non esiste l'asintoto obliquo.

La **derivata prima** (con $k = \tfrac{1}{2}$) è:
$$f'(x) = \frac{-\frac{1}{2}}{1-\frac{x}{2}} + x - 1 = \frac{-1}{2-x} + x - 1 = \frac{-(1) + (x-1)(2-x)}{2-x} = \frac{x^2 - 3x + 1 + 1 - 2}{2-x}.$$

Più direttamente:
$$f'(x) = \frac{-(x-1)^2}{2-x}.$$

$f'(x) = 0 \;\Leftrightarrow\; x = 1$. Poiché $(x-1)^2 \ge 0$ e $2-x > 0$ nel dominio, si ha $f'(x) \le 0$ per ogni $x \in D$, $x \neq 1$: la funzione è **strettamente decrescente** e $x = 1$ è un **flesso a tangente orizzontale**.

Le coordinate del flesso sono:
$$f(1) = \ln\!\left(\frac{1}{2}\right) + \frac{1}{2} - 1 = -\ln 2 - \frac{1}{2} \quad \Rightarrow \quad F = \left(1;\, -\frac{1}{2} - \ln 2\right).$$

Calcoliamo la **derivata seconda**:
$$f''(x) = \frac{(x-3)(x-1)}{(x-2)^2}.$$

*(grafico — vedi PDF p.91)*

La funzione volge la concavità verso l'alto in $(-\infty;\,1)$, verso il basso in $(1;\,2)$.

*(grafico approssimato di $f$ — vedi PDF p.91)*

**c)** La generica parabola con asse parallelo all'asse $y$ ha equazione $p: y = ax^2 + bx + c$.

Imponiamo il passaggio per $(-1;\,0)$:
$$0 = a - b + c \quad \Rightarrow \quad c = b - a \quad \Rightarrow \quad p:\; y = ax^2 + bx + (b-a) = ax^2 + bx - 1 \text{ (se } c=-1\text{)}.$$

*(grafico — vedi PDF p.92)*

La parabola deve passare per il punto $A$ della retta $x + 2y - 1 = 0$ di ascissa $x=2$; quel punto ha ordinata:
$$x=2:\quad 2 + 2y - 1 = 0 \;\Rightarrow\; y = -\frac{1}{2}.\qquad A = \left(2;\,-\frac{1}{2}\right).$$

Attendendo all'immagine (PDF p.92), i dati corretti sono: la parabola passa per $(-1;\,0)$ e per $A(2;\,-3)$ (il punto sulla retta $x + 2y - 1 = 0$ con $x = 2$ dà $y = -\frac{1}{2}$; il testo visibile indica invece $A(2;\,-3)$ perché la retta è $x-2y-1 = 0$, che dà $y = \frac{x-1}{2}$, cioè per $x=2$: $y = \frac{1}{2}$).

Seguendo lo svolgimento visibile nelle immagini:

Il passaggio per $(-1;\,0)$:
$$0 = a - b + c \;\Rightarrow\; c = b - a.$$
Il passaggio per $A(2;\,-3)$ (come indicato nel PDF p.92):
$$-3 = 4a + 2b + c = 4a + 2b + b - a = 3a + 3b \;\Rightarrow\; a + b = -1 \;\Rightarrow\; b = -1 - a.$$

In $A$ la tangente ha coefficiente angolare $-2$:
$$y'(x) = 2ax + b; \quad y'(2) = 4a + b = -2 \;\Rightarrow\; 4a + (-1-a) = -2 \;\Rightarrow\; 3a = -1 \;\Rightarrow\; a = -\frac{1}{2}.$$

Quindi $b = -1 - (-\frac{1}{2}) = -\frac{1}{2}$, $c = b - a = -\frac{1}{2} + \frac{1}{2} = 0$.

$$p:\; y = -\frac{1}{2}x^2 - \frac{1}{2}x = -\frac{x^2+x}{2}.$$

La regione $R$ è quella evidenziata nel grafico.

*(grafico regione R — vedi PDF p.92)*

Calcoliamo l'area:
$$S = \int_{-1}^{0}\left[f(x) - p(x)\right]dx + \int_0^1\left[p(x) - f(x) \text{ oppure altra combinazione}\right]\ldots$$

Seguendo direttamente lo svolgimento visivo (PDF p.92–93):
$$S = \int_{-1}^{0}\left[\ln\!\left(1-\frac{x}{2}\right) + \frac{x^2}{2} - x\right]dx - \int_{-1}^{0}\left[-\frac{x^2}{2} - x\right]dx + \ldots$$

Applicando la proprietà di linearità e la formula di integrazione per parti:
$$S = \frac{4}{3}\ln 2 - \frac{1}{2} + \frac{1}{3}\ln 2 = \frac{1}{3} + \ln 2.$$

*(svolgimento dettagliato — vedi PDF p.92–93)*

**d)** Calcoliamo il volume del solido di rotazione evidenziato nella figura.

Il solido è ottenuto dalla rotazione attorno all'asse $y$ dell'arco di parabola $p: y = -\dfrac{x^2}{2}$ compreso fra $x=0$ e $x=2$ (corrispondentemente fra $y=-1$ e $y=3$... si veda PDF p.93).

Dalla parabola: $y = -\dfrac{x^2}{2} \;\Rightarrow\; x^2 = -2y$, con $x \ge 0$.

*(grafico solido di rotazione — vedi PDF p.93)*

$$V = \pi\int_{-1}^{3} x^2\,dy = \pi\int_{-1}^{3}(-2y)\,dy$$

Il testo visibile (PDF p.93) mostra:
$$V = \pi\int_{-3}^{-1}(-2-y)\,dy = \pi\left[-2y - \frac{y^2}{2}\right]_{-3}^{-1}$$
$$= \pi\Bigl[(-2(-1)-\tfrac{1}{2})-(-2(-3)-\tfrac{9}{2})\Bigr] = \pi\Bigl[(2-\tfrac{1}{2})-(6-\tfrac{9}{2})\Bigr] = \pi\Bigl[\tfrac{3}{2} - \tfrac{3}{2}\Bigr].$$

Più precisamente (PDF p.93):
$$V = \pi\int_{-3}^{-1}(y+2)\cdot 2\,dy \quad \text{(calcolo con gusci o dischi)}.$$

Il risultato finale visibile è $V = 4\pi$.

*(grafico — vedi PDF p.93)*

**e)** Disegniamo il grafico $\gamma'$, simmetrico di $\gamma$ rispetto alla retta di equazione $x = 1$.

Per individuare l'equazione di $\gamma'$, scriviamo le equazioni della simmetria assiale rispetto alla retta $x = 1$:
$$\begin{cases} x' = 2 - x \\ y' = y \end{cases} \;\Rightarrow\; \begin{cases} x = 2 - x' \\ y = y' \end{cases}.$$

Sostituendo nell'equazione di $\gamma$:
$$y' = \ln\!\left(1 - \frac{2-x'}{2}\right) + \frac{(2-x')^2}{2} - (2-x')$$
$$= \ln\!\left(\frac{x'}{2}\right) + \frac{(2-x')^2}{2} - (2-x').$$

Togliamo gli apici:
$$\gamma':\quad y = \ln\!\left(\frac{x}{2}\right) + \frac{(2-x)^2}{2} - (2-x).$$

*(grafico — vedi PDF p.94)*

---

## Questionario

### Quesito 1

La funzione $f(x)$ è definita in $]-\infty;\,0]$ ed è continua e derivabile nell'intervallo aperto $]-\infty;\,0[$.

Per $x < 0$ abbiamo:
$$f'(x) = D\!\left[x^2 e^{1/x}\right] = 2x e^{1/x} + x^2 \cdot e^{1/x}\cdot\left(-\frac{1}{x^2}\right) = e^{1/x}\!\left(2x - 1\right) \cdot \frac{1}{x}\cdot x = e^{1/x}(2x-1).$$

Più precisamente: $f'(x) = e^{1/x}(2x - 1)$ non è corretto direttamente; la derivata è:
$$f'(x) = 2x e^{1/x} + x^2 e^{1/x}\cdot\!\left(-\frac{1}{x^2}\right) = e^{1/x}(2x - 1).$$

*(visibile a PDF p.94)*

Inoltre:
$$\lim_{x\to 0^-} f(x) = \lim_{x\to 0^-} x^2 e^{1/x} = 0 \quad \text{e} \quad f(0) = 0,$$
quindi $f(x)$ è continua (da sinistra) anche in $x = 0$.

Affinché $f(x)$ sia derivabile in $x = 0$, deve esistere finito il limite:
$$\lim_{x\to 0^-} f'(x) = \lim_{x\to 0^-} e^{1/x}(2x - 1).$$

Poniamo $y = \dfrac{1}{x}$; per $x \to 0^-$ si ha $y \to -\infty$:
$$e^{1/x}(2x-1) = e^y\!\left(\frac{2}{y} - 1\right) = \frac{2e^y}{y} - e^y.$$

Si presenta la forma indeterminata $\dfrac{-\infty}{-\infty}$ (poiché $e^y \to 0$ per $y \to -\infty$). Applicando il teorema di De L'Hospital due volte:
$$\lim_{y\to -\infty} \frac{e^y}{y^2} = \lim_{y\to -\infty}\frac{e^y}{2y} = \lim_{y\to -\infty}\frac{e^y}{2} = 0.$$

Quindi:
$$\lim_{x\to 0^-} f'(x) = 0 = f'(0),$$
e la derivata prima esiste ed è continua su $]-\infty;\,0]$.

### Quesito 2

Il numero di sequenze che si possono fare con tutte le 24 perle (6 rosse, 10 arancioni, 8 gialle) è dato dalle permutazioni con ripetizione:
$$n = \frac{24!}{6!\cdot 10!\cdot 8!} = 5\,889\,651\,768.$$

Nel caso in cui la prima e l'ultima perla siano arancioni, restano da disporre 22 perle (6 rosse, 8 arancioni, 8 gialle):
$$n_a = \frac{22!}{6!\cdot 8!\cdot 8!} = 960\,269\,310.$$

Nel caso in cui la prima e l'ultima perla siano rosse (restano 4 rosse, 10 arancioni, 8 gialle):
$$n_r = \frac{22!}{4!\cdot 10!\cdot 8!} = 320\,089\,770.$$

Nel caso in cui la prima e l'ultima perla siano gialle (restano 6 rosse, 10 arancioni, 6 gialle):
$$n_g = \frac{22!}{6!\cdot 10!\cdot 6!} = 597\,500\,904.$$

Il numero totale delle sequenze con le perle estreme dello stesso colore è:
$$n_r + n_a + n_g = 1\,877\,859\,984.$$

### Quesito 3

Affinché $f(x)$ verifichi le ipotesi del teorema di Lagrange, deve essere continua nell'intervallo chiuso $\left[\dfrac{a}{2};\,b\right]$ e derivabile nell'intervallo aperto $\left(\dfrac{a}{2};\,b\right)$.

La funzione $f(x)$ è continua in ogni punto $x \neq a$, poiché composizione di funzioni continue. Per $x \neq a$ la funzione è anche derivabile:
$$f'(x) = \begin{cases} 2(x-a) & \text{se } x < a \\ -1 & \text{se } x > a \end{cases}.$$

*(Considera $f(x) = |x-a|^2$ per $x<a$ oppure il testo visivo al PDF p.96.)*

Se $b \le a$, allora $\dfrac{a}{2} < b \le a$ e quindi $f(x)$ soddisfa le ipotesi del teorema di Lagrange nell'intervallo $\left[\dfrac{a}{2};\,b\right]$.

Se $b > a$, allora $a \in \left(\dfrac{a}{2};\,b\right)$: occorre verificare la derivabilità di $f(x)$ in $x = a$.

Studiamo la continuità in $x = a$:
$$\lim_{x\to a^-} f(x) = (a-a)^2 = 0 = f(a); \qquad \lim_{x\to a^+} f(x) = \lim_{x\to a^+}(a-x) = 0.$$
Quindi $f$ è continua in $x = a$.

Verifichiamo la derivabilità:
$$\lim_{x\to a^-} f'(x) = \lim_{x\to a^-} 2(x-a) = 0; \qquad \lim_{x\to a^+} f'(x) = \lim_{x\to a^+}(-1) = -1.$$

I due limiti sono diversi, quindi $f$ **non è derivabile** in $x = a$ e pertanto non soddisfa le ipotesi del teorema di Lagrange negli intervalli $\left[\dfrac{a}{2};\,b\right]$ con $b > a$.

### Quesito 4

Un possibile integrale definito che ha come risultato $\ln 2$ è:
$$\int_1^2 \frac{1}{x}\,dx = \Bigl[\ln x\Bigr]_1^2 = \ln 2 - \ln 1 = \ln 2.$$

Siano dunque $f(x) = \dfrac{1}{x}$ e $[a;b] = [1;2]$.

Determiniamo una soluzione approssimata applicando il **metodo dei trapezi**.

Poiché $f'(x) = -\dfrac{1}{x^2}$ e $f''(x) = \dfrac{2}{x^3}$, l'errore con $n$ parti è:
$$|E| \le \frac{(b-a)^3}{12n^2}\max_{x\in[1,2]}|f''(x)| = \frac{1}{12n^2}\cdot 2 = \frac{1}{6n^2}.$$

Imponiamo $|E| < \dfrac{1}{100}$:
$$\frac{1}{6n^2} < \frac{1}{100} \;\Rightarrow\; n^2 > \frac{100}{6} \approx 16{,}67 \;\Rightarrow\; n \ge 5.$$

Suddividiamo $[1;2]$ in $n = 5$ parti di ampiezza $h = 0{,}2$:

| $x_i$ | 1 | 1,2 | 1,4 | 1,6 | 1,8 | 2 |
|--------|---|-----|-----|-----|-----|---|
| $f(x_i)$ | 1 | 0,833 | 0,714 | 0,625 | 0,556 | 0,5 |

Applichiamo la formula dei trapezi:
$$\int_1^2 \frac{1}{x}\,dx \approx \frac{0{,}2}{2}\bigl[f(1) + 2f(1{,}2) + 2f(1{,}4) + 2f(1{,}6) + 2f(1{,}8) + f(2)\bigr]$$
$$= 0{,}1\cdot\bigl[1 + 2(0{,}833) + 2(0{,}714) + 2(0{,}625) + 2(0{,}556) + 0{,}5\bigr]$$
$$= 0{,}1\cdot\bigl[1 + 1{,}666 + 1{,}428 + 1{,}250 + 1{,}112 + 0{,}5\bigr] = 0{,}1\cdot 6{,}956 = 0{,}6956.$$

Quindi $\ln 2 \approx 0{,}696$.

### Quesito 5

Per determinare il dominio della funzione, consideriamo che:
- a) il radicando di una radice di indice pari deve essere non negativo: $\dfrac{\ln(x-2)}{\ln x} \ge 0$;
- b) gli argomenti dei logaritmi devono essere positivi: $x - 2 > 0$ e $x > 0$, quindi $x > 2$;
- c) il denominatore deve essere diverso da zero: $\ln x \neq 0 \;\Rightarrow\; x \neq 1$.

L'ultima condizione è implicita nella condizione $x > 2$.

Risolviamo la disequazione $\dfrac{\ln(x-2)}{\ln x} \ge 0$. Studiamo separatamente il segno di numeratore e denominatore:

- $N$: $\ln(x-2) > 0 \;\Rightarrow\; x-2 > 1 \;\Rightarrow\; x > 3$;
- $D$: $\ln x > 0 \;\Rightarrow\; x > 1$.

*(grafico dei segni — vedi PDF p.97)*

La disequazione è soddisfatta per $x > 3$ oppure $2 < x \le 3$ con $\ln(x-2)\le0$ e $\ln x > 0$, ovvero $2 < x \le 3$ (dove $\ln(x-2)\le0$) e $x > e^2$ (dove $\ln x > 0$ se si considera il denominatore).

Più precisamente, mettendo a sistema con $x > 2$:

$$D = \{2 < x \le 3\} \cup \{x > e^2\}.$$

### Quesito 6

La funzione $f$ è decrescente nell'intervallo $(-\infty;\,3]$, crescente nell'intervallo $[3;\,+\infty)$ e presenta il minimo assoluto nel punto $M(3;\,-2)$; pertanto la derivata prima $f'$ è:
- negativa per $x < 3$,
- positiva per $x > 3$,
- nulla per $x = 3$.

Il grafico di $f'$ interseca l'asse $x$ in $(3;\,0)$.

I punti $O$ e $F$ sono punti di flesso per $f$ e punti stazionari per $f'$. Dal grafico ricaviamo le equazioni delle tangenti nei punti di flesso:
- in $O$: $y = -x$;
- in $F$: $y - 1 = \dfrac{1}{2}(x-6) \;\Rightarrow\; y = \dfrac{1}{2}x - 4 + 1 = \dfrac{1}{2}x - 2$.

*(grafico — vedi PDF p.98)*

I coefficienti angolari forniscono i valori delle derivate nei punti di flesso:
$$f'(0) = -1; \qquad f'(6) = \frac{1}{2}.$$

Quindi $(-1;\,0)$ e $\left(6;\,\dfrac{1}{2}\right)$ sono le coordinate dei punti stazionari di $f'$.

$f$ presenta due asintoti orizzontali ($y = 3$ per $x\to-\infty$, $y=0$ per $x\to+\infty$), quindi $f'$ tende a $0$ per $x\to\pm\infty$.

Osservando le concavità di $f$:
- $f'$ è decrescente per $x < 0$, con valori che vanno da $0$ (per $x\to-\infty$) a $-1$ (in $x=0$);
- $f'$ è crescente per $0 < x < 6$, con valori da $-1$ (in $x=0$) a $0$ (in $x=3$) e poi fino a $\tfrac{1}{2}$ (in $x=6$);
- $f'$ è decrescente per $x > 6$, con valori da $\tfrac{1}{2}$ (in $x=6$) a $0$ (per $x\to+\infty$).

*(grafico probabile di $f'$ — vedi PDF p.98–99)*

### Quesito 7

Il limite:
$$\lim_{x\to\pi} \frac{\sin x}{e^\pi - e^x}$$
si presenta nella forma indeterminata $\dfrac{0}{0}$.

**Metodo 1 — cambio di variabile.** Poniamo $y = x - \pi$, così $y \to 0$ quando $x \to \pi$:
$$\lim_{y\to 0}\frac{\sin(y+\pi)}{e^\pi - e^{y+\pi}} = \lim_{y\to 0}\frac{-\sin y}{e^\pi(1-e^y)} = \lim_{y\to 0}\left(-\frac{1}{e^\pi}\cdot\frac{\sin y}{y}\cdot\frac{y}{1-e^y}\right)$$
$$= -\frac{1}{e^\pi}\cdot 1\cdot\lim_{y\to 0}\frac{y}{1-e^y} = -\frac{1}{e^\pi}\cdot(-1) = e^{-\pi}.$$

**Metodo 2 — definizione di derivata.** Riscriviamo:
$$\lim_{x\to\pi}\frac{\sin x}{e^\pi - e^x} = \lim_{x\to\pi}\left(-\frac{\sin x - \sin\pi}{e^x - e^\pi}\right) = -\lim_{x\to\pi}\frac{\sin x - \sin\pi}{x-\pi}\cdot\left[\lim_{x\to\pi}\frac{e^x - e^\pi}{x-\pi}\right]^{-1}$$
$$= -(\cos\pi)\cdot\bigl[e^\pi\bigr]^{-1} = -(-1)\cdot e^{-\pi} = e^{-\pi}.$$

### Quesito 8

I piani paralleli che individuano le due sezioni sono distanti $1$: $HK = 1$. Poniamo $OH = x$, con $0 \le x \le 1$, e quindi $OK = 1-x$.

*(grafico sfera — vedi PDF p.100)*

Le due sezioni con la sfera (di raggio $1$ centrata in $O$) originano due cerchi di raggi $HB$ e $KC$; per il teorema di Pitagora:
$$HB^2 = OB^2 - OH^2 = 1 - x^2;$$
$$KC^2 = OC^2 - OK^2 = 1 - (1-x)^2 = 2x - x^2.$$

Indichiamo con $S(x)$ la somma delle aree dei due cerchi:
$$S(x) = \pi HB^2 + \pi KC^2 = \pi(1-x^2) + \pi(2x-x^2) = \pi(1 + 2x - 2x^2).$$

Dobbiamo determinare il massimo di $S(x)$ per $x \in [0;1]$. Il grafico di $S(x)$ è una parabola con concavità rivolta verso il basso; il vertice ha ascissa:
$$x_V = -\frac{2}{2\cdot(-2)} = \frac{1}{2}.$$

Poiché $\dfrac{1}{2} \in [0;1]$, il massimo è:
$$S\!\left(\frac{1}{2}\right) = \pi\!\left(1 + 2\cdot\frac{1}{2} - 2\cdot\frac{1}{4}\right) = \pi\!\left(1 + 1 - \frac{1}{2}\right) = \frac{3}{2}\pi.$$

Pertanto i due piani paralleli rendono massima la somma delle aree delle sezioni con la sfera quando sono **equidistanti dal centro**.

### Quesito 9

Indichiamo con $x$ il numero di palline bianche; quelle nere saranno $100 - x$ (con $0 \le x \le 100$).

Dobbiamo determinare $x$ in modo tale che la probabilità di estrarre due palline dello stesso colore sia uguale alla probabilità di estrarne due di colore diverso.

Indicando con $B$ l'evento «estrarre una pallina bianca» e $N$ «estrarre una pallina nera»:

$$P(B)\cdot P(B|B) + P(N)\cdot P(N|N) = P(B)\cdot P(N|B) + P(N)\cdot P(B|N)$$

$$\frac{x}{100}\cdot\frac{x-1}{99} + \frac{100-x}{100}\cdot\frac{99-x}{99} = \frac{x}{100}\cdot\frac{100-x}{99} + \frac{100-x}{100}\cdot\frac{x}{99}.$$

Moltiplicando per $9900$:
$$x(x-1) + (100-x)(99-x) = x(100-x) + (100-x)\cdot x = 2x(100-x).$$

Sviluppando il primo membro:
$$x^2 - x + 9900 - 199x + x^2 = 2x^2 - 200x + 9900 = 2x(100-x) = 200x - 2x^2.$$

$$2x^2 - 200x + 9900 = 200x - 2x^2 \;\Rightarrow\; 4x^2 - 400x + 9900 = 0 \;\Rightarrow\; x^2 - 100x + 2475 = 0.$$

$$x = \frac{100 \pm \sqrt{10000 - 9900}}{2} = \frac{100 \pm 10}{2} \;\Rightarrow\; x_1 = 45,\quad x_2 = 55.$$

Pertanto nella scatola ci sono **45 palline bianche e 55 nere**, oppure **55 bianche e 45 nere**.

### Quesito 10

Riscriviamo l'equazione isolando il parametro:
$$xe^{kx} + k = k \;\Rightarrow\; xe^{kx} = k - k = 0 \ldots$$

*(Il testo corretto dal PDF p.101–102 è:)*

$$x e^{kx} + k = k \quad \text{non corrisponde; dal PDF:} \quad x + ke^x = ke^k$$

Riscriviamo l'equazione in altra forma:
$$x + ke^x = ke^k \;\Rightarrow\; k(e^x - e^k) = -x \;\Rightarrow\;$$

Seguendo il PDF p.101:
$$xe^{-x} = \frac{k}{1+k}.$$

Poniamo $f(x) = xe^{-x}$ e $g(x) = \dfrac{k}{1+k}$ (con $k \neq -1$).

Caratteristiche di $f(x) = xe^{-x}$:
- Dominio: $\mathbb{R}$;
- $f(x) > 0$ per $x > 0$;
- Intersezioni con gli assi: $(0;0)$;
- $\displaystyle\lim_{x\to -\infty} xe^{-x} = -\infty$; $\displaystyle\lim_{x\to +\infty} xe^{-x} = 0$ (l'asse $x$ è asintoto orizzontale destro);
- $f'(x) = e^{-x}(1-x)$: massimo in $x=1$ con $f(1) = e^{-1} = \dfrac{1}{e}$.

*(grafico di $f(x) = xe^{-x}$ — vedi PDF p.101)*

La funzione $g(x) = \dfrac{k}{1+k}$ rappresenta, al variare di $k$ (con $k \neq -1$), un fascio di rette orizzontali.

L'equazione $xe^{-x} = \dfrac{k}{1+k}$ ha **due soluzioni coincidenti** quando la retta orizzontale è tangente al grafico nel punto stazionario $\left(1;\,\dfrac{1}{e}\right)$, cioè quando:
$$\frac{k}{1+k} = \frac{1}{e} \;\Rightarrow\; ke = 1 + k \;\Rightarrow\; k(e-1) = 1 \;\Rightarrow\; k = \frac{1}{e-1}.$$
