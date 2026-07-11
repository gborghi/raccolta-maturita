---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2012_5_62
pdf: SimZan_parte1.pdf
source: vision
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Svolgimento'
---
## Problema 1

Sono date la famiglia di funzioni $f(x) = ax^3 + x$ con $a \in \mathbb{R}$, e la funzione $g(x) = x^4 - x^2$.

### Punto a)

Dimostriamo che tutti i grafici di $f$ hanno un unico punto in comune e che tale punto appartiene anche al grafico di $g$. Poniamo $f(x) = 0$:

$$ax^3 + x = 0 \quad \Rightarrow \quad x(ax^2 + 1) = 0.$$

Le soluzioni dipendono da $a$:
- se $a \ge 0$: $ax^2 + 1 > 0$ per ogni $x$, quindi l'unica soluzione è $x = 0$;
- se $a < 0$: si hanno anche le soluzioni $x = \pm\dfrac{1}{\sqrt{-a}}$.

L'unico punto comune a tutti i grafici (per ogni $a \in \mathbb{R}$) è $x = 0$, che dà $f(0) = 0$, cioè l'origine $O = (0, 0)$.

Verifichiamo che $O$ appartiene anche al grafico di $g$: $g(0) = 0^4 - 0^2 = 0$. Confermato.

**Studio di $f(x) = x(ax^2 + 1)$ al variare di $a$.**

- Dominio: $\mathbb{R}$.
- Parità: $f(-x) = -ax^3 - x = -f(x)$, quindi $f$ è dispari per ogni $a$.
- Limiti: $\lim_{x \to \pm\infty} f(x) = \pm\infty$; nessun asintoto.
- Derivata prima: $f'(x) = 3ax^2 + 1$.

  Segno di $f'(x)$:
  - se $a \ge 0$: $f'(x) > 0$ per ogni $x \in \mathbb{R}$, quindi $f$ è strettamente crescente;
  - se $a < 0$: $f'(x) \ge 0$ per $-\dfrac{1}{\sqrt{-3a}} \le x \le \dfrac{1}{\sqrt{-3a}}$, con due zeri (massimo e minimo relativi).

- Derivata seconda: $f''(x) = 6ax$.

  Segno di $f''(x)$:
  - se $a > 0$: $f''(x) \ge 0$ per $x \ge 0$; flesso in $x=0$;
  - se $a = 0$: $f''(x) = 0$ per ogni $x$; la funzione è la retta $y = x$;
  - se $a < 0$: $f''(x) \ge 0$ per $x \le 0$; flesso in $x=0$.

*(grafico — vedi PDF p.66)*

**Studio di $g(x) = x^4 - x^2$.**

- Dominio: $\mathbb{R}$.
- Parità: $g(-x) = x^4 - x^2 = g(x)$, quindi $g$ è pari.
- Limiti: $\lim_{x \to \pm\infty} g(x) = +\infty$.
- Derivata prima: $g'(x) = 4x^3 - 2x = 2x(2x^2 - 1)$.

  Zeri: $x = 0$, $x = \pm\dfrac{1}{\sqrt{2}}$.

  $g$ ha: massimo relativo in $x=0$ con $g(0)=0$; minimi relativi in $x = \pm\dfrac{1}{\sqrt{2}}$ con $g\!\left(\pm\dfrac{1}{\sqrt{2}}\right) = \dfrac{1}{4} - \dfrac{1}{2} = -\dfrac{1}{4}$.

- Derivata seconda: $g''(x) = 12x^2 - 2$; zeri in $x = \pm\dfrac{1}{\sqrt{6}}$ (punti di flesso).

*(grafico — vedi PDF p.67)*

### Punto b)

Dimostriamo che $ax^3 + x = x^4 - x^2$ ammette almeno due soluzioni per ogni $a \in \mathbb{R}$.

Definiamo $h(x) = f(x) - g(x) = ax^3 + x - x^4 + x^2$. Si ha $h(0) = 0$, quindi $x = 0$ è sempre una soluzione.

