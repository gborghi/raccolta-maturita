---
title: 2009 Sessione Ordinaria — Prova — Quesito 9 — Svolgimento
tipo: soluzione
item_id: sol_ques_2009_sessione_ordinaria_2009_prova_4_9
of_item: ques_2009_sessione_ordinaria_2009_prova_4_9
prova_id: prova_2009_sessione_ordinaria_2009_prova_4
anno: '2009'
pdf: Prova_Maturita_2009.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2009
---

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_4_9|2009 Sessione Ordinaria — Prova — Quesito 9]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_4|2009 Sessione Ordinaria — Prova]]

*(Scodella di Galilei — Principio di Cavalieri)*

Si considera una semisfera di raggio $r$ e il cilindro circoscritto di raggio $r$ e altezza $r$. La **scodella** è il solido ottenuto togliendo la semisfera dal cilindro.

Si confronta la scodella con il **cono** di raggio base $r$ e altezza $r$ (vertice $V$ in alto).

**Sezione a quota $h$ dal piano di base** (con $0 \le h \le r$):

- *Scodella:* la sezione del cilindro a quota $h$ è un cerchio di raggio $r$; da esso si sottrae la sezione della semisfera, che è un cerchio di raggio $\sqrt{r^2 - h^2}$ (poiché $x^2 + h^2 = r^2$). L'area della sezione della scodella è:

$$A_{\text{scodella}}(h) = \pi r^2 - \pi(r^2 - h^2) = \pi h^2$$

- *Cono:* il cono ha vertice a quota $r$ e base a quota $0$; a quota $h$ il raggio della sezione è $r - h$ (per similitudine: $\dfrac{\rho}{r} = \dfrac{r - h}{r}$, quindi $\rho = r - h$). L'area è:

$$A_{\text{cono}}(h) = \pi(r - h)^2$$

Attenzione: qui il cono ha il vertice $V$ in alto e la base in basso. Per confrontarlo correttamente con la scodella, si considera la sezione del cono a distanza $h$ dalla base, che ha raggio $\rho = h$ (inversamente proporzionale):

$$A_{\text{cono}}(h) = \pi h^2$$

Le due aree sono **uguali** per ogni $h \in [0, r]$.

Per il **principio di Cavalieri**, due solidi le cui sezioni parallele hanno sempre la stessa area hanno lo stesso volume:

$$V_{\text{scodella}} = V_{\text{cono}} = \frac{1}{3}\pi r^2 \cdot r = \frac{\pi r^3}{3}$$

*(Verifica diretta: $V_{\text{cilindro}} = \pi r^3$, $V_{\text{semisfera}} = \dfrac{2}{3}\pi r^3$, $V_{\text{scodella}} = \pi r^3 - \dfrac{2}{3}\pi r^3 = \dfrac{\pi r^3}{3}$.)*

---

*Fonte:* [📄 PDF p.4](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
