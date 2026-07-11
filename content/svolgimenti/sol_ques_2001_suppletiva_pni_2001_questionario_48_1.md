

**Quesito:** [[Quesiti/ques_2001_suppletiva_pni_2001_questionario_48_1|2001 Suppletiva PNI — Questionario — Quesito 1]] · **Prova:** [[Prove/2001_suppletiva_pni_2001_questionario_48|2001 Suppletiva PNI — Questionario]]

Si chiede di enunciare il **teorema del valor medio** (o di **Lagrange**), di illustrarne il legame con il **teorema di Rolle** e di discuterne le implicazioni nella determinazione della crescenza o decrescenza di una funzione.

## Il teorema di Lagrange

**Enunciato.** Sia $f$ una funzione continua sull'intervallo chiuso e limitato $[a,b]$ e derivabile sull'intervallo aperto $(a,b)$. Allora esiste almeno un punto $c \in (a,b)$ tale che

$$\frac{f(b)-f(a)}{b-a} = f'(c).$$

**Interpretazione geometrica.** Il primo membro è il coefficiente angolare della retta secante che congiunge i punti $\big(a,f(a)\big)$ e $\big(b,f(b)\big)$ del grafico; il secondo membro è il coefficiente angolare della retta tangente al grafico nel punto di ascissa $c$. Il teorema afferma dunque che esiste almeno un punto interno all'intervallo in cui la **tangente è parallela alla secante** agli estremi.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="250.735" height="382.205" viewBox="-72 -72 188.051 286.654"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-72.07 200.573H102.8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M100.92 198.173c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-62.68" y="200.573" stroke="none" font-family="cmmi10" font-size="10" transform="translate(169.413 2.153)">x</text><path fill="none" d="M-62.68 209.963V88.3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-65.08 90.18c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-62.68" y="200.573" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -118.151)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-43.901 179.916 2.121-1.323 2.122-1.424 2.122-1.524 2.122-1.626 2.122-1.727 2.122-1.827 2.122-1.927 2.121-2.028 2.122-2.13 2.122-2.23 2.122-2.33 2.122-2.43 2.122-2.533 2.122-2.633 2.121-2.732 2.122-2.834 2.122-2.935 2.122-3.035 2.122-3.137 2.122-3.236 2.122-3.337 2.121-3.438L4.901 124l2.122-3.639 2.122-3.74 2.122-3.841 2.122-3.942 2.122-4.042 2.121-4.143 2.122-4.243 2.122-4.345 2.122-4.445 2.122-4.545 2.122-4.647 2.122-4.747 2.121-4.848 2.122-4.949 2.122-5.048 2.122-5.152 2.122-5.25 2.122-5.351 2.122-5.453 2.121-5.552 2.122-5.653 2.122-5.754 2.122-5.855 2.122-5.956 2.122-6.056 2.122-6.156L62.19-9.61l2.122-6.358 2.122-6.46 2.122-6.56 2.122-6.66L72.8-42.41l2.121-6.862 2.122-6.963 2.122-7.062 2.122-7.165"/><path stroke="none" d="M-42.139 179.914a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0M83.07100000000001-70.51a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><path fill="none" stroke="red" stroke-width=".8" d="M-56.42 200.661 90.68-43.085"/><path stroke="none" d="M20.466 98.526a1.76 1.76 0 1 0-3.52 0 1.76 1.76 0 0 0 3.52 0m-1.76 0"/><path fill="none" stroke="red" stroke-dasharray="3.0,3.0" stroke-width=".8" d="M-18.863 187.503 56.253 63.037"/><path fill="none" stroke-dasharray="0.4,2.0" d="m-43.901 200.573.002-20.66M81.291 200.573l.02-271.083M18.695 200.573l.011-102.047"/><text x="-62.68" y="200.573" stroke="none" font-family="cmmi10" font-size="10" transform="translate(16.136 7.839)">a</text><text x="-62.68" y="200.573" stroke="none" font-family="cmmi10" font-size="10" transform="translate(141.826 10.477)">b</text><text x="-62.68" y="200.573" stroke="none" font-family="cmmi10" font-size="10" transform="translate(79.212 7.839)">c</text></g></svg>
</figure>

## Legame con il teorema di Rolle

Il teorema di Rolle si ottiene dal teorema di Lagrange aggiungendo alle ipotesi la condizione $f(a)=f(b)$.

**Teorema di Rolle.** Se $f$ è continua su $[a,b]$, derivabile su $(a,b)$ e inoltre $f(a)=f(b)$, allora esiste almeno un punto $c \in (a,b)$ in cui la derivata prima si annulla, cioè $f'(c)=0$.

Il legame è immediato: nell'ipotesi aggiuntiva $f(a)=f(b)$ il rapporto incrementale agli estremi vale

$$f'(c)=\frac{f(b)-f(a)}{b-a}=\frac{0}{b-a}=0,$$

quindi la tesi di Rolle è il caso particolare della tesi di Lagrange quando la secante è orizzontale. In questo senso il teorema di Rolle è un **corollario** del teorema di Lagrange, mentre il teorema di Lagrange può essere visto come una **generalizzazione** del teorema di Rolle a estremi con ordinate qualsiasi.

## Implicazioni sulla monotonia

Dal teorema di Lagrange discende il criterio che lega il segno della derivata prima alla crescenza o decrescenza di una funzione.

**Criterio di monotonia.** Nelle ipotesi del teorema di Lagrange, se in $(a,b)$ risulta $f'(x)>0$ allora $f$ è crescente in $(a,b)$; se risulta $f'(x)<0$ allora $f$ è decrescente.

**Dimostrazione (caso $f'>0$).** Vogliamo mostrare che $f$ è crescente, cioè che, presi due punti qualsiasi $x_1, x_2$ dell'intervallo con $x_1 < x_2$, si ha $f(x_1) < f(x_2)$.

La funzione soddisfa le ipotesi del teorema di Lagrange sull'intervallo $[x_1, x_2] \subseteq (a,b)$: continua su $[x_1,x_2]$ e derivabile su $(x_1,x_2)$. Esiste quindi un punto $c$ compreso tra $x_1$ e $x_2$ tale che

$$\frac{f(x_2)-f(x_1)}{x_2-x_1} = f'(c).$$

Per ipotesi $f'(c)>0$; inoltre $x_2-x_1>0$ perché $x_1<x_2$. Dall'uguaglianza segue allora

$$f(x_2)-f(x_1) = f'(c)\,(x_2-x_1) > 0,$$

cioè $f(x_2) > f(x_1)$. Per l'arbitrarietà di $x_1$ e $x_2$ la funzione è crescente in $(a,b)$.

In modo del tutto analogo, se $f'(x)<0$ in $(a,b)$ si ottiene $f(x_2)-f(x_1)<0$, cioè $f$ è decrescente. Questo criterio è lo strumento con cui, nello studio di funzione, si determinano gli intervalli di crescenza e decrescenza a partire dal segno della derivata prima.

*Fonte:* [📄 PDF p.48](https://drive.google.com/file/d/1rPhDiY_ek9MnO2CgDPcFwEL4iWrppD7L/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
