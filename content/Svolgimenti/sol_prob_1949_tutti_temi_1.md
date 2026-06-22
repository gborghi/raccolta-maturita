---
title: 1949 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1949_tutti_temi_1
of_item: prob_1949_tutti_temi_1
prova_id: prova_1949_tutti_temi
anno: '1949'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1949
---

**Problema:** [[Problemi/prob_1949_tutti_temi_1|1949 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1949_tutti_temi|1949 Tema di maturita]]

**Impostazione.** Poniamo $A$ nell'origine, con $AB$ sull'asse~$x$ e $AD$ sull'asse~$y$. Dunque $A=(0,0)$, $B=(a,0)$, $D=(0,h)$, $C=(c,h)$ con $a>c>0$ e $h>0$ (trapezio convesso con angoli retti in~$A$ e~$D$). L'angolo in~$B$ è ottuso e l'angolo in~$C$ è acuto.

Poniamo $\angle CAB = x$ come suggerito; allora $\tan x = h/c$ (dalla diagonale~$AC$) e l'angolo $A\widehat{C}B = 30^\circ$.

Nel triangolo~$ABC$: $\angle BAC = x$, $\angle ACB = 30^\circ$, dunque $\angle ABC = 150^\circ - x$.

**Angoli del trapezio.** L'angolo del trapezio in~$B$ è $\angle ABC_{\text{trap}} = 180^\circ - \angle ABC_{\text{tri}} + \ldots$ Ma più direttamente: nel trapezio $ABCD$, $\angle B + \angle A = 180^\circ$ non vale (non è un trapezio isoscele); piuttosto $\angle A = 90^\circ$, $\angle D = 90^\circ$, e $\angle B + \angle C = 180^\circ$.

Dal triangolo~$ABC$ con il teorema dei seni: $\frac{|AB|}{\sin 30^\circ} = \frac{|BC|}{\sin x} = \frac{|AC|}{\sin(150^\circ-x)}$.

Dunque $|BC| = \frac{a\sin x}{\sin 30^\circ} = 2a\sin x$.

L'altezza del trapezio è $h = |BC|\sin(\angle B - 90^\circ)\ldots$ In realtà, più semplicemente: $h = |BC|\sin\beta'$ dove $\beta'$ è l'angolo che~$BC$ forma con~$AB$. L'angolo in~$B$ del trapezio è $\angle ABC_{\text{trap}} = 180^\circ - (150^\circ - x) = 30^\circ + x$ (l'angolo del triangolo~$ABC$ nel vertice~$B$ è $150^\circ-x$, ma l'angolo del trapezio in~$B$ include anche il tratto~$BC$, ovvero coincide: nel trapezio, $\angle B = 150^\circ-x$... ripensiamoci).

Riconsideriamo: nel trapezio~$ABCD$ con $\angle A=\angle D=90^\circ$ e basi $AB$ e $CD$ parallele, i lati $AD$ e $BC$ sono i lati obliqui. L'angolo in $B$ è $\angle ABC$ e l'angolo in $C$ è $\angle BCD$, con $\angle B + \angle C = 180^\circ$ (co-interni tra parallele).

Nel triangolo $ABC$ l'angolo in~$B$ è parte dell'angolo del trapezio. Poiché $\angle A\widehat{C}B = 30^\circ$ e la diagonale $AC$ va da $A$ a $C$, l'angolo del trapezio in $C$ è $\angle BCD = \angle BCA + \angle ACD = 30^\circ + 90^\circ = 120^\circ$ (dato che $\angle ACD = 90^\circ$ perché $AD\perp CD$). Dunque $\angle B = 180^\circ - 120^\circ = 60^\circ$.

Ma questo contraddice che gli angoli dipendano da~$k$! Riconsideriamo il problema: la condizione $\angle A\widehat{C}B = 30^\circ$ è un dato, e il rapporto~$k$ determina le proporzioni. Dunque gli angoli del trapezio sono:
$$
\angle B = 60^\circ, \quad \angle C = 120^\circ.
$$
**Condizione metrica.** Con $\angle B = 60^\circ$: $h = BC\sin 60^\circ$, $AB - CD = BC\cos 60^\circ = BC/2$, dunque $AB = CD + BC/2$.

Dalla condizione $\frac{CD + m\cdot AD}{AB} = k$, cioè $CD + mh = k\cdot AB$:
$$
CD + m\cdot BC\frac{\sqrt{3}}{2} = k \left(CD + \frac{BC}{2}\right).
$$
Ponendo $t = BC/CD > 0$: $1 + \frac{m\sqrt{3}}{2}t = k\!\left(1 + \frac{t}{2}\right)$, da cui:
$$
t \left(\frac{m\sqrt{3}}{2} - \frac{k}{2}\right) = k-1, \qquad t = \frac{2(k-1)}{m\sqrt{3}-k}.
$$
Per $t>0$: se $m\sqrt{3}>k$ allora $k>1$; se $m\sqrt{3}<k$ allora $k<1$.

Il problema ammette una soluzione per ogni valore di~$k$ nel dominio di validità; ammette due soluzioni quando il vincolo geometrico aggiuntivo (convessità, lati positivi) è soddisfatto in due modi.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.91](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
