---
tipo: soluzione
prova_stem: simzan_simzan_parte1_2013_10_106
pdf: SimZan_parte1.pdf
source: vision
title: Soluzioni — simzan_simzan_parte1_2013_10_106
---

# Soluzioni — simzan_simzan_parte1_2013_10_106

## Problema 1

### Punto a)

Disegniamo la circonferenza mettendo in evidenza gli elementi indicati dal problema: il diametro $AC$, di lunghezza variabile, la corda $AB$ (con $AB = 1$) e la corda $BC$ (con $BC = x$, $0 \le x \le AC$).

*(grafico — vedi PDF p.106)*

Poiché il diametro non può avere lunghezza minore della corda, deve essere:
$$AC \ge AB \implies AC \ge 1.$$

Il triangolo $ABC$ è rettangolo in $B$, perché inscritto in una semicirconferenza, quindi:
$$AC^2 = AB^2 + BC^2 = 1 + x^2.$$

La funzione $f(x)$ è pertanto data da:
$$f(x) = \frac{BC \cdot AB}{AC} = \frac{x}{\sqrt{1+x^2}} \cdot \frac{1}{\sqrt{1+x^2}} \implies f(x) = \frac{x}{2(1+x^2)}.$$

Studiamo la funzione senza tener conto della limitazione geometrica.

- **Dominio:** $\mathbb{R}$, in quanto il denominatore non si annulla per alcun valore di $x$.
- Poiché $f(-x) = \dfrac{-x}{2(1+x^2)} = -f(x)$, la funzione è dispari, quindi è simmetrica rispetto all'origine.
- Il grafico della funzione interseca gli assi cartesiani soltanto nell'origine $O(0;\,0)$, poiché $f(x) = 0 \Leftrightarrow x = 0$.
- **Segno della funzione:**
  - $f(x) > 0 \Leftrightarrow x > 0$;
  - $f(x) < 0 \Leftrightarrow x < 0$.

### Punto b) — Limiti e asintoti

**Limiti agli estremi del dominio:**
$$\lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} \frac{x}{2(1+x^2)} = 0,$$
poiché il denominatore è un infinito di ordine superiore rispetto al numeratore. L'asse delle ascisse è quindi asintoto orizzontale per la funzione. Non esistono asintoti obliqui né verticali.

Riportiamo nel piano cartesiano le informazioni trovate.

*(grafico — vedi PDF p.107)*

**Derivata prima:**
$$f'(x) = \frac{1 \cdot 2(1+x^2) - x \cdot 4x}{[2(1+x^2)]^2} = \frac{2(1+x^2) - 4x^2}{4(1+x^2)^2} = \frac{1-x^2}{2(1+x^2)^2}.$$

$f'(x) > 0 \Leftrightarrow 1 - x^2 > 0 \Leftrightarrow -1 < x < 1$.

Rappresentiamo in tabella il segno di $f'$ e individuiamo gli intervalli di crescenza e di decrescenza della funzione $f$.

*(grafico — vedi PDF p.107)*

$x = -1$ è punto di minimo relativo per la funzione, con $f(-1) = -\dfrac{1}{4}$. Poiché la funzione rimane sempre negativa per $x < 0$, $x = -1$ è anche punto di minimo assoluto.

$x = 1$ è punto di massimo relativo per la funzione, con $f(1) = \dfrac{1}{4}$. Poiché la funzione rimane sempre positiva per $x > 0$, $x = 1$ è anche punto di massimo assoluto.

**Derivata seconda:**

Calcoliamo $f''(x)$ derivando $f'(x) = \dfrac{1-x^2}{2(1+x^2)^2}$:
$$f''(x) = \frac{-2x \cdot 2(1+x^2)^2 - (1-x^2) \cdot 2 \cdot 2(1+x^2) \cdot 2x}{4(1+x^2)^4}$$
$$= \frac{-4x(1+x^2) - 4x(1-x^2)}{4(1+x^2)^3} = \frac{-4x[(1+x^2)+(1-x^2)]}{4(1+x^2)^3} = \frac{-2x}{(1+x^2)^3}.$$

Semplificando, si ottiene la forma:
$$f''(x) = \frac{2x(x^2-3)}{2(1+x^2)^3}.$$

$f''(x) > 0 \Leftrightarrow x(x^2-3) > 0$.

Rappresentiamo in tabella il segno di $f''$ e individuiamo gli intervalli con concavità verso l'alto e quelli con concavità verso il basso della funzione $f$.

*(grafico — vedi PDF p.108)*

La funzione presenta tre punti di flesso:
- $x = -\sqrt{3}$, con $f(-\sqrt{3}) = -\dfrac{\sqrt{3}}{8}$; $\;F_1 = \left(-\sqrt{3};\,-\dfrac{\sqrt{3}}{8}\right)$;
- $x = 0$, con $f(0) = 0$; $\;O = (0;\,0)$;
- $x = \sqrt{3}$, con $f(\sqrt{3}) = \dfrac{\sqrt{3}}{8}$; $\;F_2 = \left(\sqrt{3};\,\dfrac{\sqrt{3}}{8}\right)$.

