---
title: 2024 Ordinaria — Prova — Quesito 2 — Svolgimento
tipo: soluzione
item_id: sol_ques_2024_sessione_ordinaria_2024_prova_1_2
of_item: ques_2024_sessione_ordinaria_2024_prova_1_2
prova_id: prova_2024_sessione_ordinaria_2024_prova_1
anno: '2024'
pdf: Prova_Maturita_2024.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_2024_sessione_ordinaria_2024_prova_1_2|2024 Ordinaria — Prova — Quesito 2]] · **Prova:** [[Prove/2024_sessione_ordinaria_2024_prova_1|2024 Ordinaria — Prova]]

Liceo Scientifico 2024 - Quesiti

QUESITO $2$

a)

Si tratta di un problema di prove ripetute (distribuzione binomiale), con probabilità di “un successo” uguale
a $p$ (uscita della testa), $n= 5$ e $k= 2.$ La probabilità di ottenere testa esattamente $2$ volte nei cinque lanci
è data da (ricordiamo che $q= 1 -p):$

$pk,n= (n$
$k) pkqn-k= p2,5 = (5$
$2) p^{2}(1 -p)3 = 10p^{2}(1 -p)3$

$b)$

Posto $y= 10p^{2}(1 -p)3,$ si chiede il valore di $p$ (con $0 \le p\le 1)$ che rende massima $y.$
Notiamo che $y$ è massima se lo è $z= p^{2}(1 -p)3.$

Metodo delle derivate

Risulta: $z' = 2p(1 -p)3 + p^{2} ∙3(1 -p)2(-1) = (1 -p)2(2p-2p^{2} -3p^{2}) = (1 -p)2(2p-5p^{2})$

$z' \ge 0$ se $p(1 -p)2(2 -5p) \ge 0.$ Ma $p\ge 0$ e $(1 -p)2 \ge 0$ quindi $z' \ge 0$ se $2 -5p\ge 0, p\le$
$$ 2 5 $$
Essendo $0 \le p\le 1$ risulta $z' \ge 0$ per $0 \le p\le$
$5$ e $z' \le 0$ per
$5 \le p\le 1$ .

La funzione $z$ è quindi crescente per $0 \le p\le$
$5$ e decrescente per
$5 \le p\le 1,$ pertanto è massima per
$p=$
$$ 2 5. $$

il massimo valore che può assumere $p$ per avere testa esattamente $2$ volte nei $5$ lanci è $p=$
$$ 2 5 . $$

Metodo elementare

Dobbiamo trovare il massimo di $p^{2}(1 -p)3,$ che è il prodotto delle potenze di due quantità $(p$ e $1-p)$ di
somma costante: $p+ (1 -p) = 1.$ Il massimo si ha quando le basi sono proporzionali agli esponenti:

$2 = 1 -p$
$3p= 2 -2p,$
$5p= 2,$
$p= 2$

N.B.

Abbiamo usato la seguente proprietà:

se $x+ y$ è costante, allora il prodotto xayb è massimo se
$a=$
$b$ .

*Fonte:* [📄 PDF p.16](https://drive.google.com/file/d/1VOgKnntd-8HAK_xN07R1HOW3WMKnaLip/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
