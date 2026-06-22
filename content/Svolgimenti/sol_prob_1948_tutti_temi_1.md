---
title: 1948 tutti_temi 1948 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1948_tutti_temi_1
of_item: prob_1948_tutti_temi_1
prova_id: prova_1948_tutti_temi
anno: '1948'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1948
---

**Problema:** [[Problemi/prob_1948_tutti_temi_1|1948 tutti_temi 1948 — Problema 1]] · **Prova:** [[Prove/1948_tutti_temi|1948 Tema di maturita]]

**Angolo sotteso dalla corda.** La corda~$AB$ dista~$r/2$ dal centro; se~$M$ è il punto medio di~$AB$, allora $|OM|=r/2$ e $|AM|=\sqrt{r^2-r^2/4}=\frac{r\sqrt{3}}{2}$. Pertanto $|AB|=r\sqrt{3}$.

L'angolo al centro sotteso da~$AB$ vale $2\arcsin\frac{|AM|}{r}=2\arcsin\frac{\sqrt{3}}{2}=120^\circ$. L'angolo alla circonferenza dal lato del segmento minore (che non contiene il centro) è l'angolo supplementare di quello inscritto dal lato opposto: l'angolo inscritto nel segmento maggiore è~$60^\circ$, dunque l'angolo~$A\widehat{C}B$ inscritto nel segmento minore vale~$120^\circ$.

**Lati del triangolo.** Applicando il teorema dei seni al triangolo~$ABC$ con $A\widehat{C}B=120^\circ$ e raggio della circonferenza circoscritta~$r$:
$$
\frac{|AB|}{\sin 120^\circ} = 2r, \quad \text{(verificato: } r\sqrt{3}/(\sqrt{3}/2)=2r).
$$
Dunque $|AC| = 2r\sin(\angle ABC)$ e $|BC| = 2r\sin(\angle BAC) = 2r\sin x$.

Poiché gli angoli del triangolo sommano a~$180^\circ$: $\angle ABC = 180^\circ - 120^\circ - x = 60^\circ - x$ (con $0<x<60^\circ$). Dunque $|AC|=2r\sin(60^\circ-x)$.

**Equazione risolvente.** Sostituendo nella condizione:
$$
2\cdot 2r\sin(60^\circ-x) + 3\cdot 2r\sin x = 2kr,

4\sin(60^\circ - x) + 6\sin x = 2k,

4 \left(\frac{\sqrt{3}}{2}\cos x - \frac{1}{2}\sin x\right) + 6\sin x = 2k,

2\sqrt{3}\cos x + 4\sin x = 2k, \qquad \sqrt{3}\cos x + 2\sin x = k.
$$
Scriviamo nella forma armonica: $\sqrt{3}\cos x + 2\sin x = \sqrt{3+4}\sin(x+\varphi) = \sqrt{7}\sin(x+\varphi)$, dove $\tan\varphi = \sqrt{3}/2$, cioè $\varphi = \arctan(\sqrt{3}/2)\approx 40{,}9^\circ$. Dunque:
$$
\sin(x+\varphi) = \frac{k}{\sqrt{7}}.
$$
**Discussione.** La soluzione esiste se $|k|\le\sqrt{7}$, cioè $0<k\le\sqrt{7}$. Inoltre, per $C$ nel segmento minore, occorre $0<x<60^\circ$, dunque $\varphi < x+\varphi < 60^\circ+\varphi$. In questo intervallo il seno varia da $\sin\varphi = \sqrt{3}/\sqrt{7}$ a $\sin(60^\circ+\varphi)$. Dunque~$k$ varia nell'intervallo $\left[\sqrt{3}, \sqrt{7}\sin(60^\circ+\varphi)\right]$.

Per ogni valore ammissibile di~$k$ si ottiene $x = \arcsin\!\left(\frac{k}{\sqrt{7}}\right)-\varphi$, e poi $|AC|=2r\sin(60^\circ-x)$, $|BC|=2r\sin x$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.90](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