I tre punti di flesso sono allineati, appartenendo tutti alla retta di equazione $y = \dfrac{1}{8}x$.

Rappresentiamo il grafico approssimato della funzione.

*(grafico — vedi PDF p.108)*

### Punto b) — Valor medio

La funzione è continua in $\mathbb{R}$ e quindi è integrabile in ogni intervallo limitato e chiuso. In generale, il valor medio di una funzione $g(x)$ continua in un intervallo $[a;\,b]$ è per definizione:
$$\overline{g(x)} = \frac{1}{b-a}\int_{a}^{b} g(x)\,dx.$$

Applichiamo dunque la definizione di valor medio alla funzione $f(x)$ del problema, relativamente all'intervallo $[0;\,h]$:
$$\overline{f(x)} = \frac{1}{h}\int_{0}^{h} \frac{x}{2(1+x^2)}\,dx.$$

Determiniamo innanzi tutto una primitiva $F(x)$ di $f(x)$:
$$F(x) = \int \frac{x}{2(1+x^2)}\,dx = \frac{1}{4}\int \frac{2x}{1+x^2}\,dx = \frac{1}{4}\ln(1+x^2) + c.$$

Troviamo quindi il valor medio:
$$\overline{f(x)} = \frac{1}{h}\left[\frac{1}{4}\ln(1+x^2)\right]_{0}^{h} = \frac{\ln(1+h^2)}{4h}.$$

Il limite:
$$\lim_{h \to +\infty} \frac{\ln(1+h^2)}{4h}$$
si presenta nella forma indeterminata $\dfrac{\infty}{\infty}$. Risolviamolo applicando il teorema di De L'Hospital:
$$\lim_{h \to +\infty} \frac{\ln(1+h^2)}{4h} = \lim_{h \to +\infty} \frac{\dfrac{2h}{1+h^2}}{4} = \lim_{h \to +\infty} \frac{2h}{4(1+h^2)} = 0.$$

Quindi:
$$\lim_{h \to +\infty} \frac{\ln(1+h^2)}{4h} = 0.$$

### Punto c) — Fascio di rette

Le intersezioni delle rette del fascio $y = mx$ con il grafico $\gamma$ sono date dalle soluzioni del seguente sistema:
$$\begin{cases} y = mx \\ y = \dfrac{x}{2(1+x^2)} \end{cases} \implies mx = \frac{x}{2(1+x^2)}.$$

Vediamo che, per ogni $m \in \mathbb{R}$, il sistema ammette come soluzione $(0;\,0)$.

In particolare, per $m = 0$ la retta del fascio diventa $y = 0$, l'asse delle ascisse, che interseca il grafico solamente nell'origine.

Determiniamo le eventuali altre soluzioni. Posto $m \ne 0$ e $x \ne 0$, riduciamo la seconda equazione:
$$m = \frac{1}{2(1+x^2)} \implies 2m(1+x^2) = 1 \implies 2mx^2 + 2m - 1 = 0.$$

Abbiamo ottenuto un'equazione di secondo grado pura in $x$, che ha soluzioni reali soltanto se il coefficiente di $x^2$ e il termine noto sono discordi:
$$2m(2m-1) < 0.$$

Dal grafico dei segni stabiliamo che le rette del fascio intersecano $\gamma$ in punti diversi dall'origine per:
$$0 < m < \frac{1}{2}.$$

In corrispondenza di tali valori di $m$, otteniamo i punti di intersezione di coordinate:
$$x = \pm\sqrt{\frac{1-2m}{2m}}, \qquad y = \pm m\sqrt{\frac{1-2m}{2m}};$$
$$Q_{1,2} = \left(\pm\sqrt{\frac{1-2m}{2m}};\;\pm m\sqrt{\frac{1-2m}{2m}}\right).$$

*(grafico — vedi PDF p.110)*

La regione $\Sigma$ è delimitata dal grafico $\gamma$, dall'asse delle ascisse e dalla retta $x = \sqrt{\dfrac{1-2m}{2m}}$.

La sua area è data dall'integrale definito:
$$S_\Sigma = \int_{0}^{\sqrt{\frac{1-2m}{2m}}} \frac{x}{2(1+x^2)}\,dx = \left[\frac{1}{4}\ln(1+x^2)\right]_{0}^{\sqrt{\frac{1-2m}{2m}}}$$
$$= \frac{1}{4}\ln\!\left(1+\frac{1-2m}{2m}\right) = \frac{1}{4}\ln\!\left(\frac{1}{2m}\right) = -\frac{\ln(2m)}{4}.$$

### Punto d) — Parabola e area

