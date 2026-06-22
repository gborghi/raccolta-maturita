---
title: 'Simulazione Zanichelli 2013 Sperimentale #8 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2013_8_84_1
of_item: prob_simzan_simzan_parte1_2013_8_84_1
prova_id: prova_simzan_simzan_parte1_2013_8_84
anno: '2013'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2013_8_84_1|Simulazione Zanichelli 2013 Sperimentale #8 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_8_84|Simulazione Zanichelli 2013 Sperimentale #8]]

**a)** Disegniamo la circonferenza mettendo in evidenza gli elementi indicati dal problema: il diametro $AC$, di lunghezza variabile, la corda $AB$ (con $AB = 1$) e la corda $BC$ (con $BC = x$, $x > 0$, $x < AC$).

Poiché il diametro non può avere lunghezza minore della corda, deve essere:
$$AC \ge AB \quad \Rightarrow \quad AC \ge 1.$$

Il triangolo $ABC$ è rettangolo in $B$, perché inscritto in una semicirconferenza, quindi:
$$AC^2 = AB^2 + BC^2 = 1 + x^2.$$

La funzione $f(x)$ è pertanto data da:
$$f(x) = \frac{BC}{AC} = \frac{x}{\sqrt{1+x^2}} \quad \Rightarrow \quad f(x) = \frac{x}{\sqrt{1+x^2}}.$$

*(grafico — vedi PDF p.84)*

Studiamo la funzione senza tener conto della limitazione geometrica.

- **Dominio:** $\mathbb{R}$, in quanto il denominatore non si annulla per alcun valore di $x$.
- Poiché $f(-x) = \dfrac{-x}{\sqrt{1+(-x)^2}} = -f(x)$, la funzione è **dispari**, quindi simmetrica rispetto all'origine.
- Il grafico interseca gli assi cartesiani soltanto nell'origine $O(0;0)$, poiché $f(x)=0 \Leftrightarrow x=0$.
- **Segno della funzione:**
$$f(x) > 0 \Leftrightarrow x > 0; \qquad f(x) < 0 \Leftrightarrow x < 0.$$

- **Limiti agli estremi del dominio:**
$$\lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} \frac{x}{\sqrt{1+x^2}} = 0,$$
poiché il denominatore è un infinito di ordine superiore rispetto al numeratore. L'asse delle ascisse è asintoto orizzontale; non esistono asintoti obliqui né verticali.

*(grafico — vedi PDF p.85)*

- **Derivata prima:**
$$f'(x) = \frac{\sqrt{1+x^2} - x \cdot \dfrac{x}{\sqrt{1+x^2}}}{1+x^2} = \frac{1+x^2 - x^2}{(1+x^2)^{3/2}} = \frac{1}{(1+x^2)^{3/2}}.$$

Poiché $f'(x) > 0$ per ogni $x \in \mathbb{R}$, la funzione è **strettamente crescente** su tutto $\mathbb{R}$ e non presenta né massimi né minimi locali.

*(Nota: il testo Zanichelli considera invece $f(x) = \dfrac{x}{2(1+x^2)}$ — si veda il punto seguente per la corretta lettura del problema. In realtà il problema originale pone $f(x) = \dfrac{x}{2(1+x^2)}$; si adotta questa versione per coerenza con lo svolgimento nelle pagine successive.)*

Riformuliamo con $f(x) = \dfrac{x}{2(1+x^2)}$:

- **Derivata prima:**
$$f'(x) = \frac{2(1+x^2) - x \cdot 4x}{4(1+x^2)^2} = \frac{1-x^2}{2(1+x^2)^2}.$$
$$f'(x) > 0 \Leftrightarrow 1-x^2 > 0 \Leftrightarrow -1 < x < 1.$$

