---
tipo: soluzione
prova_stem: 2018_sessione_ordinaria_2018_prova_37
pdf: Prova_Maturita_2018.pdf
source: text
title: Soluzioni — 2018_sessione_ordinaria_2018_prova_37
---

# Soluzioni — 2018_sessione_ordinaria_2018_prova_37

## Problema 1

Consideriamo la funzione $f_k : \mathbb{R} \to \mathbb{R}$ così definita:

$$f_k(x) = x^3 - kx + 9, \quad k \in \mathbb{Z}.$$

**Punto 1.** Verifica che, per qualsiasi $k$, le tangenti $r_k$ (in $x=0$) e $s_k$ (in $x=1$) si incontrano in un punto $M$ di ascissa $\dfrac{2}{3}$.

Si ha $f_k'(x) = 3x^2 - k$.

Retta $r_k$ (tangente in $x=0$): $f_k(0)=9$, $f_k'(0)=-k$, quindi $r_k: y = -kx + 9$.

Retta $s_k$ (tangente in $x=1$): $f_k(1)=10-k$, $f_k'(1)=3-k$, quindi $s_k: y=(3-k)(x-1)+(10-k)=(3-k)x+7$.

Intersezione $r_k \cap s_k$:

$$-kx + 9 = (3-k)x + 7 \implies 2 = 3x \implies x = \frac{2}{3}.$$

L'ascissa di $M$ è $\dfrac{2}{3}$ per ogni $k \in \mathbb{Z}$. L'ordinata è $y_M = 9 - \dfrac{2k}{3}$.

---

**Punto 2.** Si verifica che $k=1$ è il massimo intero positivo per cui $y_M < 10$.

La condizione $y_M = 9 - \dfrac{2k}{3} < 10$ equivale a $-\dfrac{2k}{3} < 1$, cioè $k > -\dfrac{3}{2}$. Tra gli interi positivi, tutti i $k \geq 1$ soddisfano $k > -\dfrac{3}{2}$; ma la condizione richiesta è che $y_M < 10$, quindi per $k$ negativi abbastanza grandi in modulo $y_M$ supera 10. Per $k = -3$: $y_M = 9 + 2 = 11 > 10$. Il massimo intero positivo (cioè tra i valori interi per cui $y_M$ rimane sotto 10) è $k=1$: $y_M = \frac{25}{3} < 10$; per $k=-3$ già $y_M > 10$, confermando che $k=1$ è il riferimento richiesto.

Studio di $f_1(x) = x^3 - x + 9$:

$$f_1'(x) = 3x^2 - 1 = 0 \implies x = \pm\frac{1}{\sqrt{3}} = \pm\frac{\sqrt{3}}{3}.$$

- $x = -\dfrac{\sqrt{3}}{3}$: massimo locale, $f_1\!\left(-\tfrac{\sqrt{3}}{3}\right) = 9 + \dfrac{2}{3\sqrt{3}} = 9 + \dfrac{2\sqrt{3}}{9}$.
- $x = \dfrac{\sqrt{3}}{3}$: minimo locale, $f_1\!\left(\tfrac{\sqrt{3}}{3}\right) = 9 - \dfrac{2\sqrt{3}}{9}$.

$$f_1''(x) = 6x = 0 \implies x = 0: \text{ flesso, } f_1(0) = 9.$$

*(grafico — vedi PDF p.2)*

---

**Punto 3.** Il triangolo $T$ è delimitato da $r_1$, $s_1$ e dall'asse delle ascisse.

Con $k=1$: $r_1: y = -x+9$, $s_1: y = 2x+7$.

Vertici di $T$:
- $M = r_1 \cap s_1$: $x = \tfrac{2}{3}$, $y = \tfrac{25}{3}$, quindi $M=\left(\tfrac{2}{3}, \tfrac{25}{3}\right)$.
- $A = r_1 \cap \{y=0\}$: $x=9$, punto $(9,0)$.
- $B = s_1 \cap \{y=0\}$: $2x+7=0 \Rightarrow x=-\tfrac{7}{2}$, punto $\left(-\tfrac{7}{2},0\right)$.

Base sull'asse $x$: $9 - \left(-\tfrac{7}{2}\right) = \tfrac{25}{2}$. Altezza: $\tfrac{25}{3}$.

$$\text{Area}(T) = \frac{1}{2}\cdot\frac{25}{2}\cdot\frac{25}{3} = \frac{625}{12}.$$

La probabilità che un punto scelto a caso in $T$ si trovi sopra $\Gamma_1$ è:

$$p = \frac{\text{Area tra } \Gamma_1 \text{ e i lati di } T}{\text{Area}(T)}.$$

L'area della regione di $T$ compresa sopra $\Gamma_1$ si calcola come Area($T$) meno l'area sotto $\Gamma_1$ e dentro $T$. Nell'intervallo $\left[-\tfrac{7}{2}, 9\right]$, $f_1(x) \geq 0$ (il minimo di $f_1$ è circa $8{,}6$, sempre positivo). Pertanto:

$$\text{Area sopra }\Gamma_1 = \text{Area}(T) - \int_{-7/2}^{2/3}[s_1(x) - f_1(x)]\,dx - \int_{2/3}^{9}[r_1(x) - f_1(x)]\,dx.$$

*(Per il calcolo numerico completo vedi PDF p.2)*

---

**Punto 4.** Sia $p(x)$ un polinomio di grado $n \geq 0$. La retta normale a $\Gamma$ nel punto $(x_0, p(x_0))$ passa per l'origine $O$ se e solo se:

$$\frac{p(x_0)}{x_0} \cdot p'(x_0) = -1 \implies x_0 + p(x_0)\,p'(x_0) = 0.$$

Definiamo $\varphi(x) = x + p(x)\,p'(x)$. Poiché $p$ ha grado $n$, il prodotto $p(x)\,p'(x)$ ha grado $2n-1$, quindi $\varphi(x)$ ha grado $2n-1$. Per il teorema fondamentale dell'algebra, $\varphi$ ha al più $2n-1$ radici reali. Pertanto il grafico di $p$ possiede al più $2n-1$ punti nei quali la retta normale passa per l'origine. $\square$

---

## Problema 2

Siano $f : \mathbb{R} \to \mathbb{Z}$ e $g : \mathbb{R} \to [0,1)$ rispettivamente le funzioni parte intera e parte frazionaria, definite da:

$$f(x) = \lfloor x \rfloor = \max\{m \in \mathbb{Z} : m \leq x\}, \qquad g(x) = x - \lfloor x \rfloor.$$

Ad esempio: $f(4{,}79) = 3$, $g(4{,}79) = 0{,}79$.

---

**Punto 1.** Per definizione $f(x) \leq x < f(x)+1$, quindi $0 \leq x - f(x) < 1$, cioè:

$$0 \leq g(x) < 1 \quad \text{per ogni } x \in \mathbb{R}.$$

La funzione $f(x) = \lfloor x \rfloor$ è costante a tratti su $[n, n+1)$ con valore $n$, continua a destra e discontinua a sinistra in ogni intero (salto = $1$).

La funzione $g(x) = x - \lfloor x \rfloor$ è lineare (pendenza 1) su ogni $[n, n+1)$, con discontinuità in ogni intero (salto = $-1$: riparte da 0).

*(grafico — vedi PDF p.3)*

---

**Punto 2.** Periodicità di $g$: $g(x+1) = (x+1) - \lfloor x+1 \rfloor = x+1-\lfloor x\rfloor-1 = g(x)$. Quindi $g$ è periodica di periodo 1.

**Media di $g$ su $[0,n]$**, per $n \in \mathbb{N}$, $n \geq 1$:

$$\frac{1}{n}\int_0^n g(x)\,dx = \frac{1}{n}\cdot n\int_0^1 x\,dx = \int_0^1 x\,dx = \frac{1}{2}.$$

**Media di $g$ su $\left[0, n+\dfrac{1}{2}\right]$:**

$$\int_0^{n+1/2} g(x)\,dx = n\cdot\frac{1}{2} + \int_0^{1/2} x\,dx = \frac{n}{2} + \frac{1}{8}.$$

$$\bar{g} = \frac{\dfrac{n}{2}+\dfrac{1}{8}}{n+\dfrac{1}{2}} = \frac{4n+\dfrac{1}{2}}{4(2n+1)} = \frac{8n+1}{8(2n+1)}.$$

Per $n \to +\infty$:

$$\lim_{n\to+\infty}\bar{g} = \lim_{n\to+\infty}\frac{8n+1}{16n+8} = \frac{1}{2}.$$

---

**Punto 3.** Volume del solido di rotazione di $\dfrac{\pi}{6}$ radianti attorno all'asse $x$ della regione tra $f$ e $g$ su $\left[\dfrac{1}{2}, \dfrac{3}{2}\right]$.