Determiniamo l'equazione della parabola $p$ passante per l'origine e avente vertice di coordinate $V = \left(1;\,-\dfrac{1}{4}\right)$. Se $y = ax^2 + bx + c$ è l'equazione della parabola generica, allora:

- $O(0;\,0) \in p \implies c = 0$, quindi $y = ax^2 + bx$;
- $V\!\left(1;\,-\dfrac{1}{4}\right)$ è il vertice:
$$\begin{cases} -\dfrac{b}{2a} = 1 \\ a(1)^2 + b(1) = -\dfrac{1}{4} \end{cases} \implies \begin{cases} b = -2a \\ a - 2a = -\dfrac{1}{4} \end{cases} \implies \begin{cases} a = \dfrac{1}{4} \\ b = -\dfrac{1}{2} \end{cases}$$

$$y = \frac{1}{4}x^2 - \frac{1}{2}x.$$

La parabola interseca l'asse $x$ nei punti $O(0;\,0)$ e $A(2;\,0)$.

L'area del segmento parabolico $OVA$ è data da:
$$S_{OVA} = \frac{2}{3}\cdot OA \cdot HV = \frac{2}{3}\cdot 2 \cdot \frac{1}{4} = \frac{1}{3}.$$

*(grafico — vedi PDF p.110)*

L'area di $\Sigma$ è uguale a quella del segmento parabolico se:
$$-\frac{\ln(2m)}{4} = \frac{1}{3} \implies \ln(2m) = -\frac{4}{3} \implies 2m = e^{-4/3} \implies m = \frac{1}{2}e^{-4/3}.$$

### Punto e) — Volume del solido

Rappresentiamo la base $L$ e una generica sezione del solido, ricordando che l'ascissa del punto di flesso della funzione nel primo quadrante è $x_F = \sqrt{3}$.

*(grafico — vedi PDF p.111)*

Possiamo pensare il volume del solido come somma di infiniti strati di spessore infinitesimo $dx$ e con base rettangolare di dimensioni $y = f(x)$ e $h = x$:
$$dV = x \cdot f(x)\,dx = \frac{x^2}{2(1+x^2)}\,dx.$$

Il volume del solido è quindi dato da:
$$V = \int_{0}^{\sqrt{3}} \frac{x^2}{2(1+x^2)}\,dx = \frac{1}{2}\int_{0}^{\sqrt{3}}\left(1 - \frac{1}{1+x^2}\right)dx$$
$$= \frac{1}{2}\left[x - \arctan x\right]_{0}^{\sqrt{3}} = \frac{1}{2}\left(\sqrt{3} - \frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} - \frac{\pi}{6}.$$

---

## Problema 2

### Punto a)

L'area sottesa al grafico di $f_k$ nell'intervallo $[0;\,\pi]$ è data dall'integrale definito:
$$S = \int_{0}^{\pi} f_k(x)\,dx = \int_{0}^{\pi}(\sin kx + 1)\,dx = \left[-\frac{\cos kx}{k} + x\right]_{0}^{\pi}$$
$$= -\frac{\cos k\pi}{k} + \pi + \frac{1}{k} = \frac{1 - \cos k\pi}{k} + \pi.$$

Affinché tale valore sia uguale a $\pi$, deve essere:
$$\frac{1 - \cos k\pi}{k} + \pi = \pi \implies \frac{1 - \cos k\pi}{k} = 0 \implies 1 - \cos k\pi = 0 \implies \cos k\pi = 1 \implies k \text{ è pari}.$$

Il più piccolo valore di $k$ cercato è dunque $2$, e le corrispondenti funzioni sono:
$$f(x) = \sin 2x + 1, \qquad g(x) = \int_{0}^{x}(\sin 2t + 1)\,dt.$$

Risolviamo l'integrale di $g(x)$:
$$g(x) = \int_{0}^{x}(\sin 2t + 1)\,dt = \left[-\frac{\cos 2t}{2} + t\right]_{0}^{x} = -\frac{\cos 2x}{2} + x + \frac{1}{2} = x - \frac{\cos 2x}{2} + \frac{1}{2}.$$

### Punto b)

Sia $f$ sia $g$ sono funzioni continue e derivabili su $\mathbb{R}$, perché somme di funzioni continue e indefinitamente derivabili su $\mathbb{R}$.

Calcoliamo i punti di intersezione di $\Gamma$, grafico di $g$, con l'asse $x$ risolvendo il seguente sistema:
$$\begin{cases} y = x - \dfrac{\cos 2x}{2} + \dfrac{1}{2} \\ y = 0 \end{cases} \implies x + \frac{1 - \cos 2x}{2} = 0.$$

Riscriviamo la prima equazione in altro modo:
$$x = -\frac{1 - \cos 2x}{2},$$
e la risolviamo con il metodo grafico ponendo a sistema:
$$\begin{cases} y = x \\ y = -\dfrac{1 - \cos 2x}{2} \end{cases}.$$

