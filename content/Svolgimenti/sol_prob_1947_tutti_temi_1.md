---
title: 1947 tutti_temi 1947 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1947_tutti_temi_1
of_item: prob_1947_tutti_temi_1
prova_id: prova_1947_tutti_temi
anno: '1947'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1947
---

**Problema:** [[Problemi/prob_1947_tutti_temi_1|1947 tutti_temi 1947 — Problema 1]] · **Prova:** [[Prove/1947_tutti_temi|1947 Tema di maturita]]

**Tangenza al cerchio.** Il cerchio ha equazione $x^2+y^2=5$. Perché la retta $x+2y-h=0$ sia tangente, la distanza dal centro deve essere uguale al raggio:
$$
\frac{|h|}{\sqrt{1^2+2^2}} = \sqrt{5}, \qquad \frac{|h|}{\sqrt{5}} = \sqrt{5}, \qquad h = \pm 5.
$$
Poiché il punto di tangenza deve trovarsi nel primo quadrante, occorre $h>0$, dunque $h=5$.

Analogamente per la retta $2x+y-k=0$:
$$
\frac{|k|}{\sqrt{4+1}} = \sqrt{5}, \qquad k = \pm 5.
$$
Anche qui, per avere il punto di tangenza nel primo quadrante, scegliamo $k=5$.

**Punti di contatto.** Il punto di tangenza~$A$ sulla retta $x+2y-5=0$ si trova intersecando la retta con il raggio perpendicolare. La retta $x+2y=5$ ha direzione $(2,-1)$, dunque il raggio verso~$A$ ha direzione $(1,2)$: il punto di tangenza è l'intersezione della retta parametrica $(t, 2t)$ con la tangente: $t+4t=5$, $t=1$. Pertanto $A=(1,2)$.

Per~$B$, la retta $2x+y-5=0$ ha direzione $(1,-2)$; il raggio verso~$B$ ha direzione $(2,1)$: parametrizzo $(2t, t)$, quindi $4t+t=5$, $t=1$, e $B=(2,1)$.

**Intersezione delle tangenti.** Risolviamo il sistema:
$$
\begin{cases} x + 2y = 5 \ 2x + y = 5 \end{cases}
$$
Sommando: $3x+3y=10$, $x+y=\frac{10}{3}$. Sottraendo la prima dalla seconda: $x-y=0$, $x=y$. Dunque $x=y=\frac{5}{3}$ e $C=\!\left(\frac{5}{3},\frac{5}{3}\right)$.

![[_attachments/prob_1947_tutti_temi_1/prob_1947_tutti_temi_1_fig1.svg]]

\captionof{figure}{Cerchio $x^2+y^2=5$ con le tangenti per $A(1,2)$ e $B(2,1)$ e il loro punto di intersezione~$C$.}

\textbf{Angolo $B\widehat{O}A$.} I vettori $\overrightarrow{OA}=(1,2)$ e $\overrightarrow{OB}=(2,1)$ formano un angolo il cui coseno vale:
$$
\cos(B\widehat{O}A) = \frac{\overrightarrow{OA}\cdot\overrightarrow{OB}}{|\overrightarrow{OA}| |\overrightarrow{OB}|} = \frac{1\cdot 2+2\cdot 1}{\sqrt{5}\cdot\sqrt{5}} = \frac{4}{5}.
$$
Dalla relazione fondamentale: $\sin(B\widehat{O}A)=\sqrt{1-\frac{16}{25}}=\frac{3}{5}$, e quindi
$$
\tan(B\widehat{O}A) = \frac{3/5}{4/5} = \frac{3}{4}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.89](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
