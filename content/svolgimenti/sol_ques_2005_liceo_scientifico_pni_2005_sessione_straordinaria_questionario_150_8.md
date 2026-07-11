---
title: 2005 PNI Straordinaria — Questionario — Quesito 8 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_8
of_item: ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_8
prova_id: prova_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150_8|2005 PNI Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2005_liceo_scientifico_pni_2005_sessione_straordinaria_questionario_150|2005 PNI Straordinaria — Questionario]]

Liceo Scientifico PNI 2005

$$ \int dt $$
sen $t$
$2x$
$-x$
$$ = \int dt $$
sen $t$
$-x$
$$ + \int dt $$
sen $t$
$2x$
$= -\int$
$$ dt $$
sen $t$
$-x$
$$ a + \int dt $$
sen $t$
$2x$

$D(\int$
$$ dt $$
sen $t$
$2x$
$-x$
) = -
$sen(-x) ∙(-1) +$
$sen(2x) ∙2 = -$
sen(x) +
$sen(2x) = -cosx+ 1$
senxcosx

QUESITO $8$

Dopo aver spiegato, attraverso una dimostrazione o una interpretazione geometrica,
perché l’equazione $x^{3} + x+ 1 = 0$ ammette una e una sola soluzione reale, esplicitare
un algoritmo idoneo a calcolarne un valore approssimato.

Consideriamo la funzione di equazione:

f(x) $= x^{3} + x+ 1$

Trattandosi di una funzionale razionale intera di grado dispari essa si annulla almeno una
volta. Calcoliamo la derivata prima:

f'(x) $= 3x^{2} + 1 > 0$ per ogni $x,$ quindi la funzione è sempre crescente: si annulla
pertanto solo una volta.

Quanto detto per la funzione permette di concludere che l’equazione data ammette una
sola soluzione reale.

Per trovare un valore approssimato della radice dobbiamo prima isolarla, trovando un
valore in cui la funzione è negativa ed un in cui è positiva. Per effettuare tale ricerca
notiamo che per $x=0$ la funzione vale $1$ e che per valori positivi di $x$ è sempre positiva.
Ponendo $x= -1$ la funzione vale $- 1,$ quindi la radice richiesta è compresa fra $-1$ e $0.$

Possiamo applicare, per esempio, il metodo di bisezione.

f(x) $= x^{3} + x+ 1$ , [a; b] $= [-1; 0];$ f(a) $= f(-1) = -1 < 0$ ; f(b) $= f(0) = 1 > 0$

$c= a+ b$
$= -1 + 0$
$= -0.5 ; f(-0.5) = 0.38 > 0,$
$c\to b$ , [a; b] $= [-1; -0.5]$

$c= a+ b$
$= -1 -0.5$
$= -0.75 ; f(-0.75) = -0.17 < 0, c\to$ a , [a; b] $= [-0.75; -0.5]$

$c= a+ b$
$= -0.75 -0.5$
$= -0.63 ; f(-0.63) = 0.13 > 0, c\to b$ , [a; b] $= [-0.75; -0.63]$
Quindi la radice $c$ dell’equazione data appartiene all’intervallo $(-0.75; -0.63)$
Indichiamo un programma in pascal che permette di trovare la radice con
l’approssimazione voluta.
Funzione f(x) $= x^{3} + x+ 1$ , per l’intervallo $[-1;0],$ approssimazione $10-2.$

Liceo Scientifico PNI 2005

program bisezione;
Uses Crt;
Const $a=-1;$
$b=0;$
$n=2;$

Var c:real;
risposta:char;

Procedure Presentazione;
Begin
Writeln('Questo programma permette di calcolare la radice di ');
$writeln('X^3 +x+1 = 0$ nell''intervallo $[-1;0]');$
Writeln('a meno di $10 ^(-2)$ ');
Writeln;writeln;
End;

Function f(x:real):real;

Begin
$f:=x*x*x+x+1$
End;

Procedure Elabora;
Var $errore,x^{1},x^{2}:real;$
Begin
$errore:=exp(-2*ln(10)); (*10^(-2)*)$
$x^{1}:=a; x^{2}:=b;$

Repeat
$c:=(x^{1}+x^{2})/2;$
$If f(c)*f(x^{1})<0$ then
$x^{2}:=c$ ELSE $x^{1}:=c$
Until $(abs(x^{2}-x^{1})<errore) or (f(c)=0)$
end;

Procedure Comunica;
Begin
Writeln('La radice , con l''approssimazione richiesta: $',c:10:n);$
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

Free Pascal Compiler version $2.6.4 [2015/03/25]$ for $x^{86}_64$
Copyright $(c) 1993-2014 by$ Florian Klaempfl and others
Target $OS:$ Linux for $x^{86}-64$

Questo programma permette di calcolare la radice di
$X^3 +x+1 = 0$ nell'intervallo $[-1;0]$
a meno di $10 ^(-2)$

La radice , con l'approssimazione richiesta : $-0.68$

Ancora? $(s/n)$

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
