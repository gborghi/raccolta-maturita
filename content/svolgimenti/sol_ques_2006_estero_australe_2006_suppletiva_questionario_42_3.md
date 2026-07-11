

**Quesito:** [[Quesiti/ques_2006_estero_australe_2006_suppletiva_questionario_42_3|2006 Australe Suppletiva — Questionario — Quesito 3]] · **Prova:** [[Prove/2006_estero_australe_2006_suppletiva_questionario_42|2006 Australe Suppletiva — Questionario]]

La somma di due numeri è $s$; si determinino i due numeri in modo che il loro prodotto sia massimo.

## a) Impostazione del problema

Indichiamo con $x$ e $y$ i due numeri. Il vincolo è
$$x + y = s, \qquad \text{con } 0 \le x \le s.$$

Da esso ricaviamo $y = s - x$, quindi il prodotto da massimizzare è funzione della sola $x$:
$$p(x) = x\,y = x(s - x) = -x^{2} + s\,x, \qquad 0 \le x \le s.$$

## b) Ricerca del massimo con la derivata

Deriviamo rispetto a $x$:
$$p'(x) = -2x + s.$$

Poniamo $p'(x) = 0$:
$$-2x + s = 0 \;\Rightarrow\; x = \frac{s}{2}.$$

Poiché $p''(x) = -2 < 0$, la funzione è concava e il punto stazionario è un punto di **massimo**. Si osservi inoltre che agli estremi dell'intervallo $p(0) = p(s) = 0$, mentre nel punto interno il prodotto è positivo: ciò conferma che in $x = \frac{s}{2}$ si ha il massimo assoluto.

Il valore corrispondente dell'altro numero è
$$y = s - \frac{s}{2} = \frac{s}{2},$$

e il prodotto massimo vale
$$p\!\left(\frac{s}{2}\right) = \frac{s}{2}\cdot\frac{s}{2} = \frac{s^{2}}{4}.$$

## c) Dimostrazione elementare (senza derivate)

Lo stesso risultato si ottiene dall'identità
$$(x + y)^{2} - (x - y)^{2} = 4xy.$$

Poiché la somma $x + y = s$ è costante, il termine $(x + y)^{2} = s^{2}$ è fisso; di conseguenza il prodotto
$$xy = \frac{s^{2} - (x - y)^{2}}{4}$$

è massimo quando il termine sottrattivo $(x - y)^{2}$ è minimo, cioè nullo. Ciò accade se e solo se
$$x - y = 0 \;\Rightarrow\; x = y.$$

Insieme al vincolo $x + y = s$ si ritrova $x = y = \dfrac{s}{2}$, con prodotto massimo $\dfrac{s^{2}}{4}$.

## Conclusione

Il prodotto è massimo quando i due numeri sono uguali:
$$x = y = \frac{s}{2}, \qquad (xy)_{\max} = \frac{s^{2}}{4}.$$

L'andamento del prodotto $p(x) = x(s-x)$ è una parabola con la concavità rivolta verso il basso, che si annulla agli estremi $x=0$ e $x=s$ e raggiunge il vertice in $x = \dfrac{s}{2}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="199.139" height="139.145" viewBox="-72 -72 149.354 104.359"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 14.823H64.103"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M62.223 12.423c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-60.689" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(128.725 2.153)">x</text><path fill="none" d="M-60.69 26.204v-84.958"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-63.09-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.689" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.516 -79.455)">p</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.69 14.823 1.93-1.894 1.929-1.832 1.929-1.766 1.929-1.7 1.929-1.634 1.929-1.57 1.929-1.504 1.928-1.439 1.93-1.372 1.928-1.308 1.93-1.243 1.928-1.177 1.93-1.11 1.928-1.047 1.93-.982 1.928-.915 1.929-.85 1.929-.784 1.929-.72 1.929-.654 1.929-.588 1.929-.524 1.929-.458 1.929-.392 1.929-.326 1.929-.262 1.929-.197 1.928-.13 1.93-.065h1.928l1.93.064 1.928.131 1.93.197 1.928.261 1.93.326 1.928.393 1.929.458 1.929.523 1.929.588 1.929.653 1.929.72 1.929.785 1.929.85 1.929.915 1.929.98 1.929 1.047 1.928 1.111 1.93 1.177 1.928 1.243L35.76.109l1.928 1.373 1.93 1.438 1.928 1.504 1.93 1.57 1.928 1.634 1.929 1.7 1.929 1.765 1.929 1.831 1.929 1.897"/><path fill="red" stroke="none" d="M-1.784-13.63a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><g fill="red" stroke="red"><g fill="red" stroke="none"><text x="-60.689" y="3.723" font-family="cmex10" font-size="10" transform="translate(60.438 -38.486)">³</text><text x="-53.411" y="10.886" font-family="cmmi7" font-size="7" transform="translate(60.438 -38.486)">s</text><path d="M6.921-26.363h3.986v.4H6.921z"/><text x="-53.517" y="18.272" font-family="cmr7" font-size="7" transform="translate(60.438 -38.486)">2</text><text x="-48.331" y="14.823" font-family="cmmi10" font-size="10" transform="translate(60.438 -38.486)">;</text><text x="-42.686" y="10.886" font-family="cmmi7" font-size="7" transform="translate(60.438 -38.486)">s</text><text x="-38.912" y="7.868" font-family="cmr5" font-size="5" transform="translate(60.438 -38.486)">2</text><path d="M17.752-26.363h7.677v.4h-7.677z"/><text x="-40.841" y="18.272" font-family="cmr7" font-size="7" transform="translate(60.438 -38.486)">4</text><text x="-33.809" y="3.723" font-family="cmex10" font-size="10" transform="translate(60.438 -38.486)">´</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-3.784 14.823V-13.63"/><g stroke="none"><text x="-59.383" y="10.886" font-family="cmmi7" font-size="7" transform="translate(53.712 10.484)">s</text><path d="M-5.777 22.607h3.986v.4h-3.986z"/><text x="-59.489" y="18.272" font-family="cmr7" font-size="7" transform="translate(53.712 10.484)">2</text></g></g><text x="-60.689" y="14.823" stroke="none" font-family="cmmi10" font-size="10" transform="translate(111.467 7.839)">s</text></g></svg>
</figure>

*Fonte:* [📄 PDF p.42](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
