---
title: 'Simulazione Zanichelli 2011 PNI #1 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2011_1_2_2
of_item: prob_simzan_simzan_parte1_2011_1_2_2
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

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2011_1_2_2|Simulazione Zanichelli 2011 PNI n.1 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_1_2|Simulazione Zanichelli 2011 PNI n.1]]

È data la funzione:

$$f(x) = \begin{cases} -x^2 + x + a & \text{se } x \le 0 \\ bx^2\ln x & \text{se } x > 0 \end{cases}$$

### Punto a) — Determinazione di $a$ e $b$

**Continuità in $x=0$:**

$$\lim_{x\to 0^-}(-x^2+x+a) = a, \qquad \lim_{x\to 0^+} bx^2\ln x = b\lim_{x\to 0^+} x^2\ln x = 0.$$

Il limite $\lim_{x\to 0^+} x^2\ln x = 0$ si verifica con De L'Hôpital (forma $\dfrac{\ln x}{1/x^2}$):

$$\lim_{x\to 0^+}\frac{\ln x}{x^{-2}} = \lim_{x\to 0^+}\frac{1/x}{-2x^{-3}} = \lim_{x\to 0^+}\frac{-x^2}{2} = 0.$$

Per la continuità: $a = 0$.

**Condizione sull'angolo della tangente in $x=1$:** La tangente forma un angolo $\alpha$ con il semiasse positivo delle $x$ tale che $\cos\alpha = \dfrac{\sqrt{5}}{5} = \dfrac{1}{\sqrt{5}}$, quindi $\tan\alpha = \pm 2$.

La derivata per $x>0$ è $f'(x) = 2bx\ln x + bx = bx(2\ln x + 1)$, quindi $f'(1) = b\cdot 1\cdot(0+1) = b$.

Affinché $|\tan\alpha|=2$: $b = \pm 2$. Scegliendo $b=2$ (che dà un angolo $\alpha$ corrispondente a $\cos\alpha>0$, cioè $\tan\alpha=2$):

$$a = 0, \quad b = 2.$$

### Punto b) — Derivabilità

Con $a=0$, $b=2$:

$$f'_-(0) = \lim_{x\to 0^-}(-2x+1) = 1, \qquad f'_+(0) = \lim_{x\to 0^+} 2x(2\ln x+1) = 0.$$

Poiché $f'_-(0) \neq f'_+(0)$, la funzione **non è derivabile in $x=0$** (punto angoloso). In tutti gli altri punti del dominio $f$ è derivabile.

### Punto c) — Studio della funzione e grafico $\gamma$

$$f(x) = \begin{cases} -x^2 + x & \text{se } x \le 0 \\ 2x^2\ln x & \text{se } x > 0 \end{cases}$$

**Dominio:** $\mathbb{R}$ (per $x>0$, $\ln x$ è definito; per $x\le 0$, la parabola è definita ovunque).

**Segno e intersezioni con gli assi:**
- Per $x\le 0$: $f(x)=-x^2+x=x(1-x)$. Poiché $x\le 0$ e $1-x\ge 1>0$, si ha $f(x)\le 0$; $f(0)=0$.
- Per $x>0$: $f(x)=2x^2\ln x$; $f(x)=0$ per $x=1$; $f(x)<0$ per $0<x<1$; $f(x)>0$ per $x>1$.

**Limiti:**

$$\lim_{x\to-\infty} f(x) = -\infty, \qquad \lim_{x\to+\infty} f(x) = +\infty, \qquad \lim_{x\to 0^+} f(x) = 0.$$

**Derivata prima:**

$$f'(x) = \begin{cases} -2x+1 & \text{se } x < 0 \\ 2x(2\ln x+1) & \text{se } x > 0 \end{cases}$$

Per $x<0$: $f'(x)=-2x+1>0$ (crescente).

Per $x>0$: $f'(x)=0 \Rightarrow 2\ln x+1=0 \Rightarrow x=e^{-1/2}=\dfrac{1}{\sqrt{e}}$.

Minimo relativo in $x=\dfrac{1}{\sqrt{e}}$: $f\!\left(\dfrac{1}{\sqrt{e}}\right)=2\cdot\dfrac{1}{e}\cdot\left(-\dfrac{1}{2}\right)=-\dfrac{1}{e}$.

**Derivata seconda:**

$$f''(x) = \begin{cases} -2 & \text{se } x < 0 \\ 2(2\ln x+3) & \text{se } x > 0 \end{cases}$$

