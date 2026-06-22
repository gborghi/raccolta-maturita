---
title: 1882 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1882_tutti_temi_2
of_item: prob_1882_tutti_temi_2
prova_id: prova_1882_tutti_temi
anno: '1882'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1882
---

**Problema:** [[Problemi/prob_1882_tutti_temi_2|1882 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1882_tutti_temi|1882 Tema di maturità]]

Due cerchi di raggi $a$ e~$b$ tangenti esternamente hanno centri a distanza $d=a+b$.

**Tangenti esterne comuni.** La tangente esterna comune tocca i due cerchi dallo stesso lato. Il punto di intersezione delle due tangenti esterne comuni si trova sull'asse dei centri, a distanza $\frac{da}{a-b}$ dal centro del cerchio maggiore (se $a\neq b$).

Per simmetria, il semiangolo $\alpha$ tra l'asse dei centri e una tangente esterna soddisfa:
$$
\sin\alpha=\frac{a-b}{a+b}.
$$
L'angolo tra le due tangenti esterne comuni è $2\alpha$.

**Tangenti interne comuni** (che passano tra i due cerchi). Il semiangolo $\beta$ soddisfa:
$$
\sin\beta=\frac{a+b}{d'}=\frac{a+b}{a+b}=1 \quad \text{(non esiste per cerchi tangenti)}.
$$
Per cerchi tangenti esternamente, le tangenti interne si riducono alla tangente comune nel punto di tangenza. Quindi l'angolo rilevante è quello tra le tangenti esterne:
$$
\boxed{\sin 2\alpha=2\sin\alpha\cos\alpha=\frac{2(a-b)}{a+b}\cdot\frac{\sqrt{(a+b)^2-(a-b)^2}}{a+b}=\frac{2(a-b)\cdot 2\sqrt{ab}}{(a+b)^2}=\frac{4(a-b)\sqrt{ab}}{(a+b)^2}}.
$$
Nel caso $a=b$ (cerchi uguali), $\sin 2\alpha=0$: le tangenti esterne sono parallele.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.47](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
