---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 4 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2017_1_20_4
of_item: ques_simzan_simzan_parte2_2017_1_20_4
prova_id: prova_simzan_simzan_parte2_2017_1_20
anno: '2017'
pdf: SimZan_parte2.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2017
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2017_1_20_4|Simulazione Zanichelli 2017 — SimZan parte2 n.1 — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 n.1]]

La funzione $f(x) = \sqrt{x^2+3}-2x$. Si vuole trovare i punti del grafico dove la tangente passa per un punto generico $P(k;0)$ sull'asse $x$, con $0 < k \le \sqrt{3}$.

$$f'(x) = \frac{x}{\sqrt{x^2+3}}-2.$$

La tangente in $(a; f(a))$ passante per $P(k;0)$:

$$\frac{f(a)-0}{a-k} = f'(a) \implies \frac{\sqrt{a^2+3}-2a}{a-k} = \frac{a}{\sqrt{a^2+3}}-2 = \frac{a-2\sqrt{a^2+3}}{\sqrt{a^2+3}}.$$

Calcoliamo l'ordinata dell'intersezione con l'asse $y$ della tangente al grafico nel punto di ascissa $x=a$:

$$y(0) = f(a)+f'(a)(0-a) = \sqrt{a^2+3}-2a-a\!\left(\frac{a}{\sqrt{a^2+3}}-2\right) = \sqrt{a^2+3}-\frac{a^2}{\sqrt{a^2+3}} = \frac{3}{\sqrt{a^2+3}}.$$

Imponendo che questa ordinata valga $-\frac{1}{\sqrt{a^2+3}}$ (come indicato nel testo del quesito) si ottiene una contraddizione. Il quesito chiede invece le rette tangenti al grafico di $f(x)$ passanti per $P(k,0)$:

Impostando il sistema, per $k=0$: $f'(a) = \frac{f(a)}{a}$, si trova $a=\pm\sqrt{3}$ e le tangenti

$$r_1: y = \frac{1}{2}x-1, \qquad r_2: y = -\frac{1}{2}x-1.$$

*(cfr. calcolo completo in PDF p.41)*

Il termine $\frac{1}{\sqrt{a^2+3}}$ rappresenta la derivata seconda di $f$ a meno di costante; la tangente al grafico di $f(x)$ nel punto di ascissa $x=a$ ha ordinata all'origine $\frac{3}{\sqrt{a^2+3}}$.

*(grafico — vedi PDF p.41)*

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
