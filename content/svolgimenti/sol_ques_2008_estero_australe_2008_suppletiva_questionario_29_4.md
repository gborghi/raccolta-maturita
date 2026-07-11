

**Quesito:** [[Quesiti/ques_2008_estero_australe_2008_suppletiva_questionario_29_4|2008 Estero Australe Suppletiva — Questionario — Quesito 4]] · **Prova:** [[Prove/2008_estero_australe_2008_suppletiva_questionario_29|2008 Estero Australe Suppletiva — Questionario]]

Si enunci il teorema del valor medio (o di Lagrange), se ne illustri il legame con il teorema di Rolle e se ne mostrino le implicazioni sulla crescenza o decrescenza delle funzioni.

## a) Enunciato del teorema di Lagrange

**Teorema (del valor medio, o di Lagrange).** Sia $f$ una funzione continua nell'intervallo chiuso e limitato $[a,b]$ e derivabile nell'intervallo aperto $(a,b)$. Allora esiste almeno un punto $c \in (a,b)$ tale che

$$f'(c) = \frac{f(b) - f(a)}{b - a}.$$

**Interpretazione geometrica.** Il rapporto $\dfrac{f(b)-f(a)}{b-a}$ è il coefficiente angolare della retta secante che passa per i punti $A=(a,\,f(a))$ e $B=(b,\,f(b))$ del grafico. Il teorema afferma quindi che esiste almeno un punto interno $c$ in cui la retta tangente al grafico è **parallela** alla secante $AB$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="371.093" height="286.287" viewBox="-72 -72 278.32 214.715"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><g fill="gray" stroke="gray"><path fill="none" d="M-66.306 128.635h259.375"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M191.189 126.235c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-66.306" y="128.635" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(263.308 2.153)">x</text></g><g fill="gray" stroke="gray"><path fill="none" d="M-66.306 128.635v-187.39"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="128.635" fill="gray" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -193.267)">y</text></g><path fill="none" stroke="#00f" stroke-width=".8" d="m-50.657 53.989 3.766-2.76 3.766-2.706 3.766-2.65 3.766-2.597 3.767-2.542 3.766-2.489 3.766-2.433 3.766-2.38 3.766-2.323 3.766-2.27 3.766-2.217 3.767-2.162 3.766-2.108L2.069 20.3l3.766-1.997L9.6 16.358l3.766-1.89 3.766-1.836 3.766-1.781 3.767-1.727 3.766-1.672 3.766-1.617 3.766-1.563 3.766-1.51 3.766-1.454 3.766-1.4L51.03-1.44l3.766-1.292 3.766-1.236 3.766-1.183 3.766-1.129 3.766-1.073 3.766-1.02 3.766-.966 3.767-.912 3.766-.854 3.766-.802 3.766-.748 3.766-.694 3.766-.64 3.766-.585 3.767-.53 3.766-.474 3.766-.421 3.766-.368 3.766-.313 3.766-.26 3.766-.204 3.767-.149 3.766-.093 3.766-.041 3.766.013 3.766.068 3.766.122 3.766.176 3.767.23 3.766.289 3.766.339 3.766.394"/><g fill="#00f" stroke="#00f"><text x="-66.306" y="128.635" fill="#00f" stroke="none" font-family="cmmi10" font-size="10" transform="translate(244.27 -135.212)">f</text></g><path fill="none" stroke="red" stroke-width=".8" d="m-35.008 42.878 187.79-60.093"/><path fill="none" stroke="#008c00" stroke-width=".8" d="M-3.71 15.961 121.483-24.1"/><path stroke="none" d="M-32.808 42.878a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0M154.981-17.215a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0M61.087-4.07a2.2 2.2 0 1 0-4.4 0 2.2 2.2 0 0 0 4.4 0m-2.2 0"/><path fill="none" stroke="gray" stroke-dasharray="3.0,3.0" d="M-35.008 128.635V42.878M58.887 128.635V-4.069M152.781 128.635v-145.85"/><text x="-66.306" y="128.635" stroke="none" font-family="cmmi10" font-size="10" transform="translate(28.655 7.839)">a</text><text x="-66.306" y="128.635" stroke="none" font-family="cmmi10" font-size="10" transform="translate(123.029 7.839)">c</text><text x="-66.306" y="128.635" stroke="none" font-family="cmmi10" font-size="10" transform="translate(216.942 10.477)">b</text></g></svg>
</figure>

## b) Legame con il teorema di Rolle

Il **teorema di Rolle** si ottiene dal teorema di Lagrange come caso particolare, aggiungendo alle ipotesi la condizione $f(a) = f(b)$. In tal caso il secondo membro della tesi di Lagrange si annulla,

$$\frac{f(b) - f(a)}{b - a} = 0,$$

e quindi esiste almeno un punto $c \in (a,b)$ in cui $f'(c) = 0$: è esattamente l'enunciato di Rolle.

Viceversa, il teorema di Lagrange si **dimostra** applicando il teorema di Rolle a una opportuna funzione ausiliaria. Si considera infatti la differenza tra $f$ e la retta secante,

$$g(x) = f(x) - \left[\, f(a) + \frac{f(b) - f(a)}{b - a}\,(x - a)\right].$$

La funzione $g$ è continua su $[a,b]$, derivabile su $(a,b)$ e verifica $g(a) = g(b) = 0$: per il teorema di Rolle esiste allora $c \in (a,b)$ con $g'(c) = 0$. Poiché

$$g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a},$$

la condizione $g'(c) = 0$ equivale proprio a $f'(c) = \dfrac{f(b)-f(a)}{b-a}$, cioè alla tesi di Lagrange. I due teoremi sono dunque strettamente legati: Rolle è il caso particolare di Lagrange e, allo stesso tempo, ne costituisce lo strumento dimostrativo.

## c) Implicazioni sulla crescenza e decrescenza

Il teorema di Lagrange fornisce il legame tra il **segno della derivata** e la **monotonia** della funzione. Sia $f$ continua su un intervallo $I$ e derivabile al suo interno.

- Se $f'(x) > 0$ per ogni $x$ interno a $I$, allora $f$ è **crescente** su $I$.
- Se $f'(x) < 0$ per ogni $x$ interno a $I$, allora $f$ è **decrescente** su $I$.

**Dimostrazione.** Presi due punti qualsiasi $x_1 < x_2$ in $I$, si applica il teorema di Lagrange all'intervallo $[x_1, x_2]$: esiste $c \in (x_1, x_2)$ tale che

$$f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1).$$

Poiché $x_2 - x_1 > 0$, il segno della differenza $f(x_2) - f(x_1)$ coincide con il segno di $f'(c)$. Se $f' > 0$ ovunque, allora $f'(c) > 0$ e quindi $f(x_2) > f(x_1)$: la funzione è crescente. Se $f' < 0$ ovunque, allora $f(x_2) < f(x_1)$: la funzione è decrescente. $\Rightarrow$ Lo studio del segno di $f'$ permette di individuare gli intervalli di crescenza e di decrescenza di $f$, ed è per questo alla base dello studio del grafico di una funzione.

*Fonte:* [📄 PDF p.30](https://drive.google.com/file/d/1c1FHjNiMGKITLO7iqXNPP_w68IHubjxH/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
