---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2014_12_127
pdf: SimZan_parte1.pdf
source: vision
page_start: '127'
page_end: '134'
anno: 2014/15
tipo_prova: Simulazione della Prova di Matematica – Esame di Stato (Liceo Scientifico)
title: 'Simulazione Zanichelli 2014 Problemi Tradizionali #12 — Svolgimento'
---
**ANNO SCOLASTICO 2014/15 — PROBLEMI TRADIZIONALI**
**SIMULAZIONE DELLA PROVA DI MATEMATICA DELL'ESAME DI STATO PER IL LICEO SCIENTIFICO**

---

## Problema 1

Si considera la famiglia di funzioni

$$f_a(x) = \frac{ax}{1 + b^2 x^2}$$

e si verifica che soddisfano le tre condizioni richieste per ogni $a, b \in \mathbf{R}$.

**a)**

- **Limite per $x \to \infty$:**

$$\lim_{x \to \infty} f_a(x) = \lim_{x \to \infty} \frac{ax}{1 + b^2 x^2} = \lim_{x \to \infty} \frac{a}{\frac{1}{x} + b^2 x} = 0.$$

- **$f_a(x)$ è una funzione dispari:**

$$f_a(-x) = \frac{a(-x)}{1 + b^2(-x)^2} = \frac{-ax}{1 + b^2 x^2} = -f_a(x),$$

quindi $f_a(x)$ è una funzione dispari.

- **Studio del segno della derivata prima:**

Calcoliamo $f_a'(x)$ e studiamo il suo segno, ricordando che $a$ e $b$ sono positivi:

$$f_a'(x) = \frac{a(1 + b^2 x^2) - ax \cdot 2b^2 x}{(1 + b^2 x^2)^2} = \frac{a(1 - b^2 x^2)}{(1 + b^2 x^2)^2}.$$

*(grafico — vedi PDF p.127)*

Dallo schema dei segni deduciamo che $f_a(x)$ ammette sempre, qualunque siano i valori positivi di $a$ e $b$, uno solo massimo relativo e uno solo minimo relativo.

Le funzioni del tipo $f_a(x)$ soddisfano quindi le condizioni, con $a, b > 0$.

Affinché il coefficiente angolare della retta tangente al grafico di $f_a(x)$ nell'origine sia 2 deve essere:

$$f_a'(0) = 2 \quad \Rightarrow \quad a = 2,$$

per cui i valori richiesti sono $a = 2$ e $b = \dfrac{1}{2}$.

**b)** La funzione $f_2(x)$ corrispondente ai valori individuati è:

$$f_2(x) = \frac{2x}{\dfrac{1}{4} + x^2} = \frac{8x}{1 + 4x^2}.$$

La tangente al grafico nel punto $f_2(0) = 0$ ha equazione $y = 2x$.

Il massimo della funzione si trova nel punto $M\!\left(\dfrac{1}{2},\, 2\right)$, dove la retta tangente ha equazione $y = 2$.

Le due tangenti si incontrano nel punto $x = 2$.

La regione finita dal piano di cui dobbiamo calcolare l'area è rappresentata in figura.

*(grafico — vedi PDF p.128)*

Calcoliamo l'area $S$ come differenza tra l'area del trapezio rettangolo $OHMP$ (dove $H$ è la proiezione di $M$ sull'asse $x$) e l'area sottesa al grafico di $f_2(x)$ nell'intervallo $[0;\,2]$:

$$S = (2+1)\cdot 2 \cdot \frac{1}{2} - \int_0^2 f_2(x)\,dx = 3 - \int_0^2 \frac{8x}{1+4x^2}\,dx.$$

Poiché

$$\int \frac{8x}{1+4x^2}\,dx = \ln(1+4x^2) + C,$$

si ha:

$$S = 3 - \Big[\ln(1+4x^2)\Big]_0^2 = 3 - \ln(17) + \ln(1) = 3 - \ln 17.$$

Tuttavia, leggendo dal PDF il calcolo esplicito svolto:

$$S = 3 - \Big[\ln(4+x^2)\Big]_0^2 \cdot \frac{4}{4} = 3 - 4(\ln 8 - \ln 4) = 3 - 4\ln 2 \approx 0{,}2274.$$

**c)** Con $v(t) = f_2(t) = \dfrac{8t}{4 + t^2}$, la velocità istantanea del punto materiale è $v(t)$; l'accelerazione $a(t)$ è la derivata della velocità:

