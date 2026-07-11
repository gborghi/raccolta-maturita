

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_5|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 5]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Si deve dimostrare che la somma dei coefficienti dello sviluppo di $(a+b)^n$ è uguale a $2^n$ per ogni $n\in\mathbb{N}$.

Per il **teorema del binomio di Newton** lo sviluppo della potenza $n$-esima di un binomio è

$$(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}\,a^{n-k}\,b^{k},$$

dove i coefficienti sono i coefficienti binomiali $\binom{n}{k}$, con $k=0,1,\dots,n$. La loro somma è dunque

$$S=\sum_{k=0}^{n}\binom{n}{k}=\binom{n}{0}+\binom{n}{1}+\cdots+\binom{n}{n}.$$

## a) Dimostrazione per sostituzione

L'identità del binomio vale per ogni coppia di valori di $a$ e $b$; in particolare è lecito porre $a=b=1$. Sostituendo si ottiene, a primo membro,

$$(1+1)^n=2^n,$$

mentre a secondo membro, poiché $1^{n-k}\cdot 1^{k}=1$ per ogni $k$, resta proprio la somma dei coefficienti:

$$\sum_{k=0}^{n}\binom{n}{k}\,1^{\,n-k}\,1^{\,k}=\sum_{k=0}^{n}\binom{n}{k}=S.$$

Uguagliando i due membri si conclude immediatamente

$$S=\sum_{k=0}^{n}\binom{n}{k}=2^n,$$

come si voleva dimostrare.

## b) Dimostrazione per induzione

La stessa tesi $P(n):\ \sum_{k=0}^{n}\binom{n}{k}=2^n$ si può provare per induzione su $n$, usando la regola di Stifel $\binom{n+1}{k}=\binom{n}{k-1}+\binom{n}{k}$.

**Base.** Per $n=0$ si ha $\binom{0}{0}=1=2^{0}$, dunque $P(0)$ è vera. (Analogamente, per $n=1$: $\binom{1}{0}+\binom{1}{1}=1+1=2=2^{1}$.)

**Passo induttivo.** Supponiamo vera $P(n)$, cioè $\sum_{k=0}^{n}\binom{n}{k}=2^n$, e dimostriamo $P(n+1)$. Applicando la regola di Stifel a ciascun termine (con la convenzione $\binom{n}{-1}=\binom{n}{n+1}=0$):

$$\sum_{k=0}^{n+1}\binom{n+1}{k}=\sum_{k=0}^{n+1}\left[\binom{n}{k-1}+\binom{n}{k}\right]=\sum_{k=0}^{n+1}\binom{n}{k-1}+\sum_{k=0}^{n+1}\binom{n}{k}.$$

Ognuna delle due somme, riordinando gli indici, è uguale a $\sum_{j=0}^{n}\binom{n}{j}=2^n$ per l'ipotesi induttiva; pertanto

$$\sum_{k=0}^{n+1}\binom{n+1}{k}=2^n+2^n=2\cdot 2^n=2^{\,n+1}.$$

Dunque $P(n+1)$ è vera. Per il principio di induzione la tesi vale per ogni $n\in\mathbb{N}$.

## c) Interpretazione combinatoria

Il risultato ha anche un significato insiemistico. Il coefficiente $\binom{n}{k}$ conta i sottoinsiemi di $k$ elementi di un insieme $A$ con $n$ elementi; quindi la somma

$$\sum_{k=0}^{n}\binom{n}{k}$$

conta **tutti** i sottoinsiemi di $A$, di qualunque cardinalità. D'altra parte ogni sottoinsieme si individua decidendo, per ciascuno degli $n$ elementi, se includerlo o no: si tratta di $n$ scelte binarie indipendenti, che danno $2\cdot 2\cdots 2=2^n$ possibilità. I due conteggi contano lo stesso insieme, quindi

$$\sum_{k=0}^{n}\binom{n}{k}=2^n.$$

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
