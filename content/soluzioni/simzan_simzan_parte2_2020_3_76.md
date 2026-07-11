---
tipo: soluzione
prova_stem: simzan_simzan_parte2_2020_3_76
pdf: SimZan_parte2.pdf
source: vision
title: 'Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Svolgimento'
---

## Problema 1

A cura di Massimo Bergamini, Graziella Barozzi e Lorenzo Meneghini.

Si considera la famiglia di funzioni reali di variabile reale

$$f_k(x) = \frac{1}{x^2 + k}$$

per ogni $k \in \mathbb{R}^+$.

### Punto 1 — Flessi sulla curva $y = \frac{1}{4x^2}$ e tangenza alla circonferenza $\alpha_k$

**Flessi di $f_k$.**

Per ogni $k \in \mathbb{R}^+$, la funzione $f_k$ è continua e derivabile infinite volte nel suo dominio $\mathbb{R}$, in quanto il denominatore non si annulla mai. Inoltre, la funzione è pari, poiché:

$$f_k(-x) = \frac{1}{(-x)^2 + k} = \frac{1}{x^2 + k} = f_k(x).$$

Al variare di $k \in \mathbb{R}^+$ calcoliamo la derivata prima e la derivata seconda:

$$f_k'(x) = -(x^2+k)^{-2} \cdot 2x = -\frac{2x}{(x^2+k)^2},$$

$$f_k''(x) = \frac{-2(x^2+k)^2 + 2x \cdot 2(x^2+k) \cdot 2x}{(x^2+k)^4} = \frac{-2(x^2+k) + 8x^2}{(x^2+k)^3} = \frac{6x^2 - 2k}{(x^2+k)^3}.$$

Studiamo il segno della derivata seconda: $f_k''(x) > 0$ per $x < -\sqrt{\frac{k}{3}}$, $f_k''(x) < 0$ per $-\sqrt{\frac{k}{3}} < x < \sqrt{\frac{k}{3}}$, $f_k''(x) > 0$ per $x > \sqrt{\frac{k}{3}}$.

La funzione $f_k$ ammette due punti di flesso con ascisse $x = \pm\sqrt{\frac{k}{3}}$. L'ordinata dei punti di flesso è:

$$y = f_k\!\left(\sqrt{\frac{k}{3}}\right) = \frac{1}{\frac{k}{3} + k} = \frac{1}{\frac{4k}{3}} = \frac{3}{4k}.$$

Verifichiamo che i due punti di flesso appartengono alla curva di equazione $y = \dfrac{1}{4x^2}$: sostituendo $x^2 = \dfrac{k}{3}$, si ha $\dfrac{1}{4x^2} = \dfrac{1}{4 \cdot \frac{k}{3}} = \dfrac{3}{4k} = y$. ✓

**Tangenza di $\Gamma_k$ alla circonferenza $\alpha_k$.**

Al variare di $k \in \mathbb{R}^+$, la circonferenza $\alpha_k$ ha equazione $x^2 + y^2 - \dfrac{y}{k} = 0$, ovvero $x^2 + \left(y - \dfrac{1}{2k}\right)^2 = \dfrac{1}{4k^2}$. Il centro è $\left(0;\,\dfrac{1}{2k}\right)$ e il raggio è $\dfrac{1}{2k}$.

La circonferenza passa per il punto di coordinate $\left(0;\,\dfrac{1}{k}\right)$, che è anche il massimo assoluto della funzione $f_k$. Poiché il punto $\left(0;\,\dfrac{1}{k}\right)$ è un massimo relativo per la funzione $f_k$, il grafico $\Gamma_k$ della funzione $f_k$ è tangente alla circonferenza $\alpha_k$ nel punto $\left(0;\,\dfrac{1}{k}\right)$.

**Numero di intersezioni tra $\Gamma_k$ e $\alpha_k$ al variare di $k$.**

Per studiare le intersezioni tra $\Gamma_k$ e $\alpha_k$, consideriamo il sistema:

$$\begin{cases} y = \dfrac{1}{x^2+k} \\[6pt] x^2 + y^2 - \dfrac{y}{k} = 0 \end{cases}$$

Ricaviamo l'equazione dall'alto sostituendo $y = \dfrac{1}{x^2+k}$ nella seconda:

$$x^2 + \frac{1}{(x^2+k)^2} - \frac{1}{k(x^2+k)} = 0 \implies x^2\bigl[k(x^2+k)^2 + 1\bigr] = 0.$$

Oltre alla soluzione $x = 0$, corrispondente al punto di tangenza, l'equazione può ammettere ulteriori soluzioni. Si esistono valori di $k$ tali che $k(x^2+k)^2 = \dfrac{1}{x^2} - 1$, cioè tale che $k(x^2+k)^2 + 1 = 0$ ha soluzioni; analisi dei casi:

Elevando al quadrato e riorganizzando, si ottiene l'equazione $x^2 = -k + \dfrac{1}{\sqrt{k}}$, che ammette soluzioni reali se e solo se $\dfrac{1}{\sqrt{k}} \ge k$, cioè $k^{3/2} \le 1$, ovvero $k \le 1$.

Quindi:
- per $k > 1$: ammettono quattro intersezioni, tutte coincidenti con il punto di tangenza;
- per $k = 1$: ammettono quattro intersezioni, con due coincidenti nel punto di tangenza;
- per $0 < k < 1$: ammettono quattro intersezioni, di cui due coincidenti con il punto di tangenza.

*(grafico — vedi PDF p.94)*

### Punto 2 — Studio di $f_1(x)$, grafico e valore di $b$

Calcoliamo i limiti agli estremi del dominio di $f_1(x) = \dfrac{1}{x^2+1}$:

$$\lim_{x \to +\infty} \frac{1}{x^2+1} = 0.$$

La funzione $f_1$ ammette l'asintoto orizzontale $y = 0$ per $x \to \pm\infty$.

La funzione è pari, continua e derivabile. Dal segno di $f_1'(x) = \dfrac{-2x}{(x^2+1)^2}$: $f_1'(x) > 0$ per $x < 0$, $f_1'(x) < 0$ per $x > 0$. Quindi $f_1$ ha un massimo relativo (e assoluto) nel punto $(0;\,1)$.

I due flessi si trovano in $x = \pm\sqrt{\dfrac{1}{3}} = \pm\dfrac{\sqrt{3}}{3}$.

