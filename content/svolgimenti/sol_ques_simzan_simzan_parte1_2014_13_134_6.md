---
title: 'Simulazione Zanichelli 2014 #13 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2014_13_134_6
of_item: ques_simzan_simzan_parte1_2014_13_134_6
prova_id: prova_simzan_simzan_parte1_2014_13_134
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2014
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2014_13_134_6|Simulazione Zanichelli 2014 n.13 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_13_134|Simulazione Zanichelli 2014 n.13]]

Un contenitore di capacità $V$ ha la forma di un cilindro sormontato alle basi da due coni equilateri (con le basi coincidenti con quelle del cilindro). Indichiamo con $r$ il raggio di base e con $h$ l'altezza del cilindro.

*(grafico — vedi PDF p.144)*

Poiché i coni sono equilateri, ciascun cono ha base di raggio $r$ e altezza $h_c = r\sqrt{3}$ (l'altezza del cono equilatero con base $r$ è $r\sqrt{3}$). Il volume del contenitore è:

$$V = \pi r^2 h + 2 \cdot \frac{1}{3}\pi r^2 (r\sqrt{3}) = \pi r^2 h + \frac{2\sqrt{3}}{3}\pi r^3.$$

Da questa ricaviamo $h = \dfrac{V}{\pi r^2} - \dfrac{2\sqrt{3}}{3}r$.

La superficie laterale del cilindro è $2\pi r h$; la superficie laterale di ciascun cono equilatero (con apotema $= 2r$) è $\pi r \cdot 2r = 2\pi r^2$. La superficie totale è quindi:

$$S(r) = 2\pi r h + 2 \cdot 2\pi r^2 = 2\pi r h + 4\pi r^2.$$

Sostituendo $h$:

$$S(r) = 2\pi r \left(\frac{V}{\pi r^2} - \frac{2\sqrt{3}}{3}r\right) + 4\pi r^2 = \frac{2V}{r} - \frac{4\sqrt{3}}{3}\pi r^2 + 4\pi r^2 = \frac{2V}{r} + \pi r^2\!\left(4 - \frac{4\sqrt{3}}{3}\right).$$

Derivando e ponendo $S'(r) = 0$:

$$S'(r) = -\frac{2V}{r^2} + 2\pi r\!\left(4 - \frac{4\sqrt{3}}{3}\right) = 0 \;\longrightarrow\; r^3 = \frac{V}{\pi\!\left(4 - \dfrac{4\sqrt{3}}{3}\right)} = \frac{3V}{4\pi(3-\sqrt{3})}.$$

Il valore ottimale del raggio che minimizza la superficie totale è:

$$r = \sqrt[3]{\frac{3V}{4\pi(3-\sqrt{3})}}.$$

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
