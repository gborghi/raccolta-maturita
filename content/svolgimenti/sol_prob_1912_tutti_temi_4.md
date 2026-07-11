---
title: 1912 tutti_temi 1912 — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1912_tutti_temi_4
of_item: prob_1912_tutti_temi_4
prova_id: prova_1912_tutti_temi
anno: '1912'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1912
---

**Problema:** [[Problemi/prob_1912_tutti_temi_4|1912 tutti_temi 1912 — Problema 4]] · **Prova:** [[Prove/1912_tutti_temi|1912 Tema di maturità]]

Siano $a=\overline{BC}$, $b=\overline{AC}$ i cateti, $c=\overline{AB}$ l'ipotenusa e $h=\overline{CC'}=\dfrac{ab}{c}$ l'altezza. Detto $B$ l'angolo in $B$, è $b=c\sin B$, $a=c\cos B$.

Ruotando attorno all'ipotenusa, i cateti $\overline{AC}$ e $\overline{BC}$ generano due coni che hanno per base comune il cerchio di raggio $h$ e per apotemi i cateti stessi $b$ e $a$. Le aree laterali sono $\pi h\,b$ e $\pi h\,a$, di somma $\pi h(a+b)$.

Il cilindro di lato $c$ e raggio $h$ ha area laterale $2\pi h c$. Quindi
$$
m=\frac{\pi h(a+b)}{2\pi h c}=\frac{a+b}{2c}=\frac{\sin B+\cos B}{2}.
$$
Posto $u=\sin B+\cos B$, si ha dunque $u=2m$.

**Relazione trigonometrica.** Poiché $1+\tan^2 B=\dfrac{1}{\cos^2 B}$ e $(1+\tan B)^2=\dfrac{(\cos B+\sin B)^2}{\cos^2 B}=\dfrac{u^2}{\cos^2 B}$,
$$
\boxed{\frac{(1+\tan B)^2}{1+\tan^2 B}=u^2=(2m)^2=4m^2.}
$$
**Calcolo dei lati.** Il raggio inscritto è $r=\dfrac{a+b-c}{2}=\dfrac{c(u-1)}{2}=\dfrac{c(2m-1)}{2}$, da cui
$$
\boxed{c=\frac{2r}{2m-1}\qquad\Bigl(m>\tfrac12\Bigr).}
$$
Inoltre $a+b=cu=\dfrac{4mr}{2m-1}$ e $ab=c^2\sin B\cos B=c^2\dfrac{u^2-1}{2}=\dfrac{2r^2(2m+1)}{2m-1}$. I cateti sono le radici di $t^2-\dfrac{4mr}{2m-1}\,t+\dfrac{2r^2(2m+1)}{2m-1}=0$:
$$
\boxed{a, b=\frac{r\Bigl[2m\pm\sqrt{2-4m^2}\Bigr]}{2m-1}.}
$$
Sono reali se $2-4m^2\ge0$, cioè $\tfrac12<m\le\tfrac{1}{\sqrt2}$; per $m=\tfrac{1}{\sqrt2}$ il triangolo è isoscele ($B=45^\circ$).

*Verifica.* Per il triangolo $3$--$4$--$5$: $r=1$, $u=7/5$, $m=7/10$. Allora $c=\dfrac{2}{0{,}4}=5$ e $a,b=\dfrac{1\cdot[1{,}4\pm\sqrt{2-1{,}96}]}{0{,}4}=\dfrac{1{,}4\pm0{,}2}{0{,}4}=4,\,3$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.59](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
