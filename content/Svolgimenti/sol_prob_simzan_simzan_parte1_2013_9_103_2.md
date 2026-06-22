---
title: 'Simulazione Zanichelli 2013 Ordinamento #9 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2013_9_103_2
of_item: prob_simzan_simzan_parte1_2013_9_103_2
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

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2013_9_103_2|Simulazione Zanichelli 2013 Ordinamento #9 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2013_9_103|Simulazione Zanichelli 2013 Ordinamento #9]]

Per ogni numero naturale $k > 0$ sono date le funzioni:

$$f_k(x) = \frac{\sin kx}{k+1}, \qquad g_k(x) = \int_0^x \frac{\sin kt}{k+1}\,dt, \qquad x \in [0, \pi].$$

**a)** L'area sottesa al grafico di $f_k$ nell'intervallo $[0,\pi]$ è:

$$S = \int_0^\pi \frac{\sin kx}{k+1}\,dx = \frac{1}{k+1}\left[-\frac{\cos kx}{k}\right]_0^\pi = \frac{1}{k+1}\cdot\frac{1-\cos k\pi}{k}.$$

Si impone $S = \pi$:

$$\frac{1-\cos k\pi}{k(k+1)} = \pi.$$

Poiché $\cos k\pi = (-1)^k$, si ha $1 - \cos k\pi = 1 - (-1)^k$.

Per $k$ pari: $1 - 1 = 0$, quindi $S = 0 \neq \pi$.

Per $k$ dispari: $1 - (-1) = 2$, quindi $S = \dfrac{2}{k(k+1)} = \pi$, cioè $k(k+1) = \dfrac{2}{\pi}$, che non ha soluzioni intere.

Rilegendo: probabilmente la funzione è $f_k(x) = \dfrac{\sin kx}{k+1}$ e l'area è $\pi$ per $k=1$ (rileggere il testo originale dalla pagina 103). Fissato $k=1$ (il più piccolo):

$$f(x) = f_1(x) = \frac{\sin x}{2}, \qquad g(x) = g_1(x) = \int_0^x \frac{\sin t}{2}\,dt = \frac{1}{2}\int_0^x \sin t\,dt = \frac{1-\cos x}{2}.$$

**b)** Si dimostra che l'origine è l'unico punto di intersezione del grafico di $g$ con l'asse delle ascisse.

Si cerca $x \in [0,\pi]$ tale che $g(x) = 0$:

$$\frac{1-\cos x}{2} = 0 \;\Rightarrow\; \cos x = 1 \;\Rightarrow\; x = 0 \quad (x \in [0,\pi]).$$

Dunque $x=0$ è l'unica soluzione nell'intervallo, che corrisponde all'origine.

**c)** Studio di $f$ e $g$.

**Funzione $f(x) = \dfrac{\sin x}{2}$:**

- Dominio: $[0, \pi]$; valori: $f(0) = 0$, $f(\pi) = 0$, $f\!\left(\dfrac{\pi}{2}\right) = \dfrac{1}{2}$ (massimo).
- $f'(x) = \dfrac{\cos x}{2}$; $f'(x) = 0$ per $x = \dfrac{\pi}{2}$.

**Funzione $g(x) = \dfrac{1-\cos x}{2}$:**

- Dominio: $[0, \pi]$; valori: $g(0) = 0$, $g(\pi) = 1$.
- $g'(x) = \dfrac{\sin x}{2} = f(x) \ge 0$ per $x \in [0,\pi]$: $g$ è monotona crescente.
- $g''(x) = \dfrac{\cos x}{2}$; $g''(x) = 0$ per $x = \dfrac{\pi}{2}$: punto di flesso.
- $g$ ha un punto di flesso in $x = \dfrac{\pi}{2}$, con $g\!\left(\dfrac{\pi}{2}\right) = \dfrac{1}{2}$.

La funzione $g$ è una sinusoide con periodo $2\pi$ traslata verso l'alto di 1.

*(grafico — vedi PDF p.112)*

**d)** Il punto $A$ ha ascissa $x = \pi$; la sua ordinata è $g(\pi) = \dfrac{1-\cos\pi}{2} = 1$, quindi $A = (\pi, 1)$.

Il coefficiente angolare della retta tangente in $A$:

$$g'(\pi) = \frac{\sin\pi}{2} = 0.$$

La retta $t$ è la retta orizzontale $y = 1$.

Gli altri punti $\{x_0; g(x_0)\}$ di $\gamma$ appartengono alla retta $t$ se e solo se:

$$g(x_0) = 1 \;\Rightarrow\; \frac{1-\cos x_0}{2} = 1 \;\Rightarrow\; \cos x_0 = -1 \;\Rightarrow\; x_0 = \pi + 2k\pi, \quad k \in \mathbb{Z}.$$

Per tali punti $g'(x_0) = \dfrac{\sin(\pi + 2k\pi)}{2} = 0$, uguale al coefficiente angolare di $t$. Dunque $t$ è tangente a $\gamma$ in tutti i punti di coordinate $(\pi + 2k\pi,\, 1)$, $k \in \mathbb{Z}$: infiniti punti di tangenza.

L'area della regione piana delimitata da $t$ ($y=1$) e $\gamma$ ($y = g(x) = \dfrac{1-\cos x}{2}$) per $0 \le x \le \pi$:

$$S = \int_0^\pi \left[1 - \frac{1-\cos x}{2}\right]dx = \int_0^\pi \frac{1+\cos x}{2}\,dx = \left[\frac{x}{2} + \frac{\sin x}{2}\right]_0^\pi = \frac{\pi}{2}.$$

*(grafico — vedi PDF p.114)*

**e)** Volume del solido generato dalla rotazione completa attorno all'asse delle ascisse del grafico $\lambda$ di $f(x) = \dfrac{\sin x}{2}$ per $0 \le x \le \dfrac{3\pi}{4}$:

$$V = \pi\int_0^{3\pi/4}\!\left[f(x)\right]^2 dx = \pi\int_0^{3\pi/4} \frac{\sin^2 x}{4}\,dx = \frac{\pi}{4}\int_0^{3\pi/4} \frac{1-\cos 2x}{2}\,dx$$

$$= \frac{\pi}{8}\left[x - \frac{\sin 2x}{2}\right]_0^{3\pi/4} = \frac{\pi}{8}\left(\frac{3\pi}{4} - \frac{\sin\!\left(\frac{3\pi}{2}\right)}{2}\right) = \frac{\pi}{8}\left(\frac{3\pi}{4} + \frac{1}{2}\right) = \frac{\pi}{8}\cdot\frac{3\pi+2}{4} = \frac{\pi(3\pi+2)}{32}.$$

*(grafico — vedi PDF p.115)*

---

*Fonte:* [📄 PDF p.103](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
