---
tipo: soluzione
prova_stem: 2007_sessione_ordinaria_2007_prova_168
pdf: Prova_Maturita_2007.pdf
source: text
title: 2007 Ordinaria PNI — Prova — Svolgimento
---
Maturità 2007 — Sessione ordinaria — Liceo Scientifico PNI (Piano Nazionale Informatica)

## Problema 1

Sia $a > 0$ e sia $g$ la funzione definita per ogni $x \in \mathbb{R}$ da:

$$g(x) = \frac{a^x + a^{-x}}{2}$$

(coseno iperbolico generalizzato in base $a$).

**Punto 1. Monotonia di $g$ per $a \neq 1$.**

Calcoliamo la derivata:

$$g'(x) = \frac{a^x \ln a - a^{-x} \ln a}{2} = \frac{\ln a\,(a^x - a^{-x})}{2}.$$

Per $x > 0$: $a^x > a^{-x}$ se $a > 1$, oppure $a^x < a^{-x}$ se $0 < a < 1$.

- Se $a > 1$: $\ln a > 0$ e $a^x - a^{-x} > 0$ per $x > 0$, quindi $g'(x) > 0$ (crescente); per $x < 0$, $a^x - a^{-x} < 0$, quindi $g'(x) < 0$ (decrescente).
- Se $0 < a < 1$: $\ln a < 0$ e $a^x - a^{-x} > 0$ per $x > 0$, quindi $g'(x) < 0$ (decrescente); per $x < 0$, $a^x - a^{-x} < 0$ e $\ln a < 0$, quindi $g'(x) > 0$ (crescente).

In entrambi i casi ($a \neq 1$), $g$ è strettamente crescente per $x > 0$ e strettamente decrescente per $x < 0$. (Con $a = 1$ si avrebbe $g(x) = 1$ costante.) $\square$

**Punto 2. Con $a = e$: grafico di $f(x) = \cosh x$ e di $f^{-1}(x)$.**

$$f(x) = \frac{e^x + e^{-x}}{2} = \cosh x.$$

Studio di $f$:

- Dominio: $\mathbb{R}$; codominio: $[1, +\infty)$.
- $f(-x) = \cosh(-x) = \cosh x = f(x)$: funzione **pari**, grafico simmetrico rispetto all'asse $y$.
- Minimo assoluto: $f(0) = 1$; nessun massimo.
- $f'(x) = \sinh x$: $f$ decresce per $x < 0$, cresce per $x > 0$.
- $f''(x) = \cosh x > 0$: concava verso l'alto, nessun flesso.
- $\lim_{x \to \pm\infty} f(x) = +\infty$.

Il grafico è la **catenaria** con vertice in $(0, 1)$.

La funzione inversa $f^{-1}(x) = \operatorname{arcosh}(x) = \ln\!\left(x + \sqrt{x^2 - 1}\right)$ è definita per $x \geq 1$, a valori in $[0, +\infty)$; il suo grafico si ottiene ribaltando il ramo destro ($x \geq 0$) di $f$ rispetto alla bisettrice $y = x$.

*(grafico — vedi PDF p.168)*

**Punto 3. Calcolo di $\displaystyle\int_0^t \frac{1}{f(x)}\,dx$ e limite per $t \to +\infty$.**

$$\frac{1}{f(x)} = \frac{2}{e^x + e^{-x}} = \frac{2e^x}{e^{2x}+1}.$$

Sostituzione $u = e^x$, $du = e^x\,dx$:

$$\int \frac{1}{f(x)}\,dx = 2\int \frac{du}{u^2+1} = 2\arctan(e^x) + C.$$

Quindi:

$$\int_0^t \frac{1}{f(x)}\,dx = \Bigl[2\arctan(e^x)\Bigr]_0^t = 2\arctan(e^t) - 2\arctan(1) = 2\arctan(e^t) - \frac{\pi}{2}.$$

Per $t \to +\infty$:

$$\lim_{t \to +\infty} \left(2\arctan(e^t) - \frac{\pi}{2}\right) = 2 \cdot \frac{\pi}{2} - \frac{\pi}{2} = \frac{\pi}{2}.$$

**Interpretazione geometrica.** L'integrale improprio $\displaystyle\int_0^{+\infty} \frac{dx}{\cosh x}$ rappresenta l'area della regione (illimitata) compresa tra la curva $y = \dfrac{1}{\cosh x}$ e l'asse $x$ per $x \geq 0$. Nonostante la regione si estenda all'infinito, l'area è finita e vale $\dfrac{\pi}{2}$.

