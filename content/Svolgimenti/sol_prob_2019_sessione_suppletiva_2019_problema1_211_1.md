---
title: 2019 Suppletiva — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2019_sessione_suppletiva_2019_problema1_211_1
of_item: prob_2019_sessione_suppletiva_2019_problema1_211_1
prova_id: prova_2019_sessione_suppletiva_2019_problema1_211
anno: '2019'
pdf: Prova_Maturita_2019.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Problema:** [[Problemi/prob_2019_sessione_suppletiva_2019_problema1_211_1|2019 Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2019_sessione_suppletiva_2019_problema1_211|2019 Suppletiva — Problema 1]]

Sessione suppletiva 2019 - Problema $1$

LICEO SCIENTIFICO SUPPLETIVA 2019 - PROBLEMA $1$

Al variare di a $\in R,$ si consideri la famiglia di funzioni:

fa(x) = {
$2 (1 + x ea-x)$ per $x\ge 0$
$9a$
$4(x-1)^{4}$ per $x< 0$

a)

Discutere segno e continuità della funzione $fa$ al variare del parametro a. Dimostrare che,
qualunque sia a $\in R,$ la funzione $fa$ ammette un punto di massimo assoluto di ascissa $1.$

Studiamo il segno della funzione al variare del parametro a.

Per $x\ge 0$ si ha f(x) =
$2 (1 + x ea-x) > 0$ per ogni $x$ .

Per $x< 0$ si ha f(x) =
$9a$
$4(x-1)^{4}$ . Essendo il denominatore sempre positivo, in questo caso si ha

f(x) $> 0$ se $a> 0$ ed f(x) $< 0$ se $a< 0$ .

Quindi:

Se $a> 0:$ f(x) $> 0$ per ogni $x$ .
Se $a< 0:$ f(x) $> 0$ per $x\le 0$ ed f(x) $< 0$ per $x< 0$ .
Se $a= 0:$ f(x) $> 0$ per $x\ge 0$ ed f(x) $= 0$ per $x< 0$ .

Studiamo la continuità della funzione al variare del parametro a.

La funzione è chiaramente continua per $x\ne 0,$ per ogni valore di a . Analizziamo la continuità in
$x= 0$ .

$f(0) = 9$
$2 =$ lim
$x\to 0+$
$2 (1 + x ea-x)$

$$ lim $$
$x\to 0-$
$9a$
$4(x-1)^{4} = 9a$

Quindi la funzione è continua anche in $x= 0$ se
$9a$
$$ 4 = 9 $$
$2 : a= 2.$

Sessione suppletiva 2019 - Problema $1$

Dimostriamo che la funzione ammette un punto di massimo assoluto in $x= 1$ per ogni a.

Se $x\ge 0$ , essendo $1 + x ea-x\ge 1$ , si ha: f(x) $\ge$
$$ 9 2. $$
Per $x\to +\infty$ f(x) $\to$
$$ 9 2 $$
Risulta poi:

f'(x) $= 9$
$2 [ea-x+ x ea-x(-1)] = 9$
$2 ea-x(1 -x) \ge 0$ se $x\le 1.$

La funzione è quindi crescente per $0 \le x< 1$ e decrescente per $x> 1: x= 1$ è punto di
massimo relativo, e anche assoluto per $x\ge 0,$ con ordinata $f(1) =$
$2 (1 + ea-1) >$
$$ 9 2 $$
Quindi per $x\ge 0$ il grafico della funzione è del tipo:

Se $x< 0$

f(x) =
$9a$
$4(x-1)^{4}$

Per $x\to -\infty$ f(x) $\to 0+$ se $a> 0$ ed f(x) $\to 0-$ se $a< 0$

Per $x\to 0-$ f(x) $\to$
$4$ a .

(Osserviamo che se $a= 0$ per $x< 0$ risulta f(x) $= 0:$ quindi in tal caso è dimostrato che $x=1$
è punto di massimo assoluto).

Studiamo la monotonia della funzione per $x< 0:$

f(x) =
$9a$
$4(x-1)^{4} = 9$
$4 a(x-1)-4$ , f'(x) $= -9a(x-1)-5 = -$
$9a$
$(x-1)^{5}$
Ed essendo il denominatore negativo risulta:

$f' > 0$ se $a> 0$ ed $f' < 0$ se $a< 0$ . Pertanto:

se $a> 0$ la funzione è sempre crescente, se $a< 0$ la funzione è sempre decrescente.

Sessione suppletiva 2019 - Problema $1$

Il grafico della funzione per $x< 0$ è del tipo:

Chiaramente se $a< 0 , x= 1$ è punto di massimo assoluto. Se $a> 0$ dobbiamo confrontare

