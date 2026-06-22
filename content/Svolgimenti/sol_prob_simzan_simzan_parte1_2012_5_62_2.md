---
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2012_5_62_2
of_item: prob_simzan_simzan_parte1_2012_5_62_2
prova_id: prova_simzan_simzan_parte1_2012_5_62
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2012_5_62_2|Simulazione Zanichelli 2012 Ordinamento #5 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_5_62|Simulazione Zanichelli 2012 Ordinamento #5]]

Nel riferimento cartesiano $xOy$ si consideri la funzione $f(x)$ definita e continua in $]-4; +\infty[$, con la derivata seconda $f''(x)$ avente il grafico riportato nella figura. È noto che $x = -4$ è un asintoto verticale per $f(x)$; la tangente al grafico di $f(x)$ in $x = 0$ è parallela alla bisettrice del I e III quadrante (quindi $f'(0) = 1$); la tangente in $x = -3$ ha equazione $4x - y + 14 = 0$ (pendenza $4$, quindi $f'(-3) = 4$, e $f(-3) = 4(-3) + 14 = 2$).

*(grafico di $f''(x)$ — vedi PDF p.62)*

### Punto a)

Calcoliamo l'area della parte di piano delimitata dal grafico di $f''(x)$ e dall'asse $x$ nell'intervallo $[-3; 0]$.

Per il teorema fondamentale del calcolo integrale:

$$\int_{-3}^{0} f''(x)\,dx = f'(0) - f'(-3) = 1 - 4 = -3.$$

Dal grafico di $f''(x)$ nell'intervallo $[-3; 0]$, la funzione è sempre negativa, quindi l'area è:

$$A = \left|\int_{-3}^{0} f''(x)\,dx\right| = |-3| = 3.$$

### Punto b)

*(grafico probabile di $f'(x)$ — vedi PDF p.71)*

Dalla conoscenza di $f''(x)$: in $[-3;0]$ si ha $f''(x) < 0$, dunque $f'(x)$ è decrescente, da $f'(-3)=4$ a $f'(0)=1$. Per $x \to -4^+$, poiché $x=-4$ è asintoto verticale per $f$, anche $f'(x) \to +\infty$.

### Punto c)

Sapendo che $f''(x) = -\dfrac{4}{(x+4)^2}$, determiniamo $f(x)$.

Integriamo per trovare $f'(x)$:
$$f'(x) = \int -\frac{4}{(x+4)^2}\,dx = \frac{4}{x+4} + c.$$

Condizione $f'(0) = 1$:
$$\frac{4}{4} + c = 1 \quad \Rightarrow \quad 1 + c = 1 \quad \Rightarrow \quad c = 0.$$

Quindi $f'(x) = \dfrac{4}{x+4}$.

Integriamo per trovare $f(x)$:
$$f(x) = \int \frac{4}{x+4}\,dx = 4\ln(x+4) + c.$$

Condizione $f(-3) = 2$:
$$4\ln(-3+4) + c = 2 \quad \Rightarrow \quad 4\ln 1 + c = 2 \quad \Rightarrow \quad c = 2.$$

Pertanto:
$$f(x) = 4\ln(x+4) + 2.$$

**Studio completo di $f(x) = 4\ln(x+4) + 2$:**

- Dominio: $D = ]-4; +\infty[$.
- Segno: $f(x) = 0 \Leftrightarrow 4\ln(x+4) = -2 \Leftrightarrow \ln(x+4) = -\dfrac{1}{2} \Leftrightarrow x = e^{-1/2} - 4$.
  
  $f(x) < 0$ per $-4 < x < e^{-1/2}-4$; $f(x) > 0$ per $x > e^{-1/2}-4$.

- Asintoto verticale: $\lim_{x\to -4^+} f(x) = -\infty$.
- Limiti all'infinito: $\lim_{x\to +\infty} f(x) = +\infty$.
- Derivata prima: $f'(x) = \dfrac{4}{x+4} > 0$ per ogni $x \in D$: $f$ è strettamente crescente.
- Derivata seconda: $f''(x) = -\dfrac{4}{(x+4)^2} < 0$ per ogni $x \in D$: $f$ è concava.

*(grafico — vedi PDF p.72)*

Il grafico $\Gamma$ di $f(x) = 4\ln(x+4) + 2$ si ottiene dal grafico di $y = \ln x$ tramite: traslazione del vettore $(-4; 0)$, dilatazione verticale di fattore $4$, traslazione del vettore $(0; 2)$.

### Punto d)

Calcoliamo l'area della parte di piano compresa tra $\Gamma$ e l'asse $x$ nell'intervallo $[-3; 0]$.

Poiché $e^{-1/2} - 4 \approx -3{,}39 < -3$, nell'intervallo $[-3; 0]$ la funzione è positiva (in quanto $-3 > e^{-1/2}-4$). Quindi:

$$A = \int_{-3}^{0} f(x)\,dx = \int_{-3}^{0} (4\ln(x+4) + 2)\,dx.$$

Calcoliamo $\int 4\ln(x+4)\,dx$ per parti: $u = \ln(x+4)$, $v' = 4$; $u' = \dfrac{1}{x+4}$, $v = 4(x+4)$:

$$\int 4\ln(x+4)\,dx = 4(x+4)\ln(x+4) - \int \frac{4(x+4)}{x+4}\,dx = 4(x+4)\ln(x+4) - 4x + c.$$

Quindi:
$$\int_{-3}^{0}(4\ln(x+4)+2)\,dx = \left[4(x+4)\ln(x+4) - 4x + 2x\right]_{-3}^{0} = \left[4(x+4)\ln(x+4) - 2x\right]_{-3}^{0}.$$

$$= \bigl[4\cdot4\cdot\ln 4 - 0\bigr] - \bigl[4\cdot1\cdot\ln 1 - 2(-3)\bigr] = 16\ln 4 - (0 + 6) = 16\ln 4 - 6.$$

*(grafico — vedi PDF p.73)*

### Punto e)

Calcoliamo il volume del solido ottenuto dalla rotazione completa attorno alla retta $y = 2$ del tratto di $\Gamma$ compreso nell'intervallo $[-3; 0]$.

La distanza tra il punto $(x, f(x))$ e la retta $y=2$ è $|f(x) - 2| = |4\ln(x+4)|$. Poiché in $[-3;0]$ si ha $x+4 \in [1;4]$ quindi $\ln(x+4) \ge 0$, risulta $f(x) - 2 = 4\ln(x+4) \ge 0$.

$$V = \pi \int_{-3}^{0} [f(x) - 2]^2\,dx = \pi \int_{-3}^{0} [4\ln(x+4)]^2\,dx = 16\pi \int_{-3}^{0} [\ln(x+4)]^2\,dx.$$

Con la sostituzione $t = x+4$ (quando $x=-3$, $t=1$; quando $x=0$, $t=4$):

$$\int_1^4 (\ln t)^2\,dt.$$

Integrazione per parti: $u = (\ln t)^2$, $dv = dt$; $du = \dfrac{2\ln t}{t}dt$, $v = t$:

$$\int_1^4 (\ln t)^2\,dt = \left[t(\ln t)^2\right]_1^4 - 2\int_1^4 \ln t\,dt.$$

$\int_1^4 \ln t\,dt = [t\ln t - t]_1^4 = (4\ln 4 - 4) - (0 - 1) = 4\ln 4 - 3$.

$\left[t(\ln t)^2\right]_1^4 = 4(\ln 4)^2 - 0 = 4(\ln 4)^2$.

$$\int_1^4 (\ln t)^2\,dt = 4(\ln 4)^2 - 2(4\ln 4 - 3) = 4(\ln 4)^2 - 8\ln 4 + 6.$$

$$V = 16\pi\bigl[4(\ln 4)^2 - 8\ln 4 + 6\bigr].$$

*(grafico — vedi PDF p.73)*

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
