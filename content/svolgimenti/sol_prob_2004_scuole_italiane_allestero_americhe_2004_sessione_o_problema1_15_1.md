

**Problema:** [[Problemi/prob_2004_scuole_italiane_allestero_americhe_2004_sessione_o_problema1_15_1|2004 Estero Americhe Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_americhe_2004_sessione_o_problema1_15|2004 Estero Americhe Ordinaria — Problema 1]]

Tra i coni circolari retti inscritti in una sfera di raggio $R=10\ \text{cm}$ si vogliono determinare: il cono $C$ di volume massimo (con il valore del volume in litri), l'angolo del settore circolare che si ottiene dallo sviluppo piano della sua superficie laterale e, infine, il raggio della sfera inscritta in $C$ con la percentuale di volume del cono che essa occupa.

## a) Il cono di volume massimo

Sia $R$ il raggio della sfera e sia $x$ l'altezza $\overline{VH}$ del cono. La figura mostra la sezione ottenuta con un piano passante per il vertice $V$ e per l'asse $\overline{VH}$: il triangolo $AVB$ è inscritto nel cerchio massimo della sfera e $\overline{VD}=2R$ è un diametro. Deve essere

$$0 < x < 2R.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="196.522" height="185.734" viewBox="-72 -72 147.392 139.301"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M63.729 4.034c0-34.571-28.025-62.596-62.597-62.596-34.571 0-62.596 28.025-62.596 62.596 0 34.572 28.025 62.597 62.596 62.597 34.572 0 62.597-28.025 62.597-62.597Zm-62.597 0"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-57.904 24.913 1.132-58.57 60.17 24.913M-57.904 24.913H60.169"/><path fill="none" stroke="gray" stroke-dasharray="3.0,2.0" d="M1.132-58.57V66.64"/><path fill="none" d="M1.132 24.913h-59.036"/><path stroke="none" d="M2.6719999999999997 4.034a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0M2.6719999999999997-58.57a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0M2.6719999999999997 24.913a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0M-56.364000000000004 24.913a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0M61.708999999999996 24.913a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0m-1.54 0"/><text x="1.132" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -66.138)">V</text><text x="1.132" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-70.07 31.245)">A</text><text x="1.132" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(62.57 31.245)">B</text><text x="1.132" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 31.245)">H</text><text x="1.132" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 3.417)">O</text><text x="1.132" y="4.034" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-9.248 -19.756)">x</text></g></svg>
</figure>

Poiché $\overline{VD}=2R$ è un diametro, il triangolo $AVD$ è rettangolo in $A$ e $\overline{AH}$ è l'altezza relativa all'ipotenusa. Per il secondo teorema di Euclide, detto $r=\overline{AH}$ il raggio di base del cono,

$$\overline{AH}^{\,2} = \overline{VH}\cdot\overline{HD} = x\,(2R-x).$$

Il volume del cono inscritto è quindi

$$V = \frac{1}{3}\pi\, r^2\, x = \frac{1}{3}\pi\,\overline{AH}^{\,2}\cdot x = \frac{1}{3}\pi\, x\,(2R-x)\cdot x = \frac{1}{3}\pi\, x^{2}(2R-x).$$

Il volume è massimo quando lo è la funzione

$$y = x^{2}(2R-x), \qquad 0 < x < 2R.$$

Studiando la derivata,

$$y' = 2x(2R-x) - x^{2} = 4Rx - 3x^{2} = x\,(4R-3x).$$

Nell'intervallo $0<x<2R$ si ha $y'\ge 0$ per $x\le \dfrac{4R}{3}$: la funzione, continua, è quindi crescente per $0<x<\dfrac{4R}{3}$ e decrescente per $\dfrac{4R}{3}<x<2R$. Il massimo si ha dunque per

$$x = \frac{4R}{3}.$$

Il cono di volume massimo ha perciò altezza

$$\overline{VH} = \frac{4R}{3} = \frac{4\cdot 10}{3}\ \text{cm} = \frac{40}{3}\ \text{cm}.$$

Sostituendo $x=\dfrac{4R}{3}$ (per cui $2R-x=\dfrac{2R}{3}$ e $x^2=\dfrac{16R^2}{9}$) si ottiene il volume massimo:

$$V_{\max} = \frac{1}{3}\pi\, x^{2}(2R-x) = \frac{1}{3}\pi\cdot\frac{16R^{2}}{9}\cdot\frac{2R}{3} = \frac{32}{81}\pi R^{3}.$$

Con $R=10\ \text{cm}$:

$$V_{\max} = \frac{32\,000}{81}\pi\ \text{cm}^{3} \cong 1241{,}123\ \text{cm}^{3} \cong 1{,}241\ \text{dm}^{3} = 1{,}241\ \text{litri}.$$

