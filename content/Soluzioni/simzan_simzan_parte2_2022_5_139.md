---
tipo: soluzione
prova_stem: simzan_simzan_parte2_2022_5_139
pdf: SimZan_parte2.pdf
source: vision
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Svolgimento'
---
## Problema 1

Consideriamo la famiglia di funzioni $f_a(x) = \dfrac{x + a}{1 + x^2}$, con $a \in \mathbb{R}$.

### Punto 1 — Massimo, minimo e asintoto

Poiché $1 + x^2 \neq 0$ per ogni $x \in \mathbb{R}$, il dominio di $f_a(x)$ è $\mathbb{R}$.

Calcoliamo i limiti agli estremi del dominio:

$$\lim_{x \to \pm\infty} f_a(x) = \lim_{x \to \pm\infty} \frac{x + a}{1 + x^2} = 0,$$

quindi la funzione ammette un **unico asintoto**: la retta di equazione $y = 0$.

Studiamo la monotonia mediante la derivata prima:

$$f_a'(x) = \frac{(1 + x^2) - (x + a) \cdot 2x}{(1 + x^2)^2} = \frac{-x^2 - 2ax + 1}{(1 + x^2)^2}.$$

Il numeratore $-x^2 - 2ax + 1$ è un trinomio di secondo grado con coefficiente direttivo negativo e discriminante $\Delta = 4a^2 + 4 > 0$ per ogni $a \in \mathbb{R}$, quindi ha sempre due radici reali distinte:

$$x_{1,2} = \frac{2a \pm \sqrt{4a^2 + 4}}{-2} = -a \mp \sqrt{a^2 + 1}.$$

Poiché il coefficiente direttivo del numeratore è negativo, $f_a'(x) > 0$ nell'intervallo $(x_1, x_2)$ con $x_1 = -a - \sqrt{a^2+1}$ e $x_2 = -a + \sqrt{a^2+1}$.

La funzione ha quindi:
- un **punto di minimo relativo** in $x_1 = -a - \sqrt{a^2+1}$;
- un **punto di massimo relativo** in $x_2 = -a + \sqrt{a^2+1}$.

### Punto 2 — Retta tangente in $C$, punto $D$, e valore $a > 0$ tale che $|CD| = 2\sqrt{2}$

Il punto $C$ è l'intersezione del grafico con l'asse $y$: $C = (0,\; a)$.

Il coefficiente angolare della tangente in $C$ è:

$$f_a'(0) = \frac{-0 - 0 + 1}{1} = 1.$$

Osserviamo che tale valore **non dipende da $a$**. La retta tangente in $C$ ha equazione:

$$y = x + a.$$

Il punto $D$, intersezione del grafico con l'asse $x$, ha coordinate $D = (-a,\; 0)$.

Verifichiamo che $D$ giace sulla retta tangente:

$$y(-a) = -a + a = 0.\quad \checkmark$$

Quindi la retta tangente in $C$ passa anche per $D$. Impostiamo la misura del segmento $CD = 2\sqrt{2}$:

$$|CD| = \sqrt{(0 - (-a))^2 + (a - 0)^2} = \sqrt{a^2 + a^2} = |a|\sqrt{2} = 2\sqrt{2}$$

$$\Rightarrow \quad |a| = 2 \quad \Rightarrow \quad a = 2 \quad (\text{poiché } a > 0).$$

### Punto 3 — Studio di $g(x) = f_2(x)$

Per $a = 2$:

$$g(x) = \frac{x + 2}{1 + x^2}.$$

La derivata prima è:

$$g'(x) = \frac{-x^2 - 4x + 1}{(1 + x^2)^2}.$$

Le radici del numeratore sono:

$$x = \frac{4 \pm \sqrt{16 + 4}}{-2} = -2 \pm \sqrt{5}.$$

La funzione è crescente per $x \in (-2 - \sqrt{5},\; -2 + \sqrt{5})$, con:
- **minimo relativo** in $x_m = -2 - \sqrt{5}$;
- **massimo relativo** in $x_M = -2 + \sqrt{5}$.

