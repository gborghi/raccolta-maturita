

**Problema:** [[Problemi/prob_2003_pni_2003_sessione_straordinaria_problema2_160_1|2003 PNI Straordinaria — Problema 2 — Problema 1]] · **Prova:** [[Prove/2003_pni_2003_sessione_straordinaria_problema2_160|2003 PNI Straordinaria — Problema 2]]

Un gruppo di persone è costituito da $3$ uomini e dalle rispettive mogli. Ciascun uomo sceglie a caso una fra le $3$ donne, con uguali possibilità di scelta, per un giro di ballo.

## a)

Calcolare quante sono le possibili terne di coppie di ballerini.

Le assegnazioni biettive uomo–donna sono le permutazioni di $3$ elementi:
$$
3! = \boxed{6}
$$
terne possibili.

## b)

Calcolare la probabilità che: (1) nessun uomo balli con la propria moglie; (2) un solo uomo balli con la propria moglie; (3) tutti e tre ballino con le rispettive mogli.

Ragioniamo sulle $6$ permutazioni possibili.

- **(3) tutti con la propria moglie:** un solo caso favorevole, quindi
$$
P = \frac{1}{6}.
$$
- **(1) nessuno con la propria moglie:** le permutazioni senza punti fissi (dismutazioni) di $3$ elementi sono $D_3 = 2$, quindi
$$
P = \frac{2}{6} = \frac{1}{3}.
$$
- **(2) esattamente uno con la propria moglie:** i casi favorevoli sono $6 - 1 - 2 = 3$, quindi
$$
P = \frac{3}{6} = \frac{1}{2}.
$$

## c)

Il gioco viene effettuato per $n$ volte.

### c.1)

Per $n = 24$, con probabilità di successo $p = \dfrac{1}{6}$ (tutti ballano con la propria moglie), il numero medio di successi è
$$
n\,p = 24 \cdot \frac{1}{6} = \boxed{4}.
$$

### c.2)

Per $n = 4$, con probabilità di successo $p = \dfrac{1}{3}$ (nessuno balla con la propria moglie), la probabilità di non più di $2$ successi è, usando la distribuzione binomiale,
$$
P(X \le 2) = \sum_{k=0}^{2} \binom{4}{k}\left(\frac{1}{3}\right)^{k}\left(\frac{2}{3}\right)^{4-k} = \frac{16 + 32 + 24}{81} = \boxed{\frac{72}{81} = \frac{8}{9} \approx 0{,}889.}
$$

### c.3)

Per $n = 60$, con probabilità di successo $p = \dfrac{1}{2}$ (un solo uomo balla con la propria moglie), la probabilità di esattamente $30$ successi è
$$
P(X = 30) = \binom{60}{30}\left(\frac{1}{2}\right)^{60} \approx \boxed{0{,}1026.}
$$

### c.4)

L'evento «almeno un uomo balla con la propria moglie» è il complementare di «nessuno balla con la propria moglie», quindi la sua probabilità è
$$
p = 1 - P(\text{nessuno}) = 1 - \frac{1}{3} = \frac{2}{3}.
$$
Con $n = 15$ e $p = \dfrac{2}{3}$, la probabilità di almeno $14$ successi è
$$
P(X \ge 14) = \binom{15}{14}\left(\frac{2}{3}\right)^{14}\left(\frac{1}{3}\right) + \left(\frac{2}{3}\right)^{15} = \boxed{\approx 0{,}0194.}
$$

*Fonte:* [📄 PDF p.160](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/probabilita_e_combinatoria #cluster/probabilit_e_combinatoria
