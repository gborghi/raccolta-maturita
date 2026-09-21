---
title: 2026 Ordinaria — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2026_sessione_ordinaria_2026_prova_1_1
of_item: prob_2026_sessione_ordinaria_2026_prova_1_1
prova_id: prova_2026_sessione_ordinaria_2026_prova_1
anno: '2026'
pdf: Prova_Maturita_2026.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2026
---

**Problema:** [[Problemi/prob_2026_sessione_ordinaria_2026_prova_1_1|2026 Ordinaria — Prova — Problema 1]] · **Prova:** [[Prove/2026_sessione_ordinaria_2026_prova_1|2026 Ordinaria — Prova]]

Fonte della soluzione: Giuseppe Scoleri, Matefilia 2026 (ordinamento, problema 1).

**a)** Con $x=0$ al 2016, i dati $f(0)=-6$, $f(1)=-16$, $f(2)=-20$, $f(3)=-18$ sul primo modello danno il sistema $16a-8b+4c=14$, $a-b+c=4$, $a+b+c=2$. Si ottiene $a=-\dfrac12$, $b=-1$, $c=\dfrac72$. Continuità in $x=3$ sul secondo modello: $m=2$. Dato $x=8$, $y=-10$ sul terzo: $k=-12$. Dunque
$$
f(x)=\begin{cases}
-\frac12(x-2)^4-(x-2)^3+\frac72(x-2)^2-20,& 0\le x<3,\\
2x-24+\operatorname{sen}^2(\pi x),& 3\le x\le 7,\\
2\cos(2\pi x)-12,& 7<x\le 10.
\end{cases}
$$

**b)** Continua su $[0;10]$ (raccordi $x=3$ e $x=7$). Derivabile in $x=3$ ($f'_-=f'_+=2$), **non** derivabile in $x=7$ (punto angoloso: $f'_-(7)=2$, $f'_+(7)=0$). Minimo assoluto in $x=2$, $f(2)=-20$. Flessi nel primo tratto $x\approx 0{,}31$ e $x\approx 2{,}69$. Nel secondo tratto oscillazioni periodiche (4 max e 4 min relativi); nel terzo, max $f=-10$ in $x=8,9,10$ e min $f=-14$ in $x=7{,}5,8{,}5,9{,}5$.

**c)** Lagrange su $[0;10]$ richiede derivabilità su $]0;10[$: manca in $x=7$. Tuttavia $\dfrac{f(10)-f(0)}{10}=-0{,}4$ è assunto da $f'$ in 15 punti (valori intermedi sui tre tratti, ciascuno derivabile all'interno).

**d)** $f$ continua su $[0;10]$, dunque applicabile la media integrale. $\Delta h=\dfrac1{10}\int_0^{10} f=\dfrac{f_{\mathrm{media}}}{1}$. Scoleri: volume mancante rispetto allo zero ottimale $\approx 79{,}3\cdot 10^9$ litri (superficie $57\,\mathrm{km}^2$).

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
