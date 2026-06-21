---
tipo: soluzione
prova_stem: 2007_estero_australe_2007_suppletiva_questionario_49
pdf: Prova_Maturita_2007.pdf
source: text
title: Soluzioni — 2007_estero_australe_2007_suppletiva_questionario_49
---

# Soluzioni — 2007_estero_australe_2007_suppletiva_questionario_49

## Quesito 1

Si vuole che delle due radici dell'equazione $x^2 + 2(h+1)x + m^2h^2 = 0$ una risulti doppia dell'altra. Quale relazione deve sussistere tra i parametri $h$ e $m$?

Intanto imponiamo che le radici siano reali:

$$\frac{\Delta}{4} \ge 0, \qquad (h+1)^2 - m^2h^2 \ge 0 \tag{1}$$

Siccome una radice deve essere il doppio dell'altra deve risultare:

$$x_1 + x_2 = 3x_2 = -\frac{b}{a} = -2(h+1), \qquad x_2 = -\frac{2}{3}(h+1)$$

Imponiamo che tale valore sia radice:

$$\frac{4}{9}(h+1)^2 + 2(h+1)\left[-\frac{2}{3}(h+1)\right] + m^2h^2 = 0, \qquad \frac{4}{9}(h+1)^2 - \frac{4}{3}(h+1)^2 + m^2h^2 = 0$$

$$-\frac{8}{9}(h+1)^2 + m^2h^2 = 0 \tag{2}$$

Mettendo insieme le condizioni (1) e (2) abbiamo:

$$\begin{cases} (h+1)^2 - m^2h^2 \ge 0 \\ -\dfrac{8}{9}(h+1)^2 + m^2h^2 = 0 \end{cases} \;\Longrightarrow\; \begin{cases} (h+1)^2 \ge m^2h^2 \\ \dfrac{8}{9}(h+1)^2 = m^2h^2 \end{cases} \;\Longrightarrow\; \begin{cases} (h+1)^2 \ge \dfrac{8}{9}(h+1)^2 \\ \dfrac{8}{9}(h+1)^2 = m^2h^2 \end{cases}$$

La prima condizione dà $h^2 + 2h + 1 \ge 0$, cioè $(h+1)^2 \ge 0$, vera per ogni $h$. Dalla seconda:

$$m^2 = \frac{8}{9} \cdot \frac{(h+1)^2}{h^2} = \frac{8}{9}\left(\frac{h+1}{h}\right)^2, \quad h \ne 0$$

(se $h = 0$: $\frac{8}{9} = 0$, impossibile).

Quindi deve essere:

$$m^2 = \frac{8}{9}\left(\frac{h+1}{h}\right)^2, \quad h \ne 0, \qquad \text{da cui} \quad m = \pm\frac{2}{3}\sqrt{2}\,\frac{h+1}{h}$$

Quindi la relazione fra $m$ ed $h$ è:

$$m = \pm\frac{2\sqrt{2}}{3}\cdot\frac{h+1}{h}, \quad h \ne 0.$$

## Quesito 2

Sia $f(x) = x + \sin x$ per ogni $x$. Si trovino i punti $x$ in corrispondenza dei quali il grafico di $f$ in $(x, f(x))$ abbia coefficiente angolare nullo.

Dobbiamo trovare i punti per i quali $f'(x) = 0$, quindi:

$$1 + \cos x = 0, \qquad \cos x = -1, \qquad x = \pi + 2k\pi, \quad k \in \mathbb{Z}.$$

## Quesito 3

La risoluzione di un dato problema conduce all'equazione

$$k\sin x + \cos x = 2k, \qquad k \ge 0, \quad 0 \le x \le \frac{\pi}{2}.$$

Si discutano le possibili soluzioni del problema.

Posto $X = \cos x$ e $Y = \sin x$, la nostra equazione corrisponde al seguente sistema:

$$\begin{cases} kY + X = 2k \\ X^2 + Y^2 = 1 \\ k \ge 0 \\ \dfrac{1}{2} \le X \le 1,\quad 0 \le Y \le 1 \end{cases}$$

