---
title: 'Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 2 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2012_5_62_2
of_item: ques_simzan_simzan_parte1_2012_5_62_2
prova_id: prova_simzan_simzan_parte1_2012_5_62
anno: '2012'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2012_5_62_2|Simulazione Zanichelli 2012 Ordinamento #5 — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte1_2012_5_62|Simulazione Zanichelli 2012 Ordinamento #5]]

Calcoliamo $\displaystyle\lim_{x\to 0}\frac{1-\cos x + \sin x}{1-\cos x - \sin x}$ con almeno due metodi.

**Metodo 1 – Formule di duplicazione.**

Usiamo $1-\cos x = 2\sin^2\dfrac{x}{2}$ e $\sin x = 2\sin\dfrac{x}{2}\cos\dfrac{x}{2}$:

$$\frac{1-\cos x + \sin x}{1-\cos x - \sin x} = \frac{2\sin^2\frac{x}{2} + 2\sin\frac{x}{2}\cos\frac{x}{2}}{2\sin^2\frac{x}{2} - 2\sin\frac{x}{2}\cos\frac{x}{2}} = \frac{2\sin\frac{x}{2}\!\left(\sin\frac{x}{2}+\cos\frac{x}{2}\right)}{2\sin\frac{x}{2}\!\left(\sin\frac{x}{2}-\cos\frac{x}{2}\right)} = \frac{\sin\frac{x}{2}+\cos\frac{x}{2}}{\sin\frac{x}{2}-\cos\frac{x}{2}}.$$

Per $x \to 0$: $\sin\dfrac{x}{2} \to 0$ e $\cos\dfrac{x}{2} \to 1$, quindi:

$$\lim_{x\to 0}\frac{\sin\frac{x}{2}+\cos\frac{x}{2}}{\sin\frac{x}{2}-\cos\frac{x}{2}} = \frac{0+1}{0-1} = -1.$$

**Metodo 2 – Limiti notevoli.**

Dividendo numeratore e denominatore per $x$:

$$\frac{\frac{1-\cos x}{x} + \frac{\sin x}{x}}{\frac{1-\cos x}{x} - \frac{\sin x}{x}}.$$

Per $x\to 0$: $\dfrac{1-\cos x}{x} \to 0$ e $\dfrac{\sin x}{x} \to 1$, quindi il limite è $\dfrac{0+1}{0-1} = -1$.

**Metodo 3 – Teorema di De L'Hôpital.**

La forma è $\dfrac{0}{0}$. Applicando il teorema:

$$\lim_{x\to 0}\frac{(\sin x + \cos x)}{(\sin x - \cos x)} = \frac{0+1}{0-1} = -1.$$

Il limite vale $-1$.

*Fonte:* [📄 PDF p.62](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
