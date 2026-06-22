---
tipo: soluzione
prova_stem: 2025_sessione_suppletiva_2025_prova_10
pdf: Prova_Maturita_2025.pdf
source: book
title: 2025 Suppletiva — Prova — Svolgimento
---

## Problema 1

**Punto a).** Iniziamo studiando la famiglia $f_a(x) = (x^2+1)\,e^{ax+1}$ al variare di $a\ne 0$. Per determinare il numero degli estremi relativi, calcoliamo la derivata prima usando la regola del prodotto:
$$
f_a'(x) = 2x e^{ax+1} + (x^2+1)\cdot a e^{ax+1} = e^{ax+1}\bigl[ax^2+2x+a\bigr].
$$
Poiché $e^{ax+1}>0$ sempre, i punti stazionari sono le soluzioni di $ax^2+2x+a=0$, cioè
$$
x = \frac{-2\pm\sqrt{4-4a^2}}{2a} = \frac{-1\pm\sqrt{1-a^2}}{a}.
$$
Analizziamo il discriminante $\Delta = 1-a^2$:
- Se $|a|<1$: $\Delta>0$, esistono **due punti stazionari** distinti, dunque la funzione ha un massimo e un minimo relativi.
- Se $|a|=1$: $\Delta=0$, un unico punto stazionario (punto di flesso a tangente orizzontale, come vedremo).
- Se $|a|>1$: $\Delta<0$, nessun punto stazionario, la funzione è monotona.

Per determinare il numero di flessi, calcoliamo la derivata seconda:
$$
f_a''(x) = e^{ax+1}\bigl[a^2 x^2 + 4ax + a^2+2\bigr].
$$
I flessi si trovano annullando il trinomio $a^2 x^2+4ax+a^2+2=0$, il cui discriminante è $\Delta_2 = 16a^2-4a^2(a^2+2) = 4a^2(2-a^2)$.

Per $|a|<\sqrt{2}$ si hanno due flessi; per $|a|=\sqrt{2}$ un solo flesso; per $|a|>\sqrt{2}$ nessun flesso.

**Flesso a tangente orizzontale.** Deve esistere un punto $x_0$ tale che $f_a'(x_0)=0$ e $f_a''(x_0)=0$ contemporaneamente. Dalla condizione $f_a'(x_0)=0$ otteniamo $ax_0^2+2x_0+a=0$, e dalla condizione $f_a''(x_0)=0$ otteniamo $a^2 x_0^2+4ax_0+a^2+2=0$. Risolvendo il sistema (sostituendo $ax_0^2=-2x_0-a$ nella seconda equazione), si trova $a=1$ con $x_0=-1$.

**Punto b).** Con $a=1$ la funzione diventa $f_1(x) = (x^2+1)e^{x+1}$.

*Dominio e segno.* Il dominio è $\mathbb{R}$. Poiché $x^2+1>0$ e $e^{x+1}>0$ per ogni $x$, la funzione è **sempre strettamente positiva**: il grafico $\gamma_1$ sta interamente sopra l'asse $x$.

*Monotonia.* Calcoliamo la derivata prima:
$$
f_1'(x) = 2x e^{x+1}+(x^2+1)e^{x+1} = (x^2+2x+1)e^{x+1} = (x+1)^2 e^{x+1}.
$$
Poiché $(x+1)^2\ge 0$ e $e^{x+1}>0$, la derivata è sempre $\ge 0$, e si annulla solo per $x=-1$. Questo significa che $f_1$ è una funzione **monotona non decrescente**, ed è **strettamente crescente** su $(-\infty,-1)$ e su $(-1,+\infty)$. Il punto $x=-1$ è un punto di stazionarietà *a tangente orizzontale*, ma **non è un estremo relativo**: la funzione non cambia il suo andamento crescente, vi è solo un rallentamento. In $x=-1$: $f_1(-1) = (1+1)e^0 = 2$.

*Invertibilità.* Essendo strettamente monotona (crescente), $f_1$ è iniettiva e dunque invertibile su tutto $\mathbb{R}$. Indichiamo con $g$ la funzione inversa.

