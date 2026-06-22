---
title: 1889 tutti_temi 1889 — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_1889_tutti_temi_1
of_item: prob_1889_tutti_temi_1
prova_id: prova_1889_tutti_temi
anno: '1889'
pdf: tutti_temi.pdf
cluster: 'Successioni, Serie ed Eq. Differenziali'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/successioni_serie_ed_eq_differenziali
  - anno/1889
---

**Problema:** [[Problemi/prob_1889_tutti_temi_1|1889 tutti_temi 1889 — Problema 1]] · **Prova:** [[Prove/1889_tutti_temi|1889 Tema di maturita]]

Tre numeri in progressione aritmetica: $x=a-d$, $y=a$, $z=a+d$, dove $a$ è il termine medio e $d$ la ragione.

La somma: $x+y+z=3a=s$ (dato), dunque $a=\frac{s}{3}$.

Il prodotto: $xyz=(a-d)\cdot a\cdot(a+d)=a(a^2-d^2)=b$, dunque:
$$
a^2-d^2=\frac{b}{a}=\frac{3b}{s}, \qquad d^2=a^2-\frac{3b}{s}=\frac{s^2}{9}-\frac{3b}{s}=\frac{s^3-27b}{9s}.
$$
**Discussione:**
- Se $s^3-27b>0$: due soluzioni reali distinte ($d=\pm\sqrt{\ldots}$), che danno la stessa terna a meno dell'ordine.
- Se $s^3-27b=0$, cioè $b=\frac{s^3}{27}$: $d=0$, i tre numeri sono uguali ($x=y=z=\frac{s}{3}$).
- Se $s^3-27b<0$: nessuna soluzione reale, non esistono tre numeri reali in PA con quella somma e quel prodotto.
$$
\boxed{x=\frac{s}{3}-\sqrt{\frac{s^3-27b}{9s}},\quad y=\frac{s}{3},\quad z=\frac{s}{3}+\sqrt{\frac{s^3-27b}{9s}}}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.49](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/analisi #cluster/successioni_serie_ed_eq_differenziali
