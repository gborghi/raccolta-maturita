

**Problema:** [[Problemi/prob_2003_sessione_ordinaria_2003_211_n_03_prova_12_1|2003 Ordinaria — Prova (Ordinamento) — Problema 1]] · **Prova:** [[Prove/2003_sessione_ordinaria_2003_211_n_03_prova_12|2003 Ordinaria — Prova (Ordinamento)]]

Si consideri un tetraedro regolare $T$ di vertici $A,B,C,D$, di spigolo $s$.

## a)

Sia $I$ il centro della sfera inscritta: esso è equidistante dalle quattro facce, e tale distanza è il raggio $r$. Congiungendo $I$ con i quattro vertici, il tetraedro $T$ si scompone in quattro piramidi aventi ciascuna per base una faccia di $T$ e per altezza $r$.

Il volume di ogni piramide è $\frac{1}{3}\,(\text{area della faccia})\cdot r$; sommando, poiché la somma delle aree delle quattro facce è l'area totale $S$, si ottiene

$$ V=\frac{1}{3}\,S\,r \qquad\Longleftrightarrow\qquad r=\frac{3V}{S}. $$

## b)

Sia $T'$ il tetraedro avente per vertici i centri (baricentri) delle facce di $T$. Il baricentro della faccia opposta al vertice $A$ è $G_A=\frac{B+C+D}{3}$; quello opposto a $B$ è $G_B=\frac{A+C+D}{3}$. Dunque

$$ G_A-G_B=\frac{B-A}{3}, \qquad |G_A-G_B|=\frac{|AB|}{3}=\frac{s}{3}. $$

Ogni spigolo di $T'$ misura quindi $\frac{s}{3}$: il tetraedro $T'$ è ancora regolare e simile a $T$. Il rapporto fra gli spigoli è

