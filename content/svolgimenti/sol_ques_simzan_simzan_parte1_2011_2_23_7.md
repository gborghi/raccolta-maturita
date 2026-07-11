---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_2_23_7
of_item: ques_simzan_simzan_parte1_2011_2_23_7
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_2_23_7|Simulazione Zanichelli 2011 Ordinamento n.2 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento n.2]]

**Testo:** Calcolare il volume del solido generato dalla rotazione di $180°$, rispetto alla retta $y$ di equazione $y = \dfrac{x}{2}$, dell'arco di parabola $y^2 - 4y + 3 = 0$ avente per estremi i punti che ha in comune con la retta $y = x$.

Troviamo prima i punti di intersezione tra la parabola $y = x^2 - 2y + 3$ (riscritta) e la retta $y = x$:

$$\begin{cases} x^2 - 4y + 3 = 0 \\ y = x \end{cases}
\quad\Rightarrow\quad x^2 - 4x + 3 = 0 \quad\Rightarrow\quad (x-1)(x-3)=0,$$

quindi $A = (1,\,1)$ e $B = (3,\,3)$.

Eseguiamo la traslazione $t_1: x' = x - 2$, $y' = y - 2$ che porta il punto medio $M(2,\,2)$ nell'origine. La parabola diventa:

$$x'^2 - 2y' - 1 = 0 \quad\Rightarrow\quad y' = \frac{x'^2 - 1}{2}.$$

Il volume del solido di rotazione di $180°$ dell'arco di parabola rispetto all'asse $y'$ (corrispondente alla retta $y = x$ traslata) si calcola come:

$$V = \frac{\pi}{3}\int_{-1}^{1}\!\left(\frac{x'^2-1}{2}\right)^2 dx' + \ldots$$

Dalle immagini il risultato è:

$$V = \frac{\pi}{3}\left[\frac{y^5}{5} - y^4 + 2y^3 - 2y^2 + y\right]_{0}^{2} = \frac{\pi}{3}\cdot\frac{16}{5} = \frac{16\pi}{15}.$$

---

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