## b) L'angolo del settore circolare

Il cono $C$ ha altezza $\overline{VH}=\dfrac{4R}{3}$ e raggio di base

$$\overline{AH} = \sqrt{x\,(2R-x)} = \sqrt{\frac{4R}{3}\cdot\frac{2R}{3}} = \sqrt{\frac{8R^{2}}{9}} = \frac{2R}{3}\sqrt{2}.$$

L'apotema $\overline{AV}$ è quindi

$$\overline{AV} = \sqrt{\overline{VH}^{\,2}+\overline{AH}^{\,2}} = \sqrt{\frac{16R^{2}}{9}+\frac{8R^{2}}{9}} = \sqrt{\frac{24R^{2}}{9}} = \frac{2R}{3}\sqrt{6}.$$

Sviluppando sul piano la superficie laterale, si ottiene un settore circolare di raggio pari all'apotema, $\dfrac{2R}{3}\sqrt{6}$, e di arco lungo quanto la circonferenza di base del cono:

$$\ell = 2\pi\,\overline{AH} = 2\pi\cdot\frac{2R}{3}\sqrt{2} = \frac{4R}{3}\pi\sqrt{2}.$$

L'ampiezza in radianti dell'angolo al centro è il rapporto tra l'arco e il raggio:

$$\alpha = \frac{\ell}{\overline{AV}} = \frac{\dfrac{4R}{3}\pi\sqrt{2}}{\dfrac{2R}{3}\sqrt{6}} = \frac{2\sqrt{2}}{\sqrt{6}}\,\pi = \frac{2\sqrt{3}}{3}\,\pi\ \text{rad}.$$

Convertendo in gradi sessagesimali, da $\alpha : \alpha^{\circ} = \pi : 180^{\circ}$ segue

$$\alpha^{\circ} = \frac{2\sqrt{3}}{3}\cdot 180^{\circ} = 120\sqrt{3}^{\,\circ} \cong 207{,}846^{\circ} \cong 207^{\circ}50'46'' \cong 208^{\circ}.$$

## c) La sfera inscritta e la percentuale di volume

La sfera inscritta nel cono $C$ ha come sezione (nel piano assiale) il cerchio inscritto nel triangolo isoscele $AVB$, sezione assiale del cono. Tale triangolo ha:

$$\text{base}\quad \overline{AB} = 2\,\overline{AH} = \frac{40}{3}\sqrt{2}\ \text{cm}, \qquad \text{lati}\quad \overline{AV}=\overline{BV}=\frac{2R}{3}\sqrt{6} = \frac{20}{3}\sqrt{6}\ \text{cm},$$

e altezza $\overline{VH}=\dfrac{40}{3}\ \text{cm}$. La sua area è

$$S = \frac{1}{2}\,\overline{AB}\cdot\overline{VH} = \overline{AH}\cdot\overline{VH} = \frac{20}{3}\sqrt{2}\cdot\frac{40}{3} = \frac{800}{9}\sqrt{2}\ \text{cm}^{2},$$

mentre il semiperimetro è

$$p = \frac{1}{2}\left(\overline{AB}+\overline{AV}+\overline{BV}\right) = \frac{20}{3}\sqrt{2}+\frac{20}{3}\sqrt{6} = \frac{20}{3}\bigl(\sqrt{2}+\sqrt{6}\bigr).$$

Il raggio della circonferenza inscritta (uguale al raggio della sfera inscritta nel cono) è

$$r = \frac{S}{p} = \frac{\dfrac{800}{9}\sqrt{2}}{\dfrac{20}{3}\bigl(\sqrt{2}+\sqrt{6}\bigr)} = \frac{40}{3\bigl(\sqrt{3}+1\bigr)}\ \text{cm} = \frac{20\bigl(\sqrt{3}-1\bigr)}{3}\ \text{cm} \cong 4{,}88\ \text{cm}.$$

Il volume della sfera inscritta è quindi

$$V_{\text{sfera}} = \frac{4}{3}\pi\, r^{3} = \frac{4}{3}\pi\left(\frac{20\bigl(\sqrt{3}-1\bigr)}{3}\right)^{3} = \frac{32\,000}{81}\pi\,\bigl(\sqrt{3}-1\bigr)^{3}\ \text{cm}^{3},$$

mentre il volume del cono è $V_{\text{cono}} = \dfrac{32\,000}{81}\pi\ \text{cm}^{3}$. Il loro rapporto è pertanto

$$\frac{V_{\text{sfera}}}{V_{\text{cono}}} = \bigl(\sqrt{3}-1\bigr)^{3} = 6\sqrt{3}-10 \cong 0{,}392 \cong 39\%.$$

La sfera inscritta occupa dunque circa il $39\%$ del volume del cono $C$.

*Fonte:* [📄 PDF p.15](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
