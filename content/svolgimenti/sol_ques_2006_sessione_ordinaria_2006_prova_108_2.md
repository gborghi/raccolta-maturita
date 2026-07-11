

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_108_2|2006 Sessione Ordinaria PNI — Prova (p.108) — Quesito 2]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_108|2006 Sessione Ordinaria PNI — Prova (p.108)]]

Una piramide quadrangolare regolare ha l'altezza doppia dello spigolo di base. Si vuole il rapporto fra il volume del cubo inscritto (con una faccia sulla base della piramide) e il volume della piramide.

Indichiamo con $s>0$ lo spigolo di base $AB$ e con $VO=2s$ l'altezza della piramide. Sia $x$ lo spigolo del cubo inscritto, con $0<x<s$: il cubo poggia con una faccia sulla base e la faccia superiore $EFGH$ giace nel piano parallelo alla base a distanza $x$ da essa.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="133.57" height="251.676" viewBox="-72 -72 100.177 188.757"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-71.87 95.073H4.952L-33.46-58.571Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-33.46 95.073V-58.571"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-59.066 95.073h51.214V43.858h-51.214Z"/><text x="-33.459" y="95.073" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -157.177)">V</text><text x="-33.459" y="95.073" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><g fill="#00f" stroke="#00f"><text x="-33.459" y="95.073" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.858 -23.455)">x</text></g><path fill="none" d="M-71.47 105.316H4.552"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-69.59 107.716c-.38-1.44-1.227-2.12-2.08-2.4.853-.28 1.7-.96 2.08-2.4M2.672 102.916c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-33.459" y="95.073" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.344 18.081)">s</text><path fill="none" d="M11.354 94.673V-58.171"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M13.754 92.793c-1.44.38-2.12 1.227-2.4 2.08-.28-.853-.96-1.7-2.4-2.08M8.954-56.29c1.44-.38 2.12-1.228 2.4-2.08.28.852.96 1.7 2.4 2.08"/><g stroke="none" font-size="10"><text x="-33.459" y="95.073" font-family="cmr10" transform="translate(48.346 -73.6)">2</text><text x="-28.459" y="95.073" font-family="cmmi10" transform="translate(48.346 -73.6)">s</text></g></g></svg>
</figure>

## Determinazione dello spigolo del cubo

La faccia superiore del cubo è inscritta nella sezione della piramide fatta a quota $x$. Detto $O'$ il centro di tale sezione, il segmento di vertice $V$ misura
$$VO' = VO - x = 2s - x.$$

Le sezioni parallele alla base sono quadrati simili al quadrato di base, con rapporto di similitudine uguale al rapporto delle distanze dal vertice; le aree stanno quindi come i quadrati di tali distanze:
$$\text{Area}(ABCD) : \text{Area}(EFGH) = \overline{VO}^{\,2} : \overline{VO'}^{\,2}.$$

Poiché la faccia superiore del cubo ha lato $x$, si ha $\text{Area}(EFGH)=x^2$, mentre $\text{Area}(ABCD)=s^2$. Sostituendo:
$$s^2 : x^2 = (2s)^2 : (2s-x)^2 \;\Rightarrow\; s^2\,(2s-x)^2 = 4s^2\,x^2.$$

Dividendo per $s^2>0$ ed estraendo la radice (entrambi i membri positivi):
$$(2s-x)^2 = 4x^2 \;\Rightarrow\; 2s-x = 2x \;\Rightarrow\; x = \frac{2}{3}\,s.$$

Equivalentemente, sviluppando si ottiene $3x^2 + 4sx - 4s^2 = 0$, le cui radici sono $x=\dfrac{2}{3}s$ e $x=-2s$; solo la prima è accettabile perché $0<x<s$.

## Calcolo del rapporto dei volumi

Il volume del cubo è
$$V_{\text{cubo}} = x^3 = \left(\frac{2}{3}s\right)^3 = \frac{8}{27}\,s^3,$$

mentre il volume della piramide è
$$V_{\text{piramide}} = \frac{1}{3}\cdot s^2 \cdot 2s = \frac{2}{3}\,s^3.$$

Il rapporto richiesto vale quindi
$$\frac{V_{\text{cubo}}}{V_{\text{piramide}}} = \frac{\dfrac{8}{27}\,s^3}{\dfrac{2}{3}\,s^3} = \frac{8}{27}\cdot\frac{3}{2} = \frac{4}{9}.$$

Il volume del cubo inscritto è pertanto i $\dfrac{4}{9}$ del volume della piramide.

*Fonte:* [📄 PDF p.121](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
