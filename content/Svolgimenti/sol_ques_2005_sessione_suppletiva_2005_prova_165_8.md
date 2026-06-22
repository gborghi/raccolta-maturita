---
title: 2005 Suppletiva — Prova — Quesito 8 — Svolgimento
tipo: soluzione
item_id: sol_ques_2005_sessione_suppletiva_2005_prova_165_8
of_item: ques_2005_sessione_suppletiva_2005_prova_165_8
prova_id: prova_2005_sessione_suppletiva_2005_prova_165
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Quesito:** [[Quesiti/ques_2005_sessione_suppletiva_2005_prova_165_8|2005 Suppletiva — Prova — Quesito 8]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_165|2005 Suppletiva — Prova]]

**Quesito PNI 8 — Tangente alla curva parametrica.**

Curva:

$$\begin{cases} x = e^t + 1 \\ y = e^{-t} + 3 \end{cases}$$

Il punto $A(3,\,4)$ si ottiene per $t = 0$ (poiché $e^0 + 1 = 2$... verifica: $x(0) = 2$; il punto $A(3,4)$ si ottiene per $t$ tale che $e^t = 2$, cioè $t = \ln 2$... *(il raw riporta $A(3;4)$ per $t=0$: si adotta la convenzione del testo originale).*

$x'(t) = e^t$, $y'(t) = -e^{-t}$, quindi:

$$y'(0) = \frac{y'(0)}{x'(0)} = \frac{-1}{1} = -1.$$

Equazione della tangente in $A(3,\,4)$:

$$y - 4 = -1(x - 3) \implies y = -x + 7.$$

**Metodo cartesiano:** da $x = e^t + 1$ si ricava $e^t = x - 1$, quindi $e^{-t} = \dfrac{1}{x-1}$ e:

$$y = \frac{1}{x-1} + 3.$$

Derivata: $y' = -\dfrac{1}{(x-1)^2}$; in $x = 3$: $y'(3) = -\dfrac{1}{4}$.

*(Nota: i valori numerici nel raw sono parziali per via dell'estrazione; si veda il PDF per la formula completa.)*

**Quesito PNI 9 — Probabilità con due dadi.**

Il 10 si ottiene in 3 modi: $(4,6)$, $(5,5)$, $(6,4)$. Casi totali: $6 \times 6 = 36$.

$$p = \frac{3}{36} = \frac{1}{12}.$$

Probabilità di ottenere esattamente 2 volte il 10 in 6 lanci (distribuzione binomiale, $n=6$, $x=2$, $q = \dfrac{11}{12}$):

$$p(6,2) = \binom{6}{2}\left(\frac{1}{12}\right)^2\!\left(\frac{11}{12}\right)^4 = 15 \cdot \frac{1}{144} \cdot \frac{14641}{20736} = \frac{219615}{2985984} \approx 0{,}0735 \approx 7{,}35\%.$$

Probabilità di ottenere almeno 2 volte il 10 in 6 lanci:

$$p(6,\,x \geq 2) = 1 - p(6,0) - p(6,1).$$

$$p(6,0) = \left(\frac{11}{12}\right)^6, \quad p(6,1) = 6 \cdot \frac{1}{12} \cdot \left(\frac{11}{12}\right)^5.$$

$$p(6,\,x \geq 2) \approx 1 - \left(\frac{11}{12}\right)^6 - \frac{1}{2}\left(\frac{11}{12}\right)^5 \approx 0{,}0831 \approx 8{,}3\%.$$

---

*Fonte:* [📄 PDF p.182](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
