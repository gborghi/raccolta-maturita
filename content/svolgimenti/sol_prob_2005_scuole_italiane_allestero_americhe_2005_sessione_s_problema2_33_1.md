

**Problema:** [[Problemi/prob_2005_scuole_italiane_allestero_americhe_2005_sessione_s_problema2_33_1|2005 Americhe Suppletiva — Problema 2 — Problema 1]] · **Prova:** [[Prove/2005_scuole_italiane_allestero_americhe_2005_sessione_s_problema2_33|2005 Americhe Suppletiva — Problema 2]]

Un prisma retto ha per basi i quadrati $ABCD$ e $A'B'C'D'$ e spigoli laterali $AA'$, $BB'$, $CC'$, $DD'$. Gli spigoli di base misurano $2\ \text{cm}$, quelli laterali $5\ \text{cm}$.

## a)

Un piano contenente lo spigolo $AB$ forma con il piano di base l'angolo $\varphi$. Ruotando attorno ad $AB$, tale piano interseca la faccia $ADD'A'$ (perpendicolare ad $AB$) lungo un segmento $AG$, con $G$ appartenente al lato $DD'$: l'ampiezza $\varphi$ è proprio l'angolo $\widehat{DAG}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="107.899" height="189.193" viewBox="-72 -72 80.925 141.894"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-55.098 55.925h45.524V-57.886h-45.524Z"/><text x="-55.098" y="55.925" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><text x="-55.098" y="55.925" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.058 10.366)">D</text><g stroke="none"><text x="-55.098" y="55.925" font-family="cmmi10" font-size="10" transform="translate(49.058 -117.344)">D</text><text x="-46.542" y="52.296" font-family="cmsy7" font-size="7" transform="translate(49.058 -117.344)">0</text></g><g stroke="none"><text x="-55.098" y="55.925" font-family="cmmi10" font-size="10" transform="translate(-13.839 -117.344)">A</text><text x="-47.598" y="52.296" font-family="cmsy7" font-size="7" transform="translate(-13.839 -117.344)">0</text></g><path fill="none" stroke="#00f" stroke-width="1.2" d="m-55.098 55.925 45.524-78.757"/><g fill="#00f" stroke="#00f"><text x="-55.098" y="55.925" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(49.058 -75.341)">G</text></g><path fill="none" d="M-34.613 55.925c0-7.318-3.905-14.082-9.896-17.541"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width=".399992" d="M-44.081 41.402c.39-1.437-.002-2.45-.601-3.118.879.184 1.952.018 3-1.039"/><text x="-55.098" y="55.925" stroke="none" font-family="cmmi10" font-size="10" transform="translate(13.8 -9.062)">&apos;</text><text x="-55.098" y="55.925" stroke="none" font-family="cmr10" font-size="10" transform="translate(20.262 9.977)">2</text><text x="-55.098" y="55.925" stroke="none" font-family="cmr10" font-size="10" transform="translate(49.058 -53.683)">5</text></g></svg>
</figure>

La posizione limite inferiore si ha per $G\equiv D$, cioè $\varphi = 0$. La posizione limite superiore, oltre la quale il piano incontra la faccia $CDD'C'$, si ha per $G\equiv D'$. In tal caso, nel triangolo rettangolo $ADD'$ con $AD = 2$ e $DD' = 5$:

