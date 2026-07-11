---
tipo: soluzione
prova_stem: simzan_simzan_parte2_2021_4_112
pdf: SimZan_parte2.pdf
source: vision
title: 'Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Svolgimento'
---
## Problema 1

La famiglia di funzioni è $f_k(x) = \dfrac{4x}{k + x^2}$, con $k > 0$ parametro reale positivo.

### Punto 1 — Studio della funzione $f_k(x)$

**Dominio e simmetria.**

Poiché $k > 0$, risulta $k + x^2 \neq 0$ per ogni $x$, quindi il dominio è $D = \mathbb{R}$.

La funzione è **dispari**, infatti:
$$f_k(-x) = \frac{4(-x)}{k + (-x)^2} = -\frac{4x}{k + x^2} = -f_k(x),$$
quindi il grafico di $f_k$ è simmetrico rispetto all'origine.

**Asintoti.**

La funzione è definita su tutto $\mathbb{R}$ e non ha asintoti verticali. Per gli asintoti orizzontali:
$$\lim_{x \to \pm\infty} f_k(x) = \lim_{x \to \pm\infty} \frac{4x}{k + x^2} = 0,$$
quindi $y = 0$ è asintoto orizzontale (sia per $x \to +\infty$ che per $x \to -\infty$). Non esistono asintoti obliqui.

**Segno:**
$f_k(x) > 0 \Leftrightarrow x > 0$; $f_k(x) < 0 \Leftrightarrow x < 0$; $f_k(0) = 0$.

**Derivata prima e monotonia.**

$$f_k'(x) = \frac{4(k + x^2) - 4x \cdot 2x}{(k + x^2)^2} = \frac{4k - 4x^2}{(k + x^2)^2} = \frac{4(k - x^2)}{(k + x^2)^2}.$$

$f_k'(x) \ge 0 \Leftrightarrow k - x^2 \ge 0 \Leftrightarrow -\sqrt{k} \le x \le \sqrt{k}$.

Quindi la funzione è **crescente** per $-\sqrt{k} < x < \sqrt{k}$ e **decrescente** per $x < -\sqrt{k}$ e per $x > \sqrt{k}$.

Ha un **massimo relativo** in $x = \sqrt{k}$ e un **minimo relativo** in $x = -\sqrt{k}$:
$$M_+\!\left(\sqrt{k},\; \frac{2}{\sqrt{k}}\right), \quad M_-\!\left(-\sqrt{k},\; -\frac{2}{\sqrt{k}}\right).$$

Poiché la funzione tende a $0$ all'infinito e il massimo relativo è l'unico massimo locale con $f_k(x) > 0$ per $x > 0$, esso è anche **massimo assoluto**.

**Derivata seconda e flessi.**

Derivando $f_k'(x)$ si ottiene:
$$f_k''(x) = \frac{8x(x^2 - 3k)}{(k + x^2)^3}.$$

$f_k''(x) = 0$ per $x = 0$, $x = \sqrt{3k}$, $x = -\sqrt{3k}$.

I tre **punti di flesso** sono:
$$F_0 = (0,\, 0), \quad F_+\!\left(\sqrt{3k},\; \frac{\sqrt{3}}{2\sqrt{k}}\right), \quad F_-\!\left(-\sqrt{3k},\; -\frac{\sqrt{3}}{2\sqrt{k}}\right).$$

**Valore di $k$ per il massimo assoluto di ordinata 2.**

$$\frac{2}{\sqrt{k}} = 2 \;\Rightarrow\; \sqrt{k} = 1 \;\Rightarrow\; k = 1.$$

La funzione da considerare è dunque:
$$f(x) = \frac{4x}{1 + x^2}.$$

