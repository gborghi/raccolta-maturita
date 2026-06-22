---
title: 2011 PNI Straordinaria — Questionario — Quesito 8 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2011_liceo_scientifico_pni_2011_sessione_straordinaria_questionario_114_8
of_item: ques_2011_liceo_scientifico_pni_2011_sessione_straordinaria_questionario_114_8
prova_id: prova_2011_liceo_scientifico_pni_2011_sessione_straordinaria_questionario_114
anno: '2011'
pdf: Prova_Maturita_2011.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2011
---

**Quesito:** [[Quesiti/ques_2011_liceo_scientifico_pni_2011_sessione_straordinaria_questionario_114_8|2011 PNI Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2011_liceo_scientifico_pni_2011_sessione_straordinaria_questionario_114|2011 PNI Straordinaria — Questionario]]

Liceo Scientifico PNI 2011

QUESITO $7$

Con l’aiuto di una calcolatrice si applichi il procedimento iterativo di Newton all’equazione
$ex-2 = 0,$ con punto iniziale $x^{0} = 1.$ Cosa si ottiene dopo due iterazioni?

Osserviamo che, posto f(x) $= ex-2,$ risulta $f(0)=-2<0$ ed $f(1)=e-2>0;$ quindi l’equazione,
per il teorema degli zeri ammette almeno una radice tra $0$ ed $1$ (notiamo che la funzione è
continua e derivabile quanto si vuole nell’intervallo $[0; 1]).$

Risulta poi:

f'(x) $= ex> 0$ per ogni $x,$ quindi la funzione è strettamente crescente, perciò la radice è
unica.

Inoltre: f''(x) $= ex> 0$ per ogni $x.$

Essendo il segno della derivata seconda costante, possiamo applicare il metodo delle
tangenti (metodo di Newton).

Essendo poi f(a) ∙f''(x) $< 0$ in [a, b] $= [0; 1]$ dobbiamo assumere come punto
iniziale di iterazione $x^{0} = b= 1.$

$xn+1 = xn-f(xn)$
f'(xn)

$x^{1} = x^{0} -$
$f(x^{0})$
$f'(x^{0}) = 1 -$
$f(1)$
$f'(1) \cong 0.736 ; x^{2} = x^{1} -$
$f(x^{1})$
$f'(x^{1}) = 0.736 -$
$f(0.736)$
$f'(0.736) \cong 0.694$

Quindi dopo due iterazioni si ottiene per la radice il valore $x^{2} = 0.694$ .

Osserviamo che la soluzione esatta dell’equazione è $x= ln(2) = 0.6931471805599$ ....

QUESITO $8$

Utilizzando uno dei metodi di integrazione numerica studiati, si calcoli un valore
approssimato dell’area della regione piana, delimitata dalla curva di equazione $y= \sqrt{sinx}$
e dall’asse delle $x$ nell’intervallo $0 \le x\le \pi$ .

Osserviamo che la funzione è non negativa nell’intervallo dato, annullandosi agli estremi.

Utilizziamo il metodo dei trapezi con $n=5$ suddivisioni. Risulta:

*Fonte:* [📄 PDF p.118](https://drive.google.com/file/d/1n7qQSR6joIJerX8l_7M5ZnD0O28Aqabx/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
