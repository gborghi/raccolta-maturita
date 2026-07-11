

**Quesito:** [[Quesiti/ques_2009_sessione_ordinaria_2009_prova_146_6|2009 Sessione Ordinaria PNI — Prova — Quesito 6]] · **Prova:** [[Prove/2009_sessione_ordinaria_2009_prova_146|2009 Sessione Ordinaria PNI — Prova]]

**Quesito.** Con l'aiuto di una calcolatrice, si applichi il procedimento iterativo di Newton all'equazione $\sin x = 0$, con punto iniziale $x_0 = 3$. Cosa si ottiene dopo due iterazioni?

## Impostazione del metodo

Il metodo di Newton (o delle tangenti) per approssimare una radice dell'equazione $f(x)=0$ genera la successione

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}.$$

Nel nostro caso $f(x) = \sin x$, quindi $f'(x) = \cos x$ e la formula iterativa diventa

$$x_{n+1} = x_n - \frac{\sin x_n}{\cos x_n} = x_n - \tan x_n.$$

Geometricamente, a ogni passo si sostituisce la curva $y=\sin x$ con la sua tangente nel punto di ascissa $x_n$ e si assume come nuova approssimazione l'ascissa in cui tale tangente incontra l'asse $x$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="321.638" height="187.602" viewBox="-72 -72 241.229 140.701"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 9.132h209.01"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M135.06 6.732c.38 1.44 1.228 2.12 2.08 2.4-.852.28-1.7.96-2.08 2.4"/><text x="-240.511" y="9.132" stroke="none" font-family="cmmi10" font-size="10" transform="translate(381.384 2.153)">x</text><path fill="none" d="M-58.413 67.176v-125.93"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-60.813-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-240.511" y="9.132" stroke="none" font-family="cmmi10" font-size="10" transform="translate(179.467 -73.764)">y</text><g fill="#00f" stroke="#00f" stroke-width=".8"><path fill="none" d="m-58.413-52.956 3.085.998 3.086 1.069 3.086 1.137 3.085 1.205 3.086 1.271 3.085 1.336 3.086 1.4 3.086 1.46 3.085 1.522 3.086 1.577 3.086 1.637 3.085 1.69 3.086 1.742 3.085 1.795 3.086 1.842 3.086 1.889 3.085 1.932 3.086 1.974 3.086 2.014 3.085 2.053 3.086 2.086 3.085 2.12 3.086 2.149 3.086 2.178 3.085 2.202 3.086 2.226 3.085 2.247 3.086 2.262 3.086 2.28L34.155.626l3.086 2.301 3.086 2.307 3.085 2.312 3.086 2.314 3.085 2.312 3.086 2.31 3.086 2.304 3.085 2.295 3.086 2.282 3.086 2.27 3.085 2.252 3.086 2.233 3.085 2.213 3.086 2.187 3.086 2.16 3.085 2.132 3.086 2.099 3.085 2.064 3.086 2.03 3.086 1.989 3.085 1.947 3.086 1.906 3.086 1.859 3.085 1.81 3.086 1.764 3.085 1.708 3.086 1.657 3.086 1.6 3.085 1.544"/><g fill="#00f" stroke="none" font-size="10"><text x="-240.511" y="9.132" font-family="cmmi10" transform="translate(367.882 54.022)">y</text><text x="-232.471" y="9.132" font-family="cmr10" transform="translate(367.882 54.022)">=</text><text x="-221.916" y="9.132" font-family="cmr10" transform="translate(367.882 54.022)">sin</text><text x="-207.971" y="9.132" font-family="cmmi10" transform="translate(367.882 54.022)">x</text></g></g><path fill="none" stroke="red" stroke-width=".8" d="m18.979-10.642 36.419 27.04"/><path stroke="none" d="M33.755-.503c0-.464-.501-.84-1.12-.84-.618 0-1.12.376-1.12.84s.502.84 1.12.84 1.12-.376 1.12-.84m-1.12 0"/><g stroke="none"><text x="-240.511" y="9.132" font-family="cmmi10" font-size="10" transform="translate(276.68 -14.668)">P</text><text x="-234.09" y="10.632" font-family="cmr7" font-size="7" transform="translate(276.68 -14.668)">0</text></g><path fill="none" stroke-dasharray="3.0,3.0" d="M32.635 9.132V-.503"/><path stroke="none" d="M33.595 9.132c0-.397-.43-.72-.96-.72s-.96.323-.96.72c0 .398.43.72.96.72s.96-.322.96-.72m-.96 0"/><g stroke="none"><text x="-240.511" y="9.132" font-family="cmmi10" font-size="10" transform="translate(258.879 9.977)">x</text><text x="-234.795" y="10.632" font-family="cmr7" font-size="7" transform="translate(258.879 9.977)">0</text><text x="-227.531" y="9.132" font-family="cmr10" font-size="10" transform="translate(258.879 9.977)">=</text><text x="-216.976" y="9.132" font-family="cmr10" font-size="10" transform="translate(258.879 9.977)">3</text></g><path stroke="none" d="M46.57 9.132c0-.397-.43-.72-.96-.72s-.96.323-.96.72c0 .398.43.72.96.72s.96-.322.96-.72m-.96 0"/><g stroke="none"><text x="-240.511" y="9.132" font-family="cmmi10" font-size="10" transform="translate(291.247 10.413)">x</text><text x="-234.795" y="10.632" font-family="cmr7" font-size="7" transform="translate(291.247 10.413)">1</text><text x="-227.531" y="9.132" font-family="cmsy10" font-size="10" transform="translate(291.247 10.413)">¼</text><text x="-216.976" y="9.132" font-family="cmmi10" font-size="10" transform="translate(291.247 10.413)">¼</text></g></g></svg>
</figure>

## Prima iterazione

Partendo da $x_0 = 3$ (l'angolo è espresso in radianti), si calcola con la calcolatrice

$$\sin 3 \approx 0{,}141120, \qquad \cos 3 \approx -0{,}989992,$$

da cui $\tan 3 \approx -0{,}142547$. Perciò

$$x_1 = x_0 - \tan x_0 = 3 - (-0{,}142547) = 3{,}142546543\ldots$$

## Seconda iterazione

Ripetendo il procedimento a partire da $x_1$:

$$\sin x_1 \approx -0{,}000000, \qquad \tan x_1 \approx 0{,}000000889,$$

e quindi

$$x_2 = x_1 - \tan x_1 = 3{,}142546543 - 0{,}000000889 = 3{,}141592653\ldots$$

## Conclusione

Confrontando con il valore

$$\pi = 3{,}141592653589\ldots$$

si vede che dopo due sole iterazioni si ottiene

$$x_2 = 3{,}141592653\ldots \approx \pi,$$

un'approssimazione di $\pi$ corretta fino alla nona cifra decimale. Il risultato non sorprende: le radici di $\sin x = 0$ sono i multipli interi di $\pi$, e il metodo di Newton, innescato in $x_0 = 3$, converge (molto rapidamente, con ordine quadratico) alla radice più vicina, cioè $x = \pi$. Il procedimento fornisce dunque un modo efficiente per calcolare un gran numero di cifre di $\pi$.

*Fonte:* [📄 PDF p.146](https://drive.google.com/file/d/1Ioge1QbGS_AhQasT2TXif3wczyZL_UAP/view)

#maturita/soluzione #area/analisi #cluster/calcolo_integrale_e_aree
