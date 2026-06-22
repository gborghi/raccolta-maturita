---
title: 2006 Sessione Ordinaria — Prova (p.65) — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2006_sessione_ordinaria_2006_prova_65_2
of_item: prob_2006_sessione_ordinaria_2006_prova_65_2
prova_id: prova_2006_sessione_ordinaria_2006_prova_65
anno: '2006'
pdf: Prova_Maturita_2006.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2006
---

**Problema:** [[Problemi/prob_2006_sessione_ordinaria_2006_prova_65_2|2006 Sessione Ordinaria — Prova (p.65) — Problema 2]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_65|2006 Sessione Ordinaria — Prova (p.65)]]

Si considerino $f(x) = \ln x$ e $g(x) = ax^2$, con $a$ parametro reale e logaritmo naturale.

**1.** Discussione al variare di $a$ dell'equazione $\ln x = ax^2$.

Per $a \le 0$ il secondo membro è $\le 0$ per $x > 0$, e $\ln x$ può assumere qualsiasi valore reale: l'equazione ammette sempre soluzioni.

Per $a > 0$: i grafici di $f$ e $g$ sono **tangenti** quando il sistema

$$\begin{cases} \ln x = ax^2 \\ \dfrac{1}{x} = 2ax \end{cases}$$

ha soluzione. Dalla seconda equazione: $a = \dfrac{1}{2x^2}$. Sostituendo nella prima:

$$\ln x = \frac{x^2}{2x^2} = \frac{1}{2} \implies x = \sqrt{e}$$

Quindi $a = \dfrac{1}{2e}$. Per $0 < a < \dfrac{1}{2e}$ l'equazione ha due soluzioni; per $a = \dfrac{1}{2e}$ una sola (tangenza); per $a > \dfrac{1}{2e}$ nessuna.

**2.** Con $a = 1$, l'area delimitata da $f(x) = \ln x$, $g(x) = x^2$, $x = 1$, $x = 2$:

Per $x \in [1,2]$ si verifica che $x^2 \ge \ln x$, quindi:

$$A = \int_{1}^{2} (x^2 - \ln x)\,dx = \left[\frac{x^3}{3} - x\ln x + x\right]_{1}^{2}$$

$$= \left(\frac{8}{3} - 2\ln 2 + 2\right) - \left(\frac{1}{3} - 0 + 1\right) = \frac{10}{3} - 2\ln 2$$

**3.** Studio di $h(x) = \ln x - ax^2$ con $a > \dfrac{1}{2e}$ (es. $a = 1$).

Dominio: $(0, +\infty)$.

$$h'(x) = \frac{1}{x} - 2x = \frac{1 - 2x^2}{x}$$

$h'(x) = 0$ per $x = \dfrac{1}{\sqrt{2}}$; $h$ è crescente su $\left(0, \dfrac{1}{\sqrt{2}}\right)$ e decrescente su $\left(\dfrac{1}{\sqrt{2}}, +\infty\right)$.

Massimo: $h\!\left(\dfrac{1}{\sqrt{2}}\right) = -\dfrac{1}{2}\ln 2 - \dfrac{1}{2} < 0$.

Il massimo è negativo, quindi $h(x) < 0$ su tutto il dominio. Asintoto verticale in $x = 0^+$ ($h \to -\infty$) e $h \to -\infty$ per $x \to +\infty$.

*(grafico — vedi PDF p.65)*

---

*Fonte:* [📄 PDF p.65](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
