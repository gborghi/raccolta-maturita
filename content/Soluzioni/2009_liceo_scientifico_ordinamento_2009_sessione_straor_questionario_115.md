---
tipo: soluzione
prova_stem: 2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115
pdf: Prova_Maturita_2009.pdf
source: text
title: >-
  Soluzioni —
  2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115
---

# Soluzioni — 2009_liceo_scientifico_ordinamento_2009_sessione_straor_questionario_115

## Quesito 1

Si inscriva in una semisfera di raggio $R$ il tronco di cono di massima superficie laterale, avente la base maggiore coincidente con quella della semisfera. Si assuma come incognita l'apotema del tronco di cono.

La superficie laterale del tronco di cono è:

$$S_l = \pi a(r + R)$$

dove $a$ è l'apotema, $r$ ed $R$ i raggi di base.

Posto $a = x$, il raggio minore della sfera è $r = \sqrt{R^2 - h^2}$; l'altezza $h$ del tronco è data da:

$$h^2 = a^2 - (R - r)^2$$

quindi:

$$r = \sqrt{R^2 - a^2 + R^2 + r^2 - 2rR}$$

ovvero:

$$r^2 = 2R^2 - x^2 + r^2 - 2rR \quad\Rightarrow\quad 2rR = 2R^2 - x^2 \quad\Rightarrow\quad r = \frac{2R^2 - x^2}{2R}$$

Quindi:

$$S_l = \pi x\!\left(\frac{2R^2 - x^2}{2R} + R\right) = \frac{\pi}{2R}\,x\,(4R^2 - x^2)$$

che è massima se lo è:

$$y = x(4R^2 - x^2), \qquad 0 \le x \le R\sqrt{2}.$$

**Risoluzione per via elementare.**

$$y = x(4R^2 - x^2) = (x^2)^{1/2}(4R^2 - x^2)^1$$

Si tratta del prodotto di due potenze in cui la somma delle basi ($x^2$ e $4R^2 - x^2$) è costante ($4R^2$); tale prodotto è massimo quando le basi sono proporzionali agli esponenti, quindi:

$$\frac{x^2}{1/2} = \frac{4R^2 - x^2}{1}$$

da cui $3x^2 = 4R^2$, quindi:

$$x = \frac{2R}{\sqrt{3}} = \frac{2}{3}R\sqrt{3} < R\sqrt{2}$$

Quindi il tronco di cono con superficie laterale massima è quello di apotema $\dfrac{2}{3}R\sqrt{3}$.

**Metodo delle derivate.**

$$y' = 4R^2 - x^2 + x(-2x) = -3x^2 + 4R^2 \ge 0 \quad\text{se}\quad 0 \le x \le \frac{2R}{\sqrt{3}}$$

La funzione è quindi crescente per $0 < x < \dfrac{2R}{\sqrt{3}}$ e decrescente per $\dfrac{2R}{\sqrt{3}} < x < R\sqrt{2}$; per $x = \dfrac{2R}{\sqrt{3}}$ si ha un massimo relativo (e assoluto): la conclusione è la stessa del metodo elementare.

## Quesito 2

Si calcoli il limite della funzione $\dfrac{\ln(1 + \sin(3x))}{e^{\tan(2x)} - 1}$ quando $x$ tende a $0$.

$$\lim_{x \to 0} \frac{\ln(1 + \sin(3x))}{e^{\tan(2x)} - 1} = \lim_{x \to 0} \frac{\ln(1 + \sin(3x))}{\tan(2x)} \cdot \frac{e^{\tan(2x)} - 1}{\tan(2x)} \cdot 1$$

Poiché $\dfrac{e^t - 1}{t} \to 1$ per $t \to 0$, il secondo fattore tende a $1$, e si ottiene:

$$= \lim_{x \to 0} \frac{\cos(2x) \cdot \sin(3x)}{\sin(2x)} \cdot \frac{\ln(1 + \sin(3x))}{\sin(3x)} = \lim_{x \to 0} \frac{\sin(3x)}{\sin(2x)} \cdot 1 = \frac{3}{2}$$

## Quesito 3

Si dimostri che il volume di una sfera, il volume del cilindro circoscritto e il volume del cono equilatero circoscritto sono proporzionali ai numeri $4$, $6$, $9$.

Detto $R$ il raggio della sfera, si ha:

$$V(\text{sfera}) = \frac{4}{3}\pi R^3 = 4\!\left(\frac{1}{3}\pi R^3\right)$$

$$V(\text{cilindro}) = \pi R^2 h = \pi R^2 \cdot 2R = 2\pi R^3 = 6\!\left(\frac{1}{3}\pi R^3\right)$$

