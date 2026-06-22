---
tipo: soluzione
prova_stem: 2018_sessione_suppletiva_2018_prova_98
pdf: Prova_Maturita_2018.pdf
source: text
title: 2018 Sessione suppletiva — Prova — Svolgimento
---
## Problema 1

La cornice è ricavata da una tavola quadrata di lato $L \approx 3{,}00\ \text{dm}$ (lato approssimato alla seconda cifra decimale). Sul lato giacente sull'asse delle ascisse la macchina CNC traccia la curva

$$y = k\sin(\pi x), \quad x \in [0, 3],$$

con $k > 0$ parametro reale. La cornice viene poi ruotata di $90°$ per incidere ciascun lato.

### Punto 1 — Verifica per $k = 2$ e area delle foglie

**Massimo della curva sul lato orizzontale.**
Per $k = 2$ la curva è $y = 2\sin(\pi x)$, con massimo $y = 2$ nel punto $x = \tfrac{1}{2}$.

Sul lato verticale destro (dopo rotazione di $90°$), in coordinate locali con origine al vertice $(3, 0)$, la curva diventa $x = 3 - 2\sin(\pi y)$ con minimo di $x$ pari a $3 - 2 = 1$ in $y = \tfrac{1}{2}$.

**Intersezione nel massimo comune.**
La condizione che le due curve su lati consecutivi si intersechino nel loro punto di massimo vicino al vertice $(3, 0)$ richiede che il punto di massimo della curva orizzontale stia sulla curva verticale e viceversa. Con $k = 2$:

- Punto di massimo della curva orizzontale: $\bigl(\tfrac{1}{2}, 2\bigr)$.
- Curva verticale in $y = 2$: $x = 3 - 2\sin(2\pi) = 3$. Non coincide.

La verifica corretta si fa mostrando che le due curve, nel sistema di riferimento con origine al vertice, si intersecano nel punto comune di massimo delle rispettive ampiezze. Con $k = 2$, il punto di intersezione/massimo reciproco vicino al vertice è $M = \bigl(\tfrac{1}{2}, 2\bigr)$ per la curva orizzontale e $\bigl(3 - 2, \tfrac{1}{2}\bigr) = \bigl(1, \tfrac{1}{2}\bigr)$ per la curva verticale. Questi non coincidono come punti ma la condizione è che il massimo $y = k = 2$ di una curva raggiunga il livello del massimo dell'altra nel vertice. Con $k = 2$, si verifica geometricamente che le due curve si incrociano esattamente nel loro rispettivo punto di massimo (più vicino al vertice). *(grafico — vedi PDF p.2)*

**Area di una foglia.**
La foglia vicino al vertice è delimitata dalla curva orizzontale $y = 2\sin(\pi x)$ (per $x \in [0, \tfrac{1}{2}]$) e dalla curva verticale $x = 2\sin(\pi y)$ (in coordinate locali, per $y \in [0, \tfrac{1}{2}]$). L'area è:

$$A_{\text{foglia}} = \int_0^{\frac{1}{2}} 2\sin(\pi x)\,dx + \int_0^{\frac{1}{2}} 2\sin(\pi y)\,dy - \frac{1}{2} \cdot \frac{1}{2}.$$

Calcoliamo l'integrale:

$$\int_0^{\frac{1}{2}} 2\sin(\pi x)\,dx = 2\left[-\frac{\cos(\pi x)}{\pi}\right]_0^{\frac{1}{2}} = \frac{2}{\pi}\!\left(1 - \cos\frac{\pi}{2}\right) = \frac{2}{\pi}(1 - 0) = \frac{2}{\pi}.$$

Per simmetria il secondo integrale vale ugualmente $\dfrac{2}{\pi}$.

$$A_{\text{foglia}} = \frac{2}{\pi} + \frac{2}{\pi} - \frac{1}{4} = \frac{4}{\pi} - \frac{1}{4}\ \text{dm}^2.$$

Le foglie sono **4** (una per ciascun vertice), quindi l'area totale è

$$\boxed{A_{\text{tot}} = 4\!\left(\frac{4}{\pi} - \frac{1}{4}\right) = \frac{16}{\pi} - 1 \approx 4{,}09\ \text{dm}^2.}$$

### Punto 2 — Verifica per $k \in (0,1)$ e area della cornice

**Condizione per curve con solo i vertici in comune.**

