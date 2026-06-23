---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Problema 1 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2019_2_46_1
of_item: prob_simzan_simzan_parte2_2019_2_46_1
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

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2019_2_46_1|Simulazione Zanichelli 2019 — SimZan parte2 n.2 (Mat+Fisica) — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 n.2 (Mat+Fisica)]]

Si consideri la funzione reale di variabile reale $i(t)$ così definita:

$$i(t) = \begin{cases} 2 & \text{se } 0 \le t \le 2 \\ t^3 + at^2 + bt + c & \text{se } 2 < t \le 5 \end{cases}$$

con $a$, $b$, $c$ parametri reali.

### Punto 1 — Determinazione di $a$, $b$, $c$

Per rendere $i(t)$ continua e derivabile in tutto l'intervallo $[0;5]$, con $i(3)=0$, imponiamo le condizioni di continuità e derivabilità in $t=2$ e la condizione $i(3)=0$.

**Continuità in $t=2$:** si richiede $\lim_{t \to 2^-} i(t) = \lim_{t \to 2^+} i(t)$. Poiché $\lim_{t\to 2^-} i(t) = 2$ e $\lim_{t\to 2^+} i(t) = 8 + 4a + 2b + c$, si ottiene:

$$8 + 4a + 2b + c = 2$$

**Derivabilità in $t=2$:** la derivata del ramo costante è $0$; la derivata del ramo polinomiale è $3t^2 + 2at + b$, che in $t=2$ vale $12 + 4a + b$. Imponendo l'uguaglianza:

$$12 + 4a + b = 0$$

**Condizione $i(3)=0$:**

$$27 + 9a + 3b + c = 0$$

Risolvendo il sistema nelle tre incognite $a$, $b$, $c$:

$$\begin{cases} 4a + 2b + c = -6 \\ 4a + b = -12 \\ 9a + 3b + c = -27 \end{cases}$$

Dalla seconda equazione: $b = -12 - 4a$. Sostituendo nella prima:
$$4a + 2(-12-4a) + c = -6 \implies -4a - 24 + c = -6 \implies c = 4a + 18.$$

Sostituendo nella terza:
$$9a + 3(-12-4a) + (4a+18) = -27 \implies a - 18 = -27 \implies a = -9.$$

Quindi: $b = -12 - 4(-9) = 24$ e $c = 4(-9)+18 = -18$.

Si ottiene $a = -9$, $b = 24$, $c = -18$.

### Punto 2 — Studio e rappresentazione di $i(t)$

La funzione ottenuta è:

$$i(t) = \begin{cases} 2 & \text{se } 0 \le t \le 2 \\ t^3 - 9t^2 + 24t - 18 & \text{se } 2 < t \le 5 \end{cases}$$

**Dimostrazione che $i'(t^*)=0$ per almeno un $t^* \in (2,5)$, senza calcolare la derivata:**

Si calcolano i valori della funzione in alcuni punti dell'intervallo $(2,5)$:
- $i(2) = 8 - 36 + 48 - 18 = 2$
- $i(3) = 27 - 81 + 72 - 18 = 0$
- $i(4) = 64 - 144 + 96 - 18 = -2$
- $i(5) = 125 - 225 + 120 - 18 = 2$

La funzione vale $-2$ in $t=4$ e $2$ in $t=5$. Poiché $i(t)$ è continua e derivabile su $(2,5)$, per il teorema di Rolle applicato all'intervallo $[3,5]$ (dove $i(3)=0$ e $i(5)=2$, ma $i$ non è costante) e osservando che $i$ decresce da $t=2$ a $t=4$ e risale da $t=4$ a $t=5$, esiste almeno un $t^* \in (2,5)$ tale che $i'(t^*)=0$ (minimo locale in $t=4$).

**Studio analitico di $p(t) = t^3 - 9t^2 + 24t - 18$ su $(2,5]$:**

La derivata prima è:

$$p'(t) = 3t^2 - 18t + 24 = 3(t^2 - 6t + 8) = 3(t-2)(t-4)$$

$p'(t)=0$ per $t=2$ e $t=4$. Sulla $(2,5]$: $p'(t)>0$ per $2<t<4$ (funzione crescente), $p'(t)<0$ per $4<t<5$ (decrescente). Massimo relativo in $t=4$: $i(4)=-2$.

