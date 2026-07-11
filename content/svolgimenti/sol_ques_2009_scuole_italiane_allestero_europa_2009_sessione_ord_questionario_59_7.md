

**Quesito:** [[Quesiti/ques_2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59_7|2009 Estero Europa — Questionario — Quesito 7]] · **Prova:** [[Prove/2009_scuole_italiane_allestero_europa_2009_sessione_ord_questionario_59|2009 Estero Europa — Questionario]]

Dati due punti $A$ e $B$ distanti tra loro $4\ \mathrm{dm}$, si determini il luogo dei punti $C$ dello spazio tali che il triangolo $ABC$ sia rettangolo in $A$ ed abbia area uguale a $2\ \mathrm{cm}^2$.

## Impostazione

Poiché il triangolo è rettangolo in $A$, i due cateti sono $AB$ e $AC$, con $AC \perp AB$. Le due condizioni del problema si traducono in:

- **angolo retto in $A$:** il segmento $AC$ è perpendicolare ad $AB$, dunque $C$ appartiene al piano passante per $A$ e perpendicolare alla retta $AB$;
- **area assegnata:** l'area del triangolo, avendo per cateti $AB$ e $AC$, vale
$$\text{Area}(ABC) = \frac{1}{2}\,AB\cdot AC = 2\ \mathrm{cm}^2 .$$

## Verifica con le coordinate

Fissiamo un riferimento cartesiano ortogonale $Oxyz$ (unità: $\mathrm{dm}$) con $A=O$ e $B=(0;\,4;\,0)$, e sia $C=(x;\,y;\,z)$ il generico punto dello spazio.

La condizione di angolo retto in $A$ si scrive con il teorema di Pitagora $\overline{BC}^{\,2} = \overline{AB}^{\,2} + \overline{AC}^{\,2}$:
$$x^{2} + (y-4)^{2} + z^{2} = 16 + \left(x^{2} + y^{2} + z^{2}\right) \;\Rightarrow\; -8y + 16 = 16 \;\Rightarrow\; y = 0 .$$

Dunque $C$ appartiene al piano $xz$, cioè al piano per $A$ perpendicolare ad $AB$.

## Il raggio del luogo

Imponiamo l'area. Convertendo $2\ \mathrm{cm}^2 = 0.02\ \mathrm{dm}^2$ e ricordando $AB = 4\ \mathrm{dm}$:
$$\frac{1}{2}\cdot AB \cdot AC = 0.02 \;\Rightarrow\; \frac{1}{2}\cdot 4 \cdot AC = 0.02 \;\Rightarrow\; AC = 0.01\ \mathrm{dm} = 1\ \mathrm{mm}.$$

Con $y=0$ si ha $AC = \sqrt{x^{2}+z^{2}}$, quindi
$$\sqrt{x^{2}+z^{2}} = 0.01 \;\Rightarrow\; x^{2}+z^{2} = 0.0001 .$$

Il punto $C$ appartiene perciò alla circonferenza di equazioni
$$\begin{cases} y = 0 \\ x^{2} + z^{2} = 0.0001 \end{cases}$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="268.856" height="126.611" viewBox="-72 -72 201.642 94.958"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" stroke-width=".8" d="M-27.844-20.39h142.263"/><path stroke="none" d="M-25.844-20.39a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-27.844" y="-20.391" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.033 10.366)">A</text><path stroke="none" d="M116.42-20.39a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 0"/><text x="-27.844" y="-20.391" stroke="none" font-family="cmmi10" font-size="10" transform="translate(145.797 10.366)">B</text><g stroke="none" font-family="cmr10" font-size="10"><text x="-27.844" y="-20.391" transform="translate(60.854 14.745)">4</text><text x="-21.178" y="-20.391" transform="translate(60.854 14.745)">dm</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="M-15.041-20.39c0-23.572-5.732-42.68-12.803-42.68s-12.804 19.108-12.804 42.68c0 23.57 5.732 42.678 12.804 42.678 7.071 0 12.803-19.107 12.803-42.679Zm-12.803 0"/><g fill="#00f" stroke="#00f"><text x="-27.844" y="-20.391" fill="#00f" stroke="none" font-family="cmr10" font-size="10" transform="translate(-41.093 -41.602)">luogo</text></g><path stroke="none" d="M-19.942-57.38a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 0"/><text x="-27.844" y="-20.391" stroke="none" font-family="cmmi10" font-size="10" transform="translate(9.935 -33.572)">C</text><path fill="none" stroke-dasharray="3.0,3.0" d="m-27.844-20.39 6.402-36.99"/><text x="-27.844" y="-20.391" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-17.473 -16.5)">AC</text><path fill="none" d="M-19.308-20.39v-5.122h-8.536"/></g></svg>
</figure>

## Conclusione

Il luogo cercato è la **circonferenza** contenuta nel piano passante per $A$ e perpendicolare alla retta $AB$, avente **centro in $A$** e **raggio**
$$AC = \frac{1}{100}\ \mathrm{dm} = 1\ \mathrm{mm}.$$

*Fonte:* [📄 PDF p.61](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
