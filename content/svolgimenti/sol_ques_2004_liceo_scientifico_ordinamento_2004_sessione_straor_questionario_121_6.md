

**Quesito:** [[Quesiti/ques_2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121_6|2004 Ordinamento Straordinaria — Questionario — Quesito 6]] · **Prova:** [[Prove/2004_liceo_scientifico_ordinamento_2004_sessione_straor_questionario_121|2004 Ordinamento Straordinaria — Questionario]]

Utilizzando il calcolo integrale, dimostrare la formula che fornisce il volume di una sfera di raggio assegnato.

Vogliamo dimostrare che il volume della sfera di raggio $R$ è

$$V = \frac{4}{3}\pi R^{3}.$$

Osserviamo che la semisfera di raggio $R$ si può ottenere facendo ruotare attorno all'asse $x$ il quarto di cerchio del primo quadrante, di centro $O$ e raggio $R$, la cui circonferenza di contorno ha equazione

$$x^{2} + y^{2} = R^{2}.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="218.567" height="217.851" viewBox="-72 -72 163.926 163.388"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-68.88 77.419H78.675"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M76.794 75.019c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-57.499" y="77.419" stroke="none" font-family="cmmi10" font-size="10" transform="translate(140.106 2.153)">x</text><path fill="none" d="M-57.499 88.8V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-59.898-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-57.499" y="77.419" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -142.05)">y</text><path fill="#e1e1ff" stroke="none" d="M-57.499 77.419H56.312c0-62.857-50.954-113.811-113.81-113.811Z"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-57.499-36.392 1.929.016 1.929.05 1.928.081 1.929.114 1.928.148 1.929.181 1.928.213 1.929.247 1.928.282 1.929.313 1.928.35 1.929.382 1.928.419 1.929.452 1.928.489 1.929.525 1.928.562 1.929.6 1.928.636 1.929.675 1.928.714 1.929.755 1.928.796 1.929.837 1.928.88 1.929.923 1.928.97 1.929 1.016 1.928 1.063L.357-20.59l1.928 1.165 1.929 1.217 1.928 1.272 1.929 1.33 1.928 1.39 1.929 1.452 1.929 1.518 1.928 1.587 1.929 1.66 1.928 1.738 1.929 1.82 1.928 1.908 1.929 2.002 1.928 2.104 1.929 2.214 1.928 2.336 1.929 2.468 1.928 2.617L37 13.99l1.928 2.97 1.929 3.192 1.928 3.449 1.929 3.759 1.928 4.147 1.929 4.65 1.928 5.35 1.929 6.426 1.928 8.468 1.929 18.466"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-57.499-36.392H56.312"/><g stroke="none"><text x="-57.499" y="77.419" font-family="cmmi10" font-size="10" transform="translate(30.92 -56.653)">x</text><text x="-51.783" y="73.79" font-family="cmr7" font-size="7" transform="translate(30.92 -56.653)">2</text><text x="-45.075" y="77.419" font-family="cmr10" font-size="10" transform="translate(30.92 -56.653)">+</text><text x="-35.075" y="77.419" font-family="cmmi10" font-size="10" transform="translate(30.92 -56.653)">y</text><text x="-29.813" y="73.79" font-family="cmr7" font-size="7" transform="translate(30.92 -56.653)">2</text><text x="-22.55" y="77.419" font-family="cmr10" font-size="10" transform="translate(30.92 -56.653)">=</text><text x="-11.994" y="77.419" font-family="cmmi10" font-size="10" transform="translate(30.92 -56.653)">R</text><text x="-4.324" y="73.79" font-family="cmr7" font-size="7" transform="translate(30.92 -56.653)">2</text></g><text x="-57.499" y="77.419" stroke="none" font-family="cmmi10" font-size="10" transform="translate(117.344 10.366)">R</text><text x="-57.499" y="77.419" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.203 -110.394)">R</text><text x="-57.499" y="77.419" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-11.439 10.366)">O</text></g></svg>
</figure>

Ricavando $y^{2}$ dall'equazione della circonferenza si ottiene $y^{2} = R^{2} - x^{2}$, con $x$ che varia da $0$ a $R$.

Per il volume di un solido di rotazione attorno all'asse $x$ vale la formula

$$V = \pi \int_{a}^{b} f^{2}(x)\, dx,$$

dove $y = f(x)$ è la funzione il cui grafico genera il solido. Applicandola alla semisfera:

$$V_{\text{semisfera}} = \pi \int_{0}^{R} y^{2}\, dx = \pi \int_{0}^{R} \left(R^{2} - x^{2}\right) dx.$$

Calcolando l'integrale:

$$V_{\text{semisfera}} = \pi \left[ R^{2}x - \frac{x^{3}}{3} \right]_{0}^{R} = \pi \left( R^{3} - \frac{R^{3}}{3} \right) = \frac{2}{3}\pi R^{3}.$$

La sfera è formata da due semisfere uguali, quindi ha volume doppio:

$$V = 2 \cdot \frac{2}{3}\pi R^{3} = \frac{4}{3}\pi R^{3},$$

che è proprio la formula cercata.

*Fonte:* [📄 PDF p.125](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
