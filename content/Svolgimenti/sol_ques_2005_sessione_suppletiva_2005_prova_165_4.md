---
title: 2005 Suppletiva — Prova — Quesito 4 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_sessione_suppletiva_2005_prova_165_4
of_item: ques_2005_sessione_suppletiva_2005_prova_165_4
prova_id: prova_2005_sessione_suppletiva_2005_prova_165
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_165_4|2005 Suppletiva — Prova — Quesito 4]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_165|2005 Suppletiva — Prova]]

**Quesito PNI 4 — Cilindro di dato volume e superficie minima.**

Volume $V = 400\text{ cm}^3$, raggio di base $r = x > 0$, altezza $h = \dfrac{V}{\pi x^2} = \dfrac{400}{\pi x^2}$.

Superficie totale:

$$S(x) = 2\pi x h + 2\pi x^2 = 2\pi x \cdot \frac{400}{\pi x^2} + 2\pi x^2 = \frac{800}{x} + 2\pi x^2.$$

Derivata:

$$S'(x) = -\frac{800}{x^2} + 4\pi x.$$

$S'(x) = 0$ quando $4\pi x^3 = 800$, cioè:

$$x^3 = \frac{200}{\pi} \implies x = \sqrt[3]{\frac{200}{\pi}}.$$

Poiché $S'(x) < 0$ per $x < x_{\min}$ e $S'(x) > 0$ per $x > x_{\min}$, c'è un **minimo assoluto** in $x_{\min} = \sqrt[3]{\dfrac{200}{\pi}}$.

Per questo valore, $h = \dfrac{400}{\pi x^2} = \dfrac{400}{\pi} \cdot x^{-2}$; con $x^3 = \dfrac{200}{\pi}$ si ottiene $x^2 = \left(\dfrac{200}{\pi}\right)^{2/3}$ e $h = \dfrac{400}{\pi} \cdot \left(\dfrac{\pi}{200}\right)^{2/3} = 2x$. Quindi $h = 2x = 2r$: si tratta del **cilindro equilatero** (diametro uguale all'altezza).

$$x_{\min} \approx 3{,}99\text{ cm}, \quad h \approx 7{,}99\text{ cm}.$$

Superficie minima:

$$S_{\min} = \frac{800}{x_{\min}} + 2\pi x_{\min}^2 = 3 \cdot 2\pi x_{\min}^2 \approx 300{,}3\text{ cm}^2.$$

---

*Fonte:* [📄 PDF p.179](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
