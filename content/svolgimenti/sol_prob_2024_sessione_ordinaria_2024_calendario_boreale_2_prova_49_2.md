---
title: 2024 Ordinaria Boreale 2 — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49_2
of_item: prob_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49_2
prova_id: prova_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49
anno: '2024'
pdf: Prova_Maturita_2024.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Problema:** [[Problemi/prob_2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49_2|2024 Ordinaria Boreale 2 — Prova — Problema 2]] · **Prova:** [[Prove/2024_sessione_ordinaria_2024_calendario_boreale_2_prova_49|2024 Ordinaria Boreale 2 — Prova]]

In figura sono rappresentati i grafici della funzione esponenziale (con $x<0$) e della funzione logaritmica (con $x>1$), entrambe in base naturale. Si consideri la funzione

$$ f(x)=\begin{cases} e^{x} & x<0 \\ P(x) & 0\le x\le 1 \\ \ln x & x>1 \end{cases} $$

## a) Determinazione del polinomio $P(x)$

Sia $P(x)=ax^{3}+bx^{2}+cx+d$ (una funzione polinomiale è continua e derivabile su tutto $\mathbb{R}$). Imponiamo continuità e derivabilità nei punti di raccordo $x=0$ e $x=1$.

**Continuità in $x=0$:** $\displaystyle\lim_{x\to 0^{-}} e^{x}=P(0)$, quindi $1=d$.

**Continuità in $x=1$:** $P(1)=\displaystyle\lim_{x\to 1^{+}}\ln x=0$, quindi $a+b+c+d=0$, cioè $a+b+c+1=0$.

**Derivabilità in $x=0$:** essendo $f$ continua, basta $\displaystyle\lim_{x\to 0^{-}}(e^{x})=\lim_{x\to 0^{+}}P'(x)$, cioè $1=c$.

**Derivabilità in $x=1$:** $P'(1)=\big(\ln x\big)'\big|_{x=1}=1$, cioè $3a+2b+c=1$, e con $c=1$ si ha $3a+2b=0$.

Risolviamo il sistema (con $c=d=1$):

$$ \begin{cases} a+b+2=0 \\ 3a+2b=0 \end{cases}\quad\Longrightarrow\quad a=4,\ b=-6. $$

Il polinomio richiesto è dunque

$$ P(x)=4x^{3}-6x^{2}+x+1. $$

## b) Ulteriore zero, punti stazionari, concavità

$P(1)=4-6+1+1=0$: dividendo per $(x-1)$ (regola di Ruffini),

$$ P(x)=(x-1)\left(4x^{2}-2x-1\right). $$

Gli zeri di $4x^{2}-2x-1=0$ sono $x=\dfrac{1\pm\sqrt5}{4}$; di questi solo $x=\dfrac{1+\sqrt5}{4}\approx 0{,}809$ appartiene a $[0,1]$: è l'ulteriore zero cercato.

**Punti stazionari:** $P'(x)=12x^{2}-12x+1=0$ dà

$$ x=\frac{12\pm\sqrt{96}}{24}=\frac{3\pm\sqrt6}{6}. $$

Poiché $P''(x)=24x-12>0$ per $x>\tfrac12$, in $x=\dfrac{3-\sqrt6}{6}\approx 0{,}092$ c'è un massimo relativo e in $x=\dfrac{3+\sqrt6}{6}\approx 0{,}908$ un minimo relativo.

**Concavità:** $P''(x)=24x-12>0$ per $x>\tfrac12$: il grafico volge la concavità verso l'alto per $x>\tfrac12$ e verso il basso per $x<\tfrac12$; $x=\tfrac12$ è punto di flesso, con $P\!\left(\tfrac12\right)=\tfrac12$. Dunque il flesso è $B=\left(\tfrac12,\tfrac12\right)$.

Completando con i rami $e^{x}$ (per $x<0$) e $\ln x$ (per $x>1$) si ottiene il grafico $\gamma$ della funzione $f$.

## c) $B$ centro di simmetria; tangenti in $A$ e $C$ parallele

$A$ e $C$ sono i punti di $\gamma$ di ascisse $x=0$ e $x=1$: $A=(0,1)$, $C=(1,0)$. Il flesso di una cubica è centro di simmetria del suo grafico; in particolare $B=\left(\tfrac12,\tfrac12\right)$ è centro di simmetria dell'arco di estremi $A$ e $C$ (si verifica che $A$ e $C$ sono simmetrici rispetto a $B$: $\tfrac{A+C}{2}=\left(\tfrac12,\tfrac12\right)=B$).

Le tangenti a $\gamma$ in $A$ e $C$ hanno coefficienti angolari

$$ f'(0)=\big(e^{x}\big)'\big|_{0}=1,\qquad f'(1)=\big(\ln x\big)'\big|_{1}=1, $$

quindi sono parallele.

## d) Tangente in $B$ e area della regione

La tangente $t$ a $\gamma$ nel flesso $B=\left(\tfrac12,\tfrac12\right)$ ha coefficiente angolare $P'\!\left(\tfrac12\right)=12\cdot\tfrac14-12\cdot\tfrac12+1=-2$, dunque

$$ t:\ y-\tfrac12=-2\left(x-\tfrac12\right)\ \Longrightarrow\ y=-2x+\tfrac32. $$

Per $0\le x\le 1$ le intersezioni di $t$ con $\gamma$ risolvono $4x^{3}-6x^{2}+x+1=-2x+\tfrac32$, cioè $8x^{3}-12x^{2}+6x-1=0$, ossia $(2x-1)^{3}=0$: l'unica radice è $x=\tfrac12$ (tripla), quindi $t$ tocca $\gamma$ solo in $B$.

L'area richiesta è delimitata da $t$, da $\gamma$ e dalla retta $x=\tfrac32$. Fra $x=\tfrac12$ e $x=1$ la regione è compresa fra $P(x)$ e $t$; fra $x=1$ e $x=\tfrac32$ fra $\ln x$ e $t$:

$$ A_{1}=\int_{1/2}^{1}\Big[\big(4x^{3}-6x^{2}+x+1\big)-\big(-2x+\tfrac32\big)\Big]\,dx=\int_{1/2}^{1}\big(4x^{3}-6x^{2}+3x-\tfrac12\big)\,dx=\left[x^{4}-2x^{3}+\tfrac32x^{2}-\tfrac12x\right]_{1/2}^{1}=\frac{1}{16}, $$

$$ A_{2}=\int_{1}^{3/2}\Big[\ln x-\big(-2x+\tfrac32\big)\Big]\,dx=\left[x\ln x+x^{2}-\tfrac52x\right]_{1}^{3/2}=\frac12\ln\frac{27}{8}. $$

Pertanto

$$ A=A_{1}+A_{2}=\frac{1}{16}+\frac12\ln\frac{27}{8}\approx 0{,}06+0{,}61\approx 0{,}67\ u^{2}. $$

*Fonte:* [📄 PDF p.49](https://drive.google.com/file/d/1VOgKnntd-8HAK_xN07R1HOW3WMKnaLip/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