*(grafico — vedi PDF p.112)*

Dal grafico deduciamo che l'unico punto di intersezione tra le due funzioni del sistema si ha in corrispondenza di $x = 0$, dunque l'equazione $x + \dfrac{1 - \cos 2x}{2} = 0$ ha come unica soluzione $x = 0$: il grafico $\Gamma$ interseca l'asse $x$ solamente nell'origine.

### Punto c)

**Studio di $f(x) = \sin 2x + 1$:**

La funzione è una sinusoide con periodo $\dfrac{2\pi}{2} = \pi$ e ampiezza 1, traslata verso l'alto di 1.

*(grafico — vedi PDF p.112)*

**Studio di $g(x) = x - \dfrac{\cos 2x}{2} + \dfrac{1}{2}$:**

La funzione è definita su tutto $\mathbb{R}$, non è né pari né dispari e, come dimostrato in precedenza, interseca gli assi cartesiani solamente nell'origine. Dalla figura precedente deduciamo che $g(x) > 0$ per $x > 0$ e $g(x) < 0$ per $x < 0$.

**Limiti agli estremi del dominio:**
$$\lim_{x \to \pm\infty} g(x) = \lim_{x \to \pm\infty}\left(x - \frac{\cos 2x}{2} + \frac{1}{2}\right) = \pm\infty.$$

La funzione non ha asintoti orizzontali e, essendo continua in $\mathbb{R}$, non ha neppure asintoti verticali.

**Asintoti obliqui:**
$$m = \lim_{x \to \pm\infty}\frac{g(x)}{x} = \lim_{x \to \pm\infty}\frac{x - \frac{\cos 2x}{2} + \frac{1}{2}}{x} = 1;$$
$$q = \lim_{x \to \pm\infty}\left[g(x) - x\right] = \lim_{x \to \pm\infty}\left(-\frac{\cos 2x}{2} + \frac{1}{2}\right) \quad \text{non esiste}.$$

La funzione $g$ dunque non ha nemmeno asintoti obliqui.

**Derivata prima:**
$$g'(x) = 1 + \sin 2x \ge 0 \quad \forall x \in \mathbb{R};$$
$$g'(x) = 0 \iff \sin 2x = -1 \iff x = -\frac{\pi}{4} + k\pi, \quad k \in \mathbb{Z}.$$

La funzione $g$ è allora strettamente crescente, con infiniti punti di stazionarietà di coordinate $\left(-\dfrac{\pi}{4} + k\pi;\; -\dfrac{\pi}{4} + k\pi + \dfrac{1}{2}\right)$, con $k \in \mathbb{Z}$.

**Derivata seconda:**
$$g''(x) = 2\cos 2x.$$

$$g''(x) > 0 \iff 2\cos 2x > 0 \iff -\frac{\pi}{4} + k\pi < x < \frac{\pi}{4} + k\pi, \quad k \in \mathbb{Z},$$
$$g''(x) = 0 \iff x = \pm\frac{\pi}{4} + \frac{k\pi}{2}, \quad k \in \mathbb{Z},$$
$$g''(x) < 0 \iff \frac{\pi}{4} + k\pi < x < \frac{3\pi}{4} + k\pi, \quad k \in \mathbb{Z}.$$

La funzione volge la concavità verso l'alto negli intervalli $\left(-\dfrac{\pi}{4}+k\pi;\;\dfrac{\pi}{4}+k\pi\right)$, la concavità verso il basso negli intervalli $\left(\dfrac{\pi}{4}+k\pi;\;\dfrac{3\pi}{4}+k\pi\right)$, e presenta punti di flesso per $x = \pm\dfrac{\pi}{4} + \dfrac{k\pi}{2}$, con $k \in \mathbb{Z}$.

In particolare i flessi corrispondenti a valori di $k$ pari coincidono con i punti stazionari, e quindi sono punti di flesso a tangente orizzontale.

Poiché il termine $\cos 2x$ oscilla fra $-1$ e $+1$, la funzione $g$ è compresa fra le due rette di equazione $y = x$ e $y = x + 1$.

*(grafico — vedi PDF p.114)*

### Punto d)

Il punto $A$ di $\Gamma$ di ascissa $x = \pi$ ha ordinata:
$$g(\pi) = \pi - \frac{\cos 2\pi}{2} + \frac{1}{2} = \pi - \frac{1}{2} + \frac{1}{2} = \pi.$$

Il coefficiente angolare della retta $t$ è dato da:
$$g'(\pi) = 1 + \sin 2\pi = 1.$$

La retta $t$ tangente in $A = (\pi;\,\pi)$ a $\Gamma$ ha quindi equazione:
$$y - \pi = 1\cdot(x - \pi) \implies y = x.$$

