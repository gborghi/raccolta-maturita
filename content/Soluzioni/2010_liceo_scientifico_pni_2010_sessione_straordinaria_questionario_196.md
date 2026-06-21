---
tipo: soluzione
prova_stem: 2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196
pdf: Prova_Maturita_2010.pdf
source: text
title: >-
  Soluzioni —
  2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196
---

# Soluzioni — 2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196

## Quesito 1

Due osservatori si trovano ai lati opposti di un grattacielo, a livello del suolo. La cima dell'edificio dista 1600 metri dal primo osservatore, che la vede con un angolo di elevazione di 15°. Se il secondo individuo si trova a 650 metri dalla cima del grattacielo, quale è la distanza tra i due osservatori?

Sia $A$ l'osservatore da cui la cima del grattacielo dista 1600 m e $B$ quello da cui la cima del grattacielo dista 650 m. Indichiamo con $H$ la base del grattacielo e con $C$ la cima. Avremo:

$$AH = 1600\cos 15° \cong 1545{,}48 \text{ m}, \qquad CH = 1600\sin(15°) \cong 414{,}11 \text{ m}$$

Risulta quindi:

$$BH = \sqrt{BC^2 - CH^2} = \sqrt{650^2 - 414{,}11^2} \cong 501{,}01 \text{ m}$$

$$AB = 1545{,}48 \text{ m} + 501{,}01 \text{ m} = 2046{,}49 \text{ m}$$

La distanza tra i due osservatori è di circa **2046 metri**.

## Quesito 2

Si calcoli il limite della funzione $(1 + \tan x)^{\cot x}$ quando $x$ tende a 0.

$$\lim_{x \to 0} (1 + \tan x)^{\cot x} = \lim_{x \to 0} (1 + \tan x)^{\frac{1}{\tan x}} = e$$

Ricordiamo che dal limite notevole $\displaystyle\lim_{x \to \infty}\!\left(1 + \frac{1}{x}\right)^x = e$ segue che $\displaystyle\lim_{x \to 0}(1 + x)^{\frac{1}{x}} = e$.

Da questo si deduce che, se $f(x) \to 0$, allora $[1 + f(x)]^{\frac{1}{f(x)}}$ tende a $e$. Nel nostro caso $f(x) = \tan x$.

## Quesito 3

In quanti modi 10 persone possono disporsi su dieci sedili allineati? E attorno ad un tavolo circolare?

Le dieci persone si possono sedere su dieci sedie allineate in un numero di modi pari alle permutazioni di 10 oggetti, cioè $10! = 3\,628\,800$.

Se le dieci persone siedono intorno ad un tavolo circolare, siccome una configurazione non cambia se ruotiamo le sedie, immaginiamo di occupare un posto con una persona qualsiasi. Gli altri nove posti possono essere occupati dalle nove persone rimanenti in $9! = 362\,880$ modi.

## Quesito 4

Si dimostri che ogni funzione $f(x) = ax^3 + bx^2 + cx + d$, dove $a, b, c, d$ sono valori reali con $a \neq 0$, ha un massimo e un minimo relativi oppure non ha estremanti.

Osserviamo che la cubica al più infinito e al meno infinito ammette limiti infiniti di segno discorde:

$$\lim_{x \to \pm\infty}(ax^3 + bx^2 + cx + d) = \lim_{x \to \pm\infty}(ax^3) = \pm\infty \text{ se } a > 0 \text{, e } \mp\infty \text{ se } a < 0.$$

Analizziamo la derivata prima:

$$f'(x) = 3ax^2 + 2bx + c$$

**Caso 1:** Se $\dfrac{\Delta}{4} = b^2 - 3ac < 0$: non abbiamo punti a tangente orizzontale e la funzione è sempre crescente o decrescente (a seconda del segno di $a$); in tal caso la funzione non ammette estremanti.

Esempio: $b=1,\ a=1,\ c=1,\ d=0$: $f(x) = x^3 + x^2 + x$.

**Caso 2:** Se $\dfrac{\Delta}{4} = b^2 - 3ac > 0$: la funzione è crescente per valori esterni o interni all'intervallo con estremi le radici di $f'(x) = 0$ e quindi ammette un massimo ed un minimo relativi.

Esempio 1 ($a > 0$): $b=2,\ a=1,\ c=1,\ d=0$: $f(x) = x^3 + 2x^2 + x$.

Esempio 2 ($a < 0$): $b=2,\ a=-1,\ c=-1,\ d=0$: $f(x) = -x^3 + 2x^2 - x$.