*Dominio di $g$ e calcolo di $g'(e)$.* L'immagine di $f_1$ è $(0,+\infty)$, che è il dominio di $g$. In $x=0$: $f_1(0) = 1\cdot e^1 = e$, dunque $g(e)=0$. Per la formula della derivata della funzione inversa:
$$
g'(e) = \frac{1}{f_1'(g(e))} = \frac{1}{f_1'(0)} = \frac{1}{(0+1)^2\cdot e^1} = \boxed{\frac{1}{e}}.
$$
**Punto c).** Consideriamo $F(t) = \int_t^0 f_1(x)\,\mathrm{d} x = \int_t^0 (x^2+1)e^{x+1}\,\mathrm{d} x$, con $t\le 0$.

*Significato geometrico.* Poiché $f_1(x)>0$ per ogni $x$, l'integrale $F(t)$ rappresenta l'**area** della regione di piano compresa tra il grafico $\gamma_1$, l'asse $x$, e le rette verticali $x=t$ e $x=0$. Al diminuire di $t$, questa regione si allarga verso sinistra.

*Calcolo della primitiva.* Calcoliamo $\int(x^2+1)e^{x+1}\,\mathrm{d} x$ per parti ripetute. Integriamo per parti ponendo $u=x^2+1$, $\,\mathrm{d} v = e^{x+1}\,\mathrm{d} x$:
$$
I = (x^2+1)e^{x+1} - \int 2x e^{x+1}  \mathrm{d} x.
$$
Integriamo ancora per parti il secondo integrale, con $u=2x$, $\,\mathrm{d} v=e^{x+1}\,\mathrm{d} x$:
$$
\int 2x e^{x+1}  \mathrm{d} x = 2x e^{x+1} - \int 2e^{x+1}  \mathrm{d} x = 2x e^{x+1} - 2e^{x+1}.
$$
Sostituendo:
$$
I = (x^2+1)e^{x+1} - 2x e^{x+1} + 2e^{x+1} = (x^2-2x+3)e^{x+1} + C.
$$
*Valutazione dell'integrale definito.*
$$
F(t) = \bigl[(x^2-2x+3)e^{x+1}\bigr]_t^0 = (0-0+3)e^1 - (t^2-2t+3)e^{t+1} = 3e - (t^2-2t+3)e^{t+1}.
$$
*Limite per $t\to-\infty$.* Quando $t\to-\infty$, l'esponenziale $e^{t+1}\to 0$ molto più rapidamente di quanto cresca il polinomio $t^2-2t+3$: è un fatto fondamentale dell'analisi che **l'esponenziale domina ogni polinomio**. Pertanto $(t^2-2t+3)e^{t+1}\to 0$, e
$$
\lim_{t\to-\infty}F(t) = \boxed{3e}.
$$
Questo risultato ha un'interpretazione geometrica notevole: l'area della regione illimitata compresa tra $\gamma_1$, l'asse $x$ e la retta $x=0$ (estesa a sinistra fino a $-\infty$) è finita e vale $3e\approx 8{,}15$.

**Punto d).** Il rettangolo $P_a Q_a O R_a$ è definito dal punto $P_a$ di ascissa $x=-2$ sul grafico di $f_a$, dai relativi vertici su assi e origine. Per $x=-2$: $f_a(-2) = (4+1)e^{-2a+1} = 5e^{1-2a}$.

L'area del rettangolo è $A(a) = 2\cdot 5e^{1-2a} = 10e^{1-2a}$. Studiamo: $A'(a) = 10\cdot(-2)e^{1-2a} = -20e^{1-2a} < 0$ per ogni $a$. La funzione $A(a)$ è dunque **strettamente decrescente**: non ammette massimo relativo per $a>0$. Per $a\to 0^+$, $A\to 10e$ (estremo superiore, non raggiunto). Dunque **non esiste** un valore di $a$ che massimizza l'area del rettangolo: l'area cresce indefinitamente al diminuire di $a$ verso $0$.

![[_attachments/prob_2025_sessione_suppletiva_2025_prova_10_1/prob_2025_sessione_suppletiva_2025_prova_10_1_fig1.svg]]

*Grafico di $\gamma_1$: $f_1(x)=(x^2+1)e^{x+1}$, sempre positiva, con flesso a tangente orizzontale in $(-1,2)$, crescente su $\mathbb{R}$.*

## Problema 2