Per calcolare il volume del cono equilatero osserviamo che il diametro di base è uguale all'apotema. Siccome $DE = R$ e $CE$ (altezza e mediana del triangolo equilatero $ABC$, di cui $D$ è il baricentro e l'incentro) è il triplo di $DE$, quindi $CE = 3R$. Il raggio di base del cono è:

$$AE = CE \cdot \tan(30\degree) = R\sqrt{3}$$

Si ha quindi:

$$V(\text{cono}) = \frac{1}{3}\pi \cdot AE^2 \cdot CE = \frac{1}{3}\pi \cdot 3R^2 \cdot 3R = 3\pi R^3 = 9\!\left(\frac{1}{3}\pi R^3\right)$$

Posto $k = \dfrac{1}{3}\pi R^3$ (costante per la sfera fissata), si ha:

$$V(\text{sfera}) = 4k, \qquad V(\text{cilindro}) = 6k, \qquad V(\text{cono}) = 9k$$

Quindi i tre volumi sono proporzionali a $4$, $6$ e $9$.

## Quesito 4

Se $P$ è un punto arbitrario del diametro $MN$ di una data semicirconferenza, sui segmenti $MP$ e $NP$, presi come diametri, si descrivano due semicirconferenze dalla stessa parte di quella data. Si dimostri che la figura (detta arbelo) limitata dalle tre semicirconferenze è equivalente al cerchio il cui diametro è medio proporzionale tra $MP$ e $NP$.

Sia $MN = 2R$, $MP = 2x$, $NP = 2R - 2x$.

Il medio proporzionale tra $MP$ e $NP$ è il segmento di misura $2r$ tale che:

$$MP : 2r = 2r : NP \quad\Rightarrow\quad 4r^2 = MP \cdot NP = 2x(2R - 2x) \quad\Rightarrow\quad r^2 = \frac{2x(2R - 2x)}{4}$$

Il cerchio il cui diametro è medio proporzionale tra $MP$ e $NP$ ha area:

$$\pi r^2 = \frac{\pi \cdot 2x(2R - 2x)}{4} = \frac{1}{2}\pi x(2R - 2x)$$

L'area dell'arbelo è:

$$A = A(\text{semicerchio }MN) - A(\text{semicerchio }MP) - A(\text{semicerchio }NP)$$

$$= \frac{1}{2}\pi R^2 - \frac{1}{2}\pi x^2 - \frac{1}{2}\pi(R - x)^2$$

$$= \frac{1}{2}\pi\!\left(R^2 - x^2 - R^2 - x^2 + 2Rx\right) = \frac{1}{2}\pi(2Rx - 2x^2) = \frac{1}{2}\pi x(2R - 2x)$$

Questa coincide con l'area del cerchio di diametro medio proporzionale tra $MP$ e $NP$.

*Nota geometrica:* il cerchio il cui diametro $AP$ è medio proporzionale tra $MP$ e $NP$ si ottiene dal secondo teorema di Euclide applicato al triangolo rettangolo $MAN$: $AP^2 = MP \cdot NP$. L'area dell'arbelo è uguale all'area di questo cerchio.

## Quesito 5

Si determini il valor medio della funzione $f(x) = \sqrt{2x - 1}$ nell'intervallo $[4, 6]$.

Il valor medio di una funzione $f(x)$ continua in $[a, b]$ è $\dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,dx$. Quindi:

$$\frac{1}{6 - 4}\int_4^6 \sqrt{2x - 1}\,dx = \frac{1}{2}\int_4^6 (2x-1)^{1/2}\,dx$$

$$= \frac{1}{2} \cdot \frac{1}{2}\left[\frac{2}{3}(2x-1)^{3/2}\right]_4^6 = \frac{1}{4} \cdot \frac{2}{3}\left[(11)^{3/2} - (7)^{3/2}\right] = \frac{1}{6}\left(11\sqrt{11} - 7\sqrt{7}\right) \approx 2.99$$

## Quesito 6

Un bagnino è seduto su un'alta piattaforma, di modo che i suoi occhi si trovano a $7$ metri sopra il livello del mare. Improvvisamente emerge in superficie la pinna di un grande squalo bianco. Se l'angolo di depressione è di $4\degree$, si stimi la distanza orizzontale tra la piattaforma e lo squalo, arrotondando il risultato all'unità.

La distanza orizzontale è $BC$ e risulta:

$$BC = AB \cdot \tan(86\degree) = 7 \cdot \tan(86\degree) \approx 100 \text{ m}$$

La distanza orizzontale tra la piattaforma e lo squalo è di circa $100$ metri.

## Quesito 7

Si consideri la funzione:

