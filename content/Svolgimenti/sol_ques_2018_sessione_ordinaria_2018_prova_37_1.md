---
title: 2018 Sessione ordinaria — Prova (Sportiva) — Quesito 1 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_ordinaria_2018_prova_37_1
of_item: ques_2018_sessione_ordinaria_2018_prova_37_1
prova_id: prova_2018_sessione_ordinaria_2018_prova_37
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_ordinaria_2018_prova_37_1|2018 Sessione ordinaria — Prova (Sportiva) — Quesito 1]] · **Prova:** [[Prove/2018_sessione_ordinaria_2018_prova_37|2018 Sessione ordinaria — Prova (Sportiva)]]

**Dimostrare che il volume di un cilindro inscritto in un cono è minore della metà del volume del cono.**

Siano $h$ e $r$ l'altezza e il raggio di base del cono. Sia $x$ la distanza della base superiore del cilindro dal vertice. Per similitudine:

$$\rho = \frac{xr}{h} \quad \text{(raggio del cilindro)}.$$

$$V_{\text{cil}}(x) = \pi\rho^2(h-x) = \frac{\pi r^2}{h^2}\,x^2(h-x), \quad 0 \leq x \leq h.$$

Massimizziamo $y(x) = x^2(h-x)$:

$$y'(x) = 2x(h-x) - x^2 = x(2h-3x) = 0 \implies x = \frac{2h}{3}.$$

$y$ cresce per $0 \leq x < \dfrac{2h}{3}$ e decresce per $\dfrac{2h}{3} < x \leq h$: massimo in $x = \dfrac{2h}{3}$.

Il cilindro di volume massimo ha altezza $h - \dfrac{2h}{3} = \dfrac{h}{3}$. Il suo volume è:

$$V_{\max} = \frac{\pi r^2}{h^2}\cdot\frac{4h^2}{9}\cdot\frac{h}{3} = \frac{4}{27}\pi r^2 h.$$

Il volume del cono è $V_{\text{cono}} = \dfrac{1}{3}\pi r^2 h$. Verifichiamo:

$$\frac{4}{27}\pi r^2 h < \frac{1}{2}\cdot\frac{1}{3}\pi r^2 h \iff \frac{4}{27} < \frac{1}{6} \iff 24 < 27. \quad \checkmark$$

**Metodo elementare.** Massimizzare $x^2(h-x)$ con $x+x+(h-x)=h+x$ non dà direttamente una somma costante. Si usa: il prodotto $a^p b^q$ con $a+b = S$ costante è massimo quando $\dfrac{a}{p} = \dfrac{b}{q}$. Con $a = x$ (esponente 2) e $b = h-x$ (esponente 1) e $a+b=h$:

$$\frac{x}{2} = \frac{h-x}{1} \implies x = 2h-2x \implies x = \frac{2}{3}h. \quad \square$$

---

*Fonte:* [📄 PDF p.48](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
