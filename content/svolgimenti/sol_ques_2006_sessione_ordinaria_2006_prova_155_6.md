

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_155_6|2006 Sessione Ordinaria PNI — Prova (p.155) — Quesito 6]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_155|2006 Sessione Ordinaria PNI — Prova (p.155)]]

Si deve discutere, al variare del parametro reale $k$, l'equazione
$$k\cos 2x - 5k + 2 = 0,$$
determinando per quali valori di $k$ essa ammette radici $x$ compatibili con la limitazione $15° < x < 45°$ imposta dal problema.

## Impostazione

Se $15° < x < 45°$, allora $30° < 2x < 90°$. Su questo intervallo il coseno è strettamente decrescente, quindi ponendo
$$t = \cos 2x$$
la variabile $t$ descrive l'intervallo aperto
$$0 < t < \frac{\sqrt{3}}{2},$$
(estremi esclusi, perché $\cos 90° = 0$ e $\cos 30° = \frac{\sqrt{3}}{2}$ non vengono raggiunti). Inoltre la corrispondenza $x \leftrightarrow t$ è biunivoca: a ogni valore ammissibile di $t$ corrisponde uno e un solo $x$ nell'intervallo dato.

## Separazione del parametro

Riscriviamo l'equazione isolando $k$:
$$k(\cos 2x - 5) = -2.$$
Poiché $\cos 2x - 5 < 0$ per ogni $x$, possiamo dividere ottenendo
$$k = \frac{-2}{\cos 2x - 5} = \frac{2}{5 - \cos 2x}.$$
Con la sostituzione $t = \cos 2x$ il problema si riduce allo studio della funzione
$$k(t) = \frac{2}{5 - t}, \qquad 0 < t < \frac{\sqrt{3}}{2}.$$

## Studio della funzione discriminante

La funzione $k(t) = \dfrac{2}{5-t}$ ha denominatore positivo e decrescente in $t$: al crescere di $t$ il denominatore diminuisce e quindi $k$ **cresce**. È dunque strettamente crescente su tutto l'intervallo. I valori agli estremi (esclusi) sono:
$$t \to 0^+ \;\Rightarrow\; k \to \frac{2}{5},$$
$$t \to \left(\frac{\sqrt{3}}{2}\right)^{-} \;\Rightarrow\; k \to \frac{2}{5 - \frac{\sqrt{3}}{2}} = \frac{4}{10 - \sqrt{3}}.$$

