---
title: 2008 PNI Straordinaria — Questionario — Quesito 7 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_7
of_item: ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_7
prova_id: prova_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122
anno: '2008'
pdf: Prova_Maturita_2008.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2008
---

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_7|2008 PNI Straordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122|2008 PNI Straordinaria — Questionario]]

Si dimostri che l'equazione $\log x + x = 0$ ha un'unica radice reale e se ne calcoli un valore approssimato con due cifre decimali esatte.

Intendiamo $\log$ come logaritmo naturale ($\ln$).

Dire $\ln x + x = 0$ è come dire $\ln x = -x$; graficamente si ha la seguente situazione:

*(grafico — vedi PDF)*

Dal grafico si deduce che l'equazione ammette una sola radice, compresa tra $0$ e $1$. Restringiamo l'intervallo a cui appartiene la radice considerando la funzione $f(x) = \ln x + x$:

$$f(1) = 1, \qquad f(0{,}5) = \ln(0{,}5) + 0{,}5 \approx -0{,}2, \qquad f(0{,}6) \approx 0{,}1$$

Quindi la radice (unica) è compresa tra $0{,}5$ e $0{,}6$.

La funzione è continua nell'intervallo $[0{,}5;\,0{,}6]$, ha derivata prima e seconda:

$$f'(x) = \frac{1}{x} + 1, \qquad f''(x) = -\frac{1}{x^2} < 0 \text{ in tutto l'intervallo considerato.}$$

Possiamo quindi applicare il metodo delle tangenti (Newton).

Posto $[a;\,b] = [0{,}5;\,0{,}6]$, essendo $f(0{,}5) < 0$ ed $f(0{,}6) > 0$, il segno della derivata seconda è concorde con $f(a)$, quindi assumiamo come punto iniziale dell'iterazione $x_0 = a = 0{,}5$.

La formula iterativa è:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

$$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 0{,}5 - \frac{f(0{,}5)}{f'(0{,}5)} \approx 0{,}5644$$

$$x_2 = x_1 - \frac{f(x_1)}{f'(x_1)} = 0{,}5644 - \frac{f(0{,}5644)}{f'(0{,}5644)} \approx 0{,}5671$$

$$x_3 = x_2 - \frac{f(x_2)}{f'(x_2)} = 0{,}5671 - \frac{f(0{,}5671)}{f'(0{,}5671)} \approx 0{,}5671$$

Quindi la radice approssimata con due cifre decimali esatte è $x \approx 0{,}57$.

*Fonte:* [📄 PDF p.125](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
