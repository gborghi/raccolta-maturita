---
title: 1905 tutti_temi 1905 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1905_tutti_temi_3
of_item: prob_1905_tutti_temi_3
prova_id: prova_1905_tutti_temi
anno: '1905'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1905
---

**Problema:** [[Problemi/prob_1905_tutti_temi_3|1905 tutti_temi 1905 — Problema 3]] · **Prova:** [[Prove/1905_tutti_temi|1905 Tema di maturità]]

Siano $p$, $q$ i cateti e $\ell=\sqrt{p^2+q^2}$ l'ipotenusa. Il cono con raggio di base $\ell$ e apotema $p+q$ ha superficie laterale $\pi\ell(p+q)$. La prima condizione è:
$$
\pi\ell(p+q)=\pi a^2,\qquad\text{ossia}\qquad \ell(p+q)=a^2.
$$
La seconda condizione è $(\ell-p)(\ell-q)=b^2$. Espandendo: $\ell^2-\ell(p+q)+pq=b^2$, cioè $\ell^2-a^2+pq=b^2$ (poiché $\ell(p+q)=a^2$), da cui $pq=a^2-\ell^2+b^2$.

Ma $\ell^2=p^2+q^2=(p+q)^2-2pq$, dunque $\ell^2=(a^2/\ell)^2-2(a^2-\ell^2+b^2)$:
$$
\ell^2=\frac{a^4}{\ell^2}-2a^2+2\ell^2-2b^2,\qquad a^4=\ell^4+2a^2\ell^2+2b^2\ell^2.
$$
Si ottiene un'equazione biquadratica in $\ell$, da cui si risale a $p+q=a^2/\ell$ e $pq=a^2-\ell^2+b^2$. I cateti sono le radici di $t^2-(p+q)t+pq=0$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.53](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
