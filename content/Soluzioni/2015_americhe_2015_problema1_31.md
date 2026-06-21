---
tipo: soluzione
prova_stem: 2015_americhe_2015_problema1_31
pdf: Prova_Maturita_2015.pdf
source: text
title: Soluzioni — 2015_americhe_2015_problema1_31
---
# Soluzioni — 2015_americhe_2015_problema1_31

## Problema 1

Americhe 2015 - Problema $1$

PROBLEMA $1$

Stai seguendo un corso, nell'ambito dell'orientamento universitario, per la preparazione
agli studi di Medicina. Il docente introduce la lezione dicendo che un medico ben
preparato deve disporre di conoscenze, anche matematiche, che permettano di costruire
modelli ed interpretare i dati che definiscono lo stato di salute e la situazione clinica dei
pazienti. Al tuo gruppo di lavoro viene assegnato il compito di preparare una lezione sul
tema: "come varia nel tempo la concentrazione di un farmaco nel sangue?".
Se il farmaco viene somministrato per via endovenosa, si ipotizza per semplicità che la
concentrazione del farmaco nel sangue raggiunga subito il valore massimo e che
immediatamente inizi a diminuire, in modo proporzionale alla concentrazione stessa; nel
caso che il docente $ti$ ha chiesto di discutere, per ogni ora che passa la concentrazione
diminuisce di $1/7$ del valore che aveva nell’ora precedente.

Individua la funzione y(t) che presenta l’andamento richiesto, ipotizzando una
concentrazione iniziale $y(0) = 1$
$\mu g$
$ml$ (microgrammi a millilitro) e rappresentala
graficamente in un piano cartesiano avente in ascisse il tempo $t$ espresso in ore e in
ordinate la concentrazione espressa in
$\mu g$
$ml$ .

Per $t=0$ risulta $y(0)=1;$ per $t=1$ risulta $y(1)=(1/7)y(0)=1/7;$
per $t=2$ risulta $y(2)=1/7(y(1))=1/7(1/7)=1/49$
In generale quindi: y(t) = (
$$ 1 7) t $$

Si tratta di una funzione esponenziale di base $1/7,$ il cui grafico è il seguente:

Americhe 2015 - Problema $1$

Se invece la somministrazione avviene per via intramuscolare, il farmaco viene dapprima
iniettato nel muscolo e progressivamente passa nel sangue. Si ipotizza pertanto che la
sua concentrazione nel sangue aumenti per un certo tempo, raggiunga un massimo e poi
inizi a diminuire con un andamento simile a quello riscontrato nel caso della
somministrazione per via endovenosa.

Scegli tra le seguenti funzioni quella che ritieni più adatta per rappresentare l’andamento
descritto per il caso della somministrazione per via intramuscolare, giustificando la tua
scelta:

y(t) $= 1 -$
$(t-4)^{2}$
$$ 16 $$

y(t) $= sen(3t) ∙e-t$

y(t) $= -t^{3} + 3t^{2} + t$

