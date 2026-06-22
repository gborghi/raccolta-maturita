---
title: 2025 Suppletiva — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2025_sessione_suppletiva_2025_prova_10_1
of_item: prob_2025_sessione_suppletiva_2025_prova_10_1
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

**Problema:** [[Problemi/prob_2025_sessione_suppletiva_2025_prova_10_1|2025 Suppletiva — Prova — Problema 1]] · **Prova:** [[Prove/2025_sessione_suppletiva_2025_prova_10|2025 Suppletiva — Prova]]

**Punto a).** Iniziamo studiando la famiglia $f_a(x) = (x^2+1)\,e^{ax+1}$ al variare di $a\ne 0$. Per determinare il numero degli estremi relativi, calcoliamo la derivata prima usando la regola del prodotto:
$$
f_a'(x) = 2x e^{ax+1} + (x^2+1)\cdot a e^{ax+1} = e^{ax+1}\bigl[ax^2+2x+a\bigr].
$$
Poiché $e^{ax+1}>0$ sempre, i punti stazionari sono le soluzioni di $ax^2+2x+a=0$, cioè
$$
x = \frac{-2\pm\sqrt{4-4a^2}}{2a} = \frac{-1\pm\sqrt{1-a^2}}{a}.
$$
Analizziamo il discriminante $\Delta = 1-a^2$:
- Se $|a|<1$: $\Delta>0$, esistono **due punti stazionari** distinti, dunque la funzione ha un massimo e un minimo relativi.
- Se $|a|=1$: $\Delta=0$, un unico punto stazionario (punto di flesso a tangente orizzontale, come vedremo).
- Se $|a|>1$: $\Delta<0$, nessun punto stazionario, la funzione è monotona.

Per determinare il numero di flessi, calcoliamo la derivata seconda:
$$
f_a''(x) = e^{ax+1}\bigl[a^2 x^2 + 4ax + a^2+2\bigr].
$$
I flessi si trovano annullando il trinomio $a^2 x^2+4ax+a^2+2=0$, il cui discriminante è $\Delta_2 = 16a^2-4a^2(a^2+2) = 4a^2(2-a^2)$.

Per $|a|<\sqrt{2}$ si hanno due flessi; per $|a|=\sqrt{2}$ un solo flesso; per $|a|>\sqrt{2}$ nessun flesso.

**Flesso a tangente orizzontale.** Deve esistere un punto $x_0$ tale che $f_a'(x_0)=0$ e $f_a''(x_0)=0$ contemporaneamente. Dalla condizione $f_a'(x_0)=0$ otteniamo $ax_0^2+2x_0+a=0$, e dalla condizione $f_a''(x_0)=0$ otteniamo $a^2 x_0^2+4ax_0+a^2+2=0$. Risolvendo il sistema (sostituendo $ax_0^2=-2x_0-a$ nella seconda equazione), si trova $a=1$ con $x_0=-1$.

**Punto b).** Con $a=1$ la funzione diventa $f_1(x) = (x^2+1)e^{x+1}$.

*Dominio e segno.* Il dominio è $\mathbb{R}$. Poiché $x^2+1>0$ e $e^{x+1}>0$ per ogni $x$, la funzione è **sempre strettamente positiva**: il grafico $\gamma_1$ sta interamente sopra l'asse $x$.

*Monotonia.* Calcoliamo la derivata prima:
$$
f_1'(x) = 2x e^{x+1}+(x^2+1)e^{x+1} = (x^2+2x+1)e^{x+1} = (x+1)^2 e^{x+1}.
$$
Poiché $(x+1)^2\ge 0$ e $e^{x+1}>0$, la derivata è sempre $\ge 0$, e si annulla solo per $x=-1$. Questo significa che $f_1$ è una funzione **monotona non decrescente**, ed è **strettamente crescente** su $(-\infty,-1)$ e su $(-1,+\infty)$. Il punto $x=-1$ è un punto di stazionarietà *a tangente orizzontale*, ma **non è un estremo relativo**: la funzione non cambia il suo andamento crescente, vi è solo un rallentamento. In $x=-1$: $f_1(-1) = (1+1)e^0 = 2$.

*Invertibilità.* Essendo strettamente monotona (crescente), $f_1$ è iniettiva e dunque invertibile su tutto $\mathbb{R}$. Indichiamo con $g$ la funzione inversa.

