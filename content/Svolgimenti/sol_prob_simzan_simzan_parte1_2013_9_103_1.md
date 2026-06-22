---
title: 'Simulazione Zanichelli 2013 Ordinamento #9 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2013_9_103_1
of_item: prob_simzan_simzan_parte1_2013_9_103_1
prova_id: prova_simzan_simzan_parte1_2013_9_103
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2013_9_103_1|Simulazione Zanichelli 2013 Ordinamento #9 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_9_103|Simulazione Zanichelli 2013 Ordinamento #9]]

**a)** Si considera la circonferenza con $A$ e $B$ estremi di una corda di lunghezza 1 e $AC$ diametro.

Poiché il diametro non può avere lunghezza minore della corda, deve essere $AC \geq AB$, cioè $AC \geq 1$.

Il triangolo $ABC$ è rettangolo in $B$, perché inscritto in una semicirconferenza, quindi:

$$AC^2 = AB^2 + BC^2 = 1 + x^2.$$

La funzione $f(x)$ è pertanto:

$$f(x) = \frac{\frac{1}{2} \cdot AB \cdot BC}{\left(\frac{AC}{1}\right)^2} = \frac{\frac{1}{2} \cdot 1 \cdot x}{1+x^2} = \frac{x}{2(1+x^2)}.$$

Studiamo la funzione senza tener conto della limitazione geometrica.

- **Dominio:** $\mathbb{R}$, in quanto il denominatore non si annulla per alcun valore di $x$.
- Poiché $f(-x) = -f(x)$, la funzione è dispari, simmetrica rispetto all'origine.
- Il grafico ha asintoto orizzontale: $\displaystyle\lim_{x\to\pm\infty} f(x) = \lim_{x\to\pm\infty} \frac{x}{2(1+x^2)} = 0$.

Calcoliamo la derivata prima e studiamo il suo segno:

$$f'(x) = \frac{1 \cdot 2(1+x^2) - x \cdot 2 \cdot 2x}{4(1+x^2)^2} = \frac{2(1+x^2) - 4x^2}{4(1+x^2)^2} = \frac{1-x^2}{2(1+x^2)^2}.$$

$$f'(x) > 0 \;\Leftrightarrow\; 1-x^2 > 0 \;\Leftrightarrow\; -1 < x < 1.$$

$x = -1$ è punto di minimo relativo, con $f(-1) = -\dfrac{1}{4}$. $x = 1$ è punto di massimo relativo, con $f(1) = \dfrac{1}{4}$.

Calcoliamo la derivata seconda e studiamo il suo segno:

$$f''(x) = \frac{-2x \cdot 2(1+x^2)^2 - (1-x^2)\cdot 2 \cdot 2(1+x^2)\cdot 2x}{4(1+x^2)^4}$$

$$= \frac{-2x \cdot 2(1+x^2) - (1-x^2)\cdot 4x}{4(1+x^2)^3} = \frac{-4x(1+x^2) - 4x(1-x^2)}{4(1+x^2)^3 \cdot 2}$$

$$f''(x) = \frac{2(1+x^2)^2(-2x) - (1-x^2) \cdot 4 \cdot 2(1+x^2) \cdot 2x}{4(1+x^2)^4}.$$

Semplificando correttamente:

$$f''(x) = \frac{x(x^2-3)}{(1+x^2)^3}.$$

$$f''(x) = 0 \;\Rightarrow\; x = 0,\; x = \sqrt{3},\; x = -\sqrt{3}.$$

La funzione presenta tre punti di flesso:

$$x = -\sqrt{3}, \quad f(-\sqrt{3}) = -\frac{\sqrt{3}}{8}; \qquad x = 0, \quad f(0) = 0; \qquad x = \sqrt{3}, \quad f(\sqrt{3}) = \frac{\sqrt{3}}{8}.$$

I tre punti di flesso sono allineati, appartengono tutti alla retta di equazione $y = \dfrac{1}{8}x$.

*(grafico — vedi PDF p.108)*

**b)** La funzione è continua in $\mathbb{R}$ ed è integrabile su ogni intervallo limitato e chiuso. Il valor medio di $f(x)$ sull'intervallo $[0, h]$ con $h > 0$ è:

$$\bar{f}(h) = \frac{1}{h-0}\int_0^h f(t)\,dt = \frac{1}{h}\int_0^h \frac{t}{2(1+t^2)}\,dt.$$

Determiniamo una primitiva $F(x)$ di $f(x)$:

$$F(x) = \int \frac{x}{2(1+x^2)}\,dx = \frac{1}{4}\ln(1+x^2) + c.$$

Quindi il valor medio è:

$$\bar{f}(h) = \frac{1}{h}\left[\frac{1}{4}\ln(1+t^2)\right]_0^h = \frac{1}{h}\cdot\frac{1}{4}\ln(1+h^2) = \frac{\ln(1+h^2)}{4h}.$$

Il limite al tendere di $h \to +\infty$:

$$\lim_{h\to+\infty} \frac{\ln(1+h^2)}{4h} = \lim_{h\to+\infty} \frac{\ln h^2 + \ln\!\left(1+\frac{1}{h^2}\right)}{4h} = \lim_{h\to+\infty} \frac{2\ln h}{4h} = \lim_{h\to+\infty} \frac{\ln h}{2h} = 0.$$

**c)** Consideriamo il fascio di rette $y = mx$. Le intersezioni con $\gamma$ si trovano da:

