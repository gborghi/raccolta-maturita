---
title: 1908 tutti_temi 1908 — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_1908_tutti_temi_2
of_item: prob_1908_tutti_temi_2
prova_id: prova_1908_tutti_temi
anno: '1908'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1908
---

**Problema:** [[Problemi/prob_1908_tutti_temi_2|1908 tutti_temi 1908 — Problema 2]] · **Prova:** [[Prove/1908_tutti_temi|1908 Tema di maturità]]

Fissiamo sull'asse del diametro un'ascissa con origine nel centro $O$ della sfera: $A=-r$, $B=+r$ e, poiché $\overline{BC}=r$, $C=+2r$. Sia $P$ di ascissa $\xi$, con $-r<\xi<r$ ($P$ interno alla sfera).

Il cerchio sezione del piano per $P$ perpendicolare al diametro ha raggio $\rho=\sqrt{r^2-\xi^2}$, dunque area
$$
A_{\text{sez}}=\pi(r^2-\xi^2).
$$
Il cerchio di raggio $\overline{PC}=2r-\xi$ ha area $A_{PC}=\pi(2r-\xi)^2$. Il rapporto richiesto è
$$
m=\frac{A_{PC}}{A_{\text{sez}}}=\frac{(2r-\xi)^2}{r^2-\xi^2}.
$$
**Discussione.** Studiamo $f(\xi)=\dfrac{(2r-\xi)^2}{r^2-\xi^2}$ su $]-r,r[$. Derivando,
$$
f'(\xi)=\frac{2(2r-\xi) r (2\xi-r)}{(r^2-\xi^2)^2},
$$
che si annulla (essendo $2r-\xi>0$) solo in $\xi=\dfrac{r}{2}$, punto di minimo. Il valore minimo è
$$
f \left(\frac{r}{2}\right)=\frac{(2r-r/2)^2}{r^2-r^2/4}=\frac{(3r/2)^2}{3r^2/4}=3.
$$
Inoltre $f(\xi)\to+\infty$ per $\xi\to r^-$ e $f(\xi)\to+\infty$ per $\xi\to -r^+$. Dunque $f$ assume tutti i valori $m\ge 3$, e solo questi: il problema è possibile se e solo se
$$
\boxed{m\ge 3.}
$$
**Posizione di $P$.** Dall'equazione $(2r-\xi)^2=m(r^2-\xi^2)$ si ottiene
$$
(1+m)\xi^2-4r\xi+(4-m)r^2=0,\qquad
\xi=\frac{r\bigl(2\pm\sqrt{m(m-3)}\bigr)}{1+m}.
$$
Entrambe le radici cadono in $]-r,r[$ per $m\ge3$. Per il valore minimo $m=3$ le due radici coincidono:
$$
\boxed{\xi=\frac{r}{2}\quad\Longrightarrow\quad \overline{OP}=\frac{r}{2} \text{(verso }B\text{): }P\text{ è il punto medio di }\overline{OB}.}
$$

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.56](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