y(t) $= 7$
$2 (e-t$
$7 -e-t$

Siccome per $t$ che tende all’infinito la concentrazione tende a zero (come si deduce
dall’andamento della concentrazione relativa al caso della somministrazione per via
endovenosa), si escludono le funzioni $1$ e $3$ (che tendono a meno infinito per $t$ che tende
a più infinito).
La seconda funzione, per la presenza del fattore $sen(3t),$ oscilla fino a più infinito;
essendo $sen(3t)$ compreso tra $-1$ e $+1,$ la funzione y(t) $= sen(3t) ∙e-t$ è compresa tra le
due funzioni $-e-t$ e $+e-t$ , quindi non è vero che $ad$ un certo punto, raggiunto il
massimo, la concentrazione inizi a diminuire.

La funzione che è più adatta per rappresentare l’andamento descritto è pertanto la
quarta:
y(t) $= 7$
$2 (e-t$
$7 -e-t$

Traccia il grafico della funzione scelta in un piano cartesiano avente in ascisse il tempo $t$
espresso in ore e in ordinate la concentrazione $y$ espressa in
$\mu g$
$ml$ e descrivi le sue
caratteristiche principali, in rapporto al grafico della funzione relativa alla
somministrazione per via endovenosa.

Studiamo la funzione y(t) =
$2(e-t$
$7-e-t$
$5)$ per $0 \le t< +\infty$

Americhe 2015 - Problema $1$

Dominio: $0 \le t< +\infty$

Intersezioni con gli assi:

Se $t=0: y=0$
Se $y=0:$
$2 (e-t$
$7 -e-t$
$5) = 0 \implies e-t$
$7 = e-t$
$5 \implies t= 0$

Segno della funzione:

La funzione è positiva se:
$2 (e-t$
$7 -e-t$
$5) > 0 \implies e-t$
$7 > e-t$
$5 \implies -t$
$7 > -t$
$5 \implies 5 t< 7t \implies t> 0$

Quindi la funzione si annulla per $t=0$ ed è sempre positiva per $t>0.$

Limiti:

Come già notato nel punto precedente, se $t$ tende a più infinito la funzione tende a zero
(più esattamente a $0+): y=0$ è un asintoto orizzontale per $t$ che tende a più infinito.

Derivata prima:

$y' =$
$2 (-$
$7 e-t$
$$ 7 + 1 $$
$5 e-t$
$$ 5) = 1 $$
$10 (-5e-t$
$7 + 7e-t$
$5) \ge 0$ se $-5e-t$
$7 + 7e-t$
$5 \ge 0$ ;

$7e-t$
$5 \ge 5e-t$
$7 ; e-t$
$5$ ∙e
$7 \ge 5$
$7$ ; e
$7-t$
$5 \ge 5$
$7 ; e-2$
$35t\ge 5$
$7 ; -2$
$35 t\ge ln(5$

$t\le -35$
$2$ ∙ $ln(5$
$7) ; t\le 35$
$2$ ∙ $ln(7$
$5) \cong 5.89$

La funzione è quindi crescente per $0 < t<$
$$ 35 $$
$2$ ∙ $ln($
$5) \cong 5.89$ e decrescente per

$t>$
$$ 35 $$
$2$ ∙ $ln($
$5) \cong 5.89$ : ha quindi un massimo relativo (che è anche assoluto) per

$t=$
$$ 35 $$
$2$ ∙ $ln($
$5) \cong 5.89$ ore (in termini medici questo tempo è detto TEMPO DI PICCO); la

concentrazione (massima) raggiunta in tale istante è:

concentrazione $massima= y(35$
$2$ ∙ $ln(7$
$5)) \cong y(5.89) = 7$
$2 (e-5.89$
$7 -e-5.89$
$5 ) \cong 0.43 \mu g$
$$ ml $$

(in termini medici questa concentrazione è detta CONCENTRAZIONE DI PICCO)

Americhe 2015 - Problema $1$

Derivata seconda:

y'' = D[ $1$
$10 (-5e-t$
$7 + 7e-t$
$$ 5)] = 1 10 (5 $$
$7 e-t$
$7 -7$
$5 e-t$
$$ 5) = 1 $$
$350 (25e-t$
$7 -49e-t$
$5) \ge 0$ se:

$25e-t$
$7 -49e-t$
$5 \ge 0 ; 25e-t$
$7 \ge 49e-t$
$5 ; e-t$
$7+t$
$5 \ge 49$
$25$ ; e
$35t\ge 49$
$$ 25 ; 2 $$
$35 t\ge ln(49$
$$ 25) ; $$
$t\ge$
$$ 35 $$
$2$ ∙ln(
$$ 49 $$
$25) \cong 11.78:$ il grafico quindi volge la concavità verso l’alto se
$t>$
$$ 35 $$
$2$ ∙ln(
$$ 49 $$
$25) \cong 11.78$ e verso il basso se $0 \le t<$
$$ 35 $$
$2$ ∙ln(
$$ 49 $$
$25) \cong 11.78$
Ha un flesso se $t=$
$$ 35 $$
$2$ ∙ln(
$$ 49 $$
$25) \cong 11.78;$ la concentrazione per tale valore del tempo è:
$y(35$
$2 ∙ln(49$
$25)) \cong y(11.78) = 7$
$2 (e- 11.78$
$-e-11.78$
$5 ) \cong 0.32 \mu g$
$$ ml $$
Il grafico della funzione (somministrazione intramuscolare) è il seguente:

Mettiamo a confronto il grafico relativo al caso della somministrazione per via
intramuscolare con quello relativo al caso della somministrazione per via endovenosa:

Americhe 2015 - Problema $1$

Confrontando i due grafici notiamo che nel caso della somministrazione endovenosa la
concentrazione del farmaco nel sangue, ipotizzando che raggiunga subito il valore
massimo, diminuisce rapidamente, raggiungendo, dopo tre ore, una concentrazione
molto bassa, pari a (
$$ 1 7) 3 $$
$\cong 0.003$
$\mu g$
$ml$ . Ne caso della somministrazione intramuscolare,
come detto nella premessa, il farmaco viene dapprima iniettato nel muscolo e
progressivamente passa nel sangue, pertanto si può ipotizzare che la sua
concentrazione nel sangue aumenti per un certo tempo e, in particolare, con la legge in
esame, raggiunge il massimo dopo circa $5.89$ ore, massimo che è uguale a circa $0.43$
$\mu g$
$ml;$
dopo aver raggiunto tale massimo la concentrazione diminuisce, ma più lentamente
rispetto al caso della somministrazione endovenosa; per esempio dopo circa $11.78$ ore
(tempo relativo al flesso della curva), si ha una concentrazione pari a circa $0.32$
$\mu g$
$ml;$ dopo
lo stesso tempo, nel caso della somministrazione endovenosa, la concentrazione è
praticamente nulla: (
$$ 1 7) 11.78 $$
$\cong 1.1 ∙10-10$
$\mu g$
$ml$ .
Osserviamo che le due concentrazioni sono uguali dopo un tempo $t$ corrispondente al
punto di incontro dei due grafici, pari a circa $0.94$ ore; la concentrazione comune è pari a
circa $0.16$
$\mu g$
$ml$ .

Osserviamo che le derivate prime delle due funzioni indicano la velocità di
variazione della concentrazione del farmaco nel sangue; abbiamo nei due casi:

somministrazione endovenosa: $v=$
$dt($
$$ 1 7) t = ( 1 7) t $$
∙ln(
$7) = -ln(7)$ ∙(
$$ 1 7) t $$
$< 0$ per ogni $t,$
vuol dire che la concentrazione diminuisce sempre; infatti si è ipotizzato che raggiunga
pressoché istantaneamente la massima concentrazione.

somministrazione intramuscolare: $v=$
$dt($
$2 (e-t$
$7 -e-t$
$$ 5)) = 1 $$
$10 (-5e-t$
$7 + 7e-t$
$5)$ , che, come
già visto nello studio della funzione, è positiva per $0 < t<$
$$ 35 $$
$2$ ∙ $ln($
$5) \cong 5.89$ e negativa
per $t>$
$$ 35 $$
$2$ ∙ $ln($
$5) \cong 5.89$ : vuol dire che la concentrazione aumenta fino a circa $5.89$ ore,
raggiunge il massimo e poi diminuisce.

Osserviamo poi che le derivate seconde delle due funzioni indicano se aumenta o
diminuisce la velocità di variazione della concentrazione del farmaco nel sangue
(come dire l’accelerazione); abbiamo nei due casi:

somministrazione endovenosa: $a=$
$$ dv $$
$dt=$
$dt(($
$$ 1 7) t $$
∙ln(
$$ 1 7)) = ( 1 7) t $$
$∙ln2$ (
$7) > 0$ per ogni $t,$
vuol dire che la velocità di variazione della concentrazione del farmaco nel sangue cresce
sempre: in realtà, essendo la velocità sempre negativa, in valore assoluto la velocità di
variazione diminuisce.
somministrazione intramuscolare: $a=$
$$ dv $$
$dt=$
$dt($
$10 (-5e-t$
$7 + 7e-t$
$$ 5)) = 1 $$
$350 (25e-t$
$7 -49e-t$
$5) > 0$ per $t\ge$
$$ 35 $$
$2$ ∙ln(
$$ 49 $$
$25) \cong 11.78$ : vuol dire che la velocità di

Americhe 2015 - Problema $1$

variazione della concentrazione del farmaco nel sangue diminuisce fino a circa $11.78$ ore
ed aumenta dopo tale tempo (notiamo che nel punto di flesso, che si ha per $t=11.78,$ la
velocità raggiunge il minimo).

Nella figura seguente sono rappresentati i vari metodi di somministrazione di un farmaco,
tra cui, come nei nostri casi di studio, quello per via endovenosa e quello per via
intramuscolare.

Per evitare danni agli organi nei quali il farmaco si accumula è necessario tenere sotto
controllo la concentrazione del farmaco nel sangue. Supponendo che in un organo il
farmaco si accumuli con una velocità $v,$ espressa in
$\mu g$
ml∙h (microgrammi a millilitro all’ora),
proporzionale alla sua concentrazione nel sangue:

v(t) = k∙y(t)

Determina la quantità totale di farmaco accumulata nell’organo nel caso della
somministrazione endovenosa e di quella intramuscolare studiate in precedenza. In quale
delle due l’accumulo sarà maggiore?

Detta q(t) la quantità di farmaco assorbita nell’organo, espressa in
$\mu g$
$ml$ , dalla legge della
velocità fornita si ottiene:

Americhe 2015 - Problema $1$

v(t) = dq(t)
$$ dt $$
= k∙y(t),
da cui: $dq=$ k∙y(t) $dt$ ,
$k$ ha per dimensioni $1$

La quantità $q$ di farmaco accumulato nell’organo si ottiene integrando la precedente
equazione differenziale tra $0$ e più infinito:

$q-q^{0}= \int$
k∙y(t) $dt$
$+\infty$
$= k∙\int$
y(t) $dt$
$+\infty$
(con $q^{0}= q(0) = 0$ in entrambi i casi)

Analizziamo i due casi in esame:

 Somministrazione endovenosa:

$q= k∙\int$
$$ (1 7) t dt $$
$+\infty$
= k∙lim
$b\to +\infty \int (1$
$$ 7) t dt b 0 $$
= k∙lim
$b\to +\infty$
$ln(1$
∙ $[(1$
$$ 7) t ] 0 b = $$
$= k∙(-$
$ln(7))$ ∙lim
$b\to +\infty [(1$
$$ 7) b $$
$-1] =$
$= k∙(-$
$ln(7)) ∙[0 -1] =$
$ln(7) \cong (0.514$ ∙k) $\mu g$
ml∙h (microgrammi al millilitro)

Ciò vuol dire che vengono accumulati nell’organo $(0.514$ ∙k) microgrammi di farmaco,
teoricamente in un tempo infinito, praticamente dopo poche ore; per esempio dopo $2$ ore,
ponendo $b=2$ nel calcolo precedente, si ottiene circa il $98$ %:

$ln(1$
∙ $[(1$
$$ 7) t ] 0 2 = k $$
$ln(1$
∙ $[(1$
$$ 7) 2 $$
$-1] \cong (0.503$ ∙k) $\mu g$
ml∙h (microgrammi al millilitro)

 Somministrazione intramuscolare:

$q= k∙\int$
$2 (e-t$
$7 -e-t$
$5) dt$
$+\infty$
$$ 0 = 7 $$
$2$ k∙lim
$b\to +\infty \int (e-t$
$7 -e-t$
$5) dt= 7$
$2$ k∙
$$ b 0 lim $$
$b\to +\infty [-7e-t$
$7 + 5e-t$
$$ 5] 0 b $$

$2$ k∙lim
$b\to +\infty [-7e-b$
$7 + 5e-b$
$5 -(-7 + 5)] = 7$
$2 k∙[-0 + 0 + 2] =$

$= (7$ ∙k) $\mu g$
ml∙h (microgrammi al millilitro)

Ciò vuol dire che vengono accumulati nell’organo $(7$ ∙k) microgrammi al millilitro di
farmaco, teoricamente in un tempo infinito, praticamente dopo $10$ ore si ha:

$2 k∙[-7e-t$
$7 + 5e-t$
$$ 5] 0 10 = 7 $$
$2 k∙(-7e-10$
$7 + 5e-10$
$5 + 2) \cong (3.5$ ∙k)
$\mu g$
ml∙h (microgrammi al
millilitro), la metà del totale;

Americhe 2015 - Problema $1$

dopo $24$ ore abbiamo:

$2 k∙[-7e-t$
$7 + 5e-t$
$$ 5] 0 24 = 7 $$
$2 k∙(-7e-24$
$7 + 5e-24$
$5 + 2) \cong (6.3$ ∙k)
$\mu g$
ml∙h (microgrammi al
millilitro), il $90$ % del totale;

dopo $48$ ore abbiamo:

$2 k∙[-7e-t$
$7 + 5e-t$
$$ 5] 0 48 = 7 $$
$2 k∙(-7e-48$
$7 + 5e-48$
$5 + 2) \cong (6.98$ ∙k)
$\mu g$
ml∙h (microgrammi al
millilitro), quasi il $100$ % del totale.

Calcoliamo la quantità di farmaco accumulata dopo $2ore,$ per fare un confronto con il
caso della somministrazione per via endovenosa):

$2 k∙[-7e-t$
$7 + 5e-t$
$$ 5] 0 24 = 7 $$
$2 k∙(-7e-2$
$7 + 5e-2$
$5 + 2) \cong (0.32$ ∙k)
$\mu g$
ml∙h (microgrammi al
millilitro), pari a circa il $4.6$ % del totale; ricordiamo che nel caso della somministrazione
endovenosa dopo $2$ ore si aveva circa il $98$ % del totale. Questo vuol dire, come già
osservato, che l’accumulo di farmaco nel caso della somministrazione endovenosa è
molto più rapido.

In conclusione:

La quantità di farmaco accumulata nell’organo nel caso della somministrazione
intramuscolare è di gran lunga maggiore di quella accumulata nel caso della
somministrazione endovenosa.

Con la collaborazione di Angela Santamaria e Stefano Scoleri
