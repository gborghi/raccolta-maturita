

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_3|2009 Sessione Ordinaria PNI — Prova — Quesito 3]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

Una moneta da $2$ euro, di diametro $d = 25{,}75\ \text{mm}$, viene lanciata su un pavimento ricoperto di mattonelle quadrate di lato $L = 10\ \text{cm}$. Si calcoli la probabilità che la moneta finisca **internamente** a una mattonella, cioè che non tagli alcun lato dei quadrati.

## Impostazione del modello

Conviene lavorare uniformando le unità di misura. Il diametro della moneta è
$$
d = 25{,}75\ \text{mm} = 2{,}575\ \text{cm},
$$
quindi il raggio vale $r = \dfrac{d}{2} = 1{,}2875\ \text{cm}$, mentre il lato della mattonella è $L = 10\ \text{cm}$.

La posizione della moneta sul pavimento è individuata dalla posizione del suo **centro** $C$. Poiché il lancio è casuale e le mattonelle si ripetono in modo periodico, possiamo supporre che $C$ cada con distribuzione uniforme all'interno di una singola mattonella: tutti i punti del quadrato sono equiprobabili. Ci si riconduce così a un problema di **probabilità geometrica**, in cui la probabilità è il rapporto tra la misura dell'insieme dei casi favorevoli e la misura dell'insieme di tutti i casi possibili (le aree).

## Condizione geometrica favorevole

La moneta è tutta interna alla mattonella (non taglia nessun lato) se e solo se la distanza del centro $C$ da ciascuno dei quattro lati del quadrato è almeno pari al raggio $r$. Questo significa che $C$ deve cadere nel quadrato "ridotto" concentrico, ottenuto arretrando di $r$ da ogni lato: un quadrato di lato
$$
L - 2r = L - d = 10 - 2{,}575 = 7{,}425\ \text{cm}.
$$

Nella figura, il quadrato esterno è la mattonella (regione di tutte le posizioni possibili del centro), il quadrato tratteggiato è la regione dei centri favorevoli; la moneta disegnata ha il centro proprio sul bordo di tale regione ed è quindi tangente a un lato (caso limite).



## Calcolo della probabilità

L'area dei casi possibili è quella dell'intera mattonella, $L^2$; l'area dei casi favorevoli è quella del quadrato interno, $(L-d)^2$. Dunque
$$
P = \frac{(L-d)^2}{L^2} = \left(\frac{L-d}{L}\right)^2 = \left(\frac{7{,}425}{10}\right)^2 = 0{,}7425^2 .
$$

Svolgendo il quadrato:
$$
P = \frac{55{,}130625}{100} = 0{,}55130625 \approx 0{,}551 .
$$

La probabilità richiesta è quindi
$$
P \approx 0{,}55 = 55\% .
$$

Circa il $55\%$ delle volte la moneta cade interamente all'interno di una mattonella, senza tagliarne i lati.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
