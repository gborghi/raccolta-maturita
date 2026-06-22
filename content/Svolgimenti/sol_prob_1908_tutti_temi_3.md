---
title: 1908 tutti_temi 1908 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1908_tutti_temi_3
of_item: prob_1908_tutti_temi_3
prova_id: prova_1908_tutti_temi
anno: '1908'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1908
---

**Problema:** [[Problemi/prob_1908_tutti_temi_3|1908 tutti_temi 1908 — Problema 3]] · **Prova:** [[Prove/1908_tutti_temi|1908 Tema di maturità]]

Punto sulla bisettrice di un angolo retto a distanza $a$ da entrambi i lati: $P=(a,a)$. La retta per $P$ taglia i lati in $A=(p,0)$ e $B=(0,q)$, formando il triangolo rettangolo $OAB$ con cateti $p$ e $q$.

La retta $AB$ passa per $P$: $\frac{a}{p}+\frac{a}{q}=1$, cioè $p+q=\frac{pq}{a}$.

Ruotando attorno a $OA$: cono di raggio $q$, altezza $p$, apotema $c=\sqrt{p^2+q^2}$. Ruotando attorno a $OB$: cono di raggio $p$, altezza $q$, apotema $c$.

Somma delle superfici laterali: $\pi qc+\pi pc=\pi c(p+q)$.

Area del cerchio di raggio $c$: $\pi c^2$.

Rapporto: $\frac{\pi c(p+q)}{\pi c^2}=\frac{p+q}{c}=m$, dunque $p+q=mc$.

Combinando con $p+q=pq/a$: $pq=amc$.

Con $c=\sqrt{p^2+q^2}$: $(p+q)^2=m^2(p^2+q^2)$, cioè $p^2+q^2+2pq=m^2(p^2+q^2)$.

$(p^2+q^2)(1-m^2)=-2pq=-2amc$. Ma $c^2=p^2+q^2$, dunque $c^2(1-m^2)=-2amc$, $c(1-m^2)=-2am$, $c=\frac{2am}{m^2-1}$ (per $m>\sqrt{2}$: condizione geometrica).

Allora $p+q=\frac{2am^2}{m^2-1}$, $pq=\frac{2a^2m^2}{m^2-1}$.

I cateti $p,q$ sono radici di $t^2-\frac{2am^2}{m^2-1}\,t+\frac{2a^2m^2}{m^2-1}=0$.

Il seno di un angolo acuto: $\sin B=\frac{p}{c}$. Dalla relazione $p+q=mc$ e $pq=amc$: il prodotto $\sin A\sin B=\frac{pq}{c^2}=\frac{am}{c}=\frac{m^2-1}{2}$.
$$
\boxed{p,q=\frac{am^2\pm am\sqrt{m^2-2}}{m^2-1},\quad \sin B=\frac{p}{c}}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.56](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
