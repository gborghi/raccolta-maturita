---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 7 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2021_4_112_7
of_item: ques_simzan_simzan_parte2_2021_4_112_7
prova_id: prova_simzan_simzan_parte2_2021_4_112
anno: '2021'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2021
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2021_4_112_7|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Quesito 7]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica)]]

**Testo.** In una regione di spazio è presente un campo magnetico uniforme la cui intensità varia nel tempo secondo $B = B_0\sin(\omega_B t)$, con $B_0 = 4{,}0 \times 10^{-2}\;\text{T}$, $\omega_B = 2{,}5 \times 10^2\;\text{rad\,s}^{-1}$, $t > 0$. All'interno del campo magnetico è posto un solenoide cilindrico di raggio $R = 1{,}3 \times 10^{-2}\;\text{m}$ costituito da $N = 4000$ spire, con resistenza $R_{\text{res}} = 1{,}3 \times 10^{-1}\;\Omega$. Scrivi l'espressione della corrente indotta nel solenoide e determina l'intensità della corrente nel primo istante in cui si annulla il campo magnetico.

**Svolgimento.**

Il flusso totale concatenato con il solenoide (asse parallelo al campo) è:
$$\Phi(t) = N \cdot B_0\sin(\omega_B t) \cdot \pi R^2.$$

La forza elettromotrice indotta è:
$$\mathcal{E}(t) = -\frac{d\Phi}{dt} = -N B_0 \omega_B \pi R^2 \cos(\omega_B t).$$

La corrente indotta è:
$$i(t) = \frac{\mathcal{E}(t)}{R_{\text{res}}} = -\frac{N B_0 \omega_B \pi R^2}{R_{\text{res}}} \cos(\omega_B t).$$

**Primo istante in cui $B = 0$** (dopo $t = 0$):
$$\sin(\omega_B t) = 0 \;\Rightarrow\; \omega_B t = \pi \;\Rightarrow\; t_1 = \frac{\pi}{\omega_B} = \frac{\pi}{250}\;\text{s}.$$

In $t_1$: $\cos(\omega_B t_1) = \cos\pi = -1$.

$$|i(t_1)| = \frac{N B_0 \omega_B \pi R^2}{R_{\text{res}}} = \frac{4000 \times 4{,}0 \times 10^{-2} \times 2{,}5 \times 10^2 \times \pi \times (1{,}3 \times 10^{-2})^2}{1{,}3 \times 10^{-1}}.$$

Calcolo:
- $N B_0 \omega_B = 4000 \times 4{,}0 \times 10^{-2} \times 2{,}5 \times 10^2 = 4000 \times 10 = 4{,}0 \times 10^4$.
- $\pi R^2 = \pi \times 1{,}69 \times 10^{-4} \approx 5{,}31 \times 10^{-4}\;\text{m}^2$.
- Numeratore: $4{,}0 \times 10^4 \times 5{,}31 \times 10^{-4} \approx 21{,}2$.
- $|i(t_1)| \approx \dfrac{21{,}2}{0{,}13} \approx 6{,}2\;\text{A}.$

*(dati costanti fisiche — vedi PDF p.117)*

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