**Punto a).** Per $x\ge 0$: $P_{3}(x)=x^{3}-2x^{2}+x$ (tangente a $y=x$ in $0$: $P_{3}(0)=0$, $P_{3}'(0)=1$; tangente all'asse $x$ in $1$: $P_{3}(1)=0$, $P_{3}'(1)=0$).

Per $x<0$: $f(0^{-})=\ln(P_{2}(0))=0 \Rightarrow P_{2}(0)=1$; $f'(0^{-})=P_{2}'(0)/P_{2}(0)=1 \Rightarrow P_{2}'(0)=1$. Con $P_{2}(x)=x^{2}+x+1$ (discriminante $<0$, sempre positivo): verificato.

**Punto b).** Per $x\ge 0$: $f'(x)=3x^{2}-4x+1=(3x-1)(x-1)=0$ per $x=1/3$ e $x=1$.

$f(1/3)=1/27-2/9+1/3=4/27$ (max locale), $f(1)=0$ (min locale).

$f''(x)=6x-4=0$ per $x=2/3$: flesso.

Per $x<0$: $f'(x)=\frac{2x+1}{x^{2}+x+1}=0$ per $x=-1/2$. $f(-1/2)=\ln(3/4)<0$ (min locale per $x<0$).

Al variare di $k$: se $k>4/27$, una soluzione ($x<0$); se $k=4/27$, due soluzioni; se $\ln(3/4)<k<4/27$, tre soluzioni; ecc.

**Punto c).** Per $x\to-\infty$: $f(x)=\ln(x^{2}+x+1)\sim 2\ln|x|$. $\frac{f(x)}{x^{n}}\to 0$ per ogni $n\ge 1$.

Per $x\to+\infty$: $f(x)\sim x^{3}$. $\frac{f(x)}{x^{n}}\to 0$ se $n>3$, $\to 1$ se $n=3$, $\to\infty$ se $n<3$.

Per $x\to 0$: per $x\to 0^{+}$, $f(x)=x^{3}-2x^{2}+x\sim x$, dunque $\frac{f(x)}{x^{n}}\to$ finito non nullo per $n=1$. Per $x\to 0^{-}$, $f(x)=\ln(1+x+x^{2})\sim x$ (Taylor), dunque anche qui $n=1$. $\boxed{n=1}$, limite $= 1$.

**Punto d).** $R_{2}$: tra $\gamma$ e l'asse $x$ nel I quadrante, $x\in[0,1]$:
$$
A_{2}=\int_{0}^{1}(x^{3}-2x^{2}+x)  \mathrm{d} x = \left[\frac{x^{4}}{4}-\frac{2x^{3}}{3}+\frac{x^{2}}{2}\right]_{0}^{1} = \frac{1}{4}-\frac{2}{3}+\frac{1}{2} = \frac{1}{12}.
$$
$R_{1}$: tra $\gamma$ e $y=x$, $x\in[0,1]$:
$$
A_{1}=\int_{0}^{1}(x-(x^{3}-2x^{2}+x))  \mathrm{d} x = \int_{0}^{1}(2x^{2}-x^{3})  \mathrm{d} x = \left[\frac{2x^{3}}{3}-\frac{x^{4}}{4}\right]_{0}^{1} = \frac{2}{3}-\frac{1}{4} = \frac{5}{12}.
$$
$\boxed{\frac{A_{1}}{A_{2}} = \frac{5/12}{1/12} = 5.}$

![[_attachments/prob_2025_sessione_suppletiva_2025_prova_10_2/prob_2025_sessione_suppletiva_2025_prova_10_2_fig1.svg]]

*Grafico della funzione a tratti $f$ con $P_{2}(x)=x^{2}+x+1$ e $P_{3}(x)=x^{3}-2x^{2}+x$: continua in $0$, tangente $y=x$ in $0$, tangente $y=0$ in $x=1$.*

## Quesito 1

