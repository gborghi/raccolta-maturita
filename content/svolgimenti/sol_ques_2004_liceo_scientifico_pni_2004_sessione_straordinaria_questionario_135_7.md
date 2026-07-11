

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135_7|2004 PNI Straordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2004_liceo_scientifico_pni_2004_sessione_straordinaria_questionario_135|2004 PNI Straordinaria — Questionario]]

In un piano riferito a un sistema di assi cartesiani ortogonali $(Oxy)$ è assegnato un triangolo qualsiasi. Dimostrare le formule che esprimono le coordinate del baricentro del triangolo in funzione delle coordinate dei suoi vertici.

Siano $A=(x_A;\,y_A)$, $B=(x_B;\,y_B)$ e $C=(x_C;\,y_C)$ i vertici del triangolo e indichiamo con $G=(x_G;\,y_G)$ il baricentro, cioè il punto d'incontro delle mediane. Sia inoltre $E=(x_E;\,y_E)$ il punto medio del lato $BC$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="317.505" height="234.756" viewBox="-72 -72 238.129 176.067"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-72.07 84.818h224.947"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M150.997 82.418c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-53.291" y="84.818" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(210.101 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-53.29 103.597V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-55.69-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-53.291" y="84.818" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -149.45)">y</text></g><path fill="none" stroke-width=".8" d="m-21.988-40.392-31.303 125.21 187.815-31.303Z"/><path fill="none" stroke="#00f" d="M-21.988-40.392 40.616 69.167"/><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-21.988-40.392v125.21M19.737 32.636v52.182M40.616 69.167v15.65"/><path stroke="none" d="M-19.788-40.392a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-53.291" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(20.27 -128.743)">A</text><path stroke="none" d="M-51.09 84.818a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-53.291" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.62 10.366)">B</text><path stroke="none" d="M136.724 53.515a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-53.291" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(191.348 -27.886)">C</text><path stroke="none" d="M42.816 69.167a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-53.291" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(97.44 -19.184)">E</text><g fill="red" stroke="red"><path stroke="none" d="M21.937 32.636a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><text x="-53.291" y="84.818" fill="red" stroke="none" font-family="cmmi10" font-size="10" transform="translate(76.561 -55.714)">G</text></g><path stroke="none" d="M-20.338 84.818a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-53.291" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(26.74 10.366)">H</text><path stroke="none" d="M21.387 84.818a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-53.291" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(70.438 10.366)">I</text><path stroke="none" d="M42.266 84.818a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-53.291" y="84.818" stroke="none" font-family="cmmi10" font-size="10" transform="translate(89.303 10.366)">K</text></g></svg>
</figure>

Poiché $E$ è il punto medio di $BC$, per le note formule del punto medio si ha:

$$x_E=\frac{x_B+x_C}{2}, \qquad y_E=\frac{y_B+y_C}{2}.$$

Ricordiamo che il baricentro divide ogni mediana in due parti, di cui quella avente un estremo nel vertice è il doppio dell'altra; in particolare, sulla mediana $AE$ risulta:

$$\overline{AG}=2\,\overline{GE}, \qquad \text{cioè}\quad \overline{AG}:\overline{GE}=2:1.$$

Dette $H$, $I$ e $K$ rispettivamente le proiezioni di $A$, $G$ ed $E$ sull'asse $x$, per il teorema di Talete i segmenti staccati sull'asse sono proporzionali a quelli staccati sulla mediana:

$$\overline{HI}:\overline{IK}=\overline{AG}:\overline{GE}=2:1.$$

Traducendo le lunghezze delle proiezioni tramite le ascisse dei punti si ottiene:

$$\frac{x_G-x_A}{x_E-x_G}=2 \;\Rightarrow\; x_G-x_A=2x_E-2x_G \;\Rightarrow\; 3x_G=2x_E+x_A.$$

Sostituendo $2x_E=x_B+x_C$ segue $3x_G=x_A+x_B+x_C$, da cui:

$$x_G=\frac{x_A+x_B+x_C}{3}.$$

Proiettando in modo del tutto analogo i punti $A$, $G$ ed $E$ sull'asse $y$, dal teorema di Talete si ricava $3y_G=2y_E+y_A=y_A+y_B+y_C$, e quindi:

$$y_G=\frac{y_A+y_B+y_C}{3}.$$

Le coordinate del baricentro sono dunque la media aritmetica delle coordinate dei tre vertici:

$$G=\left(\frac{x_A+x_B+x_C}{3};\;\frac{y_A+y_B+y_C}{3}\right).$$

*Fonte:* [📄 PDF p.140](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
