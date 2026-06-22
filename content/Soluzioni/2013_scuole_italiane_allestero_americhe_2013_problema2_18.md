---
tipo: soluzione
prova_stem: 2013_scuole_italiane_allestero_americhe_2013_problema2_18
pdf: Prova_Maturita_2013.pdf
source: text
title: 2013 Scuole estero Americhe — Problema 2 — Svolgimento
---


Scuole italiane all’estero (Americhe) 2013 - PROBLEMA $2$

Sia $R$ la regione del primo quadrante degli assi cartesiani delimitata da $y= \sqrt{x}$ e da $y=$
$$ x 4 $$

Si determini la retta $y=k$ che dimezza l’area di $R.$

Le due curve possono essere scritte nella forma:

$x= y^{2}$ (con $y> 0)$ e $x= 4y.$ Le loro intersezioni si ottengono ponendo $y^{2} = 4y$
Da cui $y=0$ e $y=4$ (quindi deve essere $0<k<4)$

Le due regioni hanno la stessa area se:

$\int (4y-y^{2})dy=$
$$ k 0 $$
$\int (4y-y^{2})dy \implies [2y^{2} -$
$3 y^{3}]$
$$ 0 k 4 k $$
$= [2y^{2} -$
$3 y^{3}]$
$$ k 4 $$
da cui:

$2k^{2} -$
$3 k^{3} = 32 -$
$$ 64 $$
$3 -(2k^{2} -$
$3 k^{3}), 4k^{2} -$
$3 k^{3} -$
$$ 32 $$
$3 = 0 , 2k^{3} -12k^{2} + 32 = 0,$

$k^{3} -6k^{2} + 16 = 0$

L’equazione ha come radice $k=2$ e, abbassandola di grado con la regola di Ruffini, è
equivalente a:

$(k-2)(k^{2} -4k-8) = 0,$ che, oltre a $k=2,$ ammette le radici $k= 2 \pm 2\sqrt{3}$ (che non sono
accettabili).

Quindi le due aree sono uguali se $k= 2.$

Si disegni la regione piana simmetrica di $R$ rispetto alla retta $y=4,$ e si scrivano le
equazioni delle curve che la delimitano.

Le equazioni della simmetria rispetto alla retta di equazione $y=4$ sono:

$X= x$
$Y= 8 -y \implies$ {
$x= X$
$y= 8 -Y$

Quindi le equazioni delle curve che delimitano la nuova regione sono:

$y= x$
$4 \implies 8 -Y= X$
$4 \implies Y= -1$
$4 X+ 8$

$y= \sqrt{x} \implies 8 -Y= \sqrt{X} \implies Y= -\sqrt{X}+ 8$

Si calcoli il volume del solido generato dalla rotazione di $R$ attorno alla retta $y=4.$

Effettuiamo una traslazione di assi in modo che la retta $y=4$ diventi l’asse delle $x:$

$X= x$
$Y= y-4 \implies$ {
$x= X$
$y= Y+ 4$

Le equazioni delle curve $y= \sqrt{x}, y=$
$4$ che delimitano $R$ si trasformano in :
$y= x$
$4 \implies Y+ 4 = X$
$4 \implies Y= 1$
$4 X-4$

$y= \sqrt{x} \implies Y+ 4 = \sqrt{X} \implies Y= \sqrt{X}-4$

Il volume $V$ richiesto si ottiene quindi calcolando il seguente integrale:

$V = \pi \int$
$4 X -4)$
$-(\sqrt{X} -4)$
$2] dX =$
$$ 16 0 $$

$= \pi$
$$ 16 \int $$
$[X^{2} -48X+ 128\sqrt{X}]dX =$
$$ 16 0 $$

$= \pi$
$$ 16 [1 $$
$3 X^{3} -24X^{2} + 256$
$3 X\sqrt{X}]$
$$ 0 16 = $$

$= \pi$
$16 ∙2048$
$$ 3 = 128 $$
$3 \pi = V$

$R$ è la base di un solido $W$ le cui sezioni con piani ortogonali all’asse $y$ sono tutte
quadrati. Si calcoli il volume di $W.$

Il volume del solido $W$ si ottiene calcolando il seguente integrale:

V(W) $= \int$ S(y)dy
$$ 4 0 $$
essendo S(y) l’area del quadrato di lato $BC;$ risulta:

S(y) $= BC$
$2 = (xC-xB)2 = (4y-y^{2})^{2} = 16y^{2} -8y^{3} + y^{4}$ quindi

V(W) $= \int$ S(y)dy
$$ 4 0 $$
$= \int (16y^{2} -8y^{3} + y^{4})dy$
$$ 4 0 = [16 $$
$3 y^{3} -2y^{4} + 1$
$5 y^{5}]$
$$ 0 4 = 512 $$
$15 \cong 34.133 u^{3}$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri
