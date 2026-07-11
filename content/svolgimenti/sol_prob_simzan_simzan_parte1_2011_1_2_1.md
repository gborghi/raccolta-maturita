---
title: 'Simulazione Zanichelli 2011 PNI #1 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2011_1_2_1
of_item: prob_simzan_simzan_parte1_2011_1_2_1
prova_id: prova_simzan_simzan_parte1_2011_1_2
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2011_1_2_1|Simulazione Zanichelli 2011 PNI n.1 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_1_2|Simulazione Zanichelli 2011 PNI n.1]]

Sia $ABC$ un triangolo con il lato $BC$ di lunghezza unitaria e l'angolo $\widehat{ABC}$ di ampiezza $60°$. Posto $AB = x$.

### Punto a) — Determinazione di $f(x)$

Calcoliamo $AC$ con il teorema del coseno:

$$AC^2 = AB^2 + BC^2 - 2\,AB\cdot BC\cdot\cos\widehat{ABC} = x^2 + 1 - 2x\cdot\frac{1}{2} = x^2 - x + 1,$$

quindi $AC = \sqrt{x^2 - x + 1}$.

Troviamo $\sin\widehat{BCA}$ con il teorema dei seni:

$$\frac{AC}{\sin\widehat{ABC}} = \frac{AB}{\sin\widehat{BCA}} \;\Rightarrow\; \frac{\sqrt{x^2-x+1}}{\dfrac{\sqrt{3}}{2}} = \frac{x}{\sin\widehat{BCA}} \;\Rightarrow\; \sin\widehat{BCA} = \frac{\sqrt{3}}{2}\cdot\frac{x}{\sqrt{x^2-x+1}}.$$

Il rapporto richiesto è:

$$f(x) = \frac{AC}{\sin\widehat{BCA}} = \frac{\sqrt{x^2-x+1}}{\dfrac{\sqrt{3}}{2}\cdot\dfrac{x}{\sqrt{x^2-x+1}}} = \frac{2\sqrt{3}\,(x^2-x+1)}{3x}.$$

Pertanto la funzione ha come unica limitazione geometrica $x > 0$.

**Studio di $f(x) = \dfrac{2\sqrt{3}(x^2 - x + 1)}{3x}$ senza vincoli geometrici:**

- **Dominio:** $D = \mathbb{R} \setminus \{0\} = (-\infty, 0) \cup (0, +\infty)$.

- **Segno:** $f(x) > 0$ se $x > 0$; $f(x) < 0$ se $x < 0$.

- **Intersezioni con gli assi:** nessuna (il discriminante di $x^2-x+1$ è $\Delta = 1-4 < 0$, dunque $x^2-x+1>0$ per ogni $x$).

- **Limiti agli estremi del dominio e asintoti:**

$$\lim_{x\to 0^+} f(x) = +\infty, \qquad \lim_{x\to 0^-} f(x) = -\infty.$$

L'asse $y$ è asintoto verticale. L'asintoto obliquo si calcola come:

$$m = \lim_{x\to\pm\infty}\frac{f(x)}{x} = \frac{2\sqrt{3}}{3}, \qquad q = \lim_{x\to\pm\infty}\left[f(x) - \frac{2\sqrt{3}}{3}\,x\right] = -\frac{2\sqrt{3}}{3}.$$

L'asintoto obliquo (per $x\to\pm\infty$) è $y = \dfrac{2\sqrt{3}}{3}\,x - \dfrac{2\sqrt{3}}{3}$.

- **Derivata prima:**

$$f'(x) = \frac{2\sqrt{3}}{3}\cdot\frac{(2x-1)\,x - (x^2-x+1)}{x^2} = \frac{2\sqrt{3}}{3}\cdot\frac{x^2-1}{x^2}.$$

$f'(x) = 0 \Rightarrow x = \pm 1$.

Per $x>0$: $f$ è decrescente su $(0,1)$, crescente su $(1,+\infty)$; minimo relativo in $x=1$ con $f(1)=\dfrac{2\sqrt{3}}{3}$.

