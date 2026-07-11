

**Quesito:** [[Quesiti/ques_2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55_2|2006 Estero Europa — Questionario — Quesito 2]] · **Prova:** [[Prove/2006_scuole_italiane_allestero_europa_2006_sessione_ord_questionario_55|2006 Estero Europa — Questionario]]

L'equazione risolvente un dato problema è
$$k\sin x - 3k + 1 = 0,$$
dove $k$ è un parametro reale e $x$, per soddisfare le condizioni del problema, deve essere $30^\circ < x < 60^\circ$. Si discuta per quali valori di $k$ le radici dell'equazione siano soluzioni del problema.

## Impostazione

Se fosse $k = 0$ l'equazione diventerebbe $1 = 0$, priva di soluzioni; possiamo quindi supporre $k \neq 0$ e ricavare $\sin x$:
$$k\sin x = 3k - 1 \quad\Rightarrow\quad \sin x = \frac{3k-1}{k}.$$

Nell'intervallo $30^\circ < x < 60^\circ$ la funzione seno è strettamente crescente, dunque a ogni valore di $x$ corrisponde uno e un solo valore di $\sin x$, con
$$\frac{1}{2} < \sin x < \frac{\sqrt{3}}{2}.$$

L'equazione ha una radice accettabile se e solo se il valore $\dfrac{3k-1}{k}$ cade in questa fascia:
$$\frac{1}{2} < \frac{3k-1}{k} < \frac{\sqrt{3}}{2}.$$

## Risoluzione del sistema

La doppia disuguaglianza equivale al sistema

$$\begin{cases} \dfrac{3k-1}{k} > \dfrac{1}{2} \\[2mm] \dfrac{3k-1}{k} < \dfrac{\sqrt{3}}{2} \end{cases}$$

**Prima disequazione.** Portando tutto a primo membro:
$$\frac{3k-1}{k} - \frac{1}{2} = \frac{2(3k-1) - k}{2k} = \frac{5k-2}{2k} > 0.$$
Studiando il segno del rapporto si ottiene
$$k < 0 \quad \text{oppure} \quad k > \frac{2}{5}.$$

**Seconda disequazione.** Analogamente:
$$\frac{3k-1}{k} - \frac{\sqrt{3}}{2} = \frac{2(3k-1) - \sqrt{3}\,k}{2k} = \frac{(6-\sqrt{3})k - 2}{2k} < 0.$$
Poiché $6 - \sqrt{3} > 0$, il numeratore si annulla in $k = \dfrac{2}{6-\sqrt{3}}$, e il rapporto è negativo per
$$0 < k < \frac{2}{6-\sqrt{3}}.$$

## Soluzione comune e conclusione

Confrontando le due condizioni e osservando che
$$\frac{2}{5} = 0.4, \qquad \frac{2}{6-\sqrt{3}} = \frac{12 + 2\sqrt{3}}{33} \cong 0.469,$$
l'intersezione dei due insiemi è
$$\boxed{\ \frac{2}{5} < k < \frac{2}{6-\sqrt{3}}\ }.$$

