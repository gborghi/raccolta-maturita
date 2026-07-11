---
title: Sessione suppletiva 2012 — Prova — Quesito 10 — Svolgimento
tipo: soluzione
item_id: sol_ques_2012_sessione_suppletiva_2012_211_prova_124_10
of_item: ques_2012_sessione_suppletiva_2012_211_prova_124_10
prova_id: prova_2012_sessione_suppletiva_2012_211_prova_124
anno: '2012'
pdf: Prova_Maturita_2012.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2012
---

**Quesito:** [[Quesiti/ques_2012_sessione_suppletiva_2012_211_prova_124_10|Sessione suppletiva 2012 — Prova — Quesito 10]] · **Prova:** [[Prove/2012_sessione_suppletiva_2012_211_prova_124|Sessione suppletiva 2012 — Prova]]

*(PNI 2012 — Matefilia)*

Si pone $VD = x$ con $x > 0$. Dalla similitudine tra i triangoli $AHV$ e $VCE$ risulta $VE : CE = VH : AH$.

$$VC = r + x, \qquad VE = \sqrt{VC^2 - CE^2} = \sqrt{(r+x)^2 - r^2} = \sqrt{x^2 + 2rx}$$

$$VH = 2r + x, \qquad AH = \frac{VH \cdot CE}{VE} = \frac{(2r+x)\,r}{\sqrt{x^2 + 2rx}}$$

Da $VA : VH = VC : VE$:

$$VA = \frac{VC \cdot VH}{VE} = \frac{(r+x)(2r+x)}{\sqrt{x^2 + 2rx}}$$

La superficie laterale del cono è:

$$S = \pi \cdot AH \cdot VA = \pi \cdot \frac{r(2r+x)}{\sqrt{x^2+2rx}} \cdot \frac{(r+x)(2r+x)}{\sqrt{x^2+2rx}} = \frac{\pi\,r(r+x)(2r+x)^2}{x^2 + 2rx}$$

Si minimizza $y = \dfrac{x^3 + 2rx^2 + r^2 x}{x^2 + 2rx}$ (semplificazione della parte dipendente da $x$). La derivata è:

$$y' = 1 - \frac{r^2}{x^2}$$

che è $\geq 0$ per $x \geq r$ e $< 0$ per $0 < x < r/\sqrt{2}$; quindi la funzione ha un minimo in $x = \dfrac{r}{\sqrt{2}}$.

*(Con la collaborazione di Angela Santamaria)*

*Fonte:* [📄 PDF p.134](https://drive.google.com/file/d/15uTp-FXyM3r6gZHrCu6HThex3dLEYCIU/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
