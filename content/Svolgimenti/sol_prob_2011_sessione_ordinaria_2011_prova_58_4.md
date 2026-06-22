---
title: 2011 Ordinaria (Europa) — Prova — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2011_sessione_ordinaria_2011_prova_58_4
of_item: prob_2011_sessione_ordinaria_2011_prova_58_4
prova_id: prova_2011_sessione_ordinaria_2011_prova_58
anno: '2011'
pdf: Prova_Maturita_2011.pdf
cluster: Calcolo Integrale e Aree
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/calcolo_integrale_e_aree
  - anno/2011
---

**Problema:** [[Problemi/prob_2011_sessione_ordinaria_2011_prova_58_4|2011 Ordinaria (Europa) — Prova — Problema 2]] · **Prova:** [[Prove/2011_sessione_ordinaria_2011_prova_58|2011 Ordinaria (Europa) — Prova]]

*(Liceo della Comunicazione — Punti $A(2;1)$, $B(-2;1)$, $C(2;3)$, $D(2;5)$, $E(6;5)$. Fascio di curve $y=\dfrac{x^2+2x+a}{2x-4}$.)*

**Punto a.** Il quadrilatero convesso $ABDE$ ha diagonali $AD$ e $BE$:
- Punto medio di $AD$: $M_{AD}=\!\left(\dfrac{2+2}{2},\dfrac{1+5}{2}\right)=(2,3)=C$. ✓
- Punto medio di $BE$: $M_{BE}=\!\left(\dfrac{-2+6}{2},\dfrac{1+5}{2}\right)=(2,3)=C$. ✓

Le diagonali si bisecano in $C$, dunque $ABDE$ è un **parallelogramma**. Area:

$$|AB|=4,\quad \text{altezza tra }y=1\text{ e }y=5\text{ è }4 \implies \text{Area} = 4\times 4 = 16$$

---

**Punto b.** Divisione polinomiale: $x^2+2x+a = (x-2)(x+4)+(8+a)$, quindi:

$$y = \frac{x^2+2x+a}{2(x-2)} = \frac{x+4}{2} + \frac{8+a}{2(x-2)}$$

- Asintoto verticale: $x=2$, che è la retta $AD$. ✓
- Asintoto obliquo: $y=\dfrac{x+4}{2}=\dfrac{1}{2}x+2$. La retta $BE$ passa per $B(-2,1)$ e $E(6,5)$: pendenza $\dfrac{4}{8}=\dfrac{1}{2}$, equazione $y=\dfrac{1}{2}x+2$. ✓
- Centro di simmetria: intersezione degli asintoti, $x=2$ e $y=\dfrac{1}{2}(2)+2=3$: punto $C=(2,3)$. ✓

---

**Punto c.** La curva $\lambda$ passa per $P(0,1)$:

$$1 = \frac{0+0+a}{2(0-2)} = \frac{a}{-4} \implies a = -4$$

La curva è:

$$\lambda:\quad y = \frac{x^2+2x-4}{2(x-2)} = \frac{x+4}{2}+\frac{2}{x-2}$$

Verifica tangenza della retta $AB$ ($y=1$) a $\lambda$:

$$\frac{x^2+2x-4}{2(x-2)}=1 \implies x^2+2x-4=2x-4 \implies x^2=0 \implies x=0 \text{ (radice doppia)} \checkmark$$

La retta $y=1$ è tangente a $\lambda$ nel punto $(0,1)$.

Verifica tangenza della retta $DE$ ($y=5$) a $\lambda$:

$$\frac{x^2+2x-4}{2(x-2)}=5 \implies x^2+2x-4=10x-20 \implies x^2-8x+16=0 \implies (x-4)^2=0 \checkmark$$

La retta $y=5$ è tangente a $\lambda$ nel punto $(4,5)$.

*(grafico — vedi PDF p.69)*

---

**Punto d.** Area della regione finita delimitata da $\lambda$, dalla retta $BE$ ($y=\frac{1}{2}x+2$), dalla retta $x=-2$ e dall'asse $y$ ($x=0$).

La differenza $\lambda(x)-\left(\dfrac{x}{2}+2\right)$ per $x\in[-2,0]$:

$$\lambda(x) - \left(\frac{x}{2}+2\right) = \frac{x+4}{2}+\frac{2}{x-2}-\frac{x}{2}-2 = \frac{2}{x-2}$$

Per $x\in[-2,0]$: $x-2\in[-4,-2]<0$, quindi $\frac{2}{x-2}<0$: la retta $BE$ è sopra $\lambda$.

$$\text{Area} = \int_{-2}^{0}\left|\frac{2}{x-2}\right|dx = \int_{-2}^{0}\frac{2}{2-x}\,dx = \left[-2\ln(2-x)\right]_{-2}^{0}$$

$$= -2\ln 2-(-2\ln 4) = -2\ln 2+4\ln 2 = 2\ln 2$$

---

*Fonte:* [📄 PDF p.58](https://drive.google.com/file/d/1n7qQSR6joIJerX8l_7M5ZnD0O28Aqabx/view)


#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
