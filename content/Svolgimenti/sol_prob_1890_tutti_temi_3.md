---
title: 1890 tutti_temi 1890 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1890_tutti_temi_3
of_item: prob_1890_tutti_temi_3
prova_id: prova_1890_tutti_temi
anno: '1890'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1890
---

**Problema:** [[Problemi/prob_1890_tutti_temi_3|1890 tutti_temi 1890 — Problema 3]] · **Prova:** [[Prove/1890_tutti_temi|1890 Tema di maturità]]

Sia $r$ il raggio della base e $a$ l'apotema (generatrice) del cono. La superficie laterale è $S_l=\pi r a$ e la superficie di base è $S_b=\pi r^2$.

Le condizioni sono:
$$
S_l-S_b=d \implies \pi r a-\pi r^2=d, \qquad S_l+S_b=s \implies \pi r a+\pi r^2=s.
$$
Sommando: $2\pi r a=s+d$, dunque $a=\frac{s+d}{2\pi r}$.

Sottraendo: $2\pi r^2=s-d$, dunque $r^2=\frac{s-d}{2\pi}$, $r=\sqrt{\frac{s-d}{2\pi}}$.

**Condizione di esistenza:** $s>d$ (affinché $r>0$).

L'apotema: $a=\frac{s+d}{2\pi}\cdot\frac{1}{r}=\frac{s+d}{2\sqrt{2\pi(s-d)}}$.

L'altezza: $h=\sqrt{a^2-r^2}$.

**Discussione:** il cono esiste se $a>r$, cioè se $\frac{(s+d)^2}{8\pi(s-d)}>\frac{s-d}{2\pi}$, ossia $(s+d)^2>4(s-d)^2$, cioè $s+d>2(s-d)$, da cui $3d>s$... La condizione completa richiede $s>d>0$ e $a>r$.
$$
\boxed{r=\sqrt{\frac{s-d}{2\pi}},\qquad a=\frac{s+d}{2\sqrt{2\pi(s-d)}},\qquad h=\sqrt{a^2-r^2}}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.50](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
