---
title: 2008 Ordinamento Suppletiva — Problema 2 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2008_ordinamento_2008_sessione_suppletiva_problema2_68_1
of_item: prob_2008_ordinamento_2008_sessione_suppletiva_problema2_68_1
prova_id: prova_2008_ordinamento_2008_sessione_suppletiva_problema2_68
anno: '2008'
pdf: Prova_Maturita_2008.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2008
---

**Problema:** [[Problemi/prob_2008_ordinamento_2008_sessione_suppletiva_problema2_68_1|2008 Ordinamento Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2008_ordinamento_2008_sessione_suppletiva_problema2_68|2008 Ordinamento Suppletiva — Problema 2]]

ORDINAMENTO 2008 SESSIONE SUPPLETIVA - PROBLEMA $2$

Si consideri la funzione:

$y= senx(2cosx+ 1)$

Tra le sue primitive si individui quella il cui diagramma $\gamma$ passa per il punto $P(\pi , 0).$

Cerchiamo la più generale primitiva:

$\int senx(2cosx+ 1) dx= \int (2senxcosx+ senx)dx= 2 \int$ senxcosx $dx+ \int$ senx $dx=$

$= 2 ∙sen2x$
$-cosx+ k= sen2x-cosx+ k$

Imponendo il passaggio per $P$ otteniamo:

$0 = sen2\pi -cos\pi + k= 1 + k \implies k= -1$ . La primitiva richiesta è quindi:

$y=$ f(x) $= sen2x-cosx-1$

Si rappresenti graficamente la curva $\gamma$ nell’intervallo $0 \le x \le 2 \pi$ e si dimostri che essa
è simmetrica rispetto alla retta $x= \pi$ .

$y=$ f(x) $= sen2x-cosx-1 = -cos2 x-cosx , 0 \le x \le 2 \pi$

Dominio: $0 \le x \le 2 \pi$

Simmetrie notevoli:

Visto l’intervallo di studio, non si pone il problema se la funzione è pari o dispari.

Intersezioni con gli assi cartesiani:

Se $x= 0 , y= -2.$
Se $y= 0, -cos2 x-cosx= 0 , cosx(cosx+ 1) = 0, x=$
$\pi$
$2 , x=$
$2 \pi , x= \pi$

Segno della funzione:

$y> 0$ se $cosx(cosx+ 1) < 0 \implies -1 < cosx< 0 \implies$
$\pi$
$2 < x<$
$2 \pi$ , con $x\ne \pi$

Limiti:

La funzione è continua in un intervallo chiuso e limitato.

Derivata prima:

f'(x) $= 2senxcosx+ senx\ge 0,$
$senx(2cosx+ 1) > 0 \implies 0 < x< 2$
$3 \pi or \pi < x< 4$
$3 \pi$

In tali intervalli la funzione è crescente.

$x=$
$3 \pi$ punto di massimo relativo (e assoluto), con ordinata: $f($
$3 \pi ) =$
$$ 1 4 $$
$x=$
$3 \pi$ punto di massimo relativo (e assoluto), con ordinata: $f($
$3 \pi ) =$
$$ 1 4 $$
$x= \pi$ punto di minimo relativo, con ordinata: $f(\pi ) = 0$

Derivata seconda:

f''(x) $= 2 cos2 x-2sen2x+ cosx= 4 cos2 x+ cosx-2 \ge 0$ se:

$cosx\le$
$-1-\sqrt{33}$
$\cong -0.84$ oppure $cosx\ge$
$-1+\sqrt{33}$
$\cong 0.53$

Quindi f''(x) $\ge 0$ se $0 \le x\le 1.01, 2.57 \le x\le 3.72 , 5.27 \le x\le 2\pi$

in tali intervalli il grafico della funzione volge la concavità verso l’alto. Abbiamo $4$ punti di
flesso: $x= 1.01, x= 2.57, x= 3.72 , x= 5.27$

Il grafico della funzione è il seguente:

Dimostriamo che la curva è simmetrica rispetto alla retta $x= \pi$ . Dovrà essere:

$f(2\pi -x) =$ f(x). Ed infatti risulta:

