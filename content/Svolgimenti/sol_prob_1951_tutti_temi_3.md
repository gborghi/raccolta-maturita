---
title: 1951 Sessione autunnale — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1951_tutti_temi_3
of_item: prob_1951_tutti_temi_3
prova_id: prova_1951_tutti_temi
anno: '1951'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1951
---

**Problema:** [[Problemi/prob_1951_tutti_temi_3|1951 Sessione autunnale — Problema 3]] · **Prova:** [[Prove/1951_tutti_temi|1951 Tema di maturita]]

**Coordinate.** Poniamo $O=(0,0)$, $A=(2,0)$, $B=(0,\sqrt{3})$. L'ipotenusa ha lunghezza $|AB|=\sqrt{4+3}=\sqrt{7}$. Un punto~$P$ su~$AB$ si scrive come $P=(2-2t,\; \sqrt{3}\,t)$ per $t\in[0,1]$.

Il punto medio di~$OB$ è $M=(0,\sqrt{3}/2)$.

La distanza di~$P$ dal cateto~$OA$ (asse~$x$) è $d_1 = \sqrt{3}\,t$.

La distanza $|PM| = \sqrt{(2-2t)^2+(\sqrt{3}\,t-\sqrt{3}/2)^2} = \sqrt{4(1-t)^2+3(t-1/2)^2}$.

Sviluppando: $4(1-2t+t^2)+3(t^2-t+1/4) = 4-8t+4t^2+3t^2-3t+3/4 = 7t^2-11t+19/4$.

La condizione è $\sqrt{3}\,t + 2\sqrt{7t^2-11t+19/4} = k$.

Isolando la radice: $2\sqrt{7t^2-11t+19/4} = k - \sqrt{3}\,t$. Elevando al quadrato (con $k>\sqrt{3}\,t$):
$$
4(7t^2-11t+19/4) = k^2 - 2k\sqrt{3} t + 3t^2,

28t^2-44t+19 = k^2 - 2k\sqrt{3} t + 3t^2,

25t^2 - (44-2k\sqrt{3})t + 19-k^2 = 0.
$$
**Discussione.** La soluzione~$t$ deve appartenere a~$[0,1]$. Il discriminante è $\Delta = (44-2k\sqrt{3})^2 - 100(19-k^2) = 1936-176k\sqrt{3}+12k^2-1900+100k^2 = 112k^2-176k\sqrt{3}+36$.

Per $\Delta\ge 0$: $112k^2-176k\sqrt{3}+36\ge 0$, cioè $28k^2-44k\sqrt{3}+9\ge 0$.

Calcolando il discriminante di quest'ultima: $\Delta' = 44^2\cdot 3 - 4\cdot 28\cdot 9 = 5808-1008=4800$. Le radici sono $k=\frac{44\sqrt{3}\pm\sqrt{4800}}{56}$. Dunque il problema ha soluzione per valori di~$k$ esterni all'intervallo tra queste radici, con la verifica aggiuntiva $0\le t\le 1$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.93](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
