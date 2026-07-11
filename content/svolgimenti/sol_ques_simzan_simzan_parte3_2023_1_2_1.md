---
title: 'Simulazione Zanichelli 2023 — SimZan parte3 #1 — Quesito 1 — Svolgimento'
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte3_2023_1_2_1
of_item: ques_simzan_simzan_parte3_2023_1_2_1
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

**Quesito:** [[Quesiti/ques_simzan_simzan_parte3_2023_1_2_1|Simulazione Zanichelli 2023 — SimZan parte3 n.1 — Quesito 1]] · **Prova:** [[Prove/simzan_simzan_parte3_2023_1_2|Simulazione Zanichelli 2023 — SimZan parte3 n.1]]

**Testo:** Determinare l'espressione analitica della funzione $y=f(x)$ sapendo che $f''(x)=2-\dfrac{20}{x^2}$ e che la retta di equazione $y=16x-16$ è tangente al grafico della funzione $f(x)$ nel suo punto $P(1;\,0)$. Trovare gli eventuali asintoti della funzione $y=f(x)$.

**Soluzione:**

Poiché la retta $y=16x-16$ è tangente a $f$ nel punto $P(1;0)$:
- $f(1)=0$ (il punto è sul grafico);
- $f'(1)=16$ (la pendenza coincide con quella della tangente).

Integriamo $f''(x)$:

$$f'(x)=\int\!\left(2-\frac{20}{x^2}\right)dx = 2x+\frac{20}{x}+c_1.$$

Dalla condizione $f'(1)=16$:

$$2+20+c_1=16 \implies c_1=-6.$$

Quindi:

$$f'(x)=2x+\frac{20}{x}-6.$$

Integriamo per trovare $f(x)$:

$$f(x)=\int\!\left(2x+\frac{20}{x}-6\right)dx = x^2+20\ln|x|-6x+c_2.$$

Dalla condizione $f(1)=0$:

$$1+0-6+c_2=0 \implies c_2=5.$$

Quindi:

$$f(x)=x^2+20\ln|x|-6x+5.$$

**Dominio:** $x\neq0$, cioè $(-\infty,0)\cup(0,+\infty)$.

**Asintoti:** Per $x\to0^{\pm}$ si ha $20\ln|x|\to-\infty$, quindi $f(x)\to-\infty$: nessun asintoto verticale finito (discontinuità essenziale). Per $x\to\pm\infty$, $f(x)\to+\infty$ (domina $x^2$): nessun asintoto orizzontale né obliquo.

La funzione non ha asintoti.

---

*Fonte:* [📄 PDF p.2](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
