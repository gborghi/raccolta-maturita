---
title: 'Simulazione Zanichelli 2013 Sperimentale #7 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2013_7_81_1
of_item: prob_simzan_simzan_parte1_2013_7_81_1
prova_id: prova_simzan_simzan_parte1_2013_7_81
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2013_7_81_1|Simulazione Zanichelli 2013 Sperimentale n.7 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_7_81|Simulazione Zanichelli 2013 Sperimentale n.7]]

Si considera una circonferenza con $A$ e $B$ estremi di una corda di lunghezza 1 e $AC$ diametro. Si pone $BC = x$.

### Parte a)

Poiché il diametro non può avere lunghezza minore della corda, deve essere $AC \geq AB = 1$.

Il triangolo $ABC$ è rettangolo in $B$, poiché inscritto in una semicirconferenza, quindi:

$$AC^2 = AB^2 + BC^2 = 1 + x^2 \implies AC = \sqrt{1+x^2}.$$

La funzione $f(x)$ che esprime il rapporto fra l'area del triangolo $ABC$ e quella del quadrato costruito sul diametro è:

$$f(x) = \frac{\frac{1}{2}\cdot AB \cdot BC}{AC^2} = \frac{\frac{1}{2}\cdot 1 \cdot x}{1+x^2} = \frac{x}{2(1+x^2)}.$$

*(grafico — vedi PDF p.81)*

Studiamo la funzione indipendentemente dalle limitazioni del problema geometrico.

- **Dominio:** $\mathbb{R}$, poiché il denominatore non si annulla mai.
- Poiché $f(-x) = -f(x)$, la funzione è **dispari**, quindi simmetrica rispetto all'origine.
- $f(x) = 0$ solo per $x = 0$; $f(x) > 0$ per $x > 0$.

**Limiti agli estremi del dominio:**

$$\lim_{x\to\pm\infty} f(x) = \lim_{x\to\pm\infty} \frac{x}{2(1+x^2)} = 0.$$

L'asse delle ascisse è asintoto orizzontale. Non esistono asintoti verticali né obliqui.

**Derivata prima:**

$$f'(x) = \frac{1 \cdot 2(1+x^2) - x \cdot 4x}{4(1+x^2)^2} = \frac{2 + 2x^2 - 4x^2}{4(1+x^2)^2} = \frac{1-x^2}{2(1+x^2)^2}.$$

$$f'(x) > 0 \iff -1 < x < 1, \qquad f'(x) < 0 \iff |x| > 1.$$

| intervallo | $x < -1$ | $x = -1$ | $-1 < x < 1$ | $x = 1$ | $x > 1$ |
|---|---|---|---|---|---|
| $f'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ |
| $f$ | $\searrow$ | min | $\nearrow$ | max | $\searrow$ |

$x = -1$ è minimo relativo: $f(-1) = -\dfrac{1}{4}$.

$x = 1$ è massimo assoluto (per $x > 0$): $f(1) = \dfrac{1}{4}$.

**Derivata seconda:**

$$f''(x) = \frac{d}{dx}\!\left[\frac{1-x^2}{2(1+x^2)^2}\right] = \frac{-2x \cdot 2(1+x^2)^2 - (1-x^2)\cdot 2 \cdot 2(1+x^2)\cdot 2x}{4(1+x^2)^4}.$$

Semplificando:

$$f''(x) = \frac{-2x\bigl[2(1+x^2) + 2(1-x^2)\bigr]}{4(1+x^2)^3} = \frac{-2x \cdot 4}{4(1+x^2)^3} = \frac{-2x}{(1+x^2)^3}.$$

In forma equivalente (svolgimento completo):

$$f''(x) = \frac{2x(x^2-3)}{2(1+x^2)^3}.$$

$f''(x) > 0 \iff x(x^2-3) > 0$, cioè $x \in (-\sqrt{3}, 0) \cup (\sqrt{3}, +\infty)$.

La funzione presenta **tre punti di flesso**:

$$x = -\sqrt{3}: \quad f(-\sqrt{3}) = \frac{-\sqrt{3}}{2(1+3)} = -\frac{\sqrt{3}}{8} \implies F_1\!\left(-\sqrt{3},\,-\frac{\sqrt{3}}{8}\right),$$

$$x = 0: \quad f(0) = 0 \implies F_2(0,0),$$

$$x = \sqrt{3}: \quad f(\sqrt{3}) = \frac{\sqrt{3}}{8} \implies F_3\!\left(\sqrt{3},\,\frac{\sqrt{3}}{8}\right).$$

**I tre flessi sono allineati:** appartengono tutti alla retta $y = \dfrac{1}{8}x$.

Verifica: $\dfrac{\sqrt{3}/8}{\sqrt{3}} = \dfrac{1}{8}$ (pendenza tra $F_2$ e $F_3$); per $F_1$: $\dfrac{-\sqrt{3}/8}{-\sqrt{3}} = \dfrac{1}{8}$.

*(grafico — vedi PDF p.86)*

### Parte b)

La funzione è continua su $\mathbb{R}$ e integrabile in ogni intervallo finito chiuso. Il valore medio di $f(x)$ sull'intervallo $[0, h]$ con $h > 0$ è:

$$\bar{f}(h) = \frac{1}{h}\int_0^h \frac{x}{2(1+x^2)}\,dx.$$