$f(1) =$
$2 (1 + ea-1)$ con
$4$ a .

$2 (1 + ea-1) > 9$
$4$ a se $ea-1 > 1$
$2 a-1$

Confrontiamo graficamente le funzioni $y^{1} = ea-1$ ed $y^{2} =$
$2 a-1,$ che sono facilmente
rappresentabili (la prima, blu, si ottiene da $y= ea$ con una traslazione verso destra di $1$ e la
seconda, in rosso, è una retta):

Si osserva chiaramente che è sempre $y^{1} > y^{2}:$ quindi anche per $a> 0 x= 1$ è punto di massimo
assoluto.

Sessione suppletiva 2019 - Problema $1$

$b)$

Indicata con $f$ la funzione ottenuta da $fa$ per a $= 2,$ stabilire se $f$ è derivabile in $x = 0.$ Studiare
l’andamento della funzione $f$ specificandone gli asintoti, i punti di flesso e l’ampiezza in gradi
dell’angolo formato dalle tangenti sinistra e destra nel punto di non derivabilità. Determinare i
valori delle costanti positive $h$ e $k$ tali che, considerata la funzione
g(x) $= h[1 + (3 - kx)ekx-1]$
si abbia $g(3 - x) =$ f(x) per $x \ge 0.$

Se $a= 2$ la funzione $f$ ha equazione:

f(x) = {
$2 (1 + x e^{2}-x)$ per $x\ge 0$
$2(x-1)^{4}$ per $x< 0$

Utilizzando i calcoli già fatti con a generico nel punto a), abbiamo che:

Per $x> 0:$ f'(x) =
$2 e^{2}-x(1 -x);$ lim
$x\to 0+$ f'(x) =
$2 e^{2} = f+$
$'(0)$

Per $x< 0:$ f'(x) = -
$$ 18 $$
$(x-1)^{5}$ ; lim
$x\to 0-$ f'(x) $= 18 = f-$
$'(0)$

Quindi la funzione non è derivabile in $x= 0,$ dove c’è un punto angoloso.

Studiamo l’andamento della funzione.

Sfruttando quanto già fatto con a generico possiamo dire che:
f(x) $> 0$ per ogni $x$ e risulta $f(0) = 9$
massimo assoluto in $M= (1; 9$
$2 (1 +$ e)
Il grafico della funzione ha $y= 0$ come asintoto orizzontale per $x\to -\infty$ e $y=$
$2$ come asintoto
orizzontale per $x\to +\infty$ .
La funzione è crescente per $x< 1$ e decrescente per $x> 1.$

Cerchiamo i flessi.
Per $x< 0:$ f'(x) = -
$$ 18 $$
$(x-1)^{5} = -18(x-1)-5;$ f''(x) =
$$ 90 $$
$(x-1)^{6} > 0$ sempre se $x< 0:$
per $x< 0$ concavità sempre verso l’alto, nessun flesso.
Per $x> 0:$ f'(x) =
$2 e^{2}-x(1 -x);$ f''(x) = ⋯=
$2 e^{2}-x(x-2) \ge 0$ se $x\ge 2:$

per $x> 0$ abbiamo: concavità verso il basso se $x< 2$ e verso l’alto se $x> 2;$ flesso per $x= 2:$
$F^{1} = (2;$
$$ 27 2 ). $$

Sessione suppletiva 2019 - Problema $1$

Osserviamo che in $x=0,$ pur essendoci un cambio di concavità, non c’è un punto di flesso perché la
funzione non presenta una (unica) tangente. Ricordiamo che un punto di flesso è un punto in cui la
curva attraversa la tangente.

Il grafico della funzione è quindi il seguente:

Calcoliamo l’angolo formato dalle due semitangenti nel punto angoloso, dopo aver notato che si
tratta di un angolo ottuso; il coefficiente angolare della semitangente sinistra è $m^{1} = 18 = f-$
$'(0)$
e quello della semitangente destra è $m^{2} =$
$2 e^{2} = f+$
$'(0) > m^{1}$ .
Detto $\alpha$ l’angolo ottuso fra le due semitangenti si ha:

$tg\alpha = m^{1} -m^{2}$
$1 + m1m^{2}$
$18 -9$
$2 e^{2}$
$$ 1 + (9 $$
$2 e^{2}) (18)$
$\cong -0.0254$ ,

$\alpha = tg-1(-0.0254) = 180^\circ -tg-1(0.02544) = 178.54^\circ$ .

Determiniamo ora i valori delle costanti positive $h$ e $k$ tali che, considerata la funzione
g(x) $= h[1 + (3 - kx)ekx-1]$
si abbia $g(3 - x) =$ f(x) per $x \ge 0.$

$g(3 -x) = h[1 + (3 -k(3 -x))ek(3-x)-1] = 9$
$2 (1 + x e^{2}-x)$ se:

$h= 9$
$k= 1$ (dovendo essere $k(3 -x) -1 = 2 -x)$

I valori richiesti sono quindi: $h=$
$2$ e $k= 1.$

Sessione suppletiva 2019 - Problema $1$

$c)$
Con un acceleratore di particelle si prepara un fascio di protoni aventi energia cinetica pari a
$42$ MeV. Per indirizzare tale fascio verso un bersaglio desiderato, si utilizza un campo
magnetico uniforme, ortogonale alla traiettoria dei protoni, di intensità $0,24 T.$ Trascurando gli
effetti relativistici, descrivere il moto di ciascun protone all’interno del campo e calcolare il
raggio di curvatura della traiettoria.

