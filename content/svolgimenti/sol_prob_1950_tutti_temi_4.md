---
title: 1950 Sessione autunnale — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1950_tutti_temi_4
of_item: prob_1950_tutti_temi_4
prova_id: prova_1950_tutti_temi
anno: '1950'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1950
---

**Problema:** [[Problemi/prob_1950_tutti_temi_4|1950 Sessione autunnale — Problema 4]] · **Prova:** [[Prove/1950_tutti_temi|1950 Tema di maturita]]

**Impostazione.** Il settore ha angolo al centro $120^\circ$ e raggio~$r$. Il punto~$C$ si trova sull'arco~$\wideparen{AB}$ e $\angle AOC = 2x$ con $0<2x<120^\circ$, dunque $\angle COB = 120^\circ - 2x$.

I triangoli~$AOC$ e~$COB$ sono isosceli con due lati uguali al raggio~$r$.

**Perimetri.** Nel triangolo~$AOC$: i due lati uguali sono $|OA|=|OC|=r$, la base $|AC|=2r\sin x$ (dalla formula della corda). Il perimetro è $p_1 = 2r + 2r\sin x = 2r(1+\sin x)$.

Nel triangolo~$COB$: $|OC|=|OB|=r$, la base $|CB|=2r\sin(60^\circ-x)$. Il perimetro è $p_2 = 2r + 2r\sin(60^\circ-x) = 2r(1+\sin(60^\circ-x))$.

**Rapporto.** La condizione $p_1/p_2 = k$ diventa:
$$
\frac{1+\sin x}{1+\sin(60^\circ-x)} = k.
$$
Da cui:
$$
1+\sin x = k + k\sin(60^\circ-x) = k + k \left(\frac{\sqrt{3}}{2}\cos x - \frac{1}{2}\sin x\right),

\sin x \left(1+\frac{k}{2}\right) - \frac{k\sqrt{3}}{2}\cos x = k-1.
$$
Scriviamo $\frac{2+k}{2}\sin x - \frac{k\sqrt{3}}{2}\cos x = k-1$, che ha la forma $R\sin(x-\varphi) = k-1$ con:
$$
R = \sqrt{\left(\frac{2+k}{2}\right)^2 + \left(\frac{k\sqrt{3}}{2}\right)^2} = \frac{1}{2}\sqrt{(2+k)^2+3k^2} = \frac{1}{2}\sqrt{4+4k+4k^2} = \sqrt{1+k+k^2},
$$
e $\tan\varphi = \frac{k\sqrt{3}}{2+k}$.

La soluzione è $\sin(x-\varphi) = \frac{k-1}{\sqrt{1+k+k^2}}$.

**Discussione.** Per la simmetria del problema, $k=1$ dà $\sin(x-\varphi)=0$, cioè $x=\varphi$. Con $k=1$: $\tan\varphi = \frac{\sqrt{3}}{3}$, $\varphi=30^\circ$, dunque $x=30^\circ$ e $2x=60^\circ$: $C$ è il punto medio dell'arco.

Per $k\ne 1$ la soluzione esiste se $\frac{|k-1|}{\sqrt{1+k+k^2}}\le 1$, condizione verificata per ogni $k>0$ (poiché $(k-1)^2\le 1+k+k^2$ equivale a $0\le 3k$, sempre vero).

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.92](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
