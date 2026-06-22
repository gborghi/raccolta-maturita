---
title: 2002 Suppletiva PNI — Questionario — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2002_suppletiva_pni_2002_questionario_53_7
of_item: ques_2002_suppletiva_pni_2002_questionario_53_7
prova_id: prova_2002_suppletiva_pni_2002_questionario_53
anno: '2002'
pdf: Prova_Maturita_2002.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2002
---

**Quesito:** [[Quesiti/ques_2002_suppletiva_pni_2002_questionario_53_7|2002 Suppletiva PNI — Questionario — Quesito 7]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_questionario_53|2002 Suppletiva PNI — Questionario]]

QUESITO $7$

Verificare che la funzione $y=$ f(x) =
$1-e^{1}-x$
$1+e^{1}-x$ è invertibile e detta $g$ la funzione inversa,
calcolare $g'(0).$

Calcoliamo la derivata prima della funzione:

f'(x) =
$2e^{1}-x$
$(1+e^{1}-x)2 > 0$ per ogni $x:$ la funzione è quindi sempre crescente perciò è

invertibile. In base al teorema sulla derivata della funzione inversa, detta $g$ l’inversa di $f$
risulta:
$g'(y^{0}) =$
$f'(x^{0})$ , con $y^{0} = f(x^{0})$
Sappiamo che $y^{0} = 0$ quindi risulta:
$1-e^{1}-x$
$1+e^{1}-x= 0 , 1 -e^{1}-x= 0 , e^{1}-x= 1 : x^{0} = 1$
Quindi:
$g'(0) =$
$f'(1) =$
$$ 1 2 4 = 2 . $$

QUESITO $8$

Con uno dei metodi di quadratura studiati, si valuti l’integrale definito

$\int ln x$
$$ x 3 1 dx $$

con un errore inferiore a $10-4.$

La funzione f(x) =
ln(x)
$x$ è continua nell’intervallo $[1;3]$ ed è derivabile almeno due volte
nell’intervallo aperto $(1;3):$

f'(x) $= -ln(x) + 1$
$$ x^{2 $$
, f''(x) $= 2ln(x) -3$
$$ x^{3 $$

Detto $M$ il massimo di $|f''(x)|$ nell’intervallo $[1;3]$ , l’errore $En$ che si commette
approssimando l’integrale mediante la formula dei trapezi con $n$ suddivisioni risulta:

$En\le (b-a)3$
$12n^{2}$
∙M

Nel nostro caso, nell’intervallo dato, risulta:

$|f''(x)| = |$
$2ln(x)-3$
$$ x^{3} | $$

che assume il valore massimo $3$ per $x =1;$ infatti nell’intervallo $[1;3]$ per tale valore di $x$ il
numeratore è massimo ed il denominatore è minimo. Quindi:

$En\le (b-a)3$
$12n^{2}$
$∙M= (3 -1)^{3}$
$12 n^{2}$
$∙3 = 2$
$n^{2} : En\le 2$
$$ n^{2 $$

Dobbiamo trovare $n$ in modo che $En\le 10-4$ .

$n^{2} \le 1$
$104$ se $n^{2} \ge 2 ∙104 , n\ge 141.4$

Quindi per avere un’approssimazione dell’integrale con un errore inferiore a $10-4$ con il
metodo dei trapezi occorre dividere l’intervallo $[1;3]$ in almeno $142$ parti !!!

$\int f(x)dx\cong b-a$
$[f(x^{0}) +$ f(xn)
$+ f(x^{1}) + f(x^{2}) + ⋯+ f(xn-1)]$
$$ b a $$

$b-a$
$$ n = 2 142 = 1 71 $$

$\int ln x$
$$ x 3 1 $$
$dx\cong$
$142 [f(1) + f(3)$
$+ f(1 + 1$
$71) + f(1 + 2$
$71) + ⋯+ f(1 + 141$
$$ 71 )] $$

Da questo calcolo (lunghissimo!) si ottiene (con l’aiuto di un computer!):

$\int ln x$
$$ x 3 1 $$
$dx\cong 0.603458$

Notiamo che il valore esatto dell’integrale è:

$\int ln x$
$$ x 3 1 $$
$dx= 1$
$2 [ln2 x]1$
$3 = ln2 3$
$\cong 0.603474$ ...

Quindi il valore approssimato a meno di $10-4$ è $0.6035.$

Se si volesse utilizzare la formula delle parabole $(Cavalieri-Simpson)$ avremmo come
errore massimo:

$En\le$
$(b-a)5$
$2880n^{4}$ ∙M , dove $M$ è il massimo del valore assoluto della derivata quarta della

funzione. Il calcolo sarebbe un po’ più semplice, ma sempre molto laborioso.

Una richiesta di errore inferiore a $10-2$ sarebbe stata più che adeguata $ad$ accertare le
conoscenze richieste ed avrebbe portato a calcoli certamente più umani!

*Fonte:* [📄 PDF p.56](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