**Impostazione.** Sia $ABCD$ aureo con lato lungo $AB$ e lato corto $AD$, dunque $\dfrac{AB}{AD}=\varphi$. Normalizziamo $AD=1$, cosicché $AB=\varphi$. La proprie\-tà fondamentale della sezione aurea è
$$
\varphi^{2}=\varphi+1,\qquad\text{equivalentemente}\qquad \varphi-1=\frac{1}{\varphi}.
$$
**La piega.** La piega $C'P$ è parallela ai lati corti $AD$ e $BC$ e stacca, dalla parte di $AB$, il rettangolo $ABPC'$ di lati $AB=\varphi$ (lato lungo) e $AC'=BP$ (lato corto). La costruzione della figura porta il lato $DC$ a sovrapporsi internamente in modo che la striscia residua $C'PCD$ (di altezza $AD-AC'$) si ripieghi esattamente sul rettangolo $ABPC'$: ciò impone che $ABPC'$ sia il rettangolo aureo *simile* a $ABCD$ ottenuto togliendo un quadrato di lato pari al lato corto.

**Verifica dell'aureità.** Togliendo dal rettangolo aureo $ABCD$ (lati $\varphi$ e $1$) un quadrato di lato $1$ (il lato corto), resta un rettangolo di lati $1$ e $\varphi-1$. Il suo rapporto lato lungo su lato corto è
$$
\frac{1}{\varphi-1}=\frac{1}{1/\varphi}=\varphi .
$$
Dunque il rettangolo residuo è *ancora aureo*. Il rettangolo $ABPC'$ della piega è proprio questo rettangolo aureo: i suoi lati sono $AB=\varphi$ e $AC'=AB-(\text{quadrato})\cdot$\ldots; più precisamente, dalla similitudine aurea, $\dfrac{AB}{AC'}=\varphi$, cioè
$$
\frac{AC'}{AB}=\frac{1}{\varphi}=\varphi-1 \quad\Longrightarrow\quad AC'=AB(\varphi-1)=\varphi(\varphi-1)=\varphi^{2}-\varphi=1=AD .
$$
Quindi $ABPC'$ ha rapporto fra i lati uguale a $\varphi$: è **aureo**. $\square$

**Calcolo di $AD$.** La relazione $AC'=AD$ è indipendente dalla normalizzazione: in scala reale, con $AD=b$ e $AB=\varphi b$, si ha $AC'=AB(\varphi-1)=\varphi b\cdot\frac1\varphi=b=AD$. Pertanto, da $AC'=40$ cm,
$$
\boxed{AD=40 \text{cm}},\qquad AB=40 \varphi=20 (1+\sqrt5)\approx64{,}7 \text{cm}.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_1/ques_2025_sessione_suppletiva_2025_prova_10_1_fig1.svg]]

*Rettangolo aureo $ABCD$ e piega $C'P$: il rettangolo $ABPC'$ è a sua volta aureo, con $AC'=AD$.*

## Quesito 2

Calcoliamo innanzitutto le probabilità di successo a ogni lancio. Zoe segna un punto se esce 5 o 6, dunque $P(\text{Zoe segna})=\frac{2}{6}=\frac{1}{3}$; in caso contrario segna Eva, con $P(\text{Eva segna})=\frac{4}{6}=\frac{2}{3}$.

Per determinare la probabilità che Zoe vinca con punteggio 3–1, osserviamo che la partita deve durare esattamente 4 lanci e l'ultimo lancio deve essere vinto da Zoe (altrimenti avrebbe già raggiunto il punteggio di 3 prima del quarto lancio e la partita sarebbe finita). Nei primi 3 lanci, Zoe ne vince esattamente 2 ed Eva ne vince 1, e la disposizione di queste vittorie tra i primi 3 lanci può avvenire in $\binom{3}{2}=3$ modi diversi.

La probabilità cercata è dunque:
$$
P = \binom{3}{2}\left(\frac{1}{3}\right)^2\left(\frac{2}{3}\right)^1\cdot\frac{1}{3} = 3\cdot\frac{1}{9}\cdot\frac{2}{3}\cdot\frac{1}{3} = \frac{6}{81} = \boxed{\frac{2}{27}} \approx 7{,}4\%.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_2/ques_2025_sessione_suppletiva_2025_prova_10_2_fig1.svg]]

*Diagramma ad albero (parziale) per la sfida Zoe–Eva: percorsi verso il punteggio $3{-}1$.*

## Quesito 3

Dobbiamo distribuire 9 matite distinguibili (di colori diversi) in tre cassetti con vincoli sul numero: 4 in A, 2 in B, 3 in C. Poiché le matite sono tutte diverse tra loro, l'ordine di scelta conta e si tratta di contare il numero di modi per suddividere 9 oggetti distinti in 3 gruppi ordinati di dimensione fissata.

