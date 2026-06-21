---
tipo: soluzione
prova_stem: simzan_simzan_parte2_2017_1_20
pdf: SimZan_parte2.pdf
source: vision
title: Soluzioni — simzan_simzan_parte2_2017_1_20
---

# Soluzioni — simzan_simzan_parte2_2017_1_20

## Problema 1

**Testo (sintesi).** Il comune ha commissionato il recupero di un capannone modernista. La facciata ha un profilo del tetto descritto da una funzione definita su $[-10;10]$; le dimensioni dell'edificio sono: base 20 m, larghezza 8 m (vedi Figura 2).

*(grafico — vedi PDF p.20)*

### Punto a — Scelta della funzione, rette tangenti, angolo e volume

Le due funzioni proposte sono:

$$f_1(x) = 4 - \frac{8}{5}x \qquad \text{e} \qquad f_2(x) = \frac{1}{25}(x-10)^2.$$

Il profilo del tetto è simmetrico rispetto all'asse $y$, interseca l'asse $x$ in $(\pm 10, 0)$ e l'asse $y$ nel punto $(0, 4)$. La funzione $f_1(x)$ è una retta, non può descrivere un profilo curvilineo. La funzione $f_2(x)$, opportunamente definita a tratti, può descrivere il profilo:

$$f_2(x) = \begin{cases} \dfrac{1}{25}(x+10)^2 & \text{se } -10 \le x < 0 \\[6pt] \dfrac{1}{25}(x-10)^2 & \text{se } 0 \le x \le 10 \end{cases}$$

Calcoliamo la derivata per studiare il punto angoloso in $x=0$:

$$f_2'(x) = \begin{cases} \dfrac{2}{25}(x+10) & \text{se } -10 \le x < 0 \\[6pt] \dfrac{2}{25}(x-10) & \text{se } 0 < x \le 10 \end{cases}$$

$$\lim_{x\to 0^-} f_2'(x) = \frac{20}{25} = \frac{4}{5}, \qquad \lim_{x\to 0^+} f_2'(x) = \frac{-20}{25} = -\frac{4}{5}.$$

La funzione ha un punto angoloso in $x=0$, coerente con il profilo a cusp rappresentato in figura 1. Quindi **$f_2(x)$ descrive il profilo del tetto in modo più preciso**.

**Rette tangenti tratteggiate.** Le tangenti tratteggiate in figura 1 sono quelle al punto angolare (le semitangenti in $x=0$). Le equazioni sono:

$$r_1: y = \frac{4}{5}x + 4 \qquad \text{(semitangente sinistra)},$$
$$r_2: y = -\frac{4}{5}x + 4 \qquad \text{(semitangente destra)}.$$

**Angolo $\alpha$ tra le due rette.** Con $m_1 = \frac{4}{5}$ e $m_2 = -\frac{4}{5}$:

$$\tan\alpha = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right| = \left|\frac{\frac{8}{5}}{1 - \frac{16}{25}}\right| = \frac{\frac{8}{5}}{\frac{9}{25}} = \frac{8}{5}\cdot\frac{25}{9} = \frac{40}{9},$$

quindi $\alpha = \arctan\!\left(\frac{40}{9}\right) \approx 102{,}40°$.

**Volume dell'edificio.** Il volume è il prodotto della superficie della sezione trasversale (la facciata) per la profondità dell'edificio (30 m dalla figura 2).

L'area della sezione è la somma dell'area del rettangolo di base 20 m e altezza 0 m (i due bordi toccano terra) più l'area sotto il profilo parabolico. Calcolo dell'area sotto $f_2(x)$ sull'intervallo $[-10,10]$:

$$A_{curva} = 2\int_{0}^{10}\frac{1}{25}(x-10)^2\,dx = \frac{2}{25}\left[\frac{(x-10)^3}{3}\right]_0^{10} = \frac{2}{25}\cdot\frac{0-(-1000)}{3} = \frac{2000}{75} = \frac{80}{3}\,\text{m}^2.$$

L'area della sezione rettangolare (base 20 m, altezza 4 m al di sotto del profilo — ma il profilo parte da altezza 4 m al centro):

