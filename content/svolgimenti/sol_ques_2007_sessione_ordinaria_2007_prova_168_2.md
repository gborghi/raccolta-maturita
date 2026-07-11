---
title: 2007 Ordinaria PNI — Prova — Quesito 2 — Svolgimento
tipo: soluzione
item_id: sol_ques_2007_sessione_ordinaria_2007_prova_168_2
of_item: ques_2007_sessione_ordinaria_2007_prova_168_2
prova_id: prova_2007_sessione_ordinaria_2007_prova_168
anno: '2007'
pdf: Prova_Maturita_2007.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2007
---

**Quesito:** [[Quesiti/ques_2007_sessione_ordinaria_2007_prova_168_2|2007 Ordinaria PNI — Prova — Quesito 2]] · **Prova:** [[Prove/2007_sessione_ordinaria_2007_prova_168|2007 Ordinaria PNI — Prova]]

**Volume del solido $S$.**

La base di $S$ è la regione $R = \{(x,y) : 1 \leq x \leq e,\ 0 \leq y \leq \ln x\}$.

Le sezioni perpendicolari all'asse $x$ sono rettangoli con base $\ln x$ e altezza $3\ln x$:

$$A(x) = \ln x \cdot 3\ln x = 3(\ln x)^2.$$

$$V = \int_1^e 3(\ln x)^2\,dx.$$

Calcoliamo $I = \displaystyle\int_1^e (\ln x)^2\,dx$ per parti, $u = (\ln x)^2$, $v' = 1$:

$$I = \bigl[x(\ln x)^2\bigr]_1^e - 2\int_1^e \ln x\,dx.$$

Con $\displaystyle\int_1^e \ln x\,dx = [x\ln x - x]_1^e = (e - e) - (0 - 1) = 1$:

$$I = \bigl(e \cdot 1 - 1 \cdot 0\bigr) - 2\cdot 1 = e - 2.$$

$$V = 3(e - 2) \approx 3 \times 0{,}71828 \approx 2{,}15.$$

---

*Fonte:* [📄 PDF p.168](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
