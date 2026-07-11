---
title: 2025 Suppletiva — Prova — Quesito 2 — Svolgimento
tipo: soluzione
item_id: sol_ques_2025_sessione_suppletiva_2025_prova_10_2
of_item: ques_2025_sessione_suppletiva_2025_prova_10_2
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

**Quesito:** [[Quesiti/ques_2025_sessione_suppletiva_2025_prova_10_2|2025 Suppletiva — Prova — Quesito 2]] · **Prova:** [[Prove/2025_sessione_suppletiva_2025_prova_10|2025 Suppletiva — Prova]]

Calcoliamo innanzitutto le probabilità di successo a ogni lancio. Zoe segna un punto se esce 5 o 6, dunque $P(\text{Zoe segna})=\frac{2}{6}=\frac{1}{3}$; in caso contrario segna Eva, con $P(\text{Eva segna})=\frac{4}{6}=\frac{2}{3}$.

Per determinare la probabilità che Zoe vinca con punteggio 3–1, osserviamo che la partita deve durare esattamente 4 lanci e l'ultimo lancio deve essere vinto da Zoe (altrimenti avrebbe già raggiunto il punteggio di 3 prima del quarto lancio e la partita sarebbe finita). Nei primi 3 lanci, Zoe ne vince esattamente 2 ed Eva ne vince 1, e la disposizione di queste vittorie tra i primi 3 lanci può avvenire in $\binom{3}{2}=3$ modi diversi.

La probabilità cercata è dunque:
$$
P = \binom{3}{2}\left(\frac{1}{3}\right)^2\left(\frac{2}{3}\right)^1\cdot\frac{1}{3} = 3\cdot\frac{1}{9}\cdot\frac{2}{3}\cdot\frac{1}{3} = \frac{6}{81} = \boxed{\frac{2}{27}} \approx 7{,}4\%.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_2/ques_2025_sessione_suppletiva_2025_prova_10_2_fig1.svg]]

*Diagramma ad albero (parziale) per la sfida Zoe–Eva: percorsi verso il punteggio $3{-}1$.*

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.10](https://drive.google.com/file/d/1eFb2mSEYYU4eZ21hPBBkSerDAgf3k4Dp/view)*


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
