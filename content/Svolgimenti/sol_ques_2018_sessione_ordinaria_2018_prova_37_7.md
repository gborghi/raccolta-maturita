---
title: 2018 Sessione ordinaria — Prova (Sportiva) — Quesito 7 — Svolgimento
tipo: soluzione
item_id: sol_ques_2018_sessione_ordinaria_2018_prova_37_7
of_item: ques_2018_sessione_ordinaria_2018_prova_37_7
prova_id: prova_2018_sessione_ordinaria_2018_prova_37
anno: '2018'
pdf: Prova_Maturita_2018.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2018
---

**Quesito:** [[Quesiti/ques_2018_sessione_ordinaria_2018_prova_37_7|2018 Sessione ordinaria — Prova (Sportiva) — Quesito 7]] · **Prova:** [[Prove/2018_sessione_ordinaria_2018_prova_37|2018 Sessione ordinaria — Prova (Sportiva)]]

**Probabilità che uno dei due giocatori vinca in $\leq 12$ partite (primo a 10 punti, $p=\frac{1}{2}$).**

Le partite totali possono essere $n=10$, $n=11$ oppure $n=12$.

**$n=10$:** Uno vince tutte le 10:

$$p(10,10) = \binom{10}{10}\left(\frac{1}{2}\right)^{10} = \frac{1}{2^{10}}.$$

Potendo vincere l'uno o l'altro:

$$p(10) = \frac{2}{2^{10}} = \frac{1}{2^9}.$$

**$n=11$:** Il vincitore ha vinto 9 delle prime 10 e poi la 11ª. La probabilità per un giocatore fissato:

$$p(10,11) = \binom{10}{9}\left(\frac{1}{2}\right)^{11} = \frac{10}{2^{11}}.$$

Si sottrae il caso in cui le prime 10 siano già tutte vinte: $\dfrac{1}{2^{11}}$.

Probabilità netta per un giocatore: $\dfrac{10}{2^{11}} - \dfrac{1}{2^{11}} = \dfrac{10}{2^{11}}$.

Potendo vincere l'uno o l'altro:

$$p(11) = \frac{20}{2^{11}} = \frac{5}{2^9}.$$

**$n=12$:** Il vincitore ha vinto 9 delle prime 11 e poi la 12ª:

$$p(9,11)\cdot\frac{1}{2} = \binom{11}{9}\left(\frac{1}{2}\right)^{11}\cdot\frac{1}{2} = \frac{55}{2^{12}}.$$

Potendo vincere l'uno o l'altro:

$$p(12) = \frac{110}{2^{12}} = \frac{55}{2^{11}}.$$

**Probabilità totale:**

$$p(\leq 12) = p(10)+p(11)+p(12) = \frac{1}{2^9}+\frac{5}{2^9}+\frac{55}{2^{11}} = \frac{4}{2^{11}}+\frac{20}{2^{11}}+\frac{55}{2^{11}} = \frac{79}{2^{11}} = \frac{79}{2048} \approx 3{,}9\%.$$

---

*Fonte:* [📄 PDF p.52](https://drive.google.com/file/d/1vt-OZDFhSWqupGghcan_yIZCMQ0DrJTR/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
