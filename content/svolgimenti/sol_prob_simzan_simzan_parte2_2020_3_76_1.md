---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Problema 1 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2020_3_76_1
of_item: prob_simzan_simzan_parte2_2020_3_76_1
prova_id: prova_simzan_simzan_parte2_2020_3_76
anno: '2020'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2020
---

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2020_3_76_1|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica) — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica)]]

A cura di Massimo Bergamini, Graziella Barozzi e Lorenzo Meneghini.

Si considera la famiglia di funzioni reali di variabile reale

$$f_k(x) = \frac{1}{x^2 + k}$$

per ogni $k \in \mathbb{R}^+$.

### Punto 1 — Flessi sulla curva $y = \frac{1}{4x^2}$ e tangenza alla circonferenza $\alpha_k$

**Flessi di $f_k$.**

Per ogni $k \in \mathbb{R}^+$, la funzione $f_k$ è continua e derivabile infinite volte nel suo dominio $\mathbb{R}$, in quanto il denominatore non si annulla mai. Inoltre, la funzione è pari, poiché:

$$f_k(-x) = \frac{1}{(-x)^2 + k} = \frac{1}{x^2 + k} = f_k(x).$$

Al variare di $k \in \mathbb{R}^+$ calcoliamo la derivata prima e la derivata seconda:

$$f_k'(x) = -(x^2+k)^{-2} \cdot 2x = -\frac{2x}{(x^2+k)^2},$$

$$f_k''(x) = \frac{-2(x^2+k)^2 + 2x \cdot 2(x^2+k) \cdot 2x}{(x^2+k)^4} = \frac{-2(x^2+k) + 8x^2}{(x^2+k)^3} = \frac{6x^2 - 2k}{(x^2+k)^3}.$$

Studiamo il segno della derivata seconda: $f_k''(x) > 0$ per $x < -\sqrt{\frac{k}{3}}$, $f_k''(x) < 0$ per $-\sqrt{\frac{k}{3}} < x < \sqrt{\frac{k}{3}}$, $f_k''(x) > 0$ per $x > \sqrt{\frac{k}{3}}$.

La funzione $f_k$ ammette due punti di flesso con ascisse $x = \pm\sqrt{\frac{k}{3}}$. L'ordinata dei punti di flesso è:

$$y = f_k\!\left(\sqrt{\frac{k}{3}}\right) = \frac{1}{\frac{k}{3} + k} = \frac{1}{\frac{4k}{3}} = \frac{3}{4k}.$$

Verifichiamo che i due punti di flesso appartengono alla curva di equazione $y = \dfrac{1}{4x^2}$: sostituendo $x^2 = \dfrac{k}{3}$, si ha $\dfrac{1}{4x^2} = \dfrac{1}{4 \cdot \frac{k}{3}} = \dfrac{3}{4k} = y$. ✓

**Tangenza di $\Gamma_k$ alla circonferenza $\alpha_k$.**

Al variare di $k \in \mathbb{R}^+$, la circonferenza $\alpha_k$ ha equazione $x^2 + y^2 - \dfrac{y}{k} = 0$, ovvero $x^2 + \left(y - \dfrac{1}{2k}\right)^2 = \dfrac{1}{4k^2}$. Il centro è $\left(0;\,\dfrac{1}{2k}\right)$ e il raggio è $\dfrac{1}{2k}$.

La circonferenza passa per il punto di coordinate $\left(0;\,\dfrac{1}{k}\right)$, che è anche il massimo assoluto della funzione $f_k$. Poiché il punto $\left(0;\,\dfrac{1}{k}\right)$ è un massimo relativo per la funzione $f_k$, il grafico $\Gamma_k$ della funzione $f_k$ è tangente alla circonferenza $\alpha_k$ nel punto $\left(0;\,\dfrac{1}{k}\right)$.

**Numero di intersezioni tra $\Gamma_k$ e $\alpha_k$ al variare di $k$.**

Per studiare le intersezioni tra $\Gamma_k$ e $\alpha_k$, consideriamo il sistema:

$$\begin{cases} y = \dfrac{1}{x^2+k} \\[6pt] x^2 + y^2 - \dfrac{y}{k} = 0 \end{cases}$$

Ricaviamo l'equazione dall'alto sostituendo $y = \dfrac{1}{x^2+k}$ nella seconda:

$$x^2 + \frac{1}{(x^2+k)^2} - \frac{1}{k(x^2+k)} = 0 \implies x^2\bigl[k(x^2+k)^2 + 1\bigr] = 0.$$

