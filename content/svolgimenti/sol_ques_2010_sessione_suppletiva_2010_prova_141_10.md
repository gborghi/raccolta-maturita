---
title: 2010 Suppletiva — Prova — Quesito 10 — Svolgimento
tipo: soluzione
item_id: sol_ques_2010_sessione_suppletiva_2010_prova_141_10
of_item: ques_2010_sessione_suppletiva_2010_prova_141_10
prova_id: prova_2010_sessione_suppletiva_2010_prova_141
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Quesito:** [[Quesiti/ques_2010_sessione_suppletiva_2010_prova_141_10|2010 Suppletiva — Prova — Quesito 10]] · **Prova:** [[Prove/2010_sessione_suppletiva_2010_prova_141|2010 Suppletiva — Prova]]

*(Sessione suppletiva 2010 — Questionario n. 10)*

Un'urna contiene 20 palline, rosse o azzurre. Quante sono quelle azzurre, se, estraendo 2 palline senza riporre la prima, la probabilità di estrarre almeno una pallina azzurra è $\dfrac{27}{38}$?

**Soluzione.**

Sia $n$ il numero di palline azzurre; le rosse sono $20 - n$.

Calcoliamo la probabilità dell'evento complementare (nessuna pallina azzurra = entrambe rosse):

$$P(\text{nessuna azzurra}) = \frac{20-n}{20} \cdot \frac{20-n-1}{19} = \frac{(20-n)(19-n)}{380}$$

La condizione del problema:

$$P(\text{almeno una azzurra}) = \frac{27}{38} \implies P(\text{nessuna azzurra}) = 1 - \frac{27}{38} = \frac{11}{38} = \frac{110}{380}$$

Quindi:

$$(20-n)(19-n) = 110$$

Poniamo $m = 20 - n$ (palline rosse):

$$m(m-1) = 110 \implies m^2 - m - 110 = 0 \implies m = \frac{1 \pm \sqrt{441}}{2} = \frac{1 \pm 21}{2}$$

Le soluzioni sono $m = 11$ e $m = -10$ (impossibile). Quindi ci sono $11$ palline rosse e:

$$n = 20 - 11 = \boxed{9} \text{ palline azzurre}$$

**Verifica:** $P = 1 - \dfrac{11 \cdot 10}{380} = 1 - \dfrac{110}{380} = 1 - \dfrac{11}{38} = \dfrac{27}{38}$. ✓

---

*Fonte:* [📄 PDF p.141](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
