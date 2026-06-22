---
title: 1936 Sessione estiva — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1936_tutti_temi_1
of_item: prob_1936_tutti_temi_1
prova_id: prova_1936_tutti_temi
anno: '1936'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1936
---

**Problema:** [[Problemi/prob_1936_tutti_temi_1|1936 Sessione estiva — Problema 1]] · **Prova:** [[Prove/1936_tutti_temi|1936 Tema di maturita]]

**Impostazione del sistema di riferimento.** Poniamo $A$ nell'origine e la retta $AB$ sull'asse~$x$ positivo. Allora $B=(2r,0)$, e poiché $BC=4r$, $C=(6r,0)$. I centri delle due circonferenze sono i punti medi dei rispettivi diametri: $O=(r,0)$ con raggio~$r$ e $O'=(4r,0)$ con raggio~$2r$.

La semiretta $AX$ uscente da $A$ con angolo $\varphi$ rispetto all'asse~$x$ ha equazione parametrica $P=t(\cos\varphi,\sin\varphi)$ con $t\geq 0$.

![[_attachments/prob_1936_tutti_temi_1/prob_1936_tutti_temi_1_fig1.svg]]

**Calcolo di $AM$.** Intersechiamo la semiretta con la prima circonferenza $(x-r)^{2}+y^{2}=r^{2}$. Sostituendo $x=t\cos\varphi$, $y=t\sin\varphi$:
$$
t^{2}-2rt\cos\varphi=0 \quad\Longrightarrow\quad t(t-2r\cos\varphi)=0.
$$
Scartando $t=0$ (il punto~$A$ stesso), si ottiene $\boxed{AM=2r\cos\varphi}$.

**Calcolo di $O'Q'$.** La proiezione di $O'=(4r,0)$ sulla retta $AX$ (di vettore direttore $(\cos\varphi,\sin\varphi)$) ha distanza
$$
O'Q' = \bigl|(4r,0)\times(\cos\varphi,\sin\varphi)\bigr| = 4r\sin\varphi, \quad\text{dunque } \boxed{O'Q'=4r\sin\varphi}.
$$
**Intersezione con la seconda circonferenza.** L'equazione $(x-4r)^{2}+y^{2}=4r^{2}$ con la parametrizzazione dà:
$$
t^{2}-8rt\cos\varphi+16r^{2}-4r^{2}=0 \quad\Longrightarrow\quad t^{2}-8rt\cos\varphi+12r^{2}=0.
$$
Le due soluzioni (i punti $N$ e $P$) sono:
$$
t = 4r\cos\varphi \pm \sqrt{16r^{2}\cos^{2}\varphi-12r^{2}} = 4r\cos\varphi \pm 2r\sqrt{4\cos^{2}\varphi-3}.
$$
Affinché la semiretta intersechi la seconda circonferenza in due punti reali serve $4\cos^{2}\varphi\geq 3$, cioè $\cos\varphi\geq\frac{\sqrt{3}}{2}$, ossia $\varphi\leq 30^{\circ}$. Il punto più vicino ad~$A$ è $N$ (segno~$-$):
$$
AN = 4r\cos\varphi - 2r\sqrt{4\cos^{2}\varphi-3}.
$$
**Lunghezza di $MN$.** Sottraendo:
$$
MN = AN - AM = 4r\cos\varphi - 2r\sqrt{4\cos^{2}\varphi-3} - 2r\cos\varphi = 2r\cos\varphi - 2r\sqrt{4\cos^{2}\varphi-3}.
$$
**Condizione $MN=a$.** Dobbiamo risolvere
$$
2r\cos\varphi - 2r\sqrt{4\cos^{2}\varphi-3} = a.
$$
Isolando la radice e elevando al quadrato:
$$
2r\sqrt{4\cos^{2}\varphi-3} = 2r\cos\varphi - a, \quad\text{con } 2r\cos\varphi > a,

4r^{2}(4\cos^{2}\varphi-3) = 4r^{2}\cos^{2}\varphi - 4ar\cos\varphi + a^{2},

12r^{2}\cos^{2}\varphi + 4ar\cos\varphi - (12r^{2}+a^{2}) = 0.
$$
Questa è un'equazione di secondo grado in $\cos\varphi$. La **discussione** richiede che la soluzione soddisfi $\frac{\sqrt{3}}{2}\leq\cos\varphi\leq 1$ (affinché $0\leq\varphi\leq 30^{\circ}$) e $2r\cos\varphi > a$ (per la condizione di realtà). Il problema ammette soluzione per $0<a\leq 2r(1-\sqrt{1/4})=2r\bigl(1-\frac{1}{2}\bigr)=r$, cioè $\boxed{0 < a \leq r}$.

![[_attachments/prob_1936_tutti_temi_1/prob_1936_tutti_temi_1_fig2.svg]]

\captionof{figure}{Cubica $y=x^3-3x$: massimo locale $M(-1,2)$ e minimo locale $m(1,-2)$.}

![[_attachments/prob_1936_tutti_temi_1/prob_1936_tutti_temi_1_fig3.svg]]

\captionof{figure}{Parabola $y=x^2$ con tangente $y=2x-1$ nel punto $T(1,1)$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.82](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