L'equazione $kY + X = 2k$, ovvero $X + k(Y-2) = 0$, rappresenta un fascio proprio di rette con generatrici $X = 0$ (per $k = 0$) e $Y - 2 = 0$ (per $k \to \infty$); il centro del fascio è $S = (0;\, 2)$.

L'arco di circonferenza che può essere intersecato ha estremi $A = (1, 0)$ e $B = (0, 1)$. Cerchiamo i valori di $k$ corrispondenti alle rette per $A$ e $B$ e alla retta tangente all'arco:

- retta per $A$: $k = \dfrac{1}{2}$
- retta per $B$: $k = 0$
- retta tangente (distanza del centro della circonferenza dalla generica retta del fascio uguale al raggio $r = 1$):

$$\frac{|-2k|}{\sqrt{1 + k^2}} = 1, \qquad 4k^2 = 1 + k^2, \qquad k = \pm\frac{\sqrt{3}}{3}$$

Il coefficiente angolare della tangente che ci interessa è negativo; tale coefficiente angolare è $m = -\dfrac{1}{k}$, quindi dobbiamo scegliere $k = +\dfrac{\sqrt{3}}{3}$.

Si hanno quindi le seguenti soluzioni:

$$0 \le k < \frac{1}{2}: \quad 1 \text{ soluzione}$$

$$\frac{1}{2} \le k \le \frac{\sqrt{3}}{3}: \quad 2 \text{ soluzioni}$$

## Quesito 4

Le nuove targhe automobilistiche sono costituite da 2 lettere, seguite da 3 cifre, seguite a loro volta da 2 lettere. Sapendo che le lettere possono essere scelte tra le 26 dell'alfabeto anglosassone, si calcoli quante automobili si possono immatricolare in questo modo.

Le possibilità dei primi due posti sono uguali alle disposizioni con ripetizioni di 26 oggetti a 2 a 2, quindi $D^r_{26,2} = 26^2 = 676$.

Le possibilità dei tre posti centrali sono uguali alle disposizioni con ripetizioni di 10 oggetti (le 10 cifre) a 3 a 3, quindi $D^r_{10,3} = 10^3 = 1000$.

Le possibilità degli ultimi due posti sono ancora uguali alle disposizioni con ripetizioni di 26 oggetti a 2 a 2, quindi $D^r_{26,2} = 26^2 = 676$.

Il numero di automobili che si possono immatricolare sono quindi:

$$676 \cdot 1000 \cdot 676 = 456\,976\,000$$

Osserviamo che in realtà le targhe, per evitare confusioni nella lettura a distanza, non usano tutte le 26 lettere, ma solo 22; non vengono utilizzate le lettere I ed O per evitare confusioni con le cifre 1 e 0 e neanche le lettere Q ed U. Non viene neanche utilizzata la combinazione EE, per evitare confusioni con "Escursionisti Esteri".

Le targhe effettivamente immatricolabili sono quindi:

$$(D^r_{22,2} - 1) \cdot D^r_{10,3} \cdot (D^r_{22,2} - 1) = 483 \cdot 1000 \cdot 483 = 233\,289\,000$$

## Quesito 5

Si dia una definizione di poliedro regolare. Si dimostri che i poliedri regolari sono, a meno di similitudini, solo 5 e si dica quali sono.

Un poliedro regolare è un poliedro le cui facce sono poligoni regolari congruenti e gli angoloidi sono tutti congruenti (come dire che in ogni vertice arriva lo stesso numero di facce).

I poliedri regolari (detti solidi platonici) sono 5, e tra essi non ce ne sono a facce esagonali.

Poiché in ogni vertice di un poliedro devono convergere almeno tre facce (non complanari), la somma dei loro angoli deve essere inferiore ad un angolo giro. Si hanno le seguenti possibilità:

1. Le facce del poliedro sono **triangoli equilateri** (angolo interno $60°$): le facce degli angoloidi possono essere 3 ($3 \times 60° = 180° < 360°$), 4 ($4 \times 60° = 240° < 360°$), 5 ($5 \times 60° = 300° < 360°$), ma non di più: con 6 facce avremmo $6 \times 60° = 360°$, che non è minore di $360°$. Si ottengono così tre poliedri regolari: il **tetraedro**, l'**ottaedro** e l'**icosaedro**.

