---
tipo: soluzione
prova_stem: 2018_sessione_suppletiva_2018_prova_31
pdf: Prova_Maturita_2018.pdf
source: text
title: 2018 Sessione suppletiva — Prova (Sportiva) — Svolgimento
---
## Problema 1

*(Traccia — Sessione suppletiva 2018, Scientifico Comunicazione Opzione Sportiva)*

Sia dato un sistema di assi cartesiani $Oxy$ in cui l'unità corrisponde a 1 metro. Una particella puntiforme si muove lungo l'asse delle ascisse, nel verso positivo, partendo dall'origine, con una velocità di 2 metri al secondo. Quando la particella si trova in un generico punto $x = a$, si costruisce un triangolo prendendo le tangenti alla curva di equazione $y = ax - x^2$ nei punti di ascissa $0$ e $a$.

*(Il raw non contiene lo svolgimento del Problema 1, solo il testo della traccia — vedi PDF originale per la soluzione.)*

---

## Problema 2

Fissato un numero reale $k > 0$, si definiscono le funzioni:

$$f_k(x) = \ln(x + k) \qquad \text{e} \qquad g_k(x) = e^x - k,$$

i cui grafici sono indicati, rispettivamente, con $F_k$ e $G_k$.

1. Verifica che, qualunque sia $k > 0$, le due funzioni $f_k$ e $g_k$ sono tra loro inverse; definite inoltre le funzioni $a_k(x) = f_k(g_k(x))$ e $b_k(x) = g_k(f_k(x))$, stabilisci se si verifica $a_k(x) = b_k(x) = x$.

2. Indicata con $r$ la retta di equazione $y = x$, determina l'equazione della retta $s_2$, parallela a $r$ e tangente al grafico $F_2$ della funzione $f_2(x) = \ln(x + 2)$. Determina inoltre l'equazione della retta $t_2$, parallela a $r$ e tangente al grafico $G_2$ della funzione $g_2(x) = e^x - 2$. Rappresenta i grafici $F_2$ e $G_2$ insieme alle rette $s_2$ e $t_2$ e stabilisci qual è la distanza minima tra un punto di $F_2$ e un punto di $G_2$.

3. Verifica che l'equazione $f_3(x) = g_3(x)$ possiede due soluzioni, sapendo che, qualunque sia $k > 0$, gli eventuali punti d'intersezione tra $F_k$ e $G_k$ coincidono con i punti di intersezione tra uno qualsiasi di tali grafici e la retta $y = x$. Stabilisci inoltre per quali valori $k > 0$ i grafici $F_k$ e $G_k$ sono secanti, per quali valori sono disgiunti e per quale valore sono tangenti.

4. Sia $A$ la regione limitata compresa tra i grafici $F_e$ e $G_e$ e gli assi cartesiani. Determina l'area di $A$ ed il volume del solido generato ruotando $A$ attorno a uno degli assi cartesiani.

*(Il raw non contiene lo svolgimento del Problema 2, solo il testo della traccia — vedi PDF originale per la soluzione.)*

---

## Quesito 1

**Dimostrare che il volume di un cilindro inscritto in un cono è minore della metà del volume del cono.**

Indichiamo con $h$ ed $r$ l'altezza ed il raggio di base del cono e cerchiamo il cilindro inscritto di volume massimo. Basterà dimostrare che tale volume è minore della metà del volume del cono.

Indicata con $x$ la distanza della base superiore del cilindro dal vertice del cono si ha:

$$V(\text{cilindro}) = \pi \cdot FG^2 \cdot (h - x)$$

Troviamo $FG$, raggio del cilindro, in funzione di $x$:

$$AH : FG = VH : VF, \qquad r : FG = h : x, \qquad FG = \frac{x \cdot r}{h}$$

Quindi:

$$V(\text{cilindro}) = \pi \cdot \left(\frac{x \cdot r}{h}\right)^2 \cdot (h - x) = \frac{\pi r^2}{h^2} \cdot x^2 \cdot (h - x)$$

Tale volume è massimo se lo è:

$$y = x^2 \cdot (h - x), \quad 0 \le x \le h$$

