---
title: 1934 Sessione autunnale — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1934_tutti_temi_4
of_item: prob_1934_tutti_temi_4
prova_id: prova_1934_tutti_temi
anno: '1934'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1934
---

**Problema:** [[Problemi/prob_1934_tutti_temi_4|1934 Sessione autunnale — Problema 4]] · **Prova:** [[Prove/1934_tutti_temi|1934 Tema di maturita]]

**Determinazione dei coefficienti.** La parabola $y = ax^2 + bx + c$ passa per $(0,1)$: $c = 1$. Passa per $(1,0)$: $a + b + 1 = 0$. In $(1,0)$ la tangente ha inclinazione $45^\circ$, dunque $y'(1) = -1$ (pendenza $-1$, dato che la curva scende passando da positiva a negativa). Siccome $y'(x) = 2ax + b$, si ha $2a + b = -1$. Dal sistema $a + b = -1$ e $2a + b = -1$ si ricava $a = 0$, che è assurdo per una parabola. Occorre invece interpretare ``inclinata di $45^\circ$'' come pendenza $+1$ o $-1$. Proviamo $y'(1) = 1$: $2a + b = 1$, con $a + b = -1$, da cui $a = 2$, $b = -3$, $c = 1$.

La parabola è dunque $y = 2x^2 - 3x + 1$.

**1.** Le intersezioni con l'asse $x$: $2x^2 - 3x + 1 = 0$, cioè $(2x-1)(x-1) = 0$, dunque $x = 1/2$ e $x = 1$. L'altro punto è $A(1/2,\,0)$. La tangente in $A$: $y'(1/2) = 2 \cdot 2 \cdot 1/2 - 3 = -1$, dunque la tangente forma un angolo di $135^\circ$ con l'asse $x$ (pendenza $-1$).

**2.** Il vertice (ordinata minima): $x_V = \frac{3}{2 \cdot 2} = \frac{3}{4}$, \quad $y_V = 2\cdot\frac{9}{16} - 3\cdot\frac{3}{4} + 1 = \frac{9}{8} - \frac{9}{4} + 1 = -\frac{1}{8}$.

Il punto di ordinata minima è $V\!\left(\frac{3}{4},\,-\frac{1}{8}\right)$.

**3.** La retta $y = mx$ interseca la parabola quando $2x^2 - 3x + 1 = mx$, cioè $2x^2 - (3+m)x + 1 = 0$. Il discriminante è $\Delta = (3+m)^2 - 8 = m^2 + 6m + 1$. Le intersezioni sono reali per $\Delta \ge 0$, ossia $m \le -3 - 2\sqrt{2}$ oppure $m \ge -3 + 2\sqrt{2}$.

![[_attachments/prob_1934_tutti_temi_4/prob_1934_tutti_temi_4_fig1.svg]]

\captionof{figure}{Parabola $y=2x^2-3x+1$: zeri in $A(\frac{1}{2},0)$ e $(1,0)$, vertice $V(\frac{3}{4},-\frac{1}{8})$.}

![[_attachments/prob_1934_tutti_temi_4/prob_1934_tutti_temi_4_fig2.svg]]

\captionof{figure}{Grafici di $y=\sin x$ (continuo) e $y=\cos x$ (tratteggiato) su un periodo esteso.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.80](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
