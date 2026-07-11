---
title: 1930 tutti_temi 1930 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1930_tutti_temi_1
of_item: prob_1930_tutti_temi_1
prova_id: prova_1930_tutti_temi
anno: '1930'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1930
---

**Problema:** [[Problemi/prob_1930_tutti_temi_1|1930 tutti_temi 1930 — Problema 1]] · **Prova:** [[Prove/1930_tutti_temi|1930 Tema di maturita]]

Sia $AB$ un diametro del cerchio di raggio $r$, dunque $|AB| = 2r$. Il trapezio $ABCD$ ha $AB$ come base maggiore e $CD$ parallela ad $AB$. I vertici $C$ e $D$ appartengono alla semicirconferenza.

Parametrizziamo: sia $\alpha = \widehat{BAD}$ e $\beta = \widehat{ABC}$ gli angoli alla base del trapezio, con $\alpha, \beta \in (0, \pi/2)$ e $\alpha + \beta > \pi/2$ (condizione di trapezio). Per il teorema dell'angolo inscritto: $|AD| = 2r\cos\alpha$, $|BC| = 2r\cos\beta$, $|CD| = 2r(\sin\beta - \sin\alpha)$ (se $\beta > \alpha$; altrimenti si scambiano). La somma dei tre lati è:
$$
P_3 = 2r(\cos\alpha + \cos\beta + |\sin\beta - \sin\alpha|).
$$
Per simmetria, consideriamo il trapezio isoscele ($\alpha = \beta = \theta$): $|AD| = |BC| = 2r\cos\theta$, $|CD| = 2r(1 - 2\sin\theta)\cdot\ldots$ No, più semplicemente: ponendo $D$ e $C$ simmetrici, $|CD| = 2r\sin\theta$ dove $\theta$ è l'angolo al centro sotteso da metà di $CD$.

Riprendiamo con coordinate. $A = (-r,0)$, $B = (r,0)$. Siano $D = (r\cos\alpha, r\sin\alpha)$ e $C = (r\cos\beta, r\sin\beta)$ con $0 < \beta < \alpha < \pi$. Per il perimetro:
$$
P = 2r + |AD| + |DC| + |CB|.
$$
Per $k$: $|AD| + |DC| + |CB| = 2kr$, cioè $k = \frac{|AD|+|DC|+|CB|}{2r}$.

**Massimizzazione del perimetro.** Nel caso isoscele con $\alpha = \pi - \beta$, poniamo $\theta = \alpha$: $D = (-r\cos\theta, r\sin\theta)$, $C = (r\cos\theta, r\sin\theta)$. Allora $|CD| = 2r\cos\theta$, $|AD| = |BC| = 2r\sin\frac{\pi - \theta}{2}\cdot\ldots$ Usiamo il risultato noto: $|AD|^2 = (r\cos\theta + r)^2 + r^2\sin^2\theta = 2r^2(1+\cos\theta)$, dunque $|AD| = 2r\cos(\theta/2)$.

La somma è $P_3(\theta) = 4r\cos(\theta/2) + 2r\cos\theta$ con $\theta \in (0,\pi)$.

$P_3'(\theta) = -2r\sin(\theta/2) - 2r\sin\theta = -2r\sin(\theta/2)(1 + 2\cos(\theta/2) \cdot 2) $... Più direttamente: $P_3'(\theta) = -2r\sin(\theta/2) - 2r\sin\theta = -2r[\sin(\theta/2) + 2\sin(\theta/2)\cos(\theta/2)] = -2r\sin(\theta/2)[1 + 2\cos(\theta/2)]$. Ponendo $P_3' = 0$: $\sin(\theta/2) = 0$ (cioè $\theta = 0$, estremo) oppure $\cos(\theta/2) = -1/2$, cioè $\theta/2 = 2\pi/3$, $\theta = 4\pi/3$, fuori dall'intervallo.

Poiché il caso isoscele non è necessariamente il massimo del perimetro, applichiamo il metodo dei moltiplicatori di Lagrange o usiamo il risultato classico: per un poligono inscritto in un cerchio con un lato fissato, il perimetro è massimo quando il poligono è regolare. Con un lato (il diametro) fissato a $2r$, il ``poligono regolare'' è il semiesagono: i tre lati rimanenti sono ciascuno pari a $r$ (lato dell'esagono regolare), con perimetro $P_3 = 3r$ e $k = 3/2$.

**Area massima.** L'area del trapezio inscritto in semicerchio con base il diametro è $S = \frac{1}{2}(2r + |CD|) \cdot h$, che per il semiesagono regolare vale $S = \frac{1}{2}(2r + r)\cdot\frac{r\sqrt{3}}{2} = \frac{3r^2\sqrt{3}}{4}$. Si dimostra che questo è il valore massimo: fra tutti i trapezi isosceli, $S(\theta) = r^2\sin\theta(1 + \cos\theta)$ ha massimo per $\theta = \pi/3$, che corrisponde al semiesagono regolare.

![[_attachments/prob_1930_tutti_temi_1/prob_1930_tutti_temi_1_fig1.svg]]

\captionof{figure}{Semiesagono regolare inscritto: perimetro $=5r$ (massimo), area $=\frac{3r^2\sqrt{3}}{4}$ (massima).}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.78](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
