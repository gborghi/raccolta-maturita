

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_16_9|2005 Ordinaria — Prova — Quesito 9]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_16|2005 Ordinaria — Prova]]

Si calcoli, senza l'aiuto della calcolatrice, il valore di
$$\operatorname{sen}^2 35^\circ - \operatorname{sen}^2 55^\circ,$$
dove le misure degli angoli sono in gradi sessagesimali.

## Soluzione

Gli angoli $35^\circ$ e $55^\circ$ sono complementari, poiché $35^\circ + 55^\circ = 90^\circ$. Di conseguenza il seno dell'uno è uguale al coseno dell'altro:
$$\operatorname{sen} 55^\circ = \operatorname{sen}(90^\circ - 35^\circ) = \cos 35^\circ.$$

Sostituendo nell'espressione data si ottiene
$$\operatorname{sen}^2 35^\circ - \operatorname{sen}^2 55^\circ = \operatorname{sen}^2 35^\circ - \cos^2 35^\circ = -\left(\cos^2 35^\circ - \operatorname{sen}^2 35^\circ\right).$$

Ricordando la formula di duplicazione del coseno, $\cos^2\alpha - \operatorname{sen}^2\alpha = \cos 2\alpha$, con $\alpha = 35^\circ$ si ha
$$\cos^2 35^\circ - \operatorname{sen}^2 35^\circ = \cos 70^\circ,$$

e quindi
$$\operatorname{sen}^2 35^\circ - \operatorname{sen}^2 55^\circ = -\cos 70^\circ = -\operatorname{sen} 20^\circ \approx -0{,}342.$$

## Verifica

Allo stesso risultato si perviene con la formula di sottrazione dei quadrati dei seni:
$$\operatorname{sen}^2 A - \operatorname{sen}^2 B = \operatorname{sen}(A+B)\,\operatorname{sen}(A-B).$$

Ponendo $A = 35^\circ$ e $B = 55^\circ$:
$$\operatorname{sen}^2 35^\circ - \operatorname{sen}^2 55^\circ = \operatorname{sen}(90^\circ)\,\operatorname{sen}(-20^\circ) = 1 \cdot \left(-\operatorname{sen} 20^\circ\right) = -\operatorname{sen} 20^\circ,$$

in accordo con quanto trovato sopra.

*Fonte:* [📄 PDF p.16](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