**Caso 3:** Se $\dfrac{\Delta}{4} = b^2 - 3ac = 0$: si ha che $f'(x) = 0$ in un solo punto ed $f'(x)$ è sempre positiva o negativa, quindi la funzione è sempre crescente: non ci sono estremanti.

Esempio: $b=3,\ a=1,\ c=3,\ d=0$: $f(x) = x^3 + 3x^2 + 3x$.

## Quesito 5

Si calcoli il volume del solido generato da una rotazione completa attorno all'asse $x$ del triangolo di vertici $A(2,2)$, $B(6,4)$, $C(6,6)$.

Il volume del solido richiesto si ottiene sottraendo al volume $V_1$ del tronco di cono di raggi $AH = 2$ e $CK = 6$ il volume $V_2$ del tronco di cono di raggi $AH = 2$ e $BK = 4$. Entrambi i tronchi di cono hanno altezza $HK = 4$. Ricordando che la formula per il volume del tronco di cono è:

$$V = \frac{1}{3}\pi\,(R^2 + r^2 + Rr)\cdot h$$

abbiamo:

$$V_1 - V_2 = \frac{1}{3}\pi(6^2 + 2^2 + 6\cdot 2)\cdot 4 - \frac{1}{3}\pi(4^2 + 2^2 + 4\cdot 2)\cdot 4 = \frac{208}{3}\pi - \frac{112}{3}\pi = 32\pi \cong 101 \text{ u}^3$$

## Quesito 6

I vertici di un triangolo sono: $O(0,0)$, $A(0,2)$, $B(1,1)$. Si trovi l'equazione della circonferenza $\gamma$ inscritta nel triangolo $OAB$ e quella della circonferenza $\gamma'$ ad esso circoscritta.

**Circonferenza inscritta:**

Osserviamo che, data la simmetria del triangolo (rettangolo in $B$ e con ipotenusa $OA$), la circonferenza è tangente ad $OA$ nel punto di coordinate $(0,1)$. Ricordando che l'area di un poligono circoscritto ad una circonferenza è uguale al suo semiperimetro $p$ moltiplicato per il raggio $r$ della circonferenza inscritta, si ha:

$$\text{Area}(OAB) = p \cdot r \implies r = \frac{\text{Area}(OAB)}{p}$$

Risulta $OB = AB = \sqrt{2}$, $OA = 2$, quindi $p = 1 + \sqrt{2}$ e $\text{Area}(OAB) = 1$, dunque:

$$r = \frac{1}{1 + \sqrt{2}} = \sqrt{2} - 1$$

Il centro della circonferenza ha quindi coordinate $(\sqrt{2}-1,\ 1)$; la circonferenza inscritta ha equazione:

$$\left(x - \sqrt{2} + 1\right)^2 + (y-1)^2 = (\sqrt{2}-1)^2, \qquad x^2 + y^2 + 2(1-\sqrt{2})\,x + 1 = 0$$

**Circonferenza circoscritta:**

Essendo $OAB$ rettangolo in $B$, la circonferenza circoscritta ha centro nel punto medio $D$ dell'ipotenusa $AO$, che ha coordinate $(0,1)$, e raggio pari alla metà di $AO$, cioè 1; l'equazione della circonferenza circoscritta è:

$$x^2 + (y-1)^2 = 1, \qquad x^2 + y^2 - 2y = 0$$

## Quesito 7

Si verifichi che la cubica di equazione $y = x^3 + 3x^2 + 3x - 7$ è simmetrica rispetto al suo punto di flesso.

La proprietà richiesta è valida per tutte le cubiche. Verifichiamola per la cubica data.

Cerchiamo il flesso:

$$y' = 3x^2 + 6x + 3, \qquad y'' = 6x + 6 = 0 \implies x = -1$$

Il flesso $F$ ha quindi coordinate $(-1,\ -8)$.

Le equazioni della simmetria rispetto al punto $(a, b)$ sono:

$$\begin{cases} x' = 2a - x \\ y' = 2b - y \end{cases}$$

Nel nostro caso, con $a = -1$ e $b = -8$:

$$\begin{cases} X = -2 - x \\ Y = -16 - y \end{cases} \implies \begin{cases} x = -2 - X \\ y = -16 - Y \end{cases}$$

La simmetrica della cubica rispetto ad $F$ ha equazione:

$$-16 - Y = (-2-X)^3 + 3(-2-X)^2 + 3(-2-X) - 7 = -X^3 - 3X^2 - 3X - 9$$

