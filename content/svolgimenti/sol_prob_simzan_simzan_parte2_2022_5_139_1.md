---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2022_5_139_1
of_item: prob_simzan_simzan_parte2_2022_5_139_1
prova_id: prova_simzan_simzan_parte2_2022_5_139
anno: '2022'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2022
---

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2022_5_139_1|Simulazione Zanichelli 2022 — SimZan parte2 n.5 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 n.5]]

Consideriamo la famiglia di funzioni $f_a(x) = \dfrac{x + a}{1 + x^2}$, con $a \in \mathbb{R}$.

### Punto 1 — Massimo, minimo e asintoto

Poiché $1 + x^2 \neq 0$ per ogni $x \in \mathbb{R}$, il dominio di $f_a(x)$ è $\mathbb{R}$.

Calcoliamo i limiti agli estremi del dominio:

$$\lim_{x \to \pm\infty} f_a(x) = \lim_{x \to \pm\infty} \frac{x + a}{1 + x^2} = 0,$$

quindi la funzione ammette un **unico asintoto**: la retta di equazione $y = 0$.

Studiamo la monotonia mediante la derivata prima:

$$f_a'(x) = \frac{(1 + x^2) - (x + a) \cdot 2x}{(1 + x^2)^2} = \frac{-x^2 - 2ax + 1}{(1 + x^2)^2}.$$

Il numeratore $-x^2 - 2ax + 1$ è un trinomio di secondo grado con coefficiente direttivo negativo e discriminante $\Delta = 4a^2 + 4 > 0$ per ogni $a \in \mathbb{R}$, quindi ha sempre due radici reali distinte:

$$x_{1,2} = \frac{2a \pm \sqrt{4a^2 + 4}}{-2} = -a \mp \sqrt{a^2 + 1}.$$

Poiché il coefficiente direttivo del numeratore è negativo, $f_a'(x) > 0$ nell'intervallo $(x_1, x_2)$ con $x_1 = -a - \sqrt{a^2+1}$ e $x_2 = -a + \sqrt{a^2+1}$.

La funzione ha quindi:
- un **punto di minimo relativo** in $x_1 = -a - \sqrt{a^2+1}$;
- un **punto di massimo relativo** in $x_2 = -a + \sqrt{a^2+1}$.

### Punto 2 — Retta tangente in $C$, punto $D$, e valore $a > 0$ tale che $|CD| = 2\sqrt{2}$

Il punto $C$ è l'intersezione del grafico con l'asse $y$: $C = (0,\; a)$.

Il coefficiente angolare della tangente in $C$ è:

$$f_a'(0) = \frac{-0 - 0 + 1}{1} = 1.$$

Osserviamo che tale valore **non dipende da $a$**. La retta tangente in $C$ ha equazione:

$$y = x + a.$$

Il punto $D$, intersezione del grafico con l'asse $x$, ha coordinate $D = (-a,\; 0)$.

Verifichiamo che $D$ giace sulla retta tangente:

$$y(-a) = -a + a = 0.\quad \checkmark$$

Quindi la retta tangente in $C$ passa anche per $D$. Impostiamo la misura del segmento $CD = 2\sqrt{2}$:

$$|CD| = \sqrt{(0 - (-a))^2 + (a - 0)^2} = \sqrt{a^2 + a^2} = |a|\sqrt{2} = 2\sqrt{2}$$

$$\Rightarrow \quad |a| = 2 \quad \Rightarrow \quad a = 2 \quad (\text{poiché } a > 0).$$

### Punto 3 — Studio di $g(x) = f_2(x)$

Per $a = 2$:

$$g(x) = \frac{x + 2}{1 + x^2}.$$

La derivata prima è:

$$g'(x) = \frac{-x^2 - 4x + 1}{(1 + x^2)^2}.$$

Le radici del numeratore sono:

$$x = \frac{4 \pm \sqrt{16 + 4}}{-2} = -2 \pm \sqrt{5}.$$

La funzione è crescente per $x \in (-2 - \sqrt{5},\; -2 + \sqrt{5})$, con:
- **minimo relativo** in $x_m = -2 - \sqrt{5}$;
- **massimo relativo** in $x_M = -2 + \sqrt{5}$.

La funzione è continua su $\mathbb{R}$, con asintoto orizzontale $y = 0$, intersezione con l'asse $x$ in $x = -2$ e con l'asse $y$ in $y = 2$.

*(grafico — vedi PDF p.151)*

### Punto 4 — Valore di $a$ per $h(x)$ simmetrica rispetto all'origine; area tra $g(x)$ e $h(x)$ in $[-1, 1]$

La funzione $h(x) = f_a(x)$ è simmetrica rispetto all'origine se $h(-x) = -h(x)$:

$$\frac{-x + a}{1 + x^2} = -\frac{x + a}{1 + x^2} \quad \Rightarrow \quad -x + a = -x - a \quad \Rightarrow \quad 2a = 0 \quad \Rightarrow \quad a = 0.$$

Quindi $h(x) = f_0(x) = \dfrac{x}{1 + x^2}$.

Verifichiamo $g(x) > h(x)$ per ogni $x \in \mathbb{R}$:

$$g(x) - h(x) = \frac{x + 2}{1 + x^2} - \frac{x}{1 + x^2} = \frac{2}{1 + x^2} > 0 \quad \forall\, x \in \mathbb{R}.\quad \checkmark$$

Area tra i due grafici nell'intervallo $[-1, 1]$:

$$\int_{-1}^{1} \bigl[g(x) - h(x)\bigr]\, dx = \int_{-1}^{1} \frac{2}{1 + x^2}\, dx = 2\bigl[\arctan x\bigr]_{-1}^{1} = 2\!\left(\frac{\pi}{4} + \frac{\pi}{4}\right) = \pi.$$

### Punto 5 — Calcolo di $F(\sqrt{3})$ e del limite

La funzione integrale è:

$$F(x) = \int_0^x h(t)\, dt = \int_0^x \frac{t}{1 + t^2}\, dt = \frac{1}{2}\bigl[\ln(1 + t^2)\bigr]_0^x = \frac{1}{2}\ln(1 + x^2).$$

Quindi:

$$F(\sqrt{3}) = \frac{1}{2}\ln(1 + 3) = \frac{1}{2}\ln 4 = \ln 2.$$

Per il limite:

$$\lim_{x \to +\infty} \frac{F(x)}{\ln x} = \lim_{x \to +\infty} \frac{\tfrac{1}{2}\ln(1 + x^2)}{\ln x}.$$

Forma $\dfrac{\infty}{\infty}$: applichiamo il teorema di De L'Hôpital:

$$\lim_{x \to +\infty} \frac{\dfrac{x}{1+x^2}}{\dfrac{1}{x}} = \lim_{x \to +\infty} \frac{x^2}{1 + x^2} = 1.$$

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
