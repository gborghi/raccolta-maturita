---
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2016_17_164_6
of_item: ques_simzan_simzan_parte1_2016_17_164_6
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2016_17_164_6|Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte1_2016_17_164|Simulazione Zanichelli 2016 — SimZan parte1 #17]]

**Nella sala un professore di matematica interroga da 0 a 3 studenti ogni volta. Per stabilire il numero di studenti interrogati, lancia due dadi regolari a 6 facce e somma i punteggi; chiama poi un numero di studenti uguale alla divisione intera per 3 della somma ottenuta. Calcola la probabilità che vengano interrogati 2 studenti, quindi quanti è il numero medio di studenti interrogati per lezione. Ci sono 28 studenti in classe.**

La somma $S$ di due dadi varia da 2 a 12. Il numero di studenti interrogati è $n = \left\lfloor \frac{S}{3} \right\rfloor$, con $n \in \{0, 1, 2, 3, 4\}$.

I valori di $S$ che danno $n = 2$ sono quelli per cui $6 \le S \le 8$ (poiché $\lfloor 6/3\rfloor = 2$, $\lfloor 7/3\rfloor = 2$, $\lfloor 8/3\rfloor = 2$):

- $S = 6$: coppie $(1,5),(2,4),(3,3),(4,2),(5,1)$ — 5 casi;
- $S = 7$: coppie $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — 6 casi;
- $S = 8$: coppie $(2,6),(3,5),(4,4),(5,3),(6,2)$ — 5 casi.

Totale casi favorevoli: $5 + 6 + 5 = 16$ su $36$ totali.

$$P(n = 2) = \frac{16}{36} = \frac{4}{9}.$$

**Valore medio (numero atteso di studenti interrogati):**

$$E[n] = \sum_{k=0}^{4} k\cdot P(n = k).$$

Si calcolano le probabilità per tutti i valori:
- $n = 0$: $S \in \{2\}$ (solo $(1,1)$): $P = \frac{1}{36}$;
- $n = 1$: $S \in \{3,4,5\}$ — $(1,2),(2,1)$ per $S=3$; $(1,3),(2,2),(3,1)$ per $S=4$; $(1,4),(2,3),(3,2),(4,1)$ per $S=5$ — totale $2+3+4=9$ casi: $P = \frac{9}{36} = \frac{1}{4}$;
- $n = 2$: $P = \frac{16}{36}$ (calcolato sopra);
- $n = 3$: $S \in \{9,10,11\}$ — 4+3+2 = 9 casi: $P = \frac{9}{36} = \frac{1}{4}$;
- $n = 4$: $S = 12$ (solo $(6,6)$): $P = \frac{1}{36}$.

$$E[n] = 0\cdot\frac{1}{36} + 1\cdot\frac{9}{36} + 2\cdot\frac{16}{36} + 3\cdot\frac{9}{36} + 4\cdot\frac{1}{36} = \frac{0 + 9 + 32 + 27 + 4}{36} = \frac{72}{36} = 2.$$

Il numero medio di studenti interrogati per lezione è $E[n] = 2$.

---

*Fonte:* [📄 PDF p.164](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
