---
title: 2002 Straordinaria PNI — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2002_pni_2002_sessione_straordinaria_problema1_81_1
of_item: prob_2002_pni_2002_sessione_straordinaria_problema1_81_1
prova_id: prova_2002_pni_2002_sessione_straordinaria_problema1_81
anno: '2002'
pdf: Prova_Maturita_2002.pdf
cluster: Algebra
tags:
  - maturita/soluzione
  - area/algebra
  - cluster/algebra
  - anno/2002
---

**Problema:** [[Problemi/prob_2002_pni_2002_sessione_straordinaria_problema1_81_1|2002 Straordinaria PNI — Problema 1 — Problema 1]] · **Prova:** [[Prove/2002_pni_2002_sessione_straordinaria_problema1_81|2002 Straordinaria PNI — Problema 1]]

PNI 2002 - SESSIONE STRAORDINARIA - PROBLEMA $1$

Considerato il seguente sistema lineare nelle incognite $x, y, z:$

$x+ ay+ a2z= 1$
$x+ ay+ abz=$ a
$bx+ a2y+ a2bz= a2b$

a)

stabilire sotto quali condizioni per i parametri reali a, $b$ esso è:
determinato, indeterminato, impossibile.

Calcoliamo il determinante della matrice dei coefficienti A (secondo il teorema di Laplace
applicato alla prima riga):