Osserviamo che:
- $\lim_{x\to+\infty} h(x) = -\infty$ e $\lim_{x\to-\infty} h(x) = +\infty$ (il termine dominante è $-x^4$);
- $h(0) = 0$.

Poiché $h(0) = 0$ e $h(x) \to -\infty$ per $x \to +\infty$, la funzione $h$ deve assumere valori negativi per $x$ grande positivo, quindi passa per lo zero in un altro punto. Analogamente per $x < 0$.

Dall'analisi dei grafici (Figura 3), si vede che per ogni $a$ i grafici di $f$ e $g$ si intersecano in almeno due punti (sempre l'origine e almeno un altro punto).

*(grafico — vedi PDF p.67)*

### Punto c)

Determiniamo il valore di $a$ per cui $f$ e $g$ hanno la stessa retta tangente nel punto di ascissa $x = -1$.

Condizioni:
1. $f(-1) = g(-1)$ (stesso punto sul grafico);
2. $f'(-1) = g'(-1)$ (stessa pendenza).

Calcoliamo:
$$f(-1) = a(-1)^3 + (-1) = -a - 1, \qquad g(-1) = (-1)^4 - (-1)^2 = 1 - 1 = 0.$$
$$f'(-1) = 3a(-1)^2 + 1 = 3a + 1, \qquad g'(-1) = 4(-1)^3 - 2(-1) = -4 + 2 = -2.$$

Dalla condizione 2: $3a + 1 = -2 \Rightarrow a = -1$.

Verifica con la condizione 1: $f(-1) = -(-1) - 1 = 0 = g(-1)$. Confermato.

La retta tangente comune in $x=-1$:
$$y = f'(-1)(x+1) + f(-1) = -2(x+1) + 0 = -2x - 2.$$

*(grafico — vedi PDF p.68)*

### Punto d)

Con $a = -1$, calcoliamo l'area della regione finita delimitata dai grafici di $f(x) = -x^3 + x$ e $g(x) = x^4 - x^2$.

Troviamo i punti di intersezione: $f(x) = g(x)$:
$$-x^3 + x = x^4 - x^2 \quad \Rightarrow \quad x^4 + x^3 - x^2 - x = 0 \quad \Rightarrow \quad x(x^4 + x^3 - x^2 - x)/x = 0.$$

Più precisamente: $x^4 + x^3 - x^2 - x = x(x^3 + x^2 - x - 1)$.

Fattorizziamo $x^3 + x^2 - x - 1 = x^2(x+1) - (x+1) = (x^2-1)(x+1) = (x-1)(x+1)^2$:

$$x(x-1)(x+1)^2 = 0 \quad \Rightarrow \quad x = 0,\; x = 1,\; x = -1.$$

La regione finita è delimitata tra $x = -1$ e $x = 1$. Dall'analisi dei grafici si ha:
- in $[-1, 0]$: $g(x) \ge f(x)$;
- in $[0, 1]$: $f(x) \ge g(x)$.

$$A = \int_{-1}^{0}[g(x) - f(x)]\,dx + \int_{0}^{1}[f(x) - g(x)]\,dx = \int_{-1}^{0}(x^4 + x^3 - x^2 - x)\,dx + \int_{0}^{1}(-x^4 - x^3 + x^2 + x)\,dx.$$

Primitiva di $x^4 + x^3 - x^2 - x$: $F(x) = \dfrac{x^5}{5} + \dfrac{x^4}{4} - \dfrac{x^3}{3} - \dfrac{x^2}{2}$.

$$\int_{-1}^{0}(x^4+x^3-x^2-x)\,dx = F(0) - F(-1) = 0 - \left(-\frac{1}{5}+\frac{1}{4}+\frac{1}{3}-\frac{1}{2}\right).$$

