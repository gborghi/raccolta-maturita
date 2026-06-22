---
tipo: soluzione
prova_stem: 2016_suppletiva_2016_problema1_181
pdf: Prova_Maturita_2016.pdf
source: text
title: 2016 Suppletiva — Problema 1 — Svolgimento
---


Suppletiva 2016 - Problema $1$

SESSIONE SUPPLETIVA - 2016

PROBLEMA $1$

Sei l’amministratore di un condominio che ha deliberato di dotarsi di una sala per le
riunioni condominiali, sfruttando uno spazio comune già disponibile, da coprire e
attrezzare.

La superficie individuata è rappresentata in figura $1:$

La superficie viene chiusa con pareti laterali alte $3,60$ metri e con un tetto piano e
orizzontale. Uno dei condomini $ti fa$ presente la necessità di prevedere un impianto di
aerazione nella sala, in quanto la mancanza di un adeguato ricambio d’aria in locali chiusi
può provocare una serie di disturbi fisici, a causa dell’accumulo di $CO2$ (anidride
carbonica o diossido di carbonio). Di norma si considera come valore limite della
concentrazione di $CO2$ lo $0,15%:$ su $1$ milione di particelle d'aria il massimo numero di
molecole di $CO2$ deve essere dunque 1500.

Nella scelta dell’impianto di aerazione un parametro fondamentale è la potenza in
kilowatt, che dipende dal volume dell’ambiente in cui esso viene utilizzato.

La seguente scheda tecnica, fornita dal produttore, $fa$ riferimento alle comuni esigenze di
utilizzo:

Suppletiva 2016 - Problema $1$

In base $ai$ dati disponibili e alla scheda tecnica, stima la potenza in kilowatt necessaria,
giustificando la tua scelta.

Dobbiamo calcolare il volume del locale, che può essere considerato un cilindro con area
di base pari all’area della superficie della sala e altezza $h= 3.60 m.$

L’arco $AB fa$ parte della parabola tangente all’asse delle $x$ in $B=(2; 0)$ e passante per
$A=(0; 5);$ essa ha equazione del tipo: $y= a(x-2)^{2}$ ed imponendo il passaggio per A
otteniamo $5 = 4a, a=$
$4$ . La parabola ha quindi equazione:
$y= 5$
$4 (x-2)^{2}$

L’area della superficie del locale è data dall’area della metà del segmento parabolico
ABE e quella del trapezio rettangolo con basi $BC$ e $DE$ ed altezza $BE.$
Per il teorema di Archimede l’area del segmento parabolico è uguale a:

Area(ABFE) =
$3 ∙AF∙BE=$
$$ 2 3 (4)(5) = 40 $$
$3 m^{2}$ .

Suppletiva 2016 - Problema $1$

L’area del trapezio è data da:
Area(BCDE) =
$(7 + 5) ∙5$
$= 30 m^{2}$
La superficie della sala è pari quindi a:
S(sala) = Area(ABE) + Area(BCDE) $= (20$
$3 + 30) m^{2} = 110$
$3 m^{2} \cong 36.67 m^{2}$
Il volume della sala è quindi dato da:
Volume(sala) = Area(base) $∙altezza= 110$
$3 ∙3.60 m^{3} = 132 m^{3}$

In base alla scheda tecnica fornita, che prevede $4.4 kW$ per $135$ metri cubi da aerare,
possiamo affermare che la potenza in kilowatt necessaria è stimabile in poco meno di $4.4$
$kW.$

Mostriamo, anche se non esplicitamente richiesta, la retta di regressione relativa $ai$ dati
forniti, in cui la stima della potenza richiesta risulta essere di $4.19 kW.$

Ricordiamo che i coefficienti $m$ e $q$ della retta di regressione $y= mx+ q$ , ottenuta
mediante il cosiddetto metodo dei “minimi quadrati” si ottengono mediante le formule
seguenti, in cui x̅ è la media aritmetica delle $x,$ y̅ la media aritmetica delle $y, n$ è il numero
dei punti e $(xi; yi)$ sono le coordinate dei punti dati:

${m= \sum$
$(xi-x̅)(yi-y̅)$
$i=1$
$$ \sum $$
$(xi-x̅)^{2}$
$i=1$
$q=$ y̅ $-mx̅$

Per brevità non riportiamo i calcoli (piuttosto lunghi) che portano a determinare $m$ e $q,$
che risultano rispettivamente: $m= 0.02, q= 1.13$ . La retta di regressione ha quindi
equazione: $y= 0. 02 x+ 1. 13.$ Sostituendo in questa equazione il volume $x= 132$ metri
cubi del locale da aerare otteniamo la stima della potenza richiesta $y= 4. 19 kW.$

Suppletiva 2016 - Problema $1$

In occasione di una riunione di condominio, un rilevatore di $CO2$ installato nella sala indica
una concentrazione dello $0,3%;$ i condomini chiedono quindi di accendere l’impianto di
aerazione, in modo che all’ora di inizio della riunione la concentrazione sia stata ridotta
allo $0,15%.$ Il sistema di aerazione immette nella sala $20$
$$ m^{3 $$
minuto di aria fresca contenente
lo $0,1%$ di $CO2.$

Approssimando il volume della sala a $130 m^{3},$ ricava l’equazione differenziale che
descrive l’andamento della concentrazione c(t) in funzione del tempo $t$ (espresso in
minuti). Verifica inoltre che la funzione c(t) $= k∙e-2$
$13t+ h$ è una soluzione di tale
equazione differenziale.

Detta c(t) la concentrazione di anidride carbonica nella sala al generico istante $t$ e
$h=0.001$ la concentrazione (costante) di anidride carbonica dell’aria immessa
dall’aeratore, per effetto dell’immissione di aria fresca la concentrazione $va$ diminuendo,
pertanto abbiamo una velocità (negativa, poiché la concentrazione $va$ diminuendo) data
da:

c'(t) = dc(t)
$$ dt $$
La concentrazione c(t) all’istante $t$ è data da: c(t) =
$VolumeCO2(t)$
Volumesala(t) =
$VCO2(t)$
Vsala .

Ma risulta (essendo $20 m^{3}$ il volume d’aria ricambiata al minuto):

dc(t) $= c(t+ dt) -c(t) = dVCO2(t)$
Vsala
$= VCO2(immesso) -VCO2(eliminato)$
Vsala
$= h∙20 ∙dt-c(t) ∙20$ ∙dt
Vsala

Quindi:

c'(t) = dc(t)
$$ dt = $$
$h∙20 dt-c(t) ∙20 dt$
$$ 130 dt $$
$= -20$
$130$ (c(t) $-h)) = -2$
$13$ (c(t) $-h))$

Osserviamo che c'(t) $= 0$ quando c(t) $= h$ , che avviene per $t$ che tende all’infinito:
arriviamo al completo ricambio dell’aria della sala.

L’equazione differenziale che descrive l’andamento della concentrazione c(t) in funzione
del tempo $t$ (in minuti) è quindi:
c'(t) $= -2$
$13$ (c(t) $-h)$

Verifichiamo, come richiesto, che la funzione c(t) $= k∙e-2$
$13t+ h$ è una soluzione di tale
equazione differenziale. La derivata di tale funzione è:
c'(t) = -
$13 k∙e-2$
$13t$ ; ma c(t) $= k∙e-2$
$13t+ h$ , quindi $k∙e-2$
$13t=$ c(t) $-h,$ pertanto:

Suppletiva 2016 - Problema $1$

c'(t) = -
$13 k∙e-2$
$13t = -$
$13$ (c(t) $-h)$ che è l’equazione differenziale trovata.

Abbiamo quindi verificato che la funzione c(t) $= k∙e-2$
$13t+ h$ è una soluzione
dell’equazione differenziale c'(t) = -
$13$ (c(t) $-h)$

Risolviamo l’equazione differenziale:

$$ dc $$
c(t) $-h= -2$
$13 dt , ln|c(t) -h| = -2$
$13 t+$ a , $|c(t) -h| = e-2$
$13t+a= ea∙e-2$
$13t$

c(t) $= \pm ea∙e-2$
$13t+ h= k∙e-2$
$13t+ h,$ c(t) $= k∙e-2$
$13t+ h$ (abbiamo posto $k= \pm ea$ e
quindi $k$ può essere positivo o negativo).
Quindi:
c(t) $= k∙e-2$
$13t+ h$ c.v.d.

Determina i valori da assegnare alle costanti $k$ e $h$ in modo che la funzione c(t)
rappresenti l’andamento della concentrazione di $CO2$ a partire dall’istante $t= 0$ di
accensione dell’aeratore. Stabilisci quindi quanto tempo prima dell’inizio della riunione
esso deve essere acceso, per soddisfare la richiesta dei condomini.

In base alle informazioni fornite, per $t=0$ la concentrazione è pari a $0.3%,$ quindi se $t =0$
deve risultare c(t) $= 0.003,$ pertanto, avendo già detto che $h=0.001:$
$0.003 = k+ h,$
$k= 0.003 -0.001 = 0.002$ .

Risulta perciò:
c(t) $= 0.002 ∙e-2$
$13t+ 0.001$

Il grafico di questa funzione si può tracciare facilmente notando che è una funzione
esponenziale che per $t=0$ vale $0.003,$ è sempre decrescente e per $t$ che tende a più
infinito tende a $0.001:$

Suppletiva 2016 - Problema $1$

Dobbiamo ora trovate $t$ in modo che sia c(t) $= 0.15% = 0.0015;$ si ha perciò:

$0.0015 = 0.002 ∙e-2$
$13t+ 0.001,$
$0.002 ∙e-2$
$13t= 0.0005, e-2$
$13t= 0.25$ ,

