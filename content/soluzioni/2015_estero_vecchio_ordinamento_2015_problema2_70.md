---
tipo: soluzione
prova_stem: 2015_estero_vecchio_ordinamento_2015_problema2_70
pdf: Prova_Maturita_2015.pdf
source: text
title: 2015 Estero vecchio ordinamento — Problema 2 — Svolgimento
---


Estero vecchio ordinamento 2015 -
Problema $2$

$IB72 -$ SCIENTIFICO COMUNICAZIONE OPZIONE SPORTIVA 2015

PROBLEMA $2$

Assegnate le funzioni reali f(x) = ln(x) e g(x) $= ex-2,$ e indicati con $F$ e $G$ i loro grafici
in un riferimento cartesiano Oxy:

stabilisci dominio e codominio delle funzioni $f$ e $g,$ e traccia quindi i grafici relativi alle
funzioni $a(x)=f(g(x))$ e $b(x)=g(f(x)).$

Il dominio della funzione f(x) = ln(x) è: $x>0;$ il suo codominio è tutto $R$ (si veda il
grafico). Il dominio della funzione g(x) $= ex-2$ è tutto $R;$ il suo codominio è $y>0.$

I grafici $F$ e $G$ sono di seguito indicati (notiamo che il grafico della $g$ si ottiene dal grafico
di $y= ex$ mediante una traslazione verso destra di $2):$

La funzione a(x) = f(g(x)) equivale a:

a(x) $= ln(ex-2) = x-2$ (per ogni $x).$

La funzione b(x) = g(f(x)) equivale a:

b(x) $= eln(x)-2 =$ eln $(x) ∙e-2 = x∙e-2 =$
$e^{2}$ ∙x (con $x> 0).$

I grafici di a(x) e b(x) sono i seguenti:

Estero vecchio ordinamento 2015 -
Problema $2$

Determina l’equazione della retta $r,$ tangente a $F$ nel suo punto di ascissa $e^{2}.$ Stabilisci
inoltre se esiste una retta $s,$ parallela a $r,$ che sia tangente a $G.$

$F:$ f(x) = ln(x); se $x= e^{2} , y= ln(e^{2}) = 2 ; A= (e^{2}; 2)$

f'(x) =
$x$ , quindi: $f'(e^{2}) =$
$e^{2}$ ; la tangente $r$ in A $ad F$ ha quindi equazione:
$r: y-2 = 1$
$e^{2} ∙(x-2) , y= 1$
$e^{2} x+ 2 -2$
$$ e^{2 $$
La generica retta parallela $ad r$ ha equazione: $y=$ h(x) =
$e^{2} x+ k$ ; vediamo se questa
retta può essere tangente a $G,$ che ha equazione: g(x) $= ex-2.$ Dovrà essere verificato il
seguente sistema:

{ h(x) = g(x)
h'(x) = g'(x) $\implies$ {
$e^{2} x+ k= ex-2$
$e^{2} = ex-2 \implies -2 = x-2 \implies x= 0$
$\implies {k= 1$
$$ e^{2 $$
$x= 0$

La retta $s$ parallela $ad r$ e tangente a $G$ esiste ed ha equazione $s: y=$
$e^{2} x+$
$$ 1 e^{2 $$

Estero vecchio ordinamento 2015 -
Problema $2$

Determina l’equazione della retta $t,$ parallela alla bisettrice del primo quadrante, che sia
tangente a $F.$ Dimostra che $t$ risulta essere tangente anche a $G;$

La generica retta parallela alla retta $y=x$ ha equazione $y=t(x)=x+q;$ questa retta è
tangente al grafico $F$ della funzione f(x) = ln(x) se è soddisfatto il seguente sistema:

{ t(x) = f(x)
t'(x) = f'(x) $\implies$ {
$x+ q= ln (x)$
$$ 1 = 1 $$
$x \implies x= 1 \implies {1 + q= 0$
$x= 1$
$\implies {q= -1$
$x= 1$

La retta $t$ ha quindi equazione $t: y= x-1$ ed è tangente $ad F$ nel punto $B= (1; 0).$

Dimostriamo che $t$ è tangente anche al grafico $G$ di g(x) $= ex-2$ :

{ t(x) = g(x)
t'(x) = g'(x) $\implies {x-1 = ex-2$
$1 = ex-2$
$\implies {1 = 1$
$x= 2 : t$ è tangente a $G$ nel punto $(2;1).$

Detta A la regione piana finita delimitata dall’asse $y$ , dalla retta di equazione $y = x - 1$ e
dal grafico $G,$ calcola l’area di A e il volume del solido generato ruotando A intorno
all’asse $y$ .

La regione A è indicata nel seguente grafico:

Estero vecchio ordinamento 2015 -
Problema $2$

L’area della regione A si ottiene calcolando il seguente integrale:

Area(A) $= \int [ex-2 -(x-1)] dx= \int (ex-2 -x+ 1)) dx=$
$$ 2 0 2 0 $$
$[ex-2 -x^{2}$
$2 +$ x]
$$ 0 2 = $$

$= 1 -2 + 2 -(e-2) = (1 -$
$e^{2}) u^{2} \cong 0.86 u^{2} =$ Area(A).

Calcoliamo il volume del solido generato ruotando A intorno all’asse $y$ .

Da $y= x-1$ ricaviamo $x= y+ 1$ ; da $y= ex-2$ ricaviamo $x-2 = ln (y)$ da cui

$x= 2 + ln (y)$ .

Il volume richiesto si può ottenere sottraendo al cono di raggio $2$ e altezza $2$ il volume del
solido generato dalla regione delimitata da $G$ e dall’asse $y,$ per $y$ compreso fra
$e^{2}$ e $1$
(vedi figura precedente). Quindi:

$V= 1$
$3 \pi ∙22 ∙2 -\pi \int$
$[2 + ln (y)]2dy$
$1/e^{2}$

Cerchiamo una primitiva di $(2 + ln (y)) 2:$

Posto $t=$ ln(y) , $y= et , dy=$ etdt si ha (integrando per parti):

$\int [2 + ln(y)]2dy= \int (2 + t)2etdt= \int (2 + t)2(et)'dt= et(2 + t)2 -\int 2(2 + t)etdt=$
$= et(2 + t)2 -2 \int (2 + t)(et)'dt= et(2 + t)2 -2 [(2 + t)et-\int 1$ ∙etdt] =
$= et(2 + t)2 -2(2 + t)et+ 2et+ c= et(t^{2} + 2t+ 2) + c= y(ln2( y) + 2ln (y) + 2) + c$

Quindi:

$V= 8$
$3 \pi -\pi ∙[y(ln2(y) + 2$ ln(y) $+ 2)] 1$
$$ e^{2} 1 = 8 $$
$3 \pi -\pi ∙[2 -1$
$e^{2} (4 -4 + 2)] = 8$
$3 \pi -\pi (2 -2$
$e^{2})$

$3 \pi + 2\pi$
$e^{2}) u^{3} = 2\pi (1$
$$ 3 + 1 $$
$e^{2}) = 2\pi$
$3e^{2} (e^{2} + 3) \cong 2.945 u^{3} = V$

Con la collaborazione di Angela Santamaria