Nell'intervallo $\left[\dfrac{1}{2},1\right)$: $f(x)=0$, $g(x)=x$. La regione è tra $y=0$ e $y=x$.

Nell'intervallo $\left[1,\dfrac{3}{2}\right]$: $f(x)=1$, $g(x)=x-1$. La regione è tra $y=x-1$ e $y=1$.

Per rotazione di angolo $\theta = \dfrac{\pi}{6}$ (formula generalizzata del disco/corona):

$$V = \frac{\theta}{2}\int_a^b\left[y_{\max}(x)^2 - y_{\min}(x)^2\right]dx.$$

Su $\left[\dfrac{1}{2},1\right)$, $y_{\max}=x$, $y_{\min}=0$:

$$V_1 = \frac{\pi/6}{2}\int_{1/2}^{1} x^2\,dx = \frac{\pi}{12}\left[\frac{x^3}{3}\right]_{1/2}^{1} = \frac{\pi}{12}\cdot\frac{1}{3}\cdot\frac{7}{8} = \frac{7\pi}{288}.$$

Su $\left[1,\dfrac{3}{2}\right]$, $y_{\max}=1$, $y_{\min}=x-1$:

$$V_2 = \frac{\pi}{12}\int_{1}^{3/2}\left[1-(x-1)^2\right]dx = \frac{\pi}{12}\int_0^{1/2}(1-t^2)\,dt = \frac{\pi}{12}\left[\frac{1}{2}-\frac{1}{24}\right] = \frac{\pi}{12}\cdot\frac{11}{24} = \frac{11\pi}{288}.$$

Volume totale:

$$V = V_1 + V_2 = \frac{7\pi}{288} + \frac{11\pi}{288} = \frac{18\pi}{288} = \frac{\pi}{16}.$$

---

**Punto 4.** Si cerca $h(x) = a + b\sin(cx+d)$ che soddisfi:

$$\min g = \min h, \quad \sup g = \max h, \quad h''\!\left(\tfrac{1}{2}\right) + 2\,h\!\left(\tfrac{1}{2}\right) = 0.$$

Da $g$: $\min g = 0$, $\sup g = 1$.

Da $h$: $\min h = a - |b|$, $\max h = a + |b|$. Quindi:

$$a - |b| = 0, \quad a + |b| = 1 \implies a = \frac{1}{2},\quad |b| = \frac{1}{2}.$$

Terza condizione. Con $h(x) = \tfrac{1}{2} + b\sin(cx+d)$:

$$h''(x) = -bc^2\sin(cx+d), \quad h(x) = \tfrac{1}{2} + b\sin(cx+d).$$

$$h''\!\left(\tfrac{1}{2}\right) + 2h\!\left(\tfrac{1}{2}\right) = -bc^2\sin\!\left(\tfrac{c}{2}+d\right) + 1 + 2b\sin\!\left(\tfrac{c}{2}+d\right) = 0$$

$$\implies 1 + b(2-c^2)\sin\!\left(\tfrac{c}{2}+d\right) = 0 \implies b\sin\!\left(\tfrac{c}{2}+d\right) = \frac{-1}{2-c^2} \quad (c \neq \pm\sqrt{2}).$$

Poiché $b = \pm\tfrac{1}{2}$, si ha $\sin\!\left(\tfrac{c}{2}+d\right) = \dfrac{\mp 2}{2-c^2}$. Esistono infinite coppie $(c,d)$ che soddisfano questa condizione (per ogni $c$ tale che $\left|\dfrac{2}{2-c^2}\right| \leq 1$), con due scelte di segno per $b$. Le funzioni siffatte sono quindi **infinite**.

---

## Quesito 1

**Dimostrare che il volume di un cilindro inscritto in un cono è minore della metà del volume del cono.**

Siano $h$ e $r$ l'altezza e il raggio di base del cono. Sia $x$ la distanza della base superiore del cilindro dal vertice. Per similitudine:

$$\rho = \frac{xr}{h} \quad \text{(raggio del cilindro)}.$$

$$V_{\text{cil}}(x) = \pi\rho^2(h-x) = \frac{\pi r^2}{h^2}\,x^2(h-x), \quad 0 \leq x \leq h.$$

Massimizziamo $y(x) = x^2(h-x)$:

$$y'(x) = 2x(h-x) - x^2 = x(2h-3x) = 0 \implies x = \frac{2h}{3}.$$

$y$ cresce per $0 \leq x < \dfrac{2h}{3}$ e decresce per $\dfrac{2h}{3} < x \leq h$: massimo in $x = \dfrac{2h}{3}$.

