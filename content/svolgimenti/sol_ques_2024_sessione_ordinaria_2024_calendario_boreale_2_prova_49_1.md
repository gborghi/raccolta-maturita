---
title: 2024 Ordinaria Boreale 2 — Prova — Quesito 1 — Svolgimento
tipo: soluzione
item_id: sol_ques_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49_1
of_item: ques_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49_1
prova_id: prova_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49
anno: '2024'
pdf: Prova_Maturita_2024.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49_1|2024 Ordinaria Boreale 2 — Prova — Quesito 1]] · **Prova:** [[Prove/2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49|2024 Ordinaria Boreale 2 — Prova]]

Boreale $2$ Sessione Ordinaria 2024 Questionario

QUESITO $1$

Si considerino due circonferenze congruenti $\gamma$ e $\gamma$ ', di centri rispettivamente O e $O',$ le quali si intersecano
nei punti A e $B.$ Indicato con $P$ il punto di intersezione della retta BO', distinto da $B,$ con la circonferenza
$\gamma$ , dimostrare che il quadrilatero PO'AO è inscrivibile in una circonferenza.

Per essere inscrittibile in una circonferenza un quadrilatero deve avere gli angoli opposti supplementari. E’
sufficiente dimostrare che gli angoli opposti AOP e PO’A sono supplementari.

Osserviamo che il quadrilatero AOBO’ è un rombo, perché tutti i suoi lati sono uguali al raggio $R$ delle due
circonferenze congruenti, quindi la retta BO’ è parallela alla retta $AO.$ Pertanto il quadrilatero PO'AO è un
trapezio (avendo i lati PO’ ed $OA$ paralleli), ed è anche isoscele essendo i lati obliqui $OP$ ed AO’
congruenti (sono uguali al raggio delle circonferenze congruenti). Essendo PO’AO un trapezio isoscele,
come tutti i trapezi isosceli è inscrittibile in una circonferenza. Infatti gli angoli AOP e OPO’ sono
supplementari. Ma OPO’ è congruente a PO’A (perché il trapezio è isoscele), quindi:

gli angoli AOP e PO’A sono supplementari: ciò dimostra che il quadrilatero PO’AO è inscrittibile in una
circonferenza.

QUESITO $2$

Si consideri una scatola contenente $9$ palline, di cui $6$ bianche e $3$ nere. Si estraggono le palline una $ad$ una
senza reinserimento finché non siano estratte $4$ palline bianche. Qual è la probabilità che siano necessarie
esattamente $4$ estrazioni? Qual è la probabilità che siano necessarie esattamente $6$ estrazioni?

La probabilità di avere $4$ palline bianche nelle prime $4$ estrazione è data da:

p(prime $4$ bianche) = p(prima bianca) ∙p(seconda bianca) ∙p(terza bianca) ∙p(quarta bianca)

p(prime $4$ bianche) =
$9$ ∙
$8$ ∙
$7$ ∙
$$ 3 6 = 5 $$
$42 \cong 0.119 = 11.9$ %

Boreale $2$ Sessione Ordinaria 2024 Questionario

Allo stesso risultato si può arrivare ragionando in termini di casi favorevoli $(f)$ e casi possibili $(n).$

I casi favorevoli sono dati dalle possibili quaterne che si possono fare con $6$ palline bianche, quindi le
combinazioni di $6$ oggetti $4$ a $4: f= C6,4 = (6$
$$ 4) = 15. $$

I casi possibili sono dati dalle possibili quaterne che si possono fare con $9$ oggetti, quindi le combinazioni
di $9$ oggetti $4$ a $4: n= C9,4 = (9$
$$ 4) = 126. $$

Quindi:

p(prime $4$ bianche) $= 15$
$$ 126 = 5 $$
$42 \cong 0.119 = 11.9$ %

Calcoliamo ora qual è la probabilità che per estrarre $4$ palline bianche siano necessarie esattamente $6$
estrazioni.

Affinché si verifichi ciò è necessario che si verifichi l’evento A:”ci siano $3$ palline bianche nelle prime $5$
estrazioni (quindi $2$ nere)” e contemporaneamente l’evento $B:$ ”la sesta pallina estratta è bianca”.

Calcoliamo la probabilità di A.

Le scelte delle $3$ palline bianche sono date da: $C6,3 = (6$
$$ 3) = 20. $$
Le scelte delle $2$ palline nere sono date da: $C3,2 = (3$
$$ 2) = 3. $$

I casi favorevoli al verificarsi di A sono quindi $20 ∙3 = 60.$

(osserviamo che il numero dei casi favorevoli si può anche calcolare come numero di estrazioni simultanee
di $5$ palline, da un’urna con $6$ bianche e $3$ nere, in modo che nella cinquina ci siano $3$ palline bianche e $2$
nere: $C6,3 ∙C3,2$ ).

I casi possibili per l’evento A sono il numero delle cinquine che si possono fare con $9$ oggetti:

$C9,5 = (9$
$$ 5) = 126. $$
Quindi: p(A) =
$$ 60 126. $$

la probabilità che ci siano $3$ bianche e $2$ nere nelle prime $5$ estrazioni è data da:
$$ 60 126. $$

Calcoliamo la probabilità che si verifichi l’evento $B.$

Dopo il verificarsi di A sono rimaste $4$ palline di cui $3$ palline bianche, quindi:

p(B) $= 3$

La probabilità che siano necessarie esattamente $6$ estrazioni per avere $4$ palline bianche è data perciò da:

$p(A\cap B) =$ p(A) ∙p(B) $= 60$
$126 ∙3$
$$ 4 = 5 $$
$14 \cong 0.357 = 35.7$ %.

*Fonte:* [📄 PDF p.63](https://drive.google.com/file/d/1VOgKnntd-8HAK_xN07R1HOW3WMKnaLip/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