Utilizziamo il **coefficiente multinomiale**, che generalizza il coefficiente binomiale al caso in cui si ripartisce un insieme in più sottoinsiemi di cardinalità prefissata. Procedendo per passi successivi: prima scegliamo le 4 matite per A tra le 9 ($\binom{9}{4}$ modi), poi le 2 per B tra le 5 rimanenti ($\binom{5}{2}$ modi), infine le 3 restanti vanno necessariamente in C ($\binom{3}{3}=1$ modo). In forma compatta il risultato si esprime come:
$$
\binom{9}{4,2,3} = \frac{9!}{4!\cdot 2!\cdot 3!} = \frac{362 880}{24\cdot 2\cdot 6} = \frac{362 880}{288} = \boxed{1260}.
$$
Le collocazioni possibili sono dunque $1260$.

## Quesito 4

Per $r$: $x=z+4$, $y=z+1$. Parametricamente ($z=s$): $r\colon(4+s,\,1+s,\,s)$. Direzione: $(1,1,1)$.

Per $s$: $(1+2t,\,t,\,3-t)$. Direzione: $(2,1,-1)$.

Incidenza: $4+s=1+2t$, $1+s=t$, $s=3-t$. Dalla terza: $t=3-s$. Nella seconda: $1+s=3-s$, $2s=2$, $s=1$, $t=2$. Verifica prima: $4+1=1+4=5$ \checkmark.

Punto di intersezione: $P=(5,2,1)$.

Vettore normale al piano: $\vec{n}=(1,1,1)\times(2,1,-1)=(-2,3,-1)$.

Piano: $-2(x-5)+3(y-2)-(z-1)=0$, cioè $\boxed{2x-3y+z-5=0}$.

Per la sfera $C=(5,-7,2)$, $P=(1,-1,0)$: $r=|CP|=\sqrt{16+36+4}=\sqrt{56}=2\sqrt{14}$. Distanza di $C$ dal piano: $\frac{|10+21+2-5|}{\sqrt{4+9+1}}=\frac{28}{\sqrt{14}}=2\sqrt{14}=r$: tangente \checkmark.

![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_4/ques_2025_sessione_suppletiva_2025_prova_10_4_fig1.svg]]

*Le rette $r$ e $s$ si intersecano in $P(5,2,1)$ e giacciono sul piano $\pi$.*

## Quesito 5

**Contorno.** Il triangolo di Reuleaux si ottiene tracciando, da ciascun vertice del triangolo equilatero di lato $L$, un arco di cerchio di raggio $L$ che congiunge i due vertici opposti. Ogni arco ha raggio $L$ e sottende un angolo al centro di $60^\circ=\pi/3$ radianti (l'angolo del triangolo equilatero). La lunghezza di ciascun arco è pertanto:
$$
\ell = L\cdot\frac{\pi}{3}.
$$
Essendo il contorno composto da 3 archi uguali, la lunghezza totale vale:
$$
P = 3\cdot\frac{\pi L}{3}=\boxed{\pi L}.
$$
**Area.** Ciascun arco delimita, insieme ai due raggi, un settore circolare di raggio $L$ e ampiezza $\pi/3$. L'area di ogni settore è:
$$
S_{\text{settore}} = \frac{1}{2}L^2\cdot\frac{\pi}{3}=\frac{\pi L^2}{6}.
$$
L'area del triangolo di Reuleaux si ottiene sommando le aree dei 3 settori e sottraendo le sovrapposizioni. Poiché i tre settori coprono interamente la figura, ma il triangolo equilatero interno viene contato 3 volte (una per settore) anziché 1, occorre sottrarre 2 volte l'area del triangolo equilatero:
$$
A_{\text{Reuleaux}} = 3\cdot\frac{\pi L^2}{6}-2\cdot\frac{\sqrt{3}}{4}L^2 = \frac{\pi L^2}{2}-\frac{\sqrt{3}}{2}L^2 = \boxed{\frac{(\pi-\sqrt{3}) L^2}{2}}.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_5/ques_2025_sessione_suppletiva_2025_prova_10_5_fig1.svg]]

*Triangolo di Reuleaux: contorno $= \pi L$.*

## Quesito 6

