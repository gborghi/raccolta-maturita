---
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Quesito 5 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2024_2_32_5
of_item: ques_simzan_simzan_parte3_2024_2_32_5
prova_id: prova_simzan_simzan_parte3_2024_2_32
anno: '2024'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2024_2_32_5|Simulazione Zanichelli 2024 — SimZan parte3 n.2 — Quesito 5]] · **Prova:** [[Prove/simzan_simzan_parte3_2024_2_32|Simulazione Zanichelli 2024 — SimZan parte3 n.2]]

Date le funzioni

$$f(x) = \frac{6-ax}{x-3}, \quad g(x) = \frac{b-2x}{x+2},$$

ricava i valori di $a$ e $b$ in modo tale che i grafici di $f(x)$ e $g(x)$ si intersecano in un punto $P$ di ascissa $x = 2$ e le rette tangenti in tale punto siano perpendicolari. Verifica che $f_1(x)$ e $g_1(x)$ corrispondono in una simmetria assiale di asse $y = -x$ e $g_1(x)$.

Le condizioni per lo stesso punto $P$ di ascissa $x = 2$ equivalgono a $f(2) = g(2)$:

$$f(2) = \frac{6-2a}{-1} = 2a - 6, \quad g(2) = \frac{b-4}{4}.$$

$f(2) = g(2) \Rightarrow 2a - 6 = \frac{b-4}{4} \Rightarrow 8a - 24 = b - 4 \Rightarrow b = 8a - 20.$

Calcoliamo le derivate:

$$f'(x) = \frac{-a(x-3) - (6-ax)}{(x-3)^2} = \frac{-3a+18}{(x-3)^2} = \frac{-3(a-6)}{(x-3)^2},$$

$$g'(x) = \frac{-2(x+2) - (b-2x)}{(x+2)^2} = \frac{-4-b}{(x+2)^2}.$$

Le tangenti in $P(2, f(2))$ sono perpendicolari quando $f'(2) \cdot g'(2) = -1$:

$$f'(2) = \frac{-3(a-6)}{1} = -3(a-6) = 18-3a.$$

$$g'(2) = \frac{-4-b}{16}.$$

Condizione di perpendicolarità:

$$(18-3a) \cdot \frac{-4-b}{16} = -1 \Rightarrow (18-3a)(-4-b) = -16.$$

Sostituendo $b = 8a-20$:

$$(18-3a)(-4-(8a-20)) = -16 \Rightarrow (18-3a)(16-8a) = -16$$
$$\Rightarrow 3(6-a) \cdot 8(2-a) = -16 \Rightarrow 24(6-a)(2-a) = -16$$
$$\Rightarrow (6-a)(2-a) = -\frac{2}{3}.$$

Espandendo: $12 - 8a + a^2 = -\frac{2}{3} \Rightarrow a^2 - 8a + \frac{38}{3} = 0 \Rightarrow 3a^2 - 24a + 38 = 0.$

$$a = \frac{24 \pm \sqrt{576 - 456}}{6} = \frac{24 \pm \sqrt{120}}{6} = 4 \pm \frac{\sqrt{120}}{6}.$$

*(vedi PDF p.63 per la verifica della simmetria assiale)*

Le equazioni della simmetria assiale di asse $y = -x$ si trovano con il sistema:

$$\begin{cases} x' = -y \\ y' = -x \end{cases},$$

e si verifica che $g_1(x) = f_1(-x)/(-1)$ ovvero $g_1(x)$ si ottiene da $f_1(x)$ per simmetria assiale di asse $y = -x$.

---

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