La funzione è continua su $\mathbb{R}$, con asintoto orizzontale $y = 0$, intersezione con l'asse $x$ in $x = -2$ e con l'asse $y$ in $y = 2$.

*(grafico — vedi PDF p.151)*

### Punto 4 — Valore di $a$ per $h(x)$ simmetrica rispetto all'origine; area tra $g(x)$ e $h(x)$ in $[-1, 1]$

La funzione $h(x) = f_a(x)$ è simmetrica rispetto all'origine se $h(-x) = -h(x)$:

$$\frac{-x + a}{1 + x^2} = -\frac{x + a}{1 + x^2} \quad \Rightarrow \quad -x + a = -x - a \quad \Rightarrow \quad 2a = 0 \quad \Rightarrow \quad a = 0.$$

Quindi $h(x) = f_0(x) = \dfrac{x}{1 + x^2}$.

Verifichiamo $g(x) > h(x)$ per ogni $x \in \mathbb{R}$:

$$g(x) - h(x) = \frac{x + 2}{1 + x^2} - \frac{x}{1 + x^2} = \frac{2}{1 + x^2} > 0 \quad \forall\, x \in \mathbb{R}.\quad \checkmark$$

Area tra i due grafici nell'intervallo $[-1, 1]$:

$$\int_{-1}^{1} \bigl[g(x) - h(x)\bigr]\, dx = \int_{-1}^{1} \frac{2}{1 + x^2}\, dx = 2\bigl[\arctan x\bigr]_{-1}^{1} = 2\!\left(\frac{\pi}{4} + \frac{\pi}{4}\right) = \pi.$$

### Punto 5 — Calcolo di $F(\sqrt{3})$ e del limite

La funzione integrale è:

$$F(x) = \int_0^x h(t)\, dt = \int_0^x \frac{t}{1 + t^2}\, dt = \frac{1}{2}\bigl[\ln(1 + t^2)\bigr]_0^x = \frac{1}{2}\ln(1 + x^2).$$

Quindi:

$$F(\sqrt{3}) = \frac{1}{2}\ln(1 + 3) = \frac{1}{2}\ln 4 = \ln 2.$$

Per il limite:

$$\lim_{x \to +\infty} \frac{F(x)}{\ln x} = \lim_{x \to +\infty} \frac{\tfrac{1}{2}\ln(1 + x^2)}{\ln x}.$$

Forma $\dfrac{\infty}{\infty}$: applichiamo il teorema di De L'Hôpital:

$$\lim_{x \to +\infty} \frac{\dfrac{x}{1+x^2}}{\dfrac{1}{x}} = \lim_{x \to +\infty} \frac{x^2}{1 + x^2} = 1.$$

---

## Problema 2

La funzione è $f(x) = ax \cdot e^{-x/b}$, con massimo relativo in $x = 3$ *(grafico — vedi PDF p.140)*.

### Punto 1 — Determinazione di $a$ e $b$

Calcoliamo la derivata prima:

$$f'(x) = a\, e^{-x/b} + ax \cdot \left(-\frac{1}{b}\right)e^{-x/b} = a\, e^{-x/b}\!\left(1 - \frac{x}{b}\right).$$

Poiché $a \neq 0$ e $e^{-x/b} > 0$, la condizione $f'(3) = 0$ dà:

$$1 - \frac{3}{b} = 0 \quad \Rightarrow \quad b = 3.$$

Dal grafico il massimo ha ordinata $\dfrac{18}{e^3}$ in $x = 3$, dunque:

$$f(3) = 3a\, e^{-1} = \frac{18}{e^3} \cdot e^2 \;(\text{oppure dal grafico}) \quad \Longrightarrow \quad \frac{3a}{e} = \frac{6}{e} \quad \Rightarrow \quad a = 2.$$

La soluzione ufficiale conferma $a = 2$, $b = 3$, quindi:

$$f(x) = 2x\, e^{-x/3}.$$

### Punto 2 — Coordinate del punto di flesso $F$

Calcoliamo la derivata seconda:

$$f'(x) = 2\,e^{-x/3}\!\left(1 - \frac{x}{3}\right),$$

