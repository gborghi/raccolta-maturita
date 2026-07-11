---
title: 2009 Sessione Ordinaria — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2009_sessione_ordinaria_2009_prova_4_1
of_item: prob_2009_sessione_ordinaria_2009_prova_4_1
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

**Problema:** [[Problemi/prob_2009_sessione_ordinaria_2009_prova_4_1|2009 Sessione Ordinaria — Prova — Problema 1]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_4|2009 Sessione Ordinaria — Prova]]

### Punto 1

L'area $S(x)$ compresa fra l'arco e la corda $AB$ del settore circolare $AOB$ di raggio $r$ e ampiezza $x \in [0, 2\pi]$ si ottiene sottraendo dall'area del settore quella del triangolo $OAB$.

**Area del settore:**

$$\text{Area settore} = \frac{r^2 x}{2}$$

**Area del triangolo $OAB$:** con due lati uguali a $r$ e angolo al vertice $O$ uguale a $x$,

$$\text{Area triangolo} = \frac{1}{2} r^2 \sin x$$

**Quindi:**

$$S(x) = \frac{r^2 x}{2} - \frac{r^2 \sin x}{2} = \frac{r^2}{2}(x - \sin x), \qquad x \in [0, 2\pi]$$

*(Per $x$ concavo, ossia $x \in (\pi, 2\pi]$, si ha $\sin x < 0$, per cui la formula resta valida con lo stesso segno.)*

---

### Punto 2

Con $r = 1$:

$$y = S(x) = \frac{1}{2}(x - \sin x), \qquad x \in [0, 2\pi]$$

**Valori agli estremi:** $S(0) = 0$, $S(2\pi) = \pi$.

**Derivata prima:**

$$S'(x) = \frac{1}{2}(1 - \cos x)$$

- $S'(x) = 0$ solo per $\cos x = 1$, cioè $x = 0$ e $x = 2\pi$.
- $S'(x) > 0$ per ogni $x \in (0, 2\pi)$: la funzione è **strettamente crescente** su tutto l'intervallo; agli estremi la tangente è orizzontale.

**Derivata seconda:**

$$S''(x) = \frac{1}{2}\sin x$$

- $S''(x) > 0$ per $x \in (0, \pi)$: concavità verso l'alto.
- $S''(x) < 0$ per $x \in (\pi, 2\pi)$: concavità verso il basso.
- Flesso in $x = \pi$ con ordinata $S(\pi) = \dfrac{\pi}{2}$.

*(grafico — vedi PDF)*

---

### Punto 3

Dati: area del settore $= 100\text{ m}^2$, perimetro $P = 2r + rx$.

Dall'area del settore:

$$\frac{r^2 x}{2} = 100 \implies r^2 x = 200$$

**Metodo elementare (AM–GM):**

Il prodotto $(2r)(rx) = 2r^2 x = 400$ è costante. Per la disuguaglianza AM–GM,

$$P = 2r + rx \ge 2\sqrt{2r \cdot rx} = 2\sqrt{2r^2 x} = 2\sqrt{400} = 40$$

con uguaglianza se e solo se $2r = rx$, cioè $x = 2$ rad. Sostituendo:

$$r^2 \cdot 2 = 200 \implies r = 10 \text{ m}$$

**Metodo delle derivate:**

Dall'area del settore, $x = \dfrac{200}{r^2}$. Sostituendo nel perimetro:

$$P(r) = 2r + \frac{200}{r}$$

$$P'(r) = 2 - \frac{200}{r^2} = 0 \implies r^2 = 100 \implies r = 10 \text{ m}$$

Il valore $r = 10$ è un minimo ($P'' > 0$). Il corrispondente angolo è $x = \dfrac{200}{100} = 2$ rad.

In gradi sessagesimali:

$$x^\circ = \frac{2 \cdot 180°}{\pi} \approx \frac{360°}{3{,}1416} \approx 115°$$

---

### Punto 4

Con $r = 2$ e $x = \dfrac{\pi}{3}$, il settore $AOB$ è nel piano $xy$. L'asse $OB$ coincide con l'asse $x$; la retta $OA$ forma un angolo di $\dfrac{\pi}{3}$ con $OB$.

Il punto $A$ ha coordinate: $A = \left(2\cos\dfrac{\pi}{3},\; 2\sin\dfrac{\pi}{3}\right) = (1,\; \sqrt{3})$.

La retta $OA$ ha equazione $y = \sqrt{3}\, x$, cioè $x = \dfrac{y}{\sqrt{3}}$.

La circonferenza di raggio $2$ ha equazione $x^2 + y^2 = 4$, cioè $x = \sqrt{4 - y^2}$ nel primo quadrante.

Per ogni $y \in [0, \sqrt{3}]$, la sezione perpendicolare all'asse $OB$ (all'altezza $y$) è un quadrato con lato

$$\ell(y) = \sqrt{4 - y^2} - \frac{y}{\sqrt{3}}$$

Il volume del solido $W$ è:

$$V = \int_0^{\sqrt{3}} \left(\sqrt{4 - y^2} - \frac{y}{\sqrt{3}}\right)^2 dy$$

Espandendo:

$$= \int_0^{\sqrt{3}} \left[(4 - y^2) - \frac{2y\sqrt{4 - y^2}}{\sqrt{3}} + \frac{y^2}{3}\right] dy$$

$$= \int_0^{\sqrt{3}} \left(4 - \frac{2y^2}{3}\right) dy - \frac{2}{\sqrt{3}} \int_0^{\sqrt{3}} y\sqrt{4 - y^2}\, dy$$

**Primo integrale:**

$$\int_0^{\sqrt{3}} \left(4 - \frac{2y^2}{3}\right) dy = \left[4y - \frac{2y^3}{9}\right]_0^{\sqrt{3}} = 4\sqrt{3} - \frac{2 \cdot 3\sqrt{3}}{9} = 4\sqrt{3} - \frac{2\sqrt{3}}{3} = \frac{10\sqrt{3}}{3}$$

**Secondo integrale** (sostituzione $u = 4 - y^2$, $du = -2y\,dy$):

$$\int_0^{\sqrt{3}} y\sqrt{4 - y^2}\, dy = \left[-\frac{1}{3}(4 - y^2)^{3/2}\right]_0^{\sqrt{3}} = -\frac{1^3}{3} + \frac{8}{3} = \frac{7}{3}$$

**Risultato:**

$$V = \frac{10\sqrt{3}}{3} - \frac{2}{\sqrt{3}} \cdot \frac{7}{3} = \frac{10\sqrt{3}}{3} - \frac{14}{3\sqrt{3}} = \frac{10\sqrt{3}}{3} - \frac{14\sqrt{3}}{9} = \frac{30\sqrt{3} - 14\sqrt{3}}{9} = \frac{16\sqrt{3}}{9}$$

$$\boxed{V = \frac{16\sqrt{3}}{9}}$$

---

*Fonte:* [📄 PDF p.4](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