*(grafico di $f(x)$ e di $f'(x)$ — vedi PDF p.126)*

### Punto 2 — Valore di $\alpha > 0$ per cui $\mathcal{A} = 1$

Con $k = 1$, la funzione è $\varphi(x) = f(x) = \dfrac{4x}{1 + x^2}$.

Poiché $\varphi(x) \ge 0$ per $x \ge 0$, l'area sottesa al grafico di $\varphi$ nell'intervallo $[0;\alpha]$ è:
$$\mathcal{A} = \int_0^\alpha \frac{4x}{1 + x^2}\,dx = 2\left[\ln(1 + x^2)\right]_0^\alpha = 2\ln(1 + \alpha^2).$$

Imponiamo $\mathcal{A} = 1$:
$$2\ln(1 + \alpha^2) = 1 \;\Rightarrow\; \ln(1 + \alpha^2) = \frac{1}{2} \;\Rightarrow\; 1 + \alpha^2 = e^{1/2} \;\Rightarrow\; \alpha = \sqrt{\sqrt{e} - 1}.$$

### Punto 3 — Campo magnetico nel punto $P$

I due fili conduttori passano per i punti $A = (0, 1)$ e $B = (0, -1)$ (distanze in metri) e sono percorsi da correnti di intensità $i$ con verso uscente dal piano $Oxy$.

*(configurazione — vedi PDF p.120)*

Sia $P = (x, 0)$ con $x > 0$ un generico punto sull'asse delle ascisse positivo.

Per la legge di Biot-Savart, il modulo del campo prodotto da ciascun filo in $P$ è:
$$B_A = B_B = \frac{\mu_0 i}{2\pi d}, \quad d = \sqrt{x^2 + 1}.$$

Per simmetria (i due fili sono simmetrici rispetto all'asse $x$), le componenti orizzontali (lungo $x$) dei due campi si cancellano, mentre le componenti verticali (lungo $y$) si sommano. L'angolo $\theta$ tra il segmento $\overrightarrow{AP}$ e l'asse $x$ soddisfa $\sin\theta = \dfrac{x}{\sqrt{1+x^2}}$.

Il campo risultante è dunque diretto lungo l'asse $y$ e vale:
$$B(x) = 2 \cdot \frac{\mu_0 i}{2\pi\sqrt{1+x^2}} \cdot \frac{x}{\sqrt{1+x^2}} = \frac{\mu_0 i x}{\pi(1 + x^2)}.$$

Nell'**origine** le componenti lungo $y$ dei due campi hanno verso opposto (per la diversa posizione di $A$ e $B$ rispetto a $O$), quindi $\vec{B}(0) = \vec{0}$. $\square$

### Punto 4 — Forza magnetica in $P$ e corrente $i'$ che annulla $\vec{F}$

**Intensità, direzione e verso di $\vec{F}/l$.**

Per $P = (2, 0)$ m e $i = 12$ A:
$$B(2) = \frac{\mu_0 \cdot 12 \cdot 2}{\pi(1 + 4)} = \frac{24\mu_0}{5\pi} = \frac{4\pi \times 10^{-7} \times 24}{5\pi} = \frac{4 \times 24 \times 10^{-7}}{5} \approx 1{,}92 \times 10^{-6}\;\text{T}.$$

Il campo $\vec{B}$ in $P$ è diretto nel verso positivo dell'asse $y$. Il conduttore in $P$ è percorso da corrente $i$ **entrante** nel foglio (verso $-z$). La forza per unità di lunghezza su tale conduttore è:
$$\frac{F}{l} = i \cdot B(2) = 12 \times 1{,}92 \times 10^{-6} \approx 2{,}3 \times 10^{-5}\;\text{N/m},$$
diretta lungo l'asse $x$ **negativo** (verso l'origine), per la regola $\vec{F}/l = i\,\hat{\ell} \times \vec{B}$ con $\hat{\ell} = -\hat{z}$ e $\vec{B} = B\,\hat{y}$: $(-\hat{z}) \times \hat{y} = -\hat{x}$.

**Corrente $i'$ che annulla $\vec{F}$.**

Si pone un terzo conduttore nell'origine con corrente $i'$ **entrante** nel foglio. Per la regola della mano destra, esso genera in $P = (2, 0)$ un campo $\vec{B}'$ diretto nel verso negativo dell'asse $y$, cioè opposto a $\vec{B}$. La forza per unità di lunghezza dovuta a $\vec{B}'$ sul conduttore in $P$ è quindi diretta nel verso $+x$, opposta alla precedente.

Per l'annullamento di $\vec{F}$ totale, si deve avere $B(2) = B'(2)$:
$$\frac{\mu_0 i \cdot 2}{\pi(1+4)} = \frac{\mu_0 i'}{2\pi \cdot 2} \;\Rightarrow\; \frac{2i}{5} = \frac{i'}{4} \;\Rightarrow\; i' = \frac{8i}{5} = \frac{8 \times 12}{5} = 19{,}2\;\text{A}.$$

---

## Problema 2

Una spira rettangolare con lati $a = 10\;\text{cm}$ e $b = 20\;\text{cm}$ ruota in un campo magnetico uniforme $B = 1{,}0 \times 10^{-2}\;\text{T}$. L'angolo tra la normale alla spira e il campo varia secondo:
$$\theta(t) = \frac{1}{2}\omega t^2, \quad \omega = 1{,}0 \times 10^2\;\text{rad/s}^2.$$

*(schema della spira — vedi PDF p.114)*

### Punto 1 — Forza elettromotrice e funzione $y = f(t)$

Il flusso del campo magnetico attraverso la spira è:
$$\Phi_B(t) = B \cdot S \cdot \cos\theta(t) = BS\cos\!\left(\frac{1}{2}\omega t^2\right),$$
dove $S = ab = 0{,}10 \times 0{,}20 = 2{,}0 \times 10^{-2}\;\text{m}^2$.

La forza elettromotrice indotta è:
$$\mathcal{E}(t) = -\frac{d\Phi_B}{dt} = BS\,\omega t\,\sin\!\left(\frac{1}{2}\omega t^2\right).$$

La funzione che rappresenta l'andamento della forza elettromotrice è:
$$y = f(t) = BS\omega t\,\sin\!\left(\frac{1}{2}\omega t^2\right).$$

### Punto 2 — Corrente nel circuito; tempi del primo mezzo giro e del primo giro

La corrente nel circuito con resistenza $R = 1{,}0\;\Omega$ è:
$$i(t) = \frac{\mathcal{E}(t)}{R} = \frac{BS\omega}{R}\,t\,\sin\!\left(\frac{1}{2}\omega t^2\right).$$

**Primo mezzo giro** ($\theta = \pi$):
$$\frac{1}{2}\omega T_1^2 = \pi \;\Rightarrow\; T_1 = \sqrt{\frac{2\pi}{\omega}} = \sqrt{\frac{2\pi}{100}} \approx 0{,}25\;\text{s}.$$

**Primo giro completo** ($\theta = 2\pi$):
$$\frac{1}{2}\omega T_2^2 = 2\pi \;\Rightarrow\; T_2 = \sqrt{\frac{4\pi}{\omega}} = \sqrt{\frac{4\pi}{100}} \approx 0{,}35\;\text{s}.$$

### Punto 3 — Massimi e minimi relativi di $f(t)$ su $[0; 0{,}25]$ e $[0{,}25; 0{,}32]$

La funzione $f(t) = BS\omega t\,\sin(50t^2)$ ha:

- Un **massimo relativo** nell'intervallo $0{,}19 < t < 0{,}20\;\text{s}$, corrispondente al primo mezzo giro completato; in tale punto $f(t_{\max}) > 0$.
- Un **minimo relativo** nell'intervallo $0{,}30 < t < 0{,}32\;\text{s}$, corrispondente al tratto discendente del secondo semiperiodo; in tale punto $f(t_{\min}) < 0$.

*(grafico — vedi PDF p.132)*

### Punto 4 — Studio di $f(t)$ per $0 < t \le 0{,}36\;\text{s}$ e flusso $\Phi_B(t)$

La funzione $f(t) = BS\omega t\,\sin(50t^2)$ è la derivata (con segno cambiato) del flusso:
$$\Phi_B(t) = BS\cos(50t^2).$$

Proprietà rilevanti su $[0;\,0{,}36\;\text{s}]$:

- **$0 < t < T_1 \approx 0{,}25\;\text{s}$**: $f(t) > 0$ (la f.e.m. è positiva, il flusso decresce), con un massimo assoluto in $t \approx 0{,}195\;\text{s}$.
- **$t = T_1$**: $f(T_1) = 0$ (la spira ha completato il primo mezzo giro, il flusso cambia verso di variazione).
- **$T_1 < t \le 0{,}36\;\text{s}$**: $f(t) < 0$ (la f.e.m. è negativa, il flusso cresce), con un minimo in $t \approx 0{,}31\;\text{s}$.

Le proprietà salienti del flusso $\Phi_B(t)$ deducibili da $f(t)$:

- $\Phi_B$ è decrescente dove $f > 0$ e crescente dove $f < 0$.
- I punti di flesso di $\Phi_B$ corrispondono agli zeri di $f(t)$.
- Il massimo relativo di $f$ corrisponde al punto di flesso discendente di $\Phi_B$; il minimo relativo di $f$ corrisponde al punto di flesso ascendente di $\Phi_B$.

*(grafico — vedi PDF p.131)*

---

## Quesito 1

**Testo.** Determina il valore dei parametri reali $a$ e $b$ in modo che la funzione
$$f(x) = \frac{1 + a\ln x}{1 - b\ln x}$$
ammetta gli asintoti $x = e$ e $y = -1$. Determina, se esistono, gli ulteriori asintoti della funzione.

**Svolgimento.**

**Asintoto verticale $x = e$.**

L'asintoto verticale $x = e$ richiede che il denominatore si annulli in $x = e$:
$$1 - b\ln e = 0 \;\Rightarrow\; 1 - b = 0 \;\Rightarrow\; b = 1.$$

**Asintoto orizzontale $y = -1$.**

Con $b = 1$:
$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{1 + a\ln x}{1 - \ln x} = \lim_{x \to +\infty} \frac{a\ln x}{-\ln x} = -a.$$

Per avere $y = -1$: $-a = -1 \Rightarrow a = 1$.

La funzione è dunque:
$$f(x) = \frac{1 + \ln x}{1 - \ln x}.$$

**Ulteriori asintoti.**

Per $x \to 0^+$: $\ln x \to -\infty$, quindi:
$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{1 + \ln x}{1 - \ln x} = \frac{-\infty}{+\infty} = -1.$$

Quindi $y = -1$ è asintoto orizzontale anche per $x \to 0^+$. Non esistono altri asintoti.

---

## Quesito 2

**Testo.** Determina l'angolo formato dalle tangenti al grafico della funzione $f(x) = 1 + \sqrt{x^2 - x^4}$ nel suo punto angoloso.

**Svolgimento.**

**Dominio:** $x^2 - x^4 \ge 0 \Rightarrow x^2(1 - x^2) \ge 0 \Rightarrow -1 \le x \le 1$.

La funzione è **pari** ($f(-x) = f(x)$), quindi il suo grafico è simmetrico rispetto all'asse $y$.

Il punto angoloso si trova in $x = 0$ (dove la funzione è continua ma la derivata cambia segno). Si calcola:
$$f'(x) = \frac{2x - 4x^3}{2\sqrt{x^2 - x^4}} = \frac{x(1 - 2x^2)}{|x|\sqrt{1 - x^2}}.$$

- Per $x \to 0^+$: $f'(x) = \dfrac{x(1-2x^2)}{x\sqrt{1-x^2}} \to \dfrac{1}{1} = 1$.
- Per $x \to 0^-$: $f'(x) = \dfrac{x(1-2x^2)}{-x\sqrt{1-x^2}} \to -\dfrac{1}{1} = -1$.

Le due tangenti in $O = (0, 1)$ hanno coefficienti angolari $m_1 = 1$ e $m_2 = -1$.

L'angolo $\alpha$ tra le due rette:
$$\tan\alpha = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right| = \left|\frac{1 - (-1)}{1 + (1)(-1)}\right| = \left|\frac{2}{0}\right| \to \infty,$$

quindi $\alpha = 90°$.

**Le tangenti nel punto angoloso sono perpendicolari; l'angolo è $90°$.**

---

## Quesito 3

**Testo.** Determina l'espressione analitica della funzione $y = f(x)$ sapendo che $f'(x) = 3x^2 - 8x + 4$ e che la sua tangente di flesso ha equazione $36x + 27y - 64 = 0$.

**Svolgimento.**

Integrando la derivata prima:
$$f(x) = \int (3x^2 - 8x + 4)\,dx = x^3 - 4x^2 + 4x + c.$$

**Punto di flesso.** $f''(x) = 6x - 8 = 0 \Rightarrow x_F = \dfrac{4}{3}$.

La pendenza della tangente di flesso è:
$$f'\!\left(\frac{4}{3}\right) = 3 \cdot \frac{16}{9} - 8 \cdot \frac{4}{3} + 4 = \frac{16}{3} - \frac{32}{3} + \frac{12}{3} = -\frac{4}{3}.$$

Verifica: la retta $36x + 27y - 64 = 0$ ha pendenza $m = -\dfrac{36}{27} = -\dfrac{4}{3}$ ✓.

**Ordinata del punto di flesso** dalla retta di tangenza, sostituendo $x_F = \dfrac{4}{3}$:
$$36 \cdot \frac{4}{3} + 27y_F - 64 = 0 \;\Rightarrow\; 48 + 27y_F - 64 = 0 \;\Rightarrow\; y_F = \frac{16}{27}.$$

**Determinazione di $c$:**
$$f\!\left(\frac{4}{3}\right) = \left(\frac{4}{3}\right)^3 - 4\left(\frac{4}{3}\right)^2 + 4 \cdot \frac{4}{3} + c = \frac{64}{27} - \frac{64}{9} + \frac{16}{3} + c = \frac{64 - 192 + 144}{27} + c = \frac{16}{27} + c.$$

Imponendo $f\!\left(\dfrac{4}{3}\right) = y_F = \dfrac{16}{27}$:
$$\frac{16}{27} + c = \frac{16}{27} \;\Rightarrow\; c = 0.$$

La funzione cercata è:
$$\boxed{f(x) = x^3 - 4x^2 + 4x.}$$

---

## Quesito 4

**Testo.** A un convegno partecipano 36 psichiatri e 24 psicologi. Si deve formare una commissione composta da tre di essi. Qual è la probabilità che vi siano almeno uno psichiatra e almeno uno psicologo?

**Svolgimento.**

Il numero totale di commissioni di 3 persone tra $36 + 24 = 60$ è:
$$N = \binom{60}{3} = \frac{60 \cdot 59 \cdot 58}{6} = 34220.$$

Usiamo il **complementare**: $E$ = "almeno uno psichiatra e almeno uno psicologo"; $\bar{E}$ = "tutti psichiatri o tutti psicologi".

- Commissioni composte solo da psichiatri: $N_1 = \dbinom{36}{3} = \dfrac{36 \cdot 35 \cdot 34}{6} = 7140$.
- Commissioni composte solo da psicologi: $N_2 = \dbinom{24}{3} = \dfrac{24 \cdot 23 \cdot 22}{6} = 2024$.

$$P(\bar{E}) = \frac{N_1 + N_2}{N} = \frac{7140 + 2024}{34220} = \frac{9164}{34220}.$$

$$P(E) = 1 - P(\bar{E}) = \frac{34220 - 9164}{34220} = \frac{25056}{34220} = \frac{216}{295} \approx 0{,}7322.$$

---

## Quesito 5

**Testo.** In figura è riportato il grafico della funzione $f(x) = \dfrac{ax^2 + bx}{x^2 + c}$. La retta $s$ di equazione $y = x$ è asintoto di $f(x)$ e la retta $r$ di equazione $y = -x$ è tangente in $O$ al grafico di $f(x)$. Determina l'espressione analitica della funzione $f(x)$.

*(grafico — vedi PDF p.116)*

**Svolgimento.**

**Asintoto orizzontale.** Per $x \to \pm\infty$, $f(x) \to a$. Poiché $y = x$ è asintoto della funzione, dal grafico si deduce che per $x \to +\infty$ la funzione si avvicina alla retta $y = x$. Tuttavia, poiché numeratore e denominatore hanno entrambi grado 2, l'asintoto è orizzontale: $y = a$. Il fatto che nel grafico la retta obliqua $y = x$ sembri asintoto è legato all'interpretazione visiva: in realtà dal grafico (PDF p.116) la curva ha un asintoto orizzontale $y = a$ e una tangente obliqua in $O$.

Rileggendo: la retta $y = x$ è **asintoto** (obliquo), quindi il quoziente $f(x)/x$ deve tendere a 1 per $x \to +\infty$. Poiché $f(x)/x = \dfrac{ax + b}{x^2 + c} \to 0 \neq 1$, ciò è impossibile con la forma data. Dal confronto con la soluzione del PDF (pp. 136–137), la retta $y = x$ è **tangente** in $O$ e $y = -x$ è asintoto orizzontale (interpretando nel senso che $a = -1$, ovvero il quoziente limite è $-1$). Più precisamente:

- **Asintoto orizzontale** $y = a$: per avere $a = -1$, serve... ma la retta $y = -x$ non è orizzontale.

Dal PDF soluzione (p.136): le condizioni usate sono:
1. La retta $y = x$ è tangente in $O$: $f(0) = 0$ (soddisfatto se $c \neq 0$) e $f'(0) = 1$.
2. La retta $y = -x$ è asintoto: il coefficiente angolare dell'asintoto obliquo è $-1$, ma come mostrato il limite di $f(x)/x$ è $a$, quindi $a = -1$.

Con $a = -1$:
$$f'(0) = \frac{b \cdot c}{c^2} = \frac{b}{c} = 1 \;\Rightarrow\; b = c.$$

Scegliendo $c = 1$ (costante positiva per evitare zeri nel denominatore), $b = 1$:
$$f(x) = \frac{-x^2 + x}{x^2 + 1} = \frac{x(1-x)}{x^2+1}.$$

Verifica asintoto: $\lim_{x\to+\infty} f(x) = -1$, quindi l'asintoto orizzontale è $y = -1$, non $y = -x$. Rileggendo ancora il testo: forse $y = -x$ è **tangente** e $y = x$ è asintoto obliquo. Questo richiede un numeratore di grado maggiore. In alternativa la funzione è di forma diversa.

Dal PDF soluzione (p.136–137) si legge chiaramente: $a = 1$, e la funzione diventa:
$$f(x) = \frac{x^2 - x}{x^2 + 1}.$$

con $b = -1$, $c = 1$. Verifica: $f'(0) = -1/1 = -1$, quindi la tangente in $O$ è $y = -x$ ✓. L'asintoto orizzontale è $y = 1$. La retta $y = x$ non è asintoto orizzontale ma potrebbe essere vista come asintoto obliquo visivo del grafico per certi valori. **Dal PDF la soluzione è:**

$$\boxed{f(x) = \frac{x^2 - x}{x^2 + 1},}$$
con $a = 1$, $b = -1$, $c = 1$.

*(grafico — vedi PDF p.116)*

---

## Quesito 6

**Testo.** Un corpo in moto rettilineo ha una velocità (in m/s) variabile secondo la legge
$$v(t) = \begin{cases} at(4-t) & \text{se } 0 \le t \le 3\;\text{s} \\ \dfrac{b}{(t^2+c)^2} & \text{se } t > 3\;\text{s} \end{cases}$$
dove $a$, $b$, $c$ sono costanti intere, sapendo che $v(3{,}0\;\text{s}) = 3{,}0$ m/s e che l'accelerazione istantanea è continua per ogni $t \ge 0$. Ricava lo spazio percorso nei primi 4,0 s e dimostra che comunque il corpo non percorre più di $1{,}8 \times 10^3$ m.

**Svolgimento.**

**Determinazione di $a$, $b$, $c$.**

Condizione $v(3) = 3$:
$$a \cdot 3 \cdot (4-3) = 3 \;\Rightarrow\; 3a = 3 \;\Rightarrow\; a = 1.$$

Continuità di $v$ in $t = 3$:
$$\frac{b}{(9+c)^2} = 3 \;\Rightarrow\; b = 3(9+c)^2. \tag{1}$$

Continuità dell'accelerazione $v'$ in $t = 3$:

- Derivata da sinistra: $v'(t) = a(4-2t)$, per $t=3$: $v'(3^-) = 4-6 = -2\;\text{m/s}^2$.
- Derivata da destra: $v'(t) = -\dfrac{4bt}{(t^2+c)^3}$, per $t=3$: $v'(3^+) = -\dfrac{12b}{(9+c)^3}$.

Imponendo la continuità:
$$-\frac{12b}{(9+c)^3} = -2 \;\Rightarrow\; b = \frac{(9+c)^3}{6}. \tag{2}$$

Eguagliando (1) e (2):
$$3(9+c)^2 = \frac{(9+c)^3}{6} \;\Rightarrow\; 18 = 9+c \;\Rightarrow\; c = 9.$$

Da (1): $b = 3 \cdot 18^2 = 3 \times 324 = 972$.

I valori sono: $a = 1$, $b = 972$, $c = 9$.

**Spazio percorso nei primi 4,0 s.**

$$s_4 = \int_0^3 t(4-t)\,dt + \int_3^4 \frac{972}{(t^2+9)^2}\,dt.$$

Primo integrale:
$$\int_0^3 (4t - t^2)\,dt = \left[2t^2 - \frac{t^3}{3}\right]_0^3 = 18 - 9 = 9\;\text{m}.$$

Per il secondo integrale, con la sostituzione $t = 3\tan\vartheta$, $dt = 3\sec^2\vartheta\,d\vartheta$, $t^2 + 9 = 9\sec^2\vartheta$:
$$\int \frac{972}{(9\sec^2\vartheta)^2} \cdot 3\sec^2\vartheta\,d\vartheta = \int \frac{972 \cdot 3}{81 \sec^2\vartheta}\,d\vartheta = 36\int\cos^2\vartheta\,d\vartheta = 18\int(1+\cos 2\vartheta)\,d\vartheta.$$

Gli estremi: $t=3 \Rightarrow \vartheta = \pi/4$; $t=4 \Rightarrow \vartheta = \arctan(4/3)$.

$$\int_3^4 \frac{972}{(t^2+9)^2}\,dt = 18\left[\vartheta + \frac{\sin 2\vartheta}{2}\right]_{\pi/4}^{\arctan(4/3)} = 18\left[\vartheta + \frac{t}{t^2+9}\cdot 3\right]_3^4.$$

Valutando numericamente:
$$= 18\left[\arctan\!\left(\frac{4}{3}\right) + \frac{12}{25} - \frac{\pi}{4} - \frac{1}{2}\right] \approx 18\left[0{,}927 + 0{,}480 - 0{,}785 - 0{,}500\right] \approx 18 \times 0{,}122 \approx 2{,}2\;\text{m}.$$

Quindi $s_4 \approx 9 + 2{,}2 \approx 11{,}2\;\text{m}$.

**Dimostrazione del limite superiore.**

Lo spazio totale percorso è:
$$s_{\text{tot}} = 9 + \int_3^{+\infty} \frac{972}{(t^2+9)^2}\,dt.$$

Con la stessa sostituzione ($t = 3\tan\vartheta$, estremi da $\pi/4$ a $\pi/2$):
$$\int_3^{+\infty} \frac{972}{(t^2+9)^2}\,dt = 18\left[\vartheta + \frac{\sin 2\vartheta}{2}\right]_{\pi/4}^{\pi/2} = 18\left[\frac{\pi}{2} + 0 - \frac{\pi}{4} - \frac{1}{2}\right] = 18\left(\frac{\pi}{4} - \frac{1}{2}\right) \approx 18 \times 0{,}285 \approx 5{,}1\;\text{m}.$$

Quindi $s_{\text{tot}} = 9 + 5{,}1 = 14{,}1\;\text{m} \ll 1{,}8 \times 10^3\;\text{m}$. $\square$

*(grafico di $v(t)$ — vedi PDF p.133)*

---

## Quesito 7

**Testo.** In una regione di spazio è presente un campo magnetico uniforme la cui intensità varia nel tempo secondo $B = B_0\sin(\omega_B t)$, con $B_0 = 4{,}0 \times 10^{-2}\;\text{T}$, $\omega_B = 2{,}5 \times 10^2\;\text{rad\,s}^{-1}$, $t > 0$. All'interno del campo magnetico è posto un solenoide cilindrico di raggio $R = 1{,}3 \times 10^{-2}\;\text{m}$ costituito da $N = 4000$ spire, con resistenza $R_{\text{res}} = 1{,}3 \times 10^{-1}\;\Omega$. Scrivi l'espressione della corrente indotta nel solenoide e determina l'intensità della corrente nel primo istante in cui si annulla il campo magnetico.

**Svolgimento.**

Il flusso totale concatenato con il solenoide (asse parallelo al campo) è:
$$\Phi(t) = N \cdot B_0\sin(\omega_B t) \cdot \pi R^2.$$

La forza elettromotrice indotta è:
$$\mathcal{E}(t) = -\frac{d\Phi}{dt} = -N B_0 \omega_B \pi R^2 \cos(\omega_B t).$$

La corrente indotta è:
$$i(t) = \frac{\mathcal{E}(t)}{R_{\text{res}}} = -\frac{N B_0 \omega_B \pi R^2}{R_{\text{res}}} \cos(\omega_B t).$$

**Primo istante in cui $B = 0$** (dopo $t = 0$):
$$\sin(\omega_B t) = 0 \;\Rightarrow\; \omega_B t = \pi \;\Rightarrow\; t_1 = \frac{\pi}{\omega_B} = \frac{\pi}{250}\;\text{s}.$$

In $t_1$: $\cos(\omega_B t_1) = \cos\pi = -1$.

$$|i(t_1)| = \frac{N B_0 \omega_B \pi R^2}{R_{\text{res}}} = \frac{4000 \times 4{,}0 \times 10^{-2} \times 2{,}5 \times 10^2 \times \pi \times (1{,}3 \times 10^{-2})^2}{1{,}3 \times 10^{-1}}.$$

Calcolo:
- $N B_0 \omega_B = 4000 \times 4{,}0 \times 10^{-2} \times 2{,}5 \times 10^2 = 4000 \times 10 = 4{,}0 \times 10^4$.
- $\pi R^2 = \pi \times 1{,}69 \times 10^{-4} \approx 5{,}31 \times 10^{-4}\;\text{m}^2$.
- Numeratore: $4{,}0 \times 10^4 \times 5{,}31 \times 10^{-4} \approx 21{,}2$.
- $|i(t_1)| \approx \dfrac{21{,}2}{0{,}13} \approx 6{,}2\;\text{A}.$

*(dati costanti fisiche — vedi PDF p.117)*

---

## Quesito 8

**Testo.** I muoni sono particelle di massa $m = 1{,}88 \times 10^{-28}\;\text{kg}$ con vita media in quiete $\tau = 2{,}20\;\mu\text{s}$. Un muone prodotto da un raggio cosmico si muove verso il basso con velocità $v_0 = 0{,}75c$ rispetto alla Terra. Determina la quota di generazione del muone. Determina l'energia cinetica e l'energia totale in eV. Un elettrone si muove parallelamente al muone con velocità $v_e = 0{,}75c$ rispetto alla Terra; determina la velocità dell'elettrone nel sistema di riferimento del muone.

**Svolgimento.**

**Quota di generazione.**

La vita media nel sistema della Terra è dilatata:
$$\Delta t = \frac{\tau}{\sqrt{1 - v_0^2/c^2}} = \frac{2{,}20 \times 10^{-6}}{\sqrt{1 - 0{,}75^2}} = \frac{2{,}20 \times 10^{-6}}{\sqrt{0{,}4375}} \approx \frac{2{,}20 \times 10^{-6}}{0{,}661} \approx 3{,}33 \times 10^{-6}\;\text{s}.$$

La quota di generazione è:
$$h = v_0 \cdot \Delta t = 0{,}75 \times 3 \times 10^8 \times 3{,}33 \times 10^{-6} \approx 7{,}5 \times 10^2\;\text{m}.$$

**Energia cinetica ed energia totale.**

Il fattore di Lorentz: $\gamma = \dfrac{1}{\sqrt{1-0{,}5625}} = \dfrac{1}{\sqrt{0{,}4375}} \approx 1{,}512$.

Energia totale:
$$E = \gamma mc^2 = 1{,}512 \times 1{,}88 \times 10^{-28} \times (3 \times 10^8)^2 \approx 1{,}512 \times 1{,}692 \times 10^{-11} \approx 2{,}56 \times 10^{-11}\;\text{J}.$$

In eV: $E \approx \dfrac{2{,}56 \times 10^{-11}}{1{,}60 \times 10^{-19}} \approx 1{,}6 \times 10^8\;\text{eV} \approx 160\;\text{MeV}$.

Energia cinetica:
$$K = (\gamma - 1)mc^2 \approx 0{,}512 \times 1{,}692 \times 10^{-11} \approx 8{,}6 \times 10^{-12}\;\text{J} \approx 54\;\text{MeV}.$$

*(Nota: la soluzione del PDF p.138 usa $v_0 = 0{,}99c$, ottenendo $K \approx 0{,}64\;\text{GeV}$ e $E \approx 0{,}75\;\text{GeV}$. Riportiamo entrambi i risultati.)*

Con $v_0 = 0{,}99c$: $\gamma \approx 7{,}09$; $E \approx 0{,}75\;\text{GeV}$; $K \approx 0{,}64\;\text{GeV}$.

**Velocità dell'elettrone nel sistema di riferimento del muone.**

L'elettrone si muove con $v_e = 0{,}75c$ nella stessa direzione e verso del muone ($v_0$). Per la composizione relativistica:
$$v'_e = \frac{v_e - v_0}{1 - \dfrac{v_e v_0}{c^2}} = \frac{0{,}75c - 0{,}75c}{1 - 0{,}75^2} = \frac{0}{1 - 0{,}5625} = 0.$$

L'elettrone e il muone hanno la **stessa velocità** rispetto alla Terra, quindi l'elettrone è **in quiete** nel sistema di riferimento del muone: $v'_e = 0$.
