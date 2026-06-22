---
title: 2016 Liceo Scientifico — Problema 1 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2016_liceo_scientifico_2016_problema1_22_1
of_item: prob_2016_liceo_scientifico_2016_problema1_22_1
prova_id: prova_2016_liceo_scientifico_2016_problema1_22
anno: '2016'
pdf: Prova_Maturita_2016.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2016
---

**Problema:** [[Problemi/prob_2016_liceo_scientifico_2016_problema1_22_1|2016 Liceo Scientifico — Problema 1 — Problema 1]] · **Prova:** [[Prove/2016_liceo_scientifico_2016_problema1_22|2016 Liceo Scientifico — Problema 1]]

Liceo Scientifico 2016 - Problema $1$

LICEO SCIENTIFICO 2016 - PROBLEMA $1$

L’amministratore di un piccolo condominio deve installare un nuovo serbatoio per il
gasolio da riscaldamento. Non essendo soddisfatto dei modelli esistenti in commercio, $ti$
incarica di progettarne uno che risponda alle esigenze del condominio.

Figura $1$ Figura $2$

Allo scopo di darti le necessarie informazioni, l’amministratore $ti$ fornisce il disegno in
Figura $1,$ aggiungendo le seguenti indicazioni:
 la lunghezza $L$ del serbatoio deve essere pari a otto metri;
 la larghezza $l$ del serbatoio deve essere pari a due metri;
 l’altezza $h$ del serbatoio deve essere pari a un metro;
 il profilo laterale (Figura $2)$ deve avere un punto angoloso alla sommità, per
evitare l’accumulo di ghiaccio durante i mesi invernali, con un angolo $\theta \ge 10^\circ$ ;
 la capacità del serbatoio deve essere pari $ad$ almeno $13 m^{3},$ in modo da garantire
al condominio il riscaldamento per tutto l’inverno effettuando solo due rifornimenti
di gasolio;
 al centro della parete laterale del serbatoio, lungo l’asse di simmetria (segmento
$AB$ in Figura $2)$ deve essere installato un indicatore graduato che riporti la
percentuale di riempimento $V$ del volume del serbatoio in corrispondenza del
livello $z$ raggiunto in altezza dal gasolio.

Considerando come origine degli assi cartesiani il punto A in Figura $2,$ individua tra le
seguenti famiglie di funzioni quella che meglio può descrivere il profilo laterale del
serbatoio per $x \in [-1; 1], k$ intero positivo, motivando opportunamente la tua scelta:

f(x) $= (1 -|x|)$
$$ 1 k $$

Liceo Scientifico 2016 - Problema $1$

f(x) $= -6|x|3 + 9kx2 -4|x| + 1$

f(x) $= cos(\pi$
$2 xk)$

Osserviamo che la funzione deve avere derivata infinita in $x=1$ (ed anche in $x=-1);$ l’unica
finzione che può soddisfare tale condizione è la prima, la cui derivata è (supponiamo
$x>0):$

f'(x) $= -1$
$k(1 -x)$
$k-1 = -1$
k∙
$(1 -x)1-1$

e, notato che $k>1$ (non può essere $k=1$ altrimenti la funzione sarebbe f(x) $= 1 -|x|$ che
non ha il grafico richiesto), si osserva che in $x=1$ abbiamo derivata infinita.

La funzione che meglio descrive il profilo laterale del serbatoio ha equazione:

f(x) $= (1 -|x|)$
$$ 1 k $$

Determina il valore di $k$ che consente di soddisfare i requisiti richiesti relativamente
all’angolo $\theta$ e al volume del serbatoio.

Osserviamo che deve essere $f+$
$'(0) = tg(-\theta ) \le tg(-10^\circ$ ) quindi:

$-1$
k∙
$(1 -0)^{1}-1$
$= -1$
$k\le -tg(10^\circ ), k\le$
$tg(10^\circ ) , k\le$
$0.18 , k\le 5.7,$
$k\le 5$

Dobbiamo adesso imporre che il volume del serbatoio sia maggiore o uguale a $13 m^{3}.$

Detta A(x) l’area della sezione (profilo laterale), il volume è dato da:

$V= \int$ A(x)dx
$$ L 0 $$
$= \int$ A(x)dx
$$ 8 0 $$
$\ge 13$

Osserviamo che, data la simmetria della sezione:

A(x) $= 2 \int (1 -x)$
$$ 1 k 1 0 $$
$dx= 2 [-(1 -x)$
$k+1$
$k + 1$
$$ ] 0 1 $$
$= -2k$
$1 + k[(1 -x)$
$k+1]$
$$ 0 1 $$
$= -2k$
$1 + k(-1) =$
$2k$
$1 + k$
Quindi:

$\int$ A(x)dx
$$ 8 0 = \int $$
$2k$
$1 +$ kdx
$$ 8 0 = $$
$2k$
$1 + k(8 -0) = 16k$
$1 + k\ge 13,$
$3k\ge 13,$
$k\ge 13$
$3 \cong 4.3$

