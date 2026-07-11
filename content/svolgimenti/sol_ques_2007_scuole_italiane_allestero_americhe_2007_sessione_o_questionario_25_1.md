

**Quesito:** [[Quesiti/ques_2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25_1|2007 Estero Americhe Ordinaria — Questionario — Quesito 1]] · **Prova:** [[Prove/2007_scuole_italiane_allestero_americhe_2007_sessione_o_questionario_25|2007 Estero Americhe Ordinaria — Questionario]]

**Quesito.** Si dimostri che fra tutti i triangoli rettangoli aventi la stessa ipotenusa, quello isoscele ha l'area massima.

## Impostazione geometrica

Sia $AB$ l'ipotenusa, di lunghezza fissata $AB = 2R$. Poiché il triangolo è rettangolo in $C$, l'angolo retto insiste sul diametro: il vertice $C$ appartiene alla semicirconferenza di diametro $AB$ (e quindi di raggio $R$), come mostra la figura.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="236.403" height="117.435" viewBox="-72 -72 177.302 88.077"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-57.904 2.107H90.079M90.065 2.107c0-40.857-33.12-73.977-73.977-73.977S-57.89-38.75-57.89 2.107"/><path fill="none" stroke="#00f" stroke-width=".8" d="M-57.904 2.107H90.079L60.483-57.086Z"/><path fill="none" stroke-dasharray="3.0,3.0" d="M60.483-57.086V2.107"/><path fill="none" stroke="gray" d="m16.088 2.107 44.395-59.193"/><path stroke="none" d="M-55.954 2.107a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0M92.03 2.107a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0M62.433-57.086a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0M18.038 2.107a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><text x="16.088" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-85.025 10.366)">A</text><text x="16.088" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.525 10.366)">B</text><text x="16.088" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(40.464 -62.727)">C</text><text x="16.088" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(39.832 10.366)">H</text><text x="16.088" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-3.953 10.366)">O</text><text x="16.088" y="2.107" stroke="none" font-family="cmmi10" font-size="10" transform="translate(25.726 -19.225)">R</text><g stroke="none" font-family="cmmi10" font-size="10"><text x="16.088" y="2.107" transform="translate(47.92 -26.174)">C</text><text x="23.95" y="2.107" transform="translate(47.92 -26.174)">H</text></g></g></svg>
</figure>

Detta $CH$ l'altezza relativa all'ipotenusa, l'area del triangolo è

$$\text{Area}(ABC) = \frac{1}{2}\,\overline{AB}\cdot \overline{CH}.$$

La base $\overline{AB} = 2R$ è costante, dunque l'area è massima quando è massima l'altezza $\overline{CH}$, cioè la distanza del punto $C$ dalla retta $AB$. Al variare di $C$ sulla semicirconferenza, tale distanza è massima quando $C$ è il punto più alto, cioè quando

$$\overline{CH} = R.$$

In questa posizione $H$ coincide con il centro $O$ della circonferenza, quindi $H$ è il punto medio di $AB$: l'altezza è anche mediana e il triangolo risulta **isoscele**, con $\overline{AC} = \overline{BC}$. L'area massima vale

$$\text{Area}_{\max} = \frac{1}{2}\cdot 2R \cdot R = R^2 = \frac{(2R)^2}{4} = \frac{\overline{AB}^{\,2}}{4}.$$

## Verifica analitica

Allo stesso risultato si arriva algebricamente. Indicati con $a$ e $b$ i cateti e con $c$ l'ipotenusa fissata, il teorema di Pitagora dà il vincolo

$$a^2 + b^2 = c^2,$$

mentre l'area è $S = \dfrac{1}{2}\,ab$. Dalla disuguaglianza tra media aritmetica e media geometrica,

$$ab \le \frac{a^2 + b^2}{2} = \frac{c^2}{2},$$

con uguaglianza se e solo se $a = b$. Pertanto

$$S = \frac{1}{2}\,ab \le \frac{c^2}{4},$$

e il valore massimo $S = \dfrac{c^2}{4}$ si ottiene esattamente per $a = b$, cioè quando il triangolo rettangolo è **isoscele**. Questo conclude la dimostrazione.

*Fonte:* [📄 PDF p.25](https://drive.google.com/file/d/1VbHTyALjAtoi5p7EL82zMVfKjykBx5R7/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
