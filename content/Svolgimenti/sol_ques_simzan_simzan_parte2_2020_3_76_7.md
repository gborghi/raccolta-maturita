---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 7 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2020_3_76_7
of_item: ques_simzan_simzan_parte2_2020_3_76_7
prova_id: prova_simzan_simzan_parte2_2020_3_76
anno: '2020'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2020
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2020_3_76_7|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica)]]

Un campo elettrico $\vec{E}$, uniforme e variabile nel tempo, genera un campo magnetico $\vec{B}$. Si considera una circonferenza di raggio $r$ con centro $O$ perpendicolare al piano contenente il campo $\vec{E}$; il modulo del campo magnetico è dato da:

$$B(t) = \mu_0 \varepsilon_0 r \cdot a \cdot \frac{t^2}{bt^2+1}$$

con $a = 5 \cdot 10^{-2}\ \text{m}^{-2}$ e $b = 2\ \text{s}^{-2}$.

**Modulo del campo elettrico $E(t)$ in funzione del tempo, supponendo che all'istante $t = 0$ sia nullo.**

Per la legge di Ampère-Maxwell, la circolazione del campo magnetico lungo il bordo del percorso circolare è:

$$\oint \vec{B} \cdot d\vec{l} = \mu_0 \varepsilon_0 \frac{d\Phi(\vec{E})}{dt}. \tag{1}$$

Dalla (1) otteniamo $2\pi r \cdot B(t) = \mu_0 \varepsilon_0 \cdot \pi r^2 \cdot \dfrac{dE}{dt}$, quindi:

$$\frac{dE}{dt} = \frac{2B(t)}{\mu_0 \varepsilon_0 r} = \frac{2}{\mu_0\varepsilon_0 r} \cdot \mu_0\varepsilon_0 r \cdot a \cdot \frac{t^2}{bt^2+1} = 2a \cdot \frac{t^2}{bt^2+1}.$$

Integrando:

$$E(t) = 2a\int_0^t \frac{s^2}{bs^2+1}\,ds = 2a\int_0^t \frac{1}{b} \cdot \frac{bs^2+1 - 1}{bs^2+1}\,ds = \frac{2a}{b}\int_0^t \!\!\left[1 - \frac{1}{bs^2+1}\right]ds$$

$$= \frac{2a}{b}\left[t - \frac{1}{\sqrt{b}}\arctan(\sqrt{b}\,t)\right].$$

Sostituendo $a = 5 \cdot 10^{-2}\ \text{m}^{-2}$ e $b = 2\ \text{s}^{-2}$:

$$E(t) = \frac{2 \cdot 5 \cdot 10^{-2}}{2}\left[t - \frac{1}{\sqrt{2}}\arctan(\sqrt{2}\,t)\right] = 5 \cdot 10^{-2}\left[t - \frac{1}{\sqrt{2}}\arctan\!\left(\sqrt{2}\,t\right)\right].$$

Si osserva che $E(t)$ non dipende da $r$.

*(vedi PDF p.111)*

---

*Fonte:* [📄 PDF p.85](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