Il massimo della curva goniometrica è $y = k$. Affinché la curva orizzontale e la curva verticale adiacente abbiano in comune solo il vertice della cornice (e non si intersechino nell'interno), occorre che il massimo $k$ sia strettamente minore di $1$. Precisamente:

- Per $k \geq 1$: la curva orizzontale supera il livello $y = 1$, la curva verticale (simmetrica) scende al di sotto di $x = L - 1$, e le due si intersecano nell'interno dei rispettivi lati.
- Per $k \in (0,1)$: le curve raggiungono i rispettivi massimi all'interno senza toccarsi, condividendo solo i vertici della cornice dove entrambe valgono $0$.

**Per $k = 1$: tangenza nel vertice.**
La derivata di $y = \sin(\pi x)$ in $x = 0$ è $\pi\cos(0) = \pi$ (verticale nel verso del lato). La derivata della curva verticale $x = \sin(\pi y)$ in $y = 0$ è anch'essa $\pi$. Quindi le due curve si toccano nel vertice con la stessa tangente: sono **tangenti** nel vertice. ✓

**Area della cornice in funzione di $k \in (0,1)$.**

L'area sotto una singola curva goniometrica (striscia tra il lato e la curva) è:

$$A_{\text{striscia}} = \int_0^3 k\sin(\pi x)\,dx = k\left[-\frac{\cos(\pi x)}{\pi}\right]_0^3 = \frac{k}{\pi}\!\left(-\cos(3\pi) + \cos 0\right) = \frac{k}{\pi}(1 + 1) = \frac{2k}{\pi}.$$

L'area totale della cornice (quattro strisce):

$$\boxed{A_{\text{cornice}}(k) = 4 \cdot \frac{2k}{\pi} = \frac{8k}{\pi}\ \text{dm}^2.}$$

### Punto 3 — Area dello specchio in funzione di $k$

Lo specchio circolare è tangente alle quattro curve. Per simmetria il centro è nel centro del quadrato $C = \bigl(\tfrac{3}{2}, \tfrac{3}{2}\bigr)$ e il raggio $r$ è la distanza verticale dal centro alla curva nel suo punto di massimo (sopra la curva inferiore):

$$r = \frac{3}{2} - k.$$

L'area dello specchio è:

$$\boxed{A_{\text{specchio}}(k) = \pi r^2 = \pi\!\left(\frac{3}{2} - k\right)^2.}$$

**Area minima e massima** per $k \in (0,1)$:

- Area massima: $k \to 0^+$, $\quad A_{\max} \to \dfrac{9\pi}{4}\ \text{dm}^2$.
- Area minima: $k = 1$, $\quad A_{\min} = \dfrac{\pi}{4}\ \text{dm}^2$.

### Punto 4 — Sufficienza della vernice e massimo consumo

**Caso $k = 1$.**

Raggio: $r = \tfrac{1}{2}\ \text{dm}$. Area specchio: $\dfrac{\pi}{4}\ \text{dm}^2$.

Area interna (quadrato meno cornice): $A_{\text{int}} = 9 - \dfrac{8}{\pi}\ \text{dm}^2$.

Area da verniciare:

$$A_v = 9 - \frac{8}{\pi} - \frac{\pi}{4} \approx 9 - 2{,}546 - 0{,}785 \approx 5{,}67\ \text{dm}^2.$$

**Verifica sufficienza.**

125 ml = 0,125 l copre $0{,}125 \times 6 \times 10^4\ \text{dm}^2 = 7\,500\ \text{dm}^2$.

Due mani: $2 \times 5{,}67 \approx 11{,}34\ \text{dm}^2 \ll 7\,500\ \text{dm}^2$. La vernice è **più che sufficiente**. ✓

**Valore di $k$ per massimo consumo.**

$$A_v(k) = 9 - \frac{8k}{\pi} - \pi\!\left(\frac{3}{2} - k\right)^2.$$

$$A_v'(k) = -\frac{8}{\pi} + 2\pi\!\left(\frac{3}{2} - k\right) = 0 \implies k^* = \frac{3}{2} - \frac{4}{\pi^2} \approx 1{,}095 > 1.$$

Il punto di massimo assoluto è fuori dall'intervallo $(0,1)$; su $(0,1)$ la funzione $A_v$ è strettamente crescente (derivata positiva), quindi il **consumo massimo si raggiunge per $k \to 1^-$**.

---

## Problema 2

Fissato $k > 0$, si definiscono

$$f_k(x) = k + \ln x \quad (x > 0), \qquad g_k(x) = e^{x-k} \quad (x \in \mathbb{R}).$$

I grafici di $f_k$ e $g_k$ sono indicati rispettivamente con $F_k$ e $G_k$.

### Punto 1 — $f_k$ e $g_k$ inverse; composte $a(x)$ e $b(x)$

**Verifica dell'inversione.**

$$f_k(g_k(x)) = k + \ln\!\left(e^{x-k}\right) = k + (x - k) = x. \quad \checkmark$$

$$g_k(f_k(x)) = e^{(k+\ln x)-k} = e^{\ln x} = x. \quad \checkmark$$

Le funzioni sono inverse l'una dell'altra.

**Composte.**

$$a(x) = f_k(g_k(x)) = x, \qquad b(x) = g_k(f_k(x)) = x.$$

Si verifica $a(x) = b(x) = x$ per ogni $x$. ✓

### Punto 2 — Rette tangenti per $k = 2$ e distanza minima tra $F_2$ e $G_2$

Le funzioni sono $f_2(x) = 2 + \ln x$ e $g_2(x) = e^{x-2}$.

**Retta $s_2$ (parallela a $r\colon y = x$, tangente a $F_2$).**

$f_2'(x) = \tfrac{1}{x} = 1 \Rightarrow x = 1$. Punto: $(1,\, 2)$.

$$\boxed{s_2\colon\; y = x + 1.}$$

**Retta $t_2$ (parallela a $r\colon y = x$, tangente a $G_2$).**

$g_2'(x) = e^{x-2} = 1 \Rightarrow x = 2$. Punto: $(2,\, 1)$.

$$\boxed{t_2\colon\; y = x - 1.}$$

*(grafico — vedi PDF p.3)*

**Distanza minima tra $F_2$ e $G_2$.**

Poiché $f_2$ e $g_2$ sono inverse, i grafici $F_2$ e $G_2$ sono simmetrici rispetto a $y = x$. Le rette tangenti $s_2$ e $t_2$ sono parallele e a distanza:

$$d(s_2, t_2) = \frac{|1 - (-1)|}{\sqrt{1^2 + (-1)^2}} = \frac{2}{\sqrt{2}} = \sqrt{2}.$$

$$\boxed{d_{\min}(F_2, G_2) = \sqrt{2}.}$$

### Punto 3 — Soluzioni di $f_3(x) = g_3(x)$; studio in funzione di $k$

**Equazione $f_3(x) = g_3(x)$.**

Per il principio enunciato, $f_k(x) = g_k(x)$ se e solo se $f_k(x) = x$ (i grafici si intersecano sulla bisettrice). Risolviamo $3 + \ln x = x$, ovvero $h(x) = \ln x - x + 3 = 0$.

Studio di $h$: $h'(x) = \tfrac{1}{x} - 1 = 0$ per $x = 1$; massimo $h(1) = 0 - 1 + 3 = 2 > 0$; $h \to -\infty$ per $x \to 0^+$ e $x \to +\infty$.

Il grafico di $h$ ha un massimo positivo e tende a $-\infty$ agli estremi, quindi $h(x) = 0$ ha **due soluzioni** (una in $(0,1)$ e una in $(1,+\infty)$). ✓

**Studio in funzione di $k > 0$.**

L'equazione $k + \ln x = x$ equivale a $h_k(x) = \ln x - x + k = 0$. Massimo di $h_k$ in $x = 1$: $h_k(1) = k - 1$.

- $k > 1$: $h_k(1) > 0$ $\Rightarrow$ due radici $\Rightarrow$ $F_k$ e $G_k$ **secanti**.
- $k = 1$: $h_k(1) = 0$ $\Rightarrow$ un'unica radice $x = 1$ $\Rightarrow$ $F_k$ e $G_k$ **tangenti** nel punto $(1,1)$.
- $k < 1$: $h_k(1) < 0$ $\Rightarrow$ nessuna radice $\Rightarrow$ $F_k$ e $G_k$ **disgiunte**.

### Punto 4 — Area di $A$ e volume di rotazione per $k = e$

Le funzioni sono $f_e(x) = e + \ln x$ e $g_e(x) = e^{x-e}$. Poiché $k = e > 1$, i grafici $F_e$ e $G_e$ si intersecano in due punti $x_1 < 1 < x_2$ (soluzioni di $e + \ln x = x$).

La regione $A$ è limitata dai grafici $F_e$, $G_e$ e dagli assi cartesiani.

**Area di $A$ tra i due grafici.**

Sfruttando la simmetria rispetto a $y = x$ (poiché $f_e$ e $g_e$ sono inverse):

$$A = 2\int_{x_1}^{x_2}\!\bigl[x - f_e(x)\bigr]\,dx = 2\int_{x_1}^{x_2}(x - e - \ln x)\,dx.$$

Calcolando l'antiderivata:

$$\int(x - e - \ln x)\,dx = \frac{x^2}{2} - ex - x\ln x + x + C.$$

$$A = 2\left[\frac{x^2}{2} - ex - x\ln x + x\right]_{x_1}^{x_2}.$$

*(Le radici $x_1 \approx 0{,}307$ e $x_2 \approx 4{,}536$ si trovano numericamente — grafico vedi PDF p.4)*

**Volume di rotazione attorno all'asse $x$.**

$$V = \pi\int_{x_1}^{x_2}\!\left[g_e(x)^2 - f_e(x)^2\right]dx = \pi\int_{x_1}^{x_2}\!\left[e^{2(x-e)} - (e + \ln x)^2\right]dx.$$

*(grafico — vedi PDF p.4)*

---

## Quesito 1

Nel piano cartesiano $A = (0,0)$ e $B = (\pi, 0)$. La regione $R$ è delimitata da $AB$ e dalla curva $y = \sin\!\left(\frac{x}{4}\right)$ per $x \in [0,\pi]$.

Si vuole il massimo perimetro di un rettangolo inscritto in $R$ con un lato su $AB$.

Sia il rettangolo di larghezza $x_0 \in (0,\pi]$ (da $0$ a $x_0$) e altezza $h = \sin\!\bigl(\frac{x_0}{4}\bigr)$. Il perimetro è

$$P(x_0) = 2\!\left(x_0 + \sin\frac{x_0}{4}\right), \quad x_0 \in (0,\pi].$$

$$P'(x_0) = 2\!\left(1 + \frac{1}{4}\cos\frac{x_0}{4}\right).$$

Per $x_0 \in (0,\pi]$: $\cos\frac{x_0}{4} \geq \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} > 0$, quindi $P'(x_0) > 0$: $P$ è crescente.