$$f''(x) = -\frac{2}{3}e^{-x/3}\!\left(1 - \frac{x}{3}\right) + 2\,e^{-x/3}\!\left(-\frac{1}{3}\right) = \frac{2}{3}\,e^{-x/3}\!\left(\frac{x}{3} - 2\right).$$

Poiché $e^{-x/3} > 0$, poniamo $\dfrac{x}{3} - 2 = 0 \Rightarrow x = 6$.

La derivata seconda cambia segno in $x = 6$, dunque è un punto di flesso.

$$f(6) = 2 \cdot 6 \cdot e^{-2} = \frac{12}{e^2}.$$

Il punto di flesso è $F = \!\left(6,\; \dfrac{12}{e^2}\right)$.

### Punto 3 — Grafico qualitativo di $f'(x)$

Dal grafico di $f(x)$ si osserva *(grafico — vedi PDF p.153)*:
- $f'(x) > 0$ per $x < 3$: $f$ è crescente, quindi $f' > 0$;
- $f'(x) = 0$ in $x = 3$: massimo di $f$;
- $f'(x) < 0$ per $x > 3$: $f$ è decrescente;
- in $x = 6$ (flesso di $f$) la derivata prima ha un minimo relativo;
- $\lim_{x \to +\infty} f'(x) = 0$: asintoto orizzontale $y = 0$ per $f'$.

### Punto 4 — Coordinate di $P$ che rendono massima l'area di $APBO$

Sia $P = (x_0,\; f(x_0))$ con $x_0 > 0$. Le proiezioni ortogonali sono $A = (x_0, 0)$ e $B = (0,\; f(x_0))$.

L'area del rettangolo $APBO$ è:

$$\mathcal{A}(x) = x \cdot f(x) = x \cdot 2x\,e^{-x/3} = 2x^2 e^{-x/3}.$$

Deriviamo:

$$\mathcal{A}'(x) = 4x\,e^{-x/3} + 2x^2 \cdot \left(-\frac{1}{3}\right)e^{-x/3} = 2x\,e^{-x/3}\!\left(2 - \frac{x}{3}\right).$$

Per $x > 0$: $\mathcal{A}'(x) = 0 \Rightarrow 2 - \dfrac{x}{3} = 0 \Rightarrow x = 6$.

$$\mathcal{A}(6) = 2 \cdot 36 \cdot e^{-2} = \frac{72}{e^2} \approx 9{,}74.$$

Le coordinate di $P$ che rendono massima l'area sono $P = \!\left(6,\; \dfrac{12}{e^2}\right)$.

### Punto 5 — Integrale improprio $\int_3^{+\infty} f(x)\,dx$

Per parti: sia $u = 2x$, $dv = e^{-x/3}\,dx$, quindi $du = 2\,dx$, $v = -3e^{-x/3}$:

$$\int 2x\,e^{-x/3}\,dx = -6x\,e^{-x/3} + \int 6\,e^{-x/3}\,dx = -6x\,e^{-x/3} - 18\,e^{-x/3} + C = -(6x + 18)e^{-x/3} + C.$$

Calcoliamo il limite:

$$\lim_{b \to +\infty} \bigl[-(6x+18)e^{-x/3}\bigr]_3^b = \lim_{b \to +\infty}\bigl[-(6b+18)e^{-b/3}\bigr] + (18+18)e^{-1} = 0 + \frac{36}{e}.$$

$$\int_3^{+\infty} f(x)\,dx = \frac{36}{e}.$$

**Significato geometrico:** il valore $\dfrac{36}{e}$ rappresenta l'area della regione di piano illimitata compresa tra il grafico di $f(x) = 2x\,e^{-x/3}$ e l'asse $x$ per $x \ge 3$ (dove $f$ è positiva).

---

## Quesito 1

La funzione $f'(x)$ è definita e continua nell'intervallo $[0; 6]$ *(grafico — vedi PDF p.141)*.

Dal grafico si ricavano le espressioni a tratti di $f'(x)$:

- In $[0; 3]$: retta passante per $(0; -3)$ e $(3; 3)$, quindi $f'(x) = 2x - 3$.
- In $[3; 4]$: retta passante per $(3; 3)$ e $(4; 1)$, quindi $f'(x) = -2x + 9$.
- In $[4; 6]$: retta di equazione $y = 1$, quindi $f'(x) = 1$.