Per la legge di Lorentz il fascio di protoni si muove su una traiettoria circolare nel piano passante
per il punto $P$ in cui i protoni entrano nel campo magnetico e perpendicolare alla direzione del
campo magnetico.

Dalla relazione:

$qvB= ma= mv2$
, si ottiene il raggio di curvatura: $R= mv$
$$ qB $$

Conoscendo l’energia cinetica $Ec$ del fascio di protoni, possiamo calcolare la velocità con cui un
protone entra nel campo magnetico:

$Ec= 1$
$2 mv2 , v= \sqrt{2EC}$
$m , R=$
$m(\sqrt{2EC}$
$m)$
$$ qB $$
$= \sqrt{2mEC}$
$$ qB $$
$= R$

$EC= 42 MeV= 42 ∙106 ∙1.602 ∙10-19 J= 6.728 ∙10-12J$

$m= 1.673 ∙10-27kg , q= 1.602 ∙10-19 C , B= 0.24 T$

Quindi:

$R= \sqrt{2mEC}$
$$ qB $$
$= \sqrt{2} ∙(1.673 ∙10-27kg)(6.728 ∙10-12J)$
$(1.602 ∙10-19 C)(0.24 T)$
$= 3.902 m$

Il raggio di curvatura della traiettoria di un protone all’interno del campo è di $3.902$ metri.

Sessione suppletiva 2019 - Problema $1$

$d)$
Il fascio di protoni, all’uscita della zona in cui è presente B⃗ , viene fatto penetrare in acqua. Si
indichi con Ɛ(x) l’energia del protone, espressa in megaelettronvolt (MeV), dopo $x$ centimetri
$(cm)$ di cammino in acqua e sia dƐ l’energia ceduta all’acqua dal protone nel tratto $dx.$
Supponendo che la funzione $y= -$
dƐ
$dx$ possa essere approssimata con la funzione $y=$ g(x),
ponendo $h=$
$2$ e $k= 1$ , calcolare l’energia Ɛ assorbita dall’acqua nei primi $3$ centimetri di
cammino del protone.

La funzione g(x) ha equazione:
g(x) $= h[1 + (3 - kx)ekx-1] = 9$
$2 [1 + (3 -x)ex-1]$

Da $y= -$
dƐ
$dx$ otteniamo quindi:

$-dƐ(x) =$ g(x) $dx.$

Perciò l’energia assorbita dall’acqua nei primi $3 cm$ di cammino del protone è:

$-Ɛ= \int$ g(x)
$$ 3 0 $$
$dx= \int$
$2 [1 + (3 -x)ex-1]$
$$ 3 0 $$
$dx= 9$
$2 \int dx$
$$ 3 0 + 9 $$
$2 \int (3 -x)ex-1dx$
$$ 3 0 $$

Cerchiamo una primitiva di $(3 -x)ex-1$ integrando per parti:

$\int (3 -x)ex-1 dx= \int (3 -x)(ex-1)' dx= (3 -x)ex-1 -\int (-1)ex-1 dx=$

$= (3 -x)ex-1 + ex-1 + C$

$-Ɛ= 9$
$2 \int dx$
$$ 3 0 + 9 $$
$2 \int (3 -x)ex-1dx$
$$ 3 0 = 9 $$
$2 [x]0$
$$ 3 + 9 $$
$2 [(3 -x)ex-1 + ex-1]0$

$$ = 27 2 + 9 $$
$2 [e^{2} -(3 e-1 + e-1)] = 27$
$$ 2 + 9 $$
$2 (e^{2} -4 e-1) \cong 40.129$ MeV

Quindi l’energia assorbita dall’acqua nei primi $3 cm$ di cammino del protone è $40.129$ MeV .

Con la collaborazione di Angela Santamaria e Stefano Scoleri

*Fonte:* [📄 PDF p.211](https://drive.google.com/file/d/1ojz6PRWkAmZwQqGOBNvRb7lmy8wfykkO/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