La funzione è crescente per $x < -\dfrac{\sqrt{3}}{3}$, concava verso l'alto; per $-\dfrac{\sqrt{3}}{3} < x < \dfrac{\sqrt{3}}{3}$ è concava verso il basso; per $x > \dfrac{\sqrt{3}}{3}$ è concava verso l'alto.

*(grafico — vedi PDF p.95)*

Osserviamo che la circonferenza $\alpha_1$ ha equazione $x^2 + y^2 - y = 0$, ovvero $x^2 + \left(y - \dfrac{1}{2}\right)^2 = \dfrac{1}{4}$, con centro $\left(0;\,\dfrac{1}{2}\right)$ e raggio $\dfrac{1}{2}$. Il cerchio $\mathcal{C}_1$ di equazione $x^2 + y^2 - y \le 0$ ha area $\pi \cdot \left(\dfrac{1}{2}\right)^2 = \dfrac{\pi}{4}$.

L'area sottesa al grafico di $f_1(x)$ nell'intervallo $[0;\,b]$ deve essere uguale all'area del cerchio $\mathcal{C}_1$:

$$\int_0^b \frac{1}{x^2+1}\,dx = \frac{\pi}{4}.$$

Poiché $\displaystyle\int_0^b \frac{1}{x^2+1}\,dx = \bigl[\arctan x\bigr]_0^b = \arctan b$, si ha:

$$\arctan b = \frac{\pi}{4} \implies b = 1.$$

### Punto 3 — Densità superficiale, potenziale $V(x)$ e unità di $h$

**Densità superficiale di carica.**

Il conduttore sferico ha raggio $r = 1{,}00\ \text{cm} = 1{,}00 \cdot 10^{-2}\ \text{m}$. Il punto $B(1{,}73;\,0)$ dista dal centro $A(0;\,1{,}00)$:

$$R = \overline{AB} = \sqrt{1{,}73^2 + 1{,}00^2} = \sqrt{2{,}9929 + 1{,}00} \approx 2{,}00\ \text{m}.$$

All'esterno della sfera carica il campo elettrico è uguale a quello che sarebbe generato da una carica puntiforme $Q$ posta in $A$. Quindi il campo elettrico nel punto $B$ è:

$$E = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{R^2} \implies Q = 4\pi\varepsilon_0 R^2 E.$$

$$Q = 4\pi \cdot 8{,}854 \cdot 10^{-12} \cdot (1{,}73^2 + 1{,}00^2) \cdot 2{,}00 \cdot 10^4 \approx 4{,}00 \cdot 10^{-8}\ \text{C}.$$

La densità superficiale di carica è:

$$\sigma = \frac{Q}{4\pi r^2} = \frac{4{,}00 \cdot 10^{-8}}{4\pi \cdot (1{,}00 \cdot 10^{-2})^2} = \frac{4{,}00 \cdot 10^{-8}}{4\pi \cdot 10^{-4}} \approx 7{,}07 \cdot 10^{-5}\ \text{C/m}^2.$$

**Potenziale elettrico $V(x)$ in $C(x;\,0)$.**

Il potenziale elettrico generato da $Q$ in un punto $C(x;\,0)$ dell'asse delle ascisse è:

$$V_C = V(x) = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\overline{AC}} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\sqrt{x^2+1}}.$$

Poniamo $h = \dfrac{Q}{4\pi\varepsilon_0}$, possiamo scrivere:

$$V(x) = h \cdot \frac{1}{\sqrt{x^2+1}} = h \cdot \sqrt{f_1(x)}.$$

Le unità di misura di $h$ si determinano con l'analisi dimensionale:

$$[h] = \frac{[V]}{[f_1]} = \frac{\text{V}}{\text{m}^{-1}} \cdot \frac{1}{\text{C}^{-1}} \implies [h] = \frac{\text{C}}{4\pi\varepsilon_0} \cdot \frac{1}{\text{m}} \cdot \text{m}^2 = \text{N} \cdot \text{m}^2/\text{C} = \text{V} \cdot \text{m}.$$

Per tracciare l'andamento qualitativo della funzione $V(x)$, osserviamo che:
- $V(x)$ ha dominio $\mathbb{R}$ ed è sempre positiva, poiché prodotto di due fattori positivi;
- $V(x) \to 0$ per $x \to \pm\infty$, quindi $V(x)$ ammette l'asse delle ascisse come asintoto orizzontale;
- $V'(x) = h \cdot \frac{d}{dx}\sqrt{f_1(x)} = 0$ in $x = 0$, quindi $V(x)$ ha un massimo relativo nel punto di ascissa $x = 0$; il massimo è $V(0) = h$.

*(grafico — vedi PDF p.96)*

### Punto 4 — Velocità del carrellino in $D$

Calcoliamo il potenziale nei punti $B$ e $D$.

$$V_B = V(1{,}73) = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\overline{AB}} = E \cdot R = 2{,}00 \cdot 10^4 \cdot 2{,}00 = 4{,}00 \cdot 10^4\ \text{V},$$

$$V_D = V(3{,}87) = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\overline{AD}} = \frac{4\pi\varepsilon_0 R^2 E}{\overline{AD}} = \frac{2{,}00 \cdot 10^{-8} \cdot 10}{4\pi\varepsilon_0 \cdot \overline{AD}} \approx 2{,}00 \cdot 10^4\ \text{V},$$

dove $\overline{AD} = \sqrt{3{,}87^2 + 1{,}00^2} \approx \sqrt{14{,}97 + 1} = 4{,}00\ \text{m}$.

$$V_D = \frac{Q}{4\pi\varepsilon_0 \cdot 4{,}00} = \frac{4{,}00 \cdot 10^{-8}}{4\pi \cdot 8{,}854 \cdot 10^{-12} \cdot 4{,}00} \approx 2{,}00 \cdot 10^4\ \text{V}.$$

Il principio di conservazione dell'energia meccanica: il carrellino con carica $q = 1{,}00 \cdot 10^{-6}\ \text{C}$ e massa $m = 50\ \text{g} = 50 \cdot 10^{-3}\ \text{kg}$, inizialmente fermo in $B$:

$$qV_B = \frac{1}{2}mv_D^2 + qV_D \implies v_D = \sqrt{\frac{2q(V_B - V_D)}{m}}.$$

$$v_D = \sqrt{\frac{2 \cdot 1{,}00 \cdot 10^{-6} \cdot 2{,}00 \cdot 10^4}{50 \cdot 10^{-3}}} \approx 0{,}89\ \text{m/s}.$$

La velocità del carrellino nel punto $D$ è $v_D \approx 0{,}89\ \text{m/s}$.

