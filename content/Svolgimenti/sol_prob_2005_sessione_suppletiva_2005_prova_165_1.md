---
title: 2005 Suppletiva — Prova — Problema 1 — Svolgimento
tipo: soluzione
item_id: sol_prob_2005_sessione_suppletiva_2005_prova_165_1
of_item: prob_2005_sessione_suppletiva_2005_prova_165_1
prova_id: prova_2005_sessione_suppletiva_2005_prova_165
anno: '2005'
pdf: Prova_Maturita_2005.pdf
cluster: Studio di Funzione
tags:
  - maturita/soluzione
  - area/analisi
  - cluster/studio_di_funzione
  - anno/2005
---

**Problema:** [[Problemi/prob_2005_sessione_suppletiva_2005_prova_165_1|2005 Suppletiva — Prova — Problema 1]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_165|2005 Suppletiva — Prova]]

**Testo.** Sono dati una piramide triangolare regolare e il prisma retto inscritto in essa in modo che una base sia la sezione della piramide con il piano equidistante dal suo vertice e dalla sua base.

### Punto A

Il piano a metà altezza taglia la piramide in una sezione triangolare simile alla base con rapporto di similitudine $k = \tfrac{1}{2}$. Il lato della sezione è quindi la metà del lato della base; l'area scala come $k^2 = \tfrac{1}{4}$. Il prisma ha altezza pari alla metà dell'altezza $H$ della piramide. Dunque:

$$V_{\text{prisma}} = S_{MNP} \cdot h = \frac{S_{ABC}}{4} \cdot \frac{H}{2} = \frac{1}{8} S_{ABC} \cdot H = \frac{3}{8} V_{\text{piramide}},$$

poiché $V_{\text{piramide}} = \tfrac{1}{3} S_{ABC} \cdot H$. **Sì**, è possibile: $V_{\text{prisma}} = \dfrac{3}{8}\, V_{\text{piramide}}$.

### Punto B

**B1. Spigolo di $MNP$.**

Il piano equidistante dal vertice e dalla base si trova a metà altezza, e la sezione è simile alla base con rapporto $\tfrac{1}{2}$:

$$\ell_{MNP} = \frac{1}{2} \cdot 4 = 2 \text{ cm}.$$

**B2. Coordinate dei vertici.**

Poniamo $A$ nell'origine e $AB$ sull'asse delle ascisse. Con $AB = 4$:

$$A = (0,\, 0), \quad B = (4,\, 0), \quad C = \left(2,\, 2\sqrt{3}\right).$$

Il baricentro di $ABC$ è $G = \left(2,\, \dfrac{2\sqrt{3}}{3}\right)$, che coincide con il centro di $MNP$ (triangolo equilatero di lato 2, $MN \parallel AB$). Le coordinate dei vertici di $MNP$ sono:

$$M = \left(1,\, \frac{2\sqrt{3}}{3}\right), \quad N = \left(3,\, \frac{2\sqrt{3}}{3}\right), \quad P = \left(2,\, \frac{2\sqrt{3}}{3} + \sqrt{3}\right) = \left(2,\, \frac{5\sqrt{3}}{3}\right).$$

**B3. Equazione della parabola.**

La parabola ha asse verticale (perpendicolare ad $AB$): $y = ax^2 + bx + c$.

- Da $A(0,0)$: $c = 0$.
- Da $B(4,0)$: $16a + 4b = 0 \Rightarrow b = -4a$.
- Da $M\!\left(1,\, \dfrac{2\sqrt{3}}{3}\right)$: $a - 4a = \dfrac{2\sqrt{3}}{3}$, cioè $-3a = \dfrac{2\sqrt{3}}{3}$, quindi $a = -\dfrac{2\sqrt{3}}{9}$ e $b = \dfrac{8\sqrt{3}}{9}$.

$$\boxed{y = -\frac{2\sqrt{3}}{9}\,x^2 + \frac{8\sqrt{3}}{9}\,x = \frac{2\sqrt{3}}{9}\,x(4-x).}$$

**Verifica per $N\!\left(3,\, \dfrac{2\sqrt{3}}{3}\right)$:**

