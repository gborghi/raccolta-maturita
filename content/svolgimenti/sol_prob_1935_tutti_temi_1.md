---
title: 1935 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1935_tutti_temi_1
of_item: prob_1935_tutti_temi_1
prova_id: prova_1935_tutti_temi
anno: '1935'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1935
---

**Problema:** [[Problemi/prob_1935_tutti_temi_1|1935 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1935_tutti_temi|1935 Tema di maturità]]

**Impostazione.** Siano $B$ la base maggiore, $b$ la base minore, $h$ l'altezza e $L$ il lato obliquo del trapezio isoscele. In un trapezio isoscele con le diagonali perpendicolari l'altezza è uguale alla semisomma delle basi:
$$
h=\frac{B+b}{2}.
$$
**Le due basi.** L'area vale $\mathcal A=\dfrac{B+b}{2}\,h=h^2$. Imponendo $\mathcal A=m^2$ si ha $h=m$ e dunque
$$
B+b=2m .
$$
Dal perimetro $2p=B+b+2L$ segue $L=p-m$. Poiché $L^2=\Bigl(\dfrac{B-b}{2}\Bigr)^2+h^2$, si ricava
$$
\Bigl(\frac{B-b}{2}\Bigr)^2=(p-m)^2-m^2=p^2-2pm,\qquad B-b=2\sqrt{p^2-2pm}.
$$
Quindi
$$
\boxed{ B=m+\sqrt{p^2-2pm} ,\qquad b=m-\sqrt{p^2-2pm} }.
$$
**La diagonale.** In un trapezio isoscele la proiezione di una diagonale sulla retta della base è uguale alla semisomma delle basi, cioè $\dfrac{B+b}{2}=m$; poiché la componente verticale è l'altezza $h=m$, la diagonale misura
$$
d=\sqrt{m^2+m^2}=m\sqrt2 .
$$
(In modo equivalente, le due diagonali, uguali e perpendicolari, sono le ipotenuse di triangoli rettangoli isosceli di cateto~$m$.)
**Segmenti delle diagonali.** Le diagonali di un trapezio si tagliano in parti proporzionali alle basi: il punto d'incontro divide ciascuna diagonale in due segmenti che stanno fra loro come $B:b$. I due segmenti in cui essa resta divisa sono allora
$$
\boxed{ d_1=\frac{m\sqrt2 \bigl(m+\sqrt{p^2-2pm}\bigr)}{2m}=\frac{m+\sqrt{p^2-2pm}}{\sqrt2},\qquad
d_2=\frac{m-\sqrt{p^2-2pm}}{\sqrt2} },
$$
con $d_1+d_2=m\sqrt2=d$.

**Discussione.** Occorre $p^2-2pm\ge 0$, cioè $p\ge 2m$, e $b>0$, cioè $m>\sqrt{p^2-2pm}$, ossia $m^2+2pm-p^2>0$ e quindi $m>p(\sqrt2-1)$. In definitiva
$$
p(\sqrt2-1)<m\le \frac{p}{2}.
$$
Per $m=\tfrac{p}{2}$ le due basi coincidono ($B=b=m$): il trapezio degenera nel quadrato di lato~$m$, con diagonali bisecate ($d_1=d_2=\tfrac{m\sqrt2}{2}$) e diagonale $d=m\sqrt2$, coerente con la diagonale del quadrato di lato~$m$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.81](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
