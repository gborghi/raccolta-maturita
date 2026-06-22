---
title: 'Simulazione Zanichelli 2011 PNI #1 — Quesito 2 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_1_2_2
of_item: ques_simzan_simzan_parte1_2011_1_2_2
prova_id: prova_simzan_simzan_parte1_2011_1_2
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_1_2_2|Simulazione Zanichelli 2011 PNI #1 — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_1_2|Simulazione Zanichelli 2011 PNI #1]]

**Cilindro equilatero inscritto in un cono equilatero: probabilità che un punto scelto a caso sulle superfici totali dei due solidi cada sulla superficie laterale del cono.**

Un **cilindro equilatero** ha $h=2r$ (altezza uguale al diametro). Un **cono equilatero** ha la generatrice $l$ uguale al diametro della base: $l=2R$.

Per il cono equilatero con raggio $R$: $l=2R$ e altezza $H=\sqrt{l^2-R^2}=R\sqrt{3}$.

Per trovare $r$ del cilindro equilatero inscritto, usiamo la similitudine nei triangoli assiali:

$$\frac{R-r}{r} = \frac{H}{h} = \frac{R\sqrt{3}}{2r} \;\Rightarrow\; \frac{R-r}{1} = \frac{R\sqrt{3}}{2} \;\Rightarrow\; r = \frac{R}{1+\dfrac{\sqrt{3}}{2}} = \frac{2R}{2+\sqrt{3}}.$$

Le superfici totali:

$$S_{\text{cono}} = \pi R^2 + \pi R l = \pi R^2 + 2\pi R^2 = 3\pi R^2.$$

$$S_{\text{cil}} = 2\pi r h + 2\pi r^2 = 2\pi r(2r)+2\pi r^2 = 6\pi r^2 = 6\pi\cdot\frac{4R^2}{(2+\sqrt{3})^2} = \frac{24\pi R^2}{7+4\sqrt{3}}.$$

La superficie laterale del cono è $S_{l,\text{cono}} = 2\pi R^2$.

La probabilità cercata è:

$$P = \frac{2\pi R^2}{3\pi R^2 + \dfrac{24\pi R^2}{7+4\sqrt{3}}} = \frac{2}{3+\dfrac{24}{7+4\sqrt{3}}} = \frac{2(7+4\sqrt{3})}{3(7+4\sqrt{3})+24} = \frac{2(7+4\sqrt{3})}{21+12\sqrt{3}+24} = \frac{2(7+4\sqrt{3})}{3(15+4\sqrt{3})}.$$

Numericamente: $P = \dfrac{2(7+4\cdot 1{,}732)}{3(15+4\cdot 1{,}732)} \approx \dfrac{2\cdot 13{,}928}{3\cdot 21{,}928} \approx \dfrac{27{,}856}{65{,}784} \approx 0{,}47$.

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
