---
title: 2018 Sessione suppletiva — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2018_sessione_suppletiva_2018_prova_98_2
of_item: prob_2018_sessione_suppletiva_2018_prova_98_2
prova_id: prova_2018_sessione_suppletiva_2018_prova_98
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Problema:** [[Problemi/prob_2018_sessione_suppletiva_2018_prova_98_2|2018 Sessione suppletiva — Prova — Problema 2]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_98|2018 Sessione suppletiva — Prova]]

Fissato $k > 0$, si definiscono

$$f_k(x) = k + \ln x \quad (x > 0), \qquad g_k(x) = e^{x-k} \quad (x \in \mathbb{R}).$$

I grafici di $f_k$ e $g_k$ sono indicati rispettivamente con $F_k$ e $G_k$.

### Punto 1 — $f_k$ e $g_k$ inverse; composte $a(x)$ e $b(x)$

**Verifica dell'inversione.**

$$f_k(g_k(x)) = k + \ln\!\left(e^{x-k}\right) = k + (x - k) = x. \quad \checkmark$$

$$g_k(f_k(x)) = e^{(k+\ln x)-k} = e^{\ln x} = x. \quad \checkmark$$

Le funzioni sono inverse l'una dell'altra.

**Composte.**

$$a(x) = f_k(g_k(x)) = x, \qquad b(x) = g_k(f_k(x)) = x.$$

Si verifica $a(x) = b(x) = x$ per ogni $x$. ✓

### Punto 2 — Rette tangenti per $k = 2$ e distanza minima tra $F_2$ e $G_2$

Le funzioni sono $f_2(x) = 2 + \ln x$ e $g_2(x) = e^{x-2}$.

**Retta $s_2$ (parallela a $r\colon y = x$, tangente a $F_2$).**

$f_2'(x) = \tfrac{1}{x} = 1 \Rightarrow x = 1$. Punto: $(1,\, 2)$.

$$\boxed{s_2\colon\; y = x + 1.}$$

**Retta $t_2$ (parallela a $r\colon y = x$, tangente a $G_2$).**

$g_2'(x) = e^{x-2} = 1 \Rightarrow x = 2$. Punto: $(2,\, 1)$.

$$\boxed{t_2\colon\; y = x - 1.}$$

*(grafico — vedi PDF p.3)*

**Distanza minima tra $F_2$ e $G_2$.**

Poiché $f_2$ e $g_2$ sono inverse, i grafici $F_2$ e $G_2$ sono simmetrici rispetto a $y = x$. Le rette tangenti $s_2$ e $t_2$ sono parallele e a distanza:

$$d(s_2, t_2) = \frac{|1 - (-1)|}{\sqrt{1^2 + (-1)^2}} = \frac{2}{\sqrt{2}} = \sqrt{2}.$$

$$\boxed{d_{\min}(F_2, G_2) = \sqrt{2}.}$$

### Punto 3 — Soluzioni di $f_3(x) = g_3(x)$; studio in funzione di $k$

**Equazione $f_3(x) = g_3(x)$.**

Per il principio enunciato, $f_k(x) = g_k(x)$ se e solo se $f_k(x) = x$ (i grafici si intersecano sulla bisettrice). Risolviamo $3 + \ln x = x$, ovvero $h(x) = \ln x - x + 3 = 0$.

Studio di $h$: $h'(x) = \tfrac{1}{x} - 1 = 0$ per $x = 1$; massimo $h(1) = 0 - 1 + 3 = 2 > 0$; $h \to -\infty$ per $x \to 0^+$ e $x \to +\infty$.

Il grafico di $h$ ha un massimo positivo e tende a $-\infty$ agli estremi, quindi $h(x) = 0$ ha **due soluzioni** (una in $(0,1)$ e una in $(1,+\infty)$). ✓

**Studio in funzione di $k > 0$.**

L'equazione $k + \ln x = x$ equivale a $h_k(x) = \ln x - x + k = 0$. Massimo di $h_k$ in $x = 1$: $h_k(1) = k - 1$.

- $k > 1$: $h_k(1) > 0$ $\Rightarrow$ due radici $\Rightarrow$ $F_k$ e $G_k$ **secanti**.
- $k = 1$: $h_k(1) = 0$ $\Rightarrow$ un'unica radice $x = 1$ $\Rightarrow$ $F_k$ e $G_k$ **tangenti** nel punto $(1,1)$.
- $k < 1$: $h_k(1) < 0$ $\Rightarrow$ nessuna radice $\Rightarrow$ $F_k$ e $G_k$ **disgiunte**.

### Punto 4 — Area di $A$ e volume di rotazione per $k = e$

Le funzioni sono $f_e(x) = e + \ln x$ e $g_e(x) = e^{x-e}$. Poiché $k = e > 1$, i grafici $F_e$ e $G_e$ si intersecano in due punti $x_1 < 1 < x_2$ (soluzioni di $e + \ln x = x$).

La regione $A$ è limitata dai grafici $F_e$, $G_e$ e dagli assi cartesiani.

**Area di $A$ tra i due grafici.**

Sfruttando la simmetria rispetto a $y = x$ (poiché $f_e$ e $g_e$ sono inverse):

$$A = 2\int_{x_1}^{x_2}\!\bigl[x - f_e(x)\bigr]\,dx = 2\int_{x_1}^{x_2}(x - e - \ln x)\,dx.$$

Calcolando l'antiderivata:

$$\int(x - e - \ln x)\,dx = \frac{x^2}{2} - ex - x\ln x + x + C.$$

$$A = 2\left[\frac{x^2}{2} - ex - x\ln x + x\right]_{x_1}^{x_2}.$$

*(Le radici $x_1 \approx 0{,}307$ e $x_2 \approx 4{,}536$ si trovano numericamente — grafico vedi PDF p.4)*

**Volume di rotazione attorno all'asse $x$.**

$$V = \pi\int_{x_1}^{x_2}\!\left[g_e(x)^2 - f_e(x)^2\right]dx = \pi\int_{x_1}^{x_2}\!\left[e^{2(x-e)} - (e + \ln x)^2\right]dx.$$

*(grafico — vedi PDF p.4)*

---

*Fonte:* [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
