

**Quesito:** [[Quesiti/ques_2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78_2|2005 Europa Ordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_europa_2005_sessione_ord_questionario_78|2005 Europa Ordinaria — Questionario]]

Una piramide a base quadrata ha altezza $8\ \text{cm}$. Si vuole stabilire quanti piani paralleli alla base la dividono in due parti i cui volumi stanno nel rapporto $7:1$ e a quale distanza dal vertice tali piani si trovano.

Un piano parallelo alla base, posto a distanza $x$ dal vertice, stacca dalla piramide una piramide più piccola, simile a quella data, di altezza $x$. Per la similitudine i volumi di due solidi simili stanno tra loro come il cubo del rapporto delle dimensioni lineari corrispondenti. Detto $V$ il volume dell'intera piramide (di altezza $8$), il volume della piramide staccata (parte superiore, con il vertice) è

$$V_{\text{sup}} = V\left(\frac{x}{8}\right)^3 = \frac{V}{512}\,x^3,$$

mentre il tronco di piramide sottostante ha volume

$$V_{\text{inf}} = V - V_{\text{sup}} = \frac{V}{512}\,(512 - x^3).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="254.986" height="251.718" viewBox="-72 -72 191.239 188.789"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M7.797-58.57-71.87 100.763H87.465Z"/><path fill="#d9d9ff" stroke="none" d="m7.797-58.57-39.833 79.667H47.63Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-32.036 21.097H47.63"/><path fill="none" stroke-dasharray="3.0,3.0" d="M7.797-58.57v79.667"/><text x="7.797" y="100.764" stroke="none" font-family="cmmi10" font-size="10" transform="translate(6.105 -117.348)">x</text><text x="7.797" y="100.764" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -162.868)">V</text><g stroke="none" font-family="cmr10" font-size="10"><text x="7.797" y="100.764" transform="translate(-30.736 10.477)">base</text><text x="30.075" y="100.764" transform="translate(-30.736 10.477)">quadrata</text></g><g stroke="none" font-family="cmr10" font-size="10"><text x="7.797" y="100.764" transform="translate(43.367 -77.167)">piano</text><text x="35.02" y="100.764" transform="translate(43.367 -77.167)">parallelo</text></g></g></svg>
</figure>

Le due parti devono stare nel rapporto $7:1$. Poiché il testo non precisa quale delle due sia la parte maggiore, occorre distinguere due casi.

**Primo caso:** il tronco (parte inferiore) ha volume sette volte quello della piramide superiore:

$$\frac{512 - x^3}{x^3} = 7 \;\Rightarrow\; 512 - x^3 = 7x^3 \;\Rightarrow\; 8x^3 = 512 \;\Rightarrow\; x^3 = 64 \;\Rightarrow\; x = 4.$$

**Secondo caso:** la piramide superiore ha volume sette volte quello del tronco:

$$\frac{x^3}{512 - x^3} = 7 \;\Rightarrow\; x^3 = 7(512 - x^3) \;\Rightarrow\; 8x^3 = 3584 \;\Rightarrow\; x^3 = 448 \;\Rightarrow\; x = \sqrt[3]{448} = 4\sqrt[3]{7}.$$

Entrambi i valori sono positivi e minori di $8$, quindi corrispondono a piani effettivamente interni alla piramide.

Esistono dunque **due** piani paralleli alla base che dividono la piramide in due parti di volumi nel rapporto $7:1$. Le loro distanze dal vertice sono

$$x_1 = 4\ \text{cm}, \qquad x_2 = 4\sqrt[3]{7} \approx 7{,}65\ \text{cm}.$$

*Fonte:* [📄 PDF p.78](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
