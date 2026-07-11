

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26_4|2005 Americhe Ordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_o_questionario_26|2005 Americhe Ordinaria — Questionario]]

Le parti letterali dei termini dello sviluppo del binomio $(a+b)^7$, ordinati secondo le potenze decrescenti di $a$ e crescenti di $b$, sono rispettivamente

$$a^7,\quad a^6b,\quad a^5b^2,\quad a^4b^3,\quad a^3b^4,\quad a^2b^5,\quad ab^6,\quad b^7.$$

Si chiede di elencare i loro coefficienti, giustificando la risposta.

## Formula del binomio di Newton

Per ogni intero $n\ge 0$ vale lo sviluppo

$$(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}\,a^{\,n-k}\,b^{\,k}=\binom{n}{0}a^n+\binom{n}{1}a^{n-1}b+\cdots+\binom{n}{n-1}ab^{n-1}+\binom{n}{n}b^n,$$

dove i coefficienti sono i coefficienti binomiali

$$\binom{n}{k}=\frac{n!}{k!\,(n-k)!}.$$

Il termine di posto $k+1$ ha dunque parte letterale $a^{\,n-k}b^{\,k}$ e coefficiente $\binom{n}{k}$: al crescere di $k$ da $0$ a $n$ la potenza di $a$ decresce e quella di $b$ cresce, esattamente nell'ordine indicato dal testo.

## Calcolo dei coefficienti per $n=7$

Applicando la formula con $n=7$ si ottiene:

$$
\begin{aligned}
\binom{7}{0}&=1, & \binom{7}{1}&=7, & \binom{7}{2}&=\frac{7\cdot 6}{2}=21, & \binom{7}{3}&=\frac{7\cdot 6\cdot 5}{6}=35,\\[4pt]
\binom{7}{4}&=35, & \binom{7}{5}&=21, & \binom{7}{6}&=7, & \binom{7}{7}&=1.
\end{aligned}
$$

Gli ultimi quattro valori si ricavano subito dagli altri grazie alla proprietà di simmetria $\binom{n}{k}=\binom{n}{n-k}$.

## Conclusione

I coefficienti dei termini, nell'ordine richiesto, sono quindi

$$1,\quad 7,\quad 21,\quad 35,\quad 35,\quad 21,\quad 7,\quad 1,$$

cioè la settima riga del triangolo di Tartaglia. Si osservi come verifica che la loro somma vale $2^7=128$, in accordo con l'identità $\sum_{k=0}^{n}\binom{n}{k}=2^{\,n}$ (che si ottiene ponendo $a=b=1$ nello sviluppo del binomio).

*Fonte:* [📄 PDF p.27](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
