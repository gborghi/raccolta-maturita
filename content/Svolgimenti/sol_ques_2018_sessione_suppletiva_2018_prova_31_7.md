---
title: 2018 Sessione suppletiva — Prova (Sportiva) — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_suppletiva_2018_prova_31_7
of_item: ques_2018_sessione_suppletiva_2018_prova_31_7
prova_id: prova_2018_sessione_suppletiva_2018_prova_31
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_suppletiva_2018_prova_31_7|2018 Sessione suppletiva — Prova (Sportiva) — Quesito 7]] · **Prova:** [[Prove/2018_sessione_suppletiva_2018_prova_31|2018 Sessione suppletiva — Prova (Sportiva)]]

**In un gioco a due giocatori, ogni partita vinta frutta 1 punto e vince chi per primo raggiunge 10 punti. I due giocatori hanno la stessa probabilità di vincere ogni singola partita. Qual è la probabilità che uno dei due vinca in un numero di partite minore o uguale a 12?**

Le partite possono essere $n = 10$, $n = 11$ oppure $n = 12$.

**Per $n = 10$:** la probabilità che uno dei due le vinca tutte è:

$$p(10, 10) = \binom{10}{10}\left(\frac{1}{2}\right)^{10} = \left(\frac{1}{2}\right)^{10}$$

Potendo vincere sia l'uno che l'altro:

$$p(10) = 2 \cdot \left(\frac{1}{2}\right)^{10} = \frac{1}{2^9}$$

**Per $n = 11$:** la probabilità che uno dei due vinca equivale alla probabilità dell'esito 10 a 1 (distribuzione binomiale, 10 successi in 11 prove con $p = \frac{1}{2}$) meno la probabilità di vincere le prime 10 su 11.

$$p(10, 11) = \binom{11}{10}\left(\frac{1}{2}\right)^{11} = \frac{11}{2^{11}}$$

La probabilità di vincere le prime 10 su 11 è $\left(\dfrac{1}{2}\right)^{11} = \dfrac{1}{2^{11}}$.

La probabilità che uno dei due vinca 10 a 1 è:

$$\frac{11}{2^{11}} - \frac{1}{2^{11}} = \frac{10}{2^{11}}$$

Potendo vincere sia l'uno che l'altro:

$$p(11) = 2 \cdot \frac{10}{2^{11}} = \frac{5}{2^9}$$

**Per $n = 12$:** la probabilità che uno dei due vinca equivale alla probabilità dell'esito 10 a 2, cioè 9 successi nelle prime 11 partite e vittoria nella dodicesima:

$$p(9, 11) \cdot \frac{1}{2} = \binom{11}{9}\left(\frac{1}{2}\right)^{11} \cdot \frac{1}{2} = \frac{55}{2^{12}}$$

Potendo vincere sia l'uno che l'altro:

$$p(12) = 2 \cdot \frac{55}{2^{12}} = \frac{55}{2^{11}}$$

Quindi la probabilità che uno dei due giocatori vinca in un numero di partite $\le 12$ è:

$$p(10) + p(11) + p(12) = \frac{1}{2^9} + \frac{5}{2^9} + \frac{55}{2^{11}} = \frac{4}{2^{11}} + \frac{20}{2^{11}} + \frac{55}{2^{11}} = \frac{79}{2^{11}} = \frac{79}{2048} \approx 3{,}9\%$$

---

*Fonte:* [📄 PDF p.52](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
