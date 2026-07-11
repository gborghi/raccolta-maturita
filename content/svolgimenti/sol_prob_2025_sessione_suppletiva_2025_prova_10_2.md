---
title: 2025 Suppletiva — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2025_sessione_suppletiva_2025_prova_10_2
of_item: prob_2025_sessione_suppletiva_2025_prova_10_2
prova_id: prova_2025_sessione_suppletiva_2025_prova_10
anno: '2025'
pdf: Prova_Maturita_2025.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2025
---

**Problema:** [[Problemi/prob_2025_sessione_suppletiva_2025_prova_10_2|2025 Suppletiva — Prova — Problema 2]] · **Prova:** [[Prove/2025_sessione_suppletiva_2025_prova_10|2025 Suppletiva — Prova]]

**Punto a).** Per $x\ge 0$: $P_{3}(x)=x^{3}-2x^{2}+x$ (tangente a $y=x$ in $0$: $P_{3}(0)=0$, $P_{3}'(0)=1$; tangente all'asse $x$ in $1$: $P_{3}(1)=0$, $P_{3}'(1)=0$).

Per $x<0$: $f(0^{-})=\ln(P_{2}(0))=0 \Rightarrow P_{2}(0)=1$; $f'(0^{-})=P_{2}'(0)/P_{2}(0)=1 \Rightarrow P_{2}'(0)=1$. Con $P_{2}(x)=x^{2}+x+1$ (discriminante $<0$, sempre positivo): verificato.

**Punto b).** Per $x\ge 0$: $f'(x)=3x^{2}-4x+1=(3x-1)(x-1)=0$ per $x=1/3$ e $x=1$.

$f(1/3)=1/27-2/9+1/3=4/27$ (max locale), $f(1)=0$ (min locale).

$f''(x)=6x-4=0$ per $x=2/3$: flesso.

Per $x<0$: $f'(x)=\frac{2x+1}{x^{2}+x+1}=0$ per $x=-1/2$. $f(-1/2)=\ln(3/4)<0$ (min locale per $x<0$).

Al variare di $k$: se $k>4/27$, una soluzione ($x<0$); se $k=4/27$, due soluzioni; se $\ln(3/4)<k<4/27$, tre soluzioni; ecc.

**Punto c).** Per $x\to-\infty$: $f(x)=\ln(x^{2}+x+1)\sim 2\ln|x|$. $\frac{f(x)}{x^{n}}\to 0$ per ogni $n\ge 1$.

Per $x\to+\infty$: $f(x)\sim x^{3}$. $\frac{f(x)}{x^{n}}\to 0$ se $n>3$, $\to 1$ se $n=3$, $\to\infty$ se $n<3$.

Per $x\to 0$: per $x\to 0^{+}$, $f(x)=x^{3}-2x^{2}+x\sim x$, dunque $\frac{f(x)}{x^{n}}\to$ finito non nullo per $n=1$. Per $x\to 0^{-}$, $f(x)=\ln(1+x+x^{2})\sim x$ (Taylor), dunque anche qui $n=1$. $\boxed{n=1}$, limite $= 1$.

**Punto d).** $R_{2}$: tra $\gamma$ e l'asse $x$ nel I quadrante, $x\in[0,1]$:
$$
A_{2}=\int_{0}^{1}(x^{3}-2x^{2}+x)  \mathrm{d} x = \left[\frac{x^{4}}{4}-\frac{2x^{3}}{3}+\frac{x^{2}}{2}\right]_{0}^{1} = \frac{1}{4}-\frac{2}{3}+\frac{1}{2} = \frac{1}{12}.
$$
$R_{1}$: tra $\gamma$ e $y=x$, $x\in[0,1]$:
$$
A_{1}=\int_{0}^{1}(x-(x^{3}-2x^{2}+x))  \mathrm{d} x = \int_{0}^{1}(2x^{2}-x^{3})  \mathrm{d} x = \left[\frac{2x^{3}}{3}-\frac{x^{4}}{4}\right]_{0}^{1} = \frac{2}{3}-\frac{1}{4} = \frac{5}{12}.
$$
$\boxed{\frac{A_{1}}{A_{2}} = \frac{5/12}{1/12} = 5.}$

![[_attachments/prob_2025_sessione_suppletiva_2025_prova_10_2/prob_2025_sessione_suppletiva_2025_prova_10_2_fig1.svg]]

*Grafico della funzione a tratti $f$ con $P_{2}(x)=x^{2}+x+1$ e $P_{3}(x)=x^{3}-2x^{2}+x$: continua in $0$, tangente $y=x$ in $0$, tangente $y=0$ in $x=1$.*

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.10](https://drive.google.com/file/d/1eFb2mSEYYU4eZ21hPBBkSerDAgf3k4Dp/view)*


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
