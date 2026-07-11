---
title: 'Simulazione Zanichelli 2017 — SimZan parte2 #1 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2017_1_20_6
of_item: ques_simzan_simzan_parte2_2017_1_20_6
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2017_1_20_6|Simulazione Zanichelli 2017 — SimZan parte2 n.1 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte2_2017_1_20|Simulazione Zanichelli 2017 — SimZan parte2 n.1]]

La funzione $f(x) = \int_{\sqrt{x^2+3}}^{x}\frac{e^{at}}{t^2+3}\,dt$ è continua su $\mathbb{R}$, derivabile.

Derivata (per il teorema fondamentale del calcolo, con cambio dei limiti di integrazione):

$$f'(x) = \frac{e^{ax}}{x^2+3}\cdot 1 - \frac{e^{a\sqrt{x^2+3}}}{(\sqrt{x^2+3})^2+3}\cdot\frac{x}{\sqrt{x^2+3}} = \frac{e^{ax}}{x^2+3} - \frac{x\,e^{a\sqrt{x^2+3}}}{\sqrt{x^2+3}(x^2+6)}.$$

Per trovare le rette tangenti al grafico di $f(x)$ con tangente orizzontale in $x=a$, si cercano i valori del parametro $a$. L'ordinata dell'origine della tangente in $x=a$ al grafico di $f$ è:

$$y_0 = f(a) - a\cdot f'(a).$$

Ricaviamo il valore di $a$. Poiché si impone che le tangenti al grafico di $f(x)$ passanti per i punti di ascissa $x=a$ abbiano ordinata all'origine $\frac{1}{\sqrt{a^2+3}}$:

$$r_1: y = \frac{1}{2}x-1, \qquad r_2: y = -\frac{1}{2}x+1 \quad \text{(per } a=-1 \text{ e } a=1\text{)}.$$

*(calcolo dettagliato vedi PDF p.42)*

---

*Fonte:* [📄 PDF p.20](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
