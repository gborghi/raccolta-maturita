---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Problema 1 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2021_4_112_1
of_item: prob_simzan_simzan_parte2_2021_4_112_1
prova_id: prova_simzan_simzan_parte2_2021_4_112
anno: '2021'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2021
---

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2021_4_112_1|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica) — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 n.4 (Mat+Fisica)]]

La famiglia di funzioni è $f_k(x) = \dfrac{4x}{k + x^2}$, con $k > 0$ parametro reale positivo.

### Punto 1 — Studio della funzione $f_k(x)$

**Dominio e simmetria.**

Poiché $k > 0$, risulta $k + x^2 \neq 0$ per ogni $x$, quindi il dominio è $D = \mathbb{R}$.

La funzione è **dispari**, infatti:
$$f_k(-x) = \frac{4(-x)}{k + (-x)^2} = -\frac{4x}{k + x^2} = -f_k(x),$$
quindi il grafico di $f_k$ è simmetrico rispetto all'origine.

**Asintoti.**

La funzione è definita su tutto $\mathbb{R}$ e non ha asintoti verticali. Per gli asintoti orizzontali:
$$\lim_{x \to \pm\infty} f_k(x) = \lim_{x \to \pm\infty} \frac{4x}{k + x^2} = 0,$$
quindi $y = 0$ è asintoto orizzontale (sia per $x \to +\infty$ che per $x \to -\infty$). Non esistono asintoti obliqui.

**Segno:**
$f_k(x) > 0 \Leftrightarrow x > 0$; $f_k(x) < 0 \Leftrightarrow x < 0$; $f_k(0) = 0$.

**Derivata prima e monotonia.**

$$f_k'(x) = \frac{4(k + x^2) - 4x \cdot 2x}{(k + x^2)^2} = \frac{4k - 4x^2}{(k + x^2)^2} = \frac{4(k - x^2)}{(k + x^2)^2}.$$

$f_k'(x) \ge 0 \Leftrightarrow k - x^2 \ge 0 \Leftrightarrow -\sqrt{k} \le x \le \sqrt{k}$.

Quindi la funzione è **crescente** per $-\sqrt{k} < x < \sqrt{k}$ e **decrescente** per $x < -\sqrt{k}$ e per $x > \sqrt{k}$.

Ha un **massimo relativo** in $x = \sqrt{k}$ e un **minimo relativo** in $x = -\sqrt{k}$:
$$M_+\!\left(\sqrt{k},\; \frac{2}{\sqrt{k}}\right), \quad M_-\!\left(-\sqrt{k},\; -\frac{2}{\sqrt{k}}\right).$$

Poiché la funzione tende a $0$ all'infinito e il massimo relativo è l'unico massimo locale con $f_k(x) > 0$ per $x > 0$, esso è anche **massimo assoluto**.

**Derivata seconda e flessi.**

Derivando $f_k'(x)$ si ottiene:
$$f_k''(x) = \frac{8x(x^2 - 3k)}{(k + x^2)^3}.$$

$f_k''(x) = 0$ per $x = 0$, $x = \sqrt{3k}$, $x = -\sqrt{3k}$.

I tre **punti di flesso** sono:
$$F_0 = (0,\, 0), \quad F_+\!\left(\sqrt{3k},\; \frac{\sqrt{3}}{2\sqrt{k}}\right), \quad F_-\!\left(-\sqrt{3k},\; -\frac{\sqrt{3}}{2\sqrt{k}}\right).$$

**Valore di $k$ per il massimo assoluto di ordinata 2.**

$$\frac{2}{\sqrt{k}} = 2 \;\Rightarrow\; \sqrt{k} = 1 \;\Rightarrow\; k = 1.$$

La funzione da considerare è dunque:
$$f(x) = \frac{4x}{1 + x^2}.$$

