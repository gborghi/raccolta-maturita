---
tipo: soluzione
prova_stem: 2019_boreale_2019_problema1_68
pdf: Prova_Maturita_2019.pdf
source: text
title: Soluzioni — 2019_boreale_2019_problema1_68
---
# Soluzioni — 2019_boreale_2019_problema1_68

## Problema 1

Boreale 2019 - Problema $1$

LICEO SCIENTIFICO 2019 - CALENDARIO BOREALE

PROBLEMA $1$

Si consideri la funzione
E(x) =
$-Ax$
$(1 -x^{2})^{2}$
dove A è una costante positiva.

a)

Descrivere l’andamento della funzione E(x) e rappresentarne il grafico, individuandone gli asintoti, la
simmetria ed il punto di flesso $F.$ Scrivere l’equazione della retta tangente al grafico in $F.$

Dominio: $x\ne \pm 1$ , quindi: $-\infty < x< -1 , -1 < x< 1, 1 < x< +\infty$

La funzione è positiva per $x<0,$ negativa per $x>0$ e si annulla per $x=0.$

Essendo $E(-x) = -E(x)$ la funzione è dispari (grafico simmetrico rispetto all’origine degli assi).

Calcoliamo i limiti:

$$ lim $$
$x\to \pm \infty$ E(x) $= 0\mp : y= 0$ asintoto orizzontale per $x\to \pm \infty$

$$ lim $$
$x\to 1\pm$ E(x) $= -\infty$ ,
$$ lim $$
$x\to (-1)\pm$ E(x) $= + \infty : x= \pm 1$ asintoti verticali.

Studio della derivata prima:

$E' = -A(1 -x^{2})^{2} + Ax[2(-2x)(1 -x^{2})]$
$(1 -x^{2})^{4}$
$= A(1 -x^{2})(-1 + x^{2} -4x^{2})$
$(1 -x^{2})^{4}$
$= A(1 -x^{2})(-1 -3x^{2})$
$(1 -x^{2})^{4}$

$E' = -A(1 + 3x^{2})$
$(1 -x^{2})^{3}$
$> 0$ se $1 -x^{2} < 0: x< -1$ vel $x> 1:$ in tali intervalli il grafico è crescente;

non ci sono massimi nè minimi.

Studio della derivata seconda:

E''(x) $= -6Ax(1 -x^{2})^{3} + A(1 + 3x^{2})[-6x(1 -x^{2})^{2}]$
$(1 -x^{2})^{6}$
$= -6Ax(1 -x^{2} + 1 + 3x^{2})$
$(1 -x^{2})^{4}$
$-6Ax(2+2x^{2})$
$(1-x^{2})^{4}$
$\ge 0$ se $x\le 0$ , nel dominio: il grafico volge quindi la concavità verso

l’alto per $x< 0$ e verso il basso per $x> 0$ (nel dominio): $x= 0$ è punto di flesso: $F= (0; 0).$

Boreale 2019 - Problema $1$

Grafico della funzione (per esemplificare abbiamo posto $A=2):$

Scriviamo ora l’equazione della tangente inflessionale:

$E'(0) = -A,$
quindi: $y-0 = -A(x-0), y= -Ax:$ tangente in $F.$

$b)$

Determinare i valori dei seguenti integrali:

$B= \int$ E(x)
$-1$
$dx C= \int$ E(x)
$$ 1 4 $$
$-1$
$dx D= \int |E(x)|$
$$ 1 4 $$
$-1$
$$ 2 dx $$

specificando il significato geometrico di ciascuno di essi.

$B= \int$ E(x)
$-1$
$dx= \int$
$-Ax$
$(1 -x^{2})^{2}$
$-1$
$dx= \int -Ax (1 -x^{2})-2$
$-1$
$dx=$ A
$2 \int -2x (1 -x^{2})-2$
$-1$
$dx=$

= A
$2 [(1 -x^{2})-1$
$-1$
$-1$
$$ 2 0 $$
$= -A$
$$ 2 [ 1 $$
$1 -x^{2}]$
$-1$
$$ 2 0 $$
$= -A$
$2 (1 -4$
$$ 3) = (1 $$
$6$ A) $u^{2} = B$
Questo integrale rappresenta geometricamente l’area della regione finita di piano delimitata dal grafico
della funzione E(x), dall’asse $x$ e dalla retta $x= -$
$$ 1 2 . $$

Boreale 2019 - Problema $1$

Calcoliamo il secondo integrale:

$C= \int$ E(x)
$$ 1 4 $$
$-1$
$dx= \int$
$-Ax$
$(1 -x^{2})^{2}$
$$ 1 4 $$
$-1$
$dx= -A$
$$ 2 [ 1 $$
$1 -x^{2}]$
$-1$
$$ 2 1 4 $$
$= -A$
$$ 2 (16 $$
$15 -4$
$3) = -A$
$2 (-4$
$$ 15) = ( 2 $$
$15$ A) $u^{2} = C$

Questo integrale rappresenta geometricamente la somma fra l’area della regione finita di piano delimitata
dal grafico della funzione E(x), dall’asse $x$ e dalla retta $x= -$
$2$ e l’opposto dell’area della regione finita di
piano delimitata dal grafico della funzione E(x), dall’asse $x$ e dalla retta $x=$
$$ 1 4 . $$

Calcoliamo il terzo integrale:

$D= \int |E(x)|$
$$ 1 4 $$
$-1$
$dx= \int$ E(x)
$-1$
$dx+ \int -E(x)$
$$ 1 4 0 $$
$dx= 1$
$6 A-\int$ E(x)
$$ 1 4 0 $$
$dx= 1$
$6 A+$ A
$$ 2 [ 1 $$
$1 -x^{2}]$
$$ 0 1 4 = = 1 $$
$6 A+$ A
$$ 2 (16 $$
$15 -1) = 1$
$6 A+ 1$
$30 A= (1$
$5$ A) $u^{2} = D$

Questo integrale rappresenta geometricamente la somma fra l’area della regione finita di piano delimitata
dal grafico della funzione E(x), dall’asse $x$ e dalla retta $x= -$
$2$ e l’area della regione finita di piano
delimitata dal grafico della funzione $-E(x),$ dall’asse $x$ e dalla retta $x=$
$$ 1 4 . $$

Boreale 2019 - Problema $1$

$c)$