Integrando con $f(0) = 0$:

**In $[0; 3]$:** $f(x) = x^2 - 3x$. ($f(0) = 0$ $\checkmark$)

Continuità in $x = 3$: $f(3) = 9 - 9 = 0$.

**In $[3; 4]$:** $f(x) = -x^2 + 9x + C_2$.
Continuità: $-9 + 27 + C_2 = 0 \Rightarrow C_2 = -18$.
Quindi $f(x) = -x^2 + 9x - 18$.

Continuità in $x = 4$: $f(4) = -16 + 36 - 18 = 2$.

**In $[4; 6]$:** $f(x) = x + C_3$.
Continuità: $4 + C_3 = 2 \Rightarrow C_3 = -2$.
Quindi $f(x) = x - 2$.

La funzione analitica è:

$$f(x) = \begin{cases} x^2 - 3x, & 0 \le x < 3 \\ -x^2 + 9x - 18, & 3 \le x < 4 \\ x - 2, & 4 \le x \le 6 \end{cases}$$

*(grafico — vedi PDF p.155)*

**Teorema di Lagrange:** $f(x)$ è continua su $[0; 6]$; verifichiamo la derivabilità nei punti di raccordo:
- in $x = 3$: $f'(3^-) = 2\cdot3 - 3 = 3 = -2\cdot3 + 9 = f'(3^+)$. $\checkmark$
- in $x = 4$: $f'(4^-) = -8 + 9 = 1 = f'(4^+)$. $\checkmark$

Quindi $f$ soddisfa le ipotesi del teorema su $[0; 6]$. Il teorema garantisce l'esistenza di $c \in (0; 6)$ con:

$$f'(c) = \frac{f(6) - f(0)}{6 - 0} = \frac{4 - 0}{6} = \frac{2}{3}.$$

Cerchiamo i valori:
- **In $(0; 3)$:** $2c - 3 = \tfrac{2}{3} \Rightarrow c = \tfrac{11}{6} \approx 1{,}83 \in (0, 3)$. $\checkmark$
- **In $(3; 4)$:** $-2c + 9 = \tfrac{2}{3} \Rightarrow c = \tfrac{25}{6} \approx 4{,}17 \notin (3, 4)$. $\times$
- **In $(4; 6)$:** $1 \neq \tfrac{2}{3}$. Nessuna soluzione.

L'unico punto che soddisfa il teorema è $c = \dfrac{11}{6}$.

---

## Quesito 2

La funzione è:

$$f(x) = \begin{cases} ax^2(x + 2) + bx - 8a, & x < 2 \\ \ln(x - 1), & x \ge 2 \end{cases}$$

Troviamo $a$ e $b$ affinché $f$ sia ovunque continua e derivabile.

**Continuità in $x = 2$:**

$$\lim_{x \to 2^-} f(x) = a \cdot 4 \cdot 4 + 2b - 8a = 8a + 2b, \qquad \lim_{x \to 2^+} f(x) = \ln 1 = 0.$$

Quindi $8a + 2b = 0$, ossia $b = -4a$.

**Derivabilità in $x = 2$:**

$$\lim_{x \to 2^-} f'(x) = 3ax^2 + 4ax + b \big|_{x=2} = 12a + 8a + b = 20a + b,$$

$$\lim_{x \to 2^+} f'(x) = \frac{1}{x-1}\bigg|_{x=2} = 1.$$

Quindi $20a + b = 1$. Sostituendo $b = -4a$: $16a = 1 \Rightarrow a = \dfrac{1}{16}$, $b = -\dfrac{1}{4}$.

---

## Quesito 3

Consideriamo le curve $f(x) = 2e^{-x}$ e $g(x) = e^{-x}$ *(grafico — vedi PDF p.141)*. Il triangolo $ABC$ ha i vertici:
- $A = (0, 2)$ (sul grafico di $f$ per $x = 0$, poiché $f(0) = 2$);
- $B = (k,\; 2e^{-k})$ (su $f$ con $x = k$);
- $C = (k,\; e^{-k})$ (su $g$ con $x = k$), con $k \ge 1$.

