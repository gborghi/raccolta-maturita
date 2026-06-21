---
tipo: soluzione
prova_stem: 2016_americhe_2016_problema1_47
pdf: Prova_Maturita_2016.pdf
source: text
title: Soluzioni — 2016_americhe_2016_problema1_47
---
# Soluzioni — 2016_americhe_2016_problema1_47

## Problema 1

Americhe 2016 - Problema $1$

AMERICHE 2016 - PROBLEMA $1$

Considerata la funzione $G: R \to R$ è così definita:

G(x) $= \int$
$et sen2(t)dt$
$2x$

svolgi le richieste che seguono.

Discuti campo di esistenza, continuità e derivabilità della funzione G(x). Individua gli
intervalli di $positività/negatività$ e le eventuali intersezioni con gli assi cartesiani.

Osserviamo che la funzione integranda g(x) $= ex sen2(x)$ è definita, continua e
derivabile su tutto l’asse reale. Per il teorema fondamentale del calcolo integrale (unito al
teorema sulla derivata della funzione composta) la $G$ è definita, derivabile (e quindi
continua) su tutto $R.$ Ricordiamo che:

Se G(x) $= \int$
g(t)
h(x)
$dt$ allora G'(x) = g(h(x)) ∙h'(x). Nel nostro caso si ha:

G'(x) $= 2e2xsen2(2x)$

Studiamo la positività di G(x).

La funzione g(x) $= ex sen2(x)$ è sempre positiva o nulla, in particolare, essendo

$0 \le sen2(x) \le 1$ si ha che $0 \le ex sen2(x) \le ex$ ; il grafico di g(x) è quindi compreso fra
i grafici di $y= 0$ e $y= ex,$ quindi è del tipo:

Americhe 2016 - Problema $1$

Mostriamo un ingrandimento del grafico per $x<0:$

Possiamo quindi concludere (tenendo presente il significato geometrico della funzione
integrale, legato all’area della regione delimitata dal grafico della funzione integranda e
dall’asse $x$ nell’intervallo $[0,2x])$ che:

Se $x> 0,$ G(x) $> 0$ (... l’area $va$ aumentando, e tende a più infinito per $x\to +\infty$ )
Se $x<0$ risulta:
G(x) $= \int$
$et sen2(t)dt$
$2x$
$= -\int$
$et sen2(t)dt$
$2x$
$< 0$ (... l’area fra $2x$ e $0$ al crescere di $x$ da
meno infinito a zero diminuisce quindi G(x) aumenta perché equivale alla suddetta area
cambiata di segno).
Se $x=0 G(x)=0.$ Conclusione sul segno della funzione:

G(x) $> 0$ se $x> 0,$ G(x) $< 0$ se $x< 0,$ G(x) $= 0$ se $x= 0.$

Eventuali intersezioni con gli assi cartesiani.

Abbiamo già osservato che se $x= 0,$ G(x) $= 0,$ quindi il grafico passa per l’origine degli
assi cartesiani. In base a quanto osservato nello studio del segno della funzione, non
abbiamo altre intersezioni con gli assi cartesiani.

Determina l’esistenza degli asintoti della funzione G(x), motivando opportunamente la
risposta.

Trattandosi di una funzione continua su tutto l’asse reale non possono esserci asintoti
verticali.

Abbiamo già osservato che se $x\to +\infty$ la funzione tende a $+\infty$ , quindi potrebbe esserci
asintoto obliquo. Essendo la funzione derivabile, è necessario che G'(x) $\to m$ (valore
finito e coefficiente angolare dell’eventuale asintoto) per $x\to +\infty$ . Abbiamo già detto che:

G'(x) $= 2e2xsen2(2x)$ e questa funzione, per $x\to +\infty$ , non ammette limite, essendo:

$0 \le 2e2xsen2(2x) \le 2e2x$

Americhe 2016 - Problema $1$

(la funzione si annulla infinite volte ma oscilla tra $0$ e valori sempre più grandi; per farsi
un’idea si può osservare l’andamento della funzione $ex sen2(x)$ indicato
precedentemente).
Quindi: per $x\to +\infty$ non ci sono asintoti.
Vediamo ora cosa succede se $x\to -\infty$ . Come già detto risulta $0 \le ex sen2(x) \le ex$
Quindi se $x\to -\infty$ l’area compresa fra il grafico di g(x) $= ex sen2(x)$ e l’asse $x$ fino $ad$
$x=0$ è inferiore all’area fra il grafico di $y= ex$ e l’asse $x$ da $-\infty$ fino a zero; valutiamo
quest’ultima area calcolando il seguente integrale:

$$ \int $$
$et dt$
$-\infty$
$= lima\to -\infty \int et dt$
$$ 0 a $$
= lim
$a\to -\infty$ [et]a
$0 =$ lim
$a\to -\infty (1 -ea) = 1 -0 = 1.$