2. Le facce del poliedro sono **quadrati** (angolo interno $90°$): le facce degli angoloidi non possono essere più di 3 ($3 \times 90° = 270°$, ma $4 \times 90° = 360°$). Si ha l'**esaedro** (il cubo).

3. Le facce del poliedro sono **pentagoni regolari** (angolo interno $108°$): ogni angoloide può avere al massimo 3 facce ($3 \times 108° = 324°$). Si ha il **dodecaedro regolare**.

4. Non possono esistere poliedri regolari le cui facce abbiano più di 5 lati: già con l'esagono avremmo $3 \times 120° = 360°$.

## Quesito 6

Si considerino un cubo e l'ottaedro regolare avente per vertici i centri delle sue facce. Si può calcolare il rapporto fra i volumi del cubo e dell'ottaedro? In caso di risposta affermativa, effettuare il calcolo.

Consideriamo l'ottaedro che ha i vertici nei centri delle facce di un cubo e verifichiamo che è regolare.

Indicando con $l$ lo spigolo del cubo, lo spigolo dell'ottaedro $AF$ (che congiunge i centri di due facce perpendicolari) è l'ipotenusa del triangolo rettangolo isoscele $AMF$ (dove $M$ è il punto medio dello spigolo), con $AM = MF = \dfrac{l}{2}$; quindi:

$$AF = \frac{l}{2}\sqrt{2}$$

Un ragionamento analogo vale per qualsiasi altro spigolo dell'ottaedro: tutti gli spigoli valgono $\dfrac{l}{2}\sqrt{2}$, le facce sono triangoli equilateri uguali e l'ottaedro è perciò regolare.

Calcoliamo i volumi. Il volume del cubo è $V_\text{cubo} = l^3$. Il volume dell'ottaedro si ottiene come il doppio di una piramide quadrata; con $AB = AF = \dfrac{l}{2}\sqrt{2}$ e $EH = \dfrac{EF}{2} = \dfrac{l}{2}$:

$$V_\text{ottaedro} = 2 \cdot \frac{AB^2 \cdot EH}{3} = \frac{2}{3} \cdot \frac{l^2}{2} \cdot \frac{l}{2} = \frac{l^3}{6}$$

Il rapporto richiesto fra i volumi è pertanto:

$$\frac{V_\text{cubo}}{V_\text{ottaedro}} = \frac{l^3}{\dfrac{l^3}{6}} = 6$$

## Quesito 7

Le misure dei lati di un triangolo sono 18, 24 e 30 cm. Si calcolino, con l'aiuto di una calcolatrice, le ampiezze degli angoli del triangolo approssimandole in gradi e primi sessagesimali.

Osserviamo che le misure dei lati formano una terna pitagorica (si ottengono da 3, 4 e 5 moltiplicando per 6): il triangolo è quindi rettangolo con ipotenusa di 30 cm.

Risulta quindi:

$$\sin\alpha = \frac{18}{30} = \frac{3}{5}, \qquad \alpha = \arcsin\!\left(\frac{3}{5}\right) \approx 36.87° = 36° + (0.87 \times 60)' \approx 36°52'$$

L'altro angolo acuto è:

$$\beta = 90° - \alpha = 90° - 36°52' = 53°08'$$

## Quesito 8

Si determini, al variare di $k$, il numero delle soluzioni reali dell'equazione:

$$x^3 - 3x + k = 0.$$

Possiamo riscrivere l'equazione nella forma:

$$-x^3 + 3x = k$$

Studiamo qualitativamente la funzione $f(x) = -x^3 + 3x$. Si tratta di una cubica che tende a $+\infty$ per $x \to -\infty$ e a $-\infty$ per $x \to +\infty$. Troviamo massimo e minimo relativi:

$$f'(x) = -3x^2 + 3 = 0 \quad \Longrightarrow \quad x = \pm 1$$

Risulta: $f(-1) = -2$ (minimo relativo) e $f(1) = 2$ (massimo relativo).

*(grafico — vedi PDF)*

L'equazione ha quindi:

- **1 soluzione** se $k < -2$ oppure $k > 2$
- **3 soluzioni** (di cui due coincidenti) se $k = \pm 2$
- **3 soluzioni distinte** se $-2 < k < 2$
