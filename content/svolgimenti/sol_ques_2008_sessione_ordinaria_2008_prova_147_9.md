

**Quesito:** [[Quesiti/ques_2008_sessione_ordinaria_2008_prova_147_9|2008 Ordinaria — Prova (PNI Informatica) — Quesito 9]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_147|2008 Ordinaria — Prova (PNI Informatica)]]

In una classe di $12$ maschi e $8$ femmine si estrae a caso un gruppo di $8$ studenti. Si vuole la probabilità che nel gruppo vi siano **esattamente** $4$ femmine.

## Impostazione

L'estrazione avviene senza reinserimento e senza tener conto dell'ordine, quindi lo spazio campionario è costituito da tutti i possibili gruppi di $8$ studenti scelti fra i $20$ totali. Il loro numero è

$$\binom{20}{8} = 125\,970 .$$

Tutti questi gruppi sono equiprobabili, dunque applichiamo la definizione classica di probabilità: casi favorevoli su casi possibili.

## Conteggio dei casi favorevoli

Un gruppo favorevole deve contenere esattamente $4$ femmine (scelte fra le $8$ disponibili) e, di conseguenza, $8-4 = 4$ maschi (scelti fra i $12$ disponibili). Le due scelte sono indipendenti, quindi per il principio di moltiplicazione il numero di gruppi favorevoli è

$$\binom{8}{4}\cdot\binom{12}{4} = 70 \cdot 495 = 34\,650 .$$

## Calcolo della probabilità

$$P = \frac{\binom{8}{4}\cdot\binom{12}{4}}{\binom{20}{8}} = \frac{70 \cdot 495}{125\,970} = \frac{34\,650}{125\,970} = \frac{1155}{4199} \approx 0{,}2751 .$$

La probabilità richiesta è quindi

$$P = \frac{1155}{4199} \approx 0{,}275 \qquad (\text{circa } 27{,}5\%).$$

Si tratta di un caso di **distribuzione ipergeometrica**: estraendo $n=8$ elementi da una popolazione di $N=20$ contenente $K=8$ "successi" (le femmine), la probabilità di ottenerne esattamente $k=4$ è

$$P(X=4) = \frac{\dbinom{8}{4}\dbinom{12}{4}}{\dbinom{20}{8}}.$$

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/geometria #cluster/geometria
