---
title: 1910 tutti_temi 1910 — Problema 5 — Svolgimento
tipo: soluzione
item_id: sol_prob_1910_tutti_temi_5
of_item: prob_1910_tutti_temi_5
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

**Problema:** [[Problemi/prob_1910_tutti_temi_5|1910 tutti_temi 1910 — Problema 5]] · **Prova:** [[Prove/1910_tutti_temi|1910 Tema di maturità]]

Sia $d$ la distanza dal centro $O$ al piede della corda. La semicorda è $\ell=\sqrt{R^2-d^2}$ e la corda $CD=2\ell$.

I triangoli $ACD$ e $BCD$ hanno la stessa base $CD=2\ell$ e altezze rispettive $R+d$ e $R-d$ (le distanze dei punti $A$ e $B$ dalla corda). Le aree sono:
$$
S_1=\frac{1}{2}\cdot 2\ell\cdot(R+d)=\ell(R+d),\quad S_2=\frac{1}{2}\cdot 2\ell\cdot(R-d)=\ell(R-d).
$$
La differenza è $S_1-S_2=2\ell d=2d\sqrt{R^2-d^2}$. La condizione è:
$$
2d\sqrt{R^2-d^2}=mR^2.
$$
Elevando al quadrato: $4d^2(R^2-d^2)=m^2R^4$, $4d^4-4R^2d^2+m^2R^4=0$:
$$
d^2=\frac{4R^2\pm\sqrt{16R^4-16m^2R^4}}{8}=\frac{R^2(1\pm\sqrt{1-m^2})}{2}.
$$
Il problema è possibile se $m\le 1$.

![[_attachments/prob_1910_tutti_temi_5/prob_1910_tutti_temi_5_fig1.svg]]

\captionof{figure}{Diametro $AB$, corda $CD$ perpendicolare a distanza $d$ dal centro.}

\textbf{Caso $m=\sqrt{3}/4$.} $d^2=\frac{R^2(1\pm\sqrt{1-3/16})}{2}=\frac{R^2(1\pm\sqrt{13/16})}{2}$. L'angolo $\alpha$ sotteso dalla corda al centro soddisfa $\sin(\alpha/2)=\ell/R=\sqrt{1-d^2/R^2}$. Per $m=\sqrt{3}/4$, si verifica che una delle soluzioni dà $d=R\sqrt{3}/2$, cioè $\ell=R/2$, dunque $\sin(\alpha/2)=1/2$ e $\alpha=60^\circ$. L'altra soluzione dà $d=R/2$, $\ell=R\sqrt{3}/2$, $\sin(\alpha/2)=\sqrt{3}/2$ e $\alpha=120^\circ$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.57](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