*(grafico di $f(x)$ e di $f'(x)$ — vedi PDF p.126)*

### Punto 2 — Valore di $\alpha > 0$ per cui $\mathcal{A} = 1$

Con $k = 1$, la funzione è $\varphi(x) = f(x) = \dfrac{4x}{1 + x^2}$.

Poiché $\varphi(x) \ge 0$ per $x \ge 0$, l'area sottesa al grafico di $\varphi$ nell'intervallo $[0;\alpha]$ è:
$$\mathcal{A} = \int_0^\alpha \frac{4x}{1 + x^2}\,dx = 2\left[\ln(1 + x^2)\right]_0^\alpha = 2\ln(1 + \alpha^2).$$

Imponiamo $\mathcal{A} = 1$:
$$2\ln(1 + \alpha^2) = 1 \;\Rightarrow\; \ln(1 + \alpha^2) = \frac{1}{2} \;\Rightarrow\; 1 + \alpha^2 = e^{1/2} \;\Rightarrow\; \alpha = \sqrt{\sqrt{e} - 1}.$$

### Punto 3 — Campo magnetico nel punto $P$

I due fili conduttori passano per i punti $A = (0, 1)$ e $B = (0, -1)$ (distanze in metri) e sono percorsi da correnti di intensità $i$ con verso uscente dal piano $Oxy$.

*(configurazione — vedi PDF p.120)*

Sia $P = (x, 0)$ con $x > 0$ un generico punto sull'asse delle ascisse positivo.

Per la legge di Biot-Savart, il modulo del campo prodotto da ciascun filo in $P$ è:
$$B_A = B_B = \frac{\mu_0 i}{2\pi d}, \quad d = \sqrt{x^2 + 1}.$$

Per simmetria (i due fili sono simmetrici rispetto all'asse $x$), le componenti orizzontali (lungo $x$) dei due campi si cancellano, mentre le componenti verticali (lungo $y$) si sommano. L'angolo $\theta$ tra il segmento $\overrightarrow{AP}$ e l'asse $x$ soddisfa $\sin\theta = \dfrac{x}{\sqrt{1+x^2}}$.

Il campo risultante è dunque diretto lungo l'asse $y$ e vale:
$$B(x) = 2 \cdot \frac{\mu_0 i}{2\pi\sqrt{1+x^2}} \cdot \frac{x}{\sqrt{1+x^2}} = \frac{\mu_0 i x}{\pi(1 + x^2)}.$$

Nell'**origine** le componenti lungo $y$ dei due campi hanno verso opposto (per la diversa posizione di $A$ e $B$ rispetto a $O$), quindi $\vec{B}(0) = \vec{0}$. $\square$

### Punto 4 — Forza magnetica in $P$ e corrente $i'$ che annulla $\vec{F}$

**Intensità, direzione e verso di $\vec{F}/l$.**

Per $P = (2, 0)$ m e $i = 12$ A:
$$B(2) = \frac{\mu_0 \cdot 12 \cdot 2}{\pi(1 + 4)} = \frac{24\mu_0}{5\pi} = \frac{4\pi \times 10^{-7} \times 24}{5\pi} = \frac{4 \times 24 \times 10^{-7}}{5} \approx 1{,}92 \times 10^{-6}\;\text{T}.$$

Il campo $\vec{B}$ in $P$ è diretto nel verso positivo dell'asse $y$. Il conduttore in $P$ è percorso da corrente $i$ **entrante** nel foglio (verso $-z$). La forza per unità di lunghezza su tale conduttore è:
$$\frac{F}{l} = i \cdot B(2) = 12 \times 1{,}92 \times 10^{-6} \approx 2{,}3 \times 10^{-5}\;\text{N/m},$$
diretta lungo l'asse $x$ **negativo** (verso l'origine), per la regola $\vec{F}/l = i\,\hat{\ell} \times \vec{B}$ con $\hat{\ell} = -\hat{z}$ e $\vec{B} = B\,\hat{y}$: $(-\hat{z}) \times \hat{y} = -\hat{x}$.

**Corrente $i'$ che annulla $\vec{F}$.**

Si pone un terzo conduttore nell'origine con corrente $i'$ **entrante** nel foglio. Per la regola della mano destra, esso genera in $P = (2, 0)$ un campo $\vec{B}'$ diretto nel verso negativo dell'asse $y$, cioè opposto a $\vec{B}$. La forza per unità di lunghezza dovuta a $\vec{B}'$ sul conduttore in $P$ è quindi diretta nel verso $+x$, opposta alla precedente.

Per l'annullamento di $\vec{F}$ totale, si deve avere $B(2) = B'(2)$:
$$\frac{\mu_0 i \cdot 2}{\pi(1+4)} = \frac{\mu_0 i'}{2\pi \cdot 2} \;\Rightarrow\; \frac{2i}{5} = \frac{i'}{4} \;\Rightarrow\; i' = \frac{8i}{5} = \frac{8 \times 12}{5} = 19{,}2\;\text{A}.$$

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
