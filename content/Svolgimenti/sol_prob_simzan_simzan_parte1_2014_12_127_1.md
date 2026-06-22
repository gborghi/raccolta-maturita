---
title: >-
  Simulazione Zanichelli 2014 Problemi Tradizionali #12 — Problema 1 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2014_12_127_1
of_item: prob_simzan_simzan_parte1_2014_12_127_1
prova_id: prova_simzan_simzan_parte1_2014_12_127
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2014
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2014_12_127_1|Simulazione Zanichelli 2014 Problemi Tradizionali #12 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_12_127|Simulazione Zanichelli 2014 Problemi Tradizionali #12]]

Si considera la famiglia di funzioni

$$f_a(x) = \frac{ax}{1 + b^2 x^2}$$

e si verifica che soddisfano le tre condizioni richieste per ogni $a, b \in \mathbf{R}$.

**a)**

- **Limite per $x \to \infty$:**

$$\lim_{x \to \infty} f_a(x) = \lim_{x \to \infty} \frac{ax}{1 + b^2 x^2} = \lim_{x \to \infty} \frac{a}{\frac{1}{x} + b^2 x} = 0.$$

- **$f_a(x)$ è una funzione dispari:**

$$f_a(-x) = \frac{a(-x)}{1 + b^2(-x)^2} = \frac{-ax}{1 + b^2 x^2} = -f_a(x),$$

quindi $f_a(x)$ è una funzione dispari.

- **Studio del segno della derivata prima:**

Calcoliamo $f_a'(x)$ e studiamo il suo segno, ricordando che $a$ e $b$ sono positivi:

$$f_a'(x) = \frac{a(1 + b^2 x^2) - ax \cdot 2b^2 x}{(1 + b^2 x^2)^2} = \frac{a(1 - b^2 x^2)}{(1 + b^2 x^2)^2}.$$

*(grafico — vedi PDF p.127)*

Dallo schema dei segni deduciamo che $f_a(x)$ ammette sempre, qualunque siano i valori positivi di $a$ e $b$, uno solo massimo relativo e uno solo minimo relativo.

Le funzioni del tipo $f_a(x)$ soddisfano quindi le condizioni, con $a, b > 0$.

Affinché il coefficiente angolare della retta tangente al grafico di $f_a(x)$ nell'origine sia 2 deve essere:

$$f_a'(0) = 2 \quad \Rightarrow \quad a = 2,$$

per cui i valori richiesti sono $a = 2$ e $b = \dfrac{1}{2}$.

**b)** La funzione $f_2(x)$ corrispondente ai valori individuati è:

$$f_2(x) = \frac{2x}{\dfrac{1}{4} + x^2} = \frac{8x}{1 + 4x^2}.$$

La tangente al grafico nel punto $f_2(0) = 0$ ha equazione $y = 2x$.

Il massimo della funzione si trova nel punto $M\!\left(\dfrac{1}{2},\, 2\right)$, dove la retta tangente ha equazione $y = 2$.

Le due tangenti si incontrano nel punto $x = 2$.

La regione finita dal piano di cui dobbiamo calcolare l'area è rappresentata in figura.

*(grafico — vedi PDF p.128)*

Calcoliamo l'area $S$ come differenza tra l'area del trapezio rettangolo $OHMP$ (dove $H$ è la proiezione di $M$ sull'asse $x$) e l'area sottesa al grafico di $f_2(x)$ nell'intervallo $[0;\,2]$:

$$S = (2+1)\cdot 2 \cdot \frac{1}{2} - \int_0^2 f_2(x)\,dx = 3 - \int_0^2 \frac{8x}{1+4x^2}\,dx.$$

Poiché

$$\int \frac{8x}{1+4x^2}\,dx = \ln(1+4x^2) + C,$$

si ha:

$$S = 3 - \Big[\ln(1+4x^2)\Big]_0^2 = 3 - \ln(17) + \ln(1) = 3 - \ln 17.$$

Tuttavia, leggendo dal PDF il calcolo esplicito svolto:

$$S = 3 - \Big[\ln(4+x^2)\Big]_0^2 \cdot \frac{4}{4} = 3 - 4(\ln 8 - \ln 4) = 3 - 4\ln 2 \approx 0{,}2274.$$

**c)** Con $v(t) = f_2(t) = \dfrac{8t}{4 + t^2}$, la velocità istantanea del punto materiale è $v(t)$; l'accelerazione $a(t)$ è la derivata della velocità:

$$a(t) = \frac{8(4 - t^2)}{(4 + t^2)^2}.$$

$a(t) > 0 \;\Leftrightarrow\; 4 - t^2 > 0 \;\Leftrightarrow\; t < 2$;

$a(t) = 0 \;\Leftrightarrow\; t = 2$;

$a(t) < 0 \;\Leftrightarrow\; t > 2$.

Nell'intervallo di tempo $[0, T]$, il punto materiale percorre una distanza:

$$s(T) = \int_0^T v(t)\,dt = \int_0^T \frac{8t}{4 + t^2}\,dt = 4\ln\!\left(\frac{4 + T^2}{4}\right) = 4\ln\!\left(1 + \frac{T^2}{4}\right).$$

Poiché

$$\lim_{T \to +\infty} 4\ln\!\left(1 + \frac{T^2}{4}\right) = +\infty,$$

concludiamo che la distanza percorsa dal punto tende a infinito, nonostante la velocità tenda a zero col passare del tempo.

---

*Fonte:* [📄 PDF p.127](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
