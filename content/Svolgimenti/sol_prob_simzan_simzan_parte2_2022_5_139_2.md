---
title: 'Simulazione Zanichelli 2022 — SimZan parte2 #5 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2022_5_139_2
of_item: prob_simzan_simzan_parte2_2022_5_139_2
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

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2022_5_139_2|Simulazione Zanichelli 2022 — SimZan parte2 n.5 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2022_5_139|Simulazione Zanichelli 2022 — SimZan parte2 n.5]]

La funzione è $f(x) = ax \cdot e^{-x/b}$, con massimo relativo in $x = 3$ *(grafico — vedi PDF p.140)*.

### Punto 1 — Determinazione di $a$ e $b$

Calcoliamo la derivata prima:

$$f'(x) = a\, e^{-x/b} + ax \cdot \left(-\frac{1}{b}\right)e^{-x/b} = a\, e^{-x/b}\!\left(1 - \frac{x}{b}\right).$$

Poiché $a \neq 0$ e $e^{-x/b} > 0$, la condizione $f'(3) = 0$ dà:

$$1 - \frac{3}{b} = 0 \quad \Rightarrow \quad b = 3.$$

Dal grafico il massimo ha ordinata $\dfrac{18}{e^3}$ in $x = 3$, dunque:

$$f(3) = 3a\, e^{-1} = \frac{18}{e^3} \cdot e^2 \;(\text{oppure dal grafico}) \quad \Longrightarrow \quad \frac{3a}{e} = \frac{6}{e} \quad \Rightarrow \quad a = 2.$$

La soluzione ufficiale conferma $a = 2$, $b = 3$, quindi:

$$f(x) = 2x\, e^{-x/3}.$$

### Punto 2 — Coordinate del punto di flesso $F$

Calcoliamo la derivata seconda:

$$f'(x) = 2\,e^{-x/3}\!\left(1 - \frac{x}{3}\right),$$

$$f''(x) = -\frac{2}{3}e^{-x/3}\!\left(1 - \frac{x}{3}\right) + 2\,e^{-x/3}\!\left(-\frac{1}{3}\right) = \frac{2}{3}\,e^{-x/3}\!\left(\frac{x}{3} - 2\right).$$

Poiché $e^{-x/3} > 0$, poniamo $\dfrac{x}{3} - 2 = 0 \Rightarrow x = 6$.

La derivata seconda cambia segno in $x = 6$, dunque è un punto di flesso.

$$f(6) = 2 \cdot 6 \cdot e^{-2} = \frac{12}{e^2}.$$

Il punto di flesso è $F = \!\left(6,\; \dfrac{12}{e^2}\right)$.

### Punto 3 — Grafico qualitativo di $f'(x)$

Dal grafico di $f(x)$ si osserva *(grafico — vedi PDF p.153)*:
- $f'(x) > 0$ per $x < 3$: $f$ è crescente, quindi $f' > 0$;
- $f'(x) = 0$ in $x = 3$: massimo di $f$;
- $f'(x) < 0$ per $x > 3$: $f$ è decrescente;
- in $x = 6$ (flesso di $f$) la derivata prima ha un minimo relativo;
- $\lim_{x \to +\infty} f'(x) = 0$: asintoto orizzontale $y = 0$ per $f'$.

### Punto 4 — Coordinate di $P$ che rendono massima l'area di $APBO$

Sia $P = (x_0,\; f(x_0))$ con $x_0 > 0$. Le proiezioni ortogonali sono $A = (x_0, 0)$ e $B = (0,\; f(x_0))$.

L'area del rettangolo $APBO$ è:

$$\mathcal{A}(x) = x \cdot f(x) = x \cdot 2x\,e^{-x/3} = 2x^2 e^{-x/3}.$$

Deriviamo:

$$\mathcal{A}'(x) = 4x\,e^{-x/3} + 2x^2 \cdot \left(-\frac{1}{3}\right)e^{-x/3} = 2x\,e^{-x/3}\!\left(2 - \frac{x}{3}\right).$$

Per $x > 0$: $\mathcal{A}'(x) = 0 \Rightarrow 2 - \dfrac{x}{3} = 0 \Rightarrow x = 6$.

$$\mathcal{A}(6) = 2 \cdot 36 \cdot e^{-2} = \frac{72}{e^2} \approx 9{,}74.$$

Le coordinate di $P$ che rendono massima l'area sono $P = \!\left(6,\; \dfrac{12}{e^2}\right)$.

### Punto 5 — Integrale improprio $\int_3^{+\infty} f(x)\,dx$

Per parti: sia $u = 2x$, $dv = e^{-x/3}\,dx$, quindi $du = 2\,dx$, $v = -3e^{-x/3}$:

$$\int 2x\,e^{-x/3}\,dx = -6x\,e^{-x/3} + \int 6\,e^{-x/3}\,dx = -6x\,e^{-x/3} - 18\,e^{-x/3} + C = -(6x + 18)e^{-x/3} + C.$$

Calcoliamo il limite:

$$\lim_{b \to +\infty} \bigl[-(6x+18)e^{-x/3}\bigr]_3^b = \lim_{b \to +\infty}\bigl[-(6b+18)e^{-b/3}\bigr] + (18+18)e^{-1} = 0 + \frac{36}{e}.$$

$$\int_3^{+\infty} f(x)\,dx = \frac{36}{e}.$$

**Significato geometrico:** il valore $\dfrac{36}{e}$ rappresenta l'area della regione di piano illimitata compresa tra il grafico di $f(x) = 2x\,e^{-x/3}$ e l'asse $x$ per $x \ge 3$ (dove $f$ è positiva).

---

*Fonte:* [📄 PDF p.139](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
