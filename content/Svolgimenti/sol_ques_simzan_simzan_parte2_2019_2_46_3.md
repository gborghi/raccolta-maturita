---
title: >-
  Simulazione Zanichelli 2019 — SimZan parte2 #2 (Mat+Fisica) — Quesito 3 —
  Svolgimento
tipo: soluzione
item_id: sol_ques_simzan_simzan_parte2_2019_2_46_3
of_item: ques_simzan_simzan_parte2_2019_2_46_3
prova_id: prova_simzan_simzan_parte2_2019_2_46
anno: '2019'
pdf: SimZan_parte2.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2019
---

**Quesito:** [[Quesiti/ques_simzan_simzan_parte2_2019_2_46_3|Simulazione Zanichelli 2019 — SimZan parte2 n.2 (Mat+Fisica) — Quesito 3]] · **Prova:** [[Prove/simzan_simzan_parte2_2019_2_46|Simulazione Zanichelli 2019 — SimZan parte2 n.2 (Mat+Fisica)]]

Si consideri la funzione $f: \mathbb{R} \to \mathbb{R}$ definita ponendo:

$$f(x) = \begin{cases} ax^2 + \frac{3}{2} & \text{se } x < 1 \\ be^{1-x} & \text{se } x \ge 1 \end{cases}$$

Determinare i parametri $a$ e $b$ in modo che $f$ risulti derivabile in tutto $\mathbb{R}$. Dopo aver tracciato i grafici di $f(x)$ e $f'(x)$, dire se esiste $f''(1)$.

**Svolgimento.**

**Continuità in $x=1$:**

$$\lim_{x\to 1^-} f(x) = a + \frac{3}{2}, \qquad \lim_{x\to 1^+} f(x) = b$$

Imponendo l'uguaglianza: $a + \dfrac{3}{2} = b$.

**Derivabilità in $x=1$:**

- Derivata sinistra: $f'_-(1) = 2a$
- Derivata destra: $f'_+(1) = -b$

Imponendo $2a = -b$ e usando $b = a + \frac{3}{2}$:

$$2a = -(a + \tfrac{3}{2}) \implies 3a = -\tfrac{3}{2} \implies a = -\tfrac{1}{2}$$

Quindi $b = -\frac{1}{2} + \frac{3}{2} = 1$.

La funzione trovata è:

$$f(x) = \begin{cases} -\dfrac{1}{2}x^2 + \dfrac{3}{2} & \text{se } x < 1 \\ e^{1-x} & \text{se } x \ge 1 \end{cases}$$

*(grafico — vedi PDF p.70)*

**Derivata prima:**

$$f'(x) = \begin{cases} -x & \text{se } x < 1 \\ -e^{1-x} & \text{se } x \ge 1 \end{cases}$$

*(grafico — vedi PDF p.70)*

**Esistenza di $f''(1)$:** poiché $f'(x)$ non è derivabile in $x=1$ (le derivate laterali di $f'$ in $x=1$ sono $f''_-(1)=-1$ e $f''_+(1)=1$, diverse tra loro), la funzione $f$ non ammette derivata seconda in $x=1$.

---

*Fonte:* [📄 PDF p.46](https://drive.google.com/file/d/1BqmILUntZpcWp0WTcGWm3xoaeRYCJBf0/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