Per $x<0$: $f''(x)=-2<0$ (funzione concava).

Per $x>0$: $f''(x)=0 \Rightarrow \ln x=-\dfrac{3}{2} \Rightarrow x=e^{-3/2}$. Flesso in $x=e^{-3/2}$; la funzione è concava per $0<x<e^{-3/2}$ e convessa per $x>e^{-3/2}$.

*(grafico — vedi PDF p.11)*

### Punto d) — Integrazione numerica e confronto con il calcolo esatto

L'area della regione compresa tra $\gamma$ e l'asse $x$ nell'intervallo $[1,3]$ è (poiché $f(x)\ge 0$ per $x\ge 1$):

$$\mathcal{A} = \int_1^3 2x^2\ln x\,dx.$$

**Metodo dei trapezi** con $n=10$ sottointervalli ($h=0{,}2$):

| $x_i$ | $f(x_i)=2x_i^2\ln x_i$ |
|--------|------------------------|
| 1,0 | 0 |
| 1,2 | $\approx 0{,}526$ |
| 1,4 | $\approx 1{,}316$ |
| 1,6 | $\approx 2{,}411$ |
| 1,8 | $\approx 3{,}850$ |
| 2,0 | $\approx 5{,}545$ |
| 2,2 | $\approx 7{,}633$ |
| 2,4 | $\approx 10{,}128$ |
| 2,6 | $\approx 13{,}047$ |
| 2,8 | $\approx 16{,}417$ |
| 3,0 | $\approx 19{,}775$ |

$$\mathcal{A} \approx h\left[\frac{f(1)+f(3)}{2}+f(1{,}2)+\cdots+f(2{,}8)\right] = 0{,}2\cdot\left[\frac{0+19{,}775}{2}+\sum_{k=1}^{9}f(x_k)\right] \approx 14{,}036.$$

**Calcolo esatto** con integrazione per parti ($u=\ln x$, $dv=2x^2\,dx$):

$$\int_1^3 2x^2\ln x\,dx = \left[\frac{2x^3}{3}\ln x\right]_1^3 - \int_1^3\frac{2x^2}{3}\,dx = 18\ln 3 - \left[\frac{2x^3}{9}\right]_1^3 = 18\ln 3 - 6 + \frac{2}{9} = 18\ln 3 - \frac{52}{9} \approx 13{,}997.$$

I due risultati sono concordanti.

### Punto e) — Volume del solido di rotazione attorno all'asse $x$ per $x\in[-1,1]$

$$V = \pi\int_{-1}^{1}[f(x)]^2\,dx = \pi\int_{-1}^{0}(-x^2+x)^2\,dx + \pi\int_{0}^{1}(2x^2\ln x)^2\,dx.$$

**Primo integrale** ($[-1,0]$):

$$\int_{-1}^{0}(x^2-x)^2\,dx = \int_{-1}^{0}(x^4-2x^3+x^2)\,dx = \left[\frac{x^5}{5}-\frac{x^4}{2}+\frac{x^3}{3}\right]_{-1}^{0} = 0-\left(-\frac{1}{5}-\frac{1}{2}-\frac{1}{3}\right) = \frac{31}{30}.$$

**Secondo integrale** ($[0,1]$):

$$\int_{0}^{1}4x^4\ln^2 x\,dx.$$

Integrazione per parti con $u=\ln^2 x$, $dv=4x^4\,dx$:

$$= \left[\frac{4x^5}{5}\ln^2 x\right]_0^1 - \int_0^1\frac{4x^5}{5}\cdot\frac{2\ln x}{x}\,dx = 0 - \frac{8}{5}\int_0^1 x^4\ln x\,dx.$$

Con $u=\ln x$, $dv=x^4\,dx$:

$$\int_0^1 x^4\ln x\,dx = \left[\frac{x^5}{5}\ln x\right]_0^1 - \int_0^1\frac{x^4}{5}\,dx = 0 - \frac{1}{25} = -\frac{1}{25}.$$

Quindi:

$$\int_0^1 4x^4\ln^2 x\,dx = -\frac{8}{5}\cdot\left(-\frac{1}{25}\right) = \frac{8}{125}.$$

Il volume totale è:

$$V = \pi\left(\frac{31}{30}+\frac{8}{125}\right) = \pi\cdot\frac{31\cdot 125+8\cdot 30}{3750} = \pi\cdot\frac{3875+240}{3750} = \frac{4115\pi}{3750} = \frac{823\pi}{750}.$$

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
