---
title: 2018 Sessione suppletiva — Prova (Sportiva) — Quesito 1 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_31_1
of_item: ques_2018_sessione_suppletiva_2018_prova_31_1
prova_id: prova_2018_sessione_suppletiva_2018_prova_31
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_31_1|2018 Sessione suppletiva — Prova (Sportiva) — Quesito 1]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_31|2018 Sessione suppletiva — Prova (Sportiva)]]

**Dimostrare che il volume di un cilindro inscritto in un cono è minore della metà del volume del cono.**

Indichiamo con $h$ ed $r$ l'altezza ed il raggio di base del cono e cerchiamo il cilindro inscritto di volume massimo. Basterà dimostrare che tale volume è minore della metà del volume del cono.

Indicata con $x$ la distanza della base superiore del cilindro dal vertice del cono si ha:

$$V(\text{cilindro}) = \pi \cdot FG^2 \cdot (h - x)$$

Troviamo $FG$, raggio del cilindro, in funzione di $x$:

$$AH : FG = VH : VF, \qquad r : FG = h : x, \qquad FG = \frac{x \cdot r}{h}$$

Quindi:

$$V(\text{cilindro}) = \pi \cdot \left(\frac{x \cdot r}{h}\right)^2 \cdot (h - x) = \frac{\pi r^2}{h^2} \cdot x^2 \cdot (h - x)$$

Tale volume è massimo se lo è:

$$y = x^2 \cdot (h - x), \quad 0 \le x \le h$$

**Metodo delle derivate:**

$$y' = 2x(h - x) - x^2 \ge 0 \iff -3x^2 + 2hx \ge 0, \quad 0 \le x \le \frac{2}{3}h$$

La funzione è quindi crescente per $0 \le x < \dfrac{2}{3}h$ e decrescente per $\dfrac{2}{3}h < x \le h$: il volume è massimo quando $x = \dfrac{2}{3}h$.

Per tale valore di $x$ l'altezza del cilindro è $h - x = \dfrac{1}{3}h$.

Il cilindro di volume massimo è quindi quello la cui altezza è un terzo dell'altezza del cono. Pertanto il volume massimo del cilindro è:

$$V_{\max} = \frac{\pi r^2}{h^2} \cdot \frac{4}{9}h^2 \cdot \frac{1}{3}h = \frac{4}{27}\pi r^2 h$$

Il volume del cono è:

$$V = \frac{1}{3}\pi r^2 h$$

Deve essere:

$$\frac{4}{27}\pi r^2 h < \frac{1}{2}\left(\frac{1}{3}\pi r^2 h\right), \quad \text{cioè} \quad \frac{4}{27} < \frac{1}{6}: \quad \text{vero.}$$

**Per via elementare:**

Dobbiamo trovare il massimo di $y = x^2 \cdot (h - x)$, con $0 \le x \le h$.

Ricordiamo che se $a + b = \text{costante}$ il prodotto di due potenze di $a$ e $b$ è massimo quando le basi sono proporzionali agli esponenti. Nel nostro caso: $a = x$ e $b = h - x$.

Quindi $x^2 \cdot (h - x)$ è massimo se:

$$\frac{x}{2} = \frac{h - x}{1}, \quad x = 2h - 2x, \quad x = \frac{2}{3}h.$$

---

*Fonte:* [📄 PDF p.48](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