$$\tan(\varphi) = \frac{DD'}{AD} = \frac{5}{2} \Rightarrow \varphi = \arctan\!\frac{5}{2} \cong 68{,}2^\circ.$$

Il piano interseca la faccia $CDD'C'$ del prisma quando

$$0 \le \varphi \le \arctan\!\frac{5}{2}.$$

## b)

Conduciamo per $AB$ il piano che forma un angolo di $60^\circ$ con la base. Poiché $AG$ giace nel piano $ADD'A'$, perpendicolare ad $AB$, si ha $AG \perp AB$; analogamente, detto $H$ il punto in cui il piano incontra $CC'$, risulta $BH \perp AB$. I triangoli rettangoli $ADG$ e $BCH$ sono congruenti, quindi $AG = BH$.

Il quadrilatero $ABHG$ ha allora due lati opposti uguali e paralleli ($AB \parallel GH$, $AG \parallel BH$): è un parallelogramma. Poiché inoltre $BA \perp AG$, il parallelogramma è un **rettangolo**.

Le misure dei lati sono:

$$AB = GH = 2\ \text{cm}, \qquad AG = BH = \frac{AD}{\cos(\varphi)} = \frac{2}{\cos(60^\circ)} = \frac{2}{\tfrac12} = 4\ \text{cm}.$$

## c)

Fissiamo il sistema di riferimento con origine nel punto d'incontro delle diagonali del rettangolo, asse $y$ parallelo ad $AB$ e asse $x$ parallelo ad $AG$. Il rettangolo ha dimensioni $AB = 2$ (lungo $y$) e $AG = 4$ (lungo $x$), quindi i semiassi dell'ellisse inscritta sono $a = 2$ e $b = 1$.

L'equazione dell'ellisse è:

$$\frac{x^{2}}{4} + y^{2} = 1, \qquad a = 2,\ b = 1.$$

La semidistanza focale è

$$c = \sqrt{a^{2} - b^{2}} = \sqrt{4 - 1} = \sqrt{3},$$

perciò i fuochi hanno coordinate

$$E = (-\sqrt{3};\ 0), \qquad F = (\sqrt{3};\ 0).$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="225.696" height="142.947" viewBox="-72 -72 169.272 107.21"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-56.42 19.091v-62.596H68.771v62.596ZM68.771-43.505"/><path fill="none" d="M-72.07-12.207H84.02"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M82.14-14.607c.381 1.44 1.228 2.12 2.08 2.4-.852.28-1.699.96-2.08 2.4"/><text x="6.175" y="-12.207" stroke="none" font-family="cmmi10" font-size="10" transform="translate(81.778 2.153)">x</text><path fill="none" d="M6.175 34.74v-93.494"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M3.775-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="6.175" y="-12.207" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -52.425)">y</text><path fill="none" stroke="#00f" stroke-width="1.2" d="m68.772-12.207-.202-2.486-.59-2.471-.984-2.439-1.368-2.393-1.743-2.331-2.109-2.254-2.46-2.164-2.796-2.058-3.112-1.942-3.415-1.81-3.688-1.67-3.946-1.519-4.17-1.357-4.375-1.187-4.55-1.009-4.696-.825-4.812-.636-4.896-.444-4.954-.246-4.974-.05-4.968.149-4.93.345-4.857.54-4.758.731-4.627.918-4.465 1.1-4.278 1.271-4.06 1.44-3.82 1.595-3.554 1.742-3.266 1.878-2.958 2.001-2.628 2.113-2.288 2.21-1.926 2.295-1.56 2.364-1.174 2.417-.789 2.458-.394 2.48v2.488l.394 2.48.79 2.458 1.175 2.418 1.558 2.363 1.925 2.296 2.288 2.21 2.628 2.112 2.958 2.002 3.268 1.877 3.553 1.742 3.82 1.596 4.06 1.439 4.278 1.272 4.465 1.1 4.626.917 4.758.731 4.859.54 4.93.346 4.967.148 4.974-.05 4.953-.246 4.897-.444 4.813-.635 4.694-.826 4.55-1.01 4.375-1.186 4.171-1.357 3.945-1.518 3.689-1.67 3.414-1.81 3.113-1.943 2.797-2.058 2.458-2.163 2.11-2.255 1.743-2.33 1.368-2.394.983-2.439.591-2.47.2-2.487"/><path stroke="none" d="M62.144-12.207a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="6.175" y="-12.207" stroke="none" font-family="cmmi10" font-size="10" transform="translate(57.741 -3.533)">F</text><path stroke="none" d="M-46.273-12.207a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="6.175" y="-12.207" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-65.7 -3.533)">E</text><text x="6.175" y="-12.207" stroke="none" font-family="cmr10" font-size="10" transform="translate(60.096 9.977)">2</text><text x="6.175" y="-12.207" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 -28.076)">1</text></g></svg>
</figure>