La base del triangolo è $|BC| = 2e^{-k} - e^{-k} = e^{-k}$, l'altezza (distanza orizzontale da $A$ alla retta $x = k$) è $k$.

Area del triangolo:

$$\mathcal{A}(k) = \frac{1}{2} \cdot k \cdot e^{-k}.$$

Per massimizzare:

$$\mathcal{A}'(k) = \frac{e^{-k}}{2}(1 - k) = 0 \quad \Rightarrow \quad k = 1.$$

Poiché $\mathcal{A}' > 0$ per $k < 1$ e $\mathcal{A}' < 0$ per $k > 1$, il massimo è in $k = 1$.

$$\mathcal{A}_{\max} = \mathcal{A}(1) = \frac{1}{2e}.$$

---

## Quesito 4

La funzione è $f(x) = \dfrac{x^2 - 4x^2}{p(x)}$ dove $p(x)$ è un polinomio *(vedi PDF p.142 per la forma esatta)*.

Dalla soluzione ufficiale (pp.157–158), la funzione è:

$$f(x) = \frac{x^2 - 4x^2}{2x^2 - 12x + 16}$$

con un asintoto obliquo di equazione $y = \dfrac{1}{2}x + 1$ e una singolarità eliminabile in $x = 4$.

Semplificando (portando fuori il fattore comune $(x - 4)$ da numeratore e denominatore):

$$f(x) = \frac{x(x - 4)}{2(x-2)(x-4)} = \frac{x}{2(x-2)}, \quad x \neq 4.$$

**Dominio:** $\mathbb{R} \setminus \{2, 4\}$ (ma in $x = 4$ la singolarità è eliminabile).

**Asintoto verticale** in $x = 2$; **asintoto obliquo** $y = \dfrac{1}{2}x + 1$.

**Derivata prima:**

$$f'(x) = \frac{2(x-2) - x \cdot 2}{4(x-2)^2} = \frac{-4}{4(x-2)^2} \cdot \frac{1}{1} = \frac{-1}{(x-2)^2} < 0.$$

La funzione è strettamente decrescente nel suo dominio e non ha estremi relativi.

*(grafico — vedi PDF p.159)*

---

## Quesito 5

Calcoliamo il volume del solido di rotazione attorno all'asse $x$ della regione compresa tra la retta $x + y = 4$ e la semicirconferenza $y = \sqrt{10 - x^2}$.

**Intersezioni:**

$$\sqrt{10 - x^2} = 4 - x \quad \Rightarrow \quad 10 - x^2 = 16 - 8x + x^2 \quad \Rightarrow \quad 2x^2 - 8x + 6 = 0$$

$$x^2 - 4x + 3 = 0 \quad \Rightarrow \quad (x-1)(x-3) = 0 \quad \Rightarrow \quad x = 1,\; x = 3.$$

*(grafico — vedi PDF p.159)*

In $[1, 3]$: $\sqrt{10-x^2} \ge 4 - x$ (la semicirconferenza è sopra la retta).

Volume con il metodo dei dischi (differenza delle aree):

$$V = \pi \int_1^3 \bigl[(10 - x^2) - (4-x)^2\bigr]\,dx = \pi \int_1^3 \bigl[-2x^2 + 8x - 6\bigr]\,dx$$

$$= \pi \left[-\frac{2x^3}{3} + 4x^2 - 6x\right]_1^3 = \pi \left[\left(-18 + 36 - 18\right) - \left(-\frac{2}{3} + 4 - 6\right)\right]$$

$$= \pi \left[0 - \left(-\frac{8}{3}\right)\right] = \frac{8\pi}{3}.$$

---

## Quesito 6

La funzione è $f(x) = 3ax - ax^2 = ax(3-x)$, con $a > 0$.