$$f(x) = \begin{cases} x^3 + 1 & \text{per } 0 \le x \le 2 \\ -x^2 + 13 & \text{per } 2 < x \le 3 \end{cases}$$

È applicabile ad essa, nell'intervallo chiuso $[0, 3]$, il teorema di Lagrange?

Analizziamo il punto “critico” $x = 2$ dal punto di vista della derivabilità. Nel dominio della funzione risulta:

- se $x < 2$: $f'(x) = 3x^2$, quindi $f'_-(2) = 12$
- se $x > 2$: $f'(x) = -2x$, quindi $f'_+(2) = -4$

La funzione non è quindi derivabile per $x = 2$.

Il teorema di Lagrange non è quindi applicabile nell'intervallo chiuso $[0, 3]$ poiché la funzione non è derivabile in tutto l'aperto $(0, 3)$.

## Quesito 8

Si risolva l'equazione:

$$6\!\left[\binom{x}{2} + \binom{x}{3}\right] = x(x + 11)$$

Occorre che $x$ sia un intero positivo non inferiore a $3$. Sviluppando i coefficienti binomiali:

$$6\!\left[\frac{x(x-1)}{2} + \frac{x(x-1)(x-2)}{6}\right] = x^2 + 11x$$

$$3x(x-1) + x(x-1)(x-2) - x^2 - 11x = 0$$

$$x^3 - x^2 - 12x = 0 \quad\Rightarrow\quad x(x^2 - x - 12) = 0 \quad\Rightarrow\quad x = 0, \quad x = 4, \quad x = -3$$

Tenendo conto delle condizioni ($x$ intero positivo $\ge 3$), l'unica soluzione è $x = 4$.

## Quesito 9

Il $\displaystyle\lim_{n \to \infty} \dfrac{1 + 2 + 3 + \cdots + n}{n^2}$ vale $0$. Si dica se quest'affermazione è vera o falsa e si fornisca un'esauriente spiegazione della risposta.

L'affermazione è **falsa**. Poiché la somma dei primi $n$ termini di una progressione aritmetica con primo termine $1$ e ragione $1$ è:

$$1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$$

(in generale $S_n = \dfrac{(a_1 + a_n)\,n}{2}$), si ha:

$$\lim_{n \to \infty} \frac{1 + 2 + 3 + \cdots + n}{n^2} = \lim_{n \to \infty} \frac{\dfrac{n(n+1)}{2}}{n^2} = \lim_{n \to \infty} \frac{n^2 + n}{2n^2} = \frac{1}{2}$$

Il limite vale $\dfrac{1}{2}$, non $0$.

## Quesito 10

Quali punti del grafico della funzione $f(x) = \dfrac{2}{x^2}$ hanno distanza minima dall'origine?

*(grafico — vedi PDF)*

I punti del grafico che hanno minima distanza dall'origine appartengono alla circonferenza con centro nell'origine tangente alla curva.

Indichiamo con $P = \!\left(x,\, \dfrac{2}{x^2}\right)$ il generico punto del grafico. $PO$ è minima se lo è:

$$PO^2 = x^2 + \frac{4}{x^4} = z$$

**Metodo delle derivate** (per simmetria della curva ci limitiamo a $x > 0$):

$$z' = 2x - \frac{16}{x^5} \ge 0 \quad\Longleftrightarrow\quad x^6 - 8 \ge 0 \quad\Longleftrightarrow\quad x \ge \sqrt[6]{8} = \sqrt{2}$$

La funzione $z$ è crescente per $x > \sqrt{2}$ e decrescente per $0 < x < \sqrt{2}$; si ha un minimo relativo (e assoluto) per $x = \sqrt{2}$. Per tale valore:

$$z = 2 + \frac{4}{4} = 3 \quad\Rightarrow\quad PO_{\min} = \sqrt{3}$$

I punti del grafico di $f(x)$ che hanno minima distanza dall'origine sono quelli di ascissa $x = \pm\sqrt{2}$, quindi: $\left(\pm\sqrt{2},\; 1\right)$.

**Verifica per tangenza.** La circonferenza con centro nell'origine e raggio $\sqrt{3}$ ha equazione $x^2 + y^2 = 3$. Intersechiamola con la curva:

$$\begin{cases} y = \dfrac{2}{x^2} \\[6pt] x^2 + y^2 = 3 \end{cases} \quad\Rightarrow\quad \frac{2}{y} + y^2 = 3 \quad\Rightarrow\quad y^3 - 3y + 2 = 0$$

Abbassando di grado con $y = 1$:

$$y^3 - 3y + 2 = (y - 1)(y^2 + y - 2) = (y - 1)^2(y + 2) = 0$$

Le due curve hanno per $y = 1$ una radice doppia, pertanto sono tangenti.