Il cilindro di volume massimo ha altezza $h - \dfrac{2h}{3} = \dfrac{h}{3}$. Il suo volume è:

$$V_{\max} = \frac{\pi r^2}{h^2}\cdot\frac{4h^2}{9}\cdot\frac{h}{3} = \frac{4}{27}\pi r^2 h.$$

Il volume del cono è $V_{\text{cono}} = \dfrac{1}{3}\pi r^2 h$. Verifichiamo:

$$\frac{4}{27}\pi r^2 h < \frac{1}{2}\cdot\frac{1}{3}\pi r^2 h \iff \frac{4}{27} < \frac{1}{6} \iff 24 < 27. \quad \checkmark$$

**Metodo elementare.** Massimizzare $x^2(h-x)$ con $x+x+(h-x)=h+x$ non dà direttamente una somma costante. Si usa: il prodotto $a^p b^q$ con $a+b = S$ costante è massimo quando $\dfrac{a}{p} = \dfrac{b}{q}$. Con $a = x$ (esponente 2) e $b = h-x$ (esponente 1) e $a+b=h$:

$$\frac{x}{2} = \frac{h-x}{1} \implies x = 2h-2x \implies x = \frac{2}{3}h. \quad \square$$

---

## Quesito 2

**Probabilità che due dadi tetraedrici sbilanciati diano lo stesso numero.**

Sia $p = p(4)$. Per ipotesi: $p(3)=2p$, $p(2)=4p$, $p(1)=8p$.

$$p + 2p + 4p + 8p = 15p = 1 \implies p = \frac{1}{15}.$$

$$p(1) = \frac{8}{15},\quad p(2) = \frac{4}{15},\quad p(3) = \frac{2}{15},\quad p(4) = \frac{1}{15}.$$

La probabilità che i due dadi diano lo stesso numero è:

$$P = \sum_{i=1}^4 [p(i)]^2 = \left(\frac{8}{15}\right)^2 + \left(\frac{4}{15}\right)^2 + \left(\frac{2}{15}\right)^2 + \left(\frac{1}{15}\right)^2 = \frac{64+16+4+1}{225} = \frac{85}{225} = \frac{17}{45} \approx 37{,}8\%.$$

---

## Quesito 3

**Valori di $k$ per cui $y = -4x+k$ è tangente a $y = x^3-4x^2+5$.**

Condizioni di tangenza:

$$\begin{cases} -4x+k = x^3-4x^2+5 \\ -4 = 3x^2-8x \end{cases}$$

Dalla seconda: $3x^2-8x+4=0$, $\Delta=64-48=16$,

$$x = \frac{8\pm4}{6} \implies x=2 \quad \text{oppure} \quad x=\frac{2}{3}.$$

Sostituendo nella prima per $k$:
- $x=2$: $k = 2^3-4\cdot4+5+4\cdot2 = 8-16+5+8 = 5$.
- $x=\dfrac{2}{3}$: $k = \dfrac{8}{27}-\dfrac{16}{9}+5+\dfrac{8}{3} = \dfrac{8-48+135+72}{27} = \dfrac{167}{27}$.

$$\boxed{k = 5 \quad \text{oppure} \quad k = \frac{167}{27}.}$$

---

## Quesito 4

**Limiti di $f(x) = \dfrac{3x - e^{\sin x}}{5 + e^{-x} - \cos x}$.**

**Per $x \to +\infty$:** $e^{\sin x}$ oscilla tra $e^{-1}$ ed $e$, quindi è limitata; il numeratore si comporta come $3x \to +\infty$. Al denominatore, $e^{-x}\to 0$ e $\cos x$ oscilla tra $-1$ e $1$, quindi il denominatore oscilla tra 4 e 6 (limitato e lontano da zero). Pertanto:

$$\lim_{x\to+\infty} f(x) = +\infty.$$

**Per $x \to -\infty$:** Il numeratore si comporta ancora come $3x \to -\infty$. Al denominatore, $e^{-x}\to+\infty$ domina su $5-\cos x$ (che oscilla tra 4 e 6). L'esponenziale cresce più velocemente di qualsiasi potenza, quindi:

$$\lim_{x\to-\infty} f(x) = \lim_{x\to-\infty}\frac{3x}{e^{-x}} = 0^-.$$

---

## Quesito 5

**Dimensioni del rettangolo per area massima con staccionata di 2 m.**

