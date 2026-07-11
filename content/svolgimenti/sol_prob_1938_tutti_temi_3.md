---
title: 1938 tutti_temi 1938 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1938_tutti_temi_3
of_item: prob_1938_tutti_temi_3
prova_id: prova_1938_tutti_temi
anno: '1938'
pdf: tutti_temi.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/1938
---

**Problema:** [[Problemi/prob_1938_tutti_temi_3|1938 tutti_temi 1938 — Problema 3]] · **Prova:** [[Prove/1938_tutti_temi|1938 Tema di maturita]]

**Determinazione della parabola.** Passa per $O(0,0)$: $c = 0$. Passa per $A(4,0)$: $16a + 4b = 0$, cioè $b = -4a$. La tangente nell'origine ha pendenza $y'(0) = b = 1$ (angolo di $45^\circ$), dunque $b = 1$ e $a = -1/4$.

La parabola è $y = -\frac{x^2}{4} + x = \frac{x(4-x)}{4}$, con vertice in $(2, 1)$.

**Trapezio di area massima.** La corda parallela a $OA$ è all'altezza $y = h$ (con $0 < h < 1$). Le ascisse delle intersezioni: $\frac{x(4-x)}{4} = h$, $x^2 - 4x + 4h = 0$, $x = 2 \pm \sqrt{4-4h} = 2 \pm 2\sqrt{1-h}$. La corda ha lunghezza $\ell(h) = 4\sqrt{1-h}$.

Il trapezio ha base maggiore $|OA| = 4$, base minore $4\sqrt{1-h}$ e altezza $h$:
$$
T(h) = \frac{(4 + 4\sqrt{1-h})}{2}\cdot h = 2h(1 + \sqrt{1-h}).
$$
Per trovare il massimo, poniamo $t = \sqrt{1-h}$ (con $0 < t < 1$, $h = 1-t^2$):
$$
T = 2(1-t^2)(1+t) = 2(1+t-t^2-t^3).
$$
$T'(t) = 2(1 - 2t - 3t^2) = -2(3t^2 + 2t - 1) = -2(3t-1)(t+1) = 0$ per $t = 1/3$ (scartando $t = -1$). Dunque $h = 1 - 1/9 = 8/9$ e il trapezio di area massima ha:
$$
T_{\max} = 2 \cdot \frac{8}{9} \cdot \frac{4}{3} = \frac{64}{27}.
$$
**Area del segmento parabolico.**
$$
S = \int_0^4 \frac{x(4-x)}{4} \de x = \frac{1}{4}\left[2x^2 - \frac{x^3}{3}\right]_0^4 = \frac{1}{4}\left(32 - \frac{64}{3}\right) = \frac{1}{4}\cdot\frac{32}{3} = \frac{8}{3}.
$$
Il rapporto è $\dfrac{T_{\max}}{S} = \dfrac{64/27}{8/3} = \dfrac{64}{27} \cdot \dfrac{3}{8} = \dfrac{8}{9}$.

![[_attachments/prob_1938_tutti_temi_3/prob_1938_tutti_temi_3_fig1.svg]]

\captionof{figure}{Parabola $y=\frac{x(4-x)}{4}$ e il trapezio di area massima inscritto nel segmento parabolico: il rapporto delle aree è $\frac{8}{9}$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.84](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
