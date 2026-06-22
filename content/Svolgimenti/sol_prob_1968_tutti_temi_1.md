---
title: 1968 tutti_temi 1968 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1968_tutti_temi_1
of_item: prob_1968_tutti_temi_1
prova_id: prova_1968_tutti_temi
anno: '1968'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1968
---

**Problema:** [[Problemi/prob_1968_tutti_temi_1|1968 tutti_temi 1968 — Problema 1]] · **Prova:** [[Prove/1968_tutti_temi|1968 Tema di maturita]]

**Coordinate.** $A=(0,0)$, $B=(a,0)$, $C=(a/2,\,a\sqrt{3}/2)$, $M=(a/2,0)$.

Parametrizziamo $E$ su~$AC$ con $|AE|=t$ ($0\le t\le a$): $E=(t/2,\,t\sqrt{3}/2)$.

Poiché $EF\parallel AB$: $F$ ha la stessa ordinata di~$E$, cioè $F=(a-t/2,\,t\sqrt{3}/2)$ (intersezione con~$BC$). $|EF|=a-t$.

$D$ è sul prolungamento di~$EF$ oltre~$F$, con $|FD|=\frac{1}{2}(a-t)$: $D=(a-t/2+\frac{a-t}{2},\,t\sqrt{3}/2)=(\frac{2a-t}{2}+\frac{a-t}{2},\,t\sqrt{3}/2)$.

Calcoliamo: $x_{D}=a-t/2+(a-t)/2=(2a-2t+a-t+t)/2$... Più semplicemente: $x_{F}=a-t/2$ e $D$ si sposta verso destra di $(a-t)/2$ (stessa direzione di~$AB$):
$$
x_{D}=a-\frac{t}{2}+\frac{a-t}{2}=\frac{3a-3t}{2}+\frac{t}{2}...
$$
Ricalcoliamo: $x_{D}=x_{F}+\frac{a-t}{2}=a-\frac{t}{2}+\frac{a-t}{2}=a+\frac{a}{2}-t=\frac{3a}{2}-t$, $y_{D}=\frac{t\sqrt{3}}{2}$.

**Calcolo.**
$$
|MD|^{2}=\left(\frac{3a}{2}-t-\frac{a}{2}\right)^{2}+\frac{3t^{2}}{4}=(a-t)^{2}+\frac{3t^{2}}{4}=a^{2}-2at+\frac{7t^{2}}{4}.

|BD|^{2}=\left(\frac{3a}{2}-t-a\right)^{2}+\frac{3t^{2}}{4}=\left(\frac{a}{2}-t\right)^{2}+\frac{3t^{2}}{4}=\frac{a^{2}}{4}-at+\frac{7t^{2}}{4}.

|MD|^{2}+|BD|^{2}=\frac{5a^{2}}{4}-3at+\frac{7t^{2}}{2}=ka^{2}.
$$
Ponendo $u=t/a$: $\frac{7}{2}u^{2}-3u+\frac{5}{4}-k=0$, cioè $14u^{2}-12u+5-4k=0$.
$$
u=\frac{12\pm\sqrt{144-56(5-4k)}}{28}=\frac{12\pm\sqrt{224k-136}}{28}=\frac{6\pm\sqrt{56k-34}}{14}.
$$
Soluzione reale per $k\ge 34/56=17/28\approx 0{,}607$.

**Casi particolari.** Per il trapezio rettangolo, isoscele o parallelogramma si impongono le relative condizioni geometriche e si ricava il corrispondente valore di~$k$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.106](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
