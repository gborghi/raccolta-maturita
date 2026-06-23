---
title: 2008 Estero Europa Ordinaria — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: >-
  sol_prob_2008_scuole_italiane_allestero_europa_2008_sessione_ord_problema2_53_1
of_item: prob_2008_scuole_italiane_allestero_europa_2008_sessione_ord_problema2_53_1
prova_id: prova_2008_scuole_italiane_allestero_europa_2008_sessione_ord_problema2_53
anno: '2008'
pdf: Prova_Maturita_2008.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2008
---

**Problema:** [[Problemi/prob_2008_scuole_italiane_allestero_europa_2008_sessione_ord_problema2_53_1|2008 Estero Europa Ordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_scuole_italiane_allestero_europa_2008_sessione_ord_problema2_53|2008 Estero Europa Ordinaria — Problema 2]]

### Punto 1)

È data la derivata

$$y' = \frac{ax}{(1+4x^2)^2}$$

e si chiede di trovare la funzione $y = f(x)$ il cui grafico passa per i punti $\left(-\dfrac{1}{2};\,1\right)$ e $(0;\,2)$.

Si calcola l'antiderivata tramite la sostituzione $u = 1+4x^2$, $du = 8x\,dx$:

$$y = \int \frac{ax}{(1+4x^2)^2}\,dx = \frac{a}{8}\int \frac{8x\,dx}{(1+4x^2)^2} = \frac{a}{8}\int \frac{du}{u^2} = \frac{-a}{8(1+4x^2)} + k$$

Quindi:

$$y = \frac{-a}{8(1+4x^2)} + k$$

Imponendo il passaggio per i due punti si ottiene il sistema:

$$\begin{cases} \dfrac{-a}{8} + k = 2 \\[6pt] \dfrac{-a}{16} + k = 1 \end{cases}$$

Sottraendo la seconda dalla prima: $-\dfrac{a}{8} + \dfrac{a}{16} = 1$, ovvero $-\dfrac{a}{16} = 1$, da cui $a = -16$. Sostituendo nella prima equazione: $k = 0$.

Quindi la funzione richiesta è:

$$\boxed{y = \frac{2}{1+4x^2}}$$

Si tratta di una funzione pari, definita su tutto $\mathbb{R}$, sempre positiva, il cui grafico taglia l'asse delle ordinate nel punto $(0;\,2)$. I limiti a $+\infty$ e $-\infty$ sono uguali a $0^+$.

**Studio della derivata prima:**

$$y' = \frac{-16x}{(1+4x^2)^2}$$

Per $x < 0$ la funzione è crescente, per $x > 0$ è decrescente; $x = 0$ è punto di massimo assoluto, con $y_{\max} = 2$.

**Studio della derivata seconda:**

$$y'' = \frac{16(12x^2-1)}{(1+4x^2)^3}$$

La funzione risulta concava verso l'alto quando $12x^2 - 1 > 0$, cioè per $|x| > \dfrac{1}{2\sqrt{3}}$. I punti di flesso si trovano in $x = \pm\dfrac{1}{2\sqrt{3}} = \pm\dfrac{\sqrt{3}}{6}$, con ordinata $y = \dfrac{3}{2}$.

*(grafico — vedi PDF)*

---

### Punto 2)

Indichiamo con $P = \left(t,\;\dfrac{2}{1+4t^2}\right)$ il generico punto della curva $\mathcal{C}$. Per l'evidente simmetria possiamo considerare $t > 0$.

La tangente in $P$ ha equazione:

$$y - \frac{2}{1+4t^2} = \frac{-16t}{(1+4t^2)^2}(x - t)$$

Con $y = 0$ si trova l'ascissa del punto $Q$ (intersezione della tangente con l'asse $x$):

$$x_Q = t + \frac{1+4t^2}{8t} = \frac{8t^2 + 1 + 4t^2}{8t} = \frac{12t^2+1}{8t}$$

Essendo $x_H = t$ (piede della perpendicolare da $P$ all'asse $x$), risulta:

$$HQ = x_Q - x_H = \frac{12t^2+1}{8t} - t = \frac{12t^2+1-8t^2}{8t} = \frac{4t^2+1}{8t} = \frac{t}{2} + \frac{1}{8t}$$

Troviamo per quale valore di $t$ tale distanza assume il valore minimo.

**Per via elementare**

Essendo $HQ = \dfrac{t}{2} + \dfrac{1}{8t}$, si osserva che è la somma di due quantità positive il cui prodotto è costante. Infatti:

$$\frac{t}{2} \cdot \frac{1}{8t} = \frac{1}{16}$$

Se il prodotto di due quantità positive è costante, la loro somma è minima quando le due quantità sono uguali; pertanto il minimo si ha quando:

$$\frac{t}{2} = \frac{1}{8t} \implies 4t^2 = 1 \implies t = \frac{1}{2}$$

In conclusione: la lunghezza del segmento $HQ$ è minima quando l'ascissa di $P$ è uguale a $\dfrac{1}{2}$.

**Con le derivate**

Consideriamo la funzione $g(t) = \dfrac{t}{2} + \dfrac{1}{8t}$; la sua derivata è:

$$g'(t) = \frac{1}{2} - \frac{1}{8t^2}$$

Risulta $g'(t) = 0$ per $t = \dfrac{1}{2}$ (avendo considerato $t > 0$). Poiché $g$ è decrescente per $0 < t < \dfrac{1}{2}$ e crescente per $t > \dfrac{1}{2}$, il minimo richiesto si ha per $t = \dfrac{1}{2}$.

---

### Punto 3)

L'area richiesta si ottiene calcolando l'integrale improprio:

$$\int_0^{+\infty} \frac{2}{1+4x^2}\,dx = \lim_{k \to +\infty} \int_0^{k} \frac{2}{1+4x^2}\,dx$$

Poiché $\displaystyle\int \frac{2}{1+4x^2}\,dx = \int \frac{2}{1+(2x)^2}\,dx = \arctan(2x) + C$, si ha:

$$\lim_{k \to +\infty} \Big[\arctan(2x)\Big]_0^k = \lim_{k \to +\infty} \big[\arctan(2k) - \arctan(0)\big] = \frac{\pi}{2} - 0 = \frac{\pi}{2}$$

---

*Con la collaborazione di Angela Santamaria*

*Fonte:* [📄 PDF p.53](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