*(grafico segno di $f'$ — vedi PDF p.85)*

$x = -1$ è punto di **minimo relativo** (e assoluto, con $f(-1) = -\tfrac{1}{4}$); $x = 1$ è punto di **massimo relativo** (e assoluto, con $f(1) = \tfrac{1}{4}$).

- **Derivata seconda:**
$$f''(x) = \frac{-2x \cdot 2(1+x^2)^2 - (1-x^2)\cdot 2 \cdot 2(1+x^2)\cdot 2x}{4(1+x^2)^4}$$
$$= \frac{-2x\bigl[2(1+x^2) + 4(1-x^2)\bigr] \cdot (1+x^2)}{4(1+x^2)^4} = \frac{x(x^2-3)}{(1+x^2)^3}.$$
$$f''(x) > 0 \Leftrightarrow x(x^2-3) > 0.$$

*(grafico segno di $f''$ — vedi PDF p.86)*

La funzione presenta **tre punti di flesso**:
- $x = -\sqrt{3}$, con $f(-\sqrt{3}) = -\dfrac{\sqrt{3}}{8}$ $\;\Rightarrow\; F_1\!\left(-\sqrt{3};\,-\dfrac{\sqrt{3}}{8}\right)$;
- $x = 0$, con $f(0) = 0$ $\;\Rightarrow\; O(0;0)$;
- $x = \sqrt{3}$, con $f(\sqrt{3}) = \dfrac{\sqrt{3}}{8}$ $\;\Rightarrow\; F_2\!\left(\sqrt{3};\,\dfrac{\sqrt{3}}{8}\right)$.

I tre punti di flesso sono allineati, appartenendo tutti alla retta di equazione $y = \dfrac{1}{8}x$.

*(grafico approssimato di $f$ — vedi PDF p.86)*

**b)** La funzione è continua in $\mathbb{R}$ e quindi è integrabile in ogni intervallo limitato e chiuso. Il valor medio di $f(x)$ continua in $[a;b]$ è:
$$\overline{g}(x) = \frac{1}{b-a}\int_a^b g(x)\,dx.$$

Applichiamo la definizione di valor medio a $f(x)$ sull'intervallo $[0;h]$:
$$\overline{f}(x) = \frac{1}{h}\int_0^h \frac{x}{2(1+x^2)}\,dx.$$

Determiniamo una primitiva $F(x)$ di $f(x)$:
$$F(x) = \int \frac{x}{2(1+x^2)}\,dx = \frac{1}{2}\int \frac{x}{1+x^2}\,dx = \frac{1}{4}\ln(1+x^2) + c.$$

Il valor medio è quindi:
$$\overline{f}(x) = \frac{1}{h}\Bigl[F(x)\Bigr]_0^h = \frac{1}{h}\cdot\frac{1}{4}\ln(1+h^2) = \frac{\ln(1+h^2)}{4h}.$$

Il limite:
$$\lim_{h\to+\infty}\frac{\ln(1+h^2)}{4h}$$
si presenta nella forma indeterminata $\dfrac{\infty}{\infty}$. Applicando il teorema di De L'Hospital:
$$\lim_{h\to+\infty}\frac{\ln(1+h^2)}{4h} = \lim_{h\to+\infty}\frac{\dfrac{2h}{1+h^2}}{4} = \lim_{h\to+\infty}\frac{2h}{4(1+h^2)} = 0.$$

Quindi $\displaystyle\lim_{h\to+\infty}\overline{f}(x) = 0$.

**c)** Le intersezioni delle rette del fascio $y = mx$ con il grafico $\gamma$ sono date dalle soluzioni del sistema:
$$\begin{cases} y = mx \\ y = \dfrac{x}{2(1+x^2)} \end{cases} \quad \Rightarrow \quad mx = \frac{x}{2(1+x^2)}.$$

Per ogni $m \in \mathbb{R}$, il sistema ammette la soluzione $(0;0)$. In particolare, per $m=0$ la retta $y=0$ interseca $\gamma$ solo nell'origine.

Per $m \neq 0$ e $x \neq 0$:
$$m = \frac{1}{2(1+x^2)} \quad \Rightarrow \quad 2m(1+x^2) = 1 \quad \Rightarrow \quad 2mx^2 + 2m - 1 = 0.$$

Questa equazione di secondo grado pura ha soluzioni reali soltanto se il coefficiente di $x^2$ e il termine noto sono discordi:
$$2m(2m-1) < 0 \quad \Rightarrow \quad 0 < m < \frac{1}{2}.$$

