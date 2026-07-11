---
title: 2015 Suppletiva — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2015_suppletiva_2015_problema2_171_1
of_item: prob_2015_suppletiva_2015_problema2_171_1
prova_id: prova_2015_suppletiva_2015_problema2_171
anno: '2015'
pdf: Prova_Maturita_2015.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2015
---

**Problema:** [[Problemi/prob_2015_suppletiva_2015_problema2_171_1|2015 Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2015_suppletiva_2015_problema2_171|2015 Suppletiva — Problema 2]]

Suppletiva 2015 - Problema $2$

SESSIONE SUPPLETIVA - 2015

PROBLEMA $2$

La rotazione intorno all’asse $x$ dei grafici della famiglia di funzioni:

fk(x) =
$4k\sqrt{k}^{2} -x$ con $x\in R, 0 \le x\le k^{2} , k\in R , k> 0$

genera dei solidi di rotazione di forma aerodinamica.

In un riferimento cartesiano Oxy, traccia i grafici delle funzioni fk(x), per $k= 1,$
$k= 2, k= 3$ e determina il valore di $k$ per il quale il volume del solido di rotazione
assume il valore
$64\pi$
$$ 192. $$

Studiamo la generica funzione: $y=$ fk(x) =
$4k\sqrt{k}^{2} -x$

Dominio: la funzione esiste quando $k^{2} -x\ge 0$ , quindi: se $x\le k^{2};$ il dominio della
funzione è quindi quello fornito: $0 \le x\le k^{2}$ ; in tale intervallo la funzione non è mai
negativa.

Visto il dominio, la funzione non può essere pari né dispari.

Intersezioni con gli assi cartesiani:

Se $x= 0,$
$y= 0.$ Se $y= 0 , x= 0$ ed $x= k^{2}$

Essendo la funzione continua in un intervallo chiuso e limitato non occorre calcolare
alcun limite.

Derivata prima (
$\partial$
$\partial$ x(f(x)) sta per derivata prima di f(x)):

Essendo $0 \le x\le k^{2}$ e $k> 0,$ risulta:

f'(x) $\ge 0$ se $2k^{2} -3x\ge 0 , 0 \le x\le$
$2k^{2}$
$3$ ; quindi la funzione cresce se $0 \le x<$
$2k^{2}$

Suppletiva 2015 - Problema $2$

decresce se
$2k^{2}$
$3 < x< k^{2}:$ pertanto $x=$
$2k^{2}$
$3$ è un punto di massimo relativo (e assoluto).

Notiamo che la funzione non è derivabile se $x= k^{2}$ e risulta:

$$ lim $$
$x\to (k^{2})-f'(x) = -\infty$

quindi $x= k^{2}$ è un punto a tangente verticale.

Derivata seconda (
$\partial$
$\partial x($
$\partial$
$\partial$ x(f(x))) sta per derivata seconda di f(x)):

Risulta f''(x) $\ge 0$ se $3x-4k^{2} \ge 0 , x\ge$
$3 k^{2}$ : mai per le limitazioni sulla $x;$ pertanto il
grafico della funzione, per ogni $k,$ volge la concavità verso il basso.

I grafici per $k=1, k=2$ e $k=3$ sono i seguenti:

Per $k=1$ il massimo assoluto ha coordinate: $M^{1}$ (
$$ 2 3 ; \sqrt{3} 18) $$
Per $k=2$ il massimo assoluto ha coordinate: $M^{2}$ (
$$ 8 3 ; 2\sqrt{3} 9 ) $$
Per $k=3$ il massimo assoluto ha coordinate: $M^{3} (6; \sqrt{3}$

Volume solido di rotazione: $V= \pi \int f^{2}(x)dx$
$$ b a . $$
$V= \pi \int$
$$ x^{2 $$
$16k^{2} (k^{2} -x)dx=$
$\pi$
$16k^{2}$
$$ k^{2} 0 \int $$
$(k2x^{2} -x^{3})dx=$
$\pi$
$16k^{2}$
$$ k^{2} 0 $$
$∙[k2x^{3}$
$-x^{4}$
$$ 4 ] 0 k^{2} = $$

Suppletiva 2015 - Problema $2$

$\pi$
$16k^{2}$ ∙[
$$ k^{8 $$
$3 -$
$$ k^{8} 4 ] = $$
$\pi$
$16k^{2}$ ∙
$$ k^{8 $$
$12 = \pi$ ∙
$$ k^{6} 192 = $$
$64\pi$
$192$ se $k^{6} = 64 , k= 2.$

Calcola il diametro massimo dei solidi di rotazione in funzione di $k,$ e determina il valore
dell'angolo formato dalla tangente al grafico di $fk$ con l'asse $x$ per $x=0.$

Il diametro massimo dei solidi di rotazione è pari al doppio dell’ordinata del punto di
massimo, quindi è dato da:

$2f(2k^{2}$
$3 ) = 2$ ∙
$2k^{2}$
$4k$
$\sqrt{k}^{2} -2k^{2}$
$3 = 2$ ∙k
$$ 6 \sqrt{1 $$
$3 k^{2} = k$
$3 ∙k∙\sqrt{1}$
$3 = k^{2}$
$3 ∙\sqrt{3}$
$$ 3 = \sqrt{3 $$
$9 ∙k^{2} = d$ max
Il diametro massimo dei solidi di rotazione in funzione di $k$ è $\sqrt{3}$
$9 ∙k^{2}.$

Per $x=0$ si ha:

$f'(0) =$
$2k^{2}$
$8k\sqrt{k}^{2} =$
$2k^{2}$
$8k^{2} =$
$4 = m= tg(\alpha$ ), essendo $\alpha$ l’angolo formato con l’asse $x$ dalla
tangente al grafico di $fk$ per $x=0.$ Risulta quindi:

$tg(\alpha ) = 1$
$4$ da cui $\alpha = arctg(1$
$4) = 14^\circ 2'10", 5$

L’angolo formato con l’asse $x$ dalla tangente al grafico di $fk$ per $x=0$ vale $14^\circ 2'10", 5.$

Assumendo che la distribuzione della massa sia omogenea, il baricentro del corpo di
rotazione si trova sull’asse $x,$ per ragioni di simmetria. Determina l’ascissa $xS$ del
baricentro in funzione del parametro $k,$ sapendo che vale:

$xS=$
$\pi \int x[fk(x)]2dx$
$$ b a V $$

dove gli estremi di integrazione a e $b$ vanno scelti opportunamente, e $V$ indica il volume
del solido di rotazione.

Gli estremi a e $b$ di integrazione sono rispettivamente: $a= 0$ e $b= k^{2},$ corrispondenti
alle intersezioni con l’asse $x$ del grafico della funzione fk(x).

Risulta:
$xS=$
$\pi \int x[fk(x)]2dx$
$$ b a V = $$
$\pi \int$
x[ $x$
$4k\sqrt{k}^{2} -x]$
$$ 2 dx k^{2} 0 $$
$\pi ∙k^{6}$
$$ 192 = 192 $$
$k^{6}$ ∙
$16k^{2} ∙\int$
$x^{3}(k^{2} -x)dx$
$$ k^{2} 0 = $$

Suppletiva 2015 - Problema $2$

$$ = 12 $$
$k^{8} ∙\int$
$(k2x^{3} -x^{4})dx=$
$$ k^{2} 0 12 $$
$k^{8} ∙[k2x^{4}$
$-x^{5}$
$$ 5 ] 0 k^{2} = 12 $$
$k^{8} ∙[k^{10}$
$4 -k^{10}$
$$ 5 ] = 12 $$
$k^{8} ∙k^{10}$
$20 = 3k^{2}$

L’ascissa $xS$ del baricentro in funzione del parametro $k$ è $xS=$
$3k^{2}$

All’interno del solido di rotazione generato da $fk$ , per $k= 3,$ si vorrebbe collocare un
cilindro di raggio $0,5$ e di altezza $6.$ Verifica se ciò è possibile, motivando la tua risposta.

Il cilindro indicato ha volume: V(cilindro) $= \pi R2h= \pi ∙0.52 ∙6 =$
$2 \pi \cong 4.712.$
Il volume del solido di rotazione è $\pi$ ∙
$$ k^{6 $$
$192$ , che, per $k=3,$ assume il valore: $11.928$
Quindi, dal punto di vista del volume il cilindro si può collocare.

Ricordiamo che il diametro massimo del solido di rotazione è $\sqrt{3}$
$9 ∙k^{2},$ che per $k=3$
assume il valore $\sqrt{3};$ quindi il cilindro, che ha diametro uguale $ad 1,$ può essere collocato
con il piano di base perpendicolare all’asse $x.$
Cerchiamo l’intersezione della curva $f^{3}(x) =$
$4k\sqrt{k}^{2} -x=$
$12 \sqrt{9} -x$ con la retta di
equazione $y=0.5$ (graficamente si può già dire che ci sono due intersezioni):
$$ 1 2 = x $$
$12 \sqrt{9} -x$ da cui, elevando al quadrato: $1 =$
$$ x^{2 $$
$36 (9 -x) , 36 = 9x^{2} -x^{3}$ ,
$x^{3} -9x^{2} + 36 = 0:$ questa equazione ha una soluzione approssimata in $x= 2.3$ (per
esempio con il metodo di bisezione si scopre che tale soluzione è compresa tra $2.3$ e
$2.4);$ siccome $2.3 + 6 = 8.3 < 9$ e $2.4 + 6 = 8.4 < 9$ il cilindro può essere collocato
dentro il solido di rotazione che si ottiene per $k= 3$ se $f^{3}(8.3)$ ed $f^{3}(8.4)$ sono maggiori di
$0.5.$ Ed in effetti risulta: $f^{3}(8.3) \cong 0.58 > 0.5 , f^{3}(8.4) \cong 0.54 > 0.5:$ quindi il cilindro è
collocabile all’interno del solido di rotazione.

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.171](https://drive.google.com/file/d/1M3fBnPOYAk0BQg70levYud2t_jZneRJa/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
