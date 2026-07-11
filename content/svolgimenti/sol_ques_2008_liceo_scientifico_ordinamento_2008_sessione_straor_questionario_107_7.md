

**Problema:** [[Quesiti/ques_2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107_7|2008 Ordinamento Straordinaria — Questionario — Quesito 7]] · **Prova:** [[Prove/2008_liceo_scientifico_ordinamento_2008_sessione_straor_questionario_107|2008 Ordinamento Straordinaria — Questionario]]

Si provi che alla funzione $f(x)=\tan x+\sin x$ nell'intervallo $0\le x\le\pi$ non è applicabile il teorema di Rolle.

## Richiamo delle ipotesi del teorema di Rolle

Il teorema di Rolle si applica a una funzione $f$ che soddisfi contemporaneamente le tre ipotesi seguenti:

$$\begin{cases} f \text{ continua su } [a,b] \\ f \text{ derivabile su } (a,b) \\ f(a)=f(b) \end{cases}$$

Solo se tutte e tre sono verificate il teorema garantisce l'esistenza di un punto $c\in(a,b)$ in cui $f'(c)=0$. Per mostrare che il teorema non è applicabile è sufficiente esibire una sola ipotesi non soddisfatta.

## Verifica sull'intervallo $[0,\pi]$

Qui $a=0$, $b=\pi$ e $f(x)=\tan x+\sin x$.

**Valori agli estremi.** Si ha
$$f(0)=\tan 0+\sin 0=0,\qquad f(\pi)=\tan\pi+\sin\pi=0.$$
Dunque $f(0)=f(\pi)$: la terza ipotesi è verificata.

**Continuità.** La funzione $\tan x=\dfrac{\sin x}{\cos x}$ non è definita nei punti in cui $\cos x=0$. Nell'intervallo $[0,\pi]$ ciò accade in
$$x=\frac{\pi}{2},$$
che è un punto **interno** all'intervallo. In tale punto
$$\lim_{x\to \frac{\pi}{2}^{-}}\tan x=+\infty,\qquad \lim_{x\to \frac{\pi}{2}^{+}}\tan x=-\infty,$$
quindi $x=\dfrac{\pi}{2}$ è un asintoto verticale: $f$ non è nemmeno definita in quel punto e presenta lì una discontinuità di seconda specie.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="178.654" height="330.736" viewBox="-72 -72 133.991 248.052"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-69.794 72.298H48.74"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M46.86 69.898c.38 1.44 1.226 2.12 2.08 2.4-.854.28-1.7.96-2.08 2.4"/><text x="-60.404" y="72.298" stroke="none" font-family="cmmi10" font-size="10" transform="translate(113.077 2.153)">x</text><path fill="none" d="M-60.404 175.582V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-62.804-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-60.404" y="72.298" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -136.93)">y</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-11.24 175.582V-59.154"/><g stroke="none"><text x="-60.404" y="72.298" font-family="cmmi10" font-size="10" transform="translate(52.696 -132.174)">x</text><text x="-51.911" y="72.298" font-family="cmr10" font-size="10" transform="translate(52.696 -132.174)">=</text><text x="-40.156" y="68.361" font-family="cmmi7" font-size="7" transform="translate(52.696 -132.174)">¼</text><path d="M12.54-62.576h4.927v.4H12.54z"/><text x="-39.685" y="75.747" font-family="cmr7" font-size="7" transform="translate(52.696 -132.174)">2</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-60.404 72.298.69-1.378.69-1.38.689-1.38.69-1.38.689-1.383.69-1.385.69-1.387.689-1.388.69-1.393.69-1.395.689-1.398.69-1.404.689-1.409.69-1.413.69-1.42.689-1.427.69-1.433.689-1.443.69-1.45.69-1.463.689-1.472.69-1.484.69-1.499.689-1.513.69-1.528.689-1.548.69-1.565.69-1.587.689-1.612.69-1.637.689-1.666.69-1.699.69-1.731.689-1.772.69-1.812.69-1.86.689-1.912.69-1.97.689-2.034.69-2.105.69-2.182.689-2.278.69-2.37.689-2.484.69-2.613.69-2.753.689-2.912.69-3.094.689-3.314.69-3.552.69-3.832.689-4.16.69-4.546.69-4.992.689-5.527.69-6.17.689-6.955.69-7.925.69-9.121M-2.502 151.392l.663-7.946.663-6.889.662-6.019.663-5.31.663-4.717.663-4.21.663-3.777.663-3.407.663-3.083.662-2.8.663-2.55.663-2.322.663-2.134.663-1.957.663-1.798.663-1.658.663-1.53.662-1.41.663-1.302.663-1.205.663-1.117.663-1.03.663-.954.663-.886.663-.818.662-.758.663-.701.663-.647.663-.599.663-.554.663-.509.663-.47.662-.432.663-.397.663-.363.663-.332.663-.303.663-.276.663-.25.663-.226.662-.204.663-.184.663-.162.663-.145.663-.127.663-.113.663-.097.663-.085.662-.071.663-.06.663-.05.663-.04.663-.034.663-.025.663-.02.663-.013.662-.009.663-.005.663-.003"/><path stroke="none" d="M-58.754 72.298a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/><text x="-60.404" y="72.298" stroke="none" font-family="cmr10" font-size="10" transform="translate(-8.533 9.977)">0</text><text x="-60.404" y="72.298" stroke="none" font-family="cmmi10" font-size="10" transform="translate(95.297 7.839)">¼</text><path stroke="none" d="M39.572 72.298a1.65 1.65 0 1 0-3.3 0 1.65 1.65 0 0 0 3.3 0m-1.65 0"/></g></svg>
</figure>

## Conclusione

La funzione $f(x)=\tan x+\sin x$ **non è continua** sull'intervallo chiuso e limitato $[0,\pi]$, perché nel punto interno $x=\dfrac{\pi}{2}$ presenta un asintoto verticale. Viene quindi a mancare la prima ipotesi del teorema di Rolle (continuità sull'intervallo chiuso). Di conseguenza, pur essendo verificata la condizione $f(0)=f(\pi)$, il teorema di Rolle **non è applicabile** a $f$ su $[0,\pi]$.

*Fonte:* [📄 PDF p.110](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
