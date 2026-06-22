---
title: 2009 PNI Straordinaria — Questionario — Quesito 2 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_2
of_item: ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_2
prova_id: prova_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2009
---

**Quesito:** [[Quesiti/ques_2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130_2|2009 PNI Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2009_liceo_scientifico_pni_2009_sessione_straordinaria_questionario_130|2009 PNI Straordinaria — Questionario]]

Si dimostri che l'equazione $\cos x - x = 0$ ha un'unica radice reale e se ne calcoli un valore approssimato con due cifre decimali esatte.

Posto $a(x) = \cos(x)$ e $b(x) = x$, le soluzioni dell'equazione data corrispondono alle ascisse dei punti di intersezione dei grafici delle due funzioni. Dal grafico si evince che la radice richiesta è unica e che è compresa tra $0$ e $\dfrac{\pi}{2}$.

*(grafico — vedi PDF)*

Restringiamo l'intervallo in cui si trova la radice. Posto $f(x) = \cos(x) - x$ si ha:

$$f(0) = 1 \,, \quad f(1) = \cos(1) - 1 < 0$$

quindi la radice appartiene all'intervallo $[a;\, b] = [0;\, 1]$.

La funzione $f(x)$ è continua nell'intervallo chiuso $[a;\, b]$ e derivabile nell'aperto $(a;\, b)$ ed è:

$$f'(x) = -\sin(x) - 1 \le 0 \quad \text{per ogni } x$$

$$f''(x) = -\cos(x) < 0 \quad \text{nell'intervallo } (0;\, 1).$$

Essendo il segno della derivata seconda costante, possiamo applicare il metodo delle tangenti (metodo di Newton).

Essendo $f(a) \cdot f''(x) < 0$ in $[a, b] = [0;\, 1]$, dobbiamo assumere come punto iniziale di iterazione $x_0 = b = 1$.

La formula iterativa è:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

Applicando il metodo:

$$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 1 - \frac{f(1)}{f'(1)} \cong 0.7504$$

$$x_2 = x_1 - \frac{f(x_1)}{f'(x_1)} = 0.7504 - \frac{f(0.7504)}{f'(0.7504)} \cong 0.7391$$

$$x_3 = x_2 - \frac{f(x_2)}{f'(x_2)} = 0.7391 - \frac{f(0.7391)}{f'(0.7391)} \cong 0.7391$$

Quindi la radice approssimata con due cifre decimali esatte è $x \cong 0.74$.

*Fonte:* [📄 PDF p.130](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
