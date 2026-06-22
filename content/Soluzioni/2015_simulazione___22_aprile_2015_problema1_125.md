---
tipo: soluzione
prova_stem: 2015_simulazione___22_aprile_2015_problema1_125
pdf: Prova_Maturita_2015.pdf
source: text
title: 2015 SIMULAZIONE - 22 APRILE 2015 — Svolgimento
---


SIMULAZIONE $- 22$ APRILE 2015 - PROBLEMA $1:CURVA$ NORD

Sei il responsabile della gestione del settore “Curva Nord” dell’impianto sportivo della tua
città e devi organizzare tutti i servizi relativi all’ingresso e all’uscita degli spettatori,
nonché alla sicurezza e all’assistenza agli spettatori stessi. La forma del settore sotto la
tua gestione è una porzione di corona circolare come rappresentata in figura $1.$

figura $1$

Tenendo presente che le normative di sicurezza emanate dal Comune prevedono un
indice di affollamento massimo di $3,25 persone/m^{2},$ e che il $9,5%$ della superficie della
“Curva Nord” è inagibile in quanto necessita di lavori di manutenzione,

$1)$ Determina la capienza massima Nmax attuale del settore “Curva Nord”,
approssimata alle centinaia.

Determiniamo l’area effettiva della “curva”, sottraendo al settore circolare $S^{1}$ di raggio $80$
metri e ampiezza $\alpha =$
$3 \pi$ , il settore $S^{2}$ di raggio $50$ metri e uguale ampiezza
Ricordiamo che l’area di un settore circolare di raggio $R$ ed arco di lunghezza $l$ è uguale
a:
A(settore circolare) = l∙R
Se l’ampiezza del settore circolare è uguale $ad \alpha$ radianti, essendo $\alpha =$
$R$ risulta $l= \alpha$ ∙R
Quindi:
A(settore circolare) = l∙R
$$ 2 = 1 $$
$2 \alpha ∙R^{2}$

A(curva) $= S^{1} -S^{2} = 1$
$2 l1R^{1} -1$
$2 l2R^{2} = 1$
$2 (\alpha R^{1})R^{1} -1$
$2 (\alpha R^{2})R^{2} = 1$
$2 \alpha (R^{1}$
$2 -R^{2}$
$$ 2) = = 1 2 (2 $$
$3 \pi ) (802 -502) m^{2} = \pi$
$3 ∙3900 m^{2} =$ 1300 $\pi m^{2} \cong 4084.07 m^{2}$

La parte inagibile, pari al $9.5%$ della superficie della curva è pari a:

A(curva inagibile) $= 9.5$
$100 ∙1300 \pi m^{2} \cong 387.99 m^{2}$

A(curva agibile) = (1300 $\pi -247\pi$
) $m^{2} = 2353\pi$
$m^{2} \cong 3696.08 m^{2}$

Essendo l’indice di affollamento massimo di $3.25 persone/m^{2}$ , la capienza massima Nmax
attuale del settore “Curva Nord”, approssimata alle centinaia è data da:

Nmax $= (3.25 persone/m^{2}) ∙(3696.08 m^{2}) = 12012.26$ persone $\cong 12000$ persone

La Polizia Municipale propone di aprire i cancelli di ingresso un’ora prima dell’inizio della
manifestazione sportiva. È necessario non aprirli con troppo anticipo, per limitare i costi,
ma anche evitare un afflusso troppo intenso, per motivi di sicurezza: la velocità massima
di accesso degli spettatori non deve essere superiore a $350$ ingressi al minuto. In base
alle osservazioni degli anni precedenti, sai che l’andamento del numero di spettatori,
aprendo gli ingressi un’ora prima dell’inizio della manifestazione, segue una curva come
quella riportata in figura $2:$

figura $2$
$2)$ Esprimendo il tempo $t$ in minuti, determina il polinomio p(t) di terzo grado che
meglio riproduce questo andamento, ipotizzando che il numero di spettatori sia $0$
all’apertura dei cancelli di ingresso $(t =0)$ e sia pari al numero massimo consentito
Nmax dopo un’ora $(t =60),$ e che la velocità di accesso sia $0$ al momento
dell’apertura iniziale degli ingressi, e sia ancora $0$ dopo un’ora, quando l’afflusso
termina e il settore è riempito completamente. Verifica che la funzione rispetti il
vincolo di sicurezza sulla massima velocità di accesso degli spettatori nello stadio.

$N=$ p(t) $= at3 + bt2 + ct+ d (t$ in minuti)

Se $t=0, p=0,$ quindi: $d= 0$

Se $t=60, p= Nmax= 12000$ quindi: $12000 = 216000a+ 3600b+ 60c$ da cui:

$200 = 3600a+ 60b+ c$

La velocità di accesso è data dalla derivata prima di p(t):

v(t) = p'(t) =
$$ dp $$
$dt=$
$dt(at3 + bt2 + ct+ d) = 3at2 + 2bt+ c$

Deve essere:

$v(0) = 0$ da cui $c= 0$ e

$v(60) = 0$ da cui $10800a+ 120b= 0$ che equivale a $90 a+ b= 0$

Quindi, per trovare a e $b:$

