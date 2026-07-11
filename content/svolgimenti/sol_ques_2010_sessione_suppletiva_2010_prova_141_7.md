---
title: 2010 Suppletiva — Prova — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2010_sessione_suppletiva_2010_prova_141_7
of_item: ques_2010_sessione_suppletiva_2010_prova_141_7
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

**Quesito:** [[Quesiti/ques_2010_sessione_suppletiva_2010_prova_141_7|2010 Suppletiva — Prova — Quesito 7]] · **Prova:** [[Prove/2010_sessione_suppletiva_2010_prova_141|2010 Suppletiva — Prova]]

*(Scuole italiane all'estero — Santiago del Cile — Sessione ordinaria 2010)*

Si provi che per tutti gli $x \in \mathbb{R}$:

$$\sin 3x = 3\sin x - 4\sin^3 x \qquad \text{e} \qquad \cos 3x = 4\cos^3 x - 3\cos x$$

**Soluzione.**

**Prima formula.** Usando le formule di addizione con $3x = 2x + x$:

$$\sin(3x) = \sin(2x + x) = \sin 2x\cos x + \cos 2x\sin x$$

Sostituendo $\sin 2x = 2\sin x\cos x$ e $\cos 2x = 1 - 2\sin^2 x$:

$$= 2\sin x\cos^2 x + (1 - 2\sin^2 x)\sin x = 2\sin x\cos^2 x + \sin x - 2\sin^3 x$$

Usando $\cos^2 x = 1 - \sin^2 x$:

$$= 2\sin x(1 - \sin^2 x) + \sin x - 2\sin^3 x = 2\sin x - 2\sin^3 x + \sin x - 2\sin^3 x = 3\sin x - 4\sin^3 x \qquad \text{c.v.d.}$$

**Seconda formula.** Con $3x = 2x + x$:

$$\cos(3x) = \cos(2x + x) = \cos 2x\cos x - \sin 2x\sin x$$

Sostituendo $\cos 2x = 2\cos^2 x - 1$ e $\sin 2x = 2\sin x\cos x$:

$$= (2\cos^2 x - 1)\cos x - 2\sin x\cos x\cdot\sin x = 2\cos^3 x - \cos x - 2\sin^2 x\cos x$$

Usando $\sin^2 x = 1 - \cos^2 x$:

$$= 2\cos^3 x - \cos x - 2(1 - \cos^2 x)\cos x = 2\cos^3 x - \cos x - 2\cos x + 2\cos^3 x = 4\cos^3 x - 3\cos x \qquad \text{c.v.d.}$$

---

*Fonte:* [📄 PDF p.154](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
