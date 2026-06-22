---
title: 'Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2023_1_2_7
of_item: ques_simzan_simzan_parte3_2023_1_2_7
prova_id: prova_simzan_simzan_parte3_2023_1_2
anno: '2023'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2023
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2023_1_2_7|Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte3_2023_1_2|Simulazione Zanichelli 2023 — SimZan parte3 #1]]

**Testo:** Il grafico della funzione $y=\cos\dfrac{\pi x}{2}$ divide il quadrato $Q$ di vertici $(0;0)$, $(1;0)$, $(1;1)$ e $(0;1)$ in due regioni $R_1$ e $R_2$, con $\text{Area}(R_1)>\text{Area}(R_2)$. Scelti a caso tre punti interni al quadrato $Q$, calcola la probabilità che solo l'ultimo punto appartenga alla regione $R_1$.

*(grafico — vedi PDF p.6 e p.28)*

**Soluzione:**

**Area di $R_1$** (regione sotto la curva $y=\cos\dfrac{\pi x}{2}$ nell'intervallo $[0,1]$):

$$\text{Area}(R_1)=\int_0^1\cos\frac{\pi x}{2}\,dx=\left[\frac{2}{\pi}\sin\frac{\pi x}{2}\right]_0^1=\frac{2}{\pi}\approx0{,}637.$$

**Area di $R_2$:**

$$\text{Area}(R_2)=1-\frac{2}{\pi}\approx0{,}363.$$

Poiché $\dfrac{2}{\pi}>0{,}5$, si ha $\text{Area}(R_1)>\text{Area}(R_2)$, confermando $R_1$ come la regione più grande (quella sotto la curva). ✓

**Probabilità** che un punto casuale cada in $R_1$: $p_1=\dfrac{2}{\pi}$; in $R_2$: $p_2=1-\dfrac{2}{\pi}$.

**Tre punti indipendenti; solo il terzo appartiene a $R_1$:**

$$p = p_2\cdot p_2\cdot p_1 = \left(1-\frac{2}{\pi}\right)^2\cdot\frac{2}{\pi} = \frac{2(\pi-2)^2}{\pi^3}.$$

Numericamente: $\dfrac{2\times(1{,}1416)^2}{31{,}006}\approx\dfrac{2{,}606}{31{,}006}\approx0{,}084=8{,}4\%$.

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
