---
title: 2009 Sessione Ordinaria — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2009_sessione_ordinaria_2009_prova_4_2
of_item: prob_2009_sessione_ordinaria_2009_prova_4_2
prova_id: prova_2009_sessione_ordinaria_2009_prova_4
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2009
---

**Problema:** [[Problemi/prob_2009_sessione_ordinaria_2009_prova_4_2|2009 Sessione Ordinaria — Prova — Problema 2]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_4|2009 Sessione Ordinaria — Prova]]

### Punto 1

Si considera $f(x) = \ln x$.

La tangente al grafico in un generico punto $P = (t,\, \ln t)$ (con $t > 0$) ha equazione:

$$y = \frac{1}{t}(x - t) + \ln t$$

I punti notevoli:

- $A$ = intersezione della tangente con l'asse $y$ (poniamo $x = 0$):
$$y_A = \frac{1}{t}(0 - t) + \ln t = \ln t - 1$$
quindi $A = (0,\; \ln t - 1)$.

- $B$ = intersezione della parallela a $y = \ln t$ con l'asse $y$: $B = (0,\; \ln t)$.

Lunghezza del segmento $AB$:

$$AB = y_B - y_A = \ln t - (\ln t - 1) = 1$$

La lunghezza è **costante** (uguale a $1$) al variare di $P$.

**Caso $g(x) = \log_a x$ con $a > 0$, $a \ne 1$:**

Poiché $g'(x) = \dfrac{1}{x \ln a}$, la tangente in $P = (t,\, \log_a t)$ dà:

$$y_A = \log_a t - \frac{1}{\ln a} = \log_a t - \log_a e, \qquad B = (0,\; \log_a t)$$

$$AB = y_B - y_A = \log_a e$$

La proprietà vale ancora: il segmento $AB$ ha lunghezza **costante** $|\log_a e|$ al variare di $P$.

---

### Punto 2

Poiché $g'(x) = \dfrac{1}{x \ln a}$, la pendenza della tangente in $x = 1$ è $g'(1) = \dfrac{1}{\ln a}$.

- Per $\delta = 45°$: $\tan(45°) = 1$, quindi

$$\frac{1}{\ln a} = 1 \implies \ln a = 1 \implies a = e.$$

- Per $\delta = 135°$: $\tan(135°) = -1$, quindi

$$\frac{1}{\ln a} = -1 \implies \ln a = -1 \implies a = \frac{1}{e}.$$

---

### Punto 3

*(grafico — vedi PDF)*

La regione $D$ è nel primo quadrante, delimitata dagli assi, dalla curva $y = \ln x$ e dalla retta $y = 1$. L'intersezione $y = \ln x = 1$ dà $x = e$.

Integrando rispetto a $y$ (con $x = e^y$, $y \in [0, 1]$):

$$\text{Area}(D) = \int_0^1 e^y\, dy = \left[e^y\right]_0^1 = e - 1$$

---

### Punto 4

*(grafico — vedi PDF)*

Si ruota $D$ attorno alla retta $x = -1$. Con la traslazione $X = x + 1$ (in modo che l'asse di rotazione diventi $X = 0$), la curva $y = \ln x$ diventa $y = \ln(X - 1)$, cioè $X = e^y + 1$.

Il volume si calcola con il metodo dei gusci cilindrici oppure con i dischi rispetto alla variabile $Y = y$:

$$V = \pi \int_0^1 (e^y + 1)^2\, dy - \pi \cdot 1^2 \cdot 1$$

(si sottrae il volume del cilindretto di raggio $1$ e altezza $1$ corrispondente all'asse $y$).

Espandendo:

$$\int_0^1 (e^y + 1)^2\, dy = \int_0^1 \left(e^{2y} + 2e^y + 1\right) dy = \left[\frac{e^{2y}}{2} + 2e^y + y\right]_0^1$$

$$= \left(\frac{e^2}{2} + 2e + 1\right) - \left(\frac{1}{2} + 2\right) = \frac{e^2}{2} + 2e + 1 - \frac{5}{2} = \frac{e^2}{2} + 2e - \frac{3}{2}$$

Quindi:

$$V = \pi\!\left(\frac{e^2}{2} + 2e - \frac{3}{2}\right) - \pi = \pi\!\left(\frac{e^2}{2} + 2e - \frac{5}{2}\right)$$

---

*Fonte:* [📄 PDF p.4](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
