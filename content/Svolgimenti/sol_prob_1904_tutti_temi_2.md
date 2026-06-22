---
title: 1904 tutti_temi 1904 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1904_tutti_temi_2
of_item: prob_1904_tutti_temi_2
prova_id: prova_1904_tutti_temi
anno: '1904'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1904
---

**Problema:** [[Problemi/prob_1904_tutti_temi_2|1904 tutti_temi 1904 — Problema 2]] · **Prova:** [[Prove/1904_tutti_temi|1904 Tema di maturita]]

Sia $\ell$ l'ipotenusa fissa. Poniamo $p=\ell\cos\theta$, $q=\ell\sin\theta$ i cateti ($\theta\in\,]0,\pi/2[$). Ruotando intorno all'ipotenusa, l'altezza relativa è $h=pq/\ell=\ell\sin\theta\cos\theta=\frac{\ell}{2}\sin 2\theta$ e funge da raggio della base comune dei due coni. Le proiezioni dei cateti sull'ipotenusa sono $p'=p^2/\ell=\ell\cos^2\theta$ e $q'=q^2/\ell=\ell\sin^2\theta$.

Le generatrici dei due coni sono $p$ e $q$, dunque le superfici laterali sono $S_1=\pi h p=\pi\ell^2\sin\theta\cos^2\theta$ e $S_2=\pi h q=\pi\ell^2\sin^2\theta\cos\theta$. La superficie totale generata dai cateti è:
$$
S=S_1+S_2=\pi\ell^2\sin\theta\cos\theta(\cos\theta+\sin\theta)=\frac{\pi\ell^2}{2}\sin 2\theta(\cos\theta+\sin\theta).
$$
Per massimizzare, deriviamo rispetto a $\theta$ e poniamo uguale a zero. Con $u=\cos\theta+\sin\theta$ e $\sin 2\theta=u^2-1$, la funzione diventa $f(u)=(u^2-1)u=u^3-u$ per $u\in\,]1,\sqrt{2}]$: $f'(u)=3u^2-1=0$ dà $u=1/\sqrt{3}$, ma è fuori intervallo. Dunque il massimo è al bordo $u=\sqrt{2}$, cioè $\theta=\pi/4$: il triangolo isoscele.

Per la seconda parte, $S_1-S_2=\pi\ell^2\sin\theta\cos\theta(\cos\theta-\sin\theta)$ e l'area del cerchio comune è $\pi h^2=\frac{\pi\ell^2}{4}\sin^2 2\theta$. Il quoziente è:
$$
\frac{S_1-S_2}{\pi h^2}=\frac{\cos\theta-\sin\theta}{\frac{\ell}{2}\sin 2\theta\cdot\sin\theta\cos\theta}=\frac{2(\cos\theta-\sin\theta)}{\ell\sin^2 2\theta/2}.
$$
Imponendo il valore $\frac{2}{3}\sqrt{10}$ si determina $\theta$.

![[_attachments/prob_1904_tutti_temi_2/prob_1904_tutti_temi_2_fig1.svg]]

\captionof{figure}{Triangolo $ABC$ con altezza $CH$ relativa al lato $AB$ (piede perpendicolare $H$).}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.52](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
