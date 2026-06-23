---
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 8 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2016_17_164_8
of_item: ques_simzan_simzan_parte1_2016_17_164_8
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2016_17_164_8|Simulazione Zanichelli 2016 — SimZan parte1 n.17 — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte1_2016_17_164|Simulazione Zanichelli 2016 — SimZan parte1 n.17]]

**Un architetto sta progettando una nuova sala per concerti; la pianta dell'edificio è la regione $R$ del piano cartesiano $Oxy$ compresa tra il grafico della funzione**

$$f(x) = 40 - \frac{9}{5}x^2$$

**e l'asse $x$, con $x \in [-20, 20]$; le sezioni con piani ortogonali all'asse $x$ sono rettangoli di altezza $h(x) = \frac{1}{f(x)}$. Rappresenta la regione $R$ e calcola la sua area; calcola poi il volume complessivo dello stabile.**

*(grafico — vedi PDF p.168)*

**Zeri di $f(x)$:**

$$40 - \frac{9}{5}x^2 = 0 \implies x^2 = \frac{200}{9} \implies x = \pm\frac{10\sqrt{2}}{3} \approx \pm 4{,}71\,\text{m}.$$

**Area della regione $R$** (tra il grafico e l'asse $x$):

$$\text{Area}(R) = \int_{-\frac{10\sqrt{2}}{3}}^{\frac{10\sqrt{2}}{3}} \left(40 - \frac{9}{5}x^2\right)dx.$$

Per simmetria:

$$= 2\int_0^{\frac{10\sqrt{2}}{3}} \left(40 - \frac{9}{5}x^2\right)dx = 2\left[40x - \frac{3}{5}x^3\right]_0^{\frac{10\sqrt{2}}{3}}.$$

Sia $L = \frac{10\sqrt{2}}{3}$; allora $L^2 = \frac{200}{9}$ e $L^3 = \frac{1000\sqrt{2}}{27}$:

$$= 2\left(40\cdot\frac{10\sqrt{2}}{3} - \frac{3}{5}\cdot\frac{1000\sqrt{2}}{27}\right) = 2\left(\frac{400\sqrt{2}}{3} - \frac{200\sqrt{2}}{9}\right).$$

$$= 2\cdot\sqrt{2}\left(\frac{400}{3} - \frac{200}{9}\right) = 2\sqrt{2}\cdot\frac{1200 - 200}{9} = 2\sqrt{2}\cdot\frac{1000}{9} = \frac{2000\sqrt{2}}{9}\,\text{m}^2.$$

**Volume del solido:**

Le sezioni ortogonali all'asse $x$ sono rettangoli di base $f(x)$ (larghezza nella direzione $y$) e altezza $h(x) = \frac{1}{f(x)}$ (nella direzione verticale $z$). L'area di ciascuna sezione è:

$$A(x) = f(x)\cdot h(x) = f(x)\cdot\frac{1}{f(x)} = 1\,\text{m}^2.$$

Il volume:

$$V = \int_{-\frac{10\sqrt{2}}{3}}^{\frac{10\sqrt{2}}{3}} A(x)\,dx = \int_{-\frac{10\sqrt{2}}{3}}^{\frac{10\sqrt{2}}{3}} 1\,dx = \frac{20\sqrt{2}}{3}\,\text{m}^3.$$

---

*Fonte:* [📄 PDF p.164](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