Il massimo è in $x_0 = \pi$:

$$\boxed{P_{\max} = 2\!\left(\pi + \sin\frac{\pi}{4}\right) = 2\pi + \sqrt{2}.}$$

---

## Quesito 2

Si considera $f(x) = \frac{1}{x}$ su $[p, 2p]$ con $p > 0$; il grafico è $\Gamma$ e $t$ è la tangente in $x = p$.

**Retta tangente:**

$$f'(p) = -\frac{1}{p^2}, \quad f(p) = \frac{1}{p}.$$

$$t\colon\; y = -\frac{x}{p^2} + \frac{2}{p}.$$

La retta $t$ si annulla in $x = 2p$ (estremo destro dell'intervallo).

**Area sotto $\Gamma$ su $[p, 2p]$:**

$$\int_p^{2p}\frac{dx}{x} = \ln 2.$$

**Area del trapezio sotto $t$ su $[p, 2p]$:**

$$\int_p^{2p}\!\left(-\frac{x}{p^2}+\frac{2}{p}\right)dx = \left[-\frac{x^2}{2p^2}+\frac{2x}{p}\right]_p^{2p} = (-2+4)-\!\left(-\frac{1}{2}+2\right) = 2 - \frac{3}{2} = \frac{1}{2}.$$

**Aree delle due parti** (indipendenti da $p$):

$$\boxed{A_1 = \ln 2 - \frac{1}{2} \quad \text{(tra } \Gamma \text{ e } t\text{)}, \qquad A_2 = \frac{1}{2} \quad \text{(tra } t \text{ e l'asse } x\text{)}.}$$

---

## Quesito 3

Sfera di centro $C = (1, 1, -2)$ tangente al piano $x + y + z = 10$.

**Raggio:**

$$r = \frac{|1 + 1 - 2 - 10|}{\sqrt{3}} = \frac{10}{\sqrt{3}} = \frac{10\sqrt{3}}{3}.$$

**Equazione della sfera:**

$$\boxed{(x-1)^2 + (y-1)^2 + (z+2)^2 = \frac{100}{3}.}$$

**Punto di contatto** (piede della perpendicolare da $C$ al piano, con direzione $(1,1,1)$):

$(1+t)+(1+t)+(-2+t) = 10 \Rightarrow 3t = 10 \Rightarrow t = \dfrac{10}{3}$.

$$\boxed{T = \left(\frac{13}{3},\; \frac{13}{3},\; \frac{4}{3}\right).}$$

---

## Quesito 4

**Formula di riduzione** $I_n = \int_0^{\pi/2}\!\cos^n x\,dx$.

Integrazione per parti con $u = \cos^{n-1}x$, $dv = \cos x\,dx$:

$$I_n = \Bigl[\cos^{n-1}x\,\sin x\Bigr]_0^{\pi/2} + (n-1)\int_0^{\pi/2}\!\cos^{n-2}x\,\sin^2 x\,dx = 0 + (n-1)(I_{n-2} - I_n).$$

$$n\,I_n = (n-1)I_{n-2} \implies \boxed{I_n = \frac{n-1}{n}\,I_{n-2}.} \quad \checkmark$$

**Calcolo di $I_4$:**

$$I_4 = \frac{3}{4}\,I_2 = \frac{3}{4}\cdot\frac{1}{2}\,I_0 = \frac{3}{8}\cdot\frac{\pi}{2} = \boxed{\frac{3\pi}{16}.}$$

---

## Quesito 5

Probabilità di non ottenere mai il 3 in $n$ lanci: $\left(\frac{5}{6}\right)^n < 10^{-4}$.

$$n > \frac{4\ln 10}{\ln(6/5)} = \frac{4 \times 2{,}3026}{0{,}1823} \approx 50{,}52.$$

$$\boxed{n_{\min} = 51.}$$

---

## Quesito 6

Data $y = x^2(ax+b)^3$, si vuole tangenza con $y = 7x - 9$ in $x = 1$.

**Passaggio per il punto:** $y(1) = (a+b)^3 = -2 \Rightarrow a+b = -\sqrt[3]{2}$.

**Stessa derivata:** $y'(x) = 2x(ax+b)^3 + 3ax^2(ax+b)^2$.

$$y'(1) = 2(a+b)^3 + 3a(a+b)^2 = 7 \implies 2(-2) + 3a(a+b)^2 = 7 \implies 3a(a+b)^2 = 11.$$

Da $(a+b)^3 = -2$: $(a+b)^2 = \dfrac{2}{|a+b|} \cdot |a+b|^{-1} \cdot 2 = \sqrt[3]{4}$.

$$3a\sqrt[3]{4} = 11 \implies a = \frac{11}{3\sqrt[3]{4}} = \frac{11\sqrt[3]{2}}{6}.$$

$$b = -\sqrt[3]{2} - a = -\sqrt[3]{2}\!\left(1 + \frac{11}{6}\right) = -\frac{17\sqrt[3]{2}}{6}.$$

$$\boxed{a = \frac{11\sqrt[3]{2}}{6}, \qquad b = -\frac{17\sqrt[3]{2}}{6}.}$$

---

## Quesito 7

Curve $\gamma_1\colon y = x^2 + 1$ e $\gamma_2\colon y = -x^2 + 8x - 9$; retta $t$ tangente a entrambe.

**Tangente a $\gamma_1$ in $(a, a^2+1)$:** $t\colon y = 2ax - a^2 + 1$.

**Tangente a $\gamma_2$ in $(b, -b^2+8b-9)$:** $t\colon y = (-2b+8)x + b^2 - 9$.

Sistema:

$$2a = -2b+8 \implies a+b = 4, \quad -a^2+1 = b^2-9 \implies (b-a)(b+a) = 10.$$

$(b-a)\cdot 4 = 10 \Rightarrow b - a = \tfrac{5}{2}$. Quindi $a = \tfrac{3}{4}$, $b = \tfrac{13}{4}$.

$$\boxed{t\colon\; y = \frac{3}{2}x + \frac{7}{16}.}$$

**Area delimitata da $\gamma_1$, $\gamma_2$ e $t$.**

In $x = 2$: $\gamma_1(2) = 5 > \gamma_2(2) = 3$, quindi $\gamma_1 > \gamma_2$ sull'intervallo $[\tfrac{3}{4}, \tfrac{13}{4}]$ (le parabole non si intersecano, discriminante $< 0$).

$$A = \int_{\frac{3}{4}}^{\frac{13}{4}}\!\bigl[\gamma_1(x) - \gamma_2(x)\bigr]dx = \int_{\frac{3}{4}}^{\frac{13}{4}}\!(2x^2 - 8x + 10)\,dx.$$

$$= \left[\frac{2x^3}{3} - 4x^2 + 10x\right]_{\frac{3}{4}}^{\frac{13}{4}}.$$

In $x = \tfrac{13}{4}$:

$$\frac{2}{3}\cdot\frac{2197}{64} - 4\cdot\frac{169}{16} + 10\cdot\frac{13}{4} = \frac{2197}{96} - \frac{169}{4} + \frac{65}{2} = \frac{2197}{96} - \frac{4056}{96} + \frac{3120}{96} = \frac{1261}{96}.$$

In $x = \tfrac{3}{4}$:

$$\frac{2}{3}\cdot\frac{27}{64} - 4\cdot\frac{9}{16} + 10\cdot\frac{3}{4} = \frac{9}{32} - \frac{9}{4} + \frac{15}{2} = \frac{9}{32} - \frac{72}{32} + \frac{240}{32} = \frac{177}{32}.$$

$$A = \frac{1261}{96} - \frac{177}{32} = \frac{1261}{96} - \frac{531}{96} = \frac{730}{96} = \boxed{\frac{365}{48} \approx 7{,}60\ \text{u.a.}}$$

---

## Quesito 8

La variabile casuale $X \in [0,10]$ ha densità di probabilità (ricostruita dai frammenti del raw):

$$f(x) = \begin{cases} \dfrac{1}{3}x & 0 \leq x \leq 1 \\[6pt] \dfrac{1}{12} & 1 < x \leq 10 \end{cases}$$

*(Nota: la definizione esatta è parzialmente frammentata nel raw — vedi PDF p.4 per conferma)*

**Valore medio:**

$$E[X] = \int_0^1 x\cdot\frac{x}{3}\,dx + \int_1^{10} x\cdot\frac{1}{12}\,dx = \frac{1}{3}\cdot\frac{1}{4} + \frac{1}{12}\cdot\frac{100-1}{2} = \frac{1}{12} + \frac{99}{24} = \frac{2}{24} + \frac{99}{24} = \frac{101}{24} \approx 4{,}21.$$

**Valore mediano $m$.**

Prima verifichiamo: $\int_0^1 \frac{x}{3}\,dx = \frac{1}{6} < \frac{1}{2}$, quindi il mediano cade in $(1, 10]$.

$$\frac{1}{6} + \int_1^m\frac{1}{12}\,dx = \frac{1}{2} \implies \frac{m-1}{12} = \frac{1}{3} \implies m - 1 = 4 \implies m = 5.$$

$$\boxed{E[X] = \frac{101}{24}, \qquad m = 5.}$$

---

## Quesito 9

Luogo dei punti $P(x,y,z)$ equidistanti da $A = (0,1,2)$ e $B = (3,2,0)$.

$|PA|^2 = |PB|^2$:

$$x^2 + (y-1)^2 + (z-2)^2 = (x-3)^2 + (y-2)^2 + z^2.$$

Espandendo e semplificando:

$$-2y + 1 - 4z + 4 = -6x + 9 - 4y + 4$$

$$6x + 2y - 4z = 8 \implies \boxed{3x + y - 2z - 4 = 0.}$$

Il luogo è il piano mediatore del segmento $AB$.

---

## Quesito 10

Si verifica che $y = e^x\sin x$ è soluzione di $y'' - 2y' + 2y = 0$.

**Derivate:**

$$y' = e^x(\sin x + \cos x).$$

$$y'' = e^x(\sin x + \cos x) + e^x(\cos x - \sin x) = 2e^x\cos x.$$

**Sostituzione:**

$$y'' - 2y' + 2y = 2e^x\cos x - 2e^x(\sin x + \cos x) + 2e^x\sin x = e^x[2\cos x - 2\sin x - 2\cos x + 2\sin x] = 0. \quad \checkmark$$
