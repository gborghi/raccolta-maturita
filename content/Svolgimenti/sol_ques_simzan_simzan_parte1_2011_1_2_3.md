---
title: 'Simulazione Zanichelli 2011 PNI #1 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2011_1_2_3
of_item: ques_simzan_simzan_parte1_2011_1_2_3
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2011_1_2_3|Simulazione Zanichelli 2011 PNI n.1 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte1_2011_1_2|Simulazione Zanichelli 2011 PNI n.1]]

**Funzione definita dall'integrale $F(x) = \displaystyle\int_{-2}^{x}\frac{t\,\arcsin(t^2)}{t^2+1}\,dt$.**

**Dominio della funzione integranda** $f(t)=\dfrac{t\,\arcsin(t^2)}{t^2+1}$: l'arcoseno è definito per $-1\le t^2\le 1$, cioè $|t|\le 1$. Il denominatore $t^2+1>0$ sempre. Quindi il dominio della funzione integranda è $[-1,1]$.

**La funzione $f(t)$ è dispari:**

$$f(-t) = \frac{(-t)\arcsin((-t)^2)}{(-t)^2+1} = \frac{-t\,\arcsin(t^2)}{t^2+1} = -f(t). \checkmark$$

**Retta tangente a $F(x)$ nel punto di ascissa $x_0=\dfrac{\sqrt{2}}{2}$:**

Per il teorema fondamentale del calcolo, $F'(x)=f(x)$, quindi:

$$F'\!\left(\frac{\sqrt{2}}{2}\right) = f\!\left(\frac{\sqrt{2}}{2}\right) = \frac{\dfrac{\sqrt{2}}{2}\cdot\arcsin\!\left(\dfrac{1}{2}\right)}{\dfrac{1}{2}+1} = \frac{\dfrac{\sqrt{2}}{2}\cdot\dfrac{\pi}{6}}{\dfrac{3}{2}} = \frac{\sqrt{2}\pi}{6}\cdot\frac{2}{3} = \frac{\sqrt{2}\pi}{9}.$$

Il valore $F\!\left(\dfrac{\sqrt{2}}{2}\right)$ si ottiene con l'integrale; per la disparità di $f$, si ha $\int_{-a}^{a}f(t)\,dt=0$. Poiché $f$ è definita su $[-1,1]$ e $-\dfrac{\sqrt{2}}{2}$ è il simmetrico di $\dfrac{\sqrt{2}}{2}$ rispetto all'origine:

$$\int_{-\sqrt{2}/2}^{\sqrt{2}/2}f(t)\,dt = 0 \;\Rightarrow\; F\!\left(\frac{\sqrt{2}}{2}\right) = F\!\left(-\frac{\sqrt{2}}{2}\right).$$

L'equazione della retta tangente è:

$$y = F\!\left(\frac{\sqrt{2}}{2}\right) + \frac{\sqrt{2}\pi}{9}\left(x - \frac{\sqrt{2}}{2}\right).$$

*(grafico — vedi PDF p.14–15)*

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
