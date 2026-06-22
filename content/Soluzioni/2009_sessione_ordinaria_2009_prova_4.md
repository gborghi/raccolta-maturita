---
tipo: soluzione
prova_stem: 2009_sessione_ordinaria_2009_prova_4
pdf: Prova_Maturita_2009.pdf
source: text
title: 2009 Sessione Ordinaria — Prova — Svolgimento
---
## Problema 1

### Punto 1

L'area $S(x)$ compresa fra l'arco e la corda $AB$ del settore circolare $AOB$ di raggio $r$ e ampiezza $x \in [0, 2\pi]$ si ottiene sottraendo dall'area del settore quella del triangolo $OAB$.

**Area del settore:**

$$\text{Area settore} = \frac{r^2 x}{2}$$

**Area del triangolo $OAB$:** con due lati uguali a $r$ e angolo al vertice $O$ uguale a $x$,

$$\text{Area triangolo} = \frac{1}{2} r^2 \sin x$$

**Quindi:**

$$S(x) = \frac{r^2 x}{2} - \frac{r^2 \sin x}{2} = \frac{r^2}{2}(x - \sin x), \qquad x \in [0, 2\pi]$$

*(Per $x$ concavo, ossia $x \in (\pi, 2\pi]$, si ha $\sin x < 0$, per cui la formula resta valida con lo stesso segno.)*

---

### Punto 2

Con $r = 1$:

$$y = S(x) = \frac{1}{2}(x - \sin x), \qquad x \in [0, 2\pi]$$

**Valori agli estremi:** $S(0) = 0$, $S(2\pi) = \pi$.

**Derivata prima:**

$$S'(x) = \frac{1}{2}(1 - \cos x)$$

- $S'(x) = 0$ solo per $\cos x = 1$, cioè $x = 0$ e $x = 2\pi$.
- $S'(x) > 0$ per ogni $x \in (0, 2\pi)$: la funzione è **strettamente crescente** su tutto l'intervallo; agli estremi la tangente è orizzontale.

**Derivata seconda:**

$$S''(x) = \frac{1}{2}\sin x$$

- $S''(x) > 0$ per $x \in (0, \pi)$: concavità verso l'alto.
- $S''(x) < 0$ per $x \in (\pi, 2\pi)$: concavità verso il basso.
- Flesso in $x = \pi$ con ordinata $S(\pi) = \dfrac{\pi}{2}$.

*(grafico — vedi PDF)*

---

### Punto 3

Dati: area del settore $= 100\text{ m}^2$, perimetro $P = 2r + rx$.

Dall'area del settore:

$$\frac{r^2 x}{2} = 100 \implies r^2 x = 200$$

**Metodo elementare (AM–GM):**

Il prodotto $(2r)(rx) = 2r^2 x = 400$ è costante. Per la disuguaglianza AM–GM,

$$P = 2r + rx \ge 2\sqrt{2r \cdot rx} = 2\sqrt{2r^2 x} = 2\sqrt{400} = 40$$

con uguaglianza se e solo se $2r = rx$, cioè $x = 2$ rad. Sostituendo:

$$r^2 \cdot 2 = 200 \implies r = 10 \text{ m}$$

**Metodo delle derivate:**

Dall'area del settore, $x = \dfrac{200}{r^2}$. Sostituendo nel perimetro:

$$P(r) = 2r + \frac{200}{r}$$

$$P'(r) = 2 - \frac{200}{r^2} = 0 \implies r^2 = 100 \implies r = 10 \text{ m}$$

Il valore $r = 10$ è un minimo ($P'' > 0$). Il corrispondente angolo è $x = \dfrac{200}{100} = 2$ rad.

In gradi sessagesimali:

$$x^\circ = \frac{2 \cdot 180°}{\pi} \approx \frac{360°}{3{,}1416} \approx 115°$$

---

### Punto 4

Con $r = 2$ e $x = \dfrac{\pi}{3}$, il settore $AOB$ è nel piano $xy$. L'asse $OB$ coincide con l'asse $x$; la retta $OA$ forma un angolo di $\dfrac{\pi}{3}$ con $OB$.

Il punto $A$ ha coordinate: $A = \left(2\cos\dfrac{\pi}{3},\; 2\sin\dfrac{\pi}{3}\right) = (1,\; \sqrt{3})$.

