

**Quesito:** [[Quesiti/ques_2003_sessione_ordinaria_2003_211_n_03_prova_12_10|2003 Ordinaria — Prova (Ordinamento) — Quesito 10]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

Si deve stabilire se sia vera o falsa l'affermazione secondo cui il valore dell'espressione
$$\log_2 3 \cdot \log_3 2$$
è uguale a $1$.

## Impostazione

Ricordiamo la **formula del cambiamento di base** dei logaritmi: per ogni base $a>0$, $a\neq 1$, e per ogni argomento $b>0$ si ha
$$\log_a b = \frac{\log_c b}{\log_c a},$$
dove $c$ è una qualunque base ammissibile. Scegliendo, ad esempio, i logaritmi naturali possiamo scrivere entrambi i fattori dell'espressione con la stessa base:
$$\log_2 3 = \frac{\ln 3}{\ln 2}, \qquad \log_3 2 = \frac{\ln 2}{\ln 3}.$$

## Calcolo dell'espressione

Moltiplicando i due fattori si ottiene
$$\log_2 3 \cdot \log_3 2 = \frac{\ln 3}{\ln 2} \cdot \frac{\ln 2}{\ln 3} = 1,$$
poiché i fattori $\ln 2$ e $\ln 3$ si semplificano.

In modo del tutto equivalente, dalla formula del cambiamento di base segue la relazione di reciprocità
$$\log_3 2 = \frac{1}{\log_2 3},$$
da cui
$$\log_2 3 \cdot \log_3 2 = \log_2 3 \cdot \frac{1}{\log_2 3} = 1.$$

## Conclusione

L'affermazione è dunque **vera**: il valore dell'espressione è esattamente $1$. Più in generale, per ogni coppia di basi ammissibili $a,b>0$ (con $a,b\neq 1$) vale
$$\log_a b \cdot \log_b a = 1,$$
cioè $\log_a b$ e $\log_b a$ sono sempre l'uno il reciproco dell'altro.

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