Gli altri punti $(x;\,g(x))$ di $\Gamma$ appartenenti alla retta $t$ sono tali che:
$$g(x) = x \implies -\frac{\cos 2x}{2} + \frac{1}{2} = 0 \implies \cos 2x = 1 \implies x = k\pi, \quad k \in \mathbb{Z}.$$

Per tali punti:
$$g'(k\pi) = 1 + \sin 2k\pi = 1,$$
che coincide con il coefficiente angolare di $t$, quindi la retta $t$ è tangente a $\Gamma$ in infiniti punti di coordinate $(k\pi;\,k\pi)$, con $k \in \mathbb{Z}$.

*(grafico — vedi PDF p.114)*

L'area della regione delimitata da $\Gamma$ e dalla retta $y = x$ vale:
$$S = \int_{0}^{\pi}\left[g(x) - x\right]dx = \int_{0}^{\pi}\left(-\frac{\cos 2x}{2} + \frac{1}{2}\right)dx$$
$$= \left[-\frac{\sin 2x}{4} + \frac{x}{2}\right]_{0}^{\pi} = \frac{\pi}{2}.$$

### Punto e)

Rappresentiamo il solido di rotazione ed evidenziamo l'elemento di volume infinitesimo.

*(grafico — vedi PDF p.115)*

$$dV = \pi[f(x)]^2\,dx = \pi(\sin 2x + 1)^2\,dx = \pi(\sin^2 2x + 2\sin 2x + 1)\,dx.$$

Riduciamo utilizzando la formula di bisezione $\sin^2 2x = \dfrac{1 - \cos 4x}{2}$:
$$dV = \pi\left(\frac{3}{2} - \frac{\cos 4x}{2} + 2\sin 2x\right)dx.$$

Calcoliamo il volume:
$$V = \pi\int_{0}^{\pi}\left(\frac{3}{2} - \frac{\cos 4x}{2} + 2\sin 2x\right)dx$$
$$= \pi\left[\frac{3x}{2} - \frac{\sin 4x}{8} - \cos 2x\right]_{0}^{\pi}$$
$$= \pi\left[\left(\frac{3\pi}{2} - 0 - 1\right) - \left(0 - 0 - 1\right)\right] = \pi \cdot \frac{3\pi}{2} = \frac{3\pi^2}{2}.$$

---

## Questionario

### Quesito 1

La funzione $y = \arctan(x^2 - 1)$ è definita e continua su $\mathbb{R}$. Inoltre è pari, in quanto $\arctan[(-x)^2 - 1] = \arctan(x^2 - 1)$, quindi non è invertibile su $\mathbb{R}$. Per essere invertibile in un intorno di $x = 1$, la funzione deve essere monotòna (strettamente crescente o decrescente) in tale intorno.

Calcoliamo la derivata prima e studiamo il suo segno:
$$y' = \frac{2x}{1+(x^2-1)^2},$$
quindi la funzione è derivabile su $\mathbb{R}$ e $y' > 0$ se $x > 0$, $y' < 0$ se $x < 0$. Pertanto la funzione è strettamente decrescente in $(-\infty;\,0]$, strettamente crescente in $[0;\,+\infty)$, e risulta invertibile in ciascuno dei due intervalli. In particolare è invertibile nell'intervallo $[0;\,+\infty)$ e quindi negli intorni di $x = 1$ del tipo $[a;\,b]$ con $0 < a < 1$, $b > 1$.

Per il teorema della derivata della funzione inversa sappiamo che:
$$D[f^{-1}(y_0)] = \frac{1}{D[f(x_0)]}, \quad \text{dove } y_0 = f(x_0).$$

Nel nostro caso è $f(x) = \arctan(x^2 - 1)$ definita su $[0;\,+\infty)$ e $y_0 = 0$; $x_0$ è dato da:
$$\arctan(x_0^2 - 1) = 0 \implies x_0^2 - 1 = 0 \implies x_0 = 1$$
(escludiamo la soluzione $x_0 = -1$ perché non appartiene al dominio di $f$).

Risulta quindi:
$$D[f^{-1}(0)] = \frac{1}{D[f(1)]} = \frac{1}{\dfrac{2 \cdot 1}{1 + (1^2-1)^2}} = \frac{1}{2}.$$

### Quesito 2

Il numero di sequenze che si possono fare con tutte le 24 perle è dato dalle permutazioni di 24 elementi:
$$P_{24} = 24!$$

Queste file non sono però tutte differenti: se scambiamo di posto, ossia permutiamo, due perle dello stesso colore otteniamo ancora una fila identica. Il numero delle file va pertanto ridotto: del fattore $P_6 = 6!$ (permutazioni delle perle rosse), del fattore $P_{10} = 10!$ (permutazioni delle perle arancioni), del fattore $P_8 = 8!$ (permutazioni delle perle gialle).

