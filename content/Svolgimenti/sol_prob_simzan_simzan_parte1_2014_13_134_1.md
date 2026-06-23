---
title: 'Simulazione Zanichelli 2014 #13 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte1_2014_13_134_1
of_item: prob_simzan_simzan_parte1_2014_13_134_1
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

**Problema:** [[Problemi/prob_simzan_simzan_parte1_2014_13_134_1|Simulazione Zanichelli 2014 n.13 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte1_2014_13_134|Simulazione Zanichelli 2014 n.13]]

**Trekking in montagna**

I dati della tabella sono:

| Distanza percorsa (km) | 0 | 3 | 12 | 20 | 27 | 30 |
|---|---|---|---|---|---|---|
| Tempo trascorso (h) | 0 | 1 | 3 | 5 | 6 | 7 |
| Altitudine s.l.m. (m) | 1000 | 1640 | 1800 | 1460 | 1900 | 2350 |

$v_{\min} = 3$ km/h, $v_{\max} = \dfrac{17}{3}$ km/h.

**a)** Si disegna il grafico a tratti dell'altitudine (in metri) in funzione della distanza percorsa (in chilometri), con i valori della tabella.

*(grafico — vedi PDF p.137)*

**b)** La pendenza percentuale media si calcola come rapporto tra la variazione totale di altitudine e la distanza totale percorsa:

$$\frac{2350 - 1000}{30000} = 0{,}045 \;\longrightarrow\; 4{,}5\%.$$

**c)** Il grafico in questo modello "migliorato" è quello di una funzione continua e derivabile in ogni punto. Indichiamo con $f(x)$ tale funzione, dove $0 \le x \le 30$ rappresenta la distanza percorsa in chilometri.

In base al teorema di Lagrange applicato sull'intervallo $[0;\,30]$ deve esistere almeno un punto $c$ interno all'intervallo tale che:

$$f'(c) = \frac{f(30) - f(0)}{30 - 0} = \frac{2350 - 1000}{30} = 45 \text{ m/km} = 4{,}5\%.$$

Poiché la funzione è derivabile, per il teorema di Lagrange esiste almeno un punto $c$ interno all'intervallo $[0;\,30]$ in cui la pendenza locale è uguale alla pendenza media dell'intero percorso, cioè $4{,}5\%$.

**d)** L'altitudine media si può ricavare come media integrale sull'intervallo $[0;\,30]$ della funzione rappresentata dalla spezzata del punto a), cioè come il rapporto tra l'area sottesa dal grafico e l'ampiezza dell'intervallo:

$$\text{altitudine media} = \frac{1320 \cdot 3 + 1720 \cdot 9 + 1630 \cdot 8 + 1680 \cdot 7 + 2125 \cdot 3}{30} \approx 1687{,}2 \text{ m}.$$

**e)** Si tratta di determinare la funzione $v(t) = at^3 + bt^2 + ct + d$ in modo che sia:

$$\begin{cases} v(1) = 3 \\ v(5) = \dfrac{17}{3} \\ v'(1) = 0 \\ v'(5) = 0 \end{cases} \longrightarrow \begin{cases} a + b + c + d = 3 \\ 125a + 25b + 5c + d = \dfrac{17}{3} \\ 3a + 2b + c = 0 \\ 75a + 10b + c = 0 \end{cases} \longrightarrow \begin{cases} a = -\dfrac{1}{12} \\[6pt] b = \dfrac{3}{4} \\[6pt] c = -\dfrac{5}{4} \\[6pt] d = \dfrac{43}{12} \end{cases}$$

La funzione polinomiale cercata è quindi:

$$v(t) = -\frac{1}{12}t^3 + \frac{3}{4}t^2 - \frac{5}{4}t + \frac{43}{12}, \qquad \text{con } 0 \le t \le 7.$$

Per rappresentarla, si osserva che:

- $v(0) = \dfrac{43}{12} \approx 3{,}583$;
- $v(7) = 3$;
- $v'(t) = -\dfrac{1}{4}t^2 + \dfrac{3}{2}t - \dfrac{5}{4}$, con $v'(t) < 0$ per $0 \le t < 1$ oppure $5 < t \le 7$ e $v'(t) > 0$ per $1 < t < 5$;
- $v''(t) = -\dfrac{1}{2}t + \dfrac{3}{2}$, con $v''(t) < 0$ per $3 < t \le 7$ e $v''(t) > 0$ per $0 \le t < 3$; la funzione ha un punto di flesso di coordinate $\left(3;\,\dfrac{13}{3}\right)$.

*(grafico — vedi PDF p.139)*

**f)** Il grafico di $v(t)$ riporta il tempo sull'asse delle ascisse e la velocità sull'asse delle ordinate. L'area sottesa dal grafico, dimensionalmente, è data da una velocità moltiplicata per un tempo, quindi rappresenta uno spazio. In particolare, l'area sottesa dal grafico nell'intervallo $[0;\,7]$ rappresenta la distanza percorsa da Giulia; dividendola per la larghezza dell'intervallo $[0;\,7]$ si ottiene la velocità media tenuta da Giulia ricorrendo al teorema della media:

$$D = \int_0^7 v(t)\,dt = \int_0^7 \left(-\frac{1}{12}t^3 + \frac{3}{4}t^2 - \frac{5}{4}t + \frac{43}{12}\right)dt$$

$$= \left[-\frac{1}{48}t^4 + \frac{1}{4}t^3 - \frac{5}{8}t^2 + \frac{43}{12}t\right]_0^7 \approx 30{,}19 \text{ km},$$

$$\bar{v} = \frac{D}{7} \approx 4{,}31 \text{ km/h}.$$

L'errore relativo percentuale che si commette nello stimare mediante $v(t)$ la distanza percorsa da Giulia rispetto al dato reale è:

$$e_r = \frac{|\text{distanza stimata} - \text{distanza reale}|}{\text{distanza reale}} \cdot 100 = \frac{|30{,}19 - 30|}{30} \cdot 100 \approx 0{,}63\%.$$

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/1fQWRc0VGk-_FhdBfHHWvR7AwPixbohX-/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
