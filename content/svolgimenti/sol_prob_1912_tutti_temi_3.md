---
title: 1912 tutti_temi 1912 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1912_tutti_temi_3
of_item: prob_1912_tutti_temi_3
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

**Problema:** [[Problemi/prob_1912_tutti_temi_3|1912 tutti_temi 1912 — Problema 3]] · **Prova:** [[Prove/1912_tutti_temi|1912 Tema di maturità]]

Siano $a=\overline{BC}$, $b=\overline{AC}$ i cateti e $c=\overline{AB}$ l'ipotenusa. Detto $B$ l'angolo in $B$ (opposto a $b$), è $b=c\sin B$, $a=c\cos B$. L'altezza relativa all'ipotenusa è $\overline{CC'}=\dfrac{ab}{c}$, e il raggio del cerchio inscritto è $r=\dfrac{a+b-c}{2}$.

La sfera di raggio $r$ ha superficie $4\pi r^2$; il cilindro di lato (generatrice) $c$ e raggio $\overline{CC'}$ ha superficie laterale $2\pi\,\overline{CC'}\cdot c=2\pi\,\dfrac{ab}{c}\,c=2\pi ab$. Dunque
$$
m=\frac{4\pi r^2}{2\pi ab}=\frac{2r^2}{ab}=\frac{(a+b-c)^2}{2ab}.
$$
Posto $u=\sin B+\cos B$ (sicché $a+b=cu$, $ab=c^2\sin B\cos B$ e $u^2=1+2\sin B\cos B$), si ha $a+b-c=c(u-1)$ e
$$
m=\frac{c^2(u-1)^2}{2 c^2\sin B\cos B}=\frac{(u-1)^2}{u^2-1}=\frac{u-1}{u+1}.
$$
**Relazione trigonometrica.** Da $m=\dfrac{u-1}{u+1}$ segue $u=\dfrac{1+m}{1-m}$. Inoltre
$$
\frac{(\tan B+1)^2}{\tan B}=\tan B+2+\cot B=\frac{1}{\sin B\cos B}+2=\frac{2u^2}{u^2-1},
$$
e sostituendo $u=\frac{1+m}{1-m}$ (per cui $u^2-1=\frac{4m}{(1-m)^2}$) si ottiene
$$
\boxed{\frac{(\tan B+1)^2}{\tan B}=\frac{(1+m)^2}{2m}.}
$$
**Calcolo dei lati.** Dal perimetro $2p=a+b+c=c(1+u)$ e da $1+u=\dfrac{2}{1-m}$ si ricava
$$
\boxed{c=p(1-m).}
$$
Allora $a+b=cu=p(1+m)$, mentre $ab=c^2\sin B\cos B=c^2\,\dfrac{u^2-1}{2}=2p^2m$. I cateti sono dunque le radici di $t^2-p(1+m)\,t+2p^2m=0$:
$$
\boxed{a, b=\frac{p\Bigl[(1+m)\pm\sqrt{m^2-6m+1}\Bigr]}{2}.}
$$
Il problema è possibile (cateti reali) se $m^2-6m+1\ge0$ con $0<m<1$, cioè $m\le 3-2\sqrt2\approx0{,}172$; per $m=3-2\sqrt2$ il triangolo è isoscele rettangolo.

*Verifica.* Per il triangolo $3$--$4$--$5$ ($p=6$): $r=1$, $\overline{CC'}=12/5$, $m=\dfrac{2\cdot1}{2\cdot12}=\dfrac16$. Si ottiene $c=6\cdot\frac56=5$ e $a,b=\dfrac{6[(7/6)\pm(1/6)]}{2}=4,\,3$, come deve essere.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.59](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
