

**Quesito:** [[Quesiti/ques_2001_suppletiva_ordinamento_2001_questionario_32_3|2001 Suppletiva Ordinamento — Questionario — Quesito 3]] · **Prova:** [[Prove/2001_suppletiva_ordinamento_2001_questionario_32|2001 Suppletiva Ordinamento — Questionario]]

Si deve stabilire se esiste un numero naturale $n$ per il quale risulti

$$\sum_{k=0}^{n}\binom{n}{k}=1048576.$$

## Calcolo della somma dei coefficienti binomiali

La somma di tutti i coefficienti binomiali di ordine $n$ si ottiene dallo sviluppo della potenza del binomio

$$(a+b)^{n}=\sum_{k=0}^{n}\binom{n}{k}\,a^{\,n-k}\,b^{\,k},$$

ponendo $a=1$ e $b=1$. In tal modo ogni potenza vale $1$ e resta

$$\sum_{k=0}^{n}\binom{n}{k}=\binom{n}{0}+\binom{n}{1}+\cdots+\binom{n}{n}=(1+1)^{n}=2^{n}.$$

## Risoluzione dell'equazione

L'equazione da soddisfare diventa quindi

$$2^{n}=1048576.$$

Scomponendo il secondo membro in potenza di $2$:

$$1048576=2^{20},$$

come si verifica poiché $2^{10}=1024$ e dunque $2^{20}=1024^{2}=1048576$.

Ne segue

$$2^{n}=2^{20}\ \Rightarrow\ n=20.$$

Poiché la funzione $n\mapsto 2^{n}$ è strettamente crescente, la soluzione è unica.

## Conclusione

Il numero naturale richiesto esiste ed è

$$n=20.$$

*Fonte:* [📄 PDF p.34](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
