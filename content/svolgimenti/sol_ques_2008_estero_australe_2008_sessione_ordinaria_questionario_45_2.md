

**Quesito:** [[Quesiti/ques_2008_estero_australe_2008_sessione_ordinaria_questionario_45_2|2008 Estero Australe Ordinaria — Questionario — Quesito 2]] · **Prova:** [[Prove/2008_estero_australe_2008_sessione_ordinaria_questionario_45|2008 Estero Australe Ordinaria — Questionario]]

Si calcoli e si interpreti geometricamente l'integrale definito

$$\int_{-1}^{1} \frac{1}{1+x^{2}}\,dx.$$

## Calcolo

Una primitiva di $\dfrac{1}{1+x^{2}}$ è $\arctan x$. Applicando il teorema fondamentale del calcolo integrale:

$$\int_{-1}^{1} \frac{1}{1+x^{2}}\,dx = \Big[\arctan x\Big]_{-1}^{1} = \arctan(1) - \arctan(-1).$$

Poiché $\arctan(1) = \dfrac{\pi}{4}$ e $\arctan(-1) = -\dfrac{\pi}{4}$, si ottiene:

$$\int_{-1}^{1} \frac{1}{1+x^{2}}\,dx = \frac{\pi}{4} - \left(-\frac{\pi}{4}\right) = \frac{\pi}{2}.$$

## Interpretazione geometrica

La funzione $f(x) = \dfrac{1}{1+x^{2}}$ è positiva su tutto $\mathbb{R}$; in particolare $f(x) > 0$ sull'intervallo $[-1,\,1]$. L'integrale definito rappresenta quindi la misura dell'area della regione piana delimitata dal grafico di $f$, dall'asse $x$ e dalle rette verticali $x=-1$ e $x=1$.

Tale area vale $\dfrac{\pi}{2}$. Si osservi inoltre che, essendo $f$ una funzione pari (il grafico è simmetrico rispetto all'asse $y$), l'area a sinistra dell'asse $y$ uguaglia quella a destra, ciascuna pari a $\dfrac{\pi}{4}$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="284.119" height="115.256" viewBox="-72 -72 213.089 86.442"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07.028h199.908"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M125.958-2.372c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="28.084" y=".028" stroke="none" font-family="cmmi10" font-size="10" transform="translate(103.687 2.153)">x</text><path fill="none" d="M28.084 9.133v-67.887"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M25.684-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="28.084" y=".028" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -64.66)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-17.44.028v-22.762M73.608.028v-22.762"/><g stroke="none" font-size="10"><text x="28.084" y=".028" font-family="cmsy10" transform="translate(-51.913 9.977)">¡</text><text x="35.862" y=".028" font-family="cmr10" transform="translate(-51.913 9.977)">1</text></g><text x="28.084" y=".028" stroke="none" font-family="cmr10" font-size="10" transform="translate(49.058 9.977)">1</text><text x="28.084" y=".028" stroke="none" font-family="cmr10" font-size="10" transform="translate(4.328 -49.058)">1</text><path fill="#ccf" fill-opacity=".6" stroke="none" stroke-opacity=".6" d="M-17.44.028v-22.762l1.542-.783 1.543-.81 1.543-.839 1.543-.86 1.542-.887 1.543-.906 1.543-.929 1.543-.956 1.543-.965 1.543-.979 1.542-.993 1.543-.997 1.543-1.005 1.543-1.002 1.543-.988 1.542-.974 1.543-.956 1.543-.924 1.543-.879 1.543-.852 1.542-.787 1.543-.72 1.543-.66 1.543-.577 1.543-.497 1.543-.4 1.542-.306 1.543-.209 1.543-.095 1.543-.014 1.543.105 1.542.204 1.543.31 1.543.405 1.543.492 1.543.578 1.543.65 1.542.725 1.543.787 1.543.838 1.543.888 1.543.924 1.542.956 1.543.974 1.543.988 1.543 1.002 1.543 1.006 1.543.992 1.542.993 1.543.983 1.543.965 1.543.956 1.543.929 1.542.91 1.543.884 1.543.864 1.543.834 1.543.815 1.543.783.022 22.771Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-67.518-8.386 2.42-.359 2.42-.378 2.42-.403 2.42-.425 2.42-.452 2.421-.482 2.42-.51 2.42-.544 2.42-.575 2.42-.617 2.42-.653 2.421-.696 2.42-.743 2.42-.79 2.42-.84 2.42-.895 2.42-.95 2.42-1.01 2.421-1.069 2.42-1.133 2.42-1.197 2.42-1.266 2.42-1.32 2.42-1.39 2.421-1.438 2.42-1.497 2.42-1.525 2.42-1.562 2.42-1.57 2.42-1.562 2.421-1.534 2.42-1.475 2.42-1.389 2.42-1.274 2.42-1.12 2.42-.938 2.42-.738 2.421-.505 2.42-.25h2.42l2.42.25 2.42.505 2.42.733 2.421.938 2.42 1.12 2.42 1.275 2.42 1.389 2.42 1.47 2.42 1.53 2.421 1.57 2.42 1.566 2.42 1.562 2.42 1.53 2.42 1.497 2.42 1.439 2.42 1.388 2.421 1.32 2.42 1.266 2.42 1.197 2.42 1.13 2.42 1.072 2.42 1.01 2.421.952 2.42.895 2.42.84 2.42.79 2.42.743 2.42.696 2.421.654 2.42.615 2.42.577 2.42.544 2.42.51 2.42.482 2.421.452 2.42.426 2.42.402 2.42.379 2.42.359"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="28.084" y=".028" font-family="cmmi10" font-size="10" transform="translate(50.511 -38.888)">f</text><text x="34.056" y=".028" font-family="cmr10" font-size="10" transform="translate(50.511 -38.888)">(</text><text x="37.945" y=".028" font-family="cmmi10" font-size="10" transform="translate(50.511 -38.888)">x</text><text x="43.66" y=".028" font-family="cmr10" font-size="10" transform="translate(50.511 -38.888)">)</text><text x="50.327" y=".028" font-family="cmr10" font-size="10" transform="translate(50.511 -38.888)">=</text><text x="69.371" y="-3.909" font-family="cmr7" font-size="7" transform="translate(50.511 -38.888)">1</text><path d="M112.593-41.56h18.563v.4h-18.563z"/><text x="62.082" y="3.476" font-family="cmr7" font-size="7" transform="translate(50.511 -38.888)">1+</text><text x="72.208" y="3.476" font-family="cmmi7" font-size="7" transform="translate(50.511 -38.888)">x</text><text x="76.742" y="1.476" font-family="cmr5" font-size="5" transform="translate(50.511 -38.888)">2</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.45](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/geometria #cluster/geometria