$f(2\pi -x) = -cos2(2\pi -x) -cos (2\pi -x) = -cos2 x-cosx=$ f(x)

Si scrivano le equazioni della retta tangenti alla curva nei suoi due punti A e $B$ di ascisse
$\pi /2$ e $3\pi /2$ e si determini il loro punto d’intersezione $C.$

$A= (\pi$
$2 ; 0) , B= (3$
$2 \pi ; 0)$

$f' (\pi$
$2) = 1 , f' (3$
$2 \pi ) = -1$

Tangente in A: $y= x-$
$\pi$

Tangente in $B: y= -x+$
$2 \pi$

Intersezione $C$ fra le tangenti:

$x-\pi$
$2 = -x+ 3$
$2 \pi \implies x= \pi$

$C= (\pi$ ;
$\pi$

Si calcoli l’area della parte finita di piano compresa tra la curva e le due suddette
tangenti.

Essendo la curva è simmetrica rispetto alla retta $x= \pi$ l’area richiesta $S$ è il doppio

dell’area $S^{1}$ compresa tra la tangente in A e la curva nell’intervallo [
$\pi$
$2 ; \pi$ ].

$S^{1} = \int [(x-\pi$
$2) -(-cos2 x-cosx)]$
$\pi$
$\pi$
$dx= \int (x-\pi$
$2 + cos2 x+$ cosx) $dx=$
$\pi$
$\pi$

$= \int (x-\pi$
$2 + 1 + cos2x$
$+cosx) dx= \int (x-\pi$
$$ 2 + 1 2 + 1 $$
$2 cos2x+$ cosx) $dx=$
$\pi$
$\pi$
$\pi$
$\pi$

$2 x^{2} + (1$
$2 -\pi$
$2) x+ 1$
$4 sen2x+ senx]\pi$
$\pi$
$2 \pi 2 + (1$
$2 -\pi$
$2) \pi -(\pi 2$
$8 ) -(1$
$2 -\pi$
$2) ∙\pi$
$2 -1 =$

$\pi 2$
$\pi$
$4 -1) u^{2}$ . Quindi l’area richiesta è:

$S= 2 ∙S^{1} = 2 ((\pi 2$
$8 + \pi$
$4 -1) u^{2}) = (\pi 2$
$4 + \pi$
$2 -2) u^{2} \cong 2.04 u^{2}$

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

ORDINAMENTO 2008 - SESSIONE SUPPLETIVA

QUESITO $1$

Si determini la distanza delle due rette parallele:

$3x+ y-3\sqrt{10} = 0 , 6x+ 2y+ 5\sqrt{10} = 0$

La distanza richiesta è data dalla distanza di un punto di una delle due rette dall’altra retta.

Scegliamo sulla prima retta il punto $P= (\sqrt{10}; 0).$ La distanza di $P$ dalla seconda retta è
data da:

$d=$
$|ax0 + by0 + c|$
$\sqrt{a}^{2} + b^{2}$
$= |6\sqrt{10} + 5\sqrt{10}|$
$$ \sqrt{36} + 4 = 11\sqrt{10} 2\sqrt{10} = 11 2 $$

La distanza tra due rette è dunque uguale a
$$ 11 2 . $$

QUESITO $2$

Un trapezio rettangolo è circoscritto $ad$ una semicirconferenza di raggio $r$ in modo che la
base maggiore contenga il diametro. Si calcoli in gradi e primi (sessagesimali) l’ampiezza
$x$ dell’angolo acuto del trapezio, affinché il solido da esso generato in una rotazione
completa attorno alla base maggiore abbia volume minimo.

Il solido richiesto è formato dal cilindro con raggio di base $AC=AF=r$ e altezza $AH$ e dal
cono con raggio di base $DH=r$ e altezza $HE.$

Risulta:

$HE= DH∙cotgx=$ r∙cotgx , $FE= DE= DH$
$senx=$
senx , $FH= FE-HE=$

$senx-r∙cotgx=$
$senx-rcosx$
$senx= r(1 -cosx)$
senx
, $AH= AF+ FH= r+ r(1 -cosx)$
senx

$= r(senx+ 1 -cosx)$
senx