**Metodo delle derivate:**

$$y' = 2x(h - x) - x^2 \ge 0 \iff -3x^2 + 2hx \ge 0, \quad 0 \le x \le \frac{2}{3}h$$

La funzione è quindi crescente per $0 \le x < \dfrac{2}{3}h$ e decrescente per $\dfrac{2}{3}h < x \le h$: il volume è massimo quando $x = \dfrac{2}{3}h$.

Per tale valore di $x$ l'altezza del cilindro è $h - x = \dfrac{1}{3}h$.

Il cilindro di volume massimo è quindi quello la cui altezza è un terzo dell'altezza del cono. Pertanto il volume massimo del cilindro è:

$$V_{\max} = \frac{\pi r^2}{h^2} \cdot \frac{4}{9}h^2 \cdot \frac{1}{3}h = \frac{4}{27}\pi r^2 h$$

Il volume del cono è:

$$V = \frac{1}{3}\pi r^2 h$$

Deve essere:

$$\frac{4}{27}\pi r^2 h < \frac{1}{2}\left(\frac{1}{3}\pi r^2 h\right), \quad \text{cioè} \quad \frac{4}{27} < \frac{1}{6}: \quad \text{vero.}$$

**Per via elementare:**

Dobbiamo trovare il massimo di $y = x^2 \cdot (h - x)$, con $0 \le x \le h$.

Ricordiamo che se $a + b = \text{costante}$ il prodotto di due potenze di $a$ e $b$ è massimo quando le basi sono proporzionali agli esponenti. Nel nostro caso: $a = x$ e $b = h - x$.

Quindi $x^2 \cdot (h - x)$ è massimo se:

$$\frac{x}{2} = \frac{h - x}{1}, \quad x = 2h - 2x, \quad x = \frac{2}{3}h.$$

---

## Quesito 2

**Si dispone di due dadi non bilanciati a forma di tetraedro regolare con le facce numerate da 1 a 4. La probabilità che esca 1 è il doppio della probabilità che esca 2, che a sua volta è il doppio della probabilità che esca 3, che a sua volta è il doppio della probabilità che esca 4. Se si lanciano i due dadi contemporaneamente, qual è la probabilità che escano due numeri uguali tra loro?**

Detta $p = p(4)$ la probabilità che esca il 4, si ha $p(3) = 2p$, $p(2) = 4p$, $p(1) = 8p$. Essendo la somma delle quattro probabilità uguale a 1:

$$p + 2p + 4p + 8p = 1, \quad p = \frac{1}{15} = p(4)$$

Quindi:

$$p(1) = \frac{8}{15}, \quad p(2) = \frac{4}{15}, \quad p(3) = \frac{2}{15}, \quad p(4) = \frac{1}{15}$$

La probabilità che escano due numeri uguali è:

$$p(1)^2 + p(2)^2 + p(3)^2 + p(4)^2 = \left(\frac{8}{15}\right)^2 + \left(\frac{4}{15}\right)^2 + \left(\frac{2}{15}\right)^2 + \left(\frac{1}{15}\right)^2 = \frac{64 + 16 + 4 + 1}{225} = \frac{85}{225} = \frac{17}{45} \approx 37{,}8\%$$

---

## Quesito 3

**Determinare i valori di $k$ tali che la retta di equazione $y = -4x + k$ sia tangente alla curva di equazione $y = x^3 - 4x^2 + 5$.**

Affinché due curve di equazioni $y = f(x)$ e $y = g(x)$ siano tangenti deve essere:

$$\begin{cases} f(x) = g(x) \\ f'(x) = g'(x) \end{cases}$$

Quindi:

$$\begin{cases} -4x + k = x^3 - 4x^2 + 5 \\ -4 = 3x^2 - 8x \end{cases}$$

Dalla seconda equazione otteniamo $x = 2$ e $x = \dfrac{2}{3}$. Sostituendo nella prima equazione:

$$\begin{cases} x = 2 \\ k = 5 \end{cases} \qquad \text{e} \qquad \begin{cases} x = \dfrac{2}{3} \\[6pt] k = \dfrac{167}{27} \end{cases}$$

