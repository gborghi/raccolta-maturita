

**Quesito:** [[Quesiti/ques_2006_sessione_ordinaria_2006_prova_10_8|2006 Sessione Ordinaria — Prova (p.10) — Quesito 8]] · **Prova:** [[Prove/2006_sessione_ordinaria_2006_prova_10|2006 Sessione Ordinaria — Prova (p.10)]]

La funzione $f(x)=\tan x$ assume valori di segno opposto agli estremi dell'intervallo $I=\left[\dfrac{\pi}{4},\,\dfrac{3\pi}{4}\right]$, eppure non esiste alcun $x\in I$ per cui $f(x)=0$. Ci si chiede se ciò sia effettivamente possibile e come lo si spieghi.

## Valori agli estremi

Calcoliamo la funzione agli estremi dell'intervallo:

$$f\!\left(\frac{\pi}{4}\right)=\tan\frac{\pi}{4}=1>0, \qquad f\!\left(\frac{3\pi}{4}\right)=\tan\frac{3\pi}{4}=-1<0.$$

I due valori hanno effettivamente segno opposto. Se si applicasse il **teorema di esistenza degli zeri** (teorema di Bolzano), verrebbe da concludere che deve esistere almeno un punto $c\in I$ in cui $f(c)=0$. Tuttavia $\tan x$ non si annulla mai in $I$: gli zeri della tangente sono i multipli interi di $\pi$ (cioè $x=k\pi$, con $k\in\mathbb{Z}$), e nessuno di essi appartiene a $\left[\dfrac{\pi}{4},\,\dfrac{3\pi}{4}\right]$.

## Perché non c'è contraddizione

Il teorema di esistenza degli zeri richiede, come ipotesi essenziale, che la funzione sia **continua su tutto l'intervallo chiuso** $I$. Questa ipotesi qui **non è soddisfatta**: la funzione $\tan x=\dfrac{\sin x}{\cos x}$ non è definita là dove $\cos x=0$, in particolare nel punto

$$x=\frac{\pi}{2},$$

che è **interno** all'intervallo $I$. In $x=\dfrac{\pi}{2}$ la tangente presenta un asintoto verticale, con

$$\lim_{x\to \frac{\pi}{2}^-}\tan x=+\infty, \qquad \lim_{x\to \frac{\pi}{2}^+}\tan x=-\infty.$$

La funzione passa dunque da valori positivi molto grandi (per $x$ poco minore di $\dfrac{\pi}{2}$) a valori negativi molto grandi (per $x$ poco maggiore di $\dfrac{\pi}{2}$) "saltando" attraverso l'infinito, senza mai transitare per il valore $0$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="130.853" height="541.276" viewBox="-72 -72 98.139 405.957"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 128.634h84.958"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M11.008 126.234c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-95.544" y="128.634" stroke="none" font-family="cmmi10" font-size="10" transform="translate(112.365 2.153)">x</text><path fill="none" d="M-62.04 316.422V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-64.44-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-95.544" y="128.634" stroke="none" font-family="cmmi10" font-size="10" transform="translate(30.872 -193.265)">y</text><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-28.503 316.422V-59.154"/><g fill="gray" stroke="gray"><g fill="gray" stroke="none"><text x="-94.344" y="124.696" font-family="cmmi7" font-size="7" transform="translate(63.377 198.272)">¼</text><path d="M-30.967 324.206h4.927v.4h-4.927z"/><text x="-93.873" y="132.082" font-family="cmr7" font-size="7" transform="translate(63.377 198.272)">2</text></g></g><g stroke="none"><text x="-94.344" y="124.696" font-family="cmmi7" font-size="7" transform="translate(29.84 14.752)">¼</text><path d="M-64.504 140.686h4.927v.4h-4.927z"/><text x="-93.873" y="132.082" font-family="cmr7" font-size="7" transform="translate(29.84 14.752)">4</text></g><g stroke="none"><text x="-94.344" y="124.696" font-family="cmr7" font-size="7" transform="translate(94.895 18.383)">3</text><text x="-90.358" y="124.696" font-family="cmmi7" font-size="7" transform="translate(94.895 18.383)">¼</text><path d="M.551 144.317h8.914v.4H.551z"/><text x="-91.88" y="132.082" font-family="cmr7" font-size="7" transform="translate(94.895 18.383)">4</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-62.04 85.988.39-.788.391-.803.39-.819.392-.833.39-.853.391-.867.39-.89.392-.902.39-.921.391-.946.39-.968.391-.987.391-1.011.39-1.033.392-1.057.39-1.086.391-1.113.39-1.14.392-1.166.39-1.2.391-1.236.39-1.264.392-1.304.39-1.337.391-1.378.39-1.423.392-1.46.39-1.513.391-1.546.39-1.603.392-1.664.39-1.72.391-1.774.39-1.838.391-1.905.391-1.981.39-2.05.392-2.133.39-2.213.391-2.312.39-2.402.392-2.506.39-2.62.391-2.74.39-2.86.392-3.004.39-3.145.391-3.308.39-3.472.392-3.668.39-3.868.391-4.088.39-4.336.392-4.596.39-4.887.391-5.205.39-5.556.391-5.943.391-6.365M-18.039 299.206l.39-6.378.39-5.964.39-5.565.39-5.216.39-4.89.39-4.61.391-4.326.39-4.096.39-3.885.39-3.671.39-3.481.39-3.31.39-3.156.39-3.004.39-2.867.39-2.74.39-2.628.39-2.508.391-2.408.39-2.312.39-2.224.39-2.134.39-2.052.39-1.981.39-1.908.39-1.844.39-1.776.39-1.724.39-1.659.391-1.613.39-1.55.39-1.511.39-1.465.39-1.418.39-1.386.39-1.337.39-1.307.39-1.266.39-1.235.39-1.202.391-1.17.39-1.143.39-1.11.39-1.086.39-1.064.39-1.033.39-1.013.39-.987.39-.965.39-.95.39-.92.39-.907.391-.889.39-.869.39-.852.39-.835.39-.818.39-.805.39-.79"/><path stroke="none" d="M-60.09 85.955a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><g stroke="none"><text x="-95.544" y="128.634" font-family="cmr10" font-size="10" transform="translate(37.036 -49.66)">(</text><text x="-90.455" y="124.696" font-family="cmmi7" font-size="7" transform="translate(37.036 -49.66)">¼</text><path d="M-53.419 76.274h4.927v.4h-4.927z"/><text x="-89.984" y="132.082" font-family="cmr7" font-size="7" transform="translate(37.036 -49.66)">4</text><text x="-84.327" y="128.634" font-family="cmmi10" font-size="10" transform="translate(37.036 -49.66)">;</text><text x="-79.883" y="128.634" font-family="cmr10" font-size="10" transform="translate(37.036 -49.66)">1)</text></g><path stroke="none" d="M6.958 171.313a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0m-1.95 0"/><g stroke="none"><text x="-95.544" y="128.634" font-family="cmr10" font-size="10" transform="translate(60.705 54.66)">(</text><text x="-90.455" y="124.696" font-family="cmr7" font-size="7" transform="translate(60.705 54.66)">3</text><text x="-86.469" y="124.696" font-family="cmmi7" font-size="7" transform="translate(60.705 54.66)">¼</text><path d="M-29.75 180.594h8.914v.4h-8.914z"/><text x="-87.991" y="132.082" font-family="cmr7" font-size="7" transform="translate(60.705 54.66)">4</text><text x="-80.341" y="128.634" font-family="cmmi10" font-size="10" transform="translate(60.705 54.66)">;</text><text x="-75.897" y="128.634" font-family="cmsy10" font-size="10" transform="translate(60.705 54.66)">¡</text><text x="-68.119" y="128.634" font-family="cmr10" font-size="10" transform="translate(60.705 54.66)">1)</text></g></g></svg>
</figure>

## Conclusione

Sì, la situazione descritta è possibile e non contraddice alcun teorema. Il cambiamento di segno di $f$ agli estremi di $I$ non garantisce l'esistenza di uno zero interno proprio perché **manca l'ipotesi di continuità**: $\tan x$ è discontinua in $x=\dfrac{\pi}{2}\in I$. Il teorema di Bolzano fornisce una condizione **sufficiente** (continuità $+$ valori di segno opposto agli estremi) per l'esistenza di uno zero; venuta meno la continuità, la sua conclusione non è più assicurata.

*Fonte:* [📄 PDF p.10](https://drive.google.com/file/d/1nnd4Nds7GFPZVCB9i0VVpSMDlBPee3x7/view)

#maturita/soluzione #area/analisi #cluster/derivate_massimi_e_minimi
