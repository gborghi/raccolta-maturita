---
title: 'Simulazione Zanichelli 2015 — SimZan parte1 #15 — Quesito 7 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2015_15_147_7
of_item: ques_simzan_simzan_parte1_2015_15_147_7
prova_id: prova_simzan_simzan_parte1_2015_15_147
anno: '2015'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2015
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2015_15_147_7|Simulazione Zanichelli 2015 — SimZan parte1 n.15 — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte1_2015_15_147|Simulazione Zanichelli 2015 — SimZan parte1 n.15]]

Considera la funzione $f(x) = x\sqrt{1-x^2}$.

### Punto a)

Stabiliamo se $f(x)$ soddisfa le ipotesi del teorema di Rolle nell'intervallo $[-1;\,1]$.

La funzione $f(x) = x\sqrt{1-x^2}$ è:
- definita e continua in $[-1;\,1]$;
- $f(-1) = 0 = f(1)$.

La derivata prima è:

$$f'(x) = \sqrt{1-x^2} + x\cdot\frac{-x}{\sqrt{1-x^2}} = \frac{1-2x^2}{\sqrt{1-x^2}},$$

non definita in $x = \pm 1$ (estremi dell'intervallo). Poiché $f$ è derivabile in ogni punto dell'intervallo aperto $]-1;\,1[$, le ipotesi del teorema di Rolle **sono soddisfatte**. Il punto in cui si annulla la derivata è $x = \pm\dfrac{1}{\sqrt{2}}$, con $f'\!\left(\dfrac{1}{\sqrt{2}}\right) = 0$ che cade in $]-1;\,1[$.

### Punto b)

Stabiliamo se $f(x)$ ammette punti di flesso nell'intervallo $]-1;\,1[$.

La derivata seconda:

$$f''(x) = \frac{-4x\sqrt{1-x^2} - (1-2x^2)\cdot\dfrac{-x}{\sqrt{1-x^2}}}{1-x^2} = \frac{-4x(1-x^2) + x(1-2x^2)}{(1-x^2)^{3/2}} = \frac{x(2x^2-3)}{(1-x^2)^{3/2}}.$$

$f''(x) = 0$ per $x = 0$ (in $]-1;\,1[$), dove la concavità cambia segno. Pertanto $f$ **ammette un punto di flesso** in $x = 0$ nell'intervallo $]-1;\,1[$.

---

*Fonte:* [📄 PDF p.147](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