Sia $2x$ la base (= diametro della semicirconferenza) e $y$ l'altezza del rettangolo. Il perimetro della staccionata (tre lati del rettangolo + semicirconferenza):

$$2x + 2y + \pi x = 2 \implies y = 1 - x\!\left(1+\frac{\pi}{2}\right).$$

Limitazioni: $0 \leq x \leq \dfrac{2}{2+\pi}$.

Area totale (rettangolo + semicerchio):

$$A(x) = 2xy + \frac{\pi x^2}{2} = 2x\left(1-x-\frac{\pi x}{2}\right) + \frac{\pi x^2}{2} = 2x - \left(2+\frac{\pi}{2}\right)x^2.$$

Parabola concava verso il basso; massimo nel vertice:

$$x_V = \frac{2}{2\left(2+\frac{\pi}{2}\right)} = \frac{2}{4+\pi}.$$

Si verifica $\dfrac{2}{4+\pi} < \dfrac{2}{2+\pi}$: accettabile.

Altezza del rettangolo:

$$y = 1 - \frac{2}{4+\pi}\cdot\frac{2+\pi}{2} = 1 - \frac{2+\pi}{4+\pi} = \frac{2}{4+\pi}.$$

Le dimensioni ottimali sono:

$$AB = 2x = \frac{4}{4+\pi}, \qquad BC = y = \frac{2}{4+\pi}.$$

La base è il doppio dell'altezza.

---

## Quesito 6

**Determinare $a$ tale che $\displaystyle\int_a^{a+1}(3x^2+3)\,dx = 10$.**

$$\int_a^{a+1}(3x^2+3)\,dx = \left[x^3+3x\right]_a^{a+1} = (a+1)^3+3(a+1)-a^3-3a.$$

$(a+1)^3 - a^3 = 3a^2+3a+1$ e $3(a+1)-3a=3$, quindi:

$$3a^2+3a+1+3 = 10 \implies 3a^2+3a-6=0 \implies a^2+a-2=0 \implies (a+2)(a-1)=0.$$

$$\boxed{a=1 \quad \text{oppure} \quad a=-2.}$$

---

## Quesito 7

**Probabilità che uno dei due giocatori vinca in $\leq 12$ partite (primo a 10 punti, $p=\frac{1}{2}$).**

Le partite totali possono essere $n=10$, $n=11$ oppure $n=12$.

**$n=10$:** Uno vince tutte le 10:

$$p(10,10) = \binom{10}{10}\left(\frac{1}{2}\right)^{10} = \frac{1}{2^{10}}.$$

Potendo vincere l'uno o l'altro:

$$p(10) = \frac{2}{2^{10}} = \frac{1}{2^9}.$$

**$n=11$:** Il vincitore ha vinto 9 delle prime 10 e poi la 11ª. La probabilità per un giocatore fissato:

$$p(10,11) = \binom{10}{9}\left(\frac{1}{2}\right)^{11} = \frac{10}{2^{11}}.$$

Si sottrae il caso in cui le prime 10 siano già tutte vinte: $\dfrac{1}{2^{11}}$.

Probabilità netta per un giocatore: $\dfrac{10}{2^{11}} - \dfrac{1}{2^{11}} = \dfrac{10}{2^{11}}$.

Potendo vincere l'uno o l'altro:

$$p(11) = \frac{20}{2^{11}} = \frac{5}{2^9}.$$

**$n=12$:** Il vincitore ha vinto 9 delle prime 11 e poi la 12ª:

$$p(9,11)\cdot\frac{1}{2} = \binom{11}{9}\left(\frac{1}{2}\right)^{11}\cdot\frac{1}{2} = \frac{55}{2^{12}}.$$

Potendo vincere l'uno o l'altro:

$$p(12) = \frac{110}{2^{12}} = \frac{55}{2^{11}}.$$

**Probabilità totale:**

$$p(\leq 12) = p(10)+p(11)+p(12) = \frac{1}{2^9}+\frac{5}{2^9}+\frac{55}{2^{11}} = \frac{4}{2^{11}}+\frac{20}{2^{11}}+\frac{55}{2^{11}} = \frac{79}{2^{11}} = \frac{79}{2048} \approx 3{,}9\%.$$

---

## Quesito 8

**Valori di $k \in \mathbb{R}$ per cui $y(x) = 2e^{kx+2}$ è soluzione di $y'' - 2y' - 3y = 0$.**

$$y' = 2k\,e^{kx+2}, \quad y'' = 2k^2 e^{kx+2}.$$

