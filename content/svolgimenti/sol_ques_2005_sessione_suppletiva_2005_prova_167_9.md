

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_167_9|2005 Suppletiva PNI — Prova — Quesito 9]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_167|2005 Suppletiva PNI — Prova]]

Si deve discutere, al variare del parametro reale $a$, il sistema lineare nelle incognite $x$, $y$, $z$:

$$\begin{cases} ax + y + z = a \\ x + ay + z = a \\ x + y + az = a \end{cases}$$

## Il determinante della matrice dei coefficienti

La natura del sistema dipende dal determinante della matrice dei coefficienti

$$A = \begin{pmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{pmatrix}.$$

Sviluppando lungo la prima riga:

$$\det A = a(a^2 - 1) - 1\cdot(a - 1) + 1\cdot(1 - a) = a^3 - 3a + 2.$$

Il polinomio si scompone osservando che $a = 1$ è una radice:

$$a^3 - 3a + 2 = (a - 1)(a^2 + a - 2) = (a - 1)^2 (a + 2).$$

Quindi $\det A = 0$ soltanto per $a = 1$ e per $a = -2$.

## Caso $a \neq 1$ e $a \neq -2$: sistema determinato

Essendo $\det A \neq 0$, per il teorema di Cramer il sistema ammette **una e una sola soluzione**. Per determinarla conviene sfruttare la simmetria del sistema. Sommando membro a membro le tre equazioni si ottiene

$$(a + 2)(x + y + z) = 3a \quad\Rightarrow\quad x + y + z = \frac{3a}{a+2}.$$

Sottraendo la seconda equazione dalla prima si ha $(a-1)x - (a-1)y = 0$, cioè $(a-1)(x - y) = 0$; poiché $a \neq 1$, risulta $x = y$. In modo analogo si ricava $x = z$. L'unica soluzione è dunque

$$x = y = z = \frac{a}{a + 2}.$$

## Caso $a = 1$: sistema indeterminato

Ponendo $a = 1$ le tre equazioni diventano tutte identiche:

$$x + y + z = 1.$$

Il sistema si riduce a **una sola equazione** in tre incognite: è compatibile e ammette infinite soluzioni ($\infty^2$, dipendenti da due parametri liberi). Il sistema è quindi **indeterminato**.

## Caso $a = -2$: sistema impossibile

Ponendo $a = -2$ il sistema diventa

$$\begin{cases} -2x + y + z = -2 \\ x - 2y + z = -2 \\ x + y - 2z = -2 \end{cases}$$

Sommando membro a membro le tre equazioni, i primi membri si annullano ($-2x+x+x = 0$, e analogamente per $y$ e $z$), mentre i secondi membri danno $-6$:

$$0 = -6,$$

uguaglianza falsa. Il sistema non ammette alcuna soluzione: è **impossibile**.

## Conclusione

Riassumendo la discussione:

$$\begin{cases} a \neq 1,\ a \neq -2 & \Rightarrow \text{determinato} \\ a = 1 & \Rightarrow \text{indeterminato} \\ a = -2 & \Rightarrow \text{impossibile} \end{cases}$$

Il sistema risulta dunque **indeterminato per un valore di $a$ ($a=1$) ed impossibile per un valore di $a$ ($a=-2$)**: la risposta corretta è la **[B]**.

*Fonte:* [📄 PDF p.182](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
