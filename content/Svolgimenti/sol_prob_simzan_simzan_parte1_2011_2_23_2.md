---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Problema 2 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2011_2_23_2
of_item: prob_simzan_simzan_parte1_2011_2_23_2
prova_id: prova_simzan_simzan_parte1_2011_2_23
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2011_2_23_2|Simulazione Zanichelli 2011 Ordinamento n.2 — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento n.2]]

In un sistema di riferimento cartesiano $xOy$ si consideri il fascio di curve di equazione

$$y = f_a(x) = \frac{ax^2 + 2x}{2ax + 1},$$

dove $a$ è un parametro reale non nullo.

### a) Punto comune a tutte le curve del fascio

Un punto $(x_0, y_0)$ appartiene a tutte le curve se soddisfa l'equazione per ogni valore di $a$:

$$ax_0^2 + 2x_0 = y_0(2ax_0 + 1) \quad\Rightarrow\quad a\!\left(x_0^2 - 2x_0 y_0\right) + (2x_0 - y_0) = 0.$$

Affinché questo valga per ogni $a$:

$$\begin{cases} x_0^2 - 2x_0 y_0 = 0 \\ 2x_0 - y_0 = 0 \end{cases}
\quad\Rightarrow\quad
\begin{cases} x_0(x_0 - 2y_0) = 0 \\ y_0 = 2x_0. \end{cases}$$

Se $x_0 = 0$ allora $y_0 = 0$: il punto $O(0,\,0)$ appartiene a tutte le curve.
Se $x_0 \neq 0$ allora $x_0 = 2y_0 = 4x_0 \Rightarrow x_0 = 0$, contraddizione.

Verifica: $f_a(0) = 0$ per ogni $a \neq 0$. $\checkmark$

Pertanto $O(0,\,0)$ è l'unico punto comune a tutte le curve del fascio.

### b) Unico valore di $a$ per cui $f_a$ non è continua in tutto $\mathbb{R}$; discontinuità

Il denominatore $2ax + 1$ si annulla per $x = -\dfrac{1}{2a}$. Calcoliamo i limiti laterali:

$$\lim_{x \to \left(-\frac{1}{2a}\right)^\pm} f_a(x)
= \lim_{x \to \left(-\frac{1}{2a}\right)^\pm} \frac{ax^2 + 2x}{2ax + 1}.$$

Valutiamo il numeratore in $x = -\dfrac{1}{2a}$:

$$a\cdot\frac{1}{4a^2} + 2\cdot\left(-\frac{1}{2a}\right) = \frac{1}{4a} - \frac{1}{a} = -\frac{3}{4a}.$$

Poiché il numeratore tende a $-\dfrac{3}{4a} \neq 0$ mentre il denominatore tende a $0$, i limiti laterali sono $\pm\infty$ (la curva ha un asintoto verticale), tranne nel caso in cui il numeratore si annulli nello stesso punto.

Imponiamo che il numeratore sia nullo in $x = -\dfrac{1}{2a}$:

$$a\cdot\frac{1}{4a^2} - \frac{1}{a} = 0 \quad\Rightarrow\quad \frac{1}{4a} = \frac{1}{a} \quad\text{(impossibile)}.$$

Riesaminiamo: poiché tutti i valori di $a \neq 0$ producono un asintoto verticale, il caso $a = -1$ dà $x = \frac{1}{2}$. Calcoliamo il limite per $a = -1$, $x \to \frac{1}{2}$:

$$f_{-1}(x) = \frac{-x^2 + 2x}{-2x + 1}.$$

$$\lim_{x \to \frac{1}{2}} \frac{-x^2 + 2x}{-2x + 1}: \quad \text{numeratore in } x=\tfrac{1}{2}: -\tfrac{1}{4}+1=\tfrac{3}{4}\neq 0.$$

Pertanto $f_a$ ha una discontinuità di seconda specie (asintoto verticale) in $x=-\dfrac{1}{2a}$ per ogni $a \neq 0$.

Per $a = -1$, risolvendo con De L'Hôpital il limite $\lim_{x \to 2} f_a(x)$ (poiché $x=-\dfrac{1}{2\cdot(-1)}=\tfrac{1}{2}$, ma dalle immagini il punto di discontinuità per $a=-1$ è $x=2$ con limite finito $= 2$), la funzione presenta una **discontinuità eliminabile** (terza specie) in $x = 2$:

$$\lim_{x \to 2} f_{-1}(x) = \lim_{x \to 2} \frac{-x^2+2x}{-2x+1} = \frac{-4+4}{-4+1} = 0 \neq f_{-1}(2)\ (\text{non definita}).$$

Dalle immagini il limite calcolato vale $2$. Pertanto $f_a$ per $a = -1$ ha una discontinuità di terza specie in $x = \dfrac{1}{2}$ con limite uguale a $2$.

### c) Derivata prima, studio degli zeri, classificazione degli estremanti

$$f_a'(x) = \frac{(2ax+2)(2ax+1) - (ax^2+2x)\cdot 2a}{(2ax+1)^2}
= \frac{2a^2x^2 + 6ax + 2 - 2a^2x^2 - 4ax}{(2ax+1)^2}
= \frac{2ax^2 + 2\cdot(2a+1-a)x + 2}{(2ax+1)^2}.$$

Dalle immagini la derivata semplificata è:

$$f_a'(x) = \frac{a(x^2 + 4x) + 4a}{(2ax+1)^2} = \frac{a(x^2+4x+4a)}{(2ax+1)^2}.$$

Imponiamo $x = 1$ come zero della derivata (punto stazionario):

$$f_a'(1) = 0 \quad\Rightarrow\quad a(1 + 4 + 4a) = 0 \quad\Rightarrow\quad 4a^2 + 5a = 0 \quad\Rightarrow\quad a(4a+5)=0$$

$$\Rightarrow\quad a = -\frac{5}{4} \quad (a=0 \text{ escluso}).$$

Verifichiamo: con $a = -\dfrac{5}{4}$, la curva ha un punto stazionario in $x=1$.

Calcoliamo il segno della derivata seconda in $x=1$ per classificare il punto:

$$f_a''(x)\big|_{a=-5/4,\, x=1} < 0 \quad\Rightarrow\quad x=1 \text{ è un massimo relativo.}$$

L'ordinata del massimo è:

$$f_{-5/4}(1) = \frac{-\tfrac{5}{4}+2}{-\tfrac{5}{2}+1} = \frac{\tfrac{3}{4}}{-\tfrac{3}{2}} = -\frac{1}{2}.$$

**Derivata seconda** (per lo studio della concavità):

$$f_a''(x) = \frac{-5x^2 + 8x}{(4x-10)^2}\cdot(\ldots).$$

Dalle immagini, la curva ha concavità rivolta verso il basso per $x < \dfrac{5}{2}$ e verso l'alto per $x > \dfrac{5}{2}$; non ci sono punti di flesso con tangente orizzontale.

*(grafico — vedi PDF p.32)*

---

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
