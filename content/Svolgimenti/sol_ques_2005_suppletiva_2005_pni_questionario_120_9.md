---
title: 2005 Suppletiva PNI — Questionario — Quesito 9 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_suppletiva_2005_pni_questionario_120_9
of_item: ques_2005_suppletiva_2005_pni_questionario_120_9
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

**Quesito:** [[Quesiti/ques_2005_suppletiva_2005_pni_questionario_120_9|2005 Suppletiva PNI — Questionario — Quesito 9]] · **Prova:** [[Prove/2005_suppletiva_2005_pni_questionario_120|2005 Suppletiva PNI — Questionario]]

Si consideri il seguente sistema nelle incognite $x, y, z$:

$$\begin{cases} ax + y + z = a \\ x + ay + z = a \\ x + y + az = a \end{cases}$$

dove $a$ è un parametro reale. Il sistema è:
- [A] determinato per ogni valore di $a$;
- [B] indeterminato per un valore di $a$ ed impossibile per un valore di $a$;
- [C] indeterminato per nessun valore di $a$, ma impossibile per un valore di $a$;
- [D] impossibile per nessun valore di $a$, ma indeterminato per un valore di $a$.

Una sola risposta è corretta: individuarla e fornire una esauriente spiegazione della scelta operata.

Indichiamo con $A$ la matrice dei coefficienti e con $B$ la matrice ottenuta da $A$ orlandola con la colonna dei termini noti:

$$A = \begin{bmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{bmatrix}, \qquad B = \begin{bmatrix} a & 1 & 1 & a \\ 1 & a & 1 & a \\ 1 & 1 & a & a \end{bmatrix}$$

Quando il determinante di $A$ è diverso da zero il sistema ammette una sola soluzione.

$$\det A = a(a^2-1) - (a-1) + (1-a) = a(a-1)(a+1) - (a-1) - (a-1)$$

$$= (a-1)(a^2+a-2) = (a-1)(a+2)(a-1)$$

Risulta:

$$\det A = 0 \quad \text{se} \quad a = 1 \quad \text{oppure} \quad a = -2$$

Quindi se $a \neq 1$ e $a \neq -2$ il sistema ammette una sola soluzione.

Analizziamo il sistema se $a = 1$. A tal proposito è necessario utilizzare il teorema di Rouchè–Capelli. Per tale valore di $a$ risulta:

$$A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}, \qquad B = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix}$$

Il rango $r$ di $A$ è uguale ad $1$ come il rango di $B$, quindi il sistema è compatibile ed ammette $\infty^{n-r}$ soluzioni, dove $n$ è il numero delle incognite ed $r$ il rango comune ad $A$ e $B$. Nel nostro caso abbiamo $\infty^{3-1} = \infty^2$ soluzioni.

Analizziamo il sistema se $a = -2$. Per tale valore di $a$ risulta:

*Fonte:* [📄 PDF p.126](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