$$ \frac{\text{spigolo di }T}{\text{spigolo di }T'}=3, $$

e, trattandosi di solidi simili, il rapporto fra i volumi è il cubo del rapporto di similitudine:

$$ \frac{V_T}{V_{T'}}=3^{3}=27. $$

## c)

In un tetraedro regolare gli spigoli opposti $AB$ e $CD$ sono perpendicolari; esiste quindi il piano $\alpha$ che contiene $AB$ ed è perpendicolare a $CD$. Per simmetria esso incontra $CD$ nel suo punto medio $E$.

Il segmento $EA$ è la mediana della faccia equilatera $ACD$ relativa al lato $CD$, quindi

$$ EA=EB=\frac{s\sqrt{3}}{2}. $$

Il triangolo $EAB$ è isoscele su base $AB=s$; la distanza di $E$ dalla retta $AB$ è l'altezza relativa alla base:

$$ d(E,AB)=\sqrt{EA^{2}-\left(\frac{s}{2}\right)^{2}}=\sqrt{\frac{3s^{2}}{4}-\frac{s^{2}}{4}}=\frac{s\sqrt{2}}{2}. $$

## d)

Nel piano $\alpha$ scegliamo come origine il punto medio $M$ di $AB$, come asse $x$ la retta $AB$ e come asse $y$ la retta $ME$ (asse di $AB$). Allora

$$ A\left(-\tfrac{s}{2},\,0\right),\qquad B\left(\tfrac{s}{2},\,0\right),\qquad E\left(0,\,\tfrac{s\sqrt{2}}{2}\right). $$

La parabola $p$ ha l'asse perpendicolare ad $AB$, cioè coincidente con l'asse $y$: è quindi simmetrica rispetto a $y$ e ha equazione $y=ax^{2}+c$. Il vertice sta sull'asse, dove passa anche $E$, dunque $c=\frac{s\sqrt{2}}{2}$. Imponendo il passaggio per $A$:

$$ 0=a\cdot\frac{s^{2}}{4}+\frac{s\sqrt{2}}{2}\;\Rightarrow\; a=-\frac{2\sqrt{2}}{s}. $$

L'equazione della parabola è

$$ p:\quad y=-\frac{2\sqrt{2}}{s}\,x^{2}+\frac{s\sqrt{2}}{2}. $$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="259.839" height="193.572" viewBox="-72 -72 194.879 145.179"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="#e0e0e0" stroke="none" d="m-49.308 59.21 1.751-4.888 1.751-4.762 1.75-4.635 1.752-4.507 1.75-4.381 1.751-4.254 1.751-4.127 1.751-4 1.751-3.873 1.75-3.746 1.752-3.619 1.75-3.492 1.752-3.365 1.75-3.238 1.751-3.11 1.751-2.985 1.751-2.857 1.75-2.73 1.752-2.603 1.75-2.477 1.751-2.35 1.751-2.221 1.751-2.096 1.751-1.968 1.75-1.841 1.752-1.715 1.75-1.587 1.751-1.46 1.751-1.334 1.751-1.206 1.751-1.08 1.75-.952 1.752-.826 1.75-.699 1.752-.571 1.75-.445 1.751-.317 1.751-.191 1.751-.064Z"/><path fill="none" d="M-72.07 59.21h181.698"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M107.748 56.81c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="18.979" y="59.21" stroke="none" font-family="cmmi10" font-size="10" transform="translate(94.582 2.153)">x</text><path fill="none" d="M18.98 70.59V-58.753"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M16.58-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="18.979" y="59.21" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -123.841)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-49.308 59.21 2.315-6.435 2.314-6.214 2.315-5.992 2.315-5.77 2.314-5.548 2.315-5.326 2.314-5.104 2.315-4.883 2.314-4.66 2.315-4.439 2.315-4.216 2.314-3.995 2.315-3.773 2.314-3.551 2.315-3.33 2.314-3.106 2.315-2.886 2.315-2.663 2.314-2.442 2.315-2.22 2.314-1.997 2.315-1.776 2.314-1.554 2.315-1.332 2.315-1.11L10.87-36l2.315-.667 2.314-.444 2.315-.223h2.314l2.315.22 2.315.444 2.314.665 2.315.887 2.314 1.109 2.315 1.33 2.314 1.553 2.315 1.774 2.315 1.997 2.314 2.218 2.315 2.44 2.314 2.662 2.315 2.885 2.314 3.105 2.315 3.328 2.315 3.55 2.314 3.771L61.792.598l2.314 4.215 2.315 4.438 2.314 4.658 2.315 4.882 2.315 5.102 2.314 5.325 2.315 5.547 2.314 5.768 2.315 5.991 2.314 6.212 2.315 6.435"/><path fill="none" stroke="red" stroke-width=".8" d="M-49.308 59.21 18.98-37.362"/><path stroke="none" d="M-47.708 59.21a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="18.979" y="59.21" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-79.32 10.366)">A</text><path stroke="none" d="M88.866 59.21a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="18.979" y="59.21" stroke="none" font-family="cmmi10" font-size="10" transform="translate(71.82 10.366)">B</text><path stroke="none" d="M20.58-37.362a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><text x="18.979" y="59.21" stroke="none" font-family="cmmi10" font-size="10" transform="translate(3.533 -100.104)">E</text><g fill="#00f" stroke="#00f"><text x="18.979" y="59.21" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(58.942 -48.896)">p</text></g><g fill="red" stroke="red"><g fill="red" stroke="none" font-family="cmmi10" font-size="10"><text x="18.979" y="59.21" transform="translate(-50.977 -55.765)">E</text><text x="26.937" y="59.21" transform="translate(-50.977 -55.765)">A</text></g></g></g></svg>
</figure>

## e)

La retta $EA$ passa per $E\!\left(0,\tfrac{s\sqrt2}{2}\right)$ e $A\!\left(-\tfrac s2,0\right)$, dunque ha equazione $y=\sqrt{2}\,x+\frac{s\sqrt{2}}{2}$. La regione richiesta è compresa fra l'arco di parabola e la corda $EA$, per $x\in\left[-\tfrac{s}{2},\,0\right]$. La differenza fra ordinata della parabola e ordinata della retta è

$$ -\frac{2\sqrt{2}}{s}\,x^{2}-\sqrt{2}\,x, $$

positiva nell'intervallo considerato. L'area vale

$$ \mathcal{A}=\int_{-s/2}^{0}\left(-\frac{2\sqrt{2}}{s}\,x^{2}-\sqrt{2}\,x\right)dx=\left[-\frac{2\sqrt{2}}{3s}\,x^{3}-\frac{\sqrt{2}}{2}\,x^{2}\right]_{-s/2}^{0}=\frac{\sqrt{2}}{24}\,s^{2}. $$

Imponendo $\mathcal{A}=\dfrac{3\sqrt{2}}{2}\ \text{cm}^{2}$:

$$ \frac{\sqrt{2}}{24}\,s^{2}=\frac{3\sqrt{2}}{2}\;\Rightarrow\; s^{2}=36\;\Rightarrow\; s=6\ \text{cm}. $$

*Fonte:* [📄 PDF p.12](https://drive.google.com/file/d/1n_07H2pKPIZ0p5d9GN7HvXoIlCFb8amD/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
