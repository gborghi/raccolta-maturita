---
title: 1949 Sessione autunnale — Problema 4 — Svolgimento
tipo: soluzione
item_id: sol_prob_1949_tutti_temi_4
of_item: prob_1949_tutti_temi_4
prova_id: prova_1949_tutti_temi
anno: '1949'
pdf: tutti_temi.pdf
cluster: Geometria
tags:
  - maturita/soluzione
  - area/geometria
  - cluster/geometria
  - anno/1949
---

**Problema:** [[Problemi/prob_1949_tutti_temi_4|1949 Sessione autunnale — Problema 4]] · **Prova:** [[Prove/1949_tutti_temi|1949 Tema di maturita]]

**1. Le due parabole.** La parabola $y=ax^2+bx+c$ è tangente all'asse~$x$ se il discriminante è nullo: $b^2-4ac=0$, dunque $y=a(x-x_0)^2$ con vertice in $(x_0,0)$, cioè $y=a(x^2-2x_0 x+x_0^2)$.

Passaggio per $A(0,1/4)$: $\frac{1}{4}=ax_0^2$, dunque $a=\frac{1}{4x_0^2}$.

Passaggio per $B$: con $x_B=\frac{-1+\sqrt{3}}{2}$ e $y_B=\frac{(2+\sqrt{3})^2}{4}=\frac{7+4\sqrt{3}}{4}$:
$$
\frac{7+4\sqrt{3}}{4} = \frac{1}{4x_0^2}(x_B-x_0)^2, \qquad (7+4\sqrt{3})x_0^2 = (x_B-x_0)^2.
$$
Espandendo: $(7+4\sqrt{3})x_0^2 = x_B^2-2x_B x_0+x_0^2$, $(6+4\sqrt{3})x_0^2+2x_B x_0-x_B^2=0$.

Con $x_B=\frac{\sqrt{3}-1}{2}$, $x_B^2=\frac{4-2\sqrt{3}}{4}=1-\frac{\sqrt{3}}{2}$. Risolvendo l'equazione di secondo grado in~$x_0$ si ottengono esattamente due soluzioni reali, confermando che esistono due e solo due parabole con le proprietà richieste.

**2. Tangenti in $A$.** Per la parabola $y=\frac{1}{4x_0^2}(x-x_0)^2$, la derivata è $y'=\frac{x-x_0}{2x_0^2}$. In $x=0$: $y'(0)=-\frac{1}{2x_0}$. Le due tangenti in~$A$ hanno pendenze $m_1=-\frac{1}{2x_{0,1}}$ e $m_2=-\frac{1}{2x_{0,2}}$.

L'angolo tra le tangenti è $\alpha=\arctan\!\left|\frac{m_1-m_2}{1+m_1 m_2}\right|$.

**3. Area massima del triangolo $MNP$.** Consideriamo una delle parabole, diciamo $y=\frac{1}{4x_0^2}(x-x_0)^2$. La retta $y=k$ la interseca quando $(x-x_0)^2=4kx_0^2$, cioè $x=x_0\pm 2x_0\sqrt{k}$. Dunque:
$$
|MN| = 4|x_0|\sqrt{k}.
$$
Il triangolo~$MNP$ ha base $|MN|$ e altezza $|p-k|=p-k$ (per $0<k<p$). L'area è:
$$
S(k) = \frac{1}{2}\cdot 4|x_0|\sqrt{k}\cdot(p-k) = 2|x_0|\sqrt{k}(p-k).
$$
Derivando rispetto a~$k$ e ponendo la derivata uguale a zero:
$$
S'(k) = 2|x_0| \left(\frac{p-k}{2\sqrt{k}}-\sqrt{k}\right) = 2|x_0|\cdot\frac{p-k-2k}{2\sqrt{k}} = 2|x_0|\cdot\frac{p-3k}{2\sqrt{k}} = 0,
$$
da cui $k=\frac{p}{3}$. Il valore massimo dell'area è:
$$
S_{\max} = 2|x_0|\sqrt{\frac{p}{3}}\cdot\frac{2p}{3} = \frac{4|x_0|p}{3}\sqrt{\frac{p}{3}} = \frac{4|x_0|p\sqrt{p}}{3\sqrt{3}} = \frac{4|x_0|p^{3/2}}{3\sqrt{3}}.
$$
![[_attachments/prob_1949_tutti_temi_4/prob_1949_tutti_temi_4_fig1.svg]]

\captionof{figure}{Area tra $y=4-x^2$ e $y=0$ su $[-2,2]$: $S=32/3$.}

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.91](https://drive.google.com/file/d/1TfImhTiR0dAKm4PiIDPxk3_ptWdJ4Pko/view)*


#maturita/soluzione #area/geometria #cluster/geometria
