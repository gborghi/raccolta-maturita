---
title: 2018 Sessione suppletiva — Prova (Sportiva) — Quesito 5 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_31_5
of_item: ques_2018_sessione_suppletiva_2018_prova_31_5
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

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_31_5|2018 Sessione suppletiva — Prova (Sportiva) — Quesito 5]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_31|2018 Sessione suppletiva — Prova (Sportiva)]]

**Con una staccionata lunga 2 metri si vuole recintare una superficie avente la forma di un rettangolo sormontato da una semicirconferenza. Determinare le dimensioni dei lati del rettangolo che consentono di recintare la superficie di area massima.**

*(grafico — vedi PDF p. corrispondente)*

Indicato con $2x$ il lato del rettangolo che coincide con il diametro della semicirconferenza e con $y$ la misura dell'altro lato del rettangolo, la staccionata è formata dai lati $AD$, $AB$ e $BC$ del rettangolo e dalla semicirconferenza di diametro $CD$ (senza diametro), quindi:

$$2x + 2y + \pi x = 2 \quad \Longrightarrow \quad y = 1 - x - \frac{\pi x}{2}$$

Limitazioni di $x$: se $x = 0$ si ha $y = 1$; se $y = 0$ allora $2x + \pi x = 2$, cioè $x = \dfrac{2}{2 + \pi}$. Quindi:

$$0 \le x \le \frac{2}{2 + \pi}$$

L'area della superficie da recintare è:

$$\text{Area} = 2xy + \frac{1}{2}\pi x^2 = 2x\!\left(1 - x - \frac{\pi x}{2}\right) + \frac{1}{2}\pi x^2 = 2x - 2x^2 - \pi x^2 + \frac{1}{2}\pi x^2 = \left(-2 - \frac{\pi}{2}\right)x^2 + 2x =: z$$

La funzione da ottimizzare è una parabola con concavità verso il basso; il massimo si ha nel vertice:

$$x_V = -\frac{b}{2a} = \frac{2}{4 + \pi} < \frac{2}{2 + \pi} \quad \text{(accettabile)}$$

Derivando $z$:

$$z' = \left(-4 - \pi\right)x + 2 \ge 0 \iff x \le \frac{2}{4 + \pi}$$

Quindi $z$ cresce per $0 < x < \dfrac{2}{4 + \pi}$ e decresce per $\dfrac{2}{4 + \pi} < x < \dfrac{2}{2 + \pi}$; è pertanto massima per $x = \dfrac{2}{4 + \pi}$.

L'area massima risulta:

$$\text{Area}_{\max} = \left(-2 - \frac{\pi}{2}\right)\!\left(\frac{2}{4 + \pi}\right)^2 + \frac{4}{4 + \pi} = -\frac{(4+\pi)}{2}\cdot\frac{4}{(4+\pi)^2} + \frac{4}{4+\pi} = -\frac{2}{4+\pi} + \frac{4}{4+\pi} = \frac{2}{4 + \pi}$$

I lati del rettangolo che consentono di recintare l'area massima valgono:

$$AB = 2x = \frac{4}{4 + \pi}, \qquad BC = y = 1 - x - \frac{\pi x}{2} = \frac{2}{4 + \pi}$$

Osserviamo che la base è il doppio dell'altezza.

---

*Fonte:* [📄 PDF p.51](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
