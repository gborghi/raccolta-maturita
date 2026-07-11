---
title: 2025 Suppletiva — Prova — Quesito 3 — Svolgimento
tipo: soluzione
item_id: sol_ques_2025_sessione_suppletiva_2025_prova_10_3
of_item: ques_2025_sessione_suppletiva_2025_prova_10_3
prova_id: prova_2025_sessione_suppletiva_2025_prova_10
anno: '2025'
pdf: Prova_Maturita_2025.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2025
---

**Quesito:** [[Quesiti/ques_2025_sessione_suppletiva_2025_prova_10_3|2025 Suppletiva — Prova — Quesito 3]] · **Prova:** [[Prove/2025_sessione_suppletiva_2025_prova_10|2025 Suppletiva — Prova]]

Dobbiamo distribuire 9 matite distinguibili (di colori diversi) in tre cassetti con vincoli sul numero: 4 in A, 2 in B, 3 in C. Poiché le matite sono tutte diverse tra loro, l'ordine di scelta conta e si tratta di contare il numero di modi per suddividere 9 oggetti distinti in 3 gruppi ordinati di dimensione fissata.

Utilizziamo il **coefficiente multinomiale**, che generalizza il coefficiente binomiale al caso in cui si ripartisce un insieme in più sottoinsiemi di cardinalità prefissata. Procedendo per passi successivi: prima scegliamo le 4 matite per A tra le 9 ($\binom{9}{4}$ modi), poi le 2 per B tra le 5 rimanenti ($\binom{5}{2}$ modi), infine le 3 restanti vanno necessariamente in C ($\binom{3}{3}=1$ modo). In forma compatta il risultato si esprime come:
$$
\binom{9}{4,2,3} = \frac{9!}{4!\cdot 2!\cdot 3!} = \frac{362 880}{24\cdot 2\cdot 6} = \frac{362 880}{288} = \boxed{1260}.
$$
Le collocazioni possibili sono dunque $1260$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.10](https://drive.google.com/file/d/1eFb2mSEYYU4eZ21hPBBkSerDAgf3k4Dp/view)*


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
