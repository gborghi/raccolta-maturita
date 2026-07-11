

**Quesito:** [[Quesiti/ques_2008_estero_australe_2008_suppletiva_questionario_29_2|2008 Estero Australe Suppletiva — Questionario — Quesito 2]] · **Prova:** [[Prove/2008_estero_australe_2008_suppletiva_questionario_29|2008 Estero Australe Suppletiva — Questionario]]

Si dimostri che le espressioni
$$y = 2\sin\left(x-\frac{\pi}{3}\right)-2 \qquad\text{e}\qquad y = \sin x - \sqrt{3}\,\cos x - 2$$
definiscono la stessa funzione $f$. Di $f$ si precisino dominio, codominio e periodo.

## a) Equivalenza delle due espressioni

Sviluppiamo la prima espressione applicando la formula di sottrazione del seno:
$$2\sin\left(x-\frac{\pi}{3}\right) = 2\left(\sin x\cos\frac{\pi}{3} - \cos x\sin\frac{\pi}{3}\right).$$

Poiché $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$ e $\sin\dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}$, si ottiene:
$$2\sin\left(x-\frac{\pi}{3}\right) = 2\left(\frac{1}{2}\sin x - \frac{\sqrt{3}}{2}\cos x\right) = \sin x - \sqrt{3}\,\cos x.$$

Sottraendo $2$ a entrambi i membri:
$$2\sin\left(x-\frac{\pi}{3}\right) - 2 = \sin x - \sqrt{3}\,\cos x - 2.$$

Le due espressioni sono dunque identiche e definiscono la stessa funzione
$$f(x) = 2\sin\left(x-\frac{\pi}{3}\right) - 2. \qquad\text{c.v.d.}$$

## b) Dominio, codominio e periodo

**Dominio.** La funzione $f$ è composta dalla funzione seno (definita per ogni valore reale) e da operazioni algebriche sempre eseguibili; pertanto
$$D_f = \mathbb{R}.$$

**Codominio.** Per ogni $x$ si ha $-1 \le \sin\left(x-\dfrac{\pi}{3}\right) \le 1$, quindi
$$-2 \le 2\sin\left(x-\frac{\pi}{3}\right) \le 2 \;\Rightarrow\; -4 \le 2\sin\left(x-\frac{\pi}{3}\right)-2 \le 0.$$
Il codominio è dunque l'intervallo
$$[-4,\,0].$$
Il valore minimo $-4$ si raggiunge quando $\sin\left(x-\dfrac{\pi}{3}\right) = -1$, il valore massimo $0$ quando $\sin\left(x-\dfrac{\pi}{3}\right) = 1$.

**Periodo.** La funzione $\sin\left(x-\dfrac{\pi}{3}\right)$ ha lo stesso periodo di $\sin x$: uno sfasamento e le costanti moltiplicative e additive non alterano il periodo. Quindi
$$T = 2\pi.$$

