---
title: 'Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 10 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2016_17_164_10
of_item: ques_simzan_simzan_parte1_2016_17_164_10
prova_id: prova_simzan_simzan_parte1_2016_17_164
anno: '2016'
pdf: SimZan_parte1.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2016
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2016_17_164_10|Simulazione Zanichelli 2016 — SimZan parte1 #17 — Quesito 10]] · **Prova:** [[Prove/simzan_simzan_parte1_2016_17_164|Simulazione Zanichelli 2016 — SimZan parte1 #17]]

**La funzione $f(x)$ rappresentata in figura è continua e derivabile; il grafico di $f'(x)$ è un polinomio di quarto grado. Ricava l'espressione analitica di $f'(x)$ e calcola poi:**

$$\lim_{x \to 1} \frac{g(x)}{f(x)},$$

**ove $g(x) = \int_0^x (t^2-1)^2\,dt$ e $f(x) = \int_0^x \sin(3t)\,dt$.**

*(grafico — vedi PDF p.168)*

### Punto a) — Espressione analitica di $f'(x)$

Dal grafico di $f'(x)$ (polinomio di quarto grado), si osservano zeri in $x = 0$, $x = 2$, $x = 4$, $x = 6$. La forma generale è:

$$f'(x) = a\,x(x-2)(x-4)(x-6)$$

per una costante $a$ determinabile dai valori del grafico. L'integrazione di $f'(x)$ fornisce $f(x)$ a meno della costante $f(0)$.

### Punto b) — Calcolo del limite

Si calcola:
$$\lim_{x \to 1} \frac{g(x)}{f(x)},$$

dove $g(x) = \int_0^x (t^2-1)^2\,dt$ e $f(x) = \int_0^x \sin(3t)\,dt$.

Poiché $g(1) \ne 0$ e $f(1) \ne 0$, il limite è semplicemente:
$$\lim_{x \to 1} \frac{g(x)}{f(x)} = \frac{g(1)}{f(1)}.$$

**Calcolo di $f(1)$:**

$$f(1) = \int_0^1 \sin(3t)\,dt = \left[-\frac{\cos(3t)}{3}\right]_0^1 = -\frac{\cos 3}{3} + \frac{1}{3} = \frac{1 - \cos 3}{3}.$$

**Calcolo di $g(1)$:**

$$g(1) = \int_0^1 (t^2-1)^2\,dt = \int_0^1 (t^4 - 2t^2 + 1)\,dt = \left[\frac{t^5}{5} - \frac{2t^3}{3} + t\right]_0^1 = \frac{1}{5} - \frac{2}{3} + 1.$$

$$= \frac{3}{15} - \frac{10}{15} + \frac{15}{15} = \frac{8}{15}.$$

**Risultato:**

$$\lim_{x \to 1} \frac{g(x)}{f(x)} = \frac{g(1)}{f(1)} = \frac{\dfrac{8}{15}}{\dfrac{1-\cos 3}{3}} = \frac{8}{15}\cdot\frac{3}{1-\cos 3} = \frac{8}{5(1-\cos 3)}.$$

*Fonte:* [📄 PDF p.164](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
