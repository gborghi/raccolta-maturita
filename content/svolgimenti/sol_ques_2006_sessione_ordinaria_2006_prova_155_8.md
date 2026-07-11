

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_8|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 8]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Un tiratore spara ripetutamente a un bersaglio; la probabilità di colpirlo è $0{,}3$ a ogni tiro. Determinare il numero minimo di tiri necessario affinché la probabilità di colpire il bersaglio **almeno una volta** sia $\geq 0{,}99$.

## Impostazione

Si assume che i tiri siano tra loro indipendenti e che la probabilità di colpire il bersaglio sia costante e pari a $p = 0{,}3$ a ogni tiro; di conseguenza la probabilità di mancarlo in un singolo tiro è

$$q = 1 - p = 0{,}7.$$

Conviene passare all'**evento complementare**. L'evento "colpire almeno una volta in $n$ tiri" è il contrario dell'evento "mancare il bersaglio in tutti gli $n$ tiri". Per l'indipendenza dei tiri, la probabilità di mancare sempre è il prodotto delle singole probabilità:

$$P(\text{nessun colpo in } n \text{ tiri}) = q^{\,n} = (0{,}7)^{n}.$$

Quindi la probabilità di colpire il bersaglio almeno una volta è

$$P_n = 1 - (0{,}7)^{n}.$$

## Impostazione della disequazione

Si richiede $P_n \geq 0{,}99$:

$$1 - (0{,}7)^{n} \geq 0{,}99 \quad\Rightarrow\quad (0{,}7)^{n} \leq 0{,}01.$$

## Risoluzione

Applicando il logaritmo naturale a entrambi i membri (funzione crescente) e ricordando che $\ln(0{,}7) < 0$, il verso della disequazione si inverte quando si divide per esso:

$$n \,\ln(0{,}7) \leq \ln(0{,}01) \quad\Rightarrow\quad n \geq \frac{\ln(0{,}01)}{\ln(0{,}7)}.$$

Numericamente:

$$\frac{\ln(0{,}01)}{\ln(0{,}7)} = \frac{-4{,}6052}{-0{,}3567} \approx 12{,}91.$$

Poiché $n$ deve essere un numero intero e la disequazione richiede $n \geq 12{,}91$, il più piccolo valore ammissibile è

$$n = 13.$$

## Verifica

Con $n = 13$:

$$(0{,}7)^{13} \approx 0{,}0097 \leq 0{,}01, \qquad P_{13} = 1 - 0{,}0097 \approx 0{,}990 \geq 0{,}99.$$

Con $n = 12$, invece:

$$(0{,}7)^{12} \approx 0{,}0138 > 0{,}01, \qquad P_{12} \approx 0{,}986 < 0{,}99,$$

che non soddisfa la richiesta. Il tiratore deve quindi effettuare **almeno $13$ tiri**.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
