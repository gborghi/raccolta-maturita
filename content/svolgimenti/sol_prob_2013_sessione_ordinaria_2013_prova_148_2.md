---
title: 2013 Ordinaria PNI — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2013_sessione_ordinaria_2013_prova_148_2
of_item: prob_2013_sessione_ordinaria_2013_prova_148_2
prova_id: prova_2013_sessione_ordinaria_2013_prova_148
anno: '2013'
pdf: Prova_Maturita_2013.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2013
---

**Problema:** [[Problemi/prob_2013_sessione_ordinaria_2013_prova_148_2|2013 Ordinaria PNI — Prova — Problema 2]] · **Prova:** [[Prove/2013_sessione_ordinaria_2013_prova_148|2013 Ordinaria PNI — Prova]]

La funzione è $f(x)=\dfrac{\ln x}{x^3}$, definita per $x>0$.

### Punto 1 — studio di $f$ e grafico

**Dominio:** $(0,+\infty)$.

**Segno:** $f(x)>0$ per $x>1$; $f(1)=0$; $f(x)<0$ per $0<x<1$.

**Comportamento agli estremi:**

$$\lim_{x\to 0^+}\frac{\ln x}{x^3} = -\infty, \qquad \lim_{x\to+\infty}\frac{\ln x}{x^3} = 0^+.$$

Asintoto verticale $x=0$ con $f\to-\infty$; asintoto orizzontale $y=0$ per $x\to+\infty$.

**Prima derivata:**

$$f'(x) = \frac{\frac{1}{x}\cdot x^3 - \ln x\cdot 3x^2}{x^6} = \frac{1-3\ln x}{x^4}.$$

$f'(x)=0 \iff \ln x=\frac{1}{3} \iff x=e^{1/3}\approx 1{,}395$.

$f$ crescente su $(0,e^{1/3})$, decrescente su $(e^{1/3},+\infty)$.

**Massimo locale** in $x_M=e^{1/3}$:

$$f(e^{1/3}) = \frac{1/3}{e} = \frac{1}{3e}\approx 0{,}123.$$

**Seconda derivata:**

$$f''(x) = \frac{-\frac{3}{x}\cdot x^4 - (1-3\ln x)\cdot 4x^3}{x^8} = \frac{12\ln x - 7}{x^5}.$$

$f''(x)=0 \iff \ln x=\frac{7}{12} \iff x=e^{7/12}\approx 1{,}792$.

$f''<0$ per $x<e^{7/12}$ (concava verso il basso); $f''>0$ per $x>e^{7/12}$ (convessa verso il basso).

**Flesso** in $x_f=e^{7/12}\approx 1{,}792$:

$$f(e^{7/12}) = \frac{7/12}{e^{7/4}} = \frac{7}{12e^{7/4}}\approx 0{,}101.$$

Ascisse arrotondate: $x_M\approx 1{,}395$, $x_f\approx 1{,}792$.

*(grafico — vedi PDF p.148)*

### Punto 2 — parabola tangente a $\gamma$ in $P$

$P$ è l'intersezione di $\gamma$ con l'asse $x$: $f(x)=0\iff x=1$, quindi $P=(1,0)$.

La parabola ha asse parallelo all'asse $y$: $y=\alpha x^2+\beta x+\gamma_0$.

- **Passa per l'origine:** $\gamma_0=0$.
- **Passa per $P=(1,0)$:** $\alpha+\beta=0$, cioè $\beta=-\alpha$.
- **Tangente a $\gamma$ in $P$:** pendenza della parabola in $x=1$ è $(2\alpha\cdot1+\beta)=\alpha$. Pendenza di $\gamma$ in $P$:

$$f'(1)=\frac{1-3\ln 1}{1}=1.$$

Quindi $\alpha=1$, $\beta=-1$.

$$\boxed{y=x^2-x.}$$

### Punto 3 — area di $R$

$R$ è delimitata da $\gamma$ e dall'asse $x$ su $(0,1]$. Per $0<x<1$, $f(x)<0$, quindi:

$$A = -\int_0^1 \frac{\ln x}{x^3}\,dx.$$

Integrazione per parti con $u=\ln x$, $dv=-x^{-3}\,dx$; $du=\frac{dx}{x}$, $v=\frac{1}{2x^2}$:

$$-\int\frac{\ln x}{x^3}\,dx = \frac{\ln x}{2x^2}+\frac{1}{4x^2}+C.$$

Limite in $x\to 0^+$:

$$\lim_{x\to 0^+}\left(\frac{\ln x}{2x^2}+\frac{1}{4x^2}\right) = \lim_{x\to 0^+}\frac{2\ln x+1}{4x^2} = -\infty.$$

L'integrale **diverge**: l'area di $R$ è **infinita** (l'integranda $|f(x)|=\frac{-\ln x}{x^3}\to+\infty$ per $x\to 0^+$).

### Punto 4 — curve simmetriche

**Simmetrica di $\gamma$ rispetto all'asse $y$** ($x\mapsto-x$, dominio $x<0$):

$$y = -\frac{\ln(-x)}{x^3}, \qquad x<0.$$

*(grafico — vedi PDF p.149)*

**Simmetrica di $\gamma$ rispetto alla retta $y=-1$** ($(x,y)\mapsto(x,-2-y)$):

$$y = -2-\frac{\ln x}{x^3}, \qquad x>0.$$

*(grafico — vedi PDF p.149)*

---

*Fonte:* [📄 PDF p.148](https://drive.google.com/file/d/1Ujy2KOoOlYqnKmkc2wp0SYCzzIA0VSW3/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
