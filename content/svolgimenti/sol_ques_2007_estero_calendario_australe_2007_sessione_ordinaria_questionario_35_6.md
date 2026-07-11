

**Quesito:** [[Quesiti/ques_2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35_6|2007 Estero Australe Ordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2007_estero_calendario_australe_2007_sessione_ordinaria_questionario_35|2007 Estero Australe Ordinaria — Questionario]]

Dato un tetraedro regolare, si costruisce il tetraedro regolare avente per vertici i baricentri delle sue quattro facce. Si dimostri che ogni faccia di un tetraedro è parallela a una faccia dell'altro.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="256.617" height="175.249" viewBox="-72 -72 192.463 131.436"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="m24.073-58.57-81.39 110.987h162.781ZM24.073-58.57l11.1 70.291"/><path fill="none" stroke-dasharray="3.0,3.0" stroke-width=".8" d="m-57.317 52.417 92.49-40.696M105.464 52.417 35.172 11.72"/><path fill="none" stroke="#00f" stroke-width=".8" d="M27.773 38.84 54.891 1.842H.655ZM27.773 38.84l-3.7-23.419M54.89 1.843 24.074 15.421M.655 1.843l23.418 13.578"/><path fill="#00f" stroke="none" d="M29.853 38.84a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0M56.97 1.843a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0M2.7350000000000003 1.843a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0M26.153 15.421a2.08 2.08 0 1 0-4.16 0 2.08 2.08 0 0 0 4.16 0m-2.08 0"/><text x="24.073" y="52.417" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.75 -114.52)">A</text><text x="24.073" y="52.417" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-93.01 3.417)">B</text><text x="24.073" y="52.417" stroke="none" font-family="cmmi10" font-size="10" transform="translate(84.924 3.417)">C</text><text x="24.073" y="52.417" stroke="none" font-family="cmmi10" font-size="10" transform="translate(14.632 -37.279)">D</text></g></svg>
</figure>

## Impostazione

Sia $ABCD$ il tetraedro regolare di spigolo $\ell$. I vertici del tetraedro interno sono i baricentri delle quattro facce. Identificando ciascun vertice con il proprio vettore posizione, i baricentri delle facce opposte rispettivamente ad $A,\,B,\,C,\,D$ sono

$$G_A=\frac{B+C+D}{3},\quad G_B=\frac{A+C+D}{3},\quad G_C=\frac{A+B+D}{3},\quad G_D=\frac{A+B+C}{3}.$$

## Le facce sono parallele

Confrontiamo la faccia $G_B G_C G_D$ del tetraedro interno (quella opposta al vertice $G_A$) con la faccia $BCD$ del tetraedro esterno. Si ha

$$G_C-G_B=\frac{(A+B+D)-(A+C+D)}{3}=\frac{B-C}{3},$$

$$G_D-G_B=\frac{(A+B+C)-(A+C+D)}{3}=\frac{B-D}{3}.$$

Il piano $G_B G_C G_D$ è dunque generato dai vettori $\frac{1}{3}(B-C)$ e $\frac{1}{3}(B-D)$, cioè dalle stesse due direzioni $B-C$ e $B-D$ che generano il piano $BCD$. I due piani hanno perciò la medesima giacitura: la faccia $G_B G_C G_D$ è parallela alla faccia $BCD$.

Ripetendo lo stesso calcolo per gli altri tre baricentri si conclude che ciascuna faccia del tetraedro interno è parallela alla corrispondente faccia del tetraedro esterno.

## Dimostrazione sintetica (teorema di Talete)

La stessa proprietà si ottiene in modo elementare. Siano $N$ e $O$ i baricentri delle facce $ACD$ e $BCD$, entrambe contenenti il vertice $D$. Detti $J$ il punto medio di $AC$ e $K$ il punto medio di $BC$, le mediane uscenti da $D$ sono $\overline{DJ}$ (nel triangolo $ACD$) e $\overline{DK}$ (nel triangolo $BCD$); poiché il baricentro divide ogni mediana in rapporto $2:1$ a partire dal vertice, risulta

$$DN=\frac{2}{3}\,DJ,\qquad DO=\frac{2}{3}\,DK.$$

Nel triangolo $DJK$ i punti $N$ e $O$ dividono i lati $\overline{DJ}$ e $\overline{DK}$ nello stesso rapporto $\frac{2}{3}$: per il teorema di Talete $NO$ è parallelo a $JK$. Ma $\overline{JK}$ è il segmento che unisce i punti medi di $AC$ e $BC$ nel triangolo $ABC$, quindi $JK$ è parallelo ad $AB$ e $JK=\frac{1}{2}AB$. Ne segue che $NO$ è parallelo ad $AB$. Analogamente si prova che gli altri due lati della faccia interna sono paralleli ad $AC$ e a $BC$: il piano di tale faccia è dunque parallelo al piano $ABC$.

## Osservazione: rapporto degli spigoli

Dalla relazione $G_C-G_B=\frac{1}{3}(B-C)$ segue immediatamente

$$|G_B G_C|=\frac{1}{3}\,|BC|=\frac{\ell}{3}.$$

Lo spigolo del tetraedro interno è quindi un terzo dello spigolo del tetraedro esterno: i due tetraedri regolari sono simili con rapporto di similitudine $\frac{1}{3}$ (e rapporto dei volumi $\frac{1}{27}$).

*Fonte:* [📄 PDF p.38](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