Il grafico di $f$ è la sinusoide di ampiezza $2$, traslata verso il basso di $2$ unità e sfasata di $\dfrac{\pi}{3}$ verso destra rispetto a $y = 2\sin x$:


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="286.065" height="202.127" viewBox="-72 -72 214.549 151.596"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-67.478-38.668h196.776"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M127.418-41.068c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-54.675" y="-38.668" stroke="none" font-family="cmmi10" font-size="10" transform="translate(187.905 2.153)">x</text><path fill="none" d="M-54.675 79.126v-137.88"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-57.075-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-54.675" y="-38.668" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -25.963)">y</text><path fill="none" d="M-56.723 63.761h4.097"/><g stroke="none" font-size="10"><text x="-54.675" y="-38.668" font-family="cmsy10" transform="translate(-14.262 105.235)">¡</text><text x="-46.897" y="-38.668" font-family="cmr10" transform="translate(-14.262 105.235)">4</text></g><path fill="none" d="M-56.723 38.154h4.097"/><g stroke="none" font-size="10"><text x="-54.675" y="-38.668" font-family="cmsy10" transform="translate(-14.262 79.627)">¡</text><text x="-46.897" y="-38.668" font-family="cmr10" transform="translate(-14.262 79.627)">3</text></g><path fill="none" d="M-56.723 12.546h4.097"/><g stroke="none" font-size="10"><text x="-54.675" y="-38.668" font-family="cmsy10" transform="translate(-14.262 54.02)">¡</text><text x="-46.897" y="-38.668" font-family="cmr10" transform="translate(-14.262 54.02)">2</text></g><path fill="none" d="M-56.723-13.06h4.097"/><g stroke="none" font-size="10"><text x="-54.675" y="-38.668" font-family="cmsy10" transform="translate(-14.262 28.413)">¡</text><text x="-46.897" y="-38.668" font-family="cmr10" transform="translate(-14.262 28.413)">1</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M-67.478-38.668h197.176M-67.478 63.761h197.176"/><path fill="none" stroke="#00f" stroke-width=".8" d="m-64.918 63.37 2.399-.816 2.398-1.25 2.398-1.68 2.399-2.092 2.398-2.485 2.398-2.859 2.399-3.206 2.398-3.525 2.398-3.814 2.399-4.068 2.398-4.29 2.398-4.47 2.399-4.613 2.398-4.715 2.398-4.775 2.399-4.793 2.398-4.772 2.398-4.706 2.399-4.602 2.398-4.453 2.398-4.27 2.399-4.045 2.398-3.788 2.399-3.496 2.398-3.173 2.398-2.824 2.399-2.45 2.398-2.052 2.398-1.638 2.399-1.21 2.398-.77 2.398-.325 2.399.124 2.398.572 2.398 1.014 2.399 1.45 2.398 1.87 2.398 2.272 2.399 2.661 2.398 3.02 2.398 3.355 2.399 3.662 2.398 3.934 2.398 4.174 2.399 4.377 2.398 4.54 2.398 4.664 2.399 4.749L52.6 12.57l2.398 4.788 2.399 4.748 2.398 4.663 2.398 4.539 2.399 4.374 2.398 4.172 2.398 3.932 2.399 3.66 2.398 3.35 2.398 3.017 2.399 2.656 2.398 2.27 2.398 1.865 2.399 1.445 2.398 1.01 2.398.567 2.399.12 2.398-.33 2.398-.774 2.399-1.215 2.398-1.643 2.398-2.056 2.399-2.454 2.398-2.827 2.398-3.176 2.399-3.5 2.398-3.79 2.399-4.048 2.398-4.271 2.398-4.456"/><g fill="#00f" stroke="#00f"><g fill="#00f" stroke="none"><text x="-54.675" y="-38.668" font-family="cmmi10" font-size="10" transform="translate(36.513 -9.023)">y</text><text x="-46.636" y="-38.668" font-family="cmr10" font-size="10" transform="translate(36.513 -9.023)">=</text><text x="-36.08" y="-38.668" font-family="cmr10" font-size="10" transform="translate(36.513 -9.023)">2</text><text x="-29.413" y="-38.668" font-family="cmr10" font-size="10" transform="translate(36.513 -9.023)">sin</text><text x="-15.469" y="-46.768" font-family="cmex10" font-size="10" transform="translate(36.513 -9.023)">¡</text><text x="-10.886" y="-38.668" font-family="cmmi10" font-size="10" transform="translate(36.513 -9.023)">x</text><text x="-2.948" y="-38.668" font-family="cmsy10" font-size="10" transform="translate(36.513 -9.023)">¡</text><text x="8.252" y="-42.605" font-family="cmmi7" font-size="7" transform="translate(36.513 -9.023)">¼</text><path d="M44.765-50.391h4.927v.4h-4.927z"/><text x="8.722" y="-35.22" font-family="cmr7" font-size="7" transform="translate(36.513 -9.023)">3</text><text x="14.379" y="-46.768" font-family="cmex10" font-size="10" transform="translate(36.513 -9.023)">¢</text><text x="21.185" y="-38.668" font-family="cmsy10" font-size="10" transform="translate(36.513 -9.023)">¡</text><text x="31.185" y="-38.668" font-family="cmr10" font-size="10" transform="translate(36.513 -9.023)">2</text></g></g></g></svg>
</figure>

*Fonte:* [📄 PDF p.29](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