Razionalizzando l'estremo superiore:
$$\frac{4}{10 - \sqrt{3}} = \frac{4\,(10 + \sqrt{3})}{100 - 3} = \frac{4\,(10 + \sqrt{3})}{97} \approx 0{,}484.$$


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="414.996" height="497.554" viewBox="-72 -72 311.247 373.165"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-49.607 277.283h238.603"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M187.116 274.883c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><g stroke="none" font-size="10"><text x="-38.226" y="277.283" font-family="cmmi10" transform="translate(231.155 3.222)">t</text><text x="-31.837" y="277.283" font-family="cmr10" transform="translate(231.155 3.222)">=</text><text x="-21.282" y="277.283" font-family="cmr10" transform="translate(231.155 3.222)">cos</text><text x="-6.226" y="277.283" font-family="cmr10" transform="translate(231.155 3.222)">2</text><text x="-1.226" y="277.283" font-family="cmmi10" transform="translate(231.155 3.222)">x</text></g><path fill="none" d="M-38.226 294.355V-58.06"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-40.626-56.18c1.44-.38 2.12-1.226 2.4-2.08.28.854.96 1.7 2.4 2.08"/><text x="-38.226" y="277.283" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.76 -339.275)">k</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-38.226 277.283 3.338-4.064 3.337-3.96 3.338-4.063 3.338-4.168 3.338-4.168 3.337-4.063 3.338-4.168 3.338-4.168 3.338-4.22 3.338-4.272 3.337-4.22 3.338-4.324 3.338-4.325 3.338-4.324 3.337-4.428 3.338-4.376 3.338-4.429 3.338-4.428 3.338-4.48 3.337-4.481 3.338-4.533 3.338-4.48 3.338-4.533 3.337-4.74 3.338-4.69 3.338-4.636 3.338-4.741 3.338-4.69 3.337-4.792 3.338-4.741 3.338-4.898 3.338-4.845 3.338-4.845 3.337-5.001 3.338-5.002 3.338-4.95 3.338-5.053 3.337-5.001 3.338-5.106 3.338-5.105 3.338-5.158 3.338-5.21 3.337-5.158 3.338-5.314 3.338-5.418 3.338-5.21 3.337-5.418 3.338-5.418 3.338-5.367 3.338-5.47L132 37.11l3.337-5.523 3.338-5.574 3.338-5.627 3.338-5.679 3.337-5.835 3.338-5.73 3.338-5.836 3.338-5.73"/><path fill="#00f" stroke="#00f" d="M-35.726 277.283a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM161.394-8.952a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm-2.5 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M158.894 277.283V-8.952M-38.226-8.952h197.12"/><g stroke="none"><text x="-37.026" y="267.51" font-family="cmsy7" font-size="7" transform="translate(190.643 16.831)">p</text><path d="M160.186 284.001h3.986v.34h-3.986z"/><text x="-30.457" y="273.346" font-family="cmr7" font-size="7" transform="translate(190.643 16.831)">3</text><path d="M153.617 291.414h10.556v.4h-10.556z"/><text x="-33.741" y="280.731" font-family="cmr7" font-size="7" transform="translate(190.643 16.831)">2</text></g><g stroke="none"><text x="-37.026" y="273.346" font-family="cmr7" font-size="7" transform="translate(-9.92 2.5)">2</text><path d="M-46.945 277.083h3.986v.4h-3.986z"/><text x="-37.026" y="280.731" font-family="cmr7" font-size="7" transform="translate(-9.92 2.5)">5</text></g><g stroke="none"><text x="-26.63" y="273.346" font-family="cmr7" font-size="7" transform="translate(-30.71 -284.735)">4</text><path d="M-67.737-10.152h24.778v.4h-24.778z"/><text x="-37.026" y="281.898" font-family="cmr7" font-size="7" transform="translate(-30.71 -284.735)">10</text><text x="-29.054" y="281.898" font-family="cmsy7" font-size="7" transform="translate(-30.71 -284.735)">¡</text><text x="-22.804" y="276.063" font-family="cmsy7" font-size="7" transform="translate(-30.71 -284.735)">p</text><path d="M-46.945-9.012h3.986v.34h-3.986z"/><text x="-16.234" y="281.898" font-family="cmr7" font-size="7" transform="translate(-30.71 -284.735)">3</text></g></g></svg>
</figure>

Essendo $k(t)$ continua e strettamente crescente, essa assume una e una sola volta ciascun valore dell'intervallo aperto $\left(\dfrac{2}{5},\, \dfrac{4}{10-\sqrt{3}}\right)$, e nessun valore al di fuori di esso.

## Conclusione (discussione)

Ricordando che ogni $t$ ammissibile individua un unico $x$ in $(15°,\,45°)$:

- se
$$\frac{2}{5} < k < \frac{4}{10 - \sqrt{3}} \approx 0{,}484,$$
l'equazione ha **una sola radice** $x$ accettabile, e le sue soluzioni sono soluzioni del problema;
- se $k \le \dfrac{2}{5}$ oppure $k \ge \dfrac{4}{10 - \sqrt{3}}$, **nessuna** radice cade nell'intervallo richiesto, quindi il problema non ammette soluzione.

La radice, quando esiste, si ricava da $t = 5 - \dfrac{2}{k}$, ossia
$$\cos 2x = 5 - \frac{2}{k} \quad\Rightarrow\quad x = \frac{1}{2}\arccos\!\left(5 - \frac{2}{k}\right).$$

*Fonte:* [📄 PDF p.155](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)


#maturita/soluzione #area/analisi #cluster/studio_di_funzione