La retta $OA$ ha equazione $y = \sqrt{3}\, x$, cioè $x = \dfrac{y}{\sqrt{3}}$.

La circonferenza di raggio $2$ ha equazione $x^2 + y^2 = 4$, cioè $x = \sqrt{4 - y^2}$ nel primo quadrante.

Per ogni $y \in [0, \sqrt{3}]$, la sezione perpendicolare all'asse $OB$ (all'altezza $y$) è un quadrato con lato

$$\ell(y) = \sqrt{4 - y^2} - \frac{y}{\sqrt{3}}$$

Il volume del solido $W$ è:

$$V = \int_0^{\sqrt{3}} \left(\sqrt{4 - y^2} - \frac{y}{\sqrt{3}}\right)^2 dy$$

Espandendo:

$$= \int_0^{\sqrt{3}} \left[(4 - y^2) - \frac{2y\sqrt{4 - y^2}}{\sqrt{3}} + \frac{y^2}{3}\right] dy$$

$$= \int_0^{\sqrt{3}} \left(4 - \frac{2y^2}{3}\right) dy - \frac{2}{\sqrt{3}} \int_0^{\sqrt{3}} y\sqrt{4 - y^2}\, dy$$

**Primo integrale:**

$$\int_0^{\sqrt{3}} \left(4 - \frac{2y^2}{3}\right) dy = \left[4y - \frac{2y^3}{9}\right]_0^{\sqrt{3}} = 4\sqrt{3} - \frac{2 \cdot 3\sqrt{3}}{9} = 4\sqrt{3} - \frac{2\sqrt{3}}{3} = \frac{10\sqrt{3}}{3}$$

**Secondo integrale** (sostituzione $u = 4 - y^2$, $du = -2y\,dy$):

$$\int_0^{\sqrt{3}} y\sqrt{4 - y^2}\, dy = \left[-\frac{1}{3}(4 - y^2)^{3/2}\right]_0^{\sqrt{3}} = -\frac{1^3}{3} + \frac{8}{3} = \frac{7}{3}$$

**Risultato:**

$$V = \frac{10\sqrt{3}}{3} - \frac{2}{\sqrt{3}} \cdot \frac{7}{3} = \frac{10\sqrt{3}}{3} - \frac{14}{3\sqrt{3}} = \frac{10\sqrt{3}}{3} - \frac{14\sqrt{3}}{9} = \frac{30\sqrt{3} - 14\sqrt{3}}{9} = \frac{16\sqrt{3}}{9}$$

$$\boxed{V = \frac{16\sqrt{3}}{9}}$$

---

## Problema 2

### Punto 1

Si considera $f(x) = \ln x$.

La tangente al grafico in un generico punto $P = (t,\, \ln t)$ (con $t > 0$) ha equazione:

$$y = \frac{1}{t}(x - t) + \ln t$$

I punti notevoli:

- $A$ = intersezione della tangente con l'asse $y$ (poniamo $x = 0$):
$$y_A = \frac{1}{t}(0 - t) + \ln t = \ln t - 1$$
quindi $A = (0,\; \ln t - 1)$.

- $B$ = intersezione della parallela a $y = \ln t$ con l'asse $y$: $B = (0,\; \ln t)$.

Lunghezza del segmento $AB$:

$$AB = y_B - y_A = \ln t - (\ln t - 1) = 1$$

La lunghezza è **costante** (uguale a $1$) al variare di $P$.

**Caso $g(x) = \log_a x$ con $a > 0$, $a \ne 1$:**

Poiché $g'(x) = \dfrac{1}{x \ln a}$, la tangente in $P = (t,\, \log_a t)$ dà:

$$y_A = \log_a t - \frac{1}{\ln a} = \log_a t - \log_a e, \qquad B = (0,\; \log_a t)$$

$$AB = y_B - y_A = \log_a e$$

La proprietà vale ancora: il segmento $AB$ ha lunghezza **costante** $|\log_a e|$ al variare di $P$.

---

### Punto 2

Poiché $g'(x) = \dfrac{1}{x \ln a}$, la pendenza della tangente in $x = 1$ è $g'(1) = \dfrac{1}{\ln a}$.

- Per $\delta = 45°$: $\tan(45°) = 1$, quindi

