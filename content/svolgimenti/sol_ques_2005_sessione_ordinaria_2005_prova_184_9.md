

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_9|2005 Ordinaria PNI — Prova — Quesito 9]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Lanciando due dadi (non truccati) si vuole studiare l'evento "la somma dei due punteggi vale $10$", prima in un singolo lancio e poi ripetendo il lancio sei volte.

## a) Probabilità di ottenere $10$ con due dadi

Il lancio di due dadi dà $6 \cdot 6 = 36$ esiti equiprobabili. La somma vale $10$ nei casi
$$
(4,6), \quad (5,5), \quad (6,4),
$$
cioè in $3$ casi favorevoli. Quindi
$$
p = P(\text{somma} = 10) = \frac{3}{36} = \frac{1}{12}.
$$

## b) Probabilità di avere esattamente due $10$ in sei lanci

I sei lanci sono prove ripetute indipendenti, ciascuna con probabilità di successo $p = \dfrac{1}{12}$ e di insuccesso $q = 1 - p = \dfrac{11}{12}$. Il numero $X$ di successi segue la distribuzione binomiale, per cui la probabilità di ottenere esattamente $k$ successi in $n = 6$ prove è
$$
P(X = k) = \binom{6}{k}\, p^{k}\, q^{\,6-k}.
$$

Per $k = 2$:
$$
P(X = 2) = \binom{6}{2}\left(\frac{1}{12}\right)^{2}\left(\frac{11}{12}\right)^{4}
= 15 \cdot \frac{1}{144} \cdot \frac{14641}{20736}.
$$

Quindi
$$
P(X = 2) = \frac{15 \cdot 14641}{2985984} = \frac{219615}{2985984} \approx 0{,}0735,
$$
cioè circa il $7{,}35\%$.

## c) Probabilità di avere almeno due $10$ in sei lanci

L'evento "almeno due successi" è il complementare di "zero o un successo":
$$
P(X \ge 2) = 1 - P(X = 0) - P(X = 1).
$$

Si ha
$$
P(X = 0) = \left(\frac{11}{12}\right)^{6} = \frac{1771561}{2985984},
$$
$$
P(X = 1) = \binom{6}{1}\left(\frac{1}{12}\right)\left(\frac{11}{12}\right)^{5}
= 6 \cdot \frac{1}{12} \cdot \frac{161051}{248832} = \frac{966306}{2985984}.
$$

Pertanto
$$
P(X \ge 2) = 1 - \frac{1771561 + 966306}{2985984}
= 1 - \frac{2737867}{2985984} = \frac{248117}{2985984} \approx 0{,}0831,
$$
cioè circa l'$8{,}31\%$.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
