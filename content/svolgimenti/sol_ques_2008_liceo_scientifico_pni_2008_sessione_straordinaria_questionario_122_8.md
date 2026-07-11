

**Quesito:** [[Quesiti/ques_2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122_8|2008 PNI Straordinaria — Questionario — Quesito 8]] · **Prova:** [[Prove/2008_liceo_scientifico_pni_2008_sessione_straordinaria_questionario_122|2008 PNI Straordinaria — Questionario]]

Si determinino le equazioni degli asintoti della curva

$$f(x) = \int_{1}^{x} t\,e^{t}\,dt.$$

## a) Espressione esplicita della funzione

Calcoliamo l'integrale indefinito per parti, ponendo $t\,e^{t} = t\cdot(e^{t})'$:

$$\int t\,e^{t}\,dt = t\,e^{t} - \int e^{t}\,dt = t\,e^{t} - e^{t} + c = e^{t}(t-1) + c.$$

Applicando il teorema fondamentale del calcolo integrale otteniamo quindi

$$f(x) = \Big[\,e^{t}(t-1)\,\Big]_{1}^{x} = e^{x}(x-1) - e^{1}(1-1) = e^{x}(x-1).$$

## b) Asintoti verticali

La funzione $f(x) = e^{x}(x-1)$ è continua su tutto $\mathbb{R}$, essendo prodotto di funzioni continue. Non esistono quindi punti in cui la funzione diverga: **non ci sono asintoti verticali**.

## c) Comportamento per $x \to -\infty$

$$\lim_{x \to -\infty} e^{x}(x-1) = 0,$$

poiché $x\,e^{x} \to 0$ e $e^{x} \to 0$ per $x \to -\infty$. Si ha dunque l'**asintoto orizzontale** $y = 0$ verso $-\infty$.

## d) Comportamento per $x \to +\infty$

$$\lim_{x \to +\infty} e^{x}(x-1) = +\infty,$$

quindi non c'è asintoto orizzontale a destra. Verifichiamo l'eventuale asintoto obliquo calcolando il coefficiente angolare:

$$m = \lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{e^{x}(x-1)}{x} = +\infty.$$

Il limite non è finito: la funzione è un infinito di ordine superiore al primo, dunque **non esiste asintoto obliquo**.

In conclusione, l'unico asintoto della curva è l'asintoto orizzontale $y = 0$ (per $x \to -\infty$).


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="298.49" height="186.577" viewBox="-72 -72 223.867 139.933"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-71.87 37.87h204.46"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M130.71 35.47c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="59.013" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(77.51 2.153)">x</text><path fill="none" d="M59.013 62.909V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M56.613-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="59.013" y="37.87" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -102.502)">y</text><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M-71.87 37.87h204.86"/><g fill="red" stroke="red"><g fill="red" stroke="none" font-size="10"><text x="59.013" y="37.87" font-family="cmmi10" transform="translate(-108.537 -8.704)">y</text><text x="67.052" y="37.87" font-family="cmr10" transform="translate(-108.537 -8.704)">=</text><text x="77.608" y="37.87" font-family="cmr10" transform="translate(-108.537 -8.704)">0</text></g></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-54.798 39.302 2.82.117 2.822.126 2.821.135 2.821.149 2.821.156 2.822.174 2.82.178 2.822.193 2.821.214 2.821.219 2.821.242 2.821.249 2.822.273 2.82.286 2.822.31 2.821.324 2.821.349 2.821.364 2.821.387 2.822.404 2.82.428 2.822.447 2.82.468 2.822.489 2.821.506 2.821.526 2.821.538 2.822.554 2.82.561 2.822.57 2.821.572 2.821.567 2.821.552 2.821.536 2.822.503 2.82.46 2.822.403 2.821.328 2.821.237 2.821.118 2.821-.03 2.821-.201 2.822-.413 2.82-.667 2.822-.968 2.821-1.326 2.821-1.747 2.821-2.243 2.821-2.822L86.26 39.6l2.82-4.284 2.822-5.195 2.821-6.25 2.821-7.47 2.821-8.875 2.821-10.491 2.822-12.349 2.82-14.48 2.822-16.92"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="59.013" y="37.87" font-family="cmmi10" font-size="10" transform="translate(30.25 -69.486)">y</text><text x="67.052" y="37.87" font-family="cmr10" font-size="10" transform="translate(30.25 -69.486)">=</text><text x="77.608" y="37.87" font-family="cmmi10" font-size="10" transform="translate(30.25 -69.486)">e</text><text x="82.264" y="34.241" font-family="cmmi7" font-size="7" transform="translate(30.25 -69.486)">x</text><text x="87.299" y="37.87" font-family="cmr10" font-size="10" transform="translate(30.25 -69.486)">(</text><text x="91.187" y="37.87" font-family="cmmi10" font-size="10" transform="translate(30.25 -69.486)">x</text><text x="99.125" y="37.87" font-family="cmsy10" font-size="10" transform="translate(30.25 -69.486)">¡</text><text x="109.125" y="37.87" font-family="cmr10" font-size="10" transform="translate(30.25 -69.486)">1)</text></g></g><path stroke="none" d="M88.966 37.87c0-.455-.672-.825-1.5-.825-.829 0-1.5.37-1.5.825 0 .456.671.825 1.5.825.828 0 1.5-.37 1.5-.825m-1.5 0"/><text x="59.013" y="37.87" stroke="none" font-family="cmr10" font-size="10" transform="translate(31.986 -3.533)">1</text><path stroke="none" d="M60.513 53.52c0-.456-.672-.826-1.5-.826-.829 0-1.5.37-1.5.825 0 .456.671.825 1.5.825.828 0 1.5-.369 1.5-.825m-1.5 0"/><g stroke="none" font-size="10"><text x="59.013" y="37.87" font-family="cmsy10" transform="translate(-16.31 25.627)">¡</text><text x="66.791" y="37.87" font-family="cmr10" transform="translate(-16.31 25.627)">1</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.127](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
