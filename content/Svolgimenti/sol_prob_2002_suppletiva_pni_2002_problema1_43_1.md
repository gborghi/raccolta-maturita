---
title: 2002 Suppletiva PNI — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2002_suppletiva_pni_2002_problema1_43_1
of_item: prob_2002_suppletiva_pni_2002_problema1_43_1
prova_id: prova_2002_suppletiva_pni_2002_problema1_43
anno: '2002'
pdf: Prova_Maturita_2002.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2002
---

**Problema:** [[Problemi/prob_2002_suppletiva_pni_2002_problema1_43_1|2002 Suppletiva PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2002_suppletiva_pni_2002_problema1_43|2002 Suppletiva PNI — Problema 1]]

Suppletiva PNI 2002 - Problema $1$

PNI 2002 SESSIONE SUPPLETIVA - PROBLEMA $1$

Nel piano riferito a coordinate cartesiane ortogonali monometriche $(x, y)$ è
assegnata la funzione:
$y= a+ b ln x$

ove $ln x$ denota il logaritmo naturale di $x$ e a e $b$ sono numeri reali non nulli.

a)

Si trovino i valori di a e $b$ per i quali il grafico  della funzione passa per i punti
$(e-1; 0)$ e $(e^{2}; 3e-2).$

Imponiamo il passaggio per i punti dati:

$0 = a+ bln(e-1)$
$e-1$
$3e-2 = a+ b ln (e^{2})$
$$ e^{2} ; $$
$0 = a-b$
$e-1$
$3e-2 = a+ 2b$
$$ e^{2} ; $$
$a= b$
$3 = a+ 2b ; {a= 1$
$b= 1$

La funzione richiesta ha quindi equazione: $y=$
$1+ln x$

$b)$

Si studi e si disegni .

$y= 1 + ln x$

Dominio: $x>0; 0< x< +\infty$ ;

Intersezioni con gli assi

$x=0:$ non ha senso;
$y=0: ln x= -1 , x= e-1$

Segno della funzione

La funzione è positiva se $1 + ln x> 0 , x> e-1$

Suppletiva PNI 2002 - Problema $1$

Simmetrie notevoli

Visto il dominio, la funzione non può essere pari né dispari.

Limiti

$limx\to 0+ 1+ln x$
$= -\infty : x=0$ asintoto verticale.

$limx\to +\infty$
$1+ln x$
$= limx\to +\infty$
$ln x$
$= 0+: y=0$ asintoto orizzontale (quindi non può esserci

asintoto obliquo).

Derivata prima

$y' = -$
ln(x)
$x^{2} > 0$ se $ln(x)<0, 0<x<1:$ in tale intervallo il grafico è crescente, per $x>1$ il
grafico è decrescente: $x=1$ è punto di massimo relativo (e assoluto) ordinata $y=1.$

Derivata seconda

y'' =
$2ln(x)-1$
$$ x^{3 $$
$> 0$ se ln(x) >
$2$ , da cui $x>$ e
$2 = \sqrt{e}$ : in tale intervallo il grafico volge la
concavità verso l’alto, per $0 < x< \sqrt{e}$ la concavità è rivolta verso il basso; $x= \sqrt{e}$ è un
punto di flesso, con ordinata $y=$
$1+ln$ (e
$$ 1 2) e 1 2 = 1+1 2 $$
$\sqrt{e}=$
$2\sqrt{e}:$ flesso $F= (\sqrt{e};$
$2\sqrt{e})$

Il grafico della funzione è il seguente:

Suppletiva PNI 2002 - Problema $1$

$c)$

Si determini l’equazione della curva  ’ simmetrica di  rispetto alla retta $y = y(1).$

La retta richiesta ha equazione:

$y= y(1) = 1$

Le equazioni della simmetria rispetto alla retta di equazione $y=b$ sono:

$X= x$
$Y= 2b-y$ ; {
$X= x$
$Y= 2 -y$ ; {
$x= X$
$y= 2 -Y$

Quindi sostituendo nell’equazione di  otteniamo:

$2 -Y= 1 +$ ln(X)
, $Y= 2 -1 +$ ln(X)
, $Y= 2X-1 -ln(X)$
: $\Gamma$ '

$d)$

Si determini, con uno dei metodi numerici studiati, un’approssimazione dell’area
delimitata, per $1$  $x$  $2,$ da  e da  ’.

L’area richiesta (si veda la figura) si determina mediante il seguente integrale definito:

$\int [(2 -1 +$ ln(x)
) $-(1 +$ ln(x)
)] $dx= \int 2x-2 -2ln (x)$
$dx= 2I$
$$ 2 1 2 1 $$

Avendo posto: $I= \int$ f(x) $dx$
$$ 2 1 $$
con f(x) =
$x-1-ln (x)$

Applichiamo il metodo dei trapezi per calcolare un valore approssimato di I:

Suppletiva PNI 2002 - Problema $1$

$\int f(x)dx\cong b-a$
$[f(x^{0}) +$ f(xn)
$+ f(x^{1}) + f(x^{2}) + ⋯+ f(xn-1)]$
$$ b a $$

Consideriamo la funzione f(x) =
$x-1-ln (x)$
e l’intervallo $[1;2];$ calcoliamo l’integrale
$I= \int$ f(x) $dx$
$$ 2 1 $$
utilizzando il metodo dei trapezi. Dividiamo l’intervallo in $n=5$ parti.

$\int (x-1 -ln (x)$
) $dx$
$$ 2 1 $$
$\cong h[f(x^{0}) + f(x^{5})$
$+ f(x^{1}) + f(x^{2}) + f(x^{3}) + f(x^{4})]$

Dove: $h=$
$2-1$
$$ 5 = 1 $$
$5 = 0.2 x^{0} = 1, x^{1} = 1 + h= 1.2, x^{2} = 1.4, x^{3} = 1.6, x^{4} = 1.8, x^{5} = 2$

$I\cong 0.2 [f(1) + f(2)$
$+ f(1.2) + f(1.4) + f(1.6) + g(1.8)] =$

$= 0.2 [0 + 0.153$
$+ 0.015 + 0.045 + 0.081 + 0.118] = 0.2 ∙0.3355 \cong 0.0671$

L’area richiesta è:

$2I\cong 2 ∙0.0671 \cong 0.1342 \cong 0.13 u^{2}$

Suppletiva PNI 2002 - Problema $1$

N.B.

Una primitiva di f(x) =
$x-1-ln (x)$
è

Il valore esatto di $\int$ (
$x-1-ln (x)$
) $dx$
$$ 2 1 $$
è:

e)

Si disegnino, per i valori di a e $b$ trovati, i grafici di:

$y= a+ b ln |x|$
$|x|$
, $y= |a+ b ln x$

$y= a+ b ln |x|$
$|x|$
$\implies y= 1 + ln |x|$
$|x|$
$= f(|x|)$

Ricordiamo che il grafico di $y= f(|x|)$ si ottiene da quello di $y=$ f(x) confermando la
parte a destra dell’asse $y$ e ribaltandola a sinistra; quindi il grafico della funzione in
oggetto è il seguente:

Suppletiva PNI 2002 - Problema $1$

$y= |a+ b ln x$
$| \implies y= |1 + ln x$

Il grafico di $y= |f(x)|$ si ottiene da quello di $y=$ f(x) confermando la parte sopra
l’asse $x$ e ribaltando quella sotto l’asse $x:$

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.43](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
