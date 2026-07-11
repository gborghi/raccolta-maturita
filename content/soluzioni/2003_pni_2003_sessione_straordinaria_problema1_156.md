---
tipo: soluzione
prova_stem: 2003_pni_2003_sessione_straordinaria_problema1_156
pdf: Prova_Maturita_2003.pdf
source: text
title: 2003 PNI Straordinaria — Problema 1 — Svolgimento
---


PNI 2003 - SESSIONE STRAORDINARIA - PROBLEMA $1$

È assegnata la seguente equazione in $x: x^{3} + 2x-50 = 0$ .

a)

Dimostrare che ammette una e una sola soluzione x̅ .

La funzione di equazione f(x) $= x^{3} + 2x-50$ è razionale intera di grado dispari, quindi
ammette almeno uno zero; l’equazione ammette quindi almeno una soluzione.
Calcoliamo la derivata prima della funzione per vedere se è strettamente monotona:

f'(x) $= 3x^{2} + 2 > 0$ per ogni $x$ : quindi la funzione è sempre crescente, pertanto
l’equazione data ha una sola soluzione.

$b)$

Determinare il numero intero $z$ tale che risulti: $z<$ x̅ $< z+ 1$ .

Isoliamo la radice x̅:

$f(3) = 27 + 6 -50 < 0, f(4) = 64 + 8 -50 > 0$ quindi la radice è compresa fra $3$ e $4.$

Risulta pertanto $z=3.$

$c)$

Scrivere un algoritmo idoneo a calcolare un valore approssimato di x̅ a meno di $10-4.$

L’algoritmo richiesto deve calcolare la radice x̅ , a meno di $10-4,$ dell’equazione

$x^{3} + 2x-50 = 0$ nell’intervallo $[3;4].$

Indicata con $f(x)=0$ l’equazione, abbiamo già verificato che la radice è unica nell’intervallo
[a; $b]=[3;4].$

I metodi più utilizzati per determinare un valore approssimato della radice dell’equazione
sono quelli di Bisezione ( o Dicotomia), delle Tangenti (o di Newton), delle Secanti (caso
particolare di quello delle Tangenti) e del Punto fisso.

Indichiamo un algoritmo per determinare la radice dell’equazione $f(x)=0$ con
l’approssimazione richiesta $10-4.$

Algoritmo bisezione
$Errore:=10^(-4)$
$x^{1}:=3$
$x^{2}:=4$
$c:=(x^{1}+x^{2})/2$
Se $f(c)=0$ allora scrivi “La radice è c” altrimenti ripeti
Se $f(c)*f(x^{1})<0$ allora poni $x^{2}=c$ altrimenti poni $x^{1}=c$
Finchè $(x^{2}-x^{1})/2<errore$ oppure $f(c)=0$
Scrivi $c$
Fine.

Indichiamo un possibile programma in Pascal (valido per la funzione f(x) $= x^{3} + 2x-50$
e per l’intervallo $[3;4]).$

program bisezione;
Uses Crt;
Const $a=3;$
$b=4;$
$n=4;$

Var c:real;
risposta:char;

Procedure Presentazione;
Begin
Writeln('Questo programma permette di calcolare la radice di ');
$writeln('X^3 +2*x-50 = 0$ nell''intervallo $[3;4]');$
Writeln('a meno di $10 ^(-4)$ ');
Writeln;writeln;
End;

Function f(x:real):real;

Begin
$f:=x*x*x+2*x-50$
End;

Procedure Elabora;
Var $errore,x^{1},x^{2}:real;$
Begin
$errore:=exp(-4*ln(10)); (*10^(-4)*)$
$x^{1}:=a; x^{2}:=b;$

Repeat
$c:=(x^{1}+x^{2})/2;$
$If f(c)*f(x^{1})<0$ then
$x^{2}:=c$ ELSE $x^{1}:=c$
Until $(abs(x^{2}-x^{1})<errore) or (f(c)=0)$
end;

Procedure Comunica;
Begin
Writeln('La radice , con l''approssimazione richiesta ‚ : $',c:10:n);$
Writeln
End;

BEGIN $(*main*)$
Repeat
Clrscr;
Presentazione;
Elabora;
Comunica;
Write('Ancora? $(s/n)$ ');
Readln(risposta);
Until risposta in ['n','N']
END.

Il programma può essere provato $on$ line copiandolo nell’apposita finestra al seguente
link:

$http://www.tutorialspoint.com/compile_pascal_online.php$

L’esito è il seguente:

$sh-4.3$$ fpc -
$vw$ main.pas
Free Pascal Compiler vers
ion $2.6.4 [2015/03/25]$ for $x^{86}_64$
Copyright $(c) 1993-$
2014 $by$ Florian Klaempfl and others
Target $OS:$ Linux for $x^{86}-$
$$ 64 $$

Questo programma permette di calcolare la radice di
$X^3 +2*x-50=0$
nell'intervallo $[3;4]$ a meno di $10^(-4)$

La radice, con l'approssimazione $richiesta:3.5032$

Ancora? $(s/n)$

$d)$

Dopo aver riferito il piano a un sistema di assi cartesiani ortogonali (Oxy), determinare, se
esistono, i valori del parametro reale $k (k\ne -1)$ per cui la curva $Ck$ di equazione:

$y= (x^{3} + 2x-50) + k(x^{3} + 2x-75)$

ammette un massimo e un minimo relativi.

Calcoliamo la derivata della funzione:

$y' = 3x^{2} + 2 + 3kx2 + 2k= 3(1 + k)x^{2} + 2 + 2k$

Affinché ci siano un massimo ed un minimo relativi è necessario che la derivata prima si

annulli due volte, quindi l’equazione $3(1 + k)x^{2} + 2 + 2k= 0$ deve avere due radici reali

e distinte. Ma tale equazione, con $k\ne -1$ , equivale a: $3x^{2} + 2 = 0$ , che non ammette
soluzioni reali.

Non esiste quindi alcun valore di $k$ per cui la curva $Ck$ ammetta un massimo ed un minimo
relativi.

e)

Stabilire se esiste un valore k̅ di $k$ per cui la curva Ck̅ è simmetrica rispetto all’origine O.

La curva $Ck$ è simmetrica rispetto all’origine se $y(-x) = -y(x),$ quindi se:

$(-x^{3} -2x-50) + k(-x^{3} -2x-75) = -(x^{3} + 2x-50) -k(x^{3} + 2x-75)$ per ogni $x.$

$-50 -75k= 50 + 75k , -100 = 150k , k= -2$

Con la collaborazione di Angela Santamaria