Oltre alla soluzione $x = 0$, corrispondente al punto di tangenza, l'equazione può ammettere ulteriori soluzioni. Si esistono valori di $k$ tali che $k(x^2+k)^2 = \dfrac{1}{x^2} - 1$, cioè tale che $k(x^2+k)^2 + 1 = 0$ ha soluzioni; analisi dei casi:

Elevando al quadrato e riorganizzando, si ottiene l'equazione $x^2 = -k + \dfrac{1}{\sqrt{k}}$, che ammette soluzioni reali se e solo se $\dfrac{1}{\sqrt{k}} \ge k$, cioè $k^{3/2} \le 1$, ovvero $k \le 1$.

Quindi:
- per $k > 1$: ammettono quattro intersezioni, tutte coincidenti con il punto di tangenza;
- per $k = 1$: ammettono quattro intersezioni, con due coincidenti nel punto di tangenza;
- per $0 < k < 1$: ammettono quattro intersezioni, di cui due coincidenti con il punto di tangenza.

*(grafico — vedi PDF p.94)*

### Punto 2 — Studio di $f_1(x)$, grafico e valore di $b$

Calcoliamo i limiti agli estremi del dominio di $f_1(x) = \dfrac{1}{x^2+1}$:

$$\lim_{x \to +\infty} \frac{1}{x^2+1} = 0.$$

La funzione $f_1$ ammette l'asintoto orizzontale $y = 0$ per $x \to \pm\infty$.

La funzione è pari, continua e derivabile. Dal segno di $f_1'(x) = \dfrac{-2x}{(x^2+1)^2}$: $f_1'(x) > 0$ per $x < 0$, $f_1'(x) < 0$ per $x > 0$. Quindi $f_1$ ha un massimo relativo (e assoluto) nel punto $(0;\,1)$.

I due flessi si trovano in $x = \pm\sqrt{\dfrac{1}{3}} = \pm\dfrac{\sqrt{3}}{3}$.

La funzione è crescente per $x < -\dfrac{\sqrt{3}}{3}$, concava verso l'alto; per $-\dfrac{\sqrt{3}}{3} < x < \dfrac{\sqrt{3}}{3}$ è concava verso il basso; per $x > \dfrac{\sqrt{3}}{3}$ è concava verso l'alto.

*(grafico — vedi PDF p.95)*

Osserviamo che la circonferenza $\alpha_1$ ha equazione $x^2 + y^2 - y = 0$, ovvero $x^2 + \left(y - \dfrac{1}{2}\right)^2 = \dfrac{1}{4}$, con centro $\left(0;\,\dfrac{1}{2}\right)$ e raggio $\dfrac{1}{2}$. Il cerchio $\mathcal{C}_1$ di equazione $x^2 + y^2 - y \le 0$ ha area $\pi \cdot \left(\dfrac{1}{2}\right)^2 = \dfrac{\pi}{4}$.

L'area sottesa al grafico di $f_1(x)$ nell'intervallo $[0;\,b]$ deve essere uguale all'area del cerchio $\mathcal{C}_1$:

$$\int_0^b \frac{1}{x^2+1}\,dx = \frac{\pi}{4}.$$

Poiché $\displaystyle\int_0^b \frac{1}{x^2+1}\,dx = \bigl[\arctan x\bigr]_0^b = \arctan b$, si ha:

$$\arctan b = \frac{\pi}{4} \implies b = 1.$$

### Punto 3 — Densità superficiale, potenziale $V(x)$ e unità di $h$

**Densità superficiale di carica.**

Il conduttore sferico ha raggio $r = 1{,}00\ \text{cm} = 1{,}00 \cdot 10^{-2}\ \text{m}$. Il punto $B(1{,}73;\,0)$ dista dal centro $A(0;\,1{,}00)$:

$$R = \overline{AB} = \sqrt{1{,}73^2 + 1{,}00^2} = \sqrt{2{,}9929 + 1{,}00} \approx 2{,}00\ \text{m}.$$

All'esterno della sfera carica il campo elettrico è uguale a quello che sarebbe generato da una carica puntiforme $Q$ posta in $A$. Quindi il campo elettrico nel punto $B$ è:

$$E = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{R^2} \implies Q = 4\pi\varepsilon_0 R^2 E.$$

$$Q = 4\pi \cdot 8{,}854 \cdot 10^{-12} \cdot (1{,}73^2 + 1{,}00^2) \cdot 2{,}00 \cdot 10^4 \approx 4{,}00 \cdot 10^{-8}\ \text{C}.$$

La densità superficiale di carica è:

