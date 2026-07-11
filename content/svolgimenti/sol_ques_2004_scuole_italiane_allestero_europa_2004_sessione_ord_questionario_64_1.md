

**Quesito:** [[Quesiti/ques_2004_scuole_italiane_allestero_europa_2004_sessione_ord_questionario_64_1|2004 SE Europa Ord — Questionario — Quesito 1]] · **Prova:** [[Prove/2004_scuole_italiane_allestero_europa_2004_sessione_ord_questionario_64|2004 SE Europa Ord — Questionario]]

Data la funzione
$$ f(x)=\frac{\sin x}{\sin 2x}, $$
si vogliono calcolare, qualora esistano, i suoi limiti per $x\to 0$ e per $x\to +\infty$.

Conviene semplificare l'espressione sfruttando la formula di duplicazione $\sin 2x = 2\sin x\cos x$. Dove $\sin x\neq 0$ si ha
$$ f(x)=\frac{\sin x}{2\sin x\cos x}=\frac{1}{2\cos x}. $$

## Limite per $x\to 0$

Ricordando il limite notevole $\displaystyle\lim_{x\to 0}\frac{\sin x}{x}=1$, possiamo scrivere
$$ \lim_{x\to 0}\frac{\sin x}{\sin 2x}=\lim_{x\to 0}\left(\frac{\sin x}{x}\cdot\frac{2x}{\sin 2x}\cdot\frac{1}{2}\right)=1\cdot 1\cdot\frac{1}{2}=\frac{1}{2}. $$

Allo stesso risultato si giunge immediatamente usando la forma semplificata:
$$ \lim_{x\to 0}\frac{1}{2\cos x}=\frac{1}{2\cos 0}=\frac{1}{2}. $$

Dunque il limite esiste e vale $\dfrac{1}{2}$.

## Limite per $x\to +\infty$

Per $x\to +\infty$ sia $\sin x$ sia $\sin 2x$ oscillano indefinitamente fra $-1$ e $1$, senza tendere ad alcun valore. Usando la forma semplificata
$$ f(x)=\frac{1}{2\cos x}, $$
si vede che al variare di $x$ verso $+\infty$ la funzione $\cos x$ oscilla fra $-1$ e $1$ e si annulla infinite volte: in prossimità dei punti in cui $\cos x=0$ la funzione $f$ assume valori arbitrariamente grandi in modulo (asintoti verticali), mentre negli intervalli intermedi resta limitata. Il comportamento è dunque periodico e oscillante, senza alcuna stabilizzazione.

Ne segue che
$$ \lim_{x\to +\infty}\frac{\sin x}{\sin 2x}\quad\text{non esiste}. $$

Il grafico di $y=\dfrac{1}{2\cos x}$ mostra chiaramente le infinite oscillazioni, con asintoti verticali (in tratteggio) in corrispondenza degli zeri di $\cos x$, cioè per $x=\dfrac{\pi}{2}+k\pi$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="355.088" height="218.515" viewBox="-72 -72 266.316 163.887"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4" transform="matrix(1 0 0 -1 60.888 9.673)"><clipPath id="pgf14cf24dcd56449468930ee8f4658bdfecp1"><path d="M-133.158-81.943V81.943h266.316V-81.943ZM133.158 81.943"/></clipPath><g clip-path="url(#pgf14cf24dcd56449468930ee8f4658bdfecp1)"><path fill="none" d="M-133.158 0h265.916"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M130.878 2.4c.38-1.44 1.227-2.12 2.08-2.4-.853-.28-1.7-.96-2.08-2.4"/><text x="60.888" y="9.673" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 75.803 7.52)">x</text><path fill="none" d="M0-81.943V81.543"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-2.4 79.663c1.44.38 2.12 1.227 2.4 2.08.28-.853.96-1.7 2.4-2.08"/><text x="60.888" y="9.673" stroke="none" font-family="cmmi10" font-size="10" transform="matrix(1 0 0 -1 -63.519 97.094)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-120.662-81.943V81.943M-40.229-81.943V81.943M40.229-81.943V81.943M120.662-81.943V81.943"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-35.85 75.342.907-12.812.908-9.023.907-6.697.907-5.164.907-4.095.908-3.32.907-2.745.907-2.306.908-1.957.907-1.682.907-1.457.907-1.273.908-1.122.907-.988.907-.88.908-.785.907-.701.907-.635.907-.566.908-.515.907-.463.907-.42.908-.377.907-.345.907-.308.907-.282.908-.25.907-.226.907-.202.908-.18.907-.156.907-.14.908-.118.907-.103.907-.079.907-.066.908-.05.907-.032.907-.018h.908l.907.018.907.03.907.049.908.066.907.08.907.102.908.118.907.138.907.157.907.179.908.202.907.225.907.251.908.28.907.307.907.343.907.377.908.42.907.46.907.513.908.565.907.63.907.705.907.778.908.88.907.987.907 1.114.908 1.267.907 1.452.907 1.678.907 1.949.908 2.295.907 2.733.907 3.301.908 4.07.907 5.13.907 6.649.908 8.947.907 12.68M44.813-71.843l.907 11.72.907 8.379.908 6.276.907 4.872.907 3.89.907 3.171.908 2.634.907 2.213.907 1.887.908 1.624.907 1.41.907 1.238.908 1.083.907.963.907.858.907.765.908.681.907.62.907.553.908.502.907.45.907.41.907.372.908.333.907.304.907.272.908.246.907.217.907.2.907.172.908.154.907.135.907.113.908.097.907.077.907.061.907.046.908.028.907.013.907-.005.908-.018.907-.036.907-.05.908-.072.907-.085.907-.105.907-.123.908-.143.907-.162.907-.184.908-.207.907-.23.907-.257.907-.287.908-.317.907-.349.907-.386.908-.43.907-.474.907-.525.907-.581.908-.646.907-.72.907-.803.908-.901.907-1.015.907-1.15.907-1.308.908-1.5.907-1.737.907-2.026.908-2.387.907-2.854.907-3.465.907-4.29.908-5.44.907-7.102.907-9.672.908-13.897M-116.513-79.206l.907 14.053.907 9.753.908 7.158.907 5.48.907 4.315.907 3.483.908 2.872.907 2.4.907 2.03.908 1.745.907 1.503.907 1.316.908 1.153.907 1.021.907.902.907.806.908.722.907.646.907.586.908.525.907.474.907.43.907.39.908.35.907.318.907.287.908.258.907.23.907.208.907.184.908.164.907.141.907.125.908.106.907.084.907.072.907.051.908.036.907.02.907.005.908-.013.907-.028.907-.043.907-.062.908-.076.907-.098.907-.113.908-.132.907-.154.907-.174.908-.195.907-.22.907-.243.907-.272.908-.302.907-.335.907-.37.908-.407.907-.45.907-.5.907-.555.908-.615.907-.68.907-.764.908-.853.907-.96.907-1.083.907-1.227.908-1.406.907-1.62.907-1.878.908-2.205.907-2.618.907-3.153.907-3.87.908-4.846.907-6.226.907-8.309.908-11.605"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="62.088" y="5.736" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 -64.08 -6.91)">1</text><path d="M-1.993-13.884h3.986v-.4h-3.986z"/><text x="62.088" y="13.122" font-family="cmr7" font-size="7" transform="matrix(1 0 0 -1 -64.08 -6.91)">2</text></g></g><path stroke="none" d="M1.17 12.804a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0m-1.17 0"/></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.64](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/geometria #cluster/geometria