$$\implies Y = X^3 + 3X^2 + 3X - 7$$

La simmetrica della cubica rispetto al suo flesso coincide con la cubica data, quindi essa è simmetrica rispetto al suo punto di flesso.

## Quesito 8

Si dimostri che l'equazione $\dfrac{1}{x} - e^x = 0$ ha un'unica radice reale e se ne calcoli un valore approssimato con due cifre decimali esatte.

Posto $a(x) = \dfrac{1}{x}$ e $b(x) = e^x$, le soluzioni dell'equazione data corrispondono alle ascisse dei punti di intersezione dei grafici delle due funzioni. Dal grafico si evince che la radice richiesta è unica e che è compresa tra 0 e 1.

*(grafico — vedi PDF)*

Restringiamo l'intervallo in cui si trova la radice. Posto $f(x) = \dfrac{1}{x} - e^x$, si ha:

$$f(0{,}5) = 2 - e^{0{,}5} \cong 0{,}35 > 0, \qquad f(0{,}6) \cong -0{,}16 < 0$$

quindi la radice appartiene all'intervallo $[a;\, b] = [0{,}5;\, 0{,}6]$.

La funzione $f(x)$ è continua nell'intervallo chiuso $[a;\,b]$ e derivabile nell'aperto $(a;\,b)$ ed è:

$$f'(x) = -\frac{1}{x^2} - e^x < 0 \quad \text{per ogni } x \in [0{,}5;\, 0{,}6]$$

quindi la funzione è sempre decrescente. Inoltre:

$$f''(x) = \frac{2}{x^3} - e^x$$

Dal grafico si evince che $\dfrac{2}{x^3} < e^x$ in $[0{,}5;\, 0{,}6]$, quindi in tale intervallo $f''(x) < 0$, cioè la derivata seconda ha lo stesso segno di $f(b)$.

Essendo il segno della derivata seconda costante, possiamo applicare il **metodo delle tangenti (metodo di Newton)**. Essendo $f(a)\cdot f''(x) < 0$ in $[a,b] = [0{,}5;\, 0{,}6]$, dobbiamo assumere come punto iniziale di iterazione $x_0 = b = 0{,}6$:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

$$x_1 = 0{,}6 - \frac{f(0{,}6)}{f'(0{,}6)} \cong 0{,}566, \qquad x_2 = 0{,}566 - \frac{f(0{,}566)}{f'(0{,}566)} \cong 0{,}567, \qquad x_3 \cong 0{,}567$$

Quindi la radice approssimata con due cifre decimali esatte è $x \cong 0{,}57$.

## Quesito 9

Una rappresentanza di cinque persone deve essere scelta a caso tra dieci uomini e tre donne. Qual è la probabilità che il comitato sia costituito da tre uomini e due donne?

Abbiamo 13 persone. Le cinquine possibili sono le combinazioni di 13 oggetti a 5 a 5:

$$\binom{13}{5} = \frac{13\cdot 12\cdot 11\cdot 10\cdot 9}{5!} = 1287$$

Le possibili terne di uomini sono le combinazioni di 10 oggetti a 3 a 3:

$$\binom{10}{3} = \frac{10\cdot 9\cdot 8}{3!} = 120$$

Le possibili coppie di donne sono le combinazioni di 3 oggetti a 2 a 2:

$$\binom{3}{2} = 3$$

Le cinquine favorevoli sono: $120 \cdot 3 = 360$. La probabilità richiesta è:

$$p(\text{3 uomini e 2 donne}) = \frac{360}{1287} = \frac{40}{143} \cong 0{,}2797 \cong 28\%$$

## Quesito 10

Sia data l'ellisse di equazione $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ e il rombo in essa inscritto, con i vertici coincidenti con quelli dell'ellisse. Si scelga a caso un punto all'interno dell'ellisse: si determini la probabilità che tale punto risulti esterno al rombo.

$$\text{Area(ellisse)} = \pi ab, \qquad \text{Area(rombo)} = \frac{2a \cdot 2b}{2} = 2ab$$

La probabilità richiesta è:

$$p = \frac{\text{Area favorevole}}{\text{Area possibile}} = \frac{\text{Area(ellisse)} - \text{Area(rombo)}}{\text{Area(ellisse)}} = \frac{\pi ab - 2ab}{\pi ab} = \frac{\pi - 2}{\pi} \cong 0{,}363 \cong 36\%$$