**Area del segmento parabolico** (tra la parabola e l'asse $x$, per $x \in [0; 3]$):

$$A = \int_0^3 (3ax - ax^2)\,dx = a\left[\frac{3x^2}{2} - \frac{x^3}{3}\right]_0^3 = a\left(\frac{27}{2} - 9\right) = \frac{9a}{2}.$$

Imponendo $A = 18$:

$$\frac{9a}{2} = 18 \quad \Rightarrow \quad a = 4.$$

Quindi $f(x) = 12x - 4x^2$.

**Valor medio** di $f$ su $[0; 3]$:

$$\bar{f} = \frac{1}{3}\int_0^3 f(x)\,dx = \frac{18}{3} = 6.$$

**Punti $c \in [0; 3]$ tali che $\displaystyle\int_0^3 f(x)\,dx = 3 \cdot f(c)$:**

$$3\,f(c) = 18 \quad \Rightarrow \quad f(c) = 6 \quad \Rightarrow \quad 12c - 4c^2 = 6 \quad \Rightarrow \quad 2c^2 - 6c + 3 = 0$$

$$c = \frac{6 \pm \sqrt{36 - 24}}{4} = \frac{6 \pm 2\sqrt{3}}{4} = \frac{3 \pm \sqrt{3}}{2}.$$

Entrambe le soluzioni $c_1 = \dfrac{3 - \sqrt{3}}{2} \approx 0{,}63$ e $c_2 = \dfrac{3 + \sqrt{3}}{2} \approx 2{,}37$ appartengono a $[0; 3]$ e sono entrambe accettabili.

---

## Quesito 7

Un'urna contiene 12 palline bianche e 8 nere (totale 20). Si estraggono due palline in successione: se la prima è bianca viene rimessa nell'urna; se è nera viene tolta.

*(grafico — vedi PDF p.162)*

**Caso 1:** Prima bianca (rimessa): $P(B_1) = \dfrac{12}{20} = \dfrac{3}{5}$. Urna rimane 12B + 8N.

$$P(B_2 \mid B_1) = \frac{12}{20} = \frac{3}{5}, \qquad P(B_1 \cap B_2) = \frac{3}{5} \cdot \frac{3}{5} = \frac{9}{25}.$$

**Caso 2:** Prima nera (tolta): $P(N_1) = \dfrac{8}{20} = \dfrac{2}{5}$. Urna diventa 12B + 7N (totale 19).

$$P(B_2 \mid N_1) = \frac{12}{19}, \qquad P(N_1 \cap B_2) = \frac{2}{5} \cdot \frac{12}{19} = \frac{24}{95}.$$

**a. Probabilità che la seconda pallina sia bianca:**

$$P(B_2) = \frac{9}{25} + \frac{24}{95} = \frac{171}{475} + \frac{120}{475} = \frac{291}{475}.$$

**b. Probabilità che la prima fosse bianca, sapendo che la seconda è bianca** (Bayes):

$$P(B_1 \mid B_2) = \frac{P(B_1 \cap B_2)}{P(B_2)} = \frac{9/25}{291/475} = \frac{9}{25} \cdot \frac{475}{291} = \frac{171}{291} = \frac{57}{97} \approx 0{,}59.$$

---

## Quesito 8

Calcoliamo il limite:

$$\lim_{x \to 1^+} \frac{\displaystyle\int_x^1 \ln t\,dt}{x - e^{x-1}}.$$

Per $x \to 1^+$ si ha $\displaystyle\int_x^1 \ln t\,dt \to 0$ e $x - e^{x-1} \to 0$: forma indeterminata $\dfrac{0}{0}$.

Applichiamo De L'Hôpital. Osserviamo che $\displaystyle\int_x^1 \ln t\,dt = -\int_1^x \ln t\,dt$, quindi:

$$\frac{d}{dx}\!\left[-\int_1^x \ln t\,dt\right] = -\ln x, \qquad \frac{d}{dx}\!\left[x - e^{x-1}\right] = 1 - e^{x-1}.$$

$$\lim_{x \to 1^+} \frac{-\ln x}{1 - e^{x-1}}.$$

Ancora forma $\dfrac{0}{0}$ per $x \to 1^+$. Applichiamo De L'Hôpital una seconda volta:

$$\lim_{x \to 1^+} \frac{-1/x}{-e^{x-1}} = \lim_{x \to 1^+} \frac{1}{x\, e^{x-1}} = \frac{1}{1 \cdot e^0} = 1.$$