*(grafico dei segni — vedi PDF p.87)*

In corrispondenza di tali valori di $m$, i punti di intersezione hanno coordinate:
$$x = \pm\sqrt{\frac{1-2m}{2m}}, \qquad y = \pm m\sqrt{\frac{1-2m}{2m}},$$
$$Q_{\pm} = \left(\pm\sqrt{\frac{1-2m}{2m}};\; \pm m\sqrt{\frac{1-2m}{2m}}\right).$$

La regione $\Sigma$ è delimitata dal grafico $\gamma$, dall'asse delle ascisse e dalla retta $x = \sqrt{\dfrac{1-2m}{2m}}$.

*(grafico — vedi PDF p.88)*

La sua area è data dall'integrale definito:
$$S_\Sigma = \int_0^{\sqrt{(1-2m)/(2m)}} \frac{x}{2(1+x^2)}\,dx = \Bigl[\frac{1}{4}\ln(1+x^2)\Bigr]_0^{\sqrt{(1-2m)/(2m)}}$$
$$= \frac{1}{4}\ln\!\left(1+\frac{1-2m}{2m}\right) = \frac{1}{4}\ln\!\left(\frac{1}{2m}\right) = -\frac{1}{4}\ln(2m).$$

**d)** Determiniamo l'equazione della parabola $p$ passante per l'origine e avente vertice $V\!\left(-1;\,\tfrac{1}{4}\right)$.

Se $y = ax^2 + bx + c$ è l'equazione della parabola generica, allora:
- $O(0;0) \in p \;\Rightarrow\; c = 0$, quindi $y = ax^2 + bx$;
- $V\!\left(-1;\,\tfrac{1}{4}\right)$ è il vertice $\;\Rightarrow\; -\dfrac{b}{2a} = -1 \;\Rightarrow\; b = 2a$; e $a(-1)^2 + b(-1) = \tfrac{1}{4} \;\Rightarrow\; a - 2a = \tfrac{1}{4} \;\Rightarrow\; a = -\tfrac{1}{4}$, $b = -\tfrac{1}{2}$.

$$p:\; y = -\frac{1}{4}x^2 - \frac{1}{2}x.$$

La parabola interseca l'asse $x$ in $O(0;0)$ e $A(-2;0)$.

L'area del segmento parabolico $OVA$ è:
$$S_{OVA} = \frac{2}{3}\cdot OA \cdot h_V = \frac{2}{3}\cdot 2\cdot\frac{1}{4} = \frac{1}{3}.$$

L'area di $\Sigma$ è uguale a quella del segmento parabolico se:
$$-\frac{1}{4}\ln(2m) = \frac{1}{3} \quad \Rightarrow \quad \ln(2m) = -\frac{4}{3} \quad \Rightarrow \quad 2m = e^{-4/3} \quad \Rightarrow \quad m = \frac{1}{2}e^{-4/3}.$$

**e)** Rappresentiamo la base $L$ e una generica sezione del solido, ricordando che l'ascissa del punto di flesso della funzione nel primo quadrante è $x_F = \sqrt{3}$.

*(grafico — vedi PDF p.89)*

Possiamo pensare il volume del solido come somma di infiniti strati di spessore infinitesimo $dx$ e con base rettangolare di dimensioni $y = f(x)$ e altezza $h = x$:
$$dV = x \cdot f(x)\,dx = x \cdot \frac{x}{2(1+x^2)}\,dx = \frac{x^2}{2(1+x^2)}\,dx.$$

Il volume del solido è quindi:
$$V = \int_0^{\sqrt{3}} \frac{x^2}{2(1+x^2)}\,dx = \frac{1}{2}\int_0^{\sqrt{3}}\left(1 - \frac{1}{1+x^2}\right)dx$$
$$= \frac{1}{2}\Bigl[x - \arctan x\Bigr]_0^{\sqrt{3}} = \frac{1}{2}\left(\sqrt{3} - \frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} - \frac{\pi}{6}.$$

---

*Fonte:* [📄 PDF p.84](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
