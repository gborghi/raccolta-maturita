---
tipo: soluzione
prova_stem: 2017_suppletiva_2017_problema2_117
pdf: Prova_Maturita_2017.pdf
source: text
title: Soluzioni — 2017_suppletiva_2017_problema2_117
---
# Soluzioni — 2017_suppletiva_2017_problema2_117

## Problema 1

Suppletiva 2017 - Problema $2$

SESSIONE SUPPLETIVA - 2017

PROBLEMA $2$

Data una funzione $g: R \to R$ ovunque derivabile, consideriamo la funzione

f(x) $= g(x)sen(2x).$

Dimostra che i grafici delle funzioni $f$ e $g$ sono tangenti nei loro punti di ascissa
$x=$
$\pi$
$4 + k\pi$ , con $k$ numero intero.

Devono essere verificate le seguenti condizioni:

{ f(x) = g(x)
f'(x) = g'(x) ; {
$g(x)sen(2x) =$ g(x)
$g'(x)sen(2x) +$ g(x) $∙2 cos(2x) =$ g'(x)

Se $g(x)=0$ anche $f(x)=0$ quindi le due funzioni coincidono e pertanto sono tangenti in ogni
punto. Escludendo questo caso, dalla prima equazione ricaviamo:
$sen(2x) = 1, 2x= \pi$
$2 + 2k\pi$ ,
$x= \pi$
$4 + k\pi$
Per tale valore di $x$ è soddisfatta anche la seconda equazione, che diventa g'(x) = g'(x).

Determina la funzione g(x) in modo tale che sia soddisfatta l’equazione differenziale
g'(x) $= -2g(x)$ e che risulti $g(0) = 4.$

Posto $y=$ g(x), l’equazione differenziale assume la forma: $y' = -2y.$ Questa equazione
ha la soluzione particolare $y=0,$ cioè $g(x)=0,$ che però non soddisfa la condizione iniziale
$g(0) = 4.$ Per $y\ne 0$ abbiamo:

$y'$
$y= -2$ ,
$$ dy $$
$y= -2 dx$

Integrando si ha: $ln|y| = -2x+ c, |y| = e-2x+c= ece-2x, y= \pm ece-2x= ke-2x$
(con $k$ numero reale non nullo).

Quindi g(x) $= ke-2x$ (notiamo che la soluzione $y=0$ si può ritrovare per $k=0);$ dovendo
essere $g(0) = 4$ , abbiamo: $k= 4.$

Suppletiva 2017 - Problema $2$

La funzione richiesta è quindi: g(x) $= 4e-2x$ .

Il grafico della funzione $f$ presenta dei massimi relativi nei punti di ascissa $x=$
$\pi$
$4 + k\pi$
$(k$ numero intero)? Presenta dei flessi in tutti i suoi punti d’intersezione con l’asse $x?$
Motiva le tue risposte.

Risulta:
f(x) $= g(x)sen(2x) = 4 sen(2x)e-2x$

Siccome i grafici di $f$ e $g$ sono tangenti nei punti di ascissa $x=$
$\pi$
$4 + k\pi$ , in tali punti la
derivata di $f$ è uguale alla derivata di $g;$ la derivata di $g$ (che è $-8e-2x$ ) in tali punti non si
annulla, pertanto neanche la derivata di $f$ si annulla; essendo $f$ sempre derivabile
(prodotto di funzioni ovunque derivabili), nei punti di massimo relativo la sua derivata
dovrebbe annullarsi.
Possiamo quindi concludere che:

il grafico della funzione $f$ NON presenta dei massimi relativi nei punti di ascissa
$x=$
$\pi$
$4 + k\pi$ .

Le ascisse dei punti di intersezione del grafico di $f$ con l’asse $x$ sono le soluzioni
dell’equazione

$4 sen(2x)e-2x= 0$ ,
$sen(2x) = 0,$
$2x= k\pi$ ,
$x= k\pi$
$2$ con $k$ intero .

Calcoliamo la derivata seconda di $f:$

f'(x) $= 8 cos(2x) e-2x+ 4 sen(2x)(-2e-2x) = 8e-2x(cos (2x) -sen(2x))$

f''(x) $= 8[-2e-2x(cos(2x) -sen(2x)) + e-2x(-2sen(2x) -2 cos(2x))] =$

$= -16e-2x[cos(2x) -sen(2x) + sen(2x) + cos(2x)] = -32 cos(2x) e-2x=$ f''(x)

Si ha:

f'' (
$k\pi$
$2 ) = -32 cos(k\pi ) e-k\pi \ne 0$ per ogni $k$ intero, poiché $cos(k\pi ) = \pm 1$ .

Siccome la $f$ è infinitamente derivabile, condizione necessaria perché un punto sia di
flesso è che in esso la derivata seconda si annulli, quindi:

nei punti di intersezione con l’asse $x$ NON ci sono punti di flesso.

Suppletiva 2017 - Problema $2$

Determina il valore di

$I= \int$
f(x)
$+\infty$
$$ 0 dx $$
e, posto

$H= \int$
$|f(x)|$
$+\infty$
$$ 0 dx $$

dimostra che $H$ è finito e determina in modo approssimato il suo valore. Che cosa
rappresentano, in termini geometrici, i valori di I e $H?$

Per calcolare I determiniamo prima una primitiva di f(x) integrando per parti:

$A= \int f(x)dx= \int 4 sen(2x)e-2xdx= \int -2 sen(2x)(-2e-2x)dx= \int -2 sen(2x)(e-2x)'dx$
$= (-2 sen(2x))(e-2x) -\int (-2 sen(2x))$
'( $e-2x)dx=$
$= -2 e-2xsen(2x) + 4 \int cos(2x) e-2xdx= -2 e-2xsen(2x) -2 [\int cos(2x) (-2e-2x)dx] =$
$= -2 e-2xsen(2x) -2 [\int cos(2x) (e-2x)'dx] =$
$= -2 e-2xsen(2x) -2 [cos(2x)e-2x-\int (cos(2x))' e-2xdx] =$
$= -2 e-2xsen(2x) -2 [cos(2x)e-2x-\int -2sen(2x)e-2xdx] =$
$= -2 e-2xsen(2x) -2 cos(2x)e-2x-\int 4sen(2x)e-2xdx=$
$= -2 e-2xsen(2x) -2 cos(2x)e-2x-A=$ A, $2A= -2 e-2xsen(2x) -2 cos(2x)e-2x,$

$A= -e-2x(sen(2x) + cos(2x)) + c$

Quindi:

$\int 4 sen(2x)e-2xdx= -e-2x(sen(2x) + cos(2x)) + c= -\sqrt{2e}-2xsen(2x+$
$\pi$
$4)+c$

Calcoliamo ora I:

$I= \int$
f(x)
$+\infty$
$dx=$ lim
$b\to +\infty \int 4 sen(2x)e-2xdx$
$$ b 0 $$
$dx=$ lim
$b\to +\infty [-\sqrt{2e}-2xsen(2x+ \pi$
$$ 4)] 0 b = $$
$= -\sqrt{2}$ lim
$b\to +\infty [e-2bsen(2b+$
$\pi$
$4) -sen($
$\pi$
$4)] = -\sqrt{2} (0 -\sqrt{2}$
$2 ) = 1 =$ I

Suppletiva 2017 - Problema $2$

N.B. lim
$b\to +\infty [e-2bsen(2b+$
$\pi$
$4)]$ è uguale a $0$ per il teorema del confronto, essendo il

prodotto fra un infinitesimo ed una funzione limitata.

Per dimostrare che $H$ è finito osserviamo che:

f(x) $\le |f(x)| = |4 sen(2x)e-2x| \le 4e-2x$

Quindi, per una nota proprietà dell’integrale definito:

$$ \int $$
f(x)
$+\infty$
$dx\le \int$
$|f(x)|$
$+\infty$
$dx\le \int$
$4e-2x$
$+\infty$
$dx,$ cioè $1 \le H\le \int$
$4e-2x$
$+\infty$
$$ 0 dx $$

Calcoliamo $\int$
$4e-2x$
$+\infty$
$dx.$

$\int 4e-2xdx= -2 \int -2 e-2x dx= -2e-2x+ c$

Quindi:

$$ \int $$
$4e-2x$
$+\infty$
$dx=$ lim
$b\to +\infty \int 4e-2x$
$$ b 0 $$
$dx=$ lim
$b\to +\infty [-2e-2x]0$
$b=$ lim
$b\to +\infty (-2e-2b+ 2) = 2$

Perciò:

$1 \le H= \int$
$|f(x)|$
$+\infty$
$dx\le \int$
$4e-2x$
$+\infty$
$dx= 2 : 1 \le H\le 2$

Il valore di I rappresenta l’area (in senso algebrico) della regione (illimitata) di piano
compresa fra il grafico di $f$ e l’asse $x$ nell’intervallo $[0; +\infty$ ); ricordiamo che dove $f$ è negativa
l’area si considera negativa:

Suppletiva 2017 - Problema $2$

Il valore di $H$ rappresenta l’area della regione (illimitata) di piano compresa fra il grafico di $|f|$
e l’asse $x$ nell’intervallo $[0; +\infty$ ):

Con la collaborazione di Angela Santamaria
