---
title: 'Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 6 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2023_1_2_6
of_item: ques_simzan_simzan_parte3_2023_1_2_6
prova_id: prova_simzan_simzan_parte3_2023_1_2
anno: '2023'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2023
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2023_1_2_6|Simulazione Zanichelli 2023 — SimZan parte3 n.1 — Quesito 6]] · **Prova:** [[Prove/simzan_simzan_parte3_2023_1_2|Simulazione Zanichelli 2023 — SimZan parte3 n.1]]

**Testo:** Una gioielliera realizza una medaglietta d'argento il cui profilo è delimitato dall'arco $ACB$ della circonferenza $x^2+y^2=4$ e dall'arco di parabola $y=a+bx^2$ passante per i punti $A$ e $B$ di ordinata 1. Scrivi le equazioni delle rette tangenti comuni alle due curve nei punti $A$ e $B$. Calcola la massa del medaglione, sapendo che il suo spessore è di 2,0 mm e la densità dell'argento è $\rho_{Ag}=10{,}49$ g/cm³.

*(grafico — vedi PDF p.6 e p.26)*

**Soluzione:**

**Punti $A$ e $B$:** su $x^2+y^2=4$ con $y=1$:

$$x^2=4-1=3 \implies x=\pm\sqrt{3}, \quad A=(-\sqrt{3},1),\;B=(\sqrt{3},1).$$

**Equazione della parabola $y=a+bx^2$** passante per $A$ e $B$ con $y=1$:

$$1=a+3b.$$

**Tangente alla circonferenza in $B=(\sqrt{3},1)$:** differenziando $x^2+y^2=4$:

$$y'=-\frac{x}{y}\bigg|_B=-\frac{\sqrt{3}}{1}=-\sqrt{3}.$$

**Tangente alla parabola in $B$:** $y'=2bx$, quindi $y'(B)=2b\sqrt{3}$.

Condizione di tangenza comune:

$$2b\sqrt{3}=-\sqrt{3} \implies b=-\frac{1}{2}.$$

Da $1=a+3\cdot(-\tfrac{1}{2})$: $a=\dfrac{5}{2}$. La parabola è $y=\dfrac{5}{2}-\dfrac{1}{2}x^2$.

**Rette tangenti comuni:**

In $B=(\sqrt{3},1)$: $y-1=-\sqrt{3}(x-\sqrt{3}) \Rightarrow y=-\sqrt{3}\,x+4$.

In $A=(-\sqrt{3},1)$: per simmetria, $y=\sqrt{3}\,x+4$.

**Area del medaglione:**

*(grafico — vedi PDF p.27)*

Il medaglione è la regione piana compresa tra l'arco di circonferenza $ACB$ (sotto, $y\leq1$) e l'arco di parabola. Per simmetria rispetto all'asse $y$, calcoliamo la metà e moltiplichiamo per 2.

La parabola vale $y_p=\dfrac{5}{2}-\dfrac{1}{2}x^2$ e la circonferenza (parte superiore) $y_c=\sqrt{4-x^2}$. Per $x\in[-\sqrt{3},\sqrt{3}]$, $y_p\geq y_c\geq1$ nell'arco considerato... La regione è tra $y_c$ e $y_p$ per $x\in[-\sqrt{3},\sqrt{3}]$, più le due «alette» laterali.

Dalla soluzione (PDF p.27):

$$A_{\text{medaglione}} = 2(A_1+A_2+A_3),$$

dove $A_1$ è l'area del triangolo rettangolo di cateti $\sqrt{3}$ e $\dfrac{\sqrt{3}}{2}$, $A_2$ è l'area del settore circolare di raggio 2 e angolo $\dfrac{\pi}{3}$, $A_3$ è l'area sotto la parabola.

La soluzione riporta:

$$A_{\text{medaglione}} = 3\sqrt{3}+\frac{5\pi}{6}-\frac{5\sqrt{3}}{2} = \frac{\sqrt{3}}{2}+\frac{5\pi}{6} \approx 13{,}57\text{ cm}^2.$$

*(grafico — vedi PDF p.27)*

**Massa del medaglione:**

$$V_{\text{medaglione}} = A_{\text{medaglione}}\times 0{,}2\text{ cm} = 13{,}57\times0{,}2 = 2{,}715\text{ cm}^3.$$

$$m = \rho_{Ag}\cdot V = 10{,}49\times2{,}715 \approx 28{,}48\text{ g}.$$

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