**Punto 4. Procedura numerica per approssimare $\pi/4$.**

Dal punto 3, $\displaystyle\int_0^{+\infty} \frac{dx}{\cosh x} = \frac{\pi}{2}$, quindi $\dfrac{\pi}{4} = \dfrac{1}{2}\int_0^{+\infty} \frac{dx}{\cosh x}$.

Una procedura numerica concreta (metodo dei trapezi):

1. Si sceglie $T$ grande (es. $T = 20$) e si divide $[0, T]$ in $n$ sottointervalli di ampiezza $h = T/n$.
2. Si calcola $g(x_k) = \dfrac{2}{e^{x_k} + e^{-x_k}}$ nei nodi $x_k = kh$, $k = 0, 1, \ldots, n$.
3. Si applica la formula del trapezio:

$$\int_0^T \frac{dx}{\cosh x} \approx h\left[\frac{g(x_0)}{2} + g(x_1) + g(x_2) + \cdots + g(x_{n-1}) + \frac{g(x_n)}{2}\right].$$

4. La metà del risultato approssima $\dfrac{\pi}{4}$.

Aumentando $n$ (e/o $T$), l'approssimazione migliora. Con $T = 15$ e $n = 1000$ si ottiene già una precisione elevata.

---

## Problema 2

Si considerino triangoli con base $AB = 1$ e vertice $C$ variabile tale che $\widehat{CAB} = 2\,\widehat{ABC}$.

Sia $\beta = \widehat{ABC}$; allora $\widehat{CAB} = 2\beta$ e $\widehat{ACB} = \pi - 3\beta$, con $\beta \in (0°, 60°)$.

**Punto 1. Equazione del luogo geometrico $\gamma$ di $C$.**

Poniamo $A = (0,0)$, $B = (1,0)$, $C = (x, y)$ con $y > 0$.

L'angolo in $B$ tra $BA$ e $BC$ è $\beta$, quindi $\tan\beta = \dfrac{y}{1-x}$ (per $C$ nell'interno del piano semisup.).

L'angolo in $A$ tra $AB$ e $AC$ è $2\beta$, quindi $\tan 2\beta = \dfrac{y}{x}$ (con $x > 0$).

Dalla formula della duplicazione: $\tan 2\beta = \dfrac{2\tan\beta}{1 - \tan^2\beta}$. Posto $t = \tan\beta = \dfrac{y}{1-x}$:

$$\frac{y}{x} = \frac{2t}{1-t^2} = \frac{\dfrac{2y}{1-x}}{1 - \dfrac{y^2}{(1-x)^2}} = \frac{2y(1-x)}{(1-x)^2 - y^2}.$$

Dividendo per $y \neq 0$:

$$\frac{1}{x} = \frac{2(1-x)}{(1-x)^2 - y^2}.$$

Quindi $(1-x)^2 - y^2 = 2x(1-x)$, da cui:

$$1 - 2x + x^2 - y^2 = 2x - 2x^2 \implies 3x^2 - 4x + 1 = y^2.$$

L'equazione del luogo geometrico è:

$$\boxed{y^2 = 3x^2 - 4x + 1 = (3x - 1)(x - 1).}$$

Questa è un'**iperbole** equilatera. In forma canonica, completando il quadrato:

$$y^2 = 3\!\left(x - \frac{2}{3}\right)^{\!2} - \frac{1}{3}, \qquad \frac{\left(x - \frac{2}{3}\right)^2}{\frac{1}{9}} - \frac{y^2}{\frac{1}{3}} = 1,$$

iperbole con centro $\left(\dfrac{2}{3},\, 0\right)$, semiasse reale $a_0 = \dfrac{1}{3}$, semiasse immaginario $b_0 = \dfrac{1}{\sqrt{3}}$.

**Punto 2. Rappresentazione di $\gamma$.**

La curva ha intersezioni con l'asse $x$ in $x = \dfrac{1}{3}$ e $x = 1$. Le asintoti dell'iperbole sono $y = \pm\sqrt{3}\!\left(x - \dfrac{2}{3}\right)$.

