---
title: 2005 Suppletiva PNI — Questionario — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_suppletiva_2005_pni_questionario_120_7
of_item: ques_2005_suppletiva_2005_pni_questionario_120_7
prova_id: prova_2005_suppletiva_2005_pni_questionario_120
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Quesito:** [[Quesiti/ques_2005_suppletiva_2005_pni_questionario_120_7|2005 Suppletiva PNI — Questionario — Quesito 7]] · **Prova:** [[Prove/2005_suppletiva_2005_pni_questionario_120|2005 Suppletiva PNI — Questionario]]

Spiegare in maniera esauriente perché una funzione reale di variabile reale integrabile in un intervallo chiuso e limitato $[a, b]$ non necessariamente ammette primitiva in $[a, b]$.

Ricordiamo che (per il Teorema fondamentale del calcolo integrale, detto anche di Torricelli) se una funzione $f$ è continua in un intervallo chiuso e limitato $[a;\, b]$ allora è integrabile in tale intervallo, cioè esiste una funzione $F$, derivabile nel suddetto intervallo, tale che:

$$F'(x) = f(x), \quad \text{con } F(x) = \int_a^x f(t)\,dt$$

$F$ è quindi una primitiva di $f$. Quindi: se una funzione è continua in un intervallo chiuso e limitato ammette primitiva.

L'integrabilità di una funzione viene estesa al caso di una funzione non continua in un intervallo. Se per esempio abbiamo un punto di discontinuità nel punto $c$ interno all'intervallo, la funzione si dice integrabile (in senso improprio) se esistono finiti i seguenti limiti:

$$\lim_{k \to c^-} \int_a^k f(x)\,dx \quad \text{e} \quad \lim_{k \to c^+} \int_k^b f(x)\,dx$$

e si pone:

$$\int_a^b f(x)\,dx = \lim_{k \to c^-} \int_a^k f(x)\,dx + \lim_{k \to c^+} \int_k^b f(x)\,dx$$

Diamo un esempio di funzione integrabile (in senso improprio) in un intervallo $[a;\, b]$ che non ammette primitiva nell'intervallo:

$$f(x) = \begin{cases} x+1 & \text{se } -1 \le x < 0 \\ -x+1 & \text{se } 0 < x \le 1 \\ 0 & \text{se } x = 0 \end{cases}$$

*(grafico — vedi PDF p.5)*

*Fonte:* [📄 PDF p.124](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
