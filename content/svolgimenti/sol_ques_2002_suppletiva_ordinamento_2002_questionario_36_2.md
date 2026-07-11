

**Quesito:** [[Quesiti/ques_2002_suppletiva_ordinamento_2002_questionario_36_2|2002 Suppletiva Ordinamento — Questionario — Quesito 2]] · **Prova:** [[Prove/2002_suppletiva_ordinamento_2002_questionario_36|2002 Suppletiva Ordinamento — Questionario]]

Considerata la funzione di variabile reale
$$f(x)=\sqrt{x-1}+\sqrt{1-x},$$
si deve stabilire se esiste il limite di $f(x)$ per $x$ tendente a $1$, giustificando la risposta.

## Determinazione del dominio

La funzione è somma di due radici quadrate: entrambi i radicandi devono essere non negativi. Si impone perciò il sistema
$$\begin{cases} x-1\ge 0 \\ 1-x\ge 0 \end{cases}\quad\Rightarrow\quad \begin{cases} x\ge 1 \\ x\le 1. \end{cases}$$

Le due condizioni sono soddisfatte contemporaneamente solo per $x=1$. Il dominio di $f$ è dunque il singolo punto
$$D=\{1\},$$
e in tale punto la funzione vale $f(1)=\sqrt{0}+\sqrt{0}=0$.

## Esistenza del limite per $x\to 1$

Perché abbia senso parlare del limite
$$\lim_{x\to 1} f(x),$$
la definizione richiede che $x=1$ sia un punto di accumulazione per il dominio di $f$: deve cioè essere possibile avvicinarsi a $1$ tramite punti del dominio diversi da $1$ stesso. Occorre poter scegliere valori $x\in D$, con $x\neq 1$, arbitrariamente vicini a $1$.

Nel nostro caso però $D=\{1\}$ non contiene alcun punto diverso da $1$: il punto $x=1$ è un **punto isolato** del dominio, non un punto di accumulazione. Non esiste quindi alcun intorno di $1$ privato di $1$ che contenga punti del dominio.

## Conclusione

Poiché $x=1$ non è punto di accumulazione per $D$, la scrittura $\lim_{x\to 1} f(x)$ è priva di significato: il limite **non esiste** (più precisamente, non è definito). L'unica informazione disponibile è il valore puntuale $f(1)=0$.

*Fonte:* [📄 PDF p.36](https://drive.google.com/file/d/1RhB51YA7EeccsqpgGZQqycxf7UysR0HO/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
