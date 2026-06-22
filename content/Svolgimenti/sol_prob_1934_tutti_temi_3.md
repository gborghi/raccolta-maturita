---
title: 1934 Sessione autunnale — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1934_tutti_temi_3
of_item: prob_1934_tutti_temi_3
prova_id: prova_1934_tutti_temi
anno: '1934'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1934
---

**Problema:** [[Problemi/prob_1934_tutti_temi_3|1934 Sessione autunnale — Problema 3]] · **Prova:** [[Prove/1934_tutti_temi|1934 Tema di maturita]]

**Impostazione.** Poniamo $A$ nell'origine, $B=(1,0)$ (sull'asse~$x$) e $C=(0,2)$ (sull'asse~$y$). L'ipotenusa $BC$ ha vettore $\overrightarrow{BC}=C-B=(-1,2)$ e lunghezza $|BC|=\sqrt{1+4}=\sqrt{5}$.

La retta $r$ passante per $A$ fa un angolo $\theta$ con l'asse~$x$, con versore $\hat{u}=(\cos\theta,\sin\theta)$. La condizione ``non secante il triangolo'' impone che $r$ stia nel semipiano opposto al triangolo rispetto all'asse~$x$: poiché il triangolo è nel primo quadrante, la retta deve avere $\theta\in(\pi/2,\pi)$ oppure, equivalentemente, formare un angolo $\alpha=\theta-\pi/2$ con $AC$ (asse~$y$). Qui considereremo $\theta$ come angolo dalla direzione di $AC$, cioè la retta~$r$ forma un angolo $\alpha$ con il cateto~$AC$.

**Proiezione dell'ipotenusa.** La lunghezza della proiezione ortogonale di $BC$ sulla retta~$r$ è
$$
B'C' = \bigl|\overrightarrow{BC}\cdot\hat{u}\bigr| = |{-\cos\theta+2\sin\theta}|.
$$
Usando la formula armonica: $-\cos\theta+2\sin\theta = \sqrt{5}\sin(\theta-\varphi)$, dove $\tan\varphi=\frac{1}{2}$ (cioè $\varphi=\arctan(1/2)\approx 26{,}57^{\circ}$).

La condizione $B'C'=k$ diventa
$$
|\sin(\theta-\varphi)| = \frac{k}{\sqrt{5}}.
$$
**Discussione.** Poiché $|\sin|\leq 1$, il problema ha soluzione solo per $k\leq\sqrt{5}$. Per ogni valore ammissibile di $k$, l'equazione $\sin(\theta-\varphi)=\pm k/\sqrt{5}$ dà in generale quattro soluzioni per $\theta\in[0,2\pi)$, ma la condizione geometrica (retta non secante il triangolo) ne seleziona alcune.

\textbf{Caso 1: $k=1+\sqrt{3/2}$.} Si verifica che $k/\sqrt{5}=\sin(\pi/3+\varphi)$ (dopo i calcoli), e la condizione geometrica seleziona un'unica soluzione corrispondente a una retta inclinata di $60^{\circ}$ su $AC$.

\textbf{Caso 2: $k=\sqrt{3/2}$.} Si trovano due soluzioni ammissibili, una delle quali corrisponde a un'inclinazione di $45^{\circ}$ su $AC$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.80](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
