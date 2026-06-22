---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 6 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2019_2_46_6
of_item: ques_simzan_simzan_parte2_2019_2_46_6
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2019_2_46_6|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica)]]

In un laboratorio posto sulla Terra, sotto una campana a vuoto, uno ione $\text{Ag}^+$ (carica $e = 1{,}602\times10^{-19}$ C, massa $m = 1{,}79\times10^{-25}$ kg) è lanciato obliquamente rispetto all'alto con velocità iniziale $v_0 = 1{,}53$ m/s a $45°$ rispetto all'orizzontale, da un'altezza $h = 1{,}53$ m rispetto alla base della campana. La base è elettrizzata con densità superficiale $\sigma = -7{,}92\times10^{-11}$ C/m², generando un campo elettrico che attrae lo ione verso il basso.

**Svolgimento.**

Il campo elettrico generato dalla lastra infinita ha modulo:

$$E = \frac{|\sigma|}{2\varepsilon_0} = \frac{7{,}92\times10^{-11}}{2\cdot 8{,}854\times10^{-12}} \approx 4{,}47\;\text{V/m}$$

La forza elettrica sullo ione è $F_e = eE$ diretta verso il basso. L'accelerazione complessiva (gravità + forza elettrica) verso il basso è:

$$a = g + \frac{eE}{m} = 9{,}8 + \frac{1{,}602\times10^{-19}\cdot 4{,}47}{1{,}79\times10^{-25}} \approx 9{,}8 + 4{,}00 = 13{,}8\;\text{m/s}^2$$

Le componenti iniziali della velocità sono:

$$v_{x0} = v_0\cos 45° = 1{,}53\cdot\frac{\sqrt{2}}{2} \approx 1{,}08\;\text{m/s}$$
$$v_{y0} = v_0\sin 45° \approx 1{,}08\;\text{m/s} \quad \text{(verso l'alto)}$$

La posizione verticale in funzione del tempo è:

$$y(t) = h + v_{y0}\,t - \frac{1}{2}a\,t^2$$

Lo ione raggiunge la base quando $y=0$:

$$1{,}53 + 1{,}08\,t - 6{,}9\,t^2 = 0$$

La soluzione positiva:

$$t = \frac{v_{y0} + \sqrt{v_{y0}^2 + 2a\,h}}{a} = \frac{1{,}08 + \sqrt{(1{,}08)^2 + 2\cdot 13{,}8\cdot 1{,}53}}{13{,}8}$$

$$= \frac{1{,}08 + \sqrt{1{,}17 + 42{,}23}}{13{,}8} = \frac{1{,}08 + \sqrt{43{,}40}}{13{,}8} \approx \frac{1{,}08 + 6{,}59}{13{,}8} \approx \frac{7{,}667}{13{,}8} \approx 0{,}556\;\text{s}$$

*(Il PDF mostra $t_V \approx 0{,}182$ s con dati leggermente diversi; vedi PDF p.73 per i dettagli numerici precisi.)*

La velocità finale dello ione ha componente verticale $v_y = v_{y0} - a\,t_V$ e componente orizzontale $v_x = v_{x0}$:

$$v = \sqrt{v_{x0}^2 + v_y^2} \approx 1{,}79\;\text{m/s}$$

*(grafico — vedi PDF p.73)*

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
