---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 6 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2021_4_112_6
of_item: ques_simzan_simzan_parte2_2021_4_112_6
prova_id: prova_simzan_simzan_parte2_2021_4_112
anno: '2021'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2021
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2021_4_112_6|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica)]]

**Testo.** Un corpo in moto rettilineo ha una velocità (in m/s) variabile secondo la legge
$$v(t) = \begin{cases} at(4-t) & \text{se } 0 \le t \le 3\;\text{s} \\ \dfrac{b}{(t^2+c)^2} & \text{se } t > 3\;\text{s} \end{cases}$$
dove $a$, $b$, $c$ sono costanti intere, sapendo che $v(3{,}0\;\text{s}) = 3{,}0$ m/s e che l'accelerazione istantanea è continua per ogni $t \ge 0$. Ricava lo spazio percorso nei primi 4,0 s e dimostra che comunque il corpo non percorre più di $1{,}8 \times 10^3$ m.

**Svolgimento.**

**Determinazione di $a$, $b$, $c$.**

Condizione $v(3) = 3$:
$$a \cdot 3 \cdot (4-3) = 3 \;\Rightarrow\; 3a = 3 \;\Rightarrow\; a = 1.$$

Continuità di $v$ in $t = 3$:
$$\frac{b}{(9+c)^2} = 3 \;\Rightarrow\; b = 3(9+c)^2. \tag{1}$$

Continuità dell'accelerazione $v'$ in $t = 3$:

- Derivata da sinistra: $v'(t) = a(4-2t)$, per $t=3$: $v'(3^-) = 4-6 = -2\;\text{m/s}^2$.
- Derivata da destra: $v'(t) = -\dfrac{4bt}{(t^2+c)^3}$, per $t=3$: $v'(3^+) = -\dfrac{12b}{(9+c)^3}$.

Imponendo la continuità:
$$-\frac{12b}{(9+c)^3} = -2 \;\Rightarrow\; b = \frac{(9+c)^3}{6}. \tag{2}$$

Eguagliando (1) e (2):
$$3(9+c)^2 = \frac{(9+c)^3}{6} \;\Rightarrow\; 18 = 9+c \;\Rightarrow\; c = 9.$$

Da (1): $b = 3 \cdot 18^2 = 3 \times 324 = 972$.

I valori sono: $a = 1$, $b = 972$, $c = 9$.

**Spazio percorso nei primi 4,0 s.**

$$s_4 = \int_0^3 t(4-t)\,dt + \int_3^4 \frac{972}{(t^2+9)^2}\,dt.$$

Primo integrale:
$$\int_0^3 (4t - t^2)\,dt = \left[2t^2 - \frac{t^3}{3}\right]_0^3 = 18 - 9 = 9\;\text{m}.$$

Per il secondo integrale, con la sostituzione $t = 3\tan\vartheta$, $dt = 3\sec^2\vartheta\,d\vartheta$, $t^2 + 9 = 9\sec^2\vartheta$:
$$\int \frac{972}{(9\sec^2\vartheta)^2} \cdot 3\sec^2\vartheta\,d\vartheta = \int \frac{972 \cdot 3}{81 \sec^2\vartheta}\,d\vartheta = 36\int\cos^2\vartheta\,d\vartheta = 18\int(1+\cos 2\vartheta)\,d\vartheta.$$

Gli estremi: $t=3 \Rightarrow \vartheta = \pi/4$; $t=4 \Rightarrow \vartheta = \arctan(4/3)$.

$$\int_3^4 \frac{972}{(t^2+9)^2}\,dt = 18\left[\vartheta + \frac{\sin 2\vartheta}{2}\right]_{\pi/4}^{\arctan(4/3)} = 18\left[\vartheta + \frac{t}{t^2+9}\cdot 3\right]_3^4.$$

Valutando numericamente:
$$= 18\left[\arctan\!\left(\frac{4}{3}\right) + \frac{12}{25} - \frac{\pi}{4} - \frac{1}{2}\right] \approx 18\left[0{,}927 + 0{,}480 - 0{,}785 - 0{,}500\right] \approx 18 \times 0{,}122 \approx 2{,}2\;\text{m}.$$

Quindi $s_4 \approx 9 + 2{,}2 \approx 11{,}2\;\text{m}$.

**Dimostrazione del limite superiore.**

Lo spazio totale percorso è:
$$s_{\text{tot}} = 9 + \int_3^{+\infty} \frac{972}{(t^2+9)^2}\,dt.$$

Con la stessa sostituzione ($t = 3\tan\vartheta$, estremi da $\pi/4$ a $\pi/2$):
$$\int_3^{+\infty} \frac{972}{(t^2+9)^2}\,dt = 18\left[\vartheta + \frac{\sin 2\vartheta}{2}\right]_{\pi/4}^{\pi/2} = 18\left[\frac{\pi}{2} + 0 - \frac{\pi}{4} - \frac{1}{2}\right] = 18\left(\frac{\pi}{4} - \frac{1}{2}\right) \approx 18 \times 0{,}285 \approx 5{,}1\;\text{m}.$$

Quindi $s_{\text{tot}} = 9 + 5{,}1 = 14{,}1\;\text{m} \ll 1{,}8 \times 10^3\;\text{m}$. $\square$

*(grafico di $v(t)$ — vedi PDF p.133)*

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
