---
title: 2010 Scientifico PNI Straordinaria — Questionario — Quesito 8 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196_8
of_item: ques_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196_8
prova_id: prova_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196
anno: '2010'
pdf: Prova_Maturita_2010.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2010
---

**Quesito:** [[Quesiti/ques_2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196_8|2010 Scientifico PNI Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2010_liceo_scientifico_pni_2010_sessione_straordinaria_questionario_196|2010 Scientifico PNI Straordinaria — Questionario]]

Si dimostri che l'equazione $\dfrac{1}{x} - e^x = 0$ ha un'unica radice reale e se ne calcoli un valore approssimato con due cifre decimali esatte.

Posto $a(x) = \dfrac{1}{x}$ e $b(x) = e^x$, le soluzioni dell'equazione data corrispondono alle ascisse dei punti di intersezione dei grafici delle due funzioni. Dal grafico si evince che la radice richiesta è unica e che è compresa tra 0 e 1.

*(grafico — vedi PDF)*

Restringiamo l'intervallo in cui si trova la radice. Posto $f(x) = \dfrac{1}{x} - e^x$, si ha:

$$f(0{,}5) = 2 - e^{0{,}5} \cong 0{,}35 > 0, \qquad f(0{,}6) \cong -0{,}16 < 0$$

quindi la radice appartiene all'intervallo $[a;\, b] = [0{,}5;\, 0{,}6]$.

La funzione $f(x)$ è continua nell'intervallo chiuso $[a;\,b]$ e derivabile nell'aperto $(a;\,b)$ ed è:

$$f'(x) = -\frac{1}{x^2} - e^x < 0 \quad \text{per ogni } x \in [0{,}5;\, 0{,}6]$$

quindi la funzione è sempre decrescente. Inoltre:

$$f''(x) = \frac{2}{x^3} - e^x$$

Dal grafico si evince che $\dfrac{2}{x^3} < e^x$ in $[0{,}5;\, 0{,}6]$, quindi in tale intervallo $f''(x) < 0$, cioè la derivata seconda ha lo stesso segno di $f(b)$.

Essendo il segno della derivata seconda costante, possiamo applicare il **metodo delle tangenti (metodo di Newton)**. Essendo $f(a)\cdot f''(x) < 0$ in $[a,b] = [0{,}5;\, 0{,}6]$, dobbiamo assumere come punto iniziale di iterazione $x_0 = b = 0{,}6$:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

$$x_1 = 0{,}6 - \frac{f(0{,}6)}{f'(0{,}6)} \cong 0{,}566, \qquad x_2 = 0{,}566 - \frac{f(0{,}566)}{f'(0{,}566)} \cong 0{,}567, \qquad x_3 \cong 0{,}567$$

Quindi la radice approssimata con due cifre decimali esatte è $x \cong 0{,}57$.

*Fonte:* [📄 PDF p.201](https://drive.google.com/file/d/1J5aZuRvV3aZZ5NwuxHjhKtmXNI-5yTxd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