Pertanto l’area compresa fra il grafico di g(x) $= ex sen2(x)$ e l’asse $x$ da $-\infty$ a $0$ è un
numero $k$ positivo ma inferiore $ad 1.$ Pertanto, se $x\to -\infty$ , G(x) $\to -k,$ con $0 < k< 1:$
quindi abbiamo l’asintoto orizzontale $y= -k,$ con $0 < k< 1,$ se $x\to -\infty$

Individua i punti stazionari della funzione G(x), riconoscendone la tipologia, e i punti di
flesso. Disegna quindi il grafico della funzione, motivando le scelte fatte.

I punti stazionari sono quelli in cui si annulla la derivata prima (punti a tangente
orizzontale), quindi si ricavano risolvendo la seguente equazione:

G'(x) $= 2e2xsen2(2x) = 0 \Rightarrow sen2(2x) = 0, 2x= k\pi$ ,
$x= k\pi$
$2$ con $k\in Z$ .

Notiamo che G'(x) $= 2e2xsen2(2x) \ge 0$ per ogni $x,$ quindi G(x) è sempre crescente:
i punti stazionari sono tutti punti di flesso a tangente orizzontale.

Cerchiamo i punti di flesso.

G''(x) $= 4e2x sen2(2x) + 2e2x(2sen(2x)(cos(2x)) ∙2 =$

$= 4e2x[sen2(2x) + 2sen(2x)cos (2x)] \ge 0$ se $sen2(2x) + 2sen(2x) cos(2x) \ge 0$

$sen(2x)(sen(2x) + 2 cos(2x)) \ge 0$

Studiamo il segno dei due fattori del prodotto:

$sen(2x) \ge 0$ se $2k\pi \le 2x\le \pi + 2k\pi$ da cui $k\pi \le x\le$
$\pi$
$2+ k\pi$ , con $k\in Z$

$sen(2x) + 2cos(2x) \ge 0$ ,
$2sen(x)$ cos(x) $+ 2 cos2(x) -2sen2(x) \ge 0$ ,

se cos(x) $= 0$ abbiamo $-2sen2(x) \ge 0, -2 \ge 0$ mai

(osserviamo che se $cos(x)=0$ allora sen(x) $= \pm 1$ )

Se cos(x) $\ne 0$ dividendo la $2sen(x)$ cos(x) $+ 2 cos2(x) -2sen2(x) \ge 0$ per $cos2 x$

Americhe 2016 - Problema $1$

otteniamo:
$2tg(x) + 2-2tg2(x) \ge 0 , tg2(x) -tg(x) -1 \le 0 , 1-\sqrt{5}$
$\le$ tg(x) $\le 1+ \sqrt{5}$

Risolviamo graficamente la disequazione

$sen(2x)(sen(2x) + 2 cos(2x)) \ge 0$

nell’intervallo $[0; 2\pi$ ] dopo aver osservato che:
$1-\sqrt{5}$
$\cong -0.62,$
$$ 1+\sqrt{5} 2 $$
$\cong 1.62$

Nel grafico sono marcati i tratti in cui il primo ed il secondo fattore sono positivi:

La disequazione è verificata dove i due fattori sono entrambi $positivi/nulli$ o entrambi
$negativi/nulli,$ quindi negli intervalli:

$2k\pi \le x\le 1.02 + 2k\pi$ ,
$\pi$
$2 + 2k\pi \le x\le 2.59 + 2k\pi$ ,
$\pi + 2k\pi \le x\le 4.16 + 2k\pi$ ,
$2 \pi + 2k\pi \le x\le 5.73 + 2k\pi (k$ è intero relativo).

(ricordiamo che in $x=$
$\pi$
$2 + k\pi sen(2x)(sen(2x) + 2 cos(2x)) = 0$ ).

In tali intervalli risulta G''(x) $\ge 0,$ quindi $G$ ha dei flessi nei punti:

$x= 2k\pi$ ,
$x= 1.02 + 2k\pi , x= 2.59 + 2k\pi$ ,
$x= \pi + 2k\pi$ ,
$x= 4.16 + 2k\pi$ ,

$x= 5.73 + 2k\pi$ ed anche in $x=$
$\pi$
$2 + k\pi$ .

Notiamo che
$1.02 =$ arctg(
$$ 1+\sqrt{5 $$
$2 ) = \alpha , 2.59 =$ arctg(
$1-\sqrt{5}$
$2 ) = \beta , 4.16 = \pi + \alpha , 5.73 = \pi + \beta$

Ricordiamo anche che per $x=$
$k\pi$
$2$ con $k\in Z G$ ha dei flessi a tangente orizzontale.

Americhe 2016 - Problema $1$

Grafico qualitativo di $G:$

Altro grafico di $G$ con evidenziato l’asintoto orizzontale.

Altro grafico di $G$ dove si vedono più flessi per $x>0:$

Notiamo che, anche se non richiesto, la funzione $G$ ha la seguente equazione (che si può
ottenere calcolando per parti l’integrale che definisce $G):$

Americhe 2016 - Problema $1$

Studia l'andamento dei coefficienti angolari delle rette tangenti alla funzione G(x) nei suoi
punti di flesso a tangente obliqua, determinando in particolare se tali rette formano un
fascio di rette parallele.

I punti di flesso a tangente obliqua sono:

$x= 1.02 + 2k\pi = \alpha + 2k\pi$ ,
$x= 2.59 + 2k\pi = \beta + 2k\pi$ ,
$x= 4.16 + 2k\pi = \pi + \alpha + 2k\pi = \alpha + (2k+ 1)\pi$ ,
$x= 5.73 + 2k\pi = \pi + \beta + 2k\pi = \beta + (2k+ 1)\pi$

che si possono riassumere in: $x= \alpha + k\pi$ e $x= \beta + k\pi$ (flessi a tangente obliqua).

Ricordiamo che G'(x) $= 2e2xsen2(2x)$ .

Ricordiamo la seguente formula goniometrica: $sen(2x) =$
$2tg(x)$
$1+tg2(x);$ quindi si ha:
$x= \alpha + k\pi$ risulta: $sen(2\alpha ) =$
$2tg(\alpha$ )
$1+tg2(\alpha ) =$
$2∙1+\sqrt{5}$
$$ 2 1+(1+\sqrt{5} 2 ) 2 = 2\sqrt{5} 5 $$
$x= \beta + k\pi$ risulta: $sen(2\beta ) =$
$2tg(\beta$ )
$1+tg2(\beta ) =$
$2∙1-\sqrt{5}$
$1+(1-\sqrt{5}$
$2 = -$
$$ 2\sqrt{5} 5 $$
Studiamo il coefficiente angolare nei punti di flesso $x= \alpha + k\pi$ è quindi:
$G'(\alpha + k\pi ) = 2e^{2}(\alpha +k\pi ) (2\sqrt{5}$
$$ 5 ) 2 = 8 $$
$5 e^{2}(\alpha +k\pi ) = (8$
$5 e^{2}\alpha ) e2k\pi$
Se $k\to +\infty$ , (
$5 e^{2}\alpha ) e2k\pi \to +\infty$
Se $k\to -\infty$ , (
$5 e^{2}\alpha ) e2k\pi \to 0+$

I coefficienti angolari nei punti di flesso $x= \alpha + k\pi$ variano al variare di $k,$ quindi le
tangenti inflessionali non formano un fascio di rette parallele.

Studiamo il coefficiente angolare nei punti di flesso $x= \beta + k\pi$ è quindi:
$G'(\beta + k\pi ) = 2e^{2}(\beta +k\pi ) (-2\sqrt{5}$
$$ 5 ) 2 = 8 $$
$5 e^{2}(\beta +k\pi ) = (8$
$5 e^{2}\beta ) e2k\pi$
Se $k\to +\infty$ , (
$5 e^{2}\beta ) e2k\pi \to +\infty$
Se $k\to -\infty$ , (
$5 e^{2}\beta ) e2k\pi \to 0+$

I coefficienti angolari nei punti di flesso $x= \beta + k\pi$ variano al variare di $k,$ quindi le
tangenti inflessionali non formano un fascio di rette parallele.

Americhe 2016 - Problema $1$

Appendice a punto $4$

I flessi a tangente obliqua si possono esprimere in forma più compatta osservando che la
derivata seconda si annulla quando:

$sen(2x)(sen(2x) + 2 cos(2x)) = 0,$
$sen2(2x) + 2sen(2x) cos(2x) = 0$
che si può scrivere, ponendo $cos(2x) \ne 0$ ( quando $cos(2x) = 0$ la derivata seconda non
si annulla) e dividendo per $cos2(2x),$ nella forma:

$tg2(2x) + 2tg(2x) = 0$ che ha come soluzioni:

$tg(2x) = 0,$ da cui $x=$
$k\pi$
$2$ (flessi a tangente orizzontale)
$tg(2x) = -2$ , da cui $2x= arctg(-2) + k\pi , x= -$
$2 arctg(2) +$
$k\pi$

I punti di flesso a tangente obliqua si possono quindi raggruppare nella forma:

$x= -1$
$2 arctg(2) + k\pi$

$$ Da $$

G'(x) $= 2e2xsen2(2x)$

otteniamo ora in modo più compatto il coefficiente angolare delle tangenti nei punti di
flesso a tangente obliqua, ricordando che (come visto precedentemente) $sen(2x) = \pm$
$$ 2\sqrt{5} 5 , $$
quindi $sen2(2x) =$
$$ 4 5 : $$

G'(x) $= 8$
$5 ∙e-arctg(2)+k\pi$

I coefficienti angolari nei punti di flesso a tangente obliqua variano al variare di $k,$ quindi
le tangenti inflessionali non formano un fascio di rette parallele.

Con la collaborazione di Angela Santamaria