Se si raddoppia la massa del carrellino, la sua velocità in $D$ non dimezza. Infatti:

$$v'_D = \sqrt{\frac{2q(V_B-V_D)}{2m}} = \sqrt{\frac{1}{2} \cdot \frac{2q(V_B-V_D)}{m}} = \frac{1}{\sqrt{2}}\, v_D \neq \frac{1}{2}\, v_D.$$

---

## Problema 2

A cura di Gianni Melegari, Steave Selvaduray e Pietro Velonà.

*(grafico — vedi PDF p.78)*

In un piano orizzontale $OXY$ è definito, sulla striscia $0 \le X \le d$ (con $d = 3{,}000 \cdot 10^{-1}\ \text{m}$), il campo elettrostatico costante $\vec{E}$ orientato in senso opposto all'asse $OX$. Il solenoide ha raggio $r = 4{,}000\ \text{cm}$, $N = 100$ spire, resistività $\rho = 1{,}680 \cdot 10^{-8}\ \Omega \cdot \text{m}$. Il campo magnetico all'interno è dato da:

$$B(t) = a\left(\frac{bt^2+1}{ct^2+1}\right)$$

con $a = 5{,}000 \cdot 10^{-2}\ \text{T}$, $b = 1{,}000 \cdot 10^5\ \text{s}^{-2}$, $c = 9{,}895 \cdot 10^4\ \text{s}^{-2}$.

All'istante $t = 0\ \text{s}$ una particella di massa $m = 2{,}500 \cdot 10^{-24}\ \text{kg}$ e di carica $q = 3{,}204 \cdot 10^{-19}\ \text{C}$, con velocità iniziale $v_0 = 5{,}000 \cdot 10^2\ \text{m/s}$ orientata secondo l'asse $OX$, si trova in $O$.

### Punto 1 — Modulo e direzione della velocità di entrata nel solenoide

All'istante $t = 0\ \text{s}$ il modulo del campo magnetico all'interno del solenoide è $B(0) = a = 5{,}000 \cdot 10^{-2}\ \text{T}$. La particella entra nel solenoide all'istante $t_1$ ed è soggetta a un campo magnetico la cui intensità ha raggiunto il $99{,}00\%$ del suo estremo superiore $B(\infty) = a\dfrac{b}{c}$.

Usando il secondo principio della dinamica, determiniamo il modulo del campo elettrico $E$ e la velocità $v(t_1)$ della particella all'interno del solenoide. In particolare, il punto di ingresso $P$ nel solenoide ha coordinate in $O'XY'$ che si trovano dall'intersezione delle due circonferenze:

$$\Gamma_1: X^2 + Y^2 = r_1^2, \qquad \Gamma_2: X^2 + (Y - r_1)^2 = r_1^2,$$

*(grafico — vedi PDF p.98-99)*

Le coordinate di $P$ si ottengono dai seguenti calcoli:

$$\begin{cases} X^2 + Y^2 = r_1^2 \\ X^2 + Y^2 - 2r_1 Y = 0 \end{cases} \implies \begin{cases} X^2 + Y^2 - 2r_1 Y = 0 \\ Y = \dfrac{r_1}{2} \end{cases} \tag{2}$$

Prima di ottenere dalle (2) i valori delle coordinate, calcoliamo $r_1$:

$$r_1 = \frac{mv_0}{qB(t_1)} = \frac{(2{,}500 \cdot 10^{-24}\ \text{kg}) \cdot (3{,}441 \cdot 10^2\ \text{m/s})}{(3{,}204 \cdot 10^{-19}\ \text{C}) \cdot 0{,}9900} \approx 0{,}05367\ \text{m}.$$

Sostituendo nelle (2):

$$X_P = \frac{2}{4{,}000\ \text{cm}} \cdot (5{,}367\ \text{cm})^2 \approx 5{,}145\ \text{cm}, \qquad Y_P = \frac{2}{4{,}000\ \text{cm}} \cdot (5{,}367\ \text{cm})^2 \approx 3{,}834\ \text{cm}.$$

### Punto 2 — Corrente indotta $i(t)$ nel solenoide

Per determinare la corrente indotta nel solenoide, utilizziamo la legge di Faraday-Neumann:

$$\mathcal{E}(t) = -N\frac{d\Phi(\vec{B})}{dt} = -N\pi r^2 \frac{dB(t)}{dt}. \tag{3}$$

Calcoliamo la derivata:

$$\frac{dB(t)}{dt} = a \cdot \frac{2bt(ct^2+1) - bt^2 \cdot 2ct}{(ct^2+1)^2} = a \cdot \frac{2bt}{(ct^2+1)^2} \cdot \frac{(ct^2+1) - ct^2}{1} = \frac{2a(b-c)t}{(ct^2+1)^2}.$$

Questa espressione fornisce l'opposto della forza elettromotrice indotta nel solenoide. Per il calcolo della resistenza $R$ consideriamo la seconda legge di Ohm:

$$R = \rho \frac{L}{A} \tag{5}$$

in cui $L = 2\pi r N$ è la lunghezza degli avvolgimenti e $A = \pi r_{filo}^2$ è la sezione del filo con $r_{filo} = \dfrac{r}{N}$. Pertanto, la (5) diventa:

$$R = \frac{2\pi r N}{\pi\left(\frac{r}{N}\right)^2} = \frac{2\pi r N \cdot N^2}{\pi r^2} = \frac{2N^3}{r} \cdot \frac{\rho}{\pi r} = \frac{2\rho N^3}{\pi r^2}$$

*(grafico solenoide — vedi PDF p.100)*

Sostituendo nelle (3) e nella (5) si ottiene l'espressione per il modulo della corrente:

$$|i(t)| = \frac{|\mathcal{E}(t)|}{R} = \frac{N\pi r^2}{R} \cdot \frac{2a(b-c)t}{(ct^2+1)^2} = \frac{\pi r l^2}{4\rho N^2} \cdot a(b-c) \cdot \frac{2t}{(ct^2+1)^2}. \tag{6}$$

Il segno meno indica che la corrente fluisce in $y$ in senso orario.

Il modulo $B_I(t)$ del campo magnetico prodotto dalla corrente indotta è dato da:

$$B_I(t) = \mu_0 \frac{N}{L}\,|i(t)| = \frac{\mu_0 \pi r l^2}{8\rho N^2} \cdot a(b-c) \cdot \frac{2t}{(ct^2+1)^2}.$$

*(grafico corrente — vedi PDF p.101)*

