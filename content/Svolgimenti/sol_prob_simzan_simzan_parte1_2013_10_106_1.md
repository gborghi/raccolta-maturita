---
title: 'Simulazione Zanichelli 2013 Ordinamento #10 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2013_10_106_1
of_item: prob_simzan_simzan_parte1_2013_10_106_1
prova_id: prova_simzan_simzan_parte1_2013_10_106
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2013_10_106_1|Simulazione Zanichelli 2013 Ordinamento #10 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_10_106|Simulazione Zanichelli 2013 Ordinamento #10]]

### Punto a)

Disegniamo la circonferenza mettendo in evidenza gli elementi indicati dal problema: il diametro $AC$, di lunghezza variabile, la corda $AB$ (con $AB = 1$) e la corda $BC$ (con $BC = x$, $0 \le x \le AC$).

*(grafico — vedi PDF p.106)*

Poiché il diametro non può avere lunghezza minore della corda, deve essere:
$$AC \ge AB \implies AC \ge 1.$$

Il triangolo $ABC$ è rettangolo in $B$, perché inscritto in una semicirconferenza, quindi:
$$AC^2 = AB^2 + BC^2 = 1 + x^2.$$

La funzione $f(x)$ è pertanto data da:
$$f(x) = \frac{BC \cdot AB}{AC} = \frac{x}{\sqrt{1+x^2}} \cdot \frac{1}{\sqrt{1+x^2}} \implies f(x) = \frac{x}{2(1+x^2)}.$$

Studiamo la funzione senza tener conto della limitazione geometrica.

- **Dominio:** $\mathbb{R}$, in quanto il denominatore non si annulla per alcun valore di $x$.
- Poiché $f(-x) = \dfrac{-x}{2(1+x^2)} = -f(x)$, la funzione è dispari, quindi è simmetrica rispetto all'origine.
- Il grafico della funzione interseca gli assi cartesiani soltanto nell'origine $O(0;\,0)$, poiché $f(x) = 0 \Leftrightarrow x = 0$.
- **Segno della funzione:**
  - $f(x) > 0 \Leftrightarrow x > 0$;
  - $f(x) < 0 \Leftrightarrow x < 0$.

### Punto b) — Limiti e asintoti

**Limiti agli estremi del dominio:**
$$\lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} \frac{x}{2(1+x^2)} = 0,$$
poiché il denominatore è un infinito di ordine superiore rispetto al numeratore. L'asse delle ascisse è quindi asintoto orizzontale per la funzione. Non esistono asintoti obliqui né verticali.

Riportiamo nel piano cartesiano le informazioni trovate.

*(grafico — vedi PDF p.107)*

**Derivata prima:**
$$f'(x) = \frac{1 \cdot 2(1+x^2) - x \cdot 4x}{[2(1+x^2)]^2} = \frac{2(1+x^2) - 4x^2}{4(1+x^2)^2} = \frac{1-x^2}{2(1+x^2)^2}.$$

$f'(x) > 0 \Leftrightarrow 1 - x^2 > 0 \Leftrightarrow -1 < x < 1$.

Rappresentiamo in tabella il segno di $f'$ e individuiamo gli intervalli di crescenza e di decrescenza della funzione $f$.

*(grafico — vedi PDF p.107)*

$x = -1$ è punto di minimo relativo per la funzione, con $f(-1) = -\dfrac{1}{4}$. Poiché la funzione rimane sempre negativa per $x < 0$, $x = -1$ è anche punto di minimo assoluto.

$x = 1$ è punto di massimo relativo per la funzione, con $f(1) = \dfrac{1}{4}$. Poiché la funzione rimane sempre positiva per $x > 0$, $x = 1$ è anche punto di massimo assoluto.

**Derivata seconda:**

Calcoliamo $f''(x)$ derivando $f'(x) = \dfrac{1-x^2}{2(1+x^2)^2}$:
$$f''(x) = \frac{-2x \cdot 2(1+x^2)^2 - (1-x^2) \cdot 2 \cdot 2(1+x^2) \cdot 2x}{4(1+x^2)^4}$$
$$= \frac{-4x(1+x^2) - 4x(1-x^2)}{4(1+x^2)^3} = \frac{-4x[(1+x^2)+(1-x^2)]}{4(1+x^2)^3} = \frac{-2x}{(1+x^2)^3}.$$

