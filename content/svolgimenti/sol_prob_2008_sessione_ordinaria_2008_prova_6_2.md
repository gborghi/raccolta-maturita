---
title: 2008 Ordinaria — Prova (Ordinamento) — Problema 2 — Svolgimento
tipo: soluzione
item_id: sol_prob_2008_sessione_ordinaria_2008_prova_6_2
of_item: prob_2008_sessione_ordinaria_2008_prova_6_2
prova_id: prova_2008_sessione_ordinaria_2008_prova_6
anno: '2008'
pdf: Prova_Maturita_2008.pdf
cluster: 'Derivate, Massimi e Minimi'
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/derivate_massimi_e_minimi
  - anno/2008
---

**Problema:** [[Problemi/prob_2008_sessione_ordinaria_2008_prova_6_2|2008 Ordinaria — Prova (Ordinamento) — Problema 2]] · **Prova:** [[Prove/2008_sessione_ordinaria_2008_prova_6|2008 Ordinaria — Prova (Ordinamento)]]

Il semicerchio $\Gamma$ ha centro $C$ e diametro $AB = 2$.

### a)

Il secondo semicerchio $\Gamma_1$ è tangente ad $AB$ in $C$ e ha raggio $1$.

I segmenti $OC$, $OD$, $OE$, $CD$ e $CE$ misurano tutti $1$ (raggi); pertanto gli angoli $\widehat{DOC}$ e $\widehat{COE}$ misurano $60°$. Il punto $F$ (piede della perpendicolare da $O$ su $DE$) soddisfa:

$$OF = \frac{1}{2}, \qquad DF = FE = \frac{\sqrt{3}}{2}$$

L'area dell'intersezione è il doppio dell'area del segmento circolare $DCE$:

$$\text{Area(segmento } DCE) = \text{Area(settore } DOE \text{ di } \Gamma_1) - \text{Area}(\triangle DOE)$$

$$= \frac{\pi}{3} - \frac{1}{2} \cdot DE \cdot OF = \frac{\pi}{3} - \frac{1}{2} \cdot \sqrt{3} \cdot \frac{1}{2} = \frac{\pi}{3} - \frac{\sqrt{3}}{4}$$

L'area richiesta vale quindi:

$$2\!\left(\frac{\pi}{3} - \frac{\sqrt{3}}{4}\right) = \frac{2\pi}{3} - \frac{\sqrt{3}}{2}$$

### b)

Posto $AL = x$, con $0 \le x \le 1$. Per il secondo teorema di Euclide:

$$GL = \sqrt{x(2 - x)}, \qquad KL = GL = \sqrt{x(2 - x)}, \qquad LB = 2 - x$$

L'area del rettangolo $GHKL$ è $y = KL \cdot GL = x(2-x)$; massimizzando $z = y^2 \cdot 4(1-x)^2 \cdot x(2-x)$, si trova il massimo per:

$$x = 2 - \sqrt{2}$$

In corrispondenza di tale valore si ha l'area massima richiesta, che è pari a $1$.

### c)

Sia $\widehat{BCP} = x$ con $P$ punto della semicirconferenza di $\Gamma$ e $H$ proiezione ortogonale di $P$ su $AB$.

**Caso $0 < x < \dfrac{\pi}{2}$:**

$$AP = 2\cos\frac{x}{2}, \quad AH = 2\cos^2\frac{x}{2} = 1 + \cos x, \quad PH = \sin x, \quad CH = \cos x$$

$$S_1 = \text{Area}(\triangle APH) = \frac{1}{2}\,AH \cdot PH = \frac{1}{2}(1 + \cos x)\sin x$$

$$S_2 = \text{Area}(\triangle PCH) = \frac{1}{2}\,PH \cdot CH = \frac{1}{2}\sin x\cos x$$

$$f(x) = \frac{S_1(x)}{S_2(x)} = \frac{(1 + \cos x)\sin x}{\sin x\cos x} = \frac{1 + \cos x}{\cos x} = \sec x + 1$$

**Caso $\dfrac{\pi}{2} < x < \pi$:**

In questo caso $CH = -\cos x > 0$, quindi:

$$S_2 = \frac{1}{2}\sin x\cdot(-\cos x) = -\frac{1}{2}\sin x\cos x$$

$$f(x) = \frac{\frac{1}{2}(1 + \cos x)\sin x}{-\frac{1}{2}\sin x\cos x} = -\frac{1 + \cos x}{\cos x} = -(\sec x + 1)$$

Complessivamente, la formula unificata è:

$$f(x) = \sec x + 1$$

### d)

Il grafico di $f(x) = \sec x + 1$ si ottiene dal grafico della secante traslato verticalmente di $+1$.

Dominio: $\mathbb{R} \setminus \!\left\{\dfrac{\pi}{2} + k\pi,\; k \in \mathbb{Z}\right\}$.

*(grafico nell'intervallo $[-2\pi;\,2\pi]$ — vedi PDF)*

---

*Fonte:* [📄 PDF p.6](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
