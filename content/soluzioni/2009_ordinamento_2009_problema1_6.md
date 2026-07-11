---
tipo: soluzione
prova_stem: 2009_ordinamento_2009_problema1_6
pdf: Prova_Maturita_2009.pdf
source: text
title: 2009 Ordinamento — Problema 1 — Svolgimento
---
### Punto 1

#### a) Angolo $x$ convesso

L'area richiesta si ottiene togliendo dall'area del settore circolare $OAB$ quella del triangolo $OAB$.

Area del settore: dalla proporzione $\pi R^2 : 2\pi = \text{Area settore} : x$ si ricava

$$\text{Area settore} = \frac{R^2 x}{2}$$

$$\text{Area triangolo} = \frac{1}{2} R \cdot R \cdot \sin x = \frac{R^2 \sin x}{2}$$

$$\text{Area segmento circolare} = \text{Area settore} - \text{Area triangolo} = \frac{R^2 x}{2} - \frac{R^2 \sin x}{2} = \frac{R^2}{2}(x - \sin x) = S(x)$$

#### b) Angolo $x$ concavo

In questo caso l'area richiesta si ottiene aggiungendo all'area del settore l'area del triangolo. Poiché $\sin(2\pi - x) = -\sin x$, l'area del triangolo (con angolo al centro $2\pi - x$) vale:

$$\text{Area triangolo} = \frac{1}{2} R \cdot R \cdot \sin(2\pi - x) = -\frac{R^2 \sin x}{2}$$

$$\text{Area segmento circolare} = \frac{R^2 x}{2} + \left(-\frac{R^2 \sin x}{2}\right) = \frac{R^2}{2}(x - \sin x) = S(x)$$

come prima. La formula $S(x) = \dfrac{R^2}{2}(x - \sin x)$ vale dunque in entrambi i casi.

---

### Punto 2

Con $R = 1$ la funzione diventa

$$y = \frac{1}{2}(x - \sin x)$$

da studiare nell'intervallo $[0,\, 2\pi]$.

- $y(0) = 0$, $\quad y(2\pi) = \pi$

- Con $y = 0$ si ottiene $x - \sin x = 0$, cioè $\sin x = x$, che ammette la sola soluzione $x = 0$.

- $y' = \dfrac{1}{2}(1 - \cos x)$

- $y' = 0$ se $\cos x = 1$, cioè per $x = 0$ e $x = 2\pi$.

- $y' > 0$ se $1 - \cos x > 0$, cioè $\cos x < 1$: vale per ogni $x \in (0, 2\pi)$, quindi la funzione è sempre crescente; agli estremi ha la tangente orizzontale.

- $y'' = \dfrac{1}{2}\sin x$

- $y'' = 0$ per $x = 0$, $x = \pi$, $x = 2\pi$.

- Per $0 < x < \pi$: $y'' > 0$, il grafico è concavo verso l'alto; per $\pi < x < 2\pi$: $y'' < 0$, il grafico è concavo verso il basso. In $x = \pi$ c'è un flesso a tangente obliqua, di ordinata $y(\pi) = \dfrac{\pi}{2}$.

*(grafico — vedi PDF)*

---

### Punto 3

Dati del problema:

- Lunghezza arco $AB = Rx$
- Perimetro settore $AOB = 2R + Rx$
- Area settore $= \dfrac{R^2 x}{2} = 100$, dunque $R^2 x = 200$

**Per via elementare:**

Il prodotto $R^2 x = 200$ è costante, quindi lo è anche $(2R)(Rx)$. Per la disuguaglianza AM–GM la somma $2R + Rx$ è minima quando le due quantità sono uguali: $2R = Rx$, cioè $x = 2$. Sostituendo nell'area del settore:

$$\frac{R^2 \cdot 2}{2} = R^2 = 100 \implies R = 10 \text{ m}$$

**Metodo delle derivate:**

Bisogna minimizzare $P = 2R + Rx$. Dall'area del settore si ricava $x = \dfrac{200}{R^2}$, dunque:

$$y(R) = 2R + \frac{200}{R}$$

Limitazione: essendo $x \in (0, 2\pi]$, dalla condizione $\dfrac{200}{R^2} \le 2\pi$ si ottiene $R \ge \sqrt{\dfrac{100}{\pi}}$.

$$y'(R) = 2 - \frac{200}{R^2}$$

$y'(R) = 0$ per $R^2 = 100$, cioè $R = 10$. La funzione è decrescente per $\sqrt{\dfrac{100}{\pi}} \le R < 10$ e crescente per $R > 10$: minimo assoluto in $R = 10$, con $x = \dfrac{200}{100} = 2$ rad.

Espresso in gradi sessagesimali:

$$\frac{x}{2\pi} = \frac{x°}{360°} \implies x° = \frac{360°}{\pi} \cdot 1 \approx 115°$$

---

### Punto 4

La retta $OA$ ha equazione $y = \dfrac{x}{\sqrt{3}}$ e la circonferenza $x^2 + y^2 = 4$.

Per trovare il punto di intersezione nel primo quadrante: $\dfrac{x}{\sqrt{3}} = \sqrt{4 - x^2}$ porta a $x = \sqrt{3}$, $y = 1$.

Il lato del quadrato-sezione perpendicolare all'asse $x$ è $y_{\text{circ}} - y_{\text{retta}} = \sqrt{4 - x^2} - \dfrac{x}{\sqrt{3}}$.

$$V = \int_0^{\sqrt{3}} \left(\sqrt{4 - x^2} - \frac{x}{\sqrt{3}}\right)^2 dx$$

Espandendo il quadrato:

$$= \int_0^{\sqrt{3}} \left[(4 - x^2) - \frac{2x\sqrt{4 - x^2}}{\sqrt{3}} + \frac{x^2}{3}\right] dx = \int_0^{\sqrt{3}} \left(4 - \frac{2x^2}{3}\right) dx - \frac{2}{\sqrt{3}}\int_0^{\sqrt{3}} x\sqrt{4 - x^2}\, dx$$

Primo integrale:

$$\int_0^{\sqrt{3}} \left(4 - \frac{2x^2}{3}\right) dx = \left[4x - \frac{2x^3}{9}\right]_0^{\sqrt{3}} = 4\sqrt{3} - \frac{2 \cdot 3\sqrt{3}}{9} = 4\sqrt{3} - \frac{2\sqrt{3}}{3} = \frac{10\sqrt{3}}{3}$$

Secondo integrale (sostituzione $u = 4 - x^2$, $du = -2x\,dx$):

$$\int_0^{\sqrt{3}} x\sqrt{4 - x^2}\, dx = \left[-\frac{1}{3}(4 - x^2)^{3/2}\right]_0^{\sqrt{3}} = -\frac{1}{3}(1) + \frac{1}{3}(8) = \frac{7}{3}$$

Quindi:

$$V = \frac{10\sqrt{3}}{3} - \frac{2}{\sqrt{3}} \cdot \frac{7}{3} = \frac{10\sqrt{3}}{3} - \frac{14}{3\sqrt{3}} = \frac{10\sqrt{3}}{3} - \frac{14\sqrt{3}}{9} = \frac{30\sqrt{3} - 14\sqrt{3}}{9} = \frac{16\sqrt{3}}{9}$$

$$\boxed{V = \frac{16\sqrt{3}}{9}}$$