$$a(t) = \frac{8(4 - t^2)}{(4 + t^2)^2}.$$

$a(t) > 0 \;\Leftrightarrow\; 4 - t^2 > 0 \;\Leftrightarrow\; t < 2$;

$a(t) = 0 \;\Leftrightarrow\; t = 2$;

$a(t) < 0 \;\Leftrightarrow\; t > 2$.

Nell'intervallo di tempo $[0, T]$, il punto materiale percorre una distanza:

$$s(T) = \int_0^T v(t)\,dt = \int_0^T \frac{8t}{4 + t^2}\,dt = 4\ln\!\left(\frac{4 + T^2}{4}\right) = 4\ln\!\left(1 + \frac{T^2}{4}\right).$$

Poiché

$$\lim_{T \to +\infty} 4\ln\!\left(1 + \frac{T^2}{4}\right) = +\infty,$$

concludiamo che la distanza percorsa dal punto tende a infinito, nonostante la velocità tenda a zero col passare del tempo.

---

## Problema 2

**a)** Tre segmenti $AB$, $CD$ ed $EF$ appartengono alle rette $r_{AB}$, $r_{CD}$, $r_{EF}$ di equazioni rispettivamente:

$$r_{AB}: x = -4, \quad r_{CD}: y = -2x, \quad r_{EF}: y = -12.$$

L'arco di parabola $BC$ appartiene al grafico di una funzione del tipo $y = ax^2 + bx + c$; ha vertice in $(-2;\, 3)$ e passa per il punto $(-3;\, 2)$, quindi:

$$\begin{cases} -\dfrac{b}{2a} = -2 \\ a(-3)^2 + b(-3) + c = 2 \end{cases}$$

Risolvendo il sistema:

$$\begin{cases} a = -1 \\ b = -4 \\ c = -1 \end{cases}$$

La parabola ha dunque equazione $y = -x^2 - 4x - 1$.

Infine, la circonferenza di centro $Q(3;\, 0)$ e raggio $\sqrt{5}$ fornisce, per l'arco $DE$, la parte della semicirconferenza di equazione:

$$y = -1 - \sqrt{-x^2 + 6x - 4}.$$

La funzione $f(x)$ definita sull'intervallo $[-4;\, 6]$ ha la seguente espressione:

$$f(x) = \begin{cases} 2 & \text{se } -4 \le x \le -3 \\ -x^2 - 4x - 1 & \text{se } -3 < x \le -1 \\ -2x & \text{se } -1 < x \le 1 \\ -1 - \sqrt{-x^2 + 6x - 4} & \text{se } 1 < x < 5 \\ -12 & \text{se } 5 \le x \le 6 \end{cases}$$

**b)** Mostriamo che la funzione è derivabile anche nei punti estremi degli intervalli. Poiché $f'(x)$ è continua in tali punti, è sufficiente verificare che il limite da sinistra e da destra della derivata prima, in ciascuno di questi punti, coincidano:

$$\lim_{x \to -3^-} f'(x) = \lim_{x \to -3^-} 2 = 2, \qquad \lim_{x \to -3^+} f'(x) = \lim_{x \to -3^+} (-2x-4) = 2;$$

$$\lim_{x \to -1^-} f'(x) = \lim_{x \to -1^-} (-2x-4) = -2, \qquad \lim_{x \to -1^+} f'(x) = \lim_{x \to -1^+} (-2) = -2;$$

$$\lim_{x \to 1^-} f'(x) = \lim_{x \to 1^-} (-2) = -2, \qquad \lim_{x \to 1^+} f'(x) = \lim_{x \to 1^+} \frac{x-3}{\sqrt{-x^2+6x-4}} = -2;$$

$$\lim_{x \to 5^-} f'(x) = \lim_{x \to 5^-} \frac{x-3}{\sqrt{-x^2+6x-4}} = -2, \qquad \lim_{x \to 5^+} f'(x) = \lim_{x \to 5^+} 0 = 0.$$

Poiché i limiti da sinistra e da destra coincidono nei punti $-3$, $-1$, $1$, ma non nel punto $5$, la funzione $f(x)$ è derivabile in $-3$, $-1$, $1$, ma non in $5$.

La funzione $f(x)$ per $x \in [-4;\, 6]$ ammette derivata destra $f'_+(-4) = 2$ e derivata sinistra $f'_-(6) = 0$.

La derivata $f'(x)$ ha per $[-4;\, 6]$ la seguente espressione:

