---
title: 2005 Suppletiva — Prova — Quesito 3 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_sessione_suppletiva_2005_prova_165_3
of_item: ques_2005_sessione_suppletiva_2005_prova_165_3
prova_id: prova_2005_sessione_suppletiva_2005_prova_165
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_165_3|2005 Suppletiva — Prova — Quesito 3]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_165|2005 Suppletiva — Prova]]

**Quesito PNI 3 — Traslazione come composizione di simmetrie.**

Il vettore $\vec{v} = (\sqrt{5},\, -\sqrt{5})$.

Una traslazione di vettore $\vec{v}$ si ottiene componendo due simmetrie assiali con assi paralleli e perpendicolari a $\vec{v}$, con distanza tra gli assi uguale a $\dfrac{|\vec{v}|}{2} = \dfrac{\sqrt{10}}{2}$.

Scegliamo gli assi $y = x$ e $y = x - \sqrt{5}$ (perpendicolari a $\vec{v}$, distanza $= \dfrac{\sqrt{5}}{\sqrt{2}} = \dfrac{\sqrt{10}}{2}$).

Simmetria $\varphi$ di asse $y = x$:

$$\varphi:\; \begin{cases} x' = y \\ y' = x \end{cases}$$

Simmetria $\sigma$ di asse $y = x - \sqrt{5}$:

$$\sigma:\; \begin{cases} x' = y + \sqrt{5} \\ y' = x - \sqrt{5} \end{cases}$$

Composizione $\sigma \circ \varphi$:

$$(x,y) \xrightarrow{\varphi} (y,x) \xrightarrow{\sigma} (x + \sqrt{5},\; y - \sqrt{5}).$$

Questa è la traslazione di vettore $\vec{v} = (\sqrt{5},\, -\sqrt{5})$. $\square$

Composizione $\varphi \circ \sigma$:

$$(x,y) \xrightarrow{\sigma} (y+\sqrt{5},\; x-\sqrt{5}) \xrightarrow{\varphi} (x-\sqrt{5},\; y+\sqrt{5}).$$

Questa è la traslazione di vettore $-\vec{v} = (-\sqrt{5},\, \sqrt{5})$.

---

*Fonte:* [📄 PDF p.178](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