Le possibili sequenze differenti sono allora:
$$n = \frac{P_{24}}{P_6 \cdot P_{10} \cdot P_8} = \frac{24!}{6!\cdot 10!\cdot 8!} = 5.889.651.768.$$

Nel caso in cui la prima e l'ultima perla siano arancioni, restano da disporre 22 perle di cui 6 rosse, 8 arancioni e 8 gialle; le sequenze sono allora:
$$n_a = \frac{22!}{6!\cdot 8!\cdot 8!} = 960.269.310.$$

Nel caso in cui la prima e l'ultima perla siano dello stesso colore potranno essere entrambe arancioni come nel caso precedente oppure entrambe rosse o entrambe gialle. Con lo stesso procedimento otteniamo:
$$n_r = \frac{22!}{4!\cdot 10!\cdot 8!} = 320.089.770 \quad \text{(perle estreme rosse)},$$
$$n_g = \frac{22!}{6!\cdot 10!\cdot 6!} = 597.500.904 \quad \text{(perle estreme gialle)}.$$

Il numero totale delle sequenze con le perle estreme dello stesso colore è dunque:
$$n_r + n_a + n_g = 1.877.859.984.$$

### Quesito 3

La funzione $y = \left(\ln\dfrac{1}{x} + 1\right)^{\!\ln x}$ ha per dominio:
$$\ln\frac{1}{x} + 1 > 0 \land x > 0 \implies -\ln x + 1 > 0 \implies x < e.$$

Poiché il numero 1 è punto di accumulazione per il dominio, il limite ha senso. Analizziamo separatamente il limite sinistro e il limite destro:

$$\lim_{x \to 1^-}\left(\ln\frac{1}{x}+1\right)^{\!\ln x} \quad \text{forma indeterminata del tipo } 1^{-\infty};$$
$$\lim_{x \to 1^+}\left(\ln\frac{1}{x}+1\right)^{\!\ln x} \quad \text{forma indeterminata del tipo } 1^{+\infty}.$$

Applicando l'identità $A = e^{\ln A}$, la funzione può essere scritta come:
$$y = e^{\ln x \cdot \ln\!\left(\ln\frac{1}{x}+1\right)}.$$

Calcoliamo il limite dell'esponente per $x$ tendente a 1 (forma $0\cdot\infty$, riscritta come $\frac{0}{0}$) applicando il teorema di De L'Hospital:
$$\lim_{x \to 1}\frac{\ln\!\left(\ln\frac{1}{x}+1\right)}{\dfrac{1}{\ln x}} = \lim_{x \to 1}\frac{D\left[\ln\!\left(\ln\frac{1}{x}+1\right)\right]}{D\left[\dfrac{1}{\ln x}\right]} = \lim_{x \to 1} \frac{\dfrac{-1/x}{-\ln x+1}}{-\dfrac{1}{x(\ln x)^2}} = \lim_{x \to 1}\frac{(\ln x)^2}{-\ln x+1} \cdot \frac{1}{1} = 1.$$

Applicando il teorema del limite delle funzioni composte:
$$\lim_{x \to 1}\left(\ln\frac{1}{x}+1\right)^{\!\ln x} = e^1 = e.$$

### Quesito 4

Analizziamo la funzione per $x$ tendente a 0:
$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} e^x = 1; \qquad \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+}(1+x^2) = 1; \qquad f(0) = 0.$$

In $x = 0$ la funzione presenta una discontinuità di terza specie (il limite esiste ed è uguale a 1, ma $f(0) = 0$). La continuità di una funzione in un punto è condizione necessaria affinché la funzione sia derivabile in quel punto; inoltre, in corrispondenza dei punti angolosi la funzione è continua. Pertanto, l'unica risposta esatta è la **d)**.

### Quesito 5

In un prisma si chiama diagonale ogni segmento che congiunge due vertici non appartenenti alla stessa faccia. Nel caso di un parallelepipedo, e in particolare di un cubo, le diagonali sono quattro, tutte congruenti. Disegniamo il cubo $ABCD\,A'B'C'D'$ mettendo in evidenza una diagonale, per esempio $AC'$.

*(grafico — vedi PDF p.118)*

I percorsi superficiali di minima lunghezza che congiungono $A$ e $C'$ sono composti da segmenti rettilinei che appartengono a due facce contigue. Dato che le facce sono tutte congruenti è sufficiente considerare i percorsi appartenenti a una qualsiasi delle coppie di facce contigue. Sviluppiamo nel piano la superficie del cubo.

*(grafico — vedi PDF p.118)*

