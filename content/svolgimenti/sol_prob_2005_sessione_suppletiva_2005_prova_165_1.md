

**Problema:** [[Problemi/prob_2005_sessione_suppletiva_2005_prova_165_1|2005 Suppletiva — Prova — Problema 1]] · **Prova:** [[Prove/2005_sessione_suppletiva_2005_prova_165|2005 Suppletiva — Prova]]

**Testo.** Data una piramide triangolare regolare e il prisma retto in essa inscritto in modo che una base sia la sezione della piramide con il piano equidistante dal vertice e dalla base, si discute il volume del prisma e, posto lo spigolo di base $ABC$ uguale a $4$ cm, si studiano in un piano cartesiano i triangoli $ABC$ e $MNP$, la parabola per $A$, $B$, $M$ e le relative aree.

## a) Volume del prisma

Il piano equidistante dal vertice e dalla base è a metà altezza. La sezione è un triangolo simile alla base con rapporto di similitudine $k = \frac{1}{2}$, quindi la sua area è

$$S_{MNP} = k^2\, S_{ABC} = \frac{1}{4}\,S_{ABC}.$$

Il prisma retto ha come basi questa sezione e la sua proiezione sul piano di base, dunque altezza pari a metà dell'altezza $H$ della piramide. Perciò

$$V_{\text{prisma}} = S_{MNP}\cdot \frac{H}{2} = \frac{1}{4}\,S_{ABC}\cdot\frac{H}{2} = \frac{1}{8}\,S_{ABC}\,H.$$

Poiché $V_{\text{piramide}} = \frac{1}{3}\,S_{ABC}\,H$, si ottiene

$$V_{\text{prisma}} = \frac{1/8}{1/3}\,V_{\text{piramide}} = \frac{3}{8}\,V_{\text{piramide}}.$$

**Sì**, il volume del prisma è calcolabile: è sempre i $\frac{3}{8}$ del volume della piramide, indipendentemente dalle dimensioni.

## b) Studio nel piano cartesiano

**1) Spigolo di $MNP$.** Essendo $MNP$ simile ad $ABC$ con rapporto $\frac{1}{2}$,

$$\ell_{MNP} = \frac{1}{2}\cdot 4 = 2 \text{ cm}.$$

**2) Coordinate dei vertici.** Con l'origine in $A$ e l'asse $x$ lungo $AB$, il triangolo equilatero $ABC$ di lato $4$ ha vertici

$$A = (0,\,0),\qquad B = (4,\,0),\qquad C = \left(2,\,2\sqrt{3}\right).$$

Il baricentro è $G = \left(2,\,\frac{2\sqrt{3}}{3}\right)$. Il triangolo $MNP$ è l'omotetico di $ABC$ di centro $G$ e rapporto $\frac{1}{2}$ (stessa orientazione, con $MN \parallel AB$); i suoi vertici sono

$$M = \left(1,\,\frac{\sqrt{3}}{3}\right),\qquad N = \left(3,\,\frac{\sqrt{3}}{3}\right),\qquad P = \left(2,\,\frac{4\sqrt{3}}{3}\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="221.189" height="194.232" viewBox="-72 -72 165.892 145.674"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 59.705H78.669L10.382-58.571Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-23.76 39.99h68.286L10.382-19.145Z"/><path fill="none" stroke="red" stroke-width=".8" d="m-57.904 59.705 2.315-1.752 2.314-1.691 2.315-1.63 2.315-1.571 2.315-1.51 2.314-1.45 2.315-1.389 2.315-1.329 2.315-1.268 2.314-1.208 2.315-1.148 2.315-1.087 2.314-1.026 2.315-.967 2.315-.906 2.315-.846 2.314-.785 2.315-.725 2.315-.664 2.315-.604 2.314-.544 2.315-.483 2.315-.423 2.314-.362 2.315-.302 2.315-.242 2.315-.18 2.314-.122 2.315-.06h2.315l2.315.06 2.314.12 2.315.182 2.315.242 2.315.301 2.314.362 2.315.422 2.315.484 2.314.543 2.315.604 2.315.665 2.315.725 2.314.785 2.315.845 2.315.906 2.315.967 2.314 1.026 2.315 1.087 2.315 1.148 2.315 1.208 2.314 1.268 2.315 1.329 2.315 1.39 2.314 1.449 2.315 1.51 2.315 1.57 2.315 1.63 2.314 1.691 2.315 1.752"/><path fill="none" stroke="#ff8000" stroke-width=".8" d="M49.807 20.28c0-21.774-17.65-39.425-39.425-39.425S-29.043-1.495-29.043 20.28s17.651 39.425 39.425 39.425S49.807 42.054 49.807 20.28Zm-39.425 0"/><path stroke="none" d="M-56.104000000000006 59.705a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M80.469 59.705a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M12.182-58.57a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M-21.96 39.99a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M46.326 39.99a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0M12.182-19.146a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0m-1.8 0"/><text x="-57.904" y="59.705" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-57.904" y="59.705" stroke="none" font-family="cmmi10" font-size="10" transform="translate(140.106 10.366)">B</text><text x="-57.904" y="59.705" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.355 -121.808)">C</text><text x="-57.904" y="59.705" stroke="none" font-family="cmmi10" font-size="10" transform="translate(19.819 -9.348)">M</text><text x="-57.904" y="59.705" stroke="none" font-family="cmmi10" font-size="10" transform="translate(105.963 -9.348)">N</text><text x="-57.904" y="59.705" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 -82.383)">P</text></g></svg>
</figure>

**3) Equazione della parabola.** La parabola ha asse perpendicolare ad $AB$ (asse verticale) e passa per $A$ e $B$, quindi ha la forma $y = a\,x(x-4)$. Imponendo il passaggio per $M\!\left(1,\,\frac{\sqrt{3}}{3}\right)$:

