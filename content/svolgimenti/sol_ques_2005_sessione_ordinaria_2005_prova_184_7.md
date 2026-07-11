

**Quesito:** [[Quesiti/ques_2005_sessione_ordinaria_2005_prova_184_7|2005 Ordinaria PNI — Prova — Quesito 7]] · **Prova:** [[Prove/2005_sessione_ordinaria_2005_prova_184|2005 Ordinaria PNI — Prova]]

Si chiede di definire il fattoriale $n!$, di illustrarne il significato nel calcolo combinatorio e di spiegarne il legame con i coefficienti binomiali.

## a) Definizione di $n!$ e suo significato combinatorio

Dato un numero naturale $n$, si chiama **fattoriale di $n$** il prodotto di tutti gli interi positivi da $1$ fino a $n$:

$$n! = n \cdot (n-1) \cdot (n-2) \cdots 2 \cdot 1.$$

Si pone inoltre, per convenzione,

$$0! = 1, \qquad 1! = 1.$$

Vale la comoda relazione ricorsiva $n! = n \cdot (n-1)!$.

Nel calcolo combinatorio $n!$ rappresenta il **numero delle permutazioni** di $n$ oggetti distinti, cioè il numero dei modi in cui si possono ordinare $n$ oggetti diversi in fila. Infatti il primo posto può essere occupato in $n$ modi, il secondo (esaurito il primo) in $n-1$ modi, il terzo in $n-2$ modi, e così via fino all'ultimo posto, che si riempie in un solo modo: per il principio di moltiplicazione il numero totale degli ordinamenti è

$$n \cdot (n-1) \cdot (n-2) \cdots 1 = n!.$$

## b) Legame con i coefficienti binomiali

Il **coefficiente binomiale** $\binom{n}{k}$ (con $0 \le k \le n$) si definisce come

$$\binom{n}{k} = \frac{n!}{k!\,(n-k)!}.$$

Esso conta il numero delle **combinazioni** di $n$ oggetti presi $k$ alla volta, cioè il numero dei sottoinsiemi di $k$ elementi che si possono formare da un insieme di $n$ elementi (senza tener conto dell'ordine).

Il perché di questa formula si comprende passando attraverso le disposizioni. Il numero delle **disposizioni semplici** di $n$ oggetti a gruppi di $k$ (sequenze ordinate di $k$ oggetti distinti scelti tra gli $n$) è

$$D_{n,k} = n \cdot (n-1) \cdots (n-k+1) = \frac{n!}{(n-k)!},$$

per lo stesso principio di moltiplicazione visto sopra. In una disposizione conta l'ordine, in una combinazione no: ogni singolo sottoinsieme di $k$ elementi genera esattamente $k!$ disposizioni diverse, tante quanti sono i modi di ordinare quei $k$ elementi. Perciò, per passare dalle disposizioni alle combinazioni, si deve dividere per $k!$:

$$\binom{n}{k} = \frac{D_{n,k}}{k!} = \frac{n!}{k!\,(n-k)!}.$$

Questo spiega il legame: **il fattoriale conta gli ordinamenti**, e il coefficiente binomiale nasce proprio come rapporto di fattoriali perché elimina, dividendo per $k!$, i conteggi ripetuti dovuti all'ordine.

Da questa definizione discendono le proprietà tipiche dei coefficienti binomiali, ad esempio la simmetria

$$\binom{n}{k} = \binom{n}{n-k},$$

evidente dallo scambio di $k$ con $n-k$ nella formula, e il loro ruolo nello sviluppo della potenza di un binomio (formula di Newton):

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k}\, a^{k}\, b^{\,n-k},$$

in cui $\binom{n}{k}$ conta in quanti modi si può scegliere il fattore $a$ esattamente in $k$ degli $n$ binomiali che si moltiplicano.

*Fonte:* [📄 PDF p.184](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