Per $x<0$: $f$ è crescente su $(-\infty,-1)$, decrescente su $(-1,0)$; massimo relativo in $x=-1$ con $f(-1)=-\dfrac{2\sqrt{3}}{3} \cdot 3 = -\dfrac{2\sqrt{3}}{3}\cdot 3 = -2\sqrt{3}$... Verifica: $f(-1)=\dfrac{2\sqrt{3}(1+1+1)}{3\cdot(-1)}=-2\sqrt{3}$.

- **Derivata seconda:**

$$f''(x) = \frac{2\sqrt{3}}{3}\cdot\frac{2}{x^3}.$$

$f''(x) > 0$ per $x>0$ (funzione convessa); $f''(x) < 0$ per $x<0$ (funzione concava). Nessun flesso.

*(grafico — vedi PDF p.5)*

### Punto b) — Centro di simmetria in $P = \left(0,\,-\dfrac{2\sqrt{3}}{3}\right)$

Per verificare che $P$ è centro di simmetria di $g$, scriviamo la trasformazione simmetrica rispetto a $P$:

$$\begin{cases} x' = -x \\ y' = -y - \dfrac{4\sqrt{3}}{3} \end{cases}$$

e sostituiamo $f(x)$ nelle nuove coordinate. Il grafico trasformato di $g$ rispetto a $P$ soddisfa:

$$y' = -f(-x') - \frac{4\sqrt{3}}{3} = -\frac{2\sqrt{3}(x'^2+x'+1)}{-3x'} - \frac{4\sqrt{3}}{3} = \frac{2\sqrt{3}(x'^2+x'+1)}{3x'} - \frac{4\sqrt{3}}{3}.$$

Semplificando:

