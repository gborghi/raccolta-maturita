

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_9|2003 Ordinaria — Prova (Ordinamento) — Quesito 9]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

In una data estrazione di una determinata Ruota del Lotto vengono estratti $5$ numeri distinti su $90$. Una *cinquina* è quindi un insieme (non ordinato) di $5$ numeri scelti tra i $90$. Si chiede quante siano le cinquine che contengono contemporaneamente i numeri $1$ e $90$.

## Impostazione

Poiché in una cinquina l'ordine dei numeri è irrilevante, il numero totale di cinquine possibili è la combinazione semplice

$$\binom{90}{5}.$$

Noi però non le vogliamo tutte: imponiamo che nella cinquina compaiano **obbligatoriamente** i numeri $1$ e $90$.

## Conteggio

Due dei cinque posti della cinquina sono già occupati dai numeri $1$ e $90$. Restano quindi da scegliere i $3$ numeri mancanti tra i $90 - 2 = 88$ numeri diversi da $1$ e da $90$. Trattandosi ancora di una scelta non ordinata e senza ripetizione, il numero cercato è

$$\binom{88}{3}.$$

## Calcolo

$$\binom{88}{3} = \frac{88 \cdot 87 \cdot 86}{3!} = \frac{88 \cdot 87 \cdot 86}{6}.$$

Sviluppando il numeratore:

$$88 \cdot 87 = 7656, \qquad 7656 \cdot 86 = 658416,$$

da cui

$$\binom{88}{3} = \frac{658416}{6} = 109736.$$

## Conclusione

Le possibili cinquine che contengono i numeri $1$ e $90$ sono

$$\binom{88}{3} = 109736.$$

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