$$F(-1) = -\frac{1}{5}+\frac{1}{4}+\frac{1}{3}-\frac{1}{2} = \frac{-12+15+20-30}{60} = \frac{-7}{60}.$$

Quindi $\displaystyle\int_{-1}^{0} = 0 - \left(-\frac{7}{60}\right) = \frac{7}{60}$.

$$\int_{0}^{1}(-x^4-x^3+x^2+x)\,dx = \left[-\frac{x^5}{5}-\frac{x^4}{4}+\frac{x^3}{3}+\frac{x^2}{2}\right]_{0}^{1} = -\frac{1}{5}-\frac{1}{4}+\frac{1}{3}+\frac{1}{2} = \frac{-12-15+20+30}{60} = \frac{23}{60}.$$

$$A = \frac{7}{60} + \frac{23}{60} = \frac{30}{60} = \frac{1}{2}.$$

*(grafico — vedi PDF p.68)*

### Punto e)

Calcoliamo il volume del solido con base la parte finita di piano nel primo e quarto quadrante delimitata dai grafici (intervallo $[0,1]$), con sezioni rettangolari di altezza $\dfrac{1}{x}$ perpendicolari all'asse $x$.

L'elemento di volume è:

$$dV = \frac{1}{x}\cdot[f(x) - g(x)]\,dx = \frac{1}{x}(-x^4 - x^3 + x^2 + x)\,dx = (-x^3 - x^2 + x + 1)\,dx.$$

*(grafico — vedi PDF p.69)*

$$V = \int_{0}^{1}(-x^3 - x^2 + x + 1)\,dx = \left[-\frac{x^4}{4} - \frac{x^3}{3} + \frac{x^2}{2} + x\right]_{0}^{1} = -\frac{1}{4} - \frac{1}{3} + \frac{1}{2} + 1 = \frac{-3-4+6+12}{12} = \frac{11}{12}.$$

## Problema 2

