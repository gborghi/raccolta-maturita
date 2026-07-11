---
title: 2005 Suppletiva — Prova — Quesito 2 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_sessione_suppletiva_2005_prova_165_2
of_item: ques_2005_sessione_suppletiva_2005_prova_165_2
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

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_165_2|2005 Suppletiva — Prova — Quesito 2]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_165|2005 Suppletiva — Prova]]

**Quesito PNI 2 — Sen 18° e sen 36°.**

La sezione aurea $x$ di un segmento di lunghezza $R$ soddisfa $x(R-x) = (R-x)^2$... ovvero $x^2 = R(R-x)$:

$$x^2 + Rx - R^2 = 0 \implies x = \frac{-R + R\sqrt{5}}{2} = \frac{R(\sqrt{5}-1)}{2}.$$

Per il teorema della corda, la corda del decagono (lato $AB$) vale $2R\sin(18°)$. Poiché $AB$ è la sezione aurea di $R = OB$:

$$2R\sin(18°) = \frac{R(\sqrt{5}-1)}{2} \implies \sin(18°) = \frac{\sqrt{5}-1}{4}.$$

Per il seno di $36°$ si usa la formula di duplicazione:

$$\sin(36°) = 2\sin(18°)\cos(18°).$$

$$\cos(18°) = \sqrt{1 - \sin^2(18°)} = \sqrt{1 - \frac{6-2\sqrt{5}}{16}} = \sqrt{\frac{10+2\sqrt{5}}{16}} = \frac{\sqrt{10+2\sqrt{5}}}{4}.$$

$$\sin(36°) = 2 \cdot \frac{\sqrt{5}-1}{4} \cdot \frac{\sqrt{10+2\sqrt{5}}}{4} = \frac{(\sqrt{5}-1)\sqrt{10+2\sqrt{5}}}{8} = \frac{\sqrt{10-2\sqrt{5}}}{4}.$$

**Quesito PNI 2 (secondo testo) — Tangenza di $y = x\sin x$ con $y = \pm x$.**

Una retta è tangente a una curva in $P$ se hanno almeno due intersezioni coincidenti in $P$.

Per $y = x$ intersecata con $y = x\sin x$: $x\sin x = x \Rightarrow \sin x = 1$. Inoltre $\dfrac{d}{dx}(x\sin x) = \sin x + x\cos x = 1$ quando $\sin x = 1$ (e $\cos x = 0$). Le curve hanno lo stesso valore e la stessa derivata nei punti $\sin x = 1$: sono **tangenti**. $\square$

Per $y = -x$:

$$\begin{cases} y = -x \\ y = x\sin x \end{cases} \implies \sin x = -1.$$

$\dfrac{d}{dx}(x\sin x) = \sin x + x\cos x = -1$ quando $\sin x = -1$ (e $\cos x = 0$). Le curve sono **tangenti** nei punti $\sin x = -1$. $\square$

---

*Fonte:* [📄 PDF p.177](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
