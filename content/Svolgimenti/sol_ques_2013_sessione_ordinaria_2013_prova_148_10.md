---
title: 2013 Ordinaria PNI — Prova — Quesito 10 — Svolgimento
tipo: soluzione
item_id: sol_ques_2013_sessione_ordinaria_2013_prova_148_10
of_item: ques_2013_sessione_ordinaria_2013_prova_148_10
prova_id: prova_2013_sessione_ordinaria_2013_prova_148
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Quesito:** [[Quesiti/ques_2013_sessione_ordinaria_2013_prova_148_10|2013 Ordinaria PNI — Prova — Quesito 10]] · **Prova:** [[Prove/2013_sessione_ordinaria_2013_prova_148|2013 Ordinaria PNI — Prova]]

**Trovare $k\in\mathbb{R}$ per cui $x^2-x^3=k$ ha due soluzioni distinte in $[0,3]$. Con $k=3$, approssimare la soluzione maggiore.**

Poniamo $g(x)=x^2-x^3$.

$$g'(x)=2x-3x^2=x(2-3x)=0\iff x=0\text{ o }x=\tfrac{2}{3}.$$

$g(0)=0$, $g(2/3)=4/27\approx0{,}148$, $g(1)=0$, $g(3)=-18$.

La retta $y=k$ interseca il grafico di $g$ in due punti distinti su $[0,3]$ per:

$$\boxed{0\le k<\frac{4}{27}.}$$

(Per $k=0$: soluzioni $x=0$ e $x=1$. Per $0<k<4/27$: una soluzione in $(0,2/3)$ e una in $(2/3,1)$.)

**Con $k=3$:** $p(x)=x^3-x^2+3=0$.

$p(-1)=1>0$, $p(-2)=-9<0$: radice reale unica in $(-2,-1)$.

Metodo di Newton con $x_0=-1{,}5$ ($p'(x)=3x^2-2x$):

$$x_1=-1{,}5-\frac{p(-1{,}5)}{p'(-1{,}5)}=-1{,}5-\frac{-2{,}625}{9{,}75}\approx-1{,}231.$$

$$x_2\approx-1{,}231-\frac{-0{,}378}{7{,}007}\approx-1{,}177.$$

La radice è $x\approx-1{,}18$. *(Nota: per $k=3\notin[0,4/27)$ non ci sono due radici in $[0,3]$; cf. PDF p.150 per la formulazione esatta del quesito.)*

*Fonte:* [📄 PDF p.148](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