Considerato un sistema di riferimento ortogonale Oxy, dove le lunghezze sono espresse in metri $(m),$ si
pongono due cariche uguali positive puntiformi $q^{1}$ e $q^{2}$ nei punti $P^{1}(-1, 0)$ e $P^{2}(1, 0).$ Le quantità di carica
sono espresse in coulomb $(C).$ Dimostrare che il modulo del campo elettrico nei punti di coordinate $(x, 0),$
con $-1 < x < 1,$ è espresso da $|E(x)|,$ per un’opportuna scelta della costante A.
Effettuare un’analisi dimensionale di A e spiegare qual è il significato fisico dell’integrale $B$ calcolato al
punto $b.$

I moduli dei campi elettrici generati nel punto $P= (x, 0)$ compreso fra $P^{1}$ e $P^{2}$ dalle cariche uguali e
positive $q^{1}$ e $q^{2}$ sono rispettivamente:
$E^{1} =$
$$ kq1 $$
$(x+ 1)^{2} , E^{2} =$
$$ kq2 $$
$(1 -x)2$
Posto $q^{1} = q^{2} = q,$ il modulo del campo elettrico risultante in $P$ è:

$|E^{2} -E^{1}| = |$
$$ kq2 $$
$(1 -x)2 -$
$$ kq1 $$
$(x+ 1)^{2}| = kq|$
$(1 -x)2 -$
$(x+ 1)^{2}| = kq|$
$4x$
$(1 -x^{2})^{2}| =$

$= 4kq|$
$(1 -x^{2})^{2}| = |$
$4kqx$
$(1 -x^{2})^{2}| = |E(x)|$ , con $A= 4kq$ , essendo $k$ la costante di Coulomb.

Calcoliamo le dimensioni di A:
[A] $= [4kq] =$ [kq] $= [Fs2$
$q^{2}$ ∙q] $= [Fs2$
q] $= [MLT-2L^{2}$
$$ IT $$
] $= [ML3T-3I-1] =$ [A]

L’unità di misura di A è quindi:
$kg∙m^{3}$
$s^{3}∙A$ .

Boreale 2019 - Problema $1$

Vediamo ora qual è il significato dell’integrale $B$ calcolato precedentemente.

$B= \int$ E(x)
$-1$
$dx= \int |E(x)|$
$-1$
$$ 2 dx $$

Ricordiamo la relazione fra il potenziale $V,$ il campo elettrico E e la distanza $x$ dal punto in cui è collocata
la carica che genera il campo:

$E= dV$
$dx , dV=$ E $dx , \int$
E(x)
$$ x^{2} x^{1 $$
$dx= V$ (con $V d. d. p.$ fra i punti di ascissa $x^{1}$ ed $x^{2})$

Quindi: $\int$
$|E(x)|$
$-1$
$dx$ rappresenta la differenza di potenziale fra i punti di ascissa -
$2$ e $0.$

$d)$

Determinare modulo, direzione e verso del campo elettrostatico generato dalle cariche $q^{1}$ e $q^{2}$
rispettivamente nei punti $S(0, 1)$ e $T(0, \sqrt{3}).$
Quali sono i valori del potenziale elettrostatico nei punti $S$ e $T?$

Studiamo il campo elettrico in $S:$

Boreale 2019 - Problema $1$

Dopo aver notato che le direzioni di $E^{1}$
⃗⃗⃗⃗ ed $E^{2}$
⃗⃗⃗⃗ sono perpendicolari (essendo l’angolo $P1SP2$ retto)
possiamo concludere che il campo elettrostatico generato dalle cariche $q^{1}$ e $q^{2}$ nel punto $S(0, 1)$ ha la
direzione ed il verso dell’asse $y$ e modulo dato dalla diagonale del quadrato di lato $E^{1}.$ Risulta:

$E^{1} = k$
$$ q^{1 $$
$P1S^{2} = k$
$$ q (\sqrt{2}) $$
$2 = k$
$2 , E= E^{1} ∙\sqrt{2} =$
$kq\sqrt{2}$

Studiamo il campo elettrico in $T(0, \sqrt{3}).$

Osserviamo che l’angolo $OTP2 = 30^\circ$ , quindi $CTD=60^\circ$ . Il
triangolo CTD è quindi equilatero. Il modulo di E vale quindi:
$E= 2 TF= 2 E^{1} \sqrt{3}$
$2 = \sqrt{3} E^{1} = \sqrt{3} ( kq$
$P1T^{2}) = \sqrt{3} (kq$
$4 ) =$ E

La direzione ed il verso di E sono quelli dell’asse $y.$

Calcoliamo ora il valore del potenziale elettrostatico in $S$ e $T,$ ricordando che il potenziale elettrostatico $V$
generato da una carica puntiforme $q$ in un punto a distanza $R$ dalla carica è dato da $V=$
$$ kq $$
$R$ .

Risulta:

V(S) $= 2 ( kq$
$P1S) = 2 (kq$
$$ \sqrt{2 $$
) $= kq\sqrt{2}$ .

V(T) $= 2 ( kq$
$P1T) = 2 (kq$
$2 ) = kq$ .

Con la collaborazione di Angela Santamaria