$$\sigma = \frac{Q}{4\pi r^2} = \frac{4{,}00 \cdot 10^{-8}}{4\pi \cdot (1{,}00 \cdot 10^{-2})^2} = \frac{4{,}00 \cdot 10^{-8}}{4\pi \cdot 10^{-4}} \approx 7{,}07 \cdot 10^{-5}\ \text{C/m}^2.$$

**Potenziale elettrico $V(x)$ in $C(x;\,0)$.**

Il potenziale elettrico generato da $Q$ in un punto $C(x;\,0)$ dell'asse delle ascisse è:

$$V_C = V(x) = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\overline{AC}} = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\sqrt{x^2+1}}.$$

Poniamo $h = \dfrac{Q}{4\pi\varepsilon_0}$, possiamo scrivere:

$$V(x) = h \cdot \frac{1}{\sqrt{x^2+1}} = h \cdot \sqrt{f_1(x)}.$$

Le unità di misura di $h$ si determinano con l'analisi dimensionale:

$$[h] = \frac{[V]}{[f_1]} = \frac{\text{V}}{\text{m}^{-1}} \cdot \frac{1}{\text{C}^{-1}} \implies [h] = \frac{\text{C}}{4\pi\varepsilon_0} \cdot \frac{1}{\text{m}} \cdot \text{m}^2 = \text{N} \cdot \text{m}^2/\text{C} = \text{V} \cdot \text{m}.$$

Per tracciare l'andamento qualitativo della funzione $V(x)$, osserviamo che:
- $V(x)$ ha dominio $\mathbb{R}$ ed è sempre positiva, poiché prodotto di due fattori positivi;
- $V(x) \to 0$ per $x \to \pm\infty$, quindi $V(x)$ ammette l'asse delle ascisse come asintoto orizzontale;
- $V'(x) = h \cdot \frac{d}{dx}\sqrt{f_1(x)} = 0$ in $x = 0$, quindi $V(x)$ ha un massimo relativo nel punto di ascissa $x = 0$; il massimo è $V(0) = h$.

*(grafico — vedi PDF p.96)*

### Punto 4 — Velocità del carrellino in $D$

Calcoliamo il potenziale nei punti $B$ e $D$.

$$V_B = V(1{,}73) = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\overline{AB}} = E \cdot R = 2{,}00 \cdot 10^4 \cdot 2{,}00 = 4{,}00 \cdot 10^4\ \text{V},$$

$$V_D = V(3{,}87) = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{\overline{AD}} = \frac{4\pi\varepsilon_0 R^2 E}{\overline{AD}} = \frac{2{,}00 \cdot 10^{-8} \cdot 10}{4\pi\varepsilon_0 \cdot \overline{AD}} \approx 2{,}00 \cdot 10^4\ \text{V},$$

dove $\overline{AD} = \sqrt{3{,}87^2 + 1{,}00^2} \approx \sqrt{14{,}97 + 1} = 4{,}00\ \text{m}$.

$$V_D = \frac{Q}{4\pi\varepsilon_0 \cdot 4{,}00} = \frac{4{,}00 \cdot 10^{-8}}{4\pi \cdot 8{,}854 \cdot 10^{-12} \cdot 4{,}00} \approx 2{,}00 \cdot 10^4\ \text{V}.$$

Il principio di conservazione dell'energia meccanica: il carrellino con carica $q = 1{,}00 \cdot 10^{-6}\ \text{C}$ e massa $m = 50\ \text{g} = 50 \cdot 10^{-3}\ \text{kg}$, inizialmente fermo in $B$:

$$qV_B = \frac{1}{2}mv_D^2 + qV_D \implies v_D = \sqrt{\frac{2q(V_B - V_D)}{m}}.$$

$$v_D = \sqrt{\frac{2 \cdot 1{,}00 \cdot 10^{-6} \cdot 2{,}00 \cdot 10^4}{50 \cdot 10^{-3}}} \approx 0{,}89\ \text{m/s}.$$

La velocità del carrellino nel punto $D$ è $v_D \approx 0{,}89\ \text{m/s}$.

Se si raddoppia la massa del carrellino, la sua velocità in $D$ non dimezza. Infatti:

$$v'_D = \sqrt{\frac{2q(V_B-V_D)}{2m}} = \sqrt{\frac{1}{2} \cdot \frac{2q(V_B-V_D)}{m}} = \frac{1}{\sqrt{2}}\, v_D \neq \frac{1}{2}\, v_D.$$

---

*Fonte:* [📄 PDF p.76](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
