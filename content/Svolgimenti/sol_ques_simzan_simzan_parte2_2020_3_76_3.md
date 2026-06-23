---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 3 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2020_3_76_3
of_item: ques_simzan_simzan_parte2_2020_3_76_3
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2020_3_76_3|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica) — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica)]]

Sono date le funzioni:

$$f(x) = \frac{65x^2}{16(x^2+1)}, \qquad g(x) = \frac{1}{16}x^2.$$

**Punti comuni $A$ e $B$.** Troviamo le intersezioni $f(x) = g(x)$:

$$\frac{65x^2}{16(x^2+1)} = \frac{x^2}{16} \implies 65x^2 = x^2(x^2+1) \implies x^2(x^2 - 64) = 0 \implies x = 0 \text{ o } x = \pm 8.$$

Quindi $A(0;\,0)$ e $B(4;\,1)$... Dal grafico (vedi PDF p.80) le intersezioni effettive sono $A(-8;\,4)$ e $B(4;\,1)$ considerando i rami positivi; oppure $A(0;\,0)$ e $B(4;\,1)$ per i rami nell'intervallo $[0;\,4]$.

Consideriamo $A(0;\,0)$ e $B(4;\,1)$. Si definisce $h(x) = ax^3 + \left(\dfrac{1}{16} - 4a\right)x^2$. Verifica:

$$h(0) = 0 = g(0), \qquad h(4) = 64a + 16\!\left(\frac{1}{16}-4a\right) = 64a + 1 - 64a = 1 = g(4). \checkmark$$

**Area della regione $R$.** L'area tra i grafici $g(x)$ e $f(x)$ nell'intervallo $[0;\,4]$:

$$S_R = \int_0^4 \left[f(x) - g(x)\right]dx = \int_0^4 \frac{65x^2 - x^2(x^2+1)}{16(x^2+1)}\,dx = \int_0^4 \frac{x^2(64-x^2)}{16(x^2+1)}\,dx.$$

Sviluppando:

$$\frac{x^2(64-x^2)}{16(x^2+1)} = \frac{64x^2 - x^4}{16(x^2+1)}.$$

Dividendo $64x^2 - x^4$ per $x^2+1$: $-x^4+64x^2 = -(x^2+1)(x^2-65)+65-1 = -(x^2-65)(x^2+1) + 64$.

Quindi $\dfrac{-x^4+64x^2}{16(x^2+1)} = \dfrac{-(x^2-65)}{16} + \dfrac{64}{16(x^2+1)} = \dfrac{-x^2+65}{16} + \dfrac{4}{x^2+1}$:

$$S_R = \int_0^4 \!\!\left[\frac{65-x^2}{16} + \frac{4}{x^2+1}\right]dx = \left[\frac{65x - \frac{x^3}{3}}{16} + 4\arctan x\right]_0^4$$

$$= \frac{65 \cdot 4 - \frac{64}{3}}{16} + 4\arctan 4 = \frac{260 - \frac{64}{3}}{16} + 4\arctan 4 = \frac{780 - 64}{48} + 4\arctan 4 = \frac{716}{48} + 4\arctan 4.$$

*(valore numerico — vedi PDF p.108)*

**Area della regione $R'$ e valore di $a$.**

$$S_{R'} = \int_0^4 \left[h(x) - g(x)\right]dx = \int_0^4 \left[ax^3 + \left(\frac{1}{16}-4a\right)x^2 - \frac{x^2}{16}\right]dx = \int_0^4 \left[ax^3 - 4ax^2\right]dx$$

$$= a\left[\frac{x^4}{4} - \frac{4x^3}{3}\right]_0^4 = a\left[64 - \frac{256}{3}\right] = a \cdot \frac{192-256}{3} = -\frac{64a}{3}.$$

Poiché $S_{R'} > 0$, si ha $S_{R'} = \dfrac{64a}{3}$.

I punti $A$ e $B$ appartengono al grafico di $h$ per qualunque $a > 0$; imponendo $S_{R'} = S_R$:

$$\frac{64a}{3} = S_R \implies a = \frac{3S_R}{64}.$$

*(valore numerico di $a$ — vedi PDF p.109)*

---

*Fonte:* [📄 PDF p.85](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