## d)

Vogliamo dimostrare che la bisettrice dell'angolo di vertice $T$ dell'ellisse, i cui lati passano per i fuochi $E$ ed $F$, è perpendicolare alla tangente all'ellisse in $T$ (proprietà di riflessione). Verifichiamola nel caso proposto.

Sia $T = (\alpha;\ \beta)$ un punto dell'ellisse, con $\dfrac{\alpha^{2}}{4} + \beta^{2} = 1$. Per la formula di sdoppiamento la tangente in $T$ ha equazione

$$t:\ \frac{\alpha x}{4} + \beta y = 1, \qquad m = -\frac{\alpha}{4\beta}.$$

La retta $s$ perpendicolare a $t$ in $T$ ha coefficiente angolare $\dfrac{4\beta}{\alpha}$:

$$s:\ y - \beta = \frac{4\beta}{\alpha}(x - \alpha) \ \Rightarrow\ 4\beta x - \alpha y - 3\alpha\beta = 0.$$

Il punto $S$ in cui $s$ incontra l'asse $x$ (ponendo $y = 0$) è

$$S = \left(\frac{3}{4}\alpha;\ 0\right).$$

Basta dimostrare che $S$ è equidistante dalle rette $ET$ ed $FT$: ciò significa che $ST$ è bisettrice dell'angolo $\widehat{ETF}$, e poiché $s \perp t$ la tesi segue.

Retta $ET$, per $E = (-\sqrt{3};0)$ e $T=(\alpha;\beta)$:

$$e:\ \beta x - (\alpha + \sqrt{3})\,y + \beta\sqrt{3} = 0.$$

Retta $FT$, per $F = (\sqrt{3};0)$ e $T=(\alpha;\beta)$:

$$f:\ \beta x - (\alpha - \sqrt{3})\,y - \beta\sqrt{3} = 0.$$

Le distanze di $S$ dalle due rette sono

$$d(S,e) = \frac{\left|\frac{3}{4}\alpha\beta + \beta\sqrt{3}\right|}{\sqrt{\beta^{2} + (\alpha + \sqrt{3})^{2}}}, \qquad d(S,f) = \frac{\left|\frac{3}{4}\alpha\beta - \beta\sqrt{3}\right|}{\sqrt{\beta^{2} + (\alpha - \sqrt{3})^{2}}}.$$

Imponendo $d(S,e) = d(S,f)$ ed elevando al quadrato, dopo aver raccolto $\beta^2$, si deve avere

$$\frac{\left(\frac{3}{4}\alpha + \sqrt{3}\right)^{2}}{\beta^{2} + (\alpha + \sqrt{3})^{2}} = \frac{\left(\frac{3}{4}\alpha - \sqrt{3}\right)^{2}}{\beta^{2} + (\alpha - \sqrt{3})^{2}}.$$

Sostituendo $\beta^{2} = 1 - \dfrac{\alpha^{2}}{4}$ nei denominatori e sviluppando entrambi i membri, il prodotto incrociato conduce all'identità

$$9\alpha^{4} - 96\alpha^{2} + 256 = 9\alpha^{4} - 96\alpha^{2} + 256,$$

vera per ogni $\alpha$. Dunque $S$ è equidistante da $ET$ ed $FT$, la bisettrice coincide con la normale, e la tesi è dimostrata (c.v.d.).

## e)

L'area della regione racchiusa da un'ellisse di semiassi $a$ e $b$ è $\text{Area} = \pi a b$. Nel nostro caso $a = 2$ e $b = 1$, quindi

$$\text{Area} = \pi \cdot 2 \cdot 1 = 2\pi\ \text{cm}^{2}.$$

*Fonte:* [📄 PDF p.33](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/geometria #cluster/geometria