$$y' = \frac{2\sqrt{3}(x'^2+x'+1) - 4\sqrt{3}\,x'}{3x'} = \frac{2\sqrt{3}(x'^2-x'+1)}{3x'} = f(x').$$

Quindi la simmetria rispetto a $P$ manda $g$ in se stessa: $P\!\left(0,-\dfrac{2\sqrt{3}}{3}\right)$ è centro di simmetria per $g$.

### Punto c) — Retta tangente e triangolo di area minima

La retta tangente a $g$ nel punto di ascissa $t \in\, ]0,1[$ ha equazione:

$$y = f(t) + f'(t)\,(x - t).$$

Poniamo $y=0$ per trovare l'intersezione $R$ con l'asse $x$:

$$x_R = t - \frac{f(t)}{f'(t)} = t - \frac{\dfrac{2\sqrt{3}(t^2-t+1)}{3t}}{\dfrac{2\sqrt{3}(t^2-1)}{3t^2}} = t - \frac{t(t^2-t+1)}{t^2-1} = \frac{t(t-2)}{(t-1)(t+1)}.$$

Poniamo $x=0$ per trovare l'intersezione $S$ con l'asse $y$:

$$y_S = f(t) - t\,f'(t) = \frac{2\sqrt{3}(t^2-t+1)}{3t} - \frac{2\sqrt{3}(t^2-1)}{3t} = \frac{2\sqrt{3}(2-t)}{3t}.$$

L'area del triangolo formato dalla retta tangente con gli assi cartesiani è:

$$A(t) = \frac{1}{2}|x_R|\cdot|y_S| = \frac{1}{2}\cdot\frac{t(2-t)}{(1-t)(1+t)}\cdot\frac{2\sqrt{3}(2-t)}{3t} = \frac{\sqrt{3}(2-t)^2}{3(1-t^2)}.$$

Si calcola $A'(t)=0$ (per $t\in]0,1[$):

$$A'(t) = \frac{\sqrt{3}}{3}\cdot\frac{-2(2-t)(1-t^2)-(2-t)^2\cdot(-2t)}{(1-t^2)^2} = \frac{\sqrt{3}(2-t)}{3(1-t^2)^2}\left[-2(1-t^2)+2t(2-t)\right].$$

$$-2(1-t^2)+2t(2-t) = -2+2t^2+4t-2t^2 = 4t-2.$$

$A'(t)=0 \Rightarrow 4t-2=0 \Rightarrow t=\dfrac{1}{2}$.

$A'(t)<0$ per $t<\dfrac{1}{2}$, $A'(t)>0$ per $t>\dfrac{1}{2}$: minimo in $t=\dfrac{1}{2}$.

$$A\!\left(\frac{1}{2}\right) = \frac{\sqrt{3}\cdot\left(\frac{3}{2}\right)^2}{3\cdot\left(1-\frac{1}{4}\right)} = \frac{\sqrt{3}\cdot\frac{9}{4}}{3\cdot\frac{3}{4}} = \frac{\frac{9\sqrt{3}}{4}}{\frac{9}{4}} = \sqrt{3}.$$

Il valore di $t$ che minimizza l'area è $t=\dfrac{1}{2}$, con area minima $\sqrt{3}$.

### Punto d) — Area della regione tra $g$, la retta $r$, l'asse $x$ e $x=1$

La retta $r$ ha inclinazione $60°$ sul semiasse positivo delle $x$: coefficiente angolare $m=\tan 60°=\sqrt{3}$, e interseca $g$ nel punto di ascissa $x_0 = \dfrac{1}{\sqrt{3}}-1 = \dfrac{1-\sqrt{3}}{\sqrt{3}}$ (che è negativo, poiché $\sqrt{3}>1$).

*(grafico — vedi PDF p.7–8)*

Sia $H$ la proiezione ortogonale di $Q$ (intersezione di $r$ con $g$) sull'asse $x$, e $G$ l'intersezione di $r$ con l'asse delle ascisse. L'area della regione richiesta è:

$$S = \frac{1}{2}\overline{OH}\cdot\overline{GS} - \int_{x_0}^{0} f(x)\,dx + \int_{0}^{1} f(x)\,dx - \text{(area del trapezio triangolare sotto } r\text{)}.$$

Dopo il calcolo degli integrali (per parti o con primitive di $\dfrac{x^2-x+1}{x} = x-1+\dfrac{1}{x}$):

$$\int f(x)\,dx = \frac{2\sqrt{3}}{3}\left(\frac{x^2}{2}-x+\ln|x|\right)+C.$$

Il risultato finale dell'area è (vedi PDF p.7–8 per i dettagli numerici):

$$S = \frac{3-\sqrt{3}-2\sqrt{3}\ln(\sqrt{3}-1)}{3}.$$

### Punto e) — Raggio della circonferenza circoscritta al triangolo $ABC$

Per il teorema della corda, il raggio della circonferenza circoscritta è:

$$R = \frac{BC}{2\sin\widehat{BAC}} = \frac{1}{2\sin A}.$$

Poiché $\widehat{ABC}=60°$ e $BC=1$, $AB=x>0$, dalla legge dei seni abbiamo già:

$$\sin\widehat{BCA} = \frac{\sqrt{3}}{2}\cdot\frac{x}{\sqrt{x^2-x+1}}.$$

Inoltre $\widehat{BAC} = \pi - 60° - \widehat{BCA}$, e il raggio circoscritto vale anche:

$$R = \frac{BC}{2\sin\widehat{BAC}} = \frac{AC}{2\sin\widehat{ABC}} = \frac{\sqrt{x^2-x+1}}{2\cdot\dfrac{\sqrt{3}}{2}} = \frac{\sqrt{x^2-x+1}}{\sqrt{3}}.$$

Studiano $g(x)=\dfrac{x^2-x+1}{3}$ per $x>0$: ha minimo in $x=\dfrac{1}{2}$ con $g\!\left(\dfrac{1}{2}\right)=\dfrac{3}{4}\cdot\dfrac{1}{3}=\dfrac{1}{4}$, quindi $R_{\min}=\dfrac{1}{2}$. Per $x\to+\infty$, $R\to+\infty$.

$$R \in \left[\frac{1}{2}, +\infty\right).$$

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
