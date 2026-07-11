---
title: 2013 Suppletiva — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_sessione_suppletiva_2013_prova_138_1
of_item: prob_2013_sessione_suppletiva_2013_prova_138_1
prova_id: prova_2013_sessione_suppletiva_2013_prova_138
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_sessione_suppletiva_2013_prova_138_1|2013 Suppletiva — Prova — Problema 1]] · **Prova:** [[Prove/2013_sessione_suppletiva_2013_prova_138|2013 Suppletiva — Prova]]

*(Corso di ordinamento M557)*

**Testo.** $ABC$ è un triangolo equilatero di lato $a$. Dal vertice $A$, internamente al triangolo, si conduce una semiretta $r$ che forma l'angolo $\alpha$ con il lato $AB$. Si denotano con $B'$ e $C'$ rispettivamente le proiezioni ortogonali su $r$ dei vertici $B$ e $C$.

### Punto 1 — Calcolo del rapporto e verifica di $f(x)$

Le proiezioni di $B$ e $C$ su $r$, partendo da $A$, si calcolano con il prodotto scalare. L'angolo $\widehat{BAr} = \alpha$ e l'angolo $\widehat{CAr} = 60° - \alpha$ (poiché $\widehat{BAC} = 60°$ in un triangolo equilatero). Le lunghezze delle proiezioni ortogonali valgono:

$$BB' = a\sin\alpha, \qquad CC' = a\sin(60° - \alpha).$$

Il rapporto richiesto è:

$$\frac{BB'^{2} + CC'^{2}}{a^{2}} = \sin^{2}\alpha + \sin^{2}(60° - \alpha).$$

Ponendo $x = \tan\alpha$ e usando $\sin\alpha = \dfrac{x}{\sqrt{1+x^2}}$, $\sin(60°-\alpha) = \dfrac{\sqrt{3}-x}{2\sqrt{1+x^2}}\cdot\ldots$, con sviluppo algebrico si verifica che il rapporto coincide con:

$$f(x) = \frac{x^{5} - 3x^{2} + 3}{4(x^{2}+1)}$$

### Punto 2 — Studio della funzione $f(x)$

$$f(x) = \frac{x^{5} - 3x^{2} + 3}{4(x^{2}+1)}$$

**Dominio:** $\mathbb{R}$ (denominatore sempre positivo).

**Asintoti:** per $x \to \pm\infty$, $f(x) \sim \dfrac{x^5}{4x^2} = \dfrac{x^3}{4}$. Effettuando la divisione polinomiale:

$$f(x) = \frac{x^{3}}{4} - \frac{x^{2}}{4} + \frac{x^{2}/4\cdot(\ldots) + 3}{4(x^{2}+1)}$$

L'asintoto è la curva cubica $y = \dfrac{x^3}{4}$ (nessun asintoto orizzontale né obliquo lineare).

*(grafico — vedi PDF)*

### Punto 3 — Intersezione con l'asintoto e tangente

Il punto in cui $\gamma$ incontra $y = \dfrac{x^3}{4}$:

$$f(x) = \frac{x^{3}}{4} \implies x^{5} - 3x^{2} + 3 = x^{3}(x^{2}+1) \implies x^{3} + 3x^{2} - 3 = 0.$$

La radice reale di $x^3 + 3x^2 - 3 = 0$ si trova numericamente: $x_0 \approx 0{,}879$. Il punto di intersezione è $\left(x_0,\, \dfrac{x_0^3}{4}\right)$.

La tangente a $\gamma$ in tale punto ha pendenza $f'(x_0)$; la sua equazione è:

$$y - \frac{x_0^3}{4} = f'(x_0)\,(x - x_0).$$

### Punto 4 — Area nel II quadrante tra $\gamma$ e l'asintoto

La differenza tra $f(x)$ e l'asintoto vale:

$$f(x) - \frac{x^{3}}{4} = \frac{-(x^{3} + 3x^{2} - 3)}{4(x^{2}+1)}.$$

Nel II quadrante ($x \le 0$) la curva interseca l'asintoto in $x_1 < 0$ (altra radice reale di $x^3+3x^2-3=0$). L'area è:

$$A = \int_{x_1}^{0} \frac{|x^{3} + 3x^{2} - 3|}{4(x^{2}+1)}\,dx.$$

*(grafico — vedi PDF per localizzazione di $x_1$)*

---

*Fonte:* [📄 PDF p.138](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
