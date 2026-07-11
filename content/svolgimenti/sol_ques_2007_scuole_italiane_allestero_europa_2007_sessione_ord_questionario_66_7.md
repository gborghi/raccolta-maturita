---
title: 2007 Estero Europa Ordinaria — Questionario — Quesito 7 — Svolgimento
tipo: soluzione
item_id: >-
  sol_ques_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66_7
of_item: ques_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66_7
prova_id: prova_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66
anno: '2007'
pdf: Prova_Maturita_2007.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2007
---

**Quesito:** [[Quesiti/ques_2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66_7|2007 Estero Europa Ordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_europa_2007_sessione_ord_questionario_66|2007 Estero Europa Ordinaria — Questionario]]

Fra tutti i coni circolari retti circoscritti ad una sfera di raggio $r$, quello di minima area laterale ha il suo vertice distante dalla superficie sferica della quantità $r\sqrt{2}$.

Poniamo $VD = x$ (con $x > 0$). Dalla similitudine fra i triangoli $AHV$ e $VCE$ risulta $VE : CE = VH : AH$. Si ha $VC = r + x$ e $VH = 2r + x$.

Dalla similitudine si ricava:

$$\frac{VE}{VC} = \frac{CE}{EC}, \qquad VE^2 = \frac{(r+x)^2 \cdot r^2}{rx} \cdot x \quad \Longrightarrow \quad VE = \frac{(r+x)\sqrt{r}}{\sqrt{x}} \cdot \sqrt{x} = (r+x)\sqrt{\frac{r}{x} \cdot x}$$

In forma compatta (dalla similitudine $\triangle AHV \sim \triangle VCE$):

$$CE = AH = \frac{r\sqrt{x(2r+x)}}{r+x} \cdot \frac{r+x}{r} = \sqrt{x(2r+x)/r} \cdot \sqrt{r} = \sqrt{x(2r+x)}$$

e $VH = 2r + x$, quindi:

$$AH = \sqrt{x(2r+x)}, \qquad VA = \frac{VH \cdot VC}{VE} = \frac{(2r+x)(r+x)}{\sqrt{r \cdot x(2r+x)/(r)}} \cdot \frac{1}{\sqrt{r}}$$

La superficie laterale del cono è:

$$S = \pi \cdot AH \cdot VA = \pi r^2 \cdot \frac{(r+x)(2r+x)}{rx}$$

Questa è minima se lo è:

$$y = \frac{(r+x)^2(2r+x)}{rx}$$

La derivata si annulla per $x^2 = 2r^2$, cioè, data la limitazione $x > 0$:

$$x = r\sqrt{2}$$

La funzione è decrescente per $0 < x < r\sqrt{2}$ e crescente per $x > r\sqrt{2}$, pertanto in $x = r\sqrt{2}$ ha il minimo, come richiesto.

*Fonte:* [📄 PDF p.70](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
