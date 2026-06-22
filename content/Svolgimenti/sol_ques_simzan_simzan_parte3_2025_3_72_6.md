---
title: 'Simulazione Zanichelli 2025 — SimZan parte3 #3 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2025_3_72_6
of_item: ques_simzan_simzan_parte3_2025_3_72_6
prova_id: prova_simzan_simzan_parte3_2025_3_72
anno: '2025'
pdf: SimZan_parte3.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2025
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2025_3_72_6|Simulazione Zanichelli 2025 — SimZan parte3 #3 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte3_2025_3_72|Simulazione Zanichelli 2025 — SimZan parte3 #3]]

Parabola di vertice $A(2;\,0)$ passante per $C(0;\,2)$: $y = \dfrac{1}{2}(x-2)^2$. Quadrato $OABC$.

*(grafico — vedi PDF p.79)*

La retta $x = k$ ($0 < k < 2$) individua le regioni $\mathcal{A}_1$ (sinistra, tra parabola e lato superiore) e $\mathcal{A}_2$ (destra, tra parabola e asse $x$):

$$
\mathcal{A}_1 = \int_0^k\!\left[2 - \tfrac{(x-2)^2}{2}\right]dx, \qquad \mathcal{A}_2 = \int_k^2 \tfrac{(x-2)^2}{2}\,dx.
$$

$$
\mathcal{A}_2 = \frac{(2-k)^3}{6}, \qquad \mathcal{A}_1 = 2k - \frac{(k-2)^3}{6} - \frac{4}{3}.
$$

$$
S(k) = \mathcal{A}_1 + \mathcal{A}_2 = 2k - \frac{(k-2)^3}{3} - \frac{4}{3}.
$$

$$
S'(k) = 2 - (k-2)^2 = 0 \;\Longrightarrow\; k = 2 - \sqrt{2} \in (0,2).
$$

$S''(k) = -2(k-2) > 0$ per $k < 2$: minimo.

$$
\boxed{k = 2 - \sqrt{2}.}
$$

---

*Fonte:* [📄 PDF p.72](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