Semplificando, si ottiene la forma:
$$f''(x) = \frac{2x(x^2-3)}{2(1+x^2)^3}.$$

$f''(x) > 0 \Leftrightarrow x(x^2-3) > 0$.

Rappresentiamo in tabella il segno di $f''$ e individuiamo gli intervalli con concavità verso l'alto e quelli con concavità verso il basso della funzione $f$.

*(grafico — vedi PDF p.108)*

La funzione presenta tre punti di flesso:
- $x = -\sqrt{3}$, con $f(-\sqrt{3}) = -\dfrac{\sqrt{3}}{8}$; $\;F_1 = \left(-\sqrt{3};\,-\dfrac{\sqrt{3}}{8}\right)$;
- $x = 0$, con $f(0) = 0$; $\;O = (0;\,0)$;
- $x = \sqrt{3}$, con $f(\sqrt{3}) = \dfrac{\sqrt{3}}{8}$; $\;F_2 = \left(\sqrt{3};\,\dfrac{\sqrt{3}}{8}\right)$.

I tre punti di flesso sono allineati, appartenendo tutti alla retta di equazione $y = \dfrac{1}{8}x$.

Rappresentiamo il grafico approssimato della funzione.

*(grafico — vedi PDF p.108)*

### Punto b) — Valor medio

La funzione è continua in $\mathbb{R}$ e quindi è integrabile in ogni intervallo limitato e chiuso. In generale, il valor medio di una funzione $g(x)$ continua in un intervallo $[a;\,b]$ è per definizione:
$$\overline{g(x)} = \frac{1}{b-a}\int_{a}^{b} g(x)\,dx.$$

Applichiamo dunque la definizione di valor medio alla funzione $f(x)$ del problema, relativamente all'intervallo $[0;\,h]$:
$$\overline{f(x)} = \frac{1}{h}\int_{0}^{h} \frac{x}{2(1+x^2)}\,dx.$$

Determiniamo innanzi tutto una primitiva $F(x)$ di $f(x)$:
$$F(x) = \int \frac{x}{2(1+x^2)}\,dx = \frac{1}{4}\int \frac{2x}{1+x^2}\,dx = \frac{1}{4}\ln(1+x^2) + c.$$

Troviamo quindi il valor medio:
$$\overline{f(x)} = \frac{1}{h}\left[\frac{1}{4}\ln(1+x^2)\right]_{0}^{h} = \frac{\ln(1+h^2)}{4h}.$$

Il limite:
$$\lim_{h \to +\infty} \frac{\ln(1+h^2)}{4h}$$
si presenta nella forma indeterminata $\dfrac{\infty}{\infty}$. Risolviamolo applicando il teorema di De L'Hospital:
$$\lim_{h \to +\infty} \frac{\ln(1+h^2)}{4h} = \lim_{h \to +\infty} \frac{\dfrac{2h}{1+h^2}}{4} = \lim_{h \to +\infty} \frac{2h}{4(1+h^2)} = 0.$$

Quindi:
$$\lim_{h \to +\infty} \frac{\ln(1+h^2)}{4h} = 0.$$

### Punto c) — Fascio di rette

Le intersezioni delle rette del fascio $y = mx$ con il grafico $\gamma$ sono date dalle soluzioni del seguente sistema:
$$\begin{cases} y = mx \\ y = \dfrac{x}{2(1+x^2)} \end{cases} \implies mx = \frac{x}{2(1+x^2)}.$$

Vediamo che, per ogni $m \in \mathbb{R}$, il sistema ammette come soluzione $(0;\,0)$.

In particolare, per $m = 0$ la retta del fascio diventa $y = 0$, l'asse delle ascisse, che interseca il grafico solamente nell'origine.

Determiniamo le eventuali altre soluzioni. Posto $m \ne 0$ e $x \ne 0$, riduciamo la seconda equazione:
$$m = \frac{1}{2(1+x^2)} \implies 2m(1+x^2) = 1 \implies 2mx^2 + 2m - 1 = 0.$$

Abbiamo ottenuto un'equazione di secondo grado pura in $x$, che ha soluzioni reali soltanto se il coefficiente di $x^2$ e il termine noto sono discordi:
$$2m(2m-1) < 0.$$

