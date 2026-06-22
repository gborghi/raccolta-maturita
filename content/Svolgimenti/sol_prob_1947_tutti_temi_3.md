---
title: 1947 tutti_temi 1947 — Problema 3 — Svolgimento
tipo: soluzione
item_id: sol_prob_1947_tutti_temi_3
of_item: prob_1947_tutti_temi_3
prova_id: prova_1947_tutti_temi
anno: '1947'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1947
---

**Problema:** [[Problemi/prob_1947_tutti_temi_3|1947 tutti_temi 1947 — Problema 3]] · **Prova:** [[Prove/1947_tutti_temi|1947 Tema di maturita]]

**Sistema di coordinate.** Poniamo~$B$ nell'origine e~$C=(3a,0)$, cos\`\i\ che $BC$ giace sull'asse~$x$. Il triangolo è isoscele con $|AB|=|AC|$. Con $\cos(B\widehat{A}C)=\frac{7}{25}$ e la formula del coseno:
$$
|BC|^2 = |AB|^2 + |AC|^2 - 2|AB||AC|\cos\hat{A} = 2|AB|^2 \left(1-\frac{7}{25}\right) = \frac{36}{25}|AB|^2,
$$
da cui $9a^2 = \frac{36}{25}|AB|^2$, cioè $|AB|=\frac{5a}{2}$.

Per trovare~$A$: $|AB|=|AC|=\frac{5a}{2}$, con $B=(0,0)$ e $C=(3a,0)$. Per simmetria $A=\!\left(\frac{3a}{2}, h\right)$ con $h>0$. Da $|AB|^2 = \frac{9a^2}{4}+h^2 = \frac{25a^2}{4}$, otteniamo $h=2a$. Dunque $A=\!\left(\frac{3a}{2}, 2a\right)$.

**Punti $B'$ e $C'$.** $B'$ è su~$AB$ con $|BB'|=a$. Il versore di~$\overrightarrow{BA}$ è $\left(\frac{3}{5},\frac{4}{5}\right)$ (dato che $|BA|=\frac{5a}{2}$ e $\overrightarrow{BA}=\left(\frac{3a}{2},2a\right)$). Dunque:
$$
B' = B + a\left(\frac{3}{5},\frac{4}{5}\right) = \left(\frac{3a}{5}, \frac{4a}{5}\right).
$$
$C'$ è sul prolungamento di~$AC$ oltre~$C$, con $|CC'|=a$. Il versore di~$\overrightarrow{AC}$ è $\left(\frac{3}{5},-\frac{4}{5}\right)$ (dato che $\overrightarrow{AC}=\left(\frac{3a}{2},-2a\right)$, $|AC|=\frac{5a}{2}$). Dunque:
$$
C' = C + a\left(\frac{3}{5},-\frac{4}{5}\right) = \left(3a+\frac{3a}{5}, -\frac{4a}{5}\right) = \left(\frac{18a}{5}, -\frac{4a}{5}\right).
$$
**Punto $P$ su $BC$.** Sia $P=(t,0)$ con $0\le t\le 3a$. Calcoliamo:
$$
|B'P|^2 = \left(t-\frac{3a}{5}\right)^2 + \frac{16a^2}{25}, \qquad
|PC'|^2 = \left(t-\frac{18a}{5}\right)^2 + \frac{16a^2}{25}.
$$
La condizione $|B'P|^2+|PC'|^2 = 2k^2a^2$ diventa:
$$
\left(t-\frac{3a}{5}\right)^2 + \left(t-\frac{18a}{5}\right)^2 + \frac{32a^2}{25} = 2k^2a^2.
$$
Sviluppando e semplificando (ponendo $u=t/a$):
$$
\left(u-\frac{3}{5}\right)^2 + \left(u-\frac{18}{5}\right)^2 + \frac{32}{25} = 2k^2.

u^2-\frac{6u}{5}+\frac{9}{25} + u^2-\frac{36u}{5}+\frac{324}{25} + \frac{32}{25} = 2k^2.

2u^2 - \frac{42u}{5} + \frac{365}{25} = 2k^2, \qquad 2u^2 - \frac{42u}{5} + \frac{73}{5} = 2k^2.
$$
Risolvendo per~$u$:
$$
u = \frac{21}{10} \pm \frac{1}{2}\sqrt{\frac{441}{25}+2k^2-\frac{73}{5}} = \frac{21}{10} \pm \frac{1}{2}\sqrt{\frac{441-365}{25}+2k^2} \cdot \frac{1}{\cdots}
$$
Più ordinatamente, dall'equazione $2u^2-\frac{42}{5}u+\frac{73}{5}-2k^2=0$:
$$
u = \frac{\frac{42}{5}\pm\sqrt{\frac{42^2}{25}-4\cdot 2\left(\frac{73}{5}-2k^2\right)}}{4} = \frac{42\pm\sqrt{1764-40(73-10k^2)}}{20} = \frac{42\pm\sqrt{1764-2920+400k^2}}{20}.

u = \frac{42\pm\sqrt{400k^2-1156}}{20} = \frac{42\pm\sqrt{4(100k^2-289)}}{20} = \frac{21\pm\sqrt{100k^2-289}}{10}.
$$
La soluzione è reale se $100k^2-289\ge 0$, cioè $k\ge\frac{17}{10}$. Inoltre $P$ deve giacere su~$BC$, dunque $0\le u\le 3$:
$$
0 \le \frac{21\pm\sqrt{100k^2-289}}{10} \le 3.
$$
Per $k=\frac{17}{10}$: $u=\frac{21}{10}$, unica soluzione $P=\!\left(\frac{21a}{10},0\right)$, il punto medio del segmento~$B'C'$ proiettato su~$BC$. Per $k>\frac{17}{10}$ si hanno due posizioni simmetriche rispetto a tale punto.

![[_attachments/prob_1947_tutti_temi_3/prob_1947_tutti_temi_3_fig1.svg]]

\captionof{figure}{Triangolo $ABC$ con mediana $CM$ relativa al lato $AB$ ($M=$ punto medio).}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.89](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
