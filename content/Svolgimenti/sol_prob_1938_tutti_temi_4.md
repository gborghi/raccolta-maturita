---
title: 1938 tutti_temi 1938 — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1938_tutti_temi_4
of_item: prob_1938_tutti_temi_4
prova_id: prova_1938_tutti_temi
anno: '1938'
pdf: tutti_temi.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/1938
---

**Problema:** [[Problemi/prob_1938_tutti_temi_4|1938 tutti_temi 1938 — Problema 4]] · **Prova:** [[Prove/1938_tutti_temi|1938 Tema di maturita]]

**Impostazione.** Poniamo $O$ nell'origine, $AB$ sull'asse~$x$: $A=(-r,0)$, $B=(r,0)$, e quindi $C=(-\tfrac r2,0)$, $D=(\tfrac r2,0)$, con $CD=r$. La corda $EF$ parallela ad $AB$, di semilunghezza~$x$, ha estremi $E=(-x,\,y)$ ed $F=(x,\,y)$ sulla circonferenza, dove $y^2=r^2-x^2$. Dunque $EF=2x$.

**Somma dei quadrati dei lati di $CEFD$.** I quattro lati sono $CD$, $EF$, $CE$ ed $FD$:
$$
CD^2=r^2,\qquad EF^2=4x^2,\qquad CE^2=FD^2=\Bigl(x-\tfrac r2\Bigr)^2+y^2 .
$$
Quindi, usando $y^2=r^2-x^2$,
$$
CD^2+EF^2+CE^2+FD^2=r^2+4x^2+2\Bigl[\Bigl(x-\tfrac r2\Bigr)^2+r^2-x^2\Bigr]
=4x^2-2rx+\frac{7r^2}{2}.
$$
**Equazione risolutiva.** Imponendo l'uguaglianza con $\dfrac{(m+2)r^2}{2}$:
$$
4x^2-2rx+\frac{7r^2}{2}=\frac{(m+2)r^2}{2} \Longrightarrow 8x^2-4rx+(5-m)r^2=0 ,
$$
da cui
$$
\boxed{ x=\frac{r\bigl(1\pm\sqrt{2m-9}\bigr)}{4} },\qquad EF=2x=\frac{r\bigl(1\pm\sqrt{2m-9}\bigr)}{2}.
$$
**Discussione.** Soluzioni reali se $2m-9\ge 0$, cioè $m\ge\dfrac92$. Inoltre occorre $0<x\le r$. Per $m=\dfrac92$ si ha l'unica soluzione $x=\dfrac r4$ (corda $EF=\dfrac r2$). Al crescere di~$m$ il radicando cresce e la radice col segno~$+$ raggiunge $x=r$ (corda passante per i poli, degenere) per $\sqrt{2m-9}=3$, cioè $m=9$; per $m>9$ resta accettabile solo la radice col segno~$-$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.84](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