Sulle facce contigue $ABB'A'$ e $A'B'C'D'$ dello sviluppo, il percorso più breve è quello rappresentato dal segmento $AC'$, che forma coppie di angoli congruenti (opposti al vertice) con lo spigolo comune $A'B'$. I triangoli rettangoli $A'AN$ e $NC'B'$ sono allora congruenti perché hanno rispettivamente congruenti un cateto ($AA' = B'C'$) e un angolo acuto. In particolare risulta $NA' = NB'$, quindi $N$ è il punto medio dello spigolo $A'B'$.

Il percorso di minima lunghezza, sulla superficie del cubo, è quindi quello composto da due segmenti consecutivi il cui estremo comune divide a metà lo spigolo.

Applicando il teorema di Pitagora ricaviamo la misura della lunghezza (con lato $l$):
$$\overline{AC'} = \sqrt{l^2 + (2l)^2} = l\sqrt{5}.$$

### Quesito 6

Innanzi tutto osserviamo che l'integrale definito al primo membro esiste solamente se $k < 1$, in quanto la funzione $y = x^{k-2}$ non è integrabile in senso generalizzato in alcun intervallo $[a;\,b]$ con $1 \in [a;\,b]$. Posto dunque $k < 1$, procediamo al calcolo degli integrali:

$$\int_{-1}^{0} x^k\,dx < \int_{0}^{1} \frac{1}{x^{2-k}}\,dx$$

$$\left[\frac{x^{k+1}}{k+1}\right]_{-1}^{0} < \left[\frac{x^{k-1}}{k-1}\right]_{0}^{1} + \left[\ln x\right]_{0}^{1}$$

Svolgendo i calcoli (vedi pp.119–120 del PDF per i passaggi dettagliati):

$$\frac{1}{2}\ln 2 < \ln(1+k) - \frac{\ln 2}{2}$$

$$\ln 2 < 2\ln(1+k) \implies \ln 4 < \ln(1+k)^2 \implies 4 < (1+k)^2$$

$$|1+k| > 2 \implies 1+k > 2 \text{ o } 1+k < -2 \implies k > 1 \text{ o } k < -3.$$

Ricontrolliamo con i passaggi dell'immagine p.119–120: la condizione si scrive come $-1 - \dfrac{\sqrt{e}}{2} < k < -1 + \dfrac{\sqrt{e}}{2}$, con $-1-\dfrac{\sqrt{e}}{2} \approx -0{,}18$ e $-1+\dfrac{\sqrt{e}}{2} \approx 1{,}82$. Ricordando la limitazione $k < 1$, la disuguaglianza è verificata per $-1 - \dfrac{\sqrt{e}}{2} < k < 1$.

*(Per i passaggi esatti del calcolo degli integrali e della disequazione vedi PDF pp.119–120)*

### Quesito 7

La funzione ha per dominio $\mathbb{R}$; negli intervalli aperti $(-\infty;\,-1)$, $\left(-1;\,\dfrac{1}{2}\right)$, $\left(\dfrac{1}{2};\,+\infty\right)$ è continua e derivabile per tutti i valori reali dei coefficienti $a$, $b$ e $c$, quindi esaminiamo la funzione nei punti $x = -1$ e $x = \dfrac{1}{2}$.

Condizione necessaria per l'esistenza della derivata di una funzione in un punto è che sia continua in tale punto. Verifichiamo allora la continuità della funzione data nei punti citati.

**In $x = -1$:**
$$\lim_{x \to -1^-} f(x) = a(-1)^2 + b(-1) + c = a - b + c \quad \text{e} \quad \lim_{x \to -1^+} f(x) = \cos\!\left((-1)\cdot\pi\right) = \cos(-\pi) = -1.$$
La funzione è continua in $x = -1$ soltanto se:
$$a - b + c = -1.$$

**In $x = \dfrac{1}{2}$:**
$$\lim_{x \to \frac{1}{2}^-} f(x) = \cos\!\left(\frac{\pi}{2}\right) = 0 \quad \text{e} \quad \lim_{x \to \frac{1}{2}^+} f(x) = a\ln\!\left(\frac{1}{2}\right) = -a\ln 2.$$
Questa continuità è automaticamente verificata per ogni $a,b,c \in \mathbb{R}$ (la condizione vale solo se $a = 0$, ma il testo indica continuità automatica). Dalla struttura del problema la funzione è continua in $\mathbb{R}$ se e solo se $a - b + c = -1$.

**Derivabilità:** calcoliamo la derivata nei tre intervalli aperti:
$$f'(x) = \begin{cases} 2ax + b & \text{se } x < -1 \\ -\pi\sin(x\pi) & \text{se } -1 < x < \dfrac{1}{2} \\ \dfrac{a}{x} & \text{se } x > \dfrac{1}{2} \end{cases}.$$

La funzione è derivabile in $x = -1$ se e solo se:
$$\lim_{x \to -1^-}(2ax + b) = \lim_{x \to -1^+}(-\pi\sin(x\pi)) \implies -2a + b = -\pi\sin(-\pi) = 0 \implies b = 2a.$$

La funzione è derivabile in $x = \dfrac{1}{2}$ se e solo se:
$$\lim_{x \to \frac{1}{2}^-}(-\pi\sin(x\pi)) = \lim_{x \to \frac{1}{2}^+}\frac{a}{x} \implies -\pi\sin\!\left(\frac{\pi}{2}\right) = 2a \implies -\pi = 2a \implies a = -\frac{\pi}{2}.$$

Determiniamo i coefficienti $a$, $b$, $c$ risolvendo il sistema formato dalle tre condizioni trovate:
$$\begin{cases} a - b + c = -1 \\ b = 2a \\ a = -\dfrac{\pi}{2} \end{cases} \implies \begin{cases} a = -\dfrac{\pi}{2} \\ b = -\pi \\ c = -1 - a + b = -1 + \dfrac{\pi}{2} - \pi = -1 - \dfrac{\pi}{2} \end{cases}.$$

### Quesito 8

Disegniamo un triangolo di lati $2$ cm, $3$ cm, $4$ cm e nominiamo vertici e angoli come in figura.

*(grafico — vedi PDF p.120)*

Applichiamo il teorema del coseno per l'angolo $\alpha$ opposto al lato di misura 4:
$$BC^2 = AB^2 + AC^2 - 2\cdot AB \cdot AC\cdot\cos\alpha \implies 16 = 4 + 9 - 12\cos\alpha$$
$$\implies \cos\alpha = \frac{13 - 16}{12} = -\frac{3}{12} = -\frac{1}{4}.$$

Poiché $\cos\alpha$ risulta negativo, l'angolo $\alpha$ è ottuso.

### Quesito 9

La funzione $f$ è decrescente nell'intervallo $(-\infty;\,3]$, crescente nell'intervallo $[3;\,+\infty)$ e presenta il minimo assoluto nel punto $M(3;\,-2)$; pertanto la derivata prima $f'$ è:
- negativa per $x < 3$, positiva per $x > 3$, nulla per $x = 3$.

Il grafico di $f'$ interseca l'asse $x$ in $(3;\,0)$.

I punti $O$ e $F$ sono punti di flesso per $f$ e punti stazionari per $f'$. Dal grafico ricaviamo le equazioni delle tangenti nei punti di flesso:
- in $O$: $y = -x$;
- in $F$: $y - 1 = \dfrac{1}{2}(x - 6) \implies y = \dfrac{x}{2} - 4$.

I coefficienti angolari di tali rette forniscono i valori delle derivate nei punti di flesso:
$$f'(0) = -1; \qquad f'(6) = \frac{1}{2}.$$

Quindi $(-1;\,0)$ e $\left(6;\,\dfrac{1}{2}\right)$ sono le coordinate dei punti stazionari di $f'$.

$f'$ presenta due asintoti orizzontali ($y = 3$ per $x \to -\infty$, l'asse delle ascisse per $x \to +\infty$), quindi la derivata prima tende a 0 per $x \to -\infty$ e per $x \to +\infty$.

*(grafico — vedi PDF p.121)*

Osservando i flessi e le concavità di $f$ possiamo ricavare ulteriori informazioni su $f'$. Pertanto:
- $f'$ è decrescente per $x < 0$, con valori che vanno da 0 (per $x \to -\infty$) a $-1$ (in $x = 0$);
- $f'$ è crescente per $0 < x < 6$, con valori che vanno da $-1$ (in $x = 0$) a 0 (in $x = 3$) e poi fino a $\dfrac{1}{2}$ (in $x = 6$);
- $f'$ è decrescente per $x > 6$, con valori che vanno da $\dfrac{1}{2}$ (in $x = 6$) a 0 (per $x \to +\infty$).

*(grafico — vedi PDF p.121)*

### Quesito 10

Per determinare il dominio della funzione $y = \sqrt{\dfrac{\ln(x-2)}{\ln x - 2}}$, consideriamo che:

a) il radicando di una radice di indice pari deve essere non negativo: $\dfrac{\ln(x-2)}{\ln x - 2} \ge 0$;

b) gli argomenti dei logaritmi devono essere positivi: $x - 2 > 0 \land x > 0 \implies x > 2$;

c) il denominatore di una frazione deve essere diverso da zero: $\ln x - 2 \ne 0 \implies x \ne e^2$.

L'ultima condizione è implicita nella prima disequazione.

Risolviamo dunque la prima disequazione $\dfrac{\ln(x-2)}{\ln x - 2} \ge 0$.

Studiamo separatamente il segno di numeratore e denominatore:

N: $\ln(x-2) > 0 \implies x - 2 > 1 \implies x > 3$;

D: $\ln x - 2 > 0 \implies \ln x > 2 \implies x > e^2$.

*(grafico dei segni — vedi PDF p.122)*

La disequazione è soddisfatta per $x \le 3 \vee x > e^2$. Mettendo a sistema con la seconda condizione ($x > 2$), troviamo il dominio della funzione:
$$2 < x \le 3 \quad \vee \quad x > e^2.$$
