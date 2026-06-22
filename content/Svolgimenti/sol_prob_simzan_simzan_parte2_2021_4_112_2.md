---
title: >-
  Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Problema 2 —
  Svolgimento
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte2_2021_4_112_2
of_item: prob_simzan_simzan_parte2_2021_4_112_2
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

**Problema:** [[Problemi/prob_simzan_simzan_parte2_2021_4_112_2|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica) — Problema 2]] · **Prova:** [[Prove/simzan_simzan_parte2_2021_4_112|Simulazione Zanichelli 2021 — SimZan parte2 #4 (Mat+Fisica)]]

Una spira rettangolare con lati $a = 10\;\text{cm}$ e $b = 20\;\text{cm}$ ruota in un campo magnetico uniforme $B = 1{,}0 \times 10^{-2}\;\text{T}$. L'angolo tra la normale alla spira e il campo varia secondo:
$$\theta(t) = \frac{1}{2}\omega t^2, \quad \omega = 1{,}0 \times 10^2\;\text{rad/s}^2.$$

*(schema della spira — vedi PDF p.114)*

### Punto 1 — Forza elettromotrice e funzione $y = f(t)$

Il flusso del campo magnetico attraverso la spira è:
$$\Phi_B(t) = B \cdot S \cdot \cos\theta(t) = BS\cos\!\left(\frac{1}{2}\omega t^2\right),$$
dove $S = ab = 0{,}10 \times 0{,}20 = 2{,}0 \times 10^{-2}\;\text{m}^2$.

La forza elettromotrice indotta è:
$$\mathcal{E}(t) = -\frac{d\Phi_B}{dt} = BS\,\omega t\,\sin\!\left(\frac{1}{2}\omega t^2\right).$$

La funzione che rappresenta l'andamento della forza elettromotrice è:
$$y = f(t) = BS\omega t\,\sin\!\left(\frac{1}{2}\omega t^2\right).$$

### Punto 2 — Corrente nel circuito; tempi del primo mezzo giro e del primo giro

La corrente nel circuito con resistenza $R = 1{,}0\;\Omega$ è:
$$i(t) = \frac{\mathcal{E}(t)}{R} = \frac{BS\omega}{R}\,t\,\sin\!\left(\frac{1}{2}\omega t^2\right).$$

**Primo mezzo giro** ($\theta = \pi$):
$$\frac{1}{2}\omega T_1^2 = \pi \;\Rightarrow\; T_1 = \sqrt{\frac{2\pi}{\omega}} = \sqrt{\frac{2\pi}{100}} \approx 0{,}25\;\text{s}.$$

**Primo giro completo** ($\theta = 2\pi$):
$$\frac{1}{2}\omega T_2^2 = 2\pi \;\Rightarrow\; T_2 = \sqrt{\frac{4\pi}{\omega}} = \sqrt{\frac{4\pi}{100}} \approx 0{,}35\;\text{s}.$$

### Punto 3 — Massimi e minimi relativi di $f(t)$ su $[0; 0{,}25]$ e $[0{,}25; 0{,}32]$

La funzione $f(t) = BS\omega t\,\sin(50t^2)$ ha:

- Un **massimo relativo** nell'intervallo $0{,}19 < t < 0{,}20\;\text{s}$, corrispondente al primo mezzo giro completato; in tale punto $f(t_{\max}) > 0$.
- Un **minimo relativo** nell'intervallo $0{,}30 < t < 0{,}32\;\text{s}$, corrispondente al tratto discendente del secondo semiperiodo; in tale punto $f(t_{\min}) < 0$.

*(grafico — vedi PDF p.132)*

### Punto 4 — Studio di $f(t)$ per $0 < t \le 0{,}36\;\text{s}$ e flusso $\Phi_B(t)$

La funzione $f(t) = BS\omega t\,\sin(50t^2)$ è la derivata (con segno cambiato) del flusso:
$$\Phi_B(t) = BS\cos(50t^2).$$

Proprietà rilevanti su $[0;\,0{,}36\;\text{s}]$:

- **$0 < t < T_1 \approx 0{,}25\;\text{s}$**: $f(t) > 0$ (la f.e.m. è positiva, il flusso decresce), con un massimo assoluto in $t \approx 0{,}195\;\text{s}$.
- **$t = T_1$**: $f(T_1) = 0$ (la spira ha completato il primo mezzo giro, il flusso cambia verso di variazione).
- **$T_1 < t \le 0{,}36\;\text{s}$**: $f(t) < 0$ (la f.e.m. è negativa, il flusso cresce), con un minimo in $t \approx 0{,}31\;\text{s}$.

Le proprietà salienti del flusso $\Phi_B(t)$ deducibili da $f(t)$:

- $\Phi_B$ è decrescente dove $f > 0$ e crescente dove $f < 0$.
- I punti di flesso di $\Phi_B$ corrispondono agli zeri di $f(t)$.
- Il massimo relativo di $f$ corrisponde al punto di flesso discendente di $\Phi_B$; il minimo relativo di $f$ corrisponde al punto di flesso ascendente di $\Phi_B$.

*(grafico — vedi PDF p.131)*

---

*Fonte:* [📄 PDF p.112](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
