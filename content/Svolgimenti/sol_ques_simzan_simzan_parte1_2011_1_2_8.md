---
title: 'Simulazione Zanichelli 2011 PNI #1 — Quesito 8 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_1_2_8
of_item: ques_simzan_simzan_parte1_2011_1_2_8
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_1_2_8|Simulazione Zanichelli 2011 PNI #1 — Quesito 8]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_1_2|Simulazione Zanichelli 2011 PNI #1]]

**Numero degli zeri e approssimazione numerica.**

La funzione (si veda PDF p.18 per la formula esatta) è:

$$f(x) = e^{x-\frac{1}{2}} - e^{x^2-1}.$$

Gli zeri corrispondono a:

$$e^{x-1/2} = e^{x^2-1} \;\Leftrightarrow\; x-\frac{1}{2} = x^2-1 \;\Leftrightarrow\; x^2-x-\frac{1}{2}=0 \;\Rightarrow\; x = \frac{1\pm\sqrt{3}}{2}.$$

La funzione ha **due zeri**: $x_1=\dfrac{1-\sqrt{3}}{2}\approx -0{,}366$ e $x_2=\dfrac{1+\sqrt{3}}{2}\approx 1{,}366$.

*(grafico — vedi PDF p.18)*

**Il più piccolo zero** è $x^*=\dfrac{1-\sqrt{3}}{2}$.

**Approssimazione con il metodo della bisezione** sull'intervallo $[-1,0]$ (dove $f$ cambia segno, in quanto $f(-1)<0$ e $f(0)=e^{-1/2}-e^{-1}>0$):

| Iterazione | $a$ | $b$ | $c$ | $\text{sgn}(f(c))$ |
|---|---|---|---|---|
| 1 | $-1$ | $0$ | $-1/2$ | $-$ |
| 2 | $-1/2$ | $0$ | $-1/4$ | $-$ |
| 3 | $-1/4$ | $0$ | $-1/8$ | $+$ |
| 4 | $-1/2$ | $-1/8$ | $-5/16$ | $-$ |
| 5 | $-5/16$ | $-1/8$ | $-7/32$ | $-$ |
| 6 | $-7/32$ | $-1/8$ | $-15/64$ | $+$ |
| 7 | $-7/32$ | $-15/64$ | $-29/128$ | $\approx 0$ |

Dopo 7 iterazioni, l'ampiezza dell'intervallo è $\dfrac{1}{128}<0{,}01$. Si ottiene $x^*\approx -0{,}37$ con errore $< 0{,}01$.

*(grafico — vedi PDF p.18–19)*

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