$$y(3) = \frac{2\sqrt{3}}{9} \cdot 3 \cdot 1 = \frac{2\sqrt{3}}{3}. \quad \checkmark$$

**B4. Aree.**

Area di $ABC$: $S_{ABC} = \dfrac{\sqrt{3}}{4} \cdot 16 = 4\sqrt{3}$.

Integrale della parabola da $0$ a $4$ (area tra parabola e lato $AB$):

$$\int_0^4 \frac{2\sqrt{3}}{9}\,x(4-x)\,dx = \frac{2\sqrt{3}}{9}\left[2x^2 - \frac{x^3}{3}\right]_0^4 = \frac{2\sqrt{3}}{9}\left(32 - \frac{64}{3}\right) = \frac{2\sqrt{3}}{9} \cdot \frac{32}{3} = \frac{64\sqrt{3}}{27}.$$

La parabola divide $ABC$ in:

- Parte compresa tra $AB$ e la parabola: $\dfrac{64\sqrt{3}}{27}$.
- Parte compresa tra la parabola e il vertice $C$: $4\sqrt{3} - \dfrac{64\sqrt{3}}{27} = \dfrac{108\sqrt{3} - 64\sqrt{3}}{27} = \dfrac{44\sqrt{3}}{27}$.

Per $MNP$ (base $MN$ a quota $y_0 = \dfrac{2\sqrt{3}}{3}$), la parabola passa per $M$ e $N$. Integrale tra $x=1$ e $x=3$ della parabola al di sopra della retta $y = y_0$:

$$\int_1^3 \left(\frac{2\sqrt{3}}{9}\,x(4-x) - \frac{2\sqrt{3}}{3}\right)dx = \frac{2\sqrt{3}}{9}\int_1^3(4x - x^2 - 3)\,dx.$$

$$\int_1^3(4x - x^2 - 3)\,dx = \left[2x^2 - \frac{x^3}{3} - 3x\right]_1^3 = \left(18 - 9 - 9\right) - \left(2 - \frac{1}{3} - 3\right) = 0 - \left(-\frac{4}{3}\right) = \frac{4}{3}.$$

Quindi l'area tra la parabola e $MN$ (parte di $MNP$ sotto la parabola, verso $MN$) è:

$$\frac{2\sqrt{3}}{9} \cdot \frac{4}{3} = \frac{8\sqrt{3}}{27}.$$

La parabola divide $MNP$ (area $S_{MNP} = \sqrt{3}$) in:

- Parte compresa tra $MN$ e la parabola: $\dfrac{8\sqrt{3}}{27}$.
- Parte compresa tra la parabola e il vertice $P$: $\sqrt{3} - \dfrac{8\sqrt{3}}{27} = \dfrac{19\sqrt{3}}{27}$.

**B5. Posizione della circonferenza circoscritta a $MNP$ rispetto ad $ABC$.**

Per un triangolo equilatero di lato $\ell$, il raggio della circonferenza circoscritta è $R = \dfrac{\ell}{\sqrt{3}}$ e il centro coincide con il baricentro.

- Circoscritta a $ABC$: centro $G = \left(2,\, \dfrac{2\sqrt{3}}{3}\right)$, raggio $R_{ABC} = \dfrac{4}{\sqrt{3}} = \dfrac{4\sqrt{3}}{3}$.
- Circoscritta a $MNP$: stesso centro $G$, raggio $r_{MNP} = \dfrac{2}{\sqrt{3}} = \dfrac{2\sqrt{3}}{3}$.

La circoscritta a $MNP$ è concentrica alla circoscritta a $ABC$ e ha raggio esattamente la metà. Inoltre il raggio della circonferenza inscritta in $ABC$ vale $\dfrac{4}{2\sqrt{3}} = \dfrac{2\sqrt{3}}{3} = r_{MNP}$. Pertanto **la circonferenza circoscritta a $MNP$ coincide con la circonferenza inscritta in $ABC$**: è tangente ai tre lati di $ABC$ dall'interno.

---

*Fonte:* [📄 PDF p.165](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