Le condizioni geometriche ($y > 0$, $\beta \in (0°, 60°)$, $C \neq A$, $C \neq B$) selezionano il ramo dell'iperbole con $x \leq \dfrac{1}{3}$ e $y > 0$, oppure $x \geq 1$ e $y > 0$ (quest'ultimo con $\tan 2\beta = y/x > 0$, $\tan\beta = y/(1-x)$: per $x > 1$ si ha $1-x < 0$, quindi $\tan\beta < 0$, fuori dai vincoli); pertanto il ramo fisicamente valido è quello con $x \in \left(0, \dfrac{1}{3}\right)$ e $y > 0$ (ramo sinistro, semiasse reale negativo).

*(grafico — vedi PDF p.168)*

**Punto 3. Angolo $\beta$ che massimizza $h_a^2 + h_b^2$.**

Siano $h_a$ l'altezza relativa al lato $BC$ (da $A$) e $h_b$ l'altezza relativa al lato $AC$ (da $B$).

Per la legge dei seni ($AB = 1$, $\angle A = 2\beta$, $\angle B = \beta$, $\angle C = \pi - 3\beta$):

$$BC = \frac{\sin 2\beta}{\sin 3\beta}, \qquad AC = \frac{\sin\beta}{\sin 3\beta}.$$

Area del triangolo:

$$S = \frac{1}{2}\cdot AB \cdot BC \cdot \sin\beta = \frac{\sin\beta\,\sin 2\beta}{2\sin 3\beta}.$$

Le altezze: $h_a = \dfrac{2S}{BC} = \sin\beta$; $h_b = \dfrac{2S}{AC} = \sin 2\beta$.

Funzione da massimizzare:

$$F(\beta) = h_a^2 + h_b^2 = \sin^2\beta + \sin^2 2\beta, \quad \beta \in (0°,\, 60°).$$

Derivata:

$$F'(\beta) = 2\sin\beta\cos\beta + 2\sin 2\beta \cdot 2\cos 2\beta = \sin 2\beta + 2\sin 4\beta = \sin 2\beta + 4\sin 2\beta\cos 2\beta = \sin 2\beta(1 + 4\cos 2\beta).$$

Poiché $\sin 2\beta \neq 0$ per $\beta \in (0°, 60°)$, l'equazione $F'(\beta) = 0$ dà:

$$1 + 4\cos 2\beta = 0 \implies \cos 2\beta = -\frac{1}{4} \implies 2\beta = \arccos\!\left(-\tfrac{1}{4}\right) \approx 104°28'.$$

$$\beta \approx 52°14'.$$

(Con la calcolatrice: $\arccos(-0{,}25) \approx 104{,}477°$, quindi $\beta \approx 52°14'$ ossia circa $52°14'$.)

Si verifica che $F''$ è negativa in questo punto, confermando il massimo.

**Punto 4. Se $\widehat{ABC} = 36°$ allora $AC = \dfrac{\sqrt{5}-1}{2}$.**

Con $\beta = 36°$: $\widehat{CAB} = 72°$, $\widehat{ACB} = 180° - 108° = 72°$.

Il triangolo ha $\angle A = \angle C = 72°$, $\angle B = 36°$: è il **triangolo aureo** (isoscele con $AB = BC = 1$).

Per la legge dei seni:

$$\frac{AC}{\sin 36°} = \frac{AB}{\sin 72°} = \frac{1}{\sin 72°}.$$

$$AC = \frac{\sin 36°}{\sin 72°} = \frac{\sin 36°}{2\sin 36°\cos 36°} = \frac{1}{2\cos 36°}.$$

È noto che $\cos 36° = \dfrac{1+\sqrt{5}}{4}$. In alternativa, denotiamo $\ell = AC$ e usiamo la proprietà della sezione aurea: nel triangolo aureo il rapporto $BC : AC = AC : (BC - AC)$ (poiché il triangolo $ABC$ si divide in due triangoli simili). Con $BC = 1$:

$$\frac{1}{\ell} = \frac{\ell}{1 - \ell} \implies \ell(1) = \ell^2 + \ell - 1 + \ell^2... $$

Più direttamente: la bisettrice dell'angolo in $B$ divide $AC$ in modo da creare un triangolo simile ad $ABC$; si ricava l'equazione $\ell^2 + \ell - 1 = 0$ (sezione aurea), da cui:

$$\ell = \frac{-1 + \sqrt{5}}{2} = \frac{\sqrt{5}-1}{2}. \quad \square$$

---

## Quesito 1

**Il problema della quadratura del cerchio.**