Liceo Scientifico 2016 - Problema $1$

Ed essendo $k$ intero positivo deve essere $k\ge 5.$

Le due condizioni trovate sono verificate entrambe se $k= 5.$ La funzione richiesta è
quindi:
f(x) $= (1 -|x|)$
$$ 1 5 $$

Il grafico di questa funzione è il seguente:

Al fine di realizzare l’indicatore graduato, determina l’espressione della funzione V(z) che
associa al livello $z$ del gasolio (in metri) la percentuale di riempimento $V$ del volume da
riportare sull’indicatore stesso.

Indichiamo con $z$ l’ordinata del generico punto della curva di equazione
f(x) $= (1 -|x|)$
$5 = z$

Considerando $x>0,$ avremo:

$z^{5} = (1 -x),$ da cui: $x= 1 -z^{5}$ con $0 \le z\le 1$

Detta B(x) la sezione del serbatoio parallela alla base (di forma rettangolare), risulta:

B(x) $= 2x(8) = 16x= 16(1 -z^{5}) =$ B(z) . Il Volume della parte di serbatoio di altezza $z$ è
quindi:
V(z) $= \int$ B(z)dz
$$ z 0 $$
$= \int 16(1 -z^{5})dz$
$$ z 0 $$
$= 16 [z-z^{6}$
$$ 6 ] 0 z $$
$= 16 (z-z^{6}$
$6 ) =$ V(z)
Notiamo che il volume del serbatoio è pari a
$16k$
$1+k$ con $k=5,$ quindi il volume $dl$ serbatoio (in

Liceo Scientifico 2016 - Problema $1$

metri cubi) è pari a:
$$ 80 6 = 40 $$
$3 \cong 13.3 m^{3}$
La percentuale $V$ di riempimento del serbatoio in funzione del livello $z$ del gasolio si
ottiene dalla seguente proporzione:

$100 =$ V(z)
$$ 40 3 $$
, $V= 15$
$2$ V(z) $= 15$
$2 (16z-8$
$3 z^{6}) = V$
Notiamo che se $z= 0.5$ metri, si ha: $V=$
$$ 15 $$
$2 (8 -$
$3$ ∙
$64 ) \cong 59.7$ ; cioè a metà altezza non
abbiamo il $50%$ del serbatoio pieno ma quasi il $60%.$ Vista la forma del serbatoio (più
largo in basso) la cosa era prevedibile: non c’è proporzionalità diretta fra il livello del
serbatoio e la percentuale di gasolio presente nel serbatoio.

Quando consegni il tuo progetto, l’amministratore obietta che essendo il serbatoio alto un
metro, il valore $z$ del livello di gasolio, espresso in centimetri, deve corrispondere alla
percentuale di riempimento: cioè, $ad$ esempio, se il gasolio raggiunge un livello $z$ pari a
$50 cm$ vuol dire che il serbatoio è pieno al $50%;$ invece il tuo indicatore riporta, in
corrispondenza del livello $50 cm,$ una percentuale di riempimento $59,7%.$

Illustra gli argomenti che puoi usare per spiegare all’amministratore che il suo
ragionamento è sbagliato; mostra anche qual è, in termini assoluti, il massimo errore che
si commette usando il livello $z$ come indicatore della percentuale di riempimento, come
da lui suggerito, e qual è il valore di $z$ in corrispondenza del quale esso si verifica.

Abbiamo già spiegato nel punto precedente che non c’è proporzionalità diretta tra la
percentuale di riempimento del serbatoio e l’altezza del livello del gasolio presente nel
serbatoio stesso.

La differenza tra il livello $z$ e la percentuale di riempimento del serbatoio (l’errore che si
commette usando $z$ come indicatore della percentuale di riempimento) è data da:
d(z) $= V-z∙100 =$
$$ 15 $$
$2 (16z-$
$3 z^{6}) -100z= -20z^{6} + 20z$ , con $0 \le z\le 1$
Cerchiamo il massimo di questa funzione:
d'(z) $= -120z^{5} + 20 \ge 0$ se $z\le \sqrt{1}$
$$ 6 5 $$
$\cong 0.699$
La funzione d(z) quindi cresce da $0$ a $0.699$ e decresce da $0.699 ad 1.$ Il massimo errore
si ha quindi per $z\cong 0.7 m\cong 70 cm;$ il massimo errore percentuale che si commette è pari
a circa

$d(0.7) = -20(0.7)^{6} + 20(0.7) \cong 11.65 \cong 12$ %

L’errore percentuale massimo si verifica quando l’altezza $z$ è di circa $0.7$ metri.

Con la collaborazione di Angela Santamaria

*Fonte:* [📄 PDF p.22](https://drive.google.com/file/d/1n2gTKzWAkc1lds8IWiZzygbuYhAllCSd/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
