---
title: 2025 Suppletiva — Prova — Quesito 5 — Svolgimento
tipo: soluzione
item_id: sol_ques_2025_sessione_suppletiva_2025_prova_10_5
of_item: ques_2025_sessione_suppletiva_2025_prova_10_5
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

**Quesito:** [[Quesiti/ques_2025_sessione_suppletiva_2025_prova_10_5|2025 Suppletiva — Prova — Quesito 5]] · **Prova:** [[Prove/2025_sessione_suppletiva_2025_prova_10|2025 Suppletiva — Prova]]

**Contorno.** Il triangolo di Reuleaux si ottiene tracciando, da ciascun vertice del triangolo equilatero di lato $L$, un arco di cerchio di raggio $L$ che congiunge i due vertici opposti. Ogni arco ha raggio $L$ e sottende un angolo al centro di $60^\circ=\pi/3$ radianti (l'angolo del triangolo equilatero). La lunghezza di ciascun arco è pertanto:
$$
\ell = L\cdot\frac{\pi}{3}.
$$
Essendo il contorno composto da 3 archi uguali, la lunghezza totale vale:
$$
P = 3\cdot\frac{\pi L}{3}=\boxed{\pi L}.
$$
**Area.** Ciascun arco delimita, insieme ai due raggi, un settore circolare di raggio $L$ e ampiezza $\pi/3$. L'area di ogni settore è:
$$
S_{\text{settore}} = \frac{1}{2}L^2\cdot\frac{\pi}{3}=\frac{\pi L^2}{6}.
$$
L'area del triangolo di Reuleaux si ottiene sommando le aree dei 3 settori e sottraendo le sovrapposizioni. Poiché i tre settori coprono interamente la figura, ma il triangolo equilatero interno viene contato 3 volte (una per settore) anziché 1, occorre sottrarre 2 volte l'area del triangolo equilatero:
$$
A_{\text{Reuleaux}} = 3\cdot\frac{\pi L^2}{6}-2\cdot\frac{\sqrt{3}}{4}L^2 = \frac{\pi L^2}{2}-\frac{\sqrt{3}}{2}L^2 = \boxed{\frac{(\pi-\sqrt{3}) L^2}{2}}.
$$
![[_attachments/ques_2025_sessione_suppletiva_2025_prova_10_5/ques_2025_sessione_suppletiva_2025_prova_10_5_fig1.svg]]

*Triangolo di Reuleaux: contorno $= \pi L$.*

*Fonte: svolgimento dal libro «Matematica alla Maturità» · [📄 testo p.10](https://drive.google.com/file/d/1eFb2mSEYYU4eZ21hPBBkSerDAgf3k4Dp/view)*


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
