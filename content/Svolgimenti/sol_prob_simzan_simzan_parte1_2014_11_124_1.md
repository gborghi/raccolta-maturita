---
title: >-
  Simulazione Zanichelli 2014 Problemi Tradizionali #11 — Problema 1 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2014_11_124_1
of_item: prob_simzan_simzan_parte1_2014_11_124_1
prova_id: prova_simzan_simzan_parte1_2014_11_124
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2014
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2014_11_124_1|Simulazione Zanichelli 2014 Problemi Tradizionali n.11 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_11_124|Simulazione Zanichelli 2014 Problemi Tradizionali n.11]]

### Punto a)

Verifichiamo se le funzioni della famiglia $f_1(x) = \dfrac{ax}{1+b^2x^2}$ soddisfano le tre condizioni richieste $\forall a, b \in \mathbf{R}$:

**Studiamo il limite** per $x$ che tende a infinito:

$$\lim_{x \to \infty} f_1(x) = \lim_{x \to \infty} \frac{ax}{1+b^2x^2} = \lim_{x \to \infty} \frac{a}{\frac{1}{x}+b^2 x} = 0.$$

**Stabiliamo se $f_1(x)$ è una funzione dispari:**

$$f_1(-x) = \frac{a(-x)}{1+b^2(-x)^2} = \frac{-ax}{1+b^2x^2} = -f_1(x),$$

quindi $f_1(x)$ è una funzione dispari.

**Calcoliamo la derivata prima** $f_1'(x)$ e studiamo il suo segno, ricordando che $a$ e $b$ sono positivi:

$$f_1'(x) = \frac{a(1+b^2x^2) - ax \cdot 2b^2x}{(1+b^2x^2)^2} = \frac{a(1-b^2x^2)}{(1+b^2x^2)^2}.$$

*(grafico — vedi PDF p.127)*

Dallo schema dei segni deduciamo che $f_1(x)$ ammette sempre, qualunque siano i valori positivi di $a$ e $b$, uno e un solo massimo relativo e uno e un solo minimo relativo.

Le funzioni del tipo $f_2(x) = bxe^{-ax^2}$ non soddisfano la condizione sul limite all'infinito: per $a,b>0$ si ha $\lim_{x \to \infty} bxe^{-ax^2} = 0$, ma per $a<0$ il limite diverge. In ogni caso si può verificare che non soddisfano tutte le condizioni simultaneamente. Pertanto la funzione $f(x)$ appartiene alla famiglia $f_1(x)$.

### Punto b)

La condizione che $f(x)$ presenti il massimo relativo in corrispondenza di $x = 2$ implica:

$$f_1'(2) = 0 \implies \frac{a(1-b^2 \cdot 4)}{(1+4b^2)^2} = 0 \implies 1 - 4b^2 = 0 \implies b = \frac{1}{2}.$$

La condizione che il coefficiente angolare della tangente nell'origine sia $2$ implica:

$$f_1'(0) = a = 2.$$

Quindi i valori richiesti sono $a = 2$ e $b = \dfrac{1}{2}$.

### Punto c)

Stabilito che $a = 2$ e $b = \dfrac{1}{2}$, la funzione corrispondente è:

$$f(x) = \frac{2x}{1+\frac{1}{4}x^2} = \frac{8x}{4+x^2}.$$

La tangente al grafico nel punto $O = f(0) = 0$ ha equazione $y = 2x$.
Il massimo della funzione si trova nel punto $M\!\left(2,\,2\right)$, dove la retta tangente ha equazione $y = 2$.
Le due rette tangenti si intersecano nel punto $(1,\,2)$.

*(grafico — vedi PDF p.128)*

La regione finita del piano è delimitata dal grafico della funzione e dalle due rette tangenti. Possiamo calcolarne l'area $S$ come differenza tra l'area del trapezio rettangolo con vertici $O$, $H$ (proiezione di $M$ su $x$), $M$ e il punto di intersezione delle tangenti, e l'area sottesa al grafico nell'intervallo $[0,\,2]$:

$$S = \frac{(2+1) \cdot 2}{2} - \int_0^2 \frac{8x}{4+x^2}\,dx = 3 - 4\int_0^2 \frac{2x}{4+x^2}\,dx$$

$$= 3 - 4\Big[\ln(4+x^2)\Big]_0^2 = 3 - 4\big(\ln 8 - \ln 4\big) = 3 - 4\ln 2 \approx 0{,}2274.$$

### Punto d)

Cambiando lettere, possiamo indicare con:

- $v(t) = \dfrac{8t}{4+t^2}$ la velocità istantanea del punto materiale;
- $a(t) = v'(t)$ l'accelerazione istantanea, data dalla derivata della funzione velocità:

$$a(t) = \frac{8(4-t^2)}{(4+t^2)^2}.$$

L'accelerazione $a(t)$ è:

$$a(t) > 0 \iff 4 - t^2 > 0 \iff 0 \le t < 2;$$
$$a(t) = 0 \iff t = 2;$$
$$a(t) < 0 \iff 4 - t^2 < 0 \iff t > 2.$$

Nell'intervallo di tempo $[0,\,T]$, il punto materiale percorre una distanza pari a:

$$\Delta x = \int_0^T v(t)\,dt = \int_0^T \frac{8t}{4+t^2}\,dt = \Big[4\ln(4+t^2)\Big]_0^T = 4\ln\!\left(1+\frac{T^2}{4}\right).$$

Poiché:

$$\lim_{T \to +\infty} 4\ln\!\left(1+\frac{T^2}{4}\right) = +\infty,$$

concludiamo che la distanza percorsa dal punto tende a infinito, nonostante la velocità tenda a zero con il passare del tempo $T$. La distanza non ha un limite superiore ma cresce indefinitamente al crescere del tempo $T$.

---

*Fonte:* [📄 PDF p.124](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