### Punto 3 — Funzione $f(x) = |i(x)|/I$ e studio di $h(x)$

Consideriamo la funzione:

$$f(x) = \frac{|i(x)|}{I},$$

dove

$$I = \frac{\pi r l^2}{8\rho N^2} \cdot \frac{a(b-c)}{\sqrt{c}}.$$

Dalla (6) si deduce, ponendo $x = t\sqrt{c}$:

$$f(x) = \frac{2x}{(x^2+1)^2}.$$

Dopo aver verificato che risulta $f(x) = \dfrac{2x}{(x^2+1)^2}$, studiamo la funzione $h: \mathbb{R} \to \mathbb{R}$ così definita:

$$h(x) = |f(x)| \quad \forall x \in \mathbb{R}.$$

$h$ è una funzione definita su tutto $\mathbb{R}$ ed è pari, per cui è sufficiente studiarne il comportamento per $x \ge 0$. La funzione $h$ ha un'unica intersezione con l'asse $x$ nell'origine e $\displaystyle\lim_{x \to \pm\infty} h(x) = 0$, quindi $h$ è sempre non negativa.

La funzione non è derivabile in $x = 0$.

Calcoliamo la derivata prima (per $x > 0$):

$$f'(x) = \frac{2(x^2+1)^2 - 2x \cdot 2(x^2+1) \cdot 2x}{(x^2+1)^4} = \frac{2(x^2+1) - 8x^2}{(x^2+1)^3} = \frac{2 - 6x^2}{(x^2+1)^3}.$$

Per $x \ge 0$: $f'(x) > 0$ per $0 < x < \dfrac{1}{\sqrt{3}}$, $f'(x) = 0$ per $x = \dfrac{1}{\sqrt{3}}$, $f'(x) < 0$ per $x > \dfrac{1}{\sqrt{3}}$.

I punti di massimo relativo di $h$ hanno coordinate $A\!\left(-\dfrac{1}{\sqrt{3}};\, \dfrac{\sqrt{3}}{2}\right)$ e $B\!\left(\dfrac{1}{\sqrt{3}};\, \dfrac{\sqrt{3}}{2}\right)$.

Nell'origine la funzione $h$ ha un punto angoloso. Si calcolano le derivate destra e sinistra:

$$h'_+(0) = \lim_{x \to 0^+} \frac{2(1-3x^2)}{(x^2+1)^3} = 2, \qquad h'_-(0) = \lim_{x \to 0^-} \frac{-2(1-3x^2)}{(x^2+1)^3} = -2.$$

Le rette tangenti al grafico di $h$ nel punto di non derivabilità $x = 0$ sono $p: y = 2x$ e $q: y = -2x$.

Calcoliamo la derivata seconda per $x \ge 0$:

$$f''(x) = \frac{-12x(x^2+1)^3 - (2-6x^2) \cdot 3(x^2+1)^2 \cdot 2x}{(x^2+1)^6} = \frac{2(1-3x^2) \cdot \ldots}{(x^2+1)^4}.$$

Per $x \ge 0$ la funzione $h''(x)$ si annulla in $x = 0$ e in $x = 1$; dai valori del segno si ottiene che $h$ ha punti di flesso in $C\!\left(-1;\, \dfrac{1}{2}\right)$ e $D\!\left(1;\, \dfrac{1}{2}\right)$.

*(grafico — vedi PDF p.102)*

### Punto 4 — Funzione $g(x) = x^4 f(x)$ e asintoti obliqui di $|g|$

La funzione $g: \mathbb{R} \to \mathbb{R}$ è per definizione:

$$g(x) = x^4 f(x) = x^4 \cdot \frac{2x}{(x^2+1)^2} = \frac{2x^5}{(x^2+1)^2},$$

e il suo valore assoluto è:

$$|g(x)| = \frac{2|x|^5}{(x^2+1)^2} = \begin{cases} \dfrac{2x^5}{(x^2+1)^2} & \text{se } x \ge 0 \\[6pt] -\dfrac{2x^5}{(x^2+1)^2} & \text{se } x < 0 \end{cases}$$

**Asintoti obliqui.** Per $x \to +\infty$:

$$\lim_{x \to +\infty} \frac{|g(x)|}{x} = \lim_{x \to +\infty} \frac{2x^4}{(x^2+1)^2} = \lim_{x \to +\infty} \frac{2x^4}{x^4\left(1+\frac{1}{x^2}\right)^2} = 2,$$

$$\lim_{x \to +\infty} \left[|g(x)| - 2x\right] = \lim_{x \to +\infty} \frac{2x^5 - 2x(x^2+1)^2}{(x^2+1)^2} = \lim_{x \to +\infty} \frac{-2x^4 - 2x}{(x^2+1)^2} = -2 \cdot \lim \frac{x^4+x}{x^4} = 0.$$

La funzione $|g(x)|$ ammette quindi un asintoto obliquo per $x \to +\infty$ di equazione $y = 2x$. Per simmetria, per $x \to -\infty$ l'asintoto obliquo ha equazione $y = -2x$. I due asintoti coincidono con le rette $p$ e $q$ tangenti al grafico di $|f(x)|$ nel suo punto di non derivabilità.

**Primo integrale.** La funzione integranda $2x - g(x)$ è dispari in un dominio simmetrico rispetto all'origine:

$$\int_{-m}^{m} [2x - g(x)]\,dx = 0.$$

**Secondo integrale.** Notiamo che:

$$\int_{-m}^{m} \bigl[2|x| - |g(x)|\bigr]\,dx = 4\int_0^m \!\!\left[x - \frac{x^5}{(x^2+1)^2}\right]dx = 4\int_0^m \frac{x(x^2+1)^2 - x^5}{(x^2+1)^2}\,dx$$

$$= 4\int_0^m \frac{x^3 + 2x^2 + x - x^5 + \ldots}{(x^2+1)^2}\,dx.$$

Semplificando: $x(x^2+1)^2 - x^5 = x(x^4 + 2x^2 + 1) - x^5 = x^4 + 2x^2 + x - x^4 \cdot x + \ldots$:

$$x(x^2+1)^2 - x^5 = x^5 + 2x^3 + x - x^5 = 2x^3 + x = x(2x^2+1).$$

Quindi:

$$4\int_0^m \frac{x(2x^2+1)}{(x^2+1)^2}\,dx = 4\int_0^m \left[\frac{2x}{x^2+1} - \frac{2x \cdot 1}{(x^2+1)^2} + \frac{x}{(x^2+1)^2}\right]dx.$$

