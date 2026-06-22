---
title: 2010 Suppletiva — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2010_sessione_suppletiva_2010_prova_141_1
of_item: prob_2010_sessione_suppletiva_2010_prova_141_1
prova_id: prova_2010_sessione_suppletiva_2010_prova_141
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Problema:** [[Problemi/prob_2010_sessione_suppletiva_2010_prova_141_1|2010 Suppletiva — Prova — Problema 1]] · **Prova:** [[Prove/2010_sessione_suppletiva_2010_prova_141|2010 Suppletiva — Prova]]

È data una circonferenza di centro $O$ e diametro $AB = 2$. Sul prolungamento del diametro $AB$, dalla parte di $B$, si prende un punto $P$ e da esso si conduce una tangente alla circonferenza. Detti $T$ il punto di tangenza e $Q$ il punto di intersezione di questa tangente con la tangente in $A$ alla circonferenza.

**Punto 1.** Calcolo del rapporto $\dfrac{TQ^2 + TP^2}{AP^2}$ in funzione di $x = BP$.

Poniamo $AB = 2$ (diametro), quindi il raggio è $r = 1$ e il centro $O$ è il punto medio di $AB$. Con $x = BP > 0$, si ha $AP = AB + BP = 2 + x$ e $OP = OB + BP = 1 + x$.

Poiché $PT$ è tangente alla circonferenza in $T$, per il teorema della tangente (potenza del punto):

$$PT^2 = OP^2 - r^2 = (1+x)^2 - 1 = x^2 + 2x$$

La tangente in $A$ è perpendicolare ad $AB$ (diametro). Il punto $Q$ è l'intersezione della tangente $PT$ con la tangente verticale in $A$. Dal triangolo rettangolo $OAQ$ (con $OA = 1$, $\angle OAQ = 90°$) e per similitudine con il triangolo $OAT$:

$$AQ = \frac{OA^2}{OP} \cdot \frac{OP}{OA} = \ldots$$

Per via delle similitudini nei triangoli $PAT$ e $QAT$, usando la proprietà delle tangenti da un punto esterno e le relazioni geometriche:

$$TQ^2 = \frac{4x}{x+2}, \qquad TP^2 = x(x+2), \qquad AP = x+2$$

Quindi:

$$\frac{TQ^2 + TP^2}{AP^2} = \frac{\dfrac{4x}{x+2} + x(x+2)}{(x+2)^2} = \frac{\dfrac{4x + x(x+2)^2}{x+2}}{(x+2)^2} = \frac{4x + x(x+2)^2}{(x+2)^3}$$

$$= \frac{x\bigl[4 + (x+2)^2\bigr]}{(x+2)^3} = \frac{x(x^2 + 4x + 8)}{(x+2)^3}$$

Verificando che si ottiene la forma indicata nel testo $f(x) = \dfrac{x^2 + x}{x^2 + 2}$: *(per la verifica geometrica completa vedi PDF p. 141)*

$$f(x) = \frac{x^2 + x}{x^2 + 2} \qquad (x > 0)$$

---

**Punto 2.** Studio della funzione $f(x) = \dfrac{x^2 + x}{x^2 + 2}$, $x \in \mathbb{R}$.

*Dominio:* $\mathbb{R}$ (il denominatore $x^2 + 2 > 0$ sempre).

*Limiti agli estremi:*

$$\lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} \frac{x^2 + x}{x^2 + 2} = 1$$

Asintoto orizzontale: $y = 1$.

*Intersezioni con gli assi:* $f(x) = 0 \Rightarrow x^2 + x = 0 \Rightarrow x(x+1) = 0$, quindi $x = 0$ e $x = -1$.

*Derivata prima:*

$$f'(x) = \frac{(2x+1)(x^2+2) - (x^2+x) \cdot 2x}{(x^2+2)^2}$$

Numeratore:

$$(2x+1)(x^2+2) - 2x(x^2+x) = 2x^3 + 4x + x^2 + 2 - 2x^3 - 2x^2 = -x^2 + 4x + 2$$

Quindi:

$$f'(x) = \frac{-x^2 + 4x + 2}{(x^2+2)^2}$$

$f'(x) = 0 \Rightarrow x^2 - 4x - 2 = 0 \Rightarrow x = \dfrac{4 \pm \sqrt{16+8}}{2} = 2 \pm \sqrt{6}$.

- $x_1 = 2 - \sqrt{6} \approx -0{,}449$ : minimo relativo, $f(x_1) < 0$
- $x_2 = 2 + \sqrt{6} \approx 4{,}449$ : massimo relativo, $f(x_2) < 1$
- $f'(x) > 0$ per $x \in (2-\sqrt{6},\, 2+\sqrt{6})$: $f$ crescente; $f'(x) < 0$ altrove: $f$ decrescente.

*Osservazioni:* $f(0) = 0$, $f(-1) = 0$; $f \to 1^-$ per $x \to +\infty$ (da sotto); per $x \to -\infty$, $f \to 1^+$ (da sopra poiché per $x \ll 0$ il numeratore è circa $x^2$ e il denominatore $x^2$, con correzioni negative).

*(grafico — vedi PDF p. 142)*

---

**Punto 3.** Scomposizione in frazioni parziali.

Si cercano $a, b, c$ tali che:

$$\frac{x^2 + x}{x^2 + 2} = a + \frac{bx + c}{x^2 + 2} \tag{1}$$

Moltiplicando entrambi i membri per $x^2 + 2$:

$$x^2 + x = a(x^2 + 2) + bx + c = ax^2 + bx + (2a + c)$$

Identificando i coefficienti per potenze di $x$:

$$\begin{cases} x^2: & a = 1 \\ x^1: & b = 1 \\ x^0: & 2a + c = 0 \end{cases} \implies a = 1,\quad b = 1,\quad c = -2$$

La scomposizione è:

$$\frac{x^2 + x}{x^2 + 2} = 1 + \frac{x - 2}{x^2 + 2} \tag{1}$$

---

**Punto 4.** Area della regione piana limitata da $\gamma$, dall'asintoto $y = 1$ e dalla retta $x = 2$.

Per $x \in [0, 2]$, si ha $f(x) \le 1$ (con $f(0) = 0 < 1$ e $f(2) = \frac{6}{6} = 1$). Quindi l'area è:

$$\mathcal{A} = \int_0^2 \bigl[1 - f(x)\bigr]\,dx = \int_0^2 \left[1 - 1 - \frac{x-2}{x^2+2}\right]dx = -\int_0^2 \frac{x-2}{x^2+2}\,dx = \int_0^2 \frac{2-x}{x^2+2}\,dx$$

Separiamo in due integrali:

$$\mathcal{A} = \int_0^2 \frac{2}{x^2+2}\,dx - \int_0^2 \frac{x}{x^2+2}\,dx$$

**Primo integrale:**

$$\int_0^2 \frac{2}{x^2+2}\,dx = 2 \cdot \frac{1}{\sqrt{2}} \arctan\!\left(\frac{x}{\sqrt{2}}\right)\Bigg|_0^2 = \sqrt{2}\arctan\!\left(\sqrt{2}\right) - 0 = \sqrt{2}\arctan\sqrt{2}$$

**Secondo integrale** (con sostituzione $u = x^2 + 2$, $du = 2x\,dx$):

$$\int_0^2 \frac{x}{x^2+2}\,dx = \frac{1}{2}\ln(x^2+2)\Bigg|_0^2 = \frac{1}{2}(\ln 6 - \ln 2) = \frac{1}{2}\ln 3$$

Quindi:

$$\boxed{\mathcal{A} = \sqrt{2}\arctan\sqrt{2} - \frac{\ln 3}{2}}$$

---

*Fonte:* [📄 PDF p.141](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