$$a\cdot 1\cdot(1-4) = \frac{\sqrt{3}}{3}\ \Rightarrow\ -3a = \frac{\sqrt{3}}{3}\ \Rightarrow\ a = -\frac{\sqrt{3}}{9}.$$

Dunque

$$y = \frac{\sqrt{3}}{9}\,x(4-x) = -\frac{\sqrt{3}}{9}\,x^2 + \frac{4\sqrt{3}}{9}\,x.$$

Verifica del passaggio per $N(3,\,\frac{\sqrt{3}}{3})$:

$$y(3) = \frac{\sqrt{3}}{9}\cdot 3\cdot 1 = \frac{\sqrt{3}}{3}. \quad\checkmark$$

**4) Aree.** Le aree dei due triangoli equilateri sono

$$S_{ABC} = \frac{\sqrt{3}}{4}\cdot 4^2 = 4\sqrt{3},\qquad S_{MNP} = \frac{\sqrt{3}}{4}\cdot 2^2 = \sqrt{3}.$$

*Triangolo $ABC$.* L'area compresa tra il lato $AB$ e la parabola è

$$\int_0^4 \frac{\sqrt{3}}{9}\,x(4-x)\,dx = \frac{\sqrt{3}}{9}\left[2x^2 - \frac{x^3}{3}\right]_0^4 = \frac{\sqrt{3}}{9}\cdot\frac{32}{3} = \frac{32\sqrt{3}}{27}.$$

La parabola divide quindi $ABC$ in:

- parte verso $AB$: $\dfrac{32\sqrt{3}}{27}$;
- parte verso il vertice $C$: $4\sqrt{3} - \dfrac{32\sqrt{3}}{27} = \dfrac{76\sqrt{3}}{27}$.

*Triangolo $MNP$.* La parabola passa per $M$ e $N$ e, tra di essi, si solleva sopra il lato $MN$ (di equazione $y = \frac{\sqrt{3}}{3}$). L'area tra $MN$ e la parabola è

$$\int_1^3 \left(\frac{\sqrt{3}}{9}\,x(4-x) - \frac{\sqrt{3}}{3}\right)dx = \frac{\sqrt{3}}{9}\left[2x^2 - \frac{x^3}{3}\right]_1^3 - \frac{\sqrt{3}}{3}\cdot 2 = \frac{22\sqrt{3}}{27} - \frac{18\sqrt{3}}{27} = \frac{4\sqrt{3}}{27}.$$

La parabola divide quindi $MNP$ in:

- parte verso $MN$: $\dfrac{4\sqrt{3}}{27}$;
- parte verso il vertice $P$: $\sqrt{3} - \dfrac{4\sqrt{3}}{27} = \dfrac{23\sqrt{3}}{27}$.

**5) Posizione della circonferenza circoscritta a $MNP$.** Per un triangolo equilatero di lato $\ell$ il raggio della circonferenza circoscritta è $R = \frac{\ell}{\sqrt{3}}$ e quello della inscritta è $r = \frac{\ell}{2\sqrt{3}}$; entrambe hanno centro nel baricentro.

- Circonferenza circoscritta a $MNP$ (lato $2$): centro $G$, raggio $R_{MNP} = \dfrac{2}{\sqrt{3}} = \dfrac{2\sqrt{3}}{3}$.
- Circonferenza inscritta in $ABC$ (lato $4$): centro $G$, raggio $r_{ABC} = \dfrac{4}{2\sqrt{3}} = \dfrac{2\sqrt{3}}{3}$.

Le due circonferenze hanno lo stesso centro $G$ e lo stesso raggio: **la circonferenza circoscritta a $MNP$ coincide con la circonferenza inscritta in $ABC$**, ed è pertanto tangente internamente ai tre lati del triangolo $ABC$.

---

*Fonte:* [📄 PDF p.165](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