${200 = 3600a+ 60b+ c$
$90 a+ b= 0$
${200 = 3600a-5400a$
$b= -90a$
${a= -1$
$b= 10$

Quindi:
$N=$ p(t) $= -1$
$9 t^{3} + 10t^{2}$

La velocità di accesso è quindi: $v=$ v(t) = p'(t) = -
$3 t^{2} + 20t$
Tale funzione ha per grafico la seguente parabola:

Il massimo della velocità (ottenuto in
corrispondenza di $t=30)$ è pari a $300,$ che è
inferiore al massimo consentito pari a $350$
ingressi al minuto.

Quindi è verificato il vincolo di sicurezza sulla
massima velocità di accesso degli spettatori nello
stadio.

Al termine della manifestazione gli spettatori defluiscono dall’impianto; in base alle
osservazioni degli anni scorsi ogni minuto esce dall’impianto il $5%$ degli spettatori
presenti all’interno nel minuto precedente.

$3)$ Determina la funzione che meglio rappresenta il deflusso degli spettatori, e,
indicando con $t=0$ l’apertura dei cancelli e $tc$ (da determinare) l’istante in cui,
durante il deflusso, nell’impianto restano meno di $100$ spettatori, disegna il grafico
della funzione che rappresenta il numero di spettatori presenti nell’impianto
nell’intervallo $[0;$ tc]; ipotizza che l’impianto sia riempito alla massima capienza e
che la manifestazione sportiva duri un’ora. Determina inoltre la massima velocità
di deflusso degli spettatori dall’impianto.

Se $t=0$ (istante in cui si aprono i cancelli al termine della manifestazione) risulta $N=12000;$
se $t=1$ si ha $N=$
$$ 95 $$
$100 ∙12000 = 11400;$ all’istante generico $t$ il numero $N$ degli spettatori
presenti nell’impianto è dato da:

$N=$ N(t) $= 0.95 ∙N(t-1)$ da cui:

N(t)
$N(t-1) = 0.95$ , quindi N(t) è il termine generico di una progressione geometrica di
ragione $q=0.95$ e primo termine $N(0) = 12000.$ Pertanto:

N(t) $= N(0) ∙0.95t= 12000 ∙0.95t.$

Risulta N(t) $= 12000 ∙0.95t< 100$ se $0.95t<$
$120$ da cui $t∙ln(0.95) < ln$ (
$$ 1 120) $$
Quindi: $t>$
$ln ( 1$
$$ 120) $$
$ln(0.95) \cong 93.3$ per cui $tc\cong 94$ minuti , cioè dopo $94$ minuti dall’apertura dei
cancelli di uscita nell’impianto rimangono meno di $100$ spettatori.

La funzione che meglio rappresenta il deflusso degli spettatori è:
N(t) $= 12000 ∙0.95t$ che ha il seguente grafico:

Determiniamo la massima velocità di deflusso degli spettatori dall’impianto.

N(t) $= 12000 ∙0.95t$

velocità di $deflusso=$ v(t) $= dN$
$dt= 12000$ ∙ln $(0.95) ∙0.95t$

Il massimo di questa funzione, in valore assoluto, si ottiene per $t=0$ e vale:

$vmax= |12000$ ∙ln $(0.95)| \cong 616 spettatori/minuto$

Quindi la massima velocità di deflusso è di circa $616$ spettatori al minuto, ottenuta
all’inizio del deflusso $(t=0$ minuti).

Devi organizzare i servizi di assistenza e ristoro per gli spettatori, sulla base del numero
medio di presenze nell’impianto

$4)$ Determina il numero medio di spettatori presenti nell’impianto, nell’intervallo di
tempo dall’istante $t = 0$ (apertura dei cancelli) all’istante $t = tc$ .

Dobbiamo distinguere $3$ fasi

Prima fase: fase d’ingresso, che dura un’ora.
In questa fase il numero di spettatori presenti è rappresentato dalla funzione trovata nel
punto $2,$ cioè:

N(t) = -
$9 t^{3} + 10t^{2}$ , per $0 \le t\le 60 (t$ è espresso in minuti)

Seconda fase: svolgimento della manifestazione sportiva, che dura un’ora.
In questa fase il numero degli spettatori è costante e pari a $12000:$

N(t) $= 12000$ , per $60 \le t\le 120 (t$ è espresso in minuti)

Terza fase: fase di deflusso, fino all’istante $tC$ , quando nell’impianto rimangono meno di
$100$ spettatori; tale fase, come visto, dura circa $94$ minuti. La funzione rappresentativa è:

N(t) $= 12000 ∙0.95t-120$ , per $120 \le t\le 214 (t$ è espresso in minuti)

Il numero medio di spettatori presenti nell’impianto nell’intervallo $0 \le t\le 214$ si ottiene
attraverso il teorema della media. Quindi:

$Nmedio=$
$214 -0 ∙\int$
$N(t)dt=$
$$ 214 0 $$

$214 ∙[\int$
$(-1$
$9 t^{3} + 10t^{2}) dt+$
$$ 60 0 \int $$
$12000 dt+$
$$ 120 60 \int $$
$12000 ∙0.95t-120 dt$
$$ 214 120 ] = $$

$214 ∙{[-1$
$36 t^{4} + 10$
$3 t^{3}]$
$$ 0 60 $$
$+ [12000 t]60$
$$ 120 + [ 12000 $$
$0.95120$ ∙
$0.95t$
$ln(0.95)]$
$$ 120 214 } = $$

$214 {360000 + 720000 + 232064} \cong$ 6131

Il numero medio spettatori presenti nell’impianto dall’inizio dell’ingresso fino al minuto
$214,$ quando nell’impianto ci sono meno di $100$ persone, è circa 6131.

Rappresentiamo graficamente la funzione nelle tre fasi:

Con la collaborazione di Angela Santamaria, Simona Scoleri e Stefano Scoleri
