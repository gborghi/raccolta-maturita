---
title: 2018 Sessione suppletiva — Prova — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_98_7
of_item: ques_2018_sessione_suppletiva_2018_prova_98_7
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

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_98_7|2018 Sessione suppletiva — Prova — Quesito 7]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_98|2018 Sessione suppletiva — Prova]]

Curve $\gamma_1\colon y = x^2 + 1$ e $\gamma_2\colon y = -x^2 + 8x - 9$; retta $t$ tangente a entrambe.

**Tangente a $\gamma_1$ in $(a, a^2+1)$:** $t\colon y = 2ax - a^2 + 1$.

**Tangente a $\gamma_2$ in $(b, -b^2+8b-9)$:** $t\colon y = (-2b+8)x + b^2 - 9$.

Sistema:

$$2a = -2b+8 \implies a+b = 4, \quad -a^2+1 = b^2-9 \implies (b-a)(b+a) = 10.$$

$(b-a)\cdot 4 = 10 \Rightarrow b - a = \tfrac{5}{2}$. Quindi $a = \tfrac{3}{4}$, $b = \tfrac{13}{4}$.

$$\boxed{t\colon\; y = \frac{3}{2}x + \frac{7}{16}.}$$

**Area delimitata da $\gamma_1$, $\gamma_2$ e $t$.**

In $x = 2$: $\gamma_1(2) = 5 > \gamma_2(2) = 3$, quindi $\gamma_1 > \gamma_2$ sull'intervallo $[\tfrac{3}{4}, \tfrac{13}{4}]$ (le parabole non si intersecano, discriminante $< 0$).

$$A = \int_{\frac{3}{4}}^{\frac{13}{4}}\!\bigl[\gamma_1(x) - \gamma_2(x)\bigr]dx = \int_{\frac{3}{4}}^{\frac{13}{4}}\!(2x^2 - 8x + 10)\,dx.$$

$$= \left[\frac{2x^3}{3} - 4x^2 + 10x\right]_{\frac{3}{4}}^{\frac{13}{4}}.$$

In $x = \tfrac{13}{4}$:

$$\frac{2}{3}\cdot\frac{2197}{64} - 4\cdot\frac{169}{16} + 10\cdot\frac{13}{4} = \frac{2197}{96} - \frac{169}{4} + \frac{65}{2} = \frac{2197}{96} - \frac{4056}{96} + \frac{3120}{96} = \frac{1261}{96}.$$

In $x = \tfrac{3}{4}$:

$$\frac{2}{3}\cdot\frac{27}{64} - 4\cdot\frac{9}{16} + 10\cdot\frac{3}{4} = \frac{9}{32} - \frac{9}{4} + \frac{15}{2} = \frac{9}{32} - \frac{72}{32} + \frac{240}{32} = \frac{177}{32}.$$

$$A = \frac{1261}{96} - \frac{177}{32} = \frac{1261}{96} - \frac{531}{96} = \frac{730}{96} = \boxed{\frac{365}{48} \approx 7{,}60\ \text{u.a.}}$$

---

*Fonte:* [📄 PDF p.98](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
