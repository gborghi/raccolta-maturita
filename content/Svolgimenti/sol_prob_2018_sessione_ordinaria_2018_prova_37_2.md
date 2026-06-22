---
title: 2018 Sessione ordinaria — Prova (Sportiva) — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2018_sessione_ordinaria_2018_prova_37_2
of_item: prob_2018_sessione_ordinaria_2018_prova_37_2
prova_id: prova_2018_sessione_ordinaria_2018_prova_37
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Problema:** [[Problemi/prob_2018_sessione_ordinaria_2018_prova_37_2|2018 Sessione ordinaria — Prova (Sportiva) — Problema 2]] · **Prova:** [[Prove/2018_sessione_ordinaria_2018_prova_37|2018 Sessione ordinaria — Prova (Sportiva)]]

Siano $f : \mathbb{R} \to \mathbb{Z}$ e $g : \mathbb{R} \to [0,1)$ rispettivamente le funzioni parte intera e parte frazionaria, definite da:

$$f(x) = \lfloor x \rfloor = \max\{m \in \mathbb{Z} : m \leq x\}, \qquad g(x) = x - \lfloor x \rfloor.$$

Ad esempio: $f(4{,}79) = 3$, $g(4{,}79) = 0{,}79$.

---

**Punto 1.** Per definizione $f(x) \leq x < f(x)+1$, quindi $0 \leq x - f(x) < 1$, cioè:

$$0 \leq g(x) < 1 \quad \text{per ogni } x \in \mathbb{R}.$$

La funzione $f(x) = \lfloor x \rfloor$ è costante a tratti su $[n, n+1)$ con valore $n$, continua a destra e discontinua a sinistra in ogni intero (salto = $1$).

La funzione $g(x) = x - \lfloor x \rfloor$ è lineare (pendenza 1) su ogni $[n, n+1)$, con discontinuità in ogni intero (salto = $-1$: riparte da 0).

*(grafico — vedi PDF p.3)*

---

**Punto 2.** Periodicità di $g$: $g(x+1) = (x+1) - \lfloor x+1 \rfloor = x+1-\lfloor x\rfloor-1 = g(x)$. Quindi $g$ è periodica di periodo 1.

**Media di $g$ su $[0,n]$**, per $n \in \mathbb{N}$, $n \geq 1$:

$$\frac{1}{n}\int_0^n g(x)\,dx = \frac{1}{n}\cdot n\int_0^1 x\,dx = \int_0^1 x\,dx = \frac{1}{2}.$$

**Media di $g$ su $\left[0, n+\dfrac{1}{2}\right]$:**

$$\int_0^{n+1/2} g(x)\,dx = n\cdot\frac{1}{2} + \int_0^{1/2} x\,dx = \frac{n}{2} + \frac{1}{8}.$$

$$\bar{g} = \frac{\dfrac{n}{2}+\dfrac{1}{8}}{n+\dfrac{1}{2}} = \frac{4n+\dfrac{1}{2}}{4(2n+1)} = \frac{8n+1}{8(2n+1)}.$$

Per $n \to +\infty$:

$$\lim_{n\to+\infty}\bar{g} = \lim_{n\to+\infty}\frac{8n+1}{16n+8} = \frac{1}{2}.$$

---

**Punto 3.** Volume del solido di rotazione di $\dfrac{\pi}{6}$ radianti attorno all'asse $x$ della regione tra $f$ e $g$ su $\left[\dfrac{1}{2}, \dfrac{3}{2}\right]$.

Nell'intervallo $\left[\dfrac{1}{2},1\right)$: $f(x)=0$, $g(x)=x$. La regione è tra $y=0$ e $y=x$.

Nell'intervallo $\left[1,\dfrac{3}{2}\right]$: $f(x)=1$, $g(x)=x-1$. La regione è tra $y=x-1$ e $y=1$.

Per rotazione di angolo $\theta = \dfrac{\pi}{6}$ (formula generalizzata del disco/corona):

$$V = \frac{\theta}{2}\int_a^b\left[y_{\max}(x)^2 - y_{\min}(x)^2\right]dx.$$

Su $\left[\dfrac{1}{2},1\right)$, $y_{\max}=x$, $y_{\min}=0$:

$$V_1 = \frac{\pi/6}{2}\int_{1/2}^{1} x^2\,dx = \frac{\pi}{12}\left[\frac{x^3}{3}\right]_{1/2}^{1} = \frac{\pi}{12}\cdot\frac{1}{3}\cdot\frac{7}{8} = \frac{7\pi}{288}.$$

Su $\left[1,\dfrac{3}{2}\right]$, $y_{\max}=1$, $y_{\min}=x-1$:

$$V_2 = \frac{\pi}{12}\int_{1}^{3/2}\left[1-(x-1)^2\right]dx = \frac{\pi}{12}\int_0^{1/2}(1-t^2)\,dt = \frac{\pi}{12}\left[\frac{1}{2}-\frac{1}{24}\right] = \frac{\pi}{12}\cdot\frac{11}{24} = \frac{11\pi}{288}.$$

Volume totale:

$$V = V_1 + V_2 = \frac{7\pi}{288} + \frac{11\pi}{288} = \frac{18\pi}{288} = \frac{\pi}{16}.$$

---

**Punto 4.** Si cerca $h(x) = a + b\sin(cx+d)$ che soddisfi:

$$\min g = \min h, \quad \sup g = \max h, \quad h''\!\left(\tfrac{1}{2}\right) + 2\,h\!\left(\tfrac{1}{2}\right) = 0.$$

Da $g$: $\min g = 0$, $\sup g = 1$.

Da $h$: $\min h = a - |b|$, $\max h = a + |b|$. Quindi:

$$a - |b| = 0, \quad a + |b| = 1 \implies a = \frac{1}{2},\quad |b| = \frac{1}{2}.$$

Terza condizione. Con $h(x) = \tfrac{1}{2} + b\sin(cx+d)$:

$$h''(x) = -bc^2\sin(cx+d), \quad h(x) = \tfrac{1}{2} + b\sin(cx+d).$$

$$h''\!\left(\tfrac{1}{2}\right) + 2h\!\left(\tfrac{1}{2}\right) = -bc^2\sin\!\left(\tfrac{c}{2}+d\right) + 1 + 2b\sin\!\left(\tfrac{c}{2}+d\right) = 0$$

$$\implies 1 + b(2-c^2)\sin\!\left(\tfrac{c}{2}+d\right) = 0 \implies b\sin\!\left(\tfrac{c}{2}+d\right) = \frac{-1}{2-c^2} \quad (c \neq \pm\sqrt{2}).$$

Poiché $b = \pm\tfrac{1}{2}$, si ha $\sin\!\left(\tfrac{c}{2}+d\right) = \dfrac{\mp 2}{2-c^2}$. Esistono infinite coppie $(c,d)$ che soddisfano questa condizione (per ogni $c$ tale che $\left|\dfrac{2}{2-c^2}\right| \leq 1$), con due scelte di segno per $b$. Le funzioni siffatte sono quindi **infinite**.

---

*Fonte:* [📄 PDF p.37](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
