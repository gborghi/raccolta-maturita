

**Quesito:** [[Quesiti/ques_2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49_2|2004 Americhe australe Suppletiva — Problema 2 e Quesiti — Quesito 2]] · **Prova:** [[Prove/2004_americhe_emisfero_australe_2004_sessione_suppletiv_problema2_49|2004 Americhe australe Suppletiva — Problema 2 e Quesiti]]

**Quesito.** Si enunci il teorema di Lagrange (o del valor medio); se ne illustri il significato geometrico, il legame con il teorema di Rolle e le implicazioni ai fini della determinazione del grafico di una funzione.

## Enunciato

Sia $f$ una funzione reale di variabile reale tale che:

- $f$ sia continua nell'intervallo chiuso e limitato $[a,b]$;
- $f$ sia derivabile nell'intervallo aperto $(a,b)$.

Allora esiste almeno un punto $c \in (a,b)$ tale che

$$f'(c) = \frac{f(b)-f(a)}{b-a}.$$

In altre parole, esiste almeno un punto interno all'intervallo in cui la derivata (cioè il coefficiente angolare della tangente) è uguale al rapporto incrementale calcolato sull'intero intervallo $[a,b]$.

## Significato geometrico

Il rapporto $\dfrac{f(b)-f(a)}{b-a}$ è il coefficiente angolare della retta secante che congiunge i punti $A=(a,f(a))$ e $B=(b,f(b))$ del grafico. Il teorema afferma dunque che esiste almeno un punto $c$ interno in cui la retta tangente al grafico è **parallela** alla secante $AB$.


<figure class="tikz-fig">
<svg xmlns="http://www.w3.org/2000/svg" width="290.286" height="225.587" viewBox="-72 -72 217.714 169.19"><g stroke="#000" stroke-miterlimit="10" stroke-width=".4"><path fill="none" d="M-66.306 83.11h198.769"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M130.583 80.71c.38 1.44 1.227 2.12 2.08 2.4-.853.28-1.7.96-2.08 2.4"/><text x="-66.306" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(202.702 2.153)">x</text><path fill="none" d="M-66.306 83.11V-58.754"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M-68.706-56.874c1.44-.38 2.12-1.227 2.4-2.08.28.853.96 1.7 2.4 2.08"/><text x="-66.306" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(-2.63 -147.741)">y</text><path fill="none" stroke="#00f" stroke-width=".8" d="m-37.853 14.823 2.41-1.653 2.411-1.589 2.411-1.534 2.411-1.482 2.41-1.436 2.412-1.394 2.41-1.355 2.411-1.32 2.411-1.287 2.411-1.256 2.411-1.228 2.41-1.201 2.412-1.176 2.41-1.152 2.411-1.131L.72-6.481l2.411-1.09 2.411-1.071 2.41-1.053 2.412-1.036 2.41-1.02 2.411-1.005 2.411-.99 2.411-.976 2.411-.962 2.41-.95 2.412-.936 2.41-.925 2.411-.913 2.411-.902 2.411-.891 2.411-.882 2.41-.87 2.412-.862 2.41-.852 2.411-.843 2.411-.834 2.411-.826 2.411-.817 2.41-.81 2.412-.801 2.41-.794 2.411-.787 2.411-.78 2.411-.772 2.411-.766 2.41-.76 2.412-.753 2.41-.746 2.411-.74 2.411-.735 2.411-.729 2.411-.723 2.41-.717 2.412-.713 2.41-.706 2.411-.701 2.411-.697 2.411-.691"/><path fill="none" stroke="red" stroke-width=".8" d="M-37.853 14.823 104.41-42.936"/><path fill="none" stroke="#090" stroke-width=".8" d="m-26.473 4.137 91.05-36.966"/><path stroke="none" d="M-36.253 14.823a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M106.00999999999999-42.936a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M19.798000000000002-14a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0m-1.6 0"/><path fill="none" stroke-dasharray="3.0,3.0" d="M-37.853 83.11V14.823M104.41 83.11V-42.936M18.198 83.11V-14"/><text x="-66.306" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(25.81 7.839)">a</text><text x="-66.306" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(168.57 10.477)">b</text><text x="-66.306" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(82.34 7.839)">c</text><text x="-66.306" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(17.42 -71.82)">A</text><text x="-66.306" y="83.11" stroke="none" font-family="cmmi10" font-size="10" transform="translate(159.097 -129.578)">B</text></g></svg>
</figure>

## Legame con il teorema di Rolle

Il teorema di Rolle è il caso particolare del teorema di Lagrange che si ottiene quando gli estremi hanno la stessa immagine, cioè $f(a)=f(b)$: in tal caso il rapporto incrementale è nullo e la tesi diventa

$$f'(c)=0,$$

ossia esiste un punto interno a tangente orizzontale.

Viceversa, il teorema di Lagrange si **dimostra** a partire da quello di Rolle. Si introduce la funzione ausiliaria

$$g(x)=f(x)-\frac{f(b)-f(a)}{b-a}\,(x-a),$$

ottenuta sottraendo a $f$ la retta secante. Essa è continua su $[a,b]$, derivabile su $(a,b)$ e soddisfa $g(a)=g(b)=f(a)$. Per il teorema di Rolle esiste allora $c\in(a,b)$ con $g'(c)=0$, cioè

$$f'(c)-\frac{f(b)-f(a)}{b-a}=0 \Rightarrow f'(c)=\frac{f(b)-f(a)}{b-a},$$

che è proprio la tesi di Lagrange.

## Implicazioni per lo studio del grafico

Dal teorema di Lagrange discendono i criteri fondamentali per la costruzione del grafico di una funzione. Se $f$ è continua su un intervallo $I$ e derivabile al suo interno, applicando il teorema a due punti qualsiasi $x_1<x_2$ di $I$ si ottiene

$$f(x_2)-f(x_1)=f'(c)\,(x_2-x_1),\qquad c\in(x_1,x_2),$$

da cui, a seconda del segno di $f'$:

- se $f'(x)>0$ su $I$, allora $f$ è **crescente** su $I$;
- se $f'(x)<0$ su $I$, allora $f$ è **decrescente** su $I$;
- se $f'(x)=0$ su tutto $I$, allora $f$ è **costante** su $I$.

Il segno della derivata prima permette quindi di individuare gli intervalli di monotonia e, ai passaggi da un segno all'altro, i punti di massimo e di minimo relativo, informazioni essenziali per tracciare il grafico della funzione.

*Fonte:* [📄 PDF p.52](https://drive.google.com/file/d/1eLt08L2v4ueTtfs2qAPJA0i6aYiFXjrg/view)

#maturita/soluzione #area/analisi #cluster/studio_di_funzione
