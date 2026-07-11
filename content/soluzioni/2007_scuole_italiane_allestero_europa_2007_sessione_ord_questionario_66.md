---
tipo: soluzione
prova_stem: 2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66
pdf: Prova_Maturita_2007.pdf
source: text
title: 2007 Estero Europa Ordinaria — Questionario — Svolgimento
---
## Quesito 1

Si calcolino le radici dell'equazione $5^x \cdot 3^{1-x} = 10$.

L'equazione è equivalente a:

$$5^x \cdot \frac{3}{3^x} = 10, \qquad 3 \cdot 5^x = 10 \cdot 3^x$$

e passando ai logaritmi decimali:

$$\log(3 \cdot 5^x) = \log(10 \cdot 3^x), \qquad \log 3 + x\log 5 = \log 10 + x\log 3$$

$$x = \frac{1 - \log 3}{\log 5 - \log 3}$$

## Quesito 2

Si traccino i grafici delle seguenti funzioni di $\mathbb{R}$ in $\mathbb{R}$:

$$f: x \mapsto 2^{x+1}, \qquad g: x \mapsto 2^x + 1, \qquad h: x \mapsto 2^{|x|}, \qquad k: x \mapsto 2^{-x}$$

Tutti i grafici richiesti sono deducibili dal grafico della funzione $y = a(x) = 2^x$.

- $f(x) = 2^{x+1} = a(x+1)$: si trasla verso sinistra di 1 il grafico di $a(x)$.
- $g(x) = 2^x + 1 = a(x) + 1$: si trasla verso l'alto di 1 il grafico di $a(x)$.
- $h(x) = 2^{|x|} = a(|x|)$: si conferma il grafico di $a(x)$ che si trova a destra dell'asse $y$ e lo si ribalta rispetto all'asse $y$.
- $k(x) = 2^{-x} = a(-x)$: si ribalta il grafico di $a(x)$ rispetto all'asse $y$.

*(grafico — vedi PDF)*

## Quesito 3

Quante cifre ha il numero $7^{60}$ nella rappresentazione decimale? Motiva esaurientemente la risposta.

Osserviamo che:

$$\log(7^{60}) = 60\log 7 \approx 50{,}71$$

quindi la parte intera di $\log(7^{60})$ è 50; pertanto $7^{60}$ ha **51 cifre** (ricordiamo che la parte intera del logaritmo decimale di un numero è uguale al numero delle cifre diminuito di 1).

## Quesito 4

La formula seguente:

$$e = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \cdots$$

è dovuta a Leonardo Eulero (1707–1783). Per dimostrarla può essere utile ricordare che è:

$$e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n$$

Si illustri il ragionamento seguito.

Ricordiamo la formula relativa allo sviluppo del binomio di Newton:

$$(x + a)^n = \sum_{k=0}^{n} \binom{n}{k} x^k a^{n-k}$$

quindi:

$$\left(1 + \frac{1}{n}\right)^n = \sum_{k=0}^{n} \binom{n}{k} 1^k \left(\frac{1}{n}\right)^{n-k} = \binom{n}{0} + \binom{n}{1}\frac{1}{n} + \binom{n}{2}\frac{1}{n^2} + \cdots + \binom{n}{n}\frac{1}{n^n}$$

$$= 1 + n \cdot \frac{1}{n} + \frac{n(n-1)}{2!} \cdot \frac{1}{n^2} + \cdots + \frac{1}{n^n}$$

$$= 1 + 1 + \frac{1}{2!}\left(\frac{n^2 - n}{n^2}\right) + \frac{1}{3!}\left(\frac{n(n-1)(n-2)}{n^3}\right) + \cdots + \frac{1}{n!} \cdot \frac{n(n-1)(n-2)\cdots 3 \cdot 2 \cdot 1}{n^n}$$

$$= 1 + \frac{1}{1!} + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \frac{1}{3!}\left(\frac{(n-1)(n-2)}{n^2}\right) + \cdots + \frac{1}{n!} \cdot \frac{(n-1)(n-2)\cdots 3 \cdot 2 \cdot 1}{n^{n-1}}$$

$$= 1 + \frac{1}{1!} + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \frac{1}{3!}\left(\frac{n-1}{n} \cdot \frac{n-2}{n}\right) + \cdots + \frac{1}{n!}\left(\frac{n-1}{n} \cdot \frac{n-2}{n} \cdots \frac{1}{n}\right)$$

$$= 1 + \frac{1}{1!} + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \frac{1}{3!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right) + \cdots + \frac{1}{n!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\cdots\left(1 - \frac{n-1}{n}\right)$$

Passando al limite per $n$ che tende a $+\infty$ del primo e dell'ultimo membro abbiamo:

$$e = \lim_{n \to +\infty}\left[1 + \frac{1}{1!} + \frac{1}{2!}\left(1-\frac{1}{n}\right) + \frac{1}{3!}\left(1-\frac{1}{n}\right)\left(1-\frac{2}{n}\right) + \cdots + \frac{1}{n!}\left(1-\frac{1}{n}\right)\left(1-\frac{2}{n}\right)\cdots\left(1-\frac{n-1}{n}\right)\right]$$

$$e = \lim_{n \to +\infty}\left[1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \cdots + \frac{1}{n!}\right] = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \cdots \quad \text{c.v.d.}$$

## Quesito 5

Si vuole che delle due radici reali dell'equazione $x^2 + 2(h+1)x + m^2 h^2 = 0$ una risulti doppia dell'altra. Quale relazione deve sussistere tra i parametri $h$ e $m$?

Imponiamo che le radici siano reali:

$$\frac{\Delta}{4} \ge 0, \qquad (h+1)^2 - m^2 h^2 \ge 0 \tag{1}$$

Siccome una radice deve essere il doppio dell'altra deve risultare:

$$x_1 + x_2 = 3x_2 = -\frac{b}{a} = -2(h+1), \qquad x_2 = -\frac{2}{3}(h+1)$$

Imponiamo che tale valore sia radice:

$$\frac{4}{9}(h+1)^2 + 2(h+1)\left[-\frac{2}{3}(h+1)\right] + m^2 h^2 = 0$$

$$\frac{4}{9}(h+1)^2 - \frac{4}{3}(h+1)^2 + m^2 h^2 = 0$$

$$-\frac{8}{9}(h+1)^2 + m^2 h^2 = 0 \tag{2}$$

Mettendo insieme le condizioni (1) e (2) abbiamo:

$$\begin{cases} (h+1)^2 - m^2 h^2 \ge 0 \\[4pt] -\dfrac{8}{9}(h+1)^2 + m^2 h^2 = 0 \end{cases} \;\Longrightarrow\; \begin{cases} (h+1)^2 \ge m^2 h^2 \\[4pt] \dfrac{8}{9}(h+1)^2 = m^2 h^2 \end{cases} \;\Longrightarrow\; \begin{cases} (h+1)^2 \ge \dfrac{8}{9}(h+1)^2 \\[4pt] \dfrac{8}{9}(h+1)^2 = m^2 h^2 \end{cases}$$

La prima condizione diventa $h^2 + 2h + 1 \ge 0$, ossia $(h+1)^2 \ge 0$, vera per ogni $h$.

Dalla seconda:

$$m^2 = \frac{8}{9} \cdot \frac{(h+1)^2}{h^2} = \frac{8}{9}\left(\frac{h+1}{h}\right)^2, \quad h \ne 0$$

(se $h = 0$: si avrebbe $\frac{8}{9} = 0$, impossibile).

Quindi deve essere:

$$m = \pm\frac{2}{3}\sqrt{2}\left(\frac{h+1}{h}\right), \quad h \ne 0$$

## Quesito 6

Il coefficiente angolare della tangente al grafico della funzione $f(x)$ è, in ogni suo punto $P$, uguale al doppio dell'ascissa di $P$. Si determini $f(x)$, sapendo che $f(0) = 4$.

Risulta $m = f'(x) = 2x$, quindi:

$$f(x) = \int 2x\,dx = x^2 + C$$

Con $f(0) = 4$ si ottiene $C = 4$.

La funzione richiesta ha equazione:

$$f(x) = x^2 + 4$$

## Quesito 7

Fra tutti i coni circolari retti circoscritti ad una sfera di raggio $r$, quello di minima area laterale ha il suo vertice distante dalla superficie sferica della quantità $r\sqrt{2}$.

Poniamo $VD = x$ (con $x > 0$). Dalla similitudine fra i triangoli $AHV$ e $VCE$ risulta $VE : CE = VH : AH$. Si ha $VC = r + x$ e $VH = 2r + x$.

Dalla similitudine si ricava:

$$\frac{VE}{VC} = \frac{CE}{EC}, \qquad VE^2 = \frac{(r+x)^2 \cdot r^2}{rx} \cdot x \quad \Longrightarrow \quad VE = \frac{(r+x)\sqrt{r}}{\sqrt{x}} \cdot \sqrt{x} = (r+x)\sqrt{\frac{r}{x} \cdot x}$$

In forma compatta (dalla similitudine $\triangle AHV \sim \triangle VCE$):

$$CE = AH = \frac{r\sqrt{x(2r+x)}}{r+x} \cdot \frac{r+x}{r} = \sqrt{x(2r+x)/r} \cdot \sqrt{r} = \sqrt{x(2r+x)}$$

e $VH = 2r + x$, quindi:

$$AH = \sqrt{x(2r+x)}, \qquad VA = \frac{VH \cdot VC}{VE} = \frac{(2r+x)(r+x)}{\sqrt{r \cdot x(2r+x)/(r)}} \cdot \frac{1}{\sqrt{r}}$$

La superficie laterale del cono è:

$$S = \pi \cdot AH \cdot VA = \pi r^2 \cdot \frac{(r+x)(2r+x)}{rx}$$

Questa è minima se lo è:

$$y = \frac{(r+x)^2(2r+x)}{rx}$$

La derivata si annulla per $x^2 = 2r^2$, cioè, data la limitazione $x > 0$:

$$x = r\sqrt{2}$$

La funzione è decrescente per $0 < x < r\sqrt{2}$ e crescente per $x > r\sqrt{2}$, pertanto in $x = r\sqrt{2}$ ha il minimo, come richiesto.

## Quesito 8

Si considerino un cubo e l'ottaedro regolare avente per vertici i centri delle sue facce. Si può calcolare il rapporto fra i volumi del cubo e dell'ottaedro? Si può calcolare il rapporto fra le aree del cubo e dell'ottaedro? In caso di risposta affermativa, effettuare il calcolo.

**Verifica che l'ottaedro è regolare.**

Indicando con $l$ lo spigolo del cubo, notiamo che $AF$, che congiunge i centri di due facce del cubo perpendicolari, è l'ipotenusa del triangolo rettangolo isoscele $AMF$ (dove $M$ è il punto medio dello spigolo), con $AM = MF = l/2$; quindi:

$$AF = \frac{l}{2}\sqrt{2}$$

Un ragionamento analogo si può fare per qualsiasi altro spigolo dell'ottaedro. Quindi tutti gli spigoli dell'ottaedro valgono $\frac{l}{2}\sqrt{2}$; le facce dell'ottaedro sono triangoli equilateri uguali ed è perciò regolare.

**Rapporto tra i volumi.**

$$V_{\text{cubo}} = l^3$$

$$V_{\text{ottaedro}} = 2 \cdot \frac{AB^2 \cdot EH}{3}$$

Siccome $AB = AF = \frac{l}{2}\sqrt{2}$ e $EH = \frac{EF}{2} = \frac{l}{2}$, risulta:

$$V_{\text{ottaedro}} = 2 \cdot \frac{AB^2 \cdot EH}{3} = \frac{2}{3} \cdot \frac{l^2}{2} \cdot \frac{l}{2} = \frac{l^3}{6}$$

Il rapporto richiesto fra i volumi è pertanto:

$$\frac{V_{\text{cubo}}}{V_{\text{ottaedro}}} = 6$$

**Rapporto tra le aree delle superfici totali.**

$$S_{\text{cubo}} = 6l^2$$

$$S_{\text{ottaedro}} = 8 \cdot \left(\text{area triangolo equilatero di lato } \frac{l}{2}\sqrt{2}\right) = 8 \cdot \left(\frac{l}{2}\sqrt{2}\right)^2 \cdot \frac{\sqrt{3}}{4} = 8 \cdot \frac{l^2}{2} \cdot \frac{\sqrt{3}}{4} = l^2\sqrt{3}$$

Quindi:

$$\frac{S_{\text{cubo}}}{S_{\text{ottaedro}}} = \frac{6l^2}{l^2\sqrt{3}} = \frac{6}{\sqrt{3}} = 2\sqrt{3}$$