$-2$
$13 t= ln(0.25) , t= -13$
$2 ∙ln(0.25) \cong 9$ minuti

L’aeratore deve quindi essere acceso circa $9$ minuti prima dell’inizio della riunione.

L’impianto è in funzione da $10$ minuti, quando i $50$ partecipanti alla riunione accedono alla
sala. Considerando che l’impianto rimane acceso anche durante la riunione e che un
essere umano mediamente espira $8 litri/minuto$ di aria contenente il $4%$ di $CO2$ (fonte:
OSHA, Occupational Safety and Health Administration), descrivi in termini qualitativi
come cambierà l’andamento di c(t) dopo l’ingresso dei condomini nella sala,
giustificando la tua risposta.

I $50$ partecipanti immettono nella sala $8x^{50}=400 litri/minuto$ di aria contenente il $4%$ di
$CO2.$ Dopo $10$ minuti di funzionamento dell’aeratore la concentrazione di anidride
carbonica è pari a:

$c(10) = 0.002 ∙e-2$
$13∙10 + 0.001 \cong 0.00143 \cong 0.143$ %

I $50$ condomini immettono aria contenente il $4%$ di $CO2$ alla velocità di:

$$ 400 $$
litri
$minuto= 400$
$$ dm3 $$
$minuto= 0.4$
$$ m^{3 $$
minuto

L’effetto combinato dell’aeratore e dei condomini equivale quindi $ad$ immettere in ogni
minuto $20$ metri cubi di aria con una concentrazione di anidride carbonica allo $0,1%$ e $0.4$
metri cubi con una concentrazione di anidride carbonica al $4$ %. I volumi di anidride
carbonica immessi in un minuto dall’aeratore e dai condomini sono dati da:

$VCO2(aeratore) = 0.001 ∙20 m^{3} = 0.02 m^{3}$

$VCO2(condomini) = 0.04 ∙0.4 m^{3} = 0.016 m^{3}$

Il volume totale di anidride carbonica immessa nella stanza in un minuto è quindi pari a:

$VCO2(aeratore) + VCO2(condomini) = 0.036 m^{3}$

La concentrazione dell’anidride carbonica dell’aria totale immessa è uguale a:

Suppletiva 2016 - Problema $1$

$V(CO2$ immessa in un minuto)
V(aria immessa in un minuto) $= 0.036 m^{3}$
$20.4 m^{3} \cong 0.00176 = 0.176$ %

La funzione che descrive l’andamento della concentrazione di anidride carbonica dopo
l’ingresso dei condomini, ragionando in modo analogo a quello fatto per trovare la
precedente espressione di c(t), è del tipo:

$c^{1}(t) = k^{1} ∙e-20.4$
$130t+ 0.00176$

Per trovare $k^{1}$ osserviamo che deve essere: $c^{1}(10) = c(10) = 0.00143$ quindi:
$0.00143 = k^{1} ∙e-20.4$
$$ 13 + 0.00176, $$
$k^{1} = (0.00143 -0.00176)$ ∙e
$$ 20.4 $$
$13 \cong -0.00158$

L’andamento della concentrazione che prima dell’arrivo dei condomini $(t=10)$ era

c(t) $= 0.002 ∙e-2$
$13t+ 0.001$ diventa (da $t=10$ in poi) $c^{1}(t) = -0.00158 ∙e-20.4$
$130t+ 0.00176$

Possiamo riassumere l’andamento complessivo della concentrazione, da quando è stato
acceso l’aeratore $(t=0),$ nella funzione seguente:

c(t) = {
$0.002 ∙e-2$
$13t+ 0.001,$ se $0 \le t< 10$
$-0.00158 ∙e-20.4$
$130t+ 0.00176,$ se $t\ge 10$

che ha il seguente grafico:

Suppletiva 2016 - Problema $1$

Osserviamo che dopo l’ingresso dei condomini la concentrazione dell’anidride carbonica
comincia a crescere. Il valore limite della concentrazione di $CO2,$ lo $0,15%,$ si ottiene dopo
un numero di minuti $t$ che si trova risolvendo la seguente equazione:

$-0.00158 ∙e-20.4$
$130t+ 0.00176 = 0.0015 , e-20.4$
$130t= 0.00176 -0.0015$
$$ 0.00158 $$
$\cong 0.16456$

-
$$ 20.4 $$
$130 t= ln(0.16456) , t= -$
$$ 130 $$
$20.4 ∙ln(0.16456) \cong 11.499$ minuti

Quindi dopo circa un minuto e mezzo dall’inizio della riunione viene raggiunto il valore
limite della concentrazione $0.15$ % di anidride carbonica, ma la concentrazione rimarrà
comunque inferiore $0.00176,$ cioè allo $0.18$ % circa:

Con la collaborazione di Stefano Scoleri e Angela Santamaria
