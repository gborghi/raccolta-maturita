---
title: 2025 Suppletiva — Prova — Quesito 8 — Svolgimento
tipo: soluzione
item_id: sol_ques_2025_sessione_suppletiva_2025_prova_10_8
of_item: ques_2025_sessione_suppletiva_2025_prova_10_8
prova_id: prova_2025_sessione_suppletiva_2025_prova_10
anno: '2025'
pdf: Prova_Maturita_2025.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2025
---

**Quesito:** [[Quesiti/ques_2025_sessione_suppletiva_2025_prova_10_8|2025 Suppletiva — Prova — Quesito 8]] · **Prova:** [[Prove/2025_sessione_suppletiva_2025_prova_10|2025 Suppletiva — Prova]]

Per calcolare l'area della regione compresa tra il grafico di $f(x)=x\ln x$, l'asse $x$ e le rette verticali $x=1$ e $x=e$, osserviamo anzitutto che $f(x)\ge 0$ per $x\ge 1$ (poiché $\ln x\ge 0$), dunque l'area coincide con l'integrale definito.

Integriamo per parti con $u=\ln x$, $\,\mathrm{d} v = x\,\mathrm{d} x$, ottenendo $\,\mathrm{d} u = \frac{1}{x}\,\mathrm{d} x$ e $v = \frac{x^2}{2}$:
$$
\int x\ln x  \mathrm{d} x = \frac{x^2}{2}\ln x - \int\frac{x^2}{2}\cdot\frac{1}{x}  \mathrm{d} x = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C.
$$
Valutiamo ora l'integrale definito tra gli estremi di integrazione:
$$
A = \int_1^{e} x\ln x  \mathrm{d} x = \left[\frac{x^2}{2}\ln x - \frac{x^2}{4}\right]_1^{e} = \left(\frac{e^2}{2}\cdot 1 - \frac{e^2}{4}\right) - \left(0 - \frac{1}{4}\right) = \frac{e^2}{4} + \frac{1}{4} = \frac{e^2+1}{4} \approx 2{,}10.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_8/ques_2025_sessione_suppletiva_2025_prova_10_8_fig1.svg]]

*Area tra $f(x)=x\ln x$ e l'asse $x$ per $1\le x\le e$.*

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1eFb2mSEYYU4eZ21hPBBkSerDAgf3k4Dp/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
