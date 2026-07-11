

**Problema:** [[Problemi/prob_2004_estero_calendario_australe_2004_sessione_ordinaria_problema1_36_1|2004 Estero australe Ordinaria — Problema 1 — Problema 1]] · **Prova:** [[Prove/2004_estero_calendario_australe_2004_sessione_ordinaria_problema1_36|2004 Estero australe Ordinaria — Problema 1]]

È assegnata una piramide retta a base quadrata il cui spigolo laterale misura $a$. Detti $l$ il lato del quadrato di base, $h$ l'altezza, $O$ il centro della base e $V$ il vertice, si determinino la piramide di volume massimo, la riduzione d'altezza che riduce del $10\%$ il volume e la capacità della sfera circoscritta.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="226.238" height="204.245" viewBox="-72 -72 169.679 153.184"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 52.417 53.083 67.215 82.68 26.52-28.307 11.72ZM-57.904 52.417 12.388-58.571M53.083 67.215 12.388-58.571M82.68 26.52 12.388-58.57M-28.307 11.721 12.388-58.57"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-57.904 52.417 82.68 26.52M53.083 67.215l-81.39-55.494M12.388 39.468v-98.039"/><path stroke="none" d="M13.688 39.468a1.3 1.3 0 1 0-2.6 0 1.3 1.3 0 0 0 2.6 0M13.688-58.57a1.3 1.3 0 1 0-2.6 0 1.3 1.3 0 0 0 2.6 0m-1.3 0"/><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.371 -96.023)">V</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-73.926 21.915)">A</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(44.051 43.662)">B</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(81.224 -3.982)">C</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-45.386 -25.73)">D</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(10.932 15.915)">O</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(46.07 -45.933)">a</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-1.897 -40.914)">h</text><text x="4.989" y="33.919" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-10.837 37.11)">l</text></g></svg>
</figure>

## a)

La diagonale del quadrato di base è $AC = l\sqrt{2}$, quindi $\overline{OC} = \dfrac{l\sqrt{2}}{2}$. Nel triangolo $VOC$, rettangolo in $O$, il teorema di Pitagora dà

$$h^2 + \overline{OC}^2 = a^2 \quad\Rightarrow\quad h^2 + \frac{l^2}{2} = a^2 .$$

Posto $h = x$, con $0 \le x \le a$, si ricava $l^2 = 2a^2 - 2x^2$. Il volume della piramide è allora

$$V = \frac{1}{3}\,l^2 h = \frac{1}{3}\,(2a^2 - 2x^2)\,x = \frac{2}{3}\,(a^2 x - x^3).$$

$V$ è massimo dove lo è $y = a^2 x - x^3$, con $0 \le x \le a$. Studiamo la derivata prima:

$$y' = a^2 - 3x^2 \ge 0 \iff x^2 \le \frac{a^2}{3} \iff 0 \le x \le \frac{a\sqrt{3}}{3}.$$

Dunque $y$ è crescente per $0 \le x < \dfrac{a\sqrt{3}}{3}$ e decrescente per $\dfrac{a\sqrt{3}}{3} < x \le a$: il massimo si ha per

$$x = h = \frac{a\sqrt{3}}{3}.$$

Il lato di base corrispondente vale

$$l = \sqrt{2a^2 - 2x^2} = \sqrt{2a^2 - \frac{2a^2}{3}} = \sqrt{\frac{4a^2}{3}} = \frac{2a\sqrt{3}}{3} = 2h,$$

cioè la piramide di volume massimo è quella che ha il lato di base doppio dell'altezza. Il suo volume è

$$V(P) = \frac{1}{3}\,l^2 h = \frac{1}{3}\cdot\frac{4a^2}{3}\cdot\frac{a\sqrt{3}}{3} = \frac{4\sqrt{3}}{27}\,a^3 .$$

Poiché il cubo di spigolo unitario ha volume $1$, il rapporto richiesto è

$$\frac{V(P)}{1} = \frac{4\sqrt{3}}{27}\,a^3 .$$

## b)

Per ridurre il volume del $10\%$ mantenendo inalterata la forma, la nuova piramide $P'$ deve essere simile a $P$, con

$$\frac{V(P')}{V(P)} = \frac{90}{100} = \frac{9}{10}.$$

Detto $k$ il rapporto di similitudine, si ha $k^3 = \dfrac{9}{10}$, da cui

$$k = \sqrt[3]{\frac{9}{10}} \cong 0{,}965 .$$

Il rapporto fra le altezze coincide con $k$, quindi

$$\frac{h'}{h} = k \cong 0{,}965 \cong 96{,}5\%,$$

ossia $h' \cong 0{,}965\,h$. L'altezza va dunque diminuita di circa il $3{,}5\%$.

## c)

Cerchiamo la sfera circoscritta a $P$ quando $a = 1{,}2\ \text{m}$. Poiché $VO \perp AC$, la circonferenza passante per $V$, $A$ e $C$ è una circonferenza massima della sfera circoscritta, sicché il raggio della sfera è quello del cerchio circoscritto al triangolo isoscele $VAC$, di lati

$$\overline{VA} = \overline{VC} = a = 1{,}2\ \text{m}, \qquad \overline{VO} = h = \frac{a\sqrt{3}}{3} = 1{,}2\cdot\frac{\sqrt{3}}{3} = 0{,}4\sqrt{3}\ \text{m}.$$

Per la relazione fra i lati uscenti da $V$, l'altezza relativa alla base e il diametro $2R$ (equivalente al primo teorema di Euclide applicato al triangolo rettangolo inscritto nella circonferenza) si ha $\overline{VA}\cdot\overline{VC} = 2R\cdot\overline{VO}$, cioè

$$\overline{VA}^2 = 2R\cdot\overline{VO} \quad\Rightarrow\quad 1{,}44 = 2R\cdot 0{,}4\sqrt{3},$$

da cui

$$R = \frac{1{,}44}{0{,}8\sqrt{3}} = 0{,}6\sqrt{3} = \frac{3}{5}\sqrt{3}\ \text{m} \cong 1{,}04\ \text{m}.$$

Il volume della sfera è

$$V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi\left(\frac{3}{5}\sqrt{3}\right)^{3} \cong 4{,}701\ \text{m}^3 = 4701\ \text{dm}^3 .$$

Poiché $1\ \text{dm}^3 = 1$ litro, la capacità della sfera è di circa $4701$ litri.

*Fonte:* [📄 PDF p.36](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
