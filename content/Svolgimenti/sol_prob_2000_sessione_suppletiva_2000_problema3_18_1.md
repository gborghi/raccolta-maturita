---
title: 2000 Suppletiva — Problema 3 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2000_sessione_suppletiva_2000_problema3_18_1
of_item: prob_2000_sessione_suppletiva_2000_problema3_18_1
prova_id: prova_2000_sessione_suppletiva_2000_problema3_18
anno: '2000'
pdf: Prova_Maturita_2000.pdf
cluster: 'Successioni, Serie ed Eq. Differenziali'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/successioni_serie_ed_eq_differenziali
  - anno/2000
---

**Problema:** [[Problemi/prob_2000_sessione_suppletiva_2000_problema3_18_1|2000 Suppletiva — Problema 3 — Problema 1]] · **Prova:** [[Prove/2000_sessione_suppletiva_2000_problema3_18|2000 Suppletiva — Problema 3]]

Sessione suppletiva 2000 - Problema $3$

LICEO SCIENTIFICO SUPPLETIVA 2000 - PROBLEMA $3$

Si consideri la successione di termine generale $an=$
f(n)
$3n$ , dove:

f(n) $= (n$
$0) + (n$
$1) + (n$
$2) + ⋯+ (n$
$n)$

a)

Dimostrare che f(n) $= 2n$ .

Basta applicare lo sviluppo del binomio di Newton con $a=1$ e $b=1.$

$(a+ b)n= (n$
$0) an+ (n$
$1) an-1b+ (n$
$2) an-2b^{2} + ⋯+$ bn(n
$n)$
Con $a=1$ e $b=1$ abbiamo:

$2n= (n$
$0)an+ (n$
$1)an-1b+ (n$
$2)an-2b^{2} + ⋯+$ bn(n
$n)$ c.v.d.

$b)$

Determinare il più piccolo valore di $n$ per cui risulta: $an< 10-10.$

Risulta:

$an=$ f(n)
$3n= an= 2n$
$3n< 10-10$ se $log10$
$2n$
$3n< log10(10-10) , log102n-log103n< -10$ ,

$n log102 -n log103 < -10 , n(log102 -log103) < -10$ ,
$n(log103 -log102) > 10$ ,

$n>$
$$ 10 $$
$log103 -log102 \cong 56.8$ .

Quindi il più piccolo valore di $n$ per cui risulta $an< 10-10$ è $n= 57.$

N.B.
Per $n=56$ risulta $an=$
$2n$
$3n=$ (
$$ 2 3) 56 $$
$\cong 1.4 ∙10-10 > 10-10,$ per $n=57$ si ha
$an= (2$
$$ 3) 57 $$
$\cong 9.2 ∙10-11 < 10-10$

Sessione suppletiva 2000 - Problema $3$

$c)$

Spiegare perché, se $n$ è dispari, risulta:

f(n) $= 2$ [(n
$0) + (n$
$1) + (n$
$2) + ⋯+$ (
$(n-1)/2)],$

fornendo la dimostrazione di ogni eventuale formula cui si $fa$ ricorso.
Scrivere un’espressione equivalente di f(n) quando $n$ è pari.

Se $n$ è dispari l’espressione $(n$
$0) + (n$
$1) + (n$
$2) + ⋯+ (n$
$n)$ contiene un numero pari di addendi; per
esempio se $n=3$ abbiamo: $(3$
$$ 0) + (3 1) + (2 2) + (3 $$
$3).$ Osserviamo che:

$(n$
$0) + (n$
$1) + (n$
$2) + ⋯+$ (
$(n-1)/2)$ contiene la metà dei termini di $(n$
$0) + (n$
$1) + (n$
$2) + ⋯+ (n$
$n).$

Infatti dalla nota proprietà $(n$
$k) = ( n$
$n-k)$ segue che:

$n-1$
$$ 2 ) = ( n $$
$n-n-1$
$$ 2 ) = ( n $$
$n+ 1$

Il termine successivo a (
$(n-1)/2)$ è: (
$n-1$
$2 +1) = ( n$
$n+1$
), quindi i termini della somma
$(n$
$0) + (n$
$1) + (n$
$2) + ⋯+ ( n$
$n-1$
) $= (n$
$0) + (n$
$1) + (n$
$2) + ⋯+ ( n$
$n+1$
) sono tanti quanto i termini della
somma: ( $n$
$n+1$
) $+ ⋯+ (n$
$n).$ Ma per una nota proprietà della potenza del binomio i coefficienti dei
termini estremi e di quelli equidistanti dagli estremi sono uguali. Questa proprietà deriva dalla già
menzionata proprietà: $(n$
$k) = ( n$
$n-k).$

Possiamo quindi concludere che $(n$
$0) + (n$
$1) + (n$
$2) + ⋯+ ( n$
$n-1$
f(n)
$2$ . Da ciò segue che:

f(n) $= 2$ [(n
$0) + (n$
$1) + (n$
$2) + ⋯+$ (
$(n-1)/2)]$ ,
$c. v. d.$

Esempio con $n=3:$

f(n) $= (3$
$$ 0) + (3 1) + (3 2) + (3 3) = 23 = 8 $$

f(n) $= 2$ [(n
$0) + (n$
$1) + (n$
$2) + ⋯+$ (
$(n-1)/2)] = 2 [(3$
$$ 0) + (3 $$
$1)] 2(1 + 3) = 8$

Si chiede di dimostrare le formule utilizzate, quindi dimostriamo che:

Sessione suppletiva 2000 - Problema $3$

$(n$
$k) =$ (
$n-k)$

Dalla definizione del coefficiente binomiale (che individua le combinazioni semplici di $n$ oggetti a
$k$ a $k)$ si ha che:

$(n$
$k) =$
$n!$
$k! (n-k)!$

$n-k) =$
$n!$
$(n-k)! [n-(n-k)]! =$
$n!$
$(n-k)! k!$

Quindi

$(n$
$k) =$ (
$n-k)$

Si chiede poi di dimostrare una formula analoga nel caso di $n$ pari.

I termini della somma $(n$
$0) + (n$
$1) + (n$
$2) + ⋯+ (n$
$n)$ sono in numero dispari $(n+1).$
Il termine centrale di tale somma ne ha tanti a sinistra quanto a destra, in particolare:

$2$ a sinistra ed
$2$ a destra (
$$ n 2 + 1 + n $$
$2 = n+ 1).$

$(n$
$0) + (n$
$1) + (n$
$2) + ⋯+ (n$
$n) = (n$
$0) + (n$
$$ 1) + ( n n $$
$2 -1) + (n$
$$ n 2 ) + ( n n $$
$2 + 1) ... + (n$
$n)$

Risulta pertanto:

f(n) = [(n
$0) + (n$
$1) + ⋯+ ( n$
$2-1)] + (n$
$2) +$ ⌊( $n$
$2+1) + ⋯+ (n$
n)⌋.

Siccome, come osservato in precedenza i termini estremi e quelli equidistanti dagli estremi sono
uguali avremo:

[(n
$0) + (n$
$1) + ⋯+ ( n$
$2-1)] =$ ⌊( $n$
$2+1) + ⋯+ (n$
n)⌋. Quindi:

f(n) $= 2$ [(n
$0) + (n$
$1) + ⋯+$ (
$$ n n $$
$2 -1)] + (n$
$$ n 2 $$
) $= 2$ [(n
$0) + (n$
$1) + ⋯+$ (
$$ n n $$
$2 -1) + 1$
$2 (n$
$$ n 2 )] $$

Concludendo, per $n$ pari si ha:

Sessione suppletiva 2000 - Problema $3$

f(n) $= 2$ [(n
$0) + (n$
$1) + ⋯+$ (
$$ n n $$
$2 -1) + 1$
$2 (n$
$$ n 2 )] $$
Esempio con $n= 4:$

f(n) $= [(4$
$$ 0) + (4 1)] + (4 2) + [(4 3) + (4 4)] = 24 = 16 $$

f(n) $= 2$ [(n
$0) + (n$
$1) + ⋯+$ (
$$ n n $$
$2 -1) + 1$
$2 (n$
$$ n 2 )] = 2 [(4 0) + (4 1) + 1 2 (4 2)] = $$

$= 2[1 + 4 + 3] = 16.$

$d)$

Calcolare lim
$n\to \infty an$ e, ricorrendo alla definizione, verificare il limite così trovato.

