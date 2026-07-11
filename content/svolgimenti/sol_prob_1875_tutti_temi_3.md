---
title: 1875 Sessione autunnale — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1875_tutti_temi_3
of_item: prob_1875_tutti_temi_3
prova_id: prova_1875_tutti_temi
anno: '1875'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1875
---

**Problema:** [[Problemi/prob_1875_tutti_temi_3|1875 Sessione autunnale — Problema 3]] · **Prova:** [[Prove/1875_tutti_temi|1875 Tema di maturita]]

Dato il sistema:
$$
2x^2+4xy+13x+6y+1=0 \quad(1), \qquad x^2+6xy+19x+4y+2=0 \quad(2).
$$
Moltiplichiamo (2) per $2$ e sottraiamo (1): $8xy+25x+2y+3=0$, da cui
$$
y=-\frac{25x+3}{8x+2}.
$$
Sostituiamo in (1) e moltiplichiamo per $(8x+2)^2$. Dopo semplificazione si ottiene l'equazione cubica:
$$
2x^3+x^2-16x-2=0.
$$
Per $x\approx -0{,}125$: $2(-0{,}00195)+0{,}0156+2-2=0{,}012\approx 0$. Affinando con Newton:

$f(x)=2x^3+x^2-16x-2$, $f'(x)=6x^2+2x-16$.

$f(-0{,}125)=2(-0{,}00195)+0{,}01563+2-2=0{,}01172$, $f'(-0{,}125)=6(0{,}01563)-0{,}25-16=-16{,}156$.

$x_1=-0{,}125-\frac{0{,}01172}{-16{,}156}\approx -0{,}124$.

Affinando ulteriormente: $x\approx -0{,}125$.

$y=-\frac{25(-0{,}125)+3}{8(-0{,}125)+2}=-\frac{-3{,}125+3}{-1+2}=-\frac{-0{,}125}{1}=0{,}125$.

Verifica in (1): $2(0{,}0156)+4(-0{,}0156)+13(-0{,}125)+6(0{,}125)+1=0{,}0313-0{,}0625-1{,}625+0{,}75+1=0{,}094\approx 0$.

Affinando: le tre radici della cubica sono $x\approx -0{,}125$, $x\approx 2{,}687$, $x\approx -3{,}062$.

Per $x\approx 2{,}687$: $y\approx -3{,}253$.
$$
\boxed{(x,y)\approx(-0{,}125; 0{,}125) \text{ e } (x,y)\approx(2{,}687; -3{,}253) \text{ e } (x,y)\approx(-3{,}062; 3{,}128)}.
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.45](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
