

**Quesito:** [[Quesiti/ques_2005_estero_australe_2005_suppletiva_questionario_66_2|2005 Estero Australe Suppletiva — Questionario — Quesito 2]] · **Prova:** [[Prove/2005_estero_australe_2005_suppletiva_questionario_66|2005 Estero Australe Suppletiva — Questionario]]

Un recipiente ha la forma di un prisma regolare a base triangolare (triangolo equilatero) e contiene $1000$ litri di liquido. Determinare le dimensioni che rendono **minima** la superficie totale.

## Impostazione

Indichiamo con $l$ il lato del triangolo equilatero di base e con $h$ l'altezza del prisma. La capacità del recipiente è
$$1000\ \text{litri} = 1000\ \text{dm}^3 = 1\ \text{m}^3.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="164.196" height="170.839" viewBox="-72 -72 123.147 128.129"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-34.881 2.107h85.358M-34.881 2.107 7.798-71.87"/><path fill="none" stroke-width=".8" d="M-71.87 29.137h85.358L-29.19-44.84ZM50.477 2.107 7.797-71.87M-71.87 29.137l36.989-27.03M13.488 29.137l36.989-27.03M-29.19-44.84 7.797-71.87"/><path fill="none" d="M-71.47 39.096h84.558"/><path fill="none" stroke-linecap="round" d="M-69.59 41.496c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4M11.208 36.696c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-71.87" y="29.137" stroke="none" font-family="cmmi10" font-size="10" transform="translate(41.089 23.389)">l</text><text x="-71.87" y="29.137" stroke="none" font-family="cmmi10" font-size="10" transform="translate(103.817 -9.331)">h</text></g></svg>
</figure>

L'area di base (triangolo equilatero di lato $l$) è $A_b=\dfrac{\sqrt{3}}{4}\,l^2$, quindi il volume vale
$$V=A_b\,h=\frac{\sqrt{3}}{4}\,l^2\,h = 1 \quad\Rightarrow\quad h=\frac{4}{\sqrt{3}\,l^2}.$$

La superficie totale è la somma delle due basi e della superficie laterale (perimetro di base per altezza):
$$S_t=2A_b+3l\,h=\frac{\sqrt{3}}{2}\,l^2+3l\cdot\frac{4}{\sqrt{3}\,l^2} =\frac{\sqrt{3}}{2}\,l^2+\frac{4\sqrt{3}}{l},\qquad l>0.$$

## Minimizzazione della superficie

Deriviamo rispetto a $l$:
$$S_t'(l)=\sqrt{3}\,l-\frac{4\sqrt{3}}{l^2}=\sqrt{3}\,\frac{l^3-4}{l^2}.$$
Poiché $l>0$, il segno della derivata dipende solo da $l^3-4$:
$$S_t'(l)\ge 0 \iff l^3\ge 4 \iff l\ge \sqrt[3]{4}.$$
Dunque $S_t$ decresce per $0<l<\sqrt[3]{4}$ e cresce per $l>\sqrt[3]{4}$: la superficie totale è minima per
$$l=\sqrt[3]{4}\ \text{m}.$$

## Dimensioni ottimali

Sostituendo $l^2=\sqrt[3]{16}$ nella relazione dell'altezza:
$$h=\frac{4}{\sqrt{3}\,l^2}=\frac{4}{\sqrt{3}\,\sqrt[3]{16}}=\frac{\sqrt[3]{4}}{\sqrt{3}}=\frac{\sqrt{3}\,\sqrt[3]{4}}{3}\ \text{m}.$$

Numericamente:
$$l=\sqrt[3]{4}\approx 1{,}59\ \text{m},\qquad h=\frac{\sqrt{3}\,\sqrt[3]{4}}{3}\approx 0{,}92\ \text{m}.$$

Il prisma di superficie totale minima ha quindi spigolo di base $l=\sqrt[3]{4}\ \text{m}$ e altezza $h=\dfrac{\sqrt{3}\,\sqrt[3]{4}}{3}\ \text{m}$.

*Fonte:* [📄 PDF p.66](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
