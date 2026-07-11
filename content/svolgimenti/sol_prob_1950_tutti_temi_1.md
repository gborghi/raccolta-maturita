---
title: 1950 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1950_tutti_temi_1
of_item: prob_1950_tutti_temi_1
prova_id: prova_1950_tutti_temi
anno: '1950'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1950
---

**Problema:** [[Problemi/prob_1950_tutti_temi_1|1950 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1950_tutti_temi|1950 Tema di maturita]]

**Impostazione.** Sia~$ABCD$ il trapezio isoscele con basi~$AB=a$ (maggiore) e $CD=c$, lati obliqui $BC=AD=l$. Le diagonali hanno lunghezza~$d$ e sono perpendicolari ai lati obliqui: $AC\perp BC$ e $BD\perp AD$.

Dalla perpendicolarità: nel triangolo~$ABC$, $\angle ACB=90^\circ$, dunque~$ABC$ è rettangolo in~$C$. Ma anche $ABD$ è rettangolo in~$D$. Allora $|AB|^2=|AC|^2+|BC|^2=d^2+l^2$ e analogamente dall'altro triangolo.

In realtà, poiché $\angle ACB=90^\circ$, per il teorema della corda si ha che~$AB$ è il diametro del cerchio circoscritto al triangolo~$ABC$: $a = |AB|$ è il diametro, dunque $a/2$ è il raggio del cerchio in cui~$C$ vede~$AB$ sotto angolo retto.

Dall'angolo retto: $d^2 = l\cdot a$ (in quanto $|AC|=d$ e $\angle ACB=90^\circ$, la proiezione di~$C$ su~$AB$ dà i rapporti).

Più precisamente: $d^2+l^2=a^2$ (Pitagora in~$ABC$).

L'altezza del trapezio: $h=\sqrt{l^2-\left(\frac{a-c}{2}\right)^2}$.

Dalla relazione tra diagonale e lati in un trapezio isoscele: $d^2 = ac + l^2 - \left(\frac{a-c}{2}\right)^2\cdot\frac{4}{...}$; più direttamente, $d^2=a^2-l^2$ dalla perpendicolarità. Inoltre, dalla geometria del trapezio isoscele con diagonali di lunghezza~$d$: $d^2 = l^2+ac$ (formula di Pitagora generalizzata).

**Condizioni:**
- $AC\perp BC$, dunque $d^2+l^2=a^2$;
- la somma dei quadrati dei lati: $2a^2+2l^2... $ No: i quattro lati sono $a, c, l, l$, dunque $a^2+c^2+2l^2=m^2$.

Dal trapezio isoscele con $\angle ACB=90^\circ$: $C$ giace sulla semicirconferenza di diametro~$AB$, dunque il raggio circoscritto è $a/2$. Per la simmetria del trapezio, anche~$D$ giace sulla stessa semicirconferenza (da parte opposta), e $\angle ADB=90^\circ$. Dunque i quattro vertici del trapezio giacciono su un cerchio di diametro~$a$, con $a^2=d^2+l^2$.

Ora $c = |CD|$: nel cerchio di raggio~$a/2$, i punti $C$ e $D$ sono simmetrici rispetto all'asse di~$AB$. Se $\angle CAB=\alpha$, allora $l=d\tan\alpha$ e $c = a-2l\cos\alpha'$ con opportuni angoli.

In modo più diretto: con coordinate, $A=(-a/2,0)$, $B=(a/2,0)$, $C=(a/2-l\cos\beta, l\sin\beta)$ dove $\beta$ è l'angolo in~$B$. Dalla perpendicolarità $AC\perp BC$: questo è già garantito. Dunque $c=|a-2l\cos\beta|$, $h=l\sin\beta$, e $a^2=d^2+l^2$.

La condizione $a^2+c^2+2l^2=m^2$ con $a^2=d^2+l^2$ dà: $(d^2+l^2)+c^2+2l^2=m^2$, cioè $c^2+3l^2+d^2=m^2$, $c^2+3l^2=m^2-d^2$.

Con il vincolo geometrico aggiuntivo $c = a\cos 2\beta$ (dalla geometria del trapezio inscritto), il sistema ha soluzione per $m^2>d^2$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.92](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
