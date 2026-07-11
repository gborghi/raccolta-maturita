---
title: 2001 Suppletiva PNI — Questionario — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2001_suppletiva_pni_2001_questionario_48_7
of_item: ques_2001_suppletiva_pni_2001_questionario_48_7
prova_id: prova_2001_suppletiva_pni_2001_questionario_48
anno: '2001'
pdf: Prova_Maturita_2001.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2001
---

**Quesito:** [[Quesiti/ques_2001_suppletiva_pni_2001_questionario_48_7|2001 Suppletiva PNI — Questionario — Quesito 7]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_questionario_48|2001 Suppletiva PNI — Questionario]]

Un assioma (o postulato) è una proprietà che viene assunta come vera in una teoria,
una proprietà che non viene cioè dimostrata (per esempio i quinto postulato di euclide,
che assume l’unicità della parallela $ad$ una retta data per un punto dato). A dire il vero il
termine postulato è utilizzato in ambito geometrico, mentre il termine assioma è utilizzato
per una teoria qualsiasi; per esempio Peano costruisce una teoria assiomatica dei numeri
naturali, in cui un assioma è il seguente: zero è un numero naturale.

I concetti primitivi e gli assiomi sono le basi di ogni teoria deduttiva che si presenti come
sistema assiomatico.

Si può applicare la definizione di derivata (come indicato in tutti i libri di testo) oppure, se
è noto che

D(ef(x)) = f'(x) ∙ef(x)

Più velocemente ne seguente modo:

D(ax) = D(eln(ax)) = D(ex∙ln(a)) = ln(a) ∙(ex∙ln(a)) = ax∙ln (a)

QUESITO $6$

Nell’insieme delle cifre $1, 2, 3, ..., 9$ se ne scelgono due a caso. La loro somma è pari:
determinare la probabilità che entrambe le cifre siano dispari.

Le coppie con somma pari sono $16:$
$(1,3), (1,5), (1,7), (1,9)$
$(2,4), (2,6), (2,8)$
$(3,5), (3,7), (3,9)$
$$ (4,6), (4,8) (5,7), (5,9) (6,8) (7,9) $$

Di queste, quelle con le cifre dispari sono $10.$ Quindi la probabilità richiesta è:

$p= n.$ coppie con somma pari e cifre dispari
$n.$ coppie con somma pari
$$ = 10 16 = 5 8 $$

QUESITO $7$

Verificato che l’equazione $x^{3} -2x-5 = 0$ ammette una sola radice reale compresa tra
$2$ e $3,$ se ne calcoli un’approssimazione applicando uno dei metodi numerici studiati.

Consideriamo la funzione f(x) $= x^{3} -2x-5$ ; essa, in quanto funzione razionale intera,
è continua e derivabile nell’intervallo $[2;3];$ risulta poi:

f(a) $= f(2) = -3 < 0$ , f(b) $= f(3) = 16 > 0$

Quindi, per il teorema degli zeri, la funzione si annulla almeno una volta in $(2;3),$ come
dire che l’equazione data ammette almeno una radice reale tra $2$ e $3.$ Dimostriamo che
tale radice è unica:
f'(x) $= 3x^{2} -2 > 0$ se $x< -\sqrt{2}$
$3$ vel $x> \sqrt{2}$
$3 (< 2)$
Quindi nell’intervallo $(2,3)$ la funzione è crescente, pertanto la radice è unica (unica
intersezione del grafico della funzione con l’asse $x).$

Applichiamo il metodo delle tangenti per risolvere l’equazione. Dobbiamo valutare il
segno della derivata seconda:

f''(x) $= 6x> 0$ se $x> 0$ : quindi f''(x) $> 0$ in $(2; 3)$

Essendo f(a) ∙f''(x) $< 0$ in [a, b] $= [2; 3]$ dobbiamo assumere come punto iniziale di
iterazione $x^{0} = b= 3.$

$xn+1 = xn-$
f(xn)
f'(xn) ; Quindi:

$x^{1} = x^{0} -$
$f(x^{0})$
$f'(x^{0}) = 3 -$
$f(3)$
$f'(3) \cong 2.360 ; x^{2} = x^{1} -$
$f(x^{1})$
$f'(x^{1}) = 2.360 -$
$f(2.360)$
$f'(2.360) \cong 2.1272$

$x^{3} = x^{2} -$
$f(x^{2})$
$f'(x^{2}) = 2.127 -$
$f(2.1272)$
$f'(2.1272) \cong 2.0951; x^{4} = x^{3} -$
$f(x^{3})$
$f'(x^{3}) = 2.127 -$
$f(2.0951)$
$f'(2.0951) \cong 2.0946$

Quindi la radice approssimata a meno di un centesimo è: $x= 2.09$ .

Valore esatto della radice: $2.094551...$

Diagramma di iterazione:


*Fonte:* [📄 PDF p.51](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
