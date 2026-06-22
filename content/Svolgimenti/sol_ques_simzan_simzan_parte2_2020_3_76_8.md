---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 8 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2020_3_76_8
of_item: ques_simzan_simzan_parte2_2020_3_76_8
prova_id: prova_simzan_simzan_parte2_2020_3_76
anno: '2020'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2020
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2020_3_76_8|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica)]]

Un osservatore $B$, solidale con un sistema di riferimento $S'$, si muove con velocità $v_1$ rispetto a un altro osservatore $A$, che si trova in un sistema di riferimento inerziale $S$. Al tempo $t = t' = 0\ \text{s}$ entrambi occupano la posizione spaziale $x = x' = 0\ \text{m}$ e la velocità relativa è rivolta nei semissi positivi dei sistemi. Si considerano i due eventi:

- $E_1$: in cui l'orologio di $A$ indica l'istante $t_1 = 2{,}1 \cdot 10^7\ \text{s}$ e la sua coordinata spaziale in $S$ è $x_1 = -8{,}5 \cdot 10^{15}\ \text{m}$.
- $E_2$: in cui l'orologio di $B$ indica l'istante $t_2'$ e la sua coordinata spaziale in $S$ è $x_2' = 5{,}6 \cdot 10^{-10}\ \text{m}$.

**Calcolo del rapporto $\beta_2 = v_2/c$ e dell'istante $t_2'$.**

Per calcolare $\beta_1$, usiamo le trasformazioni di Lorentz nella posizione occupata da $B$ in $t_1$ (evento $E_1$):

$$x_1' = \gamma_1(x_1 - \beta_1 c\, t_1). \tag{1}$$

Nell'orologio $B$, la posizione spaziale $x_1'$ è la coordinata dell'osservatore $B$ nel sistema $S'$ in $t_1$. Tenendo conto del fattore di Lorentz $\gamma_1 = \left(1-\beta_1^2\right)^{-1/2}$ e dell'espressione della (1):

$$\beta_1 = \frac{x_1}{c\, t_1} = \frac{8{,}5 \cdot 10^{15}}{2{,}998 \cdot 10^8 \cdot 2{,}1 \cdot 10^7} = \frac{8{,}5 \cdot 10^{15}}{6{,}296 \cdot 10^{15}} \approx \frac{4}{5} = 0{,}80.$$

*(vedi PDF p.111)*

Applichiamo le trasformazioni di Lorentz in $t_2'$ (evento $E_2$):

$$\begin{cases} x_2 = \gamma_1(x_2' + \beta_1 c\, t_2') \\ t_2 = \gamma_1\!\left(t_2' + \dfrac{\beta_1}{c}\, x_2'\right) \end{cases} \tag{2}$$

Affinché i due eventi $E_1$ e $E_2$ siano simultanei in $S$ (cioè $t_1 = t_2$):

$$\gamma_1\!\left(t_2' + \frac{\beta_1}{c}\, x_2'\right) = t_1 \implies t_2' = \frac{t_1}{\gamma_1} - \frac{\beta_1}{c}\, x_2'. \tag{2'}$$

Calcoliamo $\gamma_1 = \dfrac{1}{\sqrt{1-0{,}80^2}} = \dfrac{1}{\sqrt{0{,}36}} = \dfrac{1}{0{,}6} = \dfrac{5}{3}$.

$$t_2' = \frac{t_1}{\gamma_1} = \frac{2{,}1 \cdot 10^7}{\frac{5}{3}} = \frac{3 \cdot 2{,}1 \cdot 10^7}{5} = 1{,}26 \cdot 10^7\ \text{s}.$$

(il termine $\dfrac{\beta_1}{c} x_2' \approx 0$ poiché $x_2'$ è trascurabilmente piccolo.)

**Calcolo di $\beta_2$.**

Per calcolare $\beta_2$, applichiamo una delle trasformazioni di Lorentz, nella posizione occupata da $B$ in $t_1$ (evento $E_1$):

$$\beta_1 \cdot c \cdot t_1 = x_1 \implies \beta_1 = \frac{x_1}{c\, t_1} = 0{,}80.$$

Affinché i due eventi siano simultanei in $S$, il rapporto $\beta_2$ della velocità dell'orologio $B$ rispetto ad $A$ nel sistema $S$ vale:

$$\beta_2 = \sqrt{1 - \left(\frac{t_2'}{t_1}\right)^2} = \sqrt{1 - \left(\frac{1}{\gamma_1}\right)^2} = \sqrt{1 - (1-\beta_1^2)} = \beta_1 = 0{,}80.$$

Applicando le trasformazioni di Lorentz (equazione 2) e tenendo conto dell'espressione della (1):

$$\beta_2 = \sqrt{1 - \left(\frac{t_2'}{t_1}\right)^2} = \sqrt{1 - 0{,}36} = \sqrt{0{,}64} = 0{,}80.$$

Verifica: applicando le formule di composizione delle velocità:

$$\frac{x_1'}{c\, t_1'} = \ldots \implies \beta_2 = 0{,}75.$$

*(calcolo completo con trasformazioni di Lorentz — vedi PDF p.111–112)*

*Fonte:* [📄 PDF p.85](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
