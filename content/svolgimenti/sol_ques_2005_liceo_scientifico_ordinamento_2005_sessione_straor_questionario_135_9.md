

**Quesito:** [[Quesiti/ques_2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135_9|2005 Ordinamento Straordinaria — Questionario — Quesito 9]] · **Prova:** [[Prove/2005_liceo_scientifico_ordinamento_2005_sessione_straor_questionario_135|2005 Ordinamento Straordinaria — Questionario]]

Si deve dimostrare la formula (relazione di Stifel)
$$\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1},$$
dove $n$ e $k$ sono numeri naturali tali che $0 < k < n$, ed enunciare la regola del triangolo di Tartaglia che essa esprime.

## a) Dimostrazione della formula

Ricordiamo la definizione di coefficiente binomiale:
$$\binom{n}{k} = \frac{n!}{k!\,(n-k)!}.$$

Sviluppiamo la somma a secondo membro:
$$\binom{n-1}{k} + \binom{n-1}{k-1} = \frac{(n-1)!}{k!\,(n-1-k)!} + \frac{(n-1)!}{(k-1)!\,(n-k)!}.$$

Per sommare le due frazioni conviene ridurle al denominatore comune $k!\,(n-k)!$. Osserviamo che
$$(n-k)! = (n-k)\,(n-1-k)! \qquad\text{e}\qquad k! = k\,(k-1)!,$$
quindi moltiplicando numeratore e denominatore del primo addendo per $(n-k)$ e quelli del secondo per $k$ otteniamo:
$$\frac{(n-1)!\,(n-k)}{k!\,(n-k)!} + \frac{(n-1)!\,k}{k!\,(n-k)!} = \frac{(n-1)!\,\big[(n-k) + k\big]}{k!\,(n-k)!}.$$

Poiché $(n-k) + k = n$, si ha
$$\frac{(n-1)!\,n}{k!\,(n-k)!} = \frac{n!}{k!\,(n-k)!} = \binom{n}{k},$$
dove si è usato $n\,(n-1)! = n!$. La formula è così dimostrata.

## b) La regola del triangolo di Tartaglia

Il triangolo di Tartaglia è un triangolo isoscele di numeri disposti su righe successive: nel vertice (riga $0$) e agli estremi di ogni riga compare sempre il numero $1$; ogni altro elemento interno si ottiene sommando i due numeri che gli stanno immediatamente sopra, a sinistra e a destra.

Se si indica con $\binom{n}{k}$ l'elemento di posto $k$ nella riga $n$, la formula dimostrata
$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$
è proprio la traduzione algebrica di questa regola: l'elemento della riga $n$ è la somma dei due elementi soprastanti della riga $n-1$. Gli elementi di ciascuna riga sono i coefficienti dello sviluppo del binomio di Newton $(a+b)^n$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="167.303" height="169.943" viewBox="-72 -72 125.477 127.457"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 3.222)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-16.726 31.675)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(11.726 31.675)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-30.953 60.128)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 60.128)">2</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(25.953 60.128)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-45.18 88.58)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-16.726 88.58)">3</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(11.726 88.58)">3</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(40.18 88.58)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-59.405 117.033)">1</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-30.953 117.033)">4</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 117.033)">6</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(25.953 117.033)">4</text><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(54.405 117.033)">1</text><g stroke="#00f"><path fill="none" d="M-16.867 19.643a6.891 6.891 0 1 0-13.782 0 6.891 6.891 0 0 0 13.782 0Zm-6.89 0"/><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-16.726 88.58)">3</text></g><g stroke="#00f"><path fill="none" d="M11.586 19.643a6.891 6.891 0 1 0-13.782 0 6.891 6.891 0 0 0 13.782 0Zm-6.891 0"/><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(11.726 88.58)">3</text></g><g stroke="red"><path fill="none" d="M-2.64 48.096a6.891 6.891 0 1 0-13.783 0 6.891 6.891 0 0 0 13.783 0Zm-6.892 0"/><text x="-9.532" y="-65.715" stroke="none" font-family="cmr10" font-size="10" transform="translate(-2.5 117.033)">6</text></g><g fill="#00f" stroke="#00f"><path fill="none" d="m-20.912 25.334 8.916 16.719"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width=".399988" d="M-10.763 39.265c-1.092 1.013-1.293 2.08-1.139 2.964-.648-.62-1.647-1.048-3.096-.706"/></g><g fill="#00f" stroke="#00f"><path fill="none" d="m1.85 25.334-8.917 16.719"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width=".399988" d="M-4.065 41.523c-1.45-.342-2.448.085-3.096.706.154-.884-.047-1.951-1.139-2.964"/></g></g></svg>
</figure>

Nell'esempio in figura, l'elemento $6$ della riga $4$ si ottiene come $3 + 3$, somma dei due elementi soprastanti della riga $3$.

*Fonte:* [📄 PDF p.140](https://drive.google.com/file/d/1O4FzCBuKW40z02XpBNhWhJbCSuFY3mYz/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