Dal grafico dei segni stabiliamo che le rette del fascio intersecano $\gamma$ in punti diversi dall'origine per:
$$0 < m < \frac{1}{2}.$$

In corrispondenza di tali valori di $m$, otteniamo i punti di intersezione di coordinate:
$$x = \pm\sqrt{\frac{1-2m}{2m}}, \qquad y = \pm m\sqrt{\frac{1-2m}{2m}};$$
$$Q_{1,2} = \left(\pm\sqrt{\frac{1-2m}{2m}};\;\pm m\sqrt{\frac{1-2m}{2m}}\right).$$

*(grafico — vedi PDF p.110)*

La regione $\Sigma$ è delimitata dal grafico $\gamma$, dall'asse delle ascisse e dalla retta $x = \sqrt{\dfrac{1-2m}{2m}}$.

La sua area è data dall'integrale definito:
$$S_\Sigma = \int_{0}^{\sqrt{\frac{1-2m}{2m}}} \frac{x}{2(1+x^2)}\,dx = \left[\frac{1}{4}\ln(1+x^2)\right]_{0}^{\sqrt{\frac{1-2m}{2m}}}$$
$$= \frac{1}{4}\ln\!\left(1+\frac{1-2m}{2m}\right) = \frac{1}{4}\ln\!\left(\frac{1}{2m}\right) = -\frac{\ln(2m)}{4}.$$

### Punto d) — Parabola e area

Determiniamo l'equazione della parabola $p$ passante per l'origine e avente vertice di coordinate $V = \left(1;\,-\dfrac{1}{4}\right)$. Se $y = ax^2 + bx + c$ è l'equazione della parabola generica, allora:

- $O(0;\,0) \in p \implies c = 0$, quindi $y = ax^2 + bx$;
- $V\!\left(1;\,-\dfrac{1}{4}\right)$ è il vertice:
$$\begin{cases} -\dfrac{b}{2a} = 1 \\ a(1)^2 + b(1) = -\dfrac{1}{4} \end{cases} \implies \begin{cases} b = -2a \\ a - 2a = -\dfrac{1}{4} \end{cases} \implies \begin{cases} a = \dfrac{1}{4} \\ b = -\dfrac{1}{2} \end{cases}$$

$$y = \frac{1}{4}x^2 - \frac{1}{2}x.$$

La parabola interseca l'asse $x$ nei punti $O(0;\,0)$ e $A(2;\,0)$.

L'area del segmento parabolico $OVA$ è data da:
$$S_{OVA} = \frac{2}{3}\cdot OA \cdot HV = \frac{2}{3}\cdot 2 \cdot \frac{1}{4} = \frac{1}{3}.$$

*(grafico — vedi PDF p.110)*

L'area di $\Sigma$ è uguale a quella del segmento parabolico se:
$$-\frac{\ln(2m)}{4} = \frac{1}{3} \implies \ln(2m) = -\frac{4}{3} \implies 2m = e^{-4/3} \implies m = \frac{1}{2}e^{-4/3}.$$

### Punto e) — Volume del solido

Rappresentiamo la base $L$ e una generica sezione del solido, ricordando che l'ascissa del punto di flesso della funzione nel primo quadrante è $x_F = \sqrt{3}$.

*(grafico — vedi PDF p.111)*

Possiamo pensare il volume del solido come somma di infiniti strati di spessore infinitesimo $dx$ e con base rettangolare di dimensioni $y = f(x)$ e $h = x$:
$$dV = x \cdot f(x)\,dx = \frac{x^2}{2(1+x^2)}\,dx.$$

Il volume del solido è quindi dato da:
$$V = \int_{0}^{\sqrt{3}} \frac{x^2}{2(1+x^2)}\,dx = \frac{1}{2}\int_{0}^{\sqrt{3}}\left(1 - \frac{1}{1+x^2}\right)dx$$
$$= \frac{1}{2}\left[x - \arctan x\right]_{0}^{\sqrt{3}} = \frac{1}{2}\left(\sqrt{3} - \frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} - \frac{\pi}{6}.$$

---

*Fonte:* [📄 PDF p.106](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
