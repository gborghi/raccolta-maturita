---
title: 2006 Sessione Ordinaria — Prova (p.65) — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2006_sessione_ordinaria_2006_prova_65_1
of_item: prob_2006_sessione_ordinaria_2006_prova_65_1
prova_id: prova_2006_sessione_ordinaria_2006_prova_65
anno: '2006'
pdf: Prova_Maturita_2006.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2006
---

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_65_1|2006 Sessione Ordinaria — Prova (p.65) — Problema 1]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_65|2006 Sessione Ordinaria — Prova (p.65)]]

Un filo metallico di lunghezza $\lambda$ viene utilizzato per delimitare il perimetro di un'aiuola rettangolare.

**a)** Sia il rettangolo di lati $x$ e $\frac{\lambda}{2} - x$. L'area è:

$$A(x) = x\!\left(\frac{\lambda}{2} - x\right), \quad x \in \left[0, \frac{\lambda}{2}\right]$$

Ponendo $A'(x) = \frac{\lambda}{2} - 2x = 0$ si ottiene $x = \frac{\lambda}{4}$, quindi l'aiuola di area massima è un **quadrato di lato $\frac{\lambda}{4}$**.

**b)** Si taglia il filo in una parte $x$ per il quadrato e una parte $\lambda - x$ per il cerchio. Le due aree sono:

$$A_q = \frac{x^2}{16}, \qquad A_c = \frac{(\lambda - x)^2}{4\pi}$$

La somma è:

$$S(x) = \frac{x^2}{16} + \frac{(\lambda - x)^2}{4\pi}, \quad x \in [0, \lambda]$$

$$S'(x) = \frac{x}{8} - \frac{\lambda - x}{2\pi} = 0 \implies x = \frac{4\lambda}{\pi + 4}$$

Poiché $S''(x) > 0$, si tratta di un minimo. La somma delle aree è **minima** quando la parte per il quadrato misura $\frac{4\lambda}{\pi + 4}$ e quella per il cerchio misura $\frac{\pi\lambda}{\pi + 4}$.

**c)** La somma delle aree è **massima** agli estremi $x = 0$ oppure $x = \lambda$. Si confrontano:

$$S(0) = \frac{\lambda^2}{4\pi}, \qquad S(\lambda) = \frac{\lambda^2}{16}$$

Poiché $\frac{1}{4\pi} > \frac{1}{16}$, il massimo si raggiunge con $x = 0$: tutto il filo viene destinato al cerchio.

**Aumento del 10% delle dimensioni del parallelepipedo:** se le dimensioni sono $a, b, c$, il nuovo volume è:

$$V' = (1{,}1a)(1{,}1b)(1{,}1c) = 1{,}1^3 \cdot abc = 1{,}331\,abc$$

Si ha bisogno di **33,1% di terreno in più**.

---

*Fonte:* [📄 PDF p.65](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