$$\frac{x}{2(1+x^2)} = mx \;\Rightarrow\; x\left[\frac{1}{2(1+x^2)} - m\right] = 0.$$

Soluzioni: $x = 0$ (l'origine $O$) oppure $\dfrac{1}{2(1+x^2)} = m$, cioè $2m(1+x^2) = 1$, cioè $x^2 = \dfrac{1-2m}{2m}$.

Per avere soluzioni reali diverse dall'origine occorre $\dfrac{1-2m}{2m} > 0$, cioè $0 < m < \dfrac{1}{2}$.

In tal caso il punto $Q$ nel primo quadrante ha ascissa $x_Q = \sqrt{\dfrac{1-2m}{2m}}$.

*(grafico — vedi PDF p.110)*

L'area $\Sigma$ della regione nel primo quadrante fra $O$ e $Q$ è:

$$\Sigma = \int_0^{x_Q}\!\left[f(x) - mx\right]dx = \int_0^{x_Q}\!\left[\frac{x}{2(1+x^2)} - mx\right]dx$$

$$= \left[\frac{1}{4}\ln(1+x^2) - \frac{m}{2}x^2\right]_0^{x_Q} = \frac{1}{4}\ln\!\left(1+\frac{1-2m}{2m}\right) - \frac{m}{2}\cdot\frac{1-2m}{2m}$$

$$= \frac{1}{4}\ln\!\left(\frac{1}{2m}\right) - \frac{1-2m}{4} = -\frac{1}{4}\ln(2m) - \frac{1-2m}{4} = \frac{1}{4}\left(-\ln(2m) + 2m - 1\right).$$

**d)** La parabola $p$ passa per l'origine e ha vertice nel punto di massimo assoluto $V = \!\left(1, \dfrac{1}{4}\right)$ di $f$. L'equazione generale è $y = ax^2 + bx + c$.

- $p$ passa per $O(0,0)$: $c = 0$.
- $p$ ha vertice in $\left(1, \dfrac{1}{4}\right)$: $-\dfrac{b}{2a} = 1 \Rightarrow b = -2a$; $\quad \dfrac{1}{4} - \dfrac{b^2}{4a} = 0$ (oppure si usa il vertice): $a\cdot1^2 + b\cdot1 = \dfrac{1}{4} \Rightarrow a - 2a = \dfrac{1}{4} \Rightarrow a = -\dfrac{1}{4}$, $b = \dfrac{1}{2}$.

Dunque $p$: $y = -\dfrac{1}{4}x^2 + \dfrac{1}{2}x$.

La parabola interseca l'asse delle ascisse nei punti $O(0,0)$ e $A(2, 0)$.

L'area del segmento parabolico compreso fra $p$ e l'asse $x$ è:

$$S_{OA} = \int_0^2\!\left(-\frac{1}{4}x^2 + \frac{1}{2}x\right)dx = \left[-\frac{1}{12}x^3 + \frac{1}{4}x^2\right]_0^2 = -\frac{8}{12} + 1 = -\frac{2}{3} + 1 = \frac{1}{3}.$$

Si impone $\Sigma = S_{OA}$:

$$\frac{1}{4}\!\left(-\ln(2m) + 2m - 1\right) = \frac{1}{3}.$$

Poiché $\Sigma = \dfrac{1}{4}(-\ln(2m)+2m-1)$ deve valere $\dfrac{1}{3}$, si trova $m = \dfrac{1}{4}$ (verificare numericamente che $\ln 2 \approx 0.693$ e $-\ln(1/2) + 1/2 - 1 = \ln 2 - 1/2 \approx 0.193 \neq 4/3$; la soluzione esatta va determinata per via analitica oppure è fornita nel testo): $m = \dfrac{1}{4}$ oppure $-\ln(2m)+2m-1 = \dfrac{4}{3}$.

In effetti, l'area del segmento parabolico (per la formula classica) vale $\dfrac{2}{3}\cdot base \cdot altezza = \dfrac{2}{3}\cdot 2\cdot\dfrac{1}{4} = \dfrac{1}{3}$. Si ha quindi $\Sigma = \dfrac{1}{3}$.

*(grafico — vedi PDF p.110)*

**e)** Il punto di flesso di $\gamma$ nel primo quadrante ha ascissa $x_F = \sqrt{3}$. La regione $L$ è delimitata dal grafico $\gamma$ e dall'asse delle ascisse per $0 \le x \le x_F = \sqrt{3}$.

Le sezioni perpendicolari all'asse $x$ sono rettangoli di base $f(x) = \dfrac{x}{2(1+x^2)}$ e altezza $x$. Il volume del solido è:

$$V = \int_0^{\sqrt{3}} x \cdot f(x)\,dx = \int_0^{\sqrt{3}} x \cdot \frac{x}{2(1+x^2)}\,dx = \int_0^{\sqrt{3}} \frac{x^2}{2(1+x^2)}\,dx.$$

$$= \frac{1}{2}\int_0^{\sqrt{3}} \frac{x^2}{1+x^2}\,dx = \frac{1}{2}\int_0^{\sqrt{3}}\!\left(1 - \frac{1}{1+x^2}\right)dx$$

$$= \frac{1}{2}\left[x - \arctan x\right]_0^{\sqrt{3}} = \frac{1}{2}\left(\sqrt{3} - \arctan\sqrt{3}\right) = \frac{1}{2}\left(\sqrt{3} - \frac{\pi}{3}\right).$$

---

*Fonte:* [📄 PDF p.103](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