$$\frac{1}{\ln a} = 1 \implies \ln a = 1 \implies a = e.$$

- Per $\delta = 135°$: $\tan(135°) = -1$, quindi

$$\frac{1}{\ln a} = -1 \implies \ln a = -1 \implies a = \frac{1}{e}.$$

---

### Punto 3

*(grafico — vedi PDF)*

La regione $D$ è nel primo quadrante, delimitata dagli assi, dalla curva $y = \ln x$ e dalla retta $y = 1$. L'intersezione $y = \ln x = 1$ dà $x = e$.

Integrando rispetto a $y$ (con $x = e^y$, $y \in [0, 1]$):

$$\text{Area}(D) = \int_0^1 e^y\, dy = \left[e^y\right]_0^1 = e - 1$$

---

### Punto 4

*(grafico — vedi PDF)*

Si ruota $D$ attorno alla retta $x = -1$. Con la traslazione $X = x + 1$ (in modo che l'asse di rotazione diventi $X = 0$), la curva $y = \ln x$ diventa $y = \ln(X - 1)$, cioè $X = e^y + 1$.

Il volume si calcola con il metodo dei gusci cilindrici oppure con i dischi rispetto alla variabile $Y = y$:

$$V = \pi \int_0^1 (e^y + 1)^2\, dy - \pi \cdot 1^2 \cdot 1$$

(si sottrae il volume del cilindretto di raggio $1$ e altezza $1$ corrispondente all'asse $y$).

Espandendo:

$$\int_0^1 (e^y + 1)^2\, dy = \int_0^1 \left(e^{2y} + 2e^y + 1\right) dy = \left[\frac{e^{2y}}{2} + 2e^y + y\right]_0^1$$

$$= \left(\frac{e^2}{2} + 2e + 1\right) - \left(\frac{1}{2} + 2\right) = \frac{e^2}{2} + 2e + 1 - \frac{5}{2} = \frac{e^2}{2} + 2e - \frac{3}{2}$$

Quindi:

$$V = \pi\!\left(\frac{e^2}{2} + 2e - \frac{3}{2}\right) - \pi = \pi\!\left(\frac{e^2}{2} + 2e - \frac{5}{2}\right)$$

---

## Quesito 9

*(Scodella di Galilei — Principio di Cavalieri)*

Si considera una semisfera di raggio $r$ e il cilindro circoscritto di raggio $r$ e altezza $r$. La **scodella** è il solido ottenuto togliendo la semisfera dal cilindro.

Si confronta la scodella con il **cono** di raggio base $r$ e altezza $r$ (vertice $V$ in alto).

**Sezione a quota $h$ dal piano di base** (con $0 \le h \le r$):

- *Scodella:* la sezione del cilindro a quota $h$ è un cerchio di raggio $r$; da esso si sottrae la sezione della semisfera, che è un cerchio di raggio $\sqrt{r^2 - h^2}$ (poiché $x^2 + h^2 = r^2$). L'area della sezione della scodella è:

$$A_{\text{scodella}}(h) = \pi r^2 - \pi(r^2 - h^2) = \pi h^2$$

- *Cono:* il cono ha vertice a quota $r$ e base a quota $0$; a quota $h$ il raggio della sezione è $r - h$ (per similitudine: $\dfrac{\rho}{r} = \dfrac{r - h}{r}$, quindi $\rho = r - h$). L'area è:

$$A_{\text{cono}}(h) = \pi(r - h)^2$$

Attenzione: qui il cono ha il vertice $V$ in alto e la base in basso. Per confrontarlo correttamente con la scodella, si considera la sezione del cono a distanza $h$ dalla base, che ha raggio $\rho = h$ (inversamente proporzionale):

$$A_{\text{cono}}(h) = \pi h^2$$

Le due aree sono **uguali** per ogni $h \in [0, r]$.

Per il **principio di Cavalieri**, due solidi le cui sezioni parallele hanno sempre la stessa area hanno lo stesso volume:

$$V_{\text{scodella}} = V_{\text{cono}} = \frac{1}{3}\pi r^2 \cdot r = \frac{\pi r^3}{3}$$

*(Verifica diretta: $V_{\text{cilindro}} = \pi r^3$, $V_{\text{semisfera}} = \dfrac{2}{3}\pi r^3$, $V_{\text{scodella}} = \pi r^3 - \dfrac{2}{3}\pi r^3 = \dfrac{\pi r^3}{3}$.)*

---

## Quesito 10

Si determina il periodo della funzione $f(x) = \cos(\sqrt{5}\, x)$.

Ricordiamo che la funzione $\cos(x)$ ha periodo $2\pi$. Se $g(x)$ è periodica con periodo $T$, allora $g(kx)$ è periodica con periodo $T' = \dfrac{T}{k}$.

Nel caso $f(x) = \cos(\sqrt{5}\, x)$, si ha $k = \sqrt{5}$ e $T = 2\pi$, quindi:

$$T' = \frac{2\pi}{\sqrt{5}} = \frac{2\pi\sqrt{5}}{5}$$

**Verifica diretta.** Il periodo è il minimo $T' > 0$ per cui $f(x + T') = f(x)$ per ogni $x$:

$$\cos\!\left[\sqrt{5}(x + T')\right] = \cos\!\left(\sqrt{5}\, x + \sqrt{5}\, T'\right) = \cos(\sqrt{5}\, x)$$

se e solo se $\sqrt{5}\, T' = 2\pi$, da cui $T' = \dfrac{2\pi}{\sqrt{5}} = \dfrac{2\sqrt{5}\,\pi}{5}$.

$$\boxed{T = \frac{2\pi}{\sqrt{5}} = \frac{2\sqrt{5}\,\pi}{5}}$$

---

## Quesito 1

Si dimostri che l'equazione $x^{19} + 19x + 11 = 0$ ha una sola radice compresa fra $-1$ e $0$.

Consideriamo $f(x) = x^{19} + 19x + 11$. Si tratta di una funzione polinomiale di grado dispari, quindi è continua su tutto $\mathbb{R}$.

Calcoliamo i valori agli estremi:

$$f(-1) = (-1)^{19} + 19(-1) + 11 = -1 - 19 + 11 = -9 < 0$$

$$f(0) = 0 + 0 + 11 = 11 > 0$$

Per il **teorema degli zeri**, $f$ si annulla almeno una volta in $(-1, 0)$.

Calcoliamo la derivata prima:

$$f'(x) = 19x^{18} + 19 = 19(x^{18} + 1) > 0 \quad \text{per ogni } x \in \mathbb{R}$$

La funzione è quindi **strettamente crescente** su tutto $\mathbb{R}$, dunque può annullarsi **al più una volta**. In particolare, $x^{19} + 19x + 11 = 0$ ha esattamente una radice, che cade in $(-1, 0)$.

---

## Quesito 2

Si determini il periodo della funzione $f(x) = \cos(7x)$.

Ricordiamo che $g(x) = \cos(x)$ ha periodo $T = 2\pi$. Se $g(x)$ ha periodo $T$, allora $g(kx)$ ha periodo $T' = \dfrac{T}{k}$.

Con $k = 7$:

$$T' = \frac{2\pi}{7}$$

**Dimostrazione diretta.** Il periodo è il minimo $T' > 0$ tale che $f(x + T') = f(x)$ per ogni $x$:

$$\cos[7(x + T')] = \cos(7x + 7T') = \cos(7x) \iff 7T' = 2\pi \iff T' = \frac{2\pi}{7}$$

$$\boxed{T = \frac{2\pi}{7}}$$

---

## Quesito 3

Si scrivano le equazioni di almeno due funzioni razionali fratte aventi un asintoto obliquo.

Una funzione razionale fratta ha un asintoto obliquo se e solo se il grado del numeratore supera di $1$ il grado del denominatore. La condizione necessaria e sufficiente affinché $f(x)$ abbia come asintoto la retta $y = mx + q$ è che $f(x)$ si possa scrivere nella forma $f(x) = mx + q + g(x)$, con $g(x) \to 0$ per $x \to \pm\infty$.

**Esempio 1:**

$$f(x) = x + 1 - \frac{1}{x} = \frac{x^2 + x - 1}{x}$$

ha asintoto obliquo $y = x + 1$.

**Esempio 2:**

$$g(x) = 2x + 3 + \frac{1}{x^2} = \frac{2x^3 + 3x^2 + 1}{x^2}$$

ha asintoto obliquo $y = 2x + 3$.

---

## Quesito 4

Si trovi il valore del parametro $k$ in modo che la curva di equazione $y = kx^3 - x + 4$ abbia nel punto di ascissa $x = 1$ la tangente orizzontale.

Si richiede $y'(1) = 0$. Calcoliamo la derivata:

$$y' = 3kx^2 - 1$$

Imponendo $y'(1) = 0$:

$$3k \cdot 1^2 - 1 = 0 \implies 3k = 1 \implies k = \frac{1}{3}$$

---

## Quesito 5

**Definizione.** Un poliedro regolare è un poliedro le cui facce sono poligoni regolari congruenti e in cui in ogni vertice convergono lo stesso numero di facce (gli angoloidi sono tutti congruenti).

**Dimostrazione che i poliedri regolari sono esattamente 5.**

Perché un angoloide poliedrale possa esistere, la somma degli angoli delle facce convergenti al vertice deve essere **strettamente minore di $360°$**.

- **Facce triangolari** (angolo interno $60°$): si possono avere $3$, $4$ o $5$ facce per vertice ($3 \times 60° = 180°$, $4 \times 60° = 240°$, $5 \times 60° = 300°$; con $6$ si avrebbe $360°$, impossibile). Si ottengono il **tetraedro**, l'**ottaedro** e l'**icosaedro**.

- **Facce quadrate** (angolo interno $90°$): solo $3$ facce per vertice ($3 \times 90° = 270°$; con $4$ si avrebbe $360°$). Si ottiene il **cubo** (esaedro).

- **Facce pentagonali** (angolo interno $108°$): solo $3$ facce per vertice ($3 \times 108° = 324°$; con $4$ si avrebbe $432° > 360°$). Si ottiene il **dodecaedro**.

- **Facce esagonali** (angolo interno $120°$): $3 \times 120° = 360°$, impossibile.

- Poligoni con più lati hanno angoli interni ancora maggiori, quindi impossibili.

I poliedri regolari (solidi platonici) sono dunque **5**: tetraedro, cubo, ottaedro, dodecaedro, icosaedro.

---

## Quesito 6

Quanti sono i numeri di quattro cifre (distinte tra loro) che è possibile scrivere utilizzando le cifre pari diverse da zero?

Le cifre pari diverse da zero disponibili sono: $2, 4, 6, 8$, cioè esattamente $4$ cifre.

I numeri di quattro cifre distinte sono le permutazioni semplici di $4$ oggetti:

$$P_4 = 4! = 24$$

---

## Quesito 7

Si calcoli $\displaystyle\lim_{x \to 0} \frac{1 - \cos 3x}{x^2}$.

Il limite si presenta nella forma indeterminata $\left[\frac{0}{0}\right]$. Si moltiplica e divide per $1 + \cos 3x$:

$$\lim_{x \to 0} \frac{1 - \cos 3x}{x^2} = \lim_{x \to 0} \frac{(1 - \cos 3x)(1 + \cos 3x)}{x^2(1 + \cos 3x)} = \lim_{x \to 0} \frac{\sin^2 3x}{x^2} \cdot \frac{1}{1 + \cos 3x}$$

$$= \lim_{x \to 0} \left(\frac{\sin 3x}{3x}\right)^2 \cdot 9 \cdot \frac{1}{1 + \cos 3x} = 1^2 \cdot 9 \cdot \frac{1}{2} = \frac{9}{2}$$

Si è applicato il limite notevole $\displaystyle\lim_{u \to 0} \frac{\sin u}{u} = 1$.

$$\boxed{\lim_{x \to 0} \frac{1 - \cos 3x}{x^2} = \frac{9}{2}}$$

---

## Quesito 8

Si risolva in $\mathbb{R}$ l'equazione $e^{2x} + e^x = 2$.

Poniamo $t = e^x$ con $t > 0$. L'equazione diventa:

$$t^2 + t - 2 = 0$$

$$\Delta = 1 + 8 = 9 \implies t = \frac{-1 \pm 3}{2}$$

Le soluzioni sono $t = 1$ e $t = -2$. Poiché $t = e^x > 0$, si scarta $t = -2$.

Da $e^x = 1$ si ottiene $x = 0$.

L'equazione ha l'unica soluzione $x = 0$.
