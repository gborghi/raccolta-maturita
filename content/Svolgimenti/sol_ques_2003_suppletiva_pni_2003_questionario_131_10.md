---
title: 2003 Suppletiva PNI — Questionario — Quesito 10 — Svolgimento
tipo: soluzione
item_id: sol_ques_2003_suppletiva_pni_2003_questionario_131_10
of_item: ques_2003_suppletiva_pni_2003_questionario_131_10
prova_id: prova_2003_suppletiva_pni_2003_questionario_131
anno: '2003'
pdf: Prova_Maturita_2003.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/2003
---

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_10|2003 Suppletiva PNI — Questionario — Quesito 10]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Caso $c):$ probabilità che la seconda pallina sia bianca sapendo che la prima viene messa
da parte senza guardarne il colore.

Per il teorema della probabilità totale si ha:

$p=$ p(seconda bianca $\cap$ prima bianca) + p(seconda bianca $\cap$ prima nera) =

$$ = 17 $$
$29 ∙18$
$$ 30 + 18 $$
$29 ∙12$
$30 = 17 ∙18 + 18 ∙12$
$29 ∙30$
$= 18 ∙29$
$29 ∙30 = 18$
$$ 30 = 3 5 $$

QUESITO $10$

Considerata l’equazione in $x:$

$ax2 + bx+ c= 0$

dove a, $b, c$ sono numeri reali qualsiasi, con $a\ne 0,$ scrivere un algoritmo che ne
determini le soluzioni reali e le comunichi, esaminando tutti i casi possibili.

Scriviamo un algoritmo in $pseudo-linguaggio:$

INIZIO
$a:=0$
mentre $a=0$
leggi a,b,c;
$delta:=b^2-4*a*c;$
se $delta<0$ allora
scrivi “l’equazione non ammette soluzioni reali”;
altrimenti
se $delta=0$ allora
inizio
scrivi “l’equazione ammette due soluzioni reali coincidenti”;
$x=-b/(2*a);$
scrivi $“x^{1}=x^{2}=$ “,x);
fine;
altrimenti
inizio
scrivi (“l’equazione ammette due soluzioni reali distinte”);
$x^{1}:=(-b-sqrt(delta))/(2*a);$
$x^{2}:=(-b+sqrt(delta))/(2*a);$
scrivi $“x^{1}= “,x^{1},” x^{2}= “,x^{2}$
fine;
FINE.

Proponiamo il programma in pascal, che può essere provato $on$ line al seguente indirizzo

$http://www.tutorialspoint.com/compile_pascal_online.php$

Program $Equazione_secondo_grado;$
$$ var $$
$a,b,c,x^{1},x^{2},x,delta:real;$
begin
$a:=0;b:=0;c:=0;$
while $a=0 do$
begin
$write('a=$ ');readln(a);
$write('b=$ ');readln(b);
$write('c=$ ');readln(c)
end;
$delta:=b*b-4*a*c;$
$if delta<0$ then
writeln('nessuna soluzione reale')
else
$if delta=0$ then
begin
writeln('due soluzioni reali coincidenti');
$x:=-b/(2*a);$
$writeln('x^{1}=x^{2}= ',x:5:3)$
$$ end $$
else
begin
writeln('due soluzioni reali distinte');
$x^{1}:=(-b-sqrt(delta))/(2*a);$
$x^{2}:=(-b+sqrt(delta))/(2*a);$
$writeln('x^{1}= ',x^{1}:5:3,' x^{2}= ',x^{2}:5:3)$
end;
end.

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.137](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)


#maturita/soluzione #area/geometria #cluster/geometria
