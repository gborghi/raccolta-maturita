

**Quesito:** [[Quesiti/ques_2006_estero_australe_2006_suppletiva_questionario_42_5|2006 Australe Suppletiva — Questionario — Quesito 5]] · **Prova:** [[Prove/2006_estero_australe_2006_suppletiva_questionario_42|2006 Australe Suppletiva — Questionario]]

Si dimostri che la somma dei coefficienti dello sviluppo di $(a+b)^n$ è uguale a $2^n$ per ogni $n\in\mathbb{N}$.

Per il teorema del binomio di Newton lo sviluppo della potenza del binomio è

$$(a+b)^n=\binom{n}{0}a^n+\binom{n}{1}a^{n-1}b+\binom{n}{2}a^{n-2}b^2+\cdots+\binom{n}{n-1}ab^{n-1}+\binom{n}{n}b^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k.$$

I coefficienti dello sviluppo sono dunque i coefficienti binomiali $\binom{n}{0},\binom{n}{1},\dots,\binom{n}{n}$, e la loro somma è $\displaystyle\sum_{k=0}^{n}\binom{n}{k}$.

Poiché l'identità precedente vale per ogni scelta di $a$ e $b$, in particolare vale ponendo $a=b=1$. Con questa sostituzione il primo membro diventa $(1+1)^n=2^n$, mentre nel secondo membro ogni potenza $a^{n-k}b^k$ si riduce a $1$; si ottiene quindi

$$2^n=\binom{n}{0}+\binom{n}{1}+\cdots+\binom{n}{n-1}+\binom{n}{n}=\sum_{k=0}^{n}\binom{n}{k}.$$

La somma dei coefficienti dello sviluppo di $(a+b)^n$ è pertanto uguale a $2^n$ per ogni $n\in\mathbb{N}$, come si voleva dimostrare.

*Fonte:* [📄 PDF p.44](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
