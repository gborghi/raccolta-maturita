

**Problema:** [[Problemi/prob_2005_ordinamento_2005_sessione_suppletiva_problema1_95_1|2005 Ordinamento Suppletiva — Problema 1 — Problema 1]] · **Prova:** [[Prove/2005_ordinamento_2005_sessione_suppletiva_problema1_95|2005 Ordinamento Suppletiva — Problema 1]]

Sono dati una piramide triangolare regolare e il prisma retto inscritto in essa in modo che una base sia la sezione della piramide con il piano equidistante dal vertice e dalla base, mentre l'altra base $MNP$ è complanare alla base $ABC$ della piramide.

## a) Volume del prisma noto il volume della piramide

Sì, è possibile. Indichiamo con $h$ l'altezza della piramide e con $S$ l'area della base $ABC$; il volume della piramide è

$$V_{\text{piramide}} = \frac{1}{3}\,S\,h .$$

Il piano di sezione è equidistante dal vertice $V$ e dalla base, quindi taglia la piramide a metà altezza. Le sezioni parallele alla base sono simili ad essa, con aree proporzionali ai quadrati delle distanze dal vertice: essendo il fattore di riduzione lineare $k=\tfrac12$, l'area della sezione $DEF$ vale

$$A(DEF) = \left(\frac{1}{2}\right)^{2} A(ABC) = \frac{1}{4}\,S .$$

L'altezza del prisma è la distanza tra il piano di base e il piano di sezione, cioè $\dfrac{h}{2}$. Dunque

$$V_{\text{prisma}} = A(DEF)\cdot\frac{h}{2} = \frac{S}{4}\cdot\frac{h}{2} = \frac{S\,h}{8} = \frac{3}{8}\cdot\frac{1}{3}S\,h = \frac{3}{8}\,V_{\text{piramide}} .$$

Noto il volume della piramide, quello del prisma è quindi univocamente determinato.

## b) Spigolo della base $MNP$

Il triangolo $MNP$ è congruente alla sezione $DEF$, che è simile ad $ABC$ con rapporto di similitudine $k=\tfrac12$. Poiché lo spigolo della base $ABC$ misura $4\ \text{cm}$, lo spigolo di $MNP$ misura

$$4\cdot\frac{1}{2} = 2\ \text{cm}.$$

## c) Coordinate dei vertici

Poniamo l'origine in $A$ e l'asse delle ascisse lungo la retta $AB$. Il triangolo $ABC$ è equilatero di lato $4$; ricordando che l'altezza di un triangolo equilatero di lato $\ell$ vale $\dfrac{\ell\sqrt{3}}{2}$, si ha $CR = \dfrac{4\sqrt{3}}{2} = 2\sqrt{3}$, dunque

$$A=(0;\,0),\qquad B=(4;\,0),\qquad C=(2;\,2\sqrt{3}).$$

Il baricentro (che per il triangolo equilatero è anche circocentro e incentro) è

$$G=\left(2;\,\frac{2\sqrt{3}}{3}\right).$$

Il triangolo $MNP$ è omotetico ad $ABC$ nel centro $G$ con rapporto $\tfrac12$ (stessa orientazione, poiché la sezione della piramide è omotetica alla base rispetto al vertice $V$), con $MN\parallel AB$. Applicando l'omotetia $X\mapsto G+\tfrac12\,(X-G)$ ai vertici $A,B,C$:

$$M=\left(1;\,\frac{\sqrt{3}}{3}\right),\qquad N=\left(3;\,\frac{\sqrt{3}}{3}\right),\qquad P=\left(2;\,\frac{4\sqrt{3}}{3}\right).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="273.116" height="225.439" viewBox="-72 -72 204.837 169.079"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="#b3b3b3" stroke="#b3b3b3"><path fill="none" d="M-72.07 83.11h191.656"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M117.706 80.71c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-54.287" y="83.11" fill="#b3b3b3" stroke="none" font-family="cmmi10" font-size="10" transform="translate(177.806 2.153)">x</text></g><g fill="#b3b3b3" stroke="#b3b3b3"><path fill="none" d="M-54.287 93.78V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-56.687-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-54.287" y="83.11" fill="#b3b3b3" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -147.741)">y</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="M-54.287 83.11H87.977L16.845-40.094Z"/><path fill="none" stroke="red" stroke-width=".8" d="M-18.721 62.574H52.41L16.845.974Z"/><path fill="none" stroke="#008c00" stroke-width=".8" d="m-54.287 83.11 2.411-1.825 2.411-1.761 2.411-1.7 2.412-1.635 2.41-1.572 2.412-1.51 2.411-1.448 2.411-1.384 2.412-1.321 2.41-1.258 2.412-1.196 2.411-1.133 2.411-1.069 2.412-1.006 2.41-.944 2.412-.881 2.411-.818 2.411-.755 2.411-.692 2.412-.63 2.41-.566 2.412-.503 2.411-.44 2.411-.378 2.412-.315 2.41-.251 2.412-.189 2.411-.126 2.411-.063h2.411l2.412.062 2.41.126 2.412.19 2.411.251 2.411.314 2.412.377 2.41.44 2.412.504 2.411.566 2.411.629 2.412.692 2.41.755 2.412.818 2.411.88 2.411.944 2.411 1.007 2.412 1.07 2.41 1.132 2.412 1.195 2.411 1.258 2.411 1.322 2.412 1.384 2.41 1.447 2.412 1.51 2.411 1.573 2.411 1.635 2.411 1.699 2.412 1.761 2.41 1.825"/><path fill="none" stroke-dasharray="3.0,3.0" d="M57.913 42.042C57.913 19.36 39.526.974 16.845.974c-22.682 0-41.068 18.387-41.068 41.068S-5.837 83.11 16.845 83.11s41.068-18.387 41.068-41.068Zm-41.068 0"/><path stroke="none" d="M18.345 42.042a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-54.287" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(75.665 -37.651)">G</text><path stroke="none" d="M-52.787 83.11a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-54.287" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><path stroke="none" d="M89.477 83.11a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-54.287" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(145.797 10.366)">B</text><path stroke="none" d="M18.345-40.094a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-54.287" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(67.2 -126.737)">C</text><path stroke="none" d="M-17.221 62.574a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-54.287" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(21.241 -17.119)">M</text><path stroke="none" d="M53.91 62.574a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-54.287" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(110.23 -17.119)">N</text><path stroke="none" d="M18.345.974a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-54.287" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(74.665 -85.669)">P</text></g></svg>
</figure>

