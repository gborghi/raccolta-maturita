---
tipo: soluzione
prova_stem: 2012_ordinamento_2012_problema2_10
pdf: Prova_Maturita_2012.pdf
source: text
title: Soluzioni — 2012_ordinamento_2012_problema2_10
---

# Soluzioni — 2012_ordinamento_2012_problema2_10

## Problema 1

### Punto 1

Sono dati i punti $A=(3,0)$, $B=(0,3)$. La parabola $L$ ha vertice in $\left(0,\tfrac{3}{2}\right)$, passa per $A=(3,0)$ e $(-3,0)$, con equazione:

$$L\colon\quad y = -\frac{x^2}{6} + \frac{3}{2}$$

La circonferenza con diametro su $OA$ e $OB$ e centro $O$ ha equazione:

$$x^2 + y^2 = 9$$

Troviamo la retta $r$ tangente in $A$ alla parabola $L$. La derivata di $L$ è:

$$y' = -\frac{x}{3}$$

In $A=(3,0)$: $m = y'(3) = -1$, quindi la retta tangente è $r\colon y = -x + 3$.

La parabola ha vertice in $\left(0,\tfrac{3}{2}\right)$ e taglia l'asse delle ascisse nei punti $(3,0)$ e $(-3,0)$. Rappresentiamo nello stesso sistema di riferimento la parabola, la circonferenza e la retta $r$:

*(grafico — vedi PDF)*

Calcoliamo le due aree richieste.

**Area $A_1$** (settore circolare $OAB$ meno il triangolo rettangolo $OAB$):

$$A_1 = \frac{9\pi}{4} - \frac{9}{2}$$

