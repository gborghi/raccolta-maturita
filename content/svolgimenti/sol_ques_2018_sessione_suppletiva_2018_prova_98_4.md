---
title: 2018 Sessione suppletiva — Prova — Quesito 4 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_98_4
of_item: ques_2018_sessione_suppletiva_2018_prova_98_4
prova_id: prova_2018_sessione_suppletiva_2018_prova_98
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_98_4|2018 Sessione suppletiva — Prova — Quesito 4]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_98|2018 Sessione suppletiva — Prova]]

**Formula di riduzione** $I_n = \int_0^{\pi/2}\!\cos^n x\,dx$.

Integrazione per parti con $u = \cos^{n-1}x$, $dv = \cos x\,dx$:

$$I_n = \Bigl[\cos^{n-1}x\,\sin x\Bigr]_0^{\pi/2} + (n-1)\int_0^{\pi/2}\!\cos^{n-2}x\,\sin^2 x\,dx = 0 + (n-1)(I_{n-2} - I_n).$$

$$n\,I_n = (n-1)I_{n-2} \implies \boxed{I_n = \frac{n-1}{n}\,I_{n-2}.} \quad \checkmark$$

**Calcolo di $I_4$:**

$$I_4 = \frac{3}{4}\,I_2 = \frac{3}{4}\cdot\frac{1}{2}\,I_0 = \frac{3}{8}\cdot\frac{\pi}{2} = \boxed{\frac{3\pi}{16}.}$$

---

*Fonte:* [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
