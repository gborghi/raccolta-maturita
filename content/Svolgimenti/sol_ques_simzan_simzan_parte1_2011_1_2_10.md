---
title: 'Simulazione Zanichelli 2011 PNI #1 — Quesito 10 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_1_2_10
of_item: ques_simzan_simzan_parte1_2011_1_2_10
prova_id: prova_simzan_simzan_parte1_2011_1_2
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_1_2_10|Simulazione Zanichelli 2011 PNI #1 — Quesito 10]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_1_2|Simulazione Zanichelli 2011 PNI #1]]

**Determinare $a\in\,]-1;3[$ affinché:**

$$f(x) = \begin{cases} e^{a-x} & \text{se } x < a \\ \dfrac{x^2+1}{1+x} & \text{se } x \ge a \end{cases}$$

**soddisfi le ipotesi del teorema di Lagrange nell'intervallo $[-1,3]$.**

Il teorema di Lagrange richiede che $f$ sia continua su $[-1,3]$ e derivabile in $]-1,3[$.

**Dominio:** Per $x\ge a$ con $a>-1$, il denominatore $1+x\ne 0$; la funzione è definita su $[-1,3]$.

**Continuità in $x=a$:** $\lim_{x\to a^-}e^{a-x} = e^0 = 1$ e $\lim_{x\to a^+}\dfrac{x^2+1}{1+x} = \dfrac{a^2+1}{1+a}$. La condizione è:

$$1 = \frac{a^2+1}{1+a} \;\Rightarrow\; 1+a = a^2+1 \;\Rightarrow\; a^2-a = 0 \;\Rightarrow\; a = 0 \text{ oppure } a = 1.$$

**Derivabilità in $x=a$:**

$$f'(x) = \begin{cases} -e^{a-x} & \text{se } x < a \\ \dfrac{x^2+2x-1}{(1+x)^2} & \text{se } x > a \end{cases}$$

La condizione $f'_-(a)=f'_+(a)$:

$$-1 = \frac{a^2+2a-1}{(1+a)^2} \;\Rightarrow\; -(1+a)^2 = a^2+2a-1 \;\Rightarrow\; 0 = 2a^2+4a = 2a(a+2) \;\Rightarrow\; a = 0 \text{ oppure } a = -2.$$

Combinando le due condizioni ($a=0$ o $a=1$) con ($a=0$ o $a=-2$), l'unico valore comune nell'intervallo $]-1;3[$ è:

$$a = 0.$$

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
