---
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Quesito 4 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2024_2_32_4
of_item: ques_simzan_simzan_parte3_2024_2_32_4
prova_id: prova_simzan_simzan_parte3_2024_2_32
anno: '2024'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2024_2_32_4|Simulazione Zanichelli 2024 — SimZan parte3 n.2 — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte3_2024_2_32|Simulazione Zanichelli 2024 — SimZan parte3 n.2]]

Dimostra che il volume massimo di una piramide retta a base quadrata inscritta in una sfera è minore di $\frac{1}{3}$ del volume della sfera.

Sia la sfera di raggio $r$. Scegliamo un sistema di riferimento con centro nella sfera. Sia $x$ la distanza del centro $O$ dalla base della piramide ($0 < x < 2r$); l'altezza della piramide è $h = r + x$ e il raggio della base $\rho = \sqrt{r^2 - x^2}$.

L'apotema della base quadrata è $\rho$, quindi il lato del quadrato è $l = \rho\sqrt{2} = \sqrt{2(r^2-x^2)}$.

Il volume della piramide:

$$V(x) = \frac{1}{3} l^2 h = \frac{1}{3} \cdot 2(r^2-x^2) \cdot (r+x) = \frac{2}{3}(r-x)(r+x)^2.$$

*(Nota: si è posto $h = r + x$ dove $x$ è la distanza del centro dalla base, con vertice opposto sul bordo della sfera)*

Per semplicità, poniamo $r = 1$:

$$V(x) = \frac{2}{3}(1-x)(1+x)^2 \quad \text{per } 0 < x < 1 \text{ (vertex sopra l'equatore)}.$$

*(In realtà il parametro $x$ varia in $(-r, r)$ e nella trattazione si usa $V(x) = \frac{2}{3}x(2-x)^2$ con $0 < x < 2$; poniamo $r=1$ — vedi PDF p.62)*

Derivata prima:

$$V'(x) = \frac{2}{3}\left[(2-x)^2 + x \cdot 2(2-x)(-1)\right] = \frac{2}{3}(2-x)(2-3x).$$

$V'(x) = 0 \Rightarrow x = 2$ (fuori dal dominio) o $x = \frac{2}{3}$.

$V\!\left(\frac{2}{3}\right) = \frac{2}{3} \cdot \frac{2}{3} \cdot \left(\frac{4}{3}\right)^2 = \frac{4}{9} \cdot \frac{16}{9} = \frac{64}{81}.$

Il rapporto tra il volume massimo della piramide e il volume della sfera:

$$\frac{V_{\max}}{V_{\text{sfera}}} = \frac{\frac{64}{81}}{\frac{4\pi}{3}} = \frac{64}{81} \cdot \frac{3}{4\pi} = \frac{16}{27\pi} \approx 0{,}1886 < \frac{1}{3},$$

quindi è dimostrato che il volume massimo di una piramide retta a base quadrata inscritta nella sfera è minore di $\frac{1}{3}$ del volume della sfera. $\square$

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
