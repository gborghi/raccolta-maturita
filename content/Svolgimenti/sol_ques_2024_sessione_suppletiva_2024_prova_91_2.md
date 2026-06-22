---
title: 2024 Suppletiva — Prova — Quesito 2 — Svolgimento
tipo: soluzione
item_id: sol_ques_2024_sessione_suppletiva_2024_prova_91_2
of_item: ques_2024_sessione_suppletiva_2024_prova_91_2
prova_id: prova_2024_sessione_suppletiva_2024_prova_91
anno: '2024'
pdf: Prova_Maturita_2024.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_2024_sessione_suppletiva_2024_prova_91_2|2024 Suppletiva — Prova — Quesito 2]] · **Prova:** [[Prove/2024_sessione_suppletiva_2024_prova_91|2024 Suppletiva — Prova]]

Suppletiva 2024 - Quesiti

QUESITO $2$

In un salvadanaio ci sono $15$ monete, di cui $9$ sono da $1$ euro e le altre $6$ da $2$ euro. Se ne estraggono $6$
contemporaneamente.
- Qual è la probabilità che il valore totale delle monete estratte sia esattamente $10$ euro?
- Qual è la probabilità che il valore totale delle monete estratte sia al massimo $10$ euro?

Prima domanda

I casi possibili sono le combinazioni di $15$ oggetti a $6$ a $6,$ quindi $C15,6 = (15$
Analizziamo i casi favorevoli per ottenere un totale di $10$ euro con $6$ monete, osservando che non posso
avere tutte monete da $1$ euro o tutte da $2$ euro; inoltre posso avere al massimo $4$ monete da $2$ euro. Quindi:

$4$ da $2$ euro e $2$ da $1$ euro: $C6,4∙C9,2= (6$
$4) ∙(9$
$2) = 15∙36= 540$
$3$ da $2$ euro: restano $3$ monete da $1$ euro e non arriviamo a $10$ euro
$2$ da $2$ euro: con $4$ monete da $1$ euro non arriviamo a $10$ euro
$1$ da $2$ euro: con $5$ monete da $1$ euro non arriviamo a $10$ euro.

Quindi abbiamo UNA SOLA CONFIGURAZIONE FAVOREVOLE: $4$ MONETE DA $2$ EURO E $2$
MONETE DA $1$ EURO. QUESTA CONFIGURAZIONE SI PUO’ OTTENERE IN $540$ MODI.

Quindi la probabilità di avere un totale di $10$ euro estraendo contemporaneamente $6$ monete da un
salvadanaio con $9$ monete da $1$ euro e $6$ da $2$ euro è:

$$ 540 $$
$C15,6$
$$ = 540 $$
5005 $\cong 0.108 \cong 10.8$ %

Seconda domanda

Siccome il massimo possibile è $12$ euro (le sei monete estratte sono tutte da $2$ euro), per avere al massimo
$10$ euro di totale basta calcolare $1 -p,$ dove $p=$ p(somma $11$ euro) + p(somma $12$ euro).

Calcoliamo p(somma $11$ euro).

I casi possibili sono gli stessi del primo caso.

Per calcolare i casi favorevoli osserviamo che anche in questo caso le $6$ monete non possono essere tutte da
$1$ euro o tutte da $2$ euro, inoltre le monete da $1$ euro devono essere in numero dispari.

Non possiamo avere $5$ monete da $1$ euro, perché con la rimanente da $2$ euro non arriveremmo a $11.$
Non possiamo avere $3$ monete da $1$ euro, perché con le rimanenti tre da $2$ euro non arriveremmo a $11.$

POSSIAMO avere solo $1$ moneta da $1$ euro e $5$ da $2$ euro. Totale casi: $9∙C6,5= 9∙6= 54.$

Quindi: p(somma $11$ euro) =
$$ 54 $$
$C15,6=$
$$ 54 5005 $$

*Fonte:* [📄 PDF p.106](https://drive.google.com/file/d/1VOgKnntd-8HAK_xN07R1HOW3WMKnaLip/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