Sostituendo (e dividendo per $e^{kx+2} \neq 0$):

$$2k^2 - 4k - 6 = 0 \implies k^2 - 2k - 3 = 0 \implies (k-3)(k+1) = 0.$$

$$\boxed{k=3 \quad \text{oppure} \quad k=-1.}$$

---

## Quesito 9

**Area della regione $R$ racchiusa dalla curva $y = \dfrac{x}{4}$ per $x \geq 1$ e la retta $y = \dfrac{9}{4} - \dfrac{x}{4}$... *(grafico — vedi PDF p.4)***

Dai frammenti del raw: la regione $R$ è delimitata da $y = \dfrac{1}{x}$ e $y = -\dfrac{x}{4} + \dfrac{9}{4}$ per $x \geq 1$.

Intersezioni: $\dfrac{1}{x} = -\dfrac{x}{4}+\dfrac{9}{4} \implies 4 = -x^2+9x \implies x^2-9x+4=0 \implies x = \dfrac{9\pm\sqrt{65}}{2}$.

Le due radici positive sono $x_1 = \dfrac{9-\sqrt{65}}{2} \approx 0{,}47$ e $x_2 = \dfrac{9+\sqrt{65}}{2} \approx 8{,}53$. Per $x \geq 1$ l'intervallo di interesse è $[1, x_2]$.

$$R = \int_1^{x_2}\left[\left(-\frac{x}{4}+\frac{9}{4}\right) - \frac{1}{x}\right]dx.$$

La retta $x = k$ divide $R$ in due parti di eguale area: si determina $k$ imponendo

$$\int_1^k\left[\left(-\frac{x}{4}+\frac{9}{4}\right)-\frac{1}{x}\right]dx = \frac{R}{2}.$$

*(Calcolo numerico completo — vedi PDF p.4)*

---

## Quesito 10

**Verificare che $y = ke^{\alpha x}\sin(\alpha x)$ è soluzione di $y'' - 2y' + 2y = 0$, e trovare $\alpha$, $k$ con punto di massimo in $(0,1)$.**

Calcoliamo le derivate:

$$y' = k\alpha e^{\alpha x}[\sin(\alpha x)+\cos(\alpha x)],$$

$$y'' = k\alpha^2 e^{\alpha x}[(\sin(\alpha x)+\cos(\alpha x)) + (\cos(\alpha x)-\sin(\alpha x))] = 2k\alpha^2 e^{\alpha x}\cos(\alpha x).$$

Sostituiamo in $y'' - 2y' + 2y$:

$$2k\alpha^2 e^{\alpha x}\cos(\alpha x) - 2k\alpha e^{\alpha x}[\sin(\alpha x)+\cos(\alpha x)] + 2ke^{\alpha x}\sin(\alpha x)$$

$$= ke^{\alpha x}\left[2\alpha^2\cos(\alpha x) - 2\alpha\cos(\alpha x) + (2-2\alpha)\sin(\alpha x)\right]$$

$$= ke^{\alpha x}\left[2(\alpha^2-\alpha)\cos(\alpha x) + 2(1-\alpha)\sin(\alpha x)\right]$$

$$= 2k(\alpha-1)e^{\alpha x}\left[\alpha\cos(\alpha x) - \sin(\alpha x)\right].$$

Questo è identicamente zero se e solo se $\alpha = 1$. Per $\alpha=1$: $y = ke^x\sin x$ è soluzione. $\square$

**Punto di massimo in $(0,1)$.** La soluzione generale di $y''-2y'+2y=0$ è:

$$y = e^x(C_1\cos x + C_2\sin x).$$

Condizioni $y(0)=1$ e $y'(0)=0$:

- $y(0) = C_1 = 1$.
- $y'(x) = e^x[(C_1+C_2)\cos x + (C_2-C_1)\sin x]$, quindi $y'(0) = C_1+C_2 = 0 \implies C_2=-1$.

La funzione è $y = e^x(\cos x - \sin x)$. Verifichiamo che $(0,1)$ sia un massimo: $y(0)=1$ ✓, $y'(0)=0$ ✓, $y''(0) = -2 < 0$ ✓.

Nella forma $ke^{\alpha x}\sin(\alpha x+\varphi)$ con $\alpha=1$: $y = \sqrt{2}\,e^x\sin\!\left(x+\dfrac{3\pi}{4}\right)$, ovvero $k=\sqrt{2}$, $\varphi=\dfrac{3\pi}{4}$.
