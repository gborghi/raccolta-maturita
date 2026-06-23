---
title: 'Simulazione Zanichelli 2014 #13 — Quesito 4 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte1_2014_13_134_4
of_item: ques_simzan_simzan_parte1_2014_13_134_4
prova_id: prova_simzan_simzan_parte1_2014_13_134
anno: '2014'
pdf: SimZan_parte1.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2014
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte1_2014_13_134_4|Simulazione Zanichelli 2014 n.13 — Quesito 4]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_13_134|Simulazione Zanichelli 2014 n.13]]

Assegnata la funzione $f(x) = 3\ln x - \dfrac{x^2}{2}$, dobbiamo trovare la retta tangente alla funzione inversa $F(x) = f^{-1}(x)$ nel suo punto di ascissa 2, dopo aver dimostrato che $f(x)$ è invertibile.

**Invertibilità di $f(x)$:** Il dominio è $(0;\,+\infty)$. La derivata è:

$$f'(x) = \frac{3}{x} - x = \frac{3 - x^2}{x}.$$

$f'(x) > 0$ per $0 < x < \sqrt{3}$ e $f'(x) < 0$ per $x > \sqrt{3}$. Poiché $f$ non è monotona su tutto il dominio, va considerata su un intervallo di monotonia. Il punto di ascissa $F(2)$ è tale che $f(F(2)) = 2$.

Verifichiamo: $f(1) = 3\ln 1 - \dfrac{1}{2} = -\dfrac{1}{2}$ e $f(\sqrt{3}) = \dfrac{3}{2}\ln 3 - \dfrac{3}{2} \approx 0{,}648$. Poiché $F(2) = f^{-1}(2)$ non cade nel dominio di invertibilità standard, possiamo usare la formula della derivata della funzione inversa sapendo che il punto $(2;\,x_0)$ appartiene al grafico di $F$, con $f(x_0) = 2$.

Dalla formula della derivata della funzione inversa:

$$F'(2) = \frac{1}{f'(F(2))} = \frac{1}{f'(x_0)} = \frac{x_0}{3 - x_0^2},$$

dove $x_0$ soddisfa $3\ln x_0 - \dfrac{x_0^2}{2} = 2$.

Poiché $f$ è strettamente crescente su $(0;\,\sqrt{3}]$ e strettamente decrescente su $[\sqrt{3};\,+\infty)$, è invertibile su ciascuno di questi intervalli. L'equazione della retta tangente al grafico di $F$ nel punto di ascissa 2 è:

$$y - x_0 = F'(2)(x - 2) \;\longrightarrow\; y = \frac{x_0}{3 - x_0^2}(x - 2) + x_0.$$

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
