---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Problema 2 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2019_2_46_2
of_item: prob_simzan_simzan_parte2_2019_2_46_2
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2019_2_46_2|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica)]]

Si consideri un filo rettilineo infinito $t$, posto nel vuoto, con carica positiva distribuita uniformemente con densità lineare $\lambda$. Il campo elettrico $\vec{E}$ generato ha direzione radiale, è costante nei punti alla stessa distanza dal filo, e il suo modulo vale:

$$E = \frac{1}{2\pi\varepsilon_0}\cdot\frac{\lambda}{r}$$

### Punto 1 — Modulo del campo elettrico in un punto $P$ a distanza $r$

Con riferimento alle caratteristiche geometriche di $\vec{E}$, il modulo del campo elettrico in un punto $P$ che dista $r$ dal filo è:

$$E = \frac{\lambda}{2\pi\varepsilon_0\, r}$$

Consideriamo ora tre fili rettilinei infiniti, vincolati a restare fissi, con la stessa densità lineare di carica positiva $\lambda$, perpendicolari al piano del foglio e passanti per i vertici $A$, $B$, $C$ di un triangolo equilatero di lato $2l$. Un punto puntiforme negativo $q$ è posto in un punto generico del piano; si osserva che il campo elettrico è puntato radialmente da ciascun filo verso $q$. Il modulo del campo elettrico generato da ciascun filo $i$ in $P$ è:

$$E_i = \frac{\lambda}{2\pi\varepsilon_0\, d_i}$$

dove $d_i$ è la distanza del punto $P$ dal filo $i$.

### Punto 2 — Componente lungo l'asse $x$ della forza risultante

Fissiamo il sistema di riferimento con l'asse $x$ rivolto verso il vertice $A$ e l'origine $O$ nel baricentro del triangolo. La componente $x$ della forza risultante su $q$ è:

$$R_x = 2F_{Bx} - F_{Ax}$$

ed essendo $F_{Bx} = F_{Cx}$ per simmetria, si ricava dalla relazione (2):

$$F_x = \frac{\lambda q}{2\pi\varepsilon_0}\cdot\frac{3\lambda q}{OP}$$

Visto che la misura dell'altezza $\overline{AH}$ è:

$$\overline{AH} = 2l\sin\frac{\pi}{3} = l\sqrt{3}$$

allora la distanza $\overline{AO} = \dfrac{2}{3}\overline{AH} = \dfrac{2\sqrt{3}}{3}l$.

Analogamente $\overline{BP} = \sqrt{x^2 + \overline{BO}^2}$ dove $\overline{BO} = \dfrac{\sqrt{3}}{3}l$.

Dopo il calcolo delle componenti e semplificazioni si ottiene:

$$R_x = \frac{27\lambda q}{2\pi\varepsilon_0}\cdot\frac{x^2}{9x^2 - 8\sqrt{3}lx} = R(x)$$

*(grafico — vedi PDF p.65)*

### Punto 3 — Studio della funzione $f(X)$

Si definisce la variabile adimensionale $X = \dfrac{\sqrt{3}x}{l}$, da cui $x = \dfrac{Xl}{\sqrt{3}}$, e la funzione adimensionale:

$$f(X) = \frac{R(X)}{a}, \quad a = \frac{3\sqrt{3}\lambda q}{2\pi\varepsilon_0}$$

Sostituendo:

$$f(X) = \frac{X^2}{X^2 - 8}$$

**Dominio:** $X \ne \pm 2\sqrt{2}$, quindi $\mathbb{R}\setminus\{-2\sqrt{2},\,2\sqrt{2}\}$.

**Intersezioni con gli assi:** $f(X)=0 \Rightarrow X=0$ (origine); $f(0)=0$.

**Asintoti:**
- Orizzontale: $\lim_{X\to\pm\infty} f(X) = 1$, quindi $y=1$ asintoto orizzontale.
- Verticali: $X = \pm 2\sqrt{2}$ (dove il denominatore si annulla).

**Derivata prima:**

$$f'(X) = \frac{2X(X^2-8) - X^2\cdot 2X}{(X^2-8)^2} = \frac{-16X}{(X^2-8)^2}$$

$f'(X)=0$ per $X=0$. Per $X<0$: $f'(X)>0$ (crescente); per $X>0$: $f'(X)<0$ (decrescente) — con esclusione degli asintoti.

I punti $X=-2\sqrt{2}$ e $X=2\sqrt{2}$ sono rispettivamente punti di massimo e di minimo relativi della funzione $f(X)$; sul grafico della funzione individuano i punti di coordinate $A\!\left(-2\sqrt{2},\,\frac{1}{2}\right)$ e $B\!\left(2\sqrt{2},\,-\frac{11}{2}\right)$... 

*(grafico — vedi PDF p.67)*

### Punto 4 — Calcolo dell'area e del limite

Per ottenere l'area richiesta occorre calcolare il seguente integrale definito:

$$S = \int_{-1/2}^{1} f(X)\,dX = \int_{-1/2}^{1} \frac{X^2}{X^2-8}\,dX$$

Decomponiamo: $\dfrac{X^2}{X^2-8} = 1 + \dfrac{8}{X^2-8} = 1 + \dfrac{8}{(X-2\sqrt{2})(X+2\sqrt{2})}$.

Con decomposizione in frazioni parziali e integrazione:

$$S = \left[X + \frac{1}{2}\ln\!\left|\frac{X-2\sqrt{2}}{X+2\sqrt{2}}\right|\right]_{-1/2}^{1}$$

Per calcolare il limite:

$$\lim_{X\to-\infty} \frac{\displaystyle\int_{-1/2}^{X} f(z)\,dz}{\ln(-2X-1)}$$

Si tratta di una forma indeterminata $\dfrac{\infty}{\infty}$. Applicando la regola di De l'Hôpital:

$$L' = \lim_{X\to-\infty} \frac{f(X)}{\dfrac{-2}{-2X-1}} = \lim_{X\to-\infty} \frac{X^2}{X^2-8}\cdot\frac{-2X-1}{-2} = \lim_{X\to-\infty} \frac{X^2}{X^2-8}\cdot\frac{2X+1}{2} = -1$$

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