V(cilindro) $= \pi ∙AC2 ∙AH= \pi ∙r^{2} ∙r(senx+ 1 -cosx)$
senx
$= \pi r^{3} ∙senx+ 1 -cosx$
senx

V(cono) $= 1$
$3 \pi ∙DH2 ∙HE= 1$
$3 \pi ∙r^{2}$ ∙ $r∙cotgx= 1$
$3 \pi ∙r^{3}$ ∙cotgx

Il volume del solido è quindi:

$V= \pi r^{3} ∙senx+ 1 -cosx$
senx
$3 \pi ∙r^{3} ∙cotgx= \pi r^{3} (senx+ 1 -cosx$
senx
+ cosx
$3senx) =$

$= \pi r^{3}$ (
$3senx+3-3cosx+cosx$
$3senx$
) $= \pi r^{3}$ (
$3senx+3-2cosx$
$3senx$
) che è minimo se lo è:

$y= 3senx+ 3 -2cosx$
$3senx$
, con $0 < x\le \pi$

$y' = (-$ cos(x) $+ 2$
$3)$ (cosec(x))
$2 \ge 0$ se (- cos(x) $+ 2$
$3) \ge 0 , cosx\le 2$

Quindi la funzione è crescente se $\alpha < x<$
$\pi$
$2$ , con $\alpha = arccos(2/3)$ ed è decrescente se

$0 < x<$ a : quindi $\alpha = arccos(2/3)$ è punto di minimo relativo (e assoluto).

Il volume del solido è quindi minimo se:

$x= arccos(2/3) \cong 0.841 rad\cong 48.19^\circ \cong 48^\circ 11'$

QUESITO $3$

Si determinino le equazioni degli asintoti della curva:

f(x) $= -x+ 1 + \sqrt{x}^{2} + 2x+ 2$

Poiché $x^{2} + 2x+ 2 > 0 \forall x$ , il dominio della funzione è $-\infty < x< +\infty$ ; la curva non
potrà avere asintoti obliqui (è continua in tutto il suo dominio).

Analizziamo i limiti all’infinito.

$limx\to -\infty (-x+ 1 + \sqrt{x}^{2} + 2x+ 2) = +\infty$ ; vediamo se ha asintoto obliquo:

Per $x\to -\infty$ risulta f(x)~ $-x+ |x| = -2x$ , quindi $m= -2$ ;

$limx\to -\infty$ (f(x) $-mx) = limx\to -\infty (-x+ 1 + \sqrt{x}^{2} + 2x+ 2 + 2x) =$

= lim
$x\to -\infty (x+ 1 + \sqrt{x}^{2} + 2x+ 2) =$ lim
$x\to -\infty$
$(x+ 1 + \sqrt{x}^{2} + 2x+ 2) ∙(x+ 1 -\sqrt{x}^{2} + 2x+ 2)$
$x+ 1 -\sqrt{x}^{2} + 2x+ 2$

= lim
$x\to -\infty$
$(x+ 1)^{2} -(x^{2} + 2x+ 2)$
$2x$
= lim
$x\to -\infty$
$-1$
$2x= 0 = q$ .

Quindi per $x\to -\infty$ c’è l’asintoto obliquo di equazione $y= -2x$ .

$limx\to +\infty (-x+ 1 + \sqrt{x}^{2} + 2x+ 2) =$ [F. I . $\infty -\infty$ ]

$$ lim $$
$x\to +\infty (-x+ 1 + \sqrt{x}^{2} + 2x+ 2) =$ lim
$x\to +\infty$
$(-x+ 1 + \sqrt{x}^{2} + 2x+ 2)(-x+ 1 -\sqrt{x}^{2} + 2x+ 2)$
$-x+ 1 -\sqrt{x}^{2} + 2x+ 2$

= lim
$x\to +\infty$
$(-x+ 1)^{2} -(x^{2} + 2x+ 2)$
$-2x$
= lim
$x\to +\infty$
$-4x-1$
$-2x$

Quindi per $x\to +\infty$ c’è l’asintoto orizzontale di equazione $y= 2$ .

QUESITO $4$

Si calcoli il limite della funzione:
$cosx-cos2x$
$1-cosx$
, quando $x$ tende a $0.$