La quadratura del cerchio è un problema geometrico classico (già studiato dagli antichi greci): dato un cerchio, costruire — usando soltanto **righello non graduato e compasso** in un numero finito di operazioni — un quadrato avente la stessa area del cerchio.

Se il cerchio ha raggio $r$, la sua area è $\pi r^2$; il quadrato equivalente avrebbe lato $l = r\sqrt{\pi}$. La costruzione richiederebbe di costruire la lunghezza $\sqrt{\pi}$ a partire dall'unità $r$.

Il problema è **irrisolvibile**: nel 1882, Ferdinand von Lindemann dimostrò che $\pi$ è **trascendente** (non è radice di alcun polinomio non nullo a coefficienti razionali). Poiché le costruzioni con righello e compasso producono solo lunghezze **algebriche** (numeri che soddisfano equazioni polinomiali a coefficienti razionali), la quantità $\sqrt{\pi}$ — anch'essa trascendente — non è costruibile. La quadratura del cerchio è dunque **impossibile** con i soli strumenti euclidei.

---

## Quesito 2

**Volume del solido $S$.**

La base di $S$ è la regione $R = \{(x,y) : 1 \leq x \leq e,\ 0 \leq y \leq \ln x\}$.

Le sezioni perpendicolari all'asse $x$ sono rettangoli con base $\ln x$ e altezza $3\ln x$:

$$A(x) = \ln x \cdot 3\ln x = 3(\ln x)^2.$$

$$V = \int_1^e 3(\ln x)^2\,dx.$$

Calcoliamo $I = \displaystyle\int_1^e (\ln x)^2\,dx$ per parti, $u = (\ln x)^2$, $v' = 1$:

$$I = \bigl[x(\ln x)^2\bigr]_1^e - 2\int_1^e \ln x\,dx.$$

Con $\displaystyle\int_1^e \ln x\,dx = [x\ln x - x]_1^e = (e - e) - (0 - 1) = 1$:

$$I = \bigl(e \cdot 1 - 1 \cdot 0\bigr) - 2\cdot 1 = e - 2.$$

$$V = 3(e - 2) \approx 3 \times 0{,}71828 \approx 2{,}15.$$

---

## Quesito 3

**L'insieme delle omotetie con centro $O$ fisso è un gruppo.**

Un'omotetia di centro $O$ e rapporto $k \neq 0$ è la trasformazione $H_k$ che a ogni punto $P$ associa il punto $P'$ tale che $\overrightarrow{OP'} = k\,\overrightarrow{OP}$.

Sia $\mathcal{H} = \{H_k \mid k \in \mathbb{R}^*\}$ con l'operazione di composizione $\circ$.

1. **Chiusura**: $H_k \circ H_h(P) = H_k(hP) = k(hP) = (kh)P = H_{kh}(P)$, quindi $H_k \circ H_h = H_{kh} \in \mathcal{H}$ (poiché $kh \neq 0$).
2. **Associatività**: la composizione di applicazioni è associativa.
3. **Elemento neutro**: $H_1$ (identità): $H_1 \circ H_k = H_k \circ H_1 = H_k$.
4. **Inverso**: per ogni $H_k$, l'inverso è $H_{1/k}$: $H_k \circ H_{1/k} = H_1$. $\square$

---

## Quesito 4

**La funzione di densità normale (gaussiana).**

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right), \quad x \in \mathbb{R},\ \mu \in \mathbb{R},\ \sigma > 0.$$

**Importanza.** La funzione di Gauss è la **densità di probabilità della distribuzione normale**, fondamentale in statistica, fisica e scienze applicate. Il **Teorema Centrale del Limite** afferma che la media campionaria di variabili aleatorie indipendenti con stessa distribuzione (con media e varianza finite) converge in distribuzione a una normale al crescere del campione: questo giustifica l'uso pervasivo della gaussiana per modellare fenomeni naturali, errori di misura, altezze, ecc.

**Significato dei parametri:**

- $\mu$ è la **media** (valore atteso): indica il centro della curva (ascissa del massimo, asse di simmetria $x = \mu$).
- $\sigma > 0$ è la **deviazione standard**: misura la dispersione intorno alla media.
- $\sigma^2$ è la **varianza**: valore atteso del quadrato degli scarti dalla media.

**Effetto sul grafico:**