Nel riferimento cartesiano $xOy$ si consideri la funzione $f(x)$ definita e continua in $]-4; +\infty[$, con la derivata seconda $f''(x)$ avente il grafico riportato nella figura. È noto che $x = -4$ è un asintoto verticale per $f(x)$; la tangente al grafico di $f(x)$ in $x = 0$ è parallela alla bisettrice del I e III quadrante (quindi $f'(0) = 1$); la tangente in $x = -3$ ha equazione $4x - y + 14 = 0$ (pendenza $4$, quindi $f'(-3) = 4$, e $f(-3) = 4(-3) + 14 = 2$).

*(grafico di $f''(x)$ — vedi PDF p.62)*

### Punto a)

Calcoliamo l'area della parte di piano delimitata dal grafico di $f''(x)$ e dall'asse $x$ nell'intervallo $[-3; 0]$.

Per il teorema fondamentale del calcolo integrale:

$$\int_{-3}^{0} f''(x)\,dx = f'(0) - f'(-3) = 1 - 4 = -3.$$

Dal grafico di $f''(x)$ nell'intervallo $[-3; 0]$, la funzione è sempre negativa, quindi l'area è:

$$A = \left|\int_{-3}^{0} f''(x)\,dx\right| = |-3| = 3.$$

### Punto b)

*(grafico probabile di $f'(x)$ — vedi PDF p.71)*

Dalla conoscenza di $f''(x)$: in $[-3;0]$ si ha $f''(x) < 0$, dunque $f'(x)$ è decrescente, da $f'(-3)=4$ a $f'(0)=1$. Per $x \to -4^+$, poiché $x=-4$ è asintoto verticale per $f$, anche $f'(x) \to +\infty$.

### Punto c)

Sapendo che $f''(x) = -\dfrac{4}{(x+4)^2}$, determiniamo $f(x)$.

Integriamo per trovare $f'(x)$:
$$f'(x) = \int -\frac{4}{(x+4)^2}\,dx = \frac{4}{x+4} + c.$$

Condizione $f'(0) = 1$:
$$\frac{4}{4} + c = 1 \quad \Rightarrow \quad 1 + c = 1 \quad \Rightarrow \quad c = 0.$$

Quindi $f'(x) = \dfrac{4}{x+4}$.

Integriamo per trovare $f(x)$:
$$f(x) = \int \frac{4}{x+4}\,dx = 4\ln(x+4) + c.$$

Condizione $f(-3) = 2$:
$$4\ln(-3+4) + c = 2 \quad \Rightarrow \quad 4\ln 1 + c = 2 \quad \Rightarrow \quad c = 2.$$

Pertanto:
$$f(x) = 4\ln(x+4) + 2.$$

**Studio completo di $f(x) = 4\ln(x+4) + 2$:**

- Dominio: $D = ]-4; +\infty[$.
- Segno: $f(x) = 0 \Leftrightarrow 4\ln(x+4) = -2 \Leftrightarrow \ln(x+4) = -\dfrac{1}{2} \Leftrightarrow x = e^{-1/2} - 4$.
  
  $f(x) < 0$ per $-4 < x < e^{-1/2}-4$; $f(x) > 0$ per $x > e^{-1/2}-4$.

- Asintoto verticale: $\lim_{x\to -4^+} f(x) = -\infty$.
- Limiti all'infinito: $\lim_{x\to +\infty} f(x) = +\infty$.
- Derivata prima: $f'(x) = \dfrac{4}{x+4} > 0$ per ogni $x \in D$: $f$ è strettamente crescente.
- Derivata seconda: $f''(x) = -\dfrac{4}{(x+4)^2} < 0$ per ogni $x \in D$: $f$ è concava.

*(grafico — vedi PDF p.72)*

Il grafico $\Gamma$ di $f(x) = 4\ln(x+4) + 2$ si ottiene dal grafico di $y = \ln x$ tramite: traslazione del vettore $(-4; 0)$, dilatazione verticale di fattore $4$, traslazione del vettore $(0; 2)$.

### Punto d)

Calcoliamo l'area della parte di piano compresa tra $\Gamma$ e l'asse $x$ nell'intervallo $[-3; 0]$.

Poiché $e^{-1/2} - 4 \approx -3{,}39 < -3$, nell'intervallo $[-3; 0]$ la funzione è positiva (in quanto $-3 > e^{-1/2}-4$). Quindi:

$$A = \int_{-3}^{0} f(x)\,dx = \int_{-3}^{0} (4\ln(x+4) + 2)\,dx.$$

Calcoliamo $\int 4\ln(x+4)\,dx$ per parti: $u = \ln(x+4)$, $v' = 4$; $u' = \dfrac{1}{x+4}$, $v = 4(x+4)$:

$$\int 4\ln(x+4)\,dx = 4(x+4)\ln(x+4) - \int \frac{4(x+4)}{x+4}\,dx = 4(x+4)\ln(x+4) - 4x + c.$$

Quindi:
$$\int_{-3}^{0}(4\ln(x+4)+2)\,dx = \left[4(x+4)\ln(x+4) - 4x + 2x\right]_{-3}^{0} = \left[4(x+4)\ln(x+4) - 2x\right]_{-3}^{0}.$$

$$= \bigl[4\cdot4\cdot\ln 4 - 0\bigr] - \bigl[4\cdot1\cdot\ln 1 - 2(-3)\bigr] = 16\ln 4 - (0 + 6) = 16\ln 4 - 6.$$

*(grafico — vedi PDF p.73)*

### Punto e)

Calcoliamo il volume del solido ottenuto dalla rotazione completa attorno alla retta $y = 2$ del tratto di $\Gamma$ compreso nell'intervallo $[-3; 0]$.

La distanza tra il punto $(x, f(x))$ e la retta $y=2$ è $|f(x) - 2| = |4\ln(x+4)|$. Poiché in $[-3;0]$ si ha $x+4 \in [1;4]$ quindi $\ln(x+4) \ge 0$, risulta $f(x) - 2 = 4\ln(x+4) \ge 0$.

$$V = \pi \int_{-3}^{0} [f(x) - 2]^2\,dx = \pi \int_{-3}^{0} [4\ln(x+4)]^2\,dx = 16\pi \int_{-3}^{0} [\ln(x+4)]^2\,dx.$$

Con la sostituzione $t = x+4$ (quando $x=-3$, $t=1$; quando $x=0$, $t=4$):

$$\int_1^4 (\ln t)^2\,dt.$$

Integrazione per parti: $u = (\ln t)^2$, $dv = dt$; $du = \dfrac{2\ln t}{t}dt$, $v = t$:

$$\int_1^4 (\ln t)^2\,dt = \left[t(\ln t)^2\right]_1^4 - 2\int_1^4 \ln t\,dt.$$

$\int_1^4 \ln t\,dt = [t\ln t - t]_1^4 = (4\ln 4 - 4) - (0 - 1) = 4\ln 4 - 3$.

$\left[t(\ln t)^2\right]_1^4 = 4(\ln 4)^2 - 0 = 4(\ln 4)^2$.

$$\int_1^4 (\ln t)^2\,dt = 4(\ln 4)^2 - 2(4\ln 4 - 3) = 4(\ln 4)^2 - 8\ln 4 + 6.$$

$$V = 16\pi\bigl[4(\ln 4)^2 - 8\ln 4 + 6\bigr].$$

*(grafico — vedi PDF p.73)*

## Quesito 1

Dati due insiemi $A$ e $B$ con $|A|=6$ e $|B|=5$, si determina il numero di funzioni suriettive da $A$ a $B$.

Usiamo il principio di inclusione-esclusione. Il numero di funzioni suriettive da $n$ elementi a $k$ elementi è:

$$S(n,k) = \sum_{j=0}^{k}(-1)^j\binom{k}{j}(k-j)^n.$$

Con $n=6$, $k=5$:

$$S(6,5) = \binom{5}{0}5^6 - \binom{5}{1}4^6 + \binom{5}{2}3^6 - \binom{5}{3}2^6 + \binom{5}{4}1^6$$

$$= 15625 - 5\cdot 4096 + 10\cdot 729 - 10\cdot 64 + 5\cdot 1$$

$$= 15625 - 20480 + 7290 - 640 + 5 = 1800.$$

Equivalentemente: il numero di funzioni suriettive è $5!\cdot S(6,5)$ dove $S(6,5)$ è il numero di Stirling del secondo tipo. Si ha $S(6,5) = \binom{6}{2} = 15$, quindi $5!\cdot 15 = 120\cdot 15 = 1800$.

Il numero di funzioni suriettive da $A$ a $B$ è $\mathbf{1800}$.

## Quesito 2

Calcoliamo $\displaystyle\lim_{x\to 0}\frac{1-\cos x + \sin x}{1-\cos x - \sin x}$ con almeno due metodi.

**Metodo 1 – Formule di duplicazione.**

Usiamo $1-\cos x = 2\sin^2\dfrac{x}{2}$ e $\sin x = 2\sin\dfrac{x}{2}\cos\dfrac{x}{2}$:

$$\frac{1-\cos x + \sin x}{1-\cos x - \sin x} = \frac{2\sin^2\frac{x}{2} + 2\sin\frac{x}{2}\cos\frac{x}{2}}{2\sin^2\frac{x}{2} - 2\sin\frac{x}{2}\cos\frac{x}{2}} = \frac{2\sin\frac{x}{2}\!\left(\sin\frac{x}{2}+\cos\frac{x}{2}\right)}{2\sin\frac{x}{2}\!\left(\sin\frac{x}{2}-\cos\frac{x}{2}\right)} = \frac{\sin\frac{x}{2}+\cos\frac{x}{2}}{\sin\frac{x}{2}-\cos\frac{x}{2}}.$$

Per $x \to 0$: $\sin\dfrac{x}{2} \to 0$ e $\cos\dfrac{x}{2} \to 1$, quindi:

$$\lim_{x\to 0}\frac{\sin\frac{x}{2}+\cos\frac{x}{2}}{\sin\frac{x}{2}-\cos\frac{x}{2}} = \frac{0+1}{0-1} = -1.$$

**Metodo 2 – Limiti notevoli.**

Dividendo numeratore e denominatore per $x$:

$$\frac{\frac{1-\cos x}{x} + \frac{\sin x}{x}}{\frac{1-\cos x}{x} - \frac{\sin x}{x}}.$$

Per $x\to 0$: $\dfrac{1-\cos x}{x} \to 0$ e $\dfrac{\sin x}{x} \to 1$, quindi il limite è $\dfrac{0+1}{0-1} = -1$.

**Metodo 3 – Teorema di De L'Hôpital.**

La forma è $\dfrac{0}{0}$. Applicando il teorema:

$$\lim_{x\to 0}\frac{(\sin x + \cos x)}{(\sin x - \cos x)} = \frac{0+1}{0-1} = -1.$$

Il limite vale $-1$.

## Quesito 3

La quantità domandata è $q = 500 - 25p$, con $0 \le p \le 15$.

Il ricavo è:
$$r(p) = p\cdot q = p(500 - 25p) = 500p - 25p^2.$$

È una parabola concava verso il basso con vertice in $p_v = \dfrac{500}{2\cdot 25} = 10$.

Poiché $p_v = 10 \le 15$, il massimo del ricavo si ottiene per $p = 10$:
$$r(10) = 500\cdot 10 - 25\cdot 100 = 5000 - 2500 = 2500 \text{ euro}.$$

Dalla $q = 500 - 25p$ si ricava $p = 20 - \dfrac{q}{25}$, quindi il ricavo in funzione di $q$:
$$r(q) = 20q - \frac{q^2}{25}.$$

Per $p=10$: $q = 500 - 25\cdot10 = 250$, confermato.

*(grafico — vedi PDF p.75)*

## Quesito 4

Sia $\gamma: y = kx^2$ con $k>0$. Preso $P = (a, ka^2)$ con $a>0$ su $\gamma$:

- Tangente a $\gamma$ in $P$: $y = 2kax - ka^2$. Interseca l'asse $x$ in $Q = \!\left(\dfrac{a}{2}, 0\right)$.
- Parallela all'asse $x$ per $P$: $y = ka^2$; interseca $\gamma$ in $P' = (-a, ka^2)$.

**Area del segmento parabolico** $PP'$ (per la formula di Archimede è $\dfrac{2}{3}$ del rettangolo circoscritto):

$$A_1 = \int_{-a}^{a}(ka^2 - kx^2)\,dx = k\!\left[a^2x - \frac{x^3}{3}\right]_{-a}^{a} = \frac{4}{3}ka^3.$$

*(grafico — vedi PDF p.76)*

**Area del triangolo curvilineo** $PQ$-$QO$-arco $OP$:

Area sotto la parabola da $0$ a $a$: $\displaystyle\int_0^a kx^2\,dx = \dfrac{ka^3}{3}$.

Area del triangolo $OQP$ con $O=(0,0)$, $Q=\!\left(\dfrac{a}{2},0\right)$, $P=(a,ka^2)$: $\dfrac{1}{2}\cdot\dfrac{a}{2}\cdot ka^2 = \dfrac{ka^3}{4}$.

$$A_2 = \frac{ka^3}{3} - \frac{ka^3}{4} = \frac{ka^3}{12}.$$

**Rapporto:**

$$\frac{A_1}{A_2} = \frac{\frac{4}{3}ka^3}{\frac{ka^3}{12}} = \frac{4}{3}\cdot 12 = 16.$$

Il rapporto è costante, quindi:
$$\lim_{P\to\infty}\frac{A_1}{A_2} = 16.$$

## Quesito 5

Sia $f(x)$ continua e derivabile con $f'(x) < e^x$ per ogni $x$. Dimostrare che $f(1) - f(0) < e$.

Per il teorema fondamentale del calcolo integrale:

$$f(1) - f(0) = \int_0^1 f'(x)\,dx < \int_0^1 e^x\,dx = \left[e^x\right]_0^1 = e - 1 < e.$$

Quindi $f(1) - f(0) < e - 1 < e$. $\square$

## Quesito 6

Dato il cubo in figura, si determina l'ampiezza del diedro convesso con spigolo $BD'$ e facce i piani $A'D'B$ e $C'D'B$.

*(grafico — vedi PDF p.77)*

Poniamo il lato del cubo uguale a $1$ e le coordinate: $B=(1,0,0)$, $A'=(0,0,1)$, $C'=(1,1,1)$, $D'=(0,1,1)$.

Vettori normali ai due piani:

- Piano $A'D'B$: $\overrightarrow{D'A'} = (0,-1,0)$, $\overrightarrow{D'B} = (1,-1,-1)$.
  $$\vec{n_1} = \overrightarrow{D'A'}\times\overrightarrow{D'B} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\0&-1&0\\1&-1&-1\end{vmatrix} = ((-1)(-1)-0\cdot(-1),\;0\cdot1-0\cdot(-1),\;0\cdot(-1)-(-1)\cdot1) = (1,0,1).$$

- Piano $C'D'B$: $\overrightarrow{D'C'} = (1,0,0)$, $\overrightarrow{D'B} = (1,-1,-1)$.
  $$\vec{n_2} = \overrightarrow{D'C'}\times\overrightarrow{D'B} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\1&0&0\\1&-1&-1\end{vmatrix} = (0\cdot(-1)-0\cdot(-1),\;0\cdot1-1\cdot(-1),\;1\cdot(-1)-0\cdot1) = (0,1,-1).$$

Angolo tra i piani:
$$\cos\theta = \frac{|\vec{n_1}\cdot\vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|1\cdot0+0\cdot1+1\cdot(-1)|}{\sqrt{2}\cdot\sqrt{2}} = \frac{1}{2}.$$

Quindi il diedro convesso ha ampiezza $\theta = \dfrac{\pi}{3} = 60°$.

*(calcolo — vedi PDF p.78)*

## Quesito 7

La funzione è definita a tratti:

$$f(x) = \begin{cases} x^2 + p & \text{se } x < 0 \\ \dfrac{x+q}{3} & \text{se } 0 \le x < 2 \\ x + q & \text{se } x \ge 2 \end{cases}$$

Per la continuità in $\mathbb{R}$ imponiamo le condizioni nei punti di raccordo.

**Continuità in $x = 0$:**
$$\lim_{x\to0^-}f(x) = p, \qquad f(0) = \frac{q}{3}.$$
Condizione: $p = \dfrac{q}{3}$, ovvero $q = 3p$.

**Continuità in $x = 2$:**
$$\lim_{x\to2^-}f(x) = \frac{2+q}{3}, \qquad f(2) = 2 + q.$$
Condizione: $\dfrac{2+q}{3} = 2+q \Rightarrow 2+q = 6+3q \Rightarrow -4 = 2q \Rightarrow q = -2$.

Da $q=3p$: $p = -\dfrac{2}{3}$.

Le coppie ordinate per cui $f$ è continua in $\mathbb{R}$ sono: $(p; q) = \left(-\dfrac{2}{3};\,-2\right)$.

*(vedi PDF p.78)*

## Quesito 8

Sia $g(x) = \displaystyle\int_{x}^{2x} f(t)\,dt$, con $f(t)$ continua su $\mathbb{R}$.

Dati: $f(0) = -\dfrac{1}{2}$, $f\!\left(\dfrac{1}{2}\right) = \dfrac{1}{4}$, $f(1) = 1$.

Per il teorema fondamentale del calcolo, derivando rispetto a $x$:
$$g'(x) = 2f(2x) - f(x).$$

**$g(0)$:**
$$g(0) = \int_0^0 f(t)\,dt = 0.$$

**$g'(0)$:**
$$g'(0) = 2f(2\cdot 0) - f(0) = 2f(0) - f(0) = f(0) = -\frac{1}{2}.$$

**$g'\!\left(\dfrac{1}{2}\right)$:**
$$g'\!\left(\frac{1}{2}\right) = 2f\!\left(2\cdot\frac{1}{2}\right) - f\!\left(\frac{1}{2}\right) = 2f(1) - f\!\left(\frac{1}{2}\right) = 2\cdot1 - \frac{1}{4} = \frac{7}{4}.$$

## Quesito 9

È data la funzione:

$$f(x) = \begin{cases} x^3 - 2x & \text{se } x < 1 \\ \ln x & \text{se } x \ge 1 \end{cases}$$

Si valuta la proposizione: «Poiché $\lim_{x\to1^-}f'(x) = \lim_{x\to1^+}f'(x) = 1$, la funzione è derivabile in $x=1$ con derivata uguale a $1$».

Verifichiamo la continuità in $x=1$, condizione necessaria per la derivabilità:
$$\lim_{x\to1^-}f(x) = 1^3 - 2\cdot1 = -1, \qquad f(1) = \ln 1 = 0.$$

Poiché $\lim_{x\to1^-}f(x) = -1 \ne 0 = f(1)$, la funzione è **discontinua** in $x=1$. Una funzione discontinua non può essere derivabile.

Per conferma, il rapporto incrementale da sinistra:
$$\lim_{h\to0^-}\frac{f(1+h)-f(1)}{h} = \lim_{h\to0^-}\frac{(1+h)^3-2(1+h)-0}{h} = \lim_{h\to0^-}\frac{-1+h+3h^2+h^3}{h} = -\infty.$$

La proposizione è pertanto **falsa**: nonostante i limiti delle derivate laterali coincidano entrambi con $1$, la funzione non è derivabile in $x=1$ perché non è nemmeno continua in quel punto.

## Quesito 10

Il signor Pierluigi vuole dimostrare che il rapporto tra il raggio $r$ del cerchio e il lato $l$ del quadrato è $\dfrac{5}{8}$.

*(grafico — vedi PDF p.65 e p.80)*

Dalla figura: il lato $AB$ del quadrato è una corda del cerchio di centro $O$ e raggio $r$. Sia $M$ il punto medio di $AB$ e $M'$ il punto medio di $DC$. L'angolo $\angle DOM' = \alpha$ è l'angolo al centro sotteso dalla semicorda $DM'$.

Per il teorema della corda, posto $DC = l$ (lato del quadrato): $l = 2r\sin\alpha$.

Nel triangolo $DM'M$ rettangolo in $M'$ (poiché $OM \perp AB$ e $OM' \perp DC$), per il secondo teorema sui triangoli rettangoli:

$$\overline{DM'} = \overline{M'M}\cdot\tan\!\left(\angle D\hat{M}M'\right) \quad \Rightarrow \quad \frac{l}{2} = l\cdot\tan\frac{\alpha}{2} \quad \Rightarrow \quad \tan\frac{\alpha}{2} = \frac{1}{2}.$$

Per le formule parametriche:
$$\sin\alpha = \frac{2\tan\frac{\alpha}{2}}{1+\tan^2\frac{\alpha}{2}} = \frac{2\cdot\frac{1}{2}}{1+\frac{1}{4}} = \frac{1}{\frac{5}{4}} = \frac{4}{5}.$$

Sostituendo nella relazione $l = 2r\sin\alpha$:

$$l = 2r\cdot\frac{4}{5} \quad \Rightarrow \quad \frac{r}{l} = \frac{5}{8}.$$

Quindi il rapporto tra il raggio del cerchio e il lato del quadrato è $\dfrac{5}{8}$.
