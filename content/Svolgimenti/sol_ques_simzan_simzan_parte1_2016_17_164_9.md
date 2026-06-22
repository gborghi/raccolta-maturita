---
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 9 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2016_17_164_9
of_item: ques_simzan_simzan_parte1_2016_17_164_9
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2016_17_164_9|Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 9]] · **Prova:** [[Prove/simzan_simzan_parte1_2016_17_164|Simulazione Zanichelli 2016 — SimZan parte1 #17]]

**Determina l'espressione analitica della funzione $f(x)$ sapendo che il suo grafico è tangente alla parabola di quarto grado nell'intervallo $[0,8]$. Dimostra, in generale, che se $f(x)$ è una funzione pari allora $f'(x)$ è dispari, e viceversa.**

**Dimostrazione: funzione pari → derivata dispari**

Sia $f$ pari: $f(-x) = f(x)$ per ogni $x$ nel dominio. Derivando entrambi i membri rispetto a $x$:

$$\frac{d}{dx}[f(-x)] = \frac{d}{dx}[f(x)].$$

Per la regola della catena il membro sinistro vale $f'(-x)\cdot(-1) = -f'(-x)$, quindi:

$$-f'(-x) = f'(x) \implies f'(-x) = -f'(x).$$

Questo significa che $f'$ è una funzione **dispari**. $\square$

**Dimostrazione: funzione dispari → derivata pari**

Sia $f$ dispari: $f(-x) = -f(x)$. Derivando entrambi i membri:

$$-f'(-x) = -f'(x) \implies f'(-x) = f'(x).$$

Quindi $f'$ è una funzione **pari**. $\square$

---

*Fonte:* [📄 PDF p.164](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
