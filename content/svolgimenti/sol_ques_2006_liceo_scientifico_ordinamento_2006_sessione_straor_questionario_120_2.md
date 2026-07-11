

**Quesito:** [[Quesiti/ques_2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120_2|2006 Straordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2006_liceo_scientifico_ordinamento_2006_sessione_straor_questionario_120|2006 Straordinaria — Questionario]]

Una piramide quadrangolare regolare ha altezza doppia dello spigolo di base. Si vuole il rapporto tra il volume del cubo inscritto nella piramide e il volume della piramide stessa.

Indichiamo con $s$ lo spigolo di base $\overline{AB}$ della piramide (con $s>0$): l'altezza $\overline{VO}$ vale allora $2s$. Sia $x$ lo spigolo del cubo inscritto, con $0<x<s$; il cubo poggia con una faccia sulla base della piramide e la faccia superiore ha i vertici sulle facce laterali. Detto $O'$ il centro della faccia superiore del cubo, la sua distanza dal vertice $V$ è
$$\overline{VO'} = 2s - x.$$

La faccia superiore del cubo è la sezione della piramide con un piano parallelo alla base a distanza $x$ da essa. Poiché tale sezione è un quadrato simile alla base, il rapporto tra le aree è uguale al quadrato del rapporto delle distanze dal vertice:
$$\frac{s^2}{x^2} = \frac{\overline{VO}^2}{\overline{VO'}^2} = \frac{(2s)^2}{(2s-x)^2}.$$

Da qui $s^2 (2s-x)^2 = 4s^2 x^2$, cioè, semplificando $s^2>0$,
$$(2s-x)^2 = 4x^2 \;\Rightarrow\; 4s^2 - 4sx + x^2 = 4x^2 \;\Rightarrow\; 3x^2 + 4sx - 4s^2 = 0.$$

Risolvendo rispetto a $x$:
$$x = \frac{-4s \pm \sqrt{16s^2 + 48s^2}}{6} = \frac{-4s \pm 8s}{6}.$$

La soluzione negativa $x=-2s$ non è accettabile; resta
$$x = \frac{2s}{3}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="126.259" height="285.633" viewBox="-72 -72 94.695 214.225"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-71.87 129.218h93.895L-24.923-58.57Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-24.923 129.218V-58.57"/><g stroke="none" font-size="10"><text x="-24.923" y="129.218" font-family="cmr10" transform="translate(-13.22 -90.672)">2</text><text x="-19.923" y="129.218" font-family="cmmi10" transform="translate(-13.22 -90.672)">s</text></g><text x="-24.923" y="129.218" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -191.322)">V</text><text x="-24.923" y="129.218" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.344 9.404)">s</text><path fill="none" d="M-71.87 132.974h93.895"/><path fill="none" stroke="#00f" stroke-width="1.2" d="M-56.22 129.218H6.374V66.622H-56.22Z"/><g fill="#00f" stroke="#00f"><text x="-24.923" y="129.218" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(34.831 -29.145)">x</text></g></g></svg>
</figure>

Calcoliamo ora i due volumi. Il cubo ha spigolo $x = \dfrac{2s}{3}$, quindi
$$V_{\text{cubo}} = x^3 = \left(\frac{2s}{3}\right)^3 = \frac{8s^3}{27}.$$

La piramide ha base quadrata di lato $s$ e altezza $2s$, dunque
$$V_{\text{piramide}} = \frac{1}{3}\, s^2 \cdot 2s = \frac{2s^3}{3}.$$

Il rapporto richiesto è pertanto
$$\frac{V_{\text{cubo}}}{V_{\text{piramide}}} = \frac{\dfrac{8s^3}{27}}{\dfrac{2s^3}{3}} = \frac{8}{27}\cdot\frac{3}{2} = \frac{4}{9}.$$

*Fonte:* [📄 PDF p.121](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