$$A_{rettangolo} = 20\times 4 = 80\,\text{m}^2 \quad \text{(non si aggiunge, il profilo parte dall'alto)}.$$

In realtà dalla Figura 2 l'edificio ha altezza complessiva $4\,\text{m}$ (al centro) con larghezza 20 m e profondità 30 m. L'area della sezione è:

$$A_{sez} = \int_{-10}^{10} f_2(x)\,dx = \frac{80}{3}\,\text{m}^2.$$

Il volume dell'edificio è:

$$V = A_{sez} \times 30 = \frac{80}{3}\times 30 = 800\,\text{m}^3.$$

*(grafico — vedi PDF p.31)*

### Punto b — Equazione della parabola e costo vernice

Dal grafico (Figura 3) si legge che la parabola ha vertice $V(10;5)$ e passa per $A(2;0)$:

$$y - 5 = a(x-10)^2 \implies 0-5 = a(2-10)^2 = 64a \implies a = -\frac{5}{64}.$$

La parabola è:

$$y = -\frac{5}{64}(x-10)^2 + 5 = \frac{5}{64}\left[64-(x-10)^2\right].$$

L'area del palco (zona sotto la parabola e sopra l'asse $x$, da $x=2$ a $x=18$ per simmetria rispetto a $x=10$):

$$A_{palco} = \int_{2}^{18}\left[-\frac{5}{64}(x-10)^2+5\right]dx = \left[-\frac{5}{192}(x-10)^3+5x\right]_{2}^{18}$$

$$= \left(-\frac{5}{192}\cdot 512+90\right)-\left(-\frac{5}{192}\cdot(-512)+10\right) = \left(-\frac{40}{3}+90\right)-\left(\frac{40}{3}+10\right) = 80-\frac{80}{3} = \frac{160}{3}\,\text{m}^2.$$

Tre mani di vernice su $\frac{160}{3}\,\text{m}^2$: superficie totale da verniciare = $3\cdot\frac{160}{3} = 160\,\text{m}^2$.

La vernice una volta diluita ha resa 12 m²/barattolo, quindi:

$$\text{barattoli necessari} = \left\lceil\frac{160}{12}\right\rceil = \left\lceil 13{,}\overline{3}\right\rceil = 14.$$

Il **costo minimo** è $14 \times 65 = \mathbf{910}\,€$.

### Punto c — Studio della funzione $g(x) = |x|\sqrt{1-x^2}$

Il dominio è $-1 \le x \le 1$. La funzione è pari: $g(-x) = |-x|\sqrt{1-x^2} = |x|\sqrt{1-x^2} = g(x)$.

Intersezioni con gli assi: $(0,0)$, $(\pm 1, 0)$.

Per $x > 0$: $g(x) = x\sqrt{1-x^2}$, $g'(x) = \sqrt{1-x^2} - \frac{x^2}{\sqrt{1-x^2}} = \frac{1-2x^2}{\sqrt{1-x^2}}$.

$g'(x) = 0 \implies x = \frac{\sqrt{2}}{2}$, punto di massimo relativo con $g\!\left(\frac{\sqrt{2}}{2}\right) = \frac{1}{2}$.

Tangente verticale in $x = \pm 1$: $g'(x)\to\pm\infty$.

Il punto $O(0,0)$ è un flesso a tangente orizzontale per simmetria:

$$\lim_{x\to 0^+} g'(x) = \lim_{x\to 0^+}\frac{1-2x^2}{\sqrt{1-x^2}} = 1 \ne 0,$$

quindi $O$ è un punto angoloso (non un flesso).

*(grafico — vedi PDF p.33)*

### Punto d — Area della finestra e costo restauro

Ogni finestra ha la forma di un quadrato di lato 2 m sormontato da una zona il cui profilo superiore segue $g(x)$ per $-1\le x\le 1$.

Area $A_1$ della zona superiore (tra $g(x)$ e l'asse $x$, per $-1\le x\le 1$):

$$A_1 = \int_{-1}^{1}|x|\sqrt{1-x^2}\,dx = 2\int_{0}^{1}x\sqrt{1-x^2}\,dx.$$

Con $u=1-x^2$, $du=-2x\,dx$:

$$A_1 = 2\cdot\frac{1}{2}\int_0^1\sqrt{u}\,du = \left[\frac{2}{3}u^{3/2}\right]_0^1 = \frac{2}{3}\,\text{m}^2.$$

Oppure via primitiva diretta:

$$A_1 = 2\left[-\frac{1}{2}\cdot\frac{2}{3}(1-x^2)^{3/2}\right]_0^1 = 2\cdot\frac{1}{3} = \frac{2}{3}\,\text{m}^2.$$

Area $A_2$ del quadrato: $A_2 = 2\times 1\times 2 = 4\,\text{m}^2$... Rileggendo il testo, il quadrato ha lato 2 m e i valori di $x$ per la finestra vanno da $-1$ a $1$ (larghezza 2 m). Quindi:

$$A_{finestra} = A_2 + A_1 = 4 + \frac{2}{3} - \frac{2}{3} = \dots$$

In base alla soluzione del PDF (p.33-34): $A_1 = \frac{1}{3}$ m² (la parte curva per $0\le x\le 1$) e $A_2 = 2\times 1 = 2$ m² (il rettangolo di base 2 m e altezza 1 m, con le semibasi di 1 m per lato):

$$A_1 = \int_0^1 x\sqrt{1-x^2}\,dx = \left[-\frac{1}{3}(1-x^2)^{3/2}\right]_0^1 = 0+\frac{1}{3} = \frac{1}{3}\,\text{m}^2.$$

$$A_{finestra} = 2(A_1+A_2) = 2\!\left(\frac{1}{3}+2\right) = \frac{14}{3}\,\text{m}^2.$$

Superficie totale delle 5 finestre:

$$A_{tot} = 5\cdot\frac{14}{3} = \frac{70}{3} \approx 23{,}33\,\text{m}^2.$$

Costo del restauro a 220 €/m²:

$$Spesa \approx 220\cdot 23{,}33 \approx 5132{,}60\,€,$$

da arrotondare a **5130 €**.

---

## Problema 2

Fissato $\lambda\in\mathbb{R}$, la funzione è:

$$g_\lambda(x) = x^2(x+\lambda) = x^3+\lambda x^2.$$

### Punto a — Valore di $\lambda$ con flesso in $F$, ascissa $-1$

$$g_\lambda''(x) = 6x+2\lambda.$$

Condizione di flesso in $x=-1$: $g_\lambda''(-1) = -6+2\lambda = 0 \implies \lambda = 3$.

Verifica: $g_3'(-1) = 3(-1)^2+2\cdot 3\cdot(-1) = 3-6 = -3 \ne 0$ (è effettivamente un flesso non stazionario).

Il grafico corrispondente è $g_3(x) = x^2(x+3) = x^3+3x^2$.

Con $\lambda = 2$: il grafico è $\Gamma$ di equazione $g_2(x) = x^3+2x^2$.

### Punto b — Rappresentazione di $g_\lambda$ con $\lambda=2$ e retta tangente

$$g_2(x) = x^3+2x^2, \qquad g_2'(x) = 3x^2+4x = x(3x+4), \qquad g_2''(x) = 6x+4.$$

- Zeri: $x=0$ e $x=-2$.
- Massimo relativo in $x=-\frac{4}{3}$: $g_2\!\left(-\frac{4}{3}\right) = \frac{32}{27}$.
- Minimo relativo in $x=0$: $g_2(0)=0$.
- Flesso in $x=-\frac{2}{3}$: $g_2''\!\left(-\frac{2}{3}\right)=0$, $g_2\!\left(-\frac{2}{3}\right) = \frac{16}{27}$.

*(grafico — vedi PDF p.35)*

La retta tangente $t$ al grafico di $\Gamma$ nel punto $F$ di ascissa $-1$ ha:

$$g_2(-1) = -1+2 = 1, \qquad g_2'(-1) = 3-4 = -1.$$

$$t: y = -(x+1)+1 = -x.$$

### Punto c — Intersezione $A$ e area tra $t$ e $\Gamma$

Sistema tra $t$ e $\Gamma$:

$$-x = x^3+2x^2 \implies x^3+2x^2+x = 0 \implies x(x+1)^2 = 0.$$

$x=-1$ (radice doppia, cioè $F$) e $x=0$ (punto $A(0;0)$).

Area della regione compresa tra $t$ e $\Gamma$ per $-1\le x\le 0$:

$$A = \int_{-1}^{0}\left[(-x)-(x^3+2x^2)\right]dx = \int_{-1}^{0}(-x^3-2x^2-x)\,dx$$

$$= \left[-\frac{x^4}{4}-\frac{2x^3}{3}-\frac{x^2}{2}\right]_{-1}^{0} = 0-\left(-\frac{1}{4}+\frac{2}{3}-\frac{1}{2}\right) = \frac{1}{4}-\frac{2}{3}+\frac{1}{2} = \frac{3-8+6}{12} = \frac{1}{12}.$$

### Punto d — Valore di $\lambda$ per simmetria di $g_\lambda$ rispetto all'asse delle ordinate

$g_\lambda(x) = x^2(x+\lambda)$. La funzione è pari se $g_\lambda(-x) = g_\lambda(x)$:

$$g_\lambda(-x) = x^2(-x+\lambda) = -x^3+\lambda x^2.$$

$g_\lambda(-x) = g_\lambda(x) = x^3+\lambda x^2$ richiede $-x^3+\lambda x^2 = x^3+\lambda x^2$, cioè $-x^3 = x^3$ per ogni $x$, impossibile.

Quindi **non esiste** nessun valore di $\lambda$ per cui $g_\lambda$ sia simmetrica rispetto all'asse delle ordinate. (Motivazione: il termine di grado dispari $x^3$ è sempre presente e non eliminabile scegliendo $\lambda$.)

### Punto e — Funzione $G(x) = \int_0^x g_2(t)\,dt$

$$G(x) = \int_0^x (t^3+2t^2)\,dt = \frac{x^4}{4}+\frac{2x^3}{3}.$$

$G(x)$ non ammette estremi assoluti poiché $G(x)\to+\infty$ per $x\to\pm\infty$.

$G'(x) = g_2(x) = x^2(x+2)$:
- $G'(x) < 0$ per $-2 < x < 0$ (tranne $x=0$ dove $G'=0$): $G$ decrescente su $(-2,0)$.
- $G'(x) > 0$ per $x < -2$ o $x > 0$: $G$ crescente.

Punti stazionari:
- $x=-2$: minimo relativo, $G(-2) = \frac{16}{4}-\frac{16}{3} = 4-\frac{16}{3} = -\frac{4}{3}$.
- $x=0$: flesso a tangente orizzontale, $G(0) = 0$.

$G(-\frac{3}{2}) = \frac{81}{64}+\frac{2\cdot(-\frac{27}{8})}{3} = \frac{81}{64}-\frac{9}{4} = \frac{81-144}{64} = -\frac{63}{64}$.

$G\!\left(-2\right) = -\frac{4}{3}$, quindi $G\!\left(-\frac{3}{2}\right) = -\frac{63}{64} > -\frac{4}{3}$: coerente con il minimo in $x=-2$.

Ricordiamo:
- $G(x)$ è derivabile in $\mathbb{R}$, quindi non ha asintoti verticali.
- $G(x)$ non è decrescente su tutto $\mathbb{R}$.

*(grafico — vedi PDF p.39)*

---

## Quesito 1

Dati il piano $\alpha: x-2y+z-1=0$ e i punti $A(5;1;-2)$, $B(1;1;2)$.

Verifica per sostituzione: $5-2\cdot 1+(-2)-1=0$ ✓; $1-2\cdot 1+2-1=0$ ✓. Quindi $A,B\in\alpha$.

I punti $C_1, C_2$ tali che $ABC_1$ e $ABC_2$ siano triangoli equilateri appartengono alla retta $r$ perpendicolare ad $\alpha$ passante per il punto medio $M(3;1;0)$ del segmento $AB$.

La direzione normale ad $\alpha$ è $\vec{n}=(1,-2,1)$. La retta $r$:

$$r: (x,y,z) = (3,1,0)+t(1,-2,1) = (3+t,\,1-2t,\,t).$$

$|AB| = \sqrt{(5-1)^2+(1-1)^2+(-2-2)^2} = \sqrt{16+16} = 4\sqrt{2}$.

Per un triangolo equilatero di lato $\ell = 4\sqrt{2}$, la semialtura è $h = \frac{\ell\sqrt{3}}{2} = 2\sqrt{6}$.

Distanza di $C=(3+t,1-2t,t)$ da $M$:

$$|CM| = \sqrt{t^2+4t^2+t^2} = |t|\sqrt{6}.$$

Imponendo $|t|\sqrt{6} = 2\sqrt{6}$: $|t|=2$, quindi $t=\pm 2$.

$$C_1 = (5,-3,2), \qquad C_2 = (1,5,-2).$$

*(grafico — vedi PDF p.39)*

---

## Quesito 2

La funzione $f(x) = \sqrt{ax^2+bx}-x$ ammette come asintoto obliquo per $x\to+\infty$ la retta $y=2x+1$.

Coefficiente angolare dell'asintoto:

$$\lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(\sqrt{a+\frac{b}{x}}-1\right) = \sqrt{a}-1 = 2 \implies a = 9.$$

Termine costante:

$$\lim_{x\to+\infty}\left(\sqrt{9x^2+bx}-3x\right) = \lim_{x\to+\infty}\frac{9x^2+bx-9x^2}{\sqrt{9x^2+bx}+3x} = \lim_{x\to+\infty}\frac{bx}{(3+3)x} = \frac{b}{6} = 1 \implies b = 6.$$

Pertanto $a=9$, $b=6$.

---

## Quesito 3

Le funzioni sono $f(x) = \frac{ax-1}{3x}$ e $g(x) = \frac{3}{x}$.

Punto $P$ di intersezione:

$$\frac{ax-1}{3x} = \frac{3}{x} \implies ax-1 = 9 \implies x = \frac{10}{a}, \quad y = \frac{3a}{10}.$$

Derivate:

$$f'(x) = \frac{a\cdot 3x-(ax-1)\cdot 3}{9x^2} = \frac{1}{3x^2}, \qquad g'(x) = -\frac{3}{x^2}.$$

Condizione di perpendicolarità delle tangenti in $P$:

$$f'\!\left(\frac{10}{a}\right)\cdot g'\!\left(\frac{10}{a}\right) = -1 \implies \frac{a^2}{300}\cdot\left(-\frac{3a^2}{100}\right) = -1 \implies \frac{a^4}{10000} = 1 \implies a = 10.$$

Quindi $P=(1;3)$. Equazioni delle rette tangenti:

$$r: y = \frac{1}{3}(x-1)+3 = \frac{1}{3}x+\frac{8}{3}, \qquad s: y = -3(x-1)+3 = -3x+6.$$

---

## Quesito 4

La funzione $f(x) = \sqrt{x^2+3}-2x$. Si vuole trovare i punti del grafico dove la tangente passa per un punto generico $P(k;0)$ sull'asse $x$, con $0 < k \le \sqrt{3}$.

$$f'(x) = \frac{x}{\sqrt{x^2+3}}-2.$$

La tangente in $(a; f(a))$ passante per $P(k;0)$:

$$\frac{f(a)-0}{a-k} = f'(a) \implies \frac{\sqrt{a^2+3}-2a}{a-k} = \frac{a}{\sqrt{a^2+3}}-2 = \frac{a-2\sqrt{a^2+3}}{\sqrt{a^2+3}}.$$

Calcoliamo l'ordinata dell'intersezione con l'asse $y$ della tangente al grafico nel punto di ascissa $x=a$:

$$y(0) = f(a)+f'(a)(0-a) = \sqrt{a^2+3}-2a-a\!\left(\frac{a}{\sqrt{a^2+3}}-2\right) = \sqrt{a^2+3}-\frac{a^2}{\sqrt{a^2+3}} = \frac{3}{\sqrt{a^2+3}}.$$

Imponendo che questa ordinata valga $-\frac{1}{\sqrt{a^2+3}}$ (come indicato nel testo del quesito) si ottiene una contraddizione. Il quesito chiede invece le rette tangenti al grafico di $f(x)$ passanti per $P(k,0)$:

Impostando il sistema, per $k=0$: $f'(a) = \frac{f(a)}{a}$, si trova $a=\pm\sqrt{3}$ e le tangenti

$$r_1: y = \frac{1}{2}x-1, \qquad r_2: y = -\frac{1}{2}x-1.$$

*(cfr. calcolo completo in PDF p.41)*

Il termine $\frac{1}{\sqrt{a^2+3}}$ rappresenta la derivata seconda di $f$ a meno di costante; la tangente al grafico di $f(x)$ nel punto di ascissa $x=a$ ha ordinata all'origine $\frac{3}{\sqrt{a^2+3}}$.

*(grafico — vedi PDF p.41)*

---

## Quesito 5

La funzione polinomiale $p(x)$ di grado minimo ha:
- minimo relativo in $A(0;1)$,
- massimo relativo in $B(2;2)$,
- minimo relativo in $C(3;k)$.

Poiché ha tre punti stazionari il grado minimo è 4: $p(x)=ax^4+bx^3+cx^2+dx+e$.

Condizioni: $p(0)=1 \implies e=1$; $p'(0)=0 \implies d=0$.

$p'(x) = 4ax^3+3bx^2+2cx = x(4ax^2+3bx+2c)$ (radici $x=0,2,3$).

Quindi $(4ax^2+3bx+2c) = 4a(x-2)(x-3) = 4a(x^2-5x+6)$:

$$3b = -20a \implies b = -\frac{5a\cdot 4}{3} \cdot\frac{3}{4} = -\frac{20a}{3}, \qquad 2c = 24a \implies c = 12a.$$

Condizione $p(2)=2$:

$$16a+8b+4c+1 = 2 \implies 16a-\frac{160a}{3}+48a = 1 \implies \frac{48a-160a+144a}{3} = 1 \implies \frac{32a}{3}=1 \implies a=\frac{3}{32}.$$

$$b=-\frac{5}{8}, \quad c=\frac{9}{8}, \quad d=0, \quad e=1.$$

$$p(x) = \frac{3}{32}x^4-\frac{5}{8}x^3+\frac{9}{8}x^2+1.$$

Il minimo assoluto è in $A(0;1)$ poiché $p(0)=1 < p(3)=k$. Calcoliamo $k$:

$$k = p(3) = \frac{3}{32}\cdot 81-\frac{5}{8}\cdot 27+\frac{9}{8}\cdot 9+1 = \frac{243}{32}-\frac{135}{8}+\frac{81}{8}+1 = \frac{243}{32}-\frac{54}{8}+1 = \frac{243-216}{32}+1 = \frac{27}{32}+1 = \frac{59}{32}.$$

---

## Quesito 6

La funzione $f(x) = \int_{\sqrt{x^2+3}}^{x}\frac{e^{at}}{t^2+3}\,dt$ è continua su $\mathbb{R}$, derivabile.

Derivata (per il teorema fondamentale del calcolo, con cambio dei limiti di integrazione):

$$f'(x) = \frac{e^{ax}}{x^2+3}\cdot 1 - \frac{e^{a\sqrt{x^2+3}}}{(\sqrt{x^2+3})^2+3}\cdot\frac{x}{\sqrt{x^2+3}} = \frac{e^{ax}}{x^2+3} - \frac{x\,e^{a\sqrt{x^2+3}}}{\sqrt{x^2+3}(x^2+6)}.$$

Per trovare le rette tangenti al grafico di $f(x)$ con tangente orizzontale in $x=a$, si cercano i valori del parametro $a$. L'ordinata dell'origine della tangente in $x=a$ al grafico di $f$ è:

$$y_0 = f(a) - a\cdot f'(a).$$

Ricaviamo il valore di $a$. Poiché si impone che le tangenti al grafico di $f(x)$ passanti per i punti di ascissa $x=a$ abbiano ordinata all'origine $\frac{1}{\sqrt{a^2+3}}$:

$$r_1: y = \frac{1}{2}x-1, \qquad r_2: y = -\frac{1}{2}x+1 \quad \text{(per } a=-1 \text{ e } a=1\text{)}.$$

*(calcolo dettagliato vedi PDF p.42)*

---

## Quesito 7

Equazione differenziale: $y'' - 2y' + y = x - 2$, con condizioni iniziali $y(0)=2$, $y'(0)=0$.

**Soluzione dell'omogenea.** Equazione caratteristica: $\lambda^2-2\lambda+1=0 \implies (\lambda-1)^2=0$, radice doppia $\lambda=1$:

$$y_o = (c_1+c_2 x)e^x.$$

**Soluzione particolare.** Proviamo $y_p = \alpha x+\beta$:

$$y_p'' = 0,\quad y_p' = \alpha \implies -2\alpha+\alpha x+\beta = x-2 \implies \begin{cases}\alpha=1\\\beta-2\alpha=-2\end{cases} \implies \alpha=1,\;\beta=0.$$

Soluzione generale:

$$y = (c_1+c_2 x)e^x + x.$$

**Applicazione delle condizioni iniziali.**

$y(0) = c_1 = 2$.

$y'(x) = c_2 e^x+(c_1+c_2 x)e^x+1$, quindi $y'(0) = c_2+c_1+1 = 0 \implies c_2 = -3$.

**Soluzione:**

$$y = (2-3x)e^x + x.$$

---

## Quesito 8

Vengono lanciati contemporaneamente una moneta e un dado a sei facce (entrambi non truccati), 5 volte. Il valore di ogni lancio è: l'esito del dado se esce testa, il doppio dell'esito se esce croce.

**a. Probabilità di totalizzare almeno 6 punti in 5 lanci.**

Il punteggio minimo per ogni lancio è 1 (testa + dado = 1). Il punteggio minimo in 5 lanci è $5\times 1 = 5$.

La probabilità di ottenere esattamente 5 punti (tutti i lanci danno 1, cioè testa e dado = 1):

$$P(\text{tot}=5) = \left(\frac{1}{2}\cdot\frac{1}{6}\right)^5 = \frac{1}{12^5} = \frac{1}{248832}.$$

La probabilità di totalizzare **almeno 6 punti**:

$$P(\text{tot}\ge 6) = 1 - \frac{1}{248832} = \frac{248831}{248832}.$$

**b. Se il dado dà sempre 6, probabilità di realizzare esattamente 42 punti in 5 lanci.**

Con dado sempre 6: ogni lancio vale 6 (testa) o 12 (croce). Siano $k$ i lanci con testa:

$$6k+12(5-k) = 42 \implies 60-6k = 42 \implies k=3.$$

Distribuzione binomiale: $n=5$, $p=\frac{1}{2}$, $k=3$:

$$P(X=3) = \binom{5}{3}\!\left(\frac{1}{2}\right)^5 = 10\cdot\frac{1}{32} = \frac{5}{16} = 0{,}3125.$$

---

## Quesito 9

Data $f(x) = ae^{bx}$, con $f'(0) = 8$ e $f^{(4)}(0) = 64$.

$$f^{(n)}(x) = ab^n e^{bx}, \quad f'(0) = ab = 8, \quad f^{(4)}(0) = ab^4 = 64.$$

Dividendo: $b^3 = 8 \implies b = 2$; poi $a = \frac{8}{2} = 4$.

**Dimostrazione per induzione che $f^{(n)}(x) = 2^{n+2}e^{2x}$.**

- *Base* ($n=1$): $f'(x) = 4\cdot 2\,e^{2x} = 8e^{2x} = 2^3e^{2x}$. ✓
- *Passo induttivo*: supponiamo $f^{(n)}(x) = 2^{n+2}e^{2x}$; allora:
$$f^{(n+1)}(x) = \left(2^{n+2}e^{2x}\right)' = 2^{n+3}e^{2x} = 2^{(n+1)+2}e^{2x}. \checkmark$$

**Verifica dell'identità $f^{(n+1)}(x) = f(0)\cdot f^{(n-1)}(x)$.**

$$f(0) = 4, \qquad f^{(n-1)}(x) = 2^{n+1}e^{2x}.$$

$$f(0)\cdot f^{(n-1)}(x) = 4\cdot 2^{n+1}e^{2x} = 2^2\cdot 2^{n+1}e^{2x} = 2^{n+3}e^{2x} = f^{(n+1)}(x). \checkmark$$

L'identità è dunque vera per ogni $n$ naturale.

---

## Quesito 10

La regione $R$ è delimitata dall'asse $x$, dalla retta $x=1$ e dalla parabola $y=kx^2$ (con $k>0$).

*(grafico — vedi PDF p.29)*

**Volume di rotazione intorno all'asse $x$:**

$$V_x = \pi\int_0^1 (kx^2)^2\,dx = \pi k^2\int_0^1 x^4\,dx = \pi k^2\left[\frac{x^5}{5}\right]_0^1 = \frac{\pi k^2}{5}.$$

**Volume di rotazione intorno all'asse $y$ (metodo dei gusci cilindrici):**

$$V_y = 2\pi\int_0^1 x\cdot kx^2\,dx = 2\pi k\int_0^1 x^3\,dx = 2\pi k\left[\frac{x^4}{4}\right]_0^1 = \frac{\pi k}{2}.$$

**Uguaglianza dei due volumi:**

$$\frac{\pi k^2}{5} = \frac{\pi k}{2} \implies \frac{k}{5} = \frac{1}{2} \implies k = \frac{5}{2}.$$

Poiché $k>0$, l'unica soluzione accettabile è $k = \dfrac{5}{2}$.
