---
title: 1913 Sessione autunnale — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1913_tutti_temi_4
of_item: prob_1913_tutti_temi_4
prova_id: prova_1913_tutti_temi
anno: '1913'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1913
---

**Problema:** [[Problemi/prob_1913_tutti_temi_4|1913 Sessione autunnale — Problema 4]] · **Prova:** [[Prove/1913_tutti_temi|1913 Tema di maturita]]

Tronco di cono con raggi $R$, $r$ e altezza $h$. Due vincoli:

**Vincolo 1:** $V_{\text{tronco}}=V_{\text{sfera di raggio }h}$:
$$
\frac{\pi h}{3}(R^2+Rr+r^2)=\frac{4\pi h^3}{3}, \qquad R^2+Rr+r^2=4h^2.
$$
**Vincolo 2:** Cono di base $\pi R^2$ e altezza $r$ = cilindro di base $\pi a^2$ e altezza $R$:
$$
\frac{1}{3}\pi R^2 r=\pi a^2 R, \qquad Rr=3a^2.
$$
Dal vincolo 2: $r=3a^2/R$. Sostituendo nel vincolo 1:
$$
R^2+R\cdot\frac{3a^2}{R}+\frac{9a^4}{R^2}=4h^2,

R^2+3a^2+\frac{9a^4}{R^2}=4h^2.
$$
Ponendo $t=R^2$: $t+3a^2+9a^4/t=4h^2$, $t^2-(4h^2-3a^2)t+9a^4=0$:
$$
t=\frac{(4h^2-3a^2)\pm\sqrt{(4h^2-3a^2)^2-36a^4}}{2}.
$$
Dunque $R^2=t$ e $r=3a^2/R$.
$$
\boxed{R=\sqrt{\frac{4h^2-3a^2+\sqrt{16h^4-24h^2a^2-27a^4}}{2}},\quad r=\frac{3a^2}{R}}.
$$
![[_attachments/prob_1913_tutti_temi_4/prob_1913_tutti_temi_4_fig1.svg]]

\captionof{figure}{Cono retto di raggio $r$, altezza $h$ e apotema $\ell=\sqrt{r^2+h^2}$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.60](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
