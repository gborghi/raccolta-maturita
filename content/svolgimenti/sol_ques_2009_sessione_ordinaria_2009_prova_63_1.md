

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_63_1|2009 Sessione Ordinaria Estero Europa — Prova — Quesito 1]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_63|2009 Sessione Ordinaria Estero Europa — Prova]]

Una piramide di area di base $B$ e altezza $h$ viene secata con un piano parallelo alla base. Detta $x$ la distanza del piano dal vertice, si vuole determinare $x$ in modo che il prisma avente per basi la sezione e la sua proiezione ortogonale sul piano di base della piramide abbia volume massimo.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="167.99" height="161.724" viewBox="-72 -72 125.993 121.293"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-9.274-58.57-71.87 35.323H53.323Z"/><text x="-9.274" y="35.324" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.028 -97.428)">V</text><path fill="#e1e1ff" stroke="none" d="M-50.9 4.026h83.253v31.298H-50.9Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-50.9 4.026h83.253v31.298H-50.9ZM-50.9 4.026h83.253"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-9.274" y="35.324" font-family="cmmi10" font-size="10" transform="translate(45.16 -34.831)">B</text><text x="-1.187" y="31.695" font-family="cmsy7" font-size="7" transform="translate(45.16 -34.831)">0</text></g></g><text x="-9.274" y="35.324" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-4.043 10.366)">B</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-9.274-58.57v93.894"/><text x="-9.274" y="35.324" stroke="none" font-family="cmmi10" font-size="10" transform="translate(5.098 -60.444)">x</text><g stroke="none" font-size="10"><text x="-9.274" y="35.324" font-family="cmmi10" transform="translate(5.098 -12.594)">h</text><text x="-1.29" y="35.324" font-family="cmsy10" transform="translate(5.098 -12.594)">¡</text><text x="8.71" y="35.324" font-family="cmmi10" transform="translate(5.098 -12.594)">x</text></g></g></svg>
</figure>

## Impostazione

Sia $x$ la distanza dal vertice del piano parallelo alla base e sia $B'$ l'area della sezione così ottenuta. Per la proprietà delle sezioni piane parallele alla base di una piramide, le aree stanno tra loro come i quadrati delle rispettive distanze dal vertice:

$$B : B' = h^2 : x^2 \quad\Rightarrow\quad B' = \frac{B\,x^2}{h^2}.$$

Il prisma considerato ha per base la sezione (area $B'$) e per altezza la distanza tra il piano di sezione e il piano di base, cioè $h-x$. Il suo volume è quindi

$$V(x) = B' \cdot (h-x) = \frac{B\,x^2}{h^2}\,(h-x), \qquad 0 < x < h.$$

## Ricerca del massimo

Poiché il fattore $\dfrac{B}{h^2}$ è una costante positiva, il volume è massimo quando lo è la funzione

$$y(x) = x^2\,(h-x) = h\,x^2 - x^3.$$

Deriviamo rispetto a $x$:

$$y'(x) = 2h\,x - 3x^2 = x\,(2h - 3x).$$

Nell'intervallo $(0,h)$ si ha $x>0$, dunque $y'(x)=0$ quando

$$2h - 3x = 0 \quad\Rightarrow\quad x = \frac{2}{3}h.$$

Lo studio del segno di $y'(x)=x(2h-3x)$ mostra che $y'>0$ per $0<x<\frac{2}{3}h$ e $y'<0$ per $\frac{2}{3}h<x<h$: la funzione cresce e poi decresce, quindi in $x=\frac{2}{3}h$ si ha un massimo.

## Conclusione

Il piano va condotto a distanza

$$x = \frac{2}{3}h$$

dal vertice. Il corrispondente volume massimo del prisma è

$$V_{\max} = \frac{B}{h^2}\left(\frac{2}{3}h\right)^2\left(h-\frac{2}{3}h\right) = \frac{B}{h^2}\cdot\frac{4h^2}{9}\cdot\frac{h}{3} = \frac{4}{27}\,B\,h.$$

*Fonte:* [📄 PDF p.74](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)


#maturita/soluzione #area/geometria #cluster/geometria
