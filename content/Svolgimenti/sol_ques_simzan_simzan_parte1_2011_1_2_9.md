---
title: 'Simulazione Zanichelli 2011 PNI #1 — Quesito 9 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_1_2_9
of_item: ques_simzan_simzan_parte1_2011_1_2_9
prova_id: prova_simzan_simzan_parte1_2011_1_2
anno: '2011'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2011
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_1_2_9|Simulazione Zanichelli 2011 PNI n.1 — Quesito 9]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_1_2|Simulazione Zanichelli 2011 PNI n.1]]

**Volume del solido generato dalla rotazione del cerchio $x^2+y^2-2x=0$ attorno all'asse $y$.**

Riscriviamo: $(x-1)^2+y^2=1$. È una circonferenza di centro $C=(1,0)$ e raggio $r=1$.

Per il **teorema di Pappo-Guldino**: il baricentro del disco ha coordinata $\bar{x}=1$; l'area del disco è $S=\pi r^2=\pi$. Quindi:

$$V = 2\pi\,\bar{x}\cdot S = 2\pi\cdot 1\cdot\pi = 2\pi^2.$$

**Verifica con integrazione.** Le due semicirconferenze sono $\gamma_1: x=1+\sqrt{1-y^2}$ e $\gamma_2: x=1-\sqrt{1-y^2}$, con $-1\le y\le 1$. Il volume di rotazione attorno all'asse $y$ è:

$$V = \pi\int_{-1}^{1}\left[(1+\sqrt{1-y^2})^2-(1-\sqrt{1-y^2})^2\right]dy = \pi\int_{-1}^{1}4\sqrt{1-y^2}\,dy = 4\pi\int_{-1}^{1}\sqrt{1-y^2}\,dy.$$

**I Metodo** (sostituzione $y=\sin t$, $dy=\cos t\,dt$):

$$\int_{-1}^{1}\sqrt{1-y^2}\,dy = \int_{-\pi/2}^{\pi/2}\cos^2 t\,dt = \int_{-\pi/2}^{\pi/2}\frac{1+\cos 2t}{2}\,dt = \left[\frac{t}{2}+\frac{\sin 2t}{4}\right]_{-\pi/2}^{\pi/2} = \frac{\pi}{2}.$$

**II Metodo** (integrazione per parti):

$$\int_{-1}^{1}\sqrt{1-y^2}\,dy = \left[y\sqrt{1-y^2}\right]_{-1}^{1}+\int_{-1}^{1}\frac{y^2}{\sqrt{1-y^2}}\,dy = 0 + \int_{-1}^{1}\left(\frac{1}{\sqrt{1-y^2}}-\sqrt{1-y^2}\right)dy.$$

$$\Rightarrow\; 2\int_{-1}^{1}\sqrt{1-y^2}\,dy = \left[\arcsin y\right]_{-1}^{1} = \pi \;\Rightarrow\; \int_{-1}^{1}\sqrt{1-y^2}\,dy = \frac{\pi}{2}.$$

Quindi:

$$V = 4\pi\cdot\frac{\pi}{2} = 2\pi^2.$$

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