## d) Equazione della parabola

La parabola ha asse perpendicolare ad $AB$, quindi parallelo all'asse $y$, ed equazione del tipo $y=ax^{2}+bx+c$. Imponiamo il passaggio per $A$, $B$, $M$:

- passaggio per $A=(0;0)$: $\;c=0$;
- passaggio per $B=(4;0)$: $\;16a+4b=0 \Rightarrow b=-4a$;
- passaggio per $M=(1;\tfrac{\sqrt{3}}{3})$: $\;a+b=\dfrac{\sqrt{3}}{3} \Rightarrow -3a=\dfrac{\sqrt{3}}{3} \Rightarrow a=-\dfrac{\sqrt{3}}{9},\ b=\dfrac{4\sqrt{3}}{9}$.

L'equazione della parabola è quindi

$$y=-\frac{\sqrt{3}}{9}\,x^{2}+\frac{4\sqrt{3}}{9}\,x=\frac{\sqrt{3}}{9}\,x\,(4-x).$$

Essendo $N$ il simmetrico di $M$ rispetto all'asse $x=2$ della parabola, essa passa anche per $N$; verifichiamolo: per $x=3$,

$$y=\frac{\sqrt{3}}{9}\cdot 3\cdot(4-3)=\frac{\sqrt{3}}{3},$$

che è l'ordinata di $N=(3;\tfrac{\sqrt{3}}{3})$.

## e) Aree delle parti divise dalla parabola

Il vertice della parabola è $V=\left(2;\,\dfrac{4\sqrt{3}}{9}\right)$, dunque, detta $R=(2;0)$ la proiezione sull'asse $x$, si ha $VR=\dfrac{4\sqrt{3}}{9}$.

**Triangolo $ABC$.** L'area del segmento parabolico di base $AB$ si ottiene con il teorema di Archimede:

$$S(AB)=\frac{2}{3}\cdot AB\cdot VR=\frac{2}{3}\cdot 4\cdot\frac{4\sqrt{3}}{9}=\frac{32\sqrt{3}}{27}.$$

L'area del triangolo equilatero $ABC$ è $\dfrac{4^{2}\sqrt{3}}{4}=4\sqrt{3}=\dfrac{108\sqrt{3}}{27}$. Le due parti in cui la parabola divide $ABC$ hanno quindi area

$$S_{1}=S(AB)=\frac{32\sqrt{3}}{27}\ \text{u}^{2},\qquad S_{2}=4\sqrt{3}-\frac{32\sqrt{3}}{27}=\frac{76\sqrt{3}}{27}\ \text{u}^{2}.$$

**Triangolo $MNP$.** Il lato $MN$ sta all'altezza $y=\dfrac{\sqrt{3}}{3}$; detta $S$ la proiezione del vertice della parabola su tale altezza, la distanza dal vertice è $VS=VR-\dfrac{\sqrt{3}}{3}=\dfrac{4\sqrt{3}}{9}-\dfrac{3\sqrt{3}}{9}=\dfrac{\sqrt{3}}{9}$. L'area del segmento parabolico di base $MN$ (con $MN=2$) è

$$S(MN)=\frac{2}{3}\cdot MN\cdot VS=\frac{2}{3}\cdot 2\cdot\frac{\sqrt{3}}{9}=\frac{4\sqrt{3}}{27}.$$

L'area del triangolo $MNP$ è $\dfrac{1}{4}\,A(ABC)=\dfrac{1}{4}\cdot 4\sqrt{3}=\sqrt{3}=\dfrac{27\sqrt{3}}{27}$. Le due parti valgono quindi

$$S_{3}=S(MN)=\frac{4\sqrt{3}}{27}\ \text{u}^{2},\qquad S_{4}=\sqrt{3}-\frac{4\sqrt{3}}{27}=\frac{23\sqrt{3}}{27}\ \text{u}^{2}.$$

## f) Circonferenza circoscritta a $MNP$

I due triangoli equilateri $ABC$ e $MNP$ hanno lo stesso centro $G$, che per ciascuno è simultaneamente baricentro, circocentro e incentro. La circonferenza circoscritta a $MNP$ ha dunque centro $G$ e raggio pari al circumraggio di $MNP$:

$$GM=\frac{\text{lato}}{\sqrt{3}}=\frac{2}{\sqrt{3}}=\frac{2\sqrt{3}}{3}.$$

D'altra parte il raggio della circonferenza inscritta in $ABC$ (distanza di $G$ dal lato $AB$) è

$$GR=\frac{\text{lato}}{2\sqrt{3}}=\frac{4}{2\sqrt{3}}=\frac{2\sqrt{3}}{3}.$$

Poiché $GM=GR$ e i due cerchi hanno lo stesso centro $G$, la circonferenza circoscritta al triangolo $MNP$ coincide con la circonferenza inscritta nel triangolo $ABC$.

*Fonte:* [📄 PDF p.95](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/geometria #cluster/geometria
