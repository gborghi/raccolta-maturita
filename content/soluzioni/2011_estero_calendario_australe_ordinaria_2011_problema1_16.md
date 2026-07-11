---
tipo: soluzione
prova_stem: 2011_estero_calendario_australe_ordinaria_2011_problema1_16
pdf: Prova_Maturita_2011.pdf
source: text
title: 2011 Estero Australe Ordinaria — Problema 1 — Svolgimento
---


Estero (calendario australe)
Ordinaria $2011-$ Problema $1$

Scuole italiane all’estero (America latina) 2011

PROBLEMA $1$

Sia $f$ la funzione definita da f(x) $= 3 ln(e^{2} -x).$

a) Si studi la funzione $f$ e se ne tracci il grafico $\Gamma$ .

Il grafico della funzione si può ottenere mediante trasformazioni geometriche elementari a
partire dal grafico di $y= ln x.$ Indichiamo i passaggi necessari:

$1)$ a(x) $= ln x$
$2)$ b(x) $= ln(e^{2} + x)$ : traslazione di vettore $(-e^{2}; 0)$
$3)$ c(x) $= ln(e^{2} -x)$ : simmetria rispetto all'assey
$4)$ f(x) $= 3 ln(e^{2} -x)$ : dilatazione verticale di fattore $3$

La funzione ha l’asintoto verticale di equazione $x= e^{2}$ . Il grafico interseca gli assi
cartesiani nei punti di coordinate $(0; 6)$ e $(e^{2} -1; 0).$

$b)$

La funzione $f$ è invertibile? Se sì, quale è la sua equazione? E quale il suo grafico? Si
disegnino, successivamente, anche i grafici delle funzioni definite da

g(x) $= 3 ln|e^{2} -x|$ e da h(x) $= -g(x)$

illustrando le eventuali loro simmetrie.

Estero (calendario australe)
Ordinaria $2011-$ Problema $1$

La funzione è strettamente decrescente, quindi è invertibile. Ricaviamo la sua equazione:

$y= 3 ln(e^{2} -x) , e^{2} -x=$ e
$3 , x= e^{2} -e$
$$ y 3 . $$

La funzione inversa di $y= 3 ln(e^{2} -x)$ ha equazione $y= e^{2} -e$
$$ x 3 . $$

Il grafico della funzione inversa è simmetrico rispetto alla retta $y=x$ del grafico della
funzione $f$ stessa. Asintoto orizzontale $y= e^{2},$ intersezioni con gli assi: $(6; 0)$ e $(0; e^{2} -1).$

Il grafico della funzione g(x) $= 3 ln|e^{2} -x|$ si può ottenere mediante trasformazioni
geometriche elementari a partire dal grafico di $y= ln x.$ Indichiamo i passaggi necessari:

$1)$ a(x) $= ln x$
$2)$ b(x) $= ln|x|:$ si conferma il grafico di a(x) a destra dell’asse $y$ e lo si ribalta a
sinistra
$3)$ c(x) $= ln|e^{2} + x|$ : traslazione di vettore $(-e^{2}; 0)$
$4)$ d(x) $= ln|e^{2} -x|$ : simmetria rispetto all'assey
$5)$ g(x) $= 3 ln|e^{2} -x|$ : dilatazione verticale di fattore $3$

Asintoto verticale: $x= e^{2},$ intersezioni con gli assi: $(0; 6), (e^{2} -1; 0), (e^{2} + 1; 0).$

Estero (calendario australe)
Ordinaria $2011-$ Problema $1$

Il grafico di h(x) $= -g(x)$ si ottiene da quello di $g$ con una simmetria rispetto all’asse $x:$

$c)$

Sia $R$ la regione delimitata da $\Gamma$ e dagli assi coordinati. Si calcoli l’area di $R.$

Rappresentiamo la regione $R:$

Troviamo l’ascissa del punto di intersezione fra $\Gamma$ e l’asse $x:$
$3 ln(e^{2} -x) = 0, e^{2} -x= 1, x= e^{2} -1$ .

Quindi:
Area(R) $= \int$
$3 ln(e^{2} -x)$
$e^{2}-1$
$$ 0 dx $$

Cerchiamo una primitiva di f(x) $= 3 ln(e^{2} -x)$ integrando per parti:

Estero (calendario australe)
Ordinaria $2011-$ Problema $1$

$\int 3 ln(e^{2} -x) dx= 3 \int 1 ∙ln(e^{2} -x) dx= 3 \int$ (x)' $ln(e^{2} -x) dx=$
$= 3 [x∙ln(e^{2} -x) -\int$ x∙
$-1$
$e^{2} -x$ dx] $= 3 [x∙ln(e^{2} -x) -\int -x+ e^{2} -e^{2}$
$e^{2} -x$
dx] =
$= 3 [x∙ln(e^{2} -x) -\int (1 + -e^{2}$
$e^{2} -x)$ dx] $= 3 [x∙ln(e^{2} -x) -x-e^{2} \int ( -1$
$e^{2} -x)$ dx] =
$= 3 x∙ln(e^{2} -x) -3x-3e2ln |e^{2} -x|$

Quindi:
Area(R) $= \int$
$3 ln(e^{2} -x)$
$e^{2}-1$
$dx= [3 x∙ln(e^{2} -x) -3x-3e^{2} ln|e^{2} -x|]0$
$e^{2}-1 =$
$= 0 -3(e^{2} -1) -(-3e^{2} ln(e^{2}) = -3e^{2} + 3 + 3e^{2}(2) = (3 + 3e^{2}) u^{2} \cong 25.17 u^{2}$

$d)$

La regione $R$ è la base di un solido $W$ che tagliato con piani ortogonali all’asse $x$ dà tutte
sezioni rettangolari di altezza $5.$ Si calcoli il volume di $W.$
Supposto, invece, che la regione $R$ ruoti di un giro completo attorno alla retta $y= -6,$
come si può calcolare il volume del solido che essa genera? Si indichi solo il
procedimento senza risolvere eventuali integrali.

La generica sezione ha area S(x) = f(x) $∙5,$ quindi il volume di $W$ è dato da:

V(W) $= \int$
S(x)
$e^{2}-1$
$dx= \int$
$15 ln(e^{2} -x)$
$e^{2}-1$
$dx= 5 \int$
$3 ln(e^{2} -x)$
$e^{2}-1$
$dx=$

$= 5(3 + 3e^{2}) u^{3} = 15(1 + e^{2}) u^{3} \cong 125.836 u^{3} =$ V(W)

N.B. Il volume richiesto si può trovare anche come area di base per altezza, essendo
assimilabile $ad$ un prisma di base $R$ ed altezza $5.$ Quindi:
V(W) = Area(R) $∙5 = (3 + 3e^{2}) ∙5 = 15(1 + e^{2}) u^{3} =$ V(W).

Estero (calendario australe)
Ordinaria $2011-$ Problema $1$

Supponiamo ora che la regione $R$ ruoti intorno alla retta $y= -6$ .

Il volume che si ottiene da tale rotazione si ottiene sottraendo all’integrale:

$\pi \int$
[f(x) $+ 6]2dx$
$e^{2}-1$
$= \pi \int$
$[3 ln(e^{2} -x) + 6]2dx$
$e^{2}-1$

il volume del cilindro con raggio di base $6$ e altezza $e^{2} -1,$ uguale a: $\pi ∙62 ∙(e^{2} -1)$ .

Il volume richiesto è quindi dato da:

$V= \pi \int$
$[3 ln(e^{2} -x) + 6]2dx$
$e^{2}-1$
$-36\pi (e^{2} -1)$

Con la collaborazione di Angela Santamaria