Si verifica che il risultato è:

$$\int_{-m}^{m} \bigl[2|x| - |g(x)|\bigr]\,dx = 4\ln(m^2+1) - \frac{2m^2}{m^2+1},$$

per ogni numero reale $m$ non negativo.

---

## Quesito 4

Sia $f: \mathbb{R} \to \mathbb{R}$ la funzione definita da

$$f(x) = \frac{\sqrt{x+1} - e^{-x}}{x}.$$

**Calcolo dei limiti $\lim_{x \to +\infty} f(x)$ e $\lim_{x \to 0} f(x)$, giustificando le risposte.**

Per $x \to +\infty$: al numeratore $\sqrt{x+1} \to +\infty$ e $e^{-x} \to 0$, al denominatore $x \to +\infty$:

$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{\sqrt{x+1} - e^{-x}}{x} = \lim_{x \to +\infty} \frac{\sqrt{x+1}}{x} = \lim_{x \to +\infty} \frac{1}{\sqrt{x}} \cdot \frac{\sqrt{x+1}}{\sqrt{x}} = 0.$$

Per $x \to 0$: la forma è $\dfrac{0}{0}$, quindi ricorriamo agli sviluppi di Taylor al primo ordine:

$$\sqrt{x+1} = 1 + \frac{x}{2} + o(x), \qquad e^{-x} = 1 - x + o(x),$$

$$f(x) = \frac{\left(1 + \frac{x}{2}\right) - (1-x)}{x} + o(1) = \frac{\frac{x}{2} + x}{x} = \frac{\frac{3}{2}x}{x} = \frac{3}{2}.$$

Quindi:

$$\lim_{x \to +\infty} f(x) = 0, \qquad \lim_{x \to 0} f(x) = \frac{3}{2}.$$

