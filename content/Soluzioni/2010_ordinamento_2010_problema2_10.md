---
tipo: soluzione
prova_stem: 2010_ordinamento_2010_problema2_10
pdf: Prova_Maturita_2010.pdf
source: text
title: 2010 Ordinamento — Problema 2 — Svolgimento
---


### Punto 1

Se $b > 1$ la funzione $y = b^x$ è crescente e la relazione al variare di $b$ è indicata nel grafico, dove $b_1 < b_2$.

Se $0 < b < 1$ la funzione è decrescente e la relazione al variare di $b$ è indicata nel grafico, dove $b_3 > b_4$.

*(grafico — vedi PDF)*

### Punto 2

**Caso $b > 1$.**

Sia $P = (t;\, b^t)$ un punto sulla curva. La derivata è:

$$D_x(b^x) = b^x \ln b$$

quindi in $P$ la pendenza della tangente è $b^t \ln b$.

La retta tangente in $P$ è:

$$y - b^t = b^t \ln b \,(x - t)$$

Intersecando con $y = 0$ si trova il punto $A$:

$$x_A = t - \frac{1}{\ln b}$$

Il punto $B$ è il piede dell'ordinata di $P$, cioè $x_B = t$. La lunghezza del segmento $AB$ è:

$$AB = x_B - x_A = t - \left(t - \frac{1}{\ln b}\right) = \frac{1}{\ln b} = \text{costante}$$

Il risultato non dipende da $t$, quindi $AB$ è costante al variare del punto $P$ sulla curva.

**Caso $0 < b < 1$.**

Con ragionamento analogo, data la simmetria delle curve rispetto all'asse $y$, si ha:

$$AB = x_A - x_B = -\frac{1}{\ln b} = \text{costante}$$

(il valore è positivo perché $\ln b < 0$ quando $0 < b < 1$).

**Condizione $AB = 1$.**

La condizione $\dfrac{1}{|\ln b|} = 1$ equivale a $|\ln b| = 1$, cioè:

$$\ln b = \pm 1 \implies b = e \quad \text{oppure} \quad b = e^{-1} = \frac{1}{e}$$

### Punto 3

La tangente per $O = (0,0)$ alla curva $y = e^x$ è del tipo $y = mx$. Sia $(t;\, e^t)$ il punto di tangenza; la condizione di tangenza richiede che la pendenza della corda $OP$ coincida con la derivata in $t$:

$$\frac{e^t}{t} = f'(t) = e^t \implies \frac{1}{t} = 1 \implies t = 1$$

quindi il punto di tangenza è $(1;\, e)$ e la pendenza è:

$$m = \tan\alpha = e^1 = e$$

L'angolo $\alpha$ che la tangente forma con l'asse $x$ soddisfa:

$$\alpha = \arctan(e) \approx 1{,}218 \text{ radianti}$$

### Punto 4

Dati $P = (1;\, e)$ e $C = (1;\, 0)$, l'area della regione $EPD$ compresa tra la retta tangente e la curva $y = e^x$ nell'intervallo $[0,1]$ è data dalla differenza tra l'area del rettangolo $OCPD$ e l'area del trapezoide $OCPE$:

$$\text{Area}(EPD) = \int_0^1 \left(e - e^x\right)\,dx = \left[e\,x - e^x\right]_0^1 = (e - e) - (0 - 1) = 1$$