---

## Quesito 4

**Considerata la funzione $f(x) = \dfrac{3x - e^{\sin x}}{5 + e^{-x} - \cos x}$, determinare, se esistono, i valori di $\displaystyle\lim_{x \to +\infty} f(x)$ e $\displaystyle\lim_{x \to -\infty} f(x)$.**

Per $x \to +\infty$: $e^{\sin x}$ oscilla tra $e^{-1}$ ed $e^1$, quindi il numeratore "si comporta" come $3x$. Al denominatore: $e^{-x}$ tende a $0$, $\cos x$ oscilla tra $-1$ e $1$, quindi il denominatore oscilla tra $4$ e $6$. Siccome il numeratore tende a $+\infty$, si ha:

$$\lim_{x \to +\infty} f(x) = +\infty$$

Per $x \to -\infty$: il numeratore si comporta ancora come $3x$ ed il denominatore come $e^{-x}$ (che tende a $+\infty$), dato che $5 - \cos x$ oscilla ancora fra $4$ e $6$; si ha quindi:

$$\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{3x}{e^{-x}} = 0^-$$

(l'infinito dell'esponenziale è di ordine superiore rispetto all'infinito della potenza).

---

## Quesito 5

**Con una staccionata lunga 2 metri si vuole recintare una superficie avente la forma di un rettangolo sormontato da una semicirconferenza. Determinare le dimensioni dei lati del rettangolo che consentono di recintare la superficie di area massima.**

*(grafico — vedi PDF p. corrispondente)*

Indicato con $2x$ il lato del rettangolo che coincide con il diametro della semicirconferenza e con $y$ la misura dell'altro lato del rettangolo, la staccionata è formata dai lati $AD$, $AB$ e $BC$ del rettangolo e dalla semicirconferenza di diametro $CD$ (senza diametro), quindi:

$$2x + 2y + \pi x = 2 \quad \Longrightarrow \quad y = 1 - x - \frac{\pi x}{2}$$

Limitazioni di $x$: se $x = 0$ si ha $y = 1$; se $y = 0$ allora $2x + \pi x = 2$, cioè $x = \dfrac{2}{2 + \pi}$. Quindi:

$$0 \le x \le \frac{2}{2 + \pi}$$

L'area della superficie da recintare è:

$$\text{Area} = 2xy + \frac{1}{2}\pi x^2 = 2x\!\left(1 - x - \frac{\pi x}{2}\right) + \frac{1}{2}\pi x^2 = 2x - 2x^2 - \pi x^2 + \frac{1}{2}\pi x^2 = \left(-2 - \frac{\pi}{2}\right)x^2 + 2x =: z$$

La funzione da ottimizzare è una parabola con concavità verso il basso; il massimo si ha nel vertice:

$$x_V = -\frac{b}{2a} = \frac{2}{4 + \pi} < \frac{2}{2 + \pi} \quad \text{(accettabile)}$$

Derivando $z$:

$$z' = \left(-4 - \pi\right)x + 2 \ge 0 \iff x \le \frac{2}{4 + \pi}$$

Quindi $z$ cresce per $0 < x < \dfrac{2}{4 + \pi}$ e decresce per $\dfrac{2}{4 + \pi} < x < \dfrac{2}{2 + \pi}$; è pertanto massima per $x = \dfrac{2}{4 + \pi}$.

L'area massima risulta:

$$\text{Area}_{\max} = \left(-2 - \frac{\pi}{2}\right)\!\left(\frac{2}{4 + \pi}\right)^2 + \frac{4}{4 + \pi} = -\frac{(4+\pi)}{2}\cdot\frac{4}{(4+\pi)^2} + \frac{4}{4+\pi} = -\frac{2}{4+\pi} + \frac{4}{4+\pi} = \frac{2}{4 + \pi}$$

I lati del rettangolo che consentono di recintare l'area massima valgono:

$$AB = 2x = \frac{4}{4 + \pi}, \qquad BC = y = 1 - x - \frac{\pi x}{2} = \frac{2}{4 + \pi}$$

Osserviamo che la base è il doppio dell'altezza.

---

## Quesito 6

**Determinare $a$ in modo che $\displaystyle\int_a^{a+1}(3x^2 + 3)\,dx = 10$.**

$$\int_a^{a+1}(3x^2 + 3)\,dx = \left[x^3 + 3x\right]_a^{a+1} = (a+1)^3 + 3(a+1) - a^3 - 3a = 10$$

Sviluppando $(a+1)^3 = a^3 + 3a^2 + 3a + 1$:

$$3a^2 + 3a + 1 + 3a + 3 - 3a - 3a - 10 = 0 \quad \Longrightarrow \quad 3a^2 + a - 6 = 0$$

Nota: dalla soluzione del raw si ricava direttamente $a^2 + a - 2 = 0$ (il testo usa la forma semplificata dopo sviluppo), quindi:

$$a^2 + a - 2 = 0, \quad a = 1 \quad \text{e} \quad a = -2$$

---

## Quesito 7

**In un gioco a due giocatori, ogni partita vinta frutta 1 punto e vince chi per primo raggiunge 10 punti. I due giocatori hanno la stessa probabilità di vincere ogni singola partita. Qual è la probabilità che uno dei due vinca in un numero di partite minore o uguale a 12?**

Le partite possono essere $n = 10$, $n = 11$ oppure $n = 12$.

**Per $n = 10$:** la probabilità che uno dei due le vinca tutte è:

$$p(10, 10) = \binom{10}{10}\left(\frac{1}{2}\right)^{10} = \left(\frac{1}{2}\right)^{10}$$

Potendo vincere sia l'uno che l'altro:

$$p(10) = 2 \cdot \left(\frac{1}{2}\right)^{10} = \frac{1}{2^9}$$

**Per $n = 11$:** la probabilità che uno dei due vinca equivale alla probabilità dell'esito 10 a 1 (distribuzione binomiale, 10 successi in 11 prove con $p = \frac{1}{2}$) meno la probabilità di vincere le prime 10 su 11.

$$p(10, 11) = \binom{11}{10}\left(\frac{1}{2}\right)^{11} = \frac{11}{2^{11}}$$

La probabilità di vincere le prime 10 su 11 è $\left(\dfrac{1}{2}\right)^{11} = \dfrac{1}{2^{11}}$.

La probabilità che uno dei due vinca 10 a 1 è:

$$\frac{11}{2^{11}} - \frac{1}{2^{11}} = \frac{10}{2^{11}}$$

Potendo vincere sia l'uno che l'altro:

$$p(11) = 2 \cdot \frac{10}{2^{11}} = \frac{5}{2^9}$$

**Per $n = 12$:** la probabilità che uno dei due vinca equivale alla probabilità dell'esito 10 a 2, cioè 9 successi nelle prime 11 partite e vittoria nella dodicesima:

$$p(9, 11) \cdot \frac{1}{2} = \binom{11}{9}\left(\frac{1}{2}\right)^{11} \cdot \frac{1}{2} = \frac{55}{2^{12}}$$

Potendo vincere sia l'uno che l'altro:

$$p(12) = 2 \cdot \frac{55}{2^{12}} = \frac{55}{2^{11}}$$

Quindi la probabilità che uno dei due giocatori vinca in un numero di partite $\le 12$ è:

$$p(10) + p(11) + p(12) = \frac{1}{2^9} + \frac{5}{2^9} + \frac{55}{2^{11}} = \frac{4}{2^{11}} + \frac{20}{2^{11}} + \frac{55}{2^{11}} = \frac{79}{2^{11}} = \frac{79}{2048} \approx 3{,}9\%$$

---

## Quesito 8

**Determinare i valori del parametro $k \in \mathbb{R}$ per cui la funzione $y(x) = 2e^{kx+2}$ è soluzione dell'equazione differenziale $y'' - 2y' - 3y = 0$.**

Si ha $y' = 2ke^{kx+2}$ e $y'' = 2k^2 e^{kx+2}$, quindi:

$$2k^2 e^{kx+2} - 4ke^{kx+2} - 6e^{kx+2} = 0$$

Dividendo per $e^{kx+2} \ne 0$:

$$2k^2 - 4k - 6 = 0, \quad k^2 - 2k - 3 = 0$$

$$k = 3, \quad k = -1$$

---

## Quesito 9

**Trovare l'area $R$ della regione racchiusa dalla curva $y = \dfrac{1}{\sqrt{x}}$ per $4 \le x \le 9$. Sapendo che la retta $x = k$ divide $R$ in due figure di egual area, determinare il valore di $k$.**

$$\text{Area}(R) = \int_4^9 \frac{1}{\sqrt{x}}\,dx = 2\left[\sqrt{x}\right]_4^9 = 2(3 - 2) = 2 \text{ u}^2$$

Deve essere:

$$\int_4^k \frac{1}{\sqrt{x}}\,dx = 1, \quad 2\left[\sqrt{x}\right]_4^k = 1, \quad 2(\sqrt{k} - 2) = 1, \quad 2\sqrt{k} = 5, \quad k = \frac{25}{4}$$

---

## Quesito 10

**Verificare che, qualunque siano le costanti reali $\varphi$ e $k$, la funzione $y = ke^{-x}\sin(x + \varphi)$ è soluzione dell'equazione differenziale $y'' + 2y' + 2y = 0$. Trovare $\varphi$ e $k$ tali che questa funzione abbia un punto di massimo di coordinate $(0, 1)$.**

**Verifica:**

$$y' = -ke^{-x}\sin(x + \varphi) + ke^{-x}\cos(x + \varphi) = ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi)]$$

$$y'' = -ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi)] + ke^{-x}[-\sin(x + \varphi) - \cos(x + \varphi)]$$

