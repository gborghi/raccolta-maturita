

**Quesito:** [[Quesiti/ques_2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129_4|2007 LS Ordinamento Straordinaria — Questionario — Quesito 4]] · **Prova:** [[Prove/2007_liceo_scientifico_ordinamento_2007_sessione_straor_questionario_129|2007 LS Ordinamento Straordinaria — Questionario]]

Consideriamo l'ellisse $\gamma:\ x^2+9y^2=9$, cioè $\dfrac{x^2}{9}+y^2=1$, che ha semiasse maggiore $a=3$ lungo l'asse $x$ e semiasse minore $b=1$. L'asse maggiore ha estremi $A=(-3;0)$ e $B=(3;0)$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="348.609" height="157.362" viewBox="-72 -72 261.457 118.021"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07-3.53h248.275"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M174.325-5.93c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="48.996" y="-3.529" stroke="none" font-family="cmmi10" font-size="10" transform="translate(131.143 2.153)">x</text><path fill="none" d="M48.996 45.551V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M46.596-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="48.996" y="-3.529" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -61.102)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="M147.157-3.53c0-18.07-43.948-32.72-98.161-32.72S-49.166-21.6-49.166-3.53c0 18.072 43.948 32.721 98.162 32.721 54.213 0 98.161-14.65 98.161-32.72Zm-98.161 0"/><path fill="none" stroke="red" stroke-width=".8" d="M-49.181-3.53h196.353L98.084-31.87H-.093Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="m98.084-31.87-.008 28.34"/><path stroke="none" d="M-47.456-3.53a1.725 1.725 0 1 0-3.45 0 1.725 1.725 0 0 0 3.45 0m-1.725 0"/><text x="48.996" y="-3.529" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-109.21 10.366)">A</text><path stroke="none" d="M148.897-3.53a1.725 1.725 0 1 0-3.45 0 1.725 1.725 0 0 0 3.45 0m-1.725 0"/><text x="48.996" y="-3.529" stroke="none" font-family="cmmi10" font-size="10" transform="translate(101.71 10.366)">B</text><path stroke="none" d="M99.809-31.87a1.725 1.725 0 1 0-3.45 0 1.725 1.725 0 0 0 3.45 0m-1.725 0"/><g stroke="none" font-size="10"><text x="48.996" y="-3.529" font-family="cmmi10" transform="translate(52.621 -34.373)">C</text><text x="59.636" y="-3.529" font-family="cmr10" transform="translate(52.621 -34.373)">=</text><text x="70.191" y="-3.529" font-family="cmr10" transform="translate(52.621 -34.373)">(</text><text x="74.08" y="-3.529" font-family="cmmi10" transform="translate(52.621 -34.373)">x;</text><text x="84.24" y="-3.529" font-family="cmmi10" transform="translate(52.621 -34.373)">y</text><text x="89.502" y="-3.529" font-family="cmr10" transform="translate(52.621 -34.373)">)</text></g><path stroke="none" d="M1.632-31.87a1.725 1.725 0 1 0-3.45 0 1.725 1.725 0 0 0 3.45 0m-1.725 0"/><text x="48.996" y="-3.529" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-61.178 -31.873)">D</text><text x="48.996" y="-3.529" stroke="none" font-family="cmmi10" font-size="10" transform="translate(85.479 12.633)">°</text></g></svg>
</figure>

## Impostazione del problema

Un trapezio isoscele inscritto in $\gamma$, contenuto nel semipiano $y\ge 0$ e avente come base minore... anzi come una delle basi il segmento $AB$, ha per vertici $A=(-3;0)$, $B=(3;0)$ e la coppia di punti simmetrici rispetto all'asse $y$

$$C=(x;\,y),\qquad D=(-x;\,y),$$

con $C$ appartenente al primo quadrante, dunque $0\le x\le 3$ e $y\ge 0$. Poiché $C$ sta sull'ellisse vale $x^2+9y^2=9$, da cui

$$y^2=\frac{9-x^2}{9}\quad\Rightarrow\quad y=\frac{\sqrt{9-x^2}}{3}.$$

Le due basi del trapezio sono $\overline{AB}=6$ (base maggiore) e $\overline{CD}=2x$ (base minore), mentre l'altezza è l'ordinata $y$ del lato superiore. L'area vale quindi

$$S=\frac{(\overline{AB}+\overline{CD})}{2}\cdot y=\frac{(6+2x)}{2}\,y=(3+x)\,y.$$

Sostituendo l'espressione di $y$:

$$S(x)=(3+x)\,\frac{\sqrt{9-x^2}}{3},\qquad 0\le x\le 3.$$

## Ricerca del massimo

Poiché $S(x)\ge 0$, l'area è massima dove è massimo il suo quadrato (a meno del fattore costante $1/9$). Conviene quindi studiare

$$z=9\,S^2=(3+x)^2\,(9-x^2)=(3+x)^2(3-x)(3+x)=(3+x)^3(3-x).$$

Deriviamo rispetto a $x$:

$$z'(x)=3(3+x)^2(3-x)+(3+x)^3(-1)=(3+x)^2\big[\,3(3-x)-(3+x)\,\big]=(3+x)^2\,(6-4x).$$

Nell'intervallo $0\le x\le 3$ il fattore $(3+x)^2$ è sempre positivo, quindi il segno di $z'$ è quello di $6-4x$:

$$z'(x)>0\ \text{per } x<\tfrac{3}{2},\qquad z'(x)<0\ \text{per } x>\tfrac{3}{2}.$$

Dunque $z$ (e con essa l'area $S$) cresce fino a $x=\dfrac{3}{2}$ e poi decresce: il valore $x=\dfrac{3}{2}$ è un punto di massimo assoluto.

## Trapezio di area massima

Per $x=\dfrac{3}{2}$ si ha

$$y=\frac{\sqrt{9-\frac{9}{4}}}{3}=\frac{\sqrt{\frac{27}{4}}}{3}=\frac{\frac{3\sqrt{3}}{2}}{3}=\frac{\sqrt{3}}{2}.$$

Il vertice è quindi $C=\left(\dfrac{3}{2};\,\dfrac{\sqrt{3}}{2}\right)$, con $D=\left(-\dfrac{3}{2};\,\dfrac{\sqrt{3}}{2}\right)$. Le basi valgono $\overline{AB}=6$ e $\overline{CD}=2x=3$, l'altezza $y=\dfrac{\sqrt{3}}{2}$, e l'area massima è

$$S_{\max}=(3+x)\,y=\left(3+\frac{3}{2}\right)\cdot\frac{\sqrt{3}}{2}=\frac{9}{2}\cdot\frac{\sqrt{3}}{2}=\frac{9\sqrt{3}}{4}\approx 3{,}9.$$

Il trapezio isoscele di area massima è dunque quello con basi $6$ e $3$, altezza $\dfrac{\sqrt{3}}{2}$ e area $\dfrac{9\sqrt{3}}{4}$.

*Fonte:* [📄 PDF p.130](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
