

**Problema:** [[Problemi/prob_1999_sessione_suppletiva_pni_1999_problema3_46_1|1999 Suppletiva PNI — Problema 3 — Problema 1]] · **Prova:** [[Prove/1999_sessione_suppletiva_pni_1999_problema3_46|1999 Suppletiva PNI — Problema 3]]

Una ditta dispone di $10$ linee telefoniche. In un istante qualsiasi la probabilità che una data linea sia occupata è $\dfrac{1}{5}$. Determinare il numero medio di linee libere e rispondere ai quesiti seguenti.

Poiché una linea è occupata con probabilità $\dfrac{1}{5}$, essa è **libera** con probabilità
$$
p = 1 - \frac{1}{5} = \frac{4}{5}.
$$

Il numero $X$ di linee libere tra le $10$ segue una distribuzione binomiale di parametri $n = 10$ e $p = \dfrac{4}{5}$. Il suo valore medio è
$$
E[X] = n\,p = 10 \cdot \frac{4}{5} = 8.
$$

Mediamente, quindi, si hanno $8$ linee libere.

## a) Probabilità che tutte le linee siano occupate

Le linee sono indipendenti, ciascuna occupata con probabilità $\dfrac{1}{5}$. La probabilità che **tutte e $10$** siano contemporaneamente occupate è
$$
\left(\frac{1}{5}\right)^{10} = \frac{1}{5^{10}} = \frac{1}{9\,765\,625} \cong 1.02 \cdot 10^{-7}.
$$

## b) Probabilità che almeno una linea sia libera

L'evento "almeno una linea libera" è il complementare di "tutte le linee occupate". Perciò
$$
P(\text{almeno una libera}) = 1 - \left(\frac{1}{5}\right)^{10} = 1 - \frac{1}{9\,765\,625} = \frac{9\,765\,624}{9\,765\,625} \cong 1.00.
$$

## c) Probabilità che almeno una linea sia occupata

L'evento "almeno una linea occupata" è il complementare di "tutte le linee libere". Poiché ciascuna linea è libera con probabilità $\dfrac{4}{5}$, si ha
$$
P(\text{tutte libere}) = \left(\frac{4}{5}\right)^{10} = \frac{4^{10}}{5^{10}} = \frac{1\,048\,576}{9\,765\,625},
$$
e quindi
$$
P(\text{almeno una occupata}) = 1 - \left(\frac{4}{5}\right)^{10} = \frac{9\,765\,625 - 1\,048\,576}{9\,765\,625} = \frac{8\,717\,049}{9\,765\,625} \cong 0.89.
$$

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1H4y-UmLL3W2NEdsnB-vB95M7JHr2jVDs/view)

#maturita/soluzione #area/probabilita_e_combinatoria #cluster/probabilit_e_combinatoria
