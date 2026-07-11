

**Quesito:** [[Quesiti/ques_2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55_6|2006 Estero Europa — Questionario — Quesito 6]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55|2006 Estero Europa — Questionario]]

Disegnare il grafico di una funzione la cui pendenza sia sempre maggiore di $1$.

## Soluzione

La *pendenza* del grafico di una funzione $f$ nel punto di ascissa $x$ è il coefficiente angolare della retta tangente, cioè la derivata prima $f'(x)$. La richiesta è dunque
$$f'(x) > 1 \qquad \text{per ogni } x \in \mathbb{R}.$$

Basta quindi scegliere una funzione la cui derivata sia sempre maggiore di $1$. Un esempio semplice si ottiene ponendo
$$f'(x) = 3x^{2} + 2,$$
che soddisfa $f'(x) = 3x^{2} + 2 \ge 2 > 1$ per ogni $x$, poiché $3x^{2} \ge 0$.

Integrando si ricava una primitiva:
$$f(x) = x^{3} + 2x.$$

## Studio del grafico

La funzione $f(x) = x^{3} + 2x$ è una cubica con le seguenti proprietà:

- passa per l'origine, essendo $f(0) = 0$;
- è **dispari**, poiché $f(-x) = -x^{3} - 2x = -f(x)$: quindi l'origine è centro di simmetria e, per una nota proprietà delle cubiche, è anche punto di flesso;
- è **sempre crescente**, avendo derivata prima $f'(x) = 3x^{2} + 2$ sempre positiva;
- tende a $+\infty$ per $x \to +\infty$ e a $-\infty$ per $x \to -\infty$.

In ogni punto la tangente ha coefficiente angolare $f'(x) \ge 2 > 1$: la pendenza del grafico è dunque sempre maggiore di $1$, come richiesto. Il grafico è il seguente:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="180.928" height="353.19" viewBox="-72 -72 135.696 264.892"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 60.079H50.445"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M48.565 57.679c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-10.613" y="60.079" stroke="none" font-family="cmmi10" font-size="10" transform="translate(64.99 2.153)">x</text><path fill="none" d="M-10.613 147.143v-173.73"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-13.013-24.706c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-10.613" y="60.079" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -92.542)">y</text><path fill="none" d="M-61.827 58.542v3.073"/><g stroke="none" font-size="9"><text x="-10.613" y="60.079" font-family="cmsy9" transform="translate(-57.124 10.87)">¡</text><text x="-3.418" y="60.079" font-family="cmr9" transform="translate(-57.124 10.87)">2</text></g><path fill="none" d="M-36.22 58.542v3.073"/><g stroke="none" font-size="9"><text x="-10.613" y="60.079" font-family="cmsy9" transform="translate(-31.517 10.87)">¡</text><text x="-3.418" y="60.079" font-family="cmr9" transform="translate(-31.517 10.87)">1</text></g><path fill="none" d="M14.995 58.542v3.073"/><text x="-10.613" y="60.079" stroke="none" font-family="cmr9" font-size="9" transform="translate(23.295 10.87)">1</text><path fill="none" d="M40.602 58.542v3.073"/><text x="-10.613" y="60.079" stroke="none" font-family="cmr9" font-size="9" transform="translate(48.902 10.87)">2</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-45.183 192.222.875-6.413.875-6.177.875-5.947.875-5.723.875-5.506.874-5.294.875-5.09.875-4.89.875-4.696.875-4.51.875-4.329.875-4.154.874-3.986.875-3.823.875-3.667.875-3.517.875-3.373.875-3.234.875-3.103.874-2.977.875-2.858.875-2.744.875-2.637.875-2.536.875-2.44.875-2.352.875-2.269.874-2.192.875-2.121.875-2.057.875-2 .875-1.947.875-1.9.875-1.86.874-1.828.875-1.8.875-1.777.875-1.762.875-1.753.875-1.75.875-1.753.874-1.762.875-1.777.875-1.799.875-1.826.875-1.86.875-1.899.875-1.946.874-1.997.875-2.055.875-2.12.875-2.19.875-2.266.875-2.35.875-2.437.874-2.533.875-2.634.875-2.74.875-2.855.875-2.973.875-3.1.875-3.23.874-3.368.875-3.512.875-3.663.875-3.818.875-3.98.875-4.15.875-4.324.874-4.504.875-4.691.875-4.884.875-5.083.875-5.289.875-5.499.875-5.716.874-5.941.875-6.17.875-6.406"/><path stroke="none" d="M-9.173 60.079a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0m-1.44 0"/><text x="-10.613" y="60.079" stroke="none" font-family="cmmi9" font-size="9" transform="translate(-10.828 -3.533)">O</text><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-10.613" y="60.079" font-family="cmmi10" font-size="10" transform="translate(17.665 -63.481)">y</text><text x="-2.573" y="60.079" font-family="cmr10" font-size="10" transform="translate(17.665 -63.481)">=</text><text x="7.982" y="60.079" font-family="cmmi10" font-size="10" transform="translate(17.665 -63.481)">x</text><text x="13.697" y="56.45" font-family="cmr7" font-size="7" transform="translate(17.665 -63.481)">3</text><text x="20.406" y="60.079" font-family="cmr10" font-size="10" transform="translate(17.665 -63.481)">+</text><text x="30.406" y="60.079" font-family="cmr10" font-size="10" transform="translate(17.665 -63.481)">2</text><text x="35.406" y="60.079" font-family="cmmi10" font-size="10" transform="translate(17.665 -63.481)">x</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.58](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