*Dominio di $g$ e calcolo di $g'(e)$.* L'immagine di $f_1$ è $(0,+\infty)$, che è il dominio di $g$. In $x=0$: $f_1(0) = 1\cdot e^1 = e$, dunque $g(e)=0$. Per la formula della derivata della funzione inversa:
$$
g'(e) = \frac{1}{f_1'(g(e))} = \frac{1}{f_1'(0)} = \frac{1}{(0+1)^2\cdot e^1} = \boxed{\frac{1}{e}}.
$$
**Punto c).** Consideriamo $F(t) = \int_t^0 f_1(x)\,\mathrm{d} x = \int_t^0 (x^2+1)e^{x+1}\,\mathrm{d} x$, con $t\le 0$.

*Significato geometrico.* Poiché $f_1(x)>0$ per ogni $x$, l'integrale $F(t)$ rappresenta l'**area** della regione di piano compresa tra il grafico $\gamma_1$, l'asse $x$, e le rette verticali $x=t$ e $x=0$. Al diminuire di $t$, questa regione si allarga verso sinistra.

*Calcolo della primitiva.* Calcoliamo $\int(x^2+1)e^{x+1}\,\mathrm{d} x$ per parti ripetute. Integriamo per parti ponendo $u=x^2+1$, $\,\mathrm{d} v = e^{x+1}\,\mathrm{d} x$:
$$
I = (x^2+1)e^{x+1} - \int 2x e^{x+1}  \mathrm{d} x.
$$
Integriamo ancora per parti il secondo integrale, con $u=2x$, $\,\mathrm{d} v=e^{x+1}\,\mathrm{d} x$:
$$
\int 2x e^{x+1}  \mathrm{d} x = 2x e^{x+1} - \int 2e^{x+1}  \mathrm{d} x = 2x e^{x+1} - 2e^{x+1}.
$$
Sostituendo:
$$
I = (x^2+1)e^{x+1} - 2x e^{x+1} + 2e^{x+1} = (x^2-2x+3)e^{x+1} + C.
$$
*Valutazione dell'integrale definito.*
$$
F(t) = \bigl[(x^2-2x+3)e^{x+1}\bigr]_t^0 = (0-0+3)e^1 - (t^2-2t+3)e^{t+1} = 3e - (t^2-2t+3)e^{t+1}.
$$
*Limite per $t\to-\infty$.* Quando $t\to-\infty$, l'esponenziale $e^{t+1}\to 0$ molto più rapidamente di quanto cresca il polinomio $t^2-2t+3$: è un fatto fondamentale dell'analisi che **l'esponenziale domina ogni polinomio**. Pertanto $(t^2-2t+3)e^{t+1}\to 0$, e
$$
\lim_{t\to-\infty}F(t) = \boxed{3e}.
$$
Questo risultato ha un'interpretazione geometrica notevole: l'area della regione illimitata compresa tra $\gamma_1$, l'asse $x$ e la retta $x=0$ (estesa a sinistra fino a $-\infty$) è finita e vale $3e\approx 8{,}15$.

**Punto d).** Il rettangolo $P_a Q_a O R_a$ è definito dal punto $P_a$ di ascissa $x=-2$ sul grafico di $f_a$, dai relativi vertici su assi e origine. Per $x=-2$: $f_a(-2) = (4+1)e^{-2a+1} = 5e^{1-2a}$.

L'area del rettangolo è $A(a) = 2\cdot 5e^{1-2a} = 10e^{1-2a}$. Studiamo: $A'(a) = 10\cdot(-2)e^{1-2a} = -20e^{1-2a} < 0$ per ogni $a$. La funzione $A(a)$ è dunque **strettamente decrescente**: non ammette massimo relativo per $a>0$. Per $a\to 0^+$, $A\to 10e$ (estremo superiore, non raggiunto). Dunque **non esiste** un valore di $a$ che massimizza l'area del rettangolo: l'area cresce indefinitamente al diminuire di $a$ verso $0$.

![[_attachments/prob_2025_sessione_suppletiva_2025_prova_10_1/prob_2025_sessione_suppletiva_2025_prova_10_1_fig1.svg]]

*Grafico di $\gamma_1$: $f_1(x)=(x^2+1)e^{x+1}$, sempre positiva, con flesso a tangente orizzontale in $(-1,2)$, crescente su $\mathbb{R}$.*

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1eFb2mSEYYU4eZ21hPBBkSerDAgf3k4Dp/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
