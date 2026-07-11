---
title: 1972 tutti_temi 1972 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1972_tutti_temi_1
of_item: prob_1972_tutti_temi_1
prova_id: prova_1972_tutti_temi
anno: '1972'
pdf: tutti_temi.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/1972
---

**Problema:** [[Problemi/prob_1972_tutti_temi_1|1972 tutti_temi 1972 — Problema 1]] · **Prova:** [[Prove/1972_tutti_temi|1972 Tema di maturita]]

**Circonferenza.** Il centro ha coordinate $(h,4)$ con $h$ da determinare. Dall'equidistanza da~$A$ e~$B$: $(h+2)^2+16=(h-4)^2+16$, $h^2+4h+4=h^2-8h+16$, $12h=12$, $h=1$. Il centro è $(1,4)$ e il raggio $r=\sqrt{9+16}=5$. Equazione: $(x-1)^2+(y-4)^2=25$.

Il diametro parallelo all'asse~$x$ passa per $y=4$: $(x-1)^2=25$, $x=6$ o $x=-4$. Estremi: $D(-4,4)$ e $E(6,4)$.

**Parabole.** $y=ax^2+bx+c$ con $c=4$ (passaggio per $C(0,4)$). Tangenza all'asse~$x$: $\Delta=b^2-16a=0$, dunque $a=b^2/16$. La parabola è $y=\frac{b^2}{16}x^2+bx+4=\frac{(bx+8)^2}{16}$, tangente in $x=-8/b$.

Passaggio per $D(-4,4)$: $4=\frac{(-4b+8)^2}{16}=\frac{(4b-8)^2}{16}$, $(4b-8)^2=64$, $4b-8=\pm 8$: $b=4$ o $b=0$.
Per $b=0$: $y=4$ (degenere). Per $b=4$: $a=1$, parabola $y=x^2+4x+4=(x+2)^2$.

Passaggio per $E(6,4)$: $4=\frac{(6b+8)^2}{16}$, $(6b+8)^2=64$, $6b+8=\pm 8$: $b=0$ o $b=-8/3$.
Per $b=-8/3$: $a=4/9$, parabola $y=\frac{4}{9}x^2-\frac{8}{3}x+4=\frac{4}{9}(x-3)^2$.

**Area.** La regione è limitata da $y_1=(x+2)^2$ (tangente in $x=-2$), $y_2=\frac{4}{9}(x-3)^2$ (tangente in $x=3$) e $y=0$. L'intersezione delle due parabole: $(x+2)^2=\frac{4}{9}(x-3)^2$, $x+2=\pm\frac{2}{3}(x-3)$.

Caso~$+$: $x+2=\frac{2x-6}{3}$, $3x+6=2x-6$, $x=-12$. Caso~$-$: $x+2=-\frac{2x-6}{3}$, $3x+6=-2x+6$, $5x=0$, $x=0$ ($y=4$).

Dunque le parabole si incontrano in $(0,4)$ e $(-12,100)$. L'area tra le curve e l'asse~$x$ nella regione tra $x=-2$ e $x=3$:
$$
S = \int_{-2}^{0}(x+2)^2 \de x + \int_{0}^{3}\frac{4}{9}(x-3)^2 \de x = \frac{8}{3}+4 = \frac{20}{3}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.109](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
