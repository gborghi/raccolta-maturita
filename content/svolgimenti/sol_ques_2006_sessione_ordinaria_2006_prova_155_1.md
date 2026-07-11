

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_1|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 1]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Sulla prima casella si pone $1$ chicco, sulla seconda $2$, sulla terza $4$ e così via, raddoppiando ogni volta. Il numero di chicchi sulla casella $k$-esima è quindi

$$a_k = 2^{\,k-1}, \qquad k = 1, 2, \dots, 64.$$

I numeri $a_1, a_2, \dots, a_{64}$ formano una progressione geometrica di primo termine $a_1 = 1$ e ragione $q = 2$.

## Numero totale di chicchi

Il numero complessivo di chicchi è la somma dei primi $64$ termini della progressione:

$$N = \sum_{k=1}^{64} 2^{\,k-1} = 1 + 2 + 4 + \cdots + 2^{63}.$$

Usando la formula della somma di una progressione geometrica di ragione $q \neq 1$,

$$\sum_{k=1}^{n} a_1\, q^{\,k-1} = a_1 \cdot \frac{q^{\,n} - 1}{q - 1},$$

con $a_1 = 1$, $q = 2$ e $n = 64$ si ottiene

$$N = \frac{2^{64} - 1}{2 - 1} = 2^{64} - 1 = 18\,446\,744\,073\,709\,551\,615 \approx 1{,}845 \cdot 10^{19}.$$

## Peso della quantità di grano

Poiché $1000$ chicchi pesano circa $38\ \text{g}$, ogni chicco pesa

$$p = \frac{38}{1000}\ \text{g} = 0{,}038\ \text{g}.$$

Il peso totale del grano è dunque

$$P = N \cdot p = (2^{64} - 1)\cdot 0{,}038\ \text{g} \approx 1{,}845 \cdot 10^{19} \cdot 0{,}038\ \text{g} \approx 7{,}01 \cdot 10^{17}\ \text{g}.$$

Ricordando che $1\ \text{t} = 10^{6}\ \text{g}$, si converte in tonnellate:

$$P \approx \frac{7{,}01 \cdot 10^{17}}{10^{6}}\ \text{t} \approx 7{,}01 \cdot 10^{11}\ \text{t}.$$

Il compenso preteso dall'inventore corrisponde quindi a circa $7 \cdot 10^{11}$ tonnellate di grano, cioè all'incirca **$701$ miliardi di tonnellate**: una quantità enorme, di gran lunga superiore all'intera produzione mondiale di grano di molti secoli.

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
