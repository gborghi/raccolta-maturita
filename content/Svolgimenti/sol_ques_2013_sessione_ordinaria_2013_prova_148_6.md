---
title: 2013 Ordinaria PNI — Prova — Quesito 6 — Svolgimento
tipo: soluzione
item_id: sol_ques_2013_sessione_ordinaria_2013_prova_148_6
of_item: ques_2013_sessione_ordinaria_2013_prova_148_6
prova_id: prova_2013_sessione_ordinaria_2013_prova_148
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Quesito:** [[Quesiti/ques_2013_sessione_ordinaria_2013_prova_148_6|2013 Ordinaria PNI — Prova — Quesito 6]] · **Prova:** [[Prove/2013_sessione_ordinaria_2013_prova_148|2013 Ordinaria PNI — Prova]]

**Le $7!=5040$ permutazioni di $\{1,2,3,4,5,6,7\}$ in ordine crescente: posizione 5036 e posizione 1441.**

Ogni cifra iniziale governa $6!=720$ permutazioni:

| Cifra | Posizioni  |
| ----- | ---------- |
| 1     | 1–720      |
| 2     | 721–1440   |
| 3     | 1441–2160  |
| 4     | 2161–2880  |
| 5     | 2881–3600  |
| 6     | 3601–4320  |
| 7     | 4321–5040  |

**Posizione 5036** (prima cifra $=7$; residuo $5036-4320=716$):

Cifre restanti $\{1,2,3,4,5,6\}$, $5!=120$ per seconda cifra: $716\in[601,720]\Rightarrow$ seconda cifra $=6$; residuo $116$.

Cifre restanti $\{1,2,3,4,5\}$, $4!=24$: $116\in[97,120]\Rightarrow$ terza cifra $=5$; residuo $20$.

Cifre restanti $\{1,2,3,4\}$, $3!=6$: $20\in[19,24]\Rightarrow$ quarta cifra $=4$; residuo $2$.

Cifre restanti $\{1,2,3\}$, $2!=2$: $2\in[1,2]\Rightarrow$ quinta cifra $=1$; residuo $2$.

Cifre restanti $\{2,3\}$: posizione locale $2\Rightarrow$ sesta $=3$; settima $=2$.

$$\boxed{\text{Posizione 5036} = 7654132}$$

**Posizione 1441** (prima cifra $=3$; residuo $1441-1440=1$):

Residuo $1$: prima permutazione della sezione, cifre restanti $\{1,2,4,5,6,7\}$ in ordine minimo.

$$\boxed{\text{Posizione 1441} = 3124567}$$

---

*Fonte:* [📄 PDF p.148](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
