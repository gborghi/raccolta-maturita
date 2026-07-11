

**Problema:** [[Problemi/prob_2004_pni_2004_sessione_suppletiva_problema2_98_1|2004 PNI Suppletiva — Problema 2 e Quesiti — Problema 1]] · **Prova:** [[Prove/2004_pni_2004_sessione_suppletiva_problema2_98|2004 PNI Suppletiva — Problema 2 e Quesiti]]

Nel Liceo Scientifico "Torricelli" gli alunni delle quattro classi quinte sono distribuiti per sezione e per sesso secondo la tabella:

| | 5A | 5B | 5C | 5D | Totale |
|---|---|---|---|---|---|
| Maschi | 12 | 10 | 13 | 8 | 43 |
| Femmine | 16 | 18 | 15 | 20 | 69 |
| Totale | 28 | 28 | 28 | 28 | 112 |

## a) Istogramma

Riportando sull'asse delle ascisse le sezioni e su quello delle ordinate il numero di alunni (distinti in maschi e femmine), la situazione è rappresentata dal seguente istogramma:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="339.913" height="241.539" viewBox="-72 -72 254.935 181.154"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-53.981 95.185h198.769"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M142.908 92.785c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(202.702 3.34)">sezione</text><path fill="none" d="M-53.981 95.185V-58.06"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-56.381-56.18c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(-13.611 -157.178)">alunni</text><path fill="none" d="M-55.404 66.732h2.845"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(-9.956 -25.23)">5</text><path fill="none" d="M-55.404 38.28h2.845"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(-14.956 -53.683)">10</text><path fill="none" d="M-55.404 9.827h2.845"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(-14.956 -82.136)">15</text><path fill="none" d="M-55.404-18.626h2.845"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(-14.956 -110.589)">20</text><path fill="none" d="M-55.404-47.079h2.845"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(-14.956 -139.042)">25</text><path fill="#66f" stroke="none" d="M-39.755 95.185V26.899h11.381v68.286Zm11.381-68.286"/><path fill="#f66" stroke="none" d="M-28.374 95.185V4.136h11.381v91.049Zm11.381-91.049"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(19.357 10.366)">5A</text><path fill="#66f" stroke="none" d="M2.924 95.185V38.28h11.381v56.905ZM14.305 38.28"/><path fill="#f66" stroke="none" d="M14.305 95.185V-7.245h11.381v102.43ZM25.686-7.245"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(62.245 10.366)">5B</text><path fill="#66f" stroke="none" d="M45.603 95.185V21.208h11.381v73.977Zm11.381-73.977"/><path fill="#f66" stroke="none" d="M56.984 95.185V9.827h11.382v85.358ZM68.366 9.827"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(104.854 10.366)">5C</text><path fill="#66f" stroke="none" d="M88.282 95.185V49.66h11.381v45.525ZM99.663 49.66"/><path fill="#f66" stroke="none" d="M99.663 95.185V-18.626h11.382V95.185Zm11.382-113.811"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(147.325 10.366)">5D</text><path fill="#66f" stroke="none" d="M116.735-35.698v-8.535h8.536v8.535Zm8.536-8.535"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(182.785 -131.734)">M</text><path fill="#f66" stroke="none" d="M116.735-18.626v-8.536h8.536v8.536Zm8.536-8.536"/><text x="-53.981" y="95.185" stroke="none" font-family="cmr10" font-size="10" transform="translate(182.785 -114.662)">F</text></g></svg>
</figure>

## b) Distribuzioni marginali

Consideriamo le variabili aleatorie $X=\text{"sesso"}$, con valori $\{M,F\}$, e $Y=\text{"sezione"}$, con valori $\{A,B,C,D\}$.

Poiché ogni sezione conta $28$ alunni su un totale di $112$, la distribuzione marginale per sezione è
$$p(Y=A)=p(Y=B)=p(Y=C)=p(Y=D)=\frac{28}{112}=\frac14.$$

I maschi sono $43$ e le femmine $69$, quindi la distribuzione marginale per sesso è
$$p(X=M)=\frac{43}{112},\qquad p(X=F)=\frac{69}{112}.$$

Le probabilità congiunte valgono $p(X,Y)=p(Y)\cdot p(X\mid Y)=\frac14\cdot\frac{n_{ij}}{28}=\frac{n_{ij}}{112}$ (ad esempio $p(M,A)=\frac{12}{112}=\frac{3}{28}$). Poiché in generale $p(X,Y)\neq p(X)\cdot p(Y)$, le due variabili non sono indipendenti.

## c) Coppia di studenti della 5A

La 5A ha $28$ studenti ($12$ maschi e $16$ femmine). Il numero di coppie possibili è
$$\binom{28}{2}=378.$$

Coppia di due maschi:
$$\binom{12}{2}=66,\qquad p(MM)=\frac{66}{378}=\frac{11}{63}\approx0{,}175.$$

Coppia di due femmine:
$$\binom{16}{2}=120,\qquad p(FF)=\frac{120}{378}=\frac{20}{63}\approx0{,}317.$$

Coppia di sesso differente (un maschio e una femmina):
$$p(MF)=\frac{12\cdot16}{378}=\frac{192}{378}=\frac{32}{63}\approx0{,}508,$$
ottenibile anche per differenza: $p(MF)=1-\dfrac{11}{63}-\dfrac{20}{63}=\dfrac{32}{63}$.

La somma delle tre probabilità vale
$$\frac{11}{63}+\frac{20}{63}+\frac{32}{63}=\frac{63}{63}=1,$$
come deve essere, dato che i tre casi sono esaustivi e mutuamente esclusivi.

## d) Classe a caso e coppia di sesso differente

Ogni classe viene scelta con probabilità $\frac14$. In ciascuna classe la probabilità che una coppia sia di sesso differente è $p(MF)=\dfrac{M\cdot F}{\binom{28}{2}}$:

$$p_{5A}=\frac{12\cdot16}{378}=\frac{32}{63},\qquad p_{5B}=\frac{10\cdot18}{378}=\frac{10}{21},$$
$$p_{5C}=\frac{13\cdot15}{378}=\frac{65}{126},\qquad p_{5D}=\frac{8\cdot20}{378}=\frac{80}{189}.$$

Per la formula delle probabilità totali:
$$p=\frac14\left(\frac{32}{63}+\frac{10}{21}+\frac{65}{126}+\frac{80}{189}\right)=\frac14\cdot\frac{192+180+195+160}{378}=\frac14\cdot\frac{727}{378}=\frac{727}{1512}\approx0{,}48.$$

La probabilità richiesta è dunque circa il $48\%$.

## e) Probabilità condizionata (teorema di Bayes)

Scelto a caso un alunno e saputo che è maschio, la probabilità che provenga dalla 5D si ottiene con il teorema di Bayes:
$$p(5D\mid M)=\frac{p(M\mid5D)\cdot p(5D)}{p(M)}=\frac{\dfrac{8}{28}\cdot\dfrac14}{\dfrac{43}{112}}=\frac{\dfrac{8}{112}}{\dfrac{43}{112}}=\frac{8}{43}\approx0{,}186.$$

Equivalentemente, è il rapporto fra i maschi della 5D ($8$) e il totale dei maschi ($43$): $\dfrac{8}{43}$.

*Fonte:* [📄 PDF p.98](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/probabilita_e_combinatoria #cluster/probabilit_e_combinatoria