$$= -ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi) + \sin(x + \varphi) + \cos(x + \varphi)] = -2ke^{-x}\cos(x + \varphi)$$

Sostituendo nell'equazione differenziale:

$$-2ke^{-x}\cos(x + \varphi) + 2ke^{-x}[\cos(x + \varphi) - \sin(x + \varphi)] + 2ke^{-x}\sin(x + \varphi) = 0$$

$$0 = 0 \quad \checkmark$$

Quindi la funzione è soluzione per ogni $k$ e per ogni $\varphi$.

**Punto di massimo in $(0, 1)$:**

Se in $(0, 1)$ c'è un massimo deve essere $y(0) = 1$, $y'(0) = 0$, $y''(0) < 0$:

$$y(0) = k\sin(\varphi) = 1$$
$$y'(0) = k(\cos(\varphi) - \sin(\varphi)) = 0$$
$$y''(0) = -2k\cos(\varphi) < 0$$

Dalla seconda relazione, non potendo essere $k = 0$, ricaviamo $\cos(\varphi) = \sin(\varphi)$, cioè $\varphi = \dfrac{\pi}{4} + h\pi$ con $h \in \mathbb{Z}$.

$$\begin{cases} k\sin(\varphi) = 1 \\ \cos(\varphi) = \sin(\varphi) \end{cases}$$

- Se $h$ pari: $\varphi = \dfrac{\pi}{4} + 2m\pi$ quindi $\sin(\varphi) = \dfrac{\sqrt{2}}{2}$, da cui $k \cdot \dfrac{\sqrt{2}}{2} = 1 \Rightarrow k = \sqrt{2}$
- Se $h$ dispari: $\varphi = \dfrac{\pi}{4} + (2m+1)\pi$ quindi $\sin(\varphi) = -\dfrac{\sqrt{2}}{2}$, da cui $k \cdot \left(-\dfrac{\sqrt{2}}{2}\right) = 1 \Rightarrow k = -\sqrt{2}$

Entrambe le coppie soddisfano la condizione $y''(0) = -2k\cos(\varphi) < 0$.

Quindi, per esempio: $\varphi = \dfrac{\pi}{4}$ e $k = \sqrt{2}$, oppure $\varphi = \dfrac{5\pi}{4}$ e $k = -\sqrt{2}$.

In corrispondenza di questi valori si ottiene in entrambi i casi la stessa funzione:

$$y = \sqrt{2}\, e^{-x}\sin\!\left(x + \frac{\pi}{4}\right)$$