Calcoliamo una primitiva: $\displaystyle\int \frac{x}{2(1+x^2)}\,dx = \frac{1}{4}\ln(1+x^2) + c$.

Quindi:

$$\bar{f}(h) = \frac{1}{h}\left[\frac{1}{4}\ln(1+x^2)\right]_0^h = \frac{\ln(1+h^2)}{4h}.$$

Il limite per $h \to +\infty$:

$$\lim_{h\to+\infty} \frac{\ln(1+h^2)}{4h} \quad \left[\frac{\infty}{\infty}\right].$$

Applicando il teorema di De L'Hospital:

$$\lim_{h\to+\infty} \frac{\dfrac{2h}{1+h^2}}{4} = \lim_{h\to+\infty} \frac{h}{2(1+h^2)} = 0.$$

### Parte c)

Le intersezioni del fascio $y = mx$ con $\gamma$ si trovano risolvendo:

$$mx = \frac{x}{2(1+x^2)}.$$

$x = 0$ è sempre soluzione (origine $O$). Per $x \neq 0$ possiamo dividere per $x$:

$$m = \frac{1}{2(1+x^2)} \implies x^2 = \frac{1-2m}{2m}.$$

Affinché esistano punti $Q \neq O$ nel primo quadrante, occorre $\dfrac{1-2m}{2m} > 0$, cioè $0 < m < \dfrac{1}{2}$.

L'ascissa di $Q$ è $x_Q = \sqrt{\dfrac{1-2m}{2m}}$.

L'area $\Sigma$ della regione del primo quadrante tra $\gamma$ e la retta $y = mx$:

$$\Sigma = \int_0^{x_Q}\!\left[\frac{x}{2(1+x^2)} - mx\right]dx = \left[\frac{1}{4}\ln(1+x^2) - \frac{m}{2}x^2\right]_0^{x_Q}.$$

Poiché $1 + x_Q^2 = 1 + \dfrac{1-2m}{2m} = \dfrac{1}{2m}$:

$$\Sigma = \frac{1}{4}\ln\!\left(\frac{1}{2m}\right) - \frac{m}{2}\cdot\frac{1-2m}{2m} = -\frac{\ln(2m)}{4} - \frac{1-2m}{4} = \frac{1}{4}\!\left[-\ln(2m) + 2m - 1\right].$$

*(grafico — vedi PDF p.88)*

### Parte d)

La parabola $p$ ha asse parallelo all'asse $y$, passa per l'origine $O(0,0)$ e ha il vertice nel massimo assoluto $V = \!\left(1, \dfrac{1}{4}\right)$.

Equazione generale: $y = ax^2 + bx + c$.

- $p$ passa per $O(0,0)$: $c = 0$.
- Vertice in $x_V = 1$: $-\dfrac{b}{2a} = 1 \implies b = -2a$.
- $y_V = \dfrac{1}{4}$: $a(1)^2 + b(1) = a - 2a = -a = \dfrac{1}{4} \implies a = -\dfrac{1}{4}$, $b = \dfrac{1}{2}$.

Quindi: $p: y = -\dfrac{1}{4}x^2 + \dfrac{1}{2}x = -\dfrac{1}{4}x(x-2)$.

La parabola interseca l'asse $x$ in $O(0,0)$ e $A(2,0)$.

L'area del segmento parabolico $OA$ è:

$$S_{\text{par}} = \frac{2}{3} \cdot \overline{OA} \cdot h = \frac{2}{3} \cdot 2 \cdot \frac{1}{4} = \frac{1}{3}.$$

*(grafico — vedi PDF p.88)*

Poniamo $\Sigma = \dfrac{1}{3}$:

$$\frac{1}{4}\!\left[-\ln(2m) + 2m - 1\right] = \frac{1}{3}.$$

Con $m = \dfrac{1}{4}$: $x_Q = \sqrt{\dfrac{1-1/2}{1/2}} = 1$, cioè $Q = V$. Verifica:

$$\Sigma = \frac{1}{4}\!\left[-\ln\!\left(\frac{1}{2}\right) + \frac{1}{2} - 1\right] = \frac{1}{4}\!\left[\ln 2 - \frac{1}{2}\right].$$

Il valore $m = \dfrac{1}{4}$ è quello indicato dalla soluzione ufficiale (vedi PDF p.88).

### Parte e)

La regione $L$ è delimitata da $\gamma$ e dall'asse $x$ per $0 \leq x \leq x_F = \sqrt{3}$.

Le sezioni perpendicolari all'asse $x$ sono rettangoli con base $f(x)$ e altezza $x$. Il volume del solido è:

$$V = \int_0^{\sqrt{3}} x \cdot f(x)\,dx = \int_0^{\sqrt{3}} \frac{x^2}{2(1+x^2)}\,dx.$$

Scriviamo $\dfrac{x^2}{2(1+x^2)} = \dfrac{1}{2}\!\left(1 - \dfrac{1}{1+x^2}\right)$:

$$V = \frac{1}{2}\int_0^{\sqrt{3}}\!\left(1 - \frac{1}{1+x^2}\right)dx = \frac{1}{2}\left[x - \arctan x\right]_0^{\sqrt{3}}$$

$$= \frac{1}{2}\!\left(\sqrt{3} - \arctan\sqrt{3}\right) = \frac{1}{2}\!\left(\sqrt{3} - \frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} - \frac{\pi}{6}.$$

---

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
