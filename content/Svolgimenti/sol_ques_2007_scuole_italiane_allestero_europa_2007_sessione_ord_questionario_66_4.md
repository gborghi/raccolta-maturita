---
title: 2007 Estero Europa Ordinaria — Questionario — Quesito 4 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66_4
of_item: ques_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66_4
prova_id: prova_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66
anno: '2007'
pdf: Prova_Maturita_2007.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2007
---

**Quesito:** [[Quesiti/ques_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66_4|2007 Estero Europa Ordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66|2007 Estero Europa Ordinaria — Questionario]]

La formula seguente:

$$e = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \cdots$$

è dovuta a Leonardo Eulero (1707–1783). Per dimostrarla può essere utile ricordare che è:

$$e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n$$

Si illustri il ragionamento seguito.

Ricordiamo la formula relativa allo sviluppo del binomio di Newton:

$$(x + a)^n = \sum_{k=0}^{n} \binom{n}{k} x^k a^{n-k}$$

quindi:

$$\left(1 + \frac{1}{n}\right)^n = \sum_{k=0}^{n} \binom{n}{k} 1^k \left(\frac{1}{n}\right)^{n-k} = \binom{n}{0} + \binom{n}{1}\frac{1}{n} + \binom{n}{2}\frac{1}{n^2} + \cdots + \binom{n}{n}\frac{1}{n^n}$$

$$= 1 + n \cdot \frac{1}{n} + \frac{n(n-1)}{2!} \cdot \frac{1}{n^2} + \cdots + \frac{1}{n^n}$$

$$= 1 + 1 + \frac{1}{2!}\left(\frac{n^2 - n}{n^2}\right) + \frac{1}{3!}\left(\frac{n(n-1)(n-2)}{n^3}\right) + \cdots + \frac{1}{n!} \cdot \frac{n(n-1)(n-2)\cdots 3 \cdot 2 \cdot 1}{n^n}$$

$$= 1 + \frac{1}{1!} + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \frac{1}{3!}\left(\frac{(n-1)(n-2)}{n^2}\right) + \cdots + \frac{1}{n!} \cdot \frac{(n-1)(n-2)\cdots 3 \cdot 2 \cdot 1}{n^{n-1}}$$

$$= 1 + \frac{1}{1!} + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \frac{1}{3!}\left(\frac{n-1}{n} \cdot \frac{n-2}{n}\right) + \cdots + \frac{1}{n!}\left(\frac{n-1}{n} \cdot \frac{n-2}{n} \cdots \frac{1}{n}\right)$$

$$= 1 + \frac{1}{1!} + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \frac{1}{3!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right) + \cdots + \frac{1}{n!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\cdots\left(1 - \frac{n-1}{n}\right)$$

Passando al limite per $n$ che tende a $+\infty$ del primo e dell'ultimo membro abbiamo:

$$e = \lim_{n \to +\infty}\left[1 + \frac{1}{1!} + \frac{1}{2!}\left(1-\frac{1}{n}\right) + \frac{1}{3!}\left(1-\frac{1}{n}\right)\left(1-\frac{2}{n}\right) + \cdots + \frac{1}{n!}\left(1-\frac{1}{n}\right)\left(1-\frac{2}{n}\right)\cdots\left(1-\frac{n-1}{n}\right)\right]$$

$$e = \lim_{n \to +\infty}\left[1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \cdots + \frac{1}{n!}\right] = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \cdots \quad \text{c.v.d.}$$

*Fonte:* [📄 PDF p.68](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
