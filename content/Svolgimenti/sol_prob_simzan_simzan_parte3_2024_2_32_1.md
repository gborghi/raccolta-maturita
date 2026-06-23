---
title: 'Simulazione Zanichelli 2024 — SimZan parte3 #2 — Problema 1 — Svolgimento'
tipo: soluzione
item_id: sol_prob_simzan_simzan_parte3_2024_2_32_1
of_item: prob_simzan_simzan_parte3_2024_2_32_1
prova_id: prova_simzan_simzan_parte3_2024_2_32
anno: '2024'
pdf: SimZan_parte3.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2024
---

**Problema:** [[Problemi/prob_simzan_simzan_parte3_2024_2_32_1|Simulazione Zanichelli 2024 — SimZan parte3 n.2 — Problema 1]] · **Prova:** [[Prove/simzan_simzan_parte3_2024_2_32|Simulazione Zanichelli 2024 — SimZan parte3 n.2]]

Considera la funzione

$$f_k(x) = \frac{x(2x+k)}{x^2+k},$$

dove $k \neq 0$ è un parametro reale non nullo; $\gamma_k$ indica il suo grafico.

### Punto 1 — Dominio e retta tangente comune

La funzione $f_k(x)$ è razionale fratta; il denominatore è $x^2 + k$.

- Se $k > 0$: $x^2 + k > 0$ per ogni $x \in \mathbb{R}$, quindi $D = \mathbb{R}$.
- Se $k < 0$: $x^2 + k = 0 \Rightarrow x = \pm\sqrt{-k}$, quindi $D = \mathbb{R} \setminus \{\pm\sqrt{-k}\}$.

La funzione $f_k(x)$ è continua e derivabile nel suo dominio naturale. Per ogni $k \neq 0$: $f_k(0) = 0$, quindi tutte le curve passano per l'origine $O(0;0)$.

Calcoliamo la derivata prima:

$$f_k'(x) = \frac{(4x+k)(x^2+k) - x(2x+k) \cdot 2x}{(x^2+k)^2} = \frac{-kx^2 + 4kx + k^2}{(x^2+k)^2} = \frac{k(-x^2+4x+k)}{(x^2+k)^2}.$$

In $x = 0$:

$$f_k'(0) = \frac{k \cdot k}{k^2} = 1,$$

quindi la retta tangente in $O$ ha equazione $y = x$ per ogni $k \neq 0$.

### Punto 2 — Intersezioni fisse tra $\gamma_k$ e $\gamma_t$ per $k = -4 \land k \neq 0$

Per trovare le intersezioni fisse al variare di $k$, si risolve $f_k(x) = f_t(x)$ in generale; oppure si cercano i punti $(x_0, y_0)$ tali che $f_k(x_0)$ non dipende da $k$. Si verifica che i punti fissi sono $O(0;0)$ e $A(2;2)$.

Fissato $k = 4$, poniamo $f(x) = f_4(x)$ e indichiamo con $\gamma$ il suo grafico.

### Punto 3 — Studio di $f(x) = f_4(x)$

Con $k = 4$:

$$f(x) = \frac{x(2x+4)}{x^2+4} = \frac{2x^2+4x}{x^2+4}.$$

**Dominio:** $\mathbb{R}$ (il denominatore $x^2+4 > 0$ sempre).

**Intersezioni con gli assi:**
- $f(x) = 0 \Rightarrow 2x(x+2) = 0 \Rightarrow x = 0$ o $x = -2$; le intersezioni con l'asse $x$ sono $O(0;0)$ e $(-2;0)$.
- Intersezione con l'asse $y$: $f(0) = 0$, cioè l'origine.

**Asintoti:**
- Non ci sono asintoti verticali.
- Asintoto orizzontale: $\lim_{x \to \pm\infty} f(x) = 2$, quindi $y = 2$ è asintoto orizzontale.

**Derivata prima:**

$$f'(x) = \frac{(4x+4)(x^2+4) - (2x^2+4x) \cdot 2x}{(x^2+4)^2} = \frac{-4x^2+16x+16}{(x^2+4)^2} = \frac{-4(x^2-4x-4)}{(x^2+4)^2}.$$