$$ lim $$
$x\to 0$
$cosx-cos2x$
$1 -cosx$
= [F. I. $0$

$$ lim $$
$x\to 0$
$cosx-cos2x$
$1 -cosx$
= lim
$x\to 0$
$cosx-2 cos2 x+ 1$
$1 -cosx$
= lim
$x\to 0$
$(2cosx+ 1)(1 -cosx)$
$1 -cosx$

$$ lim $$
$x\to 0(2cosx+ 1) = 3$

QUESITO $5$

Si calcoli il valore medio della funzione f(x) $= log(x+ \sqrt{1} + x^{2})$ nell’intervallo $0 \le x \le 1.$

Il valor medio f(c) è dato da:

f(c) =
$\int$ f(x)dx
$$ b a $$
$b-a$
$= \int log(x+ \sqrt{1} + x^{2}) dx$
$$ 1 0 $$

Integrando per parti si ottiene:

$\int log(x+ \sqrt{1} + x^{2}) dx= \int$ (x)' $∙log(x+ \sqrt{1} + x^{2}) dx=$

Quindi:

$\int log(x+ \sqrt{1} + x^{2}) dx$
$$ 1 0 $$
$= [x∙log(x+ \sqrt{1} + x^{2}) -\sqrt{1} + x^{2}]$
$$ 0 1 = $$
$= (log(1 + \sqrt{2}) -\sqrt{2}) -(-1) =$

$= log(1 + \sqrt{2}) + 1 -\sqrt{2} \cong 0.4672 =$ valor medio

QUESITO $6$

Si sechi il solido di una sfera con un piano, in modo che il circolo massimo sia medio
proporzionale fra le superficie appianate delle calotte nelle quali rimane divisa la sfera.

Ricordiamo che l’area della calotta di altezza $h$ della sfera di raggio $r$ è uguale a:

$A= 2\pi rh$

Le due calotte individuate dal piano secante hanno aree:

$A= 2\pi rh$ e $A' = 2\pi (2r-h),$ consideriamo $0 \le h\le r$

Il circolo massimo ha area: $\pi r^{2}$ .

Dovrà essere:

$2\pi rh: \pi r^{2} = \pi r^{2}: 2\pi r(2r-h) \implies \pi 2r^{4} = 4\pi 2r2h(2r-h) \implies r^{2} = 4h( 2r-h)$

$4h^{2} -8rh+ r^{2} = 0 \implies h=$
$r(2\pm \sqrt{3})$
, $h^{1} =$
$r(2-\sqrt{3})$
$\cong 0.13 r , h^{2} =$
$r(2+\sqrt{3})$
$\cong 1.87 r$

Le due calotte hanno quindi altezze $h^{1} =$
$r(2-\sqrt{3})$
$\cong 0.13 r$ e $h^{2} =$
$r(2+\sqrt{3})$
$\cong 1.87 r$ .

QUESITO $7$

La regione finita di piano delimitata dalla curva di equazione $y=$ e
$2(x+ 1)$ e dall’asse $x$
nell’intervallo $0 \le x \le 1$ è la base di un solido $S$ le cui sezioni sono tutte esagoni regolari. Si
calcoli il volume di $S.$

Tracciamo un grafico qualitativo della funzione: $y=$ e
$2(x+ 1).$

Il volume richiesto è dato da:

$V= \int$ A(x)dx
$$ 1 0 $$
, dove A(x) è l’area dell’esagono regolare di lato $CD=$ f(x).

L’apotema a dell’esagono è data da: $a=$ f(x) $∙\sqrt{3}$
$2$ , quindi:

A(x) $= p∙a= 3f(x)$ ∙f(x) $∙\sqrt{3}$
$$ 2 = 3 $$
$2 \sqrt{3}$ ∙(f(x))
$2$ . Quindi:

$V= \int$ A(x)dx
$$ 1 0 $$
$= V= \int 3$
$2 \sqrt{3}$ ∙(f(x))
$2dx=$
$$ 1 0 = 3 $$
$2 \sqrt{3} ∙\int$ (e
$2(x+ 1))$
$dx=$
$$ 1 0 $$

$2 \sqrt{3} ∙\int ex(x+ 1)2dx$
$$ 1 0 $$
; cerchiamo, integrando per parti, una primitiva di $ex(x+ 1)^{2}$ .

$= \int ex(x+ 1)2dx= \int (ex)'(x+ 1)2dx= ex(x+ 1)^{2} -\int ex∙(2(x+ 1))dx=$

$= ex(x+ 1)^{2} -2 [\int$ (ex)' $∙(x+ 1)dx] = ex(x+ 1)^{2} -2 [ex(x+ 1) -\int$ exdx] =

$= ex(x+ 1)^{2} -2ex(x+ 1) + 2ex+ k= ex(x^{2} + 1) + k$

Quindi:

$V= 3$
$2 \sqrt{3} ∙\int ex(x+ 1)2dx$
$$ 1 0 = 3 $$
$2 \sqrt{3}[ex(x^{2} + 1)]0$
$$ 1 = 3 $$
$2 \sqrt{3}(2e-1) u^{3} \cong 11.527 u^{3}$

QUESITO $8$

Si stabilisca per quali valori del parametro reale $k$ esiste una piramide triangolare regolare
tale che $k$ sia il rapporto fra il suo apotema e lo spigolo di base.

Il triangolo di base ABC è equilatero; sia $l$ il suo lato. Risulta:

$HZ= 1$
$3 AZ= 1$
$3 (l∙\sqrt{3}$
$$ 2 ) = 1 $$
$6 l \sqrt{3} (H$ è anche baricentro, quindi $AH= 2HZ)$

Il rapporto fra apotema è spigolo di base è dato da:
$$ VZ $$
$BC=$
$$ VZ $$
$2BZ=$
$$ 1 2 VZ $$
$BZ=$
$2$ tg(VB̂Z) $= k$

L’angolo è compreso fra $30^\circ$ (quando $V=H$ , piramide di altezza nulla) e $90^\circ$ (quando
l’altezza tende all’infinito); quindi:

$30^\circ \le VB̂Z< 90^\circ \implies \sqrt{3}$
$3 \le$ tg(VB̂Z) $< +\infty \implies \sqrt{3}$
$6 \le$
$2$ tg(VB̂Z) $< +\infty$

Pertanto deve essere: $k\ge \sqrt{3}$

QUESITO $9$

Si scriva l’equazione della tangente al diagramma della funzione: f(x) $= (x^{2} + 1)senx$
nel punto $P$ di ascissa $x= \pi /2.$

La tangente richiesta ha equazione: $y-f($
$\pi$
$2) = f'$ (
$\pi$
$2) (x-$
$\pi$

Calcoliamo la derivata della funzione, che riscriviamo nel seguente modo:

f(x) $= (x^{2} + 1)senx= eln(x^{2}+1)$
senx
= esenx $ln (x^{2}+1)$

f'(x) = esenx $ln (x^{2}+1)$ [(cosx) $ln(x^{2} + 1) +$ senx∙
$2x$
$x^{2} + 1]$

Pertanto: $f'$ (
$\pi$
$\pi 2$
$$ 4 + 1) [ $$
$\pi$
$\pi 2$
$$ 4 +1] = $$
$\pi 2+4$
∙
$4\pi$
$\pi 2+4 = \pi$ .
Essendo $f($
$\pi$
$\pi 2$
$4 + 1$ , la tangente ha equazione:

$y-\pi 2$
$4 -1 = \pi (x-\pi$
$2) \implies y= \pi x+ 1 -\pi 2$

QUESITO $10$

Dato un sistema di riferimento cartesiano (ortogonale monometrico) in un piano, si dica
che cosa rappresenta l’insieme dei punti $P(1 + t^{2}, 1 + t^{2}),$ ottenuto al variare di $t$ nei reali.

Il luogo ha equazioni parametriche:

${x= 1 + t^{2} \ge 1$
$y= 1 + t^{2} \ge 1 \implies y= x$ con $x\ge 1$ e $y\ge 1$

L’insieme dei punti $P(1 + t^{2}, 1 + t^{2})$ rappresenta una semiretta:

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri

*Fonte:* [📄 PDF p.68](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
