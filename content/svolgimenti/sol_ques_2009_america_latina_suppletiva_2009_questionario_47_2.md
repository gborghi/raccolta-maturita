

**Quesito:** [[Quesiti/ques_2009_america_latina_suppletiva_2009_questionario_47_2|2009 America Latina Suppletiva — Questionario — Quesito 2]] · **Prova:** [[Prove/2009_america_latina_suppletiva_2009_questionario_47|2009 America Latina Suppletiva — Questionario]]

Si enuncia il teorema del valor medio (o di Lagrange), se ne illustra il legame con il teorema di Rolle e se ne discutono le implicazioni per lo studio della crescenza e della decrescenza di una funzione.

## a) Enunciato del teorema di Lagrange

Sia $f$ una funzione:

- continua sull'intervallo chiuso e limitato $[a,b]$,
- derivabile sull'intervallo aperto $(a,b)$.

Allora esiste almeno un punto $c \in (a,b)$ tale che

$$f'(c) = \frac{f(b)-f(a)}{b-a}.$$

**Significato geometrico.** Detti $A=(a,\,f(a))$ e $B=(b,\,f(b))$ gli estremi dell'arco di grafico, il rapporto $\dfrac{f(b)-f(a)}{b-a}$ è il coefficiente angolare della retta secante $AB$, mentre $f'(c)$ è il coefficiente angolare della tangente al grafico nel punto di ascissa $c$. Il teorema afferma dunque che esiste almeno un punto interno all'arco $AB$ in cui la tangente è parallela alla corda $AB$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="246.562" height="186.133" viewBox="-72 -72 184.921 139.6"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 53.52H99.67"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M97.79 51.12c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-62.68" y="53.52" stroke="none" font-family="cmmi10" font-size="10" transform="translate(166.283 2.153)">x</text><path fill="none" d="M-62.68 62.91V-58.755"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-65.08-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-62.68" y="53.52" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -118.151)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-43.901 25.351 1.584-1.988 1.585-1.988 1.584-1.981 1.585-1.972 1.585-1.959 1.584-1.944 1.585-1.925 1.584-1.904 1.585-1.876 1.584-1.853 1.585-1.82 1.585-1.786 1.584-1.75 1.585-1.713 1.584-1.667 1.585-1.625 1.585-1.576 1.584-1.531 1.585-1.475 1.584-1.422 1.585-1.364 1.585-1.308 1.584-1.246 1.585-1.183 1.584-1.12 1.585-1.051 1.584-.983 1.585-.916 1.585-.845 1.584-.77 1.585-.698 1.584-.623 1.585-.547 1.585-.471 1.584-.394 1.585-.317 1.584-.235 1.585-.158 1.584-.081h1.585l1.585.08 1.584.157 1.585.236 1.584.316 1.585.393 1.585.469 1.584.546 1.585.625 1.584.697 1.585.77 1.584.843 1.585.915 1.585.983 1.584 1.052 1.585 1.118 1.584 1.183 1.585 1.245 1.585 1.307 1.584 1.364 1.585 1.422 1.584 1.475 1.585 1.53 1.585 1.576 1.584 1.625 1.585 1.667L60.68.593l1.585 1.748 1.584 1.787 1.585 1.819 1.585 1.852 1.584 1.877 1.585 1.904 1.584 1.924 1.585 1.944 1.585 1.959 1.584 1.972 1.585 1.98 1.584 1.989 1.585 1.99"/><path stroke="none" d="M-42.139 25.348a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="-62.68" y="53.52" stroke="none" font-family="cmmi10" font-size="10" transform="translate(7.749 -17.806)">A</text><path stroke="none" d="M83.071 25.348a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><text x="-62.68" y="53.52" stroke="none" font-family="cmmi10" font-size="10" transform="translate(147.524 -17.806)">B</text><path fill="none" stroke-dasharray="3.0,3.0" d="M-43.899 25.348h125.21"/><path fill="red" stroke="none" d="M20.466-24.737a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><path fill="none" stroke="red" stroke-width=".8" d="M-18.863-24.726h75.116"/><g stroke="none" font-size="10"><text x="-62.68" y="53.52" font-family="cmr10" transform="translate(52.973 -83.734)">tangen</text><text x="-33.514" y="53.52" font-family="cmr10" transform="translate(52.973 -83.734)">te</text><text x="-21.847" y="53.52" font-family="cmr10" transform="translate(52.973 -83.734)">in</text><text x="-10.18" y="53.52" font-family="cmmi10" transform="translate(52.973 -83.734)">c</text></g><path fill="none" stroke-dasharray="0.4,2.0" d="m-43.901 53.52.002-28.172M81.291 53.52l.02-28.172M18.695 53.52l.011-78.257"/><text x="-62.68" y="53.52" stroke="none" font-family="cmmi10" font-size="10" transform="translate(16.136 7.839)">a</text><text x="-62.68" y="53.52" stroke="none" font-family="cmmi10" font-size="10" transform="translate(141.826 10.477)">b</text><text x="-62.68" y="53.52" stroke="none" font-family="cmmi10" font-size="10" transform="translate(79.212 7.839)">c</text></g></svg>
</figure>

