---
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2016_17_164_3
of_item: ques_simzan_simzan_parte1_2016_17_164_3
prova_id: prova_simzan_simzan_parte1_2016_17_164
anno: '2016'
pdf: SimZan_parte1.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2016
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2016_17_164_3|Simulazione Zanichelli 2016 — SimZan parte1 n.17 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte1_2016_17_164|Simulazione Zanichelli 2016 — SimZan parte1 n.17]]

**Sia data la seguente famiglia di funzioni, in cui $a, b, c, d$ sono costanti reali:**

$$F(x) = \begin{cases} ax^2 & \text{se } 0 \le x \le 2 \\ -\frac{1}{2}x + b & \text{se } 2 < x \le 8 \end{cases}$$

**con $F$ continua. Trovare i valori di $a$ e $b$ tali che $F$ abbia derivata continua, e poi $c = 2$, $d = -4$.

Considerando la famiglia di funzioni:
$$F(x) = \begin{cases} ax^2 & \text{se } 0 \le x \le 2 \\ -\frac{1}{2}x + b & \text{se } 2 < x \le 8 \end{cases}$$

**Continuità in $x = 2$:**
$$\lim_{x \to 2^-} F(x) = 4a = \lim_{x \to 2^+} F(x) = -1 + b.$$
$$\Rightarrow 4a = b - 1. \quad (*)$$

**Derivabilità in $x = 2$:**
$$F'(x) = 2ax \quad (x < 2), \qquad F'(x) = -\frac{1}{2} \quad (x > 2).$$
$$\lim_{x \to 2^-} F'(x) = 4a = -\frac{1}{2} \implies a = -\frac{1}{8}.$$

Sostituendo in $(*)$:
$$4\cdot\left(-\frac{1}{8}\right) = b - 1 \implies -\frac{1}{2} = b - 1 \implies b = \frac{1}{2}.$$

---

*Fonte:* [📄 PDF p.164](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
