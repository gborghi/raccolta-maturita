---
tipo: soluzione
prova_stem: 2007_liceo_scientifico_pni_2007_sessione_straordinaria_questionario_143
pdf: Prova_Maturita_2007.pdf
source: text
title: 2007 LS PNI Straordinaria — Questionario — Svolgimento
---
## Quesito 1

Si calcoli il limite della funzione $y = \dfrac{\log(x+3) - \log(2x+1)}{x^2 + x - 6}$ quando $x$ tende a $2$.

Il limite si presenta nella forma indeterminata $0/0$.

$$\frac{\log(x+3) - \log(2x+1)}{x^2 + x - 6} = \frac{\log\dfrac{x+3}{2x+1}}{(x+3)(x-2)} = \frac{\log\!\left(1 + \dfrac{x+3}{2x+1} - 1\right)}{(x+3)(x-2)} = \frac{\log\!\left(1 + \dfrac{2-x}{2x+1}\right)}{(x+3)(x-2)}$$

Ricordiamo che se $f(x) \to 0$ allora $\log(1 + f(x)) \sim f(x)$, dove il logaritmo è inteso come logaritmo naturale. Quindi:

$$\frac{\log\!\left(1 + \dfrac{2-x}{2x+1}\right)}{(x+3)(x-2)} \sim \frac{\dfrac{2-x}{2x+1}}{5(x-2)} = -\frac{1}{5} \cdot \frac{1}{2x+1} \to -\frac{1}{25} \quad \text{se } x \to 2$$

## Quesito 2

Si calcoli il valor medio della funzione $y = |1 - x^2|$ nell'intervallo $-2 \le x \le 3$.

Ricordiamo che il valor medio di una funzione continua in un intervallo $[a;\, b]$ è dato da:

$$\frac{1}{b-a} \int_a^b f(x)\,dx$$

Poiché $1 - x^2 \ge 0$ se $-1 \le x \le 1$, otteniamo:

$$\frac{1}{b-a} \int_a^b f(x)\,dx = \frac{1}{5} \int_{-2}^{3} |1 - x^2|\,dx = \frac{1}{5} \left[ \int_{-2}^{-1}(x^2 - 1)\,dx + \int_{-1}^{1}(1 - x^2)\,dx + \int_{1}^{3}(x^2 - 1)\,dx \right]$$

$$= \frac{1}{5} \left\{ \left[\frac{x^3}{3} - x\right]_{-2}^{-1} + \left[-\frac{x^3}{3} + x\right]_{-1}^{1} + \left[\frac{x^3}{3} - x\right]_{1}^{3} \right\}$$

$$= \frac{1}{5} \left\{ \left(-\frac{1}{3} + 1 + \frac{8}{3} - 2\right) + \left(-\frac{1}{3} + 1 - \frac{1}{3} + 1\right) + \left(9 - 3 - \frac{1}{3} + 1\right) \right\} = \frac{1}{5} \cdot \frac{28}{3} = \frac{28}{15}$$

## Quesito 3

Data la funzione $y = \sqrt{1 - x^2}$, si stabilisca se sono verificate le condizioni di validità del teorema di Rolle nell'intervallo $-1 \le x \le 1$ e, in caso affermativo, si trovi il punto in cui si verifica la tesi del teorema.

La funzione è continua nell'intervallo chiuso. Calcoliamo la derivata prima:

$$y' = \frac{-x}{\sqrt{1 - x^2}}$$

che è derivabile nell'intervallo aperto $(-1,\, 1)$.

Inoltre $f(-1) = f(1) = 0$.

Quindi sono soddisfatte le ipotesi del teorema di Rolle. Esisterà allora almeno un punto interno all'intervallo in cui la derivata si annulla:

$$\frac{-x}{\sqrt{1 - x^2}} = 0 \quad \text{se} \quad x = 0.$$

## Quesito 4

Si consideri la seguente proposizione: "una piramide è retta se la verticale calata dal vertice cade entro il poligono di base". Si dica se è vera o falsa e si motivi esaurientemente la risposta.

La definizione di piramide retta è la seguente: "Una piramide si dice retta se il poligono di base è circoscrivibile ad una circonferenza e se la perpendicolare condotta dal vertice al piano di base cade nel centro della circonferenza inscritta".

Quindi la proposizione è **falsa**, in quanto contraddice la definizione di piramide retta.

## Quesito 5

La regione finita di piano delimitata dalla curva d'equazione $y = \sqrt{\sin x}$ e dall'asse delle $x$ nell'intervallo $0 \le x \le \pi$ è la base di un solido $S$ le cui sezioni ottenute con piani perpendicolari all'asse $x$ sono tutte quadrati. Si calcoli il volume di $S$.

Notiamo che la funzione nell'intervallo dato è non negativa ed in particolare vale $0$ agli estremi ed è positiva negli altri punti. Il volume richiesto è del tipo:

$$V = \int_a^b A(x)\,dx, \quad \text{dove } A(x) \text{ è l'area della sezione.}$$

Nel nostro caso la sezione è un quadrato di lato $\sqrt{\sin x}$, quindi $A(x) = \left(\sqrt{\sin x}\right)^2 = \sin x$. Pertanto:

$$V(S) = \int_0^{\pi} \left(\sqrt{\sin x}\right)^2 dx = \int_0^{\pi} \sin x\,dx = \left[-\cos x\right]_0^{\pi} = (1 - (-1)) = 2 \text{ u}^3$$

## Quesito 6

Si verifichi che la curva di equazione $y = \dfrac{x-1}{x-2}$ è simmetrica rispetto all'intersezione dei suoi asintoti.

Si tratta di una funzione omografica il cui centro (punto di intersezione degli asintoti) ha coordinate $C = (2;\, 1)$.

Le equazioni della simmetria rispetto a $C$ sono:

$$\begin{cases} X = 4 - x \\ Y = 2 - y \end{cases} \implies \begin{cases} x = 4 - X \\ y = 2 - Y \end{cases}$$

La curva data si trasforma in:

$$2 - Y = \frac{(4-X) - 1}{(4-X) - 2} = \frac{3 - X}{2 - X}$$

$$Y = 2 - \frac{3 - X}{2 - X} = \frac{2(2-X) - (3-X)}{2-X} = \frac{1 - X}{2 - X} = \frac{X - 1}{X - 2}$$

La curva trasformata coincide con la curva di partenza, quindi è simmetrica rispetto a $C$.

## Quesito 7

Si inscriva in una sfera di raggio $R$ il cilindro di volume massimo.

Indichiamo con $R$ il raggio della sfera, con $r$ il raggio del cilindro e con $h$ l'altezza del cilindro.

Il volume del cilindro è dato da $V_{\text{cilindro}} = \pi r^2 h$. Ma risulta:

$$r^2 = R^2 - \frac{h^2}{4}$$

quindi:

$$V_{\text{cilindro}} = \pi\!\left(R^2 - \frac{h^2}{4}\right) h = f(h), \quad \text{con } 0 \le h \le 2R$$

Tale volume è massimo se lo è $y = \left(R^2 - \dfrac{h^2}{4}\right)h$; calcoliamo la derivata prima:

$$y' = R^2 - \frac{h^2}{4} + h\!\left(-\frac{h}{2}\right) = -\frac{3}{4}h^2 + R^2 \ge 0 \quad \text{se} \quad h^2 \le \frac{4}{3}R^2, \quad -R\sqrt{\frac{4}{3}} \le h \le R\sqrt{\frac{4}{3}}$$

Quindi, con le limitazioni su $h$, la funzione è crescente se $0 < h < R\sqrt{\dfrac{4}{3}}$ e decrescente se $R\sqrt{\dfrac{4}{3}} < h < 2R$: la funzione ha quindi un massimo (assoluto) per

$$h = R\sqrt{\frac{4}{3}} = \frac{2}{\sqrt{3}}\,R = \frac{2}{3}R\sqrt{3}.$$

Per tale valore di $h$ si ha:

$$r^2 = R^2 - \frac{h^2}{4} = R^2 - \frac{1}{4} \cdot \frac{4}{3}R^2 = \frac{2R^2}{3}, \quad r = \frac{R\sqrt{6}}{3}.$$

Il cilindro di volume massimo inscritto in una sfera di raggio $R$ è quello di altezza $\dfrac{2}{3}R\sqrt{3}$ e raggio di base $\dfrac{R\sqrt{6}}{3}$.

## Quesito 8

È più probabile ottenere almeno un 6 lanciando quattro volte un dado o ottenere almeno un 12 lanciando ventiquattro volte due dadi?

Si tratta di una variante del noto problema di Méré, già proposto nella maturità PNI del 2002.

Siano:
- $p_1$ = probabilità di ottenere almeno un 6 con 4 lanci di un dado
- $q_1$ = probabilità di non ottenere mai 6 con 4 lanci di un dado $= \left(\dfrac{5}{6}\right)^4$

Risulta:

$$p_1 = 1 - q_1 = 1 - \left(\frac{5}{6}\right)^4 \approx 0.518$$

Siano:
- $p_2$ = probabilità di ottenere almeno un 12 (doppio 6) con 24 lanci di due dadi
- $q_2$ = probabilità di non ottenere mai un doppio 6 con 24 lanci di due dadi $= \left(\dfrac{35}{36}\right)^{24}$

Risulta:

$$p_2 = 1 - q_2 = 1 - \left(\frac{35}{36}\right)^{24} \approx 0.491$$

Quindi è più probabile ottenere almeno una volta 6 con 4 lanci di un solo dado piuttosto che almeno un 12 con 24 lanci di due dadi.

## Quesito 9

Si enunci il quinto postulato di Euclide e si descriva qualche modello di geometria non euclidea.

**Quinto postulato di Euclide:** Per un punto esterno ad una retta passa **una sola parallela** alla retta data.

Da questo postulato discende la somma caratteristica degli angoli interni di un triangolo (un angolo piatto).

Se cade l'unicità delle parallele si hanno i seguenti casi:
- Di parallele non ne esistono (**geometria ellittica**, modello di Riemann): la somma degli angoli interni di un triangolo è maggiore di un angolo piatto.
- La parallela non è unica (**geometria iperbolica**, modello di Poincaré, modello di Klein): in tal caso la somma degli angoli interni di un triangolo è minore di un angolo piatto.

*(grafico — vedi PDF per i triangoli ellittico e iperbolico)*

## Quesito 10

Si trovi per quali valori di $k$ ammette soluzione l'equazione trigonometrica $\sin x + \cos x = k$.

Risulta:

$$\sin x + \cos x = \sqrt{2}\,\sin\!\left(x + \frac{\pi}{4}\right) = k \implies \sin\!\left(x + \frac{\pi}{4}\right) = \frac{k}{\sqrt{2}}$$

Poiché il seno di un angolo è compreso fra $-1$ ed $1$, deve essere:

$$-1 \le \frac{k}{\sqrt{2}} \le 1 \implies -\sqrt{2} \le k \le \sqrt{2}$$
