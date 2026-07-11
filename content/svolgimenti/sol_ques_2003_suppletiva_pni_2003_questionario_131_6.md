

**Quesito:** [[Quesiti/ques_2003_suppletiva_pni_2003_questionario_131_6|2003 Suppletiva PNI — Questionario — Quesito 6]] · **Prova:** [[Prove/2003_suppletiva_pni_2003_questionario_131|2003 Suppletiva PNI — Questionario]]

Si consideri il sistema lineare omogeneo nelle incognite $x,\,y,\,z$

$$\begin{cases} kx + y + z = 0 \\ x + ky + z = 0 \\ x + y + kz = 0 \end{cases}$$

con $k$ parametro reale. Occorre stabilire se sia vera o falsa l'affermazione: «il sistema ammette la sola soluzione $x=0,\ y=0,\ z=0$ per ogni valore di $k$ diverso da $1$».

Trattandosi di un sistema **omogeneo**, esso ammette sempre la soluzione banale $x=y=z=0$ per ogni valore di $k$. Per il teorema di Cramer questa soluzione è l'**unica** se e solo se il determinante della matrice dei coefficienti è diverso da zero. Calcoliamo dunque il determinante sviluppandolo, ad esempio con la regola di Laplace rispetto alla prima riga:

$$\det \begin{pmatrix} k & 1 & 1 \\ 1 & k & 1 \\ 1 & 1 & k \end{pmatrix} = k\,(k^2 - 1) - 1\cdot(k - 1) + 1\cdot(1 - k).$$

Sviluppando i prodotti:

$$= k^3 - k - k + 1 + 1 - k = k^3 - 3k + 2.$$

Il polinomio si fattorizza mettendo in evidenza la radice $k=1$:

$$k^3 - 3k + 2 = (k - 1)(k^2 + k - 2) = (k - 1)(k - 1)(k + 2) = (k - 1)^2 (k + 2).$$

Il determinante si annulla dunque per

$$(k - 1)^2 (k + 2) = 0 \quad \Rightarrow \quad k = 1 \ \text{(doppia)} \ \text{oppure} \ k = -2.$$

Di conseguenza:

- se $k \ne 1$ e $k \ne -2$, il determinante è diverso da zero e il sistema ammette la **sola** soluzione banale $x=y=z=0$;
- se $k = 1$ oppure $k = -2$, il determinante è nullo e il sistema ammette **infinite** soluzioni non banali.

L'affermazione proposta è quindi **falsa**: non basta escludere il valore $k = 1$, perché anche per $k = -2$ il sistema possiede soluzioni non nulle. La condizione corretta per l'unicità della soluzione nulla è $k \ne 1$ **e** $k \ne -2$.

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/geometria #cluster/geometria
