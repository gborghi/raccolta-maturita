

**Quesito:** [[Quesiti/ques_2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35_4|2007 Estero Australe Ordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35|2007 Estero Australe Ordinaria — Questionario]]

Si illustrino il significato e l'ambito di utilizzo del simbolo $\binom{n}{m}$ e si risolva l'equazione
$$2\binom{x}{2}=3\binom{x-1}{2}\qquad\text{con } x\in\mathbb{N}.$$

## a) Significato e ambito di utilizzo del simbolo

Il simbolo $\binom{n}{m}$, detto **coefficiente binomiale** e che si legge "$n$ su $m$", è definito, per due numeri naturali $n$ e $m$ con $0\le m\le n$, da
$$\binom{n}{m}=\frac{n!}{m!\,(n-m)!}.$$

Esso rappresenta il **numero delle combinazioni semplici** di $n$ oggetti presi $m$ alla volta, cioè il numero dei sottoinsiemi di $m$ elementi che si possono formare a partire da un insieme di $n$ elementi (senza tener conto dell'ordine). 

Il coefficiente binomiale interviene in particolare:

- nel **calcolo combinatorio**, per contare le combinazioni;
- nello **sviluppo della potenza di un binomio** (formula di Newton):
$$(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}\,a^{\,n-k}\,b^{\,k};$$
- nel **triangolo di Tartaglia**, i cui elementi sono proprio i coefficienti binomiali.

Valgono inoltre le proprietà $\binom{n}{0}=\binom{n}{n}=1$ e la simmetria $\binom{n}{m}=\binom{n}{\,n-m}$.

## b) Risoluzione dell'equazione

Ricordiamo che
$$\binom{x}{2}=\frac{x(x-1)}{2},\qquad \binom{x-1}{2}=\frac{(x-1)(x-2)}{2}.$$

**Condizioni di esistenza.** Affinché entrambi i simboli abbiano significato deve essere $x\ge 2$ per il primo e $x-1\ge 2$, cioè $x\ge 3$, per il secondo; complessivamente $x\in\mathbb{N}$ con $x\ge 3$.

Sostituendo nell'equazione:
$$2\cdot\frac{x(x-1)}{2}=3\cdot\frac{(x-1)(x-2)}{2},$$
cioè
$$x(x-1)=\frac{3(x-1)(x-2)}{2}.$$

Moltiplicando per $2$:
$$2x(x-1)=3(x-1)(x-2).$$

Poiché $x\ge 3$ si ha $x-1\ne 0$, quindi possiamo dividere entrambi i membri per $(x-1)$:
$$2x=3(x-2)=3x-6,$$
da cui
$$-x=-6\ \Rightarrow\ x=6.$$

Il valore $x=6$ soddisfa la condizione $x\ge 3$ ed è quindi accettabile.

**Verifica.**
$$2\binom{6}{2}=2\cdot 15=30,\qquad 3\binom{5}{2}=3\cdot 10=30.$$

Le due espressioni coincidono: la soluzione è $x=6$.

*Fonte:* [📄 PDF p.36](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