Gli zeri di $p(t)$: con la regola di Ruffini (sapendo che $t=3$ è radice):

$$t^3 - 9t^2 + 24t - 18 = (t-3)(t^2 - 6t + 6)$$

Le altre radici sono $t = 3 \pm \sqrt{3}$, cioè $t_1 = 3-\sqrt{3} \approx 1{,}27$ (fuori dall'intervallo) e $t_2 = 3+\sqrt{3} \approx 4{,}73$.

La derivata seconda è:

$$i''(t) = \begin{cases} 0 & \text{se } 0 < t < 2 \\ 6t - 18 & \text{se } 2 < t \le 5 \end{cases}$$

Negativa per $2<t<3$ (concavità verso il basso), nulla in $t=3$ (flesso), positiva per $3<t<5$ (concavità verso l'alto).

*(grafico — vedi PDF p.59)*

### Punto 3 — Giustificazione della relazione $\frac{dB}{dt} = -k\cdot i(t)$ e valore di $k$

La corrente indotta nella spira è governata dalla legge di Faraday-Neumann-Lenz. Il flusso del campo magnetico $\vec{B}$ attraverso la superficie $S_\square$ (delimitata dalla spira quadrata di lato $L$) vale $\Phi_B = B(t)\cdot L^2$. Per la terza equazione di Maxwell (legge di Faraday), la forza elettromotrice indotta è:

$$\mathcal{F}_{em} = -\frac{d\Phi_B}{dt} = -\frac{dB(t)}{dt}\cdot L^2$$

Per la legge di Ohm, la corrente nella spira di resistenza $R$ è:

$$i(t) = \frac{\mathcal{F}_{em}}{R} = -\frac{L^2}{R}\cdot\frac{dB(t)}{dt}$$

Invertendo:

$$\frac{dB(t)}{dt} = -\frac{R}{L^2}\cdot i(t) = -k\cdot i(t)$$

dove $k = \dfrac{R}{L^2}$.

Con $L = 40\text{ cm} = 0{,}4\text{ m}$ e $R = 0{,}16\;\Omega$:

$$k = \frac{0{,}16}{(0{,}4)^2} = \frac{0{,}16}{0{,}16} = 1 \;\frac{\Omega}{\text{m}^2}$$

Le dimensioni di $k$ sono $[\Omega\,\text{m}^{-2}] = [\text{T}\,\text{s}^{-1}\,\text{A}^{-1}]$; il valore è $k = 1\;\Omega/\text{m}^2$.

### Punto 4 — Verifica grafica di $j(t)$ e calcolo di $W$

La funzione $j(t)$ è:

$$j(t) = \begin{cases} 2 & \text{se } 0 \le t \le 2 \\ -2\cos\!\left(\dfrac{\pi}{2}t\right) & \text{se } 2 < t \le 5 \end{cases}$$

Valori di $j(t)$ in punti notevoli dell'intervallo: $j(0)=2$, $j(2)=2$, $j(3)=0$, $j(4)=-2$, $j(5)=2$. Questi coincidono con i valori di $i(t)$ negli stessi punti, confermando l'approssimazione.

*(grafico — vedi PDF p.61)*

L'energia termica dissipata per effetto Joule è:

$$W = R\int_0^5 j^2(t)\,dt = R\left[\int_0^2 4\,dt + \int_2^5 4\cos^2\!\left(\frac{\pi}{2}t\right)dt\right]$$

Calcolo del secondo integrale:

$$\int_2^5 4\cos^2\!\left(\frac{\pi}{2}t\right)dt = \int_2^5 4\cdot\frac{1+\cos(\pi t)}{2}\,dt = 2\left[t + \frac{\sin(\pi t)}{\pi}\right]_2^5 = 2\left[(5+0)-(2+0)\right] = 6$$

Quindi:

$$W = R\cdot(8 + 6)\cdot(10^{-3})^2 = 0{,}16\cdot 14\cdot 10^{-6} \approx 2{,}24\times 10^{-6}\;\text{J} = 2{,}24\;\mu\text{J}$$

(il fattore $10^{-6}$ converte $i$ da mA ad A, quindi $W = R i^2 \Delta t$ porta il termine $(10^{-3})^2$).

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
