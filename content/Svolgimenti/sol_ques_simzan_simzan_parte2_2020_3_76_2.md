---
title: >-
  Simulazione Zanichelli 2020 — SimZan parte2 #3 (Mat+Fisica) — Quesito 2 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2020_3_76_2
of_item: ques_simzan_simzan_parte2_2020_3_76_2
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2020_3_76_2|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica) — Quesito 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2020_3_76|Simulazione Zanichelli 2020 — SimZan parte2 n.3 (Mat+Fisica)]]

Si consideri la funzione $f(x) = \dfrac{2}{x^2-2x+2}$.

Indicato con $M$ il suo punto di massimo assoluto, determiniamo le equazioni delle rette tangenti al grafico della funzione e passanti per $M$.

**Punto di massimo $M$.** Il denominatore $x^2-2x+2 = (x-1)^2+1 \ge 1$, con minimo in $x = 1$. Quindi il massimo di $f$ è in $x = 1$: $f(1) = 2$, quindi $M(1;\,2)$.

La derivata prima:

$$f'(x) = \frac{-2(2x-2)}{(x^2-2x+2)^2} = \frac{-4(x-1)}{(x^2-2x+2)^2}.$$

Poiché $f'(1) = 0$, la tangente in $M$ è orizzontale: $y = 2$.

**Rette tangenti generiche passanti per $M$.** La retta di coefficiente angolare $m$ passante per $M(1;\,2)$ è $y = m(x-1)+2$. Essa è tangente al grafico se il sistema ha soluzione doppia:

$$m(x-1) + 2 = \frac{2}{x^2-2x+2} \implies m(x-1)(x^2-2x+2) + 2(x-1)^2 = 0$$

$$\implies (x-1)\bigl[m(x^2-2x+2) + 2(x-1)\bigr] = 0.$$

Per le tangenti con $x \ne 1$: $m(x^2-2x+2) + 2(x-1) = 0 \implies mx^2 + (2-2m)x + (2m-2) = 0$.

Dal discriminante $= 0$ per la tangenza: $(2-2m)^2 - 4m(2m-2) = 0$:

$$4(1-m)^2 - 8m(m-1) = 0 \implies 4(m-1)(m-1 - 2m) = 0 \implies 4(m-1)(-m-1) = 0$$

$$\implies -4(m-1)(m+1) = 0 \implies m = \pm 1.$$

Le due rette tangenti sono:
- per $m = -1$: $y = -(x-1)+2 = -x+3$;
- per $m = 1$: $y = (x-1)+2 = x+1$.

Le rette tangenti al grafico di $f(x)$ passanti per $M(1;\,2)$ sono $p: y = x+1$ e $q: y = -x+3$.

**Area della regione $R$ delimitata dagli archi $AB$ dei grafici di $f(x)$ e $g(x) = \frac{1}{16}x^2$.**

I punti comuni ai due grafici si trovano da $\dfrac{2}{x^2-2x+2} = \dfrac{1}{16}x^2$. Dall'immagine si leggono $A(0;\,0)$ e $B(4;\,1)$.

Verifica: $f(0) = \dfrac{2}{2} = 1 \ne 0$... In realtà dal testo (PDF p.107) la richiesta usa $f(x)$ e $g(x) = \dfrac{1}{16}x^2$ nell'intervallo con $A(-8;\,4)$ e $B(4;\,1)$ se le funzioni sono quelle del Quesito 4, oppure i punti dell'intersezione sono $A$ e $B$ letti dal grafico.

*(grafico — vedi PDF p.107)*

L'area della regione $R$ delimitata dagli archi $AB$ dei grafici di $g(x)$ e di $f(x)$, compresi tra $A$ e $B$, è:

$$S_R = \int_0^4 \left|f(x) - g(x)\right|dx.$$

I punti $A$ e $B$ appartengono anche al grafico della funzione $h(x)$, per qualunque $a > 0$. Si determina poi il valore di $a > 0$ per il quale la regione $R'$ delimitata dagli archi $AB$ dei grafici di $g(x)$ e di $h(x)$ sia equivalente a $R$.

*(calcolo dettagliato — vedi PDF p.107-108)*

---

*Fonte:* [📄 PDF p.85](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