$$ lim $$
$n\to \infty an=$ lim
$n\to \infty$
f(n)
$3n=$ lim
$n\to \infty$
$2n$
$3n=$ lim
$n\to \infty (2$
$$ 3) n = 0 $$

La definizione di successione convergente è la seguente:

$$ lim $$
$n\to \infty an= l$ se: $\forall \varepsilon > 0 \exists n^{0} = n^{0}(\varepsilon ) \in N: |an-l| < \varepsilon \forall n\ge n^{0}$

Nel nostro caso:

$|an-l| = |(2$
$$ 3) n $$
$-0| < \varepsilon$ ,
$$ (2 3) n $$
$< \varepsilon , ln (2$
$$ 3) n $$
$< ln \varepsilon$ ,
nln $(2$
$3) < ln \varepsilon , n>$
$ln \varepsilon$
$ln (2$

e prendendo $n^{0}\ge$ [ $ln\varepsilon$
$ln(2$
$3)] + 1$ la definizione è verificata.

N.B. con [ $ln \varepsilon$
$ln(2$
$3)]$ si intende “la parte intera” di
$ln \varepsilon$
$ln(2$

e)

Esiste lim
$n\to$ 1010 $an$ ? Motivare esaurientemente la risposta.

Il limite di una successione si può calcolare solo se $n\to +\infty$ . Non ha senso calcolare il limite per
$n\to l$ perché $l$ non è punto di accumulazione per il dominio di $an,$ che è fatta tutta da punti
isolati. Quindi il lim
$n\to$ 1010 $an$ NON HA SENSO.

Con la collaborazione di Angela Santamaria

A.S. $1999/2000:$ SESSIONE STRAORDINARIA

Tema di: MATEMATICA

Il candidato scelga a suo piacimento due dei seguenti problemi e $li$ risolva.

$1.$ È assegnata, nel piano riferito $ad$ assi cartesiani ortogonali Oxy, la curva $g$ di equazione
$y= 1 -$
$1 + x^{2}$
Il candidato
a) studi e disegni il grafico di $g$ e quello della curva $g^{1}$ simmetrica di $g$ rispetto alla retta $y = 1;$
$b)$ determini $k (k > 0)$ in modo tale che la regione limitata da $g$ e $g^{1}$ e dalle rette $x= \pm k$ sia
equivalente al cerchio di raggio unitario;
$c)$ dica in che cosa consista il problema della quadratura del cerchio e perché venga definito un
problema classico.

$2.$ È assegnato un tronco di cono il cui volume è doppio di quello di una sfera di raggio $r$ . Stabilire
se tale tronco può essere circoscritto alla sfera e in caso affermativo esprimere i raggi delle basi
del tronco in funzione del raggio $r$ della sfera. Generalizzare la questione ponendo uguale a $k$ il
rapporto tra il volume del tronco di cono e quello della sfera; stabilire le condizioni di risolubilità
del problema illustrando altresì il caso $k=$
$$ 3 2. $$

$3.$ Della parabola f(x) $= ax2 + bx+ c$ si hanno le seguenti informazioni, tutte localizzate nel
punto $x = 0: f (0) = 1, f'(0) = 0, f''(0) = 2.$

a) Determinata la parabola, si scrivano le equazioni delle tangenti $ad$ essa condotte per il
punto $P$ dell’asse $y$ di modo che valga $60^\circ$ l’angolo AP̂B, essendo A e $B$ i rispettivi punti di
tangenza;

$b)$ accertato che il punto $P$ ha ordinata
$4,$ si scriva l’equazione della circonferenza passante
per A, $B$ e $P;$

$c)$ si calcolino le aree delle due parti in cui la circonferenza risulta divisa dall’arco di parabola
di estremi A e $B.$

___________________________________________________________
Durata massima della prova: $5$ ore.
È consentito l’uso della calcolatrice tascabile non programmabile.
Non è consentito lasciare l’Istituto prima che siano trascorse $3$ ore dalla dettatura del tema.

*Fonte:* [📄 PDF p.18](https://drive.google.com/file/d/1nJgEA-rszR8-nXdCQEHB2vnKntfuIAbq/view)


#maturita/soluzione #area/analisi #cluster/successioni_serie_ed_eq_differenziali
