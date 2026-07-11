---
title: 1935 Sessione autunnale — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1935_tutti_temi_4
of_item: prob_1935_tutti_temi_4
prova_id: prova_1935_tutti_temi
anno: '1935'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1935
---

**Problema:** [[Problemi/prob_1935_tutti_temi_4|1935 Sessione autunnale — Problema 4]] · **Prova:** [[Prove/1935_tutti_temi|1935 Tema di maturità]]

**Prima parabola $y=x^2-3x+2=(x-1)(x-2)$.** Interseca l'asse~$x$ in $(1,0)$ e $(2,0)$, l'asse~$y$ in $(0,2)$. Derivata $y'=2x-3$: tangente in $(1,0)$ di coefficiente $-1$ (retta $y=-x+1$), in $(2,0)$ di coefficiente $+1$ (retta $y=x-2$), in $(0,2)$ di coefficiente $-3$. Vertice (minimo) in $\bigl(\tfrac32,-\tfrac14\bigr)$.

**Seconda parabola $y=-x^2+x+2=-(x-2)(x+1)$.** Interseca l'asse~$x$ in $(2,0)$ e $(-1,0)$, l'asse~$y$ in $(0,2)$. Derivata $y'=-2x+1$: tangente in $(2,0)$ di coefficiente $-3$ (retta $y=-3x+6$), in $(-1,0)$ di coefficiente $+3$ (retta $y=3x+3$), in $(0,2)$ di coefficiente $+1$. Vertice (massimo) in $\bigl(\tfrac12,\tfrac94\bigr)$.

**Corde uguali su una parallela all'asse $x$.** Sia $y=k$. La corda sulla prima parabola ha estremi dati da $x^2-3x+(2-k)=0$, quindi lunghezza
$$
\ell_1=\sqrt{\Delta_1}=\sqrt{9-4(2-k)}=\sqrt{1+4k};
$$
sulla seconda, $x^2-x+(k-2)=0$, quindi
$$
\ell_2=\sqrt{1-4(k-2)}=\sqrt{9-4k}.
$$
Uguagliando $\ell_1=\ell_2$: $1+4k=9-4k$, cioè $8k=8$ e
$$
\boxed{ k=1 }\qquad(\text{retta }y=1, \text{con }\ell_1=\ell_2=\sqrt5 ).
$$
**Area fra i due archi (facoltativa).** Le due parabole si intersecano dove $x^2-3x+2=-x^2+x+2$, cioè $2x^2-4x=0$, da cui $x=0$ e $x=2$: punti comuni $(0,2)$ e $(2,0)$. Nell'intervallo $[0,2]$ la seconda parabola sta sopra la prima, quindi
$$
\mathcal A=\int_0^2\bigl[(-x^2+x+2)-(x^2-3x+2)\bigr] dx=\int_0^2(-2x^2+4x) dx=\Bigl[-\tfrac{2x^3}{3}+2x^2\Bigr]_0^2=\boxed{\dfrac{8}{3}}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.81](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
