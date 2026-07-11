---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2011_2_23_1
of_item: prob_simzan_simzan_parte1_2011_2_23_1
prova_id: prova_simzan_simzan_parte1_2011_2_23
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2011_2_23_1|Simulazione Zanichelli 2011 Ordinamento n.2 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento n.2]]

Sia $ABC$ un triangolo con il lato $BC$ di lunghezza unitaria e l'angolo $\widehat{ABC}$ di ampiezza $60°$.

### a) Rapporto $f(x)$ tra la misura del lato $AC$ e il seno dell'angolo $\widehat{BCA}$

Posto $AB = x$, si applica il teorema del coseno a $\triangle ABC$:

$$AC^2 = AB^2 + BC^2 - 2 \cdot AB \cdot BC \cdot \cos\widehat{ABC}
= x^2 + 1 - 2x \cdot \frac{1}{2} = x^2 - x + 1,$$

quindi $AC = \sqrt{x^2 - x + 1}$.

Per il teorema dei seni:

$$\frac{AC}{\sin\widehat{ABC}} = \frac{AB}{\sin\widehat{BCA}}
\quad\Rightarrow\quad
\sin\widehat{BCA} = \frac{x \cdot \frac{\sqrt{3}}{2}}{\sqrt{x^2 - x + 1}}.$$

Il rapporto richiesto è:

$$f(x) = \frac{AC}{\sin\widehat{BCA}}
= \frac{\sqrt{x^2-x+1}}{\dfrac{x\sqrt{3}}{2\sqrt{x^2-x+1}}}
= \frac{2\sqrt{3}\,(x^2 - x + 1)}{3x}.$$

*(grafico — vedi PDF p.26)*

### b) Verifica che il punto $P\!\left(0,\,-\dfrac{2\sqrt{3}}{3}\right)$ è centro di simmetria per $g$

Indipendentemente dai vincoli geometrici, studiamo $f$ come funzione reale. Riscriviamo:

$$f(x) = \frac{2\sqrt{3}}{3}\!\left(x - 1 + \frac{1}{x}\right).$$

Per mostrare che $P$ è centro di simmetria occorre verificare che $f(-x) + f(x) = 2\cdot\!\left(-\dfrac{2\sqrt{3}}{3}\right)$ (traslando l'origine in $P$ la funzione diventa dispari), oppure che l'equazione della simmetria associa in modo corretto i punti del grafico.

Trasformiamo con $x \mapsto x'$, $y \mapsto y'$ (nuove coordinate centrate in $P$):

$$y' = \frac{2\sqrt{3}}{3}\!\left(x' - 1 + \frac{1}{x'}\right).$$

L'equazione ottenuta coincide con quella di $f$: poiché $f(-x') = -f(x')$ in queste coordinate (la funzione $x - 1/x$ è dispari), $P\!\left(0,\,-\dfrac{2\sqrt{3}}{3}\right)$ è centro di simmetria per $g$.

### c) Segno, limiti, asintoti, derivate e grafico di $f$

**Dominio:** $D = \mathbb{R} \setminus \{0\}$.

**Segno:** $f(x) > 0$ se $x > 0$; $f(x) < 0$ se $x < 0$.

**Limiti agli estremi del dominio:**

$$\lim_{x \to 0^+} f(x) = +\infty,\qquad
\lim_{x \to 0^-} f(x) = -\infty,\qquad
\lim_{x \to \pm\infty} f(x) = \pm\infty.$$

L'asintoto verticale è $x = 0$; l'asintoto obliquo si calcola come:

$$m = \lim_{x \to \infty}\frac{f(x)}{x} = \frac{2\sqrt{3}}{3}, \qquad
q = \lim_{x \to \infty}\!\!\left[f(x) - \frac{2\sqrt{3}}{3}x\right] = -\frac{2\sqrt{3}}{3}.$$

L'asintoto obliquo ha equazione $y = \dfrac{2\sqrt{3}}{3}x - \dfrac{2\sqrt{3}}{3}$.

**Derivata prima:**

$$f'(x) = \frac{2\sqrt{3}}{3}\!\left(1 - \frac{1}{x^2}\right) = \frac{2\sqrt{3}}{3}\cdot\frac{x^2-1}{x^2}.$$

Il suo dominio è $D' = D$; $f'(x) = 0$ per $x = \pm 1$.

Dallo studio del segno: $f$ è crescente per $|x| > 1$, decrescente per $0 < |x| < 1$; $x = -1$ è un massimo relativo, $x = 1$ un minimo relativo, con $f(-1) = -\dfrac{2\sqrt{3}}{3}$ e $f(1) = \dfrac{2\sqrt{3}}{3}$.

**Derivata seconda:**

$$f''(x) = \frac{2\sqrt{3}}{3} \cdot \frac{2}{x^3} = \frac{4\sqrt{3}}{3x^3}.$$

Il suo dominio è $D'' = D$; $f''(x) \neq 0$ per ogni $x \in D$: non ci sono punti di flesso. La concavità è verso l'alto per $x > 0$, verso il basso per $x < 0$; non ci sono punti di flesso con tangente obliqua.

*(grafico — vedi PDF p.26)*

### d) Retta tangente al grafico di $g$ nel punto di ascissa $x_0 = \sqrt{3} - 1$

L'ordinata nel punto è:

$$f\!\left(\sqrt{3}-1\right) = \frac{2\sqrt{3}}{3}\cdot\frac{\left(\sqrt{3}-1\right)^2 - \left(\sqrt{3}-1\right) + 1}{\sqrt{3}-1}
= \frac{2\sqrt{3}}{3}\cdot\frac{6-3\sqrt{3}}{\sqrt{3}-1} = \sqrt{3}\!\left(\sqrt{3}-1\right) = 3 - \sqrt{3}.$$

Il coefficiente angolare è:

$$f'\!\left(\sqrt{3}-1\right) = \frac{2\sqrt{3}}{3}\cdot\frac{\left(\sqrt{3}-1\right)^2 - 1}{\left(\sqrt{3}-1\right)^2}
= \frac{2\sqrt{3}}{3}\cdot\frac{3 - 2\sqrt{3}}{4 - 2\sqrt{3}}.$$

Dalle immagini il coefficiente angolare semplificato vale $m = \sqrt{3}$, il che corrisponde a $\text{tg}\,60°$.

Pertanto la retta tangente è:

$$r:\; y = \left(3-\sqrt{3}\right) + \sqrt{3}\!\left[x - \left(\sqrt{3}-1\right)\right] = \sqrt{3}\,x.$$

### e) Area della regione tra la curva $g$ e la retta $r$ nell'intervallo $\!\left[\sqrt{3}-1,\,1\right]$

Indichiamo con $H$ la proiezione ortogonale di $Q = \!\left(\sqrt{3}-1,\, 3-\sqrt{3}\right)$ sull'asse $x$. L'area della regione compresa tra la curva $g$, la retta $r$, l'asse delle ascisse e la retta $x=1$ si calcola come somma dell'area del triangolo $OMQ$ e dell'area sottesa dalla curva nell'intervallo $\!\left[\sqrt{3}-1,\,1\right]$:

$$S = \frac{1}{2}\cdot\overline{OR}\cdot\overline{OS} + \int_{\sqrt{3}-1}^{1} f(x)\,dx$$

$$= \frac{1}{2}\cdot\frac{t^2-2t}{t}\cdot\frac{2\sqrt{3}(2-t)}{3}
+ \frac{2\sqrt{3}}{3}\!\left[\frac{x^2}{2} - x + \ln|x|\right]_{\sqrt{3}-1}^{1}.$$

*(grafico — vedi PDF p.28)*

---

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
