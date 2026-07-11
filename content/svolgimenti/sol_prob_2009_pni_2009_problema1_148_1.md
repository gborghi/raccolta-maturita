---
title: 2009 PNI — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2009_pni_2009_problema1_148_1
of_item: prob_2009_pni_2009_problema1_148_1
prova_id: prova_2009_pni_2009_problema1_148
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2009
---

**Problema:** [[Problemi/prob_2009_pni_2009_problema1_148_1|2009 PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2009_pni_2009_problema1_148|2009 PNI — Problema 1]]

### Punto 1

Si consideri la funzione

$$f(x) = e^{-x} \cdot \left(1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!}\right)$$

Calcoliamo la derivata $f'(x)$. Applicando la regola del prodotto con $u = e^{-x}$ e $v = \sum_{k=0}^{n} \frac{x^k}{k!}$:

$$f'(x) = -e^{-x} \cdot \left(1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!}\right) + e^{-x} \cdot \left(1 + x + \cdots + \frac{x^{n-1}}{(n-1)!}\right)$$

Poiché i termini della somma si cancellano tranne l'ultimo, si ottiene:

$$f'(x) = -e^{-x} \cdot \frac{x^n}{n!}$$

### Punto 2

Studio del segno di $f'(x) = -e^{-x} \cdot \dfrac{x^n}{n!}$:

- **Se $n$ è pari**: $x^n \ge 0$ per ogni $x$, quindi $f'(x) \le 0$ sempre. La funzione è sempre decrescente: non esistono massimi né minimi.
- **Se $n$ è dispari**: $x^n > 0$ per $x > 0$, $x^n < 0$ per $x < 0$, $x^n = 0$ per $x = 0$. Pertanto $f'(x) > 0$ per $x < 0$, $f'(x) < 0$ per $x > 0$ e $f'(0) = 0$: la funzione ammette un **massimo (assoluto) in $x = 0$**.

**Per $n$ dispari, quando vale $f(x) \le 1$?**

Per $n$ dispari esiste un massimo assoluto in $x = 0$, con $f(0) = 1$. Quindi

$$f(x) \le f(0) = 1 \quad \text{per ogni } x \in \mathbb{R}.$$

### Punto 3

Con $n = 2$ la funzione diventa:

$$g(x) = e^{-x} \cdot \left(1 + x + \frac{x^2}{2}\right)$$

Proprietà della funzione $g$:

- È definita su tutto $\mathbb{R}$.
- È sempre positiva (prodotto di fattori positivi).
- Taglia l'asse $y$ in $y = 1$ (poiché $g(0) = 1$).
- $\displaystyle\lim_{x \to +\infty} g(x) = 0^+$; $\displaystyle\lim_{x \to -\infty} g(x) = +\infty$.
- La derivata prima è

$$y' = -e^{-x} \cdot \frac{x^2}{2!} < 0 \quad \text{per ogni } x \ne 0$$

quindi la funzione è sempre decrescente.

- La derivata seconda è

$$y'' = e^{-x}(x^2 - 2x) = e^{-x} x(x-2)$$

che è positiva (concavità verso l'alto) per $x < 0$ oppure $x > 2$. La funzione ha **flessi in $x = 0$ e $x = 2$**.

*(grafico — vedi PDF)*

### Punto 4

L'integrale

$$\int_0^2 e^{-x}\!\left(1 + x + \frac{x^2}{2}\right)dx$$

rappresenta l'area del trapezoide curvilineo compreso tra il grafico di $g$ e l'asse $x$, nell'intervallo $[0,2]$.

Integrando per parti in modo iterato si ottiene:

$$\int e^{-x}\!\left(1 + x + \frac{x^2}{2}\right)dx = -e^{-x}\!\left(3 + 2x + \frac{x^2}{2}\right) + C$$

Quindi:

$$\int_0^2 g(x)\,dx = \left[-e^{-x}\!\left(3 + 2x + \frac{x^2}{2}\right)\right]_0^2 = -e^{-2}(3 + 4 + 2) + 3 = 3 - 9e^{-2} \cong 1{,}78$$

*Fonte:* [📄 PDF p.148](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