**Area $A_2$** (triangolo rettangolo $OAB$ meno la metà del segmento parabolico di base $6$ e altezza $\tfrac{3}{2}$; l'area del segmento parabolico è $\tfrac{2}{3}\cdot\text{base}\cdot\text{altezza}$):

$$A_2 = \frac{9}{2} - \frac{1}{2}\cdot\frac{2}{3}\cdot 6\cdot\frac{3}{2} = \frac{9}{2} - 3 = \frac{3}{2}$$

---

### Punto 2

*(grafico — vedi PDF)*

La sezione del solido $W$ nel piano perpendicolare all'asse $x$ nel punto di ascissa $x$ è:

$$S(x) = e^{\frac{4x}{3}} - e^{\frac{5x}{3}}$$

Il volume del solido $W$ si ottiene mediante l'integrale:

$$\text{Volume}(W) = \int_0^3 S(x)\,dx = \int_0^3 e^{\frac{4x}{3}}\,dx - \int_0^3 e^{\frac{5x}{3}}\,dx$$

$$= \left[\frac{3}{4}\,e^{\frac{4x}{3}}\right]_0^3 - \left[\frac{3}{5}\,e^{\frac{5x}{3}}\right]_0^3 = \frac{3}{4}\!\left(e^4-1\right) - \frac{3}{5}\!\left(e^5-1\right)$$

$$= \frac{3}{4}e^4 - \frac{3}{5}e^5 - \frac{3}{20}$$

---

### Punto 3

La regione $R$, ruotando attorno all'asse $x$, genera un solido il cui volume è dato dalla differenza tra il volume del solido di rivoluzione generato dall'arco di circonferenza e il volume ottenuto dalla rotazione della regione delimitata da $L$ e dagli assi cartesiani:

$$V_R = \pi\int_0^3\!\left(9 - x^2\right)dx - \pi\int_0^3\!\left(-\frac{x^2}{6}+\frac{3}{2}\right)^{\!2}dx$$

Calcoliamo il primo integrale:

$$\pi\int_0^3\!\left(9-x^2\right)dx = \pi\!\left[9x - \frac{x^3}{3}\right]_0^3 = \pi(27-9) = 18\pi$$

Calcoliamo il secondo integrale:

$$\pi\int_0^3\!\left(\frac{x^2}{6}-\frac{3}{2}\right)^{\!2}dx = \pi\int_0^3\!\left(\frac{x^4}{36} - \frac{x^2}{2} + \frac{9}{4}\right)dx = \pi\!\left[\frac{x^5}{180} - \frac{x^3}{6} + \frac{9x}{4}\right]_0^3$$

$$= \pi\!\left(\frac{243}{180} - \frac{27}{6} + \frac{27}{4}\right) = \pi\!\left(\frac{27}{20} - \frac{9}{2} + \frac{27}{4}\right) = \pi\cdot\frac{27 - 90 + 135}{20} = \frac{18\pi}{5}$$

Quindi:

$$V_R = 18\pi - \frac{18\pi}{5} = \frac{90\pi - 18\pi}{5} = \frac{72\pi}{5}$$

---

### Punto 4

**Luogo dei centri.**

Cerchiamo il luogo dei centri delle circonferenze tangenti internamente all'arco $AB$ di circonferenza e tangenti all'asse $x$, e verifichiamo che coincide con l'arco $L$ di parabola.

Indichiamo con $C=(x,y)$ il centro della generica circonferenza, con $R$ il suo raggio. Dalla tangenza con l'asse $x$ risulta $R = y$. Indicando con $T$ il punto di tangenza con l'asse $x$, si ha $CT = y$. Dalla condizione di tangenza interna con la circonferenza di centro $O$ e raggio $3$:

$$OC = OT - CT = 3 - y$$

Poiché $OC^2 = x^2 + y^2$ (N.B. $CT = y$), si ha:

$$x^2 + y^2 = (3-y)^2$$

Svolgendo i calcoli:

$$x^2 + y^2 = 9 - 6y + y^2 \implies x^2 = 9 - 6y \implies y = \frac{9-x^2}{6} = -\frac{x^2}{6} + \frac{3}{2}$$

che, con le limitazioni $0 \le x \le 3$ e $0 \le y \le \tfrac{3}{2}$, è l'equazione di $L$.

---

**Circonferenza speciale.**

Cerchiamo ora la circonferenza di cui $L$ è il luogo dei centri che risulta tangente anche all'arco di circonferenza di centro $A=(3,0)$ e raggio $3$.

Indicando con $C=(x,y)$ il centro della circonferenza richiesta, con $R$ il suo raggio e con $S$ il punto di tangenza con la circonferenza di centro $A$ e raggio $3$, risulta:

$$AC = AS - R = 3 - R = 3 - y$$

Per il teorema di Pitagora applicato al triangolo di vertici $A$, $C$ e la sua proiezione sull'asse $x$, risulta anche:

$$AC^2 = (x-3)^2 + y^2$$

Pertanto:

$$(3-y)^2 = (x-3)^2 + y^2$$

Svolgendo i calcoli:

$$9 - 6y + y^2 = x^2 - 6x + 9 + y^2 \implies -6y = x^2 - 6x \implies y = -\frac{x^2}{6} + x$$

Poiché $C=(x,y)$ appartiene a $L$, vale anche:

$$y = -\frac{x^2}{6} + \frac{3}{2}$$

Uguagliando le due espressioni e tenendo presente che $L\colon y = -\dfrac{x^2}{6} + \dfrac{3}{2}$:

$$-\frac{x^2}{6} + x = -\frac{x^2}{6} + \frac{3}{2} \implies x = \frac{3}{2}$$

e quindi $y = -\dfrac{(3/2)^2}{6} + \dfrac{3}{2} = -\dfrac{9/4}{6} + \dfrac{3}{2} = -\dfrac{3}{8} + \dfrac{12}{8} = \dfrac{9}{8}$.

La circonferenza richiesta ha centro $\left(\dfrac{3}{2},\dfrac{9}{8}\right)$ e raggio $R = \dfrac{9}{8}$, con equazione:

$$\left(x - \frac{3}{2}\right)^2 + \left(y - \frac{9}{8}\right)^2 = \left(\frac{9}{8}\right)^2$$

che equivale a:

$$x^2 + y^2 - 3x - \frac{9}{4}y + \frac{9}{4} = 0$$

*Con la collaborazione di Angela Santamaria.*