det $A= |$
$$ a a a^{2} 1 a ab b a^{2 $$
$a2b$
$| = a(a3b-a3b) -a(a2b-ab2) + a^{2}(a^{2} -ab) =$

$= a^{4} + a2b^{2} -2ba3 = a^{2}(a^{2} + b^{2} -2ab) = a^{2}(a-b)2$

Se det $A\ne 0,$ per il teorema di Cramer il sistema è determinato.
Se det $A= 0 (a= 0$ oppure $a= b)$ il sistema è impossibile o indeterminato. Dobbiamo
analizzare il rango della matrice dei coefficienti A e quello della matrice orlata $B$ (ottenuta
aggiungendo $ad$ A la colonna dei termini noti).

Se $a=0:$

$A=$ [
$$ 0 0 0 1 0 0 b 0 0 $$
] , $B=$ [
$$ 0 0 1 0 b 0 $$

$$ 0 1 0 0 0 0 ] $$

Il rango di A è chiaramente $1$ per ogni valore di $b;$ il rango di $B$ è invece $2$ per ogni valore
di $b:$ il minore ottenuto con prima e quarta colonna e le prime due righe vale infatti $-1.$

Pertanto per $a=0$ il sistema è impossibile (teorema di $Rouchè-Capelli).$

Analizziamo ora il caso in cui $a=b$ (con a non nullo).

$A=$ [
$$ a a a^{2} 1 a a^{2} a a^{2} a^{3 $$
] , $B=$ [
$$ a a 1 a a a^{2} a^{2} 1 a^{2} a a^{3} a^{3} ] $$

Per calcolare il rango di A possiamo escludere la terza colonna, in quanto proporzionale
alla seconda; considerando le prime due colonne si osserva che se $a=1$ il rango è $1$
mentre se a è diverso da $1$ il rango è $2.$

Per quando riguarda il rango di $B,$ notiamo che se $a=1$ anche il suo rango è $1.$ Se a è
diverso da $1$ vediamo se il rango è $2$ come quello di A oppure se può essere $3.$ A tale
scopo, trascurando per quanto detto sopra la terza colonna calcoliamo il seguente
determinante:

$$ | a a 1 1 a a a a^{2} a^{3 $$
$| = a|$
$$ a 1 1 1 1 a a a a^{3 $$
$| = a^{2} |$
$$ a 1 1 1 1 a 1 1 a^{2 $$
$| = a^{2}[a(a^{2} -a) -(a^{2} -a) + (0)] =$

$= a^{2}(a^{3} -2a^{2} +$ a) $= a^{3}(a^{2} -2a+ 1) = a^{3}(a-1)^{2}$ che è diverso da zero per a diverso
da zero e da $1.$

Quindi: se $a\ne 0$ ed $a= b,$ quando $a=b=1$ il sistema è indeterminato, con $\infty n-r= \infty 3-1 =$
$= \infty 2$ soluzioni. Quando a e $b$ sono diversi da $1$ il sistema è impossibile, essendo il rango
di A uguale a $2$ ed il rango di $B$ uguale a $3.$

Concludendo:

se $a\ne 0$ e $a\ne b:$ sistema determinato;
se $a= 0:$ sistema impossibile;
se $a= b= 1:$ sistema indeterminato, con $\infty 2$ soluzioni;
se $a= b\ne 1:$ sistema impossibile.

$b)$

Posto che la terna $(x; y; z)$ sia una soluzione del sistema $[1],$ studiare la curva di
equazione:

$y-$
$a(a-b) = x$
$a+ z$

e disegnarne l’andamento in un riferimento cartesiano ortogonale (Oab).

Dobbiamo risolvere il sistema quando è determinato, cioè quando $a\ne 0$ e $a\ne b$ .

Il determinante $D$ della matrice dei coefficienti vale $a^{2}(a-b)2.$

Calcoliamo i determinanti $Dx, Dy$ e $Dz$ delle matrici che si ottengono da A sostituendo
rispettivamente la prima, la seconda e la terza colonna con la colonna dei termini noti.

$Dx=$ det (
$$ 1 a a^{2} a a ab $$
$a2b$
$$ a^{2 $$
$a2b$
) $= a^{5} + b2a^{4} -ba5 -ba4 = (-$ a $b +$ a $+ b^{2} - b)a^{4} =$
$= a^{4}(b-1)(b-a)$

$Dy=$ det (
$$ 1 1 a^{2} 1 a ab b ba2 ba2 $$
) $= ab2 -b2a^{3} + ba4 -ba2 = ab(a^{3} -$ a $- b a^{2} + b) =$
$= ab(a^{2} -1)(a-b)$

$Dz=$ det (
$$ 1 a 1 1 a a b a^{2} ba2 $$
) $= ba2 -ab+ a^{2} -a^{3} = a(- a^{2} +$ a $b +$ a $- b) = a(a-b)(1 -a)$

Quindi la soluzione del sistema (per il teorema di Cramer) è:

$x= Dx$
$D= a^{4}(b-1)(b-a)$
$a^{2}(a-b)2$
$= a^{2}(1 -b)$
$a-b$

$y= Dy$
$D= ab(a^{2} -1)(a-b)$
$a^{2}(a-b)2$
$= b(a^{2} -1)$
$a(a-b)$

$z= Dz$
$D= a(a-b)(1 -a)$
$a^{2}(a-b)2$
$= (1 -a)$
$a(a-b)$

Sostituiamo in $y-$
$a(a-b) =$
$a+ z$ :

$b(a^{2} -1)$
$a(a-b) -$
$a(a-b) = a(1 -b)$
$a-b$
$+ (1 -a)$
$a(a-b)$

Da cui:

$b(a^{2} -1) -b= a^{2}(1 -b) + 1 -a; b(a^{2} -1 -1 + a^{2}) = a^{2} + 1 -a;$

$b=$
$a^{2}-a+1$
$2(a^{2}-1)$ (privata dei punti con $a= 0$ e $a= b;$ cioè privata di $(0; -$
$2)$ e dei punti della
curva che appartengono alla reta $b=a,$ bisettrice del primo e terzo quadrante).

Passiamo quindi allo studio della funzione di equazione (prescindiamo, per ora, delle
condizioni su a e $b)$

$b=$ f(a) $= a^{2}-a+ 1$
$2(a^{2}-1)$

Si tratta di una funzione razionale fratta in cui il grado del denominatore è uguale a quello
del numeratore, quindi avremo un asintoto orizzontale e nessun asintoto obliquo.

Dominio:

$a\ne \pm 1$ , quindi: $-\infty < a< -1 , -1 < a< 1$ ,
$1 < a< +\infty$

La funzione non pari né dispari come si constata facilmente valutando $f(-a),$ che è
diverso sia da f(a), sia da $-f(a).$

Intersezioni con gli assi cartesiani:

Se $a=0, b=-1/2.$
Se $b=0, a^{2} -a+ 1 = 0$ , mai verificato perché il delta è negativo.

Segno della funzione:

$b> 0$ se $a^{2} -a+ 1$
$2(a^{2} -1) > 0$ da cui, essendo $a^{2} -a+ 1 > 0$ sempre, $a^{2} -1 > 0:$

$a< -1$ vel $a> 1$

Limiti:

$lima\to \pm \infty$ (
$a^{2}-a+1$
$2(a^{2}-1)) = lima\to \pm \infty$ (
$$ a^{2 $$
$2a^{2}) =$
$2$ , quindi $b=1/2$ asintoto orizzontale, come già
notato.

$lima\to (-1)\mp$
$a^{2}-a+1$
$2(a^{2}-1) = \pm \infty$ (a $= -1$ asintoto verticale).

$lima\to (1)\mp$
$a^{2}-a+1$
$2(a^{2}-1) = \mp \infty$ (a $= +1$ asintoto verticale).

Derivata prima:

f'(a) =
$4a^{2}-16a+4$
$8a^{4}-16a^{2}+8 =$
$a^{2}-4a+1$
$2(a^{2}-1)^{2} \ge 0$ se $a^{2} -4a+ 1 \ge 0 : a\le 2 -\sqrt{3} , a\ge \sqrt{3} + 2.$

La funzione è quindi crescente se $a< 2 -\sqrt{3} , a> \sqrt{3} + 2$ e decrescente se

$2 -\sqrt{3} < a< 2 + \sqrt{3}$ . Quindi $a= 2 -\sqrt{3}$ è punto di massimo relativo (ordinata $-\sqrt{3}$
$a= 2 + \sqrt{3}$ è punto di minimo relativo (ordinata $\sqrt{3}$
$4$ ). Notiamo che $\sqrt{3}$
$4 < 0.5$ , quindi la
curva interseca l’asintoto orizzontale

Derivata seconda:

f''(a) $= a^{3} -6a^{2} + 3a-2$
$1 -3a^{2} + 3a^{4} -a^{6}$

Senza indugiare nello studio della derivata seconda, possiamo dire che la funzione
presenta un flesso per $a> \sqrt{3}$

Il grafico della funzione è il seguente:

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.81](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)


#maturita/soluzione #area/algebra #cluster/algebra
