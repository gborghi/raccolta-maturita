---
title: 2008 Ordinaria — Prova (Ordinamento) — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2008_sessione_ordinaria_2008_prova_6_1
of_item: prob_2008_sessione_ordinaria_2008_prova_6_1
prova_id: prova_2008_sessione_ordinaria_2008_prova_6
anno: '2008'
pdf: Prova_Maturita_2008.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2008
---

**Problema:** [[Problemi/prob_2008_sessione_ordinaria_2008_prova_6_1|2008 Ordinaria — Prova (Ordinamento) — Problema 1]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_6|2008 Ordinaria — Prova (Ordinamento)]]

Il triangolo rettangolo $ABC$ ha l'ipotenusa $AB = a$ e l'angolo $\widehat{BAC} = \dfrac{\pi}{3}$.

### a)

I cateti del triangolo valgono:

$$AC = \frac{a}{2}, \qquad BC = \frac{a\sqrt{3}}{2}$$

Posto $BQ = x$ (raggio dell'arco con centro $B$), affinché $R$ appartenga al lato $AC$ e $Q$ al lato $BC$, la costruzione è realizzabile se:

$$\frac{a}{2} \le x \le \frac{a\sqrt{3}}{2}$$

### b)

$$S(x) = \text{area}(\triangle ABC) - \text{area(settore APR)} - \text{area(settore BPQ)}$$

$$= \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{6}(a - x)^2 - \frac{\pi}{3}\,x^2$$

Sviluppando:

$$S(x) = -\frac{\pi}{4}\,x^2 + \frac{\pi}{3}\,ax + \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{6}\,a^2$$

$S(x)$ è un'equazione di parabola con concavità verso il basso; il massimo si ha dove $S'(x) = 0$:

$$S'(x) = -\frac{\pi}{2}\,x + \frac{\pi}{3}\,a = 0 \implies x = \frac{2a}{3}$$

La funzione è crescente per $x < \dfrac{2a}{3}$ e decrescente per $x > \dfrac{2a}{3}$; pertanto in $x = \dfrac{2a}{3}$ si ha il massimo:

$$S\!\left(\frac{2a}{3}\right) = \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{18}\,a^2 \approx 0{,}04\,a^2$$

Valutando agli estremi dell'intervallo:

$$S\!\left(\frac{a}{2}\right) = \frac{\sqrt{3}}{8}\,a^2 - \frac{\pi}{8}\,a^2 \approx 0{,}02\,a^2$$

$$S\!\left(\frac{a\sqrt{3}}{2}\right) = \frac{\sqrt{3}}{8}\,a^2 - \frac{17\pi}{48}\,a^2 + \frac{\pi\sqrt{3}}{6}\,a^2 \approx 0{,}01\,a^2$$

Il minimo di $S(x)$ si ha per $x = \dfrac{a\sqrt{3}}{2}$ e vale circa $0{,}01\,a^2$.

### c)

Il piede $H$ dell'altezza da $C$ sull'ipotenusa vale:

$$CH = \frac{AC \cdot BC}{AB} = \frac{\dfrac{a}{2} \cdot \dfrac{a\sqrt{3}}{2}}{a} = \frac{a\sqrt{3}}{4}$$

Posto $GD = x$ (lato del rettangolo perpendicolare ad $AB$), con $0 < x < \dfrac{a\sqrt{3}}{4}$, dalla similitudine fra i triangoli $GFC$ e $ABC$:

$$GF : AB = \left(\frac{a\sqrt{3}}{4} - x\right) : \frac{a\sqrt{3}}{4} \implies GF = a - \frac{4x}{\sqrt{3}}$$

L'area $y$ del rettangolo inscritto è:

$$y = x \cdot GF = x\left(a - \frac{4x}{\sqrt{3}}\right) = \frac{4\sqrt{3}}{3}\,x\!\left(\frac{a\sqrt{3}}{4} - x\right)$$

Con il metodo della parabola o delle derivate si trova il massimo per $x = \dfrac{a\sqrt{3}}{8}$.

L'area massima vale:

$$y_{\max} = \frac{\sqrt{3}}{16}\,a^2$$

### d)

Il solido $W$ è costituito da due piramidi aventi per base comune il quadrato di lato $CD$ e per altezze rispettivamente $AD$ e $BD$.

Con $A = (0;\,0)$, $B = (a;\,0)$, il piede $D$ dell'altezza da $C$ su $AB$ ha: $AD = \dfrac{a}{4}$, $BD = \dfrac{3a}{4}$, $CD = \dfrac{a\sqrt{3}}{4}$.

Il volume della prima piramide:

$$V_1 = \frac{1}{3} \cdot CD^2 \cdot AD = \frac{1}{3} \cdot \frac{3a^2}{16} \cdot \frac{a}{4} = \frac{a^3}{64}$$

Il volume della seconda piramide:

$$V_2 = \frac{1}{3} \cdot CD^2 \cdot BD = \frac{1}{3} \cdot \frac{3a^2}{16} \cdot \frac{3a}{4} = \frac{3a^3}{64}$$

Il volume richiesto è pertanto:

$$V = V_1 + V_2 = \frac{a^3}{64} + \frac{3a^3}{64} = \frac{a^3}{16}$$

**Verifica con il calcolo integrale.** Coordinando $A = (0;\,0)$, $B = (a;\,0)$, la retta $AC$ ha equazione $f(x) = \sqrt{3}\,x$ (per una scelta di assi opportuna con $C$ sopra $AB$). Con gli assi posti lungo $AB$:

Retta $AC$: $y = f(x) = \sqrt{3}\,x$ per $0 \le x \le \dfrac{a}{4}$:

$$V_1 = \int_0^{a/4} [f(x)]^2\,dx = \int_0^{a/4} 3x^2\,dx = \left[x^3\right]_0^{a/4} = \frac{a^3}{64}$$

Retta $BC$: $y = g(x) = \sqrt{3}(a - x)$ per $\dfrac{a}{4} \le x \le a$:

$$V_2 = \int_{a/4}^{a} [g(x)]^2\,dx = \int_{a/4}^{a} 3(a - x)^2\,dx = \frac{3a^3}{64}$$

E si ottiene il valore già trovato precedentemente: $V = \dfrac{a^3}{16}$.

---

*Fonte:* [📄 PDF p.6](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
