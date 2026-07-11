---
title: 2024 Straordinaria — Prova — Quesito 8 — Svolgimento
tipo: soluzione
item_id: sol_ques_2024_sessione_straordinaria_2024_prova_70_8
of_item: ques_2024_sessione_straordinaria_2024_prova_70_8
prova_id: prova_2024_sessione_straordinaria_2024_prova_70
anno: '2024'
pdf: Prova_Maturita_2024.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_2024_sessione_straordinaria_2024_prova_70_8|2024 Straordinaria — Prova — Quesito 8]] · **Prova:** [[Prove/2024_sessione_straordinaria_2024_prova_70|2024 Straordinaria — Prova]]

Sessione straordinaria 2024 - Quesiti

I vertici sono in questo caso le intersezioni con la retta di equazione $y= -x$ ed hanno coordinate:

$C= (-\sqrt -k, \sqrt -k)$ e $D= (\sqrt -k, -\sqrt -k)$

Risulta:

$y' = -k$
$x^{2} ; y'(-\sqrt -k) = y'(\sqrt -k) = -k$
$-k= 1.$

Le tangenti nei vertici hanno quindi coefficiente angolare uguale a $1,$ quindi sono perpendicolari alla
bisettrice degli assi $y= -x.$

QUESITO $8$

Scrive Paolo Giordano ne “La solitudine dei numeri primi”: «I numeri primi sono divisibili soltanto per $1$
e per sé stessi. Se ne stanno al loro posto nell'infinita serie dei numeri naturali, schiacciati come tutti fra
due, ma un passo in là rispetto agli altri».
Si considerino la funzione f(x) $= xp$ e la sua derivata $(p-1) -esima f(p-1).$ Si può dimostrare
che, se $p$ è un numero primo, allora $p$ divide $f(p-1)+1.$ Verificare la correttezza di tale affermazione per
tutti i numeri primi minori di $10.$

Posto f(x) $= xp,$ la sua derivata prima è f’ $(x) = pxp-1.$

Il primo numero primo è $p= 2.$ In tal caso f(x) $= x^{2},$ la derivata $(p-1) -esima$ corrisponde alla
derivata prima, che è f'(x) $= 2x.$ Risulta $f(p-1) + 1 =$ f'(x) $+ 1 = 2x+ 1:$ CHE NON E’
DIVISIBILE PER $2.$

Se $p= 3,$ f(x) $= x^{3}$ , la derivata $(p-1) -esima$ corrisponde alla derivata seconda, che è
f''(x) $= 3(2x).$ Risulta $f(p-1) + 1 =$ f''(x) $+ 1 = 6x+ 1:$ CHE NON E’ DIVISIBILE PER $3.$

La derivata di ordine $(p-1)$ è data da:

$f(p-1)(x) = p(p-1) ... ( 2)$
⏟
$p-1$ termini
$xp-(p-1) = p! x$

Sessione straordinaria 2024 - Quesiti

Quindi: $f(p-1) + 1 = p! x+ 1,$ CHE NON è MAI DIVISIBILE PER $p.$
L’AFFERMAZIONE “Si può dimostrare che, se $p$ è un numero primo, allora $p$ divide $f(p-1)+1”.$
È QUINDI FALSA.
Il testo quindi contiene qualche errore. Siccome la falsità dell’affermazione non dipende dal fatto che $p$
sia primo ci siamo chiesti quale parte del testo fosse errata. L’idea ci è venuta pensando che se $f(p-1)(x)$
fosse $(p-1)!$ allora $f(p-1)(x) + 1$ sarebbe uguale a $(p-1)! + 1.$ Questa quantità $fa$ venire in mente un
Teorema di Teoria dei numeri (teorema di Wilson) da cui si deduce che se $p$ è un numero primo allora
$(p-1)! + 1$ è divisibile per $p$ (e vale anche il viceversa).

Affinché sia $f(p-1)(x) = (p-1)!$ , la funzione f(x) deve essere f(x) $= xp-1.$

Verifichiamo con questa funzione quanto richiesto (dobbiamo analizzare i numeri primi inferiori a $10,$
quindi $p= 2,3,5,7).$

$1)$ Il primo numero primo è $p= 2.$ In tal caso f(x) $= x,$ la derivata $(p-1) -esima$ corrisponde
alla derivata prima, che è f'(x) $= 1.$ Risulta $f(p-1) + 1 =$ f'(x) $+ 1 = 1 + 1 = 2$ : che è
divisibile per $p= 2.$

$2)$ Se $p= 3:$ f(x) $= xp-1 = x^{2},$ la derivata $(p-1) -esima$ corrisponde alla derivata seconda,
che è f''(x) $= 2.$ Risulta $f(p-1) + 1 =$ f''(x) $+ 1 = 2 + 1 = 3$ : che è divisibile per $p= 3.$

$3)$ Se $p= 5:$ f(x) $= xp-1 = x^{4},$ la derivata $(p-1) -esima$ corrisponde alla derivata quarta,
che è $f(4)(x) = 4 ∙3 ∙2 ∙1 = 4!.$ Risulta $f(p-1) + 1 = f(4)(x) + 1 = 4! + 1 = 25$ : che è
divisibile per $p= 5.$

$4)$ Infine, se $p= 7:$ f(x) $= xp-1 = x^{6},$ la derivata $(p-1) -esima$ corrisponde alla derivata $6,$
che è $f(6)(x) = 6!$ Risulta $f(p-1) + 1 = f(6)(x) + 1 = 6! + 1 = 721:$ che è divisibile per
$p= 7 (721: 7 = 103).$

Ribadiamo che, in generale, se f(x) $= xp-1$ la derivata di ordine $p-1$ è $f(p-1)(x) = (p-1)!$ Quindi

$f(p-1)(x) + 1 = (p-1)! + 1$

Per una dimostrazione del Teorema di Wilson si può consultare il seguente interessante articolo:

$https://dainoequinoziale.it/resources/scienze/matematica/Wilson1.pdf$

Nota finale
A parte l’errore nella formulazione del testo (di cui noi abbiamo proposto una possibile variante) è
evidente che l’argomento difficilmente è alla portata di uno studente di liceo. Anche se, a dire il vero, era
richiesta solo la verifica della proprietà per alcuni valori di $p$ (i numeri primi inferiori a $10)$ e, come
abbiamo visto, questa verifica è semplice.

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.89](https://drive.google.com/file/d/1VOgKnntd-8HAK_xN07R1HOW3WMKnaLip/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
