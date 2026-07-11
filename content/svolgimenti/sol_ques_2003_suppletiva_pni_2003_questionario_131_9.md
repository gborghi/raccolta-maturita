

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_9|2003 Suppletiva PNI — Questionario — Quesito 9]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Un'urna contiene $30$ palline, di cui $18$ bianche e $12$ nere. Si estraggono a caso, una dopo l'altra, due palline. Si calcoli la probabilità che la seconda pallina estratta sia bianca, sapendo che la prima è bianca e viene rimessa nell'urna (a), è bianca e non viene rimessa nell'urna (b), è messa da parte senza guardarne il colore (c).

Indichiamo con $B_1$ l'evento "la prima pallina estratta è bianca" e con $B_2$ l'evento "la seconda pallina estratta è bianca". In tutti i casi cerchiamo la probabilità condizionata
$$P(B_2 \mid \text{informazione sulla prima estrazione}).$$

## a)

La prima pallina è bianca e viene rimessa nell'urna. Dopo la reimmissione la composizione dell'urna è di nuovo $18$ bianche su $30$ palline totali, identica a quella iniziale. L'esito della seconda estrazione è quindi indipendente da quello della prima:
$$P(B_2 \mid B_1) = \frac{18}{30} = \frac{3}{5}.$$

## b)

La prima pallina è bianca e non viene rimessa nell'urna. Nell'urna restano ora $29$ palline, di cui $17$ bianche (una bianca è stata tolta). Quindi
$$P(B_2 \mid B_1) = \frac{17}{29}.$$

## c)

La prima pallina è messa da parte senza guardarne il colore: non abbiamo alcuna informazione sul suo colore, per cui dobbiamo usare la formula della probabilità totale. La prima pallina estratta può essere bianca, con probabilità $\frac{18}{30}$, oppure nera, con probabilità $\frac{12}{30}$. Nel primo caso restano $17$ bianche su $29$, nel secondo $18$ bianche su $29$:
$$P(B_2) = \frac{18}{30}\cdot\frac{17}{29} + \frac{12}{30}\cdot\frac{18}{29} = \frac{18\cdot 17 + 12\cdot 18}{30\cdot 29} = \frac{18\,(17+12)}{30\cdot 29} = \frac{18\cdot 29}{30\cdot 29} = \frac{18}{30} = \frac{3}{5}.$$

Come era prevedibile, non avendo alcuna informazione sul colore della prima pallina la probabilità che la seconda sia bianca coincide con la probabilità "a priori" $\frac{18}{30} = \frac{3}{5}$.

*Fonte:* [📄 PDF p.136](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