$g(x)=0$ quando $e^{f(x)}=1$, cioè $f(x)=0$.

$f(x)=\sin^2 x-\sin x\cos x=\sin x(\sin x-\cos x)=0$.

$\sin x=0$: $x=0,\pm\pi$. Ma $x=0$ è escluso dal dominio di $g$ (denominatore $x^2=0$). Restano $x=\pm\pi$.

$\sin x=\cos x$: $\tan x=1$, $x=\pi/4$ e $x=-3\pi/4$ in $[-\pi,\pi]$.

Zeri di $g$ in $[-\pi,\pi]$: $\boxed{x \in \left\{-\pi,\;-\frac{3\pi}{4},\;\frac{\pi}{4},\;\pi\right\}}$.

(In $x=0$: è un punto singolare. Si verifica che $\lim_{x\to 0}g(x)$ esiste e vale $f'(0)$... ma $g$ non è definita in $0$.)

![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_6/ques_2025_sessione_suppletiva_2025_prova_10_6_fig1.svg]]

*Grafico di $f(x)=\sin^2 x-\sin x\cos x$ in $[-\pi,\pi]$: gli zeri determinano quelli di $g$.*

## Quesito 7

**Determinazione di $T$.** La retta $r\colon 3x+2y-1=0$ si riscrive come $y=-\frac{3}{2}x+\frac{1}{2}$, dunque ha pendenza $m_r=-\frac{3}{2}$.

Per trovare il punto $T$ in cui la tangente alla parabola è parallela a $r$, calcoliamo la derivata di $p$:
$$
y' = 2x+1.
$$
Imponendo la condizione di parallelismo $y'=-\frac{3}{2}$: $2x+1=-\frac{3}{2}$, da cui $x=-\frac{5}{4}$.

L'ordinata corrispondente è:
$$
y = \frac{25}{16}-\frac{5}{4}+3 = \frac{25-20+48}{16} = \frac{53}{16}.
$$
Dunque $\boxed{T=\left(-\frac{5}{4},\;\frac{53}{16}\right)}$.

**Perché $T$ è il punto più vicino a $r$.** La distanza tra un punto della parabola e la retta $r$ si misura lungo la perpendicolare a $r$. Nel punto $T$ la tangente alla parabola è parallela a $r$, il che significa che la normale alla parabola in $T$ è perpendicolare a $r$: cioè la congiungente $T$ con il piede della perpendicolare su $r$ è ortogonale a $r$ stessa. Poiché la parabola è una curva convessa (concavità rivolta verso l'alto), il punto in cui la tangente è parallela a $r$ realizza la distanza minima dalla retta.

![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_7/ques_2025_sessione_suppletiva_2025_prova_10_7_fig1.svg]]

*Regione di piano racchiusa fra le due curve: punti di intersezione evidenziati.*

## Quesito 8

Per calcolare l'area della regione compresa tra il grafico di $f(x)=x\ln x$, l'asse $x$ e le rette verticali $x=1$ e $x=e$, osserviamo anzitutto che $f(x)\ge 0$ per $x\ge 1$ (poiché $\ln x\ge 0$), dunque l'area coincide con l'integrale definito.

Integriamo per parti con $u=\ln x$, $\,\mathrm{d} v = x\,\mathrm{d} x$, ottenendo $\,\mathrm{d} u = \frac{1}{x}\,\mathrm{d} x$ e $v = \frac{x^2}{2}$:
$$
\int x\ln x  \mathrm{d} x = \frac{x^2}{2}\ln x - \int\frac{x^2}{2}\cdot\frac{1}{x}  \mathrm{d} x = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C.
$$
Valutiamo ora l'integrale definito tra gli estremi di integrazione:
$$
A = \int_1^{e} x\ln x  \mathrm{d} x = \left[\frac{x^2}{2}\ln x - \frac{x^2}{4}\right]_1^{e} = \left(\frac{e^2}{2}\cdot 1 - \frac{e^2}{4}\right) - \left(0 - \frac{1}{4}\right) = \frac{e^2}{4} + \frac{1}{4} = \frac{e^2+1}{4} \approx 2{,}10.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_8/ques_2025_sessione_suppletiva_2025_prova_10_8_fig1.svg]]

*Area tra $f(x)=x\ln x$ e l'asse $x$ per $1\le x\le e$.*
