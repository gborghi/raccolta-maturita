---
title: 2009 Ordinamento — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2009_ordinamento_2009_problema2_10_1
of_item: prob_2009_ordinamento_2009_problema2_10_1
prova_id: prova_2009_ordinamento_2009_problema2_10
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2009
---

**Problema:** [[Problemi/prob_2009_ordinamento_2009_problema2_10_1|2009 Ordinamento — Problema 2 — Problema 1]] · **Prova:** [[Prove/2009_ordinamento_2009_problema2_10|2009 Ordinamento — Problema 2]]

### Punto 1)

Si considera $f(x) = \ln(x)$.

La tangente al grafico nel generico punto $P = (t,\, \ln t)$ ha equazione:

$$y = \frac{1}{t}(x - t) + \ln t$$

I punti notevoli sono:

- $A = (0,\; \ln t - 1)$ (intersezione della tangente con l'asse $y$)
- Retta per $P$ parallela all'asse $x$: $y = \ln t$
- $B = (0,\; \ln t)$ (intersezione di tale retta con l'asse $y$)

La lunghezza del segmento $AB$ è:

$$AB = y_B - y_A = \ln t - (\ln t - 1) = 1$$

quindi è **costante** al variare di $P$.

Se la funzione è $g(x) = \log_a(x)$, si distinguono i seguenti casi.

**Caso $a > 1$:**

Poiché $g'(x) = \dfrac{1}{x \ln a}$, la tangente in $P = (t,\, \log_a t)$ ha equazione:

$$y = \frac{1}{t \ln a}(x - t) + \log_a t$$

I punti notevoli sono:

- $A = \!\left(0,\; \log_a t - \log_a e\right)$
- Retta per $P$ parallela all'asse $x$: $y = \log_a t$
- $B = (0,\; \log_a t)$

La lunghezza del segmento $AB$ è:

$$AB = y_B - y_A = \log_a t - (\log_a t - \log_a e) = \log_a e$$

quindi è **costante** al variare di $P$.

**Caso $0 < a < 1$:**

La tangente e i punti $A$, $B$ hanno la stessa forma. Ora $\log_a e < 0$, quindi:

$$AB = y_A - y_B = (\log_a t - \log_a e) - \log_a t = -\log_a e$$

che è ancora **costante** al variare di $P$.

---

### Punto 2)

Poiché $g'(x) = \dfrac{1}{x \ln a}$, si ha $g'(1) = \dfrac{1}{\ln a}$.

- Se la tangente in $x = 1$ forma un angolo di $45°$ con l'asse $x$:

$$g'(1) = \tan(45°) = 1 \implies \frac{1}{\ln a} = 1 \implies \ln a = 1 \implies a = e.$$

- Se la tangente forma un angolo di $135°$:

$$g'(1) = \tan(135°) = -1 \implies \frac{1}{\ln a} = -1 \implies \ln a = -1 \implies a = \frac{1}{e}.$$

---

### Punto 3)

*(grafico — vedi PDF)*

L'area della regione $D$ (tratteggiata in figura) si calcola integrando rispetto a $y$. Poiché $y = \ln x \Leftrightarrow x = e^y$ e la regione è compresa tra $y = 0$ e $y = 1$:

$$\text{Area}(D) = \int_0^1 e^y\,dy = \left[e^y\right]_0^1 = e - 1.$$

---

### Punto 4)

*(grafico — vedi PDF)*

Si effettua la traslazione di assi che porta l'asse $y$ nella retta $x = -1$:

$$x = X - 1, \qquad y = Y.$$

La funzione $f(x) = \ln(x+1)$ diventa $Y = \ln(X-1)$, ovvero $X - 1 = e^Y$, ossia $X = e^Y + 1$.

Il volume del solido di rotazione attorno alla retta $x = -1$ si ottiene sottraendo al volume generato dalla rotazione di $X = e^Y + 1$ quello del cilindro di raggio $1$ e altezza $1$:

$$V = \pi \int_0^1 X^2\,dY - \pi \cdot 1^2 \cdot 1 = \pi \int_0^1 (e^Y + 1)^2\,dY - \pi.$$

Si espande il quadrato:

$$\int_0^1 (e^Y + 1)^2\,dY = \int_0^1 \left(e^{2Y} + 2e^Y + 1\right)dY = \left[\frac{e^{2Y}}{2} + 2e^Y + Y\right]_0^1.$$

Si valuta:

$$= \left(\frac{e^2}{2} + 2e + 1\right) - \left(\frac{1}{2} + 2 + 0\right) = \frac{e^2}{2} + 2e + 1 - \frac{5}{2} = \frac{e^2}{2} + 2e - \frac{3}{2}.$$

Quindi:

$$V = \pi\!\left(\frac{e^2}{2} + 2e - \frac{3}{2}\right) - \pi = \pi\!\left(\frac{e^2}{2} + 2e - \frac{5}{2}\right).$$

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
