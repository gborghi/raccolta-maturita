---
title: 'Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 3 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2023_1_2_3
of_item: ques_simzan_simzan_parte3_2023_1_2_3
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2023_1_2_3|Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte3_2023_1_2|Simulazione Zanichelli 2023 — SimZan parte3 #1]]

**Testo:** Considera un quadrato $ABCD$ di lato 1. Sia $P$ un punto sul lato $AB$ e sia $e$ la perpendicolare dal punto $P$ al segmento $PC$. Determina $x=\overline{AP}$ in modo che l'area $S$ del triangolo $APQ$ sia massima e ricava $S_{\max}$. Determina $x=\overline{AP}$ in modo che il volume $V$ del cono ottenuto per rotazione del triangolo $APQ$ intorno al cateto $AP$ sia massimo e ricava $V_{\max}$.

*(grafico — vedi PDF p.5)*

**Soluzione:**

Sia $x=\overline{AP}\in[0,1]$. Il cateto del triangolo $APQ$ opposto ad $AP$ ha lunghezza $1-x$ (dalla geometria del quadrato). L'area del triangolo è:

$$S(x)=\frac{1}{2}\cdot x\cdot(1-x)$$

oppure, dalla soluzione (PDF p.23):

$$S(x)=\frac{x^2(1-x)}{2}.$$

$S'(x)=\dfrac{2x(1-x)-x^2}{2}=\dfrac{x(2-3x)}{2}$.

$S'(x)=0 \Rightarrow x=0$ o $x=\dfrac{2}{3}$ (massimo).

$$S_{\max}=S\!\left(\tfrac{2}{3}\right)=\frac{\left(\frac{2}{3}\right)^2\!\left(\frac{1}{3}\right)}{2}=\frac{\frac{4}{27}}{2}=\frac{2}{27}.$$

**Volume del cono per rotazione intorno ad $AP$:**

Raggio della base del cono $r=1-x$, altezza $h=x$:

$$V(x)=\frac{\pi}{3}(1-x)^2\cdot x.$$

$V'(x)=\dfrac{\pi}{3}\left[-2x(1-x)+(1-x)^2\right]=\dfrac{\pi}{3}(1-x)(1-3x)$.

$V'(x)=0 \Rightarrow x=1$ (min) o $x=\dfrac{1}{3}$ (max).

$$V_{\max}=V\!\left(\tfrac{1}{3}\right)=\frac{\pi}{3}\cdot\left(\frac{2}{3}\right)^2\cdot\frac{1}{3}=\frac{\pi}{3}\cdot\frac{4}{9}\cdot\frac{1}{3}=\frac{4\pi}{81}.$$

*(grafico — vedi PDF p.5 e p.23)*

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
