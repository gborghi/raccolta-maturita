---
title: 1910 tutti_temi 1910 — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1910_tutti_temi_4
of_item: prob_1910_tutti_temi_4
prova_id: prova_1910_tutti_temi
anno: '1910'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1910
---

**Problema:** [[Problemi/prob_1910_tutti_temi_4|1910 tutti_temi 1910 — Problema 4]] · **Prova:** [[Prove/1910_tutti_temi|1910 Tema di maturità]]

Siano $a<b<c$ i lati in ordine crescente ($c$ è l'ipotenusa). Se $a$, $b$, $c$ sono in progressione geometrica con ragione $q>1$: $b=aq$, $c=aq^2$. Dal teorema di Pitagora:
$$
a^2+a^2q^2=a^2q^4,\qquad 1+q^2=q^4.
$$
Ponendo $t=q^2$: $t^2-t-1=0$, $t=\frac{1+\sqrt{5}}{2}=\varphi$ (rapporto aureo). Dunque $q^2=\varphi$ e $q=\sqrt{\varphi}$.

Il coseno dell'angolo $\alpha$ tra ipotenusa e cateto piccolo è:
$$
\cos\alpha=\frac{a}{c}=\frac{1}{q^2}=\frac{1}{\varphi}=\frac{2}{1+\sqrt{5}}=\frac{\sqrt{5}-1}{2}\approx 0{,}618.
$$
Si noti che $\cos\alpha=\varphi-1=1/\varphi$: il coseno è l'inverso del rapporto aureo.

L'angolo è $\alpha=\arccos\frac{\sqrt{5}-1}{2}\approx 51^\circ\,50'$.

**Lunghezze dei lati.** Se $a+b=s$ è data: $a(1+q)=s$, cioè $a=\frac{s}{1+\sqrt{\varphi}}$. Se $a+c=s$: $a(1+q^2)=s$, cioè $a=\frac{s}{1+\varphi}=\frac{s}{\varphi^2}$. Se $b+c=s$: $a(q+q^2)=s$, cioè $a=\frac{s}{q(\varphi+1)}=\frac{s}{\sqrt{\varphi}\cdot\varphi^2}$ (usiamo $1+\varphi=\varphi^2$).

![[_attachments/prob_1910_tutti_temi_4/prob_1910_tutti_temi_4_fig1.svg]]

\captionof{figure}{Triangolo rettangolo in $C$: cateti $a=CB$ e $b=CA$, ipotenusa $c=AB$. Vale $a^2+b^2=c^2$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.57](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
