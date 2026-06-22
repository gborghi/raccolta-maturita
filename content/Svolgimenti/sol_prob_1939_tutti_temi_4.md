---
title: 1939 tutti_temi 1939 — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1939_tutti_temi_4
of_item: prob_1939_tutti_temi_4
prova_id: prova_1939_tutti_temi
anno: '1939'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1939
---

**Problema:** [[Problemi/prob_1939_tutti_temi_4|1939 tutti_temi 1939 — Problema 4]] · **Prova:** [[Prove/1939_tutti_temi|1939 Tema di maturità]]

**Intersezioni con l'asse $x$.** Da $a-\dfrac{x^2}{a}=0$ si ha $x^2=a^2$, quindi $A=(-a,0)$ e $B=(a,0)$ (assumiamo $a>0$).

**Impostazione.** Un punto dell'arco è $P=\Bigl(t,\,a-\dfrac{t^2}{a}\Bigr)$ con $-a\le t\le a$. Allora
$$
|AP|^2=(t+a)^2+\Bigl(a-\tfrac{t^2}{a}\Bigr)^2,\qquad
|BP|^2=(t-a)^2+\Bigl(a-\tfrac{t^2}{a}\Bigr)^2 .
$$
Sommando,
$$
|AP|^2+|BP|^2=(t+a)^2+(t-a)^2+2\Bigl(a-\tfrac{t^2}{a}\Bigr)^2=2t^2+2a^2+2\Bigl(a-\tfrac{t^2}{a}\Bigr)^2 .
$$
**Equazione risolutiva.** Poniamo $u=t^2$ con $0\le u\le a^2$ e imponiamo l'uguaglianza con $2k^2$:
$$
u+a^2+\frac{(a^2-u)^2}{a^2}=k^2 .
$$
Moltiplicando per $a^2$: $a^2u+a^4+(a^2-u)^2=a^2k^2$, cioè
$$
u^2-a^2u+(2a^4-a^2k^2)=0 \Longrightarrow u=\frac{a^2\pm a\sqrt{4k^2-7a^2}}{2}.
$$
Da $u=t^2$ si ricava $t=\pm\sqrt{u}$, e dunque la posizione di~$P$:
$$
\boxed{ t^2=\frac{a^2\pm a\sqrt{4k^2-7a^2}}{2} }.
$$
**Discussione.** Realtà delle radici: $4k^2-7a^2\ge 0$, cioè $k\ge\dfrac{a\sqrt7}{2}$. Occorre poi $0\le u\le a^2$. Per $k=\dfrac{a\sqrt7}{2}$ si ha $u=\dfrac{a^2}{2}$, cioè $t=\pm\dfrac{a}{\sqrt2}$: due punti simmetrici. Al crescere di~$k$ uno dei valori di~$u$ può superare $a^2$ (allora $P$ uscirebbe dall'arco) e va scartato; la costruzione geometrica segue dall'equazione di secondo grado in~$u$.

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.85](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