Per questi e solo questi valori di $k$ l'equazione $k\sin x - 3k + 1 = 0$ ammette una radice $x$ con $30^\circ < x < 60^\circ$, cioè accettabile come soluzione del problema.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="259.984" height="218.737" viewBox="-72 -72 194.988 164.053"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-68.783 69.312H71.085"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M69.205 66.912c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-228.404" y="69.312" stroke="none" font-family="cmmi10" font-size="10" transform="translate(303.422 3.472)">k</text><path fill="none" d="M-59.107 82.115v-140.44"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-61.507-56.445c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><g stroke="none" font-size="10"><text x="-228.404" y="69.312" font-family="cmr10" transform="translate(159.467 -131.57)">sin</text><text x="-214.46" y="69.312" font-family="cmmi10" transform="translate(159.467 -131.57)">x</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-59.107 57.131 2.044-2.91 2.044-2.844 2.045-2.783 2.044-2.707 2.045-2.647 2.044-2.595 2.045-2.536 2.044-2.476 2.045-2.425 2.044-2.364 2.044-2.323 2.045-2.271 2.044-2.22 2.045-2.177 2.044-2.135 2.045-2.092 2.044-2.049 2.045-2.007 2.044-1.962 2.044-1.939 2.045-1.896 2.044-1.852 2.045-1.818 2.044-1.794L-7.996.56l2.044-1.725 2.044-1.69 2.045-1.656L.18-6.144l2.045-1.595L4.27-9.32l2.045-1.546 2.044-1.519 2.044-1.494 2.045-1.469 2.044-1.422 2.045-1.417 2.044-1.393 2.045-1.374 2.044-1.35 2.044-1.33 2.045-1.307 2.044-1.289 2.045-1.263 2.044-1.247 2.045-1.23 2.044-1.204 2.044-1.195 2.045-1.17 2.044-1.152 2.045-1.136 2.044-1.118 2.045-1.11 2.044-1.084 2.045-1.068 2.044-1.059 2.044-1.04 2.045-1.025 2.044-1.016"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-228.404" y="69.312" font-family="cmr10" font-size="10" transform="translate(293.754 -112.56)">sin</text><text x="-214.46" y="69.312" font-family="cmmi10" font-size="10" transform="translate(293.754 -112.56)">x</text><text x="-205.967" y="69.312" font-family="cmr10" font-size="10" transform="translate(293.754 -112.56)">=</text><text x="-194.211" y="65.375" font-family="cmr7" font-size="7" transform="translate(293.754 -112.56)">3</text><text x="-190.225" y="65.375" font-family="cmmi7" font-size="7" transform="translate(293.754 -112.56)">k</text><text x="-185.805" y="65.375" font-family="cmsy7" font-size="7" transform="translate(293.754 -112.56)">¡</text><text x="-179.555" y="65.375" font-family="cmr7" font-size="7" transform="translate(293.754 -112.56)">1</text><path d="M99.543-45.947h18.642v.4H99.543z"/><text x="-187.1" y="72.76" font-family="cmmi7" font-size="7" transform="translate(293.754 -112.56)">k</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-59.107 26.633H66.65"/><g stroke="none"><text x="-227.204" y="65.375" font-family="cmr7" font-size="7" transform="translate(298.588 -40.18)">1</text><path d="M71.384 26.433h3.986v.4h-3.986z"/><text x="-227.204" y="72.76" font-family="cmr7" font-size="7" transform="translate(298.588 -40.18)">2</text></g></g><g stroke-dasharray="3.0,3.0"><path fill="none" d="M-59.107-4.608H66.65"/><g stroke="none"><text x="-227.204" y="59.539" font-family="cmsy7" font-size="7" transform="translate(298.588 -70.418)">p</text><path d="M77.954-11.219h3.986v.34h-3.986z"/><text x="-220.634" y="65.375" font-family="cmr7" font-size="7" transform="translate(298.588 -70.418)">3</text><path d="M71.384-3.806H81.94v.4H71.384z"/><text x="-223.919" y="72.76" font-family="cmr7" font-size="7" transform="translate(298.588 -70.418)">2</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="M-34.928 69.312v-42.68M-1.738 69.312v-73.92"/><path fill="none" stroke="red" stroke-width="1.2" d="M-34.928 69.312h33.19"/><g stroke="none"><text x="-227.204" y="65.375" font-family="cmr7" font-size="7" transform="translate(190.283 13.689)">2</text><path d="M-36.921 80.3h3.986v.4h-3.986z"/><text x="-227.204" y="72.76" font-family="cmr7" font-size="7" transform="translate(190.283 13.689)">5</text></g><g stroke="none"><text x="-218.801" y="65.375" font-family="cmr7" font-size="7" transform="translate(230.2 13.689)">2</text><path d="M2.995 80.3h20.792v.4H2.995z"/><text x="-227.204" y="73.927" font-family="cmr7" font-size="7" transform="translate(230.2 13.689)">6</text><text x="-223.218" y="73.927" font-family="cmsy7" font-size="7" transform="translate(230.2 13.689)">¡</text><text x="-216.968" y="68.092" font-family="cmsy7" font-size="7" transform="translate(230.2 13.689)">p</text><path d="M19.801 81.44h3.986v.34h-3.986z"/><text x="-210.398" y="73.927" font-family="cmr7" font-size="7" transform="translate(230.2 13.689)">3</text></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.56](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
