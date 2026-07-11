---
tipo: soluzione
prova_stem: 2008_sessione_ordinaria_2008_prova_6
pdf: Prova_Maturita_2008.pdf
source: text
title: 2008 Ordinaria — Prova (Ordinamento) — Svolgimento
---
## Problema 1

Il triangolo rettangolo $ABC$ ha l'ipotenusa $AB = a$ e l'angolo $\widehat{BAC} = \dfrac{\pi}{3}$.

### a)

I cateti del triangolo valgono:

$$AC = \frac{a}{2}, \qquad BC = \frac{a\sqrt{3}}{2}$$

Posto $BQ = x$ (raggio dell'arco con centro $B$), affinché $R$ appartenga al lato $AC$ e $Q$ al lato $BC$, la costruzione è realizzabile se:

$$\frac{a}{2} \le x \le \frac{a\sqrt{3}}{2}$$

### b)

$$S(x) = \text{area}(\triangle ABC) - \text{area(settore APR)} - \text{area(settore BPQ)}$$

$$= \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{6}(a - x)^2 - \frac{\pi}{3}\,x^2$$

Sviluppando:

$$S(x) = -\frac{\pi}{4}\,x^2 + \frac{\pi}{3}\,ax + \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{6}\,a^2$$

$S(x)$ è un'equazione di parabola con concavità verso il basso; il massimo si ha dove $S'(x) = 0$:

$$S'(x) = -\frac{\pi}{2}\,x + \frac{\pi}{3}\,a = 0 \implies x = \frac{2a}{3}$$

La funzione è crescente per $x < \dfrac{2a}{3}$ e decrescente per $x > \dfrac{2a}{3}$; pertanto in $x = \dfrac{2a}{3}$ si ha il massimo:

$$S\!\left(\frac{2a}{3}\right) = \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{18}\,a^2 \approx 0{,}04\,a^2$$

Valutando agli estremi dell'intervallo:

$$S\!\left(\frac{a}{2}\right) = \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{8}\,a^2 \approx 0{,}02\,a^2$$

$$S\!\left(\frac{a\sqrt{3}}{2}\right) = \frac{\sqrt{3}}{8}\,a^2 - \frac{17\pi}{48}\,a^2 + \frac{\pi\sqrt{3}}{6}\,a^2 \approx 0{,}01\,a^2$$

Il minimo di $S(x)$ si ha per $x = \dfrac{a\sqrt{3}}{2}$ e vale circa $0{,}01\,a^2$.

### c)

Il piede $H$ dell'altezza da $C$ sull'ipotenusa vale:

$$CH = \frac{AC \cdot BC}{AB} = \frac{\dfrac{a}{2} \cdot \dfrac{a\sqrt{3}}{2}}{a} = \frac{a\sqrt{3}}{4}$$

Posto $GD = x$ (lato del rettangolo perpendicolare ad $AB$), con $0 < x < \dfrac{a\sqrt{3}}{4}$, dalla similitudine fra i triangoli $GFC$ e $ABC$:

$$GF : AB = \left(\frac{a\sqrt{3}}{4} - x\right) : \frac{a\sqrt{3}}{4} \implies GF = a - \frac{4x}{\sqrt{3}}$$

L'area $y$ del rettangolo inscritto è:

$$y = x \cdot GF = x\left(a - \frac{4x}{\sqrt{3}}\right) = \frac{4\sqrt{3}}{3}\,x\!\left(\frac{a\sqrt{3}}{4} - x\right)$$

Con il metodo della parabola o delle derivate si trova il massimo per $x = \dfrac{a\sqrt{3}}{8}$.

L'area massima vale:

$$y_{\max} = \frac{\sqrt{3}}{16}\,a^2$$

### d)

Il solido $W$ è costituito da due piramidi aventi per base comune il quadrato di lato $CD$ e per altezze rispettivamente $AD$ e $BD$.

Con $A = (0;\,0)$, $B = (a;\,0)$, il piede $D$ dell'altezza da $C$ su $AB$ ha: $AD = \dfrac{a}{4}$, $BD = \dfrac{3a}{4}$, $CD = \dfrac{a\sqrt{3}}{4}$.

Il volume della prima piramide:

$$V_1 = \frac{1}{3} \cdot CD^2 \cdot AD = \frac{1}{3} \cdot \frac{3a^2}{16} \cdot \frac{a}{4} = \frac{a^3}{64}$$

Il volume della seconda piramide:

$$V_2 = \frac{1}{3} \cdot CD^2 \cdot BD = \frac{1}{3} \cdot \frac{3a^2}{16} \cdot \frac{3a}{4} = \frac{3a^3}{64}$$

Il volume richiesto è pertanto:

$$V = V_1 + V_2 = \frac{a^3}{64} + \frac{3a^3}{64} = \frac{a^3}{16}$$

**Verifica con il calcolo integrale.** Coordinando $A = (0;\,0)$, $B = (a;\,0)$, la retta $AC$ ha equazione $f(x) = \sqrt{3}\,x$ (per una scelta di assi opportuna con $C$ sopra $AB$). Con gli assi posti lungo $AB$:

Retta $AC$: $y = f(x) = \sqrt{3}\,x$ per $0 \le x \le \dfrac{a}{4}$:

$$V_1 = \int_0^{a/4} [f(x)]^2\,dx = \int_0^{a/4} 3x^2\,dx = \left[x^3\right]_0^{a/4} = \frac{a^3}{64}$$

Retta $BC$: $y = g(x) = \sqrt{3}(a - x)$ per $\dfrac{a}{4} \le x \le a$:

$$V_2 = \int_{a/4}^{a} [g(x)]^2\,dx = \int_{a/4}^{a} 3(a - x)^2\,dx = \frac{3a^3}{64}$$

E si ottiene il valore già trovato precedentemente: $V = \dfrac{a^3}{16}$.

---

## Problema 2

Il semicerchio $\Gamma$ ha centro $C$ e diametro $AB = 2$.

### a)

Il secondo semicerchio $\Gamma_1$ è tangente ad $AB$ in $C$ e ha raggio $1$.

I segmenti $OC$, $OD$, $OE$, $CD$ e $CE$ misurano tutti $1$ (raggi); pertanto gli angoli $\widehat{DOC}$ e $\widehat{COE}$ misurano $60°$. Il punto $F$ (piede della perpendicolare da $O$ su $DE$) soddisfa:

$$OF = \frac{1}{2}, \qquad DF = FE = \frac{\sqrt{3}}{2}$$

L'area dell'intersezione è il doppio dell'area del segmento circolare $DCE$:

$$\text{Area(segmento } DCE) = \text{Area(settore } DOE \text{ di } \Gamma_1) - \text{Area}(\triangle DOE)$$

$$= \frac{\pi}{3} - \frac{1}{2} \cdot DE \cdot OF = \frac{\pi}{3} - \frac{1}{2} \cdot \sqrt{3} \cdot \frac{1}{2} = \frac{\pi}{3} - \frac{\sqrt{3}}{4}$$

L'area richiesta vale quindi:

$$2\!\left(\frac{\pi}{3} - \frac{\sqrt{3}}{4}\right) = \frac{2\pi}{3} - \frac{\sqrt{3}}{2}$$

### b)

Posto $AL = x$, con $0 \le x \le 1$. Per il secondo teorema di Euclide:

$$GL = \sqrt{x(2 - x)}, \qquad KL = GL = \sqrt{x(2 - x)}, \qquad LB = 2 - x$$

L'area del rettangolo $GHKL$ è $y = KL \cdot GL = x(2-x)$; massimizzando $z = y^2 \cdot 4(1-x)^2 \cdot x(2-x)$, si trova il massimo per:

$$x = 2 - \sqrt{2}$$

In corrispondenza di tale valore si ha l'area massima richiesta, che è pari a $1$.

### c)

Sia $\widehat{BCP} = x$ con $P$ punto della semicirconferenza di $\Gamma$ e $H$ proiezione ortogonale di $P$ su $AB$.

**Caso $0 < x < \dfrac{\pi}{2}$:**

$$AP = 2\cos\frac{x}{2}, \quad AH = 2\cos^2\frac{x}{2} = 1 + \cos x, \quad PH = \sin x, \quad CH = \cos x$$

$$S_1 = \text{Area}(\triangle APH) = \frac{1}{2}\,AH \cdot PH = \frac{1}{2}(1 + \cos x)\sin x$$

$$S_2 = \text{Area}(\triangle PCH) = \frac{1}{2}\,PH \cdot CH = \frac{1}{2}\sin x\cos x$$

$$f(x) = \frac{S_1(x)}{S_2(x)} = \frac{(1 + \cos x)\sin x}{\sin x\cos x} = \frac{1 + \cos x}{\cos x} = \sec x + 1$$

**Caso $\dfrac{\pi}{2} < x < \pi$:**

In questo caso $CH = -\cos x > 0$, quindi:

$$S_2 = \frac{1}{2}\sin x\cdot(-\cos x) = -\frac{1}{2}\sin x\cos x$$

$$f(x) = \frac{\frac{1}{2}(1 + \cos x)\sin x}{-\frac{1}{2}\sin x\cos x} = -\frac{1 + \cos x}{\cos x} = -(\sec x + 1)$$

Complessivamente, la formula unificata è:

$$f(x) = \sec x + 1$$

### d)

Il grafico di $f(x) = \sec x + 1$ si ottiene dal grafico della secante traslato verticalmente di $+1$.

Dominio: $\mathbb{R} \setminus \!\left\{\dfrac{\pi}{2} + k\pi,\; k \in \mathbb{Z}\right\}$.

*(grafico nell'intervallo $[-2\pi;\,2\pi]$ — vedi PDF)*

---

## Quesito 9

*(Sessione ordinaria 2008 — Quesito 9 del questionario)*

**Sia $f(x) = \dfrac{\sqrt{x} - 1}{x - 1}$. Esiste $\lim_{x \to 1} f(x)$? Si giustifichi la risposta.**

Sì, il limite esiste. Per $x \ne 1$, si fattorizza $x - 1 = (\sqrt{x} - 1)(\sqrt{x} + 1)$, quindi:

$$f(x) = \frac{\sqrt{x} - 1}{(\sqrt{x} - 1)(\sqrt{x} + 1)} = \frac{1}{\sqrt{x} + 1}$$

Pertanto:

$$\lim_{x \to 1} f(x) = \frac{1}{\sqrt{1} + 1} = \frac{1}{2}$$

Il limite esiste e vale $\dfrac{1}{2}$.

---

## Quesito 10

*(Sessione ordinaria 2008 — Quesito 10 del questionario)*

**Una strada rettilinea percorre $1{,}2$ km superando un dislivello di $85$ m. Qual è la sua inclinazione in gradi sessagesimali? Quale la percentuale da riportare sul segnale?**

Detto $\alpha$ l'angolo di inclinazione rispetto all'orizzontale:

$$\sin\alpha = \frac{85}{1200} \approx 0{,}07083 \implies \alpha = \arcsin(0{,}07083) \approx 4{,}06° \approx 4°4'$$

La pendenza percentuale:

$$\tan\alpha = \frac{85}{\sqrt{1200^2 - 85^2}} \approx \frac{85}{1196{,}98} \approx 0{,}071 \approx 7{,}1\%$$

La pendenza da riportare sul segnale è circa il $7\%$.

---

## Quesito 1

*(Scuole italiane all'estero, Americhe — Sessione Ordinaria 2008 — Quesito 1)*

**Una strada rettilinea in salita supera un dislivello di $150$ m con un percorso di $3$ km. Qual è la sua inclinazione?**

Detto $\alpha$ l'angolo della strada rispetto all'orizzontale:

$$\sin\alpha = \frac{150}{3000} = 0{,}05 \implies \alpha = \arcsin(0{,}05) \approx 2{,}87° \approx 2°52'$$

L'inclinazione è di circa $2°52'$.

La pendenza è $\tan\alpha = \dfrac{BC}{AB}$; con $AB = \sqrt{3000^2 - 150^2} \approx 2996{,}25$ m:

$$\tan\alpha = \frac{150}{2996{,}25} \approx 0{,}05006 \approx 5\%$$

La pendenza è di circa il $5\%$.

---

## Quesito 2

*(Scuole italiane all'estero, Americhe — Quesito 2)*

**Si provi che fra tutti i cilindri inscritti in un cono circolare retto ha volume massimo quello la cui altezza è la terza parte dell'altezza del cono.**

Sia il cono di raggio $r$ e altezza $h$. Indicata con $x$ la distanza della base superiore del cilindro dal vertice del cono, per similitudine il raggio del cilindro è:

$$FG = \frac{x \cdot r}{h}$$

Il volume del cilindro è:

$$V(x) = \pi \cdot FG^2 \cdot (h - x) = \frac{\pi r^2}{h^2}\,x^2(h - x)$$

$V$ è massimo quando lo è $y = x^2(h - x)$, con $0 \le x \le h$.

Il prodotto $x^2(h - x)$ è massimo quando le basi $x$ e $h - x$ sono proporzionali agli esponenti $2$ e $1$:

$$\frac{x}{2} = \frac{h - x}{1} \implies x = 2(h - x) \implies x = \frac{2h}{3}$$

Per tale $x$, l'altezza del cilindro è:

$$h - x = h - \frac{2h}{3} = \frac{h}{3}$$

Il cilindro di volume massimo è quindi quello la cui altezza è un terzo dell'altezza del cono.

---

## Quesito 3

*(Scuole italiane all'estero, Americhe — Quesito 3)*

**Quale significato attribuisci al simbolo $\dbinom{n}{k}$? Esiste un $k$ tale che $\dbinom{12}{k} = \dbinom{12}{k-3}$?**

Il simbolo $\dbinom{n}{k}$ indica le combinazioni di $n$ oggetti a $k$ a $k$:

$$\binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \binom{n}{n-k}$$

Per l'uguaglianza $\dbinom{12}{k} = \dbinom{12}{k-3}$:
- Se $k = k - 3$: impossibile;
- Se $12 - k = k - 3$, allora $2k = 15$, cioè $k = \dfrac{15}{2}$: non intero.

Non esiste alcun valore intero di $k$ che risolve il problema.

---

## Quesito 4

*(Scuole italiane all'estero, Americhe — Quesito 4)*

**Si diano esempi di funzioni i cui grafici presentino due asintoti verticali e un asintoto orizzontale.**

Un primo esempio:

$$f(x) = \frac{x^2}{(x-1)(x+1)} = \frac{x^2}{x^2 - 1}$$

con asintoti verticali $x = 1$, $x = -1$ e asintoto orizzontale $y = 1$.

Un secondo esempio:

$$g(x) = \frac{1}{x} + \frac{1}{x - 1} + 1$$

con asintoti verticali $x = 0$, $x = 1$ e asintoto orizzontale $y = 1$.

*(grafici — vedi PDF)*

---

## Quesito 5

*(Scuole italiane all'estero, Americhe — Quesito 5)*

**Si calcoli il numero delle soluzioni dell'equazione $|x^2 - x| = k$ al variare di $k \in \mathbb{R}$.**

Il problema equivale a trovare le intersezioni fra il grafico di $y = |x^2 - x|$ e la retta $y = k$.

Il grafico si ottiene dalla parabola $y = x^2 - x$ (vertice in $\left(\dfrac{1}{2};\,-\dfrac{1}{4}\right)$, zeri in $x = 0$ e $x = 1$, concavità verso l'alto) ribaltando la parte negativa rispetto all'asse $x$.

Il numero di soluzioni è:
- $0$ soluzioni se $k < 0$;
- $2$ soluzioni se $k = 0$ oppure se $k > \dfrac{1}{4}$;
- $3$ soluzioni se $k = \dfrac{1}{4}$ (due coincidenti);
- $4$ soluzioni se $0 < k < \dfrac{1}{4}$.

*(grafico — vedi PDF)*

---

## Quesito 6

*(Scuole italiane all'estero, Americhe — Quesito 6)*

**Quante diagonali ha un poligono di $2008$ lati?**

Il numero delle diagonali di un poligono di $n$ lati è:

$$\frac{n(n-3)}{2}$$

Per $n = 2008$:

$$\frac{2008 \cdot 2005}{2} = 2013020$$

**Dimostrazione.** Da ogni vertice si tracciano $n - 3$ diagonali; i vertici sono $n$, quindi si contano $n(n-3)$ diagonali; ogni diagonale è contata due volte (congiunge due vertici), quindi il numero totale è $\dfrac{n(n-3)}{2}$.

---

## Quesito 7

*(Scuole italiane all'estero, Americhe — Quesito 7)*

**Dati $P(x,\,|x|)$ e $Q\!\left(x,\,\sqrt{4 - x^2}\right)$, determinare l'insieme delle ascisse $x$ per cui l'ordinata di $Q$ è minore dell'ordinata di $P$.**

Dobbiamo risolvere $\sqrt{4 - x^2} < |x|$, imponendo il sistema:

$$\begin{cases} 4 - x^2 \ge 0 \\ 4 - x^2 < x^2 \end{cases} \implies \begin{cases} -2 \le x \le 2 \\ 2x^2 > 4 \implies |x| > \sqrt{2} \end{cases}$$

L'insieme cercato è:

$$-2 \le x < -\sqrt{2} \quad \text{oppure} \quad \sqrt{2} < x \le 2$$

---

## Quesito 8

*(Scuole italiane all'estero, Americhe — Quesito 8)*

**La regione $R$ è delimitata da $y = 12\sqrt{x}$, dall'asse $x$ e dalla retta $x = 2$. È la base di un solido $S$ le cui sezioni con piani perpendicolari all'asse $x$ sono triangoli equilateri. Si calcoli il volume di $S$.**

La sezione in $x$ è un triangolo equilatero di lato $\ell(x) = 12\sqrt{x}$, con area:

$$A(x) = \frac{\sqrt{3}}{4}\,\ell(x)^2 = \frac{\sqrt{3}}{4} \cdot 144x = 36\sqrt{3}\,x$$

Il volume è:

$$V(S) = \int_0^2 36\sqrt{3}\,x\,dx = 36\sqrt{3}\left[\frac{x^2}{2}\right]_0^2 = 36\sqrt{3} \cdot 2 = 72\sqrt{3} \approx 124{,}71 \text{ u}^3$$
