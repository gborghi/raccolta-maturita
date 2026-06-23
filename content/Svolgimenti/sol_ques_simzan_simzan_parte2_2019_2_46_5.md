---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 5 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2019_2_46_5
of_item: ques_simzan_simzan_parte2_2019_2_46_5
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2019_2_46_5|Simulazione Zanichelli 2019 — SimZan parte2 n.2 (Mat+Fisica) — Quesito 5]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 n.2 (Mat+Fisica)]]

Nel diagramma in figura è rappresentata una trasformazione ciclica di un particolare sistema termodinamico. Il tratto $AB$ è lineare; il tratto $BC$ è a $V$ costante; nel tratto $CA$ sussiste tra $p$ e $V$ la relazione $p = \dfrac{\alpha}{V+\beta}$, con $\alpha$ e $\beta$ costanti reali.

*(grafico — vedi PDF p.50)*

Dai valori letti sul grafico: $A=(1, 40)$, $B=(3, 12)$, $C=(3, 20)$ (con $p$ in kPa e $V$ in dm³).

**Determinazione di $\alpha$ e $\beta$:**

Sostituendo i valori dei punti $C$ e $A$ nella relazione $p = \dfrac{\alpha}{V+\beta}$:

$$\begin{cases} 20 = \dfrac{\alpha}{3+\beta} \\ 40 = \dfrac{\alpha}{1+\beta} \end{cases}$$

Dividendo la seconda per la prima: $2 = \dfrac{3+\beta}{1+\beta}$, quindi $2+2\beta = 3+\beta \Rightarrow \beta = 1$.

Quindi: $\alpha = 40(1+1) = 80$ (unità: kPa·dm³).

**Calcolo del lavoro totale $W_t$ nel ciclo:**

$$W_t = W_{AB} + W_{BC} + W_{CA}$$

- $W_{BC} = 0$ (trasformazione isocora).

- $W_{AB}$: il tratto è lineare da $A=(1, 40)$ a $B=(3, 12)$, quindi il lavoro è l'area del trapezio:

$$W_{AB} = \frac{(40+12)}{2}\cdot(3-1) = 26\cdot 2 = 52\;\text{kPa}\cdot\text{dm}^3 = 52\;\text{J}$$

- $W_{CA}$: percorso da $C=(3, 20)$ ad $A=(1, 40)$ con $p = \dfrac{80}{V+1}$:

$$W_{CA} = \int_3^1 \frac{80}{V+1}\,dV = 80\bigl[\ln|V+1|\bigr]_3^1 = 80(\ln 2 - \ln 4) = 80\ln\frac{1}{2} = -80\ln 2 \approx -55\;\text{J}$$

Quindi:

$$W_t = 52 + 0 - 55 \approx -3\;\text{J}$$

Il lavoro totale compiuto dal sistema in un ciclo è $W_t \approx -3\;\text{J}$ (negativo: il ciclo è percorso in senso antiorario sul piano $pV$, il sistema riceve lavoro dall'esterno).

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