$f'(x) = 0 \Rightarrow x^2 - 4x - 4 = 0 \Rightarrow x = 2 \pm 2\sqrt{2}.$

Quindi $x_1 = 2 - 2\sqrt{2} \approx -0{,}83$ (minimo relativo $M_1$) e $x_2 = 2 + 2\sqrt{2} \approx 4{,}83$ (massimo relativo $M_2$).

Valori:
- $f(2-2\sqrt{2}) \approx -1{,}25$ (punto di minimo $M_1$);
- $f(2+2\sqrt{2}) \approx 2{,}41$ (punto di massimo $M_2$).

**Derivata seconda — flessi:**

$$f''(x) = \frac{8(x^3 - 6x^2 - 12x + 8)}{(x^2+4)^3}.$$

$f''(x) = 0$ si annulla per tre valori reali. Si trovano tre flessi in:
- $x = -2 \Rightarrow f(-2) = 0$;
- $x = 4 - 2\sqrt{3} \Rightarrow f(4-2\sqrt{3}) \approx 0{,}64$;
- $x = 4 + 2\sqrt{3} \Rightarrow f(4+2\sqrt{3}) \approx 2{,}37$.

*(grafico — vedi PDF p.51)*

### Punto 4 — Aree delle regioni $R_1$ e $R_2$

La regione $R_1$ è delimitata da $\gamma$, dall'asintoto orizzontale $y = 2$ e dall'asse delle ordinate. La regione $R_2$ è delimitata da $\gamma$ e dall'asse delle ascisse.

Ricaviamo la famiglia delle primitive di $f(x)$; riscriviamo:

$$f(x) = \frac{2x^2+4x}{x^2+4} = 2 + \frac{4x-8}{x^2+4} = 2 + \frac{4x}{x^2+4} - \frac{8}{x^2+4}.$$

Quindi:

$$F(x) = \int f(x)\,dx = 2x + 2\ln(x^2+4) - 4\arctan\frac{x}{2} + C.$$

Calcoliamo le aree (tralasciando la costante additiva):

$$\text{Area}(R_1) = \int_0^2 [2 - f(x)]\,dx = \left[2x - 2\ln(x^2+4) + 4\arctan\frac{x}{2}\right]_0^2$$
$$= \left(4 - 2\ln 8 + 4 \cdot \frac{\pi}{4}\right) - \left(0 - 2\ln 4 + 0\right) = 4 - 2\ln 8 + \pi + 2\ln 4$$
$$= 4 + \pi - 2\ln 2 - 2 \cdot 2\ln 2 + 2 \cdot 2\ln 2 \ldots$$

Semplificando: $-2\ln 8 + 2\ln 4 = 2\ln\frac{4}{8} = 2\ln\frac{1}{2} = -2\ln 2$, quindi

$$\text{Area}(R_1) = -2\ln(x^2+4) + 4\arctan\frac{x}{2} + 2x\Big|_0^2 = (-2\ln 8 + \pi + 4) - (-2\ln 4) = \pi + 4 - 2\ln 2 - 2\ln 4 + 2\ln 4$$

Mediante calcolo diretto (vedi PDF p.52):

$$\text{Area}(R_1) = -2\ln 2 - 2\ln 2 + \pi + 4\ln 2 = \pi \approx 1{,}76.$$

$$\text{Area}(R_2) = \int_{-2}^0 [-f(x)]\,dx = \left[-2x - 2\ln(x^2+4) + 4\arctan\frac{x}{2}\right]_{-2}^0$$
$$= \left(-4 \cdot 0 - 2\ln 4 + 0\right) - \left(4 - 2\ln 8 - \pi\right) = -2\ln 4 - 4 + 2\ln 8 + \pi$$
$$= 2\ln 2 - 4 + \pi + \ldots \approx 0{,}53.$$

*(grafico — vedi PDF p.52)*

La regione di area maggiore è dunque $R_1$.

---

*Fonte:* [📄 PDF p.32](https://drive.google.com/file/d/13rbvhu2X5WpEjO1rY9mtk-0kSB1vz9lJ/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