*(vedi anche il calcolo alternativo con de l'Hôpital per $\lim_{x \to 0}$)*

---

## Quesito 1

La funzione $f(x) = \dfrac{p(x)}{x^2 + k}$, in cui $p(x)$ è un polinomio e $k \in \mathbb{R}$, ha il grafico in figura, simmetrico rispetto all'asse $y$.

*(grafico — vedi PDF p.80)*

La retta $t$ è tangente al grafico di $f(x)$ nel punto $A$ di ascissa $4$ e ha coefficiente angolare $-\dfrac{2}{7}$.

**Grado di $p(x)$ e espressione di $f(x)$.**

Dal grafico si deduce:
- $f(x)$ ha asintoto orizzontale $y = 4$ (la funzione tende a $4$ per $x \to \pm\infty$), quindi il grado di $p(x)$ è uguale al grado del denominatore, cioè $2$.
- $f(x)$ è pari, quindi $p(x)$ è un polinomio pari: $p(x) = ax^2 + b$.
- Per l'asintoto orizzontale: $a = 4$, quindi $f(x) = \dfrac{4x^2+b}{x^2+k}$.

Dal valore della tangente nel punto $A$, con il grafico si legge $f(4) = 5$ (punto $A(4;\,5)$):

$$f(4) = \frac{4 \cdot 16 + b}{16 + k} = 5 \implies 64 + b = 80 + 5k \implies b = 16 + 5k. \tag{i}$$

Infine, per determinare $m = f'(4)$:

$$f'(x) = \frac{8x(x^2+k) - (4x^2+b) \cdot 2x}{(x^2+k)^2} = \frac{2x(4k-b)}{(x^2+k)^2},$$

$$f'(4) = \frac{8(4k-b)}{(16+k)^2} = -\frac{2}{7} \implies \frac{8(4k-b)}{(16+k)^2} = -\frac{2}{7}. \tag{ii}$$

Da (i): $b = 16+5k$, quindi $4k - b = 4k - 16 - 5k = -k - 16$. Sostituendo nella (ii):

$$\frac{8(-k-16)}{(16+k)^2} = -\frac{2}{7} \implies \frac{8(k+16)}{(k+16)^2} = \frac{2}{7} \implies \frac{8}{k+16} = \frac{2}{7}.$$

Quindi: $k + 16 = 28 \implies k = 12$, e $b = 16 + 5 \cdot 12 = 76$.

Verifica: $f(4) = \dfrac{64 + 76}{16+12} = \dfrac{140}{28} = 5$ ✓, $f'(4) = \dfrac{8(48-76)}{(28)^2} = \dfrac{-224}{784} = -\dfrac{2}{7}$ ✓.

Quindi il polinomio $p(x)$ ha grado $2$ e:

$$f(x) = \frac{4x^2 + 76}{x^2 + 12} = \frac{4(x^2+19)}{x^2+12}.$$

**Asintoto obliquo di $g(x) = -x \cdot f(x)$.**

$$g(x) = -x \cdot \frac{4x^2+76}{x^2+12} = -\frac{4x^3+76x}{x^2+12}.$$

$$\lim_{x \to \pm\infty} \frac{g(x)}{x} = -4, \qquad \lim_{x \to \pm\infty} [g(x) + 4x] = \lim_{x \to \pm\infty} \frac{-4x^3-76x+4x(x^2+12)}{x^2+12} = \lim_{x \to \pm\infty} \frac{-28x}{x^2+12} = 0.$$

L'asintoto obliquo di $g(x)$ ha equazione $y = -4x$.

---

## Quesito 2

Si consideri la funzione $f(x) = \dfrac{2}{x^2-2x+2}$.

Indicato con $M$ il suo punto di massimo assoluto, determiniamo le equazioni delle rette tangenti al grafico della funzione e passanti per $M$.

**Punto di massimo $M$.** Il denominatore $x^2-2x+2 = (x-1)^2+1 \ge 1$, con minimo in $x = 1$. Quindi il massimo di $f$ è in $x = 1$: $f(1) = 2$, quindi $M(1;\,2)$.

La derivata prima:

$$f'(x) = \frac{-2(2x-2)}{(x^2-2x+2)^2} = \frac{-4(x-1)}{(x^2-2x+2)^2}.$$

Poiché $f'(1) = 0$, la tangente in $M$ è orizzontale: $y = 2$.

**Rette tangenti generiche passanti per $M$.** La retta di coefficiente angolare $m$ passante per $M(1;\,2)$ è $y = m(x-1)+2$. Essa è tangente al grafico se il sistema ha soluzione doppia:

$$m(x-1) + 2 = \frac{2}{x^2-2x+2} \implies m(x-1)(x^2-2x+2) + 2(x-1)^2 = 0$$

$$\implies (x-1)\bigl[m(x^2-2x+2) + 2(x-1)\bigr] = 0.$$

Per le tangenti con $x \ne 1$: $m(x^2-2x+2) + 2(x-1) = 0 \implies mx^2 + (2-2m)x + (2m-2) = 0$.

Dal discriminante $= 0$ per la tangenza: $(2-2m)^2 - 4m(2m-2) = 0$:

$$4(1-m)^2 - 8m(m-1) = 0 \implies 4(m-1)(m-1 - 2m) = 0 \implies 4(m-1)(-m-1) = 0$$

$$\implies -4(m-1)(m+1) = 0 \implies m = \pm 1.$$

Le due rette tangenti sono:
- per $m = -1$: $y = -(x-1)+2 = -x+3$;
- per $m = 1$: $y = (x-1)+2 = x+1$.

Le rette tangenti al grafico di $f(x)$ passanti per $M(1;\,2)$ sono $p: y = x+1$ e $q: y = -x+3$.

**Area della regione $R$ delimitata dagli archi $AB$ dei grafici di $f(x)$ e $g(x) = \frac{1}{16}x^2$.**

I punti comuni ai due grafici si trovano da $\dfrac{2}{x^2-2x+2} = \dfrac{1}{16}x^2$. Dall'immagine si leggono $A(0;\,0)$ e $B(4;\,1)$.

Verifica: $f(0) = \dfrac{2}{2} = 1 \ne 0$... In realtà dal testo (PDF p.107) la richiesta usa $f(x)$ e $g(x) = \dfrac{1}{16}x^2$ nell'intervallo con $A(-8;\,4)$ e $B(4;\,1)$ se le funzioni sono quelle del Quesito 4, oppure i punti dell'intersezione sono $A$ e $B$ letti dal grafico.

*(grafico — vedi PDF p.107)*

L'area della regione $R$ delimitata dagli archi $AB$ dei grafici di $g(x)$ e di $f(x)$, compresi tra $A$ e $B$, è:

$$S_R = \int_0^4 \left|f(x) - g(x)\right|dx.$$

I punti $A$ e $B$ appartengono anche al grafico della funzione $h(x)$, per qualunque $a > 0$. Si determina poi il valore di $a > 0$ per il quale la regione $R'$ delimitata dagli archi $AB$ dei grafici di $g(x)$ e di $h(x)$ sia equivalente a $R$.

*(calcolo dettagliato — vedi PDF p.107-108)*

---

## Quesito 3

Sono date le funzioni:

$$f(x) = \frac{65x^2}{16(x^2+1)}, \qquad g(x) = \frac{1}{16}x^2.$$

**Punti comuni $A$ e $B$.** Troviamo le intersezioni $f(x) = g(x)$:

$$\frac{65x^2}{16(x^2+1)} = \frac{x^2}{16} \implies 65x^2 = x^2(x^2+1) \implies x^2(x^2 - 64) = 0 \implies x = 0 \text{ o } x = \pm 8.$$

Quindi $A(0;\,0)$ e $B(4;\,1)$... Dal grafico (vedi PDF p.80) le intersezioni effettive sono $A(-8;\,4)$ e $B(4;\,1)$ considerando i rami positivi; oppure $A(0;\,0)$ e $B(4;\,1)$ per i rami nell'intervallo $[0;\,4]$.

Consideriamo $A(0;\,0)$ e $B(4;\,1)$. Si definisce $h(x) = ax^3 + \left(\dfrac{1}{16} - 4a\right)x^2$. Verifica:

$$h(0) = 0 = g(0), \qquad h(4) = 64a + 16\!\left(\frac{1}{16}-4a\right) = 64a + 1 - 64a = 1 = g(4). \checkmark$$

**Area della regione $R$.** L'area tra i grafici $g(x)$ e $f(x)$ nell'intervallo $[0;\,4]$:

$$S_R = \int_0^4 \left[f(x) - g(x)\right]dx = \int_0^4 \frac{65x^2 - x^2(x^2+1)}{16(x^2+1)}\,dx = \int_0^4 \frac{x^2(64-x^2)}{16(x^2+1)}\,dx.$$

Sviluppando:

$$\frac{x^2(64-x^2)}{16(x^2+1)} = \frac{64x^2 - x^4}{16(x^2+1)}.$$

Dividendo $64x^2 - x^4$ per $x^2+1$: $-x^4+64x^2 = -(x^2+1)(x^2-65)+65-1 = -(x^2-65)(x^2+1) + 64$.

Quindi $\dfrac{-x^4+64x^2}{16(x^2+1)} = \dfrac{-(x^2-65)}{16} + \dfrac{64}{16(x^2+1)} = \dfrac{-x^2+65}{16} + \dfrac{4}{x^2+1}$:

$$S_R = \int_0^4 \!\!\left[\frac{65-x^2}{16} + \frac{4}{x^2+1}\right]dx = \left[\frac{65x - \frac{x^3}{3}}{16} + 4\arctan x\right]_0^4$$

$$= \frac{65 \cdot 4 - \frac{64}{3}}{16} + 4\arctan 4 = \frac{260 - \frac{64}{3}}{16} + 4\arctan 4 = \frac{780 - 64}{48} + 4\arctan 4 = \frac{716}{48} + 4\arctan 4.$$

*(valore numerico — vedi PDF p.108)*

**Area della regione $R'$ e valore di $a$.**

$$S_{R'} = \int_0^4 \left[h(x) - g(x)\right]dx = \int_0^4 \left[ax^3 + \left(\frac{1}{16}-4a\right)x^2 - \frac{x^2}{16}\right]dx = \int_0^4 \left[ax^3 - 4ax^2\right]dx$$

$$= a\left[\frac{x^4}{4} - \frac{4x^3}{3}\right]_0^4 = a\left[64 - \frac{256}{3}\right] = a \cdot \frac{192-256}{3} = -\frac{64a}{3}.$$

Poiché $S_{R'} > 0$, si ha $S_{R'} = \dfrac{64a}{3}$.

I punti $A$ e $B$ appartengono al grafico di $h$ per qualunque $a > 0$; imponendo $S_{R'} = S_R$:

$$\frac{64a}{3} = S_R \implies a = \frac{3S_R}{64}.$$

*(valore numerico di $a$ — vedi PDF p.109)*

---

## Quesito 5

Si consideri la funzione $f: \mathbb{R} \to \mathbb{R}$ così definita:

$$f(x) = \begin{cases} ae^x + 2 & \text{se } x \le 0 \\[4pt] \dfrac{x^2}{a} + bx + 3 & \text{se } x > 0 \end{cases}$$

**Determinazione dei parametri $a$ e $b$ per la derivabilità in $\mathbb{R}$.**

*Continuità in $x = 0$:*

$$\lim_{x \to 0^-} f(x) = a \cdot 1 + 2 = a + 2, \qquad \lim_{x \to 0^+} f(x) = 0 + 0 + 3 = 3, \qquad f(0) = a + 2.$$

Per la continuità: $a + 2 = 3 \implies a = 1$.

*Derivabilità in $x = 0$:*

$$\lim_{x \to 0^-} f'(x) = ae^x\big|_{x=0} = a = 1, \qquad \lim_{x \to 0^+} f'(x) = \frac{2x}{a}\bigg|_{x=0} + b = b.$$

Per la derivabilità: $b = 1$.

Quindi $a = 1$, $b = 1$, e la funzione è:

$$f(x) = \begin{cases} e^x + 2 & \text{se } x \le 0 \\[4pt] x^2 + x + 3 & \text{se } x > 0 \end{cases}$$

**Grafico qualitativo.** Per $x \le 0$: la funzione è un arco di esponenziale traslata verticalmente di $2$ unità, strettamente crescente e con concavità verso l'alto. Per $x > 0$: la funzione $x^2+x+3$ è una parabola con concavità verso l'alto, crescente nell'intervallo $(0;\,+\infty)$. Le due parti si raccordano in $x = 0$ con $f(0) = 3$ e derivata $f'(0) = 1$.

*(grafico — vedi PDF p.110)*

**Teorema di Lagrange su $[-1;\,6]$.**

La funzione $f$ è continua su $[-1;\,6]$ e derivabile su $(-1;\,6)$, quindi soddisfa le ipotesi del teorema di Lagrange.

Cerchiamo $c \in (-1;\,6)$ tale che:

$$f'(c) = \frac{f(6) - f(-1)}{6-(-1)}.$$

Calcoliamo: $f(6) = 36 + 6 + 3 = 45$, $f(-1) = e^{-1} + 2$.

$$f'(c) = \frac{45 - e^{-1} - 2}{7} = \frac{43 - e^{-1}}{7}.$$

Poiché $\dfrac{43 - e^{-1}}{7} \approx \dfrac{43 - 0{,}368}{7} \approx 6{,}09 > 1$, il punto $c$ cade nell'intervallo $(0;\,6)$ (dove $f'(x) = 2x+1$):

$$2c + 1 = \frac{43 - e^{-1}}{7} \implies c = \frac{43 - e^{-1} - 7}{14} = \frac{36 - e^{-1}}{14} \approx \frac{36 - 0{,}368}{14} \approx 2{,}54.$$

Si verifica che $c \approx 2{,}54 \in (-1;\,6)$. ✓

*(vedi PDF p.109)*

---

## Quesito 6

La cometa di Halley orbita intorno al Sole con un periodo di circa $76{,}0$ anni, descrivendo un'orbita ellittica molto eccentrica ($e = 0{,}967$). I valori orbitali della cometa all'afelio sono $v_{pe} = 914\ \text{m/s}$ e $r_{pe} = 35{,}1\ \text{UA}$.

Le relazioni che indicano le grandezze orbitali della cometa al perielio sono:

$$v_{pe} = \sqrt{\frac{G^2M_\odot^2 + 2E_s L_s^2 + GM_\odot}{L_s}}, \qquad r_{pe} = \frac{L_s^2}{G^2M_\odot^2 + 2E_s L_s^2 + GM_\odot}$$

dove $E_s$ e $L_s$ sono, rispettivamente, l'energia e il modulo del momento angolare per unità di massa, $G$ è la costante di gravitazione universale e $M_\odot$ è la massa del Sole.

**Verifica delle relazioni e calcolo dei valori numerici di $v_{pe}$ e $r_{pe}$.**

Il momento angolare per unità di massa si conserva lungo l'orbita:

$$L_s = v_{pe} \cdot r_{pe} = 914\ \frac{\text{m}}{\text{s}} \cdot \left(35{,}1 \times 1{,}496 \cdot 10^{11}\ \text{m}\right) = 914 \cdot 5{,}250 \cdot 10^{12}\ \text{m}^2 = 4{,}799 \cdot 10^{15}\ \frac{\text{m}^2}{\text{s}}.$$

La seconda equazione può essere riscritta come $r_{pe} \cdot (G^2M_\odot^2 + 2E_sL_s^2 + GM_\odot) = L_s^2$. Usando la conservazione dell'energia $E_s = \frac{1}{2}v^2 - \frac{GM_\odot}{r}$ all'afelio e combinando le due leggi di conservazione, si ricavano $v_{pe}$ e $r_{pe}$.

*(grafico orbita — vedi PDF p.82)*

I valori numerici (vedi PDF p.110-111):

$$v_{pe} \approx 5{,}44 \cdot 10^4\ \text{m/s}, \qquad r_{pe} \approx 8{,}83 \cdot 10^{10}\ \text{m}.$$

**Calcolo di $L_s$:**

$$L_s = \left[(1{,}760 \cdot 10^{-4} - 0{,}1144 \cdot 10^{-4}) \cdot \frac{\text{N}^2 \cdot \text{m}^2}{\text{kg}^2} + 1{,}327 \cdot 10^{-10} \cdot \frac{\text{N} \cdot \text{m}^2}{\text{kg}}\right] \approx 5{,}44 \cdot 10^{15}\ \frac{\text{m}^2}{\text{s}}.$$

*(calcolo dettagliato — vedi PDF p.110-111)*

---

## Quesito 7

Un campo elettrico $\vec{E}$, uniforme e variabile nel tempo, genera un campo magnetico $\vec{B}$. Si considera una circonferenza di raggio $r$ con centro $O$ perpendicolare al piano contenente il campo $\vec{E}$; il modulo del campo magnetico è dato da:

$$B(t) = \mu_0 \varepsilon_0 r \cdot a \cdot \frac{t^2}{bt^2+1}$$

con $a = 5 \cdot 10^{-2}\ \text{m}^{-2}$ e $b = 2\ \text{s}^{-2}$.

**Modulo del campo elettrico $E(t)$ in funzione del tempo, supponendo che all'istante $t = 0$ sia nullo.**

Per la legge di Ampère-Maxwell, la circolazione del campo magnetico lungo il bordo del percorso circolare è:

$$\oint \vec{B} \cdot d\vec{l} = \mu_0 \varepsilon_0 \frac{d\Phi(\vec{E})}{dt}. \tag{1}$$

Dalla (1) otteniamo $2\pi r \cdot B(t) = \mu_0 \varepsilon_0 \cdot \pi r^2 \cdot \dfrac{dE}{dt}$, quindi:

$$\frac{dE}{dt} = \frac{2B(t)}{\mu_0 \varepsilon_0 r} = \frac{2}{\mu_0\varepsilon_0 r} \cdot \mu_0\varepsilon_0 r \cdot a \cdot \frac{t^2}{bt^2+1} = 2a \cdot \frac{t^2}{bt^2+1}.$$

Integrando:

$$E(t) = 2a\int_0^t \frac{s^2}{bs^2+1}\,ds = 2a\int_0^t \frac{1}{b} \cdot \frac{bs^2+1 - 1}{bs^2+1}\,ds = \frac{2a}{b}\int_0^t \!\!\left[1 - \frac{1}{bs^2+1}\right]ds$$

$$= \frac{2a}{b}\left[t - \frac{1}{\sqrt{b}}\arctan(\sqrt{b}\,t)\right].$$

Sostituendo $a = 5 \cdot 10^{-2}\ \text{m}^{-2}$ e $b = 2\ \text{s}^{-2}$:

$$E(t) = \frac{2 \cdot 5 \cdot 10^{-2}}{2}\left[t - \frac{1}{\sqrt{2}}\arctan(\sqrt{2}\,t)\right] = 5 \cdot 10^{-2}\left[t - \frac{1}{\sqrt{2}}\arctan\!\left(\sqrt{2}\,t\right)\right].$$

Si osserva che $E(t)$ non dipende da $r$.

*(vedi PDF p.111)*

---

## Quesito 8

Un osservatore $B$, solidale con un sistema di riferimento $S'$, si muove con velocità $v_1$ rispetto a un altro osservatore $A$, che si trova in un sistema di riferimento inerziale $S$. Al tempo $t = t' = 0\ \text{s}$ entrambi occupano la posizione spaziale $x = x' = 0\ \text{m}$ e la velocità relativa è rivolta nei semissi positivi dei sistemi. Si considerano i due eventi:

- $E_1$: in cui l'orologio di $A$ indica l'istante $t_1 = 2{,}1 \cdot 10^7\ \text{s}$ e la sua coordinata spaziale in $S$ è $x_1 = -8{,}5 \cdot 10^{15}\ \text{m}$.
- $E_2$: in cui l'orologio di $B$ indica l'istante $t_2'$ e la sua coordinata spaziale in $S$ è $x_2' = 5{,}6 \cdot 10^{-10}\ \text{m}$.

**Calcolo del rapporto $\beta_2 = v_2/c$ e dell'istante $t_2'$.**

Per calcolare $\beta_1$, usiamo le trasformazioni di Lorentz nella posizione occupata da $B$ in $t_1$ (evento $E_1$):

$$x_1' = \gamma_1(x_1 - \beta_1 c\, t_1). \tag{1}$$

Nell'orologio $B$, la posizione spaziale $x_1'$ è la coordinata dell'osservatore $B$ nel sistema $S'$ in $t_1$. Tenendo conto del fattore di Lorentz $\gamma_1 = \left(1-\beta_1^2\right)^{-1/2}$ e dell'espressione della (1):

$$\beta_1 = \frac{x_1}{c\, t_1} = \frac{8{,}5 \cdot 10^{15}}{2{,}998 \cdot 10^8 \cdot 2{,}1 \cdot 10^7} = \frac{8{,}5 \cdot 10^{15}}{6{,}296 \cdot 10^{15}} \approx \frac{4}{5} = 0{,}80.$$

*(vedi PDF p.111)*

Applichiamo le trasformazioni di Lorentz in $t_2'$ (evento $E_2$):

$$\begin{cases} x_2 = \gamma_1(x_2' + \beta_1 c\, t_2') \\ t_2 = \gamma_1\!\left(t_2' + \dfrac{\beta_1}{c}\, x_2'\right) \end{cases} \tag{2}$$

Affinché i due eventi $E_1$ e $E_2$ siano simultanei in $S$ (cioè $t_1 = t_2$):

$$\gamma_1\!\left(t_2' + \frac{\beta_1}{c}\, x_2'\right) = t_1 \implies t_2' = \frac{t_1}{\gamma_1} - \frac{\beta_1}{c}\, x_2'. \tag{2'}$$

Calcoliamo $\gamma_1 = \dfrac{1}{\sqrt{1-0{,}80^2}} = \dfrac{1}{\sqrt{0{,}36}} = \dfrac{1}{0{,}6} = \dfrac{5}{3}$.

$$t_2' = \frac{t_1}{\gamma_1} = \frac{2{,}1 \cdot 10^7}{\frac{5}{3}} = \frac{3 \cdot 2{,}1 \cdot 10^7}{5} = 1{,}26 \cdot 10^7\ \text{s}.$$

(il termine $\dfrac{\beta_1}{c} x_2' \approx 0$ poiché $x_2'$ è trascurabilmente piccolo.)

**Calcolo di $\beta_2$.**

Per calcolare $\beta_2$, applichiamo una delle trasformazioni di Lorentz, nella posizione occupata da $B$ in $t_1$ (evento $E_1$):

$$\beta_1 \cdot c \cdot t_1 = x_1 \implies \beta_1 = \frac{x_1}{c\, t_1} = 0{,}80.$$

Affinché i due eventi siano simultanei in $S$, il rapporto $\beta_2$ della velocità dell'orologio $B$ rispetto ad $A$ nel sistema $S$ vale:

$$\beta_2 = \sqrt{1 - \left(\frac{t_2'}{t_1}\right)^2} = \sqrt{1 - \left(\frac{1}{\gamma_1}\right)^2} = \sqrt{1 - (1-\beta_1^2)} = \beta_1 = 0{,}80.$$

Applicando le trasformazioni di Lorentz (equazione 2) e tenendo conto dell'espressione della (1):

$$\beta_2 = \sqrt{1 - \left(\frac{t_2'}{t_1}\right)^2} = \sqrt{1 - 0{,}36} = \sqrt{0{,}64} = 0{,}80.$$

Verifica: applicando le formule di composizione delle velocità:

$$\frac{x_1'}{c\, t_1'} = \ldots \implies \beta_2 = 0{,}75.$$

*(calcolo completo con trasformazioni di Lorentz — vedi PDF p.111–112)*
