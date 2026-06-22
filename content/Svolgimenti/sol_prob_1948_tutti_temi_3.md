---
title: 1948 tutti_temi 1948 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1948_tutti_temi_3
of_item: prob_1948_tutti_temi_3
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

**Problema:** [[Problemi/prob_1948_tutti_temi_3|1948 tutti_temi 1948 — Problema 3]] · **Prova:** [[Prove/1948_tutti_temi|1948 Tema di maturita]]

**Impostazione.** Poniamo il centro della circonferenza in~$O$, con $A=(-r,0)$ e $B=(r,0)$, cosicché la circonferenza ha equazione $x^2+y^2=r^2$. Il punto~$P=(p,0)$ si trova sul prolungamento di~$AB$ oltre~$B$, dunque $p>r$.

La tangente in~$A(-r,0)$ alla circonferenza è la retta verticale $x=-r$.

**Tangente da $P$ alla circonferenza.** La lunghezza della tangente da~$P$ è $|PT|=\sqrt{p^2-r^2}$. I punti di tangenza si trovano risolvendo: la tangente da $P(p,0)$ tocca la circonferenza in~$T$ con $|PT|^2 = p^2-r^2$. Le coordinate di~$T$ sono $T=\!\left(\frac{r^2}{p}, \frac{r\sqrt{p^2-r^2}}{p}\right)$ (scegliamo il punto nel semipiano superiore).

**Retta $PT$ e intersezione con $x=-r$.** La retta per $P(p,0)$ e $T\!\left(\frac{r^2}{p}, \frac{r\sqrt{p^2-r^2}}{p}\right)$ ha pendenza:
$$
m = \frac{r\sqrt{p^2-r^2}/p}{r^2/p - p} = \frac{r\sqrt{p^2-r^2}}{r^2-p^2} = -\frac{r\sqrt{p^2-r^2}}{p^2-r^2} = -\frac{r}{\sqrt{p^2-r^2}}.
$$
Equazione: $y = -\frac{r}{\sqrt{p^2-r^2}}(x-p)$. Per $x=-r$:
$$
y_Q = -\frac{r}{\sqrt{p^2-r^2}}(-r-p) = \frac{r(p+r)}{\sqrt{p^2-r^2}}.
$$
Dunque $Q = \!\left(-r,\; \frac{r(p+r)}{\sqrt{p^2-r^2}}\right)$.

**Calcolo delle distanze.**
$$
|PT|^2 = p^2-r^2.

|TQ|^2 = \left(-r-\frac{r^2}{p}\right)^2 + \left(\frac{r(p+r)}{\sqrt{p^2-r^2}}-\frac{r\sqrt{p^2-r^2}}{p}\right)^2.
$$
Semplifichiamo. La prima componente: $-r - \frac{r^2}{p} = -\frac{r(p+r)}{p}$.

La seconda componente: $\frac{r(p+r)}{\sqrt{p^2-r^2}} - \frac{r\sqrt{p^2-r^2}}{p} = \frac{r(p+r)p - r(p^2-r^2)}{p\sqrt{p^2-r^2}} = \frac{r[p^2+rp-p^2+r^2]}{p\sqrt{p^2-r^2}} = \frac{r^2(p+r)}{p\sqrt{p^2-r^2}}$.

Dunque:
$$
|TQ|^2 = \frac{r^2(p+r)^2}{p^2} + \frac{r^4(p+r)^2}{p^2(p^2-r^2)} = \frac{r^2(p+r)^2}{p^2} \left(1 + \frac{r^2}{p^2-r^2}\right) = \frac{r^2(p+r)^2}{p^2}\cdot\frac{p^2}{p^2-r^2} = \frac{r^2(p+r)^2}{p^2-r^2}.
$$
Poiché $|PA|^2 = (p+r)^2$, la condizione diventa:
$$
(p^2-r^2) + \frac{r^2(p+r)^2}{p^2-r^2} = k(p+r)^2.
$$
Dividiamo per $(p+r)$ ($p>r>0$, dunque $p+r>0$):
$$
(p-r) + \frac{r^2(p+r)}{p^2-r^2} = k(p+r), \qquad (p-r) + \frac{r^2}{p-r} = k(p+r).
$$
Posto $t = p-r > 0$, con $p+r = t+2r$:
$$
t + \frac{r^2}{t} = k(t+2r), \qquad t^2 + r^2 = kt(t+2r), \qquad t^2(1-k) - 2krt + r^2 = 0.
$$
**Discussione.** Se $k\ne 1$: $t = \frac{2kr \pm \sqrt{4k^2r^2 - 4(1-k)r^2}}{2(1-k)} = \frac{2kr \pm 2r\sqrt{k^2-1+k}}{2(1-k)} = \frac{r(k\pm\sqrt{k^2+k-1})}{1-k}$.

La soluzione è reale se $k^2+k-1\ge 0$, cioè $k\ge\frac{-1+\sqrt{5}}{2}$. Inoltre $t>0$ impone vincoli su~$k$: per $0<k<1$ la soluzione positiva richiede $k+\sqrt{k^2+k-1}>0$ (sempre vero) e il denominatore è positivo.

Per $k=1$: $-2rt+r^2=0$, $t=r/2$, $p=3r/2$, unica soluzione.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.90](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
