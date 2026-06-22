---
title: 1913 Sessione estiva — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1913_tutti_temi_2
of_item: prob_1913_tutti_temi_2
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

**Problema:** [[Problemi/prob_1913_tutti_temi_2|1913 Sessione estiva — Problema 2]] · **Prova:** [[Prove/1913_tutti_temi|1913 Tema di maturita]]

Sia $ABCD$ il trapezio con $AB\parallel CD$. I tre lati uguali sono i due obliqui e la base minore: $AD=BC=CD=a$; il quarto lato è la base maggiore $AB$, uguale alla diagonale (per simmetria $AC=BD$): poniamo $AB=AC$. Il trapezio è dunque isoscele.

Sia $\theta$ l'angolo alla base maggiore. Proiettando i lati obliqui sulla base,
$$
AB=CD+2a\cos\theta=a(1+2\cos\theta).
$$
Per la diagonale, in coordinate con $A=(0,0)$, $D=(a\cos\theta,a\sin\theta)$, $C=(a\cos\theta+a,\,a\sin\theta)$:
$$
AC^2=(a\cos\theta+a)^2+a^2\sin^2\theta=a^2(2+2\cos\theta).
$$
Imponendo $AC=AB$, cioè $AC^2=AB^2$, e posto $x=\cos\theta$:
$$
2+2x=(1+2x)^2=1+4x+4x^2  \Longrightarrow  4x^2+2x-1=0  \Longrightarrow  x=\frac{-1+\sqrt5}{4}.
$$
Dunque $\cos\theta=\dfrac{\sqrt5-1}{4}\approx0{,}309$, ossia $\theta\approx72^\circ$ (l'angolo del pentagono regolare). Da qui
$$
\sin^2\theta=1-\Bigl(\frac{\sqrt5-1}{4}\Bigr)^2=1-\frac{6-2\sqrt5}{16}=\frac{10+2\sqrt5}{16}=\frac{5+\sqrt5}{8},
$$
e l'altezza è $h=a\sin\theta=a\sqrt{\dfrac{5+\sqrt5}{8}}$.

Le basi sono $CD=a$ e $AB=a(1+2\cos\theta)=a\cdot\dfrac{1+\sqrt5}{2}=a\varphi$, con $\varphi=\frac{1+\sqrt5}{2}$ (sezione aurea); si noti $AB+CD=a(1+\varphi)=a\varphi^2$.

L'area è dunque
$$
S=\frac{(AB+CD) h}{2}=\frac{a\varphi^2}{2}\cdot a\sqrt{\frac{5+\sqrt5}{8}},
$$
ossia, usando $\varphi^2=\frac{3+\sqrt5}{2}$,
$$
\boxed{S=\frac{a^2(3+\sqrt5)}{4}\sqrt{\frac{5+\sqrt5}{8}}\approx1{,}2450 a^2.}
$$
**Valore numerico.** Per $a=1{,}572$ m si ha $a^2=2{,}4712$ e
$$
S\approx1{,}2450\times2{,}4712\approx3{,}077 \mathrm{m}^2.
$$
![[_attachments/prob_1913_tutti_temi_2/prob_1913_tutti_temi_2_fig1.svg]]

\captionof{figure}{Trapezio isoscele con $AD=BC=CD=a$ e base maggiore $AB$ uguale alla diagonale $AC$; angolo alla base $\theta\approx72^\circ$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.60](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
