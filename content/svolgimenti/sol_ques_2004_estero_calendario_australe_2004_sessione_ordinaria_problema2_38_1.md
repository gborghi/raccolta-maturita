

**Quesito:** [[Quesiti/ques_2004_estero_calendario_australe_2004_sessione_ordinaria_problema2_38_1|2004 Estero australe Ordinaria — Problema 2 e Quesiti — Quesito 1]] · **Prova:** [[Prove/2004_estero_calendario_australe_2004_sessione_ordinaria_problema2_38|2004 Estero australe Ordinaria — Problema 2 e Quesiti]]

Si chiede di esibire un sistema lineare di due equazioni in due incognite, compatibile e determinato, la cui unica soluzione sia la coppia $(-1,\,2)$, illustrando il ragionamento seguito.

## Impostazione

Un sistema lineare di due equazioni in due incognite

$$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$

ammette una e una sola soluzione quando le due equazioni sono **linearmente indipendenti**, cioè quando il determinante dei coefficienti è diverso da zero:

$$\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1 b_2 - a_2 b_1 \neq 0.$$

In tal caso l'unica soluzione è il punto di intersezione delle due rette rappresentate dalle equazioni. Per costruire un sistema con soluzione assegnata basta quindi scegliere **due relazioni indipendenti** che siano entrambe soddisfatte dai valori voluti.

## Costruzione dell'esempio

Poniamo $x=-1$ e $y=2$ e ricaviamo i valori assunti da alcune semplici combinazioni:

$$x+y = -1+2 = 1, \qquad x-y = -1-2 = -3.$$

Scegliamo allora le due equazioni

$$x+y = 1 \qquad \text{e} \qquad x-y = -3,$$

che per costruzione sono verificate dalla coppia $(-1,\,2)$. Il sistema richiesto è dunque

$$\begin{cases} x+y = 1 \\ x-y = -3. \end{cases}$$

## Verifica

Il determinante dei coefficienti vale

$$\begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = (1)(-1)-(1)(1) = -2 \neq 0,$$

quindi il sistema è **determinato** e possiede un'unica soluzione. Risolvendolo, per esempio sommando membro a membro le due equazioni si ha $2x=-2$, da cui $x=-1$; sostituendo nella prima si ottiene $y=2$. La soluzione è pertanto la coppia $(-1,\,2)$, come richiesto.

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
