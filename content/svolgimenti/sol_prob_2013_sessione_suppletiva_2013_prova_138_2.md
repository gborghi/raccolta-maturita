---
title: 2013 Suppletiva — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_sessione_suppletiva_2013_prova_138_2
of_item: prob_2013_sessione_suppletiva_2013_prova_138_2
prova_id: prova_2013_sessione_suppletiva_2013_prova_138
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_sessione_suppletiva_2013_prova_138_2|2013 Suppletiva — Prova — Problema 2]] · **Prova:** [[Prove/2013_sessione_suppletiva_2013_prova_138|2013 Suppletiva — Prova]]

*(Corso di ordinamento M557)*

**Testo.** Trapezio $ABCD$ con base maggiore $AB = 4\,\text{m}$, base minore $DC = 1\,\text{m}$, altezza $h = 3\,\text{m}$, $\tan(\widehat{DAB}) = \dfrac{3}{2}$.

### Punto 1 — Aree dei quattro triangoli

Si pone un sistema di assi con $A$ nell'origine e $B$ sull'asse $x$. Dalla condizione $\tan(\widehat{DAB}) = 3/2$ e altezza $h = 3$, la proiezione orizzontale di $AD$ è $h/\tan(\widehat{DAB}) = 2$. Quindi:

$$A = (0,0),\quad B = (4,0),\quad D = (2,3),\quad C = (3,3).$$

La diagonale $AC$ divide il trapezio in due triangoli:

$$S(\triangle ABC) = \tfrac{1}{2} \cdot AB \cdot h = \tfrac{1}{2}\cdot 4 \cdot 3 = 6\,\text{m}^{2}, \quad S(\triangle ACD) = \tfrac{1}{2}\cdot DC \cdot h = \tfrac{1}{2}\cdot 1 \cdot 3 = \tfrac{3}{2}\,\text{m}^{2}.$$

Il punto medio $M$ di $AC$ è $M = \left(\dfrac{3}{2}, \dfrac{3}{2}\right)$. I segmenti $MB$ e $MD$ suddividono ulteriormente: ogni triangolo viene dimezzato dal mediano, quindi le quattro aree sono:

$$S_1 = S_2 = 3\,\text{m}^{2}, \quad S_3 = S_4 = \frac{3}{4}\,\text{m}^{2}.$$

### Punto 2 — Angoli del trapezio

$$\widehat{DAB} = \arctan\!\left(\frac{3}{2}\right) \approx 56°19'.$$

I lati obliqui: $AD = \sqrt{4+9} = \sqrt{13}$, $BC = \sqrt{1+9} = \sqrt{10}$.

$$\widehat{ABC} = \arctan(3) \approx 71°34'.$$

Gli angoli alle basi superiori sono supplementari degli angoli alle basi inferiori (trapezio con basi parallele):

$$\widehat{ADC} = 180° - 56°19' \approx 123°41', \quad \widehat{BCD} = 180° - 71°34' \approx 108°26'.$$

### Punto 3 — Parabola $\Gamma$ per $B$, $C$, $D$

L'asse di $\Gamma$ è perpendicolare alle basi (orizzontali), quindi la parabola ha asse verticale: $y = ax^2 + bx + c$.

Condizioni su $B=(4,0)$, $C=(3,3)$, $D=(2,3)$:

$$\begin{cases} 16a + 4b + c = 0 \\ 9a + 3b + c = 3 \\ 4a + 2b + c = 3 \end{cases}$$

$(C)-(D)$: $5a + b = 0 \Rightarrow b = -5a$.

$(B)-(C)$: $7a + b = -3 \Rightarrow 7a - 5a = -3 \Rightarrow a = -\dfrac{3}{2}$.

Quindi $b = \dfrac{15}{2}$, e da $(D)$: $c = 3 - 4\cdot\!\left(-\tfrac{3}{2}\right) - 2\cdot\tfrac{15}{2} = 3 + 6 - 15 = -6$.

$$\boxed{\Gamma\colon y = -\frac{3}{2}x^{2} + \frac{15}{2}x - 6}$$

*(Verifica: $y(4)=0$ ✓, $y(3)=3$ ✓, $y(2)=3$ ✓)*

### Punto 4 — Aree delle due regioni

La parabola passa per $B$, $C$, $D$ e divide il trapezio in due regioni. L'area totale del trapezio è:

$$S_{\text{trap}} = \frac{(AB + DC)}{2}\cdot h = \frac{5}{2}\cdot 3 = \frac{15}{2}\,\text{m}^{2}.$$

L'area compresa tra la parabola $\Gamma$ e la base maggiore $AB$ (asse $x$), sull'intervallo $[2,4]$ dove $\Gamma$ è nel trapezio:

$$S_\Gamma = \int_{2}^{4}\!\left(-\frac{3}{2}x^{2}+\frac{15}{2}x-6\right)dx = \left[-\frac{x^{3}}{2}+\frac{15x^{2}}{4}-6x\right]_{2}^{4}.$$

$$= \left(-32+60-24\right) - \left(-4+15-12\right) = 4 - (-1) = 5\,\text{m}^{2}.$$

Le due aree sono:

$$S_1 = 5\,\text{m}^{2}, \qquad S_2 = \frac{15}{2} - 5 = \frac{5}{2}\,\text{m}^{2}.$$

---

*Fonte:* [📄 PDF p.138](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