## b) Legame con il teorema di Rolle

Il teorema di Rolle è il **caso particolare** del teorema di Lagrange che si ottiene quando gli estremi hanno la stessa ordinata, cioè quando $f(a)=f(b)$. In tal caso il coefficiente angolare della corda è nullo,

$$\frac{f(b)-f(a)}{b-a}=0,$$

e la tesi di Lagrange diventa $f'(c)=0$: esiste almeno un punto interno in cui la tangente è orizzontale. Questo è esattamente l'enunciato di Rolle.

Viceversa, il teorema di Lagrange si **dimostra a partire da quello di Rolle**. Si introduce la funzione ausiliaria

$$g(x) = f(x) - \frac{f(b)-f(a)}{b-a}\,(x-a),$$

ottenuta sottraendo a $f$ la retta secante $AB$. La $g$ è continua su $[a,b]$ e derivabile su $(a,b)$ (somma di $f$ e di una funzione lineare) e verifica

$$g(a)=f(a), \qquad g(b)=f(b)-\big(f(b)-f(a)\big)=f(a),$$

quindi $g(a)=g(b)$. Per il teorema di Rolle esiste allora $c\in(a,b)$ con $g'(c)=0$. Ma

$$g'(x) = f'(x) - \frac{f(b)-f(a)}{b-a},$$

perciò $g'(c)=0$ equivale a

$$f'(c) = \frac{f(b)-f(a)}{b-a},$$

che è la tesi di Lagrange. Rolle e Lagrange sono dunque **logicamente equivalenti**: Rolle è un caso particolare di Lagrange e Lagrange discende da Rolle.

## c) Implicazioni sulla crescenza e decrescenza

Il teorema di Lagrange è lo strumento che collega il **segno della derivata** all'andamento **crescente o decrescente** della funzione.

Sia $f$ continua su un intervallo $I$ e derivabile al suo interno, e siano $x_1, x_2 \in I$ con $x_1 < x_2$. Applicando il teorema di Lagrange a $f$ sull'intervallo $[x_1,x_2]$, esiste $c \in (x_1,x_2)$ tale che

$$f(x_2)-f(x_1) = f'(c)\,(x_2-x_1).$$

Poiché $x_2-x_1>0$, il segno della differenza $f(x_2)-f(x_1)$ coincide con il segno di $f'(c)$. Ne segue:

- se $f'(x) > 0$ per ogni $x$ interno a $I$, allora $f(x_2)-f(x_1)>0$, cioè $f(x_2)>f(x_1)$: la funzione è **strettamente crescente** su $I$;
- se $f'(x) < 0$ per ogni $x$ interno a $I$, allora $f(x_2)-f(x_1)<0$, cioè $f(x_2)<f(x_1)$: la funzione è **strettamente decrescente** su $I$;
- se $f'(x) = 0$ per ogni $x$ interno a $I$, allora $f(x_2)=f(x_1)$ per ogni coppia di punti: la funzione è **costante** su $I$.

È proprio grazie a questo criterio che, nello studio di una funzione, si determinano gli intervalli di monotonia analizzando il segno di $f'$, e i punti in cui $f'$ si annulla cambiando segno risultano punti di massimo o di minimo relativo.

*Fonte:* [📄 PDF p.47](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