$$f'(x) = \begin{cases} 2 & \text{se } -4 \le x \le -3 \\ -2x - 4 & \text{se } -3 < x \le -1 \\ -2 & \text{se } -1 < x \le 1 \\ \dfrac{x-3}{\sqrt{-x^2+6x-4}} & \text{se } 1 < x < 5 \\ 0 & \text{se } 5 \le x \le 6 \end{cases}$$

**c)** Consideriamo un generico punto $P(x;\, -x^2 - 4x - 1)$ sull'arco $BC$, quindi con $-3 \le x \le -1$.

*(grafico — vedi PDF p.130)*

Possiamo calcolare l'area $S(x)$ del quadrilatero $APCO$ come somma delle aree dei triangoli rettangoli $APH$ e $COK$ (dove $H$ e $K$ sono le proiezioni sull'asse $x$ di $P$ e $C$ rispettivamente) e del trapezio rettangolo $HPCK$:

$$S(x) = \frac{\overline{AH} \cdot \overline{PH}}{2} + \frac{(\overline{PH} + \overline{CK}) \cdot \overline{HK}}{2} + \frac{\overline{CK} \cdot \overline{KO}}{2}.$$

Sostituendo i valori ($A = (-4, 0)$, $C = (-1, 0)$, $O = (0, 0)$, $P = (x, -x^2-4x-1)$):

$$S(x) = \frac{(x+4)(-x^2-4x-1)}{2} + \frac{(-x^2-4x-1+(-x^2-4x-1))(-x-1+(-x))}{2} + \ldots$$

Con i calcoli espliciti (come mostrato nel PDF):

$$S(x) = \frac{(x+4)(-x^2-4x-1) + (-x^2-4x-1+2)(-x-1) + (-1)(1)}{2} = \frac{-3x^2 - 14x - ...}{2}.$$

Valutiamo quando $S(x)$ assume valore massimo:

$$S'(x) = -3x - 7 = 0 \quad \Rightarrow \quad x = -\frac{7}{3}.$$

$S'(x) > 0$ per $x < -\dfrac{7}{3}$;

$S'(x) < 0$ per $x > -\dfrac{7}{3}$.

La funzione $S(x)$ è crescente per $x < -\dfrac{7}{3}$ e decrescente per $x > -\dfrac{7}{3}$, quindi assume valore massimo per $x = -\dfrac{7}{3}$; in questo caso l'area del quadrilatero $APCO$ vale:

$$S_{\max} = S\!\left(-\frac{7}{3}\right) = \frac{20}{3}.$$

**d)** Calcoliamo i due valori esatti richiesti per la funzione integrale $F(x) = \displaystyle\int_{-4}^{x} f(t)\,dt$:

$$F(0) = \int_{-4}^{0} f(t)\,dt = \int_{-4}^{-3} 2\,dt + \int_{-3}^{-1}(-t^2-4t-1)\,dt + \int_{-1}^{0}(-2t)\,dt$$

$$= \Big[2t\Big]_{-4}^{-3} + \left[-\frac{t^3}{3} - 2t^2 - t\right]_{-3}^{-1} + \Big[-t^2\Big]_{-1}^{0}$$

$$= 2 + \frac{16}{3} + 1 = \frac{22}{3}.$$

$$F(1) = F(0) + \int_0^1 (-2t)\,dt = \frac{22}{3} + \Big[-t^2\Big]_0^1 = \frac{22}{3} - 1 = \frac{19}{3}.$$

*(grafico — vedi PDF p.131)*

Valutiamo adesso in modo approssimato, con il metodo dei trapezi, il valore $F(0)$, cioè l'area sottesa al grafico di $f(x)$ nell'intervallo $[-4;\, 0]$.

Suddividiamo l'intervallo $[-4;\, 0]$ in 8 parti uguali, ciascuna di ampiezza 0,5, e calcoliamo i corrispondenti valori di $f(x)$, compilando la seguente tabella:

| $x_i$    | $-4$ | $-3{,}5$ | $-3$ | $-2{,}5$ | $-2$ | $-1{,}5$ | $-1$ | $-0{,}5$ | $0$ |
|-----------|------|-----------|------|-----------|------|-----------|------|-----------|-----|
| $f(x_i)$ | $2$  | $-0{,}25$ | $-1$ | $2$       | $3$  | $\frac{11}{4}$ | $2$ | $1$ | $0$ |

Applichiamo la formula dei trapezi:

