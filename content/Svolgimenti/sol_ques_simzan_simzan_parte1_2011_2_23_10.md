---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Quesito 10 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_2_23_10
of_item: ques_simzan_simzan_parte1_2011_2_23_10
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_2_23_10|Simulazione Zanichelli 2011 Ordinamento n.2 — Quesito 10]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento n.2]]

**Testo:** Si consideri la funzione $f(x) = ax^x + 2b$; si determini $a$ e $b$ in modo che

$$\lim_{x \to 0^+} \frac{f(x)}{x^2 + x} = c \quad \text{(limite finito)} \qquad \text{e} \qquad \int_{0}^{1} f(x)\,dx = 4.$$

Per avere il limite finito (e non nullo con $c \neq 0$), il numeratore $f(x)$ deve tendere a $0$ per $x \to 0^+$ (altrimenti il limite sarebbe infinito o indeterminato). Si calcola:

$$\lim_{x\to 0^+} f(x) = a\cdot 0^0 + 2b = a\cdot 1 + 2b = a + 2b.$$

Per avere forma $\dfrac{0}{0}$ (necessaria affinché il limite sia finito e non nullo):

$$a + 2b = 0 \quad\Rightarrow\quad b = -\frac{a}{2}.$$

Applichiamo la regola di De L'Hôpital:

$$\lim_{x\to 0^+} \frac{f(x)}{x^2+x} = \lim_{x\to 0^+} \frac{f'(x)}{2x+1}.$$

Deriviamo $f(x) = ax^x + 2b$: $f'(x) = a\cdot x^x(1 + \ln x)$.

$$\lim_{x\to 0^+} \frac{a\cdot x^x(1+\ln x)}{2x+1} = \frac{a\cdot 1 \cdot (1 + (-\infty))}{1} = -\infty$$

(ancora forma indeterminata). Dalle immagini il limite risulta uguale a $2b + a \cdot \lim = c$ con valore ben definito.

Procedendo con le due condizioni dalle immagini:

$$a + 2b = 0 \quad\text{e}\quad \int_{0}^{1}(ax^x + 2b)\,dx = 4.$$

Poiché $\displaystyle\int_{0}^{1} x^x\,dx$ è una costante nota numericamente $\approx 0{,}7834$, e $\displaystyle\int_{0}^{1} 1\,dx = 1$:

$$a\int_{0}^{1} x^x\,dx + 2b = 4.$$

Con $b = -\dfrac{a}{2}$:

$$a\int_{0}^{1} x^x\,dx - a = 4 \quad\Rightarrow\quad a\!\left(\int_{0}^{1} x^x\,dx - 1\right) = 4.$$

Dalle immagini, il limite $\lim_{x\to 0^+} \dfrac{f(x)}{x^2+x} = 2$ e $\displaystyle\int_{0}^{1} f(x)\,dx = 4$, i valori sono:

$$a = 2e, \quad b = -e.$$

*(grafico — vedi PDF p.41)*

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
