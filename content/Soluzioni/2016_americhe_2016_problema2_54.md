---
tipo: soluzione
prova_stem: 2016_americhe_2016_problema2_54
pdf: Prova_Maturita_2016.pdf
source: text
title: Soluzioni — 2016_americhe_2016_problema2_54
---
# Soluzioni — 2016_americhe_2016_problema2_54

## Problema 1

Americhe 2016 - Problema $2$

AMERICHE 2016 - PROBLEMA $2$

Sia $\Gamma$ il grafico della funzione
f(x) =
$1 + k∙e-x k\in R, k> 0$

definita sull’insieme $R$ dei numeri reali.

Relativamente al grafico $\Gamma$ , mostra come variano le coordinate del suo punto di flesso $P$
in funzione del parametro $k$ e verifica che in tale punto la pendenza del grafico è
indipendente da $k.$

Cerchiamo il flesso $P.$

f'(x) =
$k∙e-x$
$(1 + k∙e-x)2 =$
$k∙e-x$
$e-2x(ex+ k)2 =$
$$ kex $$
$(ex+ k)2$

f''(x) $= kex(ex+ k)2 -kex[2(ex+$ k)ex]
$(ex+ k)4$
$= kex(ex+ k)(ex+ k-2ex)$
$(ex+ k)4$
$= kex(k-ex)$
$(ex+ k)3$

f''(x) $= kex(k-ex)$
$(ex+ k)3$
$\ge 0$ se $(k-ex) \ge 0,$
$ex\le k , x\le ln (k)$

Quindi $\Gamma$ volge la concavità verso il basso se $x> ln (k)$ e verso l’alto se $x< ln (k)$

Quindi $x= ln (k)$ è punto di flesso. Cerchiamo l’ordinata del flesso $P:$

f(ln(k)) =
$1+k∙1$
$$ k = 1 $$
$2$ , quindi $P=$ (ln(k) ;
$2);$ i flessi quindi appartengono alla retta
$y=$
$$ 1 2. $$

Calcoliamo il coefficiente angolare $m$ della tangente inflessionale:

$m=$ f'(ln(k)) = (
$$ kex $$
$(ex+ k)2)$
$x=ln (k)$
$$ = k^{2 $$
$(k+ k)2 = 1$
$4$ : costante al variare di $k.$

Pertanto: nel punto di flesso $P=$ (ln(k) ;
$2)$ la pendenza del grafico è indipendente da $k.$

Anche se non espressamente richiesto, abbiamo informazioni sufficienti per tracciare il
grafico qualitativo della f(x). Essa è continua e positiva su tutto $R,$ tende a $0$ se $x$ tende a

Americhe 2016 - Problema $2$

$-\infty$ , tende a $1$ se $x$ tende a $+\infty$ , è sempre crescente poiché f'(x) =
$$ kex $$
$(ex+k)2$ è sempre
positiva, ha un flesso in $P=$ (ln(k) ;
$$ 1 2). $$

Dopo aver verificato che la funzione p(x) $= log(1 + k∙e-x ) + x$ è una primitiva di $f,$
determina l'area della regione piana compresa tra $\Gamma$ , l'asse $y,$ l’asse $x$ e la retta di
equazione $x= log(\alpha$ ). Che valore deve assumere $\alpha$ perché tale area sia uguale a $1?$

Calcoliamo la derivata di p(x) $= log(1 + k∙e-x ) + x:$

p'(x) =
$-k∙e-x$
$1 + k∙e-x + 1 =$
$1 + k∙e-x =$ f(x)

Quindi p(x) è una primitiva di f(x).

Analizzando il valore $log(\alpha$ ) osserviamo che deve essere $\alpha > 0$ ed inoltre:

Se $\alpha > 1, log(\alpha ) > 0$ (in questo caso l’area è data da $\int$
f(x)dx
$log(\alpha$ )

Se $0 < \alpha < 1, log(\alpha ) < 0$ (in questo caso l’area è data da $\int$
f(x)dx
$log(\alpha$ )

Se $\alpha = 1, log(\alpha ) = 0$ (in questo caso l’area è nulla).

Valutiamo l’area richiesta quando $\alpha > 1:$

$Area= \int$
f(x)dx
$log(\alpha$ )
$= [log(1 + k∙e-x ) + x]0$
$log(\alpha ) = log(1 + k$
$\alpha ) + log(\alpha ) -log(1 + k)$
Se $0 < \alpha < 1$ risulta:
$Area= \int$
f(x)dx
log $(\alpha$ )
$= -[log(1 + k$
$\alpha ) + log(\alpha ) -log(1 +$ k)]

Americhe 2016 - Problema $2$

In generale quindi, per $\alpha > 0$ (compreso il caso $\alpha = 1),$ risulta:

$Area= |log(1 + k$
$\alpha ) + log(\alpha ) -log(1 + k)|$

Vediamo quando tale area vale $1:$

se $\alpha > 1$ deve essere:
$log(1 + k$
$\alpha ) + log(\alpha ) -log(1 + k) = 1,$
$$ log $$
$(1 + k$
$\alpha ) (\alpha$ )
$(1 + k)$
$log(\alpha + k$
$1 + k) = 1$

$\alpha + k$
$1 + k=$ e , $\alpha + k= e(1 + k), \alpha = e(1 + k) -k> 1$ se: $e+ k(e-1) > 1,$
$k> -1$

e questo è verificato perché $k>0.$

se $0< \alpha < 1$ deve essere:
$log(1 + k$
$\alpha ) + log(\alpha ) -log(1 + k) = -1,$
$$ log $$
$(1 + k$
$\alpha ) (\alpha$ )
$(1 + k)$
$= -1$ ,
$log(\alpha + k$
$1 + k) = -1$

$\alpha +k$
$1+k= e-1 , \alpha + k= e-1(1 + k), \alpha = e-1(1 + k) -k$ accettabile se:

${e-1(1 + k) -k> 0$
$e-1(1 + k) -k< 1 , {(1 + k) -ke> 0$
$(1 + k) -ke<$ e , { $k(1 -e) > -1$
$k(1 -e) < e-1 , {k<$
$e-1$
$k> -1$
, $0 < k<$
$e-1$

Quindi l’area è $1$ (al variare di $k)$ per i seguenti valori di $\alpha$ :

Se $\alpha > 1 Area= 1$ per $\alpha = e(1 + k) -k,$ per ogni $k>0.$
Se $0 < \alpha < 1 Area= 1$ per $\alpha = e-1(1 + k) -k$ , purché sia $0 < k<$
$e-1$ .

Per esempio se $k=1$ abbiamo la seguente situazione grafica:

Americhe 2016 - Problema $2$

Per esempio se $k=0.5$ abbiamo la seguente situazione grafica:

Dimostra che
g(x) = log( $kx$
$1 -x)$

è la funzione inversa di $f$ e tracciane il grafico. Prova inoltre che la suddetta funzione $g$ è
crescente in tutto il suo dominio e che il grafico della funzione $h,$ definita come

h(x) = f(x) + g(x)

interseca l’asse $x$ in un unico punto.

Intanto osserviamo che la funzione $y=$ f(x) =
$1+k∙e-x$ è strettamente crescente, quindi
è invertibile. Per ricavare la funzione inversa dobbiamo esprimere $x$ in funzione di $y.$

$y(1 + k∙e-x) = 1, y+ ky∙e-x= 1, e-x= 1 -y$
$ky$ ,
$-x= log(1 -y$
$ky),$
$x= -log(1 -y$
$ky)$

$x= log(1 -y$
$ky)$
$-1$
, $x=$ log( $ky$
$1 -y)$

Quindi g(x) = log(
$$ kx $$
$1-x)$ è la funzione inversa di f(x) =
$1+k∙e-x$ .

Ricordiamo che il grafico della funzione inversa di una funzione $f$ è simmetrico rispetto
alla retta $y=x$ del grafico della $f.$

Il grafico della funzione di equazione g(x) $= f-1(x) =$ log(
$$ kx $$
$1-x)$ è il simmetrico del grafico
della funzione di equazione f(x) =
$1+k∙e-x$ rispetto alla retta di equazione $y=x:$

Americhe 2016 - Problema $2$

Essendo $g$ simmetrica di $f$ rispetto alla retta $y=x,$ dal fatto che $f$ è strettamente crescente
in tutto il suo dominio segue che anche $g$ è strettamente crescente in tutto il suo dominio.

La proprietà richiesta $(g$ crescente in tutto il suo dominio) può anche essere verificata
direttamente studiando il segno della derivata di $g:$

g'(x) = D(ln( $kx$
$1 -x)) =$
$k(1 -x) -kx(-1)$
$(1 -x)2$
$$ kx $$
$1 -x$
$(1 -x)2$
$$ kx $$
$1 -x$
$x(1 -x) > 0$ se $0 < x< 1$

Ma g(x) è definita per
$$ kx $$
$1-x> 0,$ cioè se $0 < x< 1:$ quindi $g$ è crescente in tutto il suo
dominio.

Proviamo ora che il grafico della funzione

h(x) = f(x) + g(x)

interseca l’asse $x$ in un unico punto.

Le intersezioni con l’asse $x$ i ottengono risolvendo l’equazione f(x) + g(x) $= 0$ che
equivale a f(x) $= -g(x);$ i grafici di $y=$ f(x) e $y= -g(x)$ si intersecano in un solo
punto (fra $0$ ed $1),$ come si può osservare dal grafico in cui sono rappresentate le due
funzioni:

Americhe 2016 - Problema $2$

Considerata, per $x\in R,$ la funzione
F(x) $= \int$ f(t)dt
$$ x 0 $$

determina le equazioni dei suoi asintoti e traccia il grafico di F(x).

Riportiamo per comodità il grafico della funzione
f(x) =
$1 + k∙e-x k\in R, k> 0$

Come già visto nel punto $2),$ una primitiva della $f$ è p(x) $= log(1 + k∙e-x ) + x$
Quindi l’equazione della funzione F(x) può essere ricavata analiticamente:

F(x) $= \int$ f(t)dt
$$ x 0 $$
$= [log(1 + k∙e-t ) + t]0$
$x= log(1 + k∙e-x ) + x-log(1 + k) =$

$= log1 + k∙e-x$
$1 + k$
$+ x=$ F(x)

F(x) è continua e derivabile su tutto $R,$ quindi non possono esserci asintoti verticali.
Vediamo se ci sono asintoti orizzontali o obliqui.

Notiamo che F'(x) = f(x) =
$1+k∙e-x$ e calcoliamo i limiti all’infinito:

$limx\to +\infty$ F'(x) $= limx\to +\infty$
$1+k∙e-x= 1:$ quindi può esserci asintoto obliquo con coefficiente
angolare $m= 1.$

$$ lim $$
$x\to +\infty$ [F(x) $-mx] =$ lim
$x\to +\infty [log1 + k∙e-x$
$1 + k$
$+ x-x] =$ lim
$x\to +\infty [log1 + k∙e-x$
$1 + k$
] = [log
$1 +$ k] =

$= -log(1 + k) = q< 0$

Quindi per $x\to +\infty$ abbiamo l’asintoto obliquo di equazione: $y= x-log(1 + k) , k> 0$

Americhe 2016 - Problema $2$

Vediamo cosa succede se $x\to -\infty$ .
$limx\to -\infty$ F'(x) $= limx\to -\infty$
$1+k∙e-x= 0+:$ quindi può esserci asintoto orizzontale.
Risulta:
$$ lim $$
$x\to -\infty$ F(x) = lim
$x\to -\infty [log1 + k∙e-x$
$1 + k$
+ x] : forma indeterminata $[+\infty -\infty$ ]

Osserviamo che: log
$1+k∙e-x$
$1+k$
$+ x=$ log
$1+k∙e-x$
$1+k$
$+ logex=$ log
$1+k∙e-x$
$1+k$
$∙ex=$ log
$ex+k$
$1+k\to$
$\to$ log
$1+k$ se $x\to -\infty$ . Quindi se $x\to -\infty$ abbiamo l’asintoto orizzontale $y=$ log
$1+k$ .

Studio di F(x) $= \int$ f(t)dt
$$ x 0 $$

Possiamo dedurre un grafico qualitativo di $F$ da quello di f(x) =
$1+k∙e-x$ .
Se $x=0$ risulta $F(x)=0.$ Se $x>0$ F(x) è positiva, crescente ed ha per $x\to +\infty$ l’asintoto
obliquo di equazione: $y= x-log(1 + k).$

Se $x<0, F(x)<0$ (si osservi l’area compresa tra $f$ e l’asse $x).$

$\int$ f(t)dt
$$ x 0 $$
$= -\int$ f(t)dt
$$ 0 x $$
$= -Area(tra$ il grafico di $f$ da $x< 0$ a $0$ e l'assex) e siccome
tale area, positiva, $va$ decrescendo, il suo opposto $va$ crescendo: quindi $F$ è crescente
anche per $x<0:$ d’altronde la sua derivata è f(x), che è sempre positiva.
Abbiamo già detto che per $x\to -\infty F$ ha l’asintoto orizzontale $y=$ log
$1+k< 0$ .
Analizziamo la derivata seconda di $F:$

F''(x) = f'(x) $> 0$ per ogni $x:$ la concavità del grafico di $F$ è sempre verso l’alto.

Questo il grafico qualitativo di $F$ (abbiamo posto $k= 0. 58):$

Con la collaborazione di Angela Santamaria
