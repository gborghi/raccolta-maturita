---
title: 2013 PNI — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_pni_2013_problema2_152_1
of_item: prob_2013_pni_2013_problema2_152_1
prova_id: prova_2013_pni_2013_problema2_152
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_pni_2013_problema2_152_1|2013 PNI — Problema 2 — Problema 1]] · **Prova:** [[Prove/2013_pni_2013_problema2_152|2013 PNI — Problema 2]]

### Punto 1

Si studia la funzione

$$f(x) = x^3 \ln x$$

**Dominio:** $0 < x < +\infty$

- Per $y = 0$ si ottiene $\ln x = 0$, da cui $x = 1$.
- $y > 0$ quando $\ln x > 0$, cioè per $x > 1$.
- La funzione, visto il dominio, non può essere né pari né dispari.
- Il limite per $x \to 0^+$ è $0^-$; il limite per $x \to +\infty$ è $+\infty$.
- Per $x \to +\infty$, $f(x)/x \to +\infty$, quindi non c'è asintoto obliquo.

**Derivata prima:**

$$y' = 3x^2 \ln x + x^2 = x^2(3\ln x + 1)$$

il cui dominio coincide con quello di $f$.

- $y' = 0$ quando $\ln x = -\frac{1}{3}$, quindi per $x = e^{-1/3} \cong 0{,}717$.
- Per $x < e^{-1/3}$, $y' < 0$; per $x > e^{-1/3}$, $y' > 0$: la funzione è decrescente da $0$ fino a $x = e^{-1/3}$, crescente per $x > e^{-1/3}$.
- Abbiamo quindi un **minimo** in $x = e^{-1/3}$, la cui ordinata vale

$$y_{\min} = -\frac{1}{3e}$$

**Derivata seconda:**

$$y'' = x(6\ln x + 5)$$

- $y'' = 0$ quando $\ln x = -\frac{5}{6}$, quindi per $x = e^{-5/6} \cong 0{,}435$.
- Per $x < e^{-5/6}$, $y'' < 0$ (concavità verso il basso); per $x > e^{-5/6}$, $y'' > 0$ (concavità verso l'alto).
- C'è un **flesso** in $x = e^{-5/6}$, con ordinata

$$y_{\text{flesso}} = -\frac{5}{6}\,e^{-5/2}$$

Notiamo che per $x \to 0^+$ la derivata prima tende a $0^-$, quindi la curva si avvicina all'origine con tangente orizzontale.

Il grafico della funzione è il seguente:

*(grafico — vedi PDF p. 1)*

---

### Punto 2

Si cerca la parabola $y = ax^2 + bx + c$, passante per l'origine $O$ e tangente in $P = (1;\,0)$ alla curva $\gamma$.

Si calcola $f'(1) = 1^2(3\ln 1 + 1) = 1$: la pendenza della tangente in $P$ è $m = 1$, quindi la tangente in $P$ ha equazione $y = x - 1$.

Imponendo che la parabola passi per $O$, passi per $P$ e abbia derivata prima uguale a $1$ in $x = 1$, si ottiene il sistema:

$$\begin{cases} c = 0 \\ a + b + c = 0 \\ 2a + b = 1 \end{cases}$$

che porta alla soluzione $a = 1$, $b = -1$, $c = 0$.

La parabola ha quindi equazione

$$y = x^2 - x$$

---

### Punto 3

L'area della regione $R$ (compresa tra $\gamma$ e l'asse $x$ sull'intervallo $(0,1]$) si calcola mediante il seguente integrale improprio (in $x = 0$ la funzione non è continua):

$$A(R) = \lim_{k \to 0^+} \int_k^1 x^3 \ln x \, dx$$

Integrando per parti si ottiene:

$$\int x^3 \ln x \, dx = \frac{x^4}{4}\ln x - \frac{x^4}{16} + C$$

Quindi:

$$A(R) = \lim_{k \to 0^+} \left[\frac{x^4}{4}\ln x - \frac{x^4}{16}\right]_k^1 = \lim_{k \to 0^+} \left[\left(0 - \frac{1}{16}\right) - \left(\frac{k^4}{4}\ln k - \frac{k^4}{16}\right)\right] = \frac{1}{16}$$

(il limite $k^4 \ln k \to 0$ per $k \to 0^+$).

Poiché le unità di misura sono i decimetri, l'area in millimetri quadrati è:

$$A(R) = \frac{1}{16} \text{ dm}^2 = \frac{1}{16} \cdot 10^4 \text{ mm}^2 = 625 \text{ mm}^2$$

---

### Punto 4

La simmetrica di $\gamma$ rispetto all'asse $y$ si ottiene mediante la trasformazione geometrica

$$\begin{cases} x \to -x \\ y \to y \end{cases}$$

L'equazione di $\gamma$, $y = x^3 \ln x$, si trasforma in

$$y = -x^3 \ln(-x)$$

Il suo grafico è rappresentato in tratteggio nero insieme al grafico di $\gamma$ (in tratto continuo rosso).

*(grafico — vedi PDF p. 2)*

*Fonte:* [📄 PDF p.152](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
