---
title: 'Simulazione Zanichelli 2011 Ordinamento #2 — Quesito 1 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_2_23_1
of_item: ques_simzan_simzan_parte1_2011_2_23_1
prova_id: prova_simzan_simzan_parte1_2011_2_23
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_2_23_1|Simulazione Zanichelli 2011 Ordinamento n.2 — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_2_23|Simulazione Zanichelli 2011 Ordinamento n.2]]

**Testo:** 15 squadre partecipanti a un torneo devono essere distribuite in tre gironi $A$, $B$ e $C$, ciascuno composto da cinque squadre. Le tre squadre classificatesi al primo posto l'anno precedente devono necessariamente essere collocate in gironi distinti. Calcola il numero complessivo di composizioni possibili dei tre gironi.

Le tre squadre "di testa" (una per ciascun girone) sono già assegnate ai gironi distinti in $3! = 6$ modi (una per ciascun girone, ma poiché i gironi sono distinguibili tra loro si attribuisce la prima squadra di testa ad $A$, la seconda a $B$, la terza a $C$: $3! = 6$ assegnazioni).

Le restanti $15 - 3 = 12$ squadre devono riempire i 4 posti liberi in ciascun girone. Il numero di modi è:

$$\binom{12}{4}\cdot\binom{8}{4}\cdot\binom{4}{4} = 495 \cdot 70 \cdot 1 = 34\,650.$$

Il numero totale di composizioni possibili è:

$$N = 3! \cdot 34\,650 = 6 \cdot 34\,650 = 207\,900.$$

---

*Fonte:* [📄 PDF p.23](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
