

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_9|2004 PNI Straordinaria — Questionario — Quesito 9]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

Alla finale dei $200\,\text{m}$ piani partecipano $8$ atleti, fra i quali Antonio e Pietro; sul podio finiscono i primi $3$ classificati e tutti gli atleti hanno le stesse possibilità. Vogliamo la probabilità che: a) sul podio finiscano sia Antonio che Pietro; b) almeno uno dei due finisca sul podio; c) nessuno dei due finisca sul podio.

Poiché gli atleti sono equiprobabili e ci interessa soltanto *quali* tre finiscono sul podio (non l'ordine di arrivo), lo spazio degli eventi elementari è costituito da tutte le terne di atleti scelte tra gli $8$, tutte ugualmente probabili. Il numero di casi possibili è quindi

$$\binom{8}{3} = \frac{8\cdot 7\cdot 6}{3!} = 56.$$

## a) Sul podio sia Antonio che Pietro

I posti sul podio occupati da Antonio e Pietro sono fissati; resta da scegliere il terzo atleta tra i $6$ rimanenti. I casi favorevoli sono dunque

$$\binom{6}{1} = 6.$$

La probabilità richiesta è

$$P(\text{entrambi}) = \frac{6}{56} = \frac{3}{28} \cong 0{,}107.$$

## b) Almeno uno dei due sul podio

Conviene passare per l'evento complementare "nessuno dei due sul podio" (calcolato al punto c). Alternativamente, per il principio di inclusione-esclusione,

$$P(\text{almeno uno}) = P(A) + P(P) - P(\text{entrambi}),$$

dove $P(A) = P(P) = \dfrac{3}{8}$ è la probabilità che un singolo atleta figuri tra i primi tre (occupa uno dei $3$ posti su $8$). Quindi

$$P(\text{almeno uno}) = \frac{3}{8} + \frac{3}{8} - \frac{3}{28} = \frac{3}{4} - \frac{3}{28} = \frac{21 - 3}{28} = \frac{18}{28} = \frac{9}{14} \cong 0{,}643.$$

## c) Nessuno dei due sul podio

Le tre posizioni del podio devono essere occupate solo da atleti diversi da Antonio e Pietro, cioè scelti tra i $6$ rimanenti. I casi favorevoli sono

$$\binom{6}{3} = \frac{6\cdot 5\cdot 4}{3!} = 20,$$

da cui

$$P(\text{nessuno}) = \frac{20}{56} = \frac{5}{14} \cong 0{,}357.$$

Come verifica, gli eventi "almeno uno sul podio" e "nessuno sul podio" sono complementari:

$$P(\text{almeno uno}) + P(\text{nessuno}) = \frac{9}{14} + \frac{5}{14} = 1.$$

*Fonte:* [📄 PDF p.141](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