- Variare $\mu$ **trasla** orizzontalmente il grafico.
- Aumentare $\sigma$ **abbassa e allarga** la campana (il massimo vale $\dfrac{1}{\sigma\sqrt{2\pi}}$); diminuire $\sigma$ **alza e restringe** la campana.
- I flessi si trovano in $x = \mu \pm \sigma$.

---

## Quesito 5

**Geometria non-euclidea e somma degli angoli interni di un triangolo.**

Nel piano euclideo, la somma degli angoli interni di un triangolo è $180°$. Questo risultato dipende dal **V postulato di Euclide** (postulato delle parallele): da un punto esterno a una retta passa una e una sola parallela.

Nelle geometrie non-euclidee si sostituisce tale postulato:

- **Geometria iperbolica** (Lobačevskij, Bolyai): da un punto esterno a una retta passano **infinite** parallele. La somma degli angoli interni è **strettamente minore di $180°$**: $\alpha + \beta + \gamma < 180°$. Il "difetto angolare" $\pi - (\alpha+\beta+\gamma)$ è proporzionale all'area del triangolo.

- **Geometria ellittica** (Riemann): non esistono rette parallele (ogni due rette si intersecano). La somma degli angoli interni è **strettamente maggiore di $180°$**: $\alpha + \beta + \gamma > 180°$. L'"eccesso sferico" $(\alpha+\beta+\gamma) - \pi$ è proporzionale all'area.

Esempio di geometria ellittica: la superficie di una sfera, dove le "rette" sono i cerchi massimi. Un triangolo sferico con tre angoli retti ha somma $= 270°$.

*(grafico — vedi PDF p.169)*

---

## Quesito 6

**Probabilità geometrica nel triangolo equilatero.**

Il triangolo equilatero ha lato $l = \sqrt{3}$. Area:

$$A_{\triangle} = \frac{\sqrt{3}}{4}\cdot(\sqrt{3})^2 = \frac{3\sqrt{3}}{4} \approx 1{,}299.$$

La regione "favorevole" (punto a distanza $> 1$ da tutti i vertici) è $A_{\triangle}$ meno i tre settori circolari di raggio $1$ centrati nei vertici, ciascuno con angolo $60°$:

$$A_{\text{settori}} = 3 \cdot \frac{60°}{360°}\cdot\pi\cdot 1^2 = 3 \cdot \frac{\pi}{6} = \frac{\pi}{2} \approx 1{,}571.$$

Poiché $A_{\text{settori}} \approx 1{,}571 > A_{\triangle} \approx 1{,}299$, i settori coprono l'intera area del triangolo (e si sovrappongono parzialmente). Ogni punto del triangolo è a distanza $\leq 1$ da almeno un vertice.

$$\boxed{P = 0.}$$

---

## Quesito 7

**Luogo geometrico dei centri delle circonferenze tangenti a $y = x^2 + 1$ in $(1, 2)$.**

La tangente alla parabola in $(1,2)$: $y'(x) = 2x$, $y'(1) = 2$. La **normale** in $(1,2)$ ha pendenza $-\dfrac{1}{2}$:

$$\text{normale: } y - 2 = -\frac{1}{2}(x-1) \implies x + 2y - 5 = 0.$$

Ogni circonferenza tangente alla parabola nel punto $(1,2)$ deve avere il suo centro sulla normale in quel punto (il centro di una circonferenza tangente a una curva in un punto sta sulla normale alla curva in quel punto). Il luogo dei centri è quindi la **retta normale**:

$$\boxed{x + 2y - 5 = 0.}$$

---

## Quesito 8

**Problema di Eulero: tre gentiluomini e i luigi.**

Siano $a_0, b_0, c_0$ le somme iniziali. Totale: $a_0 + b_0 + c_0 = 72$ luigi.

**Partita 1** (il primo perde verso gli altri tanto quanto ciascuno possiede):
$$a_1 = a_0 - b_0 - c_0, \quad b_1 = 2b_0, \quad c_1 = 2c_0.$$

**Partita 2** (il secondo perde verso gli altri tanto quanto ciascuno possiede):
$$a_2 = 2a_1, \quad b_2 = b_1 - a_1 - c_1, \quad c_2 = 2c_1.$$

**Partita 3** (il terzo perde verso gli altri tanto quanto ciascuno possiede):
$$a_3 = 2a_2, \quad b_3 = 2b_2, \quad c_3 = c_2 - a_2 - b_2.$$

Condizione finale: $a_3 = b_3 = c_3 = 24$.

Risolviamo a ritroso:

- $a_3 = 2a_2 = 24 \Rightarrow a_2 = 12$
- $b_3 = 2b_2 = 24 \Rightarrow b_2 = 12$
- $c_3 = c_2 - a_2 - b_2 = c_2 - 24 = 24 \Rightarrow c_2 = 48$

- $a_2 = 2a_1 = 12 \Rightarrow a_1 = 6$
- $c_2 = 2c_1 = 48 \Rightarrow c_1 = 24$
- $b_2 = b_1 - a_1 - c_1 = b_1 - 30 = 12 \Rightarrow b_1 = 42$

- $b_1 = 2b_0 = 42 \Rightarrow b_0 = 21$
- $c_1 = 2c_0 = 24 \Rightarrow c_0 = 12$
- $a_1 = a_0 - b_0 - c_0 = a_0 - 33 = 6 \Rightarrow a_0 = 39$

**Il primo si sedette con $39$ luigi, il secondo con $21$, il terzo con $12$.**

Verifica: $39 + 21 + 12 = 72$. ✓

---

## Quesito 9

**Equazione $x^3 - 2x^2 + 6x + 6 = 0$: unicità della radice reale e valore approssimato.**

Sia $p(x) = x^3 - 2x^2 + 6x + 6$.

$$p'(x) = 3x^2 - 4x + 6.$$

Il discriminante della derivata: $\Delta = 16 - 72 = -56 < 0$, quindi $p'(x) > 0$ per ogni $x \in \mathbb{R}$ ($p$ è **strettamente crescente** su tutto $\mathbb{R}$).

Una funzione strettamente monotona ha al più uno zero. Poiché $p(x) \to -\infty$ per $x \to -\infty$ e $p(x) \to +\infty$ per $x \to +\infty$, per il teorema degli zeri esiste **esattamente una radice reale**.

Localizzazione:
- $p(-1) = -1 - 2 - 6 + 6 = -3 < 0$
- $p(0) = 6 > 0$

La radice è in $(-1, 0)$.

Bisezione:
- $p(-0{,}5) = -0{,}125 - 0{,}5 - 3 + 6 = 2{,}375 > 0$ → radice in $(-1,\,-0{,}5)$.
- $p(-0{,}75) = -0{,}4219 - 1{,}125 - 4{,}5 + 6 = -0{,}047 < 0$ → radice in $(-0{,}75,\,-0{,}5)$.
- $p(-0{,}73) \approx -0{,}389 - 1{,}066 - 4{,}38 + 6 = 0{,}165 > 0$ → radice in $(-0{,}75,\,-0{,}73)$.

Radice reale: $x \approx -0{,}74$ (a due cifre significative).

---

## Quesito 10

**Meridiani, paralleli e coordinate geografiche sulla sfera.**

Sia $S$ la sfera terrestre con centro $O$ e $r$ l'asse di rotazione (retta passante per $O$).

**Poli.** La retta $r$ interseca $S$ in due punti: il Polo Nord $N$ e il Polo Sud $S'$.

**Equatore.** Il piano $\pi_0$ perpendicolare a $r$ e passante per $O$ interseca $S$ nel cerchio massimo detto **equatore**.

**Paralleli.** Ogni piano $\pi$ perpendicolare a $r$ interseca $S$ in un cerchio (piccolo o grande): questi cerchi sono i **paralleli**. Il parallelo di latitudine $\varphi$ corrisponde al piano a distanza $R\sin\varphi$ dal centro (con $R$ raggio terrestre).

**Meridiani.** I piani contenenti la retta $r$ (piani assiali) intersecano $S$ in cerchi massimi; ogni metà di tali cerchi (da polo a polo) è un **meridiano**. Si sceglie un meridiano di riferimento (meridiano di Greenwich).

**Coordinate geografiche.** Ogni punto $P$ sulla superficie (tranne i poli) è univocamente identificato da:

- **Latitudine** $\varphi \in [-90°, 90°]$: angolo tra il piano equatoriale e il raggio $\overrightarrow{OP}$, misurato verso nord (+) o verso sud (−).
- **Longitudine** $\lambda \in (-180°, 180°]$: angolo diedro tra il piano del meridiano di Greenwich e il piano del meridiano passante per $P$, misurato verso est (+) o ovest (−).

La coppia $(\varphi, \lambda)$ definisce una biiezione tra la sfera (privata dei poli) e $[-90°, 90°] \times (-180°, 180°]$.