$$S \approx \frac{b-a}{n}\left[\frac{f(x_0)}{2} + f(x_1) + f(x_2) + \cdots + f(x_7) + \frac{f(x_8)}{2}\right]$$

$$= \frac{1}{2}\left[\frac{2}{2} + 0 + 1 + 2 + \frac{11}{4} + 2 + 1 + \frac{0}{2}\right] = \frac{1}{2}\cdot\frac{29}{4} = \frac{29}{8}.$$

L'errore relativo percentuale si computa confrontando con $F(0) = \dfrac{22}{3}$:

$$\varepsilon_r = \frac{\left|F(0) - S\right|}{|F(0)|} = \frac{\left|\dfrac{22}{3} - \dfrac{29}{8}\right|}{\dfrac{22}{3}} \approx 1\% \approx 114\%.$$

*(grafico — vedi PDF p.132)*

**e)** Calcoliamo i valori $F(2)$ e $F(3)$ senza ricorrere al calcolo integrale, sfruttando la geometria. Detti $D$, $Q$, $N$ i punti notevoli sull'arco circolare, con $T$ e $S$ proiezioni di $P$ sull'asse $x$ e $\alpha$ la misura in radianti dell'angolo $\widehat{DQN}$, abbiamo:

$$F(3) = F(1) - Area_{WPQS} - Area_{PQN} = \frac{19}{3} - \frac{(1+3)\cdot 1}{2} - \frac{\overline{QD}^2}{2}\cdot\alpha = \frac{19}{3} - 2 - \frac{5}{2}\alpha.$$

*(grafico — vedi PDF p.132)*

Ricaviamo innanzitutto il valore approssimato di $\alpha$:

$$\tan\alpha = \frac{\overline{DR}}{\overline{QR}} = \frac{1}{2} \quad \Rightarrow \quad \alpha = \arctan\frac{1}{2} \approx 1{,}107.$$

Quindi:

$$F(3) = \frac{19}{3} - 2 - \frac{5}{2}\arctan\frac{1}{2} \approx \frac{19}{3} - 2 - \frac{5}{2}\cdot 1{,}107 \approx 0{,}566.$$

Analogamente, detta $W$ la proiezione di $P$ sull'asse $x$ e $\beta$ la misura in radianti dell'angolo $\widehat{PQN}$, abbiamo:

$$F(2) = F(3) + Area_{WPQS} + Area_{PQN} = F(3) + \frac{(1+3)\cdot 1}{2} + \frac{\overline{QP}^2}{2}\cdot\beta = F(3) + 2 + \frac{5}{2}\beta.$$

Essendo:

$$\tan\beta = \frac{\overline{PU}}{\overline{QU}} = \frac{1}{2} \quad \Rightarrow \quad \beta = \arctan\frac{1}{2} \approx 0{,}464,$$

abbiamo:

$$F(2) = F(3) + 2 + \frac{5}{2}\arctan\frac{1}{2} \approx 3{,}726.$$

Per simmetria, l'area sottesa al grafico nell'intervallo $[3;\,4]$ è uguale a quella dell'intervallo $[2;\,3]$, quindi:

$$F(4) = F(3) + \bigl[F(3) - F(2)\bigr] = 2F(3) - F(2) \approx -2{,}594.$$

Riassumendo:

$$F(1) = \frac{19}{3} \approx 4{,}333, \quad F(2) \approx 3{,}726, \quad F(3) \approx 0{,}566, \quad F(4) \approx -2{,}594,$$

da cui, per il teorema dell'esistenza degli zeri, deduciamo che $F(x_0) = 0$ per un valore $x_0$ compreso fra 3 e 4.

Infine, ricordando che la pala della turbina è alta 8 cm, otteniamo il volume $V$ richiesto mediante il seguente calcolo integrale:

$$V = 8\int_{-4}^{6} |f(x)|\,dt = 8\int_{-4}^{0} f(x)\,dx - 8\int_{0}^{6} f(x)\,dx = 8\int_{-4}^{0} f(x)\,dx - 8\cdot 2\int_{0}^{3} f(x)\,dx$$

$$= 8F(0) - 16\cdot\bigl[F(3) - F(0)\bigr] = 24F(0) - 16F(3) \approx 24\cdot\frac{22}{3} - 16\cdot 0{,}566 = 166{,}94.$$

Il volume complessivamente racchiuso tra il piano $xz$ e le due ali della turbina è di circa $167\ \text{cm}^3$.
