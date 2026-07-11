

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_3|2008 Ordinamento Straordinaria — Questionario — Quesito 3]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Fra tutti i cilindri inscritti in un cono circolare retto di raggio di base $r$ e altezza $h$, si vuole determinare quello di volume massimo.

## a) Impostazione del problema

Consideriamo la sezione assiale della figura. Indichiamo con $x$ la distanza della base superiore del cilindro dal vertice $V$ del cono, con $0 \le x \le h$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="205.443" height="181.713" viewBox="-72 -72 154.082 136.285"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-71.87 52.843 2.107-58.123 76.085 52.843ZM-71.87 52.843H76.085"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-47.198 52.843V15.855h98.61v36.988Zm98.61-36.988"/><path fill="none" stroke-dasharray="3.0,3.0" d="M2.107 52.843V-58.123"/><text x="2.107" y="52.843" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -114.947)">V</text><text x="2.107" y="52.843" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.583 7.839)">r</text><text x="2.107" y="52.843" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -52.01)">h</text><g fill="#00f" stroke="#00f"><text x="2.107" y="52.843" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(-16.403 -15.022)">cilindro</text></g><g stroke="none" font-family="cmmi10" font-size="10"><text x="2.107" y="52.843" transform="translate(18.05 -26.622)">F</text><text x="9.927" y="52.843" transform="translate(18.05 -26.622)">G</text></g></g></svg>
</figure>

Il raggio del cilindro, che indichiamo con $\overline{FG}$, si ricava per similitudine tra il triangolo che ha per vertice $V$ e base il raggio del cilindro e il triangolo che ha per base il raggio del cono. Poiché a distanza $h$ dal vertice il raggio vale $r$, a distanza $x$ si ha:

$$\overline{FG} : r = x : h \quad \Rightarrow \quad \overline{FG} = \frac{r}{h}\,x.$$

L'altezza del cilindro è la differenza tra l'altezza del cono e la quota della base superiore, cioè $h - x$.

Il volume del cilindro è quindi:

$$V(x) = \pi \, \overline{FG}^{\,2} \,(h - x) = \pi \left(\frac{r}{h}\,x\right)^{2}(h - x) = \frac{\pi r^{2}}{h^{2}}\, x^{2}\,(h - x).$$

## b) Ricerca del massimo

Poiché il fattore $\dfrac{\pi r^{2}}{h^{2}}$ è costante e positivo, il volume è massimo quando lo è la funzione

$$y = x^{2}(h - x), \qquad 0 \le x \le h.$$

Deriviamo:

$$y' = 2x(h - x) - x^{2} = 2xh - 3x^{2} = x\,(2h - 3x).$$

La derivata si annulla per $x = 0$ e per $x = \dfrac{2h}{3}$. Nell'intervallo $[0, h]$ si ha $y' > 0$ per $0 < x < \dfrac{2h}{3}$ e $y' < 0$ per $\dfrac{2h}{3} < x < h$: il punto

$$x = \frac{2h}{3}$$

è dunque un punto di massimo.

## c) Dimensioni e volume massimo

In corrispondenza di $x = \dfrac{2h}{3}$ si ottengono:

$$\overline{FG} = \frac{r}{h}\cdot\frac{2h}{3} = \frac{2r}{3}, \qquad h - x = h - \frac{2h}{3} = \frac{h}{3}.$$

Il cilindro di volume massimo ha quindi raggio $\dfrac{2r}{3}$ e altezza $\dfrac{h}{3}$, e il suo volume vale:

$$V_{\max} = \pi \left(\frac{2r}{3}\right)^{2}\cdot\frac{h}{3} = \pi \cdot \frac{4r^{2}}{9}\cdot\frac{h}{3} = \frac{4}{27}\,\pi\, r^{2} h.$$

*Fonte:* [📄 PDF p.108](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
